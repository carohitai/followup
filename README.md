# followup
Daily followup of vendors clients, staff.

## House — Vendor Follow-up Tracker

The tracker app is `index.html`. It expects a `window.storage` object for persistence; the page injects one that routes:

- `shared: true` keys (tasks, vendors, seed flag) → `/api/kv` (Vercel KV, shared across all users)
- `shared: false` keys (current-user preference) → `localStorage` (per browser)

### Deploying to Vercel with KV (shared storage)

1. Push `main` to GitHub and link the repo in Vercel (already done for `https://followup-tau.vercel.app`).
2. In the Vercel project: **Storage → Create Database → KV** (or add an existing one) and click **Connect Project**. This auto-populates the env vars `KV_REST_API_URL`, `KV_REST_API_TOKEN`, `KV_REST_API_READ_ONLY_TOKEN`, `KV_URL` on all environments.
3. Redeploy (Vercel → Deployments → latest → **Redeploy**).
4. Open the site. The sync indicator should read "Synced · HH:MM" after the first edit. Data now persists server-side and syncs across users.
5. Disable Vercel Deployment Protection (**Settings → Deployment Protection → Vercel Authentication: Disabled**) if you want the site to be publicly viewable.

### Other share options

- GitHub Pages: `https://carohitai.github.io/followup/` (static only — save-data will fall back to "Storage unavailable" since there's no `/api/kv`).
- htmlpreview: `https://htmlpreview.github.io/?https://github.com/carohitai/followup/blob/main/index.html` (static preview only).
