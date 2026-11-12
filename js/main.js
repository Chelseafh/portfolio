/**
 * Lógica principal, narrativa e interactividad multi-universo del portafolio
 * de Chelsea Fernández Hernández.
 *
 * Vanilla JS sin dependencias externas (compatible con http:// y file://).
 */
(function () {
  "use strict";

  const PORTFOLIO = window.PORTFOLIO_DATA || {};
  const PROFILE = PORTFOLIO.profile || {};
  const PILLARS = PORTFOLIO.pillars || {};
  const FRIEREN_PILLAR = PILLARS.frieren || {};
  const ONEPIECE_PILLAR = PILLARS.onepiece || {};
  const PROJECTS = Array.isArray(PORTFOLIO.projects) ? PORTFOLIO.projects : [];
  const QUOTES = Array.isArray(PORTFOLIO.quotes) ? PORTFOLIO.quotes : [];
  const SKILL_GROUPS = Array.isArray(PORTFOLIO.skills) ? PORTFOLIO.skills : [];

  const STORAGE_KEY_ANIME = "chelsea_portfolio_anime_v2";
  const DEFAULT_EMAIL = PROFILE.email || "chelseafh2003@gmail.com";
  const DEFAULT_CV_PATH = PROFILE.cvPath || "assets/CV_Chelsea_Fdez_Hdez.pdf";

  const THEME_ZONES = ["frieren", "avatar", "onepiece", "contact"];
  const THEME_META_COLOR = {
    frieren: "#FBF7EC",
    avatar: "#D9ECF5",
    onepiece: "#CFE9EF",
    contact: "#FBF3E4"
  };

  const FALLBACK_SPELLS = [
    "Las vidas humanas pasan en un suspiro; merece la pena detenerse para conocer de verdad a quienes caminan a tu lado.",
    "Hechizo de sobremesa tranquila: convertir los pequeños momentos cotidianos en recuerdos que sigan brillando años después.",
    "No toda magia sirve para combatir; los hechizos más valiosos hacen aparecer flores, templan el frío o iluminan una tarde sencilla.",
    "El viaje no acaba cuando derrotas al Rey Demonio: lo mejor empieza cuando aprendes a mirar el camino con la calma que antes no tenías.",
    "Cada conversación con los tuyos, como aquellos diez años junto a Himmel, Heiter y Eisen, vale más que cualquier grimorio antiguo.",
    "Coleccionar pequeños hechizos sin utilidad práctica recuerda que vivir no es tachar metas, sino saborear el trayecto."
  ];

  const SPELLS =
    Array.isArray(FRIEREN_PILLAR.spells) && FRIEREN_PILLAR.spells.length
      ? FRIEREN_PILLAR.spells
      : FALLBACK_SPELLS;

  const FALLBACK_NAKAMA_EGGS = {
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
  };

  const RAW_NAKAMA_EGGS = ONEPIECE_PILLAR.nakamaEasterEggs || {};
  const NAKAMA_EGGS = {
    brook:
      Array.isArray(RAW_NAKAMA_EGGS.brook) && RAW_NAKAMA_EGGS.brook.length
        ? RAW_NAKAMA_EGGS.brook
        : FALLBACK_NAKAMA_EGGS.brook,
    robin:
      Array.isArray(RAW_NAKAMA_EGGS.robin) && RAW_NAKAMA_EGGS.robin.length
        ? RAW_NAKAMA_EGGS.robin
        : FALLBACK_NAKAMA_EGGS.robin
  };

  const LAYER_LABELS = {
    cliente: "Cliente",
    web: "Web",
    api: "API",
    ia: "IA",
    datos: "Datos",
    infra: "Infra"
  };

  const TECH_SYNONYMS = {
    "fastapi": ["fastapi", "api-servidor", "api-core"],
    "docker compose": ["docker compose", "docker"],
    "yolo": ["yolo", "yolov8", "onnx", "opencv", "vision artificial"],
    "faster-whisper": ["faster-whisper", "whisper", "stt"],
    "ollama": ["ollama", "qwen", "llm"],
    "redis": ["redis", "aof"],
    "asterisk": ["asterisk", "pjsip", "sip", "voip"],
    "aws lambda": ["aws lambda", "lambda", "aws rds", "serverless"],
    "aws rds": ["aws rds", "aws lambda", "mysql", "serverless"],
    "redes sip": ["redes sip", "sip", "pjsip", "asterisk", "wireshark"],
    "festival tts": ["festival tts", "tts"],
    "websockets": ["websocket", "websockets", "socketio", "socket.io"],
    "multithreading": ["multithreading", "concurrencia", "async"],
    "bash": ["bash", "linux", "ubuntu", "systemd", "cron"],
    "linux": ["linux", "ubuntu", "systemd", "docker"],
    "nginx": ["nginx", "reverse proxy", "tls"],
    "mariadb": ["mariadb", "odbc", "cdr"],
    "postgresql": ["postgresql", "postgres"]
  };

  const state = {
    theme: "frieren",
    animeOn: true,
    soundOn: false,
    filters: {
      search: "",
      category: "all",
      skillLabel: "",
      skillProjectIds: null
    },
    arch: {
      projectId: PROJECTS[0] ? PROJECTS[0].id : "controlador-cervantes",
      selectedNodeId: "api-servidor",
      activeLayer: null
    },
    quoteIndex: -1,
    spellIndex: -1,
    brookEggIndex: -1,
    robinEggIndex: -1
  };

  let activeModal = null;
  let lastFocusedEl = null;
  let toastTimer = null;
  const classTimers = Object.create(null);

  /* ==================== UTILIDADES ==================== */

  function normalizeText(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeRegex(value) {
    return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function safeUrl(rawUrl) {
    const url = String(rawUrl || "").trim();
    if (!url) return "#";
    if (/^(https?:|mailto:|\/|\.|assets\/|#)/i.test(url)) return url;
    return "#";
  }

  function readStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (_err) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (_err) {
      /* Almacenamiento restringido; degradación silenciosa */
    }
  }

  function reducedMotionQuery() {
    return window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  }

  function prefersReducedMotion() {
    const mq = reducedMotionQuery();
    return Boolean(mq && mq.matches);
  }

  function hasFinePointer() {
    return Boolean(window.matchMedia && window.matchMedia("(pointer: fine)").matches);
  }

  function canAnimate() {
    return state.animeOn && !prefersReducedMotion();
  }

  function showToast(message) {
    const toast = document.getElementById("siteToast");
    if (!toast || !message) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  }

  function restartCssClass(el, className, durationMs, timerKey) {
    if (!el) return;
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
    if (timerKey) {
      clearTimeout(classTimers[timerKey]);
      classTimers[timerKey] = window.setTimeout(() => el.classList.remove(className), durationMs);
    } else {
      window.setTimeout(() => el.classList.remove(className), durationMs);
    }
  }

  function getProjectById(projectId) {
    return PROJECTS.find((p) => p.id === projectId) || PROJECTS[0] || null;
  }

  /* ==================== MOTOR CANVAS #FX MULTI-UNIVERSO ==================== */

  const fxEngine = (function createFxEngine() {
    let canvas = null;
    let ctx = null;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = 0;
    let ambientParticles = [];
    let transientParticles = [];
    let lastTrailTime = 0;
    let lastTrailX = -999;
    let lastTrailY = -999;

    const MAX_AMBIENT = 40;
    const MAX_TRANSIENT = 85;

    function randomBetween(min, max) {
      return min + Math.random() * (max - min);
    }

    function pick(list) {
      return list[Math.floor(Math.random() * list.length)];
    }

    function initCanvas() {
      canvas = document.getElementById("fx");
      if (!canvas || !canvas.getContext) return false;
      ctx = canvas.getContext("2d");
      return Boolean(ctx);
    }

    function resize() {
      if (!canvas || !ctx) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(window.innerWidth || document.documentElement.clientWidth || 320, 320);
      height = Math.max(window.innerHeight || document.documentElement.clientHeight || 320, 320);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function buildAmbientParticle(zone, seedY) {
      const yPos = typeof seedY === "number" ? seedY : randomBetween(0, height);
      if (zone === "frieren") {
        const isLeaf = Math.random() < 0.34;
        if (isLeaf) {
          return {
            zone,
            kind: "leaf",
            x: randomBetween(0, width),
            y: yPos,
            vx: randomBetween(-0.22, 0.28),
            vy: randomBetween(0.18, 0.45),
            size: randomBetween(6.5, 11.5),
            rot: randomBetween(0, Math.PI * 2),
            vRot: randomBetween(-0.015, 0.015),
            phase: randomBetween(0, Math.PI * 2),
            alpha: randomBetween(0.36, 0.62),
            color: pick(["125,158,119", "149,180,138", "209,176,98", "102,138,110"]),
            vein: "244,249,240"
          };
        }
        return {
          zone,
          kind: "mote",
          x: randomBetween(0, width),
          y: yPos,
          vx: randomBetween(-0.14, 0.16),
          vy: randomBetween(-0.34, -0.1),
          size: randomBetween(1.8, 4.2),
          phase: randomBetween(0, Math.PI * 2),
          alpha: randomBetween(0.28, 0.66),
          color: pick(["242,207,122", "227,185,84", "255,248,224"])
        };
      }

      if (zone === "avatar") {
        const isStream = Math.random() < 0.32;
        if (isStream) {
          return {
            zone,
            kind: "stream",
            x: randomBetween(-140, width),
            y: yPos,
            vx: randomBetween(0.7, 1.45),
            vy: randomBetween(-0.08, 0.08),
            length: randomBetween(55, 115),
            amp: randomBetween(4, 10),
            phase: randomBetween(0, Math.PI * 2),
            alpha: randomBetween(0.22, 0.45),
            color: pick(["127,176,200", "175,202,214", "255,253,248"])
          };
        }
        return {
          zone,
          kind: "mote",
          x: randomBetween(0, width),
          y: yPos,
          vx: randomBetween(0.28, 0.65),
          vy: randomBetween(-0.22, 0.18),
          size: randomBetween(2, 4),
          phase: randomBetween(0, Math.PI * 2),
          alpha: randomBetween(0.25, 0.56),
          color: pick(["255,253,248", "175,202,214", "201,162,75"])
        };
      }

      if (zone === "onepiece") {
        const roll = Math.random();
        if (roll < 0.48) {
          return {
            zone,
            kind: "bubble",
            x: randomBetween(0, width),
            y: yPos,
            vx: randomBetween(-0.18, 0.18),
            vy: randomBetween(-0.62, -0.24),
            size: randomBetween(3.5, 9.5),
            phase: randomBetween(0, Math.PI * 2),
            alpha: randomBetween(0.26, 0.54),
            color: pick(["137,195,212", "185,220,231", "255,253,247"])
          };
        }
        if (roll < 0.66) {
          return {
            zone,
            kind: "ripple",
            x: randomBetween(0, width),
            y: yPos,
            vx: 0,
            vy: 0,
            size: randomBetween(4, 10),
            maxSize: randomBetween(24, 46),
            alpha: randomBetween(0.22, 0.36),
            color: "116,184,205"
          };
        }
        return {
          zone,
          kind: "star",
          x: randomBetween(0, width),
          y: yPos,
          vx: randomBetween(-0.15, 0.15),
          vy: randomBetween(-0.32, -0.08),
          size: randomBetween(3.2, 6.2),
          rot: randomBetween(0, Math.PI),
          vRot: randomBetween(-0.014, 0.014),
          phase: randomBetween(0, Math.PI * 2),
          alpha: randomBetween(0.32, 0.64),
          color: pick(["242,207,122", "255,243,196", "227,185,84"])
        };
      }

      /* contact */
      return {
        zone: "contact",
        kind: "mote",
        x: randomBetween(0, width),
        y: yPos,
        vx: randomBetween(-0.14, 0.16),
        vy: randomBetween(-0.4, -0.14),
        size: randomBetween(2, 4.6),
        phase: randomBetween(0, Math.PI * 2),
        alpha: randomBetween(0.26, 0.58),
        color: pick(["242,207,122", "227,185,84", "218,128,96", "255,248,224"])
      };
    }

    function seedZone(zone) {
      ambientParticles = [];
      for (let i = 0; i < MAX_AMBIENT; i++) {
        ambientParticles.push(buildAmbientParticle(zone));
      }
    }

    function setZone(nextZone) {
      if (!width || !height) return;
      seedZone(nextZone);
    }

    function pushTransient(particle) {
      if (transientParticles.length >= MAX_TRANSIENT) {
        transientParticles.shift();
      }
      transientParticles.push(particle);
    }

    const ELEMENT_BURST_PALETTES = {
      "element-aire": {
        kind: (i) => (i % 3 === 0 ? "star" : "mote"),
        colors: ["255,253,248", "175,202,214", "127,176,200"],
        ripple: "127,176,200"
      },
      "element-agua": {
        kind: (i) => (i % 2 === 0 ? "bubble" : "mote"),
        colors: ["127,176,200", "137,195,212", "228,242,246"],
        ripple: "137,195,212"
      },
      "element-tierra": {
        kind: (i) => (i % 2 === 0 ? "leaf" : "mote"),
        colors: ["125,158,119", "149,180,138", "201,162,75"],
        ripple: "125,158,119"
      },
      "element-fuego": {
        kind: (i) => (i % 2 === 0 ? "star" : "mote"),
        colors: ["232,134,66", "242,207,122", "200,85,61"],
        ripple: "232,134,66"
      }
    };

    function spawnBurst(originX, originY, options) {
      if (!canAnimate() || !ctx) return;
      const opts = options || {};
      const count = opts.count || 26;
      const mode = opts.mode || state.theme;
      const spreadSpeed = opts.speed || 2.8;
      const elementPalette = ELEMENT_BURST_PALETTES[mode] || null;

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + randomBetween(-0.22, 0.22);
        const speed = randomBetween(0.9, spreadSpeed);
        let kind = "star";
        let color = "242,207,122";
        let size = randomBetween(3.2, 6.4);

        if (elementPalette) {
          kind = elementPalette.kind(i);
          color = pick(elementPalette.colors);
          size = kind === "leaf" ? randomBetween(6, 9) : randomBetween(3, 6.2);
        } else if (mode === "frieren") {
          kind = i % 5 === 0 ? "leaf" : i % 2 === 0 ? "star" : "mote";
          color = kind === "leaf"
            ? pick(["125,158,119", "149,180,138", "209,176,98"])
            : pick(["242,207,122", "255,243,196", "227,185,84"]);
          size = kind === "leaf" ? randomBetween(6, 9.5) : randomBetween(2.8, 6.2);
        } else if (mode === "tea" || mode === "avatar") {
          kind = i % 4 === 0 ? "star" : "mote";
          color = pick(["127,176,200", "255,253,248", "201,162,75", "149,180,138"]);
        } else if (mode === "onepiece") {
          kind = i % 3 === 0 ? "bubble" : "star";
          color = kind === "bubble"
            ? pick(["137,195,212", "255,253,247"])
            : pick(["242,207,122", "255,243,196", "200,85,61"]);
        } else if (mode === "brook") {
          kind = i % 3 === 0 ? "note" : i % 2 === 0 ? "star" : "mote";
          color = pick(["242,207,122", "255,243,196", "227,185,84", "245,236,204"]);
          size = kind === "note" ? randomBetween(5.4, 8.6) : randomBetween(3.2, 6.2);
        } else if (mode === "robin") {
          kind = i % 2 === 0 ? "petal" : i % 3 === 0 ? "star" : "mote";
          color = pick(["200,187,224", "225,212,240", "242,226,232", "245,239,248"]);
          size = kind === "petal" ? randomBetween(5.4, 8.8) : randomBetween(2.8, 5.4);
        }

        const isGentleRise = mode === "tea" || mode === "robin" || mode === "element-aire";
        pushTransient({
          kind,
          x: originX + randomBetween(-4, 4),
          y: originY + randomBetween(-4, 4),
          vx: Math.cos(angle) * speed * (mode === "robin" ? 0.85 : 1),
          vy:
            Math.sin(angle) * speed * (mode === "robin" ? 0.72 : 1) -
            (mode === "tea" ? 1.15 : mode === "robin" || mode === "element-aire" ? 0.65 : 0.35),
          gravity: mode === "tea" ? -0.025 : mode === "robin" || mode === "element-aire" ? -0.008 : 0.028,
          drag: 0.965,
          size,
          rot: randomBetween(0, Math.PI * 2),
          vRot: randomBetween(-0.08, 0.08),
          life: 1,
          decay: isGentleRise ? randomBetween(0.011, 0.02) : randomBetween(0.012, 0.024),
          color,
          vein: "244,249,240"
        });
      }

      if (opts.withRipple) {
        pushTransient({
          kind: "ripple",
          x: originX,
          y: originY,
          vx: 0,
          vy: 0,
          size: 10,
          maxSize: 56,
          life: 1,
          decay: 0.022,
          color: elementPalette
            ? elementPalette.ripple
            : mode === "robin"
              ? "200,187,224"
              : mode === "onepiece"
                ? "137,195,212"
                : "227,185,84"
        });
      }
    }

    function spawnPointerMicroTrail(x, y) {
      if (!canAnimate() || !hasFinePointer() || !ctx) return;
      const now = performance.now();
      const dist = Math.hypot(x - lastTrailX, y - lastTrailY);
      if (now - lastTrailTime < 44 || dist < 12) return;
      lastTrailTime = now;
      lastTrailX = x;
      lastTrailY = y;

      const palette = {
        frieren: { kind: "star", colors: ["242,207,122", "149,180,138", "255,248,224"] },
        avatar: { kind: "mote", colors: ["127,176,200", "255,253,248", "201,162,75"] },
        onepiece: { kind: Math.random() < 0.55 ? "bubble" : "star", colors: ["137,195,212", "242,207,122", "255,243,196"] },
        contact: { kind: "mote", colors: ["242,207,122", "218,128,96", "255,248,224"] }
      }[state.theme] || { kind: "mote", colors: ["242,207,122"] };

      pushTransient({
        kind: palette.kind,
        x: x + randomBetween(-4, 4),
        y: y + randomBetween(-4, 4),
        vx: randomBetween(-0.45, 0.45),
        vy: randomBetween(-0.85, -0.2),
        gravity: 0.008,
        drag: 0.98,
        size: randomBetween(2.2, 4.4),
        rot: randomBetween(0, Math.PI),
        vRot: randomBetween(-0.04, 0.04),
        life: 0.9,
        decay: 0.028,
        color: pick(palette.colors)
      });
    }

    function drawLeaf(p, alpha) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.beginPath();
      ctx.moveTo(0, p.size * 0.75);
      ctx.bezierCurveTo(-p.size * 0.68, p.size * 0.25, -p.size * 0.55, -p.size * 0.5, 0, -p.size * 0.85);
      ctx.bezierCurveTo(p.size * 0.55, -p.size * 0.5, p.size * 0.68, p.size * 0.25, 0, p.size * 0.75);
      ctx.fillStyle = "rgba(" + p.color + "," + alpha.toFixed(3) + ")";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, p.size * 0.68);
      ctx.lineTo(0, -p.size * 0.62);
      ctx.strokeStyle = "rgba(" + (p.vein || "244,249,240") + "," + (alpha * 0.78).toFixed(3) + ")";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    }

    function drawMote(p, alpha) {
      const r = p.size;
      const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 2.4);
      glow.addColorStop(0, "rgba(" + p.color + "," + alpha.toFixed(3) + ")");
      glow.addColorStop(1, "rgba(" + p.color + ",0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r * 2.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(255,253,247," + Math.min(1, alpha * 1.15).toFixed(3) + ")";
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(0.8, r * 0.42), 0, Math.PI * 2);
      ctx.fill();
    }

    function drawStar(p, alpha) {
      const r = p.size;
      const inner = r * 0.34;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot || 0);
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const radius = i % 2 === 0 ? r : inner;
        const a = (i * Math.PI) / 4;
        if (i === 0) ctx.moveTo(Math.cos(a) * radius, Math.sin(a) * radius);
        else ctx.lineTo(Math.cos(a) * radius, Math.sin(a) * radius);
      }
      ctx.closePath();
      ctx.fillStyle = "rgba(" + p.color + "," + alpha.toFixed(3) + ")";
      ctx.fill();
      ctx.restore();
    }

    function drawBubble(p, alpha) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,253,247," + (alpha * 0.24).toFixed(3) + ")";
      ctx.fill();
      ctx.strokeStyle = "rgba(" + p.color + "," + (alpha * 0.85).toFixed(3) + ")";
      ctx.lineWidth = 1.1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(p.x - p.size * 0.32, p.y - p.size * 0.32, Math.max(1, p.size * 0.24), 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255," + Math.min(1, alpha * 1.1).toFixed(3) + ")";
      ctx.fill();
      ctx.restore();
    }

    function drawStream(p, alpha, timeSec) {
      ctx.save();
      ctx.beginPath();
      const segs = 12;
      for (let i = 0; i <= segs; i++) {
        const t = i / segs;
        const px = p.x + t * p.length;
        const py = p.y + Math.sin(t * Math.PI * 2 + p.phase + timeSec * 1.4) * p.amp * Math.sin(t * Math.PI);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = "rgba(" + p.color + "," + alpha.toFixed(3) + ")";
      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.restore();
    }

    function drawRipple(p, alpha) {
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, p.size, p.size * 0.45, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(" + p.color + "," + alpha.toFixed(3) + ")";
      ctx.lineWidth = 1.25;
      ctx.stroke();
      ctx.restore();
    }

    function drawNote(p, alpha) {
      const s = p.size;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot || 0) * 0.25);

      ctx.fillStyle = "rgba(" + p.color + "," + alpha.toFixed(3) + ")";
      ctx.strokeStyle = "rgba(" + p.color + "," + Math.min(1, alpha * 1.1).toFixed(3) + ")";
      ctx.lineWidth = 1.45;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.beginPath();
      ctx.ellipse(-s * 0.24, s * 0.38, s * 0.36, s * 0.25, -0.35, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(s * 0.08, s * 0.34);
      ctx.lineTo(s * 0.08, -s * 0.72);
      ctx.quadraticCurveTo(s * 0.65, -s * 0.56, s * 0.6, -s * 0.16);
      ctx.stroke();
      ctx.restore();
    }

    function drawPetal(p, alpha) {
      const s = p.size;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot || 0);
      ctx.beginPath();
      ctx.moveTo(0, s * 0.68);
      ctx.bezierCurveTo(-s * 0.78, s * 0.22, -s * 0.54, -s * 0.56, 0, -s * 0.8);
      ctx.bezierCurveTo(s * 0.54, -s * 0.56, s * 0.78, s * 0.22, 0, s * 0.68);
      ctx.fillStyle = "rgba(" + p.color + "," + (alpha * 0.92).toFixed(3) + ")";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,253,248," + (alpha * 0.55).toFixed(3) + ")";
      ctx.lineWidth = 0.85;
      ctx.stroke();
      ctx.restore();
    }

    function renderParticle(p, alpha, timeSec) {
      if (p.kind === "leaf") drawLeaf(p, alpha);
      else if (p.kind === "bubble") drawBubble(p, alpha);
      else if (p.kind === "star") drawStar(p, alpha);
      else if (p.kind === "stream") drawStream(p, alpha, timeSec);
      else if (p.kind === "ripple") drawRipple(p, alpha);
      else if (p.kind === "note") drawNote(p, alpha);
      else if (p.kind === "petal") drawPetal(p, alpha);
      else drawMote(p, alpha);
    }

    function step(now) {
      if (!canAnimate() || !ctx || document.hidden) {
        rafId = 0;
        return;
      }

      const timeSec = now * 0.001;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < ambientParticles.length; i++) {
        const p = ambientParticles[i];
        if (p.kind === "ripple") {
          p.size += 0.32;
          const progress = p.size / p.maxSize;
          if (progress >= 1) {
            ambientParticles[i] = buildAmbientParticle(state.theme, randomBetween(0, height));
            continue;
          }
          renderParticle(p, p.alpha * (1 - progress), timeSec);
          continue;
        }

        const sway = Math.sin(timeSec * 1.3 + (p.phase || 0)) * (p.kind === "leaf" ? 0.32 : 0.18);
        p.x += (p.vx || 0) + sway;
        p.y += p.vy || 0;
        if (p.vRot) p.rot += p.vRot;

        const pad = p.kind === "stream" ? (p.length + 24) : 28;
        if (p.x > width + pad) p.x = -pad;
        else if (p.x < -pad) p.x = width + pad;

        if (p.y < -pad) p.y = height + pad;
        else if (p.y > height + pad) p.y = -pad;

        const pulse = 0.78 + 0.22 * Math.sin(timeSec * 2 + (p.phase || 0));
        renderParticle(p, p.alpha * pulse, timeSec);
      }

      for (let i = transientParticles.length - 1; i >= 0; i--) {
        const t = transientParticles[i];
        t.life -= t.decay;
        if (t.life <= 0) {
          transientParticles.splice(i, 1);
          continue;
        }
        if (t.kind === "ripple") {
          t.size += 1.45;
          renderParticle(t, t.life * 0.62, timeSec);
          continue;
        }
        t.vx *= t.drag || 0.97;
        t.vy = t.vy * (t.drag || 0.97) + (t.gravity || 0);
        t.x += t.vx;
        t.y += t.vy;
        if (t.vRot) t.rot += t.vRot;
        renderParticle(t, Math.max(0, t.life * 0.85), timeSec);
      }

      rafId = window.requestAnimationFrame(step);
    }

    function start() {
      if (!ctx) return;
      if (ambientParticles.length === 0) seedZone(state.theme);
      if (!rafId && canAnimate() && !document.hidden) {
        rafId = window.requestAnimationFrame(step);
      }
    }

    function stop() {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
      if (ctx) {
        ctx.clearRect(0, 0, width, height);
      }
    }

    function setup() {
      if (!initCanvas()) return;
      resize();
      seedZone(state.theme);

      window.addEventListener("resize", resize, { passive: true });
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) stop();
        else if (canAnimate()) start();
      });

      if (hasFinePointer()) {
        window.addEventListener(
          "pointermove",
          (e) => spawnPointerMicroTrail(e.clientX, e.clientY),
          { passive: true }
        );
      }

      if (canAnimate()) start();
    }

    function burstAtElement(el, options) {
      if (!el || typeof el.getBoundingClientRect !== "function") return;
      const rect = el.getBoundingClientRect();
      spawnBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, options);
    }

    return {
      setup,
      start,
      stop,
      setZone,
      spawnBurst,
      burstAtElement
    };
  })();

  /* ==================== PAISAJE SONORO WEB AUDIO ==================== */

  const soundscape = (function createSoundscape() {
    let audioCtx = null;
    let masterGain = null;
    let pulseTimer = null;
    let padOscA = null;
    let padOscB = null;
    let padGain = null;
    let interludeTimers = [];
    let lastAudioZone = null;
    let noteStep = 0;

    const FREQS = {
      frieren: [293.66, 369.99, 440.0, 493.88, 587.33, 659.25], // D mayor pentatónica cálida
      avatar: [261.63, 293.66, 349.23, 392.0, 440.0, 523.25], // Escala serena de aire
      onepiece: [293.66, 369.99, 440.0, 493.88, 587.33, 659.25], // D mayor aventurera
      contact: [220.0, 277.18, 329.63, 392.0, 440.0, 493.88] // Calidez nocturna
    };

    const ZONE_PADS = {
      frieren: { oscA: 146.83, oscB: 220.0, gain: 0.032 },
      avatar: { oscA: 174.61, oscB: 261.63, gain: 0.024 },
      onepiece: { oscA: 164.81, oscB: 246.94, gain: 0.028 },
      contact: { oscA: 110.0, oscB: 164.81, gain: 0.034 }
    };

    const ONEPIECE_MOTIFS = {
      brook: [
        { delay: 0, freq: 587.33, dur: 0.34, peak: 0.13, wave: "triangle" },
        { delay: 135, freq: 659.25, dur: 0.28, peak: 0.12, wave: "triangle" },
        { delay: 250, freq: 739.99, dur: 0.32, peak: 0.13, wave: "triangle" },
        { delay: 385, freq: 880.0, dur: 0.42, peak: 0.14, wave: "triangle" },
        { delay: 540, freq: 739.99, dur: 0.28, peak: 0.12, wave: "triangle" },
        { delay: 660, freq: 659.25, dur: 0.28, peak: 0.12, wave: "triangle" },
        { delay: 785, freq: 587.33, dur: 0.55, peak: 0.13, wave: "sine" }
      ],
      hat: [
        { delay: 0, freq: 392.0, dur: 0.28, peak: 0.12, wave: "triangle" },
        { delay: 110, freq: 493.88, dur: 0.28, peak: 0.12, wave: "triangle" },
        { delay: 225, freq: 587.33, dur: 0.32, peak: 0.13, wave: "triangle" },
        { delay: 350, freq: 783.99, dur: 0.55, peak: 0.14, wave: "sine" }
      ],
      voyage: [
        { delay: 0, freq: 440.0, dur: 0.38, peak: 0.1, wave: "triangle" },
        { delay: 150, freq: 587.33, dur: 0.34, peak: 0.11, wave: "triangle" },
        { delay: 295, freq: 739.99, dur: 0.4, peak: 0.11, wave: "triangle" },
        { delay: 455, freq: 880.0, dur: 0.58, peak: 0.1, wave: "sine" }
      ]
    };

    function clearInterludeTimers() {
      for (let i = 0; i < interludeTimers.length; i++) {
        window.clearTimeout(interludeTimers[i]);
      }
      interludeTimers = [];
    }

    function ensureContext() {
      if (audioCtx) return audioCtx;
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      try {
        audioCtx = new Ctx();
        masterGain = audioCtx.createGain();
        masterGain.gain.value = 0.0001;
        masterGain.connect(audioCtx.destination);
        return audioCtx;
      } catch (_err) {
        audioCtx = null;
        return null;
      }
    }

    function playPluckedNote(freq, duration, peak, waveType) {
      if (!audioCtx || !masterGain || !state.soundOn) return;
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const overtone = audioCtx.createOscillator();
      const noteGain = audioCtx.createGain();

      osc.type = waveType || "triangle";
      osc.frequency.setValueAtTime(freq, now);
      overtone.type = "sine";
      overtone.frequency.setValueAtTime(freq * 2, now);

      const overtoneGain = audioCtx.createGain();
      overtoneGain.gain.setValueAtTime(0.16, now);

      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.linearRampToValueAtTime(peak || 0.14, now + 0.04);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(noteGain);
      overtone.connect(overtoneGain);
      overtoneGain.connect(noteGain);
      noteGain.connect(masterGain);

      osc.start(now);
      overtone.start(now);
      osc.stop(now + duration + 0.08);
      overtone.stop(now + duration + 0.08);
    }

    function scheduleNoteSequence(sequence) {
      if (!state.soundOn || !audioCtx || !Array.isArray(sequence)) return;
      clearInterludeTimers();
      sequence.forEach((step) => {
        if (!step.delay) {
          playPluckedNote(step.freq, step.dur, step.peak, step.wave);
          return;
        }
        const timerId = window.setTimeout(() => {
          if (!state.soundOn || !audioCtx || document.hidden) return;
          playPluckedNote(step.freq, step.dur, step.peak, step.wave);
        }, step.delay);
        interludeTimers.push(timerId);
      });
    }

    function playOnePieceInterlude(kind) {
      if (!state.soundOn || !audioCtx) return;
      const motif = ONEPIECE_MOTIFS[kind] || ONEPIECE_MOTIFS.voyage;
      scheduleNoteSequence(motif);
    }

    function tuneToZone(zone) {
      if (!audioCtx || !state.soundOn || !padGain || !padOscA || !padOscB) return;
      const now = audioCtx.currentTime;
      const config = ZONE_PADS[zone] || ZONE_PADS.frieren;
      const enteredOnePiece = zone === "onepiece" && lastAudioZone !== "onepiece";
      lastAudioZone = zone;

      padGain.gain.setTargetAtTime(config.gain, now, 0.55);
      padOscA.frequency.setTargetAtTime(config.oscA, now, 0.6);
      padOscB.frequency.setTargetAtTime(config.oscB, now, 0.6);

      if (enteredOnePiece) {
        playOnePieceInterlude("voyage");
      }
    }

    function scheduleMelodyPulse() {
      clearInterval(pulseTimer);
      pulseTimer = window.setInterval(() => {
        if (!state.soundOn || !audioCtx || document.hidden) return;
        if (state.theme === "onepiece" && noteStep > 0 && noteStep % 4 === 0) {
          noteStep++;
          playOnePieceInterlude("voyage");
          return;
        }
        const scale = FREQS[state.theme] || FREQS.frieren;
        const idx = (noteStep * 2 + Math.floor(Math.random() * 2)) % scale.length;
        noteStep++;
        const wave = state.theme === "avatar" ? "sine" : "triangle";
        const dur = state.theme === "frieren" ? 2.4 : state.theme === "avatar" ? 2.2 : 1.9;
        playPluckedNote(scale[idx], dur, 0.11, wave);
      }, 1900);
    }

    function syncButtons() {
      const buttons = document.querySelectorAll(".js-sound");
      buttons.forEach((btn) => {
        btn.setAttribute("aria-pressed", state.soundOn ? "true" : "false");
        btn.classList.toggle("is-active", state.soundOn);
        btn.setAttribute(
          "aria-label",
          state.soundOn ? "Silenciar sonido ambiente" : "Activar sonido ambiente"
        );
      });
    }

    function startNodes() {
      const ctx = ensureContext();
      if (!ctx || !masterGain) {
        showToast("El navegador no permite sintetizador de audio en este entorno.");
        state.soundOn = false;
        syncButtons();
        return;
      }

      if (ctx.state === "suspended" && ctx.resume) {
        ctx.resume().catch(() => {});
      }

      if (!padOscA) {
        padOscA = ctx.createOscillator();
        padOscB = ctx.createOscillator();
        padOscA.type = "sine";
        padOscB.type = "sine";
        padOscA.frequency.value = 146.83;
        padOscB.frequency.value = 220.0;

        padGain = ctx.createGain();
        padGain.gain.value = 0.032;
        padOscA.connect(padGain);
        padOscB.connect(padGain);
        padGain.connect(masterGain);

        padOscA.start();
        padOscB.start();
      }

      const now = ctx.currentTime;
      masterGain.gain.cancelScheduledValues(now);
      masterGain.gain.setValueAtTime(Math.max(0.0001, masterGain.gain.value), now);
      masterGain.gain.linearRampToValueAtTime(0.2, now + 0.65);

      lastAudioZone = null;
      tuneToZone(state.theme);
      scheduleMelodyPulse();
      if (state.theme !== "onepiece") {
        playPluckedNote((FREQS[state.theme] || FREQS.frieren)[0], 2.2, 0.13, "triangle");
      }
    }

    function stopNodes() {
      clearInterval(pulseTimer);
      pulseTimer = null;
      clearInterludeTimers();
      lastAudioZone = null;
      if (audioCtx && masterGain) {
        const now = audioCtx.currentTime;
        masterGain.gain.cancelScheduledValues(now);
        masterGain.gain.setValueAtTime(masterGain.gain.value, now);
        masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.35);
      }
    }

    function toggle() {
      state.soundOn = !state.soundOn;
      syncButtons();
      if (state.soundOn) {
        startNodes();
        showToast("Paisaje sonoro activado · adaptado a cada capítulo.");
      } else {
        stopNodes();
        showToast("Sonido ambiente en silencio.");
      }
    }

    const DTMF_FREQS = {
      "1": [697, 1209],
      "2": [697, 1336],
      "3": [697, 1477],
      "4": [770, 1209],
      "5": [770, 1336],
      "6": [770, 1477],
      "7": [852, 1209],
      "8": [852, 1336],
      "9": [852, 1477],
      "0": [941, 1336],
      "*": [941, 1209],
      "#": [941, 1477]
    };

    const ELEMENT_CHORDS = {
      aire: [
        { delay: 0, freq: 523.25, dur: 0.85, peak: 0.09, wave: "sine" },
        { delay: 75, freq: 659.25, dur: 0.9, peak: 0.085, wave: "sine" },
        { delay: 150, freq: 783.99, dur: 1.05, peak: 0.08, wave: "sine" }
      ],
      agua: [
        { delay: 0, freq: 392.0, dur: 0.9, peak: 0.09, wave: "sine" },
        { delay: 90, freq: 493.88, dur: 0.95, peak: 0.085, wave: "sine" },
        { delay: 180, freq: 587.33, dur: 1.1, peak: 0.08, wave: "sine" }
      ],
      tierra: [
        { delay: 0, freq: 261.63, dur: 0.85, peak: 0.095, wave: "triangle" },
        { delay: 80, freq: 329.63, dur: 0.9, peak: 0.085, wave: "sine" },
        { delay: 165, freq: 392.0, dur: 1.0, peak: 0.08, wave: "sine" }
      ],
      fuego: [
        { delay: 0, freq: 440.0, dur: 0.72, peak: 0.095, wave: "triangle" },
        { delay: 70, freq: 554.37, dur: 0.78, peak: 0.09, wave: "triangle" },
        { delay: 140, freq: 659.25, dur: 0.85, peak: 0.085, wave: "sine" },
        { delay: 215, freq: 880.0, dur: 0.95, peak: 0.075, wave: "sine" }
      ]
    };

    const TOY_SEQUENCES = {
      vr: [
        { delay: 0, freq: 523.25, dur: 0.28, peak: 0.09, wave: "sine" },
        { delay: 90, freq: 783.99, dur: 0.36, peak: 0.09, wave: "sine" }
      ],
      slot: [{ delay: 0, freq: 659.25, dur: 0.18, peak: 0.075, wave: "sine" }],
      scan: [
        { delay: 0, freq: 440.0, dur: 0.22, peak: 0.08, wave: "sine" },
        { delay: 75, freq: 587.33, dur: 0.22, peak: 0.08, wave: "sine" },
        { delay: 150, freq: 880.0, dur: 0.32, peak: 0.085, wave: "sine" }
      ],
      ivr: [
        { delay: 0, freq: 440.0, dur: 0.3, peak: 0.09, wave: "sine" },
        { delay: 95, freq: 523.25, dur: 0.3, peak: 0.085, wave: "sine" },
        { delay: 190, freq: 659.25, dur: 0.45, peak: 0.085, wave: "sine" }
      ],
      hang: [
        { delay: 0, freq: 493.88, dur: 0.22, peak: 0.085, wave: "sine" },
        { delay: 110, freq: 392.0, dur: 0.32, peak: 0.08, wave: "sine" }
      ],
      chat: [
        { delay: 0, freq: 587.33, dur: 0.16, peak: 0.08, wave: "sine" },
        { delay: 70, freq: 783.99, dur: 0.22, peak: 0.075, wave: "sine" }
      ]
    };

    function playDtmfPair(freqLow, freqHigh) {
      if (!audioCtx || !masterGain || !state.soundOn) return;
      const now = audioCtx.currentTime;
      const toneGain = audioCtx.createGain();
      const oscLow = audioCtx.createOscillator();
      const oscHigh = audioCtx.createOscillator();

      oscLow.type = "sine";
      oscHigh.type = "sine";
      oscLow.frequency.setValueAtTime(freqLow, now);
      oscHigh.frequency.setValueAtTime(freqHigh, now);

      toneGain.gain.setValueAtTime(0.0001, now);
      toneGain.gain.linearRampToValueAtTime(0.065, now + 0.012);
      toneGain.gain.setValueAtTime(0.065, now + 0.085);
      toneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.115);

      oscLow.connect(toneGain);
      oscHigh.connect(toneGain);
      toneGain.connect(masterGain);

      oscLow.start(now);
      oscHigh.start(now);
      oscLow.stop(now + 0.13);
      oscHigh.stop(now + 0.13);
    }

    function playDtmf(digits) {
      if (!state.soundOn || !audioCtx) return;
      const chars = String(digits || "").split("");
      clearInterludeTimers();
      chars.forEach((ch, idx) => {
        const pair = DTMF_FREQS[ch];
        if (!pair) return;
        const delay = idx * 120;
        if (delay === 0) {
          playDtmfPair(pair[0], pair[1]);
          return;
        }
        const timerId = window.setTimeout(() => {
          if (!state.soundOn || !audioCtx || document.hidden) return;
          playDtmfPair(pair[0], pair[1]);
        }, delay);
        interludeTimers.push(timerId);
      });
    }

    function playElementChord(elementKey) {
      if (!state.soundOn || !audioCtx) return;
      scheduleNoteSequence(ELEMENT_CHORDS[elementKey] || ELEMENT_CHORDS.aire);
    }

    function playToySound(kind) {
      if (!state.soundOn || !audioCtx) return;
      scheduleNoteSequence(TOY_SEQUENCES[kind] || TOY_SEQUENCES.chat);
    }

    function playChime(kind) {
      if (!state.soundOn || !audioCtx) return;
      if (kind === "brook") {
        playOnePieceInterlude("brook");
      } else if (kind === "hat") {
        playOnePieceInterlude("hat");
      } else if (kind === "dice") {
        scheduleNoteSequence([
          { delay: 0, freq: 523.25, dur: 0.4, peak: 0.095, wave: "sine" },
          { delay: 75, freq: 659.25, dur: 0.45, peak: 0.095, wave: "sine" },
          { delay: 150, freq: 783.99, dur: 0.65, peak: 0.09, wave: "triangle" }
        ]);
      } else if (kind === "robin") {
        scheduleNoteSequence([
          { delay: 0, freq: 440.0, dur: 1.15, peak: 0.11, wave: "sine" },
          { delay: 115, freq: 554.37, dur: 1.2, peak: 0.1, wave: "sine" },
          { delay: 230, freq: 659.25, dur: 1.35, peak: 0.1, wave: "sine" },
          { delay: 350, freq: 830.61, dur: 1.5, peak: 0.085, wave: "sine" }
        ]);
      } else if (kind === "staff") {
        scheduleNoteSequence([
          { delay: 0, freq: 587.33, dur: 1.5, peak: 0.13, wave: "sine" },
          { delay: 110, freq: 880.0, dur: 1.6, peak: 0.11, wave: "triangle" }
        ]);
      } else if (kind === "tea") {
        scheduleNoteSequence([
          { delay: 0, freq: 392.0, dur: 1.4, peak: 0.12, wave: "sine" },
          { delay: 120, freq: 523.25, dur: 1.5, peak: 0.1, wave: "sine" }
        ]);
      } else {
        playPluckedNote(659.25, 1.2, 0.12, "triangle");
      }
    }

    function setup() {
      const buttons = document.querySelectorAll(".js-sound");
      syncButtons();
      buttons.forEach((btn) => {
        btn.addEventListener("click", toggle);
      });
    }

    return {
      setup,
      tuneToZone,
      playChime,
      playOnePieceInterlude,
      playDtmf,
      playElementChord,
      playToySound,
      stop: stopNodes
    };
  })();

  /* ==================== REVEAL SEGURO + ZONAS + PARALLAX ==================== */

  let revealObserver = null;

  function revealElements(elements) {
    elements.forEach((el) => el.classList.add("in"));
  }

  function revealVisibleNow() {
    const targets = document.querySelectorAll(".rise:not(.in), .gust:not(.in), .card-av:not(.in), .wind-reveal:not(.in)");
    const vh = window.innerHeight || 900;
    targets.forEach((el) => {
      if (el.hidden) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= vh * 0.98) {
        el.classList.add("in");
      }
    });
  }

  function setupRevealAndMotion() {
    const root = document.documentElement;
    const toggleBtn = document.getElementById("animeToggle");
    const saved = readStorage(STORAGE_KEY_ANIME);

    if (prefersReducedMotion()) {
      state.animeOn = false;
    } else if (saved === "off") {
      state.animeOn = false;
    } else {
      state.animeOn = true;
    }

    const targets = Array.from(document.querySelectorAll(".rise, .gust, .card-av, .wind-reveal"));

    function applyMotionMode(persist) {
      const active = canAnimate();
      root.setAttribute("data-anime", active ? "on" : "off");
      if (toggleBtn) {
        toggleBtn.setAttribute("aria-checked", active ? "true" : "false");
      }

      if (active) {
        root.classList.add("js-anim");
        revealVisibleNow();
        fxEngine.start();
      } else {
        root.classList.remove("js-anim");
        revealElements(targets);
        fxEngine.stop();
        const windBg = document.querySelector("#comunidad .wind-bg");
        if (windBg) windBg.style.setProperty("--p", "0");
      }

      if (persist) {
        writeStorage(STORAGE_KEY_ANIME, state.animeOn ? "on" : "off");
      }
    }

    if ("IntersectionObserver" in window && canAnimate()) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -3% 0px" }
      );
      targets.forEach((el) => revealObserver.observe(el));
    } else {
      revealElements(targets);
    }

    applyMotionMode(false);

    // Fallback de seguridad para que ningún bloque quede oculto si falla scroll/IO
    window.setTimeout(() => {
      if (!canAnimate() || window.scrollY > 120) revealVisibleNow();
    }, 350);

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        if (prefersReducedMotion() && !state.animeOn) {
          showToast("Tu sistema tiene «reducir movimiento» activado.");
        }
        state.animeOn = !state.animeOn;
        applyMotionMode(true);
        showToast(
          canAnimate()
            ? "Modo anime interactivo activado."
            : "Modo calma activado (animaciones reducidas)."
        );
      });
    }

    const mq = reducedMotionQuery();
    if (mq && mq.addEventListener) {
      mq.addEventListener("change", () => applyMotionMode(false));
    }
  }

  function applyThemeZone(zone) {
    if (!THEME_ZONES.includes(zone) || state.theme === zone) return;
    state.theme = zone;

    document.documentElement.setAttribute("data-theme", zone);
    const nav = document.querySelector(".nav");
    if (nav) nav.setAttribute("data-theme", zone);

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme && THEME_META_COLOR[zone]) {
      metaTheme.setAttribute("content", THEME_META_COLOR[zone]);
    }

    document.querySelectorAll(".nav nav a[data-zone]").forEach((link) => {
      if (link.getAttribute("data-zone") === zone) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    fxEngine.setZone(zone);
    soundscape.tuneToZone(zone);
  }

  function setupScrollEffects() {
    const zones = Array.from(document.querySelectorAll("[data-theme-zone]"));
    const avatarSection = document.getElementById("comunidad");
    const windBg = avatarSection ? avatarSection.querySelector(".wind-bg") : null;
    const progressBar = document.getElementById("scrollProgressBar");
    let ticking = false;

    function updateScrollProgress() {
      if (!progressBar) return;
      const docEl = document.documentElement;
      const maxScroll = Math.max(0, docEl.scrollHeight - (window.innerHeight || 0));
      const ratio = maxScroll > 0 ? Math.max(0, Math.min(1, window.scrollY / maxScroll)) : 0;
      progressBar.style.width = (ratio * 100).toFixed(2) + "%";
    }

    function updateWindParallax() {
      if (!avatarSection || !windBg) return;
      if (!canAnimate()) {
        windBg.style.setProperty("--p", "0");
        return;
      }
      const rect = avatarSection.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const total = vh + rect.height;
      const raw = total > 0 ? (vh - rect.top) / total : 0;
      const clamped = Math.max(0, Math.min(1, raw));
      windBg.style.setProperty("--p", clamped.toFixed(4));
    }

    function detectActiveThemeZone() {
      if (!zones.length) return;
      const docEl = document.documentElement;
      const nearBottom = window.scrollY + window.innerHeight >= docEl.scrollHeight - 48;
      if (nearBottom) {
        applyThemeZone("contact");
        return;
      }

      const anchorY = (window.innerHeight || 800) * 0.38;
      let activeZone = zones[0].getAttribute("data-theme-zone") || "frieren";
      for (let i = 0; i < zones.length; i++) {
        const rect = zones[i].getBoundingClientRect();
        if (rect.top <= anchorY && rect.bottom >= anchorY) {
          activeZone = zones[i].getAttribute("data-theme-zone") || activeZone;
          break;
        }
        if (rect.top <= anchorY) {
          activeZone = zones[i].getAttribute("data-theme-zone") || activeZone;
        }
      }
      applyThemeZone(activeZone);
    }

    let lastScrollSync = 0;

    function onScrollFrame() {
      ticking = false;
      lastScrollSync = performance.now();
      updateScrollProgress();
      updateWindParallax();
      detectActiveThemeZone();
      revealVisibleNow();
    }

    function requestUpdate() {
      const now = performance.now();
      if (now - lastScrollSync >= 16) {
        onScrollFrame();
      }
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(onScrollFrame);
      }
    }

    if ("IntersectionObserver" in window && zones.length) {
      const zoneIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              detectActiveThemeZone();
            }
          });
        },
        { rootMargin: "-38% 0px -48% 0px", threshold: 0 }
      );
      zones.forEach((z) => zoneIo.observe(z));
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    onScrollFrame();
  }

  /* ==================== INTERACCIONES CAPÍTULOS (BÁCULO, TÉ, SOMBRERO) ==================== */

  function setupChapterInteractions() {
    const staff = document.getElementById("staff");
    const spell = document.getElementById("spell");

    if (staff) {
      staff.addEventListener("click", () => {
        restartCssClass(staff, "cast", 1200, "staff");
        state.spellIndex = (state.spellIndex + 1) % SPELLS.length;
        if (spell) spell.textContent = SPELLS[state.spellIndex];

        const gem = staff.querySelector(".gem") || staff;
        fxEngine.burstAtElement(gem, {
          count: 34,
          mode: "frieren",
          speed: 3.6,
          withRipple: true
        });
        soundscape.playChime("staff");

        if (
          navigator.vibrate &&
          canAnimate() &&
          (!navigator.userActivation || navigator.userActivation.hasBeenActive)
        ) {
          try {
            navigator.vibrate(14);
          } catch (_err) {
            /* Vibración no soportada */
          }
        }
      });
    }

    const hat = document.querySelector("#aventura .hat");
    if (hat) {
      hat.setAttribute("role", "button");
      hat.setAttribute("tabindex", "0");
      hat.setAttribute("aria-label", "Hacer rebotar el sombrero de paja");

      const triggerHatBounce = () => {
        restartCssClass(hat, "is-bouncing", 800, "hat");
        fxEngine.burstAtElement(hat, {
          count: 22,
          mode: "onepiece",
          speed: 2.9,
          withRipple: false
        });
        soundscape.playOnePieceInterlude("hat");
      };

      hat.addEventListener("click", triggerHatBounce);
      hat.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          triggerHatBounce();
        }
      });
    }

    const nextQuoteBtn = document.getElementById("nextQuoteBtn");
    const teaQuoteText = document.getElementById("teaQuoteText");
    const teaQuoteAuthor = document.getElementById("teaQuoteAuthor");
    const teaQuoteSource = document.getElementById("teaQuoteSource");
    const teaCorner = document.querySelector(".tea-corner");

    const stripQuotes = (val) => normalizeText(val).replace(/[«»"'“”]/g, "");

    if (teaQuoteText && QUOTES.length > 0) {
      const initialTeaNorm = stripQuotes(teaQuoteText.textContent);
      const matchedQuoteIdx = QUOTES.findIndex((item) => {
        const qNorm = stripQuotes(item && item.quote);
        return Boolean(qNorm) && (initialTeaNorm.includes(qNorm) || qNorm.includes(initialTeaNorm));
      });
      if (matchedQuoteIdx !== -1) {
        state.quoteIndex = matchedQuoteIdx;
      }
    }

    if (nextQuoteBtn && QUOTES.length > 0) {
      nextQuoteBtn.addEventListener("click", () => {
        let nextIdx = (state.quoteIndex + 1) % QUOTES.length;
        if (QUOTES.length > 1 && teaQuoteText) {
          const currentNorm = stripQuotes(teaQuoteText.textContent);
          const candidateNorm = stripQuotes(QUOTES[nextIdx] && QUOTES[nextIdx].quote);
          if (candidateNorm && currentNorm.includes(candidateNorm)) {
            nextIdx = (nextIdx + 1) % QUOTES.length;
          }
        }
        state.quoteIndex = nextIdx;
        const item = QUOTES[state.quoteIndex];
        if (!item) return;

        if (teaQuoteText) teaQuoteText.textContent = "«" + item.quote + "»";
        if (teaQuoteAuthor) teaQuoteAuthor.textContent = item.author || "Tío Iroh";
        if (teaQuoteSource) teaQuoteSource.textContent = item.source || "";

        if (teaCorner) {
          restartCssClass(teaCorner, "is-pouring", 1450, "tea");
          fxEngine.burstAtElement(nextQuoteBtn, {
            count: 18,
            mode: "tea",
            speed: 2.2,
            withRipple: false
          });
        }
        soundscape.playChime("tea");
      });
    }

    const brookBtn = document.getElementById("brookEggBtn");
    const robinBtn = document.getElementById("robinEggBtn");
    const nakamaBubble = document.getElementById("nakamaEggBubble");
    const nakamaChar = document.getElementById("nakamaEggChar");
    const nakamaQuote = document.getElementById("nakamaEggQuote");

    if (nakamaQuote) {
      const initialEggNorm = normalizeText(nakamaQuote.textContent);
      const brookMatch = NAKAMA_EGGS.brook.findIndex((line) => {
        const norm = normalizeText(line);
        return Boolean(norm) && initialEggNorm.includes(norm);
      });
      if (brookMatch !== -1) {
        state.brookEggIndex = brookMatch;
      } else {
        const robinMatch = NAKAMA_EGGS.robin.findIndex((line) => {
          const norm = normalizeText(line);
          return Boolean(norm) && initialEggNorm.includes(norm);
        });
        if (robinMatch !== -1) state.robinEggIndex = robinMatch;
      }
    }

    function triggerNakamaEgg(who, btnEl) {
      const lines = NAKAMA_EGGS[who] || [];
      if (!lines.length) return;

      const indexKey = who === "robin" ? "robinEggIndex" : "brookEggIndex";
      let nextIdx = (state[indexKey] + 1) % lines.length;
      if (lines.length > 1 && nakamaQuote) {
        const curNorm = normalizeText(nakamaQuote.textContent);
        if (normalizeText(lines[nextIdx]) === curNorm) {
          nextIdx = (nextIdx + 1) % lines.length;
        }
      }
      state[indexKey] = nextIdx;

      if (nakamaChar) {
        nakamaChar.textContent =
          who === "robin"
            ? "Nico Robin · Arqueóloga de Ohara"
            : "Brook · Músico de a bordo · ¡Yohohoho!";
      }
      if (nakamaQuote) {
        nakamaQuote.textContent = lines[nextIdx];
      }

      if (brookBtn) {
        brookBtn.classList.toggle("is-active", who === "brook");
        brookBtn.setAttribute("aria-pressed", who === "brook" ? "true" : "false");
      }
      if (robinBtn) {
        robinBtn.classList.toggle("is-active", who === "robin");
        robinBtn.setAttribute("aria-pressed", who === "robin" ? "true" : "false");
      }

      if (nakamaBubble) {
        nakamaBubble.setAttribute("data-character", who);
        restartCssClass(nakamaBubble, "is-pulsing", 850);
        if (canAnimate() && typeof nakamaBubble.animate === "function") {
          nakamaBubble.animate(
            [
              { transform: "translateY(3px)", opacity: 0.72 },
              { transform: "translateY(0)", opacity: 1 }
            ],
            { duration: 340, easing: "cubic-bezier(.22, 1, .36, 1)" }
          );
        }
      }

      if (btnEl) {
        fxEngine.burstAtElement(btnEl, {
          count: 24,
          mode: who,
          speed: who === "brook" ? 3.1 : 2.4,
          withRipple: true
        });
      }

      if (who === "brook") {
        soundscape.playOnePieceInterlude("brook");
      } else {
        soundscape.playChime("robin");
      }
    }

    if (brookBtn) {
      brookBtn.addEventListener("click", () => triggerNakamaEgg("brook", brookBtn));
    }
    if (robinBtn) {
      robinBtn.addEventListener("click", () => triggerNakamaEgg("robin", robinBtn));
    }
  }

  /* ==================== FILTROS Y TARJETAS ONE PIECE ==================== */

  function projectMatchesTech(project, techTerm) {
    const normTerm = normalizeText(techTerm);
    if (!normTerm) return true;

    const synonyms = TECH_SYNONYMS[normTerm] || [normTerm];
    const haystackParts = [
      project.title,
      project.subtitle,
      project.categoryLabel,
      project.summary,
      project.problem,
      project.solution,
      project.myRole,
      project.repoFolder
    ]
      .concat(Array.isArray(project.tech) ? project.tech : [])
      .concat(Array.isArray(project.highlights) ? project.highlights : []);

    if (project.architecture && Array.isArray(project.architecture.nodes)) {
      project.architecture.nodes.forEach((n) => {
        haystackParts.push(n.label, n.role);
        if (Array.isArray(n.tech)) haystackParts.push.apply(haystackParts, n.tech);
      });
    }

    const exactTags = (project.tech || []).map(normalizeText);
    const haystack = normalizeText(haystackParts.join(" "));

    return synonyms.some((syn) => {
      const cleanSyn = normalizeText(syn);
      if (cleanSyn.length <= 2) {
        if (exactTags.some((t) => t === cleanSyn)) return true;
        const re = new RegExp("(^|[^a-z0-9#+])" + escapeRegex(cleanSyn) + "($|[^a-z0-9#+])", "i");
        return re.test(haystack);
      }
      if (exactTags.some((t) => t === cleanSyn || t.includes(cleanSyn))) return true;
      return haystack.includes(cleanSyn);
    });
  }

  function projectMatchesSearch(project, query) {
    const normQuery = normalizeText(query);
    if (!normQuery) return true;

    const parts = [
      project.title,
      project.subtitle,
      project.categoryLabel,
      project.institution,
      project.period,
      project.repoFolder,
      project.summary,
      project.problem,
      project.solution,
      project.myRole,
      project.teamContext
    ]
      .concat(Array.isArray(project.tech) ? project.tech : [])
      .concat(Array.isArray(project.highlights) ? project.highlights : []);

    if (project.architecture && Array.isArray(project.architecture.nodes)) {
      project.architecture.nodes.forEach((n) => {
        parts.push(n.label, n.role, n.details);
        if (Array.isArray(n.tech)) parts.push.apply(parts, n.tech);
      });
    }

    const haystack = normalizeText(parts.join(" "));
    const tokens = normQuery.split(/\s+/).filter(Boolean);
    return tokens.every((tok) => haystack.includes(tok));
  }

  function setupProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll(".card-op[data-project-id]"));
    const stageShell = grid.closest(".project-stage-shell");
    const stageFooter = stageShell
      ? stageShell.querySelector(".projects-gallery-footer")
      : document.querySelector(".projects-gallery-footer");
    const stageCounter = document.getElementById("projectStageCounter");
    const stageDotsWrap = document.getElementById("projectStageDots");
    const stageDots = stageDotsWrap
      ? Array.from(stageDotsWrap.querySelectorAll(".gallery-dot[data-project-id]"))
      : [];
    const prevBtn = document.getElementById("projectPrevBtn");
    const nextBtn = document.getElementById("projectNextBtn");

    const searchInput = document.getElementById("projectSearchInput");
    const categoryContainer = document.getElementById("projectCategoryFilters");
    const countBadge = document.getElementById("projectsCountBadge");
    const activeSkillBadge = document.getElementById("activeSkillChipBadge");
    const clearBtn = document.getElementById("clearFiltersBtn");

    const initialActive =
      cards.find((c) => c.classList.contains("is-active-stage") && !c.hidden) || cards[0];
    let activeProjectId = initialActive ? initialActive.getAttribute("data-project-id") : "";
    let visibleIds = cards.map((c) => c.getAttribute("data-project-id")).filter(Boolean);
    let stageLeaveTimer = null;
    let leavingCard = null;

    function clearStageLeave() {
      if (stageLeaveTimer) {
        clearTimeout(stageLeaveTimer);
        stageLeaveTimer = null;
      }
      if (leavingCard) {
        leavingCard.classList.remove("is-leaving-next", "is-leaving-prev");
        if (leavingCard.getAttribute("data-project-id") !== activeProjectId) {
          leavingCard.hidden = true;
          leavingCard.style.display = "none";
        }
        leavingCard = null;
      }
      cards.forEach((c) => {
        if (c.getAttribute("data-project-id") !== activeProjectId) {
          c.classList.remove("is-leaving-next", "is-leaving-prev");
        }
      });
    }

    let emptyBanner = grid.querySelector(".projects-empty");
    if (!emptyBanner) {
      emptyBanner = document.createElement("div");
      emptyBanner.className = "projects-empty";
      emptyBanner.hidden = true;
      emptyBanner.innerHTML =
        '<h4>Sin coincidencias en la travesía</h4>' +
        '<p>Ningún proyecto coincide con los filtros actuales. Prueba otra palabra clave o limpia la selección.</p>' +
        '<button type="button" class="btn btn-elastic btn-elastic--soft">Restablecer filtros</button>';
      grid.appendChild(emptyBanner);
    }

    const emptyResetBtn = emptyBanner.querySelector("button");

    function updateFilterUi() {
      const f = state.filters;
      const hasActive = Boolean(
        f.search.trim() || f.category !== "all" || f.skillLabel || (f.skillProjectIds && f.skillProjectIds.length)
      );

      if (categoryContainer) {
        categoryContainer.querySelectorAll(".filter-pill[data-category]").forEach((pill) => {
          const isMatch = pill.getAttribute("data-category") === f.category;
          pill.classList.toggle("active", isMatch);
          pill.setAttribute("aria-pressed", isMatch ? "true" : "false");
        });
      }

      document.querySelectorAll("#skillsMatrix .skill-chip").forEach((chip) => {
        const isMatch =
          Boolean(f.skillLabel) &&
          normalizeText(chip.textContent) === normalizeText(f.skillLabel);
        chip.classList.toggle("active", isMatch);
        chip.setAttribute("aria-pressed", isMatch ? "true" : "false");
      });

      if (activeSkillBadge) {
        const hasSkill = Boolean(f.skillLabel);
        activeSkillBadge.hidden = !hasSkill;
        activeSkillBadge.style.display = hasSkill ? "" : "none";
        activeSkillBadge.textContent = hasSkill ? "Habilidad: " + f.skillLabel : "";
      }

      if (clearBtn) clearBtn.hidden = !hasActive;
    }

    function updateGalleryControls() {
      const total = visibleIds.length;
      const isEmpty = total === 0;
      const canStep = total > 1;

      if (stageFooter) {
        stageFooter.hidden = isEmpty;
        stageFooter.style.display = isEmpty ? "none" : "";
      }

      [prevBtn, nextBtn].forEach((btn) => {
        if (!btn) return;
        btn.hidden = isEmpty;
        btn.style.display = isEmpty ? "none" : "";
        btn.disabled = !canStep;
        btn.setAttribute("aria-disabled", canStep ? "false" : "true");
      });

      if (isEmpty) {
        if (stageCounter) stageCounter.textContent = "00 / 00";
        stageDots.forEach((dot) => {
          dot.hidden = true;
          dot.classList.remove("is-active");
          dot.setAttribute("aria-selected", "false");
          dot.setAttribute("tabindex", "-1");
        });
        return;
      }

      const pos = Math.max(0, visibleIds.indexOf(activeProjectId));
      const curLabel = String(pos + 1).padStart(2, "0");
      const totLabel = String(total).padStart(2, "0");
      if (stageCounter) stageCounter.textContent = curLabel + " / " + totLabel;

      stageDots.forEach((dot) => {
        const dotId = dot.getAttribute("data-project-id");
        const inFilter = visibleIds.indexOf(dotId) !== -1;
        const isActive = inFilter && dotId === activeProjectId;
        dot.hidden = !inFilter;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-selected", isActive ? "true" : "false");
        dot.setAttribute("tabindex", isActive ? "0" : "-1");
      });
    }

    function renderStageCard(animateEntrance, direction, requestedId) {
      if (!visibleIds.length) {
        activeProjectId = "";
        clearStageLeave();
        cards.forEach((card) => {
          card.hidden = true;
          card.style.display = "none";
          card.classList.remove(
            "is-active-stage",
            "is-entering",
            "is-entering-next",
            "is-entering-prev",
            "is-leaving-next",
            "is-leaving-prev"
          );
        });
        updateGalleryControls();
        return;
      }

      const previousId = activeProjectId;
      if (requestedId && visibleIds.indexOf(requestedId) !== -1) {
        activeProjectId = requestedId;
      } else if (!activeProjectId || visibleIds.indexOf(activeProjectId) === -1) {
        activeProjectId = visibleIds[0];
      }

      const previousCard =
        previousId && previousId !== activeProjectId
          ? cards.find((c) => c.getAttribute("data-project-id") === previousId)
          : null;
      const useSimultaneousLeave = Boolean(
        previousCard && canAnimate() && (direction === "next" || direction === "prev")
      );

      clearStageLeave();

      cards.forEach((card) => {
        const cardId = card.getAttribute("data-project-id");
        const isActive = cardId === activeProjectId;
        const wasHidden = card.hidden;

        if (card === previousCard && useSimultaneousLeave) {
          card.hidden = false;
          card.style.display = "";
          card.classList.remove(
            "is-active-stage",
            "is-entering",
            "is-entering-next",
            "is-entering-prev",
            "is-leaving-next",
            "is-leaving-prev"
          );
          void card.offsetWidth;
          card.classList.add("is-leaving-" + direction);
          leavingCard = card;
          return;
        }

        card.hidden = !isActive;
        card.style.display = isActive ? "" : "none";
        card.classList.toggle("is-active-stage", isActive);
        card.classList.remove(
          "is-entering-next",
          "is-entering-prev",
          "is-leaving-next",
          "is-leaving-prev"
        );

        if (isActive) {
          card.classList.add("in");
          if (canAnimate()) {
            if (direction === "next" || direction === "prev") {
              restartCssClass(card, "is-entering-" + direction, 480, "stageEnter");
            } else if (animateEntrance && (wasHidden || previousId !== activeProjectId)) {
              restartCssClass(card, "is-entering", 480, "stageEnter");
            }
          }
        }
      });

      if (useSimultaneousLeave && leavingCard) {
        const exiting = leavingCard;
        stageLeaveTimer = setTimeout(() => {
          if (leavingCard === exiting) {
            exiting.classList.remove("is-leaving-next", "is-leaving-prev");
            if (exiting.getAttribute("data-project-id") !== activeProjectId) {
              exiting.hidden = true;
              exiting.style.display = "none";
            }
            leavingCard = null;
          }
          stageLeaveTimer = null;
        }, 420);
      }

      updateGalleryControls();
    }

    function stepStage(delta, focusDot) {
      if (visibleIds.length <= 1) return;
      const curIdx = Math.max(0, visibleIds.indexOf(activeProjectId));
      const nextIdx = (curIdx + delta + visibleIds.length) % visibleIds.length;
      const nextId = visibleIds[nextIdx];
      renderStageCard(true, delta < 0 ? "prev" : "next", nextId);
      if (focusDot) {
        const nextDot = stageDots.find((d) => d.getAttribute("data-project-id") === nextId);
        if (nextDot && typeof nextDot.focus === "function") nextDot.focus();
      }
    }

    function applyFilters(animateEntrance) {
      const f = state.filters;
      const matchingIds = [];

      cards.forEach((card) => {
        const id = card.getAttribute("data-project-id");
        const cardCat = card.getAttribute("data-category") || "all";
        const project = getProjectById(id);

        const matchesCategory = f.category === "all" || cardCat === f.category;
        const matchesSkill =
          !Array.isArray(f.skillProjectIds) || f.skillProjectIds.includes(id);
        const matchesSearch =
          !f.search.trim() ||
          (project
            ? projectMatchesSearch(project, f.search)
            : normalizeText(card.textContent).includes(normalizeText(f.search)));

        if (matchesCategory && matchesSkill && matchesSearch && id) {
          matchingIds.push(id);
        }
      });

      visibleIds = matchingIds;

      if (countBadge) {
        const label = matchingIds.length === 1 ? "1 proyecto" : matchingIds.length + " proyectos";
        countBadge.textContent = label;
      }

      emptyBanner.hidden = matchingIds.length > 0;
      emptyBanner.style.display = matchingIds.length > 0 ? "none" : "";

      renderStageCard(animateEntrance, "", "");
      updateFilterUi();
    }

    function resetFilters() {
      state.filters.search = "";
      state.filters.category = "all";
      state.filters.skillLabel = "";
      state.filters.skillProjectIds = null;
      if (searchInput) searchInput.value = "";
      applyFilters(true);
    }

    if (searchInput) {
      searchInput.addEventListener("input", () => {
        state.filters.search = searchInput.value;
        applyFilters(false);
      });
    }

    if (categoryContainer) {
      categoryContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-pill[data-category]");
        if (!btn) return;
        state.filters.category = btn.getAttribute("data-category") || "all";
        applyFilters(true);
      });
    }

    if (clearBtn) clearBtn.addEventListener("click", resetFilters);
    if (emptyResetBtn) emptyResetBtn.addEventListener("click", resetFilters);

    if (prevBtn) prevBtn.addEventListener("click", () => stepStage(-1, false));
    if (nextBtn) nextBtn.addEventListener("click", () => stepStage(1, false));

    if (stageDotsWrap) {
      stageDotsWrap.addEventListener("click", (e) => {
        const dot = e.target.closest(".gallery-dot[data-project-id]");
        if (!dot || dot.hidden) return;
        const targetId = dot.getAttribute("data-project-id");
        if (!targetId || targetId === activeProjectId || visibleIds.indexOf(targetId) === -1) return;
        const oldIdx = visibleIds.indexOf(activeProjectId);
        const newIdx = visibleIds.indexOf(targetId);
        renderStageCard(true, newIdx < oldIdx ? "prev" : "next", targetId);
      });
    }

    if (stageShell) {
      stageShell.addEventListener("keydown", (e) => {
        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
        if (e.altKey || e.ctrlKey || e.metaKey) return;
        const activeEl = document.activeElement;
        if (
          activeEl &&
          (activeEl.tagName === "INPUT" ||
            activeEl.tagName === "TEXTAREA" ||
            activeEl.tagName === "SELECT")
        ) {
          return;
        }
        if (visibleIds.length <= 1) return;
        e.preventDefault();
        const inTabs = Boolean(stageDotsWrap && stageDotsWrap.contains(e.target));
        stepStage(e.key === "ArrowLeft" ? -1 : 1, inTabs);
      });
    }

    let swipeStartX = null;
    let swipeStartY = null;
    grid.addEventListener(
      "touchstart",
      (e) => {
        if (!e.touches || e.touches.length !== 1) return;
        if (e.target && e.target.closest("button, a, input, select, textarea")) {
          swipeStartX = null;
          return;
        }
        swipeStartX = e.touches[0].clientX;
        swipeStartY = e.touches[0].clientY;
      },
      { passive: true }
    );
    grid.addEventListener(
      "touchend",
      (e) => {
        if (swipeStartX === null || !e.changedTouches || !e.changedTouches.length) return;
        const dx = e.changedTouches[0].clientX - swipeStartX;
        const dy = e.changedTouches[0].clientY - swipeStartY;
        swipeStartX = null;
        swipeStartY = null;
        if (visibleIds.length <= 1) return;
        if (Math.abs(dx) >= 48 && Math.abs(dx) > Math.abs(dy) * 1.4) {
          stepStage(dx < 0 ? 1 : -1, false);
        }
      },
      { passive: true }
    );

    // Acciones de modal y arquitectura desde la tarjeta activa
    grid.addEventListener("click", (e) => {
      const openBtn = e.target.closest("[data-project-open]");
      if (openBtn) {
        openProjectModal(openBtn.getAttribute("data-project-open"), openBtn);
        return;
      }

      const archLink = e.target.closest("[data-project-arch]");
      if (archLink) {
        const projId = archLink.getAttribute("data-project-arch");
        selectArchProject(projId);
      }
    });

    // Tilt 3D interactivo sutil en escaparates .card-op-console
    grid.querySelectorAll(".card-op-console").forEach((consoleBox) => {
      consoleBox.addEventListener("pointermove", (e) => {
        if (!canAnimate()) {
          consoleBox.style.setProperty("--tilt-x", "0deg");
          consoleBox.style.setProperty("--tilt-y", "0deg");
          return;
        }
        const rect = consoleBox.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        const tiltY = Math.max(-4, Math.min(4, nx * 8));
        const tiltX = Math.max(-4, Math.min(4, -ny * 8));
        consoleBox.style.setProperty("--tilt-x", tiltX.toFixed(2) + "deg");
        consoleBox.style.setProperty("--tilt-y", tiltY.toFixed(2) + "deg");
      });
      consoleBox.addEventListener("pointerleave", () => {
        consoleBox.style.setProperty("--tilt-x", "0deg");
        consoleBox.style.setProperty("--tilt-y", "0deg");
      });
    });

    // Sincronización externa desde #habilidades
    setupSkillsIntegration(applyFilters);
    applyFilters(false);
  }

  const SKILL_TOKEN_ALIASES = {
    "aws rds": ["aws lambda & rds"],
    "aws lambda": ["aws lambda & rds"],
    "redes sip": ["redes sip & wireshark"],
    "wireshark": ["redes sip & wireshark"],
    "asterisk": ["asterisk & pjsip"],
    "pjsip": ["asterisk & pjsip"],
    "yolo": ["yolo & onnx"],
    "onnx": ["yolo & onnx"],
    "faster-whisper": ["faster-whisper & ollama"],
    "ollama": ["faster-whisper & ollama"],
    "docker compose": ["docker & docker compose"],
    "docker": ["docker & docker compose"],
    "bash": ["bash & linux"],
    "linux": ["bash & linux"],
    "multithreading": ["multithreading & concurrencia"]
  };

  function findSkillMetadata(chipLabel) {
    const target = normalizeText(chipLabel);
    const aliases = SKILL_TOKEN_ALIASES[target] || [];
    let matchedItem = null;

    SKILL_GROUPS.forEach((group) => {
      (group.items || []).forEach((item) => {
        const normName = normalizeText(item.name);
        const parts = normName.split(/\s*[&/,]\s*/).map((s) => s.trim()).filter(Boolean);
        if (
          normName === target ||
          parts.includes(target) ||
          aliases.includes(normName)
        ) {
          matchedItem = item;
        }
      });
    });

    return matchedItem;
  }

  function setupSkillsIntegration(applyFilters) {
    const chips = Array.from(document.querySelectorAll("#skillsMatrix .skill-chip"));
    if (!chips.length) return;

    const proyectosSection = document.getElementById("proyectos");

    function activateSkillChip(chip) {
      const label = chip.textContent.trim();
      const meta = findSkillMetadata(label);
      const normLabel = normalizeText(label);
      const isCurrentlyActive = normalizeText(state.filters.skillLabel) === normLabel;

      if (isCurrentlyActive) {
        state.filters.skillLabel = "";
        state.filters.skillProjectIds = null;
        applyFilters(true);
        return;
      }

      // Buscar proyectos por metadata real o por coincidencia técnica segura
      const matchedIds = meta && Array.isArray(meta.projectIds)
        ? meta.projectIds.slice()
        : PROJECTS.filter((p) => projectMatchesTech(p, label)).map((p) => p.id);

      if (!matchedIds.length) {
        const wasActive = chip.classList.contains("active");
        state.filters.skillLabel = wasActive ? "" : label;
        state.filters.skillProjectIds = null;
        applyFilters(true);
        if (!wasActive) {
          showToast(
            label + ": utilizado en asignaturas de Ingeniería Telemática y documentación técnica UAH."
          );
        }
        return;
      }

      state.filters.category = "all";
      state.filters.search = "";
      const searchInput = document.getElementById("projectSearchInput");
      if (searchInput) searchInput.value = "";

      state.filters.skillLabel = label;
      state.filters.skillProjectIds = matchedIds;
      applyFilters(true);

      if (proyectosSection && proyectosSection.scrollIntoView) {
        proyectosSection.scrollIntoView({
          behavior: canAnimate() ? "smooth" : "auto",
          block: "start"
        });
      }
      showToast(
        "Mostrando " +
          matchedIds.length +
          (matchedIds.length === 1 ? " proyecto" : " proyectos") +
          " con " +
          label +
          "."
      );
    }

    chips.forEach((chip) => {
      const label = chip.textContent.trim();
      const meta = findSkillMetadata(label);
      chip.setAttribute("role", "button");
      chip.setAttribute("tabindex", "0");
      chip.setAttribute("aria-pressed", "false");
      if (meta && meta.context) {
        chip.setAttribute("title", meta.context);
      }

      chip.addEventListener("click", () => activateSkillChip(chip));
      chip.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activateSkillChip(chip);
        }
      });
    });
  }

  /* ==================== EXPLORADOR DE ARQUITECTURA ==================== */

  let selectArchProject = function () {};

  function setupArchitectureExplorer() {
    const tabsEl = document.getElementById("archProjectTabs");
    const legendEl = document.querySelector(".arch-layer-legend");
    const summaryEl = document.getElementById("archSummary");
    const canvasEl = document.getElementById("archGraphCanvas");
    const detailEl = document.getElementById("archNodeDetail");
    if (!tabsEl || !canvasEl || !detailEl || !PROJECTS.length) return;

    function getConnectedNodeMaps(nodes) {
      const outgoing = {};
      const incoming = {};
      const byId = {};

      nodes.forEach((n) => {
        byId[n.id] = n;
        outgoing[n.id] = Array.isArray(n.connectsTo) ? n.connectsTo.slice() : [];
        incoming[n.id] = [];
      });

      nodes.forEach((n) => {
        (n.connectsTo || []).forEach((targetId) => {
          if (incoming[targetId]) incoming[targetId].push(n.id);
        });
      });

      return { byId, outgoing, incoming };
    }

    function renderInspector(project, node, maps) {
      if (!node) {
        detailEl.innerHTML =
          '<p class="inspector-kicker">EXPLORADOR DE ARQUITECTURA</p>' +
          '<h4 class="inspector-title">Selecciona un nodo</h4>' +
          '<p class="inspector-desc">Haz clic en cualquier bloque del mapa para ver su rol, tecnologías y conexiones.</p>';
        return;
      }

      const layerLabel = LAYER_LABELS[node.layer] || node.layer || "Sistema";
      const outIds = maps.outgoing[node.id] || [];
      const inIds = maps.incoming[node.id] || [];
      const chipsHtml = (node.tech || [])
        .map((t) => '<span class="tech-tag">' + escapeHtml(t) + "</span>")
        .join("");

      const connButtons = [];
      outIds.forEach((cid) => {
        const target = maps.byId[cid];
        if (target) {
          connButtons.push(
            '<button type="button" class="arch-conn-chip" data-jump-node="' +
              escapeHtml(cid) +
              '">→ ' +
              escapeHtml(target.label) +
              "</button>"
          );
        }
      });
      inIds.forEach((cid) => {
        const source = maps.byId[cid];
        if (source) {
          connButtons.push(
            '<button type="button" class="arch-conn-chip" data-jump-node="' +
              escapeHtml(cid) +
              '">← ' +
              escapeHtml(source.label) +
              "</button>"
          );
        }
      });

      detailEl.innerHTML =
        '<p class="inspector-kicker">NODO SELECCIONADO · CAPA ' +
        escapeHtml(layerLabel.toUpperCase()) +
        " · " +
        escapeHtml(project.repoFolder || "") +
        "</p>" +
        '<h4 class="inspector-title">' +
        escapeHtml(node.label) +
        "</h4>" +
        '<p class="inspector-desc">' +
        escapeHtml(node.details || node.role || "") +
        "</p>" +
        '<div class="inspector-tags">' +
        chipsHtml +
        "</div>" +
        '<div class="inspector-links">' +
        (connButtons.length
          ? '<span>Conexiones directas:</span><div class="arch-conn-list">' +
            connButtons.join("") +
            "</div>"
          : "<span>Nodo terminal de persistencia o servicio de salida.</span>") +
        "</div>";
    }

    function renderArchitecture() {
      const project = getProjectById(state.arch.projectId);
      if (!project || !project.architecture) return;

      const arch = project.architecture;
      const nodes = Array.isArray(arch.nodes) ? arch.nodes : [];
      const maps = getConnectedNodeMaps(nodes);

      // Si el nodo seleccionado no pertenece a este proyecto, elegir el principal (capa api o primero)
      if (!maps.byId[state.arch.selectedNodeId]) {
        const preferred =
          nodes.find((n) => n.layer === "api") || nodes[0] || null;
        state.arch.selectedNodeId = preferred ? preferred.id : "";
      }

      if (state.arch.activeLayer) {
        const selectedNode = maps.byId[state.arch.selectedNodeId];
        if (!selectedNode || selectedNode.layer !== state.arch.activeLayer) {
          const firstInLayer = nodes.find((n) => n.layer === state.arch.activeLayer);
          if (firstInLayer) state.arch.selectedNodeId = firstInLayer.id;
        }
      }

      tabsEl.querySelectorAll(".arch-tab[data-project]").forEach((tab) => {
        const isCurrent = tab.getAttribute("data-project") === project.id;
        tab.classList.toggle("active", isCurrent);
        tab.setAttribute("aria-selected", isCurrent ? "true" : "false");
      });

      if (legendEl) {
        legendEl.querySelectorAll(".legend-item[data-layer]").forEach((btn) => {
          const layer = btn.getAttribute("data-layer");
          const isMatch = state.arch.activeLayer === layer;
          btn.classList.toggle("is-active", isMatch);
          btn.setAttribute("aria-pressed", isMatch ? "true" : "false");
        });
      }

      if (summaryEl) {
        summaryEl.innerHTML =
          "<strong>" +
          escapeHtml(project.title) +
          ":</strong> " +
          escapeHtml(arch.summary || project.summary || "");
      }

      const activeId = state.arch.selectedNodeId;
      const connectedSet = new Set();
      if (activeId && maps.byId[activeId]) {
        (maps.outgoing[activeId] || []).forEach((id) => connectedSet.add(id));
        (maps.incoming[activeId] || []).forEach((id) => connectedSet.add(id));
      }

      canvasEl.innerHTML = nodes
        .map((node) => {
          const isSelected = node.id === activeId;
          const isConnected = connectedSet.has(node.id);
          const layerFilterMismatch =
            state.arch.activeLayer && node.layer !== state.arch.activeLayer;
          const isDimmed = state.arch.activeLayer
            ? layerFilterMismatch && !isConnected
            : Boolean(activeId && !isSelected && !isConnected);

          const classes = ["arch-node-card"];
          if (isSelected) classes.push("is-selected");
          else if (isConnected) classes.push("is-connected");
          if (isDimmed) classes.push("is-dimmed");

          const outLabels = (maps.outgoing[node.id] || [])
            .map((cid) => (maps.byId[cid] ? cid : null))
            .filter(Boolean);
          const inLabels = (maps.incoming[node.id] || [])
            .map((cid) => (maps.byId[cid] ? cid : null))
            .filter(Boolean);

          let flowText = "";
          if (outLabels.length) flowText = "→ " + outLabels.join(" · ");
          else if (inLabels.length) flowText = "← " + inLabels.join(" · ");

          const layerKey = node.layer || "api";
          const layerName = LAYER_LABELS[layerKey] || layerKey;

          return (
            '<button type="button" class="' +
            classes.join(" ") +
            '" data-node-id="' +
            escapeHtml(node.id) +
            '" aria-pressed="' +
            (isSelected ? "true" : "false") +
            '">' +
            '<span class="arch-node-layer arch-node-layer--' +
            escapeHtml(layerKey) +
            '">' +
            escapeHtml(layerName) +
            "</span>" +
            '<span class="arch-node-title">' +
            escapeHtml(node.label) +
            "</span>" +
            '<span class="arch-node-role">' +
            escapeHtml(node.role) +
            "</span>" +
            (flowText
              ? '<span class="arch-node-flow">' + escapeHtml(flowText) + "</span>"
              : "") +
            "</button>"
          );
        })
        .join("");

      renderInspector(project, maps.byId[activeId], maps);
    }

    selectArchProject = function (projectId) {
      const proj = getProjectById(projectId);
      if (!proj) return;
      state.arch.projectId = proj.id;
      state.arch.activeLayer = null;
      const nodes = (proj.architecture && proj.architecture.nodes) || [];
      const preferred = nodes.find((n) => n.layer === "api") || nodes[0];
      state.arch.selectedNodeId = preferred ? preferred.id : "";
      renderArchitecture();
    };

    tabsEl.addEventListener("click", (e) => {
      const tab = e.target.closest(".arch-tab[data-project]");
      if (!tab) return;
      selectArchProject(tab.getAttribute("data-project"));
    });

    if (legendEl) {
      legendEl.addEventListener("click", (e) => {
        const btn = e.target.closest(".legend-item[data-layer]");
        if (!btn) return;
        const clickedLayer = btn.getAttribute("data-layer");
        state.arch.activeLayer =
          state.arch.activeLayer === clickedLayer ? null : clickedLayer;
        renderArchitecture();
      });
    }

    canvasEl.addEventListener("click", (e) => {
      const card = e.target.closest(".arch-node-card[data-node-id]");
      if (!card) return;
      state.arch.selectedNodeId = card.getAttribute("data-node-id");
      renderArchitecture();
    });

    canvasEl.addEventListener("keydown", (e) => {
      if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(e.key)) return;
      const cards = Array.from(canvasEl.querySelectorAll(".arch-node-card[data-node-id]"));
      const idx = cards.indexOf(document.activeElement);
      if (idx === -1 || !cards.length) return;
      e.preventDefault();
      const delta = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;
      const next = cards[(idx + delta + cards.length) % cards.length];
      state.arch.selectedNodeId = next.getAttribute("data-node-id");
      renderArchitecture();
      const refocused = canvasEl.querySelector(
        '.arch-node-card[data-node-id="' + CSS.escape(state.arch.selectedNodeId) + '"]'
      );
      if (refocused) refocused.focus();
    });

    detailEl.addEventListener("click", (e) => {
      const chip = e.target.closest("[data-jump-node]");
      if (!chip) return;
      const targetId = chip.getAttribute("data-jump-node");
      if (!targetId) return;
      state.arch.activeLayer = null;
      state.arch.selectedNodeId = targetId;
      renderArchitecture();
    });

    renderArchitecture();
  }

  /* ==================== MODALES ACCESIBLES (PROYECTOS & CV) ==================== */

  function getFocusableElements(container) {
    return Array.from(
      container.querySelectorAll(
        'a[href], button:not([disabled]), iframe, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => {
      if (el === document.activeElement) return true;
      return (
        el.getClientRects().length > 0 &&
        window.getComputedStyle(el).visibility !== "hidden"
      );
    });
  }

  function openModal(modal, triggerEl) {
    if (!modal) return;
    lastFocusedEl = triggerEl || document.activeElement;
    activeModal = modal;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    const closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) {
      window.setTimeout(() => closeBtn.focus(), 20);
    }
  }

  function closeModal(modal) {
    const target = modal || activeModal;
    if (!target) return;
    target.classList.remove("is-open");
    target.setAttribute("aria-hidden", "true");
    activeModal = null;

    if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
      lastFocusedEl.focus();
    }
    lastFocusedEl = null;
  }

  function openProjectModal(projectId, triggerEl) {
    const modal = document.getElementById("projectModal");
    const contentEl = document.getElementById("projectModalContent");
    const project = getProjectById(projectId);
    if (!modal || !contentEl || !project) return;

    const highlightsHtml = (project.highlights || [])
      .map((item) => "<li>" + escapeHtml(item) + "</li>")
      .join("");

    const techHtml = (project.tech || [])
      .map((tag) => '<span class="tech-tag">' + escapeHtml(tag) + "</span>")
      .join("");

    const teamSectionHtml = project.teamContext
      ? '<h4 class="modal-section-title">Contexto de equipo</h4>' +
        '<p class="modal-text">' +
        escapeHtml(project.teamContext) +
        "</p>"
      : "";

    contentEl.innerHTML =
      '<span class="modal-badge">' +
      escapeHtml(project.categoryLabel || "Proyecto") +
      "</span>" +
      '<h3 id="projectModalTitle" class="modal-title">' +
      escapeHtml(project.title) +
      "</h3>" +
      '<p class="modal-subtitle">' +
      escapeHtml(project.institution || "") +
      (project.period ? " · " + escapeHtml(project.period) : "") +
      (project.repoFolder ? " · Repo: " + escapeHtml(project.repoFolder) : "") +
      "</p>" +
      '<div class="modal-role-box"><strong>Mi rol y alcance técnico</strong>' +
      escapeHtml(project.myRole || project.subtitle || "") +
      "</div>" +
      teamSectionHtml +
      '<h4 class="modal-section-title">Problema técnico</h4>' +
      '<p class="modal-text">' +
      escapeHtml(project.problem || "") +
      "</p>" +
      '<h4 class="modal-section-title">Solución implementada</h4>' +
      '<p class="modal-text">' +
      escapeHtml(project.solution || project.summary || "") +
      "</p>" +
      (highlightsHtml
        ? '<h4 class="modal-section-title">Logros destacados</h4><ul class="modal-list">' +
          highlightsHtml +
          "</ul>"
        : "") +
      '<h4 class="modal-section-title">Stack utilizado</h4>' +
      '<div class="modal-tech-list">' +
      techHtml +
      "</div>" +
      '<div class="modal-actions">' +
      '<button type="button" class="btn btn-elastic" data-modal-arch="' +
      escapeHtml(project.id) +
      '">Ver en explorador de arquitectura</button>' +
      '<button type="button" class="btn btn-elastic btn-elastic--soft" data-modal-dismiss>Cerrar ficha</button>' +
      "</div>";

    openModal(modal, triggerEl);
  }

  function openCvModal(triggerEl) {
    const modal = document.getElementById("cvModal");
    const bodyEl = document.getElementById("cvModalBody");
    if (!modal || !bodyEl) return;

    const cvHref = safeUrl(DEFAULT_CV_PATH);
    const fullName = PROFILE.name || "Chelsea Fernández Hernández";

    bodyEl.innerHTML =
      '<span class="modal-badge">Currículum Vitae · PDF</span>' +
      '<h3 class="modal-title">CV — ' +
      escapeHtml(fullName) +
      "</h3>" +
      '<p class="modal-subtitle">Ingeniería Telemática (UAH · Promoción 2027) · Prácticas 450–900 h</p>' +
      '<iframe class="modal-cv-frame" src="' +
      escapeHtml(cvHref) +
      '" title="Vista previa del Currículum Vitae en PDF"></iframe>' +
      '<div class="modal-actions">' +
      '<a class="btn btn-sage" href="' +
      escapeHtml(cvHref) +
      '" download="CV_Chelsea_Fdez_Hdez.pdf">Descargar PDF</a>' +
      '<a class="btn btn-ghost" href="' +
      escapeHtml(cvHref) +
      '" target="_blank" rel="noopener noreferrer">Abrir en nueva pestaña</a>' +
      '<button type="button" class="btn btn-ghost" data-modal-dismiss>Cerrar</button>' +
      "</div>";

    openModal(modal, triggerEl);
  }

  function setupModals() {
    const projectModal = document.getElementById("projectModal");
    const projectClose = document.getElementById("projectModalClose");
    const cvModal = document.getElementById("cvModal");
    const cvClose = document.getElementById("cvModalClose");

    if (projectClose) {
      projectClose.addEventListener("click", () => closeModal(projectModal));
    }
    if (cvClose) {
      cvClose.addEventListener("click", () => closeModal(cvModal));
    }

    [projectModal, cvModal].forEach((modal) => {
      if (!modal) return;
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeModal(modal);
          return;
        }
        if (e.target.closest("[data-modal-dismiss]")) {
          closeModal(modal);
          return;
        }
        const archBtn = e.target.closest("[data-modal-arch]");
        if (archBtn) {
          const projId = archBtn.getAttribute("data-modal-arch");
          closeModal(modal);
          selectArchProject(projId);
          const archEl = document.getElementById("arquitectura");
          if (archEl && archEl.scrollIntoView) {
            archEl.scrollIntoView({
              behavior: canAnimate() ? "smooth" : "auto",
              block: "start"
            });
          }
        }
      });
    });

    document.addEventListener("keydown", (e) => {
      if (!activeModal) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal(activeModal);
        return;
      }
      if (e.key === "Tab") {
        const focusables = getFocusableElements(activeModal);
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    // Triggers del CV en hero y footer
    ["cvActionBtn", "cv"].forEach((id) => {
      const link = document.getElementById(id);
      if (!link) return;
      link.addEventListener("click", (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        openCvModal(link);
      });
    });
  }

  /* ==================== CONTACTO & HUECOS DE FOTOS ==================== */

  function fallbackCopyText(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (_err) {
      ok = false;
    }
    document.body.removeChild(textarea);
    return ok;
  }

  function setupContact() {
    const copyBtn = document.getElementById("copyEmailBtn");
    const emailDisplay = document.getElementById("emailDisplay");

    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const email = (emailDisplay ? emailDisplay.textContent : DEFAULT_EMAIL).trim();
        if (
          navigator.clipboard &&
          navigator.clipboard.writeText &&
          window.location.protocol !== "file:"
        ) {
          navigator.clipboard
            .writeText(email)
            .then(() => showToast("Correo copiado: " + email))
            .catch(() => {
              if (fallbackCopyText(email)) showToast("Correo copiado: " + email);
              else showToast("Correo de contacto: " + email);
            });
        } else if (fallbackCopyText(email)) {
          showToast("Correo copiado: " + email);
        } else {
          showToast("Correo de contacto: " + email);
        }
      });
    }

    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameInput = document.getElementById("contactName");
        const topicInput = document.getElementById("contactTopic");
        const msgInput = document.getElementById("contactMessage");

        const senderName = nameInput ? nameInput.value.trim() : "";
        const topic = topicInput ? topicInput.value.trim() : "Contacto desde portafolio";
        const message = msgInput ? msgInput.value.trim() : "";

        if (!senderName) {
          showToast("Por favor, indica tu nombre o equipo antes de preparar el correo.");
          if (nameInput) nameInput.focus();
          return;
        }
        if (message.length < 6) {
          showToast("Escribe un breve mensaje para preparar el borrador de correo.");
          if (msgInput) msgInput.focus();
          return;
        }

        const subject = encodeURIComponent("[Portafolio] " + topic + " — " + senderName);
        const body = encodeURIComponent(
          "Hola Chelsea,\n\nSoy " +
            senderName +
            ".\n\n" +
            message +
            "\n\nUn saludo,\n" +
            senderName
        );
        const mailtoUrl = "mailto:" + DEFAULT_EMAIL + "?subject=" + subject + "&body=" + body;
        form.setAttribute("data-last-mailto", mailtoUrl);

        showToast("Abriendo tu cliente de correo hacia " + DEFAULT_EMAIL + "...");
        window.location.href = mailtoUrl;
      });
    }
  }

  function setupPlannedPhotoSlots() {
    const slots = document.querySelectorAll("[data-planned-src]");
    slots.forEach((slot) => {
      if (slot.getAttribute("data-uploaded") === "true") return;
      const src = slot.getAttribute("data-planned-src");
      if (!src) return;

      const probe = new Image();
      probe.onload = function () {
        if (!probe.naturalWidth) return;
        slot.setAttribute("data-uploaded", "true");

        if (slot.classList.contains("frieren-postal-slot")) {
          slot.classList.add("has-photo");
          if (!slot.querySelector("img")) {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "Fotografía personal de viaje de Chelsea";
            img.loading = "lazy";
            slot.insertBefore(img, slot.firstChild);
          }
          const badge = slot.querySelector(".slot-badge");
          if (badge) badge.textContent = "Fotografía · Recuerdo de viaje";
          return;
        }

        const pic = slot.querySelector(".pic");
        if (pic) {
          pic.classList.add("has-photo");
          const title =
            (slot.querySelector("h3") && slot.querySelector("h3").textContent) ||
            "Fotografía de comunidad";
          const svg = pic.querySelector("svg");
          if (!pic.querySelector("img")) {
            const img = document.createElement("img");
            img.src = src;
            img.alt = title;
            img.loading = "lazy";
            if (svg) svg.replaceWith(img);
            else pic.insertBefore(img, pic.firstChild);
          } else if (svg) {
            svg.remove();
          }
          const badge = pic.querySelector(".slot-badge");
          if (badge) {
            const currentText = badge.textContent.trim();
            badge.textContent =
              currentText.replace(/^Fotografía pendiente\s*·\s*/i, "Fotografía · ") ||
              "Fotografía";
          }
          const pill = pic.querySelector(".photo-slot-pill");
          if (pill) pill.textContent = "Fotografía";
        }
      };

      probe.onerror = function () {
        /* Mientras la imagen no exista en disco se mantiene intacto el hueco sobrio */
      };
      probe.src = src;
    });
  }

  /* ==================== DINÁMICAS MODERNAS Y JUGUETES ==================== */

  function setupSpotlightTracking() {
    if (!hasFinePointer()) return;
    const targets = document.querySelectorAll(".project-toy, .elements .el, .frieren-postal-slot");
    targets.forEach((el) => {
      el.addEventListener(
        "pointermove",
        (e) => {
          if (!canAnimate()) return;
          const rect = el.getBoundingClientRect();
          if (!rect.width || !rect.height) return;
          const xPct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
          const yPct = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
          el.style.setProperty("--mx", xPct.toFixed(1) + "%");
          el.style.setProperty("--my", yPct.toFixed(1) + "%");
        },
        { passive: true }
      );
    });
  }

  function setupFrierenChronicle() {
    const gallery = document.getElementById("frierenInfiniteGallery");
    const gamesLiner = gallery
      ? gallery.querySelector(".marquee-liner--games")
      : document.querySelector(".marquee-liner--games");
    const booksLiner = gallery
      ? gallery.querySelector(".marquee-liner--books")
      : document.querySelector(".marquee-liner--books");
    const gamesList = document.getElementById("frierenGamesList");
    const booksList = document.getElementById("frierenBooksGrid");
    const gameDiceBtn = document.getElementById("frierenGameDiceBtn");
    const bookDiceBtn = document.getElementById("frierenBookDiceBtn");
    const diceCubeA = document.getElementById("frierenDiceCubeA");
    const diceCubeB = document.getElementById("frierenDiceCubeB");
    const gameDiceResult = document.getElementById("frierenGameDiceResult");
    const bookDiceResult = document.getElementById("frierenBookDiceResult");

    // Asegura visibilidad permanente de los 3 pasajes narrativos
    document.querySelectorAll(".frieren-chronicle-p[data-passage]").forEach((p) => {
      p.hidden = false;
    });

    function appendMarqueeClone(liner, sourceList) {
      if (!liner || !sourceList) return;
      if (liner.querySelector('[data-marquee-clone="true"]')) return;
      const clone = sourceList.cloneNode(true);
      clone.removeAttribute("id");
      clone.setAttribute("aria-hidden", "true");
      clone.setAttribute("data-marquee-clone", "true");
      clone.querySelectorAll("button, a, [tabindex]").forEach((el) => {
        el.setAttribute("tabindex", "-1");
      });
      liner.appendChild(clone);
    }

    appendMarqueeClone(gamesLiner, gamesList);
    appendMarqueeClone(booksLiner, booksList);

    const searchRoot = gallery || document;
    searchRoot.querySelectorAll(".stop-tag--btn[data-game], .stop-tag--btn[data-book]").forEach((btn) => {
      btn.setAttribute("aria-pressed", "false");
    });

    function syncChroniclePick(attrName, value, nextPicked) {
      if (!attrName || !value) return;
      searchRoot.querySelectorAll(".stop-tag--btn[" + attrName + "]").forEach((item) => {
        if (item.getAttribute(attrName) === value) {
          item.classList.toggle("is-picked", nextPicked);
          item.setAttribute("aria-pressed", nextPicked ? "true" : "false");
        }
      });
    }

    const activeChroniclePick = { "data-game": "", "data-book": "" };

    function applyChronicleSelection(attrName, value, nextPicked, anchorEl) {
      if (!attrName || !value) return;

      if (nextPicked) {
        searchRoot.querySelectorAll(".stop-tag--btn[" + attrName + "].is-picked").forEach((other) => {
          const otherVal = other.getAttribute(attrName);
          if (otherVal && otherVal !== value) syncChroniclePick(attrName, otherVal, false);
        });
      }

      syncChroniclePick(attrName, value, nextPicked);
      activeChroniclePick[attrName] = nextPicked ? value : activeChroniclePick[attrName] === value ? "" : activeChroniclePick[attrName];

      const targetResultEl = attrName === "data-game" ? gameDiceResult : bookDiceResult;
      if (targetResultEl) {
        if (nextPicked) {
          targetResultEl.textContent = value;
          targetResultEl.hidden = false;
        } else {
          targetResultEl.textContent = "";
          targetResultEl.hidden = true;
        }
      }

      if (nextPicked) {
        fxEngine.burstAtElement(anchorEl || (attrName === "data-game" ? gameDiceBtn : bookDiceBtn), {
          count: 16,
          mode: "frieren",
          speed: 2.3,
          withRipple: false
        });
        soundscape.playChime("dice");
      }
    }

    if (gallery) {
      gallery.addEventListener("click", (e) => {
        const btn = e.target.closest(".stop-tag--btn[data-game], .stop-tag--btn[data-book]");
        if (!btn) return;
        const attrName = btn.hasAttribute("data-game") ? "data-game" : "data-book";
        const value = btn.getAttribute(attrName);
        if (!value) return;
        const nextPicked = !btn.classList.contains("is-picked");
        applyChronicleSelection(attrName, value, nextPicked, btn);
      });
    }

    // Pool mixto real de 11 juegos de mesa + 9 libros
    const gamePool = gamesList
      ? Array.from(gamesList.querySelectorAll(".stop-tag--btn[data-game]"))
          .map((b) => ({ kind: "game", attr: "data-game", value: b.getAttribute("data-game") || "" }))
          .filter((item) => Boolean(item.value))
      : [];
    const bookPool = booksList
      ? Array.from(booksList.querySelectorAll(".stop-tag--btn[data-book]"))
          .map((b) => ({ kind: "book", attr: "data-book", value: b.getAttribute("data-book") || "" }))
          .filter((item) => Boolean(item.value))
      : [];

    // Orientaciones reales de las 6 caras del cubo CSS 3D (.dice-3d-face--1..6)
    const DICE_FACE_ANGLES = [
      { face: 1, rx: -16, ry: 18 },
      { face: 2, rx: -106, ry: 18 },
      { face: 3, rx: -16, ry: -72 },
      { face: 4, rx: -16, ry: 108 },
      { face: 5, rx: 74, ry: -18 },
      { face: 6, rx: -16, ry: 198 }
    ];
    let lastFaceA = 1;
    let lastFaceB = 4;
    let rollSpinCount = 0;

    function orientDiceCube(cubeEl, isCubeB) {
      if (!cubeEl) return;
      rollSpinCount += 1;
      const prevFace = isCubeB ? lastFaceB : lastFaceA;
      const others = DICE_FACE_ANGLES.filter((f) => f.face !== prevFace);
      const nextFace = others[Math.floor(Math.random() * others.length)] || DICE_FACE_ANGLES[0];
      if (isCubeB) lastFaceB = nextFace.face;
      else lastFaceA = nextFace.face;

      const spinDeg = isCubeB ? -rollSpinCount * 360 : rollSpinCount * 360;
      const rxDelta = isCubeB ? -spinDeg : spinDeg;
      cubeEl.setAttribute("data-face", String(nextFace.face));
      cubeEl.style.transform =
        "rotateX(" + (nextFace.rx + rxDelta) + "deg) rotateY(" + (nextFace.ry + spinDeg) + "deg)";
    }

    function rollDie(triggerBtn, cubeEl, pool, resultEl, isCubeB) {
      if (!triggerBtn || !pool.length) return;
      restartCssClass(triggerBtn, "is-rolling", 760, isCubeB ? "dice-book" : "dice-game");
      orientDiceCube(cubeEl, isCubeB);

      const currentVal = pool[0] ? activeChroniclePick[pool[0].attr] : "";
      const candidates =
        pool.length > 1 && currentVal
          ? pool.filter((item) => item.value !== currentVal)
          : pool;
      const effectivePool = candidates.length ? candidates : pool;
      const chosen = effectivePool[Math.floor(Math.random() * effectivePool.length)];
      if (!chosen) return;

      applyChronicleSelection(chosen.attr, chosen.value, true, triggerBtn);
      if (resultEl) {
        resultEl.textContent = chosen.value;
        resultEl.hidden = false;
      }
    }

    if (gameDiceBtn && gamePool.length > 0) {
      gameDiceBtn.addEventListener("click", () => {
        rollDie(gameDiceBtn, diceCubeA, gamePool, gameDiceResult, false);
      });
    }

    if (bookDiceBtn && bookPool.length > 0) {
      bookDiceBtn.addEventListener("click", () => {
        rollDie(bookDiceBtn, diceCubeB, bookPool, bookDiceResult, true);
      });
    }

    const travelGallery = document.querySelector(".frieren-chronicle .frieren-travel-gallery");
    if (travelGallery) {
      const travelButtons = Array.from(travelGallery.querySelectorAll(".frieren-travel-btn"));

      travelGallery.addEventListener("click", (e) => {
        const btn = e.target.closest(".frieren-travel-btn");
        if (!btn) return;

        travelButtons.forEach((otherBtn) => {
          const isCurrent = otherBtn === btn;
          otherBtn.setAttribute("aria-pressed", isCurrent ? "true" : "false");
          const card = otherBtn.closest(".frieren-travel-card");
          if (card) card.classList.toggle("is-active", isCurrent);
        });

        fxEngine.burstAtElement(btn, {
          count: 14,
          mode: "frieren",
          speed: 2.1,
          withRipple: false
        });
      });
    }
  }

  function setupAvatarInteractions() {
    document.querySelectorAll(".av-bullets-toggle[data-av-toggle]").forEach((btn) => {
      const targetId = btn.getAttribute("aria-controls");
      const list = targetId ? document.getElementById(targetId) : null;
      const labelSpan = btn.querySelector("span:not(.av-toggle-dot)");
      if (!list) return;

      btn.addEventListener("click", () => {
        const nextExpanded = btn.getAttribute("aria-expanded") !== "true";
        btn.setAttribute("aria-expanded", nextExpanded ? "true" : "false");
        list.hidden = !nextExpanded;
        if (labelSpan) {
          labelSpan.textContent = nextExpanded ? "Ocultar hitos" : "Ver hitos clave";
        }
      });
    });

    const ELEMENT_NOTES = {
      aire: "Aire · Escuchar sin prejuicios: abrir espacio para entender cualquier perspectiva con calma.",
      agua: "Agua · Empatía y adaptación: fluir con el grupo y transformar bloqueos en aprendizaje.",
      tierra: "Tierra · Constancia y cuidado: sostener cada proyecto paso a paso con firmeza.",
      fuego: "Fuego · Iniciativa y mentoría: impulsar a nuevas generaciones con energía compartida."
    };
    const DEFAULT_ELEMENT_NOTE = "Pulsa un elemento para sentir su energía";

    const elementButtons = Array.from(document.querySelectorAll("#comunidad .elements .el[data-element]"));
    const elementNote = document.getElementById("elementPulseNote");

    function activateElement(btn) {
      const key = btn.getAttribute("data-element");
      if (!key) return;
      const nextActive = !btn.classList.contains("is-active");

      elementButtons.forEach((item) => {
        const isMatch = item === btn && nextActive;
        item.classList.toggle("is-active", isMatch);
        item.setAttribute("aria-pressed", isMatch ? "true" : "false");
      });

      if (elementNote) {
        elementNote.textContent = nextActive
          ? ELEMENT_NOTES[key] || DEFAULT_ELEMENT_NOTE
          : DEFAULT_ELEMENT_NOTE;
      }

      if (nextActive) {
        fxEngine.burstAtElement(btn, {
          count: 22,
          mode: "element-" + key,
          speed: 2.6,
          withRipple: true
        });
        soundscape.playElementChord(key);
      }
    }

    elementButtons.forEach((btn) => {
      btn.addEventListener("click", () => activateElement(btn));
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activateElement(btn);
        }
      });
    });
  }

  function setupProjectToys() {
    // 1. Gafas VR (Controlador/)
    const vrToy = document.querySelector(".toy-vr");
    if (vrToy) {
      const vrBtn = vrToy.querySelector(".js-toy-vr");
      const vrScreen = vrToy.querySelector(".toy-vr-screen");
      const VR_PHRASES = [
        "«¡Buenos días!» · Whisper + Ollama · 96 %",
        "«¿Cómo te llamas?» · Regex fonético + STT · 94 %",
        "«Me gusta aprender español» · Audio PCM16 · 98 %",
        "«¡Nos vemos mañana!» · /notas_alumno OK · 95 %"
      ];
      let vrIndex = -1;

      if (vrBtn && vrScreen) {
        vrBtn.addEventListener("click", () => {
          vrIndex = (vrIndex + 1) % VR_PHRASES.length;
          restartCssClass(vrToy, "is-listening", 1400);
          vrScreen.textContent = VR_PHRASES[vrIndex];
          fxEngine.burstAtElement(vrBtn, {
            count: 16,
            mode: "onepiece",
            speed: 2.4,
            withRipple: false
          });
          soundscape.playToySound("vr");
        });
      }
    }

    // 2. Casillero de Cartas ONNX (Correos_casillero/)
    const casilleroToy = document.querySelector(".toy-casillero");
    if (casilleroToy) {
      const slots = Array.from(casilleroToy.querySelectorAll(".toy-slot[data-slot]"));
      const scanBtn = casilleroToy.querySelector(".js-toy-mail");
      const readout = casilleroToy.querySelector(".toy-mail-readout");

      function countFilled() {
        return slots.filter((s) => s.classList.contains("has-mail")).length;
      }

      function refreshCount(withInference) {
        if (!readout) return;
        const filled = countFilled();
        readout.textContent = withInference
          ? "ONNX: " + filled + "/" + slots.length + " casillas con carta · 98.4 %"
          : filled + "/" + slots.length + " casillas con carta";
      }

      slots.forEach((slot) => {
        slot.addEventListener("click", () => {
          const nextHas = !slot.classList.contains("has-mail");
          slot.classList.toggle("has-mail", nextHas);
          slot.setAttribute("aria-pressed", nextHas ? "true" : "false");
          refreshCount(false);
          soundscape.playToySound("slot");
        });
      });

      if (scanBtn) {
        scanBtn.addEventListener("click", () => {
          restartCssClass(casilleroToy, "is-scanning", 850);
          refreshCount(true);
          fxEngine.burstAtElement(scanBtn, {
            count: 16,
            mode: "onepiece",
            speed: 2.3,
            withRipple: false
          });
          soundscape.playToySound("scan");
        });
      }
    }

    // 3. Centralita VoIP Asterisk (Marchel-Asterisk/)
    const pbxToy = document.querySelector(".toy-pbx");
    if (pbxToy) {
      const pbxKeys = Array.from(pbxToy.querySelectorAll(".js-toy-pbx[data-ext]"));
      const pbxReadout = pbxToy.querySelector(".toy-pbx-readout");
      let pbxTimer = null;

      pbxKeys.forEach((btn) => {
        btn.addEventListener("click", () => {
          const ext = btn.getAttribute("data-ext");
          if (!ext) return;

          clearTimeout(pbxTimer);
          pbxKeys.forEach((k) => {
            const active = k === btn && ext !== "hang";
            k.classList.toggle("is-active", active);
            k.setAttribute("aria-pressed", active ? "true" : "false");
          });

          if (ext === "hang") {
            pbxToy.classList.remove("is-ringing", "is-active");
            if (pbxReadout) pbxReadout.textContent = "Centralita Asterisk lista";
            soundscape.playToySound("hang");
            return;
          }

          if (ext === "IVR") {
            pbxToy.classList.remove("is-ringing");
            pbxToy.classList.add("is-active");
            if (pbxReadout) pbxReadout.textContent = "IVR Festival TTS · Locución español";
            soundscape.playToySound("ivr");
            return;
          }

          pbxToy.classList.remove("is-active");
          pbxToy.classList.add("is-ringing");
          if (pbxReadout) {
            pbxReadout.textContent =
              ext === "101"
                ? "Ext 101 Zoiper · Llamando PJSIP…"
                : "Ext 102 SIP · Llamando RTP…";
          }
          soundscape.playDtmf(ext);

          pbxTimer = window.setTimeout(() => {
            pbxToy.classList.remove("is-ringing");
            pbxToy.classList.add("is-active");
            if (pbxReadout) {
              pbxReadout.textContent =
                ext === "101"
                  ? "Ext 101 Zoiper · PJSIP conectado"
                  : "Ext 102 SIP · Audio activo";
            }
          }, 900);
        });
      });
    }

    // 4. Mini Chat WebSocket + AWS Lambda (LRSS-4/)
    const chatToy = document.querySelector(".toy-chat");
    if (chatToy) {
      const logEl = chatToy.querySelector(".toy-chat-log");
      const meterEl = chatToy.querySelector(".toy-chat-meter");
      const cmdBtns = Array.from(chatToy.querySelectorAll(".js-toy-chat[data-cmd]"));
      let totalKb = 0;
      let msgCount = 0;

      const CHAT_SCRIPT = {
        "TODOS:": {
          kb: 0.42,
          userHtml: "<b>Tú:</b> TODOS: ¡Listo para zarpar!",
          replyHtml: "<b>SocketIO:</b> Difusión global · RDS +0.42 KB"
        },
        GRUPO: {
          kb: 0.28,
          userHtml: "<b>Tú:</b> GRUPO Redes-UAH",
          replyHtml: "<b>Lambda:</b> Sala grupal activa · +0.28 KB"
        },
        "/stats": {
          kb: 0.18,
          userHtml: "<b>Tú:</b> /stats",
          replyHtml: null
        }
      };

      function appendBubble(htmlText, isReply) {
        if (!logEl) return;
        const msg = document.createElement("p");
        msg.className = isReply ? "toy-chat-msg toy-chat-msg--reply" : "toy-chat-msg";
        msg.innerHTML = htmlText;
        logEl.appendChild(msg);
        while (logEl.children.length > 4) {
          logEl.removeChild(logEl.firstElementChild);
        }
        if (canAnimate() && typeof msg.animate === "function") {
          msg.animate(
            [
              { opacity: 0, transform: "translateY(4px)" },
              { opacity: 1, transform: "translateY(0)" }
            ],
            { duration: 220, easing: "ease-out" }
          );
        }
      }

      cmdBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const cmd = btn.getAttribute("data-cmd");
          const spec = CHAT_SCRIPT[cmd];
          if (!spec) return;

          msgCount++;
          totalKb += spec.kb;
          const replyText =
            spec.replyHtml ||
            "<b>Lambda:</b> " + msgCount + " msgs · " + totalKb.toFixed(2) + " KB tarificados";

          appendBubble(spec.userHtml, false);
          appendBubble(replyText, true);
          if (meterEl) meterEl.textContent = totalKb.toFixed(2) + " KB · Lambda";
          soundscape.playToySound("chat");
        });
      });
    }
  }

  function setupTimelineFilters() {
    const filterBar = document.querySelector(".timeline-filters");
    const items = Array.from(document.querySelectorAll("#timelineContainer .timeline-item"));
    if (!filterBar || !items.length) return;

    const filterBtns = Array.from(filterBar.querySelectorAll(".filter-pill[data-timeline-filter]"));

    function applyTimelineFilter(filterKey) {
      filterBtns.forEach((btn) => {
        const isMatch = btn.getAttribute("data-timeline-filter") === filterKey;
        btn.classList.toggle("active", isMatch);
        btn.setAttribute("aria-pressed", isMatch ? "true" : "false");
      });

      items.forEach((item) => {
        const kind = item.getAttribute("data-timeline-kind") || "";
        const isFeatured = item.getAttribute("data-timeline-featured") === "true";
        const visible =
          filterKey === "all" ||
          (filterKey === "featured" ? isFeatured : kind === filterKey);
        item.hidden = !visible;
        if (visible) item.classList.add("in");
      });

      revealVisibleNow();
    }

    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-pill[data-timeline-filter]");
      if (!btn) return;
      applyTimelineFilter(btn.getAttribute("data-timeline-filter") || "featured");
    });

    applyTimelineFilter("featured");
  }

  /* ==================== ARRANQUE ==================== */

  function init() {
    fxEngine.setup();
    soundscape.setup();
    setupRevealAndMotion();
    setupSpotlightTracking();
    setupScrollEffects();
    setupChapterInteractions();
    setupFrierenChronicle();
    setupAvatarInteractions();
    setupProjects();
    setupProjectToys();
    setupTimelineFilters();
    setupArchitectureExplorer();
    setupModals();
    setupContact();
    setupPlannedPhotoSlots();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
