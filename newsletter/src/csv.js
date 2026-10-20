// Tiny CSV reader: finds the email column (and a name column when there is one).
function parseRows(text) {
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); cell = '';
      if (row.some((x) => x.trim())) rows.push(row);
      row = [];
    } else cell += c;
  }
  row.push(cell);
  if (row.some((x) => x.trim())) rows.push(row);
  return rows;
}

export function parseSubscribers(text) {
  const rows = parseRows(String(text).replace(/^﻿/, ''));
  if (!rows.length) return [];
  const head = rows[0].map((h) => h.trim().toLowerCase());
  const hasHead = head.some((h) => h.includes('email'));
  const ei = hasHead ? head.findIndex((h) => h === 'email' || h.startsWith('email')) : 0;
  const ni = hasHead ? head.findIndex((h) => h === 'name') : -1;
  return rows.slice(hasHead ? 1 : 0).map((r) => ({ email: (r[ei] || '').trim(), name: ni >= 0 ? (r[ni] || '').trim() : '' }));
}
