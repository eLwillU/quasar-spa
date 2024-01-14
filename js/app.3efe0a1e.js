(() => {
  var e = {
      994: (e, t, n) => {
        'use strict';
        var r = n(1957),
          o = n(1947),
          i = n(499),
          a = n(9835),
          s = n(1087),
          l = n(8339),
          c = n(7798);
        const u = (0, a.aZ)({
            __name: 'App',
            setup(e) {
              const t = (0, l.tv)(),
                n = (0, c.L)();
              return (
                (0, a.bv)(() => {
                  s.midata
                    .handleAuthResponse()
                    .then((e) => {
                      e && s.midata.isLoggedIn()
                        ? Promise.all([
                            n.restoreFromMidata(),
                            s.midata.getPatientResource(),
                          ])
                            .then((e) => {
                              console.log('Patient loaded: ', e[1]),
                                t.push('/midata/login');
                            })
                            .catch()
                        : s.midata.isLoggedIn() && n.restoreFromMidata();
                    })
                    .catch();
                }),
                (e, t) => {
                  const n = (0, a.up)('router-view');
                  return (0, a.wg)(), (0, a.j4)(n);
                }
              );
            },
          }),
          d = u,
          h = d;
        var p = n(3340),
          m = n(1809);
        const f = (0, p.h)(() => (0, m.WB)()),
          v = [
            { path: '/', redirect: '/midata/login' },
            {
              path: '/midata/introduction',
              component: () =>
                Promise.all([n.e(736), n.e(874)]).then(n.bind(n, 2874)),
              children: [
                {
                  path: '',
                  component: () =>
                    Promise.all([n.e(736), n.e(540)]).then(n.bind(n, 4540)),
                },
              ],
            },
            {
              path: '/midata/myFirstApp',
              component: () =>
                Promise.all([n.e(736), n.e(874)]).then(n.bind(n, 2874)),
              children: [
                {
                  path: '',
                  component: () =>
                    Promise.all([n.e(736), n.e(638)]).then(n.bind(n, 3638)),
                },
              ],
            },
            {
              path: '/midata/demo',
              component: () =>
                Promise.all([n.e(736), n.e(874)]).then(n.bind(n, 2874)),
              children: [
                {
                  path: '',
                  component: () =>
                    Promise.all([n.e(736), n.e(64), n.e(684)]).then(
                      n.bind(n, 5970),
                    ),
                  children: [],
                },
              ],
            },
            {
              path: '/midata/login',
              component: () =>
                Promise.all([n.e(736), n.e(874)]).then(n.bind(n, 2874)),
              children: [
                {
                  path: '',
                  component: () =>
                    Promise.all([n.e(736), n.e(64), n.e(219)]).then(
                      n.bind(n, 7520),
                    ),
                  children: [],
                },
              ],
            },
            {
              path: '/midata/dayView',
              component: () =>
                Promise.all([n.e(736), n.e(874)]).then(n.bind(n, 2874)),
              children: [
                {
                  path: '',
                  component: () =>
                    Promise.all([n.e(736), n.e(915)]).then(n.bind(n, 8915)),
                  children: [],
                },
              ],
            },
            {
              path: '/midata/weekly',
              component: () =>
                Promise.all([n.e(736), n.e(874)]).then(n.bind(n, 2874)),
              children: [
                {
                  path: '',
                  component: () =>
                    Promise.all([n.e(736), n.e(329)]).then(n.bind(n, 329)),
                  children: [],
                },
              ],
            },
            {
              path: '/midata/questionnairesOverview',
              component: () =>
                Promise.all([n.e(736), n.e(874)]).then(n.bind(n, 2874)),
              children: [
                {
                  path: '',
                  component: () =>
                    Promise.all([n.e(736), n.e(64), n.e(891)]).then(
                      n.bind(n, 311),
                    ),
                  children: [],
                },
              ],
            },
            {
              path: '/midata/questionnaire',
              component: () =>
                Promise.all([n.e(736), n.e(874)]).then(n.bind(n, 2874)),
              children: [
                {
                  path: '',
                  component: () =>
                    Promise.all([n.e(736), n.e(64), n.e(281)]).then(
                      n.bind(n, 5825),
                    ),
                  children: [],
                },
              ],
            },
            {
              path: '/:catchAll(.*)*',
              component: () =>
                Promise.all([n.e(736), n.e(737)]).then(n.bind(n, 3737)),
            },
            {
              path: '/:catchAll(.*)*',
              component: () =>
                Promise.all([n.e(736), n.e(737)]).then(n.bind(n, 3737)),
            },
          ],
          g = v,
          b = (0, p.BC)(function () {
            const e = l.r5,
              t = (0, l.p7)({
                scrollBehavior: () => ({ left: 0, top: 0 }),
                routes: g,
                history: e('/'),
              });
            return t;
          });
        async function y(e, t) {
          const n = e(h);
          n.use(o.Z, t);
          const r = 'function' === typeof f ? await f({}) : f;
          n.use(r);
          const a = (0, i.Xl)(
            'function' === typeof b ? await b({ store: r }) : b,
          );
          return (
            r.use(({ store: e }) => {
              e.router = a;
            }),
            { app: n, store: r, router: a }
          );
        }
        var w = n(4328),
          P = n(6950);
        const O = {
            config: { screen: { bodyClasses: !0 }, notify: {} },
            plugins: { Notify: w.Z, Loading: P.Z },
          },
          j = '/',
          A = /\/\//,
          F = (e) => (j + e).replace(A, '/');
        async function L({ app: e, router: t, store: n }, r) {
          let o = !1;
          const i = (e) => {
              try {
                return F(t.resolve(e).href);
              } catch (n) {}
              return Object(e) === e ? null : e;
            },
            a = (e) => {
              if (((o = !0), 'string' === typeof e && /^https?:\/\//.test(e)))
                return void (window.location.href = e);
              const t = i(e);
              null !== t &&
                ((window.location.href = t), window.location.reload());
            },
            s = window.location.href.replace(window.location.origin, '');
          for (let c = 0; !1 === o && c < r.length; c++)
            try {
              await r[c]({
                app: e,
                router: t,
                store: n,
                ssrContext: null,
                redirect: a,
                urlPath: s,
                publicPath: j,
              });
            } catch (l) {
              return l && l.url
                ? void a(l.url)
                : void console.error('[Quasar] boot error:', l);
            }
          !0 !== o && (e.use(t), e.mount('#q-app'));
        }
        y(r.ri, O).then((e) => {
          const [t, r] =
            void 0 !== Promise.allSettled
              ? [
                  'allSettled',
                  (e) =>
                    e.map((e) => {
                      if ('rejected' !== e.status) return e.value.default;
                      console.error('[Quasar] boot error:', e.reason);
                    }),
                ]
              : ['all', (e) => e.map((e) => e.default)];
          return Promise[t]([
            Promise.resolve().then(n.bind(n, 1087)),
            Promise.resolve().then(n.bind(n, 5631)),
          ]).then((t) => {
            const n = r(t).filter((e) => 'function' === typeof e);
            L(e, n);
          });
        });
      },
      5631: (e, t, n) => {
        'use strict';
        n.r(t), n.d(t, { default: () => c });
        var r = n(3340),
          o = (n(7966), n(7807)),
          i = n(8726),
          a = n(4927),
          s = n(9929),
          l = n(7503);
        const c = (0, r.xr)(({ app: e }) => {
          o.Z.registerLanguage('javascript', a.Z),
            o.Z.registerLanguage('xml', s.Z),
            o.Z.registerLanguage('json', l.Z),
            e.use(i.Z);
        });
      },
      1087: (e, t, n) => {
        'use strict';
        n.r(t), n.d(t, { default: () => s, midata: () => a });
        var r = n(3340),
          o = n(2890);
        class i {
          constructor() {
            this.jsOnFhir = new o.b(
              'https://test.midata.coop',
              'mindschedule',
              'https://relaxed-bublanina-d3592e.netlify.app/',
            );
          }
          getJSonFhir() {
            return this.jsOnFhir;
          }
          isLoggedIn() {
            return this.jsOnFhir.isLoggedIn();
          }
          logout() {
            this.jsOnFhir.logout();
          }
          authenticate(e) {
            this.jsOnFhir.authenticate(e);
          }
          handleAuthResponse() {
            return this.jsOnFhir.handleAuthResponse();
          }
          loadAppointments() {
            return new Promise((e, t) => {
              this.jsOnFhir
                .search('Appointment')
                .then((n) => {
                  var r;
                  if (n) {
                    const t =
                      (null === (r = n.entry) || void 0 === r
                        ? void 0
                        : r.map((e) => e.resource)) || [];
                    e(t);
                  } else t('No results found');
                })
                .catch((e) => t(e));
            });
          }
          loadQuestionnaireByTitle(e) {
            return new Promise((t, n) => {
              this.jsOnFhir
                .search('Questionnaire')
                .then((r) => {
                  var o;
                  if (r) {
                    const i =
                      (null === (o = r.entry) || void 0 === o
                        ? void 0
                        : o.map((e) => e.resource)) || [];
                    console.log('Quets: ', i);
                    const a = i.find((t) => t.title === e);
                    a ? t(a) : n('No questionnaire found with the given title');
                  } else n('No results found');
                })
                .catch((e) => n(e));
            });
          }
          loadQuestionnaire() {
            return new Promise((e, t) => {
              this.jsOnFhir
                .search('Questionnaire')
                .then((n) => {
                  var r;
                  if (n) {
                    const t =
                      (null === (r = n.entry) || void 0 === r
                        ? void 0
                        : r.map((e) => e.resource)) || [];
                    e(t);
                  } else t('No results found');
                })
                .catch((e) => t(e));
            });
          }
          getPatientResource() {
            return new Promise((e, t) => {
              this.jsOnFhir
                .getResource('Patient', this.jsOnFhir.getUserId())
                .then((n) => {
                  'Patient' === n.resourceType
                    ? e(n)
                    : t('No Patient resource found');
                })
                .catch((e) => t(e));
            });
          }
          createObservation() {
            console.log('Creating...');
          }
        }
        const a = new i(),
          s = (0, r.xr)(({ app: e }) => {
            e.config.globalProperties.$midata = a;
          });
      },
      7798: (e, t, n) => {
        'use strict';
        n.d(t, { L: () => d });
        var r = n(1809),
          o = n(5054),
          i = n(4328),
          a = n(985),
          s = n(1087),
          l = n(9835),
          c = n(499),
          u = function (e, t, n, r) {
            function o(e) {
              return e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  });
            }
            return new (n || (n = Promise))(function (n, i) {
              function a(e) {
                try {
                  l(r.next(e));
                } catch (t) {
                  i(t);
                }
              }
              function s(e) {
                try {
                  l(r['throw'](e));
                } catch (t) {
                  i(t);
                }
              }
              function l(e) {
                e.done ? n(e.value) : o(e.value).then(a, s);
              }
              l((r = r.apply(e, t || [])).next());
            });
          };
        const d = (0, r.Q_)('user', () => {
          const e = (0, a.XsL)('patientResource', {}),
            t = (0, a.XsL)('patientResourceVisible', !1),
            n = (0, a.XsL)('patientResourceExpanded', !1),
            r = (0, a.XsL)('appointmentRessources', []),
            d = (0, a.XsL)('currentDay', new Date());
          function h() {
            e.value = {};
          }
          function p() {
            return u(this, void 0, void 0, function* () {
              try {
                (e.value = yield s.midata.getPatientResource()),
                  (r.value = yield s.midata.loadAppointments());
              } catch (t) {
                throw (
                  (console.warn('Error while restoring from MIDATA: ', t), t)
                );
              }
            });
          }
          const m = (0, l.Fl)(() => {
            if (e.value.name)
              return (
                e.value.name[0].given.toString() + ' ' + e.value.name[0].family
              );
          });
          function f(e, t = 'Resource') {
            return u(this, void 0, void 0, function* () {
              try {
                yield (0, o.Z)(JSON.stringify(e, null, 2)),
                  i.Z.create({
                    message: `${t} kopiert`,
                    color: 'green',
                    position: 'top',
                    icon: 'announcement',
                  });
              } catch (n) {
                i.Z.create({
                  message: `Kopieren von ${t} fehlgeschlagen`,
                  color: 'red',
                  position: 'top',
                  icon: 'announcement',
                });
              }
            });
          }
          function v(e) {
            d.value = e;
          }
          const g = (0, c.iH)(!0);
          function b(e) {
            (g.value = e), console.log('set to: ', g.value);
          }
          return {
            patientResource: e,
            patientResourceVisible: t,
            patientResourceExpanded: n,
            fullPatientName: m,
            appointmentRessources: r,
            currentDay: d,
            showPopup: g,
            deleteDataInStore: h,
            copyToClipBoard: f,
            restoreFromMidata: p,
            setDay: v,
            setShowPopup: b,
          };
        });
      },
      5819: () => {},
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = e),
    (() => {
      var e = [];
      n.O = (t, r, o, i) => {
        if (!r) {
          var a = 1 / 0;
          for (u = 0; u < e.length; u++) {
            for (var [r, o, i] = e[u], s = !0, l = 0; l < r.length; l++)
              (!1 & i || a >= i) && Object.keys(n.O).every((e) => n.O[e](r[l]))
                ? r.splice(l--, 1)
                : ((s = !1), i < a && (a = i));
            if (s) {
              e.splice(u--, 1);
              var c = o();
              void 0 !== c && (t = c);
            }
          }
          return t;
        }
        i = i || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
        e[u] = [r, o, i];
      };
    })(),
    (() => {
      n.n = (e) => {
        var t = e && e.__esModule ? () => e['default'] : () => e;
        return n.d(t, { a: t }), t;
      };
    })(),
    (() => {
      n.d = (e, t) => {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      };
    })(),
    (() => {
      (n.f = {}),
        (n.e = (e) =>
          Promise.all(
            Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []),
          ));
    })(),
    (() => {
      n.u = (e) =>
        'js/' +
        (64 === e ? 'chunk-common' : e) +
        '.' +
        {
          64: '0ee0c624',
          219: '008d42ff',
          281: '3930e911',
          329: '5f580cc9',
          540: '696c9299',
          638: '9a4ea1a5',
          684: '4aeb04e5',
          737: '812546ec',
          874: '60dcb002',
          891: '4bab6c3c',
          915: '0867b783',
        }[e] +
        '.js';
    })(),
    (() => {
      n.miniCssF = (e) =>
        'css/' +
        e +
        '.' +
        {
          219: 'b7248331',
          281: 'db7544f6',
          329: 'e9089b8d',
          540: '60e7fba5',
          638: '32a997eb',
          684: '3801a6ed',
          874: 'cc1f463a',
          891: 'db7544f6',
        }[e] +
        '.css';
    })(),
    (() => {
      n.g = (function () {
        if ('object' === typeof globalThis) return globalThis;
        try {
          return this || new Function('return this')();
        } catch (e) {
          if ('object' === typeof window) return window;
        }
      })();
    })(),
    (() => {
      n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    })(),
    (() => {
      var e = {},
        t = 'quasarapp:';
      n.l = (r, o, i, a) => {
        if (e[r]) e[r].push(o);
        else {
          var s, l;
          if (void 0 !== i)
            for (
              var c = document.getElementsByTagName('script'), u = 0;
              u < c.length;
              u++
            ) {
              var d = c[u];
              if (
                d.getAttribute('src') == r ||
                d.getAttribute('data-webpack') == t + i
              ) {
                s = d;
                break;
              }
            }
          s ||
            ((l = !0),
            (s = document.createElement('script')),
            (s.charset = 'utf-8'),
            (s.timeout = 120),
            n.nc && s.setAttribute('nonce', n.nc),
            s.setAttribute('data-webpack', t + i),
            (s.src = r)),
            (e[r] = [o]);
          var h = (t, n) => {
              (s.onerror = s.onload = null), clearTimeout(p);
              var o = e[r];
              if (
                (delete e[r],
                s.parentNode && s.parentNode.removeChild(s),
                o && o.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              h.bind(null, void 0, { type: 'timeout', target: s }),
              12e4,
            );
          (s.onerror = h.bind(null, s.onerror)),
            (s.onload = h.bind(null, s.onload)),
            l && document.head.appendChild(s);
        }
      };
    })(),
    (() => {
      n.r = (e) => {
        'undefined' !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      };
    })(),
    (() => {
      n.p = '/';
    })(),
    (() => {
      if ('undefined' !== typeof document) {
        var e = (e, t, n, r, o) => {
            var i = document.createElement('link');
            (i.rel = 'stylesheet'), (i.type = 'text/css');
            var a = (n) => {
              if (((i.onerror = i.onload = null), 'load' === n.type)) r();
              else {
                var a = n && ('load' === n.type ? 'missing' : n.type),
                  s = (n && n.target && n.target.href) || t,
                  l = new Error(
                    'Loading CSS chunk ' + e + ' failed.\n(' + s + ')',
                  );
                (l.code = 'CSS_CHUNK_LOAD_FAILED'),
                  (l.type = a),
                  (l.request = s),
                  i.parentNode.removeChild(i),
                  o(l);
              }
            };
            return (
              (i.onerror = i.onload = a),
              (i.href = t),
              n
                ? n.parentNode.insertBefore(i, n.nextSibling)
                : document.head.appendChild(i),
              i
            );
          },
          t = (e, t) => {
            for (
              var n = document.getElementsByTagName('link'), r = 0;
              r < n.length;
              r++
            ) {
              var o = n[r],
                i = o.getAttribute('data-href') || o.getAttribute('href');
              if ('stylesheet' === o.rel && (i === e || i === t)) return o;
            }
            var a = document.getElementsByTagName('style');
            for (r = 0; r < a.length; r++) {
              (o = a[r]), (i = o.getAttribute('data-href'));
              if (i === e || i === t) return o;
            }
          },
          r = (r) =>
            new Promise((o, i) => {
              var a = n.miniCssF(r),
                s = n.p + a;
              if (t(a, s)) return o();
              e(r, s, null, o, i);
            }),
          o = { 143: 0 };
        n.f.miniCss = (e, t) => {
          var n = {
            219: 1,
            281: 1,
            329: 1,
            540: 1,
            638: 1,
            684: 1,
            874: 1,
            891: 1,
          };
          o[e]
            ? t.push(o[e])
            : 0 !== o[e] &&
              n[e] &&
              t.push(
                (o[e] = r(e).then(
                  () => {
                    o[e] = 0;
                  },
                  (t) => {
                    throw (delete o[e], t);
                  },
                )),
              );
        };
      }
    })(),
    (() => {
      var e = { 143: 0 };
      (n.f.j = (t, r) => {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else if (281 != t) {
            var i = new Promise((n, r) => (o = e[t] = [n, r]));
            r.push((o[2] = i));
            var a = n.p + n.u(t),
              s = new Error(),
              l = (r) => {
                if (n.o(e, t) && ((o = e[t]), 0 !== o && (e[t] = void 0), o)) {
                  var i = r && ('load' === r.type ? 'missing' : r.type),
                    a = r && r.target && r.target.src;
                  (s.message =
                    'Loading chunk ' + t + ' failed.\n(' + i + ': ' + a + ')'),
                    (s.name = 'ChunkLoadError'),
                    (s.type = i),
                    (s.request = a),
                    o[1](s);
                }
              };
            n.l(a, l, 'chunk-' + t, t);
          } else e[t] = 0;
      }),
        (n.O.j = (t) => 0 === e[t]);
      var t = (t, r) => {
          var o,
            i,
            [a, s, l] = r,
            c = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (o in s) n.o(s, o) && (n.m[o] = s[o]);
            if (l) var u = l(n);
          }
          for (t && t(r); c < a.length; c++)
            (i = a[c]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return n.O(u);
        },
        r = (globalThis['webpackChunkquasarapp'] =
          globalThis['webpackChunkquasarapp'] || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = n.O(void 0, [736], () => n(994));
  r = n.O(r);
})();
