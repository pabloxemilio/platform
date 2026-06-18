// ============================================================
//  AVAITOR CASINO — API Integration Layer
//  Connects the frontend to the Express backend running on the
//  same origin (e.g. http://localhost:3000)
// ============================================================

const API = '/api';

// ── Token helpers ──
const TOKEN_KEY = 'avaitor_token';
const USER_KEY  = 'avaitor_user';
function getToken()      { return localStorage.getItem(TOKEN_KEY); }
function saveToken(t)    { localStorage.setItem(TOKEN_KEY, t); }
function saveUser(u)     { localStorage.setItem(USER_KEY, JSON.stringify(u)); }
function getUser()       { try { return JSON.parse(localStorage.getItem(USER_KEY) || 'null'); } catch { return null; } }
function clearSession()  { localStorage.removeItem(TOKEN_KEY); localStorage.removeItem(USER_KEY); }
function loggedIn()      { return !!getToken(); }

// ── Generic fetch wrapper ──
async function apiReq(method, path, body = null) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(API + path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
  return data;
}

// ── Auth API ──
const AuthAPI = {
  register: (login, password, username, referral_code) => {
    const payload = { password, username, referral_code };
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
};

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
}

function updateWalletUI(wallet) {
  if (!wallet) return;
  const bal = parseFloat(wallet.main_balance || 0);
  const formatted = '₨ ' + bal.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Header balance
  const headerBal = document.getElementById('headerBalance');
  if (headerBal) headerBal.textContent = formatted;

  // Sidebar balance
  const sideBal = document.getElementById('sidebalance');
  if (sideBal) sideBal.textContent = formatted;

  // Profile Page Wallet Bindings
  const profMainBal = document.getElementById('profMainBal');
  const profBonusBal = document.getElementById('profBonusBal');
  const profTotalDep = document.getElementById('profTotalDep');
  const profTotalWith = document.getElementById('profTotalWith');
  const profTotalWag = document.getElementById('profTotalWag');

  const fmt = (val) => '₨ ' + parseFloat(val || 0).toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

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
    saveToken(data.token);
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
  const btnEl       = document.getElementById('registerSubmitBtn');
  const errEl       = document.getElementById('registerError');

  if (!login || !password) { showToast('Phone/Email and password are required', 'error'); return; }
  if (password.length < 6) { showToast('Password must be at least 6 characters', 'error'); return; }

  if (btnEl) { btnEl.textContent = 'Creating account…'; btnEl.disabled = true; }
  if (errEl) errEl.style.display = 'none';

  try {
    const data = await AuthAPI.register(login, password, username, refCode || undefined);
    saveToken(data.token);
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
    saveToken(data.token);
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
    const data = await ReferralsAPI.link();
    await navigator.clipboard.writeText(data.link);
    showToast('✅ Referral link copied!', 'success');
  } catch (e) {
    showToast('Could not copy link', 'error');
  }
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
  prefillReferralCode();
  // Bind real deposit/withdraw forms if they exist
  document.getElementById('depositForm')?.addEventListener('submit', handleDeposit);
  document.getElementById('withdrawForm')?.addEventListener('submit', handleWithdrawal);
  // Bind real login/register forms
  document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
  document.getElementById('registerForm')?.addEventListener('submit', handleRegister);
  // Bind referral copy button
  document.getElementById('copyReferralBtn')?.addEventListener('click', copyReferralLink);

  // Initialize Google Login Buttons
  if (window.google && google.accounts) {
    google.accounts.id.initialize({
      client_id: '345078904685-tsc3k9vkvlie4nfqvqmpddbg27u24hgl.apps.googleusercontent.com',
      callback: handleGoogleResponse
    });
    
    const loginContainer = document.getElementById('googleLoginContainer');
    if (loginContainer) {
      google.accounts.id.renderButton(loginContainer, { theme: 'outline', size: 'large', text: 'continue_with' });
    }
    
    const regContainer = document.getElementById('googleRegisterContainer');
    if (regContainer) {
      google.accounts.id.renderButton(regContainer, { theme: 'outline', size: 'large', text: 'continue_with' });
    }
  }
});
