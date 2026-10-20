import http from 'node:http';
import crypto from 'node:crypto';
import { config } from './config.js';
import * as store from './db.js';
import { sendMail } from './mail.js';
import { confirmEmail, pageHtml, esc } from './templates.js';
import { loadItems, buildDigest, issueKey } from './digest.js';
import { parseSubscribers } from './csv.js';
import { adminHtml } from './admin.html.js';

const limiter = new Map(); // ip -> [timestamps]; 10 sign-ups per hour per address
const limited = (ip) => {
  const now = Date.now();
  const hits = (limiter.get(ip) || []).filter((t) => now - t < 3600e3);
  hits.push(now); limiter.set(ip, hits);
  return hits.length > 10;
};

const same = (a, b) => { const x = Buffer.from(a), y = Buffer.from(b); return x.length === y.length && crypto.timingSafeEqual(x, y); };

async function readBody(req) {
  const chunks = []; let size = 0;
  for await (const c of req) { size += c.length; if (size > 2e6) throw new Error('too large'); chunks.push(c); }
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) return {};
  if ((req.headers['content-type'] || '').includes('json')) return JSON.parse(raw);
  return Object.fromEntries(new URLSearchParams(raw));
}

export function createApp(db, deps = {}) {
  const mail = deps.sendMail || sendMail;
  const items = deps.loadItems || loadItems;
  const links = (s) => ({ confirmUrl: `${config.publicUrl}/confirm?t=${s.token}`, unsubUrl: `${config.publicUrl}/unsubscribe?t=${s.token}` });

  async function sendConfirm(s, reconfirm) {
    const { confirmUrl } = links(s);
    await mail({ to: s.email, ...confirmEmail({ name: s.name, confirmUrl, reconfirm }) });
    await store.markConfirmSent(db, s.id);
  }

  async function sendDigestTo(rows, its, issue) {
    let sent = 0, skipped = 0;
    for (const s of rows) {
      // Claim the delivery first so two overlapping sends can never both email the same person.
      if (issue && !(await store.claimDelivery(db, issue, s.id))) { skipped++; continue; }
      const { unsubUrl } = links(s);
      const d = buildDigest(its, unsubUrl);
      try {
        await mail({ to: s.email, subject: d.subject, html: d.html, text: d.text, unsubUrl });
      } catch (err) {
        if (issue) await store.releaseDelivery(db, issue, s.id); // failed: allow a retry
        throw err;
      }
      sent++;
    }
    return { sent, skipped };
  }

  async function admin(req, res, path, send) {
    const auth = req.headers.authorization || '';
    if (!config.adminToken || !same(auth, `Bearer ${config.adminToken}`)) return send(401, { error: 'unauthorised' });
    if (path === 'stats' && req.method === 'GET') return send(200, await store.stats(db));
    if (path === 'import' && req.method === 'POST') {
      const b = await readBody(req);
      const status = b.status === 'active' ? 'active' : 'reconfirm';
      return send(200, await store.importRows(db, parseSubscribers(b.csv || ''), status));
    }
    if (path === 'send-confirmations' && req.method === 'POST') {
      let sent = 0;
      for (const s of await store.listByStatus(db, 'reconfirm')) {
        if (s.last_confirm_sent_at && Date.now() - new Date(s.last_confirm_sent_at).getTime() < 7 * 864e5) continue;
        await sendConfirm(s, true); sent++;
      }
      return send(200, { sent });
    }
    if (path === 'digest-preview' && req.method === 'GET') {
      return send(200, buildDigest(await items(), `${config.publicUrl}/unsubscribe?t=preview`).html, 'text/html; charset=utf-8');
    }
    if (path === 'digest-send' && req.method === 'POST') {
      const b = await readBody(req);
      const its = await items();
      if (b.to) {
        const to = store.normEmail(b.to);
        if (!store.validEmail(to)) return send(400, { error: 'Enter a valid email for the test.' });
        const sub = await store.getByEmail(db, to);
        return send(200, await sendDigestTo([sub || { id: 0, email: to, token: 'test' }], its, null));
      }
      if (!b.all) return send(400, { error: 'Say who to send to.' });
      const issue = issueKey();
      await store.recordIssue(db, issue, its[0].title);
      return send(200, await sendDigestTo(await store.listByStatus(db, 'active'), its, issue));
    }
    return send(404, { error: 'not found' });
  }

  return async function handler(req, res) {
    const url = new URL(req.url, 'http://x');
    const origin = req.headers.origin;
    const cors = origin && config.allowedOrigins.includes(origin) ? { 'Access-Control-Allow-Origin': origin, Vary: 'Origin', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Methods': 'POST, OPTIONS' } : { Vary: 'Origin' };
    const send = (code, body, type) => {
      const isJson = typeof body === 'object';
      res.writeHead(code, { 'Content-Type': type || (isJson ? 'application/json' : 'text/html; charset=utf-8'), 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', ...cors });
      res.end(isJson ? JSON.stringify(body) : body);
    };
    try {
      if (req.method === 'OPTIONS') return send(204, '');
      if (url.pathname === '/healthz') return send(200, { ok: true });
      if (url.pathname === '/admin' && req.method === 'GET') return send(200, adminHtml);
      if (url.pathname.startsWith('/admin/api/')) return await admin(req, res, url.pathname.slice('/admin/api/'.length), send);

      if (url.pathname === '/subscribe' && req.method === 'POST') {
        const wantsJson = (req.headers.accept || '').includes('json') || (req.headers['content-type'] || '').includes('json');
        const ok = (code = 200) => wantsJson
          ? send(code, { ok: true, success: true, message: 'Check your inbox to confirm your email.' })
          : send(code, pageHtml({ title: 'Check your inbox', message: 'We sent you an email. Click the button in it to confirm your subscription.' }));
        const ip = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
        if (limited(ip)) return send(429, wantsJson ? { ok: false, success: false, error: 'Too many attempts. Try again later.' } : pageHtml({ title: 'Too many attempts', message: 'Please try again in an hour.' }));
        const b = await readBody(req);
        if (b.company || b._honey) return ok(); // hidden field: only bots fill it in
        const email = store.normEmail(b.email);
        if (!store.validEmail(email)) return send(400, wantsJson ? { ok: false, success: false, error: 'Please enter a valid email address.' } : pageHtml({ title: 'Check the address', message: 'That email address does not look right. Go back and try again.' }));
        const { row, sendConfirm: should } = await store.addSignup(db, { email, name: String(b.name || '').slice(0, 80), source: String(b.source || 'site').slice(0, 40) });
        if (should) await sendConfirm(row, false);
        return ok(); // same answer whether or not the address was already on the list
      }

      if (url.pathname === '/confirm' && req.method === 'GET') {
        const s = await store.confirm(db, url.searchParams.get('t'));
        if (!s) return send(404, pageHtml({ title: 'Link not recognised', message: 'This confirmation link is not valid. Try signing up again on the blog.' }));
        if (s.refused) return send(200, pageHtml({ title: 'You are unsubscribed', message: 'You opted out earlier. To rejoin, sign up again from the blog.' }));
        return send(200, pageHtml({ title: 'You are subscribed', message: 'Thank you. The weekly digest on SEO, AEO and AI search will reach you once a week.' }));
      }

      if (url.pathname === '/unsubscribe') {
        const token = url.searchParams.get('t');
        if (req.method === 'POST') {
          const s = await store.unsubscribe(db, token);
          // One-click unsubscribe from mail apps posts here and expects a plain 200.
          return send(s ? 200 : 404, pageHtml({ title: s ? 'You are unsubscribed' : 'Link not recognised', message: s ? 'You will not receive any more emails from this list.' : 'This link is not valid.' }));
        }
        if (req.method === 'GET') {
          const s = token ? await store.getByToken(db, token) : null;
          if (!s) return send(404, pageHtml({ title: 'Link not recognised', message: 'This unsubscribe link is not valid.' }));
          return send(200, pageHtml({ title: 'Unsubscribe', message: `Stop sending the weekly digest to ${s.email}?`, extra: `<form method="post" action="/unsubscribe?t=${esc(token)}"><button style="background:#2340f5;color:#fff;border:0;border-radius:9px;padding:13px 24px;font-weight:700;font-size:16px;cursor:pointer">Yes, unsubscribe me</button></form>` }));
        }
      }
      return send(404, pageHtml({ title: 'Not found', message: 'There is nothing at this address.' }));
    } catch (err) {
      console.error(err);
      return send(500, { error: 'Something went wrong.' });
    }
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  if (!config.databaseUrl) { console.error('DATABASE_URL is not set'); process.exit(1); }
  const db = store.makePool(config.databaseUrl);
  await store.init(db);
  http.createServer(createApp(db)).listen(config.port, () => console.log(`newsletter service on :${config.port}`));
}
