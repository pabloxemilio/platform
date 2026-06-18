const { supabase } = require('../config/supabase');

// Verify Supabase JWT and attach user to req
module.exports = async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = authHeader.slice(7);
  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (error || !user) return res.status(401).json({ error: 'Invalid or expired token' });

    // Check user status
    const { data: profile } = await supabase
      .from('users').select('id,status,is_admin').eq('id', user.id).single();

    if (!profile) return res.status(401).json({ error: 'User profile not found' });
    if (profile.status === 'blocked')   return res.status(403).json({ error: 'Account blocked. Contact support.' });
    if (profile.status === 'suspended') return res.status(403).json({ error: 'Account suspended.' });

    req.user = { ...user, ...profile };
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Token verification failed' });
  }
};
