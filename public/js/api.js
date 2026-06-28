// ============================================================
//  AVAITOR CASINO — API Integration Layer
//  Connects the frontend to the Express backend running on the
//  same origin (e.g. http://localhost:3000)
// ============================================================

const API = '/api';

// ── Currency (display-only: symbol changes, balance number is the same) ──
const CURRENCY_SYMBOLS = { PKR: '₨', INR: '₹', USD: '$' };
function curSym() { return CURRENCY_SYMBOLS[(currentUser && currentUser.currency) || 'PKR'] || '₨'; }
function fmtMoney(v) { return curSym() + ' ' + parseFloat(v || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

// ── Token helpers ──
const TOKEN_KEY = 'avaitor_token';
const USER_KEY  = 'avaitor_user';
function getToken()      { return localStorage.getItem(TOKEN_KEY); }
function saveToken(t)    { localStorage.setItem(TOKEN_KEY, t); }
function saveUser(u)     { localStorage.setItem(USER_KEY, JSON.stringify(u)); }
function getUser()       { try { return JSON.parse(localStorage.getItem(USER_KEY) || 'null'); } catch { return null; } }
const REFRESH_KEY = 'avaitor_refresh';
function getRefresh()    { return localStorage.getItem(REFRESH_KEY); }
function saveRefresh(t)  { if (t) localStorage.setItem(REFRESH_KEY, t); }
function clearSession()  { localStorage.removeItem(TOKEN_KEY); localStorage.removeItem(USER_KEY); localStorage.removeItem(REFRESH_KEY); }
function loggedIn()      { return !!getToken(); }

// Exchange the refresh token for a fresh access token (keeps the user logged in).
let _refreshing = null;
async function refreshSession() {
  const rt = getRefresh();
  if (!rt) return false;
  if (_refreshing) return _refreshing;                       // de-dupe concurrent refreshes
  _refreshing = (async () => {
    try {
      const res = await fetch(API + '/auth/refresh', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ refresh_token: rt }) });
      const data = await res.json();
      if (!res.ok || !data.token) return false;
      saveToken(data.token); saveRefresh(data.refresh_token);
      return true;
    } catch { return false; } finally { _refreshing = null; }
  })();
  return _refreshing;
}

// ── Generic fetch wrapper (auto-refreshes an expired token once) ──
async function apiReq(method, path, body = null, _retried = false) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(API + path, { method, headers, body: body ? JSON.stringify(body) : undefined });
  if ((res.status === 401 || res.status === 403) && !_retried && getRefresh()) {
    if (await refreshSession()) return apiReq(method, path, body, true);   // retry once with new token
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
  return data;
}

// ── Auth API ──
const AuthAPI = {
  register: (login, password, username, referral_code, currency) => {
    const payload = { password, username, referral_code, currency };
    if (login.includes('@')) payload.email = login;
    else payload.phone = login;
    return apiReq('POST', '/auth/register', payload);
  },

  login: (login, password) => {
    const payload = { password };
    if (login.includes('@')) payload.email = login;
    else payload.phone = login;
    return apiReq('POST', '/auth/login', payload);
  },

  google: (id_token) => apiReq('POST', '/auth/google', { id_token }),

  me: () => apiReq('GET', '/auth/me'),

  setCurrency: (currency) => apiReq('POST', '/auth/currency', { currency }),
};

// Change the logged-in user's display currency and refresh the UI everywhere.
async function changeCurrency(currency) {
  if (!loggedIn()) { openModal('loginModal'); return; }
  if (!currentUser || currentUser.currency === currency) { syncCurrencyControls(currency); return; }
  try {
    await AuthAPI.setCurrency(currency);
    currentUser.currency = currency;
    saveUser(currentUser);
    updateWalletUI(currentWallet);          // re-renders all balance symbols (₨/₹/$)
    syncCurrencyControls(currency);
    showToast('Currency changed to ' + currency, 'success');
  } catch (e) { showToast(e.message || 'Could not change currency', 'error'); }
}
// Keep every currency control (settings select + dropdown chips) in sync.
function syncCurrencyControls(currency) {
  const sel = document.getElementById('setCurrency');
  if (sel) sel.value = currency;
  document.querySelectorAll('.cur-chip').forEach(c => c.classList.toggle('active', c.dataset.cur === currency));
}

// ── Wallet API ──
const WalletAPI = {
  get:          ()           => apiReq('GET', '/wallet'),
  transactions: (page = 1)  => apiReq('GET', `/wallet/transactions?page=${page}&limit=20`),
};

// ── Deposits API ──
const DepositsAPI = {
  submit: (amount, method, reference_number) =>
    apiReq('POST', '/deposits', { amount, method, reference_number }),
  history: (page = 1) => apiReq('GET', `/deposits?page=${page}&limit=10`),
};

// ── Withdrawals API ──
const WithdrawalsAPI = {
  submit: (amount, method, account_details) =>
    apiReq('POST', '/withdrawals', { amount, method, account_details }),
  history: (page = 1) => apiReq('GET', `/withdrawals?page=${page}&limit=10`),
};

// ── Games API ──
const GamesAPI = {
  list:         ()           => apiReq('GET', '/games'),
  session:      (data)       => apiReq('POST', '/games/session', data),
  wagerProgress: ()          => apiReq('GET', '/games/wager-progress'),
};

// ── Referrals API ──
const ReferralsAPI = {
  link:  () => apiReq('GET', '/referrals/link'),
  stats: () => apiReq('GET', '/referrals/stats'),
};

// ============================================================
//  SESSION MANAGEMENT — keeps frontend in sync with real data
// ============================================================

let currentUser   = null;
let currentWallet = null;

async function initSession() {
  if (!loggedIn()) return;
  try {
    const data = await AuthAPI.me();
    currentUser   = data.user;
    currentWallet = data.wallet;
    saveUser(currentUser);
    updateAuthUI(currentUser);
    updateWalletUI(currentWallet);
    // Populate referral code if section exists
    const refCodeEl = document.getElementById('myReferralCode');
    if (refCodeEl) refCodeEl.textContent = currentUser.referral_code || '';
  } catch (e) {
    // Token expired or invalid — log out silently
    clearSession();
  }
}

function updateAuthUI(user) {
  const authBtns = document.getElementById('headerAuthBtns');
  const userChip = document.getElementById('headerUserChip');
  const nameEl   = document.getElementById('headerUserName');
  const sideBal  = document.getElementById('sidebarBalance');
  const logoutBtn = document.getElementById('logoutBtn');

  const username = user.username || user.phone || user.email || 'Player';

  if (authBtns) authBtns.style.display = 'none';
  if (userChip) userChip.style.display = 'flex';
  if (nameEl)   nameEl.textContent = username;
  if (sideBal)  sideBal.style.display = 'block';
  if (logoutBtn) logoutBtn.style.display = 'flex';

  // Profile Page Bindings
  const profUsername = document.getElementById('profUsername');
  const profEmail    = document.getElementById('profEmail');
  const profJoined   = document.getElementById('profJoined');
  const profKyc      = document.getElementById('profKycStatus');

  if (profUsername) profUsername.textContent = username;
  if (profEmail)    profEmail.textContent    = user.email || user.phone || 'No email linked';
  if (profJoined) {
    const joinedDate = user.created_at ? new Date(user.created_at).toLocaleDateString() : new Date().toLocaleDateString();
    profJoined.textContent = joinedDate;
  }
  if (profKyc) {
    profKyc.textContent = user.kyc_status || 'Unverified';
    if (user.kyc_status === 'approved') profKyc.style.color = 'var(--green)';
  }
  // Reflect the user's currency in the settings select + dropdown chips
  if (typeof syncCurrencyControls === 'function') syncCurrencyControls(user.currency || 'PKR');

  // KYC badge in the profile dropdown
  const menuKyc = document.getElementById('menuKyc');
  if (menuKyc) {
    const verified = user.kyc_status === 'approved';
    menuKyc.textContent = verified ? 'Verified' : (user.kyc_status === 'pending' ? 'Pending' : 'Unverified');
    menuKyc.classList.toggle('verified', verified);
  }
}

const CURRENCY_NAMES = { PKR: 'Pakistani Rupee · PKR', INR: 'Indian Rupee · INR', USD: 'US Dollar · USD' };
function updateWalletUI(wallet) {
  if (!wallet) return;
  window._cachedWallet = wallet;  // used by the VIP view
  // keep the balance-card currency label in sync with the user's currency
  const cur = (currentUser && currentUser.currency) || 'PKR';
  document.querySelectorAll('.balance-currency').forEach(el => { el.textContent = CURRENCY_NAMES[cur] || CURRENCY_NAMES.PKR; });
  const bal = parseFloat(wallet.main_balance || 0);
  const formatted = fmtMoney(bal);

  // Header balance
  const headerBal = document.getElementById('headerBalance');
  if (headerBal) headerBal.textContent = formatted;

  // Sidebar balance
  const sideBal = document.getElementById('sidebalance');
  if (sideBal) sideBal.textContent = formatted;

  // Profile dropdown balance
  const menuBal = document.getElementById('menuBalance');
  if (menuBal) menuBal.textContent = formatted;

  // Profile Page Wallet Bindings
  const profMainBal = document.getElementById('profMainBal');
  const profBonusBal = document.getElementById('profBonusBal');
  const profTotalDep = document.getElementById('profTotalDep');
  const profTotalWith = document.getElementById('profTotalWith');
  const profTotalWag = document.getElementById('profTotalWag');

  const fmt = (val) => fmtMoney(val);

  if (profMainBal)  profMainBal.textContent  = fmt(wallet.main_balance);
  if (profBonusBal) profBonusBal.textContent = fmt(wallet.bonus_balance);
  if (profTotalDep) profTotalDep.textContent = fmt(wallet.total_deposited);
  if (profTotalWith) profTotalWith.textContent = fmt(wallet.total_withdrawn);
  if (profTotalWag) profTotalWag.textContent = fmt(wallet.total_wagered);

  // Wager progress bar
  const req  = parseFloat(wallet.wagering_required  || 0);
  const done = parseFloat(wallet.wagering_completed || 0);
  const pct  = req > 0 ? Math.min(100, (done / req) * 100).toFixed(0) : 100;
  const wagerBar = document.getElementById('wagerProgressBar');
  const wagerTxt = document.getElementById('wagerProgressText');
  if (wagerBar) wagerBar.style.width = pct + '%';
  if (wagerTxt) wagerTxt.textContent = `${pct}% wagered (${req > 0 ? 'unlock withdrawal' : 'no requirement'})`;
}

// ============================================================
//  OVERRIDE LOGIN / REGISTER to use real API
// ============================================================

async function handleLogin(e) {
  e.preventDefault();
  const loginInput = document.getElementById('loginUser');
  const passInput  = document.getElementById('loginPass');
  const btnEl      = document.getElementById('loginSubmitBtn');
  const errEl      = document.getElementById('loginError');

  const login    = loginInput?.value.trim();
  const password = passInput?.value;

  if (!login || !password) { showToast('Please fill all fields', 'error'); return; }

  if (btnEl) { btnEl.textContent = 'Signing in…'; btnEl.disabled = true; }
  if (errEl) errEl.style.display = 'none';

  try {
    const data = await AuthAPI.login(login, password);
    saveToken(data.token); saveRefresh(data.refresh_token);
    saveUser(data.user);
    currentUser   = data.user;
    currentWallet = data.wallet;
    closeModal('loginModal');
    showToast(`Welcome, ${data.user.username || login}!`, 'success');
    updateAuthUI(data.user);
    updateWalletUI(data.wallet);
  } catch (err) {
    if (errEl) { errEl.textContent = err.message; errEl.style.display = 'block'; }
    showToast(err.message, 'error');
  } finally {
    if (btnEl) { btnEl.textContent = 'Sign In'; btnEl.disabled = false; }
  }
}

async function handleRegister(e) {
  e.preventDefault();
  const login       = document.getElementById('regLogin')?.value.trim();
  const password    = document.getElementById('regPass')?.value;
  const username    = document.getElementById('regUsername')?.value?.trim();
  const refCode     = document.getElementById('regRefCode')?.value?.trim();
  const currency    = document.getElementById('regCurrency')?.value || 'PKR';
  const btnEl       = document.getElementById('registerSubmitBtn');
  const errEl       = document.getElementById('registerError');

  if (!login || !password) { showToast('Phone/Email and password are required', 'error'); return; }
  if (password.length < 6) { showToast('Password must be at least 6 characters', 'error'); return; }

  if (btnEl) { btnEl.textContent = 'Creating account…'; btnEl.disabled = true; }
  if (errEl) errEl.style.display = 'none';

  try {
    const data = await AuthAPI.register(login, password, username, refCode || undefined, currency);
    saveToken(data.token); saveRefresh(data.refresh_token);
    saveUser(data.user);
    currentUser   = data.user;
    currentWallet = data.wallet;
    closeModal('loginModal');
    showToast('🎉 Account created! Welcome bonus added!', 'success');
    updateAuthUI(data.user);
    updateWalletUI(data.wallet);
  } catch (err) {
    if (errEl) { errEl.textContent = err.message; errEl.style.display = 'block'; }
    showToast(err.message, 'error');
  } finally {
    if (btnEl) { btnEl.textContent = 'Create Account'; btnEl.disabled = false; }
  }
}

function handleLogout() {
  clearSession();
  currentUser   = null;
  currentWallet = null;
  // Reset UI
  const authBtns  = document.getElementById('headerAuthBtns');
  const userChip  = document.getElementById('headerUserChip');
  const sideBal   = document.getElementById('sidebarBalance');
  if (authBtns) authBtns.style.display = '';
  if (userChip) userChip.style.display = 'none';
  if (sideBal)  sideBal.style.display  = 'none';
  showToast('Logged out. See you soon!', 'success');
}

// ── Google One Tap / Button Callback ──
async function handleGoogleResponse(response) {
  try {
    showToast('Verifying Google Login...', 'success');
    const data = await AuthAPI.google(response.credential);
    saveToken(data.token); saveRefresh(data.refresh_token);
    saveUser(data.user);
    currentUser   = data.user;
    currentWallet = data.wallet;
    closeModal('loginModal');
    closeModal('registerModal');
    showToast(`✅ Welcome back, ${data.user.username || data.user.email}!`, 'success');
    updateAuthUI(data.user);
    updateWalletUI(data.wallet);
  } catch (err) {
    showToast(err.message || 'Google Login failed', 'error');
  }
}

// ── Deposit form (real API) ──
async function handleDeposit(e) {
  e.preventDefault();
  const amount  = parseFloat(document.getElementById('depositAmount')?.value);
  const method  = document.getElementById('depositMethodName')?.value || 'other';
  const ref     = document.getElementById('depositRef')?.value?.trim();
  const btnEl   = document.querySelector('#depositForm button[type="submit"]');
  const errEl   = document.getElementById('depositError');

  if (!amount || amount < 100) { showToast('Minimum deposit is ₨ 100', 'error'); return; }
  if (!ref) { showToast('Reference number is required', 'error'); return; }

  if (btnEl) { btnEl.textContent = 'Submitting…'; btnEl.disabled = true; }
  if (errEl) errEl.style.display = 'none';

  try {
    const data = await DepositsAPI.submit(amount, method, ref);
    closeModal('depositModal');
    showToast(`✅ Deposit of ₨ ${amount.toLocaleString()} submitted! Awaiting admin approval.`, 'success');
    document.getElementById('depositForm')?.reset();
  } catch (err) {
    if (errEl) { errEl.textContent = err.message; errEl.style.display = 'block'; }
    showToast(err.message, 'error');
  } finally {
    if (btnEl) { btnEl.textContent = 'Submit Deposit Request →'; btnEl.disabled = false; }
  }
}

// ── Withdrawal form (real API) ──
async function handleWithdrawal(e) {
  e.preventDefault();
  const amount  = parseFloat(document.getElementById('withdrawAmount')?.value);
  const method  = document.getElementById('withdrawMethodName')?.value || 'other';
  const account = document.getElementById('withdrawDetails')?.value?.trim();
  const btnEl   = document.querySelector('#withdrawForm button[type="submit"]');
  const errEl   = document.getElementById('withdrawError');

  if (!amount || amount < 500) { showToast('Minimum withdrawal is ₨ 500', 'error'); return; }
  if (!account) { showToast('Enter account details', 'error'); return; }

  if (btnEl) { btnEl.textContent = 'Submitting…'; btnEl.disabled = true; }
  if (errEl) errEl.style.display = 'none';

  try {
    const data = await WithdrawalsAPI.submit(amount, method, { details: account });
    closeModal('withdrawModal');
    showToast(`✅ Withdrawal of ₨ ${amount.toLocaleString()} requested!`, 'success');
    document.getElementById('withdrawForm')?.reset();
  } catch (err) {
    if (errEl) { errEl.textContent = err.message; errEl.style.display = 'block'; }
    showToast(err.message, 'error');
  } finally {
    if (btnEl) { btnEl.textContent = 'Submit Withdrawal Request →'; btnEl.disabled = false; }
  }
}

// ── Copy referral link ──
async function copyReferralLink() {
  try {
    const fromInput = document.getElementById('refLink')?.value;
    const link = fromInput || (await ReferralsAPI.link()).referral_link;
    await navigator.clipboard.writeText(link);
    showToast('✅ Referral link copied!', 'success');
  } catch (e) {
    showToast('Could not copy link', 'error');
  }
}
function copyRefCode() {
  const code = document.getElementById('refCode')?.textContent?.trim();
  if (code && code !== '--------') {
    navigator.clipboard.writeText(code).then(() => showToast('✅ Code copied!', 'success'));
  }
}
// ── Content (promotions + announcements managed from the admin panel) ──
const ContentAPI = {
  promotions:    () => apiReq('GET', '/promotions'),
  announcements: () => apiReq('GET', '/announcements'),
};
function promoCardHTML(p) {
  const actions = { deposit: 'openDeposit()', vip: 'openVip()', referral: 'openReferral()' };
  const click = p.cta_action === 'link' && p.link_url ? `window.open('${p.link_url}','_blank')` : (actions[p.cta_action] || 'openDeposit()');
  const badge = p.badge ? `<div class="promo-card-badge" style="background:${p.badge_color || 'var(--gold)'};color:#1a1a1a;">${p.badge}</div>` : '';
  const sub = p.subtitle ? `<div style="font-size:0.72rem;color:${p.badge_color || 'var(--gold)'};margin-bottom:3px;">${p.subtitle}</div>` : '';
  return `<div class="promo-card" onclick="${click}">
    ${p.image_url ? `<img src="${p.image_url}" alt="${(p.title || '').replace(/"/g, '')}">` : ''}
    ${badge}
    <div class="promo-card-label">${sub}${p.title || ''}</div>
  </div>`;
}
async function loadPromotions() {
  try {
    const { promotions } = await ContentAPI.promotions();
    if (promotions && promotions.length) {
      const grid = document.getElementById('promosGrid');
      if (grid) grid.innerHTML = promotions.map(promoCardHTML).join('');
    }
  } catch (e) { /* keep the static fallback cards */ }
}
// Full Promotions page (in-app, DB-driven) — keeps the app shell/sidebar consistent.
async function loadPromotionsPage() {
  const list = document.getElementById('promotionsList');
  if (!list) return;
  try {
    const { promotions } = await ContentAPI.promotions();
    const actions = { deposit: 'openDeposit()', vip: 'openVip()', referral: 'openReferral()' };
    if (!promotions || !promotions.length) { list.innerHTML = '<div class="text-muted" style="padding:40px;text-align:center;">No active promotions right now. Check back soon!</div>'; return; }
    list.innerHTML = promotions.map(p => {
      const click = p.cta_action === 'link' && p.link_url ? `window.open('${p.link_url}','_blank')` : (actions[p.cta_action] || 'openDeposit()');
      return `<div class="promo-page-card">
        ${p.image_url ? `<div class="promo-page-img" style="background-image:url('${p.image_url}')">${p.badge ? `<span class="promo-page-badge" style="background:${p.badge_color || 'var(--gold)'};">${p.badge}</span>` : ''}</div>` : ''}
        <div class="promo-page-body">
          ${p.subtitle ? `<div class="promo-page-sub" style="color:${p.badge_color || 'var(--gold)'}">${p.subtitle}</div>` : ''}
          <h3 class="promo-page-title">${p.title || ''}</h3>
          ${p.description ? `<p class="promo-page-desc">${p.description}</p>` : ''}
          <button class="btn btn-gold" onclick="${click}">${p.cta_text || 'Claim'}</button>
        </div>
      </div>`;
    }).join('');
  } catch (e) { list.innerHTML = '<div class="text-muted" style="padding:40px;text-align:center;">Could not load promotions.</div>'; }
}

async function loadAnnouncements() {
  try {
    const { announcements } = await ContentAPI.announcements();
    if (announcements && announcements.length) {
      const el = document.getElementById('marqueeText');
      if (el) el.innerHTML = announcements.map(a => a.message).join(' &nbsp;|&nbsp; ');
    }
  } catch (e) { /* keep static marquee */ }
}

// Populate the Invite & Earn page with the user's code, link and earnings.
async function loadReferralView() {
  try {
    const [link, stats] = await Promise.all([ReferralsAPI.link(), ReferralsAPI.stats()]);
    const code = link.referral_code || (currentUser && currentUser.referral_code) || '';
    const set = (id, v) => { const el = document.getElementById(id); if (el) { if (el.tagName === 'INPUT') el.value = v; else el.textContent = v; } };
    set('refCode', code || '--------');
    set('refLink', link.referral_link || (location.origin + '?ref=' + code));
    set('refTotal', stats.total_referrals || 0);
    set('refEarned', fmtMoney(stats.total_earned || 0));
  } catch (e) { /* not logged in */ }
}

// ── Auto-fill referral code from URL (?ref=XXXX) ──
function prefillReferralCode() {
  const params = new URLSearchParams(window.location.search);
  const ref    = params.get('ref');
  const refInput = document.getElementById('regRefCode');
  if (ref && refInput) refInput.value = ref;
}

// ── Start session on load ──
document.addEventListener('DOMContentLoaded', () => {
  initSession();
  loadPromotions();
  loadAnnouncements();
  prefillReferralCode();
  // Bind real deposit/withdraw forms if they exist
  document.getElementById('depositForm')?.addEventListener('submit', handleDeposit);
  document.getElementById('withdrawForm')?.addEventListener('submit', handleWithdrawal);
  // Bind real login/register forms
  document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
  document.getElementById('registerForm')?.addEventListener('submit', handleRegister);
  // Bind referral copy button
  document.getElementById('copyReferralBtn')?.addEventListener('click', copyReferralLink);

  // Google Login — only initialise when a real client ID is configured for THIS domain.
  // (Leaving the original site's client ID causes accounts.google.com 400s, so we skip it.)
  const GOOGLE_CLIENT_ID = ''; // ← put your own OAuth client ID here to enable Google login
  if (GOOGLE_CLIENT_ID && window.google && google.accounts) {
    google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: handleGoogleResponse });
    const loginContainer = document.getElementById('googleLoginContainer');
    if (loginContainer) google.accounts.id.renderButton(loginContainer, { theme: 'outline', size: 'large', text: 'continue_with' });
    const regContainer = document.getElementById('googleRegisterContainer');
    if (regContainer) google.accounts.id.renderButton(regContainer, { theme: 'outline', size: 'large', text: 'continue_with' });
  } else {
    // Hide the dead Google UI (button + its "or continue with…" divider) so the form looks clean.
    ['googleLoginContainer', 'googleRegisterContainer'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.style.display = 'none';
      if (el.nextElementSibling && el.nextElementSibling.classList.contains('form-divider')) el.nextElementSibling.style.display = 'none';
    });
  }
});
