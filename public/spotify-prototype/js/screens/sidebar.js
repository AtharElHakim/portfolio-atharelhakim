/* ============================================================
   Sidebar drawer — Figma 543:2061 / Menu 543:2062
   The 3 service rows (Music / Podcasts / Audiobooks) are
   manually drag-reorderable; the order persists and is shared
   with the filter bar. No algorithmic auto-ordering (scope cut).
   ============================================================ */
(function (global) {
  "use strict";
  var C = global.C;
  var el = C.el;
  var SB = "assets/sidebar/";

  var SERVICES = {
    music: { label: "Music", glyph: SB + "glyph_music.svg", badgePad: "8px" },
    podcasts: { label: "Podcasts", glyph: SB + "glyph_podcasts.svg", badgePad: "0px" },
    audiobooks: { label: "Audiobooks", glyph: SB + "glyph_audiobooks.svg", badgePad: "8px" },
  };

  var NAV_ITEMS = [
    { icon: SB + "ic_add_account.svg", label: "Add account" },
    { icon: SB + "ic_premium.svg", label: "Your Premium" },
    { icon: SB + "ic_whats_new.svg", label: "What’s New" },
    { icon: SB + "ic_stats.svg", label: "Listening Stats" },
    { icon: SB + "ic_recents.svg", label: "Recents" },
    { icon: SB + "ic_updates.svg", label: "Your Updates" },
    { icon: SB + "ic_settings.svg", label: "Settings and privacy" },
  ];

  var MESSAGES = [
    { avatar: SB + "avatar_lea.png", name: "Lea", sub: "Shared an episode • Thu" },
    { avatar: SB + "avatar_martin.png", name: "Martin", sub: "Shared an song • Tues" },
    { avatar: SB + "avatar_grace.png", name: "Grace", sub: "Sent • Mar 24" },
  ];

  function serviceRow(id, activeId, nav) {
    var s = SERVICES[id];
    var row = el(
      "div",
      {
        class: "sb-service" + (id === activeId ? " is-active" : ""),
        dataset: { id: id },
        role: "button",
        tabindex: "0",
      },
      [
        el("div", { class: "sb-service__row" }, [
          el("div", { class: "sb-service__badge", style: { padding: s.badgePad } }, [
            el("img", { src: s.glyph, alt: "", draggable: "false" }),
          ]),
          el("div", { class: "sb-service__label" }, s.label),
        ]),
      ]
    );
    // click = deep link into that universe (Home section)
    row.addEventListener("click", function () {
      nav("home", { section: id });
    });
    row.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); nav("home", { section: id }); }
    });
    return row;
  }

  function navRow(item) {
    return el("button", { class: "sb-nav-row", type: "button" }, [
      el("span", { class: "sb-nav-row__icon" }, [
        el("img", { src: item.icon, alt: "", draggable: "false" }),
      ]),
      el("span", { class: "sb-nav-row__label" }, item.label),
    ]);
  }

  function messageRow(m) {
    return el("div", { class: "sb-msg-row" }, [
      el("div", { class: "sb-msg-row__avatar" }, [
        el("img", { src: m.avatar, alt: "", draggable: "false" }),
      ]),
      el("div", { class: "sb-msg-row__text" }, [
        el("p", { class: "sb-msg-row__name" }, m.name),
        el("p", { class: "sb-msg-row__sub" }, m.sub),
      ]),
    ]);
  }

  function Sidebar(nav) {
    var order = C.getServiceOrder();
    var activeId = order[0] === "music" || true ? "music" : order[0];

    var servicesEl = el(
      "div",
      { class: "sb-services" },
      order.map(function (id) { return serviceRow(id, activeId, nav); })
    );

    var menu = el("div", { class: "sidebar-menu" }, [
      /* ---- group A : profile + services ---- */
      el("div", { class: "sb-group-a" }, [
        el("div", { class: "sb-group-a-top" }, [
          el("div", { class: "sb-profile" }, [
            el("div", { class: "sb-avatar" }, [el("span", { class: "h3" }, "JP")]),
            el("div", { class: "sb-profile__text" }, [
              el("p", { class: "sb-profile__name" }, "Joshua Pecs"),
              el("p", { class: "sb-profile__link" }, "View profile"),
            ]),
          ]),
          el("div", { class: "sb-divider" }),
        ]),
        servicesEl,
        el("p", { class: "sb-reorder-hint" }, "Drag to reorder your services"),
        el("div", { class: "sb-divider" }),
      ]),

      /* ---- group B : secondary nav ---- */
      el("div", { class: "sb-group-b" }, [
        el("div", { class: "sb-group-b-list" }, NAV_ITEMS.map(navRow)),
        el("div", { class: "sb-divider" }),
      ]),

      /* ---- group C : messages ---- */
      el("div", { class: "sb-group-c" }, [
        el("div", { class: "sb-messages-head" }, [
          el("div", { class: "sb-messages-head__row" }, [
            el("div", { class: "sb-messages-head__left" }, [
              el("span", { class: "sb-messages-head__title" }, "Messages"),
              el("span", { class: "sb-messages-head__chev" }, [
                el("img", { src: SB + "ic_chevron_right.svg", alt: "", draggable: "false" }),
              ]),
            ]),
            el("div", { class: "sb-messages-head__edit" }, [
              el("img", { src: SB + "ic_edit.svg", alt: "", draggable: "false" }),
            ]),
          ]),
        ]),
        el("div", { class: "sb-msg-list" }, [
          messageRow(MESSAGES[0]),
          messageRow(MESSAGES[1]),
          messageRow(MESSAGES[2]),
          el("div", { class: "sb-msg-row" }, [
            el("div", { class: "sb-msg-row__avatar sb-msg-row__avatar--new" }, [
              el("img", { src: SB + "ic_edit_new.svg", alt: "", draggable: "false" }),
            ]),
            el("div", { class: "sb-msg-row__text" }, [
              el("p", { class: "sb-msg-row__new" }, "New message"),
            ]),
          ]),
        ]),
      ]),
    ]);

    var scrim = el("div", { class: "sidebar-scrim" });
    scrim.addEventListener("click", function () { global.App.closeOverlay(); });

    var screen = el("div", { class: "sidebar-screen screen", dataset: { screen: "sidebar" } }, [
      scrim,
      menu,
      C.StatusBar(),
    ]);

    // wire manual reorder after mount
    requestAnimationFrame(function () {
      C.makeReorderable(servicesEl, ".sb-service", function (newOrder) {
        C.setServiceOrder(newOrder);
      });
    });

    return screen;
  }

  global.Screens = global.Screens || {};
  global.Screens["sidebar"] = Sidebar;
})(window);
