-- ============================================================
-- AVAITOR CASINO - Per-user display currency (PKR / INR / USD)
-- Run this in Supabase SQL Editor (after 01..06).
-- Display-only: balance is one number; the symbol/label changes.
-- ============================================================

ALTER TABLE public.users
  ADD COLUMN IF NOT EXISTS currency TEXT NOT NULL DEFAULT 'PKR'
  CHECK (currency IN ('PKR','INR','USD'));
