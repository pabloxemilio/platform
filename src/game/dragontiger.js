// ============================================================
//  DRAGON vs TIGER — live-table game server (wired to the wallet)
//  - WebSocket at /api/game/dragontiger  (plain JSON frames)
//  - one shared round for everyone; each player's bets hit their
//    own Supabase wallet (debit on bet, credit on win/refund)
//  - classic 3 zones: DRAGON 1:1 | TIE 8:1 | TIGER 1:1
//    on a TIE, Dragon/Tiger bets lose only HALF (push) — this is
//    the standard rule that yields the published ~96.3% RTP.
//  - balance + currency are per-user (display-only currency)
// ============================================================
const { WebSocketServer } = require('ws');
const { supabase } = require('../config/supabase');
const { debitWallet, creditWallet } = require('../services/wallet');
const { recordWager } = require('../services/wager');
const { winRatio, capWin } = require('../services/gameSettings');

const BASE_RTP = 0.963;          // fair-deck Dragon/Tiger RTP (tie = half-loss)
const BET_SECONDS = 15;          // betting window
const FLIP_MS = 2600;            // card-flip animation budget before settle
const RESULT_MS = 3400;          // result display before next round
const HISTORY_MAX = 40;

// ── card helpers (A=1 … K=13; suit only matters for display) ──
const SUITS = ['S', 'H', 'C', 'D'];               // spade, heart, club, diamond
const drawCard = () => ({ rank: 1 + (Math.random() * 13 | 0), suit: SUITS[Math.random() * 4 | 0] });
// Deal two cards with INDEPENDENT ranks (8-deck behaviour → tie ≈ 1/13, RTP ≈ 96.2%).
// Only the exact same card is de-duplicated, purely so the table never shows two
// visually identical cards — a same-rank/different-suit pair is still a real tie.
function dealPair() {
  const d = drawCard();
  let t = drawCard();
  if (t.rank === d.rank && t.suit === d.suit) t = { rank: t.rank, suit: SUITS[(SUITS.indexOf(d.suit) + 1) % 4] };
  return { dragon: d, tiger: t, outcome: outcomeOf(d, t) };
}
const outcomeOf = (d, t) => (d.rank > t.rank ? 'dragon' : d.rank < t.rank ? 'tiger' : 'tie');

// ── shared round state ──
const clients = new Set();
const history = [];               // ['dragon'|'tiger'|'tie', …] newest last
let rid = 50000;
let phase = 'betting';            // betting | locked | reveal
let timeLeft = BET_SECONDS;
let cards = null;                 // {dragon, tiger, outcome} once dealt
let onlineBase = 120 + (Math.random() * 160 | 0);

// synthetic crowd pools (cosmetic) + real bets fold in on top
let pools = { dragon: 0, tiger: 0, tie: 0 };
function freshSyntheticPools() {
  return {
    dragon: 1000 + (Math.random() * 9000 | 0),
    tiger: 1000 + (Math.random() * 9000 | 0),
    tie: 200 + (Math.random() * 1500 | 0),
  };
}

// ── frame helpers ──
function send(ws, act, data) { try { ws.send(JSON.stringify({ act, data })); } catch {} }
function broadcast(act, data) { const f = JSON.stringify({ act, data }); for (const ws of clients) { try { ws.send(f); } catch {} } }
const online = () => Math.max(1, onlineBase + (Math.random() * 24 | 0) - 12);

// ── settlement math for one player ──
// returns { stake, refund, win } for the given bets vs outcome.
//   dragon/tiger win → 2× stake back; tie → 8:1 (9× back)
//   on TIE, dragon/tiger bets get HALF the stake back (push-half rule)
function settleBets(bets, outcome) {
  let win = 0;            // gross returned to player (stake included)
  const b = { dragon: bets.dragon || 0, tiger: bets.tiger || 0, tie: bets.tie || 0 };
  if (outcome === 'tie') {
    win += b.tie * 9;
    win += (b.dragon + b.tiger) * 0.5;   // half back on the side bets
  } else {
    win += b[outcome] * 2;               // winning side pays 1:1
  }
  return Math.round(win * 100) / 100;
}

// pick the round result. A fair deck already yields BASE_RTP; when the admin
// lowers the win ratio below that, nudge results so a player who is "up" this
// round is more likely to lose — pulling effective RTP toward the admin value.
function pickResult(realBets) {
  const fair = () => dealPair();
  let res = fair();
  const totalBet = (realBets.dragon || 0) + (realBets.tiger || 0) + (realBets.tie || 0);
  if (totalBet > 0) {
    const ratio = winRatio(BASE_RTP);
    const biasProb = ratio < BASE_RTP ? Math.min(0.85, 1 - ratio / BASE_RTP) : 0;
    if (biasProb > 0) {
      const playerUp = settleBets(realBets, res.outcome) > totalBet;
      if (playerUp && Math.random() < biasProb) {
        // resample a few times for a house-favorable result
        for (let i = 0; i < 6; i++) { const c = fair(); if (settleBets(realBets, c.outcome) <= totalBet) { res = c; break; } }
      }
    }
  }
  return res;
}

// aggregate every connected player's bets (for the steering above)
function aggregateRealBets() {
  const agg = { dragon: 0, tiger: 0, tie: 0 };
  for (const ws of clients) { const b = ws._bets; if (b) { agg.dragon += b.dragon || 0; agg.tiger += b.tiger || 0; agg.tie += b.tie || 0; } }
  return agg;
}

// ── round lifecycle ──
function startRound() {
  rid++;
  phase = 'betting';
  timeLeft = BET_SECONDS;
  cards = null;
  pools = freshSyntheticPools();
  if (Math.random() < 0.3) onlineBase = Math.max(60, onlineBase + (Math.random() * 40 | 0) - 20);
  for (const ws of clients) { ws._bets = { dragon: 0, tiger: 0, tie: 0 }; ws._stack = []; }
  broadcast('round', { rid, phase, timeLeft, online: online(), pools: poolView(), history: history.slice(-HISTORY_MAX) });

  const cd = setInterval(() => {
    timeLeft--;
    // synthetic pools drift upward through the betting window
    pools.dragon += Math.random() * 600 | 0;
    pools.tiger += Math.random() * 600 | 0;
    pools.tie += Math.random() * 120 | 0;
    broadcast('tick', { timeLeft: Math.max(timeLeft, 0), pools: poolView(), online: online() });
    if (timeLeft <= 0) { clearInterval(cd); lockAndDeal(); }
  }, 1000);
}

// pools shown to clients = synthetic + summed real bets
function poolView() {
  const real = aggregateRealBets();
  return {
    dragon: Math.round(pools.dragon + real.dragon),
    tiger: Math.round(pools.tiger + real.tiger),
    tie: Math.round(pools.tie + real.tie),
  };
}

async function lockAndDeal() {
  phase = 'locked';
  broadcast('lock', { rid });

  const realBets = aggregateRealBets();
  cards = pickResult(realBets);
  history.push(cards.outcome);
  if (history.length > HISTORY_MAX) history.shift();

  // reveal the cards (clients run the flip animation)
  broadcast('deal', { rid, dragon: cards.dragon, tiger: cards.tiger, outcome: cards.outcome });

  // settle each real player after the flip finishes
  setTimeout(async () => {
    phase = 'reveal';
    for (const ws of clients) await settlePlayer(ws).catch(() => {});
    broadcast('road', { history: history.slice(-HISTORY_MAX), outcome: cards.outcome });
    setTimeout(startRound, RESULT_MS);
  }, FLIP_MS);
}

async function settlePlayer(ws) {
  const bets = ws._bets || { dragon: 0, tiger: 0, tie: 0 };
  const staked = (bets.dragon || 0) + (bets.tiger || 0) + (bets.tie || 0);
  if (staked <= 0) { send(ws, 'settle', { rid, outcome: cards.outcome, win: 0, balance: ws._balance, bets, dragon: cards.dragon, tiger: cards.tiger }); return; }

  let win = settleBets(bets, cards.outcome);
  win = capWin(Math.round(win * 100) / 100);     // admin per-round max-win cap

  if (win > 0) {
    try { const r = await creditWallet(ws._user.id, win, 'win', `Dragon Tiger ${cards.outcome} win (#${rid})`); ws._balance = parseFloat(r.new_balance); } catch {}
  }
  recordSession(ws._user.id, staked, win).catch(() => {});
  ws._bets = { dragon: 0, tiger: 0, tie: 0 };
  ws._stack = [];
  send(ws, 'settle', { rid, outcome: cards.outcome, win, balance: ws._balance, bets, dragon: cards.dragon, tiger: cards.tiger });
}

async function recordSession(userId, bet, win) {
  try {
    await supabase.from('game_sessions').insert({
      user_id: userId, game_name: 'Dragon Tiger',
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
    if (pathname === '/api/game/dragontiger') {
      wss.handleUpgrade(req, socket, head, (ws) => wss.emit('connection', ws, req));
    }
  });

  wss.on('connection', async (ws, req) => {
    const user = await authFromReq(req);
    if (!user) { try { ws.close(4001, 'auth required'); } catch {} return; }

    ws._user = user;
    ws._balance = user.balance;
    ws._bets = { dragon: 0, tiger: 0, tie: 0 };
    ws._stack = [];
    clients.add(ws);

    send(ws, 'init', {
      uid: user.id, username: user.username, currency: user.currency, balance: ws._balance,
      limits: limitsFor(user.currency), history: history.slice(-HISTORY_MAX),
      rid, phase, timeLeft: phase === 'betting' ? timeLeft : 0, pools: poolView(), online: online(),
      cards: cards || null,
    });

    ws.on('message', async (buf) => {
      let m; try { m = JSON.parse(buf.toString()); } catch { return; }
      const d = m.data || {};
      const uid = ws._user.id;
      switch (m.act) {
        case 'ping': send(ws, 'pong', {}); break;

        case 'bet': {
          const zone = ['dragon', 'tiger', 'tie'].includes(d.zone) ? d.zone : null;
          const amount = Math.round((parseFloat(d.amount) || 0) * 100) / 100;
          const lim = limitsFor(ws._user.currency);
          if (phase !== 'betting' || !zone || amount < lim.min) { send(ws, 'bet_err', { zone: d.zone, reason: phase !== 'betting' ? 'closed' : 'invalid' }); break; }
          if ((ws._bets[zone] + amount) > lim.max) { send(ws, 'bet_err', { zone, reason: 'limit' }); break; }
          try {
            const r = await debitWallet(uid, amount, 'bet', `Dragon Tiger bet ${zone} (#${rid})`);
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
            const r = await creditWallet(uid, last.amount, 'adjustment', `Dragon Tiger undo ${last.zone}`);
            ws._balance = parseFloat(r.new_balance);
            ws._bets[last.zone] = Math.max(0, Math.round((ws._bets[last.zone] - last.amount) * 100) / 100);
            send(ws, 'bet_ok', { zone: last.zone, amount: -last.amount, bets: ws._bets, balance: ws._balance, pools: poolView(), undo: true });
          } catch { ws._stack.push(last); }
          break;
        }

        case 'sync':
          send(ws, 'init', {
            uid, username: ws._user.username, currency: ws._user.currency, balance: ws._balance,
            limits: limitsFor(ws._user.currency), history: history.slice(-HISTORY_MAX),
            rid, phase, timeLeft: phase === 'betting' ? timeLeft : 0, pools: poolView(), online: online(),
            bets: ws._bets, cards: cards || null,
          });
          break;

        default: break;
      }
    });

    ws.on('close', () => clients.delete(ws));
    ws.on('error', () => clients.delete(ws));
  });

  startRound();
  console.log('🐲 Dragon Tiger game server attached at /api/game/dragontiger');
}

module.exports = { attach };
