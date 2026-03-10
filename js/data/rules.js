// ──────────────────────────────────────────────
// RULES CONTENT — sourced from Sovereign Rulebook
// All page references match the official PDF
// ──────────────────────────────────────────────

export const RULES_SECTIONS = {

  deck: {
    title: "Your Deck",
    page: 4,
    content: `
      <h2>Your Deck <span class="page-ref">[p. 4]</span></h2>

      <p>Sovereign is an expandable card game where each player controls a burgeoning far-future society at the brink of war. You will build an empire from the ground up, managing civilians and military units while striving to collect <strong>Echoes</strong> any way you can.</p>

      <p>These relics from humanity's distant past will ensure your colony prospers while others fall. Forge them yourself, or steal them from other players. Build or conquer — it's up to you.</p>

      <div class="callout">
        <span class="callout-label">Win Condition</span>
        The first player to score <strong>10 Echoes</strong> wins the game. After your first game, <strong>12 Echoes</strong> is the recommended win state for two players.
      </div>

      <h3>Deck Composition</h3>
      <p>Each deck consists of <strong>32 unique cards</strong> and <strong>20 Echoes</strong>, for a total of <strong>52 cards per player</strong>.</p>

      <h3>Leader Card</h3>
      <p>The Leader of your faction has a special ability unique to your ideology. Your Leader is a direct descendant of the first talents to emerge from the Ark, and represents the <strong>left-most of two lanes</strong> where you'll deploy your units.</p>

      <h3>Citadel Card</h3>
      <p>Your Citadel is the heart of your civilization, built around an ancient technology known as the forge. The Citadel acts as the holding place for <strong>idle citizens</strong> you control and represents the <strong>right-most lane</strong> to deploy units.</p>

      <h3>Card Types at a Glance</h3>
      <ul>
        <li><strong>Units</strong> — The core of your faction: soldiers, mechs, merchants, and statesmen. Deployed into lanes to attack and defend.</li>
        <li><strong>Facilities</strong> — Important locations granting powerful abilities when worked by citizens.</li>
        <li><strong>Augments</strong> — Upgrade and alter other cards on the field.</li>
        <li><strong>Echoes</strong> — The win condition. Score 10 to win.</li>
        <li><strong>Reflexes</strong> — Game-changing events playable during any player's turn.</li>
      </ul>
    `
  },

  citizens: {
    title: "Citizens",
    page: 6,
    content: `
      <h2>Citizens <span class="page-ref">[p. 6]</span></h2>

      <div class="callout">
        <span class="callout-label">Important</span>
        Citizens are workers, not money! In general, when you use them on a card, they're working that card, and you will get them back when they finish.
      </div>

      <p>Citizens are born in the <strong>creche</strong> and raised within the ideology of your faction. Citizens are split into two castes:</p>

      <h3>Talents</h3>
      <p>Intellectuals, elites, or nobility. Talents are recruited at the start of each turn during the <strong>Growth Phase</strong>. They are placed on your Citadel as gold tokens. Talents serve as forge workers, facility activators, and unit health.</p>

      <h3>Drones</h3>
      <p>Working class, servants, or slaves. Drones are typically created when talents are flipped (exhausted) to accelerate forge construction or through card effects. Drones also serve as unit health and power drone-specific abilities.</p>

      <h3>The Creche</h3>
      <p>The <strong>creche</strong> (pronounced "Kresh") is the shared pool of citizen tokens all players recruit from. The creche is an unlimited resource — if you run out of tokens, use a suitable substitute.</p>

      <h3>Idle Citizens</h3>
      <p>Tokens on your Citadel are called <strong>idle citizens</strong>. When placed on a unit, citizen tokens represent that unit's total health. Citizens cannot be voluntarily flipped to change them from talent to drone or vice versa.</p>

      <div class="callout tip">
        <span class="callout-label">Beginner Tip</span>
        Think of talents as your most valuable workers. Each talent you send to war is one less worker for your facilities — choose wisely!
      </div>
    `
  },

  anatomy: {
    title: "Card Anatomy",
    page: 7,
    content: `
      <h2>Anatomy of a Card <span class="page-ref">[p. 7]</span></h2>

      <p>Each card contains several key elements that determine how it functions in play:</p>

      <h3>Attack (1)</h3>
      <p>The amount of damage this unit will do during combat. Also the default <strong>breach value</strong> during a successful breach with no living defenders.</p>

      <h3>Armor (2)</h3>
      <p>The amount of damage this unit can block from each individual source before losing health tokens. Armor must be broken anew for each separate damage source.</p>

      <h3>Abilities (3)</h3>
      <p>Most cards have a unique ability. <strong>Keywords will always have an explanation in parentheses</strong> on the card that contains them.</p>

      <h3>Card Type (4)</h3>
      <p>The card's type determines where it is played and how it is used. Cards may also have a subtype (e.g., Mech, Human, Chimera, Synthetic, Xeno).</p>

      <h3>Forge Cost (5)</h3>
      <p>The number of spaces a forge talent needs to advance on the forge track until the card can be revealed. This looks different on reflexes, since reflexes never enter the forge.</p>

      <h3>Faction Symbol (6)</h3>
      <p>Each card bears a faction symbol indicating which faction deck the card belongs to.</p>

      <h3>Maximum Health (7)</h3>
      <p>Indicated by citizen icons along the card bottom. When a unit is revealed, decide how many tokens of this type you will add, up to the maximum.</p>

      <h3>Flavor Text (8)</h3>
      <p>Story text in italics doesn't affect the game, but deepens your understanding of the world.</p>
    `
  },

  setup: {
    title: "Game Setup",
    page: 8,
    content: `
      <h2>Game Setup <span class="page-ref">[p. 8]</span></h2>

      <ol>
        <li>Each player selects a <strong>faction deck</strong> and sets aside its <strong>Leader</strong> and <strong>Citadel</strong> card.</li>
        <li>Each player shuffles their <strong>20 unique Echoes</strong> into their deck. The deck is placed on the table with the Leader card to the left and Citadel card to the right.</li>
        <li>Place all <strong>citizen tokens</strong> in a shared pile to form the <strong>creche</strong>. Place all stat change tokens within player reach.</li>
        <li>Choose a first player however you see fit.
          <ul>
            <li>The first player receives <strong>1 drone</strong> on their Citadel</li>
            <li>The second player receives <strong>2 drones</strong></li>
            <li>The third player receives <strong>3 drones</strong></li>
            <li>The fourth player receives <strong>4 drones</strong></li>
          </ul>
        </li>
        <li>All players draw <strong>8 cards</strong> from their deck.</li>
      </ol>

      <h3>Mulliganing</h3>
      <p>In the event of an unsatisfactory hand, a player may <strong>mulligan once</strong> by reshuffling their deck and drawing 8 new cards. Players can mulligan additional times if they show a hand with <strong>no units</strong>, or a hand that is <strong>8 Echoes</strong>.</p>

      <div class="callout tip">
        <span class="callout-label">New Player Tip</span>
        We suggest you mulligan if you draw no Echoes, over 4 Echoes, or no units.
      </div>

      <h3>Table Layout</h3>
      <p>From left to right, your play area includes: <strong>Facilities → Leader → Deck → Citadel → Forge</strong>. Scored Echoes are placed face-up in front of you. Your hand and the creche are shared in the center.</p>

      <div class="callout">
        <span class="callout-label">Note on Scrap</span>
        A card is <strong>scrapped</strong> when it is killed or removed from play. A card is <strong>discarded</strong> if tossed from a player's hand without ever entering play. Either way, these cards go into your scrap pile — a face-up pile that can be referenced by any player at any time.
      </div>
    `
  },

  phases: {
    title: "Your Turn",
    page: 10,
    content: `
      <h2>Your Turn <span class="page-ref">[p. 10]</span></h2>

      <p>Play begins with the first player and proceeds clockwise. Each player's turn consists of <strong>six phases</strong>:</p>

      <div class="callout">
        <span class="callout-label">Turn Order</span>
        <strong>1. Growth</strong> → <strong>2. Upkeep</strong> → <strong>3. Forge</strong> → <strong>4. Battle</strong> → <strong>5. Move</strong> → <strong>6. Draw</strong>
      </div>

      <h3>1. Growth Phase <span class="page-ref">[p. 10]</span></h3>
      <p>At the start of your turn, <strong>draw two citizen tokens from the creche</strong>, and place them on your Citadel as gold talents. No actions, other than those written as growth phase actions, may be taken during this phase.</p>

      <h3>2. Upkeep Phase <span class="page-ref">[p. 10]</span></h3>
      <p>This phase is when you take citizens back to your Citadel after they have completed their tasks. The first turn you will have nothing to upkeep.</p>
      <p>During upkeep you first scrap any reflexes you control, and return their citizens to your Citadel. You <em>may</em> remove one citizen from each facility and from your Leader card, placing them back on your Citadel. Unless specified by a card, citizens returned during upkeep do not flip.</p>
      <p>If there is ever a question about order, citizens are returned starting with the left-most card, working right. Then, <strong>advance all talents on cards in your forge by one space</strong>. If a card meets its forge cost, you may reveal it during your forge phase.</p>

      <h3>3. Forge Phase <span class="page-ref">[p. 11]</span></h3>
      <p>The forge serves as a construction zone for face-down cards not yet at their forge cost. To play a card in the forge, place an available talent from your Citadel onto the first space of the forge track on the back of the card.</p>
      <p><strong>Accelerating:</strong> You may exhaust any number of talents from your Citadel (flipping them to drone side) to advance a forge talent one space each.</p>
      <p><strong>Revealing:</strong> Once a card meets its forge cost, you may reveal it. Non-Echo cards have their forge talent returned as a drone. Echo forge talents return unflipped and the Echo is immediately scored.</p>

      <div class="callout warning">
        <span class="callout-label">Echo Rule</span>
        Echoes may NOT be completed in a single turn. Even if fully paid for, an Echo may not be revealed until your next turn.
      </div>

      <h3>4. Battle Phase <span class="page-ref">[p. 20]</span></h3>
      <p>Attack an opponent to score their hidden Echoes. You may only attack players to your <strong>left and right</strong>. You may only attack with <strong>one lane per turn</strong>. See the Battle section for full rules.</p>

      <h3>5. Move Phase <span class="page-ref">[p. 27]</span></h3>
      <p>You may <strong>move one unit</strong> you control up or down by one space in its lane, or move it to the back of your other lane.</p>

      <h3>6. Draw Phase <span class="page-ref">[p. 27]</span></h3>
      <p>Always draw cards <strong>up to your hand limit of 8</strong>. If you have 8 or more cards, you draw nothing. Gameplay advances to the next player's turn.</p>
    `
  },

  cardtypes: {
    title: "Card Types",
    page: 13,
    content: `
      <h2>Card Types <span class="page-ref">[p. 13]</span></h2>

      <h3>Units <span class="page-ref">[p. 15]</span></h3>
      <p>Units are the core of your faction — everything from soldiers and war mechs to merchants and statesmen. Units are forged and deployed into one of two <strong>lanes</strong> to defend either your forge or your hand.</p>
      <ul>
        <li>New units must be deployed to the <strong>back of a lane</strong> when first forged.</li>
        <li>Add health from your Citadel <strong>before the end of the forge phase</strong> in which it was revealed (up to its listed maximum).</li>
        <li>Only <strong>three units</strong> may occupy any one lane at a time.</li>
        <li>Units have a subtype (mechs, humans, etc.) and three attributes: <strong>Attack</strong>, <strong>Armor</strong>, and <strong>Health</strong>.</li>
      </ul>

      <h3>Facilities & Leaders <span class="page-ref">[p. 16]</span></h3>
      <p>Facilities are forged to the <strong>left of your Leader card</strong>. Both facilities and Leaders have abilities activated by working the card with idle citizens. This can be done at any time you could play a reflex.</p>
      <p><strong>Triggered Abilities:</strong> Trigger once when the required citizens are moved from the Citadel onto the empty facility. To reuse, completely empty the facility first.</p>
      <p><strong>Perpetual Abilities:</strong> Remain active as long as the requisite citizens stay on the facility. You may leave citizens for as long as you wish.</p>

      <div class="callout warning adv-only">
        <span class="callout-label">Advanced</span>
        You cannot add one citizen to a facility to see what happens before adding more. Add all citizens at once before using the ability.
      </div>

      <h3>Augments <span class="page-ref">[p. 18]</span></h3>
      <p>After successfully forging an augment, attach it to a unit or facility (as specified) to give it a permanent ability. You may attach an augment to <strong>any player's card</strong>, not just your own. A card may have any number of augments. If the host card is scrapped, all attached augments are also scrapped.</p>

      <h3>Echoes <span class="page-ref">[p. 18]</span></h3>
      <p>Score 10 Echoes to win (12 for a 2-player game). Echoes may be forged yourself or stolen from opponents via breaching.</p>
      <ul>
        <li>An Echo <strong>may never be scored in the same turn</strong> it was placed in the forge.</li>
        <li>An Echo may <strong>never be placed in a scrap pile</strong> by any means.</li>
        <li>Once scored, Echoes are <strong>safe and cannot be stolen or destroyed</strong>.</li>
        <li>When you forge an Echo, the forging talent returns to your Citadel <strong>unflipped</strong>.</li>
      </ul>

      <h3>Reflexes <span class="page-ref">[p. 19]</span></h3>
      <p>Players may play reflexes from their hand at any time during their <strong>forge, battle, and move phase</strong>, between player turns, and at specific times on other players' turns.</p>
      <p>Reflexes take effect immediately when you move the required number of citizens from your Citadel onto the reflex. Reflexes last until the beginning of your next upkeep phase.</p>
      <p>Note: Reflexes are the <strong>only cards that do not enter the forge</strong>.</p>

      <h3>Out-of-Turn Play <span class="page-ref">[p. 19]</span></h3>
      <p>You may only play reflexes or use card abilities outside of your turn during the <strong>battle phase</strong> and at the <strong>beginning and end of an opponent's forge and move phases</strong>. You may also play reflexes <strong>between player turns</strong>.</p>

      <div class="callout tip">
        <span class="callout-label">Golden Rule</span>
        If a card ever contradicts something in the rulebook, the card text overrides anything written here.
      </div>
    `
  },

  advanced: {
    title: "Advanced Rules",
    page: 28,
    content: `
      <h2>Advanced Rules <span class="page-ref">[p. 28]</span></h2>

      <h3>Timing and Priority <span class="page-ref">[p. 29]</span></h3>
      <p>The <strong>active player always has priority</strong>, followed by other players in turn order. At the beginning of battle, move, and draw on anyone's turn, each player has an opportunity to use an ability or play a reflex in initiative order.</p>
      <p>If four players attempt to use reflexes simultaneously, the active player acts first, followed by each other player in turn order. Each action must complete before the next begins.</p>
      <p>For your own cards, if a timing conflict arises between your own cards, all cards in your colony trigger <strong>left to right, top to bottom</strong>. Reflexes should be placed farthest left — reflexes are always the fastest effects in the game.</p>

      <div class="callout tip">
        <span class="callout-label">Social Tip</span>
        We strongly encourage interpretations that make the game more social. Don't get bogged down with exact timing unless absolutely necessary. It's much more fun to let players make clever moves.
      </div>

      <h3>Revising the Win Condition <span class="page-ref">[p. 29]</span></h3>
      <p>12 Echoes is the recommended win state for two-player games. For a 3–4 player game, a 12 Echo victory provides a longer, more strategic game focused on civilization-building. Expect the extra Echoes to add <strong>30–60 minutes</strong> of play time.</p>

      <h3>Customized Decks <span class="page-ref">[p. 30]</span></h3>
      <p>As you get more familiar with the intricacies of each faction, try building customized decks. Use these guidelines:</p>
      <ol>
        <li>Choose a <strong>Leader</strong> (no two players may play the same leader).</li>
        <li>Choose <strong>15 cards</strong> from that Leader's faction to include.</li>
        <li>Choose <strong>15 additional cards</strong> with no limitations beyond one copy of each card.</li>
        <li>Your deck must have <strong>30 unique cards</strong> and <strong>20 Echoes</strong> — exactly 50 cards total.</li>
        <li>We recommend approximately <strong>12 unit cards</strong> and <strong>6 of each other type</strong> (augment, facility, reflex).</li>
      </ol>

      <div class="callout">
        <span class="callout-label">Order of Operations: Forge Phase</span>
        The following actions are allowed within a single forge phase in any order:
        <ul style="margin-top:0.5rem">
          <li>Forge a unit and add health at the very end of the forge phase.</li>
          <li>Rearrange newly forged units (units forged this turn only).</li>
          <li>Forge an augment and leave it unattached until you have a unit.</li>
          <li>Use a facility's effect immediately after placing it.</li>
        </ul>
      </div>
    `
  }
};

// ── PHASE GUIDE DATA ──
export const PHASES = [
  {
    id: "growth",
    name: "Growth",
    number: 1,
    page: 10,
    summary: "Draw 2 citizen tokens from the creche and place them on your Citadel as gold talents.",
    beginner: `
      <p>Start your turn by drawing <strong>2 citizen tokens</strong> from the shared creche pile and placing them on your Citadel as gold (talent) tokens.</p>
      <div class="callout tip">
        <span class="callout-label">Tip</span>
        These are your fresh workers for this turn. Plan ahead — which ones will work your facilities, and which will go onto units?
      </div>
      <p>No other actions may be taken during this phase (unless a card specifically says "Growth Phase action").</p>
    `,
    advanced: `
      <p>Growth phase actions on specific cards can be triggered here. These are rare, but read your cards carefully. The Growth Phase is brief by design — it ends immediately after talents are placed.</p>
    `
  },
  {
    id: "upkeep",
    name: "Upkeep",
    number: 2,
    page: 10,
    summary: "Return citizens from facilities/Leader, advance forge talents by 1.",
    beginner: `
      <p>Upkeep is your maintenance phase — clean up, reset, and advance your construction.</p>
      <ol>
        <li><strong>Scrap reflexes:</strong> Remove any active reflexes from play and return their citizens to your Citadel.</li>
        <li><strong>Return citizens:</strong> You <em>may</em> remove one citizen from each facility and your Leader, returning them to your Citadel as-is (they do not flip unless a card says so).</li>
        <li><strong>Advance the forge:</strong> Move all forge talents forward by one space on their forge tracks.</li>
      </ol>
      <div class="callout tip">
        <span class="callout-label">Tip</span>
        The first turn you will have nothing to upkeep. From turn two onward, this is how you "cool down" your facilities.
      </div>
    `,
    advanced: `
      <p>Citizens return from left-most card to right. You are never <em>required</em> to take citizens off perpetual ability facilities — often you won't want to.</p>
      <p>Cards in the forge can reach their forge cost at any time, but may only be <strong>revealed during the Forge Phase</strong>. If a card reaches its cost during Upkeep, wait until your Forge Phase.</p>
    `
  },
  {
    id: "forge",
    name: "Forge",
    number: 3,
    page: 11,
    summary: "Place cards face-down from your hand into the forge, accelerate, or reveal completed cards.",
    beginner: `
      <p>The Forge Phase is where your civilization grows. You can:</p>
      <ul>
        <li><strong>Play cards into the forge:</strong> Take a card from your hand, place it face-down to the right of your Citadel, and assign a talent from your Citadel to its first forge space.</li>
        <li><strong>Accelerate construction:</strong> Flip idle talents on your Citadel to their drone side to advance forge talents by one space each.</li>
        <li><strong>Reveal completed cards:</strong> If a card has reached its forge cost, flip it face-up and place it in your colony or lane.</li>
      </ul>
      <div class="callout">
        <span class="callout-label">Echo Rule</span>
        Echoes cannot be revealed in the same turn you placed them in the forge — even if fully paid for!
      </div>
      <div class="callout tip">
        <span class="callout-label">Tip</span>
        You can bluff by accelerating an Echo to full cost — your opponents won't know if it's an Echo or something else!
      </div>
    `,
    advanced: `
      <p>Order of operations in the forge phase is generally up to you. Key flex points:</p>
      <ul>
        <li>Forge a unit → add health at the <strong>very end</strong> of the phase.</li>
        <li>Forge a facility → use its ability <strong>immediately</strong>.</li>
        <li>Reflexes and card abilities may be played during your forge phase, but only at the <strong>start and end</strong> of an opponent's forge phase.</li>
      </ul>
      <p>A card's forge talent may move past its forge cost. Move the talent to the card's center to indicate it's complete but not yet revealed.</p>
      <p>Cards in the forge <strong>may NOT be rearranged</strong> to obscure information. New cards always go to the right of or above current cards.</p>
    `
  },
  {
    id: "battle",
    name: "Battle",
    number: 4,
    page: 20,
    summary: "Optionally attack one opponent with one lane to breach their hand or forge.",
    beginner: `
      <p>The Battle Phase is optional. You attack by choosing <strong>one of your two lanes</strong> and declaring an attack against one opponent (only players immediately to your left or right).</p>

      <ul>
        <li>Attack their <strong>Leader lane</strong> → you breach their <strong>hand</strong></li>
        <li>Attack their <strong>Citadel lane</strong> → you breach their <strong>forge</strong></li>
        <li>Your <strong>front unit must be included</strong> in the attack.</li>
        <li>You may only attack with <strong>one lane per turn</strong>, no matter how many players are in the game.</li>
      </ul>

      <h3>Unit Stats</h3>
      <div class="battle-stat-explainer">
        <img src="assets/cards/thumbs/fronts/card-001.jpg" alt="Unit card example" class="battle-thumb" />
        <div class="battle-stat-list">
          <div class="battle-stat-row"><span class="stat-badge atk">ATK</span> <div><strong>Attack</strong> — damage this unit deals to the unit it faces each round.</div></div>
          <div class="battle-stat-row"><span class="stat-badge arm">ARM</span> <div><strong>Armor</strong> — blocks damage from <em>each individual hit</em>. Every attacker must overcome armor separately.</div></div>
          <div class="battle-stat-row"><span class="stat-badge hp">HP</span> <div><strong>Health</strong> — citizen tokens on the card. When reduced to zero, the unit is destroyed.</div></div>
        </div>
      </div>

      <h3>How Combat Resolves</h3>
      <p>Units pair up from front to back. All damage within a round is <strong>simultaneous</strong>.</p>
      <ol>
        <li>Your front unit faces their front unit. Each deals its ATK, reduced by the opposing unit's ARM. Excess damage removes health tokens.</li>
        <li>Destroyed units are removed. Your surviving attackers <strong>slide forward</strong> to face the next row of defenders. Attackers that already fought do <em>not</em> deal damage again — but still receive it.</li>
        <li>Continue until all defenders are destroyed (<strong>→ Breach!</strong>) or all attackers are defeated.</li>
      </ol>

      <h3>Example: 2 Attackers vs 1 Defender</h3>
      <div class="battle-seq">
        <div class="battle-seq-step">
          <div class="battle-seq-header">SETUP — Your 2 attackers vs their 1 defender</div>
          <div class="battle-seq-content">
            <div class="battle-seq-lanes">
              <div class="battle-seq-lane">
                <span class="seq-label">YOUR LANE (attacker)</span>
                <div class="seq-unit active">FRONT &nbsp;<span class="seq-stats">4 ATK · 1 ARM · 2 HP</span></div>
                <div class="seq-unit">BACK &nbsp;<span class="seq-stats">2 ATK · 0 ARM · 3 HP</span></div>
              </div>
              <div class="battle-seq-vs">⚔</div>
              <div class="battle-seq-lane">
                <span class="seq-label">THEIR LANE (defender)</span>
                <div class="seq-unit active">FRONT &nbsp;<span class="seq-stats">3 ATK · 1 ARM · 3 HP</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="battle-seq-step">
          <div class="battle-seq-header">ROUND 1 — Front vs Front</div>
          <div class="battle-seq-content">
            <div class="battle-seq-result">
              Your front unit deals <strong>4 ATK</strong>. Their armor absorbs 1 → their unit takes <strong>3 damage</strong> (0 HP remaining → destroyed).<br/>
              Their unit deals <strong>3 ATK</strong>. Your armor absorbs 1 → your front unit takes <strong>2 damage</strong> (0 HP remaining → also destroyed).
            </div>
          </div>
        </div>
        <div class="battle-seq-step">
          <div class="battle-seq-header">ROUND 2 — Back unit slides forward, no defenders left</div>
          <div class="battle-seq-content">
            <div class="battle-seq-result">
              All defenders are gone. Your back unit (2 ATK, 3 HP) is the only survivor.
            </div>
          </div>
        </div>
        <div class="battle-seq-step breach">
          <div class="battle-seq-header">BREACH!</div>
          <div class="battle-seq-content">
            <div class="battle-seq-result">
              <strong>Breach value = 2</strong> (total ATK of all living attackers).<br/>
              Look at 2 cards from their hand or forge (whichever lane you targeted). Score any Echoes you find!<br/>
              <em>No Echoes found? They must discard 1 card (hand breach) or you return all cards (forge breach).</em>
            </div>
          </div>
        </div>
      </div>

      <div class="callout tip">
        <span class="callout-label">Reminder</span>
        Your back-row attacker never dealt damage in this example — it only received damage after sliding forward. This is how the "slide" mechanic works.
      </div>
    `,
    advanced: `
      <h3>Combat Details <span class="page-ref">[p. 20]</span></h3>
      <p>Each attacking unit deals damage <strong>only once</strong> — to the first defender it faces. After that, it slides forward and only receives damage. Defenders, by contrast, deal full damage to <strong>every attacker they face</strong> across multiple rounds.</p>
      <p>Armor must be broken anew for <em>each separate damage source</em>. If two attackers each deal 2 ATK against a 1 ARM unit, each hit does 1 net damage — not 3.</p>
      <p>All unit-to-unit damage within a round is <strong>simultaneous</strong>. A unit at 0 health cannot be saved mid-round by abilities or Reflexes.</p>

      <h3>Breach Values <span class="page-ref">[p. 25]</span></h3>
      <ul>
        <li><strong>No living defenders:</strong> Breach value = total ATK of all <em>living</em> attackers combined.</li>
        <li><strong>Living defenders remain:</strong> Each attacker's breach value is reduced to <strong>1</strong>. Any bonus breach effects apply after this reduction.</li>
      </ul>
      <p>
        <strong>Breaching a hand:</strong> score all Echoes found. If none, opponent <em>must</em> discard one card.<br/>
        <strong>Breaching the forge:</strong> if no Echoes found, return all viewed cards to their original face-down positions.
      </p>

      <h3>Out-of-Turn Play During Battle</h3>
      <p>The entire Battle Phase is an open window — any player may play Reflexes or use card abilities at any point. This is the widest reaction window in the game. When multiple players want to act, initiative goes: active player → left → right.</p>
    `
  },
  {
    id: "move",
    name: "Move",
    number: 5,
    page: 27,
    summary: "Move one unit up or down by one space in its lane, or to the back of your other lane.",
    beginner: `
      <p>You may move <strong>one unit</strong> you control:</p>
      <ul>
        <li>Up or down by <strong>one space</strong> in its current lane, or</li>
        <li>To the <strong>back of your other lane</strong>.</li>
      </ul>
      <div class="callout tip">
        <span class="callout-label">Tip</span>
        Position matters! Move strong units to the front to protect weaker ones. Use this phase to adjust your formation after battle.
      </div>
      <p>You cannot go back and move a unit once you've entered your Draw Phase.</p>
    `,
    advanced: `
      <p>You may only move one unit per turn. Large units forged later in the game will take time to reach the front lines — plan your positioning several turns ahead.</p>
      <p>Reflexes and card abilities may be played by any player at the beginning and end of your move phase.</p>
    `
  },
  {
    id: "draw",
    name: "Draw",
    number: 6,
    page: 27,
    summary: "Draw up to a hand of 8 cards. Gameplay advances to the next player.",
    beginner: `
      <p>At the end of your turn, draw cards until you have <strong>8 cards in hand</strong>. If you already have 8 or more, draw nothing.</p>
      <p>After drawing, gameplay advances to the next player clockwise.</p>
      <div class="callout tip">
        <span class="callout-label">Tip</span>
        Playing lots of cards during your turn means more draws — don't hoard your hand!
      </div>
    `,
    advanced: `
      <p>It should be impossible to draw through your entire deck during a game. However, if this does happen, continue playing with the cards you have in hand, skipping your draw phase.</p>
    `
  }
];

// ── UNIFIED GUIDE SECTIONS ──
// Combines LEARN + PLAY GUIDE into one sidebar-navigated section.

const INTRO_CONTENT = `
  <h2>Introduction <span class="page-ref">[p. 4]</span></h2>

  <p>Sovereign is an expandable card game where each player controls a burgeoning far-future society at the brink of war. Build an empire from the ground up, managing civilians and military units while striving to collect <strong>Echoes</strong> any way you can.</p>
  <p>These relics from humanity's distant past will ensure your colony prospers while others fall. Forge them yourself, or steal them from other players. Build or conquer — it's up to you.</p>

  <div class="callout">
    <span class="callout-label">Win Condition</span>
    The first player to score <strong>10 Echoes</strong> wins the game. After your first game, <strong>12 Echoes</strong> is the recommended win state for two players.
  </div>

  <h3>Your Deck</h3>
  <p>Each deck consists of <strong>32 unique cards</strong> and <strong>20 Echoes</strong>, for a total of <strong>52 cards per player</strong>.</p>
  <p><strong>Leader Card:</strong> Your faction's commander. A special ability unique to your ideology. Represents the <strong>left-most lane</strong> where you deploy units.</p>
  <p><strong>Citadel Card:</strong> The heart of your civilization, built around the forge. Holds your <strong>idle citizens</strong> and represents the <strong>right-most lane</strong>.</p>

  <h3>Citizens <span class="page-ref">[p. 6]</span></h3>
  <div class="callout">
    <span class="callout-label">Important</span>
    Citizens are workers, not money! When you use them on a card, they're working that card and you get them back when they finish.
  </div>
  <p><strong>Talents</strong> — Intellectuals, elites, or nobility. Recruited each turn during the Growth Phase as gold tokens on your Citadel. They power your forge, activate facilities, and serve as unit health.</p>
  <p><strong>Drones</strong> — Working class, servants, or slaves. Created when talents are flipped (exhausted) to accelerate forge construction, or via card effects. Also serve as unit health and power drone-specific abilities.</p>
  <p><strong>The Creche</strong> — The shared pool of citizen tokens all players recruit from. Treat it as an unlimited resource.</p>
  <p><strong>Idle Citizens</strong> — Tokens on your Citadel waiting to be assigned. Citizens on a unit represent that unit's current health. Citizens cannot be voluntarily flipped between talent and drone.</p>

  <h3>Card Types <span class="page-ref">[p. 13]</span></h3>
  <ul>
    <li><strong>Units</strong> — Soldiers, mechs, merchants, statesmen. Forged and deployed into lanes to attack and defend. Max 3 per lane.</li>
    <li><strong>Facilities</strong> — Forged to the left of your Leader. Activated by placing idle citizens on them. Either trigger once or maintain a perpetual effect while staffed.</li>
    <li><strong>Augments</strong> — Attach permanently to a unit or facility (yours or any opponent's). Scrapped when the host is scrapped.</li>
    <li><strong>Echoes</strong> — Your victory points. Score 10 to win. May never be placed in a scrap pile. Once scored, they are safe.</li>
    <li><strong>Reflexes</strong> — Play from your hand at any time during your forge, battle, and move phase, or between turns. Takes effect immediately; never enters the forge.</li>
  </ul>

  <hr class="divider" />

  <h3>Detailed Card Type Rules</h3>

  <h4>Units <span class="page-ref">[p. 15]</span></h4>
  <p>Units have three stats: <strong>Attack</strong>, <strong>Armor</strong>, and <strong>Health</strong>. New units deploy to the back of a lane. Add health tokens (up to the card's maximum) before the end of the forge phase they were revealed in.</p>

  <h4>Facilities &amp; Leaders <span class="page-ref">[p. 16]</span></h4>
  <p><strong>Triggered Abilities:</strong> Trigger once when the required citizens are all placed on the empty facility simultaneously. Reuse by removing all citizens first.</p>
  <p><strong>Perpetual Abilities:</strong> Active as long as the citizens remain. You may leave them indefinitely — return them during Upkeep only when you choose to.</p>

  <h4>Augments <span class="page-ref">[p. 18]</span></h4>
  <p>After forging, attach to any unit or facility in play (as specified by the card). A card may hold any number of augments.</p>

  <h4>Echoes <span class="page-ref">[p. 18]</span></h4>
  <ul>
    <li>An Echo <strong>may never be scored in the same turn</strong> it was placed in the forge.</li>
    <li>An Echo may <strong>never be placed in a scrap pile</strong> by any means.</li>
    <li>The forging talent returns to your Citadel <strong>unflipped</strong> when an Echo is scored.</li>
    <li>Once scored, Echoes are <strong>safe and cannot be stolen or destroyed</strong>.</li>
  </ul>

  <h4>Reflexes <span class="page-ref">[p. 19]</span></h4>
  <p>Reflexes take effect when you move the required citizens from your Citadel onto the reflex. They last until the beginning of your next upkeep phase, then are scrapped.</p>
  <p><strong>Out-of-turn play:</strong> You may play reflexes or use abilities during the battle phase, at the start and end of an opponent's forge and move phases, and between player turns.</p>
`;

export const GUIDE_SECTIONS = [
  {
    id: 'intro',
    label: 'INTRODUCTION',
    content: INTRO_CONTENT,
  },
  {
    id: 'setup',
    label: 'GAME SETUP',
    content: `<h2>Game Setup <span class="page-ref">[p. 8]</span></h2>` + RULES_SECTIONS.setup.content.replace(/<h2>[^<]*<\/h2>/, ''),
  },
  ...PHASES.map(p => ({
    id: p.id,
    label: `${p.number}. ${p.name.toUpperCase()}`,
    content: `
      <h2>Phase ${p.number}: ${p.name} <span class="page-ref">[p. ${p.page}]</span></h2>
      <div class="callout">
        <span class="callout-label">Summary</span>
        ${p.summary}
      </div>
      ${p.beginner}
      ${p.advanced ? `<hr class="divider" />${p.advanced}` : ''}
    `,
  })),
  {
    id: 'advanced',
    label: 'ADVANCED RULES',
    content: `<h2>Advanced Rules <span class="page-ref">[p. 28]</span></h2>` + RULES_SECTIONS.advanced.content.replace(/<h2>[^<]*<\/h2>/, ''),
  },
];

// ── QUICK REFERENCE DATA ──
export const QUICK_REF = {
  battleSummary: [
    { step: "1. Declare Attack", desc: "Choose your attacking lane and units (front unit must be included). Choose the opponent and their lane." },
    { step: "2. First Combat Round", desc: "Line up front units from each lane. Any player may play reflexes/use abilities. Resolve damage simultaneously." },
    { step: "3. Additional Combat Rounds", desc: "Attackers slide down to face the next defender. Previous attackers do not deal damage again but still take damage." },
    { step: "4A. Breach (No Defenders)", desc: "Look at cards equal to total attack value. Score all Echoes found." },
    { step: "4B. Breach (Living Defenders)", desc: "Each attacker's breach value is reduced to 1. Look at that many cards. Score all Echoes found." }
  ],
  turnOrder: [
    { phase: "Growth", action: "Draw 2 talents from creche → Citadel" },
    { phase: "Upkeep", action: "Return citizens from cards; advance forge talents +1" },
    { phase: "Forge", action: "Play cards face-down, accelerate, reveal completed" },
    { phase: "Battle", action: "Optionally attack with one lane" },
    { phase: "Move", action: "Move one unit by one space" },
    { phase: "Draw", action: "Draw up to 8 cards" }
  ],
  deckComp: [
    { item: "Faction Cards", count: "32 unique" },
    { item: "Echoes", count: "20" },
    { item: "Total", count: "52 cards" },
    { item: "Starting Hand", count: "8 cards" },
    { item: "Hand Limit", count: "8 cards" },
    { item: "Win Condition", count: "10 Echoes (12 recommended 2P)" },
    { item: "Units per Lane", count: "Max 3" },
    { item: "Lanes per Player", count: "2 (Leader + Citadel)" }
  ]
};
