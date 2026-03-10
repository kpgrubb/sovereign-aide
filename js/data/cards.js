// ──────────────────────────────────────────────
// CARD MANIFEST
// 558 cards total
// PDF page order (6 pages × 9 cards = 54 per faction; Windwalker = 5 pages = 45):
//   Pages  1-6:  Neogenesis Church       000–053
//   Pages  7-12: Coriolan Exiles         054–107  (expansion)
//   Pages 13-18: Cult of Apsynthos       108–161
//   Pages 19-24: The Dronestate          162–215
//   Pages 25-30: Red Hegemony            216–269  (expansion)
//   Pages 31-36: Machina Sapiens         270–323
//   Pages 37-42: Myrmidon Dominion       324–377
//   Pages 43-48: Utopian Remnant         378–431
//   Pages 49-54: Undercity Brotherhood   432–485
//   Pages 55-59: Windwalker Clans        486–530  (5 pages, 45 cards)
//   Pages 60-62: Leaders & Citadels      531–557
//
// Per faction: indices 0–29 within range = unique cards
//              indices 30+ within range  = echo cards (excluded from main grid)
//
// Tokens (printing artifacts, excluded from all views): 550, 552–557
// ──────────────────────────────────────────────

export const CARD_COUNT       = 558;
export const SPECIAL_START    = 531;   // cards 531+ are Leaders/Citadels/tokens (landscape)
export const LANDSCAPE_START  = 531;   // all special cards are landscape format
export const UNIQUE_PER_DECK  = 30;    // first 30 cards per faction range are unique

export const FACTION_RANGES = [
  { name: "Neogenesis Church",     start: 0,   end: 53,  color: "#e0c44a" },
  { name: "Coriolan Exiles",       start: 54,  end: 107, color: "#c9a227", expansion: true },
  { name: "Cult of Apsynthos",     start: 108, end: 161, color: "#9b7fd4" },
  { name: "The Dronestate",        start: 162, end: 215, color: "#a0a0b0" },
  { name: "Red Hegemony",          start: 216, end: 269, color: "#c94e4e", expansion: true },
  { name: "Machina Sapiens",       start: 270, end: 323, color: "#52d9d9" },
  { name: "Myrmidon Dominion",     start: 324, end: 377, color: "#e84b4b" },
  { name: "Utopian Remnant",       start: 378, end: 431, color: "#4a9eff" },
  { name: "Undercity Brotherhood", start: 432, end: 485, color: "#e06b3e" },
  { name: "Windwalker Clans",      start: 486, end: 530, color: "#7bc4a0" },
  { name: "Leaders & Citadels",    start: 531, end: 557, color: "#ffffff", special: true },
];

export function getFactionForCard(index) {
  return FACTION_RANGES.find(f => index >= f.start && index <= f.end) || null;
}

export function isEchoCard(index) {
  const faction = getFactionForCard(index);
  if (!faction || faction.special) return false;
  return index >= faction.start + UNIQUE_PER_DECK;
}

export function isSpecialCard(index) {
  return index >= SPECIAL_START && !isTokenCard(index);
}

export function isTokenCard(index) {
  // Page 62 positions 2 and 4–9: printing artifacts, not game cards
  return index === 550 || (index >= 552 && index <= 557);
}

export function isLandscapeCard(index) {
  return index >= LANDSCAPE_START;
}

// Grid thumbnails — 240px wide, lazy-loaded
export function thumbPath(index, side = 'front') {
  if (side === 'back') {
    if (index >= LANDSCAPE_START) return `assets/cards/thumbs/backs/card-${String(index).padStart(3,'0')}.jpg`;
    return 'assets/cards/thumbs/backs/tracker.jpg';
  }
  return `assets/cards/thumbs/fronts/card-${String(index).padStart(3,'0')}.jpg`;
}

// Lightbox zoom — 780px wide, fully readable
export function fullPath(index, side = 'front') {
  if (side === 'back') {
    if (index >= LANDSCAPE_START) return `assets/cards/zoom/backs/card-${String(index).padStart(3,'0')}.jpg`;
    return 'assets/cards/zoom/backs/tracker.jpg';
  }
  return `assets/cards/zoom/fronts/card-${String(index).padStart(3,'0')}.jpg`;
}
