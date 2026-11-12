# Portafolio Web — Chelsea Fernández Hernández

Portal web interactivo y bitácora personal de **Chelsea Fernández Hernández**, estudiante de último curso de **Ingeniería Telemática** en la **Universidad de Alcalá (UAH)** (graduación prevista: **2027**), disponible para **prácticas curriculares o extracurriculares (450–900 h)**.

El diseño y la narrativa articulan su perfil técnico y humano en torno a tres capítulos temáticos inspirados en **Sousou no Frieren**, **Avatar: La Leyenda de Aang** y **One Piece**.

> Todo el contenido técnico del portal está contrastado con los cuatro repositorios autorizados (`Controlador/`, `Correos_casillero/`, `proyectos/Marchel-Asterisk/` y `proyectos/LRSS-4/`) sin exponer credenciales, ficheros de configuración sensibles ni datos privados. El número de teléfono permanece exclusivamente dentro del PDF del currículum.

---

## Capítulos Narrativos y Capacidades del Portal

- **Tres capítulos narrativos con separación clara entre persona y carrera:** **Frieren** (*Paz / ideal de vida*: vínculo con el mar al haber nacido en una isla, norte verde, lectura, juegos de mesa y viajes), **Avatar Aang** (*Comunidad e infancia*: etapa escolar en Robocampeones, reto Endesa Bluetooth y Technovation Senior, mentoría Technovation 2026 con el equipo «Inteligents» / Saludea, y staff en CNSM 2026) y **One Piece** (*Futuro y aventura profesional*: Ingeniería Telemática, becas de I+D, proyectos técnicos y trayectoria), acompañados de selector visual (`#animeToggle`) y transición atmosférica sobre `<canvas id="fx">`.
- **Interacciones temáticas y sonido:** Báculo interactivo de Frieren (`#staff` con `.staff-rune`, `.gem` y `#spell`), **Rincón de Té del Tío Iroh** con rotación de citas (`#teaQuoteText`, `#nextQuoteBtn`) y ambientación sonora opcional generada mediante **Web Audio API** (`.js-sound`).
- **Exploración técnica de proyectos:** Buscador y filtros combinados por texto, categoría y tecnología sobre `#projectsGrid`, modales accesibles de caso de estudio (`#projectModal`) y explorador interactivo de arquitectura por capas y nodos (`#arquitectura`).
- **Trayectoria, habilidades y contacto seguro:** Matriz de competencias (`#skillsMatrix`), línea temporal (`#timelineContainer`), visor/descarga del currículum (`#cvModal` y `assets/CV_Chelsea_Fdez_Hdez.pdf`), copia rápida de correo (`chelseafh2003@gmail.com`) y compositor `mailto:` (`#contactForm`) sin exposición pública del teléfono.

---

## Estructura de Archivos (`portfolio/`)

- `index.html`: Maquetación semántica editorial con el Hero, los capítulos Frieren / Avatar Aang / One Piece, canvas `#fx`, barra de navegación, controles de audio, buscador/filtros de `#projectsGrid`, explorador `#arquitectura`, `#habilidades`, `#trayectoria`, `#contacto` y modales `#projectModal` y `#cvModal`.
- `css/style.css`: Sistema visual responsive para los tres capítulos temáticos, animaciones, estados de foco accesibles (`:focus-visible`) y estilos de impresión.
- `js/portfolio-data.js`: Fuente única de verdad (`window.PORTFOLIO_DATA`) con el perfil académico/profesional, pilares narrativos, los cuatro proyectos verificados, grafos de arquitectura, trayectoria, matriz de habilidades, lado personal y citas.
- `js/main.js`: Hidratación dinámica desde `PORTFOLIO_DATA`, efectos en `#fx`, lógica del báculo `#staff`, Rincón de Té, audio Web Audio API (`.js-sound`), búsqueda y filtrado de `#projectsGrid`, explorador `#arquitectura`, gestión de `#projectModal` / `#cvModal` y compositor `mailto:`.
- `js/verify-portfolio.js`: Suite de verificación automatizada sobre el contrato DOM, filtros, modales, zonas de scroll y controles de privacidad.
- `assets/CV_Chelsea_Fdez_Hdez.pdf`: Currículum vitae oficial en formato PDF.
- `assets/icons/`: Iconografía SVG local (`frieren-staff.svg`, `appa.svg`, `chopper.svg`, `nika.svg`).
- `assets/images/frieren/` y `assets/images/aang/`: Directorios reservados para las fotografías reales de los capítulos personales y de comunidad, documentados en `assets/images/LEEME_FOTOS.txt`.

---

## Proyectos Documentados

1. **Controlador XR & Portal Educativo VR/MR** *(Beca ALTEN Spain & Instituto Cervantes · `Controlador/`)*
   - **Rol de Chelsea:** Diseño conjunto de la arquitectura global y responsabilidad directa sobre el backend `api-servidor` en **FastAPI** (autenticación de lanzadores, WebSockets de audio PCM16 y flujo de evaluación híbrida con **Faster-Whisper STT** + Regex y **Ollama**), la base de datos **MariaDB**, el reverse proxy **Nginx** y la orquestación **Docker Compose** (10 servicios junto a `api-web` en **Flask**, **Coqui TTS**, **Redis** y despliegue OTA con **GitHub Actions**).
2. **Sistema de Visión Artificial para Auditoría de Casilleros** *(Beca Cátedra de Correos · `Correos_casillero/Servidor/`)*
   - **Rol de Chelsea:** Responsable integral de la infraestructura del servidor y del pipeline de visión artificial —salvo `web_panel` y la app cliente PDA—: orquestación **Docker Compose**, reverse proxy **Nginx TLS**, API **FastAPI (`api-core`)** con **JWT**, cola en **Redis (AOF)**, worker de inferencia local en GPU/CPU **YOLOv8-seg / ONNX (`ia-worker`)**, base de datos **PostgreSQL**, etiquetado en **Label Studio** y scripts de reentrenamiento en curso.
3. **Marchel: Central Telefónica PBX VoIP con Asterisk v22** *(Proyecto en pareja con Marcos Santos Aragón · UAH · `proyectos/Marchel-Asterisk/`)*
   - **Rol:** Desarrollo conjunto de centralita VoIP sobre Linux con **Asterisk v22.2.0**, **PJSIP**, softphones **Zoiper**, síntesis de voz **Festival TTS** en español, IVR, colas, `ConfBridge`, `MixMonitor`, registro de llamadas **MariaDB CDR** y portal web en **Flask**.
4. **Nika App: Mensajería en Tiempo Real & Tarificación Serverless** *(Proyecto en pareja con Marcos Santos Aragón · UAH · `proyectos/LRSS-4/`)*
   - **Rol:** Desarrollo conjunto de aplicación de chat bidireccional con **Flask-SocketIO**, interfaz web y análisis/cálculo de costes mediante función serverless **AWS Lambda** en Python conectada a **AWS RDS MySQL**.

---

## Cómo Probarlo y Verificarlo en Local

El portal es 100 % estático y no requiere paso de compilación. Para servirlo localmente:

```bash
cd portfolio
python -m http.server 8080
```

Después abre `http://localhost:8080` en el navegador.

La integridad del DOM, las interacciones principales y los controles de privacidad se validan mediante `js/verify-portfolio.js` ejecutado sobre el portal en un navegador Chromium headless.

---

## Publicación en GitHub Pages

1. Publica el contenido de `portfolio/` en tu repositorio de GitHub (por ejemplo `Chelseafh/portfolio` o `Chelseafh.github.io`).
2. En **Settings → Pages**, selecciona la rama `main` y la carpeta raíz (`/root`).
3. El currículum ya queda enlazado en `assets/CV_Chelsea_Fdez_Hdez.pdf`. Para añadir fotografías personales y de comunidad, colócalas en `assets/images/frieren/` y `assets/images/aang/` siguiendo `assets/images/LEEME_FOTOS.txt`.
