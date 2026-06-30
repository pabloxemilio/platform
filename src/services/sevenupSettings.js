// ============================================================
//  7 Up 7 Down (sprlbegaming) live settings — read from `site_settings` so the
//  admin panel controls the table (chips, bots, odds, timings, limits, and the
//  win/RTP bias) without code changes. Cached so the hot path never awaits.
//  Missing keys are auto-seeded so they appear (editable) in the admin panel.
// ============================================================
const { supabase } = require('../config/supabase');

const TTL = 10000;
let cached = null, at = 0, inflight = false, seeded = false;

const DEFAULTS = {
  su_bet_seconds: '16',          // betting window
  su_settle_seconds: '8',        // dice reveal / payout window
  su_gameover_seconds: '4',      // result hold before next round
  su_chips: '10,50,100,500,1000,5000',  // chip denominations (display units)
  su_bots_min: '45',             // mock "players online" lower bound
  su_bots_max: '75',             // upper bound
  su_bet_min: '10',              // min bet per tap (display units)
  su_bet_max: '1000000',         // max bet per zone (display units)
  su_odds_down: '2',             // 7 Down payout multiple (2 = 1:1)
  su_odds_up: '2',               // 7 Up
  su_odds_seven: '5',            // Lucky 7 / tile-7 (5 = 1:4)
  su_tile_margin: '0',           // extra house margin % on tile odds (0 = exact real-game ratios)
  su_house_edge: '6',            // % of rounds the server biases the dice toward the lowest payout
  su_force_result: 'off',        // off | down | up | seven  (force the round outcome)
  su_currency: 'PKR',            // display currency code (PKR/INR/USD/...) — overrides user profile
  su_win_animation: '1',         // 1 = show win stars/coins fly to avatar, 0 = off
  su_double_chance: '70',        // % of rounds that have Multiple-Mode ×N star tiles
  su_double_zones: '4',          // max number of tiles boosted in a round
};

const CCY_SYMBOL = { PKR: '₨', INR: '₹', USD: '$', EUR: '€', GBP: '£', BDT: '৳', NPR: '₨', LKR: '₨', AED: 'د.إ', NGN: '₦', BRL: 'R$', PHP: '₱', IDR: 'Rp', VND: '₫', THB: '฿' };

async function ensureSeeded(map) {
  if (seeded) return;
  const missing = Object.keys(DEFAULTS).filter((k) => !(k in map));
  if (missing.length) { try { await supabase.from('site_settings').insert(missing.map((k) => ({ key: k, value: DEFAULTS[k] }))); } catch {} }
  seeded = true;
}

const numList = (s) => String(s).split(',').map((x) => parseInt(String(x).trim(), 10)).filter((n) => Number.isFinite(n) && n > 0);
const num = (v, d) => { const n = Number(v); return Number.isFinite(n) ? n : d; };
const int = (v, d) => { const n = parseInt(v, 10); return Number.isFinite(n) ? n : d; };

function build(map) {
  const g = (k) => (map[k] != null && map[k] !== '') ? map[k] : DEFAULTS[k];
  let chips = numList(g('su_chips')); if (!chips.length) chips = numList(DEFAULTS.su_chips);
  // 13 payout multipliers: 0=down 1=up, 2..12 = exact tile sum (rarity based, minus margin)
  const oDown = Math.max(1.01, num(g('su_odds_down'), 2));
  const oUp = Math.max(1.01, num(g('su_odds_up'), 2));
  const oSeven = Math.max(1.01, num(g('su_odds_seven'), 5));
  const margin = Math.max(0, Math.min(40, num(g('su_tile_margin'), 0))) / 100;
  // real sprlbegaming 7up7down profit ratios (the "1:N" shown on each tile)
  const RATIO = { 2: 26, 3: 12, 4: 8, 5: 6, 6: 5, 7: 4, 8: 5, 9: 6, 10: 8, 11: 12, 12: 26 };
  const oddsMult = new Array(13);
  // oddsMult = TOTAL return multiple = profit ratio + 1  (down/up/seven admin-tunable; tiles = real ladder)
  oddsMult[0] = oDown; oddsMult[1] = oUp;
  for (let sum = 2; sum <= 12; sum++) {
    const baseRatio = (sum === 7) ? (oSeven - 1) : RATIO[sum];
    oddsMult[sum] = Math.max(1, Math.round(baseRatio * (1 - margin))) + 1;
  }
  return {
    chips,
    betSeconds: Math.max(5, Math.min(60, int(g('su_bet_seconds'), 16))),
    settleSeconds: Math.max(3, Math.min(30, int(g('su_settle_seconds'), 8))),
    gameoverSeconds: Math.max(1, Math.min(20, int(g('su_gameover_seconds'), 4))),
    botsMin: Math.max(0, int(g('su_bots_min'), 45)),
    botsMax: Math.max(1, int(g('su_bots_max'), 75)),
    betMin: Math.max(1, int(g('su_bet_min'), 10)),
    betMax: Math.max(1, int(g('su_bet_max'), 1000000)),
    oddsMult,
    houseEdge: Math.max(0, Math.min(100, num(g('su_house_edge'), 6))),
    forceResult: String(g('su_force_result') || 'off').toLowerCase(),
    currency: String(g('su_currency') || 'PKR').toUpperCase().trim(),
    currencySymbol: CCY_SYMBOL[String(g('su_currency') || 'PKR').toUpperCase().trim()] || '₨',
    winAnimation: int(g('su_win_animation'), 1) !== 0,
    doubleChance: Math.max(0, Math.min(100, num(g('su_double_chance'), 70))),
    doubleZones: Math.max(1, Math.min(13, int(g('su_double_zones'), 4))),
  };
}

async function refresh() {
  if (inflight) return cached;
  inflight = true;
  try {
    const { data } = await supabase.from('site_settings').select('key,value');
    const map = {}; (data || []).forEach((r) => { map[r.key] = r.value; });
    await ensureSeeded(map);
    cached = build(map); at = Date.now();
  } catch { if (!cached) cached = build({}); } finally { inflight = false; }
  return cached;
}

function getSevenupSettings() {
  if (!cached) { refresh().catch(() => {}); return cached || build({}); }
  if (Date.now() - at > TTL) refresh().catch(() => {});
  return cached;
}
function refreshSevenupSettings() { at = 0; return refresh(); }

module.exports = { getSevenupSettings, refreshSevenupSettings };
