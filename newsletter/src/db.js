import crypto from 'node:crypto';
import pg from 'pg';

export function makePool(url) {
  return new pg.Pool({ connectionString: url, ssl: /localhost|127\.0\.0\.1|railway\.internal/.test(url) ? false : { rejectUnauthorized: false } });
}

export async function init(db) {
  await db.query(`CREATE TABLE IF NOT EXISTS subscribers (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    status TEXT NOT NULL,
    token TEXT NOT NULL,
    source TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    confirmed_at TIMESTAMPTZ,
    unsubscribed_at TIMESTAMPTZ,
    last_confirm_sent_at TIMESTAMPTZ
  )`);
  await db.query(`CREATE TABLE IF NOT EXISTS issues (
    issue TEXT PRIMARY KEY,
    subject TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
  )`);
  await db.query(`CREATE TABLE IF NOT EXISTS deliveries (
    issue TEXT NOT NULL,
    subscriber_id INTEGER NOT NULL,
    sent_at TIMESTAMPTZ DEFAULT now(),
    PRIMARY KEY (issue, subscriber_id)
  )`);
}

export const newToken = () => crypto.randomBytes(24).toString('hex');
export const normEmail = (e) => String(e || '').trim().toLowerCase();
export const validEmail = (e) => e.length <= 254 && /^[^\s@,;<>()]+@[^\s@,;<>()]+\.[^\s@,;<>()]{2,}$/.test(e);

export const getByEmail = async (db, email) => (await db.query('SELECT * FROM subscribers WHERE email = $1', [email])).rows[0];
export const getByToken = async (db, token) => (await db.query('SELECT * FROM subscribers WHERE token = $1', [String(token || '')])).rows[0];

// statuses: pending (self sign-up, waiting for the confirm click), reconfirm (imported, asked to confirm),
// active (confirmed), unsubscribed, bounced
export async function addSignup(db, { email, name, source }) {
  const cur = await getByEmail(db, email);
  if (!cur) {
    const row = (await db.query(
      `INSERT INTO subscribers (email, name, status, token, source) VALUES ($1,$2,'pending',$3,$4) RETURNING *`,
      [email, name || null, newToken(), source || 'site'])).rows[0];
    return { row, sendConfirm: true };
  }
  if (cur.status === 'active') return { row: cur, sendConfirm: false };
  const recent = cur.last_confirm_sent_at && Date.now() - new Date(cur.last_confirm_sent_at).getTime() < 10 * 60 * 1000;
  if (['unsubscribed', 'bounced'].includes(cur.status)) {
    const row = (await db.query(`UPDATE subscribers SET status='pending', unsubscribed_at=NULL WHERE id=$1 RETURNING *`, [cur.id])).rows[0];
    return { row, sendConfirm: true };
  }
  return { row: cur, sendConfirm: !recent };
}

export const markConfirmSent = (db, id) => db.query('UPDATE subscribers SET last_confirm_sent_at = now() WHERE id = $1', [id]);

export async function confirm(db, token) {
  const s = await getByToken(db, token);
  if (!s) return null;
  if (s.status === 'unsubscribed' || s.status === 'bounced') return { ...s, refused: true };
  await db.query(`UPDATE subscribers SET status='active', confirmed_at = COALESCE(confirmed_at, now()) WHERE id=$1`, [s.id]);
  return { ...s, status: 'active' };
}

export async function unsubscribe(db, token) {
  const s = await getByToken(db, token);
  if (!s) return null;
  await db.query(`UPDATE subscribers SET status='unsubscribed', unsubscribed_at = now() WHERE id=$1`, [s.id]);
  return s;
}

// Imports never revive someone who unsubscribed or bounced.
export async function importRows(db, rows, status) {
  let added = 0, skipped = 0, existing = 0;
  for (const r of rows) {
    const email = normEmail(r.email);
    if (!validEmail(email)) { skipped++; continue; }
    const cur = await getByEmail(db, email);
    if (cur) { existing++; continue; }
    await db.query(
      `INSERT INTO subscribers (email, name, status, token, source, confirmed_at) VALUES ($1,$2,$3,$4,'import', $5)`,
      [email, r.name || null, status, newToken(), status === 'active' ? new Date() : null]);
    added++;
  }
  return { added, skipped, existing };
}

export async function stats(db) {
  const rows = (await db.query('SELECT status, COUNT(*)::int AS n FROM subscribers GROUP BY status')).rows;
  const out = { active: 0, pending: 0, reconfirm: 0, unsubscribed: 0, bounced: 0 };
  for (const r of rows) out[r.status] = r.n;
  return out;
}

export const listByStatus = async (db, status) => (await db.query('SELECT * FROM subscribers WHERE status = $1 ORDER BY id', [status])).rows;

export async function alreadySent(db, issue, id) {
  return (await db.query('SELECT 1 FROM deliveries WHERE issue=$1 AND subscriber_id=$2', [issue, id])).rowCount > 0;
}
export const recordSent = (db, issue, id) => db.query('INSERT INTO deliveries (issue, subscriber_id) VALUES ($1,$2) ON CONFLICT DO NOTHING', [issue, id]);
export const recordIssue = (db, issue, subject) => db.query('INSERT INTO issues (issue, subject) VALUES ($1,$2) ON CONFLICT DO NOTHING', [issue, subject]);
