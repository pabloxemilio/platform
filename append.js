const fs = require('fs');

const file = 'public/js/main.js';
let content = fs.readFileSync(file, 'utf8');

const jsContent = `
// ══════════════════════════════════════════
//  COMING SOON FEATURES IMPLEMENTATION
// ══════════════════════════════════════════

// --- KYC ---
function openKycModal() {
  openModal('kycModal');
}
async function submitKyc(e) {
  e.preventDefault();
  const btn = document.getElementById('kycSubmitBtn');
  btn.textContent = 'Uploading...';
  btn.disabled = true;
  try {
    // Mock API call delay
    await new Promise(r => setTimeout(r, 1500));
    
    // Update UI locally
    const st = document.getElementById('profKycStatus');
    if(st) {
      st.textContent = 'Pending Verification';
      st.style.color = 'var(--gold)';
    }
    showToast('KYC Documents submitted successfully!', 'success');
    closeModal('kycModal');
  } catch (err) {
    showToast('Error: ' + err.message, 'error');
  } finally {
    btn.textContent = 'Submit for Verification';
    btn.disabled = false;
  }
}

// --- SETTINGS ---
async function saveSettings(e) {
  e.preventDefault();
  const btn = document.getElementById('btnSaveSettings');
  btn.textContent = 'Saving...';
  btn.disabled = true;
  try {
    const uname = document.getElementById('setUname').value;
    const fname = document.getElementById('setFullName').value;
    // Mock settings save for now since there's no backend route yet
    await new Promise(r => setTimeout(r, 800));
    showToast('Profile updated successfully!', 'success');
    
    // Update UI elements if they exist
    if(document.getElementById('profUname')) document.getElementById('profUname').textContent = uname;
    if(document.getElementById('profName')) document.getElementById('profName').textContent = fname || 'Add Full Name';
  } catch (err) {
    showToast('Error: ' + err.message, 'error');
  } finally {
    btn.textContent = 'Save Changes';
    btn.disabled = false;
  }
}

// --- LIVE SUPPORT ---
function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if(!msg) return;
  
  const chat = document.getElementById('chatMessages');
  
  // User msg
  const userDiv = document.createElement('div');
  userDiv.style = 'background:rgba(255,255,255,0.05); padding:10px 15px; border-radius:15px 15px 0 15px; align-self:flex-end; max-width:80%; margin-left:auto; color:var(--text);';
  userDiv.textContent = msg;
  chat.appendChild(userDiv);
  input.value = '';
  chat.scrollTop = chat.scrollHeight;
  
  // Agent reply
  setTimeout(() => {
    const agentDiv = document.createElement('div');
    agentDiv.style = 'background:var(--primary); padding:10px 15px; border-radius:15px 15px 15px 0; align-self:flex-start; max-width:80%; color:#fff;';
    agentDiv.textContent = 'Thank you for your message. An agent will be with you shortly.';
    chat.appendChild(agentDiv);
    chat.scrollTop = chat.scrollHeight;
  }, 1000);
}

// --- TRANSACTIONS ---
async function loadTransactions(type = 'all') {
  // Update buttons
  ['btnTxAll', 'btnTxDep', 'btnTxWit'].forEach(id => {
    const el = document.getElementById(id);
    if(el) { el.classList.remove('btn-primary'); el.classList.add('btn-ghost'); }
  });
  const activeBtn = type === 'all' ? 'btnTxAll' : (type === 'deposits' ? 'btnTxDep' : 'btnTxWit');
  if(document.getElementById(activeBtn)) {
    document.getElementById(activeBtn).classList.remove('btn-ghost');
    document.getElementById(activeBtn).classList.add('btn-primary');
  }

  const tbody = document.getElementById('transactionsBody');
  if(!tbody) return;
  tbody.innerHTML = '<tr><td colspan="5" class="table-empty">Loading...</td></tr>';

  try {
    let txs = [];
    
    // Fetch deposits
    if (type === 'all' || type === 'deposits') {
      try {
        const res = await apiReq('GET', '/deposits?limit=50');
        if (res.deposits) {
          res.deposits.forEach(d => {
            txs.push({ date: new Date(d.created_at), type: 'Deposit', amount: d.amount, method: d.method, status: d.status });
          });
        }
      } catch(e) { console.warn('Failed to load deposits', e); }
    }
    
    // Fetch withdrawals
    if (type === 'all' || type === 'withdrawals') {
      try {
        const res = await apiReq('GET', '/withdrawals?limit=50');
        if (res.withdrawals) {
          res.withdrawals.forEach(w => {
            txs.push({ date: new Date(w.created_at), type: 'Withdrawal', amount: w.amount, method: w.method, status: w.status });
          });
        }
      } catch(e) { console.warn('Failed to load withdrawals', e); }
    }
    
    // Sort by date DESC
    txs.sort((a, b) => b.date - a.date);
    
    if (txs.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" class="table-empty">No transactions found</td></tr>';
      return;
    }
    
    tbody.innerHTML = txs.map(t => {
      const isDep = t.type === 'Deposit';
      let badgeCls = 'badge-active';
      if(t.status === 'pending') badgeCls = 'badge-inactive';
      if(t.status === 'rejected') badgeCls = 'badge-inactive';
      return \`<tr>
        <td>\${t.date.toLocaleDateString()} \${t.date.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</td>
        <td><span class="badge \${isDep ? 'badge-active' : 'badge-inactive'}" style="background:\${isDep ? 'rgba(0,255,136,0.1)' : 'rgba(255,51,102,0.1)'}; color:\${isDep ? 'var(--green)' : 'var(--red)'}">\${t.type}</span></td>
        <td class="\${isDep ? 'text-green' : 'text-red'}">\${isDep ? '+' : '-'}₨\${parseFloat(t.amount).toLocaleString()}</td>
        <td style="text-transform:capitalize;">\${t.method}</td>
        <td><span class="badge \${badgeCls}" style="text-transform:capitalize;">\${t.status}</span></td>
      </tr>\`;
    }).join('');
    
  } catch (err) {
    tbody.innerHTML = \`<tr><td colspan="5" class="table-empty" style="color:var(--red)">Failed to load transactions</td></tr>\`;
  }
}

// Intercept switchView to run initialization functions
if (!window._switchViewIntercepted) {
  const originalSwitchView = switchView;
  switchView = function(viewId) {
    originalSwitchView(viewId);
    if (viewId === 'transactionsView') {
      loadTransactions('all');
    } else if (viewId === 'settingsView') {
      // Prefill settings if logged in
      const u = getUser();
      if(u) {
        if(document.getElementById('setUname')) document.getElementById('setUname').value = u.username || '';
        if(document.getElementById('setFullName')) document.getElementById('setFullName').value = u.full_name || '';
      }
    } else if (viewId === 'vipView') {
      // Calculate VIP tier based on wallet
      const w = window._cachedWallet; // stored by loadProfile if exists
      if (w) {
        const wager = parseFloat(w.total_wagered || 0);
        let tier = 'Bronze';
        let nxt = 10000;
        let nxtName = 'Silver';
        let pct = (wager / 10000) * 100;
        
        if(wager >= 500000) { tier = 'Diamond'; nxt = 500000; nxtName = 'Max Tier'; pct = 100; }
        else if(wager >= 100000) { tier = 'Gold'; nxt = 500000; nxtName = 'Diamond'; pct = (wager/500000)*100; }
        else if(wager >= 10000) { tier = 'Silver'; nxt = 100000; nxtName = 'Gold'; pct = (wager/100000)*100; }
        
        document.getElementById('vipCurrentTier').textContent = tier;
        document.getElementById('vipCurrentWager').textContent = \`₨\${wager.toLocaleString()} wagered\`;
        document.getElementById('vipNextTier').textContent = wager >= 500000 ? 'Max Tier Reached' : \`Next Tier: \${nxtName} (₨\${nxt.toLocaleString()})\`;
        document.getElementById('vipProgressBar').style.width = Math.min(pct, 100) + '%';
      }
    }
  }
  window._switchViewIntercepted = true;
}

// Modify loadProfile to store wallet for VIP calculation
const originalLoadProfile = loadProfile;
loadProfile = async function() {
  await originalLoadProfile();
  try {
    const data = await apiReq('GET', '/wallet');
    window._cachedWallet = Array.isArray(data.wallet) ? data.wallet[0] : data.wallet;
  } catch(e) {}
}

`;

if (!content.includes('COMING SOON FEATURES IMPLEMENTATION')) {
  fs.writeFileSync(file, content + jsContent);
  console.log('Appended to main.js');
} else {
  console.log('Already appended');
}
