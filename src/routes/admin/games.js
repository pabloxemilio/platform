const express   = require('express');
const router    = express.Router();
const adminAuth = require('../../middleware/adminAuth');
const { supabase } = require('../../config/supabase');

router.get('/', adminAuth, async (req, res) => {
  try {
    const { data, error } = await supabase.from('games').select('*').order('sort_order');
    if (error) throw error;
    res.json({ games: data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.post('/', adminAuth, async (req, res) => {
  try {
    const { name, provider, category, rtp, min_bet, max_bet, thumbnail_url, sort_order } = req.body;
    if (!name || !provider || !category) return res.status(400).json({ error: 'name, provider, category required' });
    const { data, error } = await supabase.from('games').insert(req.body).select().single();
    if (error) throw error;
    res.status(201).json({ game: data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.patch('/:id', adminAuth, async (req, res) => {
  try {
    const allowed = ['name','provider','category','status','rtp','min_bet','max_bet','thumbnail_url','sort_order'];
    const updates = {};
    allowed.forEach(f => { if (req.body[f] !== undefined) updates[f] = req.body[f]; });
    const { data, error } = await supabase.from('games').update(updates).eq('id', req.params.id).select().single();
    if (error) throw error;
    await supabase.from('admin_logs').insert({
      admin_id: req.admin.id, action: 'game_updated',
      target_type: 'game', target_id: req.params.id,
      new_value: updates, ip_address: req.adminIp,
    });
    res.json({ game: data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.delete('/:id', adminAuth, async (req, res) => {
  try {
    await supabase.from('games').update({ status: 'inactive' }).eq('id', req.params.id);
    res.json({ message: 'Game deactivated' });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
