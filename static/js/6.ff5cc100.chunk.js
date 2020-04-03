/*! For license information please see 6.ff5cc100.chunk.js.LICENSE.txt */
(this.webpackJsonpbaugit = this.webpackJsonpbaugit || []).push([
  [6],
  {
    60: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i = (r = n(2)) && 'object' === typeof r && 'default' in r ? r.default : r;
      n(56);
      var o,
        a,
        s,
        c,
        u = n(1),
        f = n(22),
        p = n(28),
        l = n(27),
        m =
          (((o = {})['trace started'] = 'Trace {$traceName} was started before.'),
          (o['trace stopped'] = 'Trace {$traceName} is not running.'),
          (o['no window'] = 'Window is not available.'),
          (o['no app id'] = 'App id is not available.'),
          (o['no project id'] = 'Project id is not available.'),
          (o['no api key'] = 'Api key is not available.'),
          (o['invalid cc log'] = 'Attempted to queue invalid cc event'),
          (o['FB not default'] =
            'Performance can only start when Firebase app instance is the default one.'),
          (o['RC response not ok'] = 'RC response is not ok'),
          (o['invalid attribute name'] = 'Attribute name {$attributeName} is invalid.'),
          (o['invalid attribute value'] = 'Attribute value {$attributeValue} is invalid.'),
          (o['invalide custom metric name'] = 'Custom metric name {$customMetricName} is invalid'),
          o),
        g = new f.ErrorFactory('performance', 'Performance', m),
        h = (function () {
          function t(t) {
            if (((this.window = t), !t)) throw g.create('no window');
            (this.performance = t.performance),
              (this.PerformanceObserver = t.PerformanceObserver),
              (this.windowLocation = t.location),
              (this.navigator = t.navigator),
              (this.document = t.document),
              this.navigator &&
                this.navigator.cookieEnabled &&
                (this.localStorage = t.localStorage),
              t.perfMetrics &&
                t.perfMetrics.onFirstInputDelay &&
                (this.onFirstInputDelay = t.perfMetrics.onFirstInputDelay);
          }
          return (
            (t.prototype.getUrl = function () {
              return this.windowLocation.href.split('?')[0];
            }),
            (t.prototype.mark = function (t) {
              this.performance && this.performance.mark && this.performance.mark(t);
            }),
            (t.prototype.measure = function (t, e, n) {
              this.performance && this.performance.measure && this.performance.measure(t, e, n);
            }),
            (t.prototype.getEntriesByType = function (t) {
              return this.performance && this.performance.getEntriesByType
                ? this.performance.getEntriesByType(t)
                : [];
            }),
            (t.prototype.getEntriesByName = function (t) {
              return this.performance && this.performance.getEntriesByName
                ? this.performance.getEntriesByName(t)
                : [];
            }),
            (t.prototype.getTimeOrigin = function () {
              return (
                this.performance &&
                (this.performance.timeOrigin || this.performance.timing.navigationStart)
              );
            }),
            (t.prototype.requiredApisAvailable = function () {
              return !!(fetch && Promise && this.navigator && this.navigator.cookieEnabled);
            }),
            (t.prototype.setupObserver = function (t, e) {
              this.PerformanceObserver &&
                new this.PerformanceObserver(function (t) {
                  for (var n = 0, r = t.getEntries(); n < r.length; n++) {
                    var i = r[n];
                    e(i);
                  }
                }).observe({ entryTypes: [t] });
            }),
            (t.getInstance = function () {
              return void 0 === a && (a = new t(s)), a;
            }),
            t
          );
        })();
      var d,
        v,
        _ = (function () {
          function t() {
            (this.instrumentationEnabled = !0),
              (this.dataCollectionEnabled = !0),
              (this.loggingEnabled = !1),
              (this.tracesSamplingRate = 1),
              (this.networkRequestsSamplingRate = 1),
              (this.logEndPointUrl =
                'https://firebaselogging.googleapis.com/v0cc/log?format=json_proto'),
              (this.logSource = 462),
              (this.logTraceAfterSampling = !1),
              (this.logNetworkAfterSampling = !1),
              (this.configTimeToLive = 12);
          }
          return (
            (t.prototype.getAppId = function () {
              var t =
                this.firebaseAppInstance &&
                this.firebaseAppInstance.options &&
                this.firebaseAppInstance.options.appId;
              if (!t) throw g.create('no app id');
              return t;
            }),
            (t.prototype.getProjectId = function () {
              var t =
                this.firebaseAppInstance &&
                this.firebaseAppInstance.options &&
                this.firebaseAppInstance.options.projectId;
              if (!t) throw g.create('no project id');
              return t;
            }),
            (t.prototype.getApiKey = function () {
              var t =
                this.firebaseAppInstance &&
                this.firebaseAppInstance.options &&
                this.firebaseAppInstance.options.apiKey;
              if (!t) throw g.create('no api key');
              return t;
            }),
            (t.getInstance = function () {
              return void 0 === c && (c = new t()), c;
            }),
            t
          );
        })();
      function b() {
        return d;
      }
      !(function (t) {
        (t[(t.UNKNOWN = 0)] = 'UNKNOWN'),
          (t[(t.VISIBLE = 1)] = 'VISIBLE'),
          (t[(t.HIDDEN = 2)] = 'HIDDEN');
      })(v || (v = {}));
      var y = ['firebase_', 'google_', 'ga_'],
        I = new RegExp('^[a-zA-Z]\\w*$');
      function T() {
        var t = h.getInstance().navigator;
        return 'serviceWorker' in t ? (t.serviceWorker.controller ? 2 : 3) : 1;
      }
      function E() {
        switch (h.getInstance().document.visibilityState) {
          case 'visible':
            return v.VISIBLE;
          case 'hidden':
            return v.HIDDEN;
          default:
            return v.UNKNOWN;
        }
      }
      function w() {
        var t = h.getInstance().navigator.connection;
        switch (t && t.effectiveType) {
          case 'slow-2g':
            return 1;
          case '2g':
            return 2;
          case '3g':
            return 3;
          case '4g':
            return 4;
          default:
            return 0;
        }
      }
      var A = new p.Logger('Performance');
      A.logLevel = p.LogLevel.INFO;
      var S = !0;
      function M(t) {
        var e = (function () {
          var t = h.getInstance().localStorage;
          if (!t) return;
          var e = t.getItem('@firebase/performance/configexpire');
          if (!e || ((n = e), !(Number(n) > Date.now()))) return;
          var n;
          var r = t.getItem('@firebase/performance/config');
          if (!r) return;
          try {
            return JSON.parse(r);
          } catch (o) {
            return;
          }
        })();
        return e
          ? (N(e), Promise.resolve())
          : (function (t) {
              return (function () {
                var t = _.getInstance().installationsService.getToken();
                return t.then(function (t) {}), t;
              })()
                .then(function (e) {
                  var n =
                      'https://firebaseremoteconfig.googleapis.com/v1/projects/' +
                      _.getInstance().getProjectId() +
                      '/namespaces/fireperf:fetch?key=' +
                      _.getInstance().getApiKey(),
                    r = new Request(n, {
                      method: 'POST',
                      headers: { Authorization: 'FIREBASE_INSTALLATIONS_AUTH ' + e },
                      body: JSON.stringify({
                        app_instance_id: t,
                        app_instance_id_token: e,
                        app_id: _.getInstance().getAppId(),
                        app_version: '0.2.36',
                        sdk_version: '0.0.1',
                      }),
                    });
                  return fetch(r).then(function (t) {
                    if (t.ok) return t.json();
                    throw g.create('RC response not ok');
                  });
                })
                .catch(function () {
                  A.info('Could not fetch config, will use default configs');
                });
            })(t)
              .then(function (t) {
                return N(t);
              })
              .then(
                function (t) {
                  return (function (t) {
                    var e = h.getInstance().localStorage;
                    if (!t || !e) return;
                    e.setItem('@firebase/performance/config', JSON.stringify(t)),
                      e.setItem(
                        '@firebase/performance/configexpire',
                        String(Date.now() + 60 * _.getInstance().configTimeToLive * 60 * 1e3),
                      );
                  })(t);
                },
                function () {},
              );
      }
      function N(t) {
        if (!t) return t;
        var e = _.getInstance(),
          n = t.entries || {};
        return (
          void 0 !== n.fpr_enabled
            ? (e.loggingEnabled = 'true' === String(n.fpr_enabled))
            : (e.loggingEnabled = S),
          n.fpr_log_source && (e.logSource = Number(n.fpr_log_source)),
          n.fpr_log_endpoint_url && (e.logEndPointUrl = n.fpr_log_endpoint_url),
          void 0 !== n.fpr_vc_network_request_sampling_rate &&
            (e.networkRequestsSamplingRate = Number(n.fpr_vc_network_request_sampling_rate)),
          void 0 !== n.fpr_vc_trace_sampling_rate &&
            (e.tracesSamplingRate = Number(n.fpr_vc_trace_sampling_rate)),
          (e.logTraceAfterSampling = k(e.tracesSamplingRate)),
          (e.logNetworkAfterSampling = k(e.networkRequestsSamplingRate)),
          t
        );
      }
      function k(t) {
        return Math.random() <= t;
      }
      var O,
        P = 1;
      function R() {
        return (
          (P = 2),
          (O =
            O ||
            (function () {
              var t = h.getInstance().document;
              return new Promise(function (e) {
                t && 'complete' !== t.readyState
                  ? t.addEventListener('readystatechange', function n() {
                      'complete' === t.readyState &&
                        (t.removeEventListener('readystatechange', n), e());
                    })
                  : e();
              });
            })()
              .then(function () {
                return (function () {
                  var t = _.getInstance().installationsService.getId();
                  return (
                    t.then(function (t) {
                      d = t;
                    }),
                    t
                  );
                })();
              })
              .then(function (t) {
                return M(t);
              })
              .then(
                function () {
                  return U();
                },
                function () {
                  return U();
                },
              ))
        );
      }
      function U() {
        P = 3;
      }
      var B,
        F = 3,
        C = [],
        L = !1;
      function j() {
        L ||
          (!(function t(e) {
            setTimeout(function () {
              if (0 !== F) {
                if (!C.length) return t(1e4);
                var e = u.__spreadArrays(C);
                C = [];
                var n = e.map(function (t) {
                    return {
                      source_extension_json_proto3: t.message,
                      event_time_ms: String(t.eventTime),
                    };
                  }),
                  r = {
                    request_time_ms: String(Date.now()),
                    client_info: { client_type: 1, js_client_info: {} },
                    log_source: _.getInstance().logSource,
                    log_event: n,
                  };
                fetch(_.getInstance().logEndPointUrl, { method: 'POST', body: JSON.stringify(r) })
                  .then(function (t) {
                    return t.ok || A.info('Call to Firebase backend failed.'), t.json();
                  })
                  .then(function (e) {
                    var n = Number(e.next_request_wait_millis),
                      r = isNaN(n) ? 1e4 : Math.max(1e4, n);
                    (F = 3), t(r);
                  })
                  .catch(function () {
                    (C = u.__spreadArrays(e, C)), F--, A.info('Tries left: ' + F + '.'), t(1e4);
                  });
              }
            }, e);
          })(5500),
          (L = !0));
      }
      function D(t) {
        if (!t.eventTime || !t.message) throw g.create('invalid cc log');
        C = u.__spreadArrays(C, [t]);
      }
      function q(t, e) {
        B ||
          (B = (function (t) {
            return function () {
              for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
              var r = t.apply(void 0, e);
              D({ message: r, eventTime: Date.now() });
            };
          })(x)),
          B(t, e);
      }
      function W(t) {
        var e = _.getInstance();
        (!e.instrumentationEnabled && t.isAuto) ||
          ((e.dataCollectionEnabled || t.isAuto) &&
            h.getInstance().requiredApisAvailable() &&
            ((t.isAuto && E() !== v.VISIBLE) ||
              (e.loggingEnabled &&
                e.logTraceAfterSampling &&
                (3 === P
                  ? J(t)
                  : R().then(
                      function () {
                        return J(t);
                      },
                      function () {
                        return J(t);
                      },
                    )))));
      }
      function J(t) {
        b() &&
          setTimeout(function () {
            return q(t, 1);
          }, 0);
      }
      function x(t, e) {
        return 0 === e
          ? (function (t) {
              var e = {
                  url: t.url,
                  http_method: t.httpMethod || 0,
                  http_response_code: 200,
                  response_payload_bytes: t.responsePayloadBytes,
                  client_start_time_us: t.startTimeUs,
                  time_to_response_initiated_us: t.timeToResponseInitiatedUs,
                  time_to_response_completed_us: t.timeToResponseCompletedUs,
                },
                n = { application_info: V(), network_request_metric: e };
              return JSON.stringify(n);
            })(t)
          : (function (t) {
              var e = {
                name: t.name,
                is_auto: t.isAuto,
                client_start_time_us: t.startTimeUs,
                duration_us: t.durationUs,
              };
              0 !== Object.keys(t.counters).length && (e.counters = t.counters);
              var n = t.getAttributes();
              0 !== Object.keys(n).length && (e.custom_attributes = n);
              var r = { application_info: V(), trace_metric: e };
              return JSON.stringify(r);
            })(t);
      }
      function V() {
        return {
          google_app_id: _.getInstance().getAppId(),
          app_instance_id: b(),
          web_app_info: {
            sdk_version: '0.2.36',
            page_url: h.getInstance().getUrl(),
            service_worker_status: T(),
            visibility_state: E(),
            effective_connection_type: w(),
          },
          application_process_state: 0,
        };
      }
      var K = ['_fp', '_fcp', '_fid'];
      var $ = (function () {
        function t(t, e, n) {
          void 0 === e && (e = !1),
            (this.name = t),
            (this.isAuto = e),
            (this.state = 1),
            (this.customAttributes = {}),
            (this.counters = {}),
            (this.api = h.getInstance()),
            (this.randomId = Math.floor(1e6 * Math.random())),
            this.isAuto ||
              ((this.traceStartMark = 'FB-PERF-TRACE-START-' + this.randomId + '-' + this.name),
              (this.traceStopMark = 'FB-PERF-TRACE-STOP-' + this.randomId + '-' + this.name),
              (this.traceMeasure = n || 'FB-PERF-TRACE-MEASURE-' + this.randomId + '-' + this.name),
              n && this.calculateTraceMetrics());
        }
        return (
          (t.prototype.start = function () {
            if (1 !== this.state) throw g.create('trace started', { traceName: this.name });
            this.api.mark(this.traceStartMark), (this.state = 2);
          }),
          (t.prototype.stop = function () {
            if (2 !== this.state) throw g.create('trace stopped', { traceName: this.name });
            (this.state = 3),
              this.api.mark(this.traceStopMark),
              this.api.measure(this.traceMeasure, this.traceStartMark, this.traceStopMark),
              this.calculateTraceMetrics(),
              W(this);
          }),
          (t.prototype.record = function (t, e, n) {
            if (
              ((this.durationUs = Math.floor(1e3 * e)),
              (this.startTimeUs = Math.floor(1e3 * t)),
              n && n.attributes && (this.customAttributes = u.__assign({}, n.attributes)),
              n && n.metrics)
            )
              for (var r = 0, i = Object.keys(n.metrics); r < i.length; r++) {
                var o = i[r];
                isNaN(Number(n.metrics[o])) ||
                  (this.counters[o] = Number(Math.floor(n.metrics[o])));
              }
            W(this);
          }),
          (t.prototype.incrementMetric = function (t, e) {
            void 0 === e && (e = 1),
              void 0 === this.counters[t] && this.putMetric(t, 0),
              (this.counters[t] += e);
          }),
          (t.prototype.putMetric = function (t, e) {
            if (
              !(function (t, e) {
                return (
                  !(0 === t.length || t.length > 100) &&
                  ((e && e.startsWith('_wt_') && K.indexOf(t) > -1) || !t.startsWith('_'))
                );
              })(t, this.name)
            )
              throw g.create('invalide custom metric name', { customMetricName: t });
            this.counters[t] = e;
          }),
          (t.prototype.getMetric = function (t) {
            return this.counters[t] || 0;
          }),
          (t.prototype.putAttribute = function (t, e) {
            var n = (function (t) {
                return (
                  !(0 === t.length || t.length > 40) &&
                  !y.some(function (e) {
                    return t.startsWith(e);
                  }) &&
                  !!t.match(I)
                );
              })(t),
              r = (function (t) {
                return 0 !== t.length && t.length <= 100;
              })(e);
            if (n && r) this.customAttributes[t] = e;
            else {
              if (!n) throw g.create('invalid attribute name', { attributeName: t });
              if (!r) throw g.create('invalid attribute value', { attributeValue: e });
            }
          }),
          (t.prototype.getAttribute = function (t) {
            return this.customAttributes[t];
          }),
          (t.prototype.removeAttribute = function (t) {
            void 0 !== this.customAttributes[t] && delete this.customAttributes[t];
          }),
          (t.prototype.getAttributes = function () {
            return u.__assign({}, this.customAttributes);
          }),
          (t.prototype.setStartTime = function (t) {
            this.startTimeUs = t;
          }),
          (t.prototype.setDuration = function (t) {
            this.durationUs = t;
          }),
          (t.prototype.calculateTraceMetrics = function () {
            var t = this.api.getEntriesByName(this.traceMeasure),
              e = t && t[0];
            e &&
              ((this.durationUs = Math.floor(1e3 * e.duration)),
              (this.startTimeUs = Math.floor(1e3 * (e.startTime + this.api.getTimeOrigin()))));
          }),
          (t.createOobTrace = function (e, n, r) {
            var i = h.getInstance().getUrl();
            if (i) {
              var o = new t('_wt_' + i, !0),
                a = Math.floor(1e3 * h.getInstance().getTimeOrigin());
              o.setStartTime(a),
                e &&
                  e[0] &&
                  (o.setDuration(Math.floor(1e3 * e[0].duration)),
                  o.putMetric('domInteractive', Math.floor(1e3 * e[0].domInteractive)),
                  o.putMetric(
                    'domContentLoadedEventEnd',
                    Math.floor(1e3 * e[0].domContentLoadedEventEnd),
                  ),
                  o.putMetric('loadEventEnd', Math.floor(1e3 * e[0].loadEventEnd)));
              if (n) {
                var s = n.find(function (t) {
                  return 'first-paint' === t.name;
                });
                s && s.startTime && o.putMetric('_fp', Math.floor(1e3 * s.startTime));
                var c = n.find(function (t) {
                  return 'first-contentful-paint' === t.name;
                });
                c && c.startTime && o.putMetric('_fcp', Math.floor(1e3 * c.startTime)),
                  r && o.putMetric('_fid', Math.floor(1e3 * r));
              }
              W(o);
            }
          }),
          (t.createUserTimingTrace = function (e) {
            W(new t(e, !1, e));
          }),
          t
        );
      })();
      function H(t) {
        var e = t;
        if (e && void 0 !== e.responseStart) {
          var n = h.getInstance().getTimeOrigin(),
            r = Math.floor(1e3 * (e.startTime + n)),
            i = e.responseStart ? Math.floor(1e3 * (e.responseStart - e.startTime)) : void 0,
            o = Math.floor(1e3 * (e.responseEnd - e.startTime));
          !(function (t) {
            var e = _.getInstance();
            e.instrumentationEnabled &&
              t.url !== e.logEndPointUrl.split('?')[0] &&
              e.loggingEnabled &&
              e.logNetworkAfterSampling &&
              setTimeout(function () {
                return q(t, 0);
              }, 0);
          })({
            url: e.name && e.name.split('?')[0],
            responsePayloadBytes: e.transferSize,
            startTimeUs: r,
            timeToResponseInitiatedUs: i,
            timeToResponseCompletedUs: o,
          });
        }
      }
      function z() {
        b() &&
          (setTimeout(function () {
            return (function () {
              var t = h.getInstance(),
                e = t.getEntriesByType('navigation'),
                n = t.getEntriesByType('paint');
              if (t.onFirstInputDelay) {
                var r = setTimeout(function () {
                  $.createOobTrace(e, n), (r = void 0);
                }, 5e3);
                t.onFirstInputDelay(function (t) {
                  r && (clearTimeout(r), $.createOobTrace(e, n, t));
                });
              } else $.createOobTrace(e, n);
            })();
          }, 0),
          setTimeout(function () {
            return (function () {
              for (
                var t = h.getInstance(), e = t.getEntriesByType('resource'), n = 0, r = e;
                n < r.length;
                n++
              ) {
                H(r[n]);
              }
              t.setupObserver('resource', H);
            })();
          }, 0),
          setTimeout(function () {
            return (function () {
              for (
                var t = h.getInstance(), e = t.getEntriesByType('measure'), n = 0, r = e;
                n < r.length;
                n++
              ) {
                Z(r[n]);
              }
              t.setupObserver('measure', Z);
            })();
          }, 0));
      }
      function Z(t) {
        var e = t.name;
        'FB-PERF-TRACE-MEASURE' !== e.substring(0, 'FB-PERF-TRACE-MEASURE'.length) &&
          $.createUserTimingTrace(e);
      }
      var G = (function () {
        function t(t) {
          (this.app = t),
            h.getInstance().requiredApisAvailable()
              ? (j(), R().then(z, z))
              : A.info(
                  'Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.',
                );
        }
        return (
          (t.prototype.trace = function (t) {
            return new $(t);
          }),
          Object.defineProperty(t.prototype, 'instrumentationEnabled', {
            get: function () {
              return _.getInstance().instrumentationEnabled;
            },
            set: function (t) {
              _.getInstance().instrumentationEnabled = t;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'dataCollectionEnabled', {
            get: function () {
              return _.getInstance().dataCollectionEnabled;
            },
            set: function (t) {
              _.getInstance().dataCollectionEnabled = t;
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })();
      function Q(t) {
        var e = function (t, e) {
          if ('[DEFAULT]' !== t.name) throw g.create('FB not default');
          if ('undefined' === typeof window) throw g.create('no window');
          return (
            (function (t) {
              s = t;
            })(window),
            (_.getInstance().firebaseAppInstance = t),
            (_.getInstance().installationsService = e),
            new G(t)
          );
        };
        t.INTERNAL.registerComponent(
          new l.Component(
            'performance',
            function (t) {
              var n = t.getProvider('app').getImmediate(),
                r = t.getProvider('installations').getImmediate();
              return e(n, r);
            },
            'PUBLIC',
          ),
        ),
          t.registerVersion('@firebase/performance', '0.2.36');
      }
      Q(i), (e.registerPerformance = Q);
    },
    64: function (t, e, n) {
      'use strict';
      n.r(e);
      n(60);
    },
  },
]);
//# sourceMappingURL=6.ff5cc100.chunk.js.map
