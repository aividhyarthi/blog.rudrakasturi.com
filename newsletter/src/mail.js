import { config } from './config.js';

// Sends one email through Resend's HTTP API. With no API key it only prints the email (handy for testing).
export async function sendMail({ to, subject, html, text, unsubUrl }) {
  const headers = unsubUrl ? { 'List-Unsubscribe': `<${unsubUrl}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' } : undefined;
  if (!config.resendKey) {
    console.log(`[mail:dev] to=${to} subject="${subject}"${unsubUrl ? ` unsub=${unsubUrl}` : ''}`);
    return { dev: true };
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${config.resendKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: config.from, to: [to], reply_to: config.replyTo, subject, html, text, headers }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res.json();
}
