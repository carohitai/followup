import { redirectUri, origin } from '../../lib/auth.js';

export default async function handler(req, res) {
  const present = (name) => Boolean(process.env[name] && String(process.env[name]).length > 0);

  res.status(200).json({
    env: {
      MICROSOFT_CLIENT_ID: present('MICROSOFT_CLIENT_ID'),
      MICROSOFT_CLIENT_SECRET: present('MICROSOFT_CLIENT_SECRET'),
      MICROSOFT_TENANT_ID: present('MICROSOFT_TENANT_ID'),
      SESSION_SECRET: present('SESSION_SECRET'),
      UPSTASH_REDIS_REST_URL: present('UPSTASH_REDIS_REST_URL'),
      UPSTASH_REDIS_REST_TOKEN: present('UPSTASH_REDIS_REST_TOKEN'),
      ALLOWED_EMAIL_DOMAINS: present('ALLOWED_EMAIL_DOMAINS'),
      AUTH_REDIRECT_URI: present('AUTH_REDIRECT_URI'),
      VERCEL_ENV: process.env.VERCEL_ENV || null
    },
    tenantId: process.env.MICROSOFT_TENANT_ID || '(default: common)',
    origin: origin(req),
    redirectUri: (() => { try { return redirectUri(req); } catch (e) { return `error: ${e.message}`; } })()
  });
}
