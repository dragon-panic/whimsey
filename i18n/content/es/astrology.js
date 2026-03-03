export const zodiacSymbols = {
  'Aries': '♈︎',
  'Taurus': '♉︎',
  'Gemini': '♊︎',
  'Cancer': '♋︎',
  'Leo': '♌︎',
  'Virgo': '♍︎',
  'Libra': '♎︎',
  'Scorpio': '♏︎',
  'Sagittarius': '♐︎',
  'Capricorn': '♑︎',
  'Aquarius': '♒︎',
  'Pisces': '♓︎'
};

export const zodiacDescriptions = {
  'Aries': 'El Carnero - Un signo cardinal de fuego regido por Marte, que representa la iniciativa y el liderazgo. Los nativos de Aries suelen ser seguros, enérgicos y aventureros. Son líderes natos que aman los desafíos, muestran un valor notable y tienden a ser directos en su enfoque. Sin embargo, también pueden ser impulsivos y de temperamento rápido.',
  'Taurus': 'El Toro - Un signo fijo de tierra regido por Venus, que representa la estabilidad y la sensualidad. Los individuos de Tauro son conocidos por su fiabilidad, paciencia y determinación. Tienen una gran apreciación por la comodidad y el lujo, están profundamente conectados con la naturaleza y son amigos leales. Pueden ser tercos a veces, pero son excelentes construyendo seguridad a largo plazo.',
  'Gemini': 'Los Gemelos - Un signo mutable de aire regido por Mercurio, que representa la comunicación y la adaptabilidad. Los Géminis son curiosos, versátiles e intelectualmente motivados. Destacan en la multitarea, son grandes conversadores y tienen un sentido del humor ingenioso. Aunque pueden ser percibidos como inconsistentes, su adaptabilidad es su mayor fortaleza.',
  'Cancer': 'El Cangrejo - Un signo cardinal de agua regido por la Luna, que representa la protección y la profundidad emocional. Los cancerianos son profundamente intuitivos, protectores y empáticos. Valoran el hogar y la familia por encima de todo, tienen una excelente memoria y son cuidadores naturales. Aunque a veces son temperamentales, son ferozmente leales con sus seres queridos.',
  'Leo': 'El León - Un signo fijo de fuego regido por el Sol, que representa la creatividad y la autoexpresión. Los Leo son artistas naturales, generosos y de gran corazón. Poseen fuertes cualidades de liderazgo, son increíblemente creativos y tienen un talento para lo dramático. Aunque pueden ser orgullosos, su lealtad y carisma los convierten en personalidades magnéticas.',
  'Virgo': 'La Virgen - Un signo mutable de tierra regido por Mercurio, que representa el análisis y el perfeccionismo. Los Virgo son metódicos, prácticos y orientados al detalle. Tienen una fuerte ética de trabajo, son excelentes resolviendo problemas y tienen un deseo genuino de ayudar a los demás. Aunque pueden ser demasiado críticos, sus habilidades analíticas son incomparables.',
  'Libra': 'La Balanza - Un signo cardinal de aire regido por Venus, que representa la armonía y las relaciones. Los librianos son diplomáticos, encantadores y amantes de la paz. Tienen un fuerte sentido de la justicia, aprecian la belleza en todas sus formas y destacan mediando en conflictos. Aunque pueden ser indecisos, su capacidad para ver todos los lados de un asunto es invaluable.',
  'Scorpio': 'El Escorpión - Un signo fijo de agua regido por Marte/Plutón, que representa la transformación y la intensidad. Los Escorpio son apasionados, ingeniosos y profundamente perceptivos. Poseen fuertes habilidades investigativas, son ferozmente leales y tienen una poderosa profundidad emocional. Aunque a veces son reservados, su determinación y resiliencia son notables.',
  'Sagittarius': 'El Arquero - Un signo mutable de fuego regido por Júpiter, que representa la exploración y la sabiduría. Los sagitarianos son optimistas, aventureros y filosóficos. Les encanta viajar, aprender sobre diferentes culturas y compartir su conocimiento con los demás. Aunque pueden ser directos, su entusiasmo y honestidad son refrescantes.',
  'Capricorn': 'La Cabra Marina - Un signo cardinal de tierra regido por Saturno, que representa la ambición y la disciplina. Los Capricornio son responsables, pacientes y orientados a metas. Tienen excelentes habilidades organizativas, una fuerte ética de trabajo y un talento natural para los negocios. Aunque pueden parecer reservados, su humor seco y determinación los hacen exitosos.',
  'Aquarius': 'El Portador de Agua - Un signo fijo de aire regido por Saturno/Urano, que representa la innovación y la comunidad. Los acuarianos son progresistas, originales y humanitarios. Son visionarios, valoran la independencia y a menudo defienden causas sociales. Aunque pueden parecer distantes, sus ideas visionarias y singularidad los convierten en innovadores naturales.',
  'Pisces': 'Los Peces - Un signo mutable de agua regido por Júpiter/Neptuno, que representa la imaginación y la espiritualidad. Los piscianos son compasivos, artísticos y altamente intuitivos. Tienen ricas habilidades creativas, profunda empatía y una fuerte conexión con el reino espiritual. Aunque pueden ser escapistas a veces, su sensibilidad artística y naturaleza sanadora son dones.'
};

export const zodiacElements = {
  'Aries': { element: 'Fire', suit: 'Wands' },
  'Leo': { element: 'Fire', suit: 'Wands' },
  'Sagittarius': { element: 'Fire', suit: 'Wands' },
  'Taurus': { element: 'Earth', suit: 'Pentacles' },
  'Virgo': { element: 'Earth', suit: 'Pentacles' },
  'Capricorn': { element: 'Earth', suit: 'Pentacles' },
  'Gemini': { element: 'Air', suit: 'Swords' },
  'Libra': { element: 'Air', suit: 'Swords' },
  'Aquarius': { element: 'Air', suit: 'Swords' },
  'Cancer': { element: 'Water', suit: 'Cups' },
  'Scorpio': { element: 'Water', suit: 'Cups' },
  'Pisces': { element: 'Water', suit: 'Cups' }
};

export const elements = {
  'Fire': {
    signs: ['Aries', 'Leo', 'Sagittarius'],
    description: 'Energía, pasión y creatividad'
  },
  'Earth': {
    signs: ['Taurus', 'Virgo', 'Capricorn'],
    description: 'Estabilidad, practicidad y mundo material'
  },
  'Air': {
    signs: ['Gemini', 'Libra', 'Aquarius'],
    description: 'Intelecto, comunicación e ideas'
  },
  'Water': {
    signs: ['Cancer', 'Scorpio', 'Pisces'],
    description: 'Emociones, intuición y relaciones'
  }
};
