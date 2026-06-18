const express   = require('express');
const router    = express.Router();
const adminAuth = require('../../middleware/adminAuth');
const { supabase } = require('../../config/supabase');
const { applyBonus } = require('../../services/wallet');

// GET /api/admin/wallets/:userId
router.get('/:userId', adminAuth, async (req, res) => {
  try {
    const { data: wallet } = await supabase.from('wallets').select('*').eq('user_id', req.params.userId).single();
    const { data: txns }   = await supabase.from('transactions').select('*')
      .eq('user_id', req.params.userId).order('created_at', { ascending: false }).limit(30);
    res.json({ wallet, transactions: txns });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// POST /api/admin/wallets/:userId/adjust  — manual balance adjustment
router.post('/:userId/adjust', adminAuth, async (req, res) => {
  try {
    const { amount, description } = req.body;
    if (!amount || !description) return res.status(400).json({ error: 'amount and description required' });

    const { data, error } = await supabase.rpc('admin_adjust_balance', {
      p_user_id:    req.params.userId,
      p_amount:     parseFloat(amount),
      p_type:       'adjustment',
      p_description: description,
      p_admin_id:   req.admin.id,
    });
    if (error) throw error;
    res.json({ message: 'Balance adjusted', result: data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// POST /api/admin/wallets/:userId/bonus  — apply bonus
router.post('/:userId/bonus', adminAuth, async (req, res) => {
  try {
    const { amount, wager_multiplier } = req.body;
    if (!amount || amount <= 0) return res.status(400).json({ error: 'Valid amount required' });
    const mult = parseFloat(wager_multiplier || 10);
    const result = await applyBonus(req.params.userId, parseFloat(amount), mult);
    await supabase.from('admin_logs').insert({
      admin_id: req.admin.id, action: 'bonus_applied',
      target_type: 'wallet', target_id: req.params.userId,
      new_value: { bonus_amount: amount, wager_multiplier: mult },
      ip_address: req.adminIp,
    });
    res.json({ message: 'Bonus applied', result });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// POST /api/admin/wallets/:userId/reset-wager  — reset wagering requirement
router.post('/:userId/reset-wager', adminAuth, async (req, res) => {
  try {
    const { data, error } = await supabase.from('wallets')
      .update({ wagering_required: 0, wagering_completed: 0, updated_at: new Date().toISOString() })
      .eq('user_id', req.params.userId).select().single();
    if (error) throw error;
    await supabase.from('admin_logs').insert({
      admin_id: req.admin.id, action: 'wager_reset',
      target_type: 'wallet', target_id: req.params.userId,
      ip_address: req.adminIp,
    });
    res.json({ message: 'Wagering requirement reset', wallet: data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
