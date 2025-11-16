// Planetary data based on Golden Dawn system and Chaldean Order

export const planetSymbols = {
  'Saturn': '♄',
  'Jupiter': '♃',
  'Mars': '♂',
  'Sun': '☉',
  'Venus': '♀',
  'Mercury': '☿',
  'Moon': '☽'
};

// Chaldean Order - from outermost sphere to innermost
export const chaldeanOrder = [
  'Saturn',
  'Jupiter',
  'Mars',
  'Sun',
  'Venus',
  'Mercury',
  'Moon'
];

export const planetsData = {
  'Saturn': {
    name: 'Saturn',
    symbol: '♄',
    chaldeanPosition: 1,
    primaryMeaning: 'Containment, boundary, form, time',
    poeticPointer: 'The edge that lets you know yourself',
    hebrewLetter: 'ט (Teth)',
    number: 9,
    tarotCards: {
      major: ['The World (XXI)'],
      minor: [
        { card: '7 of Pentacles', title: 'Success Unfulfilled', link: '#taurus-3' },
        { card: '5 of Wands', title: 'Strife', link: '#leo-1' },
        { card: '3 of Swords', title: 'Sorrow', link: '#libra-2' },
        { card: '10 of Wands', title: 'Oppression', link: '#sagittarius-3' },
        { card: '8 of Cups', title: 'Abandoned Success', link: '#pisces-1' }
      ]
    },
    signsRuled: [
      {
        sign: 'Capricorn',
        mode: 'Cardinal Earth',
        influence: 'Builds the mountain through disciplined ascent—structure that endures'
      },
      {
        sign: 'Aquarius',
        mode: 'Fixed Air',
        influence: 'Holds the pattern of the collective—the crystallized ideal'
      }
    ],
    colors: {
      queen: 'Indigo',
      king: 'Black',
      emperor: 'Blue-black'
    },
    magicalImage: 'A reaping man, aged and bent; or a tall dark figure with a scythe',
    zodiacSymbol: 'The Goat, The Water-Bearer',
    metal: 'Lead',
    day: 'Saturday',
    description: 'Saturn represents the principle of limitation and structure. It is the boundary that defines form, the teacher through restriction, and the wisdom gained through time and patience. In the Golden Dawn system, Saturn governs the sphere of Binah on the Tree of Life, representing Understanding through form.',
    keywords: ['Limitation', 'Structure', 'Time', 'Karma', 'Discipline', 'Responsibility', 'Boundaries', 'Crystallization', 'Form', 'Maturity'],
    inDignity: {
      domicile: ['Capricorn', 'Aquarius'],
      exaltation: 'Libra',
      detriment: ['Cancer', 'Leo'],
      fall: 'Aries'
    }
  },
  'Jupiter': {
    name: 'Jupiter',
    symbol: '♃',
    chaldeanPosition: 2,
    primaryMeaning: 'Expansion, possibility, abundance, meaning',
    poeticPointer: 'The yes that opens doors',
    hebrewLetter: 'כ (Kaph)',
    number: 10,
    tarotCards: {
      major: ['Wheel of Fortune (X)'],
      minor: [
        { card: '8 of Swords', title: 'Shortened Force', link: '#gemini-1' },
        { card: '6 of Wands', title: 'Victory', link: '#leo-2' },
        { card: '4 of Swords', title: 'Rest from Strife', link: '#libra-3' },
        { card: '2 of Pentacles', title: 'Harmonious Change', link: '#capricorn-1' },
        { card: '9 of Cups', title: 'Material Happiness', link: '#pisces-2' }
      ]
    },
    signsRuled: [
      {
        sign: 'Sagittarius',
        mode: 'Mutable Fire',
        influence: 'Seeks the horizon—expansive questing for truth and meaning'
      },
      {
        sign: 'Pisces',
        mode: 'Mutable Water',
        influence: 'Dissolves into the ocean—boundless compassion and unity'
      }
    ],
    colors: {
      queen: 'Blue',
      king: 'Violet',
      emperor: 'Deep purple'
    },
    magicalImage: 'A crowned and mighty king upon his throne; or a bishop with staff and mitre',
    zodiacSymbol: 'The Archer, The Fishes',
    metal: 'Tin',
    day: 'Thursday',
    description: 'Jupiter embodies expansion, growth, and benevolence. It is the principle of increase, optimism, and the search for meaning. Associated with Chesed on the Tree of Life, Jupiter represents Mercy and the generous overflow of abundance.',
    keywords: ['Expansion', 'Growth', 'Abundance', 'Wisdom', 'Optimism', 'Generosity', 'Faith', 'Philosophy', 'Luck', 'Benevolence'],
    inDignity: {
      domicile: ['Sagittarius', 'Pisces'],
      exaltation: 'Cancer',
      detriment: ['Gemini', 'Virgo'],
      fall: 'Capricorn'
    }
  },
  'Mars': {
    name: 'Mars',
    symbol: '♂',
    chaldeanPosition: 3,
    primaryMeaning: 'Will, severance, directed energy, assertion',
    poeticPointer: 'The sword that chooses',
    hebrewLetter: 'פ (Peh)',
    number: 16,
    tarotCards: {
      major: ['The Tower (XVI)'],
      minor: [
        { card: '2 of Wands', title: 'Dominion', link: '#aries-1' },
        { card: '9 of Swords', title: 'Despair and Cruelty', link: '#gemini-2' },
        { card: '5 of Cups', title: 'Loss in Pleasure', link: '#scorpio-1' },
        { card: '7 of Wands', title: 'Valor', link: '#leo-3' },
        { card: '3 of Pentacles', title: 'Material Works', link: '#capricorn-2' },
        { card: '10 of Cups', title: 'Perpetual Success', link: '#pisces-3' }
      ]
    },
    signsRuled: [
      {
        sign: 'Aries',
        mode: 'Cardinal Fire',
        influence: 'Pure initiation—"I want, I act, I AM first"'
      },
      {
        sign: 'Scorpio',
        mode: 'Fixed Water',
        influence: 'Deep penetration—will that transforms through intensity'
      }
    ],
    colors: {
      queen: 'Red',
      king: 'Scarlet',
      emperor: 'Brilliant flame'
    },
    magicalImage: 'A warrior armed and crowned, riding upon a wolf',
    zodiacSymbol: 'The Ram, The Scorpion',
    metal: 'Iron',
    day: 'Tuesday',
    description: 'Mars is the principle of assertion, action, and directed will. It represents the cutting edge that separates and defines through conflict and conquest. In the Golden Dawn tradition, Mars governs Geburah—Severity and strength through the application of force.',
    keywords: ['Action', 'Assertion', 'Courage', 'Conflict', 'Energy', 'Desire', 'Aggression', 'Initiative', 'Severance', 'Will'],
    inDignity: {
      domicile: ['Aries', 'Scorpio'],
      exaltation: 'Capricorn',
      detriment: ['Libra', 'Taurus'],
      fall: 'Cancer'
    }
  },
  'Sun': {
    name: 'Sun',
    symbol: '☉',
    chaldeanPosition: 4,
    primaryMeaning: 'Center, identity, radiance, authority',
    poeticPointer: 'The light that needs no reason',
    hebrewLetter: 'ר (Resh)',
    number: 19,
    tarotCards: {
      major: ['The Sun (XIX)'],
      minor: [
        { card: '3 of Wands', title: 'Established Strength', link: '#aries-2' },
        { card: '10 of Swords', title: 'Ruin', link: '#gemini-3' },
        { card: '6 of Cups', title: 'Pleasure', link: '#scorpio-2' },
        { card: '8 of Pentacles', title: 'Prudence', link: '#virgo-1' },
        { card: '4 of Pentacles', title: 'Earthly Power', link: '#capricorn-3' }
      ]
    },
    signsRuled: [
      {
        sign: 'Leo',
        mode: 'Fixed Fire',
        influence: 'Steady sovereignty—the king who simply shines'
      }
    ],
    colors: {
      queen: 'Gold-Yellow',
      king: 'Rich amber',
      emperor: 'Gold'
    },
    magicalImage: 'A king upon a throne crowned and sceptered',
    zodiacSymbol: 'The Lion',
    metal: 'Gold',
    day: 'Sunday',
    description: 'The Sun represents the core of individual identity, the source of vitality and creative power. It is the central organizing principle around which all else revolves. Associated with Tiphareth—Beauty—on the Tree of Life, the Sun harmonizes all forces in perfect balance.',
    keywords: ['Identity', 'Vitality', 'Consciousness', 'Authority', 'Center', 'Radiance', 'Life-force', 'Self-expression', 'Sovereignty', 'Integration'],
    inDignity: {
      domicile: ['Leo'],
      exaltation: 'Aries',
      detriment: ['Aquarius'],
      fall: 'Libra'
    }
  },
  'Venus': {
    name: 'Venus',
    symbol: '♀',
    chaldeanPosition: 5,
    primaryMeaning: 'Attraction, value, harmony, relationship',
    poeticPointer: 'The pull of what pleases',
    hebrewLetter: 'ד (Daleth)',
    number: 3,
    tarotCards: {
      major: ['The Empress (III)'],
      minor: [
        { card: '4 of Wands', title: 'Perfected Work', link: '#aries-3' },
        { card: '2 of Cups', title: 'Love', link: '#cancer-1' },
        { card: '7 of Cups', title: 'Illusionary Success', link: '#scorpio-3' },
        { card: '9 of Pentacles', title: 'Material Gain', link: '#virgo-2' },
        { card: '5 of Swords', title: 'Defeat', link: '#aquarius-1' }
      ]
    },
    signsRuled: [
      {
        sign: 'Taurus',
        mode: 'Fixed Earth',
        influence: 'Sensual rootedness—embodied pleasure that stays'
      },
      {
        sign: 'Libra',
        mode: 'Cardinal Air',
        influence: 'Relational grace—initiating harmony through balance'
      }
    ],
    colors: {
      queen: 'Emerald Green',
      king: 'Sky blue',
      emperor: 'Early spring green'
    },
    magicalImage: 'A beautiful naked woman, or a fair maiden crowned',
    zodiacSymbol: 'The Bull, The Scales',
    metal: 'Copper',
    day: 'Friday',
    description: 'Venus embodies the principle of attraction, desire, and value. It draws together what resonates, creating harmony through relationship. Venus governs Netzach—Victory—on the Tree of Life, representing the triumph of love and beauty.',
    keywords: ['Attraction', 'Love', 'Beauty', 'Harmony', 'Value', 'Pleasure', 'Art', 'Relationship', 'Desire', 'Grace'],
    inDignity: {
      domicile: ['Taurus', 'Libra'],
      exaltation: 'Pisces',
      detriment: ['Scorpio', 'Aries'],
      fall: 'Virgo'
    }
  },
  'Mercury': {
    name: 'Mercury',
    symbol: '☿',
    chaldeanPosition: 6,
    primaryMeaning: 'Connection, translation, exchange, movement',
    poeticPointer: 'The bridge between islands',
    hebrewLetter: 'ב (Beth)',
    number: 1,
    tarotCards: {
      major: ['The Magician (I)'],
      minor: [
        { card: '5 of Pentacles', title: 'Material Trouble', link: '#taurus-1' },
        { card: '3 of Cups', title: 'Abundance', link: '#cancer-2' },
        { card: '8 of Wands', title: 'Swiftness', link: '#sagittarius-1' },
        { card: '10 of Pentacles', title: 'Wealth', link: '#virgo-3' },
        { card: '6 of Swords', title: 'Earned Success', link: '#aquarius-2' }
      ]
    },
    signsRuled: [
      {
        sign: 'Gemini',
        mode: 'Mutable Air',
        influence: 'Quick mental weaving—ideas dancing and connecting'
      },
      {
        sign: 'Virgo',
        mode: 'Mutable Earth',
        influence: 'Practical discrimination—organizing matter with precision'
      }
    ],
    colors: {
      queen: 'Orange',
      king: 'Purple',
      emperor: 'Violet-purple'
    },
    magicalImage: 'A beautiful youth, sometimes winged, bearing a caduceus entwined with serpents',
    zodiacSymbol: 'The Twins, The Virgin',
    metal: 'Quicksilver (Mercury)',
    day: 'Wednesday',
    description: 'Mercury represents communication, intellect, and the exchange of information. It is the messenger between realms, the translator of experience into thought and word. Associated with Hod—Splendor—Mercury brings the power of mind and reason.',
    keywords: ['Communication', 'Intelligence', 'Connection', 'Exchange', 'Thought', 'Learning', 'Adaptability', 'Translation', 'Movement', 'Discrimination'],
    inDignity: {
      domicile: ['Gemini', 'Virgo'],
      exaltation: 'Virgo',
      detriment: ['Sagittarius', 'Pisces'],
      fall: 'Pisces'
    }
  },
  'Moon': {
    name: 'Moon',
    symbol: '☽',
    chaldeanPosition: 7,
    primaryMeaning: 'Reflection, rhythm, memory, responsiveness',
    poeticPointer: 'The mirror that remembers',
    hebrewLetter: 'ג (Gimel)',
    number: 2,
    tarotCards: {
      major: ['The High Priestess (II)', 'The Moon (XVIII)'],
      minor: [
        { card: '6 of Pentacles', title: 'Material Success', link: '#taurus-2' },
        { card: '4 of Cups', title: 'Luxury', link: '#cancer-3' },
        { card: '9 of Wands', title: 'Great Strength', link: '#sagittarius-2' },
        { card: '2 of Swords', title: 'Peace Restored', link: '#libra-1' },
        { card: '7 of Swords', title: 'Unstable Effort', link: '#aquarius-3' }
      ]
    },
    signsRuled: [
      {
        sign: 'Cancer',
        mode: 'Cardinal Water',
        influence: 'Nurturing initiation—responding with protective care'
      }
    ],
    colors: {
      queen: 'Silver',
      king: 'Cold pale blue',
      emperor: 'Silver-white'
    },
    magicalImage: 'A beautiful maiden, or a huntress with bow and arrows',
    zodiacSymbol: 'The Crab',
    metal: 'Silver',
    day: 'Monday',
    description: 'The Moon represents the tides of emotion, the rhythm of change, and the receptive feminine principle. It reflects light rather than generating it, showing us the world of shadow, dream, and subconscious memory. The Moon governs Yesod—Foundation—the astral substrate underlying physical reality.',
    keywords: ['Emotion', 'Intuition', 'Cycles', 'Memory', 'Reflection', 'Subconscious', 'Receptivity', 'Nurture', 'Fluctuation', 'Dreams'],
    inDignity: {
      domicile: ['Cancer'],
      exaltation: 'Taurus',
      detriment: ['Capricorn'],
      fall: 'Scorpio'
    }
  }
};

// Helper function to get planet by slug
export function getPlanetBySlug(slug) {
  const planetName = slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase();
  return planetsData[planetName] || null;
}

// Helper function to get all planets in Chaldean order
export function getPlanetsInChaldeanOrder() {
  return chaldeanOrder.map(name => ({
    ...planetsData[name],
    slug: name.toLowerCase()
  }));
}


