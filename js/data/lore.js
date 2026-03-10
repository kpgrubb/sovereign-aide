// ──────────────────────────────────────────────
// LORE.JS — World lore and faction stories
// Source: Sovereign_storybook.pdf (Draft Three)
// ──────────────────────────────────────────────

export const WORLD_INTRO = {
  title: "The New Eden",
  attribution: "—Bishop Malachi Renquist, 'Recollections of Genesis'",
  content: `<p>When Wormwood fell, humanity was extinguished with it. A burning star that would force the final embers of our shattered species into the void.</p>
<p>Our home is now a distant memory, so many eons after the Fall. Terra was lost. Our people slept for millennia, carried by the winds of the heavens and the hopes of their ancestors. This is now the story of Apsyntion — the world we found at the end of our exodus.</p>
<p>Apsyntion: the Eden we sought for so long among the stars. Emerald cloud banks hid acres of fungal mats, overflowing with life. Terran astronomers could not have predicted the density of native forms, or the hostility. When the Ark Apsynthos impacted the surface, something broke inside her. When the first men set foot upon this planet, most slumbered within the womb of the great ship.</p>
<p>These first we call the Windwalkers, and it was generations before the Ark would release its remaining sleepers. The Windwalkers lived among these beasts of Apsyntion — these <em>Lilin</em> — learning the ways of Eden and forgetting their history. They are lost to us.</p>
<p>Nine tribes would be awakened this way — nine variations on the embers of the human race. The tenth tribe was born from the remnants of the Ark itself, combining the living mind with the body of a machine. These abominations lurk in the shadows of Apsyntion. We will never again be slaves to machine Gods.</p>
<p>These ten factions now seek the greatest glory — to return to the Ark and rebuild her in their image. It is twisted and ancient, but the wreckage still hums with the power of a forgotten sun. Each tribe carries hereditary secrets: these <em>Echoes of the Ark</em>. Each of us carries a piece of the key to our ancestral home. And this prodigal instinct will drive us to a terrible war.</p>
<p>If Wormwood was a punishment for the hubris of our forefathers, then we carried the echoes of our damnation into the stars.</p>
<p>Century after century the Ark would spill the sleepers onto the soil of this alien world, and they each made a home for their ideology. Warriors were born into conflict. Peacemakers sought to end it. Cities rose, and fell. The children of men were fruitful, and multiplied.</p>`
};

export const FACTION_LORE = [
  {
    name: "Windwalker Clans",
    color: "#7bc4a0",
    expansion: false,
    lore: `<p>The ancestors of the Windwalker Clans were the first people to leave the wreck of the Ark and venture out into the barren expanse of Apsyntion. Isolated for a very long time, they formed a strong cultural connection with the planet — they are one of the few civilizations that do not see Earth as "home." Windwalker territories are nebulous and ever-shifting, but always close to the Lilin hives that dot the Fungal Steppe.</p>
<p>Because of their proximity to the native Lilin, Windwalkers have centuries of learned experience growing food and oxygen using the xenofungal mat, so they are not in the same dire straits as the other human factions. They have a surprising amount of ancient technology scavenged from the Apsynthos — and they have an oral tradition of passing down the location of the Ark from generation to generation in order to keep its grave a secret.</p>
<p>Windwalker Clanspeech has deviated dramatically from Old-Earth languages, and they use tradespeak to communicate with the other factions. Their languages incorporate sounds from the Lilin communities they live near, and they have developed various forms of non-vocal communication to trade with and "speak" to the alien Lilin.</p>
<p>Most Windwalker Clans are semi-nomadic, living in large yurt-like structures covered in colorful flags and pennants to catch the endless wind of the Steppe. Some clans live in permanent city-states carved out of cliffsides. The most well-known of these structures are the massive Wind Cathedrals — stone edifices that mimic the towering Lilin hives, sounding a haunting melody at dawn and dusk that carries for miles.</p>`,
    tale: {
      title: "The Wise Woman's Tale",
      text: `<p>Her hands are the last to fail her. She tries to wrap her gnarled fingers around the delicate strands of the spore stalk, but the stubborn digits refuse to cooperate. These wrinkled hands are like visions of another life, one she barely remembers inhabiting. Did she leave by choice? Was she sent into the marsh because it was finally the end time?</p>
<p>She is somewhere in Lilin territory now — she knows this because she can hear their calls echoing deep in the mist. Rumbles from the ancient gods, high thrumming calls from the little spirits that flit like shadows themselves. She remembers being so afraid of the mats when she was a child, but now they seem so welcoming. Warm, like returning home from a long journey.</p>
<p>Now, golden spots in the air — the tiny motes that send you reeling. Sporefall. The elders must have sent her here. Was her mind unraveling from age, or was it the spores tampering with her memory? Did her grandchildren send her to die, here past the gates of Eden?</p>
<p>Feet aching, she sits on the ground. Closes her eyes, feels the pulse of Apsyntion, and is calmed. She need not remember why. She is here now, and the messengers of the world will arrive soon.</p>
<p>The air ripples, the little motes gently settling on her skin as she feels the rhythmic thump-beats of slow, heavy footfalls. A great beast, walking like a mountain, parting the mist with fanlike tendrils. It kneels at her feet, quiet as a breath for a being so titanic. Antennae caress her face, and she rests her palms on its bulk, feeling the gentle breath of the Lilin. Its breath is hot, humid, full of oxygen and hints of sulphur.</p>
<p>She explores the smooth chitin scales with her fingertips, and feels the heartbeat behind — surprised somehow at the steadiness of it. The creature bellows, and deep in the mats there are quakes in response. She feels its voice in her bones, in her heart, and remembers how her mother used to tell her stories of the angels at night — how she would tell her own children before they were grown that the great beasts watch over the First Children of Wormwood.</p>
<p>Enormous wings enclose her body. The last thing she sees is the fan-feathers, now mottled with color, the great Lilin speaking to her with light and electricity. Her body is so heavy, her fractured memories such a burden. There was pain once, but the journey into the marsh has rendered it dull. The fans close, and she sleeps.</p>`
    }
  },
  {
    name: "Utopian Remnant",
    color: "#4a9eff",
    expansion: false,
    lore: `<p>The Utopians are a very old society — humans who found a way to inhabit the only successfully terraformed area of the planet. As such, the Utopian Remnant is the only civilization that can breathe the air and drink the water of their homeland. But there is a price to their paradise: the Remnant is a miniature eden that can only exist inside the protection of energy shields under constant maintenance. Childbirth is strictly controlled, and anyone who violates the many laws of the Remnant is exiled to the wastes.</p>
<p>Utopians are known to live a long time and devote themselves to scholarship. They are the origin of the Chimera — humans spliced with cybernetic technology that gives them access to the nanite cloud permeating everything on the planet. Other civilizations see these genetic inventions as witches and heresy, but the Remnant does not accept religion within the shield.</p>
<p>The Utopians have access to the great southern glacier, offering fresh water but causing conflicts between the Myrmidon Dominion and what was once Coriolis. These wars tore the planet apart during the last century, and all three factions have had to recover their power.</p>
<p>Because survival is not such a dire concern, the Remnant has had time to research the realities of human occupation on Apsyntion. They maintain the corrupted Datalinks recovered from the Ark, and as the centuries passed have pieced together many of the mysteries of the ancients, rebuilding many of the old technologies of Earth. One question is ever-present: why were the arks sent in the first place?</p>`,
    tale: {
      title: "The Empath's Tale",
      text: `<p>Hua had always preferred the parks near the shield. That space right between the trees and the invisible barrier that made her hair stand up and her jewelry twitch like it was dancing. The leaves on the trees gently moving in a breeze that wasn't a breeze at all — just a piezoelectric current that held the air in and the world out.</p>
<p>The network was buzzing today. Fi-threads and fatlines from the messengers, each with a couple seconds of the battle at Hawley Crater. She tries to concentrate on a collection of Sufi poetry, but every stanza about life and love is sandwiched between a holovid of tribals dropping mechs at this very second.</p>
<p>She mutes the book, and lays in the grass instead, just staring into the sky in silence, watching the gravships cut clean lines through the cloud layer. This was why she could never have finished the Academy. Empath training was horrible. Bad enough just getting the network feeds, rather than end up on the front lines where you can never have a thought to yourself. Just noise, noise, noise.</p>
<p>The Ivory Citadel is so beautiful this time of day, where the spire touches the shield at the tip of the sky. She can make out the distant rumble of cannon fire at the border, with the rhythmic pops every few seconds. She taps her foot in between the cracks — a little impromptu drumline.</p>
<p>Tap, tap, tap — then, an explosion of sound. A rushing torrent of wind that threatens to tear her apart. The leaves are torn from the trees, the sky is suddenly a sickening color. Then, as if remembering, the shield crackles back to life. She breathes in shallow gasps — some stray bomb from the Crater had maglocked the shield for four seconds. Just four seconds.</p>
<p>Hua can barely follow the newstream. It's just noise, noise, noise. The war will take her home. The war will take her air.</p>
<p>Behind it all, her poem book is repeating some phrase or another. Over and over again: <em>Silence is the language of god, all else is poor translation.</em></p>`
    }
  },
  {
    name: "Neogenesis Church",
    color: "#e0c44a",
    expansion: false,
    lore: `<p>The Church is the oldest religion unique to Apsyntion — a relic of Old Terran faiths and new superstitions. The Church believes in the supremacy of human beings, and its primary focus is fanatical adherence to a doctrine of xenophobia. Mankind will only be whole again when we are free of the yoke of the alien and the machine alike.</p>
<p>There is no central city for the Neogenesis Church, but members swear allegiance to the Maestra — a hereditary matriarch who leads both the religion and military. A widespread, decentralized army is called The Choir, while Church Inquisitors act to suppress heresy in regions where their dogma has taken hold.</p>
<p>Most major cities on Apsyntion have at least one Neogenesis Chapel, and the Maestra's call to crusade can result in absolute social upheaval in a matter of days. The Church believes that Wormwood is key to paradise — finally returning humanity to its home in the garden of Old Terra.</p>`,
    tale: {
      title: "The Maestra's Tale",
      text: `<p>An enormous stone cathedral — acres of marble plaza dwarfed by a white-robed throng. Thousands of rapt pilgrims listen intently to the Maestra, clothed in black feathered vestments. Her eyes are piercing, her voice trained and lyrical. The feathers drift in the wind as she recites a prayer:</p>
<p><em>"…and the sinful lure of thinking machines — the regret of our fathers, and their fathers before them. We pray for wisdom against hubris—"</em></p>
<p>The mass responds as one: <em>"—and deliverance from Gehenna. Amen."</em></p>
<p>The throng drops to their knees, the ivory congregation falling prostrate as one being. Then it rattles. Shudders. An airship crests the ridge, venting heat from its fins and pores. The pilgrims raise their heads, squinting into the setting sun.</p>
<p>The Maestra's feathers bristle as she walks through the crowd to meet the ship. The messenger is young, with wild hair and a wrinkled flight vest.</p>
<p>"You're disturbing my flock," she says.</p>
<p>"They found an angel in the desert," he responds.</p>
<p>With this, her eyes go wide. Darkly, she asks: "How many survivors?"</p>
<p>It is a blur as she is ferried to the Citadel — brought to the containment chamber and informed of the danger in restraining the Nephilim. She enters the chamber with shaking hands clasped behind her back, and is surprised at the formlessness of it. The Nephilim is like a great black egg, held fast by suspension fields. It shifts as if breathing, but is silent. She knows it was alive when Wormwood fell, alive on the Ark before the first men walked the surface of this world.</p>
<p>When she asks it to help her find the Ark in exchange for its freedom, it speaks in a tongue as ancient as all mankind. She will have scribes translate its speech day and night. She cannot understand the language, but she feels they are on the path of transcendence.</p>
<p>It is so unlike the thinking machines that walk the wastes today, she thinks — this mass of nanites we call "angel."</p>`
    }
  },
  {
    name: "Cult of Apsynthos",
    color: "#9b7fd4",
    expansion: false,
    lore: `<p>The Cult is sometimes mistaken for a particularly secretive Windwalker tribe, but nothing could be further from the truth. In reality, the Cult is a group who have taken to living in areas of the Fungal Wastes that Windwalkers fear to tread, due to the presence of a toxic psychoactive fungus that can easily infect humans. Cult communes are often built inside abandoned Lilin biostructures.</p>
<p>The Cult incorporates ideas from the Neogenesis Church, but has warped them to meet the demands of a semi-conscious fungus that affects human minds and causes changes in both behavior and biology. Members are heavily indoctrinated as children on the divinity of the Lilin, and their roles as the true inheritors of this world. Members slowly splice fungal growths into their bodies over their lifetimes until their nervous systems are completely taken over, and they become willing slaves to their mycotic masters. These elders they call "Chimera."</p>
<p>Cult members willingly spread fungal spores to other civilizations in an attempt to spread the holy end of humanity, and most traders steer clear of them for this reason. The fungus does grant them psychic and physical boons — older members lose their humanity, but gain inhuman strength and a limited form of "telepathy" through cellular communication with the mycelium that lies under most of the planet's crust.</p>`,
    tale: {
      title: "The Chimera's Tale",
      text: `<p>Fei has known this day was coming since she was old enough for the first stitches, yet still she is afraid. There is so much about the ritual left unexplained — her older classmates have been through the other side, and to her, they might well have died. The physical changes are obvious, but it's the more subtle mental alterations that fill her with dread. She likes who she is.</p>
<p>The junior mycologist nods to her, and she rises. She is in the Chamber of Guf. Then the stitching chair, all leather and steel. Her heart is like a flywheel gone mad, about to break from the not-knowing. She braces for the pain as the needle enters her back, but feels nothing. A bit of cold and the stitch-stitch and tut-tut of the mothers. They are laughing and congratulating themselves when the screaming starts.</p>
<p>When it is done, she is brought into the Girl's Hall, where she is met with embraces. Another girl lifts her shirt so they can see her little feather-like tufts poking out from each vertebrae. The others ooh and aah at the artistry of the graft. Fei hears nothing but an echo of the stitching, and is grateful that she can be a child for a few more moments.</p>
<p>In morning devotions, they are paired off — Fei with Heja — and they kneel on reed mats. Back to back, eyes closed, Fei concentrates on the droning of the provosts, taking a breath at each of the bells. Then, a sound in her mind. Faint at first, mumbly and unclear, but sharper and sharper, louder and louder with each chime of the bell.</p>
<p>And then it is so loud and clear she cannot contain herself any longer. <em>"Tremble not, for we are here to guide you forward unto eternity,"</em> she says, trembling herself at the clarity of it, <em>"our gifts of the flesh are a covenant shared."</em></p>
<p>Fei turns to grab Heja's shoulders. She looks into her eyes, expectant — and Heja just says: <em>"That's exactly it. Word for word. God, even the inflection of it. Like an echo."</em></p>
<p>On the other end of the hall, Jin stands abruptly — she's shouting something, clutching her ears. <em>"I can't stand it! It's just so much noise! It's too much!"</em> The girls all turn to Jin, and then to the provosts, wide eyes and some nervous laughter. Jin collapses to the ground, still clutching her ears, rocking herself from side to side.</p>`
    }
  },
  {
    name: "The Dronestate",
    color: "#a0a0b0",
    expansion: false,
    lore: `<p>The Dronestate is an independent enclave of Drones who have escaped from the stratified societies of Apsyntion, most often fleeing the Undercity. They are highly militant and extremely distrustful, but rely on trade to fuel their fledgling sovereignty. Most of their technology is old and outdated — broken relics from the old wars between the Myrmidons, the Remnant, and the ruins of Coriolis.</p>
<p>Drones here speak of freedom and revolution. They wage a hidden war to liberate their brethren, using datahacks, subterfuge, assassination, and sacrifice to achieve their goals. In a society where all are equal and many have been literally bred for work, the Dronestate is an extremely efficient production machine. While they invent very little, they can copy and build technologies in the field, or easily restructure their societies without upheaval.</p>
<p>The architecture of the Dronestate is a ramshackle maelstrom of habitations and workplaces, accommodating a wide variety of body shapes and abilities. They welcome all who throw off the chains of oppression, and would use Wormwood to cut those chains.</p>`,
    tale: {
      title: "The Drone's Tale",
      text: `<p>Karou thinks: day after day, year after year, it's monotony. Stamp a holofoil here, send it down the assembly. His stimsuit is itchy and cold, his mask feels like breathing plaster. He knows it's not the worst job around — he gets three meals a day, which is pretty damn good compared to working a crustcrack gang like the old man. He just wishes one of the masters would call him by his name and not his number.</p>
<p>And then he sees this thing, and it just makes him mad. Out on the catwalk in plain view, an overseer is ruining some poor girl barely out of the Creche — and he's got no idea she's even related to Karou. The bastard thinks he's got it made, he's just so untouchable. He doesn't even consider that Karou might be faster than he looks, barely has time to say "get back to—" before he's face to face with the ground five stories below, just a red stain at street level.</p>
<p>And then one thing leads to another, adrenaline being what it is — Karou has his little sister in one hand and a chunk of overseer hair in the other. He thinks: maybe I've gone too far. But that drilldog at the end of the line has got his fists in the air. And the stampers and the junkers are saying "Karou" like he's got a real damn name for once.</p>
<p>See, there are ten Drones for every overseer, and the grim bastards don't have half the muscle of a graftmule straight out of the Creche. When it's all done, his little sister gets this holo going, and it says: <em>RISE BROTHERS.</em></p>
<p>In a month's time a half a hundred scrappers join them out in the high desert, and when the first iron towers rise above the dirt warrens the cheers are deafening. Drones come from Coriolis, and the Great Mesa, hearing stories about the crew that tore a hole through the Undercity just to see the light. Each brings new skills, or scrap, or brute strength — every hand makes the Dronestate stronger.</p>
<p>Every hand is Karou's: a calloused fist raised against the injustice of their birth.</p>`
    }
  },
  {
    name: "Machina Sapiens",
    color: "#52d9d9",
    expansion: false,
    lore: `<p>Machina Sapiens is the designation of the many sapient and non-sapient machines living on Apsyntion. It is the most mysterious and unknowable faction, having evolved from the enormous mass of nanites originally used by the Ark in an attempt to terraform the planet. Machina Sapiens communities form primarily in the inhospitable acid wastes, but they have been sighted at the borders of many human settlements, and vanish quickly into the mists.</p>
<p>Synths are known for confusing behavior, mimicking human and Lilin behaviors — which extends to architecture and warfare. They range from totally autonomous insect-like machines to superintelligent AI nanite hives. It is thought that they worship Wormwood as their creator, but this is speculative, as their behavior might well be mimicking our own religions.</p>
<p>What is known is that the synths can communicate directly with the nanite cloud that permeates the planetary atmosphere — they are effectively able to see everything and everyone on the planet. It is easy to consider how they might think as a single entity, almost like the xenofungus native to the steppe.</p>`,
    tale: {
      title: "The Mother's Tale",
      text: `<p>It's sunrise when she finds the first effigy. Middle of the plantation, just planted in the ground like a fungus cap stalk. A little man made of sticks, its dried-hyphal face painted with scarlet husk juice. She leaves it, calls her children into the field, asks why they'd be so foolish when the crops are withered and pitiful. But the children recoil at the thing in the ground, and when she finally tears it out of the moss, she sees its dry dead roots go deeper than they could have driven it. Far too deep for human hands.</p>
<p>The next morning, there are half a dozen. All scarlet faces, and deep-rooted. She burns the little stick creatures and says a muffled prayer into the fumes. She tries to tend the stalks, but in her heart she knows the plantation is failing. Maybe nanite crops are failing out there in the wastes, wherever the machines have made their nests. Maybe they feel hunger now, or fear, or whatever passes for a feeling in the gut of a synth.</p>
<p>She's awoken that night by the children's whispers — they've huddled together at the window. When she puts her face to the port she sees four hulking silhouettes against the stars. They are diligent, if clumsy — small articulated fingers at the base of each thick leg working quickly, pushing the effigies into the moss. In the moonlight, she catches the glint of their eyes. Dozens of lenses set into that shadow carapace. <em>Synths,</em> she whispers, harsh like a curse.</p>
<p>She keeps her eyes on that window until the machines have dragged their hulks away with the morning sun barely cresting the mesa. She wakes the children in her arms and leaves the safety of her home with each hand in hand.</p>
<p>When she puts the children down for bed, they ask about the metal men and the sticks. And she tells them: <em>we were made in His image, they were made in our image, and all things are driven to speak to their Creators.</em></p>`
    }
  },
  {
    name: "Myrmidon Dominion",
    color: "#e84b4b",
    expansion: false,
    lore: `<p>The Dominion is a warmongering horde of nomadic pillagers whose territory stretches from the Fungal Waste to the Southern Glacier Boundary. They are known for brutality and rigid hierarchy, and in the past waged a horrific war against all the peoples of Apsyntion.</p>
<p>Despite this, the Myrmidons are remarkably fair in meritocracy compared to the other civilizations. There is equality among their soldiers — which is nearly every adult — and anyone who demonstrates merit can rise to a position of leadership. While they are known to enslave conquered cities, anyone who proves their strength can become Myrmidon.</p>
<p>Mechs and combat exosuits are common technologies employed by the Dominion, but they have an absolute distrust of synths and machine minds. In combat, Myrmidon footsoldiers are driven into battle frenzy through "battle hymns" — a sort of audio drug piped through brutalist minarets they construct through their warzones.</p>`,
    tale: {
      title: "The Soldier's Tale",
      text: `<p>Bombardment in 414 — that's what the battle chatter spits in Bardot's head — and his whole squad moves like a school of glistening fish, turning and darting as a single being. We are good boys. Strong boys. Plucked from the same creche, raised in the same arenas. Brothers of the tribe.</p>
<p>We silver fish run headlong into the rear trench as artillery tears the front lines, scattering bodies and bursting against the shields. One of our brothers didn't move fast enough and is caught in the burst. Bardot feels him wink out, his chatter going quiet in his mind. Remorse ripples through the rest of us for a moment, before the guns go quiet and we are on our feet, firing in ranks.</p>
<p>We are all linked, all one, in the blanket of the battle hymn. When the hymn's pulsing mental vibrato takes hold, we move without pause, without thinking, revel in the ecstasy of conquest. We are where we should be, and the Remnant dogs are not. Bardot is grinning ear to ear as he puts them down.</p>
<p>But the Remnant have no honor, no glory — they sent a war witch. He never sees her, but the witch's song slams into him like shrapnel. Boys start winking out. Her song cuts his net, sends him into a nightmare where he is alone. The battle hymn from the spotter ships still reaches him, but now what was beautiful is only gibberish — the battle is smoke and horror.</p>
<p>Through the adrenaline that blurs his vision, Bardot sees the empath sphere in the distance, the Chimera inside singing and tearing at his mind. He raises his rifle, his hands shake, and he fires blind. When his gun is dry, and the song is silent and his brothers are gone — dead or in the ships — he is alone in the wreckage of a beautiful city. And he is afraid for the first time in his life.</p>`
    }
  },
  {
    name: "Undercity Brotherhood",
    color: "#e06b3e",
    expansion: false,
    lore: `<p>The Undercity is the largest human society on Apsyntion, with millions of inhabitants living deep within the bowels of the planet. The Undercity is old, and dark, and uses a caste-based society even more stratified than the Talents and Drones brought from Old Terra.</p>
<p>In the City, Talents literally look down upon the unwashed masses, who might never see the sun in their lives. Lower-caste Drones are genetically and physically modified to be better workers, used essentially as domesticated labor. Constant autocratic propaganda, hypnotic drugs, and the effects of cloning have made the Talents and Drones of the Undercity into separate species.</p>
<p>The Undercity aristocracy sees the Echoes of Wormwood as a means to profit and continue their hedonistic existence, and holds no real reverence for the stars. The Drones a mile below the pleasure domes see Wormwood as a potential means of escape.</p>`,
    tale: {
      title: "The Dealer's Tale",
      text: `<p>People always talk talk talk, like he wanted to be a stim pusher all his life. But that's just stupid. He doesn't want to be anything — there's just a whole lotta levels in the city he hates. So he sells stims to kids and old ladies, and he just swallows the little naggy feeling that eats at his guts.</p>
<p>Domai is third-gen clonestock, so he doesn't have any high ideas about who he is or where he comes from. When he sells to Talents, they give him this stare like he's got an extra set of eyes, or four arms — either of which he might have ended up with, if they'd realize how perfect his genotyping really is if they took a holiday to the boreholes, see what happens when workstock are given "gifts" from superiors at the up-top. He's a nobody, but more or less human. That's something downcity.</p>
<p>Downcity, where people get less like people and more like machines the deeper you get, into the hives and warrens where overseers refuse to tread themselves. Men bred like animals, or animals bred to speak and stand — what is the difference this far under the crust?</p>
<p>He loves Ophai, though she can't love him back — bred out of her stock. She never lies, and he believes her when she says she doesn't miss it. But love is only one way between them. In the middle of the night it fills him up with a hollow wanting.</p>
<p>One day, she's not there anymore. Someone like her has taken her place. It looks like her. Smells like her. But remembers nothing. Feels even less. Fourth gen maybe, or a staple wiped her brain like a bad holo. Just a shell. He's probably the only one who remembers she could laugh late at night when dew-water poured in from the borehole above.</p>
<p>This time when he leaves the Dome, he goes straight down into the bowels of the city, and he sees his own face on half a dozen beasts of burden in the Forge. He doesn't offer them meat, or water. But he holds the hands of each one in turn — and he can relieve them of their inhumanity for a few minutes today, while they look on with placid faces, confused by the break in routine.</p>`
    }
  },
  {
    name: "Coriolan Exiles",
    color: "#c9a227",
    expansion: true,
    lore: `<p>Once, the great city of Coriolis was the most prosperous city on Apsyntion. But it grew fat and wealthy, its bloated aristocracy hungry for riches outside its borders. The war between the three houses — Utopia, Myrmidon, and Coriolis — ended the long peace that had allowed Coriolis to grow so large.</p>
<p>In the end, Coriolis was utterly devastated. Its riches were looted, its people desperate and aimless with their war machine annihilated. These Exiles have been forced to find a new way of life, melting down golden thrones to make bullets. Merchant caravans of Exiles roam the Steppe, trading between cities that are warier of each other than of the former nobles with nothing to their name.</p>
<p>The Exiles retain large herds of Ceph — a genetically modified native lifeform that gives them a kind of rural wealth. The core government that remains still rules from the ruins of old Coriolis, but the city must be rebuilt slowly over the corpse of the old dynasty. Exiles are often highly ornate craftsmen, or highly educated statespeople, and retain a contingent of well-trained soldiers and honor guardsmen among a poorly equipped populace.</p>`,
    tale: {
      title: "The Exile's Tale",
      text: `<p>In her memory, they were dancing. Two golden statues, a bull ceph and its mate — the delicate detail of the sculptures so lifelike she felt like they might come to life at any moment. Her father had told her never to touch them, that the soft gold might bend at her fingertips, so she would sit with them and imagine the fairy tale of their courtship.</p>
<p>There were so many extravagances then, such finery that her hands flex at the memory of silk clothing. Her house had a room for sitting, a room for eating, and a servants' room that was her favorite place to hide from her siblings. There was an enormous tapestry that adorned the front hallway, woven of some fine silvery metal — and in the swirling luxury of the sephirotic patterns were all the names of all the women of her family going back two centuries. There, at the bottom, a fresh swath of silver thread writ her name into permanence. <em>Kala. Kala of Damasca Coriolis.</em></p>
<p>Memories are hard to shake, she thinks, because they never grow old. Only distant.</p>
<p>The servants fled the night before the shells fell into the old districts. Then came the day that her father tore the tapestry to ribbons, to bind the wounds of a platoon of soldiers stationing a field hospital in what was once their dining room. There was the day the first gravships rocketed overhead, and the first bombs fell into the noble quarter — the airburst so close it shattered every window on both sides of their house, cutting her mother's leg to the bone.</p>
<p>And there was the last day she could remember in what was once Coriolis: the day they melted down the two golden ceph to make bullets.</p>
<p>Now Kala fits the saddle bags to a younger pack ceph, barely weaned but old enough to carry. The bags are filled with all the luxuries fit to sell — copper and steel coils, shattered vid glass, flakes of silver and flagons of ceph milk. The saddles are what betray their history: elegant embroidery and glowing wires that would make trademeet merchants smirk in their own private circles.</p>
<p>The yearling ceph shudders under the load, its spine plates raising up in protest — and just for a moment, it looks like the statue of the great golden bull: imposing, defiant, all flaring armor and hot breath. It quiets though, resolution spent. And she can see then her reflection in its downturned eyes.</p>`
    }
  },
  {
    name: "Red Hegemony",
    color: "#c94e4e",
    expansion: true,
    lore: `<p>The pirates and rogues who live on the cloudbases of the acid wastes are known colloquially as the "Scarlet Hegemony" — a loose collection of slavers and criminals who have escaped justice in the other states of the world. The name refers to the scarlet flags traditionally flown by antigrav pirates preying on transports for years.</p>
<p>Sky pirates attack from nowhere and are a common problem in the tradelanes. Their ships are cobbled together from warscrap, but because they are unhindered by city allegiances, they use any and all forbidden technologies — synths, mechs, aliens, anything is fair game.</p>
<p>There is no commonality among these anarchist privateers but an ethos of survival. Their leadership shifts endlessly, but the strongest rise to be feared by the rest.</p>`,
    tale: {
      title: "The Pirate's Tale",
      text: `<p>The Tempest of the Bloody Marches. The Great Pillar of the Black Fleet. The Vulture in Red. Clad in a billowed cloak of black soot, the vessel would be a spectre if it made less of a racket. Its engine is a bolted amalgamation of a half-dozen dead ships, and the wailing it produces is as much by design as by necessity. The deep scarlet of the fusion drives, the black clouds left in its wake, and the unholy screech of straining metal give it a hundred names. <em>The Mahadeva.</em></p>
<p>Pavan has slept in its belly for two years, and the scream of acceleration still makes his knees shake. Not like he chose this ship. Not like he chose this life. But whenever he pulls the short straw and has to clean the bounty hold, he knows for a fact there are worse ways to be a guest of the Mahadeva.</p>
<p>Eight hellcats return today. Nickaj was the ninth — and he's meat now. The captain spits: <em>Damn fool came in too low and the skimmers flipped him onto his back. Repulsors tore the cat in half. It's fucked. Cross it off.</em> That's the long and short of it: the eulogy and the burial.</p>
<p>So Pavan and the decksweeps shimmy up into the holds to unload the fat cats. The first is full to the brim with food — the rich aroma of engine-warmed soldier bread sets his mouth watering. The second ship is full of metal. Random electronics, fusion cores, half-cracked screens. The third, though, that one's a rough haul. Full of people — kids and crying women and old men fit more to eat than work. Whatever the raiders can catch goes in the ship. And Pavan remembers the nets and the manacles around his own wrists, and he sneers at this motley group for being too slow and too greedy to get away.</p>
<p>The Captain hands a little one over to Pavan: <em>"This one's a sweep, so you tell him what to do around here. You're a big man, eh Pavan?"</em></p>
<p>Then he smiles a grim little smile, and he's off. Pavan though — he's all smiles himself, and he hums to himself as he locks the child in. A squirmy, measly little thing. <em>Pavan was never like that,</em> he thinks. <em>He just had to wait for the Captain to notice how worthy he was all along.</em></p>
<p><em>He remembered my name!</em></p>
<p>That night, as he wraps himself in the crash webbing they call a bed, he doesn't shiver when the engines kick up like the scream of the damned. He's older now, and bigger, and belongs to the Mahadeva.</p>`
    }
  }
];

export const LILIN_LORE = {
  name: "The Lilin",
  color: "#7bc4a0",
  subtitle: "Native Inhabitants of Apsyntion",
  lore: `<p>Before the star fell, our cities stretched across the horizon. At the perihelion equinox, the voices of the Old Mothers would rise as one in the great spires of the plains — the song could be heard across the whole of the continent, so thundering it would shake the northern sands. Now our voices are faint echoes of what they were, and the plains are a barren waste.</p>
<p>The star fell to Planet, and the sky was like blood. The clouds that blocked out the sun and moons grew thick and filthy, pregnant with a black rain that sickened our children and poisoned our eggs. For a generation, there was darkness. The fires in the north finally went out, and refugees from the crater spoke of an invisible specter that haunted their burrows — the haunting ghosts of the dead star that burned them in their homes.</p>
<p>The Old Mothers remember the dark years, and that is why we build our cathedrals out of stone instead of mud. The daughters of the eighth migration saw horrors beyond imagining as the hunger consumed the weakened tribes. They journeyed here and thought to rebuild the cities of the plains, only to be pursued once again when the great star opened and gave birth to the Sky People.</p>
<p>When the Sky People first arrived we thought they were more spirits sent to haunt our Sleepers, and our shamans went out to meet them and frighten them off. We did not know then that they were flesh and blood — soft creatures like the inside of an egg. In pity we offered the Sky People our water, and they took our abandoned nests. In their fear they were dangerous, since they cannot understand civility, cannot grasp the principles of unity. They fought the tribes, they fought each other, and in their terror they burned the Spore Mats to cut off our memories.</p>
<p>You are the daughters of the ninth migration, born into a much different world. You will never see the gardens that the Mothers speak of in their dreaming, since the World is cold now and the stalks grow weakly. They are not evil and they are not animals, but they cannot hear the songs of their old ones — and in their short, isolated lives they cannot find peace nor purpose. Your daughters will learn their ways, and their war dances.</p>
<p>The star they called <em>Wormwood</em>, and it burns still, though it is like a shattered eggshell. The Old Ones alone know its location, and the Sky People are searching for its corpse, to use its last fire as a great weapon. We are caught in a hollow war, without meaning or purpose, but for the preservation of the breath of Planet.</p>`,
  note: `<p class="lore-translation-note"><span class="kw">Prometheus Datalog</span> — partial xenolinguistic translation: <em>fire, sky, sunlight, memory, Lilin (individual), Lilin (collective), human, prayer, sadness, sickness, Apsynthos (disaster), combat (warfare?). Additional patterns assumed — both electrocommunication and vector-dancing, including threat displays. Red pattern chroma confirmed, both reproductives and "drones," consistent with boundary aggression.</em></p>`
};
