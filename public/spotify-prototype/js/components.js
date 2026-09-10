/* ============================================================
   Reusable UI components (plain DOM factories)
   Every component returns an HTMLElement.
   ============================================================ */
(function (global) {
  "use strict";

  /* Tiny hyperscript helper */
  function el(tag, props, children) {
    const node = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (k) {
        const v = props[k];
        if (k === "class") node.className = v;
        else if (k === "dataset") Object.assign(node.dataset, v);
        else if (k === "style" && typeof v === "object") Object.assign(node.style, v);
        else if (k.slice(0, 2) === "on" && typeof v === "function")
          node.addEventListener(k.slice(2).toLowerCase(), v);
        else if (v === true) node.setAttribute(k, "");
        else if (v !== false && v != null) node.setAttribute(k, v);
      });
    }
    (Array.isArray(children) ? children : [children]).forEach(function (c) {
      if (c == null || c === false) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  /* ---------- iOS status-bar right-side icons (self-authored) ----------
     cellular (4 bars) · wi-fi (solid fan) · battery (100%).
     Each SVG is 12 units tall so `align-items:center` lines them up.     */
  var STATUS_ICONS =
    // cellular — 4 ascending bars
    '<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<rect x="0" y="7.5" width="3" height="4.5" rx="1" fill="white"/>' +
    '<rect x="5" y="5" width="3" height="7" rx="1" fill="white"/>' +
    '<rect x="10" y="2.5" width="3" height="9.5" rx="1" fill="white"/>' +
    '<rect x="15" y="0" width="3" height="12" rx="1" fill="white"/>' +
    '</svg>' +
    // wi-fi — 2 thin arcs + a small solid wedge at the tip
    '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M2 4.7A8.5 8.5 0 0 1 14 4.7" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
    '<path d="M4.6 7.2A5 5 0 0 1 11.4 7.2" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
    '<path d="M6.15 9 9.85 9 8 11.1Z" fill="white" stroke="white" stroke-width="0.8" stroke-linejoin="round"/>' +
    '</svg>' +
    // battery — outline + fill + terminal
    '<svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<rect x="0.6" y="0.6" width="20.8" height="10.8" rx="3" stroke="white" stroke-opacity="0.4" stroke-width="1.1"/>' +
    '<rect x="2" y="2" width="18" height="8" rx="1.7" fill="white"/>' +
    '<path d="M22.8 4c1 0 1.7.9 1.7 2s-.7 2-1.7 2V4Z" fill="white" fill-opacity="0.4"/>' +
    '</svg>';

  /* ---------- iOS Status bar (Figma 543:1966) ---------- */
  function StatusBar(opts) {
    opts = opts || {};
    const time = opts.time || "1:47";
    return el("div", { class: "status-bar" }, [
      el("div", { class: "status-bar__left" }, [
        el("span", { class: "status-bar__time" }, time),
      ]),
      el("div", { class: "status-bar__island" }, [
        el("div", { class: "status-bar__island-hole" }),
      ]),
      el("div", { class: "status-bar__right" }, [
        elHTML("div", "status-bar__icons", STATUS_ICONS),
      ]),
    ]);
  }

  /* Build an element from an HTML string of children */
  function elHTML(tag, cls, html) {
    const n = document.createElement(tag);
    n.className = cls;
    n.innerHTML = html;
    return n;
  }

  /* ---------- Pill button using a baked SVG (onboarding_button.svg) ---------- */
  function SvgButton(opts) {
    opts = opts || {};
    return el(
      "button",
      {
        class: "svg-button" + (opts.class ? " " + opts.class : ""),
        type: "button",
        "aria-label": opts.label || "",
        onclick: opts.onClick || null,
      },
      [
        el("img", {
          src: opts.src,
          width: opts.width || 198,
          height: opts.height || 46,
          alt: opts.label || "",
          draggable: "false",
        }),
      ]
    );
  }

  /* ---------- Text pill button (reusable, editable text) ---------- */
  function PillButton(opts) {
    opts = opts || {};
    return el(
      "button",
      {
        class: "pill-button" + (opts.class ? " " + opts.class : ""),
        type: "button",
        onclick: opts.onClick || null,
      },
      [el("span", { class: "h3" }, opts.text || "")]
    );
  }

  /* ---------- Icon + label cell ---------- */
  function IconCell(opts) {
    opts = opts || {};
    return el("div", { class: "icon-cell", dataset: { service: opts.service || "" } }, [
      el("div", { class: "icon-cell__inner" }, [
        el("img", {
          class: "icon-cell__icon",
          src: opts.icon,
          width: 40,
          height: 40,
          alt: "",
          draggable: "false",
        }),
        el("div", { class: "icon-cell__label" }, [
          el("span", { class: "h3" }, opts.label || ""),
        ]),
      ]),
    ]);
  }

  /* ---------- Icon row (three services) ---------- */
  function IconRow(items) {
    return el(
      "div",
      { class: "icon-row" },
      (items || []).map(function (it) {
        return IconCell(it);
      })
    );
  }

  /* ---------- Manual drag-to-reorder (HTML5 DnD) ----------
     container : element whose direct children (matching itemSelector)
                 can be dragged to reorder.
     onReorder : called with the new array of item ids (data-id) after a drop.
     Each item must carry a data-id attribute.                                */
  function makeReorderable(container, itemSelector, onReorder) {
    var dragEl = null;

    function items() {
      return Array.prototype.slice.call(container.querySelectorAll(itemSelector));
    }
    function clearMarkers() {
      items().forEach(function (n) {
        n.classList.remove("drop-before", "drop-after");
      });
    }

    items().forEach(function (item) {
      item.setAttribute("draggable", "true");

      item.addEventListener("dragstart", function (e) {
        dragEl = item;
        item.classList.add("is-dragging");
        if (e.dataTransfer) {
          e.dataTransfer.effectAllowed = "move";
          try { e.dataTransfer.setData("text/plain", item.dataset.id || ""); } catch (err) {}
        }
      });

      item.addEventListener("dragend", function () {
        if (dragEl) dragEl.classList.remove("is-dragging");
        dragEl = null;
        clearMarkers();
      });

      item.addEventListener("dragover", function (e) {
        if (!dragEl || dragEl === item) return;
        e.preventDefault();
        if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
        var r = item.getBoundingClientRect();
        var after = e.clientY - r.top > r.height / 2;
        clearMarkers();
        item.classList.add(after ? "drop-after" : "drop-before");
      });

      item.addEventListener("drop", function (e) {
        if (!dragEl || dragEl === item) return;
        e.preventDefault();
        var r = item.getBoundingClientRect();
        var after = e.clientY - r.top > r.height / 2;
        clearMarkers();
        if (after) item.parentNode.insertBefore(dragEl, item.nextSibling);
        else item.parentNode.insertBefore(dragEl, item);
        if (typeof onReorder === "function") {
          onReorder(
            items().map(function (n) { return n.dataset.id; })
          );
        }
      });
    });
  }

  /* ---------- tiny persistence for service order ---------- */
  var ORDER_KEY = "spotifyMulti.serviceOrder";
  var DEFAULT_ORDER = ["music", "podcasts", "audiobooks"];
  function getServiceOrder() {
    try {
      var raw = localStorage.getItem(ORDER_KEY);
      if (!raw) return DEFAULT_ORDER.slice();
      var arr = JSON.parse(raw);
      if (
        Array.isArray(arr) &&
        arr.length === 3 &&
        DEFAULT_ORDER.every(function (s) { return arr.indexOf(s) !== -1; })
      )
        return arr;
    } catch (e) {}
    return DEFAULT_ORDER.slice();
  }
  function setServiceOrder(arr) {
    try { localStorage.setItem(ORDER_KEY, JSON.stringify(arr)); } catch (e) {}
  }

  var SERVICE_LABELS = { music: "MUSIC", podcasts: "PODCASTS", audiobooks: "AUDIOBOOKS" };

  /* ---------- Filter bar (Figma 543:1453) ----------
     "All" is anchored first; the 3 services are drag-reorderable
     (manual only). activeId: "all" | "music" | "podcasts" | "audiobooks".
     onOpenMenu()      -> avatar tapped
     onSelect(id)      -> a tab tapped
     onReorder(order)  -> services reordered (array of 3 ids)          */
  function FilterBar(opts) {
    opts = opts || {};
    var activeId = opts.activeId || "all";
    var order = opts.order || getServiceOrder();

    function tab(id, label, draggable) {
      var t = el(
        "button",
        {
          class: "filter-tab" + (id === activeId ? " is-active" : ""),
          type: "button",
          dataset: { id: id },
          onclick: function () { if (opts.onSelect) opts.onSelect(id); },
        },
        [
          el("span", { class: "filter-tab__label" }, label),
          el("span", { class: "filter-tab__underline" }, [el("i", {})]),
        ]
      );
      if (draggable) t.setAttribute("draggable", "true");
      return t;
    }

    var tabsEl = el("div", { class: "filter-bar__tabs" }, [
      tab("all", "ALL", false),
    ]);
    order.forEach(function (id) {
      tabsEl.appendChild(tab(id, SERVICE_LABELS[id], true));
    });

    var bar = el("div", { class: "filter-bar" }, [
      el(
        "button",
        {
          class: "filter-bar__avatar",
          type: "button",
          "aria-label": "Open menu",
          onclick: function () { if (opts.onOpenMenu) opts.onOpenMenu(); },
        },
        "JP"
      ),
      tabsEl,
    ]);

    requestAnimationFrame(function () {
      makeReorderable(tabsEl, '.filter-tab[draggable="true"]', function (ids) {
        // "all" is not draggable and stays first; ids already excludes it
        setServiceOrder(ids);
        if (opts.onReorder) opts.onReorder(ids);
      });
    });

    return bar;
  }

  /* ---------- Bottom bar : player + tab bar (Figma 543:1479) ---------- */
  function BottomBar(opts) {
    opts = opts || {};
    var H = "assets/home/";
    function tabItem(icon, label, active, onClick, isCreate) {
      return el(
        "button",
        {
          class:
            "tab-bar__item" +
            (active ? " is-active" : "") +
            (isCreate ? " tab-bar__item--create" : ""),
          type: "button",
          onclick: onClick || null,
        },
        [
          el("img", { src: H + icon, alt: "", draggable: "false" }),
          el("span", {}, label),
        ]
      );
    }
    return el("div", { class: "bottom-bar" }, [
      el("div", { class: "player-sticky" }, [
        el("div", { class: "player-sticky__contents" }, [
          el("div", { class: "player-sticky__lead" }, [
            el("img", { class: "player-sticky__art", src: H + "player_art.png", alt: "", draggable: "false" }),
            el("div", { class: "player-sticky__titles" }, [
              el("span", { class: "t" }, "Crying Lightning"),
              el("span", { class: "s" }, "Arctic Monkeys"),
            ]),
          ]),
          el("div", { class: "player-sticky__btns" }, [
            el("img", { src: H + "ic_musical_box.svg", alt: "", draggable: "false" }),
            el("img", { src: H + "ic_player_play.svg", alt: "", draggable: "false" }),
          ]),
          el("div", { class: "player-sticky__seek" }, [el("i", {})]),
        ]),
      ]),
      el("div", { class: "tab-bar" }, [
        tabItem("tab_home.svg", "Home", true, opts.onHome || null, false),
        tabItem("tab_search.svg", "Search", false, null, false),
        tabItem("tab_library.svg", "Your library", false, null, false),
        tabItem("tab_create.svg", "Create", false, null, true),
      ]),
    ]);
  }

  global.C = {
    el: el,
    elHTML: elHTML,
    StatusBar: StatusBar,
    SvgButton: SvgButton,
    PillButton: PillButton,
    IconCell: IconCell,
    IconRow: IconRow,
    FilterBar: FilterBar,
    BottomBar: BottomBar,
    makeReorderable: makeReorderable,
    getServiceOrder: getServiceOrder,
    setServiceOrder: setServiceOrder,
    DEFAULT_ORDER: DEFAULT_ORDER,
    SERVICE_LABELS: SERVICE_LABELS,
  };
})(window);
