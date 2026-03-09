// ──────────────────────────────────────────────
// CARDS.JS — Card library, anatomy, lightbox
// ──────────────────────────────────────────────
import {
  CARD_COUNT, SPECIAL_START, FACTION_RANGES,
  getFactionForCard, isEchoCard, isSpecialCard,
  thumbPath, fullPath
} from './data/cards.js';

// ── STATE ──
let activeFaction = 'all';
let activeType    = 'all';
let activeView    = 'front';
let filteredCards = [];
let lightboxIdx   = 0;
let lightboxFlipped = false;

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  buildFactionPills();
  buildTypeFilter();
  buildViewFilter();
  buildAnatomyPanel();
  initAnatomyToggle();
  applyFilters();
  initLightbox();
});

// ── FACTION PILLS ──
function buildFactionPills() {
  const container = document.getElementById('faction-filter-pills');
  if (!container) return;

  const allBtn = document.createElement('button');
  allBtn.className = 'filter-pill active';
  allBtn.dataset.faction = 'all';
  allBtn.textContent = 'ALL';
  container.appendChild(allBtn);

  FACTION_RANGES.forEach(f => {
    const btn = document.createElement('button');
    btn.className = 'filter-pill';
    btn.dataset.faction = f.name;
    btn.textContent = f.special ? 'LEADERS & CITADELS' : f.name.toUpperCase();
    btn.style.setProperty('--pill-color', f.color);
    container.appendChild(btn);
  });

  container.addEventListener('click', e => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;
    container.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeFaction = pill.dataset.faction;
    applyFilters();
  });
}

// ── TYPE FILTER ──
function buildTypeFilter() {
  document.querySelectorAll('[data-type]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-type]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeType = btn.dataset.type;
      applyFilters();
    });
  });
}

// ── VIEW FILTER ──
function buildViewFilter() {
  document.querySelectorAll('[data-view]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-view]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeView = btn.dataset.view;
      renderGrid();
    });
  });
}

// ── FILTER LOGIC ──
function applyFilters() {
  filteredCards = [];
  for (let i = 0; i < CARD_COUNT; i++) {
    const faction  = getFactionForCard(i);
    const isEcho   = isEchoCard(i);
    const isSpec   = isSpecialCard(i);

    if (activeFaction !== 'all' && faction?.name !== activeFaction) continue;

    if (activeType === 'echo'    && !isEcho)           continue;
    if (activeType === 'unique'  && (isEcho || isSpec)) continue;
    if (activeType === 'special' && !isSpec)            continue;

    filteredCards.push(i);
  }

  const label = document.getElementById('card-count-label');
  if (label) label.textContent = `${filteredCards.length} of ${CARD_COUNT} cards`;

  renderGrid();
}

// ── RENDER GRID ──
function renderGrid() {
  const grid = document.getElementById('card-grid');
  if (!grid) return;

  const frag = document.createDocumentFragment();
  const side = activeView === 'back' ? 'backs' : 'fronts';
  const showGroupHeaders = activeFaction === 'all' && activeType !== 'special';

  let lastFactionName = null;

  filteredCards.forEach((cardIdx, filteredPos) => {
    const isSpec  = isSpecialCard(cardIdx);
    const isEcho  = isEchoCard(cardIdx);
    const faction = getFactionForCard(cardIdx);

    // Faction section header
    if (showGroupHeaders && faction && faction.name !== lastFactionName) {
      lastFactionName = faction.name;
      const header = document.createElement('div');
      header.className = 'faction-section-header';
      const label = faction.special ? 'LEADERS & CITADELS' : faction.name.toUpperCase();
      const exp   = faction.expansion ? ' — EXPANSION' : '';
      header.innerHTML = `
        <div class="faction-header-bar" style="background:${faction.color}"></div>
        <span class="faction-header-label" style="color:${faction.color}">${label}${exp}</span>
        <div class="faction-header-bar" style="background:${faction.color}"></div>
      `;
      frag.appendChild(header);
    }

    const wrap = document.createElement('div');
    wrap.className = 'card-thumb-wrap';
    wrap.dataset.cardIdx = cardIdx;
    wrap.dataset.filteredPos = filteredPos;

    const accentColor = faction?.color || '#555';
    wrap.style.borderTopColor = accentColor;
    wrap.style.setProperty('--card-accent', accentColor + '55');

    const img = document.createElement('img');
    img.className = 'card-thumb-img';
    img.src = thumbPath(cardIdx, side);
    img.alt = `Card ${cardIdx}`;
    img.loading = 'lazy';
    wrap.appendChild(img);

    if (isSpec) {
      const badge = document.createElement('div');
      badge.className = 'card-thumb-badge badge-leader';
      badge.textContent = 'LEADER';
      wrap.appendChild(badge);
    } else if (isEcho) {
      const badge = document.createElement('div');
      badge.className = 'card-thumb-badge badge-echo';
      badge.textContent = 'ECHO';
      wrap.appendChild(badge);
    }

    wrap.addEventListener('click', () => openLightbox(filteredPos));
    frag.appendChild(wrap);
  });

  grid.innerHTML = '';
  grid.appendChild(frag);
}

// ── LIGHTBOX ──
function initLightbox() {
  const lb       = document.getElementById('lightbox');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn  = document.getElementById('lightbox-prev');
  const nextBtn  = document.getElementById('lightbox-next');
  const flipBtn  = document.getElementById('lightbox-flip-btn');
  const card     = document.getElementById('lightbox-card');

  closeBtn.addEventListener('click', closeLightbox);
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  prevBtn.addEventListener('click', () => navigateLightbox(-1));
  nextBtn.addEventListener('click', () => navigateLightbox(1));
  flipBtn.addEventListener('click', flipLightbox);
  card.addEventListener('click', flipLightbox);

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   navigateLightbox(-1);
    if (e.key === 'ArrowRight')  navigateLightbox(1);
    if (e.key === 'f' || e.key === 'F') flipLightbox();
  });
}

function openLightbox(filteredPos) {
  lightboxIdx     = filteredPos;
  lightboxFlipped = false;
  renderLightboxCard();
  const lb = document.getElementById('lightbox');
  lb.classList.add('open');
  lb.removeAttribute('aria-hidden');
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
}

function navigateLightbox(dir) {
  lightboxIdx = (lightboxIdx + dir + filteredCards.length) % filteredCards.length;
  lightboxFlipped = false;
  renderLightboxCard();
}

function flipLightbox() {
  lightboxFlipped = !lightboxFlipped;
  document.getElementById('lightbox-card').classList.toggle('flipped', lightboxFlipped);
  document.getElementById('lightbox-flip-btn').textContent = lightboxFlipped ? 'FLIP TO FRONT' : 'FLIP CARD';
}

function renderLightboxCard() {
  const cardIdx  = filteredCards[lightboxIdx];
  const isSpec   = isSpecialCard(cardIdx);
  const faction  = getFactionForCard(cardIdx);
  const isEcho   = isEchoCard(cardIdx);

  const card     = document.getElementById('lightbox-card');
  const frontImg = document.getElementById('lightbox-front-img');
  const backImg  = document.getElementById('lightbox-back-img');
  const info     = document.getElementById('lightbox-info');
  const flipBtn  = document.getElementById('lightbox-flip-btn');

  card.classList.remove('flipped');
  card.classList.toggle('landscape', isSpec);
  flipBtn.textContent = 'FLIP CARD';

  frontImg.src = fullPath(cardIdx, 'fronts');
  backImg.src  = fullPath(cardIdx, 'backs');

  const typeLabel    = isSpec ? 'Leader / Citadel' : isEcho ? 'Echo' : 'Faction Card';
  const factionLabel = faction ? faction.name : '';
  info.innerHTML = `
    <span style="color:${faction?.color || 'var(--text-dim)'}">
      ${factionLabel}
    </span>
    &nbsp;·&nbsp; ${typeLabel}
    &nbsp;·&nbsp; Card ${lightboxIdx + 1} of ${filteredCards.length}
  `;
}

// ── ANATOMY PANEL ──
function initAnatomyToggle() {
  const toggle = document.getElementById('anatomy-toggle');
  const panel  = document.getElementById('anatomy-panel');
  if (!toggle || !panel) return;
  toggle.addEventListener('click', () => panel.classList.toggle('open'));
}

function buildAnatomyPanel() {
  const body = document.getElementById('anatomy-body');
  if (!body) return;

  const LABELS = [
    { top: '8%',  left: '8%',  num: 1, title: 'Card Name',          desc: 'The name of this card.' },
    { top: '48%', left: '5%',  num: 2, title: 'Card Type',           desc: 'Determines where it is played. May also have a subtype (Colony, Human, Mech, etc.).' },
    { top: '60%', left: '5%',  num: 3, title: 'Ability Text',        desc: 'The card\'s unique ability. Keywords are always defined on the card that contains them.' },
    { top: '82%', left: '5%',  num: 4, title: 'Flavor Text',         desc: 'Italicized lore text. Has no effect on the game.' },
    { top: '92%', left: '5%',  num: 5, title: 'Forge Cost / Health', desc: 'Bottom icons indicate forge cost (talents needed) or maximum health (for units).' },
    { top: '8%',  left: '80%', num: 6, title: 'Faction Symbol',      desc: 'Identifies which faction deck this card belongs to.' },
  ];

  const hotspotsHtml = LABELS.map(l => `
    <div class="anatomy-hotspot" style="top:${l.top};left:${l.left}">
      <div class="anatomy-hotspot-dot">${l.num}</div>
    </div>
  `).join('');

  const legendHtml = LABELS.map(l => `
    <div class="anatomy-legend-item">
      <div class="anatomy-legend-num">${l.num}</div>
      <div class="anatomy-legend-text">
        <strong>${l.title}</strong>
        <span>${l.desc}</span>
      </div>
    </div>
  `).join('');

  body.innerHTML = `
    <div class="anatomy-layout">
      <div class="anatomy-card-wrap">
        <img class="anatomy-card-img" src="assets/cards/fronts/card-000.jpg" alt="Anatomy example card" />
        ${hotspotsHtml}
      </div>
      <div class="anatomy-legend">${legendHtml}</div>
    </div>
    <div style="margin-top:1.25rem">
      <p style="font-size:0.82rem;color:var(--text-dim)">
        <strong style="color:var(--text-secondary)">Card back:</strong>
        Shows the forge track — a circular path with numbered spaces.
        Place a talent token on the first space when you put a card into the forge.
        Advance it clockwise each Upkeep phase (or accelerate by exhausting Citadel talents).
        Reveal the card when the token reaches the forge cost number.
      </p>
    </div>
  `;
}
