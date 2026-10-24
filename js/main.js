import { designs, categories, CONTACT_URL } from './data.js';

const $ = (s) => document.querySelector(s);

// Размеры «виртуального экрана» внутри превью.
const VIEWPORTS = {
  desktop: { w: 1280, h: 800 },
  mobile: { w: 390, h: 844 },
};

let filter = 'all';

// ---------- Фильтры ----------
function renderFilters() {
  $('#filters').innerHTML = categories.map((c) => {
    const count = c.id === 'all' ? designs.length : designs.filter((d) => d.category === c.id).length;
    return `<button class="chip ${c.id === filter ? 'is-active' : ''}" data-filter="${c.id}">${c.name}<span>${count}</span></button>`;
  }).join('');
}

$('#filters').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-filter]');
  if (!btn || btn.dataset.filter === filter) return;
  filter = btn.dataset.filter;
  renderFilters();
  document.querySelectorAll('.card').forEach((card) => {
    card.hidden = filter !== 'all' && card.dataset.category !== filter;
  });
});

// ---------- Карточки ----------
const card = (d, i) => `
  <article class="card" data-category="${d.category}" data-mode="desktop" style="--i:${i}">
    <div class="card__preview">
      <a class="frame" href="works/${d.slug}.html" aria-label="Открыть сайт «${d.brand}»">
        <iframe src="works/${d.slug}.html" title="Превью: ${d.brand}" loading="lazy" tabindex="-1" scrolling="no"></iframe>
      </a>
      <div class="device" role="group" aria-label="Режим превью">
        <button class="is-active" data-mode="desktop" aria-label="Как на ПК">
          <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>
        </button>
        <button data-mode="mobile" aria-label="Как на телефоне">
          <svg viewBox="0 0 24 24"><rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/></svg>
        </button>
      </div>
    </div>
    <div class="card__body">
      <div class="card__head">
        <span class="card__num">${String(i + 1).padStart(2, '0')}</span>
        <span class="card__kind">${d.kind}</span>
      </div>
      <h2 class="card__title">${d.title} <span>· ${d.brand}</span></h2>
      <p class="card__desc">${d.description}</p>
      <div class="card__meta">
        <div class="palette" aria-label="Палитра">${d.palette.map((c) => `<i style="background:${c}" title="${c}"></i>`).join('')}</div>
        <span class="fonts">Аа · ${d.fonts}</span>
      </div>
      <div class="card__actions">
        <a class="btn btn--primary" href="works/${d.slug}.html">Открыть сайт ↗</a>
        <a class="btn" href="${CONTACT_URL}">Хочу такой</a>
      </div>
    </div>
  </article>`;

function fit(cardEl) {
  const frame = cardEl.querySelector('.frame');
  const iframe = frame.querySelector('iframe');
  const vp = VIEWPORTS[cardEl.dataset.mode];
  const box = frame.getBoundingClientRect();
  const scale = cardEl.dataset.mode === 'desktop' ? box.width / vp.w : (box.height - 24) / vp.h;
  iframe.style.width = `${vp.w}px`;
  iframe.style.height = `${vp.h}px`;
  iframe.style.transform = `scale(${scale})`;
}

function renderGallery() {
  $('#gallery').innerHTML = designs.map(card).join('');
  const ro = new ResizeObserver((entries) => entries.forEach((e) => fit(e.target.closest('.card'))));
  document.querySelectorAll('.card').forEach((c) => { ro.observe(c.querySelector('.frame')); fit(c); });
}

$('#gallery').addEventListener('click', (e) => {
  const btn = e.target.closest('.device button');
  if (!btn) return;
  const cardEl = btn.closest('.card');
  cardEl.dataset.mode = btn.dataset.mode;
  cardEl.querySelectorAll('.device button').forEach((b) => b.classList.toggle('is-active', b === btn));
  fit(cardEl);
});

// ---------- Тема ----------
$('#themeBtn').addEventListener('click', () => {
  const root = document.documentElement;
  const current = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  root.dataset.theme = current === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('designs_theme', root.dataset.theme); } catch { /* ignore */ }
});

$('#ctaBottom').href = CONTACT_URL;
renderFilters();
renderGallery();
