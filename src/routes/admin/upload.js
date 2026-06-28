const express   = require('express');
const router    = express.Router();
const path      = require('path');
const multer    = require('multer');
const adminAuth = require('../../middleware/adminAuth');
const { supabase } = require('../../config/supabase');

const BUCKET = 'assets';
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter: (req, file, cb) => {
    if (/^image\/(png|jpe?g|webp|gif|svg\+xml)$/.test(file.mimetype)) cb(null, true);
    else cb(new Error('Only image files are allowed'));
  },
});

// POST /api/admin/upload  (multipart: file, folder) -> { url, path }
router.post('/', adminAuth, (req, res) => {
  upload.single('file')(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message });
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    try {
      const ext    = (path.extname(req.file.originalname) || '.png').toLowerCase();
      const folder = String(req.body.folder || 'misc').replace(/[^a-z0-9_-]/gi, '').slice(0, 40) || 'misc';
      const key    = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;

      const { error: upErr } = await supabase.storage.from(BUCKET).upload(key, req.file.buffer, {
        contentType: req.file.mimetype,
        upsert: false,
      });
      if (upErr) return res.status(500).json({ error: upErr.message });

      const { data } = supabase.storage.from(BUCKET).getPublicUrl(key);
      await supabase.from('admin_logs').insert({ admin_id: req.admin.id, action: 'asset_upload', target_type: 'storage', new_value: { path: key }, ip_address: req.adminIp }).then(() => {}, () => {});
      res.json({ url: data.publicUrl, path: key });
    } catch (e) { res.status(500).json({ error: e.message }); }
  });
});

module.exports = router;
