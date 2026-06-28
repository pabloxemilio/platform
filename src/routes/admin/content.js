const express   = require('express');
const router    = express.Router();
const adminAuth = require('../../middleware/adminAuth');
const { supabase } = require('../../config/supabase');

// helper: generic CRUD for a content table
function crud(table, allowed) {
  // list (admin sees all)
  router.get(`/${table}`, adminAuth, async (req, res) => {
    try {
      const { data, error } = await supabase.from(table).select('*').order('sort_order', { ascending: true }).order('created_at', { ascending: false });
      if (error) throw error;
      res.json({ [table]: data });
    } catch (e) { res.status(500).json({ error: e.message }); }
  });
  // create
  router.post(`/${table}`, adminAuth, async (req, res) => {
    try {
      const body = {};
      allowed.forEach(f => { if (req.body[f] !== undefined) body[f] = req.body[f]; });
      const { data, error } = await supabase.from(table).insert(body).select().single();
      if (error) throw error;
      await supabase.from('admin_logs').insert({ admin_id: req.admin.id, action: `${table}_create`, target_type: table, target_id: data.id, new_value: body, ip_address: req.adminIp });
      res.json({ item: data });
    } catch (e) { res.status(500).json({ error: e.message }); }
  });
  // update
  router.patch(`/${table}/:id`, adminAuth, async (req, res) => {
    try {
      const body = {};
      allowed.forEach(f => { if (req.body[f] !== undefined) body[f] = req.body[f]; });
      if (!Object.keys(body).length) return res.status(400).json({ error: 'No fields to update' });
      const { data, error } = await supabase.from(table).update(body).eq('id', req.params.id).select().single();
      if (error) throw error;
      await supabase.from('admin_logs').insert({ admin_id: req.admin.id, action: `${table}_update`, target_type: table, target_id: req.params.id, new_value: body, ip_address: req.adminIp });
      res.json({ item: data });
    } catch (e) { res.status(500).json({ error: e.message }); }
  });
  // delete
  router.delete(`/${table}/:id`, adminAuth, async (req, res) => {
    try {
      const { error } = await supabase.from(table).delete().eq('id', req.params.id);
      if (error) throw error;
      await supabase.from('admin_logs').insert({ admin_id: req.admin.id, action: `${table}_delete`, target_type: table, target_id: req.params.id, ip_address: req.adminIp });
      res.json({ ok: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
  });
}

crud('promotions',   ['title', 'subtitle', 'description', 'image_url', 'badge', 'badge_color', 'cta_text', 'cta_action', 'link_url', 'status', 'sort_order']);
crud('announcements', ['message', 'type', 'status', 'sort_order']);
crud('banners',       ['image_url', 'tag', 'title', 'subtitle', 'cta_text', 'cta_action', 'link_url', 'status', 'sort_order']);

module.exports = router;
