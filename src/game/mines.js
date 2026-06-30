// ============================================================
//  MINES — Spribe-style mines (wired to the wallet)
//  - WebSocket at /api/game/mines  (plain JSON frames)
//  - PER-PLAYER game: 5×5 grid (25 tiles), 1–24 mines. Reveal gems to
//    grow the multiplier, cash out before you hit a mine.
//  - fair mine placement + a 97% RTP factor in the multiplier → the
//    effective RTP is exactly `winRatio` for ANY strategy (provably so).
//  - each player bets their own Supabase wallet (debit on bet, credit on
//    cash-out). Admin win-ratio controls RTP, max-win caps the payout.
// ============================================================
const { WebSocketServer } = require('ws');
const { supabase } = require('../config/supabase');
const { debitWallet, creditWallet } = require('../services/wallet');
const { recordWager } = require('../services/wager');
const { winRatio, capWin } = require('../services/gameSettings');

const TILES = 25;                 // 5×5
const BASE_RTP = 0.97;            // Spribe Mines RTP
const fix2 = (n) => Math.round(n * 100) / 100;

// C(n,k) without overflow for our small n
function comb(n, k) {
  if (k < 0 || k > n) return 0;
  k = Math.min(k, n - k);
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return r;
}
// payout multiplier after k gems revealed with M mines (RTP-adjusted, floored to 2dp)
function multiplier(k, M) {
  if (k <= 0) return 1.00;
  const rtp = winRatio(BASE_RTP);
  const fair = comb(TILES, k) / comb(TILES - M, k);
  return Math.floor(rtp * fair * 100) / 100;   // floor → never overpays
}

function newMineSet(M) {
  const idx = Array.from({ length: TILES }, (_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [idx[i], idx[j]] = [idx[j], idx[i]]; }
  return new Set(idx.slice(0, M));
}

function send(ws, act, data) { try { ws.send(JSON.stringify({ act, data })); } catch {} }

async function recordSession(userId, bet, win) {
  try {
    await supabase.from('game_sessions').insert({
      user_id: userId, game_name: 'Mines',
      bet_amount: bet, win_amount: win, result: win > 0 ? 'win' : 'loss',
    });
  } catch {}
}

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
const MIN_MINES = 1, MAX_MINES = 24;

// full multiplier ladder for a given mine count (client shows the progression)
function ladder(M) {
  const out = [];
  for (let k = 1; k <= TILES - M; k++) out.push(multiplier(k, M));
  return out;
}

function gameView(ws) {
  const g = ws._game;
  if (!g || !g.active) return null;
  const k = g.revealed.length;
  return {
    bet: g.bet, mines: g.mines, revealed: g.revealed.slice(),
    multiplier: multiplier(k, g.mines), next: multiplier(k + 1, g.mines), gemsLeft: (TILES - g.mines) - k,
  };
}

function attach(server) {
  const wss = new WebSocketServer({ noServer: true });
  server.on('upgrade', (req, socket, head) => {
    let pathname; try { pathname = new URL(req.url, 'http://x').pathname; } catch { return; }
    if (pathname === '/api/game/mines') {
      wss.handleUpgrade(req, socket, head, (ws) => wss.emit('connection', ws, req));
    }
  });

  wss.on('connection', async (ws, req) => {
    const user = await authFromReq(req);
    if (!user) { try { ws.close(4001, 'auth required'); } catch {} return; }
    ws._user = user;
    ws._balance = user.balance;
    ws._game = null;

    send(ws, 'init', {
      uid: user.id, username: user.username, currency: user.currency, balance: ws._balance,
      limits: limitsFor(user.currency), tiles: TILES, minMines: MIN_MINES, maxMines: MAX_MINES,
      game: gameView(ws),
    });

    ws.on('message', async (buf) => {
      let m; try { m = JSON.parse(buf.toString()); } catch { return; }
      const d = m.data || {};
      const uid = ws._user.id;
      switch (m.act) {
        case 'ping': send(ws, 'pong', {}); break;

        case 'start': {
          if (ws._game && ws._game.active) { send(ws, 'err', { reason: 'in_progress' }); break; }
          const lim = limitsFor(ws._user.currency);
          const bet = fix2(parseFloat(d.bet) || 0);
          let mines = parseInt(d.mines, 10); if (isNaN(mines)) mines = 3;
          mines = Math.max(MIN_MINES, Math.min(MAX_MINES, mines));
          if (bet < lim.min || bet > lim.max) { send(ws, 'err', { reason: 'invalid_bet' }); break; }
          try {
            const r = await debitWallet(uid, bet, 'bet', `Mines bet (${mines} mines)`);
            ws._balance = parseFloat(r.new_balance);
            ws._game = { bet, mines, mineSet: newMineSet(mines), revealed: [], active: true };
            recordWager(uid, bet).catch(() => {});
            send(ws, 'started', { bet, mines, balance: ws._balance, multiplier: 1.00, next: multiplier(1, mines), ladder: ladder(mines) });
          } catch (e) { send(ws, 'err', { reason: 'insufficient' }); }
          break;
        }

        case 'reveal': {
          const g = ws._game;
          const cell = parseInt(d.cell, 10);
          if (!g || !g.active) { send(ws, 'err', { reason: 'no_game' }); break; }
          if (isNaN(cell) || cell < 0 || cell >= TILES || g.revealed.includes(cell)) { send(ws, 'err', { reason: 'bad_cell' }); break; }

          if (g.mineSet.has(cell)) {                 // hit a mine → bust
            g.active = false;
            recordSession(uid, g.bet, 0).catch(() => {});
            const mines = [...g.mineSet];
            ws._game = null;
            send(ws, 'boom', { cell, mines, bet: g.bet });
            break;
          }
          g.revealed.push(cell);
          const k = g.revealed.length;
          const mult = multiplier(k, g.mines);
          if (k >= TILES - g.mines) {                // all gems found → auto cash-out at max
            const win = capWin(fix2(g.bet * mult));
            try { const cr = await creditWallet(uid, win, 'win', `Mines win @${mult}x (cleared)`); ws._balance = parseFloat(cr.new_balance); } catch {}
            recordSession(uid, g.bet, win).catch(() => {});
            const mines = [...g.mineSet]; ws._game = null;
            send(ws, 'cashout', { cell, win, multiplier: mult, balance: ws._balance, mines, cleared: true });
            break;
          }
          send(ws, 'reveal', { cell, multiplier: mult, next: multiplier(k + 1, g.mines), revealed: g.revealed.slice(), gemsLeft: (TILES - g.mines) - k });
          break;
        }

        case 'cashout': {
          const g = ws._game;
          if (!g || !g.active || g.revealed.length < 1) { send(ws, 'err', { reason: 'cannot_cashout' }); break; }
          const mult = multiplier(g.revealed.length, g.mines);
          const win = capWin(fix2(g.bet * mult));
          try { const cr = await creditWallet(uid, win, 'win', `Mines win @${mult}x`); ws._balance = parseFloat(cr.new_balance); } catch {}
          recordSession(uid, g.bet, win).catch(() => {});
          const mines = [...g.mineSet]; const revealed = g.revealed.slice(); ws._game = null;
          send(ws, 'cashout', { win, multiplier: mult, balance: ws._balance, mines, revealed });
          break;
        }

        case 'sync':
          send(ws, 'init', {
            uid, username: ws._user.username, currency: ws._user.currency, balance: ws._balance,
            limits: limitsFor(ws._user.currency), tiles: TILES, minMines: MIN_MINES, maxMines: MAX_MINES,
            game: gameView(ws), ladder: ws._game && ws._game.active ? ladder(ws._game.mines) : null,
          });
          break;

        default: break;
      }
    });

    ws.on('close', () => { ws._game = null; });
    ws.on('error', () => { ws._game = null; });
  });

  console.log('💣 Mines game server attached at /api/game/mines');
}

module.exports = { attach };
