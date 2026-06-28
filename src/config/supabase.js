const { createClient } = require('@supabase/supabase-js');

// Node < 22 has no global WebSocket. @supabase/supabase-js spins up a Realtime
// client at construct time which needs one (we don't use Realtime, but the
// constructor throws without it). Polyfill with the `ws` package on older Node.
if (typeof globalThis.WebSocket === 'undefined') {
  try { globalThis.WebSocket = require('ws'); } catch { /* ws always present (dependency) */ }
}

const supabaseUrl     = process.env.SUPABASE_URL;
const supabaseAnon    = process.env.SUPABASE_ANON_KEY;
const supabaseService = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseService) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
}

// Service role client — full access, used only server-side
const supabase = createClient(supabaseUrl, supabaseService, {
  auth: { autoRefreshToken: false, persistSession: false },
});

// Anon client — for verifying user JWTs
const supabaseAnonClient = createClient(supabaseUrl, supabaseAnon);

module.exports = { supabase, supabaseAnonClient };
