// ============================================================
//  7 UP 7 DOWN — sprlbegaming REAL client, wired to OUR wallet.
//  Protocol faithfully replicated from the live wss capture (see memory
//  sprl7ud-protocol). JSON over raw WS at /su/api/game/websocket (AES off via
//  our config.js). 13 zones: 0=7Down(sum<7) 1=7Up(sum>7) 2..12=exact tile sum.
//  Stages: 1 GAMESTART(1s) 2 BET(16s) 3 SETTLE(8s, dice+checkout) 4 GAMEOVER(4s).
// ============================================================
const { WebSocketServer } = require('ws');
const { supabase } = require('../config/supabase');
const { debitWallet, creditWallet } = require('../services/wallet');
const { recordWager } = require('../services/wager');
const { capWin } = require('../services/gameSettings');
const { getSevenupSettings } = require('../services/sevenupSettings');
const S = () => getSevenupSettings();

const GAME_ID = 104, SVID = 10400, TABLE_ID = 1003;
const CURRENCY_UNIT_MULTI = 1000, SCALE = 1000;
const toWire = (w) => Math.round((w || 0) * SCALE);          // wallet -> wire (number)
const wstr = (w) => String(toWire(w));                       // wallet -> wire (string)
const toWallet = (raw) => (Number(raw) || 0) / SCALE;        // wire -> wallet

// 13 zones. 0=Down 1=Up, 2..12 = exact dice-sum tiles. payout multipliers:
const ZONE = { DOWN: 0, UP: 1 };
const NZONE = 13;
const zeros = () => new Array(NZONE).fill(0);
const zerosStr = () => new Array(NZONE).fill('0');
//                            0  1   2   3   4  5  6  7  8  9 10 11 12   (idx)
const ODDS_MULT_DEFAULT = [2, 2, 30, 15, 10, 8, 6, 5, 6, 8, 10, 15, 30]; // down,up, tiles sum2..12
const oddsArr = () => (S().oddsMult && S().oddsMult.length === NZONE ? S().oddsMult : ODDS_MULT_DEFAULT);
const zoneWins = (z, sum) => (z === ZONE.DOWN ? sum < 7 : z === ZONE.UP ? sum > 7 : z === sum);
const chipsWire = () => { const c = (S().chips || []).map((v) => String(v * SCALE)); return c.length ? c : ['10000', '50000', '100000', '500000']; };

const START_S = 1;
const STAGE = { GAMESTART: 1, BET: 2, SETTLE: 3, GAMEOVER: 4 };
const BOT_NAMES = ['Rahul', 'Priya', 'Arjun', 'Sneha', 'Vikram', 'Anita', 'Karan', 'Deepa', 'Sahil', 'Meera', 'Rohit', 'Pooja', 'Amit', 'Nisha', 'Vijay'];

const rollDie = () => 1 + (Math.random() * 6 | 0);
const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const wait = (s) => new Promise((r) => setTimeout(r, s * 1000));
let _rid = 10843790000000000;
const nextRoundId = () => String(_rid += rnd(4000000000, 4400000000));

function send(ws, route, data) {
  try { ws.send(JSON.stringify({ route, data: data || {}, timestamp: Date.now() })); } catch {}
}
function broadcast(r, route, dataFn) { for (const ws of r.players) send(ws, route, typeof dataFn === 'function' ? dataFn(ws) : dataFn); }

// ── doubles: per-round per-zone bonus multiplier x1e4 (mostly 1x, some boosted) ──
function makeDoubles() {
  const cfg = S();
  const d = new Array(NZONE).fill(10000);
  if (Math.random() * 100 < cfg.doubleChance) {
    const n = rnd(1, Math.max(1, cfg.doubleZones));
    for (let i = 0; i < n; i++) d[rnd(2, NZONE - 1)] = [20000, 30000, 60000, 80000, 120000, 180000, 240000, 360000][rnd(0, 7)];
  }
  return d;
}

// ── mock players ──
function makeBots() {
  const st = S(); const n = rnd(st.botsMin, Math.max(st.botsMin + 1, st.botsMax)), bots = [];
  for (let i = 0; i < 3; i++) bots.push({ seatIndex: i, uid: rnd(10000, 999999), nick: String(rnd(2000000, 9999999)), avatar: String(rnd(1, 9)), sex: rnd(0, 1), balance: rnd(500, 9000) * 1000 * 1000, net: rnd(-400, 900) * 1000 * 1000, lastWin: 0, bets: zeros(), totalWin: 0 });
  return { seats: bots, count: n };
}
function vipList(r) {
  return r.bots.seats.map((b) => ({
    seatIndex: b.seatIndex,
    userinfo: JSON.stringify({ avatar: b.avatar, channel: 'default', money: null, nick: b.nick, sex: b.sex, uid: b.uid, vipLevel: 0 }),
    balance: Math.round(b.balance || 0), totalWin: Math.round(b.net || 0), onlist: 1,
  }));
}

let room = null;
function getRoom() {
  if (!room) { room = { players: new Set(), stage: STAGE.BET, roundNum: nextRoundId(), points: [], totalBet: zeros(), doubles: makeDoubles(), history: [], bots: makeBots(), contTime: S().betSeconds, loop: null }; startLoop(room); }
  return room;
}
const online = (r) => r.bots.count + r.players.size;

function stageInfo(r) {
  const reveal = r.stage === STAGE.SETTLE || r.stage === STAGE.GAMEOVER;
  return {
    stage: r.stage, continueTime: r.contTime, round_num: r.roundNum,
    points: reveal ? r.points : [], isDouble: reveal ? r.points[0] === r.points[1] : false,
    doubles: r.doubles,
  };
}
function tableInfoData(ws, r) {
  return {
    table_id: TABLE_ID,
    stage_info: { stage: r.stage, continueTime: r.contTime, roundId: r.roundNum, points: r.stage >= STAGE.SETTLE ? r.points : [], doubles: r.doubles, double: r.stage >= STAGE.SETTLE && r.points[0] === r.points[1] },
    user_count: online(r), vip_seat_count: r.bots.seats.length, vipinfoList: vipList(r),
    betInfo: r.totalBet.slice(), selfBet: (ws._bets || zeros()).map((b) => toWire(b)),
    betLimit: new Array(NZONE).fill(toWire(S().betMax)), odds: oddsArr().map((m) => Math.round((m - 1) * 10000)),
  };
}
function historyResp(r) {
  return { result: 0, handsNum: r.history.length, winInfoList: r.history.slice(-30).reverse(), winRateList: [], index: r.history.length };
}

// ── mock betting (incremental UserBetPush like the real server) ──
function botBetTick(r) {
  const inc = zeros(); let any = false;
  const k = rnd(3, 7);
  for (let i = 0; i < k; i++) {
    const z = Math.random() < 0.55 ? rnd(0, 1) : rnd(2, 12);
    const amt = [10000, 20000, 50000, 100000][rnd(0, 3)];
    inc[z] += amt; r.totalBet[z] += amt; r.bots._pool = (r.bots._pool || 0); any = true;
  }
  if (!any) return;
  const betinfoList = []; for (let z = 0; z < NZONE; z++) if (inc[z] > 0) betinfoList.push({ zone: z, amount: inc[z], seatIndex: -1 });
  broadcast(r, 'sevenup.SevenupUserBetPush', (ws) => ({ totalBet: r.totalBet.slice(), selfBet: (ws._bets || zeros()).map((b) => toWire(b)), betinfoList }));
}
function pushUserCount(r) { broadcast(r, 'gamebase.UserStandUpPush', { uid: 0, userCount: online(r) + rnd(-2, 2) }); }

function startLoop(r) {
  const tick = async () => {
    const cfg = S();
    const BET_S = cfg.betSeconds, SETTLE_S = cfg.settleSeconds, GAMEOVER_S = cfg.gameoverSeconds;
    // GAMESTART
    r.roundNum = nextRoundId(); r.points = []; r.totalBet = zeros(); r.doubles = makeDoubles();
    for (const ws of r.players) ws._bets = zeros();
    for (const b of r.bots.seats) { b.bets = zeros(); for (let j = 0; j < rnd(1, 4); j++) { const z = Math.random() < 0.6 ? rnd(0, 1) : rnd(2, 12); const a = [10000, 50000, 100000, 500000][rnd(0, 3)]; b.bets[z] += a; r.totalBet[z] += a; } }
    if (Math.random() < 0.2) r.bots = makeBots();
    r.stage = STAGE.GAMESTART; r.contTime = START_S;
    broadcast(r, 'sevenup.SevenupStageInfo', stageInfo(r)); pushUserCount(r);
    await wait(START_S);
    // BET
    r.stage = STAGE.BET; r.contTime = BET_S;
    broadcast(r, 'sevenup.SevenupStageInfo', stageInfo(r));
    for (let t = 0; t < BET_S - 1; t++) { await wait(1); botBetTick(r); if (t % 4 === 0) pushUserCount(r); }
    await wait(1);
    // SETTLE — roll (with admin win/RTP control), reveal, checkout
    r.points = pickResult(r, cfg);
    const sum = r.points[0] + r.points[1];
    r.history.push({ point1: r.points[0], point2: r.points[1], isDouble: r.points[0] === r.points[1] });
    if (r.history.length > 60) r.history.shift();
    r.stage = STAGE.SETTLE; r.contTime = SETTLE_S;
    broadcast(r, 'sevenup.SevenupStageInfo', stageInfo(r));
    settleBots(r, sum);
    for (const ws of r.players) await checkout(ws, r, sum).catch(() => {});
    await wait(SETTLE_S);
    // GAMEOVER — winners
    r.stage = STAGE.GAMEOVER; r.contTime = GAMEOVER_S;
    broadcast(r, 'sevenup.SevenupStageInfo', stageInfo(r));
    broadcast(r, 'sevenup.SevenupVipSeatInfoPush', { vipinfoList: vipList(r) });
    await wait(GAMEOVER_S);
    r.loop = setTimeout(tick, 30);
  };
  r.loop = setTimeout(tick, 400);
}

// admin win control: force an outcome, or with houseEdge% pick the lowest-paying roll for real players
function realPayout(r, sum) {
  let p = 0; const o = oddsArr();
  for (const ws of r.players) { const b = ws._bets || zeros(); for (let z = 0; z < NZONE; z++) if (zoneWins(z, sum)) p += (b[z] || 0) * o[z] * ((r.doubles[z] || 10000) / 10000); }
  return p;
}
function pickResult(r, cfg) {
  const f = cfg.forceResult;
  if (f === 'down') return forceSum(rnd(2, 6));
  if (f === 'up') return forceSum(rnd(8, 12));
  if (f === 'seven') return [rnd(1, 6), 0].map((d, i) => (i === 0 ? d : 7 - d));
  if (cfg.houseEdge > 0 && r.players.size > 0 && Math.random() * 100 < cfg.houseEdge) {
    let best = null, bestPay = Infinity;
    for (let i = 0; i < 10; i++) { const pt = [rollDie(), rollDie()]; const pay = realPayout(r, pt[0] + pt[1]); if (pay < bestPay) { bestPay = pay; best = pt; } }
    return best || [rollDie(), rollDie()];
  }
  return [rollDie(), rollDie()];
}
function forceSum(target) { let a = rnd(Math.max(1, target - 6), Math.min(6, target - 1)); return [a, target - a]; }

const mult = (r, z) => oddsArr()[z] * ((r.doubles[z] || 10000) / 10000);
function settleBots(r, sum) {
  for (const b of r.bots.seats) { const stake = b.bets.reduce((a, x) => a + (x || 0), 0); let w = 0; for (let z = 0; z < NZONE; z++) if (zoneWins(z, sum)) w += Math.round((b.bets[z] || 0) * mult(r, z)); b.lastWin = w; b.balance += w - stake; b.net = (b.net || 0) + w - stake; b.totalWin = w; }
}

async function checkout(ws, r, sum) {
  const bets = ws._bets || zeros();
  const staked = bets.reduce((a, b) => a + b, 0);
  const winlistW = bets.map((b, z) => (zoneWins(z, sum) ? Math.round(b * mult(r, z)) : 0));   // wallet units
  let win = capWin(winlistW.reduce((a, b) => a + b, 0));
  if (win > 0 && staked > 0) { try { const c = await creditWallet(ws._user.id, win, 'win', `7Up7Down win`); ws._balance = parseFloat(c.new_balance); } catch {} }
  if (staked > 0) recordSession(ws._user.id, staked, win).catch(() => {});
  const winZone = []; for (let z = 0; z < NZONE; z++) if (zoneWins(z, sum)) winZone.push(z);
  // checklist: top mock winners + one anonymous aggregate, like the real server
  const checklist = [{ seatIndex: -1, winlist: r.totalBet.map((p, z) => (zoneWins(z, sum) ? Math.round(p * mult(r, z)) : 0)), totalWin: r.totalBet.reduce((a, p, z) => a + (zoneWins(z, sum) ? Math.round(p * mult(r, z)) : 0), 0), balance: 0, datatest: '' }];
  for (const b of r.bots.seats) checklist.push({ seatIndex: b.seatIndex, winlist: b.bets.map((bb, z) => (zoneWins(z, sum) ? Math.round(bb * mult(r, z)) : 0)), totalWin: Math.round(b.lastWin || 0), balance: Math.round(b.balance || 0), datatest: '' });
  send(ws, 'sevenup.SevenupCheckoutResp', {
    downWin: zoneWins(ZONE.DOWN, sum) ? Math.round(r.totalBet[0] * mult(r, 0)) : 0,
    upWin: zoneWins(ZONE.UP, sum) ? Math.round(r.totalBet[1] * mult(r, 1)) : 0,
    winZone,
    selfWin: { seatIndex: 0, winlist: winlistW.map(toWire), totalWin: toWire(win), balance: toWire(ws._balance), datatest: '' },
    checklist,
  });
  ws._bets = zeros();
}
async function recordSession(userId, bet, win) {
  try { await supabase.from('game_sessions').insert({ user_id: userId, game_name: '7 Up 7 Down', bet_amount: bet, win_amount: win, result: win > bet ? 'win' : 'loss' }); } catch {}
}

function levelConfigData() {
  const mk = (lvl, emin, bmax, qa) => ({ level: lvl, base_ante: '10000', entry_min: emin, entry_max: '-1', title: lvl === 10400 ? 'lv1' : 'lv2', recommend_min: emin, recommend_max: '-1', bet_min: String(toWire(S().betMin)), bet_max: bmax, pay_max: '-1', quick_ante: qa, is_open_jackpot: false, room_tab: 0 });
  return { game_id: GAME_ID, auto_alloc: 0, level_config: [
    mk(10400, '0', String(toWire(S().betMax)), chipsWire()),
    mk(10401, '0', String(toWire(S().betMax * 5)), chipsWire()),
  ] };
}
function levelTableListData(r, level) {
  const tables = [];
  for (let i = 0; i < 6; i++) tables.push({ table_id: TABLE_ID + i, level: level || 10400, player_num: rnd(40, 90), status: r.stage, change_time: i === 0 ? r.contTime : rnd(2, 14), index: i, base_ante: '10000', bet_min: String(toWire(S().betMin)), bet_max: String(toWire(S().betMax)), pay_max: '-1', winInfoList: r.history.slice(-10).reverse() });
  tables[0].table_id = TABLE_ID;
  return { level: level || 10400, tableList: tables };
}

async function auth(req) {
  try {
    const url = new URL(req.url, 'http://x');
    const token = url.searchParams.get('token') || url.searchParams.get('ptoken');
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
  const wss = new WebSocketServer({ noServer: true });
  server.on('upgrade', (req, socket, head) => {
    let pathname; try { pathname = new URL(req.url, 'http://x').pathname; } catch { return; }
    if (pathname === '/su/api/game/websocket') wss.handleUpgrade(req, socket, head, (ws) => wss.emit('connection', ws, req));
  });

  wss.on('connection', (ws, req) => {
    const queue = []; let ready = false;
    ws.on('message', (buf) => { const s = buf.toString(); if (!ready) queue.push(s); else handle(ws, s); });
    auth(req).then((user) => {
      console.log('\n🟩 [SU] connect —', user ? `${user.username} bal=${user.balance}` : 'UNAUTH');
      if (!user) { try { ws.close(4001, 'auth'); } catch {} return; }
      ws._user = user; ws._uid = (parseInt(String(user.id).replace(/\D/g, '').slice(-7), 10) || 1000104); ws._balance = user.balance; ws._bets = zeros(); ws._room = null;
      ws._hb = setInterval(() => send(ws, 'agent.HeartBeat', { trans: Date.now() }), 15000);
      ready = true; while (queue.length) handle(ws, queue.shift());
    });

    async function handle(ws, raw) {
      let msg; try { msg = JSON.parse(raw); } catch { return; }
      const route = msg.route; const data = msg.data || {}; const user = ws._user; if (!user) return;
      console.log(`  ⮕ [SU in] ${route} ${JSON.stringify(data).slice(0, 90)}`);
      try {
        if (route === 'account_proto.VerifyLoginTokenReq') {
          send(ws, 'account_proto.VerifyLoginTokenResp', {
            result: 0, uid: ws._uid, agency: '10001', agency_id: 10001, username: user.username || ('Player' + ws._uid), token: data.token || '',
            balance: wstr(ws._balance), game: GAME_ID, hall_url: '', platform: 'web',
            gameinfo: '{"extern_json":"","fullscreen":0}', currency: S().currency, temp_uin: ws._uid,
            ingame_info: { game_id: GAME_ID, game_srvtype: 5, game_svid: SVID, game_tid: TABLE_ID },
            currency_unit_multi: String(CURRENCY_UNIT_MULTI), currency_label: S().currencySymbol,
          });
          return;
        }
        if (route === 'agent.HeartBeat') { send(ws, 'agent.HeartBeat', { trans: data.trans || Date.now() }); return; }
        if (route === 'asset.AssetReq') { send(ws, 'asset.AssetResp', { uid: ws._uid, balance: wstr(ws._balance), currency: S().currency, currency_unit_multi: String(CURRENCY_UNIT_MULTI) }); return; }
        if (route === 'client_proto.SetLangCodeReq' || route === 'client_proto.SetUserInfoReq') { send(ws, route.replace('Req', 'Resp'), { result: 0 }); return; }
        if (route === 'gamerecord.GameRecordReq') { send(ws, 'gamerecord.GameRecordResp', { uid: ws._uid, game: GAME_ID, result: 0, endflag: 1, list: [], totalsize: 0 }); return; }
        if (route === 'roomalloc.GameLevelConfigReq') { send(ws, 'roomalloc.GameLevelConfigResp', levelConfigData()); return; }
        if (route === 'roomalloc.LevelTableInfoReq') { const r = getRoom(); send(ws, 'roomalloc.LevelTableInfoResp', levelTableListData(r, data.level)); return; }
        if (route === 'roomalloc.AllocTableReq') { send(ws, 'roomalloc.AllocTableResp', { result: 0, table_id: TABLE_ID, game_id: GAME_ID, svid: SVID, level_id: 10400 }); send(ws, 'gamebase.AllocTablePush', { table_id: TABLE_ID, game_id: GAME_ID, svid: SVID, level_id: 10400 }); return; }
        if (route === 'gamebase.UserJoinTableReq') {
          const r = getRoom(); r.players.add(ws); ws._room = r; ws._bets = zeros();
          send(ws, 'gamebase.UserJoinTableResp', { result: 0, msgname: 'sevenup.SevenupTableInfo', table_id: TABLE_ID, room_level: 10400, balance: wstr(ws._balance), userinfo: JSON.stringify({ avatar: String((ws._uid % 9) + 1), channel: 'web', money: wstr(ws._balance), nick: user.username || ('Player' + ws._uid), sex: 1, uid: ws._uid, vipLevel: 0 }), tableinfo: tableInfoData(ws, r) });
          send(ws, 'sevenup.SevenupVipSeatInfoPush', { vipinfoList: vipList(r) });
          send(ws, 'sevenup.SevenupHistoryLottery', historyResp(r));
          return;
        }
        if (route === 'gamebase.GetGameRuleReq') { send(ws, 'gamebase.GetGameRuleResp', { result: 0, rule: '' }); return; }
        if (route === 'gamebase.LeaveRoomReq') { if (ws._room) ws._room.players.delete(ws); ws._room = null; send(ws, 'gamebase.LeaveRoomResp', { result: 0 }); return; }
        if (route === 'sevenup.SevenupHistoryLottery') { const r = ws._room || getRoom(); send(ws, 'sevenup.SevenupHistoryLottery', historyResp(r)); return; }
        if (route === 'sevenup.SevenupUserBet') {
          const r = ws._room || getRoom();
          if (r.stage !== STAGE.BET) { send(ws, 'sevenup.SevenupUserBet', { result: 1, balance: toWire(ws._balance), selfBet: ws._bets.map((b) => toWire(b)) }); return; }
          const items = data.betList || [];
          let totalDebit = 0;
          for (const it of items) { const z = it.zone | 0, amt = Math.round(toWallet(it.amount)); if (z >= 0 && z < NZONE && amt > 0) totalDebit += amt; }
          if (totalDebit <= 0) { send(ws, 'sevenup.SevenupUserBet', { result: 1, balance: toWire(ws._balance), selfBet: ws._bets.map((b) => toWire(b)) }); return; }
          if (totalDebit > ws._balance) { send(ws, 'sevenup.SevenupUserBet', { result: 11, balance: toWire(ws._balance), selfBet: ws._bets.map((b) => toWire(b)) }); return; }
          try {
            const d = await debitWallet(user.id, totalDebit, 'bet', '7Up7Down bet'); ws._balance = parseFloat(d.new_balance);
            for (const it of items) { const z = it.zone | 0, amt = Math.round(toWallet(it.amount)); if (z >= 0 && z < NZONE && amt > 0) { ws._bets[z] += amt; r.totalBet[z] += toWire(amt); } }
            recordWager(user.id, totalDebit).catch(() => {});
            send(ws, 'sevenup.SevenupUserBet', { result: 0, balance: toWire(ws._balance), selfBet: ws._bets.map((b) => toWire(b)) });
            broadcast(r, 'sevenup.SevenupUserBetPush', (w) => ({ totalBet: r.totalBet.slice(), selfBet: (w._bets || zeros()).map((b) => toWire(b)), betinfoList: items.map((it) => ({ zone: it.zone | 0, amount: Math.round(Number(it.amount)) || 0, seatIndex: -1 })) }));
          } catch { send(ws, 'sevenup.SevenupUserBet', { result: 2, balance: toWire(ws._balance), selfBet: ws._bets.map((b) => toWire(b)) }); }
          return;
        }
        if (route === 'sevenup.SevenupOperate' || route === 'sevenup.SevenupGetVipBet') { send(ws, route, { result: 0, balance: toWire(ws._balance) }); return; }
      } catch (e) { console.error('  [SU] handler err', route, e.message); }
    }

    ws.on('close', () => { clearInterval(ws._hb); if (ws._room) ws._room.players.delete(ws); console.log('🟥 [SU] disconnect'); });
    ws.on('error', () => { clearInterval(ws._hb); if (ws._room) ws._room.players.delete(ws); });
  });

  require('../services/sevenupSettings').refreshSevenupSettings().catch(() => {});  // seed su_* keys so the admin panel shows them
  console.log('🎲 [SU] sprlbegaming 7Up7Down server attached at /su/api/game/websocket (protocol-faithful, admin-tunable)');
}

module.exports = { attach };
