# AVAITOR Casino — Backend & Admin Panel

A complete Node.js + Express backend with Supabase database and a premium Admin Dashboard.

---

## 🚀 Quick Start (Local)

### Step 1 — Set up Supabase
1. Go to [supabase.com](https://supabase.com) → Create a new project
2. Go to **SQL Editor** and run these files **in order**:
   - `sql/01_schema.sql`
   - `sql/02_rls.sql`
   - `sql/03_functions.sql`
   - `sql/04_seed.sql`
3. Go to **Settings → API** and copy:
   - Project URL
   - `anon` public key
   - `service_role` secret key

### Step 2 — Create Admin User
In Supabase SQL Editor, run:
```sql
-- After running the schema, insert your admin account
-- First create via Supabase Auth → Users → Add User (set email + password)
-- Then mark them as admin:
UPDATE public.users SET is_admin = true WHERE email = 'admin@avaitor.com';
```

### Step 3 — Configure Environment
```bash
cd AVAITOR-backend
copy .env.example .env
```
Edit `.env` and fill in your Supabase keys:
```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
JWT_SECRET=make-this-a-long-random-secret-string
ADMIN_EMAIL=admin@avaitor.com
ADMIN_PASSWORD=YourPassword123
```

### Step 4 — Install & Run
```bash
npm install
npm run dev
```

Open your browser:
- **Frontend:** `http://localhost:3000`
- **Admin Panel:** `http://localhost:3000/admin`

---

## 🎛️ Admin Panel Pages

| Page | URL | Description |
|------|-----|-------------|
| Login | `/admin/` | Admin login |
| Dashboard | `/admin/dashboard.html` | Stats overview, live data |
| Users | `/admin/users.html` | Manage all users, block/unblock |
| Deposits | `/admin/deposits.html` | Approve/reject deposits, apply bonus |
| Withdrawals | `/admin/withdrawals.html` | Approve/reject withdrawals |
| Wallets | `/admin/wallet.html` | Manual balance, bonus, wager reset |
| Referrals | `/admin/referrals.html` | Full referral tree + earnings |
| Games | `/admin/games.html` | Enable/disable/edit games |
| Settings | `/admin/settings.html` | All platform settings |
| Audit Logs | `/admin/logs.html` | Every admin action logged |

---

## 📡 API Endpoints

### User-Facing
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login |
| POST | `/api/auth/admin-login` | Admin login (returns JWT) |
| GET  | `/api/auth/me` | Get own profile + wallet |
| GET  | `/api/wallet` | Get wallet balances |
| GET  | `/api/wallet/transactions` | Transaction history |
| POST | `/api/deposits` | Submit deposit request |
| GET  | `/api/deposits` | Own deposit history |
| POST | `/api/withdrawals` | Request withdrawal (checks wager) |
| GET  | `/api/withdrawals` | Own withdrawal history |
| POST | `/api/games/session` | Record game bet/win |
| GET  | `/api/games/wager-progress` | Wager progress % |
| GET  | `/api/referrals/link` | Get referral link |
| GET  | `/api/referrals/stats` | Referral stats + earnings |

### Admin-Only (require Bearer JWT from admin-login)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET  | `/api/admin/dashboard` | Platform stats |
| GET  | `/api/admin/users` | List users (filter/search) |
| GET  | `/api/admin/users/:id` | User detail + full history |
| PATCH | `/api/admin/users/:id` | Update user |
| POST | `/api/admin/users/:id/block` | Block user |
| POST | `/api/admin/users/:id/unblock` | Unblock user |
| GET  | `/api/admin/deposits` | List deposits |
| POST | `/api/admin/deposits/:id/approve` | Approve + credit wallet |
| POST | `/api/admin/deposits/:id/reject` | Reject deposit |
| GET  | `/api/admin/withdrawals` | List withdrawals |
| POST | `/api/admin/withdrawals/:id/approve` | Approve + debit wallet |
| POST | `/api/admin/withdrawals/:id/reject` | Reject withdrawal |
| GET  | `/api/admin/wallets/:userId` | View user wallet |
| POST | `/api/admin/wallets/:userId/adjust` | Manual balance adjust |
| POST | `/api/admin/wallets/:userId/bonus` | Apply bonus |
| POST | `/api/admin/wallets/:userId/reset-wager` | Reset wager requirement |
| GET  | `/api/admin/referrals` | All referrals |
| GET  | `/api/admin/referrals/earnings` | All earnings |
| GET  | `/api/admin/games` | List games |
| POST | `/api/admin/games` | Add game |
| PATCH | `/api/admin/games/:id` | Update game |
| GET  | `/api/admin/settings` | Get settings |
| PATCH | `/api/admin/settings` | Update settings |
| GET  | `/api/admin/logs` | Audit logs |

---

## ☁️ Deploy to Coolify (Production)

1. Push this folder to a **GitHub/GitLab repo**
2. In Coolify → New Service → Select your repo
3. Build pack: **Nixpacks** (auto-detected)
4. Set all environment variables from `.env.example` in Coolify dashboard
5. **Port:** `3000`
6. Use the **same Supabase project** as local (same `.env` keys)
7. Deploy!

> ✅ No Dockerfile needed — Nixpacks handles everything automatically.

---

## 💰 How the Wallet System Works

```
User Registers → Wallet auto-created (0 balance)
       ↓
User submits Deposit → Admin approves → Balance credited
       ↓
(Optional) Welcome Bonus applied → wagering_required set (bonus × 10x)
       ↓
User plays games → wagering_completed increases with each bet
       ↓
User requests Withdrawal → System checks:
  ✅ wagering_completed >= wagering_required → ALLOWED
  ❌ wagering_completed < wagering_required  → BLOCKED
       ↓
Admin approves withdrawal → Balance deducted
```

---

## 🤝 Referral System Flow

```
User A shares referral link → User B registers with ?ref=CODE
       ↓
Referral record created (status: pending)
       ↓
User B makes first deposit → Admin approves it
       ↓
Referral bonus (₨555 default) auto-credited to User A
Referral status → rewarded
```

---

## 📁 Project Structure

```
AVAITOR-backend/
├── server.js              ← Express app entry point
├── package.json
├── nixpacks.toml          ← Coolify build config
├── .env.example           ← Copy to .env
├── src/
│   ├── config/supabase.js ← DB client
│   ├── middleware/
│   │   ├── auth.js        ← User JWT guard
│   │   └── adminAuth.js   ← Admin JWT guard
│   ├── services/
│   │   ├── wallet.js      ← Atomic balance ops
│   │   ├── wager.js       ← Wagering logic
│   │   └── referral.js    ← Referral commissions
│   └── routes/
│       ├── auth.js / wallet.js / deposits.js
│       ├── withdrawals.js / games.js / referrals.js
│       └── admin/         ← All admin routes
├── admin/                 ← Admin Dashboard (HTML/CSS/JS)
│   ├── index.html         ← Login
│   ├── dashboard.html     ← Main stats
│   ├── users.html         ← User management
│   ├── deposits.html      ← Deposit management
│   ├── withdrawals.html   ← Withdrawal management
│   ├── wallet.html        ← Fund management
│   ├── referrals.html     ← Referral tracking
│   ├── games.html         ← Game catalog
│   ├── settings.html      ← Platform config
│   └── logs.html          ← Audit trail
└── sql/
    ├── 01_schema.sql      ← All tables + triggers
    ├── 02_rls.sql         ← Row Level Security
    ├── 03_functions.sql   ← DB functions
    └── 04_seed.sql        ← Default data
```
