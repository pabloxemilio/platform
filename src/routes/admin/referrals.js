const express   = require('express');
const router    = express.Router();
const adminAuth = require('../../middleware/adminAuth');
const { supabase } = require('../../config/supabase');

// GET /api/admin/referrals
router.get('/', adminAuth, async (req, res) => {
  try {
    const page  = parseInt(req.query.page  || 1);
    const limit = parseInt(req.query.limit || 20);
    const from  = (page - 1) * limit;
    const { data, count, error } = await supabase
      .from('referrals')
      .select(`*, referrer:referrer_id(username, phone), referee:referee_id(username, phone, created_at)`,
        { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(from, from + limit - 1);
    if (error) throw error;
    res.json({ referrals: data, total: count, page, limit });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// GET /api/admin/referrals/earnings
router.get('/earnings', adminAuth, async (req, res) => {
  try {
    const page  = parseInt(req.query.page  || 1);
    const limit = parseInt(req.query.limit || 20);
    const from  = (page - 1) * limit;
    const { data, count, error } = await supabase
      .from('referral_earnings')
      .select(`*, referrer:referrer_id(username, phone), referee:referee_id(username, phone)`,
        { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(from, from + limit - 1);
    if (error) throw error;
    res.json({ earnings: data, total: count, page, limit });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
