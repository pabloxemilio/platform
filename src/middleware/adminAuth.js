const jwt        = require('jsonwebtoken');
const { supabase } = require('../config/supabase');

module.exports = async function adminAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Admin token required' });
  }
  const token = authHeader.slice(7);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.is_admin) return res.status(403).json({ error: 'Admin access only' });

    // Verify user is still admin in DB
    const { data: profile } = await supabase
      .from('users').select('id,status,is_admin,username').eq('id', decoded.id).single();

    if (!profile || !profile.is_admin || profile.status !== 'active') {
      return res.status(403).json({ error: 'Admin access revoked' });
    }
    req.admin = profile;
    req.adminIp = req.ip || req.connection.remoteAddress;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Invalid admin token' });
  }
};
