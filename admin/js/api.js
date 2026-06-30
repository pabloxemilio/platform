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

// ── Image upload to Supabase Storage ──
async function uploadImage(file, folder) {
  const fd = new FormData();
  fd.append('file', file);
  fd.append('folder', folder || 'misc');
  return api('POST', '/admin/upload', fd, true);   // returns { url, path }
}

// Wire an "Upload" button + hidden file input + preview to a URL text field.
// Requires elements: #<id> (text input), #<id>_btn (button), optional #<id>_prev (img).
function setupUploader(urlInputId, folder) {
  const urlInput = document.getElementById(urlInputId);
  const btn      = document.getElementById(urlInputId + '_btn');
  if (!urlInput || !btn) return;
  let fileInput = document.getElementById(urlInputId + '_file');
  if (!fileInput) {
    fileInput = document.createElement('input');
    fileInput.type = 'file'; fileInput.accept = 'image/*'; fileInput.id = urlInputId + '_file'; fileInput.style.display = 'none';
    document.body.appendChild(fileInput);
  }
  btn.onclick = () => fileInput.click();
  fileInput.onchange = async () => {
    const f = fileInput.files[0]; if (!f) return;
    const label = btn.textContent; btn.textContent = 'Uploading…'; btn.disabled = true;
    try {
      const { url } = await uploadImage(f, folder);
      urlInput.value = url;
      previewImg(urlInputId);
      showToast('Image uploaded', 'success');
    } catch (e) { showToast('Upload failed: ' + e.message, 'error'); }
    finally { btn.textContent = label; btn.disabled = false; fileInput.value = ''; }
  };
  urlInput.addEventListener('input', () => previewImg(urlInputId));
}
function previewImg(urlInputId) {
  const urlInput = document.getElementById(urlInputId);
  const prev = document.getElementById(urlInputId + '_prev');
  if (!urlInput || !prev) return;
  const v = urlInput.value.trim();
  if (v) { prev.src = v.startsWith('http') || v.startsWith('data:') ? v : '/' + v.replace(/^\//, ''); prev.style.display = 'block'; }
  else { prev.style.display = 'none'; }
}

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
  el.innerHTML = '';
  if (pages <= 1) return;
  // build real buttons + attach click handlers (do NOT stringify the callback into onclick)
  const mkBtn = (label, target, active) => {
    const b = document.createElement('button');
    b.className = 'page-btn' + (active ? ' active' : '');
    b.textContent = label;
    b.addEventListener('click', () => onPage(target));
    return b;
  };
  if (page > 1) el.appendChild(mkBtn('‹', page - 1, false));
  for (let p = Math.max(1, page - 2); p <= Math.min(pages, page + 2); p++) {
    el.appendChild(mkBtn(String(p), p, p === page));
  }
  if (page < pages) el.appendChild(mkBtn('›', page + 1, false));
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
