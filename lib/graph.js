import { tenantId, clientId, clientSecret } from './auth.js';

let appTokenCache = { token: null, expiresAt: 0 };

async function getAppAccessToken() {
  const now = Date.now();
  if (appTokenCache.token && appTokenCache.expiresAt > now + 60_000) {
    return appTokenCache.token;
  }
  const body = new URLSearchParams({
    client_id: clientId(),
    client_secret: clientSecret(),
    grant_type: 'client_credentials',
    scope: 'https://graph.microsoft.com/.default'
  });
  const r = await fetch(`https://login.microsoftonline.com/${tenantId()}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString()
  });
  if (!r.ok) {
    const text = await r.text();
    throw new Error(`Graph token error: ${r.status} ${text}`);
  }
  const data = await r.json();
  appTokenCache = {
    token: data.access_token,
    expiresAt: now + (data.expires_in || 3600) * 1000
  };
  return data.access_token;
}

export async function listDirectoryUsers() {
  const token = await getAppAccessToken();
  const out = [];
  let url = 'https://graph.microsoft.com/v1.0/users?$select=id,displayName,givenName,surname,mail,userPrincipalName,accountEnabled&$filter=accountEnabled eq true&$top=999';
  while (url) {
    const r = await fetch(url, {
      headers: { Authorization: `Bearer ${token}`, ConsistencyLevel: 'eventual' }
    });
    if (!r.ok) {
      const text = await r.text();
      throw new Error(`Graph users error: ${r.status} ${text}`);
    }
    const data = await r.json();
    for (const u of data.value || []) {
      out.push({
        id: u.id,
        displayName: u.displayName || '',
        firstName: u.givenName || '',
        lastName: u.surname || '',
        email: u.mail || u.userPrincipalName || ''
      });
    }
    url = data['@odata.nextLink'] || null;
  }
  out.sort((a, b) => a.displayName.localeCompare(b.displayName));
  return out;
}
