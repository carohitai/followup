import {
  tenantId, clientId, redirectUri,
  setCookie, randomString, pkceChallenge
} from '../../lib/auth.js';

export default async function handler(req, res) {
  try {
    const state = randomString(16);
    const verifier = randomString(32);
    const challenge = await pkceChallenge(verifier);

    setCookie(res, 'auth_state', state, { maxAge: 600 });
    setCookie(res, 'auth_pkce', verifier, { maxAge: 600 });

    const params = new URLSearchParams({
      client_id: clientId(),
      response_type: 'code',
      redirect_uri: redirectUri(req),
      response_mode: 'query',
      scope: 'openid email profile offline_access',
      state,
      code_challenge: challenge,
      code_challenge_method: 'S256',
      prompt: 'select_account'
    });

    const url = `https://login.microsoftonline.com/${tenantId()}/oauth2/v2.0/authorize?${params}`;
    res.writeHead(302, { Location: url });
    res.end();
  } catch (err) {
    console.error('login error', err);
    res.status(500).json({ error: 'login failed', detail: String(err && err.message || err) });
  }
}
