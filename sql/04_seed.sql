-- ============================================================
-- AVAITOR CASINO - Default Settings Seed
-- ============================================================

INSERT INTO public.site_settings (key, value, description) VALUES
  ('site_name',             'AVAITOR Casino',      'Platform name'),
  ('site_status',           'active',              'Platform status: active/maintenance'),
  ('min_deposit',           '100',                 'Minimum deposit amount (PKR)'),
  ('max_deposit',           '1000000',             'Maximum deposit amount (PKR)'),
  ('min_withdrawal',        '500',                 'Minimum withdrawal amount (PKR)'),
  ('max_withdrawal',        '500000',              'Maximum withdrawal amount (PKR)'),
  ('welcome_bonus_pct',     '500',                 'Welcome bonus percentage'),
  ('welcome_bonus_max',     '50000',               'Maximum welcome bonus (PKR)'),
  ('wager_multiplier',      '10',                  'Bonus wagering multiplier (e.g. 10 = 10x)'),
  ('referral_signup_bonus', '555',                 'Bonus paid to referrer on referee first deposit (PKR)'),
  ('referral_commission_pct','5',                  'Ongoing % of referee net losses paid to referrer'),
  ('maintenance_message',   'We are under maintenance. Please check back soon.', 'Maintenance page message'),
  ('currency_code',         'PKR',                 'Default currency'),
  ('currency_symbol',       '₨',                   'Currency symbol'),
  ('support_whatsapp',      '',                    'Support WhatsApp number'),
  ('support_telegram',      '',                    'Support Telegram handle')
ON CONFLICT (key) DO NOTHING;

-- Default games
INSERT INTO public.games (name, provider, category, rtp, min_bet, max_bet, sort_order) VALUES
  ('Aviator',        'Spribe',    'crash',   97.00, 10,    100000, 1),
  ('Mines',          'Spribe',    'crash',   97.00, 10,    50000,  2),
  ('Lucky Dice',     'Spribe',    'crash',   97.50, 10,    50000,  3),
  ('Fortune Slots',  'JILI',      'slots',   96.50, 5,     100000, 4),
  ('Mega Slots',     'PG Soft',   'slots',   95.80, 5,     100000, 5),
  ('Live Roulette',  'Evolution', 'live',    97.30, 50,    500000, 6),
  ('Live Baccarat',  'Evolution', 'live',    98.90, 50,    500000, 7),
  ('Dragon Tiger',   'JILI',      'live',    96.30, 20,    200000, 8),
  ('Sports Betting', 'JILI',      'sports',  95.00, 50,    1000000,9),
  ('Happy Fishing',  'JILI',      'fishing', 96.00, 10,    50000,  10),
  ('Ocean King',     'JILI',      'fishing', 96.00, 10,    50000,  11)
ON CONFLICT DO NOTHING;
