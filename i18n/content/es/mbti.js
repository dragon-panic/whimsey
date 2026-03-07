// Correspondencia entre el sistema de cartas cortesanas del Thoth y los tipos de personalidad MBTI.
//
// Palo → función cognitiva dominante:
//   Oros    = Si (sensación introvertida)
//   Copas   = Se (sensación extravertida)
//   Espadas = Ne (intuición extravertida)
//   Bastos  = Ni (intuición introvertida)
//
// Rango → actitud + eje de juicio (claves internas):
//   king   (Caballero Thoth)  = ET  (pensamiento extravertido)
//   queen  (Reina Thoth)      = EF  (sentimiento extravertido)
//   knight (Príncipe Thoth)   = IT  (pensamiento introvertido)
//   page   (Princesa Thoth)   = IF  (sentimiento introvertido)
//
// J/P determinado por tipo de función: Si/Ni → J, Se/Ne → P

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
    name: 'El Comandante',
    stack: ['Ni', 'Te', 'Fi', 'Se'],
    description: 'Líderes estratégicos impulsados por una visión a largo plazo y la acción decisiva. Organizan sistemas y personas hacia metas ambiciosas con eficiencia implacable.',
    courtBridge: 'Como el Caballero de Bastos (Thoth), ENTJ canaliza la intuición dominante Ni a través del pensamiento extravertido — la voluntad ardiente que comanda mediante estrategia visionaria en lugar de fuerza bruta.'
  },
  ENFJ: {
    name: 'El Protagonista',
    stack: ['Ni', 'Fe', 'Ti', 'Se'],
    description: 'Idealistas carismáticos que inspiran y guían a otros hacia el crecimiento. Perciben lo que las personas necesitan y crean las condiciones para el florecimiento colectivo.',
    courtBridge: 'Como la Reina de Bastos, ENFJ empuña la intuición dominante Ni a través del sentimiento extravertido — la calidez radiante que atrae a otros hacia una visión compartida y los sostiene allí con cuidado genuino.'
  },
  INTJ: {
    name: 'El Arquitecto',
    stack: ['Ni', 'Te', 'Fi', 'Se'],
    description: 'Estrategas independientes que ven patrones que otros no perciben. Construyen modelos internos complejos de la realidad y persiguen su visión con determinación silenciosa e implacable.',
    courtBridge: 'Como el Príncipe de Bastos (Thoth), INTJ encarna la intuición dominante Ni procesada a través del pensamiento introvertido — el fuego interior que se mueve hacia afuera como fuerza intelectual y perspicacia sistémica.'
  },
  INFJ: {
    name: 'El Abogado',
    stack: ['Ni', 'Fe', 'Ti', 'Se'],
    description: 'Empáticos visionarios que buscan un significado profundo y trabajan silenciosamente hacia sus ideales. Comprenden a las personas a un nivel que puede parecer casi psíquico, impulsados por un sentido de propósito mayor que ellos mismos.',
    courtBridge: 'Como la Princesa de Bastos (Thoth), INFJ sostiene la intuición dominante Ni en su forma más interior y portadora de potencial — la chispa antes de convertirse en llama, la visión aún reuniendo su fuerza creativa.'
  },
  ESTP: {
    name: 'El Emprendedor',
    stack: ['Se', 'Ti', 'Fe', 'Ni'],
    description: 'Pragmáticos audaces que prosperan en el momento presente. Leen las situaciones al instante, toman acciones decisivas y se adaptan sobre la marcha con facilidad y confianza.',
    courtBridge: 'Como el Caballero de Copas (Thoth), ESTP canaliza la sensación dominante Se a través del pensamiento extravertido — el dominio de las corrientes emocionales y sensoriales ejercido con autoridad imponente.'
  },
  ESFP: {
    name: 'El Animador',
    stack: ['Se', 'Fi', 'Te', 'Ni'],
    description: 'Experiencialistas vivaces que aportan calidez y espontaneidad donde quiera que vayan. Viven a través del contacto sensorial directo y comparten esa vitalidad generosamente.',
    courtBridge: 'Como la Reina de Copas, ESFP expresa la sensación dominante Se a través del sentimiento extravertido — receptividad emocional pura y viva en el momento presente, reflejando belleza y sentimiento al mundo.'
  },
  ISTP: {
    name: 'El Virtuoso',
    stack: ['Se', 'Ti', 'Fe', 'Ni'],
    description: 'Analistas serenos que comprenden los sistemas a través del contacto directo. Desarman las cosas para ver cómo funcionan y responden a las crisis con precisión calmada.',
    courtBridge: 'Como el Príncipe de Copas (Thoth), ISTP mueve la sensación dominante Se a través del pensamiento introvertido — el idealismo romántico del agua procesado a través de un análisis elegante y desapegado.'
  },
  ISFP: {
    name: 'El Aventurero',
    stack: ['Se', 'Fi', 'Te', 'Ni'],
    description: 'Artistas gentiles que experimentan el mundo a través de una rica paleta interior de valores y estética. Viven con autenticidad, guiados por un sentimiento personal profundo en lugar de expectativas externas.',
    courtBridge: 'Como la Princesa de Copas (Thoth), ISFP sostiene la sensación dominante Se en su forma más tierna e indefensa — el corazón abierto que recibe el mundo como belleza y lo traduce en expresión creativa silenciosa.'
  },
  ENTP: {
    name: 'El Polemista',
    stack: ['Ne', 'Ti', 'Fe', 'Si'],
    description: 'Provocadores inventivos que ven posibilidades en todas partes y cuestionan cada suposición. Generan ideas a gran velocidad y prosperan en el debate intelectual.',
    courtBridge: 'Como el Caballero de Espadas (Thoth), ENTP canaliza la intuición dominante Ne a través del pensamiento extravertido — el intelecto feroz que comanda mediante la fuerza del argumento y la claridad del análisis.'
  },
  ENFP: {
    name: 'El Activista',
    stack: ['Ne', 'Fi', 'Te', 'Si'],
    description: 'Visionarios entusiastas que conectan ideas, personas y posibilidades en narrativas inspiradoras. Defienden causas con optimismo contagioso y calidez genuina.',
    courtBridge: 'Como la Reina de Espadas, ENFP expresa la intuición dominante Ne a través del sentimiento extravertido — la claridad perceptiva nacida de la experiencia profunda, empuñando la honestidad como un acto de compasión.'
  },
  INTP: {
    name: 'El Lógico',
    stack: ['Ne', 'Ti', 'Fe', 'Si'],
    description: 'Pensadores abstractos que construyen marcos teóricos intrincados. Persiguen la consistencia lógica con intensidad silenciosa, siempre refinando su comprensión de cómo funcionan las cosas.',
    courtBridge: 'Como el Príncipe de Espadas (Thoth), INTP mueve la intuición dominante Ne a través del pensamiento introvertido — la tormenta del intelecto puro, brillante e imparable en su búsqueda de la verdad.'
  },
  INFP: {
    name: 'El Mediador',
    stack: ['Ne', 'Fi', 'Te', 'Si'],
    description: 'Soñadores idealistas guiados por valores profundamente arraigados. Buscan autenticidad y significado, a menudo expresando su rico mundo interior a través de la acción creativa y compasiva.',
    courtBridge: 'Como la Princesa de Espadas (Thoth), INFP sostiene la intuición dominante Ne en su forma más alerta y vigilante — la mente curiosa reuniendo impresiones antes de comprometerse, vigilante y lista para actuar.'
  },
  ESTJ: {
    name: 'El Ejecutivo',
    stack: ['Si', 'Te', 'Fi', 'Ne'],
    description: 'Administradores organizados que construyen y mantienen sistemas confiables. Valoran la tradición, la responsabilidad y las cadenas de mando claras, liderando mediante el ejemplo consistente.',
    courtBridge: 'Como el Caballero de Oros (Thoth), ESTJ canaliza la sensación dominante Si a través del pensamiento extravertido — el dominio del mundo material expresado como mayordomía autoritativa y sabiduría práctica.'
  },
  ESFJ: {
    name: 'El Cónsul',
    stack: ['Si', 'Fe', 'Ti', 'Ne'],
    description: 'Constructores de comunidad cálidos que crean armonía y aseguran que todos sean atendidos. Honran las tradiciones, recuerdan los detalles y sostienen el tejido social con atención devota.',
    courtBridge: 'Como la Reina de Oros, ESFJ expresa la sensación dominante Si a través del sentimiento extravertido — la abundancia nutricia que cuida cuerpos, tierra y almas con cuidado sensual y encarnado.'
  },
  ISTJ: {
    name: 'El Logístico',
    stack: ['Si', 'Te', 'Fi', 'Ne'],
    description: 'Realistas confiables que honran el deber y cumplen con cuidado meticuloso. Construyen estructuras duraderas a través del esfuerzo paciente y metódico y un compromiso inquebrantable.',
    courtBridge: 'Como el Príncipe de Oros (Thoth), ISTJ mueve la sensación dominante Si a través del pensamiento introvertido — el artesano diligente que inspecciona, planifica y construye con absoluta minuciosidad.'
  },
  ISFJ: {
    name: 'El Defensor',
    stack: ['Si', 'Fe', 'Ti', 'Ne'],
    description: 'Protectores silenciosos que recuerdan lo que importa y trabajan incansablemente tras bambalinas. Preservan lo valioso, apoyan a quienes aman y abordan el aprendizaje con dedicación humilde.',
    courtBridge: 'Como la Princesa de Oros (Thoth), ISFJ sostiene la sensación dominante Si en su forma más estudiosa y portadora de potencial — la aprendiz cuidadosa que quiere comprender el oficio antes de intentar la maestría.'
  }
};

export function mbtiForCard(suit, rank) {
  const fn = suitFunctions[suit];
  const { attitude, judging } = rankAttitudes[rank];
  const sensing = fn.charAt(0) === 'S' ? 'S' : 'N';
  const jp = (fn === 'Si' || fn === 'Ni') ? 'J' : 'P';
  return `${attitude}${sensing}${judging}${jp}`;
}
