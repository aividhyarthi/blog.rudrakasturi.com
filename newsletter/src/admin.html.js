// The private admin page (/admin). It asks for the admin password, then talks to /admin/api/*.
export const adminHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Newsletter admin</title>
<style>
body{margin:0;background:#f1f4ff;font-family:Arial,Helvetica,sans-serif;color:#1c2349}
main{max-width:860px;margin:0 auto;padding:28px 18px 80px}
h1{color:#0b1030;margin:0 0 4px}h2{color:#0b1030;margin:0 0 10px;font-size:19px}
.card{background:#fff;border-radius:12px;padding:20px 22px;margin:16px 0;border:1px solid #d9e0fb}
button{background:#2340f5;color:#fff;border:0;border-radius:8px;padding:10px 18px;font-weight:700;font-size:15px;cursor:pointer}
button.alt{background:#0b1030}button:disabled{opacity:.5}
input,textarea,select{font:inherit;padding:9px 11px;border:2px solid #d9e0fb;border-radius:8px;width:100%;box-sizing:border-box}
textarea{min-height:120px}.row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}.row>*{flex:0 0 auto}
.stats{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.stat{background:#f1f4ff;border-radius:10px;padding:12px;text-align:center}
.stat b{display:block;font-size:26px;color:#2340f5}.msg{margin:10px 0 0;font-weight:700}small{color:#4a5280}
iframe{width:100%;height:640px;border:1px solid #d9e0fb;border-radius:10px;background:#fff;margin-top:10px}
@media(max-width:640px){.stats{grid-template-columns:repeat(2,1fr)}}
</style></head><body><main>
<h1>Newsletter admin</h1><small>Private. Keep the password to yourself.</small>
<div class="card" id="login"><h2>Sign in</h2><div class="row"><input id="tok" type="password" placeholder="Admin password" style="max-width:320px"><button id="go">Sign in</button></div><p class="msg" id="lmsg"></p></div>
<div id="app" hidden>
<div class="card"><h2>Subscribers</h2><div class="stats" id="stats"></div></div>
<div class="card"><h2>1. Import a list</h2>
<p>Paste the contents of your subscriber CSV (it needs an Email column).</p>
<select id="istatus"><option value="active">They already confirmed: add as active</option><option value="reconfirm">Not confirmed yet: add, then ask them to confirm</option></select>
<textarea id="icsv" placeholder="Email,Name&#10;someone@example.com,Someone"></textarea>
<p class="row"><button id="doimport">Import</button></p><p class="msg" id="imsg"></p></div>
<div class="card"><h2>2. Ask people to confirm</h2><p>Sends one email to everyone marked "not confirmed yet" (skips anyone asked in the last 7 days).</p>
<p class="row"><button id="doconfirm" class="alt">Send confirmation emails</button></p><p class="msg" id="cmsg"></p></div>
<div class="card"><h2>3. Weekly digest</h2>
<p class="row"><button id="doprev" class="alt">Show preview</button></p>
<iframe id="prev" hidden></iframe>
<p class="row" style="margin-top:12px"><input id="testto" type="email" placeholder="Your email for a test send" style="max-width:300px"><button id="dotest">Send test to me</button></p>
<p class="row"><button id="dosend">Send to all active subscribers</button></p><p class="msg" id="dmsg"></p></div>
</div></main>
<script>
const $=(i)=>document.getElementById(i);let T=sessionStorage.getItem('rk-admin')||'';
async function api(path,opt={}){const r=await fetch('/admin/api/'+path,{...opt,headers:{'Authorization':'Bearer '+T,'Content-Type':'application/json'}});
if(r.status===401){sessionStorage.removeItem('rk-admin');location.reload();throw new Error('unauthorised')}
const ct=r.headers.get('content-type')||'';const d=ct.includes('json')?await r.json():await r.text();if(!r.ok)throw new Error(d.error||'Failed');return d}
async function stats(){const s=await api('stats');$('stats').innerHTML=[['active','Active'],['pending','Waiting to confirm'],['reconfirm','Asked to confirm'],['unsubscribed','Unsubscribed'],['bounced','Bounced']].map(([k,l])=>'<div class="stat"><b>'+(s[k]||0)+'</b>'+l+'</div>').join('')}
async function enter(){try{await stats();$('login').hidden=true;$('app').hidden=false}catch(e){$('lmsg').textContent='That password did not work.'}}
$('go').onclick=()=>{T=$('tok').value.trim();sessionStorage.setItem('rk-admin',T);enter()};if(T)enter();
const act=(btn,msg,fn)=>{$(btn).onclick=async()=>{$(btn).disabled=true;$(msg).textContent='Working...';try{$(msg).textContent=await fn();await stats()}catch(e){$(msg).textContent='Error: '+e.message}$(btn).disabled=false}};
act('doimport','imsg',async()=>{const r=await api('import',{method:'POST',body:JSON.stringify({csv:$('icsv').value,status:$('istatus').value})});return 'Added '+r.added+', already on the list '+r.existing+', skipped '+r.skipped+' (not valid emails).'});
act('doconfirm','cmsg',async()=>{const r=await api('send-confirmations',{method:'POST',body:'{}'});return 'Confirmation emails sent: '+r.sent});
act('dotest','dmsg',async()=>{const r=await api('digest-send',{method:'POST',body:JSON.stringify({to:$('testto').value})});return 'Test sent to '+r.sent+' address.'});
act('dosend','dmsg',async()=>{if(!confirm('Send this week\\'s digest to all active subscribers now?'))return 'Cancelled.';const r=await api('digest-send',{method:'POST',body:JSON.stringify({all:true})});return 'Sent to '+r.sent+' subscribers ('+r.skipped+' already had it).'});
$('doprev').onclick=async()=>{try{const h=await api('digest-preview');$('prev').hidden=false;$('prev').srcdoc=h}catch(e){$('dmsg').textContent='Error: '+e.message}};
</script></body></html>`;
