const express = require('express');
const router  = express.Router();
const auth    = require('../middleware/auth');
const { supabase } = require('../config/supabase');

// GET /api/wallet  — get own wallet + wager progress
router.get('/', auth, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('wallets').select('*').eq('user_id', req.user.id).single();
    if (error) return res.status(404).json({ error: 'Wallet not found' });
    const pct = data.wagering_required > 0
      ? Math.min(100, (data.wagering_completed / data.wagering_required) * 100).toFixed(1)
      : 100;
    res.json({ wallet: data, wagering_progress_pct: parseFloat(pct) });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// GET /api/wallet/transactions  — paginated tx history
router.get('/transactions', auth, async (req, res) => {
  try {
    const page  = parseInt(req.query.page  || 1);
    const limit = parseInt(req.query.limit || 20);
    const type  = req.query.type;
    const from  = (page - 1) * limit;

    let q = supabase.from('transactions')
      .select('*', { count: 'exact' })
      .eq('user_id', req.user.id)
      .order('created_at', { ascending: false })
      .range(from, from + limit - 1);

    if (type) q = q.eq('type', type);

    const { data, count, error } = await q;
    if (error) throw error;
    res.json({ transactions: data, total: count, page, limit });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
