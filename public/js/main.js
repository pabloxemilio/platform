// ============================================================
//  AVAITOR CASINO - Main JavaScript
// ============================================================

/* ── Game Data ── */
const GAMES = [
  { id: 1,  name: 'Aviator',        provider: 'Spribe',    thumb: 'images/aviator_game.png',    badge: 'hot',     rtp: '97%',   category: ['crash','hot'] },
  { id: 2,  name: 'Fortune Slots',  provider: 'JILI',      thumb: 'images/slots_game.png',      badge: 'popular', rtp: '96.5%', category: ['slots','popular'] },
  { id: 3,  name: 'Live Roulette',  provider: 'Evolution', thumb: 'images/live_casino_game.png',badge: 'live',    rtp: '97.3%', category: ['live','popular'] },
  { id: 4,  name: 'Mines',          provider: 'Spribe',    thumb: 'images/mines_game.png',      badge: 'hot',     rtp: '97%',   category: ['crash','hot'] },
  { id: 5,  name: 'Sports Bet',     provider: 'JILI',      thumb: 'images/sports_game.png',     badge: 'new',     rtp: 'Live',  category: ['sports'] },
  { id: 6,  name: 'Happy Fishing',  provider: 'JILI',      thumb: 'images/fishing_game.png',    badge: 'popular', rtp: '96%',   category: ['fishing','popular'] },
  { id: 7,  name: 'Lucky Dice',     provider: 'Spribe',    thumb: 'images/dice_game.png',       badge: 'new',     rtp: '97.5%', category: ['crash','new'] },
  { id: 8,  name: 'Mega Slots',     provider: 'PG Soft',   thumb: 'images/slots_game.png',      badge: '',        rtp: '95.8%', category: ['slots'] },
  { id: 9,  name: 'Crash Gold',     provider: 'Spribe',    thumb: 'images/aviator_game.png',    badge: 'hot',     rtp: '97%',   category: ['crash','hot'] },
  { id: 10, name: 'Live Baccarat',  provider: 'Evolution', thumb: 'images/live_casino_game.png',badge: 'live',    rtp: '98.9%', category: ['live'] },
  { id: 11, name: 'Dragon Tiger',   provider: 'JILI',      thumb: 'images/live_casino_game.png',badge: 'popular', rtp: '96.3%', category: ['live','popular'] },
  { id: 12, name: 'Ocean King',     provider: 'JILI',      thumb: 'images/fishing_game.png',    badge: 'new',     rtp: '96%',   category: ['fishing','new'] },
];

const WINNERS = [
  { user: 'Ah***d',  game: 'Aviator',       amount: '₨ 45,200', color: '#FFD700', letter: 'A' },
  { user: 'Mo***n',  game: 'Fortune Slots', amount: '₨ 12,500', color: '#7C4DFF', letter: 'M' },
  { user: 'Ra***i',  game: 'Mines',         amount: '₨ 28,000', color: '#00E676', letter: 'R' },
  { user: 'Sa***a',  game: 'Live Roulette', amount: '₨ 8,750',  color: '#FF6B35', letter: 'S' },
  { user: 'Us***r',  game: 'Lucky Dice',    amount: '₨ 62,000', color: '#5C6BC0', letter: 'U' },
  { user: 'Al***i',  game: 'Happy Fishing', amount: '₨ 15,300', color: '#F06292', letter: 'A' },
  { user: 'Fa***l',  game: 'Dragon Tiger',  amount: '₨ 33,800', color: '#26C6DA', letter: 'F' },
  { user: 'Ha***n',  game: 'Aviator',       amount: '₨ 78,500', color: '#FFCA28', letter: 'H' },
];

const HERO_SLIDES = [
  {
    img: 'images/hero_banner.png',
    tag: '🔥 Most Popular',
    title: 'Play <span>Aviator</span>',
    subtitle: 'The #1 crash game — cash out before it flies away!',
    btnText: 'Play Now',
    btnClass: 'btn-gold',
  },
  {
    img: 'images/promo_banner1.png',
    tag: '🎁 Welcome Offer',
    title: 'Get <span>500%</span> Bonus',
    subtitle: 'New member welcome bonus on first deposit!',
    btnText: 'Claim Bonus',
    btnClass: 'btn-green',
  },
  {
    img: 'images/promo_banner2.png',
    tag: '👑 VIP Program',
    title: 'Join <span>VIP</span> Club',
    subtitle: 'Exclusive rewards, cashback & dedicated support.',
    btnText: 'Join Now',
    btnClass: 'btn-gold',
  },
];

// ── State ──
let currentSlide = 0;
let activeCategory = 'all';
let favorites = new Set();
let sidebarOpen = false;
let jackpotValue = 8_432_561.50;
let paymentMethods = [];

// ── DOM Helpers ──
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  renderHeroSlides();
  renderGames('all');
  renderWinnersTicker();
  startHeroAutoplay();
  startJackpotCounter();
  loadPaymentMethods();
  bindEvents();
  animateStats();
  animateOnScroll();
});

// ══════════════════════════════════════════
//  HERO CAROUSEL
// ══════════════════════════════════════════
function renderHeroSlides() {
  const carousel = $('#heroCarousel');
  if (!carousel) return;

  const slidesHTML = HERO_SLIDES.map((s, i) => `
    <div class="hero-slide ${i === 0 ? 'active' : ''}">
      <img src="${s.img}" alt="${s.title.replace(/<[^>]+>/g, '')}">
      <div class="hero-slide-overlay">
        <div class="hero-tag">${s.tag}</div>
        <h1 class="hero-title">${s.title}</h1>
        <p class="hero-subtitle">${s.subtitle}</p>
        <button class="btn ${s.btnClass}" onclick="handlePlayBtn('${s.btnText}')">${s.btnText}</button>
      </div>
    </div>
  `).join('');

  const dotsHTML = HERO_SLIDES.map((_, i) => `
    <div class="hero-dot ${i === 0 ? 'active' : ''}" data-slide="${i}"></div>
  `).join('');

  carousel.innerHTML = `
    ${slidesHTML}
    <div class="hero-arrows">
      <button class="hero-arrow" id="heroPrev">&#8249;</button>
      <button class="hero-arrow" id="heroNext">&#8250;</button>
    </div>
    <div class="hero-dots">${dotsHTML}</div>
  `;
}

function goToSlide(n) {
  const slides = $$('.hero-slide');
  const dots   = $$('.hero-dot');
  if (!slides.length) return;
  currentSlide = (n + slides.length) % slides.length;
  slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));
  dots.forEach((d, i)   => d.classList.toggle('active', i === currentSlide));
}

let heroInterval;
function startHeroAutoplay() {
  heroInterval = setInterval(() => goToSlide(currentSlide + 1), 4500);
}

// ── View Switching (SPA) ──
function switchView(viewId) {
  // Hide all view sections
  const views = document.querySelectorAll('.view-section');
  views.forEach(v => {
    v.style.display = 'none';
    v.classList.remove('active');
  });

  // Show the target view
  const target = document.getElementById(viewId);
  if (target) {
    target.style.display = 'block';
    target.classList.add('active');
  }

  // Close sidebar on mobile if it's open
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
  }
}

function handlePlayBtn(text) {
  if (typeof loggedIn === 'function' && !loggedIn()) {
    openModal('loginModal');
    showToast('Please log in to play!', 'warning');
  } else {
    showToast(`Loading game…`, 'success');
  }
}

// ══════════════════════════════════════════
//  GAME GRID
// ══════════════════════════════════════════
function renderGames(category) {
  activeCategory = category;
  const grid = $('#gameGrid');
  if (!grid) return;

  const filtered = category === 'all'
    ? GAMES
    : GAMES.filter(g => g.category.includes(category));

  grid.innerHTML = filtered.map(g => {
    const fav = favorites.has(g.id);
    return `
      <div class="game-card animate-fadeup" data-id="${g.id}" style="animation-delay:${filtered.indexOf(g) * 40}ms">
        <div class="game-card-thumb">
          <img src="${g.thumb}" alt="${g.name}" loading="lazy">
          ${g.badge ? `<span class="game-badge badge-${g.badge}">${g.badge === 'live' ? '🔴 LIVE' : g.badge.toUpperCase()}</span>` : ''}
          <button class="game-fav-btn ${fav ? 'active' : ''}" data-id="${g.id}" title="Favourite">
            ${fav ? '❤️' : '🤍'}
          </button>
          <div class="game-card-overlay">
            <div class="play-btn">▶</div>
          </div>
        </div>
        <div class="game-card-info">
          <div class="game-name">${g.name}</div>
          <div class="game-provider">
            <span>${g.provider}</span>
            <span class="game-rtp">${g.rtp}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Bind events to newly rendered cards
  $$('.game-card', grid).forEach(card => {
    const id = +card.dataset.id;
    card.addEventListener('click', (e) => {
      if (e.target.closest('.game-fav-btn')) return;
      openGame(id);
    });
  });
  $$('.game-fav-btn', grid).forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFav(+btn.dataset.id);
    });
  });

  // Update pill active states
  $$('.cat-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.cat === category);
  });
}

function openGame(id) {
  if (typeof loggedIn === 'function' && !loggedIn()) {
    openModal('loginModal');
    showToast('Login to play!', 'warning');
    return;
  }
  const g = GAMES.find(g => g.id === id);
  showToast(`🎮 Launching ${g.name}…`, 'success');
}

function toggleFav(id) {
  if (favorites.has(id)) {
    favorites.delete(id);
    showToast('Removed from favourites', 'warning');
  } else {
    favorites.add(id);
    showToast('❤️ Added to favourites!', 'success');
  }
  renderGames(activeCategory);
}

// ══════════════════════════════════════════
//  WINNERS TICKER
// ══════════════════════════════════════════
function renderWinnersTicker() {
  const track = $('#tickerTrack');
  if (!track) return;
  const doubled = [...WINNERS, ...WINNERS]; // duplicate for seamless loop
  track.innerHTML = doubled.map(w => `
    <div class="ticker-item">
      <div class="ticker-avatar" style="background: linear-gradient(135deg, ${w.color}40, ${w.color}20); color: ${w.color}; border: 1px solid ${w.color}40">
        ${w.letter}
      </div>
      <div class="ticker-info">
        <div class="ticker-user">${w.user}</div>
        <div class="ticker-game">${w.game}</div>
      </div>
      <div class="ticker-amount">${w.amount}</div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════
//  JACKPOT COUNTER
// ══════════════════════════════════════════
function startJackpotCounter() {
  const el = $('#jackpotAmount');
  if (!el) return;

  setInterval(() => {
    jackpotValue += Math.random() * 12 + 2;
    el.textContent = '₨ ' + jackpotValue.toLocaleString('en-PK', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  }, 350);
}

// ══════════════════════════════════════════
//  STATS ANIMATION
// ══════════════════════════════════════════
function animateStats() {
  const targets = [
    { el: document.getElementById('statOnline'),  end: 14892 },
    { el: document.getElementById('statWinners'), end: 3241  },
    { el: document.getElementById('statPayout'),  end: 98.4  },
  ];
  targets.forEach(({ el, end }) => {
    if (!el) return;
    let start = 0;
    const step = end / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { start = end; clearInterval(timer); }
      el.textContent = end < 100 ? start.toFixed(1) + '%' : Math.round(start).toLocaleString();
    }, 25);
  });
}

// ══════════════════════════════════════════
//  SCROLL ANIMATIONS
// ══════════════════════════════════════════
function animateOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  $$('.stat-card, .promo-card, .vip-banner, .jackpot-bar').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ══════════════════════════════════════════
//  MODAL MANAGEMENT
// ══════════════════════════════════════════
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Close on backdrop click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// (Mock auth functions removed — now handled by api.js)

// ══════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const icons = { success: '✅', error: '❌', warning: '⚠️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type !== 'success' ? type : ''}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.success}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => { toast.remove(); }, 3200);
}

// ══════════════════════════════════════════
//  SIDEBAR
// ══════════════════════════════════════════
function toggleSidebar() {
  const sidebar = document.getElementById('mainSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebarOpen = !sidebarOpen;
  sidebar?.classList.toggle('open', sidebarOpen);
  overlay?.classList.toggle('open', sidebarOpen);
}

function closeSidebar() {
  const sidebar = document.getElementById('mainSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebarOpen = false;
  sidebar?.classList.remove('open');
  overlay?.classList.remove('open');
}

// ══════════════════════════════════════════
//  BIND ALL EVENTS
// ══════════════════════════════════════════
function bindEvents() {
  // Hero nav
  document.addEventListener('click', (e) => {
    if (e.target.id === 'heroPrev') { clearInterval(heroInterval); goToSlide(currentSlide - 1); startHeroAutoplay(); }
    if (e.target.id === 'heroNext') { clearInterval(heroInterval); goToSlide(currentSlide + 1); startHeroAutoplay(); }
    if (e.target.classList.contains('hero-dot')) {
      clearInterval(heroInterval);
      goToSlide(+e.target.dataset.slide);
      startHeroAutoplay();
    }
    // Modal open triggers
    if (e.target.dataset.modal) openModal(e.target.dataset.modal);
    // Modal close
    if (e.target.dataset.closeModal) closeModal(e.target.dataset.closeModal);
    // Modal tab switch
    if (e.target.classList.contains('modal-tab')) {
      $$('.modal-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
    }
    // Nav items
    if (e.target.closest('.nav-item')) {
      $$('.nav-item').forEach(n => n.classList.remove('active'));
      e.target.closest('.nav-item').classList.add('active');
    }
    // Bottom nav
    if (e.target.closest('.bnav-item')) {
      $$('.bnav-item').forEach(n => n.classList.remove('active'));
      e.target.closest('.bnav-item').classList.add('active');
    }
    // Category pills
    if (e.target.closest('.cat-pill')) {
      const cat = e.target.closest('.cat-pill').dataset.cat;
      renderGames(cat);
    }
    // Sidebar toggle
    if (e.target.id === 'sidebarToggle' || e.target.closest('#sidebarToggle')) toggleSidebar();
    // Sidebar overlay
    if (e.target.id === 'sidebarOverlay') closeSidebar();
    // Logout
    if (e.target.id === 'logoutBtn') handleLogout();
    // Password toggle
    if (e.target.classList.contains('input-password-toggle')) {
      const input = e.target.previousElementSibling;
      if (input) {
        input.type = input.type === 'password' ? 'text' : 'password';
        e.target.textContent = input.type === 'password' ? '👁️' : '🙈';
      }
    }
    // Deposit / Withdraw buttons (sidebar)
    if (e.target.id === 'depositBtn') {
      if (typeof loggedIn === 'function' && !loggedIn()) { openModal('loginModal'); return; }
      openModal('depositModal');
    }
    if (e.target.id === 'withdrawBtn') {
      if (typeof loggedIn === 'function' && !loggedIn()) { openModal('loginModal'); return; }
      openModal('withdrawModal');
    }
  });

  // Dynamic payment method tab click
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('payment-method-tab')) {
      const type = e.target.dataset.type; // 'deposit' or 'withdraw'
      document.querySelectorAll(`#${type}Tabs .payment-method-tab`).forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      
      const id = e.target.dataset.id;
      const method = paymentMethods.find(m => m.id === id);
      if (!method) return;

      document.getElementById(`${type}MethodId`).value = method.id;
      document.getElementById(`${type}MethodName`).value = method.name;

      const instructions = document.getElementById(`${type}Instructions`);
      if (instructions) {
        if (method.instructions) {
          instructions.style.display = 'block';
          instructions.textContent = method.instructions;
        } else {
          instructions.style.display = 'none';
        }
      }

      if (type === 'deposit') {
        const details = document.getElementById('depositDetails');
        if (details) {
          if (method.details && Object.keys(method.details).length > 0) {
            details.style.display = 'block';
            details.innerHTML = Object.entries(method.details).map(([k,v]) => `<div><strong>${k}:</strong> ${v}</div>`).join('');
          } else {
            details.style.display = 'none';
          }
        }
        const amt = document.getElementById('depositAmount');
        if (method.min_amount) amt.placeholder = `Min. ₨ ${method.min_amount}`;
        else amt.placeholder = `Amount (PKR)`;
      } else {
        const amt = document.getElementById('withdrawAmount');
        if (method.min_amount) amt.placeholder = `Min. ₨ ${method.min_amount}`;
        else amt.placeholder = `Amount (PKR)`;
      }
    }
  });

  // Login form
  $('#loginForm')?.addEventListener('submit', handleLogin);
  // Register form
  $('#registerForm')?.addEventListener('submit', handleRegister);

  // Search bar
  $('#searchInput')?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) { renderGames(activeCategory); return; }
    const grid = $('#gameGrid');
    if (!grid) return;
    const filtered = GAMES.filter(g =>
      g.name.toLowerCase().includes(q) || g.provider.toLowerCase().includes(q)
    );
    grid.innerHTML = filtered.length
      ? filtered.map(g => buildGameCardHTML(g)).join('')
      : '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted)">No games found for "' + q + '"</div>';
  });

  // Note: Form submission listeners (login, register, deposit, withdraw)
  // are handled in api.js to connect to the real backend.
}

// ══════════════════════════════════════════
//  PAYMENT METHODS
// ══════════════════════════════════════════
async function loadPaymentMethods() {
  try {
    const res = await fetch('/api/payment-methods');
    if (!res.ok) return;
    const data = await res.json();
    paymentMethods = data.payment_methods || [];
    
    renderPaymentTabs('deposit');
    renderPaymentTabs('withdraw');
  } catch (e) {
    console.warn('Could not load payment methods');
  }
}

function renderPaymentTabs(type) {
  const container = document.getElementById(`${type}Tabs`);
  if (!container) return;

  const filtered = paymentMethods.filter(m => m.type === type || m.type === 'both');
  
  if (filtered.length === 0) {
    container.innerHTML = `<div class="text-muted text-sm">No ${type} methods available.</div>`;
    return;
  }

  container.innerHTML = filtered.map((m, i) => `
    <div class="modal-tab payment-method-tab ${i === 0 ? 'active' : ''}" data-type="${type}" data-id="${m.id}">${m.name}</div>
  `).join('');

  // Trigger click on first tab to initialize the form
  const firstTab = container.querySelector('.payment-method-tab');
  if (firstTab) firstTab.click();
}

function buildGameCardHTML(g) {
  const fav = favorites.has(g.id);
  return `
    <div class="game-card animate-fadeup" data-id="${g.id}">
      <div class="game-card-thumb">
        <img src="${g.thumb}" alt="${g.name}" loading="lazy">
        ${g.badge ? `<span class="game-badge badge-${g.badge}">${g.badge === 'live' ? '🔴 LIVE' : g.badge.toUpperCase()}</span>` : ''}
        <button class="game-fav-btn ${fav ? 'active' : ''}" data-id="${g.id}">
          ${fav ? '❤️' : '🤍'}
        </button>
        <div class="game-card-overlay"><div class="play-btn">▶</div></div>
      </div>
      <div class="game-card-info">
        <div class="game-name">${g.name}</div>
        <div class="game-provider"><span>${g.provider}</span><span class="game-rtp">${g.rtp}</span></div>
      </div>
    </div>`;
}

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
      return `<tr>
        <td>${t.date.toLocaleDateString()} ${t.date.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</td>
        <td><span class="badge ${isDep ? 'badge-active' : 'badge-inactive'}" style="background:${isDep ? 'rgba(0,255,136,0.1)' : 'rgba(255,51,102,0.1)'}; color:${isDep ? 'var(--green)' : 'var(--red)'}">${t.type}</span></td>
        <td class="${isDep ? 'text-green' : 'text-red'}">${isDep ? '+' : '-'}₨${parseFloat(t.amount).toLocaleString()}</td>
        <td style="text-transform:capitalize;">${t.method}</td>
        <td><span class="badge ${badgeCls}" style="text-transform:capitalize;">${t.status}</span></td>
      </tr>`;
    }).join('');
    
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="5" class="table-empty" style="color:var(--red)">Failed to load transactions</td></tr>`;
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
        document.getElementById('vipCurrentWager').textContent = `₨${wager.toLocaleString()} wagered`;
        document.getElementById('vipNextTier').textContent = wager >= 500000 ? 'Max Tier Reached' : `Next Tier: ${nxtName} (₨${nxt.toLocaleString()})`;
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

