const express   = require('express');
const router    = express.Router();
const adminAuth = require('../../middleware/adminAuth');
const { supabase } = require('../../config/supabase');

router.get('/', adminAuth, async (req, res) => {
  try {
    const { data, error } = await supabase.from('site_settings').select('*').order('key');
    if (error) throw error;
    const settings = {};
    data.forEach(s => { settings[s.key] = s.value; });
    res.json({ settings, raw: data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.patch('/', adminAuth, async (req, res) => {
  try {
    const { settings } = req.body;
    if (!settings || typeof settings !== 'object') {
      return res.status(400).json({ error: 'settings object required' });
    }

    // Filter out blank / null values
    const filtered = Object.fromEntries(
      Object.entries(settings).filter(([, v]) => v !== '' && v !== null && v !== undefined)
    );

    if (Object.keys(filtered).length === 0) {
      return res.status(400).json({ error: 'No valid settings to save' });
    }

    // Update each key individually — more reliable than bulk upsert with Supabase JS v2
    const errors = [];
    for (const [key, value] of Object.entries(filtered)) {
      const { error } = await supabase
        .from('site_settings')
        .update({ value: String(value), updated_by: req.admin.id, updated_at: new Date().toISOString() })
        .eq('key', key);
      if (error) {
        console.error(`[settings PATCH] failed to update key "${key}":`, error);
        errors.push(`${key}: ${error.message}`);
      }
    }

    if (errors.length > 0) {
      return res.status(500).json({ error: 'Some settings failed to save', details: errors });
    }

    // Log to admin_logs — non-fatal if this fails
    const { error: logError } = await supabase.from('admin_logs').insert({
      admin_id: req.admin.id,
      action: 'settings_updated',
      target_type: 'site_settings',
      new_value: filtered,
      ip_address: req.adminIp || null,
    });
    if (logError) console.warn('[settings PATCH] admin_log insert error:', logError.message);

    res.json({ message: 'Settings updated successfully' });
  } catch (e) {
    console.error('[settings PATCH] unexpected error:', e);
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
