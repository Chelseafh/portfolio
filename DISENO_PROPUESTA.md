# Propuesta de Diseño Visual — Portafolio de Chelsea Fernández Hernández

> **Referencia estética aprobada por Chelsea:** inspirada directamente en la atmósfera, paletas luminosas, ritmo de scroll, divisores de olas y micro-interacciones de `index_ejemplo_diseño/index.html`, adaptada con **ilustraciones SVG originales en los motivos anime**, **flujos narrativos abiertos sin cajas rectangulares repetitivas**, **postales de viaje integradas dentro de la crónica de Frieren + galería continua de sobremesas y lecturas**, **galería dinámica `<` `>` de 1 proyecto a la vez (Split Stage) con escaparates 3D y transición simultánea de carrusel**, **juguetes interactivos 3D** (dados 3D CSS independientes para juegos o lecturas, 4 elementos táctiles, gafas Meta Quest 3D, pila de sobres 3D + casillero ONNX, medallón 3D Marchel Asterisk y emblema 3D Nika AWS) y el **100 % de los textos reales intactos** de `CONTENIDO_BORRADOR.md`.  
> **Estado:** Ronda 15 de diseño UI/UX completada en `portfolio/index.html`, `portfolio/css/style.css` y `portfolio/DISENO_PROPUESTA.md` (reubicación natural de \"Lejos de cualquier pantalla...\" como introducción editorial `.frieren-chronicle-intro` dentro de la cabecera de la crónica de Frieren, y unificación de Sobre mí como cabecera centrada `.sec-head` eliminando la cuadrícula huérfana `.about-grid`).

---

## 1. Principios Visuales y Reglas Cumplidas

- **Cero fondos negros, cero temas oscuros puros, cero negro absoluto (`#000000`) y cero colores neón.**
- **Separación estricta persona vs. carrera:** el Hero (`#inicio`), el Capítulo I (*Frieren*) y el Capítulo II (*Avatar Aang*) son 100 % humanos y de comunidad —sin jerga técnica de becas ni experiencia laboral de empresa—, reservando la trayectoria de ingeniería y CV para el Capítulo III (*One Piece*, `#aventura`) y Contacto (`#contacto`).
- **Narrativa abierta en lugar de cajas rígidas:** los tres capítulos eliminan contenedores cerrados repetitivos (`<ol class="journey">` en 3 bloques, tarjetas `.card-av` en 3 cajas y tarjetas `.card-op` con borde/sombra sólida `0 8px 0`) a favor de composiciones editoriales abiertas con filetes laterales de respiro, capitular tipográfica (`.frieren-chronicle`), láminas tipo polaroid ligeramente inclinadas y bitácora marítima ligera.
- **Motivos SVG originales + espacios sobrios de fotografía:** todas las escenas anime (claro de bosque, medallón arcano, báculo de Frieren, peces Koi Yin-Yang, tetera del Tío Iroh, sombrero de paja de One Piece e iconos lineales de Brook/Nico Robin) son **SVG originales integrados**, mientras que las fotografías futuras de `assets/images/frieren/` y `assets/images/aang/` lucen marcos estilo postal/polaroid (`.frieren-postal-slot` y `.avatar-photo-slot`) sin dibujos inventados.
- **Navegador flotante metamórfico (`.nav`):** barra centrada translúcida con iniciales **`CHFH`** (también en favicon SVG) que adopta el color y la silueta de cada capítulo al recorrer la página (`frieren` → píldora marfil/oro; `avatar` → cápsula aérea celeste; `onepiece` → forma náutica crema/dorado paja; `contact` → arena cálida) con control de sonido ambiente (`.js-sound`).
- **Accesibilidad verificada (WCAG AA / AAA):** todos los pares texto/superficie superan `4.5:1` y todas las animaciones (incluidas `@keyframes waterWave`, `@keyframes flameDance` y botones elásticos) respetan `@media (prefers-reduced-motion: reduce)` además del interruptor manual `#animeToggle`.

---

## 2. Paletas Exactas en HEX por Capítulo y Contraste Verificado

### 2.1 Capítulo I — Frieren (Paz / Ideal de vida)
*Atmósfera: claro de bosque luminoso, rayos de sol diagonales suaves, salvia orgánica y dorado tenue de grimorio.*

| Token | Uso | HEX | Contraste verificado |
|---|---|---|---|
| `--cream` / `--white` | Fondo superior cálido y tarjetas | `#FFFDF6` / `#FFFDF7` | Base luminosa |
| degradado Frieren | Transición de fondo | `#FFFDF6` → `#F6F3E0` → `#EEF3E2` | — |
| `--ink` | Tinta principal verde bosque profunda | `#26342D` | **12.80:1** sobre `#FFFDF6` (AAA) · **11.51:1** sobre `#EEF3E2` (AAA) |
| `--muted` | Texto descriptivo secundario | `#4A5B52` | **6.47:1** sobre `#F6F3E0` (AA) · **6.38:1** sobre `#EEF3E2` (AA) |
| `--sage` | Botón principal y acento natural | `#45674B` | **6.27:1** con texto `#FFFDF7` (AA) |
| `--sage-soft` | Chips e iconos de parada | `#DCE8D2` | **8.76:1** texto `#34503B` sobre `#FFFDF7` (AAA) |
| `--gold` / `--gold-ink` | Marcos de arco/medallón y titulares eyebrow | `#C9A24B` / `#7A5A14` | **6.25:1** (`#7A5A14` sobre `#FFFDF6`, AA) |

### 2.2 Capítulo II — Avatar Aang (Comunidad / Infancia)
*Atmósfera: cielo despejado de los Nómadas del Aire que desciende hacia pergamino arena cálido.*

| Token | Uso | HEX | Contraste verificado |
|---|---|---|---|
| degradado Avatar | Transición de fondo | `#D9ECF5` → `#E6F1F4` → `#F3EAD6` | — |
| `--air` | Eyebrows y acentos aire | `#2F6480` | **6.35:1** sobre `#FFFDF8` (AA) |
| `--air-ink` | Titulares y encabezados | `#1F4A61` | **7.81:1** sobre `#D9ECF5` (AAA) |
| `--air-soft` | Líneas `.stream`, espirales y detalles viento | `#7FB0C8` | Uso decorativo/trazos |
| `--earth` | Iconos de los 4 elementos y cita equilibrio | `#4E3B25` | **8.88:1** sobre `#F3EAD6` (AAA) |
| `--avatar-muted` | Texto secundario sobre arena y tarjetas | `#4A5B64` | **5.91:1** sobre `#F3EAD6` (AA) |
| superficie Avatar | Tarjetas `.card-av` y marcos de fotos | `#FFFDF8` | Borde `#D7E3E6` |

### 2.3 Capítulo III — One Piece (Futuro / Aventura, Becas e Ingeniería)
*Atmósfera: brillo radial de amanecer melocotón sobre azul mar luminoso, paja solar y cinta coral.*

| Token | Uso | HEX | Contraste verificado |
|---|---|---|---|
| degradado One Piece | Amanecer coral (`rgba(250,208,172,.82)` bajo vela superior `#CFE9EF` de 140–290 px) sobre mar | `#CFE9EF` → `#BDE0E9` → `#A9D6E2` | — |
| `--deep` / `--op-title` | Títulos e indicadores de tarjeta | `#17506A` / `#123F55` | **8.70:1** (`#17506A` sobre `#FFFEFA`, AAA) · **8.86:1** (`#123F55` sobre `#CFE9EF`, AAA) |
| `--op-lead` | Subtítulos sobre degradado marino | `#1E4656` | **7.26:1** sobre `#BDE0E9` (AAA) |
| `--straw` / `--straw-ink` | Botones elásticos `.btn-elastic` y detalles sol | `#F2CF7A` / `#4A3410` | **7.81:1** (AAA) · sombra 3D `#D9AE45` |
| `--band` / `--coral-badge` | Cinta de sombrero de paja y badges "Mi rol" | `#C8553D` / `#B64832` | **5.21:1** (`#FFFDF7` sobre `#B64832`, AA) |
| superficie One Piece | Tarjetas `.card-op`, arquitectura y bitácora | `#FFFEFA` | Borde `#CBE3EA`, interior `#EEF7F9` |

#### Capas del Explorador de Arquitectura (pasteles coordinados AA)
- **Cliente:** `#17506A` sobre `#DCECF5`
- **Web:** `#1E5B61` sobre `#DFF1F2`
- **API:** `#4B3B78` sobre `#EFEBF8`
- **IA:** `#7A5A14` sobre `#FDF0CD`
- **Datos:** `#2C5F44` sobre `#E1F0E7`
- **Infra:** `#963B28` sobre `#FCE7DC`

### 2.4 Cierre — Contacto & CV
- **Fondo:** `#FBF3E4` (arena cálida luminosa)
- **Superficies:** `#FFFDF7` con borde `#E5D7B0`
- **Tinta principal:** `#4A3410` (**10.64:1** sobre `#FBF3E4`, **11.53:1** sobre `#FFFDF7`, AAA)

---

## 3. Tipografía

- **Display / Titulares y Citas (`--serif`):** **`Playfair Display`** (`500`, `700` e itálica `500`).
- **Cuerpo e Interfaz (`--sans`):** **`Plus Jakarta Sans`** (`400`, `500`, `600`, `700`).
- **Etiquetas Técnicas / Endpoints (`--mono`):** **`JetBrains Mono`** (`400`, `500`).

---

## 4. Estructura Visual por Bloques y Contenido Validado

1. **Capítulo I — Frieren (`#inicio`, `#sobre-mi` · 100 % personal):**
   - **Hero (`#inicio`):** iniciales **`CHFH`** en navbar y favicon, nombre (*Chelsea Fernández Hernández*), subtítulo personal (*Madrid · Vida sin prisas · Entre el mar, la comunidad y nuevos horizontes*), presentación íntima sobre su vida tranquila en Madrid —cero menciones a `"Cuba"`, cero badges ni CTA de empleo/CV—, acompañada del **retrato ilustrado en arco + medallón circular SVG**.
   - **Sobre mí, Crónica continua, Columna asimétrica integrada de viajes y Dados 3D inferiores (`.frieren-chronicle` + `#frierenInfiniteGallery`):** se mantienen intactos al 100 % tanto la reflexión vital de *Frieren* (`.frieren-reflection-box`, aligerada a cita editorial con filete dorado izquierdo dentro de la cabecera unificada `.sec-head` de Sobre mí) como el texto introductorio (*Lejos de cualquier pantalla o reloj...*, reubicado de forma coherente como introducción `.frieren-chronicle-intro` bajo el título de la crónica), presentando los tres pasajes de `pillars.frieren.wovenStory` (`mar`, `juegos`, `lectura`) en lectura continua serena junto a la columna lateral derecha (`.frieren-chronicle-aside` > `#frierenPhotoGallery.frieren-postal-slot` sin caja ni borde contenedor propio, integrada directamente sobre el fondo de Frieren como un solo conjunto editorial): una única columna (`.frieren-travel-gallery`) asimétrica con las **4 fotos distintas sin repetición** (*Norte de España*, *Milán*, *Copenhague* y *Copenhague · Aniversario*) compartiendo **idéntica caja (`aspect-ratio: 16/10`) e idéntica animación (`@keyframes postalDrift`)**, sin clase `is-active` inicial ni alteración de tamaño al seleccionar. Debajo de ambas columnas dentro de `.frieren-chronicle`, la fila `.frieren-chronicle-dice-row` centra la bandeja `.frieren-dice-tray` en 2 columnas iguales (`.frieren-dice-slot` con `#frierenGameDiceBtn` + `#frierenGameDiceResult` salvia y `#frierenBookDiceBtn` + `#frierenBookDiceResult` oro). El carrusel horizontal continuo `#frierenInfiniteGallery.frieren-marquee` muestra exclusivamente Sobremesas (`#frierenGamesList`, 11 juegos clicables) y Lecturas (`#frierenBooksGrid`).
   - **Zona Interactiva del Báculo (`.staff-zone`):** botón `#staff` con **ilustración SVG vectorial original del báculo de Frieren** (`viewBox="0 0 280 280"`, eje vertical centrado en `x=140`, `.staff-rig` + `.gem`), texto `#spell` y sello `.seal`.
2. **Capítulo II — Avatar Aang (`#comunidad` · 100 % comunidad e infancia):**
   - **Flujo abierto de aire (`.cards-av.avatar-flow`):** recorrido abierto continuo con filete celeste lateral, listas de viñetas plegables por hito (`.av-bullets-toggle` sobre `ul#avBullets0..2` `[hidden]` al arranque sin recortar texto), trazos `.swoosh` de viento y láminas polaroid `.avatar-photo-slot`:
     1. *Mi etapa como alumna:* **Robocampeones**, reto robot con placa Bluetooth junto a Endesa y Technovation Girls 2019 (app antibullying en App Inventor).
     2. *Mentora en Technovation Girls 2026 (Equipo «Inteligents» · Saludea):* texto fluido junto a la polaroid `assets/images/aang/technovation-2026.jpg`.
     3. *Staff en CNSM 2026 (26–30 Oct 2026 · Alcalá de Henares):* composición alternada (`.card-av--reverse`) con organización internacional y polaroid `assets/images/aang/cnsm-2026.jpg`.
   - **4 Elementos interactivos con micro-interacciones semánticas (`.elements`):** cada `.el` (`role="button" tabindex="0" data-element="aire|agua|tierra|fuego"`) reacciona al hover y al clic con feedback en `#elementPulseNote`: *Aire* (`.el--aire`, giro 180°), *Agua* (`.el--agua`, `@keyframes waterWave`), *Tierra* (`.el--tierra`, giro 180°) y *Fuego* (`.el--fuego`, `@keyframes flameDance` coral/ámbar sin negro ni neón).
   - **Equilibrio & Rincón de Té (`.balance`):** **SVG animado original de peces Koi Yin-Yang**, cita real sobre Avatar Aang, polaroid de tetera y bloque interactivo del **Rincón de Té del Tío Iroh** (`#teaQuoteText` inicializado con `quotes[4]`, `#nextQuoteBtn`).
3. **Capítulo III — One Piece (`#aventura`, `#proyectos`, `#arquitectura`, `#habilidades`, `#trayectoria`):**
   - **Sombrero de paja SVG animándose (`.hat`)**, estrellas `.twinkle` e introducción técnica `pillars.onepiece.story`.
   - **Galería dinámica `<` `>` One Piece (1 proyecto visible a la vez + cero duplicidades):**
     - `.projects-toolbar` depurada conservando `#projectSearchInput`, `#projectCategoryFilters`, `#projectsCountBadge`, el indicador compacto opcional `#activeSkillChipBadge[hidden]` (conectado a los chips reales de `#skillsMatrix`) y `#clearFiltersBtn`, eliminando la barra duplicada `#projectTechFilterBar`.
     - `.projects-gallery-frame` enmarca `#projectsGrid.cards-op.projects-stage` entre `#projectPrevBtn` (`<`) y `#projectNextBtn` (`>`), acompañado del pie limpio `.projects-gallery-footer` (`#projectStageDots` + `#projectStageCounter`), sin barra superior de pestañas `.project-stage-nav` ni `Repo:` repetido en `.card-op-inst`.
     - `#projectsGrid.cards-op.projects-stage` muestra **1 solo proyecto activo a la vez** (`controlador-cervantes` visible por defecto y los otros 3 con `[hidden]`) en formato **Split Stage de 2 columnas** (`.card-op-split`): ficha abierta a la izquierda (`.card-op-main` con todo el relato, rol, detalles `<ul class="more" id="m1..m4">`, stack y acciones) y escaparate 3D interactivo a la derecha (`.card-op-console` con `--tilt-x`/`--tilt-y`, cabecera `.console-badge-live` + `.project-toy`: gafas Meta Quest 3D `.vr-3d-headset`, pila de sobres 3D `.mail-3d-stack` + casillero ONNX, medallón 3D `.marchel-3d-badge` con `logo-marchel.png` + centralita Asterisk, y emblema 3D `.nika-3d-badge` con `nika.svg` + chat WebSocket/Lambda):
     1. *Controlador Backend XR (Beca ALTEN & Instituto Cervantes)* (`Controlador/`)
     2. *Sistema Visión Artificial (Beca Cátedra de Correos)* (`Correos_casillero/`)
     3. *Marchel: Telefonía IP Asterisk v22 (Proyecto UAH)* (`proyectos/Marchel-Asterisk/`)
     4. *Nika App: Chat & AWS Cloud (Proyecto UAH)* (`proyectos/LRSS-4/`)
   - **Rincón Nakama (`.nakama-eggs`):** bloque luminoso de guiños interactivos con **Brook** (`#brookEggBtn`) y **Nico Robin** (`#robinEggBtn`), mostrando en `#nakamaEggBubble` (`#nakamaEggChar`, `#nakamaEggQuote`) frases reales de la tripulación.
   - **Bloque horizontal `.treasure` ("El tesoro no es el destino"):** conserva al 100 % su texto íntegro, sombrero de paja SVG y `#cvActionBtn`, seguido de **Arquitectura, Stack CV y Trayectoria** con barra de filtro rápido `.timeline-filters` (`Destacados`, `Todos (8)`, `Becas I+D`, `Comunidad`).
4. **Cierre — Contacto & CV (`#contacto`):**
   - Canales sociales elásticos (Email `chelseafh2003@gmail.com` sin teléfono público, LinkedIn, GitHub `@Chelseafh`), botón `.btn-elastic` `#cv` enlazado directamente a `assets/CV_Chelsea_Fdez_Hdez.pdf`, compositor rápido `#contactForm`, switch `#animeToggle` y modales `#projectModal` / `#cvModal` + `#siteToast`.

---

## 5. Animaciones, Dinámicas Web Modernas y Olas Limpias

- **Dinámicas transversales:** barra superior fija metamórfica `.scroll-progress` (`#scrollProgressBar`) que cambia de color en Frieren, Avatar, One Piece y Contacto; reflejo cálido de spotlight al puntero (`--mx`, `--my`) sobre `.project-toy`, `.el` y `.frieren-postal-slot`.
- **Ritmo vertical unificado y costuras `.wave` sin cortes:**
  - Todas las secciones y paneles comparten escalas coherentes (`.about`, `.sec-head`, `.contact > .wrap` con `44px` de aire superior bajo cada `.wave`; `.frieren`, `.avatar`, `.onepiece` y `.contact` con `52px–84px` de base inferior).
  - En `.wave` (`height: clamp(64px, 9vw, 128px); margin-bottom: -2px`), `.wave svg` usa `display: block; bottom: -2px; max-width: none; height: calc(100% + 4px)` y `.stream` usa igualmente `max-width: none;`, evitando recortes verticales o líneas finas de DPI.
  - `.onepiece` fija un degradado superior opaco en `#CFE9EF` (`0–140px`, fundido a `290px`) sobre el amanecer coral desplazado (`at 86% 340px`); `.wind-bg` y `.onepiece-bubbles` arrancan en `top: clamp(64px, 9vw, 128px)` por debajo de `.wave`.
- **Visibilidad garantizada + activación progresiva (`js/main.js`):** `.rise` y `.gust` son visibles (`opacity: 1`) sin JS y se revelan suavemente al añadir `html.js-anim`, conectados mediante `<script defer src="js/portfolio-data.js">` y `<script defer src="js/main.js">`.
- **Frieren:** rayos diagonales suaves (`beams`), `10` orbes perlados (`.orb`), `15` hojas botánicas SVG (`.frieren-leaves`), lectura editorial continua con justificado `inter-word`, columna única asimétrica y animada de 4 postales irrepetibles (`#frierenPhotoGallery` > `.frieren-travel-gallery`, `@keyframes postalDrift`), **fila inferior de dados 3D CSS independientes** (`.frieren-chronicle-dice-row` > `.frieren-dice-tray`), marquesina continua `#frierenInfiniteGallery` exclusiva de sobremesas y lecturas y báculo SVG `#staff`.
- **Avatar Aang:** líneas `.stream`, espirales `.swirl`, hitos plegables `.av-bullets-toggle` con fotos reales (`robocampeones.jpg`, `tecnoGirls_mentora.jpg`, `cnsm.jpg`), curvas `.swoosh`/`.gust`, animaciones semánticas e interactivas de los **4 Elementos** (`waterWave`, `flameDance`, `.is-active`), `.tea-corner.is-pouring` y peces Koi Yin-Yang.
- **One Piece:** olas `.wave`, `8` burbujas `.sea-bubble`, sombrero `.hat` y escena SVG `.treasure > svg` animada al hover (`.treasure-hat` con `@keyframes treasureHatFloat`, `.treasure-wave-back`/`front`, `.treasure-sun`, `.treasure-rays`), destellos `.twinkle`, galería `<` `>` `.projects-gallery-frame` con 1 proyecto visible a la vez y transición simultánea en carrusel 3D (`.is-leaving-next`/`prev` `420ms` + `.is-entering-next`/`prev` `480ms` con retardo `0.06s` en `.card-op-console`), escaparates `.card-op-console` con `--tilt-x`/`--tilt-y` y 4 protagonistas 3D (visor Meta Quest 3 realista en perspectiva 3/4 dentro de `.vr-3d-headset` + `.vr-3d-quest-svg` + `.vr-3d-shadow`, `.mail-3d-stack`, `.marchel-3d-badge` con `logo-marchel.png`, `.nika-3d-badge` con `nika.svg`), `.nakama-eggs`, `.timeline-filters`, botones elásticos `.btn-elastic` y modales.
- **Calma y accesibilidad:** `@media (prefers-reduced-motion: reduce)` y `html[data-anime="off"]` desactivan animaciones/transiciones de escenario, flotación de postales, hover del sombrero `.treasure > svg`, inclinaciones 3D interactivas y dados 3D (manteniendo su ángulo isométrico nítido), envuelven `.marquee-list` en flujo legible sin `mask-image` ni duplicados y conservan la lectura nítida.
- **Cierre de Ronda 15 (UI/UX):** reubicación armónica del texto introductorio *«Lejos de cualquier pantalla o reloj...»* como `.frieren-chronicle-intro` bajo el título de la crónica *«Mi ritmo fuera del reloj»*, y unificación de Sobre mí como cabecera `.sec-head` eliminando la cuadrícula `.about-grid` en `portfolio/index.html`, `portfolio/css/style.css` y `portfolio/DISENO_PROPUESTA.md`.
- **Cierre de Ronda 16 (UI/UX - Internacionalización):** incorporación del botón conmutador de idioma `#langToggleBtn` en la barra metamórfica `.nav` (`portfolio/index.html` y `portfolio/css/style.css`), estilizado como cápsula biofílica interactiva (`.lang-opt.is-active`, `.lang-divider`) y optimizada para viewport móvil (`@media (max-width: 480px)`) garantizando ancho de navegación seguro y `overflowPx <= 0`.
- **Cierre de Ronda 20 (UI/UX - Tipografía & Ajuste Frieren):** protección visual en `.dice-label` con `white-space: nowrap; text-align: center;` para garantizar que la etiqueta de los dados 3D permanezca siempre en una sola línea equilibrada sin descuadrar la bandeja de dados en ningún viewport ni idioma.
