// ──────────────────────────────────────────────
// APP.JS — Navigation, section rendering, toggles
// ──────────────────────────────────────────────
import { GUIDE_SECTIONS, QUICK_REF } from './data/rules.js';
import { KEYWORDS, KEYWORD_ALIASES } from './data/keywords.js';
import { FACTIONS } from './data/factions.js';
import { annotateKeywords } from './tooltips.js';

// ── STATE ──
let activeSection = 'home';
let activeGuideId = 'intro';
let activeRefTab = 'glossary';

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initGuideSidebar();
  initRefTabs();
  initGlossarySearch();
  renderGuideSection(activeGuideId);
  renderRefContent(activeRefTab);
  initQuickNavCards();
});

// ── NAVIGATION ──
function initNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      navigateTo(section);
    });
  });
}

function navigateTo(sectionId) {
  activeSection = sectionId;

  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.section === sectionId);
  });
  document.querySelectorAll('.section').forEach(s => {
    s.classList.toggle('active', s.id === `section-${sectionId}`);
  });
}

function initQuickNavCards() {
  document.querySelectorAll('.quick-nav-card').forEach(card => {
    card.addEventListener('click', () => navigateTo(card.dataset.section));
  });
}

// ── GUIDE SECTION (unified LEARN + PLAY GUIDE) ──
function initGuideSidebar() {
  document.querySelectorAll('[data-guide]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-guide]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeGuideId = btn.dataset.guide;
      renderGuideSection(activeGuideId);
    });
  });
}

function renderGuideSection(id) {
  const container = document.getElementById('guide-content');
  const section = GUIDE_SECTIONS.find(s => s.id === id);
  if (!section || !container) return;
  container.innerHTML = `<div class="rules-block">${section.content}</div>`;
  annotateKeywords(container);
}

// ── REFERENCE SECTION ──
function initRefTabs() {
  document.querySelectorAll('.ref-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ref-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeRefTab = tab.dataset.ref;
      renderRefContent(activeRefTab);
      const searchBar = document.querySelector('.ref-search-bar');
      searchBar.style.display = activeRefTab === 'glossary' ? '' : 'none';
    });
  });
}

function renderRefContent(tab) {
  const container = document.getElementById('ref-content');
  if (tab === 'glossary') {
    renderGlossary(container, '');
  } else if (tab === 'factions') {
    renderFactions(container);
  } else if (tab === 'quickref') {
    renderQuickRef(container);
  }
}

// ── GLOSSARY ──
function initGlossarySearch() {
  const input = document.getElementById('glossary-search');
  input.addEventListener('input', () => {
    const container = document.getElementById('ref-content');
    renderGlossary(container, input.value.trim().toLowerCase());
  });
}

function renderGlossary(container, filter) {
  const entries = Object.entries(KEYWORDS)
    .filter(([term, data]) => {
      if (!filter) return true;
      return term.toLowerCase().includes(filter) ||
             data.definition.toLowerCase().includes(filter);
    })
    .sort((a, b) => a[0].localeCompare(b[0]));

  if (entries.length === 0) {
    container.innerHTML = '<p style="color:var(--text-dim);padding:1rem">No matching keywords found.</p>';
    return;
  }

  container.innerHTML = `<div class="glossary-grid">${
    entries.map(([term, data]) => `
      <div class="gloss-entry">
        <div class="gloss-term">${term}</div>
        <div class="gloss-def">${data.definition}<span class="page-ref gloss-page">[p. ${data.page}]</span></div>
      </div>
    `).join('')
  }</div>`;
}

// ── FACTIONS ──
function renderFactions(container) {
  const coreFactns = FACTIONS.filter(f => !f.expansion);
  const expFactns  = FACTIONS.filter(f => f.expansion);

  const renderCards = (factions) => factions.map(f => `
    <div class="faction-card" style="border-top-color: ${f.color}">
      ${f.expansion ? '<span class="expansion-badge">Exiles of Eden Expansion</span>' : ''}
      <div class="faction-name" style="color:${f.color}">${f.name}</div>
      <div class="faction-desc">${f.description}</div>
      <div class="faction-tip">
        <strong style="color:var(--text-secondary);font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase">Strategy: </strong>
        ${f.tip}
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div style="margin-bottom:1rem">
      <h3 style="color:var(--accent-gold);font-size:0.8rem;letter-spacing:0.12em;margin-bottom:1rem">CORE FACTIONS</h3>
      <div class="factions-grid">${renderCards(coreFactns)}</div>
    </div>
    <div style="margin-top:2rem">
      <h3 style="color:var(--accent-gold);font-size:0.8rem;letter-spacing:0.12em;margin-bottom:1rem">EXILES OF EDEN EXPANSION</h3>
      <div class="factions-grid">${renderCards(expFactns)}</div>
    </div>
  `;
  annotateKeywords(container);
}

// ── QUICK REFERENCE ──
function renderQuickRef(container) {
  container.innerHTML = `
    <div class="quickref-section">
      <h3>Turn Order <span class="page-ref">[p. 10]</span></h3>
      <table class="qr-table">
        <thead>
          <tr><th>#</th><th>Phase</th><th>Action</th></tr>
        </thead>
        <tbody>
          ${QUICK_REF.turnOrder.map((row, i) => `
            <tr>
              <td style="color:var(--accent-dim);font-family:var(--font-head);font-weight:800">${i+1}</td>
              <td style="color:var(--accent-gold);font-family:var(--font-head);font-weight:700">${row.phase}</td>
              <td>${row.action}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="quickref-section">
      <h3>Battle Phase Summary <span class="page-ref">[p. 26]</span></h3>
      <table class="qr-table">
        <thead>
          <tr><th>Step</th><th>Action</th></tr>
        </thead>
        <tbody>
          ${QUICK_REF.battleSummary.map(row => `
            <tr>
              <td style="color:var(--accent-gold);font-family:var(--font-head);font-weight:700;white-space:nowrap">${row.step}</td>
              <td>${row.desc}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="quickref-section">
      <h3>Deck &amp; Game Numbers <span class="page-ref">[p. 4]</span></h3>
      <table class="qr-table">
        <thead>
          <tr><th>Item</th><th>Amount</th></tr>
        </thead>
        <tbody>
          ${QUICK_REF.deckComp.map(row => `
            <tr>
              <td>${row.item}</td>
              <td style="color:var(--accent-amber);font-family:var(--font-head);font-weight:700">${row.count}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="quickref-section">
      <h3>When Can I Play Reflexes / Use Abilities? <span class="page-ref">[p. 19]</span></h3>
      <table class="qr-table">
        <thead>
          <tr><th>Phase</th><th>My Turn</th><th>Opponent's Turn</th></tr>
        </thead>
        <tbody>
          <tr><td>Growth</td><td style="color:var(--text-dim)">—</td><td style="color:var(--text-dim)">—</td></tr>
          <tr><td>Upkeep</td><td style="color:var(--text-dim)">—</td><td style="color:var(--text-dim)">—</td></tr>
          <tr><td>Forge</td><td style="color:#4a9eff">Yes</td><td style="color:var(--accent-gold)">Start &amp; End only</td></tr>
          <tr><td>Battle</td><td style="color:#4a9eff">Yes</td><td style="color:#4a9eff">Yes</td></tr>
          <tr><td>Move</td><td style="color:#4a9eff">Yes</td><td style="color:var(--accent-gold)">Start &amp; End only</td></tr>
          <tr><td>Draw</td><td style="color:var(--text-dim)">—</td><td style="color:var(--text-dim)">—</td></tr>
          <tr><td>Between Turns</td><td style="color:#4a9eff">Yes</td><td style="color:#4a9eff">Yes</td></tr>
        </tbody>
      </table>
    </div>
  `;
  annotateKeywords(container);
}
