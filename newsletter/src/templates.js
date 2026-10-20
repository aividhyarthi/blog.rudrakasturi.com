import { config } from './config.js';

const C = { ink: '#0b1030', text: '#1c2349', soft: '#4a5280', cobalt: '#2340f5', orange: '#ff5a1f', mint: '#6ee7c8', tint: '#f1f4ff', line: '#d9e0fb' };
const FONT = "Arial, Helvetica, sans-serif";
export const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function layout({ preheader = '', body, unsubUrl }) {
  const address = config.address ? `<br>${esc(config.address)}` : '';
  const unsub = unsubUrl ? `<a href="${esc(unsubUrl)}" style="color:#c9d0ff">Unsubscribe</a> · ` : '';
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>Rudra Kasturi</title></head>
<body style="margin:0;padding:0;background:${C.tint};font-family:${FONT};color:${C.text}">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.tint}"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden">
<tr><td style="padding:22px 32px;border-bottom:3px solid ${C.ink}">
  <a href="${config.siteUrl}/" style="text-decoration:none;font-size:22px;font-weight:800;color:${C.ink};letter-spacing:-0.5px">Rudra Kasturi <span style="background:${C.mint};padding:1px 7px;border-radius:5px;font-style:italic">Inc.</span></a>
</td></tr>
${body}
<tr><td style="background:${C.ink};padding:26px 32px;color:#c9d0ff;font-size:13px;line-height:1.6">
  <b style="color:#ffffff">Rudra Kasturi Inc.</b><br>Search. Strategy. AI. Growth. Revenue. Coach. Farmer.<br><br>
  ${unsub}<a href="${config.siteUrl}/" style="color:#c9d0ff">Read on the site</a> · <a href="mailto:rudra@rudrakasturi.com" style="color:#c9d0ff">rudra@rudrakasturi.com</a>${address}
</td></tr>
</table></td></tr></table></body></html>`;
}

const button = (href, label, bg = C.cobalt, fg = '#ffffff') =>
  `<a href="${esc(href)}" style="display:inline-block;background:${bg};color:${fg};font-weight:700;font-size:16px;text-decoration:none;padding:14px 26px;border-radius:9px">${esc(label)}</a>`;

export function confirmEmail({ name, confirmUrl, reconfirm }) {
  const hi = name && !/@/.test(name) && !/\d{4,}/.test(name) ? `Hi ${esc(name.split(' ')[0])},` : 'Hello,';
  const lead = reconfirm
    ? 'My blog has moved to a new home, and the email list moved with it. To keep receiving the weekly digest, please confirm your address.'
    : 'Please confirm your email address to receive the weekly digest on SEO, AEO and AI search.';
  const body = `<tr><td style="padding:34px 32px 30px">
  <h1 style="margin:0 0 14px;font-size:26px;line-height:1.2;color:${C.ink};letter-spacing:-0.5px">Confirm your subscription</h1>
  <p style="margin:0 0 12px;font-size:16px;line-height:1.6">${hi}</p>
  <p style="margin:0 0 22px;font-size:16px;line-height:1.6">${lead}</p>
  <p style="margin:0 0 22px">${button(confirmUrl, 'Confirm my email')}</p>
  <p style="margin:0;font-size:13px;line-height:1.6;color:${C.soft}">If you did not ask for this, ignore this email and nothing will be sent to you.</p>
</td></tr>`;
  const text = `${hi}\n\n${lead}\n\nConfirm: ${confirmUrl}\n\nIf you did not ask for this, ignore this email.`;
  return { subject: reconfirm ? 'Please confirm: Rudra Kasturi weekly digest' : 'Confirm your subscription to Rudra Kasturi', html: layout({ preheader: 'One click to confirm your email.', body }), text };
}

const topicTag = (t) => (t ? `<span style="font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:${C.orange}">${esc(t)}</span>` : '');

export function digestEmail({ items, unsubUrl, dateLabel, promos = {} }) {
  const [lead, ...rest] = items;
  const leadHtml = `<tr><td style="padding:28px 32px 8px">
  <p style="margin:0 0 10px;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:${C.cobalt}">This week${dateLabel ? ' · ' + esc(dateLabel) : ''}</p>
  <a href="${esc(lead.link)}"><img src="${esc(lead.image)}" width="536" alt="" style="display:block;width:100%;max-width:536px;height:auto;border-radius:10px;margin-bottom:16px"></a>
  <p style="margin:0 0 6px">${topicTag(lead.topic)}</p>
  <h1 style="margin:0 0 10px;font-size:27px;line-height:1.18;letter-spacing:-0.6px"><a href="${esc(lead.link)}" style="color:${C.ink};text-decoration:none">${esc(lead.title)}</a></h1>
  <p style="margin:0 0 16px;font-size:16px;line-height:1.6">${esc(lead.summary)}</p>
  <p style="margin:0 0 8px">${button(lead.link, 'Read the article')}</p>
</td></tr>`;
  const rows = rest.map((it) => `<tr><td style="padding:16px 32px;border-top:1px solid ${C.line}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
    <td width="150" valign="top" style="padding-right:16px"><a href="${esc(it.link)}"><img src="${esc(it.image)}" width="150" alt="" style="display:block;width:150px;height:auto;border-radius:8px"></a></td>
    <td valign="top">${topicTag(it.topic)}<h2 style="margin:4px 0 0;font-size:17px;line-height:1.28;letter-spacing:-0.2px"><a href="${esc(it.link)}" style="color:${C.ink};text-decoration:none">${esc(it.title)}</a></h2></td>
  </tr></table></td></tr>`).join('');
  const promo = `<tr><td style="padding:12px 32px 30px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
  <td width="50%" valign="top" style="padding-right:8px"><div style="background:${C.orange};border-radius:12px;padding:18px;color:#fff;font-size:14px;line-height:1.5"><b style="font-size:16px">${esc(promos.toolName || 'AIPageAudit')}</b><br>${esc(promos.toolBlurb || 'Check how your page reads to Google and AI answer engines.')}<br><br><a href="${esc(promos.toolUrl || 'https://www.aipageaudit.com')}" style="color:#fff;font-weight:700">Try it free &rarr;</a></div></td>
  <td width="50%" valign="top" style="padding-left:8px"><div style="background:${C.cobalt};border-radius:12px;padding:18px;color:#fff;font-size:14px;line-height:1.5"><b style="font-size:16px">Work with me</b><br>Search and AI strategy for teams that want to be found and cited.<br><br><a href="mailto:rudra@rudrakasturi.com?subject=Consulting%20enquiry" style="color:#fff;font-weight:700">Get in touch &rarr;</a></div></td>
  </tr></table></td></tr>`;
  const html = layout({ preheader: lead.summary.slice(0, 110), body: leadHtml + `<tr><td style="padding:14px 32px 6px"><p style="margin:0;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:${C.soft}">Also this week</p></td></tr>` + rows + promo, unsubUrl });
  const text = [`Rudra Kasturi, weekly digest${dateLabel ? ' (' + dateLabel + ')' : ''}`, '', ...items.map((i) => `${i.title}\n${i.summary}\n${i.link}\n`), unsubUrl ? `Unsubscribe: ${unsubUrl}` : ''].join('\n');
  return { subject: lead.title, html, text };
}

export function pageHtml({ title, message, extra = '' }) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${esc(title)}</title></head>
<body style="margin:0;background:${C.tint};font-family:${FONT};color:${C.text}"><div style="max-width:520px;margin:12vh auto;padding:0 20px">
<div style="background:#fff;border-radius:14px;padding:34px 32px;border-top:5px solid ${C.cobalt}">
<p style="margin:0 0 18px;font-size:20px;font-weight:800;color:${C.ink}">Rudra Kasturi <span style="background:${C.mint};padding:1px 7px;border-radius:5px;font-style:italic">Inc.</span></p>
<h1 style="margin:0 0 10px;font-size:24px;color:${C.ink}">${esc(title)}</h1><p style="margin:0 0 20px;font-size:16px;line-height:1.6">${esc(message)}</p>${extra}
<p style="margin:22px 0 0"><a href="${config.siteUrl}/" style="color:${C.cobalt};font-weight:700">Back to the blog &rarr;</a></p></div></div></body></html>`;
}
