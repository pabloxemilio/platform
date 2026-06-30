// ============================================================
//  VORTEX SELF-HOSTED ENGINE  (own engine — nothing from outside)
//  Serves the mirrored real Turbo Games Vortex client and answers the game's
//  own API + Centrifugo itself, wired to the Supabase wallet + admin settings.
//   - POST /api/common/profile : validate the platform token → issue OUR session,
//     return the player's real wallet balance + currency.
//   - /api/games/{create,retrieve} + /api/bets/{place,cashout} : OUR engine —
//     symbol-slider outcome from vortexSettings RTP/coeffs/weights, debit on
//     place, credit on cashout, NO demo cap.
//   - /connection/websocket : OUR Centrifugo v1 handler — connect, subscribe
//     balance_ticket#<sub>, and push the wallet balance on every change.
//   - non-money boot APIs (settings/limits/rates/history/storage/freebets/
//     tournaments) + static assets are proxied/served so the client boots.
//  Outcome/protocol/state shapes captured live — see memory vortex-protocol.
//  Set VORTEX_OWN_ENGINE=0 to fall back to pure proxy (demo backend).
// ============================================================
const http = require('http');
const https = require('https');
const path = require('path');
const crypto = require('crypto');
const express = require('express');
const WebSocket = require('ws');
const { supabase } = require('../config/supabase');
const { debitWallet, creditWallet } = require('../services/wallet');
const { recordWager } = require('../services/wager');
const { getVortexSettings, refreshVortexSettings } = require('../services/vortexSettings');

const UPSTREAM = 'vortex.turbogames.io';
const MIRROR = path.join(__dirname, '../../public/vortex/mirror');
const LOG = process.env.VORTEX_PROXY_LOG === '1';
const ENGINE = process.env.VORTEX_OWN_ENGINE !== '0';   // default ON
const S = () => getVortexSettings();
const CCY = { PKR: '₨', INR: '₹', USD: '$', EUR: '€', GBP: '£', BDT: '৳', NPR: '₨', LKR: '₨', AED: 'د.إ', NGN: '₦', BRL: 'R$', PHP: '₱', IDR: 'Rp', VND: '₫', THB: '฿' };
const PROXY_RE = /^\/(api|universe|cms|edge-status|bets|freebets|tournaments|player|profile|settings|limits|rates|history|storage|leaderboard|league|like|unlike|play-of-the-day|translates|version|games?|connection)(\/|$)/;

const uuid = () => crypto.randomUUID();
const hex = (n) => crypto.randomBytes(n).toString('hex');
const sessions = new Map();   // sessionToken -> { userId, sub, currency, walletBal }
const subWs = new Map();      // sub -> centrifuge ws
const rounds = new Map();     // roundId -> { token, userId, amount, placed, cashed, outcome, state }
const userRound = new Map();  // userId -> active roundId

// ── upstream proxy (for boot APIs the client needs but we don't own) ──
// the client does jwtDecode(token) → token MUST be a JWT (signature unverified by the client)
function b64url(o) { return Buffer.from(JSON.stringify(o)).toString('base64url'); }
function makeJwt(payload) { const h = b64url({ alg: 'HS256', typ: 'JWT' }); const b = b64url(payload); const sig = crypto.createHmac('sha256', 'vtx-engine').update(h + '.' + b).digest('base64url'); return `${h}.${b}.${sig}`; }

function proxyHttp(req, res) {
  const headers = { ...req.headers, host: UPSTREAM, origin: `https://${UPSTREAM}`, referer: `https://${UPSTREAM}/` };
  delete headers['accept-encoding'];
  // proxied boot APIs are authenticated upstream → swap our engine token for the demo token
  const s = sessions.get((req.headers.authorization || '').trim());
  if (s && s.demoToken) headers.authorization = s.demoToken;
  const up = https.request({ host: UPSTREAM, port: 443, method: req.method, path: req.originalUrl, headers }, (r) => {
    const h = { ...r.headers }; delete h['content-encoding']; delete h['transfer-encoding'];
    res.writeHead(r.statusCode || 502, h); r.pipe(res);
  });
  up.on('error', (e) => { try { res.writeHead(502); res.end('vortex proxy error: ' + e.message); } catch {} });
  req.pipe(up);
}
function upstreamPost(urlPath, bodyObj) {
  return new Promise((resolve, reject) => {
    const b = Buffer.from(JSON.stringify(bodyObj));
    const r = https.request({ host: UPSTREAM, port: 443, method: 'POST', path: urlPath, headers: { 'content-type': 'application/json', 'content-length': b.length, origin: `https://${UPSTREAM}` } }, (x) => { const c = []; x.on('data', (d) => c.push(d)); x.on('end', () => { try { resolve(JSON.parse(Buffer.concat(c).toString())); } catch { resolve({}); } }); });
    r.on('error', reject); r.write(b); r.end();
  });
}
const bufferBody = (req) => new Promise((resolve) => { const c = []; req.on('data', (x) => c.push(x)); req.on('end', () => resolve(Buffer.concat(c))); });

async function validatePlatform(token) {
  try {
    if (!token) return null;
    const { data } = await supabase.auth.getUser(token);
    if (!data?.user) return null;
    const { data: p } = await supabase.from('users').select('*').eq('id', data.user.id).single();
    if (!p) return null;
    const { data: w } = await supabase.from('wallets').select('main_balance').eq('user_id', p.id).single();
    return { id: p.id, currency: (p.currency || 'PKR').toUpperCase(), balance: parseFloat(w?.main_balance || 0) };
  } catch { return null; }
}

// ── engine: press-your-luck climb (HOLD TO SPIN raises the multiplier, CASH OUT
//    collects, a bust loses). RTP-tuned via a single crash draw; admin-controllable. ──
const SLOT = { Symbol3: 0, Symbol2: 1, Symbol1: 2 };   // collection order [S3,S2,S1]
function buildLadder() {
  const c = S().coeffs;
  const items = [];
  [['Symbol1', c.Symbol1], ['Symbol2', c.Symbol2], ['Symbol3', c.Symbol3]].forEach(([s, arr]) => (arr || []).forEach((m) => { if (m > 1) items.push({ m: +m, s }); }));
  items.sort((a, b) => a.m - b.m);
  const seen = new Set(); const ladder = [];
  for (const it of items) { if (!seen.has(it.m)) { seen.add(it.m); ladder.push(it); } }
  return ladder.length ? ladder : [{ m: 1.55, s: 'Symbol1' }];
}
// the multiplier the round busts AT — RTP-correct single draw (classic crash curve)
function pickBust() {
  const cfg = S();
  if (cfg.forceResult === 'win') return cfg.maxCoef * 10;     // effectively never busts
  if (cfg.forceResult === 'bust') return 1;                   // busts on the first step
  if (Math.random() < cfg.instantBust) return 1;
  const x = cfg.rtp / (1 - Math.random());
  return Math.max(1.01, Math.min(x, cfg.maxCoef));
}
function climbState(round) {
  const coll = round.coll; const mult = round.mult; const sym = round.symbol;
  return { mask: '*' + coll.map((x) => (x ? 1 : 0)).join(''), multiplier: mult, bonusWin: 0, superBonus: false, collection: coll.slice(), symbol: sym, cashable: !round.busted && round.step > 0, closeable: true, initial: false, finished: round.cashed || round.busted };
}
function pushBalance(sub, bal, type) {
  const ws = subWs.get(sub); if (!ws || ws.readyState !== 1) return;
  // centrifuge v1 publication: result.data is the Publication { data: <payload> }
  try { ws.send(JSON.stringify({ result: { channel: `balance_ticket#${sub}`, data: { data: [Number(bal.toFixed(2)), uuid(), type || 'unknown', 0] } } })); } catch {}
}

async function handleProfile(req, res) {
  const buf = await bufferBody(req);
  let body = {}; try { body = JSON.parse(buf.toString()); } catch {}
  const user = await validatePlatform(body.token);
  // always mint a live demo session so the proxied boot APIs (settings/limits/rates/
  // tournaments/storage) are authenticated upstream
  let demo = {};
  try { demo = await upstreamPost('/api/common/profile', { token: '', cid: 'turbogames', gameId: body.gameId || 'vortex', visitorId: body.visitorId || ('plat-' + hex(4)) }); } catch {}
  if (!user) return res.status(200).json(demo);   // no valid platform token → pure demo
  const sub = 'av@' + user.id;
  const sid = uuid();
  const payload = { customerId: 0, subPartnerId: '', id: String(user.id), displayName: 'Player', sub, token: body.token || '', currency: user.currency.toLowerCase(), isTest: false, customerPlayerId: String(user.id), sid, iat: Math.floor(Date.now() / 1000) };
  const token = makeJwt(payload);
  sessions.set(token, { userId: user.id, sub, currency: user.currency, walletBal: user.balance, demoToken: demo.token });
  if (LOG) console.log(`[VTX engine] profile → user ${user.id} bal=${user.balance} ${user.currency}`);
  res.json({
    id: String(user.id), playerName: 'Player', playerDiscriminator: String(user.id).slice(-4), sub,
    isTest: false, balance: user.balance, currency: user.currency.toLowerCase(), currencySign: CCY[user.currency] || '₨',
    rounding: 2, availableFreebets: false, externalToken: body.token || '', token, freebetsVerified: false,
    freebetsType: null, splitTest: null, country: 'PK', sid, storage: {}, storiesNew: [],
  });
}
function sess(req) { return sessions.get((req.headers.authorization || '').trim()); }

async function handleCreate(req, res) {
  const s = sess(req); if (!s) return res.status(401).json({ message: 'Unauthorized' });
  const buf = await bufferBody(req); try { JSON.parse(buf.toString()); } catch {}
  const roundId = uuid();
  const ladder = buildLadder();
  const round = { token: (req.headers.authorization || '').trim(), userId: s.userId, amount: 0, placed: false, cashed: false, busted: false, step: 0, mult: 0, symbol: ladder[0].s, coll: [0, 0, 0], ladder, bustAt: pickBust(), win: 0 };
  round.state = { collection: [0, 0, 0], symbol: round.symbol, cashable: false, initial: true, amount: null };
  rounds.set(roundId, round);
  userRound.set(s.userId, roundId);
  res.json({ roundId, hash: hex(32), rtp: Math.round(S().rtp * 100), state: round.state });
}
function handleRetrieve(req, res) {
  const s = sess(req); if (!s) return res.status(401).json({ message: 'Unauthorized' });
  const rid = userRound.get(s.userId); const round = rid && rounds.get(rid);
  // resume an in-progress climb so the client keeps advancing the SAME round
  if (round && round.placed && !round.cashed && !round.busted) return res.json({ roundId: rid, hash: hex(32), rtp: Math.round(S().rtp * 100), state: climbState(round) });
  res.status(400).json({ message: 'invalid params' });
}
const rid = (req, b, s) => (rounds.get(b.roundId) ? b.roundId : userRound.get(s.userId));
async function handlePlace(req, res) {
  const s = sess(req); if (!s) return res.status(401).json({ message: 'Unauthorized' });
  const buf = await bufferBody(req); let b = {}; try { b = JSON.parse(buf.toString()); } catch {}
  const cfg = S();
  const round = rounds.get(b.roundId) || rounds.get(userRound.get(s.userId));
  if (!round || round.userId !== s.userId) return res.status(400).json({ message: 'invalid round' });
  if (round.cashed || round.busted) return res.json({ hash: hex(32), roundId: rid(req, b, s), freebetsId: null, win: round.win || 0, multiplier: round.mult, balance: s.walletBal, state: climbState(round) });
  if (!round.placed) {                                          // first HOLD = the bet
    const amount = Math.max(0, Number(b.amount) || 0);
    if (amount < cfg.minBet || amount > cfg.maxBet) return res.status(422).json({ isSuccessful: false, errorMessage: 'invalid amount' });
    try { const d = await debitWallet(s.userId, amount, 'bet', `Vortex bet`); s.walletBal = parseFloat(d.new_balance); }
    catch { return res.status(422).json({ isSuccessful: false, errorMessage: 'insufficient balance' }); }
    recordWager(s.userId, amount).catch(() => {});
    round.placed = true; round.amount = amount;
    pushBalance(s.sub, s.walletBal, 'bet');
  }
  // advance one rung — RTP-exact per-rung survival: P(reach rung k)=RTP/v_k → cashing at any rung returns RTP
  const lad = round.ladder; const k = round.step; const next = lad[k];
  let p; if (cfg.forceResult === 'win') p = 1; else if (cfg.forceResult === 'bust') p = 0;
  else p = (k === 0) ? Math.min(0.999, cfg.rtp / lad[0].m) : lad[k - 1].m / lad[k].m;
  if (!next || Math.random() >= p) {
    round.busted = true; round.cashed = true; round.symbol = 'SymbolLoss'; round.win = 0;
    recordSession(s.userId, round.amount, 0);
    if (LOG) console.log(`[VTX engine] BUST step ${round.step} bet ${round.amount} bal=${s.walletBal}`);
  } else {
    round.step++; round.mult = next.m; round.symbol = next.s; round.coll[SLOT[next.s]]++;
    if (LOG) console.log(`[VTX engine] climb step ${round.step} → ${next.s} x${round.mult} bet ${round.amount}`);
  }
  res.json({ hash: hex(32), roundId: rid(req, b, s), freebetsId: null, win: round.win || 0, multiplier: round.mult, balance: s.walletBal, state: climbState(round) });
}
async function handleCashout(req, res) {
  const s = sess(req); if (!s) return res.status(401).json({ message: 'Unauthorized' });
  const buf = await bufferBody(req); let b = {}; try { b = JSON.parse(buf.toString()); } catch {}
  const round = rounds.get(b.roundId) || rounds.get(userRound.get(s.userId));
  if (!round || round.userId !== s.userId) return res.status(400).json({ message: 'invalid round' });
  if (round.cashed || round.busted || !round.placed || round.step < 1) {
    return res.json({ hash: hex(32), roundId: rid(req, b, s), win: round.win || 0, multiplier: round.mult, balance: s.walletBal, state: climbState(round) });
  }
  const win = +(round.amount * round.mult).toFixed(2);
  try { const c = await creditWallet(s.userId, win, 'win', `Vortex cashout x${round.mult}`); s.walletBal = parseFloat(c.new_balance); } catch {}
  round.cashed = true; round.win = win; recordSession(s.userId, round.amount, win); userRound.delete(s.userId);
  pushBalance(s.sub, s.walletBal, 'win');
  if (LOG) console.log(`[VTX engine] cashout x${round.mult} win=${win} bal=${s.walletBal}`);
  res.json({ hash: hex(32), roundId: rid(req, b, s), win, multiplier: round.mult, balance: s.walletBal, state: climbState(round) });
}
async function recordSession(userId, bet, win) {
  try { await supabase.from('game_sessions').insert({ user_id: userId, game_name: 'Vortex', bet_amount: bet, win_amount: win, result: win > 0 ? 'win' : 'loss' }); } catch {}
}

// ── our Centrifugo v1 handler (connect / subscribe / ping + balance push) ──
const wss = new WebSocket.Server({ noServer: true });
function ownWs(req, socket, head) {
  wss.handleUpgrade(req, socket, head, (ws) => {
    ws._sub = null;
    ws.on('message', (buf) => {
      for (const line of buf.toString().split('\n')) {
        if (!line.trim()) { try { ws.send('{}'); } catch {} continue; }   // ping
        let m; try { m = JSON.parse(line); } catch { continue; }
        if (m.id && (!m.method || m.method === 0) && m.params) {            // connect
          const s = sessions.get((m.params.token || '').trim());
          if (s) { ws._sub = s.sub; subWs.set(s.sub, ws); }
          ws.send(JSON.stringify({ id: m.id, result: { client: uuid(), version: '4.1.5' } }));
        } else if (m.id && m.method === 1) {                                 // subscribe
          const ch = m.params && m.params.channel;
          if (ch && ch.startsWith('balance_ticket#')) { const sub = ch.slice('balance_ticket#'.length); ws._sub = sub; subWs.set(sub, ws); }
          ws.send(JSON.stringify({ id: m.id, result: {} }));
        } else if (m.id) {                                                   // ping/other
          ws.send(JSON.stringify({ id: m.id, result: {} }));
        }
      }
    });
    ws.on('close', () => { if (ws._sub && subWs.get(ws._sub) === ws) subWs.delete(ws._sub); });
    ws.on('error', () => {});
  });
}
function proxyWs(req, socket, head) {
  wss.handleUpgrade(req, socket, head, (client) => {
    const u = new WebSocket(`wss://${UPSTREAM}${req.url}`, { headers: { Origin: `https://${UPSTREAM}` } });
    const q = []; u.on('open', () => { q.forEach((m) => u.send(m)); q.length = 0; });
    client.on('message', (m) => (u.readyState === 1 ? u.send(m) : q.push(m)));
    u.on('message', (m) => { if (client.readyState === 1) client.send(m); });
    const bye = () => { try { client.close(); } catch {} try { u.close(); } catch {} };
    client.on('close', bye); u.on('close', bye); client.on('error', bye); u.on('error', bye);
  });
}

function start(port) {
  refreshVortexSettings().catch(() => {});
  const app = express();
  // OUR endpoints (wallet + engine) when ENGINE on
  app.post('/api/common/profile', (req, res) => handleProfile(req, res).catch((e) => res.status(500).json({ message: e.message })));
  if (ENGINE) {
    app.post('/api/games/create', (req, res) => handleCreate(req, res).catch((e) => res.status(500).json({ message: e.message })));
    app.post('/api/games/retrieve', (req, res) => handleRetrieve(req, res));
    app.post('/api/bets/place', (req, res) => handlePlace(req, res).catch((e) => res.status(500).json({ message: e.message })));
    app.post('/api/bets/cashout', (req, res) => handleCashout(req, res).catch((e) => res.status(500).json({ message: e.message })));
    app.get('/api/games/settings', (req, res) => { const c = S().coeffs; res.json({ Symbol3: [0, ...c.Symbol3], Symbol2: [0, ...c.Symbol2], Symbol1: [0, ...c.Symbol1] }); });
  }
  // everything else the client needs to boot → proxy upstream; static from mirror
  app.use((req, res, next) => { if (PROXY_RE.test(req.path)) return proxyHttp(req, res); next(); });
  app.use(express.static(MIRROR, { index: 'index.html', maxAge: 0, etag: false }));
  app.get('*', (req, res) => { if (path.extname(req.path)) return proxyHttp(req, res); res.sendFile(path.join(MIRROR, 'index.html')); });

  const srv = http.createServer(app);
  srv.on('upgrade', (req, socket, head) => {
    if (req.url && req.url.startsWith('/connection/websocket')) return ENGINE ? ownWs(req, socket, head) : proxyWs(req, socket, head);
    socket.destroy();
  });
  srv.listen(port, '0.0.0.0', () => console.log(`🌀 Vortex ${ENGINE ? 'OWN-ENGINE' : 'proxy'} host:  http://localhost:${port}/  (wallet + admin RTP)`));
  return srv;
}

module.exports = { start };
