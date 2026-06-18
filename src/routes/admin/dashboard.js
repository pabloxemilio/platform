const express   = require('express');
const router    = express.Router();
const adminAuth = require('../../middleware/adminAuth');
const { supabase } = require('../../config/supabase');

// GET /api/admin/dashboard
router.get('/', adminAuth, async (req, res) => {
  try {
    // Run all stats queries in parallel
    const [
      usersResult,
      walletsResult,
      pendingDepositsResult,
      pendingWithdrawalsResult,
      approvedDepositsResult,
      approvedWithdrawalsResult,
      wageredResult,
      referralsResult,
      referralEarningsResult,
      recentDepositsResult,
      recentWithdrawalsResult,
      recentUsersResult,
    ] = await Promise.all([
      supabase.from('users').select('id, created_at', { count: 'exact', head: false }),
      supabase.from('wallets').select('main_balance, bonus_balance'),
      supabase.from('deposits').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
      supabase.from('withdrawals').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
      supabase.from('deposits').select('amount').eq('status', 'approved'),
      supabase.from('withdrawals').select('amount').eq('status', 'approved'),
      supabase.from('wallets').select('total_wagered'),
      supabase.from('referrals').select('id', { count: 'exact', head: true }),
      supabase.from('referral_earnings').select('amount').eq('status', 'paid'),
      supabase.from('deposits').select('id,amount,method,status,created_at,user_id').order('created_at', { ascending: false }).limit(5),
      supabase.from('withdrawals').select('id,amount,method,status,created_at,user_id').order('created_at', { ascending: false }).limit(5),
      supabase.from('users').select('id,username,phone,status,created_at').order('created_at', { ascending: false }).limit(5),
    ]);

    // Calculate today's new users
    const today = new Date(); today.setHours(0,0,0,0);
    const newUsersToday = (usersResult.data || []).filter(u => new Date(u.created_at) >= today).length;

    // Sum totals
    const totalDeposited   = (approvedDepositsResult.data  || []).reduce((s, d) => s + parseFloat(d.amount || 0), 0);
    const totalWithdrawn   = (approvedWithdrawalsResult.data|| []).reduce((s, d) => s + parseFloat(d.amount || 0), 0);
    const platformBalance  = (walletsResult.data || []).reduce((s, w) => s + parseFloat(w.main_balance || 0) + parseFloat(w.bonus_balance || 0), 0);
    const totalWagered     = (wageredResult.data || []).reduce((s, w) => s + parseFloat(w.total_wagered || 0), 0);
    const referralEarnings = (referralEarningsResult.data || []).reduce((s, e) => s + parseFloat(e.amount || 0), 0);

    const stats = {
      total_users:           usersResult.count || 0,
      new_users_today:       newUsersToday,
      total_deposited:       totalDeposited,
      total_withdrawn:       totalWithdrawn,
      platform_balance:      platformBalance,
      pending_deposits:      pendingDepositsResult.count  || 0,
      pending_withdrawals:   pendingWithdrawalsResult.count || 0,
      total_wagered:         totalWagered,
      sessions_today:        0,
      total_referrals:       referralsResult.count || 0,
      referral_earnings_paid: referralEarnings,
    };

    res.json({
      stats,
      recentDeposits:    recentDepositsResult.data    || [],
      recentWithdrawals: recentWithdrawalsResult.data || [],
      recentUsers:       recentUsersResult.data       || [],
    });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
