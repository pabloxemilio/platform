-- ============================================================
-- AVAITOR CASINO — Fix: Auto-sync auth.users → public.users
-- Run this in Supabase SQL Editor
-- ============================================================

-- STEP 1: Create trigger function that fires when ANY new auth user is created
CREATE OR REPLACE FUNCTION public.handle_auth_user_created()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, username, referral_code)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)),
    upper(substring(replace(NEW.id::text, '-', ''), 1, 8))
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- STEP 2: Attach trigger to auth.users (fires on every new Supabase Auth signup)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_auth_user_created();

-- STEP 3: Backfill any existing auth users that are NOT yet in public.users
INSERT INTO public.users (id, email, username, referral_code)
SELECT
  au.id,
  au.email,
  COALESCE(au.raw_user_meta_data->>'username', split_part(au.email, '@', 1)),
  upper(substring(replace(au.id::text, '-', ''), 1, 8))
FROM auth.users au
LEFT JOIN public.users pu ON pu.id = au.id
WHERE pu.id IS NULL
ON CONFLICT (id) DO NOTHING;

-- STEP 4: Mark your admin user
UPDATE public.users
SET is_admin = true
WHERE email = 'admin@avaitor.com';

-- STEP 5: Verify — should show your admin user
SELECT
  u.id,
  u.email,
  u.username,
  u.is_admin,
  u.status,
  u.referral_code,
  w.main_balance
FROM public.users u
LEFT JOIN public.wallets w ON w.user_id = u.id
ORDER BY u.created_at DESC;
