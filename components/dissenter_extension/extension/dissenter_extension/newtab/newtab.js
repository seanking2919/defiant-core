/* Automatically generated file. Do not edit directly.
Copyright (C) 2019 Gab AI, Inc.
All Rights Reserved */
var BROWSER_CONFIG = {
  name: "Google Chrome",
  slug: "chrome",
  version: "0.1.9"
},
BROWSER_CHROME_SLUG = "chrome",
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
STORAGE_DEFAULT_PARAMS[TWITTER_BUTTONS_ENABLED] = !0, 
STORAGE_DEFAULT_PARAMS[REDDIT_BUTTONS_ENABLED] = !0, 
STORAGE_DEFAULT_PARAMS[YOUTUBE_BUTTONS_ENABLED] = !0, 
STORAGE_DEFAULT_PARAMS[WINDOW_SIDEBAR_UNAVAILABLE_ENABLED] = !0, 
STORAGE_DEFAULT_PARAMS[WEBSITE_COMMENT_BADGE_ENABLED] = !1, 
STORAGE_DEFAULT_PARAMS[DISSENT_DISQUS_BUTTONS_ENABLED] = !1, 
STORAGE_DEFAULT_PARAMS[WIKIPEDIA_BUTTONS_ENABLED] = !0, 
STORAGE_DEFAULT_PARAMS[CUSTOM_NEW_TAB_ENABLED] = !1, 
STORAGE_DEFAULT_PARAMS[NT_DEFAULT_SEARCH_ENGINE] = SEARCH_ENGINES[0], 
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_ENABLED] = !0, 
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_LIMIT] = 10, 
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SIZE] = "md", 
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SHAPE] = "circle", 
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_HIGHLIGHT] = "light", 
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SHOW_TITLE] = !0, 
STORAGE_DEFAULT_PARAMS[NT_DATETIME_SHOW_DATE] = !0, 
STORAGE_DEFAULT_PARAMS[NT_DATETIME_SHOW_TIME] = !0, 
STORAGE_DEFAULT_PARAMS[NT_COLORS_SEARCH] = "white", 
STORAGE_DEFAULT_PARAMS[NT_COLORS_TEXT] = "white", 
STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_SOLID_COLOR] = "#444", 
STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_IMAGE] = "", 
STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_RANDOM_GRADIENT] = !1, 
STORAGE_DEFAULT_PARAMS[NT_DISSENTER_ENABLED] = !0, 
STORAGE_DEFAULT_PARAMS[NT_DISSENTER_DEFAULT_TAB] = "home";
var STORAGE_KEY_ALL = "all",
isObject = function(e) {
  return !isArray(e) && !isDate(e) && (null !== e && "object" == typeof e)
},
isString = function(e) {
  return "string" == typeof e || e instanceof String
},
isDate = function(e) {
  return !isString(e) && !isArray(e) && null != e && null != e && (e && "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e))
},
isArray = function(e) {
  return Array.isArray(e)
};

function ready(e) {
var t = document;
"loading" == t.readyState ? t.addEventListener("DOMContentLoaded", e) : e()
}

function getQueryStringValue(e) {
return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(e).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"))
}

function getDissenterDLogoAsSVG(e, t, n, s) {
var i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
i.style.setProperty("height", e, "important"), i.style.setProperty("width", t, "important"), i.setAttribute("version", "1.1"), i.setAttribute("xmlns", "http://www.w3.org/2000/svg"), i.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), i.setAttribute("viewBox", "0 0 500 500");
var a = document.createElementNS("http://www.w3.org/2000/svg", "g");
a.style.setProperty("transform", "translate(17, 37)", "important");
var r = document.createElementNS("http://www.w3.org/2000/svg", "path");
r.setAttribute("d", "M244.885937,0 L193.657763,0 L65.5018905,0 L45.5665325,0 C20.4992438,0 0,20.5016933 0,45.5466667 L0,381.453333 C0,406.504 20.4992438,427 45.5665325,427 L65.5018905,427 L193.657763,427 L244.885937,427 C389.348933,427 467,326.3134 467,213.5 C467,100.6866 393.563837,0 244.885937,0"), r.setAttribute("fill", n);
var o = document.createElementNS("http://www.w3.org/2000/svg", "path");
o.setAttribute("d", "M309.275885,155 L121.729792,155 C115.246045,155 110,149.623395 110,143.002906 C110,136.376605 115.246045,131 121.729792,131 L309.275885,131 C315.759633,131 321,136.376605 321,143.002906 C321,149.623395 315.759633,155 309.275885,155"), o.setAttribute("fill", s);
var d = document.createElementNS("http://www.w3.org/2000/svg", "path");
d.setAttribute("d", "M309.275885,225 L121.729792,225 C115.246045,225 110,219.623395 110,213.002906 C110,206.376605 115.246045,201 121.729792,201 L309.275885,201 C315.759633,201 321,206.376605 321,213.002906 C321,219.623395 315.759633,225 309.275885,225"), d.setAttribute("fill", s);
var c = document.createElementNS("http://www.w3.org/2000/svg", "path");
return c.setAttribute("d", "M121.78718,296 C115.271711,296 110,290.623395 110,284.002906 C110,277.376605 115.271711,272 121.78718,272 L247.218525,272 C253.733994,272 259,277.376605 259,284.002906 C259,290.623395 253.733994,296 247.218525,296 L121.78718,296 Z"), c.setAttribute("fill", s), a.appendChild(r), a.appendChild(o), a.appendChild(d), a.appendChild(c), i.appendChild(a), i
}

function addManyClasses(e, t) {
if (!isArray(t)) return !1;
for (var n = 0, s = t.length; n < s; n++) e.classList.add(t[n])
}

function removeManyClasses(e, t) {
if (!isArray(t)) return !1;
for (var n = 0, s = t.length; n < s; n++) e.classList.remove(t[n])
}
var Background = function() {
  var e = this,
      i = document.getElementById("content"),
      a = document.getElementById("main__image"),
      t = document.getElementById("sidebar-settings-meta-clear-background-image-btn"),
      r = document.getElementById("sidebar-settings-meta-background-image"),
      n = ["cs--black", "cs--white", "cs--light-grey", "cs--dark-grey"],
      s = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

  function o() {
      r.src = "", a.classList.toggle("hidden", !0), a.style.removeProperty("background-image")
  }

  function d() {
      for (var e = "#", t = 0; t < 6; t++) {
          var n = Math.round(14 * Math.random());
          e += s[n]
      }
      return e
  }
  t.addEventListener("click", function() {
      newTab.settings.updateSettingsItem(NT_BACKGROUND_IMAGE, null, !0), o()
  }), e.setBackgroundSolidColor = function(e) {
      if (!isObject(e)) return !1;
      var t = e.detail;
      t ? (a.classList.add("hidden"), i.style.removeProperty("background"), i.style.setProperty("background-color", t, "important")) : o()
  }, e.setBackgroundRandomGradient = function(e) {
      if (!isObject(e)) return !1;
      var t, n;
      if (e.detail) {
          var s = (t = d(), n = d(), "linear-gradient(" + Math.round(360 * Math.random()) + "deg, " + t + ", " + n + ")");
          a.classList.add("hidden"), i.style.setProperty("background", s, "important")
      } else o()
  }, e.setBackgroundImage = function(e) {
      if (!isObject(e)) return !1;
      var t = e.detail;
      if (t) {
          var n = "url(" + t + ")";
          a.style.setProperty("background-image", n, "important"), r.src = t;
          var s = new CustomEvent("WELM_update_settings_item", {
              detail: {
                  key: NT_BACKGROUND_SOLID_COLOR,
                  value: null,
                  updateInRuntime: !0,
                  updateInput: !0
              }
          });
          window.dispatchEvent(s)
      } else o();
      a.classList.remove("hidden")
  }, e.setPageColorScheme = function(e) {
      if (!isObject(e)) return !1;
      removeManyClasses(i, n);
      var t = "cs--" + e.detail;
      i.classList.add(t)
  }, window.addEventListener("WELM_nt_background_solid_color", e.setBackgroundSolidColor, !1), window.addEventListener("WELM_nt_background_image", e.setBackgroundImage, !1), window.addEventListener("WELM_nt_colors_text", e.setPageColorScheme, !1), window.addEventListener("WELM_nt_background_random_gradient", e.setBackgroundRandomGradient, !1)
},
DateTime = function() {
  var n = document.getElementById("header-time-block"),
      s = document.getElementById("header-time"),
      i = document.getElementById("header-time-period"),
      a = document.getElementById("header-date");

  function r() {
      var e, t = (e = 12 <= (new Date).getHours() ? "PM" : "AM", {
          time: (new Date).toLocaleTimeString("en-US", {
              hour12: !0,
              hour: "numeric",
              minute: "numeric"
          }).replace(" AM", "").replace(" PM", ""),
          period: e
      });
      s.textContent = t.time, i.textContent = t.period
  }

  function o() {
      var e = (new Date).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
      });
      a.textContent = e
  }
  this.setDateEnabled = function(e) {
      if (!isObject(e)) return !1;
      var t = e.detail;
      a.classList.toggle("hidden", !t), t && (o(), setInterval(o, 6e4))
  }, this.setTimeEnabled = function(e) {
      if (!isObject(e)) return !1;
      var t = e.detail;
      n.classList.toggle("hidden", !t), t && (r(), setInterval(r, 5e3))
  }, window.addEventListener("WELM_nt_datetime_show_date", this.setDateEnabled, !1), window.addEventListener("WELM_nt_datetime_show_time", this.setTimeEnabled, !1)
},
Menu = function() {
  var e = document.getElementById("menu-btn"),
      t = document.getElementById("main");
  e.addEventListener("click", function() {
      t.classList.toggle("sidebar-open")
  })
},
Search = function() {
  var i = document.getElementById("search-input"),
      a = document.getElementById("search-input-icon"),
      r = document.getElementById("search-form"),
      e = document.getElementById("search-engine-list");

  function t(e, t) {
      if (!isObject(e) || !isObject(t)) return null;
      var n = document.createElement("a");
      n.className = "search-engine-dropdown__list-item", n.setAttribute("data-value", e.name), n.addEventListener("click", function() {
          d(this, e)
      }), t.name === e.name && (n.classList.add("active"), d(n, e));
      var s = document.createElement("img");
      s.className = "search-engine-dropdown__list-item__img", s.alt = e.name, s.src = "../assets/images/icons/" + e.icon;
      var i = document.createElement("span");
      return i.className = "search-engine-dropdown__list-item__title", i.textContent = e.name, n.appendChild(s), n.appendChild(i), n
  }
  for (var n = newTab.userDefaults[NT_DEFAULT_SEARCH_ENGINE], s = 0; s < SEARCH_ENGINES.length; s++) {
      var o = t(SEARCH_ENGINES[s], n);
      o && e.appendChild(o)
  }

  function d(e, t) {
      if (!e || !isObject(t)) return !1;
      var n = document.querySelector(".search-engine-dropdown__list-item.active");
      n && n.classList.remove("active"), e.classList.add("active");
      var s = "Search " + t.name + " or type a URL";
      i.setAttribute("placeholder", s), a.src = "../assets/images/icons/" + t.icon, r.setAttribute("action", t.url), chrome.runtime.sendMessage({
          action: BACKGROUND_ACTION_SET_KEY,
          key: NT_DEFAULT_SEARCH_ENGINE,
          value: t
      })
  }
  this.setSearchColorScheme = function(e) {
      if (!isObject(e)) return !1;
      var t = e.detail;
      r.classList.remove("white", "black", "dark-grey", "light-grey"), r.classList.add(t)
  }, window.addEventListener("WELM_nt_colors_search", this.setSearchColorScheme, !1)
},
Settings = function() {
  var n = this,
      e = document.querySelectorAll(".sidebar-table-item__input"),
      a = 1;
  n.updateSettingsItem = function(e, t, n, s) {
      if (!isString(e)) return !1;
      if (newTab.userDefaults[e] = t, n && chrome.runtime.sendMessage({
              action: BACKGROUND_ACTION_SET_KEY,
              key: e,
              value: t
          }), s) {
          var i = document.querySelector(".sidebar-table-item__input[data-storage-key='" + e + "']"),
              a = i.classList.contains("sidebar-table-item__input--checkbox") ? "checked" : "value";
          "file" === o.getAttribute("type") || (i[a] = t)
      } else {
          var r = new CustomEvent("WELM_" + e, {
              detail: t
          });
          window.dispatchEvent(r)
      }
  };
  for (var t = 0; t < e.length; t++) {
      var o = e[t],
          s = o.getAttribute("data-storage-key");
      if (s) {
          var i = newTab.userDefaults[s],
              r = "file" == o.getAttribute("type"),
              d = o.classList.contains("sidebar-table-item__input--checkbox") ? "checked" : "value";
          r || (o[d] = i);
          var c = o.classList.contains("sidebar-table-item__input--textbox") ? "input" : "change";
          n.updateSettingsItem(s, i, !1), o.addEventListener(c, function(e) {
              var t = this.classList.contains("sidebar-table-item__input--checkbox") ? this.checked : this.value;
              "file" == this.getAttribute("type") ? _(this, function(e, t) {
                  if (!e || !t) return !1;
                  n.updateSettingsItem(e.getAttribute("data-storage-key"), t, !0)
              }) : n.updateSettingsItem(this.getAttribute("data-storage-key"), t, !0)
          })
      }
  }

  function _(e, t) {
      var n = e.files[0];
      if (!n) return t(null, null);
      var s = new FileReader,
          i = (n.size / 1024 / 1024).toFixed(4);
      if (a < i) return alert("Error: Image exceeds maximum of 1MB file size."), t(null, null);
      s.addEventListener("load", function() {
          return t(e, s.result)
      }, !1), n && s.readAsDataURL(n)
  }
  window.addEventListener("WELM_update_settings_item", function(e) {
      if (!isObject(e)) return !1;
      var t = e.detail;
      if (!isObject(t)) return !1;
      n.updateSettingsItem(t.key, t.value, t.updateInRuntime, t.updateInput)
  }, !1)
},
Dissenter = function() {
  var e = this,
      n = document.getElementById("dissenter-section"),
      s = (document.getElementById("dissenter-recent-comments"), "home"),
      i = "discover",
      a = "notifications";

  function t(e) {
      if (!e || !isString(e)) return !1;
      var t = document.querySelector(".dissenter-section-header__meta-tabs__btn.active");
      t && t.classList.remove("active");
      var n = document.querySelector(".dissenter-section-header__meta-tabs__btn[data-tab='" + e + "']");
      n && n.classList.add("active"), e !== s ? newTab.classes.modules.dissenter.home.hide() : newTab.classes.modules.dissenter.home.show(), e !== i ? newTab.classes.modules.dissenter.discover.hide() : newTab.classes.modules.dissenter.discover.show(), e !== a ? newTab.classes.modules.dissenter.notifications.hide() : newTab.classes.modules.dissenter.notifications.show()
  }
  for (var r = document.querySelectorAll(".dissenter-section-header__meta-tabs__btn"), o = 0; o < r.length; o++) r[o].addEventListener("click", function(e) {
      t(this.getAttribute("data-tab"))
  });

  function E(e, t, n) {
      if (!e || !n) return null;
      var s = document.createElement("a");
      s.className = "dissenter-item__card-btn-block__item", s.href = "https://dissenter.com/discussion/begin?url=" + n;
      var i = document.createElement("img");
      i.className = "dissenter-item__card-btn-block__item__img", i.src = "../assets/images/icons/" + e + ".svg";
      var a = document.createElement("span");
      return a.className = "dissenter-item__card-btn-block__item__title", a.textContent = t || "0", s.appendChild(i), s.appendChild(a), s
  }
  e.getDissenterItem = function(e) {
      if (!e || !isObject(e)) return null;
      var t = e.pagePreview || {},
          n = t.url || "",
          s = t.title || "",
          i = new URL(n).hostname,
          a = document.createElement("div");
      a.className = "dissenter-item", a.onclick = function() {
          var e = "https://dissenter.com/discussion/begin?url=" + n;
          window.location.href = e
      };
      var r = document.createElement("div");
      r.className = "dissenter-item__inner";
      var o = document.createElement("img");
      o.className = "dissenter-item__icon", o.title = s, o.src = "https://logo.clearbit.com/" + i;
      var d = function(e) {
          if (!e || !isObject(e)) return null;
          var t = e.stats || {},
              n = e.pagePreview || {},
              s = n.url || "",
              i = document.createElement("div");
          i.className = "dissenter-item__card";
          var a = document.createElement("span");
          a.className = "dissenter-item__card__title", a.textContent = n.title || "";
          var r = document.createElement("span");
          r.className = "dissenter-item__card__subtitle", r.textContent = s;
          var o = document.createElement("img");
          o.className = "dissenter-item__card__media";
          var d = n.images || "";
          if (isArray(d)) {
              var c = d[0];
              o.src = c
          }
          var _ = document.createElement("div");
          _.className = "dissenter-item__card-btn-block";
          var l = E("upvote", t.upvoteCount, s),
              u = E("downvote", t.downCount, s),
              m = E("comment", t.commentCount, s);
          return i.appendChild(a), i.appendChild(r), i.appendChild(o), l && _.appendChild(l), u && _.appendChild(u), m && _.appendChild(m), i.appendChild(_), i
      }(e);
      return r.appendChild(o), d && r.appendChild(d), a.appendChild(r), a
  }, e.setDissenterEnabled = function(e) {
      if (!isObject(e)) return !1;
      var t = e.detail;
      n.classList.toggle("hidden", !t)
  }, e.setDissenterDefaultTab = function(e) {
      if (!isObject(e)) return !1;
      t(e.detail)
  }, window.addEventListener("WELM_nt_dissenter_enabled", e.setDissenterEnabled, !1), window.addEventListener("WELM_nt_dissenter_default_tab", e.setDissenterDefaultTab, !1)
},
DissenterDiscover = function() {
  var e = document.getElementById("dissenter-content__discover"),
      r = document.getElementById("dissenter-discover-url-container");

  function t() {
      performRequest({
          method: "GET",
          url: "https://dissenter.com/url?fmt=json"
      }, function(e, t) {
          if (isObject(t)) {
              var n = t.commentUrls;
              if (n && isArray(n)) {
                  r.innerText = "";
                  for (var s = 0; s < n.length; s++) {
                      var i = n[s],
                          a = newTab.classes.modules.dissenter.index.getDissenterItem(i);
                      a && r.appendChild(a)
                  }
              }
          }
      })
  }
  this.show = function() {
      e.classList.remove("hidden"), t()
  }, this.hide = function() {
      e.classList.add("hidden")
  }
},
DissenterHome = function() {
  var e = document.getElementById("dissenter-content__home"),
      r = document.getElementById("dissenter-home-card-container");

  function t() {
      performRequest({
          method: "GET",
          url: "https://dissenter.com?fmt=json"
      }, function(e, t) {
          if (t && isObject(t)) {
              var n = t.commentUrls;
              if (n && isArray(n)) {
                  r.innerText = "";
                  for (var s = 0; s < n.length; s++) {
                      var i = n[s],
                          a = newTab.classes.modules.dissenter.index.getDissenterItem(i);
                      a && r.appendChild(a)
                  }
              }
          }
      })
  }
  this.show = function() {
      e.classList.remove("hidden"), t()
  }, this.hide = function() {
      e.classList.add("hidden")
  }
},
DissenterNotifications = function() {
  var e = document.getElementById("dissenter-content__notifications"),
      a = document.getElementById("dissenter-notifications-container"),
      r = document.getElementById("dissenter-notification-tab-btn"),
      L = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
      N = 0;

  function t() {
      performRequest({
          method: "GET",
          url: "https://dissenter.com/notification?fmt=json"
      }, function(e, t) {
          if (t && isObject(t)) {
              var n = t.notifications;
              if (n && isArray(n)) {
                  N = 0, a.innerText = "";
                  for (var s = 0; s < n.length; s++) {
                      var i = o(n[s]);
                      i && a.appendChild(i)
                  }
                  0 < N ? (r.setAttribute("data-badge", N), r.classList.add("has-badge")) : (r.removeAttribute("data-badge"), r.classList.remove("has-badge"))
              }
          }
      })
  }

  function o(e) {
      if (!isObject(e)) return null;
      var t = e.subject || {},
          n = e.actor || {},
          s = t.url || {},
          i = t._id || "",
          a = new URL(s.url).hostname,
          r = e.action || "",
          o = e.subjectType || "";
      o = o.toLowerCase();
      var d = document.createElement("a");
      d.className = "dissenter-noti cs--white-on-black " + r, i && (d.href = "https://dissenter.com/comment/" + i), "new" === e.status && (d.classList.add("new"), N++);
      var c = document.createElement("div");
      c.className = "dissenter-noti__icons";
      var _ = document.createElement("img");
      _.className = "dissenter-noti__icons__url", _.src = "https://logo.clearbit.com/" + a;
      var l = document.createElement("img");
      l.className = "dissenter-noti__icons__action";
      var u = "../assets/images/icons/" + function(e) {
          var t = "spinner.svg";
          "upvote" == e ? t = "upvote.svg" : "downvote" == e ? t = "downvote.svg" : "reply" == e && (t = "comment.svg");
          return t
      }(r);
      l.src = u, c.appendChild(_), c.appendChild(l);
      var m = document.createElement("div");
      m.className = "dissenter-noti__page-content";
      var E = document.createElement("span");
      E.className = "dissenter-noti__page-content__title", E.textContent = s.title || "";
      var T = document.createElement("span");
      T.className = "dissenter-noti__page-content__url", T.textContent = s.url || "", m.appendChild(E), m.appendChild(T);
      var p = document.createElement("div");
      p.className = "dissenter-noti__context";
      var S = document.createElement("span");
      S.className = "dissenter-noti__context__name", S.textContent = n.username || "";
      var h = document.createElement("span");
      h.className = "dissenter-noti__context__text", h.textContent = function(e) {
          var t = "looked at";
          "upvote" == e ? t = "upvoted" : "downvote" == e ? t = "downvoted" : "reply" == e && (t = "replied to");
          return t
      }(r) + " your " + o;
      var A = document.createElement("span");
      A.className = "dissenter-noti__context__elapsed", A.textContent = function(e) {
          var t = new Date(e),
              n = (new Date - t) / 1e3,
              s = "";
          if (n < 60) s = "just now";
          else if (60 <= n && n < 3600) {
              var i = n / 60;
              i = parseInt(i), s = i + "m ago"
          } else if (3600 <= n && n < 86400) {
              var a = n / 3600;
              a = parseInt(a), s = a + "h ago"
          } else if (3600 <= n && n < 86400) {
              var a = n / 3600;
              a = parseInt(a), s = a + "h ago"
          } else {
              var r = L[t.getMonth()],
                  o = t.getDate();
              s = r + " " + o
          }
          return s
      }(e.created || "");
      var g = document.createElement("p");
      if (g.className = "dissenter-noti__context__subject", g.textContent = t.body || "", p.appendChild(S), p.appendChild(h), p.appendChild(A), p.appendChild(g), "reply" === e.action) {
          var v = (e.related || {}).body || "",
              f = document.createElement("p");
          f.className = "dissenter-noti__context__reply", f.textContent = v, p.appendChild(f)
      }
      var b = document.createElement("div");
      return b.className = "dissenter-noti__meta", b.appendChild(m), b.appendChild(p), d.appendChild(c), d.appendChild(b), d
  }
  this.show = function() {
      e.classList.remove("hidden"), t()
  }, this.hide = function() {
      e.classList.add("hidden")
  }
},
TopSites = function() {
  var e = this,
      r = document.getElementById("top-site-list"),
      t = document.querySelector('.sidebar-table-item__input.sidebar-table-item__input--checkbox[data-storage-key="nt_top_sites_enabled"]'),
      n = {
          permissions: ["topSites"]
      },
      o = [],
      d = [].concat.apply([], [
          ["sm", "md", "lg"],
          ["light", "dark"],
          ["square", "circle"]
      ]);

  function s() {
      ! function(e, a, t, n) {
          t || (t = newTab.newuserDefaults[NT_TOP_SITES_SIZE]);
          n || (n = newTab.userDefaults[NT_TOP_SITES_SHAPE]);
          void 0 === a && (a = newTab.userDefaults[NT_TOP_SITES_LIMIT]);
          if (!e) return;
          if (!chrome.topSites) return;
          chrome.topSites.get(function(e) {
              ! function() {
                  o = [];
                  for (; r.firstChild;) r.removeChild(r.firstChild)
              }();
              for (var t = Math.min(e.length, a), n = 0; n < t; n++) {
                  var s = e[n],
                      i = c(s);
                  i && (o.push(i), r.appendChild(i))
              }
          })
      }(newTab.userDefaults[NT_TOP_SITES_ENABLED], newTab.userDefaults[NT_TOP_SITES_LIMIT], newTab.userDefaults[NT_TOP_SITES_SIZE], newTab.userDefaults[NT_TOP_SITES_SHAPE])
  }

  function c(e, t, n, s) {
      if (!isObject(e)) return !1;
      t || (t = newTab.userDefaults[NT_TOP_SITES_SIZE]), n || (n = newTab.userDefaults[NT_TOP_SITES_SHAPE]), s || (s = newTab.userDefaults[NT_TOP_SITES_HIGHLIGHT]);
      var i = new URL(e.url).hostname,
          a = i;
      a = (a = a.replace("www.", "")).replace(".com", "");
      var r = document.createElement("a");
      r.className = "top-site-item", r.href = e.url, r.classList.add(t), r.classList.add(n), r.classList.add(s);
      var o = document.createElement("span");
      o.className = "top-site-item__title", o.textContent = a;
      var d = document.createElement("img");
      return d.className = "top-site-item__img", d.title = e.title, d.src = "https://logo.clearbit.com/" + i, r.appendChild(d), r.appendChild(o), r
  }
  t.addEventListener("change", function() {
      if (!this.checked) return !1;
      chrome.permissions.request(n, function(e) {
          e && s()
      })
  }), e.setTopSitesEnabled = function(e) {
      if (!isObject(e)) return !1;
      var t = e.detail;
      if (r.classList.toggle("hidden", !t), !t) return !1;
      s()
  }, e.updateTopSites = function(e) {
      if (!isObject(e)) return !1;
      s()
  }, e.updateTopSiteStyle = function(e) {
      if (!isObject(e)) return !1;
      for (var t = 0; t < o.length; t++) {
          var n = o[t];
          removeManyClasses(n, d);
          var s = newTab.userDefaults[NT_TOP_SITES_SIZE],
              i = newTab.userDefaults[NT_TOP_SITES_SHAPE],
              a = newTab.userDefaults[NT_TOP_SITES_HIGHLIGHT];
          n.classList.add(s), n.classList.add(i), n.classList.add(a)
      }
  }, e.setTopSitesTitlesEnabled = function(e) {
      if (!isObject(e)) return !1;
      var t = e.detail;
      r.classList.toggle("show-titles", t)
  }, window.addEventListener("WELM_nt_top_sites_enabled", e.setTopSitesEnabled, !1), window.addEventListener("WELM_nt_top_sites_limit", e.updateTopSites, !1), window.addEventListener("WELM_nt_top_sites_size", e.updateTopSiteStyle, !1), window.addEventListener("WELM_nt_top_sites_shape", e.updateTopSiteStyle, !1), window.addEventListener("WELM_nt_top_sites_highlight", e.updateTopSiteStyle, !1), window.addEventListener("WELM_nt_top_sites_show_title", e.setTopSitesTitlesEnabled, !1)
},
newTab = {};

function _init(e) {
newTab.userDefaults = e, newTab.classes = {
  modules: {
      dissenter: {
          index: new Dissenter,
          home: new DissenterHome,
          discover: new DissenterDiscover,
          notifications: new DissenterNotifications
      },
      topsites: {
          index: new TopSites
      }
  },
  page: {
      datetime: new DateTime,
      menu: new Menu,
      search: new Search,
      background: new Background
  }
}, newTab.settings = new Settings
}

function performRequest(e, t) {
if (!e || !isObject(e)) return t(!1, {});
var n = e.method || "",
  s = e.url || "",
  i = e.params,
  a = e.headers;
if (!n || !s) return !!t && t(!1, {});
var r = new XMLHttpRequest;
if (r.open(n, s, !0), r.setRequestHeader("Content-type", "application/json"), a && isArray(a))
  for (var o = 0; o < a.length; o++) {
      var d = a[o];
      isObject(d) && r.setRequestHeader(d.key, d.value)
  }
i && isObject(i) ? r.send(JSON.stringify(i)) : r.send({}), r.onload = function() {
  var e = {};
  try {
      e = JSON.parse(r.responseText)
  } catch (e) {}
  t && t(!1, e)
}, r.onerror = function() {
  var e = {};
  try {
      e = JSON.parse(r.responseText)
  } catch (e) {}
  t && t(!0, e)
}
}
chrome.runtime.sendMessage({
action: BACKGROUND_ACTION_GET_KEY,
key: STORAGE_KEY_ALL
}, function(e) {
_init(e)
});