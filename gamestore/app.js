/* Utilities */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* HERO CAROUSEL */
(function initHero() {
  const slides = $$('#hero-slides .slide');
  const dotsWrap = $('#hero-dots');
  let idx = 0; let timer;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => go(i));
    dotsWrap.appendChild(dot);
  });

  const dots = $$('#hero-dots button');

  function setActive(i) {
    slides.forEach(s => s.classList.remove('is-active'));
    dots.forEach(d => d.classList.remove('is-active'));
    slides[i].classList.add('is-active');
    dots[i].classList.add('is-active');
  }

  function go(i) { idx = (i + slides.length) % slides.length; setActive(idx); restart(); }
  function next() { go(idx + 1); }
  function prev() { go(idx - 1); }
  function restart() { clearInterval(timer); timer = setInterval(next, 5000); }

  $('#hero-next').addEventListener('click', next);
  $('#hero-prev').addEventListener('click', prev);

  setActive(0); restart();
})();

/* COUNTDOWN */
(function initCountdown() {
  // Set target to 3 days from now
  const target = Date.now() + 3 * 24 * 60 * 60 * 1000;
  const el = {
    d: $('#cd-days'), h: $('#cd-hours'), m: $('#cd-mins'), s: $('#cd-secs')
  };
  const fmt = (n) => String(n).padStart(2, '0');
  const tick = () => {
    const diff = Math.max(0, target - Date.now());
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    el.d.textContent = fmt(days); el.h.textContent = fmt(hours); el.m.textContent = fmt(mins); el.s.textContent = fmt(secs);
  };
  tick(); setInterval(tick, 1000);
})();

/* TABS + CATALOG CONTENT */
const catalogData = {
  topup: [
    { name: 'Mobile Legends', brand: 'Moonton' },
    { name: 'Free Fire', brand: 'Garena' },
    { name: 'PUBG Mobile', brand: 'Tencent' },
    { name: 'Genshin Impact', brand: 'HoYoVerse' },
    { name: 'Honor of Kings', brand: 'Tencent' },
    { name: 'Arena of Valor', brand: 'Garena' },
  ],
  ewallet: [
    { name: 'GoPay', brand: 'Gojek' },
    { name: 'OVO', brand: 'OVO' },
    { name: 'DANA', brand: 'DANA' },
    { name: 'ShopeePay', brand: 'Shopee' },
    { name: 'LinkAja', brand: 'Telkomsel' },
    { name: 'PayPal', brand: 'International' },
  ],
  pulsa: [
    { name: 'Telkomsel', brand: 'PT Telekomunikasi' },
    { name: 'Indosat', brand: 'PT Indosat Tbk' },
    { name: 'by.U', brand: 'Telkomsel' },
    { name: 'Axis', brand: 'XL Axiata' },
    { name: 'Tri', brand: 'Indosat Ooredoo Hutchison' },
    { name: 'XL', brand: 'XL Axiata' },
    { name: 'Smartfren', brand: 'PT Smartfren' },
  ],
};

function renderCatalog(key = 'topup') {
  const wrap = $('#catalog');
  const items = catalogData[key];
  wrap.innerHTML = items.map((it) => `
    <a class="catalog-card" href="#">
      <div class="frame"><div class="phone"></div></div>
      <div class="meta">
        <b>${it.name}</b>
        <span>${it.brand}</span>
      </div>
    </a>
  `).join('');
}

(function initTabs() {
  const chips = $$('.chip');
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      renderCatalog(chip.dataset.tab);
    });
  });
  $('#tab-prev').addEventListener('click', () => $('#tabs-scroller').scrollBy({ left: -200, behavior: 'smooth' }));
  $('#tab-next').addEventListener('click', () => $('#tabs-scroller').scrollBy({ left: 200, behavior: 'smooth' }));
  renderCatalog('topup');
})();

/* GAMES GRID */
const games = [
  { title: 'Mobile Legends', vendor: 'Moonton', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Free Fire', vendor: 'Garena', img: 'https://images.unsplash.com/photo-1542751371-1243c0d99dd3?q=80&w=1200&auto=format&fit=crop' },
  { title: 'PUBG Mobile', vendor: 'Tencent', img: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Genshin Impact', vendor: 'HoYoVerse', img: 'https://images.unsplash.com/photo-1613219465335-1a0f8f7d8c5e?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Blood Strike', vendor: 'NetEase', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Honor of Kings', vendor: 'Tencent', img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop' },
  { title: 'FC Mobile', vendor: 'EA Sports', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Arena of Valor', vendor: 'Garena', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Call of Duty Mobile', vendor: 'Garena', img: 'https://images.unsplash.com/photo-1558211583-d26d1e5a66a1?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Undawn', vendor: 'Garena', img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Point Blank', vendor: 'Zepetto', img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Super Sus', vendor: 'PIProduction', img: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?q=80&w=1200&auto=format&fit=crop' },
];
(function renderGames() {
  const grid = $('#games-grid');
  grid.innerHTML = games.map(g => `
    <a class="game-card" href="#">
      <div class="game-thumb" style="background-image:url('${g.img}');"></div>
      <div class="game-meta"><b>${g.title}</b><span>${g.vendor}</span></div>
    </a>
  `).join('');
})();

/* Chat btn */
$('#chat-btn').addEventListener('click', () => {
  alert('Halo! Ada yang bisa kami bantu?');
});

/* Minor: search input focus glow */
$('#search-input').addEventListener('focus', (e) => e.target.closest('.search').style.boxShadow = `0 0 0 3px var(--ring)`);
$('#search-input').addEventListener('blur', (e) => e.target.closest('.search').style.boxShadow = 'none');