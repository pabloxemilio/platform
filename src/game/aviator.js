// ============================================================
//  AVIATOR — real-time crash game server (wired to the wallet)
//  - WebSocket at /api/game/websocket  (AES-128-ECB JSON frames)
//  - one shared round for everyone; each player's bets hit their
//    own Supabase wallet (debit on bet, credit on cashout)
//  - balance + currency are per-user (display-only currency)
// ============================================================
const crypto = require('crypto');
const { WebSocketServer } = require('ws');
const { supabase } = require('../config/supabase');
const { debitWallet, creditWallet } = require('../services/wallet');
const { recordWager } = require('../services/wager');
const { winRatio, capWin } = require('../services/gameSettings');

const KEY = Buffer.from('2Aekk4Lm9dJlk3kD', 'utf8'); // matches the game client

// ── AES-128-ECB / PKCS7 codec (client uses the same) ──
function enc(obj) {
  const c = crypto.createCipheriv('aes-128-ecb', KEY, null);
  return Buffer.concat([c.update(JSON.stringify(obj), 'utf8'), c.final()]);
}
function dec(buf) {
  const d = crypto.createDecipheriv('aes-128-ecb', KEY, null);
  return JSON.parse(Buffer.concat([d.update(buf), d.final()]).toString('utf8'));
}

const eB = { waiting: 'waiting', betting: 'betting', playing: 'playing' };

// ── shared round state ──
const clients = new Set();
const history = [];
let rid = 1000;
let state = eB.waiting;
let currentX = 1.0;
let crashAt = 2.0;

// ── synthetic crowd (ambiance only — not real wallets) ──
const VALID_AVATARS = [0, 1, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 23, 24];
const A = 'abcdefghijklmnopqrstuvwxyz';
const maskName = () => A[Math.random() * 26 | 0] + '***' + (10 + (Math.random() * 89 | 0));
const validAvatar = () => VALID_AVATARS[Math.random() * VALID_AVATARS.length | 0];
const BET_TIERS = [1, 2, 3, 5, 10, 20, 50, 100, 200, 500];
function genPlays(n) {
  return Array.from({ length: n }, () => {
    const amount = BET_TIERS[Math.random() * BET_TIERS.length | 0] * (Math.random() < 0.12 ? 10 : 1);
    const cashTarget = Math.random() < 0.82 ? Math.round((1.08 + Math.random() * Math.random() * 8) * 100) / 100 : 0;
    return { playerId: maskName(), avatar: validAvatar(), amount, cashTarget, cashedOut: false, outMultiplier: 0, winAmount: 0 };
  });
}
function settleRow(pl) {
  if (pl.cashTarget && Math.random() < 0.9) { pl.cashedOut = true; pl.outMultiplier = pl.cashTarget; pl.winAmount = Math.round(pl.amount * pl.cashTarget * 100) / 100; }
  return pl;
}
const fmtTime = d => { const p = n => String(n).padStart(2, '0'); return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${String(d.getFullYear()).slice(2)} ${p(d.getHours())}:${p(d.getMinutes())}`; };
function genTopWins(n, sortKey) {
  return Array.from({ length: n }, () => {
    const bet = BET_TIERS[Math.random() * BET_TIERS.length | 0] * (Math.random() < 0.3 ? 10 : 1);
    const result = Math.round((2 + Math.random() * Math.random() * 400) * 100) / 100;
    const max = Math.round((result + Math.random() * result * 1.5) * 100) / 100;
    return { avatar: validAvatar(), player: maskName(), time: fmtTime(new Date(Date.now() - Math.random() * 86400000)), bet, win: Math.round(bet * result * 100) / 100, result, max };
  }).sort((a, b) => b[sortKey] - a[sortKey]).slice(0, n);
}
function genTopRounds(n) {
  return Array.from({ length: n }, () => ({ time: fmtTime(new Date(Date.now() - Math.random() * 86400000)), max: Math.round((1 + Math.random() * Math.random() * 500) * 100) / 100 })).sort((a, b) => b.max - a.max);
}
const VISIBLE_ROWS = 120;
let plays = genPlays(VISIBLE_ROWS);
let prevPlays = genPlays(VISIBLE_ROWS).map(settleRow);
let prevCrash = 2.0;
let totalBets = 0, leftBets = 0, totalWin = 0;

// ── frame helpers ──
function send(ws, act, data, code = 0) { try { ws.send(enc({ act, code, data })); } catch {} }
function broadcast(act, data, code = 0) { const f = enc({ act, code, data }); for (const ws of clients) { try { ws.send(f); } catch {} } }

function pickCrash() {
  // Admin-configurable house win ratio (RTP), default 0.97.
  // Classic provably-fair crash curve with a SINGLE uniform draw: this makes the
  // effective RTP exactly `rtp` for any cash-out target (instant busts emerge
  // naturally when the curve lands below the 1.01 minimum).
  const rtp = winRatio(0.97, 'aviator');
  const x = rtp / (1 - Math.random());
  if (x < 1.01) return 1.00;                       // natural instant bust
  return Math.min(Math.round(x * 100) / 100, 100);
}
function roundStats() {
  return { totalBetCount: totalBets, leftBetCount: leftBets, leftUserCount: leftBets, totalWinAmount: totalWin };
}

// ── round lifecycle ──
function startRound() {
  rid++;
  crashAt = pickCrash();
  currentX = 1.0;
  state = eB.betting;
  plays = genPlays(VISIBLE_ROWS);
  totalBets = 500 + (Math.random() * 1000 | 0);
  leftBets = totalBets;
  totalWin = 0;
  for (const ws of clients) for (const t of Object.keys(ws._bets || {})) { ws._bets[t].active = true; ws._bets[t].round = rid; }
  broadcast('game_status', { status: eB.betting, rid });
  let t = 5;
  broadcast('countdown', { timeLeft: t });
  const cd = setInterval(() => {
    t--;
    broadcast('countdown', { timeLeft: Math.max(t, 0) });
    broadcast('player_list', { plays });
    broadcast('round_update', roundStats());
    if (t <= 0) { clearInterval(cd); fly(); }
  }, 1000);
}
function fly() {
  state = eB.playing;
  broadcast('game_status', { status: eB.playing, rid });
  const t0 = Date.now();
  const tick = setInterval(() => {
    const t = (Date.now() - t0) / 1000;
    currentX = Math.round(Math.pow(Math.E, 0.12 * t * (1 + t * 0.04)) * 100) / 100;
    if (currentX >= crashAt) {
      currentX = crashAt;
      clearInterval(tick);
      broadcast('multiplier_update', { multiplier: currentX });
      return crash();
    }
    broadcast('multiplier_update', { multiplier: currentX });
    for (const pl of plays) if (pl.cashTarget && !pl.cashedOut && currentX >= pl.cashTarget) {
      pl.cashedOut = true; pl.outMultiplier = pl.cashTarget; pl.winAmount = Math.round(pl.amount * pl.cashTarget * 100) / 100; totalWin += pl.winAmount;
    }
    leftBets = Math.max(0, Math.round(totalBets * Math.min(1, 1 / Math.pow(currentX, 1.35))));
    totalWin = Math.round(totalWin * 100) / 100;
    broadcast('player_list', { plays });
    broadcast('round_update', roundStats());
  }, 80);
}
function crash() {
  state = eB.waiting;
  history.push({ rid, x: crashAt });
  if (history.length > 80) history.shift();
  broadcast('game_status', { status: eB.waiting, rid, x: crashAt });
  prevPlays = plays.slice(); prevCrash = crashAt;
  // settle real players: any active bet that didn't cash out is a loss
  for (const ws of clients) {
    for (const type of Object.keys(ws._bets || {})) {
      const b = ws._bets[type];
      if (b && b.active) recordSession(ws._user.id, b.amount, 0, 'loss').catch(() => {});
    }
    ws._bets = {};
  }
  setTimeout(startRound, 3000);
}

// ── persistence helpers ──
async function recordSession(userId, bet, win, result) {
  try {
    await supabase.from('game_sessions').insert({
      user_id: userId, game_name: 'Aviator',
      bet_amount: bet, win_amount: win, result,
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
    const { data: profile } = await supabase.from('users')
      .select('*').eq('id', data.user.id).single();   // select * = resilient if currency column not added yet
    if (!profile || profile.status === 'blocked' || profile.status === 'suspended') return null;
    const { data: wallet } = await supabase.from('wallets')
      .select('main_balance').eq('user_id', profile.id).single();
    return { id: profile.id, username: profile.username, currency: profile.currency || 'PKR', balance: parseFloat(wallet?.main_balance || 0) };
  } catch { return null; }
}

function attach(server) {
  // noServer + path-routed upgrade so this coexists with other game WS servers
  // (a {server,path} server would 400-abort upgrades for other paths like /io/).
  const wss = new WebSocketServer({ noServer: true });
  server.on('upgrade', (req, socket, head) => {
    let pathname; try { pathname = new URL(req.url, 'http://x').pathname; } catch { return; }
    if (pathname === '/api/game/websocket') {
      wss.handleUpgrade(req, socket, head, (ws) => wss.emit('connection', ws, req));
    }
  });

  wss.on('connection', async (ws, req) => {
    const user = await authFromReq(req);
    if (!user) { try { ws.close(4001, 'auth required'); } catch {} return; }

    ws._user = user;
    ws._balance = user.balance;
    ws._bets = {};
    clients.add(ws);

    // boot the client UI
    send(ws, 'join_res', { userId: user.id, uid: user.id, username: user.username, currency: user.currency, balance: ws._balance, vip: 0, avatar: 1 });
    send(ws, 'multiplier_history', { multiplier: history.slice(-30) });
    send(ws, 'game_status', { status: state, rid, x: currentX });
    send(ws, 'player_list', { plays });

    ws.on('message', async (buf) => {
      let m; try { m = dec(buf); } catch { return; }
      const d = m.data || {};
      const uid = ws._user.id;
      switch (m.act) {
        case 'ping': break;
        case 'join':
          send(ws, 'join_res', { userId: uid, uid, username: ws._user.username, currency: ws._user.currency, balance: ws._balance, vip: 0, avatar: 1 });
          send(ws, 'multiplier_history', { multiplier: history.slice(-30) });
          send(ws, 'game_status', { status: state, rid, x: currentX });
          break;
        case 'bet': {
          const type = d.type || 'A';
          const amount = Math.round((parseFloat(d.amount) || 0) * 100) / 100;
          if ((state !== eB.betting && state !== eB.playing) || amount <= 0 || ws._bets[type]) { send(ws, 'bet_res', { type }, 1); break; }
          try {
            const r = await debitWallet(uid, amount, 'bet', 'Aviator bet');
            ws._balance = parseFloat(r.new_balance);
            ws._bets[type] = { amount, type, round: rid, active: state === eB.betting };
            recordWager(uid, amount).catch(() => {});   // count toward wagering requirement
            send(ws, 'bet_res', { type, txId: 'tx' + Date.now() + type, betAmount: amount, auto: +d.auto || 0, balance: ws._balance });
          } catch (e) { send(ws, 'bet_res', { type }, 1); }
          break;
        }
        case 'cancel': {
          const type = d.type || 'A';
          const b = ws._bets[type];
          if (b) {
            try { const r = await creditWallet(uid, b.amount, 'adjustment', 'Aviator bet cancelled'); ws._balance = parseFloat(r.new_balance); } catch {}
            delete ws._bets[type];
          }
          send(ws, 'cancel_res', { type, balance: ws._balance });
          break;
        }
        case 'cashout': {
          const type = d.type || 'A';
          const b = ws._bets[type];
          if (state === eB.playing && b && b.active) {
            // cap the payout at the admin's per-round max-win (protects house from a lucky whale)
            const win = capWin(Math.round(b.amount * currentX * 100) / 100);
            try {
              const r = await creditWallet(uid, win, 'win', `Aviator win @${currentX}x`);
              ws._balance = parseFloat(r.new_balance);
              recordSession(uid, b.amount, win, 'win').catch(() => {});
              delete ws._bets[type];
              send(ws, 'cashout_res', { type, winAmount: win, multiplier: currentX, balance: ws._balance });
            } catch (e) { send(ws, 'cashout_res', { type }, 1); }
          } else send(ws, 'cashout_res', { type }, 1);
          break;
        }
        case 'previous':
          send(ws, 'previous_res', { x: prevCrash, list: JSON.stringify((+d.page || 1) > 1 ? [] : prevPlays) });
          break;
        case 'top': {
          const type = d.type || 'x';
          if (type === 'rounds') send(ws, 'top_res', { list: genTopRounds(40) });
          else send(ws, 'top_res', { list: genTopWins(40, type === 'win' ? 'win' : 'result') });
          break;
        }
        case 'bet_record': send(ws, 'bet_record_res', { list: [] }); break;
        case 'seed': send(ws, 'seed_res', { serverSeed: 'platform', clientSeed: 'platform', hash: 'platform' }); break;
        default: send(ws, m.act + '_res', {}, 0);
      }
    });

    ws.on('close', () => clients.delete(ws));
    ws.on('error', () => clients.delete(ws));
  });

  startRound();
  console.log('🎮 Aviator game server attached at /api/game/websocket');
}

module.exports = { attach };
