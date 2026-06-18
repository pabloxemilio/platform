const express = require('express');
const router  = express.Router();
const auth    = require('../middleware/auth');
const { supabase } = require('../config/supabase');

// GET /api/referrals/link
router.get('/link', auth, async (req, res) => {
  try {
    const { data: user } = await supabase
      .from('users').select('referral_code').eq('id', req.user.id).single();
    const base = process.env.FRONTEND_URL || 'http://localhost:3000';
    res.json({
      referral_code: user.referral_code,
      referral_link: `${base}?ref=${user.referral_code}`,
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// GET /api/referrals/stats
router.get('/stats', auth, async (req, res) => {
  try {
    const { data: referrals, count } = await supabase
      .from('referrals').select('*', { count: 'exact' }).eq('referrer_id', req.user.id);
    const { data: earnings } = await supabase
      .from('referral_earnings')
      .select('amount, type, created_at')
      .eq('referrer_id', req.user.id)
      .order('created_at', { ascending: false });
    const totalEarned = (earnings || []).reduce((s, e) => s + parseFloat(e.amount), 0);
    res.json({ total_referrals: count || 0, total_earned: totalEarned, referrals, earnings });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// GET /api/referrals/earnings  — paginated earnings
router.get('/earnings', auth, async (req, res) => {
  try {
    const page  = parseInt(req.query.page  || 1);
    const limit = parseInt(req.query.limit || 20);
    const from  = (page - 1) * limit;
    const { data, count, error } = await supabase
      .from('referral_earnings')
      .select('*', { count: 'exact' })
      .eq('referrer_id', req.user.id)
      .order('created_at', { ascending: false })
      .range(from, from + limit - 1);
    if (error) throw error;
    res.json({ earnings: data, total: count, page, limit });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
