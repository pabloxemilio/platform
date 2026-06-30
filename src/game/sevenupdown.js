// ============================================================
//  7 UP 7 DOWN — live dice game server (wired to the wallet)
//  - WebSocket at /api/game/sevenupdown  (plain JSON frames)
//  - one shared round for everyone; each player's bets hit their
//    own Supabase wallet (debit on bet, credit on win)
//  - two dice, bet the SUM:  7 DOWN (2–6) 2.3x | LUCKY 7 (=7) 5.7x | 7 UP (8–12) 2.3x
//    fair dice give ~95.8% RTP; the admin win-ratio lever steers it down.
//  - balance + currency are per-user (display-only currency)
// ============================================================
const { WebSocketServer } = require('ws');
const { supabase } = require('../config/supabase');
const { debitWallet, creditWallet } = require('../services/wallet');
const { recordWager } = require('../services/wager');
const { winRatio, capWin } = require('../services/gameSettings');

const MULT = { down: 2.3, up: 2.3, seven: 5.7 };
const BASE_RTP = 0.958;          // fair-dice RTP (max) → default = no steering
const BET_SECONDS = 15;
const ROLL_MS = 2600;            // dice-roll animation budget before settle
const RESULT_MS = 3200;
const HISTORY_MAX = 40;

const rollDie = () => 1 + (Math.random() * 6 | 0);
function rollDice() {
  const a = rollDie(), b = rollDie(), sum = a + b;
  return { a, b, sum, outcome: sum < 7 ? 'down' : sum > 7 ? 'up' : 'seven' };
}

// ── shared round state ──
const clients = new Set();
const history = [];               // ['down'|'up'|'seven', …] newest last
let rid = 70000;
let phase = 'betting';            // betting | locked | reveal
let timeLeft = BET_SECONDS;
let dice = null;                  // {a,b,sum,outcome} once rolled
let onlineBase = 100 + (Math.random() * 160 | 0);

let pools = { down: 0, up: 0, seven: 0 };
function freshSyntheticPools() {
  return {
    down: 800 + (Math.random() * 7000 | 0),
    up: 800 + (Math.random() * 7000 | 0),
    seven: 150 + (Math.random() * 1200 | 0),
  };
}

// ── frame helpers ──
function send(ws, act, data) { try { ws.send(JSON.stringify({ act, data })); } catch {} }
function broadcast(act, data) { const f = JSON.stringify({ act, data }); for (const ws of clients) { try { ws.send(f); } catch {} } }
const online = () => Math.max(1, onlineBase + (Math.random() * 24 | 0) - 12);

// gross returned to a player (stake included) for an outcome
function settleBets(bets, outcome) {
  const b = { down: bets.down || 0, up: bets.up || 0, seven: bets.seven || 0 };
  return Math.round(b[outcome] * MULT[outcome] * 100) / 100;
}

// pick the round result. Fair dice yield BASE_RTP; when the admin lowers the win
// ratio, a player who is "up" this round is more likely to lose — pulling the
// effective RTP toward the admin value.
function pickResult(realBets) {
  let res = rollDice();
  const totalBet = (realBets.down || 0) + (realBets.up || 0) + (realBets.seven || 0);
  if (totalBet > 0) {
    const ratio = winRatio(BASE_RTP);
    const biasProb = ratio < BASE_RTP ? Math.min(0.85, 1 - ratio / BASE_RTP) : 0;
    if (biasProb > 0 && settleBets(realBets, res.outcome) > totalBet && Math.random() < biasProb) {
      for (let i = 0; i < 6; i++) { const c = rollDice(); if (settleBets(realBets, c.outcome) <= totalBet) { res = c; break; } }
    }
  }
  return res;
}

function aggregateRealBets() {
  const agg = { down: 0, up: 0, seven: 0 };
  for (const ws of clients) { const b = ws._bets; if (b) { agg.down += b.down || 0; agg.up += b.up || 0; agg.seven += b.seven || 0; } }
  return agg;
}
function poolView() {
  const real = aggregateRealBets();
  return { down: Math.round(pools.down + real.down), up: Math.round(pools.up + real.up), seven: Math.round(pools.seven + real.seven) };
}

// ── round lifecycle ──
function startRound() {
  rid++;
  phase = 'betting';
  timeLeft = BET_SECONDS;
  dice = null;
  pools = freshSyntheticPools();
  if (Math.random() < 0.3) onlineBase = Math.max(50, onlineBase + (Math.random() * 40 | 0) - 20);
  for (const ws of clients) { ws._bets = { down: 0, up: 0, seven: 0 }; ws._stack = []; }
  broadcast('round', { rid, phase, timeLeft, online: online(), pools: poolView(), history: history.slice(-HISTORY_MAX) });

  const cd = setInterval(() => {
    timeLeft--;
    pools.down += Math.random() * 500 | 0;
    pools.up += Math.random() * 500 | 0;
    pools.seven += Math.random() * 100 | 0;
    broadcast('tick', { timeLeft: Math.max(timeLeft, 0), pools: poolView(), online: online() });
    if (timeLeft <= 0) { clearInterval(cd); lockAndRoll(); }
  }, 1000);
}

async function lockAndRoll() {
  phase = 'locked';
  broadcast('lock', { rid });

  dice = pickResult(aggregateRealBets());
  history.push(dice.outcome);
  if (history.length > HISTORY_MAX) history.shift();

  broadcast('roll', { rid, a: dice.a, b: dice.b, sum: dice.sum, outcome: dice.outcome });

  setTimeout(async () => {
    phase = 'reveal';
    for (const ws of clients) await settlePlayer(ws).catch(() => {});
    broadcast('road', { history: history.slice(-HISTORY_MAX), outcome: dice.outcome });
    setTimeout(startRound, RESULT_MS);
  }, ROLL_MS);
}

async function settlePlayer(ws) {
  const bets = ws._bets || { down: 0, up: 0, seven: 0 };
  const staked = (bets.down || 0) + (bets.up || 0) + (bets.seven || 0);
  if (staked <= 0) { send(ws, 'settle', { rid, outcome: dice.outcome, sum: dice.sum, a: dice.a, b: dice.b, win: 0, balance: ws._balance, bets }); return; }

  let win = capWin(settleBets(bets, dice.outcome));
  if (win > 0) {
    try { const r = await creditWallet(ws._user.id, win, 'win', `7Up7Down ${dice.outcome} win (#${rid})`); ws._balance = parseFloat(r.new_balance); } catch {}
  }
  recordSession(ws._user.id, staked, win).catch(() => {});
  ws._bets = { down: 0, up: 0, seven: 0 };
  ws._stack = [];
  send(ws, 'settle', { rid, outcome: dice.outcome, sum: dice.sum, a: dice.a, b: dice.b, win, balance: ws._balance, bets });
}

async function recordSession(userId, bet, win) {
  try {
    await supabase.from('game_sessions').insert({
      user_id: userId, game_name: '7 Up 7 Down',
      bet_amount: bet, win_amount: win, result: win > bet ? 'win' : 'loss',
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
    return { id: profile.id, username: profile.username, currency: profile.currency || 'PKR', balance: parseFloat(wallet?.main_balance || 0) };
  } catch { return null; }
}

const LIMITS = {
  USD: { chips: [1, 5, 10, 25, 100], min: 1, max: 500 },
  INR: { chips: [10, 50, 100, 500, 1000], min: 10, max: 50000 },
  PKR: { chips: [10, 50, 100, 500, 1000], min: 10, max: 50000 },
};
const limitsFor = (c) => LIMITS[c] || LIMITS.USD;

function attach(server) {
  const wss = new WebSocketServer({ noServer: true });
  server.on('upgrade', (req, socket, head) => {
    let pathname; try { pathname = new URL(req.url, 'http://x').pathname; } catch { return; }
    if (pathname === '/api/game/sevenupdown') {
      wss.handleUpgrade(req, socket, head, (ws) => wss.emit('connection', ws, req));
    }
  });

  wss.on('connection', async (ws, req) => {
    const user = await authFromReq(req);
    if (!user) { try { ws.close(4001, 'auth required'); } catch {} return; }

    ws._user = user;
    ws._balance = user.balance;
    ws._bets = { down: 0, up: 0, seven: 0 };
    ws._stack = [];
    clients.add(ws);

    send(ws, 'init', {
      uid: user.id, username: user.username, currency: user.currency, balance: ws._balance,
      limits: limitsFor(user.currency), mult: MULT, history: history.slice(-HISTORY_MAX),
      rid, phase, timeLeft: phase === 'betting' ? timeLeft : 0, pools: poolView(), online: online(),
      dice: dice || null,
    });

    ws.on('message', async (buf) => {
      let m; try { m = JSON.parse(buf.toString()); } catch { return; }
      const d = m.data || {};
      const uid = ws._user.id;
      switch (m.act) {
        case 'ping': send(ws, 'pong', {}); break;

        case 'bet': {
          const zone = ['down', 'up', 'seven'].includes(d.zone) ? d.zone : null;
          const amount = Math.round((parseFloat(d.amount) || 0) * 100) / 100;
          const lim = limitsFor(ws._user.currency);
          if (phase !== 'betting' || !zone || amount < lim.min) { send(ws, 'bet_err', { zone: d.zone, reason: phase !== 'betting' ? 'closed' : 'invalid' }); break; }
          if ((ws._bets[zone] + amount) > lim.max) { send(ws, 'bet_err', { zone, reason: 'limit' }); break; }
          try {
            const r = await debitWallet(uid, amount, 'bet', `7Up7Down bet ${zone} (#${rid})`);
            ws._balance = parseFloat(r.new_balance);
            ws._bets[zone] += amount;
            ws._stack.push({ zone, amount });
            recordWager(uid, amount).catch(() => {});
            send(ws, 'bet_ok', { zone, amount, bets: ws._bets, balance: ws._balance, pools: poolView() });
          } catch (e) { send(ws, 'bet_err', { zone, reason: 'insufficient' }); }
          break;
        }

        case 'undo': {
          if (phase !== 'betting' || !ws._stack.length) { send(ws, 'bet_err', { reason: 'nothing' }); break; }
          const last = ws._stack.pop();
          try {
            const r = await creditWallet(uid, last.amount, 'adjustment', `7Up7Down undo ${last.zone}`);
            ws._balance = parseFloat(r.new_balance);
            ws._bets[last.zone] = Math.max(0, Math.round((ws._bets[last.zone] - last.amount) * 100) / 100);
            send(ws, 'bet_ok', { zone: last.zone, amount: -last.amount, bets: ws._bets, balance: ws._balance, pools: poolView(), undo: true });
          } catch { ws._stack.push(last); }
          break;
        }

        case 'sync':
          send(ws, 'init', {
            uid, username: ws._user.username, currency: ws._user.currency, balance: ws._balance,
            limits: limitsFor(ws._user.currency), mult: MULT, history: history.slice(-HISTORY_MAX),
            rid, phase, timeLeft: phase === 'betting' ? timeLeft : 0, pools: poolView(), online: online(),
            bets: ws._bets, dice: dice || null,
          });
          break;

        default: break;
      }
    });

    ws.on('close', () => clients.delete(ws));
    ws.on('error', () => clients.delete(ws));
  });

  startRound();
  console.log('🎲 7 Up 7 Down game server attached at /api/game/sevenupdown');
}

module.exports = { attach };
