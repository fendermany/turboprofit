/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (i, r) {
          "use strict";
          var s = [],
            o = Object.getPrototypeOf,
            a = s.slice,
            l = s.flat
              ? function (e) {
                  return s.flat.call(e);
                }
              : function (e) {
                  return s.concat.apply([], e);
                },
            c = s.push,
            u = s.indexOf,
            d = {},
            p = d.toString,
            f = d.hasOwnProperty,
            h = f.toString,
            m = h.call(Object),
            g = {},
            v = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            b = i.document,
            w = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, n) {
            var i,
              r,
              s = (n = n || b).createElement("script");
            if (((s.text = e), t))
              for (i in w)
                (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  s.setAttribute(i, r);
            n.head.appendChild(s).parentNode.removeChild(s);
          }
          function T(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[p.call(e)] || "object"
              : typeof e;
          }
          var E = "3.6.0",
            S = function (e, t) {
              return new S.fn.init(e, t);
            };
          function C(e) {
            var t = !!e && "length" in e && e.length,
              n = T(e);
            return (
              !v(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (S.fn = S.prototype =
            {
              jquery: E,
              constructor: S,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (e) {
                return null == e
                  ? a.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = S.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return S.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  S.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  S.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  S.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: s.sort,
              splice: s.splice,
            }),
            (S.extend = S.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  r,
                  s,
                  o = arguments[0] || {},
                  a = 1,
                  l = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof o &&
                    ((c = o), (o = arguments[a] || {}), a++),
                    "object" == typeof o || v(o) || (o = {}),
                    a === l && ((o = this), a--);
                  a < l;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (i = e[t]),
                        "__proto__" !== t &&
                          o !== i &&
                          (c &&
                          i &&
                          (S.isPlainObject(i) || (r = Array.isArray(i)))
                            ? ((n = o[t]),
                              (s =
                                r && !Array.isArray(n)
                                  ? []
                                  : r || S.isPlainObject(n)
                                  ? n
                                  : {}),
                              (r = !1),
                              (o[t] = S.extend(c, s, i)))
                            : void 0 !== i && (o[t] = i));
                return o;
              }),
            S.extend({
              expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== p.call(e)) &&
                  (!(t = o(e)) ||
                    ("function" ==
                      typeof (n = f.call(t, "constructor") && t.constructor) &&
                      h.call(n) === m))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                x(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  i = 0;
                if (C(e))
                  for (
                    n = e.length;
                    i < n && !1 !== t.call(e[i], i, e[i]);
                    i++
                  );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (C(Object(e))
                      ? S.merge(n, "string" == typeof e ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                  e[r++] = t[i];
                return (e.length = r), e;
              },
              grep: function (e, t, n) {
                for (var i = [], r = 0, s = e.length, o = !n; r < s; r++)
                  !t(e[r], r) !== o && i.push(e[r]);
                return i;
              },
              map: function (e, t, n) {
                var i,
                  r,
                  s = 0,
                  o = [];
                if (C(e))
                  for (i = e.length; s < i; s++)
                    null != (r = t(e[s], s, n)) && o.push(r);
                else for (s in e) null != (r = t(e[s], s, n)) && o.push(r);
                return l(o);
              },
              guid: 1,
              support: g,
            }),
            "function" == typeof Symbol &&
              (S.fn[Symbol.iterator] = s[Symbol.iterator]),
            S.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                d["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var k = (function (e) {
            var t,
              n,
              i,
              r,
              s,
              o,
              a,
              l,
              c,
              u,
              d,
              p,
              f,
              h,
              m,
              g,
              v,
              y,
              b,
              w = "sizzle" + 1 * new Date(),
              x = e.document,
              T = 0,
              E = 0,
              S = le(),
              C = le(),
              k = le(),
              A = le(),
              L = function (e, t) {
                return e === t && (d = !0), 0;
              },
              O = {}.hasOwnProperty,
              _ = [],
              M = _.pop,
              P = _.push,
              D = _.push,
              $ = _.slice,
              I = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              N =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              j = "[\\x20\\t\\r\\n\\f]",
              q =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              H =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                q +
                ")(?:" +
                j +
                "*([*^$|!~]?=)" +
                j +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                q +
                "))|)" +
                j +
                "*\\]",
              B =
                ":(" +
                q +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                H +
                ")*)|.*)\\)|)",
              R = new RegExp(j + "+", "g"),
              W = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              z = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              F = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              V = new RegExp(j + "|>"),
              G = new RegExp(B),
              Y = new RegExp("^" + q + "$"),
              U = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + N + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              X = /HTML$/i,
              Q = /^(?:input|select|textarea|button)$/i,
              K = /^h\d$/i,
              J = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              re = function (e, t) {
                return t
                  ? "\0" === e
                    ? "???"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              se = function () {
                p();
              },
              oe = we(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              D.apply((_ = $.call(x.childNodes)), x.childNodes),
                _[x.childNodes.length].nodeType;
            } catch (e) {
              D = {
                apply: _.length
                  ? function (e, t) {
                      P.apply(e, $.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                      e.length = n - 1;
                    },
              };
            }
            function ae(e, t, i, r) {
              var s,
                a,
                c,
                u,
                d,
                h,
                v,
                y = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
              if (
                ((i = i || []),
                "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
              )
                return i;
              if (!r && (p(t), (t = t || f), m)) {
                if (11 !== x && (d = Z.exec(e)))
                  if ((s = d[1])) {
                    if (9 === x) {
                      if (!(c = t.getElementById(s))) return i;
                      if (c.id === s) return i.push(c), i;
                    } else if (
                      y &&
                      (c = y.getElementById(s)) &&
                      b(t, c) &&
                      c.id === s
                    )
                      return i.push(c), i;
                  } else {
                    if (d[2]) return D.apply(i, t.getElementsByTagName(e)), i;
                    if (
                      (s = d[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return D.apply(i, t.getElementsByClassName(s)), i;
                  }
                if (
                  n.qsa &&
                  !A[e + " "] &&
                  (!g || !g.test(e)) &&
                  (1 !== x || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((v = e), (y = t), 1 === x && (V.test(e) || F.test(e)))) {
                    for (
                      ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((u = t.getAttribute("id"))
                          ? (u = u.replace(ie, re))
                          : t.setAttribute("id", (u = w))),
                        a = (h = o(e)).length;
                      a--;

                    )
                      h[a] = (u ? "#" + u : ":scope") + " " + be(h[a]);
                    v = h.join(",");
                  }
                  try {
                    return D.apply(i, y.querySelectorAll(v)), i;
                  } catch (t) {
                    A(e, !0);
                  } finally {
                    u === w && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(W, "$1"), t, i, r);
            }
            function le() {
              var e = [];
              return function t(n, r) {
                return (
                  e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                  (t[n + " "] = r)
                );
              };
            }
            function ce(e) {
              return (e[w] = !0), e;
            }
            function ue(e) {
              var t = f.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function de(e, t) {
              for (var n = e.split("|"), r = n.length; r--; )
                i.attrHandle[n[r]] = t;
            }
            function pe(e, t) {
              var n = t && e,
                i =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (i) return i;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function fe(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function me(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && oe(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ge(e) {
              return ce(function (t) {
                return (
                  (t = +t),
                  ce(function (n, i) {
                    for (var r, s = e([], n.length, t), o = s.length; o--; )
                      n[(r = s[o])] && (n[r] = !(i[r] = n[r]));
                  })
                );
              });
            }
            function ve(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = ae.support = {}),
            (s = ae.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !X.test(t || (n && n.nodeName) || "HTML");
              }),
            (p = ae.setDocument =
              function (e) {
                var t,
                  r,
                  o = e ? e.ownerDocument || e : x;
                return o != f && 9 === o.nodeType && o.documentElement
                  ? ((h = (f = o).documentElement),
                    (m = !s(f)),
                    x != f &&
                      (r = f.defaultView) &&
                      r.top !== r &&
                      (r.addEventListener
                        ? r.addEventListener("unload", se, !1)
                        : r.attachEvent && r.attachEvent("onunload", se)),
                    (n.scope = ue(function (e) {
                      return (
                        h.appendChild(e).appendChild(f.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = ue(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ue(function (e) {
                      return (
                        e.appendChild(f.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = J.test(
                      f.getElementsByClassName
                    )),
                    (n.getById = ue(function (e) {
                      return (
                        (h.appendChild(e).id = w),
                        !f.getElementsByName || !f.getElementsByName(w).length
                      );
                    })),
                    n.getById
                      ? ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && m) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && m) {
                            var n,
                              i,
                              r,
                              s = t.getElementById(e);
                            if (s) {
                              if (
                                (n = s.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [s];
                              for (
                                r = t.getElementsByName(e), i = 0;
                                (s = r[i++]);

                              )
                                if (
                                  (n = s.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [s];
                            }
                            return [];
                          }
                        })),
                    (i.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            i = [],
                            r = 0,
                            s = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = s[r++]); )
                              1 === n.nodeType && i.push(n);
                            return i;
                          }
                          return s;
                        }),
                    (i.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && m)
                          return t.getElementsByClassName(e);
                      }),
                    (v = []),
                    (g = []),
                    (n.qsa = J.test(f.querySelectorAll)) &&
                      (ue(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          w +
                          "'></a><select id='" +
                          w +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            g.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + N + ")"
                            ),
                          e.querySelectorAll("[id~=" + w + "-]").length ||
                            g.push("~="),
                          (t = f.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            g.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            g.push(":checked"),
                          e.querySelectorAll("a#" + w + "+*").length ||
                            g.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          g.push("[\\r\\n\\f]");
                      }),
                      ue(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = f.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            g.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            g.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          g.push(",.*:");
                      })),
                    (n.matchesSelector = J.test(
                      (y =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      ue(function (e) {
                        (n.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          v.push("!=", B);
                      }),
                    (g = g.length && new RegExp(g.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = J.test(h.compareDocumentPosition)),
                    (b =
                      t || J.test(h.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              i = t && t.parentNode;
                            return (
                              e === i ||
                              !(
                                !i ||
                                1 !== i.nodeType ||
                                !(n.contains
                                  ? n.contains(i)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(i))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (L = t
                      ? function (e, t) {
                          if (e === t) return (d = !0), 0;
                          var i =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            i ||
                            (1 &
                              (i =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === i)
                              ? e == f || (e.ownerDocument == x && b(x, e))
                                ? -1
                                : t == f || (t.ownerDocument == x && b(x, t))
                                ? 1
                                : u
                                ? I(u, e) - I(u, t)
                                : 0
                              : 4 & i
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (d = !0), 0;
                          var n,
                            i = 0,
                            r = e.parentNode,
                            s = t.parentNode,
                            o = [e],
                            a = [t];
                          if (!r || !s)
                            return e == f
                              ? -1
                              : t == f
                              ? 1
                              : r
                              ? -1
                              : s
                              ? 1
                              : u
                              ? I(u, e) - I(u, t)
                              : 0;
                          if (r === s) return pe(e, t);
                          for (n = e; (n = n.parentNode); ) o.unshift(n);
                          for (n = t; (n = n.parentNode); ) a.unshift(n);
                          for (; o[i] === a[i]; ) i++;
                          return i
                            ? pe(o[i], a[i])
                            : o[i] == x
                            ? -1
                            : a[i] == x
                            ? 1
                            : 0;
                        }),
                    f)
                  : f;
              }),
            (ae.matches = function (e, t) {
              return ae(e, null, null, t);
            }),
            (ae.matchesSelector = function (e, t) {
              if (
                (p(e),
                n.matchesSelector &&
                  m &&
                  !A[t + " "] &&
                  (!v || !v.test(t)) &&
                  (!g || !g.test(t)))
              )
                try {
                  var i = y.call(e, t);
                  if (
                    i ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return i;
                } catch (e) {
                  A(t, !0);
                }
              return ae(t, f, null, [e]).length > 0;
            }),
            (ae.contains = function (e, t) {
              return (e.ownerDocument || e) != f && p(e), b(e, t);
            }),
            (ae.attr = function (e, t) {
              (e.ownerDocument || e) != f && p(e);
              var r = i.attrHandle[t.toLowerCase()],
                s =
                  r && O.call(i.attrHandle, t.toLowerCase())
                    ? r(e, t, !m)
                    : void 0;
              return void 0 !== s
                ? s
                : n.attributes || !m
                ? e.getAttribute(t)
                : (s = e.getAttributeNode(t)) && s.specified
                ? s.value
                : null;
            }),
            (ae.escape = function (e) {
              return (e + "").replace(ie, re);
            }),
            (ae.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (ae.uniqueSort = function (e) {
              var t,
                i = [],
                r = 0,
                s = 0;
              if (
                ((d = !n.detectDuplicates),
                (u = !n.sortStable && e.slice(0)),
                e.sort(L),
                d)
              ) {
                for (; (t = e[s++]); ) t === e[s] && (r = i.push(s));
                for (; r--; ) e.splice(i[r], 1);
              }
              return (u = null), e;
            }),
            (r = ae.getText =
              function (e) {
                var t,
                  n = "",
                  i = 0,
                  s = e.nodeType;
                if (s) {
                  if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                  } else if (3 === s || 4 === s) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += r(t);
                return n;
              }),
            (i = ae.selectors =
              {
                cacheLength: 50,
                createPseudo: ce,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || ae.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && ae.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return U.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            G.test(n) &&
                            (t = o(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = S[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + j + "|$)"
                      )) &&
                        S(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (i) {
                      var r = ae.attr(i, e);
                      return null == r
                        ? "!=" === t
                        : !t ||
                            ((r += ""),
                            "=" === t
                              ? r === n
                              : "!=" === t
                              ? r !== n
                              : "^=" === t
                              ? n && 0 === r.indexOf(n)
                              : "*=" === t
                              ? n && r.indexOf(n) > -1
                              : "$=" === t
                              ? n && r.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + r.replace(R, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (r === n ||
                                  r.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, i, r) {
                    var s = "nth" !== e.slice(0, 3),
                      o = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === i && 0 === r
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var c,
                            u,
                            d,
                            p,
                            f,
                            h,
                            m = s !== o ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                          if (g) {
                            if (s) {
                              for (; m; ) {
                                for (p = t; (p = p[m]); )
                                  if (
                                    a
                                      ? p.nodeName.toLowerCase() === v
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                h = m = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [o ? g.firstChild : g.lastChild]), o && y)
                            ) {
                              for (
                                b =
                                  (f =
                                    (c =
                                      (u =
                                        (d = (p = g)[w] || (p[w] = {}))[
                                          p.uniqueID
                                        ] || (d[p.uniqueID] = {}))[e] ||
                                      [])[0] === T && c[1]) && c[2],
                                  p = f && g.childNodes[f];
                                (p =
                                  (++f && p && p[m]) || (b = f = 0) || h.pop());

                              )
                                if (1 === p.nodeType && ++b && p === t) {
                                  u[e] = [T, f, b];
                                  break;
                                }
                            } else if (
                              (y &&
                                (b = f =
                                  (c =
                                    (u =
                                      (d = (p = t)[w] || (p[w] = {}))[
                                        p.uniqueID
                                      ] || (d[p.uniqueID] = {}))[e] ||
                                    [])[0] === T && c[1]),
                              !1 === b)
                            )
                              for (
                                ;
                                (p =
                                  (++f && p && p[m]) ||
                                  (b = f = 0) ||
                                  h.pop()) &&
                                ((a
                                  ? p.nodeName.toLowerCase() !== v
                                  : 1 !== p.nodeType) ||
                                  !++b ||
                                  (y &&
                                    ((u =
                                      (d = p[w] || (p[w] = {}))[p.uniqueID] ||
                                      (d[p.uniqueID] = {}))[e] = [T, b]),
                                  p !== t));

                              );
                            return (b -= r) === i || (b % i == 0 && b / i >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      r =
                        i.pseudos[e] ||
                        i.setFilters[e.toLowerCase()] ||
                        ae.error("unsupported pseudo: " + e);
                    return r[w]
                      ? r(t)
                      : r.length > 1
                      ? ((n = [e, e, "", t]),
                        i.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                              for (var i, s = r(e, t), o = s.length; o--; )
                                e[(i = I(e, s[o]))] = !(n[i] = s[o]);
                            })
                          : function (e) {
                              return r(e, 0, n);
                            })
                      : r;
                  },
                },
                pseudos: {
                  not: ce(function (e) {
                    var t = [],
                      n = [],
                      i = a(e.replace(W, "$1"));
                    return i[w]
                      ? ce(function (e, t, n, r) {
                          for (
                            var s, o = i(e, null, r, []), a = e.length;
                            a--;

                          )
                            (s = o[a]) && (e[a] = !(t[a] = s));
                        })
                      : function (e, r, s) {
                          return (
                            (t[0] = e),
                            i(t, null, s, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ce(function (e) {
                    return function (t) {
                      return ae(e, t).length > 0;
                    };
                  }),
                  contains: ce(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || r(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ce(function (e) {
                    return (
                      Y.test(e || "") || ae.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = m
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === f.activeElement &&
                      (!f.hasFocus || f.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: me(!1),
                  disabled: me(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !i.pseudos.empty(e);
                  },
                  header: function (e) {
                    return K.test(e.nodeName);
                  },
                  input: function (e) {
                    return Q.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ge(function () {
                    return [0];
                  }),
                  last: ge(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ge(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ge(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ge(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ge(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                      e.push(i);
                    return e;
                  }),
                  gt: ge(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                  }),
                },
              }),
            (i.pseudos.nth = i.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              i.pseudos[t] = fe(t);
            for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
            function ye() {}
            function be(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i;
            }
            function we(e, t, n) {
              var i = t.dir,
                r = t.next,
                s = r || i,
                o = n && "parentNode" === s,
                a = E++;
              return t.first
                ? function (t, n, r) {
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || o) return e(t, n, r);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      u,
                      d,
                      p = [T, a];
                    if (l) {
                      for (; (t = t[i]); )
                        if ((1 === t.nodeType || o) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || o)
                          if (
                            ((u =
                              (d = t[w] || (t[w] = {}))[t.uniqueID] ||
                              (d[t.uniqueID] = {})),
                            r && r === t.nodeName.toLowerCase())
                          )
                            t = t[i] || t;
                          else {
                            if ((c = u[s]) && c[0] === T && c[1] === a)
                              return (p[2] = c[2]);
                            if (((u[s] = p), (p[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function xe(e) {
              return e.length > 1
                ? function (t, n, i) {
                    for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Te(e, t, n, i, r) {
              for (
                var s, o = [], a = 0, l = e.length, c = null != t;
                a < l;
                a++
              )
                (s = e[a]) &&
                  ((n && !n(s, i, r)) || (o.push(s), c && t.push(a)));
              return o;
            }
            function Ee(e, t, n, i, r, s) {
              return (
                i && !i[w] && (i = Ee(i)),
                r && !r[w] && (r = Ee(r, s)),
                ce(function (s, o, a, l) {
                  var c,
                    u,
                    d,
                    p = [],
                    f = [],
                    h = o.length,
                    m =
                      s ||
                      (function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++)
                          ae(e, t[i], n);
                        return n;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    g = !e || (!s && t) ? m : Te(m, p, e, a, l),
                    v = n ? (r || (s ? e : h || i) ? [] : o) : g;
                  if ((n && n(g, v, a, l), i))
                    for (c = Te(v, f), i(c, [], a, l), u = c.length; u--; )
                      (d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
                  if (s) {
                    if (r || e) {
                      if (r) {
                        for (c = [], u = v.length; u--; )
                          (d = v[u]) && c.push((g[u] = d));
                        r(null, (v = []), c, l);
                      }
                      for (u = v.length; u--; )
                        (d = v[u]) &&
                          (c = r ? I(s, d) : p[u]) > -1 &&
                          (s[c] = !(o[c] = d));
                    }
                  } else (v = Te(v === o ? v.splice(h, v.length) : v)), r ? r(null, o, v, l) : D.apply(o, v);
                })
              );
            }
            function Se(e) {
              for (
                var t,
                  n,
                  r,
                  s = e.length,
                  o = i.relative[e[0].type],
                  a = o || i.relative[" "],
                  l = o ? 1 : 0,
                  u = we(
                    function (e) {
                      return e === t;
                    },
                    a,
                    !0
                  ),
                  d = we(
                    function (e) {
                      return I(t, e) > -1;
                    },
                    a,
                    !0
                  ),
                  p = [
                    function (e, n, i) {
                      var r =
                        (!o && (i || n !== c)) ||
                        ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                      return (t = null), r;
                    },
                  ];
                l < s;
                l++
              )
                if ((n = i.relative[e[l].type])) p = [we(xe(p), n)];
                else {
                  if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                    for (r = ++l; r < s && !i.relative[e[r].type]; r++);
                    return Ee(
                      l > 1 && xe(p),
                      l > 1 &&
                        be(
                          e
                            .slice(0, l - 1)
                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                        ).replace(W, "$1"),
                      n,
                      l < r && Se(e.slice(l, r)),
                      r < s && Se((e = e.slice(r))),
                      r < s && be(e)
                    );
                  }
                  p.push(n);
                }
              return xe(p);
            }
            return (
              (ye.prototype = i.filters = i.pseudos),
              (i.setFilters = new ye()),
              (o = ae.tokenize =
                function (e, t) {
                  var n,
                    r,
                    s,
                    o,
                    a,
                    l,
                    c,
                    u = C[e + " "];
                  if (u) return t ? 0 : u.slice(0);
                  for (a = e, l = [], c = i.preFilter; a; ) {
                    for (o in ((n && !(r = z.exec(a))) ||
                      (r && (a = a.slice(r[0].length) || a), l.push((s = []))),
                    (n = !1),
                    (r = F.exec(a)) &&
                      ((n = r.shift()),
                      s.push({ value: n, type: r[0].replace(W, " ") }),
                      (a = a.slice(n.length))),
                    i.filter))
                      !(r = U[o].exec(a)) ||
                        (c[o] && !(r = c[o](r))) ||
                        ((n = r.shift()),
                        s.push({ value: n, type: o, matches: r }),
                        (a = a.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
                }),
              (a = ae.compile =
                function (e, t) {
                  var n,
                    r = [],
                    s = [],
                    a = k[e + " "];
                  if (!a) {
                    for (t || (t = o(e)), n = t.length; n--; )
                      (a = Se(t[n]))[w] ? r.push(a) : s.push(a);
                    (a = k(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          r = e.length > 0,
                          s = function (s, o, a, l, u) {
                            var d,
                              h,
                              g,
                              v = 0,
                              y = "0",
                              b = s && [],
                              w = [],
                              x = c,
                              E = s || (r && i.find.TAG("*", u)),
                              S = (T += null == x ? 1 : Math.random() || 0.1),
                              C = E.length;
                            for (
                              u && (c = o == f || o || u);
                              y !== C && null != (d = E[y]);
                              y++
                            ) {
                              if (r && d) {
                                for (
                                  h = 0,
                                    o ||
                                      d.ownerDocument == f ||
                                      (p(d), (a = !m));
                                  (g = e[h++]);

                                )
                                  if (g(d, o || f, a)) {
                                    l.push(d);
                                    break;
                                  }
                                u && (T = S);
                              }
                              n && ((d = !g && d) && v--, s && b.push(d));
                            }
                            if (((v += y), n && y !== v)) {
                              for (h = 0; (g = t[h++]); ) g(b, w, o, a);
                              if (s) {
                                if (v > 0)
                                  for (; y--; )
                                    b[y] || w[y] || (w[y] = M.call(l));
                                w = Te(w);
                              }
                              D.apply(l, w),
                                u &&
                                  !s &&
                                  w.length > 0 &&
                                  v + t.length > 1 &&
                                  ae.uniqueSort(l);
                            }
                            return u && ((T = S), (c = x)), b;
                          };
                        return n ? ce(s) : s;
                      })(s, r)
                    )),
                      (a.selector = e);
                  }
                  return a;
                }),
              (l = ae.select =
                function (e, t, n, r) {
                  var s,
                    l,
                    c,
                    u,
                    d,
                    p = "function" == typeof e && e,
                    f = !r && o((e = p.selector || e));
                  if (((n = n || []), 1 === f.length)) {
                    if (
                      (l = f[0] = f[0].slice(0)).length > 2 &&
                      "ID" === (c = l[0]).type &&
                      9 === t.nodeType &&
                      m &&
                      i.relative[l[1].type]
                    ) {
                      if (
                        !(t = (i.find.ID(c.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      p && (t = t.parentNode),
                        (e = e.slice(l.shift().value.length));
                    }
                    for (
                      s = U.needsContext.test(e) ? 0 : l.length;
                      s-- && ((c = l[s]), !i.relative[(u = c.type)]);

                    )
                      if (
                        (d = i.find[u]) &&
                        (r = d(
                          c.matches[0].replace(te, ne),
                          (ee.test(l[0].type) && ve(t.parentNode)) || t
                        ))
                      ) {
                        if ((l.splice(s, 1), !(e = r.length && be(l))))
                          return D.apply(n, r), n;
                        break;
                      }
                  }
                  return (
                    (p || a(e, f))(
                      r,
                      t,
                      !m,
                      n,
                      !t || (ee.test(e) && ve(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = w.split("").sort(L).join("") === w),
              (n.detectDuplicates = !!d),
              p(),
              (n.sortDetached = ue(function (e) {
                return (
                  1 & e.compareDocumentPosition(f.createElement("fieldset"))
                );
              })),
              ue(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                de("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ue(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                de("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ue(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                de(N, function (e, t, n) {
                  var i;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
                }),
              ae
            );
          })(i);
          (S.find = k),
            (S.expr = k.selectors),
            (S.expr[":"] = S.expr.pseudos),
            (S.uniqueSort = S.unique = k.uniqueSort),
            (S.text = k.getText),
            (S.isXMLDoc = k.isXML),
            (S.contains = k.contains),
            (S.escapeSelector = k.escape);
          var A = function (e, t, n) {
              for (
                var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (r && S(e).is(n)) break;
                  i.push(e);
                }
              return i;
            },
            L = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            O = S.expr.match.needsContext;
          function _(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var M =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function P(e, t, n) {
            return v(t)
              ? S.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? S.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? S.grep(e, function (e) {
                  return u.call(t, e) > -1 !== n;
                })
              : S.filter(t, e, n);
          }
          (S.filter = function (e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? S.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : S.find.matches(
                    e,
                    S.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            S.fn.extend({
              find: function (e) {
                var t,
                  n,
                  i = this.length,
                  r = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    S(e).filter(function () {
                      for (t = 0; t < i; t++)
                        if (S.contains(r[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                  S.find(e, r[t], n);
                return i > 1 ? S.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(P(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(P(this, e || [], !0));
              },
              is: function (e) {
                return !!P(
                  this,
                  "string" == typeof e && O.test(e) ? S(e) : e || [],
                  !1
                ).length;
              },
            });
          var D,
            $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((S.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (((n = n || D), "string" == typeof e)) {
              if (
                !(i =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : $.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof S ? t[0] : t),
                  S.merge(
                    this,
                    S.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0
                    )
                  ),
                  M.test(i[1]) && S.isPlainObject(t))
                )
                  for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (r = b.getElementById(i[2])) &&
                  ((this[0] = r), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(S)
              : S.makeArray(e, this);
          }).prototype = S.fn),
            (D = S(b));
          var I = /^(?:parents|prev(?:Until|All))/,
            N = { children: !0, contents: !0, next: !0, prev: !0 };
          function j(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          S.fn.extend({
            has: function (e) {
              var t = S(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (S.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                i = 0,
                r = this.length,
                s = [],
                o = "string" != typeof e && S(e);
              if (!O.test(e))
                for (; i < r; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (o
                        ? o.index(n) > -1
                        : 1 === n.nodeType && S.find.matchesSelector(n, e))
                    ) {
                      s.push(n);
                      break;
                    }
              return this.pushStack(s.length > 1 ? S.uniqueSort(s) : s);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? u.call(S(e), this[0])
                  : u.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            S.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return A(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return A(e, "parentNode", n);
                },
                next: function (e) {
                  return j(e, "nextSibling");
                },
                prev: function (e) {
                  return j(e, "previousSibling");
                },
                nextAll: function (e) {
                  return A(e, "nextSibling");
                },
                prevAll: function (e) {
                  return A(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return A(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return A(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return L((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return L(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && o(e.contentDocument)
                    ? e.contentDocument
                    : (_(e, "template") && (e = e.content || e),
                      S.merge([], e.childNodes));
                },
              },
              function (e, t) {
                S.fn[e] = function (n, i) {
                  var r = S.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = S.filter(i, r)),
                    this.length > 1 &&
                      (N[e] || S.uniqueSort(r), I.test(e) && r.reverse()),
                    this.pushStack(r)
                  );
                };
              }
            );
          var q = /[^\x20\t\r\n\f]+/g;
          function H(e) {
            return e;
          }
          function B(e) {
            throw e;
          }
          function R(e, t, n, i) {
            var r;
            try {
              e && v((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && v((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (S.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      S.each(e.match(q) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : S.extend({}, e);
            var t,
              n,
              i,
              r,
              s = [],
              o = [],
              a = -1,
              l = function () {
                for (r = r || e.once, i = t = !0; o.length; a = -1)
                  for (n = o.shift(); ++a < s.length; )
                    !1 === s[a].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((a = s.length), (n = !1));
                e.memory || (n = !1), (t = !1), r && (s = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    s &&
                      (n && !t && ((a = s.length - 1), o.push(n)),
                      (function t(n) {
                        S.each(n, function (n, i) {
                          v(i)
                            ? (e.unique && c.has(i)) || s.push(i)
                            : i && i.length && "string" !== T(i) && t(i);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    S.each(arguments, function (e, t) {
                      for (var n; (n = S.inArray(t, s, n)) > -1; )
                        s.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? S.inArray(e, s) > -1 : s.length > 0;
                },
                empty: function () {
                  return s && (s = []), this;
                },
                disable: function () {
                  return (r = o = []), (s = n = ""), this;
                },
                disabled: function () {
                  return !s;
                },
                lock: function () {
                  return (r = o = []), n || t || (s = n = ""), this;
                },
                locked: function () {
                  return !!r;
                },
                fireWith: function (e, n) {
                  return (
                    r ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      o.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!i;
                },
              };
            return c;
          }),
            S.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      S.Callbacks("memory"),
                      S.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      S.Callbacks("once memory"),
                      S.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      S.Callbacks("once memory"),
                      S.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  r = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return s.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return r.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return S.Deferred(function (n) {
                        S.each(t, function (t, i) {
                          var r = v(e[i[4]]) && e[i[4]];
                          s[i[1]](function () {
                            var e = r && r.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[i[0] + "With"](this, r ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, r) {
                      var s = 0;
                      function o(e, t, n, r) {
                        return function () {
                          var a = this,
                            l = arguments,
                            c = function () {
                              var i, c;
                              if (!(e < s)) {
                                if ((i = n.apply(a, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  i &&
                                  ("object" == typeof i ||
                                    "function" == typeof i) &&
                                  i.then),
                                  v(c)
                                    ? r
                                      ? c.call(i, o(s, t, H, r), o(s, t, B, r))
                                      : (s++,
                                        c.call(
                                          i,
                                          o(s, t, H, r),
                                          o(s, t, B, r),
                                          o(s, t, H, t.notifyWith)
                                        ))
                                    : (n !== H && ((a = void 0), (l = [i])),
                                      (r || t.resolveWith)(a, l));
                              }
                            },
                            u = r
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (i) {
                                    S.Deferred.exceptionHook &&
                                      S.Deferred.exceptionHook(i, u.stackTrace),
                                      e + 1 >= s &&
                                        (n !== B && ((a = void 0), (l = [i])),
                                        t.rejectWith(a, l));
                                  }
                                };
                          e
                            ? u()
                            : (S.Deferred.getStackHook &&
                                (u.stackTrace = S.Deferred.getStackHook()),
                              i.setTimeout(u));
                        };
                      }
                      return S.Deferred(function (i) {
                        t[0][3].add(o(0, i, v(r) ? r : H, i.notifyWith)),
                          t[1][3].add(o(0, i, v(e) ? e : H)),
                          t[2][3].add(o(0, i, v(n) ? n : B));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? S.extend(e, r) : r;
                    },
                  },
                  s = {};
                return (
                  S.each(t, function (e, i) {
                    var o = i[2],
                      a = i[5];
                    (r[i[1]] = o.add),
                      a &&
                        o.add(
                          function () {
                            n = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      o.add(i[3].fire),
                      (s[i[0]] = function () {
                        return (
                          s[i[0] + "With"](
                            this === s ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (s[i[0] + "With"] = o.fireWith);
                  }),
                  r.promise(s),
                  e && e.call(s, s),
                  s
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  i = Array(n),
                  r = a.call(arguments),
                  s = S.Deferred(),
                  o = function (e) {
                    return function (n) {
                      (i[e] = this),
                        (r[e] = arguments.length > 1 ? a.call(arguments) : n),
                        --t || s.resolveWith(i, r);
                    };
                  };
                if (
                  t <= 1 &&
                  (R(e, s.done(o(n)).resolve, s.reject, !t),
                  "pending" === s.state() || v(r[n] && r[n].then))
                )
                  return s.then();
                for (; n--; ) R(r[n], o(n), s.reject);
                return s.promise();
              },
            });
          var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (S.Deferred.exceptionHook = function (e, t) {
            i.console &&
              i.console.warn &&
              e &&
              W.test(e.name) &&
              i.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (S.readyException = function (e) {
              i.setTimeout(function () {
                throw e;
              });
            });
          var z = S.Deferred();
          function F() {
            b.removeEventListener("DOMContentLoaded", F),
              i.removeEventListener("load", F),
              S.ready();
          }
          (S.fn.ready = function (e) {
            return (
              z.then(e).catch(function (e) {
                S.readyException(e);
              }),
              this
            );
          }),
            S.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) ||
                  ((S.isReady = !0),
                  (!0 !== e && --S.readyWait > 0) || z.resolveWith(b, [S]));
              },
            }),
            (S.ready.then = z.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? i.setTimeout(S.ready)
              : (b.addEventListener("DOMContentLoaded", F),
                i.addEventListener("load", F));
          var V = function (e, t, n, i, r, s, o) {
              var a = 0,
                l = e.length,
                c = null == n;
              if ("object" === T(n))
                for (a in ((r = !0), n)) V(e, t, a, n[a], !0, s, o);
              else if (
                void 0 !== i &&
                ((r = !0),
                v(i) || (o = !0),
                c &&
                  (o
                    ? (t.call(e, i), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(S(e), n);
                      }))),
                t)
              )
                for (; a < l; a++)
                  t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
              return r ? e : c ? t.call(e) : l ? t(e[0], n) : s;
            },
            G = /^-ms-/,
            Y = /-([a-z])/g;
          function U(e, t) {
            return t.toUpperCase();
          }
          function X(e) {
            return e.replace(G, "ms-").replace(Y, U);
          }
          var Q = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function K() {
            this.expando = S.expando + K.uid++;
          }
          (K.uid = 1),
            (K.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Q(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var i,
                  r = this.cache(e);
                if ("string" == typeof t) r[X(t)] = n;
                else for (i in t) r[X(i)] = t[i];
                return r;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][X(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(X)
                      : (t = X(t)) in i
                      ? [t]
                      : t.match(q) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 === t || S.isEmptyObject(i)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t);
              },
            });
          var J = new K(),
            Z = new K(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((i = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          S.extend({
            hasData: function (e) {
              return Z.hasData(e) || J.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return J.access(e, t, n);
            },
            _removeData: function (e, t) {
              J.remove(e, t);
            },
          }),
            S.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  r,
                  s = this[0],
                  o = s && s.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((r = Z.get(s)),
                    1 === s.nodeType && !J.get(s, "hasDataAttrs"))
                  ) {
                    for (n = o.length; n--; )
                      o[n] &&
                        0 === (i = o[n].name).indexOf("data-") &&
                        ((i = X(i.slice(5))), ne(s, i, r[i]));
                    J.set(s, "hasDataAttrs", !0);
                  }
                  return r;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : V(
                      this,
                      function (t) {
                        var n;
                        if (s && void 0 === t)
                          return void 0 !== (n = Z.get(s, e)) ||
                            void 0 !== (n = ne(s, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Z.remove(this, e);
                });
              },
            }),
            S.extend({
              queue: function (e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = J.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = J.access(e, t, S.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = S.queue(e, t),
                  i = n.length,
                  r = n.shift(),
                  s = S._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                  r &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete s.stop,
                    r.call(
                      e,
                      function () {
                        S.dequeue(e, t);
                      },
                      s
                    )),
                  !i && s && s.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  J.get(e, n) ||
                  J.access(e, n, {
                    empty: S.Callbacks("once memory").add(function () {
                      J.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            S.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? S.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = S.queue(this, e, t);
                        S._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            S.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  S.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  i = 1,
                  r = S.Deferred(),
                  s = this,
                  o = this.length,
                  a = function () {
                    --i || r.resolveWith(s, [s]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  o--;

                )
                  (n = J.get(s[o], e + "queueHooks")) &&
                    n.empty &&
                    (i++, n.empty.add(a));
                return a(), r.promise(t);
              },
            });
          var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            se = ["Top", "Right", "Bottom", "Left"],
            oe = b.documentElement,
            ae = function (e) {
              return S.contains(e.ownerDocument, e);
            },
            le = { composed: !0 };
          oe.getRootNode &&
            (ae = function (e) {
              return (
                S.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var ce = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ae(e) &&
                "none" === S.css(e, "display"))
            );
          };
          function ue(e, t, n, i) {
            var r,
              s,
              o = 20,
              a = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return S.css(e, t, "");
                  },
              l = a(),
              c = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
              u =
                e.nodeType &&
                (S.cssNumber[t] || ("px" !== c && +l)) &&
                re.exec(S.css(e, t));
            if (u && u[3] !== c) {
              for (l /= 2, c = c || u[3], u = +l || 1; o--; )
                S.style(e, t, u + c),
                  (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (o = 0),
                  (u /= s);
              (u *= 2), S.style(e, t, u + c), (n = n || []);
            }
            return (
              n &&
                ((u = +u || +l || 0),
                (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = c), (i.start = u), (i.end = r))),
              r
            );
          }
          var de = {};
          function pe(e) {
            var t,
              n = e.ownerDocument,
              i = e.nodeName,
              r = de[i];
            return (
              r ||
              ((t = n.body.appendChild(n.createElement(i))),
              (r = S.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === r && (r = "block"),
              (de[i] = r),
              r)
            );
          }
          function fe(e, t) {
            for (var n, i, r = [], s = 0, o = e.length; s < o; s++)
              (i = e[s]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((r[s] = J.get(i, "display") || null),
                      r[s] || (i.style.display = "")),
                    "" === i.style.display && ce(i) && (r[s] = pe(i)))
                  : "none" !== n && ((r[s] = "none"), J.set(i, "display", n)));
            for (s = 0; s < o; s++) null != r[s] && (e[s].style.display = r[s]);
            return e;
          }
          S.fn.extend({
            show: function () {
              return fe(this, !0);
            },
            hide: function () {
              return fe(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ce(this) ? S(this).show() : S(this).hide();
                  });
            },
          });
          var he,
            me,
            ge = /^(?:checkbox|radio)$/i,
            ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (he = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (me = b.createElement("input")).setAttribute("type", "radio"),
            me.setAttribute("checked", "checked"),
            me.setAttribute("name", "t"),
            he.appendChild(me),
            (g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (g.option = !!he.lastChild);
          var be = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function we(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && _(e, t)) ? S.merge([e], n) : n
            );
          }
          function xe(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
          }
          (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
            (be.th = be.td),
            g.option ||
              (be.optgroup = be.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Te = /<|&#?\w+;/;
          function Ee(e, t, n, i, r) {
            for (
              var s,
                o,
                a,
                l,
                c,
                u,
                d = t.createDocumentFragment(),
                p = [],
                f = 0,
                h = e.length;
              f < h;
              f++
            )
              if ((s = e[f]) || 0 === s)
                if ("object" === T(s)) S.merge(p, s.nodeType ? [s] : s);
                else if (Te.test(s)) {
                  for (
                    o = o || d.appendChild(t.createElement("div")),
                      a = (ve.exec(s) || ["", ""])[1].toLowerCase(),
                      l = be[a] || be._default,
                      o.innerHTML = l[1] + S.htmlPrefilter(s) + l[2],
                      u = l[0];
                    u--;

                  )
                    o = o.lastChild;
                  S.merge(p, o.childNodes),
                    ((o = d.firstChild).textContent = "");
                } else p.push(t.createTextNode(s));
            for (d.textContent = "", f = 0; (s = p[f++]); )
              if (i && S.inArray(s, i) > -1) r && r.push(s);
              else if (
                ((c = ae(s)),
                (o = we(d.appendChild(s), "script")),
                c && xe(o),
                n)
              )
                for (u = 0; (s = o[u++]); ) ye.test(s.type || "") && n.push(s);
            return d;
          }
          var Se = /^([^.]*)(?:\.(.+)|)/;
          function Ce() {
            return !0;
          }
          function ke() {
            return !1;
          }
          function Ae(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return b.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Le(e, t, n, i, r, s) {
            var o, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((i = i || n), (n = void 0)),
              t))
                Le(e, a, n, i, t[a], s);
              return e;
            }
            if (
              (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ("string" == typeof n
                    ? ((r = i), (i = void 0))
                    : ((r = i), (i = n), (n = void 0))),
              !1 === r)
            )
              r = ke;
            else if (!r) return e;
            return (
              1 === s &&
                ((o = r),
                (r = function (e) {
                  return S().off(e), o.apply(this, arguments);
                }),
                (r.guid = o.guid || (o.guid = S.guid++))),
              e.each(function () {
                S.event.add(this, t, r, i, n);
              })
            );
          }
          function Oe(e, t, n) {
            n
              ? (J.set(e, t, !1),
                S.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var i,
                      r,
                      s = J.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (s.length)
                        (S.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((s = a.call(arguments)),
                        J.set(this, t, s),
                        (i = n(this, t)),
                        this[t](),
                        s !== (r = J.get(this, t)) || i
                          ? J.set(this, t, !1)
                          : (r = {}),
                        s !== r)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          r && r.value
                        );
                    } else
                      s.length &&
                        (J.set(this, t, {
                          value: S.event.trigger(
                            S.extend(s[0], S.Event.prototype),
                            s.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === J.get(e, t) && S.event.add(e, t, Ce);
          }
          (S.event = {
            global: {},
            add: function (e, t, n, i, r) {
              var s,
                o,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                h,
                m,
                g = J.get(e);
              if (Q(e))
                for (
                  n.handler && ((n = (s = n).handler), (r = s.selector)),
                    r && S.find.matchesSelector(oe, r),
                    n.guid || (n.guid = S.guid++),
                    (l = g.events) || (l = g.events = Object.create(null)),
                    (o = g.handle) ||
                      (o = g.handle =
                        function (t) {
                          return void 0 !== S && S.event.triggered !== t.type
                            ? S.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(q) || [""]).length;
                  c--;

                )
                  (f = m = (a = Se.exec(t[c]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f &&
                      ((d = S.event.special[f] || {}),
                      (f = (r ? d.delegateType : d.bindType) || f),
                      (d = S.event.special[f] || {}),
                      (u = S.extend(
                        {
                          type: f,
                          origType: m,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: r,
                          needsContext: r && S.expr.match.needsContext.test(r),
                          namespace: h.join("."),
                        },
                        s
                      )),
                      (p = l[f]) ||
                        (((p = l[f] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(e, i, h, o)) ||
                          (e.addEventListener && e.addEventListener(f, o))),
                      d.add &&
                        (d.add.call(e, u),
                        u.handler.guid || (u.handler.guid = n.guid)),
                      r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                      (S.event.global[f] = !0));
            },
            remove: function (e, t, n, i, r) {
              var s,
                o,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                h,
                m,
                g = J.hasData(e) && J.get(e);
              if (g && (l = g.events)) {
                for (c = (t = (t || "").match(q) || [""]).length; c--; )
                  if (
                    ((f = m = (a = Se.exec(t[c]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f)
                  ) {
                    for (
                      d = S.event.special[f] || {},
                        p =
                          l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        o = s = p.length;
                      s--;

                    )
                      (u = p[s]),
                        (!r && m !== u.origType) ||
                          (n && n.guid !== u.guid) ||
                          (a && !a.test(u.namespace)) ||
                          (i &&
                            i !== u.selector &&
                            ("**" !== i || !u.selector)) ||
                          (p.splice(s, 1),
                          u.selector && p.delegateCount--,
                          d.remove && d.remove.call(e, u));
                    o &&
                      !p.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                        S.removeEvent(e, f, g.handle),
                      delete l[f]);
                  } else for (f in l) S.event.remove(e, f + t[c], n, i, !0);
                S.isEmptyObject(l) && J.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                i,
                r,
                s,
                o,
                a = new Array(arguments.length),
                l = S.event.fix(e),
                c =
                  (J.get(this, "events") || Object.create(null))[l.type] || [],
                u = S.event.special[l.type] || {};
              for (a[0] = l, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !u.preDispatch || !1 !== u.preDispatch.call(this, l))
              ) {
                for (
                  o = S.event.handlers.call(this, l, c), t = 0;
                  (r = o[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = r.elem, n = 0;
                    (s = r.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== s.namespace &&
                      !l.rnamespace.test(s.namespace)) ||
                      ((l.handleObj = s),
                      (l.data = s.data),
                      void 0 !==
                        (i = (
                          (S.event.special[s.origType] || {}).handle ||
                          s.handler
                        ).apply(r.elem, a)) &&
                        !1 === (l.result = i) &&
                        (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                i,
                r,
                s,
                o,
                a = [],
                l = t.delegateCount,
                c = e.target;
              if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (s = [], o = {}, n = 0; n < l; n++)
                      void 0 === o[(r = (i = t[n]).selector + " ")] &&
                        (o[r] = i.needsContext
                          ? S(r, this).index(c) > -1
                          : S.find(r, this, null, [c]).length),
                        o[r] && s.push(i);
                    s.length && a.push({ elem: c, handlers: s });
                  }
              return (
                (c = this),
                l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(S.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[S.expando] ? e : new S.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      _(t, "input") &&
                      Oe(t, "click", Ce),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      _(t, "input") &&
                      Oe(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ge.test(t.type) &&
                      t.click &&
                      _(t, "input") &&
                      J.get(t, "click")) ||
                    _(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (S.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (S.Event = function (e, t) {
              if (!(this instanceof S.Event)) return new S.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ce
                      : ke),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && S.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[S.expando] = !0);
            }),
            (S.Event.prototype = {
              constructor: S.Event,
              isDefaultPrevented: ke,
              isPropagationStopped: ke,
              isImmediatePropagationStopped: ke,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ce),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ce),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ce),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            S.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              S.event.addProp
            ),
            S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              S.event.special[e] = {
                setup: function () {
                  return Oe(this, e, Ae), !1;
                },
                trigger: function () {
                  return Oe(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            S.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                S.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      i = this,
                      r = e.relatedTarget,
                      s = e.handleObj;
                    return (
                      (r && (r === i || S.contains(i, r))) ||
                        ((e.type = s.origType),
                        (n = s.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            S.fn.extend({
              on: function (e, t, n, i) {
                return Le(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                return Le(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    S(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (r in e) this.off(r, t, e[r]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = ke),
                  this.each(function () {
                    S.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var _e = /<script|<style|<link/i,
            Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function De(e, t) {
            return (
              (_(e, "table") &&
                _(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                S(e).children("tbody")[0]) ||
              e
            );
          }
          function $e(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Ie(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Ne(e, t) {
            var n, i, r, s, o, a;
            if (1 === t.nodeType) {
              if (J.hasData(e) && (a = J.get(e).events))
                for (r in (J.remove(t, "handle events"), a))
                  for (n = 0, i = a[r].length; n < i; n++)
                    S.event.add(t, r, a[r][n]);
              Z.hasData(e) &&
                ((s = Z.access(e)), (o = S.extend({}, s)), Z.set(t, o));
            }
          }
          function je(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ge.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function qe(e, t, n, i) {
            t = l(t);
            var r,
              s,
              o,
              a,
              c,
              u,
              d = 0,
              p = e.length,
              f = p - 1,
              h = t[0],
              m = v(h);
            if (
              m ||
              (p > 1 && "string" == typeof h && !g.checkClone && Me.test(h))
            )
              return e.each(function (r) {
                var s = e.eq(r);
                m && (t[0] = h.call(this, r, s.html())), qe(s, t, n, i);
              });
            if (
              p &&
              ((s = (r = Ee(t, e[0].ownerDocument, !1, e, i)).firstChild),
              1 === r.childNodes.length && (r = s),
              s || i)
            ) {
              for (a = (o = S.map(we(r, "script"), $e)).length; d < p; d++)
                (c = r),
                  d !== f &&
                    ((c = S.clone(c, !0, !0)),
                    a && S.merge(o, we(c, "script"))),
                  n.call(e[d], c, d);
              if (a)
                for (
                  u = o[o.length - 1].ownerDocument, S.map(o, Ie), d = 0;
                  d < a;
                  d++
                )
                  (c = o[d]),
                    ye.test(c.type || "") &&
                      !J.access(c, "globalEval") &&
                      S.contains(u, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? S._evalUrl &&
                          !c.noModule &&
                          S._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            u
                          )
                        : x(c.textContent.replace(Pe, ""), c, u));
            }
            return e;
          }
          function He(e, t, n) {
            for (
              var i, r = t ? S.filter(t, e) : e, s = 0;
              null != (i = r[s]);
              s++
            )
              n || 1 !== i.nodeType || S.cleanData(we(i)),
                i.parentNode &&
                  (n && ae(i) && xe(we(i, "script")),
                  i.parentNode.removeChild(i));
            return e;
          }
          S.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var i,
                r,
                s,
                o,
                a = e.cloneNode(!0),
                l = ae(e);
              if (
                !(
                  g.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  S.isXMLDoc(e)
                )
              )
                for (o = we(a), i = 0, r = (s = we(e)).length; i < r; i++)
                  je(s[i], o[i]);
              if (t)
                if (n)
                  for (
                    s = s || we(e), o = o || we(a), i = 0, r = s.length;
                    i < r;
                    i++
                  )
                    Ne(s[i], o[i]);
                else Ne(e, a);
              return (
                (o = we(a, "script")).length > 0 &&
                  xe(o, !l && we(e, "script")),
                a
              );
            },
            cleanData: function (e) {
              for (
                var t, n, i, r = S.event.special, s = 0;
                void 0 !== (n = e[s]);
                s++
              )
                if (Q(n)) {
                  if ((t = n[J.expando])) {
                    if (t.events)
                      for (i in t.events)
                        r[i]
                          ? S.event.remove(n, i)
                          : S.removeEvent(n, i, t.handle);
                    n[J.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            S.fn.extend({
              detach: function (e) {
                return He(this, e, !0);
              },
              remove: function (e) {
                return He(this, e);
              },
              text: function (e) {
                return V(
                  this,
                  function (e) {
                    return void 0 === e
                      ? S.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return qe(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    De(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return qe(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = De(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return qe(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return qe(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (S.cleanData(we(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return S.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return V(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !_e.test(e) &&
                      !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = S.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (S.cleanData(we(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return qe(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    S.inArray(this, e) < 0 &&
                      (S.cleanData(we(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            S.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                S.fn[e] = function (e) {
                  for (
                    var n, i = [], r = S(e), s = r.length - 1, o = 0;
                    o <= s;
                    o++
                  )
                    (n = o === s ? this : this.clone(!0)),
                      S(r[o])[t](n),
                      c.apply(i, n.get());
                  return this.pushStack(i);
                };
              }
            );
          var Be = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            Re = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = i), t.getComputedStyle(e);
            },
            We = function (e, t, n) {
              var i,
                r,
                s = {};
              for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
              for (r in ((i = n.call(e)), t)) e.style[r] = s[r];
              return i;
            },
            ze = new RegExp(se.join("|"), "i");
          function Fe(e, t, n) {
            var i,
              r,
              s,
              o,
              a = e.style;
            return (
              (n = n || Re(e)) &&
                ("" !== (o = n.getPropertyValue(t) || n[t]) ||
                  ae(e) ||
                  (o = S.style(e, t)),
                !g.pixelBoxStyles() &&
                  Be.test(o) &&
                  ze.test(t) &&
                  ((i = a.width),
                  (r = a.minWidth),
                  (s = a.maxWidth),
                  (a.minWidth = a.maxWidth = a.width = o),
                  (o = n.width),
                  (a.width = i),
                  (a.minWidth = r),
                  (a.maxWidth = s))),
              void 0 !== o ? o + "" : o
            );
          }
          function Ve(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (u) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (u.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  oe.appendChild(c).appendChild(u);
                var e = i.getComputedStyle(u);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (u.style.right = "60%"),
                  (o = 36 === t(e.right)),
                  (r = 36 === t(e.width)),
                  (u.style.position = "absolute"),
                  (s = 12 === t(u.offsetWidth / 3)),
                  oe.removeChild(c),
                  (u = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              r,
              s,
              o,
              a,
              l,
              c = b.createElement("div"),
              u = b.createElement("div");
            u.style &&
              ((u.style.backgroundClip = "content-box"),
              (u.cloneNode(!0).style.backgroundClip = ""),
              (g.clearCloneStyle = "content-box" === u.style.backgroundClip),
              S.extend(g, {
                boxSizingReliable: function () {
                  return e(), r;
                },
                pixelBoxStyles: function () {
                  return e(), o;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), s;
                },
                reliableTrDimensions: function () {
                  var e, t, n, r;
                  return (
                    null == a &&
                      ((e = b.createElement("table")),
                      (t = b.createElement("tr")),
                      (n = b.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      oe.appendChild(e).appendChild(t).appendChild(n),
                      (r = i.getComputedStyle(t)),
                      (a =
                        parseInt(r.height, 10) +
                          parseInt(r.borderTopWidth, 10) +
                          parseInt(r.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      oe.removeChild(e)),
                    a
                  );
                },
              }));
          })();
          var Ge = ["Webkit", "Moz", "ms"],
            Ye = b.createElement("div").style,
            Ue = {};
          function Xe(e) {
            var t = S.cssProps[e] || Ue[e];
            return (
              t ||
              (e in Ye
                ? e
                : (Ue[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                        n--;

                      )
                        if ((e = Ge[n] + t) in Ye) return e;
                    })(e) || e))
            );
          }
          var Qe = /^(none|table(?!-c[ea]).+)/,
            Ke = /^--/,
            Je = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ze = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, n) {
            var i = re.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function tt(e, t, n, i, r, s) {
            var o = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; o < 4; o += 2)
              "margin" === n && (l += S.css(e, n + se[o], !0, r)),
                i
                  ? ("content" === n &&
                      (l -= S.css(e, "padding" + se[o], !0, r)),
                    "margin" !== n &&
                      (l -= S.css(e, "border" + se[o] + "Width", !0, r)))
                  : ((l += S.css(e, "padding" + se[o], !0, r)),
                    "padding" !== n
                      ? (l += S.css(e, "border" + se[o] + "Width", !0, r))
                      : (a += S.css(e, "border" + se[o] + "Width", !0, r)));
            return (
              !i &&
                s >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        s -
                        l -
                        a -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function nt(e, t, n) {
            var i = Re(e),
              r =
                (!g.boxSizingReliable() || n) &&
                "border-box" === S.css(e, "boxSizing", !1, i),
              s = r,
              o = Fe(e, t, i),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Be.test(o)) {
              if (!n) return o;
              o = "auto";
            }
            return (
              ((!g.boxSizingReliable() && r) ||
                (!g.reliableTrDimensions() && _(e, "tr")) ||
                "auto" === o ||
                (!parseFloat(o) && "inline" === S.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === S.css(e, "boxSizing", !1, i)),
                (s = a in e) && (o = e[a])),
              (o = parseFloat(o) || 0) +
                tt(e, t, n || (r ? "border" : "content"), s, i, o) +
                "px"
            );
          }
          function it(e, t, n, i, r) {
            return new it.prototype.init(e, t, n, i, r);
          }
          S.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Fe(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                  s,
                  o,
                  a = X(t),
                  l = Ke.test(t),
                  c = e.style;
                if (
                  (l || (t = Xe(a)),
                  (o = S.cssHooks[t] || S.cssHooks[a]),
                  void 0 === n)
                )
                  return o && "get" in o && void 0 !== (r = o.get(e, !1, i))
                    ? r
                    : c[t];
                "string" === (s = typeof n) &&
                  (r = re.exec(n)) &&
                  r[1] &&
                  ((n = ue(e, t, r)), (s = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== s ||
                      l ||
                      (n += (r && r[3]) || (S.cssNumber[a] ? "" : "px")),
                    g.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (o && "set" in o && void 0 === (n = o.set(e, n, i))) ||
                      (l ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, i) {
              var r,
                s,
                o,
                a = X(t);
              return (
                Ke.test(t) || (t = Xe(a)),
                (o = S.cssHooks[t] || S.cssHooks[a]) &&
                  "get" in o &&
                  (r = o.get(e, !0, n)),
                void 0 === r && (r = Fe(e, t, i)),
                "normal" === r && t in Ze && (r = Ze[t]),
                "" === n || n
                  ? ((s = parseFloat(r)), !0 === n || isFinite(s) ? s || 0 : r)
                  : r
              );
            },
          }),
            S.each(["height", "width"], function (e, t) {
              S.cssHooks[t] = {
                get: function (e, n, i) {
                  if (n)
                    return !Qe.test(S.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, i)
                      : We(e, Je, function () {
                          return nt(e, t, i);
                        });
                },
                set: function (e, n, i) {
                  var r,
                    s = Re(e),
                    o = !g.scrollboxSize() && "absolute" === s.position,
                    a =
                      (o || i) && "border-box" === S.css(e, "boxSizing", !1, s),
                    l = i ? tt(e, t, i, a, s) : 0;
                  return (
                    a &&
                      o &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(s[t]) -
                          tt(e, t, "border", !1, s) -
                          0.5
                      )),
                    l &&
                      (r = re.exec(n)) &&
                      "px" !== (r[3] || "px") &&
                      ((e.style[t] = n), (n = S.css(e, t))),
                    et(0, n, l)
                  );
                },
              };
            }),
            (S.cssHooks.marginLeft = Ve(g.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Fe(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      We(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            S.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (S.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var i = 0,
                        r = {},
                        s = "string" == typeof n ? n.split(" ") : [n];
                      i < 4;
                      i++
                    )
                      r[e + se[i] + t] = s[i] || s[i - 2] || s[0];
                    return r;
                  },
                }),
                  "margin" !== e && (S.cssHooks[e + t].set = et);
              }
            ),
            S.fn.extend({
              css: function (e, t) {
                return V(
                  this,
                  function (e, t, n) {
                    var i,
                      r,
                      s = {},
                      o = 0;
                    if (Array.isArray(t)) {
                      for (i = Re(e), r = t.length; o < r; o++)
                        s[t[o]] = S.css(e, t[o], !1, i);
                      return s;
                    }
                    return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (S.Tween = it),
            (it.prototype = {
              constructor: it,
              init: function (e, t, n, i, r, s) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = r || S.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = s || (S.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = it.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : it.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = it.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        S.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : it.propHooks._default.set(this),
                  this
                );
              },
            }),
            (it.prototype.init.prototype = it.prototype),
            (it.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  S.fx.step[e.prop]
                    ? S.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : S.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (it.propHooks.scrollTop = it.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (S.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (S.fx = it.prototype.init),
            (S.fx.step = {});
          var rt,
            st,
            ot = /^(?:toggle|show|hide)$/,
            at = /queueHooks$/;
          function lt() {
            st &&
              (!1 === b.hidden && i.requestAnimationFrame
                ? i.requestAnimationFrame(lt)
                : i.setTimeout(lt, S.fx.interval),
              S.fx.tick());
          }
          function ct() {
            return (
              i.setTimeout(function () {
                rt = void 0;
              }),
              (rt = Date.now())
            );
          }
          function ut(e, t) {
            var n,
              i = 0,
              r = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              r["margin" + (n = se[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r;
          }
          function dt(e, t, n) {
            for (
              var i,
                r = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                s = 0,
                o = r.length;
              s < o;
              s++
            )
              if ((i = r[s].call(n, t, e))) return i;
          }
          function pt(e, t, n) {
            var i,
              r,
              s = 0,
              o = pt.prefilters.length,
              a = S.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (r) return !1;
                for (
                  var t = rt || ct(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    i = 1 - (n / c.duration || 0),
                    s = 0,
                    o = c.tweens.length;
                  s < o;
                  s++
                )
                  c.tweens[s].run(i);
                return (
                  a.notifyWith(e, [c, i, n]),
                  i < 1 && o
                    ? n
                    : (o || a.notifyWith(e, [c, 1, 0]),
                      a.resolveWith(e, [c]),
                      !1)
                );
              },
              c = a.promise({
                elem: e,
                props: S.extend({}, t),
                opts: S.extend(
                  !0,
                  { specialEasing: {}, easing: S.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || ct(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var i = S.Tween(
                    e,
                    c.opts,
                    t,
                    n,
                    c.opts.specialEasing[t] || c.opts.easing
                  );
                  return c.tweens.push(i), i;
                },
                stop: function (t) {
                  var n = 0,
                    i = t ? c.tweens.length : 0;
                  if (r) return this;
                  for (r = !0; n < i; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                      : a.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              u = c.props;
            for (
              !(function (e, t) {
                var n, i, r, s, o;
                for (n in e)
                  if (
                    ((r = t[(i = X(n))]),
                    (s = e[n]),
                    Array.isArray(s) && ((r = s[1]), (s = e[n] = s[0])),
                    n !== i && ((e[i] = s), delete e[n]),
                    (o = S.cssHooks[i]) && ("expand" in o))
                  )
                    for (n in ((s = o.expand(s)), delete e[i], s))
                      (n in e) || ((e[n] = s[n]), (t[n] = r));
                  else t[i] = r;
              })(u, c.opts.specialEasing);
              s < o;
              s++
            )
              if ((i = pt.prefilters[s].call(c, e, u, c.opts)))
                return (
                  v(i.stop) &&
                    (S._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              S.map(u, dt, c),
              v(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              S.fx.timer(
                S.extend(l, { elem: e, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (S.Animation = S.extend(pt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ue(n.elem, e, re.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(q));
              for (var n, i = 0, r = e.length; i < r; i++)
                (n = e[i]),
                  (pt.tweeners[n] = pt.tweeners[n] || []),
                  pt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var i,
                  r,
                  s,
                  o,
                  a,
                  l,
                  c,
                  u,
                  d = "width" in t || "height" in t,
                  p = this,
                  f = {},
                  h = e.style,
                  m = e.nodeType && ce(e),
                  g = J.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (o = S._queueHooks(e, "fx")).unqueued &&
                    ((o.unqueued = 0),
                    (a = o.empty.fire),
                    (o.empty.fire = function () {
                      o.unqueued || a();
                    })),
                  o.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      o.unqueued--, S.queue(e, "fx").length || o.empty.fire();
                    });
                  })),
                t))
                  if (((r = t[i]), ot.test(r))) {
                    if (
                      (delete t[i],
                      (s = s || "toggle" === r),
                      r === (m ? "hide" : "show"))
                    ) {
                      if ("show" !== r || !g || void 0 === g[i]) continue;
                      m = !0;
                    }
                    f[i] = (g && g[i]) || S.style(e, i);
                  }
                if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(f))
                  for (i in (d &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (c = g && g.display) && (c = J.get(e, "display")),
                    "none" === (u = S.css(e, "display")) &&
                      (c
                        ? (u = c)
                        : (fe([e], !0),
                          (c = e.style.display || c),
                          (u = S.css(e, "display")),
                          fe([e]))),
                    ("inline" === u || ("inline-block" === u && null != c)) &&
                      "none" === S.css(e, "float") &&
                      (l ||
                        (p.done(function () {
                          h.display = c;
                        }),
                        null == c &&
                          ((u = h.display), (c = "none" === u ? "" : u))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  f))
                    l ||
                      (g
                        ? "hidden" in g && (m = g.hidden)
                        : (g = J.access(e, "fxshow", { display: c })),
                      s && (g.hidden = !m),
                      m && fe([e], !0),
                      p.done(function () {
                        for (i in (m || fe([e]), J.remove(e, "fxshow"), f))
                          S.style(e, i, f[i]);
                      })),
                      (l = dt(m ? g[i] : 0, i, p)),
                      i in g ||
                        ((g[i] = l.start),
                        m && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            },
          })),
            (S.speed = function (e, t, n) {
              var i =
                e && "object" == typeof e
                  ? S.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t),
                    };
              return (
                S.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in S.fx.speeds
                      ? (i.duration = S.fx.speeds[i.duration])
                      : (i.duration = S.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  v(i.old) && i.old.call(this),
                    i.queue && S.dequeue(this, i.queue);
                }),
                i
              );
            }),
            S.fn.extend({
              fadeTo: function (e, t, n, i) {
                return this.filter(ce)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, i);
              },
              animate: function (e, t, n, i) {
                var r = S.isEmptyObject(e),
                  s = S.speed(t, n, i),
                  o = function () {
                    var t = pt(this, S.extend({}, e), s);
                    (r || J.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (o.finish = o),
                  r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
                );
              },
              stop: function (e, t, n) {
                var i = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      r = null != e && e + "queueHooks",
                      s = S.timers,
                      o = J.get(this);
                    if (r) o[r] && o[r].stop && i(o[r]);
                    else
                      for (r in o) o[r] && o[r].stop && at.test(r) && i(o[r]);
                    for (r = s.length; r--; )
                      s[r].elem !== this ||
                        (null != e && s[r].queue !== e) ||
                        (s[r].anim.stop(n), (t = !1), s.splice(r, 1));
                    (!t && n) || S.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = J.get(this),
                      i = n[e + "queue"],
                      r = n[e + "queueHooks"],
                      s = S.timers,
                      o = i ? i.length : 0;
                    for (
                      n.finish = !0,
                        S.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        t = s.length;
                      t--;

                    )
                      s[t].elem === this &&
                        s[t].queue === e &&
                        (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < o; t++)
                      i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            S.each(["toggle", "show", "hide"], function (e, t) {
              var n = S.fn[t];
              S.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ut(t, !0), e, i, r);
              };
            }),
            S.each(
              {
                slideDown: ut("show"),
                slideUp: ut("hide"),
                slideToggle: ut("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                S.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
                };
              }
            ),
            (S.timers = []),
            (S.fx.tick = function () {
              var e,
                t = 0,
                n = S.timers;
              for (rt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || S.fx.stop(), (rt = void 0);
            }),
            (S.fx.timer = function (e) {
              S.timers.push(e), S.fx.start();
            }),
            (S.fx.interval = 13),
            (S.fx.start = function () {
              st || ((st = !0), lt());
            }),
            (S.fx.stop = function () {
              st = null;
            }),
            (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (S.fn.delay = function (e, t) {
              return (
                (e = (S.fx && S.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var r = i.setTimeout(t, e);
                  n.stop = function () {
                    i.clearTimeout(r);
                  };
                })
              );
            }),
            (function () {
              var e = b.createElement("input"),
                t = b
                  .createElement("select")
                  .appendChild(b.createElement("option"));
              (e.type = "checkbox"),
                (g.checkOn = "" !== e.value),
                (g.optSelected = t.selected),
                ((e = b.createElement("input")).value = "t"),
                (e.type = "radio"),
                (g.radioValue = "t" === e.value);
            })();
          var ft,
            ht = S.expr.attrHandle;
          S.fn.extend({
            attr: function (e, t) {
              return V(this, S.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                S.removeAttr(this, e);
              });
            },
          }),
            S.extend({
              attr: function (e, t, n) {
                var i,
                  r,
                  s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                  return void 0 === e.getAttribute
                    ? S.prop(e, t, n)
                    : ((1 === s && S.isXMLDoc(e)) ||
                        (r =
                          S.attrHooks[t.toLowerCase()] ||
                          (S.expr.match.bool.test(t) ? ft : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void S.removeAttr(e, t)
                          : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, n + ""), n)
                        : r && "get" in r && null !== (i = r.get(e, t))
                        ? i
                        : null == (i = S.find.attr(e, t))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!g.radioValue && "radio" === t && _(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  i = 0,
                  r = t && t.match(q);
                if (r && 1 === e.nodeType)
                  for (; (n = r[i++]); ) e.removeAttribute(n);
              },
            }),
            (ft = {
              set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ht[t] || S.find.attr;
              ht[t] = function (e, t, i) {
                var r,
                  s,
                  o = t.toLowerCase();
                return (
                  i ||
                    ((s = ht[o]),
                    (ht[o] = r),
                    (r = null != n(e, t, i) ? o : null),
                    (ht[o] = s)),
                  r
                );
              };
            });
          var mt = /^(?:input|select|textarea|button)$/i,
            gt = /^(?:a|area)$/i;
          function vt(e) {
            return (e.match(q) || []).join(" ");
          }
          function yt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function bt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(q)) || [];
          }
          S.fn.extend({
            prop: function (e, t) {
              return V(this, S.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[S.propFix[e] || e];
              });
            },
          }),
            S.extend({
              prop: function (e, t, n) {
                var i,
                  r,
                  s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                  return (
                    (1 === s && S.isXMLDoc(e)) ||
                      ((t = S.propFix[t] || t), (r = S.propHooks[t])),
                    void 0 !== n
                      ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = S.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : mt.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            g.optSelected ||
              (S.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            S.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                S.propFix[this.toLowerCase()] = this;
              }
            ),
            S.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  s,
                  o,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    S(this).addClass(e.call(this, t, yt(this)));
                  });
                if ((t = bt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))
                    ) {
                      for (o = 0; (s = t[o++]); )
                        i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                      r !== (a = vt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  s,
                  o,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    S(this).removeClass(e.call(this, t, yt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = bt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))
                    ) {
                      for (o = 0; (s = t[o++]); )
                        for (; i.indexOf(" " + s + " ") > -1; )
                          i = i.replace(" " + s + " ", " ");
                      r !== (a = vt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : v(e)
                  ? this.each(function (n) {
                      S(this).toggleClass(e.call(this, n, yt(this), t), t);
                    })
                  : this.each(function () {
                      var t, r, s, o;
                      if (i)
                        for (r = 0, s = S(this), o = bt(e); (t = o[r++]); )
                          s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = yt(this)) && J.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : J.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  i = 0;
                for (t = " " + e + " "; (n = this[i++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + vt(yt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var wt = /\r/g;
          S.fn.extend({
            val: function (e) {
              var t,
                n,
                i,
                r = this[0];
              return arguments.length
                ? ((i = v(e)),
                  this.each(function (n) {
                    var r;
                    1 === this.nodeType &&
                      (null == (r = i ? e.call(this, n, S(this).val()) : e)
                        ? (r = "")
                        : "number" == typeof r
                        ? (r += "")
                        : Array.isArray(r) &&
                          (r = S.map(r, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        S.valHooks[this.type] ||
                        S.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, r, "value")) ||
                        (this.value = r));
                  }))
                : r
                ? (t =
                    S.valHooks[r.type] ||
                    S.valHooks[r.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(r, "value"))
                  ? n
                  : "string" == typeof (n = r.value)
                  ? n.replace(wt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            S.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      i,
                      r = e.options,
                      s = e.selectedIndex,
                      o = "select-one" === e.type,
                      a = o ? null : [],
                      l = o ? s + 1 : r.length;
                    for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                      if (
                        ((n = r[i]).selected || i === s) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !_(n.parentNode, "optgroup"))
                      ) {
                        if (((t = S(n).val()), o)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var n, i, r = e.options, s = S.makeArray(t), o = r.length;
                      o--;

                    )
                      ((i = r[o]).selected =
                        S.inArray(S.valHooks.option.get(i), s) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), s;
                  },
                },
              },
            }),
            S.each(["radio", "checkbox"], function () {
              (S.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = S.inArray(S(e).val(), t) > -1);
                },
              }),
                g.checkOn ||
                  (S.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (g.focusin = "onfocusin" in i);
          var xt = /^(?:focusinfocus|focusoutblur)$/,
            Tt = function (e) {
              e.stopPropagation();
            };
          S.extend(S.event, {
            trigger: function (e, t, n, r) {
              var s,
                o,
                a,
                l,
                c,
                u,
                d,
                p,
                h = [n || b],
                m = f.call(e, "type") ? e.type : e,
                g = f.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((o = p = a = n = n || b),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !xt.test(m + S.event.triggered) &&
                  (m.indexOf(".") > -1 &&
                    ((g = m.split(".")), (m = g.shift()), g.sort()),
                  (c = m.indexOf(":") < 0 && "on" + m),
                  ((e = e[S.expando]
                    ? e
                    : new S.Event(m, "object" == typeof e && e)).isTrigger = r
                    ? 2
                    : 3),
                  (e.namespace = g.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : S.makeArray(t, [e])),
                  (d = S.event.special[m] || {}),
                  r || !d.trigger || !1 !== d.trigger.apply(n, t)))
              ) {
                if (!r && !d.noBubble && !y(n)) {
                  for (
                    l = d.delegateType || m,
                      xt.test(l + m) || (o = o.parentNode);
                    o;
                    o = o.parentNode
                  )
                    h.push(o), (a = o);
                  a === (n.ownerDocument || b) &&
                    h.push(a.defaultView || a.parentWindow || i);
                }
                for (s = 0; (o = h[s++]) && !e.isPropagationStopped(); )
                  (p = o),
                    (e.type = s > 1 ? l : d.bindType || m),
                    (u =
                      (J.get(o, "events") || Object.create(null))[e.type] &&
                      J.get(o, "handle")) && u.apply(o, t),
                    (u = c && o[c]) &&
                      u.apply &&
                      Q(o) &&
                      ((e.result = u.apply(o, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = m),
                  r ||
                    e.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                    !Q(n) ||
                    (c &&
                      v(n[m]) &&
                      !y(n) &&
                      ((a = n[c]) && (n[c] = null),
                      (S.event.triggered = m),
                      e.isPropagationStopped() && p.addEventListener(m, Tt),
                      n[m](),
                      e.isPropagationStopped() && p.removeEventListener(m, Tt),
                      (S.event.triggered = void 0),
                      a && (n[c] = a))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var i = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
              S.event.trigger(i, null, t);
            },
          }),
            S.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  S.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0);
              },
            }),
            g.focusin ||
              S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  S.event.simulate(t, e.target, S.event.fix(e));
                };
                S.event.special[t] = {
                  setup: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = J.access(i, t);
                    r || i.addEventListener(e, n, !0),
                      J.access(i, t, (r || 0) + 1);
                  },
                  teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = J.access(i, t) - 1;
                    r
                      ? J.access(i, t, r)
                      : (i.removeEventListener(e, n, !0), J.remove(i, t));
                  },
                };
              });
          var Et = i.location,
            St = { guid: Date.now() },
            Ct = /\?/;
          S.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new i.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                S.error(
                  "Invalid XML: " +
                    (n
                      ? S.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var kt = /\[\]$/,
            At = /\r?\n/g,
            Lt = /^(?:submit|button|image|reset|file)$/i,
            Ot = /^(?:input|select|textarea|keygen)/i;
          function _t(e, t, n, i) {
            var r;
            if (Array.isArray(t))
              S.each(t, function (t, r) {
                n || kt.test(e)
                  ? i(e, r)
                  : _t(
                      e +
                        "[" +
                        ("object" == typeof r && null != r ? t : "") +
                        "]",
                      r,
                      n,
                      i
                    );
              });
            else if (n || "object" !== T(t)) i(e, t);
            else for (r in t) _t(e + "[" + r + "]", t[r], n, i);
          }
          (S.param = function (e, t) {
            var n,
              i = [],
              r = function (e, t) {
                var n = v(t) ? t() : t;
                i[i.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
              S.each(e, function () {
                r(this.name, this.value);
              });
            else for (n in e) _t(n, e[n], t, r);
            return i.join("&");
          }),
            S.fn.extend({
              serialize: function () {
                return S.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = S.prop(this, "elements");
                  return e ? S.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !S(this).is(":disabled") &&
                      Ot.test(this.nodeName) &&
                      !Lt.test(e) &&
                      (this.checked || !ge.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = S(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? S.map(n, function (e) {
                          return { name: t.name, value: e.replace(At, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(At, "\r\n") };
                  })
                  .get();
              },
            });
          var Mt = /%20/g,
            Pt = /#.*$/,
            Dt = /([?&])_=[^&]*/,
            $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            It = /^(?:GET|HEAD)$/,
            Nt = /^\/\//,
            jt = {},
            qt = {},
            Ht = "*/".concat("*"),
            Bt = b.createElement("a");
          function Rt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                r = 0,
                s = t.toLowerCase().match(q) || [];
              if (v(n))
                for (; (i = s[r++]); )
                  "+" === i[0]
                    ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                    : (e[i] = e[i] || []).push(n);
            };
          }
          function Wt(e, t, n, i) {
            var r = {},
              s = e === qt;
            function o(a) {
              var l;
              return (
                (r[a] = !0),
                S.each(e[a] || [], function (e, a) {
                  var c = a(t, n, i);
                  return "string" != typeof c || s || r[c]
                    ? s
                      ? !(l = c)
                      : void 0
                    : (t.dataTypes.unshift(c), o(c), !1);
                }),
                l
              );
            }
            return o(t.dataTypes[0]) || (!r["*"] && o("*"));
          }
          function zt(e, t) {
            var n,
              i,
              r = S.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && S.extend(!0, e, i), e;
          }
          (Bt.href = Et.href),
            S.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Et.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Et.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Ht,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": S.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? zt(zt(e, S.ajaxSettings), t) : zt(S.ajaxSettings, e);
              },
              ajaxPrefilter: Rt(jt),
              ajaxTransport: Rt(qt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  r,
                  s,
                  o,
                  a,
                  l,
                  c,
                  u,
                  d,
                  p,
                  f = S.ajaxSetup({}, t),
                  h = f.context || f,
                  m = f.context && (h.nodeType || h.jquery) ? S(h) : S.event,
                  g = S.Deferred(),
                  v = S.Callbacks("once memory"),
                  y = f.statusCode || {},
                  w = {},
                  x = {},
                  T = "canceled",
                  E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!o)
                          for (o = {}; (t = $t.exec(s)); )
                            o[t[1].toLowerCase() + " "] = (
                              o[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = o[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? s : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == c &&
                          ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                          (w[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == c && (f.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) E.always(e[E.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), C(0, t), this;
                    },
                  };
                if (
                  (g.promise(E),
                  (f.url = ((e || f.url || Et.href) + "").replace(
                    Nt,
                    Et.protocol + "//"
                  )),
                  (f.type = t.method || t.type || f.method || f.type),
                  (f.dataTypes = (f.dataType || "*").toLowerCase().match(q) || [
                    "",
                  ]),
                  null == f.crossDomain)
                ) {
                  l = b.createElement("a");
                  try {
                    (l.href = f.url),
                      (l.href = l.href),
                      (f.crossDomain =
                        Bt.protocol + "//" + Bt.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    f.crossDomain = !0;
                  }
                }
                if (
                  (f.data &&
                    f.processData &&
                    "string" != typeof f.data &&
                    (f.data = S.param(f.data, f.traditional)),
                  Wt(jt, f, t, E),
                  c)
                )
                  return E;
                for (d in ((u = S.event && f.global) &&
                  0 == S.active++ &&
                  S.event.trigger("ajaxStart"),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !It.test(f.type)),
                (r = f.url.replace(Pt, "")),
                f.hasContent
                  ? f.data &&
                    f.processData &&
                    0 ===
                      (f.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (f.data = f.data.replace(Mt, "+"))
                  : ((p = f.url.slice(r.length)),
                    f.data &&
                      (f.processData || "string" == typeof f.data) &&
                      ((r += (Ct.test(r) ? "&" : "?") + f.data), delete f.data),
                    !1 === f.cache &&
                      ((r = r.replace(Dt, "$1")),
                      (p = (Ct.test(r) ? "&" : "?") + "_=" + St.guid++ + p)),
                    (f.url = r + p)),
                f.ifModified &&
                  (S.lastModified[r] &&
                    E.setRequestHeader("If-Modified-Since", S.lastModified[r]),
                  S.etag[r] && E.setRequestHeader("If-None-Match", S.etag[r])),
                ((f.data && f.hasContent && !1 !== f.contentType) ||
                  t.contentType) &&
                  E.setRequestHeader("Content-Type", f.contentType),
                E.setRequestHeader(
                  "Accept",
                  f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                    ? f.accepts[f.dataTypes[0]] +
                        ("*" !== f.dataTypes[0] ? ", " + Ht + "; q=0.01" : "")
                    : f.accepts["*"]
                ),
                f.headers))
                  E.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(h, E, f) || c))
                  return E.abort();
                if (
                  ((T = "abort"),
                  v.add(f.complete),
                  E.done(f.success),
                  E.fail(f.error),
                  (n = Wt(qt, f, t, E)))
                ) {
                  if (
                    ((E.readyState = 1), u && m.trigger("ajaxSend", [E, f]), c)
                  )
                    return E;
                  f.async &&
                    f.timeout > 0 &&
                    (a = i.setTimeout(function () {
                      E.abort("timeout");
                    }, f.timeout));
                  try {
                    (c = !1), n.send(w, C);
                  } catch (e) {
                    if (c) throw e;
                    C(-1, e);
                  }
                } else C(-1, "No Transport");
                function C(e, t, o, l) {
                  var d,
                    p,
                    b,
                    w,
                    x,
                    T = t;
                  c ||
                    ((c = !0),
                    a && i.clearTimeout(a),
                    (n = void 0),
                    (s = l || ""),
                    (E.readyState = e > 0 ? 4 : 0),
                    (d = (e >= 200 && e < 300) || 304 === e),
                    o &&
                      (w = (function (e, t, n) {
                        for (
                          var i, r, s, o, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (i)
                          for (r in a)
                            if (a[r] && a[r].test(i)) {
                              l.unshift(r);
                              break;
                            }
                        if (l[0] in n) s = l[0];
                        else {
                          for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                              s = r;
                              break;
                            }
                            o || (o = r);
                          }
                          s = s || o;
                        }
                        if (s) return s !== l[0] && l.unshift(s), n[s];
                      })(f, E, o)),
                    !d &&
                      S.inArray("script", f.dataTypes) > -1 &&
                      S.inArray("json", f.dataTypes) < 0 &&
                      (f.converters["text script"] = function () {}),
                    (w = (function (e, t, n, i) {
                      var r,
                        s,
                        o,
                        a,
                        l,
                        c = {},
                        u = e.dataTypes.slice();
                      if (u[1])
                        for (o in e.converters)
                          c[o.toLowerCase()] = e.converters[o];
                      for (s = u.shift(); s; )
                        if (
                          (e.responseFields[s] && (n[e.responseFields[s]] = t),
                          !l &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = s),
                          (s = u.shift()))
                        )
                          if ("*" === s) s = l;
                          else if ("*" !== l && l !== s) {
                            if (!(o = c[l + " " + s] || c["* " + s]))
                              for (r in c)
                                if (
                                  (a = r.split(" "))[1] === s &&
                                  (o = c[l + " " + a[0]] || c["* " + a[0]])
                                ) {
                                  !0 === o
                                    ? (o = c[r])
                                    : !0 !== c[r] &&
                                      ((s = a[0]), u.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== o)
                              if (o && e.throws) t = o(t);
                              else
                                try {
                                  t = o(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: o
                                      ? e
                                      : "No conversion from " + l + " to " + s,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(f, w, E, d)),
                    d
                      ? (f.ifModified &&
                          ((x = E.getResponseHeader("Last-Modified")) &&
                            (S.lastModified[r] = x),
                          (x = E.getResponseHeader("etag")) && (S.etag[r] = x)),
                        204 === e || "HEAD" === f.type
                          ? (T = "nocontent")
                          : 304 === e
                          ? (T = "notmodified")
                          : ((T = w.state), (p = w.data), (d = !(b = w.error))))
                      : ((b = T),
                        (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                    (E.status = e),
                    (E.statusText = (t || T) + ""),
                    d
                      ? g.resolveWith(h, [p, T, E])
                      : g.rejectWith(h, [E, T, b]),
                    E.statusCode(y),
                    (y = void 0),
                    u &&
                      m.trigger(d ? "ajaxSuccess" : "ajaxError", [
                        E,
                        f,
                        d ? p : b,
                      ]),
                    v.fireWith(h, [E, T]),
                    u &&
                      (m.trigger("ajaxComplete", [E, f]),
                      --S.active || S.event.trigger("ajaxStop")));
                }
                return E;
              },
              getJSON: function (e, t, n) {
                return S.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return S.get(e, void 0, t, "script");
              },
            }),
            S.each(["get", "post"], function (e, t) {
              S[t] = function (e, n, i, r) {
                return (
                  v(n) && ((r = r || i), (i = n), (n = void 0)),
                  S.ajax(
                    S.extend(
                      { url: e, type: t, dataType: r, data: n, success: i },
                      S.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            S.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (S._evalUrl = function (e, t, n) {
              return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  S.globalEval(e, t, n);
                },
              });
            }),
            S.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return v(e)
                  ? this.each(function (t) {
                      S(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = S(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  S(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      S(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (S.expr.pseudos.hidden = function (e) {
              return !S.expr.pseudos.visible(e);
            }),
            (S.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (S.ajaxSettings.xhr = function () {
              try {
                return new i.XMLHttpRequest();
              } catch (e) {}
            });
          var Ft = { 0: 200, 1223: 204 },
            Vt = S.ajaxSettings.xhr();
          (g.cors = !!Vt && "withCredentials" in Vt),
            (g.ajax = Vt = !!Vt),
            S.ajaxTransport(function (e) {
              var t, n;
              if (g.cors || (Vt && !e.crossDomain))
                return {
                  send: function (r, s) {
                    var o,
                      a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (o in e.xhrFields) a[o] = e.xhrFields[o];
                    for (o in (e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      r["X-Requested-With"] ||
                      (r["X-Requested-With"] = "XMLHttpRequest"),
                    r))
                      a.setRequestHeader(o, r[o]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? s(0, "error")
                              : s(a.status, a.statusText)
                            : s(
                                Ft[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (n = a.onerror = a.ontimeout = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              i.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            S.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            S.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return S.globalEval(e), e;
                },
              },
            }),
            S.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            S.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (i, r) {
                    (t = S("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && r("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Gt,
            Yt = [],
            Ut = /(=)\?(?=&|$)|\?\?/;
          S.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Yt.pop() || S.expando + "_" + St.guid++;
              return (this[e] = !0), e;
            },
          }),
            S.ajaxPrefilter("json jsonp", function (e, t, n) {
              var r,
                s,
                o,
                a =
                  !1 !== e.jsonp &&
                  (Ut.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Ut.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (r = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Ut, "$1" + r))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function () {
                    return o || S.error(r + " was not called"), o[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (s = i[r]),
                  (i[r] = function () {
                    o = arguments;
                  }),
                  n.always(function () {
                    void 0 === s ? S(i).removeProp(r) : (i[r] = s),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(r)),
                      o && v(s) && s(o[0]),
                      (o = s = void 0);
                  }),
                  "script"
                );
            }),
            (g.createHTMLDocument =
              (((Gt = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Gt.childNodes.length)),
            (S.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (g.createHTMLDocument
                      ? (((i = (t =
                          b.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = b.location.href),
                        t.head.appendChild(i))
                      : (t = b)),
                  (s = !n && []),
                  (r = M.exec(e))
                    ? [t.createElement(r[1])]
                    : ((r = Ee([e], t, s)),
                      s && s.length && S(s).remove(),
                      S.merge([], r.childNodes)));
              var i, r, s;
            }),
            (S.fn.load = function (e, t, n) {
              var i,
                r,
                s,
                o = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((i = vt(e.slice(a))), (e = e.slice(0, a))),
                v(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (r = "POST"),
                o.length > 0 &&
                  S.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (s = arguments),
                        o.html(
                          i ? S("<div>").append(S.parseHTML(e)).find(i) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          o.each(function () {
                            n.apply(this, s || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (S.expr.pseudos.animated = function (e) {
              return S.grep(S.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (S.offset = {
              setOffset: function (e, t, n) {
                var i,
                  r,
                  s,
                  o,
                  a,
                  l,
                  c = S.css(e, "position"),
                  u = S(e),
                  d = {};
                "static" === c && (e.style.position = "relative"),
                  (a = u.offset()),
                  (s = S.css(e, "top")),
                  (l = S.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (s + l).indexOf("auto") > -1
                    ? ((o = (i = u.position()).top), (r = i.left))
                    : ((o = parseFloat(s) || 0), (r = parseFloat(l) || 0)),
                  v(t) && (t = t.call(e, n, S.extend({}, a))),
                  null != t.top && (d.top = t.top - a.top + o),
                  null != t.left && (d.left = t.left - a.left + r),
                  "using" in t ? t.using.call(e, d) : u.css(d);
              },
            }),
            S.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        S.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    i = this[0],
                    r = { top: 0, left: 0 };
                  if ("fixed" === S.css(i, "position"))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === S.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((r = S(e).offset()).top += S.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (r.left += S.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - r.top - S.css(i, "marginTop", !0),
                    left: t.left - r.left - S.css(i, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === S.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || oe;
                });
              },
            }),
            S.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                S.fn[e] = function (i) {
                  return V(
                    this,
                    function (e, i, r) {
                      var s;
                      if (
                        (y(e)
                          ? (s = e)
                          : 9 === e.nodeType && (s = e.defaultView),
                        void 0 === r)
                      )
                        return s ? s[t] : e[i];
                      s
                        ? s.scrollTo(
                            n ? s.pageXOffset : r,
                            n ? r : s.pageYOffset
                          )
                        : (e[i] = r);
                    },
                    e,
                    i,
                    arguments.length
                  );
                };
              }
            ),
            S.each(["top", "left"], function (e, t) {
              S.cssHooks[t] = Ve(g.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Fe(e, t)), Be.test(n) ? S(e).position()[t] + "px" : n
                  );
              });
            }),
            S.each({ Height: "height", Width: "width" }, function (e, t) {
              S.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, i) {
                  S.fn[i] = function (r, s) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                      a = n || (!0 === r || !0 === s ? "margin" : "border");
                    return V(
                      this,
                      function (t, n, r) {
                        var s;
                        return y(t)
                          ? 0 === i.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((s = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              s["scroll" + e],
                              t.body["offset" + e],
                              s["offset" + e],
                              s["client" + e]
                            ))
                          : void 0 === r
                          ? S.css(t, n, a)
                          : S.style(t, n, r, a);
                      },
                      t,
                      o ? r : void 0,
                      o
                    );
                  };
                }
              );
            }),
            S.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                S.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            S.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            S.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                S.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (S.proxy = function (e, t) {
            var n, i, r;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (i = a.call(arguments, 2)),
                (r = function () {
                  return e.apply(t || this, i.concat(a.call(arguments)));
                }),
                (r.guid = e.guid = e.guid || S.guid++),
                r
              );
          }),
            (S.holdReady = function (e) {
              e ? S.readyWait++ : S.ready(!0);
            }),
            (S.isArray = Array.isArray),
            (S.parseJSON = JSON.parse),
            (S.nodeName = _),
            (S.isFunction = v),
            (S.isWindow = y),
            (S.camelCase = X),
            (S.type = T),
            (S.now = Date.now),
            (S.isNumeric = function (e) {
              var t = S.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (S.trim = function (e) {
              return null == e ? "" : (e + "").replace(Xt, "");
            }),
            void 0 ===
              (n = function () {
                return S;
              }.apply(t, [])) || (e.exports = n);
          var Qt = i.jQuery,
            Kt = i.$;
          return (
            (S.noConflict = function (e) {
              return (
                i.$ === S && (i.$ = Kt),
                e && i.jQuery === S && (i.jQuery = Qt),
                S
              );
            }),
            void 0 === r && (i.jQuery = i.$ = S),
            S
          );
        });
      },
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                      Object.prototype.hasOwnProperty.call(n, i) &&
                        (e[i] = n[i]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            n =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = t && "IntersectionObserver" in window,
            r = t && "classList" in document.createElement("p"),
            s = t && window.devicePixelRatio > 1,
            o = {
              elements_selector: ".lazy",
              container: n || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
            },
            a = function (t) {
              return e({}, o, t);
            },
            l = function (e, t) {
              var n,
                i = "LazyLoad::Initialized",
                r = new e(t);
              try {
                n = new CustomEvent(i, { detail: { instance: r } });
              } catch (e) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  i,
                  !1,
                  !1,
                  { instance: r }
                );
              }
              window.dispatchEvent(n);
            },
            c = "src",
            u = "srcset",
            d = "sizes",
            p = "poster",
            f = "llOriginalAttrs",
            h = "loading",
            m = "loaded",
            g = "applied",
            v = "error",
            y = "native",
            b = "data-",
            w = "ll-status",
            x = function (e, t) {
              return e.getAttribute(b + t);
            },
            T = function (e) {
              return x(e, w);
            },
            E = function (e, t) {
              return (function (e, t, n) {
                var i = "data-ll-status";
                null !== n ? e.setAttribute(i, n) : e.removeAttribute(i);
              })(e, 0, t);
            },
            S = function (e) {
              return E(e, null);
            },
            C = function (e) {
              return null === T(e);
            },
            k = function (e) {
              return T(e) === y;
            },
            A = [h, m, g, v],
            L = function (e, t, n, i) {
              e &&
                (void 0 === i ? (void 0 === n ? e(t) : e(t, n)) : e(t, n, i));
            },
            O = function (e, t) {
              r
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            _ = function (e, t) {
              r
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            M = function (e) {
              return e.llTempImage;
            },
            P = function (e, t) {
              if (t) {
                var n = t._observer;
                n && n.unobserve(e);
              }
            },
            D = function (e, t) {
              e && (e.loadingCount += t);
            },
            $ = function (e, t) {
              e && (e.toLoadCount = t);
            },
            I = function (e) {
              for (var t, n = [], i = 0; (t = e.children[i]); i += 1)
                "SOURCE" === t.tagName && n.push(t);
              return n;
            },
            N = function (e, t) {
              var n = e.parentNode;
              n && "PICTURE" === n.tagName && I(n).forEach(t);
            },
            j = function (e, t) {
              I(e).forEach(t);
            },
            q = [c],
            H = [c, p],
            B = [c, u, d],
            R = function (e) {
              return !!e[f];
            },
            W = function (e) {
              return e[f];
            },
            z = function (e) {
              return delete e[f];
            },
            F = function (e, t) {
              if (!R(e)) {
                var n = {};
                t.forEach(function (t) {
                  n[t] = e.getAttribute(t);
                }),
                  (e[f] = n);
              }
            },
            V = function (e, t) {
              if (R(e)) {
                var n = W(e);
                t.forEach(function (t) {
                  !(function (e, t, n) {
                    n ? e.setAttribute(t, n) : e.removeAttribute(t);
                  })(e, t, n[t]);
                });
              }
            },
            G = function (e, t, n) {
              O(e, t.class_loading),
                E(e, h),
                n && (D(n, 1), L(t.callback_loading, e, n));
            },
            Y = function (e, t, n) {
              n && e.setAttribute(t, n);
            },
            U = function (e, t) {
              Y(e, d, x(e, t.data_sizes)),
                Y(e, u, x(e, t.data_srcset)),
                Y(e, c, x(e, t.data_src));
            },
            X = {
              IMG: function (e, t) {
                N(e, function (e) {
                  F(e, B), U(e, t);
                }),
                  F(e, B),
                  U(e, t);
              },
              IFRAME: function (e, t) {
                F(e, q), Y(e, c, x(e, t.data_src));
              },
              VIDEO: function (e, t) {
                j(e, function (e) {
                  F(e, q), Y(e, c, x(e, t.data_src));
                }),
                  F(e, H),
                  Y(e, p, x(e, t.data_poster)),
                  Y(e, c, x(e, t.data_src)),
                  e.load();
              },
            },
            Q = ["IMG", "IFRAME", "VIDEO"],
            K = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                L(e.callback_finish, t);
            },
            J = function (e, t, n) {
              e.addEventListener(t, n), (e.llEvLisnrs[t] = n);
            },
            Z = function (e, t, n) {
              e.removeEventListener(t, n);
            },
            ee = function (e) {
              return !!e.llEvLisnrs;
            },
            te = function (e) {
              if (ee(e)) {
                var t = e.llEvLisnrs;
                for (var n in t) {
                  var i = t[n];
                  Z(e, n, i);
                }
                delete e.llEvLisnrs;
              }
            },
            ne = function (e, t, n) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                D(n, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(n),
                _(e, t.class_loading),
                t.unobserve_completed && P(e, n);
            },
            ie = function (e, t, n) {
              var i = M(e) || e;
              ee(i) ||
                (function (e, t, n) {
                  ee(e) || (e.llEvLisnrs = {});
                  var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  J(e, i, t), J(e, "error", n);
                })(
                  i,
                  function (r) {
                    !(function (e, t, n, i) {
                      var r = k(t);
                      ne(t, n, i),
                        O(t, n.class_loaded),
                        E(t, m),
                        L(n.callback_loaded, t, i),
                        r || K(n, i);
                    })(0, e, t, n),
                      te(i);
                  },
                  function (r) {
                    !(function (e, t, n, i) {
                      var r = k(t);
                      ne(t, n, i),
                        O(t, n.class_error),
                        E(t, v),
                        L(n.callback_error, t, i),
                        r || K(n, i);
                    })(0, e, t, n),
                      te(i);
                  }
                );
            },
            re = function (e, t, n) {
              !(function (e) {
                e.llTempImage = document.createElement("IMG");
              })(e),
                ie(e, t, n),
                (function (e) {
                  R(e) || (e[f] = { backgroundImage: e.style.backgroundImage });
                })(e),
                (function (e, t, n) {
                  var i = x(e, t.data_bg),
                    r = x(e, t.data_bg_hidpi),
                    o = s && r ? r : i;
                  o &&
                    ((e.style.backgroundImage = 'url("'.concat(o, '")')),
                    M(e).setAttribute(c, o),
                    G(e, t, n));
                })(e, t, n),
                (function (e, t, n) {
                  var i = x(e, t.data_bg_multi),
                    r = x(e, t.data_bg_multi_hidpi),
                    o = s && r ? r : i;
                  o &&
                    ((e.style.backgroundImage = o),
                    (function (e, t, n) {
                      O(e, t.class_applied),
                        E(e, g),
                        n &&
                          (t.unobserve_completed && P(e, t),
                          L(t.callback_applied, e, n));
                    })(e, t, n));
                })(e, t, n);
            },
            se = function (e, t, n) {
              !(function (e) {
                return Q.indexOf(e.tagName) > -1;
              })(e)
                ? re(e, t, n)
                : (function (e, t, n) {
                    ie(e, t, n),
                      (function (e, t, n) {
                        var i = X[e.tagName];
                        i && (i(e, t), G(e, t, n));
                      })(e, t, n);
                  })(e, t, n);
            },
            oe = function (e) {
              e.removeAttribute(c), e.removeAttribute(u), e.removeAttribute(d);
            },
            ae = function (e) {
              N(e, function (e) {
                V(e, B);
              }),
                V(e, B);
            },
            le = {
              IMG: ae,
              IFRAME: function (e) {
                V(e, q);
              },
              VIDEO: function (e) {
                j(e, function (e) {
                  V(e, q);
                }),
                  V(e, H),
                  e.load();
              },
            },
            ce = function (e, t) {
              (function (e) {
                var t = le[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (R(e)) {
                        var t = W(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  C(e) ||
                    k(e) ||
                    (_(e, t.class_entered),
                    _(e, t.class_exited),
                    _(e, t.class_applied),
                    _(e, t.class_loading),
                    _(e, t.class_loaded),
                    _(e, t.class_error));
                })(e, t),
                S(e),
                z(e);
            },
            ue = ["IMG", "IFRAME", "VIDEO"],
            de = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            pe = function (e, t, n) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, n, i) {
                      var r = (function (e) {
                        return A.indexOf(T(e)) >= 0;
                      })(e);
                      E(e, "entered"),
                        O(e, n.class_entered),
                        _(e, n.class_exited),
                        (function (e, t, n) {
                          t.unobserve_entered && P(e, n);
                        })(e, n, i),
                        L(n.callback_enter, e, t, i),
                        r || se(e, n, i);
                    })(e.target, e, t, n)
                  : (function (e, t, n, i) {
                      C(e) ||
                        (O(e, n.class_exited),
                        (function (e, t, n, i) {
                          n.cancel_on_exit &&
                            (function (e) {
                              return T(e) === h;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (te(e),
                            (function (e) {
                              N(e, function (e) {
                                oe(e);
                              }),
                                oe(e);
                            })(e),
                            ae(e),
                            _(e, n.class_loading),
                            D(i, -1),
                            S(e),
                            L(n.callback_cancel, e, t, i));
                        })(e, t, n, i),
                        L(n.callback_exit, e, t, i));
                    })(e.target, e, t, n);
              });
            },
            fe = function (e) {
              return Array.prototype.slice.call(e);
            },
            he = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            me = function (e) {
              return (function (e) {
                return T(e) === v;
              })(e);
            },
            ge = function (e, t) {
              return (function (e) {
                return fe(e).filter(C);
              })(e || he(t));
            },
            ve = function (e, n) {
              var r = a(e);
              (this._settings = r),
                (this.loadingCount = 0),
                (function (e, t) {
                  i &&
                    !de(e) &&
                    (t._observer = new IntersectionObserver(
                      function (n) {
                        pe(n, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(r, this),
                (function (e, n) {
                  t &&
                    window.addEventListener("online", function () {
                      !(function (e, t) {
                        var n;
                        ((n = he(e)), fe(n).filter(me)).forEach(function (t) {
                          _(t, e.class_error), S(t);
                        }),
                          t.update();
                      })(e, n);
                    });
                })(r, this),
                this.update(n);
            };
          return (
            (ve.prototype = {
              update: function (e) {
                var t,
                  r,
                  s = this._settings,
                  o = ge(e, s);
                $(this, o.length),
                  !n && i
                    ? de(s)
                      ? (function (e, t, n) {
                          e.forEach(function (e) {
                            -1 !== ue.indexOf(e.tagName) &&
                              (function (e, t, n) {
                                e.setAttribute("loading", "lazy"),
                                  ie(e, t, n),
                                  (function (e, t) {
                                    var n = X[e.tagName];
                                    n && n(e, t);
                                  })(e, t),
                                  E(e, y);
                              })(e, t, n);
                          }),
                            $(n, 0);
                        })(o, s, this)
                      : ((r = o),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, r))
                    : this.loadAll(o);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  he(this._settings).forEach(function (e) {
                    z(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  n = this._settings;
                ge(e, n).forEach(function (e) {
                  P(e, t), se(e, n, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                he(e).forEach(function (t) {
                  ce(t, e);
                });
              },
            }),
            (ve.load = function (e, t) {
              var n = a(t);
              se(e, n);
            }),
            (ve.resetStatus = function (e) {
              S(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var n, i = 0; (n = t[i]); i += 1) l(e, n);
                  else l(e, t);
              })(ve, window.lazyLoadOptions),
            ve
          );
        })();
      },
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var s = (t[i] = { exports: {} });
    return e[i].call(s.exports, s, s.exports, n), s.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      this.type = e;
    }
    (e.prototype.init = function () {
      const e = this;
      (this.??bjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          n = t.dataset.da.trim().split(","),
          i = {};
        (i.element = t),
          (i.parent = t.parentNode),
          (i.destination = document.querySelector(n[0].trim())),
          (i.breakpoint = n[1] ? n[1].trim() : "767"),
          (i.place = n[2] ? n[2].trim() : "last"),
          (i.index = this.indexInParent(i.parent, i.element)),
          this.??bjects.push(i);
      }
      this.arraySort(this.??bjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.??bjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, n) {
            return Array.prototype.indexOf.call(n, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const n = this.mediaQueries[t],
          i = String.prototype.split.call(n, ","),
          r = window.matchMedia(i[0]),
          s = i[1],
          o = Array.prototype.filter.call(this.??bjects, function (e) {
            return e.breakpoint === s;
          });
        r.addListener(function () {
          e.mediaHandler(r, o);
        }),
          this.mediaHandler(r, o);
      }
    }),
      (e.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            (n.index = this.indexInParent(n.parent, n.element)),
              this.moveTo(n.place, n.element, n.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const n = t[e];
            n.element.classList.contains(this.daClassname) &&
              this.moveBack(n.parent, n.element, n.index);
          }
      }),
      (e.prototype.moveTo = function (e, t, n) {
        t.classList.add(this.daClassname),
          "last" === e || e >= n.children.length
            ? n.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? n.children[e].insertAdjacentElement("beforebegin", t)
            : n.insertAdjacentElement("afterbegin", t);
      }),
      (e.prototype.moveBack = function (e, t, n) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[n]
            ? e.children[n].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (e.prototype.indexInParent = function (e, t) {
        const n = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(n, t);
      }),
      (e.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new e("max").init();
    class t {
      constructor(e) {
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = Object.assign(
            {
              logging: !1,
              init: !0,
              attributeOpenButton: "data-popup",
              attributeCloseButton: "data-close",
              fixElementSelector: "[data-lp]",
              youtubeAttribute: "data-youtube",
              buttonYoutube: "data-video",
              setAutoplayYoutube: !0,
              classes: {
                popup: "popup",
                popupContent: "popup__content",
                popupActive: "popup_show",
                bodyActive: "popup-show",
                popupVideo: "popup__video",
              },
              focusCatch: !0,
              closeEsc: !0,
              bodyLock: !0,
              bodyLockDelay: 500,
              hashSettings: { location: !0, goHash: !0 },
              on: {
                beforeOpen: function () {},
                afterOpen: function () {},
                beforeClose: function () {},
                afterClose: function () {},
              },
            },
            e
          )),
          e.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("??????????????????"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t) {
              if ((e.preventDefault(), t.hasAttribute("data-video"))) {
                const e = document.getElementById("popup_video");
                let n = t.getAttribute(this.options.buttonYoutube),
                  i = n.substring(n.indexOf("?v=") + 3);
                e.setAttribute("data-youtube", i);
              }
              return (
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `???? ????, ???? ???????????????? ?????????????? ?? ${t.classList}`
                    )
              );
            }
            if (
              e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
            )
              return e.preventDefault(), void this.close();
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const n = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${n}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `.${this.options.classes.popupVideo}`
              ) &&
                this.targetOpen.element
                  .querySelector(`.${this.options.classes.popupVideo}`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : o(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("???????????? ??????????");
        } else
          this.popupLogging(
            "???? ????, ???????????? ???????????? ??????. ?????????????????? ???????????????????????? ??????????. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            s &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `.${this.options.classes.popupVideo}`
              ) &&
              (this.targetOpen.element.querySelector(
                `.${this.options.classes.popupVideo}`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              o(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("???????????? ??????????"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          n = Array.prototype.slice.call(t),
          i = n.indexOf(document.activeElement);
        e.shiftKey && 0 === i && (n[n.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            i !== n.length - 1 ||
            (n[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && console.log(`[??????????????]: ${e}`);
      }
    }
    let i = (e, t = 500, n = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = n ? `${n}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !n),
              !n && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !n && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      r = (e, t = 500, n = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            n && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = n ? `${n}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      s = !0,
      o = (e = 500) => {
        document.documentElement.classList.contains("lock") ? a(e) : l(e);
      },
      a = (e = 500) => {
        let t = document.querySelector("body");
        if (s) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < n.length; e++) {
              n[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (s = !1),
            setTimeout(function () {
              s = !0;
            }, e);
        }
      },
      l = (e = 500) => {
        let t = document.querySelector("body");
        if (s) {
          let n = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (s = !1),
            setTimeout(function () {
              s = !0;
            }, e);
        }
      };
    function c() {
      a(), document.documentElement.classList.remove("menu-open");
    }
    function u(e, t) {
      for (var n = 0; n < e.length; n++) e[n].classList.remove(t);
    }
    let d = (e, t = !1, n = 500, i = 0) => {
      const r = document.querySelector(e);
      if (r) {
        let e = "",
          s = 0;
        t &&
          ((e = "header.header"), (s = document.querySelector(e).offsetHeight));
        let o = {
          speedAsDuration: !0,
          speed: n,
          header: e,
          offset: i,
          easing: "easeOutQuad",
        };
        document.documentElement.classList.contains("menu-open") && c(),
          "undefined" != typeof SmoothScroll
            ? new SmoothScroll().animateScroll(r, "", o)
            : window.scrollTo({
                top: s
                  ? r.getBoundingClientRect().top - s
                  : r.getBoundingClientRect().top,
                behavior: "smooth",
              });
      } else console.log(`[gotoBlock]: ???????????? ?????????? ?????? ???? ????????????????: ${e}`);
    };
    class p {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !1 }, e)),
          (this.masks = { phone: { ua: "+38(999)999-99-99" } }),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("[data-mask]");
          e.length
            ? (this.initMasks(e),
              this.setLogging(`??????????????????, ???????????????? ??????????: (${e.length})`),
              document.querySelector("._mask-init") && this.setActions())
            : this.setLogging("?????? ???? ?????????? ??????????. ????????...zzZZZzZZz...");
        }
      }
      setActions() {
        document.addEventListener("input", this.maskActions.bind(this)),
          document.addEventListener("focusin", this.maskActions.bind(this)),
          document.addEventListener("focusout", this.maskActions.bind(this)),
          document.addEventListener("keydown", this.maskActions.bind(this));
      }
      initMasks(e) {
        e.forEach((e) => {
          this.initMask(e);
        });
      }
      initMask(e) {
        const t = this.getMask(e);
        t && this.setMask(e, t);
      }
      getMask(e) {
        const t = e.dataset.mask ? e.dataset.mask.split(",") : "",
          n = t[0] ? t[0] : null;
        if (!n) return void this.setLogging(`?????????? ?????? ${e} ???? ??????????????????!`);
        let i = t[1] ? t[1] : null;
        return (
          "phone" === n &&
            (!i && (i = "ua"), this.masks[n][i] && (i = this.masks[n][i])),
          i
        );
      }
      setMask(e, t) {
        (t = t.replace(/9/g, "_")),
          e.classList.add("_mask-init"),
          (e.value = t);
      }
      maskActions(e) {
        const t = e.target;
        if (t.closest("._mask-init")) {
          const n = t,
            i = (n.value, this.getMask(n));
          console.log(n.selectionStart),
            n.selectionStart > i.length && e.preventDefault();
        }
      }
      setLogging(e) {
        this.config.logging && console.log(`[Elton Mask]: ${e}`);
      }
    }
    const f = { inputMaskModule: null, selectModule: null };
    let h = {
      getErrors(e) {
        let t = 0,
          n = e.querySelectorAll("*[data-required]");
        return (
          n.length &&
            n.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const n = t[e];
              n.parentElement.classList.remove("_form-focus"),
                n.classList.remove("_form-focus"),
                h.removeError(n),
                (n.value = n.dataset.placeholder);
            }
            let n = e.querySelectorAll(".checkbox__input");
            if (n.length > 0)
              for (let e = 0; e < n.length; e++) {
                n[e].checked = !1;
              }
            if (f.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const n = t[e].querySelector("select");
                  f.selectModule.selectBuild(n);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function m(e) {
      if (null == e) return window;
      if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument;
        return (t && t.defaultView) || window;
      }
      return e;
    }
    function g(e) {
      return e instanceof m(e).Element || e instanceof Element;
    }
    function v(e) {
      return e instanceof m(e).HTMLElement || e instanceof HTMLElement;
    }
    function y(e) {
      return (
        "undefined" != typeof ShadowRoot &&
        (e instanceof m(e).ShadowRoot || e instanceof ShadowRoot)
      );
    }
    var b = Math.max,
      w = Math.min,
      x = Math.round;
    function T(e, t) {
      void 0 === t && (t = !1);
      var n = e.getBoundingClientRect(),
        i = 1,
        r = 1;
      if (v(e) && t) {
        var s = e.offsetHeight,
          o = e.offsetWidth;
        o > 0 && (i = x(n.width) / o || 1), s > 0 && (r = x(n.height) / s || 1);
      }
      return {
        width: n.width / i,
        height: n.height / r,
        top: n.top / r,
        right: n.right / i,
        bottom: n.bottom / r,
        left: n.left / i,
        x: n.left / i,
        y: n.top / r,
      };
    }
    function E(e) {
      var t = m(e);
      return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
    }
    function S(e) {
      return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function C(e) {
      return ((g(e) ? e.ownerDocument : e.document) || window.document)
        .documentElement;
    }
    function k(e) {
      return T(C(e)).left + E(e).scrollLeft;
    }
    function A(e) {
      return m(e).getComputedStyle(e);
    }
    function L(e) {
      var t = A(e),
        n = t.overflow,
        i = t.overflowX,
        r = t.overflowY;
      return /auto|scroll|overlay|hidden/.test(n + r + i);
    }
    function O(e, t, n) {
      void 0 === n && (n = !1);
      var i,
        r,
        s = v(t),
        o =
          v(t) &&
          (function (e) {
            var t = e.getBoundingClientRect(),
              n = x(t.width) / e.offsetWidth || 1,
              i = x(t.height) / e.offsetHeight || 1;
            return 1 !== n || 1 !== i;
          })(t),
        a = C(t),
        l = T(e, o),
        c = { scrollLeft: 0, scrollTop: 0 },
        u = { x: 0, y: 0 };
      return (
        (s || (!s && !n)) &&
          (("body" !== S(t) || L(a)) &&
            (c =
              (i = t) !== m(i) && v(i)
                ? { scrollLeft: (r = i).scrollLeft, scrollTop: r.scrollTop }
                : E(i)),
          v(t)
            ? (((u = T(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
            : a && (u.x = k(a))),
        {
          x: l.left + c.scrollLeft - u.x,
          y: l.top + c.scrollTop - u.y,
          width: l.width,
          height: l.height,
        }
      );
    }
    function _(e) {
      var t = T(e),
        n = e.offsetWidth,
        i = e.offsetHeight;
      return (
        Math.abs(t.width - n) <= 1 && (n = t.width),
        Math.abs(t.height - i) <= 1 && (i = t.height),
        { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
      );
    }
    function M(e) {
      return "html" === S(e)
        ? e
        : e.assignedSlot || e.parentNode || (y(e) ? e.host : null) || C(e);
    }
    function P(e) {
      return ["html", "body", "#document"].indexOf(S(e)) >= 0
        ? e.ownerDocument.body
        : v(e) && L(e)
        ? e
        : P(M(e));
    }
    function D(e, t) {
      var n;
      void 0 === t && (t = []);
      var i = P(e),
        r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
        s = m(i),
        o = r ? [s].concat(s.visualViewport || [], L(i) ? i : []) : i,
        a = t.concat(o);
      return r ? a : a.concat(D(M(o)));
    }
    function $(e) {
      return ["table", "td", "th"].indexOf(S(e)) >= 0;
    }
    function I(e) {
      return v(e) && "fixed" !== A(e).position ? e.offsetParent : null;
    }
    function N(e) {
      for (var t = m(e), n = I(e); n && $(n) && "static" === A(n).position; )
        n = I(n);
      return n &&
        ("html" === S(n) || ("body" === S(n) && "static" === A(n).position))
        ? t
        : n ||
            (function (e) {
              var t =
                -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
              if (
                -1 !== navigator.userAgent.indexOf("Trident") &&
                v(e) &&
                "fixed" === A(e).position
              )
                return null;
              for (var n = M(e); v(n) && ["html", "body"].indexOf(S(n)) < 0; ) {
                var i = A(n);
                if (
                  "none" !== i.transform ||
                  "none" !== i.perspective ||
                  "paint" === i.contain ||
                  -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                  (t && "filter" === i.willChange) ||
                  (t && i.filter && "none" !== i.filter)
                )
                  return n;
                n = n.parentNode;
              }
              return null;
            })(e) ||
            t;
    }
    var j = "top",
      q = "bottom",
      H = "right",
      B = "left",
      R = "auto",
      W = [j, q, H, B],
      z = "start",
      F = "end",
      V = "viewport",
      G = "popper",
      Y = W.reduce(function (e, t) {
        return e.concat([t + "-" + z, t + "-" + F]);
      }, []),
      U = [].concat(W, [R]).reduce(function (e, t) {
        return e.concat([t, t + "-" + z, t + "-" + F]);
      }, []),
      X = [
        "beforeRead",
        "read",
        "afterRead",
        "beforeMain",
        "main",
        "afterMain",
        "beforeWrite",
        "write",
        "afterWrite",
      ];
    function Q(e) {
      var t = new Map(),
        n = new Set(),
        i = [];
      function r(e) {
        n.add(e.name),
          []
            .concat(e.requires || [], e.requiresIfExists || [])
            .forEach(function (e) {
              if (!n.has(e)) {
                var i = t.get(e);
                i && r(i);
              }
            }),
          i.push(e);
      }
      return (
        e.forEach(function (e) {
          t.set(e.name, e);
        }),
        e.forEach(function (e) {
          n.has(e.name) || r(e);
        }),
        i
      );
    }
    var K = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function J() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return !t.some(function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect);
      });
    }
    function Z(e) {
      void 0 === e && (e = {});
      var t = e,
        n = t.defaultModifiers,
        i = void 0 === n ? [] : n,
        r = t.defaultOptions,
        s = void 0 === r ? K : r;
      return function (e, t, n) {
        void 0 === n && (n = s);
        var r,
          o,
          a = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, K, s),
            modifiersData: {},
            elements: { reference: e, popper: t },
            attributes: {},
            styles: {},
          },
          l = [],
          c = !1,
          u = {
            state: a,
            setOptions: function (n) {
              var r = "function" == typeof n ? n(a.options) : n;
              d(),
                (a.options = Object.assign({}, s, a.options, r)),
                (a.scrollParents = {
                  reference: g(e)
                    ? D(e)
                    : e.contextElement
                    ? D(e.contextElement)
                    : [],
                  popper: D(t),
                });
              var o = (function (e) {
                var t = Q(e);
                return X.reduce(function (e, n) {
                  return e.concat(
                    t.filter(function (e) {
                      return e.phase === n;
                    })
                  );
                }, []);
              })(
                (function (e) {
                  var t = e.reduce(function (e, t) {
                    var n = e[t.name];
                    return (
                      (e[t.name] = n
                        ? Object.assign({}, n, t, {
                            options: Object.assign({}, n.options, t.options),
                            data: Object.assign({}, n.data, t.data),
                          })
                        : t),
                      e
                    );
                  }, {});
                  return Object.keys(t).map(function (e) {
                    return t[e];
                  });
                })([].concat(i, a.options.modifiers))
              );
              return (
                (a.orderedModifiers = o.filter(function (e) {
                  return e.enabled;
                })),
                a.orderedModifiers.forEach(function (e) {
                  var t = e.name,
                    n = e.options,
                    i = void 0 === n ? {} : n,
                    r = e.effect;
                  if ("function" == typeof r) {
                    var s = r({ state: a, name: t, instance: u, options: i }),
                      o = function () {};
                    l.push(s || o);
                  }
                }),
                u.update()
              );
            },
            forceUpdate: function () {
              if (!c) {
                var e = a.elements,
                  t = e.reference,
                  n = e.popper;
                if (J(t, n)) {
                  (a.rects = {
                    reference: O(t, N(n), "fixed" === a.options.strategy),
                    popper: _(n),
                  }),
                    (a.reset = !1),
                    (a.placement = a.options.placement),
                    a.orderedModifiers.forEach(function (e) {
                      return (a.modifiersData[e.name] = Object.assign(
                        {},
                        e.data
                      ));
                    });
                  for (var i = 0; i < a.orderedModifiers.length; i++)
                    if (!0 !== a.reset) {
                      var r = a.orderedModifiers[i],
                        s = r.fn,
                        o = r.options,
                        l = void 0 === o ? {} : o,
                        d = r.name;
                      "function" == typeof s &&
                        (a =
                          s({ state: a, options: l, name: d, instance: u }) ||
                          a);
                    } else (a.reset = !1), (i = -1);
                }
              }
            },
            update:
              ((r = function () {
                return new Promise(function (e) {
                  u.forceUpdate(), e(a);
                });
              }),
              function () {
                return (
                  o ||
                    (o = new Promise(function (e) {
                      Promise.resolve().then(function () {
                        (o = void 0), e(r());
                      });
                    })),
                  o
                );
              }),
            destroy: function () {
              d(), (c = !0);
            },
          };
        if (!J(e, t)) return u;
        function d() {
          l.forEach(function (e) {
            return e();
          }),
            (l = []);
        }
        return (
          u.setOptions(n).then(function (e) {
            !c && n.onFirstUpdate && n.onFirstUpdate(e);
          }),
          u
        );
      };
    }
    var ee = { passive: !0 };
    const te = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (e) {
        var t = e.state,
          n = e.instance,
          i = e.options,
          r = i.scroll,
          s = void 0 === r || r,
          o = i.resize,
          a = void 0 === o || o,
          l = m(t.elements.popper),
          c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
          s &&
            c.forEach(function (e) {
              e.addEventListener("scroll", n.update, ee);
            }),
          a && l.addEventListener("resize", n.update, ee),
          function () {
            s &&
              c.forEach(function (e) {
                e.removeEventListener("scroll", n.update, ee);
              }),
              a && l.removeEventListener("resize", n.update, ee);
          }
        );
      },
      data: {},
    };
    function ne(e) {
      return e.split("-")[0];
    }
    function ie(e) {
      return e.split("-")[1];
    }
    function re(e) {
      return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
    }
    function se(e) {
      var t,
        n = e.reference,
        i = e.element,
        r = e.placement,
        s = r ? ne(r) : null,
        o = r ? ie(r) : null,
        a = n.x + n.width / 2 - i.width / 2,
        l = n.y + n.height / 2 - i.height / 2;
      switch (s) {
        case j:
          t = { x: a, y: n.y - i.height };
          break;
        case q:
          t = { x: a, y: n.y + n.height };
          break;
        case H:
          t = { x: n.x + n.width, y: l };
          break;
        case B:
          t = { x: n.x - i.width, y: l };
          break;
        default:
          t = { x: n.x, y: n.y };
      }
      var c = s ? re(s) : null;
      if (null != c) {
        var u = "y" === c ? "height" : "width";
        switch (o) {
          case z:
            t[c] = t[c] - (n[u] / 2 - i[u] / 2);
            break;
          case F:
            t[c] = t[c] + (n[u] / 2 - i[u] / 2);
        }
      }
      return t;
    }
    var oe = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function ae(e) {
      var t,
        n = e.popper,
        i = e.popperRect,
        r = e.placement,
        s = e.variation,
        o = e.offsets,
        a = e.position,
        l = e.gpuAcceleration,
        c = e.adaptive,
        u = e.roundOffsets,
        d = e.isFixed,
        p =
          !0 === u
            ? (function (e) {
                var t = e.x,
                  n = e.y,
                  i = window.devicePixelRatio || 1;
                return { x: x(t * i) / i || 0, y: x(n * i) / i || 0 };
              })(o)
            : "function" == typeof u
            ? u(o)
            : o,
        f = p.x,
        h = void 0 === f ? 0 : f,
        g = p.y,
        v = void 0 === g ? 0 : g,
        y = o.hasOwnProperty("x"),
        b = o.hasOwnProperty("y"),
        w = B,
        T = j,
        E = window;
      if (c) {
        var S = N(n),
          k = "clientHeight",
          L = "clientWidth";
        if (
          (S === m(n) &&
            "static" !== A((S = C(n))).position &&
            "absolute" === a &&
            ((k = "scrollHeight"), (L = "scrollWidth")),
          (S = S),
          r === j || ((r === B || r === H) && s === F))
        )
          (T = q),
            (v -=
              (d && E.visualViewport ? E.visualViewport.height : S[k]) -
              i.height),
            (v *= l ? 1 : -1);
        if (r === B || ((r === j || r === q) && s === F))
          (w = H),
            (h -=
              (d && E.visualViewport ? E.visualViewport.width : S[L]) -
              i.width),
            (h *= l ? 1 : -1);
      }
      var O,
        _ = Object.assign({ position: a }, c && oe);
      return l
        ? Object.assign(
            {},
            _,
            (((O = {})[T] = b ? "0" : ""),
            (O[w] = y ? "0" : ""),
            (O.transform =
              (E.devicePixelRatio || 1) <= 1
                ? "translate(" + h + "px, " + v + "px)"
                : "translate3d(" + h + "px, " + v + "px, 0)"),
            O)
          )
        : Object.assign(
            {},
            _,
            (((t = {})[T] = b ? v + "px" : ""),
            (t[w] = y ? h + "px" : ""),
            (t.transform = ""),
            t)
          );
    }
    const le = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function (e) {
          var n = t.styles[e] || {},
            i = t.attributes[e] || {},
            r = t.elements[e];
          v(r) &&
            S(r) &&
            (Object.assign(r.style, n),
            Object.keys(i).forEach(function (e) {
              var t = i[e];
              !1 === t
                ? r.removeAttribute(e)
                : r.setAttribute(e, !0 === t ? "" : t);
            }));
        });
      },
      effect: function (e) {
        var t = e.state,
          n = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(t.elements.popper.style, n.popper),
          (t.styles = n),
          t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
          function () {
            Object.keys(t.elements).forEach(function (e) {
              var i = t.elements[e],
                r = t.attributes[e] || {},
                s = Object.keys(
                  t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                ).reduce(function (e, t) {
                  return (e[t] = ""), e;
                }, {});
              v(i) &&
                S(i) &&
                (Object.assign(i.style, s),
                Object.keys(r).forEach(function (e) {
                  i.removeAttribute(e);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    const ce = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          n = e.options,
          i = e.name,
          r = n.offset,
          s = void 0 === r ? [0, 0] : r,
          o = U.reduce(function (e, n) {
            return (
              (e[n] = (function (e, t, n) {
                var i = ne(e),
                  r = [B, j].indexOf(i) >= 0 ? -1 : 1,
                  s =
                    "function" == typeof n
                      ? n(Object.assign({}, t, { placement: e }))
                      : n,
                  o = s[0],
                  a = s[1];
                return (
                  (o = o || 0),
                  (a = (a || 0) * r),
                  [B, H].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
                );
              })(n, t.rects, s)),
              e
            );
          }, {}),
          a = o[t.placement],
          l = a.x,
          c = a.y;
        null != t.modifiersData.popperOffsets &&
          ((t.modifiersData.popperOffsets.x += l),
          (t.modifiersData.popperOffsets.y += c)),
          (t.modifiersData[i] = o);
      },
    };
    var ue = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function de(e) {
      return e.replace(/left|right|bottom|top/g, function (e) {
        return ue[e];
      });
    }
    var pe = { start: "end", end: "start" };
    function fe(e) {
      return e.replace(/start|end/g, function (e) {
        return pe[e];
      });
    }
    function he(e, t) {
      var n = t.getRootNode && t.getRootNode();
      if (e.contains(t)) return !0;
      if (n && y(n)) {
        var i = t;
        do {
          if (i && e.isSameNode(i)) return !0;
          i = i.parentNode || i.host;
        } while (i);
      }
      return !1;
    }
    function me(e) {
      return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height,
      });
    }
    function ge(e, t) {
      return t === V
        ? me(
            (function (e) {
              var t = m(e),
                n = C(e),
                i = t.visualViewport,
                r = n.clientWidth,
                s = n.clientHeight,
                o = 0,
                a = 0;
              return (
                i &&
                  ((r = i.width),
                  (s = i.height),
                  /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                    ((o = i.offsetLeft), (a = i.offsetTop))),
                { width: r, height: s, x: o + k(e), y: a }
              );
            })(e)
          )
        : g(t)
        ? (function (e) {
            var t = T(e);
            return (
              (t.top = t.top + e.clientTop),
              (t.left = t.left + e.clientLeft),
              (t.bottom = t.top + e.clientHeight),
              (t.right = t.left + e.clientWidth),
              (t.width = e.clientWidth),
              (t.height = e.clientHeight),
              (t.x = t.left),
              (t.y = t.top),
              t
            );
          })(t)
        : me(
            (function (e) {
              var t,
                n = C(e),
                i = E(e),
                r = null == (t = e.ownerDocument) ? void 0 : t.body,
                s = b(
                  n.scrollWidth,
                  n.clientWidth,
                  r ? r.scrollWidth : 0,
                  r ? r.clientWidth : 0
                ),
                o = b(
                  n.scrollHeight,
                  n.clientHeight,
                  r ? r.scrollHeight : 0,
                  r ? r.clientHeight : 0
                ),
                a = -i.scrollLeft + k(e),
                l = -i.scrollTop;
              return (
                "rtl" === A(r || n).direction &&
                  (a += b(n.clientWidth, r ? r.clientWidth : 0) - s),
                { width: s, height: o, x: a, y: l }
              );
            })(C(e))
          );
    }
    function ve(e, t, n) {
      var i =
          "clippingParents" === t
            ? (function (e) {
                var t = D(M(e)),
                  n = ["absolute", "fixed"].indexOf(A(e).position) >= 0,
                  i = n && v(e) ? N(e) : e;
                return g(i)
                  ? t.filter(function (e) {
                      return (
                        g(e) &&
                        he(e, i) &&
                        "body" !== S(e) &&
                        (!n || "static" !== A(e).position)
                      );
                    })
                  : [];
              })(e)
            : [].concat(t),
        r = [].concat(i, [n]),
        s = r[0],
        o = r.reduce(function (t, n) {
          var i = ge(e, n);
          return (
            (t.top = b(i.top, t.top)),
            (t.right = w(i.right, t.right)),
            (t.bottom = w(i.bottom, t.bottom)),
            (t.left = b(i.left, t.left)),
            t
          );
        }, ge(e, s));
      return (
        (o.width = o.right - o.left),
        (o.height = o.bottom - o.top),
        (o.x = o.left),
        (o.y = o.top),
        o
      );
    }
    function ye(e) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
    }
    function be(e, t) {
      return t.reduce(function (t, n) {
        return (t[n] = e), t;
      }, {});
    }
    function we(e, t) {
      void 0 === t && (t = {});
      var n = t,
        i = n.placement,
        r = void 0 === i ? e.placement : i,
        s = n.boundary,
        o = void 0 === s ? "clippingParents" : s,
        a = n.rootBoundary,
        l = void 0 === a ? V : a,
        c = n.elementContext,
        u = void 0 === c ? G : c,
        d = n.altBoundary,
        p = void 0 !== d && d,
        f = n.padding,
        h = void 0 === f ? 0 : f,
        m = ye("number" != typeof h ? h : be(h, W)),
        v = u === G ? "reference" : G,
        y = e.rects.popper,
        b = e.elements[p ? v : u],
        w = ve(g(b) ? b : b.contextElement || C(e.elements.popper), o, l),
        x = T(e.elements.reference),
        E = se({
          reference: x,
          element: y,
          strategy: "absolute",
          placement: r,
        }),
        S = me(Object.assign({}, y, E)),
        k = u === G ? S : x,
        A = {
          top: w.top - k.top + m.top,
          bottom: k.bottom - w.bottom + m.bottom,
          left: w.left - k.left + m.left,
          right: k.right - w.right + m.right,
        },
        L = e.modifiersData.offset;
      if (u === G && L) {
        var O = L[r];
        Object.keys(A).forEach(function (e) {
          var t = [H, q].indexOf(e) >= 0 ? 1 : -1,
            n = [j, q].indexOf(e) >= 0 ? "y" : "x";
          A[e] += O[n] * t;
        });
      }
      return A;
    }
    function xe(e, t, n) {
      return b(e, w(t, n));
    }
    const Te = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          n = e.options,
          i = e.name,
          r = n.mainAxis,
          s = void 0 === r || r,
          o = n.altAxis,
          a = void 0 !== o && o,
          l = n.boundary,
          c = n.rootBoundary,
          u = n.altBoundary,
          d = n.padding,
          p = n.tether,
          f = void 0 === p || p,
          h = n.tetherOffset,
          m = void 0 === h ? 0 : h,
          g = we(t, {
            boundary: l,
            rootBoundary: c,
            padding: d,
            altBoundary: u,
          }),
          v = ne(t.placement),
          y = ie(t.placement),
          x = !y,
          T = re(v),
          E = "x" === T ? "y" : "x",
          S = t.modifiersData.popperOffsets,
          C = t.rects.reference,
          k = t.rects.popper,
          A =
            "function" == typeof m
              ? m(Object.assign({}, t.rects, { placement: t.placement }))
              : m,
          L =
            "number" == typeof A
              ? { mainAxis: A, altAxis: A }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
          O = t.modifiersData.offset
            ? t.modifiersData.offset[t.placement]
            : null,
          M = { x: 0, y: 0 };
        if (S) {
          if (s) {
            var P,
              D = "y" === T ? j : B,
              $ = "y" === T ? q : H,
              I = "y" === T ? "height" : "width",
              R = S[T],
              W = R + g[D],
              F = R - g[$],
              V = f ? -k[I] / 2 : 0,
              G = y === z ? C[I] : k[I],
              Y = y === z ? -k[I] : -C[I],
              U = t.elements.arrow,
              X = f && U ? _(U) : { width: 0, height: 0 },
              Q = t.modifiersData["arrow#persistent"]
                ? t.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              K = Q[D],
              J = Q[$],
              Z = xe(0, C[I], X[I]),
              ee = x
                ? C[I] / 2 - V - Z - K - L.mainAxis
                : G - Z - K - L.mainAxis,
              te = x
                ? -C[I] / 2 + V + Z + J + L.mainAxis
                : Y + Z + J + L.mainAxis,
              se = t.elements.arrow && N(t.elements.arrow),
              oe = se
                ? "y" === T
                  ? se.clientTop || 0
                  : se.clientLeft || 0
                : 0,
              ae = null != (P = null == O ? void 0 : O[T]) ? P : 0,
              le = R + te - ae,
              ce = xe(f ? w(W, R + ee - ae - oe) : W, R, f ? b(F, le) : F);
            (S[T] = ce), (M[T] = ce - R);
          }
          if (a) {
            var ue,
              de = "x" === T ? j : B,
              pe = "x" === T ? q : H,
              fe = S[E],
              he = "y" === E ? "height" : "width",
              me = fe + g[de],
              ge = fe - g[pe],
              ve = -1 !== [j, B].indexOf(v),
              ye = null != (ue = null == O ? void 0 : O[E]) ? ue : 0,
              be = ve ? me : fe - C[he] - k[he] - ye + L.altAxis,
              Te = ve ? fe + C[he] + k[he] - ye - L.altAxis : ge,
              Ee =
                f && ve
                  ? (function (e, t, n) {
                      var i = xe(e, t, n);
                      return i > n ? n : i;
                    })(be, fe, Te)
                  : xe(f ? be : me, fe, f ? Te : ge);
            (S[E] = Ee), (M[E] = Ee - fe);
          }
          t.modifiersData[i] = M;
        }
      },
      requiresIfExists: ["offset"],
    };
    const Ee = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t,
          n = e.state,
          i = e.name,
          r = e.options,
          s = n.elements.arrow,
          o = n.modifiersData.popperOffsets,
          a = ne(n.placement),
          l = re(a),
          c = [B, H].indexOf(a) >= 0 ? "height" : "width";
        if (s && o) {
          var u = (function (e, t) {
              return ye(
                "number" !=
                  typeof (e =
                    "function" == typeof e
                      ? e(
                          Object.assign({}, t.rects, { placement: t.placement })
                        )
                      : e)
                  ? e
                  : be(e, W)
              );
            })(r.padding, n),
            d = _(s),
            p = "y" === l ? j : B,
            f = "y" === l ? q : H,
            h =
              n.rects.reference[c] +
              n.rects.reference[l] -
              o[l] -
              n.rects.popper[c],
            m = o[l] - n.rects.reference[l],
            g = N(s),
            v = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
            y = h / 2 - m / 2,
            b = u[p],
            w = v - d[c] - u[f],
            x = v / 2 - d[c] / 2 + y,
            T = xe(b, x, w),
            E = l;
          n.modifiersData[i] = (((t = {})[E] = T), (t.centerOffset = T - x), t);
        }
      },
      effect: function (e) {
        var t = e.state,
          n = e.options.element,
          i = void 0 === n ? "[data-popper-arrow]" : n;
        null != i &&
          ("string" != typeof i || (i = t.elements.popper.querySelector(i))) &&
          he(t.elements.popper, i) &&
          (t.elements.arrow = i);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    };
    function Se(e, t, n) {
      return (
        void 0 === n && (n = { x: 0, y: 0 }),
        {
          top: e.top - t.height - n.y,
          right: e.right - t.width + n.x,
          bottom: e.bottom - t.height + n.y,
          left: e.left - t.width - n.x,
        }
      );
    }
    function Ce(e) {
      return [j, H, q, B].some(function (t) {
        return e[t] >= 0;
      });
    }
    var ke = Z({
        defaultModifiers: [
          te,
          {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
              var t = e.state,
                n = e.name;
              t.modifiersData[n] = se({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement,
              });
            },
            data: {},
          },
          {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
              var t = e.state,
                n = e.options,
                i = n.gpuAcceleration,
                r = void 0 === i || i,
                s = n.adaptive,
                o = void 0 === s || s,
                a = n.roundOffsets,
                l = void 0 === a || a,
                c = {
                  placement: ne(t.placement),
                  variation: ie(t.placement),
                  popper: t.elements.popper,
                  popperRect: t.rects.popper,
                  gpuAcceleration: r,
                  isFixed: "fixed" === t.options.strategy,
                };
              null != t.modifiersData.popperOffsets &&
                (t.styles.popper = Object.assign(
                  {},
                  t.styles.popper,
                  ae(
                    Object.assign({}, c, {
                      offsets: t.modifiersData.popperOffsets,
                      position: t.options.strategy,
                      adaptive: o,
                      roundOffsets: l,
                    })
                  )
                )),
                null != t.modifiersData.arrow &&
                  (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    ae(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: l,
                      })
                    )
                  )),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-placement": t.placement,
                }));
            },
            data: {},
          },
          le,
          ce,
          {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                n = e.options,
                i = e.name;
              if (!t.modifiersData[i]._skip) {
                for (
                  var r = n.mainAxis,
                    s = void 0 === r || r,
                    o = n.altAxis,
                    a = void 0 === o || o,
                    l = n.fallbackPlacements,
                    c = n.padding,
                    u = n.boundary,
                    d = n.rootBoundary,
                    p = n.altBoundary,
                    f = n.flipVariations,
                    h = void 0 === f || f,
                    m = n.allowedAutoPlacements,
                    g = t.options.placement,
                    v = ne(g),
                    y =
                      l ||
                      (v === g || !h
                        ? [de(g)]
                        : (function (e) {
                            if (ne(e) === R) return [];
                            var t = de(e);
                            return [fe(e), t, fe(t)];
                          })(g)),
                    b = [g].concat(y).reduce(function (e, n) {
                      return e.concat(
                        ne(n) === R
                          ? (function (e, t) {
                              void 0 === t && (t = {});
                              var n = t,
                                i = n.placement,
                                r = n.boundary,
                                s = n.rootBoundary,
                                o = n.padding,
                                a = n.flipVariations,
                                l = n.allowedAutoPlacements,
                                c = void 0 === l ? U : l,
                                u = ie(i),
                                d = u
                                  ? a
                                    ? Y
                                    : Y.filter(function (e) {
                                        return ie(e) === u;
                                      })
                                  : W,
                                p = d.filter(function (e) {
                                  return c.indexOf(e) >= 0;
                                });
                              0 === p.length && (p = d);
                              var f = p.reduce(function (t, n) {
                                return (
                                  (t[n] = we(e, {
                                    placement: n,
                                    boundary: r,
                                    rootBoundary: s,
                                    padding: o,
                                  })[ne(n)]),
                                  t
                                );
                              }, {});
                              return Object.keys(f).sort(function (e, t) {
                                return f[e] - f[t];
                              });
                            })(t, {
                              placement: n,
                              boundary: u,
                              rootBoundary: d,
                              padding: c,
                              flipVariations: h,
                              allowedAutoPlacements: m,
                            })
                          : n
                      );
                    }, []),
                    w = t.rects.reference,
                    x = t.rects.popper,
                    T = new Map(),
                    E = !0,
                    S = b[0],
                    C = 0;
                  C < b.length;
                  C++
                ) {
                  var k = b[C],
                    A = ne(k),
                    L = ie(k) === z,
                    O = [j, q].indexOf(A) >= 0,
                    _ = O ? "width" : "height",
                    M = we(t, {
                      placement: k,
                      boundary: u,
                      rootBoundary: d,
                      altBoundary: p,
                      padding: c,
                    }),
                    P = O ? (L ? H : B) : L ? q : j;
                  w[_] > x[_] && (P = de(P));
                  var D = de(P),
                    $ = [];
                  if (
                    (s && $.push(M[A] <= 0),
                    a && $.push(M[P] <= 0, M[D] <= 0),
                    $.every(function (e) {
                      return e;
                    }))
                  ) {
                    (S = k), (E = !1);
                    break;
                  }
                  T.set(k, $);
                }
                if (E)
                  for (
                    var I = function (e) {
                        var t = b.find(function (t) {
                          var n = T.get(t);
                          if (n)
                            return n.slice(0, e).every(function (e) {
                              return e;
                            });
                        });
                        if (t) return (S = t), "break";
                      },
                      N = h ? 3 : 1;
                    N > 0;
                    N--
                  ) {
                    if ("break" === I(N)) break;
                  }
                t.placement !== S &&
                  ((t.modifiersData[i]._skip = !0),
                  (t.placement = S),
                  (t.reset = !0));
              }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          },
          Te,
          Ee,
          {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
              var t = e.state,
                n = e.name,
                i = t.rects.reference,
                r = t.rects.popper,
                s = t.modifiersData.preventOverflow,
                o = we(t, { elementContext: "reference" }),
                a = we(t, { altBoundary: !0 }),
                l = Se(o, i),
                c = Se(a, r, s),
                u = Ce(l),
                d = Ce(c);
              (t.modifiersData[n] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: u,
                hasPopperEscaped: d,
              }),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-reference-hidden": u,
                  "data-popper-escaped": d,
                }));
            },
          },
        ],
      }),
      Ae = "tippy-content",
      Le = "tippy-backdrop",
      Oe = "tippy-arrow",
      _e = "tippy-svg-arrow",
      Me = { passive: !0, capture: !0 },
      Pe = function () {
        return document.body;
      };
    function De(e, t, n) {
      if (Array.isArray(e)) {
        var i = e[t];
        return null == i ? (Array.isArray(n) ? n[t] : n) : i;
      }
      return e;
    }
    function $e(e, t) {
      var n = {}.toString.call(e);
      return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
    }
    function Ie(e, t) {
      return "function" == typeof e ? e.apply(void 0, t) : e;
    }
    function Ne(e, t) {
      return 0 === t
        ? e
        : function (i) {
            clearTimeout(n),
              (n = setTimeout(function () {
                e(i);
              }, t));
          };
      var n;
    }
    function je(e) {
      return [].concat(e);
    }
    function qe(e, t) {
      -1 === e.indexOf(t) && e.push(t);
    }
    function He(e) {
      return e.split("-")[0];
    }
    function Be(e) {
      return [].slice.call(e);
    }
    function Re(e) {
      return Object.keys(e).reduce(function (t, n) {
        return void 0 !== e[n] && (t[n] = e[n]), t;
      }, {});
    }
    function We() {
      return document.createElement("div");
    }
    function ze(e) {
      return ["Element", "Fragment"].some(function (t) {
        return $e(e, t);
      });
    }
    function Fe(e) {
      return $e(e, "MouseEvent");
    }
    function Ve(e) {
      return !(!e || !e._tippy || e._tippy.reference !== e);
    }
    function Ge(e) {
      return ze(e)
        ? [e]
        : (function (e) {
            return $e(e, "NodeList");
          })(e)
        ? Be(e)
        : Array.isArray(e)
        ? e
        : Be(document.querySelectorAll(e));
    }
    function Ye(e, t) {
      e.forEach(function (e) {
        e && (e.style.transitionDuration = t + "ms");
      });
    }
    function Ue(e, t) {
      e.forEach(function (e) {
        e && e.setAttribute("data-state", t);
      });
    }
    function Xe(e) {
      var t,
        n = je(e)[0];
      return null != n && null != (t = n.ownerDocument) && t.body
        ? n.ownerDocument
        : document;
    }
    function Qe(e, t, n) {
      var i = t + "EventListener";
      ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
        e[i](t, n);
      });
    }
    function Ke(e, t) {
      for (var n = t; n; ) {
        var i;
        if (e.contains(n)) return !0;
        n =
          null == n.getRootNode || null == (i = n.getRootNode())
            ? void 0
            : i.host;
      }
      return !1;
    }
    var Je = { isTouch: !1 },
      Ze = 0;
    function et() {
      Je.isTouch ||
        ((Je.isTouch = !0),
        window.performance && document.addEventListener("mousemove", tt));
    }
    function tt() {
      var e = performance.now();
      e - Ze < 20 &&
        ((Je.isTouch = !1), document.removeEventListener("mousemove", tt)),
        (Ze = e);
    }
    function nt() {
      var e = document.activeElement;
      if (Ve(e)) {
        var t = e._tippy;
        e.blur && !t.state.isVisible && e.blur();
      }
    }
    var it =
      !!("undefined" != typeof window && "undefined" != typeof document) &&
      !!window.msCrypto;
    var rt = {
        animateFill: !1,
        followCursor: !1,
        inlinePositioning: !1,
        sticky: !1,
      },
      st = Object.assign(
        {
          appendTo: Pe,
          aria: { content: "auto", expanded: "auto" },
          delay: 0,
          duration: [300, 250],
          getReferenceClientRect: null,
          hideOnClick: !0,
          ignoreAttributes: !1,
          interactive: !1,
          interactiveBorder: 2,
          interactiveDebounce: 0,
          moveTransition: "",
          offset: [0, 10],
          onAfterUpdate: function () {},
          onBeforeUpdate: function () {},
          onCreate: function () {},
          onDestroy: function () {},
          onHidden: function () {},
          onHide: function () {},
          onMount: function () {},
          onShow: function () {},
          onShown: function () {},
          onTrigger: function () {},
          onUntrigger: function () {},
          onClickOutside: function () {},
          placement: "top",
          plugins: [],
          popperOptions: {},
          render: null,
          showOnCreate: !1,
          touch: !0,
          trigger: "mouseenter focus",
          triggerTarget: null,
        },
        rt,
        {
          allowHTML: !1,
          animation: "fade",
          arrow: !0,
          content: "",
          inertia: !1,
          maxWidth: 350,
          role: "tooltip",
          theme: "",
          zIndex: 9999,
        }
      ),
      ot = Object.keys(st);
    function at(e) {
      var t = (e.plugins || []).reduce(function (t, n) {
        var i,
          r = n.name,
          s = n.defaultValue;
        r && (t[r] = void 0 !== e[r] ? e[r] : null != (i = st[r]) ? i : s);
        return t;
      }, {});
      return Object.assign({}, e, t);
    }
    function lt(e, t) {
      var n = Object.assign(
        {},
        t,
        { content: Ie(t.content, [e]) },
        t.ignoreAttributes
          ? {}
          : (function (e, t) {
              return (
                t ? Object.keys(at(Object.assign({}, st, { plugins: t }))) : ot
              ).reduce(function (t, n) {
                var i = (e.getAttribute("data-tippy-" + n) || "").trim();
                if (!i) return t;
                if ("content" === n) t[n] = i;
                else
                  try {
                    t[n] = JSON.parse(i);
                  } catch (e) {
                    t[n] = i;
                  }
                return t;
              }, {});
            })(e, t.plugins)
      );
      return (
        (n.aria = Object.assign({}, st.aria, n.aria)),
        (n.aria = {
          expanded:
            "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
          content:
            "auto" === n.aria.content
              ? t.interactive
                ? null
                : "describedby"
              : n.aria.content,
        }),
        n
      );
    }
    function ct(e, t) {
      e.innerHTML = t;
    }
    function ut(e) {
      var t = We();
      return (
        !0 === e
          ? (t.className = Oe)
          : ((t.className = _e), ze(e) ? t.appendChild(e) : ct(t, e)),
        t
      );
    }
    function dt(e, t) {
      ze(t.content)
        ? (ct(e, ""), e.appendChild(t.content))
        : "function" != typeof t.content &&
          (t.allowHTML ? ct(e, t.content) : (e.textContent = t.content));
    }
    function pt(e) {
      var t = e.firstElementChild,
        n = Be(t.children);
      return {
        box: t,
        content: n.find(function (e) {
          return e.classList.contains(Ae);
        }),
        arrow: n.find(function (e) {
          return e.classList.contains(Oe) || e.classList.contains(_e);
        }),
        backdrop: n.find(function (e) {
          return e.classList.contains(Le);
        }),
      };
    }
    function ft(e) {
      var t = We(),
        n = We();
      (n.className = "tippy-box"),
        n.setAttribute("data-state", "hidden"),
        n.setAttribute("tabindex", "-1");
      var i = We();
      function r(n, i) {
        var r = pt(t),
          s = r.box,
          o = r.content,
          a = r.arrow;
        i.theme
          ? s.setAttribute("data-theme", i.theme)
          : s.removeAttribute("data-theme"),
          "string" == typeof i.animation
            ? s.setAttribute("data-animation", i.animation)
            : s.removeAttribute("data-animation"),
          i.inertia
            ? s.setAttribute("data-inertia", "")
            : s.removeAttribute("data-inertia"),
          (s.style.maxWidth =
            "number" == typeof i.maxWidth ? i.maxWidth + "px" : i.maxWidth),
          i.role ? s.setAttribute("role", i.role) : s.removeAttribute("role"),
          (n.content === i.content && n.allowHTML === i.allowHTML) ||
            dt(o, e.props),
          i.arrow
            ? a
              ? n.arrow !== i.arrow &&
                (s.removeChild(a), s.appendChild(ut(i.arrow)))
              : s.appendChild(ut(i.arrow))
            : a && s.removeChild(a);
      }
      return (
        (i.className = Ae),
        i.setAttribute("data-state", "hidden"),
        dt(i, e.props),
        t.appendChild(n),
        n.appendChild(i),
        r(e.props, e.props),
        { popper: t, onUpdate: r }
      );
    }
    ft.$$tippy = !0;
    var ht = 1,
      mt = [],
      gt = [];
    function vt(e, t) {
      var n,
        i,
        r,
        s,
        o,
        a,
        l,
        c,
        u = lt(e, Object.assign({}, st, at(Re(t)))),
        d = !1,
        p = !1,
        f = !1,
        h = !1,
        m = [],
        g = Ne(Y, u.interactiveDebounce),
        v = ht++,
        y = (c = u.plugins).filter(function (e, t) {
          return c.indexOf(e) === t;
        }),
        b = {
          id: v,
          reference: e,
          popper: We(),
          popperInstance: null,
          props: u,
          state: {
            isEnabled: !0,
            isVisible: !1,
            isDestroyed: !1,
            isMounted: !1,
            isShown: !1,
          },
          plugins: y,
          clearDelayTimeouts: function () {
            clearTimeout(n), clearTimeout(i), cancelAnimationFrame(r);
          },
          setProps: function (t) {
            0;
            if (b.state.isDestroyed) return;
            D("onBeforeUpdate", [b, t]), V();
            var n = b.props,
              i = lt(e, Object.assign({}, n, Re(t), { ignoreAttributes: !0 }));
            (b.props = i),
              F(),
              n.interactiveDebounce !== i.interactiveDebounce &&
                (N(), (g = Ne(Y, i.interactiveDebounce)));
            n.triggerTarget && !i.triggerTarget
              ? je(n.triggerTarget).forEach(function (e) {
                  e.removeAttribute("aria-expanded");
                })
              : i.triggerTarget && e.removeAttribute("aria-expanded");
            I(), P(), T && T(n, i);
            b.popperInstance &&
              (K(),
              Z().forEach(function (e) {
                requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
              }));
            D("onAfterUpdate", [b, t]);
          },
          setContent: function (e) {
            b.setProps({ content: e });
          },
          show: function () {
            0;
            var e = b.state.isVisible,
              t = b.state.isDestroyed,
              n = !b.state.isEnabled,
              i = Je.isTouch && !b.props.touch,
              r = De(b.props.duration, 0, st.duration);
            if (e || t || n || i) return;
            if (L().hasAttribute("disabled")) return;
            if ((D("onShow", [b], !1), !1 === b.props.onShow(b))) return;
            (b.state.isVisible = !0), A() && (x.style.visibility = "visible");
            P(), B(), b.state.isMounted || (x.style.transition = "none");
            if (A()) {
              var s = _(),
                o = s.box,
                l = s.content;
              Ye([o, l], 0);
            }
            (a = function () {
              var e;
              if (b.state.isVisible && !h) {
                if (
                  ((h = !0),
                  x.offsetHeight,
                  (x.style.transition = b.props.moveTransition),
                  A() && b.props.animation)
                ) {
                  var t = _(),
                    n = t.box,
                    i = t.content;
                  Ye([n, i], r), Ue([n, i], "visible");
                }
                $(),
                  I(),
                  qe(gt, b),
                  null == (e = b.popperInstance) || e.forceUpdate(),
                  D("onMount", [b]),
                  b.props.animation &&
                    A() &&
                    (function (e, t) {
                      W(e, t);
                    })(r, function () {
                      (b.state.isShown = !0), D("onShown", [b]);
                    });
              }
            }),
              (function () {
                var e,
                  t = b.props.appendTo,
                  n = L();
                e =
                  (b.props.interactive && t === Pe) || "parent" === t
                    ? n.parentNode
                    : Ie(t, [n]);
                e.contains(x) || e.appendChild(x);
                (b.state.isMounted = !0), K(), !1;
              })();
          },
          hide: function () {
            0;
            var e = !b.state.isVisible,
              t = b.state.isDestroyed,
              n = !b.state.isEnabled,
              i = De(b.props.duration, 1, st.duration);
            if (e || t || n) return;
            if ((D("onHide", [b], !1), !1 === b.props.onHide(b))) return;
            (b.state.isVisible = !1),
              (b.state.isShown = !1),
              (h = !1),
              (d = !1),
              A() && (x.style.visibility = "hidden");
            if ((N(), R(), P(!0), A())) {
              var r = _(),
                s = r.box,
                o = r.content;
              b.props.animation && (Ye([s, o], i), Ue([s, o], "hidden"));
            }
            $(),
              I(),
              b.props.animation
                ? A() &&
                  (function (e, t) {
                    W(e, function () {
                      !b.state.isVisible &&
                        x.parentNode &&
                        x.parentNode.contains(x) &&
                        t();
                    });
                  })(i, b.unmount)
                : b.unmount();
          },
          hideWithInteractivity: function (e) {
            0;
            O().addEventListener("mousemove", g), qe(mt, g), g(e);
          },
          enable: function () {
            b.state.isEnabled = !0;
          },
          disable: function () {
            b.hide(), (b.state.isEnabled = !1);
          },
          unmount: function () {
            0;
            b.state.isVisible && b.hide();
            if (!b.state.isMounted) return;
            J(),
              Z().forEach(function (e) {
                e._tippy.unmount();
              }),
              x.parentNode && x.parentNode.removeChild(x);
            (gt = gt.filter(function (e) {
              return e !== b;
            })),
              (b.state.isMounted = !1),
              D("onHidden", [b]);
          },
          destroy: function () {
            0;
            if (b.state.isDestroyed) return;
            b.clearDelayTimeouts(),
              b.unmount(),
              V(),
              delete e._tippy,
              (b.state.isDestroyed = !0),
              D("onDestroy", [b]);
          },
        };
      if (!u.render) return b;
      var w = u.render(b),
        x = w.popper,
        T = w.onUpdate;
      x.setAttribute("data-tippy-root", ""),
        (x.id = "tippy-" + b.id),
        (b.popper = x),
        (e._tippy = b),
        (x._tippy = b);
      var E = y.map(function (e) {
          return e.fn(b);
        }),
        S = e.hasAttribute("aria-expanded");
      return (
        F(),
        I(),
        P(),
        D("onCreate", [b]),
        u.showOnCreate && ee(),
        x.addEventListener("mouseenter", function () {
          b.props.interactive && b.state.isVisible && b.clearDelayTimeouts();
        }),
        x.addEventListener("mouseleave", function () {
          b.props.interactive &&
            b.props.trigger.indexOf("mouseenter") >= 0 &&
            O().addEventListener("mousemove", g);
        }),
        b
      );
      function C() {
        var e = b.props.touch;
        return Array.isArray(e) ? e : [e, 0];
      }
      function k() {
        return "hold" === C()[0];
      }
      function A() {
        var e;
        return !(null == (e = b.props.render) || !e.$$tippy);
      }
      function L() {
        return l || e;
      }
      function O() {
        var e = L().parentNode;
        return e ? Xe(e) : document;
      }
      function _() {
        return pt(x);
      }
      function M(e) {
        return (b.state.isMounted && !b.state.isVisible) ||
          Je.isTouch ||
          (s && "focus" === s.type)
          ? 0
          : De(b.props.delay, e ? 0 : 1, st.delay);
      }
      function P(e) {
        void 0 === e && (e = !1),
          (x.style.pointerEvents = b.props.interactive && !e ? "" : "none"),
          (x.style.zIndex = "" + b.props.zIndex);
      }
      function D(e, t, n) {
        var i;
        (void 0 === n && (n = !0),
        E.forEach(function (n) {
          n[e] && n[e].apply(n, t);
        }),
        n) && (i = b.props)[e].apply(i, t);
      }
      function $() {
        var t = b.props.aria;
        if (t.content) {
          var n = "aria-" + t.content,
            i = x.id;
          je(b.props.triggerTarget || e).forEach(function (e) {
            var t = e.getAttribute(n);
            if (b.state.isVisible) e.setAttribute(n, t ? t + " " + i : i);
            else {
              var r = t && t.replace(i, "").trim();
              r ? e.setAttribute(n, r) : e.removeAttribute(n);
            }
          });
        }
      }
      function I() {
        !S &&
          b.props.aria.expanded &&
          je(b.props.triggerTarget || e).forEach(function (e) {
            b.props.interactive
              ? e.setAttribute(
                  "aria-expanded",
                  b.state.isVisible && e === L() ? "true" : "false"
                )
              : e.removeAttribute("aria-expanded");
          });
      }
      function N() {
        O().removeEventListener("mousemove", g),
          (mt = mt.filter(function (e) {
            return e !== g;
          }));
      }
      function j(t) {
        if (!Je.isTouch || (!f && "mousedown" !== t.type)) {
          var n = (t.composedPath && t.composedPath()[0]) || t.target;
          if (!b.props.interactive || !Ke(x, n)) {
            if (
              je(b.props.triggerTarget || e).some(function (e) {
                return Ke(e, n);
              })
            ) {
              if (Je.isTouch) return;
              if (b.state.isVisible && b.props.trigger.indexOf("click") >= 0)
                return;
            } else D("onClickOutside", [b, t]);
            !0 === b.props.hideOnClick &&
              (b.clearDelayTimeouts(),
              b.hide(),
              (p = !0),
              setTimeout(function () {
                p = !1;
              }),
              b.state.isMounted || R());
          }
        }
      }
      function q() {
        f = !0;
      }
      function H() {
        f = !1;
      }
      function B() {
        var e = O();
        e.addEventListener("mousedown", j, !0),
          e.addEventListener("touchend", j, Me),
          e.addEventListener("touchstart", H, Me),
          e.addEventListener("touchmove", q, Me);
      }
      function R() {
        var e = O();
        e.removeEventListener("mousedown", j, !0),
          e.removeEventListener("touchend", j, Me),
          e.removeEventListener("touchstart", H, Me),
          e.removeEventListener("touchmove", q, Me);
      }
      function W(e, t) {
        var n = _().box;
        function i(e) {
          e.target === n && (Qe(n, "remove", i), t());
        }
        if (0 === e) return t();
        Qe(n, "remove", o), Qe(n, "add", i), (o = i);
      }
      function z(t, n, i) {
        void 0 === i && (i = !1),
          je(b.props.triggerTarget || e).forEach(function (e) {
            e.addEventListener(t, n, i),
              m.push({ node: e, eventType: t, handler: n, options: i });
          });
      }
      function F() {
        k() &&
          (z("touchstart", G, { passive: !0 }),
          z("touchend", U, { passive: !0 })),
          (function (e) {
            return e.split(/\s+/).filter(Boolean);
          })(b.props.trigger).forEach(function (e) {
            if ("manual" !== e)
              switch ((z(e, G), e)) {
                case "mouseenter":
                  z("mouseleave", U);
                  break;
                case "focus":
                  z(it ? "focusout" : "blur", X);
                  break;
                case "focusin":
                  z("focusout", X);
              }
          });
      }
      function V() {
        m.forEach(function (e) {
          var t = e.node,
            n = e.eventType,
            i = e.handler,
            r = e.options;
          t.removeEventListener(n, i, r);
        }),
          (m = []);
      }
      function G(e) {
        var t,
          n = !1;
        if (b.state.isEnabled && !Q(e) && !p) {
          var i = "focus" === (null == (t = s) ? void 0 : t.type);
          (s = e),
            (l = e.currentTarget),
            I(),
            !b.state.isVisible &&
              Fe(e) &&
              mt.forEach(function (t) {
                return t(e);
              }),
            "click" === e.type &&
            (b.props.trigger.indexOf("mouseenter") < 0 || d) &&
            !1 !== b.props.hideOnClick &&
            b.state.isVisible
              ? (n = !0)
              : ee(e),
            "click" === e.type && (d = !n),
            n && !i && te(e);
        }
      }
      function Y(e) {
        var t = e.target,
          n = L().contains(t) || x.contains(t);
        if ("mousemove" !== e.type || !n) {
          var i = Z()
            .concat(x)
            .map(function (e) {
              var t,
                n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
              return n
                ? {
                    popperRect: e.getBoundingClientRect(),
                    popperState: n,
                    props: u,
                  }
                : null;
            })
            .filter(Boolean);
          (function (e, t) {
            var n = t.clientX,
              i = t.clientY;
            return e.every(function (e) {
              var t = e.popperRect,
                r = e.popperState,
                s = e.props.interactiveBorder,
                o = He(r.placement),
                a = r.modifiersData.offset;
              if (!a) return !0;
              var l = "bottom" === o ? a.top.y : 0,
                c = "top" === o ? a.bottom.y : 0,
                u = "right" === o ? a.left.x : 0,
                d = "left" === o ? a.right.x : 0,
                p = t.top - i + l > s,
                f = i - t.bottom - c > s,
                h = t.left - n + u > s,
                m = n - t.right - d > s;
              return p || f || h || m;
            });
          })(i, e) && (N(), te(e));
        }
      }
      function U(e) {
        Q(e) ||
          (b.props.trigger.indexOf("click") >= 0 && d) ||
          (b.props.interactive ? b.hideWithInteractivity(e) : te(e));
      }
      function X(e) {
        (b.props.trigger.indexOf("focusin") < 0 && e.target !== L()) ||
          (b.props.interactive &&
            e.relatedTarget &&
            x.contains(e.relatedTarget)) ||
          te(e);
      }
      function Q(e) {
        return !!Je.isTouch && k() !== e.type.indexOf("touch") >= 0;
      }
      function K() {
        J();
        var t = b.props,
          n = t.popperOptions,
          i = t.placement,
          r = t.offset,
          s = t.getReferenceClientRect,
          o = t.moveTransition,
          l = A() ? pt(x).arrow : null,
          c = s
            ? {
                getBoundingClientRect: s,
                contextElement: s.contextElement || L(),
              }
            : e,
          u = {
            name: "$$tippy",
            enabled: !0,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: function (e) {
              var t = e.state;
              if (A()) {
                var n = _().box;
                ["placement", "reference-hidden", "escaped"].forEach(function (
                  e
                ) {
                  "placement" === e
                    ? n.setAttribute("data-placement", t.placement)
                    : t.attributes.popper["data-popper-" + e]
                    ? n.setAttribute("data-" + e, "")
                    : n.removeAttribute("data-" + e);
                }),
                  (t.attributes.popper = {});
              }
            },
          },
          d = [
            { name: "offset", options: { offset: r } },
            {
              name: "preventOverflow",
              options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
            },
            { name: "flip", options: { padding: 5 } },
            { name: "computeStyles", options: { adaptive: !o } },
            u,
          ];
        A() &&
          l &&
          d.push({ name: "arrow", options: { element: l, padding: 3 } }),
          d.push.apply(d, (null == n ? void 0 : n.modifiers) || []),
          (b.popperInstance = ke(
            c,
            x,
            Object.assign({}, n, {
              placement: i,
              onFirstUpdate: a,
              modifiers: d,
            })
          ));
      }
      function J() {
        b.popperInstance &&
          (b.popperInstance.destroy(), (b.popperInstance = null));
      }
      function Z() {
        return Be(x.querySelectorAll("[data-tippy-root]"));
      }
      function ee(e) {
        b.clearDelayTimeouts(), e && D("onTrigger", [b, e]), B();
        var t = M(!0),
          i = C(),
          r = i[0],
          s = i[1];
        Je.isTouch && "hold" === r && s && (t = s),
          t
            ? (n = setTimeout(function () {
                b.show();
              }, t))
            : b.show();
      }
      function te(e) {
        if (
          (b.clearDelayTimeouts(), D("onUntrigger", [b, e]), b.state.isVisible)
        ) {
          if (
            !(
              b.props.trigger.indexOf("mouseenter") >= 0 &&
              b.props.trigger.indexOf("click") >= 0 &&
              ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
              d
            )
          ) {
            var t = M(!1);
            t
              ? (i = setTimeout(function () {
                  b.state.isVisible && b.hide();
                }, t))
              : (r = requestAnimationFrame(function () {
                  b.hide();
                }));
          }
        } else R();
      }
    }
    function yt(e, t) {
      void 0 === t && (t = {});
      var n = st.plugins.concat(t.plugins || []);
      document.addEventListener("touchstart", et, Me),
        window.addEventListener("blur", nt);
      var i = Object.assign({}, t, { plugins: n }),
        r = Ge(e).reduce(function (e, t) {
          var n = t && vt(t, i);
          return n && e.push(n), e;
        }, []);
      return ze(e) ? r[0] : r;
    }
    (yt.defaultProps = st),
      (yt.setDefaultProps = function (e) {
        Object.keys(e).forEach(function (t) {
          st[t] = e[t];
        });
      }),
      (yt.currentInput = Je);
    Object.assign({}, le, {
      effect: function (e) {
        var t = e.state,
          n = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        Object.assign(t.elements.popper.style, n.popper),
          (t.styles = n),
          t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow);
      },
    });
    yt.setDefaultProps({ render: ft });
    function bt(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function wt(e = {}, t = {}) {
      Object.keys(t).forEach((n) => {
        void 0 === e[n]
          ? (e[n] = t[n])
          : bt(t[n]) &&
            bt(e[n]) &&
            Object.keys(t[n]).length > 0 &&
            wt(e[n], t[n]);
      });
    }
    yt("[data-tippy-content]", {});
    const xt = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function Tt() {
      const e = "undefined" != typeof document ? document : {};
      return wt(e, xt), e;
    }
    const Et = {
      document: xt,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function St() {
      const e = "undefined" != typeof window ? window : {};
      return wt(e, Et), e;
    }
    class Ct extends Array {
      constructor(e) {
        super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this);
      }
    }
    function kt(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...kt(e)) : t.push(e);
        }),
        t
      );
    }
    function At(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function Lt(e, t) {
      const n = St(),
        i = Tt();
      let r = [];
      if (!t && e instanceof Ct) return e;
      if (!e) return new Ct(r);
      if ("string" == typeof e) {
        const n = e.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          let e = "div";
          0 === n.indexOf("<li") && (e = "ul"),
            0 === n.indexOf("<tr") && (e = "tbody"),
            (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
            0 === n.indexOf("<tbody") && (e = "table"),
            0 === n.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = n;
          for (let e = 0; e < t.childNodes.length; e += 1)
            r.push(t.childNodes[e]);
        } else
          r = (function (e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) n.push(i[e]);
            return n;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === n || e === i) r.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof Ct) return e;
        r = e;
      }
      return new Ct(
        (function (e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        })(r)
      );
    }
    Lt.fn = Ct.prototype;
    const Ot = "resize scroll".split(" ");
    function _t(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            Ot.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : Lt(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    _t("click"),
      _t("blur"),
      _t("focus"),
      _t("focusin"),
      _t("focusout"),
      _t("keyup"),
      _t("keydown"),
      _t("keypress"),
      _t("submit"),
      _t("change"),
      _t("mousedown"),
      _t("mousemove"),
      _t("mouseup"),
      _t("mouseenter"),
      _t("mouseleave"),
      _t("mouseout"),
      _t("mouseover"),
      _t("touchstart"),
      _t("touchend"),
      _t("touchmove"),
      _t("resize"),
      _t("scroll");
    const Mt = {
      addClass: function (...e) {
        const t = kt(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = kt(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = kt(e.map((e) => e.split(" ")));
        return (
          At(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = kt(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let n = 0; n < this.length; n += 1)
          if (2 === arguments.length) this[n].setAttribute(e, t);
          else
            for (const t in e)
              (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, n, i, r] = e;
        function s(e) {
          const t = e.target;
          if (!t) return;
          const r = e.target.dom7EventData || [];
          if ((r.indexOf(e) < 0 && r.unshift(e), Lt(t).is(n))) i.apply(t, r);
          else {
            const e = Lt(t).parents();
            for (let t = 0; t < e.length; t += 1)
              Lt(e[t]).is(n) && i.apply(e[t], r);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
          r || (r = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (n)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: s }),
                t.addEventListener(e, s, r);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
                t.addEventListener(e, o, r);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, n, i, r] = e;
        "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
          r || (r = !1);
        const s = t.split(" ");
        for (let e = 0; e < s.length; e += 1) {
          const t = s[e];
          for (let e = 0; e < this.length; e += 1) {
            const s = this[e];
            let o;
            if (
              (!n && s.dom7Listeners
                ? (o = s.dom7Listeners[t])
                : n && s.dom7LiveListeners && (o = s.dom7LiveListeners[t]),
              o && o.length)
            )
              for (let e = o.length - 1; e >= 0; e -= 1) {
                const n = o[e];
                (i && n.listener === i) ||
                (i &&
                  n.listener &&
                  n.listener.dom7proxy &&
                  n.listener.dom7proxy === i)
                  ? (s.removeEventListener(t, n.proxyListener, r),
                    o.splice(e, 1))
                  : i ||
                    (s.removeEventListener(t, n.proxyListener, r),
                    o.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = St(),
          n = e[0].split(" "),
          i = e[1];
        for (let r = 0; r < n.length; r += 1) {
          const s = n[r];
          for (let n = 0; n < this.length; n += 1) {
            const r = this[n];
            if (t.CustomEvent) {
              const n = new t.CustomEvent(s, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (r.dom7EventData = e.filter((e, t) => t > 0)),
                r.dispatchEvent(n),
                (r.dom7EventData = []),
                delete r.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function n(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", n));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = St();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = St(),
            t = Tt(),
            n = this[0],
            i = n.getBoundingClientRect(),
            r = t.body,
            s = n.clientTop || r.clientTop || 0,
            o = n.clientLeft || r.clientLeft || 0,
            a = n === e ? e.scrollY : n.scrollTop,
            l = n === e ? e.scrollX : n.scrollLeft;
          return { top: i.top + a - s, left: i.left + l - o };
        }
        return null;
      },
      css: function (e, t) {
        const n = St();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, n) => {
              e.apply(t, [t, n]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = St(),
          n = Tt(),
          i = this[0];
        let r, s;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (r = Lt(e), s = 0; s < r.length; s += 1)
            if (r[s] === i) return !0;
          return !1;
        }
        if (e === n) return i === n;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof Ct) {
          for (r = e.nodeType ? [e] : e, s = 0; s < r.length; s += 1)
            if (r[s] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return Lt([]);
        if (e < 0) {
          const n = t + e;
          return Lt(n < 0 ? [] : [this[n]]);
        }
        return Lt([this[e]]);
      },
      append: function (...e) {
        let t;
        const n = Tt();
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = n.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof Ct)
              for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = Tt();
        let n, i;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            const r = t.createElement("div");
            for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1)
              this[n].insertBefore(r.childNodes[i], this[n].childNodes[0]);
          } else if (e instanceof Ct)
            for (i = 0; i < e.length; i += 1)
              this[n].insertBefore(e[i], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && Lt(this[0].nextElementSibling).is(e)
              ? Lt([this[0].nextElementSibling])
              : Lt([])
            : this[0].nextElementSibling
            ? Lt([this[0].nextElementSibling])
            : Lt([])
          : Lt([]);
      },
      nextAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return Lt([]);
        for (; n.nextElementSibling; ) {
          const i = n.nextElementSibling;
          e ? Lt(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return Lt(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && Lt(t.previousElementSibling).is(e)
              ? Lt([t.previousElementSibling])
              : Lt([])
            : t.previousElementSibling
            ? Lt([t.previousElementSibling])
            : Lt([]);
        }
        return Lt([]);
      },
      prevAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return Lt([]);
        for (; n.previousElementSibling; ) {
          const i = n.previousElementSibling;
          e ? Lt(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return Lt(t);
      },
      parent: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? Lt(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return Lt(t);
      },
      parents: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          let i = this[n].parentNode;
          for (; i; )
            e ? Lt(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return Lt(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? Lt([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return Lt(t);
      },
      children: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].children;
          for (let n = 0; n < i.length; n += 1)
            (e && !Lt(i[n]).is(e)) || t.push(i[n]);
        }
        return Lt(t);
      },
      filter: function (e) {
        return Lt(At(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(Mt).forEach((e) => {
      Object.defineProperty(Lt.fn, e, { value: Mt[e], writable: !0 });
    });
    const Pt = Lt;
    function Dt(e, t = 0) {
      return setTimeout(e, t);
    }
    function $t() {
      return Date.now();
    }
    function It(e, t = "x") {
      const n = St();
      let i, r, s;
      const o = (function (e) {
        const t = St();
        let n;
        return (
          t.getComputedStyle && (n = t.getComputedStyle(e, null)),
          !n && e.currentStyle && (n = e.currentStyle),
          n || (n = e.style),
          n
        );
      })(e);
      return (
        n.WebKitCSSMatrix
          ? ((r = o.transform || o.webkitTransform),
            r.split(",").length > 6 &&
              (r = r
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (s = new n.WebKitCSSMatrix("none" === r ? "" : r)))
          : ((s =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = s.toString().split(","))),
        "x" === t &&
          (r = n.WebKitCSSMatrix
            ? s.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (r = n.WebKitCSSMatrix
            ? s.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        r || 0
      );
    }
    function Nt(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function jt(...e) {
      const t = Object(e[0]),
        n = ["__proto__", "constructor", "prototype"];
      for (let r = 1; r < e.length; r += 1) {
        const s = e[r];
        if (
          null != s &&
          ((i = s),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const e = Object.keys(Object(s)).filter((e) => n.indexOf(e) < 0);
          for (let n = 0, i = e.length; n < i; n += 1) {
            const i = e[n],
              r = Object.getOwnPropertyDescriptor(s, i);
            void 0 !== r &&
              r.enumerable &&
              (Nt(t[i]) && Nt(s[i])
                ? s[i].__swiper__
                  ? (t[i] = s[i])
                  : jt(t[i], s[i])
                : !Nt(t[i]) && Nt(s[i])
                ? ((t[i] = {}),
                  s[i].__swiper__ ? (t[i] = s[i]) : jt(t[i], s[i]))
                : (t[i] = s[i]));
          }
        }
      }
      var i;
      return t;
    }
    function qt(e, t, n) {
      e.style.setProperty(t, n);
    }
    function Ht({ swiper: e, targetPosition: t, side: n }) {
      const i = St(),
        r = -e.translate;
      let s,
        o = null;
      const a = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(e.cssModeFrameID);
      const l = t > r ? "next" : "prev",
        c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
        u = () => {
          (s = new Date().getTime()), null === o && (o = s);
          const l = Math.max(Math.min((s - o) / a, 1), 0),
            d = 0.5 - Math.cos(l * Math.PI) / 2;
          let p = r + d * (t - r);
          if ((c(p, t) && (p = t), e.wrapperEl.scrollTo({ [n]: p }), c(p, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [n]: p });
              }),
              void i.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = i.requestAnimationFrame(u);
        };
      u();
    }
    let Bt, Rt, Wt;
    function zt() {
      return (
        Bt ||
          (Bt = (function () {
            const e = St(),
              t = Tt();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const n = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, n);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        Bt
      );
    }
    function Ft(e = {}) {
      return (
        Rt ||
          (Rt = (function ({ userAgent: e } = {}) {
            const t = zt(),
              n = St(),
              i = n.navigator.platform,
              r = e || n.navigator.userAgent,
              s = { ios: !1, android: !1 },
              o = n.screen.width,
              a = n.screen.height,
              l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = r.match(/(iPad).*OS\s([\d_]+)/);
            const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              d = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              p = "Win32" === i;
            let f = "MacIntel" === i;
            return (
              !c &&
                f &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${o}x${a}`) >= 0 &&
                ((c = r.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (f = !1)),
              l && !p && ((s.os = "android"), (s.android = !0)),
              (c || d || u) && ((s.os = "ios"), (s.ios = !0)),
              s
            );
          })(e)),
        Rt
      );
    }
    function Vt() {
      return (
        Wt ||
          (Wt = (function () {
            const e = St();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        Wt
      );
    }
    const Gt = {
      on(e, t, n) {
        const i = this;
        if ("function" != typeof t) return i;
        const r = n ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][r](t);
          }),
          i
        );
      },
      once(e, t, n) {
        const i = this;
        if ("function" != typeof t) return i;
        function r(...n) {
          i.off(e, r),
            r.__emitterProxy && delete r.__emitterProxy,
            t.apply(i, n);
        }
        return (r.__emitterProxy = t), i.on(e, r, n);
      },
      onAny(e, t) {
        const n = this;
        if ("function" != typeof e) return n;
        const i = t ? "unshift" : "push";
        return (
          n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsAnyListeners) return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
      },
      off(e, t) {
        const n = this;
        return n.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (n.eventsListeners[e] = [])
                : n.eventsListeners[e] &&
                  n.eventsListeners[e].forEach((i, r) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      n.eventsListeners[e].splice(r, 1);
                  });
            }),
            n)
          : n;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners) return t;
        let n, i, r;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((n = e[0]), (i = e.slice(1, e.length)), (r = t))
          : ((n = e[0].events), (i = e[0].data), (r = e[0].context || t)),
          i.unshift(r);
        return (
          (Array.isArray(n) ? n : n.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(r, [e, ...i]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(r, i);
                });
          }),
          t
        );
      },
    };
    const Yt = {
      updateSize: function () {
        const e = this;
        let t, n;
        const i = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i[0].clientWidth),
          (n =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === n && e.isVertical()) ||
            ((t =
              t -
              parseInt(i.css("padding-left") || 0, 10) -
              parseInt(i.css("padding-right") || 0, 10)),
            (n =
              n -
              parseInt(i.css("padding-top") || 0, 10) -
              parseInt(i.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(n) && (n = 0),
            Object.assign(e, {
              width: t,
              height: n,
              size: e.isHorizontal() ? t : n,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function n(e, n) {
          return parseFloat(e.getPropertyValue(t(n)) || 0);
        }
        const i = e.params,
          { $wrapperEl: r, size: s, rtlTranslate: o, wrongRTL: a } = e,
          l = e.virtual && i.virtual.enabled,
          c = l ? e.virtual.slides.length : e.slides.length,
          u = r.children(`.${e.params.slideClass}`),
          d = l ? e.virtual.slides.length : u.length;
        let p = [];
        const f = [],
          h = [];
        let m = i.slidesOffsetBefore;
        "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
        let g = i.slidesOffsetAfter;
        "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          y = e.slidesGrid.length;
        let b = i.spaceBetween,
          w = -m,
          x = 0,
          T = 0;
        if (void 0 === s) return;
        "string" == typeof b &&
          b.indexOf("%") >= 0 &&
          (b = (parseFloat(b.replace("%", "")) / 100) * s),
          (e.virtualSize = -b),
          o
            ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          i.centeredSlides &&
            i.cssMode &&
            (qt(e.wrapperEl, "--swiper-centered-offset-before", ""),
            qt(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const E = i.grid && i.grid.rows > 1 && e.grid;
        let S;
        E && e.grid.initSlides(d);
        const C =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let r = 0; r < d; r += 1) {
          S = 0;
          const o = u.eq(r);
          if (
            (E && e.grid.updateSlide(r, o, d, t), "none" !== o.css("display"))
          ) {
            if ("auto" === i.slidesPerView) {
              C && (u[r].style[t("width")] = "");
              const s = getComputedStyle(o[0]),
                a = o[0].style.transform,
                l = o[0].style.webkitTransform;
              if (
                (a && (o[0].style.transform = "none"),
                l && (o[0].style.webkitTransform = "none"),
                i.roundLengths)
              )
                S = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
              else {
                const e = n(s, "width"),
                  t = n(s, "padding-left"),
                  i = n(s, "padding-right"),
                  r = n(s, "margin-left"),
                  a = n(s, "margin-right"),
                  l = s.getPropertyValue("box-sizing");
                if (l && "border-box" === l) S = e + r + a;
                else {
                  const { clientWidth: n, offsetWidth: s } = o[0];
                  S = e + t + i + r + a + (s - n);
                }
              }
              a && (o[0].style.transform = a),
                l && (o[0].style.webkitTransform = l),
                i.roundLengths && (S = Math.floor(S));
            } else
              (S = (s - (i.slidesPerView - 1) * b) / i.slidesPerView),
                i.roundLengths && (S = Math.floor(S)),
                u[r] && (u[r].style[t("width")] = `${S}px`);
            u[r] && (u[r].swiperSlideSize = S),
              h.push(S),
              i.centeredSlides
                ? ((w = w + S / 2 + x / 2 + b),
                  0 === x && 0 !== r && (w = w - s / 2 - b),
                  0 === r && (w = w - s / 2 - b),
                  Math.abs(w) < 0.001 && (w = 0),
                  i.roundLengths && (w = Math.floor(w)),
                  T % i.slidesPerGroup == 0 && p.push(w),
                  f.push(w))
                : (i.roundLengths && (w = Math.floor(w)),
                  (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(w),
                  f.push(w),
                  (w = w + S + b)),
              (e.virtualSize += S + b),
              (x = S),
              (T += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, s) + g),
          o &&
            a &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            r.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
          i.setWrapperSize &&
            r.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
          E && e.grid.updateWrapperSize(S, p, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let n = 0; n < p.length; n += 1) {
            let r = p[n];
            i.roundLengths && (r = Math.floor(r)),
              p[n] <= e.virtualSize - s && t.push(r);
          }
          (p = t),
            Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - s);
        }
        if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
          const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          u.filter((e, t) => !i.cssMode || t !== u.length - 1).css({
            [n]: `${b}px`,
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          h.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - s;
          p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < s)
          ) {
            const t = (s - e) / 2;
            p.forEach((e, n) => {
              p[n] = e - t;
            }),
              f.forEach((e, n) => {
                f[n] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: u,
            snapGrid: p,
            slidesGrid: f,
            slidesSizesGrid: h,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          qt(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            qt(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - h[h.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            n = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + n));
        }
        d !== c && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          f.length !== y && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset();
      },
      updateAutoHeight: function (e) {
        const t = this,
          n = [],
          i = t.virtual && t.params.virtual.enabled;
        let r,
          s = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const o = (e) =>
          i
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            t.visibleSlides.each((e) => {
              n.push(e);
            });
          else
            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
              const e = t.activeIndex + r;
              if (e > t.slides.length && !i) break;
              n.push(o(e));
            }
        else n.push(o(t.activeIndex));
        for (r = 0; r < n.length; r += 1)
          if (void 0 !== n[r]) {
            const e = n[r].offsetHeight;
            s = e > s ? e : s;
          }
        s && t.$wrapperEl.css("height", `${s}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let n = 0; n < t.length; n += 1)
          t[n].swiperSlideOffset = e.isHorizontal()
            ? t[n].offsetLeft
            : t[n].offsetTop;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          n = t.params,
          { slides: i, rtlTranslate: r, snapGrid: s } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let o = -e;
        r && (o = e),
          i.removeClass(n.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const a = i[e];
          let l = a.swiperSlideOffset;
          n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
          const c =
              (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + n.spaceBetween),
            u =
              (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + n.spaceBetween),
            d = -(o - l),
            p = d + t.slidesSizesGrid[e];
          ((d >= 0 && d < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (d <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            i.eq(e).addClass(n.slideVisibleClass)),
            (a.progress = r ? -c : c),
            (a.originalProgress = r ? -u : u);
        }
        t.visibleSlides = Pt(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const n = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * n) || 0;
        }
        const n = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: r, isBeginning: s, isEnd: o } = t;
        const a = s,
          l = o;
        0 === i
          ? ((r = 0), (s = !0), (o = !0))
          : ((r = (e - t.minTranslate()) / i), (s = r <= 0), (o = r >= 1)),
          Object.assign(t, { progress: r, isBeginning: s, isEnd: o }),
          (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
            t.updateSlidesProgress(e),
          s && !a && t.emit("reachBeginning toEdge"),
          o && !l && t.emit("reachEnd toEdge"),
          ((a && !s) || (l && !o)) && t.emit("fromEdge"),
          t.emit("progress", r);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: n,
            $wrapperEl: i,
            activeIndex: r,
            realIndex: s,
          } = e,
          o = e.virtual && n.virtual.enabled;
        let a;
        t.removeClass(
          `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
        ),
          (a = o
            ? e.$wrapperEl.find(
                `.${n.slideClass}[data-swiper-slide-index="${r}"]`
              )
            : t.eq(r)),
          a.addClass(n.slideActiveClass),
          n.loop &&
            (a.hasClass(n.slideDuplicateClass)
              ? i
                  .children(
                    `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass)
              : i
                  .children(
                    `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass));
        let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
        n.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(n.slideNextClass));
        let c = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
        n.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
          n.loop &&
            (l.hasClass(n.slideDuplicateClass)
              ? i
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass)
              : i
                  .children(
                    `.${n.slideClass}.${
                      n.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass),
            c.hasClass(n.slideDuplicateClass)
              ? i
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicatePrevClass)
              : i
                  .children(
                    `.${n.slideClass}.${
                      n.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          n = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: i,
            snapGrid: r,
            params: s,
            activeIndex: o,
            realIndex: a,
            snapIndex: l,
          } = t;
        let c,
          u = e;
        if (void 0 === u) {
          for (let e = 0; e < i.length; e += 1)
            void 0 !== i[e + 1]
              ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
                ? (u = e)
                : n >= i[e] && n < i[e + 1] && (u = e + 1)
              : n >= i[e] && (u = e);
          s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
        }
        if (r.indexOf(n) >= 0) c = r.indexOf(n);
        else {
          const e = Math.min(s.slidesPerGroupSkip, u);
          c = e + Math.floor((u - e) / s.slidesPerGroup);
        }
        if ((c >= r.length && (c = r.length - 1), u === o))
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const d = parseInt(
          t.slides.eq(u).attr("data-swiper-slide-index") || u,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: d,
          previousIndex: o,
          activeIndex: u,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== d && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          n = t.params,
          i = Pt(e).closest(`.${n.slideClass}`)[0];
        let r,
          s = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (s = !0), (r = e);
              break;
            }
        if (!i || !s)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                Pt(i).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = r),
          n.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const Ut = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const {
          params: t,
          rtlTranslate: n,
          translate: i,
          $wrapperEl: r,
        } = this;
        if (t.virtualTranslate) return n ? -i : i;
        if (t.cssMode) return i;
        let s = It(r[0], e);
        return n && (s = -s), s || 0;
      },
      setTranslate: function (e, t) {
        const n = this,
          {
            rtlTranslate: i,
            params: r,
            $wrapperEl: s,
            wrapperEl: o,
            progress: a,
          } = n;
        let l,
          c = 0,
          u = 0;
        n.isHorizontal() ? (c = i ? -e : e) : (u = e),
          r.roundLengths && ((c = Math.floor(c)), (u = Math.floor(u))),
          r.cssMode
            ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                n.isHorizontal() ? -c : -u)
            : r.virtualTranslate ||
              s.transform(`translate3d(${c}px, ${u}px, 0px)`),
          (n.previousTranslate = n.translate),
          (n.translate = n.isHorizontal() ? c : u);
        const d = n.maxTranslate() - n.minTranslate();
        (l = 0 === d ? 0 : (e - n.minTranslate()) / d),
          l !== a && n.updateProgress(e),
          n.emit("setTranslate", n.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, n = !0, i = !0, r) {
        const s = this,
          { params: o, wrapperEl: a } = s;
        if (s.animating && o.preventInteractionOnTransition) return !1;
        const l = s.minTranslate(),
          c = s.maxTranslate();
        let u;
        if (
          ((u = i && e > l ? l : i && e < c ? c : e),
          s.updateProgress(u),
          o.cssMode)
        ) {
          const e = s.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -u;
          else {
            if (!s.support.smoothScroll)
              return (
                Ht({ swiper: s, targetPosition: -u, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -u, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (s.setTransition(0),
              s.setTranslate(u),
              n &&
                (s.emit("beforeTransitionStart", t, r),
                s.emit("transitionEnd")))
            : (s.setTransition(t),
              s.setTranslate(u),
              n &&
                (s.emit("beforeTransitionStart", t, r),
                s.emit("transitionStart")),
              s.animating ||
                ((s.animating = !0),
                s.onTranslateToWrapperTransitionEnd ||
                  (s.onTranslateToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        s.onTranslateToWrapperTransitionEnd
                      ),
                      s.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        s.onTranslateToWrapperTransitionEnd
                      ),
                      (s.onTranslateToWrapperTransitionEnd = null),
                      delete s.onTranslateToWrapperTransitionEnd,
                      n && s.emit("transitionEnd"));
                  }),
                s.$wrapperEl[0].addEventListener(
                  "transitionend",
                  s.onTranslateToWrapperTransitionEnd
                ),
                s.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  s.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function Xt({ swiper: e, runCallbacks: t, direction: n, step: i }) {
      const { activeIndex: r, previousIndex: s } = e;
      let o = n;
      if (
        (o || (o = r > s ? "next" : r < s ? "prev" : "reset"),
        e.emit(`transition${i}`),
        t && r !== s)
      ) {
        if ("reset" === o) return void e.emit(`slideResetTransition${i}`);
        e.emit(`slideChangeTransition${i}`),
          "next" === o
            ? e.emit(`slideNextTransition${i}`)
            : e.emit(`slidePrevTransition${i}`);
      }
    }
    const Qt = {
      slideTo: function (e = 0, t = this.params.speed, n = !0, i, r) {
        if ("number" != typeof e && "string" != typeof e)
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const s = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: u,
          activeIndex: d,
          rtlTranslate: p,
          wrapperEl: f,
          enabled: h,
        } = s;
        if (
          (s.animating && a.preventInteractionOnTransition) ||
          (!h && !i && !r)
        )
          return !1;
        const m = Math.min(s.params.slidesPerGroupSkip, o);
        let g = m + Math.floor((o - m) / s.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1),
          (d || a.initialSlide || 0) === (u || 0) &&
            n &&
            s.emit("beforeSlideChangeStart");
        const v = -l[g];
        if ((s.updateProgress(v), a.normalizeSlideIndex))
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              n = Math.floor(100 * c[e]),
              i = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= n && t < i - (i - n) / 2
                ? (o = e)
                : t >= n && t < i && (o = e + 1)
              : t >= n && (o = e);
          }
        if (s.initialized && o !== d) {
          if (!s.allowSlideNext && v < s.translate && v < s.minTranslate())
            return !1;
          if (
            !s.allowSlidePrev &&
            v > s.translate &&
            v > s.maxTranslate() &&
            (d || 0) !== o
          )
            return !1;
        }
        let y;
        if (
          ((y = o > d ? "next" : o < d ? "prev" : "reset"),
          (p && -v === s.translate) || (!p && v === s.translate))
        )
          return (
            s.updateActiveIndex(o),
            a.autoHeight && s.updateAutoHeight(),
            s.updateSlidesClasses(),
            "slide" !== a.effect && s.setTranslate(v),
            "reset" !== y && (s.transitionStart(n, y), s.transitionEnd(n, y)),
            !1
          );
        if (a.cssMode) {
          const e = s.isHorizontal(),
            n = p ? v : -v;
          if (0 === t) {
            const t = s.virtual && s.params.virtual.enabled;
            t &&
              ((s.wrapperEl.style.scrollSnapType = "none"),
              (s._immediateVirtual = !0)),
              (f[e ? "scrollLeft" : "scrollTop"] = n),
              t &&
                requestAnimationFrame(() => {
                  (s.wrapperEl.style.scrollSnapType = ""),
                    (s._swiperImmediateVirtual = !1);
                });
          } else {
            if (!s.support.smoothScroll)
              return (
                Ht({ swiper: s, targetPosition: n, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (s.setTransition(0),
              s.setTranslate(v),
              s.updateActiveIndex(o),
              s.updateSlidesClasses(),
              s.emit("beforeTransitionStart", t, i),
              s.transitionStart(n, y),
              s.transitionEnd(n, y))
            : (s.setTransition(t),
              s.setTranslate(v),
              s.updateActiveIndex(o),
              s.updateSlidesClasses(),
              s.emit("beforeTransitionStart", t, i),
              s.transitionStart(n, y),
              s.animating ||
                ((s.animating = !0),
                s.onSlideToWrapperTransitionEnd ||
                  (s.onSlideToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      s.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      (s.onSlideToWrapperTransitionEnd = null),
                      delete s.onSlideToWrapperTransitionEnd,
                      s.transitionEnd(n, y));
                  }),
                s.$wrapperEl[0].addEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                s.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  s.onSlideToWrapperTransitionEnd
                ))),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, n = !0, i) {
        const r = this;
        let s = e;
        return r.params.loop && (s += r.loopedSlides), r.slideTo(s, t, n, i);
      },
      slideNext: function (e = this.params.speed, t = !0, n) {
        const i = this,
          { animating: r, enabled: s, params: o } = i;
        if (!s) return i;
        let a = o.slidesPerGroup;
        "auto" === o.slidesPerView &&
          1 === o.slidesPerGroup &&
          o.slidesPerGroupAuto &&
          (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
        if (o.loop) {
          if (r && o.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        return i.slideTo(i.activeIndex + l, e, t, n);
      },
      slidePrev: function (e = this.params.speed, t = !0, n) {
        const i = this,
          {
            params: r,
            animating: s,
            snapGrid: o,
            slidesGrid: a,
            rtlTranslate: l,
            enabled: c,
          } = i;
        if (!c) return i;
        if (r.loop) {
          if (s && r.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        function u(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const d = u(l ? i.translate : -i.translate),
          p = o.map((e) => u(e));
        let f = o[p.indexOf(d) - 1];
        if (void 0 === f && r.cssMode) {
          let e;
          o.forEach((t, n) => {
            d >= t && (e = n);
          }),
            void 0 !== e && (f = o[e > 0 ? e - 1 : e]);
        }
        let h = 0;
        return (
          void 0 !== f &&
            ((h = a.indexOf(f)),
            h < 0 && (h = i.activeIndex - 1),
            "auto" === r.slidesPerView &&
              1 === r.slidesPerGroup &&
              r.slidesPerGroupAuto &&
              ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          i.slideTo(h, e, t, n)
        );
      },
      slideReset: function (e = this.params.speed, t = !0, n) {
        return this.slideTo(this.activeIndex, e, t, n);
      },
      slideToClosest: function (e = this.params.speed, t = !0, n, i = 0.5) {
        const r = this;
        let s = r.activeIndex;
        const o = Math.min(r.params.slidesPerGroupSkip, s),
          a = o + Math.floor((s - o) / r.params.slidesPerGroup),
          l = r.rtlTranslate ? r.translate : -r.translate;
        if (l >= r.snapGrid[a]) {
          const e = r.snapGrid[a];
          l - e > (r.snapGrid[a + 1] - e) * i && (s += r.params.slidesPerGroup);
        } else {
          const e = r.snapGrid[a - 1];
          l - e <= (r.snapGrid[a] - e) * i && (s -= r.params.slidesPerGroup);
        }
        return (
          (s = Math.max(s, 0)),
          (s = Math.min(s, r.slidesGrid.length - 1)),
          r.slideTo(s, e, t, n)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: n } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let r,
          s = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (r = parseInt(
            Pt(e.clickedSlide).attr("data-swiper-slide-index"),
            10
          )),
            t.centeredSlides
              ? s < e.loopedSlides - i / 2 ||
                s > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (s = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  Dt(() => {
                    e.slideTo(s);
                  }))
                : e.slideTo(s)
              : s > e.slides.length - i
              ? (e.loopFix(),
                (s = n
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                Dt(() => {
                  e.slideTo(s);
                }))
              : e.slideTo(s);
        } else e.slideTo(s);
      },
    };
    const Kt = {
      loopCreate: function () {
        const e = this,
          t = Tt(),
          { params: n, $wrapperEl: i } = e,
          r = i.children().length > 0 ? Pt(i.children()[0].parentNode) : i;
        r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
        let s = r.children(`.${n.slideClass}`);
        if (n.loopFillGroupWithBlank) {
          const e = n.slidesPerGroup - (s.length % n.slidesPerGroup);
          if (e !== n.slidesPerGroup) {
            for (let i = 0; i < e; i += 1) {
              const e = Pt(t.createElement("div")).addClass(
                `${n.slideClass} ${n.slideBlankClass}`
              );
              r.append(e);
            }
            s = r.children(`.${n.slideClass}`);
          }
        }
        "auto" !== n.slidesPerView ||
          n.loopedSlides ||
          (n.loopedSlides = s.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(n.loopedSlides || n.slidesPerView, 10)
          )),
          (e.loopedSlides += n.loopAdditionalSlides),
          e.loopedSlides > s.length && (e.loopedSlides = s.length);
        const o = [],
          a = [];
        s.each((t, n) => {
          const i = Pt(t);
          n < e.loopedSlides && a.push(t),
            n < s.length && n >= s.length - e.loopedSlides && o.push(t),
            i.attr("data-swiper-slide-index", n);
        });
        for (let e = 0; e < a.length; e += 1)
          r.append(Pt(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        for (let e = o.length - 1; e >= 0; e -= 1)
          r.prepend(Pt(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: n,
          loopedSlides: i,
          allowSlidePrev: r,
          allowSlideNext: s,
          snapGrid: o,
          rtlTranslate: a,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -o[t] - e.getTranslate();
        if (t < i) {
          (l = n.length - 3 * i + t), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        } else if (t >= n.length - i) {
          (l = -n.length + t + i), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = r), (e.allowSlideNext = s), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: n } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          n.removeAttr("data-swiper-slide-index");
      },
    };
    function Jt(e) {
      const t = this,
        n = Tt(),
        i = St(),
        r = t.touchEventsData,
        { params: s, touches: o, enabled: a } = t;
      if (!a) return;
      if (t.animating && s.preventInteractionOnTransition) return;
      !t.animating && s.cssMode && s.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = Pt(l.target);
      if ("wrapper" === s.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((r.isTouchEvent = "touchstart" === l.type),
        !r.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!r.isTouchEvent && "button" in l && l.button > 0) return;
      if (r.isTouched && r.isMoved) return;
      !!s.noSwipingClass &&
        "" !== s.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (c = Pt(e.path[0]));
      const u = s.noSwipingSelector
          ? s.noSwipingSelector
          : `.${s.noSwipingClass}`,
        d = !(!l.target || !l.target.shadowRoot);
      if (
        s.noSwiping &&
        (d
          ? (function (e, t = this) {
              return (function t(n) {
                return n && n !== Tt() && n !== St()
                  ? (n.assignedSlot && (n = n.assignedSlot),
                    n.closest(e) || t(n.getRootNode().host))
                  : null;
              })(t);
            })(u, l.target)
          : c.closest(u)[0])
      )
        return void (t.allowClick = !0);
      if (s.swipeHandler && !c.closest(s.swipeHandler)[0]) return;
      (o.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (o.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const p = o.currentX,
        f = o.currentY,
        h = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
        m = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
      if (h && (p <= m || p >= i.innerWidth - m)) {
        if ("prevent" !== h) return;
        e.preventDefault();
      }
      if (
        (Object.assign(r, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (o.startX = p),
        (o.startY = f),
        (r.touchStartTime = $t()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        s.threshold > 0 && (r.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(r.focusableElements) && (e = !1),
          n.activeElement &&
            Pt(n.activeElement).is(r.focusableElements) &&
            n.activeElement !== c[0] &&
            n.activeElement.blur();
        const i = e && t.allowTouchMove && s.touchStartPreventDefault;
        (!s.touchStartForcePreventDefault && !i) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.emit("touchStart", l);
    }
    function Zt(e) {
      const t = Tt(),
        n = this,
        i = n.touchEventsData,
        { params: r, touches: s, rtlTranslate: o, enabled: a } = n;
      if (!a) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          n.emit("touchMoveOpposite", l)
        );
      if (i.isTouchEvent && "touchmove" !== l.type) return;
      const c =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        u = "touchmove" === l.type ? c.pageX : l.pageX,
        d = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (s.startX = u), void (s.startY = d);
      if (!n.allowTouchMove)
        return (
          (n.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(s, {
              startX: u,
              startY: d,
              currentX: u,
              currentY: d,
            }),
            (i.touchStartTime = $t()))
          )
        );
      if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
        if (n.isVertical()) {
          if (
            (d < s.startY && n.translate <= n.maxTranslate()) ||
            (d > s.startY && n.translate >= n.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (u < s.startX && n.translate <= n.maxTranslate()) ||
          (u > s.startX && n.translate >= n.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        Pt(l.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (n.allowClick = !1);
      if (
        (i.allowTouchCallbacks && n.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (s.currentX = u), (s.currentY = d);
      const p = s.currentX - s.startX,
        f = s.currentY - s.startY;
      if (n.params.threshold && Math.sqrt(p ** 2 + f ** 2) < n.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (n.isHorizontal() && s.currentY === s.startY) ||
        (n.isVertical() && s.currentX === s.startX)
          ? (i.isScrolling = !1)
          : p * p + f * f >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
            (i.isScrolling = n.isHorizontal()
              ? e > r.touchAngle
              : 90 - e > r.touchAngle));
      }
      if (
        (i.isScrolling && n.emit("touchMoveOpposite", l),
        void 0 === i.startMoving &&
          ((s.currentX === s.startX && s.currentY === s.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (n.allowClick = !1),
        !r.cssMode && l.cancelable && l.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
        i.isMoved ||
          (r.loop && !r.cssMode && n.loopFix(),
          (i.startTranslate = n.getTranslate()),
          n.setTransition(0),
          n.animating &&
            n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !r.grabCursor ||
            (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
            n.setGrabCursor(!0),
          n.emit("sliderFirstMove", l)),
        n.emit("sliderMove", l),
        (i.isMoved = !0);
      let h = n.isHorizontal() ? p : f;
      (s.diff = h),
        (h *= r.touchRatio),
        o && (h = -h),
        (n.swipeDirection = h > 0 ? "prev" : "next"),
        (i.currentTranslate = h + i.startTranslate);
      let m = !0,
        g = r.resistanceRatio;
      if (
        (r.touchReleaseOnEdges && (g = 0),
        h > 0 && i.currentTranslate > n.minTranslate()
          ? ((m = !1),
            r.resistance &&
              (i.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + i.startTranslate + h) ** g))
          : h < 0 &&
            i.currentTranslate < n.maxTranslate() &&
            ((m = !1),
            r.resistance &&
              (i.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - i.startTranslate - h) ** g)),
        m && (l.preventedByNestedSwiper = !0),
        !n.allowSlideNext &&
          "next" === n.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !n.allowSlidePrev &&
          "prev" === n.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        n.allowSlidePrev ||
          n.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        r.threshold > 0)
      ) {
        if (!(Math.abs(h) > r.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (s.startX = s.currentX),
            (s.startY = s.currentY),
            (i.currentTranslate = i.startTranslate),
            void (s.diff = n.isHorizontal()
              ? s.currentX - s.startX
              : s.currentY - s.startY)
          );
      }
      r.followFinger &&
        !r.cssMode &&
        (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
          r.watchSlidesProgress) &&
          (n.updateActiveIndex(), n.updateSlidesClasses()),
        n.params.freeMode &&
          r.freeMode.enabled &&
          n.freeMode &&
          n.freeMode.onTouchMove(),
        n.updateProgress(i.currentTranslate),
        n.setTranslate(i.currentTranslate));
    }
    function en(e) {
      const t = this,
        n = t.touchEventsData,
        {
          params: i,
          touches: r,
          rtlTranslate: s,
          slidesGrid: o,
          enabled: a,
        } = t;
      if (!a) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        n.allowTouchCallbacks && t.emit("touchEnd", l),
        (n.allowTouchCallbacks = !1),
        !n.isTouched)
      )
        return (
          n.isMoved && i.grabCursor && t.setGrabCursor(!1),
          (n.isMoved = !1),
          void (n.startMoving = !1)
        );
      i.grabCursor &&
        n.isMoved &&
        n.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = $t(),
        u = c - n.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          u < 300 &&
            c - n.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((n.lastClickTime = $t()),
        Dt(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !n.isTouched ||
          !n.isMoved ||
          !t.swipeDirection ||
          0 === r.diff ||
          n.currentTranslate === n.startTranslate)
      )
        return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
      let d;
      if (
        ((n.isTouched = !1),
        (n.isMoved = !1),
        (n.startMoving = !1),
        (d = i.followFinger
          ? s
            ? t.translate
            : -t.translate
          : -n.currentTranslate),
        i.cssMode)
      )
        return;
      if (t.params.freeMode && i.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: d });
      let p = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
      ) {
        const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== o[e + t]
          ? d >= o[e] && d < o[e + t] && ((p = e), (f = o[e + t] - o[e]))
          : d >= o[e] && ((p = e), (f = o[o.length - 1] - o[o.length - 2]));
      }
      const h = (d - o[p]) / f,
        m = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (u > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (h >= i.longSwipesRatio ? t.slideTo(p + m) : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (h > 1 - i.longSwipesRatio ? t.slideTo(p + m) : t.slideTo(p));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + m)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(p + m),
            "prev" === t.swipeDirection && t.slideTo(p));
      }
    }
    function tn() {
      const e = this,
        { params: t, el: n } = e;
      if (n && 0 === n.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = r),
        (e.allowSlideNext = i),
        e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
    }
    function nn(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function rn() {
      const e = this,
        { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
      if (!i) return;
      let r;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const s = e.maxTranslate() - e.minTranslate();
      (r = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
        r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let sn = !1;
    function on() {}
    const an = (e, t) => {
      const n = Tt(),
        {
          params: i,
          touchEvents: r,
          el: s,
          wrapperEl: o,
          device: a,
          support: l,
        } = e,
        c = !!i.nested,
        u = "on" === t ? "addEventListener" : "removeEventListener",
        d = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== r.start ||
          !l.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        s[u](r.start, e.onTouchStart, t),
          s[u](
            r.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          s[u](r.end, e.onTouchEnd, t),
          r.cancel && s[u](r.cancel, e.onTouchEnd, t);
      } else
        s[u](r.start, e.onTouchStart, !1),
          n[u](r.move, e.onTouchMove, c),
          n[u](r.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        s[u]("click", e.onClick, !0),
        i.cssMode && o[u]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[d](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              tn,
              !0
            )
          : e[d]("observerUpdate", tn, !0);
    };
    const ln = {
        attachEvents: function () {
          const e = this,
            t = Tt(),
            { params: n, support: i } = e;
          (e.onTouchStart = Jt.bind(e)),
            (e.onTouchMove = Zt.bind(e)),
            (e.onTouchEnd = en.bind(e)),
            n.cssMode && (e.onScroll = rn.bind(e)),
            (e.onClick = nn.bind(e)),
            i.touch && !sn && (t.addEventListener("touchstart", on), (sn = !0)),
            an(e, "on");
        },
        detachEvents: function () {
          an(this, "off");
        },
      },
      cn = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const un = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: n,
            loopedSlides: i = 0,
            params: r,
            $el: s,
          } = e,
          o = r.breakpoints;
        if (!o || (o && 0 === Object.keys(o).length)) return;
        const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
        if (!a || e.currentBreakpoint === a) return;
        const l = (a in o ? o[a] : void 0) || e.originalParams,
          c = cn(e, r),
          u = cn(e, l),
          d = r.enabled;
        c && !u
          ? (s.removeClass(
              `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            u &&
            (s.addClass(`${r.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === r.grid.fill)) &&
              s.addClass(`${r.containerModifierClass}grid-column`),
            e.emitContainerClasses());
        const p = l.direction && l.direction !== r.direction,
          f = r.loop && (l.slidesPerView !== r.slidesPerView || p);
        p && n && e.changeDirection(), jt(e.params, l);
        const h = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          d && !h ? e.disable() : !d && h && e.enable(),
          (e.currentBreakpoint = a),
          e.emit("_beforeBreakpoint", l),
          f &&
            n &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - i + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t = "window", n) {
        if (!e || ("container" === t && !n)) return;
        let i = !1;
        const r = St(),
          s = "window" === t ? r.innerHeight : n.clientHeight,
          o = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: s * t, point: e };
            }
            return { value: e, point: e };
          });
        o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < o.length; e += 1) {
          const { point: s, value: a } = o[e];
          "window" === t
            ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = s)
            : a <= n.clientWidth && (i = s);
        }
        return i || "max";
      },
    };
    const dn = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: n,
            rtl: i,
            $el: r,
            device: s,
            support: o,
          } = e,
          a = (function (e, t) {
            const n = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((i) => {
                      e[i] && n.push(t + i);
                    })
                  : "string" == typeof e && n.push(t + e);
              }),
              n
            );
          })(
            [
              "initialized",
              n.direction,
              { "pointer-events": !o.touch },
              { "free-mode": e.params.freeMode && n.freeMode.enabled },
              { autoheight: n.autoHeight },
              { rtl: i },
              { grid: n.grid && n.grid.rows > 1 },
              {
                "grid-column":
                  n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
              },
              { android: s.android },
              { ios: s.ios },
              { "css-mode": n.cssMode },
              { centered: n.cssMode && n.centeredSlides },
            ],
            n.containerModifierClass
          );
        t.push(...a), r.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const pn = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function fn(e, t) {
      return function (n = {}) {
        const i = Object.keys(n)[0],
          r = n[i];
        "object" == typeof r && null !== r
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in r
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                jt(t, n))
              : jt(t, n))
          : jt(t, n);
      };
    }
    const hn = {
        eventsEmitter: Gt,
        update: Yt,
        translate: Ut,
        transition: {
          setTransition: function (e, t) {
            const n = this;
            n.params.cssMode || n.$wrapperEl.transition(e),
              n.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const n = this,
              { params: i } = n;
            i.cssMode ||
              (i.autoHeight && n.updateAutoHeight(),
              Xt({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const n = this,
              { params: i } = n;
            (n.animating = !1),
              i.cssMode ||
                (n.setTransition(0),
                Xt({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: Qt,
        loop: Kt,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const n =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (n.style.cursor = "move"),
              (n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (n.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (n.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: ln,
        breakpoints: un,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: i } = n;
            if (i) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > n;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: dn,
        images: {
          loadImage: function (e, t, n, i, r, s) {
            const o = St();
            let a;
            function l() {
              s && s();
            }
            Pt(e).parent("picture")[0] || (e.complete && r)
              ? l()
              : t
              ? ((a = new o.Image()),
                (a.onload = l),
                (a.onerror = l),
                i && (a.sizes = i),
                n && (a.srcset = n),
                t && (a.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let n = 0; n < e.imagesToLoad.length; n += 1) {
              const i = e.imagesToLoad[n];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      mn = {};
    class gn {
      constructor(...e) {
        let t, n;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (n = e[0])
            : ([t, n] = e),
          n || (n = {}),
          (n = jt({}, n)),
          t && !n.el && (n.el = t),
          n.el && Pt(n.el).length > 1)
        ) {
          const e = [];
          return (
            Pt(n.el).each((t) => {
              const i = jt({}, n, { el: t });
              e.push(new gn(i));
            }),
            e
          );
        }
        const i = this;
        (i.__swiper__ = !0),
          (i.support = zt()),
          (i.device = Ft({ userAgent: n.userAgent })),
          (i.browser = Vt()),
          (i.eventsListeners = {}),
          (i.eventsAnyListeners = []),
          (i.modules = [...i.__modules__]),
          n.modules && Array.isArray(n.modules) && i.modules.push(...n.modules);
        const r = {};
        i.modules.forEach((e) => {
          e({
            swiper: i,
            extendParams: fn(n, r),
            on: i.on.bind(i),
            once: i.once.bind(i),
            off: i.off.bind(i),
            emit: i.emit.bind(i),
          });
        });
        const s = jt({}, pn, r);
        return (
          (i.params = jt({}, s, mn, n)),
          (i.originalParams = jt({}, i.params)),
          (i.passedParams = jt({}, n)),
          i.params &&
            i.params.on &&
            Object.keys(i.params.on).forEach((e) => {
              i.on(e, i.params.on[e]);
            }),
          i.params && i.params.onAny && i.onAny(i.params.onAny),
          (i.$ = Pt),
          Object.assign(i, {
            enabled: i.params.enabled,
            el: t,
            classNames: [],
            slides: Pt(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === i.params.direction,
            isVertical: () => "vertical" === i.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: i.params.allowSlideNext,
            allowSlidePrev: i.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (i.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                i.support.touch || !i.params.simulateTouch
                  ? i.touchEventsTouch
                  : i.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: i.params.focusableElements,
              lastClickTime: $t(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: i.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          i.emit("_swiper"),
          i.params.init && i.init(),
          i
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const n = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = n.minTranslate(),
          r = (n.maxTranslate() - i) * e + i;
        n.translateTo(r, void 0 === t ? 0 : t),
          n.updateActiveIndex(),
          n.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((n) => {
          const i = e.getSlideClasses(n);
          t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: n,
          slides: i,
          slidesGrid: r,
          slidesSizesGrid: s,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let e,
            t = i[a].swiperSlideSize;
          for (let n = a + 1; n < i.length; n += 1)
            i[n] &&
              !e &&
              ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
          for (let n = a - 1; n >= 0; n -= 1)
            i[n] &&
              !e &&
              ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < i.length; e += 1) {
            (t ? r[e] + s[e] - r[a] < o : r[e] - r[a] < o) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            r[a] - r[e] < o && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: n } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        n.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((r =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              r || i()),
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const n = this,
          i = n.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (n.$el
              .removeClass(`${n.params.containerModifierClass}${i}`)
              .addClass(`${n.params.containerModifierClass}${e}`),
            n.emitContainerClasses(),
            (n.params.direction = e),
            n.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            n.emit("changeDirection"),
            t && n.update()),
          n
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const n = Pt(e || t.params.el);
        if (!(e = n[0])) return !1;
        e.swiper = t;
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = Pt(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => n.children(e)), t;
          }
          return n.children(i());
        })();
        if (0 === r.length && t.params.createElements) {
          const e = Tt().createElement("div");
          (r = Pt(e)),
            (e.className = t.params.wrapperClass),
            n.append(e),
            n.children(`.${t.params.slideClass}`).each((e) => {
              r.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: r,
            wrapperEl: r[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === r.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const n = this,
          { params: i, $el: r, $wrapperEl: s, slides: o } = n;
        return (
          void 0 === n.params ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            i.loop && n.loopDestroy(),
            t &&
              (n.removeClasses(),
              r.removeAttr("style"),
              s.removeAttr("style"),
              o &&
                o.length &&
                o
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach((e) => {
              n.off(e);
            }),
            !1 !== e &&
              ((n.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(n)),
            (n.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        jt(mn, e);
      }
      static get extendedDefaults() {
        return mn;
      }
      static get defaults() {
        return pn;
      }
      static installModule(e) {
        gn.prototype.__modules__ || (gn.prototype.__modules__ = []);
        const t = gn.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => gn.installModule(e)), gn)
          : (gn.installModule(e), gn);
      }
    }
    Object.keys(hn).forEach((e) => {
      Object.keys(hn[e]).forEach((t) => {
        gn.prototype[t] = hn[e][t];
      });
    }),
      gn.use([
        function ({ swiper: e, on: t, emit: n }) {
          const i = St();
          let r = null;
          const s = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (n("beforeResize"), n("resize"));
            },
            o = () => {
              e && !e.destroyed && e.initialized && n("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== i.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((r = new ResizeObserver((t) => {
                  const { width: n, height: i } = e;
                  let r = n,
                    o = i;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: n, target: i }) => {
                      (i && i !== e.el) ||
                        ((r = n ? n.width : (t[0] || t).inlineSize),
                        (o = n ? n.height : (t[0] || t).blockSize));
                    }
                  ),
                    (r === n && o === i) || s();
                })),
                r.observe(e.el))
              : (i.addEventListener("resize", s),
                i.addEventListener("orientationchange", o));
          }),
            t("destroy", () => {
              r && r.unobserve && e.el && (r.unobserve(e.el), (r = null)),
                i.removeEventListener("resize", s),
                i.removeEventListener("orientationchange", o);
            });
        },
        function ({ swiper: e, extendParams: t, on: n, emit: i }) {
          const r = [],
            s = St(),
            o = (e, t = {}) => {
              const n = new (s.MutationObserver || s.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void i("observerUpdate", e[0]);
                  const t = function () {
                    i("observerUpdate", e[0]);
                  };
                  s.requestAnimationFrame
                    ? s.requestAnimationFrame(t)
                    : s.setTimeout(t, 0);
                }
              );
              n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                r.push(n);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            n("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) o(t[e]);
                }
                o(e.$el[0], { childList: e.params.observeSlideChildren }),
                  o(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            n("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    const vn = gn;
    function yn(e, t, n, i) {
      const r = Tt();
      return (
        e.params.createElements &&
          Object.keys(i).forEach((s) => {
            if (!n[s] && !0 === n.auto) {
              let o = e.$el.children(`.${i[s]}`)[0];
              o ||
                ((o = r.createElement("div")),
                (o.className = i[s]),
                e.$el.append(o)),
                (n[s] = o),
                (t[s] = o);
            }
          }),
        n
      );
    }
    function bn({ swiper: e, extendParams: t, on: n, emit: i }) {
      function r(t) {
        let n;
        return (
          t &&
            ((n = Pt(t)),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              n.length > 1 &&
              1 === e.$el.find(t).length &&
              (n = e.$el.find(t))),
          n
        );
      }
      function s(t, n) {
        const i = e.params.navigation;
        t &&
          t.length > 0 &&
          (t[n ? "addClass" : "removeClass"](i.disabledClass),
          t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = n),
          e.params.watchOverflow &&
            e.enabled &&
            t[e.isLocked ? "addClass" : "removeClass"](i.lockClass));
      }
      function o() {
        if (e.params.loop) return;
        const { $nextEl: t, $prevEl: n } = e.navigation;
        s(n, e.isBeginning), s(t, e.isEnd);
      }
      function a(t) {
        t.preventDefault(), (e.isBeginning && !e.params.loop) || e.slidePrev();
      }
      function l(t) {
        t.preventDefault(), (e.isEnd && !e.params.loop) || e.slideNext();
      }
      function c() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = yn(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !t.nextEl && !t.prevEl)
        )
          return;
        const n = r(t.nextEl),
          i = r(t.prevEl);
        n && n.length > 0 && n.on("click", l),
          i && i.length > 0 && i.on("click", a),
          Object.assign(e.navigation, {
            $nextEl: n,
            nextEl: n && n[0],
            $prevEl: i,
            prevEl: i && i[0],
          }),
          e.enabled ||
            (n && n.addClass(t.lockClass), i && i.addClass(t.lockClass));
      }
      function u() {
        const { $nextEl: t, $prevEl: n } = e.navigation;
        t &&
          t.length &&
          (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)),
          n &&
            n.length &&
            (n.off("click", a),
            n.removeClass(e.params.navigation.disabledClass));
      }
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      }),
        (e.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        n("init", () => {
          c(), o();
        }),
        n("toEdge fromEdge lock unlock", () => {
          o();
        }),
        n("destroy", () => {
          u();
        }),
        n("enable disable", () => {
          const { $nextEl: t, $prevEl: n } = e.navigation;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            ),
            n &&
              n[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              );
        }),
        n("click", (t, n) => {
          const { $nextEl: r, $prevEl: s } = e.navigation,
            o = n.target;
          if (e.params.navigation.hideOnClick && !Pt(o).is(s) && !Pt(o).is(r)) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === o || e.pagination.el.contains(o))
            )
              return;
            let t;
            r
              ? (t = r.hasClass(e.params.navigation.hiddenClass))
              : s && (t = s.hasClass(e.params.navigation.hiddenClass)),
              i(!0 === t ? "navigationShow" : "navigationHide"),
              r && r.toggleClass(e.params.navigation.hiddenClass),
              s && s.toggleClass(e.params.navigation.hiddenClass);
          }
        }),
        Object.assign(e.navigation, { update: o, init: c, destroy: u });
    }
    function wn(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function xn({ swiper: e, extendParams: t, on: n, emit: i }) {
      const r = "swiper-pagination";
      let s;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
        },
      }),
        (e.pagination = { el: null, $el: null, bullets: [] });
      let o = 0;
      function a() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        );
      }
      function l(t, n) {
        const { bulletActiveClass: i } = e.params.pagination;
        t[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`);
      }
      function c() {
        const t = e.rtl,
          n = e.params.pagination;
        if (a()) return;
        const r =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          c = e.pagination.$el;
        let u;
        const d = e.params.loop
          ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((u = Math.ceil(
                (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
              )),
              u > r - 1 - 2 * e.loopedSlides && (u -= r - 2 * e.loopedSlides),
              u > d - 1 && (u -= d),
              u < 0 && "bullets" !== e.params.paginationType && (u = d + u))
            : (u = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
          "bullets" === n.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const i = e.pagination.bullets;
          let r, a, d;
          if (
            (n.dynamicBullets &&
              ((s = i
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              c.css(
                e.isHorizontal() ? "width" : "height",
                s * (n.dynamicMainBullets + 4) + "px"
              ),
              n.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((o += u - e.previousIndex),
                o > n.dynamicMainBullets - 1
                  ? (o = n.dynamicMainBullets - 1)
                  : o < 0 && (o = 0)),
              (r = u - o),
              (a = r + (Math.min(i.length, n.dynamicMainBullets) - 1)),
              (d = (a + r) / 2)),
            i.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${n.bulletActiveClass}${e}`)
                .join(" ")
            ),
            c.length > 1)
          )
            i.each((e) => {
              const t = Pt(e),
                i = t.index();
              i === u && t.addClass(n.bulletActiveClass),
                n.dynamicBullets &&
                  (i >= r &&
                    i <= a &&
                    t.addClass(`${n.bulletActiveClass}-main`),
                  i === r && l(t, "prev"),
                  i === a && l(t, "next"));
            });
          else {
            const t = i.eq(u),
              s = t.index();
            if ((t.addClass(n.bulletActiveClass), n.dynamicBullets)) {
              const t = i.eq(r),
                o = i.eq(a);
              for (let e = r; e <= a; e += 1)
                i.eq(e).addClass(`${n.bulletActiveClass}-main`);
              if (e.params.loop)
                if (s >= i.length - n.dynamicMainBullets) {
                  for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                    i.eq(i.length - e).addClass(`${n.bulletActiveClass}-main`);
                  i.eq(i.length - n.dynamicMainBullets - 1).addClass(
                    `${n.bulletActiveClass}-prev`
                  );
                } else l(t, "prev"), l(o, "next");
              else l(t, "prev"), l(o, "next");
            }
          }
          if (n.dynamicBullets) {
            const r = Math.min(i.length, n.dynamicMainBullets + 4),
              o = (s * r - s) / 2 - d * s,
              a = t ? "right" : "left";
            i.css(e.isHorizontal() ? a : "top", `${o}px`);
          }
        }
        if (
          ("fraction" === n.type &&
            (c.find(wn(n.currentClass)).text(n.formatFractionCurrent(u + 1)),
            c.find(wn(n.totalClass)).text(n.formatFractionTotal(d))),
          "progressbar" === n.type)
        ) {
          let t;
          t = n.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const i = (u + 1) / d;
          let r = 1,
            s = 1;
          "horizontal" === t ? (r = i) : (s = i),
            c
              .find(wn(n.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${s})`)
              .transition(e.params.speed);
        }
        "custom" === n.type && n.renderCustom
          ? (c.html(n.renderCustom(e, u + 1, d)), i("paginationRender", c[0]))
          : i("paginationUpdate", c[0]),
          e.params.watchOverflow &&
            e.enabled &&
            c[e.isLocked ? "addClass" : "removeClass"](n.lockClass);
      }
      function u() {
        const t = e.params.pagination;
        if (a()) return;
        const n =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          r = e.pagination.$el;
        let s = "";
        if ("bullets" === t.type) {
          let i = e.params.loop
            ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode &&
            e.params.freeMode.enabled &&
            !e.params.loop &&
            i > n &&
            (i = n);
          for (let n = 0; n < i; n += 1)
            t.renderBullet
              ? (s += t.renderBullet.call(e, n, t.bulletClass))
              : (s += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
          r.html(s), (e.pagination.bullets = r.find(wn(t.bulletClass)));
        }
        "fraction" === t.type &&
          ((s = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          r.html(s)),
          "progressbar" === t.type &&
            ((s = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
            r.html(s)),
          "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
      }
      function d() {
        e.params.pagination = yn(
          e,
          e.originalParams.pagination,
          e.params.pagination,
          { el: "swiper-pagination" }
        );
        const t = e.params.pagination;
        if (!t.el) return;
        let n = Pt(t.el);
        0 !== n.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            n.length > 1 &&
            ((n = e.$el.find(t.el)),
            n.length > 1 &&
              (n = n.filter((t) => Pt(t).parents(".swiper")[0] === e.el))),
          "bullets" === t.type && t.clickable && n.addClass(t.clickableClass),
          n.addClass(t.modifierClass + t.type),
          n.addClass(t.modifierClass + e.params.direction),
          "bullets" === t.type &&
            t.dynamicBullets &&
            (n.addClass(`${t.modifierClass}${t.type}-dynamic`),
            (o = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
          "progressbar" === t.type &&
            t.progressbarOpposite &&
            n.addClass(t.progressbarOppositeClass),
          t.clickable &&
            n.on("click", wn(t.bulletClass), function (t) {
              t.preventDefault();
              let n = Pt(this).index() * e.params.slidesPerGroup;
              e.params.loop && (n += e.loopedSlides), e.slideTo(n);
            }),
          Object.assign(e.pagination, { $el: n, el: n[0] }),
          e.enabled || n.addClass(t.lockClass));
      }
      function p() {
        const t = e.params.pagination;
        if (a()) return;
        const n = e.pagination.$el;
        n.removeClass(t.hiddenClass),
          n.removeClass(t.modifierClass + t.type),
          n.removeClass(t.modifierClass + e.params.direction),
          e.pagination.bullets &&
            e.pagination.bullets.removeClass &&
            e.pagination.bullets.removeClass(t.bulletActiveClass),
          t.clickable && n.off("click", wn(t.bulletClass));
      }
      n("init", () => {
        d(), u(), c();
      }),
        n("activeIndexChange", () => {
          (e.params.loop || void 0 === e.snapIndex) && c();
        }),
        n("snapIndexChange", () => {
          e.params.loop || c();
        }),
        n("slidesLengthChange", () => {
          e.params.loop && (u(), c());
        }),
        n("snapGridLengthChange", () => {
          e.params.loop || (u(), c());
        }),
        n("destroy", () => {
          p();
        }),
        n("enable disable", () => {
          const { $el: t } = e.pagination;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.pagination.lockClass
            );
        }),
        n("lock unlock", () => {
          c();
        }),
        n("click", (t, n) => {
          const r = n.target,
            { $el: s } = e.pagination;
          if (
            e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            s.length > 0 &&
            !Pt(r).hasClass(e.params.pagination.bulletClass)
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && r === e.navigation.nextEl) ||
                (e.navigation.prevEl && r === e.navigation.prevEl))
            )
              return;
            const t = s.hasClass(e.params.pagination.hiddenClass);
            i(!0 === t ? "paginationShow" : "paginationHide"),
              s.toggleClass(e.params.pagination.hiddenClass);
          }
        }),
        Object.assign(e.pagination, {
          render: u,
          update: c,
          init: d,
          destroy: p,
        });
    }
    function Tn({ swiper: e, extendParams: t, on: n, emit: i }) {
      let r;
      function s() {
        const t = e.slides.eq(e.activeIndex);
        let n = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(r),
          (r = Dt(() => {
            let t;
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  (t = e.slidePrev(e.params.speed, !0, !0)),
                  i("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? a()
                  : ((t = e.slideTo(
                      e.slides.length - 1,
                      e.params.speed,
                      !0,
                      !0
                    )),
                    i("autoplay"))
                : ((t = e.slidePrev(e.params.speed, !0, !0)), i("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                (t = e.slideNext(e.params.speed, !0, !0)),
                i("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? a()
                : ((t = e.slideTo(0, e.params.speed, !0, !0)), i("autoplay"))
              : ((t = e.slideNext(e.params.speed, !0, !0)), i("autoplay")),
              ((e.params.cssMode && e.autoplay.running) || !1 === t) && s();
          }, n));
      }
      function o() {
        return (
          void 0 === r &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0), i("autoplayStart"), s(), !0)
        );
      }
      function a() {
        return (
          !!e.autoplay.running &&
          void 0 !== r &&
          (r && (clearTimeout(r), (r = void 0)),
          (e.autoplay.running = !1),
          i("autoplayStop"),
          !0)
        );
      }
      function l(t) {
        e.autoplay.running &&
          (e.autoplay.paused ||
            (r && clearTimeout(r),
            (e.autoplay.paused = !0),
            0 !== t && e.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                  e.$wrapperEl[0].addEventListener(t, u);
                })
              : ((e.autoplay.paused = !1), s())));
      }
      function c() {
        const t = Tt();
        "hidden" === t.visibilityState && e.autoplay.running && l(),
          "visible" === t.visibilityState &&
            e.autoplay.paused &&
            (s(), (e.autoplay.paused = !1));
      }
      function u(t) {
        e &&
          !e.destroyed &&
          e.$wrapperEl &&
          t.target === e.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((t) => {
            e.$wrapperEl[0].removeEventListener(t, u);
          }),
          (e.autoplay.paused = !1),
          e.autoplay.running ? s() : a());
      }
      function d() {
        e.params.autoplay.disableOnInteraction ? a() : l(),
          ["transitionend", "webkitTransitionEnd"].forEach((t) => {
            e.$wrapperEl[0].removeEventListener(t, u);
          });
      }
      function p() {
        e.params.autoplay.disableOnInteraction ||
          ((e.autoplay.paused = !1), s());
      }
      (e.autoplay = { running: !1, paused: !1 }),
        t({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        n("init", () => {
          if (e.params.autoplay.enabled) {
            o();
            Tt().addEventListener("visibilitychange", c),
              e.params.autoplay.pauseOnMouseEnter &&
                (e.$el.on("mouseenter", d), e.$el.on("mouseleave", p));
          }
        }),
        n("beforeTransitionStart", (t, n, i) => {
          e.autoplay.running &&
            (i || !e.params.autoplay.disableOnInteraction
              ? e.autoplay.pause(n)
              : a());
        }),
        n("sliderFirstMove", () => {
          e.autoplay.running &&
            (e.params.autoplay.disableOnInteraction ? a() : l());
        }),
        n("touchEnd", () => {
          e.params.cssMode &&
            e.autoplay.paused &&
            !e.params.autoplay.disableOnInteraction &&
            s();
        }),
        n("destroy", () => {
          e.$el.off("mouseenter", d),
            e.$el.off("mouseleave", p),
            e.autoplay.running && a();
          Tt().removeEventListener("visibilitychange", c);
        }),
        Object.assign(e.autoplay, { pause: l, run: s, start: o, stop: a });
    }
    function En(e, t) {
      return e.transformEl
        ? t
            .find(e.transformEl)
            .css({
              "backface-visibility": "hidden",
              "-webkit-backface-visibility": "hidden",
            })
        : t;
    }
    function Sn({ swiper: e, extendParams: t, on: n }) {
      t({ fadeEffect: { crossFade: !1, transformEl: null } });
      !(function (e) {
        const {
          effect: t,
          swiper: n,
          on: i,
          setTranslate: r,
          setTransition: s,
          overwriteParams: o,
          perspective: a,
        } = e;
        i("beforeInit", () => {
          if (n.params.effect !== t) return;
          n.classNames.push(`${n.params.containerModifierClass}${t}`),
            a &&
              a() &&
              n.classNames.push(`${n.params.containerModifierClass}3d`);
          const e = o ? o() : {};
          Object.assign(n.params, e), Object.assign(n.originalParams, e);
        }),
          i("setTranslate", () => {
            n.params.effect === t && r();
          }),
          i("setTransition", (e, i) => {
            n.params.effect === t && s(i);
          });
      })({
        effect: "fade",
        swiper: e,
        on: n,
        setTranslate: () => {
          const { slides: t } = e,
            n = e.params.fadeEffect;
          for (let i = 0; i < t.length; i += 1) {
            const t = e.slides.eq(i);
            let r = -t[0].swiperSlideOffset;
            e.params.virtualTranslate || (r -= e.translate);
            let s = 0;
            e.isHorizontal() || ((s = r), (r = 0));
            const o = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(t[0].progress), 0)
              : 1 + Math.min(Math.max(t[0].progress, -1), 0);
            En(n, t)
              .css({ opacity: o })
              .transform(`translate3d(${r}px, ${s}px, 0px)`);
          }
        },
        setTransition: (t) => {
          const { transformEl: n } = e.params.fadeEffect;
          (n ? e.slides.find(n) : e.slides).transition(t),
            (function ({
              swiper: e,
              duration: t,
              transformEl: n,
              allSlides: i,
            }) {
              const { slides: r, activeIndex: s, $wrapperEl: o } = e;
              if (e.params.virtualTranslate && 0 !== t) {
                let t,
                  a = !1;
                (t = i ? (n ? r.find(n) : r) : n ? r.eq(s).find(n) : r.eq(s)),
                  t.transitionEnd(() => {
                    if (a) return;
                    if (!e || e.destroyed) return;
                    (a = !0), (e.animating = !1);
                    const t = ["webkitTransitionEnd", "transitionend"];
                    for (let e = 0; e < t.length; e += 1) o.trigger(t[e]);
                  });
              }
            })({ swiper: e, duration: t, transformEl: n, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
    }
    function Cn() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("DOMContentLoaded", function (e) {
      Cn(),
        document.querySelector(".swiper") &&
          (new vn(".p-slider__wrapper", {
            modules: [bn, xn, Sn, Tn],
            effect: "fade",
            autoplay: { delay: 3e3, disableOnInteraction: !0 },
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 100,
            speed: 800,
            pagination: { el: ".p-slider__pagging", clickable: !0 },
            navigation: {
              nextEl: ".p-slider__next",
              prevEl: ".p-slider__prev",
            },
            on: {},
          }),
          new vn(".b-reviews__body", {
            modules: [bn, Sn, Tn],
            autoplay: { delay: 3e3, disableOnInteraction: !0 },
            observer: !0,
            observeParents: !0,
            spaceBetween: 20,
            slidesPerView: 1,
            speed: 800,
            navigation: {
              nextEl: ".b-reviews__next",
              prevEl: ".b-reviews__prev",
            },
            breakpoints: {
              320: { slidesPerView: 1, effect: "fade" },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            },
            on: {},
          }));
    });
    new (n(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    let kn = !1;
    setTimeout(() => {
      if (kn) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    const An = (() => {
        const e = ".stickySidebar",
          t = {
            topSpacing: 0,
            bottomSpacing: 0,
            containerSelector: !1,
            scrollContainer: !1,
            innerWrapperSelector: ".inner-wrapper-sticky",
            stickyClass: "is-affixed",
            minWidth: !1,
          };
        class n {
          constructor(e, i = {}) {
            if (
              ((this.options = n.extend(t, i)),
              (this.sidebar =
                "string" == typeof e ? document.querySelector(e) : e),
              void 0 === this.sidebar)
            )
              throw new Error("There is no specific sidebar element.");
            (this.sidebarInner = !1),
              (this.container = this.sidebar.parentElement),
              (this.affixedType = "STATIC"),
              (this.direction = "down"),
              (this.support = { transform: !1, transform3d: !1 }),
              (this._initialized = !1),
              (this._reStyle = !1),
              (this._breakpoint = !1),
              (this.dimensions = {
                translateY: 0,
                maxTranslateY: 0,
                topSpacing: 0,
                lastTopSpacing: 0,
                bottomSpacing: 0,
                lastBottomSpacing: 0,
                sidebarHeight: 0,
                sidebarWidth: 0,
                containerTop: 0,
                containerHeight: 0,
                viewportHeight: 0,
                viewportTop: 0,
                lastViewportTop: 0,
              }),
              ["handleEvent"].forEach((e) => {
                this[e] = this[e].bind(this);
              }),
              this.initialize();
          }
          initialize() {
            if (
              (this._setSupportFeatures(),
              this.options.innerWrapperSelector &&
                ((this.sidebarInner = this.sidebar.querySelector(
                  this.options.innerWrapperSelector
                )),
                null === this.sidebarInner && (this.sidebarInner = !1)),
              !this.sidebarInner)
            ) {
              let e = document.createElement("div");
              for (
                e.setAttribute("class", "inner-wrapper-sticky"),
                  this.sidebar.appendChild(e);
                this.sidebar.firstChild != e;

              )
                e.appendChild(this.sidebar.firstChild);
              this.sidebarInner = this.sidebar.querySelector(
                ".inner-wrapper-sticky"
              );
            }
            if (this.options.containerSelector) {
              let e = document.querySelectorAll(this.options.containerSelector);
              if (
                ((e = Array.prototype.slice.call(e)),
                e.forEach((e, t) => {
                  e.contains(this.sidebar) && (this.container = e);
                }),
                !e.length)
              )
                throw new Error(
                  "The container does not contains on the sidebar."
                );
            }
            (this.scrollContainer = this.options.scrollContainer
              ? document.querySelector(this.options.scrollContainer)
              : void 0),
              "function" != typeof this.options.topSpacing &&
                (this.options.topSpacing =
                  parseInt(this.options.topSpacing) || 0),
              "function" != typeof this.options.bottomSpacing &&
                (this.options.bottomSpacing =
                  parseInt(this.options.bottomSpacing) || 0),
              this._widthBreakpoint(),
              this.calcDimensions(),
              this.stickyPosition(),
              this.bindEvents(),
              (this._initialized = !0);
          }
          bindEvents() {
            if (
              ((this.eventTarget = this.scrollContainer
                ? this.scrollContainer
                : window),
              this.eventTarget.addEventListener("resize", this, {
                passive: !0,
                capture: !1,
              }),
              this.eventTarget.addEventListener("scroll", this, {
                passive: !0,
                capture: !1,
              }),
              this.sidebar.addEventListener("update" + e, this),
              "undefined" != typeof ResizeObserver)
            ) {
              const e = new ResizeObserver(() => this.handleEvent());
              e.observe(this.sidebarInner), e.observe(this.container);
            }
          }
          handleEvent(e) {
            this.updateSticky(e);
          }
          calcDimensions() {
            if (!this._breakpoint) {
              var e = this.dimensions;
              (e.containerTop = n.offsetRelative(this.container).top),
                (e.containerHeight = this.container.clientHeight),
                (e.containerBottom = e.containerTop + e.containerHeight),
                (e.sidebarHeight = this.sidebarInner.offsetHeight),
                (e.sidebarWidth = this.sidebarInner.offsetWidth),
                (e.viewportHeight = window.innerHeight),
                (e.maxTranslateY = e.containerHeight - e.sidebarHeight),
                this._calcDimensionsWithScroll();
            }
          }
          _calcDimensionsWithScroll() {
            var e = this.dimensions;
            (e.sidebarLeft = n.offsetRelative(this.sidebar).left),
              this.scrollContainer
                ? ((e.viewportTop = this.scrollContainer.scrollTop),
                  (e.viewportLeft = this.scrollContainer.scrollLeft))
                : ((e.viewportTop =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop),
                  (e.viewportLeft =
                    document.documentElement.scrollLeft ||
                    document.body.scrollLeft)),
              (e.viewportBottom = e.viewportTop + e.viewportHeight),
              (e.topSpacing = this.options.topSpacing),
              (e.bottomSpacing = this.options.bottomSpacing),
              "function" == typeof e.topSpacing &&
                (e.topSpacing = parseInt(e.topSpacing(this.sidebar)) || 0),
              "function" == typeof e.bottomSpacing &&
                (e.bottomSpacing =
                  parseInt(e.bottomSpacing(this.sidebar)) || 0),
              "VIEWPORT-TOP" === this.affixedType
                ? e.topSpacing < e.lastTopSpacing &&
                  ((e.translateY += e.lastTopSpacing - e.topSpacing),
                  (this._reStyle = !0))
                : "VIEWPORT-BOTTOM" === this.affixedType &&
                  e.bottomSpacing < e.lastBottomSpacing &&
                  ((e.translateY += e.lastBottomSpacing - e.bottomSpacing),
                  (this._reStyle = !0)),
              (e.lastTopSpacing = e.topSpacing),
              (e.lastBottomSpacing = e.bottomSpacing);
          }
          isSidebarFitsViewport() {
            return (
              this.dimensions.viewportHeight >=
              this.dimensions.lastBottomSpacing +
                this.dimensions.lastTopSpacing +
                this.dimensions.sidebarHeight
            );
          }
          observeScrollDir() {
            var e = this.dimensions;
            if (e.lastViewportTop !== e.viewportTop) {
              var t = "down" === this.direction ? Math.min : Math.max;
              e.viewportTop === t(e.viewportTop, e.lastViewportTop) &&
                (this.direction = "down" === this.direction ? "up" : "down");
            }
          }
          getAffixType() {
            this._calcDimensionsWithScroll();
            var e = this.dimensions,
              t = e.viewportTop + e.topSpacing,
              n = this.affixedType;
            return (
              t <= e.containerTop || e.containerHeight <= e.sidebarHeight
                ? ((e.translateY = 0), (n = "STATIC"))
                : (n =
                    "up" === this.direction
                      ? this._getAffixTypeScrollingUp()
                      : this._getAffixTypeScrollingDown()),
              (e.translateY = Math.max(0, e.translateY)),
              (e.translateY = Math.min(e.containerHeight, e.translateY)),
              (e.translateY = Math.round(e.translateY)),
              (e.lastViewportTop = e.viewportTop),
              n
            );
          }
          _getAffixTypeScrollingDown() {
            var e = this.dimensions,
              t = e.sidebarHeight + e.containerTop,
              n = e.viewportTop + e.topSpacing,
              i = e.viewportBottom - e.bottomSpacing,
              r = this.affixedType;
            return (
              this.isSidebarFitsViewport()
                ? e.sidebarHeight + n >= e.containerBottom
                  ? ((e.translateY = e.containerBottom - t),
                    (r = "CONTAINER-BOTTOM"))
                  : n >= e.containerTop &&
                    ((e.translateY = n - e.containerTop), (r = "VIEWPORT-TOP"))
                : e.containerBottom <= i
                ? ((e.translateY = e.containerBottom - t),
                  (r = "CONTAINER-BOTTOM"))
                : t + e.translateY <= i
                ? ((e.translateY = i - t), (r = "VIEWPORT-BOTTOM"))
                : e.containerTop + e.translateY <= n &&
                  0 !== e.translateY &&
                  e.maxTranslateY !== e.translateY &&
                  (r = "VIEWPORT-UNBOTTOM"),
              r
            );
          }
          _getAffixTypeScrollingUp() {
            var e = this.dimensions,
              t = e.sidebarHeight + e.containerTop,
              n = e.viewportTop + e.topSpacing,
              i = e.viewportBottom - e.bottomSpacing,
              r = this.affixedType;
            return (
              n <= e.translateY + e.containerTop
                ? ((e.translateY = n - e.containerTop), (r = "VIEWPORT-TOP"))
                : e.containerBottom <= i
                ? ((e.translateY = e.containerBottom - t),
                  (r = "CONTAINER-BOTTOM"))
                : this.isSidebarFitsViewport() ||
                  (e.containerTop <= n &&
                    0 !== e.translateY &&
                    e.maxTranslateY !== e.translateY &&
                    (r = "VIEWPORT-UNBOTTOM")),
              r
            );
          }
          _getStyle(e) {
            if (void 0 !== e) {
              var t = { inner: {}, outer: {} },
                i = this.dimensions;
              switch (e) {
                case "VIEWPORT-TOP":
                  t.inner = {
                    position: "fixed",
                    top: i.topSpacing,
                    left: i.sidebarLeft - i.viewportLeft,
                    width: i.sidebarWidth,
                  };
                  break;
                case "VIEWPORT-BOTTOM":
                  t.inner = {
                    position: "fixed",
                    top: "auto",
                    left: i.sidebarLeft,
                    bottom: i.bottomSpacing,
                    width: i.sidebarWidth,
                  };
                  break;
                case "CONTAINER-BOTTOM":
                case "VIEWPORT-UNBOTTOM":
                  let e = this._getTranslate(0, i.translateY + "px");
                  t.inner = e
                    ? { transform: e }
                    : {
                        position: "absolute",
                        top: i.translateY,
                        width: i.sidebarWidth,
                      };
              }
              switch (e) {
                case "VIEWPORT-TOP":
                case "VIEWPORT-BOTTOM":
                case "VIEWPORT-UNBOTTOM":
                case "CONTAINER-BOTTOM":
                  t.outer = { height: i.sidebarHeight, position: "relative" };
              }
              return (
                (t.outer = n.extend({ height: "", position: "" }, t.outer)),
                (t.inner = n.extend(
                  {
                    position: "relative",
                    top: "",
                    left: "",
                    bottom: "",
                    width: "",
                    transform: "",
                  },
                  t.inner
                )),
                t
              );
            }
          }
          stickyPosition(t) {
            if (!this._breakpoint) {
              t = this._reStyle || t || !1;
              this.options.topSpacing, this.options.bottomSpacing;
              var i = this.getAffixType(),
                r = this._getStyle(i);
              if ((this.affixedType != i || t) && i) {
                let t = "affix." + i.toLowerCase().replace("viewport-", "") + e;
                n.eventTrigger(this.sidebar, t),
                  "STATIC" === i
                    ? n.removeClass(this.sidebar, this.options.stickyClass)
                    : n.addClass(this.sidebar, this.options.stickyClass);
                for (let e in r.outer) {
                  let t = "number" == typeof r.outer[e] ? "px" : "";
                  this.sidebar.style[e] = r.outer[e] + t;
                }
                for (let e in r.inner) {
                  let t = "number" == typeof r.inner[e] ? "px" : "";
                  this.sidebarInner.style[e] = r.inner[e] + t;
                }
                let s =
                  "affixed." + i.toLowerCase().replace("viewport-", "") + e;
                n.eventTrigger(this.sidebar, s);
              } else
                this._initialized &&
                  (this.sidebarInner.style.left = r.inner.left);
              this.affixedType = i;
            }
          }
          _widthBreakpoint() {
            window.innerWidth <= this.options.minWidth
              ? ((this._breakpoint = !0),
                (this.affixedType = "STATIC"),
                this.sidebar.removeAttribute("style"),
                n.removeClass(this.sidebar, this.options.stickyClass),
                this.sidebarInner.removeAttribute("style"))
              : (this._breakpoint = !1);
          }
          updateSticky(e = {}) {
            this._running ||
              ((this._running = !0),
              ((e) => {
                requestAnimationFrame(() => {
                  if ("scroll" === e)
                    this._calcDimensionsWithScroll(),
                      this.observeScrollDir(),
                      this.stickyPosition();
                  else
                    this._widthBreakpoint(),
                      this.calcDimensions(),
                      this.stickyPosition(!0);
                  this._running = !1;
                });
              })(e.type));
          }
          _setSupportFeatures() {
            var e = this.support;
            (e.transform = n.supportTransform()),
              (e.transform3d = n.supportTransform(!0));
          }
          _getTranslate(e = 0, t = 0, n = 0) {
            return this.support.transform3d
              ? "translate3d(" + e + ", " + t + ", " + n + ")"
              : !!this.support.translate && "translate(" + e + ", " + t + ")";
          }
          destroy() {
            window.removeEventListener("resize", this, { capture: !1 }),
              window.removeEventListener("scroll", this, { capture: !1 }),
              this.sidebar.classList.remove(this.options.stickyClass),
              (this.sidebar.style.minHeight = ""),
              this.sidebar.removeEventListener("update" + e, this);
            var t = {
              inner:
                ({},
                {
                  position: "",
                  top: "",
                  left: "",
                  bottom: "",
                  width: "",
                  transform: "",
                }),
              outer: ({}, { height: "", position: "" }),
            };
            for (let e in t.outer) this.sidebar.style[e] = t.outer[e];
            for (let e in t.inner) this.sidebarInner.style[e] = t.inner[e];
            this.options.resizeSensor &&
              "undefined" != typeof ResizeSensor &&
              (ResizeSensor.detach(this.sidebarInner, this.handleEvent),
              ResizeSensor.detach(this.container, this.handleEvent));
          }
          static supportTransform(e) {
            var t = !1,
              n = e ? "perspective" : "transform",
              i = n.charAt(0).toUpperCase() + n.slice(1),
              r = document.createElement("support").style;
            return (
              (n + " " + ["Webkit", "Moz", "O", "ms"].join(i + " ") + i)
                .split(" ")
                .forEach(function (e, n) {
                  if (void 0 !== r[e]) return (t = e), !1;
                }),
              t
            );
          }
          static eventTrigger(e, t, n) {
            try {
              var i = new CustomEvent(t, { detail: n });
            } catch (e) {
              (i = document.createEvent("CustomEvent")).initCustomEvent(
                t,
                !0,
                !0,
                n
              );
            }
            e.dispatchEvent(i);
          }
          static extend(e, t) {
            var n = {};
            for (let i in e) void 0 !== t[i] ? (n[i] = t[i]) : (n[i] = e[i]);
            return n;
          }
          static offsetRelative(e) {
            var t = { left: 0, top: 0 };
            do {
              let n = e.offsetTop,
                i = e.offsetLeft;
              isNaN(n) || (t.top += n),
                isNaN(i) || (t.left += i),
                (e = "BODY" === e.tagName ? e.parentElement : e.offsetParent);
            } while (e);
            return t;
          }
          static addClass(e, t) {
            n.hasClass(e, t) ||
              (e.classList ? e.classList.add(t) : (e.className += " " + t));
          }
          static removeClass(e, t) {
            n.hasClass(e, t) &&
              (e.classList
                ? e.classList.remove(t)
                : (e.className = e.className.replace(
                    new RegExp(
                      "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                      "gi"
                    ),
                    " "
                  )));
          }
          static hasClass(e, t) {
            return e.classList
              ? e.classList.contains(t)
              : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className);
          }
          static get defaults() {
            return t;
          }
        }
        return n;
      })(),
      Ln = An;
    window.StickySidebar = An;
    var On = n(755);
    let _n = document.querySelector(".icon-menu"),
      Mn = document.querySelector(".menu__list");
    _n.addEventListener("click", (e) => {
      e.stopPropagation();
    }),
      document.addEventListener("click", (e) => {
        let t = e.target,
          n = t == Mn || Mn.contains(t),
          i = t == _n,
          r = document.documentElement.classList.contains("menu-open");
        n || i || !r || (c(), o());
      }),
      document.addEventListener("click", function (e) {
        const t = e.target;
        t.classList.contains("menu__link") &&
          t.closest(".menu__item").classList.toggle("_hover"),
          !t.closest(".menu__item") &&
          document.querySelectorAll(".menu__item._hover").length > 0
            ? u(document.querySelectorAll(".menu__item._hover"), "_hover")
            : t.closest(".menu__item") &&
              document.querySelectorAll(".menu__item._hover").length > 0 &&
              (u(document.querySelectorAll(".menu__item._hover"), "_hover"),
              t.closest(".menu__item").classList.add("_hover"));
      });
    document.querySelectorAll(".menu__item").forEach((e) => {
      e.addEventListener("mouseover", (t) => {
        t.target && e.classList.add("_hover");
      }),
        e.addEventListener("mouseout", (t) => {
          t.target && e.classList.remove("_hover");
        });
    });
    const Pn = document.querySelectorAll(".reviews__list-item--rating"),
      Dn = document.querySelectorAll(".b-reviews__item-rating"),
      $n = document.querySelectorAll(".reviews__header-rating"),
      In = (e, t) => {
        let n = 0;
        e &&
          e.forEach((e) => {
            switch (((n = +e.innerText), n)) {
              case 5:
                e.innerHTML = `\n\t\t\t\t<i class="fa-regular fa-star ${t}"></i>\n\t\t\t\t<i class="fa-regular fa-star ${t}"></i>\n\t\t\t\t<i class="fa-regular fa-star ${t}"></i>\n\t\t\t\t<i class="fa-regular fa-star ${t}"></i>\n\t\t\t\t<i class="fa-regular fa-star ${t}"></i>\n\t\t\t\t`;
                break;
              case 4:
                e.innerHTML = `\n\t\t\t\t<i class="fa-regular fa-star ${t}"></i>\n\t\t\t\t<i class="fa-regular fa-star ${t}"></i>\n\t\t\t\t<i class="fa-regular fa-star ${t}"></i>\n\t\t\t\t<i class="fa-regular fa-star ${t}"></i>\n\t\t\t\t<i class="fa-regular fa-star"></i>\n\t\t\t\t`;
                break;
              case 3:
                e.innerHTML = `\n\t\t\t\t\t<i class="fa-regular fa-star ${t}"></i>\n\t\t\t\t\t<i class="fa-regular fa-star ${t}"></i>\n\t\t\t\t\t<i class="fa-regular fa-star ${t}"></i>\n\t\t\t\t\t<i class="fa-regular fa-star"></i>\n\t\t\t\t\t<i class="fa-regular fa-star"></i>\n\t\t\t\t\t`;
                break;
              case 2:
                e.innerHTML = `\n\t\t\t\t\t<i class="fa-regular fa-star ${t}"></i>\n\t\t\t\t\t<i class="fa-regular fa-star ${t}"></i>\n\t\t\t\t\t<i class="fa-regular fa-star"></i>\n\t\t\t\t\t<i class="fa-regular fa-star"></i>\n\t\t\t\t\t<i class="fa-regular fa-star"></i>\n\t\t\t\t\t`;
                break;
              case 1:
                e.innerHTML = `\n\t\t\t\t\t<i class="fa-regular fa-star ${t}"></i>\n\t\t\t\t\t<i class="fa-regular fa-star"></i>\n\t\t\t\t\t<i class="fa-regular fa-star"></i>\n\t\t\t\t\t<i class="fa-regular fa-star"></i>\n\t\t\t\t\t<i class="fa-regular fa-star"></i>\n\t\t\t\t\t`;
            }
          });
      };
    In(Pn, "yellow"), In(Dn, "yellow"), In($n, "white");
    const Nn = document.createDocumentFragment(),
      jn = document.querySelectorAll(
        ".overview__content h1, .overview__content h2, .overview__content h3, .overview__content h4, .overview__content h5, .overview__content h6"
      ),
      qn = document.createElement("div"),
      Hn = document.createElement("h2"),
      Bn = document.createElement("ul"),
      Rn = document.querySelector(".overview"),
      Wn = document.querySelector(".overview__title");
    Rn &&
      (qn.classList.add("overview__header"),
      Hn.classList.add("overview__header-title"),
      (Hn.textContent = Wn.textContent),
      Bn.classList.add("overview__header-list"),
      Nn.appendChild(qn),
      qn.appendChild(Hn),
      qn.appendChild(Bn),
      jn.forEach(function (e, t) {
        const n = document.createElement("li"),
          i = document.createElement("h2"),
          r = document.createElement("img");
        n.classList.add("overview__header-item"),
          i.classList.add("overview__header-subtitle"),
          (r.src = "img/overview-item.svg"),
          (r.alt = "overview-item"),
          "" === e.id && (e.id = "id-" + t),
          (n.dataset.goto = e.id),
          n.setAttribute("data-goto-header", !0),
          (i.textContent = e.textContent),
          n.appendChild(r),
          n.appendChild(i),
          Bn.appendChild(n);
      }),
      Rn.prepend(Nn));
    let zn = document.querySelector(".header"),
      Fn = zn.offsetTop,
      Vn = document.querySelector(".page"),
      Gn = window.getComputedStyle(Vn).marginTop;
    window.addEventListener("scroll", function () {
      let e = window.getComputedStyle(zn).height;
      window.addEventListener("resize", () => {
        (e = window.getComputedStyle(zn).height), (Fn = zn.offsetTop);
      }),
        window.pageYOffset > Fn
          ? (zn.classList.add("sticky"),
            (Vn.style.marginTop =
              +Gn.slice(0, Gn.length - 2) + +e.slice(0, e.length - 2) + "px"))
          : (zn.classList.remove("sticky"), (Vn.style.marginTop = Gn));
    }),
      window.addEventListener("resize", () => {
        window.innerWidth >= 992 && c();
      });
    var Yn;
    document.querySelectorAll(".promocode__body").forEach((e) => {
      e.addEventListener("click", (e) => {
        !(function (e) {
          let t = e.target.getAttribute("id"),
            n = document.createElement("textarea");
          (n.value = t),
            document.body.appendChild(n),
            n.select(),
            document.execCommand("Copy"),
            n.remove(),
            On("#" + t).text("??????????????????????"),
            On("#" + t).addClass("active"),
            setTimeout(function () {
              On("#" + t).text(t), On("#" + t).removeClass("active");
            }, 3e3);
        })(e);
      });
    }),
      (Yn = On)(".switch").on("click", function () {
        Yn("body").hasClass("light")
          ? (Yn("body").removeClass("light"),
            Yn(".switch").removeClass("switched"))
          : (Yn("body").addClass("light"), Yn(".switch").addClass("switched"));
      }),
      Yn(document).ready(function () {
        var e = document.querySelector(".progress-wrap path"),
          t = e.getTotalLength();
        (e.style.transition = e.style.WebkitTransition = "none"),
          (e.style.strokeDasharray = t + " " + t),
          (e.style.strokeDashoffset = t),
          e.getBoundingClientRect(),
          (e.style.transition = e.style.WebkitTransition =
            "stroke-dashoffset 10ms linear");
        var n = function () {
          var n = Yn(window).scrollTop(),
            i = Yn(document).height() - Yn(window).height(),
            r = t - (n * t) / i;
          e.style.strokeDashoffset = r;
        };
        n(),
          Yn(window).scroll(n),
          Yn(window).on("scroll", function () {
            Yn(this).scrollTop() > 50
              ? Yn(".progress-wrap").addClass("active-progress")
              : Yn(".progress-wrap").removeClass("active-progress");
          });
      }),
      On(".progress-wrap").on("click", function (e) {
        e.preventDefault(), On("html, body").animate({ scrollTop: 0 }, 1500);
      });
    const Un = document.querySelector(".search button"),
      Xn = document.querySelector(".search__input"),
      Qn = document.querySelector(".search__results-box"),
      Kn = document.querySelector(".header__menu"),
      Jn = document.querySelector(".header__icons");
    let Zn = window.getComputedStyle(Kn).width,
      ei = window.getComputedStyle(Kn).marginLeft,
      ti = window.getComputedStyle(Jn).marginLeft;
    var ni;
    if (
      (window.innerWidth >= 992
        ? (Qn.style.width =
            +Zn.slice(0, Zn.length - 2) +
            +ei.slice(0, ei.length - 2) +
            +ti.slice(0, ti.length - 2) +
            "px")
        : window.innerWidth >= 480
        ? (Qn.style.width = "300px")
        : (Qn.style.width = "220px"),
      Un.addEventListener("click", (e) => {
        e.stopPropagation(),
          e.target &&
            !Xn.classList.contains("_active") &&
            (e.preventDefault(),
            Xn.classList.toggle("_active"),
            window.innerWidth >= 992
              ? ((Xn.style.width =
                  +Zn.slice(0, Zn.length - 2) +
                  +ei.slice(0, ei.length - 2) +
                  +ti.slice(0, ti.length - 2) +
                  "px"),
                (Qn.style.width =
                  +Zn.slice(0, Zn.length - 2) +
                  +ei.slice(0, ei.length - 2) +
                  +ti.slice(0, ti.length - 2) +
                  "px"))
              : window.innerWidth >= 480
              ? ((Xn.style.width = "300px"), (Qn.style.width = "300px"))
              : ((Xn.style.width = "220px"), (Qn.style.width = "220px")));
      }),
      window.addEventListener("resize", () => {
        (Zn = window.getComputedStyle(Kn).width),
          (ei = window.getComputedStyle(Kn).marginLeft),
          (ti = window.getComputedStyle(Jn).marginLeft),
          window.innerWidth >= 992
            ? ((Xn.style.width =
                +Zn.slice(0, Zn.length - 2) +
                +ei.slice(0, ei.length - 2) +
                +ti.slice(0, ti.length - 2) +
                "px"),
              (Qn.style.width =
                +Zn.slice(0, Zn.length - 2) +
                +ei.slice(0, ei.length - 2) +
                +ti.slice(0, ti.length - 2) +
                "px"))
            : window.innerWidth >= 480
            ? ((Xn.style.width = "300px"), (Qn.style.width = "300px"))
            : ((Xn.style.width = "220px"), (Qn.style.width = "220px"));
      }),
      document.addEventListener("click", (e) => {
        let t = e.target,
          n = t == Qn,
          i = t == Xn || Xn.contains(t),
          r = t == Un,
          s = Xn.classList.contains("_active");
        i || r || n || !s || Xn.classList.toggle("_active");
      }),
      On(document).ready(function () {
        var e = On(".search__results-box");
        On("#search").on("keyup", function () {
          var t = On(this).val();
          "" != t && t.length > 1
            ? On.ajax({
                type: "POST",
                url: "/ajax_search.php",
                data: { search: t },
                success: function (t) {
                  e.html(t), "" != t ? e.fadeIn() : e.fadeOut(100);
                },
              })
            : (e.html(""), e.fadeOut(100));
        }),
          On(document).on("click", function (t) {
            On(t.target).closest(".search").length ||
              (e.html(""), e.fadeOut(100));
          }),
          On(document).on("click", ".search__results-link", function () {
            e.fadeOut(100);
          });
      }),
      window.addEventListener("DOMContentLoaded", () => {
        const e = {
            getItem: (e) => {
              const t = document.cookie
                .split(";")
                .map((e) => e.split("="))
                .reduce((e, [t, n]) => ({ ...e, [t.trim()]: n }), {});
              return t[e];
            },
            setItem: (e, t) => {
              document.cookie = `${e}=${t};expires=Sun, 16 Jul 3567 06:23:41 GMT`;
            },
          },
          t = e,
          n = "site_consent",
          i = document.querySelector(".popup_cookie"),
          r = document.querySelector("[data-confirm]");
        "true" === t.getItem(n) || i.classList.add("popup_active"),
          r.addEventListener("click", () => {
            ((e) => {
              t.setItem(n, e);
            })(!0),
              i.classList.remove("popup_active");
          });
      }),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            s && (o(), document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const t = Array.from(e).filter(function (e, t, n) {
            return !e.dataset.spollers.split(",")[0];
          });
          t.length > 0 && s(t);
          const n = Array.from(e).filter(function (e, t, n) {
            return e.dataset.spollers.split(",")[0];
          });
          if (n.length > 0) {
            const e = [];
            n.forEach((t) => {
              const n = {},
                i = t.dataset.spollers.split(",");
              (n.value = i[0]),
                (n.type = i[1] ? i[1].trim() : "max"),
                (n.item = t),
                e.push(n);
            });
            let t = e.map(function (e) {
              return (
                "(" +
                e.type +
                "-width: " +
                e.value +
                "px)," +
                e.value +
                "," +
                e.type
              );
            });
            (t = t.filter(function (e, t, n) {
              return n.indexOf(e) === t;
            })),
              t.forEach((t) => {
                const n = t.split(","),
                  i = n[1],
                  r = n[2],
                  o = window.matchMedia(n[0]),
                  a = e.filter(function (e) {
                    if (e.value === i && e.type === r) return !0;
                  });
                o.addEventListener("change", function () {
                  s(a, o);
                }),
                  s(a, o);
              });
          }
          function s(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    o(e),
                    e.addEventListener("click", a))
                  : (e.classList.remove("_spoller-init"),
                    o(e, !1),
                    e.removeEventListener("click", a));
            });
          }
          function o(e, t = !0) {
            const n = e.querySelectorAll("[data-spoller]");
            n.length > 0 &&
              n.forEach((e) => {
                e.nextElementSibling &&
                  (t
                    ? (e.removeAttribute("tabindex"),
                      e.classList.contains("_spoller-active") ||
                        (e.nextElementSibling.hidden = !0))
                    : (e.setAttribute("tabindex", "-1"),
                      (e.nextElementSibling.hidden = !1)));
              });
          }
          function a(e) {
            const t = e.target;
            if (t.hasAttribute("data-spoller") || t.closest("[data-spoller]")) {
              const n = t.hasAttribute("data-spoller")
                  ? t
                  : t.closest("[data-spoller]"),
                s = n.closest("[data-spollers]"),
                o = !!s.hasAttribute("data-one-spoller");
              !s.querySelectorAll("._slide").length &&
                n.nextElementSibling &&
                (o && !n.classList.contains("_spoller-active") && l(s),
                n.classList.toggle("_spoller-active"),
                ((e, t = 500) => {
                  e.hidden ? r(e, t) : i(e, t);
                })(n.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function l(e) {
            const t = e.querySelector("[data-spoller]._spoller-active");
            t &&
              (t.classList.remove("_spoller-active"),
              i(t.nextElementSibling, 500));
          }
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-tabs]");
        let t = [];
        if (e.length > 0) {
          const i = location.hash.replace("#", "");
          i.startsWith("tab-") && (t = i.replace("tab-", "").split("-")),
            e.forEach((e, n) => {
              e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", n),
                e.addEventListener("click", s),
                (function (e) {
                  const n = e.querySelectorAll("[data-tabs-titles]>*"),
                    i = e.querySelectorAll("[data-tabs-body]>*"),
                    r = e.dataset.tabsIndex,
                    s = t[0] == r;
                  if (s) {
                    e.querySelector(
                      "[data-tabs-titles]>._tab-active"
                    ).classList.remove("_tab-active");
                  }
                  i.length > 0 &&
                    i.forEach((e, i) => {
                      n[i].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        s && i == t[1] && n[i].classList.add("_tab-active"),
                        (e.hidden = !n[i].classList.contains("_tab-active"));
                    });
                })(e);
            });
          const r = Array.from(e).filter(function (e, t, n) {
            return e.dataset.tabs;
          });
          r.length > 0 &&
            (function (e) {
              const t = [];
              e.forEach((e) => {
                const n = e.dataset.tabs,
                  i = {};
                (i.value = n), (i.item = e), t.push(i);
              });
              let i = t.map(function (e) {
                return `(max-width:${e.value}px),${e.value}`;
              });
              (i = i.filter(function (e, t, n) {
                return n.indexOf(e) === t;
              })),
                i.forEach((e) => {
                  const i = e.split(","),
                    r = window.matchMedia(i[0]),
                    s = i[1],
                    o = t.filter(function (e) {
                      if (e.value === s) return !0;
                    });
                  r.addEventListener("change", function () {
                    n(o, r);
                  }),
                    n(o, r);
                });
            })(r);
        }
        function n(e, t) {
          e.forEach((e) => {
            const n = (e = e.item).querySelector("[data-tabs-titles]"),
              i = e.querySelectorAll("[data-tabs-title]"),
              r = e.querySelector("[data-tabs-body]");
            e.querySelectorAll("[data-tabs-item]").forEach((s, o) => {
              t.matches
                ? (r.append(i[o]), r.append(s), e.classList.add("_tab-spoller"))
                : (n.append(i[o]), e.classList.remove("_tab-spoller"));
            });
          });
        }
        function s(e) {
          const t = e.target;
          if (t.closest("[data-tabs-title]")) {
            const n = t.closest("[data-tabs-title]"),
              s = n.closest("[data-tabs]");
            if (
              !n.classList.contains("_tab-active") &&
              !s.querySelectorAll("._slide").length
            ) {
              const e = s.querySelector("[data-tabs-title]._tab-active");
              e && e.classList.remove("_tab-active"),
                n.classList.add("_tab-active"),
                (function (e) {
                  const t = e.querySelectorAll("[data-tabs-title]"),
                    n = e.querySelectorAll("[data-tabs-item]"),
                    s = e.dataset.tabsIndex,
                    o = (function (e) {
                      if (e.hasAttribute("data-tabs-animate"))
                        return e.dataset.tabsAnimate > 0
                          ? e.dataset.tabsAnimate
                          : 500;
                    })(e);
                  n.length > 0 &&
                    n.forEach((e, n) => {
                      t[n].classList.contains("_tab-active")
                        ? (o ? r(e, o) : (e.hidden = !1),
                          (location.hash = `tab-${s}-${n}`))
                        : o
                        ? i(e, o)
                        : (e.hidden = !0);
                    });
                })(s);
            }
            e.preventDefault();
          }
        }
      })(),
      ((e = !1, n = !0) => {
        new t({ logging: e, init: n });
      })(),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              h.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && h.validateInput(t));
          });
      })(),
      (function (e) {
        const t = document.forms;
        if (t.length)
          for (const e of t)
            e.addEventListener("submit", function (e) {
              n(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                h.formClean(t);
              });
        async function n(t, n) {
          const i = e ? h.getErrors(t) : 0;
          if (t.classList.contains("form-captcha"))
            if (0 === i && "" == !grecaptcha.getResponse()) {
              const e = t.dataset.popup;
              if (t.hasAttribute("data-ajax")) {
                n.preventDefault();
                const i = t.getAttribute("action")
                    ? t.getAttribute("action").trim()
                    : "#",
                  r = t.getAttribute("method")
                    ? t.getAttribute("method").trim()
                    : "GET",
                  s = new FormData(t);
                t.classList.add("_sending");
                const o = await fetch(i, { method: r, body: s });
                if (o.ok) {
                  await o.json();
                  t.classList.remove("_sending"),
                    e && popupItem.open(`#${e}`),
                    h.formClean(t);
                } else alert("????????????"), t.classList.remove("_sending");
              }
              t.hasAttribute("data-dev") &&
                (n.preventDefault(),
                e && popupItem.open(`#${e}`),
                h.formClean(t));
            } else {
              n.preventDefault();
              const e = t.querySelector("._form-error");
              e && t.hasAttribute("data-goto-error") && d(e, !0, 1e3);
            }
          else if (0 === i) {
            const e = t.dataset.popup;
            if (t.hasAttribute("data-ajax")) {
              n.preventDefault();
              const i = t.getAttribute("action")
                  ? t.getAttribute("action").trim()
                  : "#",
                r = t.getAttribute("method")
                  ? t.getAttribute("method").trim()
                  : "GET",
                s = new FormData(t);
              t.classList.add("_sending");
              const o = await fetch(i, { method: r, body: s });
              if (o.ok) {
                await o.json();
                t.classList.remove("_sending"),
                  e && popupItem.open(`#${e}`),
                  h.formClean(t);
              } else alert("????????????"), t.classList.remove("_sending");
            }
            t.hasAttribute("data-dev") &&
              (n.preventDefault(),
              e && popupItem.open(`#${e}`),
              h.formClean(t));
          } else {
            n.preventDefault();
            const e = t.querySelector("._form-error");
            e && t.hasAttribute("data-goto-error") && d(e, !0, 1e3);
          }
        }
      })(!0),
      (ni = !1),
      (f.inputMaskModule = new p({ logging: ni })),
      (function () {
        const e = document.querySelectorAll(".rating");
        e.length > 0 &&
          (function () {
            let t, n;
            for (let t = 0; t < e.length; t++) {
              i(e[t]);
            }
            function i(e) {
              r(e), s(), e.classList.contains("rating_set") && o(e);
            }
            function r(e) {
              (t = e.querySelector(".rating__active")),
                (n = e.querySelector(".rating__value"));
            }
            function s(e = n.innerHTML) {
              const i = e / 0.05;
              t.style.width = `${i}%`;
            }
            function o(e) {
              const t = e.querySelectorAll(".rating__item");
              for (let i = 0; i < t.length; i++) {
                const o = t[i];
                o.addEventListener("mouseenter", function (t) {
                  r(e), s(o.value);
                }),
                  o.addEventListener("mouseleave", function (e) {
                    s();
                  }),
                  o.addEventListener("click", function (t) {
                    r(e),
                      e.dataset.ajax
                        ? a(o.value, e)
                        : ((n.innerHTML = i + 1), s());
                  });
              }
            }
            async function a(e, t) {
              if (!t.classList.contains("rating_sending")) {
                t.classList.add("rating_sending");
                let e = await fetch("rating.json", { method: "GET" });
                if (e.ok) {
                  const i = (await e.json()).newRating;
                  (n.innerHTML = i), s(), t.classList.remove("rating_sending");
                } else alert("????????????"), t.classList.remove("rating_sending");
              }
            }
          })();
      })(),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const n = t.closest("[data-goto]"),
                i = !!n.hasAttribute("data-goto-header"),
                r = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
              d(`#${n.dataset.goto}`, i, r), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              n = t.target;
            if ("navigator" === n.dataset.watch) {
              const e = n.id,
                i =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="${e}"]`));
              t.isIntersecting
                ? i && i.classList.add("_navigator-active")
                : i && i.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })(),
      document.querySelector(".aside"))
    ) {
      new Ln(".aside", {
        containerSelector: ".page__wrapper",
        innerWrapperSelector: ".aside__wrapper",
        topSpacing: 20,
        bottomSpacing: 20,
        minWidth: 768,
      });
    }
    if (document.querySelector(".b-cases__aside")) {
      new Ln(".b-cases__aside", {
        containerSelector: ".b-cases__wrapper",
        innerWrapperSelector: ".b-cases__aside-wrapper",
        topSpacing: 20,
        bottomSpacing: 20,
        minWidth: 768,
      });
    }
  })();
})();
