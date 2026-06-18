const { supabase } = require('../config/supabase');

async function getWallet(userId) {
  const { data, error } = await supabase
    .from('wallets').select('*').eq('user_id', userId).single();
  if (error) throw new Error('Wallet not found');
  return data;
}

async function creditWallet(userId, amount, type, description, refId = null) {
  const { data, error } = await supabase.rpc('credit_wallet', {
    p_user_id:     userId,
    p_amount:      amount,
    p_type:        type,
    p_description: description,
    p_ref_id:      refId,
  });
  if (error) throw new Error(error.message);
  return data;
}

async function debitWallet(userId, amount, type, description, refId = null) {
  const { data, error } = await supabase.rpc('debit_wallet', {
    p_user_id:     userId,
    p_amount:      amount,
    p_type:        type,
    p_description: description,
    p_ref_id:      refId,
  });
  if (error) throw new Error(error.message);
  return data;
}

async function applyBonus(userId, bonusAmount, wagerMult = 10) {
  const { data, error } = await supabase.rpc('apply_bonus', {
    p_user_id:    userId,
    p_bonus_amt:  bonusAmount,
    p_wager_mult: wagerMult,
  });
  if (error) throw new Error(error.message);
  return data;
}

module.exports = { getWallet, creditWallet, debitWallet, applyBonus };
