/*! For license information please see 5.b2181b96.chunk.js.LICENSE.txt */
(this.webpackJsonpbaugit = this.webpackJsonpbaugit || []).push([
  [5],
  {
    59: function (e, t, n) {
      'use strict';
      var r,
        i = (r = n(2)) && 'object' === typeof r && 'default' in r ? r.default : r,
        o = n(1),
        a = n(27),
        s = {
          OK: 'ok',
          CANCELLED: 'cancelled',
          UNKNOWN: 'unknown',
          INVALID_ARGUMENT: 'invalid-argument',
          DEADLINE_EXCEEDED: 'deadline-exceeded',
          NOT_FOUND: 'not-found',
          ALREADY_EXISTS: 'already-exists',
          PERMISSION_DENIED: 'permission-denied',
          UNAUTHENTICATED: 'unauthenticated',
          RESOURCE_EXHAUSTED: 'resource-exhausted',
          FAILED_PRECONDITION: 'failed-precondition',
          ABORTED: 'aborted',
          OUT_OF_RANGE: 'out-of-range',
          UNIMPLEMENTED: 'unimplemented',
          INTERNAL: 'internal',
          UNAVAILABLE: 'unavailable',
          DATA_LOSS: 'data-loss',
        },
        u = (function (e) {
          function t(n, r, i) {
            var o = e.call(this, r) || this;
            return Object.setPrototypeOf(o, t.prototype), (o.code = n), (o.details = i), o;
          }
          return o.__extends(t, e), t;
        })(Error);
      var c = (function () {
        function e(e, t) {
          var n = this;
          (this.auth = null),
            (this.messaging = null),
            (this.auth = e.getImmediate({ optional: !0 })),
            (this.messaging = t.getImmediate({ optional: !0 })),
            this.auth ||
              e.get().then(
                function (e) {
                  return (n.auth = e);
                },
                function () {},
              ),
            this.messaging ||
              t.get().then(
                function (e) {
                  return (n.messaging = e);
                },
                function () {},
              );
        }
        return (
          (e.prototype.getAuthToken = function () {
            return o.__awaiter(this, void 0, void 0, function () {
              var e;
              return o.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (!this.auth) return [2, void 0];
                    t.label = 1;
                  case 1:
                    return t.trys.push([1, 3, , 4]), [4, this.auth.getToken()];
                  case 2:
                    return (e = t.sent()) ? [2, e.accessToken] : [2, void 0];
                  case 3:
                    return t.sent(), [2, void 0];
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.getInstanceIdToken = function () {
            return o.__awaiter(this, void 0, void 0, function () {
              return o.__generator(this, function (e) {
                if (
                  !this.messaging ||
                  !('Notification' in self) ||
                  'granted' !== Notification.permission
                )
                  return [2, void 0];
                try {
                  return [2, this.messaging.getToken()];
                } catch (t) {
                  return [2, void 0];
                }
                return [2];
              });
            });
          }),
          (e.prototype.getContext = function () {
            return o.__awaiter(this, void 0, void 0, function () {
              var e, t;
              return o.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.getAuthToken()];
                  case 1:
                    return (e = n.sent()), [4, this.getInstanceIdToken()];
                  case 2:
                    return (t = n.sent()), [2, { authToken: e, instanceIdToken: t }];
                }
              });
            });
          }),
          e
        );
      })();
      function d(e, t) {
        var n = {};
        for (var r in e) e.hasOwnProperty(r) && (n[r] = t(e[r]));
        return n;
      }
      var l = (function () {
        function e() {}
        return (
          (e.prototype.encode = function (e) {
            var t = this;
            if (null == e) return null;
            if ((e instanceof Number && (e = e.valueOf()), 'number' === typeof e && isFinite(e)))
              return e;
            if (!0 === e || !1 === e) return e;
            if ('[object String]' === Object.prototype.toString.call(e)) return e;
            if (Array.isArray(e))
              return e.map(function (e) {
                return t.encode(e);
              });
            if ('function' === typeof e || 'object' === typeof e)
              return d(e, function (e) {
                return t.encode(e);
              });
            throw new Error('Data cannot be encoded in JSON: ' + e);
          }),
          (e.prototype.decode = function (e) {
            var t = this;
            if (null == e) return e;
            if (e['@type'])
              switch (e['@type']) {
                case 'type.googleapis.com/google.protobuf.Int64Value':
                case 'type.googleapis.com/google.protobuf.UInt64Value':
                  var n = Number(e.value);
                  if (isNaN(n)) throw new Error('Data cannot be decoded from JSON: ' + e);
                  return n;
                default:
                  throw new Error('Data cannot be decoded from JSON: ' + e);
              }
            return Array.isArray(e)
              ? e.map(function (e) {
                  return t.decode(e);
                })
              : 'function' === typeof e || 'object' === typeof e
              ? d(e, function (e) {
                  return t.decode(e);
                })
              : e;
          }),
          e
        );
      })();
      var f = (function () {
        function e(e, t, n, r) {
          var i = this;
          void 0 === r && (r = 'us-central1'),
            (this.app_ = e),
            (this.region_ = r),
            (this.serializer = new l()),
            (this.emulatorOrigin = null),
            (this.INTERNAL = {
              delete: function () {
                return i.deleteService();
              },
            }),
            (this.contextProvider = new c(t, n)),
            (this.cancelAllRequests = new Promise(function (e) {
              i.deleteService = function () {
                return e();
              };
            }));
        }
        return (
          Object.defineProperty(e.prototype, 'app', {
            get: function () {
              return this.app_;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype._url = function (e) {
            var t = this.app_.options.projectId,
              n = this.region_;
            return null !== this.emulatorOrigin
              ? this.emulatorOrigin + '/' + t + '/' + n + '/' + e
              : 'https://' + n + '-' + t + '.cloudfunctions.net/' + e;
          }),
          (e.prototype.useFunctionsEmulator = function (e) {
            this.emulatorOrigin = e;
          }),
          (e.prototype.httpsCallable = function (e, t) {
            var n = this;
            return function (r) {
              return n.call(e, r, t || {});
            };
          }),
          (e.prototype.postJSON = function (e, t, n) {
            return o.__awaiter(this, void 0, void 0, function () {
              var r, i;
              return o.__generator(this, function (o) {
                switch (o.label) {
                  case 0:
                    n.append('Content-Type', 'application/json'), (o.label = 1);
                  case 1:
                    return (
                      o.trys.push([1, 3, , 4]),
                      [4, fetch(e, { method: 'POST', body: JSON.stringify(t), headers: n })]
                    );
                  case 2:
                    return (r = o.sent()), [3, 4];
                  case 3:
                    return o.sent(), [2, { status: 0, json: null }];
                  case 4:
                    (i = null), (o.label = 5);
                  case 5:
                    return o.trys.push([5, 7, , 8]), [4, r.json()];
                  case 6:
                    return (i = o.sent()), [3, 8];
                  case 7:
                    return o.sent(), [3, 8];
                  case 8:
                    return [2, { status: r.status, json: i }];
                }
              });
            });
          }),
          (e.prototype.call = function (e, t, n) {
            return o.__awaiter(this, void 0, void 0, function () {
              var r, i, a, c, d, l, f, p;
              return o.__generator(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (r = this._url(e)),
                      (t = this.serializer.encode(t)),
                      (i = { data: t }),
                      (a = new Headers()),
                      [4, this.contextProvider.getContext()]
                    );
                  case 1:
                    return (
                      (c = o.sent()).authToken &&
                        a.append('Authorization', 'Bearer ' + c.authToken),
                      c.instanceIdToken &&
                        a.append('Firebase-Instance-ID-Token', c.instanceIdToken),
                      (d = n.timeout || 7e4),
                      [
                        4,
                        Promise.race([
                          this.postJSON(r, i, a),
                          ((h = d),
                          new Promise(function (e, t) {
                            setTimeout(function () {
                              t(new u('deadline-exceeded', 'deadline-exceeded'));
                            }, h);
                          })),
                          this.cancelAllRequests,
                        ]),
                      ]
                    );
                  case 2:
                    if (!(l = o.sent()))
                      throw new u('cancelled', 'Firebase Functions instance was deleted.');
                    if (
                      (f = (function (e, t, n) {
                        var r = (function (e) {
                            if (e >= 200 && e < 300) return 'ok';
                            switch (e) {
                              case 0:
                                return 'internal';
                              case 400:
                                return 'invalid-argument';
                              case 401:
                                return 'unauthenticated';
                              case 403:
                                return 'permission-denied';
                              case 404:
                                return 'not-found';
                              case 409:
                                return 'aborted';
                              case 429:
                                return 'resource-exhausted';
                              case 499:
                                return 'cancelled';
                              case 500:
                                return 'internal';
                              case 501:
                                return 'unimplemented';
                              case 503:
                                return 'unavailable';
                              case 504:
                                return 'deadline-exceeded';
                            }
                            return 'unknown';
                          })(e),
                          i = r,
                          o = void 0;
                        try {
                          var a = t && t.error;
                          if (a) {
                            var c = a.status;
                            if ('string' === typeof c) {
                              if (!s[c]) return new u('internal', 'internal');
                              (r = s[c]), (i = c);
                            }
                            var d = a.message;
                            'string' === typeof d && (i = d),
                              void 0 !== (o = a.details) && (o = n.decode(o));
                          }
                        } catch (l) {}
                        return 'ok' === r ? null : new u(r, i, o);
                      })(l.status, l.json, this.serializer))
                    )
                      throw f;
                    if (!l.json) throw new u('internal', 'Response is not valid JSON object.');
                    if (
                      ('undefined' === typeof (p = l.json.data) && (p = l.json.result),
                      'undefined' === typeof p)
                    )
                      throw new u('internal', 'Response is missing data field.');
                    return [2, { data: this.serializer.decode(p) }];
                }
                var h;
              });
            });
          }),
          e
        );
      })();
      function p(e, t) {
        var n = e.getProvider('app').getImmediate(),
          r = e.getProvider('auth-internal'),
          i = e.getProvider('messaging');
        return new f(n, r, i, t);
      }
      !(function (e) {
        var t = { Functions: f };
        e.INTERNAL.registerComponent(
          new a.Component('functions', p, 'PUBLIC').setServiceProps(t).setMultipleInstances(!0),
        );
      })(i),
        i.registerVersion('@firebase/functions', '0.4.38');
    },
    63: function (e, t, n) {
      'use strict';
      n.r(t);
      n(59);
    },
  },
]);
//# sourceMappingURL=5.b2181b96.chunk.js.map
