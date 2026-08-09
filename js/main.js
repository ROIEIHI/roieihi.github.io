/* Roie Ihia — portfolio interactions. Vanilla JS, no dependencies. */
(function () {
  "use strict";

  /* ---- current year ---- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- precise hero trace length for the draw animation ---- */
  var trace = document.querySelector(".trace-path.animate");
  if (trace && typeof trace.getTotalLength === "function") {
    try {
      var len = Math.ceil(trace.getTotalLength());
      trace.style.setProperty("--len", len);
    } catch (e) { /* keep the inline fallback length */ }
  }

  /* ---- figure galleries ---- */
  document.querySelectorAll("[data-gallery]").forEach(function (gal) {
    var slides = Array.prototype.slice.call(gal.querySelectorAll(".slide"));
    if (slides.length < 2) return; // single figure: nothing to wire up
    var idx = 0;
    var dotsWrap = gal.querySelector(".gallery-dots");

    var dots = slides.map(function (_, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Figure " + (i + 1));
      if (i === 0) b.classList.add("is-active");
      b.addEventListener("click", function () { go(i); });
      if (dotsWrap) dotsWrap.appendChild(b);
      return b;
    });

    function go(n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle("is-active", i === idx); });
      dots.forEach(function (d, i) { d.classList.toggle("is-active", i === idx); });
    }

    var prev = gal.querySelector("[data-prev]");
    var next = gal.querySelector("[data-next]");
    if (prev) prev.addEventListener("click", function () { go(idx - 1); });
    if (next) next.addEventListener("click", function () { go(idx + 1); });
  });

  /* ---- scroll reveal ---- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(".pub, .project, .about-grid, .stats");
  targets.forEach(function (t) { t.classList.add("reveal"); });

  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach(function (t) { t.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (t) { io.observe(t); });
  }
})();
