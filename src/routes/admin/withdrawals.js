const express   = require('express');
const router    = express.Router();
const adminAuth = require('../../middleware/adminAuth');
const { supabase }   = require('../../config/supabase');
const { debitWallet } = require('../../services/wallet');

// GET /api/admin/withdrawals
router.get('/', adminAuth, async (req, res) => {
  try {
    const page   = parseInt(req.query.page  || 1);
    const limit  = parseInt(req.query.limit || 20);
    const status = req.query.status;
    const from   = (page - 1) * limit;
    let q = supabase.from('withdrawals')
      .select('*, user:user_id(username, phone, email)', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(from, from + limit - 1);
    if (status) q = q.eq('status', status);
    const { data, count, error } = await q;
    if (error) throw error;
    res.json({ withdrawals: data, total: count, page, limit });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// POST /api/admin/withdrawals/:id/approve
router.post('/:id/approve', adminAuth, async (req, res) => {
  try {
    // Atomically claim: pending -> approved only if still pending (idempotency gate).
    const { data: wd, error: claimErr } = await supabase
      .from('withdrawals')
      .update({ status: 'approved', processed_by: req.admin.id, processed_at: new Date().toISOString() })
      .eq('id', req.params.id).eq('status', 'pending')
      .select('*').single();
    if (claimErr || !wd) return res.status(400).json({ error: 'Withdrawal not found or already processed' });

    try {
      // Debit wallet on approval (runs exactly once)
      await debitWallet(wd.user_id, wd.amount, 'withdrawal', `Withdrawal via ${wd.method}`, wd.id);
      await supabase.from('admin_logs').insert({
        admin_id: req.admin.id, action: 'withdrawal_approved',
        target_type: 'withdrawal', target_id: req.params.id,
        new_value: { amount: wd.amount }, ip_address: req.adminIp,
      });
      res.json({ message: 'Withdrawal approved and balance deducted', withdrawal: wd });
    } catch (inner) {
      // Debit failed (e.g. insufficient balance) — revert the claim so it stays pending.
      await supabase.from('withdrawals').update({ status: 'pending', processed_by: null, processed_at: null }).eq('id', wd.id);
      throw inner;
    }
  } catch (e) { console.error('Withdrawal approve error:', e.message); res.status(500).json({ error: e.message }); }
});

// POST /api/admin/withdrawals/:id/reject
router.post('/:id/reject', adminAuth, async (req, res) => {
  try {
    const { admin_note } = req.body;
    const { data: wd } = await supabase.from('withdrawals').select('*').eq('id', req.params.id).single();
    if (!wd) return res.status(404).json({ error: 'Not found' });
    if (wd.status !== 'pending') return res.status(400).json({ error: 'Already processed' });

    const { data, error } = await supabase
      .from('withdrawals')
      .update({ status: 'rejected', admin_note: admin_note || 'Rejected', processed_by: req.admin.id })
      .eq('id', req.params.id).select().single();
    if (error) throw error;

    await supabase.from('admin_logs').insert({
      admin_id: req.admin.id, action: 'withdrawal_rejected',
      target_type: 'withdrawal', target_id: req.params.id,
      new_value: { reason: admin_note }, ip_address: req.adminIp,
    });
    res.json({ message: 'Withdrawal rejected', withdrawal: data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
