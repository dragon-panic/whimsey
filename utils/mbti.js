// Mapping between Thoth court card system and MBTI personality types.
//
// Suit → dominant cognitive function:
//   Pentacles = Si (introverted sensing)
//   Cups      = Se (extraverted sensing)
//   Swords    = Ne (extraverted intuition)
//   Wands     = Ni (introverted intuition)
//
// Rank → attitude + judging axis (using internal keys):
//   king   (Thoth Knight)   = ET  (extraverted thinking)
//   queen  (Thoth Queen)    = EF  (extraverted feeling)
//   knight (Thoth Prince)   = IT  (introverted thinking)
//   page   (Thoth Princess) = IF  (introverted feeling)
//
// J/P determined by function type: Si/Ni → J, Se/Ne → P

export const suitFunctions = {
  Wands: 'Ni',
  Cups: 'Se',
  Swords: 'Ne',
  Pentacles: 'Si'
};

export const rankAttitudes = {
  king: { attitude: 'E', judging: 'T' },
  queen: { attitude: 'E', judging: 'F' },
  knight: { attitude: 'I', judging: 'T' },
  page: { attitude: 'I', judging: 'F' }
};

export const mbtiTypes = {
  ENTJ: {
    name: 'The Commander',
    stack: ['Ni', 'Te', 'Fi', 'Se'],
    description: 'Strategic leaders driven by long-range vision and decisive action. They organise systems and people toward ambitious goals with relentless efficiency.',
    courtBridge: 'As the Knight of Wands (Thoth), ENTJ channels Ni-dominant intuition through extraverted thinking — the fiery will that commands through visionary strategy rather than brute force.'
  },
  ENFJ: {
    name: 'The Protagonist',
    stack: ['Ni', 'Fe', 'Ti', 'Se'],
    description: 'Charismatic idealists who inspire and guide others toward growth. They sense what people need and create the conditions for collective flourishing.',
    courtBridge: 'As the Queen of Wands, ENFJ wields Ni-dominant intuition through extraverted feeling — the warm radiance that draws others into a shared vision and holds them there with genuine care.'
  },
  INTJ: {
    name: 'The Architect',
    stack: ['Ni', 'Te', 'Fi', 'Se'],
    description: 'Independent strategists who see patterns others miss. They build complex internal models of reality and pursue their vision with quiet, unrelenting determination.',
    courtBridge: 'As the Prince of Wands (Thoth), INTJ embodies Ni-dominant intuition processed through introverted thinking — the inner fire that moves outward as intellectual force and systemic insight.'
  },
  INFJ: {
    name: 'The Advocate',
    stack: ['Ni', 'Fe', 'Ti', 'Se'],
    description: 'Visionary empaths who seek deep meaning and work quietly toward ideals. They understand people at a level that can seem almost psychic, driven by a sense of purpose larger than themselves.',
    courtBridge: 'As the Princess of Wands (Thoth), INFJ holds Ni-dominant intuition in its most inward, potential-bearing form — the spark before it becomes flame, the vision still gathering its creative force.'
  },
  ESTP: {
    name: 'The Entrepreneur',
    stack: ['Se', 'Ti', 'Fe', 'Ni'],
    description: 'Bold pragmatists who thrive in the present moment. They read situations instantly, take decisive action, and adapt on the fly with easy confidence.',
    courtBridge: 'As the Knight of Cups (Thoth), ESTP channels Se-dominant sensing through extraverted thinking — the mastery of emotional and sensory currents wielded with commanding authority.'
  },
  ESFP: {
    name: 'The Entertainer',
    stack: ['Se', 'Fi', 'Te', 'Ni'],
    description: 'Vivacious experientialists who bring warmth and spontaneity wherever they go. They live through direct sensory engagement and share that aliveness generously.',
    courtBridge: 'As the Queen of Cups, ESFP expresses Se-dominant sensing through extraverted feeling — pure emotional receptivity alive in the present moment, reflecting beauty and feeling back to the world.'
  },
  ISTP: {
    name: 'The Virtuoso',
    stack: ['Se', 'Ti', 'Fe', 'Ni'],
    description: 'Cool-headed analysts who understand systems through hands-on engagement. They take things apart to see how they work and respond to crises with calm precision.',
    courtBridge: 'As the Prince of Cups (Thoth), ISTP moves Se-dominant sensing through introverted thinking — the romantic idealism of water processed through detached, elegant analysis.'
  },
  ISFP: {
    name: 'The Adventurer',
    stack: ['Se', 'Fi', 'Te', 'Ni'],
    description: 'Gentle artists who experience the world through a rich inner palette of values and aesthetics. They live authentically, guided by deep personal feeling rather than external expectation.',
    courtBridge: 'As the Princess of Cups (Thoth), ISFP holds Se-dominant sensing in its most tender, undefended form — the open heart that receives the world as beauty and translates it into quiet creative expression.'
  },
  ENTP: {
    name: 'The Debater',
    stack: ['Ne', 'Ti', 'Fe', 'Si'],
    description: 'Inventive provocateurs who see possibilities everywhere and challenge every assumption. They generate ideas at speed and thrive on intellectual sparring.',
    courtBridge: 'As the Knight of Swords (Thoth), ENTP channels Ne-dominant intuition through extraverted thinking — the fierce intellect that commands through the force of argument and the clarity of analysis.'
  },
  ENFP: {
    name: 'The Campaigner',
    stack: ['Ne', 'Fi', 'Te', 'Si'],
    description: 'Enthusiastic visionaries who connect ideas, people, and possibilities into inspiring narratives. They champion causes with infectious optimism and genuine warmth.',
    courtBridge: 'As the Queen of Swords, ENFP expresses Ne-dominant intuition through extraverted feeling — the perceptive clarity born of deep experience, wielding honesty as an act of compassion.'
  },
  INTP: {
    name: 'The Logician',
    stack: ['Ne', 'Ti', 'Fe', 'Si'],
    description: 'Abstract thinkers who build intricate theoretical frameworks. They pursue logical consistency with quiet intensity, always refining their understanding of how things work.',
    courtBridge: 'As the Prince of Swords (Thoth), INTP moves Ne-dominant intuition through introverted thinking — the storm of pure intellect, brilliant and unstoppable in its pursuit of truth.'
  },
  INFP: {
    name: 'The Mediator',
    stack: ['Ne', 'Fi', 'Te', 'Si'],
    description: 'Idealistic dreamers guided by deeply held values. They seek authenticity and meaning, often expressing their rich inner world through creative and compassionate action.',
    courtBridge: 'As the Princess of Swords (Thoth), INFP holds Ne-dominant intuition in its most alert, watchful form — the curious mind gathering impressions before committing, vigilant and ready to draw.'
  },
  ESTJ: {
    name: 'The Executive',
    stack: ['Si', 'Te', 'Fi', 'Ne'],
    description: 'Organised administrators who build and maintain reliable systems. They value tradition, responsibility, and clear chains of command, leading through consistent example.',
    courtBridge: 'As the Knight of Pentacles (Thoth), ESTJ channels Si-dominant sensing through extraverted thinking — the mastery of the material world expressed as authoritative stewardship and practical wisdom.'
  },
  ESFJ: {
    name: 'The Consul',
    stack: ['Si', 'Fe', 'Ti', 'Ne'],
    description: 'Warm community-builders who create harmony and ensure everyone is cared for. They honour traditions, remember details, and sustain the social fabric through devoted attention.',
    courtBridge: 'As the Queen of Pentacles, ESFJ expresses Si-dominant sensing through extraverted feeling — the nurturing abundance that tends bodies, soil, and souls with sensuous, embodied care.'
  },
  ISTJ: {
    name: 'The Logistician',
    stack: ['Si', 'Te', 'Fi', 'Ne'],
    description: 'Dependable realists who honour duty and follow through with meticulous care. They build lasting structures through patient, methodical effort and unwavering commitment.',
    courtBridge: 'As the Prince of Pentacles (Thoth), ISTJ moves Si-dominant sensing through introverted thinking — the diligent craftsman who surveys, plans, and builds with absolute thoroughness.'
  },
  ISFJ: {
    name: 'The Defender',
    stack: ['Si', 'Fe', 'Ti', 'Ne'],
    description: 'Quiet protectors who remember what matters and work tirelessly behind the scenes. They preserve what is valuable, support those they love, and approach learning with humble dedication.',
    courtBridge: 'As the Princess of Pentacles (Thoth), ISFJ holds Si-dominant sensing in its most studious, potential-bearing form — the careful apprentice who wants to understand the craft before attempting mastery.'
  }
};

// Derive MBTI code from suit + rank
export function mbtiForCard(suit, rank) {
  const fn = suitFunctions[suit];
  const { attitude, judging } = rankAttitudes[rank];
  const sensing = fn.charAt(0) === 'S' ? 'S' : 'N';
  const jp = (fn === 'Si' || fn === 'Ni') ? 'J' : 'P';
  return `${attitude}${sensing}${judging}${jp}`;
}
