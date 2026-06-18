-- ============================================================
-- AVAITOR CASINO - Database Functions
-- ============================================================

-- ── ATOMIC CREDIT BALANCE ──
CREATE OR REPLACE FUNCTION public.credit_wallet(
  p_user_id    UUID,
  p_amount     NUMERIC,
  p_type       TEXT,
  p_description TEXT DEFAULT NULL,
  p_ref_id     UUID DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_wallet    public.wallets;
  v_new_bal   NUMERIC;
BEGIN
  SELECT * INTO v_wallet FROM public.wallets WHERE user_id = p_user_id FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'Wallet not found for user %', p_user_id; END IF;

  v_new_bal := v_wallet.main_balance + p_amount;

  UPDATE public.wallets SET
    main_balance    = v_new_bal,
    total_deposited = CASE WHEN p_type = 'deposit' THEN total_deposited + p_amount ELSE total_deposited END,
    updated_at      = now()
  WHERE user_id = p_user_id;

  INSERT INTO public.transactions (user_id, type, amount, balance_before, balance_after, description, reference_id)
  VALUES (p_user_id, p_type, p_amount, v_wallet.main_balance, v_new_bal, p_description, p_ref_id);

  RETURN jsonb_build_object('success', true, 'new_balance', v_new_bal);
END;
$$;

-- ── ATOMIC DEBIT BALANCE ──
CREATE OR REPLACE FUNCTION public.debit_wallet(
  p_user_id    UUID,
  p_amount     NUMERIC,
  p_type       TEXT,
  p_description TEXT DEFAULT NULL,
  p_ref_id     UUID DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_wallet   public.wallets;
  v_new_bal  NUMERIC;
BEGIN
  SELECT * INTO v_wallet FROM public.wallets WHERE user_id = p_user_id FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'Wallet not found'; END IF;
  IF v_wallet.main_balance < p_amount THEN RAISE EXCEPTION 'Insufficient balance'; END IF;

  v_new_bal := v_wallet.main_balance - p_amount;

  UPDATE public.wallets SET
    main_balance      = v_new_bal,
    total_withdrawn   = CASE WHEN p_type = 'withdrawal' THEN total_withdrawn + p_amount ELSE total_withdrawn END,
    updated_at        = now()
  WHERE user_id = p_user_id;

  INSERT INTO public.transactions (user_id, type, amount, balance_before, balance_after, description, reference_id)
  VALUES (p_user_id, p_type, -p_amount, v_wallet.main_balance, v_new_bal, p_description, p_ref_id);

  RETURN jsonb_build_object('success', true, 'new_balance', v_new_bal);
END;
$$;

-- ── RECORD WAGER + UPDATE PROGRESS ──
CREATE OR REPLACE FUNCTION public.record_wager(
  p_user_id  UUID,
  p_amount   NUMERIC
)
RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_wallet public.wallets;
BEGIN
  SELECT * INTO v_wallet FROM public.wallets WHERE user_id = p_user_id FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'Wallet not found'; END IF;

  UPDATE public.wallets SET
    total_wagered       = total_wagered + p_amount,
    wagering_completed  = LEAST(wagering_completed + p_amount, wagering_required),
    updated_at          = now()
  WHERE user_id = p_user_id;

  RETURN jsonb_build_object(
    'total_wagered',      v_wallet.total_wagered + p_amount,
    'wagering_completed', LEAST(v_wallet.wagering_completed + p_amount, v_wallet.wagering_required),
    'wagering_required',  v_wallet.wagering_required,
    'requirement_met',    (v_wallet.wagering_completed + p_amount) >= v_wallet.wagering_required
  );
END;
$$;

-- ── CHECK WITHDRAWAL ELIGIBILITY ──
CREATE OR REPLACE FUNCTION public.check_withdrawal_eligibility(p_user_id UUID)
RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_wallet public.wallets;
  v_user   public.users;
BEGIN
  SELECT * INTO v_wallet FROM public.wallets WHERE user_id = p_user_id;
  SELECT * INTO v_user   FROM public.users   WHERE id = p_user_id;

  IF NOT FOUND THEN RETURN jsonb_build_object('eligible', false, 'reason', 'User not found'); END IF;
  IF v_user.status = 'blocked'    THEN RETURN jsonb_build_object('eligible', false, 'reason', 'Account blocked'); END IF;
  IF v_user.status = 'suspended'  THEN RETURN jsonb_build_object('eligible', false, 'reason', 'Account suspended'); END IF;
  IF v_wallet.wagering_required > 0 AND v_wallet.wagering_completed < v_wallet.wagering_required THEN
    RETURN jsonb_build_object(
      'eligible', false,
      'reason', 'Wagering requirement not met',
      'wagering_required',  v_wallet.wagering_required,
      'wagering_completed', v_wallet.wagering_completed,
      'wagering_remaining', v_wallet.wagering_required - v_wallet.wagering_completed
    );
  END IF;

  RETURN jsonb_build_object('eligible', true, 'available_balance', v_wallet.main_balance);
END;
$$;

-- ── ADMIN MANUAL ADJUST BALANCE ──
CREATE OR REPLACE FUNCTION public.admin_adjust_balance(
  p_user_id    UUID,
  p_amount     NUMERIC,
  p_type       TEXT,
  p_description TEXT,
  p_admin_id   UUID
)
RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_wallet   public.wallets;
  v_new_bal  NUMERIC;
BEGIN
  SELECT * INTO v_wallet FROM public.wallets WHERE user_id = p_user_id FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'Wallet not found'; END IF;

  v_new_bal := v_wallet.main_balance + p_amount;
  IF v_new_bal < 0 THEN RAISE EXCEPTION 'Balance cannot go below zero'; END IF;

  UPDATE public.wallets SET main_balance = v_new_bal, updated_at = now() WHERE user_id = p_user_id;

  INSERT INTO public.transactions (user_id, type, amount, balance_before, balance_after, description)
  VALUES (p_user_id, 'adjustment', p_amount, v_wallet.main_balance, v_new_bal, p_description);

  INSERT INTO public.admin_logs (admin_id, action, target_type, target_id,
    old_value, new_value)
  VALUES (p_admin_id, 'balance_adjust', 'wallet', v_wallet.id,
    jsonb_build_object('balance', v_wallet.main_balance),
    jsonb_build_object('balance', v_new_bal, 'amount', p_amount, 'reason', p_description));

  RETURN jsonb_build_object('success', true, 'new_balance', v_new_bal);
END;
$$;

-- ── PROCESS BONUS (add bonus_balance + set wagering requirement) ──
CREATE OR REPLACE FUNCTION public.apply_bonus(
  p_user_id    UUID,
  p_bonus_amt  NUMERIC,
  p_wager_mult NUMERIC DEFAULT 10
)
RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_wallet public.wallets;
BEGIN
  SELECT * INTO v_wallet FROM public.wallets WHERE user_id = p_user_id FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'Wallet not found'; END IF;

  UPDATE public.wallets SET
    main_balance      = main_balance + p_bonus_amt,
    bonus_balance     = bonus_balance + p_bonus_amt,
    wagering_required = wagering_required + (p_bonus_amt * p_wager_mult),
    updated_at        = now()
  WHERE user_id = p_user_id;

  INSERT INTO public.transactions (user_id, type, amount, balance_before, balance_after, description)
  VALUES (p_user_id, 'bonus', p_bonus_amt, v_wallet.main_balance,
          v_wallet.main_balance + p_bonus_amt, 'Bonus applied — wagering x' || p_wager_mult);

  RETURN jsonb_build_object('success', true,
    'bonus_added',        p_bonus_amt,
    'wagering_required',  v_wallet.wagering_required + (p_bonus_amt * p_wager_mult));
END;
$$;

-- ── GET DASHBOARD STATS (admin) ──
CREATE OR REPLACE FUNCTION public.get_dashboard_stats()
RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_result JSONB;
BEGIN
  SELECT jsonb_build_object(
    'total_users',          (SELECT COUNT(*) FROM public.users WHERE is_admin = false),
    'active_users',         (SELECT COUNT(*) FROM public.users WHERE status = 'active' AND is_admin = false),
    'blocked_users',        (SELECT COUNT(*) FROM public.users WHERE status = 'blocked'),
    'new_users_today',      (SELECT COUNT(*) FROM public.users WHERE created_at >= CURRENT_DATE AND is_admin = false),
    'total_deposited',      COALESCE((SELECT SUM(amount) FROM public.deposits WHERE status = 'approved'), 0),
    'total_withdrawn',      COALESCE((SELECT SUM(amount) FROM public.withdrawals WHERE status = 'approved'), 0),
    'pending_deposits',     (SELECT COUNT(*) FROM public.deposits WHERE status = 'pending'),
    'pending_withdrawals',  (SELECT COUNT(*) FROM public.withdrawals WHERE status = 'pending'),
    'total_wagered',        COALESCE((SELECT SUM(bet_amount) FROM public.game_sessions), 0),
    'sessions_today',       (SELECT COUNT(*) FROM public.game_sessions WHERE created_at >= CURRENT_DATE),
    'platform_balance',     COALESCE((SELECT SUM(main_balance) FROM public.wallets), 0),
    'total_referrals',      (SELECT COUNT(*) FROM public.referrals),
    'referral_earnings_paid', COALESCE((SELECT SUM(amount) FROM public.referral_earnings WHERE status = 'paid'), 0)
  ) INTO v_result;
  RETURN v_result;
END;
$$;
