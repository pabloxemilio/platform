-- ============================================================
-- AVAITOR CASINO - Payment Methods Migration
-- Run this in Supabase SQL Editor to apply to existing DB
-- ============================================================

-- 1. Drop CHECK constraints on method column
ALTER TABLE public.deposits DROP CONSTRAINT IF EXISTS deposits_method_check;
ALTER TABLE public.withdrawals DROP CONSTRAINT IF EXISTS withdrawals_method_check;

-- 2. Create the payment_methods table
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

-- 3. Trigger for updated_at
CREATE TRIGGER payment_methods_updated_at BEFORE UPDATE ON public.payment_methods FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- 4. Enable RLS
ALTER TABLE public.payment_methods ENABLE ROW LEVEL SECURITY;
CREATE POLICY "payment_methods_select_all" ON public.payment_methods FOR SELECT USING (true);

-- 5. Seed some initial payment methods based on old hardcoded values
INSERT INTO public.payment_methods (name, type, instructions, sort_order) VALUES
  ('EasyPaisa', 'both', 'Please send funds to the EasyPaisa account provided.', 1),
  ('JazzCash', 'both', 'Please send funds to the JazzCash account provided.', 2),
  ('Bank Transfer', 'both', 'Use the bank details below for your transfer.', 3),
  ('USDT TRC20', 'both', 'Send only USDT via TRC20 network.', 4)
ON CONFLICT DO NOTHING;
