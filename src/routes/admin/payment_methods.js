const express = require('express');
const router = express.Router();
const adminAuth = require('../../middleware/adminAuth');
const { supabase } = require('../../config/supabase');

// List payment methods
router.get('/', adminAuth, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('payment_methods')
      .select('*')
      .order('sort_order', { ascending: true });
    if (error) throw error;
    res.json({ payment_methods: data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Create payment method
router.post('/', adminAuth, async (req, res) => {
  try {
    const { name, type, currency, details, instructions, min_amount, max_amount, status, sort_order } = req.body;
    if (!name || !type) return res.status(400).json({ error: 'Name and type are required' });

    const insertData = { name, type };
    if (currency !== undefined) insertData.currency = currency;
    if (details !== undefined) insertData.details = details;
    if (instructions !== undefined) insertData.instructions = instructions;
    if (min_amount !== undefined) insertData.min_amount = min_amount;
    if (max_amount !== undefined) insertData.max_amount = max_amount;
    if (status !== undefined) insertData.status = status;
    if (sort_order !== undefined) insertData.sort_order = sort_order;

    const { data, error } = await supabase.from('payment_methods').insert(insertData).select().single();
    if (error) throw error;

    await supabase.from('admin_logs').insert({
      admin_id: req.admin.id, action: 'payment_method_created', target_type: 'payment_methods', target_id: data.id,
      new_value: data, ip_address: req.adminIp
    });

    res.json({ message: 'Payment method created', payment_method: data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Update payment method
router.patch('/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const { data, error } = await supabase
      .from('payment_methods')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    await supabase.from('admin_logs').insert({
      admin_id: req.admin.id, action: 'payment_method_updated', target_type: 'payment_methods', target_id: id,
      new_value: data, ip_address: req.adminIp
    });

    res.json({ message: 'Payment method updated', payment_method: data });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Delete payment method
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase.from('payment_methods').delete().eq('id', id);
    if (error) throw error;

    await supabase.from('admin_logs').insert({
      admin_id: req.admin.id, action: 'payment_method_deleted', target_type: 'payment_methods', target_id: id,
      ip_address: req.adminIp
    });

    res.json({ message: 'Payment method deleted' });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
