function od(e, t) {
  for (var n = 0; n < t.length; n++) {
    const l = t[n];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const r in l)
        if (r !== "default" && !(r in e)) {
          const i = Object.getOwnPropertyDescriptor(l, r);
          i &&
            Object.defineProperty(
              e,
              r,
              i.get ? i : { enumerable: !0, get: () => l[r] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) l(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && l(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function l(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = n(r);
    fetch(r.href, i);
  }
})();
function cd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var dd = { exports: {} },
  kr = {},
  ud = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cl = Symbol.for("react.element"),
  ev = Symbol.for("react.portal"),
  tv = Symbol.for("react.fragment"),
  sv = Symbol.for("react.strict_mode"),
  nv = Symbol.for("react.profiler"),
  lv = Symbol.for("react.provider"),
  rv = Symbol.for("react.context"),
  iv = Symbol.for("react.forward_ref"),
  av = Symbol.for("react.suspense"),
  ov = Symbol.for("react.memo"),
  cv = Symbol.for("react.lazy"),
  zo = Symbol.iterator;
function dv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (zo && e[zo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var hd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  vd = Object.assign,
  md = {};
function dn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = md),
    (this.updater = n || hd);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fd() {}
fd.prototype = dn.prototype;
function wa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = md),
    (this.updater = n || hd);
}
var ja = (wa.prototype = new fd());
ja.constructor = wa;
vd(ja, dn.prototype);
ja.isPureReactComponent = !0;
var To = Array.isArray,
  pd = Object.prototype.hasOwnProperty,
  ya = { current: null },
  xd = { key: !0, ref: !0, __self: !0, __source: !0 };
function gd(e, t, n) {
  var l,
    r = {},
    i = null,
    a = null;
  if (t != null)
    for (l in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      pd.call(t, l) && !xd.hasOwnProperty(l) && (r[l] = t[l]);
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    for (var c = Array(o), d = 0; d < o; d++) c[d] = arguments[d + 2];
    r.children = c;
  }
  if (e && e.defaultProps)
    for (l in ((o = e.defaultProps), o)) r[l] === void 0 && (r[l] = o[l]);
  return {
    $$typeof: cl,
    type: e,
    key: i,
    ref: a,
    props: r,
    _owner: ya.current,
  };
}
function uv(e, t) {
  return {
    $$typeof: cl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Na(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cl;
}
function hv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Mo = /\/+/g;
function Hr(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? hv("" + e.key)
    : t.toString(36);
}
function Ol(e, t, n, l, r) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case cl:
          case ev:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (r = r(a)),
      (e = l === "" ? "." + Hr(a, 0) : l),
      To(r)
        ? ((n = ""),
          e != null && (n = e.replace(Mo, "$&/") + "/"),
          Ol(r, t, n, "", function (d) {
            return d;
          }))
        : r != null &&
          (Na(r) &&
            (r = uv(
              r,
              n +
                (!r.key || (a && a.key === r.key)
                  ? ""
                  : ("" + r.key).replace(Mo, "$&/") + "/") +
                e
            )),
          t.push(r)),
      1
    );
  if (((a = 0), (l = l === "" ? "." : l + ":"), To(e)))
    for (var o = 0; o < e.length; o++) {
      i = e[o];
      var c = l + Hr(i, o);
      a += Ol(i, t, n, c, r);
    }
  else if (((c = dv(e)), typeof c == "function"))
    for (e = c.call(e), o = 0; !(i = e.next()).done; )
      (i = i.value), (c = l + Hr(i, o++)), (a += Ol(i, t, n, c, r));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Nl(e, t, n) {
  if (e == null) return e;
  var l = [],
    r = 0;
  return (
    Ol(e, l, "", "", function (i) {
      return t.call(n, i, r++);
    }),
    l
  );
}
function vv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Me = { current: null },
  _l = { transition: null },
  mv = {
    ReactCurrentDispatcher: Me,
    ReactCurrentBatchConfig: _l,
    ReactCurrentOwner: ya,
  };
function wd() {
  throw Error("act(...) is not supported in production builds of React.");
}
Q.Children = {
  map: Nl,
  forEach: function (e, t, n) {
    Nl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Nl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Nl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Na(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Q.Component = dn;
Q.Fragment = tv;
Q.Profiler = nv;
Q.PureComponent = wa;
Q.StrictMode = sv;
Q.Suspense = av;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mv;
Q.act = wd;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var l = vd({}, e.props),
    r = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = ya.current)),
      t.key !== void 0 && (r = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (c in t)
      pd.call(t, c) &&
        !xd.hasOwnProperty(c) &&
        (l[c] = t[c] === void 0 && o !== void 0 ? o[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) l.children = n;
  else if (1 < c) {
    o = Array(c);
    for (var d = 0; d < c; d++) o[d] = arguments[d + 2];
    l.children = o;
  }
  return { $$typeof: cl, type: e.type, key: r, ref: i, props: l, _owner: a };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: rv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: lv, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = gd;
Q.createFactory = function (e) {
  var t = gd.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: iv, render: e };
};
Q.isValidElement = Na;
Q.lazy = function (e) {
  return { $$typeof: cv, _payload: { _status: -1, _result: e }, _init: vv };
};
Q.memo = function (e, t) {
  return { $$typeof: ov, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = _l.transition;
  _l.transition = {};
  try {
    e();
  } finally {
    _l.transition = t;
  }
};
Q.unstable_act = wd;
Q.useCallback = function (e, t) {
  return Me.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return Me.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return Me.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return Me.current.useEffect(e, t);
};
Q.useId = function () {
  return Me.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return Me.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return Me.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return Me.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return Me.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return Me.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return Me.current.useRef(e);
};
Q.useState = function (e) {
  return Me.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return Me.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return Me.current.useTransition();
};
Q.version = "18.3.1";
ud.exports = Q;
var S = ud.exports;
const jd = cd(S),
  fv = od({ __proto__: null, default: jd }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pv = S,
  xv = Symbol.for("react.element"),
  gv = Symbol.for("react.fragment"),
  wv = Object.prototype.hasOwnProperty,
  jv = pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yv = { key: !0, ref: !0, __self: !0, __source: !0 };
function yd(e, t, n) {
  var l,
    r = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (l in t) wv.call(t, l) && !yv.hasOwnProperty(l) && (r[l] = t[l]);
  if (e && e.defaultProps)
    for (l in ((t = e.defaultProps), t)) r[l] === void 0 && (r[l] = t[l]);
  return {
    $$typeof: xv,
    type: e,
    key: i,
    ref: a,
    props: r,
    _owner: jv.current,
  };
}
kr.Fragment = gv;
kr.jsx = yd;
kr.jsxs = yd;
dd.exports = kr;
var s = dd.exports,
  wi = {},
  Nd = { exports: {} },
  Ze = {},
  kd = { exports: {} },
  qd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, O) {
    var B = b.length;
    b.push(O);
    e: for (; 0 < B; ) {
      var Z = (B - 1) >>> 1,
        G = b[Z];
      if (0 < r(G, O)) (b[Z] = O), (b[B] = G), (B = Z);
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function l(b) {
    if (b.length === 0) return null;
    var O = b[0],
      B = b.pop();
    if (B !== O) {
      b[0] = B;
      e: for (var Z = 0, G = b.length, dt = G >>> 1; Z < dt; ) {
        var Ve = 2 * (Z + 1) - 1,
          He = b[Ve],
          Pe = Ve + 1,
          $e = b[Pe];
        if (0 > r(He, B))
          Pe < G && 0 > r($e, He)
            ? ((b[Z] = $e), (b[Pe] = B), (Z = Pe))
            : ((b[Z] = He), (b[Ve] = B), (Z = Ve));
        else if (Pe < G && 0 > r($e, B)) (b[Z] = $e), (b[Pe] = B), (Z = Pe);
        else break e;
      }
    }
    return O;
  }
  function r(b, O) {
    var B = b.sortIndex - O.sortIndex;
    return B !== 0 ? B : b.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      o = a.now();
    e.unstable_now = function () {
      return a.now() - o;
    };
  }
  var c = [],
    d = [],
    h = 1,
    v = null,
    m = 3,
    N = !1,
    y = !1,
    j = !1,
    A = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(b) {
    for (var O = n(d); O !== null; ) {
      if (O.callback === null) l(d);
      else if (O.startTime <= b)
        l(d), (O.sortIndex = O.expirationTime), t(c, O);
      else break;
      O = n(d);
    }
  }
  function k(b) {
    if (((j = !1), p(b), !y))
      if (n(c) !== null) (y = !0), Ft(I);
      else {
        var O = n(d);
        O !== null && Dt(k, O.startTime - b);
      }
  }
  function I(b, O) {
    (y = !1), j && ((j = !1), f(L), (L = -1)), (N = !0);
    var B = m;
    try {
      for (
        p(O), v = n(c);
        v !== null && (!(v.expirationTime > O) || (b && !K()));

      ) {
        var Z = v.callback;
        if (typeof Z == "function") {
          (v.callback = null), (m = v.priorityLevel);
          var G = Z(v.expirationTime <= O);
          (O = e.unstable_now()),
            typeof G == "function" ? (v.callback = G) : v === n(c) && l(c),
            p(O);
        } else l(c);
        v = n(c);
      }
      if (v !== null) var dt = !0;
      else {
        var Ve = n(d);
        Ve !== null && Dt(k, Ve.startTime - O), (dt = !1);
      }
      return dt;
    } finally {
      (v = null), (m = B), (N = !1);
    }
  }
  var P = !1,
    x = null,
    L = -1,
    F = 5,
    R = -1;
  function K() {
    return !(e.unstable_now() - R < F);
  }
  function ue() {
    if (x !== null) {
      var b = e.unstable_now();
      R = b;
      var O = !0;
      try {
        O = x(!0, b);
      } finally {
        O ? re() : ((P = !1), (x = null));
      }
    } else P = !1;
  }
  var re;
  if (typeof u == "function")
    re = function () {
      u(ue);
    };
  else if (typeof MessageChannel < "u") {
    var je = new MessageChannel(),
      ct = je.port2;
    (je.port1.onmessage = ue),
      (re = function () {
        ct.postMessage(null);
      });
  } else
    re = function () {
      A(ue, 0);
    };
  function Ft(b) {
    (x = b), P || ((P = !0), re());
  }
  function Dt(b, O) {
    L = A(function () {
      b(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || N || ((y = !0), Ft(I));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (b) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = m;
      }
      var B = m;
      m = O;
      try {
        return b();
      } finally {
        m = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, O) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var B = m;
      m = b;
      try {
        return O();
      } finally {
        m = B;
      }
    }),
    (e.unstable_scheduleCallback = function (b, O, B) {
      var Z = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? Z + B : Z))
          : (B = Z),
        b)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = B + G),
        (b = {
          id: h++,
          callback: O,
          priorityLevel: b,
          startTime: B,
          expirationTime: G,
          sortIndex: -1,
        }),
        B > Z
          ? ((b.sortIndex = B),
            t(d, b),
            n(c) === null &&
              b === n(d) &&
              (j ? (f(L), (L = -1)) : (j = !0), Dt(k, B - Z)))
          : ((b.sortIndex = G), t(c, b), y || N || ((y = !0), Ft(I))),
        b
      );
    }),
    (e.unstable_shouldYield = K),
    (e.unstable_wrapCallback = function (b) {
      var O = m;
      return function () {
        var B = m;
        m = O;
        try {
          return b.apply(this, arguments);
        } finally {
          m = B;
        }
      };
    });
})(qd);
kd.exports = qd;
var Nv = kd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kv = S,
  Xe = Nv;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Sd = new Set(),
  Wn = {};
function bs(e, t) {
  en(e, t), en(e + "Capture", t);
}
function en(e, t) {
  for (Wn[e] = t, e = 0; e < t.length; e++) Sd.add(t[e]);
}
var At = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ji = Object.prototype.hasOwnProperty,
  qv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fo = {},
  Do = {};
function Sv(e) {
  return ji.call(Do, e)
    ? !0
    : ji.call(Fo, e)
    ? !1
    : qv.test(e)
    ? (Do[e] = !0)
    : ((Fo[e] = !0), !1);
}
function Cv(e, t, n, l) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return l
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ev(e, t, n, l) {
  if (t === null || typeof t > "u" || Cv(e, t, n, l)) return !0;
  if (l) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, l, r, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = l),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ce[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ce[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ce[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ce[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ce[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ce[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ka = /[\-:]([a-z])/g;
function qa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ka, qa);
    Ce[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ka, qa);
    Ce[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ka, qa);
  Ce[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ce[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ce[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Sa(e, t, n, l) {
  var r = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (r !== null
    ? r.type !== 0
    : l ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ev(t, n, r, l) && (n = null),
    l || r === null
      ? Sv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : r.mustUseProperty
      ? (e[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
      : ((t = r.attributeName),
        (l = r.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((r = r.type),
            (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
            l ? e.setAttributeNS(l, t, n) : e.setAttribute(t, n))));
}
var Mt = kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  kl = Symbol.for("react.element"),
  Ts = Symbol.for("react.portal"),
  Ms = Symbol.for("react.fragment"),
  Ca = Symbol.for("react.strict_mode"),
  yi = Symbol.for("react.profiler"),
  Cd = Symbol.for("react.provider"),
  Ed = Symbol.for("react.context"),
  Ea = Symbol.for("react.forward_ref"),
  Ni = Symbol.for("react.suspense"),
  ki = Symbol.for("react.suspense_list"),
  ba = Symbol.for("react.memo"),
  Ht = Symbol.for("react.lazy"),
  bd = Symbol.for("react.offscreen"),
  Oo = Symbol.iterator;
function wn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Oo && e[Oo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ce = Object.assign,
  Wr;
function An(e) {
  if (Wr === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wr = (t && t[1]) || "";
    }
  return (
    `
` +
    Wr +
    e
  );
}
var Qr = !1;
function Kr(e, t) {
  if (!e || Qr) return "";
  Qr = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var l = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          l = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        l = d;
      }
      e();
    }
  } catch (d) {
    if (d && l && typeof d.stack == "string") {
      for (
        var r = d.stack.split(`
`),
          i = l.stack.split(`
`),
          a = r.length - 1,
          o = i.length - 1;
        1 <= a && 0 <= o && r[a] !== i[o];

      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (r[a] !== i[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || r[a] !== i[o])) {
                var c =
                  `
` + r[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    (Qr = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? An(e) : "";
}
function bv(e) {
  switch (e.tag) {
    case 5:
      return An(e.type);
    case 16:
      return An("Lazy");
    case 13:
      return An("Suspense");
    case 19:
      return An("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Kr(e.type, !1)), e;
    case 11:
      return (e = Kr(e.type.render, !1)), e;
    case 1:
      return (e = Kr(e.type, !0)), e;
    default:
      return "";
  }
}
function qi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ms:
      return "Fragment";
    case Ts:
      return "Portal";
    case yi:
      return "Profiler";
    case Ca:
      return "StrictMode";
    case Ni:
      return "Suspense";
    case ki:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ed:
        return (e.displayName || "Context") + ".Consumer";
      case Cd:
        return (e._context.displayName || "Context") + ".Provider";
      case Ea:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ba:
        return (
          (t = e.displayName || null), t !== null ? t : qi(e.type) || "Memo"
        );
      case Ht:
        (t = e._payload), (e = e._init);
        try {
          return qi(e(t));
        } catch {}
    }
  return null;
}
function Iv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return qi(t);
    case 8:
      return t === Ca ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ls(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Id(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Lv(e) {
  var t = Id(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    l = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var r = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (a) {
          (l = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return l;
        },
        setValue: function (a) {
          l = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ql(e) {
  e._valueTracker || (e._valueTracker = Lv(e));
}
function Ld(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    l = "";
  return (
    e && (l = Id(e) ? (e.checked ? "true" : "false") : e.value),
    (e = l),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Zl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Si(e, t) {
  var n = t.checked;
  return ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function _o(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    l = t.checked != null ? t.checked : t.defaultChecked;
  (n = ls(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: l,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ad(e, t) {
  (t = t.checked), t != null && Sa(e, "checked", t, !1);
}
function Ci(e, t) {
  Ad(e, t);
  var n = ls(t.value),
    l = t.type;
  if (n != null)
    l === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (l === "submit" || l === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ei(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ei(e, t.type, ls(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Bo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var l = t.type;
    if (
      !(
        (l !== "submit" && l !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ei(e, t, n) {
  (t !== "number" || Zl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pn = Array.isArray;
function Js(e, t, n, l) {
  if (((e = e.options), t)) {
    t = {};
    for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
    for (n = 0; n < e.length; n++)
      (r = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== r && (e[n].selected = r),
        r && l && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ls(n), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === n) {
        (e[r].selected = !0), l && (e[r].defaultSelected = !0);
        return;
      }
      t !== null || e[r].disabled || (t = e[r]);
    }
    t !== null && (t.selected = !0);
  }
}
function bi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Uo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Pn(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ls(n) };
}
function Pd(e, t) {
  var n = ls(t.value),
    l = ls(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    l != null && (e.defaultValue = "" + l);
}
function Vo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Rd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ii(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Rd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Sl,
  zd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, l, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, l, r);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Sl = Sl || document.createElement("div"),
          Sl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Sl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Av = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tn).forEach(function (e) {
  Av.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tn[t] = Tn[e]);
  });
});
function Td(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Tn.hasOwnProperty(e) && Tn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Md(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var l = n.indexOf("--") === 0,
        r = Td(n, t[n], l);
      n === "float" && (n = "cssFloat"), l ? e.setProperty(n, r) : (e[n] = r);
    }
}
var Pv = ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Li(e, t) {
  if (t) {
    if (Pv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Ai(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Pi = null;
function Ia(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ri = null,
  Ys = null,
  Xs = null;
function Ho(e) {
  if ((e = hl(e))) {
    if (typeof Ri != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = br(t)), Ri(e.stateNode, e.type, t));
  }
}
function Fd(e) {
  Ys ? (Xs ? Xs.push(e) : (Xs = [e])) : (Ys = e);
}
function Dd() {
  if (Ys) {
    var e = Ys,
      t = Xs;
    if (((Xs = Ys = null), Ho(e), t)) for (e = 0; e < t.length; e++) Ho(t[e]);
  }
}
function Od(e, t) {
  return e(t);
}
function _d() {}
var Jr = !1;
function Bd(e, t, n) {
  if (Jr) return e(t, n);
  Jr = !0;
  try {
    return Od(e, t, n);
  } finally {
    (Jr = !1), (Ys !== null || Xs !== null) && (_d(), Dd());
  }
}
function Kn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var l = br(n);
  if (l === null) return null;
  n = l[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (l = !l.disabled) ||
        ((e = e.type),
        (l = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !l);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var zi = !1;
if (At)
  try {
    var jn = {};
    Object.defineProperty(jn, "passive", {
      get: function () {
        zi = !0;
      },
    }),
      window.addEventListener("test", jn, jn),
      window.removeEventListener("test", jn, jn);
  } catch {
    zi = !1;
  }
function Rv(e, t, n, l, r, i, a, o, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var Mn = !1,
  Gl = null,
  $l = !1,
  Ti = null,
  zv = {
    onError: function (e) {
      (Mn = !0), (Gl = e);
    },
  };
function Tv(e, t, n, l, r, i, a, o, c) {
  (Mn = !1), (Gl = null), Rv.apply(zv, arguments);
}
function Mv(e, t, n, l, r, i, a, o, c) {
  if ((Tv.apply(this, arguments), Mn)) {
    if (Mn) {
      var d = Gl;
      (Mn = !1), (Gl = null);
    } else throw Error(C(198));
    $l || (($l = !0), (Ti = d));
  }
}
function Is(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ud(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Wo(e) {
  if (Is(e) !== e) throw Error(C(188));
}
function Fv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Is(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, l = t; ; ) {
    var r = n.return;
    if (r === null) break;
    var i = r.alternate;
    if (i === null) {
      if (((l = r.return), l !== null)) {
        n = l;
        continue;
      }
      break;
    }
    if (r.child === i.child) {
      for (i = r.child; i; ) {
        if (i === n) return Wo(r), e;
        if (i === l) return Wo(r), t;
        i = i.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== l.return) (n = r), (l = i);
    else {
      for (var a = !1, o = r.child; o; ) {
        if (o === n) {
          (a = !0), (n = r), (l = i);
          break;
        }
        if (o === l) {
          (a = !0), (l = r), (n = i);
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = i.child; o; ) {
          if (o === n) {
            (a = !0), (n = i), (l = r);
            break;
          }
          if (o === l) {
            (a = !0), (l = i), (n = r);
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(C(189));
      }
    }
    if (n.alternate !== l) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Vd(e) {
  return (e = Fv(e)), e !== null ? Hd(e) : null;
}
function Hd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wd = Xe.unstable_scheduleCallback,
  Qo = Xe.unstable_cancelCallback,
  Dv = Xe.unstable_shouldYield,
  Ov = Xe.unstable_requestPaint,
  he = Xe.unstable_now,
  _v = Xe.unstable_getCurrentPriorityLevel,
  La = Xe.unstable_ImmediatePriority,
  Qd = Xe.unstable_UserBlockingPriority,
  er = Xe.unstable_NormalPriority,
  Bv = Xe.unstable_LowPriority,
  Kd = Xe.unstable_IdlePriority,
  qr = null,
  kt = null;
function Uv(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function")
    try {
      kt.onCommitFiberRoot(qr, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : Wv,
  Vv = Math.log,
  Hv = Math.LN2;
function Wv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Vv(e) / Hv) | 0)) | 0;
}
var Cl = 64,
  El = 4194304;
function Rn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function tr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var l = 0,
    r = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var o = a & ~r;
    o !== 0 ? (l = Rn(o)) : ((i &= a), i !== 0 && (l = Rn(i)));
  } else (a = n & ~r), a !== 0 ? (l = Rn(a)) : i !== 0 && (l = Rn(i));
  if (l === 0) return 0;
  if (
    t !== 0 &&
    t !== l &&
    !(t & r) &&
    ((r = l & -l), (i = t & -t), r >= i || (r === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((l & 4 && (l |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= l; 0 < t; )
      (n = 31 - pt(t)), (r = 1 << n), (l |= e[n]), (t &= ~r);
  return l;
}
function Qv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Kv(e, t) {
  for (
    var n = e.suspendedLanes,
      l = e.pingedLanes,
      r = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - pt(i),
      o = 1 << a,
      c = r[a];
    c === -1
      ? (!(o & n) || o & l) && (r[a] = Qv(o, t))
      : c <= t && (e.expiredLanes |= o),
      (i &= ~o);
  }
}
function Mi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Jd() {
  var e = Cl;
  return (Cl <<= 1), !(Cl & 4194240) && (Cl = 64), e;
}
function Yr(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pt(t)),
    (e[t] = n);
}
function Jv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var l = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var r = 31 - pt(n),
      i = 1 << r;
    (t[r] = 0), (l[r] = -1), (e[r] = -1), (n &= ~i);
  }
}
function Aa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var l = 31 - pt(n),
      r = 1 << l;
    (r & t) | (e[l] & t) && (e[l] |= t), (n &= ~r);
  }
}
var X = 0;
function Yd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Xd,
  Pa,
  Zd,
  Gd,
  $d,
  Fi = !1,
  bl = [],
  Xt = null,
  Zt = null,
  Gt = null,
  Jn = new Map(),
  Yn = new Map(),
  Qt = [],
  Yv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ko(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      Zt = null;
      break;
    case "mouseover":
    case "mouseout":
      Gt = null;
      break;
    case "pointerover":
    case "pointerout":
      Jn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yn.delete(t.pointerId);
  }
}
function yn(e, t, n, l, r, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: l,
        nativeEvent: i,
        targetContainers: [r],
      }),
      t !== null && ((t = hl(t)), t !== null && Pa(t)),
      e)
    : ((e.eventSystemFlags |= l),
      (t = e.targetContainers),
      r !== null && t.indexOf(r) === -1 && t.push(r),
      e);
}
function Xv(e, t, n, l, r) {
  switch (t) {
    case "focusin":
      return (Xt = yn(Xt, e, t, n, l, r)), !0;
    case "dragenter":
      return (Zt = yn(Zt, e, t, n, l, r)), !0;
    case "mouseover":
      return (Gt = yn(Gt, e, t, n, l, r)), !0;
    case "pointerover":
      var i = r.pointerId;
      return Jn.set(i, yn(Jn.get(i) || null, e, t, n, l, r)), !0;
    case "gotpointercapture":
      return (
        (i = r.pointerId), Yn.set(i, yn(Yn.get(i) || null, e, t, n, l, r)), !0
      );
  }
  return !1;
}
function eu(e) {
  var t = fs(e.target);
  if (t !== null) {
    var n = Is(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ud(n)), t !== null)) {
          (e.blockedOn = t),
            $d(e.priority, function () {
              Zd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Bl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var l = new n.constructor(n.type, n);
      (Pi = l), n.target.dispatchEvent(l), (Pi = null);
    } else return (t = hl(n)), t !== null && Pa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Jo(e, t, n) {
  Bl(e) && n.delete(t);
}
function Zv() {
  (Fi = !1),
    Xt !== null && Bl(Xt) && (Xt = null),
    Zt !== null && Bl(Zt) && (Zt = null),
    Gt !== null && Bl(Gt) && (Gt = null),
    Jn.forEach(Jo),
    Yn.forEach(Jo);
}
function Nn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fi ||
      ((Fi = !0),
      Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, Zv)));
}
function Xn(e) {
  function t(r) {
    return Nn(r, e);
  }
  if (0 < bl.length) {
    Nn(bl[0], e);
    for (var n = 1; n < bl.length; n++) {
      var l = bl[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
  }
  for (
    Xt !== null && Nn(Xt, e),
      Zt !== null && Nn(Zt, e),
      Gt !== null && Nn(Gt, e),
      Jn.forEach(t),
      Yn.forEach(t),
      n = 0;
    n < Qt.length;
    n++
  )
    (l = Qt[n]), l.blockedOn === e && (l.blockedOn = null);
  for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); )
    eu(n), n.blockedOn === null && Qt.shift();
}
var Zs = Mt.ReactCurrentBatchConfig,
  sr = !0;
function Gv(e, t, n, l) {
  var r = X,
    i = Zs.transition;
  Zs.transition = null;
  try {
    (X = 1), Ra(e, t, n, l);
  } finally {
    (X = r), (Zs.transition = i);
  }
}
function $v(e, t, n, l) {
  var r = X,
    i = Zs.transition;
  Zs.transition = null;
  try {
    (X = 4), Ra(e, t, n, l);
  } finally {
    (X = r), (Zs.transition = i);
  }
}
function Ra(e, t, n, l) {
  if (sr) {
    var r = Di(e, t, n, l);
    if (r === null) ri(e, t, l, nr, n), Ko(e, l);
    else if (Xv(r, e, t, n, l)) l.stopPropagation();
    else if ((Ko(e, l), t & 4 && -1 < Yv.indexOf(e))) {
      for (; r !== null; ) {
        var i = hl(r);
        if (
          (i !== null && Xd(i),
          (i = Di(e, t, n, l)),
          i === null && ri(e, t, l, nr, n),
          i === r)
        )
          break;
        r = i;
      }
      r !== null && l.stopPropagation();
    } else ri(e, t, l, null, n);
  }
}
var nr = null;
function Di(e, t, n, l) {
  if (((nr = null), (e = Ia(l)), (e = fs(e)), e !== null))
    if (((t = Is(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ud(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (nr = e), null;
}
function tu(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (_v()) {
        case La:
          return 1;
        case Qd:
          return 4;
        case er:
        case Bv:
          return 16;
        case Kd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jt = null,
  za = null,
  Ul = null;
function su() {
  if (Ul) return Ul;
  var e,
    t = za,
    n = t.length,
    l,
    r = "value" in Jt ? Jt.value : Jt.textContent,
    i = r.length;
  for (e = 0; e < n && t[e] === r[e]; e++);
  var a = n - e;
  for (l = 1; l <= a && t[n - l] === r[i - l]; l++);
  return (Ul = r.slice(e, 1 < l ? 1 - l : void 0));
}
function Vl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Il() {
  return !0;
}
function Yo() {
  return !1;
}
function Ge(e) {
  function t(n, l, r, i, a) {
    (this._reactName = n),
      (this._targetInst = r),
      (this.type = l),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Il
        : Yo),
      (this.isPropagationStopped = Yo),
      this
    );
  }
  return (
    ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Il));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Il));
      },
      persist: function () {},
      isPersistent: Il,
    }),
    t
  );
}
var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ta = Ge(un),
  ul = ce({}, un, { view: 0, detail: 0 }),
  em = Ge(ul),
  Xr,
  Zr,
  kn,
  Sr = ce({}, ul, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ma,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== kn &&
            (kn && e.type === "mousemove"
              ? ((Xr = e.screenX - kn.screenX), (Zr = e.screenY - kn.screenY))
              : (Zr = Xr = 0),
            (kn = e)),
          Xr);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zr;
    },
  }),
  Xo = Ge(Sr),
  tm = ce({}, Sr, { dataTransfer: 0 }),
  sm = Ge(tm),
  nm = ce({}, ul, { relatedTarget: 0 }),
  Gr = Ge(nm),
  lm = ce({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rm = Ge(lm),
  im = ce({}, un, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  am = Ge(im),
  om = ce({}, un, { data: 0 }),
  Zo = Ge(om),
  cm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  dm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  um = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function hm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = um[e]) ? !!t[e] : !1;
}
function Ma() {
  return hm;
}
var vm = ce({}, ul, {
    key: function (e) {
      if (e.key) {
        var t = cm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Vl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? dm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ma,
    charCode: function (e) {
      return e.type === "keypress" ? Vl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Vl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  mm = Ge(vm),
  fm = ce({}, Sr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Go = Ge(fm),
  pm = ce({}, ul, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ma,
  }),
  xm = Ge(pm),
  gm = ce({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wm = Ge(gm),
  jm = ce({}, Sr, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ym = Ge(jm),
  Nm = [9, 13, 27, 32],
  Fa = At && "CompositionEvent" in window,
  Fn = null;
At && "documentMode" in document && (Fn = document.documentMode);
var km = At && "TextEvent" in window && !Fn,
  nu = At && (!Fa || (Fn && 8 < Fn && 11 >= Fn)),
  $o = " ",
  ec = !1;
function lu(e, t) {
  switch (e) {
    case "keyup":
      return Nm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ru(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fs = !1;
function qm(e, t) {
  switch (e) {
    case "compositionend":
      return ru(t);
    case "keypress":
      return t.which !== 32 ? null : ((ec = !0), $o);
    case "textInput":
      return (e = t.data), e === $o && ec ? null : e;
    default:
      return null;
  }
}
function Sm(e, t) {
  if (Fs)
    return e === "compositionend" || (!Fa && lu(e, t))
      ? ((e = su()), (Ul = za = Jt = null), (Fs = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return nu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Cm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function tc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Cm[e.type] : t === "textarea";
}
function iu(e, t, n, l) {
  Fd(l),
    (t = lr(t, "onChange")),
    0 < t.length &&
      ((n = new Ta("onChange", "change", null, n, l)),
      e.push({ event: n, listeners: t }));
}
var Dn = null,
  Zn = null;
function Em(e) {
  xu(e, 0);
}
function Cr(e) {
  var t = _s(e);
  if (Ld(t)) return e;
}
function bm(e, t) {
  if (e === "change") return t;
}
var au = !1;
if (At) {
  var $r;
  if (At) {
    var ei = "oninput" in document;
    if (!ei) {
      var sc = document.createElement("div");
      sc.setAttribute("oninput", "return;"),
        (ei = typeof sc.oninput == "function");
    }
    $r = ei;
  } else $r = !1;
  au = $r && (!document.documentMode || 9 < document.documentMode);
}
function nc() {
  Dn && (Dn.detachEvent("onpropertychange", ou), (Zn = Dn = null));
}
function ou(e) {
  if (e.propertyName === "value" && Cr(Zn)) {
    var t = [];
    iu(t, Zn, e, Ia(e)), Bd(Em, t);
  }
}
function Im(e, t, n) {
  e === "focusin"
    ? (nc(), (Dn = t), (Zn = n), Dn.attachEvent("onpropertychange", ou))
    : e === "focusout" && nc();
}
function Lm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Cr(Zn);
}
function Am(e, t) {
  if (e === "click") return Cr(t);
}
function Pm(e, t) {
  if (e === "input" || e === "change") return Cr(t);
}
function Rm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gt = typeof Object.is == "function" ? Object.is : Rm;
function Gn(e, t) {
  if (gt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    l = Object.keys(t);
  if (n.length !== l.length) return !1;
  for (l = 0; l < n.length; l++) {
    var r = n[l];
    if (!ji.call(t, r) || !gt(e[r], t[r])) return !1;
  }
  return !0;
}
function lc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function rc(e, t) {
  var n = lc(e);
  e = 0;
  for (var l; n; ) {
    if (n.nodeType === 3) {
      if (((l = e + n.textContent.length), e <= t && l >= t))
        return { node: n, offset: t - e };
      e = l;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = lc(n);
  }
}
function cu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? cu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function du() {
  for (var e = window, t = Zl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zl(e.document);
  }
  return t;
}
function Da(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function zm(e) {
  var t = du(),
    n = e.focusedElem,
    l = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    cu(n.ownerDocument.documentElement, n)
  ) {
    if (l !== null && Da(n)) {
      if (
        ((t = l.start),
        (e = l.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var r = n.textContent.length,
          i = Math.min(l.start, r);
        (l = l.end === void 0 ? i : Math.min(l.end, r)),
          !e.extend && i > l && ((r = l), (l = i), (i = r)),
          (r = rc(n, i));
        var a = rc(n, l);
        r &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== r.node ||
            e.anchorOffset !== r.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(r.node, r.offset),
          e.removeAllRanges(),
          i > l
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Tm = At && "documentMode" in document && 11 >= document.documentMode,
  Ds = null,
  Oi = null,
  On = null,
  _i = !1;
function ic(e, t, n) {
  var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _i ||
    Ds == null ||
    Ds !== Zl(l) ||
    ((l = Ds),
    "selectionStart" in l && Da(l)
      ? (l = { start: l.selectionStart, end: l.selectionEnd })
      : ((l = (
          (l.ownerDocument && l.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (l = {
          anchorNode: l.anchorNode,
          anchorOffset: l.anchorOffset,
          focusNode: l.focusNode,
          focusOffset: l.focusOffset,
        })),
    (On && Gn(On, l)) ||
      ((On = l),
      (l = lr(Oi, "onSelect")),
      0 < l.length &&
        ((t = new Ta("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: l }),
        (t.target = Ds))));
}
function Ll(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Os = {
    animationend: Ll("Animation", "AnimationEnd"),
    animationiteration: Ll("Animation", "AnimationIteration"),
    animationstart: Ll("Animation", "AnimationStart"),
    transitionend: Ll("Transition", "TransitionEnd"),
  },
  ti = {},
  uu = {};
At &&
  ((uu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Os.animationend.animation,
    delete Os.animationiteration.animation,
    delete Os.animationstart.animation),
  "TransitionEvent" in window || delete Os.transitionend.transition);
function Er(e) {
  if (ti[e]) return ti[e];
  if (!Os[e]) return e;
  var t = Os[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in uu) return (ti[e] = t[n]);
  return e;
}
var hu = Er("animationend"),
  vu = Er("animationiteration"),
  mu = Er("animationstart"),
  fu = Er("transitionend"),
  pu = new Map(),
  ac =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function is(e, t) {
  pu.set(e, t), bs(t, [e]);
}
for (var si = 0; si < ac.length; si++) {
  var ni = ac[si],
    Mm = ni.toLowerCase(),
    Fm = ni[0].toUpperCase() + ni.slice(1);
  is(Mm, "on" + Fm);
}
is(hu, "onAnimationEnd");
is(vu, "onAnimationIteration");
is(mu, "onAnimationStart");
is("dblclick", "onDoubleClick");
is("focusin", "onFocus");
is("focusout", "onBlur");
is(fu, "onTransitionEnd");
en("onMouseEnter", ["mouseout", "mouseover"]);
en("onMouseLeave", ["mouseout", "mouseover"]);
en("onPointerEnter", ["pointerout", "pointerover"]);
en("onPointerLeave", ["pointerout", "pointerover"]);
bs(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
bs(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
bs("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bs(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
bs(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
bs(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var zn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Dm = new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));
function oc(e, t, n) {
  var l = e.type || "unknown-event";
  (e.currentTarget = n), Mv(l, t, void 0, e), (e.currentTarget = null);
}
function xu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var l = e[n],
      r = l.event;
    l = l.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = l.length - 1; 0 <= a; a--) {
          var o = l[a],
            c = o.instance,
            d = o.currentTarget;
          if (((o = o.listener), c !== i && r.isPropagationStopped())) break e;
          oc(r, o, d), (i = c);
        }
      else
        for (a = 0; a < l.length; a++) {
          if (
            ((o = l[a]),
            (c = o.instance),
            (d = o.currentTarget),
            (o = o.listener),
            c !== i && r.isPropagationStopped())
          )
            break e;
          oc(r, o, d), (i = c);
        }
    }
  }
  if ($l) throw ((e = Ti), ($l = !1), (Ti = null), e);
}
function ee(e, t) {
  var n = t[Wi];
  n === void 0 && (n = t[Wi] = new Set());
  var l = e + "__bubble";
  n.has(l) || (gu(t, e, 2, !1), n.add(l));
}
function li(e, t, n) {
  var l = 0;
  t && (l |= 4), gu(n, e, l, t);
}
var Al = "_reactListening" + Math.random().toString(36).slice(2);
function $n(e) {
  if (!e[Al]) {
    (e[Al] = !0),
      Sd.forEach(function (n) {
        n !== "selectionchange" && (Dm.has(n) || li(n, !1, e), li(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Al] || ((t[Al] = !0), li("selectionchange", !1, t));
  }
}
function gu(e, t, n, l) {
  switch (tu(t)) {
    case 1:
      var r = Gv;
      break;
    case 4:
      r = $v;
      break;
    default:
      r = Ra;
  }
  (n = r.bind(null, t, n, e)),
    (r = void 0),
    !zi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (r = !0),
    l
      ? r !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: r })
        : e.addEventListener(t, n, !0)
      : r !== void 0
      ? e.addEventListener(t, n, { passive: r })
      : e.addEventListener(t, n, !1);
}
function ri(e, t, n, l, r) {
  var i = l;
  if (!(t & 1) && !(t & 2) && l !== null)
    e: for (;;) {
      if (l === null) return;
      var a = l.tag;
      if (a === 3 || a === 4) {
        var o = l.stateNode.containerInfo;
        if (o === r || (o.nodeType === 8 && o.parentNode === r)) break;
        if (a === 4)
          for (a = l.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === r || (c.nodeType === 8 && c.parentNode === r))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = fs(o)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            l = i = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      l = l.return;
    }
  Bd(function () {
    var d = i,
      h = Ia(n),
      v = [];
    e: {
      var m = pu.get(e);
      if (m !== void 0) {
        var N = Ta,
          y = e;
        switch (e) {
          case "keypress":
            if (Vl(n) === 0) break e;
          case "keydown":
          case "keyup":
            N = mm;
            break;
          case "focusin":
            (y = "focus"), (N = Gr);
            break;
          case "focusout":
            (y = "blur"), (N = Gr);
            break;
          case "beforeblur":
          case "afterblur":
            N = Gr;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            N = Xo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            N = sm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            N = xm;
            break;
          case hu:
          case vu:
          case mu:
            N = rm;
            break;
          case fu:
            N = wm;
            break;
          case "scroll":
            N = em;
            break;
          case "wheel":
            N = ym;
            break;
          case "copy":
          case "cut":
          case "paste":
            N = am;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            N = Go;
        }
        var j = (t & 4) !== 0,
          A = !j && e === "scroll",
          f = j ? (m !== null ? m + "Capture" : null) : m;
        j = [];
        for (var u = d, p; u !== null; ) {
          p = u;
          var k = p.stateNode;
          if (
            (p.tag === 5 &&
              k !== null &&
              ((p = k),
              f !== null && ((k = Kn(u, f)), k != null && j.push(el(u, k, p)))),
            A)
          )
            break;
          u = u.return;
        }
        0 < j.length &&
          ((m = new N(m, y, null, n, h)), v.push({ event: m, listeners: j }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (N = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Pi &&
            (y = n.relatedTarget || n.fromElement) &&
            (fs(y) || y[Pt]))
        )
          break e;
        if (
          (N || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          N
            ? ((y = n.relatedTarget || n.toElement),
              (N = d),
              (y = y ? fs(y) : null),
              y !== null &&
                ((A = Is(y)), y !== A || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((N = null), (y = d)),
          N !== y)
        ) {
          if (
            ((j = Xo),
            (k = "onMouseLeave"),
            (f = "onMouseEnter"),
            (u = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((j = Go),
              (k = "onPointerLeave"),
              (f = "onPointerEnter"),
              (u = "pointer")),
            (A = N == null ? m : _s(N)),
            (p = y == null ? m : _s(y)),
            (m = new j(k, u + "leave", N, n, h)),
            (m.target = A),
            (m.relatedTarget = p),
            (k = null),
            fs(h) === d &&
              ((j = new j(f, u + "enter", y, n, h)),
              (j.target = p),
              (j.relatedTarget = A),
              (k = j)),
            (A = k),
            N && y)
          )
            t: {
              for (j = N, f = y, u = 0, p = j; p; p = Rs(p)) u++;
              for (p = 0, k = f; k; k = Rs(k)) p++;
              for (; 0 < u - p; ) (j = Rs(j)), u--;
              for (; 0 < p - u; ) (f = Rs(f)), p--;
              for (; u--; ) {
                if (j === f || (f !== null && j === f.alternate)) break t;
                (j = Rs(j)), (f = Rs(f));
              }
              j = null;
            }
          else j = null;
          N !== null && cc(v, m, N, j, !1),
            y !== null && A !== null && cc(v, A, y, j, !0);
        }
      }
      e: {
        if (
          ((m = d ? _s(d) : window),
          (N = m.nodeName && m.nodeName.toLowerCase()),
          N === "select" || (N === "input" && m.type === "file"))
        )
          var I = bm;
        else if (tc(m))
          if (au) I = Pm;
          else {
            I = Lm;
            var P = Im;
          }
        else
          (N = m.nodeName) &&
            N.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (I = Am);
        if (I && (I = I(e, d))) {
          iu(v, I, n, h);
          break e;
        }
        P && P(e, m, d),
          e === "focusout" &&
            (P = m._wrapperState) &&
            P.controlled &&
            m.type === "number" &&
            Ei(m, "number", m.value);
      }
      switch (((P = d ? _s(d) : window), e)) {
        case "focusin":
          (tc(P) || P.contentEditable === "true") &&
            ((Ds = P), (Oi = d), (On = null));
          break;
        case "focusout":
          On = Oi = Ds = null;
          break;
        case "mousedown":
          _i = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (_i = !1), ic(v, n, h);
          break;
        case "selectionchange":
          if (Tm) break;
        case "keydown":
        case "keyup":
          ic(v, n, h);
      }
      var x;
      if (Fa)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Fs
          ? lu(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (nu &&
          n.locale !== "ko" &&
          (Fs || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Fs && (x = su())
            : ((Jt = h),
              (za = "value" in Jt ? Jt.value : Jt.textContent),
              (Fs = !0))),
        (P = lr(d, L)),
        0 < P.length &&
          ((L = new Zo(L, e, null, n, h)),
          v.push({ event: L, listeners: P }),
          x ? (L.data = x) : ((x = ru(n)), x !== null && (L.data = x)))),
        (x = km ? qm(e, n) : Sm(e, n)) &&
          ((d = lr(d, "onBeforeInput")),
          0 < d.length &&
            ((h = new Zo("onBeforeInput", "beforeinput", null, n, h)),
            v.push({ event: h, listeners: d }),
            (h.data = x)));
    }
    xu(v, t);
  });
}
function el(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function lr(e, t) {
  for (var n = t + "Capture", l = []; e !== null; ) {
    var r = e,
      i = r.stateNode;
    r.tag === 5 &&
      i !== null &&
      ((r = i),
      (i = Kn(e, n)),
      i != null && l.unshift(el(e, i, r)),
      (i = Kn(e, t)),
      i != null && l.push(el(e, i, r))),
      (e = e.return);
  }
  return l;
}
function Rs(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cc(e, t, n, l, r) {
  for (var i = t._reactName, a = []; n !== null && n !== l; ) {
    var o = n,
      c = o.alternate,
      d = o.stateNode;
    if (c !== null && c === l) break;
    o.tag === 5 &&
      d !== null &&
      ((o = d),
      r
        ? ((c = Kn(n, i)), c != null && a.unshift(el(n, c, o)))
        : r || ((c = Kn(n, i)), c != null && a.push(el(n, c, o)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Om = /\r\n?/g,
  _m = /\u0000|\uFFFD/g;
function dc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Om,
      `
`
    )
    .replace(_m, "");
}
function Pl(e, t, n) {
  if (((t = dc(t)), dc(e) !== t && n)) throw Error(C(425));
}
function rr() {}
var Bi = null,
  Ui = null;
function Vi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Hi = typeof setTimeout == "function" ? setTimeout : void 0,
  Bm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  uc = typeof Promise == "function" ? Promise : void 0,
  Um =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof uc < "u"
      ? function (e) {
          return uc.resolve(null).then(e).catch(Vm);
        }
      : Hi;
function Vm(e) {
  setTimeout(function () {
    throw e;
  });
}
function ii(e, t) {
  var n = t,
    l = 0;
  do {
    var r = n.nextSibling;
    if ((e.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (l === 0) {
          e.removeChild(r), Xn(t);
          return;
        }
        l--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || l++;
    n = r;
  } while (n);
  Xn(t);
}
function $t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function hc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var hn = Math.random().toString(36).slice(2),
  Nt = "__reactFiber$" + hn,
  tl = "__reactProps$" + hn,
  Pt = "__reactContainer$" + hn,
  Wi = "__reactEvents$" + hn,
  Hm = "__reactListeners$" + hn,
  Wm = "__reactHandles$" + hn;
function fs(e) {
  var t = e[Nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Pt] || n[Nt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = hc(e); e !== null; ) {
          if ((n = e[Nt])) return n;
          e = hc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function hl(e) {
  return (
    (e = e[Nt] || e[Pt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function _s(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function br(e) {
  return e[tl] || null;
}
var Qi = [],
  Bs = -1;
function as(e) {
  return { current: e };
}
function te(e) {
  0 > Bs || ((e.current = Qi[Bs]), (Qi[Bs] = null), Bs--);
}
function $(e, t) {
  Bs++, (Qi[Bs] = e.current), (e.current = t);
}
var rs = {},
  Ae = as(rs),
  _e = as(!1),
  Ns = rs;
function tn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rs;
  var l = e.stateNode;
  if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
    return l.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    i;
  for (i in n) r[i] = t[i];
  return (
    l &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function Be(e) {
  return (e = e.childContextTypes), e != null;
}
function ir() {
  te(_e), te(Ae);
}
function vc(e, t, n) {
  if (Ae.current !== rs) throw Error(C(168));
  $(Ae, t), $(_e, n);
}
function wu(e, t, n) {
  var l = e.stateNode;
  if (((t = t.childContextTypes), typeof l.getChildContext != "function"))
    return n;
  l = l.getChildContext();
  for (var r in l) if (!(r in t)) throw Error(C(108, Iv(e) || "Unknown", r));
  return ce({}, n, l);
}
function ar(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rs),
    (Ns = Ae.current),
    $(Ae, e),
    $(_e, _e.current),
    !0
  );
}
function mc(e, t, n) {
  var l = e.stateNode;
  if (!l) throw Error(C(169));
  n
    ? ((e = wu(e, t, Ns)),
      (l.__reactInternalMemoizedMergedChildContext = e),
      te(_e),
      te(Ae),
      $(Ae, e))
    : te(_e),
    $(_e, n);
}
var Ct = null,
  Ir = !1,
  ai = !1;
function ju(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function Qm(e) {
  (Ir = !0), ju(e);
}
function os() {
  if (!ai && Ct !== null) {
    ai = !0;
    var e = 0,
      t = X;
    try {
      var n = Ct;
      for (X = 1; e < n.length; e++) {
        var l = n[e];
        do l = l(!0);
        while (l !== null);
      }
      (Ct = null), (Ir = !1);
    } catch (r) {
      throw (Ct !== null && (Ct = Ct.slice(e + 1)), Wd(La, os), r);
    } finally {
      (X = t), (ai = !1);
    }
  }
  return null;
}
var Us = [],
  Vs = 0,
  or = null,
  cr = 0,
  st = [],
  nt = 0,
  ks = null,
  Et = 1,
  bt = "";
function vs(e, t) {
  (Us[Vs++] = cr), (Us[Vs++] = or), (or = e), (cr = t);
}
function yu(e, t, n) {
  (st[nt++] = Et), (st[nt++] = bt), (st[nt++] = ks), (ks = e);
  var l = Et;
  e = bt;
  var r = 32 - pt(l) - 1;
  (l &= ~(1 << r)), (n += 1);
  var i = 32 - pt(t) + r;
  if (30 < i) {
    var a = r - (r % 5);
    (i = (l & ((1 << a) - 1)).toString(32)),
      (l >>= a),
      (r -= a),
      (Et = (1 << (32 - pt(t) + r)) | (n << r) | l),
      (bt = i + e);
  } else (Et = (1 << i) | (n << r) | l), (bt = e);
}
function Oa(e) {
  e.return !== null && (vs(e, 1), yu(e, 1, 0));
}
function _a(e) {
  for (; e === or; )
    (or = Us[--Vs]), (Us[Vs] = null), (cr = Us[--Vs]), (Us[Vs] = null);
  for (; e === ks; )
    (ks = st[--nt]),
      (st[nt] = null),
      (bt = st[--nt]),
      (st[nt] = null),
      (Et = st[--nt]),
      (st[nt] = null);
}
var Ye = null,
  Je = null,
  le = !1,
  ft = null;
function Nu(e, t) {
  var n = rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function fc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Je = $t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (Je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ks !== null ? { id: Et, overflow: bt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (Je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ki(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ji(e) {
  if (le) {
    var t = Je;
    if (t) {
      var n = t;
      if (!fc(e, t)) {
        if (Ki(e)) throw Error(C(418));
        t = $t(n.nextSibling);
        var l = Ye;
        t && fc(e, t)
          ? Nu(l, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e));
      }
    } else {
      if (Ki(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e);
    }
  }
}
function pc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ye = e;
}
function Rl(e) {
  if (e !== Ye) return !1;
  if (!le) return pc(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vi(e.type, e.memoizedProps))),
    t && (t = Je))
  ) {
    if (Ki(e)) throw (ku(), Error(C(418)));
    for (; t; ) Nu(e, t), (t = $t(t.nextSibling));
  }
  if ((pc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Je = $t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = Ye ? $t(e.stateNode.nextSibling) : null;
  return !0;
}
function ku() {
  for (var e = Je; e; ) e = $t(e.nextSibling);
}
function sn() {
  (Je = Ye = null), (le = !1);
}
function Ba(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var Km = Mt.ReactCurrentBatchConfig;
function qn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var l = n.stateNode;
      }
      if (!l) throw Error(C(147, e));
      var r = l,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var o = r.refs;
            a === null ? delete o[i] : (o[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function zl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function xc(e) {
  var t = e._init;
  return t(e._payload);
}
function qu(e) {
  function t(f, u) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [u]), (f.flags |= 16)) : p.push(u);
    }
  }
  function n(f, u) {
    if (!e) return null;
    for (; u !== null; ) t(f, u), (u = u.sibling);
    return null;
  }
  function l(f, u) {
    for (f = new Map(); u !== null; )
      u.key !== null ? f.set(u.key, u) : f.set(u.index, u), (u = u.sibling);
    return f;
  }
  function r(f, u) {
    return (f = ns(f, u)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, u, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < u ? ((f.flags |= 2), u) : p)
            : ((f.flags |= 2), u))
        : ((f.flags |= 1048576), u)
    );
  }
  function a(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function o(f, u, p, k) {
    return u === null || u.tag !== 6
      ? ((u = mi(p, f.mode, k)), (u.return = f), u)
      : ((u = r(u, p)), (u.return = f), u);
  }
  function c(f, u, p, k) {
    var I = p.type;
    return I === Ms
      ? h(f, u, p.props.children, k, p.key)
      : u !== null &&
        (u.elementType === I ||
          (typeof I == "object" &&
            I !== null &&
            I.$$typeof === Ht &&
            xc(I) === u.type))
      ? ((k = r(u, p.props)), (k.ref = qn(f, u, p)), (k.return = f), k)
      : ((k = Xl(p.type, p.key, p.props, null, f.mode, k)),
        (k.ref = qn(f, u, p)),
        (k.return = f),
        k);
  }
  function d(f, u, p, k) {
    return u === null ||
      u.tag !== 4 ||
      u.stateNode.containerInfo !== p.containerInfo ||
      u.stateNode.implementation !== p.implementation
      ? ((u = fi(p, f.mode, k)), (u.return = f), u)
      : ((u = r(u, p.children || [])), (u.return = f), u);
  }
  function h(f, u, p, k, I) {
    return u === null || u.tag !== 7
      ? ((u = ys(p, f.mode, k, I)), (u.return = f), u)
      : ((u = r(u, p)), (u.return = f), u);
  }
  function v(f, u, p) {
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return (u = mi("" + u, f.mode, p)), (u.return = f), u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case kl:
          return (
            (p = Xl(u.type, u.key, u.props, null, f.mode, p)),
            (p.ref = qn(f, null, u)),
            (p.return = f),
            p
          );
        case Ts:
          return (u = fi(u, f.mode, p)), (u.return = f), u;
        case Ht:
          var k = u._init;
          return v(f, k(u._payload), p);
      }
      if (Pn(u) || wn(u))
        return (u = ys(u, f.mode, p, null)), (u.return = f), u;
      zl(f, u);
    }
    return null;
  }
  function m(f, u, p, k) {
    var I = u !== null ? u.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return I !== null ? null : o(f, u, "" + p, k);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case kl:
          return p.key === I ? c(f, u, p, k) : null;
        case Ts:
          return p.key === I ? d(f, u, p, k) : null;
        case Ht:
          return (I = p._init), m(f, u, I(p._payload), k);
      }
      if (Pn(p) || wn(p)) return I !== null ? null : h(f, u, p, k, null);
      zl(f, p);
    }
    return null;
  }
  function N(f, u, p, k, I) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (f = f.get(p) || null), o(u, f, "" + k, I);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case kl:
          return (f = f.get(k.key === null ? p : k.key) || null), c(u, f, k, I);
        case Ts:
          return (f = f.get(k.key === null ? p : k.key) || null), d(u, f, k, I);
        case Ht:
          var P = k._init;
          return N(f, u, p, P(k._payload), I);
      }
      if (Pn(k) || wn(k)) return (f = f.get(p) || null), h(u, f, k, I, null);
      zl(u, k);
    }
    return null;
  }
  function y(f, u, p, k) {
    for (
      var I = null, P = null, x = u, L = (u = 0), F = null;
      x !== null && L < p.length;
      L++
    ) {
      x.index > L ? ((F = x), (x = null)) : (F = x.sibling);
      var R = m(f, x, p[L], k);
      if (R === null) {
        x === null && (x = F);
        break;
      }
      e && x && R.alternate === null && t(f, x),
        (u = i(R, u, L)),
        P === null ? (I = R) : (P.sibling = R),
        (P = R),
        (x = F);
    }
    if (L === p.length) return n(f, x), le && vs(f, L), I;
    if (x === null) {
      for (; L < p.length; L++)
        (x = v(f, p[L], k)),
          x !== null &&
            ((u = i(x, u, L)), P === null ? (I = x) : (P.sibling = x), (P = x));
      return le && vs(f, L), I;
    }
    for (x = l(f, x); L < p.length; L++)
      (F = N(x, f, L, p[L], k)),
        F !== null &&
          (e && F.alternate !== null && x.delete(F.key === null ? L : F.key),
          (u = i(F, u, L)),
          P === null ? (I = F) : (P.sibling = F),
          (P = F));
    return (
      e &&
        x.forEach(function (K) {
          return t(f, K);
        }),
      le && vs(f, L),
      I
    );
  }
  function j(f, u, p, k) {
    var I = wn(p);
    if (typeof I != "function") throw Error(C(150));
    if (((p = I.call(p)), p == null)) throw Error(C(151));
    for (
      var P = (I = null), x = u, L = (u = 0), F = null, R = p.next();
      x !== null && !R.done;
      L++, R = p.next()
    ) {
      x.index > L ? ((F = x), (x = null)) : (F = x.sibling);
      var K = m(f, x, R.value, k);
      if (K === null) {
        x === null && (x = F);
        break;
      }
      e && x && K.alternate === null && t(f, x),
        (u = i(K, u, L)),
        P === null ? (I = K) : (P.sibling = K),
        (P = K),
        (x = F);
    }
    if (R.done) return n(f, x), le && vs(f, L), I;
    if (x === null) {
      for (; !R.done; L++, R = p.next())
        (R = v(f, R.value, k)),
          R !== null &&
            ((u = i(R, u, L)), P === null ? (I = R) : (P.sibling = R), (P = R));
      return le && vs(f, L), I;
    }
    for (x = l(f, x); !R.done; L++, R = p.next())
      (R = N(x, f, L, R.value, k)),
        R !== null &&
          (e && R.alternate !== null && x.delete(R.key === null ? L : R.key),
          (u = i(R, u, L)),
          P === null ? (I = R) : (P.sibling = R),
          (P = R));
    return (
      e &&
        x.forEach(function (ue) {
          return t(f, ue);
        }),
      le && vs(f, L),
      I
    );
  }
  function A(f, u, p, k) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Ms &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case kl:
          e: {
            for (var I = p.key, P = u; P !== null; ) {
              if (P.key === I) {
                if (((I = p.type), I === Ms)) {
                  if (P.tag === 7) {
                    n(f, P.sibling),
                      (u = r(P, p.props.children)),
                      (u.return = f),
                      (f = u);
                    break e;
                  }
                } else if (
                  P.elementType === I ||
                  (typeof I == "object" &&
                    I !== null &&
                    I.$$typeof === Ht &&
                    xc(I) === P.type)
                ) {
                  n(f, P.sibling),
                    (u = r(P, p.props)),
                    (u.ref = qn(f, P, p)),
                    (u.return = f),
                    (f = u);
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            p.type === Ms
              ? ((u = ys(p.props.children, f.mode, k, p.key)),
                (u.return = f),
                (f = u))
              : ((k = Xl(p.type, p.key, p.props, null, f.mode, k)),
                (k.ref = qn(f, u, p)),
                (k.return = f),
                (f = k));
          }
          return a(f);
        case Ts:
          e: {
            for (P = p.key; u !== null; ) {
              if (u.key === P)
                if (
                  u.tag === 4 &&
                  u.stateNode.containerInfo === p.containerInfo &&
                  u.stateNode.implementation === p.implementation
                ) {
                  n(f, u.sibling),
                    (u = r(u, p.children || [])),
                    (u.return = f),
                    (f = u);
                  break e;
                } else {
                  n(f, u);
                  break;
                }
              else t(f, u);
              u = u.sibling;
            }
            (u = fi(p, f.mode, k)), (u.return = f), (f = u);
          }
          return a(f);
        case Ht:
          return (P = p._init), A(f, u, P(p._payload), k);
      }
      if (Pn(p)) return y(f, u, p, k);
      if (wn(p)) return j(f, u, p, k);
      zl(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        u !== null && u.tag === 6
          ? (n(f, u.sibling), (u = r(u, p)), (u.return = f), (f = u))
          : (n(f, u), (u = mi(p, f.mode, k)), (u.return = f), (f = u)),
        a(f))
      : n(f, u);
  }
  return A;
}
var nn = qu(!0),
  Su = qu(!1),
  dr = as(null),
  ur = null,
  Hs = null,
  Ua = null;
function Va() {
  Ua = Hs = ur = null;
}
function Ha(e) {
  var t = dr.current;
  te(dr), (e._currentValue = t);
}
function Yi(e, t, n) {
  for (; e !== null; ) {
    var l = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
        : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Gs(e, t) {
  (ur = e),
    (Ua = Hs = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Oe = !0), (e.firstContext = null));
}
function at(e) {
  var t = e._currentValue;
  if (Ua !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hs === null)) {
      if (ur === null) throw Error(C(308));
      (Hs = e), (ur.dependencies = { lanes: 0, firstContext: e });
    } else Hs = Hs.next = e;
  return t;
}
var ps = null;
function Wa(e) {
  ps === null ? (ps = [e]) : ps.push(e);
}
function Cu(e, t, n, l) {
  var r = t.interleaved;
  return (
    r === null ? ((n.next = n), Wa(t)) : ((n.next = r.next), (r.next = n)),
    (t.interleaved = n),
    Rt(e, l)
  );
}
function Rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Wt = !1;
function Qa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Eu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function It(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function es(e, t, n) {
  var l = e.updateQueue;
  if (l === null) return null;
  if (((l = l.shared), Y & 2)) {
    var r = l.pending;
    return (
      r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (l.pending = t),
      Rt(e, n)
    );
  }
  return (
    (r = l.interleaved),
    r === null ? ((t.next = t), Wa(l)) : ((t.next = r.next), (r.next = t)),
    (l.interleaved = t),
    Rt(e, n)
  );
}
function Hl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var l = t.lanes;
    (l &= e.pendingLanes), (n |= l), (t.lanes = n), Aa(e, n);
  }
}
function gc(e, t) {
  var n = e.updateQueue,
    l = e.alternate;
  if (l !== null && ((l = l.updateQueue), n === l)) {
    var r = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (r = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (r = i = t) : (i = i.next = t);
    } else r = i = t;
    (n = {
      baseState: l.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: i,
      shared: l.shared,
      effects: l.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function hr(e, t, n, l) {
  var r = e.updateQueue;
  Wt = !1;
  var i = r.firstBaseUpdate,
    a = r.lastBaseUpdate,
    o = r.shared.pending;
  if (o !== null) {
    r.shared.pending = null;
    var c = o,
      d = c.next;
    (c.next = null), a === null ? (i = d) : (a.next = d), (a = c);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (o = h.lastBaseUpdate),
      o !== a &&
        (o === null ? (h.firstBaseUpdate = d) : (o.next = d),
        (h.lastBaseUpdate = c)));
  }
  if (i !== null) {
    var v = r.baseState;
    (a = 0), (h = d = c = null), (o = i);
    do {
      var m = o.lane,
        N = o.eventTime;
      if ((l & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: N,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var y = e,
            j = o;
          switch (((m = t), (N = n), j.tag)) {
            case 1:
              if (((y = j.payload), typeof y == "function")) {
                v = y.call(N, v, m);
                break e;
              }
              v = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = j.payload),
                (m = typeof y == "function" ? y.call(N, v, m) : y),
                m == null)
              )
                break e;
              v = ce({}, v, m);
              break e;
            case 2:
              Wt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (m = r.effects),
          m === null ? (r.effects = [o]) : m.push(o));
      } else
        (N = {
          eventTime: N,
          lane: m,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          h === null ? ((d = h = N), (c = v)) : (h = h.next = N),
          (a |= m);
      if (((o = o.next), o === null)) {
        if (((o = r.shared.pending), o === null)) break;
        (m = o),
          (o = m.next),
          (m.next = null),
          (r.lastBaseUpdate = m),
          (r.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (c = v),
      (r.baseState = c),
      (r.firstBaseUpdate = d),
      (r.lastBaseUpdate = h),
      (t = r.shared.interleaved),
      t !== null)
    ) {
      r = t;
      do (a |= r.lane), (r = r.next);
      while (r !== t);
    } else i === null && (r.shared.lanes = 0);
    (Ss |= a), (e.lanes = a), (e.memoizedState = v);
  }
}
function wc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var l = e[t],
        r = l.callback;
      if (r !== null) {
        if (((l.callback = null), (l = n), typeof r != "function"))
          throw Error(C(191, r));
        r.call(l);
      }
    }
}
var vl = {},
  qt = as(vl),
  sl = as(vl),
  nl = as(vl);
function xs(e) {
  if (e === vl) throw Error(C(174));
  return e;
}
function Ka(e, t) {
  switch (($(nl, t), $(sl, e), $(qt, vl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ii(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ii(t, e));
  }
  te(qt), $(qt, t);
}
function ln() {
  te(qt), te(sl), te(nl);
}
function bu(e) {
  xs(nl.current);
  var t = xs(qt.current),
    n = Ii(t, e.type);
  t !== n && ($(sl, e), $(qt, n));
}
function Ja(e) {
  sl.current === e && (te(qt), te(sl));
}
var ae = as(0);
function vr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var oi = [];
function Ya() {
  for (var e = 0; e < oi.length; e++)
    oi[e]._workInProgressVersionPrimary = null;
  oi.length = 0;
}
var Wl = Mt.ReactCurrentDispatcher,
  ci = Mt.ReactCurrentBatchConfig,
  qs = 0,
  oe = null,
  fe = null,
  ge = null,
  mr = !1,
  _n = !1,
  ll = 0,
  Jm = 0;
function Ee() {
  throw Error(C(321));
}
function Xa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!gt(e[n], t[n])) return !1;
  return !0;
}
function Za(e, t, n, l, r, i) {
  if (
    ((qs = i),
    (oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Wl.current = e === null || e.memoizedState === null ? Gm : $m),
    (e = n(l, r)),
    _n)
  ) {
    i = 0;
    do {
      if (((_n = !1), (ll = 0), 25 <= i)) throw Error(C(301));
      (i += 1),
        (ge = fe = null),
        (t.updateQueue = null),
        (Wl.current = ef),
        (e = n(l, r));
    } while (_n);
  }
  if (
    ((Wl.current = fr),
    (t = fe !== null && fe.next !== null),
    (qs = 0),
    (ge = fe = oe = null),
    (mr = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Ga() {
  var e = ll !== 0;
  return (ll = 0), e;
}
function yt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ge === null ? (oe.memoizedState = ge = e) : (ge = ge.next = e), ge;
}
function ot() {
  if (fe === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = fe.next;
  var t = ge === null ? oe.memoizedState : ge.next;
  if (t !== null) (ge = t), (fe = e);
  else {
    if (e === null) throw Error(C(310));
    (fe = e),
      (e = {
        memoizedState: fe.memoizedState,
        baseState: fe.baseState,
        baseQueue: fe.baseQueue,
        queue: fe.queue,
        next: null,
      }),
      ge === null ? (oe.memoizedState = ge = e) : (ge = ge.next = e);
  }
  return ge;
}
function rl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function di(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var l = fe,
    r = l.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (r !== null) {
      var a = r.next;
      (r.next = i.next), (i.next = a);
    }
    (l.baseQueue = r = i), (n.pending = null);
  }
  if (r !== null) {
    (i = r.next), (l = l.baseState);
    var o = (a = null),
      c = null,
      d = i;
    do {
      var h = d.lane;
      if ((qs & h) === h)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (l = d.hasEagerState ? d.eagerState : e(l, d.action));
      else {
        var v = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        c === null ? ((o = c = v), (a = l)) : (c = c.next = v),
          (oe.lanes |= h),
          (Ss |= h);
      }
      d = d.next;
    } while (d !== null && d !== i);
    c === null ? (a = l) : (c.next = o),
      gt(l, t.memoizedState) || (Oe = !0),
      (t.memoizedState = l),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = l);
  }
  if (((e = n.interleaved), e !== null)) {
    r = e;
    do (i = r.lane), (oe.lanes |= i), (Ss |= i), (r = r.next);
    while (r !== e);
  } else r === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ui(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var l = n.dispatch,
    r = n.pending,
    i = t.memoizedState;
  if (r !== null) {
    n.pending = null;
    var a = (r = r.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== r);
    gt(i, t.memoizedState) || (Oe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, l];
}
function Iu() {}
function Lu(e, t) {
  var n = oe,
    l = ot(),
    r = t(),
    i = !gt(l.memoizedState, r);
  if (
    (i && ((l.memoizedState = r), (Oe = !0)),
    (l = l.queue),
    $a(Ru.bind(null, n, l, e), [e]),
    l.getSnapshot !== t || i || (ge !== null && ge.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      il(9, Pu.bind(null, n, l, r, t), void 0, null),
      we === null)
    )
      throw Error(C(349));
    qs & 30 || Au(n, t, r);
  }
  return r;
}
function Au(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Pu(e, t, n, l) {
  (t.value = n), (t.getSnapshot = l), zu(t) && Tu(e);
}
function Ru(e, t, n) {
  return n(function () {
    zu(t) && Tu(e);
  });
}
function zu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gt(e, n);
  } catch {
    return !0;
  }
}
function Tu(e) {
  var t = Rt(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function jc(e) {
  var t = yt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: rl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Zm.bind(null, oe, e)),
    [t.memoizedState, e]
  );
}
function il(e, t, n, l) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: l, next: null }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e))),
    e
  );
}
function Mu() {
  return ot().memoizedState;
}
function Ql(e, t, n, l) {
  var r = yt();
  (oe.flags |= e),
    (r.memoizedState = il(1 | t, n, void 0, l === void 0 ? null : l));
}
function Lr(e, t, n, l) {
  var r = ot();
  l = l === void 0 ? null : l;
  var i = void 0;
  if (fe !== null) {
    var a = fe.memoizedState;
    if (((i = a.destroy), l !== null && Xa(l, a.deps))) {
      r.memoizedState = il(t, n, i, l);
      return;
    }
  }
  (oe.flags |= e), (r.memoizedState = il(1 | t, n, i, l));
}
function yc(e, t) {
  return Ql(8390656, 8, e, t);
}
function $a(e, t) {
  return Lr(2048, 8, e, t);
}
function Fu(e, t) {
  return Lr(4, 2, e, t);
}
function Du(e, t) {
  return Lr(4, 4, e, t);
}
function Ou(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function _u(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Lr(4, 4, Ou.bind(null, t, e), n)
  );
}
function eo() {}
function Bu(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var l = n.memoizedState;
  return l !== null && t !== null && Xa(t, l[1])
    ? l[0]
    : ((n.memoizedState = [e, t]), e);
}
function Uu(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var l = n.memoizedState;
  return l !== null && t !== null && Xa(t, l[1])
    ? l[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vu(e, t, n) {
  return qs & 21
    ? (gt(n, t) || ((n = Jd()), (oe.lanes |= n), (Ss |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n));
}
function Ym(e, t) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), e(!0);
  var l = ci.transition;
  ci.transition = {};
  try {
    e(!1), t();
  } finally {
    (X = n), (ci.transition = l);
  }
}
function Hu() {
  return ot().memoizedState;
}
function Xm(e, t, n) {
  var l = ss(e);
  if (
    ((n = {
      lane: l,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Wu(e))
  )
    Qu(t, n);
  else if (((n = Cu(e, t, n, l)), n !== null)) {
    var r = Te();
    xt(n, e, l, r), Ku(n, t, l);
  }
}
function Zm(e, t, n) {
  var l = ss(e),
    r = { lane: l, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wu(e)) Qu(t, r);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          o = i(a, n);
        if (((r.hasEagerState = !0), (r.eagerState = o), gt(o, a))) {
          var c = t.interleaved;
          c === null
            ? ((r.next = r), Wa(t))
            : ((r.next = c.next), (c.next = r)),
            (t.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (n = Cu(e, t, r, l)),
      n !== null && ((r = Te()), xt(n, e, l, r), Ku(n, t, l));
  }
}
function Wu(e) {
  var t = e.alternate;
  return e === oe || (t !== null && t === oe);
}
function Qu(e, t) {
  _n = mr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ku(e, t, n) {
  if (n & 4194240) {
    var l = t.lanes;
    (l &= e.pendingLanes), (n |= l), (t.lanes = n), Aa(e, n);
  }
}
var fr = {
    readContext: at,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useInsertionEffect: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useMutableSource: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    unstable_isNewReconciler: !1,
  },
  Gm = {
    readContext: at,
    useCallback: function (e, t) {
      return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: at,
    useEffect: yc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ql(4194308, 4, Ou.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ql(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ql(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = yt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var l = yt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (l.memoizedState = l.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (l.queue = e),
        (e = e.dispatch = Xm.bind(null, oe, e)),
        [l.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = yt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: jc,
    useDebugValue: eo,
    useDeferredValue: function (e) {
      return (yt().memoizedState = e);
    },
    useTransition: function () {
      var e = jc(!1),
        t = e[0];
      return (e = Ym.bind(null, e[1])), (yt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var l = oe,
        r = yt();
      if (le) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(C(349));
        qs & 30 || Au(l, t, n);
      }
      r.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (r.queue = i),
        yc(Ru.bind(null, l, i, e), [e]),
        (l.flags |= 2048),
        il(9, Pu.bind(null, l, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = yt(),
        t = we.identifierPrefix;
      if (le) {
        var n = bt,
          l = Et;
        (n = (l & ~(1 << (32 - pt(l) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ll++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Jm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  $m = {
    readContext: at,
    useCallback: Bu,
    useContext: at,
    useEffect: $a,
    useImperativeHandle: _u,
    useInsertionEffect: Fu,
    useLayoutEffect: Du,
    useMemo: Uu,
    useReducer: di,
    useRef: Mu,
    useState: function () {
      return di(rl);
    },
    useDebugValue: eo,
    useDeferredValue: function (e) {
      var t = ot();
      return Vu(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = di(rl)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Iu,
    useSyncExternalStore: Lu,
    useId: Hu,
    unstable_isNewReconciler: !1,
  },
  ef = {
    readContext: at,
    useCallback: Bu,
    useContext: at,
    useEffect: $a,
    useImperativeHandle: _u,
    useInsertionEffect: Fu,
    useLayoutEffect: Du,
    useMemo: Uu,
    useReducer: ui,
    useRef: Mu,
    useState: function () {
      return ui(rl);
    },
    useDebugValue: eo,
    useDeferredValue: function (e) {
      var t = ot();
      return fe === null ? (t.memoizedState = e) : Vu(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = ui(rl)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Iu,
    useSyncExternalStore: Lu,
    useId: Hu,
    unstable_isNewReconciler: !1,
  };
function ht(e, t) {
  if (e && e.defaultProps) {
    (t = ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Xi(e, t, n, l) {
  (t = e.memoizedState),
    (n = n(l, t)),
    (n = n == null ? t : ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ar = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Is(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var l = Te(),
      r = ss(e),
      i = It(l, r);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = es(e, i, r)),
      t !== null && (xt(t, e, r, l), Hl(t, e, r));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var l = Te(),
      r = ss(e),
      i = It(l, r);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = es(e, i, r)),
      t !== null && (xt(t, e, r, l), Hl(t, e, r));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Te(),
      l = ss(e),
      r = It(n, l);
    (r.tag = 2),
      t != null && (r.callback = t),
      (t = es(e, r, l)),
      t !== null && (xt(t, e, l, n), Hl(t, e, l));
  },
};
function Nc(e, t, n, l, r, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(l, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Gn(n, l) || !Gn(r, i)
      : !0
  );
}
function Ju(e, t, n) {
  var l = !1,
    r = rs,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = at(i))
      : ((r = Be(t) ? Ns : Ae.current),
        (l = t.contextTypes),
        (i = (l = l != null) ? tn(e, r) : rs)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ar),
    (e.stateNode = t),
    (t._reactInternals = e),
    l &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = r),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function kc(e, t, n, l) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, l),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, l),
    t.state !== e && Ar.enqueueReplaceState(t, t.state, null);
}
function Zi(e, t, n, l) {
  var r = e.stateNode;
  (r.props = n), (r.state = e.memoizedState), (r.refs = {}), Qa(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (r.context = at(i))
    : ((i = Be(t) ? Ns : Ae.current), (r.context = tn(e, i))),
    (r.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Xi(e, t, i, n), (r.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((t = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      t !== r.state && Ar.enqueueReplaceState(r, r.state, null),
      hr(e, n, r, l),
      (r.state = e.memoizedState)),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308);
}
function rn(e, t) {
  try {
    var n = "",
      l = t;
    do (n += bv(l)), (l = l.return);
    while (l);
    var r = n;
  } catch (i) {
    r =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: r, digest: null };
}
function hi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Gi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var tf = typeof WeakMap == "function" ? WeakMap : Map;
function Yu(e, t, n) {
  (n = It(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var l = t.value;
  return (
    (n.callback = function () {
      xr || ((xr = !0), (oa = l)), Gi(e, t);
    }),
    n
  );
}
function Xu(e, t, n) {
  (n = It(-1, n)), (n.tag = 3);
  var l = e.type.getDerivedStateFromError;
  if (typeof l == "function") {
    var r = t.value;
    (n.payload = function () {
      return l(r);
    }),
      (n.callback = function () {
        Gi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Gi(e, t),
          typeof l != "function" &&
            (ts === null ? (ts = new Set([this])) : ts.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function qc(e, t, n) {
  var l = e.pingCache;
  if (l === null) {
    l = e.pingCache = new tf();
    var r = new Set();
    l.set(t, r);
  } else (r = l.get(t)), r === void 0 && ((r = new Set()), l.set(t, r));
  r.has(n) || (r.add(n), (e = pf.bind(null, e, t, n)), t.then(e, e));
}
function Sc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Cc(e, t, n, l, r) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = r), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = It(-1, 1)), (t.tag = 2), es(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sf = Mt.ReactCurrentOwner,
  Oe = !1;
function ze(e, t, n, l) {
  t.child = e === null ? Su(t, null, n, l) : nn(t, e.child, n, l);
}
function Ec(e, t, n, l, r) {
  n = n.render;
  var i = t.ref;
  return (
    Gs(t, r),
    (l = Za(e, t, n, l, i, r)),
    (n = Ga()),
    e !== null && !Oe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        zt(e, t, r))
      : (le && n && Oa(t), (t.flags |= 1), ze(e, t, l, r), t.child)
  );
}
function bc(e, t, n, l, r) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !oo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Zu(e, t, i, l, r))
      : ((e = Xl(n.type, null, l, t, t.mode, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & r))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Gn), n(a, l) && e.ref === t.ref)
    )
      return zt(e, t, r);
  }
  return (
    (t.flags |= 1),
    (e = ns(i, l)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Zu(e, t, n, l, r) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Gn(i, l) && e.ref === t.ref)
      if (((Oe = !1), (t.pendingProps = l = i), (e.lanes & r) !== 0))
        e.flags & 131072 && (Oe = !0);
      else return (t.lanes = e.lanes), zt(e, t, r);
  }
  return $i(e, t, n, l, r);
}
function Gu(e, t, n) {
  var l = t.pendingProps,
    r = l.children,
    i = e !== null ? e.memoizedState : null;
  if (l.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $(Qs, Ke),
        (Ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          $(Qs, Ke),
          (Ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (l = i !== null ? i.baseLanes : n),
        $(Qs, Ke),
        (Ke |= l);
    }
  else
    i !== null ? ((l = i.baseLanes | n), (t.memoizedState = null)) : (l = n),
      $(Qs, Ke),
      (Ke |= l);
  return ze(e, t, r, n), t.child;
}
function $u(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function $i(e, t, n, l, r) {
  var i = Be(n) ? Ns : Ae.current;
  return (
    (i = tn(t, i)),
    Gs(t, r),
    (n = Za(e, t, n, l, i, r)),
    (l = Ga()),
    e !== null && !Oe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        zt(e, t, r))
      : (le && l && Oa(t), (t.flags |= 1), ze(e, t, n, r), t.child)
  );
}
function Ic(e, t, n, l, r) {
  if (Be(n)) {
    var i = !0;
    ar(t);
  } else i = !1;
  if ((Gs(t, r), t.stateNode === null))
    Kl(e, t), Ju(t, n, l), Zi(t, n, l, r), (l = !0);
  else if (e === null) {
    var a = t.stateNode,
      o = t.memoizedProps;
    a.props = o;
    var c = a.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = at(d))
      : ((d = Be(n) ? Ns : Ae.current), (d = tn(t, d)));
    var h = n.getDerivedStateFromProps,
      v =
        typeof h == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== l || c !== d) && kc(t, a, l, d)),
      (Wt = !1);
    var m = t.memoizedState;
    (a.state = m),
      hr(t, l, a, r),
      (c = t.memoizedState),
      o !== l || m !== c || _e.current || Wt
        ? (typeof h == "function" && (Xi(t, n, h, l), (c = t.memoizedState)),
          (o = Wt || Nc(t, n, o, l, m, c, d))
            ? (v ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = l),
              (t.memoizedState = c)),
          (a.props = l),
          (a.state = c),
          (a.context = d),
          (l = o))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (l = !1));
  } else {
    (a = t.stateNode),
      Eu(e, t),
      (o = t.memoizedProps),
      (d = t.type === t.elementType ? o : ht(t.type, o)),
      (a.props = d),
      (v = t.pendingProps),
      (m = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = at(c))
        : ((c = Be(n) ? Ns : Ae.current), (c = tn(t, c)));
    var N = n.getDerivedStateFromProps;
    (h =
      typeof N == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== v || m !== c) && kc(t, a, l, c)),
      (Wt = !1),
      (m = t.memoizedState),
      (a.state = m),
      hr(t, l, a, r);
    var y = t.memoizedState;
    o !== v || m !== y || _e.current || Wt
      ? (typeof N == "function" && (Xi(t, n, N, l), (y = t.memoizedState)),
        (d = Wt || Nc(t, n, d, l, m, y, c) || !1)
          ? (h ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(l, y, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(l, y, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (o === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = l),
            (t.memoizedState = y)),
        (a.props = l),
        (a.state = y),
        (a.context = c),
        (l = d))
      : (typeof a.componentDidUpdate != "function" ||
          (o === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (l = !1));
  }
  return ea(e, t, n, l, i, r);
}
function ea(e, t, n, l, r, i) {
  $u(e, t);
  var a = (t.flags & 128) !== 0;
  if (!l && !a) return r && mc(t, n, !1), zt(e, t, i);
  (l = t.stateNode), (sf.current = t);
  var o =
    a && typeof n.getDerivedStateFromError != "function" ? null : l.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = nn(t, e.child, null, i)), (t.child = nn(t, null, o, i)))
      : ze(e, t, o, i),
    (t.memoizedState = l.state),
    r && mc(t, n, !0),
    t.child
  );
}
function eh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? vc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && vc(e, t.context, !1),
    Ka(e, t.containerInfo);
}
function Lc(e, t, n, l, r) {
  return sn(), Ba(r), (t.flags |= 256), ze(e, t, n, l), t.child;
}
var ta = { dehydrated: null, treeContext: null, retryLane: 0 };
function sa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function th(e, t, n) {
  var l = t.pendingProps,
    r = ae.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    o;
  if (
    ((o = a) ||
      (o = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    o
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (r |= 1),
    $(ae, r & 1),
    e === null)
  )
    return (
      Ji(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = l.children),
          (e = l.fallback),
          i
            ? ((l = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(l & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = zr(a, l, 0, null)),
              (e = ys(e, l, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = sa(n)),
              (t.memoizedState = ta),
              e)
            : to(t, a))
    );
  if (((r = e.memoizedState), r !== null && ((o = r.dehydrated), o !== null)))
    return nf(e, t, a, l, o, r, n);
  if (i) {
    (i = l.fallback), (a = t.mode), (r = e.child), (o = r.sibling);
    var c = { mode: "hidden", children: l.children };
    return (
      !(a & 1) && t.child !== r
        ? ((l = t.child),
          (l.childLanes = 0),
          (l.pendingProps = c),
          (t.deletions = null))
        : ((l = ns(r, c)), (l.subtreeFlags = r.subtreeFlags & 14680064)),
      o !== null ? (i = ns(o, i)) : ((i = ys(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (l.return = t),
      (l.sibling = i),
      (t.child = l),
      (l = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? sa(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ta),
      l
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (l = ns(i, { mode: "visible", children: l.children })),
    !(t.mode & 1) && (l.lanes = n),
    (l.return = t),
    (l.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = l),
    (t.memoizedState = null),
    l
  );
}
function to(e, t) {
  return (
    (t = zr({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Tl(e, t, n, l) {
  return (
    l !== null && Ba(l),
    nn(t, e.child, null, n),
    (e = to(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function nf(e, t, n, l, r, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (l = hi(Error(C(422)))), Tl(e, t, a, l))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = l.fallback),
        (r = t.mode),
        (l = zr({ mode: "visible", children: l.children }, r, 0, null)),
        (i = ys(i, r, a, null)),
        (i.flags |= 2),
        (l.return = t),
        (i.return = t),
        (l.sibling = i),
        (t.child = l),
        t.mode & 1 && nn(t, e.child, null, a),
        (t.child.memoizedState = sa(a)),
        (t.memoizedState = ta),
        i);
  if (!(t.mode & 1)) return Tl(e, t, a, null);
  if (r.data === "$!") {
    if (((l = r.nextSibling && r.nextSibling.dataset), l)) var o = l.dgst;
    return (l = o), (i = Error(C(419))), (l = hi(i, l, void 0)), Tl(e, t, a, l);
  }
  if (((o = (a & e.childLanes) !== 0), Oe || o)) {
    if (((l = we), l !== null)) {
      switch (a & -a) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = r & (l.suspendedLanes | a) ? 0 : r),
        r !== 0 &&
          r !== i.retryLane &&
          ((i.retryLane = r), Rt(e, r), xt(l, e, r, -1));
    }
    return ao(), (l = hi(Error(C(421)))), Tl(e, t, a, l);
  }
  return r.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = xf.bind(null, e)),
      (r._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Je = $t(r.nextSibling)),
      (Ye = t),
      (le = !0),
      (ft = null),
      e !== null &&
        ((st[nt++] = Et),
        (st[nt++] = bt),
        (st[nt++] = ks),
        (Et = e.id),
        (bt = e.overflow),
        (ks = t)),
      (t = to(t, l.children)),
      (t.flags |= 4096),
      t);
}
function Ac(e, t, n) {
  e.lanes |= t;
  var l = e.alternate;
  l !== null && (l.lanes |= t), Yi(e.return, t, n);
}
function vi(e, t, n, l, r) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: n,
        tailMode: r,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = l),
      (i.tail = n),
      (i.tailMode = r));
}
function sh(e, t, n) {
  var l = t.pendingProps,
    r = l.revealOrder,
    i = l.tail;
  if ((ze(e, t, l.children, n), (l = ae.current), l & 2))
    (l = (l & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ac(e, n, t);
        else if (e.tag === 19) Ac(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    l &= 1;
  }
  if (($(ae, l), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = t.child, r = null; n !== null; )
          (e = n.alternate),
            e !== null && vr(e) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = t.child), (t.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          vi(t, !1, r, n, i);
        break;
      case "backwards":
        for (n = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && vr(e) === null)) {
            t.child = r;
            break;
          }
          (e = r.sibling), (r.sibling = n), (n = r), (r = e);
        }
        vi(t, !0, n, null, i);
        break;
      case "together":
        vi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Kl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ss |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ns(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ns(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function lf(e, t, n) {
  switch (t.tag) {
    case 3:
      eh(t), sn();
      break;
    case 5:
      bu(t);
      break;
    case 1:
      Be(t.type) && ar(t);
      break;
    case 4:
      Ka(t, t.stateNode.containerInfo);
      break;
    case 10:
      var l = t.type._context,
        r = t.memoizedProps.value;
      $(dr, l._currentValue), (l._currentValue = r);
      break;
    case 13:
      if (((l = t.memoizedState), l !== null))
        return l.dehydrated !== null
          ? ($(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? th(e, t, n)
          : ($(ae, ae.current & 1),
            (e = zt(e, t, n)),
            e !== null ? e.sibling : null);
      $(ae, ae.current & 1);
      break;
    case 19:
      if (((l = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (l) return sh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((r = t.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        $(ae, ae.current),
        l)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Gu(e, t, n);
  }
  return zt(e, t, n);
}
var nh, na, lh, rh;
nh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
na = function () {};
lh = function (e, t, n, l) {
  var r = e.memoizedProps;
  if (r !== l) {
    (e = t.stateNode), xs(qt.current);
    var i = null;
    switch (n) {
      case "input":
        (r = Si(e, r)), (l = Si(e, l)), (i = []);
        break;
      case "select":
        (r = ce({}, r, { value: void 0 })),
          (l = ce({}, l, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (r = bi(e, r)), (l = bi(e, l)), (i = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof l.onClick == "function" &&
          (e.onclick = rr);
    }
    Li(n, l);
    var a;
    n = null;
    for (d in r)
      if (!l.hasOwnProperty(d) && r.hasOwnProperty(d) && r[d] != null)
        if (d === "style") {
          var o = r[d];
          for (a in o) o.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Wn.hasOwnProperty(d)
              ? i || (i = [])
              : (i = i || []).push(d, null));
    for (d in l) {
      var c = l[d];
      if (
        ((o = r != null ? r[d] : void 0),
        l.hasOwnProperty(d) && c !== o && (c != null || o != null))
      )
        if (d === "style")
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                o[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else n || (i || (i = []), i.push(d, n)), (n = c);
        else
          d === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (o = o ? o.__html : void 0),
              c != null && o !== c && (i = i || []).push(d, c))
            : d === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (i = i || []).push(d, "" + c)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (Wn.hasOwnProperty(d)
                ? (c != null && d === "onScroll" && ee("scroll", e),
                  i || o === c || (i = []))
                : (i = i || []).push(d, c));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
rh = function (e, t, n, l) {
  n !== l && (t.flags |= 4);
};
function Sn(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var l = null; n !== null; )
          n.alternate !== null && (l = n), (n = n.sibling);
        l === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (l.sibling = null);
    }
}
function be(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    l = 0;
  if (t)
    for (var r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (l |= r.subtreeFlags & 14680064),
        (l |= r.flags & 14680064),
        (r.return = e),
        (r = r.sibling);
  else
    for (r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (l |= r.subtreeFlags),
        (l |= r.flags),
        (r.return = e),
        (r = r.sibling);
  return (e.subtreeFlags |= l), (e.childLanes = n), t;
}
function rf(e, t, n) {
  var l = t.pendingProps;
  switch ((_a(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return be(t), null;
    case 1:
      return Be(t.type) && ir(), be(t), null;
    case 3:
      return (
        (l = t.stateNode),
        ln(),
        te(_e),
        te(Ae),
        Ya(),
        l.pendingContext &&
          ((l.context = l.pendingContext), (l.pendingContext = null)),
        (e === null || e.child === null) &&
          (Rl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (ua(ft), (ft = null)))),
        na(e, t),
        be(t),
        null
      );
    case 5:
      Ja(t);
      var r = xs(nl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        lh(e, t, n, l, r),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!l) {
          if (t.stateNode === null) throw Error(C(166));
          return be(t), null;
        }
        if (((e = xs(qt.current)), Rl(t))) {
          (l = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((l[Nt] = t), (l[tl] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", l), ee("close", l);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", l);
              break;
            case "video":
            case "audio":
              for (r = 0; r < zn.length; r++) ee(zn[r], l);
              break;
            case "source":
              ee("error", l);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", l), ee("load", l);
              break;
            case "details":
              ee("toggle", l);
              break;
            case "input":
              _o(l, i), ee("invalid", l);
              break;
            case "select":
              (l._wrapperState = { wasMultiple: !!i.multiple }),
                ee("invalid", l);
              break;
            case "textarea":
              Uo(l, i), ee("invalid", l);
          }
          Li(n, i), (r = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var o = i[a];
              a === "children"
                ? typeof o == "string"
                  ? l.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Pl(l.textContent, o, e),
                    (r = ["children", o]))
                  : typeof o == "number" &&
                    l.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Pl(l.textContent, o, e),
                    (r = ["children", "" + o]))
                : Wn.hasOwnProperty(a) &&
                  o != null &&
                  a === "onScroll" &&
                  ee("scroll", l);
            }
          switch (n) {
            case "input":
              ql(l), Bo(l, i, !0);
              break;
            case "textarea":
              ql(l), Vo(l);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (l.onclick = rr);
          }
          (l = r), (t.updateQueue = l), l !== null && (t.flags |= 4);
        } else {
          (a = r.nodeType === 9 ? r : r.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Rd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof l.is == "string"
                ? (e = a.createElement(n, { is: l.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    l.multiple
                      ? (a.multiple = !0)
                      : l.size && (a.size = l.size)))
              : (e = a.createElementNS(e, n)),
            (e[Nt] = t),
            (e[tl] = l),
            nh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Ai(n, l)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (r = l);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (r = l);
                break;
              case "video":
              case "audio":
                for (r = 0; r < zn.length; r++) ee(zn[r], e);
                r = l;
                break;
              case "source":
                ee("error", e), (r = l);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (r = l);
                break;
              case "details":
                ee("toggle", e), (r = l);
                break;
              case "input":
                _o(e, l), (r = Si(e, l)), ee("invalid", e);
                break;
              case "option":
                r = l;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!l.multiple }),
                  (r = ce({}, l, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                Uo(e, l), (r = bi(e, l)), ee("invalid", e);
                break;
              default:
                r = l;
            }
            Li(n, r), (o = r);
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var c = o[i];
                i === "style"
                  ? Md(e, c)
                  : i === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && zd(e, c))
                  : i === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && Qn(e, c)
                    : typeof c == "number" && Qn(e, "" + c)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Wn.hasOwnProperty(i)
                      ? c != null && i === "onScroll" && ee("scroll", e)
                      : c != null && Sa(e, i, c, a));
              }
            switch (n) {
              case "input":
                ql(e), Bo(e, l, !1);
                break;
              case "textarea":
                ql(e), Vo(e);
                break;
              case "option":
                l.value != null && e.setAttribute("value", "" + ls(l.value));
                break;
              case "select":
                (e.multiple = !!l.multiple),
                  (i = l.value),
                  i != null
                    ? Js(e, !!l.multiple, i, !1)
                    : l.defaultValue != null &&
                      Js(e, !!l.multiple, l.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (e.onclick = rr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
          }
          l && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return be(t), null;
    case 6:
      if (e && t.stateNode != null) rh(e, t, e.memoizedProps, l);
      else {
        if (typeof l != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = xs(nl.current)), xs(qt.current), Rl(t))) {
          if (
            ((l = t.stateNode),
            (n = t.memoizedProps),
            (l[Nt] = t),
            (i = l.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Pl(l.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Pl(l.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (l = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(l)),
            (l[Nt] = t),
            (t.stateNode = l);
      }
      return be(t), null;
    case 13:
      if (
        (te(ae),
        (l = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Je !== null && t.mode & 1 && !(t.flags & 128))
          ku(), sn(), (t.flags |= 98560), (i = !1);
        else if (((i = Rl(t)), l !== null && l.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(C(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(C(317));
            i[Nt] = t;
          } else
            sn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          be(t), (i = !1);
        } else ft !== null && (ua(ft), (ft = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((l = l !== null),
          l !== (e !== null && e.memoizedState !== null) &&
            l &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? pe === 0 && (pe = 3) : ao())),
          t.updateQueue !== null && (t.flags |= 4),
          be(t),
          null);
    case 4:
      return (
        ln(), na(e, t), e === null && $n(t.stateNode.containerInfo), be(t), null
      );
    case 10:
      return Ha(t.type._context), be(t), null;
    case 17:
      return Be(t.type) && ir(), be(t), null;
    case 19:
      if ((te(ae), (i = t.memoizedState), i === null)) return be(t), null;
      if (((l = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (l) Sn(i, !1);
        else {
          if (pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = vr(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Sn(i, !1),
                    l = a.updateQueue,
                    l !== null && ((t.updateQueue = l), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    l = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = l),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return $(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            he() > an &&
            ((t.flags |= 128), (l = !0), Sn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!l)
          if (((e = vr(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (l = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !le)
            )
              return be(t), null;
          } else
            2 * he() - i.renderingStartTime > an &&
              n !== 1073741824 &&
              ((t.flags |= 128), (l = !0), Sn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = he()),
          (t.sibling = null),
          (n = ae.current),
          $(ae, l ? (n & 1) | 2 : n & 1),
          t)
        : (be(t), null);
    case 22:
    case 23:
      return (
        io(),
        (l = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== l && (t.flags |= 8192),
        l && t.mode & 1
          ? Ke & 1073741824 && (be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : be(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function af(e, t) {
  switch ((_a(t), t.tag)) {
    case 1:
      return (
        Be(t.type) && ir(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ln(),
        te(_e),
        te(Ae),
        Ya(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ja(t), null;
    case 13:
      if (
        (te(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(C(340));
        sn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(ae), null;
    case 4:
      return ln(), null;
    case 10:
      return Ha(t.type._context), null;
    case 22:
    case 23:
      return io(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ml = !1,
  Ie = !1,
  of = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function Ws(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (l) {
        de(e, t, l);
      }
    else n.current = null;
}
function la(e, t, n) {
  try {
    n();
  } catch (l) {
    de(e, t, l);
  }
}
var Pc = !1;
function cf(e, t) {
  if (((Bi = sr), (e = du()), Da(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var l = n.getSelection && n.getSelection();
        if (l && l.rangeCount !== 0) {
          n = l.anchorNode;
          var r = l.anchorOffset,
            i = l.focusNode;
          l = l.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            o = -1,
            c = -1,
            d = 0,
            h = 0,
            v = e,
            m = null;
          t: for (;;) {
            for (
              var N;
              v !== n || (r !== 0 && v.nodeType !== 3) || (o = a + r),
                v !== i || (l !== 0 && v.nodeType !== 3) || (c = a + l),
                v.nodeType === 3 && (a += v.nodeValue.length),
                (N = v.firstChild) !== null;

            )
              (m = v), (v = N);
            for (;;) {
              if (v === e) break t;
              if (
                (m === n && ++d === r && (o = a),
                m === i && ++h === l && (c = a),
                (N = v.nextSibling) !== null)
              )
                break;
              (v = m), (m = v.parentNode);
            }
            v = N;
          }
          n = o === -1 || c === -1 ? null : { start: o, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ui = { focusedElem: e, selectionRange: n }, sr = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var j = y.memoizedProps,
                    A = y.memoizedState,
                    f = t.stateNode,
                    u = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? j : ht(t.type, j),
                      A
                    );
                  f.__reactInternalSnapshotBeforeUpdate = u;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (k) {
          de(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (y = Pc), (Pc = !1), y;
}
function Bn(e, t, n) {
  var l = t.updateQueue;
  if (((l = l !== null ? l.lastEffect : null), l !== null)) {
    var r = (l = l.next);
    do {
      if ((r.tag & e) === e) {
        var i = r.destroy;
        (r.destroy = void 0), i !== void 0 && la(t, n, i);
      }
      r = r.next;
    } while (r !== l);
  }
}
function Pr(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var l = n.create;
        n.destroy = l();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ra(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ih(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ih(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Nt], delete t[tl], delete t[Wi], delete t[Hm], delete t[Wm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ah(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ah(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ia(e, t, n) {
  var l = e.tag;
  if (l === 5 || l === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = rr));
  else if (l !== 4 && ((e = e.child), e !== null))
    for (ia(e, t, n), e = e.sibling; e !== null; ) ia(e, t, n), (e = e.sibling);
}
function aa(e, t, n) {
  var l = e.tag;
  if (l === 5 || l === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (l !== 4 && ((e = e.child), e !== null))
    for (aa(e, t, n), e = e.sibling; e !== null; ) aa(e, t, n), (e = e.sibling);
}
var qe = null,
  vt = !1;
function Ut(e, t, n) {
  for (n = n.child; n !== null; ) oh(e, t, n), (n = n.sibling);
}
function oh(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function")
    try {
      kt.onCommitFiberUnmount(qr, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ie || Ws(n, t);
    case 6:
      var l = qe,
        r = vt;
      (qe = null),
        Ut(e, t, n),
        (qe = l),
        (vt = r),
        qe !== null &&
          (vt
            ? ((e = qe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : qe.removeChild(n.stateNode));
      break;
    case 18:
      qe !== null &&
        (vt
          ? ((e = qe),
            (n = n.stateNode),
            e.nodeType === 8
              ? ii(e.parentNode, n)
              : e.nodeType === 1 && ii(e, n),
            Xn(e))
          : ii(qe, n.stateNode));
      break;
    case 4:
      (l = qe),
        (r = vt),
        (qe = n.stateNode.containerInfo),
        (vt = !0),
        Ut(e, t, n),
        (qe = l),
        (vt = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ie &&
        ((l = n.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
      ) {
        r = l = l.next;
        do {
          var i = r,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && la(n, t, a),
            (r = r.next);
        } while (r !== l);
      }
      Ut(e, t, n);
      break;
    case 1:
      if (
        !Ie &&
        (Ws(n, t),
        (l = n.stateNode),
        typeof l.componentWillUnmount == "function")
      )
        try {
          (l.props = n.memoizedProps),
            (l.state = n.memoizedState),
            l.componentWillUnmount();
        } catch (o) {
          de(n, t, o);
        }
      Ut(e, t, n);
      break;
    case 21:
      Ut(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ie = (l = Ie) || n.memoizedState !== null), Ut(e, t, n), (Ie = l))
        : Ut(e, t, n);
      break;
    default:
      Ut(e, t, n);
  }
}
function zc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new of()),
      t.forEach(function (l) {
        var r = gf.bind(null, e, l);
        n.has(l) || (n.add(l), l.then(r, r));
      });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var l = 0; l < n.length; l++) {
      var r = n[l];
      try {
        var i = e,
          a = t,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (qe = o.stateNode), (vt = !1);
              break e;
            case 3:
              (qe = o.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              (qe = o.stateNode.containerInfo), (vt = !0);
              break e;
          }
          o = o.return;
        }
        if (qe === null) throw Error(C(160));
        oh(i, a, r), (qe = null), (vt = !1);
        var c = r.alternate;
        c !== null && (c.return = null), (r.return = null);
      } catch (d) {
        de(r, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ch(t, e), (t = t.sibling);
}
function ch(e, t) {
  var n = e.alternate,
    l = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), jt(e), l & 4)) {
        try {
          Bn(3, e, e.return), Pr(3, e);
        } catch (j) {
          de(e, e.return, j);
        }
        try {
          Bn(5, e, e.return);
        } catch (j) {
          de(e, e.return, j);
        }
      }
      break;
    case 1:
      ut(t, e), jt(e), l & 512 && n !== null && Ws(n, n.return);
      break;
    case 5:
      if (
        (ut(t, e),
        jt(e),
        l & 512 && n !== null && Ws(n, n.return),
        e.flags & 32)
      ) {
        var r = e.stateNode;
        try {
          Qn(r, "");
        } catch (j) {
          de(e, e.return, j);
        }
      }
      if (l & 4 && ((r = e.stateNode), r != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          o = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            o === "input" && i.type === "radio" && i.name != null && Ad(r, i),
              Ai(o, a);
            var d = Ai(o, i);
            for (a = 0; a < c.length; a += 2) {
              var h = c[a],
                v = c[a + 1];
              h === "style"
                ? Md(r, v)
                : h === "dangerouslySetInnerHTML"
                ? zd(r, v)
                : h === "children"
                ? Qn(r, v)
                : Sa(r, h, v, d);
            }
            switch (o) {
              case "input":
                Ci(r, i);
                break;
              case "textarea":
                Pd(r, i);
                break;
              case "select":
                var m = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!i.multiple;
                var N = i.value;
                N != null
                  ? Js(r, !!i.multiple, N, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Js(r, !!i.multiple, i.defaultValue, !0)
                      : Js(r, !!i.multiple, i.multiple ? [] : "", !1));
            }
            r[tl] = i;
          } catch (j) {
            de(e, e.return, j);
          }
      }
      break;
    case 6:
      if ((ut(t, e), jt(e), l & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (r = e.stateNode), (i = e.memoizedProps);
        try {
          r.nodeValue = i;
        } catch (j) {
          de(e, e.return, j);
        }
      }
      break;
    case 3:
      if (
        (ut(t, e), jt(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xn(t.containerInfo);
        } catch (j) {
          de(e, e.return, j);
        }
      break;
    case 4:
      ut(t, e), jt(e);
      break;
    case 13:
      ut(t, e),
        jt(e),
        (r = e.child),
        r.flags & 8192 &&
          ((i = r.memoizedState !== null),
          (r.stateNode.isHidden = i),
          !i ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (lo = he())),
        l & 4 && zc(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ie = (d = Ie) || h), ut(t, e), (Ie = d)) : ut(t, e),
        jt(e),
        l & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !h && e.mode & 1)
        )
          for (z = e, h = e.child; h !== null; ) {
            for (v = z = h; z !== null; ) {
              switch (((m = z), (N = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Bn(4, m, m.return);
                  break;
                case 1:
                  Ws(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (l = m), (n = m.return);
                    try {
                      (t = l),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (j) {
                      de(l, n, j);
                    }
                  }
                  break;
                case 5:
                  Ws(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Mc(v);
                    continue;
                  }
              }
              N !== null ? ((N.return = m), (z = N)) : Mc(v);
            }
            h = h.sibling;
          }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                (r = v.stateNode),
                  d
                    ? ((i = r.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = v.stateNode),
                      (c = v.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (o.style.display = Td("display", a)));
              } catch (j) {
                de(e, e.return, j);
              }
            }
          } else if (v.tag === 6) {
            if (h === null)
              try {
                v.stateNode.nodeValue = d ? "" : v.memoizedProps;
              } catch (j) {
                de(e, e.return, j);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            h === v && (h = null), (v = v.return);
          }
          h === v && (h = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      ut(t, e), jt(e), l & 4 && zc(e);
      break;
    case 21:
      break;
    default:
      ut(t, e), jt(e);
  }
}
function jt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ah(n)) {
            var l = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (l.tag) {
        case 5:
          var r = l.stateNode;
          l.flags & 32 && (Qn(r, ""), (l.flags &= -33));
          var i = Rc(e);
          aa(e, i, r);
          break;
        case 3:
        case 4:
          var a = l.stateNode.containerInfo,
            o = Rc(e);
          ia(e, o, a);
          break;
        default:
          throw Error(C(161));
      }
    } catch (c) {
      de(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function df(e, t, n) {
  (z = e), dh(e);
}
function dh(e, t, n) {
  for (var l = (e.mode & 1) !== 0; z !== null; ) {
    var r = z,
      i = r.child;
    if (r.tag === 22 && l) {
      var a = r.memoizedState !== null || Ml;
      if (!a) {
        var o = r.alternate,
          c = (o !== null && o.memoizedState !== null) || Ie;
        o = Ml;
        var d = Ie;
        if (((Ml = a), (Ie = c) && !d))
          for (z = r; z !== null; )
            (a = z),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Fc(r)
                : c !== null
                ? ((c.return = a), (z = c))
                : Fc(r);
        for (; i !== null; ) (z = i), dh(i), (i = i.sibling);
        (z = r), (Ml = o), (Ie = d);
      }
      Tc(e);
    } else
      r.subtreeFlags & 8772 && i !== null ? ((i.return = r), (z = i)) : Tc(e);
  }
}
function Tc(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ie || Pr(5, t);
              break;
            case 1:
              var l = t.stateNode;
              if (t.flags & 4 && !Ie)
                if (n === null) l.componentDidMount();
                else {
                  var r =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ht(t.type, n.memoizedProps);
                  l.componentDidUpdate(
                    r,
                    n.memoizedState,
                    l.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && wc(t, i, l);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                wc(t, a, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var d = t.alternate;
                if (d !== null) {
                  var h = d.memoizedState;
                  if (h !== null) {
                    var v = h.dehydrated;
                    v !== null && Xn(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        Ie || (t.flags & 512 && ra(t));
      } catch (m) {
        de(t, t.return, m);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Mc(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Fc(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Pr(4, t);
          } catch (c) {
            de(t, n, c);
          }
          break;
        case 1:
          var l = t.stateNode;
          if (typeof l.componentDidMount == "function") {
            var r = t.return;
            try {
              l.componentDidMount();
            } catch (c) {
              de(t, r, c);
            }
          }
          var i = t.return;
          try {
            ra(t);
          } catch (c) {
            de(t, i, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            ra(t);
          } catch (c) {
            de(t, a, c);
          }
      }
    } catch (c) {
      de(t, t.return, c);
    }
    if (t === e) {
      z = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (z = o);
      break;
    }
    z = t.return;
  }
}
var uf = Math.ceil,
  pr = Mt.ReactCurrentDispatcher,
  so = Mt.ReactCurrentOwner,
  it = Mt.ReactCurrentBatchConfig,
  Y = 0,
  we = null,
  me = null,
  Se = 0,
  Ke = 0,
  Qs = as(0),
  pe = 0,
  al = null,
  Ss = 0,
  Rr = 0,
  no = 0,
  Un = null,
  De = null,
  lo = 0,
  an = 1 / 0,
  St = null,
  xr = !1,
  oa = null,
  ts = null,
  Fl = !1,
  Yt = null,
  gr = 0,
  Vn = 0,
  ca = null,
  Jl = -1,
  Yl = 0;
function Te() {
  return Y & 6 ? he() : Jl !== -1 ? Jl : (Jl = he());
}
function ss(e) {
  return e.mode & 1
    ? Y & 2 && Se !== 0
      ? Se & -Se
      : Km.transition !== null
      ? (Yl === 0 && (Yl = Jd()), Yl)
      : ((e = X),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : tu(e.type))),
        e)
    : 1;
}
function xt(e, t, n, l) {
  if (50 < Vn) throw ((Vn = 0), (ca = null), Error(C(185)));
  dl(e, n, l),
    (!(Y & 2) || e !== we) &&
      (e === we && (!(Y & 2) && (Rr |= n), pe === 4 && Kt(e, Se)),
      Ue(e, l),
      n === 1 && Y === 0 && !(t.mode & 1) && ((an = he() + 500), Ir && os()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  Kv(e, t);
  var l = tr(e, e === we ? Se : 0);
  if (l === 0)
    n !== null && Qo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = l & -l), e.callbackPriority !== t)) {
    if ((n != null && Qo(n), t === 1))
      e.tag === 0 ? Qm(Dc.bind(null, e)) : ju(Dc.bind(null, e)),
        Um(function () {
          !(Y & 6) && os();
        }),
        (n = null);
    else {
      switch (Yd(l)) {
        case 1:
          n = La;
          break;
        case 4:
          n = Qd;
          break;
        case 16:
          n = er;
          break;
        case 536870912:
          n = Kd;
          break;
        default:
          n = er;
      }
      n = gh(n, uh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function uh(e, t) {
  if (((Jl = -1), (Yl = 0), Y & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if ($s() && e.callbackNode !== n) return null;
  var l = tr(e, e === we ? Se : 0);
  if (l === 0) return null;
  if (l & 30 || l & e.expiredLanes || t) t = wr(e, l);
  else {
    t = l;
    var r = Y;
    Y |= 2;
    var i = vh();
    (we !== e || Se !== t) && ((St = null), (an = he() + 500), js(e, t));
    do
      try {
        mf();
        break;
      } catch (o) {
        hh(e, o);
      }
    while (!0);
    Va(),
      (pr.current = i),
      (Y = r),
      me !== null ? (t = 0) : ((we = null), (Se = 0), (t = pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((r = Mi(e)), r !== 0 && ((l = r), (t = da(e, r)))), t === 1)
    )
      throw ((n = al), js(e, 0), Kt(e, l), Ue(e, he()), n);
    if (t === 6) Kt(e, l);
    else {
      if (
        ((r = e.current.alternate),
        !(l & 30) &&
          !hf(r) &&
          ((t = wr(e, l)),
          t === 2 && ((i = Mi(e)), i !== 0 && ((l = i), (t = da(e, i)))),
          t === 1))
      )
        throw ((n = al), js(e, 0), Kt(e, l), Ue(e, he()), n);
      switch (((e.finishedWork = r), (e.finishedLanes = l), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          ms(e, De, St);
          break;
        case 3:
          if (
            (Kt(e, l), (l & 130023424) === l && ((t = lo + 500 - he()), 10 < t))
          ) {
            if (tr(e, 0) !== 0) break;
            if (((r = e.suspendedLanes), (r & l) !== l)) {
              Te(), (e.pingedLanes |= e.suspendedLanes & r);
              break;
            }
            e.timeoutHandle = Hi(ms.bind(null, e, De, St), t);
            break;
          }
          ms(e, De, St);
          break;
        case 4:
          if ((Kt(e, l), (l & 4194240) === l)) break;
          for (t = e.eventTimes, r = -1; 0 < l; ) {
            var a = 31 - pt(l);
            (i = 1 << a), (a = t[a]), a > r && (r = a), (l &= ~i);
          }
          if (
            ((l = r),
            (l = he() - l),
            (l =
              (120 > l
                ? 120
                : 480 > l
                ? 480
                : 1080 > l
                ? 1080
                : 1920 > l
                ? 1920
                : 3e3 > l
                ? 3e3
                : 4320 > l
                ? 4320
                : 1960 * uf(l / 1960)) - l),
            10 < l)
          ) {
            e.timeoutHandle = Hi(ms.bind(null, e, De, St), l);
            break;
          }
          ms(e, De, St);
          break;
        case 5:
          ms(e, De, St);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Ue(e, he()), e.callbackNode === n ? uh.bind(null, e) : null;
}
function da(e, t) {
  var n = Un;
  return (
    e.current.memoizedState.isDehydrated && (js(e, t).flags |= 256),
    (e = wr(e, t)),
    e !== 2 && ((t = De), (De = n), t !== null && ua(t)),
    e
  );
}
function ua(e) {
  De === null ? (De = e) : De.push.apply(De, e);
}
function hf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var l = 0; l < n.length; l++) {
          var r = n[l],
            i = r.getSnapshot;
          r = r.value;
          try {
            if (!gt(i(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Kt(e, t) {
  for (
    t &= ~no,
      t &= ~Rr,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - pt(t),
      l = 1 << n;
    (e[n] = -1), (t &= ~l);
  }
}
function Dc(e) {
  if (Y & 6) throw Error(C(327));
  $s();
  var t = tr(e, 0);
  if (!(t & 1)) return Ue(e, he()), null;
  var n = wr(e, t);
  if (e.tag !== 0 && n === 2) {
    var l = Mi(e);
    l !== 0 && ((t = l), (n = da(e, l)));
  }
  if (n === 1) throw ((n = al), js(e, 0), Kt(e, t), Ue(e, he()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ms(e, De, St),
    Ue(e, he()),
    null
  );
}
function ro(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = n), Y === 0 && ((an = he() + 500), Ir && os());
  }
}
function Cs(e) {
  Yt !== null && Yt.tag === 0 && !(Y & 6) && $s();
  var t = Y;
  Y |= 1;
  var n = it.transition,
    l = X;
  try {
    if (((it.transition = null), (X = 1), e)) return e();
  } finally {
    (X = l), (it.transition = n), (Y = t), !(Y & 6) && os();
  }
}
function io() {
  (Ke = Qs.current), te(Qs);
}
function js(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Bm(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var l = n;
      switch ((_a(l), l.tag)) {
        case 1:
          (l = l.type.childContextTypes), l != null && ir();
          break;
        case 3:
          ln(), te(_e), te(Ae), Ya();
          break;
        case 5:
          Ja(l);
          break;
        case 4:
          ln();
          break;
        case 13:
          te(ae);
          break;
        case 19:
          te(ae);
          break;
        case 10:
          Ha(l.type._context);
          break;
        case 22:
        case 23:
          io();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (me = e = ns(e.current, null)),
    (Se = Ke = t),
    (pe = 0),
    (al = null),
    (no = Rr = Ss = 0),
    (De = Un = null),
    ps !== null)
  ) {
    for (t = 0; t < ps.length; t++)
      if (((n = ps[t]), (l = n.interleaved), l !== null)) {
        n.interleaved = null;
        var r = l.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = r), (l.next = a);
        }
        n.pending = l;
      }
    ps = null;
  }
  return e;
}
function hh(e, t) {
  do {
    var n = me;
    try {
      if ((Va(), (Wl.current = fr), mr)) {
        for (var l = oe.memoizedState; l !== null; ) {
          var r = l.queue;
          r !== null && (r.pending = null), (l = l.next);
        }
        mr = !1;
      }
      if (
        ((qs = 0),
        (ge = fe = oe = null),
        (_n = !1),
        (ll = 0),
        (so.current = null),
        n === null || n.return === null)
      ) {
        (pe = 1), (al = t), (me = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          o = n,
          c = t;
        if (
          ((t = Se),
          (o.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var d = c,
            h = o,
            v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var N = Sc(a);
          if (N !== null) {
            (N.flags &= -257),
              Cc(N, a, o, i, t),
              N.mode & 1 && qc(i, d, t),
              (t = N),
              (c = d);
            var y = t.updateQueue;
            if (y === null) {
              var j = new Set();
              j.add(c), (t.updateQueue = j);
            } else y.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              qc(i, d, t), ao();
              break e;
            }
            c = Error(C(426));
          }
        } else if (le && o.mode & 1) {
          var A = Sc(a);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256),
              Cc(A, a, o, i, t),
              Ba(rn(c, o));
            break e;
          }
        }
        (i = c = rn(c, o)),
          pe !== 4 && (pe = 2),
          Un === null ? (Un = [i]) : Un.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Yu(i, c, t);
              gc(i, f);
              break e;
            case 1:
              o = c;
              var u = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof u.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (ts === null || !ts.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var k = Xu(i, o, t);
                gc(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      fh(n);
    } catch (I) {
      (t = I), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function vh() {
  var e = pr.current;
  return (pr.current = fr), e === null ? fr : e;
}
function ao() {
  (pe === 0 || pe === 3 || pe === 2) && (pe = 4),
    we === null || (!(Ss & 268435455) && !(Rr & 268435455)) || Kt(we, Se);
}
function wr(e, t) {
  var n = Y;
  Y |= 2;
  var l = vh();
  (we !== e || Se !== t) && ((St = null), js(e, t));
  do
    try {
      vf();
      break;
    } catch (r) {
      hh(e, r);
    }
  while (!0);
  if ((Va(), (Y = n), (pr.current = l), me !== null)) throw Error(C(261));
  return (we = null), (Se = 0), pe;
}
function vf() {
  for (; me !== null; ) mh(me);
}
function mf() {
  for (; me !== null && !Dv(); ) mh(me);
}
function mh(e) {
  var t = xh(e.alternate, e, Ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? fh(e) : (me = t),
    (so.current = null);
}
function fh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = af(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (pe = 6), (me = null);
        return;
      }
    } else if (((n = rf(n, t, Ke)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  pe === 0 && (pe = 5);
}
function ms(e, t, n) {
  var l = X,
    r = it.transition;
  try {
    (it.transition = null), (X = 1), ff(e, t, n, l);
  } finally {
    (it.transition = r), (X = l);
  }
  return null;
}
function ff(e, t, n, l) {
  do $s();
  while (Yt !== null);
  if (Y & 6) throw Error(C(327));
  n = e.finishedWork;
  var r = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Jv(e, i),
    e === we && ((me = we = null), (Se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fl ||
      ((Fl = !0),
      gh(er, function () {
        return $s(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = it.transition), (it.transition = null);
    var a = X;
    X = 1;
    var o = Y;
    (Y |= 4),
      (so.current = null),
      cf(e, n),
      ch(n, e),
      zm(Ui),
      (sr = !!Bi),
      (Ui = Bi = null),
      (e.current = n),
      df(n),
      Ov(),
      (Y = o),
      (X = a),
      (it.transition = i);
  } else e.current = n;
  if (
    (Fl && ((Fl = !1), (Yt = e), (gr = r)),
    (i = e.pendingLanes),
    i === 0 && (ts = null),
    Uv(n.stateNode),
    Ue(e, he()),
    t !== null)
  )
    for (l = e.onRecoverableError, n = 0; n < t.length; n++)
      (r = t[n]), l(r.value, { componentStack: r.stack, digest: r.digest });
  if (xr) throw ((xr = !1), (e = oa), (oa = null), e);
  return (
    gr & 1 && e.tag !== 0 && $s(),
    (i = e.pendingLanes),
    i & 1 ? (e === ca ? Vn++ : ((Vn = 0), (ca = e))) : (Vn = 0),
    os(),
    null
  );
}
function $s() {
  if (Yt !== null) {
    var e = Yd(gr),
      t = it.transition,
      n = X;
    try {
      if (((it.transition = null), (X = 16 > e ? 16 : e), Yt === null))
        var l = !1;
      else {
        if (((e = Yt), (Yt = null), (gr = 0), Y & 6)) throw Error(C(331));
        var r = Y;
        for (Y |= 4, z = e.current; z !== null; ) {
          var i = z,
            a = i.child;
          if (z.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var c = 0; c < o.length; c++) {
                var d = o[c];
                for (z = d; z !== null; ) {
                  var h = z;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bn(8, h, i);
                  }
                  var v = h.child;
                  if (v !== null) (v.return = h), (z = v);
                  else
                    for (; z !== null; ) {
                      h = z;
                      var m = h.sibling,
                        N = h.return;
                      if ((ih(h), h === d)) {
                        z = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = N), (z = m);
                        break;
                      }
                      z = N;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var j = y.child;
                if (j !== null) {
                  y.child = null;
                  do {
                    var A = j.sibling;
                    (j.sibling = null), (j = A);
                  } while (j !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (z = a);
          else
            e: for (; z !== null; ) {
              if (((i = z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (z = f);
                break e;
              }
              z = i.return;
            }
        }
        var u = e.current;
        for (z = u; z !== null; ) {
          a = z;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) (p.return = a), (z = p);
          else
            e: for (a = u; z !== null; ) {
              if (((o = z), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pr(9, o);
                  }
                } catch (I) {
                  de(o, o.return, I);
                }
              if (o === a) {
                z = null;
                break e;
              }
              var k = o.sibling;
              if (k !== null) {
                (k.return = o.return), (z = k);
                break e;
              }
              z = o.return;
            }
        }
        if (
          ((Y = r), os(), kt && typeof kt.onPostCommitFiberRoot == "function")
        )
          try {
            kt.onPostCommitFiberRoot(qr, e);
          } catch {}
        l = !0;
      }
      return l;
    } finally {
      (X = n), (it.transition = t);
    }
  }
  return !1;
}
function Oc(e, t, n) {
  (t = rn(n, t)),
    (t = Yu(e, t, 1)),
    (e = es(e, t, 1)),
    (t = Te()),
    e !== null && (dl(e, 1, t), Ue(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) Oc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Oc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var l = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof l.componentDidCatch == "function" &&
            (ts === null || !ts.has(l)))
        ) {
          (e = rn(n, e)),
            (e = Xu(t, e, 1)),
            (t = es(t, e, 1)),
            (e = Te()),
            t !== null && (dl(t, 1, e), Ue(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function pf(e, t, n) {
  var l = e.pingCache;
  l !== null && l.delete(t),
    (t = Te()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (Se & n) === n &&
      (pe === 4 || (pe === 3 && (Se & 130023424) === Se && 500 > he() - lo)
        ? js(e, 0)
        : (no |= n)),
    Ue(e, t);
}
function ph(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = El), (El <<= 1), !(El & 130023424) && (El = 4194304))
      : (t = 1));
  var n = Te();
  (e = Rt(e, t)), e !== null && (dl(e, t, n), Ue(e, n));
}
function xf(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ph(e, n);
}
function gf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var l = e.stateNode,
        r = e.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      l = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  l !== null && l.delete(t), ph(e, n);
}
var xh;
xh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || _e.current) Oe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Oe = !1), lf(e, t, n);
      Oe = !!(e.flags & 131072);
    }
  else (Oe = !1), le && t.flags & 1048576 && yu(t, cr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var l = t.type;
      Kl(e, t), (e = t.pendingProps);
      var r = tn(t, Ae.current);
      Gs(t, n), (r = Za(null, t, l, e, r, n));
      var i = Ga();
      return (
        (t.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Be(l) ? ((i = !0), ar(t)) : (i = !1),
            (t.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            Qa(t),
            (r.updater = Ar),
            (t.stateNode = r),
            (r._reactInternals = t),
            Zi(t, l, e, n),
            (t = ea(null, t, l, !0, i, n)))
          : ((t.tag = 0), le && i && Oa(t), ze(null, t, r, n), (t = t.child)),
        t
      );
    case 16:
      l = t.elementType;
      e: {
        switch (
          (Kl(e, t),
          (e = t.pendingProps),
          (r = l._init),
          (l = r(l._payload)),
          (t.type = l),
          (r = t.tag = jf(l)),
          (e = ht(l, e)),
          r)
        ) {
          case 0:
            t = $i(null, t, l, e, n);
            break e;
          case 1:
            t = Ic(null, t, l, e, n);
            break e;
          case 11:
            t = Ec(null, t, l, e, n);
            break e;
          case 14:
            t = bc(null, t, l, ht(l.type, e), n);
            break e;
        }
        throw Error(C(306, l, ""));
      }
      return t;
    case 0:
      return (
        (l = t.type),
        (r = t.pendingProps),
        (r = t.elementType === l ? r : ht(l, r)),
        $i(e, t, l, r, n)
      );
    case 1:
      return (
        (l = t.type),
        (r = t.pendingProps),
        (r = t.elementType === l ? r : ht(l, r)),
        Ic(e, t, l, r, n)
      );
    case 3:
      e: {
        if ((eh(t), e === null)) throw Error(C(387));
        (l = t.pendingProps),
          (i = t.memoizedState),
          (r = i.element),
          Eu(e, t),
          hr(t, l, null, n);
        var a = t.memoizedState;
        if (((l = a.element), i.isDehydrated))
          if (
            ((i = {
              element: l,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (r = rn(Error(C(423)), t)), (t = Lc(e, t, l, n, r));
            break e;
          } else if (l !== r) {
            (r = rn(Error(C(424)), t)), (t = Lc(e, t, l, n, r));
            break e;
          } else
            for (
              Je = $t(t.stateNode.containerInfo.firstChild),
                Ye = t,
                le = !0,
                ft = null,
                n = Su(t, null, l, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((sn(), l === r)) {
            t = zt(e, t, n);
            break e;
          }
          ze(e, t, l, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        bu(t),
        e === null && Ji(t),
        (l = t.type),
        (r = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = r.children),
        Vi(l, r) ? (a = null) : i !== null && Vi(l, i) && (t.flags |= 32),
        $u(e, t),
        ze(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Ji(t), null;
    case 13:
      return th(e, t, n);
    case 4:
      return (
        Ka(t, t.stateNode.containerInfo),
        (l = t.pendingProps),
        e === null ? (t.child = nn(t, null, l, n)) : ze(e, t, l, n),
        t.child
      );
    case 11:
      return (
        (l = t.type),
        (r = t.pendingProps),
        (r = t.elementType === l ? r : ht(l, r)),
        Ec(e, t, l, r, n)
      );
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((l = t.type._context),
          (r = t.pendingProps),
          (i = t.memoizedProps),
          (a = r.value),
          $(dr, l._currentValue),
          (l._currentValue = a),
          i !== null)
        )
          if (gt(i.value, a)) {
            if (i.children === r.children && !_e.current) {
              t = zt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                a = i.child;
                for (var c = o.firstContext; c !== null; ) {
                  if (c.context === l) {
                    if (i.tag === 1) {
                      (c = It(-1, n & -n)), (c.tag = 2);
                      var d = i.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var h = d.pending;
                        h === null
                          ? (c.next = c)
                          : ((c.next = h.next), (h.next = c)),
                          (d.pending = c);
                      }
                    }
                    (i.lanes |= n),
                      (c = i.alternate),
                      c !== null && (c.lanes |= n),
                      Yi(i.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(C(341));
                (a.lanes |= n),
                  (o = a.alternate),
                  o !== null && (o.lanes |= n),
                  Yi(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        ze(e, t, r.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (r = t.type),
        (l = t.pendingProps.children),
        Gs(t, n),
        (r = at(r)),
        (l = l(r)),
        (t.flags |= 1),
        ze(e, t, l, n),
        t.child
      );
    case 14:
      return (
        (l = t.type),
        (r = ht(l, t.pendingProps)),
        (r = ht(l.type, r)),
        bc(e, t, l, r, n)
      );
    case 15:
      return Zu(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (l = t.type),
        (r = t.pendingProps),
        (r = t.elementType === l ? r : ht(l, r)),
        Kl(e, t),
        (t.tag = 1),
        Be(l) ? ((e = !0), ar(t)) : (e = !1),
        Gs(t, n),
        Ju(t, l, r),
        Zi(t, l, r, n),
        ea(null, t, l, !0, e, n)
      );
    case 19:
      return sh(e, t, n);
    case 22:
      return Gu(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function gh(e, t) {
  return Wd(e, t);
}
function wf(e, t, n, l) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = l),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function rt(e, t, n, l) {
  return new wf(e, t, n, l);
}
function oo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function jf(e) {
  if (typeof e == "function") return oo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ea)) return 11;
    if (e === ba) return 14;
  }
  return 2;
}
function ns(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Xl(e, t, n, l, r, i) {
  var a = 2;
  if (((l = e), typeof e == "function")) oo(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Ms:
        return ys(n.children, r, i, t);
      case Ca:
        (a = 8), (r |= 8);
        break;
      case yi:
        return (
          (e = rt(12, n, t, r | 2)), (e.elementType = yi), (e.lanes = i), e
        );
      case Ni:
        return (e = rt(13, n, t, r)), (e.elementType = Ni), (e.lanes = i), e;
      case ki:
        return (e = rt(19, n, t, r)), (e.elementType = ki), (e.lanes = i), e;
      case bd:
        return zr(n, r, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Cd:
              a = 10;
              break e;
            case Ed:
              a = 9;
              break e;
            case Ea:
              a = 11;
              break e;
            case ba:
              a = 14;
              break e;
            case Ht:
              (a = 16), (l = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = rt(a, n, t, r)), (t.elementType = e), (t.type = l), (t.lanes = i), t
  );
}
function ys(e, t, n, l) {
  return (e = rt(7, e, l, t)), (e.lanes = n), e;
}
function zr(e, t, n, l) {
  return (
    (e = rt(22, e, l, t)),
    (e.elementType = bd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function mi(e, t, n) {
  return (e = rt(6, e, null, t)), (e.lanes = n), e;
}
function fi(e, t, n) {
  return (
    (t = rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function yf(e, t, n, l, r) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yr(0)),
    (this.expirationTimes = Yr(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yr(0)),
    (this.identifierPrefix = l),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function co(e, t, n, l, r, i, a, o, c) {
  return (
    (e = new yf(e, t, n, o, c)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = rt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Qa(i),
    e
  );
}
function Nf(e, t, n) {
  var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ts,
    key: l == null ? null : "" + l,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function wh(e) {
  if (!e) return rs;
  e = e._reactInternals;
  e: {
    if (Is(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Be(n)) return wu(e, n, t);
  }
  return t;
}
function jh(e, t, n, l, r, i, a, o, c) {
  return (
    (e = co(n, l, !0, e, r, i, a, o, c)),
    (e.context = wh(null)),
    (n = e.current),
    (l = Te()),
    (r = ss(n)),
    (i = It(l, r)),
    (i.callback = t ?? null),
    es(n, i, r),
    (e.current.lanes = r),
    dl(e, r, l),
    Ue(e, l),
    e
  );
}
function Tr(e, t, n, l) {
  var r = t.current,
    i = Te(),
    a = ss(r);
  return (
    (n = wh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = It(i, a)),
    (t.payload = { element: e }),
    (l = l === void 0 ? null : l),
    l !== null && (t.callback = l),
    (e = es(r, t, a)),
    e !== null && (xt(e, r, a, i), Hl(e, r, a)),
    a
  );
}
function jr(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _c(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function uo(e, t) {
  _c(e, t), (e = e.alternate) && _c(e, t);
}
function kf() {
  return null;
}
var yh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ho(e) {
  this._internalRoot = e;
}
Mr.prototype.render = ho.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Tr(e, t, null, null);
};
Mr.prototype.unmount = ho.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cs(function () {
      Tr(null, e, null, null);
    }),
      (t[Pt] = null);
  }
};
function Mr(e) {
  this._internalRoot = e;
}
Mr.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Gd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
    Qt.splice(n, 0, e), n === 0 && eu(e);
  }
};
function vo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Fr(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bc() {}
function qf(e, t, n, l, r) {
  if (r) {
    if (typeof l == "function") {
      var i = l;
      l = function () {
        var d = jr(a);
        i.call(d);
      };
    }
    var a = jh(t, l, e, 0, null, !1, !1, "", Bc);
    return (
      (e._reactRootContainer = a),
      (e[Pt] = a.current),
      $n(e.nodeType === 8 ? e.parentNode : e),
      Cs(),
      a
    );
  }
  for (; (r = e.lastChild); ) e.removeChild(r);
  if (typeof l == "function") {
    var o = l;
    l = function () {
      var d = jr(c);
      o.call(d);
    };
  }
  var c = co(e, 0, !1, null, null, !1, !1, "", Bc);
  return (
    (e._reactRootContainer = c),
    (e[Pt] = c.current),
    $n(e.nodeType === 8 ? e.parentNode : e),
    Cs(function () {
      Tr(t, c, n, l);
    }),
    c
  );
}
function Dr(e, t, n, l, r) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = jr(a);
        o.call(c);
      };
    }
    Tr(t, a, e, r);
  } else a = qf(n, t, e, r, l);
  return jr(a);
}
Xd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rn(t.pendingLanes);
        n !== 0 &&
          (Aa(t, n | 1), Ue(t, he()), !(Y & 6) && ((an = he() + 500), os()));
      }
      break;
    case 13:
      Cs(function () {
        var l = Rt(e, 1);
        if (l !== null) {
          var r = Te();
          xt(l, e, 1, r);
        }
      }),
        uo(e, 1);
  }
};
Pa = function (e) {
  if (e.tag === 13) {
    var t = Rt(e, 134217728);
    if (t !== null) {
      var n = Te();
      xt(t, e, 134217728, n);
    }
    uo(e, 134217728);
  }
};
Zd = function (e) {
  if (e.tag === 13) {
    var t = ss(e),
      n = Rt(e, t);
    if (n !== null) {
      var l = Te();
      xt(n, e, t, l);
    }
    uo(e, t);
  }
};
Gd = function () {
  return X;
};
$d = function (e, t) {
  var n = X;
  try {
    return (X = e), t();
  } finally {
    X = n;
  }
};
Ri = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ci(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var l = n[t];
          if (l !== e && l.form === e.form) {
            var r = br(l);
            if (!r) throw Error(C(90));
            Ld(l), Ci(l, r);
          }
        }
      }
      break;
    case "textarea":
      Pd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Js(e, !!n.multiple, t, !1);
  }
};
Od = ro;
_d = Cs;
var Sf = { usingClientEntryPoint: !1, Events: [hl, _s, br, Fd, Dd, ro] },
  Cn = {
    findFiberByHostInstance: fs,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Cf = {
    bundleType: Cn.bundleType,
    version: Cn.version,
    rendererPackageName: Cn.rendererPackageName,
    rendererConfig: Cn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Vd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Cn.findFiberByHostInstance || kf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dl.isDisabled && Dl.supportsFiber)
    try {
      (qr = Dl.inject(Cf)), (kt = Dl);
    } catch {}
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sf;
Ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!vo(t)) throw Error(C(200));
  return Nf(e, t, null, n);
};
Ze.createRoot = function (e, t) {
  if (!vo(e)) throw Error(C(299));
  var n = !1,
    l = "",
    r = yh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    (t = co(e, 1, !1, null, null, n, !1, l, r)),
    (e[Pt] = t.current),
    $n(e.nodeType === 8 ? e.parentNode : e),
    new ho(t)
  );
};
Ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = Vd(t)), (e = e === null ? null : e.stateNode), e;
};
Ze.flushSync = function (e) {
  return Cs(e);
};
Ze.hydrate = function (e, t, n) {
  if (!Fr(t)) throw Error(C(200));
  return Dr(null, e, t, !0, n);
};
Ze.hydrateRoot = function (e, t, n) {
  if (!vo(e)) throw Error(C(405));
  var l = (n != null && n.hydratedSources) || null,
    r = !1,
    i = "",
    a = yh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = jh(t, null, e, 1, n ?? null, r, !1, i, a)),
    (e[Pt] = t.current),
    $n(e),
    l)
  )
    for (e = 0; e < l.length; e++)
      (n = l[e]),
        (r = n._getVersion),
        (r = r(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, r])
          : t.mutableSourceEagerHydrationData.push(n, r);
  return new Mr(t);
};
Ze.render = function (e, t, n) {
  if (!Fr(t)) throw Error(C(200));
  return Dr(null, e, t, !1, n);
};
Ze.unmountComponentAtNode = function (e) {
  if (!Fr(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Cs(function () {
        Dr(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Pt] = null);
        });
      }),
      !0)
    : !1;
};
Ze.unstable_batchedUpdates = ro;
Ze.unstable_renderSubtreeIntoContainer = function (e, t, n, l) {
  if (!Fr(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Dr(e, t, n, !1, l);
};
Ze.version = "18.3.1-next-f1338f8080-20240426";
function Nh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nh);
    } catch (e) {
      console.error(e);
    }
}
Nh(), (Nd.exports = Ze);
var mo = Nd.exports;
const Ef = cd(mo),
  bf = od({ __proto__: null, default: Ef }, [mo]);
var Uc = mo;
(wi.createRoot = Uc.createRoot), (wi.hydrateRoot = Uc.hydrateRoot);
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ie() {
  return (
    (ie = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
          }
          return e;
        }),
    ie.apply(this, arguments)
  );
}
var ve;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ve || (ve = {}));
const Vc = "popstate";
function If(e) {
  e === void 0 && (e = {});
  function t(l, r) {
    let { pathname: i, search: a, hash: o } = l.location;
    return ol(
      "",
      { pathname: i, search: a, hash: o },
      (r.state && r.state.usr) || null,
      (r.state && r.state.key) || "default"
    );
  }
  function n(l, r) {
    return typeof r == "string" ? r : Es(r);
  }
  return Af(t, n, null, e);
}
function H(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function on(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Lf() {
  return Math.random().toString(36).substr(2, 8);
}
function Hc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ol(e, t, n, l) {
  return (
    n === void 0 && (n = null),
    ie(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? cs(t) : t,
      { state: n, key: (t && t.key) || l || Lf() }
    )
  );
}
function Es(e) {
  let { pathname: t = "/", search: n = "", hash: l = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    l && l !== "#" && (t += l.charAt(0) === "#" ? l : "#" + l),
    t
  );
}
function cs(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let l = e.indexOf("?");
    l >= 0 && ((t.search = e.substr(l)), (e = e.substr(0, l))),
      e && (t.pathname = e);
  }
  return t;
}
function Af(e, t, n, l) {
  l === void 0 && (l = {});
  let { window: r = document.defaultView, v5Compat: i = !1 } = l,
    a = r.history,
    o = ve.Pop,
    c = null,
    d = h();
  d == null && ((d = 0), a.replaceState(ie({}, a.state, { idx: d }), ""));
  function h() {
    return (a.state || { idx: null }).idx;
  }
  function v() {
    o = ve.Pop;
    let A = h(),
      f = A == null ? null : A - d;
    (d = A), c && c({ action: o, location: j.location, delta: f });
  }
  function m(A, f) {
    o = ve.Push;
    let u = ol(j.location, A, f);
    d = h() + 1;
    let p = Hc(u, d),
      k = j.createHref(u);
    try {
      a.pushState(p, "", k);
    } catch (I) {
      if (I instanceof DOMException && I.name === "DataCloneError") throw I;
      r.location.assign(k);
    }
    i && c && c({ action: o, location: j.location, delta: 1 });
  }
  function N(A, f) {
    o = ve.Replace;
    let u = ol(j.location, A, f);
    d = h();
    let p = Hc(u, d),
      k = j.createHref(u);
    a.replaceState(p, "", k),
      i && c && c({ action: o, location: j.location, delta: 0 });
  }
  function y(A) {
    let f = r.location.origin !== "null" ? r.location.origin : r.location.href,
      u = typeof A == "string" ? A : Es(A);
    return (
      (u = u.replace(/ $/, "%20")),
      H(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          u
      ),
      new URL(u, f)
    );
  }
  let j = {
    get action() {
      return o;
    },
    get location() {
      return e(r, a);
    },
    listen(A) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        r.addEventListener(Vc, v),
        (c = A),
        () => {
          r.removeEventListener(Vc, v), (c = null);
        }
      );
    },
    createHref(A) {
      return t(r, A);
    },
    createURL: y,
    encodeLocation(A) {
      let f = y(A);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: N,
    go(A) {
      return a.go(A);
    },
  };
  return j;
}
var ne;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ne || (ne = {}));
const Pf = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Rf(e) {
  return e.index === !0;
}
function ha(e, t, n, l) {
  return (
    n === void 0 && (n = []),
    l === void 0 && (l = {}),
    e.map((r, i) => {
      let a = [...n, i],
        o = typeof r.id == "string" ? r.id : a.join("-");
      if (
        (H(
          r.index !== !0 || !r.children,
          "Cannot specify children on an index route"
        ),
        H(
          !l[o],
          'Found a route id collision on id "' +
            o +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Rf(r))
      ) {
        let c = ie({}, r, t(r), { id: o });
        return (l[o] = c), c;
      } else {
        let c = ie({}, r, t(r), { id: o, children: void 0 });
        return (
          (l[o] = c), r.children && (c.children = ha(r.children, t, a, l)), c
        );
      }
    })
  );
}
function Ks(e, t, n) {
  n === void 0 && (n = "/");
  let l = typeof t == "string" ? cs(t) : t,
    r = Tt(l.pathname || "/", n);
  if (r == null) return null;
  let i = kh(e);
  Tf(i);
  let a = null;
  for (let o = 0; a == null && o < i.length; ++o) {
    let c = Qf(r);
    a = Hf(i[o], c);
  }
  return a;
}
function zf(e, t) {
  let { route: n, pathname: l, params: r } = e;
  return { id: n.id, pathname: l, params: r, data: t[n.id], handle: n.handle };
}
function kh(e, t, n, l) {
  t === void 0 && (t = []), n === void 0 && (n = []), l === void 0 && (l = "");
  let r = (i, a, o) => {
    let c = {
      relativePath: o === void 0 ? i.path || "" : o,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    c.relativePath.startsWith("/") &&
      (H(
        c.relativePath.startsWith(l),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + l + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (c.relativePath = c.relativePath.slice(l.length)));
    let d = Lt([l, c.relativePath]),
      h = n.concat(c);
    i.children &&
      i.children.length > 0 &&
      (H(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + d + '".')
      ),
      kh(i.children, t, h, d)),
      !(i.path == null && !i.index) &&
        t.push({ path: d, score: Uf(d, i.index), routesMeta: h });
  };
  return (
    e.forEach((i, a) => {
      var o;
      if (i.path === "" || !((o = i.path) != null && o.includes("?"))) r(i, a);
      else for (let c of qh(i.path)) r(i, a, c);
    }),
    t
  );
}
function qh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...l] = t,
    r = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (l.length === 0) return r ? [i, ""] : [i];
  let a = qh(l.join("/")),
    o = [];
  return (
    o.push(...a.map((c) => (c === "" ? i : [i, c].join("/")))),
    r && o.push(...a),
    o.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function Tf(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Vf(
          t.routesMeta.map((l) => l.childrenIndex),
          n.routesMeta.map((l) => l.childrenIndex)
        )
  );
}
const Mf = /^:[\w-]+$/,
  Ff = 3,
  Df = 2,
  Of = 1,
  _f = 10,
  Bf = -2,
  Wc = (e) => e === "*";
function Uf(e, t) {
  let n = e.split("/"),
    l = n.length;
  return (
    n.some(Wc) && (l += Bf),
    t && (l += Df),
    n
      .filter((r) => !Wc(r))
      .reduce((r, i) => r + (Mf.test(i) ? Ff : i === "" ? Of : _f), l)
  );
}
function Vf(e, t) {
  return e.length === t.length && e.slice(0, -1).every((l, r) => l === t[r])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Hf(e, t) {
  let { routesMeta: n } = e,
    l = {},
    r = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let o = n[a],
      c = a === n.length - 1,
      d = r === "/" ? t : t.slice(r.length) || "/",
      h = va(
        { path: o.relativePath, caseSensitive: o.caseSensitive, end: c },
        d
      );
    if (!h) return null;
    Object.assign(l, h.params);
    let v = o.route;
    i.push({
      params: l,
      pathname: Lt([r, h.pathname]),
      pathnameBase: Yf(Lt([r, h.pathnameBase])),
      route: v,
    }),
      h.pathnameBase !== "/" && (r = Lt([r, h.pathnameBase]));
  }
  return i;
}
function va(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, l] = Wf(e.path, e.caseSensitive, e.end),
    r = t.match(n);
  if (!r) return null;
  let i = r[0],
    a = i.replace(/(.)\/+$/, "$1"),
    o = r.slice(1);
  return {
    params: l.reduce((d, h, v) => {
      let { paramName: m, isOptional: N } = h;
      if (m === "*") {
        let j = o[v] || "";
        a = i.slice(0, i.length - j.length).replace(/(.)\/+$/, "$1");
      }
      const y = o[v];
      return (
        N && !y ? (d[m] = void 0) : (d[m] = (y || "").replace(/%2F/g, "/")), d
      );
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function Wf(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    on(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let l = [],
    r =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, o, c) => (
            l.push({ paramName: o, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (l.push({ paramName: "*" }),
        (r += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (r += "\\/*$")
      : e !== "" && e !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r, t ? void 0 : "i"), l]
  );
}
function Qf(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      on(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Tt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    l = e.charAt(n);
  return l && l !== "/" ? null : e.slice(n) || "/";
}
function Kf(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: l = "",
    hash: r = "",
  } = typeof e == "string" ? cs(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Jf(n, t)) : t,
    search: Xf(l),
    hash: Zf(r),
  };
}
function Jf(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((r) => {
      r === ".." ? n.length > 1 && n.pop() : r !== "." && n.push(r);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function pi(e, t, n, l) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(l) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Sh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function fo(e, t) {
  let n = Sh(e);
  return t
    ? n.map((l, r) => (r === e.length - 1 ? l.pathname : l.pathnameBase))
    : n.map((l) => l.pathnameBase);
}
function po(e, t, n, l) {
  l === void 0 && (l = !1);
  let r;
  typeof e == "string"
    ? (r = cs(e))
    : ((r = ie({}, e)),
      H(
        !r.pathname || !r.pathname.includes("?"),
        pi("?", "pathname", "search", r)
      ),
      H(
        !r.pathname || !r.pathname.includes("#"),
        pi("#", "pathname", "hash", r)
      ),
      H(!r.search || !r.search.includes("#"), pi("#", "search", "hash", r)));
  let i = e === "" || r.pathname === "",
    a = i ? "/" : r.pathname,
    o;
  if (a == null) o = n;
  else {
    let v = t.length - 1;
    if (!l && a.startsWith("..")) {
      let m = a.split("/");
      for (; m[0] === ".."; ) m.shift(), (v -= 1);
      r.pathname = m.join("/");
    }
    o = v >= 0 ? t[v] : "/";
  }
  let c = Kf(r, o),
    d = a && a !== "/" && a.endsWith("/"),
    h = (i || a === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (d || h) && (c.pathname += "/"), c;
}
const Lt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Yf = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Xf = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Zf = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class xo {
  constructor(t, n, l, r) {
    r === void 0 && (r = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = r),
      l instanceof Error
        ? ((this.data = l.toString()), (this.error = l))
        : (this.data = l);
  }
}
function go(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Ch = ["post", "put", "patch", "delete"],
  Gf = new Set(Ch),
  $f = ["get", ...Ch],
  ep = new Set($f),
  tp = new Set([301, 302, 303, 307, 308]),
  sp = new Set([307, 308]),
  xi = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  np = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  En = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  wo = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  lp = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Eh = "remix-router-transitions";
function rp(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    l = !n;
  H(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let r;
  if (e.mapRouteProperties) r = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let g = e.detectErrorBoundary;
    r = (w) => ({ hasErrorBoundary: g(w) });
  } else r = lp;
  let i = {},
    a = ha(e.routes, r, void 0, i),
    o,
    c = e.basename || "/",
    d = e.unstable_dataStrategy || cp,
    h = ie(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    v = null,
    m = new Set(),
    N = null,
    y = null,
    j = null,
    A = e.hydrationData != null,
    f = Ks(a, e.history.location, c),
    u = null;
  if (f == null) {
    let g = tt(404, { pathname: e.history.location.pathname }),
      { matches: w, route: q } = td(a);
    (f = w), (u = { [q.id]: g });
  }
  let p,
    k = f.some((g) => g.route.lazy),
    I = f.some((g) => g.route.loader);
  if (k) p = !1;
  else if (!I) p = !0;
  else if (h.v7_partialHydration) {
    let g = e.hydrationData ? e.hydrationData.loaderData : null,
      w = e.hydrationData ? e.hydrationData.errors : null,
      q = (E) =>
        E.route.loader
          ? typeof E.route.loader == "function" && E.route.loader.hydrate === !0
            ? !1
            : (g && g[E.route.id] !== void 0) || (w && w[E.route.id] !== void 0)
          : !0;
    if (w) {
      let E = f.findIndex((T) => w[T.route.id] !== void 0);
      p = f.slice(0, E + 1).every(q);
    } else p = f.every(q);
  } else p = e.hydrationData != null;
  let P,
    x = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: f,
      initialized: p,
      navigation: xi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || u,
      fetchers: new Map(),
      blockers: new Map(),
    },
    L = ve.Pop,
    F = !1,
    R,
    K = !1,
    ue = new Map(),
    re = null,
    je = !1,
    ct = !1,
    Ft = [],
    Dt = [],
    b = new Map(),
    O = 0,
    B = -1,
    Z = new Map(),
    G = new Set(),
    dt = new Map(),
    Ve = new Map(),
    He = new Set(),
    Pe = new Map(),
    $e = new Map(),
    Br = !1;
  function Oh() {
    if (
      ((v = e.history.listen((g) => {
        let { action: w, location: q, delta: E } = g;
        if (Br) {
          Br = !1;
          return;
        }
        on(
          $e.size === 0 || E != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let T = Lo({
          currentLocation: x.location,
          nextLocation: q,
          historyAction: w,
        });
        if (T && E != null) {
          (Br = !0),
            e.history.go(E * -1),
            gl(T, {
              state: "blocked",
              location: q,
              proceed() {
                gl(T, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: q,
                }),
                  e.history.go(E);
              },
              reset() {
                let V = new Map(x.blockers);
                V.set(T, En), We({ blockers: V });
              },
            });
          return;
        }
        return hs(w, q);
      })),
      n)
    ) {
      yp(t, ue);
      let g = () => Np(t, ue);
      t.addEventListener("pagehide", g),
        (re = () => t.removeEventListener("pagehide", g));
    }
    return x.initialized || hs(ve.Pop, x.location, { initialHydration: !0 }), P;
  }
  function _h() {
    v && v(),
      re && re(),
      m.clear(),
      R && R.abort(),
      x.fetchers.forEach((g, w) => xl(w)),
      x.blockers.forEach((g, w) => Io(w));
  }
  function Bh(g) {
    return m.add(g), () => m.delete(g);
  }
  function We(g, w) {
    w === void 0 && (w = {}), (x = ie({}, x, g));
    let q = [],
      E = [];
    h.v7_fetcherPersist &&
      x.fetchers.forEach((T, V) => {
        T.state === "idle" && (He.has(V) ? E.push(V) : q.push(V));
      }),
      [...m].forEach((T) =>
        T(x, {
          deletedFetchers: E,
          unstable_viewTransitionOpts: w.viewTransitionOpts,
          unstable_flushSync: w.flushSync === !0,
        })
      ),
      h.v7_fetcherPersist &&
        (q.forEach((T) => x.fetchers.delete(T)), E.forEach((T) => xl(T)));
  }
  function vn(g, w, q) {
    var E, T;
    let { flushSync: V } = q === void 0 ? {} : q,
      D =
        x.actionData != null &&
        x.navigation.formMethod != null &&
        mt(x.navigation.formMethod) &&
        x.navigation.state === "loading" &&
        ((E = g.state) == null ? void 0 : E._isRedirect) !== !0,
      M;
    w.actionData
      ? Object.keys(w.actionData).length > 0
        ? (M = w.actionData)
        : (M = null)
      : D
      ? (M = x.actionData)
      : (M = null);
    let W = w.loaderData
        ? $c(x.loaderData, w.loaderData, w.matches || [], w.errors)
        : x.loaderData,
      U = x.blockers;
    U.size > 0 && ((U = new Map(U)), U.forEach((_, se) => U.set(se, En)));
    let ye =
      F === !0 ||
      (x.navigation.formMethod != null &&
        mt(x.navigation.formMethod) &&
        ((T = g.state) == null ? void 0 : T._isRedirect) !== !0);
    o && ((a = o), (o = void 0)),
      je ||
        L === ve.Pop ||
        (L === ve.Push
          ? e.history.push(g, g.state)
          : L === ve.Replace && e.history.replace(g, g.state));
    let Ne;
    if (L === ve.Pop) {
      let _ = ue.get(x.location.pathname);
      _ && _.has(g.pathname)
        ? (Ne = { currentLocation: x.location, nextLocation: g })
        : ue.has(g.pathname) &&
          (Ne = { currentLocation: g, nextLocation: x.location });
    } else if (K) {
      let _ = ue.get(x.location.pathname);
      _
        ? _.add(g.pathname)
        : ((_ = new Set([g.pathname])), ue.set(x.location.pathname, _)),
        (Ne = { currentLocation: x.location, nextLocation: g });
    }
    We(
      ie({}, w, {
        actionData: M,
        loaderData: W,
        historyAction: L,
        location: g,
        initialized: !0,
        navigation: xi,
        revalidation: "idle",
        restoreScrollPosition: Po(g, w.matches || x.matches),
        preventScrollReset: ye,
        blockers: U,
      }),
      { viewTransitionOpts: Ne, flushSync: V === !0 }
    ),
      (L = ve.Pop),
      (F = !1),
      (K = !1),
      (je = !1),
      (ct = !1),
      (Ft = []),
      (Dt = []);
  }
  async function ko(g, w) {
    if (typeof g == "number") {
      e.history.go(g);
      return;
    }
    let q = ma(
        x.location,
        x.matches,
        c,
        h.v7_prependBasename,
        g,
        h.v7_relativeSplatPath,
        w == null ? void 0 : w.fromRouteId,
        w == null ? void 0 : w.relative
      ),
      {
        path: E,
        submission: T,
        error: V,
      } = Qc(h.v7_normalizeFormMethod, !1, q, w),
      D = x.location,
      M = ol(x.location, E, w && w.state);
    M = ie({}, M, e.history.encodeLocation(M));
    let W = w && w.replace != null ? w.replace : void 0,
      U = ve.Push;
    W === !0
      ? (U = ve.Replace)
      : W === !1 ||
        (T != null &&
          mt(T.formMethod) &&
          T.formAction === x.location.pathname + x.location.search &&
          (U = ve.Replace));
    let ye =
        w && "preventScrollReset" in w ? w.preventScrollReset === !0 : void 0,
      Ne = (w && w.unstable_flushSync) === !0,
      _ = Lo({ currentLocation: D, nextLocation: M, historyAction: U });
    if (_) {
      gl(_, {
        state: "blocked",
        location: M,
        proceed() {
          gl(_, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: M,
          }),
            ko(g, w);
        },
        reset() {
          let se = new Map(x.blockers);
          se.set(_, En), We({ blockers: se });
        },
      });
      return;
    }
    return await hs(U, M, {
      submission: T,
      pendingError: V,
      preventScrollReset: ye,
      replace: w && w.replace,
      enableViewTransition: w && w.unstable_viewTransition,
      flushSync: Ne,
    });
  }
  function Uh() {
    if (
      (Ur(),
      We({ revalidation: "loading" }),
      x.navigation.state !== "submitting")
    ) {
      if (x.navigation.state === "idle") {
        hs(x.historyAction, x.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      hs(L || x.historyAction, x.navigation.location, {
        overrideNavigation: x.navigation,
      });
    }
  }
  async function hs(g, w, q) {
    R && R.abort(),
      (R = null),
      (L = g),
      (je = (q && q.startUninterruptedRevalidation) === !0),
      Zh(x.location, x.matches),
      (F = (q && q.preventScrollReset) === !0),
      (K = (q && q.enableViewTransition) === !0);
    let E = o || a,
      T = q && q.overrideNavigation,
      V = Ks(E, w, c),
      D = (q && q.flushSync) === !0;
    if (!V) {
      let _ = tt(404, { pathname: w.pathname }),
        { matches: se, route: xe } = td(E);
      Vr(),
        vn(
          w,
          { matches: se, loaderData: {}, errors: { [xe.id]: _ } },
          { flushSync: D }
        );
      return;
    }
    if (
      x.initialized &&
      !ct &&
      fp(x.location, w) &&
      !(q && q.submission && mt(q.submission.formMethod))
    ) {
      vn(w, { matches: V }, { flushSync: D });
      return;
    }
    R = new AbortController();
    let M = zs(e.history, w, R.signal, q && q.submission),
      W;
    if (q && q.pendingError)
      W = [Hn(V).route.id, { type: ne.error, error: q.pendingError }];
    else if (q && q.submission && mt(q.submission.formMethod)) {
      let _ = await Vh(M, w, q.submission, V, {
        replace: q.replace,
        flushSync: D,
      });
      if (_.shortCircuited) return;
      (W = _.pendingActionResult),
        (T = gi(w, q.submission)),
        (D = !1),
        (M = zs(e.history, M.url, M.signal));
    }
    let {
      shortCircuited: U,
      loaderData: ye,
      errors: Ne,
    } = await Hh(
      M,
      w,
      V,
      T,
      q && q.submission,
      q && q.fetcherSubmission,
      q && q.replace,
      q && q.initialHydration === !0,
      D,
      W
    );
    U ||
      ((R = null),
      vn(w, ie({ matches: V }, ed(W), { loaderData: ye, errors: Ne })));
  }
  async function Vh(g, w, q, E, T) {
    T === void 0 && (T = {}), Ur();
    let V = wp(w, q);
    We({ navigation: V }, { flushSync: T.flushSync === !0 });
    let D,
      M = pa(E, w);
    if (!M.route.action && !M.route.lazy)
      D = {
        type: ne.error,
        error: tt(405, {
          method: g.method,
          pathname: w.pathname,
          routeId: M.route.id,
        }),
      };
    else if (((D = (await fn("action", g, [M], E))[0]), g.signal.aborted))
      return { shortCircuited: !0 };
    if (ws(D)) {
      let W;
      return (
        T && T.replace != null
          ? (W = T.replace)
          : (W =
              Xc(D.response.headers.get("Location"), new URL(g.url), c) ===
              x.location.pathname + x.location.search),
        await mn(g, D, { submission: q, replace: W }),
        { shortCircuited: !0 }
      );
    }
    if (gs(D)) throw tt(400, { type: "defer-action" });
    if (lt(D)) {
      let W = Hn(E, M.route.id);
      return (
        (T && T.replace) !== !0 && (L = ve.Push),
        { pendingActionResult: [W.route.id, D] }
      );
    }
    return { pendingActionResult: [M.route.id, D] };
  }
  async function Hh(g, w, q, E, T, V, D, M, W, U) {
    let ye = E || gi(w, T),
      Ne = T || V || ld(ye),
      _ = o || a,
      [se, xe] = Kc(
        e.history,
        x,
        q,
        Ne,
        w,
        h.v7_partialHydration && M === !0,
        h.unstable_skipActionErrorRevalidation,
        ct,
        Ft,
        Dt,
        He,
        dt,
        G,
        _,
        c,
        U
      );
    if (
      (Vr(
        (J) =>
          !(q && q.some((Re) => Re.route.id === J)) ||
          (se && se.some((Re) => Re.route.id === J))
      ),
      (B = ++O),
      se.length === 0 && xe.length === 0)
    ) {
      let J = Eo();
      return (
        vn(
          w,
          ie(
            {
              matches: q,
              loaderData: {},
              errors: U && lt(U[1]) ? { [U[0]]: U[1].error } : null,
            },
            ed(U),
            J ? { fetchers: new Map(x.fetchers) } : {}
          ),
          { flushSync: W }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!je && (!h.v7_partialHydration || !M)) {
      xe.forEach((Re) => {
        let et = x.fetchers.get(Re.key),
          ke = bn(void 0, et ? et.data : void 0);
        x.fetchers.set(Re.key, ke);
      });
      let J;
      U && !lt(U[1])
        ? (J = { [U[0]]: U[1].data })
        : x.actionData &&
          (Object.keys(x.actionData).length === 0
            ? (J = null)
            : (J = x.actionData)),
        We(
          ie(
            { navigation: ye },
            J !== void 0 ? { actionData: J } : {},
            xe.length > 0 ? { fetchers: new Map(x.fetchers) } : {}
          ),
          { flushSync: W }
        );
    }
    xe.forEach((J) => {
      b.has(J.key) && _t(J.key), J.controller && b.set(J.key, J.controller);
    });
    let xn = () => xe.forEach((J) => _t(J.key));
    R && R.signal.addEventListener("abort", xn);
    let { loaderResults: Bt, fetcherResults: Ls } = await qo(
      x.matches,
      q,
      se,
      xe,
      g
    );
    if (g.signal.aborted) return { shortCircuited: !0 };
    R && R.signal.removeEventListener("abort", xn),
      xe.forEach((J) => b.delete(J.key));
    let As = sd([...Bt, ...Ls]);
    if (As) {
      if (As.idx >= se.length) {
        let J = xe[As.idx - se.length].key;
        G.add(J);
      }
      return await mn(g, As.result, { replace: D }), { shortCircuited: !0 };
    }
    let { loaderData: Ps, errors: wt } = Gc(x, q, se, Bt, U, xe, Ls, Pe);
    Pe.forEach((J, Re) => {
      J.subscribe((et) => {
        (et || J.done) && Pe.delete(Re);
      });
    }),
      h.v7_partialHydration &&
        M &&
        x.errors &&
        Object.entries(x.errors)
          .filter((J) => {
            let [Re] = J;
            return !se.some((et) => et.route.id === Re);
          })
          .forEach((J) => {
            let [Re, et] = J;
            wt = Object.assign(wt || {}, { [Re]: et });
          });
    let wl = Eo(),
      jl = bo(B),
      yl = wl || jl || xe.length > 0;
    return ie(
      { loaderData: Ps, errors: wt },
      yl ? { fetchers: new Map(x.fetchers) } : {}
    );
  }
  function Wh(g, w, q, E) {
    if (l)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    b.has(g) && _t(g);
    let T = (E && E.unstable_flushSync) === !0,
      V = o || a,
      D = ma(
        x.location,
        x.matches,
        c,
        h.v7_prependBasename,
        q,
        h.v7_relativeSplatPath,
        w,
        E == null ? void 0 : E.relative
      ),
      M = Ks(V, D, c);
    if (!M) {
      pn(g, w, tt(404, { pathname: D }), { flushSync: T });
      return;
    }
    let {
      path: W,
      submission: U,
      error: ye,
    } = Qc(h.v7_normalizeFormMethod, !0, D, E);
    if (ye) {
      pn(g, w, ye, { flushSync: T });
      return;
    }
    let Ne = pa(M, W);
    if (((F = (E && E.preventScrollReset) === !0), U && mt(U.formMethod))) {
      Qh(g, w, W, Ne, M, T, U);
      return;
    }
    dt.set(g, { routeId: w, path: W }), Kh(g, w, W, Ne, M, T, U);
  }
  async function Qh(g, w, q, E, T, V, D) {
    if ((Ur(), dt.delete(g), !E.route.action && !E.route.lazy)) {
      let ke = tt(405, { method: D.formMethod, pathname: q, routeId: w });
      pn(g, w, ke, { flushSync: V });
      return;
    }
    let M = x.fetchers.get(g);
    Ot(g, jp(D, M), { flushSync: V });
    let W = new AbortController(),
      U = zs(e.history, q, W.signal, D);
    b.set(g, W);
    let ye = O,
      _ = (await fn("action", U, [E], T))[0];
    if (U.signal.aborted) {
      b.get(g) === W && b.delete(g);
      return;
    }
    if (h.v7_fetcherPersist && He.has(g)) {
      if (ws(_) || lt(_)) {
        Ot(g, Vt(void 0));
        return;
      }
    } else {
      if (ws(_))
        if ((b.delete(g), B > ye)) {
          Ot(g, Vt(void 0));
          return;
        } else
          return G.add(g), Ot(g, bn(D)), mn(U, _, { fetcherSubmission: D });
      if (lt(_)) {
        pn(g, w, _.error);
        return;
      }
    }
    if (gs(_)) throw tt(400, { type: "defer-action" });
    let se = x.navigation.location || x.location,
      xe = zs(e.history, se, W.signal),
      xn = o || a,
      Bt =
        x.navigation.state !== "idle"
          ? Ks(xn, x.navigation.location, c)
          : x.matches;
    H(Bt, "Didn't find any matches after fetcher action");
    let Ls = ++O;
    Z.set(g, Ls);
    let As = bn(D, _.data);
    x.fetchers.set(g, As);
    let [Ps, wt] = Kc(
      e.history,
      x,
      Bt,
      D,
      se,
      !1,
      h.unstable_skipActionErrorRevalidation,
      ct,
      Ft,
      Dt,
      He,
      dt,
      G,
      xn,
      c,
      [E.route.id, _]
    );
    wt
      .filter((ke) => ke.key !== g)
      .forEach((ke) => {
        let gn = ke.key,
          Ro = x.fetchers.get(gn),
          $h = bn(void 0, Ro ? Ro.data : void 0);
        x.fetchers.set(gn, $h),
          b.has(gn) && _t(gn),
          ke.controller && b.set(gn, ke.controller);
      }),
      We({ fetchers: new Map(x.fetchers) });
    let wl = () => wt.forEach((ke) => _t(ke.key));
    W.signal.addEventListener("abort", wl);
    let { loaderResults: jl, fetcherResults: yl } = await qo(
      x.matches,
      Bt,
      Ps,
      wt,
      xe
    );
    if (W.signal.aborted) return;
    W.signal.removeEventListener("abort", wl),
      Z.delete(g),
      b.delete(g),
      wt.forEach((ke) => b.delete(ke.key));
    let J = sd([...jl, ...yl]);
    if (J) {
      if (J.idx >= Ps.length) {
        let ke = wt[J.idx - Ps.length].key;
        G.add(ke);
      }
      return mn(xe, J.result);
    }
    let { loaderData: Re, errors: et } = Gc(
      x,
      x.matches,
      Ps,
      jl,
      void 0,
      wt,
      yl,
      Pe
    );
    if (x.fetchers.has(g)) {
      let ke = Vt(_.data);
      x.fetchers.set(g, ke);
    }
    bo(Ls),
      x.navigation.state === "loading" && Ls > B
        ? (H(L, "Expected pending action"),
          R && R.abort(),
          vn(x.navigation.location, {
            matches: Bt,
            loaderData: Re,
            errors: et,
            fetchers: new Map(x.fetchers),
          }))
        : (We({
            errors: et,
            loaderData: $c(x.loaderData, Re, Bt, et),
            fetchers: new Map(x.fetchers),
          }),
          (ct = !1));
  }
  async function Kh(g, w, q, E, T, V, D) {
    let M = x.fetchers.get(g);
    Ot(g, bn(D, M ? M.data : void 0), { flushSync: V });
    let W = new AbortController(),
      U = zs(e.history, q, W.signal);
    b.set(g, W);
    let ye = O,
      _ = (await fn("loader", U, [E], T))[0];
    if (
      (gs(_) && (_ = (await Ah(_, U.signal, !0)) || _),
      b.get(g) === W && b.delete(g),
      !U.signal.aborted)
    ) {
      if (He.has(g)) {
        Ot(g, Vt(void 0));
        return;
      }
      if (ws(_))
        if (B > ye) {
          Ot(g, Vt(void 0));
          return;
        } else {
          G.add(g), await mn(U, _);
          return;
        }
      if (lt(_)) {
        pn(g, w, _.error);
        return;
      }
      H(!gs(_), "Unhandled fetcher deferred data"), Ot(g, Vt(_.data));
    }
  }
  async function mn(g, w, q) {
    let {
      submission: E,
      fetcherSubmission: T,
      replace: V,
    } = q === void 0 ? {} : q;
    w.response.headers.has("X-Remix-Revalidate") && (ct = !0);
    let D = w.response.headers.get("Location");
    H(D, "Expected a Location header on the redirect Response"),
      (D = Xc(D, new URL(g.url), c));
    let M = ol(x.location, D, { _isRedirect: !0 });
    if (n) {
      let se = !1;
      if (w.response.headers.has("X-Remix-Reload-Document")) se = !0;
      else if (wo.test(D)) {
        const xe = e.history.createURL(D);
        se = xe.origin !== t.location.origin || Tt(xe.pathname, c) == null;
      }
      if (se) {
        V ? t.location.replace(D) : t.location.assign(D);
        return;
      }
    }
    R = null;
    let W = V === !0 ? ve.Replace : ve.Push,
      { formMethod: U, formAction: ye, formEncType: Ne } = x.navigation;
    !E && !T && U && ye && Ne && (E = ld(x.navigation));
    let _ = E || T;
    if (sp.has(w.response.status) && _ && mt(_.formMethod))
      await hs(W, M, {
        submission: ie({}, _, { formAction: D }),
        preventScrollReset: F,
      });
    else {
      let se = gi(M, E);
      await hs(W, M, {
        overrideNavigation: se,
        fetcherSubmission: T,
        preventScrollReset: F,
      });
    }
  }
  async function fn(g, w, q, E) {
    try {
      let T = await dp(d, g, w, q, E, i, r);
      return await Promise.all(
        T.map((V, D) => {
          if (pp(V)) {
            let M = V.result;
            return {
              type: ne.redirect,
              response: vp(M, w, q[D].route.id, E, c, h.v7_relativeSplatPath),
            };
          }
          return hp(V);
        })
      );
    } catch (T) {
      return q.map(() => ({ type: ne.error, error: T }));
    }
  }
  async function qo(g, w, q, E, T) {
    let [V, ...D] = await Promise.all([
      q.length ? fn("loader", T, q, w) : [],
      ...E.map((M) => {
        if (M.matches && M.match && M.controller) {
          let W = zs(e.history, M.path, M.controller.signal);
          return fn("loader", W, [M.match], M.matches).then((U) => U[0]);
        } else
          return Promise.resolve({
            type: ne.error,
            error: tt(404, { pathname: M.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        nd(
          g,
          q,
          V,
          V.map(() => T.signal),
          !1,
          x.loaderData
        ),
        nd(
          g,
          E.map((M) => M.match),
          D,
          E.map((M) => (M.controller ? M.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: V, fetcherResults: D }
    );
  }
  function Ur() {
    (ct = !0),
      Ft.push(...Vr()),
      dt.forEach((g, w) => {
        b.has(w) && (Dt.push(w), _t(w));
      });
  }
  function Ot(g, w, q) {
    q === void 0 && (q = {}),
      x.fetchers.set(g, w),
      We(
        { fetchers: new Map(x.fetchers) },
        { flushSync: (q && q.flushSync) === !0 }
      );
  }
  function pn(g, w, q, E) {
    E === void 0 && (E = {});
    let T = Hn(x.matches, w);
    xl(g),
      We(
        { errors: { [T.route.id]: q }, fetchers: new Map(x.fetchers) },
        { flushSync: (E && E.flushSync) === !0 }
      );
  }
  function So(g) {
    return (
      h.v7_fetcherPersist &&
        (Ve.set(g, (Ve.get(g) || 0) + 1), He.has(g) && He.delete(g)),
      x.fetchers.get(g) || np
    );
  }
  function xl(g) {
    let w = x.fetchers.get(g);
    b.has(g) && !(w && w.state === "loading" && Z.has(g)) && _t(g),
      dt.delete(g),
      Z.delete(g),
      G.delete(g),
      He.delete(g),
      x.fetchers.delete(g);
  }
  function Jh(g) {
    if (h.v7_fetcherPersist) {
      let w = (Ve.get(g) || 0) - 1;
      w <= 0 ? (Ve.delete(g), He.add(g)) : Ve.set(g, w);
    } else xl(g);
    We({ fetchers: new Map(x.fetchers) });
  }
  function _t(g) {
    let w = b.get(g);
    H(w, "Expected fetch controller: " + g), w.abort(), b.delete(g);
  }
  function Co(g) {
    for (let w of g) {
      let q = So(w),
        E = Vt(q.data);
      x.fetchers.set(w, E);
    }
  }
  function Eo() {
    let g = [],
      w = !1;
    for (let q of G) {
      let E = x.fetchers.get(q);
      H(E, "Expected fetcher: " + q),
        E.state === "loading" && (G.delete(q), g.push(q), (w = !0));
    }
    return Co(g), w;
  }
  function bo(g) {
    let w = [];
    for (let [q, E] of Z)
      if (E < g) {
        let T = x.fetchers.get(q);
        H(T, "Expected fetcher: " + q),
          T.state === "loading" && (_t(q), Z.delete(q), w.push(q));
      }
    return Co(w), w.length > 0;
  }
  function Yh(g, w) {
    let q = x.blockers.get(g) || En;
    return $e.get(g) !== w && $e.set(g, w), q;
  }
  function Io(g) {
    x.blockers.delete(g), $e.delete(g);
  }
  function gl(g, w) {
    let q = x.blockers.get(g) || En;
    H(
      (q.state === "unblocked" && w.state === "blocked") ||
        (q.state === "blocked" && w.state === "blocked") ||
        (q.state === "blocked" && w.state === "proceeding") ||
        (q.state === "blocked" && w.state === "unblocked") ||
        (q.state === "proceeding" && w.state === "unblocked"),
      "Invalid blocker state transition: " + q.state + " -> " + w.state
    );
    let E = new Map(x.blockers);
    E.set(g, w), We({ blockers: E });
  }
  function Lo(g) {
    let { currentLocation: w, nextLocation: q, historyAction: E } = g;
    if ($e.size === 0) return;
    $e.size > 1 && on(!1, "A router only supports one blocker at a time");
    let T = Array.from($e.entries()),
      [V, D] = T[T.length - 1],
      M = x.blockers.get(V);
    if (
      !(M && M.state === "proceeding") &&
      D({ currentLocation: w, nextLocation: q, historyAction: E })
    )
      return V;
  }
  function Vr(g) {
    let w = [];
    return (
      Pe.forEach((q, E) => {
        (!g || g(E)) && (q.cancel(), w.push(E), Pe.delete(E));
      }),
      w
    );
  }
  function Xh(g, w, q) {
    if (((N = g), (j = w), (y = q || null), !A && x.navigation === xi)) {
      A = !0;
      let E = Po(x.location, x.matches);
      E != null && We({ restoreScrollPosition: E });
    }
    return () => {
      (N = null), (j = null), (y = null);
    };
  }
  function Ao(g, w) {
    return (
      (y &&
        y(
          g,
          w.map((E) => zf(E, x.loaderData))
        )) ||
      g.key
    );
  }
  function Zh(g, w) {
    if (N && j) {
      let q = Ao(g, w);
      N[q] = j();
    }
  }
  function Po(g, w) {
    if (N) {
      let q = Ao(g, w),
        E = N[q];
      if (typeof E == "number") return E;
    }
    return null;
  }
  function Gh(g) {
    (i = {}), (o = ha(g, r, void 0, i));
  }
  return (
    (P = {
      get basename() {
        return c;
      },
      get future() {
        return h;
      },
      get state() {
        return x;
      },
      get routes() {
        return a;
      },
      get window() {
        return t;
      },
      initialize: Oh,
      subscribe: Bh,
      enableScrollRestoration: Xh,
      navigate: ko,
      fetch: Wh,
      revalidate: Uh,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: So,
      deleteFetcher: Jh,
      dispose: _h,
      getBlocker: Yh,
      deleteBlocker: Io,
      _internalFetchControllers: b,
      _internalActiveDeferreds: Pe,
      _internalSetRoutes: Gh,
    }),
    P
  );
}
function ip(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function ma(e, t, n, l, r, i, a, o) {
  let c, d;
  if (a) {
    c = [];
    for (let v of t)
      if ((c.push(v), v.route.id === a)) {
        d = v;
        break;
      }
  } else (c = t), (d = t[t.length - 1]);
  let h = po(r || ".", fo(c, i), Tt(e.pathname, n) || e.pathname, o === "path");
  return (
    r == null && ((h.search = e.search), (h.hash = e.hash)),
    (r == null || r === "" || r === ".") &&
      d &&
      d.route.index &&
      !jo(h.search) &&
      (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"),
    l &&
      n !== "/" &&
      (h.pathname = h.pathname === "/" ? n : Lt([n, h.pathname])),
    Es(h)
  );
}
function Qc(e, t, n, l) {
  if (!l || !ip(l)) return { path: n };
  if (l.formMethod && !gp(l.formMethod))
    return { path: n, error: tt(405, { method: l.formMethod }) };
  let r = () => ({ path: n, error: tt(400, { type: "invalid-body" }) }),
    i = l.formMethod || "get",
    a = e ? i.toUpperCase() : i.toLowerCase(),
    o = Ih(n);
  if (l.body !== void 0) {
    if (l.formEncType === "text/plain") {
      if (!mt(a)) return r();
      let m =
        typeof l.body == "string"
          ? l.body
          : l.body instanceof FormData || l.body instanceof URLSearchParams
          ? Array.from(l.body.entries()).reduce((N, y) => {
              let [j, A] = y;
              return (
                "" +
                N +
                j +
                "=" +
                A +
                `
`
              );
            }, "")
          : String(l.body);
      return {
        path: n,
        submission: {
          formMethod: a,
          formAction: o,
          formEncType: l.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (l.formEncType === "application/json") {
      if (!mt(a)) return r();
      try {
        let m = typeof l.body == "string" ? JSON.parse(l.body) : l.body;
        return {
          path: n,
          submission: {
            formMethod: a,
            formAction: o,
            formEncType: l.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return r();
      }
    }
  }
  H(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let c, d;
  if (l.formData) (c = fa(l.formData)), (d = l.formData);
  else if (l.body instanceof FormData) (c = fa(l.body)), (d = l.body);
  else if (l.body instanceof URLSearchParams) (c = l.body), (d = Zc(c));
  else if (l.body == null) (c = new URLSearchParams()), (d = new FormData());
  else
    try {
      (c = new URLSearchParams(l.body)), (d = Zc(c));
    } catch {
      return r();
    }
  let h = {
    formMethod: a,
    formAction: o,
    formEncType: (l && l.formEncType) || "application/x-www-form-urlencoded",
    formData: d,
    json: void 0,
    text: void 0,
  };
  if (mt(h.formMethod)) return { path: n, submission: h };
  let v = cs(n);
  return (
    t && v.search && jo(v.search) && c.append("index", ""),
    (v.search = "?" + c),
    { path: Es(v), submission: h }
  );
}
function ap(e, t) {
  let n = e;
  if (t) {
    let l = e.findIndex((r) => r.route.id === t);
    l >= 0 && (n = e.slice(0, l));
  }
  return n;
}
function Kc(e, t, n, l, r, i, a, o, c, d, h, v, m, N, y, j) {
  let A = j ? (lt(j[1]) ? j[1].error : j[1].data) : void 0,
    f = e.createURL(t.location),
    u = e.createURL(r),
    p = j && lt(j[1]) ? j[0] : void 0,
    k = p ? ap(n, p) : n,
    I = j ? j[1].statusCode : void 0,
    P = a && I && I >= 400,
    x = k.filter((F, R) => {
      let { route: K } = F;
      if (K.lazy) return !0;
      if (K.loader == null) return !1;
      if (i)
        return typeof K.loader != "function" || K.loader.hydrate
          ? !0
          : t.loaderData[K.id] === void 0 &&
              (!t.errors || t.errors[K.id] === void 0);
      if (
        op(t.loaderData, t.matches[R], F) ||
        c.some((je) => je === F.route.id)
      )
        return !0;
      let ue = t.matches[R],
        re = F;
      return Jc(
        F,
        ie(
          {
            currentUrl: f,
            currentParams: ue.params,
            nextUrl: u,
            nextParams: re.params,
          },
          l,
          {
            actionResult: A,
            unstable_actionStatus: I,
            defaultShouldRevalidate: P
              ? !1
              : o ||
                f.pathname + f.search === u.pathname + u.search ||
                f.search !== u.search ||
                bh(ue, re),
          }
        )
      );
    }),
    L = [];
  return (
    v.forEach((F, R) => {
      if (i || !n.some((ct) => ct.route.id === F.routeId) || h.has(R)) return;
      let K = Ks(N, F.path, y);
      if (!K) {
        L.push({
          key: R,
          routeId: F.routeId,
          path: F.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let ue = t.fetchers.get(R),
        re = pa(K, F.path),
        je = !1;
      m.has(R)
        ? (je = !1)
        : d.includes(R)
        ? (je = !0)
        : ue && ue.state !== "idle" && ue.data === void 0
        ? (je = o)
        : (je = Jc(
            re,
            ie(
              {
                currentUrl: f,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: u,
                nextParams: n[n.length - 1].params,
              },
              l,
              {
                actionResult: A,
                unstable_actionStatus: I,
                defaultShouldRevalidate: P ? !1 : o,
              }
            )
          )),
        je &&
          L.push({
            key: R,
            routeId: F.routeId,
            path: F.path,
            matches: K,
            match: re,
            controller: new AbortController(),
          });
    }),
    [x, L]
  );
}
function op(e, t, n) {
  let l = !t || n.route.id !== t.route.id,
    r = e[n.route.id] === void 0;
  return l || r;
}
function bh(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Jc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Yc(e, t, n) {
  if (!e.lazy) return;
  let l = await e.lazy();
  if (!e.lazy) return;
  let r = n[e.id];
  H(r, "No route found in manifest");
  let i = {};
  for (let a in l) {
    let c = r[a] !== void 0 && a !== "hasErrorBoundary";
    on(
      !c,
      'Route "' +
        r.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !c && !Pf.has(a) && (i[a] = l[a]);
  }
  Object.assign(r, i), Object.assign(r, ie({}, t(r), { lazy: void 0 }));
}
function cp(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function dp(e, t, n, l, r, i, a, o) {
  let c = l.reduce((v, m) => v.add(m.route.id), new Set()),
    d = new Set(),
    h = await e({
      matches: r.map((v) => {
        let m = c.has(v.route.id);
        return ie({}, v, {
          shouldLoad: m,
          resolve: (y) => (
            d.add(v.route.id),
            m
              ? up(t, n, v, i, a, y, o)
              : Promise.resolve({ type: ne.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: r[0].params,
      context: o,
    });
  return (
    r.forEach((v) =>
      H(
        d.has(v.route.id),
        '`match.resolve()` was not called for route id "' +
          v.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    h.filter((v, m) => c.has(r[m].route.id))
  );
}
async function up(e, t, n, l, r, i, a) {
  let o,
    c,
    d = (h) => {
      let v,
        m = new Promise((j, A) => (v = A));
      (c = () => v()), t.signal.addEventListener("abort", c);
      let N = (j) =>
          typeof h != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : h(
                { request: t, params: n.params, context: a },
                ...(j !== void 0 ? [j] : [])
              ),
        y;
      return (
        i
          ? (y = i((j) => N(j)))
          : (y = (async () => {
              try {
                return { type: "data", result: await N() };
              } catch (j) {
                return { type: "error", result: j };
              }
            })()),
        Promise.race([y, m])
      );
    };
  try {
    let h = n.route[e];
    if (n.route.lazy)
      if (h) {
        let v,
          [m] = await Promise.all([
            d(h).catch((N) => {
              v = N;
            }),
            Yc(n.route, r, l),
          ]);
        if (v !== void 0) throw v;
        o = m;
      } else if ((await Yc(n.route, r, l), (h = n.route[e]), h)) o = await d(h);
      else if (e === "action") {
        let v = new URL(t.url),
          m = v.pathname + v.search;
        throw tt(405, { method: t.method, pathname: m, routeId: n.route.id });
      } else return { type: ne.data, result: void 0 };
    else if (h) o = await d(h);
    else {
      let v = new URL(t.url),
        m = v.pathname + v.search;
      throw tt(404, { pathname: m });
    }
    H(
      o.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (h) {
    return { type: ne.error, result: h };
  } finally {
    c && t.signal.removeEventListener("abort", c);
  }
  return o;
}
async function hp(e) {
  let { result: t, type: n, status: l } = e;
  if (Lh(t)) {
    let a;
    try {
      let o = t.headers.get("Content-Type");
      o && /\bapplication\/json\b/.test(o)
        ? t.body == null
          ? (a = null)
          : (a = await t.json())
        : (a = await t.text());
    } catch (o) {
      return { type: ne.error, error: o };
    }
    return n === ne.error
      ? {
          type: ne.error,
          error: new xo(t.status, t.statusText, a),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: ne.data, data: a, statusCode: t.status, headers: t.headers };
  }
  if (n === ne.error)
    return { type: ne.error, error: t, statusCode: go(t) ? t.status : l };
  if (xp(t)) {
    var r, i;
    return {
      type: ne.deferred,
      deferredData: t,
      statusCode: (r = t.init) == null ? void 0 : r.status,
      headers:
        ((i = t.init) == null ? void 0 : i.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: ne.data, data: t, statusCode: l };
}
function vp(e, t, n, l, r, i) {
  let a = e.headers.get("Location");
  if (
    (H(
      a,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !wo.test(a))
  ) {
    let o = l.slice(0, l.findIndex((c) => c.route.id === n) + 1);
    (a = ma(new URL(t.url), o, r, !0, a, i)), e.headers.set("Location", a);
  }
  return e;
}
function Xc(e, t, n) {
  if (wo.test(e)) {
    let l = e,
      r = l.startsWith("//") ? new URL(t.protocol + l) : new URL(l),
      i = Tt(r.pathname, n) != null;
    if (r.origin === t.origin && i) return r.pathname + r.search + r.hash;
  }
  return e;
}
function zs(e, t, n, l) {
  let r = e.createURL(Ih(t)).toString(),
    i = { signal: n };
  if (l && mt(l.formMethod)) {
    let { formMethod: a, formEncType: o } = l;
    (i.method = a.toUpperCase()),
      o === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": o })),
          (i.body = JSON.stringify(l.json)))
        : o === "text/plain"
        ? (i.body = l.text)
        : o === "application/x-www-form-urlencoded" && l.formData
        ? (i.body = fa(l.formData))
        : (i.body = l.formData);
  }
  return new Request(r, i);
}
function fa(e) {
  let t = new URLSearchParams();
  for (let [n, l] of e.entries())
    t.append(n, typeof l == "string" ? l : l.name);
  return t;
}
function Zc(e) {
  let t = new FormData();
  for (let [n, l] of e.entries()) t.append(n, l);
  return t;
}
function mp(e, t, n, l, r, i) {
  let a = {},
    o = null,
    c,
    d = !1,
    h = {},
    v = l && lt(l[1]) ? l[1].error : void 0;
  return (
    n.forEach((m, N) => {
      let y = t[N].route.id;
      if (
        (H(!ws(m), "Cannot handle redirect results in processLoaderData"),
        lt(m))
      ) {
        let j = m.error;
        v !== void 0 && ((j = v), (v = void 0)), (o = o || {});
        {
          let A = Hn(e, y);
          o[A.route.id] == null && (o[A.route.id] = j);
        }
        (a[y] = void 0),
          d || ((d = !0), (c = go(m.error) ? m.error.status : 500)),
          m.headers && (h[y] = m.headers);
      } else
        gs(m)
          ? (r.set(y, m.deferredData),
            (a[y] = m.deferredData.data),
            m.statusCode != null &&
              m.statusCode !== 200 &&
              !d &&
              (c = m.statusCode),
            m.headers && (h[y] = m.headers))
          : ((a[y] = m.data),
            m.statusCode && m.statusCode !== 200 && !d && (c = m.statusCode),
            m.headers && (h[y] = m.headers));
    }),
    v !== void 0 && l && ((o = { [l[0]]: v }), (a[l[0]] = void 0)),
    { loaderData: a, errors: o, statusCode: c || 200, loaderHeaders: h }
  );
}
function Gc(e, t, n, l, r, i, a, o) {
  let { loaderData: c, errors: d } = mp(t, n, l, r, o);
  for (let h = 0; h < i.length; h++) {
    let { key: v, match: m, controller: N } = i[h];
    H(
      a !== void 0 && a[h] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let y = a[h];
    if (!(N && N.signal.aborted))
      if (lt(y)) {
        let j = Hn(e.matches, m == null ? void 0 : m.route.id);
        (d && d[j.route.id]) || (d = ie({}, d, { [j.route.id]: y.error })),
          e.fetchers.delete(v);
      } else if (ws(y)) H(!1, "Unhandled fetcher revalidation redirect");
      else if (gs(y)) H(!1, "Unhandled fetcher deferred data");
      else {
        let j = Vt(y.data);
        e.fetchers.set(v, j);
      }
  }
  return { loaderData: c, errors: d };
}
function $c(e, t, n, l) {
  let r = ie({}, t);
  for (let i of n) {
    let a = i.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (r[a] = t[a])
        : e[a] !== void 0 && i.route.loader && (r[a] = e[a]),
      l && l.hasOwnProperty(a))
    )
      break;
  }
  return r;
}
function ed(e) {
  return e
    ? lt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Hn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((l) => l.route.id === t) + 1) : [...e])
      .reverse()
      .find((l) => l.route.hasErrorBoundary === !0) || e[0]
  );
}
function td(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function tt(e, t) {
  let { pathname: n, routeId: l, method: r, type: i } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    o = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        r && n && l
          ? (o =
              "You made a " +
              r +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + l + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
          ? (o = "defer() is not supported in actions")
          : i === "invalid-body" && (o = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (o = 'Route "' + l + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (o = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        r && n && l
          ? (o =
              "You made a " +
              r.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + l + '", ') +
              "so there is no way to handle the request.")
          : r && (o = 'Invalid request method "' + r.toUpperCase() + '"')),
    new xo(e || 500, a, new Error(o), !0)
  );
}
function sd(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (ws(n)) return { result: n, idx: t };
  }
}
function Ih(e) {
  let t = typeof e == "string" ? cs(e) : e;
  return Es(ie({}, t, { hash: "" }));
}
function fp(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function pp(e) {
  return Lh(e.result) && tp.has(e.result.status);
}
function gs(e) {
  return e.type === ne.deferred;
}
function lt(e) {
  return e.type === ne.error;
}
function ws(e) {
  return (e && e.type) === ne.redirect;
}
function xp(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Lh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function gp(e) {
  return ep.has(e.toLowerCase());
}
function mt(e) {
  return Gf.has(e.toLowerCase());
}
async function nd(e, t, n, l, r, i) {
  for (let a = 0; a < n.length; a++) {
    let o = n[a],
      c = t[a];
    if (!c) continue;
    let d = e.find((v) => v.route.id === c.route.id),
      h = d != null && !bh(d, c) && (i && i[c.route.id]) !== void 0;
    if (gs(o) && (r || h)) {
      let v = l[a];
      H(v, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Ah(o, v, r).then((m) => {
          m && (n[a] = m || n[a]);
        });
    }
  }
}
async function Ah(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ne.data, data: e.deferredData.unwrappedData };
      } catch (r) {
        return { type: ne.error, error: r };
      }
    return { type: ne.data, data: e.deferredData.data };
  }
}
function jo(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function pa(e, t) {
  let n = typeof t == "string" ? cs(t).search : t.search;
  if (e[e.length - 1].route.index && jo(n || "")) return e[e.length - 1];
  let l = Sh(e);
  return l[l.length - 1];
}
function ld(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: l,
    text: r,
    formData: i,
    json: a,
  } = e;
  if (!(!t || !n || !l)) {
    if (r != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: l,
        formData: void 0,
        json: void 0,
        text: r,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: l,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: l,
        formData: void 0,
        json: a,
        text: void 0,
      };
  }
}
function gi(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function wp(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function bn(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function jp(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Vt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function yp(e, t) {
  try {
    let n = e.sessionStorage.getItem(Eh);
    if (n) {
      let l = JSON.parse(n);
      for (let [r, i] of Object.entries(l || {}))
        i && Array.isArray(i) && t.set(r, new Set(i || []));
    }
  } catch {}
}
function Np(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [l, r] of t) n[l] = [...r];
    try {
      e.sessionStorage.setItem(Eh, JSON.stringify(n));
    } catch (l) {
      on(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + l + ")."
      );
    }
  }
}
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yr() {
  return (
    (yr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
          }
          return e;
        }),
    yr.apply(this, arguments)
  );
}
const ml = S.createContext(null),
  yo = S.createContext(null),
  ds = S.createContext(null),
  No = S.createContext(null),
  us = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ph = S.createContext(null);
function kp(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  fl() || H(!1);
  let { basename: l, navigator: r } = S.useContext(ds),
    { hash: i, pathname: a, search: o } = Or(e, { relative: n }),
    c = a;
  return (
    l !== "/" && (c = a === "/" ? l : Lt([l, a])),
    r.createHref({ pathname: c, search: o, hash: i })
  );
}
function fl() {
  return S.useContext(No) != null;
}
function pl() {
  return fl() || H(!1), S.useContext(No).location;
}
function Rh(e) {
  S.useContext(ds).static || S.useLayoutEffect(e);
}
function qp() {
  let { isDataRoute: e } = S.useContext(us);
  return e ? Dp() : Sp();
}
function Sp() {
  fl() || H(!1);
  let e = S.useContext(ml),
    { basename: t, future: n, navigator: l } = S.useContext(ds),
    { matches: r } = S.useContext(us),
    { pathname: i } = pl(),
    a = JSON.stringify(fo(r, n.v7_relativeSplatPath)),
    o = S.useRef(!1);
  return (
    Rh(() => {
      o.current = !0;
    }),
    S.useCallback(
      function (d, h) {
        if ((h === void 0 && (h = {}), !o.current)) return;
        if (typeof d == "number") {
          l.go(d);
          return;
        }
        let v = po(d, JSON.parse(a), i, h.relative === "path");
        e == null &&
          t !== "/" &&
          (v.pathname = v.pathname === "/" ? t : Lt([t, v.pathname])),
          (h.replace ? l.replace : l.push)(v, h.state, h);
      },
      [t, l, a, i, e]
    )
  );
}
const Cp = S.createContext(null);
function Ep(e) {
  let t = S.useContext(us).outlet;
  return t && S.createElement(Cp.Provider, { value: e }, t);
}
function Or(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: l } = S.useContext(ds),
    { matches: r } = S.useContext(us),
    { pathname: i } = pl(),
    a = JSON.stringify(fo(r, l.v7_relativeSplatPath));
  return S.useMemo(() => po(e, JSON.parse(a), i, n === "path"), [e, a, i, n]);
}
function bp(e, t, n, l) {
  fl() || H(!1);
  let { navigator: r } = S.useContext(ds),
    { matches: i } = S.useContext(us),
    a = i[i.length - 1],
    o = a ? a.params : {};
  a && a.pathname;
  let c = a ? a.pathnameBase : "/";
  a && a.route;
  let d = pl(),
    h;
  h = d;
  let v = h.pathname || "/",
    m = v;
  if (c !== "/") {
    let j = c.replace(/^\//, "").split("/");
    m = "/" + v.replace(/^\//, "").split("/").slice(j.length).join("/");
  }
  let N = Ks(e, { pathname: m });
  return Rp(
    N &&
      N.map((j) =>
        Object.assign({}, j, {
          params: Object.assign({}, o, j.params),
          pathname: Lt([
            c,
            r.encodeLocation
              ? r.encodeLocation(j.pathname).pathname
              : j.pathname,
          ]),
          pathnameBase:
            j.pathnameBase === "/"
              ? c
              : Lt([
                  c,
                  r.encodeLocation
                    ? r.encodeLocation(j.pathnameBase).pathname
                    : j.pathnameBase,
                ]),
        })
      ),
    i,
    n,
    l
  );
}
function Ip() {
  let e = Fp(),
    t = go(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: r }, n) : null,
    null
  );
}
const Lp = S.createElement(Ip, null);
class Ap extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          us.Provider,
          { value: this.props.routeContext },
          S.createElement(Ph.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Pp(e) {
  let { routeContext: t, match: n, children: l } = e,
    r = S.useContext(ml);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(us.Provider, { value: t }, l)
  );
}
function Rp(e, t, n, l) {
  var r;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    l === void 0 && (l = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let a = e,
    o = (r = n) == null ? void 0 : r.errors;
  if (o != null) {
    let h = a.findIndex(
      (v) => v.route.id && (o == null ? void 0 : o[v.route.id]) !== void 0
    );
    h >= 0 || H(!1), (a = a.slice(0, Math.min(a.length, h + 1)));
  }
  let c = !1,
    d = -1;
  if (n && l && l.v7_partialHydration)
    for (let h = 0; h < a.length; h++) {
      let v = a[h];
      if (
        ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (d = h),
        v.route.id)
      ) {
        let { loaderData: m, errors: N } = n,
          y =
            v.route.loader &&
            m[v.route.id] === void 0 &&
            (!N || N[v.route.id] === void 0);
        if (v.route.lazy || y) {
          (c = !0), d >= 0 ? (a = a.slice(0, d + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((h, v, m) => {
    let N,
      y = !1,
      j = null,
      A = null;
    n &&
      ((N = o && v.route.id ? o[v.route.id] : void 0),
      (j = v.route.errorElement || Lp),
      c &&
        (d < 0 && m === 0
          ? ((y = !0), (A = null))
          : d === m &&
            ((y = !0), (A = v.route.hydrateFallbackElement || null))));
    let f = t.concat(a.slice(0, m + 1)),
      u = () => {
        let p;
        return (
          N
            ? (p = j)
            : y
            ? (p = A)
            : v.route.Component
            ? (p = S.createElement(v.route.Component, null))
            : v.route.element
            ? (p = v.route.element)
            : (p = h),
          S.createElement(Pp, {
            match: v,
            routeContext: { outlet: h, matches: f, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (v.route.ErrorBoundary || v.route.errorElement || m === 0)
      ? S.createElement(Ap, {
          location: n.location,
          revalidation: n.revalidation,
          component: j,
          error: N,
          children: u(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : u();
  }, null);
}
var zh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(zh || {}),
  Nr = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Nr || {});
function zp(e) {
  let t = S.useContext(ml);
  return t || H(!1), t;
}
function Tp(e) {
  let t = S.useContext(yo);
  return t || H(!1), t;
}
function Mp(e) {
  let t = S.useContext(us);
  return t || H(!1), t;
}
function Th(e) {
  let t = Mp(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || H(!1), n.route.id;
}
function Fp() {
  var e;
  let t = S.useContext(Ph),
    n = Tp(Nr.UseRouteError),
    l = Th(Nr.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[l];
}
function Dp() {
  let { router: e } = zp(zh.UseNavigateStable),
    t = Th(Nr.UseNavigateStable),
    n = S.useRef(!1);
  return (
    Rh(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (r, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof r == "number"
              ? e.navigate(r)
              : e.navigate(r, yr({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function Op(e) {
  return Ep(e.context);
}
function Qe(e) {
  H(!1);
}
function _p(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: l,
    navigationType: r = ve.Pop,
    navigator: i,
    static: a = !1,
    future: o,
  } = e;
  fl() && H(!1);
  let c = t.replace(/^\/*/, "/"),
    d = S.useMemo(
      () => ({
        basename: c,
        navigator: i,
        static: a,
        future: yr({ v7_relativeSplatPath: !1 }, o),
      }),
      [c, o, i, a]
    );
  typeof l == "string" && (l = cs(l));
  let {
      pathname: h = "/",
      search: v = "",
      hash: m = "",
      state: N = null,
      key: y = "default",
    } = l,
    j = S.useMemo(() => {
      let A = Tt(h, c);
      return A == null
        ? null
        : {
            location: { pathname: A, search: v, hash: m, state: N, key: y },
            navigationType: r,
          };
    }, [c, h, v, m, N, y, r]);
  return j == null
    ? null
    : S.createElement(
        ds.Provider,
        { value: d },
        S.createElement(No.Provider, { children: n, value: j })
      );
}
new Promise(() => {});
function xa(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (l, r) => {
      if (!S.isValidElement(l)) return;
      let i = [...t, r];
      if (l.type === S.Fragment) {
        n.push.apply(n, xa(l.props.children, i));
        return;
      }
      l.type !== Qe && H(!1), !l.props.index || !l.props.children || H(!1);
      let a = {
        id: l.props.id || i.join("-"),
        caseSensitive: l.props.caseSensitive,
        element: l.props.element,
        Component: l.props.Component,
        index: l.props.index,
        path: l.props.path,
        loader: l.props.loader,
        action: l.props.action,
        errorElement: l.props.errorElement,
        ErrorBoundary: l.props.ErrorBoundary,
        hasErrorBoundary:
          l.props.ErrorBoundary != null || l.props.errorElement != null,
        shouldRevalidate: l.props.shouldRevalidate,
        handle: l.props.handle,
        lazy: l.props.lazy,
      };
      l.props.children && (a.children = xa(l.props.children, i)), n.push(a);
    }),
    n
  );
}
function Bp(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: S.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: S.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: S.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function cn() {
  return (
    (cn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
          }
          return e;
        }),
    cn.apply(this, arguments)
  );
}
function Mh(e, t) {
  if (e == null) return {};
  var n = {},
    l = Object.keys(e),
    r,
    i;
  for (i = 0; i < l.length; i++)
    (r = l[i]), !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Up(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Vp(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Up(e);
}
const Hp = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Wp = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  Qp = "6";
try {
  window.__reactRouterVersion = Qp;
} catch {}
function Kp(e, t) {
  return rp({
    basename: void 0,
    future: cn({}, void 0, { v7_prependBasename: !0 }),
    history: If({ window: void 0 }),
    hydrationData: Jp(),
    routes: e,
    mapRouteProperties: Bp,
    unstable_dataStrategy: void 0,
    window: void 0,
  }).initialize();
}
function Jp() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = cn({}, t, { errors: Yp(t.errors) })), t;
}
function Yp(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [l, r] of t)
    if (r && r.__type === "RouteErrorResponse")
      n[l] = new xo(r.status, r.statusText, r.data, r.internal === !0);
    else if (r && r.__type === "Error") {
      if (r.__subType) {
        let i = window[r.__subType];
        if (typeof i == "function")
          try {
            let a = new i(r.message);
            (a.stack = ""), (n[l] = a);
          } catch {}
      }
      if (n[l] == null) {
        let i = new Error(r.message);
        (i.stack = ""), (n[l] = i);
      }
    } else n[l] = r;
  return n;
}
const Fh = S.createContext({ isTransitioning: !1 }),
  Xp = S.createContext(new Map()),
  Zp = "startTransition",
  rd = fv[Zp],
  Gp = "flushSync",
  id = bf[Gp];
function $p(e) {
  rd ? rd(e) : e();
}
function In(e) {
  id ? id(e) : e();
}
class e1 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (l) => {
          this.status === "pending" && ((this.status = "resolved"), t(l));
        }),
          (this.reject = (l) => {
            this.status === "pending" && ((this.status = "rejected"), n(l));
          });
      }));
  }
}
function t1(e) {
  let { fallbackElement: t, router: n, future: l } = e,
    [r, i] = S.useState(n.state),
    [a, o] = S.useState(),
    [c, d] = S.useState({ isTransitioning: !1 }),
    [h, v] = S.useState(),
    [m, N] = S.useState(),
    [y, j] = S.useState(),
    A = S.useRef(new Map()),
    { v7_startTransition: f } = l || {},
    u = S.useCallback(
      (x) => {
        f ? $p(x) : x();
      },
      [f]
    ),
    p = S.useCallback(
      (x, L) => {
        let {
          deletedFetchers: F,
          unstable_flushSync: R,
          unstable_viewTransitionOpts: K,
        } = L;
        F.forEach((re) => A.current.delete(re)),
          x.fetchers.forEach((re, je) => {
            re.data !== void 0 && A.current.set(je, re.data);
          });
        let ue =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!K || ue) {
          R ? In(() => i(x)) : u(() => i(x));
          return;
        }
        if (R) {
          In(() => {
            m && (h && h.resolve(), m.skipTransition()),
              d({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: K.currentLocation,
                nextLocation: K.nextLocation,
              });
          });
          let re = n.window.document.startViewTransition(() => {
            In(() => i(x));
          });
          re.finished.finally(() => {
            In(() => {
              v(void 0), N(void 0), o(void 0), d({ isTransitioning: !1 });
            });
          }),
            In(() => N(re));
          return;
        }
        m
          ? (h && h.resolve(),
            m.skipTransition(),
            j({
              state: x,
              currentLocation: K.currentLocation,
              nextLocation: K.nextLocation,
            }))
          : (o(x),
            d({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: K.currentLocation,
              nextLocation: K.nextLocation,
            }));
      },
      [n.window, m, h, A, u]
    );
  S.useLayoutEffect(() => n.subscribe(p), [n, p]),
    S.useEffect(() => {
      c.isTransitioning && !c.flushSync && v(new e1());
    }, [c]),
    S.useEffect(() => {
      if (h && a && n.window) {
        let x = a,
          L = h.promise,
          F = n.window.document.startViewTransition(async () => {
            u(() => i(x)), await L;
          });
        F.finished.finally(() => {
          v(void 0), N(void 0), o(void 0), d({ isTransitioning: !1 });
        }),
          N(F);
      }
    }, [u, a, h, n.window]),
    S.useEffect(() => {
      h && a && r.location.key === a.location.key && h.resolve();
    }, [h, m, r.location, a]),
    S.useEffect(() => {
      !c.isTransitioning &&
        y &&
        (o(y.state),
        d({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        j(void 0));
    }, [c.isTransitioning, y]),
    S.useEffect(() => {}, []);
  let k = S.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (x) => n.navigate(x),
        push: (x, L, F) =>
          n.navigate(x, {
            state: L,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
        replace: (x, L, F) =>
          n.navigate(x, {
            replace: !0,
            state: L,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
      }),
      [n]
    ),
    I = n.basename || "/",
    P = S.useMemo(
      () => ({ router: n, navigator: k, static: !1, basename: I }),
      [n, k, I]
    );
  return S.createElement(
    S.Fragment,
    null,
    S.createElement(
      ml.Provider,
      { value: P },
      S.createElement(
        yo.Provider,
        { value: r },
        S.createElement(
          Xp.Provider,
          { value: A.current },
          S.createElement(
            Fh.Provider,
            { value: c },
            S.createElement(
              _p,
              {
                basename: I,
                location: r.location,
                navigationType: r.historyAction,
                navigator: k,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              r.initialized || n.future.v7_partialHydration
                ? S.createElement(s1, {
                    routes: n.routes,
                    future: n.future,
                    state: r,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function s1(e) {
  let { routes: t, future: n, state: l } = e;
  return bp(t, void 0, l, n);
}
const n1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  l1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Le = S.forwardRef(function (t, n) {
    let {
        onClick: l,
        relative: r,
        reloadDocument: i,
        replace: a,
        state: o,
        target: c,
        to: d,
        preventScrollReset: h,
        unstable_viewTransition: v,
      } = t,
      m = Mh(t, Hp),
      { basename: N } = S.useContext(ds),
      y,
      j = !1;
    if (typeof d == "string" && l1.test(d) && ((y = d), n1))
      try {
        let p = new URL(window.location.href),
          k = d.startsWith("//") ? new URL(p.protocol + d) : new URL(d),
          I = Tt(k.pathname, N);
        k.origin === p.origin && I != null
          ? (d = I + k.search + k.hash)
          : (j = !0);
      } catch {}
    let A = kp(d, { relative: r }),
      f = i1(d, {
        replace: a,
        state: o,
        target: c,
        preventScrollReset: h,
        relative: r,
        unstable_viewTransition: v,
      });
    function u(p) {
      l && l(p), p.defaultPrevented || f(p);
    }
    return S.createElement(
      "a",
      cn({}, m, { href: y || A, onClick: j || i ? l : u, ref: n, target: c })
    );
  }),
  Ln = S.forwardRef(function (t, n) {
    let {
        "aria-current": l = "page",
        caseSensitive: r = !1,
        className: i = "",
        end: a = !1,
        style: o,
        to: c,
        unstable_viewTransition: d,
        children: h,
      } = t,
      v = Mh(t, Wp),
      m = Or(c, { relative: v.relative }),
      N = pl(),
      y = S.useContext(yo),
      { navigator: j, basename: A } = S.useContext(ds),
      f = y != null && a1(m) && d === !0,
      u = j.encodeLocation ? j.encodeLocation(m).pathname : m.pathname,
      p = N.pathname,
      k =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    r ||
      ((p = p.toLowerCase()),
      (k = k ? k.toLowerCase() : null),
      (u = u.toLowerCase())),
      k && A && (k = Tt(k, A) || k);
    const I = u !== "/" && u.endsWith("/") ? u.length - 1 : u.length;
    let P = p === u || (!a && p.startsWith(u) && p.charAt(I) === "/"),
      x =
        k != null &&
        (k === u || (!a && k.startsWith(u) && k.charAt(u.length) === "/")),
      L = { isActive: P, isPending: x, isTransitioning: f },
      F = P ? l : void 0,
      R;
    typeof i == "function"
      ? (R = i(L))
      : (R = [
          i,
          P ? "active" : null,
          x ? "pending" : null,
          f ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let K = typeof o == "function" ? o(L) : o;
    return S.createElement(
      Le,
      cn({}, v, {
        "aria-current": F,
        className: R,
        ref: n,
        style: K,
        to: c,
        unstable_viewTransition: d,
      }),
      typeof h == "function" ? h(L) : h
    );
  });
var ga;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ga || (ga = {}));
var ad;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ad || (ad = {}));
function r1(e) {
  let t = S.useContext(ml);
  return t || H(!1), t;
}
function i1(e, t) {
  let {
      target: n,
      replace: l,
      state: r,
      preventScrollReset: i,
      relative: a,
      unstable_viewTransition: o,
    } = t === void 0 ? {} : t,
    c = qp(),
    d = pl(),
    h = Or(e, { relative: a });
  return S.useCallback(
    (v) => {
      if (Vp(v, n)) {
        v.preventDefault();
        let m = l !== void 0 ? l : Es(d) === Es(h);
        c(e, {
          replace: m,
          state: r,
          preventScrollReset: i,
          relative: a,
          unstable_viewTransition: o,
        });
      }
    },
    [d, c, h, l, r, n, e, i, a, o]
  );
}
function a1(e, t) {
  t === void 0 && (t = {});
  let n = S.useContext(Fh);
  n == null && H(!1);
  let { basename: l } = r1(ga.useViewTransitionState),
    r = Or(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = Tt(n.currentLocation.pathname, l) || n.currentLocation.pathname,
    a = Tt(n.nextLocation.pathname, l) || n.nextLocation.pathname;
  return va(r.pathname, a) != null || va(r.pathname, i) != null;
}
const Dh = "/website/assets/Avator-DH6d9pp6.jpg",
  o1 = ({ onClose: e }) =>
    s.jsx(s.Fragment, {
      children: s.jsxs("div", {
        className: "seanbot svelte-18sdb5t",
        children: [
          s.jsxs("div", {
            className: "header svelte-18sdb5t",
            children: [
              s.jsx("div", {
                className: "avatar svelte-18sdb5t",
                children: s.jsx("img", {
                  src: Dh,
                  alt: "Luckie Bot",
                  className: "svelte-18sdb5t",
                }),
              }),
              s.jsxs("div", {
                className: "header-content svelte-18sdb5t",
                children: [
                  s.jsx("div", {
                    className: "header-title svelte-18sdb5t",
                    children: "Luckie Bot",
                  }),
                  s.jsx("div", {
                    className: "header-subtitle",
                    children: "Ask me a question",
                  }),
                ],
              }),
              s.jsx("button", {
                className: "close svelte-18sdb5t",
                id: "close-chat",
                onClick: e,
                children: s.jsx("svg", {
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  fill: "none",
                  children: s.jsx("path", {
                    d: "M7.41425 6.00025L11.7072 1.70725C12.0982 1.31625 12.0982 0.68425 11.7072 0.29325C11.3162 -0.09775 10.6843 -0.09775 10.2933 0.29325L6.00025 4.58625L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68425 -0.09775 1.31625 0.29325 1.70725L4.58625 6.00025L0.29325 10.2933C-0.09775 10.6843 -0.09775 11.3162 0.29325 11.7072C0.48825 11.9022 0.74425 12.0002 1.00025 12.0002C1.25625 12.0002 1.51225 11.9022 1.70725 11.7072L6.00025 7.41425L10.2933 11.7072C10.4883 11.9022 10.7442 12.0002 11.0002 12.0002C11.2562 12.0002 11.5122 11.9022 11.7072 11.7072C12.0982 11.3162 12.0982 10.6843 11.7072 10.2933L7.41425 6.00025Z",
                    className: "svelte-18sdb5t",
                  }),
                }),
              }),
            ],
          }),
          s.jsxs("div", {
            className: "inner svelte-18sdb5t",
            children: [
              s.jsx("div", {
                className: "bubble-holder svelte-1ffruqs",
                children: s.jsx("div", {
                  className: "bubble agent svelte-1ffruqs",
                  children: "Hi!",
                }),
              }),
              s.jsx("div", {
                className: "bubble-holder svelte-1ffruqs",
                children: s.jsx("div", {
                  className: "bubble agent svelte-1ffruqs",
                  children:
                    "I`m Luckie Bot. I`m here to help you with any questions you might have about Luckie`s work.",
                }),
              }),
              s.jsx("div", {
                className: "bubble-holder svelte-1ffruqs",
                children: s.jsx("div", {
                  className: "bubble agent svelte-1ffruqs",
                  children: "How can I help you today?",
                }),
              }),
              s.jsxs("div", {
                className: "button-holder",
                children: [
                  s.jsx("div", {
                    className: "button-holder svelte-1ffruqs",
                    children: s.jsx("button", {
                      className: "svelte-1ffruqs",
                      children: "Looking for your old portfolio",
                    }),
                  }),
                  s.jsxs("div", {
                    className: "button-holder svelte-1ffruqs",
                    children: [
                      s.jsx("button", {
                        className: "svelte-1ffruqs",
                        id: "Hello",
                        children: "Just saying hello!",
                      }),
                      s.jsx("div", {
                        className: "button-holder svelte-1ffruqs",
                        children: s.jsx("button", {
                          className: "svelte-1ffruqs",
                          id: "mentorship",
                          children: "Interested in mentorship",
                        }),
                      }),
                      s.jsx("div", {
                        className: "button-holder svelte-1ffruqs",
                        children: s.jsx("button", {
                          className: "svelte-1ffruqs",
                          id: "hire",
                          children: "We`d like to hire you",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  c1 = () => {
    const [e, t] = S.useState(!1),
      n = () => {
        t(!0);
      },
      l = () => {
        t(!1);
      };
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx("header", {
          className: "svelte-1wikuy2",
          children: s.jsx("nav", {
            className: "svelte-1wikuy2",
            children: s.jsxs("ul", {
              className: "main svelte-1wikuy2 blur scrolled",
              children: [
                s.jsx("li", {
                  className: "svelte-1wikuy2",
                  children: s.jsxs(Ln, {
                    to: "/",
                    className: "main-link svelte-1wikuy2 ",
                    children: [
                      "Work ",
                      s.jsx("span", {
                        className: "slash svelte-1wikuy2",
                        children: "/",
                      }),
                    ],
                  }),
                }),
                s.jsx("li", {
                  className: "svelte-1wikuy2",
                  children: s.jsx(Ln, {
                    to: "about",
                    className: "main-link svelte-1wikuy2",
                    children: "About",
                  }),
                }),
                s.jsx("li", {
                  className: "svelte-1wikuy2",
                  children: s.jsx(Ln, {
                    to: "Projects",
                    className: "main-link svelte-1wikuy2",
                    children: "Projects",
                  }),
                }),
                s.jsx("li", {
                  className: "svelte-1wikuy2",
                  children: s.jsx(Ln, {
                    to: "notes",
                    className: "main-link svelte-1wikuy2",
                    children: "Notes",
                  }),
                }),
                s.jsx("li", {
                  className: "svelte-1wikuy2",
                  children: s.jsx("button", {
                    className: "svelte-1wikuy2",
                    onClick: n,
                    children: "Contact",
                  }),
                }),
                s.jsx("li", {
                  className: "svelte-1wikuy2",
                  children: s.jsx(Ln, {
                    to: "Login",
                    className: "main-link svelte-1wikuy2",
                    children: "Login",
                  }),
                }),
              ],
            }),
          }),
        }),
        e && s.jsx(o1, { onClose: l }),
      ],
    });
  },
  d1 = () =>
    s.jsx("div", {
      className: "Outer",
      children: s.jsxs("div", {
        className: "ring2",
        children: [
          s.jsx("i", { style: { zIndex: "100", "--clr": "#00ff0a" } }),
          s.jsx("i", { style: { zIndex: "1", "--clr": "#ff0057" } }),
          s.jsx("i", { style: { zIndex: "1", "--clr": "#fffd44" } }),
        ],
      }),
    }),
  u1 = () =>
    s.jsxs(s.Fragment, {
      children: [s.jsx(c1, {}), s.jsx(d1, {}), s.jsx(Op, {})],
    }),
  _r = () =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsxs("footer", {
          className: "grid svelte-gfa3ns",
          children: [
            s.jsxs("div", {
              className: "fun svelte-gfa3ns",
              children: [
                s.jsx("div", {
                  className: "music svelte-gfa3ns",
                  children: s.jsxs("div", {
                    style: {
                      display: "contents",
                      "--h": "172",
                      "--s": "95 %",
                      "--l": "18%",
                    },
                    children: [
                      s.jsx("div", {
                        className: "icon svelte-1ybcdb5",
                        children: s.jsx("div", {
                          style: {
                            display: "contents",
                            "--fill": "var(--color-primary-accent)",
                          },
                          children: s.jsx("svg", {
                            width: "41",
                            height: "40",
                            viewBox: "0 0 41 40",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "svelte-13vxf5t",
                            children: s.jsx("path", {
                              d: "M20.5013 0.0664062C9.48964 0.0664062 0.5625 8.99331 0.5625 20.005C0.5625 31.0171 9.48964 39.9433 20.5013 39.9433C31.5142 39.9433 40.4404 31.0171 40.4404 20.005C40.4404 8.99403 31.5142 0.0673586 20.5011 0.0673586L20.5013 0.0664062V0.0664062ZM29.6451 28.8236C29.56 28.963 29.4483 29.0842 29.3163 29.1804C29.1843 29.2766 29.0346 29.3458 28.8758 29.3841C28.717 29.4223 28.5522 29.4289 28.3909 29.4034C28.2296 29.3779 28.0748 29.3208 27.9356 29.2355C23.2542 26.3759 17.3608 25.7283 10.4204 27.314C10.099 27.3871 9.76174 27.3296 9.48275 27.1541C9.20375 26.9787 9.00584 26.6996 8.9325 26.3783C8.89597 26.2192 8.89119 26.0545 8.91842 25.8935C8.94565 25.7326 9.00436 25.5786 9.09118 25.4404C9.17801 25.3021 9.29126 25.1824 9.42443 25.088C9.5576 24.9936 9.70808 24.9264 9.86726 24.8902C17.4625 23.1543 23.9775 23.9021 29.2332 27.114C29.8189 27.4736 30.0046 28.2378 29.6451 28.8236V28.8236ZM32.0856 23.3938C31.6356 24.1259 30.6785 24.3569 29.9475 23.9069C24.588 20.6119 16.4182 19.6578 10.0789 21.5821C9.25679 21.8305 8.38845 21.3671 8.13893 20.5464C8.01986 20.1518 8.06213 19.7262 8.25647 19.3627C8.4508 18.9993 8.78134 18.7277 9.1756 18.6076C16.4168 16.4105 25.4189 17.4747 31.5737 21.2569C32.3046 21.7069 32.5356 22.664 32.0856 23.394V23.3938ZM32.2951 17.7405C25.8689 13.9236 15.2665 13.5726 9.13107 15.4347C8.14583 15.7335 7.10393 15.1774 6.80536 14.1921C6.66179 13.7188 6.71209 13.2078 6.94521 12.7715C7.17832 12.3353 7.57515 12.0094 8.04845 11.8657C15.0915 9.7276 26.7999 10.1407 34.1985 14.5328C34.4093 14.6576 34.5935 14.8227 34.7404 15.0187C34.8874 15.2147 34.9942 15.4378 35.0548 15.6752C35.1154 15.9126 35.1286 16.1596 35.0936 16.4021C35.0586 16.6446 34.9761 16.8778 34.8508 17.0883C34.327 17.9745 33.1794 18.2666 32.2961 17.7405H32.2951Z",
                            }),
                          }),
                        }),
                      }),
                      s.jsxs("div", {
                        className: "track-list svelte-1ybcdb5",
                        children: [
                          s.jsx("div", {
                            className: "artist svelte-1ybcdb5",
                            children: "On repeat",
                          }),
                          s.jsx("div", {
                            className: "song svelte-1ybcdb5",
                            children: s.jsx("a", {
                              href: "https://open.spotify.com/track/1e5Ps2wBO34kq6zTuqhRZX",
                              target: "_blank",
                              rel: "nofollow noreferrer",
                              className: "svelte-1ybcdb5",
                              children: "Fjords by Bill Laurance",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                s.jsxs("div", {
                  className: "legal svelte-gfa3ns",
                  children: [
                    s.jsx("div", {
                      className: "svelte-gfa3ns",
                      children: "© 2024 Luckie Mumba",
                    }),
                    s.jsx("div", {
                      className: "dot svelte-gfa3ns",
                      children: "•",
                    }),
                    s.jsx("div", {
                      className: "svelte-gfa3ns",
                      children: s.jsx("div", {
                        className: "colophon svelte-gfa3ns",
                        children: s.jsx("span", {
                          className: "svelte-gfa3ns",
                          children: "Colophon",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("ul", {
              className: "list elsewheres svelte-gfa3ns",
              children: [
                s.jsx("li", {
                  className: "h6 svelte-gfa3ns",
                  children: "Elsewhere",
                }),
                s.jsx("li", {
                  className: "svelte-gfa3ns",
                  children: s.jsx("a", {
                    href: "https://www.figma.com/@luckiemumba",
                    target: "_blank",
                    rel: "nofollow noreferrer",
                    className: "svelte-gfa3ns",
                    children: "Figma",
                  }),
                }),
                s.jsx("li", {
                  className: "svelte-gfa3ns",
                  children: s.jsx("a", {
                    href: "https://github.com/luckiemumba",
                    target: "_blank",
                    rel: "nofollow noreferrer",
                    className: "svelte-gfa3ns",
                    children: "Github",
                  }),
                }),
                s.jsx("li", {
                  className: "svelte-gfa3ns",
                  children: s.jsx("a", {
                    href: "https://posts.cv/luckiemumba",
                    target: "_blank",
                    rel: "nofollow noreferrer",
                    className: "svelte-gfa3ns",
                    children: "Posts",
                  }),
                }),
                s.jsx("li", {
                  className: "svelte-gfa3ns",
                  children: s.jsx("a", {
                    href: "https://read.cv/luckiemumba",
                    target: "_blank",
                    rel: "nofollow noreferrer",
                    className: "svelte-gfa3ns",
                    children: "CV",
                  }),
                }),
                s.jsx("li", {
                  className: "svelte-gfa3ns",
                  children: s.jsx("a", {
                    href: "https://www.linkedin.com/in/luckiemumba/",
                    target: "_blank",
                    rel: "nofollow noreferrer",
                    className: "svelte-gfa3ns",
                    children: "LinkedIn",
                  }),
                }),
              ],
            }),
            s.jsxs("ul", {
              className: "list contacts svelte-gfa3ns",
              children: [
                s.jsx("li", {
                  className: "h6 svelte-gfa3ns",
                  children: "Contact",
                }),
                s.jsx("li", {
                  className: "svelte-gfa3ns",
                  children: s.jsx("button", {
                    className: "svelte-gfa3ns",
                    children: "Message",
                  }),
                }),
              ],
            }),
          ],
        }),
        s.jsx("div", {
          className: "circadian svelte-co75ut",
          children: s.jsxs("div", {
            className: "hours svelte-co75ut",
            children: [
              s.jsx("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: s.jsx("div", {
                  className: "line-holder svelte-co75ut",
                  children: s.jsx("div", {
                    className: "line svelte-co75ut fill",
                  }),
                }),
              }),
              s.jsx("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: s.jsx("div", {
                  className: "line-holder svelte-co75ut",
                  children: s.jsx("div", {
                    className: "line svelte-co75ut fill",
                  }),
                }),
              }),
              s.jsx("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: s.jsx("div", {
                  className: "line-holder svelte-co75ut",
                  children: s.jsx("div", {
                    className: "line svelte-co75ut fill",
                  }),
                }),
              }),
              s.jsx("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: s.jsx("div", {
                  className: "line-holder svelte-co75ut",
                  children: s.jsx("div", {
                    className: "line svelte-co75ut fill",
                  }),
                }),
              }),
              s.jsxs("div", {
                className: "hour svelte-co75ut active",
                role: "button",
                children: [
                  s.jsx("div", {
                    className: "bubble svelte-co75ut",
                    children: s.jsx("svg", {
                      width: "50",
                      height: "50",
                      viewBox: "0 0 50 50",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "svelte-co75ut",
                      children: s.jsx("path", {
                        d: "M25.3712 15.509C25.5647 15.8524 25.5385 16.2775 25.3042 16.5944C24.4914 17.694 24.2186 19.0953 24.3321 20.617C24.4392 22.0537 25.0584 23.4042 26.0771 24.4229C27.0958 25.4416 28.4463 26.0608 29.883 26.1679C31.4047 26.2814 32.806 26.0086 33.9056 25.1959C34.2226 24.9616 34.6476 24.9353 34.991 25.1288C35.3344 25.3224 35.532 25.6995 35.4958 26.092C35.318 28.0157 34.5905 29.6283 33.4454 31.1092C32.2814 32.6147 30.7127 33.7576 28.9229 34.4041C27.133 35.0506 25.1961 35.174 23.3387 34.7599C21.4812 34.3457 19.7802 33.4111 18.4345 32.0655C17.0889 30.7198 16.1543 29.0188 15.7402 27.1614C15.326 25.3039 15.4494 23.367 16.0959 21.5771C16.7424 19.7873 17.8853 18.2186 19.3908 17.0546C20.8718 15.9095 22.4843 15.182 24.408 15.0043C24.8005 14.968 25.1776 15.1657 25.3712 15.509ZM22.6707 17.4449C21.9553 17.7236 21.2802 18.1218 20.6141 18.6368C19.4091 19.5685 18.4944 20.824 17.9769 22.2566C17.4595 23.6892 17.3607 25.2395 17.6922 26.7261C18.0237 28.2127 18.7717 29.5742 19.8488 30.6513C20.9258 31.7283 22.2873 32.4763 23.7739 32.8078C25.2606 33.1393 26.8109 33.0405 28.2434 32.5231C29.676 32.0056 30.9316 31.0909 31.8632 29.8859C32.3782 29.2198 32.7764 28.5447 33.0552 27.8293C31.9742 28.1648 30.8363 28.2446 29.7343 28.1624C27.8199 28.0196 26.0204 27.1945 24.6629 25.8371C23.3055 24.4797 22.4804 22.6801 22.3376 20.7657C22.2554 19.6637 22.3353 18.5258 22.6707 17.4449Z",
                        className: "svelte-co75ut",
                      }),
                    }),
                  }),
                  s.jsx("div", {
                    className: "line-holder svelte-co75ut",
                    children: s.jsx("div", {
                      className: "line svelte-co75ut active fill",
                    }),
                  }),
                ],
              }),
              s.jsx("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: s.jsx("div", {
                  className: "line-holder svelte-co75ut",
                  children: s.jsx("div", { className: "line svelte-co75ut" }),
                }),
              }),
              s.jsx("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: s.jsx("div", {
                  className: "line-holder svelte-co75ut",
                  children: s.jsx("div", { className: "line svelte-co75ut" }),
                }),
              }),
              s.jsx("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: s.jsx("div", {
                  className: "line-holder svelte-co75ut",
                  children: s.jsx("div", { className: "line svelte-co75ut" }),
                }),
              }),
              s.jsx("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: s.jsx("div", {
                  className: "line-holder svelte-co75ut",
                  children: s.jsx("div", { className: "line svelte-co75ut" }),
                }),
              }),
              s.jsx("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: s.jsx("div", {
                  className: "line-holder svelte-co75ut",
                  children: s.jsx("div", { className: "line svelte-co75ut" }),
                }),
              }),
              s.jsx("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: s.jsx("div", {
                  className: "line-holder svelte-co75ut",
                  children: s.jsx("div", { className: "line svelte-co75ut" }),
                }),
              }),
              s.jsxs("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: [
                  s.jsx("div", {
                    className: "line-holder svelte-co75ut",
                    children: s.jsx("div", { className: "line svelte-co75ut" }),
                  }),
                  " ",
                ],
              }),
              s.jsxs("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: [
                  " ",
                  s.jsx("div", {
                    className: "line-holder svelte-co75ut",
                    children: s.jsx("div", { className: "line svelte-co75ut" }),
                  }),
                  " ",
                ],
              }),
              s.jsxs("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: [
                  " ",
                  s.jsx("div", {
                    className: "line-holder svelte-co75ut",
                    children: s.jsx("div", { className: "line svelte-co75ut" }),
                  }),
                  " ",
                ],
              }),
              s.jsxs("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: [
                  " ",
                  s.jsx("div", {
                    className: "line-holder svelte-co75ut",
                    children: s.jsx("div", { className: "line svelte-co75ut" }),
                  }),
                  " ",
                ],
              }),
              s.jsxs("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: [
                  " ",
                  s.jsx("div", {
                    className: "line-holder svelte-co75ut",
                    children: s.jsx("div", { className: "line svelte-co75ut" }),
                  }),
                  " ",
                ],
              }),
              s.jsxs("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: [
                  " ",
                  s.jsx("div", {
                    className: "line-holder svelte-co75ut",
                    children: s.jsx("div", { className: "line svelte-co75ut" }),
                  }),
                  " ",
                ],
              }),
              s.jsxs("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: [
                  " ",
                  s.jsx("div", {
                    className: "line-holder svelte-co75ut",
                    children: s.jsx("div", { className: "line svelte-co75ut" }),
                  }),
                  " ",
                ],
              }),
              s.jsxs("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: [
                  " ",
                  s.jsx("div", {
                    className: "line-holder svelte-co75ut",
                    children: s.jsx("div", { className: "line svelte-co75ut" }),
                  }),
                  " ",
                ],
              }),
              s.jsxs("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: [
                  " ",
                  s.jsx("div", {
                    className: "line-holder svelte-co75ut",
                    children: s.jsx("div", {
                      className: "line svelte-co75ut fill",
                    }),
                  }),
                  " ",
                ],
              }),
              s.jsxs("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: [
                  " ",
                  s.jsx("div", {
                    className: "line-holder svelte-co75ut",
                    children: s.jsx("div", {
                      className: "line svelte-co75ut fill",
                    }),
                  }),
                  " ",
                ],
              }),
              s.jsxs("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: [
                  " ",
                  s.jsx("div", {
                    className: "line-holder svelte-co75ut",
                    children: s.jsx("div", {
                      className: "line svelte-co75ut fill",
                    }),
                  }),
                  " ",
                ],
              }),
              s.jsxs("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: [
                  " ",
                  s.jsx("div", {
                    className: "line-holder svelte-co75ut",
                    children: s.jsx("div", {
                      className: "line svelte-co75ut fill",
                    }),
                  }),
                  " ",
                ],
              }),
              s.jsxs("div", {
                className: "hour svelte-co75ut",
                role: "button",
                children: [
                  " ",
                  s.jsx("div", {
                    className: "line-holder svelte-co75ut",
                    children: s.jsx("div", {
                      className: "line svelte-co75ut fill",
                    }),
                  }),
                  " ",
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  h1 = "/website/assets/ai-Cqhmxhpv.png",
  v1 = "/website/assets/figma-RjXCNYLM.png",
  m1 = "/website/assets/docs-CnzQDNUQ.png",
  f1 = "/website/assets/hs-DtLTeUqt.png",
  p1 = ({ color: e }) =>
    s.jsx("div", {
      children: s.jsx("svg", {
        fill: e,
        height: "180",
        viewBox: "0 0 180 180",
        width: "180",
        children: s.jsx("path", {
          d: "m98.2383 157.16c.7812 0 1.4258-.254 1.9337-.762.508-.468.84-1.113.996-1.933.82-6.406 1.738-11.817 2.754-16.231 1.055-4.414 2.422-8.046 4.101-10.898 1.719-2.852 3.985-5.117 6.797-6.797 2.813-1.719 6.387-3.066 10.723-4.043 4.336-.976 9.687-1.816 16.055-2.519.82-.079 1.484-.391 1.992-.938s.762-1.211.762-1.992c0-.742-.254-1.387-.762-1.934s-1.172-.859-1.992-.937c-6.368-.703-11.719-1.543-16.055-2.52-4.336-.976-7.91-2.324-10.723-4.043-2.812-1.7185-5.078-4.0036-6.797-6.8552-1.679-2.8516-3.046-6.4648-4.101-10.8398-1.016-4.4141-1.934-9.8438-2.754-16.2891-.156-.7812-.488-1.4062-.996-1.875-.5079-.5078-1.1525-.7617-1.9337-.7617-.7422 0-1.3867.2539-1.9336.7617-.5078.4688-.8203 1.0938-.9375 1.875-.8203 6.4453-1.7578 11.875-2.8125 16.2891-1.0156 4.375-2.3828 7.9882-4.1016 10.8398-1.7187 2.8516-3.9843 5.1367-6.7969 6.8552-2.8124 1.719-6.3867 3.067-10.7226 4.043-4.3359.977-9.668 1.817-15.9961 2.52-.8594.078-1.543.39-2.0508.937s-.7617 1.192-.7617 1.934c0 .781.2539 1.445.7617 1.992s1.1914.859 2.0508.938c6.3281.82 11.6406 1.757 15.9375 2.812 4.3359 1.016 7.8906 2.363 10.6641 4.043 2.8125 1.68 5.0781 3.926 6.7968 6.738 1.7188 2.813 3.086 6.387 4.1016 10.723 1.0547 4.375 2.0313 9.766 2.9297 16.172.1172.82.4297 1.465.9375 1.933.5469.508 1.1914.762 1.9336.762zm-39.7266-64.8045c.5469 0 .9961-.1758 1.3477-.5274.3515-.3515.5664-.7812.6445-1.289.5078-3.9063 1.0352-6.9532 1.582-9.1407.5469-2.1875 1.3868-3.8281 2.5196-4.9218 1.1718-1.1328 2.8906-1.9922 5.1562-2.5782 2.3047-.625 5.4883-1.3281 9.5508-2.1093 1.1719-.2344 1.7578-.8985 1.7578-1.9922 0-.5469-.1758-.9961-.5273-1.3477-.3125-.3515-.7227-.5469-1.2305-.5859-4.0625-.586-7.2461-1.1524-9.5508-1.6992-2.3047-.5469-4.0429-1.3868-5.2148-2.5196-1.1328-1.1718-1.9727-2.8906-2.5196-5.1562-.5078-2.2656-1.0156-5.3711-1.5234-9.3164-.1562-1.25-.8203-1.875-1.9922-1.875s-1.8359.6445-1.9922 1.9336c-.4687 3.9062-.9765 6.9531-1.5234 9.1406-.5469 2.1484-1.4063 3.7695-2.5781 4.8633-1.1719 1.0937-2.9102 1.9531-5.2149 2.5781-2.3047.5859-5.4687 1.2695-9.4922 2.0508-1.1718.1953-1.7578.8398-1.7578 1.9336 0 1.1328.6641 1.7969 1.9922 1.9922 3.9844.664 7.1094 1.289 9.375 1.875 2.3047.5859 4.0235 1.4453 5.1563 2.5781 1.1718 1.0937 2.0117 2.7539 2.5195 4.9805.5469 2.2265 1.0547 5.2929 1.5234 9.1992.1563 1.289.8203 1.9336 1.9922 1.9336zm28.3594-40.3125c.7031 0 1.1328-.3907 1.2891-1.1719.4296-2.3828.8203-4.2578 1.1718-5.625.3516-1.3672.8594-2.4023 1.5235-3.1055.7031-.7422 1.7578-1.3281 3.164-1.7578 1.4063-.4297 3.3789-.8594 5.918-1.289.7815-.1563 1.1715-.6055 1.1715-1.3477 0-.7031-.39-1.1328-1.1715-1.2891-2.5391-.4687-4.5117-.8984-5.918-1.289-1.4062-.4297-2.4609-.9961-3.164-1.6992-.6641-.7422-1.1719-1.7969-1.5235-3.1641-.3515-1.3672-.7422-3.2422-1.1718-5.625-.1563-.7813-.586-1.1719-1.2891-1.1719-.7422 0-1.1719.3906-1.2891 1.1719-.4687 2.3828-.8789 4.2578-1.2304 5.625-.3125 1.3672-.8204 2.4219-1.5235 3.1641-.664.7031-1.6992 1.2695-3.1054 1.6992-1.4063.3906-3.3789.8203-5.918 1.289-.7813.1563-1.1719.586-1.1719 1.2891 0 .7422.3906 1.1914 1.1719 1.3477 2.5391.4296 4.5117.8593 5.918 1.289 1.4062.4297 2.4414 1.0156 3.1054 1.7578.7031.7032 1.211 1.7383 1.5235 3.1055.3515 1.3672.7617 3.2422 1.2304 5.625.1172.7812.5469 1.1719 1.2891 1.1719z",
          fill: "#fff",
        }),
      }),
    }),
  x1 = () =>
    s.jsx(s.Fragment, {
      children: s.jsx("div", {
        className: "cards svelte-1eg3i2g",
        children: s.jsxs("div", {
          className: "cards-content",
          children: [
            s.jsx("div", {
              style: {
                display: "contents",
                background: "var(--color-pink)",
                color: "var(--color-text-bold)",
                "--grid-column-start": "1",
                "--grid-column-end": "10",
              },
              children: s.jsxs("a", {
                className: "card svelte-vd84gr",
                "data-sveltekit-preload-code": "",
                "data-sveltekit-preload-data": "",
                href: "#",
                children: [
                  s.jsxs("div", {
                    className: "card-flourish svelte-vd84gr",
                    children: [
                      s.jsx(p1, {}),
                      s.jsx("img", {
                        style: { top: "-80px", left: "70px" },
                        className: "svelte-vd84gr",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "card-wrap svelte-vd84gr",
                    children: [
                      s.jsxs("div", {
                        className: "info svelte-vd84gr",
                        children: [
                          s.jsx("span", {
                            className: "svelte-vd84gr",
                            children: "Help Scout",
                          }),
                          s.jsx("h2", { children: "AI" }),
                        ],
                      }),
                      s.jsx("div", {
                        className: "inner svelte-vd84gr",
                        children: s.jsx("div", {
                          className: "image-holder docs svelte-1eg3i2g",
                          children: s.jsx("figure", {
                            className: "svelte-cmqfoo",
                            children: s.jsx("img", {
                              src: h1,
                              alt: "AI",
                              width: "810",
                              height: "422",
                              loading: "lazy",
                              className: "svelte-cmqfoo skip loaded",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsx("div", {
              style: {
                display: "contents",
                background: "var(--color-mint)",
                color: "var(--color-text-bold)",
                "--grid-column-start": "11",
                "--grid-column-end": "26",
              },
              children: s.jsxs("a", {
                className: "card svelte-vd84gr",
                href: "#",
                children: [
                  s.jsxs("div", {
                    className: "card-flourish svelte-vd84gr",
                    children: [
                      s.jsx("img", {
                        src: "https:// /work/docs/flourish/card_docs_icon_02.svg",
                        style: { top: "-70px", left: "70px" },
                        className: "svelte-vd84gr",
                      }),
                      s.jsx("img", {
                        src: "https:// /work/docs/flourish/card_docs_icon_03.svg",
                        style: { top: "-80px", right: "250px" },
                        className: "svelte-vd84gr",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "card-wrap svelte-vd84gr",
                    children: [
                      s.jsxs("div", {
                        className: "info svelte-vd84gr",
                        children: [
                          s.jsx("span", {
                            className: "svelte-vd84gr",
                            children: "Help Scout",
                          }),
                          s.jsx("h2", { children: "Articles" }),
                        ],
                      }),
                      s.jsx("div", {
                        className: "inner svelte-vd84gr",
                        children: s.jsx("div", {
                          className: "image-holder docs svelte-1eg3i2g",
                          children: s.jsx("figure", {
                            className: "svelte-cmqfoo",
                            children: s.jsx("img", {
                              src: m1,
                              alt: "Articles",
                              width: "1300",
                              height: "600",
                              loading: "lazy",
                              className: "svelte-cmqfoo skip loaded",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsx("div", {
              style: {
                display: "contents",
                background: "var(--color-rust)",
                color: "var(--color-text-bold)",
                "--grid-column-start": "1",
                "--grid-column-end": "16",
              },
              children: s.jsxs("a", {
                className: "card svelte-vd84gr",
                "data-sveltekit-preload-code": "",
                "data-sveltekit-preload-data": "",
                href: "https:// /work/plugins",
                children: [
                  s.jsxs("div", {
                    className: "card-flourish svelte-vd84gr",
                    children: [
                      s.jsx("img", {
                        src: "https:// /work/plugin/flourish/card_figma_icon_01.svg",
                        style: { bottom: "200px", left: "-100px" },
                        className: "svelte-vd84gr",
                      }),
                      s.jsx("img", {
                        src: "https:// /work/plugin/flourish/card_figma_icon_02.svg",
                        style: { top: "-100px", right: "300px" },
                        className: "svelte-vd84gr",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "card-wrap svelte-vd84gr",
                    children: [
                      s.jsxs("div", {
                        className: "info svelte-vd84gr",
                        children: [
                          s.jsx("span", {
                            className: "svelte-vd84gr",
                            children: "Figma",
                          }),
                          s.jsx("h2", { children: "Plugins" }),
                        ],
                      }),
                      s.jsx("div", {
                        className: "inner svelte-vd84gr",
                        children: s.jsx("div", {
                          className: "image-holder figma svelte-1eg3i2g",
                          children: s.jsx("figure", {
                            className: "svelte-cmqfoo",
                            children: s.jsx("img", {
                              src: v1,
                              alt: "Plugins",
                              width: "1300",
                              height: "600",
                              loading: "lazy",
                              className: "svelte-cmqfoo skip loaded",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsx("div", {
              style: {
                display: "contents",
                background: "var(--color-babyblue)",
                color: "var(--color-text-bold)",
                "--grid-column-start": "17",
                "--grid-column-end": "26",
              },
              children: s.jsxs("a", {
                className: "card svelte-vd84gr large",
                "data-sveltekit-preload-code": "",
                "data-sveltekit-preload-data": "",
                href: "https:// /work/mobile",
                children: [
                  s.jsx("div", {
                    className: "card-flourish svelte-vd84gr",
                    children: s.jsx("img", {
                      src: "https:// /work/mobile/flourish/card_mobile_icon_01.svg",
                      style: { top: "-70px", left: "100px" },
                      className: "svelte-vd84gr",
                    }),
                  }),
                  s.jsxs("div", {
                    className: "card-wrap svelte-vd84gr",
                    children: [
                      s.jsxs("div", {
                        className: "info svelte-vd84gr",
                        children: [
                          s.jsx("span", {
                            className: "svelte-vd84gr",
                            children: "Help Scout",
                          }),
                          s.jsx("h2", { children: "Mobile" }),
                        ],
                      }),
                      s.jsx("div", {
                        className: "inner svelte-vd84gr",
                        children: s.jsx("div", {
                          className: "image-holder hs svelte-1eg3i2g",
                          children: s.jsx("figure", {
                            className: "svelte-cmqfoo",
                            children: s.jsx("img", {
                              src: f1,
                              alt: "Mobile",
                              width: "100%",
                              height: "auto",
                              loading: "lazy",
                              className: "svelte-cmqfoo skip loaded",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  g1 = ({ color: e }) =>
    s.jsx("div", {
      children: s.jsx("svg", {
        fill: e,
        height: "68",
        viewBox: "0 0 68 68",
        width: "68",
        children: s.jsx("path", {
          d: "m29.201 4.40976c1.4024-4.795399 8.1956-4.795399 9.598 0l4.8413 16.55444c.4787 1.6368 1.7587 2.9168 3.3955 3.3955l16.5544 4.8413c4.7954 1.4024 4.7954 8.1956 0 9.598l-16.5544 4.8413c-1.6368.4787-2.9168 1.7587-3.3955 3.3955l-4.8413 16.5544c-1.4024 4.7954-8.1956 4.7954-9.598 0l-4.8413-16.5544c-.4787-1.6368-1.7587-2.9168-3.3955-3.3955l-16.55444-4.8413c-4.795399-1.4024-4.795399-8.1956 0-9.598l16.55444-4.8413c1.6368-.4787 2.9168-1.7587 3.3955-3.3955z",
          fill: "#fff",
        }),
      }),
    }),
  w1 = () =>
    s.jsx("div", {
      children: s.jsx("svg", {
        fill: "none",
        height: "66",
        viewBox: "0 0 66 66",
        width: "66",
        children: s.jsx("path", {
          d: "m28.1267 4.23225c1.1879-5.175299 8.5587-5.175287 9.7466.00001l3.7596 16.38014c.4287 1.8676 1.8871 3.326 3.7547 3.7547l16.3802 3.7596c5.1752 1.1879 5.1752 8.5587-.0001 9.7466l-16.3801 3.7596c-1.8676.4287-3.326 1.8871-3.7547 3.7547l-3.7596 16.3802c-1.1879 5.1752-8.5587 5.1752-9.7466-.0001l-3.7596-16.3801c-.4287-1.8676-1.8871-3.326-3.7547-3.7547l-16.38015-3.7596c-5.175299-1.1879-5.175287-8.5587.00001-9.7466l16.38014-3.7596c1.8676-.4287 3.326-1.8871 3.7547-3.7547z",
          fill: "#fff",
        }),
      }),
    }),
  j1 = () =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsx("h1", {
          className: "svelte-veednl tight",
          children: s.jsxs("span", {
            slot: "title",
            className: "svelte-pbuplb",
            children: [
              s.jsx("span", {
                className: "holder svelte-pbuplb",
                children: s.jsxs("span", {
                  className: "holder-content svelte-pbuplb",
                  children: [
                    "Hi. I`m Luckie.",
                    s.jsx("span", {
                      className: "stars right svelte-pbuplb",
                      children: s.jsx("figure", {
                        className: "svelte-cmqfoo",
                        children: s.jsx("img", {
                          src: w1,
                          alt: "",
                          width: "",
                          height: "",
                          loading: "lazy",
                          className: "svelte-cmqfoo skip",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              s.jsx("span", {
                className: "holder svelte-pbuplb",
                children: s.jsxs("span", {
                  className: "holder-content svelte-pbuplb",
                  children: [
                    "Developer.",
                    s.jsx("span", {
                      className: "stars left svelte-pbuplb",
                      children: s.jsx("figure", {
                        className: "svelte-cmqfoo",
                        children: s.jsx("img", {
                          src: g1,
                          alt: "",
                          width: "",
                          height: "",
                          loading: "lazy",
                          className: "svelte-cmqfoo skip",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        s.jsx("div", {
          className: "wrapper svelte-fn0uxd",
          children: s.jsx("div", {
            className: "svelte-fn0uxd",
            children:
              "I`m passionate about crafting experiences that are engaging, accessible, and user-centric. Here we can dealv deep into what I`ve worked on in the past, current and what my endeavors are!",
          }),
        }),
      ],
    }),
  y1 = "/website/assets/doodler-CGsaiZ3Z.png",
  N1 = "/website/assets/hp-droplette-ybLVHmIu.png",
  k1 = () =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsx("h2", {
          className: "h1-display principles svelte-pbuplb",
          children: s.jsx("span", {
            className: "svelte-pbuplb",
            children: "In Progress.",
          }),
        }),
        s.jsx("div", {
          className: "wrapper svelte-fn0uxd",
          children: s.jsx("p", {
            className: "svelte-fn0uxd center",
            children:
              "Work in various states of design and development, from side projects, to in-flight product design and development.",
          }),
        }),
        s.jsx("div", {
          className: "cards svelte-131t5ir",
          children: s.jsxs("div", {
            className: "cards-content",
            children: [
              s.jsx("div", {
                style: {
                  display: "contents",
                  background: "var(--color-white)",
                  color: "var(--color-text-bold)",
                  "--grid-column-start": "1",
                  "--grid-column-end": "16",
                  "--align": "center",
                },
                children: s.jsx("a", {
                  className: "card svelte-vd84gr",
                  "data-sveltekit-preload-code": "",
                  "data-sveltekit-preload-data": "",
                  href: "https://www.halpin.xyz/work/doodler",
                  children: s.jsxs("div", {
                    className: "card-wrap svelte-vd84gr",
                    children: [
                      s.jsxs("div", {
                        className: "info svelte-vd84gr",
                        children: [
                          s.jsx("span", {
                            className: "svelte-vd84gr",
                            children: "Multiplayer",
                          }),
                          s.jsx("h2", { children: "Doodler" }),
                        ],
                      }),
                      s.jsx("div", {
                        className: "inner svelte-vd84gr",
                        children: s.jsx("div", {
                          className: "image-holder doodler svelte-131t5ir",
                          children: s.jsx("figure", {
                            className: "svelte-cmqfoo",
                            children: s.jsx("img", {
                              src: y1,
                              alt: "Doodler",
                              width: "100%",
                              height: "",
                              loading: "lazy",
                              className: "svelte-cmqfoo skip loaded",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              s.jsx("div", {
                style: {
                  display: "contents",
                  background: "#1c1c1c",
                  color: "var(--color-white)",
                  "--grid-column-start": "17",
                  "--grid-column-end": "26",
                  "--align": "flex-end",
                },
                children: s.jsx("a", {
                  className: "card svelte-vd84gr",
                  "data-sveltekit-preload-code": "",
                  "data-sveltekit-preload-data": "",
                  href: "https:// /work/droplette",
                  children: s.jsxs("div", {
                    className: "card-wrap svelte-vd84gr",
                    children: [
                      s.jsxs("div", {
                        className: "info svelte-vd84gr",
                        children: [
                          s.jsx("span", {
                            className: "svelte-vd84gr",
                            children: "Figma",
                          }),
                          s.jsx("h2", { children: "Droplette" }),
                        ],
                      }),
                      s.jsx("div", {
                        className: "inner svelte-vd84gr",
                        children: s.jsx("div", {
                          className: "image-holder dm svelte-131t5ir",
                          children: s.jsx("figure", {
                            className: "svelte-cmqfoo",
                            children: s.jsx("img", {
                              src: N1,
                              alt: "Droplette",
                              width: "100%",
                              height: "",
                              loading: "lazy",
                              className: "svelte-cmqfoo skip loaded",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  q1 = () =>
    s.jsx(s.Fragment, {
      children: s.jsx("main", {
        className: "svelte-1p8u9ev",
        children: s.jsxs("div", {
          className: "content",
          children: [
            s.jsx(j1, {}),
            s.jsx(x1, {}),
            s.jsx(k1, {}),
            s.jsx(_r, {}),
          ],
        }),
      }),
    }),
  S1 = () =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsx("h1", {
          className: "svelte-veednl",
          children: s.jsx("span", { slot: "title", children: "I`m Luckie." }),
        }),
        s.jsxs("div", {
          className: "deets grid svelte-c4ft01",
          children: [
            s.jsx("div", {
              className: "me svelte-c4ft01",
              children: s.jsxs("div", {
                className: "me-content svelte-c4ft01",
                children: [
                  s.jsx("div", {
                    className: "me-holder svelte-c4ft01",
                    children: s.jsx("div", {
                      style: { display: "contents", "--display": "block" },
                      children: s.jsx("figure", {
                        className: "svelte-cmqfoo radius skeleton",
                        children: s.jsx("img", {
                          src: Dh,
                          alt: "Photo of Luckie",
                          width: "384",
                          height: "384",
                          loading: "lazy",
                          className: "svelte-cmqfoo radius fit skip loaded",
                        }),
                      }),
                    }),
                  }),
                  s.jsx("div", {
                    className: "music-player svelte-c4ft01",
                    children: s.jsxs("div", {
                      style: {
                        display: "contents",
                        "--color": "var(--color-text-tertiary",
                      },
                      children: [
                        s.jsx("div", {
                          className: "icon svelte-1ybcdb5",
                          children: s.jsx("div", {
                            style: {
                              display: "contents",
                              "--fill": "var(--color-primary)",
                            },
                            children: s.jsx("svg", {
                              width: "41",
                              height: "40",
                              viewBox: "0 0 41 40",
                              fill: "none",
                              className: "svelte-13vxf5t",
                              children: s.jsx("path", {
                                d: "M20.5013 0.0664062C9.48964 0.0664062 0.5625 8.99331 0.5625 20.005C0.5625 31.0171 9.48964 39.9433 20.5013 39.9433C31.5142 39.9433 40.4404 31.0171 40.4404 20.005C40.4404 8.99403 31.5142 0.0673586 20.5011 0.0673586L20.5013 0.0664062V0.0664062ZM29.6451 28.8236C29.56 28.963 29.4483 29.0842 29.3163 29.1804C29.1843 29.2766 29.0346 29.3458 28.8758 29.3841C28.717 29.4223 28.5522 29.4289 28.3909 29.4034C28.2296 29.3779 28.0748 29.3208 27.9356 29.2355C23.2542 26.3759 17.3608 25.7283 10.4204 27.314C10.099 27.3871 9.76174 27.3296 9.48275 27.1541C9.20375 26.9787 9.00584 26.6996 8.9325 26.3783C8.89597 26.2192 8.89119 26.0545 8.91842 25.8935C8.94565 25.7326 9.00436 25.5786 9.09118 25.4404C9.17801 25.3021 9.29126 25.1824 9.42443 25.088C9.5576 24.9936 9.70808 24.9264 9.86726 24.8902C17.4625 23.1543 23.9775 23.9021 29.2332 27.114C29.8189 27.4736 30.0046 28.2378 29.6451 28.8236V28.8236ZM32.0856 23.3938C31.6356 24.1259 30.6785 24.3569 29.9475 23.9069C24.588 20.6119 16.4182 19.6578 10.0789 21.5821C9.25679 21.8305 8.38845 21.3671 8.13893 20.5464C8.01986 20.1518 8.06213 19.7262 8.25647 19.3627C8.4508 18.9993 8.78134 18.7277 9.1756 18.6076C16.4168 16.4105 25.4189 17.4747 31.5737 21.2569C32.3046 21.7069 32.5356 22.664 32.0856 23.394V23.3938ZM32.2951 17.7405C25.8689 13.9236 15.2665 13.5726 9.13107 15.4347C8.14583 15.7335 7.10393 15.1774 6.80536 14.1921C6.66179 13.7188 6.71209 13.2078 6.94521 12.7715C7.17832 12.3353 7.57515 12.0094 8.04845 11.8657C15.0915 9.7276 26.7999 10.1407 34.1985 14.5328C34.4093 14.6576 34.5935 14.8227 34.7404 15.0187C34.8874 15.2147 34.9942 15.4378 35.0548 15.6752C35.1154 15.9126 35.1286 16.1596 35.0936 16.4021C35.0586 16.6446 34.9761 16.8778 34.8508 17.0883C34.327 17.9745 33.1794 18.2666 32.2961 17.7405H32.2951Z",
                              }),
                            }),
                          }),
                        }),
                        s.jsxs("div", {
                          className: "track-list svelte-1ybcdb5",
                          children: [
                            s.jsx("div", {
                              className: "artist svelte-1ybcdb5",
                              children: "On repeat",
                            }),
                            s.jsx("div", {
                              className: "song svelte-1ybcdb5",
                              children: s.jsx("a", {
                                href: "https://open.spotify.com/track/5xYZXIgVAND5sWjN8G0hID",
                                target: "_blank",
                                rel: "nofollow noreferrer",
                                className: "svelte-1ybcdb5",
                                children: "Go! by Public Service Broadcasting",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            s.jsxs("div", {
              className: "blurb svelte-c4ft01",
              children: [
                s.jsx("h2", {
                  className: "intro svelte-c4ft01",
                  children:
                    "I`m a front end web developer & designer located in Lusaka, Zambia.",
                }),
                s.jsx("p", {
                  className: "svelte-c4ft01",
                  children:
                    "Over the past 4+ years, I`ve worked in various areas of digital design, including front-end development, email, marketing, and app UI/UX. I`m proud to have worn many hats",
                }),
                s.jsx("p", {
                  className: "svelte-c4ft01",
                  children:
                    "I focus on creating & designing web apps with clean & user-friendly experiences, and for that, I am passionate about building exciting software`s that improves the lives of those around me.",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  C1 = () =>
    s.jsx(s.Fragment, {
      children: s.jsx("div", {
        className: "grid-wrap",
        children: s.jsxs("div", {
          className: "principles svelte-c4ft01 ",
          children: [
            s.jsx("h1", { children: "Skills" }),
            s.jsxs("div", {
              className: "timeline-holder svelte-c4ft01",
              children: [
                s.jsx("div", {
                  className: "grid svelte-885gk8 xs",
                  children: s.jsx("h3", {
                    className: "item svelte-885gk8",
                    children: "Front End",
                  }),
                }),
                s.jsxs("div", {
                  className: "timeline grid svelte-c4ft01",
                  children: [
                    s.jsx("div", {
                      style: {
                        display: "contents",
                        "--row": "5/5",
                        "--column": "1 / span 5",
                        background: "var(--color-purple)",
                      },
                      children: s.jsx("div", {
                        className: "timeline svelte-16qh449",
                        children: s.jsxs("div", {
                          className: "content svelte-16qh449",
                          children: [
                            s.jsxs("div", {
                              className: "work svelte-16qh449",
                              children: [
                                s.jsx("div", {
                                  className: "company svelte-16qh449",
                                  children: "React",
                                }),
                                s.jsx("div", {
                                  className: "title svelte-16qh449",
                                  children: "Design / Dev",
                                }),
                              ],
                            }),
                            s.jsx("div", {
                              className: "time svelte-16qh449",
                              children: "7-10",
                            }),
                          ],
                        }),
                      }),
                    }),
                    s.jsx("div", {
                      style: {
                        display: "contents",
                        "--row": "4/4",
                        "--column": "6 / span 6",
                        background: "var(--color-yellow)",
                      },
                      children: s.jsx("div", {
                        className: "timeline svelte-16qh449",
                        children: s.jsxs("div", {
                          className: "content svelte-16qh449",
                          children: [
                            s.jsxs("div", {
                              className: "work svelte-16qh449",
                              children: [
                                s.jsx("div", {
                                  className: "company svelte-16qh449",
                                  children: "React Native",
                                }),
                                s.jsx("div", {
                                  className: "title svelte-16qh449",
                                  children: "Design / Dev",
                                }),
                              ],
                            }),
                            s.jsx("div", {
                              className: "time svelte-16qh449",
                              children: "10-14",
                            }),
                          ],
                        }),
                      }),
                    }),
                    s.jsx("div", {
                      style: {
                        display: "contents",
                        "--row": "3/3",
                        "--column": "10 / span 16",
                        background: "var(--color-pink)",
                      },
                      children: s.jsx("div", {
                        className: "timeline svelte-16qh449",
                        children: s.jsxs("div", {
                          className: "content svelte-16qh449",
                          children: [
                            s.jsxs("div", {
                              className: "work svelte-16qh449",
                              children: [
                                s.jsx("div", {
                                  className: "company svelte-16qh449",
                                  children: "Javascript",
                                }),
                                s.jsx("div", {
                                  className: "title svelte-16qh449",
                                  children: "Typescript / JSX / Three.Js",
                                }),
                              ],
                            }),
                            s.jsx("div", {
                              className: "time svelte-16qh449",
                              children: "12~",
                            }),
                          ],
                        }),
                      }),
                    }),
                    s.jsx("div", {
                      style: {
                        display: "contents",
                        "--row": "2/2",
                        "--column": "12 / span 13",
                        background: "var(--color-red)",
                      },
                      children: s.jsx("div", {
                        className: "timeline svelte-16qh449",
                        children: s.jsxs("div", {
                          className: "content svelte-16qh449",
                          children: [
                            s.jsxs("div", {
                              className: "work svelte-16qh449",
                              children: [
                                s.jsx("div", {
                                  className: "company svelte-16qh449",
                                  children: "CSS",
                                }),
                                s.jsx("div", {
                                  className: "title svelte-16qh449",
                                  children: "Taiwind",
                                }),
                              ],
                            }),
                            s.jsx("div", {
                              className: "time svelte-16qh449",
                              children: "15-23",
                            }),
                          ],
                        }),
                      }),
                    }),
                    s.jsx("div", {
                      style: {
                        display: "contents",
                        "--row": "1/1",
                        "--column": "22 / span 4",
                        background: "var(--color-red)",
                      },
                      children: s.jsx("div", {
                        className: "timeline svelte-16qh449",
                        children: s.jsxs("div", {
                          className: "content svelte-16qh449",
                          children: [
                            s.jsxs("div", {
                              className: "work svelte-16qh449",
                              children: [
                                s.jsx("div", {
                                  className: "company svelte-16qh449",
                                  children: "HTML",
                                }),
                                s.jsx("div", {
                                  className: "title svelte-16qh449",
                                  children: "Lead Designer",
                                }),
                              ],
                            }),
                            s.jsx("div", {
                              className: "time svelte-16qh449",
                              children: "23~",
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("div", { className: "grid svelte-885gk8 xs" }),
            s.jsxs("div", {
              className: "timeline-holder svelte-c4ft01",
              children: [
                s.jsx("h3", {
                  className: "item svelte-885gk8",
                  children: "Back End",
                }),
                s.jsxs("div", {
                  className: "timeline grid svelte-c4ft01",
                  children: [
                    s.jsx("div", {
                      style: {
                        display: "contents",
                        "--row": "5/5",
                        "--column": "1 / span 5",
                        background: "var(--color-purple)",
                      },
                    }),
                    s.jsx("div", {
                      style: {
                        display: "contents",
                        "--row": "4/4",
                        "--column": "6 / span 6",
                        background: "var(--color-yellow)",
                      },
                    }),
                    s.jsx("div", {
                      style: {
                        display: "contents",
                        "--row": "3/3",
                        "--column": "7 / span 13",
                        background: "var(--color-pink)",
                      },
                      children: s.jsx("div", {
                        className: "timeline svelte-16qh449",
                        children: s.jsxs("div", {
                          className: "content svelte-16qh449",
                          children: [
                            s.jsxs("div", {
                              className: "work svelte-16qh449",
                              children: [
                                s.jsx("div", {
                                  className: "company svelte-16qh449",
                                  children: "Python",
                                }),
                                s.jsx("div", {
                                  className: "title svelte-16qh449",
                                  children: "Django",
                                }),
                              ],
                            }),
                            s.jsx("div", {
                              className: "time svelte-16qh449",
                              children: "12~",
                            }),
                          ],
                        }),
                      }),
                    }),
                    s.jsx("div", {
                      style: {
                        display: "contents",
                        "--row": "2/2",
                        "--column": "12 / span 13",
                        background: "var(--color-red)",
                      },
                    }),
                    s.jsx("div", {
                      style: {
                        display: "contents",
                        "--row": "1/1",
                        "--column": "17 / span 9",
                        background: "var(--color-red)",
                      },
                      children: s.jsx("div", {
                        className: "timeline svelte-16qh449",
                        children: s.jsxs("div", {
                          className: "content svelte-16qh449",
                          children: [
                            s.jsxs("div", {
                              className: "work svelte-16qh449",
                              children: [
                                s.jsx("div", {
                                  className: "company svelte-16qh449",
                                  children: "Node.Js",
                                }),
                                s.jsx("div", {
                                  className: "title svelte-16qh449",
                                  children: "Lead Designer",
                                }),
                              ],
                            }),
                            s.jsx("div", {
                              className: "time svelte-16qh449",
                              children: "23~",
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  E1 = "/website/assets/large-07-CTFQrkr4.png",
  b1 = "/website/assets/small-03-BzkIeIt5.jpg",
  I1 = () =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsx("div", {
          style: {
            display: "contents",
            "--grid-column-start": "8",
            "--grid-column-end": "19",
            "--padding-bottom": "var(--spacing-l)",
          },
          children: s.jsx("div", {
            className: "grid svelte-885gk8",
            children: s.jsxs("div", {
              className: "item svelte-885gk8",
              children: [
                s.jsx("p", {
                  className: "svelte-c4ft01",
                  children:
                    "Before I stepped into the world of product design and web developing, I was Front desk data analyst. One of my earliest jobs involved emails, in a time before email linters. Lots of wishing, hoping, and finger crossing that your email arrived in a recipient`s inbox in one piece.",
                }),
                " ",
                s.jsx("p", {
                  className: "svelte-c4ft01",
                  children:
                    "Coding emails forced me to understand how HTML and CSS play together, a skill set I`ve carried and kept fresh in the years since. My side project work is just an excuse to satisfy my curiosity about new technologies and understand how the web is moving forward.",
                }),
                " ",
                s.jsx("p", {
                  className: "svelte-c4ft01",
                  children:
                    "Outside coding, web designing, I am a geek that likes learning new things that excites me all the time, listening to music, exploring the world with my partner, and playing with my dog Sportty.",
                }),
              ],
            }),
          }),
        }),
        s.jsxs("div", {
          className: "pics svelte-c4ft01",
          children: [
            s.jsxs("div", {
              className: "large col svelte-c4ft01",
              children: [
                s.jsx("figure", {
                  className: "svelte-cmqfoo skeleton",
                  children: s.jsx("img", {
                    src: E1,
                    alt: "Weekly Plan",
                    width: "844",
                    height: "542",
                    loading: "lazy",
                    className: "svelte-cmqfoo fit skip loaded",
                  }),
                }),
                s.jsxs("p", {
                  children: [
                    "Image by",
                    " ",
                    s.jsx("a", {
                      href: "https://unsplash.com/@jessbaileydesigns?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit",
                      className: "link",
                      children: "Jess Bailey",
                    }),
                    " ",
                    "/",
                    " ",
                    s.jsx("a", {
                      href: "https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit",
                      className: "link",
                      children: "Unsplash",
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "small col svelte-c4ft01",
              children: [
                s.jsx("figure", {
                  className: "svelte-cmqfoo skeleton",
                  children: s.jsx("img", {
                    src: b1,
                    alt: "Art",
                    width: "373",
                    height: "542",
                    loading: "lazy",
                    className: "svelte-cmqfoo fit skip",
                  }),
                }),
                s.jsxs("p", {
                  children: [
                    "Image by",
                    " ",
                    s.jsx("a", {
                      href: "https://unsplash.com/@simonppt",
                      className: "link",
                      children: "Simon Lee",
                    }),
                    " ",
                    "/",
                    " ",
                    s.jsx("a", {
                      href: "https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit",
                      className: "link",
                      children: "Unsplash",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  L1 = () =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsx("div", {
          style: {
            display: "contents",
            "--grid-column-start": "8",
            "--grid-column-end": "25",
          },
          children: s.jsx("div", {
            className: "grid svelte-885gk8",
            children: s.jsx("div", {
              className: "item svelte-885gk8",
              children: s.jsx("h2", {
                className: "h2-display line-height svelte-c4ft01",
                children:
                  "Let`s collaborate if you`re committed to sustainability, education, equality, or carbon neutrality.",
              }),
            }),
          }),
        }),
        s.jsx("div", {
          style: {
            display: "contents",
            "--grid-column-start": "8",
            "--grid-column-end": "19",
          },
          children: s.jsx("div", {
            className: "grid svelte-885gk8",
            children: s.jsx("div", {
              className: "item svelte-885gk8",
              children: s.jsx("p", {
                className: "svelte-c4ft01",
                children:
                  "I believe we should leave this Earth as good as or better than we found it for future generations; my goal is to contribute to those ideals in whatever way I can. If you feel the same, I`d love to talk.",
              }),
            }),
          }),
        }),
      ],
    }),
  A1 = () =>
    s.jsx("div", {
      className: "grid-wrap",
      children: s.jsxs("div", {
        className: "grid principles svelte-c4ft01 ",
        children: [
          s.jsxs("div", {
            className: "entry principle-1 svelte-c4ft01",
            children: [
              s.jsx("div", {
                className: "count svelte-c4ft01",
                "aria-hidden": "true",
                children: "01",
              }),
              s.jsx("h3", {
                className: "h3-display svelte-c4ft01",
                children: "Make it",
              }),
              s.jsx("p", {
                className: "svelte-c4ft01",
                children:
                  "I sketch wireframes and make prototypes. Talking through tactile designs existing in the browser is worth its weight.",
              }),
            ],
          }),
          s.jsxs("div", {
            className: "entry principle-2 svelte-c4ft01",
            children: [
              s.jsx("div", {
                className: "count svelte-c4ft01",
                "aria-hidden": "true",
                children: "02",
              }),
              s.jsx("h3", {
                className: "h3-display svelte-c4ft01",
                children: "Collaborate",
              }),
              s.jsx("p", {
                className: "svelte-c4ft01",
                children:
                  "Good design is not created in a vacuum but rather in a shared space. It must be facilitated and iterated upon as a team. I aim to include stakeholders in my design process and create a collaborative environment that welcomes and encourages feedback.",
              }),
            ],
          }),
          s.jsxs("div", {
            className: "entry principle-3 svelte-c4ft01",
            children: [
              s.jsx("div", {
                className: "count svelte-c4ft01",
                "aria-hidden": "true",
                children: "03",
              }),
              s.jsx("h3", {
                className: "h3-display svelte-c4ft01",
                children: "Accessible FTW",
              }),
              s.jsx("p", {
                className: "svelte-c4ft01",
                children:
                  "I aim to make everything I design accessible to all for one main reason - it`s the right thing to do. Accessible products benefit the many, not the few.",
              }),
            ],
          }),
          s.jsxs("div", {
            className: "entry principle-4 svelte-c4ft01",
            children: [
              s.jsx("div", {
                className: "count svelte-c4ft01",
                "aria-hidden": "true",
                children: "04",
              }),
              s.jsx("h3", {
                className: "h3-display svelte-c4ft01",
                children: "Keep experimenting",
              }),
              s.jsx("p", {
                className: "svelte-c4ft01",
                children:
                  "Everything I create is subject to change and experimentation. Not everything will work, but it`s worth trying - and learning from what doesn`t.",
              }),
            ],
          }),
        ],
      }),
    }),
  P1 = () =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsx(S1, {}),
        s.jsx(C1, {}),
        s.jsx(L1, {}),
        s.jsx(A1, {}),
        s.jsx(I1, {}),
        s.jsx(_r, {}),
      ],
    }),
  R1 = () =>
    s.jsx(s.Fragment, {
      children: s.jsxs("main", {
        children: [
          s.jsx("h1", {
            className: "svelte-veednl tight",
            children: s.jsx("span", {
              slot: "title",
              className: "top-title svelte-88yij0",
              children: s.jsx("span", {
                className: "holder svelte-88yij0",
                children: "Notes.",
              }),
            }),
          }),
          s.jsx("div", {
            className: "wrapper svelte-fn0uxd",
            children: s.jsxs("div", {
              className: "svelte-fn0uxd",
              children: [
                "Some thoughts, reflections",
                s.jsx("span", { className: "amp", children: " & " }),
                "notes on design and development, along with some latest work in progress.",
              ],
            }),
          }),
        ],
      }),
    }),
  z1 = "/website/assets/icon-DFLscM2a.png",
  T1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAACZFBMVEUAAABbOQVgQABYOAhgOABcOQRcOQNdOQVcOQVcOARbOwVcOARbOgVaOAVQQBBcOQVcOgVbOAVbOgVcOQReOgNcOQZbOQVcOgZcOAZcOQVcOQVcOQRcOAVbOQVcOQRaOQVbOgZdOQVcOgRbOQdcOQVbNwVcOARcOQT///9cOQWaXAD/xXD59/T58eb0nyLu3cTjxJTa08nwkwimcB/jwY3Unk7Usn/y69/Xw6StfzrarGfRmELy6t/arGjy5M2QXxbguoH1vGmtcht3TQ6FVg/s1rNpQga6gCqEXCD49e9wRwqzhEDpz6f+rDL8qS13SwhuRAXt1rPVtojdiAjRoVrguoDAmV/2qDXnjQjOkTXdyazPmUfz48zp5d6ncCCVZR3MrYDUn07amDSxeSTTuJD58ua/hSzdiAfNrYD4r0Oxeyni3NSOWQnqnizt6ePGo2+PXBDk0rfhy6vQnVHzoy3glynm1r/WolVwSxNsQwfr4M/FiS6ZbS1zSAdySAjZwp/m1LmyeyllPwazhUCgZhCEVhCsdiPSuJDmyJr9vmOmcCD1oimvbAfrtGP5sknqni348ubVjyfflinhqlyEVRChbB3Ho3Dw3L/ZwqC4cQemZgb8+PK5cQesdiRwSxLGo3D26tnGiS/alzThq1z9v2Ph3NPt6uOOXxqcaiDYy7bYyrb26trcu4r8vF3evYy5j0/YtoTYt4TevY3btoBuRwvMmU6pcyTUggfChy7Bhi6xeSZuRgtlPgWBVRKdYAbqz6d8URCvawehbR21fCe1fSePXxeKXBW8giz49O+AUQnfxZ/rs2NwM8/KAAAAKHRSTlMA3xAgIO9Q3++AX0CfYBC/z6DPr0+vcH+Ab5CQv4+/kJ+Pf3DPcL/PsDVSRwAAA8tJREFUeF612PV34koUwPFJIAE2tEC77W67+naf3Aludbd1d3d3f+7u7u7u7q7/1CaZ0z4Kd4bAsN8fOKf94XPu5M6hBVImVW+ZG/L5qJUWDs0NGCoRJ8bm+GhJSlCvDjWaNMorqFc83DSNClOmeCU4nJzm2qtTEACd0hXnDVHXNbk4d4tGK8hfbkj1Mlphs8THbaAVF/YKPIVWkeKV9XAR96REsScvNlCJwmqJh9wXqdtTRyWbX7QQTRb0T15ME5UuhBxYrikFoFILUFEnvHlCYGHnFw8MRqODr13oXCgUp7u60p2D0XsObbgvkUhsePD16H/Xi/ailn+CLz4W/SCRmShhkVeXH5E74DUrRvr7Tx4trL9/ZMUYd0Tm6Txv7B9Ot/JEwwEjPPAGHngjD2yyPZXn7bhzD6cX3uKuRXDitzcJ2sERpwpOfIsIPMwBW7k7fnzoFRF43dAdKOjjPsJzy3Y7QH4g1/u/05sbyDvgq8uOUTSVGKj3/VkH7P4JrOJ5xu3aClaruhm4kvMQA5i3cs1yB1wFf+/deS3Eux0vDudP7OyBpxxw+RpUbMZ38kzGAXuhZ7tpmnfB3Zsc/Sbrh+090OWAmecxMEhCGLiRgUthvWl1O7xsg++BrZsvwVIGbsTAmSSMgRkGjsJHph3EbXAfmHa3wSgDM/ia/Rh4gIE5OMiIPhvcCkts8GnIMfArHKRYzzKw+zl40jSXtMOADa6D9ntNcz1AnoE/UiwcpPezLecAFrWD/dDYVqB9EUCObfkXWglIH2IXu6sP4GFLYK2LA/R18S62GHyEgVgMfJQH+jji4r9E4OHFHM+PgDLvNvRyEqotOJNERODaf5PJmzs2J5PJjg7rZXPHqWTy9BkRGCRXCMAt6W2x2JvpI7FYLJ22Xt5IH4/FtqXXCsAA0QXgahxcLQANotYWVAnxCY78Dga+u4UPKoSQGVzQEt9PpT5s+ziVSrW1WS+ftH2aSn1meVwwaIG6xLVB/4yqfoz7fPjL/eN9Pc58M/Grb4e/4zxCq0bE+yFb2ALmLcgW9jN6YjsDAZ/IFoklXvZX9MROyJmZUygyrzBsx6yAcELWb79ni+P8246v5Y9s2f4sHdBDkBElmk7GU2vzseJSfvAhIXmvkRTm8ct6modMqln+wEXNkPNaSXFqWMZrIKV5ZL7E8BBUlPRwUd7DRXmPieEq9oF4MrentZ6Iq/NXwmnNpGyeRvfelZ5L/6UuXsAFqQXqifs8dYoEh6dH+FqjQaqpXo8gc/rm6Mhw7lEjEJx9leZIvtnBlrLYRdHW6iE0LsbWAAAAAElFTkSuQmCC",
  M1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABYlBMVEUAAAB3IDBwIDB5IjN5IjJ5ITN5IjN4ITJ4IDJ5IzN3IjJ5IzN5ITKAIDB4IjN5IjJ5ITN4ITN3IDR5IzN4IjN7IDR6IjJ5IjJ3IjR5IDN5IjJ3JDR6IjN5ITJ6IzN5IjR4ITF4IjJ5ITN6IjN4ITN5IzN4IzN5IjJ5ITR5ITN5IjR5IjP/co7/tsSrQFXmY33/lKnMVGz/nLDET2buaIOaNkr3bYjdXnf/rb3/g5v/epX/qbnuk6SBJzn/pbbVWXHlY32aNkneXnfuo7KJLD60RVqrWWnEdYT3rLv/mKyKNEWKLD7NVGv/i6KSMUTekZ+8SmD/dpHvaIP/epTNVGz/kKb/pbf/nK//rr2jO0+0RVvMVGv/na+iO1CiO0/un67lmqmJNEXET2eBKzyBJzj/f5iaR1fuaILWiJbmmqjlY3zvo7HNf420YnKJNUX/h57/scCTMUT3bYm8SmH/j6X/ssHuAbqTAAAAK3RSTlMAIBDv39/f32BfgFDPEJDvr79Av59Pf3CAUM9Ab9+fj6CQv5+gr5+Pz6BwsbteJAAAA0lJREFUeF61mWV72zwUQGVImoahCOvK6ybJYSgz45iZmd73/y+2oiVxfCWn6s4X60N7nkvybVIkQY+MjWdME9cxRjLj4VEdwchlcRN3EJyOXEw6OmtgiOlI18ENGFhIsFdT1rmVA759oQAXyKL0pdMy2DdJH3mPGbgLDFmQ+jXcJVfF6c7jrolqAl8AX4CgpuyDjeo+bpT71I3zWIGojty45kV5ekJYkUFXAQ1VodFexlmszJQrYXVar3XgMoTBZqcHfAmsbYkx3OVIl8m5pC+6vwqWMWOlQoryEOUVvLPDT1lC8uIQmS8irhyx+PGYEEmMaUd4XSgsNR1rpM6GcMfYvpjQd0pItemu81jcFmnGT5tBPSM2lRWRsV+UsfOblu04tU9HJeLwUyScFPT4NxfWyVvW+S/CsIS3BS7hUYnXkONHiHU0CnV3kz0r3Qn7URi6Zw1h0S18KHnPTngL10iWHR65hRtC4RzKeFfw73ycu4U8Be/xSaER4MIRssOnuY0s/wkLaLP3Mik2xu9NRwnX+DujCAixJ1VHUF3nw7dwwoXcU8piTwDhLdLOIq29bRNapORTCEzfA0pZkNXG2JOKmnCVUrrgnHZs3zoBhQF5ylx4jx2rxXy9tEDKBiDMctFNwliiPETOpqdwBBjsY8J4ssiet6nN3VZhHhjsCWCwHXL0Oz/YFOQviTk06ClcYXH9aNTthDostZZhG9ikEcFk369LcoQsHlBGjaWfg0uI09COKtvCGnXhxPbf//bDgl6wKACGuEDdHNi30On2e2+fiRCaBEPM0Q5qhVXW7bK3sE+wRl+RAgUokKJgjcYMYItmYeEneEfVSUJ7bxkSLm9jKGObNAY4fO7te/ES3nkOBobY8/LtvYZ8JmKEMcjullu39U72ZztrC6w8a9Wd7WIYU0PCEDmHux8+7lO6//nL129YxBDixK7gS8D8lx980JS6L3nJHx4TGmpjUD1hF3E1Xxy5iUVVfFHUiaYwO2ykYaO6jxtVfepG7gONUeUv05SnJ64jMSGjq/txA0nRkv59KQ35IeSzN2Yv8suQD2ViSEf+0YAoYZ2c4RnYlkyji6APz3jE2RMfVvqPRTrcl4omHFNPqm9MKvsD5INaOX8yKJAAAAAASUVORK5CYII=",
  F1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABWVBMVEUAAABLKoFIKIBAIIBQKIBLKYFLKoJMKoBMKoFMK4FQMIBMKYBQIIBMKIBLKoFKKYFLKYBLK4FKKYBLK4JKKIBMKoFKKoBLKX9LKoFKKoBKKoFLKIFJKYBLK4FKKoJKKoFLKYFMKoJMKoBLK4FMK4FLKoBKKoBKKoBMLYBMK4BNKoJLKYFKKoJMLIBMKoBIKIBMLINLK4BMLIFMKYFNKoFLK39MKoBLKYBMKYBLKYBMKoBMKYFMKoFLKoFKKoFLKoCNR/9MKoCOR/+MSP9sOMBsOcCJRfdtOMBrOcB0PdCORv+MR/91PNCNRv9xOshtOL98QOBgM6iKRfd9QN9wOsh0PNB8QN90PM9cMaBKK4FzPdCPRv9wO8hULZCFQ++JRvd2PNB+P9+IRvdTLpFULZFjNbCHRvdcMaFbMaFTLZB5PthULpFSLpF5Pdd2PM99QOBsOb+PR/9kNbCoyktxAAAAPHRSTlMA3yAQIN+fgO/vEFAQQM/foO+Qj2DPgHDvYE9fUF9/37+vkL+/36/fUL+fz69Af0BvoG+/33Cv36+/z288wZV0AAAGSklEQVR4Xp2YBXvbSBCG13btUJMmadOmcCnCXXvMMLMkmZMy0zHz/X84L0izoEAzbmW5T/Xmm/lmdtdh+8TRcx/2LrfOIwpc27jSO/neUfb6QbB1SwJAGwo4R2z1zh0O+s7FNQNBdDjhoNxee+del9bZWkMfAE6hUhhE640jr5PruwsY8JxGEMitQq+3tXVg3umrwJHC8DwRQ9kzlQfCHbkcUqwjAL6axHey3z5A3u8vCAJGQQKJu7mfyKPH8wfNK0WT9cf3TnelwvCoXr4NI4Hg3zbau/PaLQuiOlElrRwOlUKAmg6tI7vqa7k8lAIMHqg1CsxDISIRM30OKFT0ANUQQsFAJSZiqs8zFEJggDAaY6CIbWomrmBzUL0EJwxQtQ17pZPxjtfOKiSBYD/lNQSImyDvntNJA3smmS2ISMigJU8lBi+QAio6yQULU0hBPAfcjI25aO0SzuRkKEgl8KywFJeThHmIST/Sw0194yMc6xZxsmgcOHKFokVOb+XdTy6rujlRcMxCkMY5amk/EI0BNrxjPJCaxXyHKuiMzDIlH1XzeojK+4UikPgxeBsEZrsRQKj8KfE45GMw73hL4LPJHQlLYaXECrOcli3wA0yAIrUbEJIK+ldahIuGt5j+byEevPoZ8cWrJwby5P49LaXUWpq4858BvLz31+zy9ePEHsBNY8ubub9SlxwnskTEfmFolqincjKZ9BGxnBQIQy2FSN05MwOu5vMh9QifSgO8O5GD8Xh7/PDZ+OH29sPfZuhfEPuyACilzjof1sMpoRrLnRJByiHiI6l/B4Da7z8G8o6RrRFLLa0vEbHF2CIgxK4IJWWfc6twIJ9BpOKBHCCOnhdGpm4YzQ5brjQDuayLspKpy8hP6EuJWBYasNSaViaoJvwMO4lQ4VRFLGYKcUeWtpoKwE0RmLoPJxJxKKVFJwoVmHV2lfrfD7/AaTEClBYo+wg86PJSGqCugCJGAvTYhcxjgxlxB9TmElQZLWZk89ZGoUi6/y22kY2YwqnBTL1CGjmhkFuF/xQSnMsq3q+MzQsk0Cv0unzKw3i5L+UE8bbUCAYt3PkEKiUwA9YCKMSMVafcDyRw7lIeFq6QdF6kd9ZQQlUYXdZlbe7CvhnJqXXG92EsBzwQkjbEaa1QToYIQCIdq5xo0zuadNFOw0LNBLQsV0jDQ3CueeCokAhD7zKZYm9Zi4AceWDKZMcAnw/rtJRLWVYpF9qYUvOENWeTnQ9L6In/7kQuG5+FuSrHEna18bMs4jV8hX2U7V/CdB+nSUHw+jhW4qixA1d8Y6/mLqMuRk4hzC6K+0dENSnCAvvamwIBEHrsk3AfAXc3LYaWZe76EA3D0IkrEMydifgQOseWiB+mjG4L0Po2nRORg0/ZLzluhYHwS9wyW3QCiCiUs8IvsLfc5CkU1rLHcmD3FF9IlSw22Im2AORVysaPaYn4rRy8DIfh16n823YMuJTBE/1f6DLGLgU0YYGi6mnEJ1LqP8ezDWo8/mZ7vL09kPKutRrsEIr01HQj3kb9+qoK6YDOBC0Lqc1roqWtrp8/rTELs40uLmSN8+y77wG3Bz8Y/o/3pWFOLfOnR27zf/XCXG5lZ3G0569r9JlzTINaVyQP83xHucFMLHsgHa/zYwwNGaEh2+ZNxiZszn5gKUJiss+SAmMzRZe5OJmIIm6ugZQ3fKU5a2jeFkXAGCa8+OjZ5pNut80qieAVcnMRquFRZf/skkN6aGeL3SxnSEaKqknJxyG6jOJEpgnSOxHfU6YAUFeQ4gJlQ7mlx3ZF+UNeiU9ZGO21MAVIqgcNfqc/ZL7Noji1S8Wh5gkgZFRPSjiKSzR3InAIgpxFAglHa52lsbiRSCSeByqe2kbvN1ke7c84AuVGfQOQJZiCj7VZE/FY02JDv8MJa0IhgHgZsRt+XaTgqUKIppnTyDUSRVp4jnuEQCB9DcQV41y68gAkkKglb8a8vHswGxVri4h/h1Ez1zts7zixFvEgWLMBM+D8KbZvtD/PRpk4yT9/QenuKfIYMRQdDwE5h0A3ds+yg8ZcN5xZjgDencDx+bkOO3i0T1RIZZmGpwQeAkextOp50Y4IlnZtmR0mOkurXQQHFLXA6+tLJO4Q0OW53oUv540L169e6X21L+x/TGGyj5mxFuEAAAAASUVORK5CYII=",
  D1 = "/website/assets/icon-DL1Ez9re.png",
  O1 = () =>
    s.jsx(s.Fragment, {
      children: s.jsx("div", {
        children: s.jsx("div", {
          className: "showcase-holder svelte-88yij0",
          children: s.jsxs("div", {
            className: "showcase svelte-88yij0",
            children: [
              s.jsx(Le, {
                to: "/Css",
                className: "showcase-block svelte-88yij0",
                "data-sveltekit-preload-code": "",
                "data-sveltekit-preload-data": "",
                children: s.jsxs("div", {
                  className: "showcase-inner svelte-88yij0",
                  children: [
                    s.jsxs("div", {
                      className: "deets svelte-88yij0",
                      children: [
                        s.jsx("div", {
                          className: "title svelte-88yij0",
                          children: "CSS for the shell of it",
                        }),
                        s.jsx("span", {
                          className: "description svelte-88yij0",
                          children: "Not all work needs to lead somewhere.",
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "showcase-icon svelte-88yij0",
                      children: s.jsx("div", {
                        className:
                          "display: contents; --radius: 0; --shadow: none",
                        children: s.jsx("figure", {
                          className: "svelte-cmqfoo",
                          children: s.jsx("img", {
                            src: z1,
                            alt: "",
                            width: "80",
                            height: "80",
                            loading: "lazy",
                            className:
                              "svelte-cmqfoo fit skip fullwidth loaded",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              s.jsx(Le, {
                to: "/Ai",
                className: "showcase-block svelte-88yij0",
                "data-sveltekit-preload-code": "",
                "data-sveltekit-preload-data": "",
                children: s.jsxs("div", {
                  className: "showcase-inner svelte-88yij0",
                  children: [
                    s.jsxs("div", {
                      className: "deets svelte-88yij0",
                      children: [
                        s.jsx("div", {
                          className: "title svelte-88yij0",
                          children: "How I leverage AI in my everyday work",
                        }),
                        s.jsx("span", {
                          className: "description svelte-88yij0",
                          children:
                            "AI is here to eat all the things. Here`s how I use it to my advantage.",
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "showcase-icon svelte-88yij0",
                      children: s.jsx("div", {
                        className:
                          "display: contents; --radius: 0; --shadow: none",
                        children: s.jsx("figure", {
                          className: "svelte-cmqfoo",
                          children: s.jsx("img", {
                            src: T1,
                            alt: "",
                            width: "80",
                            height: "80",
                            loading: "lazy",
                            className:
                              "svelte-cmqfoo fit skip fullwidth loaded",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              s.jsx(Le, {
                to: "/Throwaways",
                className: "showcase-block svelte-88yij0",
                "data-sveltekit-preload-code": "",
                "data-sveltekit-preload-data": "",
                children: s.jsxs("div", {
                  className: "showcase-inner svelte-88yij0",
                  children: [
                    s.jsxs("div", {
                      className: "deets svelte-88yij0",
                      children: [
                        s.jsx("div", {
                          className: "title svelte-88yij0",
                          children:
                            "Throwaway projects are the best kinds of projects",
                        }),
                        s.jsx("span", {
                          className: "description svelte-88yij0",
                          children:
                            "Not all ideas are good ideas. But thats a good thing.",
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "showcase-icon svelte-88yij0",
                      children: s.jsx("div", {
                        className:
                          "display: contents; --radius: 0; --shadow: none",
                        children: s.jsx("figure", {
                          className: "svelte-cmqfoo",
                          children: s.jsx("img", {
                            src: M1,
                            alt: "",
                            width: "80",
                            height: "80",
                            loading: "lazy",
                            className:
                              "svelte-cmqfoo fit skip fullwidth loaded",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              s.jsx(Le, {
                to: "/Architecture",
                className: "showcase-block svelte-88yij0",
                "data-sveltekit-preload-code": "",
                "data-sveltekit-preload-data": "",
                children: s.jsxs("div", {
                  className: "showcase-inner svelte-88yij0",
                  children: [
                    s.jsxs("div", {
                      className: "deets svelte-88yij0",
                      children: [
                        s.jsx("div", {
                          className: "title svelte-88yij0",
                          children: "Architecture",
                        }),
                        s.jsx("span", {
                          className: "description svelte-88yij0",
                          children:
                            "I`m reworking my Cover Status plugin for Figma, here`s a sneak peak.",
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "showcase-icon svelte-88yij0",
                      children: s.jsx("div", {
                        className:
                          "display: contents; --radius: 0; --shadow: none",
                        children: s.jsx("figure", {
                          className: "svelte-cmqfoo",
                          children: s.jsx("img", {
                            src: F1,
                            alt: "",
                            width: "80",
                            height: "80",
                            loading: "lazy",
                            className:
                              "svelte-cmqfoo fit skip fullwidth loaded",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              s.jsx(Le, {
                to: "notes/prototyping",
                className: "showcase-block svelte-88yij0",
                "data-sveltekit-preload-code": "",
                "data-sveltekit-preload-data": "",
                children: s.jsxs("div", {
                  className: "showcase-inner svelte-88yij0",
                  children: [
                    s.jsxs("div", {
                      className: "deets svelte-88yij0",
                      children: [
                        s.jsx("div", {
                          className: "title svelte-88yij0",
                          children:
                            "Flash to Figma: My love story with prototyping tools",
                        }),
                        s.jsx("span", {
                          className: "description svelte-88yij0",
                          children:
                            "I`ve witnessed coding simplify and prototyping principles endure.",
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "showcase-icon svelte-88yij0",
                      children: s.jsx("div", {
                        className:
                          "display: contents; --radius: 0; --shadow: none",
                        children: s.jsx("figure", {
                          className: "svelte-cmqfoo",
                          children: s.jsx("img", {
                            src: D1,
                            alt: "",
                            width: "80",
                            height: "80",
                            loading: "lazy",
                            className:
                              "svelte-cmqfoo fit skip fullwidth loaded",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    }),
  _1 = () =>
    s.jsxs(s.Fragment, {
      children: [s.jsx(R1, {}), s.jsx(O1, {}), s.jsx(_r, {})],
    }),
  B1 =
    "data:image/svg+xml,%3csvg%20fill='none'%20height='66'%20viewBox='0%200%2066%2066'%20width='66'%20%3e%3cpath%20d='m28.1267%204.23225c1.1879-5.175299%208.5587-5.175287%209.7466.00001l3.7596%2016.38014c.4287%201.8676%201.8871%203.326%203.7547%203.7547l16.3802%203.7596c5.1752%201.1879%205.1752%208.5587-.0001%209.7466l-16.3801%203.7596c-1.8676.4287-3.326%201.8871-3.7547%203.7547l-3.7596%2016.3802c-1.1879%205.1752-8.5587%205.1752-9.7466-.0001l-3.7596-16.3801c-.4287-1.8676-1.8871-3.326-3.7547-3.7547l-16.38015-3.7596c-5.175299-1.1879-5.175287-8.5587.00001-9.7466l16.38014-3.7596c1.8676-.4287%203.326-1.8871%203.7547-3.7547z'%20fill='%23fff'/%3e%3c/svg%3e",
  U1 = () =>
    s.jsx(s.Fragment, {
      children: s.jsxs("main", {
        children: [
          s.jsx("h1", {
            className: "svelte-veednl tight",
            children: s.jsx("span", {
              slot: "title",
              className: "top-title svelte-18wal5",
              children: s.jsxs("span", {
                className: "holder svelte-18wal5",
                children: [
                  "Projects.",
                  s.jsx("span", {
                    className: "stars svelte-18wal5",
                    children: s.jsx("figure", {
                      className: "svelte-cmqfoo",
                      children: s.jsx("img", {
                        src: B1,
                        alt: "",
                        width: "",
                        height: "",
                        loading: "lazy",
                        className: "svelte-cmqfoo skip loaded",
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
          s.jsx("div", {
            className: "wrapper svelte-fn0uxd",
            children: s.jsxs("div", {
              className: "svelte-fn0uxd",
              children: [
                "A collection of tools, web apps and sites I`ve created, designed to be helpful, fun, ",
                s.jsx("span", { className: "amp", children: "&" }),
                " sometimes just a little bit weird.",
              ],
            }),
          }),
          s.jsx("br", {}),
          s.jsx("br", {}),
        ],
      }),
    }),
  V1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAmVBMVEUfMio7OkBkR2GATniOUoM6OkBWQlacV47ha8b9c9yqW5pIPkzFY7Dvb9G4XqXFYrC3X6VJPkuqW5mOU4MtNjWcVo7TZ7tXQlapW5lySm2qWpqqWplySmxkRmHcZsFiN1x4P27cYsBXNVNMMEr9ctzha8V4QW/9cdzRYrhiOF3GXq+DRXjyb9O4X6Xna8pJPky7WqZyS2y4XqSJRuT8AAABlElEQVR4Ae3XVYLlIBCF4UOHG+rMhFai7e66/72N0p7csRqv7zH2B54KGGOMMcYY829wC4X3xcIMP00ZhJm8+TmdtxXJuBi8D0uR5PJPyAQyhhLZyqqQa9CVKjIkPOFqsplB0UwoJV5YEYpmpaE4vOKEDdSE3BipBChZId3knRY6hGuY4FlBRUnBlBSVltKxB372UkiHSYkxqexWhTkalf0qGDBHzUIh8oWvFBwUIuvsMcfGD0XSWiUfRT4Rq5lqpOG4VjHSU0r30Sa3th/s7LLBM54e361i/uVE7u0/2D6ge/HcJr7bId3DZ472Hx2/iEQ6jYjnyXSkZwONSCJPJyMVe5UIVnk2Fekp0Im4yPPxSBL2ShEUvDgdjVxSoBVBx6vTkYinOL1Ianh19DKSOsZr6EWQLsmb02eRUnJDI5J58upjJkfKihQH5QjcJcmrswO27W0QMvoE9UiesrOcUI7kTkHK0lCUyJQjGYnsn4xYZGIynKlG/OiJMHW8g54kHBUdFLnVOJJYcvivGGOMMcYYY94DW6EoVFVi/9EAAAAASUVORK5CYII=",
  H1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAC3FBMVEUfMiotPzdXZWBzf3qPmZVlcm1JWFKBjIfHzMr+/v/5+f/29v/y8//4+f/7+//w8vGrsq/z9P/r7P7k5v7j5v7m5/7u7/7j5eQ7S0Tj5f7n6P6dpqLs7/Hw8f7V2dfi5f7o6v7f4uQtPzje4OTi5P7Fysrp6/7h5P7h5P3k5/LY2+Th4/7h4/3j5f2nr6/l5v3g4/3e4fG7wcng4/7i5f1/i4jg4v2ss7xVY2Df4v3c3vFrd3ra3v7R1f7Kzv/Fyf/Bxv/DyP/O0v46TVGDjpTf4f3d4P65vv+zvfymuvOou+uElrdWaXd/iZTV2f6+wv+osvdxjtx1kt+Fn+WZsO6fst7e4f3d3/7Jzv6irvRwjNt4k98xRETe4P3Axf+Yp+9ui9ugtOhMX2uJnuhsidtsittwjd2bse/d4P1zkN9qiNqNpOB+iJTd3/3Q0/6qs/hohtlnhtqRp9goOzfc3/2Fm+dmhdljd4+ut/pkhNlkg9mBm9vc3v2CmOdigtjb3v3Y2v6Rou1ggNhhgdlkfrRUXmRff9def9ckMCzN0O3IzP5dftdcfddHW2kdLydvcoHa3f1bfNZafNZDW3odJySxtM5wi+BZetZYetZZe9ZBW4IhJSijpr6grfVXedVWedU6VYAbLCUHCglRUl/Z3P3Bx/yaqPKNn+x6kuVigNpUd9VVd9VVeNUTHxoODhAbHCAlKzpTdtRSddRTddQ4VH8bKyUWJB5NbcZRdNRQdNQ+WqFPctNPc9M3Un8gME1NcdNOcdM1UH4aKipGaMVLb9JLcNJMcNIiM19JbtJKbtIRHRg6WapHbdFHbNFIbdEzT34OFiJBZMRFa9EuSHEXJERDatBDadAeMD8XJk49YsNBaNBCaNA2VKkZKCIKEB04WrY/Zs9AZs9AZ88EBgUfMmg+Zc89ZM89Zc8PGRUIDBoxUag8Y84tSpsLEiYEBg0PGTMZK1odMWcRHRcQGRXMYHWEAAAC7klEQVR4Ae3WNZQsRRhH8fuv8ef+XoK7u7uES4KlkB8iSAlxi0hxQtzd3SHC3W3dRvrjVPdKz57VnsLrN673lIwQRVEURVEURf88YnkkCaTmnxZRVV6WGkr+lEit7iRABk7jq/qbwSM7BhrlMrQqQHqhkbXfBY5Ut43VmKOs5o/hIr4xvgaaVX/y56RXatLn4SI7Vg9sZB5jqz8JF9ltZD3zcl9NhoqUNm0iJQxApuwSc/0/BorsL2H+2KpY2pg+yZw+CBMpHdgxRNYhY4hy20Rl8PMgkcPVYUFlvRkiol22sQi9zjI5FnbMthIlMumV/HX/UIiRnJAwv5IyTweInCnmoXZSw5P3UK/T1Zj3zkYla1D3zutjaWUWsZG5pP7ZnADZebU7e5muszYwR7P2EzN2CG9ovW4uPpJ55BuUBcg2S30P9RBZTbeBfnKqYsouZzxdeLouEl30ETn7SkZmdK2u72G6asBkbZLUV8w/EKoDG4uPpE5es2sgh0kmPBNo4voeF74+gTdAXkXkDFcLj2Rzp0TKX+pVco5X7sdMhru0YOTyJjkvVpjVOFpgIEOYjG9WXV8scpXGmLX66VzjiDoCE54hky4ptiZV1Zh1fzU3V+tICZPJAIlikYtvVIsZxpTDdpam3tpwSZpyFI3QXFsbYY7zv1xXR8DUIOQvABX+t3KbNLSejCZoSBLIQBi4RCKRObDRC4tG4O7RNSIlydJAeolJCTKX+BbC9RX/MJ7DDfuQmhkEsqmjl11qEgqPJO8J5f5CZhGZSBuYOyPI70lZU4mpSo4MR6iIBAnqzihxBu0w03XDcRI2s7Xy2mUmTwkS4Q0p95psD5Nx6LAwEd6TWIgOCvRH4v0jJENgAstvNXAEGgmP7C6JtIOBDNKUkPYIFeHuwyQAATJzRsYGDiVYhNtOl2R4LvFHTzb8+gUBI/Cj+jeJLtJz5xA0wm1rRvskMc06D5+wB2Ej3g37npiL/LIHURRFURRFURTSH2kS33PvN+FCAAAAAElFTkSuQmCC",
  W1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABQVBMVEUfMipzbDf/zE3HpURQp/ctPCzxwktJTzH/z1j/////0mOPfzs7RS/juUmBdTqPmZWPfzzHzMpXWTL/6bFXWTP/9d3/+OjVr0bj5eT/8tKBdTk7RS7/2Xo4bZFlYjWrk0D/5qb/7Lz/8tPjuUhJWFL/35BXZV81ZoRzf3r/1W+rsq+rkkCHs8L/9d5zazediT6yvJdJTzCdpqJbqezp9P65m0L//PQrT13/+ej/6LH/5aYyXndNoOplcm0iOjfTw3jx8vGStbf/+em9vo1KmN70ylj/45uBjIg+e6p8scxEisTVr0dmq+Kn0/tBVEgxXndKmN1lYzSdpaH/67zT6f2y2fv/7L29vow7S0VbrPiPmZQoSFH/78g7dJ6ouqIlQETpx2L/9t58vfmyvJi9zsSnuqKdiT1lYzW5nEKPmJSBjIepEm/sAAACyklEQVR4Xu3Y1Y7jMBQG4GMIlpmGmZmWmZmZed//AdbepkfutDMZx7ka+bv8ZfXXsSOrCZwilmVZlmVZnSckI5DyJvQ7l1ZBnrkUuSyfBfSB3wZzTp7RAQ3iRHNwzueNKzIuHSqXkeN8ui5Kzl8EIwQrBuUIwCiXRsFAh9FjjT/kgtko3jSNcYVzw1EIjfOZc8NRMjTWNd4zmvoc6D7HUSAJj8a7xBHfB32d6Mzjjh3dBX3L9AS2OUpy9IRq7Za0n+pmoW9cNW/29IaLIz7t58voB0cJHmJHGcQ/Ww+E2qwa1f5H340mIRQtHgSR1bA3WC/a4ap3oOcedoR7AbrqY0fkq9LxGPR0KJJzoKnD0XOl5BHoaWPHbCBc/jMztxRII2r0VAQPsONjG/QwLPkiOpqvQVgIhDMiagXCDAgzInnxhkvbG5SBHpdG/EB42w1L8lREJqOlbiTH23m1cmdl4walbtKrMQyEuW76NxCi6AIAToeLs6CjjCXqLxZEx1403ILa2zMGOtawxFf2pilKWiKTz3RJ3cEekvROmQqEW91BooN/JqMCRi+xJJO0ZCSQSoWtZiCFGDULWyWMDEpwFDRBpYoaVWgKJf5BgCajaDVA72nSkjWq8Cejir2bmFXUORIe/BjtE07W6vXWhK9GlVa9XpsIqaqqfz/q87SvFX1ukgsS/TzqH/Gypy5kSa561AYoDqnJ/QL43b/M4FCYSBzCqMrdrR5elwWj/WqD5FTz67tMWF4n3uAfwAaA0X652ROsIqDLcakqN7Sl3LfEMX41yVXjpi0CJB4FjR8apsyGzGr+BsTIJnQ55Qyj/QgkwugQDSZMD+bjgNJ8CTLbLORpX40GxxKPgIEiPZEiGCEGc6T52SPngbFOzEswy0IayDHDuARS0ikeUeMWHUiPQxp0AMtrVBh96EyfVyUZgYxl4fSwLMuyLMv6B3ySRosJm/xZAAAAAElFTkSuQmCC",
  Q1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABlBMVEUfMir78N0Wxn7YAAAAcUlEQVR4Ae3PAQZDMRCE4YllC+8AAXq19iSbY6S3CyiAUgjCloLFRBW8ID/Cxw6C3TrZEG9cqcqBzKX38YJyXR5cdPfu8TKqIkhvXPGS7+TARMmHeCf6q1QAZC41d39O9H3O1u8/wAqubSKYB0TtlusDjTdE76NR8TwAAAAASUVORK5CYII=",
  K1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUfMip8mul2k91lgLlwjdElOTZZc6ErP0I3TFlOZolCWXJ2lN1feq1qh8UlODZrhsU2TFpIX31fea1xjdFCWXFIX35UbJVTbJUwRU5IYH0qP0I8UmZUbZUxRU1qhsVrh8VIYH5TbZZHYH5NZooPB2nQAAABNUlEQVR4Xu3Ux4rDQBAE0KqJysFxc/z/f9yDQRgs2cP2aDFsv2sfmg4UfkEppZRSSilVWENjd1hRtDxxEfkUY7M1pHlvygKIjmb/BF851g/Iw5eGZ1zYsPWnUqDzyMAfeGHaUtfzEXKj4aUwlXe0EDtwzjDVO9YQ8pazIiYkhFrOe556RPEkBy54ObtJA5Edl9QRJ9GxgkR0nCz8cGzZQiTwmlC8FqWR5kpkAhulgyQoIeOYoIZIwSQDJEqmEMZjwyQNJHomcZAw5PqXZ6I/aXL/69oyydv9v/BIrh9egyBWMl/eAeuHV4BMxwQRQsf1BwE6wxtchNgHb6iQQLiwT2RheUWLPLqei6xHLseEXclVjjPMF7KKYWYMj9xicDxjvj1WMZSb3pBmu9kP+EeUUkoppZRSP1I3C70qxhx9AAAAAElFTkSuQmCC",
  J1 = () =>
    s.jsxs("div", {
      children: [
        s.jsx("div", {
          className: "timeline-holder svelte-c4ft01",
          children: s.jsx("div", {
            className: "grid svelte-885gk8 xs",
            children: s.jsx("h2", {
              className: "item svelte-885gk8",
              children: "Web Projects",
            }),
          }),
        }),
        s.jsx("div", {
          className: "showcase-holder svelte-18wal5",
          children: s.jsxs("div", {
            className: "showcase svelte-18wal5",
            children: [
              s.jsx(Le, {
                to: "/WebProjects",
                className: "showcase-block svelte-18wal5",
                children: s.jsxs("div", {
                  className: "showcase-inner svelte-18wal5",
                  children: [
                    s.jsxs("div", {
                      className: "deets svelte-18wal5",
                      children: [
                        s.jsx("div", {
                          className: "title svelte-18wal5",
                          children: "Web Applications built",
                        }),
                        s.jsx("span", {
                          className: "description svelte-18wal5",
                          children:
                            "Always keep track of whats supposed to be done - comes in nasty pink... Here you will find multiple fully functional web applications that I built using React, TypeScrypt, Css(Tiwind) and HTML.",
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "shot-holder svelte-18wal5",
                      children: s.jsx("div", {
                        className: "shot svelte-18wal5",
                        children: s.jsx("figure", {
                          className: "svelte-cmqfoo",
                          children: s.jsx("img", {
                            src: V1,
                            alt: "",
                            width: "100",
                            height: "100",
                            loading: "lazy",
                            className: "svelte-cmqfoo skip fullwidth loaded",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              s.jsx(Le, {
                to: "#",
                className: "showcase-block svelte-18wal5",
                children: s.jsxs("div", {
                  className: "showcase-inner svelte-18wal5",
                  children: [
                    s.jsxs("div", {
                      className: "deets svelte-18wal5",
                      children: [
                        s.jsx("div", {
                          className: "title svelte-18wal5",
                          children: "Custoji",
                        }),
                        s.jsx("span", {
                          className: "description svelte-18wal5",
                          children:
                            "Create emojis that-should-not-be to torment your friends with.",
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "shot-holder svelte-18wal5",
                      children: s.jsx("div", {
                        className: "shot svelte-18wal5",
                        children: s.jsx("figure", {
                          className: "svelte-cmqfoo",
                          children: s.jsx("img", {
                            src: W1,
                            alt: "",
                            width: "100",
                            height: "100",
                            loading: "lazy",
                            className: "svelte-cmqfoo skip fullwidth loaded",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              s.jsx(Le, {
                to: "#",
                className: "showcase-block svelte-18wal5",
                children: s.jsxs("div", {
                  className: "showcase-inner svelte-18wal5",
                  children: [
                    s.jsxs("div", {
                      className: "deets svelte-18wal5",
                      children: [
                        s.jsx("div", {
                          className: "title svelte-18wal5",
                          children: "Cover Status",
                        }),
                        s.jsx("span", {
                          className: "description svelte-18wal5",
                          children:
                            "Let folks know what`s up with status thumbnails for your work.",
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "shot-holder svelte-18wal5",
                      children: s.jsx("div", {
                        className: "shot svelte-18wal5",
                        children: s.jsx("figure", {
                          className: "svelte-cmqfoo",
                          children: s.jsx("img", {
                            src: K1,
                            alt: "",
                            width: "100",
                            height: "100",
                            loading: "lazy",
                            className: "svelte-cmqfoo skip fullwidth loaded",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        s.jsx("div", {
          className: "timeline-holder svelte-c4ft01",
          children: s.jsx("div", {
            className: "grid svelte-885gk8 xs",
            children: s.jsx("h2", {
              className: "item svelte-885gk8",
              children: "Architecture Projects",
            }),
          }),
        }),
        s.jsx("div", {
          className: "showcase-holder svelte-18wal5",
          children: s.jsx("div", {
            className: "showcase svelte-18wal5",
            children: s.jsx(Le, {
              to: "#",
              className: "showcase-block svelte-18wal5",
              children: s.jsxs("div", {
                className: "showcase-inner svelte-18wal5",
                children: [
                  s.jsxs("div", {
                    className: "deets svelte-18wal5",
                    children: [
                      s.jsx("div", {
                        className: "title svelte-18wal5",
                        children: "Theme Time",
                      }),
                      s.jsx("span", {
                        className: "description svelte-18wal5",
                        children:
                          "Check your time here... but the year`s 1999.",
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "shot-holder svelte-18wal5",
                    children: s.jsx("div", {
                      className: "shot svelte-18wal5",
                      children: s.jsx("figure", {
                        className: "svelte-cmqfoo",
                        children: s.jsx("img", {
                          src: Q1,
                          alt: "",
                          width: "100",
                          height: "100",
                          loading: "lazy",
                          className: "svelte-cmqfoo skip fullwidth loaded",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        }),
        s.jsx("div", {
          className: "timeline-holder svelte-c4ft01",
          children: s.jsx("div", {
            className: "grid svelte-885gk8 xs",
            children: s.jsx("h2", {
              className: "item svelte-885gk8",
              children: "Art Projects",
            }),
          }),
        }),
        s.jsx("div", {
          className: "showcase-holder svelte-18wal5",
          children: s.jsx("div", {
            className: "showcase svelte-18wal5",
            children: s.jsx(Le, {
              to: "#",
              className: "showcase-block svelte-18wal5",
              children: s.jsxs("div", {
                className: "showcase-inner svelte-18wal5",
                children: [
                  s.jsxs("div", {
                    className: "deets svelte-18wal5",
                    children: [
                      s.jsx("div", {
                        className: "title svelte-18wal5",
                        children: "ChitChat",
                      }),
                      s.jsx("span", {
                        className: "description svelte-18wal5",
                        children:
                          "Chat, rage, or table flip about design with your team with this chat app prototype.",
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "shot-holder svelte-18wal5",
                    children: s.jsx("div", {
                      className: "shot svelte-18wal5",
                      children: s.jsx("figure", {
                        className: "svelte-cmqfoo",
                        children: s.jsx("img", {
                          src: H1,
                          alt: "",
                          width: "100",
                          height: "100",
                          loading: "lazy",
                          className: "svelte-cmqfoo skip fullwidth loaded",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        }),
      ],
    }),
  Y1 = () =>
    s.jsxs("div", { children: [s.jsx(U1, {}), s.jsx(J1, {}), s.jsx(_r, {})] }),
  X1 = () =>
    s.jsx(s.Fragment, {
      children: s.jsxs("main", {
        className: "svelte-1p8u9ev",
        children: [
          s.jsx("div", {
            className: "article-holder svelte-9xj1dk",
            children: s.jsx("div", {
              className: "article-inner svelte-9xj1dk",
              children: s.jsxs("div", {
                className: "article svelte-9xj1dk",
                children: [
                  s.jsxs("article", {
                    className: "svelte-9xj1dk",
                    children: [
                      s.jsx("div", { className: "close-holder svelte-9xj1dk" }),
                      s.jsx("h1", { children: "Web Projects" }),
                      s.jsxs("div", {
                        className: "date svelte-y08q9b",
                        children: [
                          s.jsx("span", {
                            className: "mood svelte-y08q9b",
                            children: "Feeling puntastic",
                          }),
                          s.jsx("span", { children: "•" }),
                          s.jsx("span", {
                            children: s.jsx("time", {
                              title: "Dec 27, 2023",
                              dateTime: "Dec 27, 2023",
                              children: "3 months ago",
                            }),
                          }),
                        ],
                      }),
                      s.jsx("div", {
                        className: `
                  display: contents;
                  --radius: var(--radius-base);
                  --margin: 0 0 var(--spacing-xs);
                `,
                        children: s.jsx("figure", {
                          className: "svelte-cmqfoo",
                          children: s.jsx("img", {
                            src: "../assets/images/AboutImages/large-07.png",
                            alt: "Abstract image dipicting the website templates I built",
                            width: "100%",
                            height: "auto",
                            loading: "lazy",
                            className:
                              "svelte-cmqfoo fit skip fullwidth loaded",
                          }),
                        }),
                      }),
                      s.jsx("h2", { children: "How I source up my ideas" }),
                      s.jsx("p", {
                        children:
                          "CSS art never captivated me from a creator`s perspective. Despite seeing amazing examples, the idea of investing time in what seemed like an aimless endeavor puzzled me. To me, design was a tool for communication and problem-solving, not an end in itself.",
                      }),
                      s.jsxs("p", {
                        children: [
                          "Yet, during an intense period — wrapping up my final months at Help Scout",
                          s.jsx("a", {
                            href: "https://www.helpscout.com/ai-features/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: "shipping neat features",
                          }),
                          ", diving into an",
                          s.jsx("a", {
                            href: "https://www.droplette.app/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: "ambitious AI side project",
                          }),
                          ", quietly",
                          s.jsx("a", {
                            href: "https://www.docsthemepro.com/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: "launching another",
                          }),
                          ", and on the cusp of leading design at",
                          s.jsx("a", {
                            href: "https://www.givedirectly.org/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: "GiveDirectly",
                          }),
                          "— I found myself completely fatigued. It wasn`t just physical exhaustion; I was creatively spent. The past year of purpose-driven work had made me drained.",
                        ],
                      }),
                      s.jsx("h2", { children: "Code as a refuge" }),
                      s.jsx("p", {
                        children:
                          "Over the years, coding had become a refuge of sorts. It engaged my brain in ways designing didn`t. So much of its binary in aspect. It either works or it doesn`t. The grey area often found when designing is less apparent with code, and so it had evolved into an enjoyable pastime.",
                      }),
                      s.jsx("p", {
                        children:
                          "I craved a project that would let me wear my coding hat whilst creating something visually appealing, without the usual heavy scrutiny.",
                      }),
                      s.jsxs("p", {
                        children: [
                          "During this time, Teenage Engineering launched the",
                          s.jsx("a", {
                            href: "https://teenage.engineering/products/ep-133",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: "ep-133",
                          }),
                          ". Designers tend to fawn over all their gadgets, with fairly good reason. In my opinion, their devices showcase the creativity and playfulness often missing in designers`` lives.",
                        ],
                      }),
                      s.jsx("p", {
                        children:
                          "For the first time, I was interested in recreating something with CSS for the sake of it. It was time to disengage my design brain and play!",
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("p", {
                            className: "ep-133-holder svelte-1u4x8wq",
                            children: "here is a portfolio website",
                          }),
                          s.jsx("div", {
                            className: "ep-133-holder svelte-1u4x8wq",
                            children: s.jsx("img", {
                              src: "../resources/showcase/showcase_browso-dm.png",
                              alt: "image",
                            }),
                          }),
                        ],
                      }),
                      s.jsx("p", {
                        children:
                          "Above is the outcome. Switching to `blueprint`` mode, you can see the underlying structure. It`s interesting to see how clear and simple the layout is when the complexity of the visuals is stripped away. The excellent UI and colour choices by Teenage Engineering are what makes this device so tactile and appealing, in my view.",
                      }),
                      s.jsx("p", {
                        children:
                          "Here`s a short walkthrough for how I approached the project.",
                      }),
                      s.jsx("h2", { children: "Getting the colours right" }),
                      s.jsx("p", {
                        children:
                          "An important first step — getting the colours right. I used the reliable eye-picker tool to identify the gradient values for each element and then replicated these elements in Figma.",
                      }),
                      s.jsx("div", {
                        className: `
                  display: contents;
                  --radius: var(--radius-base);
                  --margin: 0 0 var(--spacing-xs);
                `,
                        children: s.jsx("figure", {
                          className: "svelte-cmqfoo",
                          children: s.jsx("img", {
                            src: "https://www.luckiemumba.xyz/notes/cssart/ep133-colors.png",
                            alt: "colour palette for the ep-133",
                            width: "100%",
                            height: "auto",
                            loading: "lazy",
                            className: "svelte-cmqfoo fit skip fullwidth",
                          }),
                        }),
                      }),
                      s.jsx("p", {
                        children:
                          "From there I switched to Figmas dev mode to see the generated code. This is a great way to get a head start on the CSS. I copied the values and pasted them into my CSS file.",
                      }),
                      s.jsx("div", {
                        className: "callout svelte-n9q8ts",
                        children:
                          "This approach is fine for CSS art, but I`m hesitant to recommend it for production code. I found the CSS generated by Figma at times confusing when using CSS variables.",
                      }),
                      s.jsxs("p", {
                        children: [
                          "If you dig into the code, you`ll notice quite a number of instances where I`ve used CSS grid. The overall architecture of the device lends itself well to this approach. The underlying code uses `",
                          s.jsx("a", {
                            href: "https://svelte.dev/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: "Svelte",
                          }),
                          ", which lets me tackle repeating divs with ease. Take, for example, the speaker located in the top right corner.",
                        ],
                      }),
                      s.jsxs("p", {
                        children: [
                          "There’s quite a few divs for the speaker vents (168!), but the code is clean and easy to read. Using",
                          s.jsx("code", { children: "nth-child" }),
                          " selectors, I can target specific vents and apply the appropriate colours and box-shadows.",
                        ],
                      }),
                      s.jsx("h2", { children: "To be continued" }),
                      s.jsx("p", {}),
                      s.jsx("p", {
                        children:
                          " Overall, I`m happy with the progress. There`s plenty of room for improvement.",
                      }),
                      s.jsx("p", {
                        children:
                          "The process, the learning, and the joy of creating something is just wondafoul . I`ll be back to create more in the future.",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "showcase-holder svelte-18wal5",
                    children: [
                      s.jsx("h2", { children: "Web Apps" }),
                      s.jsxs("div", {
                        className: "showcase svelte-18wal5",
                        children: [
                          s.jsx("a", {
                            href: "#",
                            className: "showcase-block svelte-18wal5 big",
                            children: s.jsx("div", {
                              className: "showcase-inner svelte-18wal5",
                              children: s.jsxs("div", {
                                className: "deets svelte-18wal5",
                                children: [
                                  s.jsx("div", {
                                    className: "title svelte-18wal5",
                                    children: "Clicker Game",
                                  }),
                                  s.jsxs("span", {
                                    className: "description svelte-18wal5",
                                    children: [
                                      "Instantly spec out your designs so developers can have no excuses. Here are some awesome websites and templates that i built, as part of my Css, HTML, and Javascript practices.",
                                      s.jsxs("ul", {
                                        children: [
                                          s.jsx("li", {
                                            className: "svelte-gfa3ns",
                                            children: s.jsx("a", {
                                              href: "#",
                                              target: "_blank",
                                              rel: "nofollow noreferrer",
                                              className: "svelte-gfa3ns",
                                              children: "Portfolio templates",
                                            }),
                                          }),
                                          s.jsx("li", {
                                            className: "svelte-gfa3ns",
                                            children: s.jsx("a", {
                                              href: "#",
                                              target: "_blank",
                                              rel: "nofollow noreferrer",
                                              className: "svelte-gfa3ns",
                                              children: "Portfolio templates",
                                            }),
                                          }),
                                          s.jsx("li", {
                                            className: "svelte-gfa3ns",
                                            children: s.jsx("a", {
                                              href: "#",
                                              target: "_blank",
                                              rel: "nofollow noreferrer",
                                              className: "svelte-gfa3ns",
                                              children: "Portfolio templates",
                                            }),
                                          }),
                                          s.jsx("li", {
                                            className: "svelte-gfa3ns",
                                            children: s.jsx("a", {
                                              href: "#",
                                              target: "_blank",
                                              rel: "nofollow noreferrer",
                                              className: "svelte-gfa3ns",
                                              children: "Portfolio templates",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  s.jsx("div", {
                                    className: "preview-holder svelte-18wal5",
                                    children: s.jsx("div", {
                                      className: "preview svelte-18wal5",
                                      children: s.jsx("div", {
                                        className: "svelte-l9lsq7",
                                        children: s.jsx("figure", {
                                          className: "svelte-cmqfoo",
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          s.jsx("a", {
                            href: "#",
                            className: "showcase-block svelte-18wal5",
                            children: s.jsxs("div", {
                              className: "showcase-inner svelte-18wal5",
                              children: [
                                s.jsxs("div", {
                                  className: "deets svelte-18wal5",
                                  children: [
                                    s.jsx("div", {
                                      className: "title svelte-18wal5",
                                      children: "Todo Application",
                                    }),
                                    s.jsx("span", {
                                      className: "description svelte-18wal5",
                                      children:
                                        "Always keep track of whats supposed to be done - comes in nasty pink... Here you will find multiple fully functional web applications that I built using React, TypeScrypt, Css(Tiwind) and HTML.",
                                    }),
                                  ],
                                }),
                                s.jsx("div", {
                                  className: "shot-holder svelte-18wal5",
                                  children: s.jsx("div", {
                                    className: "shot svelte-18wal5",
                                    children: s.jsx("figure", {
                                      className: "svelte-cmqfoo",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          s.jsx("a", {
                            href: "#",
                            className: "showcase-block svelte-18wal5",
                            children: s.jsxs("div", {
                              className: "showcase-inner svelte-18wal5",
                              children: [
                                s.jsxs("div", {
                                  className: "deets svelte-18wal5",
                                  children: [
                                    s.jsx("div", {
                                      className: "title svelte-18wal5",
                                      children: "Chat App",
                                    }),
                                    s.jsx("span", {
                                      className: "description svelte-18wal5",
                                      children:
                                        "Chat, rage, or table flip about design with your team with this chat app prototype.",
                                    }),
                                  ],
                                }),
                                s.jsx("div", {
                                  className: "shot-holder svelte-18wal5",
                                  children: s.jsx("div", {
                                    className: "shot svelte-18wal5",
                                    children: s.jsx("figure", {
                                      className: "svelte-cmqfoo",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          s.jsx("div", {
                            className:
                              "showcase-block coming-soon svelte-18wal5 big",
                            children: s.jsx("div", {
                              className: "showcase-inner svelte-18wal5",
                              children: s.jsxs("div", {
                                className: "deets svelte-18wal5",
                                children: [
                                  s.jsxs("div", {
                                    className: "title svelte-18wal5",
                                    children: [
                                      s.jsx("span", {
                                        className: "category-info",
                                        children: "Currently In The Workings",
                                      }),
                                      s.jsx("span", {
                                        className: "soon svelte-18wal5",
                                        children: "Coming Soon",
                                      }),
                                    ],
                                  }),
                                  s.jsx("span", {
                                    className: "description svelte-18wal5",
                                    children:
                                      "Document A11y concerns to start conversations with developers.",
                                  }),
                                  s.jsx("span", {
                                    className: "description svelte-18wal5",
                                    children:
                                      "Currently Creating an AI enhanced color palettes Plugin in Figma based on your color system.. Once its complete it will be available on this section..",
                                  }),
                                  s.jsx("span", {
                                    className: "description svelte-18wal5",
                                    children: s.jsx("b", {
                                      children: s.jsx("i", {
                                        children: "As for now stay tuned",
                                      }),
                                    }),
                                  }),
                                  s.jsx("div", {
                                    className: "preview-holder svelte-18wal5",
                                    children: s.jsx("div", {
                                      className: "preview svelte-18wal5",
                                      children: s.jsx("div", {
                                        className: "svelte-l9lsq7",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          s.jsx("a", {
                            href: "#",
                            className: "showcase-block svelte-18wal5",
                            children: s.jsxs("div", {
                              className: "showcase-inner svelte-18wal5",
                              children: [
                                s.jsxs("div", {
                                  className: "deets svelte-18wal5",
                                  children: [
                                    s.jsx("div", {
                                      className: "title svelte-18wal5",
                                      children: "Theme Time",
                                    }),
                                    s.jsx("span", {
                                      className: "description svelte-18wal5",
                                      children:
                                        "Check your time here... but the year`s 1999.",
                                    }),
                                  ],
                                }),
                                s.jsx("div", {
                                  className: "shot-holder svelte-18wal5",
                                  children: s.jsx("div", {
                                    className: "shot svelte-18wal5",
                                    children: s.jsx("figure", {
                                      className: "svelte-cmqfoo",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          s.jsx("a", {
                            href: "#",
                            className: "showcase-block svelte-18wal5",
                            children: s.jsxs("div", {
                              className: "showcase-inner svelte-18wal5",
                              children: [
                                s.jsxs("div", {
                                  className: "deets svelte-18wal5",
                                  children: [
                                    s.jsx("div", {
                                      className: "title svelte-18wal5",
                                      children: "Job Search",
                                    }),
                                    s.jsx("span", {
                                      className: "description svelte-18wal5",
                                      children:
                                        "Let folks know what`s up with status thumbnails for your work.",
                                    }),
                                  ],
                                }),
                                s.jsx("div", {
                                  className: "shot-holder svelte-18wal5",
                                  children: s.jsx("div", {
                                    className: "shot svelte-18wal5",
                                    children: s.jsx("figure", {
                                      className: "svelte-cmqfoo",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          s.jsx("a", {
                            href: "#",
                            className: "showcase-block svelte-18wal5",
                            children: s.jsxs("div", {
                              className: "showcase-inner svelte-18wal5",
                              children: [
                                s.jsxs("div", {
                                  className: "deets svelte-18wal5",
                                  children: [
                                    s.jsx("div", {
                                      className: "title svelte-18wal5",
                                      children: "Other",
                                    }),
                                    s.jsx("span", {
                                      className: "description svelte-18wal5",
                                      children:
                                        "Let folks know what`s up with status thumbnails for your work.",
                                    }),
                                  ],
                                }),
                                s.jsx("div", {
                                  className: "shot-holder svelte-18wal5",
                                  children: s.jsx("div", {
                                    className: "shot svelte-18wal5",
                                    children: s.jsx("figure", {
                                      className: "svelte-cmqfoo",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "showcase-holder svelte-18wal5",
                    children: [
                      s.jsx("h2", { children: "Web Templates" }),
                      s.jsxs("div", {
                        className: "showcase svelte-18wal5",
                        children: [
                          s.jsx("a", {
                            href: "#",
                            className: "showcase-block svelte-18wal5 big",
                            children: s.jsx("div", {
                              className: "showcase-inner svelte-18wal5",
                              children: s.jsxs("div", {
                                className: "deets svelte-18wal5",
                                children: [
                                  s.jsx("div", {
                                    className: "title svelte-18wal5",
                                    children: "Portfolio Templates",
                                  }),
                                  s.jsx("span", {
                                    className: "description svelte-18wal5",
                                    children:
                                      "Instantly spec out your designs so developers can have no excuses. Here are some awesome websites and templates that i built, as part of my Css, HTML, and Javascript practices.",
                                  }),
                                  s.jsx("span", {
                                    className: "description svelte-18wal5",
                                    children:
                                      "These are clean, modern and responsive professional looking resume / personal portfolio template for all types of career choices. well crafted Designed for user experience on multiple device screen sizes like laptops, desktops and smartphones. These templates give flexibilty to customise the theme easly as per the your requirements. Included with all latest technology HTML5, CSS3 and jQuery.",
                                  }),
                                  s.jsxs("span", {
                                    className: "description svelte-18wal5",
                                    children: [
                                      s.jsx("h4", { children: "Key features" }),
                                      s.jsxs("ul", {
                                        children: [
                                          s.jsx("li", {
                                            children: "Fully Responsive",
                                          }),
                                          s.jsx("li", {
                                            children: "Fully Customizable",
                                          }),
                                          s.jsx("li", {
                                            children: "Browser compatability",
                                          }),
                                          s.jsx("li", {
                                            children: "Multipurpose theme",
                                          }),
                                          s.jsx("li", {
                                            children: "Smooth Scrolling",
                                          }),
                                          s.jsx("li", {
                                            children: "All in One Page",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  s.jsx("div", {
                                    className: "preview-holder svelte-18wal5",
                                    children: s.jsx("div", {
                                      className: "preview svelte-18wal5",
                                      children: s.jsx("div", {
                                        className: "svelte-l9lsq7",
                                        children: s.jsx("figure", {
                                          className: "svelte-cmqfoo",
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          s.jsx("a", {
                            href: "#",
                            className: "showcase-block svelte-18wal5",
                            children: s.jsxs("div", {
                              className: "showcase-inner svelte-18wal5",
                              children: [
                                s.jsxs("div", {
                                  className: "deets svelte-18wal5",
                                  children: [
                                    s.jsx("div", {
                                      className: "title svelte-18wal5",
                                      children: "Company Tailored Templates",
                                    }),
                                    s.jsx("span", {
                                      className: "description svelte-18wal5",
                                      children:
                                        "Always keep track of whats supposed to be done - comes in nasty pink... Here you will find multiple fully functional web applications that I built using React, TypeScrypt, Css(Tiwind) and HTML.",
                                    }),
                                  ],
                                }),
                                s.jsx("div", {
                                  className: "shot-holder svelte-18wal5",
                                  children: s.jsx("div", {
                                    className: "shot svelte-18wal5",
                                    children: s.jsx("figure", {
                                      className: "svelte-cmqfoo",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          s.jsx("a", {
                            href: "#",
                            className: "showcase-block svelte-18wal5",
                            children: s.jsxs("div", {
                              className: "showcase-inner svelte-18wal5",
                              children: [
                                s.jsxs("div", {
                                  className: "deets svelte-18wal5",
                                  children: [
                                    s.jsx("div", {
                                      className: "title svelte-18wal5",
                                      children: "Coming Soon",
                                    }),
                                    s.jsx("span", {
                                      className: "description svelte-18wal5",
                                      children:
                                        "Are your website is currently being maintained and offline for a while? then you can use these templates can be of use to you. My Coming Soon templates designs are well designed, modern and responsive.",
                                    }),
                                    s.jsx("span", {
                                      className: "description svelte-18wal5",
                                      children:
                                        "These themes have a jquery countdown plugin in build. and they are designed with height quality standards to meet the latest requirements that fit in all devices with multi browser support.",
                                    }),
                                  ],
                                }),
                                s.jsx("div", {
                                  className: "shot-holder svelte-18wal5",
                                  children: s.jsx("div", {
                                    className: "shot svelte-18wal5",
                                    children: s.jsx("figure", {
                                      className: "svelte-cmqfoo",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          s.jsx("a", {
                            href: "#",
                            className: "showcase-block svelte-18wal5",
                            children: s.jsxs("div", {
                              className: "showcase-inner svelte-18wal5",
                              children: [
                                s.jsxs("div", {
                                  className: "deets svelte-18wal5",
                                  children: [
                                    s.jsx("div", {
                                      className: "title svelte-18wal5",
                                      children: "Custoji",
                                    }),
                                    s.jsx("span", {
                                      className: "description svelte-18wal5",
                                      children:
                                        "Create emojis that-should-not-be to torment your friends with.",
                                    }),
                                  ],
                                }),
                                s.jsx("div", {
                                  className: "shot-holder svelte-18wal5",
                                  children: s.jsx("div", {
                                    className: "shot svelte-18wal5",
                                    children: s.jsx("figure", {
                                      className: "svelte-cmqfoo",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          s.jsx("a", {
                            href: "#",
                            className: "showcase-block svelte-18wal5 big",
                            children: s.jsx("div", {
                              className: "showcase-inner svelte-18wal5",
                              children: s.jsxs("div", {
                                className: "deets svelte-18wal5",
                                children: [
                                  s.jsx("div", {
                                    className: "title svelte-18wal5",
                                    children: "Current in the workings",
                                  }),
                                  s.jsx("span", {
                                    className: "description svelte-18wal5",
                                    children:
                                      "Create AI enhanced color palettes in Figma based on your color system.",
                                  }),
                                  s.jsx("div", {
                                    className: "preview-holder svelte-18wal5",
                                    children: s.jsx("div", {
                                      className: "preview svelte-18wal5",
                                      children: s.jsx("div", {
                                        className: "svelte-l9lsq7",
                                        children: s.jsx("figure", {
                                          className: "svelte-cmqfoo",
                                          children: s.jsx("img", {
                                            src: "/assets/images/resources/showcase/showcase_cim-dm.png",
                                            alt: "",
                                            width: "",
                                            height: "",
                                            loading: "lazy",
                                            className: "svelte-cmqfoo loaded",
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          s.jsx("a", {
                            href: "#",
                            className: "showcase-block svelte-18wal5",
                            children: s.jsxs("div", {
                              className: "showcase-inner svelte-18wal5",
                              children: [
                                s.jsxs("div", {
                                  className: "deets svelte-18wal5",
                                  children: [
                                    s.jsx("div", {
                                      className: "title svelte-18wal5",
                                      children: "Theme Time",
                                    }),
                                    s.jsx("span", {
                                      className: "description svelte-18wal5",
                                      children:
                                        "Check your time here... but the year`s 1999.",
                                    }),
                                  ],
                                }),
                                s.jsx("div", {
                                  className: "shot-holder svelte-18wal5",
                                  children: s.jsx("div", {
                                    className: "shot svelte-18wal5",
                                    children: s.jsx("figure", {
                                      className: "svelte-cmqfoo",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          s.jsx("a", {
                            href: "#",
                            className: "showcase-block svelte-18wal5",
                            children: s.jsxs("div", {
                              className: "showcase-inner svelte-18wal5",
                              children: [
                                s.jsxs("div", {
                                  className: "deets svelte-18wal5",
                                  children: [
                                    s.jsx("div", {
                                      className: "title svelte-18wal5",
                                      children: "Other",
                                    }),
                                    s.jsx("span", {
                                      className: "description svelte-18wal5",
                                      children:
                                        "Let folks know what`s up with status thumbnails for your work.",
                                    }),
                                  ],
                                }),
                                s.jsx("div", {
                                  className: "shot-holder svelte-18wal5",
                                  children: s.jsx("div", {
                                    className: "shot svelte-18wal5",
                                    children: s.jsx("figure", {
                                      className: "svelte-cmqfoo",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "newsletter svelte-9xj1dk",
                    children: s.jsxs("div", {
                      className: "newsletter-content svelte-9xj1dk",
                      children: [
                        s.jsx("p", {
                          className: "newsletter-text svelte-9xj1dk",
                          children: s.jsx("span", {
                            className: "svelte-9xj1dk",
                          }),
                        }),
                        s.jsx("div", {
                          className:
                            "display: contents; --fill: var(--color-text-primary)",
                          children: s.jsx("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "svelte-wu96f2",
                            children: s.jsx("path", {
                              d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
                            }),
                          }),
                        }),
                        s.jsx("span", {
                          className: "svelte-9xj1dk",
                          children: "Enjoy this note? Feel free to share!",
                        }),
                        s.jsx("p", {}),
                        s.jsxs("div", {
                          className: "newsletter-buttons svelte-9xj1dk",
                          children: [
                            s.jsx("button", {
                              className: "newsletter-link svelte-9xj1dk",
                              title: "Copy link",
                              children: s.jsx("div", {
                                className: `
                        display: contents;
                        --fill: var(--color-text-secondary);
                      `,
                                children: s.jsxs("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  className: "svelte-wu96f2",
                                  children: [
                                    s.jsx("path", {
                                      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
                                    }),
                                    s.jsx("path", {
                                      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            s.jsx("a", {
                              href: "https://twitter.com/share?url=https%3A%2F%2Fluckiemumba.xyz.com%2Fnotes%2Fcss-for-kicks",
                              className: "newsletter-link svelte-9xj1dk",
                              title: "Share on twitter",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: s.jsx("div", {
                                className: `
                        display: contents;
                        --fill: var(--color-text-secondary);
                      `,
                                children: s.jsx("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  className: "svelte-wu96f2",
                                  children: s.jsx("path", {
                                    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
                                  }),
                                }),
                              }),
                            }),
                            s.jsx("a", {
                              href: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fluckiemumba.xyz.com%2Fnotes%2Fcss-for-kicks",
                              className: "newsletter-link svelte-9xj1dk",
                              target: "_blank",
                              title: "Share on LinkedIn",
                              rel: "noopener noreferrer",
                              children: s.jsx("div", {
                                className: `
                        display: contents;
                        --fill: var(--color-text-secondary);
                      `,
                                children: s.jsxs("svg", {
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  className: "svelte-wu96f2",
                                  children: [
                                    s.jsx("path", {
                                      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
                                    }),
                                    s.jsx("rect", {
                                      x: "2",
                                      y: "9",
                                      width: "4",
                                      height: "12",
                                    }),
                                    s.jsx("circle", {
                                      cx: "4",
                                      cy: "4",
                                      r: "2",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
          s.jsx("div", { className: "spacer svelte-1dke9pl" }),
        ],
      }),
    }),
  Z1 = () =>
    s.jsxs("div", {
      children: [
        s.jsx("h1", {
          className: "svelte-veednl tight",
          children: s.jsx("span", { slot: "title", children: "Whoops" }),
        }),
        s.jsxs("div", {
          className: "wrapper svelte-fn0uxd",
          children: [
            s.jsx("p", { className: "svelte-fn0uxd center" }),
            s.jsxs("div", {
              slot: "subtitle",
              children: [
                s.jsx("p", {
                  className: "svelte-1s0lt5v",
                  children:
                    "You`ve taken a wrong turn somewhere. Let`s get you back on track.",
                }),
                s.jsx(Le, {
                  to: "/",
                  className: "button svelte-1s0lt5v",
                  children: "Home",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  G1 = () =>
    s.jsx(s.Fragment, {
      children: s.jsx("div", {
        style: {
          paddingTop: "120px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        },
        children: s.jsxs("div", {
          className: "ring",
          children: [
            s.jsx("i", { style: { "--clr": "#00ff0a" } }),
            s.jsx("i", { style: { "--clr": "#ff0057" } }),
            s.jsx("i", { style: { "--clr": "#fffd44" } }),
            s.jsxs("div", {
              className: "login",
              children: [
                s.jsx("h2", { children: "Login" }),
                s.jsx("div", {
                  className: "inputBx",
                  children: s.jsx("input", {
                    type: "text",
                    placeholder: "Username",
                  }),
                }),
                s.jsx("div", {
                  className: "inputBx",
                  children: s.jsx("input", {
                    type: "password",
                    placeholder: "Password",
                  }),
                }),
                s.jsx("div", {
                  className: "inputBx",
                  children: s.jsx("input", {
                    type: "submit",
                    value: "Sign in",
                  }),
                }),
                s.jsx("div", {
                  children: s.jsx("div", {
                    className: "links",
                    children: s.jsx("a", {
                      href: "#",
                      className: "fb",
                      children: "Forget Password?",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  $1 = () =>
    s.jsx(s.Fragment, {
      children: s.jsx("main", {
        className: "svelte-1p8u9ev",
        children: s.jsx("div", {
          className: "article-holder svelte-9xj1dk",
          children: s.jsx("div", {
            className: "article-inner svelte-9xj1dk",
            children: s.jsx("div", {
              className: "article svelte-9xj1dk",
              children: s.jsx("div", {
                className: "article-holder svelte-9xj1dk",
                children: s.jsx("div", {
                  className: "article-inner svelte-9xj1dk",
                  children: s.jsxs("div", {
                    className: "article svelte-9xj1dk",
                    children: [
                      s.jsx("div", {
                        className: "close-holder svelte-9xj1dk",
                        children: s.jsx(Le, {
                          className: "close svelte-9xj1dk",
                          to: "/notes",
                          tabIndex: "0",
                          "data-sveltekit-preload-code": "",
                          "data-sveltekit-preload-data": "",
                          children: s.jsx("svg", {
                            width: "13",
                            height: "15",
                            viewBox: "0 0 13 15",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: s.jsx("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M1.73716 0.324281C1.36397 -0.0828384 0.731405 -0.110341 0.324286 0.262851C-0.0828328 0.636044 -0.110336 1.26861 0.262857 1.67573L5.3632 7.23974L0.262845 12.8038C-0.110348 13.2109 -0.0828447 13.8434 0.324274 14.2166C0.731393 14.5898 1.36396 14.5623 1.73715 14.1552L6.5 8.95938L11.2628 14.1552C11.636 14.5623 12.2686 14.5898 12.6757 14.2166C13.0828 13.8434 13.1103 13.2109 12.7372 12.8038L7.63681 7.23975L12.7372 1.67573C13.1104 1.26861 13.0829 0.636044 12.6757 0.262851C12.2686 -0.110341 11.636 -0.0828384 11.2629 0.324281L6.50001 5.52011L1.73716 0.324281Z",
                              className: "svelte-9xj1dk",
                            }),
                          }),
                        }),
                      }),
                      s.jsxs("article", {
                        className: "svelte-9xj1dk",
                        children: [
                          s.jsx("h1", { children: "CSS for the shell of it" }),
                          s.jsxs("div", {
                            className: "date svelte-y08q9b",
                            children: [
                              s.jsx("span", {
                                children: s.jsx("div", {
                                  className: "avatars svelte-1oghubx",
                                  children: s.jsx("div", {
                                    className: "avatar-wrapper svelte-1oghubx",
                                    children: s.jsx("div", {
                                      className:
                                        "avatar svelte-1oghubx initial",
                                      children: s.jsx("figure", {
                                        className: "svelte-cmqfoo skeleton",
                                        children: s.jsx("img", {
                                          src: "https:// /about/avatar.png",
                                          alt: "Seán Halpin",
                                          width: "32",
                                          height: "32",
                                          loading: "lazy",
                                          className:
                                            "svelte-cmqfoo skip fullwidth loaded",
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              s.jsx("span", {
                                className: "mood svelte-y08q9b",
                                children: "Feeling puntastic",
                              }),
                              s.jsx("span", { children: "•" }),
                              s.jsx("span", {
                                children: s.jsx("time", {
                                  title: "Dec 27, 2023",
                                  dateTime: "Dec 27, 2023",
                                  children: "3 months ago",
                                }),
                              }),
                            ],
                          }),
                          s.jsx("div", {
                            style: {
                              display: "contents",
                              "--radius": "var(--radius-base)",
                              "--margin": "0 0 var(--spacing-xs)",
                            },
                            children: s.jsx("figure", {
                              className: "svelte-cmqfoo",
                              children: s.jsx("img", {
                                src: "https:// /notes/cssart/hero.png",
                                alt: "Abstract image dipicting CSS art",
                                width: "100%",
                                height: "auto",
                                loading: "lazy",
                                className:
                                  "svelte-cmqfoo fit skip fullwidth loaded",
                              }),
                            }),
                          }),
                          s.jsx("h2", { children: "Means to an end" }),
                          s.jsx("p", {
                            children:
                              "CSS art never captivated me from a creator’s perspective. Despite seeing amazing examples, the idea of investing time in what seemed like an aimless endeavor puzzled me. To me, design was a tool for communication and problem-solving, not an end in itself.",
                          }),
                          s.jsxs("p", {
                            children: [
                              "Yet, during an intense period — wrapping up my final months at Help Scout",
                              s.jsx("a", {
                                href: "https://www.helpscout.com/ai-features/",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: "shipping neat features",
                              }),
                              ", diving into an",
                              s.jsx("a", {
                                href: "https://www.droplette.app/",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: "ambitious AI side project",
                              }),
                              ", quietly",
                              s.jsx("a", {
                                href: "https://www.docsthemepro.com/",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: "launching another",
                              }),
                              ", and on the cusp of leading design at",
                              s.jsx("a", {
                                href: "https://www.givedirectly.org/",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: "GiveDirectly",
                              }),
                              "— I found myself completely fatigued. It wasn’t just physical exhaustion; I was creatively spent. The past year of purpose-driven work had made me drained.",
                            ],
                          }),
                          s.jsx("h2", { children: "Code as a refuge" }),
                          s.jsx("p", {
                            children:
                              "Over the years, coding had become a refuge of sorts. It engaged my brain in ways designing didn’t. So much of its binary in aspect. It either works or it doesn’t. The grey area often found when designing is less apparent with code, and so it had evolved into an enjoyable pastime.",
                          }),
                          s.jsx("p", {
                            children:
                              "I craved a project that would let me wear my coding hat whilst creating something visually appealing, without the usual heavy scrutiny.",
                          }),
                          s.jsxs("p", {
                            children: [
                              "During this time, Teenage Engineering launched the",
                              s.jsx("a", {
                                href: "https://teenage.engineering/products/ep-133",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: "ep-133",
                              }),
                              ". Designers tend to fawn over all their gadgets, with fairly good reason. In my opinion, their devices showcase the creativity and playfulness often missing in designers’ lives.",
                            ],
                          }),
                          s.jsx("p", {
                            children:
                              "For the first time, I was interested in recreating something with CSS for the sake of it. It was time to disengage my design brain and play!",
                          }),
                          s.jsxs("div", {
                            className: "ep-133-holder svelte-1u4x8wq",
                            children: [
                              s.jsx("div", {
                                className: "womp-womp svelte-1u4x8wq",
                                children:
                                  "Best viewed on a device with a viewport width of 800px or greater.",
                              }),
                              s.jsx("div", {
                                className: "ep-133 svelte-1u4x8wq",
                                children: s.jsxs("div", {
                                  className: "ep-133-module svelte-1u4x8wq",
                                  children: [
                                    s.jsxs("div", {
                                      className:
                                        "connection-ports svelte-1u4x8wq",
                                      children: [
                                        s.jsx("button", {
                                          className: "output svelte-1u4x8wq",
                                          children: "Output",
                                        }),
                                        s.jsx("button", {
                                          className: "input svelte-1u4x8wq",
                                          children: "Input",
                                        }),
                                        s.jsxs("button", {
                                          className: "sync svelte-1u4x8wq",
                                          children: [
                                            s.jsx("span", {
                                              className: "svelte-1u4x8wq",
                                              children: "Sync",
                                            }),
                                            s.jsx("span", {
                                              className: "svelte-1u4x8wq",
                                              children: "Midi",
                                            }),
                                          ],
                                        }),
                                        s.jsx("button", {
                                          className: "usb svelte-1u4x8wq",
                                          children: "Usb",
                                        }),
                                        s.jsx("button", {
                                          className: "power svelte-1u4x8wq",
                                          children: "Power",
                                        }),
                                      ],
                                    }),
                                    s.jsxs("div", {
                                      className: "audio svelte-1u4x8wq",
                                      children: [
                                        s.jsxs("div", {
                                          className: "faceplate svelte-1u4x8wq",
                                          children: [
                                            s.jsx("div", {
                                              className:
                                                "cap top-left svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "cap top-right svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "cap bottom-left svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "cap bottom-right svelte-1u4x8wq",
                                            }),
                                            s.jsxs("div", {
                                              className: "name svelte-1u4x8wq",
                                              children: [
                                                s.jsxs("div", {
                                                  className:
                                                    "title-name svelte-1u4x8wq",
                                                  children: [
                                                    "K.O. ",
                                                    s.jsx("span", {
                                                      className:
                                                        "svelte-1u4x8wq",
                                                      children: "ii",
                                                    }),
                                                  ],
                                                }),
                                                s.jsx("div", {
                                                  className:
                                                    "sampler svelte-1u4x8wq",
                                                  children: "サンプラー",
                                                }),
                                              ],
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "disclosure svelte-1u4x8wq",
                                              children:
                                                "64 mb sampler composer",
                                            }),
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          className: "speaker svelte-1u4x8wq",
                                          children: [
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className: "vent svelte-1u4x8wq",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    s.jsxs("div", {
                                      className: "dash svelte-1u4x8wq",
                                      children: [
                                        s.jsx("div", {
                                          className: "shine svelte-1u4x8wq",
                                          children: s.jsx("div", {
                                            className: "shiner svelte-1u4x8wq",
                                          }),
                                        }),
                                        s.jsxs("div", {
                                          className: "dash-grid svelte-1u4x8wq",
                                          children: [
                                            s.jsx("div", {
                                              className:
                                                "dash-item top svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "battery svelte-1u4x8wq",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "letter red dimmed svelte-1u4x8wq",
                                                children: "A",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsxs("div", {
                                              className:
                                                "dash-item lcd svelte-1u4x8wq",
                                              children: [
                                                s.jsx("div", {
                                                  className:
                                                    "dot svelte-1u4x8wq",
                                                }),
                                                s.jsx("div", {
                                                  className:
                                                    "dot svelte-1u4x8wq",
                                                }),
                                                s.jsxs("div", {
                                                  className:
                                                    "number number-1 svelte-1u4x8wq",
                                                  children: [
                                                    s.jsx("div", {
                                                      className:
                                                        "number-angle-top-left svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-angle-bottom-left svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-angle-top-right svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-angle-bottom-right svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-small svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-small svelte-1u4x8wq",
                                                    }),
                                                    s.jsxs("div", {
                                                      className:
                                                        "number-middle svelte-1u4x8wq",
                                                      children: [
                                                        s.jsx("div", {
                                                          className:
                                                            "number-small svelte-1u4x8wq",
                                                        }),
                                                        s.jsx("div", {
                                                          className:
                                                            "number-small svelte-1u4x8wq",
                                                        }),
                                                      ],
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-small svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-small active svelte-1u4x8wq",
                                                    }),
                                                  ],
                                                }),
                                                s.jsxs("div", {
                                                  className:
                                                    "number number-9 svelte-1u4x8wq",
                                                  children: [
                                                    s.jsx("div", {
                                                      className:
                                                        "number-angle-top-left active svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-angle-bottom-left svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-angle-top-right active svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-angle-bottom-right active svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-small svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-small active-top svelte-1u4x8wq",
                                                    }),
                                                    s.jsxs("div", {
                                                      className:
                                                        "number-middle svelte-1u4x8wq",
                                                      children: [
                                                        s.jsx("div", {
                                                          className:
                                                            "number-small svelte-1u4x8wq",
                                                        }),
                                                        s.jsx("div", {
                                                          className:
                                                            "number-small svelte-1u4x8wq",
                                                        }),
                                                      ],
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-small active svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-small svelte-1u4x8wq",
                                                    }),
                                                  ],
                                                }),
                                                s.jsxs("div", {
                                                  className:
                                                    "number number-3 svelte-1u4x8wq",
                                                  children: [
                                                    s.jsx("div", {
                                                      className:
                                                        "number-angle-top-left svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-angle-bottom-left svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-angle-top-right active svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-angle-bottom-right active svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-small svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-small svelte-1u4x8wq",
                                                    }),
                                                    s.jsxs("div", {
                                                      className:
                                                        "number-middle svelte-1u4x8wq",
                                                      children: [
                                                        s.jsx("div", {
                                                          className:
                                                            "number-small svelte-1u4x8wq",
                                                        }),
                                                        s.jsx("div", {
                                                          className:
                                                            "number-small svelte-1u4x8wq",
                                                        }),
                                                      ],
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-small active svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "number-small svelte-1u4x8wq",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item no-overflow svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "simon top-left svelte-1u4x8wq",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item no-overflow svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "simon top-right svelte-1u4x8wq",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item no-overflow dimmed svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "simon top-left svelte-1u4x8wq",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item no-overflow dimmed svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "simon top-right svelte-1u4x8wq",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "mute svelte-1u4x8wq",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "letter red dimmed svelte-1u4x8wq",
                                                children: "B",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item no-overflow svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "simon bottom-left svelte-1u4x8wq",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item no-overflow svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "simon bottom-right svelte-1u4x8wq",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: s.jsxs("div", {
                                                className:
                                                  "small-squares red svelte-1u4x8wq",
                                                children: [
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item no-overflow dimmed svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "simon bottom-left svelte-1u4x8wq",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item no-overflow dimmed svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "simon bottom-right svelte-1u4x8wq",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: s.jsxs("div", {
                                                className:
                                                  "keys svelte-1u4x8wq",
                                                children: [
                                                  s.jsx("div", {
                                                    className:
                                                      "key svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "key svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "key svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "key svelte-1u4x8wq",
                                                  }),
                                                  s.jsxs("div", {
                                                    className:
                                                      "black-keys svelte-1u4x8wq",
                                                    children: [
                                                      s.jsx("div", {
                                                        className:
                                                          "black-key svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "black-key svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "black-key svelte-1u4x8wq",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                            s.jsxs("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: [
                                                s.jsxs("div", {
                                                  className:
                                                    "mini-grid orange-border svelte-1u4x8wq",
                                                  children: [
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                  ],
                                                }),
                                                s.jsx("div", {
                                                  className:
                                                    "clipped-square red-fill svelte-1u4x8wq",
                                                }),
                                                s.jsx("div", {
                                                  className:
                                                    "clipped-square-shadow svelte-1u4x8wq",
                                                }),
                                              ],
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "letter red svelte-1u4x8wq",
                                                children: "C",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "red-circle svelte-1u4x8wq",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "play svelte-1u4x8wq",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: s.jsxs("div", {
                                                className:
                                                  "fader svelte-1u4x8wq",
                                                children: [
                                                  s.jsxs("div", {
                                                    className:
                                                      "fader-row svelte-1u4x8wq",
                                                    children: [
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-lg svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-md svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-md svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                    ],
                                                  }),
                                                  s.jsxs("div", {
                                                    className:
                                                      "fader-row svelte-1u4x8wq",
                                                    children: [
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-lg svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-md svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-md svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                    ],
                                                  }),
                                                  s.jsxs("div", {
                                                    className:
                                                      "fader-row svelte-1u4x8wq",
                                                    children: [
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-lg svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-md svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-md svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className: "fx svelte-1u4x8wq",
                                                children: "FX",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: s.jsxs("div", {
                                                className:
                                                  "fader svelte-1u4x8wq",
                                                children: [
                                                  s.jsxs("div", {
                                                    className:
                                                      "fader-row svelte-1u4x8wq",
                                                    children: [
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-md svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-md svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-lg svelte-1u4x8wq",
                                                      }),
                                                    ],
                                                  }),
                                                  s.jsxs("div", {
                                                    className:
                                                      "fader-row svelte-1u4x8wq",
                                                    children: [
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-md svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-md svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-lg svelte-1u4x8wq",
                                                      }),
                                                    ],
                                                  }),
                                                  s.jsxs("div", {
                                                    className:
                                                      "fader-row svelte-1u4x8wq",
                                                    children: [
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-sm svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-md svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-md svelte-1u4x8wq",
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "fader-lg svelte-1u4x8wq",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: s.jsxs("div", {
                                                className:
                                                  "small-squares blue svelte-1u4x8wq",
                                                children: [
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className: "q svelte-1u4x8wq",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsxs("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: [
                                                s.jsxs("div", {
                                                  className:
                                                    "mini-grid orange-border svelte-1u4x8wq",
                                                  children: [
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                    s.jsx("div", {
                                                      className:
                                                        "mini-item svelte-1u4x8wq",
                                                    }),
                                                  ],
                                                }),
                                                s.jsx("div", {
                                                  className:
                                                    "clipped-square blue-fill svelte-1u4x8wq",
                                                }),
                                                s.jsx("div", {
                                                  className:
                                                    "clipped-square-shadow svelte-1u4x8wq",
                                                }),
                                              ],
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "letter red dimmed svelte-1u4x8wq",
                                                children: "D",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item two-col svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "sound svelte-1u4x8wq",
                                                children: "Sound",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item two-col svelte-1u4x8wq",
                                              children: s.jsx("div", {
                                                className:
                                                  "sound red dimmed svelte-1u4x8wq",
                                                children: "Main",
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                              children: s.jsxs("div", {
                                                className:
                                                  "small-squares white svelte-1u4x8wq",
                                                children: [
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "small-square svelte-1u4x8wq",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                            s.jsx("div", {
                                              className:
                                                "dash-item svelte-1u4x8wq",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    s.jsx("div", {
                                      className: "controls svelte-1u4x8wq",
                                      children: s.jsxs("div", {
                                        className:
                                          "top-controls svelte-1u4x8wq",
                                        children: [
                                          s.jsx("button", {
                                            className:
                                              "round-button svelte-1u4x8wq",
                                            "data-label": "Volume",
                                            children: s.jsx("span", {
                                              className: "svelte-1u4x8wq",
                                              children: "volume",
                                            }),
                                          }),
                                          s.jsxs("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: [
                                              s.jsx("button", {
                                                className:
                                                  "connected svelte-1u4x8wq",
                                                children: s.jsx("span", {
                                                  className:
                                                    "button-inside dark-gray svelte-1u4x8wq",
                                                  children: "Sound",
                                                }),
                                              }),
                                              s.jsx("div", {
                                                className:
                                                  "button-panel white svelte-1u4x8wq",
                                                children: "Edit",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: [
                                              s.jsx("button", {
                                                className:
                                                  "connected svelte-1u4x8wq",
                                                children: s.jsx("span", {
                                                  className:
                                                    "button-inside dark-gray svelte-1u4x8wq",
                                                  children: "Main",
                                                }),
                                              }),
                                              s.jsx("div", {
                                                className:
                                                  "button-panel orange svelte-1u4x8wq",
                                                children: "Commit",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "entry long-handle svelte-1u4x8wq",
                                            children: [
                                              s.jsx("button", {
                                                className:
                                                  "connected svelte-1u4x8wq",
                                                children: s.jsx("span", {
                                                  className:
                                                    "button-inside dark-gray svelte-1u4x8wq",
                                                  children: "Tempo",
                                                }),
                                              }),
                                              s.jsx("div", {
                                                className:
                                                  "button-panel grey svelte-1u4x8wq",
                                                children: "Loop",
                                              }),
                                            ],
                                          }),
                                          s.jsx("div", {
                                            className: "space svelte-1u4x8wq",
                                          }),
                                          s.jsx("button", {
                                            className:
                                              "round-button orange svelte-1u4x8wq",
                                            "data-label": "Bpm",
                                            children: s.jsx("span", {
                                              className: "svelte-1u4x8wq",
                                              children: "bpm",
                                            }),
                                          }),
                                          s.jsx("button", {
                                            className:
                                              "round-button dark svelte-1u4x8wq",
                                            "data-label": "Metronome",
                                            children: s.jsx("span", {
                                              className: "svelte-1u4x8wq",
                                              children: "metronome",
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                          }),
                                          s.jsx("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: s.jsx("div", {
                                              className: "light svelte-1u4x8wq",
                                            }),
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: [
                                              s.jsx("div", {
                                                className:
                                                  "light off svelte-1u4x8wq",
                                              }),
                                              s.jsx("span", {
                                                className:
                                                  "light-text svelte-1u4x8wq",
                                                children: "Level",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: [
                                              s.jsx("div", {
                                                className:
                                                  "light off svelte-1u4x8wq",
                                              }),
                                              s.jsx("span", {
                                                className:
                                                  "light-text svelte-1u4x8wq",
                                                children: "Pitch",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: [
                                              s.jsx("div", {
                                                className:
                                                  "light svelte-1u4x8wq",
                                              }),
                                              s.jsx("span", {
                                                className:
                                                  "light-text svelte-1u4x8wq",
                                                children: "Time",
                                              }),
                                            ],
                                          }),
                                          s.jsx("div", {
                                            className:
                                              "entry small center svelte-1u4x8wq",
                                            children: s.jsx("span", {
                                              className: "axis svelte-1u4x8wq",
                                              children: "X",
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className:
                                              "entry small center svelte-1u4x8wq",
                                            children: s.jsx("span", {
                                              className:
                                                "axis dark svelte-1u4x8wq",
                                              children: "Y",
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "small svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside dark-gray svelte-1u4x8wq",
                                                children: "Keys",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big light-gray svelte-1u4x8wq",
                                                children: "A",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big dark-gray svelte-1u4x8wq",
                                                children: "7",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big dark-gray svelte-1u4x8wq",
                                                children: "8",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big dark-gray svelte-1u4x8wq",
                                                children: "9",
                                              }),
                                            }),
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "entry left-gain svelte-1u4x8wq",
                                            children: [
                                              s.jsx("button", {
                                                className:
                                                  "connected svelte-1u4x8wq",
                                                children: s.jsx("span", {
                                                  className:
                                                    "button-inside svelte-1u4x8wq",
                                                  children: "Sample",
                                                }),
                                              }),
                                              s.jsx("div", {
                                                className:
                                                  "button-panel white svelte-1u4x8wq",
                                                children: "Chop",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "entry right-swing svelte-1u4x8wq",
                                            children: [
                                              s.jsx("button", {
                                                className:
                                                  "connected svelte-1u4x8wq",
                                                children: s.jsx("span", {
                                                  className:
                                                    "button-inside dark-gray svelte-1u4x8wq",
                                                  children: "Timing",
                                                }),
                                              }),
                                              s.jsx("div", {
                                                className:
                                                  "button-panel white svelte-1u4x8wq",
                                                children: "Correct",
                                              }),
                                            ],
                                          }),
                                          s.jsx("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "small svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside dark-gray svelte-1u4x8wq",
                                                children: "Fader",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: s.jsx("div", {
                                              className:
                                                "light off svelte-1u4x8wq",
                                            }),
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: [
                                              s.jsx("div", {
                                                className:
                                                  "light svelte-1u4x8wq",
                                              }),
                                              s.jsx("span", {
                                                className:
                                                  "light-text svelte-1u4x8wq",
                                                children: "Lpf",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: [
                                              s.jsx("div", {
                                                className:
                                                  "light svelte-1u4x8wq",
                                              }),
                                              s.jsx("span", {
                                                className:
                                                  "light-text svelte-1u4x8wq",
                                                children: "Hpf",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: [
                                              s.jsx("div", {
                                                className:
                                                  "light off svelte-1u4x8wq",
                                              }),
                                              s.jsx("span", {
                                                className:
                                                  "light-text svelte-1u4x8wq",
                                                children: "FX",
                                              }),
                                            ],
                                          }),
                                          s.jsx("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                          }),
                                          s.jsx("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                          }),
                                          s.jsx("div", {
                                            className:
                                              "entry long svelte-1u4x8wq",
                                            children: s.jsx("input", {
                                              type: "range",
                                              className: "svelte-1u4x8wq",
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big light-gray svelte-1u4x8wq",
                                                children: "B",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big dark-gray svelte-1u4x8wq",
                                                children: "4",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big dark-gray svelte-1u4x8wq",
                                                children: "5",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big dark-gray svelte-1u4x8wq",
                                                children: "6",
                                              }),
                                            }),
                                          }),
                                          s.jsxs("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: [
                                              s.jsx("button", {
                                                className:
                                                  "connected svelte-1u4x8wq",
                                                children: s.jsx("span", {
                                                  className:
                                                    "button-inside dark-gray svelte-1u4x8wq",
                                                  children: "Fx",
                                                }),
                                              }),
                                              s.jsx("div", {
                                                className:
                                                  "button-panel white svelte-1u4x8wq",
                                                children: "Output",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: [
                                              s.jsx("button", {
                                                className:
                                                  "connected svelte-1u4x8wq",
                                                children: s.jsx("span", {
                                                  className:
                                                    "button-inside white svelte-1u4x8wq",
                                                  children: "Erase",
                                                }),
                                              }),
                                              s.jsx("div", {
                                                className:
                                                  "button-panel white svelte-1u4x8wq",
                                                children: "System",
                                              }),
                                            ],
                                          }),
                                          s.jsx("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: s.jsx("div", {
                                              className:
                                                "light off svelte-1u4x8wq",
                                            }),
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: [
                                              s.jsx("div", {
                                                className:
                                                  "light off svelte-1u4x8wq",
                                              }),
                                              s.jsx("span", {
                                                className:
                                                  "light-text svelte-1u4x8wq",
                                                children: "Atk",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: [
                                              s.jsx("div", {
                                                className:
                                                  "light off svelte-1u4x8wq",
                                              }),
                                              s.jsx("span", {
                                                className:
                                                  "light-text svelte-1u4x8wq",
                                                children: "Rel",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: [
                                              s.jsx("div", {
                                                className:
                                                  "light off svelte-1u4x8wq",
                                              }),
                                              s.jsx("span", {
                                                className:
                                                  "light-text svelte-1u4x8wq",
                                                children: "Pan",
                                              }),
                                            ],
                                          }),
                                          s.jsx("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                          }),
                                          s.jsx("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big light-gray svelte-1u4x8wq",
                                                children: "C",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big dark-gray svelte-1u4x8wq",
                                                children: "1",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big dark-gray svelte-1u4x8wq",
                                                children: "2",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big dark-gray svelte-1u4x8wq",
                                                children: "3",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big big-middle white svelte-1u4x8wq",
                                                children: "-",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big big-middle white svelte-1u4x8wq",
                                                children: "+",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: s.jsx("div", {
                                              className:
                                                "light off svelte-1u4x8wq",
                                            }),
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: [
                                              s.jsx("div", {
                                                className:
                                                  "light off svelte-1u4x8wq",
                                              }),
                                              s.jsx("span", {
                                                className:
                                                  "light-text svelte-1u4x8wq",
                                                children: "Tune",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: [
                                              s.jsx("div", {
                                                className:
                                                  "light svelte-1u4x8wq",
                                              }),
                                              s.jsx("span", {
                                                className:
                                                  "light-text svelte-1u4x8wq",
                                                children: "Vel",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: [
                                              s.jsx("div", {
                                                className:
                                                  "light off svelte-1u4x8wq",
                                              }),
                                              s.jsx("span", {
                                                className:
                                                  "light-text svelte-1u4x8wq",
                                                children: "Mod",
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                            children: [
                                              s.jsx("div", {
                                                className:
                                                  "light off svelte-1u4x8wq",
                                              }),
                                              s.jsx("div", {
                                                className:
                                                  "light right svelte-1u4x8wq",
                                              }),
                                            ],
                                          }),
                                          s.jsx("div", {
                                            className:
                                              "entry small svelte-1u4x8wq",
                                          }),
                                          s.jsx("div", {
                                            className:
                                              "entry bottom svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "small svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside light-gray svelte-1u4x8wq",
                                                children: "Shift",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big light-gray svelte-1u4x8wq",
                                                children: "D",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big dark-gray svelte-1u4x8wq",
                                                children: ".",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big dark-gray svelte-1u4x8wq",
                                                children: "0",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big small-text dark-gray svelte-1u4x8wq",
                                                children: "Enter",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big small-text svelte-1u4x8wq",
                                                children: "Record",
                                              }),
                                            }),
                                          }),
                                          s.jsx("div", {
                                            className: "entry svelte-1u4x8wq",
                                            children: s.jsx("button", {
                                              className: "big svelte-1u4x8wq",
                                              children: s.jsx("span", {
                                                className:
                                                  "button-inside big small-text gray svelte-1u4x8wq",
                                                children: "Play",
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              s.jsx("div", {
                                className: "ui-control svelte-1u4x8wq",
                                children: s.jsxs("label", {
                                  className: "ui-label svelte-1u4x8wq",
                                  children: [
                                    s.jsx("button", {
                                      className: "ui-button svelte-1u4x8wq",
                                      type: "button",
                                      "aria-pressed": "false",
                                      children: s.jsx("div", {
                                        className: "ui-knob svelte-1u4x8wq",
                                      }),
                                    }),
                                    s.jsx("div", {
                                      className: "ui-text svelte-1u4x8wq",
                                      children: "Blueprint",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          s.jsx("p", {
                            children:
                              "Above is the outcome. Switching to ‘blueprint’ mode, you can see the underlying structure. It’s interesting to see how clear and simple the layout is when the complexity of the visuals is stripped away. The excellent UI and colour choices by Teenage Engineering are what makes this device so tactile and appealing, in my view.",
                          }),
                          s.jsx("p", {
                            children:
                              "Here’s a short walkthrough for how I approached the project.",
                          }),
                          s.jsx("h2", {
                            children: "Getting the colours right",
                          }),
                          s.jsx("p", {
                            children:
                              "An important first step — getting the colours right. I used the reliable eye-picker tool to identify the gradient values for each element and then replicated these elements in Figma.",
                          }),
                          s.jsx("div", {
                            style: {
                              display: "contents",
                              "--radius": "var(--radius-base)",
                              "--margin": "0 0 var(--spacing-xs)",
                            },
                            children: s.jsx("figure", {
                              className: "svelte-cmqfoo",
                              children: s.jsx("img", {
                                src: "https:// /notes/cssart/ep133-colors.png",
                                alt: "colour palette for the ep-133",
                                width: "100%",
                                height: "auto",
                                loading: "lazy",
                                className: "svelte-cmqfoo fit skip fullwidth",
                              }),
                            }),
                          }),
                          s.jsx("p", {
                            children:
                              "From there I switched to Figmas dev mode to see the generated code. This is a great way to get a head start on the CSS. I copied the values and pasted them into my CSS file.",
                          }),
                          s.jsx("div", {
                            className: "callout svelte-n9q8ts",
                            children:
                              "This approach is fine for CSS art, but I`m hesitant to recommend it for production code. I found the CSS generated by Figma at times confusing when using CSS variables.",
                          }),
                          s.jsxs("p", {
                            children: [
                              "If you dig into the code, you`ll notice quite a number of instances where I`ve used CSS grid. The overall architecture of the device lends itself well to this approach. The underlying code uses",
                              s.jsx("a", {
                                href: "https://svelte.dev/",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: "Svelte",
                              }),
                              ", which lets me tackle repeating divs with ease. Take, for example, the speaker located in the top right corner.",
                            ],
                          }),
                          s.jsx("div", {
                            className: "highlight svelte-gpn873",
                            children: s.jsx("div", {
                              style: {
                                display: "contents",
                                "--line-number-color":
                                  "rgba(255, 255, 255, 0.3)",
                                "--border-color": "rgba(255, 255, 255, 0.1)",
                              },
                              children: s.jsx("div", {
                                className: "svelte-1vh31p0",
                                style: { "overflow-x": "auto" },
                                children: s.jsx("table", {
                                  className: "svelte-1vh31p0",
                                  children: s.jsxs("tbody", {
                                    className: "hljs",
                                    children: [
                                      s.jsxs("tr", {
                                        className: "svelte-1vh31p0",
                                        children: [
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0 hljs",
                                            style: {
                                              position: "sticky",
                                              left: "0px",
                                              textAlign: "right",
                                              "user-select": "none",
                                              width: "24px",
                                            },
                                            children: s.jsx("code", {
                                              className: "svelte-1vh31p0",
                                              style: {
                                                color:
                                                  "var(--line-number-color, currentColor)",
                                              },
                                              children: "1",
                                            }),
                                          }),
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0",
                                            children: s.jsx("pre", {
                                              className: "svelte-1vh31p0",
                                              children: s.jsxs("code", {
                                                children: [
                                                  "<",
                                                  s.jsx("span", {
                                                    className:
                                                      "hljs-selector-tag",
                                                    children: "div",
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      s.jsxs("tr", {
                                        className: "svelte-1vh31p0",
                                        children: [
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0 hljs",
                                            style: {
                                              position: "sticky",
                                              left: "0px",
                                              textAlign: "right",
                                              userSelect: "none",
                                              width: "24px",
                                            },
                                            children: s.jsx("code", {
                                              className: "svelte-1vh31p0",
                                              style: {
                                                color:
                                                  "var(--line-number-color, currentColor)",
                                              },
                                              children: "2",
                                            }),
                                          }),
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0",
                                            children: s.jsx("pre", {
                                              className: "svelte-1vh31p0",
                                            }),
                                          }),
                                        ],
                                      }),
                                      s.jsxs("tr", {
                                        className: "svelte-1vh31p0",
                                        children: [
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0 hljs",
                                            style: {
                                              position: "sticky",
                                              left: "0px",
                                              textAlign: "right",
                                              userSelect: "none",
                                              width: "24px",
                                            },
                                            children: s.jsx("code", {
                                              className: "svelte-1vh31p0",
                                              style: {
                                                color:
                                                  "var(--line-number-color, currentColor",
                                              },
                                              children: "3",
                                            }),
                                          }),
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0",
                                            children: s.jsx("pre", {
                                              className: "svelte-1vh31p0",
                                              children: s.jsxs("code", {
                                                children: [
                                                  " ",
                                                  "<",
                                                  s.jsx("span", {
                                                    className:
                                                      "hljs-selector-tag",
                                                    children: "div",
                                                  }),
                                                  "></",
                                                  s.jsx("span", {
                                                    className:
                                                      "hljs-selector-tag",
                                                    children: "div",
                                                  }),
                                                  ">",
                                                  " ",
                                                ],
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      s.jsxs("tr", {
                                        className: "svelte-1vh31p0",
                                        children: [
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0 hljs",
                                            style: {
                                              position: "sticky",
                                              left: "0px",
                                              textAlign: "right",
                                              userSelect: "none",
                                              width: "24px",
                                            },
                                            children: s.jsx("code", {
                                              className: "svelte-1vh31p0",
                                              style: {
                                                color:
                                                  "var(--line-number-color, currentColor)",
                                              },
                                              children: "4",
                                            }),
                                          }),
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0",
                                            children: s.jsx("pre", {
                                              className: "svelte-1vh31p0",
                                            }),
                                          }),
                                        ],
                                      }),
                                      s.jsxs("tr", {
                                        className: "svelte-1vh31p0",
                                        children: [
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0 hljs",
                                            style: {
                                              position: "sticky",
                                              left: "0px",
                                              textAlign: "right",
                                              userSelect: "none",
                                              width: "24px",
                                            },
                                            children: s.jsx("code", {
                                              className: "svelte-1vh31p0",
                                              style: {
                                                color:
                                                  "var(--line-number-color, currentColor)",
                                              },
                                              children: "5",
                                            }),
                                          }),
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0",
                                            children: s.jsx("pre", {
                                              className: "svelte-1vh31p0",
                                              children: s.jsxs("code", {
                                                children: [
                                                  "</",
                                                  s.jsx("span", {
                                                    className:
                                                      "hljs-selector-tag",
                                                    children: "div",
                                                  }),
                                                  ">",
                                                ],
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          }),
                          s.jsxs("p", {
                            children: [
                              "There’s quite a few divs for the speaker vents (168!), but the code is clean and easy to read. Using ",
                              s.jsx("code", { children: "nth-child" }),
                              " ",
                              "selectors, I can target specific vents and apply the appropriate colours and box-shadows.",
                            ],
                          }),
                          s.jsx("h2", { children: "A complex dashboard" }),
                          s.jsx("p", {
                            children:
                              "Easily the most difficult part to reproduce is the devices dashboard. While this also contains a fairly standard grid pattern, the complexity of the shapes and the way they interact with each other makes it a challenge to recreate. In the end, I picked my battles and recreated select elements.",
                          }),
                          s.jsxs("p", {
                            children: [
                              "I did flex some new CSS muscles in the process, using",
                              s.jsx("code", { children: "clip-path" }),
                              " for the first time. The following code snippet shows how I created the ‘battery’ icon.",
                            ],
                          }),
                          s.jsx("div", {
                            className: "highlight svelte-gpn873",
                            children: s.jsx("div", {
                              style: {
                                display: "contents",
                                "--line-number-color":
                                  "rgba(255, 255, 255, 0.3)",
                                "--border-color": "rgba(255, 255, 255, 0.1)",
                              },
                              children: s.jsx("div", {
                                className: "svelte-1vh31p0",
                                style: { "overflow-x": "auto" },
                                children: s.jsx("table", {
                                  className: "svelte-1vh31p0",
                                  children: s.jsxs("tbody", {
                                    className: "hljs",
                                    children: [
                                      s.jsxs("tr", {
                                        className: "svelte-1vh31p0",
                                        children: [
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0 hljs",
                                            style: {
                                              position: "sticky",
                                              left: "0px",
                                              textAlign: "right",
                                              userSelect: "none",
                                              width: "24px",
                                            },
                                            children: s.jsx("code", {
                                              className: "svelte-1vh31p0",
                                              style: {
                                                color:
                                                  "var(--line-number-color, currentColor)",
                                              },
                                              children: "1",
                                            }),
                                          }),
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0",
                                            children: s.jsx("pre", {
                                              className: "svelte-1vh31p0",
                                              children: s.jsxs("code", {
                                                children: [
                                                  s.jsx("span", {
                                                    className: "hljs-attribute",
                                                    children: "clip-path",
                                                  }),
                                                  ": ",
                                                  s.jsx("span", {
                                                    className: "hljs-built_in",
                                                    children: "polygon",
                                                  }),
                                                  "(",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "83%",
                                                  }),
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "0",
                                                  }),
                                                  ",",
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "0",
                                                  }),
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "0",
                                                  }),
                                                  ",",
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "0",
                                                  }),
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "95%",
                                                  }),
                                                  ",",
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "83%",
                                                  }),
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "95%",
                                                  }),
                                                  ",",
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "83%",
                                                  }),
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "73%",
                                                  }),
                                                  ",",
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "100%",
                                                  }),
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "73%",
                                                  }),
                                                  ",",
                                                  " ",
                                                ],
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      s.jsxs("tr", {
                                        className: "svelte-1vh31p0",
                                        children: [
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0 hljs",
                                            style: {
                                              position: "sticky",
                                              left: "0px",
                                              textAlign: "right",
                                              userSelect: "none",
                                              width: "24px",
                                            },
                                            children: s.jsx("code", {
                                              className: "svelte-1vh31p0",
                                              style: {
                                                color:
                                                  "var(--line-number-color, currentColor)",
                                              },
                                              children: "2",
                                            }),
                                          }),
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0",
                                            children: s.jsx("pre", {
                                              className: "svelte-1vh31p0",
                                              children: s.jsxs("code", {
                                                children: [
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "100%",
                                                  }),
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "18%",
                                                  }),
                                                  ",",
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "83%",
                                                  }),
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "18%",
                                                  }),
                                                  ");",
                                                ],
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          }),
                          s.jsxs("p", {
                            children: [
                              "I also used ",
                              s.jsx("code", { children: "clip-path" }),
                              " to create the LCD display, which was the most challenging part of the project. Determining the right values for the polygon was a lot of trial and error. I’m sure there’s a more efficient way to do this, but the syntax",
                              s.jsx("em", { children: "feels weird and off" }),
                              " is my excuse for any rough edges.",
                            ],
                          }),
                          s.jsx("h2", { children: "All the buttons" }),
                          s.jsx("p", {
                            children:
                              "The ‘pad’ section housing the buttons is a fairly straightforward grid.",
                          }),
                          s.jsx("div", {
                            className: "highlight svelte-gpn873",
                            children: s.jsx("div", {
                              style: {
                                display: "contents",
                                "--line-number-color":
                                  "rgba(255, 255, 255, 0.3)",
                                "--border-color": "rgba(255, 255, 255, 0.1)",
                              },
                              children: s.jsx("div", {
                                className: "svelte-1vh31p0",
                                style: { "overflow-x": "auto" },
                                children: s.jsx("table", {
                                  className: "svelte-1vh31p0",
                                  children: s.jsxs("tbody", {
                                    className: "hljs",
                                    children: [
                                      s.jsxs("tr", {
                                        className: "svelte-1vh31p0",
                                        children: [
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0 hljs",
                                            style: {
                                              position: "sticky",
                                              left: "0px",
                                              textAlign: "right",
                                              userSelect: "none",
                                              width: "24px",
                                            },
                                            children: s.jsx("code", {
                                              className: "svelte-1vh31p0",
                                              style: {
                                                color:
                                                  "var(--line-number-color, currentColor)",
                                              },
                                              children: "1",
                                            }),
                                          }),
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0",
                                            children: s.jsx("pre", {
                                              className: "svelte-1vh31p0",
                                              children: s.jsxs("code", {
                                                children: [
                                                  s.jsx("span", {
                                                    className: "hljs-attribute",
                                                    children:
                                                      "grid-template-columns",
                                                  }),
                                                  ": ",
                                                  s.jsx("span", {
                                                    className: "hljs-built_in",
                                                    children: "repeat",
                                                  }),
                                                  "(auto-fit,",
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-built_in",
                                                    children: "minmax",
                                                  }),
                                                  "(",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "55px",
                                                  }),
                                                  ",",
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "1",
                                                  }),
                                                  "fr));",
                                                ],
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      s.jsxs("tr", {
                                        className: "svelte-1vh31p0",
                                        children: [
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0 hljs",
                                            style: {
                                              position: "sticky",
                                              left: "0px",
                                              textAlign: "right",
                                              userSelect: "none",
                                              width: "24px",
                                            },
                                            children: s.jsx("code", {
                                              className: "svelte-1vh31p0",
                                              style: {
                                                color:
                                                  "var(--line-number-color, currentColor)",
                                              },
                                              children: "2",
                                            }),
                                          }),
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0",
                                            children: s.jsx("pre", {
                                              className: "svelte-1vh31p0",
                                              children: s.jsxs("code", {
                                                children: [
                                                  s.jsx("span", {
                                                    className: "hljs-attribute",
                                                    children:
                                                      "grid-template-rows",
                                                  }),
                                                  ": ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "55px",
                                                  }),
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "26px",
                                                  }),
                                                  ";",
                                                ],
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      s.jsxs("tr", {
                                        className: "svelte-1vh31p0",
                                        children: [
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0 hljs",
                                            style: {
                                              position: "sticky",
                                              left: "0px",
                                              textAlign: "right",
                                              userSelect: "none",
                                              width: "24px",
                                            },
                                            children: s.jsx("code", {
                                              className: "svelte-1vh31p0",
                                              style: {
                                                color:
                                                  "var(--line-number-color, currentColor)",
                                              },
                                              children: "3",
                                            }),
                                          }),
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0",
                                            children: s.jsx("pre", {
                                              className: "svelte-1vh31p0",
                                              children: s.jsxs("code", {
                                                children: [
                                                  s.jsx("span", {
                                                    className: "hljs-attribute",
                                                    children: "gap",
                                                  }),
                                                  ":",
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "0",
                                                  }),
                                                  ";",
                                                ],
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      s.jsxs("tr", {
                                        className: "svelte-1vh31p0",
                                        children: [
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0 hljs",
                                            style: {
                                              position: "sticky",
                                              left: "0px",
                                              textAlign: "right",
                                              userSelect: "none",
                                              width: "24px",
                                            },
                                            children: s.jsx("code", {
                                              className: "svelte-1vh31p0",
                                              style: {
                                                color:
                                                  "var(--line-number-color, currentColor)",
                                              },
                                              children: "4",
                                            }),
                                          }),
                                          s.jsx("td", {
                                            className: "svelte-1vh31p0",
                                            children: s.jsx("pre", {
                                              className: "svelte-1vh31p0",
                                              children: s.jsxs("code", {
                                                children: [
                                                  s.jsx("span", {
                                                    className: "hljs-attribute",
                                                    children: "grid-column",
                                                  }),
                                                  "-",
                                                  s.jsx("span", {
                                                    className: "hljs-attribute",
                                                    children: "gap",
                                                  }),
                                                  ":",
                                                  " ",
                                                  s.jsx("span", {
                                                    className: "hljs-number",
                                                    children: "26px",
                                                  }),
                                                  ";",
                                                ],
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          }),
                          s.jsx("p", {
                            children:
                              "The above accommodates two size of alternating row heights. It wasn’t until I implemented the ‘lights’ and adjusted every second row to be smaller that I noticed the pattern.",
                          }),
                          s.jsxs("p", {
                            children: [
                              "The buttons themselves were a lot of fun to create. There are many small details to get right, such as the subtle gradients and shadows, and the double layer that makes the buttons appear enclosed in a frame. I was a little unclear how they actually functioned, but found a great",
                              s.jsx("a", {
                                href: "https://codepen.io/nicolasjesenberger/pen/gOqzJed",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: "Codepen by Nicolas Jesenberger",
                              }),
                              "that helped me understand the mechanics.",
                            ],
                          }),
                          s.jsxs("div", {
                            className: "buttons extended svelte-1xujrr0",
                            children: [
                              s.jsx("div", {
                                className: "entry svelte-1xujrr0",
                                children: s.jsx("button", {
                                  className: "big svelte-1xujrr0",
                                  children: s.jsx("span", {
                                    className:
                                      "button-inside big small-text dark-gray svelte-1xujrr0",
                                    children: "7",
                                  }),
                                }),
                              }),
                              s.jsx("div", {
                                className: "entry svelte-1xujrr0",
                                children: s.jsx("button", {
                                  className: "big svelte-1xujrr0",
                                  children: s.jsx("span", {
                                    className:
                                      "button-inside big small-text light-gray svelte-1xujrr0",
                                    children: "8",
                                  }),
                                }),
                              }),
                              s.jsx("div", {
                                className: "entry svelte-1xujrr0",
                                children: s.jsx("button", {
                                  className: "big svelte-1xujrr0",
                                  children: s.jsx("span", {
                                    className:
                                      "button-inside big small-text svelte-1xujrr0",
                                    children: "9",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          s.jsx("h2", { children: "To be continued" }),
                          s.jsx("p", {
                            children:
                              "Overall, I’m happy with the outcome. There’s plenty of room for improvement, but I don’t believe thats the point of projects like this. It’s about the process, the learning, and the joy of creating something for the sake of it. I’ll be back to create more in the future.",
                          }),
                        ],
                      }),
                      s.jsx("div", {
                        className: "newsletter svelte-9xj1dk",
                        children: s.jsxs("div", {
                          className: "newsletter-content svelte-9xj1dk",
                          children: [
                            s.jsx("p", {
                              className: "newsletter-text svelte-9xj1dk",
                              children: s.jsx("span", {
                                className: "svelte-9xj1dk",
                              }),
                            }),
                            s.jsx("div", {
                              style: {
                                display: "contents",
                                "--fill": "var(--color-text-primary)",
                              },
                              children: s.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "svelte-wu96f2",
                                children: s.jsx("path", {
                                  d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
                                }),
                              }),
                            }),
                            s.jsx("span", {
                              className: "svelte-9xj1dk",
                              children: "Enjoy this note? Feel free to share!",
                            }),
                            s.jsx("p", {}),
                            s.jsxs("div", {
                              className: "newsletter-buttons svelte-9xj1dk",
                              children: [
                                s.jsx("button", {
                                  className: "newsletter-link svelte-9xj1dk",
                                  title: "Copy link",
                                  children: s.jsx("div", {
                                    style: {
                                      display: "contents",
                                      "--fill": "var(--color-text-secondary)",
                                    },
                                    children: s.jsxs("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "24",
                                      height: "24",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      className: "svelte-wu96f2",
                                      children: [
                                        s.jsx("path", {
                                          d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
                                        }),
                                        s.jsx("path", {
                                          d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                s.jsx("a", {
                                  href: "https://twitter.com/share?url=https%3A%2F%2F luckiemumba.xyz.com%2Fnotes%2Fcss-for-kicks",
                                  className: "newsletter-link svelte-9xj1dk",
                                  title: "Share on twitter",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: s.jsx("div", {
                                    style: {
                                      display: "contents",
                                      "--fill": "var(--color-text-secondary)",
                                    },
                                    children: s.jsx("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "24",
                                      height: "24",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      className: "svelte-wu96f2",
                                      children: s.jsx("path", {
                                        d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
                                      }),
                                    }),
                                  }),
                                }),
                                s.jsx("a", {
                                  href: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2F luckiemumba.xyz.com%2Fnotes%2Fcss-for-kicks",
                                  className: "newsletter-link svelte-9xj1dk",
                                  target: "_blank",
                                  title: "Share on LinkedIn",
                                  rel: "noopener noreferrer",
                                  children: s.jsx("div", {
                                    style: {
                                      display: "contents",
                                      "--fill": "var(--color-text-secondary",
                                    },
                                    children: s.jsxs("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "24",
                                      height: "24",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      className: "svelte-wu96f2",
                                      children: [
                                        s.jsx("path", {
                                          d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
                                        }),
                                        s.jsx("rect", {
                                          x: "2",
                                          y: "9",
                                          width: "4",
                                          height: "12",
                                        }),
                                        s.jsx("circle", {
                                          cx: "4",
                                          cy: "4",
                                          r: "2",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    }),
  ex = () =>
    s.jsx(s.Fragment, {
      children: s.jsx("main", {
        className: "svelte-1p8u9ev",
        children: s.jsx("div", {
          className: "article-holder svelte-9xj1dk",
          children: s.jsx("div", {
            className: "article-inner svelte-9xj1dk",
            children: s.jsx("div", {
              className: "article svelte-9xj1dk",
              children: s.jsx("div", {
                className: "article-holder svelte-9xj1dk",
                children: s.jsx("div", {
                  className: "article-inner svelte-9xj1dk",
                  children: s.jsxs("div", {
                    className: "article svelte-9xj1dk",
                    children: [
                      s.jsx("div", {
                        className: "close-holder svelte-9xj1dk",
                        children: s.jsx(Le, {
                          className: "close svelte-9xj1dk",
                          to: "/notes",
                          tabIndex: "0",
                          children: s.jsx("svg", {
                            width: "13",
                            height: "15",
                            viewBox: "0 0 13 15",
                            fill: "none",
                            children: s.jsx("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M1.73716 0.324281C1.36397 -0.0828384 0.731405 -0.110341 0.324286 0.262851C-0.0828328 0.636044 -0.110336 1.26861 0.262857 1.67573L5.3632 7.23974L0.262845 12.8038C-0.110348 13.2109 -0.0828447 13.8434 0.324274 14.2166C0.731393 14.5898 1.36396 14.5623 1.73715 14.1552L6.5 8.95938L11.2628 14.1552C11.636 14.5623 12.2686 14.5898 12.6757 14.2166C13.0828 13.8434 13.1103 13.2109 12.7372 12.8038L7.63681 7.23975L12.7372 1.67573C13.1104 1.26861 13.0829 0.636044 12.6757 0.262851C12.2686 -0.110341 11.636 -0.0828384 11.2629 0.324281L6.50001 5.52011L1.73716 0.324281Z",
                              className: "svelte-9xj1dk",
                            }),
                          }),
                        }),
                      }),
                      s.jsxs("article", {
                        className: "svelte-9xj1dk",
                        children: [
                          s.jsx("h1", {
                            children: "How I leverage AI in my everyday work",
                          }),
                          s.jsxs("div", {
                            className: "date svelte-y08q9b",
                            children: [
                              s.jsx("span", {
                                children: s.jsx("div", {
                                  className: "avatars svelte-1oghubx",
                                  children: s.jsx("div", {
                                    className: "avatar-wrapper svelte-1oghubx",
                                    children: s.jsx("div", {
                                      className:
                                        "avatar svelte-1oghubx initial",
                                      children: s.jsx("figure", {
                                        className: "svelte-cmqfoo skeleton",
                                        children: s.jsx("img", {
                                          src: "/about/avatar.png",
                                          alt: "Luckie Mumba",
                                          width: "32",
                                          height: "32",
                                          loading: "lazy",
                                          className:
                                            "svelte-cmqfoo skip fullwidth",
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              s.jsx("span", {
                                className: "mood svelte-y08q9b",
                                children: "Feeling prompt",
                              }),
                              " ",
                              s.jsx("span", { children: "•" }),
                              s.jsx("span", {
                                children: s.jsx("time", {
                                  title: "Jul 15, 2023",
                                  dateTime: "July 15, 2023",
                                  children: "9 months ago",
                                }),
                              }),
                            ],
                          }),
                          s.jsx("div", {
                            style: {
                              display: "contents",
                              "--radius": "var(--radius-base)",
                              "--margin": "0 0 var(--spacing-xs)",
                            },
                            children: s.jsx("figure", {
                              className: "svelte-cmqfoo",
                              children: s.jsx("img", {
                                src: "https:// /notes/chatgpt/hero.png",
                                alt: "Image of a robot with a laptop",
                                width: "100%",
                                height: "auto",
                                loading: "lazy",
                                className: "svelte-cmqfoo fit skip fullwidth",
                              }),
                            }),
                          }),
                          s.jsxs("p", {
                            children: [
                              "AI is here to eat all the things. I agree with",
                              s.jsx("a", {
                                href: "https://mailchi.mp/eab7a0eacb6a/ai-design-system-20230502?e=8f8a54d0a5",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: "Design Dept’s Mia Blume",
                              }),
                              "in their assessment that large swaths of the design process are ripe for automation. It’s simply a matter of time.",
                            ],
                          }),
                          s.jsx("a", {
                            href: "https://www.etsy.com/listing/1392874311/surrender-artist-print",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: s.jsx("div", {
                              style: {
                                display: "contents",
                                "--maxwidth": "588px",
                                "--shadow":
                                  "0 0 0 2px var(--color-primary-border)",
                                "--alignment": "var(--spacing-xs) auto",
                              },
                              children: s.jsx("figure", {
                                className: "svelte-cmqfoo",
                                children: s.jsx("img", {
                                  src: "https:// /notes/chatgpt/robots.jpg",
                                  alt: "Cartoon depicting a robot telling a human they are obsolete",
                                  width: "100%",
                                  height: "auto",
                                  loading: "lazy",
                                  className:
                                    "svelte-cmqfoo skip maxwidth alignment",
                                }),
                              }),
                            }),
                          }),
                          s.jsxs("p", {
                            children: [
                              "Rather than pushing back against this development, I feel it’s wise to stay ahead of the game and learn to capitalize on AI in our everyday work. Developers are",
                              s.jsx("a", {
                                href: "https://github.blog/2023-06-13-survey-reveals-ais-impact-on-the-developer-experience/",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: "already doing this",
                              }),
                              ", and designers should too.",
                            ],
                          }),
                          s.jsxs("p", {
                            children: [
                              "Having been immersed in AI for the past number of months, along with recently designing and shipping Help Scout’s",
                              s.jsx("a", {
                                href: "https://www.helpscout.com/blog/introducing-ai-from-help-scout/",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: "first AI features",
                              }),
                              ", I wanted to share how I’ve started to bring AI into my day to day.",
                            ],
                          }),
                          s.jsx("h2", { children: "Real fake data" }),
                          s.jsx("p", {
                            children:
                              "As designers, we want to make things look pretty. One of the pitfalls of working in an abstraction like Figma, is that we are detached from the real data that will eventually power our designs.",
                          }),
                          s.jsx("p", {
                            children:
                              "What looks good in a mock may not accurately reflect the data that will eventually be displayed. AI is a great way to get a sense of what real data will look like in our designs, or ‘real fake data’ as I like to call it.",
                          }),
                          s.jsx("p", {
                            children:
                              "In the below example, I run a rudimentary prompt through OpenAI to generate a conversation between a customer and a support agent. I then use that data to populate a mock conversation in Figma, leveraging the relevant design system components.",
                          }),
                          s.jsx("figure", {
                            className: "video svelte-1q0lkgh shadow",
                            children: s.jsx("video", {
                              autoPlay: "",
                              loop: "",
                              preload: "auto",
                              poster: "https:// /notes/how-i-code-with-ai",
                              className: "svelte-1q0lkgh",
                              children: s.jsx("source", {
                                src: "https:// /notes/chatgpt/plugin.mp4",
                                type: "video/mp4",
                              }),
                            }),
                          }),
                          s.jsxs("p", {
                            children: [
                              "While the above may seem complex, the prompt in of itself is not. You can accomplish similar results using",
                              s.jsx("a", {
                                href: "https://chat.openai.com/",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: "OpenAI’s chat",
                              }),
                              ".",
                            ],
                          }),
                          s.jsx("p", {
                            children:
                              "To go one step deeper, you can ask OpenAI to generate a response in JSON. At this point you have the building blocks for how data populates modern frameworks at your disposal.",
                          }),
                          s.jsxs("p", {
                            children: [
                              "There are several Figma plugins, such as",
                              s.jsx("a", {
                                href: "https://www.figma.com/community/plugin/749195619095691211",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: "JSON to Figma",
                              }),
                              ", that allow you to import JSON data into your designs.",
                            ],
                          }),
                          s.jsx("h2", { children: "Coding superpowers" }),
                          s.jsx("p", {
                            children:
                              "AI has the capability of letting us all utilize code, regardless of our technical abilities.",
                          }),
                          s.jsxs("p", {
                            children: [
                              s.jsx("a", {
                                href: "https://github.com/features/copilot",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: "GitHub’s Copilot",
                              }),
                              "is one of the better known examples of AI assisting developers. It uses OpenAI’s GPT-3 to generate code based on the context of the code you are writing.",
                            ],
                          }),
                          s.jsxs("div", {
                            className: "callout svelte-n9q8ts",
                            children: [
                              "There are questions regarding the",
                              s.jsx("a", {
                                href: "https://githubcopilotlitigation.com/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "ethics of Copilot",
                              }),
                              ", and the potential for it to be used to generate code that is not original. If you have ethical concerns, proceed with caution.",
                            ],
                          }),
                          s.jsx("p", {
                            children:
                              "As someone who moonlights as a developer, I’ve come to find Copilot an invaluable tool. It’s been a game changer in terms of the work I’m able to accomplish.",
                          }),
                          s.jsx("figure", {
                            className: "video svelte-1q0lkgh shadow",
                            children: s.jsx("video", {
                              autoPlay: "",
                              loop: "",
                              preload: "auto",
                              poster: "https:// /notes/how-i-code-with-ai",
                              className: "svelte-1q0lkgh",
                              children: s.jsx("source", {
                                src: "https:// /notes/chatgpt/figma-rest.mp4",
                                type: "video/mp4",
                              }),
                            }),
                          }),
                          s.jsx("p", {
                            children:
                              "I shared this video with my design team about how I connected to Figma’s REST API with OpenAI. Using natural language, I’m able to query Help Scouts Design System (HSDS), discover if a component exists, and if so, return some results.",
                          }),
                          s.jsx("p", {
                            children:
                              "The best part? I didn’t have to write a single line of code. It was created completely from prompting, all the way from understanding how to create a Python app, to displaying the linked results.",
                          }),
                          s.jsx("p", {
                            children:
                              "I don’t know about you, but I find that pretty amazing. It’s a level of complexity that would have taken me hours, or even days, to figure out on my own.",
                          }),
                          s.jsx("h2", { children: "UX writing" }),
                          s.jsx("p", {
                            children:
                              "I leverage AI to generate copy ideas, giving me different variations and tone choices that best fit the UX. This means less time time sweating over micro copy and more time dialing in the overall experience.",
                          }),
                          s.jsx("p", {
                            children:
                              "Recently, the Help Scout Product Designers got together in Boston to reevaluate our product design principles.",
                          }),
                          s.jsx("div", {
                            style: {
                              display: "contents",
                              "--maxwidth": "768px",
                              "--radius": "var(--radius-base)",
                              "--shadow":
                                "0 0 0 2px var(--color-primary-border)",
                            },
                            children: s.jsx("figure", {
                              className: "svelte-cmqfoo",
                              children: s.jsx("img", {
                                src: "https:// /notes/chatgpt/team.jpg",
                                alt: "Photo of Help Scouts Product Design team",
                                width: "100%",
                                height: "auto",
                                loading: "lazy",
                                className:
                                  "svelte-cmqfoo skip maxwidth alignment",
                              }),
                            }),
                          }),
                          s.jsx("p", {
                            children:
                              "We spent the majority of our time in FigJam, brainstorming principles that reflected the values we wanted to bring to the work.",
                          }),
                          s.jsx("p", {
                            children:
                              "As we got closer to narrowing in on what the principles were, we leveraged chatGPT as a first pass on copy ideas. This let us have working examples to iterate on, rather than starting from scratch.",
                          }),
                          s.jsx("div", {
                            style: {
                              display: "contents",
                              "--maxwidth": "768px",
                              "--radius": "var(--radius-base)",
                              "--shadow":
                                "0 0 0 2px var(--color-primary-border)",
                            },
                            children: s.jsx("figure", {
                              className: "svelte-cmqfoo",
                              children: s.jsx("img", {
                                src: "https:// /notes/chatgpt/figjam.png",
                                alt: "Screenshot of a FigJam board with a variety of copy ideas",
                                width: "100%",
                                height: "auto",
                                loading: "lazy",
                                className:
                                  "svelte-cmqfoo skip maxwidth alignment",
                              }),
                            }),
                          }),
                          s.jsx("p", {
                            children:
                              "This unlocked us so many times. Writing is tough! It’s hard to come up with the right words to convey the right message. AI helped that process move along and prevented us from getting stuck.",
                          }),
                          s.jsx("p", {
                            children: "I’m really delighted with the results.",
                          }),
                          s.jsx("div", {
                            style: {
                              display: "contents",
                              "--maxwidth": "768px",
                              "--radius": "var(--radius-base)",
                            },
                            children: s.jsx("figure", {
                              className: "svelte-cmqfoo",
                              children: s.jsx("img", {
                                src: "https:// /notes/chatgpt/principles.png",
                                alt: "Screenshot that reads: Respectful, Effortless, Familiar",
                                width: "100%",
                                height: "auto",
                                loading: "lazy",
                                className:
                                  "svelte-cmqfoo skip maxwidth alignment",
                              }),
                            }),
                          }),
                          s.jsx("h2", { children: "Change" }),
                          s.jsx("p", {
                            children:
                              "I’m still scratching the surface of what’s possible with AI. It’s been eye-opening to see how how quickly changes have taken place, and how much more is on the horizon.",
                          }),
                          s.jsx("p", {
                            children:
                              "Rather than being pessimistic about our jobs, I’m excited to see what the future brings. But we need to be realistic, and understand that our roles will change, and change significantly.",
                          }),
                          s.jsx("p", {
                            children:
                              "How we prepare with AI today will go a long way to how we handle the changes of tomorrow.",
                          }),
                        ],
                      }),
                      s.jsx("div", {
                        className: "newsletter svelte-9xj1dk",
                        children: s.jsxs("div", {
                          className: "newsletter-content svelte-9xj1dk",
                          children: [
                            s.jsx("p", {
                              className: "newsletter-text svelte-9xj1dk",
                              children: s.jsx("span", {
                                className: "svelte-9xj1dk",
                              }),
                            }),
                            s.jsx("div", {
                              style: {
                                display: "contents",
                                "--fill": "var(--color-text-primary)",
                              },
                              children: s.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "svelte-wu96f2",
                                children: s.jsx("path", {
                                  d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
                                }),
                              }),
                            }),
                            s.jsx("span", {
                              className: "svelte-9xj1dk",
                              children: "Enjoy this note? Feel free to share!",
                            }),
                            s.jsx("p", {}),
                            s.jsxs("div", {
                              className: "newsletter-buttons svelte-9xj1dk",
                              children: [
                                s.jsx("button", {
                                  className: "newsletter-link svelte-9xj1dk",
                                  title: "Copy link",
                                  children: s.jsx("div", {
                                    style: {
                                      display: "contents",
                                      "--fill": "var(--color-text-secondary)",
                                    },
                                    children: s.jsxs("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "24",
                                      height: "24",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      className: "svelte-wu96f2",
                                      children: [
                                        s.jsx("path", {
                                          d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
                                        }),
                                        s.jsx("path", {
                                          d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                s.jsx("a", {
                                  href: "https://twitter.com/share?url=https%3A%2F%2F luckiemumba.xyz.com%2Fnotes%2Fhow-i-code-with-ai",
                                  className: "newsletter-link svelte-9xj1dk",
                                  title: "Share on twitter",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: s.jsx("div", {
                                    style: {
                                      display: "contents",
                                      "--fill": "var(--color-text-secondary)",
                                    },
                                    children: s.jsx("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "24",
                                      height: "24",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      className: "svelte-wu96f2",
                                      children: s.jsx("path", {
                                        d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
                                      }),
                                    }),
                                  }),
                                }),
                                s.jsx("a", {
                                  href: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2F luckiemumba.xyz.com%2Fnotes%2Fhow-i-code-with-ai",
                                  className: "newsletter-link svelte-9xj1dk",
                                  target: "_blank",
                                  title: "Share on LinkedIn",
                                  rel: "noopener noreferrer",
                                  children: s.jsx("div", {
                                    style: {
                                      display: "contents",
                                      "--fill": "var(--color-text-secondary)",
                                    },
                                    children: s.jsxs("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "24",
                                      height: "24",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      className: "svelte-wu96f2",
                                      children: [
                                        s.jsx("path", {
                                          d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
                                        }),
                                        s.jsx("rect", {
                                          x: "2",
                                          y: "9",
                                          width: "4",
                                          height: "12",
                                        }),
                                        s.jsx("circle", {
                                          cx: "4",
                                          cy: "4",
                                          r: "2",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    }),
  tx = () =>
    s.jsx(s.Fragment, {
      children: s.jsxs("main", {
        className: "svelte-1p8u9ev",
        children: [
          s.jsx("div", {
            className: "article-holder svelte-9xj1dk",
            children: s.jsx("div", {
              className: "article-inner svelte-9xj1dk",
              children: s.jsx("div", {
                className: "article svelte-9xj1dk",
                children: s.jsx("div", {
                  className: "article-holder svelte-9xj1dk",
                  children: s.jsx("div", {
                    className: "article-inner svelte-9xj1dk",
                    children: s.jsxs("div", {
                      className: "article svelte-9xj1dk",
                      children: [
                        s.jsx("div", {
                          className: "close-holder svelte-9xj1dk",
                          children: s.jsx(Le, {
                            className: "close svelte-9xj1dk",
                            to: "/notes",
                            tabIndex: "0",
                            children: s.jsx("svg", {
                              width: "13",
                              height: "15",
                              viewBox: "0 0 13 15",
                              fill: "none",
                              children: s.jsx("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M1.73716 0.324281C1.36397 -0.0828384 0.731405 -0.110341 0.324286 0.262851C-0.0828328 0.636044 -0.110336 1.26861 0.262857 1.67573L5.3632 7.23974L0.262845 12.8038C-0.110348 13.2109 -0.0828447 13.8434 0.324274 14.2166C0.731393 14.5898 1.36396 14.5623 1.73715 14.1552L6.5 8.95938L11.2628 14.1552C11.636 14.5623 12.2686 14.5898 12.6757 14.2166C13.0828 13.8434 13.1103 13.2109 12.7372 12.8038L7.63681 7.23975L12.7372 1.67573C13.1104 1.26861 13.0829 0.636044 12.6757 0.262851C12.2686 -0.110341 11.636 -0.0828384 11.2629 0.324281L6.50001 5.52011L1.73716 0.324281Z",
                                className: "svelte-9xj1dk",
                              }),
                            }),
                          }),
                        }),
                        s.jsxs("article", {
                          className: "svelte-9xj1dk",
                          children: [
                            s.jsx("h1", {
                              children:
                                "Overview of work style as an assistant architect",
                            }),
                            s.jsxs("div", {
                              className: "date svelte-y08q9b",
                              children: [
                                s.jsx("span", {
                                  children: s.jsx("div", {
                                    className: "avatars svelte-1oghubx",
                                    children: s.jsx("div", {
                                      className:
                                        "avatar-wrapper svelte-1oghubx",
                                      children: s.jsx("div", {
                                        className:
                                          "avatar svelte-1oghubx initial",
                                        children: s.jsx("figure", {
                                          className: "svelte-cmqfoo skeleton",
                                          children: s.jsx("img", {
                                            src: "/about/avatar.png",
                                            alt: "Luckie Mumba",
                                            width: "32",
                                            height: "32",
                                            loading: "lazy",
                                            className:
                                              "svelte-cmqfoo skip fullwidth",
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                s.jsx("span", {
                                  className: "mood svelte-y08q9b",
                                  children: "Feeling prompt",
                                }),
                                " ",
                                s.jsx("span", { children: "•" }),
                                s.jsx("span", {
                                  children: s.jsx("time", {
                                    title: "Jul 15, 2023",
                                    dateTime: "July 15, 2023",
                                    children: "9 months ago",
                                  }),
                                }),
                              ],
                            }),
                            s.jsx("div", {
                              style: {
                                display: "contents",
                                "--radius": "var(--radius-base)",
                                "--margin": "0 0 var(--spacing-xs)",
                              },
                              children: s.jsx("figure", {
                                className: "svelte-cmqfoo",
                                children: s.jsx("img", {
                                  src: "https:// /notes/chatgpt/hero.png",
                                  alt: "Image of a robot with a laptop",
                                  width: "100%",
                                  height: "auto",
                                  loading: "lazy",
                                  className: "svelte-cmqfoo fit skip fullwidth",
                                }),
                              }),
                            }),
                            s.jsx("p", {
                              children:
                                "As a junior architect, my work style can be described as having a strong attention to detail. I understood the importance of precision and accuracy in architectural design and strived to ensure that every aspect of a project is carefully considered.",
                            }),
                            s.jsx("p", {
                              children:
                                "Whether it`s the placement of windows, the selection of materials, or the intergration of sustainable features, I used to pay close attention to the finer details to create a cohesive and well-designed space. This meticiulous approach helped me deliver high-quality work that meets the needs and expectations of clients.",
                            }),
                            s.jsx("a", {
                              href: "https://www.etsy.com/listing/1392874311/surrender-artist-print",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: s.jsx("div", {
                                style: {
                                  display: "contents",
                                  "--maxwidth": "588px",
                                  "--shadow":
                                    "0 0 0 2px var(--color-primary-border)",
                                  "--alignment": "var(--spacing-xs) auto",
                                },
                                children: s.jsx("figure", {
                                  className: "svelte-cmqfoo",
                                  children: s.jsx("img", {
                                    src: "https:// /notes/chatgpt/robots.jpg",
                                    alt: "Cartoon depicting a robot telling a human they are obsolete",
                                    width: "100%",
                                    height: "auto",
                                    loading: "lazy",
                                    className:
                                      "svelte-cmqfoo skip maxwidth alignment",
                                  }),
                                }),
                              }),
                            }),
                            s.jsx("p", {
                              children:
                                "Collaboration and communication where also integral aspects of my work style. I recognised the value of working as a team and believe that the best results are achieved through effective collaboration. And i still do.",
                            }),
                            s.jsx("p", {
                              children:
                                "I actively seeked input and feedback from colleagues, consultants, and clients to ensure that all perspectives are considered in the design process.",
                            }),
                            s.jsx("p", {
                              children:
                                "This collaborative and communicative approach fosters a positive working environment and led to successful project outcomes.",
                            }),
                            s.jsx("p", {
                              children:
                                "Creativity and innovation where the fundamental components of my work style as an architect. I thrived on generating unique and imaginative design solitions that push boundaries and challenge conventional norms.",
                            }),
                            s.jsx("p", {
                              children:
                                "By thinking outside the box and exploring new posibilities, I strived to create spaces that where not only functional visually striking and inspiring. Whether it`s finding innovative ways to incorporate sustainable features or designingspaces that promote well-being and user experience, I continuously seek opportunities to infuse creativity and innovation into my architectural projects.",
                            }),
                            s.jsx("figure", {
                              className: "video svelte-1q0lkgh shadow",
                              children: s.jsx("video", {
                                autoPlay: "",
                                loop: "",
                                preload: "auto",
                                poster: "https:// /notes/how-i-code-with-ai",
                                className: "svelte-1q0lkgh",
                                children: s.jsx("source", {
                                  src: "https:// /notes/chatgpt/plugin.mp4",
                                  type: "video/mp4",
                                }),
                              }),
                            }),
                            s.jsxs("p", {
                              children: [
                                "While the above may seem complex, the prompt in of itself is not. You can accomplish similar results using",
                                s.jsx("a", {
                                  href: "https://chat.openai.com/",
                                  rel: "noopener noreferrer",
                                  target: "_blank",
                                  children: "OpenAI’s chat",
                                }),
                                ".",
                              ],
                            }),
                            s.jsx("p", {
                              children:
                                "To go one step deeper, you can ask OpenAI to generate a response in JSON. At this point you have the building blocks for how data populates modern frameworks at your disposal.",
                            }),
                            s.jsxs("p", {
                              children: [
                                "There are several Figma plugins, such as",
                                s.jsx("a", {
                                  href: "https://www.figma.com/community/plugin/749195619095691211",
                                  rel: "noopener noreferrer",
                                  target: "_blank",
                                  children: "JSON to Figma",
                                }),
                                ", that allow you to import JSON data into your designs.",
                              ],
                            }),
                            s.jsx("h2", { children: "Coding superpowers" }),
                            s.jsx("p", {
                              children:
                                "AI has the capability of letting us all utilize code, regardless of our technical abilities.",
                            }),
                            s.jsxs("p", {
                              children: [
                                s.jsx("a", {
                                  href: "https://github.com/features/copilot",
                                  rel: "noopener noreferrer",
                                  target: "_blank",
                                  children: "GitHub’s Copilot",
                                }),
                                "is one of the better known examples of AI assisting developers. It uses OpenAI’s GPT-3 to generate code based on the context of the code you are writing.",
                              ],
                            }),
                            s.jsxs("div", {
                              className: "callout svelte-n9q8ts",
                              children: [
                                "I still work as a freelance architect. Taking on projects different kind of projects that help me utilise my expertise in architecture `",
                                s.jsx("a", {
                                  href: "#",
                                  target: "_blank",
                                  rel: "contact",
                                  children: "contact me",
                                }),
                                "' for more infomation.",
                              ],
                            }),
                            s.jsx("p", {
                              children:
                                "As someone who moonlights as a developer, I’ve come to find Copilot an invaluable tool. It’s been a game changer in terms of the work I’m able to accomplish.",
                            }),
                            s.jsx("figure", {
                              className: "video svelte-1q0lkgh shadow",
                              children: s.jsx("video", {
                                autoPlay: "",
                                loop: "",
                                preload: "auto",
                                poster: "https:// /notes/how-i-code-with-ai",
                                className: "svelte-1q0lkgh",
                                children: s.jsx("source", {
                                  src: "https:// /notes/chatgpt/figma-rest.mp4",
                                  type: "video/mp4",
                                }),
                              }),
                            }),
                            s.jsx("p", {
                              children:
                                "I shared this video with my design team about how I connected to Figma’s REST API with OpenAI. Using natural language, I’m able to query Help Scouts Design System (HSDS), discover if a component exists, and if so, return some results.",
                            }),
                            s.jsx("p", {
                              children:
                                "The best part? I didn’t have to write a single line of code. It was created completely from prompting, all the way from understanding how to create a Python app, to displaying the linked results.",
                            }),
                            s.jsx("p", {
                              children:
                                "I don’t know about you, but I find that pretty amazing. It’s a level of complexity that would have taken me hours, or even days, to figure out on my own.",
                            }),
                            s.jsx("h2", { children: "UX writing" }),
                            s.jsx("p", {
                              children:
                                "I leverage AI to generate copy ideas, giving me different variations and tone choices that best fit the UX. This means less time time sweating over micro copy and more time dialing in the overall experience.",
                            }),
                            s.jsx("p", {
                              children:
                                "Recently, the Help Scout Product Designers got together in Boston to reevaluate our product design principles.",
                            }),
                            s.jsx("div", {
                              style: {
                                display: "contents",
                                "--maxwidth": "768px",
                                "--radius": "var(--radius-base)",
                                "--shadow":
                                  "0 0 0 2px var(--color-primary-border)",
                              },
                              children: s.jsx("figure", {
                                className: "svelte-cmqfoo",
                                children: s.jsx("img", {
                                  src: "https:// /notes/chatgpt/team.jpg",
                                  alt: "Photo of Help Scouts Product Design team",
                                  width: "100%",
                                  height: "auto",
                                  loading: "lazy",
                                  className:
                                    "svelte-cmqfoo skip maxwidth alignment",
                                }),
                              }),
                            }),
                            s.jsx("p", {
                              children:
                                "We spent the majority of our time in FigJam, brainstorming principles that reflected the values we wanted to bring to the work.",
                            }),
                            s.jsx("p", {
                              children:
                                "As we got closer to narrowing in on what the principles were, we leveraged chatGPT as a first pass on copy ideas. This let us have working examples to iterate on, rather than starting from scratch.",
                            }),
                            s.jsx("div", {
                              style: {
                                display: "contents",
                                "--maxwidth": "768px",
                                "--radius": "var(--radius-base)",
                                "--shadow":
                                  "0 0 0 2px var(--color-primary-border)",
                              },
                              children: s.jsx("figure", {
                                className: "svelte-cmqfoo",
                                children: s.jsx("img", {
                                  src: "https:// /notes/chatgpt/figjam.png",
                                  alt: "Screenshot of a FigJam board with a variety of copy ideas",
                                  width: "100%",
                                  height: "auto",
                                  loading: "lazy",
                                  className:
                                    "svelte-cmqfoo skip maxwidth alignment",
                                }),
                              }),
                            }),
                            s.jsx("p", {
                              children:
                                "This unlocked us so many times. Writing is tough! It’s hard to come up with the right words to convey the right message. AI helped that process move along and prevented us from getting stuck.",
                            }),
                            s.jsx("p", {
                              children:
                                "I’m really delighted with the results.",
                            }),
                            s.jsx("div", {
                              style: {
                                display: "contents",
                                "--maxwidth": "768px",
                                "--radius": "var(--radius-base)",
                              },
                              children: s.jsx("figure", {
                                className: "svelte-cmqfoo",
                                children: s.jsx("img", {
                                  src: "https:// /notes/chatgpt/principles.png",
                                  alt: "Screenshot that reads: Respectful, Effortless, Familiar",
                                  width: "100%",
                                  height: "auto",
                                  loading: "lazy",
                                  className:
                                    "svelte-cmqfoo skip maxwidth alignment",
                                }),
                              }),
                            }),
                            s.jsx("h2", { children: "Change" }),
                            s.jsx("p", {
                              children:
                                "I’m still scratching the surface of what’s possible with AI. It’s been eye-opening to see how how quickly changes have taken place, and how much more is on the horizon.",
                            }),
                            s.jsx("p", {
                              children:
                                "Rather than being pessimistic about our jobs, I’m excited to see what the future brings. But we need to be realistic, and understand that our roles will change, and change significantly.",
                            }),
                            s.jsx("p", {
                              children:
                                "How we prepare with AI today will go a long way to how we handle the changes of tomorrow.",
                            }),
                          ],
                        }),
                        s.jsx("div", {
                          className: "newsletter svelte-9xj1dk",
                          children: s.jsxs("div", {
                            className: "newsletter-content svelte-9xj1dk",
                            children: [
                              s.jsx("p", {
                                className: "newsletter-text svelte-9xj1dk",
                                children: s.jsx("span", {
                                  className: "svelte-9xj1dk",
                                }),
                              }),
                              s.jsx("div", {
                                style: {
                                  display: "contents",
                                  "--fill": "var(--color-text-primary)",
                                },
                                children: s.jsx("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  className: "svelte-wu96f2",
                                  children: s.jsx("path", {
                                    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
                                  }),
                                }),
                              }),
                              s.jsx("span", {
                                className: "svelte-9xj1dk",
                                children:
                                  "Enjoy this note? Feel free to share!",
                              }),
                              s.jsx("p", {}),
                              s.jsxs("div", {
                                className: "newsletter-buttons svelte-9xj1dk",
                                children: [
                                  s.jsx("button", {
                                    className: "newsletter-link svelte-9xj1dk",
                                    title: "Copy link",
                                    children: s.jsx("div", {
                                      style: {
                                        display: "contents",
                                        "--fill": "var(--color-text-secondary)",
                                      },
                                      children: s.jsxs("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "svelte-wu96f2",
                                        children: [
                                          s.jsx("path", {
                                            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
                                          }),
                                          s.jsx("path", {
                                            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  s.jsx("a", {
                                    href: "https://twitter.com/share?url=https%3A%2F%2F luckiemumba.xyz.com%2Fnotes%2Fhow-i-code-with-ai",
                                    className: "newsletter-link svelte-9xj1dk",
                                    title: "Share on twitter",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: s.jsx("div", {
                                      style: {
                                        display: "contents",
                                        "--fill": "var(--color-text-secondary)",
                                      },
                                      children: s.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "svelte-wu96f2",
                                        children: s.jsx("path", {
                                          d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
                                        }),
                                      }),
                                    }),
                                  }),
                                  s.jsx("a", {
                                    href: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2F luckiemumba.xyz.com%2Fnotes%2Fhow-i-code-with-ai",
                                    className: "newsletter-link svelte-9xj1dk",
                                    target: "_blank",
                                    title: "Share on LinkedIn",
                                    rel: "noopener noreferrer",
                                    children: s.jsx("div", {
                                      style: {
                                        display: "contents",
                                        "--fill": "var(--color-text-secondary)",
                                      },
                                      children: s.jsxs("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "svelte-wu96f2",
                                        children: [
                                          s.jsx("path", {
                                            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
                                          }),
                                          s.jsx("rect", {
                                            x: "2",
                                            y: "9",
                                            width: "4",
                                            height: "12",
                                          }),
                                          s.jsx("circle", {
                                            cx: "4",
                                            cy: "4",
                                            r: "2",
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          }),
          s.jsx("br", {}),
        ],
      }),
    }),
  sx = () =>
    s.jsx(s.Fragment, {
      children: s.jsxs("main", {
        className: "svelte-1p8u9ev",
        children: [
          s.jsx("div", {
            className: "article-holder svelte-9xj1dk",
            children: s.jsx("div", {
              className: "article-inner svelte-9xj1dk",
              children: s.jsxs("div", {
                className: "article svelte-9xj1dk",
                children: [
                  s.jsx("div", {
                    className: "close-holder svelte-9xj1dk",
                    children: s.jsx(Le, {
                      className: "close svelte-9xj1dk",
                      to: "/Notes",
                      tabIndex: "0",
                      children: s.jsx("svg", {
                        width: "13",
                        height: "15",
                        viewBox: "0 0 13 15",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: s.jsx("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M1.73716 0.324281C1.36397 -0.0828384 0.731405 -0.110341 0.324286 0.262851C-0.0828328 0.636044 -0.110336 1.26861 0.262857 1.67573L5.3632 7.23974L0.262845 12.8038C-0.110348 13.2109 -0.0828447 13.8434 0.324274 14.2166C0.731393 14.5898 1.36396 14.5623 1.73715 14.1552L6.5 8.95938L11.2628 14.1552C11.636 14.5623 12.2686 14.5898 12.6757 14.2166C13.0828 13.8434 13.1103 13.2109 12.7372 12.8038L7.63681 7.23975L12.7372 1.67573C13.1104 1.26861 13.0829 0.636044 12.6757 0.262851C12.2686 -0.110341 11.636 -0.0828384 11.2629 0.324281L6.50001 5.52011L1.73716 0.324281Z",
                          className: "svelte-9xj1dk",
                        }),
                      }),
                    }),
                  }),
                  s.jsxs("article", {
                    className: "svelte-9xj1dk",
                    children: [
                      s.jsx("h1", {
                        children: "Throwaway projects are the best projects",
                      }),
                      s.jsxs("div", {
                        className: "date svelte-y08q9b",
                        children: [
                          s.jsx("span", {
                            children: s.jsx("div", {
                              className: "avatars svelte-1oghubx",
                              children: s.jsx("div", {
                                className: "avatar-wrapper svelte-1oghubx",
                                children: s.jsx("div", {
                                  className: "avatar svelte-1oghubx initial",
                                  children: s.jsx("figure", {
                                    className: "svelte-cmqfoo skeleton",
                                    children: s.jsx("img", {
                                      src: "https:// /about/avatar.png",
                                      alt: "Seán Halpin",
                                      width: "32",
                                      height: "32",
                                      loading: "lazy",
                                      className:
                                        "svelte-cmqfoo skip fullwidth loaded",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                          s.jsx("span", {
                            className: "mood svelte-y08q9b",
                            children: "Feeling destructive",
                          }),
                          s.jsx("span", { children: "•" }),
                          s.jsx("span", {
                            children: s.jsx("time", {
                              title: "Jul 13, 2023",
                              dateTime: "July 13, 2023",
                              children: "a year ago",
                            }),
                          }),
                        ],
                      }),
                      s.jsx("div", {
                        style: {
                          display: "contents",
                          "--radius": "var(--radius-base)",
                          "--shadow": "none",
                          "--margin": "0 0 var(--spacing-xs)",
                        },
                        children: s.jsx("figure", {
                          className: "svelte-cmqfoo",
                          children: s.jsx("img", {
                            src: "https:// /notes/throwaway/hero.png",
                            alt: "Image of a project with an X over it",
                            width: "768",
                            height: "476",
                            loading: "lazy",
                            className:
                              "svelte-cmqfoo fit skip fullwidth loaded",
                          }),
                        }),
                      }),
                      s.jsx("p", {
                        children:
                          "Not every idea works. Some don`t fit at the time, some never will. I`ve had my fair share that haven`t panned out the way I`d hoped. Here`s a few personal projects of mine that have struggled to get off the ground.",
                      }),
                      s.jsx("p", {
                        children:
                          "Why share these? I think it`s important to share the failures as well as the successes. I`ve learnt a lot from these projects, both the good and bad. If any of these inspire others to get creative, I`ll view them as a success.",
                      }),
                      s.jsx("h2", { children: "Builder" }),
                      s.jsx("br", {}),
                      s.jsx("p", {
                        children:
                          "I put together a POC that allowed anyone to build a HTML based prototype of Help Scouts app by slotting various components together. You could then have it up on CodePen with the push of a button in under a minute.",
                      }),
                      s.jsx("figure", {
                        className: "video svelte-1q0lkgh shadow",
                      }),
                      s.jsxs("p", {
                        children: [
                          s.jsx("strong", { children: "Why didn’t it work?" }),
                          " It still required technical skills if you wanted to elaborate upon it within CodePen. I made it for designers, but for those without technical knowledge, it was difficult to iterate with and make their own. For those with the technical skills, they preferred to use their own tools. At the end of they day, prototyping should be quick and easy for the individual, which this solution didn’t necessarily address.",
                        ],
                      }),
                      s.jsx("h2", { children: "Muood" }),
                      s.jsx("p", {
                        children:
                          "A piece I felt was missing from Spotify — being able to record how I felt when listening to a song, and why. I wanted to capture the moment, then be able to go back and see what I was thinking at the time. So I created the badly named ‘Muood’ as a way to do so.",
                      }),
                      s.jsx("figure", {
                        className: "video svelte-1q0lkgh shadow",
                        children: s.jsx("video", {
                          autoPlay: "",
                          loop: "",
                          preload: "auto",
                          poster: "https:// /notes/throwaways",
                          className: "svelte-1q0lkgh",
                          children: s.jsx("source", {
                            src: "https:// /notes/throwaway/player.mp4",
                            type: "video/mp4",
                          }),
                        }),
                      }),
                      s.jsxs("p", {
                        children: [
                          s.jsx("strong", { children: "Why didn’t it work?" }),
                          " Paradoxically, capturing the moment takes you out of it. I couldn’t work the action of recording my mood into listening to music. It’s like the",
                          s.jsx("a", {
                            href: "https://youtu.be/3Iyugz1bjyw?t=288",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: "dystopian Vision Pro promo",
                          }),
                          "Apple released, where the parent is recording their child’s birthday in VR/AR, meaning they are never really in the moment in the first place.",
                        ],
                      }),
                      s.jsx("h2", { children: "Tada" }),
                      s.jsxs("p", {
                        children: [
                          "I wanted to find a todo list I could share with my fiancé that didn’t involve a monthly subscription fee. I have to draw the line at subscription services somewhere, and todo lists is it. Turns out that’s hard to find! Todo lists are the base example whenever anyone learns how to make a",
                          s.jsx("a", {
                            href: "https://en.wikipedia.org/wiki/Create,_read,_update_and_delete",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: "CRUD",
                          }),
                          "app, so I figured it would be possible to make my own.",
                        ],
                      }),
                      s.jsx("div", {
                        style: {
                          display: "contents",
                          "--radius": "0",
                          "--shadow": "none",
                        },
                        children: s.jsx("figure", {
                          className: "svelte-cmqfoo",
                          children: s.jsx("img", {
                            src: "https:// /notes/throwaway/tada.png",
                            alt: "Detailed screens of the tada app UI",
                            width: "100%",
                            height: "auto",
                            loading: "lazy",
                            className: "svelte-cmqfoo fit skip fullwidth",
                          }),
                        }),
                      }),
                      s.jsx("p", {
                        children:
                          "I thought it’d be fun to try out some playful UIs.",
                      }),
                      s.jsx("div", {
                        style: {
                          display: "contents",
                          "--radius": "var(--radius-base)",
                          "--shadow": "0 0 0 2px var(--color-primary-border)",
                        },
                        children: s.jsx("figure", {
                          className: "svelte-cmqfoo",
                          children: s.jsx("img", {
                            src: "https:// /notes/throwaway/collection.png",
                            alt: "Screenshots of the tada app UI",
                            width: "100%",
                            height: "auto",
                            loading: "lazy",
                            className: "svelte-cmqfoo fit skip fullwidth",
                          }),
                        }),
                      }),
                      s.jsxs("p", {
                        children: [
                          s.jsx("strong", { children: "Why didn’t it work?" }),
                          " Because it’s web based and not a native app.",
                        ],
                      }),
                      s.jsxs("p", {
                        children: [
                          "Trying to replicate native iOS “feel” in mobile Safari is hard. The browser is also quite quirky in terms of it’s functionality. If you’ve used the browser on iOS, you’ll know the viewport size changes depending on scroll, with navigation showing and hiding. This makes placing fixed UI on the screen really cumbersome, which I had leaned into heavily with Tada’s UI. I recently learnt about",
                          s.jsx("a", {
                            href: "https://ishadeed.com/article/new-viewport-units/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: "dynamic viewport units",
                          }),
                          "so maybe there’s hope yet to improve this.",
                        ],
                      }),
                      s.jsx("h2", { children: "Pics" }),
                      s.jsx("p", {
                        children:
                          "I decided to make my own personal Instagram. I’m not a huge social media person, and wanted control and privacy over my content.",
                      }),
                      s.jsx("figure", {
                        className: "video svelte-1q0lkgh shadow",
                        children: s.jsx("video", {
                          autoPlay: "",
                          loop: "",
                          preload: "auto",
                          poster: "https:// /notes/throwaways",
                          className: "svelte-1q0lkgh",
                          children: s.jsx("source", {
                            src: "https:// /notes/throwaway/pics.mp4",
                            type: "video/mp4",
                          }),
                        }),
                      }),
                      s.jsxs("p", {
                        children: [
                          s.jsx("strong", { children: "Why didn’t it work?" }),
                          " The jury is still out on this one — but the stumbling blocks I’ve encountered are mostly around processing images, optimizing them, and making sure I don’t tank the app with too much media.",
                        ],
                      }),
                      s.jsx("p", {
                        children:
                          "The technical challenges are tough, but I knew this would be a fairly ambitious project to pull off. Still, it’s taught me a lot about the various techniques and tricks that apps like this employ to stay functional. Back-end optimization wasn’t on my radar for this one but, hey, that’s part of the fun of these projects. Check back in with me in a few months if it’s worked out or not.",
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "newsletter svelte-9xj1dk",
                    children: s.jsxs("div", {
                      className: "newsletter-content svelte-9xj1dk",
                      children: [
                        s.jsx("p", {
                          className: "newsletter-text svelte-9xj1dk",
                          children: s.jsx("span", {
                            className: "svelte-9xj1dk",
                          }),
                        }),
                        s.jsx("div", {
                          style: {
                            display: "contents",
                            "--fill": "var(--color-text-secondary)",
                          },
                          children: s.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            className: "svelte-wu96f2",
                            children: s.jsx("path", {
                              d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
                            }),
                          }),
                        }),
                        s.jsx("span", {
                          className: "svelte-9xj1dk",
                          children: "Enjoy this note? Feel free to share!",
                        }),
                        s.jsx("p", {}),
                        s.jsxs("div", {
                          className: "newsletter-buttons svelte-9xj1dk",
                          children: [
                            s.jsx("button", {
                              className: "newsletter-link svelte-9xj1dk",
                              title: "Copy link",
                              children: s.jsx("div", {
                                style: {
                                  display: "contents",
                                  "--fill": "var(--color-text-secondary)",
                                },
                                children: s.jsxs("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  className: "svelte-wu96f2",
                                  children: [
                                    s.jsx("path", {
                                      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
                                    }),
                                    s.jsx("path", {
                                      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            s.jsx("a", {
                              href: "https://twitter.com/share?url=https%3A%2F%2F luckiemumba.xyz.com%2Fnotes%2Fthrowaways",
                              className: "newsletter-link svelte-9xj1dk",
                              title: "Share on twitter",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: s.jsx("div", {
                                style: {
                                  display: "contents",
                                  "--fill": "var(--color-text-secondary)",
                                },
                                children: s.jsx("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  className: "svelte-wu96f2",
                                  children: s.jsx("path", {
                                    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
                                  }),
                                }),
                              }),
                            }),
                            s.jsx("a", {
                              href: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2F luckiemumba.xyz.com%2Fnotes%2Fthrowaways",
                              className: "newsletter-link svelte-9xj1dk",
                              target: "_blank",
                              title: "Share on LinkedIn",
                              rel: "noopener noreferrer",
                              children: s.jsx("div", {
                                style: {
                                  display: "contents",
                                  "--fill": "var(--color-text-secondary)",
                                },
                                children: s.jsxs("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  className: "svelte-wu96f2",
                                  children: [
                                    s.jsx("path", {
                                      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
                                    }),
                                    s.jsx("rect", {
                                      x: "2",
                                      y: "9",
                                      width: "4",
                                      height: "12",
                                    }),
                                    s.jsx("circle", {
                                      cx: "4",
                                      cy: "4",
                                      r: "2",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
          s.jsx("div", { className: "spacer svelte-1dke9pl" }),
        ],
      }),
    }),
  nx = Kp(
    xa(
      s.jsxs(Qe, {
        path: "/",
        element: s.jsx(u1, {}),
        children: [
          s.jsx(Qe, { index: !0, element: s.jsx(q1, {}) }),
          s.jsx(Qe, { path: "/Projects", element: s.jsx(Y1, {}) }),
          s.jsx(Qe, { path: "/About", element: s.jsx(P1, {}) }),
          s.jsx(Qe, { path: "/Notes", element: s.jsx(_1, {}) }),
          s.jsx(Qe, { path: "/Login", element: s.jsx(G1, {}) }),
          s.jsx(Qe, { path: "/WebProjects", element: s.jsx(X1, {}) }),
          s.jsx(Qe, { path: "/Css", element: s.jsx($1, {}) }),
          s.jsx(Qe, { path: "/Ai", element: s.jsx(ex, {}) }),
          s.jsx(Qe, { path: "/Architecture", element: s.jsx(tx, {}) }),
          s.jsx(Qe, { path: "/Throwaways", element: s.jsx(sx, {}) }),
          s.jsx(Qe, { path: "*", element: s.jsx(Z1, {}) }),
        ],
      })
    )
  ),
  lx = () => s.jsx(s.Fragment, { children: s.jsx(t1, { router: nx }) });
wi.createRoot(document.getElementById("root")).render(
  s.jsx(jd.StrictMode, { children: s.jsx(lx, {}) })
);
