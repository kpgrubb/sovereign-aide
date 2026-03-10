// ──────────────────────────────────────────────
// CARDS.JS — Card library, anatomy, lightbox
// ──────────────────────────────────────────────
import {
  CARD_COUNT, SPECIAL_START, FACTION_RANGES,
  getFactionForCard, isEchoCard, isSpecialCard, isTokenCard, isLandscapeCard,
  thumbPath, fullPath
} from './data/cards.js';

// ── STATE ──
let activeFaction = 'all';
let activeType    = 'noecho';
let activeSide    = 'front';   // 'front' | 'back'
let filteredCards = [];
let lightboxIdx   = 0;

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  buildFactionPills();
  buildTypeFilter();
  buildSideToggle();
  buildAnatomyPanel();
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

// ── SIDE TOGGLE ──
function buildSideToggle() {
  document.querySelectorAll('[data-side]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-side]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSide = btn.dataset.side;
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
    const isToken  = isTokenCard(i);

    if (isToken) continue;  // always exclude printing-artifact token cards

    if (activeFaction !== 'all' && faction?.name !== activeFaction) continue;

    if (activeType === 'noecho'  && isEcho)             continue;
    if (activeType === 'echo'    && !isEcho)            continue;
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

    const isLand = isLandscapeCard(cardIdx);
    if (isLand) wrap.classList.add('landscape');

    const img = document.createElement('img');
    img.className = 'card-thumb-img';
    img.src = thumbPath(cardIdx, activeSide);
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

  closeBtn.addEventListener('click', closeLightbox);
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  prevBtn.addEventListener('click', () => navigateLightbox(-1));
  nextBtn.addEventListener('click', () => navigateLightbox(1));

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(filteredPos) {
  lightboxIdx = filteredPos;
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
  renderLightboxCard();
}

function renderLightboxCard() {
  const cardIdx = filteredCards[lightboxIdx];
  const isSpec  = isSpecialCard(cardIdx);
  const faction = getFactionForCard(cardIdx);
  const isEcho  = isEchoCard(cardIdx);

  const img  = document.getElementById('lightbox-front-img');
  const info = document.getElementById('lightbox-info');

  img.src = fullPath(cardIdx, activeSide);

  const typeLabel    = isSpec ? 'Leader / Citadel' : isEcho ? 'Echo' : 'Faction Card';
  const factionLabel = faction ? faction.name : '';
  info.innerHTML = `
    <span style="color:${faction?.color || 'var(--text-dim)'}">${factionLabel}</span>
    &nbsp;·&nbsp; ${typeLabel}
    &nbsp;·&nbsp; ${lightboxIdx + 1} of ${filteredCards.length}
  `;
}

// ── ANATOMY ──
const ANATOMY_EXAMPLES = [
  {
    id: 'facility',
    label: 'Colony / Facility',
    cardIdx: 0,
    note: 'Played into your tableau. Generates resources and provides passive abilities each turn.',
    hotspots: [
      { top:  '7%', left: '50%', num: 1, title: 'Card Name',      desc: 'The name of this card.' },
      { top: '55%', left: '6%',  num: 2, title: 'Card Type',      desc: 'Colony or Facility — determines the zone where it\'s played. May include a subtype (Colony — Factory, Facility — Lab, etc.).' },
      { top: '69%', left: '6%',  num: 3, title: 'Ability Text',   desc: 'The card\'s unique ability. Card text always overrides the rulebook when there\'s a conflict.' },
      { top: '81%', left: '6%',  num: 4, title: 'Flavor Text',    desc: 'Italicized lore. No in-game effect — just atmosphere.' },
      { top: '93%', left: '6%',  num: 5, title: 'Forge Cost',     desc: 'Number of Talent tokens required to forge this card. Pay this from your Citadel during the Forge phase.' },
      { top: '93%', left: '88%', num: 6, title: 'Faction Symbol', desc: 'Identifies which faction deck this card belongs to.' },
    ],
  },
  {
    id: 'unit',
    label: 'Unit',
    cardIdx: 1,
    note: 'Deployed to battle lanes. Units attack opponents, defend your Citadel, and activate lane abilities.',
    hotspots: [
      { top:  '7%', left: '50%', num: 1, title: 'Card Name',       desc: 'The name of this unit.' },
      { top: '55%', left: '6%',  num: 2, title: 'Card Type',       desc: 'Unit — with a subtype (Human, Mech, Drone, Airborne, etc.) that may interact with other abilities.' },
      { top: '69%', left: '6%',  num: 3, title: 'Ability Text',    desc: 'Passive or triggered effects. Keywords like Airborne, Squad, and Resilient appear here and are defined on this card.' },
      { top: '81%', left: '6%',  num: 4, title: 'Flavor Text',     desc: 'Italicized lore. No in-game effect.' },
      { top: '93%', left: '6%',  num: 5, title: 'Attack / Health', desc: 'Two icons at the bottom: Attack (damage this unit deals) and Health (damage needed to destroy it).' },
      { top: '93%', left: '88%', num: 6, title: 'Faction Symbol',  desc: 'Identifies which faction deck this card belongs to.' },
    ],
  },
  {
    id: 'reflex',
    label: 'Reflex',
    cardIdx: 2,
    note: 'Played instantly — even during your opponent\'s turn. Resolves immediately, then goes to the discard pile.',
    hotspots: [
      { top:  '7%', left: '50%', num: 1, title: 'Card Name',      desc: 'The name of this reflex card.' },
      { top: '52%', left: '6%',  num: 2, title: 'Card Type',      desc: 'Reflex — can be played at any time, even mid-battle or during your opponent\'s phase.' },
      { top: '67%', left: '6%',  num: 3, title: 'Effect',         desc: 'A single, immediate effect. After it resolves, this card is discarded — it never enters the forge.' },
      { top: '80%', left: '6%',  num: 4, title: 'Flavor Text',    desc: 'Italicized lore. No in-game effect.' },
      { top: '93%', left: '6%',  num: 5, title: 'Forge Cost',     desc: 'Talents required to put this card into your forge.' },
      { top: '93%', left: '88%', num: 6, title: 'Faction Symbol', desc: 'Identifies which faction deck this card belongs to.' },
    ],
  },
  {
    id: 'echo',
    label: 'Echo',
    cardIdx: 30,
    note: 'Your victory points. Score 10 Echoes (or 12 in 2-player) to win. Each faction deck contains 20 Echoes.',
    hotspots: [
      { top: '15%', left: '50%', num: 1, title: 'Echo',           desc: 'This card is an Echo — worth 1 point toward your win condition when scored.' },
      { top: '50%', left: '6%',  num: 2, title: 'Echo Bonus',     desc: 'Some Echoes grant an immediate bonus when scored: a resource, card draw, or special effect.' },
      { top: '75%', left: '6%',  num: 3, title: 'Flavor Text',    desc: 'Italicized lore. No in-game effect.' },
      { top: '93%', left: '88%', num: 4, title: 'Faction Symbol', desc: 'Identifies which faction this Echo belongs to.' },
    ],
  },
  {
    id: 'leader',
    label: 'Leader / Citadel',
    cardIdx: 531,
    landscape: true,
    note: 'Unique to each faction. Your Citadel starts in play; it anchors your strategy and can exhaust to accelerate forging.',
    hotspots: [
      { top: '18%', left: '12%', num: 1, title: 'Card Name',      desc: 'The name of this Leader or Citadel.' },
      { top: '50%', left: '6%',  num: 2, title: 'Card Type',      desc: 'Leader or Citadel. These are not forged — they start the game in play.' },
      { top: '67%', left: '6%',  num: 3, title: 'Ability',        desc: 'A powerful, faction-defining ability. Citadels can also exhaust Talent tokens to move your forge track forward.' },
      { top: '85%', left: '6%',  num: 4, title: 'Health',         desc: 'Damage required to destroy this card. If your Citadel is destroyed, you lose the game.' },
      { top: '18%', left: '80%', num: 5, title: 'Faction Symbol', desc: 'Identifies the faction this card belongs to.' },
    ],
  },
];

function buildAnatomyPanel() {
  const tabsEl     = document.getElementById('anatomy-tabs');
  const examplesEl = document.getElementById('anatomy-examples');
  if (!tabsEl || !examplesEl) return;

  // Build tabs
  ANATOMY_EXAMPLES.forEach((ex, i) => {
    const btn = document.createElement('button');
    btn.className = 'anatomy-tab' + (i === 0 ? ' active' : '');
    btn.dataset.exampleId = ex.id;
    btn.textContent = ex.label.toUpperCase();
    tabsEl.appendChild(btn);
  });

  // Build example panels
  ANATOMY_EXAMPLES.forEach((ex, i) => {
    const panel = document.createElement('div');
    panel.className = 'anatomy-example' + (i === 0 ? ' active' : '');
    panel.dataset.exampleId = ex.id;

    const imgSrc = fullPath(ex.cardIdx, 'front');

    const hotspotsHtml = ex.hotspots.map(h => `
      <button class="anatomy-hotspot" data-num="${h.num}"
              style="top:${h.top};left:${h.left}"
              aria-label="${h.title}">
        <span class="anatomy-hotspot-dot">${h.num}</span>
      </button>
    `).join('');

    const legendHtml = ex.hotspots.map(h => `
      <div class="anatomy-legend-item" data-num="${h.num}">
        <div class="anatomy-legend-num">${h.num}</div>
        <div class="anatomy-legend-text">
          <strong>${h.title}</strong>
          <span>${h.desc}</span>
        </div>
      </div>
    `).join('');

    panel.innerHTML = `
      <div class="anatomy-layout${ex.landscape ? ' landscape' : ''}">
        <div class="anatomy-card-wrap">
          <img class="anatomy-card-img${ex.landscape ? ' landscape' : ''}"
               src="${imgSrc}" alt="${ex.label} example card" />
          ${hotspotsHtml}
        </div>
        <div class="anatomy-right">
          <p class="anatomy-note">${ex.note}</p>
          <div class="anatomy-legend">${legendHtml}</div>
        </div>
      </div>
    `;

    examplesEl.appendChild(panel);
    initAnatomyInteraction(panel);
  });

  // Tab switching
  tabsEl.addEventListener('click', e => {
    const btn = e.target.closest('.anatomy-tab');
    if (!btn) return;
    tabsEl.querySelectorAll('.anatomy-tab').forEach(t => t.classList.remove('active'));
    examplesEl.querySelectorAll('.anatomy-example').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    examplesEl.querySelector(`[data-example-id="${btn.dataset.exampleId}"]`)?.classList.add('active');
  });
}

function initAnatomyInteraction(panel) {
  const hotspots   = panel.querySelectorAll('.anatomy-hotspot');
  const legendItems = panel.querySelectorAll('.anatomy-legend-item');

  function setActive(num) {
    hotspots.forEach(h => h.classList.toggle('active', h.dataset.num === num));
    legendItems.forEach(l => l.classList.toggle('active', l.dataset.num === num));
  }
  function clearActive() {
    hotspots.forEach(h => h.classList.remove('active'));
    legendItems.forEach(l => l.classList.remove('active'));
  }

  hotspots.forEach(h => {
    h.addEventListener('mouseenter', () => setActive(h.dataset.num));
    h.addEventListener('mouseleave', clearActive);
    h.addEventListener('focus',      () => setActive(h.dataset.num));
    h.addEventListener('blur',       clearActive);
  });
  legendItems.forEach(l => {
    l.addEventListener('mouseenter', () => setActive(l.dataset.num));
    l.addEventListener('mouseleave', clearActive);
  });
}
