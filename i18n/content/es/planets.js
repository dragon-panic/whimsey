// Datos planetarios basados en el sistema de la Golden Dawn y el Orden Caldeo

export const planetSymbols = {
  'Saturn': '♄',
  'Jupiter': '♃',
  'Mars': '♂',
  'Sun': '☉',
  'Venus': '♀',
  'Mercury': '☿',
  'Moon': '☽'
};

// Orden Caldeo — de la esfera más externa a la más interna
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
    primaryMeaning: 'Contención, límite, forma, tiempo',
    poeticPointer: 'El borde que te permite conocerte a ti mismo',
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
        mode: 'Tierra Cardinal',
        influence: 'Construye la montaña mediante un ascenso disciplinado—estructura que perdura'
      },
      {
        sign: 'Aquarius',
        mode: 'Aire Fijo',
        influence: 'Sostiene el patrón de lo colectivo—el ideal cristalizado'
      }
    ],
    colors: {
      queen: 'Indigo',
      king: 'Black',
      emperor: 'Blue-black'
    },
    magicalImage: 'Un hombre segador, anciano y encorvado; o una figura alta y oscura con una guadaña',
    zodiacSymbol: 'The Goat, The Water-Bearer',
    metal: 'Plomo',
    day: 'Sábado',
    description: 'Saturno representa el principio de limitación y estructura. Es el límite que define la forma, el maestro a través de la restricción, y la sabiduría obtenida mediante el tiempo y la paciencia. En el sistema de la Golden Dawn, Saturno gobierna la esfera de Binah en el Árbol de la Vida, representando el Entendimiento a través de la forma.',
    keywords: ['Limitación', 'Estructura', 'Tiempo', 'Karma', 'Disciplina', 'Responsabilidad', 'Límites', 'Cristalización', 'Forma', 'Madurez'],
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
    primaryMeaning: 'Expansión, posibilidad, abundancia, significado',
    poeticPointer: 'El sí que abre puertas',
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
        mode: 'Fuego Mutable',
        influence: 'Busca el horizonte—búsqueda expansiva de verdad y significado'
      },
      {
        sign: 'Pisces',
        mode: 'Agua Mutable',
        influence: 'Se disuelve en el océano—compasión sin límites y unidad'
      }
    ],
    colors: {
      queen: 'Blue',
      king: 'Violet',
      emperor: 'Deep purple'
    },
    magicalImage: 'Un rey coronado y poderoso sobre su trono; o un obispo con báculo y mitra',
    zodiacSymbol: 'The Archer, The Fishes',
    metal: 'Estaño',
    day: 'Jueves',
    description: 'Júpiter encarna la expansión, el crecimiento y la benevolencia. Es el principio de aumento, optimismo y la búsqueda de significado. Asociado con Chesed en el Árbol de la Vida, Júpiter representa la Misericordia y el desbordamiento generoso de la abundancia.',
    keywords: ['Expansión', 'Crecimiento', 'Abundancia', 'Sabiduría', 'Optimismo', 'Generosidad', 'Fe', 'Filosofía', 'Suerte', 'Benevolencia'],
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
    primaryMeaning: 'Voluntad, separación, energía dirigida, afirmación',
    poeticPointer: 'La espada que elige',
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
        mode: 'Fuego Cardinal',
        influence: 'Iniciación pura—"Quiero, actúo, SOY primero"'
      },
      {
        sign: 'Scorpio',
        mode: 'Agua Fija',
        influence: 'Penetración profunda—voluntad que transforma a través de la intensidad'
      }
    ],
    colors: {
      queen: 'Red',
      king: 'Scarlet',
      emperor: 'Brilliant flame'
    },
    magicalImage: 'Un guerrero armado y coronado, cabalgando sobre un lobo',
    zodiacSymbol: 'The Ram, The Scorpion',
    metal: 'Hierro',
    day: 'Martes',
    description: 'Marte es el principio de afirmación, acción y voluntad dirigida. Representa el filo cortante que separa y define a través del conflicto y la conquista. En la tradición de la Golden Dawn, Marte gobierna Geburah—Severidad y fuerza mediante la aplicación de la fuerza.',
    keywords: ['Acción', 'Afirmación', 'Coraje', 'Conflicto', 'Energía', 'Deseo', 'Agresión', 'Iniciativa', 'Separación', 'Voluntad'],
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
    primaryMeaning: 'Centro, identidad, resplandor, autoridad',
    poeticPointer: 'La luz que no necesita razón',
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
        mode: 'Fuego Fijo',
        influence: 'Soberanía constante—el rey que simplemente brilla'
      }
    ],
    colors: {
      queen: 'Gold-Yellow',
      king: 'Rich amber',
      emperor: 'Gold'
    },
    magicalImage: 'Un rey sobre un trono, coronado y con cetro',
    zodiacSymbol: 'The Lion',
    metal: 'Oro',
    day: 'Domingo',
    description: 'El Sol representa el núcleo de la identidad individual, la fuente de vitalidad y poder creativo. Es el principio organizador central alrededor del cual todo lo demás gira. Asociado con Tiphareth—Belleza—en el Árbol de la Vida, el Sol armoniza todas las fuerzas en perfecto equilibrio.',
    keywords: ['Identidad', 'Vitalidad', 'Consciencia', 'Autoridad', 'Centro', 'Resplandor', 'Fuerza vital', 'Autoexpresión', 'Soberanía', 'Integración'],
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
    primaryMeaning: 'Atracción, valor, armonía, relación',
    poeticPointer: 'La atracción de lo que complace',
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
        mode: 'Tierra Fija',
        influence: 'Arraigo sensual—placer encarnado que permanece'
      },
      {
        sign: 'Libra',
        mode: 'Aire Cardinal',
        influence: 'Gracia relacional—iniciando armonía a través del equilibrio'
      }
    ],
    colors: {
      queen: 'Emerald Green',
      king: 'Sky blue',
      emperor: 'Early spring green'
    },
    magicalImage: 'Una hermosa mujer desnuda, o una bella doncella coronada',
    zodiacSymbol: 'The Bull, The Scales',
    metal: 'Cobre',
    day: 'Viernes',
    description: 'Venus encarna el principio de atracción, deseo y valor. Atrae lo que resuena, creando armonía a través de la relación. Venus gobierna Netzach—Victoria—en el Árbol de la Vida, representando el triunfo del amor y la belleza.',
    keywords: ['Atracción', 'Amor', 'Belleza', 'Armonía', 'Valor', 'Placer', 'Arte', 'Relación', 'Deseo', 'Gracia'],
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
    primaryMeaning: 'Conexión, traducción, intercambio, movimiento',
    poeticPointer: 'El puente entre islas',
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
        mode: 'Aire Mutable',
        influence: 'Tejido mental rápido—ideas danzando y conectándose'
      },
      {
        sign: 'Virgo',
        mode: 'Tierra Mutable',
        influence: 'Discriminación práctica—organizando la materia con precisión'
      }
    ],
    colors: {
      queen: 'Orange',
      king: 'Purple',
      emperor: 'Violet-purple'
    },
    magicalImage: 'Un hermoso joven, a veces alado, portando un caduceo entrelazado con serpientes',
    zodiacSymbol: 'The Twins, The Virgin',
    metal: 'Azogue (Mercurio)',
    day: 'Miércoles',
    description: 'Mercurio representa la comunicación, el intelecto y el intercambio de información. Es el mensajero entre reinos, el traductor de la experiencia en pensamiento y palabra. Asociado con Hod—Esplendor—Mercurio aporta el poder de la mente y la razón.',
    keywords: ['Comunicación', 'Inteligencia', 'Conexión', 'Intercambio', 'Pensamiento', 'Aprendizaje', 'Adaptabilidad', 'Traducción', 'Movimiento', 'Discriminación'],
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
    primaryMeaning: 'Reflejo, ritmo, memoria, receptividad',
    poeticPointer: 'El espejo que recuerda',
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
        mode: 'Agua Cardinal',
        influence: 'Iniciación nutricia—respondiendo con cuidado protector'
      }
    ],
    colors: {
      queen: 'Silver',
      king: 'Cold pale blue',
      emperor: 'Silver-white'
    },
    magicalImage: 'Una hermosa doncella, o una cazadora con arco y flechas',
    zodiacSymbol: 'The Crab',
    metal: 'Plata',
    day: 'Lunes',
    description: 'La Luna representa las mareas de la emoción, el ritmo del cambio y el principio femenino receptivo. Refleja la luz en lugar de generarla, mostrándonos el mundo de la sombra, el sueño y la memoria subconsciente. La Luna gobierna Yesod—Fundamento—el sustrato astral que subyace a la realidad física.',
    keywords: ['Emoción', 'Intuición', 'Ciclos', 'Memoria', 'Reflejo', 'Subconsciente', 'Receptividad', 'Nutrición', 'Fluctuación', 'Sueños'],
    inDignity: {
      domicile: ['Cancer'],
      exaltation: 'Taurus',
      detriment: ['Capricorn'],
      fall: 'Scorpio'
    }
  }
};

// Función auxiliar para obtener un planeta por slug
export function getPlanetBySlug(slug) {
  const planetName = slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase();
  return planetsData[planetName] || null;
}

// Función auxiliar para obtener todos los planetas en orden caldeo
export function getPlanetsInChaldeanOrder() {
  return chaldeanOrder.map(name => ({
    ...planetsData[name],
    slug: name.toLowerCase()
  }));
}
