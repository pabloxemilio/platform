// ============================================================
//  Dragon Tiger live settings — read from `site_settings` so the admin panel
//  controls the table (chips, mock players, odds, timings, currency scale)
//  without code changes. Cached like gameSettings so the hot path never awaits.
//  Missing keys are auto-seeded so they show up (editable) in the admin panel.
// ============================================================
const { supabase } = require('../config/supabase');

const TTL = 15000;
let cached = null, at = 0, inflight = false, seeded = false;

const DEFAULTS = {
  dt_chips: '10,20,30,50,100,500,1000',   // chip denominations (display units)
  dt_mock_users: '6',                     // bot players seated (0-7)
  dt_currency_multi: '1',                 // money display scale (client shows value / this)
  dt_bet_seconds: '15',                   // betting window length
  dt_idle_warn: '5',                      // idle rounds before "leave soon" warning
  dt_idle_kick: '8',                      // idle rounds before being removed
  dt_bet_min: '10',                       // min bet per tap
  dt_bet_max: '500000',                   // max bet per position
  dt_odds_dragon: '10000',                // ×1e4 fixed point (10000 = 1:1)
  dt_odds_tiger: '10000',
  dt_odds_tie: '100000',                  // 1:10
  dt_odds_suited: '490000',               // 1:49
};

async function ensureSeeded(map) {
  if (seeded) return;
  const missing = Object.keys(DEFAULTS).filter((k) => !(k in map));
  if (missing.length) {
    try { await supabase.from('site_settings').insert(missing.map((k) => ({ key: k, value: DEFAULTS[k] }))); } catch {}
  }
  seeded = true;
}

const numList = (s) => String(s).split(',').map((x) => parseInt(String(x).trim(), 10)).filter((n) => Number.isFinite(n) && n > 0);
const int = (v, d) => { const n = parseInt(v, 10); return Number.isFinite(n) ? n : d; };

function build(map) {
  const g = (k) => (map[k] != null && map[k] !== '') ? map[k] : DEFAULTS[k];
  let chips = numList(g('dt_chips')); if (!chips.length) chips = numList(DEFAULTS.dt_chips);
  return {
    chips,
    mockUsers: Math.max(0, Math.min(7, int(g('dt_mock_users'), 6))),
    currencyMulti: Math.max(1, int(g('dt_currency_multi'), 1)),
    betSeconds: Math.max(5, Math.min(60, int(g('dt_bet_seconds'), 15))),
    idleWarn: Math.max(1, int(g('dt_idle_warn'), 5)),
    idleKick: Math.max(2, int(g('dt_idle_kick'), 8)),
    betMin: Math.max(1, int(g('dt_bet_min'), 10)),
    betMax: Math.max(1, int(g('dt_bet_max'), 500000)),
    odds: [
      Math.max(1, int(g('dt_odds_dragon'), 10000)),
      Math.max(1, int(g('dt_odds_tiger'), 10000)),
      Math.max(1, int(g('dt_odds_tie'), 100000)),
      Math.max(1, int(g('dt_odds_suited'), 490000)),
    ],
  };
}

async function refresh() {
  if (inflight) return; inflight = true;
  try {
    const { data } = await supabase.from('site_settings').select('key,value').in('key', Object.keys(DEFAULTS));
    const map = {}; (data || []).forEach((r) => { map[r.key] = r.value; });
    ensureSeeded(map).catch(() => {});
    cached = build(map); at = Date.now();
  } catch { at = Date.now(); } finally { inflight = false; }
}

function maybeRefresh() { if (Date.now() - at > TTL) refresh(); }
function get() { maybeRefresh(); return cached || build({}); }

refresh();
const t = setInterval(refresh, TTL); if (t.unref) t.unref();

module.exports = { get, refresh, DEFAULTS };
