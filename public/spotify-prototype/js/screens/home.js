/* ============================================================
   Home "All" + deep linking — Figma HOME ALL 543:1350
   - Filter bar: "All" first, 3 services drag-reorderable (manual).
   - Section order on the All view follows the same manual order.
   - "View More" deep-links into that universe (single-section view
     with the item highlighted); back returns to All.
   ============================================================ */
(function (global) {
  "use strict";
  var C = global.C;
  var el = C.el;
  var H = "assets/home/";

  var QUICK_CARDS = [
    { title: "Liked Songs", img: H + "qc_liked.png" },
    { title: "Daily Mix 1", img: H + "qc_dailymix.png" },
    { title: "Bad Bunny", img: H + "qc_badbunny.png" },
    { title: "Discover Weekly", img: H + "qc_discover.png" },
  ];

  var SECTIONS = {
    music: {
      title: "Music",
      eyebrow: "New Release",
      art: H + "art_music.png",
      name: "The Boys of Dungeon Lane",
      by: "Paul McCartney",
      captionStrong: "14 songs",
      captionRest: " • Capitol Records",
    },
    podcasts: {
      title: "Podcasts",
      eyebrow: "New Episode",
      art: H + "art_podcast.png",
      name: "The Joe Rogan Experience",
      by: "Joe Rogan",
      captionStrong: "Episode 2482",
      captionRest: " • Andy Stumpf",
    },
    audiobooks: {
      title: "Audiobooks",
      eyebrow: "Made for you",
      art: H + "art_audiobook.png",
      name: "A Court of Thorns and Roses",
      by: "Sarah J. Maas",
      captionStrong: "22h 31min",
      captionRest: " • Fantasy",
    },
  };

  function quickGrid() {
    return el(
      "div",
      { class: "qc-grid" },
      QUICK_CARDS.map(function (c) {
        return el("button", { class: "qc-card", type: "button" }, [
          el("img", { class: "qc-card__img", src: c.img, alt: "", draggable: "false" }),
          el("span", { class: "qc-card__title" }, c.title),
        ]);
      })
    );
  }

  function section(id, opts) {
    opts = opts || {};
    var s = SECTIONS[id];
    var caption = el("p", { class: "home-card__caption" }, [
      el("b", {}, s.captionStrong),
      document.createTextNode(s.captionRest),
    ]);

    var more = el(
      "button",
      {
        class: "home-card__more",
        type: "button",
        onclick: function () { if (opts.onMore) opts.onMore(id); },
      },
      "View More"
    );

    return el(
      "div",
      {
        class: "home-section",
        dataset: { section: id },
      },
      [
        el("p", { class: "home-section__title" }, s.title),
        el("div", { class: "home-card home-card--" + id }, [
          el("div", { class: "home-card__inner" }, [
            el("div", { class: "home-card__top" }, [
              el("p", { class: "home-card__eyebrow" }, s.eyebrow),
              el("div", { class: "home-card__media" }, [
                el("img", { class: "home-card__art", src: s.art, alt: "", draggable: "false" }),
                el("div", { class: "home-card__meta" }, [
                  el("p", { class: "home-card__name" }, s.name),
                  el("p", { class: "home-card__by" }, s.by),
                ]),
              ]),
              caption,
            ]),
            el("div", { class: "home-card__controls" }, [
              el("div", { class: "home-card__play" }, [
                el("img", { src: H + "ic_add_circle.svg", alt: "Save", draggable: "false" }),
                el("img", { src: H + "ic_play_circle.svg", alt: "Play", draggable: "false" }),
              ]),
              more,
            ]),
          ]),
        ]),
      ]
    );
  }

  function backChevron() {
    return C.elHTML(
      "span",
      "",
      '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M15 6L9 12L15 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    );
  }

  function Home(nav, query) {
    query = query || {};
    // legacy ?section= deep link -> redirect to the full universe screen
    if (SECTIONS[query.section]) {
      nav("home-" + query.section);
      return el("div", { class: "home screen" });
    }
    var order = C.getServiceOrder();

    var scroll = el("div", { class: "home__scroll" });
    scroll.appendChild(quickGrid());
    order.forEach(function (id) {
      scroll.appendChild(
        section(id, {
          onMore: function (sid) { nav("home-" + sid); },
        })
      );
    });

    var filter = C.FilterBar({
      activeId: "all",
      order: order,
      onOpenMenu: function () { nav("sidebar"); },
      onSelect: function (id) {
        if (id === "all") nav("home");
        else nav("home-" + id);
      },
      onReorder: function () { global.App.render(); },
    });

    var bottom = C.BottomBar({ onHome: function () { nav("home"); } });

    var screen = el("div", { class: "home screen", dataset: { screen: "home" } }, [
      scroll,
      C.StatusBar(),
      filter,
      bottom,
    ]);

    return screen;
  }

  global.Screens = global.Screens || {};
  global.Screens["home"] = Home;
})(window);
