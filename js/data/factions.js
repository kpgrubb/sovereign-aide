// ──────────────────────────────────────────────
// FACTION DATA — sourced from rulebook p. 31
// ──────────────────────────────────────────────
export const FACTIONS = [
  {
    id: "windwalker",
    name: "Windwalker Clans",
    color: "#7bc4a0",
    expansion: false,
    playstyle: "Mobile & Adaptive",
    description: "Nomadic steppe tribes guided by Speaker-Mothers. The Windwalkers move fast and adapt faster, using the open terrain to outmaneuver enemies.",
    tip: "Use mobility to keep opponents guessing. Your units are built for rapid repositioning."
  },
  {
    id: "cult",
    name: "Cult of Apsynthos",
    color: "#9b7fd4",
    expansion: false,
    playstyle: "Echo-Focused",
    description: "Mystics who worship the fallen Ark and its shards. The Cult of Apsynthos specializes in Echo manipulation and scoring.",
    tip: "Prioritize Echo collection early. Your abilities synergize heavily around your scored Echoes."
  },
  {
    id: "undercity",
    name: "Undercity Brotherhood",
    color: "#e06b3e",
    expansion: false,
    playstyle: "Industrial Powerhouse",
    description: "Lords of the megafurnaces beneath the surface. The Undercity Brotherhood excels at forging — building units and facilities faster than anyone.",
    tip: "Use Talents and Drones aggressively. Your forge acceleration capabilities are unmatched."
  },
  {
    id: "utopian",
    name: "Utopian Remnant",
    color: "#4a9eff",
    expansion: false,
    playstyle: "Diplomatic & Resilient",
    description: "Cybernetic survivors seeking to rebuild civilization. Utopian Remnant cards focus on resilience, healing, and incremental advantage.",
    tip: "Play the long game. Your ability to restore health and sustain your colony wins wars of attrition."
  },
  {
    id: "neogenesis",
    name: "Neogenesis Church",
    color: "#e0c44a",
    expansion: false,
    playstyle: "Augment Specialist",
    description: "A religious faction that sees biological modification as sacrament. The Neogenesis Church stacks augments to create overwhelming, modified units.",
    tip: "Stack augments strategically. A few heavily-augmented units can dominate the battlefield."
  },
  {
    id: "dronestate",
    name: "The Dronestate",
    color: "#a0a0b0",
    expansion: false,
    playstyle: "Swarm Tactics",
    description: "A hivemind society that fields endless waves of drone units. The Dronestate overwhelms through quantity and coordinated swarm attacks.",
    tip: "Flood lanes with cheap units. Your strength is in numbers, not individual card power."
  },
  {
    id: "machina",
    name: "Machina Sapiens",
    color: "#52d9d9",
    expansion: false,
    playstyle: "Resource Manipulation",
    description: "Synthetic beings of terrifying intelligence. Machina Sapiens manipulate the creche and citizen tokens in ways no biological faction can match.",
    tip: "Control the creche. Denying opponents citizens is as powerful as scoring Echoes yourself."
  },
  {
    id: "myrmidon",
    name: "Myrmidon Dominion",
    color: "#e84b4b",
    expansion: false,
    playstyle: "Military Conquest",
    description: "A militaristic empire built on conquest. Myrmidon Dominion is an aggressive faction with powerful units and strong breach abilities.",
    tip: "Attack early and often. Your breach bonuses punish players who hide Echoes in their hand."
  },
  {
    id: "coriolan",
    name: "Coriolan Exiles",
    color: "#c9a227",
    expansion: true,
    playstyle: "Reflex Control",
    description: "Outcasts mastering the art of the reflex. The Coriolan Exiles can play more reflexes than any other faction, reacting to anything.",
    tip: "Hold reflexes in reserve. Surprise opponents at the worst possible moment."
  },
  {
    id: "hegemony",
    name: "Red Hegemony",
    color: "#c94e4e",
    expansion: true,
    playstyle: "Facility Dominance",
    description: "A centralized authoritarian power with an unparalleled facility network. Red Hegemony builds colonies that generate passive advantages every turn.",
    tip: "Build your colony infrastructure before going on offense. A full facility set generates unstoppable momentum."
  }
];

export const FACTION_NAMES = FACTIONS.map(f => f.name);
