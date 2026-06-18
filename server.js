require('dotenv').config();
const express    = require('express');
const cors       = require('cors');
const helmet     = require('helmet');
const morgan     = require('morgan');
const compression = require('compression');
const path       = require('path');

const app = express();

// ── Security & Middleware ──
app.use(helmet({ 
  contentSecurityPolicy: false,
  crossOriginOpenerPolicy: false
}));
app.use(compression());
app.use(morgan('combined'));
app.use(cors({
  origin: (process.env.CORS_ORIGIN || 'http://localhost:3000').split(','),
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ── Static Files ──
// Serve admin panel
app.use('/admin', express.static(path.join(__dirname, 'admin')));
// Serve frontend (optional - copy AVAITOR folder here)
app.use('/', express.static(path.join(__dirname, 'public')));

// ── API Routes ──
app.use('/api/auth',        require('./src/routes/auth'));
app.use('/api/wallet',      require('./src/routes/wallet'));
app.use('/api/deposits',    require('./src/routes/deposits'));
app.use('/api/withdrawals', require('./src/routes/withdrawals'));
app.use('/api/referrals',       require('./src/routes/referrals'));
app.use('/api/games',           require('./src/routes/games'));
app.use('/api/payment-methods', require('./src/routes/payment_methods'));

// Admin routes
app.use('/api/admin/dashboard',    require('./src/routes/admin/dashboard'));
app.use('/api/admin/users',        require('./src/routes/admin/users'));
app.use('/api/admin/deposits',     require('./src/routes/admin/deposits'));
app.use('/api/admin/withdrawals',  require('./src/routes/admin/withdrawals'));
app.use('/api/admin/wallets',      require('./src/routes/admin/wallets'));
app.use('/api/admin/referrals',    require('./src/routes/admin/referrals'));
app.use('/api/admin/games',        require('./src/routes/admin/games'));
app.use('/api/admin/settings',        require('./src/routes/admin/settings'));
app.use('/api/admin/logs',            require('./src/routes/admin/logs'));
app.use('/api/admin/payment-methods', require('./src/routes/admin/payment_methods'));

// ── Health Check ──
app.get('/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

// ── 404 ──
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

// ── Error Handler ──
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
});

// ── Start ──
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 AVAITOR Casino API running on port ${PORT}`);
  console.log(`📊 Admin panel: http://localhost:${PORT}/admin`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
});

module.exports = app;
