/* ===================================================================
   PORTFOLIO DE CHELSEA FERNÁNDEZ HERNÁNDEZ
   Lógica interactiva: Selector de vibra, filtros, modal dinámico,
   generador de sabiduría/pociones y utilidades.
   =================================================================== */

// --- BASE DE DATOS DE PROYECTOS ---
const PROJECTS_DATA = {
  "controlador-cervantes": {
    title: "Plataforma de Control XR & Gestor Educativo VR/MR",
    category: "Beca de Investigación & Desarrollo",
    institution: "ALTEN Spain & Instituto Cervantes",
    summary: "Ecosistema integral distribuido para la orquestación, monitorización en vivo y gestión pedagógica de visores de Realidad Mixta (MR) y Realidad Virtual (Meta Quest) en sedes educativas internacionales.",
    problem: "Las sesiones formativas con gafas de Realidad Virtual requerían un control simultáneo y seguro por parte de docentes sin conocimientos técnicos avanzados, integrando voz, inteligencia artificial y analítica de progreso de alumnos en tiempo real.",
    solution: "Se diseñó y programó una arquitectura desacoplada en microservicios: un portal administrativo en Flask 3.0 con RBAC estricto, un API-Servidor en FastAPI para baja latencia con los visores, y módulos especializados de IA conversacional (Fast-Whisper STT y Coqui TTS).",
    architectureText: `+-----------------------------------------------------------+
|                   VISORES MR (Meta Quest)                 |
+-----------------------------------------------------------+
                            | (Audio / Websockets / REST)
                            v
+------------------+     +------------------+     +---------+
| Fast-Whisper STT | --> |  API-SERVIDOR    | --> | Agente  |
|  (Transcripción) |     |    (FastAPI)     |     |   IA    |
+------------------+     +------------------+     +---------+
                            |            |              |
                            v            |              v
                     +------------+      |        +-----------+
                     |  MariaDB   | <----+        | Coqui TTS |
                     |   (ORM)    |               |  (Audio)  |
                     +------------+               +-----------+
                            ^
                            | (Lectura/Escritura de Sesiones y PINs)
+-----------------------------------------------------------+
|           PORTAL WEB DE GESTIÓN (Flask 3.0 + Jinja2)      |
|    - Roles: Admin / Gestor de Centro / Docente / Alumno   |
|    - Live Tracker con PIN temporal & Modo Alto Contraste  |
+-----------------------------------------------------------+`,
    keyFeatures: [
      "Arquitectura backend dual: FastAPI para comunicación de baja latencia con dispositivos + Flask 3.0 bajo patrón Application Factory con capa desacoplada de servicios.",
      "Seguridad avanzada: Control de acceso basado en roles (RBAC) con decoradores propios, mitigación contra Session Fixation y CSP Nonces en plantillas Jinja2.",
      "Live Tracker de sesiones: Los profesores generan un PIN temporal para activar gafas en el aula, supervisando transcripciones STT en vivo y calificaciones de actividades.",
      "Tematización accesible: Motor de estilos en CSS nativo con variables HSL que conmuta al instante entre Modo Claro, Modo Oscuro y Alto Contraste para máxima inclusión.",
      "Tareas en segundo plano: Limpiezas programadas de sesiones huérfanas mediante Flask-APScheduler y despliegue modular con Docker y Redis."
    ],
    tags: ["Python Flask 3.0", "FastAPI", "Realidad Mixta (MR)", "Fast-Whisper STT", "Coqui TTS", "MariaDB", "SQLAlchemy", "Docker", "Redis", "Jinja2"]
  },

  "correos-casillero": {
    title: "Conteo Correos: Auditoría de Casilleros por Visión Artificial",
    category: "Proyecto Corporativo & Investigación",
    institution: "Sociedad Estatal Correos y Telégrafos",
    summary: "Plataforma distribuida y aplicación móvil nativa para auditar y cuantificar la carga postal pendiente en los casilleros de las Unidades de Reparto (UR) mediante análisis fotográfico.",
    problem: "En el flujo postal diario, las cartas y paquetes se clasifican en casilleros antes del reparto. Correos requería un mecanismo fiable para medir la carga que quedaba sin repartir a lo largo del día y detectar cuellos de botella operativos.",
    solution: "Se desarrolló una solución extremo a extremo compuesta por una aplicación Android nativa en Kotlin para captura en puntos de control críticos (salida de carteros y fin de jornada) y una plataforma web distribuida en Flask con jerarquía territorial estricta.",
    architectureText: `+-------------------------------------------------------------+
|        APP MÓVIL (Android OS 16+ en Kotlin Nativo)          |
|  - Captura guiada de fotos en casilleros (2 hitos/día)       |
|  - Histórico de métricas de los últimos 7 días              |
+-------------------------------------------------------------+
                               | (Sincronización segura)
                               v
+-------------------------------------------------------------+
|                 SERVIDOR Y ANALIZADOR WEB                   |
|              (Python Flask + Computer Vision)               |
+-------------------------------------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|         SEGURIDAD POR ANILLOS CONCÉNTRICOS CORREOS          |
|  Área Territorial  --->  Zona Geográfica  ---> Sector  ---> |
|  [Visión Global]         [Visión Zonal]        [Visión UR]  |
+-------------------------------------------------------------+`,
    keyFeatures: [
      "App móvil Android nativa programada en Kotlin para operarios, garantizando captura fotográfica rápida y consulta de análisis recientes sin sobrecarga de red.",
      "Anillos de protección concéntricos: Autorizaciones reflejadas exactamente según la estructura de Correos (Área → Zona → Sector → Unidad de Reparto), aislando datos sensibles.",
      "Flujo temporal de auditoría: Registro comparativo entre la primera fotografía (salida a ruta) y la segunda (cierre matinal con carga sobrevenida de camiones).",
      "Persistencia robusta: Modelado relacional en MariaDB gestionado con PyMySQL y SQLAlchemy para reporting y estadísticas departamentales."
    ],
    tags: ["Kotlin (Android)", "Python Flask", "Visión Artificial", "MariaDB", "Arquitectura Distribuida", "RBAC Jerárquico", "PyMySQL"]
  },

  "marchel-asterisk": {
    title: "Marchel: Central Telefónica PBX VoIP con Asterisk v22",
    category: "Proyecto Académico de Honor",
    institution: "Universidad de Alcalá (UAH) - Lab. Redes, Señales y Sistemas",
    summary: "Central telefónica IP (PBX) empresarial completa basada en Asterisk v22.2.0, con protocolo PJSIP, IVR interactivo, síntesis vocal TTS, tarificación y portal web de administración.",
    problem: "Diseñar, dimensionar y desplegar una infraestructura telefónica empresarial sobre VoIP capaz de gestionar alta concurrencia, enrutamiento avanzado de llamadas, trazabilidad fiscal y facilidad de uso para operadores.",
    solution: "Se construyó la central 'Marchel' sobre Ubuntu en VirtualBox modo bridge, configurando Asterisk 22 con pila PJSIP (UDP), registro MariaDB CDR, síntesis de voz dinámica Festival TTS y un frontend de supervisión en Flask.",
    architectureText: `+-------------------------------------------------------------+
|                 CLIENTES SOFTPHONES (VoIP)                  |
+-------------------------------------------------------------+
                               |
                        [PJSIP / UDP:5060]
                               v
+-------------------------------------------------------------+
|                 ASTERISK PBX CORE v22.2.0                   |
|  * IVR Interactivo con menús multinivel                     |
|  * Colas de llamadas (Call Queues) & Música en espera       |
|  * Buzón de voz (Voicemail) & Salas de audioconferencia     |
|  * Síntesis vocal dinámica con Festival TTS                 |
+-------------------------------------------------------------+
               |                               |
               v                               v
+------------------------------+   +--------------------------+
|      MariaDB CDR ENGINE      |   |   PANEL DE GESTIÓN WEB   |
| (Call Detail Record Logging) |   |  (Python Flask / Jinja2) |
| & Sistema de Tarificación    |   |  - Monitor de llamadas   |
+------------------------------+   +--------------------------+`,
    keyFeatures: [
      "Núcleo Asterisk v22 con PJSIP Wizard para gestión simplificada de credenciales, codecs de audio y extensiones concurrentes.",
      "Árbol IVR completo: Menús vocales interactivos que guían al usuario según dígitos DTMF, permitiendo desvíos, conferencias y buzón de voz.",
      "Festival TTS integrado: Respuestas y avisos generados en lenguaje natural sin requerir grabaciones de audio estáticas.",
      "Tarificación en tiempo real: Motor que consulta el registro CDR de MariaDB para calcular importes según duración, prefijo de llamada y destino.",
      "Portal Web Flask: Interfaz gráfica para que los administradores supervisen el estado de las líneas, consulten llamadas y visualicen métricas."
    ],
    tags: ["Asterisk 22", "VoIP / SIP / PJSIP", "Python Flask", "Festival TTS", "MariaDB CDR", "Linux / Ubuntu", "Networking", "PBX"]
  },

  "nika-cloud": {
    title: "Nika App: Mensajería en Tiempo Real & Tarificación Serverless",
    category: "Proyecto Académico de Redes & Cloud",
    institution: "Universidad de Alcalá (UAH)",
    summary: "Aplicación de mensajería instantánea bidireccional basada en WebSockets bautizada en honor a Sun God Nika (One Piece), con microservicio serverless en AWS Lambda y base de datos AWS RDS.",
    problem: "Implementar un sistema de chat multiusuario con soporte para salas, comandos tipo IRC y mensajería privada, que además integrara un modelo de tarificación computacional automático en la nube.",
    solution: "Se estructuró un cliente/servidor con Flask y SocketIO para mantener canales de comunicación de baja latencia en memoria, sincronizado con AWS RDS MySQL y una función AWS Lambda en Python encargada del procesamiento de facturación por tráfico y tiempo.",
    architectureText: `+-------------------------------------------------------------+
|              CLIENTES WEB (Navegadores / Chat)              |
+-------------------------------------------------------------+
                               | (WebSockets Bidireccionales)
                               v
+-------------------------------------------------------------+
|                   NIKA APP (Flask-SocketIO)                 |
|  * Salas temáticas, mensajería privada & comandos CLI       |
|  * Control dinámico de presencia y desconexiones            |
+-------------------------------------------------------------+
               |                               |
               v (Transacciones de usuario)    v (Eventos de facturación)
+------------------------------+   +--------------------------+
|        AWS RDS MySQL         |   |    AWS LAMBDA FUNCTION   |
|   (Persistencia Relacional)  |   |   (lambda_facturacion)   |
+------------------------------+   +--------------------------+
                                               |
                                               v
                                   +--------------------------+
                                   | Estadísticas & Tarificación|
                                   |       (stats.html)       |
                                   +--------------------------+`,
    keyFeatures: [
      "Canal WebSockets en vivo: Comunicación instantánea sin recarga, soporte para salas personalizadas (`GRUPO:nombre`), mensajes privados (`DESTINATARIO:mensaje`) y broadcast.",
      "Despliegue Cloud en AWS RDS: Almacenamiento seguro de credenciales, historial y sesiones con base de datos gestionada MySQL.",
      "Microservicio Serverless: Función AWS Lambda empaquetada que se dispara para tarificar el consumo de red de cada usuario y calcular métricas operativas.",
      "Comandos de terminal interactivos integrados en el chat inspirados en la libertad y dinamismo de Nika."
    ],
    tags: ["Flask-SocketIO", "WebSockets", "AWS Lambda", "AWS RDS MySQL", "Serverless", "Python", "Cloud Architecture"]
  }
};

// --- FRASES & SABIDURÍA DE LA BOTICA & ANIME ---
const ANIME_QUOTES = [
  {
    quote: "La magia es el arte de la imaginación. Si no puedes imaginar algo funcionando, nunca existirá en tu código.",
    author: "Frieren (葬送のフリーレン)",
    icon: "ri-sparkling-fill",
    category: "Magia & Calma"
  },
  {
    quote: "El veneno y la medicina son solo dos caras de la misma moneda; al igual que los bugs y los mejores aprendizajes de un sistema.",
    author: "Maomao (Kusuriya no Hitorigoto)",
    icon: "ri-flask-fill",
    category: "Investigación & Boticaria"
  },
  {
    quote: "Si no tienes el coraje de zarpar hacia aguas desconocidas, nunca descubrirás nuevos horizontes técnicos.",
    author: "Monkey D. Luffy (One Piece)",
    icon: "ri-compass-3-fill",
    category: "Aventura & Libertad"
  },
  {
    quote: "No importa cuán lento parezca el camino; lo que construyes con paciencia permanece mucho después de que termine la travesía.",
    author: "Himmel el Héroe (Frieren)",
    icon: "ri-time-fill",
    category: "Paciencia & Esfuerzo"
  },
  {
    quote: "Ante un misterio que nadie comprende, observa los síntomas con rigor y déjate guiar por la curiosidad.",
    author: "Maomao (Kusuriya no Hitorigoto)",
    icon: "ri-microscope-fill",
    category: "Análisis & Diagnóstico"
  },
  {
    quote: "¿Un obstáculo imposible? Entonces es el momento perfecto para encender los tambores de la liberación y sonreír.",
    author: "Sun God Nika (One Piece)",
    icon: "ri-sun-fill",
    category: "Creatividad & Nakama"
  }
];

// --- INICIALIZACIÓN CUANDO EL DOM ESTÁ LISTO ---
document.addEventListener("DOMContentLoaded", () => {
  initThemePicker();
  initProjectsFilter();
  initProjectModals();
  initWisdomGenerator();
  initContactCopy();
});

// --- 1. SELECTOR DE TEMA / VIBRA ---
function initThemePicker() {
  const themeBtns = document.querySelectorAll(".theme-btn");
  const currentTheme = localStorage.getItem("chelsea-portfolio-theme") || "frieren";

  applyTheme(currentTheme);

  themeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-theme");
      applyTheme(selected);
      localStorage.setItem("chelsea-portfolio-theme", selected);
      showToast(`¡Vibra cambiada a: ${btn.textContent.trim()}! ✨`);
    });
  });
}

function applyTheme(themeName) {
  document.body.classList.remove("theme-maomao", "theme-onepiece");
  if (themeName === "maomao") {
    document.body.classList.add("theme-maomao");
  } else if (themeName === "onepiece") {
    document.body.classList.add("theme-onepiece");
  }

  // Actualizar estado activo en botones
  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-theme") === themeName);
  });
}

// --- 2. FILTRADO DE PROYECTOS ---
function initProjectsFilter() {
  const tabs = document.querySelectorAll(".filter-tab");
  const projectCards = document.querySelectorAll(".project-card");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.getAttribute("data-filter");

      projectCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "flex";
          card.style.opacity = "0";
          card.style.transform = "translateY(12px)";
          setTimeout(() => {
            card.style.transition = "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 30);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// --- 3. MODALES DE DETALLE DE PROYECTO ---
function initProjectModals() {
  const modalOverlay = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");
  const closeBtn = document.getElementById("modalCloseBtn");
  const detailBtns = document.querySelectorAll(".btn-project-details");

  if (!modalOverlay || !modalContent) return;

  detailBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute("data-project");
      const project = PROJECTS_DATA[projectId];
      if (!project) return;

      renderModal(project, modalContent);
      modalOverlay.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });
}

function renderModal(p, container) {
  const tagsHtml = p.tags.map(t => `<span class="project-tag">${t}</span>`).join("");
  const featuresHtml = p.keyFeatures.map(f => `
    <li class="feature-bullet">
      <i class="ri-checkbox-circle-fill"></i>
      <span>${f}</span>
    </li>
  `).join("");

  container.innerHTML = `
    <div class="modal-badge-row">
      <span class="project-category-badge category-beca">${p.category}</span>
      <span class="project-institution"><i class="ri-building-line"></i> ${p.institution}</span>
    </div>
    <h2 class="modal-title">${p.title}</h2>
    <p class="modal-text">${p.summary}</p>

    <h4 class="modal-section-title"><i class="ri-questionnaire-line"></i> El Desafío</h4>
    <p class="modal-text">${p.problem}</p>

    <h4 class="modal-section-title"><i class="ri-lightbulb-line"></i> La Solución de Ingeniería</h4>
    <p class="modal-text">${p.solution}</p>

    <h4 class="modal-section-title"><i class="ri-flow-chart"></i> Diagrama de Arquitectura</h4>
    <div class="modal-diagram-card">${escapeHtml(p.architectureText)}</div>

    <h4 class="modal-section-title"><i class="ri-award-line"></i> Hitos Técnicos & Aportes Clave</h4>
    <ul class="project-features">${featuresHtml}</ul>

    <h4 class="modal-section-title"><i class="ri-stack-line"></i> Tecnologías & Herramientas</h4>
    <div class="modal-tech-list">${tagsHtml}</div>
  `;
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// --- 4. GENERADOR DE SABIDURÍA & POCIONES ---
function initWisdomGenerator() {
  const btn = document.getElementById("randomQuoteBtn");
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");

  if (!btn || !quoteText || !quoteAuthor) return;

  let lastIndex = -1;

  btn.addEventListener("click", () => {
    let randIndex;
    do {
      randIndex = Math.floor(Math.random() * ANIME_QUOTES.length);
    } while (randIndex === lastIndex && ANIME_QUOTES.length > 1);

    lastIndex = randIndex;
    const selected = ANIME_QUOTES[randIndex];

    quoteText.style.opacity = "0";
    quoteAuthor.style.opacity = "0";

    setTimeout(() => {
      quoteText.textContent = `"${selected.quote}"`;
      quoteAuthor.textContent = `— ${selected.author}`;
      quoteText.style.opacity = "1";
      quoteAuthor.style.opacity = "1";
    }, 180);

    showToast("¡Nueva dosis de inspiración extraída de la botica! 🍵");
  });
}

// --- 5. COPIAR CONTACTO AL PORTAPAPELES ---
function initContactCopy() {
  const copyBtn = document.getElementById("copyEmailBtn");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = "chelseafh2003@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      showToast("¡Correo chelseafh2003@gmail.com copiado al portapapeles! 📬");
    }).catch(() => {
      showToast("Correo: chelseafh2003@gmail.com");
    });
  });
}

// --- UTILIDAD: TOAST NOTIFICATION ---
function showToast(message) {
  let toast = document.getElementById("siteToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "siteToast";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="ri-magic-line"></i> <span>${message}</span>`;
  toast.classList.add("show");

  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
