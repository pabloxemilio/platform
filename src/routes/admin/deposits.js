const express   = require('express');
const router    = express.Router();
const adminAuth = require('../../middleware/adminAuth');
const { supabase }  = require('../../config/supabase');
const { creditWallet, applyBonus } = require('../../services/wallet');
const { rewardReferrerOnDeposit }  = require('../../services/referral');

// GET /api/admin/deposits
router.get('/', adminAuth, async (req, res) => {
  try {
    const page   = parseInt(req.query.page   || 1);
    const limit  = parseInt(req.query.limit  || 20);
    const status = req.query.status;
    const from   = (page - 1) * limit;

    let q = supabase
      .from('deposits')
      .select(`*, user:user_id(username, phone, email)`, { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(from, from + limit - 1);

    if (status) q = q.eq('status', status);

    const { data, count, error } = await q;
    if (error) throw error;
    res.json({ deposits: data, total: count, page, limit });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// POST /api/admin/deposits/:id/approve
router.post('/:id/approve', adminAuth, async (req, res) => {
  try {
    const { apply_welcome_bonus } = req.body;

    // Get deposit
    const { data: deposit, error: depErr } = await supabase
      .from('deposits').select('*').eq('id', req.params.id).single();
    if (depErr || !deposit) return res.status(404).json({ error: 'Deposit not found' });
    if (deposit.status !== 'pending') return res.status(400).json({ error: 'Deposit already processed' });

    // Credit wallet
    await creditWallet(deposit.user_id, deposit.amount, 'deposit',
      `Deposit via ${deposit.method}`, deposit.id);

    // Apply welcome bonus if first deposit + bonus requested
    let bonusApplied = null;
    if (apply_welcome_bonus) {
      const { data: bonusSetting } = await supabase.from('site_settings').select('value').eq('key','welcome_bonus_pct').single();
      const { data: maxSetting }   = await supabase.from('site_settings').select('value').eq('key','welcome_bonus_max').single();
      const { data: wagerSetting } = await supabase.from('site_settings').select('value').eq('key','wager_multiplier').single();
      const pct   = parseFloat(bonusSetting?.value || '500') / 100;
      const max   = parseFloat(maxSetting?.value   || '50000');
      const wager = parseFloat(wagerSetting?.value || '10');
      const bonusAmt = Math.min(deposit.amount * pct, max);
      bonusApplied = await applyBonus(deposit.user_id, bonusAmt, wager);
    }

    // Update deposit status
    const { data: updated, error: updErr } = await supabase
      .from('deposits')
      .update({ status: 'approved', approved_by: req.admin.id, approved_at: new Date().toISOString() })
      .eq('id', req.params.id).select().single();
    if (updErr) throw updErr;

    // Trigger referral reward
    await rewardReferrerOnDeposit(deposit.user_id, deposit.amount);

    // Audit log
    await supabase.from('admin_logs').insert({
      admin_id: req.admin.id, action: 'deposit_approved',
      target_type: 'deposit', target_id: req.params.id,
      new_value: { amount: deposit.amount, bonus_applied: bonusApplied },
      ip_address: req.adminIp,
    });

    res.json({ message: 'Deposit approved and wallet credited', deposit: updated, bonus: bonusApplied });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// POST /api/admin/deposits/:id/reject
router.post('/:id/reject', adminAuth, async (req, res) => {
  try {
    const { admin_note } = req.body;
    const { data: deposit } = await supabase.from('deposits').select('*').eq('id', req.params.id).single();
    if (!deposit) return res.status(404).json({ error: 'Deposit not found' });
    if (deposit.status !== 'pending') return res.status(400).json({ error: 'Already processed' });

    const { data, error } = await supabase
      .from('deposits')
      .update({ status: 'rejected', admin_note: admin_note || 'Rejected by admin' })
      .eq('id', req.params.id).select().single();
    if (error) throw error;

    await supabase.from('admin_logs').insert({
      admin_id: req.admin.id, action: 'deposit_rejected',
      target_type: 'deposit', target_id: req.params.id,
      new_value: { reason: admin_note }, ip_address: req.adminIp,
    });

    res.json({ message: 'Deposit rejected', deposit: data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
