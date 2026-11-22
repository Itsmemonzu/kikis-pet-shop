/* Kiki's Pet Shop — site behaviour. In WordPress: load once site-wide (footer HTML widget or a code-snippet plugin). */
(() => {
  const root = document.documentElement;
  root.classList.add("js");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll reveals: .k-rv (rise), .k-rv-img (focus-in), .k-rv-slats (child strips slide in), .k-floor (line draws)
  const targets = document.querySelectorAll(".k-rv, .k-rv-img, .k-rv-slats, .k-floor");
  if (reduce || !("IntersectionObserver" in window)) {
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

  // Intro strips stagger index
  document.querySelectorAll(".k-intro .k-strip").forEach((s, i) => s.style.setProperty("--i", i));

  // Videos: play only while visible; respect reduced motion; toggle button
  document.querySelectorAll("video[data-autoplay]").forEach((v) => {
    const btn = v.parentElement.querySelector(".k-vidbtn");
    const setBtn = () => {
      if (!btn) return;
      btn.innerHTML = v.paused ? '<i class="fa-solid fa-play" aria-hidden="true"></i>' : '<i class="fa-solid fa-pause" aria-hidden="true"></i>';
      btn.setAttribute("aria-label", v.paused ? "Play video" : "Pause video");
    };
    let userPaused = reduce;
    if (reduce) v.removeAttribute("autoplay"), v.pause();
    btn?.addEventListener("click", () => {
      if (v.paused) { userPaused = false; v.play(); } else { userPaused = true; v.pause(); }
    });
    v.addEventListener("play", setBtn);
    v.addEventListener("pause", setBtn);
    setBtn();
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !userPaused) v.play().catch(() => {});
        else if (!e.isIntersecting) v.pause();
      }, { threshold: 0.25 }).observe(v);
    }
  });

  // Shop directory: the strip for the section in view becomes "you are here"
  const dirLinks = [...document.querySelectorAll(".k-dir__nav .k-strip")];
  if (dirLinks.length && "IntersectionObserver" in window) {
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

  // Mobile dock steps aside while the hero's own WhatsApp strip is on screen
  const dock = document.querySelector(".k-dock"), heroAction = document.querySelector(".k-intro .k-action");
  if (dock && heroAction && "IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => dock.classList.toggle("is-tucked", e.isIntersecting)).observe(heroAction);
  }

  // Year in footer
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
