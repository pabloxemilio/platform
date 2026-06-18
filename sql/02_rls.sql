-- ============================================================
-- AVAITOR CASINO - Row Level Security Policies
-- ============================================================

-- Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deposits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.withdrawals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referral_earnings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.game_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.games ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Users: own row only (service_role bypasses all)
CREATE POLICY "users_select_own" ON public.users FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "users_update_own" ON public.users FOR UPDATE TO authenticated USING (auth.uid() = id);

-- Wallets: own row only
CREATE POLICY "wallets_select_own" ON public.wallets FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- Deposits: own rows
CREATE POLICY "deposits_select_own" ON public.deposits FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "deposits_insert_own" ON public.deposits FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- Withdrawals: own rows
CREATE POLICY "withdrawals_select_own" ON public.withdrawals FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "withdrawals_insert_own" ON public.withdrawals FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- Transactions: own rows
CREATE POLICY "transactions_select_own" ON public.transactions FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- Referrals: own rows
CREATE POLICY "referrals_select_own" ON public.referrals FOR SELECT TO authenticated USING (auth.uid() = referrer_id OR auth.uid() = referee_id);
CREATE POLICY "referral_earnings_select_own" ON public.referral_earnings FOR SELECT TO authenticated USING (auth.uid() = referrer_id);

-- Game sessions: own rows
CREATE POLICY "game_sessions_select_own" ON public.game_sessions FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "game_sessions_insert_own" ON public.game_sessions FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- Games: public read
CREATE POLICY "games_select_all" ON public.games FOR SELECT USING (true);

-- Site settings: public read
CREATE POLICY "settings_select_all" ON public.site_settings FOR SELECT USING (true);

-- Payment methods: public read
ALTER TABLE public.payment_methods ENABLE ROW LEVEL SECURITY;
CREATE POLICY "payment_methods_select_all" ON public.payment_methods FOR SELECT USING (true);

-- Admin logs: no direct access (service_role only)
-- (No public policy = denied by default)
