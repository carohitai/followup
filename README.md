# followup
Daily followup of vendors clients, staff.

## House — Vendor Follow-up Tracker

The tracker app is `index.html`. Access is gated by Microsoft SSO; only accounts whose email domain is in `ALLOWED_EMAIL_DOMAINS` may sign in. The page expects a `window.storage` object for persistence; the page injects one that routes:

- `shared: true` keys (tasks, vendors, seed flag) → `/api/kv` (Upstash Redis, shared across all signed-in users)
- `shared: false` keys (current-user preference) → `localStorage` (per browser)

### Environment variables (Vercel → Settings → Environment Variables)

| Name | Required | Value |
| --- | --- | --- |
| `UPSTASH_REDIS_REST_URL` | yes | auto-injected by the Upstash Marketplace integration |
| `UPSTASH_REDIS_REST_TOKEN` | yes | auto-injected by the Upstash Marketplace integration |
| `MICROSOFT_CLIENT_ID` | yes | Application (client) ID from Entra App registration |
| `MICROSOFT_CLIENT_SECRET` | yes | Client secret value from Entra App registration |
| `MICROSOFT_TENANT_ID` | yes | Directory (tenant) ID (use `common` only if the app is multi-tenant) |
| `SESSION_SECRET` | yes | `openssl rand -hex 32` output; used to sign session JWTs |
| `ALLOWED_EMAIL_DOMAINS` | no | Comma-separated list. Default: `kolteassociates.in` |
| `AUTH_REDIRECT_URI` | no | Override the callback URL if auto-detect misbehaves (e.g. `https://followup-tau.vercel.app/api/auth/callback`) |

### Microsoft Entra ID app registration

1. https://entra.microsoft.com → **Identity → Applications → App registrations → New registration**
2. Name: `followup`. Supported account types: **Accounts in this organizational directory only** (single tenant).
3. Redirect URI: **Web** → `https://followup-tau.vercel.app/api/auth/callback`
4. After creation, copy **Application (client) ID** and **Directory (tenant) ID** into Vercel env vars.
5. **Certificates & secrets → New client secret** → copy the Value (shown once) into `MICROSOFT_CLIENT_SECRET`.

### Deploying

1. Link the repo in Vercel (already done for `https://followup-tau.vercel.app`).
2. Install **Upstash for Redis** from the Vercel Marketplace, create a Regional Free Redis DB, connect it to the `followup` project.
3. Set the remaining env vars above, then **Redeploy** (uncheck "Use existing Build Cache") so `jose` and `@upstash/redis` install.
4. Open `https://followup-tau.vercel.app` — you'll be shown a "Sign in with Microsoft" screen. Sign in with an `@kolteassociates.in` account. Any other domain gets a 403 page.
