// ============================================================
//  DRAGON TIGER (REAL KBP CLIENT) — protobuf "agent" protocol server.
//  Serves the mirrored Cocos client (/public/dt) and speaks its exact
//  binary protobuf protocol so the real client plays, wired to the wallet.
//
//  Reverse-engineered from the client bundles + extracted .proto schemas:
//   - WS binary frames; body = XOR("EFMNJQKW").
//   - client->server header(32B): FE 01 00 00 | dst(u32@4) | cmd(u16@8) |
//       1(u16@10) | subtype(u32@12) | uid(u32@16) | seq(u32@20) | 1(u32@24) |
//       bodyLen(u32@28) | XOR(body)
//   - server->client header(32B): FE 01 00 00 | cmd(u32@4) | dsttype(u16@8) |
//       srctype(u16@10) | dstid(u32@12) | srcid(u32@16) | seq(u32@20) |
//       reserved(u32@24) | bodyLen(u32@28) | XOR(body)
//   - cmd numbering: login pkg client_proto (LoginReq 901 / LoginResp 902);
//       heartbeat pkg agent (HeartBeat 1600); dragon game base = 15200,
//       wire cmd = 15200 + subcmd (TableInfoPush +5, GameReday +6, StartBet
//       +7, StopBet +8, BetResp +14, BetDataActualTime +15, Settlement +18).
//   NOTE: field details (bet positions/odds) are best-effort and tuned via
//   the live frame log below — every inbound frame is dumped for iteration.
// ============================================================
const path = require('path');
const protobuf = require('protobufjs');
const { WebSocketServer } = require('ws');
const { supabase } = require('../config/supabase');
const { debitWallet, creditWallet } = require('../services/wallet');
const { recordWager } = require('../services/wager');
const { winRatio, capWin } = require('../services/gameSettings');

const XOR_KEY = Buffer.from('EFMNJQKW', 'utf8');
const xor = (buf) => { const o = Buffer.allocUnsafe(buf.length); for (let i = 0; i < buf.length; i++) o[i] = buf[i] ^ XOR_KEY[i % 8]; return o; };

// ── load protobuf schemas ──
const PROTO_DIR = path.join(__dirname, 'dt_proto');
const root = new protobuf.Root();
let VLTReq, VLTResp, HeartBeat, T = {}; // T = dragon message types
const RA = {};                          // roomalloc message types
const GR = {};                          // gamerecord message types
function loadProtos() {
  for (const f of ['account_proto.proto', '900_login.proto', '1600_agent.proto', '1450_asset.proto', '4700_roomalloc.proto', '2850_gamerecord.proto', 'dragon.proto', '7000_user_info.proto']) {
    try { root.loadSync(path.join(PROTO_DIR, f), { keepCase: true }); } catch (e) { console.error('[DT] proto load fail', f, e.message); }
  }
  VLTReq = root.lookupType('account_proto.VerifyLoginTokenReq');
  VLTResp = root.lookupType('account_proto.VerifyLoginTokenResp');
  HeartBeat = root.lookupType('agent.HeartBeat');
  for (const n of ['GameLevelConfigReq', 'GameLevelConfigResp', 'AllocTableReq', 'AllocTableResp', 'AllocTablePush']) {
    try { RA[n] = root.lookupType('roomalloc.' + n); } catch {}
  }
  try { GR.GameRecordResp = root.lookupType('gamerecord.GameRecordResp'); } catch {}
  for (const n of ['TableInfoPush', 'GameRedayPush', 'StartBetPush', 'StopBetPush', 'BetReq', 'BetResp',
    'BetDataActualTimePush', 'SettlementPush', 'HistoryResp', 'OnlinePlayersResp', 'AllocTableReq',
    'LeaveReq', 'LeaveResp', 'ErrorPush', 'UserInfo', 'Card', 'HandCards',
    'GameTableListReq', 'GameTableListResp', 'ShowChooseTableInfoResp', 'SingleTableInfo']) {
    try { T[n] = root.lookupType('dragon.' + n); } catch {}
  }
}

// ── cmd maps ──
const DRAGON_BASE = 15200;
const S2C_SUB = {            // server->client message -> subcmd (+base)
  ErrorPush: 1, TableInfoPush: 5, GameRedayPush: 6, StartBetPush: 7, StopBetPush: 8,
  BetResp: 14, BetDataActualTimePush: 15, HistoryResp: 17, SettlementPush: 18, OnlinePlayersResp: 20, LeaveResp: 22,
  KickUserPush: 23, ShowChooseTableInfoResp: 28, GameTableListResp: 50,
};
const CMD_LOGIN_RESP = 902, CMD_HEARTBEAT = 1600;

// ── framing ──
function buildFrame(cmd, body, { dstid = 0, srcid = 0, seq = 0 } = {}) {
  const enc = xor(body);
  const h = Buffer.alloc(32);
  h[0] = 0xFE; h[1] = 0x01;
  h.writeUInt32BE(cmd >>> 0, 4);
  h.writeUInt32BE(dstid >>> 0, 12);
  h.writeUInt32BE(srcid >>> 0, 16);
  h.writeUInt32BE(seq >>> 0, 20);
  h.writeUInt32BE(1, 24);
  h.writeUInt32BE(enc.length >>> 0, 28);
  return Buffer.concat([h, enc]);
}
function parseFrame(buf) {
  if (buf.length < 32) return null;
  const cmd = buf.readUInt32BE(4), svc = buf.readUInt16BE(8), subtype = buf.readUInt32BE(12);
  const uid = buf.readUInt32BE(16), seq = buf.readUInt32BE(20), len = buf.readUInt32BE(28);
  const body = buf.length >= 32 + len ? xor(buf.slice(32, 32 + len)) : Buffer.alloc(0);
  return { cmd, svc, subtype, uid, seq, len, body };
}
function sendMsg(ws, name, payload, seq = 0) {
  const Type = T[name]; if (!Type) { console.warn('[DT] no type', name); return; }
  const err = Type.verify(payload); if (err) console.warn('[DT] verify', name, err);
  const body = Type.encode(Type.create(payload)).finish();
  const cmd = DRAGON_BASE + (S2C_SUB[name] || 0);
  try { ws.send(buildFrame(cmd, Buffer.from(body), { dstid: ws._uid || 0, srcid: ws._tableId || 0, seq })); } catch {}
}
function sendRaw(ws, cmd, Type, payload, seq = 0) {
  const body = Type.encode(Type.create(payload)).finish();
  try { ws.send(buildFrame(cmd, Buffer.from(body), { dstid: ws._uid || 0, seq })); } catch {}
}

// ── Dragon Tiger game model ──
// 4 bet positions (matches the real client): 0=Dragon 1=Tiger 2=Tie 3=Suited-Tie.
// odds are fixed-point ×1e4 → client shows odds/1e4 = 1:1, 1:1, 1:10, 1:49.
const POS = { DRAGON: 0, TIGER: 1, TIE: 2, SUITED_TIE: 3 };
const NPOS = 4;
const zeros = () => new Array(NPOS).fill(0);
const READY_S = 3, END_S = 6, TABLE_ID = 88888888, GAME_ID = 204;
const SUITS4 = [0, 1, 2, 3];
const drawCard = () => ({ dect: 0, suit: SUITS4[Math.random() * 4 | 0], value: 1 + (Math.random() * 13 | 0), joker: -1, rank: 0 });
const SHOE = 416;                                    // 8-deck shoe
// card_info = [cardsDealt, cardsRemaining] — the deck counter shown by the shoe (else NaN)
const cardInfo = (r) => [r.cardsDealt || 0, Math.max(0, SHOE - (r.cardsDealt || 0))];

// ── live config from the admin panel (site_settings) ──
const dtSettings = require('../services/dtSettings');
const cfg = () => dtSettings.get();                 // { chips, mockUsers, currencyMulti, betSeconds, idle*, betMin/Max, odds }
const MOCK_BET_EVERY = 0.55;                         // chance a bot bets on a given betting tick
const ODDS = () => cfg().odds;                       // [dragon, tiger, tie, suited] ×1e4
// The game's money is natively ×1000 (the client divides displayed money by
// `currency_unit_multi`, which defaults to 1000; bot bets are `1000 × chip`).
// So: wire money = wallet × 1000, currency_unit_multi = 1000 → on screen = wallet.
// Chips (bet_chip_conf) are the small DISPLAY values and are sent unscaled.
const CURRENCY_UNIT_MULTI = 1000;
const SCALE = CURRENCY_UNIT_MULTI;
const toWire = (walletVal) => Math.round((walletVal || 0) * SCALE);   // money fields
const toWallet = (rawVal) => (Number(rawVal) || 0) / SCALE;           // incoming bets
function levels() {
  const c = cfg();
  const m = c.betMin;
  // distinct tiers: different titles, min bets, room limits, entry, member counts
  return [
    { level: 1, title: 'Bronze',  bet_min: m,       bet_max: m * 1000,  entry_min: 0,         members: 30 + (Math.random() * 60 | 0) },
    { level: 2, title: 'Silver',  bet_min: m * 5,   bet_max: m * 5000,  entry_min: m * 100,   members: 20 + (Math.random() * 50 | 0) },
    { level: 3, title: 'Gold',    bet_min: m * 20,  bet_max: m * 20000, entry_min: m * 1000,  members: 10 + (Math.random() * 40 | 0) },
    { level: 4, title: 'Diamond', bet_min: m * 100, bet_max: m * 100000, entry_min: m * 10000, members: 5 + (Math.random() * 25 | 0) },
  ];
}

// ── mock (bot) players so the table looks alive ──
const BOT_NAMES = ['Raj', 'Amit', 'Priya', 'Vikram', 'Sunil', 'Anil', 'Deepak', 'Kiran', 'Rahul', 'Neha', 'Arjun', 'Sanjay', 'Pooja', 'Ravi', 'Manish'];
const mask = (n) => n.slice(0, 2) + '***';
function makeBots(n) {
  const used = new Set(); const bots = [];
  for (let i = 0; i < n; i++) {
    let nm; do { nm = BOT_NAMES[Math.random() * BOT_NAMES.length | 0]; } while (used.has(nm) && used.size < BOT_NAMES.length); used.add(nm);
    bots.push({ uid: 90000000 + (Math.random() * 8999999 | 0), name: mask(nm), avatar: String(Math.random() * 12 | 0), seatid: i, money: 5000 + (Math.random() * 800000 | 0), bets: zeros(), total_win: 0 });
  }
  return bots;
}
function sitList(r) {
  return (r.bots || []).map(b => ({ uid: b.uid, name: b.name, avatar: b.avatar, seatid: b.seatid, money: toWire(b.money), bet: b.bets.map(toWire), total_win: toWire(b.total_win) }));
}
// bots place a few bets during the betting window (amounts in WALLET units)
function botBetTick(r) {
  const lim = cfg().chips;
  for (const b of r.bots || []) {
    if (Math.random() < MOCK_BET_EVERY) {
      const pos = Math.random() < 0.45 ? POS.DRAGON : Math.random() < 0.82 ? POS.TIGER : Math.random() < 0.9 ? POS.TIE : POS.SUITED_TIE;
      const amt = lim[Math.random() * Math.min(5, lim.length) | 0];
      if (b.money >= amt) { b.bets[pos] += amt; b.money -= amt; r.posBet[pos] += amt; }
    }
  }
}
function settleBots(r, posWin) {
  for (const b of r.bots || []) {
    const staked = b.bets.reduce((a, c) => a + c, 0);
    const credit = payout(b.bets, posWin);
    b.money += credit;                 // stake already deducted when bet
    b.total_win = credit - staked;     // net for this round (shown on the table)
  }
}

const tables = new Map(); // tableId -> shared room
function getRoom() {
  let r = tables.get(TABLE_ID);
  if (!r) { r = { state: 1, players: new Set(), bots: makeBots(cfg().mockUsers), history: [], historyType: [], rid: 0, posBet: zeros(), dragon: null, tiger: null, cardsDealt: 0, loop: null }; tables.set(TABLE_ID, r); startLoop(r); }
  return r;
}
const now = () => Math.floor(Date.now() / 1000);
const online = (r) => (r ? r.players.size + (r.bots ? r.bots.length : 0) : 0) + 24 + (Math.random() * 30 | 0);

function broadcast(r, name, payload) { for (const ws of r.players) sendMsg(ws, name, payload); }

function startLoop(r) {
  const tick = async () => {
    // READY
    r.state = 1; r.rid++; r.posBet = zeros(); r.dragon = null; r.tiger = null;
    for (const b of r.bots) { b.bets = zeros(); b.total_win = 0; }
    for (const ws of r.players) ws._bets = zeros();
    broadcast(r, 'GameRedayPush', { state: 1, online_num: online(r), sit_down_list: sitList(r), table_id: TABLE_ID, card_info: cardInfo(r), is_open_croupier: false });
    await wait(READY_S);
    // START BET
    r.state = 2;
    broadcast(r, 'StartBetPush', { state: 2, table_id: TABLE_ID, card_info: cardInfo(r) });
    for (let t = cfg().betSeconds; t > 0; t--) {
      r.betLeft = t;
      await wait(1);
      botBetTick(r);
      broadcast(r, 'BetDataActualTimePush', { table_id: TABLE_ID, state: 2, pos_bet_sum_list: r.posBet.map(toWire), sit_down_list: sitList(r), bet_count_down: t });
    }
    // STOP BET
    r.state = 3;
    broadcast(r, 'StopBetPush', { state: 3, table_id: TABLE_ID });
    await wait(1);
    // DEAL + SETTLE
    r.cardsDealt = (r.cardsDealt || 0) + 2; if (r.cardsDealt > SHOE - 16) r.cardsDealt = 0; // reshuffle near the end
    r.dragon = drawCard(); r.tiger = drawCard();
    const dv = r.dragon.value, tv = r.tiger.value;
    const posWin = zeros();
    let mainOutcome;
    if (dv > tv) { posWin[POS.DRAGON] = 1; mainOutcome = POS.DRAGON; }
    else if (dv < tv) { posWin[POS.TIGER] = 1; mainOutcome = POS.TIGER; }
    else { posWin[POS.TIE] = 1; mainOutcome = POS.TIE; if (r.dragon.suit === r.tiger.suit) posWin[POS.SUITED_TIE] = 1; }
    r.history.push(mainOutcome); if (r.history.length > 50) r.history.shift();
    r.historyType.push(0);
    settleBots(r, posWin);
    for (const ws of r.players) await settle(ws, r, posWin).catch(() => {});
    await wait(END_S);
    r.loop = setTimeout(tick, 50);
  };
  r.loop = setTimeout(tick, 500);
}
const wait = (s) => new Promise(res => setTimeout(res, s * 1000));

function levelConfigPayload() {
  return {
    game_id: GAME_ID, auto_alloc: 1,
    level_config: levels().map((L) => ({
      level: L.level, base_ante: toWire(L.bet_min), entry_min: toWire(L.entry_min), entry_max: -1, title: L.title,
      recommend_min: toWire(L.entry_min), recommend_max: -1, bet_min: toWire(L.bet_min), bet_max: toWire(L.bet_max), pay_max: -1,
      quick_ante: cfg().chips.slice(0, 5), is_open_jackpot: false, room_tab: 0, extra_json: '',
      svid_list: [1], is_human_alloc: false, seat_count: 7, round: 0, is_quick_alloc: false,
      robot_fill_time: 0, top_open: 0, is_show2to6: false,
      queue_info: { cur_num: L.members, max_num: 200 },
    })),
    game_config: [{ game_id: GAME_ID, show_id: GAME_ID, is_hot: true, is_new: false, status: 0 }],
    alloc_state: { in_alloc: false, seat_count: 7 }, push_num: 0,
  };
}

// table list for the switch-table / choose-table screens (real table + mock ones)
function mockTables(r) {
  const restWait = r.state === 1 ? READY_S : 0;
  const restBet = r.state === 2 ? Math.max(1, r.betLeft || 0) : 0;
  const out = [{ show_table_id: TABLE_ID, show_result: r.history.slice(-20), show_type: r.historyType.slice(-20), table_state: r.state, online_count: online(r), rest_wait_time: restWait, rest_bet_time: restBet }];
  for (let i = 1; i <= 5; i++) {
    out.push({ show_table_id: TABLE_ID + i, show_result: Array.from({ length: 12 }, () => Math.random() * 3 | 0), show_type: [], table_state: 1 + (Math.random() * 3 | 0), online_count: 15 + (Math.random() * 80 | 0), rest_wait_time: Math.random() * 5 | 0, rest_bet_time: Math.random() * 15 | 0 });
  }
  return out;
}

function tableInfo(ws, r) {
  const c = cfg();
  return {
    server_time: now(), state: r.state, game_id: GAME_ID, table_id: TABLE_ID,
    myself_info: { uid: ws._uid, name: ws._user.username || ('Player' + ws._uid), avatar: '', seatid: 0, money: toWire(ws._balance), bet: (ws._bets || zeros()).map(toWire), total_win: 0 },
    sit_down_list: sitList(r), pos_bet_sum_list: r.posBet.map(toWire),
    history_result: r.history.slice(), history_type: r.historyType.slice(),
    reday_time: READY_S, bet_time: c.betSeconds, end_time: END_S, bet_count_down: r.state === 2 ? 10 : 0,
    online_num: online(r), bet_chip_conf: c.chips.slice(),
    bet_odds: c.odds.slice(), region_max_bets: new Array(NPOS).fill(toWire(c.betMax * 10)),
    card_info: cardInfo(r), level_id: ws._level || 1, is_open_croupier: false,
  };
}

// total returned to the player (stake + profit) for the winning positions (WALLET units).
function payout(bets, posWin) {
  const odds = ODDS();
  let credit = 0;
  for (let p = 0; p < NPOS; p++) if (posWin[p]) credit += (bets[p] || 0) + Math.round((bets[p] || 0) * odds[p] / 10000);
  return credit;
}

async function settle(ws, r, posWin) {
  const bets = ws._bets || zeros();
  const staked = bets.reduce((a, b) => a + b, 0);
  let win = capWin(payout(bets, posWin));
  if (win > 0 && staked > 0) { try { const c = await creditWallet(ws._user.id, win, 'win', `Dragon Tiger win (#${r.rid})`); ws._balance = parseFloat(c.new_balance); } catch {} }
  if (staked > 0) recordSession(ws._user.id, staked, win).catch(() => {});
  sendMsg(ws, 'SettlementPush', {
    server_time: now(),
    hand_cards0: { card_list: [r.dragon] }, hand_type0: 1,
    hand_cards1: { card_list: [r.tiger] }, hand_type1: 1,
    myself_win_lose: { uid: ws._uid, name: ws._user.username || '', avatar: '', seatid: 0, money: toWire(ws._balance), bet: bets.map(toWire), total_win: toWire(win) },
    sit_down_list: sitList(r), pos_bet_sum_list: r.posBet.map(toWire), pos_win_flag: posWin, table_id: TABLE_ID,
  });
  ws._bets = zeros();
  // inactivity: warn after N idle rounds, ask to leave after M (like the real game)
  const c = cfg();
  ws._idle = (staked > 0) ? 0 : (ws._idle || 0) + 1;
  if (ws._idle === c.idleWarn || (ws._idle > c.idleWarn && ws._idle < c.idleKick)) {
    sendMsg(ws, 'KickUserPush', { server_time: now(), cur_num: ws._idle, total_num: c.idleKick, table_id: TABLE_ID });
  } else if (ws._idle >= c.idleKick) {
    sendMsg(ws, 'KickUserPush', { server_time: now(), cur_num: ws._idle, total_num: c.idleKick, table_id: TABLE_ID });
    sendMsg(ws, 'LeaveResp', { table_id: TABLE_ID, uid: ws._uid, result: 1, sit_down_list: sitList(r), type: 1 });
    if (ws._room) ws._room.players.delete(ws); ws._room = null; ws._idle = 0;
  }
}

async function recordSession(userId, bet, win) {
  try { await supabase.from('game_sessions').insert({ user_id: userId, game_name: 'Dragon Tiger', bet_amount: bet, win_amount: win, result: win > bet ? 'win' : 'loss' }); } catch {}
}

async function auth(req) {
  try {
    const url = new URL(req.url, 'http://x');
    const token = url.searchParams.get('ptoken') || url.searchParams.get('token');
    if (!token) return null;
    const { data } = await supabase.auth.getUser(token);
    if (!data?.user) return null;
    const { data: p } = await supabase.from('users').select('*').eq('id', data.user.id).single();
    if (!p) return null;
    const { data: w } = await supabase.from('wallets').select('main_balance').eq('user_id', p.id).single();
    return { id: p.id, username: p.username, currency: p.currency || 'INR', balance: parseFloat(w?.main_balance || 0) };
  } catch { return null; }
}

function attach(server) {
  loadProtos();
  const wss = new WebSocketServer({ noServer: true });
  server.on('upgrade', (req, socket, head) => {
    let pathname; try { pathname = new URL(req.url, 'http://x').pathname; } catch { return; }
    if (pathname === '/dt-agent') wss.handleUpgrade(req, socket, head, (ws) => wss.emit('connection', ws, req));
  });

  wss.on('connection', (ws, req) => {
    // Register the message listener SYNCHRONOUSLY and queue frames until auth
    // finishes — the client sends LoginReq right after open, often before the
    // async wallet auth resolves (ws does not buffer for late listeners).
    const queue = [];
    let ready = false;
    ws._hb = null;
    ws.on('message', (buf) => { const b = Buffer.isBuffer(buf) ? buf : Buffer.from(buf); if (!ready) queue.push(b); else handleFrame(ws, b); });

    auth(req).then((user) => {
      console.log('\n🟦 [DT] connect — user:', user ? `${user.username} bal=${user.balance}` : 'UNAUTH');
      if (!user) { try { ws.close(4001, 'auth'); } catch {} return; }
      ws._user = user; ws._uid = (parseInt(user.id.replace(/\D/g, '').slice(-7), 10) || 1000002); ws._balance = user.balance;
      ws._bets = zeros(); ws._tableId = TABLE_ID; ws._room = null;
      ws._hb = setInterval(() => { sendRaw(ws, CMD_HEARTBEAT, HeartBeat, { trans: Date.now() }); }, 15000);
      ready = true;
      while (queue.length) handleFrame(ws, queue.shift());
    });

    async function handleFrame(ws, b) {
      const f = parseFrame(b); if (!f) return;
      const user = ws._user; if (!user) return;
      console.log(`  ⮕ [DT in] cmd=${f.cmd} svc=${f.svc} sub=${f.subtype} seq=${f.seq} len=${f.len} hex=${f.body.slice(0,48).toString('hex')}`);
      try {
        if (f.cmd === 1712) {                     // VerifyLoginTokenReq -> Resp (1713)
          let lr = {}; try { lr = VLTReq.decode(f.body); } catch {}
          const resp = {
            result: 0, uid: ws._uid, agency: '', agency_id: 0,
            username: user.username || ('Player' + ws._uid), token: lr.token || '',
            balance: toWire(ws._balance), game: GAME_ID, hall_url: '', platform: 'web',
            gameinfo: '', currency: user.currency || 'INR', temp_uin: ws._uid,
            ingame_info: { game_id: GAME_ID }, trans: lr.trans || Buffer.alloc(0),
            currency_unit_multi: CURRENCY_UNIT_MULTI, currency_label: user.currency || 'INR',
          };
          sendRaw(ws, 1713, VLTResp, resp, f.seq);
          console.log('  [DT] -> VerifyLoginTokenResp(1713) sent  uid=' + ws._uid + ' bal=' + Math.round(ws._balance));
          return;
        }
        if (f.cmd === CMD_HEARTBEAT || f.cmd === 1600) { sendRaw(ws, CMD_HEARTBEAT, HeartBeat, { trans: Date.now() }, f.seq); return; }
        if (f.cmd === 76004) { return; }            // user set-language notify (no reply)
        if (f.cmd === 2850 && GR.GameRecordResp) {   // GameRecordReq -> Resp(2851), empty history
          sendRaw(ws, 2851, GR.GameRecordResp, { uid: ws._uid, game: GAME_ID, result: 0, endflag: 1, list: [], totalsize: 0 }, f.seq);
          return;
        }

        if (f.cmd === 4704) {                        // GameLevelConfigReq -> Resp(4705)
          sendRaw(ws, 4705, RA.GameLevelConfigResp, levelConfigPayload(), f.seq);
          console.log('  [DT] -> GameLevelConfigResp(4705)');
          return;
        }
        if (f.cmd === 4702) {                        // AllocTableReq
          let ar = {}; try { ar = RA.AllocTableReq.decode(f.body); } catch {}
          const ap = Number(ar.alloc_param);          // >=0 level join, -2 leave, -1 change table
          if (ap === -2) {                              // leave
            if (ws._room) ws._room.players.delete(ws); ws._room = null;
            sendMsg(ws, 'LeaveResp', { table_id: TABLE_ID, uid: ws._uid, result: 1, sit_down_list: [], type: 0 });
            console.log('  [DT] -> LeaveResp (left table)');
            return;
          }
          // SUCCESS = AllocTablePush(10010) which enters the table (AllocTableResp is the error path).
          const lvl = ap >= 0 ? ap : 1;
          const r = getRoom(); r.players.add(ws); ws._room = r; ws._idle = 0; ws._level = lvl;
          sendRaw(ws, 10010, RA.AllocTablePush, { table_id: TABLE_ID, game_id: GAME_ID, svid: 1, in_table: false, level_id: lvl }, f.seq);
          sendMsg(ws, 'TableInfoPush', tableInfo(ws, r));
          console.log('  [DT] -> AllocTablePush(10010, lvl=' + lvl + ') + TableInfoPush(15205)');
          return;
        }

        // dragon game cmds: base 15200
        const sub = f.cmd - DRAGON_BASE;
        if (f.cmd === 2004 || sub === 4) {          // (debug) direct AllocTableReq -> TableInfoPush
          const r = getRoom(); r.players.add(ws); ws._room = r;
          sendMsg(ws, 'TableInfoPush', tableInfo(ws, r));
          console.log('  [DT] -> TableInfoPush sent (joined table)');
          return;
        }
        if (sub === 13) {                            // BetReq (bet amount arrives in WIRE units)
          let br = {}; try { br = T.BetReq.decode(f.body); } catch {}
          const pos = br.pos | 0;
          const amt = Math.round(toWallet(br.bet));   // -> wallet units
          const r = ws._room || getRoom();
          const c = cfg();
          const fail = (code) => sendMsg(ws, 'BetResp', { seq: br.seq, server_time: now(), result: code, pos, bet: toWire(amt), money: toWire(ws._balance), table_id: TABLE_ID });
          if (r.state !== 2 || pos < 0 || pos >= NPOS || amt < c.betMin || (ws._bets[pos] + amt) > c.betMax) { fail(1); return; }
          try {
            const d = await debitWallet(user.id, amt, 'bet', `Dragon Tiger bet pos${pos}`);
            ws._balance = parseFloat(d.new_balance); ws._bets[pos] += amt; r.posBet[pos] += amt;
            recordWager(user.id, amt).catch(() => {});
            sendMsg(ws, 'BetResp', { seq: br.seq, server_time: now(), result: 0, pos, bet: toWire(amt), money: toWire(ws._balance), bet_sum: ws._bets.map(toWire), pos_bet_sum_list: r.posBet.map(toWire), table_id: TABLE_ID, type: 1 });
          } catch { fail(2); }
          return;
        }
        if (sub === 49) {                            // GameTableListReq -> Resp(15250)
          sendMsg(ws, 'GameTableListResp', { server_time: now(), game_id: GAME_ID, params_id: 0, show_table_info: mockTables(ws._room || getRoom()), table_id: TABLE_ID });
          return;
        }
        if (sub === 27) {                            // ShowChooseTableInfoReq -> Resp(15228)
          sendMsg(ws, 'ShowChooseTableInfoResp', { server_time: now(), game_id: GAME_ID, params_id: 0, show_table_info: mockTables(ws._room || getRoom()), table_id: TABLE_ID });
          return;
        }
        if (sub === 19) { sendMsg(ws, 'OnlinePlayersResp', { online_info: [], number: (ws._room || getRoom()).players.size + 30, table_id: TABLE_ID }); return; }
        if (sub === 16) { const r = ws._room || getRoom(); sendMsg(ws, 'HistoryResp', { server_time: now(), history_result: r.history.slice(), history_type: r.historyType.slice(), table_id: TABLE_ID }); return; }
        if (sub === 21) { sendMsg(ws, 'LeaveResp', { table_id: TABLE_ID, uid: ws._uid, result: 1, sit_down_list: [], type: 0 }); return; }
        // unknown — already logged for iteration
      } catch (e) { console.error('  [DT] handler err', e.message); }
    }

    ws.on('close', () => { clearInterval(ws._hb); if (ws._room) ws._room.players.delete(ws); console.log('🟥 [DT] disconnect'); });
    ws.on('error', () => { clearInterval(ws._hb); if (ws._room) ws._room.players.delete(ws); });
  });

  console.log('🐲 [DT-REAL] protobuf agent server attached at /dt-agent');
}

module.exports = { attach };
