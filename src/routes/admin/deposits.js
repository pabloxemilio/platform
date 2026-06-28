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

    // Atomically claim the deposit: flip pending -> approved only if still pending.
    // This is the idempotency gate — credit happens after, so a double-click or
    // concurrent request can never credit twice (the 2nd claim matches 0 rows).
    const { data: deposit, error: claimErr } = await supabase
      .from('deposits')
      .update({ status: 'approved', approved_by: req.admin.id, approved_at: new Date().toISOString() })
      .eq('id', req.params.id).eq('status', 'pending')
      .select('*').single();
    if (claimErr || !deposit) return res.status(400).json({ error: 'Deposit not found or already processed' });

    try {
      // Credit wallet (runs exactly once)
      await creditWallet(deposit.user_id, deposit.amount, 'deposit',
        `Deposit via ${deposit.method}`, deposit.id);

      // Wagering requirement: the deposit must be wagered (played) before it can be
      // withdrawn — players "must play correctly". Default 1x the deposit amount.
      const { data: dwSetting } = await supabase.from('site_settings').select('value').eq('key', 'deposit_wager_multiplier').single();
      const depMult = parseFloat(dwSetting?.value || '1');
      if (depMult > 0) {
        const { data: w } = await supabase.from('wallets').select('wagering_required').eq('user_id', deposit.user_id).single();
        await supabase.from('wallets').update({ wagering_required: parseFloat(w?.wagering_required || 0) + deposit.amount * depMult, updated_at: new Date().toISOString() }).eq('user_id', deposit.user_id);
      }

      // Apply welcome bonus if requested
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

      // Referral reward + audit log
      await rewardReferrerOnDeposit(deposit.user_id, deposit.amount);
      await supabase.from('admin_logs').insert({
        admin_id: req.admin.id, action: 'deposit_approved',
        target_type: 'deposit', target_id: req.params.id,
        new_value: { amount: deposit.amount, bonus_applied: bonusApplied },
        ip_address: req.adminIp,
      });

      res.json({ message: 'Deposit approved and wallet credited', deposit, bonus: bonusApplied });
    } catch (inner) {
      // Crediting failed after the claim — revert so an admin can retry cleanly.
      await supabase.from('deposits').update({ status: 'pending', approved_by: null, approved_at: null }).eq('id', deposit.id);
      throw inner;
    }
  } catch (e) { console.error('Deposit approve error:', e.message); res.status(500).json({ error: e.message }); }
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
