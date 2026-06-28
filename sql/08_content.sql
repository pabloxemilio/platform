-- ============================================================
-- AVAITOR CASINO - Content management (promotions + announcements)
-- Run in Supabase SQL Editor (after 01..07).
-- Lets the admin panel CRUD the lobby promo cards + the scrolling announcement.
-- ============================================================

CREATE TABLE IF NOT EXISTS public.promotions (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title        TEXT NOT NULL,
  subtitle     TEXT,
  description  TEXT,
  image_url    TEXT,
  badge        TEXT,
  badge_color  TEXT DEFAULT '#E6B325',
  cta_text     TEXT DEFAULT 'Claim',
  cta_action   TEXT DEFAULT 'deposit',     -- deposit | vip | referral | link
  link_url     TEXT,
  status       TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','inactive')),
  sort_order   INTEGER NOT NULL DEFAULT 0,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.announcements (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  message      TEXT NOT NULL,
  type         TEXT NOT NULL DEFAULT 'info' CHECK (type IN ('info','promo','winner','alert')),
  status       TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','inactive')),
  sort_order   INTEGER NOT NULL DEFAULT 0,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TRIGGER promotions_updated_at BEFORE UPDATE ON public.promotions FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

ALTER TABLE public.promotions   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "promotions_public_read"   ON public.promotions   FOR SELECT USING (true);
CREATE POLICY "announcements_public_read" ON public.announcements FOR SELECT USING (true);

-- seed defaults (matches the current lobby)
INSERT INTO public.promotions (title, subtitle, badge, badge_color, cta_text, cta_action, image_url, sort_order) VALUES
  ('500% First Deposit Bonus',          'Welcome Offer', 'HOT', '#E6B325', 'Claim Bonus', 'deposit',  'images/promo_banner1.png', 1),
  ('VIP Weekly Cashback 30%',           'Exclusive',     'VIP', '#7C4DFF', 'Join VIP',    'vip',      'images/promo_banner2.png', 2),
  ('Invite Friends — Earn ₨ 555 Each',  'Referral',      '',    '#00E676', 'Invite Now',  'referral', 'images/hero_banner.png',   3)
ON CONFLICT DO NOTHING;

INSERT INTO public.announcements (message, type, sort_order) VALUES
  ('🎉 Welcome to AVAITOR — Aviator & Chicken Road are live now!', 'info', 1),
  ('🔥 500% Welcome Bonus on your first deposit!',                 'promo', 2)
ON CONFLICT DO NOTHING;
