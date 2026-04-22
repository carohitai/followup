import { Redis } from '@upstash/redis';
import { readSession } from '../lib/auth.js';

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  try {
    const session = await readSession(req);
    if (!session) return res.status(401).json({ error: 'not authenticated' });

    if (req.method === 'GET') {
      const key = req.query.key;
      if (!key || typeof key !== 'string') {
        return res.status(400).json({ error: 'missing key' });
      }
      const value = await redis.get(key);
      if (value === null || value === undefined) {
        return res.status(404).json({ error: 'not found' });
      }
      return res.status(200).json({ value });
    }

    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
      const { key, value } = body;
      if (!key || typeof key !== 'string' || typeof value !== 'string') {
        return res.status(400).json({ error: 'key and string value required' });
      }
      await redis.set(key, value);
      return res.status(200).json({ ok: true });
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'method not allowed' });
  } catch (err) {
    console.error('api/kv error', err);
    return res.status(500).json({ error: 'kv error', detail: String(err && err.message || err) });
  }
}
