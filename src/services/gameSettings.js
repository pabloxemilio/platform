// ============================================================
//  Global game settings read live by the Aviator + ChickenRoad engines:
//    • game_win_ratio   — house RTP for ALL games (0.50–0.99)
//    • max_win_amount   — max payout credited for a single round (0 = unlimited)
//  Cached so the hot path never awaits the DB; refreshed periodically and
//  immediately whenever an admin saves settings.
// ============================================================
const { supabase } = require('../config/supabase');

const TTL = 15000;                       // re-read at most every 15s
const MIN_RTP = 0.50, MAX_RTP = 0.99;    // safety clamp so games never break

let cached = { ratio: null, maxWin: 0, at: 0 };   // ratio null -> engine default; maxWin 0 -> unlimited
let inflight = false;

async function refreshGameSettings() {
  if (inflight) return;
  inflight = true;
  try {
    const { data } = await supabase
      .from('site_settings').select('key,value').in('key', ['game_win_ratio', 'max_win_amount']);
    const map = {};
    (data || []).forEach(r => { map[r.key] = r.value; });

    // win ratio
    let v = parseFloat(map.game_win_ratio);
    let ratio;
    if (!isFinite(v) || v <= 0) ratio = null;
    else { if (v > 1) v = v / 100; ratio = Math.min(MAX_RTP, Math.max(MIN_RTP, v)); }

    // max win per round (absolute; display-only currency -> one number works for all)
    let m = parseFloat(map.max_win_amount);
    const maxWin = (!isFinite(m) || m <= 0) ? 0 : m;

    cached = { ratio, maxWin, at: Date.now() };
  } catch {
    cached.at = Date.now();             // keep last good values on error
  } finally {
    inflight = false;
  }
}

function maybeRefresh() { if (Date.now() - cached.at > TTL) refreshGameSettings(); }

// Synchronous reads for the game loop. `fallback` is the engine's built-in RTP.
function winRatio(fallback) { maybeRefresh(); return cached.ratio == null ? fallback : cached.ratio; }
// Clamp a would-be payout to the configured per-round cap (no cap when 0).
function capWin(win) { maybeRefresh(); return cached.maxWin > 0 ? Math.min(win, cached.maxWin) : win; }
function maxWinAmount() { maybeRefresh(); return cached.maxWin; }

// warm the cache at boot
refreshGameSettings();
const t = setInterval(refreshGameSettings, TTL);
if (t.unref) t.unref();

module.exports = { winRatio, capWin, maxWinAmount, refreshGameSettings };
