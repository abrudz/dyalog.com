/*
 * Home-page hero interactions:
 *  1. Faint interactive grid — tiles #hero-grid with fixed-size cells (hover
 *     behaviour is pure CSS; JS only injects the cells and re-tiles on resize).
 *  2. Header fade — the header/tabs are transparent over the hero and fade to a
 *     solid background once the hero has scrolled past (toggles a body class).
 */
(function () {
  var CELL = 72; // px — keep in sync with --cell fallback in extra.css

  /* ---- interactive grid ---- */
  function buildGrid(grid) {
    var w = grid.clientWidth;
    var h = grid.clientHeight;
    if (!w || !h) return;

    var cols = Math.ceil(w / CELL);
    var rows = Math.ceil(h / CELL);
    var need = cols * rows;

    grid.style.setProperty("--cols", cols);
    grid.style.setProperty("--cell", CELL + "px");

    for (var i = grid.childElementCount; i < need; i++) {
      var cell = document.createElement("div");
      cell.className = "hero-cell";
      grid.appendChild(cell);
    }
    while (grid.childElementCount > need) {
      grid.removeChild(grid.lastChild);
    }
  }

  function initGrid() {
    var grid = document.getElementById("hero-grid");
    if (!grid) return; // only on the home page

    buildGrid(grid);

    var raf = null;
    window.addEventListener("resize", function () {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () { buildGrid(grid); });
    });
  }

  /* ---- header fade on scroll ---- */
  function initHeaderFade() {
    var hero = document.querySelector(".mdx-hero");
    var header = document.querySelector(".md-header");
    if (!hero || !header) {
      // not the home page — make sure the class isn't left on from before
      document.body.classList.remove("mdx-header-solid");
      return;
    }

    function update() {
      // solid as soon as the page is scrolled at all (transparent only at the top)
      var solid = window.scrollY > 8;
      document.body.classList.toggle("mdx-header-solid", solid);
    }

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { ticking = false; update(); });
    }

    // avoid stacking listeners across instant-navigation page loads
    if (window.__mdxHeaderScroll) {
      window.removeEventListener("scroll", window.__mdxHeaderScroll);
      window.removeEventListener("resize", window.__mdxHeaderScroll);
    }
    window.__mdxHeaderScroll = onScroll;
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  function init() {
    initGrid();
    initHeaderFade();
  }

  // Support Material's instant navigation if present, else run once on load.
  if (typeof window.document$ !== "undefined" && window.document$.subscribe) {
    window.document$.subscribe(init);
  } else if (document.readyState !== "loading") {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
