const express   = require('express');
const router    = express.Router();
const adminAuth = require('../../middleware/adminAuth');
const { supabase } = require('../../config/supabase');

router.get('/', adminAuth, async (req, res) => {
  try {
    const page  = parseInt(req.query.page  || 1);
    const limit = parseInt(req.query.limit || 30);
    const from  = (page - 1) * limit;
    const { data, count, error } = await supabase
      .from('admin_logs')
      .select('*, admin:admin_id(username)', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(from, from + limit - 1);
    if (error) throw error;
    res.json({ logs: data, total: count, page, limit });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
