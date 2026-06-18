const express = require('express');
const router = express.Router();
const { supabase } = require('../config/supabase');
const auth = require('../middleware/auth'); // Optionally require auth if you want only logged-in users to see them

router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('payment_methods')
      .select('id, name, type, currency, details, instructions, min_amount, max_amount, sort_order')
      .eq('status', 'active')
      .order('sort_order', { ascending: true });
    
    if (error) throw error;
    res.json({ payment_methods: data });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
