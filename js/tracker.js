// ──────────────────────────────────────────────
// TRACKER.JS — Echo/Citizen/Phase/Turn tracking
// ──────────────────────────────────────────────
import { FACTIONS, FACTION_NAMES } from './data/factions.js';

const STORAGE_KEY = 'sovereign-game-state';
const PHASES = ['Growth', 'Upkeep', 'Forge', 'Battle', 'Move', 'Draw'];

// ── DEFAULT STATE ──
function defaultState() {
  return {
    running: false,
    playerCount: 2,
    winCondition: 10,
    currentTurn: 0,     // player index
    currentPhase: 0,    // phase index
    players: []
  };
}

function defaultPlayer(index) {
  return {
    name: `Player ${index + 1}`,
    faction: FACTIONS[index % FACTIONS.length].name,
    echoes: 0,
    talents: 0,
    drones: 0
  };
}

// ── STATE ──
let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return defaultState();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initSetupPanel();
  if (state.running) {
    showGameTracker();
  } else {
    showSetupPanel();
  }
});

// ── SETUP PANEL ──
function initSetupPanel() {
  // Player count buttons
  document.querySelectorAll('.player-count-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.player-count-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.playerCount = parseInt(btn.dataset.count);
      renderPlayerSetupRows();
    });
  });

  // Win condition buttons
  document.querySelectorAll('.win-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.win-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.winCondition = parseInt(btn.dataset.win);
    });
  });

  // Start game
  document.getElementById('start-game-btn').addEventListener('click', startGame);

  // Sync UI to saved state
  document.querySelectorAll('.player-count-btn').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.count) === state.playerCount);
  });
  document.querySelectorAll('.win-btn').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.win) === state.winCondition);
  });

  renderPlayerSetupRows();
}

function renderPlayerSetupRows() {
  const container = document.getElementById('player-setup-rows');
  const count = state.playerCount;

  // Ensure we have enough player defaults
  while (state.players.length < count) {
    state.players.push(defaultPlayer(state.players.length));
  }

  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const player = state.players[i];
    const row = document.createElement('div');
    row.className = 'player-setup-row';

    const factionOptions = FACTIONS.map(f =>
      `<option value="${f.name}" ${f.name === player.faction ? 'selected' : ''}>${f.name}${f.expansion ? ' ★' : ''}</option>`
    ).join('');

    row.innerHTML = `
      <span class="player-num">Player ${i + 1}</span>
      <input type="text" placeholder="Player name" value="${escHtml(player.name)}" data-player="${i}" data-field="name" />
      <select class="faction-select" data-player="${i}" data-field="faction">
        ${factionOptions}
      </select>
    `;
    container.appendChild(row);
  }

  // Bind inputs
  container.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('change', e => {
      const idx = parseInt(e.target.dataset.player);
      const field = e.target.dataset.field;
      state.players[idx][field] = e.target.value;
    });
    if (input.tagName === 'INPUT') {
      input.addEventListener('input', e => {
        const idx = parseInt(e.target.dataset.player);
        state.players[idx].name = e.target.value;
      });
    }
  });
}

function startGame() {
  // Capture any final input values
  document.querySelectorAll('#player-setup-rows input').forEach(inp => {
    const idx = parseInt(inp.dataset.player);
    state.players[idx].name = inp.value || `Player ${idx + 1}`;
  });

  // Trim players to count
  state.players = state.players.slice(0, state.playerCount).map((p, i) => ({
    ...defaultPlayer(i),
    name: p.name,
    faction: p.faction
  }));

  state.running = true;
  state.currentTurn = 0;
  state.currentPhase = 0;
  saveState();
  showGameTracker();
}

// ── GAME TRACKER ──
function showSetupPanel() {
  document.getElementById('tracker-setup').classList.remove('hidden');
  document.getElementById('tracker-game').classList.add('hidden');
}

function showGameTracker() {
  document.getElementById('tracker-setup').classList.add('hidden');
  document.getElementById('tracker-game').classList.remove('hidden');
  renderTracker();
  initTrackerControls();
}

function initTrackerControls() {
  const nextBtn = document.getElementById('next-phase-btn');
  const resetBtn = document.getElementById('reset-game-btn');

  // Re-bind (avoid duplicate listeners by cloning)
  const newNext = nextBtn.cloneNode(true);
  const newReset = resetBtn.cloneNode(true);
  nextBtn.parentNode.replaceChild(newNext, nextBtn);
  resetBtn.parentNode.replaceChild(newReset, resetBtn);

  newNext.addEventListener('click', advancePhase);
  newReset.addEventListener('click', () => {
    if (confirm('Reset game and return to setup?')) {
      state = defaultState();
      saveState();
      showSetupPanel();
    }
  });
}

function renderTracker() {
  renderPhaseIndicator();
  renderPlayerCards();
}

function renderPhaseIndicator() {
  const container = document.getElementById('phase-indicator');
  container.innerHTML = PHASES.map((p, i) => `
    <div class="phase-pip ${i === state.currentPhase ? 'active' : ''}">
      <div class="phase-pip-dot"></div>
      <div class="phase-pip-label">${p.toUpperCase()}</div>
    </div>
    ${i < PHASES.length - 1 ? '<span class="phase-separator">›</span>' : ''}
  `).join('');

  // Show current player label
  const player = state.players[state.currentTurn];
  const label = document.createElement('div');
  label.className = 'current-player-label';
  label.style.marginLeft = '1.5rem';
  label.innerHTML = `Turn: <span>${escHtml(player.name)}</span> · Phase: <span>${PHASES[state.currentPhase]}</span>`;
  container.appendChild(label);
}

function advancePhase() {
  state.currentPhase++;
  if (state.currentPhase >= PHASES.length) {
    state.currentPhase = 0;
    state.currentTurn = (state.currentTurn + 1) % state.players.length;
  }
  saveState();
  renderTracker();
}

function renderPlayerCards() {
  const container = document.getElementById('player-cards-grid');
  container.innerHTML = state.players.map((player, i) => {
    const isCurrentTurn = i === state.currentTurn;
    const isWinner = player.echoes >= state.winCondition;
    const faction = FACTIONS.find(f => f.name === player.faction);
    const factionColor = faction ? faction.color : 'var(--accent-gold)';

    return `
      <div class="player-card ${isCurrentTurn ? 'current-turn' : ''} ${isWinner ? 'winner' : ''}"
           style="border-top-color: ${factionColor}"
           data-player="${i}">
        ${isWinner ? '<div class="winner-banner">🏆 WINNER!</div>' : ''}
        <div class="player-card-header">
          <div>
            <div class="player-card-name">${escHtml(player.name)}</div>
            <div class="player-card-faction">${escHtml(player.faction)}</div>
          </div>
          ${isCurrentTurn ? '<span class="turn-badge">Your Turn</span>' : ''}
        </div>

        <!-- ECHO TRACKER -->
        <div class="echo-section">
          <div class="counter-label">Echoes Scored</div>
          <div class="echo-track">
            ${renderEchoPips(player.echoes, state.winCondition, i)}
          </div>
          <div class="echo-count-row">
            <div class="counter-btns">
              <button class="counter-btn" data-player="${i}" data-stat="echoes" data-delta="-1">−</button>
              <button class="counter-btn" data-player="${i}" data-stat="echoes" data-delta="1">+</button>
            </div>
            <span class="counter-value" style="color:${factionColor}">${player.echoes}</span>
            <span style="color:var(--text-dim);font-size:0.8rem;font-family:var(--font-head)">/ ${state.winCondition}</span>
          </div>
        </div>

        <!-- CITIZEN COUNTERS -->
        <div class="citizen-section">
          <div class="citizen-block">
            <div class="counter-label talent-color">Idle Talents</div>
            <div class="citizen-count-row">
              <div class="counter-btns">
                <button class="counter-btn" data-player="${i}" data-stat="talents" data-delta="-1">−</button>
                <button class="counter-btn" data-player="${i}" data-stat="talents" data-delta="1">+</button>
              </div>
              <span class="counter-value talent-color">${player.talents}</span>
            </div>
          </div>
          <div class="citizen-block">
            <div class="counter-label drone-color">Idle Drones</div>
            <div class="citizen-count-row">
              <div class="counter-btns">
                <button class="counter-btn" data-player="${i}" data-stat="drones" data-delta="-1">−</button>
                <button class="counter-btn" data-player="${i}" data-stat="drones" data-delta="1">+</button>
              </div>
              <span class="counter-value drone-color">${player.drones}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Bind counter buttons
  container.querySelectorAll('.counter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pi = parseInt(btn.dataset.player);
      const stat = btn.dataset.stat;
      const delta = parseInt(btn.dataset.delta);
      state.players[pi][stat] = Math.max(0, state.players[pi][stat] + delta);
      if (stat === 'echoes' && state.winCondition && delta > 0) {
        state.players[pi].echoes = Math.min(state.players[pi].echoes, state.winCondition);
      }
      saveState();
      renderTracker();
    });
  });

  // Bind echo pip clicks
  container.querySelectorAll('.echo-pip').forEach(pip => {
    pip.addEventListener('click', () => {
      const pi = parseInt(pip.dataset.player);
      const val = parseInt(pip.dataset.val);
      state.players[pi].echoes = (state.players[pi].echoes === val) ? val - 1 : val;
      state.players[pi].echoes = Math.max(0, state.players[pi].echoes);
      saveState();
      renderTracker();
    });
  });
}

function renderEchoPips(current, max, playerIdx) {
  let html = '';
  for (let i = 1; i <= max; i++) {
    html += `<div class="echo-pip ${i <= current ? 'scored' : ''}"
               data-player="${playerIdx}"
               data-val="${i}"
               title="Echo ${i}/${max}"
               role="button" tabindex="0"
               aria-label="Echo ${i}: ${i <= current ? 'scored' : 'not yet scored'}"></div>`;
  }
  return html;
}

// ── UTILITY ──
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
