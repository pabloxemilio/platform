// ============================================================
//  VORTEX — symbol-slider multiplier cash-out game (wired to the wallet)
//  - WebSocket at /api/game/vortex  (plain JSON frames)
//  - one shared round: betting window → the vortex spins and the coefficient
//    climbs through the elemental symbols (Symbol1/2/3) until it busts
//    (SymbolLoss). Cash out before the bust to win coef × bet.
//  - each player bets their own Supabase wallet (debit on bet, credit on
//    cash-out). Optional auto-cash-out target. EVERYTHING is admin-controllable
//    via vortexSettings (RTP, timing, limits, chips, coeffs, weights, currency).
//  Mechanics mirror the real turbogfast Vortex (captured). See memory vortex-protocol.
// ============================================================
const { WebSocketServer } = require('ws');
const { supabase } = require('../config/supabase');
const { debitWallet, creditWallet } = require('../services/wallet');
const { recordWager } = require('../services/wager');
const { capWin } = require('../services/gameSettings');
const { getVortexSettings, refreshVortexSettings } = require('../services/vortexSettings');

const S = () => getVortexSettings();
const HISTORY_MAX = 50;

// ── shared round state ──
const clients = new Set();
const history = [];               // recent bust coefficients (numbers), newest last
let rid = 90000;
let phase = 'betting';            // betting | flying | crashed
let coef = 1.00;
let crashAt = 2.00;
let curSymbol = 'Symbol1';
let timeLeft = 6;
let onlineBase = 90 + (Math.random() * 160 | 0);
let loopTimer = null, tickTimer = null, cdTimer = null;

// ── frame helpers ──
function send(ws, act, data) { try { ws.send(JSON.stringify({ act, data })); } catch {} }
function broadcast(act, data) { const f = JSON.stringify({ act, data }); for (const ws of clients) { try { ws.send(f); } catch {} } }
const fix2 = (n) => Math.round(n * 100) / 100;
function online() { const cfg = S(); const span = Math.max(1, cfg.onlineMax - cfg.onlineMin); return cfg.onlineMin + (Math.random() * span | 0); }

// which elemental symbol a given multiplier maps to (for the slider visual)
function symbolForCoef(x) {
  const c = S().coeffs;
  if (x >= (c.Symbol3[0] || 4)) return 'Symbol3';   // fire / high tier
  if (x >= (c.Symbol2[0] || 2.5)) return 'Symbol2'; // water / mid tier
  return 'Symbol1';                                  // earth / low tier
}

// bust point — admin RTP-tunable. Classic single-draw crash curve so effective RTP
// is exactly `rtp` for any cash-out target, plus an instant-bust chance + force mode.
function pickCrash() {
  const cfg = S();
  if (cfg.forceResult === 'bust') return 1.00;
  if (cfg.forceResult === 'win') return cfg.maxCoef;
  if (Math.random() < cfg.instantBust) return 1.00;
  const x = cfg.rtp / (1 - Math.random());
  if (x < 1.01) return 1.00;
  return Math.min(fix2(x), cfg.maxCoef);
}
// coefficient curve over elapsed seconds (smooth accelerating climb)
function curveAt(t) { const cfg = S(); return fix2(Math.pow(Math.E, cfg.curveSpeed * t * (1 + t * cfg.curveAccel))); }

// ── round lifecycle ──
function startBetting() {
  const cfg = S();
  rid++;
  phase = 'betting';
  coef = 1.00; curSymbol = 'Symbol1';
  timeLeft = Math.round(cfg.betSeconds);
  if (Math.random() < 0.3) onlineBase = Math.max(cfg.onlineMin, onlineBase + (Math.random() * 40 | 0) - 20);
  for (const ws of clients) ws._bet = null;
  broadcast('round', { rid, phase, timeLeft, online: online(), history: history.slice(-HISTORY_MAX), config: clientConfig() });

  cdTimer = setInterval(() => {
    timeLeft--;
    broadcast('countdown', { timeLeft: Math.max(timeLeft, 0), online: online() });
    if (timeLeft <= 0) { clearInterval(cdTimer); fly(); }
  }, 1000);
}

function fly() {
  const cfg = S();
  phase = 'flying';
  crashAt = pickCrash();
  coef = 1.00;
  for (const ws of clients) if (ws._bet && ws._bet.rid === rid) ws._bet.active = true;
  broadcast('start', { rid });

  const t0 = Date.now();
  tickTimer = setInterval(async () => {
    const t = (Date.now() - t0) / 1000;
    coef = curveAt(t);
    if (coef >= crashAt) {
      coef = crashAt; curSymbol = 'SymbolLoss';
      clearInterval(tickTimer);
      broadcast('coef', { x: coef, symbol: 'SymbolLoss' });
      return crash();
    }
    curSymbol = symbolForCoef(coef);
    broadcast('coef', { x: coef, symbol: curSymbol });
    // auto cash-out
    for (const ws of clients) {
      const b = ws._bet;
      if (b && b.active && !b.cashed && b.auto > 1 && coef >= b.auto) {
        await cashoutPlayer(ws, b.auto).catch(() => {});
      }
    }
  }, cfg.tickMs);
}

function crash() {
  phase = 'crashed';
  history.push(crashAt);
  if (history.length > HISTORY_MAX) history.shift();
  broadcast('crash', { rid, x: crashAt, symbol: 'SymbolLoss', history: history.slice(-HISTORY_MAX) });
  for (const ws of clients) {
    const b = ws._bet;
    if (b && b.active && !b.cashed) recordSession(ws._user.id, b.amount, 0).catch(() => {});
    ws._bet = null;
  }
  loopTimer = setTimeout(startBetting, Math.round(S().resultSeconds * 1000));
}

async function cashoutPlayer(ws, atCoef) {
  const b = ws._bet;
  if (!b || !b.active || b.cashed || phase !== 'flying') return false;
  b.cashed = true;
  let win = fix2(b.amount * atCoef);
  const mw = S().maxWin;
  win = capWin(mw > 0 ? Math.min(win, mw) : win);
  try {
    const r = await creditWallet(ws._user.id, win, 'win', `Vortex cash-out @${atCoef}x (#${rid})`);
    ws._balance = parseFloat(r.new_balance);
    recordSession(ws._user.id, b.amount, win).catch(() => {});
    send(ws, 'cashout_ok', { x: atCoef, win, balance: ws._balance });
  } catch { b.cashed = false; return false; }
  return true;
}

async function recordSession(userId, bet, win) {
  try {
    await supabase.from('game_sessions').insert({
      user_id: userId, game_name: 'Vortex',
      bet_amount: bet, win_amount: win, result: win > 0 ? 'win' : 'loss',
    });
  } catch {}
}

// ── auth: validate the Supabase access token from the WS query ──
async function authFromReq(req) {
  try {
    const url = new URL(req.url, 'http://localhost');
    const token = url.searchParams.get('token');
    if (!token) return null;
    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data?.user) return null;
    const { data: profile } = await supabase.from('users').select('*').eq('id', data.user.id).single();
    if (!profile || profile.status === 'blocked' || profile.status === 'suspended') return null;
    const { data: wallet } = await supabase.from('wallets').select('main_balance').eq('user_id', profile.id).single();
    return { id: profile.id, username: profile.username, balance: parseFloat(wallet?.main_balance || 0), currency: (profile.currency || '').toUpperCase() };
  } catch { return null; }
}

const CCY_SYMBOL = { PKR: '₨', INR: '₹', USD: '$', EUR: '€', GBP: '£', BDT: '৳', NPR: '₨', LKR: '₨', AED: 'د.إ', NGN: '₦', BRL: 'R$', PHP: '₱', IDR: 'Rp', VND: '₫', THB: '฿' };

// the player's real wallet currency wins; admin vtx_currency is only the fallback
function userCcy(ws) {
  const cfg = S();
  const code = (ws && ws._user && ws._user.currency) || cfg.currency;
  return { currency: code, currencySymbol: CCY_SYMBOL[code] || cfg.currencySymbol };
}

function clientConfig(ws) {
  const cfg = S(); const cc = userCcy(ws);
  return {
    chips: cfg.chips, defaultChip: cfg.defaultChip, minBet: cfg.minBet, maxBet: cfg.maxBet,
    currency: cc.currency, currencySymbol: cc.currencySymbol, maxCoef: cfg.maxCoef,
    autoCashout: cfg.autoCashout, partialCashout: cfg.partialCashout, betSeconds: Math.round(cfg.betSeconds),
  };
}

function snapshot(ws) {
  const cfg = S(); const cc = userCcy(ws);
  return {
    uid: ws._user.id, username: ws._user.username, balance: ws._balance,
    config: clientConfig(ws),
    // backward-compat fields the current client reads:
    currency: cc.currency, limits: { chips: cfg.chips, min: cfg.minBet, max: cfg.maxBet },
    history: history.slice(-HISTORY_MAX),
    rid, phase, timeLeft: phase === 'betting' ? timeLeft : 0,
    coef: phase === 'flying' ? coef : 1.00, symbol: curSymbol,
    online: online(), bet: ws._bet ? { amount: ws._bet.amount, auto: ws._bet.auto, cashed: !!ws._bet.cashed } : null,
  };
}

function attach(server) {
  refreshVortexSettings().catch(() => {});
  const wss = new WebSocketServer({ noServer: true });
  server.on('upgrade', (req, socket, head) => {
    let pathname; try { pathname = new URL(req.url, 'http://x').pathname; } catch { return; }
    if (pathname === '/api/game/vortex') {
      wss.handleUpgrade(req, socket, head, (ws) => wss.emit('connection', ws, req));
    }
  });

  wss.on('connection', async (ws, req) => {
    const user = await authFromReq(req);
    if (!user) { try { ws.close(4001, 'auth required'); } catch {} return; }

    ws._user = user;
    ws._balance = user.balance;
    ws._bet = null;
    clients.add(ws);
    send(ws, 'init', snapshot(ws));

    ws.on('message', async (buf) => {
      let m; try { m = JSON.parse(buf.toString()); } catch { return; }
      const d = m.data || {};
      const uid = ws._user.id;
      const cfg = S();
      switch (m.act) {
        case 'ping': send(ws, 'pong', {}); break;

        case 'bet': {
          const amount = fix2(parseFloat(d.amount) || 0);
          const auto = (cfg.autoCashout && d.auto) ? Math.max(1.01, parseFloat(d.auto) || 0) : 0;
          if (phase !== 'betting') { send(ws, 'bet_err', { reason: 'closed' }); break; }
          if (ws._bet) { send(ws, 'bet_err', { reason: 'already' }); break; }
          if (amount < cfg.minBet || amount > cfg.maxBet) { send(ws, 'bet_err', { reason: 'invalid' }); break; }
          try {
            const r = await debitWallet(uid, amount, 'bet', `Vortex bet (#${rid})`);
            ws._balance = parseFloat(r.new_balance);
            ws._bet = { amount, auto, active: false, cashed: false, rid };
            recordWager(uid, amount).catch(() => {});
            send(ws, 'bet_ok', { amount, auto, balance: ws._balance });
          } catch (e) { send(ws, 'bet_err', { reason: 'insufficient' }); }
          break;
        }

        case 'cancel': {
          if (phase !== 'betting' || !ws._bet || ws._bet.active) { send(ws, 'bet_err', { reason: 'cannot' }); break; }
          const amt = ws._bet.amount;
          try {
            const r = await creditWallet(uid, amt, 'adjustment', 'Vortex bet cancelled');
            ws._balance = parseFloat(r.new_balance);
            ws._bet = null;
            send(ws, 'cancel_ok', { balance: ws._balance });
          } catch { send(ws, 'bet_err', { reason: 'cannot' }); }
          break;
        }

        case 'cashout': {
          // partial cashout: cash a fraction, leave the rest riding
          if (cfg.partialCashout && d.partial && ws._bet && ws._bet.active && !ws._bet.cashed) {
            const frac = Math.min(0.9, Math.max(0.1, parseFloat(d.partial) || 0.5));
            const part = fix2(ws._bet.amount * frac);
            const win = capWin(fix2(part * coef));
            try {
              const r = await creditWallet(uid, win, 'win', `Vortex partial cash-out @${coef}x (#${rid})`);
              ws._balance = parseFloat(r.new_balance);
              ws._bet.amount = fix2(ws._bet.amount - part);
              send(ws, 'cashout_partial', { x: coef, win, balance: ws._balance, remaining: ws._bet.amount });
            } catch { send(ws, 'cashout_err', {}); }
            break;
          }
          const ok = await cashoutPlayer(ws, coef);
          if (!ok) send(ws, 'cashout_err', {});
          break;
        }

        case 'sync': send(ws, 'init', snapshot(ws)); break;
        default: break;
      }
    });

    ws.on('close', () => clients.delete(ws));
    ws.on('error', () => clients.delete(ws));
  });

  startBetting();
  console.log('🌀 Vortex game server attached at /api/game/vortex (settings-driven)');
}

module.exports = { attach };
