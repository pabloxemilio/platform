const express = require('express');
const router  = express.Router();
const auth    = require('../middleware/auth');
const { supabase } = require('../config/supabase');
const { recordWager, getWagerProgress } = require('../services/wager');
const { debitWallet, creditWallet }     = require('../services/wallet');

// POST /api/games/session  — record a bet/win
router.post('/session', auth, async (req, res) => {
  try {
    const { game_id, game_name, bet_amount, win_amount, result } = req.body;
    if (!game_name || !bet_amount || bet_amount <= 0) {
      return res.status(400).json({ error: 'game_name and bet_amount required' });
    }

    // Debit bet from wallet
    await debitWallet(req.user.id, parseFloat(bet_amount), 'bet',
      `Bet on ${game_name}`, game_id || null);

    // Credit winnings if any
    if (win_amount && win_amount > 0) {
      await creditWallet(req.user.id, parseFloat(win_amount), 'win',
        `Win on ${game_name}`, game_id || null);
    }

    // Record game session
    const { data: session, error } = await supabase.from('game_sessions').insert({
      user_id:    req.user.id,
      game_id:    game_id || null,
      game_name,
      bet_amount: parseFloat(bet_amount),
      win_amount: parseFloat(win_amount || 0),
      result:     result || (win_amount > 0 ? 'win' : 'loss'),
    }).select().single();

    if (error) throw error;

    // Update wagering progress
    const wagerData = await recordWager(req.user.id, parseFloat(bet_amount));

    // Get updated wallet
    const { data: wallet } = await supabase
      .from('wallets').select('main_balance').eq('user_id', req.user.id).single();

    res.json({ session, wager_progress: wagerData, balance: wallet?.main_balance });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// GET /api/games  — list active games
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    let q = supabase.from('games').select('*').eq('status', 'active').order('sort_order');
    if (category) q = q.eq('category', category);
    const { data, error } = await q;
    if (error) throw error;
    res.json({ games: data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// GET /api/games/wager-progress  — check wagering progress
router.get('/wager-progress', auth, async (req, res) => {
  try {
    const progress = await getWagerProgress(req.user.id);
    res.json(progress);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
