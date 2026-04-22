import {
  tenantId, clientId, clientSecret, redirectUri, origin,
  parseCookies, clearCookie, setSessionCookie, createSession,
  verifyIdToken, isAllowedEmail, allowedDomains
} from '../../lib/auth.js';

export default async function handler(req, res) {
  try {
    const url = new URL(req.url, origin(req));
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    const err = url.searchParams.get('error');
    if (err) {
      return sendError(res, 400, `Microsoft returned error: ${err} — ${url.searchParams.get('error_description') || ''}`);
    }
    if (!code || !state) return sendError(res, 400, 'missing code or state');

    const cookies = parseCookies(req);
    if (!cookies.auth_state || cookies.auth_state !== state) {
      return sendError(res, 400, 'state mismatch');
    }
    const verifier = cookies.auth_pkce;
    if (!verifier) return sendError(res, 400, 'missing pkce verifier');

    const body = new URLSearchParams({
      client_id: clientId(),
      client_secret: clientSecret(),
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri(req),
      code_verifier: verifier,
      scope: 'openid email profile offline_access'
    });

    const tokenRes = await fetch(`https://login.microsoftonline.com/${tenantId()}/oauth2/v2.0/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    });
    if (!tokenRes.ok) {
      const text = await tokenRes.text();
      return sendError(res, 502, `token exchange failed: ${tokenRes.status} ${text}`);
    }
    const tokens = await tokenRes.json();
    if (!tokens.id_token) return sendError(res, 502, 'no id_token in response');

    const claims = await verifyIdToken(tokens.id_token);
    const email = (claims.email || claims.preferred_username || claims.upn || '').toLowerCase();
    const name = claims.name || email;

    if (!isAllowedEmail(email)) {
      return sendError(res, 403, `Sign-in denied. Only accounts on ${allowedDomains().join(', ')} may access this app. (Your account: ${email || 'unknown'})`);
    }

    const sessionJwt = await createSession({ sub: claims.sub, email, name });
    clearCookie(res, 'auth_state');
    clearCookie(res, 'auth_pkce');
    setSessionCookie(res, sessionJwt);

    res.writeHead(302, { Location: '/' });
    res.end();
  } catch (err) {
    console.error('callback error', err);
    sendError(res, 500, `callback failed: ${err && err.message || err}`);
  }
}

function sendError(res, status, message) {
  res.status(status).setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`<!doctype html><meta charset="utf-8"><title>Sign-in error</title>
<body style="font-family:sans-serif;padding:40px;max-width:640px;margin:auto;color:#2a1f14;background:#f7f3ec;">
<h1>Sign-in error</h1>
<p style="color:#9a2127;">${escapeHtml(message)}</p>
<p><a href="/">Back to app</a></p>
</body>`);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
