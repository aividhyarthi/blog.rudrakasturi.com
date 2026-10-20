import http from 'node:http';
import assert from 'node:assert/strict';
import { newDb } from 'pg-mem';
process.env.ADMIN_TOKEN = 'secret'; process.env.PUBLIC_URL = 'http://localhost:0';
const { createApp } = await import('../src/server.js');
const store = await import('../src/db.js');
const { parseRss, pickItems } = await import('../src/digest.js');

const { Pool } = newDb().adapters.createPg();
const db = new Pool(); await store.init(db);
const outbox = [];
const items = pickItems(parseRss(`<rss><channel>${[1,2,3,4,5,6,7].map((n) => `<item><title>Story ${n} &amp; more</title><link>https://blog.rudrakasturi.com/story-${n}/</link><description>Summary ${n}</description><category>AEO</category><pubDate>${new Date().toUTCString()}</pubDate></item>`).join('')}</channel></rss>`));
assert.equal(items.length, 7);
const app = createApp(db, { sendMail: async (m) => { outbox.push(m); }, loadItems: async () => items });
const srv = http.createServer(app).listen(0); const base = `http://localhost:${srv.address().port}`;
const post = (p, body, headers = {}) => fetch(base + p, { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body) });
const adm = { Authorization: 'Bearer secret' };

// sign-up -> confirm email -> confirm
let r = await post('/subscribe', { email: 'New@Example.com', name: 'New' }, { Accept: 'application/json' });
assert.equal(r.status, 200); assert.equal(outbox.length, 1);
const token = outbox[0].html.match(/confirm\?t=([a-f0-9]+)/)[1];
assert.equal((await store.getByEmail(db, 'new@example.com')).status, 'pending');
r = await fetch(`${base}/confirm?t=${token}`); assert.equal(r.status, 200);
assert.equal((await store.getByEmail(db, 'new@example.com')).status, 'active');
// invalid email, honeypot, repeat sign-up of active address sends nothing
assert.equal((await post('/subscribe', { email: 'nope' })).status, 400);
await post('/subscribe', { email: 'bot@example.com', company: 'x' }); assert.equal(outbox.length, 1);
await post('/subscribe', { email: 'new@example.com' }); assert.equal(outbox.length, 1);

// admin needs the password
assert.equal((await fetch(`${base}/admin/api/stats`)).status, 401);
// import: 2 active, 1 to reconfirm, repeats and bad rows are handled
r = await post('/admin/api/import', { csv: '﻿Email,Name,Plan\na@x.com,"A, B",Free\nb@x.com,,\nbad,,\nnew@example.com,,', status: 'active' }, adm);
assert.deepEqual(await r.json(), { added: 2, skipped: 1, existing: 1 });
await post('/admin/api/import', { csv: 'c@x.com', status: 'reconfirm' }, adm);
r = await post('/admin/api/send-confirmations', {}, adm); assert.equal((await r.json()).sent, 1);
r = await post('/admin/api/send-confirmations', {}, adm); assert.equal((await r.json()).sent, 0);

// unsubscribe (one-click POST) then re-import does not revive
const b = await store.getByEmail(db, 'b@x.com');
assert.equal((await fetch(`${base}/unsubscribe?t=${b.token}`)).status, 200);
assert.equal((await fetch(`${base}/unsubscribe?t=${b.token}`, { method: 'POST' })).status, 200);
assert.equal((await store.getByEmail(db, 'b@x.com')).status, 'unsubscribed');
await post('/admin/api/import', { csv: 'b@x.com', status: 'active' }, adm);
assert.equal((await store.getByEmail(db, 'b@x.com')).status, 'unsubscribed');
assert.equal((await post('/confirm?t=' + b.token, {})).status, 404); // only GET

// digest: preview, test send, full send once only
outbox.length = 0;
r = await fetch(`${base}/admin/api/digest-preview`, { headers: adm }); assert.ok((await r.text()).includes('Story 1 &amp; more'));
r = await post('/admin/api/digest-send', { to: 'me@example.com' }, adm); assert.equal((await r.json()).sent, 1);
r = await post('/admin/api/digest-send', { all: true }, adm); const first = await r.json();
assert.equal(first.sent, 2); // new@ and a@ are active
r = await post('/admin/api/digest-send', { all: true }, adm); assert.deepEqual(await r.json(), { sent: 0, skipped: 2 });
assert.ok(outbox.every((m) => m.unsubUrl));
console.log('all checks passed');
srv.close(); process.exit(0);
