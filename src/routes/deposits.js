const express = require('express');
const router  = express.Router();
const auth    = require('../middleware/auth');
const { supabase } = require('../config/supabase');

// POST /api/deposits  — user submits deposit request
router.post('/', auth, async (req, res) => {
  try {
    const { amount, method, reference_number, proof_url } = req.body;
    if (!amount || amount <= 0) return res.status(400).json({ error: 'Invalid amount' });

    // Check min deposit from settings
    const { data: minSetting } = await supabase
      .from('site_settings').select('value').eq('key', 'min_deposit').single();
    const minDeposit = parseFloat(minSetting?.value || '100');
    if (amount < minDeposit) return res.status(400).json({ error: `Minimum deposit is ₨${minDeposit}` });

    const { data, error } = await supabase.from('deposits').insert({
      user_id:          req.user.id,
      amount:           parseFloat(amount),
      method:           method || 'easypaisa',
      reference_number: reference_number || null,
      proof_url:        proof_url || null,
      status:           'pending',
    }).select().single();

    if (error) throw error;
    res.status(201).json({ message: 'Deposit submitted. Awaiting admin approval.', deposit: data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// GET /api/deposits  — user's deposit history
router.get('/', auth, async (req, res) => {
  try {
    const page  = parseInt(req.query.page  || 1);
    const limit = parseInt(req.query.limit || 20);
    const from  = (page - 1) * limit;

    const { data, count, error } = await supabase
      .from('deposits').select('*', { count: 'exact' })
      .eq('user_id', req.user.id)
      .order('created_at', { ascending: false })
      .range(from, from + limit - 1);

    if (error) throw error;
    res.json({ deposits: data, total: count, page, limit });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
