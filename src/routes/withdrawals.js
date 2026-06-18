const express = require('express');
const router  = express.Router();
const auth    = require('../middleware/auth');
const { supabase }                    = require('../config/supabase');
const { checkWithdrawalEligibility }  = require('../services/wager');
const { debitWallet }                 = require('../services/wallet');

// POST /api/withdrawals  — request withdrawal
router.post('/', auth, async (req, res) => {
  try {
    const { amount, method, account_details } = req.body;
    if (!amount || amount <= 0)   return res.status(400).json({ error: 'Invalid amount' });
    if (!account_details)         return res.status(400).json({ error: 'Account details required' });

    // Check min withdrawal
    const { data: minSetting } = await supabase
      .from('site_settings').select('value').eq('key', 'min_withdrawal').single();
    const minWithdraw = parseFloat(minSetting?.value || '500');
    if (amount < minWithdraw) return res.status(400).json({ error: `Minimum withdrawal is ₨${minWithdraw}` });

    // Check wagering eligibility
    const eligibility = await checkWithdrawalEligibility(req.user.id);
    if (!eligibility.eligible) {
      return res.status(400).json({
        error: eligibility.reason,
        wagering_required:  eligibility.wagering_required,
        wagering_completed: eligibility.wagering_completed,
        wagering_remaining: eligibility.wagering_remaining,
      });
    }

    // Check balance
    const { data: wallet } = await supabase
      .from('wallets').select('main_balance').eq('user_id', req.user.id).single();
    if (!wallet || wallet.main_balance < amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    // Create withdrawal request (pending admin approval — don't debit yet)
    const { data, error } = await supabase.from('withdrawals').insert({
      user_id:         req.user.id,
      amount:          parseFloat(amount),
      method:          method || 'easypaisa',
      account_details: account_details,
      status:          'pending',
      wagering_met:    true,
    }).select().single();

    if (error) throw error;
    res.status(201).json({ message: 'Withdrawal request submitted. Processing within 24 hours.', withdrawal: data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// GET /api/withdrawals  — user's withdrawal history
router.get('/', auth, async (req, res) => {
  try {
    const page  = parseInt(req.query.page  || 1);
    const limit = parseInt(req.query.limit || 20);
    const from  = (page - 1) * limit;
    const { data, count, error } = await supabase
      .from('withdrawals').select('*', { count: 'exact' })
      .eq('user_id', req.user.id)
      .order('created_at', { ascending: false })
      .range(from, from + limit - 1);
    if (error) throw error;
    res.json({ withdrawals: data, total: count, page, limit });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
