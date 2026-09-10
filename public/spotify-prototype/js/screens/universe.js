/* ============================================================
   Dedicated universe screens — full pixel-exact pages
   Figma: Home Music 543:1776 · Home Podcasts 543:1500 · Home Audiobooks 543:1638
   Routes: #/home-music · #/home-podcasts · #/home-audiobooks
   Reached from the filter-bar service tabs and the Home "All"
   "View More" deep links; the first card pulses on a deep-link entry.
   ============================================================ */
(function (global) {
  "use strict";
  var C = global.C;
  var el = C.el;
  var H = "assets/home/";
  var U = "assets/home/u/";

  /* ---- per-universe content (order + copy straight from Figma) ---- */
  var DATA = {
    music: {
      route: "home-music",
      quick: [
        { title: "Liked Songs", thumb: { kind: "photo", img: H + "qc_liked.png" } },
        { title: "Playlists", thumb: { kind: "icon", grad: "gold", img: U + "ic_playlists.svg" } },
        { title: "Albums", thumb: { kind: "inset", grad: "blue", img: U + "qc_albums.png" } },
        { title: "Artists", thumb: { kind: "inset", grad: "pink", img: U + "qc_artists.png" } },
      ],
      cards: [
        { eyebrow: "New Release", art: H + "art_music.png", name: "The Boys of Dungeon Lane", by: "Paul McCartney", strong: "14 songs", rest: " • Capitol Records" },
        { eyebrow: "Top Charts · May 2026", art: U + "art_global_top50.png", name: "Global Top 50", by: "Spotify", strong: "50 songs", rest: " • Bad Bunny, Taylor Swift, Billie Eilish..." },
        { eyebrow: "Made for you", art: H + "qc_dailymix.png", name: "Daily Mix 1", by: "Spotify", strong: "14 songs", rest: " • Arctic Monkeys, The xx, Tame Impala..." },
      ],
    },
    podcasts: {
      route: "home-podcasts",
      quick: [
        { title: "Liked Episodes", thumb: { kind: "photo", img: H + "qc_liked.png" } },
        { title: "Your Shows", thumb: { kind: "inset", grad: "gold", img: U + "qc_your_shows.png" } },
        { title: "Downloads", thumb: { kind: "icon", grad: "blue", img: U + "ic_share.svg" } },
        { title: "New Episodes", thumb: { kind: "photo", img: U + "qc_new_episodes.svg" } },
      ],
      cards: [
        { eyebrow: "New Episode", art: H + "art_podcast.png", name: "The Joe Rogan Experience", by: "Joe Rogan", strong: "Episode 2482", rest: " • Andy Stumpf" },
        { eyebrow: "Might Like", art: U + "art_diary_ceo.png", name: "The Diary of a CEO", by: "Steven Bartlett", strong: "Episode 210", rest: " • 1h 12min" },
        { eyebrow: "You might like", art: U + "art_mel_robbins.png", name: "The Mel Robbins Podcast", by: "Mel Robbins", strong: "Episode 210", rest: " • 1h 12min" },
      ],
    },
    audiobooks: {
      route: "home-audiobooks",
      quick: [
        { title: "Liked Books", thumb: { kind: "photo", img: H + "qc_liked.png" } },
        { title: "Continue Listening", thumb: { kind: "inset", grad: "gold", img: U + "qc_continue_listening.png" } },
        { title: "Downloads", thumb: { kind: "icon", grad: "blue", img: U + "ic_share.svg" } },
        { title: "New Arrivals", thumb: { kind: "photo", img: U + "qc_new_episodes.svg" } },
      ],
      cards: [
        { eyebrow: "Made for you", art: H + "art_audiobook.png", name: "A Court of Thorns and Roses", by: "Sarah J. Maas", strong: "22h 31min", rest: " • Fantasy" },
        { eyebrow: "New Arrivals", art: U + "art_fourth_wing.png", name: "Fourth Wing", by: "Rebecca Yarros", strong: "21h 22min", rest: " • Fantasy" },
        { eyebrow: "Must Read", art: U + "art_atomic_habits.png", name: "Atomic Habits", by: "James Clear", strong: "5h 35min", rest: " • Self Development" },
      ],
    },
  };

  function quickCard(item) {
    var t = item.thumb;
    var thumb = el(
      "div",
      {
        class:
          "qc-card__thumb qc-card__thumb--" + t.kind +
          (t.grad ? " qc-card__thumb--" + t.grad : ""),
      },
      [el("img", { src: t.img, alt: "", draggable: "false" })]
    );
    return el("button", { class: "qc-card", type: "button" }, [
      thumb,
      el("span", { class: "qc-card__title" }, item.title),
    ]);
  }

  function bigCard(id, c) {
    return el(
      "div",
      { class: "u-card u-card--" + id },
      [
        el("div", { class: "u-card__inner" }, [
          el("div", { class: "u-card__top" }, [
            el("p", { class: "u-card__eyebrow" }, c.eyebrow),
            el("div", { class: "u-card__media" }, [
              el("img", { class: "u-card__art", src: c.art, alt: "", draggable: "false" }),
              el("div", { class: "u-card__meta" }, [
                el("p", { class: "u-card__name" }, c.name),
                el("p", { class: "u-card__by" }, c.by),
              ]),
            ]),
            el("p", { class: "u-card__caption" }, [
              el("b", {}, c.strong),
              document.createTextNode(c.rest),
            ]),
          ]),
          el("div", { class: "u-card__controls" }, [
            el("div", { class: "u-card__actions" }, [
              el("img", { src: H + "ic_add_circle.svg", alt: "Save", draggable: "false" }),
              el("img", { src: H + "ic_play_circle.svg", alt: "Play", draggable: "false" }),
            ]),
          ]),
        ]),
      ]
    );
  }

  function makeUniverse(id) {
    return function Universe(nav) {
      var d = DATA[id];

      var scroll = el("div", { class: "universe__scroll" }, [
        el("div", { class: "qc-grid" }, d.quick.map(quickCard)),
        el(
          "div",
          { class: "universe__cards" },
          d.cards.map(function (c) { return bigCard(id, c); })
        ),
      ]);

      var filter = C.FilterBar({
        activeId: id,
        order: C.getServiceOrder(),
        onOpenMenu: function () { nav("sidebar"); },
        onSelect: function (sel) {
          if (sel === "all") nav("home");
          else if (sel === id) { /* already here */ }
          else nav("home-" + sel);
        },
        onReorder: function () { global.App.render(); },
      });

      var bottom = C.BottomBar({ onHome: function () { nav("home"); } });

      return el(
        "div",
        { class: "home universe screen", dataset: { screen: d.route } },
        [scroll, C.StatusBar(), filter, bottom]
      );
    };
  }

  global.Screens = global.Screens || {};
  global.Screens["home-music"] = makeUniverse("music");
  global.Screens["home-podcasts"] = makeUniverse("podcasts");
  global.Screens["home-audiobooks"] = makeUniverse("audiobooks");
})(window);
