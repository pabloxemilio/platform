// ============================================================
//  VORTEX live settings — every knob the admin panel controls, read from
//  `site_settings` (vtx_* keys), cached 10s, auto-seeded so they show up
//  editable in the admin panel. Mirrors sevenupSettings.js.
//  Mechanics use the REAL captured Vortex data: symbol coeff ladders, RTP 97,
//  chips [1,2,3,5,10,15,20,50,100,200,500]. See memory vortex-protocol.
// ============================================================
const { supabase } = require('../config/supabase');

const TTL = 10000;
let cached = null, at = 0, inflight = false, seeded = false;

const DEFAULTS = {
  // round timing
  vtx_bet_seconds: '6',            // betting window
  vtx_result_seconds: '3.2',       // result/bust hold before next round
  vtx_tick_ms: '80',               // multiplier update interval
  // economy / RTP
  vtx_rtp: '97',                   // target return-to-player %
  vtx_instant_bust: '3',           // % of rounds that bust instantly at 1.00x
  vtx_max_coef: '200',             // cap on the multiplier (real game tops at 200x)
  vtx_max_win: '0',                // absolute max win per bet (0 = no extra cap, uses RTP+cap)
  vtx_force_result: 'off',         // off | win (force a high bust) | bust (force instant) — testing
  // bet limits / chips
  vtx_min_bet: '1',
  vtx_max_bet: '1000',
  vtx_chips: '1,2,3,5,10,15,20,50,100,200,500',  // real Vortex chip ladder
  vtx_default_chip: '10',
  // climb feel
  vtx_curve_speed: '0.09',         // how fast the multiplier accelerates
  vtx_curve_accel: '0.05',         // extra acceleration over time
  // presentation
  vtx_currency: 'PKR',             // display currency
  vtx_online_min: '90',            // fake "players online" lower bound
  vtx_online_max: '260',
  vtx_auto_cashout: '1',           // allow auto-cashout target (1/0)
  vtx_partial_cashout: '1',        // allow partial cashout (1/0)
  // symbol coeff ladders (the real captured values) — JSON arrays
  vtx_coeff_symbol1: '1.55,4.85,10,7',
  vtx_coeff_symbol2: '2.5,7.7,16,27.5,44,20.5',
  vtx_coeff_symbol3: '3.9,12.5,28,52,85,133,200',
  // symbol rarity weights (higher = appears more) — controls difficulty/RTP feel
  vtx_weight_symbol1: '50',
  vtx_weight_symbol2: '30',
  vtx_weight_symbol3: '12',
  vtx_weight_neutral: '40',
  vtx_weight_loss: '28',
};

const CCY_SYMBOL = { PKR: '₨', INR: '₹', USD: '$', EUR: '€', GBP: '£', BDT: '৳', NPR: '₨', LKR: '₨', AED: 'د.إ', NGN: '₦', BRL: 'R$', PHP: '₱', IDR: 'Rp', VND: '₫', THB: '฿' };

async function ensureSeeded(map) {
  if (seeded) return;
  const missing = Object.keys(DEFAULTS).filter((k) => !(k in map));
  if (missing.length) { try { await supabase.from('site_settings').insert(missing.map((k) => ({ key: k, value: DEFAULTS[k] }))); } catch {} }
  seeded = true;
}

const numList = (s) => String(s).split(',').map((x) => parseFloat(String(x).trim())).filter((n) => Number.isFinite(n) && n > 0);
const num = (v, d) => { const n = Number(v); return Number.isFinite(n) ? n : d; };
const int = (v, d) => { const n = parseInt(v, 10); return Number.isFinite(n) ? n : d; };

function build(map) {
  const g = (k) => (map[k] != null && map[k] !== '') ? map[k] : DEFAULTS[k];
  let chips = numList(g('vtx_chips')); if (!chips.length) chips = numList(DEFAULTS.vtx_chips);
  const ccy = String(g('vtx_currency') || 'PKR').toUpperCase().trim();
  return {
    betSeconds: Math.max(2, Math.min(60, num(g('vtx_bet_seconds'), 6))),
    resultSeconds: Math.max(1, Math.min(20, num(g('vtx_result_seconds'), 3.2))),
    tickMs: Math.max(30, Math.min(500, int(g('vtx_tick_ms'), 80))),
    rtp: Math.max(50, Math.min(100, num(g('vtx_rtp'), 97))) / 100,
    instantBust: Math.max(0, Math.min(100, num(g('vtx_instant_bust'), 3))) / 100,
    maxCoef: Math.max(2, num(g('vtx_max_coef'), 200)),
    maxWin: Math.max(0, num(g('vtx_max_win'), 0)),
    forceResult: String(g('vtx_force_result') || 'off').toLowerCase(),
    minBet: Math.max(0.1, num(g('vtx_min_bet'), 1)),
    maxBet: Math.max(1, num(g('vtx_max_bet'), 1000)),
    chips,
    defaultChip: Math.max(1, num(g('vtx_default_chip'), 10)),
    curveSpeed: Math.max(0.01, Math.min(1, num(g('vtx_curve_speed'), 0.09))),
    curveAccel: Math.max(0, Math.min(1, num(g('vtx_curve_accel'), 0.05))),
    currency: ccy,
    currencySymbol: CCY_SYMBOL[ccy] || '₨',
    onlineMin: Math.max(0, int(g('vtx_online_min'), 90)),
    onlineMax: Math.max(1, int(g('vtx_online_max'), 260)),
    autoCashout: int(g('vtx_auto_cashout'), 1) !== 0,
    partialCashout: int(g('vtx_partial_cashout'), 1) !== 0,
    coeffs: {
      Symbol1: numList(g('vtx_coeff_symbol1')),
      Symbol2: numList(g('vtx_coeff_symbol2')),
      Symbol3: numList(g('vtx_coeff_symbol3')),
    },
    weights: {
      Symbol1: Math.max(0, num(g('vtx_weight_symbol1'), 50)),
      Symbol2: Math.max(0, num(g('vtx_weight_symbol2'), 30)),
      Symbol3: Math.max(0, num(g('vtx_weight_symbol3'), 12)),
      SymbolNeutral: Math.max(0, num(g('vtx_weight_neutral'), 40)),
      SymbolLoss: Math.max(0, num(g('vtx_weight_loss'), 28)),
    },
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

function getVortexSettings() {
  if (!cached) { refresh().catch(() => {}); return cached || build({}); }
  if (Date.now() - at > TTL) refresh().catch(() => {});
  return cached;
}
function refreshVortexSettings() { at = 0; return refresh(); }

module.exports = { getVortexSettings, refreshVortexSettings };
