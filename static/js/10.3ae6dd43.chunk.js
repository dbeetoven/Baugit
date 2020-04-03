/*! For license information please see 10.3ae6dd43.chunk.js.LICENSE.txt */
(this.webpackJsonpbaugit = this.webpackJsonpbaugit || []).push([
  [10],
  {
    68: function (e, t, r) {
      'use strict';
      r.r(t);
      var n = r(2),
        o = r.n(n),
        i = r(1),
        a = r(27),
        s = (function () {
          function e(e, t) {
            (this.code_ = O(e)),
              (this.message_ = 'Firebase Storage: ' + t),
              (this.serverResponse_ = null),
              (this.name_ = 'FirebaseError');
          }
          return (
            (e.prototype.codeProp = function () {
              return this.code;
            }),
            (e.prototype.codeEquals = function (e) {
              return O(e) === this.codeProp();
            }),
            (e.prototype.serverResponseProp = function () {
              return this.serverResponse_;
            }),
            (e.prototype.setServerResponseProp = function (e) {
              this.serverResponse_ = e;
            }),
            Object.defineProperty(e.prototype, 'name', {
              get: function () {
                return this.name_;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'code', {
              get: function () {
                return this.code_;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'message', {
              get: function () {
                return this.message_;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'serverResponse', {
              get: function () {
                return this.serverResponse_;
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })(),
        u = 'unknown',
        l = 'object-not-found',
        c = 'quota-exceeded',
        p = 'unauthenticated',
        h = 'unauthorized',
        f = 'retry-limit-exceeded',
        d = 'canceled',
        _ = 'invalid-url',
        v = 'invalid-default-bucket',
        m = 'no-default-bucket',
        g = 'cannot-slice-blob',
        b = 'server-file-wrong-size',
        y = 'no-download-url',
        w = 'invalid-argument',
        R = 'invalid-argument-count',
        k = 'app-deleted',
        T = 'invalid-root-operation',
        x = 'invalid-format',
        U = 'internal-error';
      function O(e) {
        return 'storage/' + e;
      }
      function P() {
        return new s(
          u,
          'An unknown error occurred, please check the error payload for server response.',
        );
      }
      function S() {
        return new s(d, 'User canceled the upload/download.');
      }
      function E() {
        return new s(g, 'Cannot slice blob for upload. Please retry the upload.');
      }
      function A() {
        return new s(y, 'The given file does not have any download URLs.');
      }
      function C(e, t, r) {
        return new s(w, 'Invalid argument in `' + t + '` at index ' + e + ': ' + r);
      }
      function W() {
        return new s(k, 'The Firebase app was deleted.');
      }
      function M(e, t) {
        return new s(x, "String does not match format '" + e + "': " + t);
      }
      function j(e) {
        throw new s(U, 'Internal error: ' + e);
      }
      var L = { RAW: 'raw', BASE64: 'base64', BASE64URL: 'base64url', DATA_URL: 'data_url' };
      function I(e) {
        switch (e) {
          case L.RAW:
          case L.BASE64:
          case L.BASE64URL:
          case L.DATA_URL:
            return;
          default:
            throw (
              'Expected one of the event types: [' +
              L.RAW +
              ', ' +
              L.BASE64 +
              ', ' +
              L.BASE64URL +
              ', ' +
              L.DATA_URL +
              '].'
            );
        }
      }
      var B = function (e, t) {
        (this.data = e), (this.contentType = t || null);
      };
      function q(e, t) {
        switch (e) {
          case L.RAW:
            return new B(N(t));
          case L.BASE64:
          case L.BASE64URL:
            return new B(H(e, t));
          case L.DATA_URL:
            return new B(
              (function (e) {
                var t = new z(e);
                return t.base64
                  ? H(L.BASE64, t.rest)
                  : (function (e) {
                      var t;
                      try {
                        t = decodeURIComponent(e);
                      } catch (r) {
                        throw M(L.DATA_URL, 'Malformed data URL.');
                      }
                      return N(t);
                    })(t.rest);
              })(t),
              new z(t).contentType,
            );
        }
        throw P();
      }
      function N(e) {
        for (var t = [], r = 0; r < e.length; r++) {
          var n = e.charCodeAt(r);
          if (n <= 127) t.push(n);
          else if (n <= 2047) t.push(192 | (n >> 6), 128 | (63 & n));
          else if (55296 === (64512 & n))
            if (r < e.length - 1 && 56320 === (64512 & e.charCodeAt(r + 1)))
              (n = 65536 | ((1023 & n) << 10) | (1023 & e.charCodeAt(++r))),
                t.push(
                  240 | (n >> 18),
                  128 | ((n >> 12) & 63),
                  128 | ((n >> 6) & 63),
                  128 | (63 & n),
                );
            else t.push(239, 191, 189);
          else
            56320 === (64512 & n)
              ? t.push(239, 191, 189)
              : t.push(224 | (n >> 12), 128 | ((n >> 6) & 63), 128 | (63 & n));
        }
        return new Uint8Array(t);
      }
      function H(e, t) {
        switch (e) {
          case L.BASE64:
            var r = -1 !== t.indexOf('-'),
              n = -1 !== t.indexOf('_');
            if (r || n)
              throw M(
                e,
                "Invalid character '" + (r ? '-' : '_') + "' found: is it base64url encoded?",
              );
            break;
          case L.BASE64URL:
            var o = -1 !== t.indexOf('+'),
              i = -1 !== t.indexOf('/');
            if (o || i)
              throw M(
                e,
                "Invalid character '" + (o ? '+' : '/') + "' found: is it base64 encoded?",
              );
            t = t.replace(/-/g, '+').replace(/_/g, '/');
        }
        var a;
        try {
          a = atob(t);
        } catch (l) {
          throw M(e, 'Invalid character found');
        }
        for (var s = new Uint8Array(a.length), u = 0; u < a.length; u++) s[u] = a.charCodeAt(u);
        return s;
      }
      var z = function (e) {
        (this.base64 = !1), (this.contentType = null);
        var t = e.match(/^data:([^,]+)?,/);
        if (null === t)
          throw M(L.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        var r = t[1] || null;
        null != r &&
          ((this.base64 =
            ((n = r),
            (o = ';base64'),
            n.length >= o.length && n.substring(n.length - o.length) === o)),
          (this.contentType = this.base64 ? r.substring(0, r.length - ';base64'.length) : r)),
          (this.rest = e.substring(e.indexOf(',') + 1));
        var n, o;
      };
      var D,
        F = { STATE_CHANGED: 'state_changed' },
        G = 'running',
        X = 'pausing',
        K = 'paused',
        Z = 'success',
        J = 'canceling',
        V = 'canceled',
        $ = 'error',
        Q = {
          RUNNING: 'running',
          PAUSED: 'paused',
          SUCCESS: 'success',
          CANCELED: 'canceled',
          ERROR: 'error',
        };
      function Y(e) {
        switch (e) {
          case G:
          case X:
          case J:
            return Q.RUNNING;
          case K:
            return Q.PAUSED;
          case Z:
            return Q.SUCCESS;
          case V:
            return Q.CANCELED;
          case $:
          default:
            return Q.ERROR;
        }
      }
      function ee(e) {
        return null != e;
      }
      function te(e) {
        return void 0 !== e;
      }
      function re(e) {
        return 'function' === typeof e;
      }
      function ne(e) {
        return 'object' === typeof e;
      }
      function oe(e) {
        return ne(e) && null !== e;
      }
      function ie(e) {
        return 'string' === typeof e || e instanceof String;
      }
      function ae(e) {
        return se(e) && Number.isInteger(e);
      }
      function se(e) {
        return 'number' === typeof e || e instanceof Number;
      }
      function ue(e) {
        return le() && e instanceof Blob;
      }
      function le() {
        return 'undefined' !== typeof Blob;
      }
      !(function (e) {
        (e[(e.NO_ERROR = 0)] = 'NO_ERROR'),
          (e[(e.NETWORK_ERROR = 1)] = 'NETWORK_ERROR'),
          (e[(e.ABORT = 2)] = 'ABORT');
      })(D || (D = {}));
      var ce = (function () {
          function e() {
            var e = this;
            (this.sent_ = !1),
              (this.xhr_ = new XMLHttpRequest()),
              (this.errorCode_ = D.NO_ERROR),
              (this.sendPromise_ = new Promise(function (t) {
                e.xhr_.addEventListener('abort', function () {
                  (e.errorCode_ = D.ABORT), t(e);
                }),
                  e.xhr_.addEventListener('error', function () {
                    (e.errorCode_ = D.NETWORK_ERROR), t(e);
                  }),
                  e.xhr_.addEventListener('load', function () {
                    t(e);
                  });
              }));
          }
          return (
            (e.prototype.send = function (e, t, r, n) {
              if (this.sent_) throw j('cannot .send() more than once');
              if (((this.sent_ = !0), this.xhr_.open(t, e, !0), ee(n)))
                for (var o in n)
                  n.hasOwnProperty(o) && this.xhr_.setRequestHeader(o, n[o].toString());
              return ee(r) ? this.xhr_.send(r) : this.xhr_.send(), this.sendPromise_;
            }),
            (e.prototype.getErrorCode = function () {
              if (!this.sent_) throw j('cannot .getErrorCode() before sending');
              return this.errorCode_;
            }),
            (e.prototype.getStatus = function () {
              if (!this.sent_) throw j('cannot .getStatus() before sending');
              try {
                return this.xhr_.status;
              } catch (e) {
                return -1;
              }
            }),
            (e.prototype.getResponseText = function () {
              if (!this.sent_) throw j('cannot .getResponseText() before sending');
              return this.xhr_.responseText;
            }),
            (e.prototype.abort = function () {
              this.xhr_.abort();
            }),
            (e.prototype.getResponseHeader = function (e) {
              return this.xhr_.getResponseHeader(e);
            }),
            (e.prototype.addUploadProgressListener = function (e) {
              ee(this.xhr_.upload) && this.xhr_.upload.addEventListener('progress', e);
            }),
            (e.prototype.removeUploadProgressListener = function (e) {
              ee(this.xhr_.upload) && this.xhr_.upload.removeEventListener('progress', e);
            }),
            e
          );
        })(),
        pe = (function () {
          function e() {}
          return (
            (e.prototype.createXhrIo = function () {
              return new ce();
            }),
            e
          );
        })();
      function he() {
        return 'undefined' !== typeof BlobBuilder
          ? BlobBuilder
          : 'undefined' !== typeof WebKitBlobBuilder
          ? WebKitBlobBuilder
          : void 0;
      }
      function fe() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = he();
        if (void 0 !== r) {
          for (var n = new r(), o = 0; o < e.length; o++) n.append(e[o]);
          return n.getBlob();
        }
        if (le()) return new Blob(e);
        throw Error("This browser doesn't seem to support creating Blobs");
      }
      var de = (function () {
          function e(e, t) {
            var r = 0,
              n = '';
            ue(e)
              ? ((this.data_ = e), (r = e.size), (n = e.type))
              : e instanceof ArrayBuffer
              ? (t
                  ? (this.data_ = new Uint8Array(e))
                  : ((this.data_ = new Uint8Array(e.byteLength)),
                    this.data_.set(new Uint8Array(e))),
                (r = this.data_.length))
              : e instanceof Uint8Array &&
                (t
                  ? (this.data_ = e)
                  : ((this.data_ = new Uint8Array(e.length)), this.data_.set(e)),
                (r = e.length)),
              (this.size_ = r),
              (this.type_ = n);
          }
          return (
            (e.prototype.size = function () {
              return this.size_;
            }),
            (e.prototype.type = function () {
              return this.type_;
            }),
            (e.prototype.slice = function (t, r) {
              if (ue(this.data_)) {
                var n = (function (e, t, r) {
                  return e.webkitSlice
                    ? e.webkitSlice(t, r)
                    : e.mozSlice
                    ? e.mozSlice(t, r)
                    : e.slice
                    ? e.slice(t, r)
                    : null;
                })(this.data_, t, r);
                return null === n ? null : new e(n);
              }
              return new e(new Uint8Array(this.data_.buffer, t, r - t), !0);
            }),
            (e.getBlob = function () {
              for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              if (le()) {
                var n = t.map(function (t) {
                  return t instanceof e ? t.data_ : t;
                });
                return new e(fe.apply(null, n));
              }
              var o = t.map(function (e) {
                  return ie(e) ? q(L.RAW, e).data : e.data_;
                }),
                i = 0;
              o.forEach(function (e) {
                i += e.byteLength;
              });
              var a = new Uint8Array(i),
                s = 0;
              return (
                o.forEach(function (e) {
                  for (var t = 0; t < e.length; t++) a[s++] = e[t];
                }),
                new e(a, !0)
              );
            }),
            (e.prototype.uploadData = function () {
              return this.data_;
            }),
            e
          );
        })(),
        _e = (function () {
          function e(e, t) {
            (this.bucket = e), (this.path_ = t);
          }
          return (
            Object.defineProperty(e.prototype, 'path', {
              get: function () {
                return this.path_;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'isRoot', {
              get: function () {
                return 0 === this.path.length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.fullServerUrl = function () {
              var e = encodeURIComponent;
              return '/b/' + e(this.bucket) + '/o/' + e(this.path);
            }),
            (e.prototype.bucketOnlyServerUrl = function () {
              return '/b/' + encodeURIComponent(this.bucket) + '/o';
            }),
            (e.makeFromBucketSpec = function (t) {
              var r;
              try {
                r = e.makeFromUrl(t);
              } catch (n) {
                return new e(t, '');
              }
              if ('' === r.path) return r;
              throw new s(v, "Invalid default bucket '" + t + "'.");
            }),
            (e.makeFromUrl = function (t) {
              var r = null;
              var n = new RegExp('^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$', 'i');
              for (
                var o = 'firebasestorage.googleapis.com'.replace(/[.]/g, '\\.'),
                  i = [
                    {
                      regex: n,
                      indices: { bucket: 1, path: 3 },
                      postModify: function (e) {
                        '/' === e.path.charAt(e.path.length - 1) &&
                          (e.path_ = e.path_.slice(0, -1));
                      },
                    },
                    {
                      regex: new RegExp(
                        '^https?://' + o + '/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-_]+)/o(/([^?#]*).*)?$',
                        'i',
                      ),
                      indices: { bucket: 1, path: 3 },
                      postModify: function (e) {
                        e.path_ = decodeURIComponent(e.path);
                      },
                    },
                  ],
                  a = 0;
                a < i.length;
                a++
              ) {
                var u = i[a],
                  l = u.regex.exec(t);
                if (l) {
                  var c = l[u.indices.bucket],
                    p = l[u.indices.path];
                  p || (p = ''), (r = new e(c, p)), u.postModify(r);
                  break;
                }
              }
              if (null == r)
                throw (function (e) {
                  return new s(_, "Invalid URL '" + e + "'.");
                })(t);
              return r;
            }),
            e
          );
        })();
      function ve(e) {
        var t, r;
        try {
          t = JSON.parse(e);
        } catch (n) {
          return null;
        }
        return ne((r = t)) && !Array.isArray(r) ? t : null;
      }
      function me(e, t) {
        var r = t
          .split('/')
          .filter(function (e) {
            return e.length > 0;
          })
          .join('/');
        return 0 === e.length ? r : e + '/' + r;
      }
      function ge(e) {
        var t = e.lastIndexOf('/', e.length - 2);
        return -1 === t ? e : e.slice(t + 1);
      }
      function be(e) {
        return 'https://firebasestorage.googleapis.com/v0' + e;
      }
      function ye(e) {
        var t = encodeURIComponent,
          r = '?';
        for (var n in e) {
          if (e.hasOwnProperty(n)) r = r + (t(n) + '=' + t(e[n])) + '&';
        }
        return (r = r.slice(0, -1));
      }
      function we(e, t) {
        return t;
      }
      var Re = function (e, t, r, n) {
          (this.server = e), (this.local = t || e), (this.writable = !!r), (this.xform = n || we);
        },
        ke = null;
      function Te() {
        if (ke) return ke;
        var e = [];
        e.push(new Re('bucket')),
          e.push(new Re('generation')),
          e.push(new Re('metageneration')),
          e.push(new Re('name', 'fullPath', !0));
        var t = new Re('name');
        (t.xform = function (e, t) {
          return (function (e) {
            return !ie(e) || e.length < 2 ? e : ge(e);
          })(t);
        }),
          e.push(t);
        var r = new Re('size');
        return (
          (r.xform = function (e, t) {
            return ee(t) ? Number(t) : t;
          }),
          e.push(r),
          e.push(new Re('timeCreated')),
          e.push(new Re('updated')),
          e.push(new Re('md5Hash', null, !0)),
          e.push(new Re('cacheControl', null, !0)),
          e.push(new Re('contentDisposition', null, !0)),
          e.push(new Re('contentEncoding', null, !0)),
          e.push(new Re('contentLanguage', null, !0)),
          e.push(new Re('contentType', null, !0)),
          e.push(new Re('metadata', 'customMetadata', !0)),
          (ke = e)
        );
      }
      function xe(e, t, r) {
        for (var n = { type: 'file' }, o = r.length, i = 0; i < o; i++) {
          var a = r[i];
          n[a.local] = a.xform(n, t[a.server]);
        }
        return (
          (function (e, t) {
            Object.defineProperty(e, 'ref', {
              get: function () {
                var r = e.bucket,
                  n = e.fullPath,
                  o = new _e(r, n);
                return t.makeStorageReference(o);
              },
            });
          })(n, e),
          n
        );
      }
      function Ue(e, t, r) {
        var n = ve(t);
        return null === n ? null : xe(e, n, r);
      }
      function Oe(e, t) {
        for (var r = {}, n = t.length, o = 0; o < n; o++) {
          var i = t[o];
          i.writable && (r[i.server] = e[i.local]);
        }
        return JSON.stringify(r);
      }
      function Pe(e) {
        if (!ne(e) || !e) throw 'Expected Metadata object.';
        for (var t in e)
          if (e.hasOwnProperty(t)) {
            var r = e[t];
            if ('customMetadata' === t) {
              if (!ne(r)) throw "Expected object for 'customMetadata' mapping.";
            } else if (oe(r)) throw "Mapping for '" + t + "' cannot be an object.";
          }
      }
      function Se(e, t) {
        var r = { prefixes: [], items: [], nextPageToken: t.nextPageToken },
          n = e.bucket();
        if (null === n)
          throw new s(
            m,
            "No default bucket found. Did you set the 'storageBucket' property when initializing the app?",
          );
        if (t.prefixes)
          for (var o = 0, i = t.prefixes; o < i.length; o++) {
            var a = i[o].replace(/\/$/, ''),
              u = e.makeStorageReference(new _e(n, a));
            r.prefixes.push(u);
          }
        if (t.items)
          for (var l = 0, c = t.items; l < c.length; l++) {
            var p = c[l];
            u = e.makeStorageReference(new _e(n, p.name));
            r.items.push(u);
          }
        return r;
      }
      function Ee(e) {
        if (!ne(e) || !e) throw 'Expected ListOptions object.';
        for (var t in e)
          if ('maxResults' === t) {
            if (!ae(e.maxResults) || e.maxResults <= 0)
              throw 'Expected maxResults to be a positive number.';
            if (e.maxResults > 1e3) throw 'Expected maxResults to be less than or equal to 1000.';
          } else {
            if ('pageToken' !== t) throw 'Unknown option: ' + t;
            if (e.pageToken && !ie(e.pageToken)) throw 'Expected pageToken to be string.';
          }
      }
      var Ae = function (e, t, r, n) {
        (this.url = e),
          (this.method = t),
          (this.handler = r),
          (this.timeout = n),
          (this.urlParams = {}),
          (this.headers = {}),
          (this.body = null),
          (this.errorHandler = null),
          (this.progressCallback = null),
          (this.successCodes = [200]),
          (this.additionalRetryCodes = []);
      };
      function Ce(e) {
        if (!e) throw P();
      }
      function We(e, t) {
        return function (r, n) {
          var o = Ue(e, n, t);
          return Ce(null !== o), o;
        };
      }
      function Me(e) {
        return function (t, r) {
          var n = (function (e, t) {
            var r = ve(t);
            return null === r ? null : Se(e, r);
          })(e, r);
          return Ce(null !== n), n;
        };
      }
      function je(e, t) {
        return function (r, n) {
          var o = Ue(e, n, t);
          return (
            Ce(null !== o),
            (function (e, t) {
              var r = ve(t);
              if (null === r) return null;
              if (!ie(r.downloadTokens)) return null;
              var n = r.downloadTokens;
              if (0 === n.length) return null;
              var o = encodeURIComponent;
              return n.split(',').map(function (t) {
                var r = e.bucket,
                  n = e.fullPath;
                return be('/b/' + o(r) + '/o/' + o(n)) + ye({ alt: 'media', token: t });
              })[0];
            })(o, n)
          );
        };
      }
      function Le(e) {
        return function (t, r) {
          var n, o, i;
          return (
            401 === t.getStatus()
              ? (n = new s(
                  p,
                  'User is not authenticated, please authenticate using Firebase Authentication and try again.',
                ))
              : 402 === t.getStatus()
              ? ((i = e.bucket),
                (n = new s(
                  c,
                  "Quota for bucket '" +
                    i +
                    "' exceeded, please view quota on https://firebase.google.com/pricing/.",
                )))
              : 403 === t.getStatus()
              ? ((o = e.path),
                (n = new s(h, "User does not have permission to access '" + o + "'.")))
              : (n = r),
            n.setServerResponseProp(r.serverResponseProp()),
            n
          );
        };
      }
      function Ie(e) {
        var t = Le(e);
        return function (r, n) {
          var o,
            i = t(r, n);
          return (
            404 === r.getStatus() &&
              ((o = e.path), (i = new s(l, "Object '" + o + "' does not exist."))),
            i.setServerResponseProp(n.serverResponseProp()),
            i
          );
        };
      }
      function Be(e, t, r) {
        var n = be(t.fullServerUrl()),
          o = e.maxOperationRetryTime(),
          i = new Ae(n, 'GET', We(e, r), o);
        return (i.errorHandler = Ie(t)), i;
      }
      function qe(e, t, r, n, o) {
        var i = {};
        t.isRoot ? (i.prefix = '') : (i.prefix = t.path + '/'),
          r && r.length > 0 && (i.delimiter = r),
          n && (i.pageToken = n),
          o && (i.maxResults = o);
        var a = be(t.bucketOnlyServerUrl()),
          s = e.maxOperationRetryTime(),
          u = new Ae(a, 'GET', Me(e), s);
        return (u.urlParams = i), (u.errorHandler = Le(t)), u;
      }
      function Ne(e, t, r) {
        var n = be(t.fullServerUrl()),
          o = e.maxOperationRetryTime(),
          i = new Ae(n, 'GET', je(e, r), o);
        return (i.errorHandler = Ie(t)), i;
      }
      function He(e, t, r, n) {
        var o = be(t.fullServerUrl()),
          i = Oe(r, n),
          a = e.maxOperationRetryTime(),
          s = new Ae(o, 'PATCH', We(e, n), a);
        return (
          (s.headers = { 'Content-Type': 'application/json; charset=utf-8' }),
          (s.body = i),
          (s.errorHandler = Ie(t)),
          s
        );
      }
      function ze(e, t) {
        var r = be(t.fullServerUrl()),
          n = e.maxOperationRetryTime();
        var o = new Ae(r, 'DELETE', function (e, t) {}, n);
        return (o.successCodes = [200, 204]), (o.errorHandler = Ie(t)), o;
      }
      function De(e, t, r) {
        var n = Object.assign({}, r);
        return (
          (n.fullPath = e.path),
          (n.size = t.size()),
          n.contentType ||
            (n.contentType = (function (e, t) {
              return (e && e.contentType) || (t && t.type()) || 'application/octet-stream';
            })(null, t)),
          n
        );
      }
      var Fe = function (e, t, r, n) {
        (this.current = e), (this.total = t), (this.finalized = !!r), (this.metadata = n || null);
      };
      function Ge(e, t) {
        var r = null;
        try {
          r = e.getResponseHeader('X-Goog-Upload-Status');
        } catch (n) {
          Ce(!1);
        }
        return Ce(!!r && -1 !== (t || ['active']).indexOf(r)), r;
      }
      function Xe(e, t, r, n, o, i, a, u) {
        var l = new Fe(0, 0);
        if (
          (a
            ? ((l.current = a.current), (l.total = a.total))
            : ((l.current = 0), (l.total = n.size())),
          n.size() !== l.total)
        )
          throw new s(b, 'Server recorded incorrect upload file size, please retry the upload.');
        var c = l.total - l.current,
          p = c;
        o > 0 && (p = Math.min(p, o));
        var h = l.current,
          f = h + p,
          d = {
            'X-Goog-Upload-Command': p === c ? 'upload, finalize' : 'upload',
            'X-Goog-Upload-Offset': l.current,
          },
          _ = n.slice(h, f);
        if (null === _) throw E();
        var v = t.maxUploadRetryTime(),
          m = new Ae(
            r,
            'POST',
            function (e, r) {
              var o,
                a = Ge(e, ['active', 'final']),
                s = l.current + p,
                u = n.size();
              return (o = 'final' === a ? We(t, i)(e, r) : null), new Fe(s, u, 'final' === a, o);
            },
            v,
          );
        return (
          (m.headers = d),
          (m.body = _.uploadData()),
          (m.progressCallback = u || null),
          (m.errorHandler = Le(e)),
          m
        );
      }
      var Ke = function (e, t, r) {
          if (re(e) || ee(t) || ee(r))
            (this.next = e), (this.error = t || null), (this.complete = r || null);
          else {
            var n = e;
            (this.next = n.next || null),
              (this.error = n.error || null),
              (this.complete = n.complete || null);
          }
        },
        Ze = function (e, t, r, n, o, i) {
          (this.bytesTransferred = e),
            (this.totalBytes = t),
            (this.state = r),
            (this.metadata = n),
            (this.task = o),
            (this.ref = i);
        };
      function Je(e, t, r) {
        for (var n = t.length, o = t.length, i = 0; i < t.length; i++)
          if (t[i].optional) {
            n = i;
            break;
          }
        if (!(n <= r.length && r.length <= o))
          throw (function (e, t, r, n) {
            var o, i;
            return (
              e === t
                ? ((o = e), (i = 1 === e ? 'argument' : 'arguments'))
                : ((o = 'between ' + e + ' and ' + t), (i = 'arguments')),
              new s(
                R,
                'Invalid argument count in `' +
                  r +
                  '`: Expected ' +
                  o +
                  ' ' +
                  i +
                  ', received ' +
                  n +
                  '.',
              )
            );
          })(n, o, e, r.length);
        for (i = 0; i < r.length; i++)
          try {
            t[i].validator(r[i]);
          } catch (a) {
            throw a instanceof Error ? C(i, e, a.message) : C(i, e, a);
          }
      }
      var Ve = function (e, t) {
        var r = this;
        (this.validator = function (t) {
          (r.optional && !te(t)) || e(t);
        }),
          (this.optional = !!t);
      };
      function $e(e, t) {
        function r(e) {
          if (!ie(e)) throw 'Expected string.';
        }
        var n, o, i;
        return (
          e
            ? ((o = r),
              (i = e),
              (n = function (e) {
                o(e), i(e);
              }))
            : (n = r),
          new Ve(n, t)
        );
      }
      function Qe() {
        return new Ve(function (e) {
          if (!(e instanceof Uint8Array || e instanceof ArrayBuffer || (le() && e instanceof Blob)))
            throw 'Expected Blob or File.';
        });
      }
      function Ye(e) {
        return new Ve(Pe, e);
      }
      function et(e) {
        return new Ve(Ee, e);
      }
      function tt() {
        return new Ve(function (e) {
          if (!(se(e) && e >= 0)) throw 'Expected a number 0 or greater.';
        });
      }
      function rt(e, t) {
        return new Ve(function (t) {
          if (!(null === t || (ee(t) && t instanceof Object))) throw 'Expected an Object.';
          void 0 !== e && null !== e && e(t);
        }, t);
      }
      function nt(e) {
        return new Ve(function (e) {
          if (!(null === e || re(e))) throw 'Expected a Function.';
        }, e);
      }
      function ot(e) {
        return function () {
          for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
          Promise.resolve().then(function () {
            return e.apply(void 0, t);
          });
        };
      }
      var it = (function () {
          function e(e, t, r, n, o, i) {
            var a = this;
            void 0 === i && (i = null),
              (this.transferred_ = 0),
              (this.needToFetchStatus_ = !1),
              (this.needToFetchMetadata_ = !1),
              (this.observers_ = []),
              (this.error_ = null),
              (this.uploadUrl_ = null),
              (this.request_ = null),
              (this.chunkMultiplier_ = 1),
              (this.resolve_ = null),
              (this.reject_ = null),
              (this.ref_ = e),
              (this.authWrapper_ = t),
              (this.location_ = r),
              (this.blob_ = o),
              (this.metadata_ = i),
              (this.mappings_ = n),
              (this.resumable_ = this.shouldDoResumable_(this.blob_)),
              (this.state_ = G),
              (this.errorHandler_ = function (e) {
                (a.request_ = null),
                  (a.chunkMultiplier_ = 1),
                  e.codeEquals(d)
                    ? ((a.needToFetchStatus_ = !0), a.completeTransitions_())
                    : ((a.error_ = e), a.transition_($));
              }),
              (this.metadataErrorHandler_ = function (e) {
                (a.request_ = null),
                  e.codeEquals(d) ? a.completeTransitions_() : ((a.error_ = e), a.transition_($));
              }),
              (this.promise_ = new Promise(function (e, t) {
                (a.resolve_ = e), (a.reject_ = t), a.start_();
              })),
              this.promise_.then(null, function () {});
          }
          return (
            (e.prototype.makeProgressCallback_ = function () {
              var e = this,
                t = this.transferred_;
              return function (r) {
                return e.updateProgress_(t + r);
              };
            }),
            (e.prototype.shouldDoResumable_ = function (e) {
              return e.size() > 262144;
            }),
            (e.prototype.start_ = function () {
              this.state_ === G &&
                null === this.request_ &&
                (this.resumable_
                  ? null === this.uploadUrl_
                    ? this.createResumable_()
                    : this.needToFetchStatus_
                    ? this.fetchStatus_()
                    : this.needToFetchMetadata_
                    ? this.fetchMetadata_()
                    : this.continueUpload_()
                  : this.oneShotUpload_());
            }),
            (e.prototype.resolveToken_ = function (e) {
              var t = this;
              this.authWrapper_.getAuthToken().then(function (r) {
                switch (t.state_) {
                  case G:
                    e(r);
                    break;
                  case J:
                    t.transition_(V);
                    break;
                  case X:
                    t.transition_(K);
                }
              });
            }),
            (e.prototype.createResumable_ = function () {
              var e = this;
              this.resolveToken_(function (t) {
                var r = (function (e, t, r, n, o) {
                    var i = t.bucketOnlyServerUrl(),
                      a = De(t, n, o),
                      s = { name: a.fullPath },
                      u = be(i),
                      l = {
                        'X-Goog-Upload-Protocol': 'resumable',
                        'X-Goog-Upload-Command': 'start',
                        'X-Goog-Upload-Header-Content-Length': n.size(),
                        'X-Goog-Upload-Header-Content-Type': a.contentType,
                        'Content-Type': 'application/json; charset=utf-8',
                      },
                      c = Oe(a, r),
                      p = e.maxUploadRetryTime(),
                      h = new Ae(
                        u,
                        'POST',
                        function (e) {
                          var t;
                          Ge(e);
                          try {
                            t = e.getResponseHeader('X-Goog-Upload-URL');
                          } catch (r) {
                            Ce(!1);
                          }
                          return Ce(ie(t)), t;
                        },
                        p,
                      );
                    return (
                      (h.urlParams = s), (h.headers = l), (h.body = c), (h.errorHandler = Le(t)), h
                    );
                  })(e.authWrapper_, e.location_, e.mappings_, e.blob_, e.metadata_),
                  n = e.authWrapper_.makeRequest(r, t);
                (e.request_ = n),
                  n.getPromise().then(function (t) {
                    (e.request_ = null),
                      (e.uploadUrl_ = t),
                      (e.needToFetchStatus_ = !1),
                      e.completeTransitions_();
                  }, e.errorHandler_);
              });
            }),
            (e.prototype.fetchStatus_ = function () {
              var e = this,
                t = this.uploadUrl_;
              this.resolveToken_(function (r) {
                var n = (function (e, t, r, n) {
                    var o = e.maxUploadRetryTime(),
                      i = new Ae(
                        r,
                        'POST',
                        function (e) {
                          var t = Ge(e, ['active', 'final']),
                            r = null;
                          try {
                            r = e.getResponseHeader('X-Goog-Upload-Size-Received');
                          } catch (i) {
                            Ce(!1);
                          }
                          r || Ce(!1);
                          var o = Number(r);
                          return Ce(!isNaN(o)), new Fe(o, n.size(), 'final' === t);
                        },
                        o,
                      );
                    return (
                      (i.headers = { 'X-Goog-Upload-Command': 'query' }),
                      (i.errorHandler = Le(t)),
                      i
                    );
                  })(e.authWrapper_, e.location_, t, e.blob_),
                  o = e.authWrapper_.makeRequest(n, r);
                (e.request_ = o),
                  o.getPromise().then(function (t) {
                    (t = t),
                      (e.request_ = null),
                      e.updateProgress_(t.current),
                      (e.needToFetchStatus_ = !1),
                      t.finalized && (e.needToFetchMetadata_ = !0),
                      e.completeTransitions_();
                  }, e.errorHandler_);
              });
            }),
            (e.prototype.continueUpload_ = function () {
              var e = this,
                t = 262144 * this.chunkMultiplier_,
                r = new Fe(this.transferred_, this.blob_.size()),
                n = this.uploadUrl_;
              this.resolveToken_(function (o) {
                var i;
                try {
                  i = Xe(
                    e.location_,
                    e.authWrapper_,
                    n,
                    e.blob_,
                    t,
                    e.mappings_,
                    r,
                    e.makeProgressCallback_(),
                  );
                } catch (s) {
                  return (e.error_ = s), void e.transition_($);
                }
                var a = e.authWrapper_.makeRequest(i, o);
                (e.request_ = a),
                  a.getPromise().then(function (t) {
                    e.increaseMultiplier_(),
                      (e.request_ = null),
                      e.updateProgress_(t.current),
                      t.finalized
                        ? ((e.metadata_ = t.metadata), e.transition_(Z))
                        : e.completeTransitions_();
                  }, e.errorHandler_);
              });
            }),
            (e.prototype.increaseMultiplier_ = function () {
              262144 * this.chunkMultiplier_ < 33554432 && (this.chunkMultiplier_ *= 2);
            }),
            (e.prototype.fetchMetadata_ = function () {
              var e = this;
              this.resolveToken_(function (t) {
                var r = Be(e.authWrapper_, e.location_, e.mappings_),
                  n = e.authWrapper_.makeRequest(r, t);
                (e.request_ = n),
                  n.getPromise().then(function (t) {
                    (e.request_ = null), (e.metadata_ = t), e.transition_(Z);
                  }, e.metadataErrorHandler_);
              });
            }),
            (e.prototype.oneShotUpload_ = function () {
              var e = this;
              this.resolveToken_(function (t) {
                var r = (function (e, t, r, n, o) {
                    var i = t.bucketOnlyServerUrl(),
                      a = { 'X-Goog-Upload-Protocol': 'multipart' },
                      s = (function () {
                        for (var e = '', t = 0; t < 2; t++) e += Math.random().toString().slice(2);
                        return e;
                      })();
                    a['Content-Type'] = 'multipart/related; boundary=' + s;
                    var u = De(t, n, o),
                      l =
                        '--' +
                        s +
                        '\r\nContent-Type: application/json; charset=utf-8\r\n\r\n' +
                        Oe(u, r) +
                        '\r\n--' +
                        s +
                        '\r\nContent-Type: ' +
                        u.contentType +
                        '\r\n\r\n',
                      c = '\r\n--' + s + '--',
                      p = de.getBlob(l, n, c);
                    if (null === p) throw E();
                    var h = { name: u.fullPath },
                      f = be(i),
                      d = e.maxUploadRetryTime(),
                      _ = new Ae(f, 'POST', We(e, r), d);
                    return (
                      (_.urlParams = h),
                      (_.headers = a),
                      (_.body = p.uploadData()),
                      (_.errorHandler = Le(t)),
                      _
                    );
                  })(e.authWrapper_, e.location_, e.mappings_, e.blob_, e.metadata_),
                  n = e.authWrapper_.makeRequest(r, t);
                (e.request_ = n),
                  n.getPromise().then(function (t) {
                    (e.request_ = null),
                      (e.metadata_ = t),
                      e.updateProgress_(e.blob_.size()),
                      e.transition_(Z);
                  }, e.errorHandler_);
              });
            }),
            (e.prototype.updateProgress_ = function (e) {
              var t = this.transferred_;
              (this.transferred_ = e), this.transferred_ !== t && this.notifyObservers_();
            }),
            (e.prototype.transition_ = function (e) {
              if (this.state_ !== e)
                switch (e) {
                  case J:
                  case X:
                    (this.state_ = e), null !== this.request_ && this.request_.cancel();
                    break;
                  case G:
                    var t = this.state_ === K;
                    (this.state_ = e), t && (this.notifyObservers_(), this.start_());
                    break;
                  case K:
                    (this.state_ = e), this.notifyObservers_();
                    break;
                  case V:
                    (this.error_ = S()), (this.state_ = e), this.notifyObservers_();
                    break;
                  case $:
                  case Z:
                    (this.state_ = e), this.notifyObservers_();
                }
            }),
            (e.prototype.completeTransitions_ = function () {
              switch (this.state_) {
                case X:
                  this.transition_(K);
                  break;
                case J:
                  this.transition_(V);
                  break;
                case G:
                  this.start_();
              }
            }),
            Object.defineProperty(e.prototype, 'snapshot', {
              get: function () {
                var e = Y(this.state_);
                return new Ze(
                  this.transferred_,
                  this.blob_.size(),
                  e,
                  this.metadata_,
                  this,
                  this.ref_,
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.on = function (e, t, r, n) {
              function o() {
                if (e !== F.STATE_CHANGED)
                  throw 'Expected one of the event types: [' + F.STATE_CHANGED + '].';
              }
              var i =
                  'Expected a function or an Object with one of `next`, `error`, `complete` properties.',
                a = nt(!0).validator,
                s = rt(null, !0).validator;
              function u(e) {
                try {
                  return void a(e);
                } catch (t) {}
                try {
                  if ((s(e), !(te(e.next) || te(e.error) || te(e.complete)))) throw '';
                  return;
                } catch (t) {
                  throw i;
                }
              }
              var l = [$e(o), rt(u, !0), nt(!0), nt(!0)];
              Je('on', l, arguments);
              var c = this;
              function p(e) {
                return function (t, r, o) {
                  null !== e && Je('on', e, arguments);
                  var i = new Ke(t, r, n);
                  return (
                    c.addObserver_(i),
                    function () {
                      c.removeObserver_(i);
                    }
                  );
                };
              }
              function h(e) {
                if (null === e) throw i;
                u(e);
              }
              var f = [rt(h), nt(!0), nt(!0)],
                d = !(te(t) || te(r) || te(n));
              return d ? p(f) : p(null)(t, r, n);
            }),
            (e.prototype.then = function (e, t) {
              return this.promise_.then(e, t);
            }),
            (e.prototype.catch = function (e) {
              return this.then(null, e);
            }),
            (e.prototype.addObserver_ = function (e) {
              this.observers_.push(e), this.notifyObserver_(e);
            }),
            (e.prototype.removeObserver_ = function (e) {
              var t = this.observers_.indexOf(e);
              -1 !== t && this.observers_.splice(t, 1);
            }),
            (e.prototype.notifyObservers_ = function () {
              var e = this;
              this.finishPromise_(),
                this.observers_.slice().forEach(function (t) {
                  e.notifyObserver_(t);
                });
            }),
            (e.prototype.finishPromise_ = function () {
              if (null !== this.resolve_) {
                var e = !0;
                switch (Y(this.state_)) {
                  case Q.SUCCESS:
                    ot(this.resolve_.bind(null, this.snapshot))();
                    break;
                  case Q.CANCELED:
                  case Q.ERROR:
                    ot(this.reject_.bind(null, this.error_))();
                    break;
                  default:
                    e = !1;
                }
                e && ((this.resolve_ = null), (this.reject_ = null));
              }
            }),
            (e.prototype.notifyObserver_ = function (e) {
              switch (Y(this.state_)) {
                case Q.RUNNING:
                case Q.PAUSED:
                  e.next && ot(e.next.bind(e, this.snapshot))();
                  break;
                case Q.SUCCESS:
                  e.complete && ot(e.complete.bind(e))();
                  break;
                case Q.CANCELED:
                case Q.ERROR:
                  e.error && ot(e.error.bind(e, this.error_))();
                  break;
                default:
                  e.error && ot(e.error.bind(e, this.error_))();
              }
            }),
            (e.prototype.resume = function () {
              Je('resume', [], arguments);
              var e = this.state_ === K || this.state_ === X;
              return e && this.transition_(G), e;
            }),
            (e.prototype.pause = function () {
              Je('pause', [], arguments);
              var e = this.state_ === G;
              return e && this.transition_(X), e;
            }),
            (e.prototype.cancel = function () {
              Je('cancel', [], arguments);
              var e = this.state_ === G || this.state_ === X;
              return e && this.transition_(J), e;
            }),
            e
          );
        })(),
        at = (function () {
          function e(e, t) {
            (this.authWrapper = e), (this.location = t instanceof _e ? t : _e.makeFromUrl(t));
          }
          return (
            (e.prototype.toString = function () {
              return (
                Je('toString', [], arguments),
                'gs://' + this.location.bucket + '/' + this.location.path
              );
            }),
            (e.prototype.newRef = function (t, r) {
              return new e(t, r);
            }),
            (e.prototype.mappings = function () {
              return Te();
            }),
            (e.prototype.child = function (e) {
              Je('child', [$e()], arguments);
              var t = me(this.location.path, e),
                r = new _e(this.location.bucket, t);
              return this.newRef(this.authWrapper, r);
            }),
            Object.defineProperty(e.prototype, 'parent', {
              get: function () {
                var e = (function (e) {
                  if (0 === e.length) return null;
                  var t = e.lastIndexOf('/');
                  return -1 === t ? '' : e.slice(0, t);
                })(this.location.path);
                if (null === e) return null;
                var t = new _e(this.location.bucket, e);
                return this.newRef(this.authWrapper, t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'root', {
              get: function () {
                var e = new _e(this.location.bucket, '');
                return this.newRef(this.authWrapper, e);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'bucket', {
              get: function () {
                return this.location.bucket;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'fullPath', {
              get: function () {
                return this.location.path;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'name', {
              get: function () {
                return ge(this.location.path);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'storage', {
              get: function () {
                return this.authWrapper.service();
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.put = function (e, t) {
              return (
                void 0 === t && (t = null),
                Je('put', [Qe(), Ye(!0)], arguments),
                this.throwIfRoot_('put'),
                new it(this, this.authWrapper, this.location, this.mappings(), new de(e), t)
              );
            }),
            (e.prototype.putString = function (e, t, r) {
              void 0 === t && (t = L.RAW),
                Je('putString', [$e(), $e(I, !0), Ye(!0)], arguments),
                this.throwIfRoot_('putString');
              var n = q(t, e),
                o = Object.assign({}, r);
              return (
                !ee(o.contentType) && ee(n.contentType) && (o.contentType = n.contentType),
                new it(
                  this,
                  this.authWrapper,
                  this.location,
                  this.mappings(),
                  new de(n.data, !0),
                  o,
                )
              );
            }),
            (e.prototype.delete = function () {
              var e = this;
              return (
                Je('delete', [], arguments),
                this.throwIfRoot_('delete'),
                this.authWrapper.getAuthToken().then(function (t) {
                  var r = ze(e.authWrapper, e.location);
                  return e.authWrapper.makeRequest(r, t).getPromise();
                })
              );
            }),
            (e.prototype.listAll = function () {
              Je('listAll', [], arguments);
              var e = { prefixes: [], items: [] };
              return this.listAllHelper(e).then(function () {
                return e;
              });
            }),
            (e.prototype.listAllHelper = function (e, t) {
              return Object(i.__awaiter)(this, void 0, void 0, function () {
                var r, n, o, a;
                return Object(i.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (r = { pageToken: t }), [4, this.list(r)];
                    case 1:
                      return (
                        (n = i.sent()),
                        (o = e.prefixes).push.apply(o, n.prefixes),
                        (a = e.items).push.apply(a, n.items),
                        null == n.nextPageToken
                          ? [3, 3]
                          : [4, this.listAllHelper(e, n.nextPageToken)]
                      );
                    case 2:
                      i.sent(), (i.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.list = function (e) {
              Je('list', [et(!0)], arguments);
              var t = this;
              return this.authWrapper.getAuthToken().then(function (r) {
                var n = e || {},
                  o = qe(t.authWrapper, t.location, '/', n.pageToken, n.maxResults);
                return t.authWrapper.makeRequest(o, r).getPromise();
              });
            }),
            (e.prototype.getMetadata = function () {
              var e = this;
              return (
                Je('getMetadata', [], arguments),
                this.throwIfRoot_('getMetadata'),
                this.authWrapper.getAuthToken().then(function (t) {
                  var r = Be(e.authWrapper, e.location, e.mappings());
                  return e.authWrapper.makeRequest(r, t).getPromise();
                })
              );
            }),
            (e.prototype.updateMetadata = function (e) {
              var t = this;
              return (
                Je('updateMetadata', [Ye()], arguments),
                this.throwIfRoot_('updateMetadata'),
                this.authWrapper.getAuthToken().then(function (r) {
                  var n = He(t.authWrapper, t.location, e, t.mappings());
                  return t.authWrapper.makeRequest(n, r).getPromise();
                })
              );
            }),
            (e.prototype.getDownloadURL = function () {
              var e = this;
              return (
                Je('getDownloadURL', [], arguments),
                this.throwIfRoot_('getDownloadURL'),
                this.authWrapper.getAuthToken().then(function (t) {
                  var r = Ne(e.authWrapper, e.location, e.mappings());
                  return e.authWrapper
                    .makeRequest(r, t)
                    .getPromise()
                    .then(function (e) {
                      if (null === e) throw A();
                      return e;
                    });
                })
              );
            }),
            (e.prototype.throwIfRoot_ = function (e) {
              if ('' === this.location.path)
                throw (function (e) {
                  return new s(
                    T,
                    "The operation '" +
                      e +
                      "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').",
                  );
                })(e);
            }),
            e
          );
        })(),
        st = (function () {
          function e(e) {
            this.promise_ = Promise.reject(e);
          }
          return (
            (e.prototype.getPromise = function () {
              return this.promise_;
            }),
            (e.prototype.cancel = function (e) {}),
            e
          );
        })(),
        ut = (function () {
          function e() {
            (this.map = new Map()), (this.id = -9007199254740991);
          }
          return (
            (e.prototype.addRequest = function (e) {
              var t = this,
                r = this.id;
              this.id++,
                this.map.set(r, e),
                e.getPromise().then(
                  function () {
                    return t.map.delete(r);
                  },
                  function () {
                    return t.map.delete(r);
                  },
                );
            }),
            (e.prototype.clear = function () {
              this.map.forEach(function (e) {
                e && e.cancel(!0);
              }),
                this.map.clear();
            }),
            e
          );
        })(),
        lt = (function () {
          function e(t, r, n, o, i, a) {
            var s;
            if (
              ((this.bucket_ = null),
              (this.appId_ = null),
              (this.deleted_ = !1),
              (this.app_ = t),
              null !== this.app_)
            ) {
              var u = this.app_.options;
              ee(u) &&
                ((this.bucket_ = e.extractBucket_(u)),
                (this.appId_ = null !== (s = u.appId) && void 0 !== s ? s : null));
            }
            (this.authProvider_ = r),
              (this.storageRefMaker_ = n),
              (this.requestMaker_ = o),
              (this.pool_ = a),
              (this.service_ = i),
              (this.maxOperationRetryTime_ = 12e4),
              (this.maxUploadRetryTime_ = 6e5),
              (this.requestMap_ = new ut());
          }
          return (
            (e.extractBucket_ = function (e) {
              var t = e.storageBucket || null;
              return null == t ? null : _e.makeFromBucketSpec(t).bucket;
            }),
            (e.prototype.getAuthToken = function () {
              var e = this.authProvider_.getImmediate({ optional: !0 });
              return e
                ? e.getToken().then(
                    function (e) {
                      return null !== e ? e.accessToken : null;
                    },
                    function () {
                      return null;
                    },
                  )
                : Promise.resolve(null);
            }),
            (e.prototype.bucket = function () {
              if (this.deleted_) throw W();
              return this.bucket_;
            }),
            (e.prototype.service = function () {
              return this.service_;
            }),
            (e.prototype.makeStorageReference = function (e) {
              return this.storageRefMaker_(this, e);
            }),
            (e.prototype.makeRequest = function (e, t) {
              if (this.deleted_) return new st(W());
              var r = this.requestMaker_(e, this.appId_, t, this.pool_);
              return this.requestMap_.addRequest(r), r;
            }),
            (e.prototype.deleteApp = function () {
              (this.deleted_ = !0), (this.app_ = null), this.requestMap_.clear();
            }),
            (e.prototype.maxUploadRetryTime = function () {
              return this.maxUploadRetryTime_;
            }),
            (e.prototype.setMaxUploadRetryTime = function (e) {
              this.maxUploadRetryTime_ = e;
            }),
            (e.prototype.maxOperationRetryTime = function () {
              return this.maxOperationRetryTime_;
            }),
            (e.prototype.setMaxOperationRetryTime = function (e) {
              this.maxOperationRetryTime_ = e;
            }),
            e
          );
        })();
      var ct = (function () {
          function e(e, t, r, n, o, i, a, s, u, l, c) {
            var p = this;
            (this.pendingXhr_ = null),
              (this.backoffId_ = null),
              (this.resolve_ = null),
              (this.reject_ = null),
              (this.canceled_ = !1),
              (this.appDelete_ = !1),
              (this.url_ = e),
              (this.method_ = t),
              (this.headers_ = r),
              (this.body_ = n),
              (this.successCodes_ = o.slice()),
              (this.additionalRetryCodes_ = i.slice()),
              (this.callback_ = a),
              (this.errorCallback_ = s),
              (this.progressCallback_ = l),
              (this.timeout_ = u),
              (this.pool_ = c),
              (this.promise_ = new Promise(function (e, t) {
                (p.resolve_ = e), (p.reject_ = t), p.start_();
              }));
          }
          return (
            (e.prototype.start_ = function () {
              var e = this;
              function t(t, r) {
                var n,
                  o = e.resolve_,
                  i = e.reject_,
                  a = r.xhr;
                if (r.wasSuccessCode)
                  try {
                    var u = e.callback_(a, a.getResponseText());
                    te(u) ? o(u) : o();
                  } catch (l) {
                    i(l);
                  }
                else
                  null !== a
                    ? ((n = P()).setServerResponseProp(a.getResponseText()),
                      e.errorCallback_ ? i(e.errorCallback_(a, n)) : i(n))
                    : r.canceled
                    ? i((n = e.appDelete_ ? W() : S()))
                    : i((n = new s(f, 'Max retry time for operation exceeded, please try again.')));
              }
              this.canceled_
                ? t(0, new pt(!1, null, !0))
                : (this.backoffId_ = (function (e, t, r) {
                    var n = 1,
                      o = null,
                      a = !1,
                      s = 0;
                    function u() {
                      return 2 === s;
                    }
                    var l = !1;
                    function c() {
                      for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                      l || ((l = !0), t.apply(null, e));
                    }
                    function p(t) {
                      o = setTimeout(function () {
                        (o = null), e(h, u());
                      }, t);
                    }
                    function h(e) {
                      for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                      if (!l)
                        if (e) c.call.apply(c, Object(i.__spreadArrays)([null, e], t));
                        else {
                          var o,
                            h = u() || a;
                          if (h) c.call.apply(c, Object(i.__spreadArrays)([null, e], t));
                          else
                            n < 64 && (n *= 2),
                              1 === s ? ((s = 2), (o = 0)) : (o = 1e3 * (n + Math.random())),
                              p(o);
                        }
                    }
                    var f = !1;
                    function d(e) {
                      f ||
                        ((f = !0),
                        l || (null !== o ? (e || (s = 2), clearTimeout(o), p(0)) : e || (s = 1)));
                    }
                    return (
                      p(0),
                      setTimeout(function () {
                        (a = !0), d(!0);
                      }, r),
                      d
                    );
                  })(
                    function (t, r) {
                      if (r) t(!1, new pt(!1, null, !0));
                      else {
                        var n = e.pool_.createXhrIo();
                        (e.pendingXhr_ = n),
                          null !== e.progressCallback_ && n.addUploadProgressListener(o),
                          n.send(e.url_, e.method_, e.body_, e.headers_).then(function (r) {
                            null !== e.progressCallback_ && r.removeUploadProgressListener(o),
                              (e.pendingXhr_ = null);
                            var n = (r = r).getErrorCode() === D.NO_ERROR,
                              i = r.getStatus();
                            if (n && !e.isRetryStatusCode_(i)) {
                              var a = -1 !== e.successCodes_.indexOf(i);
                              t(!0, new pt(a, r));
                            } else {
                              var s = r.getErrorCode() === D.ABORT;
                              t(!1, new pt(!1, null, s));
                            }
                          });
                      }
                      function o(t) {
                        var r = t.loaded,
                          n = t.lengthComputable ? t.total : -1;
                        null !== e.progressCallback_ && e.progressCallback_(r, n);
                      }
                    },
                    t,
                    this.timeout_,
                  ));
            }),
            (e.prototype.getPromise = function () {
              return this.promise_;
            }),
            (e.prototype.cancel = function (e) {
              (this.canceled_ = !0),
                (this.appDelete_ = e || !1),
                null !== this.backoffId_ && (0, this.backoffId_)(!1),
                null !== this.pendingXhr_ && this.pendingXhr_.abort();
            }),
            (e.prototype.isRetryStatusCode_ = function (e) {
              var t = e >= 500 && e < 600,
                r = -1 !== [408, 429].indexOf(e),
                n = -1 !== this.additionalRetryCodes_.indexOf(e);
              return t || r || n;
            }),
            e
          );
        })(),
        pt = function (e, t, r) {
          (this.wasSuccessCode = e), (this.xhr = t), (this.canceled = !!r);
        };
      function ht(e, t, r, n) {
        var i = ye(e.urlParams),
          a = e.url + i,
          s = Object.assign({}, e.headers);
        return (
          (function (e, t) {
            t && (e['X-Firebase-GMPID'] = t);
          })(s, t),
          (function (e, t) {
            null !== t && t.length > 0 && (e.Authorization = 'Firebase ' + t);
          })(s, r),
          (function (e) {
            var t = 'undefined' !== typeof o.a ? o.a.SDK_VERSION : 'AppManager';
            e['X-Firebase-Storage-Version'] = 'webjs/' + t;
          })(s),
          new ct(
            a,
            e.method,
            s,
            e.body,
            e.successCodes,
            e.additionalRetryCodes,
            e.handler,
            e.errorHandler,
            e.timeout,
            e.progressCallback,
            n,
          )
        );
      }
      var ft = (function () {
          function e(e, t, r, n) {
            if (
              ((this.bucket_ = null),
              (this.authWrapper_ = new lt(
                e,
                t,
                function (e, t) {
                  return new at(e, t);
                },
                ht,
                this,
                r,
              )),
              (this.app_ = e),
              null != n)
            )
              this.bucket_ = _e.makeFromBucketSpec(n);
            else {
              var o = this.authWrapper_.bucket();
              null != o && (this.bucket_ = new _e(o, ''));
            }
            this.internals_ = new dt(this);
          }
          return (
            (e.prototype.ref = function (e) {
              function t(e) {
                if ('string' !== typeof e) throw 'Path is not a string.';
                if (/^[A-Za-z]+:\/\//.test(e))
                  throw 'Expected child path but got a URL, use refFromURL instead.';
              }
              if ((Je('ref', [$e(t, !0)], arguments), null == this.bucket_))
                throw new Error('No Storage Bucket defined in Firebase Options.');
              var r = new at(this.authWrapper_, this.bucket_);
              return null != e ? r.child(e) : r;
            }),
            (e.prototype.refFromURL = function (e) {
              function t(e) {
                if ('string' !== typeof e) throw 'Path is not a string.';
                if (!/^[A-Za-z]+:\/\//.test(e))
                  throw 'Expected full URL but got a child path, use ref instead.';
                try {
                  _e.makeFromUrl(e);
                } catch (t) {
                  throw 'Expected valid full URL but got an invalid one.';
                }
              }
              return Je('refFromURL', [$e(t, !1)], arguments), new at(this.authWrapper_, e);
            }),
            Object.defineProperty(e.prototype, 'maxUploadRetryTime', {
              get: function () {
                return this.authWrapper_.maxUploadRetryTime();
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.setMaxUploadRetryTime = function (e) {
              Je('setMaxUploadRetryTime', [tt()], arguments),
                this.authWrapper_.setMaxUploadRetryTime(e);
            }),
            (e.prototype.setMaxOperationRetryTime = function (e) {
              Je('setMaxOperationRetryTime', [tt()], arguments),
                this.authWrapper_.setMaxOperationRetryTime(e);
            }),
            Object.defineProperty(e.prototype, 'app', {
              get: function () {
                return this.app_;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'INTERNAL', {
              get: function () {
                return this.internals_;
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })(),
        dt = (function () {
          function e(e) {
            this.service_ = e;
          }
          return (
            (e.prototype.delete = function () {
              return this.service_.authWrapper_.deleteApp(), Promise.resolve();
            }),
            e
          );
        })();
      function _t(e, t) {
        var r = e.getProvider('app').getImmediate(),
          n = e.getProvider('auth-internal');
        return new ft(r, n, new pe(), t);
      }
      !(function (e) {
        var t = { TaskState: Q, TaskEvent: F, StringFormat: L, Storage: ft, Reference: at };
        e.INTERNAL.registerComponent(
          new a.Component('storage', _t, 'PUBLIC').setServiceProps(t).setMultipleInstances(!0),
        ),
          e.registerVersion('@firebase/storage', '0.3.30');
      })(o.a);
    },
  },
]);
//# sourceMappingURL=10.3ae6dd43.chunk.js.map
