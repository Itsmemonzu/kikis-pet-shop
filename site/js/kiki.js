/* Kiki's Pet Shop — site behaviour. In WordPress: load once site-wide (footer HTML widget or a code-snippet plugin). */
(() => {
  const root = document.documentElement;
  root.classList.add("js");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasIO = "IntersectionObserver" in window;
  let shownPath = location.pathname;

  function init() {
    // Scroll reveals: .k-rv (rise), .k-rv-img (fade in), .k-rv-slats (children rise), .k-floor (line draws)
    const targets = document.querySelectorAll(".k-rv, .k-rv-img, .k-rv-slats, .k-floor");
    if (reduce || !hasIO || root.classList.contains("k-lang-swap")) {
      targets.forEach((el) => el.classList.add("is-in"));
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
      targets.forEach((el) => {
        // stagger siblings that share a parent
        const sibs = [...el.parentElement.children].filter((c) => c.matches(".k-rv, .k-rv-img"));
        if (sibs.length > 1 && !el.style.getPropertyValue("--k-d")) el.style.setProperty("--k-d", `${sibs.indexOf(el) * 80}ms`);
        io.observe(el);
      });
    }

    // Videos: play only while visible; respect reduced motion
    document.querySelectorAll("video[data-autoplay]").forEach((v) => {
      if (reduce) { v.removeAttribute("autoplay"); v.pause(); return; }
      if (hasIO) {
        new IntersectionObserver(([e]) => {
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        }, { threshold: 0.25 }).observe(v);
      }
    });

    // Shop directory: the strip for the section in view becomes "you are here"
    const dirLinks = [...document.querySelectorAll(".k-dir__nav .k-strip")];
    if (dirLinks.length && hasIO) {
      const byId = new Map(dirLinks.map((a) => [a.hash.slice(1), a]));
      const spy = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          dirLinks.forEach((a) => { a.classList.remove("is-here"); a.removeAttribute("aria-current"); });
          const a = byId.get(e.target.id);
          if (a) { a.classList.add("is-here"); a.setAttribute("aria-current", "location"); }
        });
      }, { rootMargin: "-35% 0px -60% 0px" });
      byId.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
    }

    // Mobile dock steps aside while the hero's own WhatsApp button is on screen
    const dock = document.querySelector(".k-dock"), heroAction = document.querySelector(".k-intro .k-action");
    if (dock && heroAction && hasIO) {
      new IntersectionObserver(([e]) => dock.classList.toggle("is-tucked", e.isIntersecting)).observe(heroAction);
    }

    // Year in footer
    document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

    initLangSwitch();
  }

  // English / Bangla: fetch the twin page ahead of time, then crossfade into it in place.
  // No reload, so no blank pause, and the reader stays at the same spot. Any failure falls back to the plain link.
  const pageCache = new Map();
  const fetchPage = (url) => {
    if (!pageCache.has(url)) {
      pageCache.set(url, fetch(url, { credentials: "same-origin" })
        .then((r) => (r.ok ? r.text() : Promise.reject(new Error(r.status))))
        .catch((err) => { pageCache.delete(url); throw err; }));
    }
    return pageCache.get(url);
  };

  function initLangSwitch() {
    const link = document.querySelector(".k-lang");
    if (!link || !window.fetch || !window.DOMParser) return;
    const url = link.href;
    const warm = () => fetchPage(url).catch(() => {});
    (window.requestIdleCallback || ((f) => setTimeout(f, 600)))(warm);
    link.addEventListener("pointerenter", warm, { once: true });
    link.addEventListener("click", async (e) => {
      if (e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      let html;
      try { html = await fetchPage(url); } catch { location.href = url; return; }
      const next = new DOMParser().parseFromString(html, "text/html");
      const y = window.scrollY;
      const swap = () => {
        history.pushState({ kikiLang: true }, "", url);   // first, so relative image paths resolve against the new page
        shownPath = location.pathname;
        root.lang = next.documentElement.lang;
        document.title = next.title;
        const desc = next.querySelector('meta[name="description"]');
        const here = document.querySelector('meta[name="description"]');
        if (desc && here) here.setAttribute("content", desc.getAttribute("content"));
        root.classList.add("k-lang-swap");
        document.body.replaceChildren(...[...next.body.childNodes].filter((n) => n.nodeName !== "SCRIPT").map((n) => document.importNode(n, true)));
        window.scrollTo({ top: y, behavior: "instant" });
        init();
      };
      const typed = typeof ViewTransition !== "undefined" && "types" in ViewTransition.prototype;
      if (!document.startViewTransition || reduce) swap();
      else if (typed) document.startViewTransition({ update: swap, types: ["lang"] });
      else document.startViewTransition(swap);
    });
  }

  // Back/forward after an in-place switch: load the real page for that address.
  // Only when the path changed, so in-page anchor jumps (shop sections) are left alone.
  addEventListener("popstate", () => { if (location.pathname !== shownPath) location.reload(); });

  init();
})();
