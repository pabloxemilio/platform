const { supabase } = require('../config/supabase');

async function recordWager(userId, amount) {
  const { data, error } = await supabase.rpc('record_wager', {
    p_user_id: userId,
    p_amount:  amount,
  });
  if (error) throw new Error(error.message);
  return data;
}

async function checkWithdrawalEligibility(userId) {
  const { data, error } = await supabase.rpc('check_withdrawal_eligibility', {
    p_user_id: userId,
  });
  if (error) throw new Error(error.message);
  return data;
}

async function getWagerProgress(userId) {
  const { data, error } = await supabase
    .from('wallets')
    .select('wagering_required, wagering_completed, total_wagered')
    .eq('user_id', userId)
    .single();
  if (error) throw new Error(error.message);
  const pct = data.wagering_required > 0
    ? Math.min(100, (data.wagering_completed / data.wagering_required) * 100).toFixed(1)
    : 100;
  return { ...data, progress_pct: parseFloat(pct) };
}

module.exports = { recordWager, checkWithdrawalEligibility, getWagerProgress };
