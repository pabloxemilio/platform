-- ============================================================
-- AVAITOR CASINO - Global game win ratio (RTP) for all games.
-- Run in Supabase SQL Editor. Adds the site_settings key the admin
-- "Game Win Ratio" control reads/writes; both game engines obey it.
-- ============================================================

INSERT INTO public.site_settings (key, value, description)
VALUES ('game_win_ratio', '95', 'House payout ratio (RTP %) applied to ALL games. 50-99.')
ON CONFLICT (key) DO NOTHING;

-- Max payout a player can win in a single round of any game (0 = unlimited).
INSERT INTO public.site_settings (key, value, description)
VALUES ('max_win_amount', '0', 'Max payout per single round across all games. 0 = unlimited.')
ON CONFLICT (key) DO NOTHING;
