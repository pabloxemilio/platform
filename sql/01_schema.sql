-- ============================================================
-- AVAITOR CASINO - Database Schema
-- Run this in Supabase SQL Editor
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ── USERS (profile, extends auth.users) ──
CREATE TABLE IF NOT EXISTS public.users (
  id              UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  phone           TEXT UNIQUE,
  email           TEXT UNIQUE,
  username        TEXT UNIQUE,
  full_name       TEXT,
  status          TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','blocked','suspended')),
  is_admin        BOOLEAN NOT NULL DEFAULT false,
  referral_code   TEXT UNIQUE NOT NULL DEFAULT upper(substring(gen_random_uuid()::text, 1, 8)),
  referred_by     UUID REFERENCES public.users(id),
  kyc_status      TEXT NOT NULL DEFAULT 'none' CHECK (kyc_status IN ('none','pending','approved','rejected')),
  last_login_at   TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── WALLETS ──
CREATE TABLE IF NOT EXISTS public.wallets (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id             UUID NOT NULL UNIQUE REFERENCES public.users(id) ON DELETE CASCADE,
  main_balance        NUMERIC(20,2) NOT NULL DEFAULT 0 CHECK (main_balance >= 0),
  bonus_balance       NUMERIC(20,2) NOT NULL DEFAULT 0 CHECK (bonus_balance >= 0),
  locked_balance      NUMERIC(20,2) NOT NULL DEFAULT 0 CHECK (locked_balance >= 0),
  total_deposited     NUMERIC(20,2) NOT NULL DEFAULT 0,
  total_withdrawn     NUMERIC(20,2) NOT NULL DEFAULT 0,
  total_wagered       NUMERIC(20,2) NOT NULL DEFAULT 0,
  wagering_required   NUMERIC(20,2) NOT NULL DEFAULT 0,
  wagering_completed  NUMERIC(20,2) NOT NULL DEFAULT 0,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── DEPOSITS ──
CREATE TABLE IF NOT EXISTS public.deposits (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id           UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  amount            NUMERIC(20,2) NOT NULL CHECK (amount > 0),
  bonus_amount      NUMERIC(20,2) NOT NULL DEFAULT 0,
  method            TEXT NOT NULL DEFAULT 'easypaisa',
  status            TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  reference_number  TEXT,
  proof_url         TEXT,
  admin_note        TEXT,
  approved_by       UUID REFERENCES public.users(id),
  approved_at       TIMESTAMPTZ,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── WITHDRAWALS ──
CREATE TABLE IF NOT EXISTS public.withdrawals (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id          UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  amount           NUMERIC(20,2) NOT NULL CHECK (amount > 0),
  method           TEXT NOT NULL DEFAULT 'easypaisa',
  account_details  JSONB NOT NULL DEFAULT '{}',
  status           TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','processing','approved','rejected')),
  wagering_met     BOOLEAN NOT NULL DEFAULT false,
  admin_note       TEXT,
  processed_by     UUID REFERENCES public.users(id),
  processed_at     TIMESTAMPTZ,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── TRANSACTIONS ──
CREATE TABLE IF NOT EXISTS public.transactions (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id         UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  type            TEXT NOT NULL CHECK (type IN ('deposit','withdrawal','bet','win','bonus','referral_bonus','adjustment')),
  amount          NUMERIC(20,2) NOT NULL,
  balance_before  NUMERIC(20,2) NOT NULL,
  balance_after   NUMERIC(20,2) NOT NULL,
  description     TEXT,
  reference_id    UUID,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── REFERRALS ──
CREATE TABLE IF NOT EXISTS public.referrals (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  referrer_id     UUID NOT NULL REFERENCES public.users(id),
  referee_id      UUID NOT NULL UNIQUE REFERENCES public.users(id),
  status          TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','active','rewarded')),
  commission_pct  NUMERIC(5,2) NOT NULL DEFAULT 5.00,
  total_earned    NUMERIC(20,2) NOT NULL DEFAULT 0,
  rewarded_at     TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── REFERRAL EARNINGS ──
CREATE TABLE IF NOT EXISTS public.referral_earnings (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  referrer_id   UUID NOT NULL REFERENCES public.users(id),
  referee_id    UUID NOT NULL REFERENCES public.users(id),
  amount        NUMERIC(20,2) NOT NULL,
  type          TEXT NOT NULL CHECK (type IN ('signup_bonus','deposit_commission')),
  status        TEXT NOT NULL DEFAULT 'paid' CHECK (status IN ('pending','paid')),
  description   TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── GAMES ──
CREATE TABLE IF NOT EXISTS public.games (
  id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name           TEXT NOT NULL,
  provider       TEXT NOT NULL,
  category       TEXT NOT NULL CHECK (category IN ('crash','slots','live','sports','fishing','lottery','other')),
  status         TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','inactive','maintenance')),
  thumbnail_url  TEXT,
  min_bet        NUMERIC(20,2) NOT NULL DEFAULT 10,
  max_bet        NUMERIC(20,2) NOT NULL DEFAULT 100000,
  rtp            NUMERIC(5,2) NOT NULL DEFAULT 96.00,
  sort_order     INTEGER NOT NULL DEFAULT 0,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── GAME SESSIONS ──
CREATE TABLE IF NOT EXISTS public.game_sessions (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id         UUID NOT NULL REFERENCES public.users(id),
  game_id         UUID REFERENCES public.games(id),
  game_name       TEXT NOT NULL,
  bet_amount      NUMERIC(20,2) NOT NULL CHECK (bet_amount > 0),
  win_amount      NUMERIC(20,2) NOT NULL DEFAULT 0,
  net_result      NUMERIC(20,2) GENERATED ALWAYS AS (win_amount - bet_amount) STORED,
  result          TEXT NOT NULL CHECK (result IN ('win','loss','draw')),
  wager_counted   BOOLEAN NOT NULL DEFAULT true,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── ADMIN LOGS ──
CREATE TABLE IF NOT EXISTS public.admin_logs (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  admin_id     UUID NOT NULL REFERENCES public.users(id),
  action       TEXT NOT NULL,
  target_type  TEXT,
  target_id    UUID,
  old_value    JSONB,
  new_value    JSONB,
  ip_address   TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── SITE SETTINGS ──
CREATE TABLE IF NOT EXISTS public.site_settings (
  key         TEXT PRIMARY KEY,
  value       TEXT NOT NULL,
  description TEXT,
  updated_by  UUID REFERENCES public.users(id),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── PAYMENT METHODS ──
CREATE TABLE IF NOT EXISTS public.payment_methods (
  id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name           TEXT NOT NULL,
  type           TEXT NOT NULL CHECK (type IN ('deposit','withdrawal','both')),
  currency       TEXT DEFAULT 'PKR',
  details        JSONB NOT NULL DEFAULT '{}',
  instructions   TEXT,
  min_amount     NUMERIC(20,2),
  max_amount     NUMERIC(20,2),
  status         TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','inactive')),
  sort_order     INTEGER NOT NULL DEFAULT 0,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── INDEXES ──
CREATE INDEX IF NOT EXISTS idx_wallets_user_id        ON public.wallets(user_id);
CREATE INDEX IF NOT EXISTS idx_deposits_user_id       ON public.deposits(user_id);
CREATE INDEX IF NOT EXISTS idx_deposits_status        ON public.deposits(status);
CREATE INDEX IF NOT EXISTS idx_withdrawals_user_id    ON public.withdrawals(user_id);
CREATE INDEX IF NOT EXISTS idx_withdrawals_status     ON public.withdrawals(status);
CREATE INDEX IF NOT EXISTS idx_transactions_user_id   ON public.transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_type      ON public.transactions(type);
CREATE INDEX IF NOT EXISTS idx_transactions_created   ON public.transactions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_game_sessions_user_id  ON public.game_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_game_sessions_created  ON public.game_sessions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_referrals_referrer_id  ON public.referrals(referrer_id);
CREATE INDEX IF NOT EXISTS idx_admin_logs_admin_id    ON public.admin_logs(admin_id);
CREATE INDEX IF NOT EXISTS idx_admin_logs_created     ON public.admin_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_users_referral_code    ON public.users(referral_code);
CREATE INDEX IF NOT EXISTS idx_users_status           ON public.users(status);

-- ── UPDATED_AT TRIGGER ──
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER wallets_updated_at BEFORE UPDATE ON public.wallets FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER games_updated_at BEFORE UPDATE ON public.games FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER payment_methods_updated_at BEFORE UPDATE ON public.payment_methods FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ── AUTO-CREATE WALLET ON USER INSERT ──
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.wallets (user_id) VALUES (NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_user_created
  AFTER INSERT ON public.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
