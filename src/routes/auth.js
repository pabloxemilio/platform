const express  = require('express');
const jwt      = require('jsonwebtoken');
const router   = express.Router();
const { supabase } = require('../config/supabase');
const { processReferral } = require('../services/referral');

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { phone, email, password, username, referral_code } = req.body;
    if (!password) return res.status(400).json({ error: 'Password required' });
    if (!phone && !email) return res.status(400).json({ error: 'Phone or email required' });
    if (password.length < 6) return res.status(400).json({ error: 'Password must be at least 6 characters' });

    // Register in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      phone:         phone || undefined,
      email:         email || undefined,
      password,
      email_confirm: true,
      phone_confirm: true,
    });
    if (authError) return res.status(400).json({ error: authError.message });

    const userId = authData.user.id;

    // Create profile
    const { error: profileError } = await supabase.from('users').insert({
      id:       userId,
      phone:    phone || null,
      email:    email || null,
      username: username || (phone ? `user_${phone.slice(-4)}` : `user_${Date.now()}`),
    });
    if (profileError) {
      await supabase.auth.admin.deleteUser(userId);
      return res.status(400).json({ error: profileError.message });
    }

    // Process referral
    if (referral_code) await processReferral(userId, referral_code);

    // Sign in to get token
    const loginId = email || phone;
    const { data: session, error: loginErr } = email
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signInWithPassword({ phone, password });

    if (loginErr) {
      if (loginErr.message.includes('Email not confirmed')) {
        // Force bypass if project settings strictly require email confirmation
        const { data: forceSession, error: forceErr } = await supabase.auth.admin.generateLink({
          type: 'magiclink', email: email,
        });
        // We will just let them login with their password later if it fails here,
        // but normally `email_confirm: true` handles this.
        return res.status(201).json({ message: 'Registered successfully. Please login.' });
      }
      return res.status(201).json({ message: 'Registered. Please login.' });
    }

    return res.status(201).json({
      message: 'Registration successful! Welcome bonus pending.',
      token:   session.session.access_token,
      user: {
        id:       userId,
        phone,
        email,
        username: username || `user_${Date.now()}`,
      },
    });
  } catch (e) {
    console.error('Register error:', e);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { phone, email, password } = req.body;
    if (!password) return res.status(400).json({ error: 'Password required' });

    const { data, error } = email
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signInWithPassword({ phone, password });

    if (error) return res.status(401).json({ error: 'Invalid credentials' });

    // Get profile
    const { data: profile } = await supabase
      .from('users').select('*').eq('id', data.user.id).single();

    if (profile?.status === 'blocked')   return res.status(403).json({ error: 'Account blocked. Contact support.' });
    if (profile?.status === 'suspended') return res.status(403).json({ error: 'Account suspended.' });

    // Update last login
    await supabase.from('users').update({ last_login_at: new Date().toISOString() }).eq('id', data.user.id);

    // If admin, also issue JWT
    let adminToken = null;
    if (profile?.is_admin) {
      adminToken = jwt.sign(
        { id: profile.id, is_admin: true, username: profile.username },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
      );
    }

    res.json({
      token:        data.session.access_token,
      refresh_token: data.session.refresh_token,
      admin_token:  adminToken,
      user: {
        id:        profile.id,
        phone:     profile.phone,
        email:     profile.email,
        username:  profile.username,
        status:    profile.status,
        is_admin:  profile.is_admin,
        referral_code: profile.referral_code,
      },
    });
  } catch (e) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// POST /api/auth/google
// Seamless Google One Tap / OAuth popup login
router.post('/google', async (req, res) => {
  try {
    const { id_token } = req.body;
    if (!id_token) return res.status(400).json({ error: 'Google ID token required' });

    // Verify token with Supabase
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: id_token
    });

    if (error) return res.status(401).json({ error: error.message });

    const userId = data.user.id;
    const email = data.user.email;
    const name = data.user.user_metadata?.full_name || '';

    // Check if user exists in our public.users table
    let { data: profile } = await supabase.from('users').select('*').eq('id', userId).single();

    if (!profile) {
      // First time Google login -> Create profile
      // Wallet will be auto-created by the SQL trigger
      const usernameBase = email ? email.split('@')[0] : `user_${Date.now()}`;
      const { data: newProfile, error: profileError } = await supabase.from('users').insert({
        id: userId,
        email: email,
        full_name: name,
        username: `${usernameBase}_${Math.floor(Math.random() * 1000)}`,
      }).select().single();

      if (profileError) {
        console.error('Google profile creation error:', profileError);
        return res.status(500).json({ error: 'Failed to create user profile' });
      }
      profile = newProfile;
    }

    if (profile?.status === 'blocked')   return res.status(403).json({ error: 'Account blocked. Contact support.' });
    if (profile?.status === 'suspended') return res.status(403).json({ error: 'Account suspended.' });

    await supabase.from('users').update({ last_login_at: new Date().toISOString() }).eq('id', userId);

    const { data: wallet } = await supabase.from('wallets').select('*').eq('user_id', userId).single();

    res.json({
      token: data.session.access_token,
      refresh_token: data.session.refresh_token,
      user: profile,
      wallet: wallet
    });
  } catch (e) {
    console.error('Google Auth Error:', e);
    res.status(500).json({ error: 'Google login failed' });
  }
});

// POST /api/auth/admin-login  (dedicated admin login returning JWT)
router.post('/admin-login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return res.status(401).json({ error: 'Invalid credentials' });

    const { data: profile } = await supabase
      .from('users').select('*').eq('id', data.user.id).single();

    if (!profile?.is_admin) return res.status(403).json({ error: 'Not an admin account' });
    if (profile.status !== 'active') return res.status(403).json({ error: 'Admin account disabled' });

    const adminToken = jwt.sign(
      { id: profile.id, is_admin: true, username: profile.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    // Log admin login
    await supabase.from('admin_logs').insert({
      admin_id: profile.id, action: 'admin_login', target_type: 'auth',
    });

    res.json({ token: adminToken, admin: { id: profile.id, username: profile.username, email: profile.email } });
  } catch (e) {
    res.status(500).json({ error: 'Admin login failed' });
  }
});

// GET /api/auth/me
router.get('/me', require('../middleware/auth'), async (req, res) => {
  try {
    const { data: profile } = await supabase
      .from('users').select('*').eq('id', req.user.id).single();
    const { data: wallet } = await supabase
      .from('wallets').select('main_balance,bonus_balance,wagering_required,wagering_completed').eq('user_id', req.user.id).single();
    res.json({ user: profile, wallet });
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// POST /api/auth/refresh
router.post('/refresh', async (req, res) => {
  try {
    const { refresh_token } = req.body;
    if (!refresh_token) return res.status(400).json({ error: 'Refresh token required' });
    const { data, error } = await supabase.auth.refreshSession({ refresh_token });
    if (error) return res.status(401).json({ error: 'Token refresh failed' });
    res.json({ token: data.session.access_token, refresh_token: data.session.refresh_token });
  } catch (e) {
    res.status(500).json({ error: 'Refresh failed' });
  }
});

module.exports = router;
