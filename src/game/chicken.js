// ============================================================
//  CHICKEN ROAD 2 — game server, wired to the shared wallet.
//  Protocol reverse-engineered from a live inout.games demo session:
//   - socket.io (engine.io v4) at path /io, event name "gameService"
//   - actions: get-game-config, get-game-state, bet, step, withdraw
//   - the served client is the sprlbegaming wrapper, which AES-128-ECB
//     wraps every engine.io packet (key 2Aekk4Lm9dJlk3kD) — so we crypt here.
// ============================================================
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { WebSocketServer } = require('ws');
const { supabase } = require('../config/supabase');
const { debitWallet, creditWallet } = require('../services/wallet');
const { winRatio, capWin } = require('../services/gameSettings');

// The inout.games build uses PLAINTEXT socket.io (no encryption) — frames are
// engine.io packet strings sent as text. (The sprlbegaming wrapper AES-wraps them,
// but its deployment is missing chunks; we serve the complete inout build instead.)
const dec = (buf) => (typeof buf === 'string' ? buf : Buffer.from(buf).toString('utf8'));
const newSid = () => crypto.randomBytes(12).toString('base64').replace(/[+/=]/g, '').slice(0, 16);

// ---- exact published multiplier tables (RTP 0.955) ----
const COEFFS = {
  EASY: ['1.01','1.03','1.06','1.10','1.15','1.19','1.24','1.30','1.35','1.42','1.48','1.56','1.65','1.75','1.85','1.98','2.12','2.28','2.47','2.70','2.96','3.28','3.70','4.11','4.64','5.39','6.50','8.36','12.08','23.24'],
  MEDIUM: ['1.08','1.21','1.37','1.56','1.78','2.05','2.37','2.77','3.24','3.85','4.62','5.61','6.91','8.64','10.99','14.29','18.96','26.07','37.24','53.82','82.36','137.59','265.35','638.82','2457.00'],
  HARD: ['1.18','1.46','1.83','2.31','2.95','3.82','5.02','6.66','9.04','12.52','17.74','25.80','38.71','60.21','97.34','166.87','305.94','595.86','1283.03','3267.64','10898.54','62162.09'],
  DAREDEVIL: ['1.44','2.21','3.45','5.53','9.09','15.30','26.78','48.70','92.54','185.08','391.25','894.28','2235.72','6096.15','18960.33','72432.75','379632.82','3608855.25'],
};
const RTP = 0.955;
const fmt = (n) => Number(n).toFixed(2);

// per-currency bet limits (client reads betsConfig[currency])
const LIMITS = {
  USD: { betPresets: ['2', '3', '8', '20'], minBetAmount: '0.12', maxBetAmount: '200.00', maxWinAmount: '20000.00', defaultBetAmount: '3.00', decimalPlaces: 2 },
  INR: { betPresets: ['50', '100', '500', '2000'], minBetAmount: '10.00', maxBetAmount: '20000.00', maxWinAmount: '2000000.00', defaultBetAmount: '50.00', decimalPlaces: 2 },
  PKR: { betPresets: ['50', '100', '500', '2000'], minBetAmount: '10.00', maxBetAmount: '20000.00', maxWinAmount: '2000000.00', defaultBetAmount: '50.00', decimalPlaces: 2 },
};
const limitsFor = (cur) => LIMITS[cur] || LIMITS.USD;

// roll the car (collision) lanes for a round so the table yields the configured RTP.
// The house edge lives entirely in the first-lane survival, so the admin win ratio
// (default 0.955) cleanly tunes how often a player loses on the very first step.
function rollCollisions(diff) {
  const c = COEFFS[diff] || COEFFS.EASY;
  const rtp = winRatio(RTP);
  const cols = [];
  for (let n = 0; n < c.length; n++) {
    const survival = n === 0 ? rtp / parseFloat(c[0]) : parseFloat(c[n - 1]) / parseFloat(c[n]);
    if (Math.random() > survival) cols.push(n); // a car sits on lane n
  }
  return cols;
}
const firstCar = (cols) => (cols.length ? Math.min(...cols) : Infinity);

function send(ws, packet) { try { ws.send(packet); } catch {} } // plaintext text frame
function sendEvent(ws, name, ...args) { send(ws, '42' + JSON.stringify([name, ...args])); }
function sendAck(ws, id, ...args) { send(ws, '43' + id + JSON.stringify(args)); }

async function refreshBalance(ws) {
  const { data: w } = await supabase.from('wallets').select('main_balance').eq('user_id', ws._user.id).single();
  ws._balance = parseFloat(w?.main_balance || 0);
  return ws._balance;
}

// ---- REST: boot/auth (returns the jwt the socket auths with) ----
function registerRest(app) {
  const handler = async (req, res) => {
    // launch token: body.auth_token, Authorization header, or ?token=/?authToken=
    const launch = (req.body && req.body.auth_token) || (req.headers.authorization || '').replace(/^Bearer /, '')
      || req.query.token || req.query.authToken;
    let user = null;
    try { const { data } = await supabase.auth.getUser(launch); if (data?.user) { const { data: p } = await supabase.from('users').select('*').eq('id', data.user.id).single(); user = p; } } catch {}
    res.set('country-code', 'PK');
    if (!user) return res.status(200).json({ data: null, error: 'auth' });
    const gameJwt = jwt.sign({ uid: user.id }, process.env.JWT_SECRET, { expiresIn: '6h' });
    // inout build reads response.data as the jwt (flat shape)
    res.json({ success: true, result: gameJwt, data: gameJwt, bonuses: [], isLobbyEnabled: false, isMusicEnabled: true, isSoundEnabled: true, isPromoCodeEnabled: false, difficultyLevel: null });
  };
  app.post('/api/chicken/auth', handler);
  app.get('/api/chicken/auth', handler);
  app.get('/api/game/chickenroad2/data', handler);
  app.post('/api/game/chickenroad2/auth', handler);
}

async function authFromQuery(q) {
  try {
    const token = q.get('Authorization') || q.get('token');
    if (!token) return null;
    const d = jwt.verify(token, process.env.JWT_SECRET);
    if (!d || !d.uid) return null;
    const { data: p } = await supabase.from('users').select('*').eq('id', d.uid).single();
    if (!p || p.status === 'blocked' || p.status === 'suspended') return null;
    const { data: w } = await supabase.from('wallets').select('main_balance').eq('user_id', p.id).single();
    return { id: p.id, username: p.username, currency: p.currency || 'PKR', balance: parseFloat(w?.main_balance || 0) };
  } catch { return null; }
}

function attachWs(server) {
  // noServer + path-routed upgrade so multiple game WS servers coexist on one HTTP
  // server (a {server,path} WebSocketServer would 400-abort other games' upgrades).
  const wss = new WebSocketServer({ noServer: true });
  server.on('upgrade', (req, socket, head) => {
    let pathname; try { pathname = new URL(req.url, 'http://x').pathname; } catch { return; }
    if (pathname === '/io/' || pathname === '/io') {
      wss.handleUpgrade(req, socket, head, (ws) => wss.emit('connection', ws, req));
    }
  });
  wss.on('connection', async (ws, req) => {
    const q = new URL(req.url, 'http://localhost').searchParams;
    const user = await authFromQuery(q);
    if (!user) { try { ws.close(4001, 'auth'); } catch {} return; }
    ws._user = user;
    ws._balance = user.balance;
    ws._round = null;
    ws._sid = newSid();

    send(ws, '0' + JSON.stringify({ sid: ws._sid, upgrades: [], pingInterval: 25000, pingTimeout: 20000, maxPayload: 1000000 }));
    ws._ping = setInterval(() => send(ws, '2'), 25000);

    ws.on('message', async (buf) => {
      let s; try { s = dec(Buffer.isBuffer(buf) ? buf : Buffer.from(buf)); } catch { return; }
      if (s === '3') return;                       // pong
      if (s === '2') { send(ws, '3'); return; }
      if (s.startsWith('40')) {                    // socket.io CONNECT
        send(ws, '40' + JSON.stringify({ sid: ws._sid }));
        return onConnected(ws);
      }
      if (s.startsWith('41')) return;
      const m = s.match(/^42(\d*)(\[[\s\S]*\])$/);
      if (!m) return;
      let arr; try { arr = JSON.parse(m[2]); } catch { return; }
      await handleEvent(ws, m[1], arr);
    });
    ws.on('close', () => clearInterval(ws._ping));
    ws.on('error', () => clearInterval(ws._ping));
  });
  console.log('🐔 ChickenRoad game server attached at /io/');
}

function onConnected(ws) {
  const cur = ws._user.currency;
  sendEvent(ws, 'onBalanceChange', { currency: cur, balance: fmt(ws._balance) });
  // send config/ranges for every supported currency so the client finds whichever
  // it launched with (avoids a currency mismatch leaving the bet UI empty)
  const ranges = {}, configs = {};
  for (const c of Object.keys(LIMITS)) { ranges[c] = [LIMITS[c].minBetAmount, LIMITS[c].maxBetAmount]; configs[c] = LIMITS[c]; }
  sendEvent(ws, 'betsRanges', ranges);
  sendEvent(ws, 'betsConfig', configs);
  sendEvent(ws, 'myData', { userId: ws._user.id, nickname: ws._user.username, gameAvatar: null });
  sendEvent(ws, 'currencies', CURRENCIES); // FX map the client expects before it starts
}

// FX rates (USD base) — the client reads this map; values are illustrative.
const CURRENCIES = { USD: 1, EUR: 0.92, GBP: 0.79, INR: 94.46, PKR: 278.28, AED: 3.67, SAR: 3.75, BDT: 123.04, NGN: 1378.8, BRL: 5.18, RUB: 71.09, TRY: 46.63, CAD: 1.42, AUD: 1.45, JPY: 161.75, CNY: 7.18, KRW: 1535.72, IDR: 17920.34, PHP: 61.3, VND: 26298.86, THB: 33.39, MYR: 4.09, ZAR: 16.47, EGP: 49.53, KES: 129.49, GHS: 11.27, MXN: 17.5, ARS: 1477.41, CLP: 922.59, COP: 3439.63, PEN: 3.42, UAH: 44.87, PLN: 3.77, RON: 4.6, HUF: 310.84, CZK: 21.31, SEK: 9.74, NOK: 9.93, DKK: 6.56, CHF: 0.81, NZD: 1.77, SGD: 1.29, HKD: 7.84, ILS: 3.0, QAR: 3.64, KWD: 0.31, BHD: 0.38, OMR: 0.39, JOD: 0.71, LKR: 336.19, NPR: 151.21, MMK: 2099.64, KHR: 4020.18, TZS: 2628.84, UGX: 3671.68, USDT: 1, USDC: 1 };

function configPayload(cur) {
  const lim = limitsFor(cur);
  return {
    betConfig: { minBetAmount: lim.minBetAmount, maxBetAmount: lim.maxBetAmount, maxWinAmount: lim.maxWinAmount, defaultBetAmount: lim.defaultBetAmount, betPresets: lim.betPresets, decimalPlaces: String(lim.decimalPlaces), currency: cur },
    coefficients: COEFFS,
    lastWin: { username: 'Lucky Player', winAmount: '500.00', currency: cur },
  };
}

async function handleEvent(ws, ackId, arr) {
  const [name, data] = arr;
  if (name !== 'gameService' || !data) { if (ackId) sendAck(ws, ackId, 'null'); return; }
  const cur = ws._user.currency;
  const action = data.action;
  const payload = data.payload || {};

  if (action === 'get-game-config') { sendAck(ws, ackId, configPayload(cur)); return; }

  if (action === 'get-game-state') {
    if (!ws._round) { sendAck(ws, ackId, 'null'); return; }
    const r = ws._round;
    const coeff = r.line >= 0 ? COEFFS[r.difficulty][r.line] : '0.00';
    sendAck(ws, ackId, { isFinished: false, coeff, winAmount: fmt(r.amount * parseFloat(coeff || 0)), difficulty: r.difficulty, lineNumber: r.line, betAmount: fmt(r.amount), currency: cur });
    return;
  }

  if (action === 'bet') {
    if (ws._round) { sendAck(ws, ackId, { error: 'round in progress' }); return; }
    const amount = Math.round((parseFloat(payload.betAmount) || 0) * 100) / 100;
    const difficulty = COEFFS[payload.difficulty] ? payload.difficulty : 'EASY';
    if (amount <= 0) { sendAck(ws, ackId, { error: 'bad amount' }); return; }
    try {
      const r = await debitWallet(ws._user.id, amount, 'bet', `ChickenRoad bet (${difficulty})`);
      ws._balance = parseFloat(r.new_balance);
    } catch (e) { sendAck(ws, ackId, { error: 'insufficient' }); return; }
    ws._round = { amount, difficulty, collisions: rollCollisions(difficulty), line: -1 };
    sendEvent(ws, 'onBalanceChange', { currency: cur, balance: fmt(ws._balance) });
    sendAck(ws, ackId, { isFinished: false, coeff: '0.00', winAmount: '0', difficulty, betAmount: fmt(amount), currency: cur });
    return;
  }

  if (action === 'step') {
    const r = ws._round;
    if (!r) { sendAck(ws, ackId, { error: 'no round' }); return; }
    const N = parseInt(payload.lineNumber, 10);
    if (isNaN(N) || N < 0 || N >= COEFFS[r.difficulty].length) { sendAck(ws, ackId, { error: 'bad line' }); return; }
    if (r.collisions.includes(N)) {                // stepped onto a car -> lose
      const collisions = r.collisions; ws._round = null;
      sendAck(ws, ackId, { isFinished: true, isWin: false, coeff: COEFFS[r.difficulty][N], winAmount: '0', difficulty: r.difficulty, lineNumber: N, collisionPositions: collisions, betAmount: fmt(r.amount), currency: cur });
      return;
    }
    r.line = N;
    const coeff = COEFFS[r.difficulty][N];
    sendAck(ws, ackId, { isFinished: false, coeff, winAmount: fmt(r.amount * parseFloat(coeff)), difficulty: r.difficulty, lineNumber: N, betAmount: fmt(r.amount), currency: cur });
    return;
  }

  if (action === 'withdraw') {
    const r = ws._round;
    if (!r || r.line < 0) { sendAck(ws, ackId, { error: 'nothing to cash out' }); return; }
    const coeff = COEFFS[r.difficulty][r.line];
    // cap the payout at the admin's per-round max-win (protects house from a lucky whale)
    const win = capWin(Math.round(r.amount * parseFloat(coeff) * 100) / 100);
    try { const cr = await creditWallet(ws._user.id, win, 'win', `ChickenRoad win @${coeff}x`); ws._balance = parseFloat(cr.new_balance); } catch {}
    const { collisions, line, difficulty, amount } = r; ws._round = null;
    sendEvent(ws, 'onBalanceChange', { currency: cur, balance: fmt(ws._balance) });
    sendAck(ws, ackId, { isFinished: true, isWin: true, coeff, winAmount: fmt(win), difficulty, lineNumber: line, collisionPositions: collisions, betAmount: fmt(amount), currency: cur });
    return;
  }

  // changeGameAvatar / get-history / etc — generic ack so nothing hangs
  if (ackId) sendAck(ws, ackId, { ok: true });
}

function attach(server, app) { registerRest(app); attachWs(server); }
module.exports = { attach, registerRest, attachWs };
