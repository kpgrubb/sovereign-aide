// ──────────────────────────────────────────────
// CARD MANIFEST
// 558 cards total: 520 faction cards + 38 special
// Faction order in PDF (52 cards each = 32 unique + 20 Echoes):
//   0   Cult of Apsynthos       000–051
//   1   Undercity Brotherhood   052–103
//   2   Neogenesis Church       104–155
//   3   Utopian Remnant         156–207
//   4   Machina Sapiens         208–259
//   5   Myrmidon Dominion       260–311
//   6   The Dronestate          312–363
//   7   Windwalker Clans        364–415
//   8   Coriolan Exiles         416–467  (expansion)
//   9   Red Hegemony            468–519  (expansion)
//  Special (Leaders + Citadels, landscape): 520–557
// ──────────────────────────────────────────────

export const CARD_COUNT       = 558;
export const SPECIAL_START    = 520;   // cards 520+ are landscape/rotated
export const FACTION_SIZE     = 52;    // 32 unique + 20 Echoes per faction
export const UNIQUE_PER_DECK  = 32;
export const ECHOES_PER_DECK  = 20;

export const FACTION_RANGES = [
  { name: "Cult of Apsynthos",     start: 0,   end: 51,  color: "#9b7fd4" },
  { name: "Undercity Brotherhood", start: 52,  end: 103, color: "#e06b3e" },
  { name: "Neogenesis Church",     start: 104, end: 155, color: "#e0c44a" },
  { name: "Utopian Remnant",       start: 156, end: 207, color: "#4a9eff" },
  { name: "Machina Sapiens",       start: 208, end: 259, color: "#52d9d9" },
  { name: "Myrmidon Dominion",     start: 260, end: 311, color: "#e84b4b" },
  { name: "The Dronestate",        start: 312, end: 363, color: "#a0a0b0" },
  { name: "Windwalker Clans",      start: 364, end: 415, color: "#7bc4a0" },
  { name: "Coriolan Exiles",       start: 416, end: 467, color: "#c9a227", expansion: true },
  { name: "Red Hegemony",          start: 468, end: 519, color: "#c94e4e", expansion: true },
  { name: "Leaders & Citadels",    start: 520, end: 557, color: "#ffffff", special: true },
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
  return index >= SPECIAL_START;
}

// Grid thumbnails — 240px wide, lazy-loaded
export function thumbPath(index) {
  return `assets/cards/thumbs/fronts/card-${String(index).padStart(3,'0')}.jpg`;
}

// Lightbox zoom — 520px wide, fully readable
export function fullPath(index) {
  return `assets/cards/zoom/fronts/card-${String(index).padStart(3,'0')}.jpg`;
}
