export const suitElements = {
  Wands: 'Fire',
  Cups: 'Water',
  Swords: 'Air',
  Pentacles: 'Earth'
};

export const rankElements = {
  king: 'Fire',
  queen: 'Water',
  knight: 'Air',
  page: 'Earth'
};

// Both decks share the same sprite positions.
// The CSS key (king/queen/knight/page) maps to the same archetype:
//   king   = Fire of suit  → RWS "King",   Thoth "Knight"
//   queen  = Water of suit → RWS "Queen",  Thoth "Queen"
//   knight = Air of suit   → RWS "Knight", Thoth "Prince"
//   page   = Earth of suit → RWS "Page",   Thoth "Princess"
export const rankNames = {
  rws:   { king: 'King',   queen: 'Queen', knight: 'Knight',  page: 'Page' },
  thoth: { king: 'Knight', queen: 'Queen', knight: 'Prince',  page: 'Princess' }
};

export const rankDescriptions = {
  king: 'The Fire aspect of the suit — active, projective, and commanding. This figure initiates, leads, and embodies the pure yang expression of the elemental force.',
  queen: 'The Water aspect of the suit — receptive, reflective, and nurturing. This figure internalises the elemental force, expressing it through feeling, intuition, and depth.',
  knight: 'The Air aspect of the suit — mobile, intellectual, and changeable. This figure moves the elemental force outward through thought, communication, and swift action.',
  page: 'The Earth aspect of the suit — grounded, studious, and potential-bearing. This figure holds the elemental force in latent form, representing learning, messages, and new beginnings.'
};

export const suitOrder = ['Wands', 'Cups', 'Swords', 'Pentacles'];
export const rankOrder = ['king', 'queen', 'knight', 'page'];

export const courtCardData = {

  // ── WANDS (Fire) ──────────────────────────────────────────────────────────

  'king-of-wands': {
    suit: 'Wands',
    rank: 'king',
    mbti: 'ENTJ',
    title: 'Lord of the Flame and Lightning',
    description: 'The King of Wands is Fire of Fire — the pure archetype of inspired leadership and creative will. He is the entrepreneur, the visionary, and the natural born leader who acts from conviction rather than calculation. His authority comes not from position but from an inner fire that others feel compelled to follow. He is bold, magnanimous, and sometimes reckless in the pursuit of his grand designs.',
    jungian: 'Represents the fully individuated masculine principle operating through the Will — the Self expressed as creative authority. Psychologically, this figure embodies the integration of the animus at its most commanding, where personal vision aligns with archetypal purpose. The shadow is tyranny, where the drive for dominion eclipses empathy.',
    powerGods: 'The warlord king whose conquest is righteous because he believes wholly in his cause. Power expressed as dominance, the subjugation of weaker wills to a single blazing vision. Victory at all costs.',
    traditional: 'The patriarch blessed by divine fire — a leader who rules through God-given authority and moral rectitude. His flame is sacred, his word law. He protects and provides, demanding loyalty and obedience in return.',
    modern: 'The visionary CEO or founder who disrupts industries through charisma and tenacity. He builds empires through sheer will, inspires fierce loyalty, and tolerates nothing that dims his momentum. Success validates the method.',
    postModern: 'A critique of the lone genius myth — whose flame casts shadows on those who fuel it? The king\'s fire consumes resources, relationships, and the labour of countless unseen others. Leadership must be questioned as a social construction.',
    metaModern: 'The conscious leader who wields fiery vision while remaining accountable to the larger ecosystem. Sovereignty earned through integrity, not dominion. The flame shared rather than hoarded — illuminating rather than consuming.'
  },

  'queen-of-wands': {
    suit: 'Wands',
    rank: 'queen',
    mbti: 'ENFJ',
    title: 'Queen of the Thrones of Flame',
    description: 'The Queen of Wands is Water of Fire — passionate feeling channelled into radiant personal magnetism. She is the sunflower queen, warm and self-assured, who draws others to her simply by being fully herself. Creative, loyal, and fiercely independent, she knows what she wants and pursues it with warmth rather than force. Her authority is earned through genuine presence and undeniable vitality.',
    jungian: 'Embodies the anima archetype fully at home in the world — the feminine principle expressed through creative confidence rather than receptivity. She is the individuated self who needs no external validation. Her shadow is vanity and possessiveness, a fire that scorches what it claims to love.',
    powerGods: 'The sun goddess whose approval must be won, whose radiance blesses or burns. Power wielded through social dominance and the withholding of warmth. Loyalty secured by making others feel chosen.',
    traditional: 'The matriarch whose household blazes with life and purpose. She is the hearth fire — sustainer of family, community, and tradition. Her passion is expressed through devoted service to what she loves.',
    modern: 'The force-of-nature entrepreneur or artist — confident, self-promoting, and magnetically productive. She owns her ambition unapologetically. Her creative output is prolific, her network wide, her personal brand impeccable.',
    postModern: 'Who decides which passions are legitimate? The queen\'s confidence often rests on social privilege. Examining what it means to be "naturally" magnetic when magnetism is shaped by race, class, and gender politics.',
    metaModern: 'The fully expressed creative self who celebrates others\' flames rather than competing with them. Confidence grounded in genuine self-knowledge, magnetism rooted in authentic presence. Fire that warms rather than consumes.'
  },

  'knight-of-wands': {
    suit: 'Wands',
    rank: 'knight',
    mbti: 'INTJ',
    title: 'Lord of the Winds and Breezes',
    description: 'The Knight of Wands is Air of Fire — the mercurial adventurer who charges into every horizon with infectious enthusiasm. He is the eternal quest personified: restless, daring, and impossible to pin down. His energy is explosive and creative, capable of igniting entire movements with a single passionate speech. The challenge is follow-through; he is often gone before the fire he started is tended.',
    jungian: 'The puer aeternus archetype — the eternal youth who refuses limitation and commitment. Psychologically, he represents the creative impulse before it has been disciplined by the ego\'s need for completion. Integrating this figure means finding ways to sustain the fire without losing the spark.',
    powerGods: 'The conqueror on horseback who destroys and moves on, leaving transformation in his wake whether welcome or not. Power through speed and shock — arrive, ignite, depart before the consequences catch up.',
    traditional: 'The crusading knight who rides for a sacred cause with absolute faith and no hesitation. His valor is genuine even if his wisdom is undeveloped. God and glory point the same direction; he asks no more.',
    modern: 'The serial entrepreneur, the nomadic creative, the disruptor who thrives in chaos. He launches projects with brilliant energy and exceptional pitch decks, then loses interest once the initial excitement fades. Failure and success both bore him equally.',
    postModern: 'The restless adventurer whose freedom is often predicated on others holding still. Who cleans up the fires he starts? Nomadism and disruption as privilege — the ability to move on is unevenly distributed.',
    metaModern: 'The inspired initiator who has learned to hand the torch to skilled sustainers before riding to the next horizon. His fire is a gift, not a claim. Speed balanced with enough wisdom to know when to slow down.'
  },

  'page-of-wands': {
    suit: 'Wands',
    rank: 'page',
    mbti: 'INFJ',
    title: 'Princess of the Shining Flame',
    description: 'The Page of Wands is Earth of Fire — creative potential in its most fertile, unformed state. She is the spark before it becomes a flame, the idea before it becomes a project. Enthusiastic, curious, and fearlessly experimental, she approaches the world as one enormous creative playground. Messages of inspiration, sudden excitement about a new direction, and the thrilling first days of a creative venture all belong to her.',
    jungian: 'Represents the earliest stage of creative individuation — the nascent Self beginning to stoke its own fire. Psychologically, this is the inner child who has not yet learned to censor its enthusiasm. Her shadow is scattered energy and the inability to commit.',
    powerGods: 'The wild child whose raw power is precisely her unpredictability. She has not yet been socialized into deference — her fire may burn anything, and that potency is itself a form of authority.',
    traditional: 'The young acolyte before the sacred flame, learning the rituals of devotion and creative service. Enthusiasm disciplined into practice. The beginner\'s mind held within a structure that gives it direction.',
    modern: 'The junior creative, the intern with big ideas, the student who hasn\'t learned to hold back yet. Her energy is infectious and sometimes exhausting. The system doesn\'t always know what to do with her.',
    postModern: 'The perpetual beginner as a response to expertise culture — resisting the pressure to become an authority. Refusing to be domesticated. The page who will not become a knight on anyone else\'s timeline.',
    metaModern: 'The beginner\'s mind preserved consciously and with intention. Fresh enthusiasm held alongside growing wisdom. She learns the craft while keeping the flame alive — neither naive nor cynical, but genuinely alight.'
  },

  // ── CUPS (Water) ──────────────────────────────────────────────────────────

  'king-of-cups': {
    suit: 'Cups',
    rank: 'king',
    mbti: 'ESTP',
    title: 'Lord of the Waves and Waters',
    description: 'The King of Cups is Fire of Water — will and authority expressed through emotional mastery and compassionate understanding. He governs the realm of feeling without being swept away by it. A counsellor, healer, or spiritual guide, he holds space for the depths of human experience while remaining centred and warm. His power comes from having navigated his own emotional underworld and returned with hard-won wisdom.',
    jungian: 'The archetype of the Wise Old Man or the healed healer — the shadow integrated, the depths explored, the anima understood. He has done the inner work and now holds the container for others. The shadow is emotional manipulation, using empathy as leverage.',
    powerGods: 'The priest-king whose authority rests on his perceived access to divine waters — healing, cursing, knowing. Power through emotional intelligence weaponised: the one who knows what you need and controls its dispensation.',
    traditional: 'The spiritual director, confessor, or shaman whose compassion is genuine but whose role is strictly defined by tradition. He heals within a sacred structure. Wisdom is passed down, not invented. Boundaries protect both giver and receiver.',
    modern: 'The therapist, the emotionally intelligent executive, the creative director who leads through empathy rather than hierarchy. He understands what motivates people and creates conditions for their best work. Feelings are data.',
    postModern: 'Whose emotions are permitted to be mastered? The calm emotional authority of the king often rests on structures that suppress certain feelings as chaotic or dangerous. Emotional labour is unevenly distributed.',
    metaModern: 'The integrated emotional leader who holds both depth and stability — neither suppressing feelings nor drowning in them. He models that emotional intelligence is not about control but about honest, grounded presence.'
  },

  'queen-of-cups': {
    suit: 'Cups',
    rank: 'queen',
    mbti: 'ESFP',
    title: 'Queen of the Thrones of Water',
    description: 'The Queen of Cups is Water of Water — pure emotional receptivity and psychic depth. She is the mirror of the soul, capable of reflecting back what others most need to see. Intuitive, empathic, and profoundly interior, she lives in the borderlands between the seen and unseen. Her gift is a quality of presence that makes others feel truly known. The challenge is maintaining her own boundaries amid the constant flow of feeling.',
    jungian: 'The anima in her most complete form — the unconscious made conscious, the feeling function fully developed. She is the inner feminine principle that connects ego to Self through the medium of emotion and image. Her shadow is dissolution of the self in service to others.',
    powerGods: 'The oracle whose access to the depths gives her an uncanny power over those who desperately need to be seen. The sibyl who knows your secrets. Power through reflection — showing others themselves in ways they cannot resist.',
    traditional: 'The contemplative, the mystic, the vessel of divine compassion. She prays for the world from a place of profound stillness. Her depth is a gift from God, to be held in humility and offered in service.',
    modern: 'The highly attuned therapist, the artist who channels collective emotional truth, the mother who knows her children\'s inner lives better than they do. Emotional depth as professional and personal superpower.',
    postModern: 'The burden of endless emotional attunement — especially when it falls to women by default. The queen who contains everyone else\'s feelings at the cost of her own. Whose cup is being filled?',
    metaModern: 'Profound receptivity paired with self-honouring boundaries. The queen who is both deeply open and clearly herself — presence without merger, compassion without self-erasure. The cup that also pours into itself.'
  },

  'knight-of-cups': {
    suit: 'Cups',
    rank: 'knight',
    mbti: 'ISTP',
    title: 'Lord of the Waves and the Waters',
    description: 'The Knight of Cups is Air of Water — romantic idealism borne aloft on poetic imagination. He is the troubadour, the mystic knight, the dreamer who follows his heart across impossible distances. His offers of love and beauty are genuine, but they may evaporate when reality demands practicality. He is the invitation to something transcendent, always arriving with a message from the realm of the ideal.',
    jungian: 'The romantic animus projection at its most seductive — the figure onto whom one casts all longings for transcendence and perfect love. Psychologically, encountering this archetype asks whether one is in love with the ideal or the actual person before them.',
    powerGods: 'The seducer whose beauty and sensitivity are precisely his weapons. Power through romantic idealism — making you believe you are the one who will finally be enough for his impossible heart.',
    traditional: 'The chivalric knight who serves a lady or a spiritual ideal with pure devotion. Love as sacred vow. Courtly love as a discipline that elevates the soul. Feeling refined through ritual and sacrifice.',
    modern: 'The sensitive artist-lover, the man who makes grand gestures and disappears when the work of sustaining intimacy begins. Emotional intelligence without emotional maturity. The muse rather than the partner.',
    postModern: 'The romantic ideal as a cultural construct that sets impossible standards and punishes the mundane. Whose version of love gets to be called romantic? The troubadour tradition and its gendered power dynamics.',
    metaModern: 'The heart\'s genuine longing for transcendence, held within the willingness to show up for the ordinary. Romance integrated with commitment. The ideal and the real held in productive tension.'
  },

  'page-of-cups': {
    suit: 'Cups',
    rank: 'page',
    mbti: 'ISFP',
    title: 'Princess of the Waters',
    description: 'The Page of Cups is Earth of Water — emotional sensitivity in its most open, undefended form. She is the dreaming child who hears the fish speaking from the cup, who finds magic in unexpected encounters. Psychic, tender, and imaginatively alive, she brings messages from the unconscious in the form of synchronicities, dreams, and sudden flashes of inspiration. Her gift is the ability to receive what others have already stopped listening for.',
    jungian: 'The anima in her earliest, most unformed manifestation — the soul-image before it has been shaped by encounter with the world. She represents the pristine receptivity of the unconscious, capable of extraordinary perception precisely because she carries no armour.',
    powerGods: 'The strange child whose uncanny perceptions unsettle the adults around her. Power through innocence — no one quite knows what to do with someone who sees through the agreed-upon pretences.',
    traditional: 'The novice in the emotional or spiritual life, learning to tend the inner waters with gentleness and reverence. Feeling as a sacred gift to be developed slowly and carefully.',
    modern: 'The highly sensitive person discovering their empathic gifts, the young artist learning to trust their emotional truth over external validation. Vulnerability as creative strength.',
    postModern: 'The romanticisation of childlike innocence as a solution to over-rationalised culture. Whose sensitivity is valued as visionary and whose is dismissed as fragility?',
    metaModern: 'The open heart that has learned discernment without losing wonder. Emotional receptivity paired with the first growth of healthy boundaries — still listening for the fish in the cup, but beginning to understand what the message means.'
  },

  // ── SWORDS (Air) ──────────────────────────────────────────────────────────

  'king-of-swords': {
    suit: 'Swords',
    rank: 'king',
    mbti: 'ENTP',
    title: 'Lord of the Wind and the Breezes',
    description: 'The King of Swords is Fire of Air — fierce intelligence commanding clear, authoritative judgement. He is the archetype of the judge, the commander, the analytical genius who cuts through confusion with precision and intellectual courage. His mind operates at speed, seeing through deception and holding complex systems simultaneously. He demands clarity, expects directness, and has little patience for emotional reasoning in place of rational evidence.',
    jungian: 'The fully developed thinking function — logos in its most austere expression. Represents the ego\'s capacity for clear-eyed self-examination and the courage to follow reason to conclusions others flinch from. The shadow is intellectual cruelty, where precision becomes weaponised detachment.',
    powerGods: 'The military strategist whose advantage is information and the willingness to act on it decisively and without sentiment. Power through superior intelligence and the capacity to impose order through force of judgement.',
    traditional: 'The lawgiver, the magistrate, the scholar-priest whose word carries the weight of accumulated tradition and careful study. Reason in service of divine order. The letter of the law as a moral framework.',
    modern: 'The surgeon, the barrister, the systems thinker — someone whose value lies in the precision of their analysis and their immunity to cognitive bias. Objectivity as professional virtue. The expert\'s authority.',
    postModern: 'Whose reason counts as universal? The sword of "objective" analysis has historically cut in very particular directions. Exposing the ideological freight carried in claims to pure rationality.',
    metaModern: 'Clear intelligence in service of genuine understanding — reason that includes rather than excludes, precision that illuminates rather than diminishes. The sword wielded with care for what it cuts.'
  },

  'queen-of-swords': {
    suit: 'Swords',
    rank: 'queen',
    mbti: 'ENFP',
    title: 'Queen of the Thrones of Air',
    description: 'The Queen of Swords is Water of Air — deep feeling processed through crystalline clarity of mind. She has known grief, loss, and the sharp edges of experience, and from these she has forged an intelligence of devastating perceptiveness. She sees through pretence without effort, communicates with precise honesty, and holds her boundaries with calm firmness. Her apparent coldness is not absence of feeling but the discipline of someone who has learned what clarity costs.',
    jungian: 'The integration of the thinking and feeling functions — a figure who has passed through the waters of grief and emerged with a mind that is both sharp and deep. She represents the wisdom that comes only through experience of loss. Her shadow is bitterness: clarity curdled into contempt.',
    powerGods: 'The widow-queen whose loss has stripped away every illusion and left a sovereign entirely free of the need for approval. Power through indifference — she no longer needs what you\'re withholding.',
    traditional: 'The learned woman whose grief has refined her faith and whose sharp intelligence serves a higher truth. The wise woman whose advice is sought precisely because she feels nothing for your ego.',
    modern: 'The brilliant analyst or editor who demands clarity and tolerates no intellectual dishonesty. She has seen through every rationalisation and expects you to have done the same. Standards without sentimentality.',
    postModern: 'The woman who had to develop intellectual armour to be taken seriously in structures not built for her. The cost of claiming clarity in a world that pathologises emotional women and cold women equally.',
    metaModern: 'Clarity and compassion held together without pretending either is easy. The queen who can say the hard true thing and remain open to the other\'s pain. Honesty as an act of care.'
  },

  'knight-of-swords': {
    suit: 'Swords',
    rank: 'knight',
    mbti: 'INTP',
    title: 'Lord of the Wind and the Storms',
    description: 'The Knight of Swords is Air of Air — pure mental force moving at maximum velocity. He is the storm of intellect: brilliant, unstoppable, and often heedless of what he destroys in his rush toward truth. An argument is never settled until every weakness has been exposed. He charges into every intellectual debate with complete commitment, and his ideas, right or wrong, arrive with the force of absolute conviction. He is the archetype of the principled crusader and the fanatic in equal measure.',
    jungian: 'The thinking function at its most untempered — the animus fully identified with abstract principle at the expense of embodied reality. He represents the psyche\'s capacity for absolute conviction, which can be liberating or catastrophic depending on whether the conviction is earned.',
    powerGods: 'The ideological warrior who fights for an idea as though his life depends on it — because in his world it does. Power through the willingness to sacrifice everything, including relationships, for principle.',
    traditional: 'The crusader, the reformer, the monk with a sword — faith so absolute it becomes a weapon. The terrifying integrity of someone who has surrendered entirely to a cause larger than themselves.',
    modern: 'The investigative journalist, the contrarian intellectual, the radical activist — someone who pursues truth at personal cost and expects the same from everyone around them. Debate as a moral obligation.',
    postModern: 'The violence of certainty. Whose truths get to move at full speed and whose are required to prove themselves at every step? The knight\'s charge leaves behind a landscape of dismantled arguments, some of which were load-bearing.',
    metaModern: 'The sharp mind that has learned to aim before charging. Truth-seeking with epistemic humility — willing to be wrong, willing to slow down, willing to consider whether the battle is worth the battlefield.'
  },

  'page-of-swords': {
    suit: 'Swords',
    rank: 'page',
    mbti: 'INFP',
    title: 'Princess of the Rushing Winds',
    description: 'The Page of Swords is Earth of Air — intellectual curiosity in its most restless, alert form. She is watching, listening, analysing, gathering information before committing to any position. Clever, quick, and slightly suspicious of everyone\'s motives, she is the young spy, the student who questions everything, the mind that has not yet found its cause but is ready to draw at a moment\'s notice. Unexpected news, surveillance, and the early stages of learning to think critically all belong to her.',
    jungian: 'The early stages of differentiation of the thinking function — the nascent intellect testing its edges against the world. A necessary vigilance that precedes trust. Her shadow is paranoia: alertness that cannot switch off.',
    powerGods: 'The young informant whose power lies in what they know that others don\'t. Gathering intelligence as protection and leverage. The child who learned early that information is survival.',
    traditional: 'The diligent student preparing for examination, the young soldier standing watch — discipline before authority, learning the rules before questioning them.',
    modern: 'The intern with a notepad, the graduate researcher, the junior analyst — sharp, eager, slightly overwhelming in their thoroughness. Has not yet learned to be strategic with their observations.',
    postModern: 'The whistleblower in the making. The one in the institution who notices what everyone else has agreed not to see. Whose vigilance is paranoia and whose is justified?',
    metaModern: 'The curious mind that has learned to ask questions from genuine wonder rather than defensive alert. Intelligence as a gift offered rather than a shield raised. Watching the world with openness rather than suspicion.'
  },

  // ── PENTACLES (Earth) ─────────────────────────────────────────────────────

  'king-of-pentacles': {
    suit: 'Pentacles',
    rank: 'king',
    mbti: 'ESTJ',
    title: 'Lord of the Wild and Fertile Land',
    description: 'The King of Pentacles is Fire of Earth — mastery over the material world, the will that has transformed effort into enduring abundance. He is the patriarch of wealth and practical wisdom: methodical, generous, and utterly reliable. Having built something lasting from patient labour, he now rules with the calm authority of someone who knows the land completely. He values what endures over what impresses, and his generosity is grounded in genuine sufficiency.',
    jungian: 'The father archetype fully embodied in the material realm — the ego that has successfully negotiated with reality and arrived at genuine security rather than compensatory accumulation. The shadow is miserliness: the fear that the land will fail again, hoarding against an imagined scarcity.',
    powerGods: 'The feudal lord whose ownership of land is ownership of lives. Power through the control of resources — he who controls the harvest controls the people. Wealth as an expression of superior virtue or divine favour.',
    traditional: 'The steward of God\'s abundance, responsible for those who labour on his land. Wealth held in trust, not as personal achievement but as sacred obligation. Generosity as the proper use of worldly goods.',
    modern: 'The self-made mogul who built an empire through persistent, methodical effort. He doesn\'t need to impress anyone — the results speak. Long-term thinking, patient capital, compound returns on every investment including relationships.',
    postModern: 'Whose labour builds the king\'s abundance? The landed patriarch as a figure sustained by invisible toil. Examining what it means to "build something" when the foundations rest on unpaid or underpaid work.',
    metaModern: 'Prosperity rooted in genuine contribution and equitably distributed. The steward-king who knows his abundance is relational — sustained by the health of everyone in the ecosystem, not extracted from it.'
  },

  'queen-of-pentacles': {
    suit: 'Pentacles',
    rank: 'queen',
    mbti: 'ESFJ',
    title: 'Queen of the Thrones of Earth',
    description: 'The Queen of Pentacles is Water of Earth — sensuous, nurturing abundance in its most fully embodied form. She is the great mother of material life: she tends bodies, cultivates soil, manages households, and creates the conditions in which everything and everyone she cares for can thrive. Practical, sensory, deeply present in the physical world, she finds the sacred in the ordinary — in food, in touch, in the careful organisation of material reality into sustainable flourishing.',
    jungian: 'The Great Mother archetype in her most benevolent and earthy form — the anima fully incarnated in matter. She represents the psyche\'s capacity to find meaning and pleasure in embodied existence rather than transcendence. Her shadow is possessive over-protection: smothering in the name of care.',
    powerGods: 'The earth goddess whose fertility is worshipped and whose displeasure means famine. Power through the control of nourishment — she who feeds holds the deepest authority over those who are hungry.',
    traditional: 'The ideal mother and householder, whose domain is the sacred space of the home. Her labour is invisible because it is everything. She builds the world from the inside out, one meal, one hearth, one tended body at a time.',
    modern: 'The brilliant domestic economist, the ethical investor, the woman who builds quiet wealth through attention to detail and the long game. She does not seek visibility but her competence is undeniable.',
    postModern: 'The domestic as political — whose "natural" gift for nurturing becomes someone else\'s infrastructure? The queen\'s abundance is built on labour that the world prefers to call instinct.',
    metaModern: 'The body and earth held as sacred — not in the service of productivity but as intrinsic value. Nurturing from genuine fullness. The queen who tends herself as carefully as she tends her realm.'
  },

  'knight-of-pentacles': {
    suit: 'Pentacles',
    rank: 'knight',
    mbti: 'ISTJ',
    title: 'Lord of the Wide and Fertile Land',
    description: 'The Knight of Pentacles is Air of Earth — methodical intelligence applied to the patient work of building. He is the diligent labourer, the careful craftsman, the dependable planner who will not be rushed. While other knights charge recklessly ahead, he surveys the territory, checks the soil, and then proceeds step by deliberate step. He may lack the dash of his companions, but the work he completes is done with absolute thoroughness. What he builds, lasts.',
    jungian: 'The thinking function grounded in sensation — intellect that respects rather than transcends the physical. Represents the capacity for sustained effort: the psychological function that can defer gratification indefinitely in service of a long-term goal. The shadow is stagnation: patience hardened into refusal to change.',
    powerGods: 'The veteran who has outlasted every brilliant strategist through simple endurance. Power through reliability — the one the kingdom actually depends on when the visionaries have moved on.',
    traditional: 'The yeoman farmer, the guild craftsman — someone for whom work is vocation and quality is a moral standard. There is dignity in honest labour. The work is its own reward.',
    modern: 'The project manager, the DevOps engineer, the reliability expert — the person who makes everything else work by paying attention to the things no one else wants to care about. Unglamorous and indispensable.',
    postModern: 'The steady worker as a figure often erased from narratives that celebrate disruption and innovation. Whose reliability sustains whose freedom to be creative? Endurance as a class phenomenon.',
    metaModern: 'Dedication without rigidity — patient work held within awareness that the land itself changes. The knight who tends the soil while remaining willing to change crops when the season demands it.'
  },

  'page-of-pentacles': {
    suit: 'Pentacles',
    rank: 'page',
    mbti: 'ISFJ',
    title: 'Princess of the Echoing Hills',
    description: 'The Page of Pentacles is Earth of Earth — the concentrated essence of material potential, still and studious. She holds her coin up to the light not to show it off but to truly understand it. She is the dedicated student, the young apprentice, the careful researcher who wants to learn the craft properly before attempting mastery. Practical, grounded, and genuinely curious about how the physical world works, she represents the first careful steps toward material competence.',
    jungian: 'The earliest stage of the ego\'s encounter with material reality — the self learning that the world has its own logic that must be respected before it can be worked with. She is the psyche discovering the discipline of craft.',
    powerGods: 'The young inheritor who understands, perhaps for the first time, what it actually means to hold power in the material world. The weight of the coin. The responsibility of what can be built or squandered.',
    traditional: 'The apprentice who submits to the master\'s teaching, the novice before the craft. Humility before knowledge. Learning as a sacred obligation. The long path of genuine skill.',
    modern: 'The intern who actually wants to learn the business from the ground up, the first-generation college student managing a budget for the first time. The excitement and terror of material competence emerging.',
    postModern: 'The student whose access to craft and learning is circumscribed by the resources available to them. Whose dedication gets transformed into professional skill and whose remains amateur?',
    metaModern: 'The beginner who approaches material reality with reverence and curiosity — understanding that competence must be grown, not seized. Earth studied with the patience of someone who knows the harvest will come.'
  }

};
