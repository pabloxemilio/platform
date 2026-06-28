-- ============================================================
-- AVAITOR CASINO - Hero banners (admin-controlled lobby carousel)
-- Run in Supabase SQL Editor (after 08_content.sql).
-- ============================================================

CREATE TABLE IF NOT EXISTS public.banners (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  image_url    TEXT NOT NULL,
  tag          TEXT,
  title        TEXT,
  subtitle     TEXT,
  cta_text     TEXT DEFAULT 'Play Now',
  cta_action   TEXT DEFAULT 'aviator',     -- aviator | chicken | deposit | vip | referral | link
  link_url     TEXT,
  status       TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','inactive')),
  sort_order   INTEGER NOT NULL DEFAULT 0,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
CREATE POLICY "banners_public_read" ON public.banners FOR SELECT USING (true);

INSERT INTO public.banners (image_url, tag, title, subtitle, cta_text, cta_action, sort_order) VALUES
  ('images/hero_banner.png',   '🔥 Most Popular',  'Play Aviator',     'The #1 crash game — cash out before it flies away!', 'Play Now',    'aviator',  1),
  ('images/promo_banner1.png', '🎁 Welcome Offer', 'Get 500% Bonus',   'New member welcome bonus on first deposit!',         'Claim Bonus', 'deposit',  2),
  ('images/promo_banner2.png', '👑 VIP Program',   'Join the VIP Club','Weekly cashback, faster payouts & more.',            'Join VIP',    'vip',      3)
ON CONFLICT DO NOTHING;
