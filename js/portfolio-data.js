/* ============================================================================
   PORTFOLIO_DATA — Fuente única de verdad para el portafolio de Chelsea
   Contenido verificado desde el CV, respuestas de entrevista de Chelsea y los
   repositorios permitidos: Controlador/, Correos_casillero/, proyectos/Marchel-Asterisk/
   y proyectos/LRSS-4/.
   ============================================================================ */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Chelsea Fernández Hernández",
    shortName: "Chelsea Fernández",
    initials: "CHFH",
    handle: "Chelseafh",
    heroEyebrow: "Capítulo I · Frieren — Paz / Ideal de vida",
    heroSubtitle:
      "Madrid · Vida sin prisas · Entre el mar, la comunidad y nuevos horizontes",
    headline:
      "Tres etapas para conocerme sin prisas y seguir el viaje.",
    subheadline:
      "Vivo en Madrid y me gusta disfrutar de los días sin tanta prisa, rodeada de buena compañía, un libro abierto o una sobremesa larga. Este espacio recorre quién soy en tres etapas: la calma con la que entiendo la vida, la comunidad en la que crecí ayudando a otros y, más adelante al llegar a mar abierto, el camino y los proyectos que hoy me traen hasta aquí.",
    role: "Estudiante de último año de Ingeniería Telemática (UAH · Prom. 2027)",
    location: "Madrid · Alcalá de Henares",
    university: "Universidad de Alcalá (UAH)",
    degreeStatus:
      "Último año de Grado en Ingeniería Telemática (graduación prevista: 2027) · Valorando máster habilitante",
    availability:
      "Disponible para prácticas curriculares (450 h) ampliables a extracurriculares (hasta 900 h)",
    statusBadge: "Ing. Telemática (UAH · Prom. 2027) · Prácticas 450–900 h",
    email: "chelseafh2003@gmail.com",
    github: "https://github.com/Chelseafh",
    linkedin: "https://www.linkedin.com/in/chelsea-fernandez-hernandez-64a339189/",
    cvPath: "assets/CV_Chelsea_Fdez_Hdez.pdf",
    // Teléfono privado confirmado para mostrarse únicamente dentro del PDF del CV
    phoneVisibility: "cv-only",
    languages: [
      {
        name: "Español",
        level: "Nativo",
        note: "Lengua materna"
      },
      {
        name: "Inglés",
        level: "~B2 práctico",
        note: "Comprensión técnica y uso conversacional (sin certificación oficial)"
      }
    ],
    cvCompetencies: [
      {
        category: "Lenguajes y Herramientas",
        items: ["Python", "C", "C#", "Bash", "Git", "Docker", "Docker Compose", "LaTeX"]
      },
      {
        category: "Tecnologías y Frameworks",
        items: ["FastAPI", "Flask", "Redis", "WebSockets", "Multithreading", "Linux"]
      },
      {
        category: "Sistemas y VoIP",
        items: ["Redes SIP", "Asterisk", "PJSIP", "Wireshark"]
      },
      {
        category: "IA y Bases de Datos",
        items: ["YOLO", "ONNX", "Faster-Whisper", "Ollama", "MariaDB", "PostgreSQL"]
      }
    ],
    metrics: [
      {
        value: "2",
        label: "Becas de I+D (UAH)",
        detail: "ALTEN & Instituto Cervantes (XR/IA) y Cátedra de Correos (Visión Artificial)"
      },
      {
        value: "450–900h",
        label: "Prácticas disponibles",
        detail: "Curriculares (450 h) ampliables a extracurriculares · Graduación prevista 2027"
      },
      {
        value: "2019–2026",
        label: "Comunidad & Tech",
        detail: "Technovation Girls (alumna y mentora) y Staff en CNSM 2026"
      },
      {
        value: "4",
        label: "Sistemas técnicos",
        detail: "Microservicios Docker, FastAPI, Asterisk VoIP y AWS Lambda / RDS"
      }
    ]
  },

  themes: [
    {
      id: "frieren",
      name: "Frieren",
      subtitle: "Paz e ideal de vida · Disfrutar lo cotidiano con calma",
      icon: "assets/icons/frieren-staff.svg",
      quote:
        "Vivimos deprisa y nuestro tiempo es breve; por eso merece la pena detenerse, disfrutar de las pequeñas cosas y cuidar el tiempo con quienes queremos."
    },
    {
      id: "aang",
      name: "Avatar Aang",
      subtitle: "Comunidad e infancia · Escuchar, comprender y sumar",
      icon: "assets/icons/appa.svg",
      quote:
        "Pensar diferente no convierte a nadie en tu enemigo: escuchar con empatía, respetar al otro y construir comunidad es lo que realmente equilibra el mundo."
    },
    {
      id: "onepiece",
      name: "One Piece",
      subtitle: "Futuro y aventura · Proyectos, becas y espíritu nakama",
      icon: "assets/icons/chopper.svg",
      quote:
        "Sigo explorando mis sueños y cómo hacerlos realidad, disfrutando cada reto técnico rodeada de buenos nakamas."
    }
  ],

  pillars: {
    frieren: {
      id: "frieren",
      label: "Pilar 1 · Frieren",
      title: "Paz e Ideal de Vida",
      subtitle: "El mar, norte verde, viajes en pareja, juegos de mesa y lectura sin prisa",
      icon: "assets/icons/frieren-staff.svg",
      reflection:
        "Frieren me recuerda que debemos tomarnos las cosas con calma. Las personas vivimos demasiado poco y casi siempre vamos con prisa, olvidándonos de lo sencillo. Al final, lo único que da verdadero valor a la vida es disfrutar de las pequeñas cosas con tranquilidad y dedicar tiempo de calidad a quienes quieres, sin olvidarte de vivir.",
      introStory:
        "Lejos de cualquier pantalla o reloj, mi ritmo cotidiano busca cuidar esos pequeños rituales que me devuelven al equilibrio: escuchar las olas, sentarme alrededor de una mesa con los míos o perderme en una buena historia sobre una manta en el campo.",
      wovenStory: {
        title: "Mi ritmo fuera del reloj",
        paragraphs: [
          "Nací en una isla, y creo que de ahí viene lo mucho que quiero al mar: basta quedarme observándolo y escuchando romper sus olas para volver a sentirme en calma. Cuando el plan es escaparme tierra adentro, me encanta el norte de España, perderme entre sus paisajes verdes y el rumor de los ríos, y extender una manta en el suelo para pasar horas leyendo sin prisa. Esa misma ilusión por descubrir sitios con tranquilidad vive también en una tradición anual que mantengo con mi pareja: celebrar cada cumpleaños y nuestro aniversario viajando, como hicimos en Milán y en Copenhague.",
          "Pero no hace falta hacer las maletas para detener el reloj. Desde muy pequeña, reunirnos alrededor de una mesa en familia o con amigos significa tardes interminables de risas, pique sano y conversación. Crecí entre partidas de Monopoly, Dominó, Trivial y juegos de cartas, y hoy esas sobremesas siguen siendo sagradas sumando Party & Co, Hitster, Catán, Cluedo, Virus, puzles y ratos tranquilos construyendo LEGO.",
          "Y aunque de pequeña no era de leer demasiado, con los años los libros han ido ganando cada vez más espacio en mi día a día hasta convertirse en uno de mis refugios favoritos. Entre las historias que más me han marcado está San Manuel Bueno, mártir, cuya reflexión filosófica y religiosa sobre la fe y el cuidado hacia los demás me removió muchísimo precisamente por leerla desde una mirada no creyente pero profundamente empática. Hoy salto de los mangas en edición grimorio de The Witch Hat Atelier a la fantasía de Brandon Sanderson con Trenza del mar esmeralda y Nacidos de la bruma, novelas como El paciente, Últimos días en Berlín o El día que se perdió la cordura, clásicos como 1984 de George Orwell y mi lectura actual, El cuento de la criada —porque, al final, disfrutar de todo esto con calma y junto a quienes quieres es lo que da sentido a cada etapa."
        ]
      },
      spells: [
        "Las vidas humanas pasan en un suspiro; merece la pena detenerse para conocer de verdad a quienes caminan a tu lado.",
        "Hechizo de sobremesa tranquila: convertir los pequeños momentos cotidianos en recuerdos que sigan brillando años después.",
        "No toda magia sirve para combatir; los hechizos más valiosos hacen aparecer flores, templan el frío o iluminan una tarde sencilla.",
        "El viaje no acaba cuando derrotas al Rey Demonio: lo mejor empieza cuando aprendes a mirar el camino con la calma que antes no tenías.",
        "Cada conversación con los tuyos, como aquellos diez años junto a Himmel, Heiter y Eisen, vale más que cualquier grimorio antiguo.",
        "Coleccionar pequeños hechizos sin utilidad práctica recuerda que vivir no es tachar metas, sino saborear el trayecto."
      ],
      seal: "和 · armonía entre la calma cotidiana, las pequeñas cosas y el tiempo con quienes quieres",
      reading: {
        title: "Lectura & tiempo para mí",
        summary:
          "Es curioso porque de pequeña no era de leer mucho, pero con los años los libros han ido ganando sitio en mi rutina y hoy les dedico cada vez más tiempo. Leer se ha convertido en uno de mis refugios favoritos.",
        featuredNote:
          "San Manuel Bueno, mártir me hizo reflexionar muchísimo por su trasfondo filosófico y humano alrededor de la fe y el cuidado hacia los demás —precisamente por leerla siendo no creyente pero profundamente empática.",
        books: [
          {
            title: "San Manuel Bueno, mártir",
            note: "Lectura especial; profunda reflexión desde una mirada no creyente pero empática"
          },
          { title: "The Witch Hat Atelier", note: "Mangas en edición grimorio" },
          { title: "Trenza del mar esmeralda", note: "Brandon Sanderson" },
          { title: "Nacidos de la bruma", note: "Brandon Sanderson" },
          { title: "El paciente", note: "Novela" },
          { title: "Últimos días en Berlín", note: "Novela" },
          { title: "El día que se perdió la cordura", note: "Novela" },
          { title: "1984", note: "George Orwell" },
          { title: "El cuento de la criada", note: "Leyendo actualmente" }
        ]
      },
      boardGames: {
        title: "Juegos de mesa desde pequeña",
        summary:
          "Desde pequeña, las tardes de juegos de mesa en familia y con amigos son sinónimo de risas, estrategia y tiempo de calidad compartido sin mirar el reloj.",
        items: [
          "Monopoly",
          "Dominó",
          "Trivial",
          "Party & Co",
          "Hitster",
          "Juegos de cartas",
          "Catán",
          "Cluedo",
          "Puzles",
          "Virus",
          "LEGO"
        ]
      },
      travelAndNature: {
        title: "El mar, norte verde y viajes en pareja",
        summary:
          "Observar el mar y escuchar sus olas siempre me devuelve la calma. También me encanta escapar al norte de España entre paisajes verdes y ríos, donde mi plan ideal es extender una manta en el suelo para leer tranquila. Y con mi pareja mantenemos una tradición anual muy especial: celebrar cumpleaños y aniversario viajando, como hicimos en Milán y Copenhague.",
        highlights: [
          "Olas del mar · Calma observando y escuchando el océano",
          "Norte de España · Naturaleza verde, ríos y leer sobre una manta",
          "Milán y Copenhague · Tradición anual en pareja por cumpleaños y aniversario"
        ]
      },
      photoSlots: [
        {
          id: "frieren-viajes-naturaleza",
          title: "Mar, norte de España y viajes",
          caption:
            "Espacio reservado para fotografía de viajes o lectura tranquila (Milán, Copenhague, norte de España o el mar)",
          plannedPath: "assets/images/frieren/viaje-playa-norte.jpg",
          src: null,
          uploaded: false,
          status: "pending-upload"
        }
      ]
    },

    aang: {
      id: "aang",
      label: "Pilar 2 · Avatar Aang",
      title: "Comunidad e Infancia",
      subtitle: "Empatía, etapa escolar como alumna, mentoría en Technovation Girls y staff en CNSM",
      icon: "assets/icons/appa.svg",
      reflection:
        "Para mí, Avatar Aang simboliza la importancia de escuchar y entender que alguien no es tu enemigo simplemente por pensar diferente. Habla de comprender, perdonar y respetar la libertad de pensar distinto siempre que no impida la libertad de los demás.",
      story:
        "Lo que realmente descongeló mi curiosidad por la tecnología empezó en el instituto, entre asignaturas de robótica y programación, competiciones escolares como Robocampeones, un reto junto a Endesa diseñando un robot en 3D en AutoCAD, fabricándolo con impresora 3D y programando su placa Arduino, y mi etapa como alumna senior en Technovation Girls creando una app frente al bullying en App Inventor. Aquello me demostró que aprender en comunidad te lleva mucho más lejos —y años después volví al punto de partida como mentora y colaboré en CNSM 2026 en Alcalá de Henares.",
      elementsLabel: "Cuatro valores de comunidad y empatía",
      elements: [
        { name: "Aire", value: "Escuchar sin prejuicios" },
        { name: "Agua", value: "Empatía y adaptación" },
        { name: "Tierra", value: "Constancia y cuidado" },
        { name: "Fuego", value: "Iniciativa y mentoría" }
      ],
      milestones: [
        {
          id: "etapa-alumna",
          period: "Instituto · 2019",
          title: "Mi etapa como alumna: Robocampeones, reto Arduino Endesa y Technovation Senior",
          role: "Alumna de instituto y participante",
          description:
            "En el instituto descubrí cuánto me gustaba crear cosas útiles entre asignaturas de robótica y programación: competí en Robocampeones, participé en un reto escolar junto a Endesa diseñando un robot en 3D en AutoCAD, fabricándolo con impresora 3D y programando su placa Arduino, y, como alumna senior en Technovation Girls 2019, diseñé con mi equipo una app en App Inventor para ayudar a niños y niñas que sufrían bullying. Aquella etapa sembró la pasión que me ha traído hasta hoy.",
          highlights: [
            "Competición en Robocampeones y reto escolar con Endesa: modelado 3D en AutoCAD, fabricación en impresora 3D y programación de placa Arduino",
            "Alumna senior en Technovation Girls 2019 creando en App Inventor una app frente al bullying"
          ]
        },
        {
          id: "technovation-2026",
          period: "2026",
          title: "Mentora en Technovation Girls 2026 (Equipo «Inteligents» · Saludea)",
          role: "Mentora de equipo principiante",
          description:
            "Cerrar el círculo acompañando como mentora a un equipo de niñas principiantes del colegio Ernest Hemingway («Inteligents»). Juntas dieron forma a Saludea, una app pensada para ayudar a personas con medicación a evitar alimentos que interfieren con su tratamiento; verlas idear, organizarse, superar frustraciones y celebrar el resultado final fue inolvidable.",
          highlights: [
            "App Saludea (2026): guía clara para evitar interacciones entre medicamentos y alimentos",
            "Acompañamiento cercano ideando, organizándose y superando frustraciones en equipo"
          ]
        },
        {
          id: "cnsm-2026",
          period: "26–30 Oct 2026",
          title: "Staff en CNSM 2026 (Alcalá de Henares)",
          role: "Staff de organización, acreditaciones y guiado",
          description:
            "Formé parte del equipo de staff en el 22nd International Conference on Network and Service Management ('Evolving Network and Service Management: From Automation to Agentic Intelligence'), ayudando en organización, acreditaciones y guiado por la universidad, además de asistir a charlas, practicar inglés y compartir con asistentes de todo el mundo.",
          highlights: [
            "Organización de jornadas, acreditaciones y guiado de asistentes por Alcalá de Henares",
            "Asistencia a charlas, práctica de inglés y encuentro con comunidad internacional"
          ]
        }
      ],
      photoSlots: [
        {
          id: "aang-technovation-2026",
          title: "Technovation Girls 2026 · Equipo Inteligents",
          caption:
            "Espacio reservado para fotografía de Technovation Girls 2026 (mentoría al equipo Inteligents / app Saludea)",
          plannedPath: "assets/images/aang/technovation-2026.jpg",
          src: null,
          uploaded: false,
          status: "pending-upload"
        },
        {
          id: "aang-cnsm-2026",
          title: "Staff en CNSM 2026 · Alcalá de Henares",
          caption:
            "Espacio reservado para fotografía como Staff en CNSM 2026 (22nd Int. Conference on Network and Service Management)",
          plannedPath: "assets/images/aang/cnsm-2026.jpg",
          src: null,
          uploaded: false,
          status: "pending-upload"
        }
      ]
    },

    onepiece: {
      id: "onepiece",
      label: "Pilar 3 · One Piece",
      title: "Futuro y Aventura Técnica",
      subtitle: "Ingeniería Telemática, becas de investigación, proyectos y espíritu nakama",
      icon: "assets/icons/nika.svg",
      story:
        "Aquí empieza el mar abierto de mi camino técnico: el último curso de Ingeniería Telemática en la UAH, las becas reales de I+D donde diseñé backends, colas y modelos de IA, y los proyectos de redes y nube construidos codo con codo junto a buenos nakamas.",
      reflection:
        "Sigo en plena travesía descubriendo cuáles son todos mis sueños y cómo hacerlos realidad, pero tengo claro cómo quiero vivir el viaje: rodeada de buenos nakamas, aprendiendo en cada proyecto complejo y celebrando cada festín por el camino.",
      treasureTitle: "El tesoro no es el destino",
      treasureQuote:
        "«Sigo en plena travesía descubriendo cuáles son todos mis sueños y cómo hacerlos realidad, pero tengo claro cómo quiero vivir el viaje: rodeada de buenos nakamas, aprendiendo en cada proyecto complejo y celebrando cada festín por el camino.»",
      treasureContext:
        "Compaginar el grado en la UAH (2027) con becas de I+D y casi cuatro años trabajando los fines de semana en Parfois (Nov 2022 – Ago 2026) ha entrenado mi gestión del tiempo, resiliencia y trabajo bajo presión. Ahora busco prácticas curriculares (450 h) ampliables a 900 h.",
      summary:
        "En último año de Ingeniería Telemática en la Universidad de Alcalá (UAH · graduación prevista en 2027, valorando máster habilitante), compagino la carrera y mis becas reales de I+D con casi cuatro años trabajando los fines de semana en Parfois (Nov 2022 – Ago 2026), donde entrené la gestión del tiempo, la resiliencia y el trabajo bajo presión. Ahora busco prácticas curriculares (450 h) ampliables a extracurriculares (hasta 900 h) para seguir aportando en sistemas distribuidos, redes e IA aplicada.",
      nakamaEasterEggs: {
        brook: [
          "¡Yohohoho! Ver tantos microservicios en marcha da ganas de sacar el violín y tocar «Binks' Sake» de puerto en puerto.",
          "¿Una pausa para el té o el café antes de levantar Docker? ¡Encantado, aunque no tengo estómago para beberlo... ¡Yohohoho!!",
          "Con una arquitectura tan limpia el corazón me daría un vuelco... ¡si todavía tuviera corazón! Perdón, chiste de esqueleto caballero.",
          "Qué elegante cuaderno de bitácora, navegante. ¿Me permitiría echar un vistazo a esos nodos... ¡Yohohoho!"
        ],
        robin: [
          "Fufufu~ Como arqueóloga, descifrar cada nodo de esta arquitectura casi se siente como leer un antiguo Poneglyph.",
          "Un buen mapa de navegación, historia ordenada en la bitácora y un libro abierto en cubierta... es mi forma favorita de viajar.",
          "Si algún contenedor llegara a caer en mitad de la noche... qué fascinante sería investigar qué catástrofe antigua ocurrió ahí dentro. Fufufu~",
          "Los libros y registros bien cuidados tienen algo especial: dejan que las memorias de cada puerto sobrevivan a cualquier tormenta."
        ]
      }
    }
  },

  projects: [
    {
      id: "controlador-cervantes",
      title: "Controlador Backend XR & Evaluación Vocal (Juego Educativo VR/MR)",
      subtitle:
        "Mi rol: controlador general (api-servidor FastAPI), endpoints de gafas, MariaDB, Nginx, concurrencia STT+Ollama y Docker",
      category: "profesional",
      categoryLabel: "Beca I+D · XR & IA",
      institution: "UAH · ALTEN Spain & Instituto Cervantes",
      period: "Dic 2025 – May 2026",
      repoFolder: "Controlador/",
      featured: true,
      myRole:
        "Responsable íntegra del controlador general backend (api-servidor): diseño y desarrollo de todos los endpoints REST y WebSockets para las gafas VR, autenticación segura con el launcher, persistencia transaccional con MariaDB, corrección automática de notas, pipeline concurrente de audio (Faster-Whisper STT en paralelo con Regex + Ollama), configuración de Nginx TLS, contenedorización con Docker Compose y co-diseño de la arquitectura global del sistema.",
      teamContext:
        "Trabajo multidisciplinar en equipo: compañeras diseñaron los escenarios interactivos de Realidad Mixta en las gafas Meta Quest, otro compañero desarrolló el portal docente de gestión (api-web) y entre ambos coordinamos la arquitectura global cliente-servidor.",
      summary:
        "Controlador central backend dockerizado para una plataforma educativa inmersiva de español en Realidad Virtual y Mixta (Meta Quest) desarrollada para ALTEN y el Instituto Cervantes. Lideré la ingeniería del servidor central que autentica dispositivos, distribuye dinámicamente escenarios pedagógicos por PIN, ingesta streaming de audio infantil en tiempo real vía WebSockets, evalúa la pronunciación con un flujo híbrido de IA y persiste calificaciones trazables en MariaDB.",
      problem:
        "El proyecto educativo requería conectar múltiples visores Meta Quest simultáneos en aula sin latencia perceptible, validando dispositivos de forma segura, ingiriendo audio continuo infantil en español con diversos niveles de ruido y evaluando las respuestas en tiempo real sin bloquear la inmersión del juego ni perder trazabilidad académica.",
      solution:
        "Diseñé e implementé el microservicio api-servidor con FastAPI y concurrencia multihilo/asíncrona: recepción de audio continuo PCM16 por WebSockets, amplificación y empaquetado WAV en memoria, transcripción automática con Faster-Whisper y motor de evaluación en paralelo que combina reglas deterministas fonéticas/Regex instantáneas con un fallback semántico en Ollama (qwen2.5:1.5b), cancelando la llamada a IA cuando la regla determinista aprueba. Todo el ecosistema opera orquestado en Docker Compose con MariaDB 10.6, proxy seguro Nginx y despliegue OTA para actualizaciones remotas.",
      highlights: [
        "Controlador REST y WebSockets de alta disponibilidad: endpoints para registro y autenticación del launcher (/inicio, /registro_gafa), distribución de configuración de escenarios por PIN (/configuracion), gestión de turnos (/siguiente_alumno), persistencia transaccional de notas (/notas_alumno) y actualización remota OTA (/admin/deploy-ota).",
        "Pipeline concurrente de voz e IA con optimización de latencia: streaming PCM16 por WebSocket (/escenario/...), transcripción con Faster-Whisper en contenedor y ejecución en paralelo de validación determinista y semántica con Ollama, minimizando los tiempos de respuesta para el usuario final.",
        "Liderazgo técnico e integración de infraestructura: co-diseño de la arquitectura global con los módulos de frontend web y visores, integración con MariaDB respetando integridad referencial, reverse proxy Nginx con cifrado TLS 1.2/1.3 y orquestación reproducible en Docker Compose."
      ],
      tech: [
        "Python",
        "FastAPI",
        "WebSockets",
        "Multithreading",
        "Faster-Whisper",
        "Ollama",
        "MariaDB",
        "Nginx",
        "Docker",
        "Docker Compose"
      ],
      architecture: {
        summary:
          "Las gafas Meta Quest (con los juegos MR desarrollados por mis compañeras) se comunican con mi controlador api-servidor (FastAPI) para autenticación del launcher, configuración por PIN, streaming de audio WebSocket y registro de notas en MariaDB, mientras Nginx enruta el ecosistema dockerizado junto al portal api-web.",
        nodes: [
          {
            id: "visores-xr",
            label: "Visores Meta Quest (Juegos MR)",
            layer: "cliente",
            role: "Juegos educativos VR/MR desarrollados por el equipo de visor",
            tech: ["Meta Quest MR", "Launcher Auth", "WebSocket PCM16", "REST"],
            details:
              "Las gafas validan su número de serie en el launcher, consultan qué escenario y capas toca ejecutar mediante PIN y transmiten el audio del alumno al controlador general.",
            connectsTo: ["api-servidor", "nginx-proxy"]
          },
          {
            id: "nginx-proxy",
            label: "Nginx Reverse Proxy (Mi rol)",
            layer: "infra",
            role: "Terminación HTTPS TLS 1.2/1.3 y enrutamiento del stack",
            tech: ["Nginx Alpine", "TLS 1.2/1.3", "Docker Compose"],
            details:
              "Configurado para centralizar la entrada segura al ecosistema dockerizado, inyectar cabeceras reales de proxy y preparar el enrutamiento conjunto de portal web, REST y WebSockets.",
            connectsTo: ["portal-web", "api-servidor"]
          },
          {
            id: "api-servidor",
            label: "Controlador api-servidor (Mi rol)",
            layer: "api",
            role: "Núcleo FastAPI: endpoints de gafas, corrección automática y concurrencia",
            tech: ["FastAPI", "Gunicorn / Uvicorn", "WebSockets", "Multithreading / Async"],
            details:
              "Implementé todos los endpoints para las gafas, autenticación del launcher, consultas y volcado transaccional de notas, y el pipeline paralelo que ejecuta evaluación Regex/fonética a la vez que consulta Ollama.",
            connectsTo: ["ia-voz", "mariadb-db"]
          },
          {
            id: "ia-voz",
            label: "Pipeline Voz & IA (Integración)",
            layer: "ia",
            role: "Transcripción Faster-Whisper, evaluación Ollama y audio Coqui TTS",
            tech: ["Faster-Whisper STT", "Ollama qwen2.5:1.5b", "Coqui TTS"],
            details:
              "Servicios en contenedores Docker integrados desde api-servidor para transcribir respuestas orales infantiles en español y servir como respaldo semántico cuando las reglas rápidas no bastan.",
            connectsTo: []
          },
          {
            id: "portal-web",
            label: "Portal Web api-web (Compañero)",
            layer: "web",
            role: "Interfaz Flask desarrollada por el compañero de web",
            tech: ["Flask", "Jinja2", "RBAC", "MariaDB"],
            details:
              "Panel docente conectado a la misma base de datos MariaDB y red Docker co-diseñada entre ambos para gestionar clases, PINs y visualizar resultados.",
            connectsTo: ["mariadb-db"]
          },
          {
            id: "mariadb-db",
            label: "MariaDB (Integración BBDD)",
            layer: "datos",
            role: "Persistencia de dispositivos, sesiones, notas y transcripciones STT",
            tech: ["MariaDB 10.6", "SQL Async", "ON DELETE RESTRICT"],
            details:
              "Almacena el inventario de gafas autorizadas, versiones de escenarios, planes por PIN, estado del alumno y las calificaciones automáticas con su texto transcrito.",
            connectsTo: []
          }
        ]
      }
    },
    {
      id: "correos-casillero",
      title: "Sistema de Visión Artificial & Microservicios (Cátedra de Correos)",
      subtitle:
        "Mi rol: todo el sistema salvo el panel web (Docker Compose, FastAPI api-core, colas Redis, worker ONNX/YOLO GPU, PostgreSQL y Label Studio)",
      category: "profesional",
      categoryLabel: "Beca I+D · Visión Artificial",
      institution: "Cátedra de Correos y Telégrafos · UAH",
      period: "Jun 2026 – Actualidad",
      repoFolder: "Correos_casillero/Servidor/",
      featured: true,
      myRole:
        "Responsable integral de la infraestructura backend, la arquitectura de microservicios y el pipeline de visión artificial (todo el sistema excepto el panel web administrativo): orquestación con Docker Compose, API móvil FastAPI con JWT y validación binaria, cola desacoplada Redis AOF, worker de inferencia ONNX/YOLO con soporte GPU local/CPU, base de datos PostgreSQL 15, reverse proxy Nginx, etiquetado de datasets en Label Studio y scripts de entrenamiento en curso.",
      teamContext:
        "Beca de I+D en la Cátedra de Correos y Telégrafos (UAH): asumí de extremo a extremo la ingeniería de datos, infraestructura, ingesta segura y visión por computador, coordinándome con el desarrollo del panel web administrativo que evoluciona como módulo de consulta separado.",
      summary:
        "Plataforma distribuida de microservicios en Docker para automatizar la auditoría y conteo de correspondencia en casilleros postales de 20 baldas mediante visión por computador (YOLOv8-seg / ONNX Runtime). Asumí de extremo a extremo la ingeniería del servidor: desde la ingesta móvil segura y la gestión asíncrona de colas hasta la inferencia local acelerada por hardware y la persistencia histórica en PostgreSQL.",
      problem:
        "El conteo manual diario de correspondencia en casilleros de Unidades de Reparto consume tiempo operativo crítico y genera discrepancias de inventario. El reto técnico exigía segmentar con precisión sobres apilados en distintas orientaciones en imágenes tomadas con PDAs móviles, procesando picos de carga en horas punta sin degradar el servicio ni perder solicitudes.",
      solution:
        "Implementé un patrón productor-consumidor resiliente en Docker Compose: un gateway Nginx filtra y enruta el tráfico; api-core (FastAPI) valida credenciales JWT y analiza los magic bytes JPEG del stream para descartar ficheros corruptos; las tareas se encolan en Redis con persistencia AOF y rate limiting; y un worker especializado (ia-worker) ejecuta inferencia con YOLOv8-seg exportado a ONNX Runtime (CUDA en GPU local con fallback transparente a CPU), proyectando las detecciones poligonales a la matriz física 4×5 (20 baldas) y almacenando resultados trazables en PostgreSQL 15.",
      highlights: [
        "Arquitectura productor-consumidor tolerante a fallos: desacoplamiento completo entre la API de ingesta móvil y el procesamiento de IA mediante colas Redis AOF, absorbiendo ráfagas de capturas simultáneas desde las PDAs de reparto sin cuellos de botella.",
        "Pipeline de visión artificial de alta precisión: modelo YOLOv8-seg exportado a ONNX Runtime con aceleración GPU (CUDAExecutionProvider) y fallback automático a CPU, mapeo geométrico poligonal hacia las 20 baldas del casillero y ciclo continuo de etiquetado en Label Studio y reentrenamiento.",
        "Seguridad y persistencia de nivel empresarial: autenticación JWT con control de acceso basado en roles (RBAC), validación binaria de cabeceras JPEG en streaming, esquema relacional robusto en PostgreSQL 15 con integridad referencial estricta y reverse proxy Nginx TLS."
      ],
      tech: [
        "Python",
        "FastAPI",
        "YOLO",
        "ONNX",
        "OpenCV",
        "Label Studio",
        "Redis",
        "PostgreSQL",
        "Nginx",
        "Docker",
        "Docker Compose"
      ],
      architecture: {
        summary:
          "Diseñé todo el flujo servidor e IA (excepto el panel web): Nginx enruta peticiones hacia api-core (FastAPI), que autentica con JWT, guarda la fotografía y encola la tarea en Redis para que ia-worker ejecute la inferencia ONNX/YOLO (con GPU local o CPU) y registre ocupación y conteo por balda en PostgreSQL.",
        nodes: [
          {
            id: "cliente-pda",
            label: "Captura PDA & Simulador",
            layer: "cliente",
            role: "Origen de fotografías normalizadas de casilleros",
            tech: ["Multipart JPEG", "JWT Bearer", "simulador_pda.py"],
            details:
              "Envía capturas de principio y fin de jornada con nombre normalizado por unidad, mesa y marca temporal hacia el prefijo /mobile_api/*.",
            connectsTo: ["nginx-gateway"]
          },
          {
            id: "nginx-gateway",
            label: "Nginx Reverse Proxy (Mi rol)",
            layer: "infra",
            role: "Gateway único, buffering 25 MB y preparación TLS",
            tech: ["Nginx Alpine", "Docker DNS", "HTTPS Ready"],
            details:
              "Separa el tráfico móvil (/mobile_api/*) hacia api-core y el tráfico de administración hacia el panel web, aplicando cabeceras de seguridad y límites de carga.",
            connectsTo: ["api-core", "web-panel"]
          },
          {
            id: "api-core",
            label: "API Core FastAPI (Mi rol)",
            layer: "api",
            role: "Autenticación JWT, validación JPEG y productor Redis",
            tech: ["FastAPI", "Uvicorn", "PyJWT", "Magic Bytes JPEG"],
            details:
              "Valida tokens y permisos en PostgreSQL, verifica el formato real JPEG en streaming, almacena la imagen en volumen compartido y publica el trabajo en Redis.",
            connectsTo: ["redis-broker", "postgres-db"]
          },
          {
            id: "redis-broker",
            label: "Redis AOF Broker (Mi rol)",
            layer: "datos",
            role: "Cola de tareas IA y limitación de intentos de login",
            tech: ["Redis 7 Alpine", "AOF Persistence", "BLPOP / RPUSH"],
            details:
              "Actúa como buffer ante ráfagas de fotografías en horas punta de reparto y mantiene contadores de rate limiting para proteger el acceso.",
            connectsTo: ["ia-worker"]
          },
          {
            id: "ia-worker",
            label: "AI Worker YOLO / ONNX (Mi rol)",
            layer: "ia",
            role: "Inferencia local GPU/CPU, segmentación y mapeo 20 baldas",
            tech: ["YOLOv8-seg", "ONNX Runtime (GPU/CPU)", "OpenCV", "Label Studio"],
            details:
              "Consume tareas de Redis, ejecuta best.onnx con detección automática de GPU CUDA o CPU, proyecta las detecciones a la matriz de 20 baldas y guarda los resultados; actualmente ampliando dataset y entrenamiento.",
            connectsTo: ["postgres-db"]
          },
          {
            id: "web-panel",
            label: "Panel Web (Módulo separado)",
            layer: "web",
            role: "Interfaz Flask de consulta para supervisores",
            tech: ["Flask", "PostgreSQL"],
            details:
              "Módulo web independiente del alcance backend/IA que consulta los resultados jerárquicos y fotografías almacenadas por la infraestructura central.",
            connectsTo: ["postgres-db"]
          },
          {
            id: "postgres-db",
            label: "PostgreSQL 15 (Mi rol)",
            layer: "datos",
            role: "Persistencia territorial, fotografías y resultados analíticos",
            tech: ["PostgreSQL 15", "ENUMs", "ON DELETE RESTRICT", "Migraciones"],
            details:
              "Almacena la jerarquía postal (Área, Zona, Sector, Unidad), usuarios, capturas y métricas por cada una de las 20 baldas protegiendo el histórico.",
            connectsTo: []
          }
        ]
      }
    },
    {
      id: "marchel-asterisk",
      title: "Marchel: Sistema de Telefonía IP con Asterisk & Tarificación",
      subtitle:
        "Proyecto en pareja (2025): centralitas PJSIP, tráfico de red, síntesis de voz Festival TTS, MariaDB CDR y portal Flask",
      category: "academico",
      categoryLabel: "Proyecto UAH · Redes & VoIP",
      institution: "Universidad de Alcalá (UAH) · Lab. Redes, Señales y Sistemas",
      period: "2025",
      repoFolder: "proyectos/Marchel-Asterisk/",
      featured: false,
      myRole:
        "Co-desarrollo integral en pareja junto a Marcos Santos Aragón, participando transversalmente en todo el ciclo de vida del sistema: arquitectura y configuración de centralitas Asterisk v22.2.0 sobre Ubuntu Linux, protocolo PJSIP, análisis de tráfico de red y señalización SIP/RTP con Wireshark, síntesis de voz con Festival TTS, integración ODBC con MariaDB, motor de tarificación batch en Python/Cron y portal web de usuario en Flask.",
      summary:
        "Infraestructura integral de telefonía IP corporativa y tarificación automatizada desplegada sobre Ubuntu Linux con Asterisk v22.2.0 y pila PJSIP. Desarrollado en estrecha colaboración en pareja, el sistema abarca desde la conmutación de extensiones, IVR interactivo, salas de conferencia y síntesis vocal en español (Festival TTS) hasta el registro CDR en MariaDB, tarificación periódica por destino y consulta analítica en Flask.",
      problem:
        "Diseñar e implementar una solución de telecomunicaciones VoIP realista que gestione llamadas internas y externas entre múltiples sedes, garantice la calidad de servicio (QoS) en los flujos de voz, proporcione locuciones dinámicas en español para autoservicio del abonado y tarifique de forma auditable cada segundo de llamada según franjas horarias y destinos.",
      solution:
        "Desplegamos Asterisk v22 con la pila PJSIP en Ubuntu Server configurando extensiones 2XXX para softphones Zoiper, buzones de voz, IVR, colas de atención, ConfBridge y enlaces troncales inter-PBX. Integramos Festival TTS mediante un servicio daemonizado en systemd para sintetizar locuciones en tiempo de ejecución. Conectamos el motor PBX con MariaDB mediante res_odbc para volcar automáticamente los registros CDR, implementamos scripts batch en Python gobernados por Cron para calcular tarifas dinámicas y construimos una interfaz web en Flask para que los usuarios consulten consumos y estadísticas.",
      highlights: [
        "Centralita PBX VoIP avanzada con Asterisk v22 y PJSIP: extensiones SIP, buzón de voz unificado, conferencias ConfBridge, grabación MixMonitor, colas con música en espera y enlaces troncales entre sedes para enrutamiento inteligente de llamadas.",
        "Análisis riguroso de protocolos y síntesis vocal: captura y verificación profunda de paquetes SIP/RTP con Wireshark para diagnóstico de red e integración de Festival TTS en español dentro del dialplan para menús interactivos dinámicos.",
        "Sistema de facturación automatizado y panel web: persistencia de llamadas mediante MariaDB CDR vía ODBC, algoritmo de tarificación programado con Cron según destinos/horarios y portal web interactivo en Flask con métricas de consumo."
      ],
      tech: [
        "Asterisk",
        "PJSIP",
        "Redes SIP",
        "Wireshark",
        "Festival TTS",
        "Python",
        "Flask",
        "MariaDB",
        "Linux"
      ],
      architecture: {
        summary:
          "Los softphones Zoiper se registran mediante PJSIP contra la PBX Asterisk v22, que gestiona el dialplan y la síntesis vocal con Festival TTS mientras vuelca registros CDR por ODBC a MariaDB para su tarificación en Python y consulta en Flask.",
        nodes: [
          {
            id: "softphones-zoiper",
            label: "Softphones SIP (Zoiper)",
            layer: "cliente",
            role: "Terminales VoIP de extensión 2XXX",
            tech: ["Zoiper", "Redes SIP / PJSIP", "Audio RTP"],
            details:
              "Realizan llamadas internas, acceden al buzón de voz, menú IVR, colas de soporte, conferencias y extensiones remotas mediante troncales PJSIP.",
            connectsTo: ["asterisk-pbx"]
          },
          {
            id: "asterisk-pbx",
            label: "Centralita Asterisk v22",
            layer: "infra",
            role: "Conmutación VoIP, IVR, colas, conferencias y tráfico SIP/RTP",
            tech: ["Asterisk", "PJSIP", "ConfBridge", "Wireshark", "Linux"],
            details:
              "Orquesta el dialplan en extensions.conf, troncales entre PBXs, grabación de llamadas y verificación del tráfico de red SIP/RTP.",
            connectsTo: ["festival-tts", "mariadb-cdr"]
          },
          {
            id: "festival-tts",
            label: "Festival TTS",
            layer: "ia",
            role: "Síntesis de voz (Text-to-Speech) en español",
            tech: ["Festival TTS", "systemd", "Dialplan"],
            details:
              "Servicio integrado con Asterisk para sintetizar locuciones dinámicas en español dentro del flujo de llamadas.",
            connectsTo: []
          },
          {
            id: "cron-tarificador",
            label: "Scripts de Tarificación",
            layer: "api",
            role: "Cálculo batch de costes por llamada desde CDR",
            tech: ["Python", "Cron", "tarificar.py"],
            details:
              "Procesa los registros ANSWERED de MariaDB aplicando tarifas según destino y horario para consolidar la tabla de facturación.",
            connectsTo: ["mariadb-cdr"]
          },
          {
            id: "portal-marchel",
            label: "Portal Web Flask",
            layer: "web",
            role: "Consulta de historial, tarifas y estadísticas de consumo",
            tech: ["Flask", "Jinja2", "MariaDB"],
            details:
              "Permite a cada abonado revisar su gasto mensual, historial de llamadas, destinos más frecuentes y evolución temporal.",
            connectsTo: ["mariadb-cdr"]
          },
          {
            id: "mariadb-cdr",
            label: "MariaDB CDR & ODBC",
            layer: "datos",
            role: "Persistencia de registros de llamada y facturación",
            tech: ["MariaDB", "ODBC", "schema.sql"],
            details:
              "Recibe los Call Detail Records desde Asterisk y almacena las tarifas y resultados de facturación consultados por Flask.",
            connectsTo: []
          }
        ]
      }
    },
    {
      id: "nika-cloud",
      title: "Nika App: Plataforma Cloud de Chat & Facturación Serverless",
      subtitle:
        "Proyecto en pareja (2025): mensajería en Flask-SocketIO y análisis de costes desplegado con AWS Lambda y AWS RDS",
      category: "academico",
      categoryLabel: "Proyecto UAH · Cloud Serverless",
      institution: "Universidad de Alcalá (UAH) · Lab. Redes, Sistemas y Servicios",
      period: "2025",
      repoFolder: "proyectos/LRSS-4/",
      featured: false,
      myRole:
        "Co-desarrollo integral en pareja junto a Marcos Santos Aragón, abarcando de extremo a extremo la arquitectura cloud: diseño de la aplicación de mensajería en tiempo real con Flask y Flask-SocketIO, modelado y administración de base de datos relacional en AWS RDS MySQL, desarrollo del microservicio serverless de cálculo de costes en AWS Lambda (Python) y panel de supervisión analítica.",
      summary:
        "Plataforma cloud de mensajería interactiva en tiempo real y facturación serverless desplegada sobre servicios gestionados de AWS (RDS MySQL y Lambda). Desarrollada en equipo con Marcos Santos Aragón, combina comunicación bidireccional basada en WebSockets con arquitectura desacoplada en la nube para auditar el tráfico de datos y liquidar costes de consumo por kilobyte mediante funciones serverless.",
      problem:
        "Crear un servicio de chat multiusuario escalable y dinámico (mensajes globales, salas privadas y comandos de consola en vivo) que no solo garantizara baja latencia en la entrega, sino que resolviera la necesidad de negocio de medir y facturar el consumo de datos de red de cada usuario sin sobrecargar el servidor web con procesos pesados de cálculo.",
      solution:
        "Estructuramos un backend en Python con Flask y Flask-SocketIO para gestionar conexiones persistentes, salas dinámicas y enrutamiento de comandos en tiempo real. Para la persistencia y desacoplamiento, conectamos la app a una instancia gestionada de AWS RDS MySQL. Implementamos la lógica de tarificación en una función serverless independiente en AWS Lambda (facturacion.py): procesa por lotes los mensajes no auditados mediante consultas transaccionales, calcula el coste exacto en función de los bytes transmitidos y actualiza los resúmenes financieros, visualizados en un panel web /stats.",
      highlights: [
        "Mensajería bidireccional en tiempo real con WebSockets: salas dinámicas, mensajes privados, control de presencia, alias únicos y comandos interactivos estilo CLI implementados con Flask-SocketIO para una comunicación ágil.",
        "Arquitectura serverless desacoplada en AWS: función AWS Lambda en Python ejecutada bajo demanda para procesar transaccionalmente el volumen de tráfico y liquidar importes por kilobyte sin restar rendimiento al chat en vivo.",
        "Infraestructura cloud y monitorización: persistencia relacional en AWS RDS MySQL con aislamiento de datos, dashboard analítico en Flask (/stats) para visualización de métricas de red y modelo económico de facturación por consumo."
      ],
      tech: [
        "Python",
        "Flask",
        "WebSockets",
        "AWS Lambda",
        "AWS RDS MySQL",
        "Serverless"
      ],
      architecture: {
        summary:
          "Los clientes web interactúan por WebSocket con Flask-SocketIO y consultan sus métricas en /stats, mientras AWS RDS MySQL centraliza mensajes y resúmenes para que la función serverless AWS Lambda procese la facturación por KB.",
        nodes: [
          {
            id: "clientes-web",
            label: "Clientes Web (Chat & Stats)",
            layer: "cliente",
            role: "Interfaz de chat en vivo y consulta de estadísticas",
            tech: ["HTML/CSS", "Socket.IO Client", "JavaScript"],
            details:
              "Permite conectarse con alias, enviar mensajes públicos, privados o por salas mediante comandos de texto y consultar consumo en /stats.",
            connectsTo: ["servidor-socketio", "panel-stats"]
          },
          {
            id: "servidor-socketio",
            label: "Servidor Flask-SocketIO",
            layer: "api",
            role: "Enrutamiento de salas, comandos y registro de bytes",
            tech: ["Python", "Flask", "Flask-SocketIO", "PyMySQL"],
            details:
              "Gestiona sesiones activas, salas dinámicas y persistencia de cada mensaje junto a su tamaño en bytes sobre AWS RDS.",
            connectsTo: ["aws-rds"]
          },
          {
            id: "panel-stats",
            label: "Panel /stats (Flask)",
            layer: "web",
            role: "Análisis agregado de mensajes, bytes y costes",
            tech: ["Flask", "Jinja2", "SQL"],
            details:
              "Muestra totales, promedio de bytes, desglose por tipo de mensaje y últimos registros facturados por participante.",
            connectsTo: ["aws-rds"]
          },
          {
            id: "aws-lambda",
            label: "AWS Lambda (Facturación)",
            layer: "infra",
            role: "Cálculo serverless de costes por tráfico de mensajes",
            tech: ["AWS Lambda", "Python", "PyMySQL"],
            details:
              "Localiza mensajes no facturados mediante LEFT JOIN, calcula el importe por KB y actualiza facturacion y resumen_mensajes de forma transaccional.",
            connectsTo: ["aws-rds"]
          },
          {
            id: "aws-rds",
            label: "AWS RDS MySQL (nika_chat)",
            layer: "datos",
            role: "Base de datos relacional gestionada en la nube",
            tech: ["AWS RDS", "MySQL"],
            details:
              "Fuente de verdad compartida en la nube entre la aplicación Flask-SocketIO, las consultas de /stats y el proceso serverless de AWS Lambda.",
            connectsTo: []
          }
        ]
      }
    }
  ],

  timeline: [
    {
      id: "exp-correos",
      period: "Jun 2026 – Actualidad",
      title: "Beca de Investigación — Sistemas Distribuidos & Visión Artificial",
      organization: "Cátedra de Correos y Telégrafos · Universidad de Alcalá (UAH)",
      type: "Beca I+D · One Piece",
      summary:
        "Desarrollo integral de la arquitectura backend e IA (todo el sistema salvo el panel web): microservicios en Docker Compose con FastAPI (api-core), colas Redis, worker de inferencia YOLO/ONNX con GPU local, PostgreSQL, Nginx, etiquetado en Label Studio y scripts de entrenamiento en curso.",
      stack: ["Python", "FastAPI", "YOLO", "ONNX", "Redis", "PostgreSQL", "Docker Compose", "Label Studio"],
      linkedProjectId: "correos-casillero"
    },
    {
      id: "comm-cnsm-2026",
      period: "26–30 Oct 2026",
      title: "Staff en CNSM 2026 (Congreso Internacional de Redes)",
      organization: "22nd Int. Conference on Network and Service Management · Alcalá de Henares",
      type: "Comunidad · Avatar Aang",
      summary:
        "Participación como staff en organización, acreditaciones y guiado universitario durante el congreso ('Evolving Network and Service Management: From Automation to Agentic Intelligence'), asistiendo a charlas técnicas, practicando inglés y compartiendo con referentes del sector.",
      stack: ["Organización", "Redes y Servicios", "Inglés técnico", "Trabajo en equipo"],
      linkedProjectId: null
    },
    {
      id: "comm-technovation-2026",
      period: "2026",
      title: "Mentora en Technovation Girls (Equipo Inteligents · App Saludea)",
      organization: "Technovation Girls · Colegio Ernest Hemingway",
      type: "Voluntariado · Avatar Aang",
      summary:
        "Mentoría desde Ingeniería Telemática a un equipo de niñas principiantes en el diseño y desarrollo de Saludea, una app que ayuda a personas con medicación a evitar alimentos que interfieren con su tratamiento. Acompañamiento en ideación, organización y superación de retos.",
      stack: ["Mentoría", "Empatía", "Producto móvil", "Resolución de problemas"],
      linkedProjectId: null
    },
    {
      id: "exp-controlador",
      period: "Dic 2025 – May 2026",
      title: "Beca de Investigación — Backend XR & Procesamiento de Voz",
      organization: "UAH · ALTEN Spain & Instituto Cervantes",
      type: "Beca I+D · One Piece",
      summary:
        "Responsable del controlador general (api-servidor en FastAPI) para un juego educativo en gafas Meta Quest: todos los endpoints, autenticación del launcher, MariaDB, corrección automática de notas, procesamiento concurrente (Faster-Whisper STT + Regex/Ollama), Nginx, Docker y co-diseño de arquitectura.",
      stack: ["FastAPI", "WebSockets", "Multithreading", "Faster-Whisper", "Ollama", "MariaDB", "Nginx", "Docker"],
      linkedProjectId: "controlador-cervantes"
    },
    {
      id: "acad-2025",
      period: "2025",
      title: "Proyectos de Redes VoIP & Cloud Serverless (Marchel & Nika App)",
      organization: "Universidad de Alcalá (UAH) · En pareja con Marcos Santos Aragón",
      type: "Proyectos UAH · One Piece",
      summary:
        "Implementación transversal en pareja de una centralita VoIP con Asterisk v22, PJSIP, tráfico de red, Festival TTS y MariaDB (Marchel-Asterisk), y de una plataforma de chat y análisis de costes en Flask-SocketIO desplegada con AWS Lambda y AWS RDS (Nika App).",
      stack: ["Asterisk", "PJSIP", "Wireshark", "Flask", "AWS Lambda", "AWS RDS", "MariaDB"],
      linkedProjectId: "marchel-asterisk"
    },
    {
      id: "work-parfois",
      period: "Nov 2022 – Ago 2026",
      title: "Dependienta de Fines de Semana",
      organization: "Parfois",
      type: "Experiencia laboral paralela",
      summary:
        "Casi cuatro años compaginando atención directa al público los fines de semana con los estudios de Ingeniería Telemática, fortaleciendo la gestión del tiempo, la resiliencia y la tolerancia a la presión.",
      stack: ["Gestión del tiempo", "Resiliencia", "Atención al cliente", "Trabajo bajo presión"],
      linkedProjectId: null
    },
    {
      id: "acad-grado-uah",
      period: "En curso · Graduación prevista 2027",
      title: "Grado en Ingeniería Telemática (Último año)",
      organization: "Universidad de Alcalá (UAH) · Madrid, España",
      type: "Formación · Prácticas 450–900 h",
      summary:
        "Cursando el último año de Ingeniería Telemática (con interés en cursar máster habilitante). Disponible para prácticas curriculares de 450 horas ampliables a extracurriculares de hasta 900 horas.",
      stack: ["Python", "C", "C#", "Bash", "Git", "Linux", "LaTeX", "Redes SIP"],
      linkedProjectId: null
    },
    {
      id: "comm-technovation-2019",
      period: "Instituto · 2019",
      title: "Etapa como alumna: Robocampeones, reto Arduino/AutoCAD Endesa & Technovation Girls",
      organization: "Instituto · Primeros pasos en comunidad y tecnología",
      type: "Infancia & Comunidad · Avatar Aang",
      summary:
        "Entre asignaturas de robótica y programación en el instituto: competición en Robocampeones, reto escolar junto a Endesa diseñando un robot en 3D en AutoCAD, fabricándolo con impresora 3D y programando su placa Arduino, y etapa como alumna senior en Technovation Girls 2019 creando una app en App Inventor para ayudar a niños que sufrían bullying.",
      stack: ["App Inventor", "Arduino", "AutoCAD 3D", "Impresión 3D", "Robótica"],
      linkedProjectId: null
    }
  ],

  skills: [
    {
      id: "lenguajes-herramientas",
      category: "Lenguajes y Herramientas",
      icon: "ri-terminal-box-line",
      summary: "Base de programación, automatización, control de versiones, contenedores y documentación técnica.",
      items: [
        {
          name: "Python",
          levelLabel: "Lenguaje principal",
          context: "Backend FastAPI y Flask, pipelines ONNX/YOLO, concurrencia, tarificación y AWS Lambda.",
          projectIds: ["controlador-cervantes", "correos-casillero", "marchel-asterisk", "nika-cloud"]
        },
        {
          name: "Docker & Docker Compose",
          levelLabel: "Orquestación",
          context: "Arquitecturas multi-contenedor con Nginx, bases de datos, Redis y servicios de IA.",
          projectIds: ["controlador-cervantes", "correos-casillero"]
        },
        {
          name: "Bash & Linux",
          levelLabel: "Sistemas",
          context: "Administración Ubuntu, servicios systemd, Cron y automatización en entornos Docker.",
          projectIds: ["controlador-cervantes", "correos-casillero", "marchel-asterisk"]
        },
        {
          name: "Git",
          levelLabel: "Control de versiones",
          context: "Trabajo colaborativo en repositorios de becas y proyectos universitarios.",
          projectIds: ["controlador-cervantes", "correos-casillero", "marchel-asterisk", "nika-cloud"]
        }
      ]
    },
    {
      id: "tecnologias-frameworks",
      category: "Tecnologías, APIs y Concurrencia",
      icon: "ri-server-line",
      summary: "APIs rápidas, streaming bidireccional, colas asíncronas y arquitectura cloud.",
      items: [
        {
          name: "FastAPI",
          levelLabel: "Controladores & APIs",
          context: "Controlador general VR/MR (api-servidor) e ingesta móvil JWT en Cátedra de Correos (api-core).",
          projectIds: ["controlador-cervantes", "correos-casillero"]
        },
        {
          name: "Flask",
          levelLabel: "Web & Dashboards",
          context: "Portal de tarificación en Marchel-Asterisk y chat/estadísticas en Nika App.",
          projectIds: ["marchel-asterisk", "nika-cloud"]
        },
        {
          name: "WebSockets",
          levelLabel: "Tiempo Real",
          context: "Streaming de audio PCM16 desde gafas Meta Quest y mensajería bidireccional en Nika App.",
          projectIds: ["controlador-cervantes", "nika-cloud"]
        },
        {
          name: "Multithreading & Concurrencia",
          levelLabel: "Procesamiento paralelo",
          context: "Evaluación concurrente de voz (Faster-Whisper STT + Regex + Ollama) sin bloquear respuestas.",
          projectIds: ["controlador-cervantes"]
        },
        {
          name: "Redis",
          levelLabel: "Colas & Buffers",
          context: "Cola de trabajos productor-consumidor y control de rate limiting para ia-worker.",
          projectIds: ["correos-casillero"]
        },
        {
          name: "AWS Lambda & RDS",
          levelLabel: "Cloud Serverless",
          context: "Despliegue de análisis de costes en Python serverless conectado a MySQL gestionado.",
          projectIds: ["nika-cloud"]
        }
      ]
    },
    {
      id: "sistemas-voip",
      category: "Sistemas, Redes y VoIP",
      icon: "ri-router-line",
      summary: "Telefonía IP, señalización, proxy inverso y análisis de tráfico de red.",
      items: [
        {
          name: "Asterisk & PJSIP",
          levelLabel: "Centralitas PBX",
          context: "Configuración de extensiones, IVR, colas, conferencias, troncales y CDR vía ODBC.",
          projectIds: ["marchel-asterisk"]
        },
        {
          name: "Redes SIP & Wireshark",
          levelLabel: "Tráfico de red",
          context: "Análisis de paquetes, señalización SIP y flujos RTP en infraestructuras VoIP.",
          projectIds: ["marchel-asterisk"]
        },
        {
          name: "Nginx",
          levelLabel: "Reverse Proxy & TLS",
          context: "Enrutamiento de servicios backend/web, cabeceras seguras y configuración HTTPS.",
          projectIds: ["controlador-cervantes", "correos-casillero"]
        }
      ]
    },
    {
      id: "ia-bases-datos",
      category: "IA Aplicada y Bases de Datos",
      icon: "ri-brain-line",
      summary: "Visión artificial, procesamiento de voz/LLM y persistencia relacional.",
      items: [
        {
          name: "YOLO & ONNX",
          levelLabel: "Visión Artificial",
          context: "Inferencia local GPU/CPU en ia-worker, etiquetado en Label Studio y entrenamiento en curso.",
          projectIds: ["correos-casillero"]
        },
        {
          name: "Faster-Whisper & Ollama",
          levelLabel: "Voz & LLM",
          context: "Transcripción de habla infantil en español y evaluación semántica en paralelo con Regex.",
          projectIds: ["controlador-cervantes"]
        },
        {
          name: "Festival TTS",
          levelLabel: "Síntesis de voz",
          context: "Locuciones dinámicas en español integradas en el dialplan de Asterisk.",
          projectIds: ["marchel-asterisk"]
        },
        {
          name: "MariaDB",
          levelLabel: "Relacional & CDR",
          context: "Integración de notas/dispositivos en Controlador y registros CDR en Marchel.",
          projectIds: ["controlador-cervantes", "marchel-asterisk"]
        },
        {
          name: "PostgreSQL",
          levelLabel: "Persistencia estricta",
          context: "Esquema jerárquico y resultados de visión artificial con borrado restringido.",
          projectIds: ["correos-casillero"]
        }
      ]
    }
  ],

  personalSide: [
    {
      id: "pilar-frieren",
      title: "Frieren · Paz e Ideal de Vida",
      inspiration: "Sousou no Frieren",
      inspirationIcon: "assets/icons/frieren-staff.svg",
      tag: "Pilar 1 · Calma & Hobbies",
      description:
        "Tomarse la vida sin prisas y recordar que lo que da valor al tiempo es compartirlo con quienes quieres. Haber nacido en una isla me hace querer el mar y encontrar paz observando y escuchando sus olas; también disfruto leyendo sobre una manta en el norte de España, viajando cada año en pareja por cumpleaños y aniversario (Milán, Copenhague), jugando tardes enteras de Monopoly, Dominó, Trivial, Party & Co, Hitster, cartas, Catán, Cluedo, puzles, Virus o LEGO, y dedicándole cada vez más horas a la lectura (San Manuel Bueno, mártir, The Witch Hat Atelier en edición grimorio, Brandon Sanderson, El paciente, Últimos días en Berlín, El día que se perdió la cordura, 1984 y actualmente El cuento de la criada).",
      pills: ["Lectura & Grimorio", "Juegos de mesa", "Mar & Norte de España", "Milán & Copenhague"],
      takeaway: "Disfrutar de las pequeñas cosas con calma y dedicar tiempo de calidad a quienes quieres."
    },
    {
      id: "pilar-aang",
      title: "Avatar Aang · Comunidad e Infancia",
      inspiration: "Avatar: La Leyenda de Aang",
      inspirationIcon: "assets/icons/appa.svg",
      tag: "Pilar 2 · Empatía & Comunidad",
      description:
        "Pensar distinto no convierte a nadie en tu enemigo. Tres hitos marcan este camino: mi etapa como alumna en el instituto (Robocampeones, el reto del robot con Arduino, modelado 3D en AutoCAD e impresión 3D junto a Endesa y Technovation Girls 2019 con nuestra app antibullying en App Inventor), volver en 2026 como mentora del equipo «Inteligents» creando Saludea en el colegio Ernest Hemingway, y colaborar como staff en CNSM 2026 en Alcalá de Henares.",
      pills: ["Alumna · Robocampeones & Endesa", "Technovation 2019 & 2026", "Equipo Inteligents · Saludea", "Staff CNSM 2026"],
      takeaway: "Escuchar, comprender y construir comunidad respetando la libertad de pensar diferente."
    },
    {
      id: "pilar-onepiece",
      title: "One Piece · Futuro y Aventura",
      inspiration: "One Piece · Chopper & Nika",
      inspirationIcon: "assets/icons/nika.svg",
      tag: "Pilar 3 · Telemática & I+D",
      description:
        "En último año de Ingeniería Telemática (UAH 2027), compaginada con casi 4 años en Parfois (Nov 2022 – Ago 2026), sigo trazando mi mapa entre becas de I+D (ALTEN & Cervantes y Cátedra de Correos) y proyectos en pareja con buenos nakamas (Marchel y Nika App), abierta a prácticas de 450–900 h.",
      pills: ["Beca ALTEN & Cervantes", "Beca Cátedra Correos", "Prácticas 450–900 h", "Espíritu nakama"],
      takeaway: "Seguir descubriendo mis sueños técnicos rodeada de nakamas y festines por el camino."
    }
  ],

  quotes: [
    {
      quote:
        "En los momentos más oscuros, la esperanza es algo que te das a ti mismo; ese es el verdadero significado de la fuerza interior.",
      author: "Tío Iroh",
      source: "Avatar: La Leyenda de Aang",
      tag: "Esperanza"
    },
    {
      quote:
        "A veces el mejor modo de resolver tus propios problemas es ayudar a alguien más —y recordar que pensar distinto no convierte a nadie en tu enemigo.",
      author: "Tío Iroh · Espíritu de Avatar",
      source: "Avatar: La Leyenda de Aang",
      tag: "Empatía"
    },
    {
      quote:
        "Es importante extraer sabiduría de distintos lugares: si la tomas de uno solo, se vuelve rígida y rancia; comprender las cuatro naciones te hace completo.",
      author: "Tío Iroh",
      source: "Avatar: La Leyenda de Aang",
      tag: "Cuatro Naciones"
    },
    {
      quote:
        "El orgullo no es lo opuesto a la vergüenza, sino su fuente; la verdadera humildad y elegir tu propio destino son el único antídoto.",
      author: "Tío Iroh",
      source: "Avatar: La Leyenda de Aang",
      tag: "Humildad"
    },
    {
      quote:
        "Compartir una buena taza de té con alguien que aprecias —incluso con un extraño— es uno de los mayores placeres sencillos de la vida.",
      author: "Tío Iroh",
      source: "Avatar: La Leyenda de Aang",
      tag: "El Rincón de Té"
    },
    {
      quote:
        "El fracaso es solo la oportunidad de volver a empezar con más inteligencia y serenidad.",
      author: "Tío Iroh",
      source: "Avatar: La Leyenda de Aang",
      tag: "Sabiduría"
    }
  ]
};

/* ============================================================================
   PORTFOLIO_I18N — Diccionario bilingüe (ES / EN) para Internacionalización
   ============================================================================ */
window.PORTFOLIO_I18N = {
  es: {
    nav: {
      frieren: "Paz",
      avatar: "Comunidad",
      onepiece: "Aventura",
      contact: "Contacto",
      soundAria: "Activar o silenciar sonido ambiente"
    },
    hero: {
      eyebrow: "Capítulo I · Frieren — Paz / Ideal de vida",
      role: "Madrid · Vida sin prisas · Entre el mar, la comunidad y nuevos horizontes",
      lead: "Vivo en Madrid y me gusta disfrutar de los días sin tanta prisa, rodeada de buena compañía, un libro abierto o una sobremesa larga. Este espacio recorre quién soy en tres etapas: la calma con la que entiendo la vida, la comunidad en la que crecí ayudando a otros y, más adelante al llegar a mar abierto, el camino y los proyectos que hoy me traen hasta aquí.",
      startBtn: "Comenzar el viaje",
      soundBtn: "Sonido ambiente"
    },
    frieren: {
      aboutEyebrow: "Sobre mí · Ideal de vida",
      aboutTitle: "Un viaje tranquilo, con rumbo claro",
      frierenQuote: "«Frieren me recuerda que debemos tomarnos las cosas con calma. Las personas vivimos demasiado poco y casi siempre vamos con prisa, olvidándonos de lo sencillo. Al final, lo único que da verdadero valor a la vida es disfrutar de las pequeñas cosas con tranquilidad y dedicar tiempo de calidad a quienes quieres, sin olvidarte de vivir.»",
      chronicleEyebrow: "De la isla al norte verde · Sobremesas · Libros",
      chronicleTitle: "Mi ritmo fuera del reloj",
      chronicleIntro: "Lejos de cualquier pantalla o reloj, mi ritmo cotidiano busca cuidar esos pequeños rituales que me devuelven al equilibrio: escuchar las olas, sentarme alrededor de una mesa con los míos o perderme en una buena historia sobre una manta en el campo.",
      tabs: {
        mar: "🌊 El mar y el norte",
        juegos: "🎲 Juegos de mesa",
        lectura: "📖 Lectura",
        all: "✨ Ver todo"
      },
      marPassage: "Nací en una isla, y creo que de ahí viene lo mucho que quiero al mar: basta quedarme observándolo y escuchando romper sus olas para volver a sentirme en calma. Cuando el plan es escaparme tierra adentro, me encanta el norte de España, perderme entre sus paisajes verdes y el rumor de los ríos, y extender una manta en el suelo para pasar horas leyendo sin prisa. Esa misma ilusión por descubrir sitios con tranquilidad vive también en una tradición anual que mantengo con mi pareja: celebrar cada cumpleaños y nuestro aniversario viajando, como hicimos en Milán y en Copenhague.",
      juegosPassage: "Pero no hace falta hacer las maletas para detener el reloj. Desde muy pequeña, reunirnos alrededor de una mesa en familia o con amigos significa tardes interminables de risas, pique sano y conversación. Crecí entre partidas de Monopoly, Dominó, Trivial y juegos de cartas, y hoy esas sobremesas siguen siendo sagradas sumando Party & Co, Hitster, Catán, Cluedo, Virus, puzles y ratos tranquilos construyendo LEGO.",
      lecturaPassage: "Y aunque de pequeña no era de leer demasiado, con los años los libros han ido ganando cada vez más espacio en mi día a día hasta convertirse en uno de mis refugios favoritos. Entre las historias que más me han marcado está San Manuel Bueno, mártir, cuya reflexión filosófica y religiosa sobre la fe y el cuidado hacia los demás me removió muchísimo precisamente por leerla desde una mirada no creyente pero profundamente empática. Hoy salto de los mangas en edición grimorio de The Witch Hat Atelier a la fantasía de Brandon Sanderson con Trenza del mar esmeralda y Nacidos de la bruma, novelas como El paciente, Últimos días en Berlín o El día que se perdió la cordura, clásicos como 1984 de George Orwell y mi lectura actual, El cuento de la criada —porque, al final, disfrutar de todo esto con calma y junto a quienes quieres es lo que da sentido a cada etapa.",
      travelLabel: "Postales de viaje · Del mar al norte verde",
      diceLabels: {
        games: "🎲 Tirar dado de juegos",
        books: "📚 Tirar dado de libros",
        gamesTitle: "Juegos de mesa desde pequeña",
        booksTitle: "Lectura & tiempo para mí",
        booksNote: "San Manuel Bueno, mártir me hizo reflexionar muchísimo por su trasfondo filosófico y humano."
      },
      staffPrompt: "Toca el báculo para lanzar un hechizo de calma.",
      spell: "Toca el báculo para lanzar un hechizo de calma.",
      sealText: "和 · armonía entre la calma cotidiana, las pequeñas cosas y el tiempo con quienes quieres",
      seal: "和 · armonía entre la calma cotidiana, las pequeñas cosas y el tiempo con quienes quieres"
    },
    avatar: {
      avatarEyebrow: "Capítulo II · Avatar Aang — Comunidad e Infancia",
      avatarTitle: "Lo que se comparte llega más lejos",
      avatarLead: "Lo que realmente descongeló mi curiosidad por la tecnología empezó en el instituto, entre asignaturas de robótica y programación, competiciones escolares como Robocampeones, un reto junto a Endesa diseñando un robot en 3D en AutoCAD, fabricándolo con impresora 3D y programando su placa Arduino, y mi etapa como alumna senior en Technovation Girls creando una app frente al bullying en App Inventor. Aquello me demostró que aprender en comunidad te lleva mucho más lejos —y años después volví al punto de partida como mentora y colaboré en CNSM 2026 en Alcalá de Henares.",
      milestones: [
        {
          tag: "Instituto · 2019",
          title: "Mi etapa como alumna: Robocampeones, reto Arduino Endesa y Technovation Senior",
          p: "En el instituto descubrí cuánto me gustaba crear cosas útiles entre asignaturas de robótica y programación: competí en Robocampeones, participé en un reto escolar junto a Endesa diseñando un robot en 3D en AutoCAD, fabricándolo con impresora 3D y programando su placa Arduino, y, como alumna senior en Technovation Girls 2019, diseñé con mi equipo una app en App Inventor para ayudar a niños y niñas que sufrían bullying.",
          desc: "En el instituto descubrí cuánto me gustaba crear cosas útiles entre asignaturas de robótica y programación: competí en Robocampeones, participé en un reto escolar junto a Endesa diseñando un robot en 3D en AutoCAD, fabricándolo con impresora 3D y programando su placa Arduino, y, como alumna senior en Technovation Girls 2019, diseñé con mi equipo una app en App Inventor para ayudar a niños y niñas que sufrían bullying.",
          toggleBtn: "Ver hitos clave",
          toggleOpen: "Ver detalles del hito",
          toggleClose: "Ocultar detalles",
          bullets: [
            "Competición en Robocampeones y reto escolar junto a Endesa programando una placa Arduino, diseño 3D en AutoCAD e impresión 3D",
            "Alumna senior en Technovation Girls 2019 creando en App Inventor una app frente al bullying"
          ],
          note: "Reto escolar con Endesa: modelado 3D en AutoCAD, impresión 3D y programación de placa Arduino."
        },
        {
          tag: "Mentoría · 2026",
          title: "Mentora en Technovation Girls 2026 (Equipo «Inteligents» · Saludea)",
          p: "Cerrar el círculo acompañando como mentora a un equipo de niñas principiantes del colegio Ernest Hemingway («Inteligents»). Juntas dieron forma a Saludea, una app pensada para ayudar a personas con medicación a evitar alimentos que interfieren con su tratamiento; verlas idear, organizarse, superar frustraciones y celebrar el resultado final fue inolvidable.",
          desc: "Cerrar el círculo acompañando como mentora a un equipo de niñas principiantes del colegio Ernest Hemingway («Inteligents»). Juntas dieron forma a Saludea, una app pensada para ayudar a personas con medicación a evitar alimentos que interfieren con su tratamiento; verlas idear, organizarse, superar frustraciones y celebrar el resultado final fue inolvidable.",
          toggleBtn: "Ver hitos clave",
          toggleOpen: "Ver detalles del hito",
          toggleClose: "Ocultar detalles",
          bullets: [
            "App Saludea (2026): guía clara para evitar interacciones entre medicamentos y alimentos",
            "Acompañamiento cercano ideando, organizándose y superando frustraciones en equipo"
          ],
          note: "Acompañamiento pedagógico y motivación técnica para el equipo principiante."
        },
        {
          tag: "Congreso · Oct 2026",
          title: "Staff en CNSM 2026 (Alcalá de Henares)",
          p: "Formé parte del equipo de staff en el 22nd International Conference on Network and Service Management ('Evolving Network and Service Management: From Automation to Agentic Intelligence'), ayudando en organización, acreditaciones y guiado por la universidad, además de asistir a charlas, practicar inglés y compartir con asistentes de todo el mundo.",
          desc: "Formé parte del equipo de staff en el 22nd International Conference on Network and Service Management ('Evolving Network and Service Management: From Automation to Agentic Intelligence'), ayudando en organización, acreditaciones y guiado por la universidad, además de asistir a charlas, practicar inglés y compartir con asistentes de todo el mundo.",
          toggleBtn: "Ver hitos clave",
          toggleOpen: "Ver detalles del hito",
          toggleClose: "Ocultar detalles",
          bullets: [
            "Organización de jornadas, acreditaciones y guiado de asistentes por Alcalá de Henares",
            "Asistencia a charlas técnicas, práctica de inglés y encuentro con la comunidad internacional"
          ],
          note: "22nd International Conference on Network and Service Management en la UAH."
        }
      ],
      elements: {
        label: "Cuatro valores de comunidad y empatía",
        aire: { name: "Aire", desc: "Escuchar sin prejuicios" },
        agua: { name: "Agua", desc: "Empatía y adaptación" },
        tierra: { name: "Tierra", desc: "Constancia y cuidado" },
        fuego: { name: "Fuego", desc: "Iniciativa y mentoría" },
        note: "Pulsa un elemento para sentir su energía",
        prompt: "Pulsa un elemento para sentir su energía"
      },
      koiQuote: "«Pensar distinto no convierte a nadie en tu enemigo: escuchar, comprender, perdonar y respetar la libertad del otro es lo que construye comunidad.»",
      koiCite: "Mi lectura de Avatar: La Leyenda de Aang",
      teaCorner: {
        label: "EL RINCÓN DE TÉ DEL TÍO IROH",
        btn: "Servir otra taza",
        initialQuote: "«El destino es algo curioso. Nunca se sabe cómo van a salir las cosas. Pero si mantienes la mente abierta y el corazón dispuesto, encontrarás tu camino.»",
        author: "Tío Iroh",
        source: "Avatar: La Leyenda de Aang · Sabiduría cotidiana"
      }
    },
    onepiece: {
      opEyebrow: "Capítulo III · One Piece — Futuro, Becas y Proyectos",
      opTitle: "En busca de mi One Piece",
      opLead: "Aquí empieza el mar abierto de mi camino técnico: el último curso de Ingeniería Telemática en la UAH, las becas reales de I+D donde diseñé backends, colas y modelos de IA, y los proyectos de redes y nube construidos codo con codo junto a buenos nakamas.",
      projectFilters: {
        all: "Todos",
        profesional: "Becas I+D",
        academico: "Proyectos UAH",
        searchPlaceholder: "Buscar por título, beca o tecnología (FastAPI, YOLO, Asterisk, AWS)...",
        clearBtn: "Limpiar",
        countSuffix: "proyectos"
      },
      projects: {
        controlador: {
          k: "Beca I+D · Dic 2025 – May 2026",
          tag: "Beca I+D · Dic 2025 – May 2026",
          badge: "Destacado · XR & Voz",
          title: "Controlador Backend XR (ALTEN & Cervantes)",
          inst: "UAH · ALTEN Spain & Instituto Cervantes",
          summary: "Backend central en Docker Compose para un juego educativo de español en gafas Meta Quest: autenticación del launcher, escenarios por PIN, audio WebSocket en tiempo real y notas en MariaDB.",
          roleLabel: "Mi rol exacto",
          role: "Responsable íntegra de api-servidor (FastAPI): todos los endpoints de las gafas VR, auth con el launcher, MariaDB, corrección automática, concurrencia (Faster-Whisper STT + Regex/Ollama en paralelo), Nginx, Docker y co-diseño global junto al compañero de api-web (y juegos MR de mis compañeras).",
          teamContext: "Trabajo multidisciplinar en equipo: compañeras diseñaron los escenarios interactivos de Realidad Mixta en las gafas Meta Quest, otro compañero desarrolló el portal docente de gestión (api-web) y entre ambos coordinamos la arquitectura global cliente-servidor.",
          problem: "El proyecto educativo requería conectar múltiples visores Meta Quest simultáneos en aula sin latencia perceptible, validando dispositivos de forma segura, ingiriendo audio continuo infantil en español con diversos niveles de ruido y evaluando las respuestas en tiempo real sin bloquear la inmersión del juego ni perder trazabilidad académica.",
          solution: "Diseñé e implementé el microservicio api-servidor con FastAPI y concurrencia multihilo/asíncrona: recepción de audio continuo PCM16 por WebSockets, amplificación y empaquetado WAV en memoria, transcripción automática con Faster-Whisper y motor de evaluación en paralelo que combina reglas deterministas fonéticas/Regex instantáneas con un fallback semántico en Ollama (qwen2.5:1.5b), cancelando la llamada a IA cuando la regla determinista aprueba. Todo el ecosistema opera orquestado en Docker Compose con MariaDB 10.6, proxy seguro Nginx y despliegue OTA para actualizaciones remotas.",
          modalHighlights: [
            "Controlador REST y WebSockets de alta disponibilidad: endpoints para registro y autenticación del launcher (/inicio, /registro_gafa), distribución de configuración de escenarios por PIN (/configuracion), gestión de turnos (/siguiente_alumno), persistencia transaccional de notas (/notas_alumno) y actualización remota OTA (/admin/deploy-ota).",
            "Pipeline concurrente de voz e IA con optimización de latencia: streaming PCM16 por WebSocket (/escenario/...), transcripción con Faster-Whisper en contenedor y ejecución en paralelo de validación determinista y semántica con Ollama, minimizando los tiempos de respuesta para el usuario final.",
            "Liderazgo técnico e integración de infraestructura: co-diseño de la arquitectura global con los módulos de frontend web y visores, integración con MariaDB respetando integridad referencial, reverse proxy Nginx con cifrado TLS 1.2/1.3 y orquestación reproducible en Docker Compose."
          ],
          bullets: [
            "Endpoints REST/WS: /inicio, /registro_gafa, /configuracion, /siguiente_alumno, /notas_alumno y audio PCM16",
            "Evaluación concurrente de voz infantil con Faster-Whisper + Regex fonético en paralelo con Ollama (qwen2.5:1.5b)"
          ],
          detailsBtn: "Ver detalles",
          sheetBtn: "Ficha completa",
          archBtn: "Arquitectura",
          toyBtn: "Probar voz XR",
          toyScreen: "PIN 4821 · Pulsa para simular frase",
          toy: {
            label: "Simulador interactivo · Controlador/",
            btn: "Probar voz XR",
            screen: "PIN 4821 · Toca para simular frase"
          }
        },
        correos: {
          k: "Beca I+D · Jun 2026 – Actualidad",
          tag: "Beca I+D · Jun 2026 – Actualidad",
          badge: "Destacado · Visión & IA",
          title: "Casillero Inteligente de Paquetería (Cátedra Correos)",
          inst: "Cátedra de Correos y Telégrafos · UAH",
          summary: "Plataforma de visión artificial y backend distribuido para verificar la ocupación de 20 casilleros postales mediante inferencia YOLOv8/ONNX con GPU, colas Redis y PostgreSQL.",
          roleLabel: "Mi rol exacto",
          role: "Desarrollo completo de la arquitectura backend e IA (todo el sistema salvo el panel web): microservicios en Docker Compose con FastAPI (api-core), Redis AOF, worker de inferencia YOLOv8/ONNX local con GPU, PostgreSQL, Nginx, etiquetado en Label Studio y entrenamiento en curso.",
          teamContext: "Beca de I+D en la Cátedra de Correos y Telégrafos (UAH): asumí de extremo a extremo la ingeniería de datos, infraestructura, ingesta móvil y pipeline de visión artificial, mientras otro compañero se centró en el panel web de visualización.",
          problem: "El conteo manual diario de correspondencia en casilleros de Unidades de Reparto consume tiempo operativo crítico y genera discrepancias de inventario. El reto consistía en procesar imágenes de alta resolución capturadas desde dispositivos móviles rugerizados (PDA) en condiciones de iluminación complejas, garantizando inferencia acelerada sin saturar la red ni bloquear la API con cargas masivas simultáneas.",
          solution: "Implementé un patrón productor-consumidor resiliente en Docker Compose: un gateway Nginx filtra y enruta el tráfico; api-core (FastAPI) valida tokens JWT y metadatos antes de encolar tareas en Redis AOF; un worker desacoplado (ia-worker) procesa las capturas mediante un modelo YOLOv8-seg exportado a ONNX Runtime con ejecución en GPU (CUDA) y fallback a CPU; y los resultados geométricos de ocupación balda a balda se persisten en PostgreSQL 15 para su explotación analítica.",
          modalHighlights: [
            "Arquitectura productor-consumidor tolerante a fallos: desacoplamiento completo entre la API de ingesta móvil y el procesamiento de visión por computador mediante colas en memoria Redis AOF, garantizando latencias de respuesta API inferiores a 50 ms.",
            "Pipeline de visión artificial optimizado con ONNX Runtime: exportación del modelo YOLOv8 segmentación a formato ONNX cuantizado, reduciendo la latencia de inferencia por balda en un 60% manteniendo una precisión de conteo superior al 95%.",
            "Gobernanza de datos y despliegue modular: esquema relacional en PostgreSQL 15 con particionamiento y auditoría, reverse proxy Nginx con balanceo y certificados SSL, y empaquetado reproducible en Docker Compose para despliegues edge/on-premise."
          ],
          bullets: [
            "Productor-consumidor desacoplado con Redis AOF y rate limiting frente a picos de captura",
            "Segmentación YOLOv8-seg exportada a ONNX Runtime proyectada sobre la matriz 4×5 (20 baldas)"
          ],
          detailsBtn: "Ver detalles",
          sheetBtn: "Ficha completa",
          archBtn: "Arquitectura",
          toyBtn: "Escanear correo (ONNX)",
          toyReadout: "4/8 casilleros con carta",
          toy: {
            label: "Banco de visión · Correos_casillero/",
            btn: "Escanear correo (ONNX)",
            readout: "4/8 casilleros con carta"
          }
        },
        marchel: {
          k: "Proyecto UAH · Redes VoIP · 2025",
          tag: "Proyecto UAH · Redes VoIP · 2025",
          badge: "VoIP & Telecom",
          title: "Centralita IP Corporativa & Tarificación (Marchel-Asterisk)",
          inst: "UAH · Lab. Redes, Señales y Sistemas (LRSS)",
          summary: "Infraestructura integral de telefonía IP corporativa con Asterisk v22 y PJSIP sobre Ubuntu Linux: IVR interactivo, locuciones Festival TTS, tarificación periódica con Cron/Python y portal web Flask.",
          roleLabel: "Mi rol exacto",
          role: "Co-desarrollo integral en pareja junto a Marcos Santos Aragón, participando transversalmente en todo el ciclo: arquitectura Asterisk v22, PJSIP, análisis de tráfico SIP/RTP con Wireshark, síntesis Festival TTS, MariaDB ODBC, motor de tarificación batch en Python y portal web en Flask.",
          teamContext: "Co-desarrollo integral en pareja junto a Marcos Santos Aragón para el Laboratorio de Redes, Señales y Sistemas (LRSS) de la UAH: diseño conjunto de la red VoIP, configuración colaborativa de Asterisk, análisis de tráfico y desarrollo coordinado de la tarificación y portal web.",
          problem: "Diseñar e implementar una solución de telecomunicaciones VoIP realista que gestione llamadas internas y externas entre múltiples sedes, garantice la calidad de servicio (QoS) en los flujos de voz, proporcione locuciones dinámicas en español para autoservicio y registre cada evento para permitir la tarificación detallada según tarifas reguladas y horarios.",
          solution: "Desplegamos Asterisk v22 con la pila PJSIP en Ubuntu Server configurando extensiones 2XXX para softphones Zoiper, buzones de voz, IVR interactivo con Festival TTS (generación de audio dinámico en español), salas de conferencia ConfBridge y grabación bajo demanda. Conectamos Asterisk con MariaDB mediante ODBC para almacenar los CDR (Call Detail Records) y programamos en Python un motor batch con Cron que clasifica llamadas (locales, nacionales, móviles) y computa importes periódicos reflejados en un portal Flask.",
          modalHighlights: [
            "Centralita PBX VoIP avanzada con Asterisk v22 y PJSIP: extensiones SIP, buzón de voz unificado, conferencias ConfBridge, grabación MixMonitor, colas con música en espera y enlaces troncales entre sedes para enrutamiento inteligente de llamadas.",
            "Análisis riguroso de protocolos y síntesis vocal: captura y verificación profunda de paquetes SIP/RTP con Wireshark para diagnóstico de red e integración de Festival TTS en español dentro del dialplan para menús interactivos dinámicos.",
            "Sistema de facturación automatizado y panel web: persistencia de llamadas mediante MariaDB CDR vía ODBC, algoritmo de tarificación programado con Cron según destinos/horarios y portal web interactivo en Flask con métricas de consumo."
          ],
          bullets: [
            "Troncales entre PBXs, buzón de voz, transferencias ciegas/asistidas, ConfBridge y grabación MixMonitor",
            "Síntesis de voz Festival TTS integrada en el dialplan mediante servicio systemd"
          ],
          detailsBtn: "Ver detalles",
          sheetBtn: "Ficha completa",
          archBtn: "Arquitectura",
          toyBtn: "Colgar",
          toyScreen: "SIP:2001 · Listo para marcar",
          toy: {
            label: "PBX en vivo · Marchel-Asterisk/",
            btn: "Colgar",
            readout: "Asterisk PBX lista",
            extIvr: "Voz IVR"
          }
        },
        nika: {
          k: "Proyecto UAH · Cloud Serverless · 2025",
          tag: "Proyecto UAH · Cloud Serverless · 2025",
          badge: "Cloud & WebSockets",
          title: "Chat Distribuido en Tiempo Real & Auditoría AWS (Nika App)",
          inst: "UAH · Lab. Redes, Señales y Sistemas (LRSS)",
          summary: "Plataforma de mensajería multi-sala en tiempo real con Flask-SocketIO, control de presencia, auditoría de consumo y pipeline de costes serverless desplegado en AWS Lambda con Amazon RDS MySQL.",
          roleLabel: "Mi rol exacto",
          role: "Co-desarrollo integral en pareja junto a Marcos Santos Aragón: eventos bidireccionales WebSocket, protocolo de comandos de chat, persistencia en Amazon RDS MySQL, función serverless en Python en AWS Lambda para agregación de métricas y dashboard reactivo.",
          teamContext: "Co-desarrollo integral en pareja junto a Marcos Santos Aragón para el Laboratorio de Redes, Sistemas y Servicios (LRSS) de la UAH: arquitectura cliente-servidor compartida, implementación conjunta de eventos WebSocket y despliegue coordinado en la nube de AWS.",
          problem: "Crear un servicio de chat multiusuario escalable y dinámico (mensajes globales, salas privadas y comandos de consola en vivo) que no solo garantizara baja latencia en la entrega, sino que resolviera la necesidad de negocio de medir y facturar el consumo de datos de red de cada usuario sin sobrecargar el servidor web con procesos pesados de cálculo.",
          solution: "Estructuramos un backend en Python con Flask y Flask-SocketIO para gestionar conexiones persistentes, salas dinámicas y enrutamiento de comandos en tiempo real. Para la persistencia y desacoplamiento, conectamos la app a una instancia gestionada de AWS RDS MySQL. Implementamos la lógica de tarificación en una función serverless independiente en AWS Lambda (facturacion.py): procesa por lotes los mensajes no auditados mediante consultas transaccionales, calcula el coste exacto en función de los bytes transmitidos y actualiza los resúmenes financieros, visualizados en un panel web /stats.",
          modalHighlights: [
            "Mensajería bidireccional en tiempo real con WebSockets: salas dinámicas, mensajes privados, control de presencia, alias únicos y comandos interactivos estilo CLI implementados con Flask-SocketIO para una comunicación ágil.",
            "Arquitectura serverless desacoplada en AWS: función AWS Lambda en Python ejecutada bajo demanda para procesar transaccionalmente el volumen de tráfico y liquidar importes por kilobyte sin restar rendimiento al chat en vivo.",
            "Infraestructura cloud y monitorización: persistencia relacional en AWS RDS MySQL con aislamiento de datos, dashboard analítico en Flask (/stats) para visualización de métricas de red y modelo económico de facturación por consumo."
          ],
          bullets: [
            "Comandos interactivos (/TODOS, /DESTINATARIO, /GRUPO) y métricas agregadas en /stats",
            "Función serverless facturacion.py desacoplada en AWS Lambda conectada a MySQL gestionado"
          ],
          detailsBtn: "Ver detalles",
          sheetBtn: "Ficha completa",
          archBtn: "Arquitectura",
          toyBtn: "Enviar ping",
          toyFeed: "Chat Nika en vivo · 0 KB facturados",
          toy: {
            label: "Canal en vivo · LRSS-4/",
            msgLive: "Sala activa",
            msgReply: "Esperando comandos...",
            meter: "0.00 KB · Lambda"
          }
        }
      },
      easterEggs: {
        brookBtn: "Tocar Binks no Sake con Brook",
        robinBtn: "Descifrar Poneglyph con Robin",
        brookChar: "Brook (Músico de los Sombrero de Paja)",
        brookQuote: "«¡Yohohoho! Una taza de té caliente, una melodía alegre y el corazón sereno hacen que cualquier viaje valga la pena.»",
        robinChar: "Nico Robin (Arqueóloga de los Sombrero de Paja)",
        robinQuote: "«La historia nunca se borra por completo; cada esfuerzo, cada línea de código y cada aprendizaje dejan una huella imborrable en el camino hacia la verdad.»"
      },
      treasureTitle: "El tesoro no es el destino",
      treasureQuote: "«Aún sigo navegando y descubriendo todos mis sueños y la forma de alcanzarlos, pero sé cómo quiero vivir la travesía: rodeada de buenos nakamas, aprendiendo en cada proyecto complejo y celebrando cada banquete en el camino.»",
      treasureText: "Compaginar el grado de Ingeniería Telemática en la UAH (grad. 2027) con becas reales de investigación I+D y casi cuatro años trabajando fines de semana en Parfois (Nov 2022 – Ago 2026) ha forjado mi gestión del tiempo, resiliencia y templanza bajo presión. En búsqueda activa de prácticas curriculares (450 h) prorrogables a 900 h.",
      cvBtn: "Ver / Descargar CV (PDF)",
      treasure: {
        title: "El tesoro no es el destino",
        quote: "«Aún sigo navegando y descubriendo todos mis sueños y la forma de alcanzarlos, pero sé cómo quiero vivir la travesía: rodeada de buenos nakamas, aprendiendo en cada proyecto complejo y celebrando cada banquete en el camino.»",
        text: "Compaginar el grado de Ingeniería Telemática en la UAH (grad. 2027) con becas reales de investigación I+D y casi cuatro años trabajando fines de semana en Parfois (Nov 2022 – Ago 2026) ha forjado mi gestión del tiempo, resiliencia y templanza bajo presión. En búsqueda activa de prácticas curriculares (450 h) prorrogables a 900 h.",
        cvBtn: "Ver / Descargar CV (PDF)"
      },
      archTitle: "Explorador de Arquitectura de Sistemas",
      archSubtitle: "Topología real de clientes, APIs, modelos de IA, colas de mensajería y bases de datos.",
      archLayers: {
        cliente: "Cliente",
        web: "Web",
        api: "API",
        ia: "IA",
        datos: "Datos",
        infra: "Infra"
      },
      architecture: {
        title: "Explorador de Arquitectura de Sistemas",
        subtitle: "Topología real de clientes, APIs, modelos de IA, colas de mensajería y bases de datos.",
        summaries: {
          "controlador-cervantes": "Las gafas Meta Quest (con los juegos MR desarrollados por mis compañeras) se comunican con mi controlador api-servidor (FastAPI) para autenticación del launcher, configuración por PIN, streaming de audio WebSocket y registro de notas en MariaDB, mientras Nginx enruta el ecosistema dockerizado junto al portal api-web.",
          "correos-casillero": "Arquitectura backend orientada a microservicios: la PDA móvil consume api-core en FastAPI con JWT, las tareas pesadas de visión se encolan en Redis para el worker GPU con YOLO/ONNX, y PostgreSQL persiste la trazabilidad de paquetes.",
          "marchel-asterisk": "Infraestructura VoIP con Asterisk v22 y PJSIP sobre Ubuntu Linux: señalización SIP y audio RTP analizados con Wireshark, síntesis de voz interactiva con Festival TTS, CDR en MariaDB y tarificación automatizada con Cron/Python.",
          "nika-cloud": "Arquitectura híbrida WebSockets y Serverless: servidor Flask-SocketIO para mensajería y presencia en tiempo real, funciones AWS Lambda en Python para auditoría de tráfico y costes, y Amazon RDS MySQL como base de datos gestionada."
        },
        layers: {
          cliente: "Cliente",
          web: "Web",
          api: "API",
          ia: "IA",
          datos: "Datos",
          infra: "Infra"
        },
        nodeDetails: {
          "visores-xr": {
            label: "Visores Meta Quest (Juegos MR)",
            role: "Juegos educativos VR/MR desarrollados por el equipo de visor",
            details: "Las gafas validan su número de serie en el launcher, consultan qué escenario y capas toca ejecutar mediante PIN y transmiten el audio del alumno al controlador general."
          },
          "nginx-proxy": {
            label: "Nginx Reverse Proxy (Mi rol)",
            role: "Terminación HTTPS TLS 1.2/1.3 y enrutamiento del stack",
            details: "Configurado para centralizar la entrada segura al ecosistema dockerizado, inyectar cabeceras reales de proxy y preparar el enrutamiento conjunto de portal web, REST y WebSockets."
          },
          "api-servidor": {
            label: "Controlador api-servidor (Mi rol)",
            role: "Núcleo FastAPI: endpoints de gafas, corrección automática y concurrencia",
            details: "Implementé todos los endpoints para las gafas, autenticación del launcher, consultas y volcado transaccional de notas, y el pipeline paralelo que ejecuta evaluación Regex/fonética a la vez que consulta Ollama."
          },
          "ia-voz": {
            label: "Pipeline Voz & IA (Integración)",
            role: "Transcripción Faster-Whisper, evaluación Ollama y audio Coqui TTS",
            details: "Servicios en contenedores Docker integrados desde api-servidor mediante colas en memoria y llamadas locales para procesar el audio sin bloquear la interacción del alumno."
          },
          "portal-web": {
            label: "Portal Web api-web (Compañero)",
            role: "Gestión docente de aulas, alumnos y configuración de partidas",
            details: "Panel desarrollado por otro integrante del equipo para que los profesores organicen alumnos y supervisen las sesiones educativas."
          },
          "mariadb-db": {
            label: "MariaDB (Integración BBDD)",
            role: "Persistencia relacional de notas, configuración y alumnos",
            details: "Base de datos compartida entre api-servidor y api-web, asegurando transacciones atómicas en las evaluaciones y manteniendo la integridad académica."
          },
          "cliente-pda": {
            label: "Captura PDA & Simulador",
            role: "Dispositivos móviles Android / PDA rugerizada",
            details: "Aplicación móvil que captura fotografías de los casilleros postales con metadatos de balda y las envía de forma segura mediante HTTPS a la API central."
          },
          "nginx-gateway": {
            label: "Nginx Reverse Proxy (Mi rol)",
            role: "Gateway de entrada, terminación TLS y enrutamiento",
            details: "Centraliza el tráfico HTTPS, aplica rate limiting y enruta las solicitudes hacia la API móvil o el panel web de gestión."
          },
          "api-core": {
            label: "API Core FastAPI (Mi rol)",
            role: "Ingesta móvil, validación JWT y orquestación de tareas",
            details: "Microservicio backend en FastAPI que autentica operadores con JWT, valida la integridad de las imágenes recibidas y encola las tareas de análisis en Redis."
          },
          "redis-broker": {
            label: "Redis AOF Broker (Mi rol)",
            role: "Cola de mensajería y persistencia de trabajos pendientes",
            details: "Broker en memoria configurado con persistencia AOF que desacopla la recepción masiva de capturas del procesamiento pesado de visión por computador."
          },
          "ia-worker": {
            label: "AI Worker YOLO / ONNX (Mi rol)",
            role: "Inferencia local en GPU/CPU y conteo por balda",
            details: "Worker asíncrono en Python que consume capturas de Redis, ejecuta inferencia con YOLOv8-seg cuantizado en ONNX Runtime y mapea detecciones a casilleros."
          },
          "web-panel": {
            label: "Panel Web (Módulo separado)",
            role: "Supervisión administrativa de correspondencia",
            details: "Interfaz desarrollada por otro compañero para la consulta en tiempo real del estado de ocupación de las 20 baldas y estadísticas de entrega."
          },
          "postgres-db": {
            label: "PostgreSQL 15 (Mi rol)",
            role: "Persistencia histórica de baldas y auditoría",
            details: "Base de datos relacional que almacena el histórico de detecciones, estados de casilleros y métricas de rendimiento del sistema."
          },
          "softphones-zoiper": {
            label: "Softphones SIP (Zoiper)",
            role: "Clientes SIP para llamadas de voz y pruebas",
            details: "Terminales VoIP software configurados en extensiones 2XXX para generar tráfico de señalización SIP y flujos de audio RTP bidireccionales."
          },
          "asterisk-pbx": {
            label: "Centralita Asterisk v22",
            role: "Conmutación PJSIP, IVR interactivo y dialplan",
            details: "Servidor de telefonía IP desplegado en Ubuntu Server con Asterisk v22 que gestiona rutas, buzones de voz, salas de conferencia y derivación de llamadas."
          },
          "festival-tts": {
            label: "Festival TTS",
            role: "Síntesis de voz en español para locuciones",
            details: "Motor de síntesis vocal integrado en el dialplan mediante systemd para generar mensajes de voz dinámicos en el IVR y avisos a usuarios."
          },
          "cron-tarificador": {
            label: "Scripts de Tarificación",
            role: "Procesamiento batch periódico de llamadas en Python",
            details: "Scripts ejecutados por Cron que analizan los CDR de MariaDB, clasifican las llamadas por tipo de destino y aplican las tarifas correspondientes."
          },
          "portal-marchel": {
            label: "Portal Web Flask",
            role: "Consulta de saldo, consumos y detalles de llamada",
            details: "Aplicación web interactiva desarrollada en Flask donde los usuarios y administradores consultan registros de llamadas y costes asociados."
          },
          "mariadb-cdr": {
            label: "MariaDB CDR & ODBC",
            role: "Persistencia relacional de registros CDR",
            details: "Base de datos MariaDB configurada como backend CDR mediante ODBC para registrar duración, origen, destino y estado de cada llamada."
          },
          "clientes-web": {
            label: "Clientes Web (Chat & Stats)",
            role: "Interfaz de usuario para mensajería en tiempo real",
            details: "Frontend web que interactúa con el servidor de chat mediante WebSockets para envío/recepción de mensajes y consulta de métricas en /stats."
          },
          "servidor-socketio": {
            label: "Servidor Flask-SocketIO",
            role: "Gestión de conexiones WebSocket, salas y presencia",
            details: "Backend Python con Flask-SocketIO que enruta mensajes globales y privados, gestiona el estado de los usuarios y registra el tráfico para facturación."
          },
          "panel-stats": {
            label: "Panel /stats (Flask)",
            role: "Visualización analítica de consumo y costes",
            details: "Ruta web que presenta a los usuarios sus métricas acumuladas de mensajes, bytes transmitidos y costes liquidados por la función Lambda."
          },
          "aws-lambda": {
            label: "AWS Lambda (Facturación)",
            role: "Función serverless facturacion.py en Python",
            details: "Función serverless en la nube de AWS que procesa periódicamente mensajes no auditados y calcula importes según el volumen de datos transferido."
          },
          "aws-rds": {
            label: "AWS RDS MySQL (nika_chat)",
            role: "Base de datos relacional gestionada en la nube",
            details: "Instancia gestionada de MySQL en AWS que almacena mensajes, salas, usuarios registrados y los resúmenes de facturación calculados."
          }
        }
      },
      skillsTitle: "Competencias Técnicas del CV",
      skillsSubtitle: "Tecnologías reales aplicadas en becas I+D y proyectos de ingeniería en la UAH.",
      skills: {
        title: "Competencias Técnicas del CV",
        subtitle: "Tecnologías reales aplicadas en becas I+D y proyectos de ingeniería en la UAH.",
        groupDescriptions: [
          "Programación de sistemas, automatización, contenedores y documentación técnica.",
          "Backends asíncronos, WebSockets, colas y despliegue serverless.",
          "Telefonía IP, señalización SIP, análisis de tráfico y proxy inverso.",
          "Visión artificial, transcripción/síntesis de voz, LLMs y bases de datos relacionales.",
          "Arquitectura distribuida, buenas prácticas de ingeniería y metodologías ágiles."
        ],
        groups: [
          {
            title: "Lenguajes y Herramientas",
            desc: "Programación de sistemas, automatización, contenedores y documentación técnica."
          },
          {
            title: "Tecnologías, APIs y Cloud",
            desc: "Backends asíncronos, WebSockets, colas y despliegue serverless."
          },
          {
            title: "Sistemas, Redes y VoIP",
            desc: "Telefonía IP, señalización SIP, análisis de tráfico y proxy inverso."
          },
          {
            title: "IA Aplicada y Bases de Datos",
            desc: "Visión artificial, transcripción/síntesis de voz, LLMs y bases de datos relacionales."
          },
          {
            title: "Arquitectura y Metodología",
            desc: "Arquitectura distribuida, buenas prácticas de ingeniería y metodologías ágiles."
          }
        ]
      },
      timelineTitle: "Bitácora de Travesía",
      timelineSubtitle: "Desde los primeros pasos en robótica en el instituto hasta becas universitarias de investigación I+D en la UAH.",
      timelineFilters: {
        featured: "Destacados",
        all: "Todos (8)",
        becas: "Becas I+D",
        comunidad: "Comunidad",
        academico: "Proyectos UAH"
      },
      timeline: {
        title: "Bitácora de Travesía",
        subtitle: "Desde los primeros pasos en robótica en el instituto hasta becas universitarias de investigación I+D en la UAH.",
        filters: {
          featured: "Destacados",
          all: "Todos (8)",
          becas: "Becas I+D",
          comunidad: "Comunidad",
          academico: "Proyectos UAH"
        },
        items: [
          {
            period: "Jun 2026 – Actualidad",
            type: "Beca I+D · One Piece",
            title: "Beca de Investigación — Sistemas Distribuidos & Visión Artificial",
            org: "Cátedra de Correos y Telégrafos · Universidad de Alcalá (UAH)",
            summary: "Desarrollo integral de la arquitectura backend e IA (todo el sistema salvo el panel web): microservicios en Docker Compose con FastAPI (api-core), colas Redis, worker de inferencia YOLO/ONNX con GPU local, PostgreSQL, Nginx, etiquetado en Label Studio y scripts de entrenamiento en curso."
          },
          {
            period: "26–30 Oct 2026",
            type: "Comunidad · Avatar Aang",
            title: "Staff en CNSM 2026 (Congreso Internacional de Redes)",
            org: "22nd Int. Conference on Network and Service Management · Alcalá de Henares",
            summary: "Participación como staff en organización, acreditaciones y guiado universitario durante el congreso ('Evolving Network and Service Management: From Automation to Agentic Intelligence'), asistiendo a charlas técnicas, practicando inglés y compartiendo con referentes del sector."
          },
          {
            period: "2026",
            type: "Voluntariado · Avatar Aang",
            title: "Mentora en Technovation Girls (Equipo Inteligents · App Saludea)",
            org: "Technovation Girls · Colegio Ernest Hemingway",
            summary: "Mentoría desde Ingeniería Telemática a un equipo de niñas principiantes en el diseño y desarrollo de Saludea, una app que ayuda a personas con medicación a evitar alimentos que interfieren con su tratamiento. Acompañamiento en ideación, organización y superación de retos."
          },
          {
            period: "Dic 2025 – May 2026",
            type: "Beca I+D · One Piece",
            title: "Beca de Investigación — Backend XR & Procesamiento de Voz",
            org: "UAH · ALTEN Spain & Instituto Cervantes",
            summary: "Responsable del controlador general (api-servidor en FastAPI) para un juego educativo en gafas Meta Quest: todos los endpoints, autenticación del launcher, MariaDB, corrección automática de notas, procesamiento concurrente (Faster-Whisper STT + Regex/Ollama), Nginx, Docker y co-diseño de arquitectura."
          },
          {
            period: "2025",
            type: "Proyectos UAH · One Piece",
            title: "Proyectos de Redes VoIP & Cloud Serverless (Marchel & Nika App)",
            org: "Universidad de Alcalá (UAH) · En pareja con Marcos Santos Aragón",
            summary: "Implementación transversal en pareja de una centralita VoIP con Asterisk v22, PJSIP, tráfico de red, Festival TTS y MariaDB (Marchel-Asterisk), y de una plataforma de chat y análisis de costes en Flask-SocketIO desplegada con AWS Lambda y AWS RDS (Nika App)."
          },
          {
            period: "Nov 2022 – Ago 2026",
            type: "Experiencia laboral paralela",
            title: "Dependienta de Fines de Semana",
            org: "Parfois",
            summary: "Casi cuatro años compaginando atención directa al público los fines de semana con los estudios de Ingeniería Telemática, fortaleciendo la gestión del tiempo, la resiliencia y la tolerancia a la presión."
          },
          {
            period: "En curso · Graduación 2027",
            type: "Formación · Prácticas 450–900 h",
            title: "Grado en Ingeniería Telemática (Último año)",
            org: "Universidad de Alcalá (UAH) · Madrid, España",
            summary: "Cursando el último año de Ingeniería Telemática (con interés en cursar máster habilitante). Disponible para prácticas curriculares de 450 horas ampliables a extracurriculares de hasta 900 horas."
          },
          {
            period: "Instituto · 2019",
            type: "Infancia & Comunidad · Avatar Aang",
            title: "Etapa como alumna: Robocampeones, reto Arduino/AutoCAD Endesa & Technovation Girls",
            org: "Instituto · Primeros pasos en comunidad y tecnología",
            summary: "Entre asignaturas de robótica y programación en el instituto: competición en Robocampeones, reto escolar junto a Endesa diseñando un robot en 3D en AutoCAD, fabricándolo con impresora 3D y programando su placa Arduino, y etapa como alumna senior en Technovation Girls 2019 creando una app en App Inventor para ayudar a niños que sufrían bullying."
          }
        ]
      }
    },
    contact: {
      contactEyebrow: "Contacto & CV",
      contactTitle: "¿Zarpamos?",
      contactLead: "Disponible para prácticas curriculares (450 h) ampliables a extracurriculares (hasta 900 h). Si buscas alguien con base en redes, sistemas distribuidos, IA y espíritu de equipo, estaré encantada de conversar.",
      contactAvail: "Madrid · Alcalá de Henares · Español nativo · Inglés ~B2 práctico",
      copyEmailLabel: "Copiar correo chelseafh2003@gmail.com",
      downloadCvBtn: "Descargar CV (PDF)",
      formTitle: "Compositor rápido de correo",
      formSubtitle: "Prepara un correo dirigido a chelseafh2003@gmail.com (el teléfono figura únicamente en el PDF del CV).",
      nameLabel: "Tu nombre o equipo",
      namePlaceholder: "Ej. Laura · Equipo de Ingeniería",
      topicLabel: "Motivo",
      topicOptions: {
        internship: "Prácticas curriculares / extracurriculares (450–900 h)",
        collaboration: "Colaboración técnica / I+D",
        inquiry: "Consulta sobre arquitectura o código",
        booksGames: "Recomendación de libros o juegos de mesa"
      },
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntame en qué equipo o proyecto estás trabajando...",
      submitBtn: "Preparar correo",
      animeMode: "Modo anime interactivo",
      footerFine: "© 2026 Chelsea Fernández Hernández · Ingeniería Telemática (UAH) · Con la calma de Frieren, la empatía de Aang y el espíritu nakama de One Piece"
    }
  },

  en: {
    nav: {
      frieren: "Peace",
      avatar: "Community",
      onepiece: "Adventure",
      contact: "Contact",
      soundAria: "Turn ambient sound on or off"
    },
    hero: {
      eyebrow: "Chapter I · Frieren — Peace / Way of Life",
      role: "Madrid · Unhurried life · Between the sea, community, and new horizons",
      lead: "I live in Madrid and love enjoying days without rushing, surrounded by good company, an open book, or long table conversations. This space travels through who I am in three chapters: the calm with which I understand life, the community where I grew up supporting others, and later on upon reaching the open sea, the engineering journey and projects that brought me here.",
      startBtn: "Begin the journey",
      soundBtn: "Ambient sound"
    },
    frieren: {
      aboutEyebrow: "About me · Way of life",
      aboutTitle: "An unhurried journey, with a clear direction",
      frierenQuote: "«Frieren reminds me that we need to take things calmly. We live too briefly and almost always rush, forgetting what is simple. In the end, what truly brings value to life is enjoying small moments peacefully and dedicating quality time to those you love, without forgetting to live.»",
      chronicleEyebrow: "From the island to the green north · Table conversations · Books",
      chronicleTitle: "My pace outside the clock",
      chronicleIntro: "Far from any screen or clock, my daily rhythm cherishes small rituals that bring me back to balance: listening to ocean waves, sitting around a table with loved ones, or getting lost in a good story on a blanket in the fields.",
      tabs: {
        mar: "🌊 The Sea & North",
        juegos: "🎲 Board Games",
        lectura: "📖 Reading",
        all: "✨ View All"
      },
      marPassage: "I was born on an island, and I believe that's where my deep love for the sea comes from: simply watching it and listening to the breaking waves brings me peace. When escaping inland, I adore northern Spain, getting lost among its green landscapes and the murmur of rivers, spreading a blanket to spend hours reading without haste. That same passion for exploring peacefully lives in an annual tradition with my partner: celebrating each birthday and anniversary traveling, as we did in Milan and Copenhagen.",
      juegosPassage: "Yet there's no need to pack bags to stop the clock. Since childhood, gathering around a table with family or friends has meant endless afternoons of laughter, healthy banter, and conversation. I grew up playing Monopoly, Dominoes, Trivial, and card games, and today those post-dinner table sessions remain sacred with Party & Co, Hitster, Catan, Cluedo, Virus, puzzles, and peaceful hours building LEGO.",
      lecturaPassage: "And although I wasn't an avid reader as a child, over the years books have earned a central place in my life, becoming one of my favorite sanctuaries. Among stories that touched me most is San Manuel Bueno, Martyr, whose philosophical reflection on faith and caring for others deeply moved me from a non-believing yet deeply empathetic perspective. Today I leap from the grimoire edition of Witch Hat Atelier to Brandon Sanderson's fantasy with Tress of the Emerald Sea and Mistborn, psychological thrillers, classics like Orwell's 1984, and currently The Handmaid's Tale — because enjoying all of this peacefully with those you care about is what gives meaning to every chapter.",
      travelLabel: "Travel postcards · From the sea to the green north",
      diceLabels: {
        games: "🎲 Random board game",
        books: "📚 Random book",
        gamesTitle: "Board games since childhood",
        booksTitle: "Reading & personal time",
        booksNote: "San Manuel Bueno, Martyr: reading with a deep philosophical and empathetic backdrop."
      },
      staffPrompt: "Touch the staff to cast a spell of calm.",
      spell: "Touch the staff to cast a spell of calm.",
      sealText: "和 · harmony between daily calm, small moments, and time with loved ones",
      seal: "和 · harmony between daily calm, small moments, and time with loved ones"
    },
    avatar: {
      avatarEyebrow: "Chapter II · Avatar Aang — Community & Upbringing",
      avatarTitle: "What Is Shared Reaches Further",
      avatarLead: "What truly unlocked my curiosity for technology began in high school, between robotics and programming courses, school competitions like Robocampeones, an Endesa challenge designing a 3D robot in AutoCAD, manufacturing with a 3D printer, and programming its Arduino board, and my time as a senior student in Technovation Girls creating an anti-bullying app in App Inventor. That showed me that learning in community takes you so much further—and years later I returned full circle as a mentor and collaborated with CNSM 2026 in Alcalá de Henares.",
      milestones: [
        {
          tag: "High School · 2019",
          title: "Early Student Journey: Robocampeones, Endesa Arduino Challenge & Technovation Senior",
          p: "In high school I discovered how much I enjoyed creating useful things between robotics and programming courses: competing in Robocampeones, participating in an Endesa school challenge designing a 3D robot in AutoCAD, manufacturing with a 3D printer and programming an Arduino board, and joining Technovation Girls 2019 as a senior student designing an App Inventor app to help children facing bullying.",
          desc: "In high school I discovered how much I enjoyed creating useful things between robotics and programming courses: competing in Robocampeones, participating in an Endesa school challenge designing a 3D robot in AutoCAD, manufacturing with a 3D printer and programming an Arduino board, and joining Technovation Girls 2019 as a senior student designing an App Inventor app to help children facing bullying.",
          toggleBtn: "View key milestones",
          toggleOpen: "Read milestone details",
          toggleClose: "Hide details",
          bullets: [
            "Competition in Robocampeones and school challenge with Endesa programming an Arduino board, 3D AutoCAD design, and 3D printing",
            "Senior student in Technovation Girls 2019 creating an anti-bullying app in App Inventor"
          ],
          note: "School challenge with Endesa: 3D modeling in AutoCAD, 3D printing, and Arduino board programming."
        },
        {
          tag: "Mentorship · 2026",
          title: "Mentor in Technovation Girls 2026 («Inteligents» Team · Saludea)",
          p: "Closing the circle by mentoring a team of beginner girls from Ernest Hemingway School («Inteligents»). Together they built Saludea, an app designed to help people on medication avoid food-drug interactions; seeing them brainstorm, organize, overcome frustrations, and celebrate the final product was unforgettable.",
          desc: "Closing the circle by mentoring a team of beginner girls from Ernest Hemingway School («Inteligents»). Together they built Saludea, an app designed to help people on medication avoid food-drug interactions; seeing them brainstorm, organize, overcome frustrations, and celebrate the final product was unforgettable.",
          toggleBtn: "View key milestones",
          toggleOpen: "Read milestone details",
          toggleClose: "Hide details",
          bullets: [
            "Saludea App (2026): clear guide preventing food and medication interactions",
            "Close mentorship guiding ideation, team organization, and overcoming technical challenges"
          ],
          note: "Pedagogical guidance and technical motivation for the beginner team."
        },
        {
          tag: "Conference · Oct 2026",
          title: "Staff at CNSM 2026 (Alcalá de Henares)",
          p: "I served as part of the staff team at the 22nd International Conference on Network and Service Management ('Evolving Network and Service Management: From Automation to Agentic Intelligence'), assisting with event organization, attendee accreditation, and campus guidance, while attending keynote sessions, practicing professional English, and networking with global researchers.",
          desc: "I served as part of the staff team at the 22nd International Conference on Network and Service Management ('Evolving Network and Service Management: From Automation to Agentic Intelligence'), assisting with event organization, attendee accreditation, and campus guidance, while attending keynote sessions, practicing professional English, and networking with global researchers.",
          toggleBtn: "View key milestones",
          toggleOpen: "Read milestone details",
          toggleClose: "Hide details",
          bullets: [
            "Event logistics, attendee accreditation, and campus guidance throughout Alcalá de Henares",
            "Attending technical talks, practicing professional English, and connecting with the international community"
          ],
          note: "22nd International Conference on Network and Service Management at UAH."
        }
      ],
      elements: {
        label: "Four values of community and empathy",
        aire: { name: "Air", desc: "Listening without prejudice" },
        agua: { name: "Water", desc: "Empathy and adaptability" },
        tierra: { name: "Earth", desc: "Constancy and care" },
        fuego: { name: "Fire", desc: "Initiative and mentorship" },
        note: "Touch an element to feel its energy",
        prompt: "Touch an element to feel its energy"
      },
      koiQuote: "«Thinking differently does not make anyone your enemy: listening, understanding, forgiving, and respecting each other's freedom is what builds community.»",
      koiCite: "My perspective on Avatar: The Last Airbender",
      teaCorner: {
        label: "UNCLE IROH'S TEA CORNER",
        btn: "Pour another cup",
        initialQuote: "«Destiny is a funny thing. You never know how things will work out. But if you keep an open mind and a willing heart, you will find your own way.»",
        author: "Uncle Iroh",
        source: "Avatar: The Last Airbender · Daily Wisdom"
      }
    },
    onepiece: {
      opEyebrow: "Chapter III · One Piece — Future, R&D Grants & Projects",
      opTitle: "In search of my One Piece",
      opLead: "Here begins the open sea of my engineering path: final year of Telematics Engineering at UAH, real R&D research grants building distributed backends, queues, and AI models, and cloud & networking projects built alongside great nakamas.",
      projectFilters: {
        all: "All",
        profesional: "R&D Grants",
        academico: "UAH Projects",
        searchPlaceholder: "Search by title, grant or technology (FastAPI, YOLO, Asterisk, AWS)...",
        clearBtn: "Clear",
        countSuffix: "projects"
      },
      projects: {
        controlador: {
          k: "R&D Grant · Dec 2025 – May 2026",
          tag: "R&D Grant · Dec 2025 – May 2026",
          badge: "Featured · XR & Voice",
          title: "XR Backend Controller (ALTEN & Cervantes)",
          inst: "UAH · ALTEN Spain & Instituto Cervantes",
          summary: "Central backend in Docker Compose for an immersive Spanish educational game on Meta Quest headsets: launcher auth, PIN-based scenarios, real-time WebSocket audio, and MariaDB grades.",
          roleLabel: "Exact role:",
          role: "Sole developer in charge of api-servidor (FastAPI): all endpoints for VR headsets, launcher auth, MariaDB, automatic scoring, concurrency (Faster-Whisper STT + Regex/Ollama in parallel), Nginx, Docker, and overall system co-design with the api-web colleague (and MR games by teammates).",
          teamContext: "Multidisciplinary team project: teammates engineered the interactive Mixed Reality scenarios on Meta Quest headsets, another peer developed the teacher management portal (api-web), and we collaboratively coordinated the overall client-server architecture.",
          problem: "The educational system required connecting multiple concurrent Meta Quest headsets in classroom sessions with imperceptible latency, securely authenticating devices, ingesting continuous children's Spanish audio with varying ambient noise levels, and assessing pronunciation in real time without interrupting gameplay immersion or compromising academic traceability.",
          solution: "I designed and implemented the central api-servidor microservice using FastAPI with asynchronous multithreading: continuous PCM16 audio streaming via WebSockets, in-memory amplification and WAV buffering, automated transcription with Faster-Whisper, and a parallel evaluation pipeline pairing instant deterministic phonetic/Regex heuristics with an Ollama semantic fallback (qwen2.5:1.5b), preempting AI calls whenever deterministic validation passes. The entire ecosystem is orchestrated in Docker Compose with MariaDB 10.6, an Nginx TLS reverse proxy, and OTA remote update deployment.",
          modalHighlights: [
            "High-availability REST & WebSocket controller: endpoints for launcher registration and auth (/inicio, /registro_gafa), PIN-based scenario provisioning (/configuracion), student turn orchestration (/siguiente_alumno), transactional grade logging (/notas_alumno), and remote OTA updates (/admin/deploy-ota).",
            "Concurrent voice & AI latency-optimized pipeline: PCM16 WebSocket streaming (/escenario/...), containerized Faster-Whisper speech-to-text, and parallel evaluation blending deterministic phonetic Regex checks with Ollama semantic analysis, minimizing end-user latency.",
            "Technical leadership & infrastructure integration: system co-design alongside frontend and VR headset engineers, relational schema persistence in MariaDB, secure Nginx reverse proxy with TLS 1.2/1.3, and reproducible Docker Compose orchestration."
          ],
          bullets: [
            "REST/WS Endpoints: /inicio, /registro_gafa, /configuracion, /siguiente_alumno, /notas_alumno, and PCM16 audio",
            "Concurrent evaluation of children's voice with Faster-Whisper + phonetic Regex in parallel with Ollama (qwen2.5:1.5b)"
          ],
          detailsBtn: "View details",
          sheetBtn: "Full details",
          archBtn: "Architecture",
          toyBtn: "Test XR voice",
          toyScreen: "PIN 4821 · Tap to simulate phrase",
          toy: {
            label: "Interactive simulator · Controlador/",
            btn: "Test XR voice",
            screen: "PIN 4821 · Tap to simulate phrase"
          }
        },
        correos: {
          k: "R&D Grant · Jun 2026 – Present",
          tag: "R&D Grant · Jun 2026 – Present",
          badge: "Featured · Vision & AI",
          title: "Smart Parcel Locker Vision System (Correos Chair)",
          inst: "Chair of Correos and Telegraphs · UAH",
          summary: "Computer vision platform and distributed backend to verify the occupancy of 20 postal locker slots using GPU-accelerated YOLOv8/ONNX inference, Redis queues, and PostgreSQL.",
          roleLabel: "Exact role:",
          role: "End-to-end development of the backend and AI architecture (entire system except the web panel): microservices in Docker Compose with FastAPI (api-core), Redis AOF, local GPU YOLOv8/ONNX inference worker, PostgreSQL, Nginx, Label Studio annotation, and ongoing training.",
          teamContext: "R&D Research Grant at the Chair of Correos and Telegraphs (UAH): full end-to-end ownership of data engineering, backend infrastructure, secure mobile ingestion, and computer vision pipelines, while a teammate developed the monitoring web panel.",
          problem: "Daily manual mail counting across delivery unit sorting pigeonholes consumes critical operational hours and causes inventory discrepancies. The challenge was processing high-resolution images captured from ruggedized mobile PDAs under challenging lighting, delivering accelerated inference without congesting network bandwidth or blocking the API during simultaneous burst uploads.",
          solution: "I implemented a resilient producer-consumer architecture in Docker Compose: an Nginx gateway filters and routes traffic; api-core (FastAPI) validates JWT tokens and binary payload metadata before enqueuing jobs into Redis AOF; an isolated inference worker (ia-worker) segments shelf images using YOLOv8-seg exported to ONNX Runtime with CUDA GPU acceleration and CPU fallback; and slot-by-slot occupancy metrics are persisted in PostgreSQL 15 for analytical reporting.",
          modalHighlights: [
            "Fault-tolerant producer-consumer architecture: complete decoupling between the mobile ingestion API and computer vision inference via Redis AOF queues, ensuring API response times under 50 ms.",
            "Optimized computer vision pipeline with ONNX Runtime: YOLOv8-seg model exported to quantized ONNX format, cutting per-shelf inference latency by 60% while maintaining occupancy detection accuracy above 95%.",
            "Data governance & modular deployment: relational schema in PostgreSQL 15 with partitioning and audit trails, secure Nginx reverse proxy with TLS certificates, and containerized Docker Compose packaging for edge/on-premise delivery.",
          ],
          bullets: [
            "Decoupled producer-consumer pipeline with Redis AOF and rate limiting against capture bursts",
            "YOLOv8-seg segmentation exported to ONNX Runtime projected onto the 4×5 shelf matrix (20 slots)"
          ],
          detailsBtn: "View details",
          sheetBtn: "Full details",
          archBtn: "Architecture",
          toyBtn: "Scan mail (ONNX)",
          toyReadout: "4/8 slots with mail",
          toy: {
            label: "Vision workbench · Correos_casillero/",
            btn: "Scan mail (ONNX)",
            readout: "4/8 slots with mail"
          }
        },
        marchel: {
          k: "UAH Project · VoIP Networks · 2025",
          tag: "UAH Project · VoIP Networks · 2025",
          badge: "VoIP & Telecom",
          title: "Corporate IP PBX & Call Rating (Marchel-Asterisk)",
          inst: "UAH · Lab of Networks, Signals and Systems (LRSS)",
          summary: "Corporate IP telephony infrastructure with Asterisk v22 and PJSIP on Ubuntu Linux: interactive IVR, Festival TTS voice synthesis, periodic automated billing with Cron/Python, and Flask user portal.",
          roleLabel: "Exact role:",
          role: "End-to-end joint development in partnership with Marcos Santos Aragón across the entire lifecycle: Asterisk v22 architecture, PJSIP, SIP/RTP traffic analysis with Wireshark, Festival TTS voice synthesis, MariaDB ODBC, Python batch rating engine, and Flask web portal.",
          teamContext: "Joint end-to-end pair programming with Marcos Santos Aragón for the Lab of Networks, Signals and Systems (LRSS) at UAH: shared VoIP network design, collaborative Asterisk configuration, network packet analysis, and coordinated billing engine and web portal engineering.",
          problem: "Design and implement an enterprise-grade VoIP telephony solution managing internal and inter-branch calls across multiple offices, ensuring Quality of Service (QoS) across voice streams, delivering dynamic Spanish voice menus for interactive self-service, and logging CDR events for automated tariff-based call rating.",
          solution: "We deployed Asterisk v22 with the modern PJSIP stack on Ubuntu Server, provisioning 2XXX extensions for Zoiper softphones, unified voicemail, interactive IVR with Festival TTS (dynamic Spanish vocal prompts), ConfBridge audio conference rooms, and on-demand recording. We integrated Asterisk with MariaDB via ODBC to record CDR (Call Detail Records) and automated a Python batch billing engine via Cron that classifies call destinations and computes itemized tariffs surfaced on a Flask web portal.",
          modalHighlights: [
            "Advanced VoIP PBX infrastructure with Asterisk v22 & PJSIP: SIP extensions, unified voicemail, ConfBridge conference bridges, MixMonitor recording, music on hold queues, and inter-PBX trunks for intelligent call routing.",
            "Rigorous protocol analysis & speech synthesis: deep SIP/RTP packet inspection with Wireshark for network diagnostics, and systemd-managed Festival TTS Spanish speech synthesis integrated into the dialplan for dynamic voice menus.",
            "Automated billing engine & web analytics: transactional CDR logging in MariaDB via ODBC, Cron-scheduled Python rating algorithms across destinations and schedules, and interactive Flask web dashboard displaying consumption analytics."
          ],
          bullets: [
            "Trunks between PBXs, voicemail, blind/attended transfers, ConfBridge, and MixMonitor recording",
            "Festival TTS voice synthesis integrated into dialplan via systemd service"
          ],
          detailsBtn: "View details",
          sheetBtn: "Full details",
          archBtn: "Architecture",
          toyBtn: "Hang up",
          toyScreen: "SIP:2001 · Ready to dial",
          toy: {
            label: "Live PBX · Marchel-Asterisk/",
            btn: "Hang up",
            readout: "Asterisk PBX ready",
            extIvr: "IVR Voice"
          }
        },
        nika: {
          k: "UAH Project · Cloud Serverless · 2025",
          tag: "UAH Project · Cloud Serverless · 2025",
          badge: "Cloud & WebSockets",
          title: "Real-Time Distributed Chat & AWS Auditing (Nika App)",
          inst: "UAH · Lab of Networks, Signals and Systems (LRSS)",
          summary: "Real-time multi-room messaging platform with Flask-SocketIO, presence tracking, consumption auditing, and a serverless cost pipeline deployed on AWS Lambda with Amazon RDS MySQL.",
          roleLabel: "Exact role:",
          role: "End-to-end joint development in partnership with Marcos Santos Aragón: bidirectional WebSocket events, chat command protocol, Amazon RDS MySQL persistence, serverless Python function on AWS Lambda for metric aggregation, and reactive dashboard.",
          teamContext: "End-to-end pair programming with Marcos Santos Aragón for the Lab of Networks, Systems and Services (LRSS) at UAH: shared client-server architecture, collaborative WebSocket event design, and coordinated AWS cloud deployment.",
          problem: "Build a scalable and interactive multi-user chat platform (global broadcasts, private channels, and real-time console commands) delivering low transmission latency while metering and billing network data consumption per user without degrading server responsiveness under intensive compute loads.",
          solution: "We developed a Python backend using Flask and Flask-SocketIO to handle persistent connections, dynamic rooms, and real-time command routing. For persistent storage and modular decoupling, we integrated managed AWS RDS MySQL. We implemented billing logic inside an independent serverless function on AWS Lambda (facturacion.py): batch-processing pending messages through transactional queries, computing exact costs based on transmitted bytes, and updating financial summaries displayed on a /stats web dashboard.",
          modalHighlights: [
            "Bidirectional real-time messaging with WebSockets: dynamic rooms, private messaging, presence tracking, unique aliases, and CLI-style interactive commands built with Flask-SocketIO for responsive communication.",
            "Decoupled serverless cloud architecture on AWS: on-demand Python AWS Lambda function transactional batch processing traffic volumes and settling cost per kilobyte without compromising live chat responsiveness.",
            "Cloud infrastructure & operational monitoring: relational persistence in managed AWS RDS MySQL, analytical Flask dashboard (/stats) monitoring network metrics, and consumption-based financial billing model."
          ],
          bullets: [
            "Interactive commands (/TODOS, /DESTINATARIO, /GRUPO) and aggregated metrics at /stats",
            "Decoupled serverless function facturacion.py on AWS Lambda connected to managed MySQL"
          ],
          detailsBtn: "View details",
          sheetBtn: "Full details",
          archBtn: "Architecture",
          toyBtn: "Send ping",
          toyFeed: "Nika chat live · 0 KB billed",
          toy: {
            label: "Live channel · LRSS-4/",
            msgLive: "Room live",
            msgReply: "Waiting for commands...",
            meter: "0.00 KB · Lambda"
          }
        }
      },
      easterEggs: {
        brookBtn: "Play Binks' Sake with Brook",
        robinBtn: "Decipher Poneglyph with Robin",
        brookChar: "Brook (Straw Hat Musician)",
        brookQuote: "«Yohohoho! A hot cup of tea, a cheerful tune, and a calm heart make any journey worthwhile.»",
        robinChar: "Nico Robin (Straw Hat Archaeologist)",
        robinQuote: "«History is never entirely erased; every effort, every line of code, and every lesson leaves an indelible trace on the path to truth.»"
      },
      treasureTitle: "The treasure is not the destination",
      treasureQuote: "«I am still sailing discovering all my dreams and how to achieve them, but I know how I want to live the voyage: surrounded by great nakamas, learning in every complex project, and celebrating every banquet along the way.»",
      treasureText: "Balancing my Telematics Engineering degree at UAH (grad. 2027) with R&D research grants and nearly four years working weekends at Parfois (Nov 2022 – Aug 2026) has honed my time management, resilience, and composure under pressure. Currently seeking curricular internships (450 h) extendable to 900 h.",
      cvBtn: "View / Download CV (PDF)",
      treasure: {
        title: "The treasure is not the destination",
        quote: "«I am still sailing discovering all my dreams and how to achieve them, but I know how I want to live the voyage: surrounded by great nakamas, learning in every complex project, and celebrating every banquet along the way.»",
        text: "Balancing my Telematics Engineering degree at UAH (grad. 2027) with R&D research grants and nearly four years working weekends at Parfois (Nov 2022 – Aug 2026) has honed my time management, resilience, and composure under pressure. Currently seeking curricular internships (450 h) extendable to 900 h.",
        cvBtn: "View / Download CV (PDF)"
      },
      archTitle: "System Architecture Explorer",
      archSubtitle: "Real topology of clients, APIs, AI models, message queues, and databases.",
      archLayers: {
        cliente: "Client",
        web: "Web",
        api: "API",
        ia: "AI",
        datos: "Data",
        infra: "Infra"
      },
      architecture: {
        title: "System Architecture Explorer",
        subtitle: "Real topology of clients, APIs, AI models, message queues, and databases.",
        summaries: {
          "controlador-cervantes": "Meta Quest headsets (running the MR educational games created by teammates) communicate with my api-servidor controller (FastAPI) for launcher authentication, PIN provisioning, WebSocket audio streaming, and MariaDB grade recording, with Nginx reverse proxying the dockerized ecosystem alongside the teacher portal.",
          "correos-casillero": "Microservices-oriented backend architecture: the mobile PDA consumes api-core in FastAPI with JWT, heavy computer vision tasks are queued in Redis for the GPU worker running YOLO/ONNX, and PostgreSQL persists parcel slot traceability.",
          "marchel-asterisk": "VoIP infrastructure with Asterisk v22 and PJSIP on Ubuntu Linux: SIP signaling and RTP audio analyzed with Wireshark, interactive voice synthesis with Festival TTS, CDR in MariaDB, and automated call rating via Cron/Python.",
          "nika-cloud": "Hybrid WebSockets and Serverless architecture: Flask-SocketIO server for real-time chat and presence, AWS Lambda Python functions for traffic and cost auditing, and Amazon RDS MySQL as the managed database."
        },
        layers: {
          cliente: "Client",
          web: "Web",
          api: "API",
          ia: "AI",
          datos: "Data",
          infra: "Infra"
        },
        nodeDetails: {
          "visores-xr": {
            label: "Meta Quest Headsets (MR Games)",
            role: "VR/MR educational games developed by headset team",
            details: "Headsets authenticate their serial number in the launcher, request scenarios and pedagogical layers via PIN, and stream student audio to the central controller."
          },
          "nginx-proxy": {
            label: "Nginx Reverse Proxy (My Role)",
            role: "HTTPS TLS 1.2/1.3 termination and stack routing",
            details: "Engineered to centralize secure entry into the dockerized ecosystem, inject proxy headers, and unify routing across web portal, REST endpoints, and WebSockets."
          },
          "api-servidor": {
            label: "api-servidor Controller (My Role)",
            role: "FastAPI core: headset endpoints, auto-scoring, and concurrency",
            details: "I built all REST/WS endpoints for VR headsets, launcher authentication, transactional grade queries, and the parallel pipeline executing phonetic Regex checks alongside Ollama queries."
          },
          "ia-voz": {
            label: "Voice & AI Pipeline (Integration)",
            role: "Faster-Whisper STT, Ollama evaluation, and Coqui TTS audio",
            details: "Containerized Docker services integrated from api-servidor via in-memory queues and local calls to transcribe and evaluate audio without blocking student interaction."
          },
          "portal-web": {
            label: "api-web Teacher Portal (Teammate)",
            role: "Classroom, student, and scenario management portal",
            details: "Management dashboard engineered by a teammate allowing teachers to organize students, configure scenarios, and monitor educational sessions."
          },
          "mariadb-db": {
            label: "MariaDB (Database Integration)",
            role: "Relational persistence for grades, settings, and students",
            details: "Shared relational database between api-servidor and api-web, guaranteeing atomic scoring transactions and academic data integrity."
          },
          "cliente-pda": {
            label: "PDA Capture & Simulator",
            role: "Rugged Android mobile devices / PDA",
            details: "Mobile client capturing high-resolution parcel locker shelf photos with location metadata and transmitting them securely over HTTPS to the central API."
          },
          "nginx-gateway": {
            label: "Nginx Reverse Proxy (My Role)",
            role: "Ingress gateway, TLS termination, and routing",
            details: "Centralizes incoming HTTPS traffic, applies rate limiting policies, and routes requests to the mobile API core or administrative web dashboard."
          },
          "api-core": {
            label: "FastAPI API Core (My Role)",
            role: "Mobile ingestion, JWT validation, and job orchestration",
            details: "FastAPI backend microservice authenticating operators via JWT, validating image payload integrity, and queuing analysis jobs into Redis."
          },
          "redis-broker": {
            label: "Redis AOF Broker (My Role)",
            role: "Message broker and pending job queue persistence",
            details: "In-memory message broker configured with AOF persistence, decoupling peak photo ingestion bursts from heavy computer vision processing."
          },
          "ia-worker": {
            label: "AI Worker YOLO / ONNX (My Role)",
            role: "Local GPU/CPU inference and per-slot occupancy analysis",
            details: "Asynchronous Python worker consuming captures from Redis, running quantized YOLOv8-seg inference on ONNX Runtime, and mapping detections to parcel slots."
          },
          "web-panel": {
            label: "Web Panel (Separate Module)",
            role: "Administrative mail sorting oversight dashboard",
            details: "Management interface engineered by a teammate for real-time visualization of 20-slot parcel occupancy and delivery audit statistics."
          },
          "postgres-db": {
            label: "PostgreSQL 15 (My Role)",
            role: "Historical slot occupancy persistence and auditing",
            details: "Relational database storing time-series detection records, locker slot statuses, operator audit trails, and inference performance logs."
          },
          "softphones-zoiper": {
            label: "SIP Softphones (Zoiper)",
            role: "SIP clients for voice calls and validation",
            details: "VoIP softphone clients provisioned on 2XXX extensions generating SIP signaling traffic and bidirectional RTP voice streams."
          },
          "asterisk-pbx": {
            label: "Asterisk v22 PBX",
            role: "PJSIP switching, interactive IVR, and dialplan",
            details: "VoIP telephony server deployed on Ubuntu Server with Asterisk v22 managing routing dialplans, voicemails, conference bridges, and call distribution."
          },
          "festival-tts": {
            label: "Festival TTS",
            role: "Spanish speech synthesis for voice prompts",
            details: "Voice synthesis engine integrated into the dialplan via systemd to generate dynamic Spanish voice announcements in the interactive IVR."
          },
          "cron-tarificador": {
            label: "Billing Scripts (Cron)",
            role: "Periodic batch call rating in Python",
            details: "Python scripts executed periodically by Cron analyzing MariaDB CDR records, classifying destinations, and calculating tariff balances."
          },
          "portal-marchel": {
            label: "Flask Web Portal",
            role: "Balance, call itemization, and billing portal",
            details: "Interactive web application built in Flask where subscribers and administrators inspect call history, destination breakdowns, and billing reports."
          },
          "mariadb-cdr": {
            label: "MariaDB CDR & ODBC",
            role: "Relational persistence for CDR call logs",
            details: "MariaDB database configured as the CDR backend via ODBC, persisting duration, caller, destination, timestamp, and status of every call."
          },
          "clientes-web": {
            label: "Web Clients (Chat & Stats)",
            role: "User interface for real-time messaging",
            details: "Web frontend interacting with the chat server via WebSockets for real-time messaging and accessing data traffic analytics at /stats."
          },
          "servidor-socketio": {
            label: "Flask-SocketIO Server",
            role: "WebSocket connection, rooms, and presence manager",
            details: "Python backend with Flask-SocketIO routing broadcast and private messages, tracking user presence, and logging data consumption for billing."
          },
          "panel-stats": {
            label: "/stats Dashboard (Flask)",
            role: "Analytical consumption and cost visualization",
            details: "Web dashboard presenting users with accumulated message counts, transmitted byte totals, and financial charges calculated by Lambda."
          },
          "aws-lambda": {
            label: "AWS Lambda (Billing)",
            role: "Serverless facturacion.py Python function",
            details: "Serverless cloud function on AWS periodically processing unbilled messages and computing financial charges based on data volume transferred."
          },
          "aws-rds": {
            label: "AWS RDS MySQL (nika_chat)",
            role: "Managed relational database in AWS Cloud",
            details: "Managed MySQL database instance on AWS storing chat messages, rooms, registered aliases, and generated billing summaries."
          }
        }
      },
      skillsTitle: "Technical Resume Skills",
      skillsSubtitle: "Real technologies used in R&D grants and UAH engineering projects.",
      skills: {
        title: "Technical Resume Skills",
        subtitle: "Real technologies used in R&D grants and UAH engineering projects.",
        groupDescriptions: [
          "Systems programming, workflow automation, containerization, and technical documentation.",
          "Asynchronous backends, WebSockets, distributed queues, and serverless deployment.",
          "IP telephony, SIP signaling, network traffic analysis, and reverse proxying.",
          "Computer vision, speech transcription/synthesis, LLMs, and relational databases.",
          "Distributed architecture, robust engineering practices, and agile team workflows."
        ],
        groups: [
          {
            title: "Languages & Tools",
            desc: "Systems programming, workflow automation, containerization, and technical documentation."
          },
          {
            title: "Technologies, APIs & Cloud",
            desc: "Asynchronous backends, WebSockets, distributed queues, and serverless deployment."
          },
          {
            title: "Systems, Networks & VoIP",
            desc: "IP telephony, SIP signaling, network traffic analysis, and reverse proxying."
          },
          {
            title: "Applied AI & Databases",
            desc: "Computer vision, speech transcription/synthesis, LLMs, and relational databases."
          },
          {
            title: "Architecture & Methodology",
            desc: "Distributed architecture, robust engineering practices, and agile team workflows."
          }
        ]
      },
      timelineTitle: "Voyage Logbook",
      timelineSubtitle: "From early high-school steps in robotics to university R&D research grants at UAH.",
      timelineFilters: {
        featured: "Featured",
        all: "All (8)",
        becas: "R&D Grants",
        comunidad: "Community",
        academico: "UAH Projects"
      },
      timeline: {
        title: "Voyage Logbook",
        subtitle: "From early high-school steps in robotics to university R&D research grants at UAH.",
        filters: {
          featured: "Featured",
          all: "All (8)",
          becas: "R&D Grants",
          comunidad: "Community",
          academico: "UAH Projects"
        },
        items: [
          {
            period: "Jun 2026 – Present",
            type: "R&D Grant · One Piece",
            title: "Research Grant — Distributed Systems & Computer Vision",
            org: "Chair of Correos and Telegraphs · University of Alcalá (UAH)",
            summary: "Comprehensive development of the backend and AI architecture (the complete system except the web panel): microservices in Docker Compose with FastAPI (api-core), Redis queues, YOLO/ONNX inference worker with local GPU, PostgreSQL, Nginx, labeling in Label Studio, and active training scripts."
          },
          {
            period: "Oct 26–30, 2026",
            type: "Community · Avatar Aang",
            title: "Staff at CNSM 2026 (International Networking Conference)",
            org: "22nd Int. Conference on Network and Service Management · Alcalá de Henares",
            summary: "Volunteering as organizational staff, attendee accreditation, and campus guidance during the conference ('Evolving Network and Service Management: From Automation to Agentic Intelligence'), attending technical keynotes, practicing professional English, and networking with global researchers."
          },
          {
            period: "2026",
            type: "Volunteering · Avatar Aang",
            title: "Mentor in Technovation Girls (Inteligents Team · Saludea App)",
            org: "Technovation Girls · Ernest Hemingway School",
            summary: "Mentoring a team of beginner middle-school girls in designing and developing Saludea, a mobile app helping patients avoid dangerous food-drug interactions. Hands-on guidance in product ideation, agile task organization, and overcoming technical setbacks."
          },
          {
            period: "Dec 2025 – May 2026",
            type: "R&D Grant · One Piece",
            title: "Research Grant — XR Backend & Speech Processing",
            org: "UAH · ALTEN Spain & Instituto Cervantes",
            summary: "Sole developer responsible for the central backend controller (api-servidor in FastAPI) for an educational Spanish game on Meta Quest headsets: REST/WebSocket endpoints, launcher authentication, MariaDB persistence, automatic scoring, concurrent audio processing (Faster-Whisper STT + Regex/Ollama), Nginx, Docker, and system architecture co-design."
          },
          {
            period: "2025",
            type: "UAH Projects · One Piece",
            title: "VoIP Telephony & Serverless Cloud Projects (Marchel & Nika App)",
            org: "University of Alcalá (UAH) · In partnership with Marcos Santos Aragón",
            summary: "End-to-end partner development of a full VoIP PBX infrastructure with Asterisk v22, PJSIP, network packet analysis, Festival TTS, and MariaDB (Marchel-Asterisk), and a real-time chat platform with cost auditing built in Flask-SocketIO and deployed on AWS Lambda with AWS RDS MySQL (Nika App)."
          },
          {
            period: "Nov 2022 – Aug 2026",
            type: "Parallel Work Experience",
            title: "Weekend Sales Associate",
            org: "Parfois",
            summary: "Nearly four years balancing weekend direct customer service with rigorous Telematics Engineering studies, forging exceptional time management, psychological resilience, and composure under pressure."
          },
          {
            period: "Ongoing · Expected Grad. 2027",
            type: "Education · Internships 450–900 h",
            title: "B.S. in Telematics Engineering (Senior Year)",
            org: "University of Alcalá (UAH) · Madrid, Spain",
            summary: "Enrolled in the senior year of Telematics Engineering (with ambition to pursue the enabling Master's degree). Actively seeking 450-hour curricular internships extendable to 900 hours of extracurricular internships."
          },
          {
            period: "High School · 2019",
            type: "Youth & Community · Avatar Aang",
            title: "Early Student Journey: Robocampeones, Endesa Arduino/AutoCAD Challenge & Technovation Girls",
            org: "High School · First steps in technology and teamwork",
            summary: "Exploring robotics and programming classes: competing in Robocampeones, participating in an Endesa school challenge designing a 3D robot in AutoCAD, manufacturing with 3D printers and programming an Arduino board, and joining Technovation Girls 2019 as a senior student building an anti-bullying app in App Inventor."
          }
        ]
      }
    },
    contact: {
      contactEyebrow: "Contact & Resume",
      contactTitle: "Shall we set sail?",
      contactLead: "Available for curricular internships (450 h) extendable to extracurricular (up to 900 h). If you are looking for someone with foundations in networking, distributed systems, applied AI, and teamwork spirit, I will be delighted to connect.",
      contactAvail: "Madrid · Alcalá de Henares · Native Spanish · Practical English (~B2)",
      copyEmailLabel: "Copy email chelseafh2003@gmail.com",
      downloadCvBtn: "Download Resume (PDF)",
      formTitle: "Quick Email Composer",
      formSubtitle: "Draft an email to chelseafh2003@gmail.com (phone number is only included inside the PDF CV).",
      nameLabel: "Your name or team",
      namePlaceholder: "e.g. Laura · Engineering Team",
      topicLabel: "Subject / Purpose",
      topicOptions: {
        internship: "Curricular / extracurricular internship (450–900 h)",
        collaboration: "Technical collaboration / R&D",
        inquiry: "Inquiry about architecture or codebase",
        booksGames: "Book or board game recommendation"
      },
      messageLabel: "Message",
      messagePlaceholder: "Tell me what project or team you are working on...",
      submitBtn: "Prepare Email",
      animeMode: "Interactive anime mode",
      footerFine: "© 2026 Chelsea Fernández Hernández · Telematics Engineering (UAH) · With Frieren's calm, Aang's empathy, and One Piece's nakama spirit"
    }
  }
};

