var _t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ve(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function Ee() {
}
Object.assign(Ee, {
  default: Ee,
  register: Ee,
  revert: function() {
  },
  __esModule: !0
});
Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(r) {
  const e = (this.document || this.ownerDocument).querySelectorAll(r);
  let t = e.length;
  for (; --t >= 0 && e.item(t) !== this; )
    ;
  return t > -1;
});
Element.prototype.closest || (Element.prototype.closest = function(r) {
  let e = this;
  if (!document.documentElement.contains(e))
    return null;
  do {
    if (e.matches(r))
      return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null);
  return null;
});
Element.prototype.prepend || (Element.prototype.prepend = function(e) {
  const t = document.createDocumentFragment();
  Array.isArray(e) || (e = [e]), e.forEach((o) => {
    const i = o instanceof Node;
    t.appendChild(i ? o : document.createTextNode(o));
  }), this.insertBefore(t, this.firstChild);
});
Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(r) {
  r = arguments.length === 0 ? !0 : !!r;
  const e = this.parentNode, t = window.getComputedStyle(e, null), o = parseInt(t.getPropertyValue("border-top-width")), i = parseInt(t.getPropertyValue("border-left-width")), s = this.offsetTop - e.offsetTop < e.scrollTop, n = this.offsetTop - e.offsetTop + this.clientHeight - o > e.scrollTop + e.clientHeight, a = this.offsetLeft - e.offsetLeft < e.scrollLeft, l = this.offsetLeft - e.offsetLeft + this.clientWidth - i > e.scrollLeft + e.clientWidth, c = s && !n;
  (s || n) && r && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o + this.clientHeight / 2), (a || l) && r && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - i + this.clientWidth / 2), (s || n || a || l) && !r && this.scrollIntoView(c);
});
let Nt = (r = 21) => crypto.getRandomValues(new Uint8Array(r)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var Ze = /* @__PURE__ */ ((r) => (r.VERBOSE = "VERBOSE", r.INFO = "INFO", r.WARN = "WARN", r.ERROR = "ERROR", r))(Ze || {});
const v = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91
}, Rt = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
function ge(r, e, t = "log", o, i = "color: inherit") {
  if (!("console" in window) || !window.console[t])
    return;
  const s = ["info", "log", "warn", "error"].includes(t), n = [];
  switch (ge.logLevel) {
    case "ERROR":
      if (t !== "error")
        return;
      break;
    case "WARN":
      if (!["error", "warn"].includes(t))
        return;
      break;
    case "INFO":
      if (!s || r)
        return;
      break;
  }
  o && n.push(o);
  const a = "Editor.js 2.3.7", l = `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`;
  r && (s ? (n.unshift(l, i), e = `%c${a}%c ${e}`) : e = `( ${a} )${e}`);
  try {
    s ? o ? console[t](`${e} %o`, ...n) : console[t](e, ...n) : console[t](e);
  } catch {
  }
}
ge.logLevel = "VERBOSE";
function Dt(r) {
  ge.logLevel = r;
}
const C = ge.bind(window, !1), $ = ge.bind(window, !0);
function ee(r) {
  return Object.prototype.toString.call(r).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function I(r) {
  return ee(r) === "function" || ee(r) === "asyncfunction";
}
function D(r) {
  return ee(r) === "object";
}
function G(r) {
  return ee(r) === "string";
}
function Pt(r) {
  return ee(r) === "boolean";
}
function $e(r) {
  return ee(r) === "number";
}
function We(r) {
  return ee(r) === "undefined";
}
function Y(r) {
  return r ? Object.keys(r).length === 0 && r.constructor === Object : !0;
}
function Ge(r) {
  return r > 47 && r < 58 || // number keys
  r === 32 || r === 13 || // Space bar & return key(s)
  r === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
  r > 64 && r < 91 || // letter keys
  r > 95 && r < 112 || // Numpad keys
  r > 185 && r < 193 || // ;=,-./` (in order)
  r > 218 && r < 223;
}
async function qe(r, e = () => {
}, t = () => {
}) {
  async function o(i, s, n) {
    try {
      await i.function(i.data), await s(We(i.data) ? {} : i.data);
    } catch {
      n(We(i.data) ? {} : i.data);
    }
  }
  return r.reduce(async (i, s) => (await i, o(s, e, t)), Promise.resolve());
}
function Je(r) {
  return Array.prototype.slice.call(r);
}
function te(r, e) {
  return function() {
    const t = this, o = arguments;
    window.setTimeout(() => r.apply(t, o), e);
  };
}
function Ft(r) {
  return r.name.split(".").pop();
}
function Ht(r) {
  return /^[-\w]+\/([-+\w]+|\*)$/.test(r);
}
function zt(r, e, t) {
  let o;
  return (...i) => {
    const s = this, n = () => {
      o = null, t || r.apply(s, i);
    }, a = t && !o;
    window.clearTimeout(o), o = window.setTimeout(n, e), a && r.apply(s, i);
  };
}
function Ce(r, e, t = void 0) {
  let o, i, s, n = null, a = 0;
  t || (t = {});
  const l = function() {
    a = t.leading === !1 ? 0 : Date.now(), n = null, s = r.apply(o, i), n || (o = i = null);
  };
  return function() {
    const c = Date.now();
    !a && t.leading === !1 && (a = c);
    const u = e - (c - a);
    return o = this, i = arguments, u <= 0 || u > e ? (n && (clearTimeout(n), n = null), a = c, s = r.apply(o, i), n || (o = i = null)) : !n && t.trailing !== !1 && (n = setTimeout(l, u)), s;
  };
}
function Ut() {
  const r = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, e = Object.keys(r).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e && (r[e] = !0), r;
}
function ke(r) {
  return r[0].toUpperCase() + r.slice(1);
}
function Se(r, ...e) {
  if (!e.length)
    return r;
  const t = e.shift();
  if (D(r) && D(t))
    for (const o in t)
      D(t[o]) ? (r[o] || Object.assign(r, { [o]: {} }), Se(r[o], t[o])) : Object.assign(r, { [o]: t[o] });
  return Se(r, ...e);
}
function Qe(r) {
  const e = Ut();
  return r = r.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), e.mac ? r = r.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : r = r.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), r;
}
function jt(r) {
  try {
    return new URL(r).href;
  } catch {
  }
  return r.substring(0, 2) === "//" ? window.location.protocol + r : window.location.origin + r;
}
function $t() {
  return Nt(10);
}
function Wt(r) {
  window.open(r, "_blank");
}
function Yt(r = "") {
  return `${r}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function Ie(r, e, t) {
  const o = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  r && $(o, "warn");
}
function ne(r, e, t) {
  const o = t.value ? "value" : "get", i = t[o], s = `#${e}Cache`;
  if (t[o] = function(...n) {
    return this[s] === void 0 && (this[s] = i.apply(this, ...n)), this[s];
  }, o === "get" && t.set) {
    const n = t.set;
    t.set = function(a) {
      delete r[s], n.apply(this, a);
    };
  }
  return t;
}
const et = 650;
function Q() {
  return window.matchMedia(`(max-width: ${et}px)`).matches;
}
const Ye = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function Kt(r, e) {
  const t = Array.isArray(r) || D(r), o = Array.isArray(e) || D(e);
  return t || o ? JSON.stringify(r) === JSON.stringify(e) : r === e;
}
class d {
  /**
   * Check if passed tag has no closed tag
   *
   * @param {HTMLElement} tag - element to check
   * @returns {boolean}
   */
  static isSingleTag(e) {
    return e.tagName && [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR",
      "IFRAME",
      "COINGECKO-COIN-TICKER-WIDGET",
      "COINGECKO-COIN-COMPARE-CHART-WIDGET",
      "COINGECKO-COIN-PRICE-CHART-WIDGET",
      "OEMBED"
    ].includes(e.tagName);
  }
  /**
   * Check if element is BR or WBR
   *
   * @param {HTMLElement} element - element to check
   * @returns {boolean}
   */
  static isLineBreakTag(e) {
    return e && e.tagName && ["BR", "WBR"].includes(e.tagName);
  }
  /**
   * Helper for making Elements with class name and attributes
   *
   * @param  {string} tagName - new Element tag name
   * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
   * @param  {object} [attributes] - any attributes
   * @returns {HTMLElement}
   */
  static make(e, t = null, o = {}) {
    const i = document.createElement(e);
    Array.isArray(t) ? i.classList.add(...t) : t && i.classList.add(t);
    for (const s in o)
      Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
    return i;
  }
  /**
   * Creates Text Node with the passed content
   *
   * @param {string} content - text content
   * @returns {Text}
   */
  static text(e) {
    return document.createTextNode(e);
  }
  /**
   * Append one or several elements to the parent
   *
   * @param  {Element|DocumentFragment} parent - where to append
   * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
   */
  static append(e, t) {
    Array.isArray(t) ? t.forEach((o) => e.appendChild(o)) : e.appendChild(t);
  }
  /**
   * Append element or a couple to the beginning of the parent elements
   *
   * @param {Element} parent - where to append
   * @param {Element|Element[]} elements - element or elements list
   */
  static prepend(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach((o) => e.prepend(o))) : e.prepend(t);
  }
  /**
   * Swap two elements in parent
   *
   * @param {HTMLElement} el1 - from
   * @param {HTMLElement} el2 - to
   * @deprecated
   */
  static swap(e, t) {
    const o = document.createElement("div"), i = e.parentNode;
    i.insertBefore(o, e), i.insertBefore(e, t), i.insertBefore(t, o), i.removeChild(o);
  }
  /**
   * Selector Decorator
   *
   * Returns first match
   *
   * @param {Element} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {Element}
   */
  static find(e = document, t) {
    return e.querySelector(t);
  }
  /**
   * Get Element by Id
   *
   * @param {string} id - id to find
   * @returns {HTMLElement | null}
   */
  static get(e) {
    return document.getElementById(e);
  }
  /**
   * Selector Decorator.
   *
   * Returns all matches
   *
   * @param {Element|Document} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {NodeList}
   */
  static findAll(e = document, t) {
    return e.querySelectorAll(t);
  }
  /**
   * Returns CSS selector for all text inputs
   */
  static get allInputsSelector() {
    return "[contenteditable=true], textarea, input:not([type]), " + [
      "text",
      "password",
      "email",
      "number",
      "search",
      "tel",
      "url"
    ].map((t) => `input[type="${t}"]`).join(", ");
  }
  /**
   * Find all contenteditable, textarea and editable input elements passed holder contains
   *
   * @param holder - element where to find inputs
   */
  static findAllInputs(e) {
    return Je(e.querySelectorAll(d.allInputsSelector)).reduce((t, o) => d.isNativeInput(o) || d.containsOnlyInlineElements(o) ? [...t, o] : [...t, ...d.getDeepestBlockElements(o)], []);
  }
  /**
   * Search for deepest node which is Leaf.
   * Leaf is the vertex that doesn't have any child nodes
   *
   * @description Method recursively goes throw the all Node until it finds the Leaf
   * @param {Node} node - root Node. From this vertex we start Deep-first search
   *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
   * @param {boolean} [atLast] - find last text node
   * @returns {Node} - it can be text Node or Element Node, so that caret will able to work with it
   */
  static getDeepestNode(e, t = !1) {
    const o = t ? "lastChild" : "firstChild", i = t ? "previousSibling" : "nextSibling";
    if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
      let s = e[o];
      if (d.isSingleTag(s) && !d.isNativeInput(s) && !d.isLineBreakTag(s))
        if (s[i])
          s = s[i];
        else if (s.parentNode[i])
          s = s.parentNode[i];
        else
          return s.parentNode;
      return this.getDeepestNode(s, t);
    }
    return e;
  }
  /**
   * Check if object is DOM node
   *
   * @param {*} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isElement(e) {
    return $e(e) ? !1 : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  /**
   * Check if object is DocumentFragment node
   *
   * @param {object} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isFragment(e) {
    return $e(e) ? !1 : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  /**
   * Check if passed element is contenteditable
   *
   * @param {HTMLElement} element - html element to check
   * @returns {boolean}
   */
  static isContentEditable(e) {
    return e.contentEditable === "true";
  }
  /**
   * Checks target if it is native input
   *
   * @param {*} target - HTML element or string
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isNativeInput(e) {
    const t = ["INPUT", "TEXTAREA"];
    return e && e.tagName ? t.includes(e.tagName) : !1;
  }
  /**
   * Checks if we can set caret
   *
   * @param {HTMLElement} target - target to check
   * @returns {boolean}
   */
  static canSetCaret(e) {
    let t = !0;
    if (d.isNativeInput(e))
      switch (e.type) {
        case "file":
        case "checkbox":
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "image":
        case "reset":
          t = !1;
          break;
      }
    else
      t = d.isContentEditable(e);
    return t;
  }
  /**
   * Checks node if it is empty
   *
   * @description Method checks simple Node without any childs for emptiness
   * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
   * @param {Node} node - node to check
   * @returns {boolean} true if it is empty
   */
  static isNodeEmpty(e) {
    let t;
    return this.isSingleTag(e) && !this.isLineBreakTag(e) ? !1 : (this.isElement(e) && this.isNativeInput(e) ? t = e.value : t = e.textContent.replace("​", ""), t.trim().length === 0);
  }
  /**
   * checks node if it is doesn't have any child nodes
   *
   * @param {Node} node - node to check
   * @returns {boolean}
   */
  static isLeaf(e) {
    return e ? e.childNodes.length === 0 : !1;
  }
  /**
   * breadth-first search (BFS)
   * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
   *
   * @description Pushes to stack all DOM leafs and checks for emptiness
   * @param {Node} node - node to check
   * @returns {boolean}
   */
  static isEmpty(e) {
    const t = e;
    if (t.tagName === "IFRAME" && t.getAttribute("src"))
      return !1;
    e.normalize();
    const o = [e];
    for (; o.length > 0; )
      if (e = o.shift(), !!e) {
        if (this.isLeaf(e) && !this.isNodeEmpty(e))
          return !1;
        e.childNodes && o.push(...Array.from(e.childNodes));
      }
    return !0;
  }
  /**
   * Check if string contains html elements
   *
   * @param {string} str - string to check
   * @returns {boolean}
   */
  static isHTMLString(e) {
    const t = d.make("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  /**
   * Return length of node`s text content
   *
   * @param {Node} node - node with content
   * @returns {number}
   */
  static getContentLength(e) {
    return d.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
  }
  /**
   * Return array of names of block html elements
   *
   * @returns {string[]}
   */
  static get blockElements() {
    return [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "ruby",
      "section",
      "table",
      "tbody",
      "thead",
      "tr",
      "tfoot",
      "ul",
      "video"
    ];
  }
  /**
   * Check if passed content includes only inline elements
   *
   * @param {string|HTMLElement} data - element or html string
   * @returns {boolean}
   */
  static containsOnlyInlineElements(e) {
    let t;
    G(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    const o = (i) => !d.blockElements.includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o);
    return Array.from(t.children).every(o);
  }
  /**
   * Find and return all block elements in the passed parent (including subtree)
   *
   * @param {HTMLElement} parent - root element
   * @returns {HTMLElement[]}
   */
  static getDeepestBlockElements(e) {
    return d.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((t, o) => [
      ...t,
      ...d.getDeepestBlockElements(o)
    ], []);
  }
  /**
   * Helper for get holder from {string} or return HTMLElement
   *
   * @param {string | HTMLElement} element - holder's id or holder's HTML Element
   * @returns {HTMLElement}
   */
  static getHolder(e) {
    return G(e) ? document.getElementById(e) : e;
  }
  /**
   * Returns true if element is anchor (is A tag)
   *
   * @param {Element} element - element to check
   * @returns {boolean}
   */
  static isAnchor(e) {
    return e.tagName.toLowerCase() === "a";
  }
  /**
   * Return element's offset related to the document
   *
   * @todo handle case when editor initialized in scrollable popup
   * @param el - element to compute offset
   */
  static offset(e) {
    const t = e.getBoundingClientRect(), o = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, s = t.top + i, n = t.left + o;
    return {
      top: s,
      left: n,
      bottom: s + t.height,
      right: n + t.width
    };
  }
}
const Xt = {
  blockTunes: {
    toggler: {
      "Click to tune": "",
      "or drag to move": ""
    }
  },
  inlineToolbar: {
    converter: {
      "Convert to": ""
    }
  },
  toolbar: {
    toolbox: {
      Add: ""
    }
  },
  popover: {
    Filter: "",
    "Nothing found": ""
  }
}, Vt = {
  Text: "",
  Link: "",
  Bold: "",
  Italic: ""
}, Zt = {
  link: {
    "Add a link": ""
  },
  stub: {
    "The block can not be displayed correctly.": ""
  }
}, Gt = {
  delete: {
    Delete: "",
    "Click to delete": ""
  },
  moveUp: {
    "Move up": ""
  },
  moveDown: {
    "Move down": ""
  }
}, tt = {
  ui: Xt,
  toolNames: Vt,
  tools: Zt,
  blockTunes: Gt
}, ot = class oe {
  /**
   * Type-safe translation for internal UI texts:
   * Perform translation of the string by namespace and a key
   *
   * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
   * @param internalNamespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static ui(e, t) {
    return oe._t(e, t);
  }
  /**
   * Translate for external strings that is not presented in default dictionary.
   * For example, for user-specified tool names
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static t(e, t) {
    return oe._t(e, t);
  }
  /**
   * Adjust module for using external dictionary
   *
   * @param dictionary - new messages list to override default
   */
  static setDictionary(e) {
    oe.currentDictionary = e;
  }
  /**
   * Perform translation both for internal and external namespaces
   * If there is no translation found, returns passed key as a translated message
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static _t(e, t) {
    const o = oe.getNamespace(e);
    return !o || !o[t] ? t : o[t];
  }
  /**
   * Find messages section by namespace path
   *
   * @param namespace - path to section
   */
  static getNamespace(e) {
    return e.split(".").reduce((o, i) => !o || !Object.keys(o).length ? {} : o[i], oe.currentDictionary);
  }
};
ot.currentDictionary = tt;
let U = ot;
class it extends Error {
}
class we {
  constructor() {
    this.subscribers = {};
  }
  /**
   * Subscribe any event on callback
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  on(e, t) {
    e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t);
  }
  /**
   * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  once(e, t) {
    e in this.subscribers || (this.subscribers[e] = []);
    const o = (i) => {
      const s = t(i), n = this.subscribers[e].indexOf(o);
      return n !== -1 && this.subscribers[e].splice(n, 1), s;
    };
    this.subscribers[e].push(o);
  }
  /**
   * Emit callbacks with passed data
   *
   * @param eventName - event name
   * @param data - subscribers get this data when they were fired
   */
  emit(e, t) {
    Y(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o, i) => {
      const s = i(o);
      return s !== void 0 ? s : o;
    }, t);
  }
  /**
   * Unsubscribe callback from event
   *
   * @param eventName - event name
   * @param callback - event handler
   */
  off(e, t) {
    for (let o = 0; o < this.subscribers[e].length; o++)
      if (this.subscribers[e][o] === t) {
        delete this.subscribers[e][o];
        break;
      }
  }
  /**
   * Destroyer
   * clears subscribers list
   */
  destroy() {
    this.subscribers = null;
  }
}
function he(r) {
  Object.setPrototypeOf(this, {
    /**
     * Block id
     *
     * @returns {string}
     */
    get id() {
      return r.id;
    },
    /**
     * Tool name
     *
     * @returns {string}
     */
    get name() {
      return r.name;
    },
    /**
     * Tool config passed on Editor's initialization
     *
     * @returns {ToolConfig}
     */
    get config() {
      return r.config;
    },
    /**
     * .ce-block element, that wraps plugin contents
     *
     * @returns {HTMLElement}
     */
    get holder() {
      return r.holder;
    },
    /**
     * True if Block content is empty
     *
     * @returns {boolean}
     */
    get isEmpty() {
      return r.isEmpty;
    },
    /**
     * True if Block is selected with Cross-Block selection
     *
     * @returns {boolean}
     */
    get selected() {
      return r.selected;
    },
    /**
     * Set Block's stretch state
     *
     * @param {boolean} state — state to set
     */
    set stretched(t) {
      r.stretched = t;
    },
    /**
     * True if Block is stretched
     *
     * @returns {boolean}
     */
    get stretched() {
      return r.stretched;
    },
    /**
     * Call Tool method with errors handler under-the-hood
     *
     * @param {string} methodName - method to call
     * @param {object} param - object with parameters
     * @returns {unknown}
     */
    call(t, o) {
      return r.call(t, o);
    },
    /**
     * Save Block content
     *
     * @returns {Promise<void|SavedData>}
     */
    save() {
      return r.save();
    },
    /**
     * Validate Block data
     *
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>}
     */
    validate(t) {
      return r.validate(t);
    },
    /**
     * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
     * Can be useful for block changes invisible for editor core.
     */
    dispatchChange() {
      r.dispatchChange();
    }
  });
}
class Le {
  constructor() {
    this.allListeners = [];
  }
  /**
   * Assigns event listener on element and returns unique identifier
   *
   * @param {EventTarget} element - DOM element that needs to be listened
   * @param {string} eventType - event type
   * @param {Function} handler - method that will be fired on event
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  on(e, t, o, i = !1) {
    const s = Yt("l"), n = {
      id: s,
      element: e,
      eventType: t,
      handler: o,
      options: i
    };
    if (!this.findOne(e, t, o))
      return this.allListeners.push(n), e.addEventListener(t, o, i), s;
  }
  /**
   * Removes event listener from element
   *
   * @param {EventTarget} element - DOM element that we removing listener
   * @param {string} eventType - event type
   * @param {Function} handler - remove handler, if element listens several handlers on the same event type
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  off(e, t, o, i) {
    const s = this.findAll(e, t, o);
    s.forEach((n, a) => {
      const l = this.allListeners.indexOf(s[a]);
      l > -1 && (this.allListeners.splice(l, 1), n.element.removeEventListener(n.eventType, n.handler, n.options));
    });
  }
  /**
   * Removes listener by id
   *
   * @param {string} id - listener identifier
   */
  offById(e) {
    const t = this.findById(e);
    t && t.element.removeEventListener(t.eventType, t.handler, t.options);
  }
  /**
   * Finds and returns first listener by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} [eventType] - event type
   * @param {Function} [handler] - event handler
   * @returns {ListenerData|null}
   */
  findOne(e, t, o) {
    const i = this.findAll(e, t, o);
    return i.length > 0 ? i[0] : null;
  }
  /**
   * Return all stored listeners by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} eventType - event type
   * @param {Function} handler - event handler
   * @returns {ListenerData[]}
   */
  findAll(e, t, o) {
    let i;
    const s = e ? this.findByEventTarget(e) : [];
    return e && t && o ? i = s.filter((n) => n.eventType === t && n.handler === o) : e && t ? i = s.filter((n) => n.eventType === t) : i = s, i;
  }
  /**
   * Removes all listeners
   */
  removeAll() {
    this.allListeners.map((e) => {
      e.element.removeEventListener(e.eventType, e.handler, e.options);
    }), this.allListeners = [];
  }
  /**
   * Module cleanup on destruction
   */
  destroy() {
    this.removeAll();
  }
  /**
   * Search method: looks for listener by passed element
   *
   * @param {EventTarget} element - searching element
   * @returns {Array} listeners that found on element
   */
  findByEventTarget(e) {
    return this.allListeners.filter((t) => {
      if (t.element === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed event type
   *
   * @param {string} eventType - event type
   * @returns {ListenerData[]} listeners that found on element
   */
  findByType(e) {
    return this.allListeners.filter((t) => {
      if (t.eventType === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed handler
   *
   * @param {Function} handler - event handler
   * @returns {ListenerData[]} listeners that found on element
   */
  findByHandler(e) {
    return this.allListeners.filter((t) => {
      if (t.handler === e)
        return t;
    });
  }
  /**
   * Returns listener data found by id
   *
   * @param {string} id - listener identifier
   * @returns {ListenerData}
   */
  findById(e) {
    return this.allListeners.find((t) => t.id === e);
  }
}
class y {
  /**
   * @class
   * @param options - Module options
   * @param options.config - Module config
   * @param options.eventsDispatcher - Common event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    if (this.nodes = {}, this.listeners = new Le(), this.readOnlyMutableListeners = {
      /**
       * Assigns event listener on DOM element and pushes into special array that might be removed
       *
       * @param {EventTarget} element - DOM Element
       * @param {string} eventType - Event name
       * @param {Function} handler - Event handler
       * @param {boolean|AddEventListenerOptions} options - Listening options
       */
      on: (o, i, s, n = !1) => {
        this.mutableListenerIds.push(
          this.listeners.on(o, i, s, n)
        );
      },
      /**
       * Clears all mutable listeners
       */
      clearAll: () => {
        for (const o of this.mutableListenerIds)
          this.listeners.offById(o);
        this.mutableListenerIds = [];
      }
    }, this.mutableListenerIds = [], new.target === y)
      throw new TypeError("Constructors for abstract class Module are not allowed.");
    this.config = e, this.eventsDispatcher = t;
  }
  /**
   * Editor modules setter
   *
   * @param {EditorModules} Editor - Editor's Modules
   */
  set state(e) {
    this.Editor = e;
  }
  /**
   * Remove memorized nodes
   */
  removeAllNodes() {
    for (const e in this.nodes) {
      const t = this.nodes[e];
      t instanceof HTMLElement && t.remove();
    }
  }
  /**
   * Returns true if current direction is RTL (Right-To-Left)
   */
  get isRtl() {
    return this.config.i18n.direction === "rtl";
  }
}
class b {
  constructor() {
    this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
  }
  /**
   * Editor styles
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  static get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorZone: "codex-editor__redactor"
    };
  }
  /**
   * Returns selected anchor
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
   *
   * @returns {Node|null}
   */
  static get anchorNode() {
    const e = window.getSelection();
    return e ? e.anchorNode : null;
  }
  /**
   * Returns selected anchor element
   *
   * @returns {Element|null}
   */
  static get anchorElement() {
    const e = window.getSelection();
    if (!e)
      return null;
    const t = e.anchorNode;
    return t ? d.isElement(t) ? t : t.parentElement : null;
  }
  /**
   * Returns selection offset according to the anchor node
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
   *
   * @returns {number|null}
   */
  static get anchorOffset() {
    const e = window.getSelection();
    return e ? e.anchorOffset : null;
  }
  /**
   * Is current selection range collapsed
   *
   * @returns {boolean|null}
   */
  static get isCollapsed() {
    const e = window.getSelection();
    return e ? e.isCollapsed : null;
  }
  /**
   * Check current selection if it is at Editor's zone
   *
   * @returns {boolean}
   */
  static get isAtEditor() {
    return this.isSelectionAtEditor(b.get());
  }
  /**
   * Check if passed selection is at Editor's zone
   *
   * @param selection - Selection object to check
   */
  static isSelectionAtEditor(e) {
    if (!e)
      return !1;
    let t = e.anchorNode || e.focusNode;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${b.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Check if passed range at Editor zone
   *
   * @param range - range to check
   */
  static isRangeAtEditor(e) {
    if (!e)
      return;
    let t = e.startContainer;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${b.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Methods return boolean that true if selection exists on the page
   */
  static get isSelectionExists() {
    return !!b.get().anchorNode;
  }
  /**
   * Return first range
   *
   * @returns {Range|null}
   */
  static get range() {
    return this.getRangeFromSelection(this.get());
  }
  /**
   * Returns range from passed Selection object
   *
   * @param selection - Selection object to get Range from
   */
  static getRangeFromSelection(e) {
    return e && e.rangeCount ? e.getRangeAt(0) : null;
  }
  /**
   * Calculates position and size of selected text
   *
   * @returns {DOMRect | ClientRect}
   */
  static get rect() {
    let e = document.selection, t, o = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    if (e && e.type !== "Control")
      return e = e, t = e.createRange(), o.x = t.boundingLeft, o.y = t.boundingTop, o.width = t.boundingWidth, o.height = t.boundingHeight, o;
    if (!window.getSelection)
      return C("Method window.getSelection is not supported", "warn"), o;
    if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount))
      return C("Method SelectionUtils.rangeCount is not supported", "warn"), o;
    if (e.rangeCount === 0)
      return o;
    if (t = e.getRangeAt(0).cloneRange(), t.getBoundingClientRect && (o = t.getBoundingClientRect()), o.x === 0 && o.y === 0) {
      const i = document.createElement("span");
      if (i.getBoundingClientRect) {
        i.appendChild(document.createTextNode("​")), t.insertNode(i), o = i.getBoundingClientRect();
        const s = i.parentNode;
        s.removeChild(i), s.normalize();
      }
    }
    return o;
  }
  /**
   * Returns selected text as String
   *
   * @returns {string}
   */
  static get text() {
    return window.getSelection ? window.getSelection().toString() : "";
  }
  /**
   * Returns window SelectionUtils
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
   *
   * @returns {Selection}
   */
  static get() {
    return window.getSelection();
  }
  /**
   * Set focus to contenteditable or native input element
   *
   * @param element - element where to set focus
   * @param offset - offset of cursor
   */
  static setCursor(e, t = 0) {
    const o = document.createRange(), i = window.getSelection();
    return d.isNativeInput(e) ? d.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, e.getBoundingClientRect()) : void 0 : (o.setStart(e, t), o.setEnd(e, t), i.removeAllRanges(), i.addRange(o), o.getBoundingClientRect());
  }
  /**
   * Check if current range exists and belongs to container
   *
   * @param container - where range should be
   */
  static isRangeInsideContainer(e) {
    const t = b.range;
    return t === null ? !1 : e.contains(t.startContainer);
  }
  /**
   * Adds fake cursor to the current range
   */
  static addFakeCursor() {
    const e = b.range;
    if (e === null)
      return;
    const t = d.make("span", "codex-editor__fake-cursor");
    t.dataset.mutationFree = "true", e.collapse(), e.insertNode(t);
  }
  /**
   * Check if passed element contains a fake cursor
   *
   * @param el - where to check
   */
  static isFakeCursorInsideContainer(e) {
    return d.find(e, ".codex-editor__fake-cursor") !== null;
  }
  /**
   * Removes fake cursor from a container
   *
   * @param container - container to look for
   */
  static removeFakeCursor(e = document.body) {
    const t = d.find(e, ".codex-editor__fake-cursor");
    t && t.remove();
  }
  /**
   * Removes fake background
   */
  removeFakeBackground() {
    this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
  }
  /**
   * Sets fake background
   */
  setFakeBackground() {
    document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
  }
  /**
   * Save SelectionUtils's range
   */
  save() {
    this.savedSelectionRange = b.range;
  }
  /**
   * Restore saved SelectionUtils's range
   */
  restore() {
    if (!this.savedSelectionRange)
      return;
    const e = window.getSelection();
    e.removeAllRanges(), e.addRange(this.savedSelectionRange);
  }
  /**
   * Clears saved selection
   */
  clearSaved() {
    this.savedSelectionRange = null;
  }
  /**
   * Collapse current selection
   */
  collapseToEnd() {
    const e = window.getSelection(), t = document.createRange();
    t.selectNodeContents(e.focusNode), t.collapse(!1), e.removeAllRanges(), e.addRange(t);
  }
  /**
   * Looks ahead to find passed tag from current selection
   *
   * @param  {string} tagName       - tag to found
   * @param  {string} [className]   - tag's class name
   * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t, o = 10) {
    const i = window.getSelection();
    let s = null;
    return !i || !i.anchorNode || !i.focusNode ? null : ([
      /** the Node in which the selection begins */
      i.anchorNode,
      /** the Node in which the selection ends */
      i.focusNode
    ].forEach((a) => {
      let l = o;
      for (; l > 0 && a.parentNode && !(a.tagName === e && (s = a, t && a.classList && !a.classList.contains(t) && (s = null), s)); )
        a = a.parentNode, l--;
    }), s);
  }
  /**
   * Expands selection range to the passed parent node
   *
   * @param {HTMLElement} element - element which contents should be selected
   */
  expandToTag(e) {
    const t = window.getSelection();
    t.removeAllRanges();
    const o = document.createRange();
    o.selectNodeContents(e), t.addRange(o);
  }
}
function qt(r, e) {
  const { type: t, target: o, addedNodes: i, removedNodes: s } = r;
  if (o === e)
    return !0;
  if (["characterData", "attributes"].includes(t)) {
    const l = o.nodeType === Node.TEXT_NODE ? o.parentNode : o;
    return e.contains(l);
  }
  const n = Array.from(i).some((l) => e.contains(l)), a = Array.from(s).some((l) => e.contains(l));
  return n || a;
}
const Me = "redactor dom changed", st = "block changed", nt = "fake cursor is about to be toggled", rt = "fake cursor have been set";
var Z = /* @__PURE__ */ ((r) => (r.APPEND_CALLBACK = "appendCallback", r.RENDERED = "rendered", r.MOVED = "moved", r.UPDATED = "updated", r.REMOVED = "removed", r.ON_PASTE = "onPaste", r))(Z || {});
class _ extends we {
  /**
   * @param options - block constructor options
   * @param [options.id] - block's id. Will be generated if omitted.
   * @param options.data - Tool's initial data
   * @param options.tool — block's tool
   * @param options.api - Editor API module for pass it to the Block Tunes
   * @param options.readOnly - Read-Only flag
   * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
   */
  constructor({
    id: e = $t(),
    data: t,
    tool: o,
    api: i,
    readOnly: s,
    tunesData: n
  }, a) {
    super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = () => {
      this.dropInputsCache(), this.updateCurrentInput();
    }, this.didMutated = (l = void 0) => {
      const c = l === void 0, u = l instanceof InputEvent;
      !c && !u && this.detectToolRootChange(l);
      let h;
      c || u ? h = !0 : h = !(l.length > 0 && l.every((k) => {
        const { addedNodes: p, removedNodes: g, target: M } = k;
        return [
          ...Array.from(p),
          ...Array.from(g),
          M
        ].some((L) => d.isElement(L) ? L.dataset.mutationFree === "true" : !1);
      })), h && (this.dropInputsCache(), this.updateCurrentInput(), this.call(
        "updated"
        /* UPDATED */
      ), this.emit("didMutated", this));
    }, this.name = o.name, this.id = e, this.settings = o.settings, this.config = o.settings.config || {}, this.api = i, this.editorEventBus = a || null, this.blockAPI = new he(this), this.tool = o, this.toolInstance = o.create(t, this.blockAPI, s), this.tunes = o.tunes, this.composeTunes(n), this.holder = this.compose(), this.watchBlockMutations(), this.addInputEvents();
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      wrapper: "ce-block",
      wrapperStretched: "ce-block--stretched",
      content: "ce-block__content",
      focused: "ce-block--focused",
      selected: "ce-block--selected",
      dropTarget: "ce-block--drop-target"
    };
  }
  /**
   * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
   *
   * @returns {HTMLElement[]}
   */
  get inputs() {
    if (this.cachedInputs.length !== 0)
      return this.cachedInputs;
    const e = d.findAllInputs(this.holder);
    return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
  }
  /**
   * Return current Tool`s input
   *
   * @returns {HTMLElement}
   */
  get currentInput() {
    return this.inputs[this.inputIndex === -1 ? 0 : this.inputIndex];
  }
  /**
   * Set input index to the passed element
   *
   * @param {HTMLElement | Node} element - HTML Element to set as current input
   */
  set currentInput(e) {
    const t = this.inputs.findIndex(
      (o) => o === e || o.contains(e)
    );
    t !== -1 && (this.inputIndex = t);
  }
  /**
   * Return first Tool`s input
   *
   * @returns {HTMLElement}
   */
  get firstInput() {
    return this.inputs[0];
  }
  /**
   * Return first Tool`s input
   *
   * @returns {HTMLElement}
   */
  get lastInput() {
    const e = this.inputs;
    return e[e.length - 1];
  }
  /**
   * Return next Tool`s input or undefined if it doesn't exist
   *
   * @returns {HTMLElement}
   */
  get nextInput() {
    return this.inputs[this.inputIndex + 1];
  }
  /**
   * Return previous Tool`s input or undefined if it doesn't exist
   *
   * @returns {HTMLElement}
   */
  get previousInput() {
    return this.inputs[this.inputIndex - 1];
  }
  /**
   * Get Block's JSON data
   *
   * @returns {object}
   */
  get data() {
    return this.save().then((e) => e && !Y(e.data) ? e.data : {});
  }
  /**
   * Returns tool's sanitizer config
   *
   * @returns {object}
   */
  get sanitize() {
    return this.tool.sanitizeConfig;
  }
  /**
   * is block mergeable
   * We plugin have merge function then we call it mergeable
   *
   * @returns {boolean}
   */
  get mergeable() {
    return I(this.toolInstance.merge);
  }
  /**
   * Check block for emptiness
   *
   * @returns {boolean}
   */
  get isEmpty() {
    const e = d.isEmpty(this.pluginsContent), t = !this.hasMedia;
    return e && t;
  }
  /**
   * Check if block has a media content such as images, iframe and other
   *
   * @returns {boolean}
   */
  get hasMedia() {
    const e = [
      "img",
      "iframe",
      "video",
      "audio",
      "source",
      "input",
      "textarea",
      "twitterwidget"
    ];
    return !!this.holder.querySelector(e.join(","));
  }
  /**
   * Set focused state
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */
  set focused(e) {
    this.holder.classList.toggle(_.CSS.focused, e);
  }
  /**
   * Get Block's focused state
   */
  get focused() {
    return this.holder.classList.contains(_.CSS.focused);
  }
  /**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */
  set selected(e) {
    var i, s;
    this.holder.classList.toggle(_.CSS.selected, e);
    const t = e === !0 && b.isRangeInsideContainer(this.holder), o = e === !1 && b.isFakeCursorInsideContainer(this.holder);
    (t || o) && ((i = this.editorEventBus) == null || i.emit(nt, { state: e }), t ? b.addFakeCursor() : b.removeFakeCursor(this.holder), (s = this.editorEventBus) == null || s.emit(rt, { state: e }));
  }
  /**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */
  get selected() {
    return this.holder.classList.contains(_.CSS.selected);
  }
  /**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */
  set stretched(e) {
    this.holder.classList.toggle(_.CSS.wrapperStretched, e);
  }
  /**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */
  get stretched() {
    return this.holder.classList.contains(_.CSS.wrapperStretched);
  }
  /**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */
  set dropTarget(e) {
    this.holder.classList.toggle(_.CSS.dropTarget, e);
  }
  /**
   * Returns Plugins content
   *
   * @returns {HTMLElement}
   */
  get pluginsContent() {
    return this.toolRenderedElement;
  }
  /**
   * Calls Tool's method
   *
   * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
   *
   * @param {string} methodName - method to call
   * @param {object} params - method argument
   */
  call(e, t) {
    if (I(this.toolInstance[e])) {
      e === "appendCallback" && C(
        "`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead",
        "warn"
      );
      try {
        this.toolInstance[e].call(this.toolInstance, t);
      } catch (o) {
        C(`Error during '${e}' call: ${o.message}`, "error");
      }
    }
  }
  /**
   * Call plugins merge method
   *
   * @param {BlockToolData} data - data to merge
   */
  async mergeWith(e) {
    await this.toolInstance.merge(e);
  }
  /**
   * Extracts data from Block
   * Groups Tool's save processing time
   *
   * @returns {object}
   */
  async save() {
    const e = await this.toolInstance.save(
      this.pluginsContent
    ), t = this.unavailableTunesData;
    [
      ...this.tunesInstances.entries(),
      ...this.defaultTunesInstances.entries()
    ].forEach(([s, n]) => {
      if (I(n.save))
        try {
          t[s] = n.save();
        } catch (a) {
          C(
            `Tune ${n.constructor.name} save method throws an Error %o`,
            "warn",
            a
          );
        }
    });
    const o = window.performance.now();
    let i;
    return Promise.resolve(e).then((s) => (i = window.performance.now(), {
      id: this.id,
      tool: this.name,
      data: s,
      tunes: t,
      time: i - o
    })).catch((s) => {
      C(
        `Saving process for ${this.name} tool failed due to the ${s}`,
        "log",
        "red"
      );
    });
  }
  /**
   * Uses Tool's validation method to check the correctness of output data
   * Tool's validation method is optional
   *
   * @description Method returns true|false whether data passed the validation or not
   * @param {BlockToolData} data - data to validate
   * @returns {Promise<boolean>} valid
   */
  async validate(e) {
    let t = !0;
    return this.toolInstance.validate instanceof Function && (t = await this.toolInstance.validate(e)), t;
  }
  /**
   * Returns data to render in tunes menu.
   * Splits block tunes settings into 2 groups: popover items and custom html.
   */
  getTunes() {
    const e = document.createElement("div"), t = [], o = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [], i = [
      ...this.tunesInstances.values(),
      ...this.defaultTunesInstances.values()
    ].map((s) => s.render());
    return [o, i].flat().forEach((s) => {
      d.isElement(s) ? e.appendChild(s) : Array.isArray(s) ? t.push(...s) : t.push(s);
    }), [t, e];
  }
  /**
   * Update current input index with selection anchor node
   */
  updateCurrentInput() {
    this.currentInput = d.isNativeInput(document.activeElement) || !b.anchorNode ? document.activeElement : b.anchorNode;
  }
  /**
   * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
   * Can be useful for block changes invisible for editor core.
   */
  dispatchChange() {
    this.didMutated();
  }
  /**
   * Call Tool instance destroy method
   */
  destroy() {
    this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), I(this.toolInstance.destroy) && this.toolInstance.destroy();
  }
  /**
   * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
   * This method returns the entry that is related to the Block (depended on the Block data)
   */
  async getActiveToolboxEntry() {
    const e = this.tool.toolbox;
    if (e.length === 1)
      return Promise.resolve(this.tool.toolbox[0]);
    const t = await this.data;
    return e.find((i) => Object.entries(i.data).some(([s, n]) => t[s] && Kt(t[s], n)));
  }
  /**
   * Make default Block wrappers and put Tool`s content there
   *
   * @returns {HTMLDivElement}
   */
  compose() {
    const e = d.make("div", _.CSS.wrapper), t = d.make("div", _.CSS.content), o = this.toolInstance.render();
    this.toolRenderedElement = o, t.appendChild(this.toolRenderedElement);
    let i = t;
    return [
      ...this.tunesInstances.values(),
      ...this.defaultTunesInstances.values()
    ].forEach((s) => {
      if (I(s.wrap))
        try {
          i = s.wrap(i);
        } catch (n) {
          C(
            `Tune ${s.constructor.name} wrap method throws an Error %o`,
            "warn",
            n
          );
        }
    }), e.appendChild(i), e;
  }
  /**
   * Instantiate Block Tunes
   *
   * @param tunesData - current Block tunes data
   * @private
   */
  composeTunes(e) {
    Array.from(this.tunes.values()).forEach((t) => {
      (t.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(
        t.name,
        t.create(e[t.name], this.blockAPI)
      );
    }), Object.entries(e).forEach(([t, o]) => {
      this.tunesInstances.has(t) || (this.unavailableTunesData[t] = o);
    });
  }
  /**
   * Adds focus event listeners to all inputs and contenteditable
   */
  addInputEvents() {
    this.inputs.forEach((e) => {
      e.addEventListener("focus", this.handleFocus), d.isNativeInput(e) && e.addEventListener("input", this.didMutated);
    });
  }
  /**
   * removes focus event listeners from all inputs and contenteditable
   */
  removeInputEvents() {
    this.inputs.forEach((e) => {
      e.removeEventListener("focus", this.handleFocus), d.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
    });
  }
  /**
   * Listen common editor Dom Changed event and detect mutations related to the  Block
   */
  watchBlockMutations() {
    var e;
    this.redactorDomChangedCallback = (t) => {
      const { mutations: o } = t;
      o.some(
        (s) => qt(s, this.toolRenderedElement)
      ) && this.didMutated(o);
    }, (e = this.editorEventBus) == null || e.on(
      Me,
      this.redactorDomChangedCallback
    );
  }
  /**
   * Remove redactor dom change event listener
   */
  unwatchBlockMutations() {
    var e;
    (e = this.editorEventBus) == null || e.off(
      Me,
      this.redactorDomChangedCallback
    );
  }
  /**
   * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
   * We need to detect such changes and update a link to tools main element with the new one
   *
   * @param mutations - records of block content mutations
   */
  detectToolRootChange(e) {
    e.forEach((t) => {
      if (Array.from(t.removedNodes).includes(
        this.toolRenderedElement
      )) {
        const i = t.addedNodes[t.addedNodes.length - 1];
        this.toolRenderedElement = i;
      }
    });
  }
  /**
   * Clears inputs cached value
   */
  dropInputsCache() {
    this.cachedInputs = [];
  }
}
class Jt extends y {
  constructor() {
    super(...arguments), this.insert = (e = this.config.defaultBlock, t = {}, o = {}, i, s, n, a) => {
      const l = this.Editor.BlockManager.insert({
        id: a,
        tool: e,
        data: t,
        index: i,
        needToFocus: s,
        replace: n
      });
      return new he(l);
    }, this.composeBlockData = async (e) => {
      const t = this.Editor.Tools.blockTools.get(e);
      return new _({
        tool: t,
        api: this.Editor.API,
        readOnly: !0,
        data: {},
        tunesData: {}
      }).data;
    }, this.update = (e, t, o) => {
      const { BlockManager: i } = this.Editor, s = i.getBlockById(e);
      if (!s) {
        C("blocks.update(): Block with passed id was not found", "warn");
        return;
      }
      const n = i.getBlockIndex(s);
      i.insert({
        id: s.id,
        tool: s.name,
        data: t,
        index: n,
        replace: !0,
        tunes: s.tunes,
        reSelectedAfterUpdate: (o == null ? void 0 : o.reSelectedAfterUpdate) || !1
      });
    };
  }
  /**
   * Available methods
   *
   * @returns {Blocks}
   */
  get methods() {
    return {
      clear: () => this.clear(),
      render: (e) => this.render(e),
      renderFromHTML: (e) => this.renderFromHTML(e),
      delete: (e) => this.delete(e),
      swap: (e, t) => this.swap(e, t),
      move: (e, t) => this.move(e, t),
      getBlockByIndex: (e) => this.getBlockByIndex(e),
      getBlockSelected: () => this.getBlockSelected(),
      getEditor: () => this.getEditor(),
      getById: (e) => this.getById(e),
      getCurrentBlockIndex: () => this.getCurrentBlockIndex(),
      getBlockIndex: (e) => this.getBlockIndex(e),
      getBlocksCount: () => this.getBlocksCount(),
      stretchBlock: (e, t = !0) => this.stretchBlock(e, t),
      insertNewBlock: () => this.insertNewBlock(),
      insert: this.insert,
      update: this.update,
      composeBlockData: this.composeBlockData
    };
  }
  /**
   * Returns Blocks count
   *
   * @returns {number}
   */
  getBlocksCount() {
    return this.Editor.BlockManager.blocks.length;
  }
  /**
   * Returns current block index
   *
   * @returns {number}
   */
  getCurrentBlockIndex() {
    return this.Editor.BlockManager.currentBlockIndex;
  }
  /**
   * Returns the index of Block by id;
   *
   * @param id - block id
   */
  getBlockIndex(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    if (!t) {
      $("There is no block with id `" + e + "`", "warn");
      return;
    }
    return this.Editor.BlockManager.getBlockIndex(t);
  }
  /**
   * Returns BlockAPI object by Block index
   *
   * @param {number} index - index to get
   */
  getBlockByIndex(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(e);
    if (t === void 0) {
      $("There is no block at index `" + e + "`", "warn");
      return;
    }
    return new he(t);
  }
  /**
   * Start custom by c98
   */
  getBlockSelected() {
    return this.Editor.BlockSelection.selectedBlocks;
  }
  getEditor() {
    return this.Editor;
  }
  /**
   * End custom by c98
   */
  /**
   * Returns BlockAPI object by Block id
   *
   * @param id - id of block to get
   */
  getById(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    return t === void 0 ? ($("There is no block with id `" + e + "`", "warn"), null) : new he(t);
  }
  /**
   * Call Block Manager method that swap Blocks
   *
   * @param {number} fromIndex - position of first Block
   * @param {number} toIndex - position of second Block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    C(
      "`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead",
      "info"
    ), this.Editor.BlockManager.swap(e, t);
  }
  /**
   * Move block from one index to another
   *
   * @param {number} toIndex - index to move to
   * @param {number} fromIndex - index to move from
   */
  move(e, t) {
    this.Editor.BlockManager.move(e, t);
  }
  /**
   * Deletes Block
   *
   * @param {number} blockIndex - index of Block to delete
   */
  delete(e) {
    try {
      this.Editor.BlockManager.removeBlock(e);
    } catch (t) {
      $(t, "warn");
      return;
    }
    this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(
      // this.Editor.BlockManager.getBlockById(cursorToBlock.id),
      this.Editor.BlockManager.currentBlock,
      this.Editor.Caret.positions.END
    ), this.Editor.Toolbar.close();
  }
  /**
   * Clear Editor's area
   */
  clear() {
    this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
  }
  /**
   * Fills Editor with Blocks data
   *
   * @param {OutputData} data — Saved Editor data
   */
  render(e) {
    return this.Editor.BlockManager.clear(), this.Editor.Renderer.render(e.blocks);
  }
  /**
   * Render passed HTML string
   *
   * @param {string} data - HTML string to render
   * @returns {Promise<void>}
   */
  renderFromHTML(e) {
    return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, !0);
  }
  /**
   * Stretch Block's content
   *
   * @param {number} index - index of Block to stretch
   * @param {boolean} status - true to enable, false to disable
   * @deprecated Use BlockAPI interface to stretch Blocks
   */
  stretchBlock(e, t = !0) {
    Ie(!0, "blocks.stretchBlock()", "BlockAPI");
    const o = this.Editor.BlockManager.getBlockByIndex(e);
    o && (o.stretched = t);
  }
  /**
   * Insert new Block
   * After set caret to this Block
   *
   * @todo remove in 3.0.0
   * @deprecated with insert() method
   */
  insertNewBlock() {
    C(
      "Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.",
      "warn"
    ), this.insert();
  }
}
class Qt extends y {
  constructor() {
    super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t), !0) : !1, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t), !0) : !1, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t), !0) : !1, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t), !0) : !1, this.setToBlock = (e, t = this.Editor.Caret.positions.DEFAULT, o = 0) => this.Editor.BlockManager.blocks[e] ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.blocks[e], t, o), !0) : !1, this.focus = (e = !1) => e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
  }
  /**
   * Available methods
   *
   * @returns {Caret}
   */
  get methods() {
    return {
      setToFirstBlock: this.setToFirstBlock,
      setToLastBlock: this.setToLastBlock,
      setToPreviousBlock: this.setToPreviousBlock,
      setToNextBlock: this.setToNextBlock,
      setToBlock: this.setToBlock,
      focus: this.focus
    };
  }
}
class eo extends y {
  /**
   * Available methods
   *
   * @returns {Events}
   */
  get methods() {
    return {
      emit: (e, t) => this.emit(e, t),
      off: (e, t) => this.off(e, t),
      on: (e, t) => this.on(e, t)
    };
  }
  /**
   * Subscribe on Events
   *
   * @param {string} eventName - event name to subscribe
   * @param {Function} callback - event handler
   */
  on(e, t) {
    this.eventsDispatcher.on(e, t);
  }
  /**
   * Emit event with data
   *
   * @param {string} eventName - event to emit
   * @param {object} data - event's data
   */
  emit(e, t) {
    this.eventsDispatcher.emit(e, t);
  }
  /**
   * Unsubscribe from Event
   *
   * @param {string} eventName - event to unsubscribe
   * @param {Function} callback - event handler
   */
  off(e, t) {
    this.eventsDispatcher.off(e, t);
  }
}
class Ae extends y {
  /**
   * Return namespace section for tool or block tune
   *
   * @param tool - tool object
   */
  static getNamespace(e) {
    return e.isTune() ? `blockTunes.${e.name}` : `tools.${e.name}`;
  }
  /**
   * Return I18n API methods with global dictionary access
   */
  get methods() {
    return {
      t: () => {
        $("I18n.t() method can be accessed only from Tools", "warn");
      }
    };
  }
  /**
   * Return I18n API methods with tool namespaced dictionary
   *
   * @param tool - Tool object
   */
  getMethodsForTool(e) {
    return Object.assign(
      this.methods,
      {
        t: (t) => U.t(Ae.getNamespace(e), t)
      }
    );
  }
}
class to extends y {
  /**
   * Editor.js Core API modules
   */
  get methods() {
    return {
      blocks: this.Editor.BlocksAPI.methods,
      caret: this.Editor.CaretAPI.methods,
      events: this.Editor.EventsAPI.methods,
      listeners: this.Editor.ListenersAPI.methods,
      notifier: this.Editor.NotifierAPI.methods,
      sanitizer: this.Editor.SanitizerAPI.methods,
      saver: this.Editor.SaverAPI.methods,
      selection: this.Editor.SelectionAPI.methods,
      styles: this.Editor.StylesAPI.classes,
      toolbar: this.Editor.ToolbarAPI.methods,
      inlineToolbar: this.Editor.InlineToolbarAPI.methods,
      tooltip: this.Editor.TooltipAPI.methods,
      i18n: this.Editor.I18nAPI.methods,
      readOnly: this.Editor.ReadOnlyAPI.methods,
      ui: this.Editor.UiAPI.methods
    };
  }
  /**
   * Returns Editor.js Core API methods for passed tool
   *
   * @param tool - tool object
   */
  getMethodsForTool(e) {
    return Object.assign(
      this.methods,
      {
        i18n: this.Editor.I18nAPI.getMethodsForTool(e)
      }
    );
  }
}
class oo extends y {
  /**
   * Available methods
   *
   * @returns {InlineToolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open()
    };
  }
  /**
   * Open Inline Toolbar
   */
  open() {
    this.Editor.InlineToolbar.tryToShow();
  }
  /**
   * Close Inline Toolbar
   */
  close() {
    this.Editor.InlineToolbar.close();
  }
}
class io extends y {
  /**
   * Available methods
   *
   * @returns {Listeners}
   */
  get methods() {
    return {
      on: (e, t, o, i) => this.on(e, t, o, i),
      off: (e, t, o, i) => this.off(e, t, o, i),
      offById: (e) => this.offById(e)
    };
  }
  /**
   * Ads a DOM event listener. Return it's id.
   *
   * @param {HTMLElement} element - Element to set handler to
   * @param {string} eventType - event type
   * @param {() => void} handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  on(e, t, o, i) {
    return this.listeners.on(e, t, o, i);
  }
  /**
   * Removes DOM listener from element
   *
   * @param {Element} element - Element to remove handler from
   * @param eventType - event type
   * @param handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  off(e, t, o, i) {
    this.listeners.off(e, t, o, i);
  }
  /**
   * Removes DOM listener by the listener id
   *
   * @param id - id of the listener to remove
   */
  offById(e) {
    this.listeners.offById(e);
  }
}
var at = { exports: {} };
(function(r, e) {
  (function(t, o) {
    r.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(s) {
        if (o[s])
          return o[s].exports;
        var n = o[s] = { i: s, l: !1, exports: {} };
        return t[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
      }
      return i.m = t, i.c = o, i.d = function(s, n, a) {
        i.o(s, n) || Object.defineProperty(s, n, { enumerable: !0, get: a });
      }, i.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, i.t = function(s, n) {
        if (1 & n && (s = i(s)), 8 & n || 4 & n && typeof s == "object" && s && s.__esModule)
          return s;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: s }), 2 & n && typeof s != "string")
          for (var l in s)
            i.d(a, l, (function(c) {
              return s[c];
            }).bind(null, l));
        return a;
      }, i.n = function(s) {
        var n = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return i.d(n, "a", n), n;
      }, i.o = function(s, n) {
        return Object.prototype.hasOwnProperty.call(s, n);
      }, i.p = "/", i(i.s = 0);
    }([function(t, o, i) {
      i(1), /*!
       * Codex JavaScript Notification module
       * https://github.com/codex-team/js-notifier
       */
      t.exports = function() {
        var s = i(6), n = "cdx-notify--bounce-in", a = null;
        return { show: function(l) {
          if (l.message) {
            (function() {
              if (a)
                return !0;
              a = s.getWrapper(), document.body.appendChild(a);
            })();
            var c = null, u = l.time || 8e3;
            switch (l.type) {
              case "confirm":
                c = s.confirm(l);
                break;
              case "prompt":
                c = s.prompt(l);
                break;
              default:
                c = s.alert(l), window.setTimeout(function() {
                  c.remove();
                }, u);
            }
            a.appendChild(c), c.classList.add(n);
          }
        } };
      }();
    }, function(t, o, i) {
      var s = i(2);
      typeof s == "string" && (s = [[t.i, s, ""]]);
      var n = { hmr: !0, transform: void 0, insertInto: void 0 };
      i(4)(s, n), s.locals && (t.exports = s.locals);
    }, function(t, o, i) {
      (t.exports = i(3)(!1)).push([t.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
    }, function(t, o) {
      t.exports = function(i) {
        var s = [];
        return s.toString = function() {
          return this.map(function(n) {
            var a = function(l, c) {
              var u = l[1] || "", h = l[3];
              if (!h)
                return u;
              if (c && typeof btoa == "function") {
                var f = (p = h, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(p)))) + " */"), k = h.sources.map(function(g) {
                  return "/*# sourceURL=" + h.sourceRoot + g + " */";
                });
                return [u].concat(k).concat([f]).join(`
`);
              }
              var p;
              return [u].join(`
`);
            }(n, i);
            return n[2] ? "@media " + n[2] + "{" + a + "}" : a;
          }).join("");
        }, s.i = function(n, a) {
          typeof n == "string" && (n = [[null, n, ""]]);
          for (var l = {}, c = 0; c < this.length; c++) {
            var u = this[c][0];
            typeof u == "number" && (l[u] = !0);
          }
          for (c = 0; c < n.length; c++) {
            var h = n[c];
            typeof h[0] == "number" && l[h[0]] || (a && !h[2] ? h[2] = a : a && (h[2] = "(" + h[2] + ") and (" + a + ")"), s.push(h));
          }
        }, s;
      };
    }, function(t, o, i) {
      var s, n, a = {}, l = (s = function() {
        return window && document && document.all && !window.atob;
      }, function() {
        return n === void 0 && (n = s.apply(this, arguments)), n;
      }), c = function(x) {
        var m = {};
        return function(w) {
          if (typeof w == "function")
            return w();
          if (m[w] === void 0) {
            var B = (function(S) {
              return document.querySelector(S);
            }).call(this, w);
            if (window.HTMLIFrameElement && B instanceof window.HTMLIFrameElement)
              try {
                B = B.contentDocument.head;
              } catch {
                B = null;
              }
            m[w] = B;
          }
          return m[w];
        };
      }(), u = null, h = 0, f = [], k = i(5);
      function p(x, m) {
        for (var w = 0; w < x.length; w++) {
          var B = x[w], S = a[B.id];
          if (S) {
            S.refs++;
            for (var T = 0; T < S.parts.length; T++)
              S.parts[T](B.parts[T]);
            for (; T < B.parts.length; T++)
              S.parts.push(F(B.parts[T], m));
          } else {
            var R = [];
            for (T = 0; T < B.parts.length; T++)
              R.push(F(B.parts[T], m));
            a[B.id] = { id: B.id, refs: 1, parts: R };
          }
        }
      }
      function g(x, m) {
        for (var w = [], B = {}, S = 0; S < x.length; S++) {
          var T = x[S], R = m.base ? T[0] + m.base : T[0], E = { css: T[1], media: T[2], sourceMap: T[3] };
          B[R] ? B[R].parts.push(E) : w.push(B[R] = { id: R, parts: [E] });
        }
        return w;
      }
      function M(x, m) {
        var w = c(x.insertInto);
        if (!w)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var B = f[f.length - 1];
        if (x.insertAt === "top")
          B ? B.nextSibling ? w.insertBefore(m, B.nextSibling) : w.appendChild(m) : w.insertBefore(m, w.firstChild), f.push(m);
        else if (x.insertAt === "bottom")
          w.appendChild(m);
        else {
          if (typeof x.insertAt != "object" || !x.insertAt.before)
            throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
          var S = c(x.insertInto + " " + x.insertAt.before);
          w.insertBefore(m, S);
        }
      }
      function A(x) {
        if (x.parentNode === null)
          return !1;
        x.parentNode.removeChild(x);
        var m = f.indexOf(x);
        m >= 0 && f.splice(m, 1);
      }
      function L(x) {
        var m = document.createElement("style");
        return x.attrs.type === void 0 && (x.attrs.type = "text/css"), V(m, x.attrs), M(x, m), m;
      }
      function V(x, m) {
        Object.keys(m).forEach(function(w) {
          x.setAttribute(w, m[w]);
        });
      }
      function F(x, m) {
        var w, B, S, T;
        if (m.transform && x.css) {
          if (!(T = m.transform(x.css)))
            return function() {
            };
          x.css = T;
        }
        if (m.singleton) {
          var R = h++;
          w = u || (u = L(m)), B = re.bind(null, w, R, !1), S = re.bind(null, w, R, !0);
        } else
          x.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (w = function(E) {
            var z = document.createElement("link");
            return E.attrs.type === void 0 && (E.attrs.type = "text/css"), E.attrs.rel = "stylesheet", V(z, E.attrs), M(E, z), z;
          }(m), B = (function(E, z, ae) {
            var J = ae.css, Be = ae.sourceMap, At = z.convertToAbsoluteUrls === void 0 && Be;
            (z.convertToAbsoluteUrls || At) && (J = k(J)), Be && (J += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(Be)))) + " */");
            var Ot = new Blob([J], { type: "text/css" }), je = E.href;
            E.href = URL.createObjectURL(Ot), je && URL.revokeObjectURL(je);
          }).bind(null, w, m), S = function() {
            A(w), w.href && URL.revokeObjectURL(w.href);
          }) : (w = L(m), B = (function(E, z) {
            var ae = z.css, J = z.media;
            if (J && E.setAttribute("media", J), E.styleSheet)
              E.styleSheet.cssText = ae;
            else {
              for (; E.firstChild; )
                E.removeChild(E.firstChild);
              E.appendChild(document.createTextNode(ae));
            }
          }).bind(null, w), S = function() {
            A(w);
          });
        return B(x), function(E) {
          if (E) {
            if (E.css === x.css && E.media === x.media && E.sourceMap === x.sourceMap)
              return;
            B(x = E);
          } else
            S();
        };
      }
      t.exports = function(x, m) {
        if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
          throw new Error("The style-loader cannot be used in a non-browser environment");
        (m = m || {}).attrs = typeof m.attrs == "object" ? m.attrs : {}, m.singleton || typeof m.singleton == "boolean" || (m.singleton = l()), m.insertInto || (m.insertInto = "head"), m.insertAt || (m.insertAt = "bottom");
        var w = g(x, m);
        return p(w, m), function(B) {
          for (var S = [], T = 0; T < w.length; T++) {
            var R = w[T];
            (E = a[R.id]).refs--, S.push(E);
          }
          for (B && p(g(B, m), m), T = 0; T < S.length; T++) {
            var E;
            if ((E = S[T]).refs === 0) {
              for (var z = 0; z < E.parts.length; z++)
                E.parts[z]();
              delete a[E.id];
            }
          }
        };
      };
      var H, q = (H = [], function(x, m) {
        return H[x] = m, H.filter(Boolean).join(`
`);
      });
      function re(x, m, w, B) {
        var S = w ? "" : B.css;
        if (x.styleSheet)
          x.styleSheet.cssText = q(m, S);
        else {
          var T = document.createTextNode(S), R = x.childNodes;
          R[m] && x.removeChild(R[m]), R.length ? x.insertBefore(T, R[m]) : x.appendChild(T);
        }
      }
    }, function(t, o) {
      t.exports = function(i) {
        var s = typeof window < "u" && window.location;
        if (!s)
          throw new Error("fixUrls requires window.location");
        if (!i || typeof i != "string")
          return i;
        var n = s.protocol + "//" + s.host, a = n + s.pathname.replace(/\/[^\/]*$/, "/");
        return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(l, c) {
          var u, h = c.trim().replace(/^"(.*)"$/, function(f, k) {
            return k;
          }).replace(/^'(.*)'$/, function(f, k) {
            return k;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h) ? l : (u = h.indexOf("//") === 0 ? h : h.indexOf("/") === 0 ? n + h : a + h.replace(/^\.\//, ""), "url(" + JSON.stringify(u) + ")");
        });
      };
    }, function(t, o, i) {
      var s, n, a, l, c, u, h, f, k;
      t.exports = (s = "cdx-notifies", n = "cdx-notify", a = "cdx-notify__cross", l = "cdx-notify__button--confirm", c = "cdx-notify__button--cancel", u = "cdx-notify__input", h = "cdx-notify__button", f = "cdx-notify__btns-wrapper", { alert: k = function(p) {
        var g = document.createElement("DIV"), M = document.createElement("DIV"), A = p.message, L = p.style;
        return g.classList.add(n), L && g.classList.add(n + "--" + L), g.innerHTML = A, M.classList.add(a), M.addEventListener("click", g.remove.bind(g)), g.appendChild(M), g;
      }, confirm: function(p) {
        var g = k(p), M = document.createElement("div"), A = document.createElement("button"), L = document.createElement("button"), V = g.querySelector("." + a), F = p.cancelHandler, H = p.okHandler;
        return M.classList.add(f), A.innerHTML = p.okText || "Confirm", L.innerHTML = p.cancelText || "Cancel", A.classList.add(h), L.classList.add(h), A.classList.add(l), L.classList.add(c), F && typeof F == "function" && (L.addEventListener("click", F), V.addEventListener("click", F)), H && typeof H == "function" && A.addEventListener("click", H), A.addEventListener("click", g.remove.bind(g)), L.addEventListener("click", g.remove.bind(g)), M.appendChild(A), M.appendChild(L), g.appendChild(M), g;
      }, prompt: function(p) {
        var g = k(p), M = document.createElement("div"), A = document.createElement("button"), L = document.createElement("input"), V = g.querySelector("." + a), F = p.cancelHandler, H = p.okHandler;
        return M.classList.add(f), A.innerHTML = p.okText || "Ok", A.classList.add(h), A.classList.add(l), L.classList.add(u), p.placeholder && L.setAttribute("placeholder", p.placeholder), p.default && (L.value = p.default), p.inputType && (L.type = p.inputType), F && typeof F == "function" && V.addEventListener("click", F), H && typeof H == "function" && A.addEventListener("click", function() {
          H(L.value);
        }), A.addEventListener("click", g.remove.bind(g)), M.appendChild(L), M.appendChild(A), g.appendChild(M), g;
      }, getWrapper: function() {
        var p = document.createElement("DIV");
        return p.classList.add(s), p;
      } });
    }]);
  });
})(at);
var so = at.exports;
const no = /* @__PURE__ */ ve(so);
class ro {
  /**
   * Show web notification
   *
   * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
   */
  show(e) {
    no.show(e);
  }
}
class ao extends y {
  /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.notifier = new ro();
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e) => this.show(e)
    };
  }
  /**
   * Show notification
   *
   * @param {NotifierOptions} options - message option
   */
  show(e) {
    return this.notifier.show(e);
  }
}
class lo extends y {
  /**
   * Available methods
   */
  get methods() {
    const e = () => this.isEnabled;
    return {
      toggle: (t) => this.toggle(t),
      get isEnabled() {
        return e();
      }
    };
  }
  /**
   * Set or toggle read-only state
   *
   * @param {boolean|undefined} state - set or toggle state
   * @returns {boolean} current value
   */
  toggle(e) {
    return this.Editor.ReadOnly.toggle(e);
  }
  /**
   * Returns current read-only state
   */
  get isEnabled() {
    return this.Editor.ReadOnly.isEnabled;
  }
}
var lt = { exports: {} };
(function(r, e) {
  (function(t, o) {
    r.exports = o();
  })(_t, function() {
    function t(h) {
      var f = h.tags, k = Object.keys(f), p = k.map(function(g) {
        return typeof f[g];
      }).every(function(g) {
        return g === "object" || g === "boolean" || g === "function";
      });
      if (!p)
        throw new Error("The configuration was invalid");
      this.config = h;
    }
    var o = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
    function i(h) {
      return o.indexOf(h.nodeName) !== -1;
    }
    var s = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
    function n(h) {
      return s.indexOf(h.nodeName) !== -1;
    }
    t.prototype.clean = function(h) {
      const f = document.implementation.createHTMLDocument(), k = f.createElement("div");
      return k.innerHTML = h, this._sanitize(f, k), k.innerHTML;
    }, t.prototype._sanitize = function(h, f) {
      var k = a(h, f), p = k.firstChild();
      if (p)
        do {
          if (p.nodeType === Node.TEXT_NODE)
            if (p.data.trim() === "" && (p.previousElementSibling && i(p.previousElementSibling) || p.nextElementSibling && i(p.nextElementSibling))) {
              f.removeChild(p), this._sanitize(h, f);
              break;
            } else
              continue;
          if (p.nodeType === Node.COMMENT_NODE) {
            f.removeChild(p), this._sanitize(h, f);
            break;
          }
          var g = n(p), M;
          g && (M = Array.prototype.some.call(p.childNodes, i));
          var A = !!f.parentNode, L = i(f) && i(p) && A, V = p.nodeName.toLowerCase(), F = l(this.config, V, p), H = g && M;
          if (H || c(p, F) || !this.config.keepNestedBlockElements && L) {
            if (!(p.nodeName === "SCRIPT" || p.nodeName === "STYLE"))
              for (; p.childNodes.length > 0; )
                f.insertBefore(p.childNodes[0], p);
            f.removeChild(p), this._sanitize(h, f);
            break;
          }
          for (var q = 0; q < p.attributes.length; q += 1) {
            var re = p.attributes[q];
            u(re, F, p) && (p.removeAttribute(re.name), q = q - 1);
          }
          this._sanitize(h, p);
        } while (p = k.nextSibling());
    };
    function a(h, f) {
      return h.createTreeWalker(
        f,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
        null,
        !1
      );
    }
    function l(h, f, k) {
      return typeof h.tags[f] == "function" ? h.tags[f](k) : h.tags[f];
    }
    function c(h, f) {
      return typeof f > "u" ? !0 : typeof f == "boolean" ? !f : !1;
    }
    function u(h, f, k) {
      var p = h.name.toLowerCase();
      return f === !0 ? !1 : typeof f[p] == "function" ? !f[p](h.value, k) : typeof f[p] > "u" || f[p] === !1 ? !0 : typeof f[p] == "string" ? f[p] !== h.value : !1;
    }
    return t;
  });
})(lt);
var co = lt.exports;
const ho = /* @__PURE__ */ ve(co);
function ct(r, e) {
  return r.map((t) => {
    const o = I(e) ? e(t.tool) : e;
    return Y(o) || (t.data = Oe(t.data, o)), t;
  });
}
function K(r, e = {}) {
  const t = {
    tags: e
  };
  return new ho(t).clean(r);
}
function Oe(r, e) {
  return Array.isArray(r) ? uo(r, e) : D(r) ? po(r, e) : G(r) ? fo(r, e) : r;
}
function uo(r, e) {
  return r.map((t) => Oe(t, e));
}
function po(r, e) {
  const t = {};
  for (const o in r) {
    if (!Object.prototype.hasOwnProperty.call(r, o))
      continue;
    const i = r[o], s = go(e[o]) ? e[o] : e;
    t[o] = Oe(i, s);
  }
  return t;
}
function fo(r, e) {
  return D(e) ? K(r, e) : e === !1 ? K(r, {}) : r;
}
function go(r) {
  return D(r) || Pt(r) || I(r);
}
class bo extends y {
  /**
   * Available methods
   *
   * @returns {SanitizerConfig}
   */
  get methods() {
    return {
      clean: (e, t) => this.clean(e, t)
    };
  }
  /**
   * Perform sanitizing of a string
   *
   * @param {string} taintString - what to sanitize
   * @param {SanitizerConfig} config - sanitizer config
   * @returns {string}
   */
  clean(e, t) {
    return K(e, t);
  }
}
class mo extends y {
  /**
   * Available methods
   *
   * @returns {Saver}
   */
  get methods() {
    return {
      save: () => this.save()
    };
  }
  /**
   * Return Editor's data
   *
   * @returns {OutputData}
   */
  save() {
    const e = "Editor's content can not be saved in read-only mode";
    return this.Editor.ReadOnly.isEnabled ? ($(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
  }
}
class ko extends y {
  /**
   * Available methods
   *
   * @returns {SelectionAPIInterface}
   */
  get methods() {
    return {
      findParentTag: (e, t) => this.findParentTag(e, t),
      expandToTag: (e) => this.expandToTag(e)
    };
  }
  /**
   * Looks ahead from selection and find passed tag with class name
   *
   * @param {string} tagName - tag to find
   * @param {string} className - tag's class name
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t) {
    return new b().findParentTag(e, t);
  }
  /**
   * Expand selection to passed tag
   *
   * @param {HTMLElement} node - tag that should contain selection
   */
  expandToTag(e) {
    new b().expandToTag(e);
  }
}
class xo extends y {
  /**
   * Exported classes
   */
  get classes() {
    return {
      /**
       * Base Block styles
       */
      block: "cdx-block",
      /**
       * Inline Tools styles
       */
      inlineToolButton: "ce-inline-tool",
      inlineToolButtonActive: "ce-inline-tool--active",
      /**
       * UI elements
       */
      input: "cdx-input",
      loader: "cdx-loader",
      button: "cdx-button",
      /**
       * Settings styles
       */
      settingsButton: "cdx-settings-button",
      settingsButtonActive: "cdx-settings-button--active"
    };
  }
}
class vo extends y {
  /**
   * Available methods
   *
   * @returns {Toolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open(),
      toggleBlockSettings: (e) => this.toggleBlockSettings(e),
      toggleToolbox: (e) => this.toggleToolbox(e)
    };
  }
  /**
   * Open toolbar
   */
  open() {
    this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * Close toolbar and all included elements
   */
  close() {
    this.Editor.Toolbar.close();
  }
  /**
   * Toggles Block Setting of the current block
   *
   * @param {boolean} openingState —  opening state of Block Setting
   */
  toggleBlockSettings(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      $("Could't toggle the Toolbar because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
  }
  /**
   * Open toolbox
   *
   * @param {boolean} openingState - Opening state of toolbox
   */
  toggleToolbox(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      $("Could't toggle the Toolbox because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
  }
}
var dt = { exports: {} };
/*!
 * CodeX.Tooltips
 * 
 * @version 1.0.5
 * 
 * @licence MIT
 * @author CodeX <https://codex.so>
 * 
 * 
 */
(function(r, e) {
  (function(t, o) {
    r.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(s) {
        if (o[s])
          return o[s].exports;
        var n = o[s] = { i: s, l: !1, exports: {} };
        return t[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
      }
      return i.m = t, i.c = o, i.d = function(s, n, a) {
        i.o(s, n) || Object.defineProperty(s, n, { enumerable: !0, get: a });
      }, i.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, i.t = function(s, n) {
        if (1 & n && (s = i(s)), 8 & n || 4 & n && typeof s == "object" && s && s.__esModule)
          return s;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: s }), 2 & n && typeof s != "string")
          for (var l in s)
            i.d(a, l, (function(c) {
              return s[c];
            }).bind(null, l));
        return a;
      }, i.n = function(s) {
        var n = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return i.d(n, "a", n), n;
      }, i.o = function(s, n) {
        return Object.prototype.hasOwnProperty.call(s, n);
      }, i.p = "", i(i.s = 0);
    }([function(t, o, i) {
      t.exports = i(1);
    }, function(t, o, i) {
      i.r(o), i.d(o, "default", function() {
        return s;
      });
      class s {
        constructor() {
          this.nodes = { wrapper: null, content: null }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
            this.showed && this.hide(!0);
          }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: !0 });
        }
        get CSS() {
          return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
        }
        show(a, l, c) {
          this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
          const u = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, c);
          if (u.hidingDelay && (this.hidingDelay = u.hidingDelay), this.nodes.content.innerHTML = "", typeof l == "string")
            this.nodes.content.appendChild(document.createTextNode(l));
          else {
            if (!(l instanceof Node))
              throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof l + " given.");
            this.nodes.content.appendChild(l);
          }
          switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), u.placement) {
            case "top":
              this.placeTop(a, u);
              break;
            case "left":
              this.placeLeft(a, u);
              break;
            case "right":
              this.placeRight(a, u);
              break;
            case "bottom":
            default:
              this.placeBottom(a, u);
          }
          u && u.delay ? this.showingTimeout = setTimeout(() => {
            this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
          }, u.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
        }
        hide(a = !1) {
          if (this.hidingDelay && !a)
            return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
              this.hide(!0);
            }, this.hidingDelay));
          this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
        }
        onHover(a, l, c) {
          a.addEventListener("mouseenter", () => {
            this.show(a, l, c);
          }), a.addEventListener("mouseleave", () => {
            this.hide();
          });
        }
        destroy() {
          this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
        }
        prepare() {
          this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
        }
        loadStyles() {
          const a = "codex-tooltips-style";
          if (document.getElementById(a))
            return;
          const l = i(2), c = this.make("style", null, { textContent: l.toString(), id: a });
          this.prepend(document.head, c);
        }
        placeBottom(a, l) {
          const c = a.getBoundingClientRect(), u = c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h = c.bottom + window.pageYOffset + this.offsetTop + l.marginTop;
          this.applyPlacement("bottom", u, h);
        }
        placeTop(a, l) {
          const c = a.getBoundingClientRect(), u = c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h = c.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
          this.applyPlacement("top", u, h);
        }
        placeLeft(a, l) {
          const c = a.getBoundingClientRect(), u = c.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - l.marginLeft, h = c.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("left", u, h);
        }
        placeRight(a, l) {
          const c = a.getBoundingClientRect(), u = c.right + this.offsetRight + l.marginRight, h = c.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("right", u, h);
        }
        applyPlacement(a, l, c) {
          this.nodes.wrapper.classList.add(this.CSS.placement[a]), this.nodes.wrapper.style.left = l + "px", this.nodes.wrapper.style.top = c + "px";
        }
        make(a, l = null, c = {}) {
          const u = document.createElement(a);
          Array.isArray(l) ? u.classList.add(...l) : l && u.classList.add(l);
          for (const h in c)
            c.hasOwnProperty(h) && (u[h] = c[h]);
          return u;
        }
        append(a, l) {
          Array.isArray(l) ? l.forEach((c) => a.appendChild(c)) : a.appendChild(l);
        }
        prepend(a, l) {
          Array.isArray(l) ? (l = l.reverse()).forEach((c) => a.prepend(c)) : a.prepend(l);
        }
      }
    }, function(t, o) {
      t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
    }]).default;
  });
})(dt);
var wo = dt.exports;
const yo = /* @__PURE__ */ ve(wo);
class _e {
  constructor() {
    this.lib = new yo();
  }
  /**
   * Release the library
   */
  destroy() {
    this.lib.destroy();
  }
  /**
   * Shows tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - any HTML element in DOM
   * @param content - tooltip's content
   * @param options - showing settings
   */
  show(e, t, o) {
    this.lib.show(e, t, o);
  }
  /**
   * Hides tooltip
   *
   * @param skipHidingDelay — pass true to immediately hide the tooltip
   */
  hide(e = !1) {
    this.lib.hide(e);
  }
  /**
   * Binds 'mouseenter' and 'mouseleave' events that shows/hides the Tooltip
   *
   * @param {HTMLElement} element - any HTML element in DOM
   * @param content - tooltip's content
   * @param options - showing settings
   */
  onHover(e, t, o) {
    this.lib.onHover(e, t, o);
  }
}
class Bo extends y {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.tooltip = new _e();
  }
  /**
   * Destroy Module
   */
  destroy() {
    this.tooltip.destroy();
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e, t, o) => this.show(e, t, o),
      hide: () => this.hide(),
      onHover: (e, t, o) => this.onHover(e, t, o)
    };
  }
  /**
   * Method show tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  show(e, t, o) {
    this.tooltip.show(e, t, o);
  }
  /**
   * Method hides tooltip on HTML page
   */
  hide() {
    this.tooltip.hide();
  }
  /**
   * Decorator for showing Tooltip by mouseenter/mouseleave
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  onHover(e, t, o) {
    this.tooltip.onHover(e, t, o);
  }
}
class Eo extends y {
  /**
   * Available methods / getters
   */
  get methods() {
    return {
      nodes: this.editorNodes
      /**
       * There can be added some UI methods, like toggleThinMode() etc
       */
    };
  }
  /**
   * Exported classes
   */
  get editorNodes() {
    return {
      /**
       * Top-level editor instance wrapper
       */
      wrapper: this.Editor.UI.nodes.wrapper,
      /**
       * Element that holds all the Blocks
       */
      redactor: this.Editor.UI.nodes.redactor
    };
  }
}
function ht(r, e) {
  const t = {};
  return Object.entries(r).forEach(([o, i]) => {
    if (D(i)) {
      const s = e ? `${e}.${o}` : o;
      Object.values(i).every((a) => G(a)) ? t[o] = s : t[o] = ht(i, s);
      return;
    }
    t[o] = i;
  }), t;
}
const W = ht(tt);
function To(r, e) {
  const t = {};
  return Object.keys(r).forEach((o) => {
    const i = e[o];
    i !== void 0 ? t[i] = r[o] : t[o] = r[o];
  }), t;
}
const Co = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>', ut = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', So = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>', Io = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', Mo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', Lo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>', Ke = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', Ao = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>', Oo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', _o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', No = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
class O {
  /**
   * Constructs popover item instance
   *
   * @param params - popover item construction params
   */
  constructor(e) {
    this.nodes = {
      root: null,
      icon: null
    }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
      this.nodes.root.classList.remove(O.CSS.noFocus);
    }, this.removeSpecialHoverBehavior = () => {
      this.nodes.root.classList.remove(O.CSS.noHover);
    }, this.onErrorAnimationEnd = () => {
      this.nodes.icon.classList.remove(O.CSS.wobbleAnimation), this.nodes.icon.removeEventListener(
        "animationend",
        this.onErrorAnimationEnd
      );
    }, this.params = e, this.nodes.root = this.make(e);
  }
  /**
   * True if item is disabled and hence not clickable
   */
  get isDisabled() {
    return this.params.isDisabled;
  }
  /**
   * Exposes popover item toggle parameter
   */
  get toggle() {
    return this.params.toggle;
  }
  /**
   * Item secondaryLabel
   */
  get secondaryLabel() {
    return this.params.secondaryLabel;
  }
  /**
   * Item title
   */
  get title() {
    return this.params.title;
  }
  /**
   * Item title
   */
  get dividerType() {
    return this.params.dividerType;
  }
  /**
   * True if popover should close once item is activated
   */
  get closeOnActivate() {
    return this.params.closeOnActivate;
  }
  /**
   * True if confirmation state is enabled for popover item
   */
  get isConfirmationStateEnabled() {
    return this.confirmationState !== null;
  }
  /**
   * True if item is focused in keyboard navigation process
   */
  get isFocused() {
    return this.nodes.root.classList.contains(O.CSS.focused);
  }
  /**
   * Popover item CSS classes
   */
  static get CSS() {
    return {
      container: "ce-popover-item",
      title: "ce-popover-item__title",
      secondaryTitle: "ce-popover-item__secondary-title",
      icon: "ce-popover-item__icon",
      active: "ce-popover-item--active",
      disabled: "ce-popover-item--disabled",
      focused: "ce-popover-item--focused",
      hidden: "ce-popover-item--hidden",
      confirmationState: "ce-popover-item--confirmation",
      noHover: "ce-popover-item--no-hover",
      noFocus: "ce-popover-item--no-focus",
      wobbleAnimation: "wobble"
    };
  }
  /**
   * Returns popover item root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Called on popover item click
   */
  handleClick() {
    if (this.isConfirmationStateEnabled) {
      this.activateOrEnableConfirmationMode(this.confirmationState);
      return;
    }
    this.activateOrEnableConfirmationMode(this.params);
  }
  /**
   * Toggles item active state
   *
   * @param isActive - true if item should strictly should become active
   */
  toggleActive(e) {
    this.nodes.root.classList.toggle(O.CSS.active, e);
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    this.nodes.root.classList.toggle(O.CSS.hidden, e);
  }
  /**
   * Resets popover item to its original state
   */
  reset() {
    this.isConfirmationStateEnabled && this.disableConfirmationMode();
  }
  /**
   * Method called once item becomes focused during keyboard navigation
   */
  onFocus() {
    this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Constructs HTML element corresponding to popover item params
   *
   * @param params - item construction params
   */
  make(e) {
    const t = d.make("div", O.CSS.container);
    e.name && (t.dataset.itemName = e.name), this.nodes.icon = d.make("div", O.CSS.icon, {
      innerHTML: e.icon || Mo
    }), t.appendChild(this.nodes.icon);
    const o = d.make("div", O.CSS.title, {
      innerHTML: e.title || ""
    });
    return e.description && o.appendChild(
      d.make("div", O.CSS.secondaryTitle, {
        textContent: e.description
      })
    ), t.appendChild(o), e.secondaryLabel && t.appendChild(
      d.make("div", O.CSS.secondaryTitle, {
        textContent: e.secondaryLabel
      })
    ), e.isActive && t.classList.add(O.CSS.active), e.isDisabled && t.classList.add(O.CSS.disabled), t;
  }
  /**
   * Activates confirmation mode for the item.
   *
   * @param newState - new popover item params that should be applied
   */
  enableConfirmationMode(e) {
    const t = {
      ...this.params,
      ...e,
      confirmation: e.confirmation
    }, o = this.make(t);
    this.nodes.root.innerHTML = o.innerHTML, this.nodes.root.classList.add(O.CSS.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
  }
  /**
   * Returns item to its original state
   */
  disableConfirmationMode() {
    const e = this.make(this.params);
    this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(O.CSS.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Enables special focus and hover behavior for item in confirmation state.
   * This is needed to prevent item from being highlighted as hovered/focused just after click.
   */
  enableSpecialHoverAndFocusBehavior() {
    this.nodes.root.classList.add(O.CSS.noHover), this.nodes.root.classList.add(O.CSS.noFocus), this.nodes.root.addEventListener(
      "mouseleave",
      this.removeSpecialHoverBehavior,
      { once: !0 }
    );
  }
  /**
   * Disables special focus and hover behavior
   */
  disableSpecialHoverAndFocusBehavior() {
    this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), this.nodes.root.removeEventListener(
      "mouseleave",
      this.removeSpecialHoverBehavior
    );
  }
  /**
   * Executes item's onActivate callback if the item has no confirmation configured
   *
   * @param item - item to activate or bring to confirmation mode
   */
  activateOrEnableConfirmationMode(e) {
    if (e.confirmation === void 0)
      try {
        e.onActivate(e), this.disableConfirmationMode();
      } catch {
        this.animateError();
      }
    else
      this.enableConfirmationMode(e.confirmation);
  }
  /**
   * Animates item which symbolizes that error occured while executing 'onActivate()' callback
   */
  animateError() {
    this.nodes.icon.classList.contains(O.CSS.wobbleAnimation) || (this.nodes.icon.classList.add(O.CSS.wobbleAnimation), this.nodes.icon.addEventListener("animationend", this.onErrorAnimationEnd));
  }
}
const pt = class ce {
  /**
   * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
   * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
   */
  constructor(e, t) {
    this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = t;
  }
  /**
   * Returns Focused button Node
   *
   * @returns {HTMLElement}
   */
  get currentItem() {
    return this.cursor === -1 ? null : this.items[this.cursor];
  }
  /**
   * Sets cursor to specified position
   *
   * @param cursorPosition - new cursor position
   */
  setCursor(e) {
    e < this.items.length && e >= -1 && (this.dropCursor(), this.cursor = e, this.items[this.cursor].classList.add(this.focusedCssClass));
  }
  /**
   * Sets items. Can be used when iterable items changed dynamically
   *
   * @param {HTMLElement[]} nodeList - nodes to iterate
   */
  setItems(e) {
    this.items = e;
  }
  /**
   * Sets cursor next to the current
   */
  next() {
    this.cursor = this.leafNodesAndReturnIndex(ce.directions.RIGHT);
  }
  /**
   * Sets cursor before current
   */
  previous() {
    this.cursor = this.leafNodesAndReturnIndex(ce.directions.LEFT);
  }
  /**
   * Sets cursor to the default position and removes CSS-class from previously focused item
   */
  dropCursor() {
    this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
  }
  /**
   * Leafs nodes inside the target list from active element
   *
   * @param {string} direction - leaf direction. Can be 'left' or 'right'
   * @returns {number} index of focused node
   */
  leafNodesAndReturnIndex(e) {
    if (this.items.length === 0)
      return this.cursor;
    let t = this.cursor;
    return t === -1 ? t = e === ce.directions.RIGHT ? -1 : 0 : this.items[t].classList.remove(this.focusedCssClass), e === ce.directions.RIGHT ? t = (t + 1) % this.items.length : t = (this.items.length + t - 1) % this.items.length, d.canSetCaret(this.items[t]) && te(() => b.setCursor(this.items[t]), 50)(), this.items[t].classList.add(this.focusedCssClass), t;
  }
};
pt.directions = {
  RIGHT: "right",
  LEFT: "left"
};
let le = pt;
class X {
  /**
   * @param {FlipperOptions} options - different constructing settings
   */
  constructor(e) {
    this.iterator = null, this.activated = !1, this.flipCallbacks = [], this.onKeyDown = (t) => {
      if (this.isEventReadyForHandling(t))
        switch (X.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode) {
          case v.TAB:
            this.handleTabPress(t);
            break;
          case v.LEFT:
          case v.UP:
            this.flipLeft();
            break;
          case v.RIGHT:
          case v.DOWN:
            this.flipRight();
            break;
          case v.ENTER:
            this.handleEnterPress(t);
            break;
        }
    }, this.iterator = new le(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || X.usedKeys;
  }
  /**
   * True if flipper is currently activated
   */
  get isActivated() {
    return this.activated;
  }
  /**
   * Array of keys (codes) that is handled by Flipper
   * Used to:
   *  - preventDefault only for this keys, not all keydowns (@see constructor)
   *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
   */
  static get usedKeys() {
    return [
      v.TAB,
      v.LEFT,
      v.RIGHT,
      v.ENTER,
      v.UP,
      v.DOWN
    ];
  }
  /**
   * Active tab/arrows handling by flipper
   *
   * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
   * @param cursorPosition - index of the item that should be focused once flipper is activated
   */
  activate(e, t) {
    this.activated = !0, e && this.iterator.setItems(e), t !== void 0 && this.iterator.setCursor(t), document.addEventListener("keydown", this.onKeyDown, !0);
  }
  /**
   * Disable tab/arrows handling by flipper
   */
  deactivate() {
    this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
  }
  /**
   * Focus first item
   */
  focusFirst() {
    this.dropCursor(), this.flipRight();
  }
  /**
   * Focuses previous flipper iterator item
   */
  flipLeft() {
    this.iterator.previous(), this.flipCallback();
  }
  /**
   * Focuses next flipper iterator item
   */
  flipRight() {
    this.iterator.next(), this.flipCallback();
  }
  /**
   * Return true if some button is focused
   */
  hasFocus() {
    return !!this.iterator.currentItem;
  }
  /**
   * Registeres function that should be executed on each navigation action
   *
   * @param cb - function to execute
   */
  onFlip(e) {
    this.flipCallbacks.push(e);
  }
  /**
   * Unregisteres function that is executed on each navigation action
   *
   * @param cb - function to stop executing
   */
  removeOnFlip(e) {
    this.flipCallbacks = this.flipCallbacks.filter((t) => t !== e);
  }
  /**
   * Drops flipper's iterator cursor
   *
   * @see DomIterator#dropCursor
   */
  dropCursor() {
    this.iterator.dropCursor();
  }
  /**
   * This function is fired before handling flipper keycodes
   * The result of this function defines if it is need to be handled or not
   *
   * @param {KeyboardEvent} event - keydown keyboard event
   * @returns {boolean}
   */
  isEventReadyForHandling(e) {
    return this.activated && this.allowedKeys.includes(e.keyCode);
  }
  /**
   * When flipper is activated tab press will leaf the items
   *
   * @param {KeyboardEvent} event - tab keydown event
   */
  handleTabPress(e) {
    switch (e.shiftKey ? le.directions.LEFT : le.directions.RIGHT) {
      case le.directions.RIGHT:
        this.flipRight();
        break;
      case le.directions.LEFT:
        this.flipLeft();
        break;
    }
  }
  /**
   * Enter press will click current item if flipper is activated
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  handleEnterPress(e) {
    this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), I(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
  }
  /**
   * Fired after flipping in any direction
   */
  flipCallback() {
    this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e) => e());
  }
}
class ue {
  /**
   * Styles
   */
  static get CSS() {
    return {
      wrapper: "cdx-search-field",
      icon: "cdx-search-field__icon",
      input: "cdx-search-field__input"
    };
  }
  /**
   * @param options - available config
   * @param options.items - searchable items list
   * @param options.onSearch - search callback
   * @param options.placeholder - input placeholder
   */
  constructor({ items: e, onSearch: t, placeholder: o }) {
    this.listeners = new Le(), this.items = e, this.onSearch = t, this.render(o);
  }
  /**
   * Returns search field element
   */
  getElement() {
    return this.wrapper;
  }
  /**
   * Sets focus to the input
   */
  focus() {
    this.input.focus();
  }
  /**
   * Clears search query and results
   */
  clear() {
    this.input.value = "", this.searchQuery = "", this.onSearch("", this.foundItems);
  }
  /**
   * Clears memory
   */
  destroy() {
    this.listeners.removeAll();
  }
  /**
   * Creates the search field
   *
   * @param placeholder - input placeholder
   */
  render(e) {
    this.wrapper = d.make("div", ue.CSS.wrapper);
    const t = d.make("div", ue.CSS.icon, {
      innerHTML: _o
    });
    this.input = d.make("input", ue.CSS.input, {
      placeholder: e
    }), this.wrapper.appendChild(t), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", () => {
      this.searchQuery = this.input.value, this.onSearch(this.searchQuery, this.foundItems);
    });
  }
  /**
   * Returns list of found items for the current search query
   */
  get foundItems() {
    return this.items.filter((e) => this.checkItem(e));
  }
  /**
   * Contains logic for checking whether passed item conforms the search query
   *
   * @param item - item to be checked
   */
  checkItem(e) {
    var i;
    const t = ((i = e.title) == null ? void 0 : i.toLowerCase()) || "", o = this.searchQuery.toLowerCase();
    return t.includes(o);
  }
}
const ft = class de {
  /**
   * Locks body element scroll
   */
  lock() {
    Ye ? this.lockHard() : document.body.classList.add(de.CSS.scrollLocked);
  }
  /**
   * Unlocks body element scroll
   */
  unlock() {
    Ye ? this.unlockHard() : document.body.classList.remove(de.CSS.scrollLocked);
  }
  /**
   * Locks scroll in a hard way (via setting fixed position to body element)
   */
  lockHard() {
    this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty(
      "--window-scroll-offset",
      `${this.scrollPosition}px`
    ), document.body.classList.add(de.CSS.scrollLockedHard);
  }
  /**
   * Unlocks hard scroll lock
   */
  unlockHard() {
    document.body.classList.remove(de.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
  }
};
ft.CSS = {
  scrollLocked: "ce-scroll-locked",
  scrollLockedHard: "ce-scroll-locked--hard"
};
let Ro = ft;
var Do = Object.defineProperty, Po = Object.getOwnPropertyDescriptor, Fo = (r, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? Po(e, t) : e, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (i = (o ? n(e, t, i) : n(i)) || i);
  return o && i && Do(e, t, i), i;
}, fe = /* @__PURE__ */ ((r) => (r.Close = "close", r))(fe || {});
const gt = class N extends we {
  /**
   * Constructs the instance
   *
   * @param params - popover construction params
   */
  constructor(e) {
    super(), this.scopeElement = document.body, this.listeners = new Le(), this.scrollLocker = new Ro(), this.nodes = {
      wrapper: null,
      popover: null,
      nothingFoundMessage: null,
      customContent: null,
      items: null,
      overlay: null
    }, this.messages = {
      nothingFound: "Nothing found",
      search: "Search"
    }, this.onFlip = () => {
      this.items.find((o) => o.isFocused).onFocus();
    }, this.items = e.items.map((t) => new O(t)), e.scopeElement !== void 0 && (this.scopeElement = e.scopeElement), e.messages && (this.messages = {
      ...this.messages,
      ...e.messages
    }), e.customContentFlippableItems && (this.customContentFlippableItems = e.customContentFlippableItems), this.make(), e.customContent && this.addCustomContent(e.customContent), this.initializeFlipper();
  }
  /**
   * Popover CSS classes
   */
  static get CSS() {
    return {
      popover: "ce-popover",
      popoverOpenTop: "ce-popover--open-top",
      popoverOpened: "ce-popover--opened",
      search: "ce-popover__search",
      nothingFoundMessage: "ce-popover__nothing-found-message",
      nothingFoundMessageDisplayed: "ce-popover__nothing-found-message--displayed",
      customContent: "ce-popover__custom-content",
      customContentHidden: "ce-popover__custom-content--hidden",
      items: "ce-popover__items",
      overlay: "ce-popover__overlay",
      overlayHidden: "ce-popover__overlay--hidden",
      titleType: "ce-popover__title-type"
    };
  }
  /**
   * Returns HTML element corresponding to the popover
   */
  getElement() {
    return this.nodes.wrapper;
  }
  /**
   * Returns true if some item inside popover is focused
   */
  hasFocus() {
    return this.flipper.hasFocus();
  }
  /**
   * Open popover
   */
  show() {
    this.shouldOpenBottom || (this.nodes.popover.style.setProperty("--popover-height", this.height + "px"), this.nodes.popover.classList.add(N.CSS.popoverOpenTop)), this.nodes.overlay.classList.remove(N.CSS.overlayHidden), this.nodes.popover.classList.add(N.CSS.popoverOpened), this.flipper.activate(this.flippableElements), this.search !== void 0 && setTimeout(() => {
      this.search.focus();
    }, 100), Q() && this.scrollLocker.lock();
  }
  /**
   * Closes popover
   */
  hide() {
    this.nodes.popover.classList.remove(N.CSS.popoverOpened), this.nodes.popover.classList.remove(N.CSS.popoverOpenTop), this.nodes.overlay.classList.add(N.CSS.overlayHidden), this.flipper.deactivate(), this.items.forEach((e) => e.reset()), this.search !== void 0 && this.search.clear(), Q() && this.scrollLocker.unlock(), this.emit(
      "close"
      /* Close */
    );
  }
  /**
   * Clears memory
   */
  destroy() {
    this.flipper.deactivate(), this.listeners.removeAll(), Q() && this.scrollLocker.unlock();
  }
  /**
   * Constructs HTML element corresponding to popover
   */
  make() {
    this.nodes.popover = d.make("div", [N.CSS.popover]), this.nodes.nothingFoundMessage = d.make("div", [N.CSS.nothingFoundMessage], {
      textContent: this.messages.nothingFound
    }), this.nodes.popover.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = d.make("div", [N.CSS.items]), this.items.forEach((e, t) => {
      if (e.dividerType) {
        const o = d.make("div", [N.CSS.titleType]);
        o.innerHTML = e.dividerType, t !== 0 && o.classList.add("divider"), this.nodes.items.appendChild(o);
      }
      this.nodes.items.appendChild(e.getElement());
    }), this.nodes.popover.appendChild(this.nodes.items), this.listeners.on(this.nodes.popover, "click", (e) => {
      const t = this.getTargetItem(e);
      t !== void 0 && this.handleItemClick(t);
    }), this.nodes.wrapper = d.make("div"), this.nodes.overlay = d.make("div", [N.CSS.overlay, N.CSS.overlayHidden]), this.listeners.on(this.nodes.overlay, "click", () => {
      this.hide();
    }), this.nodes.wrapper.appendChild(this.nodes.overlay), this.nodes.wrapper.appendChild(this.nodes.popover);
  }
  /**
   * Adds search to the popover
   */
  addSearch() {
    this.search = new ue({
      items: this.items,
      placeholder: this.messages.search,
      onSearch: (t, o) => {
        this.items.forEach((s) => {
          const n = !o.includes(s);
          s.toggleHidden(n);
        }), this.toggleNothingFoundMessage(o.length === 0), this.toggleCustomContent(t !== "");
        const i = t === "" ? this.flippableElements : o.map((s) => s.getElement());
        this.flipper.isActivated && (this.flipper.deactivate(), this.flipper.activate(i));
      }
    });
    const e = this.search.getElement();
    e.classList.add(N.CSS.search), this.nodes.popover.insertBefore(e, this.nodes.popover.firstChild);
  }
  /**
   * Adds custom html content to the popover
   *
   * @param content - html content to append
   */
  addCustomContent(e) {
    this.nodes.customContent = e, this.nodes.customContent.classList.add(N.CSS.customContent), this.nodes.popover.insertBefore(e, this.nodes.popover.firstChild);
  }
  /**
   * Retrieves popover item that is the target of the specified event
   *
   * @param event - event to retrieve popover item from
   */
  getTargetItem(e) {
    return this.items.find((t) => e.composedPath().includes(t.getElement()));
  }
  /**
   * Handles item clicks
   *
   * @param item - item to handle click of
   */
  handleItemClick(e) {
    e.isDisabled || (this.items.filter((t) => t !== e).forEach((t) => t.reset()), e.handleClick(), this.toggleItemActivenessIfNeeded(e), e.closeOnActivate && this.hide());
  }
  /**
   * Creates Flipper instance which allows to navigate between popover items via keyboard
   */
  initializeFlipper() {
    this.flipper = new X({
      items: this.flippableElements,
      focusedItemClass: O.CSS.focused,
      allowedKeys: [
        v.TAB,
        v.UP,
        v.DOWN,
        v.ENTER
      ]
    }), this.flipper.onFlip(this.onFlip);
  }
  /**
   * Returns list of elements available for keyboard navigation.
   * Contains both usual popover items elements and custom html content.
   */
  get flippableElements() {
    const e = this.items.map((o) => o.getElement());
    return (this.customContentFlippableItems || []).concat(e);
  }
  get height() {
    let e = 0;
    if (this.nodes.popover === null)
      return e;
    const t = this.nodes.popover.cloneNode(!0);
    return t.style.visibility = "hidden", t.style.position = "absolute", t.style.top = "-1000px", t.classList.add(N.CSS.popoverOpened), document.body.appendChild(t), e = t.offsetHeight, t.remove(), e;
  }
  /**
   * Checks if popover should be opened bottom.
   * It should happen when there is enough space below or not enough space above
   */
  get shouldOpenBottom() {
    const e = this.nodes.popover.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o = this.height, i = e.top + o, s = e.top - o, n = Math.min(window.innerHeight, t.bottom);
    return s < t.top || i <= n;
  }
  /**
   * Toggles nothing found message visibility
   *
   * @param isDisplayed - true if the message should be displayed
   */
  toggleNothingFoundMessage(e) {
    this.nodes.nothingFoundMessage.classList.toggle(N.CSS.nothingFoundMessageDisplayed, e);
  }
  /**
   * Toggles custom content visibility
   *
   * @param isDisplayed - true if custom content should be displayed
   */
  toggleCustomContent(e) {
    var t;
    (t = this.nodes.customContent) == null || t.classList.toggle(N.CSS.customContentHidden, e);
  }
  /**
   * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
   *
   * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
   * (All the other items with the same key get inactive, and the item gets active)
   *
   * @param clickedItem - popover item that was clicked
   */
  toggleItemActivenessIfNeeded(e) {
    if (e.toggle === !0 && e.toggleActive(), typeof e.toggle == "string") {
      const t = this.items.filter((o) => o.toggle === e.toggle);
      if (t.length === 1) {
        e.toggleActive();
        return;
      }
      t.forEach((o) => {
        o.toggleActive(o === e);
      });
    }
  }
};
Fo([
  ne
], gt.prototype, "height", 1);
let bt = gt;
class Ho extends y {
  constructor() {
    super(...arguments), this.opened = !1, this.selection = new b(), this.onPopoverClose = () => {
      this.close();
    };
  }
  /**
   * Module Events
   *
   * @returns {{opened: string, closed: string}}
   */
  get events() {
    return {
      opened: "block-settings-opened",
      closed: "block-settings-closed"
    };
  }
  /**
   * Block Settings CSS
   */
  get CSS() {
    return {
      settings: "ce-settings"
    };
  }
  /**
   * Getter for inner popover's flipper instance
   *
   * @todo remove once BlockSettings becomes standalone non-module class
   */
  get flipper() {
    var e;
    return (e = this.popover) == null ? void 0 : e.flipper;
  }
  /**
   * Panel with block settings with 2 sections:
   *  - Tool's Settings
   *  - Default Settings [Move, Remove, etc]
   */
  make() {
    this.nodes.wrapper = d.make("div", [this.CSS.settings]);
  }
  /**
   * Destroys module
   */
  destroy() {
    this.removeAllNodes();
  }
  /**
   * Open Block Settings pane
   *
   * @param targetBlock - near which Block we should open BlockSettings
   */
  open(e = this.Editor.BlockManager.currentBlock) {
    this.opened = !0, this.selection.save(), e.selected = !0, this.Editor.BlockSelection.clearCache();
    const [t, o] = e.getTunes();
    this.eventsDispatcher.emit(this.events.opened), this.popover = new bt({
      searchable: !0,
      items: t.map((i) => this.resolveTuneAliases(i)),
      customContent: o,
      customContentFlippableItems: this.getControls(o),
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: U.ui(W.ui.popover, "Nothing found"),
        search: U.ui(W.ui.popover, "Filter")
      }
    }), this.popover.on(fe.Close, this.onPopoverClose), this.nodes.wrapper.append(this.popover.getElement()), this.popover.show();
  }
  /**
   * Returns root block settings element
   */
  getElement() {
    return this.nodes.wrapper;
  }
  /**
   * Close Block Settings pane
   */
  close() {
    this.opened = !1, b.isAtEditor || this.selection.restore(), this.selection.clearSaved(), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(fe.Close, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null);
  }
  /**
   * Returns list of buttons and inputs inside specified container
   *
   * @param container - container to query controls inside of
   */
  getControls(e) {
    const { StylesAPI: t } = this.Editor, o = e.querySelectorAll(
      `.${t.classes.settingsButton}, ${d.allInputsSelector}`
    );
    return Array.from(o);
  }
  /**
   * Resolves aliases in tunes menu items
   *
   * @param item - item with resolved aliases
   */
  resolveTuneAliases(e) {
    const t = To(e, { label: "title" });
    return e.confirmation && (t.confirmation = this.resolveTuneAliases(e.confirmation)), t;
  }
}
class j extends y {
  constructor() {
    super(...arguments), this.opened = !1, this.tools = [], this.flipper = null, this.togglingCallback = null;
  }
  /**
   * CSS getter
   */
  static get CSS() {
    return {
      conversionToolbarWrapper: "ce-conversion-toolbar",
      conversionToolbarShowed: "ce-conversion-toolbar--showed",
      conversionToolbarTools: "ce-conversion-toolbar__tools",
      conversionToolbarLabel: "ce-conversion-toolbar__label",
      conversionTool: "ce-conversion-tool",
      conversionToolHidden: "ce-conversion-tool--hidden",
      conversionToolIcon: "ce-conversion-tool__icon",
      conversionToolFocused: "ce-conversion-tool--focused",
      conversionToolActive: "ce-conversion-tool--active"
    };
  }
  /**
   * Create UI of Conversion Toolbar
   */
  make() {
    this.nodes.wrapper = d.make("div", [
      j.CSS.conversionToolbarWrapper,
      ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
    ]), this.nodes.tools = d.make("div", j.CSS.conversionToolbarTools);
    const e = d.make("div", j.CSS.conversionToolbarLabel, {
      textContent: U.ui(W.ui.inlineToolbar.converter, "Convert to")
    });
    return this.addTools(), this.enableFlipper(), d.append(this.nodes.wrapper, e), d.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
  }
  /**
   * Deactivates flipper and removes all nodes
   */
  destroy() {
    this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
  }
  /**
   * Toggle conversion dropdown visibility
   *
   * @param {Function} [togglingCallback] — callback that will accept opening state
   */
  toggle(e) {
    this.opened ? this.close() : this.open(), I(e) && (this.togglingCallback = e);
  }
  /**
   * Shows Conversion Toolbar
   */
  open() {
    this.filterTools(), this.opened = !0, this.nodes.wrapper.classList.add(j.CSS.conversionToolbarShowed), window.requestAnimationFrame(() => {
      this.flipper.activate(this.tools.map((e) => e.button).filter((e) => !e.classList.contains(j.CSS.conversionToolHidden))), this.flipper.focusFirst(), I(this.togglingCallback) && this.togglingCallback(!0);
    });
  }
  /**
   * Closes Conversion Toolbar
   */
  close() {
    this.opened = !1, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(j.CSS.conversionToolbarShowed), I(this.togglingCallback) && this.togglingCallback(!1);
  }
  /**
   * Returns true if it has more than one tool available for convert in
   */
  hasTools() {
    return this.tools.length === 1 ? this.tools[0].name !== this.config.defaultBlock : !0;
  }
  /**
   * Replaces one Block with another
   * For that Tools must provide import/export methods
   *
   * @param {string} replacingToolName - name of Tool which replaces current
   * @param blockDataOverrides - Block data overrides. Could be passed in case if Multiple Toolbox items specified
   */
  async replaceWithBlock(e, t) {
    const o = this.Editor.BlockManager.currentBlock.tool, s = (await this.Editor.BlockManager.currentBlock.save()).data, n = this.Editor.Tools.blockTools.get(e);
    let a = "";
    const l = o.conversionConfig.export;
    if (I(l))
      a = l(s);
    else if (G(l))
      a = s[l];
    else {
      C("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export.");
      return;
    }
    const c = K(
      a,
      n.sanitizeConfig
    );
    let u = {};
    const h = n.conversionConfig.import;
    if (I(h))
      u = h(c);
    else if (G(h))
      u[h] = c;
    else {
      C("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data.");
      return;
    }
    t && (u = Object.assign(u, t)), this.Editor.BlockManager.replace({
      tool: e,
      data: u
    }), this.Editor.BlockSelection.clearSelection(), this.close(), this.Editor.InlineToolbar.close(), te(() => {
      this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock);
    }, 10)();
  }
  /**
   * Iterates existing Tools and inserts to the ConversionToolbar
   * if tools have ability to import
   */
  addTools() {
    const e = this.Editor.Tools.blockTools;
    Array.from(e.entries()).forEach(([t, o]) => {
      const i = o.conversionConfig;
      !i || !i.import || o.toolbox.forEach(
        (s) => this.addToolIfValid(t, s)
      );
    });
  }
  /**
   * Inserts a tool to the ConversionToolbar if the tool's toolbox config is valid
   *
   * @param name - tool's name
   * @param toolboxSettings - tool's single toolbox setting
   */
  addToolIfValid(e, t) {
    Y(t) || !t.icon || this.addTool(e, t);
  }
  /**
   * Add tool to the Conversion Toolbar
   *
   * @param toolName - name of Tool to add
   * @param toolboxItem - tool's toolbox item data
   */
  addTool(e, t) {
    const o = d.make("div", [j.CSS.conversionTool]), i = d.make("div", [j.CSS.conversionToolIcon]);
    o.dataset.tool = e, i.innerHTML = t.icon, d.append(o, i), d.append(o, d.text(U.t(W.toolNames, t.title || ke(e)))), d.append(this.nodes.tools, o), this.tools.push({
      name: e,
      button: o,
      toolboxItem: t
    }), this.listeners.on(o, "click", async () => {
      await this.replaceWithBlock(e, t.data);
    });
  }
  /**
   * Hide current Tool and show others
   */
  async filterTools() {
    const { currentBlock: e } = this.Editor.BlockManager, t = await e.getActiveToolboxEntry();
    function o(i, s) {
      return i.icon === s.icon && i.title === s.title;
    }
    this.tools.forEach((i) => {
      let s = !1;
      if (t) {
        const n = o(t, i.toolboxItem);
        s = i.button.dataset.tool === e.name && n;
      }
      i.button.hidden = s, i.button.classList.toggle(j.CSS.conversionToolHidden, s);
    });
  }
  /**
   * Prepare Flipper to be able to leaf tools by arrows/tab
   */
  enableFlipper() {
    this.flipper = new X({
      focusedItemClass: j.CSS.conversionToolFocused
    });
  }
}
var mt = { exports: {} };
/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */
(function(r, e) {
  (function(t, o) {
    r.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(s) {
        if (o[s])
          return o[s].exports;
        var n = o[s] = { i: s, l: !1, exports: {} };
        return t[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
      }
      return i.m = t, i.c = o, i.d = function(s, n, a) {
        i.o(s, n) || Object.defineProperty(s, n, { enumerable: !0, get: a });
      }, i.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, i.t = function(s, n) {
        if (1 & n && (s = i(s)), 8 & n || 4 & n && typeof s == "object" && s && s.__esModule)
          return s;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: s }), 2 & n && typeof s != "string")
          for (var l in s)
            i.d(a, l, (function(c) {
              return s[c];
            }).bind(null, l));
        return a;
      }, i.n = function(s) {
        var n = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return i.d(n, "a", n), n;
      }, i.o = function(s, n) {
        return Object.prototype.hasOwnProperty.call(s, n);
      }, i.p = "", i(i.s = 0);
    }([function(t, o, i) {
      function s(l, c) {
        for (var u = 0; u < c.length; u++) {
          var h = c[u];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(l, h.key, h);
        }
      }
      function n(l, c, u) {
        return c && s(l.prototype, c), u && s(l, u), l;
      }
      i.r(o);
      var a = function() {
        function l(c) {
          var u = this;
          (function(h, f) {
            if (!(h instanceof f))
              throw new TypeError("Cannot call a class as a function");
          })(this, l), this.commands = {}, this.keys = {}, this.name = c.name, this.parseShortcutName(c.name), this.element = c.on, this.callback = c.callback, this.executeShortcut = function(h) {
            u.execute(h);
          }, this.element.addEventListener("keydown", this.executeShortcut, !1);
        }
        return n(l, null, [{ key: "supportedCommands", get: function() {
          return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
        } }, { key: "keyCodes", get: function() {
          return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
        } }]), n(l, [{ key: "parseShortcutName", value: function(c) {
          c = c.split("+");
          for (var u = 0; u < c.length; u++) {
            c[u] = c[u].toUpperCase();
            var h = !1;
            for (var f in l.supportedCommands)
              if (l.supportedCommands[f].includes(c[u])) {
                h = this.commands[f] = !0;
                break;
              }
            h || (this.keys[c[u]] = !0);
          }
          for (var k in l.supportedCommands)
            this.commands[k] || (this.commands[k] = !1);
        } }, { key: "execute", value: function(c) {
          var u, h = { CMD: c.ctrlKey || c.metaKey, SHIFT: c.shiftKey, ALT: c.altKey }, f = !0;
          for (u in this.commands)
            this.commands[u] !== h[u] && (f = !1);
          var k, p = !0;
          for (k in this.keys)
            p = p && c.keyCode === l.keyCodes[k];
          f && p && this.callback(c);
        } }, { key: "remove", value: function() {
          this.element.removeEventListener("keydown", this.executeShortcut);
        } }]), l;
      }();
      o.default = a;
    }]).default;
  });
})(mt);
var zo = mt.exports;
const Uo = /* @__PURE__ */ ve(zo);
class jo {
  constructor() {
    this.registeredShortcuts = /* @__PURE__ */ new Map();
  }
  /**
   * Register shortcut
   *
   * @param shortcut - shortcut options
   */
  add(e) {
    if (this.findShortcut(e.on, e.name))
      throw Error(
        `Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`
      );
    const o = new Uo({
      name: e.name,
      on: e.on,
      callback: e.handler
    }), i = this.registeredShortcuts.get(e.on) || [];
    this.registeredShortcuts.set(e.on, [...i, o]);
  }
  /**
   * Remove shortcut
   *
   * @param element - Element shortcut is set for
   * @param name - shortcut name
   */
  remove(e, t) {
    const o = this.findShortcut(e, t);
    if (!o)
      return;
    o.remove();
    const i = this.registeredShortcuts.get(e);
    this.registeredShortcuts.set(e, i.filter((s) => s !== o));
  }
  /**
   * Get Shortcut instance if exist
   *
   * @param element - Element shorcut is set for
   * @param shortcut - shortcut name
   * @returns {number} index - shortcut index if exist
   */
  findShortcut(e, t) {
    return (this.registeredShortcuts.get(e) || []).find(({ name: i }) => i === t);
  }
}
const se = new jo();
var $o = Object.defineProperty, Wo = Object.getOwnPropertyDescriptor, kt = (r, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? Wo(e, t) : e, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (i = (o ? n(e, t, i) : n(i)) || i);
  return o && i && $o(e, t, i), i;
}, be = /* @__PURE__ */ ((r) => (r.Opened = "toolbox-opened", r.Closed = "toolbox-closed", r.BlockAdded = "toolbox-block-added", r))(be || {});
const Ne = class xt extends we {
  /**
   * Toolbox constructor
   *
   * @param options - available parameters
   * @param options.api - Editor API methods
   * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
   */
  constructor({ api: e, tools: t, i18nLabels: o }) {
    super(), this.opened = !1, this.nodes = {
      toolbox: null
    }, this.onPopoverClose = () => {
      this.opened = !1, this.emit(
        "toolbox-closed"
        /* Closed */
      );
    }, this.api = e, this.tools = t, this.i18nLabels = o;
  }
  /**
   * Returns True if Toolbox is Empty and nothing to show
   *
   * @returns {boolean}
   */
  get isEmpty() {
    return this.toolsToBeDisplayed.length === 0;
  }
  /**
   * CSS styles
   *
   * @returns {Object<string, string>}
   */
  static get CSS() {
    return {
      toolbox: "ce-toolbox"
    };
  }
  /**
   * Makes the Toolbox
   */
  make() {
    return this.popover = new bt({
      scopeElement: this.api.ui.nodes.redactor,
      searchable: !0,
      messages: {
        nothingFound: this.i18nLabels.nothingFound,
        search: this.i18nLabels.filter
      },
      items: this.toolboxItemsToBeDisplayed
    }), this.popover.on(fe.Close, this.onPopoverClose), this.enableShortcuts(), this.nodes.toolbox = this.popover.getElement(), this.nodes.toolbox.classList.add(xt.CSS.toolbox), this.nodes.toolbox;
  }
  /**
   * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
   */
  hasFocus() {
    var e;
    return (e = this.popover) == null ? void 0 : e.hasFocus();
  }
  /**
   * Destroy Module
   */
  destroy() {
    var e;
    super.destroy(), this.nodes && this.nodes.toolbox && (this.nodes.toolbox.remove(), this.nodes.toolbox = null), this.removeAllShortcuts(), (e = this.popover) == null || e.off(fe.Close, this.onPopoverClose);
  }
  /**
   * Toolbox Tool's button click handler
   *
   * @param toolName - tool type to be activated
   * @param blockDataOverrides - Block data predefined by the activated Toolbox item
   */
  toolButtonActivated(e, t) {
    this.insertNewBlock(e, t);
  }
  /**
   * Open Toolbox with Tools
   */
  open() {
    var e;
    this.isEmpty || ((e = this.popover) == null || e.show(), this.opened = !0, this.emit(
      "toolbox-opened"
      /* Opened */
    ));
  }
  /**
   * Close Toolbox
   */
  close() {
    var e;
    (e = this.popover) == null || e.hide(), this.opened = !1, this.emit(
      "toolbox-closed"
      /* Closed */
    );
  }
  /**
   * Close Toolbox
   */
  toggle() {
    this.opened ? this.close() : this.open();
  }
  get toolsToBeDisplayed() {
    const e = [];
    return this.tools.forEach((t) => {
      t.toolbox && e.push(t);
    }), e;
  }
  get toolboxItemsToBeDisplayed() {
    const e = (t, o) => ({
      icon: t.icon,
      title: U.t(W.toolNames, t.title || ke(o.name)),
      name: o.name,
      onActivate: () => {
        this.toolButtonActivated(o.name, t.data);
      },
      secondaryLabel: o.shortcut ? Qe(o.shortcut) : "",
      description: t.description || "",
      dividerType: t.dividerType || ""
    });
    return this.toolsToBeDisplayed.reduce((t, o) => (Array.isArray(o.toolbox) ? o.toolbox.forEach((i) => {
      t.push(e(i, o));
    }) : o.toolbox !== void 0 && t.push(e(o.toolbox, o)), t), []);
  }
  /**
   * Iterate all tools and enable theirs shortcuts if specified
   */
  enableShortcuts() {
    this.toolsToBeDisplayed.forEach((e) => {
      const t = e.shortcut;
      t && this.enableShortcutForTool(e.name, t);
    });
  }
  /**
   * Enable shortcut Block Tool implemented shortcut
   *
   * @param {string} toolName - Tool name
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcutForTool(e, t) {
    se.add({
      name: t,
      on: this.api.ui.nodes.redactor,
      handler: (o) => {
        o.preventDefault(), this.insertNewBlock(e);
      }
    });
  }
  /**
   * Removes all added shortcuts
   * Fired when the Read-Only mode is activated
   */
  removeAllShortcuts() {
    this.toolsToBeDisplayed.forEach((e) => {
      const t = e.shortcut;
      t && se.remove(this.api.ui.nodes.redactor, t);
    });
  }
  /**
   * Inserts new block
   * Can be called when button clicked on Toolbox or by ShortcutData
   *
   * @param {string} toolName - Tool name
   * @param blockDataOverrides - predefined Block data
   */
  async insertNewBlock(e, t) {
    const o = this.api.blocks.getCurrentBlockIndex(), i = this.api.blocks.getBlockByIndex(o);
    if (!i)
      return;
    const s = i.isEmpty ? o : o + 1;
    let n;
    if (t) {
      const l = await this.api.blocks.composeBlockData(e);
      n = Object.assign(l, t);
    }
    const a = this.api.blocks.insert(
      e,
      n,
      void 0,
      s,
      void 0,
      i.isEmpty
    );
    a.call(Z.APPEND_CALLBACK), this.api.caret.setToBlock(s), this.emit("toolbox-block-added", {
      block: a
    }), this.api.toolbar.close();
  }
};
kt([
  ne
], Ne.prototype, "toolsToBeDisplayed", 1);
kt([
  ne
], Ne.prototype, "toolboxItemsToBeDisplayed", 1);
let Yo = Ne;
const vt = "block hovered";
class Ko extends y {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.tooltip = new _e();
  }
  /**
   * CSS styles
   *
   * @returns {object}
   */
  get CSS() {
    return {
      toolbar: "ce-toolbar",
      content: "ce-toolbar__content",
      actions: "ce-toolbar__actions",
      actionsOpened: "ce-toolbar__actions--opened",
      toolbarOpened: "ce-toolbar--opened",
      openedToolboxHolderModifier: "codex-editor--toolbox-opened",
      plusButton: "ce-toolbar__plus",
      plusButtonShortcut: "ce-toolbar__plus-shortcut",
      settingsToggler: "ce-toolbar__settings-btn",
      settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
    };
  }
  /**
   * Returns the Toolbar opening state
   *
   * @returns {boolean}
   */
  get opened() {
    return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
  }
  /**
   * Public interface for accessing the Toolbox
   */
  get toolbox() {
    return {
      opened: this.toolboxInstance.opened,
      close: () => {
        this.toolboxInstance.close();
      },
      open: () => {
        this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
      },
      toggle: () => this.toolboxInstance.toggle(),
      hasFocus: () => this.toolboxInstance.hasFocus()
    };
  }
  /**
   * Block actions appearance manipulations
   */
  get blockActions() {
    return {
      hide: () => {
        this.nodes.actions.classList.remove(this.CSS.actionsOpened);
      },
      show: () => {
        this.nodes.actions.classList.add(this.CSS.actionsOpened);
      }
    };
  }
  /**
   * Methods for working with Block Tunes toggler
   */
  get blockTunesToggler() {
    return {
      hide: () => this.nodes.settingsToggler.classList.add(
        this.CSS.settingsTogglerHidden
      ),
      show: () => this.nodes.settingsToggler.classList.remove(
        this.CSS.settingsTogglerHidden
      )
    };
  }
  /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */
  toggleReadOnly(e) {
    e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : (this.drawUI(), this.enableModuleBindings());
  }
  /**
   * Move Toolbar to the passed (or current) Block
   *
   * @param block - block to move Toolbar near it
   */
  moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
    if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e)
      return;
    this.hoveredBlock = e;
    const t = e.holder, { isMobile: o } = this.Editor.UI, i = e.pluginsContent, s = window.getComputedStyle(i), n = parseInt(
      s.paddingTop,
      10
    ), a = t.offsetHeight;
    let l;
    o ? l = t.offsetTop + a : l = t.offsetTop + n, this.nodes.wrapper.style.top = `${Math.floor(l)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
  }
  /**
   * Close the Toolbar
   */
  close() {
    this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), this.toolboxInstance.close(), this.Editor.BlockSettings.close());
  }
  /**
   * Open Toolbar with Plus Button and Actions
   *
   * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
   *                                     This flag allows to open Toolbar without Actions.
   */
  open(e = !0) {
    te(() => {
      this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
    }, 50)();
  }
  /**
   * Draws Toolbar elements
   */
  make() {
    this.nodes.wrapper = d.make("div", this.CSS.toolbar), ["content", "actions"].forEach((t) => {
      this.nodes[t] = d.make("div", this.CSS[t]);
    }), d.append(this.nodes.wrapper, this.nodes.content), d.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = d.make("div", this.CSS.plusButton, {
      innerHTML: Oo
    }), d.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(
      this.nodes.plusButton,
      "click",
      () => {
        this.tooltip.hide(!0), this.plusButtonClicked();
      },
      !1
    );
    const e = d.make("div");
    e.appendChild(
      document.createTextNode(U.ui(W.ui.toolbar.toolbox, "Add"))
    ), e.appendChild(
      d.make("div", this.CSS.plusButtonShortcut, {
        textContent: "⇥ Tab"
      })
    ), this.tooltip.onHover(this.nodes.plusButton, e, {
      hidingDelay: 400
    }), this.nodes.settingsToggler = d.make("span", this.CSS.settingsToggler, {
      innerHTML: Ao
    }), d.append(this.nodes.actions, this.nodes.settingsToggler), this.tooltip.onHover(
      this.nodes.settingsToggler,
      U.ui(W.ui.blockTunes.toggler, "Click to tune"),
      {
        hidingDelay: 400
      }
    ), d.append(this.nodes.actions, this.makeToolbox()), d.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Creates the Toolbox instance and return it's rendered element
   */
  makeToolbox() {
    return this.toolboxInstance = new Yo({
      api: this.Editor.API.methods,
      tools: this.Editor.Tools.blockTools,
      i18nLabels: {
        filter: U.ui(W.ui.popover, "Filter"),
        nothingFound: U.ui(W.ui.popover, "Nothing found")
      }
    }), this.toolboxInstance.on(be.Opened, () => {
      this.Editor.UI.nodes.wrapper.classList.add(
        this.CSS.openedToolboxHolderModifier
      );
    }), this.toolboxInstance.on(be.Closed, () => {
      this.Editor.UI.nodes.wrapper.classList.remove(
        this.CSS.openedToolboxHolderModifier
      );
    }), this.toolboxInstance.on(be.BlockAdded, ({ block: e }) => {
      const { BlockManager: t, Caret: o } = this.Editor, i = t.getBlockById(e.id);
      i.inputs.length === 0 && (i === t.lastBlock ? (t.insertAtEnd(), o.setToBlock(t.lastBlock)) : o.setToBlock(t.nextBlock));
    }), this.toolboxInstance.make();
  }
  /**
   * Handler for Plus Button
   */
  plusButtonClicked() {
    b.get().removeAllRanges(), this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.toggle(), this.Editor.InlineToolbar.opened && this.Editor.InlineToolbar.close();
  }
  /**
   * Enable bindings
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(
      this.nodes.settingsToggler,
      "mousedown",
      (e) => {
        e.stopPropagation(), this.settingsTogglerClicked(), this.tooltip.hide(!0);
      },
      !0
    ), Q() || this.eventsDispatcher.on(vt, (e) => {
      this.Editor.BlockSettings.opened || this.toolboxInstance.opened || this.moveAndOpen(e.block);
    });
  }
  /**
   * Disable bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Clicks on the Block Settings toggler
   */
  settingsTogglerClicked() {
    b.get().removeAllRanges(), this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock), this.Editor.InlineToolbar.opened && this.Editor.InlineToolbar.close();
  }
  /**
   * Draws Toolbar UI
   *
   * Toolbar contains BlockSettings and Toolbox.
   * That's why at first we draw its components and then Toolbar itself
   *
   * Steps:
   *  - Make Toolbar dependent components like BlockSettings, Toolbox and so on
   *  - Make itself and append dependent nodes to itself
   *
   */
  drawUI() {
    this.Editor.BlockSettings.make(), this.make();
  }
  /**
   * Removes all created and saved HTMLElements
   * It is used in Read-Only mode
   */
  destroy() {
    this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy(), this.tooltip.destroy();
  }
}
var ye = /* @__PURE__ */ ((r) => (r[r.Block = 0] = "Block", r[r.Inline = 1] = "Inline", r[r.Tune = 2] = "Tune", r))(ye || {}), me = /* @__PURE__ */ ((r) => (r.Shortcut = "shortcut", r.Toolbox = "toolbox", r.EnabledInlineTools = "inlineToolbar", r.EnabledBlockTunes = "tunes", r.Config = "config", r))(me || {}), wt = /* @__PURE__ */ ((r) => (r.Shortcut = "shortcut", r.SanitizeConfig = "sanitize", r))(wt || {}), ie = /* @__PURE__ */ ((r) => (r.IsEnabledLineBreaks = "enableLineBreaks", r.Toolbox = "toolbox", r.ConversionConfig = "conversionConfig", r.IsReadOnlySupported = "isReadOnlySupported", r.PasteConfig = "pasteConfig", r))(ie || {}), Re = /* @__PURE__ */ ((r) => (r.IsInline = "isInline", r.Title = "title", r))(Re || {}), yt = /* @__PURE__ */ ((r) => (r.IsTune = "isTune", r))(yt || {});
class De {
  /**
   * @class
   * @param {ConstructorOptions} options - Constructor options
   */
  constructor({
    name: e,
    constructable: t,
    config: o,
    api: i,
    isDefault: s,
    isInternal: n = !1,
    defaultPlaceholder: a
  }) {
    this.api = i, this.name = e, this.constructable = t, this.config = o, this.isDefault = s, this.isInternal = n, this.defaultPlaceholder = a;
  }
  /**
   * Returns Tool user configuration
   */
  get settings() {
    const e = this.config.config || {};
    return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
  }
  /**
   * Calls Tool's reset method
   */
  reset() {
    if (I(this.constructable.reset))
      return this.constructable.reset();
  }
  /**
   * Calls Tool's prepare method
   */
  prepare() {
    if (I(this.constructable.prepare))
      return this.constructable.prepare({
        toolName: this.name,
        config: this.settings
      });
  }
  /**
   * Returns shortcut for Tool (internal or specified by user)
   */
  get shortcut() {
    const e = this.constructable.shortcut;
    return this.config.shortcut || e;
  }
  /**
   * Returns Tool's sanitizer configuration
   */
  get sanitizeConfig() {
    return this.constructable.sanitize || {};
  }
  /**
   * Returns true if Tools is inline
   */
  isInline() {
    return this.type === 1;
  }
  /**
   * Returns true if Tools is block
   */
  isBlock() {
    return this.type === 0;
  }
  /**
   * Returns true if Tools is tune
   */
  isTune() {
    return this.type === 2;
  }
}
class Xo extends y {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.CSS = {
      inlineToolbar: "ce-inline-toolbar",
      inlineToolbarShowed: "ce-inline-toolbar--showed",
      inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented",
      inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented",
      inlineToolbarShortcut: "ce-inline-toolbar__shortcut",
      buttonsWrapper: "ce-inline-toolbar__buttons",
      actionsWrapper: "ce-inline-toolbar__actions",
      inlineToolButton: "ce-inline-tool",
      inputField: "cdx-input",
      focusedButton: "ce-inline-tool--focused",
      conversionToggler: "ce-inline-toolbar__dropdown",
      conversionTogglerArrow: "ce-inline-toolbar__dropdown-arrow",
      conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden",
      conversionTogglerContent: "ce-inline-toolbar__dropdown-content",
      togglerAndButtonsWrapper: "ce-inline-toolbar__toggler-and-button-wrapper"
    }, this.opened = !1, this.toolbarVerticalMargin = Q() ? 20 : 6, this.buttonsList = null, this.width = 0, this.flipper = null, this.tooltip = new _e();
  }
  /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */
  toggleReadOnly(e) {
    e ? (this.destroy(), this.Editor.ConversionToolbar.destroy()) : this.make();
  }
  /**
   *  Moving / appearance
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Shows Inline Toolbar if something is selected
   *
   * @param [needToClose] - pass true to close toolbar if it is not allowed.
   *                                  Avoid to use it just for closing IT, better call .close() clearly.
   * @param [needToShowConversionToolbar] - pass false to not to show Conversion Toolbar
   */
  tryToShow(e = !1, t = !0, o = null, i = !1) {
    if (!this.allowedToShow() && !o) {
      e && this.close();
      return;
    }
    i || this.move(o), this.open(t, !1), this.checkToolsState(), this.Editor.Toolbar.close();
  }
  /**
   * Move Toolbar to the selected text
   */
  move(e = null) {
    let t = b.rect;
    const o = this.Editor.UI.nodes.wrapper.getBoundingClientRect();
    e && (t = e.target.getBoundingClientRect());
    const i = {
      x: t.x - o.left,
      y: t.y + (t.bottom < o.bottom ? t.height : t.height - 300) - o.top + this.toolbarVerticalMargin
    };
    t.width && (i.x += Math.floor(t.width / 2));
    const s = i.x - this.width / 2, n = i.x + this.width / 2;
    this.nodes.wrapper.classList.toggle(
      this.CSS.inlineToolbarLeftOriented,
      s < this.Editor.UI.contentRect.left
    ), this.nodes.wrapper.classList.toggle(
      this.CSS.inlineToolbarRightOriented,
      n > this.Editor.UI.contentRect.right
    ), this.nodes.wrapper.style.left = Math.floor(i.x) + "px", this.nodes.wrapper.style.top = Math.floor(i.y) + "px";
  }
  /**
   * Hides Inline Toolbar
   */
  close() {
    this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), Array.from(this.toolsInstances.entries()).forEach(
      ([e, t]) => {
        const o = this.getToolShortcut(e);
        o && se.remove(this.Editor.UI.nodes.redactor, o), I(t.clear) && t.clear();
      }
    ), this.opened = !1, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()));
  }
  /**
   * Shows Inline Toolbar
   *
   * @param [needToShowConversionToolbar] - pass false to not to show Conversion Toolbar
   */
  open(e = !0, t = !1, o = !1) {
    if (this.opened) {
      o && this.checkToolsState();
      return;
    }
    this.addToolsFiltered(t), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(
      `.${this.CSS.inlineToolButton}`
    ), this.opened = !0, e && this.Editor.ConversionToolbar.hasTools() ? this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = !0;
    let i = Array.from(this.buttonsList);
    i.unshift(this.nodes.conversionToggler), i = i.filter((s) => !s.hidden), this.flipper.activate(i);
  }
  /**
   * Check if node is contained by Inline Toolbar
   *
   * @param {Node} node — node to check
   */
  containsNode(e) {
    return this.nodes.wrapper.contains(e);
  }
  /**
   * Removes UI and its components
   */
  destroy() {
    this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes(), this.tooltip.destroy();
  }
  /**
   * Check Tools` state by selection
   */
  checkToolsState() {
    this.toolsInstances.forEach((e) => {
      e.checkState(b.get());
    });
  }
  /**
   * Making DOM
   */
  make() {
    this.nodes.wrapper = d.make("div", [
      this.CSS.inlineToolbar,
      ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
    ]), this.nodes.togglerAndButtonsWrapper = d.make(
      "div",
      this.CSS.togglerAndButtonsWrapper
    ), this.nodes.buttons = d.make("div", this.CSS.buttonsWrapper), this.nodes.actions = d.make("div", this.CSS.actionsWrapper), this.listeners.on(this.nodes.wrapper, "mousedown", (e) => {
      e.stopPropagation(), e.target.closest(
        `.${this.CSS.actionsWrapper}`
      );
    }), d.append(this.nodes.wrapper, [
      this.nodes.togglerAndButtonsWrapper,
      this.nodes.actions
    ]), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), d.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), this.recalculateWidth(), this.enableFlipper();
  }
  /**
   * Need to show Inline Toolbar or not
   */
  allowedToShow() {
    const e = ["IMG", "INPUT"], t = b.get(), o = b.text;
    if (!t || !t.anchorNode || t.isCollapsed || o.length < 1)
      return !1;
    const i = d.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
    if (t && e.includes(i.tagName) || i.closest('[contenteditable="true"]') === null)
      return !1;
    const n = this.Editor.BlockManager.getBlock(
      t.anchorNode
    );
    return n ? n.tool.inlineTools.size !== 0 : !1;
  }
  /**
   * Recalculate inline toolbar width
   */
  recalculateWidth() {
    this.width = this.nodes.wrapper.offsetWidth;
  }
  /**
   * Create a toggler for Conversion Dropdown
   * and prepend it to the buttons list
   */
  addConversionToggler() {
    this.nodes.conversionToggler = d.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = d.make(
      "div",
      this.CSS.conversionTogglerContent
    );
    const e = d.make("div", this.CSS.conversionTogglerArrow, {
      innerHTML: ut
    });
    this.nodes.conversionToggler.appendChild(
      this.nodes.conversionTogglerContent
    ), this.nodes.conversionToggler.appendChild(e), this.nodes.togglerAndButtonsWrapper.appendChild(
      this.nodes.conversionToggler
    ), this.listeners.on(this.nodes.conversionToggler, "click", () => {
      this.Editor.ConversionToolbar.toggle((t) => {
        !t && this.opened ? this.flipper.activate() : this.opened && this.flipper.deactivate();
      });
    }), Q() === !1 && this.tooltip.onHover(
      this.nodes.conversionToggler,
      U.ui(W.ui.inlineToolbar.converter, "Convert to"),
      {
        placement: "top",
        hidingDelay: 100
      }
    );
  }
  /**
   * Changes Conversion Dropdown content for current block's Tool
   */
  async setConversionTogglerContent() {
    const { BlockManager: e } = this.Editor, { currentBlock: t } = e, o = t.name, i = t.tool.conversionConfig, s = i && i.export;
    this.nodes.conversionToggler.hidden = !s, this.nodes.conversionToggler.classList.toggle(
      this.CSS.conversionTogglerHidden,
      !s
    );
    const n = await t.getActiveToolboxEntry() || {};
    this.nodes.conversionTogglerContent.innerHTML = n.icon || n.title || ke(o);
  }
  /**
   * Makes the Conversion Dropdown
   */
  prepareConversionToolbar() {
    const e = this.Editor.ConversionToolbar.make();
    d.append(this.nodes.wrapper, e);
  }
  /**
   *  Working with Tools
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Append only allowed Tools
   */
  addToolsFiltered(e = !1) {
    const t = b.get(), o = this.Editor.BlockManager.blocks.findIndex(
      (s) => s.name === "paragraph"
    );
    let i = this.Editor.BlockManager.blocks[o];
    !e && t.anchorNode && (i = this.Editor.BlockManager.getBlock(
      t.anchorNode
    )), this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = /* @__PURE__ */ new Map(), Array.from(i.tool.inlineTools.values()).forEach((s) => {
      this.addTool(s);
    }), this.recalculateWidth();
  }
  /**
   * Add tool button and activate clicks
   *
   * @param {InlineTool} tool - InlineTool object
   */
  addTool(e) {
    const t = e.create(), o = t.render();
    if (!o) {
      C("Render method must return an instance of Node", "warn", e.name);
      return;
    }
    if (o.dataset.tool = e.name, this.nodes.buttons.appendChild(o), this.toolsInstances.set(e.name, t), I(t.renderActions)) {
      const a = t.renderActions();
      this.nodes.actions.appendChild(a);
    }
    this.listeners.on(o, "click", (a) => {
      this.toolClicked(t), a.preventDefault();
    });
    const i = this.getToolShortcut(e.name);
    if (i)
      try {
        this.enableShortcuts(t, i);
      } catch {
      }
    const s = d.make("div"), n = U.t(
      W.toolNames,
      e.title || ke(e.name)
    );
    s.appendChild(d.text(n)), i && s.appendChild(
      d.make("div", this.CSS.inlineToolbarShortcut, {
        textContent: Qe(i)
      })
    ), Q() === !1 && this.tooltip.onHover(o, s, {
      placement: "top",
      hidingDelay: 100
    }), t.checkState(b.get());
  }
  /**
   * Get shortcut name for tool
   *
   * @param toolName — Tool name
   */
  getToolShortcut(e) {
    const { Tools: t } = this.Editor, o = t.inlineTools.get(e), i = t.internal.inlineTools;
    return Array.from(i.keys()).includes(e) ? this.inlineTools[e][wt.Shortcut] : o.shortcut;
  }
  /**
   * Enable Tool shortcut with Editor Shortcuts Module
   *
   * @param {InlineTool} tool - Tool instance
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcuts(e, t) {
    se.add({
      name: t,
      handler: (o) => {
        const { currentBlock: i } = this.Editor.BlockManager;
        i && i.tool.enabledInlineTools && (o.preventDefault(), this.toolClicked(e));
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  /**
   * Inline Tool button clicks
   *
   * @param {InlineTool} tool - Tool's instance
   */
  toolClicked(e) {
    const t = b.range;
    e.surround(t), this.checkToolsState(), e.renderActions !== void 0 && this.flipper.deactivate();
  }
  /**
   * Get inline tools tools
   * Tools that has isInline is true
   */
  get inlineTools() {
    const e = {};
    return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(
      ([t, o]) => {
        e[t] = o.create();
      }
    ), e;
  }
  /**
   * Allow to leaf buttons by arrows / tab
   * Buttons will be filled on opening
   */
  enableFlipper() {
    this.flipper = new X({
      focusedItemClass: this.CSS.focusedButton,
      allowedKeys: [v.ENTER, v.TAB]
    });
  }
}
const Vo = [
  "paragraph",
  "list",
  "header",
  "header01",
  "header02",
  "header03"
];
class Zo extends y {
  /**
   * All keydowns on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  keydown(e) {
    switch (this.beforeKeydownProcessing(e), e.keyCode) {
      case v.BACKSPACE:
        this.backspace(e);
        break;
      case v.ENTER:
        this.enter(e);
        break;
      case v.DOWN:
        if (e.shiftKey && e.metaKey) {
          const t = this.Editor.BlocksAPI.getCurrentBlockIndex();
          if (this.Editor.BlocksAPI.getBlockByIndex(t).name === "image") {
            const i = this.Editor.BlocksAPI.getBlockByIndex(
              t + 1
            );
            if (!i)
              throw new Error(
                "Unable to move Block down since it is already the last"
              );
            const s = i.holder, n = s.getBoundingClientRect();
            let a = Math.abs(
              window.innerHeight - s.offsetHeight
            );
            n.top < window.innerHeight && (a = window.scrollY + s.offsetHeight), window.scrollTo(0, a), this.Editor.BlocksAPI.move(t + 1);
          }
        }
      case v.RIGHT:
        this.arrowRightAndDown(e);
        break;
      case v.UP:
        if (e.shiftKey && e.metaKey) {
          const t = this.Editor.BlocksAPI.getCurrentBlockIndex(), o = this.Editor.BlocksAPI.getBlockByIndex(t);
          if (o.name === "image") {
            const i = this.Editor.BlocksAPI.getBlockByIndex(
              t - 1
            );
            if (t === 0 || !o || !i)
              throw new Error(
                "Unable to move Block up since it is already the first"
              );
            const s = o.holder, n = i.holder, a = s.getBoundingClientRect(), l = n.getBoundingClientRect();
            let c;
            l.top > 0 ? c = Math.abs(a.top) - Math.abs(l.top) : c = Math.abs(a.top) + l.height, window.scrollBy(0, -1 * c), this.Editor.BlocksAPI.move(t - 1);
          }
        }
      case v.LEFT:
        this.arrowLeftAndUp(e);
        break;
      case v.TAB:
        this.tabPressed(e);
        break;
    }
  }
  /**
   * Fires on keydown before event processing
   *
   * @param {KeyboardEvent} event - keydown
   */
  beforeKeydownProcessing(e) {
    this.needToolbarClosing(e) && Ge(e.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || (this.Editor.BlockManager.clearFocused(), this.Editor.BlockSelection.clearSelection(e)));
  }
  /**
   * Key up on Block:
   * - shows Inline Toolbar if something selected
   * - shows conversion toolbar with 85% of block selection
   *
   * @param {KeyboardEvent} event - keyup event
   */
  keyup(e) {
    e.shiftKey || this.Editor.UI.checkEmptiness();
  }
  /**
   * Open Toolbox to leaf Tools
   *
   * @param {KeyboardEvent} event - tab keydown event
   */
  tabPressed(e) {
    e.preventDefault(), this.Editor.BlockSelection.clearSelection(e);
    const { BlockManager: t, InlineToolbar: o, ConversionToolbar: i } = this.Editor, s = t.currentBlock;
    if (!s)
      return;
    const n = s.isEmpty, a = s.tool.isDefault && n, l = !n && i.opened, c = !n && !b.isCollapsed && o.opened;
    a ? this.activateToolbox() : !l && !c && this.activateBlockSettings();
  }
  /**
   * Add drop target styles
   *
   * @param {DragEvent} event - drag over event
   */
  dragOver(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(
      e.target
    );
    t.dropTarget = !0;
  }
  /**
   * Remove drop target style
   *
   * @param {DragEvent} event - drag leave event
   */
  dragLeave(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(
      e.target
    );
    t.dropTarget = !1;
  }
  /**
   * Copying selected blocks
   * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandC(e) {
    const { BlockSelection: t } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e);
  }
  /**
   * Copy and Delete selected Blocks
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandX(e) {
    const { BlockSelection: t, BlockManager: o, Caret: i } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e).then(() => {
      const s = o.removeSelectedBlocks(), n = o.insertDefaultBlockAtIndex(
        s,
        !0
      );
      i.setToBlock(n, i.positions.START), t.clearSelection(e);
    });
  }
  /**
   * ENTER pressed on block
   *
   * @param {KeyboardEvent} event - keydown
   */
  enter(e) {
    const { BlockManager: t, UI: o } = this.Editor;
    if (t.currentBlock.tool.isLineBreaksEnabled || o.someToolbarOpened && o.someFlipperButtonFocused || e.shiftKey)
      return;
    let s = this.Editor.BlockManager.currentBlock;
    if (this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia)
      this.Editor.BlockManager.currentBlock.name === "list" ? s = this.Editor.BlockManager.insertDefaultBlockAtIndex(
        this.Editor.BlockManager.currentBlockIndex,
        !1,
        this.config.defaultBlock
      ) : this.Editor.BlockManager.insertDefaultBlockAtIndex(
        this.Editor.BlockManager.currentBlockIndex
      );
    else if (this.Editor.Caret.isAtEnd)
      this.Editor.BlockManager.currentBlock.name === "list" ? s = this.Editor.BlockManager.insertDefaultBlockAtIndex(
        this.Editor.BlockManager.currentBlockIndex + 1,
        !1,
        "list"
      ) : s = this.Editor.BlockManager.insertDefaultBlockAtIndex(
        this.Editor.BlockManager.currentBlockIndex + 1
      );
    else {
      const n = t.blocks[t.currentBlockIndex].name;
      s = this.Editor.BlockManager.split(
        Vo.includes(n) ? n : "paragraph"
      );
    }
    this.Editor.Caret.setToBlock(s), this.Editor.Toolbar.moveAndOpen(s), e.preventDefault();
  }
  /**
   * Handle backspace keydown on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  backspace(e) {
    const { BlockManager: t, BlockSelection: o, Caret: i } = this.Editor, s = t.currentBlock, n = s.tool;
    if (s.selected || s.isEmpty && s.currentInput === s.firstInput) {
      e.preventDefault();
      const c = t.currentBlockIndex;
      t.previousBlock && t.previousBlock.inputs.length === 0 && (t.previousBlock.name === "image" || t.previousBlock.name === "gallery") ? t.removeBlock(c - 1) : t.removeBlock(), i.setToBlock(
        t.currentBlock,
        c ? i.positions.END : i.positions.START
      ), this.Editor.Toolbar.close(), o.clearSelection(e);
      return;
    }
    if (n.isLineBreaksEnabled && !i.isAtStart)
      return;
    const a = t.currentBlockIndex === 0;
    i.isAtStart && b.isCollapsed && s.currentInput === s.firstInput && !a && (e.preventDefault(), this.mergeBlocks());
  }
  /**
   * Merge current and previous Blocks if they have the same type
   */
  mergeBlocks() {
    const { BlockManager: e, Caret: t, Toolbar: o } = this.Editor, i = e.previousBlock, s = e.currentBlock;
    if (s.name !== i.name || !i.mergeable) {
      if (i.inputs.length === 0 || i.isEmpty) {
        e.removeBlock(e.currentBlockIndex - 1), t.setToBlock(e.currentBlock), o.close();
        return;
      }
      t.navigatePrevious() && o.close();
      return;
    }
    t.createShadow(i.pluginsContent), e.mergeBlocks(i, s).then(() => {
      t.restoreCaret(i.pluginsContent), i.pluginsContent.normalize(), o.close();
    });
  }
  /**
   * Handle right and down keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowRightAndDown(e) {
    const t = X.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === v.TAB);
    if (this.Editor.UI.someToolbarOpened && t)
      return;
    this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
    const o = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === v.DOWN && o) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState();
      return;
    }
    (e.keyCode === v.DOWN || e.keyCode === v.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) ? e.preventDefault() : te(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Handle left and up keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowLeftAndUp(e) {
    if (this.Editor.UI.someToolbarOpened) {
      if (X.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === v.TAB))
        return;
      this.Editor.UI.closeAllToolbars();
    }
    this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
    const t = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === v.UP && t) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1);
      return;
    }
    (e.keyCode === v.UP || e.keyCode === v.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) ? e.preventDefault() : te(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Cases when we need to close Toolbar
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  needToolbarClosing(e) {
    const t = e.keyCode === v.ENTER && this.Editor.Toolbar.toolbox.opened, o = e.keyCode === v.ENTER && this.Editor.BlockSettings.opened, i = e.keyCode === v.ENTER && this.Editor.InlineToolbar.opened, s = e.keyCode === v.ENTER && this.Editor.ConversionToolbar.opened, n = e.keyCode === v.TAB;
    return !(e.shiftKey || n || t || o || i || s);
  }
  /**
   * If Toolbox is not open, then just open it and show plus button
   */
  activateToolbox() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
  }
  /**
   * Open Toolbar and show BlockSettings before flipping Tools
   */
  activateBlockSettings() {
    this.Editor.Toolbar.opened || (this.Editor.BlockManager.currentBlock.focused = !0, this.Editor.Toolbar.moveAndOpen()), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
  }
}
class Te {
  /**
   * @class
   * @param {HTMLElement} workingArea — editor`s working node
   */
  constructor(e) {
    this.blocks = [], this.workingArea = e;
  }
  /**
   * Get length of Block instances array
   *
   * @returns {number}
   */
  get length() {
    return this.blocks.length;
  }
  /**
   * Get Block instances array
   *
   * @returns {Block[]}
   */
  get array() {
    return this.blocks;
  }
  /**
   * Get blocks html elements array
   *
   * @returns {HTMLElement[]}
   */
  get nodes() {
    return Je(this.workingArea.children);
  }
  /**
   * Proxy trap to implement array-like setter
   *
   * @example
   * blocks[0] = new Block(...)
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — block index or any Blocks class property key to set
   * @param {Block} value — value to set
   * @returns {boolean}
   */
  static set(e, t, o) {
    return isNaN(Number(t)) ? (Reflect.set(e, t, o), !0) : (e.insert(+t, o), !0);
  }
  /**
   * Proxy trap to implement array-like getter
   *
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — Blocks class property key
   * @returns {Block|*}
   */
  static get(e, t) {
    return isNaN(Number(t)) ? Reflect.get(e, t) : e.get(+t);
  }
  /**
   * Push new Block to the blocks array and append it to working area
   *
   * @param {Block} block - Block to add
   */
  push(e) {
    this.blocks.push(e), this.insertToDOM(e);
  }
  /**
   * Swaps blocks with indexes first and second
   *
   * @param {number} first - first block index
   * @param {number} second - second block index
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    const o = this.blocks[t];
    d.swap(this.blocks[e].holder, o.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o;
  }
  /**
   * Move a block from one to another index
   *
   * @param {number} toIndex - new index of the block
   * @param {number} fromIndex - block to move
   */
  move(e, t) {
    const o = this.blocks.splice(t, 1)[0], i = e - 1, s = Math.max(0, i), n = this.blocks[s];
    e > 0 ? this.insertToDOM(o, "afterend", n) : this.insertToDOM(o, "beforebegin", n), this.blocks.splice(e, 0, o);
    const a = this.composeBlockEvent("move", {
      fromIndex: t,
      toIndex: e
    });
    o.call(Z.MOVED, a);
  }
  /**
   * Insert new Block at passed index
   *
   * @param {number} index — index to insert Block
   * @param {Block} block — Block to insert
   * @param {boolean} replace — it true, replace block on given index
   */
  insert(e, t, o = !1) {
    if (!this.length) {
      this.push(t);
      return;
    }
    e > this.length && (e = this.length), o && (this.blocks[e].holder.remove(), this.blocks[e].call(Z.REMOVED));
    const i = o ? 1 : 0;
    if (this.blocks.splice(e, i, t), e > 0) {
      const s = this.blocks[e - 1];
      this.insertToDOM(t, "afterend", s);
    } else {
      const s = this.blocks[e + 1];
      s ? this.insertToDOM(t, "beforebegin", s) : this.insertToDOM(t);
    }
  }
  /**
   * Remove block
   *
   * @param {number} index - index of Block to remove
   */
  remove(e) {
    isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(Z.REMOVED), this.blocks.splice(e, 1);
  }
  /**
   * Remove all blocks
   */
  removeAll() {
    this.workingArea.innerHTML = "", this.blocks.forEach((e) => e.call(Z.REMOVED)), this.blocks.length = 0;
  }
  /**
   * Insert Block after passed target
   *
   * @todo decide if this method is necessary
   * @param {Block} targetBlock — target after which Block should be inserted
   * @param {Block} newBlock — Block to insert
   */
  insertAfter(e, t) {
    const o = this.blocks.indexOf(e);
    this.insert(o + 1, t);
  }
  /**
   * Get Block by index
   *
   * @param {number} index — Block index
   * @returns {Block}
   */
  get(e) {
    return this.blocks[e];
  }
  /**
   * Return index of passed Block
   *
   * @param {Block} block - Block to find
   * @returns {number}
   */
  indexOf(e) {
    return this.blocks.indexOf(e);
  }
  /**
   * Insert new Block into DOM
   *
   * @param {Block} block - Block to insert
   * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
   * @param {Block} target — Block related to position
   */
  insertToDOM(e, t, o) {
    t ? o.holder.insertAdjacentElement(t, e.holder) : this.workingArea.appendChild(e.holder), e.call(Z.RENDERED);
  }
  /**
   * Composes Block event with passed type and details
   *
   * @param {string} type - event type
   * @param {object} detail - event detail
   */
  composeBlockEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
}
const Xe = "block-removed", Ve = "block-added", Go = "block-moved", qo = "block-changed";
class Jo extends y {
  constructor() {
    super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
  }
  /**
   * Returns current Block index
   *
   * @returns {number}
   */
  get currentBlockIndex() {
    return this._currentBlockIndex;
  }
  /**
   * Set current Block index and fire Block lifecycle callbacks
   *
   * @param {number} newIndex - index of Block to set as current
   */
  set currentBlockIndex(e) {
    this._currentBlockIndex = e;
  }
  /**
   * returns first Block
   *
   * @returns {Block}
   */
  get firstBlock() {
    return this._blocks[0];
  }
  /**
   * returns last Block
   *
   * @returns {Block}
   */
  get lastBlock() {
    return this._blocks[this._blocks.length - 1];
  }
  /**
   * Get current Block instance
   *
   * @returns {Block}
   */
  get currentBlock() {
    return this._blocks[this.currentBlockIndex];
  }
  /**
   * Set passed Block as a current
   *
   * @param block - block to set as a current
   */
  set currentBlock(e) {
    this.currentBlockIndex = this.getBlockIndex(e);
  }
  /**
   * Returns next Block instance
   *
   * @returns {Block|null}
   */
  get nextBlock() {
    return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
  }
  /**
   * Return first Block with inputs after current Block
   *
   * @returns {Block | undefined}
   */
  get nextContentfulBlock() {
    return this.blocks.slice(this.currentBlockIndex + 1).find((t) => !!t.inputs.length);
  }
  /**
   * Return first Block with inputs before current Block
   *
   * @returns {Block | undefined}
   */
  get previousContentfulBlock() {
    return this.blocks.slice(0, this.currentBlockIndex).reverse().find((t) => !!t.inputs.length);
  }
  /**
   * Returns previous Block instance
   *
   * @returns {Block|null}
   */
  get previousBlock() {
    return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
  }
  /**
   * Get array of Block instances
   *
   * @returns {Block[]} {@link Blocks#array}
   */
  get blocks() {
    return this._blocks.array;
  }
  /**
   * Check if each Block is empty
   *
   * @returns {boolean}
   */
  get isEditorEmpty() {
    return this.blocks.every((e) => e.isEmpty);
  }
  /**
   * Should be called after Editor.UI preparation
   * Define this._blocks property
   */
  prepare() {
    const e = new Te(this.Editor.UI.nodes.redactor);
    this._blocks = new Proxy(e, {
      set: Te.set,
      get: Te.get
    }), this.listeners.on(
      document,
      "copy",
      (t) => this.Editor.BlockEvents.handleCommandC(t)
    );
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - Unbind event handlers from created Blocks
   *
   * if readOnly is false:
   *  - Bind event handlers to all existing Blocks
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Creates Block instance by tool name
   *
   * @param {object} options - block creation options
   * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
   * @param {string} [options.id] - unique id for this block
   * @param {BlockToolData} [options.data] - constructor params
   * @returns {Block}
   */
  composeBlock({
    tool: e,
    data: t = {},
    id: o = void 0,
    tunes: i = {}
  }) {
    const s = this.Editor.ReadOnly.isEnabled, n = this.Editor.Tools.blockTools.get(e), a = new _(
      {
        id: o,
        data: t,
        tool: n,
        api: this.Editor.API,
        readOnly: s,
        tunesData: i
      },
      this.eventsDispatcher
    );
    return s || this.bindBlockEvents(a), a;
  }
  /**
   * Insert new block into _blocks
   *
   * @param {object} options - insert options
   * @param {string} [options.id] - block's unique id
   * @param {string} [options.tool] - plugin name, by default method inserts the default block type
   * @param {object} [options.data] - plugin data
   * @param {number} [options.index] - index where to insert new Block
   * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
   * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
   * @returns {Block}
   */
  insert({
    id: e = void 0,
    tool: t = this.config.defaultBlock,
    data: o = {},
    index: i,
    needToFocus: s = !0,
    replace: n = !1,
    tunes: a = {},
    reSelectedAfterUpdate: l = !1
  } = {}) {
    let c = i;
    c === void 0 && (c = this.currentBlockIndex + (n ? 0 : 1));
    const u = this.composeBlock({
      id: e,
      tool: t,
      data: o,
      tunes: a
    });
    return n && this.blockDidMutated(
      Xe,
      this.getBlockByIndex(c),
      {
        index: c
      }
    ), this._blocks.insert(c, u, n), this.blockDidMutated(Ve, u, {
      index: c
    }), s ? this.currentBlockIndex = c : c <= this.currentBlockIndex && this.currentBlockIndex++, l && (u.selected = !0), u;
  }
  /**
   * Replace current working block
   *
   * @param {object} options - replace options
   * @param {string} options.tool — plugin name
   * @param {BlockToolData} options.data — plugin data
   * @returns {Block}
   */
  replace({ tool: e = this.config.defaultBlock, data: t = {} }) {
    return this.insert({
      tool: e,
      data: t,
      index: this.currentBlockIndex,
      replace: !0
    });
  }
  /**
   * Insert pasted content. Call onPaste callback after insert.
   *
   * @param {string} toolName - name of Tool to insert
   * @param {PasteEvent} pasteEvent - pasted data
   * @param {boolean} replace - should replace current block
   */
  paste(e, t, o = !1) {
    const i = this.insert({
      tool: e,
      replace: o
    });
    try {
      i.call(Z.ON_PASTE, t);
    } catch (s) {
      C(`${e}: onPaste callback call is failed`, "error", s);
    }
    return i;
  }
  /**
   * Insert new default block at passed index
   *
   * @param {number} index - index where Block should be inserted
   * @param {boolean} needToFocus - if true, updates current Block index
   *
   * TODO: Remove method and use insert() with index instead (?)
   * @returns {Block} inserted Block
   */
  insertDefaultBlockAtIndex(e, t = !1, o = "") {
    var n, a, l, c;
    const i = ((a = (n = this.blocks) == null ? void 0 : n[e - 1]) == null ? void 0 : a.name) === "list" && !((c = (l = this.blocks) == null ? void 0 : l[e]) != null && c.isEmpty) ? "list" : this.config.defaultBlock, s = this.composeBlock({ tool: o || i });
    return this._blocks[e] = s, this.blockDidMutated(Ve, s, {
      index: e
    }), t ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, s;
  }
  /**
   * Always inserts at the end
   *
   * @returns {Block}
   */
  insertAtEnd() {
    return this.currentBlockIndex = this.blocks.length - 1, this.insert();
  }
  /**
   * Merge two blocks
   *
   * @param {Block} targetBlock - previous block will be append to this block
   * @param {Block} blockToMerge - block that will be merged with target block
   * @returns {Promise} - the sequence that can be continued
   */
  async mergeBlocks(e, t) {
    const o = this._blocks.indexOf(t);
    if (t.isEmpty)
      return;
    const i = await t.data;
    Y(i) || await e.mergeWith(i), this.removeBlock(o), this.currentBlockIndex = this._blocks.indexOf(e);
  }
  /**
   * Remove block with passed index or remove last
   *
   * @param {number|null} index - index of Block to remove
   * @throws {Error} if Block to remove is not found
   */
  removeBlock(e = this.currentBlockIndex) {
    if (!this.validateIndex(e))
      throw new Error("Can't find a Block to remove");
    const t = this._blocks[e];
    t.destroy(), this._blocks.remove(e), this.blockDidMutated(Xe, t, {
      index: e
    }), this.currentBlockIndex >= e && this.currentBlockIndex--, this.blocks.length ? e === 0 && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, this.insert());
  }
  /**
   * Remove only selected Blocks
   * and returns first Block index where started removing...
   *
   * @returns {number|undefined}
   */
  removeSelectedBlocks() {
    let e;
    for (let t = this.blocks.length - 1; t >= 0; t--)
      this.blocks[t].selected && (this.removeBlock(t), e = t);
    return e;
  }
  /**
   * Attention!
   * After removing insert the new default typed Block and focus on it
   * Removes all blocks
   */
  removeAllBlocks() {
    for (let e = this.blocks.length - 1; e >= 0; e--)
      this._blocks.remove(e);
    this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
  }
  /**
   * Split current Block
   * 1. Extract content from Caret position to the Block`s end
   * 2. Insert a new Block below current one with extracted content
   *
   * @returns {Block}
   */
  split(e) {
    const t = this.Editor.Caret.extractFragmentFromCaretPosition(), o = d.make("div");
    o.appendChild(t);
    const i = {
      text: d.isEmpty(o) ? "" : o.innerHTML
    };
    return this.insert({ data: i, tool: e });
  }
  /**
   * Returns Block by passed index
   *
   * @param {number} index - index to get. -1 to get last
   * @returns {Block}
   */
  getBlockByIndex(e) {
    return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
  }
  /**
   * Returns an index for passed Block
   *
   * @param block - block to find index
   */
  getBlockIndex(e) {
    return this._blocks.indexOf(e);
  }
  /**
   * Returns the Block by passed id
   *
   * @param id - id of block to get
   * @returns {Block}
   */
  getBlockById(e) {
    return this._blocks.array.find((t) => t.id === e);
  }
  /**
   * Get Block instance by html element
   *
   * @param {Node} element - html element to get Block by
   */
  getBlock(e) {
    d.isElement(e) || (e = e.parentNode);
    const t = this._blocks.nodes, o = e.closest(`.${_.CSS.wrapper}`), i = t.indexOf(o);
    if (i >= 0)
      return this._blocks[i];
  }
  /**
   * Remove selection from all Blocks then highlight only Current Block
   */
  highlightCurrentNode() {
    this.clearFocused(), this.currentBlock.focused = !0;
  }
  /**
   * Remove selection from all Blocks
   */
  clearFocused() {
    this.blocks.forEach((e) => {
      e.focused = !1;
    });
  }
  /**
   * 1) Find first-level Block from passed child Node
   * 2) Mark it as current
   *
   * @param {Node} childNode - look ahead from this node.
   * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
   */
  setCurrentBlockByChildNode(e) {
    d.isElement(e) || (e = e.parentNode);
    const t = e.closest(
      `.${_.CSS.wrapper}`
    );
    if (!t)
      return;
    const o = t.closest(
      `.${this.Editor.UI.CSS.editorWrapper}`
    );
    if (o != null && o.isEqualNode(
      this.Editor.UI.nodes.wrapper
    ))
      return this.currentBlockIndex = this._blocks.nodes.indexOf(
        t
      ), this.currentBlock.updateCurrentInput(), this.currentBlock;
  }
  /**
   * Return block which contents passed node
   *
   * @param {Node} childNode - node to get Block by
   * @returns {Block}
   */
  getBlockByChildNode(e) {
    d.isElement(e) || (e = e.parentNode);
    const t = e.closest(
      `.${_.CSS.wrapper}`
    );
    return this.blocks.find((o) => o.holder === t);
  }
  /**
   * Swap Blocks Position
   *
   * @param {number} fromIndex - index of first block
   * @param {number} toIndex - index of second block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    this._blocks.swap(e, t), this.currentBlockIndex = t;
  }
  /**
   * Move a block to a new index
   *
   * @param {number} toIndex - index where to move Block
   * @param {number} fromIndex - index of Block to move
   */
  move(e, t = this.currentBlockIndex) {
    if (isNaN(e) || isNaN(t)) {
      C("Warning during 'move' call: incorrect indices provided.", "warn");
      return;
    }
    if (!this.validateIndex(e) || !this.validateIndex(t)) {
      C(
        "Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.",
        "warn"
      );
      return;
    }
    this._blocks.move(e, t), this.currentBlockIndex = e, this.blockDidMutated(Go, this.currentBlock, {
      fromIndex: t,
      toIndex: e
    });
  }
  /**
   * Sets current Block Index -1 which means unknown
   * and clear highlights
   */
  dropPointer() {
    this.currentBlockIndex = -1, this.clearFocused();
  }
  /**
   * Clears Editor
   *
   * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
   *                                             we don't need to add an empty default block
   *                                        2) in api.blocks.clear we should add empty block
   */
  clear(e = !1) {
    this._blocks.removeAll(), this.dropPointer(), e && this.insert(), this.Editor.UI.checkEmptiness();
  }
  /**
   * Cleans up all the block tools' resources
   * This is called when editor is destroyed
   */
  async destroy() {
    await Promise.all(
      this.blocks.map((e) => e.destroy())
    );
  }
  /**
   * Bind Block events
   *
   * @param {Block} block - Block to which event should be bound
   */
  bindBlockEvents(e) {
    const { BlockEvents: t } = this.Editor;
    this.readOnlyMutableListeners.on(
      e.holder,
      "keydown",
      (o) => {
        t.keydown(o);
      }
    ), this.readOnlyMutableListeners.on(
      e.holder,
      "keyup",
      (o) => {
        t.keyup(o);
      }
    ), this.readOnlyMutableListeners.on(
      e.holder,
      "dragover",
      (o) => {
        t.dragOver(o);
      }
    ), this.readOnlyMutableListeners.on(
      e.holder,
      "dragleave",
      (o) => {
        t.dragLeave(o);
      }
    ), e.on("didMutated", (o) => this.blockDidMutated(qo, o, {
      index: this.getBlockIndex(o)
    }));
  }
  /**
   * Disable mutable handlers and bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Enables all module handlers and bindings for all Blocks
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(
      document,
      "cut",
      (e) => this.Editor.BlockEvents.handleCommandX(e)
    ), this.blocks.forEach((e) => {
      this.bindBlockEvents(e);
    });
  }
  /**
   * Validates that the given index is not lower than 0 or higher than the amount of blocks
   *
   * @param {number} index - index of blocks array to validate
   * @returns {boolean}
   */
  validateIndex(e) {
    return !(e < 0 || e >= this._blocks.length);
  }
  /**
   * Block mutation callback
   *
   * @param mutationType - what happened with block
   * @param block - mutated block
   * @param detailData - additional data to pass with change event
   */
  blockDidMutated(e, t, o) {
    const i = new CustomEvent(e, {
      detail: {
        target: new he(t),
        ...o
      }
    });
    return this.eventsDispatcher.emit(st, {
      event: i
    }), t;
  }
}
class Qo extends y {
  constructor() {
    super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
  }
  /**
   * Sanitizer Config
   *
   * @returns {SanitizerConfig}
   */
  get sanitizerConfig() {
    return {
      p: {},
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      ol: {},
      ul: {},
      li: {},
      br: !0,
      img: {
        src: !0,
        width: !0,
        height: !0
      },
      a: {
        href: !0
      },
      b: {},
      i: {},
      u: {}
    };
  }
  /**
   * Flag that identifies all Blocks selection
   *
   * @returns {boolean}
   */
  get allBlocksSelected() {
    const { BlockManager: e } = this.Editor;
    return e.blocks.every((t) => t.selected === !0);
  }
  /**
   * Set selected all blocks
   *
   * @param {boolean} state - state to set
   */
  set allBlocksSelected(e) {
    const { BlockManager: t } = this.Editor;
    t.blocks.forEach((o) => {
      o.selected = e;
    }), this.clearCache();
  }
  /**
   * Flag that identifies any Block selection
   *
   * @returns {boolean}
   */
  get anyBlockSelected() {
    const { BlockManager: e } = this.Editor;
    return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some(
      (t) => t.selected === !0
    )), this.anyBlockSelectedCache;
  }
  /**
   * Return selected Blocks array
   *
   * @returns {Block[]}
   */
  get selectedBlocks() {
    return this.Editor.BlockManager.blocks.filter(
      (e) => e.selected
    );
  }
  /**
   * Module Preparation
   * Registers Shortcuts CMD+A and CMD+C
   * to select all and copy them
   */
  prepare() {
    this.selection = new b(), se.add({
      name: "CMD+A",
      handler: (e) => {
        const { BlockManager: t, ReadOnly: o } = this.Editor;
        if (o.isEnabled) {
          e.preventDefault(), this.selectAllBlocks();
          return;
        }
        t.currentBlock && this.handleCommandA(e);
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  /**
   * Toggle read-only state
   *
   *  - Remove all ranges
   *  - Unselect all Blocks
   */
  toggleReadOnly() {
    b.get().removeAllRanges(), this.allBlocksSelected = !1;
  }
  /**
   * Remove selection of Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  unSelectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor;
    let o;
    isNaN(e) ? o = t.currentBlock : o = t.getBlockByIndex(e), o.selected = !1, this.clearCache();
  }
  /**
   * Clear selection from Blocks
   *
   * @param {Event} reason - event caused clear of selection
   * @param {boolean} restoreSelection - if true, restore saved selection
   */
  clearSelection(e, t = !1) {
    const { BlockManager: o, Caret: i, RectangleSelection: s } = this.Editor;
    this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
    const n = e && e instanceof KeyboardEvent, a = n && Ge(e.keyCode);
    if (this.anyBlockSelected && n && a && !b.isSelectionExists) {
      const l = o.removeSelectedBlocks();
      o.insertDefaultBlockAtIndex(l, !0), i.setToBlock(o.currentBlock), te(() => {
        const c = e.key;
        i.insertContentAtCaretPosition(c.length > 1 ? "" : c);
      }, 20)();
    }
    if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || s.isRectActivated()) {
      this.Editor.RectangleSelection.clearSelection(), this.Editor.InlineToolbar.close();
      return;
    }
    t && this.selection.restore(), this.allBlocksSelected = !1;
  }
  /**
   * Reduce each Block and copy its content
   *
   * @param {ClipboardEvent} e - copy/cut event
   * @returns {Promise<void>}
   */
  copySelectedBlocks(e) {
    e.preventDefault();
    const t = d.make("div");
    this.selectedBlocks.forEach((s) => {
      const n = K(s.holder.innerHTML, this.sanitizerConfig), a = d.make("p");
      a.innerHTML = n, t.appendChild(a);
    });
    const o = Array.from(t.childNodes).map((s) => s.textContent).join(`

`), i = t.innerHTML;
    return e.clipboardData.setData("text/plain", o), e.clipboardData.setData("text/html", i), Promise.all(this.selectedBlocks.map((s) => s.save())).then(
      (s) => {
        try {
          e.clipboardData.setData(
            this.Editor.Paste.MIME_TYPE,
            JSON.stringify(s)
          );
        } catch {
        }
      }
    );
  }
  /**
   * select Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  selectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor;
    t.clearFocused();
    let o;
    isNaN(e) ? o = t.currentBlock : o = t.getBlockByIndex(e), this.selection.save(), b.get().removeAllRanges(), o.selected = !0, this.clearCache();
  }
  /**
   * Clear anyBlockSelected cache
   */
  clearCache() {
    this.anyBlockSelectedCache = null;
  }
  /**
   * Module destruction
   * De-registers Shortcut CMD+A
   */
  destroy() {
    se.remove(this.Editor.UI.nodes.redactor, "CMD+A");
  }
  /**
   * First CMD+A selects all input content by native behaviour,
   * next CMD+A keypress selects all blocks
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  handleCommandA(e) {
    if (this.Editor.RectangleSelection.clearSelection(), d.isNativeInput(e.target) && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    const t = this.Editor.BlockManager.getBlock(
      e.target
    ), o = t == null ? void 0 : t.inputs;
    if ((o == null ? void 0 : o.length) > 1 && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    if ((o == null ? void 0 : o.length) === 1 && !this.needToSelectAll) {
      this.needToSelectAll = !0;
      return;
    }
    this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlockByIndex(), this.needToSelectAll = !0);
  }
  /**
   * Select All Blocks
   * Each Block has selected setter that makes Block copyable
   */
  selectAllBlocks() {
    this.selection.save(), b.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.open(!0, !0, !0);
  }
}
class xe extends y {
  /**
   * Allowed caret positions in input
   *
   * @static
   * @returns {{START: string, END: string, DEFAULT: string}}
   */
  get positions() {
    return {
      START: "start",
      END: "end",
      DEFAULT: "default"
    };
  }
  /**
   * Elements styles that can be useful for Caret Module
   */
  static get CSS() {
    return {
      shadowCaret: "cdx-shadow-caret"
    };
  }
  /**
   * Get's deepest first node and checks if offset is zero
   *
   * @returns {boolean}
   */
  get isAtStart() {
    const e = b.get(), t = d.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput);
    let o = e.focusNode;
    if (d.isNativeInput(t))
      return t.selectionEnd === 0;
    if (!e.anchorNode)
      return !1;
    let i = o.textContent.search(/\S/);
    i === -1 && (i = 0);
    let s = e.focusOffset;
    return o.nodeType !== Node.TEXT_NODE && o.childNodes.length && (o.childNodes[s] ? (o = o.childNodes[s], s = 0) : (o = o.childNodes[s - 1], s = o.textContent.length)), (d.isLineBreakTag(t) || d.isEmpty(t)) && this.getHigherLevelSiblings(o, "left").every((l) => {
      const c = d.isLineBreakTag(l), u = l.children.length === 1 && d.isLineBreakTag(l.children[0]), h = c || u;
      return d.isEmpty(l) && !h;
    }) && s === i ? !0 : t === null || o === t && s <= i;
  }
  /**
   * Get's deepest last node and checks if offset is last node text length
   *
   * @returns {boolean}
   */
  get isAtEnd() {
    const e = b.get();
    let t = e.focusNode;
    const o = d.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, !0);
    if (d.isNativeInput(o))
      return o.selectionEnd === o.value.length;
    if (!e.focusNode)
      return !1;
    let i = e.focusOffset;
    if (t.nodeType !== Node.TEXT_NODE && t.childNodes.length && (t.childNodes[i - 1] ? (t = t.childNodes[i - 1], i = t.textContent.length) : (t = t.childNodes[0], i = 0)), d.isLineBreakTag(o) || d.isEmpty(o)) {
      const n = this.getHigherLevelSiblings(t, "right");
      if (n.every((l, c) => c === n.length - 1 && d.isLineBreakTag(l) || d.isEmpty(l) && !d.isLineBreakTag(l)) && i === t.textContent.length)
        return !0;
    }
    const s = o.textContent.replace(/\s+$/, "");
    return t === o && i >= s.length;
  }
  /**
   * Method gets Block instance and puts caret to the text node with offset
   * There two ways that method applies caret position:
   *   - first found text node: sets at the beginning, but you can pass an offset
   *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
   *
   * @param {Block} block - Block class
   * @param {string} position - position where to set caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */
  setToBlock(e, t = this.positions.DEFAULT, o = 0) {
    const { BlockManager: i } = this.Editor;
    let s;
    switch (t) {
      case this.positions.START:
        s = e.firstInput;
        break;
      case this.positions.END:
        s = e.lastInput;
        break;
      default:
        s = e.currentInput;
    }
    if (!s)
      return;
    const n = d.getDeepestNode(s, t === this.positions.END), a = d.getContentLength(n);
    switch (!0) {
      case t === this.positions.START:
        o = 0;
        break;
      case t === this.positions.END:
      case o > a:
        o = a;
        break;
    }
    te(() => {
      this.set(n, o);
    }, 20)(), i.setCurrentBlockByChildNode(e.holder), i.currentBlock.currentInput = s;
  }
  /**
   * Set caret to the current input of current Block.
   *
   * @param {HTMLElement} input - input where caret should be set
   * @param {string} position - position of the caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */
  setToInput(e, t = this.positions.DEFAULT, o = 0) {
    const { currentBlock: i } = this.Editor.BlockManager, s = d.getDeepestNode(e);
    switch (t) {
      case this.positions.START:
        this.set(s, 0);
        break;
      case this.positions.END:
        this.set(s, d.getContentLength(s));
        break;
      default:
        o && this.set(s, o);
    }
    i.currentInput = e;
  }
  /**
   * Creates Document Range and sets caret to the element with offset
   *
   * @param {HTMLElement} element - target node.
   * @param {number} offset - offset
   */
  set(e, t = 0) {
    const { top: o, bottom: i } = b.setCursor(e, t), { innerHeight: s } = window;
    o < 0 && window.scrollBy(0, o), i > s && window.scrollBy(0, i - s);
  }
  /**
   * Set Caret to the last Block
   * If last block is not empty, append another empty block
   */
  setToTheLastBlock() {
    const e = this.Editor.BlockManager.lastBlock;
    if (e)
      if (e.tool.isDefault && e.isEmpty)
        this.setToBlock(e);
      else {
        const t = this.Editor.BlockManager.insertAtEnd();
        this.setToBlock(t);
      }
  }
  /**
   * Extract content fragment of current Block from Caret position to the end of the Block
   */
  extractFragmentFromCaretPosition() {
    const e = b.get();
    if (e.rangeCount) {
      const t = e.getRangeAt(0), o = this.Editor.BlockManager.currentBlock.currentInput;
      if (t.deleteContents(), o)
        if (d.isNativeInput(o)) {
          const i = o, s = document.createDocumentFragment(), n = i.value.substring(0, i.selectionStart), a = i.value.substring(i.selectionStart);
          return s.textContent = a, i.value = n, s;
        } else {
          const i = t.cloneRange();
          return i.selectNodeContents(o), i.setStart(t.endContainer, t.endOffset), i.extractContents();
        }
    }
  }
  /**
   * Set's caret to the next Block or Tool`s input
   * Before moving caret, we should check if caret position is at the end of Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @returns {boolean}
   */
  navigateNext() {
    const { BlockManager: e } = this.Editor, { currentBlock: t, nextContentfulBlock: o } = e, { nextInput: i } = t, s = this.isAtEnd;
    let n = o;
    if (!n && !i) {
      if (t.tool.isDefault || !s)
        return !1;
      n = e.insertAtEnd();
    }
    return s ? (i ? this.setToInput(i, this.positions.START) : this.setToBlock(n, this.positions.START), !0) : !1;
  }
  /**
   * Set's caret to the previous Tool`s input or Block
   * Before moving caret, we should check if caret position is start of the Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @returns {boolean}
   */
  navigatePrevious() {
    const { currentBlock: e, previousContentfulBlock: t } = this.Editor.BlockManager;
    if (!e)
      return !1;
    const { previousInput: o } = e;
    return !t && !o ? !1 : this.isAtStart ? (o ? this.setToInput(o, this.positions.END) : this.setToBlock(t, this.positions.END), !0) : !1;
  }
  /**
   * Inserts shadow element after passed element where caret can be placed
   *
   * @param {Element} element - element after which shadow caret should be inserted
   */
  createShadow(e) {
    const t = document.createElement("span");
    t.classList.add(xe.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t);
  }
  /**
   * Restores caret position
   *
   * @param {HTMLElement} element - element where caret should be restored
   */
  restoreCaret(e) {
    const t = e.querySelector(`.${xe.CSS.shadowCaret}`);
    if (!t)
      return;
    new b().expandToTag(t), setTimeout(() => {
      const i = document.createRange();
      i.selectNode(t), i.extractContents();
    }, 50);
  }
  /**
   * Inserts passed content at caret position
   *
   * @param {string} content - content to insert
   */
  insertContentAtCaretPosition(e) {
    const t = document.createDocumentFragment(), o = document.createElement("div"), i = b.get(), s = b.range;
    o.innerHTML = e, Array.from(o.childNodes).forEach((l) => t.appendChild(l)), t.childNodes.length === 0 && t.appendChild(new Text());
    const n = t.lastChild;
    s.deleteContents(), s.insertNode(t);
    const a = document.createRange();
    a.setStart(n, n.textContent.length), i.removeAllRanges(), i.addRange(a);
  }
  /**
   * Get all first-level (first child of [contenteditable]) siblings from passed node
   * Then you can check it for emptiness
   *
   * @example
   * <div contenteditable>
   * <p></p>                            |
   * <p></p>                            | left first-level siblings
   * <p></p>                            |
   * <blockquote><a><b>adaddad</b><a><blockquote>       <-- passed node for example <b>
   * <p></p>                            |
   * <p></p>                            | right first-level siblings
   * <p></p>                            |
   * </div>
   * @param {HTMLElement} from - element from which siblings should be searched
   * @param {'left' | 'right'} direction - direction of search
   * @returns {HTMLElement[]}
   */
  getHigherLevelSiblings(e, t) {
    let o = e;
    const i = [];
    for (; o.parentNode && o.parentNode.contentEditable !== "true"; )
      o = o.parentNode;
    const s = t === "left" ? "previousSibling" : "nextSibling";
    for (; o[s]; )
      o = o[s], i.push(o);
    return i;
  }
}
class ei extends y {
  constructor() {
    super(...arguments), this.onMouseUp = () => {
      this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
    }, this.onMouseOver = (e) => {
      const { BlockManager: t, BlockSelection: o } = this.Editor, i = t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, s = t.getBlockByChildNode(e.target);
      if (!(!i || !s) && s !== i) {
        if (i === this.firstSelectedBlock) {
          b.get().removeAllRanges(), i.selected = !0, s.selected = !0, o.clearCache();
          return;
        }
        if (s === this.firstSelectedBlock) {
          i.selected = !1, s.selected = !1, o.clearCache();
          return;
        }
        this.toggleBlocksSelectedState(i, s), this.lastSelectedBlock = s;
      }
    };
  }
  /**
   * Module preparation
   *
   * @returns {Promise}
   */
  async prepare() {
    this.listeners.on(document, "mousedown", (e) => {
      this.enableCrossBlockSelection(e);
    });
  }
  /**
   * Sets up listeners
   *
   * @param {MouseEvent} event - mouse down event
   */
  watchSelection(e) {
    if (e.button !== Rt.LEFT)
      return;
    const { BlockManager: t } = this.Editor;
    this.firstSelectedBlock = t.getBlock(
      e.target
    ), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
  }
  /**
   * return boolean is cross block selection started
   */
  get isCrossBlockSelectionStarted() {
    return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
  }
  /**
   * Change selection state of the next Block
   * Used for CBS via Shift + arrow keys
   *
   * @param {boolean} next - if true, toggle next block. Previous otherwise
   */
  toggleBlockSelectedState(e = !0) {
    const { BlockManager: t, BlockSelection: o } = this.Editor;
    this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, o.clearCache(), b.get().removeAllRanges());
    const i = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), s = t.blocks[i];
    s && (this.lastSelectedBlock.selected !== s.selected ? (s.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, o.clearCache()), this.lastSelectedBlock = s, this.Editor.InlineToolbar.close(), s.holder.scrollIntoView({
      block: "nearest"
    }));
  }
  /**
   * Clear saved state
   *
   * @param {Event} reason - event caused clear of selection
   */
  clear(e) {
    const { BlockManager: t, BlockSelection: o, Caret: i } = this.Editor, s = t.blocks.indexOf(this.firstSelectedBlock), n = t.blocks.indexOf(this.lastSelectedBlock);
    if (o.anyBlockSelected && s > -1 && n > -1)
      if (e && e instanceof KeyboardEvent)
        switch (e.keyCode) {
          case v.DOWN:
          case v.RIGHT:
            i.setToBlock(
              t.blocks[Math.max(s, n)],
              i.positions.END
            );
            break;
          case v.UP:
          case v.LEFT:
            i.setToBlock(
              t.blocks[Math.min(s, n)],
              i.positions.START
            );
            break;
          default:
            i.setToBlock(
              t.blocks[Math.max(s, n)],
              i.positions.END
            );
        }
      else
        i.setToBlock(
          t.blocks[Math.max(s, n)],
          i.positions.END
        );
    this.firstSelectedBlock = this.lastSelectedBlock = null;
  }
  /**
   * Enables Cross Block Selection
   *
   * @param {MouseEvent} event - mouse down event
   */
  enableCrossBlockSelection(e) {
    const { UI: t } = this.Editor;
    b.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Change blocks selection state between passed two blocks.
   *
   * @param {Block} firstBlock - first block in range
   * @param {Block} lastBlock - last block in range
   */
  toggleBlocksSelectedState(e, t) {
    const { BlockManager: o, BlockSelection: i } = this.Editor, s = o.blocks.indexOf(e), n = o.blocks.indexOf(t), a = e.selected !== t.selected;
    for (let l = Math.min(s, n); l <= Math.max(s, n); l++) {
      const c = o.blocks[l];
      c !== this.firstSelectedBlock && c !== (a ? e : t) && (o.blocks[l].selected = !o.blocks[l].selected, i.clearCache());
    }
  }
}
class ti extends y {
  constructor() {
    super(...arguments), this.isStartedAtEditor = !1;
  }
  /**
   * Toggle read-only state
   *
   * if state is true:
   *  - disable all drag-n-drop event handlers
   *
   * if state is false:
   *  - restore drag-n-drop event handlers
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Add drag events listeners to editor zone
   */
  enableModuleBindings() {
    const { UI: e } = this.Editor;
    this.readOnlyMutableListeners.on(e.nodes.holder, "drop", async (t) => {
      await this.processDrop(t);
    }, !0), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", () => {
      this.processDragStart();
    }), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (t) => {
      this.processDragOver(t);
    }, !0);
  }
  /**
   * Unbind drag-n-drop event handlers
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Handle drop event
   *
   * @param {DragEvent} dropEvent - drop event
   */
  async processDrop(e) {
    const {
      BlockManager: t,
      Caret: o,
      Paste: i
    } = this.Editor;
    e.preventDefault(), t.blocks.forEach((n) => {
      n.dropTarget = !1;
    }), b.isAtEditor && !b.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1;
    const s = t.setCurrentBlockByChildNode(e.target);
    if (s)
      this.Editor.Caret.setToBlock(s, o.positions.END);
    else {
      const n = t.setCurrentBlockByChildNode(t.lastBlock.holder);
      this.Editor.Caret.setToBlock(n, o.positions.END);
    }
    await i.processDataTransfer(e.dataTransfer, !0);
  }
  /**
   * Handle drag start event
   */
  processDragStart() {
    b.isAtEditor && !b.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
  }
  /**
   * @param {DragEvent} dragEvent - drag event
   */
  processDragOver(e) {
    e.preventDefault();
  }
}
class oi extends y {
  /**
   * Prepare the module
   *
   * @param options - options used by the modification observer module
   * @param options.config - Editor configuration object
   * @param options.eventsDispatcher - common Editor event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.disabled = !1, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */ new Map(), this.batchTime = 400, this.mutationObserver = new MutationObserver((o) => {
      this.redactorChanged(o);
    }), this.eventsDispatcher.on(st, (o) => {
      this.particularBlockChanged(o.event);
    }), this.eventsDispatcher.on(nt, () => {
      this.disable();
    }), this.eventsDispatcher.on(rt, () => {
      this.enable();
    });
  }
  /**
   * Enables onChange event
   */
  enable() {
    this.mutationObserver.observe(
      this.Editor.UI.nodes.redactor,
      {
        childList: !0,
        subtree: !0,
        characterData: !0,
        attributes: !0
      }
    ), this.disabled = !1;
  }
  /**
   * Disables onChange event
   */
  disable() {
    this.mutationObserver.disconnect(), this.disabled = !0;
  }
  /**
   * Call onChange event passed to Editor.js configuration
   *
   * @param event - some of our custom change events
   */
  particularBlockChanged(e) {
    this.disabled || !I(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(() => {
      let t;
      this.batchingOnChangeQueue.size === 1 ? t = this.batchingOnChangeQueue.values().next().value : t = Array.from(this.batchingOnChangeQueue.values()), this.config.onChange && this.config.onChange(this.Editor.API.methods, t), this.batchingOnChangeQueue.clear();
    }, this.batchTime));
  }
  /**
   * Fired on every blocks wrapper dom change
   *
   * @param mutations - mutations happened
   */
  redactorChanged(e) {
    this.eventsDispatcher.emit(Me, {
      mutations: e
    });
  }
}
const Bt = class Et extends y {
  constructor() {
    super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (e) => {
      try {
        const t = e.create({}, {}, !1);
        if (e.pasteConfig === !1) {
          this.exceptionList.push(e.name);
          return;
        }
        if (!I(t.onPaste))
          return;
        this.getTagsConfig(e), this.getFilesConfig(e), this.getPatternsConfig(e);
      } catch (t) {
        C(
          `Paste handling for «${e.name}» Tool hasn't been set up because of the error`,
          "warn",
          t
        );
      }
    }, this.handlePasteEvent = async (e) => {
      const { BlockManager: t, Toolbar: o } = this.Editor;
      !t.currentBlock || this.isNativeBehaviour(e.target) && !e.clipboardData.types.includes("Files") || t.currentBlock && this.exceptionList.includes(t.currentBlock.name) || (e.preventDefault(), this.processDataTransfer(e.clipboardData), t.clearFocused(), o.close());
    };
  }
  /**
   * Set onPaste callback and collect tools` paste configurations
   */
  async prepare() {
    this.processTools();
  }
  /**
   * Set read-only state
   *
   * @param {boolean} readOnlyEnabled - read only flag value
   */
  toggleReadOnly(e) {
    e ? this.unsetCallback() : this.setCallback();
  }
  /**
   * Handle pasted or dropped data transfer object
   *
   * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
   * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
   */
  async processDataTransfer(e, t = !1) {
    const { Tools: o } = this.Editor, i = e.types;
    if ((i.includes ? i.includes("Files") : i.contains("Files")) && !Y(this.toolsFiles)) {
      await this.processFiles(e.files);
      return;
    }
    const n = e.getData(this.MIME_TYPE), a = e.getData("text/plain");
    let l = e.getData("text/html");
    if (n)
      try {
        this.insertEditorJSData(JSON.parse(n));
        return;
      } catch {
      }
    const c = a.trim().split(" ").map((p) => p.startsWith("http:") || p.startsWith("https:") ? `<a href="${p}">${p}</a>` : p);
    c.length === 1 && (l = c.join(" ")), t && a.trim() && l.trim() && (l = "<p>" + (l.trim() ? l : a) + "</p>");
    const u = Object.keys(this.toolsTags).reduce((p, g) => (p[g.toLowerCase()] = this.toolsTags[g].sanitizationConfig ?? {}, p), {}), h = Object.assign(
      {},
      u,
      o.getAllInlineToolsSanitizeConfig(),
      {
        br: {}
      }
    ), k = K(l, h).replaceAll("<p>", " <p> ").replaceAll("</p>", " </p> ").replaceAll("<li>", " <li> ").replaceAll("</li>", " </li> ").trim().split(" ").reduce(
      (p, g) => p + " " + (g.startsWith("http:") || g.startsWith("https:") ? `<a href="${g}">${g}</a>` : g),
      ""
    );
    !k.trim() || k.trim() === a ? await this.processText(a) : await this.processText(k, !0);
  }
  /**
   * Process pasted text and divide them into Blocks
   *
   * @param {string} data - text to process. Can be HTML or plain.
   * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
   */
  async processText(e, t = !1) {
    const { Caret: o, BlockManager: i } = this.Editor, s = t ? this.processHTML(e) : this.processPlain(e);
    if (!s.length)
      return;
    if (s.length === 1) {
      s[0].isBlock ? this.processSingleBlock(s.pop()) : this.processInlinePaste(s.pop());
      return;
    }
    const a = i.currentBlock && i.currentBlock.tool.isDefault && i.currentBlock.isEmpty;
    s.map(async (l, c) => this.insertBlock(l, c === 0 && a)), i.currentBlock && o.setToBlock(i.currentBlock, o.positions.END);
  }
  /**
   * Set onPaste callback handler
   */
  setCallback() {
    this.listeners.on(
      this.Editor.UI.nodes.holder,
      "paste",
      this.handlePasteEvent
    );
  }
  /**
   * Unset onPaste callback handler
   */
  unsetCallback() {
    this.listeners.off(
      this.Editor.UI.nodes.holder,
      "paste",
      this.handlePasteEvent
    );
  }
  /**
   * Get and process tool`s paste configs
   */
  processTools() {
    const e = this.Editor.Tools.blockTools;
    Array.from(e.values()).forEach(this.processTool);
  }
  /**
   * Get tags name list from either tag name or sanitization config.
   *
   * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
   * @returns {string[]} array of tags.
   */
  collectTagNames(e) {
    return G(e) ? [e] : D(e) ? Object.keys(e) : [];
  }
  /**
   * Get tags to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getTagsConfig(e) {
    if (e.pasteConfig === !1)
      return;
    const t = e.pasteConfig.tags || [], o = [];
    t.forEach((i) => {
      const s = this.collectTagNames(i);
      o.push(...s), s.forEach((n) => {
        if (Object.prototype.hasOwnProperty.call(this.toolsTags, n)) {
          C(
            `Paste handler for «${e.name}» Tool on «${n}» tag is skipped because it is already used by «${this.toolsTags[n].tool.name}» Tool.`,
            "warn"
          );
          return;
        }
        const a = D(i) ? i[n] : null;
        this.toolsTags[n.toUpperCase()] = {
          tool: e,
          sanitizationConfig: a
        };
      });
    }), this.tagsByTool[e.name] = o.map((i) => i.toUpperCase());
  }
  /**
   * Get files` types and extensions to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getFilesConfig(e) {
    if (e.pasteConfig === !1)
      return;
    const { files: t = {} } = e.pasteConfig;
    let { extensions: o, mimeTypes: i } = t;
    !o && !i || (o && !Array.isArray(o) && (C(
      `«extensions» property of the onDrop config for «${e.name}» Tool should be an array`
    ), o = []), i && !Array.isArray(i) && (C(
      `«mimeTypes» property of the onDrop config for «${e.name}» Tool should be an array`
    ), i = []), i && (i = i.filter((s) => Ht(s) ? !0 : (C(
      `MIME type value «${s}» for the «${e.name}» Tool is not a valid MIME type`,
      "warn"
    ), !1))), this.toolsFiles[e.name] = {
      extensions: o || [],
      mimeTypes: i || []
    });
  }
  /**
   * Get RegExp patterns to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getPatternsConfig(e) {
    e.pasteConfig === !1 || !e.pasteConfig.patterns || Y(e.pasteConfig.patterns) || Object.entries(e.pasteConfig.patterns).forEach(
      ([t, o]) => {
        o instanceof RegExp || C(
          `Pattern ${o} for «${e.name}» Tool is skipped because it should be a Regexp instance.`,
          "warn"
        ), this.toolsPatterns.push({
          key: t,
          pattern: o,
          tool: e
        });
      }
    );
  }
  /**
   * Check if browser behavior suits better
   *
   * @param {EventTarget} element - element where content has been pasted
   * @returns {boolean}
   */
  isNativeBehaviour(e) {
    return d.isNativeInput(e);
  }
  /**
   * Get files from data transfer object and insert related Tools
   *
   * @param {FileList} items - pasted or dropped items
   */
  async processFiles(e) {
    const { BlockManager: t } = this.Editor;
    let o;
    o = await Promise.all(
      Array.from(e).map((n) => this.processFile(n))
    ), o = o.filter((n) => !!n);
    const s = t.currentBlock.tool.isDefault && t.currentBlock.isEmpty;
    o.forEach((n, a) => {
      t.paste(
        n.type,
        n.event,
        a === 0 && s
      );
    });
  }
  /**
   * Get information about file and find Tool to handle it
   *
   * @param {File} file - file to process
   */
  async processFile(e) {
    const t = Ft(e), o = Object.entries(this.toolsFiles).find(([n, { mimeTypes: a, extensions: l }]) => {
      const [c, u] = e.type.split("/"), h = l.find(
        (k) => k.toLowerCase() === t.toLowerCase()
      ), f = a.find((k) => {
        const [p, g] = k.split("/");
        return p === c && (g === u || g === "*");
      });
      return !!h || !!f;
    });
    if (!o)
      return;
    const [i] = o;
    return {
      event: this.composePasteEvent("file", {
        file: e
      }),
      type: i
    };
  }
  /**
   * Split HTML string to blocks and return it as array of Block data
   *
   * @param {string} innerHTML - html string to process
   * @returns {PasteData[]}
   */
  processHTML(e) {
    const { Tools: t } = this.Editor, o = d.make("DIV");
    return o.innerHTML = e, this.getNodes(o).map((s) => {
      let n, a = t.defaultTool, l = !1;
      switch (s.nodeType) {
        case Node.DOCUMENT_FRAGMENT_NODE:
          n = d.make("div"), n.appendChild(s);
          break;
        case Node.ELEMENT_NODE:
          n = s, l = !0, this.toolsTags[n.tagName] && (a = this.toolsTags[n.tagName].tool);
          break;
      }
      const { tags: c } = a.pasteConfig || {
        tags: []
      }, u = c.reduce(
        (k, p) => (this.collectTagNames(p).forEach((M) => {
          const A = D(p) ? p[M] : null;
          k[M.toLowerCase()] = A || {};
        }), k),
        {}
      ), h = Object.assign(
        {},
        u,
        a.baseSanitizeConfig
      );
      if (n.tagName.toLowerCase() === "table") {
        const k = K(n.outerHTML, h);
        n = d.make("div", void 0, {
          innerHTML: k
        }).firstChild;
      } else
        n.innerHTML = K(n.innerHTML, h);
      const f = this.composePasteEvent("tag", {
        data: n
      });
      return {
        content: n,
        isBlock: l,
        tool: a.name,
        event: f
      };
    }).filter((s) => {
      const n = d.isEmpty(s.content), a = d.isSingleTag(s.content);
      return !n || a;
    });
  }
  /**
   * Split plain text by new line symbols and return it as array of Block data
   *
   * @param {string} plain - string to process
   * @returns {PasteData[]}
   */
  processPlain(e) {
    const { defaultBlock: t } = this.config;
    if (!e)
      return [];
    const o = t;
    return e.split(/\r?\n/).filter((i) => i.trim()).map((i) => {
      const s = d.make("div");
      s.textContent = i;
      const n = this.composePasteEvent("tag", {
        data: s
      });
      return {
        content: s,
        tool: o,
        isBlock: !1,
        event: n
      };
    });
  }
  /**
   * Process paste of single Block tool content
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processSingleBlock(e) {
    const { Caret: t, BlockManager: o } = this.Editor, { currentBlock: i } = o;
    if (!i || e.tool !== i.name || !d.containsOnlyInlineElements(e.content.innerHTML)) {
      this.insertBlock(
        e,
        (i == null ? void 0 : i.tool.isDefault) && i.isEmpty
      );
      return;
    }
    t.insertContentAtCaretPosition(e.content.innerHTML);
  }
  /**
   * Process paste to single Block:
   * 1. Find patterns` matches
   * 2. Insert new block if it is not the same type as current one
   * 3. Just insert text if there is no substitutions
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processInlinePaste(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { content: i } = e;
    if (t.currentBlock && t.currentBlock.tool.isDefault && i.textContent.length < Et.PATTERN_PROCESSING_MAX_LENGTH) {
      const n = await this.processPattern(i.textContent);
      if (n) {
        const a = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty, l = t.paste(
          n.tool,
          n.event,
          a
        );
        o.setToBlock(l, o.positions.END);
        return;
      }
    }
    if (t.currentBlock && t.currentBlock.currentInput) {
      const n = t.currentBlock.tool.baseSanitizeConfig;
      document.execCommand(
        "insertHTML",
        !1,
        K(i.innerHTML, n)
      );
    } else
      this.insertBlock(e);
  }
  /**
   * Get patterns` matches
   *
   * @param {string} text - text to process
   * @returns {Promise<{event: PasteEvent, tool: string}>}
   */
  async processPattern(e) {
    const t = this.toolsPatterns.find((i) => {
      const s = i.pattern.exec(e);
      return s ? e === s.shift() : !1;
    });
    return t ? {
      event: this.composePasteEvent("pattern", {
        key: t.key,
        data: e
      }),
      tool: t.tool.name
    } : void 0;
  }
  /**
   * Insert pasted Block content to Editor
   *
   * @param {PasteData} data - data to insert
   * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
   * @returns {void}
   */
  insertBlock(e, t = !1) {
    const { BlockManager: o, Caret: i } = this.Editor, { currentBlock: s } = o;
    let n;
    if (t && s && s.isEmpty) {
      n = o.paste(e.tool, e.event, !0), i.setToBlock(n, i.positions.END);
      return;
    }
    n = o.paste(e.tool, e.event), i.setToBlock(n, i.positions.END);
  }
  /**
   * Insert data passed as application/x-editor-js JSON
   *
   * @param {Array} blocks — Blocks' data to insert
   * @returns {void}
   */
  insertEditorJSData(e) {
    const { BlockManager: t, Caret: o, Tools: i } = this.Editor;
    ct(
      e,
      (n) => i.blockTools.get(n).sanitizeConfig
    ).forEach(({ tool: n, data: a }, l) => {
      let c = !1;
      l === 0 && (c = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty);
      const u = t.insert({
        tool: n,
        data: a,
        replace: c
      });
      o.setToBlock(u, o.positions.END);
    });
  }
  /**
   * Fetch nodes from Element node
   *
   * @param {Node} node - current node
   * @param {Node[]} nodes - processed nodes
   * @param {Node} destNode - destination node
   */
  processElementNode(e, t, o) {
    const i = Object.keys(this.toolsTags), s = e, { tool: n } = this.toolsTags[s.tagName] || {}, a = this.tagsByTool[n == null ? void 0 : n.name] || [], l = i.includes(s.tagName), c = d.blockElements.includes(
      s.tagName.toLowerCase()
    ), u = Array.from(s.children).some(
      ({ tagName: f }) => i.includes(f) && !a.includes(f)
    ), h = Array.from(s.children).some(
      ({ tagName: f }) => d.blockElements.includes(f.toLowerCase())
    );
    if (!c && !l && !u)
      return o.appendChild(s), [...t, o];
    if (l && !u || c && !h && !u)
      return [...t, o, s];
  }
  /**
   * Recursively divide HTML string to two types of nodes:
   * 1. Block element
   * 2. Document Fragments contained text and markup tags like a, b, i etc.
   *
   * @param {Node} wrapper - wrapper of paster HTML content
   * @returns {Node[]}
   */
  getNodes(e) {
    const t = Array.from(e.childNodes);
    let o;
    const i = (s, n) => {
      if (d.isEmpty(n) && !d.isSingleTag(n))
        return s;
      const a = s[s.length - 1];
      let l = new DocumentFragment();
      switch (a && d.isFragment(a) && (l = s.pop()), n.nodeType) {
        case Node.ELEMENT_NODE:
          if (o = this.processElementNode(
            n,
            s,
            l
          ), o)
            return o;
          break;
        case Node.TEXT_NODE:
          return l.appendChild(n), [...s, l];
        default:
          return [...s, l];
      }
      return [...s, ...Array.from(n.childNodes).reduce(i, [])];
    };
    return t.reduce(i, []);
  }
  /**
   * Compose paste event with passed type and detail
   *
   * @param {string} type - event type
   * @param {PasteEventDetail} detail - event detail
   */
  composePasteEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
};
Bt.PATTERN_PROCESSING_MAX_LENGTH = 450;
let ii = Bt;
class si extends y {
  constructor() {
    super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = !1;
  }
  /**
   * Returns state of read only mode
   */
  get isEnabled() {
    return this.readOnlyEnabled;
  }
  /**
   * Set initial state
   */
  async prepare() {
    const { Tools: e } = this.Editor, { blockTools: t } = e, o = [];
    Array.from(t.entries()).forEach(([i, s]) => {
      s.isReadOnlySupported || o.push(i);
    }), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly);
  }
  /**
   * Set read-only mode or toggle current state
   * Call all Modules `toggleReadOnly` method and re-render Editor
   *
   * @param {boolean} state - (optional) read-only state or toggle
   */
  async toggle(e = !this.readOnlyEnabled) {
    e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
    const t = this.readOnlyEnabled;
    this.readOnlyEnabled = e;
    for (const i in this.Editor)
      this.Editor[i].toggleReadOnly && this.Editor[i].toggleReadOnly(e);
    if (t === e)
      return this.readOnlyEnabled;
    const o = await this.Editor.Saver.save();
    return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(o.blocks), this.readOnlyEnabled;
  }
  /**
   * Throws an error about tools which don't support read-only mode
   */
  throwCriticalError() {
    throw new it(
      `To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`
    );
  }
}
class pe extends y {
  constructor() {
    super(...arguments), this.clientX = 0, this.clientY = 0, this.isRectSelectionActivated = !1, this.SCROLL_SPEED = 3, this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, this.MAIN_MOUSE_BUTTON = 0, this.mousedown = !1, this.isScrolling = !1, this.inScrollZone = null, this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], this.listenerIds = [];
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      overlay: "codex-editor-overlay",
      overlayContainer: "codex-editor-overlay__container",
      rect: "codex-editor-overlay__rectangle",
      topScrollZone: "codex-editor-overlay__scroll-zone--top",
      bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
    };
  }
  /**
   * Module Preparation
   * Creating rect and hang handlers
   */
  prepare() {
    this.enableModuleBindings();
  }
  /**
   * Init rect params
   *
   * @param {number} pageX - X coord of mouse
   * @param {number} pageY - Y coord of mouse
   */
  startSelection(e, t) {
    const o = document.elementFromPoint(
      e - window.pageXOffset,
      t - window.pageYOffset
    );
    o.closest(
      `.${this.Editor.Toolbar.CSS.toolbar}`
    ) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
    const s = [
      `.${_.CSS.content}`,
      `.${this.Editor.Toolbar.CSS.toolbar}`,
      `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
    ], n = o.closest(
      "." + this.Editor.UI.CSS.editorWrapper
    ), a = s.some(
      (l) => !!o.closest(l)
    );
    !n || a || (this.mousedown = !0, this.startX = e, this.startY = t);
  }
  /**
   * Clear all params to end selection
   */
  endSelection() {
    this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
  }
  /**
   * is RectSelection Activated
   */
  isRectActivated() {
    return this.isRectSelectionActivated;
  }
  /**
   * Mark that selection is end
   */
  clearSelection() {
    this.isRectSelectionActivated = !1;
  }
  /**
   * Custom by c98
   */
  getMousePosition() {
    return {
      x: this.clientX,
      y: this.clientY
    };
  }
  /**
   * Sets Module necessary event handlers
   */
  enableModuleBindings() {
    const { container: e } = this.genHTML();
    this.listeners.on(
      e,
      "mousedown",
      (t) => {
        this.processMouseDown(t);
      },
      !1
    ), this.listeners.on(
      document.body,
      "mousemove",
      Ce((t) => {
        this.processMouseMove(t);
      }, 10),
      {
        passive: !0
      }
    ), this.listeners.on(document.body, "mouseleave", () => {
      this.processMouseLeave();
    }), this.listeners.on(
      window,
      "scroll",
      Ce((t) => {
        this.processScroll(t);
      }, 10),
      {
        passive: !0
      }
    ), this.listeners.on(
      document.body,
      "mouseup",
      (t) => {
        this.processMouseUp(t);
      },
      !1
    );
  }
  /**
   * Handle mouse down events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseDown(e) {
    if (e.button !== this.MAIN_MOUSE_BUTTON)
      return;
    e.target.closest(d.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY);
  }
  /**
   * Handle mouse move events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseMove(e) {
    this.clientX = e.clientX, this.clientY = e.clientY, this.changingRectangle(e), this.scrollByZones(e.clientY);
  }
  /**
   * Handle mouse leave
   */
  processMouseLeave() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processScroll(e) {
    this.changingRectangle(e);
  }
  /**
   * Handle mouse up
   */
  processMouseUp(e) {
    this.clearSelection(), this.endSelection();
    const t = this.Editor.InlineToolbar.containsNode(
      e.target
    );
    this.Editor.BlockSelection.selectedBlocks.length > 1 && this.Editor.InlineToolbar.tryToShow(
      !1,
      !0,
      e,
      t
    );
  }
  /**
   * Scroll If mouse in scroll zone
   *
   * @param {number} clientY - Y coord of mouse
   */
  scrollByZones(e) {
    if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), !this.inScrollZone) {
      this.isScrolling = !1;
      return;
    }
    this.isScrolling || (this.scrollVertical(
      this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED
    ), this.isScrolling = !0);
  }
  /**
   * Generates required HTML elements
   *
   * @returns {Object<string, Element>}
   */
  genHTML() {
    const { UI: e } = this.Editor, t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o = d.make("div", pe.CSS.overlay, {}), i = d.make(
      "div",
      pe.CSS.overlayContainer,
      {}
    ), s = d.make("div", pe.CSS.rect, {});
    return i.appendChild(s), o.appendChild(i), t.appendChild(o), this.overlayRectangle = s, {
      container: t,
      overlay: o
    };
  }
  /**
   * Activates scrolling if blockSelection is active and mouse is in scroll zone
   *
   * @param {number} speed - speed of scrolling
   */
  scrollVertical(e) {
    if (!(this.inScrollZone && this.mousedown))
      return;
    const t = window.pageYOffset;
    window.scrollBy(0, e), this.mouseY += window.pageYOffset - t, setTimeout(() => {
      this.scrollVertical(e);
    }, 0);
  }
  /**
   * Handles the change in the rectangle and its effect
   *
   * @param {MouseEvent} event - mouse event
   */
  changingRectangle(e) {
    if (!this.mousedown)
      return;
    e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
    const { rightPos: t, leftPos: o, index: i } = this.genInfoForMouseSelection(), s = this.startX > t && this.mouseX > t, n = this.startX < o && this.mouseX < o;
    this.rectCrossesBlocks = !(s || n), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), i !== void 0 && (this.trySelectNextBlock(i), this.inverseSelection(), b.get().removeAllRanges());
  }
  /**
   * Shrink rect to singular point
   */
  shrinkRectangleToPoint() {
    this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
  }
  /**
   * Select or unselect all of blocks in array if rect is out or in selectable area
   */
  inverseSelection() {
    const t = this.Editor.BlockManager.getBlockByIndex(
      this.stackOfSelected[0]
    ).selected;
    if (this.rectCrossesBlocks && !t)
      for (const o of this.stackOfSelected)
        this.Editor.BlockSelection.selectBlockByIndex(o);
    if (!this.rectCrossesBlocks && t)
      for (const o of this.stackOfSelected)
        this.Editor.BlockSelection.unSelectBlockByIndex(o);
  }
  /**
   * Updates size of rectangle
   */
  updateRectangleSize() {
    this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
  }
  /**
   * Collects information needed to determine the behavior of the rectangle
   *
   * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
   */
  genInfoForMouseSelection() {
    const t = document.body.offsetWidth / 2, o = this.mouseY - window.pageYOffset, i = document.elementFromPoint(t, o), s = this.Editor.BlockManager.getBlockByChildNode(i);
    let n;
    s !== void 0 && (n = this.Editor.BlockManager.blocks.findIndex(
      (h) => h.holder === s.holder
    ));
    const a = this.Editor.BlockManager.lastBlock.holder.querySelector(
      "." + _.CSS.content
    ), l = Number.parseInt(window.getComputedStyle(a).width, 10) / 2, c = t - l, u = t + l;
    return {
      index: n,
      leftPos: c,
      rightPos: u
    };
  }
  /**
   * Select block with index index
   *
   * @param index - index of block in redactor
   */
  addBlockInSelection(e) {
    this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
  }
  /**
   * Adds a block to the selection and determines which blocks should be selected
   *
   * @param {object} index - index of new block in the reactor
   */
  trySelectNextBlock(e) {
    const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o = this.stackOfSelected.length, i = 1, s = -1, n = 0;
    if (t)
      return;
    const a = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0;
    let l = n;
    o > 1 && (l = a ? i : s);
    const c = e > this.stackOfSelected[o - 1] && l === i, u = e < this.stackOfSelected[o - 1] && l === s, f = !(c || u || l === n);
    if (!f && (e > this.stackOfSelected[o - 1] || this.stackOfSelected[o - 1] === void 0)) {
      let g = this.stackOfSelected[o - 1] + 1 || e;
      for (g; g <= e; g++)
        this.addBlockInSelection(g);
      return;
    }
    if (!f && e < this.stackOfSelected[o - 1]) {
      for (let g = this.stackOfSelected[o - 1] - 1; g >= e; g--)
        this.addBlockInSelection(g);
      return;
    }
    if (!f)
      return;
    let k = o - 1, p;
    for (e > this.stackOfSelected[o - 1] ? p = () => e > this.stackOfSelected[k] : p = () => e < this.stackOfSelected[k]; p(); )
      this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(
        this.stackOfSelected[k]
      ), this.stackOfSelected.pop(), k--;
  }
}
class ni extends y {
  /**
   * @typedef {object} RendererBlocks
   * @property {string} type - tool name
   * @property {object} data - tool data
   */
  /**
   * @example
   *
   * blocks: [
   *   {
   *     id   : 'oDe-EVrGWA',
   *     type : 'paragraph',
   *     data : {
   *       text : 'Hello from Codex!'
   *     }
   *   },
   *   {
   *     id   : 'Ld5BJjJCHs',
   *     type : 'paragraph',
   *     data : {
   *       text : 'Leave feedback if you like it!'
   *     }
   *   },
   * ]
   */
  /**
   * Make plugin blocks from array of plugin`s data
   *
   * @param {OutputBlockData[]} blocks - blocks to render
   */
  async render(e) {
    const t = e.map((i) => ({ function: () => this.insertBlock(i) }));
    this.Editor.ModificationsObserver.disable();
    const o = await qe(t);
    return this.Editor.ModificationsObserver.enable(), this.Editor.UI.checkEmptiness(), o;
  }
  /**
   * Get plugin instance
   * Add plugin instance to BlockManager
   * Insert block to working zone
   *
   * @param {object} item - Block data to insert
   * @returns {Promise<void>}
   */
  async insertBlock(e) {
    var l;
    const { Tools: t, BlockManager: o } = this.Editor, { type: i, data: s, tunes: n, id: a } = e;
    if (t.available.has(i))
      try {
        o.insert({
          id: a,
          tool: i,
          data: s,
          tunes: n
        });
      } catch (c) {
        throw C(`Block «${i}» skipped because of plugins error`, "warn", {
          data: s,
          error: c
        }), Error(c);
      }
    else {
      const c = {
        savedData: {
          id: a,
          type: i,
          data: s
        },
        title: i
      };
      if (t.unavailable.has(i)) {
        const f = (l = t.unavailable.get(i).toolbox[0]) == null ? void 0 : l.title;
        c.title = f || c.title;
      }
      const u = o.insert({
        id: a,
        tool: t.stubTool,
        data: c
      });
      u.stretched = !0, C(`Tool «${i}» is not found. Check 'tools' property at your initial Editor.js config.`, "warn");
    }
  }
}
class ri extends y {
  /**
   * Composes new chain of Promises to fire them alternatelly
   *
   * @returns {OutputData}
   */
  async save() {
    const { BlockManager: e, Tools: t } = this.Editor, o = e.blocks, i = [];
    try {
      o.forEach((a) => {
        i.push(this.getSavedData(a));
      });
      const s = await Promise.all(i), n = await ct(s, (a) => t.blockTools.get(a).sanitizeConfig);
      return this.makeOutput(n);
    } catch (s) {
      $("Saving failed due to the Error %o", "error", s);
    }
  }
  /**
   * Saves and validates
   *
   * @param {Block} block - Editor's Tool
   * @returns {ValidatedData} - Tool's validated data
   */
  async getSavedData(e) {
    const t = await e.save(), o = t && await e.validate(t.data);
    return {
      ...t,
      isValid: o
    };
  }
  /**
   * Creates output object with saved data, time and version of editor
   *
   * @param {ValidatedData} allExtractedData - data extracted from Blocks
   * @returns {OutputData}
   */
  makeOutput(e) {
    const t = [];
    return e.forEach(({ id: o, tool: i, data: s, tunes: n, time: a, isValid: l }) => {
      if (!l)
        return;
      if (i === this.Editor.Tools.stubTool) {
        t.push(s);
        return;
      }
      const c = {
        id: o,
        type: i,
        data: s,
        ...!Y(n) && {
          tunes: n
        }
      };
      t.push(c);
    }), {
      time: +/* @__PURE__ */ new Date(),
      blocks: t,
      version: "2.3.7"
    };
  }
}
(function() {
  try {
    if (typeof document < "u") {
      var r = document.createElement("style");
      r.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-paragraph[data-placeholder]:empty:before{content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:before{opacity:1}.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty:before,.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus:before{opacity:0}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(r);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const ai = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function li(r) {
  const e = document.createElement("div");
  e.innerHTML = r.trim();
  const t = document.createDocumentFragment();
  return t.append(...Array.from(e.childNodes)), t;
}
/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */
class Pe {
  /**
   * Default placeholder for Paragraph Tool
   *
   * @returns {string}
   * @class
   */
  static get DEFAULT_PLACEHOLDER() {
    return "";
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   * @param {boolean} readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this.api = o, this.readOnly = i, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-paragraph"
    }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t.placeholder ? t.placeholder : Pe.DEFAULT_PLACEHOLDER, this._data = e ?? {}, this._element = null, this._preserveBlank = t.preserveBlank ?? !1;
  }
  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(e) {
    if (e.code !== "Backspace" && e.code !== "Delete" || !this._element)
      return;
    const { textContent: t } = this._element;
    t === "" && (this._element.innerHTML = "");
  }
  /**
   * Create Tool's view
   *
   * @returns {HTMLDivElement}
   * @private
   */
  drawView() {
    const e = document.createElement("DIV");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = "false", e.dataset.placeholder = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = "true", e.addEventListener("keyup", this.onKeyUp)), e;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this._element = this.drawView(), this._element;
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {ParagraphData} data
   * @public
   */
  merge(e) {
    if (!this._element)
      return;
    this._data.text += e.text;
    const t = li(e.text);
    this._element.appendChild(t), this._element.normalize();
  }
  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return !(e.text.trim() === "" && !this._preserveBlank);
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML
    };
  }
  /**
   * On paste callback fired from Editor.
   *
   * @param {HTMLPasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = {
      text: e.detail.data.innerHTML
    };
    this._data = t, window.requestAnimationFrame(() => {
      this._element && (this._element.innerHTML = this._data.text || "");
    });
  }
  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   * @returns {ConversionConfig}
   */
  static get conversionConfig() {
    return {
      export: "text",
      // to convert Paragraph to other block, use 'text' property of saved data
      import: "text"
      // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }
  /**
   * Sanitizer rules
   * @returns {SanitizerConfig} - Edtior.js sanitizer config
   */
  static get sanitize() {
    return {
      text: {
        br: !0
      }
    };
  }
  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {PasteConfig} - Paragraph Paste Setting
   */
  static get pasteConfig() {
    return {
      tags: ["P"]
    };
  }
  /**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {ToolboxConfig} - Paragraph Toolbox Setting
   */
  static get toolbox() {
    return {
      icon: ai,
      title: "Text"
    };
  }
}
class Fe {
  /**
   * Create button for Inline Toolbar
   */
  constructor({ api: e }) {
    this.commandName = "bold", this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--bold"
    }, this.nodes = {
      button: void 0
    }, this.api = e, this.isActive = !1;
  }
  /**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      b: {}
    };
  }
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Co, this.nodes.button;
  }
  /**
   * Wrap range with <b> tag
   */
  surround() {
    this.isActive ? this.unwrap() : this.wrap(), this.api.blocks.getEditor().InlineToolbar.close();
  }
  wrap() {
    const e = this.api.blocks.getBlockSelected();
    e.length > 1 ? e.forEach(async (t) => {
      var i, s;
      const o = await t.data;
      if (t.name === "paragraph") {
        const n = {
          ...o,
          text: `<b>${(s = (i = o.text) == null ? void 0 : i.replace(/<b>/g, "")) == null ? void 0 : s.replace(/<\/b>/g, "")}</b>`
        };
        await this.api.blocks.update(t.id, n, {
          reSelectedAfterUpdate: !0
        });
      } else
        await this.api.blocks.update(t.id, o);
    }) : document.execCommand(this.commandName);
  }
  unwrap() {
    const e = this.api.blocks.getBlockSelected();
    e.length > 1 ? e.forEach(async (t) => {
      var i, s;
      const o = await t.data;
      if (t.name === "paragraph") {
        const n = {
          ...o,
          text: (s = (i = o.text) == null ? void 0 : i.replace(/<b>/g, "")) == null ? void 0 : s.replace(/<\/b>/g, "")
        };
        await this.api.blocks.update(t.id, n, {
          reSelectedAfterUpdate: !0
        });
      } else
        await this.api.blocks.update(t.id, o);
    }) : document.execCommand(this.commandName);
  }
  /**
   * Check selection and set activated state to button if there are <b> tag
   *
   * @returns {boolean}
   */
  checkState() {
    const e = document.queryCommandState(this.commandName);
    return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), this.isActive = e, e;
  }
  /**
   * Set a shortcut
   *
   * @returns {boolean}
   */
  get shortcut() {
    return "CMD+B";
  }
}
Fe.isInline = !0;
Fe.title = "Bold";
class He {
  constructor() {
    this.commandName = "italic", this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--italic"
    }, this.nodes = {
      button: null
    };
  }
  /**
   * Sanitizer Rule
   * Leave <i> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      i: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Lo, this.nodes.button;
  }
  /**
   * Wrap range with <i> tag
   */
  surround() {
    document.execCommand(this.commandName);
  }
  /**
   * Check selection and set activated state to button if there are <i> tag
   */
  checkState() {
    const e = document.queryCommandState(this.commandName);
    return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+I";
  }
}
He.isInline = !0;
He.title = "Italic";
class ze {
  /**
   * @param api - Editor.js API
   */
  constructor({ api: e }) {
    this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--link",
      buttonUnlink: "ce-inline-tool--unlink",
      input: "ce-inline-tool-input",
      inputShowed: "ce-inline-tool-input--showed"
    }, this.nodes = {
      button: null,
      input: null
    }, this.inputOpened = !1, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new b();
  }
  /**
   * Sanitizer Rule
   * Leave <a> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      a: {
        href: !0,
        target: "_blank",
        rel: "nofollow"
      }
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Ke, this.nodes.button;
  }
  /**
   * Input for the link
   */
  renderActions() {
    return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e) => {
      e.keyCode === this.ENTER_KEY && this.enterPressed(e);
    }), this.nodes.input;
  }
  /**
   * Handle clicks on the Inline Toolbar icon
   *
   * @param {Range} range - range to wrap with link
   */
  surround(e) {
    if (e) {
      this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
      const t = this.selection.findParentTag("A");
      if (t) {
        this.selection.expandToTag(t), this.unlink(), this.closeActions(), this.checkState(), this.toolbar.close();
        return;
      }
    }
    this.toggleActions();
  }
  /**
   * Check selection and set activated state to button if there are <a> tag
   */
  checkState() {
    const e = this.selection.findParentTag("A");
    if (e) {
      this.nodes.button.innerHTML = No, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
      const t = e.getAttribute("href");
      this.nodes.input.value = t !== "null" ? t : "", this.selection.save();
    } else
      this.nodes.button.innerHTML = Ke, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
    return !!e;
  }
  /**
   * Function called with Inline Toolbar closing
   */
  clear() {
    this.closeActions();
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+K";
  }
  /**
   * Show/close link input
   */
  toggleActions() {
    this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
  }
  /**
   * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
   */
  openActions(e = !1) {
    this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), this.inputOpened = !0;
  }
  /**
   * Close input
   *
   * @param {boolean} clearSavedSelection — we don't need to clear saved selection
   *                                        on toggle-clicks on the icon of opened Toolbar
   */
  closeActions(e = !0) {
    if (this.selection.isFakeBackgroundEnabled) {
      const t = new b();
      t.save(), this.selection.restore(), this.selection.removeFakeBackground(), t.restore();
    }
    this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = !1;
  }
  /**
   * Enter pressed on input
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  enterPressed(e) {
    let t = this.nodes.input.value || "";
    if (!t.trim()) {
      this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
      return;
    }
    if (!this.validateURL(t)) {
      this.notifier.show({
        message: "Pasted link is not valid.",
        style: "error"
      }), C("Incorrect Link pasted", "warn", t);
      return;
    }
    t = this.prepareLink(t), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
  }
  /**
   * Detects if passed string is URL
   *
   * @param {string} str - string to validate
   * @returns {boolean}
   */
  validateURL(e) {
    return !/\s/.test(e);
  }
  /**
   * Process link before injection
   * - sanitize
   * - add protocol for links like 'google.com'
   *
   * @param {string} link - raw user input
   */
  prepareLink(e) {
    return e = e.trim(), e = this.addProtocol(e), e;
  }
  /**
   * Add 'http' protocol to the links like 'vc.ru', 'google.com'
   *
   * @param {string} link - string to process
   */
  addProtocol(e) {
    if (/^(\w+):(\/\/)?/.test(e))
      return e;
    const t = /^\/[^/\s]/.test(e), o = e.substring(0, 1) === "#", i = /^\/\/[^/\s]/.test(e);
    return !t && !o && !i && (e = "http://" + e), e;
  }
  /**
   * Inserts <a> tag with "href"
   *
   * @param {string} link - "href" value
   */
  insertLink(e) {
    const t = this.selection.findParentTag("A");
    t && this.selection.expandToTag(t), document.execCommand(this.commandLink, !1, e);
  }
  /**
   * Removes <a> tag
   */
  unlink() {
    document.execCommand(this.commandUnlink);
  }
}
ze.isInline = !0;
ze.title = "Link";
class Tt {
  /**
   * @param options - constructor options
   * @param options.data - stub tool data
   * @param options.api - Editor.js API
   */
  constructor({ data: e, api: t }) {
    this.CSS = {
      wrapper: "ce-stub",
      info: "ce-stub__info",
      title: "ce-stub__title",
      subtitle: "ce-stub__subtitle"
    }, this.api = t, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e.savedData, this.wrapper = this.make();
  }
  /**
   * Returns stub holder
   *
   * @returns {HTMLElement}
   */
  render() {
    return this.wrapper;
  }
  /**
   * Return original Tool data
   *
   * @returns {BlockToolData}
   */
  save() {
    return this.savedData;
  }
  /**
   * Create Tool html markup
   *
   * @returns {HTMLElement}
   */
  make() {
    const e = d.make("div", this.CSS.wrapper), t = '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"><path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/></svg>', o = d.make("div", this.CSS.info), i = d.make("div", this.CSS.title, {
      textContent: this.title
    }), s = d.make("div", this.CSS.subtitle, {
      textContent: this.subtitle
    });
    return e.innerHTML = t, o.appendChild(i), o.appendChild(s), e.appendChild(o), e;
  }
}
Tt.isReadOnlySupported = !0;
class ci extends De {
  constructor() {
    super(...arguments), this.type = ye.Inline;
  }
  /**
   * Returns title for Inline Tool if specified by user
   */
  get title() {
    return this.constructable[Re.Title];
  }
  /**
   * Constructs new InlineTool instance from constructable
   */
  create() {
    return new this.constructable({
      api: this.api.getMethodsForTool(this),
      config: this.settings
    });
  }
}
class di extends De {
  constructor() {
    super(...arguments), this.type = ye.Tune;
  }
  /**
   * Constructs new BlockTune instance from constructable
   *
   * @param data - Tune data
   * @param block - Block API object
   */
  create(e, t) {
    return new this.constructable({
      api: this.api.getMethodsForTool(this),
      config: this.settings,
      block: t,
      data: e
    });
  }
}
class P extends Map {
  /**
   * Returns Block Tools collection
   */
  get blockTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isBlock());
    return new P(e);
  }
  /**
   * Returns Inline Tools collection
   */
  get inlineTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInline());
    return new P(e);
  }
  /**
   * Returns Block Tunes collection
   */
  get blockTunes() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isTune());
    return new P(e);
  }
  /**
   * Returns internal Tools collection
   */
  get internalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInternal);
    return new P(e);
  }
  /**
   * Returns Tools collection provided by user
   */
  get externalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => !t.isInternal);
    return new P(e);
  }
}
var hi = Object.defineProperty, ui = Object.getOwnPropertyDescriptor, Ct = (r, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? ui(e, t) : e, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (i = (o ? n(e, t, i) : n(i)) || i);
  return o && i && hi(e, t, i), i;
};
class Ue extends De {
  constructor() {
    super(...arguments), this.type = ye.Block, this.inlineTools = new P(), this.tunes = new P();
  }
  /**
   * Creates new Tool instance
   *
   * @param data - Tool data
   * @param block - BlockAPI for current Block
   * @param readOnly - True if Editor is in read-only mode
   */
  create(e, t, o) {
    return new this.constructable({
      data: e,
      block: t,
      readOnly: o,
      api: this.api.getMethodsForTool(this),
      config: this.settings
    });
  }
  /**
   * Returns true if read-only mode is supported by Tool
   */
  get isReadOnlySupported() {
    return this.constructable[ie.IsReadOnlySupported] === !0;
  }
  /**
   * Returns true if Tool supports linebreaks
   */
  get isLineBreaksEnabled() {
    return this.constructable[ie.IsEnabledLineBreaks];
  }
  /**
   * Returns Tool toolbox configuration (internal or user-specified).
   *
   * Merges internal and user-defined toolbox configs based on the following rules:
   *
   * - If both internal and user-defined toolbox configs are arrays their items are merged.
   * Length of the second one is kept.
   *
   * - If both are objects their properties are merged.
   *
   * - If one is an object and another is an array than internal config is replaced with user-defined
   * config. This is made to allow user to override default tool's toolbox representation (single/multiple entries)
   */
  get toolbox() {
    const e = this.constructable[ie.Toolbox], t = this.config[me.Toolbox];
    if (!Y(e) && t !== !1)
      return t ? Array.isArray(e) ? Array.isArray(t) ? t.map((o, i) => {
        const s = e[i];
        return s ? {
          ...s,
          ...o
        } : o;
      }) : [t] : Array.isArray(t) ? t : [
        {
          ...e,
          ...t
        }
      ] : Array.isArray(e) ? e : [e];
  }
  /**
   * Returns Tool conversion configuration
   */
  get conversionConfig() {
    return this.constructable[ie.ConversionConfig];
  }
  /**
   * Returns enabled inline tools for Tool
   */
  get enabledInlineTools() {
    return this.config[me.EnabledInlineTools] || !1;
  }
  /**
   * Returns enabled tunes for Tool
   */
  get enabledBlockTunes() {
    return this.config[me.EnabledBlockTunes];
  }
  /**
   * Returns Tool paste configuration
   */
  get pasteConfig() {
    return this.constructable[ie.PasteConfig] ?? {};
  }
  get sanitizeConfig() {
    const e = super.sanitizeConfig, t = this.baseSanitizeConfig;
    if (Y(e))
      return t;
    const o = {};
    for (const i in e)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        const s = e[i];
        D(s) ? o[i] = Object.assign({}, t, s) : o[i] = s;
      }
    return o;
  }
  get baseSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), e;
  }
}
Ct([
  ne
], Ue.prototype, "sanitizeConfig", 1);
Ct([
  ne
], Ue.prototype, "baseSanitizeConfig", 1);
class pi {
  /**
   * @class
   * @param config - tools config
   * @param editorConfig - EditorJS config
   * @param api - EditorJS API module
   */
  constructor(e, t, o) {
    this.api = o, this.config = e, this.editorConfig = t;
  }
  /**
   * Returns Tool object based on it's type
   *
   * @param name - tool name
   */
  get(e) {
    const { class: t, isInternal: o = !1, ...i } = this.config[e], s = this.getConstructor(t);
    return new s({
      name: e,
      constructable: t,
      config: i,
      api: this.api,
      isDefault: e === this.editorConfig.defaultBlock,
      defaultPlaceholder: this.editorConfig.placeholder,
      isInternal: o
    });
  }
  /**
   * Find appropriate Tool object constructor for Tool constructable
   *
   * @param constructable - Tools constructable
   */
  getConstructor(e) {
    switch (!0) {
      case e[Re.IsInline]:
        return ci;
      case e[yt.IsTune]:
        return di;
      default:
        return Ue;
    }
  }
}
class St {
  /**
   * MoveDownTune constructor
   *
   * @param {API} api — Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: ut,
      title: this.api.i18n.t("Move down"),
      onActivate: () => this.handleClick(),
      name: "move-down"
    };
  }
  /**
   * Handle clicks on 'move down' button
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e + 1);
    if (!t)
      throw new Error("Unable to move Block down since it is already the last");
    const o = t.holder, i = o.getBoundingClientRect();
    let s = Math.abs(window.innerHeight - o.offsetHeight);
    i.top < window.innerHeight && (s = window.scrollY + o.offsetHeight), window.scrollTo(0, s), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
St.isTune = !0;
class It {
  /**
   * DeleteTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: Io,
      title: this.api.i18n.t("Delete"),
      name: "delete",
      confirmation: {
        title: this.api.i18n.t("Click to delete"),
        onActivate: () => this.handleClick()
      }
    };
  }
  /**
   * Delete block conditions passed
   */
  handleClick() {
    this.api.blocks.delete();
  }
}
It.isTune = !0;
class Mt {
  /**
   * MoveUpTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: So,
      title: this.api.i18n.t("Move up"),
      onActivate: () => this.handleClick(),
      name: "move-up"
    };
  }
  /**
   * Move current block up
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e), o = this.api.blocks.getBlockByIndex(e - 1);
    if (e === 0 || !t || !o)
      throw new Error("Unable to move Block up since it is already the first");
    const i = t.holder, s = o.holder, n = i.getBoundingClientRect(), a = s.getBoundingClientRect();
    let l;
    a.top > 0 ? l = Math.abs(n.top) - Math.abs(a.top) : l = Math.abs(n.top) + a.height, window.scrollBy(0, -1 * l), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
Mt.isTune = !0;
var fi = Object.defineProperty, gi = Object.getOwnPropertyDescriptor, bi = (r, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? gi(e, t) : e, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (i = (o ? n(e, t, i) : n(i)) || i);
  return o && i && fi(e, t, i), i;
};
class Lt extends y {
  constructor() {
    super(...arguments), this.stubTool = "stub", this.toolsAvailable = new P(), this.toolsUnavailable = new P();
  }
  /**
   * Returns available Tools
   */
  get available() {
    return this.toolsAvailable;
  }
  /**
   * Returns unavailable Tools
   */
  get unavailable() {
    return this.toolsUnavailable;
  }
  /**
   * Return Tools for the Inline Toolbar
   */
  get inlineTools() {
    return this.available.inlineTools;
  }
  /**
   * Return editor block tools
   */
  get blockTools() {
    return this.available.blockTools;
  }
  /**
   * Return available Block Tunes
   *
   * @returns {object} - object of Inline Tool's classes
   */
  get blockTunes() {
    return this.available.blockTunes;
  }
  /**
   * Returns default Tool object
   */
  get defaultTool() {
    return this.blockTools.get(this.config.defaultBlock);
  }
  /**
   * Returns internal tools
   */
  get internal() {
    return this.available.internalTools;
  }
  /**
   * Creates instances via passed or default configuration
   *
   * @returns {Promise<void>}
   */
  async prepare() {
    if (this.validateTools(), this.config.tools = Se({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
      throw Error("Can't start without tools");
    const e = this.prepareConfig();
    this.factory = new pi(e, this.config, this.Editor.API);
    const t = this.getListOfPrepareFunctions(e);
    if (t.length === 0)
      return Promise.resolve();
    await qe(t, (o) => {
      this.toolPrepareMethodSuccess(o);
    }, (o) => {
      this.toolPrepareMethodFallback(o);
    }), this.prepareBlockTools();
  }
  getAllInlineToolsSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => {
      Object.assign(e, t.sanitizeConfig);
    }), e;
  }
  /**
   * Calls each Tool reset method to clean up anything set by Tool
   */
  destroy() {
    Object.values(this.available).forEach(async (e) => {
      I(e.reset) && await e.reset();
    });
  }
  /**
   * Returns internal tools
   * Includes Bold, Italic, Link and Paragraph
   */
  get internalTools() {
    return {
      bold: {
        class: Fe,
        isInternal: !0
      },
      italic: {
        class: He,
        isInternal: !0
      },
      link: {
        class: ze,
        isInternal: !0
      },
      paragraph: {
        class: Pe,
        inlineToolbar: !0,
        isInternal: !0
      },
      stub: {
        class: Tt,
        isInternal: !0
      },
      moveUp: {
        class: Mt,
        isInternal: !0
      },
      delete: {
        class: It,
        isInternal: !0
      },
      moveDown: {
        class: St,
        isInternal: !0
      }
    };
  }
  /**
   * Tool prepare method success callback
   *
   * @param {object} data - append tool to available list
   */
  toolPrepareMethodSuccess(e) {
    const t = this.factory.get(e.toolName);
    if (t.isInline()) {
      const i = ["render", "surround", "checkState"].filter((s) => !t.create()[s]);
      if (i.length) {
        C(
          `Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`,
          "warn",
          i
        ), this.toolsUnavailable.set(t.name, t);
        return;
      }
    }
    this.toolsAvailable.set(t.name, t);
  }
  /**
   * Tool prepare method fail callback
   *
   * @param {object} data - append tool to unavailable list
   */
  toolPrepareMethodFallback(e) {
    this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
  }
  /**
   * Binds prepare function of plugins with user or default config
   *
   * @returns {Array} list of functions that needs to be fired sequentially
   * @param config - tools config
   */
  getListOfPrepareFunctions(e) {
    const t = [];
    return Object.entries(e).forEach(([o, i]) => {
      t.push({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        function: I(i.class.prepare) ? i.class.prepare : () => {
        },
        data: {
          toolName: o,
          config: i.config
        }
      });
    }), t;
  }
  /**
   * Assign enabled Inline Tools and Block Tunes for Block Tool
   */
  prepareBlockTools() {
    Array.from(this.blockTools.values()).forEach((e) => {
      this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
    });
  }
  /**
   * Assign enabled Inline Tools for Block Tool
   *
   * @param tool - Block Tool
   */
  assignInlineToolsToBlockTool(e) {
    if (this.config.inlineToolbar !== !1) {
      if (e.enabledInlineTools === !0) {
        e.inlineTools = new P(
          Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t) => [t, this.inlineTools.get(t)]) : Array.from(this.inlineTools.entries())
        );
        return;
      }
      Array.isArray(e.enabledInlineTools) && (e.inlineTools = new P(
        e.enabledInlineTools.map((t) => [t, this.inlineTools.get(t)])
      ));
    }
  }
  /**
   * Assign enabled Block Tunes for Block Tool
   *
   * @param tool — Block Tool
   */
  assignBlockTunesToBlockTool(e) {
    if (e.enabledBlockTunes !== !1) {
      if (Array.isArray(e.enabledBlockTunes)) {
        const t = new P(
          e.enabledBlockTunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new P([...t, ...this.blockTunes.internalTools]);
        return;
      }
      if (Array.isArray(this.config.tunes)) {
        const t = new P(
          this.config.tunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new P([...t, ...this.blockTunes.internalTools]);
        return;
      }
      e.tunes = this.blockTunes.internalTools;
    }
  }
  /**
   * Validate Tools configuration objects and throw Error for user if it is invalid
   */
  validateTools() {
    for (const e in this.config.tools)
      if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
        if (e in this.internalTools)
          return;
        const t = this.config.tools[e];
        if (!I(t) && !I(t.class))
          throw Error(
            `Tool «${e}» must be a constructor function or an object with function in the «class» property`
          );
      }
  }
  /**
   * Unify tools config
   */
  prepareConfig() {
    const e = {};
    for (const t in this.config.tools)
      D(this.config.tools[t]) ? e[t] = this.config.tools[t] : e[t] = { class: this.config.tools[t] };
    return e;
  }
}
bi([
  ne
], Lt.prototype, "getAllInlineToolsSanitizeConfig", 1);
const mi = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s infinite linear;animation:editor-loader-spin .8s infinite linear;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;-webkit-transform:translateX(-50%) translateY(8px) scale(.94);transform:translate(-50%) translateY(8px) scale(.94);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0;z-index:3}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translate(-50%)}.ce-inline-toolbar--fixed{position:fixed!important}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.94);transform:translate(-23px) translateY(8px) scale(.94)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translate(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.94);transform:translate(-100%) translateY(8px) scale(.94);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translate(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;border-radius:0;line-height:normal}.ce-inline-tool svg{width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#eff2f5}}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48);-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px rgba(201,201,204,.48);box-shadow:0 0 0 1px #c9c9cc7a;border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.ce-conversion-tool__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-conversion-tool__icon{width:36px;height:36px;border-radius:8px}.ce-conversion-tool__icon svg{width:28px;height:28px}}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important}.ce-conversion-tool--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;line-height:32px}.ce-settings__button svg{width:20px;height:20px}@media (max-width: 650px){.ce-settings__button svg{width:28px;height:28px}}@media (hover: hover){.ce-settings__button:hover{background-color:#eff2f5}}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{background:rgba(34,186,255,.08)!important}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button--disabled{cursor:not-allowed!important}.ce-settings__button--disabled{opacity:.3}.ce-settings__button--selected{color:#388ae5}@media (min-width: 651px){.codex-editor--narrow .ce-settings .ce-popover{right:0;left:auto;left:initial}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width: 651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button svg{width:20px;height:20px}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:rgba(232,232,235,.49);border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 400px;--max-height: 400px;--padding: 8px;--offset-from-target: 8px;--color-border: #e8e8eb;--color-shadow: rgba(13, 20, 33, .13);--color-background: white;--color-text-primary: black;--color-text-secondary: #808080;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #eff0f1;--color-text-icon-active: #388ae5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #fafafa;--color-background-item-confirm: #e24a4a;--color-background-item-confirm-hover: #ce4343;min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0px 10px 10px -1px rgba(0,0,0,.11),0px 0px 4px 0px rgba(0,0,0,.05);box-shadow:0 10px 10px -1px #0000001c,0 0 4px #0000000d;position:absolute;left:0;top:calc(100% + var(--offset-from-target));background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;border:none}.ce-popover--opened{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}.ce-popover--open-top{top:calc(-1 * (var(--offset-from-target) + var(--popover-height)))}@media (max-width: 650px){.ce-popover{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}.ce-popover .ce-popover__search{display:none}}.ce-popover__search,.ce-popover__custom-content:not(:empty){margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover__custom-content:not(:empty){padding:4px}@media (min-width: 651px){.ce-popover__custom-content:not(:empty){padding:0}}.ce-popover__custom-content--hidden{display:none}.ce-popover__title-type{font-size:13px;font-weight:600;line-height:1.5;padding:8px;color:#999}.ce-popover__title-type.divider{border-top:1px solid #d9d9d9;margin-top:8px;padding-top:16px}.ce-popover-item{--border-radius: 6px;--icon-size: 48px;--icon-size-mobile: 28px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:3px;color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{border-radius:5px;width:48px;height:48px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:16px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:var(--icon-size-mobile);height:var(--icon-size-mobile)}}.ce-popover-item__title{font-size:14px;line-height:1.5;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;font-weight:400;white-space:nowrap;margin-top:4px}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--active .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--disabled .ce-popover-item__icon{-webkit-box-shadow:0 0 0 1px var(--color-border-icon-disabled);box-shadow:0 0 0 1px var(--color-border-icon-disabled)}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--focused:not(.ce-popover-item--no-focus){-webkit-box-shadow:inset 0 0 0px 1px var(--color-shadow-item-focus);box-shadow:inset 0 0 0 1px var(--color-shadow-item-focus)}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}.ce-popover-item:hover .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__icon{color:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}.ce-popover-item--confirmation .ce-popover-item__icon,.ce-popover-item--active .ce-popover-item__icon,.ce-popover-item--focused .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}
`;
class ki extends y {
  constructor() {
    super(...arguments), this.isMobile = !1, this.contentRectCache = void 0, this.resizeDebouncer = zt(() => {
      this.windowResize();
    }, 200);
  }
  /**
   * Editor.js UI CSS class names
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorWrapperNarrow: "codex-editor--narrow",
      editorZone: "codex-editor__redactor",
      editorZoneHidden: "codex-editor__redactor--hidden",
      editorLoader: "codex-editor__loader",
      editorEmpty: "codex-editor--empty",
      editorRtlFix: "codex-editor--rtl"
    };
  }
  /**
   * Return Width of center column of Editor
   *
   * @returns {DOMRect}
   */
  get contentRect() {
    if (this.contentRectCache)
      return this.contentRectCache;
    const e = this.nodes.wrapper.querySelector(`.${_.CSS.content}`);
    return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
      width: 650,
      left: 0,
      right: 0
    };
  }
  /**
   * Adds loader to editor while content is not ready
   */
  addLoader() {
    this.nodes.loader = d.make("div", this.CSS.editorLoader), this.nodes.wrapper.prepend(this.nodes.loader), this.nodes.redactor.classList.add(this.CSS.editorZoneHidden);
  }
  /**
   * Removes loader when content has loaded
   */
  removeLoader() {
    this.nodes.loader.remove(), this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden);
  }
  /**
   * Making main interface
   */
  async prepare() {
    this.checkIsMobile(), this.make(), this.addLoader(), this.loadStyles();
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - removes all listeners from main UI module elements
   *
   * if readOnly is false:
   *  - enables all listeners to UI module elements
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Check if Editor is empty and set CSS class to wrapper
   */
  checkEmptiness() {
    const { BlockManager: e } = this.Editor;
    this.nodes.wrapper.classList.toggle(
      this.CSS.editorEmpty,
      e.isEditorEmpty
    );
  }
  /**
   * Check if one of Toolbar is opened
   * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
   *
   * @returns {boolean}
   */
  get someToolbarOpened() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o, ConversionToolbar: i } = this.Editor;
    return t.opened || o.opened || i.opened || e.toolbox.opened;
  }
  /**
   * Check for some Flipper-buttons is under focus
   */
  get someFlipperButtonFocused() {
    return this.Editor.Toolbar.toolbox.hasFocus() ? !0 : Object.entries(this.Editor).filter(([e, t]) => t.flipper instanceof X).some(([e, t]) => t.flipper.hasFocus());
  }
  /**
   * Clean editor`s UI
   */
  destroy() {
    this.nodes.holder.innerHTML = "";
  }
  /**
   * Close all Editor's toolbars
   */
  closeAllToolbars() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o, ConversionToolbar: i } = this.Editor;
    t.close(), o.close(), i.close(), e.toolbox.close();
  }
  /**
   * Check for mobile mode and cache a result
   */
  checkIsMobile() {
    this.isMobile = window.innerWidth < et;
  }
  /**
   * Makes Editor.js interface
   */
  make() {
    this.nodes.holder = d.getHolder(this.config.holder), this.nodes.wrapper = d.make("div", [
      this.CSS.editorWrapper,
      ...this.isRtl ? [this.CSS.editorRtlFix] : []
    ]), this.nodes.redactor = d.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
  }
  /**
   * Appends CSS
   */
  loadStyles() {
    const e = "editor-js-styles";
    if (d.get(e))
      return;
    const t = d.make("style", null, {
      id: e,
      textContent: mi.toString()
    });
    d.prepend(document.head, t);
  }
  /**
   * Bind events on the Editor.js interface
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(
      this.nodes.redactor,
      "click",
      (e) => {
        this.redactorClicked(e);
      },
      !1
    ), this.readOnlyMutableListeners.on(
      this.nodes.redactor,
      "mousedown",
      (e) => {
        this.documentTouched(e);
      },
      !0
    ), this.readOnlyMutableListeners.on(
      this.nodes.redactor,
      "touchstart",
      (e) => {
        this.documentTouched(e);
      },
      !0
    ), this.readOnlyMutableListeners.on(
      document,
      "keydown",
      (e) => {
        this.documentKeydown(e);
      },
      !0
    ), this.readOnlyMutableListeners.on(
      document,
      "mousedown",
      (e) => {
        this.documentClicked(e);
      },
      !0
    ), this.readOnlyMutableListeners.on(
      document,
      "selectionchange",
      () => {
        this.selectionChanged();
      },
      !0
    ), this.readOnlyMutableListeners.on(
      window,
      "resize",
      () => {
        this.resizeDebouncer();
      },
      {
        passive: !0
      }
    ), this.watchBlockHoveredEvents();
  }
  /**
   * Listen redactor mousemove to emit 'block-hovered' event
   */
  watchBlockHoveredEvents() {
    let e;
    this.readOnlyMutableListeners.on(
      this.nodes.redactor,
      "mousemove",
      Ce((t) => {
        const o = t.target.closest(".ce-block");
        this.Editor.BlockSelection.anyBlockSelected || o && e !== o && (e = o, this.eventsDispatcher.emit(vt, {
          block: this.Editor.BlockManager.getBlockByChildNode(o)
        }));
      }, 20),
      {
        passive: !0
      }
    );
  }
  /**
   * Unbind events on the Editor.js interface
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Resize window handler
   */
  windowResize() {
    this.contentRectCache = null, this.checkIsMobile();
  }
  /**
   * All keydowns on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  documentKeydown(e) {
    switch (e.keyCode) {
      case v.ENTER:
        this.enterPressed(e);
        break;
      case v.BACKSPACE:
        this.backspacePressed(e);
        break;
      case v.ESC:
        this.escapePressed(e);
        break;
      default:
        this.defaultBehaviour(e);
        break;
    }
  }
  /**
   * Ignore all other document's keydown events
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  defaultBehaviour(e) {
    const { currentBlock: t } = this.Editor.BlockManager, o = e.target.closest(
      `.${this.CSS.editorWrapper}`
    ), i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    if (t !== void 0 && o === null) {
      this.Editor.BlockEvents.keydown(e);
      return;
    }
    o || t && i || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
  }
  /**
   * @param {KeyboardEvent} event - keyboard event
   */
  backspacePressed(e) {
    const { BlockManager: t, BlockSelection: o, Caret: i } = this.Editor;
    if (o.anyBlockSelected && !b.isSelectionExists) {
      const s = t.removeSelectedBlocks();
      i.setToBlock(
        t.insertDefaultBlockAtIndex(s, !0),
        i.positions.START
      ), o.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
    }
  }
  /**
   * Escape pressed
   * If some of Toolbar components are opened, then close it otherwise close Toolbar
   *
   * @param {Event} event - escape keydown event
   */
  escapePressed(e) {
    this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
  }
  /**
   * Enter pressed on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  enterPressed(e) {
    const { BlockManager: t, BlockSelection: o } = this.Editor, i = t.currentBlockIndex >= 0;
    if (o.anyBlockSelected && !b.isSelectionExists) {
      o.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
      return;
    }
    if (!this.someToolbarOpened && i && e.target.tagName === "BODY") {
      const s = this.Editor.BlockManager.insert();
      this.Editor.Caret.setToBlock(s), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.moveAndOpen(s);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * All clicks on document
   *
   * @param {MouseEvent} event - Click event
   */
  documentClicked(e) {
    if (!e.isTrusted)
      return;
    const t = e.target;
    this.nodes.holder.contains(t) || b.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
    const i = this.Editor.BlockSettings.nodes.wrapper.contains(t), s = this.Editor.Toolbar.nodes.settingsToggler.contains(t), n = i || s;
    if (this.Editor.BlockSettings.opened && !n) {
      this.Editor.BlockSettings.close();
      const l = this.Editor.BlockManager.getBlockByChildNode(t);
      this.Editor.Toolbar.moveAndOpen(l);
    }
    this.Editor.InlineToolbar.nodes.wrapper.contains(t) || this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * First touch on editor
   * Fired before click
   *
   * Used to change current block — we need to do it before 'selectionChange' event.
   * Also:
   * - Move and show the Toolbar
   * - Set a Caret
   *
   * @param {MouseEvent | TouchEvent} event - touch or mouse event
   */
  documentTouched(e) {
    let t = e.target;
    if (t === this.nodes.redactor) {
      const o = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, i = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      t = document.elementFromPoint(o, i);
    }
    try {
      this.Editor.BlockManager.setCurrentBlockByChildNode(t), this.Editor.BlockManager.highlightCurrentNode();
    } catch {
      this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
    }
    this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * All clicks on the redactor zone
   *
   * @param {MouseEvent} event - click event
   * @description
   * - By clicks on the Editor's bottom zone:
   *      - if last Block is empty, set a Caret to this
   *      - otherwise, add a new empty Block and set a Caret to that
   */
  redactorClicked(e) {
    const { BlockSelection: t } = this.Editor;
    if (!b.isCollapsed)
      return;
    const o = () => {
      e.stopImmediatePropagation(), e.stopPropagation();
    }, i = e.target, s = e.metaKey || e.ctrlKey;
    if (d.isAnchor(i) && s) {
      o();
      const u = i.getAttribute("href"), h = jt(u);
      Wt(h);
      return;
    }
    const n = this.Editor.BlockManager.getBlockByIndex(-1), a = d.offset(n.holder).bottom, l = e.pageY;
    if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
    * If there is cross block selection started, target will be equal to redactor so we need additional check
    */
    !t.anyBlockSelected && /**
    * Prevent caret jumping (to last block) when clicking between blocks
    */
    a < l) {
      o();
      const { BlockManager: u, Caret: h, Toolbar: f } = this.Editor;
      (!u.lastBlock.tool.isDefault || !u.lastBlock.isEmpty) && u.insertAtEnd(), h.setToTheLastBlock(), f.moveAndOpen(u.lastBlock);
    }
  }
  /**
   * Handle selection changes on mobile devices
   * Uses for showing the Inline Toolbar
   */
  selectionChanged() {
    const { CrossBlockSelection: e, BlockSelection: t } = this.Editor, o = b.anchorElement;
    if (e.isCrossBlockSelectionStarted && t.anyBlockSelected && b.get().removeAllRanges(), !o)
      return;
    const i = o.closest(`.${_.CSS.content}`) === null;
    if (i && (this.Editor.InlineToolbar.containsNode(o) || this.Editor.BlockSelection.anyBlockSelected || this.Editor.InlineToolbar.close(), !(o.dataset.inlineToolbar === "true")))
      return;
    this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o);
    const s = i !== !0;
    this.Editor.InlineToolbar.tryToShow(
      !0,
      s,
      null
    );
  }
}
const xi = {
  // API Modules
  BlocksAPI: Jt,
  CaretAPI: Qt,
  EventsAPI: eo,
  I18nAPI: Ae,
  API: to,
  InlineToolbarAPI: oo,
  ListenersAPI: io,
  NotifierAPI: ao,
  ReadOnlyAPI: lo,
  SanitizerAPI: bo,
  SaverAPI: mo,
  SelectionAPI: ko,
  StylesAPI: xo,
  ToolbarAPI: vo,
  TooltipAPI: Bo,
  UiAPI: Eo,
  // Toolbar Modules
  BlockSettings: Ho,
  ConversionToolbar: j,
  Toolbar: Ko,
  InlineToolbar: Xo,
  // Modules
  BlockEvents: Zo,
  BlockManager: Jo,
  BlockSelection: Qo,
  Caret: xe,
  CrossBlockSelection: ei,
  DragNDrop: ti,
  ModificationsObserver: oi,
  Paste: ii,
  ReadOnly: si,
  RectangleSelection: pe,
  Renderer: ni,
  Saver: ri,
  Tools: Lt,
  UI: ki
};
class vi {
  /**
   * @param {EditorConfig} config - user configuration
   */
  constructor(e) {
    this.moduleInstances = {}, this.eventsDispatcher = new we();
    let t, o;
    this.isReady = new Promise((i, s) => {
      t = i, o = s;
    }), Promise.resolve().then(async () => {
      this.configuration = e, await this.validate(), await this.init(), await this.start(), $("I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "log", "", "color: #E24A75"), setTimeout(async () => {
        if (await this.render(), this.configuration.autofocus) {
          const { BlockManager: i, Caret: s } = this.moduleInstances;
          s.setToBlock(i.blocks[0], s.positions.START), i.highlightCurrentNode();
        }
        this.moduleInstances.UI.removeLoader(), t();
      }, 500);
    }).catch((i) => {
      C(`Editor.js is not ready because of ${i}`, "error"), o(i);
    });
  }
  /**
   * Setting for configuration
   *
   * @param {EditorConfig|string} config - Editor's config to set
   */
  set configuration(e) {
    var o, i;
    D(e) ? this.config = {
      ...e
    } : this.config = {
      holder: e
    }, Ie(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = Ze.VERBOSE), Dt(this.config.logLevel), Ie(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
    const t = {
      type: this.config.defaultBlock,
      data: {}
    };
    this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
      p: !0,
      b: !0,
      a: !0
    }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : !1, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || (() => {
    }), this.config.onChange = this.config.onChange || (() => {
    }), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : !0, (Y(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = { blocks: [t] }), this.config.readOnly = this.config.readOnly || !1, (o = this.config.i18n) != null && o.messages && U.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((i = this.config.i18n) == null ? void 0 : i.direction) || "ltr";
  }
  /**
   * Returns private property
   *
   * @returns {EditorConfig}
   */
  get configuration() {
    return this.config;
  }
  /**
   * Checks for required fields in Editor's config
   *
   * @returns {Promise<void>}
   */
  async validate() {
    const { holderId: e, holder: t } = this.config;
    if (e && t)
      throw Error("«holderId» and «holder» param can't assign at the same time.");
    if (G(t) && !d.get(t))
      throw Error(`element with ID «${t}» is missing. Pass correct holder's ID.`);
    if (t && D(t) && !d.isElement(t))
      throw Error("«holder» value must be an Element node");
  }
  /**
   * Initializes modules:
   *  - make and save instances
   *  - configure
   */
  init() {
    this.constructModules(), this.configureModules();
  }
  /**
   * Start Editor!
   *
   * Get list of modules that needs to be prepared and return a sequence (Promise)
   *
   * @returns {Promise<void>}
   */
  async start() {
    await [
      "Tools",
      "UI",
      "BlockManager",
      "Paste",
      "BlockSelection",
      "RectangleSelection",
      "CrossBlockSelection",
      "ReadOnly"
    ].reduce(
      (t, o) => t.then(async () => {
        try {
          await this.moduleInstances[o].prepare();
        } catch (i) {
          if (i instanceof it)
            throw new Error(i.message);
          C(`Module ${o} was skipped because of %o`, "warn", i);
        }
      }),
      Promise.resolve()
    );
  }
  /**
   * Render initial data
   */
  render() {
    return this.moduleInstances.Renderer.render(this.config.data.blocks);
  }
  /**
   * Make modules instances and save it to the @property this.moduleInstances
   */
  constructModules() {
    Object.entries(xi).forEach(([e, t]) => {
      try {
        this.moduleInstances[e] = new t({
          config: this.configuration,
          eventsDispatcher: this.eventsDispatcher
        });
      } catch (o) {
        C("[constructModules]", `Module ${e} skipped because`, "error", o);
      }
    });
  }
  /**
   * Modules instances configuration:
   *  - pass other modules to the 'state' property
   *  - ...
   */
  configureModules() {
    for (const e in this.moduleInstances)
      Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
  }
  /**
   * Return modules without passed name
   *
   * @param {string} name - module for witch modules difference should be calculated
   */
  getModulesDiff(e) {
    const t = {};
    for (const o in this.moduleInstances)
      o !== e && (t[o] = this.moduleInstances[o]);
    return t;
  }
}
/**
 * Editor.js
 *
 * @license Apache-2.0
 * @see Editor.js <https://editorjs.io>
 * @author CodeX Team <https://codex.so>
 */
class wi {
  /** Editor version */
  static get version() {
    return "2.3.7";
  }
  /**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   */
  constructor(e) {
    let t = () => {
    };
    D(e) && I(e.onReady) && (t = e.onReady);
    const o = new vi(e);
    this.isReady = o.isReady.then(() => {
      this.exportAPI(o), t();
    });
  }
  /**
   * Export external API methods
   *
   * @param {Core} editor — Editor's instance
   */
  exportAPI(e) {
    const t = ["configuration"], o = () => {
      Object.values(e.moduleInstances).forEach((s) => {
        I(s.destroy) && s.destroy(), s.listeners.removeAll();
      }), e = null;
      for (const s in this)
        Object.prototype.hasOwnProperty.call(this, s) && delete this[s];
      Object.setPrototypeOf(this, null);
    };
    t.forEach((s) => {
      this[s] = e[s];
    }), this.destroy = o, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
      blocks: {
        clear: "clear",
        render: "render"
      },
      caret: {
        focus: "focus"
      },
      events: {
        on: "on",
        off: "off",
        emit: "emit"
      },
      saver: {
        save: "save"
      }
    }).forEach(([s, n]) => {
      Object.entries(n).forEach(([a, l]) => {
        this[l] = e.moduleInstances.API.methods[s][a];
      });
    });
  }
}
export {
  wi as default
};
