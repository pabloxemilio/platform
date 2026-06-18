// ============================================================
//  AVAITOR Admin — Core API & Auth Helpers
// ============================================================

const API_BASE = '/api';
const ADMIN_TOKEN_KEY = 'avaitor_admin_token';
const ADMIN_INFO_KEY  = 'avaitor_admin_info';

// ── Token Management ──
function getToken() { return localStorage.getItem(ADMIN_TOKEN_KEY); }
function setToken(t) { localStorage.setItem(ADMIN_TOKEN_KEY, t); }
function clearToken() { localStorage.removeItem(ADMIN_TOKEN_KEY); localStorage.removeItem(ADMIN_INFO_KEY); }
function getAdminInfo() { try { return JSON.parse(localStorage.getItem(ADMIN_INFO_KEY) || '{}'); } catch { return {}; } }
function setAdminInfo(info) { localStorage.setItem(ADMIN_INFO_KEY, JSON.stringify(info)); }

function isLoggedIn() { return !!getToken(); }

function guardAuth() {
  if (!isLoggedIn()) { window.location.href = '/admin/index.html'; }
}

function logout() {
  clearToken();
  window.location.href = '/admin/index.html';
}

// ── API Helper ──
async function api(method, path, body = null, isFormData = false) {
  const headers = { Authorization: `Bearer ${getToken()}` };
  if (!isFormData) headers['Content-Type'] = 'application/json';

  const opts = { method, headers };
  if (body && method !== 'GET') opts.body = isFormData ? body : JSON.stringify(body);

  const res = await fetch(`${API_BASE}${path}`, opts);
  const data = await res.json();

  if (res.status === 401) { logout(); return; }
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
}

const GET    = (path)         => api('GET',    path);
const POST   = (path, body)   => api('POST',   path, body);
const PATCH  = (path, body)   => api('PATCH',  path, body);
const DELETE = (path)         => api('DELETE', path);

// ── Toast ──
function showToast(message, type = 'success') {
  const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
  const container = document.getElementById('toastContainer') || (() => {
    const c = document.createElement('div');
    c.className = 'toast-container';
    c.id = 'toastContainer';
    document.body.appendChild(c);
    return c;
  })();
  const toast = document.createElement('div');
  toast.className = `toast ${type !== 'success' ? type : ''}`;
  toast.innerHTML = `<span>${icons[type] || '✅'}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3100);
}

// ── Modal helpers ──
function openModal(id)  { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

// ── Format helpers ──
function fmt(num, decimals = 2) {
  return parseFloat(num || 0).toLocaleString('en-PK', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
function fmtPKR(num) { return '₨ ' + fmt(num); }
function fmtDate(d)  { return d ? new Date(d).toLocaleString('en-PK', { dateStyle: 'medium', timeStyle: 'short' }) : '—'; }
function fmtDateShort(d) { return d ? new Date(d).toLocaleDateString('en-PK') : '—'; }
function timeSince(d) {
  if (!d) return '—';
  const s = Math.floor((Date.now() - new Date(d)) / 1000);
  if (s < 60)   return s + 's ago';
  if (s < 3600) return Math.floor(s/60) + 'm ago';
  if (s < 86400) return Math.floor(s/3600) + 'h ago';
  return Math.floor(s/86400) + 'd ago';
}

// ── Badge HTML ──
function badge(status) {
  const map = {
    pending:    'badge-pending',
    approved:   'badge-approved',
    rejected:   'badge-rejected',
    active:     'badge-active',
    blocked:    'badge-blocked',
    suspended:  'badge-rejected',
    inactive:   'badge-inactive',
    processing: 'badge-processing',
  };
  return `<span class="badge ${map[status] || 'badge-inactive'}">${status}</span>`;
}

// ── User avatar letter ──
function avatarLetter(name) { return (name || '?')[0].toUpperCase(); }

// ── Sidebar nav active state ──
function setActiveNav() {
  const page = window.location.pathname.split('/').pop().replace('.html','');
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href')?.replace('.html','').split('/').pop();
    link.classList.toggle('active', href === page);
  });
}

// ── Populate admin info in sidebar ──
function populateSidebarAdmin() {
  const info = getAdminInfo();
  const nameEl  = document.getElementById('sidebarAdminName');
  const roleEl  = document.getElementById('sidebarAdminRole');
  const initEl  = document.getElementById('sidebarAdminInit');
  if (nameEl)  nameEl.textContent  = info.username || 'Admin';
  if (roleEl)  roleEl.textContent  = 'Super Admin';
  if (initEl)  initEl.textContent  = avatarLetter(info.username);
}

// ── Paginator helper ──
function renderPagination(containerId, page, total, limit, onPage) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const pages = Math.ceil(total / limit);
  if (pages <= 1) { el.innerHTML = ''; return; }
  let html = '';
  if (page > 1)   html += `<button class="page-btn" onclick="(${onPage.toString()})(${page-1})">‹</button>`;
  for (let p = Math.max(1,page-2); p <= Math.min(pages,page+2); p++) {
    html += `<button class="page-btn${p===page?' active':''}" onclick="(${onPage.toString()})(${p})">${p}</button>`;
  }
  if (page < pages) html += `<button class="page-btn" onclick="(${onPage.toString()})(${page+1})">›</button>`;
  el.innerHTML = html;
}

// ── Confirm dialog ──
function confirmAction(msg, fn) {
  if (confirm(msg)) fn();
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  populateSidebarAdmin();
  // Bind logout button
  document.querySelectorAll('.logout-btn, #logoutBtn').forEach(b => {
    b.addEventListener('click', logout);
  });
  // Close modals on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
  });
});
