// ============================================================
//  7 UP 7 DOWN (REAL KB CLIENT, abUpDown / gameID 104)
//  Same KB "agent" protocol as Dragon Tiger (XOR "EFMNJQKW", 32-byte header,
//  login VerifyLoginToken 1712/1713, roomalloc 4702/4704, heartbeat 1600).
//  Game protocol = package `sevenup`, wire cmds 10403-10416:
//    10403 STAGE_INFO_PUSH, 10404/05 BET req/resp, 10406 BET_PUSH,
//    10407/08 HISTORY, 10412/13 TABLE_LIST, 10414 CHECKOUT, 10415/16 OPERATE.
//  Two dice → sum: 7 Down (2-6) / Lucky 7 (=7) / 7 Up (8-12).  Wallet-wired.
//  NOTE: a few client-UI specifics (exact stage values, zone count/odds, which
//  cmd carries the initial TableInfo) are tuned via the live frame log below.
// ============================================================
const path = require('path');
const protobuf = require('protobufjs');
const { WebSocketServer } = require('ws');
const { supabase } = require('../config/supabase');
const { debitWallet, creditWallet } = require('../services/wallet');
const { recordWager } = require('../services/wager');
const { winRatio, capWin } = require('../services/gameSettings');

const XOR_KEY = Buffer.from('EFMNJQKW', 'utf8');
const xor = (b) => { const o = Buffer.allocUnsafe(b.length); for (let i = 0; i < b.length; i++) o[i] = b[i] ^ XOR_KEY[i % 8]; return o; };

// ── protobuf ──
const PROTO_DIR = path.join(__dirname, 'abupdown_proto');
const root = new protobuf.Root();
let VLTReq, VLTResp, HeartBeat;
const RA = {}, GR = {}, SU = {};
function loadProtos() {
  for (const f of ['account_proto.proto', '1600_agent.proto', '4700_roomalloc.proto', '2850_gamerecord.proto', 'sevenup.proto']) {
    try { root.loadSync(path.join(PROTO_DIR, f), { keepCase: true }); } catch (e) { console.error('[7UD] proto load', f, e.message); }
  }
  VLTReq = root.lookupType('account_proto.VerifyLoginTokenReq');
  VLTResp = root.lookupType('account_proto.VerifyLoginTokenResp');
  HeartBeat = root.lookupType('agent.HeartBeat');
  for (const n of ['GameLevelConfigReq', 'GameLevelConfigResp', 'AllocTableReq', 'AllocTablePush']) { try { RA[n] = root.lookupType('roomalloc.' + n); } catch {} }
  try { GR.GameRecordResp = root.lookupType('gamerecord.GameRecordResp'); } catch {}
  for (const n of ['SevenupStageInfo', 'SevenupTableInfo', 'SevenupUserBetReq', 'SevenupUserBetResp', 'SevenupUserBetPush',
    'SevenupCheckoutResp', 'CheckoutItem', 'WinInfo', 'VipUserInfo', 'BetItem',
    'SevenupGetTableListResp', 'SevenupTableListItem', 'SevenupHistoryLotteryResp', 'SevenupOperateResp', 'SevenupVipSeatInfoPush']) {
    try { SU[n] = root.lookupType('sevenup.' + n); } catch {}
  }
}

// ── framing (cmd at offset 4, both directions) ──
function buildFrame(cmd, body, { dstid = 0, srcid = 0, seq = 0 } = {}) {
  const enc = xor(body); const h = Buffer.alloc(32);
  h[0] = 0xFE; h[1] = 0x01;
  h.writeUInt32BE(cmd >>> 0, 4); h.writeUInt32BE(dstid >>> 0, 12); h.writeUInt32BE(srcid >>> 0, 16);
  h.writeUInt32BE(seq >>> 0, 20); h.writeUInt32BE(1, 24); h.writeUInt32BE(enc.length >>> 0, 28);
  return Buffer.concat([h, enc]);
}
function parseFrame(buf) {
  if (buf.length < 32) return null;
  const cmd = buf.readUInt32BE(4), svc = buf.readUInt16BE(8), len = buf.readUInt32BE(28);
  const body = buf.length >= 32 + len ? xor(buf.slice(32, 32 + len)) : Buffer.alloc(0);
  return { cmd, svc, len, body };
}
function send(ws, cmd, Type, payload, seq = 0) {
  if (!Type) { console.warn('[7UD] no type for cmd', cmd); return; }
  const err = Type.verify(payload); if (err) console.warn('[7UD] verify', cmd, err);
  const body = Type.encode(Type.create(payload)).finish();
  try { ws.send(buildFrame(cmd, Buffer.from(body), { dstid: ws._uid || 0, seq })); } catch {}
}

// ── money: ×1000 wire scale (client divides by currency_unit_multi = 1000) ──
const CURRENCY_UNIT_MULTI = 1000, SCALE = 1000;
const toWire = (w) => Math.round((w || 0) * SCALE);
const toWallet = (raw) => (Number(raw) || 0) / SCALE;

// ── game model: 3 zones — 0 = 7 Down (2-6), 1 = Lucky 7 (=7), 2 = 7 Up (8-12) ──
const ZONE = { DOWN: 0, SEVEN: 1, UP: 2 };
const NZONE = 3;
const zeros = () => new Array(NZONE).fill(0);
const ODDS = () => [20000, 50000, 20000]; // ×1e4: Down 2x, Seven 5x, Up 2x (tuned in browser-test)
const BET_LIMIT = () => [toWire(50000), toWire(50000), toWire(50000)];
const CHIPS = [10, 20, 30, 50, 100, 500, 1000];
const TABLE_ID = 70001, GAME_ID = 104;
const BET_S = 15, STOP_S = 2, RESULT_S = 6;
// stages (best-effort): 1 = betting, 2 = stop/rolling, 3 = result
const STAGE = { BET: 1, STOP: 2, RESULT: 3 };

const rollDie = () => 1 + (Math.random() * 6 | 0);
const now = () => Math.floor(Date.now() / 1000);

// ── shared room ──
let room = null;
function getRoom() {
  if (!room) { room = { players: new Set(), stage: STAGE.BET, rid: 1000, points: [0, 0], totalBet: zeros(), history: [], loop: null, betLeft: BET_S }; startLoop(room); }
  return room;
}
const online = (r) => r.players.size + 40 + (Math.random() * 60 | 0);
function broadcast(r, cmd, Type, payload) { for (const ws of r.players) send(ws, cmd, Type, payload); }

function stageInfo(r) {
  const reveal = r.stage === STAGE.RESULT;
  return { stage: r.stage, continueTime: r.stage === STAGE.BET ? r.betLeft : (r.stage === STAGE.STOP ? STOP_S : RESULT_S),
    round_num: String(r.rid), points: reveal ? r.points : [], isDouble: reveal ? r.points[0] === r.points[1] : false, doubles: [] };
}
function tableInfo(ws, r) {
  return { table_id: TABLE_ID, stage_info: stageInfo(r), user_count: online(r), vip_seat_count: 0,
    vipinfoList: [], betInfo: r.totalBet.map(toWire), selfBet: (ws._bets || zeros()).map(toWire), betLimit: BET_LIMIT(), odds: ODDS() };
}

function outcomeZone(sum) { return sum < 7 ? ZONE.DOWN : sum > 7 ? ZONE.UP : ZONE.SEVEN; }

function startLoop(r) {
  const tick = async () => {
    // BET
    r.rid++; r.stage = STAGE.BET; r.points = [0, 0]; r.totalBet = zeros();
    for (const ws of r.players) ws._bets = zeros();
    broadcast(r, 10403, SU.SevenupStageInfo, stageInfo(r));
    for (let t = BET_S; t > 0; t--) { r.betLeft = t; await wait(1); broadcast(r, 10403, SU.SevenupStageInfo, stageInfo(r)); }
    // STOP
    r.stage = STAGE.STOP; broadcast(r, 10403, SU.SevenupStageInfo, stageInfo(r));
    await wait(STOP_S);
    // ROLL + RESULT
    r.points = [rollDie(), rollDie()];
    const sum = r.points[0] + r.points[1]; const win = outcomeZone(sum);
    r.history.push({ point1: r.points[0], point2: r.points[1], isDouble: r.points[0] === r.points[1] }); if (r.history.length > 50) r.history.shift();
    r.stage = STAGE.RESULT;
    broadcast(r, 10403, SU.SevenupStageInfo, stageInfo(r));
    for (const ws of r.players) await checkout(ws, r, win, sum).catch(() => {});
    await wait(RESULT_S);
    r.loop = setTimeout(tick, 50);
  };
  r.loop = setTimeout(tick, 500);
}
const wait = (s) => new Promise((res) => setTimeout(res, s * 1000));

const ODDS_MULT = () => ODDS().map((o) => o / 10000);   // payout multipliers
async function checkout(ws, r, winZone, sum) {
  const bets = ws._bets || zeros();
  const staked = bets.reduce((a, b) => a + b, 0);
  const mult = ODDS_MULT();
  const winlist = bets.map((b, i) => i === winZone ? Math.round(b * mult[i]) : 0);   // wallet units returned (stake+profit via odds)
  let win = capWin(winlist.reduce((a, b) => a + b, 0));
  if (win > 0 && staked > 0) { try { const c = await creditWallet(ws._user.id, win, 'win', `7Up7Down ${winZone} win (#${r.rid})`); ws._balance = parseFloat(c.new_balance); } catch {} }
  if (staked > 0) recordSession(ws._user.id, staked, win).catch(() => {});
  send(ws, 10414, SU.SevenupCheckoutResp, {
    downWin: winZone === ZONE.DOWN ? 1 : 0, upWin: winZone === ZONE.UP ? 1 : 0, winZone: [winZone],
    selfWin: { seatIndex: 0, winlist: winlist.map(toWire), totalWin: toWire(win), balance: toWire(ws._balance) },
    checklist: [],
  });
  ws._bets = zeros();
}

async function recordSession(userId, bet, win) {
  try { await supabase.from('game_sessions').insert({ user_id: userId, game_name: '7 Up 7 Down', bet_amount: bet, win_amount: win, result: win > bet ? 'win' : 'loss' }); } catch {}
}

function levelConfigPayload() {
  return {
    game_id: GAME_ID, auto_alloc: 1,
    level_config: [
      { level: 1, base_ante: toWire(10), entry_min: 0, entry_max: -1, title: 'Bronze', recommend_min: 0, recommend_max: -1, bet_min: toWire(10), bet_max: toWire(50000), pay_max: -1, quick_ante: CHIPS.slice(0, 5), room_tab: 0, svid_list: [1], seat_count: 0, queue_info: { cur_num: 40 + (Math.random() * 60 | 0), max_num: 500 } },
      { level: 2, base_ante: toWire(100), entry_min: toWire(1000), entry_max: -1, title: 'Gold', recommend_min: toWire(1000), recommend_max: -1, bet_min: toWire(100), bet_max: toWire(500000), pay_max: -1, quick_ante: CHIPS.slice(0, 5), room_tab: 0, svid_list: [1], seat_count: 0, queue_info: { cur_num: 20 + (Math.random() * 40 | 0), max_num: 500 } },
    ],
    game_config: [{ game_id: GAME_ID, show_id: GAME_ID, is_hot: true, is_new: false, status: 0 }],
    alloc_state: { in_alloc: false, seat_count: 0 }, push_num: 0,
  };
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
    if (pathname === '/ud-agent') wss.handleUpgrade(req, socket, head, (ws) => wss.emit('connection', ws, req));
  });

  wss.on('connection', (ws, req) => {
    const queue = []; let ready = false;
    ws.on('message', (buf) => { const b = Buffer.isBuffer(buf) ? buf : Buffer.from(buf); if (!ready) queue.push(b); else handle(ws, b); });
    auth(req).then((user) => {
      console.log('\n🟦 [7UD] connect —', user ? `${user.username} bal=${user.balance}` : 'UNAUTH');
      if (!user) { try { ws.close(4001, 'auth'); } catch {} return; }
      ws._user = user; ws._uid = (parseInt(user.id.replace(/\D/g, '').slice(-7), 10) || 1000003); ws._balance = user.balance; ws._bets = zeros(); ws._room = null;
      ws._hb = setInterval(() => send(ws, 1600, HeartBeat, { trans: Date.now() }), 15000);
      ready = true; while (queue.length) handle(ws, queue.shift());
    });

    async function handle(ws, b) {
      const f = parseFrame(b); if (!f) return; const user = ws._user; if (!user) return;
      console.log(`  ⮕ [7UD in] cmd=${f.cmd} svc=${f.svc} len=${f.len} hex=${f.body.slice(0, 40).toString('hex')}`);
      try {
        if (f.cmd === 1712) {
          let lr = {}; try { lr = VLTReq.decode(f.body); } catch {}
          send(ws, 1713, VLTResp, { result: 0, uid: ws._uid, username: user.username || ('Player' + ws._uid), token: lr.token || '', balance: toWire(ws._balance), game: GAME_ID, platform: 'web', currency: user.currency || 'INR', temp_uin: ws._uid, ingame_info: { game_id: GAME_ID }, trans: lr.trans || Buffer.alloc(0), currency_unit_multi: CURRENCY_UNIT_MULTI, currency_label: user.currency || 'INR' }, f.seq);
          console.log('  [7UD] -> VerifyLoginTokenResp(1713)'); return;
        }
        if (f.cmd === 1600) { send(ws, 1600, HeartBeat, { trans: Date.now() }, f.seq); return; }
        if (f.cmd === 76004) return;
        if (f.cmd === 2850 && GR.GameRecordResp) { send(ws, 2851, GR.GameRecordResp, { uid: ws._uid, game: GAME_ID, result: 0, endflag: 1, list: [], totalsize: 0 }, f.seq); return; }
        if (f.cmd === 4704) { send(ws, 4705, RA.GameLevelConfigResp, levelConfigPayload(), f.seq); console.log('  [7UD] -> GameLevelConfigResp(4705)'); return; }
        if (f.cmd === 4702) {
          let ar = {}; try { ar = RA.AllocTableReq.decode(f.body); } catch {}
          if (Number(ar.alloc_param) === -2) { if (ws._room) ws._room.players.delete(ws); ws._room = null; return; }
          const r = getRoom(); r.players.add(ws); ws._room = r;
          send(ws, 10010, RA.AllocTablePush, { table_id: TABLE_ID, game_id: GAME_ID, svid: 1, in_table: false, level_id: Number(ar.alloc_param) >= 0 ? Number(ar.alloc_param) : 1 }, f.seq);
          // initial table info + current stage (cmd for TableInfo tuned in browser-test)
          send(ws, 10402, SU.SevenupTableInfo, tableInfo(ws, r));
          send(ws, 10403, SU.SevenupStageInfo, stageInfo(r));
          console.log('  [7UD] -> AllocTablePush + TableInfo(10402) + StageInfo(10403)');
          return;
        }
        // ── sevenup game cmds ──
        if (f.cmd === 10404) {                          // USER_BET_REQ
          let br = {}; try { br = SU.SevenupUserBetReq.decode(f.body); } catch {}
          const r = ws._room || getRoom();
          if (r.stage !== STAGE.BET) { send(ws, 10405, SU.SevenupUserBetResp, { result: 1, balance: toWire(ws._balance), selfBet: ws._bets.map(toWire) }, f.seq); return; }
          let totalDebit = 0; const items = (br.betList || []);
          for (const it of items) { const z = it.zone | 0, amt = Math.round(toWallet(it.amount)); if (z >= 0 && z < NZONE && amt > 0) totalDebit += amt; }
          if (totalDebit <= 0) { send(ws, 10405, SU.SevenupUserBetResp, { result: 1, balance: toWire(ws._balance), selfBet: ws._bets.map(toWire) }, f.seq); return; }
          try {
            const d = await debitWallet(user.id, totalDebit, 'bet', '7Up7Down bet'); ws._balance = parseFloat(d.new_balance);
            for (const it of items) { const z = it.zone | 0, amt = Math.round(toWallet(it.amount)); if (z >= 0 && z < NZONE && amt > 0) { ws._bets[z] += amt; r.totalBet[z] += amt; } }
            recordWager(user.id, totalDebit).catch(() => {});
            send(ws, 10405, SU.SevenupUserBetResp, { result: 0, balance: toWire(ws._balance), selfBet: ws._bets.map(toWire) }, f.seq);
            broadcast(r, 10406, SU.SevenupUserBetPush, { totalBet: r.totalBet.map(toWire), selfBet: zeros().map(toWire), betinfoList: items });
          } catch { send(ws, 10405, SU.SevenupUserBetResp, { result: 2, balance: toWire(ws._balance), selfBet: ws._bets.map(toWire) }, f.seq); }
          return;
        }
        if (f.cmd === 10407) {                          // HISTORY_LOTTERY_REQ
          const r = ws._room || getRoom();
          send(ws, 10408, SU.SevenupHistoryLotteryResp, { result: 0, handsNum: r.history.length, winInfoList: r.history.slice(-20), winRateList: [] }, f.seq);
          return;
        }
        if (f.cmd === 10412) {                          // GET_TABLE_LIST_REQ
          const r = ws._room || getRoom();
          send(ws, 10413, SU.SevenupGetTableListResp, { tableList: [{ table_id: TABLE_ID, stage: r.stage, continueTime: r.betLeft, user_count: online(r), winInfoList: r.history.slice(-10) }] }, f.seq);
          return;
        }
        if (f.cmd === 10409) { send(ws, 10410, SU.SevenupGetVipBetResp || SU.SevenupUserBetResp, { seatIndex: 0, betZone: [] }, f.seq); return; }
        if (f.cmd === 10415 && SU.SevenupOperateResp) { send(ws, 10416, SU.SevenupOperateResp, { result: 0, opType: 0, balance: toWire(ws._balance), selfBet: ws._bets.map(toWire) }, f.seq); return; }
        // unknown — logged for iteration
      } catch (e) { console.error('  [7UD] handler err', e.message); }
    }

    ws.on('close', () => { clearInterval(ws._hb); if (ws._room) ws._room.players.delete(ws); console.log('🟥 [7UD] disconnect'); });
    ws.on('error', () => { clearInterval(ws._hb); if (ws._room) ws._room.players.delete(ws); });
  });

  console.log('🎲 [7UD] abUpDown agent server attached at /ud-agent');
}

module.exports = { attach };
