/* Automatically generated file. Do not edit directly.
Copyright (C) 2019 Gab AI, Inc.
All Rights Reserved */
var BROWSER_CONFIG = {
  name: "Google Chrome",
  slug: "chrome",
  version: "0.1.9"
}, BROWSER_CHROME_SLUG = "chrome",
  BROWSER_FIREFOX_SLUG = "firefox",
  BROWSER_EDGE_SLUG = "edge",
  BROWSER_SAFARI_SLUG = "safari",
  DISSENTER_HOME_PAGE_URI = "https://dissenter.com",
  BASE_URI = "https://dissenter.com/discussion/begin-extension?url=",
  COMMENT_COUNT_URI = "https://dissenter.com/notification/comment-count?url=",
  BACKGROUND_ACTION_OPEN_POPUP = "open_popup",
  BACKGROUND_ACTION_GET_KEY = "get_key",
  BACKGROUND_ACTION_SET_KEY = "set_key",
  BACKGROUND_ACTION_SET_BADGE = "set_badge",
  BACKGROUND_ACTION_TAB_UPDATED = "tab_updated",
  COLOR_GAB_GREEN = "#21cf7b",
  SEARCH_ENGINES = [{
      name: "DuckDuckGo",
      url: "https://duckduckgo.com/?q=",
      icon: "duckduckgo.svg"
  }, {
      name: "Startpage",
      url: "https://www.startpage.com/do/search?q=",
      icon: "startpage.png"
  }, {
      name: "Qwant",
      url: "https://www.qwant.com/?q=",
      icon: "qwant.svg"
  }, {
      name: "Bing",
      url: "https://www.bing.com/search?q=",
      icon: "bing.svg"
  }, {
      name: "Yahoo!",
      url: "https://search.yahoo.com/search?p=",
      icon: "yahoo.svg"
  }, {
      name: "Google",
      url: "https://www.google.com/search?q=",
      icon: "google.svg"
  }],
  STORAGE_BASE = "gab_dissenter_extension_data",
  TWITTER_BUTTONS_ENABLED = "twitter_buttons_enabled",
  REDDIT_BUTTONS_ENABLED = "reddit_buttons_enabled",
  YOUTUBE_BUTTONS_ENABLED = "youtube_buttons_enabled",
  WINDOW_SIDEBAR_UNAVAILABLE_ENABLED = "window_sidebar_unavailable_enabled",
  WEBSITE_COMMENT_BADGE_ENABLED = "website_comment_badge_enabled",
  DISSENT_DISQUS_BUTTONS_ENABLED = "dissent_disqus_buttons_enabled",
  WIKIPEDIA_BUTTONS_ENABLED = "wikipedia_buttons_enabled",
  CUSTOM_NEW_TAB_ENABLED = "custom_new_tab_enabled",
  NT_DEFAULT_SEARCH_ENGINE = "nt_default_search_engine",
  NT_TOP_SITES_ENABLED = "nt_top_sites_enabled",
  NT_TOP_SITES_LIMIT = "nt_top_sites_limit",
  NT_TOP_SITES_SIZE = "nt_top_sites_size",
  NT_TOP_SITES_SHAPE = "nt_top_sites_shape",
  NT_TOP_SITES_HIGHLIGHT = "nt_top_sites_highlight",
  NT_TOP_SITES_SHOW_TITLE = "nt_top_sites_show_title",
  NT_DATETIME_SHOW_DATE = "nt_datetime_show_date",
  NT_DATETIME_SHOW_TIME = "nt_datetime_show_time",
  NT_COLORS_SEARCH = "nt_colors_search",
  NT_COLORS_TEXT = "nt_colors_text",
  NT_BACKGROUND_SOLID_COLOR = "nt_background_solid_color",
  NT_BACKGROUND_IMAGE = "nt_background_image",
  NT_BACKGROUND_RANDOM_GRADIENT = "nt_background_random_gradient",
  NT_DISSENTER_ENABLED = "nt_dissenter_enabled",
  NT_DISSENTER_DEFAULT_TAB = "nt_dissenter_default_tab",
  STORAGE_DEFAULT_PARAMS = {};
STORAGE_DEFAULT_PARAMS[TWITTER_BUTTONS_ENABLED] = !0, STORAGE_DEFAULT_PARAMS[REDDIT_BUTTONS_ENABLED] = !0, STORAGE_DEFAULT_PARAMS[YOUTUBE_BUTTONS_ENABLED] = !0, STORAGE_DEFAULT_PARAMS[WINDOW_SIDEBAR_UNAVAILABLE_ENABLED] = !0, STORAGE_DEFAULT_PARAMS[WEBSITE_COMMENT_BADGE_ENABLED] = !1, STORAGE_DEFAULT_PARAMS[DISSENT_DISQUS_BUTTONS_ENABLED] = !1, STORAGE_DEFAULT_PARAMS[WIKIPEDIA_BUTTONS_ENABLED] = !0, STORAGE_DEFAULT_PARAMS[CUSTOM_NEW_TAB_ENABLED] = !0, STORAGE_DEFAULT_PARAMS[NT_DEFAULT_SEARCH_ENGINE] = SEARCH_ENGINES[0], STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_ENABLED] = !0, STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_LIMIT] = 10, STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SIZE] = "md", STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SHAPE] = "circle", STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_HIGHLIGHT] = "light", STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SHOW_TITLE] = !0, STORAGE_DEFAULT_PARAMS[NT_DATETIME_SHOW_DATE] = !0, STORAGE_DEFAULT_PARAMS[NT_DATETIME_SHOW_TIME] = !0, STORAGE_DEFAULT_PARAMS[NT_COLORS_SEARCH] = "white", STORAGE_DEFAULT_PARAMS[NT_COLORS_TEXT] = "white", STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_SOLID_COLOR] = "#444", STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_IMAGE] = "", STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_RANDOM_GRADIENT] = !1, STORAGE_DEFAULT_PARAMS[NT_DISSENTER_ENABLED] = !0, STORAGE_DEFAULT_PARAMS[NT_DISSENTER_DEFAULT_TAB] = "home";
var STORAGE_KEY_ALL = "all",
  isObject = function(e) {
      return !isArray(e) && !isDate(e) && (null !== e && "object" == typeof e)
  }, isString = function(e) {
      return "string" == typeof e || e instanceof String
  }, isDate = function(e) {
      return !isString(e) && !isArray(e) && null != e && null != e && (e && "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e))
  }, isArray = function(e) {
      return Array.isArray(e)
  };

function ready(e) {
  var t = document;
  "loading" == t.readyState ? t.addEventListener("DOMContentLoaded", e) : e()
}

function getQueryStringValue(e) {
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(e).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"))
}

function getDissenterDLogoAsSVG(e, t, n, _) {
  var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  r.style.setProperty("height", e, "important"), r.style.setProperty("width", t, "important"), r.setAttribute("version", "1.1"), r.setAttribute("xmlns", "http://www.w3.org/2000/svg"), r.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), r.setAttribute("viewBox", "0 0 500 500");
  var o = document.createElementNS("http://www.w3.org/2000/svg", "g");
  o.style.setProperty("transform", "translate(17, 37)", "important");
  var E = document.createElementNS("http://www.w3.org/2000/svg", "path");
  E.setAttribute("d", "M244.885937,0 L193.657763,0 L65.5018905,0 L45.5665325,0 C20.4992438,0 0,20.5016933 0,45.5466667 L0,381.453333 C0,406.504 20.4992438,427 45.5665325,427 L65.5018905,427 L193.657763,427 L244.885937,427 C389.348933,427 467,326.3134 467,213.5 C467,100.6866 393.563837,0 244.885937,0"), E.setAttribute("fill", n);
  var a = document.createElementNS("http://www.w3.org/2000/svg", "path");
  a.setAttribute("d", "M309.275885,155 L121.729792,155 C115.246045,155 110,149.623395 110,143.002906 C110,136.376605 115.246045,131 121.729792,131 L309.275885,131 C315.759633,131 321,136.376605 321,143.002906 C321,149.623395 315.759633,155 309.275885,155"), a.setAttribute("fill", _);
  var A = document.createElementNS("http://www.w3.org/2000/svg", "path");
  A.setAttribute("d", "M309.275885,225 L121.729792,225 C115.246045,225 110,219.623395 110,213.002906 C110,206.376605 115.246045,201 121.729792,201 L309.275885,201 C315.759633,201 321,206.376605 321,213.002906 C321,219.623395 315.759633,225 309.275885,225"), A.setAttribute("fill", _);
  var s = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return s.setAttribute("d", "M121.78718,296 C115.271711,296 110,290.623395 110,284.002906 C110,277.376605 115.271711,272 121.78718,272 L247.218525,272 C253.733994,272 259,277.376605 259,284.002906 C259,290.623395 253.733994,296 247.218525,296 L121.78718,296 Z"), s.setAttribute("fill", _), o.appendChild(E), o.appendChild(a), o.appendChild(A), o.appendChild(s), r.appendChild(o), r
}

function addManyClasses(e, t) {
  if (!isArray(t)) return !1;
  for (var n = 0, _ = t.length; n < _; n++) e.classList.add(t[n])
}

function removeManyClasses(e, t) {
  if (!isArray(t)) return !1;
  for (var n = 0, _ = t.length; n < _; n++) e.classList.remove(t[n])
}

function setExtensionIconBadge(e) {
  e || (e = ""), e = formatBadgeText(e = String(e)), chrome.browserAction.setBadgeBackgroundColor({
      color: "#f40e1c"
  }), chrome.browserAction.setBadgeText({
      text: e
  }), BROWSER_CONFIG.slug === BROWSER_FIREFOX_SLUG && chrome.browserAction.setBadgeTextColor({
      color: "#ffffff"
  })
}

function formatBadgeText(e) {
  if (!e) return "";
  var t = parseInt(e);
  if (t < 1) return "";
  var n = "";
  if (t < 1e3) return String(t);
  if (1e3 <= t && t < 1e4) {
      var _ = truncateNumber(t, 2);
      n = (_ /= 10) + "k"
  } else if (1e4 <= t && t < 1e5) {
      n = (_ = truncateNumber(t, 2)) + "k"
  } else if (1e5 <= t && t < 1e6) {
      n = (_ = truncateNumber(t, 3)) + "k"
  } else 1e6 <= t && (n = "1M+");
  return n
}

function truncateNumber(e, t) {
  return e ? e.toString().substring(0, t) : 0
}

function performRequest(e, t) {
  if (!e || !isObject(e)) return t(!1, {});
  var n = e.method || "",
      _ = e.url || "",
      r = e.params,
      o = e.headers;
  if (!n || !_) return !!t && t(!1, {});
  var E = new XMLHttpRequest;
  if (E.open(n, _, !0), E.setRequestHeader("Content-type", "application/json"), o && isArray(o))
      for (var a = 0; a < o.length; a++) {
          var A = o[a];
          isObject(A) && E.setRequestHeader(A.key, A.value)
      }
  r && isObject(r) ? E.send(JSON.stringify(r)) : E.send({}), E.onload = function() {
      var e = {};
      try {
          e = JSON.parse(E.responseText)
      } catch (e) {}
      t && t(!1, e)
  }, E.onerror = function() {
      var e = {};
      try {
          e = JSON.parse(E.responseText)
      } catch (e) {}
      t && t(!0, e)
  }
}

function GDEStorage() {
  var n = this;
  n.init = function() {
      return function() {
          if (null == window.localStorage) return;
          window.localStorage[STORAGE_BASE] || isObject(window.localStorage[STORAGE_BASE]) || (window.localStorage[STORAGE_BASE] = JSON.stringify(STORAGE_DEFAULT_PARAMS));
          var e = window.localStorage[STORAGE_BASE];
          for (var t in e = JSON.parse(e), STORAGE_DEFAULT_PARAMS) void 0 === e[t] && n.setValue(t, STORAGE_DEFAULT_PARAMS[t])
      }(), !0
  }, n.getValue = function(e) {
      if (null == window.localStorage && isObject(window.localStorage)) return !1;
      var t = window.localStorage[STORAGE_BASE];
      return t = JSON.parse(t), e === STORAGE_KEY_ALL ? t : t[e]
  }, n.setValue = function(e, t) {
      if (null == window.localStorage && isObject(window.localStorage)) return !1;
      var n = window.localStorage[STORAGE_BASE];
      return (n = JSON.parse(n))[e] = t, window.localStorage[STORAGE_BASE] = JSON.stringify(n), !0
  }
}
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({
      url: "index.html"
  })
}), chrome.tabs.onUpdated.addListener(function(e) {
  setExtensionIconBadge(""), chrome.tabs.sendMessage(e, {
      action: BACKGROUND_ACTION_TAB_UPDATED
  })
}), chrome.tabs.onActivated.addListener(function(e) {
  setExtensionIconBadge(""), chrome.tabs.sendMessage(e.tabId, {
      action: BACKGROUND_ACTION_TAB_UPDATED
  })
}), "edge" !== BROWSER_CONFIG.slug && (chrome.omnibox.onInputEntered.addListener(function(e, t) {
  var n = "https://dissenter.com/search?q=" + encodeURIComponent(e);
  "currentTab" == t ? chrome.tabs.query({
      active: !0,
      currentWindow: !0
  }, function(e) {
      var t = e[0];
      chrome.tabs.update(t.id, {
          url: n
      })
  }) : chrome.tabs.create({
      url: n
  })
}), chrome.tabs.onCreated.addListener(function(e) {
  if (!gdes.getValue(CUSTOM_NEW_TAB_ENABLED)) return !1;
  ("chrome" === BROWSER_CONFIG.slug && "chrome://newtab/" === e.url || "chrome" === BROWSER_CONFIG.slug && -1 < e.url.indexOf("chrome://vivaldi-webui/startpage") || "chrome" === BROWSER_CONFIG.slug && "chrome://startpage/" === e.url || "firefox" === BROWSER_CONFIG.slug && "about:newtab" === e.url) && chrome.tabs.update(e.id, {
      url: chrome.extension.getURL("newtab/newtab.html")
  })
})), chrome.runtime.onMessage.addListener(function(e, t, n) {
  var _ = e.action || "";
  if (_ === BACKGROUND_ACTION_OPEN_POPUP) {
      var r = e.url || "",
          o = e.height || 0,
          E = screen.width,
          a = screen.height - o,
          A = chrome.extension.getURL("popup/popup.html?url=" + r),
          s = gdes.getValue(WINDOW_SIDEBAR_UNAVAILABLE_ENABLED);
      if (BROWSER_CONFIG.slug === BROWSER_FIREFOX_SLUG && !s) return chrome.runtime.sendMessage({
          url: r
      }), !0;
      chrome.windows.create({
          url: A,
          width: 420,
          height: o,
          top: a,
          left: E,
          type: "popup"
      })
  } else if (_ === BACKGROUND_ACTION_GET_KEY) {
      if (!(T = e.key || "")) return n && n(null), !0;
      var i = gdes.getValue(T);
      n && n(i)
  } else if (_ === BACKGROUND_ACTION_SET_KEY) {
      var T = e.key || "";
      i = e.value;
      if (!T) return !0;
      gdes.setValue(T, i), T !== WEBSITE_COMMENT_BADGE_ENABLED || i || setExtensionIconBadge("")
  } else if (_ === BACKGROUND_ACTION_SET_BADGE) {
      if (!(r = e.url || "") || !isString(r)) return setExtensionIconBadge(""), !0;
      if (-1 == r.indexOf("://")) return setExtensionIconBadge(""), !0;
      performRequest({
          method: "GET",
          url: COMMENT_COUNT_URI + encodeURIComponent(r)
      }, function(e, t) {
          return isObject(t) && t.success ? void setExtensionIconBadge(String(t.url.stats.commentCount)) : (setExtensionIconBadge(""), !0)
      })
  }
  return !0
});
var gdes = new GDEStorage;
gdes.init();