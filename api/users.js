import { Redis } from '@upstash/redis';
import { readSession } from '../lib/auth.js';
import { listDirectoryUsers } from '../lib/graph.js';

const redis = Redis.fromEnv();
const CACHE_KEY = 'graph:directory-users';
const CACHE_TTL_SECONDS = 600;

export default async function handler(req, res) {
  try {
    const session = await readSession(req);
    if (!session) return res.status(401).json({ error: 'not authenticated' });

    if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      return res.status(405).json({ error: 'method not allowed' });
    }

    const refresh = req.query && req.query.refresh === '1';
    if (!refresh) {
      const cached = await redis.get(CACHE_KEY);
      if (cached) return res.status(200).json({ users: cached, cached: true });
    }

    const users = await listDirectoryUsers();
    await redis.set(CACHE_KEY, users, { ex: CACHE_TTL_SECONDS });
    return res.status(200).json({ users, cached: false });
  } catch (err) {
    console.error('api/users error', err);
    return res.status(500).json({ error: 'failed to list users', detail: String(err && err.message || err) });
  }
}
