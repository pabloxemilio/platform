// ============================================================
//  Global + per-game settings read live by the Aviator + ChickenRoad engines:
//    • game_win_ratio   — house RTP shared default for these games (0.50–0.99)
//    • aviator_rtp      — per-game RTP override for Aviator (blank = use global)
//    • chicken_rtp      — per-game RTP override for Chicken Road (blank = use global)
//    • max_win_amount   — max payout credited for a single round (0 = unlimited)
//  Cached so the hot path never awaits the DB; refreshed periodically and
//  immediately whenever an admin saves settings.
// ============================================================
const { supabase } = require('../config/supabase');

const TTL = 15000;                       // re-read at most every 15s
const MIN_RTP = 0.50, MAX_RTP = 0.99;    // safety clamp so games never break
const KEYS = ['game_win_ratio', 'aviator_rtp', 'chicken_rtp', 'max_win_amount'];

let cached = { ratio: null, perGame: {}, maxWin: 0, at: 0 };
let inflight = false;

// parse "95" / "0.95" -> 0.95 (clamped); blank/invalid -> null (means "not set")
function parseRatio(v) {
  let n = parseFloat(v);
  if (!isFinite(n) || n <= 0) return null;
  if (n > 1) n = n / 100;
  return Math.min(MAX_RTP, Math.max(MIN_RTP, n));
}

async function refreshGameSettings() {
  if (inflight) return;
  inflight = true;
  try {
    const { data } = await supabase.from('site_settings').select('key,value').in('key', KEYS);
    const map = {};
    (data || []).forEach(r => { map[r.key] = r.value; });

    const ratio = parseRatio(map.game_win_ratio);
    const perGame = {
      aviator: parseRatio(map.aviator_rtp),
      chicken: parseRatio(map.chicken_rtp),
    };
    let m = parseFloat(map.max_win_amount);
    const maxWin = (!isFinite(m) || m <= 0) ? 0 : m;

    cached = { ratio, perGame, maxWin, at: Date.now() };
  } catch {
    cached.at = Date.now();             // keep last good values on error
  } finally {
    inflight = false;
  }
}

function maybeRefresh() { if (Date.now() - cached.at > TTL) refreshGameSettings(); }

// RTP for the game loop: per-game override -> global -> engine default (fallback).
function winRatio(fallback, gameKey) {
  maybeRefresh();
  if (gameKey && cached.perGame[gameKey] != null) return cached.perGame[gameKey];
  return cached.ratio == null ? fallback : cached.ratio;
}
// Clamp a would-be payout to the configured per-round cap (no cap when 0).
function capWin(win) { maybeRefresh(); return cached.maxWin > 0 ? Math.min(win, cached.maxWin) : win; }
function maxWinAmount() { maybeRefresh(); return cached.maxWin; }

// warm the cache at boot
refreshGameSettings();
const t = setInterval(refreshGameSettings, TTL);
if (t.unref) t.unref();

module.exports = { winRatio, capWin, maxWinAmount, refreshGameSettings };
