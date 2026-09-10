/* ============================================================
   Onboarding screens 1–3
   Figma: 543:1916 (1) / 543:1976 (2) / 543:2023 (3) — page "Prototype 4"
   Screen 2 shows both option cards ("Automatic" + "Manual") as designed.
   Scope note: no algorithmic ordering is actually wired anywhere in the
   prototype — the working reorder (sidebar + filter bar) is manual only.
   ============================================================ */
(function (global) {
  "use strict";
  var C = global.C;
  var el = C.el;

  var ASSETS = "assets/";

  /* editable copy — kept in one place so text stays real & tweakable */
  var COPY = {
    s1: {
      eyebrow: "What’s New!",
      headline: "Your music. Your podcasts. Your audiobooks.",
      sub: "All yours.",
      lede:
        "We've made it easier than ever to find everything you love  all in one place, exactly the way you want it.",
      services: [
        { service: "music", label: "Music", icon: ASSETS + "music_icon.svg" },
        { service: "podcasts", label: "Podcasts", icon: ASSETS + "podcasts_icon.svg" },
        { service: "audiobooks", label: "Audiobooks", icon: ASSETS + "audiobooks_icon.svg" },
      ],
      closing: "It's time to explore everything Spotify has to offer",
      cta: "See what’s changed",
    },
    s2: {
      title: "You're in control.",
      lede:
        "You can now change the order of your tabs based on what matters most to you  in two ways.",
      autoTitle: "Automatic",
      autoDesc:
        "We learn what you listen to most and put it front and center. No effort needed.",
      manualTitle: "Manual",
      manualDesc:
        "Prefer to do it yourself? Long press and drag to arrange your tabs exactly how you want them.",
      cta: "Show me how",
    },
    s3: {
      title: "How to do it ?",
      lede:
        "Select your priority in the left menu or the top navigation bar. Drag to reorder and both bars update instantly.",
      menuLabel: "Left Menu Bar",
      navLabel: "Top Navigation Bar",
      cta: "Want to try ?",
    },
  };

  var AUTO_ICON =
    '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M3.57141 6.42859L0 5L3.57141 3.57141L5 0L6.42859 3.57141L10 5L6.42859 6.42859L5 10L3.57141 6.42859Z" fill="white"/></svg>';

  var SWIPE_ICON =
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V10m0 0V4a1.5 1.5 0 0 1 3 0v6m0 0V5.5a1.5 1.5 0 0 1 3 0V13c0 3.5-2 6.5-6 6.5-2.2 0-3.6-.9-4.6-2.2l-3-4a1.6 1.6 0 0 1 2.5-2L12 12" ' +
    'stroke="#121212" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---------- helpers ---------- */
  function skip(nav) {
    return el("div", { class: "onboarding__skip" }, [
      el("button", { type: "button", onclick: function () { nav("home"); } }, [
        el("span", { class: "body-1" }, "Skip"),
      ]),
    ]);
  }

  /* ============================================================
     Screen 1 — 543:1916
     ============================================================ */
  function Onboarding1(nav) {
    var c = COPY.s1;
    var root = el("div", { class: "onboarding onboarding--1 screen", dataset: { screen: "onboarding-1" } }, [
      C.StatusBar(),
      el("div", { class: "onboarding__content" }, [
        el("div", { class: "onboarding__stack" }, [
          el("div", { class: "onboarding__body" }, [
            el("div", { class: "onboarding__copy" }, [
              el("div", { class: "onboarding__headings" }, [
                el("p", { class: "onboarding__eyebrow h1", contenteditable: "false" }, c.eyebrow),
                el("div", { class: "onboarding__headline-group" }, [
                  el("p", { class: "onboarding__headline h1" }, c.headline),
                  el("div", { class: "onboarding__sub-group" }, [
                    el("p", { class: "onboarding__headline h1" }, c.sub),
                    el("div", { class: "onboarding__lede-wrap" }, [
                      el("p", { class: "onboarding__lede body-1" }, c.lede),
                    ]),
                  ]),
                ]),
              ]),
              C.IconRow(c.services),
            ]),
            el("div", { class: "onboarding__closing-wrap" }, [
              el("p", { class: "onboarding__closing h2" }, c.closing),
            ]),
          ]),
          C.SvgButton({
            src: ASSETS + "onboarding_button.svg",
            label: c.cta,
            width: 198,
            height: 46,
            onClick: function () { nav("onboarding-2"); },
          }),
        ]),
      ]),
    ]);
    return root;
  }

  /* ============================================================
     Screen 2 — 543:1976  (Automatic option cut)
     ============================================================ */
  function Onboarding2(nav) {
    var c = COPY.s2;
    return el("div", { class: "onboarding onboarding--2 screen", dataset: { screen: "onboarding-2" } }, [
      C.StatusBar(),
      skip(nav),
      el("div", { class: "onboarding__content" }, [
        el("div", { class: "onboarding__stack onboarding__stack--2" }, [
          el("div", { class: "onboarding__intro" }, [
            el("div", { class: "onboarding__intro-inner" }, [
              el("div", { class: "onboarding__intro-narrow" }, [
                el("div", { class: "onboarding__intro-text" }, [
                  el("p", { class: "onboarding__title h1" }, c.title),
                  el("div", { class: "onboarding__lede-wrap" }, [
                    el("p", { class: "onboarding__lede body-1" }, c.lede),
                  ]),
                ]),
              ]),
            ]),
          ]),
          el("div", { class: "onboarding__cards" }, [
            el("div", { class: "opt-card" }, [
              el("div", { class: "opt-card__head" }, [
                C.elHTML("div", "opt-card__badge opt-card__badge--grey", AUTO_ICON),
                el("p", { class: "opt-card__title" }, c.autoTitle),
              ]),
              el("p", { class: "opt-card__desc body-2" }, c.autoDesc),
            ]),
            el("div", { class: "opt-card" }, [
              el("div", { class: "opt-card__head" }, [
                C.elHTML("div", "opt-card__badge opt-card__badge--green", SWIPE_ICON),
                el("p", { class: "opt-card__title" }, c.manualTitle),
              ]),
              el("p", { class: "opt-card__desc body-2" }, c.manualDesc),
            ]),
          ]),
          C.PillButton({ text: c.cta, onClick: function () { nav("onboarding-3"); } }),
        ]),
      ]),
    ]);
  }

  /* ============================================================
     Screen 3 — 543:2023
     ============================================================ */
  function Onboarding3(nav) {
    var c = COPY.s3;
    return el("div", { class: "onboarding onboarding--3 screen", dataset: { screen: "onboarding-3" } }, [
      C.StatusBar(),
      skip(nav),
      el("div", { class: "onboarding__content" }, [
        el("div", { class: "onboarding__stack onboarding__stack--3" }, [
          el("div", { class: "onboarding__group-52" }, [
            el("div", { class: "onboarding__intro" }, [
              el("div", { class: "onboarding__intro-inner" }, [
                el("div", { class: "onboarding__intro-narrow" }, [
                  el("div", { class: "onboarding__intro-text" }, [
                    el("p", { class: "onboarding__title h1" }, c.title),
                    el("div", { class: "onboarding__lede-wrap" }, [
                      el("p", { class: "onboarding__lede body-1" }, c.lede),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            el("div", { class: "onboarding__cards" }, [
              el("div", { class: "onboarding__card-wrap" }, [
                el("div", { class: "demo-card" }, [
                  el("div", { class: "demo-card__head" }, [
                    el("span", { class: "h3" }, c.menuLabel),
                  ]),
                  el("img", {
                    class: "demo-card__img--menu",
                    src: ASSETS + "onboarding3_left_menu.png",
                    alt: "Left menu bar, drag to reorder services",
                    draggable: "false",
                  }),
                ]),
              ]),
              el("div", { class: "onboarding__card-wrap" }, [
                el("div", { class: "demo-card" }, [
                  el("div", { class: "demo-card__head" }, [
                    el("span", { class: "h3" }, c.navLabel),
                  ]),
                  el("img", {
                    class: "demo-card__img--nav",
                    src: ASSETS + "onboarding3_top_nav.png",
                    alt: "Top navigation bar, drag to reorder tabs",
                    draggable: "false",
                  }),
                ]),
              ]),
            ]),
          ]),
          C.PillButton({ text: c.cta, onClick: function () { nav("home"); } }),
        ]),
      ]),
    ]);
  }

  global.Screens = global.Screens || {};
  global.Screens["onboarding-1"] = Onboarding1;
  global.Screens["onboarding-2"] = Onboarding2;
  global.Screens["onboarding-3"] = Onboarding3;
})(window);
