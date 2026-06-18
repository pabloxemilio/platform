const { supabase }       = require('../config/supabase');
const { creditWallet }   = require('./wallet');

async function processReferral(refereeId, referralCode) {
  if (!referralCode) return null;

  // Find referrer by code
  const { data: referrer } = await supabase
    .from('users').select('id').eq('referral_code', referralCode.toUpperCase()).single();
  if (!referrer) return null;
  if (referrer.id === refereeId) return null;

  // Create referral record
  const { error } = await supabase.from('referrals').insert({
    referrer_id: referrer.id,
    referee_id:  refereeId,
    status:      'pending',
  });
  if (error) console.error('Referral insert error:', error);
  return referrer.id;
}

async function rewardReferrerOnDeposit(refereeId, depositAmount) {
  // Check if referral exists and is pending
  const { data: ref } = await supabase
    .from('referrals')
    .select('*')
    .eq('referee_id', refereeId)
    .eq('status', 'pending')
    .single();
  if (!ref) return;

  // Get bonus amount from settings
  const { data: setting } = await supabase
    .from('site_settings').select('value').eq('key', 'referral_signup_bonus').single();
  const bonus = parseFloat(setting?.value || '555');

  // Credit referrer
  await creditWallet(ref.referrer_id, bonus, 'referral_bonus',
    `Referral bonus for inviting a friend (deposit: ₨${depositAmount})`, ref.id);

  // Record earnings
  await supabase.from('referral_earnings').insert({
    referrer_id: ref.referrer_id,
    referee_id:  refereeId,
    amount:      bonus,
    type:        'signup_bonus',
    status:      'paid',
    description: `Signup bonus — referee first deposit ₨${depositAmount}`,
  });

  // Update referral status
  await supabase.from('referrals')
    .update({ status: 'rewarded', total_earned: bonus, rewarded_at: new Date().toISOString() })
    .eq('id', ref.id);

  // Update referrer total earned
  await supabase.rpc('record_wager', { p_user_id: ref.referrer_id, p_amount: 0 }); // no-op, just for consistency

  console.log(`Referral reward: ₨${bonus} to user ${ref.referrer_id}`);
}

module.exports = { processReferral, rewardReferrerOnDeposit };
