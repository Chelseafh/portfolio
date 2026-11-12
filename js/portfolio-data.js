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
        "Lo que realmente descongeló mi curiosidad por la tecnología empezó en el instituto, entre asignaturas de robótica y programación, competiciones escolares como Robocampeones, un reto programando un robot con placa Bluetooth junto a Endesa y mi etapa como alumna senior en Technovation Girls creando una app frente al bullying en App Inventor. Aquello me demostró que aprender en comunidad te lleva mucho más lejos —y años después volví al punto de partida como mentora y colaboré en CNSM 2026 en Alcalá de Henares.",
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
          title: "Mi etapa como alumna: Robocampeones, Endesa y Technovation Senior",
          role: "Alumna de instituto y participante",
          description:
            "En el instituto descubrí cuánto me gustaba crear cosas útiles entre asignaturas de robótica y programación: competí en Robocampeones, participé en un reto escolar junto a Endesa programando un robot con placa Bluetooth y, como alumna senior en Technovation Girls 2019, diseñé con mi equipo una app en App Inventor para ayudar a niños y niñas que sufrían bullying. Aquella etapa sembró la pasión que me ha traído hasta hoy.",
          highlights: [
            "Competición en Robocampeones y reto escolar programando un robot con placa Bluetooth junto a Endesa",
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
        "Responsable íntegra del controlador general (api-servidor): todos los endpoints de las gafas VR, autenticación con el launcher, integración con MariaDB, corrección automática de notas, procesamiento concurrente (Faster-Whisper STT en paralelo con Regex + Ollama), configuración de Nginx, Docker y co-diseño de la arquitectura global.",
      teamContext:
        "Trabajo multidisciplinar en equipo: compañeras diseñaron los juegos de Realidad Mixta en los visores VR, otro compañero desarrolló el portal web (api-web) y entre ambos definimos la arquitectura global del sistema.",
      summary:
        "Backend central en Docker Compose para un juego educativo de español en Realidad Virtual y Mixta con gafas Meta Quest. Me encargué de todo el controlador api-servidor que autentica los visores, sirve los escenarios por PIN, transcribe y evalúa la voz infantil en tiempo real y persiste las calificaciones en MariaDB.",
      problem:
        "Las gafas VR/MR del proyecto educativo necesitaban un controlador robusto capaz de validar dispositivos desde el launcher, recibir audio continuo en español hablado por niños, evaluarlo con baja latencia sin bloquear la experiencia de juego y guardar notas trazables por alumno y escenario.",
      solution:
        "Desarrollé api-servidor con FastAPI y concurrencia asíncrona/multihilo: amplificación y empaquetado WAV en memoria del stream PCM16 recibido por WebSocket, transcripción con Faster-Whisper (STT) y evaluación paralela que combina coincidencia fonética/Regex instantánea con fallback semántico en Ollama (qwen2.5:1.5b), todo integrado con MariaDB, Nginx TLS y Docker Compose.",
      highlights: [
        "Controlador general api-servidor completo: endpoints REST para registro/autenticación del launcher (/inicio, /registro_gafa), descarga de configuración de escenarios por PIN (/configuracion), control de turno del alumnado (/siguiente_alumno), guardado transaccional de calificaciones (/notas_alumno) y despliegue OTA (/admin/deploy-ota).",
        "Procesamiento concurrente de voz e IA: recepción de audio por WebSocket (/escenario/...), transcripción con Faster-Whisper en contenedor y ejecución en paralelo de reglas fonéticas/Regex junto con Ollama, cancelando la llamada al LLM cuando la evaluación determinista alcanza aprobado.",
        "Infraestructura y seguridad de red: integración completa con la base de datos MariaDB, configuración de Nginx como reverse proxy HTTPS (TLS 1.2/1.3) y orquestación de servicios en Docker Compose co-diseñada junto al responsable del portal web."
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
        "Responsable de toda la arquitectura backend, infraestructura y sistema de visión artificial (todo el ecosistema salvo el panel web): microservicios en Docker Compose, api-core en FastAPI, colas Redis, worker de inferencia ONNX/YOLO con soporte GPU local, PostgreSQL, Nginx, etiquetado en Label Studio y scripts de entrenamiento en curso.",
      teamContext:
        "Beca activa en la Cátedra de Correos y Telégrafos (UAH), asumiendo de extremo a extremo la ingesta, infraestructura, base de datos y visión por computador mientras el panel web administrativo evoluciona como módulo separado.",
      summary:
        "Arquitectura distribuida de microservicios en Docker Compose para automatizar mediante visión por computador (YOLO / ONNX Runtime) el conteo de correspondencia en casilleros de 20 baldas a partir de fotografías tomadas en Unidades de Reparto.",
      problem:
        "Contar manualmente las cartas en cada casillero consume tiempo operativo diario y no deja histórico trazable. Además, los envíos apilados en abanico requieren segmentación precisa y un pipeline desacoplado capaz de absorber picos de subidas sin bloquear la captura móvil.",
      solution:
        "Diseñé e implementé una arquitectura productor-consumidor en Docker Compose con proxy Nginx, ingesta rápida en FastAPI (api-core) con autenticación JWT y validación binaria JPEG, cola persistente en Redis y worker de análisis (ia-worker) con ONNX Runtime (aceleración GPU local / fallback CPU) que mapea las detecciones a 20 baldas y persiste resultados en PostgreSQL, acompañado de etiquetado propio en Label Studio y entrenamiento iterativo en curso.",
      highlights: [
        "Arquitectura completa de microservicios (salvo panel web): orquestación con Docker Compose, reverse proxy Nginx con límite de subida y cabeceras de seguridad, y esquema relacional en PostgreSQL 15 con migraciones e integridad referencial estricta.",
        "Ingesta móvil segura en FastAPI (api-core): emisión/renovación JWT, lista blanca de roles revalidada en base de datos, control de tasa en Redis, comprobación binaria de cabecera JPEG (magic bytes) en streaming y publicación asíncrona en cola.",
        "Visión artificial y entrenamiento en curso (ia-worker): inferencia con YOLOv8-seg exportado a ONNX Runtime (CUDAExecutionProvider en GPU local y soporte CPU), proyección espacial a la rejilla de 20 baldas (4×5), etiquetado de datasets en Label Studio y experimentación activa de mejora de modelos."
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
        "Desarrollado en pareja junto a Marcos Santos Aragón participando ambos de forma transversal en todo el sistema: despliegue de centralitas Asterisk v22.2.0, protocolo PJSIP, análisis de tráfico de red, síntesis de voz con Festival TTS, integración ODBC con MariaDB, scripts de tarificación y portal web Flask.",
      summary:
        "Central telefónica VoIP completa sobre Ubuntu Linux con Asterisk v22.2.0 y PJSIP. Implementada junto a Marcos Santos Aragón integrando menús IVR, colas, conferencias, síntesis vocal en español con Festival TTS, registro CDR en MariaDB, tarificación automática y panel de usuario en Flask.",
      problem:
        "Construir de cero una infraestructura de telefonía IP realista capaz de enrutar llamadas internas y entre centralitas, analizar el tráfico de señalización y voz, generar locuciones dinámicas y facturar cada llamada de forma trazable.",
      solution:
        "Configuramos Asterisk v22 sobre Ubuntu con pila PJSIP (extensiones 2XXX en softphones Zoiper y troncales entre PBXs), Festival TTS como servicio systemd para locuciones dinámicas en español, conector ODBC hacia MariaDB para almacenar CDRs, scripts Python programados en Cron para calcular tarifas y una interfaz web en Flask para consulta de abonados.",
      highlights: [
        "Núcleo VoIP Asterisk v22.2.0 con PJSIP: extensiones para softphones Zoiper, buzones de voz, música en espera, transferencias ciegas y asistidas, grabación MixMonitor, salas ConfBridge, colas y enlace troncal entre PBXs.",
        "Tráfico de red y síntesis vocal: análisis de señalización SIP/RTP en red e integración de Festival TTS en español dentro del dialplan mediante systemd.",
        "Integración MariaDB CDR y portal Flask: registro automático de llamadas vía res_odbc / cdr_adaptive_odbc, tarificación periódica por destino y franja horaria en Python/Cron y visualización de estadísticas en Flask."
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
        "Desarrollado en pareja junto a Marcos Santos Aragón participando ambos en toda la arquitectura: aplicación web de chat y métricas en Flask + Flask-SocketIO, base de datos gestionada en AWS RDS MySQL y microservicio serverless de facturación en AWS Lambda.",
      summary:
        "Aplicación web de mensajería instantánea y control de consumo bautizada como Nika App (One Piece). Combina comunicación bidireccional en Flask-SocketIO con persistencia en AWS RDS y cálculo automatizado de costes por kilobyte en AWS Lambda.",
      problem:
        "Construir un servicio de chat multiusuario con salas dinámicas, comandos interactivos y mensajería directa que midiera el volumen exacto de tráfico generado y desacoplara el cómputo de facturación hacia arquitectura serverless en la nube.",
      solution:
        "Implementamos un servidor Flask + Flask-SocketIO encargado de las salas, comandos en tiempo real y panel /stats, conectado a una instancia AWS RDS MySQL compartida con una función AWS Lambda en Python que localiza mensajes pendientes, calcula su coste por KB y consolida estadísticas.",
      highlights: [
        "Chat bidireccional con Flask-SocketIO: soporte para mensajes globales (TODOS:), privados (DESTINATARIO:), salas grupales dinámicas (GRUPO / ABANDONAR), resolución automática de alias repetidos y comandos tipo CLI.",
        "Despliegue cloud con AWS RDS y AWS Lambda: persistencia de mensajes y tamaño en bytes en MySQL gestionado y función Lambda independiente (facturacion.py) para tarificar tráfico sin acoplar el servidor web.",
        "Panel /stats en Flask con cambio de tema claro/oscuro: visualización agregada de mensajes enviados, volumen en bytes y coste acumulado por usuario."
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
      title: "Etapa como alumna: Robocampeones, Endesa Bluetooth & Technovation Girls",
      organization: "Instituto · Primeros pasos en comunidad y tecnología",
      type: "Infancia & Comunidad · Avatar Aang",
      summary:
        "Entre asignaturas de robótica y programación en el instituto: competición en Robocampeones, reto escolar programando un robot con placa Bluetooth junto a Endesa, y etapa como alumna senior en Technovation Girls 2019 creando una app en App Inventor para ayudar a niños que sufrían bullying.",
      stack: ["App Inventor", "Robótica", "Bluetooth", "Espíritu de equipo"],
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
        "Pensar distinto no convierte a nadie en tu enemigo. Tres hitos marcan este camino: mi etapa como alumna en el instituto (Robocampeones, el reto del robot Bluetooth con Endesa y Technovation Girls 2019 con nuestra app antibullying en App Inventor), volver en 2026 como mentora del equipo «Inteligents» creando Saludea en el colegio Ernest Hemingway, y colaborar como staff en CNSM 2026 en Alcalá de Henares.",
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
