/**
 * Batería de verificación DOM, narrativa e integración para el portafolio de Chelsea (CHFH).
 * Incluye validación síncrona y asíncrona (scroll metamórfico, parallax eólico y geometría .wave).
 */
(function () {
  "use strict";

  function click(el) {
    if (!el) return;
    el.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
  }

  window.__runPortfolioVerification = function () {
    const results = [];

    function check(name, condition, detail) {
      results.push({
        name: name,
        pass: Boolean(condition),
        detail: detail || ""
      });
    }

    // 1. Contrato 1:1 de selectores en index.html
    const requiredSelectors = [
      "#scrollProgressBar",
      "#fx",
      ".nav[data-theme]",
      ".nav .brand",
      '#inicio[data-theme-zone="frieren"]',
      "#cvActionBtn",
      ".js-sound",
      "#sobre-mi",
      ".frieren-chronicle",
      "#frierenInfiniteGallery",
      ".marquee-liner--games",
      ".marquee-liner--books",
      "#frierenPhotoGallery",
      ".frieren-chronicle-dice-row .frieren-dice-tray",
      "#frierenGameDiceBtn",
      "#frierenBookDiceBtn",
      "#frierenDiceCubeA",
      "#frierenDiceCubeB",
      "#frierenGameDiceResult",
      "#frierenBookDiceResult",
      "#sobre-mi .frieren-chronicle-aside .frieren-travel-gallery",
      ".treasure svg .treasure-hat",
      ".treasure svg .treasure-wave-back",
      ".treasure svg .treasure-wave-front",
      ".treasure svg .treasure-sun",
      ".treasure svg .treasure-rays",
      ".vr-3d-headset",
      ".vr-3d-headset svg",
      ".mail-3d-stack",
      "#frierenGamesList",
      "#frierenBooksGrid",
      "#staff",
      ".staff-rune",
      ".gem",
      "#spell",
      '#comunidad[data-theme-zone="avatar"]',
      "#comunidad .wind-bg",
      ".swirl",
      ".av-bullets-toggle",
      "#aangPhotoGallery.avatar-flow",
      "#aangPhotoGallery .card-av[data-planned-src]",
      ".avatar-photo-slot",
      ".elements .el--aire",
      ".elements .el--agua",
      ".elements .el--tierra",
      ".elements .el--fuego",
      "#elementPulseNote",
      ".tea-corner",
      "#teaQuoteText",
      "#teaQuoteAuthor",
      "#teaQuoteSource",
      "#nextQuoteBtn",
      '#aventura[data-theme-zone="onepiece"]',
      ".hat",
      ".nakama-eggs",
      "#brookEggBtn",
      "#robinEggBtn",
      "#nakamaEggBubble",
      "#nakamaEggChar",
      "#nakamaEggQuote",
      ".treasure #cvActionBtn",
      "#proyectos",
      "#projectSearchInput",
      "#projectCategoryFilters",
      "#projectsCountBadge",
      "#activeSkillChipBadge",
      "#clearFiltersBtn",
      ".projects-gallery-frame",
      ".projects-gallery-footer",
      "#projectStageDots",
      "#projectStageCounter",
      "#projectPrevBtn",
      "#projectNextBtn",
      "#projectsGrid",
      ".card-op-split",
      ".card-op-console",
      ".toy-vr",
      ".toy-casillero",
      ".toy-pbx",
      ".toy-chat",
      "#arquitectura",
      "#archProjectTabs",
      ".arch-layer-legend [data-layer]",
      "#archSummary",
      "#archGraphCanvas",
      "#archNodeDetail",
      "#habilidades",
      "#skillsMatrix .skill-chip[role='button']",
      "#trayectoria",
      ".timeline-filters",
      "#timelineContainer",
      '#contacto[data-theme-zone="contact"]',
      "#copyEmailBtn",
      "#emailDisplay",
      "#cv",
      "#contactForm",
      "#contactName",
      "#contactTopic",
      "#contactMessage",
      "#animeToggle",
      "#projectModal",
      "#projectModalClose",
      "#projectModalContent",
      "#cvModal",
      "#cvModalClose",
      "#cvModalBody",
      "#siteToast"
    ];

    const missingSelectors = requiredSelectors.filter((sel) => !document.querySelector(sel));
    check(
      "Contrato DOM 1:1",
      missingSelectors.length === 0,
      missingSelectors.length
        ? "Faltan: " + missingSelectors.join(", ")
        : requiredSelectors.length + " selectores OK"
    );

    // 2. Marca CHFH, favicon y separación ubicación de #cvActionBtn
    const brandText = (document.querySelector(".nav .brand") || {}).textContent || "";
    const faviconHref = (document.querySelector('link[rel="icon"]') || {}).getAttribute
      ? document.querySelector('link[rel="icon"]').getAttribute("href") || ""
      : "";
    const cvInAventura = Boolean(document.querySelector("#aventura #cvActionBtn"));
    const cvInInicio = Boolean(document.querySelector("#inicio #cvActionBtn"));
    check(
      "Marca CHFH y #cvActionBtn en Capítulo III",
      brandText.trim() === "CHFH" &&
        faviconHref.indexOf("CHFH") !== -1 &&
        cvInAventura &&
        !cvInInicio,
      "brand=" + brandText.trim() + ", cvInAventura=" + cvInAventura
    );

    // 3. Separación estricta personal vs carrera en Frieren (#inicio) y Avatar (#comunidad)
    const techLeakPattern = /\b(parfois|450|900|telemática|telematica|teleco|backend|docker|fastapi|microservicios?|prácticas|practicas|arquitectura|ingenier[íaa])\b/i;
    const frierenEl = document.getElementById("inicio");
    const avatarEl = document.getElementById("comunidad");
    const sobreMiEl = document.getElementById("sobre-mi");
    const frierenText = frierenEl ? frierenEl.innerText.replace(/\s+/g, " ") : "";
    const avatarText = avatarEl ? avatarEl.innerText.replace(/\s+/g, " ") : "";
    const sobreMiText = sobreMiEl ? sobreMiEl.innerText.replace(/\s+/g, " ") : "";
    const frierenLeak = frierenText.match(techLeakPattern);
    const avatarLeak = avatarText.match(techLeakPattern);
    check(
      "Separación personal vs carrera (Frieren & Avatar)",
      !frierenLeak && !avatarLeak,
      !frierenLeak && !avatarLeak
        ? "0 fugas técnicas en Hero, Frieren y Avatar"
        : "Fuga detectada: " + (frierenLeak ? frierenLeak[0] : avatarLeak[0])
    );

    // 3b. Wave 3: Cero Cuba, cero ROBOcampeones, "nací en una isla" única, textos sagrados intactos y layout abierto sin cajas
    const data = window.PORTFOLIO_DATA || {};
    const serializedData = JSON.stringify(data);
    const bodyText = document.body ? document.body.innerText.replace(/\s+/g, " ") : "";
    const bodyTextContent = document.body ? document.body.textContent.replace(/\s+/g, " ") : "";
    const metaDesc = (document.querySelector('meta[name="description"]') || {}).content || "";
    const cubaMatchesDom = (bodyTextContent + " " + metaDesc).match(/\bcuba\b/gi) || [];
    const cubaMatchesData = serializedData.match(/\bcuba\b/gi) || [];
    const badRoboDom = bodyTextContent.match(/ROBOcampeones/g) || [];
    const badRoboData = serializedData.match(/ROBOcampeones/g) || [];
    const goodRoboCount = (bodyTextContent.match(/Robocampeones/g) || []).length;
    const islaMatchesSobreMi = (sobreMiEl ? sobreMiEl.textContent : "").match(/nac[ií] en una isla/gi) || [];
    const heroLeadText = ((document.querySelector("#inicio .lead") || {}).textContent || "").replace(/\s+/g, " ").trim();
    const heroClean =
      heroLeadText.indexOf("Este espacio recorre quién soy en tres etapas") !== -1 &&
      heroLeadText.toLowerCase().indexOf("la paz de lo pequeño") === -1;

    const intactFrierenReflection =
      "«Frieren me recuerda que debemos tomarnos las cosas con calma. Las personas vivimos demasiado poco y casi siempre vamos con prisa, olvidándonos de lo sencillo. Al final, lo único que da verdadero valor a la vida es disfrutar de las pequeñas cosas con tranquilidad y dedicar tiempo de calidad a quienes quieres, sin olvidarte de vivir.»";
    const intactFrierenIntro =
      "Lejos de cualquier pantalla o reloj, mi ritmo cotidiano busca cuidar esos pequeños rituales que me devuelven al equilibrio: escuchar las olas, sentarme alrededor de una mesa con los míos o perderme en una buena historia sobre una manta en el campo.";
    const intactTreasureHeading = "El tesoro no es el destino";
    const intactTreasureQuote =
      "«Sigo en plena travesía descubriendo cuáles son todos mis sueños y cómo hacerlos realidad, pero tengo claro cómo quiero vivir el viaje: rodeada de buenos nakamas, aprendiendo en cada proyecto complejo y celebrando cada festín por el camino.»";
    const intactTreasureContext =
      "Compaginar el grado en la UAH (2027) con becas de I+D y casi cuatro años trabajando los fines de semana en Parfois (Nov 2022 – Ago 2026) ha entrenado mi gestión del tiempo, resiliencia y trabajo bajo presión. Ahora busco prácticas curriculares (450 h) ampliables a 900 h.";

    const allIntactOk =
      frierenText.indexOf(intactFrierenReflection) !== -1 &&
      frierenText.indexOf(intactFrierenIntro) !== -1 &&
      bodyText.indexOf(intactTreasureHeading) !== -1 &&
      bodyText.indexOf(intactTreasureQuote) !== -1 &&
      bodyText.indexOf(intactTreasureContext) !== -1;

    check(
      "Limpieza Cuba/Robocampeones y textos intactos",
      cubaMatchesDom.length === 0 &&
        cubaMatchesData.length === 0 &&
        badRoboDom.length === 0 &&
        badRoboData.length === 0 &&
        goodRoboCount >= 2 &&
        islaMatchesSobreMi.length === 1 &&
        heroClean &&
        allIntactOk,
      "cuba=" +
        (cubaMatchesDom.length + cubaMatchesData.length) +
        ", badRobo=" +
        (badRoboDom.length + badRoboData.length) +
        ", isla=" +
        islaMatchesSobreMi.length +
        ", intact=" +
        allIntactOk
    );

    const legacyBoxesGone = document.querySelectorAll(".journey, .stop").length === 0;
    const openCardsNoShadow = Array.from(
      document.querySelectorAll("#projectsGrid .card-op, #aangPhotoGallery .card-av")
    ).every((el) => window.getComputedStyle(el).boxShadow === "none");
    check(
      "Layout abierto sin rectángulos ni sombra sólida",
      legacyBoxesGone && Boolean(document.querySelector(".frieren-chronicle")) && openCardsNoShadow,
      "legacy=" + legacyBoxesGone + ", noShadow=" + openCardsNoShadow
    );

    // 4. Capítulo II Avatar: 3 hitos abiertos y 2 huecos sobrios sin SVG inventado
    const avatarCards = Array.from(document.querySelectorAll("#aangPhotoGallery .card-av"));
    const avatarCardText = avatarCards.map((c) => c.innerText).join(" ");
    const requiredAvatarTerms = ["Robocampeones", "Endesa", "alumna", "Saludea", "CNSM", "2026"];
    const missingAvatarTerms = requiredAvatarTerms.filter(
      (term) => avatarCardText.indexOf(term) === -1
    );
    const avatarSlots = Array.from(document.querySelectorAll("#aangPhotoGallery .avatar-photo-slot"));
    const avatarSlotsClean =
      avatarSlots.length >= 2 &&
      avatarSlots.every(
        (slot) => !slot.querySelector("svg") && (Boolean(slot.querySelector("img")) || Boolean(slot.querySelector(".slot-badge")))
      );
    const elementsSemanticOk =
      document.querySelectorAll("#comunidad .elements .el").length === 4 &&
      Boolean(document.querySelector("#comunidad .elements .el--aire")) &&
      Boolean(document.querySelector("#comunidad .elements .el--agua")) &&
      Boolean(document.querySelector("#comunidad .elements .el--tierra")) &&
      Boolean(document.querySelector("#comunidad .elements .el--fuego"));
    check(
      "Avatar 3 hitos + 4 elementos + fotos reales",
      avatarCards.length === 3 && missingAvatarTerms.length === 0 && avatarSlotsClean && elementsSemanticOk,
      "cards=" + avatarCards.length + ", slots=" + avatarSlots.length + ", elements=" + elementsSemanticOk
    );

    // 5. Capítulo III One Piece: 4 encabezados editoriales .card-op-head y 0 .pic svg
    const projects = Array.isArray(data.projects) ? data.projects : [];
    const cardArticles = Array.from(
      document.querySelectorAll("#projectsGrid .card-op[data-project-id]")
    );
    const allEditorialHeads =
      cardArticles.length === 4 &&
      cardArticles.every(
        (c) => Boolean(c.querySelector(".card-op-head")) && !c.querySelector(".pic svg")
      );
    check(
      "PORTFOLIO_DATA y tarjetas .card-op-head",
      projects.length === 4 && allEditorialHeads,
      "projects=" + projects.length + ", cards=" + cardArticles.length + ", editorialHead=" + allEditorialHeads
    );

    // 6. Privacidad sin teléfono expuesto en PORTFOLIO_DATA ni DOM visible
    const phonePattern = /(?:\+34[\s.-]?)?(?:6|7)\d{2}[\s.-]?\d{3}[\s.-]?\d{3}/;
    check(
      "Privacidad sin teléfono expuesto",
      !phonePattern.test(serializedData) && !phonePattern.test(bodyText),
      "Verificado en PORTFOLIO_DATA y DOM"
    );

    // 7. Báculo de Frieren (100% Sousou no Frieren), Citas Tío Iroh (1er clic cambia), Sombrero y Brook/Nico Robin
    const spellEl = document.getElementById("spell");
    const staffEl = document.getElementById("staff");
    const spellTextsSeen = [];
    for (let s = 0; s < 6; s++) {
      click(staffEl);
      if (spellEl) spellTextsSeen.push(spellEl.textContent || "");
    }
    const staffHasCast = Boolean(staffEl && staffEl.classList.contains("cast"));
    const nonFrierenLeakPattern = /\b(cuba|mil[aá]n|copenhague|lego|cat[aá]n|hitster)\b/i;
    const expectedFrierenSpells =
      data.pillars && data.pillars.frieren && Array.isArray(data.pillars.frieren.spells)
        ? data.pillars.frieren.spells
        : [];
    const spellsClean =
      spellTextsSeen.length === 6 &&
      new Set(spellTextsSeen).size >= 5 &&
      spellTextsSeen.every(
        (txt) =>
          !techLeakPattern.test(txt) &&
          !nonFrierenLeakPattern.test(txt) &&
          (!expectedFrierenSpells.length || expectedFrierenSpells.indexOf(txt) !== -1)
      );
    check(
      "Báculo Frieren (.cast + frases Sousou no Frieren)",
      staffHasCast && spellsClean,
      spellTextsSeen[0] ? spellTextsSeen[0].slice(0, 48) : ""
    );

    const quoteBefore = (document.getElementById("teaQuoteText") || {}).textContent || "";
    click(document.getElementById("nextQuoteBtn"));
    const quoteAfter = (document.getElementById("teaQuoteText") || {}).textContent || "";
    const teaPouring = document.querySelector(".tea-corner").classList.contains("is-pouring");
    const quotesList = Array.isArray(data.quotes) ? data.quotes : [];
    const allQuotesIroh =
      quotesList.length >= 5 &&
      quotesList.every(
        (q) =>
          (q.author || "").indexOf("Iroh") !== -1 &&
          (q.source || "").indexOf("Avatar") !== -1
      );
    check(
      "Rincón de Té Tío Iroh (#nextQuoteBtn)",
      quoteAfter !== quoteBefore && teaPouring && allQuotesIroh && !techLeakPattern.test(quoteAfter),
      quoteAfter.slice(0, 48)
    );

    const brookBtn = document.getElementById("brookEggBtn");
    const robinBtn = document.getElementById("robinEggBtn");
    const nakamaBubble = document.getElementById("nakamaEggBubble");
    const eggCharEl = document.getElementById("nakamaEggChar");
    const eggQuoteEl = document.getElementById("nakamaEggQuote");
    const eggQuoteBefore = eggQuoteEl ? eggQuoteEl.textContent : "";
    click(brookBtn);
    const brookQuote1 = eggQuoteEl ? eggQuoteEl.textContent : "";
    const brookChar1 = eggCharEl ? eggCharEl.textContent : "";
    const brookBtnActive = Boolean(
      brookBtn &&
        brookBtn.classList.contains("is-active") &&
        brookBtn.getAttribute("aria-pressed") === "true" &&
        nakamaBubble &&
        nakamaBubble.getAttribute("data-character") === "brook"
    );
    click(robinBtn);
    const robinQuote1 = eggQuoteEl ? eggQuoteEl.textContent : "";
    const robinChar1 = eggCharEl ? eggCharEl.textContent : "";
    const robinBtnActive = Boolean(
      robinBtn &&
        robinBtn.classList.contains("is-active") &&
        robinBtn.getAttribute("aria-pressed") === "true" &&
        brookBtn &&
        !brookBtn.classList.contains("is-active") &&
        brookBtn.getAttribute("aria-pressed") === "false" &&
        nakamaBubble &&
        nakamaBubble.getAttribute("data-character") === "robin"
    );
    click(brookBtn);
    const brookQuote2 = eggQuoteEl ? eggQuoteEl.textContent : "";
    check(
      "Easter eggs Brook & Nico Robin",
      brookQuote1 !== eggQuoteBefore &&
        brookChar1.indexOf("Brook") !== -1 &&
        brookBtnActive &&
        robinQuote1 !== brookQuote1 &&
        robinChar1.indexOf("Nico Robin") !== -1 &&
        robinBtnActive &&
        brookQuote2 !== brookQuote1,
      "brook=" + brookQuote1.slice(0, 26) + " | robin=" + robinQuote1.slice(0, 26)
    );

    const hatEl = document.querySelector("#aventura .hat");
    click(hatEl);
    check(
      "Sombrero One Piece (.is-bouncing)",
      Boolean(hatEl && hatEl.classList.contains("is-bouncing")),
      "bounce OK"
    );

    // 8. Botones de sonido sincronizados + disparo limpio en One Piece (sin crash AudioContext)
    const soundBtns = Array.from(document.querySelectorAll(".js-sound"));
    click(soundBtns[0]);
    const allPressed =
      soundBtns.length >= 2 &&
      soundBtns.every((b) => b.getAttribute("aria-pressed") === "true");
    click(brookBtn);
    click(hatEl);
    click(robinBtn);
    click(soundBtns[1]);
    const allReset =
      soundBtns.length >= 2 &&
      soundBtns.every((b) => b.getAttribute("aria-pressed") === "false");
    check(
      "Sincronización .js-sound y audio Brook/Sombrero/Robin",
      allPressed && allReset,
      "pressed=" + allPressed + ", reset=" + allReset
    );

    // 9. Modo anime #animeToggle
    const animeBtn = document.getElementById("animeToggle");
    click(animeBtn);
    const animeOffOk =
      document.documentElement.getAttribute("data-anime") === "off" &&
      animeBtn.getAttribute("aria-checked") === "false";
    click(animeBtn);
    const animeOnOk =
      document.documentElement.getAttribute("data-anime") === "on" &&
      animeBtn.getAttribute("aria-checked") === "true";
    check("Interruptor #animeToggle", animeOffOk && animeOnOk, "off=" + animeOffOk + ", on=" + animeOnOk);

    // 10. Ronda 9 · Galería < > One Piece inicial (compatible con transición simultánea)
    const getVisibleStageCards = () =>
      cardArticles.filter(
        (c) =>
          !c.hidden &&
          c.style.display !== "none" &&
          c.classList.contains("is-active-stage") &&
          !c.classList.contains("is-leaving-next") &&
          !c.classList.contains("is-leaving-prev")
      );
    const initVisibleCards = getVisibleStageCards();
    const initFirstCard = initVisibleCards[0];
    const stageCounterEl = document.getElementById("projectStageCounter");
    const m1El = document.getElementById("m1");
    const roleCalloutFirst = initFirstCard && initFirstCard.querySelector(".role-callout");
    const m1Visible = Boolean(
      m1El && !m1El.hidden && window.getComputedStyle(m1El).display !== "none"
    );
    const deadSelectorsRemoved =
      document.querySelectorAll(
        "#frierenChronicleTabs, #projectTechFilterBar, #projectStagePills, #projectStageProgress, .op-card-tabs, .op-card-panel, .op-card-tab, .stop-note"
      ).length === 0;
    const singleRepoPerCard =
      cardArticles.length === 4 &&
      cardArticles.every((c) => {
        const repoEl = c.querySelector(".card-op-repo");
        const instEl = c.querySelector(".card-op-inst");
        const repoText = repoEl ? repoEl.textContent : "";
        const instText = instEl ? instEl.textContent : "";
        return repoText.indexOf("Repo:") !== -1 && instText.indexOf("Repo:") === -1;
      });
    const initDots = document.querySelectorAll("#projectStageDots .gallery-dot");

    check(
      "Galería One Piece inicial + deduplicación HTML",
      initVisibleCards.length === 1 &&
        initFirstCard.getAttribute("data-project-id") === "controlador-cervantes" &&
        initFirstCard.classList.contains("is-active-stage") &&
        stageCounterEl &&
        stageCounterEl.textContent.trim() === "01 / 04" &&
        initDots.length === 4 &&
        initDots[0].classList.contains("is-active") &&
        Boolean(roleCalloutFirst) &&
        m1Visible &&
        deadSelectorsRemoved &&
        singleRepoPerCard,
      "visible=" +
        initVisibleCards.length +
        ", counter=" +
        (stageCounterEl ? stageCounterEl.textContent.trim() : "") +
        ", dedup=" +
        (deadSelectorsRemoved && singleRepoPerCard)
    );

    // 10b. Ronda 6 · Frieren Dados 3D laterales (Juego O Libro) + Galería infinita
    const passages = Array.from(document.querySelectorAll(".frieren-chronicle-p[data-passage]"));
    const allPassagesVisible = passages.length === 3 && passages.every((p) => !p.hidden);

    const gameLists = document.querySelectorAll(".marquee-liner--games .marquee-list");
    const bookLists = document.querySelectorAll(".marquee-liner--books .marquee-list");
    const gamesClone = document.querySelector('.marquee-liner--games [data-marquee-clone="true"]');
    const booksClone = document.querySelector('.marquee-liner--books [data-marquee-clone="true"]');
    const clonesAccessible = Boolean(
      gamesClone &&
        !gamesClone.id &&
        gamesClone.getAttribute("aria-hidden") === "true" &&
        booksClone &&
        !booksClone.id &&
        booksClone.getAttribute("aria-hidden") === "true" &&
        gamesClone.querySelectorAll("button[tabindex='-1']").length === 11 &&
        booksClone.querySelectorAll("button[tabindex='-1']").length === 9
    );

    const gameDiceInRow = document.querySelector(".frieren-chronicle-dice-row #frierenGameDiceBtn");
    const bookDiceInRow = document.querySelector(".frieren-chronicle-dice-row #frierenBookDiceBtn");
    const gameDiceBtn = document.getElementById("frierenGameDiceBtn");
    const bookDiceBtn = document.getElementById("frierenBookDiceBtn");
    const legacyDiceRemoved = !document.getElementById("frierenDiceBtn") && !document.getElementById("frierenDiceResult");
    const diceCubeA = document.getElementById("frierenDiceCubeA");
    const diceCubeB = document.getElementById("frierenDiceCubeB");
    const diceFacesCount = document.querySelectorAll("#frierenDiceCubeA .dice-3d-face, #frierenDiceCubeB .dice-3d-face").length;
    const gameDiceResult = document.getElementById("frierenGameDiceResult");
    const bookDiceResult = document.getElementById("frierenBookDiceResult");
    const travelInAside = Boolean(
      document.querySelector("#sobre-mi .frieren-chronicle-aside .frieren-travel-gallery") &&
        !document.querySelector("#frierenInfiniteGallery .frieren-travel-gallery")
    );
    const gameBtns = document.querySelectorAll("#frierenGamesList .stop-tag--btn[data-game]");
    const bookBtns = document.querySelectorAll("#frierenBooksGrid .stop-tag--btn[data-book]");
    const travelTags = document.querySelectorAll("#frierenBooksGrid .stop-tag--travel");

    const rollTransformsA = new Set();
    const rollTransformsB = new Set();
    let sawGameRoll = false;
    let sawBookRoll = false;
    let lastGameText = "";
    let lastBookText = "";
    const noDicePrefix = (txt) =>
      txt.length > 0 &&
      txt.indexOf("Juego de mesa") === -1 &&
      txt.indexOf("juegos:") === -1 &&
      txt.indexOf("Lectura") === -1 &&
      txt.indexOf("libros:") === -1;

    for (let r = 0; r < 4; r++) {
      click(gameDiceBtn);
      if (diceCubeA && diceCubeA.style.transform) rollTransformsA.add(diceCubeA.style.transform);
      lastGameText = gameDiceResult ? gameDiceResult.textContent.trim() : "";
      if (noDicePrefix(lastGameText) && gameDiceResult && !gameDiceResult.hidden) {
        sawGameRoll = true;
      }
    }
    for (let r = 0; r < 4; r++) {
      click(bookDiceBtn);
      if (diceCubeB && diceCubeB.style.transform) rollTransformsB.add(diceCubeB.style.transform);
      lastBookText = bookDiceResult ? bookDiceResult.textContent.trim() : "";
      if (
        noDicePrefix(lastBookText) &&
        bookDiceResult &&
        !bookDiceResult.hidden &&
        gameDiceResult &&
        !gameDiceResult.hidden &&
        noDicePrefix(gameDiceResult.textContent.trim())
      ) {
        sawBookRoll = true;
      }
    }

    const gamePickedOrig = document.querySelectorAll("#frierenGamesList .stop-tag--btn.is-picked").length;
    const bookPickedOrig = document.querySelectorAll("#frierenBooksGrid .stop-tag--btn.is-picked").length;
    const totalPickedClone = document.querySelectorAll(
      '[data-marquee-clone="true"] .stop-tag--btn.is-picked'
    ).length;

    const testBookBtn = bookBtns[0];
    const testBookName = testBookBtn ? testBookBtn.getAttribute("data-book") : "";
    if (testBookBtn && !testBookBtn.classList.contains("is-picked")) click(testBookBtn);
    const cloneMatchingBook = booksClone
      ? Array.from(booksClone.querySelectorAll(".stop-tag--btn[data-book]")).find(
          (b) => b.getAttribute("data-book") === testBookName
        )
      : null;
    const bookSyncedOk = Boolean(
      testBookBtn &&
        testBookBtn.classList.contains("is-picked") &&
        cloneMatchingBook &&
        cloneMatchingBook.classList.contains("is-picked") &&
        passages.every((p) => !p.hidden)
    );
    if (cloneMatchingBook) click(cloneMatchingBook);

    const travelGalleryEl = document.querySelector("#sobre-mi .frieren-chronicle-aside .frieren-travel-gallery");
    const travelSlotEl = document.getElementById("frierenPhotoGallery");
    const noHeroRepeat = !document.querySelector(".frieren-postal-hero");
    const travelImgs = travelSlotEl ? Array.from(travelSlotEl.querySelectorAll("img")) : [];
    const uniqueTravelSrcs = new Set(travelImgs.map((img) => img.getAttribute("src") || "").filter(Boolean));
    const slotStyle = travelSlotEl ? window.getComputedStyle(travelSlotEl) : null;
    const slotSeamless = Boolean(
      slotStyle &&
        (slotStyle.backgroundColor === "rgba(0, 0, 0, 0)" || slotStyle.backgroundColor === "transparent") &&
        slotStyle.borderTopWidth === "0px"
    );
    const travelCards = travelGalleryEl ? Array.from(travelGalleryEl.querySelectorAll(".frieren-travel-card")) : [];
    const cardAnimNames = travelCards.map((c) => window.getComputedStyle(c).animationName);
    const sameTravelAnim = Boolean(
      cardAnimNames.length === 4 &&
        cardAnimNames[0] &&
        cardAnimNames[0] !== "none" &&
        cardAnimNames.every((n) => n === cardAnimNames[0])
    );
    const imgRects = travelImgs.map((img) => img.getBoundingClientRect());
    const sameTravelBox = Boolean(
      imgRects.length === 4 &&
        imgRects.every(
          (r) =>
            r.width > 0 &&
            r.height > 0 &&
            Math.abs(r.width - imgRects[0].width) <= 2 &&
            Math.abs(r.height - imgRects[0].height) <= 2
        )
    );
    const travelColsCount = travelGalleryEl
      ? window.getComputedStyle(travelGalleryEl).gridTemplateColumns.trim().split(/\s+/).filter(Boolean).length
      : 0;
    const singleColDesktop = window.innerWidth < 860 || travelColsCount === 1;
    const travelBtns = travelGalleryEl
      ? Array.from(travelGalleryEl.querySelectorAll(".frieren-travel-btn"))
      : [];
    const milanBtn =
      travelBtns.find((b) => {
        const img = b.querySelector("img");
        return img && (img.getAttribute("src") || "").indexOf("milan.jpg") !== -1;
      }) || travelBtns[1];
    let travelActiveOk = false;
    if (travelBtns.length >= 2 && milanBtn) {
      click(milanBtn);
      const milanCard = milanBtn.closest(".frieren-travel-card");
      const activeAnimName = milanCard ? window.getComputedStyle(milanCard).animationName : "";
      travelActiveOk = Boolean(
        milanBtn.getAttribute("aria-pressed") === "true" &&
          milanCard &&
          milanCard.classList.contains("is-active") &&
          activeAnimName === cardAnimNames[0]
      );
      click(travelBtns[0]);
    }

    check(
      "Frieren Ronda 12 (4 postales misma caja/animación integradas + dados sin prefijo)",
      Boolean(gameDiceInRow) &&
        Boolean(bookDiceInRow) &&
        legacyDiceRemoved &&
        travelInAside &&
        noHeroRepeat &&
        slotSeamless &&
        sameTravelAnim &&
        sameTravelBox &&
        travelImgs.length === 4 &&
        uniqueTravelSrcs.size === 4 &&
        singleColDesktop &&
        travelBtns.length === 4 &&
        travelActiveOk &&
        diceFacesCount === 12 &&
        allPassagesVisible &&
        gameLists.length === 2 &&
        bookLists.length === 2 &&
        clonesAccessible &&
        gameBtns.length === 11 &&
        bookBtns.length === 9 &&
        travelTags.length === 4 &&
        rollTransformsA.size >= 3 &&
        rollTransformsB.size >= 3 &&
        sawGameRoll &&
        sawBookRoll &&
        gamePickedOrig === 1 &&
        bookPickedOrig === 1 &&
        totalPickedClone === 2 &&
        bookSyncedOk,
      "uniqueImgs=" +
        uniqueTravelSrcs.size +
        ", seamless=" +
        slotSeamless +
        ", sameBox=" +
        sameTravelBox +
        ", sameAnim=" +
        sameTravelAnim +
        ", cols=" +
        travelColsCount +
        ", game=" +
        lastGameText.slice(0, 16) +
        ", book=" +
        lastBookText.slice(0, 16)
    );

    // 10c. Ronda 7 · Avatar (sin .av-jump-bar, con hitos desplegables y 4 elementos)
    const noJumpBar =
      document.querySelectorAll(".av-jump-bar, .av-jump-pill, [data-av-jump]").length === 0;

    const avToggle0 = document.querySelector('.av-bullets-toggle[aria-controls="avBullets0"]');
    const avBullets0 = document.getElementById("avBullets0");
    click(avToggle0);
    const toggleDotPreserved = Boolean(avToggle0 && avToggle0.querySelector(".av-toggle-dot"));
    const avBulletsOpened = Boolean(
      avToggle0 &&
        avToggle0.getAttribute("aria-expanded") === "true" &&
        avBullets0 &&
        !avBullets0.hidden &&
        toggleDotPreserved
    );
    click(avToggle0);
    const avBulletsClosed = Boolean(
      avToggle0 && avToggle0.getAttribute("aria-expanded") === "false" && avBullets0 && avBullets0.hidden
    );

    const fuegoEl = document.querySelector('.elements .el[data-element="fuego"]');
    const aguaEl = document.querySelector('.elements .el[data-element="agua"]');
    const elementNote = document.getElementById("elementPulseNote");
    click(fuegoEl);
    const fuegoActive = Boolean(
      fuegoEl &&
        fuegoEl.classList.contains("is-active") &&
        fuegoEl.getAttribute("aria-pressed") === "true" &&
        elementNote &&
        elementNote.textContent.indexOf("Fuego") !== -1
    );
    if (aguaEl) {
      aguaEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
    }
    const aguaKeyActive = Boolean(
      aguaEl &&
        aguaEl.classList.contains("is-active") &&
        elementNote &&
        elementNote.textContent.indexOf("Agua") !== -1
    );
    check(
      "Avatar Ronda 7 (sin .av-jump-bar + hitos + 4 elementos)",
      noJumpBar && avBulletsOpened && avBulletsClosed && fuegoActive && aguaKeyActive,
      "noJumpBar=" + noJumpBar + ", toggle=" + (avBulletsOpened && avBulletsClosed) + ", Fuego/Agua OK"
    );

    // 10d. Ronda 6 · Galería < > ("solo 1 a la vez") + 4 Juguetes en vivo
    const prevStageBtn = document.getElementById("projectPrevBtn");
    const nextStageBtn = document.getElementById("projectNextBtn");
    const stageShell = document.querySelector(".project-stage-shell");
    const dotAsterisk = document.querySelector('#projectStageDots .gallery-dot[data-project-id="marchel-asterisk"]');
    const dotControlador = document.querySelector('#projectStageDots .gallery-dot[data-project-id="controlador-cervantes"]');

    // Juguete 1 (controlador-cervantes activo al inicio)
    const vrToy = document.querySelector(".toy-vr");
    const vrBtn = document.querySelector(".js-toy-vr");
    const vrScreen = document.querySelector(".toy-vr-screen");
    const vrBefore = vrScreen ? vrScreen.textContent : "";
    click(vrBtn);
    const vrOk = Boolean(
      vrToy &&
        vrToy.classList.contains("is-listening") &&
        vrScreen &&
        vrScreen.textContent !== vrBefore &&
        vrScreen.textContent.indexOf("Whisper") !== -1
    );

    // Avanzar con #projectNextBtn -> correos-casillero (02 / 04)
    click(nextStageBtn);
    const visStep2 = getVisibleStageCards();
    const step2Ok = Boolean(
      visStep2.length === 1 &&
        visStep2[0].getAttribute("data-project-id") === "correos-casillero" &&
        stageCounterEl &&
        stageCounterEl.textContent.trim() === "02 / 04"
    );

    const slotA1 = document.querySelector('.toy-casillero .toy-slot[data-slot="A1"]');
    const scanBtn = document.querySelector(".toy-casillero .js-toy-mail");
    const mailReadout = document.querySelector(".toy-mail-readout");
    const a1WasMail = Boolean(slotA1 && slotA1.classList.contains("has-mail"));
    click(slotA1);
    const a1Toggled = Boolean(slotA1 && slotA1.classList.contains("has-mail") !== a1WasMail);
    click(slotA1);
    click(scanBtn);
    const mailOk = Boolean(
      a1Toggled &&
        mailReadout &&
        mailReadout.textContent.indexOf("ONNX:") !== -1 &&
        mailReadout.textContent.indexOf("/8 casillas") !== -1
    );

    // Saltar con dot a marchel-asterisk (03 / 04)
    click(dotAsterisk);
    const visStep3 = getVisibleStageCards();
    const step3Ok = Boolean(
      visStep3.length === 1 &&
        visStep3[0].getAttribute("data-project-id") === "marchel-asterisk" &&
        dotAsterisk &&
        dotAsterisk.classList.contains("is-active") &&
        stageCounterEl &&
        stageCounterEl.textContent.trim() === "03 / 04"
    );

    const pbxToy = document.querySelector(".toy-pbx");
    const pbx101 = document.querySelector('.js-toy-pbx[data-ext="101"]');
    const pbxIvr = document.querySelector('.js-toy-pbx[data-ext="IVR"]');
    const pbxHang = document.querySelector('.js-toy-pbx[data-ext="hang"]');
    const pbxReadout = document.querySelector(".toy-pbx-readout");
    click(pbx101);
    const pbxRingOk = Boolean(pbxToy && pbxToy.classList.contains("is-ringing"));
    click(pbxIvr);
    const pbxIvrOk = Boolean(
      pbxToy &&
        pbxToy.classList.contains("is-active") &&
        pbxReadout &&
        pbxReadout.textContent.indexOf("IVR") !== -1
    );
    click(pbxHang);
    const pbxHangOk = Boolean(
      pbxToy && !pbxToy.classList.contains("is-ringing") && !pbxToy.classList.contains("is-active")
    );

    // Avanzar con #projectNextBtn -> nika-cloud (04 / 04)
    click(nextStageBtn);
    const visStep4 = getVisibleStageCards();
    const step4Ok = Boolean(
      visStep4.length === 1 &&
        visStep4[0].getAttribute("data-project-id") === "nika-cloud" &&
        stageCounterEl &&
        stageCounterEl.textContent.trim() === "04 / 04"
    );

    const chatBtnTodos = document.querySelector('.js-toy-chat[data-cmd="TODOS:"]');
    const chatBtnStats = document.querySelector('.js-toy-chat[data-cmd="/stats"]');
    const chatLog = document.querySelector(".toy-chat-log");
    const chatMeter = document.querySelector(".toy-chat-meter");
    click(chatBtnTodos);
    click(chatBtnStats);
    const chatMsgs = chatLog ? chatLog.querySelectorAll(".toy-chat-msg").length : 0;
    const chatOk = Boolean(
      chatMsgs > 0 &&
        chatMsgs <= 4 &&
        chatMeter &&
        chatMeter.textContent.indexOf("KB · Lambda") !== -1
    );

    // Retroceso con #projectPrevBtn -> 03 / 04 y teclado ArrowLeft -> 02 / 04, luego restaurar 01 / 04
    click(prevStageBtn);
    const visBack3 = getVisibleStageCards();
    const back3Ok = Boolean(
      visBack3.length === 1 && visBack3[0].getAttribute("data-project-id") === "marchel-asterisk"
    );
    if (stageShell) {
      stageShell.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true }));
    }
    const visKey2 = getVisibleStageCards();
    const key2Ok = Boolean(
      visKey2.length === 1 && visKey2[0].getAttribute("data-project-id") === "correos-casillero"
    );
    click(dotControlador);

    check(
      "Galería < > One Piece Ronda 6 + 4 Juguetes en vivo",
      step2Ok && step3Ok && step4Ok && back3Ok && key2Ok && vrOk && mailOk && pbxRingOk && pbxIvrOk && pbxHangOk && chatOk,
      "gallery=" +
        (step2Ok && step3Ok && step4Ok && back3Ok && key2Ok) +
        ", VR=" +
        vrOk +
        ", Casillero=" +
        mailOk +
        ", VoIP=" +
        (pbxRingOk && pbxIvrOk && pbxHangOk) +
        ", Chat=" +
        chatOk
    );

    // 10e. Ronda 4 · Filtros de Trayectoria (.timeline-filters)
    const tlFeatured = document.querySelector('[data-timeline-filter="featured"]');
    const tlAll = document.querySelector('[data-timeline-filter="all"]');
    const tlBecas = document.querySelector('[data-timeline-filter="becas"]');
    const tlComunidad = document.querySelector('[data-timeline-filter="comunidad"]');
    const countVisibleTl = () =>
      Array.from(document.querySelectorAll("#timelineContainer .timeline-item")).filter((el) => !el.hidden).length;
    const tlInitCount = countVisibleTl();
    click(tlAll);
    const tlAllCount = countVisibleTl();
    click(tlBecas);
    const tlBecasCount = countVisibleTl();
    click(tlComunidad);
    const tlComCount = countVisibleTl();
    click(tlFeatured);
    const tlBackCount = countVisibleTl();
    check(
      "Filtros de Trayectoria (.timeline-filters)",
      tlInitCount === 5 &&
        tlAllCount === 8 &&
        tlBecasCount === 2 &&
        tlComCount === 3 &&
        tlBackCount === 5,
      "featured=" + tlInitCount + ", all=" + tlAllCount + ", becas=" + tlBecasCount + ", comunidad=" + tlComCount
    );

    const galleryFooterEl = document.querySelector(".projects-gallery-footer");
    const activeSkillBadgeEl = document.getElementById("activeSkillChipBadge");
    const visibleDotsCount = () =>
      Array.from(document.querySelectorAll("#projectStageDots .gallery-dot")).filter((d) => !d.hidden).length;

    const catProf = document.querySelector('#projectCategoryFilters [data-category="profesional"]');
    click(catProf);
    const visibleAfterCat = getVisibleStageCards().length;
    const dotsAfterCat = visibleDotsCount();
    const badgeAfterCat = (document.getElementById("projectsCountBadge") || {}).textContent || "";
    const counterAfterCat = stageCounterEl ? stageCounterEl.textContent.trim() : "";

    const searchInput = document.getElementById("projectSearchInput");
    click(document.querySelector('#projectCategoryFilters [data-category="all"]'));
    searchInput.value = "Asterisk";
    searchInput.dispatchEvent(new Event("input", { bubbles: true }));
    const visibleAfterSingleSearch = getVisibleStageCards().length;
    const dotsAfterSingleSearch = visibleDotsCount();
    const counterAfterSingleSearch = stageCounterEl ? stageCounterEl.textContent.trim() : "";
    const arrowsDisabledOnOne = Boolean(prevStageBtn && prevStageBtn.disabled && nextStageBtn && nextStageBtn.disabled);

    searchInput.value = "inexistente-xyz-999";
    searchInput.dispatchEvent(new Event("input", { bubbles: true }));
    const visibleAfterEmpty = getVisibleStageCards().length;
    const emptyEl = document.querySelector("#projectsGrid .projects-empty");
    const emptyShown = Boolean(emptyEl && !emptyEl.hidden);
    const footerHiddenOnEmpty = Boolean(galleryFooterEl && galleryFooterEl.hidden);
    const arrowsHiddenOnEmpty = Boolean(prevStageBtn && prevStageBtn.hidden && nextStageBtn && nextStageBtn.hidden);
    const counterOnEmpty = stageCounterEl ? stageCounterEl.textContent.trim() : "";

    click(document.getElementById("clearFiltersBtn"));
    const restoredStageCount = getVisibleStageCards().length;
    const restoredDots = visibleDotsCount();
    const restoredBadge = (document.getElementById("projectsCountBadge") || {}).textContent || "";
    const restoredCounter = stageCounterEl ? stageCounterEl.textContent.trim() : "";
    check(
      "Filtros proyectos en galería < > y vacío",
      visibleAfterCat === 1 &&
        dotsAfterCat === 2 &&
        badgeAfterCat === "2 proyectos" &&
        counterAfterCat === "01 / 02" &&
        visibleAfterSingleSearch === 1 &&
        dotsAfterSingleSearch === 1 &&
        counterAfterSingleSearch === "01 / 01" &&
        arrowsDisabledOnOne &&
        visibleAfterEmpty === 0 &&
        emptyShown &&
        footerHiddenOnEmpty &&
        arrowsHiddenOnEmpty &&
        counterOnEmpty === "00 / 00" &&
        restoredStageCount === 1 &&
        restoredDots === 4 &&
        restoredBadge === "4 proyectos" &&
        restoredCounter === "01 / 04",
      "cat=" + badgeAfterCat + "/" + counterAfterCat + ", search=" + counterAfterSingleSearch + ", empty=" + counterOnEmpty + ", reset=" + restoredCounter
    );

    const fastApiChip = Array.from(document.querySelectorAll("#skillsMatrix .skill-chip")).find(
      (c) => c.textContent.trim() === "FastAPI"
    );
    click(fastApiChip);
    const visibleAfterSkill = getVisibleStageCards().length;
    const dotsAfterSkill = visibleDotsCount();
    const counterAfterSkill = stageCounterEl ? stageCounterEl.textContent.trim() : "";
    const skillBadgeOk = Boolean(
      activeSkillBadgeEl &&
        !activeSkillBadgeEl.hidden &&
        activeSkillBadgeEl.textContent.indexOf("FastAPI") !== -1
    );
    const cChip = Array.from(document.querySelectorAll("#skillsMatrix .skill-chip")).find(
      (c) => c.textContent.trim() === "C"
    );
    click(cChip);
    const cChipNoBreak =
      getVisibleStageCards().length === 1 &&
      visibleDotsCount() === 4 &&
      (stageCounterEl ? stageCounterEl.textContent.trim() === "01 / 04" : false) &&
      !fastApiChip.classList.contains("active");
    if (cChip.classList.contains("active")) click(cChip);
    const skillBadgeCleared = Boolean(activeSkillBadgeEl && activeSkillBadgeEl.hidden);
    check(
      "Integración #skillsMatrix + #activeSkillChipBadge",
      visibleAfterSkill === 1 &&
        dotsAfterSkill === 2 &&
        counterAfterSkill === "01 / 02" &&
        skillBadgeOk &&
        cChipNoBreak &&
        skillBadgeCleared,
      "FastAPI=" + counterAfterSkill + ", badge=" + skillBadgeOk + ", fallbackC=" + cChipNoBreak
    );

    // 11. Modales de proyecto y CV + Escape + salto a arquitectura desde modal
    const openProjBtn = document.querySelector('[data-project-open="correos-casillero"]');
    click(openProjBtn);
    const projModal = document.getElementById("projectModal");
    const projTitle = (document.getElementById("projectModalTitle") || {}).textContent || "";
    const projOpened =
      projModal.classList.contains("is-open") &&
      projModal.getAttribute("aria-hidden") === "false" &&
      projTitle.indexOf("Correos") !== -1;
    const modalArchBtn = projModal.querySelector('[data-modal-arch="correos-casillero"]');
    click(modalArchBtn);
    const jumpedToCorreosArch = document
      .querySelector('#archProjectTabs [data-project="correos-casillero"]')
      .classList.contains("active");
    const modalClosedByJump =
      !projModal.classList.contains("is-open") && projModal.getAttribute("aria-hidden") === "true";

    click(document.querySelector('[data-project-open="controlador-cervantes"]'));
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    const projClosedEsc =
      !projModal.classList.contains("is-open") && projModal.getAttribute("aria-hidden") === "true";
    check(
      "Modal proyecto accesible",
      projOpened && jumpedToCorreosArch && modalClosedByJump && projClosedEsc,
      projTitle
    );

    const cvBtn = document.getElementById("cvActionBtn");
    click(cvBtn);
    const cvModal = document.getElementById("cvModal");
    const cvFrame = cvModal.querySelector("iframe.modal-cv-frame");
    const cvHasPdf = Boolean(
      cvFrame && (cvFrame.getAttribute("src") || "").indexOf("CV_Chelsea_Fdez_Hdez.pdf") !== -1
    );
    const cvOpened =
      cvModal.classList.contains("is-open") &&
      cvModal.getAttribute("aria-hidden") === "false" &&
      cvHasPdf;
    click(document.getElementById("cvModalClose"));
    const cvClosed =
      !cvModal.classList.contains("is-open") && cvModal.getAttribute("aria-hidden") === "true";
    check("Modal CV PDF", cvOpened && cvClosed, "frame=" + cvHasPdf);

    // 12. Explorador de arquitectura (tabs, nodos conectados, salto y capa)
    const correosTab = document.querySelector('#archProjectTabs [data-project="correos-casillero"]');
    click(correosTab);
    const correosNodes = document.querySelectorAll("#archGraphCanvas .arch-node-card").length;
    const iaNode = document.querySelector('#archGraphCanvas [data-node-id="ia-worker"]');
    click(iaNode);
    const iaSelected = document
      .querySelector('#archGraphCanvas [data-node-id="ia-worker"]')
      .classList.contains("is-selected");
    const redisConnected = document
      .querySelector('#archGraphCanvas [data-node-id="redis-broker"]')
      .classList.contains("is-connected");
    const pgConnected = document
      .querySelector('#archGraphCanvas [data-node-id="postgres-db"]')
      .classList.contains("is-connected");
    const detailText = (document.getElementById("archNodeDetail") || {}).textContent || "";
    const jumpChip = document.querySelector(
      '#archNodeDetail .arch-conn-chip[data-jump-node="redis-broker"]'
    );
    click(jumpChip);
    const redisSelected = document
      .querySelector('#archGraphCanvas [data-node-id="redis-broker"]')
      .classList.contains("is-selected");
    click(document.querySelector('.arch-layer-legend [data-layer="datos"]'));
    const datosActive = document
      .querySelector('.arch-layer-legend [data-layer="datos"]')
      .classList.contains("is-active");
    check(
      "Explorador arquitectura",
      correosNodes === 7 &&
        iaSelected &&
        redisConnected &&
        pgConnected &&
        detailText.indexOf("YOLO") !== -1 &&
        redisSelected &&
        datosActive,
      "nodes=" + correosNodes + ", jump=" + redisSelected + ", layer=" + datosActive
    );

    // 13. Canvas #fx, validación formulario mailto: y huecos sin imágenes rotas
    const fxCanvas = document.getElementById("fx");
    const fxOk = Boolean(fxCanvas && fxCanvas.width > 0 && fxCanvas.height > 0);
    check("Canvas #fx inicializado", fxOk, fxCanvas ? fxCanvas.width + "x" + fxCanvas.height : "missing");

    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("contactName");
    const msgInput = document.getElementById("contactMessage");

    const msgStyle = msgInput ? window.getComputedStyle(msgInput) : null;
    const resizeNone = Boolean(msgStyle && msgStyle.resize === "none");

    const initialMsgHeight = msgInput ? parseFloat(msgInput.style.height || (msgStyle ? msgStyle.height : "0")) : 0;
    if (msgInput) {
      msgInput.value = "Línea 1\nLínea 2\nLínea 3\nLínea 4\nLínea 5\nLínea 6\nLínea 7\nLínea 8";
      msgInput.dispatchEvent(new Event("input", { bubbles: true }));
    }
    const expandedMsgHeight = msgInput ? parseFloat(msgInput.style.height || (msgStyle ? msgStyle.height : "0")) : 0;
    const autoResizeWorks = Boolean(expandedMsgHeight > initialMsgHeight && expandedMsgHeight >= 84);

    nameInput.value = "";
    msgInput.value = "";
    if (msgInput) msgInput.dispatchEvent(new Event("input", { bubbles: true }));
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    const blockedEmpty = !form.getAttribute("data-last-mailto");

    nameInput.value = "Equipo QA";
    msgInput.value = "Hola Chelsea, nos interesa hablar sobre prácticas.";
    if (msgInput) msgInput.dispatchEvent(new Event("input", { bubbles: true }));
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    const mailtoVal = form.getAttribute("data-last-mailto") || "";
    const mailtoOk =
      mailtoVal.indexOf("mailto:chelseafh2003@gmail.com?") === 0 &&
      mailtoVal.indexOf("subject=") !== -1 &&
      !phonePattern.test(decodeURIComponent(mailtoVal));
    check(
      "Formulario contacto mailto:",
      blockedEmpty && mailtoOk && resizeNone && autoResizeWorks,
      "resize=" + (msgStyle ? msgStyle.resize : "none") + ", autoResize=" + autoResizeWorks + ", mailto=" + mailtoVal.slice(0, 48)
    );

    const uploadedNodes = document.querySelectorAll('[data-uploaded="true"]');
    const brokenImages = Array.from(document.querySelectorAll("img")).filter(
      (img) => img.complete && img.naturalWidth === 0
    ).length;
    const marchelLogo = document.querySelector('img[src*="logo-marchel.png"]');
    const nikaLogo = document.querySelector('img[src*="nika.svg"]');
    const logosLoaded = Boolean(
      marchelLogo &&
        marchelLogo.complete &&
        marchelLogo.naturalWidth > 0 &&
        nikaLogo &&
        nikaLogo.complete &&
        nikaLogo.naturalWidth > 0
    );
    check(
      "Fotos reales cargadas (data-uploaded, logos 3D y 0 rotas)",
      uploadedNodes.length >= 4 && logosLoaded && brokenImages === 0,
      "uploaded=" + uploadedNodes.length + ", logos=" + logosLoaded + ", broken=" + brokenImages
    );

    const justifySelectors = [
      ".hero .lead",
      ".sec-head .lead",
      ".frieren-chronicle-p",
      ".card-av p",
      ".card-op-main p",
      ".treasure p",
      ".timeline-summary"
    ];
    const justifyResults = justifySelectors.map((sel) => {
      const el = document.querySelector(sel);
      return { sel: sel, align: el ? window.getComputedStyle(el).textAlign : "missing" };
    });
    const allJustified = justifyResults.every((r) => r.align === "justify");
    check(
      "Texto justificado en bloques narrativos, proyectos e hitos",
      allJustified,
      justifyResults.map((r) => r.sel + "=" + r.align).join(", ")
    );

    const passed = results.filter((r) => r.pass).length;
    return {
      total: results.length,
      passed: passed,
      failed: results.length - passed,
      results: results
    };
  };

  window.__runScrollZoneCheck = function () {
    const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));
    const sequence = [
      { id: "inicio", expected: "frieren", block: "start" },
      { id: "comunidad", expected: "avatar", block: "center" },
      { id: "aventura", expected: "onepiece", block: "start" },
      { id: "trayectoria", expected: "onepiece", block: "center" },
      { id: "contacto", expected: "contact", block: "end" }
    ];

    return (async function () {
      const checks = [];
      for (let i = 0; i < sequence.length; i++) {
        const step = sequence[i];
        const target = document.getElementById(step.id);
        if (step.id === "contacto") {
          window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "instant" });
        } else if (target) {
          target.scrollIntoView({ behavior: "instant", block: step.block });
        }
        window.dispatchEvent(new Event("scroll"));
        await wait(160);

        const navLink = document.querySelector('.nav a[aria-current="true"]');
        const windBg = document.querySelector("#comunidad .wind-bg");
        const progressEl = document.getElementById("scrollProgressBar");
        const entry = {
          id: step.id,
          expected: step.expected,
          scrollY: Math.round(window.scrollY),
          htmlTheme: document.documentElement.getAttribute("data-theme"),
          navTheme: (document.querySelector(".nav") || {}).getAttribute
            ? document.querySelector(".nav").getAttribute("data-theme")
            : null,
          navZone: navLink ? navLink.getAttribute("data-zone") : null,
          windP: windBg ? windBg.style.getPropertyValue("--p") : "",
          scrollProgress: progressEl ? progressEl.style.width : ""
        };
        entry.pass =
          entry.htmlTheme === step.expected &&
          entry.navTheme === step.expected &&
          entry.navZone === step.expected;
        checks.push(entry);
      }

      // Comprobar toast de copia de email
      click(document.getElementById("copyEmailBtn"));
      await wait(120);
      const copyToastText = document.getElementById("siteToast").textContent || "";
      const copyToastOk =
        document.getElementById("siteToast").classList.contains("show") &&
        copyToastText.indexOf("chelseafh2003@gmail.com") !== -1;

      // Geometría de .wave: sin saltos verticales ni cortes subpíxel
      const docWidth = document.documentElement.clientWidth;
      const waves = Array.from(document.querySelectorAll(".wave"));
      const waveChecks = waves.map((wave, idx) => {
        const wr = wave.getBoundingClientRect();
        const section = wave.parentElement;
        const prevSection = section ? section.previousElementSibling : null;
        const pr = prevSection ? prevSection.getBoundingClientRect() : null;
        const svgs = Array.from(wave.querySelectorAll("svg"));
        const svgMetrics = svgs.map((svg) => {
          const sr = svg.getBoundingClientRect();
          const cs = window.getComputedStyle(svg);
          return {
            width: Math.round(sr.width * 10) / 10,
            maxWidthCss: cs.maxWidth,
            bottom: Math.round(sr.bottom * 10) / 10
          };
        });
        const svgCoverageOk =
          svgs.length === 2 &&
          svgMetrics.every((m) => m.bottom >= wr.bottom - 1 && m.width >= wr.width * 1.9);
        const seamGap = pr ? Math.round((wr.top - pr.bottom) * 10) / 10 : 0;
        return {
          index: idx,
          parentId: section ? section.id : "",
          waveWidth: Math.round(wr.width * 10) / 10,
          height: Math.round(wr.height * 10) / 10,
          widthMatchesViewport: Math.abs(wr.width - docWidth) <= 2,
          seamGapPx: seamGap,
          svgMetrics: svgMetrics,
          svgCoverageOk: svgCoverageOk,
          pass:
            wr.height >= 64 &&
            Math.abs(wr.width - docWidth) <= 2 &&
            Math.abs(seamGap) <= 2 &&
            svgCoverageOk
        };
      });

      const windMoved = checks.some((c) => {
        const val = parseFloat(c.windP);
        return !isNaN(val) && val > 0;
      });
      const firstScrollPct = checks.length ? parseFloat(checks[0].scrollProgress) : NaN;
      const lastScrollPct = checks.length ? parseFloat(checks[checks.length - 1].scrollProgress) : NaN;
      const scrollProgressOk =
        !isNaN(firstScrollPct) &&
        firstScrollPct <= 5 &&
        !isNaN(lastScrollPct) &&
        lastScrollPct >= 95;
      const unrevealedCount = Array.from(
        document.querySelectorAll(".rise:not([hidden]), .gust, .card-av")
      ).filter((el) => !el.classList.contains("in")).length;

      return {
        allZonesPassed: checks.every((c) => c.pass),
        windParallaxUpdated: windMoved,
        scrollProgressOk: scrollProgressOk,
        copyToastOk: copyToastOk,
        copyToastText: copyToastText,
        unrevealedCount: unrevealedCount,
        waveGeometryPassed: waveChecks.length === 3 && waveChecks.every((w) => w.pass),
        waveChecks: waveChecks,
        checks: checks
      };
    })();
  };
})();
