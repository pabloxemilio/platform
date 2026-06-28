# Deploying AVAITOR on Coolify (Nixpacks)

The **entire platform runs as ONE service / ONE process / ONE port** — API, admin
panel, both game frontends, and both game servers (Aviator + Chicken Road) all
start together from `node server.js`. You do **not** run anything separately.

## What runs where (all in this one repo, one process)
| Part | Path | Served at |
|------|------|-----------|
| REST API | `src/routes/**` | `/api/*` |
| Admin panel | `admin/` | `/admin` |
| Player frontend | `public/` | `/` |
| **Aviator** server | `src/game/aviator.js` | WebSocket `…/api/game/websocket` |
| **Aviator** client | `public/aviator/` | `/aviator/` |
| **Chicken Road** server | `src/game/chicken.js` | socket.io `…/io/` |
| **Chicken Road** client | `public/chicken2.html` + `public/static/` | `/chicken2.html` |

Both game WebSockets share the **same HTTP port** as the API, so the single
Coolify proxy handles everything — no extra ports, no extra services.

## Steps
1. **Push this repo to Git** (GitHub/GitLab). `.env` is gitignored — good.
2. In Coolify: **New Resource → Application → your repo**.
3. Build pack: **Nixpacks** (auto-detected via `nixpacks.toml`).
4. **Port:** `3000` (the app reads `process.env.PORT`; Coolify injects it).
5. **Environment variables** (Coolify → Environment) — copy from `.env.example`:
   - `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
   - `JWT_SECRET` (long random string)
   - `ADMIN_EMAIL`, `ADMIN_PASSWORD`
   - `NODE_ENV=production`
   - `CORS_ORIGIN=https://your-domain.com`
   - Leave `PORT` unset (Coolify provides it).
6. **Health check path:** `/health` (returns `{status:"ok"}`).
7. **Deploy.** Boot log should show:
   ```
   🎮 Aviator game server attached at /api/game/websocket
   🐔 ChickenRoad game server attached at /io/
   🚀 AVAITOR Casino API running on port <PORT>
   ```

## WebSockets
Coolify's Traefik proxy upgrades WebSocket connections automatically on the same
domain/port — no special config needed. Both games connect through it.

## Database & storage (Supabase — already set up)
The app points at your existing Supabase project. Tables and the `assets` storage
bucket are already created. For a **fresh** Supabase project, run `sql/01` …
`sql/10` in order in the Supabase SQL editor, then create a public Storage bucket
named `assets`.

## After first deploy
- Admin panel: `https://your-domain.com/admin` → log in with `ADMIN_EMAIL`/`ADMIN_PASSWORD`.
- Set the global **Win Ratio** and **Max Win Per Round** under Admin → Settings.
