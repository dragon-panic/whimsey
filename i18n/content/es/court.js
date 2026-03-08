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
  rws:   { king: 'Rey',       queen: 'Reina', knight: 'Caballero', page: 'Paje' },
  thoth: { king: 'Caballero', queen: 'Reina', knight: 'Príncipe',  page: 'Princesa' }
};

export const rankDescriptions = {
  king: 'El aspecto de Fuego del palo — activo, proyectivo y autoritario. Esta figura inicia, lidera y encarna la expresión yang pura de la fuerza elemental.',
  queen: 'El aspecto de Agua del palo — receptivo, reflexivo y nutricio. Esta figura interioriza la fuerza elemental, expresándola a través del sentimiento, la intuición y la profundidad.',
  knight: 'El aspecto de Aire del palo — móvil, intelectual y cambiante. Esta figura mueve la fuerza elemental hacia afuera a través del pensamiento, la comunicación y la acción rápida.',
  page: 'El aspecto de Tierra del palo — enraizado, estudioso y portador de potencial. Esta figura contiene la fuerza elemental en forma latente, representando el aprendizaje, los mensajes y los nuevos comienzos.'
};

export const suitNames = {
  Wands: 'Bastos',
  Cups: 'Copas',
  Swords: 'Espadas',
  Pentacles: 'Oros'
};

export const elementNames = {
  Fire: 'Fuego',
  Water: 'Agua',
  Air: 'Aire',
  Earth: 'Tierra'
};

export const suitOrder = ['Wands', 'Cups', 'Swords', 'Pentacles'];
export const rankOrder = ['king', 'queen', 'knight', 'page'];

export const courtCardData = {

  // ── WANDS (Fire) ──────────────────────────────────────────────────────────

  'king-of-wands': {
    suit: 'Wands',
    rank: 'king',
    mbti: 'ENTJ',
    title: 'Señor de la Llama y el Relámpago',
    description: 'El Rey de Bastos es Fuego de Fuego — el arquetipo puro del liderazgo inspirado y la voluntad creativa. Es el emprendedor, el visionario y el líder nato que actúa desde la convicción en lugar del cálculo. Su autoridad no proviene de una posición sino de un fuego interior que otros se sienten impulsados a seguir. Es audaz, magnánimo y a veces imprudente en la persecución de sus grandes designios.',
    jungian: 'Representa el principio masculino plenamente individuado operando a través de la Voluntad — el Sí Mismo expresado como autoridad creativa. Psicológicamente, esta figura encarna la integración del animus en su forma más imponente, donde la visión personal se alinea con el propósito arquetípico. La sombra es la tiranía, donde el impulso de dominio eclipsa la empatía.',
    powerGods: 'El rey guerrero cuya conquista es justa porque cree totalmente en su causa. El poder expresado como dominación, la subyugación de voluntades más débiles bajo una sola visión ardiente. Victoria a toda costa.',
    traditional: 'El patriarca bendecido por el fuego divino — un líder que gobierna a través de la autoridad otorgada por Dios y la rectitud moral. Su llama es sagrada, su palabra es ley. Protege y provee, exigiendo lealtad y obediencia a cambio.',
    modern: 'El CEO o fundador visionario que revoluciona industrias a través del carisma y la tenacidad. Construye imperios por pura voluntad, inspira una lealtad feroz y no tolera nada que atenúe su impulso. El éxito valida el método.',
    postModern: 'Una crítica al mito del genio solitario — ¿la llama de quién proyecta sombras sobre quienes la alimentan? El fuego del rey consume recursos, relaciones y el trabajo de innumerables personas invisibles. El liderazgo debe ser cuestionado como una construcción social.',
    metaModern: 'El líder consciente que empuña una visión ardiente mientras permanece responsable ante el ecosistema más amplio. Soberanía ganada a través de la integridad, no del dominio. La llama compartida en lugar de acaparada — iluminando en lugar de consumir.',
    reversed: 'Liderazgo tiránico o visión creativa convertida en dominación impulsada por el ego. El fuego interior consume en lugar de iluminar — ambición temeraria, temperamento explosivo, o un líder que exige lealtad sin ofrecer ninguna a cambio.'
  },

  'queen-of-wands': {
    suit: 'Wands',
    rank: 'queen',
    mbti: 'ENFJ',
    title: 'Reina de los Tronos de la Llama',
    description: 'La Reina de Bastos es Agua de Fuego — sentimiento apasionado canalizado en un magnetismo personal radiante. Es la reina del girasol, cálida y segura de sí misma, que atrae a otros simplemente por ser plenamente ella misma. Creativa, leal y ferozmente independiente, sabe lo que quiere y lo persigue con calidez en lugar de fuerza. Su autoridad se gana a través de una presencia genuina y una vitalidad innegable.',
    jungian: 'Encarna el arquetipo del ánima completamente a gusto en el mundo — el principio femenino expresado a través de la confianza creativa en lugar de la receptividad. Es el sí mismo individuado que no necesita validación externa. Su sombra es la vanidad y la posesividad, un fuego que abrasa lo que dice amar.',
    powerGods: 'La diosa solar cuya aprobación debe ganarse, cuya resplandor bendice o quema. Poder ejercido a través de la dominación social y la retención del calor. Lealtad asegurada haciendo que otros se sientan elegidos.',
    traditional: 'La matriarca cuyo hogar arde con vida y propósito. Es el fuego del hogar — sustentadora de la familia, la comunidad y la tradición. Su pasión se expresa a través del servicio devoto a lo que ama.',
    modern: 'La emprendedora o artista fuerza de la naturaleza — segura, autopromocionada y magnéticamente productiva. Asume su ambición sin disculpas. Su producción creativa es prolífica, su red amplia, su marca personal impecable.',
    postModern: '¿Quién decide qué pasiones son legítimas? La confianza de la reina a menudo descansa sobre el privilegio social. Examinar qué significa ser "naturalmente" magnética cuando el magnetismo está moldeado por la política de raza, clase y género.',
    metaModern: 'El yo creativo plenamente expresado que celebra las llamas de otros en lugar de competir con ellas. Confianza arraigada en un genuino autoconocimiento, magnetismo enraizado en la presencia auténtica. Fuego que calienta en lugar de consumir.',
    reversed: 'La seguridad en sí misma cuajada en vanidad o celos. La presencia magnética se vuelve posesiva, exigiendo atención mientras sofoca la luz de otros. Alternativamente, un bloqueo creativo donde el fuego interior se ha enfriado y la confianza ha colapsado en inseguridad.'
  },

  'knight-of-wands': {
    suit: 'Wands',
    rank: 'knight',
    mbti: 'INTJ',
    title: 'Señor de los Vientos y las Brisas',
    description: 'El Caballero de Bastos es Aire de Fuego — el aventurero mercurial que se lanza hacia cada horizonte con un entusiasmo contagioso. Es la búsqueda eterna personificada: inquieto, audaz e imposible de atrapar. Su energía es explosiva y creativa, capaz de encender movimientos enteros con un solo discurso apasionado. El desafío es la perseverancia; a menudo se ha ido antes de que el fuego que inició sea atendido.',
    jungian: 'El arquetipo del puer aeternus — el joven eterno que rechaza la limitación y el compromiso. Psicológicamente, representa el impulso creativo antes de que haya sido disciplinado por la necesidad del ego de completar las cosas. Integrar esta figura significa encontrar formas de sostener el fuego sin perder la chispa.',
    powerGods: 'El conquistador a caballo que destruye y avanza, dejando transformación a su paso, sea bienvenida o no. Poder a través de la velocidad y el impacto — llegar, encender, partir antes de que las consecuencias lo alcancen.',
    traditional: 'El caballero cruzado que cabalga por una causa sagrada con fe absoluta y sin vacilación. Su valor es genuino aunque su sabiduría no esté desarrollada. Dios y la gloria apuntan en la misma dirección; no pide más.',
    modern: 'El emprendedor en serie, el creativo nómada, el disruptor que prospera en el caos. Lanza proyectos con energía brillante y presentaciones excepcionales, luego pierde interés una vez que la emoción inicial se desvanece. El fracaso y el éxito le aburren por igual.',
    postModern: 'El aventurero inquieto cuya libertad a menudo depende de que otros permanezcan quietos. ¿Quién limpia los fuegos que inicia? El nomadismo y la disrupción como privilegio — la capacidad de seguir adelante está desigualmente distribuida.',
    metaModern: 'El iniciador inspirado que ha aprendido a pasar la antorcha a sustentadores hábiles antes de cabalgar hacia el próximo horizonte. Su fuego es un regalo, no una reclamación. Velocidad equilibrada con la sabiduría suficiente para saber cuándo desacelerar.',
    reversed: 'Energía inquieta sin dirección — proyectos dispersos, promesas rotas y un rastro de asuntos sin terminar. El aventurero que confunde la temeridad con el coraje, dejando a otros limpiar los fuegos que inicia.'
  },

  'page-of-wands': {
    suit: 'Wands',
    rank: 'page',
    mbti: 'INFJ',
    title: 'Princesa de la Llama Resplandeciente',
    description: 'El Paje de Bastos es Tierra de Fuego — el potencial creativo en su estado más fértil e informe. Es la chispa antes de convertirse en llama, la idea antes de convertirse en proyecto. Entusiasta, curiosa y audazmente experimental, se acerca al mundo como un enorme patio de juegos creativo. Los mensajes de inspiración, la emoción repentina por una nueva dirección y los emocionantes primeros días de una empresa creativa le pertenecen.',
    jungian: 'Representa la etapa más temprana de la individuación creativa — el Sí Mismo naciente comenzando a avivar su propio fuego. Psicológicamente, es el niño interior que aún no ha aprendido a censurar su entusiasmo. Su sombra es la energía dispersa y la incapacidad de comprometerse.',
    powerGods: 'La niña salvaje cuyo poder bruto es precisamente su imprevisibilidad. Aún no ha sido socializada en la deferencia — su fuego puede quemar cualquier cosa, y esa potencia es en sí misma una forma de autoridad.',
    traditional: 'La joven acólita ante la llama sagrada, aprendiendo los rituales de la devoción y el servicio creativo. El entusiasmo disciplinado en práctica. La mente del principiante sostenida dentro de una estructura que le da dirección.',
    modern: 'La joven creativa, la pasante con grandes ideas, la estudiante que aún no ha aprendido a contenerse. Su energía es contagiosa y a veces agotadora. El sistema no siempre sabe qué hacer con ella.',
    postModern: 'La eterna principiante como respuesta a la cultura de la experticia — resistiendo la presión de convertirse en una autoridad. Negándose a ser domesticada. El paje que no se convertirá en caballero según el calendario de nadie más.',
    metaModern: 'La mente del principiante preservada conscientemente y con intención. El entusiasmo fresco sostenido junto a la sabiduría creciente. Aprende el oficio mientras mantiene la llama viva — ni ingenua ni cínica, sino genuinamente encendida.',
    reversed: 'Potencial creativo desperdiciado por falta de enfoque o perseverancia. Entusiasmo que se enciende y muere antes de construir nada. La chispa que no encuentra su leña — impaciencia, ingenuidad, o la negativa a comprometerse con la disciplina que haría real la visión.'
  },

  // ── CUPS (Water) ──────────────────────────────────────────────────────────

  'king-of-cups': {
    suit: 'Cups',
    rank: 'king',
    mbti: 'ESTP',
    title: 'Señor de las Olas y las Aguas',
    description: 'El Rey de Copas es Fuego de Agua — voluntad y autoridad expresadas a través del dominio emocional y la comprensión compasiva. Gobierna el reino del sentimiento sin ser arrastrado por él. Consejero, sanador o guía espiritual, sostiene el espacio para las profundidades de la experiencia humana mientras permanece centrado y cálido. Su poder proviene de haber navegado su propio inframundo emocional y haber regresado con una sabiduría duramente ganada.',
    jungian: 'El arquetipo del Viejo Sabio o el sanador sanado — la sombra integrada, las profundidades exploradas, el ánima comprendida. Ha realizado el trabajo interior y ahora sostiene el contenedor para otros. La sombra es la manipulación emocional, usando la empatía como palanca.',
    powerGods: 'El rey-sacerdote cuya autoridad descansa en su acceso percibido a las aguas divinas — sanar, maldecir, conocer. Poder a través de la inteligencia emocional convertida en arma: aquel que sabe lo que necesitas y controla su dispensación.',
    traditional: 'El director espiritual, confesor o chamán cuya compasión es genuina pero cuyo rol está estrictamente definido por la tradición. Sana dentro de una estructura sagrada. La sabiduría se transmite, no se inventa. Los límites protegen tanto al que da como al que recibe.',
    modern: 'El terapeuta, el ejecutivo emocionalmente inteligente, el director creativo que lidera a través de la empatía en lugar de la jerarquía. Comprende lo que motiva a las personas y crea las condiciones para su mejor trabajo. Los sentimientos son datos.',
    postModern: '¿Las emociones de quién se permite dominar? La autoridad emocional serena del rey a menudo descansa sobre estructuras que suprimen ciertos sentimientos como caóticos o peligrosos. El trabajo emocional está desigualmente distribuido.',
    metaModern: 'El líder emocional integrado que sostiene tanto la profundidad como la estabilidad — sin suprimir sentimientos ni ahogarse en ellos. Modela que la inteligencia emocional no se trata de control sino de presencia honesta y enraizada.',
    reversed: 'Manipulación emocional disfrazada de empatía — el sanador que usa su comprensión de los sentimientos como palanca. Alternativamente, represión emocional tras una fachada serena, o un consejero ahogándose en las profundidades que dice haber dominado.'
  },

  'queen-of-cups': {
    suit: 'Cups',
    rank: 'queen',
    mbti: 'ESFP',
    title: 'Reina de los Tronos del Agua',
    description: 'La Reina de Copas es Agua de Agua — receptividad emocional pura y profundidad psíquica. Es el espejo del alma, capaz de reflejar lo que otros más necesitan ver. Intuitiva, empática y profundamente interior, vive en las tierras fronterizas entre lo visto y lo no visto. Su don es una cualidad de presencia que hace que otros se sientan verdaderamente conocidos. El desafío es mantener sus propios límites en medio del flujo constante de sentimiento.',
    jungian: 'El ánima en su forma más completa — lo inconsciente hecho consciente, la función del sentimiento plenamente desarrollada. Es el principio femenino interior que conecta al ego con el Sí Mismo a través del medio de la emoción y la imagen. Su sombra es la disolución del yo al servicio de los demás.',
    powerGods: 'La oráculo cuyo acceso a las profundidades le da un poder inquietante sobre aquellos que necesitan desesperadamente ser vistos. La sibila que conoce tus secretos. Poder a través del reflejo — mostrando a otros a sí mismos de maneras que no pueden resistir.',
    traditional: 'La contemplativa, la mística, el vaso de compasión divina. Reza por el mundo desde un lugar de profunda quietud. Su profundidad es un don de Dios, para ser sostenido con humildad y ofrecido en servicio.',
    modern: 'La terapeuta altamente sintonizada, la artista que canaliza la verdad emocional colectiva, la madre que conoce la vida interior de sus hijos mejor que ellos mismos. La profundidad emocional como superpoder profesional y personal.',
    postModern: 'La carga de la sintonización emocional interminable — especialmente cuando recae en las mujeres por defecto. La reina que contiene los sentimientos de todos los demás a costa de los propios. ¿La copa de quién se está llenando?',
    metaModern: 'Receptividad profunda emparejada con límites que honran al yo. La reina que es tanto profundamente abierta como claramente ella misma — presencia sin fusión, compasión sin autoanulación. La copa que también se vierte en sí misma.',
    reversed: 'Empatía sin límites que disuelve el yo, o receptividad psíquica que se ha vuelto abrumadora e inmanejable. El espejo que ya no puede distinguir su propio reflejo del de los demás — codependencia, martirio emocional, o retiro a mundos interiores impenetrables.'
  },

  'knight-of-cups': {
    suit: 'Cups',
    rank: 'knight',
    mbti: 'ISTP',
    title: 'Señor de las Olas y las Aguas',
    description: 'El Caballero de Copas es Aire de Agua — idealismo romántico elevado por la imaginación poética. Es el trovador, el caballero místico, el soñador que sigue su corazón a través de distancias imposibles. Sus ofertas de amor y belleza son genuinas, pero pueden evaporarse cuando la realidad exige practicidad. Es la invitación a algo trascendente, siempre llegando con un mensaje del reino del ideal.',
    jungian: 'La proyección del animus romántico en su forma más seductora — la figura sobre la cual se depositan todos los anhelos de trascendencia y amor perfecto. Psicológicamente, encontrar este arquetipo pregunta si uno está enamorado del ideal o de la persona real que tiene delante.',
    powerGods: 'El seductor cuya belleza y sensibilidad son precisamente sus armas. Poder a través del idealismo romántico — haciéndote creer que eres tú quien finalmente será suficiente para su corazón imposible.',
    traditional: 'El caballero cortés que sirve a una dama o un ideal espiritual con devoción pura. El amor como voto sagrado. El amor cortés como una disciplina que eleva el alma. El sentimiento refinado a través del ritual y el sacrificio.',
    modern: 'El artista-amante sensible, el hombre que hace grandes gestos y desaparece cuando comienza el trabajo de sostener la intimidad. Inteligencia emocional sin madurez emocional. La musa en lugar del compañero.',
    postModern: 'El ideal romántico como construcción cultural que establece estándares imposibles y castiga lo mundano. ¿La versión del amor de quién se llama romántica? La tradición trovadoresca y sus dinámicas de poder de género.',
    metaModern: 'El anhelo genuino del corazón por la trascendencia, sostenido dentro de la disposición a presentarse para lo ordinario. El romance integrado con el compromiso. El ideal y lo real sostenidos en una tensión productiva.',
    reversed: 'Idealismo romántico que no sobrevive el contacto con la realidad — el amante que se evapora cuando comienza el trabajo mundano de la relación. Promesas seductoras sin sustancia, indisponibilidad emocional enmascarada como sensibilidad, o la persecución de un ideal imposible que sabotea la conexión real.'
  },

  'page-of-cups': {
    suit: 'Cups',
    rank: 'page',
    mbti: 'ISFP',
    title: 'Princesa de las Aguas',
    description: 'El Paje de Copas es Tierra de Agua — sensibilidad emocional en su forma más abierta e indefensa. Es la niña soñadora que escucha al pez hablar desde la copa, que encuentra magia en encuentros inesperados. Psíquica, tierna e imaginativamente viva, trae mensajes del inconsciente en forma de sincronicidades, sueños y destellos repentinos de inspiración. Su don es la capacidad de recibir lo que otros ya han dejado de escuchar.',
    jungian: 'El ánima en su manifestación más temprana e informe — la imagen del alma antes de que haya sido moldeada por el encuentro con el mundo. Representa la receptividad prístina del inconsciente, capaz de una percepción extraordinaria precisamente porque no lleva armadura.',
    powerGods: 'La niña extraña cuyas percepciones inquietantes desconciertan a los adultos a su alrededor. Poder a través de la inocencia — nadie sabe muy bien qué hacer con alguien que ve a través de las pretensiones acordadas.',
    traditional: 'La novicia en la vida emocional o espiritual, aprendiendo a cuidar las aguas interiores con gentileza y reverencia. El sentimiento como don sagrado que debe desarrollarse lenta y cuidadosamente.',
    modern: 'La persona altamente sensible descubriendo sus dones empáticos, la joven artista aprendiendo a confiar en su verdad emocional por encima de la validación externa. La vulnerabilidad como fuerza creativa.',
    postModern: 'La romantización de la inocencia infantil como solución a una cultura excesivamente racionalizada. ¿La sensibilidad de quién se valora como visionaria y la de quién se descarta como fragilidad?',
    metaModern: 'El corazón abierto que ha aprendido discernimiento sin perder el asombro. Receptividad emocional emparejada con el primer crecimiento de límites saludables — aún escuchando al pez en la copa, pero comenzando a entender qué significa el mensaje.',
    reversed: 'Inmadurez emocional o hipersensibilidad que no puede canalizarse productivamente. El niño soñador que se niega a crecer, refugiándose en la fantasía en lugar de comprometerse con el sentimiento. Intuición bloqueada, estancamiento creativo, o vulnerabilidad explotada por quienes deberían protegerla.'
  },

  // ── SWORDS (Air) ──────────────────────────────────────────────────────────

  'king-of-swords': {
    suit: 'Swords',
    rank: 'king',
    mbti: 'ENTP',
    title: 'Señor del Viento y las Brisas',
    description: 'El Rey de Espadas es Fuego de Aire — inteligencia feroz al mando de un juicio claro y autoritario. Es el arquetipo del juez, el comandante, el genio analítico que corta la confusión con precisión y coraje intelectual. Su mente opera a gran velocidad, viendo a través del engaño y sosteniendo sistemas complejos simultáneamente. Exige claridad, espera franqueza y tiene poca paciencia con el razonamiento emocional en lugar de la evidencia racional.',
    jungian: 'La función del pensamiento plenamente desarrollada — el logos en su expresión más austera. Representa la capacidad del ego para el autoexamen lúcido y el coraje de seguir la razón hasta conclusiones ante las que otros retroceden. La sombra es la crueldad intelectual, donde la precisión se convierte en desapego armado.',
    powerGods: 'El estratega militar cuya ventaja es la información y la disposición a actuar sobre ella de manera decisiva y sin sentimiento. Poder a través de una inteligencia superior y la capacidad de imponer orden mediante la fuerza del juicio.',
    traditional: 'El legislador, el magistrado, el sacerdote-erudito cuya palabra lleva el peso de la tradición acumulada y el estudio cuidadoso. La razón al servicio del orden divino. La letra de la ley como marco moral.',
    modern: 'El cirujano, el abogado, el pensador de sistemas — alguien cuyo valor reside en la precisión de su análisis y su inmunidad al sesgo cognitivo. La objetividad como virtud profesional. La autoridad del experto.',
    postModern: '¿La razón de quién cuenta como universal? La espada del análisis "objetivo" ha cortado históricamente en direcciones muy particulares. Exponer la carga ideológica contenida en las afirmaciones de racionalidad pura.',
    metaModern: 'Inteligencia clara al servicio de la comprensión genuina — razón que incluye en lugar de excluir, precisión que ilumina en lugar de disminuir. La espada empuñada con cuidado por lo que corta.',
    reversed: 'Tiranía intelectual — una mente brillante que usa la precisión como arma, derribando a otros bajo el pretexto de objetividad. Racionalidad fría divorciada de la empatía, abuso de autoridad, o un juicio tan severo que destruye lo que dice servir.'
  },

  'queen-of-swords': {
    suit: 'Swords',
    rank: 'queen',
    mbti: 'ENFP',
    title: 'Reina de los Tronos del Aire',
    description: 'La Reina de Espadas es Agua de Aire — sentimiento profundo procesado a través de una claridad mental cristalina. Ha conocido el duelo, la pérdida y los bordes afilados de la experiencia, y de estos ha forjado una inteligencia de perspicacia devastadora. Ve a través de la pretensión sin esfuerzo, se comunica con honestidad precisa y mantiene sus límites con firmeza serena. Su aparente frialdad no es ausencia de sentimiento sino la disciplina de alguien que ha aprendido lo que cuesta la claridad.',
    jungian: 'La integración de las funciones del pensamiento y el sentimiento — una figura que ha atravesado las aguas del duelo y ha emergido con una mente que es tanto aguda como profunda. Representa la sabiduría que viene solo a través de la experiencia de la pérdida. Su sombra es la amargura: la claridad cuajada en desprecio.',
    powerGods: 'La reina viuda cuya pérdida ha despojado toda ilusión y dejado una soberana completamente libre de la necesidad de aprobación. Poder a través de la indiferencia — ya no necesita lo que tú estás reteniendo.',
    traditional: 'La mujer erudita cuyo duelo ha refinado su fe y cuya inteligencia aguda sirve a una verdad superior. La mujer sabia cuyo consejo se busca precisamente porque no siente nada por tu ego.',
    modern: 'La analista o editora brillante que exige claridad y no tolera deshonestidad intelectual. Ha visto a través de cada racionalización y espera que tú hayas hecho lo mismo. Estándares sin sentimentalismo.',
    postModern: 'La mujer que tuvo que desarrollar armadura intelectual para ser tomada en serio en estructuras no construidas para ella. El costo de reclamar claridad en un mundo que patologiza igualmente a las mujeres emocionales y a las mujeres frías.',
    metaModern: 'Claridad y compasión sostenidas juntas sin pretender que ninguna sea fácil. La reina que puede decir la verdad difícil y permanecer abierta al dolor del otro. La honestidad como un acto de cuidado.',
    reversed: 'Claridad endurecida en amargura, o un duelo que se ha convertido en escudo permanente contra el sentimiento. La mente perceptiva vuelta cruel — usando la perspicacia para herir en lugar de iluminar. Aislamiento emocional justificado como independencia, o estándares tan imposiblemente altos que nadie puede alcanzarla.'
  },

  'knight-of-swords': {
    suit: 'Swords',
    rank: 'knight',
    mbti: 'INTP',
    title: 'Señor del Viento y las Tormentas',
    description: 'El Caballero de Espadas es Aire de Aire — fuerza mental pura moviéndose a máxima velocidad. Es la tormenta del intelecto: brillante, imparable y a menudo indiferente a lo que destruye en su carrera hacia la verdad. Un argumento nunca está resuelto hasta que cada debilidad ha sido expuesta. Se lanza a cada debate intelectual con compromiso total, y sus ideas, correctas o no, llegan con la fuerza de una convicción absoluta. Es el arquetipo del cruzado de principios y del fanático en igual medida.',
    jungian: 'La función del pensamiento en su forma más intemperada — el animus plenamente identificado con el principio abstracto a expensas de la realidad encarnada. Representa la capacidad de la psique para la convicción absoluta, que puede ser liberadora o catastrófica dependiendo de si la convicción es merecida.',
    powerGods: 'El guerrero ideológico que lucha por una idea como si su vida dependiera de ello — porque en su mundo así es. Poder a través de la disposición a sacrificarlo todo, incluidas las relaciones, por un principio.',
    traditional: 'El cruzado, el reformador, el monje con espada — una fe tan absoluta que se convierte en arma. La integridad aterradora de alguien que se ha entregado enteramente a una causa más grande que él mismo.',
    modern: 'El periodista de investigación, el intelectual contrario, el activista radical — alguien que persigue la verdad a un costo personal y espera lo mismo de todos a su alrededor. El debate como obligación moral.',
    postModern: 'La violencia de la certeza. ¿Las verdades de quién pueden moverse a toda velocidad y cuáles deben probarse a cada paso? La carga del caballero deja tras de sí un paisaje de argumentos desmantelados, algunos de los cuales eran estructurales.',
    metaModern: 'La mente aguda que ha aprendido a apuntar antes de cargar. Búsqueda de la verdad con humildad epistémica — dispuesto a equivocarse, dispuesto a desacelerar, dispuesto a considerar si la batalla vale el campo de batalla.',
    reversed: 'Agresión intelectual sin templar por la sabiduría — el fanático que destruye relaciones y comunidades al servicio de principios abstractos. Argumentos temerarios, honestidad hiriente sin cuidado, o una mente moviéndose tan rápido que no reconoce el daño a su paso.'
  },

  'page-of-swords': {
    suit: 'Swords',
    rank: 'page',
    mbti: 'INFP',
    title: 'Princesa de los Vientos Impetuosos',
    description: 'El Paje de Espadas es Tierra de Aire — curiosidad intelectual en su forma más inquieta y alerta. Está observando, escuchando, analizando, reuniendo información antes de comprometerse con cualquier posición. Astuta, rápida y ligeramente suspicaz de los motivos de todos, es la joven espía, la estudiante que cuestiona todo, la mente que aún no ha encontrado su causa pero está lista para desenvainar en cualquier momento. Las noticias inesperadas, la vigilancia y las primeras etapas de aprender a pensar críticamente le pertenecen.',
    jungian: 'Las primeras etapas de diferenciación de la función del pensamiento — el intelecto naciente probando sus bordes contra el mundo. Una vigilancia necesaria que precede a la confianza. Su sombra es la paranoia: el estado de alerta que no puede apagarse.',
    powerGods: 'La joven informante cuyo poder reside en lo que sabe que otros no. Reunir inteligencia como protección y palanca. La niña que aprendió temprano que la información es supervivencia.',
    traditional: 'La estudiante diligente preparándose para el examen, la joven soldado montando guardia — disciplina antes que autoridad, aprendiendo las reglas antes de cuestionarlas.',
    modern: 'La pasante con un bloc de notas, la investigadora de posgrado, la analista junior — aguda, ávida, ligeramente abrumadora en su minuciosidad. Aún no ha aprendido a ser estratégica con sus observaciones.',
    postModern: 'La denunciante en formación. La que está en la institución que nota lo que todos los demás han acordado no ver. ¿La vigilancia de quién es paranoia y la de quién está justificada?',
    metaModern: 'La mente curiosa que ha aprendido a hacer preguntas desde el asombro genuino en lugar del estado de alerta defensiva. La inteligencia como un don ofrecido en lugar de un escudo levantado. Observando el mundo con apertura en lugar de suspicacia.',
    reversed: 'Vigilancia cuajada en paranoia, o curiosidad intelectual convertida en arma como chisme y vigilancia. El espía que no confía en nadie, el estudiante que cuestiona todo pero no se compromete con nada, o una mente tan ocupada reuniendo información que nunca actúa sobre lo que sabe.'
  },

  // ── PENTACLES (Earth) ─────────────────────────────────────────────────────

  'king-of-pentacles': {
    suit: 'Pentacles',
    rank: 'king',
    mbti: 'ESTJ',
    title: 'Señor de la Tierra Salvaje y Fértil',
    description: 'El Rey de Oros es Fuego de Tierra — dominio sobre el mundo material, la voluntad que ha transformado el esfuerzo en abundancia duradera. Es el patriarca de la riqueza y la sabiduría práctica: metódico, generoso y absolutamente fiable. Habiendo construido algo perdurable a partir del trabajo paciente, ahora gobierna con la autoridad serena de quien conoce la tierra completamente. Valora lo que perdura sobre lo que impresiona, y su generosidad está enraizada en una suficiencia genuina.',
    jungian: 'El arquetipo del padre plenamente encarnado en el reino material — el ego que ha negociado exitosamente con la realidad y ha llegado a una seguridad genuina en lugar de una acumulación compensatoria. La sombra es la avaricia: el miedo a que la tierra vuelva a fallar, acaparando contra una escasez imaginada.',
    powerGods: 'El señor feudal cuya propiedad de la tierra es propiedad de vidas. Poder a través del control de recursos — quien controla la cosecha controla al pueblo. La riqueza como expresión de virtud superior o favor divino.',
    traditional: 'El mayordomo de la abundancia de Dios, responsable de quienes trabajan en su tierra. La riqueza sostenida en custodia, no como logro personal sino como obligación sagrada. La generosidad como el uso apropiado de los bienes mundanos.',
    modern: 'El magnate hecho a sí mismo que construyó un imperio a través del esfuerzo persistente y metódico. No necesita impresionar a nadie — los resultados hablan. Pensamiento a largo plazo, capital paciente, rendimientos compuestos en cada inversión, incluidas las relaciones.',
    postModern: '¿El trabajo de quién construye la abundancia del rey? El patriarca terrateniente como figura sostenida por el trabajo invisible. Examinar qué significa "construir algo" cuando los cimientos descansan sobre trabajo no remunerado o mal pagado.',
    metaModern: 'Prosperidad enraizada en contribución genuina y distribuida equitativamente. El rey-mayordomo que sabe que su abundancia es relacional — sostenida por la salud de todos en el ecosistema, no extraída de él.',
    reversed: 'Éxito material corrompido en acaparamiento y explotación. El patriarca que controla a través de la riqueza, el avaro que teme la escasez a pesar de la abundancia, o competencia práctica desplegada sin fundamento ético. Obstinación disfrazada de estabilidad.'
  },

  'queen-of-pentacles': {
    suit: 'Pentacles',
    rank: 'queen',
    mbti: 'ESFJ',
    title: 'Reina de los Tronos de la Tierra',
    description: 'La Reina de Oros es Agua de Tierra — abundancia sensual y nutricia en su forma más plenamente encarnada. Es la gran madre de la vida material: cuida cuerpos, cultiva la tierra, gestiona hogares y crea las condiciones en las que todo y todos los que le importan pueden prosperar. Práctica, sensorial, profundamente presente en el mundo físico, encuentra lo sagrado en lo ordinario — en la comida, en el tacto, en la organización cuidadosa de la realidad material hacia un florecimiento sostenible.',
    jungian: 'El arquetipo de la Gran Madre en su forma más benevolente y terrenal — el ánima plenamente encarnada en la materia. Representa la capacidad de la psique para encontrar significado y placer en la existencia encarnada en lugar de la trascendencia. Su sombra es la sobreprotección posesiva: asfixiar en nombre del cuidado.',
    powerGods: 'La diosa de la tierra cuya fertilidad es adorada y cuyo desagrado significa hambruna. Poder a través del control del sustento — quien alimenta posee la autoridad más profunda sobre quienes tienen hambre.',
    traditional: 'La madre y ama de casa ideal, cuyo dominio es el espacio sagrado del hogar. Su labor es invisible porque lo es todo. Construye el mundo desde adentro hacia afuera, una comida, un hogar, un cuerpo cuidado a la vez.',
    modern: 'La brillante economista doméstica, la inversora ética, la mujer que construye riqueza silenciosa a través de la atención al detalle y el juego a largo plazo. No busca visibilidad pero su competencia es innegable.',
    postModern: 'Lo doméstico como político — ¿el "don natural" de quién para nutrir se convierte en la infraestructura de otro? La abundancia de la reina está construida sobre un trabajo que el mundo prefiere llamar instinto.',
    metaModern: 'El cuerpo y la tierra sostenidos como sagrados — no al servicio de la productividad sino como valor intrínseco. Nutrir desde una plenitud genuina. La reina que se cuida a sí misma con tanto esmero como cuida su reino.',
    reversed: 'Nutrición que sofoca, o competencia doméstica convertida en control posesivo. La madre tierra que da sin cesar pero exige dependencia total a cambio. Alternativamente, autonegligencia — tan enfocada en cuidar a otros que su propio terreno queda baldío.'
  },

  'knight-of-pentacles': {
    suit: 'Pentacles',
    rank: 'knight',
    mbti: 'ISTJ',
    title: 'Señor de la Tierra Amplia y Fértil',
    description: 'El Caballero de Oros es Aire de Tierra — inteligencia metódica aplicada al trabajo paciente de construir. Es el trabajador diligente, el artesano cuidadoso, el planificador confiable que no se dejará apresurar. Mientras otros caballeros cargan temerariamente hacia adelante, él inspecciona el terreno, examina el suelo y luego procede paso a paso deliberado. Puede carecer del brío de sus compañeros, pero el trabajo que completa se hace con absoluta minuciosidad. Lo que construye, perdura.',
    jungian: 'La función del pensamiento enraizada en la sensación — el intelecto que respeta en lugar de trascender lo físico. Representa la capacidad de esfuerzo sostenido: la función psicológica que puede diferir la gratificación indefinidamente al servicio de un objetivo a largo plazo. La sombra es el estancamiento: la paciencia endurecida en negativa a cambiar.',
    powerGods: 'El veterano que ha sobrevivido a cada estratega brillante a través de la simple resistencia. Poder a través de la fiabilidad — aquel de quien realmente depende el reino cuando los visionarios se han marchado.',
    traditional: 'El agricultor yeoman, el artesano del gremio — alguien para quien el trabajo es vocación y la calidad es un estándar moral. Hay dignidad en el trabajo honesto. El trabajo es su propia recompensa.',
    modern: 'El gestor de proyectos, el ingeniero de DevOps, el experto en fiabilidad — la persona que hace que todo lo demás funcione prestando atención a las cosas de las que nadie más quiere ocuparse. Sin glamour e indispensable.',
    postModern: 'El trabajador constante como figura a menudo borrada de las narrativas que celebran la disrupción y la innovación. ¿La fiabilidad de quién sostiene la libertad de quién para ser creativo? La resistencia como fenómeno de clase.',
    metaModern: 'Dedicación sin rigidez — trabajo paciente sostenido dentro de la conciencia de que la tierra misma cambia. El caballero que cuida el suelo mientras permanece dispuesto a cambiar de cultivo cuando la estación lo exige.',
    reversed: 'Paciencia calcificada en estancamiento — el trabajador fiable que ha dejado de crecer, el artesano cuya minuciosidad se ha convertido en excusa para nunca terminar. Resistencia al cambio necesario, perfeccionismo como parálisis, o resistencia sin propósito.'
  },

  'page-of-pentacles': {
    suit: 'Pentacles',
    rank: 'page',
    mbti: 'ISFJ',
    title: 'Princesa de las Colinas Resonantes',
    description: 'El Paje de Oros es Tierra de Tierra — la esencia concentrada del potencial material, quieta y estudiosa. Sostiene su moneda a la luz no para presumir sino para comprenderla verdaderamente. Es la estudiante dedicada, la joven aprendiz, la investigadora cuidadosa que quiere aprender el oficio correctamente antes de intentar la maestría. Práctica, enraizada y genuinamente curiosa sobre cómo funciona el mundo físico, representa los primeros pasos cuidadosos hacia la competencia material.',
    jungian: 'La etapa más temprana del encuentro del ego con la realidad material — el yo aprendiendo que el mundo tiene su propia lógica que debe ser respetada antes de poder trabajar con ella. Es la psique descubriendo la disciplina del oficio.',
    powerGods: 'La joven heredera que comprende, quizás por primera vez, lo que realmente significa poseer poder en el mundo material. El peso de la moneda. La responsabilidad de lo que puede construirse o despilfarrarse.',
    traditional: 'La aprendiz que se somete a la enseñanza del maestro, la novicia ante el oficio. Humildad ante el conocimiento. El aprendizaje como obligación sagrada. El largo camino de la habilidad genuina.',
    modern: 'La pasante que realmente quiere aprender el negocio desde cero, la estudiante universitaria de primera generación gestionando un presupuesto por primera vez. La emoción y el terror de la competencia material emergente.',
    postModern: 'La estudiante cuyo acceso al oficio y al aprendizaje está circunscrito por los recursos disponibles para ella. ¿La dedicación de quién se transforma en habilidad profesional y la de quién permanece como aficionada?',
    metaModern: 'La principiante que se acerca a la realidad material con reverencia y curiosidad — comprendiendo que la competencia debe cultivarse, no arrebatarse. La tierra estudiada con la paciencia de quien sabe que la cosecha llegará.',
    reversed: 'La estudiante que no se compromete con el aprendizaje, o potencial material desperdiciado por pereza, distracción o prioridades mal ubicadas. Una preocupación por el dinero o la seguridad que desplaza la curiosidad genuina. La aprendiz que quiere maestría sin la paciencia del oficio.'
  }

};
