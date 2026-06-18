const express   = require('express');
const router    = express.Router();
const adminAuth = require('../../middleware/adminAuth');
const { supabase } = require('../../config/supabase');

// GET /api/admin/users  — list all users with filters
router.get('/', adminAuth, async (req, res) => {
  try {
    const page     = parseInt(req.query.page   || 1);
    const limit    = parseInt(req.query.limit  || 20);
    const status   = req.query.status;
    const search   = req.query.search;
    const from     = (page - 1) * limit;

    let q = supabase.from('users')
      .select(`*, wallets!wallets_user_id_fkey(main_balance,total_deposited,total_withdrawn,wagering_required,wagering_completed,total_wagered)`,
        { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(from, from + limit - 1);

    if (status) q = q.eq('status', status);
    if (search) q = q.or(`username.ilike.%${search}%,phone.ilike.%${search}%,email.ilike.%${search}%`);

    const { data, count, error } = await q;
    if (error) throw error;
    res.json({ users: data, total: count, page, limit });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// GET /api/admin/users/:id
router.get('/:id', adminAuth, async (req, res) => {
  try {
    const { data: user, error } = await supabase
      .from('users').select('*').eq('id', req.params.id).single();
    if (error || !user) return res.status(404).json({ error: 'User not found' });

    const { data: wallet }      = await supabase.from('wallets').select('*').eq('user_id', req.params.id).single();
    const { data: deposits }    = await supabase.from('deposits').select('*').eq('user_id', req.params.id).order('created_at', { ascending: false }).limit(10);
    const { data: withdrawals } = await supabase.from('withdrawals').select('*').eq('user_id', req.params.id).order('created_at', { ascending: false }).limit(10);
    const { data: sessions }    = await supabase.from('game_sessions').select('*').eq('user_id', req.params.id).order('created_at', { ascending: false }).limit(10);
    const { data: referrals }   = await supabase.from('referrals').select('*').eq('referrer_id', req.params.id);

    res.json({ user, wallet, deposits, withdrawals, sessions, referrals });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// PATCH /api/admin/users/:id  — update user (status, block, etc.)
router.patch('/:id', adminAuth, async (req, res) => {
  try {
    const allowed = ['status', 'username', 'full_name', 'kyc_status', 'is_admin'];
    const updates = {};
    allowed.forEach(f => { if (req.body[f] !== undefined) updates[f] = req.body[f]; });

    if (!Object.keys(updates).length) return res.status(400).json({ error: 'No valid fields to update' });

    // Get old values for audit log
    const { data: oldUser } = await supabase.from('users').select('*').eq('id', req.params.id).single();

    const { data, error } = await supabase
      .from('users').update(updates).eq('id', req.params.id).select().single();
    if (error) throw error;

    // Audit log
    await supabase.from('admin_logs').insert({
      admin_id:    req.admin.id,
      action:      `user_update_${Object.keys(updates).join('_')}`,
      target_type: 'user',
      target_id:   req.params.id,
      old_value:   oldUser,
      new_value:   updates,
      ip_address:  req.adminIp,
    });

    res.json({ user: data, message: 'User updated successfully' });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// POST /api/admin/users/:id/block
router.post('/:id/block', adminAuth, async (req, res) => {
  try {
    const { reason } = req.body;
    const { data, error } = await supabase
      .from('users').update({ status: 'blocked' }).eq('id', req.params.id).select().single();
    if (error) throw error;

    await supabase.from('admin_logs').insert({
      admin_id:    req.admin.id,
      action:      'user_blocked',
      target_type: 'user',
      target_id:   req.params.id,
      new_value:   { status: 'blocked', reason: reason || 'No reason given' },
      ip_address:  req.adminIp,
    });

    res.json({ message: 'User blocked', user: data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// POST /api/admin/users/:id/unblock
router.post('/:id/unblock', adminAuth, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users').update({ status: 'active' }).eq('id', req.params.id).select().single();
    if (error) throw error;

    await supabase.from('admin_logs').insert({
      admin_id:    req.admin.id,
      action:      'user_unblocked',
      target_type: 'user',
      target_id:   req.params.id,
      ip_address:  req.adminIp,
    });

    res.json({ message: 'User unblocked', user: data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
