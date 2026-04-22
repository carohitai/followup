import { readSession } from '../../lib/auth.js';

export default async function handler(req, res) {
  const session = await readSession(req);
  if (!session) return res.status(401).json({ error: 'not authenticated' });
  res.status(200).json({ email: session.email, name: session.name });
}
