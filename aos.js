!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.AOS = t())
    : (e.AOS = t());
})(this, function () {
  return (
    (i = {}),
    (o.m = n =
      [
        function (e, t, o) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function i() {
            if (
              (0 < arguments.length &&
                void 0 !== arguments[0] &&
                arguments[0] &&
                (v = !0),
              v)
            )
              return (b = (0, m.default)(b, g)), (0, l.default)(b, g.once), b;
          }
          function a() {
            (b = (0, p.default)()), i();
          }
          var r =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var o,
                    n = arguments[t];
                  for (o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
              },
            c = (n(o(1)), o(6)),
            u = n(c),
            s = n(o(7)),
            d = n(o(8)),
            f = n(o(9)),
            l = n(o(10)),
            m = n(o(11)),
            p = n(o(14)),
            b = [],
            v = !1,
            y = document.all && !window.atob,
            g = {
              offset: 120,
              delay: 0,
              easing: "ease",
              duration: 400,
              disable: !1,
              once: !1,
              startEvent: "DOMContentLoaded",
              throttleDelay: 99,
              debounceDelay: 50,
              disableMutationObserver: !1,
            };
          e.exports = {
            init: function (e) {
              return (
                (g = r(g, e)),
                (b = (0, p.default)()),
                !0 === (e = g.disable) ||
                ("mobile" === e && f.default.mobile()) ||
                ("phone" === e && f.default.phone()) ||
                ("tablet" === e && f.default.tablet()) ||
                ("function" == typeof e && !0 === e()) ||
                y
                  ? void b.forEach(function (e, t) {
                      e.node.removeAttribute("data-aos"),
                        e.node.removeAttribute("data-aos-easing"),
                        e.node.removeAttribute("data-aos-duration"),
                        e.node.removeAttribute("data-aos-delay");
                    })
                  : (document
                      .querySelector("body")
                      .setAttribute("data-aos-easing", g.easing),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-duration", g.duration),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-delay", g.delay),
                    "DOMContentLoaded" === g.startEvent &&
                    -1 <
                      ["complete", "interactive"].indexOf(document.readyState)
                      ? i(!0)
                      : ("load" === g.startEvent
                          ? window
                          : document
                        ).addEventListener(g.startEvent, function () {
                          i(!0);
                        }),
                    window.addEventListener(
                      "resize",
                      (0, s.default)(i, g.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      "orientationchange",
                      (0, s.default)(i, g.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      "scroll",
                      (0, u.default)(function () {
                        (0, l.default)(b, g.once);
                      }, g.throttleDelay)
                    ),
                    g.disableMutationObserver ||
                      (0, d.default)("[data-aos]", a),
                    b)
              );
            },
            refresh: i,
            refreshHard: a,
          };
        },
        function (e, t) {},
        ,
        ,
        ,
        ,
        function (p, e) {
          (function (e) {
            "use strict";
            function a(n, o, e) {
              function i(e) {
                var t = u,
                  o = s;
                return (u = s = void 0), (p = e), (f = n.apply(o, t));
              }
              function a(e) {
                var t = e - m;
                return void 0 === m || o <= t || t < 0 || (v && d <= e - p);
              }
              function r() {
                var e,
                  t = j();
                return a(t)
                  ? c(t)
                  : void (l = setTimeout(
                      r,
                      ((t = o - ((e = t) - m)), v ? x(t, d - (e - p)) : t)
                    ));
              }
              function c(e) {
                return (l = void 0), y && u ? i(e) : ((u = s = void 0), f);
              }
              function t() {
                var e = j(),
                  t = a(e);
                if (((u = arguments), (s = this), (m = e), t)) {
                  if (void 0 === l)
                    return (p = t = m), (l = setTimeout(r, o)), b ? i(t) : f;
                  if (v) return (l = setTimeout(r, o)), i(m);
                }
                return void 0 === l && (l = setTimeout(r, o)), f;
              }
              var u,
                s,
                d,
                f,
                l,
                m,
                p = 0,
                b = !1,
                v = !1,
                y = !0;
              if ("function" != typeof n) throw new TypeError(w);
              return (
                (o = h(o) || 0),
                g(e) &&
                  ((b = !!e.leading),
                  (v = "maxWait" in e),
                  (d = v ? k(h(e.maxWait) || 0, o) : d),
                  (y = "trailing" in e ? !!e.trailing : y)),
                (t.cancel = function () {
                  void 0 !== l && clearTimeout(l),
                    (u = m = s = l = void (p = 0));
                }),
                (t.flush = function () {
                  return void 0 === l ? f : c(j());
                }),
                t
              );
            }
            function g(e) {
              var t = void 0 === e ? "undefined" : n(e);
              return e && ("object" == t || "function" == t);
            }
            function o(e) {
              return (
                "symbol" == (void 0 === e ? "undefined" : n(e)) ||
                (!!(t = e) &&
                  "object" == (void 0 === t ? "undefined" : n(t)) &&
                  m.call(e) == r)
              );
              var t;
            }
            function h(e) {
              if ("number" == typeof e) return e;
              if (o(e)) return i;
              if (
                (g(e) &&
                  (e = g((t = "function" == typeof e.valueOf ? e.valueOf() : e))
                    ? t + ""
                    : t),
                "string" != typeof e)
              )
                return 0 === e ? e : +e;
              e = e.replace(c, "");
              var t = s.test(e);
              return t || d.test(e)
                ? f(e.slice(2), t ? 2 : 8)
                : u.test(e)
                ? i
                : +e;
            }
            var n =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              w = "Expected a function",
              i = NaN,
              r = "[object Symbol]",
              c = /^\s+|\s+$/g,
              u = /^[-+]0x[0-9a-f]+$/i,
              s = /^0b[01]+$/i,
              d = /^0o[0-7]+$/i,
              f = parseInt,
              t =
                "object" == (void 0 === e ? "undefined" : n(e)) &&
                e &&
                e.Object === Object &&
                e,
              e =
                "object" ==
                  ("undefined" == typeof self ? "undefined" : n(self)) &&
                self &&
                self.Object === Object &&
                self,
              l = t || e || Function("return this")(),
              m = Object.prototype.toString,
              k = Math.max,
              x = Math.min,
              j = function () {
                return l.Date.now();
              };
            p.exports = function (e, t, o) {
              var n = !0,
                i = !0;
              if ("function" != typeof e) throw new TypeError(w);
              return (
                g(o) &&
                  ((n = "leading" in o ? !!o.leading : n),
                  (i = "trailing" in o ? !!o.trailing : i)),
                a(e, t, { leading: n, maxWait: t, trailing: i })
              );
            };
          }.call(
            e,
            (function () {
              return this;
            })()
          ));
        },
        function (m, e) {
          (function (e) {
            "use strict";
            function g(e) {
              var t = void 0 === e ? "undefined" : n(e);
              return e && ("object" == t || "function" == t);
            }
            function o(e) {
              return (
                "symbol" == (void 0 === e ? "undefined" : n(e)) ||
                (!!(t = e) &&
                  "object" == (void 0 === t ? "undefined" : n(t)) &&
                  l.call(e) == a)
              );
              var t;
            }
            function h(e) {
              if ("number" == typeof e) return e;
              if (o(e)) return i;
              if (
                (g(e) &&
                  (e = g((t = "function" == typeof e.valueOf ? e.valueOf() : e))
                    ? t + ""
                    : t),
                "string" != typeof e)
              )
                return 0 === e ? e : +e;
              e = e.replace(r, "");
              var t = u.test(e);
              return t || s.test(e)
                ? d(e.slice(2), t ? 2 : 8)
                : c.test(e)
                ? i
                : +e;
            }
            function w() {
              return f.Date.now();
            }
            var n =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              i = NaN,
              a = "[object Symbol]",
              r = /^\s+|\s+$/g,
              c = /^[-+]0x[0-9a-f]+$/i,
              u = /^0b[01]+$/i,
              s = /^0o[0-7]+$/i,
              d = parseInt,
              t =
                "object" == (void 0 === e ? "undefined" : n(e)) &&
                e &&
                e.Object === Object &&
                e,
              e =
                "object" ==
                  ("undefined" == typeof self ? "undefined" : n(self)) &&
                self &&
                self.Object === Object &&
                self,
              f = t || e || Function("return this")(),
              l = Object.prototype.toString,
              k = Math.max,
              x = Math.min;
            m.exports = function (n, o, e) {
              function i(e) {
                var t = u,
                  o = s;
                return (u = s = void 0), (p = e), (f = n.apply(o, t));
              }
              function a(e) {
                var t = e - m;
                return void 0 === m || o <= t || t < 0 || (v && d <= e - p);
              }
              function r() {
                var e,
                  t = w();
                return a(t)
                  ? c(t)
                  : void (l = setTimeout(
                      r,
                      ((t = o - ((e = t) - m)), v ? x(t, d - (e - p)) : t)
                    ));
              }
              function c(e) {
                return (l = void 0), y && u ? i(e) : ((u = s = void 0), f);
              }
              function t() {
                var e = w(),
                  t = a(e);
                if (((u = arguments), (s = this), (m = e), t)) {
                  if (void 0 === l)
                    return (p = t = m), (l = setTimeout(r, o)), b ? i(t) : f;
                  if (v) return (l = setTimeout(r, o)), i(m);
                }
                return void 0 === l && (l = setTimeout(r, o)), f;
              }
              var u,
                s,
                d,
                f,
                l,
                m,
                p = 0,
                b = !1,
                v = !1,
                y = !0;
              if ("function" != typeof n)
                throw new TypeError("Expected a function");
              return (
                (o = h(o) || 0),
                g(e) &&
                  ((b = !!e.leading),
                  (v = "maxWait" in e),
                  (d = v ? k(h(e.maxWait) || 0, o) : d),
                  (y = "trailing" in e ? !!e.trailing : y)),
                (t.cancel = function () {
                  void 0 !== l && clearTimeout(l),
                    (u = m = s = l = void (p = 0));
                }),
                (t.flush = function () {
                  return void 0 === l ? f : c(w());
                }),
                t
              );
            };
          }.call(
            e,
            (function () {
              return this;
            })()
          ));
        },
        function (e, t) {
          "use strict";
          function n(e) {
            e &&
              e.forEach(function (e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                  e = Array.prototype.slice.call(e.removedNodes);
                t.concat(e).filter(function (e) {
                  return e.hasAttribute && e.hasAttribute("data-aos");
                }).length && r();
              });
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = window.document,
            a =
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver,
            r = function () {};
          t.default = function (e, t) {
            var o = new a(n);
            (r = t),
              o.observe(i.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0,
              });
          };
        },
        function (e, t) {
          "use strict";
          function o() {
            return (
              navigator.userAgent || navigator.vendor || window.opera || ""
            );
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n =
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            i =
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            a =
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            r =
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            c =
              ((function (e, t, o) {
                return t && s(e.prototype, t), o && s(e, o), e;
              })(u, [
                {
                  key: "phone",
                  value: function () {
                    var e = o();
                    return !(!n.test(e) && !i.test(e.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var e = o();
                    return !(!a.test(e) && !r.test(e.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              u);
          function u() {
            !(function (e) {
              if (!(e instanceof u))
                throw new TypeError("Cannot call a class as a function");
            })(this);
          }
          function s(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          t.default = new c();
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.default = function (e, a) {
            var r = window.pageYOffset,
              c = window.innerHeight;
            e.forEach(function (e, t) {
              var o, n, i;
              (n = c + r),
                (i = a),
                (e = (o = e).node.getAttribute("data-aos-once")),
                n > o.position
                  ? o.node.classList.add("aos-animate")
                  : void 0 === e ||
                    ("false" !== e && (i || "true" === e)) ||
                    o.node.classList.remove("aos-animate");
            });
          };
        },
        function (e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n,
            i = o(12),
            a = (n = i) && n.__esModule ? n : { default: n };
          t.default = function (e, o) {
            return (
              e.forEach(function (e, t) {
                e.node.classList.add("aos-init"),
                  (e.position = (0, a.default)(e.node, o.offset));
              }),
              e
            );
          };
        },
        function (e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n,
            i = o(13),
            r = (n = i) && n.__esModule ? n : { default: n };
          t.default = function (e, t) {
            var o = 0,
              n = 0,
              i = window.innerHeight,
              a = {
                offset: e.getAttribute("data-aos-offset"),
                anchor: e.getAttribute("data-aos-anchor"),
                anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (a.offset && !isNaN(a.offset) && (n = parseInt(a.offset)),
              a.anchor &&
                document.querySelectorAll(a.anchor) &&
                (e = document.querySelectorAll(a.anchor)[0]),
              (o = (0, r.default)(e).top),
              a.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                o += e.offsetHeight / 2;
                break;
              case "bottom-bottom":
                o += e.offsetHeight;
                break;
              case "top-center":
                o += i / 2;
                break;
              case "bottom-center":
                o += i / 2 + e.offsetHeight;
                break;
              case "center-center":
                o += i / 2 + e.offsetHeight / 2;
                break;
              case "top-top":
                o += i;
                break;
              case "bottom-top":
                o += e.offsetHeight + i;
                break;
              case "center-top":
                o += e.offsetHeight / 2 + i;
            }
            return a.anchorPlacement || a.offset || isNaN(t) || (n = t), o + n;
          };
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.default = function (e) {
            for (
              var t = 0, o = 0;
              e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

            )
              (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                (o += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                (e = e.offsetParent);
            return { top: o, left: t };
          };
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          t.default = function (e) {
            return (
              (e = e || document.querySelectorAll("[data-aos]")),
              Array.prototype.map.call(e, function (e) {
                return { node: e };
              })
            );
          };
        },
      ]),
    (o.c = i),
    (o.p = "dist/"),
    o(0)
  );
  function o(e) {
    if (i[e]) return i[e].exports;
    var t = (i[e] = { exports: {}, id: e, loaded: !1 });
    return n[e].call(t.exports, t, t.exports, o), (t.loaded = !0), t.exports;
  }
  var n, i;
});
