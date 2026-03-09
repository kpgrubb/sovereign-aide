// ──────────────────────────────────────────────
// TOOLTIPS.JS — Keyword annotation & popover engine
// ──────────────────────────────────────────────
import { KEYWORDS, KEYWORD_ALIASES } from './data/keywords.js';

const popover   = document.getElementById('kw-popover');
const termEl    = document.getElementById('kw-popover-term');
const defEl     = document.getElementById('kw-popover-def');
const pageEl    = document.getElementById('kw-popover-page');

let activeKw    = null;
let hideTimer   = null;

// Build sorted list of terms (longest first to avoid partial matches)
const ALL_TERMS = [
  ...Object.keys(KEYWORDS),
  ...Object.keys(KEYWORD_ALIASES)
].sort((a, b) => b.length - a.length);

// Regex: match whole word, case-insensitive
function buildRegex() {
  const escaped = ALL_TERMS.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  return new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
}
const KW_REGEX = buildRegex();

/**
 * Walk text nodes inside `root` and wrap keyword matches in <span class="kw">
 * Skips elements that are already annotated or are inside headings/page-refs.
 */
export function annotateKeywords(root) {
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        // Skip already-annotated spans, headings, page refs, script, style
        const tag = parent.tagName.toLowerCase();
        if (['script', 'style', 'h1', 'h2', 'h3', 'h4'].includes(tag)) return NodeFilter.FILTER_REJECT;
        if (parent.classList.contains('kw')) return NodeFilter.FILTER_REJECT;
        if (parent.classList.contains('page-ref')) return NodeFilter.FILTER_REJECT;
        if (parent.classList.contains('callout-label')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const nodesToProcess = [];
  let node;
  while ((node = walker.nextNode())) nodesToProcess.push(node);

  nodesToProcess.forEach(textNode => {
    const text = textNode.nodeValue;
    if (!KW_REGEX.test(text)) return;
    KW_REGEX.lastIndex = 0;

    const frag = document.createDocumentFragment();
    let lastIdx = 0;
    let match;

    KW_REGEX.lastIndex = 0;
    while ((match = KW_REGEX.exec(text)) !== null) {
      const before = text.slice(lastIdx, match.index);
      if (before) frag.appendChild(document.createTextNode(before));

      const raw = match[0];
      const key = resolveKeyword(raw);
      if (key) {
        const span = document.createElement('span');
        span.className = 'kw';
        span.dataset.kw = key;
        span.textContent = raw;
        span.setAttribute('tabindex', '0');
        span.setAttribute('role', 'button');
        span.setAttribute('aria-label', `Keyword: ${key}`);
        frag.appendChild(span);
      } else {
        frag.appendChild(document.createTextNode(raw));
      }

      lastIdx = match.index + raw.length;
    }

    const after = text.slice(lastIdx);
    if (after) frag.appendChild(document.createTextNode(after));

    textNode.parentNode.replaceChild(frag, textNode);
  });

  // Re-attach events (event delegation on document handles it)
}

// Resolve a matched string to a canonical keyword key
function resolveKeyword(raw) {
  const lower = raw.toLowerCase();
  // Direct match
  for (const key of Object.keys(KEYWORDS)) {
    if (key.toLowerCase() === lower) return key;
  }
  // Alias match
  for (const [alias, canonical] of Object.entries(KEYWORD_ALIASES)) {
    if (alias.toLowerCase() === lower) return canonical;
  }
  return null;
}

// ── POPOVER POSITIONING ──
function showPopover(kwKey, triggerEl) {
  const data = KEYWORDS[kwKey];
  if (!data) return;

  termEl.textContent = kwKey.toUpperCase();
  defEl.textContent  = data.definition;
  pageEl.innerHTML   = data.page ? `Rulebook <span class="page-ref">[p. ${data.page}]</span>` : '';

  popover.classList.remove('above', 'below');
  popover.classList.add('visible');
  popover.removeAttribute('aria-hidden');

  positionPopover(triggerEl);
}

function positionPopover(trigger) {
  const trigRect = trigger.getBoundingClientRect();
  const popW = 280;
  const popH = popover.offsetHeight || 120;
  const vp   = { w: window.innerWidth, h: window.innerHeight };

  let left = trigRect.left + trigRect.width / 2 - popW / 2;
  left = Math.max(8, Math.min(left, vp.w - popW - 8));

  // Prefer above if room, otherwise below
  const spaceAbove = trigRect.top;
  const spaceBelow = vp.h - trigRect.bottom;

  if (spaceBelow >= popH + 12 || spaceBelow > spaceAbove) {
    popover.style.top  = `${trigRect.bottom + window.scrollY + 10}px`;
    popover.style.left = `${left}px`;
    popover.classList.add('below');
  } else {
    popover.style.top  = `${trigRect.top + window.scrollY - popH - 10}px`;
    popover.style.left = `${left}px`;
    popover.classList.add('above');
  }
}

function hidePopover() {
  popover.classList.remove('visible');
  popover.setAttribute('aria-hidden', 'true');
  activeKw = null;
}

// ── EVENT DELEGATION ──
document.addEventListener('mouseover', e => {
  const span = e.target.closest('.kw');
  if (!span) return;
  clearTimeout(hideTimer);
  activeKw = span.dataset.kw;
  showPopover(activeKw, span);
});

document.addEventListener('mouseout', e => {
  const span = e.target.closest('.kw');
  if (!span) return;
  // Delay hide in case mouse moves to popover
  hideTimer = setTimeout(() => {
    if (!popover.matches(':hover')) hidePopover();
  }, 120);
});

popover.addEventListener('mouseleave', () => {
  hideTimer = setTimeout(hidePopover, 120);
});

popover.addEventListener('mouseenter', () => {
  clearTimeout(hideTimer);
});

// Keyboard accessibility
document.addEventListener('focusin', e => {
  const span = e.target.closest('.kw');
  if (!span) return;
  clearTimeout(hideTimer);
  activeKw = span.dataset.kw;
  showPopover(activeKw, span);
});

document.addEventListener('focusout', e => {
  const span = e.target.closest('.kw');
  if (!span) return;
  hideTimer = setTimeout(hidePopover, 150);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') hidePopover();
});

// Close on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('.kw') && !e.target.closest('.kw-popover')) {
    hidePopover();
  }
});
