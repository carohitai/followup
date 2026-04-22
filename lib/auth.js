import { SignJWT, jwtVerify, createRemoteJWKSet } from 'jose';
import { createHash, randomBytes } from 'node:crypto';

const ALLOWED_DOMAINS = (process.env.ALLOWED_EMAIL_DOMAINS || 'kolteassociates.in')
  .split(',').map(s => s.trim().toLowerCase()).filter(Boolean);

const SESSION_COOKIE = 'session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function secret() {
  const s = process.env.SESSION_SECRET;
  if (!s) throw new Error('SESSION_SECRET not set');
  return new TextEncoder().encode(s);
}

export function tenantId() {
  return process.env.MICROSOFT_TENANT_ID || 'common';
}

export function clientId() {
  const v = process.env.MICROSOFT_CLIENT_ID;
  if (!v) throw new Error('MICROSOFT_CLIENT_ID not set');
  return v;
}

export function clientSecret() {
  const v = process.env.MICROSOFT_CLIENT_SECRET;
  if (!v) throw new Error('MICROSOFT_CLIENT_SECRET not set');
  return v;
}

export function redirectUri(req) {
  const explicit = process.env.AUTH_REDIRECT_URI;
  if (explicit) return explicit;
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  return `${proto}://${host}/api/auth/callback`;
}

export function origin(req) {
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  return `${proto}://${host}`;
}

export function parseCookies(req) {
  const header = req.headers.cookie || '';
  const out = {};
  for (const part of header.split(';')) {
    const i = part.indexOf('=');
    if (i < 0) continue;
    const k = part.slice(0, i).trim();
    const v = part.slice(i + 1).trim();
    if (k) out[k] = decodeURIComponent(v);
  }
  return out;
}

export function setCookie(res, name, value, opts = {}) {
  const parts = [`${name}=${encodeURIComponent(value)}`];
  parts.push(`Path=${opts.path || '/'}`);
  if (opts.maxAge !== undefined) parts.push(`Max-Age=${opts.maxAge}`);
  if (opts.httpOnly !== false) parts.push('HttpOnly');
  if (opts.secure !== false) parts.push('Secure');
  parts.push(`SameSite=${opts.sameSite || 'Lax'}`);
  const existing = res.getHeader('Set-Cookie');
  const header = parts.join('; ');
  if (!existing) res.setHeader('Set-Cookie', header);
  else if (Array.isArray(existing)) res.setHeader('Set-Cookie', [...existing, header]);
  else res.setHeader('Set-Cookie', [existing, header]);
}

export function clearCookie(res, name) {
  setCookie(res, name, '', { maxAge: 0 });
}

export async function createSession(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(secret());
}

export async function readSession(req) {
  const token = parseCookies(req)[SESSION_COOKIE];
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret());
    return payload;
  } catch {
    return null;
  }
}

export function setSessionCookie(res, token) {
  setCookie(res, SESSION_COOKIE, token, { maxAge: SESSION_MAX_AGE });
}

export function clearSessionCookie(res) {
  clearCookie(res, SESSION_COOKIE);
}

export function isAllowedEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const at = email.lastIndexOf('@');
  if (at < 0) return false;
  const domain = email.slice(at + 1).toLowerCase();
  return ALLOWED_DOMAINS.includes(domain);
}

export function allowedDomains() {
  return ALLOWED_DOMAINS.slice();
}

export function buildJwks() {
  const url = `https://login.microsoftonline.com/${tenantId()}/discovery/v2.0/keys`;
  return createRemoteJWKSet(new URL(url));
}

export async function verifyIdToken(idToken) {
  const jwks = buildJwks();
  const issuerTenant = tenantId();
  const { payload } = await jwtVerify(idToken, jwks, {
    audience: clientId(),
    issuer: issuerTenant === 'common'
      ? undefined
      : `https://login.microsoftonline.com/${issuerTenant}/v2.0`
  });
  return payload;
}

export function b64url(buf) {
  return Buffer.from(buf).toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function pkceChallenge(verifier) {
  return b64url(createHash('sha256').update(verifier).digest());
}

export function randomString(bytes = 32) {
  return b64url(randomBytes(bytes));
}
