/* ============================================================
   App shell + hash router
   Routes:  #/onboarding-1 | #/onboarding-2 | #/onboarding-3 | #/home
   Deep-link params supported later via  #/home?section=podcasts
   ============================================================ */
(function (global) {
  "use strict";
  var C = global.C;

  var mount = document.getElementById("device");
  var DEFAULT = "onboarding-1";

  function parseHash() {
    var raw = (location.hash || "").replace(/^#\/?/, "");
    var qIndex = raw.indexOf("?");
    var name = qIndex === -1 ? raw : raw.slice(0, qIndex);
    var query = {};
    if (qIndex !== -1) {
      raw.slice(qIndex + 1).split("&").forEach(function (pair) {
        if (!pair) return;
        var kv = pair.split("=");
        query[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || "");
      });
    }
    return { name: name || DEFAULT, query: query };
  }

  function nav(name, query) {
    var hash = "#/" + name;
    if (query) {
      var parts = Object.keys(query).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(query[k]);
      });
      if (parts.length) hash += "?" + parts.join("&");
    }
    if (location.hash === hash) render();
    else location.hash = hash;
  }

  function placeholder(name) {
    return C.el("div", { class: "screen placeholder" }, [
      C.StatusBar(),
      C.el("div", { class: "placeholder__inner" }, [
        C.el("p", { class: "h2" }, name.replace(/-/g, " ")),
        C.el("p", { class: "body-2" }, "Screen coming next in the build order."),
      ]),
    ]);
  }

  /* Routes that render as an overlay ON TOP of the previous screen
     (the screen underneath stays mounted and visible through the scrim). */
  var OVERLAY_ROUTES = { sidebar: true };

  var baseRoute = null; // last non-overlay {name, query}

  function build(name, query) {
    var factory = (global.Screens || {})[name];
    return factory ? factory(nav, query || {}) : placeholder(name);
  }

  function baseScreenEl() {
    return mount.querySelector(".screen:not(.sidebar-screen)");
  }
  function overlayEl() {
    return mount.querySelector(".sidebar-screen");
  }
  function sameRoute(a, b) {
    return a && b && a.name === b.name &&
      JSON.stringify(a.query || {}) === JSON.stringify(b.query || {});
  }

  function render() {
    var route = parseHash();

    if (OVERLAY_ROUTES[route.name]) {
      // keep (or lazily build) the screen underneath
      if (!baseScreenEl()) {
        var b = baseRoute || { name: "home", query: {} };
        mount.appendChild(build(b.name, b.query));
      }
      var stale = overlayEl();
      if (stale) stale.remove();
      mount.appendChild(build(route.name, route.query));
      document.title = "Spotify Multi — " + route.name;
      return;
    }

    // returning to the base that is still mounted under an overlay:
    // just drop the overlay, keep the screen (and its scroll position)
    if (sameRoute(route, baseRoute) && baseScreenEl() && overlayEl()) {
      overlayEl().remove();
      document.title = "Spotify Multi — " + route.name;
      return;
    }

    baseRoute = route;
    mount.innerHTML = "";
    mount.appendChild(build(route.name, route.query));
    document.title = "Spotify Multi — " + route.name;
  }

  /* Close the current overlay (e.g. the sidebar) and reveal the screen
     underneath without rebuilding it. */
  function closeOverlay() {
    var b = baseRoute || { name: "home", query: {} };
    nav(b.name, b.query);
  }

  global.App = { nav: nav, render: render, closeOverlay: closeOverlay };

  window.addEventListener("hashchange", render);
  window.addEventListener("DOMContentLoaded", function () {
    if (!location.hash) location.replace("#/" + DEFAULT);
    render();
  });
})(window);
