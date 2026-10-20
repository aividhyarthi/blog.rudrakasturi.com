// For the weekly schedule: `node src/cli.js digest` sends this week's digest to all active subscribers (once per day-key).
import { config } from './config.js';
import * as store from './db.js';
import { sendMail } from './mail.js';
import { loadItems, buildDigest, issueKey } from './digest.js';

if (process.argv[2] !== 'digest') { console.error('usage: node src/cli.js digest'); process.exit(1); }
const db = store.makePool(config.databaseUrl);
await store.init(db);
const items = await loadItems();
const issue = issueKey();
await store.recordIssue(db, issue, items[0].title);
let sent = 0, skipped = 0;
for (const s of await store.listByStatus(db, 'active')) {
  if (await store.alreadySent(db, issue, s.id)) { skipped++; continue; }
  const unsubUrl = `${config.publicUrl}/unsubscribe?t=${s.token}`;
  const d = buildDigest(items, unsubUrl);
  await sendMail({ to: s.email, subject: d.subject, html: d.html, text: d.text, unsubUrl });
  await store.recordSent(db, issue, s.id);
  sent++;
}
console.log(`digest ${issue}: sent ${sent}, skipped ${skipped}`);
await db.end();
