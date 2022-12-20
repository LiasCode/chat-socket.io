(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var vi = { exports: {} },
  gi = {},
  Ke = { exports: {} },
  R = {};
var or = Symbol.for("react.element"),
  qc = Symbol.for("react.portal"),
  Gc = Symbol.for("react.fragment"),
  Zc = Symbol.for("react.strict_mode"),
  Jc = Symbol.for("react.profiler"),
  bc = Symbol.for("react.provider"),
  ef = Symbol.for("react.context"),
  tf = Symbol.for("react.forward_ref"),
  nf = Symbol.for("react.suspense"),
  rf = Symbol.for("react.memo"),
  of = Symbol.for("react.lazy"),
  ls = Symbol.iterator;
function lf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ls && e[ls]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _u = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Cu = Object.assign,
  xu = {};
function pn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xu),
    (this.updater = n || _u);
}
pn.prototype.isReactComponent = {};
pn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
pn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nu() {}
Nu.prototype = pn.prototype;
function al(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xu),
    (this.updater = n || _u);
}
var cl = (al.prototype = new Nu());
cl.constructor = al;
Cu(cl, pn.prototype);
cl.isPureReactComponent = !0;
var ss = Array.isArray,
  Tu = Object.prototype.hasOwnProperty,
  fl = { current: null },
  Pu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ru(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Tu.call(t, r) && !Pu.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: or,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: fl.current,
  };
}
function sf(e, t) {
  return {
    $$typeof: or,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function dl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === or;
}
function uf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var us = /\/+/g;
function Bi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? uf("" + e.key)
    : t.toString(36);
}
function Or(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case or:
          case qc:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Bi(l, 0) : r),
      ss(i)
        ? ((n = ""),
          e != null && (n = e.replace(us, "$&/") + "/"),
          Or(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (dl(i) &&
            (i = sf(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(us, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), ss(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + Bi(o, s);
      l += Or(o, t, n, u, i);
    }
  else if (((u = lf(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Bi(o, s++)), (l += Or(o, t, n, u, i));
  else if (o === "object")
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
  return l;
}
function dr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Or(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function af(e) {
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
var ue = { current: null },
  zr = { transition: null },
  cf = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: zr,
    ReactCurrentOwner: fl,
  };
R.Children = {
  map: dr,
  forEach: function (e, t, n) {
    dr(
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
      dr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      dr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!dl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
R.Component = pn;
R.Fragment = Gc;
R.Profiler = Jc;
R.PureComponent = al;
R.StrictMode = Zc;
R.Suspense = nf;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cf;
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Cu({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = fl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Tu.call(t, u) &&
        !Pu.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: or, type: e.type, key: i, ref: o, props: r, _owner: l };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: ef,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: bc, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = Ru;
R.createFactory = function (e) {
  var t = Ru.bind(null, e);
  return (t.type = e), t;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: tf, render: e };
};
R.isValidElement = dl;
R.lazy = function (e) {
  return { $$typeof: of, _payload: { _status: -1, _result: e }, _init: af };
};
R.memo = function (e, t) {
  return { $$typeof: rf, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
  var t = zr.transition;
  zr.transition = {};
  try {
    e();
  } finally {
    zr.transition = t;
  }
};
R.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
R.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
R.useContext = function (e) {
  return ue.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
R.useId = function () {
  return ue.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
R.useRef = function (e) {
  return ue.current.useRef(e);
};
R.useState = function (e) {
  return ue.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
  return ue.current.useTransition();
};
R.version = "18.2.0";
(function (e) {
  e.exports = R;
})(Ke);
var ff = Ke.exports,
  df = Symbol.for("react.element"),
  pf = Symbol.for("react.fragment"),
  hf = Object.prototype.hasOwnProperty,
  mf = ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lu(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) hf.call(t, r) && !yf.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: df,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: mf.current,
  };
}
gi.Fragment = pf;
gi.jsx = Lu;
gi.jsxs = Lu;
(function (e) {
  e.exports = gi;
})(vi);
const vf = vi.exports.Fragment,
  ze = vi.exports.jsx,
  Jt = vi.exports.jsxs;
var co = {},
  Ou = { exports: {} },
  we = {},
  zu = { exports: {} },
  Au = {};
(function (e) {
  function t(_, T) {
    var P = _.length;
    _.push(T);
    e: for (; 0 < P; ) {
      var W = (P - 1) >>> 1,
        G = _[W];
      if (0 < i(G, T)) (_[W] = T), (_[P] = G), (P = W);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var T = _[0],
      P = _.pop();
    if (P !== T) {
      _[0] = P;
      e: for (var W = 0, G = _.length, cr = G >>> 1; W < cr; ) {
        var Et = 2 * (W + 1) - 1,
          Fi = _[Et],
          _t = Et + 1,
          fr = _[_t];
        if (0 > i(Fi, P))
          _t < G && 0 > i(fr, Fi)
            ? ((_[W] = fr), (_[_t] = P), (W = _t))
            : ((_[W] = Fi), (_[Et] = P), (W = Et));
        else if (_t < G && 0 > i(fr, P)) (_[W] = fr), (_[_t] = P), (W = _t);
        else break e;
      }
    }
    return T;
  }
  function i(_, T) {
    var P = _.sortIndex - T.sortIndex;
    return P !== 0 ? P : _.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var u = [],
    c = [],
    m = 1,
    h = null,
    p = 3,
    g = !1,
    w = !1,
    k = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c);
      else if (T.startTime <= _)
        r(c), (T.sortIndex = T.expirationTime), t(u, T);
      else break;
      T = n(c);
    }
  }
  function y(_) {
    if (((k = !1), d(_), !w))
      if (n(u) !== null) (w = !0), Di(E);
      else {
        var T = n(c);
        T !== null && Mi(y, T.startTime - _);
      }
  }
  function E(_, T) {
    (w = !1), k && ((k = !1), f(N), (N = -1)), (g = !0);
    var P = p;
    try {
      for (
        d(T), h = n(u);
        h !== null && (!(h.expirationTime > T) || (_ && !Te()));

      ) {
        var W = h.callback;
        if (typeof W == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var G = W(h.expirationTime <= T);
          (T = e.unstable_now()),
            typeof G == "function" ? (h.callback = G) : h === n(u) && r(u),
            d(T);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var cr = !0;
      else {
        var Et = n(c);
        Et !== null && Mi(y, Et.startTime - T), (cr = !1);
      }
      return cr;
    } finally {
      (h = null), (p = P), (g = !1);
    }
  }
  var C = !1,
    x = null,
    N = -1,
    H = 5,
    L = -1;
  function Te() {
    return !(e.unstable_now() - L < H);
  }
  function vn() {
    if (x !== null) {
      var _ = e.unstable_now();
      L = _;
      var T = !0;
      try {
        T = x(!0, _);
      } finally {
        T ? gn() : ((C = !1), (x = null));
      }
    } else C = !1;
  }
  var gn;
  if (typeof a == "function")
    gn = function () {
      a(vn);
    };
  else if (typeof MessageChannel < "u") {
    var os = new MessageChannel(),
      Xc = os.port2;
    (os.port1.onmessage = vn),
      (gn = function () {
        Xc.postMessage(null);
      });
  } else
    gn = function () {
      F(vn, 0);
    };
  function Di(_) {
    (x = _), C || ((C = !0), gn());
  }
  function Mi(_, T) {
    N = F(function () {
      _(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), Di(E));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (_) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = p;
      }
      var P = p;
      p = T;
      try {
        return _();
      } finally {
        p = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, T) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var P = p;
      p = _;
      try {
        return T();
      } finally {
        p = P;
      }
    }),
    (e.unstable_scheduleCallback = function (_, T, P) {
      var W = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? W + P : W))
          : (P = W),
        _)
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
        (G = P + G),
        (_ = {
          id: m++,
          callback: T,
          priorityLevel: _,
          startTime: P,
          expirationTime: G,
          sortIndex: -1,
        }),
        P > W
          ? ((_.sortIndex = P),
            t(c, _),
            n(u) === null &&
              _ === n(c) &&
              (k ? (f(N), (N = -1)) : (k = !0), Mi(y, P - W)))
          : ((_.sortIndex = G), t(u, _), w || g || ((w = !0), Di(E))),
        _
      );
    }),
    (e.unstable_shouldYield = Te),
    (e.unstable_wrapCallback = function (_) {
      var T = p;
      return function () {
        var P = p;
        p = T;
        try {
          return _.apply(this, arguments);
        } finally {
          p = P;
        }
      };
    });
})(Au);
(function (e) {
  e.exports = Au;
})(zu);
var Iu = Ke.exports,
  ge = zu.exports;
function v(e) {
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
var Du = new Set(),
  Vn = {};
function Ft(e, t) {
  ln(e, t), ln(e + "Capture", t);
}
function ln(e, t) {
  for (Vn[e] = t, e = 0; e < t.length; e++) Du.add(t[e]);
}
var Ge = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  fo = Object.prototype.hasOwnProperty,
  gf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  as = {},
  cs = {};
function wf(e) {
  return fo.call(cs, e)
    ? !0
    : fo.call(as, e)
    ? !1
    : gf.test(e)
    ? (cs[e] = !0)
    : ((as[e] = !0), !1);
}
function kf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Sf(e, t, n, r) {
  if (t === null || typeof t > "u" || kf(e, t, n, r)) return !0;
  if (r) return !1;
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
function ae(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var pl = /[\-:]([a-z])/g;
function hl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pl, hl);
    te[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pl, hl);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(pl, hl);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ml(e, t, n, r) {
  var i = te.hasOwnProperty(t) ? te[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Sf(t, n, i, r) && (n = null),
    r || i === null
      ? wf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var et = Iu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pr = Symbol.for("react.element"),
  jt = Symbol.for("react.portal"),
  $t = Symbol.for("react.fragment"),
  yl = Symbol.for("react.strict_mode"),
  po = Symbol.for("react.profiler"),
  Mu = Symbol.for("react.provider"),
  Fu = Symbol.for("react.context"),
  vl = Symbol.for("react.forward_ref"),
  ho = Symbol.for("react.suspense"),
  mo = Symbol.for("react.suspense_list"),
  gl = Symbol.for("react.memo"),
  nt = Symbol.for("react.lazy"),
  Bu = Symbol.for("react.offscreen"),
  fs = Symbol.iterator;
function wn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fs && e[fs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $ = Object.assign,
  Ui;
function Pn(e) {
  if (Ui === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ui = (t && t[1]) || "";
    }
  return (
    `
` +
    Ui +
    e
  );
}
var ji = !1;
function $i(e, t) {
  if (!e || ji) return "";
  ji = !0;
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
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var u =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (ji = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Pn(e) : "";
}
function Ef(e) {
  switch (e.tag) {
    case 5:
      return Pn(e.type);
    case 16:
      return Pn("Lazy");
    case 13:
      return Pn("Suspense");
    case 19:
      return Pn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = $i(e.type, !1)), e;
    case 11:
      return (e = $i(e.type.render, !1)), e;
    case 1:
      return (e = $i(e.type, !0)), e;
    default:
      return "";
  }
}
function yo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $t:
      return "Fragment";
    case jt:
      return "Portal";
    case po:
      return "Profiler";
    case yl:
      return "StrictMode";
    case ho:
      return "Suspense";
    case mo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Fu:
        return (e.displayName || "Context") + ".Consumer";
      case Mu:
        return (e._context.displayName || "Context") + ".Provider";
      case vl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case gl:
        return (
          (t = e.displayName || null), t !== null ? t : yo(e.type) || "Memo"
        );
      case nt:
        (t = e._payload), (e = e._init);
        try {
          return yo(e(t));
        } catch {}
    }
  return null;
}
function _f(e) {
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
      return yo(t);
    case 8:
      return t === yl ? "StrictMode" : "Mode";
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
function vt(e) {
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
function Uu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Cf(e) {
  var t = Uu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function hr(e) {
  e._valueTracker || (e._valueTracker = Cf(e));
}
function ju(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Uu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Yr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vo(e, t) {
  var n = t.checked;
  return $({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ds(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function $u(e, t) {
  (t = t.checked), t != null && ml(e, "checked", t, !1);
}
function go(e, t) {
  $u(e, t);
  var n = vt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? wo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && wo(e, t.type, vt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ps(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
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
function wo(e, t, n) {
  (t !== "number" || Yr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rn = Array.isArray;
function bt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + vt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ko(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(v(91));
  return $({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function hs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(v(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(v(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: vt(n) };
}
function Vu(e, t) {
  var n = vt(t.value),
    r = vt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ms(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Hu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function So(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Hu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var mr,
  Wu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        mr = mr || document.createElement("div"),
          mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = mr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Hn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var An = {
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
  xf = ["Webkit", "ms", "Moz", "O"];
Object.keys(An).forEach(function (e) {
  xf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (An[t] = An[e]);
  });
});
function Qu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (An.hasOwnProperty(e) && An[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ku(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Qu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Nf = $(
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
function Eo(e, t) {
  if (t) {
    if (Nf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(v(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(v(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(v(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(v(62));
  }
}
function _o(e, t) {
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
var Co = null;
function wl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var xo = null,
  en = null,
  tn = null;
function ys(e) {
  if ((e = ur(e))) {
    if (typeof xo != "function") throw Error(v(280));
    var t = e.stateNode;
    t && ((t = _i(t)), xo(e.stateNode, e.type, t));
  }
}
function Yu(e) {
  en ? (tn ? tn.push(e) : (tn = [e])) : (en = e);
}
function Xu() {
  if (en) {
    var e = en,
      t = tn;
    if (((tn = en = null), ys(e), t)) for (e = 0; e < t.length; e++) ys(t[e]);
  }
}
function qu(e, t) {
  return e(t);
}
function Gu() {}
var Vi = !1;
function Zu(e, t, n) {
  if (Vi) return e(t, n);
  Vi = !0;
  try {
    return qu(e, t, n);
  } finally {
    (Vi = !1), (en !== null || tn !== null) && (Gu(), Xu());
  }
}
function Wn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _i(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(v(231, t, typeof n));
  return n;
}
var No = !1;
if (Ge)
  try {
    var kn = {};
    Object.defineProperty(kn, "passive", {
      get: function () {
        No = !0;
      },
    }),
      window.addEventListener("test", kn, kn),
      window.removeEventListener("test", kn, kn);
  } catch {
    No = !1;
  }
function Tf(e, t, n, r, i, o, l, s, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var In = !1,
  Xr = null,
  qr = !1,
  To = null,
  Pf = {
    onError: function (e) {
      (In = !0), (Xr = e);
    },
  };
function Rf(e, t, n, r, i, o, l, s, u) {
  (In = !1), (Xr = null), Tf.apply(Pf, arguments);
}
function Lf(e, t, n, r, i, o, l, s, u) {
  if ((Rf.apply(this, arguments), In)) {
    if (In) {
      var c = Xr;
      (In = !1), (Xr = null);
    } else throw Error(v(198));
    qr || ((qr = !0), (To = c));
  }
}
function Bt(e) {
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
function Ju(e) {
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
function vs(e) {
  if (Bt(e) !== e) throw Error(v(188));
}
function Of(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Bt(e)), t === null)) throw Error(v(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return vs(i), e;
        if (o === r) return vs(i), t;
        o = o.sibling;
      }
      throw Error(v(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(v(189));
      }
    }
    if (n.alternate !== r) throw Error(v(190));
  }
  if (n.tag !== 3) throw Error(v(188));
  return n.stateNode.current === n ? e : t;
}
function bu(e) {
  return (e = Of(e)), e !== null ? ea(e) : null;
}
function ea(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ea(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ta = ge.unstable_scheduleCallback,
  gs = ge.unstable_cancelCallback,
  zf = ge.unstable_shouldYield,
  Af = ge.unstable_requestPaint,
  Q = ge.unstable_now,
  If = ge.unstable_getCurrentPriorityLevel,
  kl = ge.unstable_ImmediatePriority,
  na = ge.unstable_UserBlockingPriority,
  Gr = ge.unstable_NormalPriority,
  Df = ge.unstable_LowPriority,
  ra = ge.unstable_IdlePriority,
  wi = null,
  je = null;
function Mf(e) {
  if (je && typeof je.onCommitFiberRoot == "function")
    try {
      je.onCommitFiberRoot(wi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : Uf,
  Ff = Math.log,
  Bf = Math.LN2;
function Uf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ff(e) / Bf) | 0)) | 0;
}
var yr = 64,
  vr = 4194304;
function Ln(e) {
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
function Zr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (r = Ln(s)) : ((o &= l), o !== 0 && (r = Ln(o)));
  } else (l = n & ~i), l !== 0 ? (r = Ln(l)) : o !== 0 && (r = Ln(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ie(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function jf(e, t) {
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
function $f(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - Ie(o),
      s = 1 << l,
      u = i[l];
    u === -1
      ? (!(s & n) || s & r) && (i[l] = jf(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Po(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ia() {
  var e = yr;
  return (yr <<= 1), !(yr & 4194240) && (yr = 64), e;
}
function Hi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function lr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n);
}
function Vf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ie(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Sl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var A = 0;
function oa(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var la,
  El,
  sa,
  ua,
  aa,
  Ro = !1,
  gr = [],
  at = null,
  ct = null,
  ft = null,
  Qn = new Map(),
  Kn = new Map(),
  it = [],
  Hf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ws(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      at = null;
      break;
    case "dragenter":
    case "dragleave":
      ct = null;
      break;
    case "mouseover":
    case "mouseout":
      ft = null;
      break;
    case "pointerover":
    case "pointerout":
      Qn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kn.delete(t.pointerId);
  }
}
function Sn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ur(t)), t !== null && El(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Wf(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (at = Sn(at, e, t, n, r, i)), !0;
    case "dragenter":
      return (ct = Sn(ct, e, t, n, r, i)), !0;
    case "mouseover":
      return (ft = Sn(ft, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Qn.set(o, Sn(Qn.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Kn.set(o, Sn(Kn.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ca(e) {
  var t = Tt(e.target);
  if (t !== null) {
    var n = Bt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ju(n)), t !== null)) {
          (e.blockedOn = t),
            aa(e.priority, function () {
              sa(n);
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
function Ar(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Lo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Co = r), n.target.dispatchEvent(r), (Co = null);
    } else return (t = ur(n)), t !== null && El(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ks(e, t, n) {
  Ar(e) && n.delete(t);
}
function Qf() {
  (Ro = !1),
    at !== null && Ar(at) && (at = null),
    ct !== null && Ar(ct) && (ct = null),
    ft !== null && Ar(ft) && (ft = null),
    Qn.forEach(ks),
    Kn.forEach(ks);
}
function En(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ro ||
      ((Ro = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, Qf)));
}
function Yn(e) {
  function t(i) {
    return En(i, e);
  }
  if (0 < gr.length) {
    En(gr[0], e);
    for (var n = 1; n < gr.length; n++) {
      var r = gr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    at !== null && En(at, e),
      ct !== null && En(ct, e),
      ft !== null && En(ft, e),
      Qn.forEach(t),
      Kn.forEach(t),
      n = 0;
    n < it.length;
    n++
  )
    (r = it[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < it.length && ((n = it[0]), n.blockedOn === null); )
    ca(n), n.blockedOn === null && it.shift();
}
var nn = et.ReactCurrentBatchConfig,
  Jr = !0;
function Kf(e, t, n, r) {
  var i = A,
    o = nn.transition;
  nn.transition = null;
  try {
    (A = 1), _l(e, t, n, r);
  } finally {
    (A = i), (nn.transition = o);
  }
}
function Yf(e, t, n, r) {
  var i = A,
    o = nn.transition;
  nn.transition = null;
  try {
    (A = 4), _l(e, t, n, r);
  } finally {
    (A = i), (nn.transition = o);
  }
}
function _l(e, t, n, r) {
  if (Jr) {
    var i = Lo(e, t, n, r);
    if (i === null) bi(e, t, r, br, n), ws(e, r);
    else if (Wf(i, e, t, n, r)) r.stopPropagation();
    else if ((ws(e, r), t & 4 && -1 < Hf.indexOf(e))) {
      for (; i !== null; ) {
        var o = ur(i);
        if (
          (o !== null && la(o),
          (o = Lo(e, t, n, r)),
          o === null && bi(e, t, r, br, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else bi(e, t, r, null, n);
  }
}
var br = null;
function Lo(e, t, n, r) {
  if (((br = null), (e = wl(r)), (e = Tt(e)), e !== null))
    if (((t = Bt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ju(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (br = e), null;
}
function fa(e) {
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
      switch (If()) {
        case kl:
          return 1;
        case na:
          return 4;
        case Gr:
        case Df:
          return 16;
        case ra:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var lt = null,
  Cl = null,
  Ir = null;
function da() {
  if (Ir) return Ir;
  var e,
    t = Cl,
    n = t.length,
    r,
    i = "value" in lt ? lt.value : lt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (Ir = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Dr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function wr() {
  return !0;
}
function Ss() {
  return !1;
}
function ke(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? wr
        : Ss),
      (this.isPropagationStopped = Ss),
      this
    );
  }
  return (
    $(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = wr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = wr));
      },
      persist: function () {},
      isPersistent: wr,
    }),
    t
  );
}
var hn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xl = ke(hn),
  sr = $({}, hn, { view: 0, detail: 0 }),
  Xf = ke(sr),
  Wi,
  Qi,
  _n,
  ki = $({}, sr, {
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
    getModifierState: Nl,
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
        : (e !== _n &&
            (_n && e.type === "mousemove"
              ? ((Wi = e.screenX - _n.screenX), (Qi = e.screenY - _n.screenY))
              : (Qi = Wi = 0),
            (_n = e)),
          Wi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Qi;
    },
  }),
  Es = ke(ki),
  qf = $({}, ki, { dataTransfer: 0 }),
  Gf = ke(qf),
  Zf = $({}, sr, { relatedTarget: 0 }),
  Ki = ke(Zf),
  Jf = $({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bf = ke(Jf),
  ed = $({}, hn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  td = ke(ed),
  nd = $({}, hn, { data: 0 }),
  _s = ke(nd),
  rd = {
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
  id = {
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
  od = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ld(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = od[e]) ? !!t[e] : !1;
}
function Nl() {
  return ld;
}
var sd = $({}, sr, {
    key: function (e) {
      if (e.key) {
        var t = rd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Dr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? id[e.keyCode] || "Unidentified"
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
    getModifierState: Nl,
    charCode: function (e) {
      return e.type === "keypress" ? Dr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Dr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ud = ke(sd),
  ad = $({}, ki, {
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
  Cs = ke(ad),
  cd = $({}, sr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Nl,
  }),
  fd = ke(cd),
  dd = $({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pd = ke(dd),
  hd = $({}, ki, {
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
  md = ke(hd),
  yd = [9, 13, 27, 32],
  Tl = Ge && "CompositionEvent" in window,
  Dn = null;
Ge && "documentMode" in document && (Dn = document.documentMode);
var vd = Ge && "TextEvent" in window && !Dn,
  pa = Ge && (!Tl || (Dn && 8 < Dn && 11 >= Dn)),
  xs = String.fromCharCode(32),
  Ns = !1;
function ha(e, t) {
  switch (e) {
    case "keyup":
      return yd.indexOf(t.keyCode) !== -1;
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
function ma(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Vt = !1;
function gd(e, t) {
  switch (e) {
    case "compositionend":
      return ma(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ns = !0), xs);
    case "textInput":
      return (e = t.data), e === xs && Ns ? null : e;
    default:
      return null;
  }
}
function wd(e, t) {
  if (Vt)
    return e === "compositionend" || (!Tl && ha(e, t))
      ? ((e = da()), (Ir = Cl = lt = null), (Vt = !1), e)
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
      return pa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var kd = {
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
function Ts(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!kd[e.type] : t === "textarea";
}
function ya(e, t, n, r) {
  Yu(r),
    (t = ei(t, "onChange")),
    0 < t.length &&
      ((n = new xl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Mn = null,
  Xn = null;
function Sd(e) {
  Ta(e, 0);
}
function Si(e) {
  var t = Qt(e);
  if (ju(t)) return e;
}
function Ed(e, t) {
  if (e === "change") return t;
}
var va = !1;
if (Ge) {
  var Yi;
  if (Ge) {
    var Xi = "oninput" in document;
    if (!Xi) {
      var Ps = document.createElement("div");
      Ps.setAttribute("oninput", "return;"),
        (Xi = typeof Ps.oninput == "function");
    }
    Yi = Xi;
  } else Yi = !1;
  va = Yi && (!document.documentMode || 9 < document.documentMode);
}
function Rs() {
  Mn && (Mn.detachEvent("onpropertychange", ga), (Xn = Mn = null));
}
function ga(e) {
  if (e.propertyName === "value" && Si(Xn)) {
    var t = [];
    ya(t, Xn, e, wl(e)), Zu(Sd, t);
  }
}
function _d(e, t, n) {
  e === "focusin"
    ? (Rs(), (Mn = t), (Xn = n), Mn.attachEvent("onpropertychange", ga))
    : e === "focusout" && Rs();
}
function Cd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Si(Xn);
}
function xd(e, t) {
  if (e === "click") return Si(t);
}
function Nd(e, t) {
  if (e === "input" || e === "change") return Si(t);
}
function Td(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == "function" ? Object.is : Td;
function qn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!fo.call(t, i) || !Me(e[i], t[i])) return !1;
  }
  return !0;
}
function Ls(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Os(e, t) {
  var n = Ls(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
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
    n = Ls(n);
  }
}
function wa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? wa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ka() {
  for (var e = window, t = Yr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yr(e.document);
  }
  return t;
}
function Pl(e) {
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
function Pd(e) {
  var t = ka(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    wa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Pl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Os(n, o));
        var l = Os(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
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
var Rd = Ge && "documentMode" in document && 11 >= document.documentMode,
  Ht = null,
  Oo = null,
  Fn = null,
  zo = !1;
function zs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zo ||
    Ht == null ||
    Ht !== Yr(r) ||
    ((r = Ht),
    "selectionStart" in r && Pl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fn && qn(Fn, r)) ||
      ((Fn = r),
      (r = ei(Oo, "onSelect")),
      0 < r.length &&
        ((t = new xl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ht))));
}
function kr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Wt = {
    animationend: kr("Animation", "AnimationEnd"),
    animationiteration: kr("Animation", "AnimationIteration"),
    animationstart: kr("Animation", "AnimationStart"),
    transitionend: kr("Transition", "TransitionEnd"),
  },
  qi = {},
  Sa = {};
Ge &&
  ((Sa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wt.animationend.animation,
    delete Wt.animationiteration.animation,
    delete Wt.animationstart.animation),
  "TransitionEvent" in window || delete Wt.transitionend.transition);
function Ei(e) {
  if (qi[e]) return qi[e];
  if (!Wt[e]) return e;
  var t = Wt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Sa) return (qi[e] = t[n]);
  return e;
}
var Ea = Ei("animationend"),
  _a = Ei("animationiteration"),
  Ca = Ei("animationstart"),
  xa = Ei("transitionend"),
  Na = new Map(),
  As =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function wt(e, t) {
  Na.set(e, t), Ft(t, [e]);
}
for (var Gi = 0; Gi < As.length; Gi++) {
  var Zi = As[Gi],
    Ld = Zi.toLowerCase(),
    Od = Zi[0].toUpperCase() + Zi.slice(1);
  wt(Ld, "on" + Od);
}
wt(Ea, "onAnimationEnd");
wt(_a, "onAnimationIteration");
wt(Ca, "onAnimationStart");
wt("dblclick", "onDoubleClick");
wt("focusin", "onFocus");
wt("focusout", "onBlur");
wt(xa, "onTransitionEnd");
ln("onMouseEnter", ["mouseout", "mouseover"]);
ln("onMouseLeave", ["mouseout", "mouseover"]);
ln("onPointerEnter", ["pointerout", "pointerover"]);
ln("onPointerLeave", ["pointerout", "pointerover"]);
Ft(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ft(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ft("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ft(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ft(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ft(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var On =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  zd = new Set("cancel close invalid load scroll toggle".split(" ").concat(On));
function Is(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Lf(r, t, void 0, e), (e.currentTarget = null);
}
function Ta(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            u = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), u !== o && i.isPropagationStopped())) break e;
          Is(i, s, c), (o = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          Is(i, s, c), (o = u);
        }
    }
  }
  if (qr) throw ((e = To), (qr = !1), (To = null), e);
}
function D(e, t) {
  var n = t[Fo];
  n === void 0 && (n = t[Fo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Pa(t, e, 2, !1), n.add(r));
}
function Ji(e, t, n) {
  var r = 0;
  t && (r |= 4), Pa(n, e, r, t);
}
var Sr = "_reactListening" + Math.random().toString(36).slice(2);
function Gn(e) {
  if (!e[Sr]) {
    (e[Sr] = !0),
      Du.forEach(function (n) {
        n !== "selectionchange" && (zd.has(n) || Ji(n, !1, e), Ji(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Sr] || ((t[Sr] = !0), Ji("selectionchange", !1, t));
  }
}
function Pa(e, t, n, r) {
  switch (fa(t)) {
    case 1:
      var i = Kf;
      break;
    case 4:
      i = Yf;
      break;
    default:
      i = _l;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !No ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function bi(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = Tt(s)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Zu(function () {
    var c = o,
      m = wl(n),
      h = [];
    e: {
      var p = Na.get(e);
      if (p !== void 0) {
        var g = xl,
          w = e;
        switch (e) {
          case "keypress":
            if (Dr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = ud;
            break;
          case "focusin":
            (w = "focus"), (g = Ki);
            break;
          case "focusout":
            (w = "blur"), (g = Ki);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ki;
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
            g = Es;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Gf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = fd;
            break;
          case Ea:
          case _a:
          case Ca:
            g = bf;
            break;
          case xa:
            g = pd;
            break;
          case "scroll":
            g = Xf;
            break;
          case "wheel":
            g = md;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = td;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Cs;
        }
        var k = (t & 4) !== 0,
          F = !k && e === "scroll",
          f = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              f !== null && ((y = Wn(a, f)), y != null && k.push(Zn(a, y, d)))),
            F)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((p = new g(p, w, null, n, m)), h.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Co &&
            (w = n.relatedTarget || n.fromElement) &&
            (Tt(w) || w[Ze]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = c),
              (w = w ? Tt(w) : null),
              w !== null &&
                ((F = Bt(w)), w !== F || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = c)),
          g !== w)
        ) {
          if (
            ((k = Es),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = Cs),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (F = g == null ? p : Qt(g)),
            (d = w == null ? p : Qt(w)),
            (p = new k(y, a + "leave", g, n, m)),
            (p.target = F),
            (p.relatedTarget = d),
            (y = null),
            Tt(m) === c &&
              ((k = new k(f, a + "enter", w, n, m)),
              (k.target = d),
              (k.relatedTarget = F),
              (y = k)),
            (F = y),
            g && w)
          )
            t: {
              for (k = g, f = w, a = 0, d = k; d; d = Ut(d)) a++;
              for (d = 0, y = f; y; y = Ut(y)) d++;
              for (; 0 < a - d; ) (k = Ut(k)), a--;
              for (; 0 < d - a; ) (f = Ut(f)), d--;
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Ut(k)), (f = Ut(f));
              }
              k = null;
            }
          else k = null;
          g !== null && Ds(h, p, g, k, !1),
            w !== null && F !== null && Ds(h, F, w, k, !0);
        }
      }
      e: {
        if (
          ((p = c ? Qt(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var E = Ed;
        else if (Ts(p))
          if (va) E = Nd;
          else {
            E = Cd;
            var C = _d;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = xd);
        if (E && (E = E(e, c))) {
          ya(h, E, n, m);
          break e;
        }
        C && C(e, p, c),
          e === "focusout" &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === "number" &&
            wo(p, "number", p.value);
      }
      switch (((C = c ? Qt(c) : window), e)) {
        case "focusin":
          (Ts(C) || C.contentEditable === "true") &&
            ((Ht = C), (Oo = c), (Fn = null));
          break;
        case "focusout":
          Fn = Oo = Ht = null;
          break;
        case "mousedown":
          zo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (zo = !1), zs(h, n, m);
          break;
        case "selectionchange":
          if (Rd) break;
        case "keydown":
        case "keyup":
          zs(h, n, m);
      }
      var x;
      if (Tl)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Vt
          ? ha(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (pa &&
          n.locale !== "ko" &&
          (Vt || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Vt && (x = da())
            : ((lt = m),
              (Cl = "value" in lt ? lt.value : lt.textContent),
              (Vt = !0))),
        (C = ei(c, N)),
        0 < C.length &&
          ((N = new _s(N, e, null, n, m)),
          h.push({ event: N, listeners: C }),
          x ? (N.data = x) : ((x = ma(n)), x !== null && (N.data = x)))),
        (x = vd ? gd(e, n) : wd(e, n)) &&
          ((c = ei(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new _s("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: c }),
            (m.data = x)));
    }
    Ta(h, t);
  });
}
function Zn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ei(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Wn(e, n)),
      o != null && r.unshift(Zn(e, o, i)),
      (o = Wn(e, t)),
      o != null && r.push(Zn(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Ut(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ds(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      i
        ? ((u = Wn(n, o)), u != null && l.unshift(Zn(n, u, s)))
        : i || ((u = Wn(n, o)), u != null && l.push(Zn(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Ad = /\r\n?/g,
  Id = /\u0000|\uFFFD/g;
function Ms(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ad,
      `
`
    )
    .replace(Id, "");
}
function Er(e, t, n) {
  if (((t = Ms(t)), Ms(e) !== t && n)) throw Error(v(425));
}
function ti() {}
var Ao = null,
  Io = null;
function Do(e, t) {
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
var Mo = typeof setTimeout == "function" ? setTimeout : void 0,
  Dd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Fs = typeof Promise == "function" ? Promise : void 0,
  Md =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Fs < "u"
      ? function (e) {
          return Fs.resolve(null).then(e).catch(Fd);
        }
      : Mo;
function Fd(e) {
  setTimeout(function () {
    throw e;
  });
}
function eo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Yn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Yn(t);
}
function dt(e) {
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
function Bs(e) {
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
var mn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + mn,
  Jn = "__reactProps$" + mn,
  Ze = "__reactContainer$" + mn,
  Fo = "__reactEvents$" + mn,
  Bd = "__reactListeners$" + mn,
  Ud = "__reactHandles$" + mn;
function Tt(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ze] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Bs(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Bs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ur(e) {
  return (
    (e = e[Ue] || e[Ze]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(v(33));
}
function _i(e) {
  return e[Jn] || null;
}
var Bo = [],
  Kt = -1;
function kt(e) {
  return { current: e };
}
function M(e) {
  0 > Kt || ((e.current = Bo[Kt]), (Bo[Kt] = null), Kt--);
}
function I(e, t) {
  Kt++, (Bo[Kt] = e.current), (e.current = t);
}
var gt = {},
  oe = kt(gt),
  de = kt(!1),
  zt = gt;
function sn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function ni() {
  M(de), M(oe);
}
function Us(e, t, n) {
  if (oe.current !== gt) throw Error(v(168));
  I(oe, t), I(de, n);
}
function Ra(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(v(108, _f(e) || "Unknown", i));
  return $({}, n, r);
}
function ri(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gt),
    (zt = oe.current),
    I(oe, e),
    I(de, de.current),
    !0
  );
}
function js(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(v(169));
  n
    ? ((e = Ra(e, t, zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      M(de),
      M(oe),
      I(oe, e))
    : M(de),
    I(de, n);
}
var Qe = null,
  Ci = !1,
  to = !1;
function La(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
function jd(e) {
  (Ci = !0), La(e);
}
function St() {
  if (!to && Qe !== null) {
    to = !0;
    var e = 0,
      t = A;
    try {
      var n = Qe;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Qe = null), (Ci = !1);
    } catch (i) {
      throw (Qe !== null && (Qe = Qe.slice(e + 1)), ta(kl, St), i);
    } finally {
      (A = t), (to = !1);
    }
  }
  return null;
}
var Yt = [],
  Xt = 0,
  ii = null,
  oi = 0,
  Se = [],
  Ee = 0,
  At = null,
  Ye = 1,
  Xe = "";
function Ct(e, t) {
  (Yt[Xt++] = oi), (Yt[Xt++] = ii), (ii = e), (oi = t);
}
function Oa(e, t, n) {
  (Se[Ee++] = Ye), (Se[Ee++] = Xe), (Se[Ee++] = At), (At = e);
  var r = Ye;
  e = Xe;
  var i = 32 - Ie(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ie(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (Ye = (1 << (32 - Ie(t) + i)) | (n << i) | r),
      (Xe = o + e);
  } else (Ye = (1 << o) | (n << i) | r), (Xe = e);
}
function Rl(e) {
  e.return !== null && (Ct(e, 1), Oa(e, 1, 0));
}
function Ll(e) {
  for (; e === ii; )
    (ii = Yt[--Xt]), (Yt[Xt] = null), (oi = Yt[--Xt]), (Yt[Xt] = null);
  for (; e === At; )
    (At = Se[--Ee]),
      (Se[Ee] = null),
      (Xe = Se[--Ee]),
      (Se[Ee] = null),
      (Ye = Se[--Ee]),
      (Se[Ee] = null);
}
var ve = null,
  ye = null,
  B = !1,
  Ae = null;
function za(e, t) {
  var n = _e(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function $s(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ve = e), (ye = dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ve = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = At !== null ? { id: Ye, overflow: Xe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = _e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ve = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Uo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function jo(e) {
  if (B) {
    var t = ye;
    if (t) {
      var n = t;
      if (!$s(e, t)) {
        if (Uo(e)) throw Error(v(418));
        t = dt(n.nextSibling);
        var r = ve;
        t && $s(e, t)
          ? za(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (ve = e));
      }
    } else {
      if (Uo(e)) throw Error(v(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (ve = e);
    }
  }
}
function Vs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function _r(e) {
  if (e !== ve) return !1;
  if (!B) return Vs(e), (B = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Do(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Uo(e)) throw (Aa(), Error(v(418)));
    for (; t; ) za(e, t), (t = dt(t.nextSibling));
  }
  if ((Vs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(v(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = ve ? dt(e.stateNode.nextSibling) : null;
  return !0;
}
function Aa() {
  for (var e = ye; e; ) e = dt(e.nextSibling);
}
function un() {
  (ye = ve = null), (B = !1);
}
function Ol(e) {
  Ae === null ? (Ae = [e]) : Ae.push(e);
}
var $d = et.ReactCurrentBatchConfig;
function Re(e, t) {
  if (e && e.defaultProps) {
    (t = $({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var li = kt(null),
  si = null,
  qt = null,
  zl = null;
function Al() {
  zl = qt = si = null;
}
function Il(e) {
  var t = li.current;
  M(li), (e._currentValue = t);
}
function $o(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function rn(e, t) {
  (si = e),
    (zl = qt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function xe(e) {
  var t = e._currentValue;
  if (zl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), qt === null)) {
      if (si === null) throw Error(v(308));
      (qt = e), (si.dependencies = { lanes: 0, firstContext: e });
    } else qt = qt.next = e;
  return t;
}
var Pt = null;
function Dl(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function Ia(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Dl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Je(e, r)
  );
}
function Je(e, t) {
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
var rt = !1;
function Ml(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Da(e, t) {
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
function qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), z & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Je(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Dl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Je(e, n)
  );
}
function Mr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sl(e, n);
  }
}
function Hs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ui(e, t, n, r) {
  var i = e.updateQueue;
  rt = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var u = s,
      c = u.next;
    (u.next = null), l === null ? (o = c) : (l.next = c), (l = u);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (s = m.lastBaseUpdate),
      s !== l &&
        (s === null ? (m.firstBaseUpdate = c) : (s.next = c),
        (m.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var h = i.baseState;
    (l = 0), (m = c = u = null), (s = o);
    do {
      var p = s.lane,
        g = s.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            k = s;
          switch (((p = t), (g = n), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                h = w.call(g, h, p);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (p = typeof w == "function" ? w.call(g, h, p) : w),
                p == null)
              )
                break e;
              h = $({}, h, p);
              break e;
            case 2:
              rt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [s]) : p.push(s));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          m === null ? ((c = m = g), (u = h)) : (m = m.next = g),
          (l |= p);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (p = s),
          (s = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (u = h),
      (i.baseState = u),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = m),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Dt |= l), (e.lanes = l), (e.memoizedState = h);
  }
}
function Ws(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(v(191, i));
        i.call(r);
      }
    }
}
var Ma = new Iu.Component().refs;
function Vo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : $({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Bt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      i = mt(e),
      o = qe(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = pt(e, o, i)),
      t !== null && (De(t, e, i, r), Mr(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      i = mt(e),
      o = qe(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = pt(e, o, i)),
      t !== null && (De(t, e, i, r), Mr(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = mt(e),
      i = qe(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = pt(e, i, r)),
      t !== null && (De(t, e, r, n), Mr(t, e, r));
  },
};
function Qs(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !qn(n, r) || !qn(i, o)
      : !0
  );
}
function Fa(e, t, n) {
  var r = !1,
    i = gt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = xe(o))
      : ((i = pe(t) ? zt : oe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? sn(e, i) : gt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ks(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xi.enqueueReplaceState(t, t.state, null);
}
function Ho(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Ma), Ml(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = xe(o))
    : ((o = pe(t) ? zt : oe.current), (i.context = sn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Vo(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && xi.enqueueReplaceState(i, i.state, null),
      ui(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Cn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(v(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(v(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs;
            s === Ma && (s = i.refs = {}),
              l === null ? delete s[o] : (s[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(v(284));
    if (!n._owner) throw Error(v(290, e));
  }
  return e;
}
function Cr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      v(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ys(e) {
  var t = e._init;
  return t(e._payload);
}
function Ba(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function i(f, a) {
    return (f = yt(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, a, d, y) {
    return a === null || a.tag !== 6
      ? ((a = uo(d, f.mode, y)), (a.return = f), a)
      : ((a = i(a, d)), (a.return = f), a);
  }
  function u(f, a, d, y) {
    var E = d.type;
    return E === $t
      ? m(f, a, d.props.children, y, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === nt &&
            Ys(E) === a.type))
      ? ((y = i(a, d.props)), (y.ref = Cn(f, a, d)), (y.return = f), y)
      : ((y = Vr(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = Cn(f, a, d)),
        (y.return = f),
        y);
  }
  function c(f, a, d, y) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = ao(d, f.mode, y)), (a.return = f), a)
      : ((a = i(a, d.children || [])), (a.return = f), a);
  }
  function m(f, a, d, y, E) {
    return a === null || a.tag !== 7
      ? ((a = Ot(d, f.mode, y, E)), (a.return = f), a)
      : ((a = i(a, d)), (a.return = f), a);
  }
  function h(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = uo("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case pr:
          return (
            (d = Vr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = Cn(f, null, a)),
            (d.return = f),
            d
          );
        case jt:
          return (a = ao(a, f.mode, d)), (a.return = f), a;
        case nt:
          var y = a._init;
          return h(f, y(a._payload), d);
      }
      if (Rn(a) || wn(a))
        return (a = Ot(a, f.mode, d, null)), (a.return = f), a;
      Cr(f, a);
    }
    return null;
  }
  function p(f, a, d, y) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : s(f, a, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case pr:
          return d.key === E ? u(f, a, d, y) : null;
        case jt:
          return d.key === E ? c(f, a, d, y) : null;
        case nt:
          return (E = d._init), p(f, a, E(d._payload), y);
      }
      if (Rn(d) || wn(d)) return E !== null ? null : m(f, a, d, y, null);
      Cr(f, d);
    }
    return null;
  }
  function g(f, a, d, y, E) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(d) || null), s(a, f, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case pr:
          return (f = f.get(y.key === null ? d : y.key) || null), u(a, f, y, E);
        case jt:
          return (f = f.get(y.key === null ? d : y.key) || null), c(a, f, y, E);
        case nt:
          var C = y._init;
          return g(f, a, d, C(y._payload), E);
      }
      if (Rn(y) || wn(y)) return (f = f.get(d) || null), m(a, f, y, E, null);
      Cr(a, y);
    }
    return null;
  }
  function w(f, a, d, y) {
    for (
      var E = null, C = null, x = a, N = (a = 0), H = null;
      x !== null && N < d.length;
      N++
    ) {
      x.index > N ? ((H = x), (x = null)) : (H = x.sibling);
      var L = p(f, x, d[N], y);
      if (L === null) {
        x === null && (x = H);
        break;
      }
      e && x && L.alternate === null && t(f, x),
        (a = o(L, a, N)),
        C === null ? (E = L) : (C.sibling = L),
        (C = L),
        (x = H);
    }
    if (N === d.length) return n(f, x), B && Ct(f, N), E;
    if (x === null) {
      for (; N < d.length; N++)
        (x = h(f, d[N], y)),
          x !== null &&
            ((a = o(x, a, N)), C === null ? (E = x) : (C.sibling = x), (C = x));
      return B && Ct(f, N), E;
    }
    for (x = r(f, x); N < d.length; N++)
      (H = g(x, f, N, d[N], y)),
        H !== null &&
          (e && H.alternate !== null && x.delete(H.key === null ? N : H.key),
          (a = o(H, a, N)),
          C === null ? (E = H) : (C.sibling = H),
          (C = H));
    return (
      e &&
        x.forEach(function (Te) {
          return t(f, Te);
        }),
      B && Ct(f, N),
      E
    );
  }
  function k(f, a, d, y) {
    var E = wn(d);
    if (typeof E != "function") throw Error(v(150));
    if (((d = E.call(d)), d == null)) throw Error(v(151));
    for (
      var C = (E = null), x = a, N = (a = 0), H = null, L = d.next();
      x !== null && !L.done;
      N++, L = d.next()
    ) {
      x.index > N ? ((H = x), (x = null)) : (H = x.sibling);
      var Te = p(f, x, L.value, y);
      if (Te === null) {
        x === null && (x = H);
        break;
      }
      e && x && Te.alternate === null && t(f, x),
        (a = o(Te, a, N)),
        C === null ? (E = Te) : (C.sibling = Te),
        (C = Te),
        (x = H);
    }
    if (L.done) return n(f, x), B && Ct(f, N), E;
    if (x === null) {
      for (; !L.done; N++, L = d.next())
        (L = h(f, L.value, y)),
          L !== null &&
            ((a = o(L, a, N)), C === null ? (E = L) : (C.sibling = L), (C = L));
      return B && Ct(f, N), E;
    }
    for (x = r(f, x); !L.done; N++, L = d.next())
      (L = g(x, f, N, L.value, y)),
        L !== null &&
          (e && L.alternate !== null && x.delete(L.key === null ? N : L.key),
          (a = o(L, a, N)),
          C === null ? (E = L) : (C.sibling = L),
          (C = L));
    return (
      e &&
        x.forEach(function (vn) {
          return t(f, vn);
        }),
      B && Ct(f, N),
      E
    );
  }
  function F(f, a, d, y) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === $t &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case pr:
          e: {
            for (var E = d.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (((E = d.type), E === $t)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (a = i(C, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === nt &&
                    Ys(E) === C.type)
                ) {
                  n(f, C.sibling),
                    (a = i(C, d.props)),
                    (a.ref = Cn(f, C, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === $t
              ? ((a = Ot(d.props.children, f.mode, y, d.key)),
                (a.return = f),
                (f = a))
              : ((y = Vr(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = Cn(f, a, d)),
                (y.return = f),
                (f = y));
          }
          return l(f);
        case jt:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = i(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = ao(d, f.mode, y)), (a.return = f), (f = a);
          }
          return l(f);
        case nt:
          return (C = d._init), F(f, a, C(d._payload), y);
      }
      if (Rn(d)) return w(f, a, d, y);
      if (wn(d)) return k(f, a, d, y);
      Cr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = i(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = uo(d, f.mode, y)), (a.return = f), (f = a)),
        l(f))
      : n(f, a);
  }
  return F;
}
var an = Ba(!0),
  Ua = Ba(!1),
  ar = {},
  $e = kt(ar),
  bn = kt(ar),
  er = kt(ar);
function Rt(e) {
  if (e === ar) throw Error(v(174));
  return e;
}
function Fl(e, t) {
  switch ((I(er, t), I(bn, e), I($e, ar), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : So(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = So(t, e));
  }
  M($e), I($e, t);
}
function cn() {
  M($e), M(bn), M(er);
}
function ja(e) {
  Rt(er.current);
  var t = Rt($e.current),
    n = So(t, e.type);
  t !== n && (I(bn, e), I($e, n));
}
function Bl(e) {
  bn.current === e && (M($e), M(bn));
}
var U = kt(0);
function ai(e) {
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
var no = [];
function Ul() {
  for (var e = 0; e < no.length; e++)
    no[e]._workInProgressVersionPrimary = null;
  no.length = 0;
}
var Fr = et.ReactCurrentDispatcher,
  ro = et.ReactCurrentBatchConfig,
  It = 0,
  j = null,
  X = null,
  Z = null,
  ci = !1,
  Bn = !1,
  tr = 0,
  Vd = 0;
function ne() {
  throw Error(v(321));
}
function jl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function $l(e, t, n, r, i, o) {
  if (
    ((It = o),
    (j = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fr.current = e === null || e.memoizedState === null ? Kd : Yd),
    (e = n(r, i)),
    Bn)
  ) {
    o = 0;
    do {
      if (((Bn = !1), (tr = 0), 25 <= o)) throw Error(v(301));
      (o += 1),
        (Z = X = null),
        (t.updateQueue = null),
        (Fr.current = Xd),
        (e = n(r, i));
    } while (Bn);
  }
  if (
    ((Fr.current = fi),
    (t = X !== null && X.next !== null),
    (It = 0),
    (Z = X = j = null),
    (ci = !1),
    t)
  )
    throw Error(v(300));
  return e;
}
function Vl() {
  var e = tr !== 0;
  return (tr = 0), e;
}
function Be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (j.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Ne() {
  if (X === null) {
    var e = j.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = Z === null ? j.memoizedState : Z.next;
  if (t !== null) (Z = t), (X = e);
  else {
    if (e === null) throw Error(v(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      Z === null ? (j.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function nr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function io(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(v(311));
  n.lastRenderedReducer = e;
  var r = X,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (l = null),
      u = null,
      c = o;
    do {
      var m = c.lane;
      if ((It & m) === m)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((s = u = h), (l = r)) : (u = u.next = h),
          (j.lanes |= m),
          (Dt |= m);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (l = r) : (u.next = s),
      Me(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (j.lanes |= o), (Dt |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function oo(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(v(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    Me(o, t.memoizedState) || (fe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function $a() {}
function Va(e, t) {
  var n = j,
    r = Ne(),
    i = t(),
    o = !Me(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (fe = !0)),
    (r = r.queue),
    Hl(Qa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      rr(9, Wa.bind(null, n, r, i, t), void 0, null),
      J === null)
    )
      throw Error(v(349));
    It & 30 || Ha(n, t, i);
  }
  return i;
}
function Ha(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = j.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (j.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Wa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ka(t) && Ya(e);
}
function Qa(e, t, n) {
  return n(function () {
    Ka(t) && Ya(e);
  });
}
function Ka(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function Ya(e) {
  var t = Je(e, 1);
  t !== null && De(t, e, 1, -1);
}
function Xs(e) {
  var t = Be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Qd.bind(null, j, e)),
    [t.memoizedState, e]
  );
}
function rr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = j.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (j.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Xa() {
  return Ne().memoizedState;
}
function Br(e, t, n, r) {
  var i = Be();
  (j.flags |= e),
    (i.memoizedState = rr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ni(e, t, n, r) {
  var i = Ne();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var l = X.memoizedState;
    if (((o = l.destroy), r !== null && jl(r, l.deps))) {
      i.memoizedState = rr(t, n, o, r);
      return;
    }
  }
  (j.flags |= e), (i.memoizedState = rr(1 | t, n, o, r));
}
function qs(e, t) {
  return Br(8390656, 8, e, t);
}
function Hl(e, t) {
  return Ni(2048, 8, e, t);
}
function qa(e, t) {
  return Ni(4, 2, e, t);
}
function Ga(e, t) {
  return Ni(4, 4, e, t);
}
function Za(e, t) {
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
function Ja(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ni(4, 4, Za.bind(null, t, e), n)
  );
}
function Wl() {}
function ba(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && jl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ec(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && jl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function tc(e, t, n) {
  return It & 21
    ? (Me(n, t) || ((n = ia()), (j.lanes |= n), (Dt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function Hd(e, t) {
  var n = A;
  (A = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ro.transition;
  ro.transition = {};
  try {
    e(!1), t();
  } finally {
    (A = n), (ro.transition = r);
  }
}
function nc() {
  return Ne().memoizedState;
}
function Wd(e, t, n) {
  var r = mt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    rc(e))
  )
    ic(t, n);
  else if (((n = Ia(e, t, n, r)), n !== null)) {
    var i = se();
    De(n, e, r, i), oc(n, t, r);
  }
}
function Qd(e, t, n) {
  var r = mt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (rc(e)) ic(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), Me(s, l))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), Dl(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ia(e, t, i, r)),
      n !== null && ((i = se()), De(n, e, r, i), oc(n, t, r));
  }
}
function rc(e) {
  var t = e.alternate;
  return e === j || (t !== null && t === j);
}
function ic(e, t) {
  Bn = ci = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function oc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sl(e, n);
  }
}
var fi = {
    readContext: xe,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  Kd = {
    readContext: xe,
    useCallback: function (e, t) {
      return (Be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: xe,
    useEffect: qs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Br(4194308, 4, Za.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Br(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Br(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Wd.bind(null, j, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Xs,
    useDebugValue: Wl,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = Xs(!1),
        t = e[0];
      return (e = Hd.bind(null, e[1])), (Be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = j,
        i = Be();
      if (B) {
        if (n === void 0) throw Error(v(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(v(349));
        It & 30 || Ha(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        qs(Qa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        rr(9, Wa.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Be(),
        t = J.identifierPrefix;
      if (B) {
        var n = Xe,
          r = Ye;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = tr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Vd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Yd = {
    readContext: xe,
    useCallback: ba,
    useContext: xe,
    useEffect: Hl,
    useImperativeHandle: Ja,
    useInsertionEffect: qa,
    useLayoutEffect: Ga,
    useMemo: ec,
    useReducer: io,
    useRef: Xa,
    useState: function () {
      return io(nr);
    },
    useDebugValue: Wl,
    useDeferredValue: function (e) {
      var t = Ne();
      return tc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = io(nr)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: $a,
    useSyncExternalStore: Va,
    useId: nc,
    unstable_isNewReconciler: !1,
  },
  Xd = {
    readContext: xe,
    useCallback: ba,
    useContext: xe,
    useEffect: Hl,
    useImperativeHandle: Ja,
    useInsertionEffect: qa,
    useLayoutEffect: Ga,
    useMemo: ec,
    useReducer: oo,
    useRef: Xa,
    useState: function () {
      return oo(nr);
    },
    useDebugValue: Wl,
    useDeferredValue: function (e) {
      var t = Ne();
      return X === null ? (t.memoizedState = e) : tc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = oo(nr)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: $a,
    useSyncExternalStore: Va,
    useId: nc,
    unstable_isNewReconciler: !1,
  };
function fn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ef(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function lo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Wo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var qd = typeof WeakMap == "function" ? WeakMap : Map;
function lc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      pi || ((pi = !0), (el = r)), Wo(e, t);
    }),
    n
  );
}
function sc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Wo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Wo(e, t),
          typeof r != "function" &&
            (ht === null ? (ht = new Set([this])) : ht.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Gs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qd();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = ap.bind(null, e, t, n)), t.then(e, e));
}
function Zs(e) {
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
function Js(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = qe(-1, 1)), (t.tag = 2), pt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Gd = et.ReactCurrentOwner,
  fe = !1;
function le(e, t, n, r) {
  t.child = e === null ? Ua(t, null, n, r) : an(t, e.child, n, r);
}
function bs(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    rn(t, i),
    (r = $l(e, t, n, r, o, i)),
    (n = Vl()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        be(e, t, i))
      : (B && n && Rl(t), (t.flags |= 1), le(e, t, r, i), t.child)
  );
}
function eu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Jl(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), uc(e, t, o, r, i))
      : ((e = Vr(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : qn), n(l, r) && e.ref === t.ref)
    )
      return be(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = yt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function uc(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (qn(o, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), be(e, t, i);
  }
  return Qo(e, t, n, r, i);
}
function ac(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(Zt, me),
        (me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          I(Zt, me),
          (me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        I(Zt, me),
        (me |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(Zt, me),
      (me |= r);
  return le(e, t, i, n), t.child;
}
function cc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Qo(e, t, n, r, i) {
  var o = pe(n) ? zt : oe.current;
  return (
    (o = sn(t, o)),
    rn(t, i),
    (n = $l(e, t, n, r, o, i)),
    (r = Vl()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        be(e, t, i))
      : (B && r && Rl(t), (t.flags |= 1), le(e, t, n, i), t.child)
  );
}
function tu(e, t, n, r, i) {
  if (pe(n)) {
    var o = !0;
    ri(t);
  } else o = !1;
  if ((rn(t, i), t.stateNode === null))
    Ur(e, t), Fa(t, n, r), Ho(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = xe(c))
      : ((c = pe(n) ? zt : oe.current), (c = sn(t, c)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || u !== c) && Ks(t, l, r, c)),
      (rt = !1);
    var p = t.memoizedState;
    (l.state = p),
      ui(t, r, l, i),
      (u = t.memoizedState),
      s !== r || p !== u || de.current || rt
        ? (typeof m == "function" && (Vo(t, n, m, r), (u = t.memoizedState)),
          (s = rt || Qs(t, n, s, r, p, u, c))
            ? (h ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = c),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Da(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Re(t.type, s)),
      (l.props = c),
      (h = t.pendingProps),
      (p = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = xe(u))
        : ((u = pe(n) ? zt : oe.current), (u = sn(t, u)));
    var g = n.getDerivedStateFromProps;
    (m =
      typeof g == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== h || p !== u) && Ks(t, l, r, u)),
      (rt = !1),
      (p = t.memoizedState),
      (l.state = p),
      ui(t, r, l, i);
    var w = t.memoizedState;
    s !== h || p !== w || de.current || rt
      ? (typeof g == "function" && (Vo(t, n, g, r), (w = t.memoizedState)),
        (c = rt || Qs(t, n, c, r, p, w, u) || !1)
          ? (m ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, w, u),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, w, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = u),
        (r = c))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ko(e, t, n, r, o, i);
}
function Ko(e, t, n, r, i, o) {
  cc(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && js(t, n, !1), be(e, t, o);
  (r = t.stateNode), (Gd.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = an(t, e.child, null, o)), (t.child = an(t, null, s, o)))
      : le(e, t, s, o),
    (t.memoizedState = r.state),
    i && js(t, n, !0),
    t.child
  );
}
function fc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Us(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Us(e, t.context, !1),
    Fl(e, t.containerInfo);
}
function nu(e, t, n, r, i) {
  return un(), Ol(i), (t.flags |= 256), le(e, t, n, r), t.child;
}
var Yo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Xo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function dc(e, t, n) {
  var r = t.pendingProps,
    i = U.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    I(U, i & 1),
    e === null)
  )
    return (
      jo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = Ri(l, r, 0, null)),
              (e = Ot(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Xo(n)),
              (t.memoizedState = Yo),
              e)
            : Ql(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return Zd(e, t, l, r, s, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = yt(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = yt(s, o)) : ((o = Ot(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Xo(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Yo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = yt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ql(e, t) {
  return (
    (t = Ri({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function xr(e, t, n, r) {
  return (
    r !== null && Ol(r),
    an(t, e.child, null, n),
    (e = Ql(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Zd(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = lo(Error(v(422)))), xr(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Ri({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Ot(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && an(t, e.child, null, l),
        (t.child.memoizedState = Xo(l)),
        (t.memoizedState = Yo),
        o);
  if (!(t.mode & 1)) return xr(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(v(419))), (r = lo(o, r, void 0)), xr(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), fe || s)) {
    if (((r = J), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Je(e, i), De(r, e, i, -1));
    }
    return Zl(), (r = lo(Error(v(421)))), xr(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = cp.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ye = dt(i.nextSibling)),
      (ve = t),
      (B = !0),
      (Ae = null),
      e !== null &&
        ((Se[Ee++] = Ye),
        (Se[Ee++] = Xe),
        (Se[Ee++] = At),
        (Ye = e.id),
        (Xe = e.overflow),
        (At = t)),
      (t = Ql(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ru(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), $o(e.return, t, n);
}
function so(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function pc(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((le(e, t, r.children, n), (r = U.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ru(e, n, t);
        else if (e.tag === 19) ru(e, n, t);
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
    r &= 1;
  }
  if ((I(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ai(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          so(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ai(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        so(t, !0, n, null, o);
        break;
      case "together":
        so(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ur(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function be(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(v(153));
  if (t.child !== null) {
    for (
      e = t.child, n = yt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = yt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Jd(e, t, n) {
  switch (t.tag) {
    case 3:
      fc(t), un();
      break;
    case 5:
      ja(t);
      break;
    case 1:
      pe(t.type) && ri(t);
      break;
    case 4:
      Fl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      I(li, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? dc(e, t, n)
          : (I(U, U.current & 1),
            (e = be(e, t, n)),
            e !== null ? e.sibling : null);
      I(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return pc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        I(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ac(e, t, n);
  }
  return be(e, t, n);
}
var hc, qo, mc, yc;
hc = function (e, t) {
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
qo = function () {};
mc = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Rt($e.current);
    var o = null;
    switch (n) {
      case "input":
        (i = vo(e, i)), (r = vo(e, r)), (o = []);
        break;
      case "select":
        (i = $({}, i, { value: void 0 })),
          (r = $({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = ko(e, i)), (r = ko(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ti);
    }
    Eo(n, r);
    var l;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var s = i[c];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Vn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((s = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                s[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (o || (o = []), o.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Vn.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && D("scroll", e),
                  o || s === u || (o = []))
                : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
yc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xn(e, t) {
  if (!B)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bd(e, t, n) {
  var r = t.pendingProps;
  switch ((Ll(t), t.tag)) {
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
      return re(t), null;
    case 1:
      return pe(t.type) && ni(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        cn(),
        M(de),
        M(oe),
        Ul(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_r(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ae !== null && (rl(Ae), (Ae = null)))),
        qo(e, t),
        re(t),
        null
      );
    case 5:
      Bl(t);
      var i = Rt(er.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        mc(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(v(166));
          return re(t), null;
        }
        if (((e = Rt($e.current)), _r(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ue] = t), (r[Jn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < On.length; i++) D(On[i], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              ds(r, o), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              hs(r, o), D("invalid", r);
          }
          Eo(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Er(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Er(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : Vn.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  D("scroll", r);
            }
          switch (n) {
            case "input":
              hr(r), ps(r, o, !0);
              break;
            case "textarea":
              hr(r), ms(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ti);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Hu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Ue] = t),
            (e[Jn] = r),
            hc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = _o(n, r)), n)) {
              case "dialog":
                D("cancel", e), D("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < On.length; i++) D(On[i], e);
                i = r;
                break;
              case "source":
                D("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (i = r);
                break;
              case "details":
                D("toggle", e), (i = r);
                break;
              case "input":
                ds(e, r), (i = vo(e, r)), D("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = $({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                hs(e, r), (i = ko(e, r)), D("invalid", e);
                break;
              default:
                i = r;
            }
            Eo(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style"
                  ? Ku(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Wu(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Hn(e, u)
                    : typeof u == "number" && Hn(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Vn.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && D("scroll", e)
                      : u != null && ml(e, o, u, l));
              }
            switch (n) {
              case "input":
                hr(e), ps(e, r, !1);
                break;
              case "textarea":
                hr(e), ms(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? bt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      bt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ti);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) yc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(v(166));
        if (((n = Rt(er.current)), Rt($e.current), _r(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (o = r.nodeValue !== n) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                Er(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Er(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (M(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && ye !== null && t.mode & 1 && !(t.flags & 128))
          Aa(), un(), (t.flags |= 98560), (o = !1);
        else if (((o = _r(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(v(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(v(317));
            o[Ue] = t;
          } else
            un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (o = !1);
        } else Ae !== null && (rl(Ae), (Ae = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? q === 0 && (q = 3) : Zl())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        cn(), qo(e, t), e === null && Gn(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return Il(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && ni(), re(t), null;
    case 19:
      if ((M(U), (o = t.memoizedState), o === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) xn(o, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = ai(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    xn(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return I(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Q() > dn &&
            ((t.flags |= 128), (r = !0), xn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ai(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !B)
            )
              return re(t), null;
          } else
            2 * Q() - o.renderingStartTime > dn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Q()),
          (t.sibling = null),
          (n = U.current),
          I(U, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        Gl(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? me & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(v(156, t.tag));
}
function ep(e, t) {
  switch ((Ll(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && ni(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        cn(),
        M(de),
        M(oe),
        Ul(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Bl(t), null;
    case 13:
      if ((M(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(v(340));
        un();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return M(U), null;
    case 4:
      return cn(), null;
    case 10:
      return Il(t.type._context), null;
    case 22:
    case 23:
      return Gl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nr = !1,
  ie = !1,
  tp = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function Gt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else n.current = null;
}
function Go(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var iu = !1;
function np(e, t) {
  if (((Ao = Jr), (e = ka()), Pl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            u = -1,
            c = 0,
            m = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (i !== 0 && h.nodeType !== 3) || (s = l + i),
                h !== o || (r !== 0 && h.nodeType !== 3) || (u = l + r),
                h.nodeType === 3 && (l += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (p = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++c === i && (s = l),
                p === o && ++m === r && (u = l),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = g;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Io = { focusedElem: e, selectionRange: n }, Jr = !1, S = t; S !== null; )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e);
    else
      for (; S !== null; ) {
        t = S;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    F = w.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Re(t.type, k),
                      F
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(v(163));
            }
        } catch (y) {
          V(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (S = e);
          break;
        }
        S = t.return;
      }
  return (w = iu), (iu = !1), w;
}
function Un(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Go(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ti(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Zo(e) {
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
function vc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), vc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Jn], delete t[Fo], delete t[Bd], delete t[Ud])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function gc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ou(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || gc(e.return)) return null;
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
function Jo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ti));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jo(e, t, n), e = e.sibling; e !== null; ) Jo(e, t, n), (e = e.sibling);
}
function bo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bo(e, t, n), e = e.sibling; e !== null; ) bo(e, t, n), (e = e.sibling);
}
var b = null,
  Le = !1;
function tt(e, t, n) {
  for (n = n.child; n !== null; ) wc(e, t, n), (n = n.sibling);
}
function wc(e, t, n) {
  if (je && typeof je.onCommitFiberUnmount == "function")
    try {
      je.onCommitFiberUnmount(wi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Gt(n, t);
    case 6:
      var r = b,
        i = Le;
      (b = null),
        tt(e, t, n),
        (b = r),
        (Le = i),
        b !== null &&
          (Le
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (Le
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? eo(e.parentNode, n)
              : e.nodeType === 1 && eo(e, n),
            Yn(e))
          : eo(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (i = Le),
        (b = n.stateNode.containerInfo),
        (Le = !0),
        tt(e, t, n),
        (b = r),
        (Le = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && Go(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      tt(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Gt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          V(n, t, s);
        }
      tt(e, t, n);
      break;
    case 21:
      tt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), tt(e, t, n), (ie = r))
        : tt(e, t, n);
      break;
    default:
      tt(e, t, n);
  }
}
function lu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new tp()),
      t.forEach(function (r) {
        var i = fp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Pe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (b = s.stateNode), (Le = !1);
              break e;
            case 3:
              (b = s.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (b = s.stateNode.containerInfo), (Le = !0);
              break e;
          }
          s = s.return;
        }
        if (b === null) throw Error(v(160));
        wc(o, l, i), (b = null), (Le = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (c) {
        V(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) kc(t, e), (t = t.sibling);
}
function kc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(t, e), Fe(e), r & 4)) {
        try {
          Un(3, e, e.return), Ti(3, e);
        } catch (k) {
          V(e, e.return, k);
        }
        try {
          Un(5, e, e.return);
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 1:
      Pe(t, e), Fe(e), r & 512 && n !== null && Gt(n, n.return);
      break;
    case 5:
      if (
        (Pe(t, e),
        Fe(e),
        r & 512 && n !== null && Gt(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Hn(i, "");
        } catch (k) {
          V(e, e.return, k);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && $u(i, o),
              _o(s, l);
            var c = _o(s, o);
            for (l = 0; l < u.length; l += 2) {
              var m = u[l],
                h = u[l + 1];
              m === "style"
                ? Ku(i, h)
                : m === "dangerouslySetInnerHTML"
                ? Wu(i, h)
                : m === "children"
                ? Hn(i, h)
                : ml(i, m, h, c);
            }
            switch (s) {
              case "input":
                go(i, o);
                break;
              case "textarea":
                Vu(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? bt(i, !!o.multiple, g, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? bt(i, !!o.multiple, o.defaultValue, !0)
                      : bt(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Jn] = o;
          } catch (k) {
            V(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Pe(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(v(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Pe(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yn(t.containerInfo);
        } catch (k) {
          V(e, e.return, k);
        }
      break;
    case 4:
      Pe(t, e), Fe(e);
      break;
    case 13:
      Pe(t, e),
        Fe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Xl = Q())),
        r & 4 && lu(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (c = ie) || m), Pe(t, e), (ie = c)) : Pe(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (S = e, m = e.child; m !== null; ) {
            for (h = S = m; S !== null; ) {
              switch (((p = S), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Un(4, p, p.return);
                  break;
                case 1:
                  Gt(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      V(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Gt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    uu(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (S = g)) : uu(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (i = h.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = h.stateNode),
                      (u = h.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = Qu("display", l)));
              } catch (k) {
                V(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (k) {
                V(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Pe(t, e), Fe(e), r & 4 && lu(e);
      break;
    case 21:
      break;
    default:
      Pe(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(v(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Hn(i, ""), (r.flags &= -33));
          var o = ou(e);
          bo(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = ou(e);
          Jo(e, s, l);
          break;
        default:
          throw Error(v(161));
      }
    } catch (u) {
      V(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rp(e, t, n) {
  (S = e), Sc(e);
}
function Sc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var i = S,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Nr;
      if (!l) {
        var s = i.alternate,
          u = (s !== null && s.memoizedState !== null) || ie;
        s = Nr;
        var c = ie;
        if (((Nr = l), (ie = u) && !c))
          for (S = i; S !== null; )
            (l = S),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? au(i)
                : u !== null
                ? ((u.return = l), (S = u))
                : au(i);
        for (; o !== null; ) (S = o), Sc(o), (o = o.sibling);
        (S = i), (Nr = s), (ie = c);
      }
      su(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (S = o)) : su(e);
  }
}
function su(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Ti(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Re(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ws(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ws(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Yn(h);
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
              throw Error(v(163));
          }
        ie || (t.flags & 512 && Zo(t));
      } catch (p) {
        V(t, t.return, p);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function uu(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function au(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ti(4, t);
          } catch (u) {
            V(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              V(t, i, u);
            }
          }
          var o = t.return;
          try {
            Zo(t);
          } catch (u) {
            V(t, o, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Zo(t);
          } catch (u) {
            V(t, l, u);
          }
      }
    } catch (u) {
      V(t, t.return, u);
    }
    if (t === e) {
      S = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (S = s);
      break;
    }
    S = t.return;
  }
}
var ip = Math.ceil,
  di = et.ReactCurrentDispatcher,
  Kl = et.ReactCurrentOwner,
  Ce = et.ReactCurrentBatchConfig,
  z = 0,
  J = null,
  K = null,
  ee = 0,
  me = 0,
  Zt = kt(0),
  q = 0,
  ir = null,
  Dt = 0,
  Pi = 0,
  Yl = 0,
  jn = null,
  ce = null,
  Xl = 0,
  dn = 1 / 0,
  We = null,
  pi = !1,
  el = null,
  ht = null,
  Tr = !1,
  st = null,
  hi = 0,
  $n = 0,
  tl = null,
  jr = -1,
  $r = 0;
function se() {
  return z & 6 ? Q() : jr !== -1 ? jr : (jr = Q());
}
function mt(e) {
  return e.mode & 1
    ? z & 2 && ee !== 0
      ? ee & -ee
      : $d.transition !== null
      ? ($r === 0 && ($r = ia()), $r)
      : ((e = A),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fa(e.type))),
        e)
    : 1;
}
function De(e, t, n, r) {
  if (50 < $n) throw (($n = 0), (tl = null), Error(v(185)));
  lr(e, n, r),
    (!(z & 2) || e !== J) &&
      (e === J && (!(z & 2) && (Pi |= n), q === 4 && ot(e, ee)),
      he(e, r),
      n === 1 && z === 0 && !(t.mode & 1) && ((dn = Q() + 500), Ci && St()));
}
function he(e, t) {
  var n = e.callbackNode;
  $f(e, t);
  var r = Zr(e, e === J ? ee : 0);
  if (r === 0)
    n !== null && gs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && gs(n), t === 1))
      e.tag === 0 ? jd(cu.bind(null, e)) : La(cu.bind(null, e)),
        Md(function () {
          !(z & 6) && St();
        }),
        (n = null);
    else {
      switch (oa(r)) {
        case 1:
          n = kl;
          break;
        case 4:
          n = na;
          break;
        case 16:
          n = Gr;
          break;
        case 536870912:
          n = ra;
          break;
        default:
          n = Gr;
      }
      n = Rc(n, Ec.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ec(e, t) {
  if (((jr = -1), ($r = 0), z & 6)) throw Error(v(327));
  var n = e.callbackNode;
  if (on() && e.callbackNode !== n) return null;
  var r = Zr(e, e === J ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = mi(e, r);
  else {
    t = r;
    var i = z;
    z |= 2;
    var o = Cc();
    (J !== e || ee !== t) && ((We = null), (dn = Q() + 500), Lt(e, t));
    do
      try {
        sp();
        break;
      } catch (s) {
        _c(e, s);
      }
    while (1);
    Al(),
      (di.current = o),
      (z = i),
      K !== null ? (t = 0) : ((J = null), (ee = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Po(e)), i !== 0 && ((r = i), (t = nl(e, i)))), t === 1)
    )
      throw ((n = ir), Lt(e, 0), ot(e, r), he(e, Q()), n);
    if (t === 6) ot(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !op(i) &&
          ((t = mi(e, r)),
          t === 2 && ((o = Po(e)), o !== 0 && ((r = o), (t = nl(e, o)))),
          t === 1))
      )
        throw ((n = ir), Lt(e, 0), ot(e, r), he(e, Q()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(v(345));
        case 2:
          xt(e, ce, We);
          break;
        case 3:
          if (
            (ot(e, r), (r & 130023424) === r && ((t = Xl + 500 - Q()), 10 < t))
          ) {
            if (Zr(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Mo(xt.bind(null, e, ce, We), t);
            break;
          }
          xt(e, ce, We);
          break;
        case 4:
          if ((ot(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Ie(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * ip(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Mo(xt.bind(null, e, ce, We), r);
            break;
          }
          xt(e, ce, We);
          break;
        case 5:
          xt(e, ce, We);
          break;
        default:
          throw Error(v(329));
      }
    }
  }
  return he(e, Q()), e.callbackNode === n ? Ec.bind(null, e) : null;
}
function nl(e, t) {
  var n = jn;
  return (
    e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256),
    (e = mi(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && rl(t)),
    e
  );
}
function rl(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function op(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Me(o(), i)) return !1;
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
function ot(e, t) {
  for (
    t &= ~Yl,
      t &= ~Pi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function cu(e) {
  if (z & 6) throw Error(v(327));
  on();
  var t = Zr(e, 0);
  if (!(t & 1)) return he(e, Q()), null;
  var n = mi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Po(e);
    r !== 0 && ((t = r), (n = nl(e, r)));
  }
  if (n === 1) throw ((n = ir), Lt(e, 0), ot(e, t), he(e, Q()), n);
  if (n === 6) throw Error(v(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xt(e, ce, We),
    he(e, Q()),
    null
  );
}
function ql(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    (z = n), z === 0 && ((dn = Q() + 500), Ci && St());
  }
}
function Mt(e) {
  st !== null && st.tag === 0 && !(z & 6) && on();
  var t = z;
  z |= 1;
  var n = Ce.transition,
    r = A;
  try {
    if (((Ce.transition = null), (A = 1), e)) return e();
  } finally {
    (A = r), (Ce.transition = n), (z = t), !(z & 6) && St();
  }
}
function Gl() {
  (me = Zt.current), M(Zt);
}
function Lt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Dd(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((Ll(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ni();
          break;
        case 3:
          cn(), M(de), M(oe), Ul();
          break;
        case 5:
          Bl(r);
          break;
        case 4:
          cn();
          break;
        case 13:
          M(U);
          break;
        case 19:
          M(U);
          break;
        case 10:
          Il(r.type._context);
          break;
        case 22:
        case 23:
          Gl();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (K = e = yt(e.current, null)),
    (ee = me = t),
    (q = 0),
    (ir = null),
    (Yl = Pi = Dt = 0),
    (ce = jn = null),
    Pt !== null)
  ) {
    for (t = 0; t < Pt.length; t++)
      if (((n = Pt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    Pt = null;
  }
  return e;
}
function _c(e, t) {
  do {
    var n = K;
    try {
      if ((Al(), (Fr.current = fi), ci)) {
        for (var r = j.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ci = !1;
      }
      if (
        ((It = 0),
        (Z = X = j = null),
        (Bn = !1),
        (tr = 0),
        (Kl.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (ir = t), (K = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          s = n,
          u = t;
        if (
          ((t = ee),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            m = s,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var g = Zs(l);
          if (g !== null) {
            (g.flags &= -257),
              Js(g, l, s, o, t),
              g.mode & 1 && Gs(o, c, t),
              (t = g),
              (u = c);
            var w = t.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(u), (t.updateQueue = k);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Gs(o, c, t), Zl();
              break e;
            }
            u = Error(v(426));
          }
        } else if (B && s.mode & 1) {
          var F = Zs(l);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              Js(F, l, s, o, t),
              Ol(fn(u, s));
            break e;
          }
        }
        (o = u = fn(u, s)),
          q !== 4 && (q = 2),
          jn === null ? (jn = [o]) : jn.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = lc(o, u, t);
              Hs(o, f);
              break e;
            case 1:
              s = u;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (ht === null || !ht.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = sc(o, s, t);
                Hs(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Nc(n);
    } catch (E) {
      (t = E), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Cc() {
  var e = di.current;
  return (di.current = fi), e === null ? fi : e;
}
function Zl() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    J === null || (!(Dt & 268435455) && !(Pi & 268435455)) || ot(J, ee);
}
function mi(e, t) {
  var n = z;
  z |= 2;
  var r = Cc();
  (J !== e || ee !== t) && ((We = null), Lt(e, t));
  do
    try {
      lp();
      break;
    } catch (i) {
      _c(e, i);
    }
  while (1);
  if ((Al(), (z = n), (di.current = r), K !== null)) throw Error(v(261));
  return (J = null), (ee = 0), q;
}
function lp() {
  for (; K !== null; ) xc(K);
}
function sp() {
  for (; K !== null && !zf(); ) xc(K);
}
function xc(e) {
  var t = Pc(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    t === null ? Nc(e) : (K = t),
    (Kl.current = null);
}
function Nc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ep(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (K = null);
        return;
      }
    } else if (((n = bd(n, t, me)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function xt(e, t, n) {
  var r = A,
    i = Ce.transition;
  try {
    (Ce.transition = null), (A = 1), up(e, t, n, r);
  } finally {
    (Ce.transition = i), (A = r);
  }
  return null;
}
function up(e, t, n, r) {
  do on();
  while (st !== null);
  if (z & 6) throw Error(v(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(v(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Vf(e, o),
    e === J && ((K = J = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Tr ||
      ((Tr = !0),
      Rc(Gr, function () {
        return on(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ce.transition), (Ce.transition = null);
    var l = A;
    A = 1;
    var s = z;
    (z |= 4),
      (Kl.current = null),
      np(e, n),
      kc(n, e),
      Pd(Io),
      (Jr = !!Ao),
      (Io = Ao = null),
      (e.current = n),
      rp(n),
      Af(),
      (z = s),
      (A = l),
      (Ce.transition = o);
  } else e.current = n;
  if (
    (Tr && ((Tr = !1), (st = e), (hi = i)),
    (o = e.pendingLanes),
    o === 0 && (ht = null),
    Mf(n.stateNode),
    he(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (pi) throw ((pi = !1), (e = el), (el = null), e);
  return (
    hi & 1 && e.tag !== 0 && on(),
    (o = e.pendingLanes),
    o & 1 ? (e === tl ? $n++ : (($n = 0), (tl = e))) : ($n = 0),
    St(),
    null
  );
}
function on() {
  if (st !== null) {
    var e = oa(hi),
      t = Ce.transition,
      n = A;
    try {
      if (((Ce.transition = null), (A = 16 > e ? 16 : e), st === null))
        var r = !1;
      else {
        if (((e = st), (st = null), (hi = 0), z & 6)) throw Error(v(331));
        var i = z;
        for (z |= 4, S = e.current; S !== null; ) {
          var o = S,
            l = o.child;
          if (S.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                for (S = c; S !== null; ) {
                  var m = S;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Un(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (S = h);
                  else
                    for (; S !== null; ) {
                      m = S;
                      var p = m.sibling,
                        g = m.return;
                      if ((vc(m), m === c)) {
                        S = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (S = p);
                        break;
                      }
                      S = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var F = k.sibling;
                    (k.sibling = null), (k = F);
                  } while (k !== null);
                }
              }
              S = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (S = l);
          else
            e: for (; S !== null; ) {
              if (((o = S), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Un(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (S = f);
                break e;
              }
              S = o.return;
            }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          l = S;
          var d = l.child;
          if (l.subtreeFlags & 2064 && d !== null) (d.return = l), (S = d);
          else
            e: for (l = a; S !== null; ) {
              if (((s = S), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ti(9, s);
                  }
                } catch (E) {
                  V(s, s.return, E);
                }
              if (s === l) {
                S = null;
                break e;
              }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (S = y);
                break e;
              }
              S = s.return;
            }
        }
        if (
          ((z = i), St(), je && typeof je.onPostCommitFiberRoot == "function")
        )
          try {
            je.onPostCommitFiberRoot(wi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (A = n), (Ce.transition = t);
    }
  }
  return !1;
}
function fu(e, t, n) {
  (t = fn(n, t)),
    (t = lc(e, t, 1)),
    (e = pt(e, t, 1)),
    (t = se()),
    e !== null && (lr(e, 1, t), he(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) fu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        fu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ht === null || !ht.has(r)))
        ) {
          (e = fn(n, e)),
            (e = sc(t, e, 1)),
            (t = pt(t, e, 1)),
            (e = se()),
            t !== null && (lr(t, 1, e), he(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ap(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (ee & n) === n &&
      (q === 4 || (q === 3 && (ee & 130023424) === ee && 500 > Q() - Xl)
        ? Lt(e, 0)
        : (Yl |= n)),
    he(e, t);
}
function Tc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = vr), (vr <<= 1), !(vr & 130023424) && (vr = 4194304))
      : (t = 1));
  var n = se();
  (e = Je(e, t)), e !== null && (lr(e, t, n), he(e, n));
}
function cp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Tc(e, n);
}
function fp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(v(314));
  }
  r !== null && r.delete(t), Tc(e, n);
}
var Pc;
Pc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), Jd(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), B && t.flags & 1048576 && Oa(t, oi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ur(e, t), (e = t.pendingProps);
      var i = sn(t, oe.current);
      rn(t, n), (i = $l(null, t, r, e, i, n));
      var o = Vl();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((o = !0), ri(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ml(t),
            (i.updater = xi),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ho(t, r, e, n),
            (t = Ko(null, t, r, !0, o, n)))
          : ((t.tag = 0), B && o && Rl(t), le(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ur(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = pp(r)),
          (e = Re(r, e)),
          i)
        ) {
          case 0:
            t = Qo(null, t, r, e, n);
            break e;
          case 1:
            t = tu(null, t, r, e, n);
            break e;
          case 11:
            t = bs(null, t, r, e, n);
            break e;
          case 14:
            t = eu(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(v(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Re(r, i)),
        Qo(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Re(r, i)),
        tu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((fc(t), e === null)) throw Error(v(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Da(e, t),
          ui(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = fn(Error(v(423)), t)), (t = nu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = fn(Error(v(424)), t)), (t = nu(e, t, r, n, i));
            break e;
          } else
            for (
              ye = dt(t.stateNode.containerInfo.firstChild),
                ve = t,
                B = !0,
                Ae = null,
                n = Ua(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((un(), r === i)) {
            t = be(e, t, n);
            break e;
          }
          le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ja(t),
        e === null && jo(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Do(r, i) ? (l = null) : o !== null && Do(r, o) && (t.flags |= 32),
        cc(e, t),
        le(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && jo(t), null;
    case 13:
      return dc(e, t, n);
    case 4:
      return (
        Fl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = an(t, null, r, n)) : le(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Re(r, i)),
        bs(e, t, r, i, n)
      );
    case 7:
      return le(e, t, t.pendingProps, n), t.child;
    case 8:
      return le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          I(li, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Me(o.value, l)) {
            if (o.children === i.children && !de.current) {
              t = be(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = qe(-1, n & -n)), (u.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (u.next = u)
                          : ((u.next = m.next), (m.next = u)),
                          (c.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      $o(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(v(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  $o(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        le(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        rn(t, n),
        (i = xe(i)),
        (r = r(i)),
        (t.flags |= 1),
        le(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Re(r, t.pendingProps)),
        (i = Re(r.type, i)),
        eu(e, t, r, i, n)
      );
    case 15:
      return uc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Re(r, i)),
        Ur(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), ri(t)) : (e = !1),
        rn(t, n),
        Fa(t, r, i),
        Ho(t, r, i, n),
        Ko(null, t, r, !0, e, n)
      );
    case 19:
      return pc(e, t, n);
    case 22:
      return ac(e, t, n);
  }
  throw Error(v(156, t.tag));
};
function Rc(e, t) {
  return ta(e, t);
}
function dp(e, t, n, r) {
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
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function _e(e, t, n, r) {
  return new dp(e, t, n, r);
}
function Jl(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function pp(e) {
  if (typeof e == "function") return Jl(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === vl)) return 11;
    if (e === gl) return 14;
  }
  return 2;
}
function yt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = _e(e.tag, t, e.key, e.mode)),
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
function Vr(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) Jl(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case $t:
        return Ot(n.children, i, o, t);
      case yl:
        (l = 8), (i |= 8);
        break;
      case po:
        return (
          (e = _e(12, n, t, i | 2)), (e.elementType = po), (e.lanes = o), e
        );
      case ho:
        return (e = _e(13, n, t, i)), (e.elementType = ho), (e.lanes = o), e;
      case mo:
        return (e = _e(19, n, t, i)), (e.elementType = mo), (e.lanes = o), e;
      case Bu:
        return Ri(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Mu:
              l = 10;
              break e;
            case Fu:
              l = 9;
              break e;
            case vl:
              l = 11;
              break e;
            case gl:
              l = 14;
              break e;
            case nt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(v(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = _e(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ot(e, t, n, r) {
  return (e = _e(7, e, r, t)), (e.lanes = n), e;
}
function Ri(e, t, n, r) {
  return (
    (e = _e(22, e, r, t)),
    (e.elementType = Bu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function uo(e, t, n) {
  return (e = _e(6, e, null, t)), (e.lanes = n), e;
}
function ao(e, t, n) {
  return (
    (t = _e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function hp(e, t, n, r, i) {
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
    (this.eventTimes = Hi(0)),
    (this.expirationTimes = Hi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function bl(e, t, n, r, i, o, l, s, u) {
  return (
    (e = new hp(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = _e(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ml(o),
    e
  );
}
function mp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: jt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Lc(e) {
  if (!e) return gt;
  e = e._reactInternals;
  e: {
    if (Bt(e) !== e || e.tag !== 1) throw Error(v(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(v(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n)) return Ra(e, n, t);
  }
  return t;
}
function Oc(e, t, n, r, i, o, l, s, u) {
  return (
    (e = bl(n, r, !0, e, i, o, l, s, u)),
    (e.context = Lc(null)),
    (n = e.current),
    (r = se()),
    (i = mt(n)),
    (o = qe(r, i)),
    (o.callback = t ?? null),
    pt(n, o, i),
    (e.current.lanes = i),
    lr(e, i, r),
    he(e, r),
    e
  );
}
function Li(e, t, n, r) {
  var i = t.current,
    o = se(),
    l = mt(i);
  return (
    (n = Lc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qe(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = pt(i, t, l)),
    e !== null && (De(e, i, l, o), Mr(e, i, l)),
    l
  );
}
function yi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function du(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function es(e, t) {
  du(e, t), (e = e.alternate) && du(e, t);
}
function yp() {
  return null;
}
var zc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ts(e) {
  this._internalRoot = e;
}
Oi.prototype.render = ts.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(v(409));
  Li(e, t, null, null);
};
Oi.prototype.unmount = ts.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mt(function () {
      Li(null, e, null, null);
    }),
      (t[Ze] = null);
  }
};
function Oi(e) {
  this._internalRoot = e;
}
Oi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ua();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < it.length && t !== 0 && t < it[n].priority; n++);
    it.splice(n, 0, e), n === 0 && ca(e);
  }
};
function ns(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function zi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function pu() {}
function vp(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = yi(l);
        o.call(c);
      };
    }
    var l = Oc(t, r, e, 0, null, !1, !1, "", pu);
    return (
      (e._reactRootContainer = l),
      (e[Ze] = l.current),
      Gn(e.nodeType === 8 ? e.parentNode : e),
      Mt(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = yi(u);
      s.call(c);
    };
  }
  var u = bl(e, 0, !1, null, null, !1, !1, "", pu);
  return (
    (e._reactRootContainer = u),
    (e[Ze] = u.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    Mt(function () {
      Li(t, u, n, r);
    }),
    u
  );
}
function Ai(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = yi(l);
        s.call(u);
      };
    }
    Li(t, l, e, i);
  } else l = vp(n, t, e, i, r);
  return yi(l);
}
la = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 &&
          (Sl(t, n | 1), he(t, Q()), !(z & 6) && ((dn = Q() + 500), St()));
      }
      break;
    case 13:
      Mt(function () {
        var r = Je(e, 1);
        if (r !== null) {
          var i = se();
          De(r, e, 1, i);
        }
      }),
        es(e, 1);
  }
};
El = function (e) {
  if (e.tag === 13) {
    var t = Je(e, 134217728);
    if (t !== null) {
      var n = se();
      De(t, e, 134217728, n);
    }
    es(e, 134217728);
  }
};
sa = function (e) {
  if (e.tag === 13) {
    var t = mt(e),
      n = Je(e, t);
    if (n !== null) {
      var r = se();
      De(n, e, t, r);
    }
    es(e, t);
  }
};
ua = function () {
  return A;
};
aa = function (e, t) {
  var n = A;
  try {
    return (A = e), t();
  } finally {
    A = n;
  }
};
xo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((go(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = _i(r);
            if (!i) throw Error(v(90));
            ju(r), go(r, i);
          }
        }
      }
      break;
    case "textarea":
      Vu(e, n);
      break;
    case "select":
      (t = n.value), t != null && bt(e, !!n.multiple, t, !1);
  }
};
qu = ql;
Gu = Mt;
var gp = { usingClientEntryPoint: !1, Events: [ur, Qt, _i, Yu, Xu, ql] },
  Nn = {
    findFiberByHostInstance: Tt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  wp = {
    bundleType: Nn.bundleType,
    version: Nn.version,
    rendererPackageName: Nn.rendererPackageName,
    rendererConfig: Nn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = bu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Nn.findFiberByHostInstance || yp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pr.isDisabled && Pr.supportsFiber)
    try {
      (wi = Pr.inject(wp)), (je = Pr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gp;
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ns(t)) throw Error(v(200));
  return mp(e, t, null, n);
};
we.createRoot = function (e, t) {
  if (!ns(e)) throw Error(v(299));
  var n = !1,
    r = "",
    i = zc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = bl(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ze] = t.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    new ts(t)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(v(188))
      : ((e = Object.keys(e).join(",")), Error(v(268, e)));
  return (e = bu(t)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return Mt(e);
};
we.hydrate = function (e, t, n) {
  if (!zi(t)) throw Error(v(200));
  return Ai(null, e, t, !0, n);
};
we.hydrateRoot = function (e, t, n) {
  if (!ns(e)) throw Error(v(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = zc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Oc(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[Ze] = t.current),
    Gn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Oi(t);
};
we.render = function (e, t, n) {
  if (!zi(t)) throw Error(v(200));
  return Ai(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
  if (!zi(e)) throw Error(v(40));
  return e._reactRootContainer
    ? (Mt(function () {
        Ai(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ze] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = ql;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!zi(n)) throw Error(v(200));
  if (e == null || e._reactInternals === void 0) throw Error(v(38));
  return Ai(e, t, n, !1, r);
};
we.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = we);
})(Ou);
var hu = Ou.exports;
(co.createRoot = hu.createRoot), (co.hydrateRoot = hu.hydrateRoot);
const He = Object.create(null);
He.open = "0";
He.close = "1";
He.ping = "2";
He.pong = "3";
He.message = "4";
He.upgrade = "5";
He.noop = "6";
const Hr = Object.create(null);
Object.keys(He).forEach((e) => {
  Hr[He[e]] = e;
});
const kp = { type: "error", data: "parser error" },
  Sp =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  Ep = typeof ArrayBuffer == "function",
  _p = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  Ac = ({ type: e, data: t }, n, r) =>
    Sp && t instanceof Blob
      ? n
        ? r(t)
        : mu(t, r)
      : Ep && (t instanceof ArrayBuffer || _p(t))
      ? n
        ? r(t)
        : mu(new Blob([t]), r)
      : r(He[e] + (t || "")),
  mu = (e, t) => {
    const n = new FileReader();
    return (
      (n.onload = function () {
        const r = n.result.split(",")[1];
        t("b" + r);
      }),
      n.readAsDataURL(e)
    );
  },
  yu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  zn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < yu.length; e++) zn[yu.charCodeAt(e)] = e;
const Cp = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      i = 0,
      o,
      l,
      s,
      u;
    e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
    const c = new ArrayBuffer(t),
      m = new Uint8Array(c);
    for (r = 0; r < n; r += 4)
      (o = zn[e.charCodeAt(r)]),
        (l = zn[e.charCodeAt(r + 1)]),
        (s = zn[e.charCodeAt(r + 2)]),
        (u = zn[e.charCodeAt(r + 3)]),
        (m[i++] = (o << 2) | (l >> 4)),
        (m[i++] = ((l & 15) << 4) | (s >> 2)),
        (m[i++] = ((s & 3) << 6) | (u & 63));
    return c;
  },
  xp = typeof ArrayBuffer == "function",
  Ic = (e, t) => {
    if (typeof e != "string") return { type: "message", data: Dc(e, t) };
    const n = e.charAt(0);
    return n === "b"
      ? { type: "message", data: Np(e.substring(1), t) }
      : Hr[n]
      ? e.length > 1
        ? { type: Hr[n], data: e.substring(1) }
        : { type: Hr[n] }
      : kp;
  },
  Np = (e, t) => {
    if (xp) {
      const n = Cp(e);
      return Dc(n, t);
    } else return { base64: !0, data: e };
  },
  Dc = (e, t) => {
    switch (t) {
      case "blob":
        return e instanceof ArrayBuffer ? new Blob([e]) : e;
      case "arraybuffer":
      default:
        return e;
    }
  },
  Mc = String.fromCharCode(30),
  Tp = (e, t) => {
    const n = e.length,
      r = new Array(n);
    let i = 0;
    e.forEach((o, l) => {
      Ac(o, !1, (s) => {
        (r[l] = s), ++i === n && t(r.join(Mc));
      });
    });
  },
  Pp = (e, t) => {
    const n = e.split(Mc),
      r = [];
    for (let i = 0; i < n.length; i++) {
      const o = Ic(n[i], t);
      if ((r.push(o), o.type === "error")) break;
    }
    return r;
  },
  Fc = 4;
function Y(e) {
  if (e) return Rp(e);
}
function Rp(e) {
  for (var t in Y.prototype) e[t] = Y.prototype[t];
  return e;
}
Y.prototype.on = Y.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
  );
};
Y.prototype.once = function (e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return (n.fn = t), this.on(e, n), this;
};
Y.prototype.off =
  Y.prototype.removeListener =
  Y.prototype.removeAllListeners =
  Y.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var n = this._callbacks["$" + e];
      if (!n) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + e], this;
      for (var r, i = 0; i < n.length; i++)
        if (((r = n[i]), r === t || r.fn === t)) {
          n.splice(i, 1);
          break;
        }
      return n.length === 0 && delete this._callbacks["$" + e], this;
    };
Y.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1),
      n = this._callbacks["$" + e],
      r = 1;
    r < arguments.length;
    r++
  )
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t);
  }
  return this;
};
Y.prototype.emitReserved = Y.prototype.emit;
Y.prototype.listeners = function (e) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || []
  );
};
Y.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};
const ut = (() =>
  typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : Function("return this")())();
function Bc(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const Lp = setTimeout,
  Op = clearTimeout;
function Ii(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = Lp.bind(ut)), (e.clearTimeoutFn = Op.bind(ut)))
    : ((e.setTimeoutFn = setTimeout.bind(ut)),
      (e.clearTimeoutFn = clearTimeout.bind(ut)));
}
const zp = 1.33;
function Ap(e) {
  return typeof e == "string"
    ? Ip(e)
    : Math.ceil((e.byteLength || e.size) * zp);
}
function Ip(e) {
  let t = 0,
    n = 0;
  for (let r = 0, i = e.length; r < i; r++)
    (t = e.charCodeAt(r)),
      t < 128
        ? (n += 1)
        : t < 2048
        ? (n += 2)
        : t < 55296 || t >= 57344
        ? (n += 3)
        : (r++, (n += 4));
  return n;
}
class Dp extends Error {
  constructor(t, n, r) {
    super(t),
      (this.description = n),
      (this.context = r),
      (this.type = "TransportError");
  }
}
class Uc extends Y {
  constructor(t) {
    super(),
      (this.writable = !1),
      Ii(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.readyState = ""),
      (this.socket = t.socket);
  }
  onError(t, n, r) {
    return super.emitReserved("error", new Dp(t, n, r)), this;
  }
  open() {
    return (
      (this.readyState === "closed" || this.readyState === "") &&
        ((this.readyState = "opening"), this.doOpen()),
      this
    );
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(t) {
    const n = Ic(t, this.socket.binaryType);
    this.onPacket(n);
  }
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  onClose(t) {
    (this.readyState = "closed"), super.emitReserved("close", t);
  }
}
const jc =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
      ""
    ),
  il = 64,
  Mp = {};
let vu = 0,
  Rr = 0,
  gu;
function wu(e) {
  let t = "";
  do (t = jc[e % il] + t), (e = Math.floor(e / il));
  while (e > 0);
  return t;
}
function $c() {
  const e = wu(+new Date());
  return e !== gu ? ((vu = 0), (gu = e)) : e + "." + wu(vu++);
}
for (; Rr < il; Rr++) Mp[jc[Rr]] = Rr;
function Vc(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
  return t;
}
function Fp(e) {
  let t = {},
    n = e.split("&");
  for (let r = 0, i = n.length; r < i; r++) {
    let o = n[r].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return t;
}
let Hc = !1;
try {
  Hc = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const Bp = Hc;
function Wc(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || Bp)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new ut[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
function Up() {}
const jp = (function () {
  return new Wc({ xdomain: !1 }).responseType != null;
})();
class $p extends Uc {
  constructor(t) {
    if ((super(t), (this.polling = !1), typeof location < "u")) {
      const r = location.protocol === "https:";
      let i = location.port;
      i || (i = r ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && t.hostname !== location.hostname) ||
          i !== t.port),
        (this.xs = t.secure !== r);
    }
    const n = t && t.forceBase64;
    this.supportsBinary = jp && !n;
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      (this.readyState = "paused"), t();
    };
    if (this.polling || !this.writable) {
      let r = 0;
      this.polling &&
        (r++,
        this.once("pollComplete", function () {
          --r || n();
        })),
        this.writable ||
          (r++,
          this.once("drain", function () {
            --r || n();
          }));
    } else n();
  }
  poll() {
    (this.polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(t) {
    const n = (r) => {
      if (
        (this.readyState === "opening" && r.type === "open" && this.onOpen(),
        r.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(r);
    };
    Pp(t, this.socket.binaryType).forEach(n),
      this.readyState !== "closed" &&
        ((this.polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this.poll());
  }
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  write(t) {
    (this.writable = !1),
      Tp(t, (n) => {
        this.doWrite(n, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    let t = this.query || {};
    const n = this.opts.secure ? "https" : "http";
    let r = "";
    this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = $c()),
      !this.supportsBinary && !t.sid && (t.b64 = 1),
      this.opts.port &&
        ((n === "https" && Number(this.opts.port) !== 443) ||
          (n === "http" && Number(this.opts.port) !== 80)) &&
        (r = ":" + this.opts.port);
    const i = Vc(t),
      o = this.opts.hostname.indexOf(":") !== -1;
    return (
      n +
      "://" +
      (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
      r +
      this.opts.path +
      (i.length ? "?" + i : "")
    );
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts),
      new Ve(this.uri(), t)
    );
  }
  doWrite(t, n) {
    const r = this.request({ method: "POST", data: t });
    r.on("success", n),
      r.on("error", (i, o) => {
        this.onError("xhr post error", i, o);
      });
  }
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)),
      t.on("error", (n, r) => {
        this.onError("xhr poll error", n, r);
      }),
      (this.pollXhr = t);
  }
}
class Ve extends Y {
  constructor(t, n) {
    super(),
      Ii(this, n),
      (this.opts = n),
      (this.method = n.method || "GET"),
      (this.uri = t),
      (this.async = n.async !== !1),
      (this.data = n.data !== void 0 ? n.data : null),
      this.create();
  }
  create() {
    const t = Bc(
      this.opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    (t.xdomain = !!this.opts.xd), (t.xscheme = !!this.opts.xs);
    const n = (this.xhr = new Wc(t));
    try {
      n.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let r in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(r) &&
              n.setRequestHeader(r, this.opts.extraHeaders[r]);
        }
      } catch {}
      if (this.method === "POST")
        try {
          n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        n.setRequestHeader("Accept", "*/*");
      } catch {}
      "withCredentials" in n && (n.withCredentials = this.opts.withCredentials),
        this.opts.requestTimeout && (n.timeout = this.opts.requestTimeout),
        (n.onreadystatechange = () => {
          n.readyState === 4 &&
            (n.status === 200 || n.status === 1223
              ? this.onLoad()
              : this.setTimeoutFn(() => {
                  this.onError(typeof n.status == "number" ? n.status : 0);
                }, 0));
        }),
        n.send(this.data);
    } catch (r) {
      this.setTimeoutFn(() => {
        this.onError(r);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this.index = Ve.requestsCount++), (Ve.requests[this.index] = this));
  }
  onError(t) {
    this.emitReserved("error", t, this.xhr), this.cleanup(!0);
  }
  cleanup(t) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (((this.xhr.onreadystatechange = Up), t))
        try {
          this.xhr.abort();
        } catch {}
      typeof document < "u" && delete Ve.requests[this.index],
        (this.xhr = null);
    }
  }
  onLoad() {
    const t = this.xhr.responseText;
    t !== null &&
      (this.emitReserved("data", t),
      this.emitReserved("success"),
      this.cleanup());
  }
  abort() {
    this.cleanup();
  }
}
Ve.requestsCount = 0;
Ve.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", ku);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in ut ? "pagehide" : "unload";
    addEventListener(e, ku, !1);
  }
}
function ku() {
  for (let e in Ve.requests)
    Ve.requests.hasOwnProperty(e) && Ve.requests[e].abort();
}
const Qc = (() =>
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, n) => n(t, 0))(),
  Lr = ut.WebSocket || ut.MozWebSocket,
  Su = !0,
  Vp = "arraybuffer",
  Eu =
    typeof navigator < "u" &&
    typeof navigator.product == "string" &&
    navigator.product.toLowerCase() === "reactnative";
class Hp extends Uc {
  constructor(t) {
    super(t), (this.supportsBinary = !t.forceBase64);
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) return;
    const t = this.uri(),
      n = this.opts.protocols,
      r = Eu
        ? {}
        : Bc(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity"
          );
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = Su && !Eu ? (n ? new Lr(t, n) : new Lr(t)) : new Lr(t, n, r);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    (this.ws.binaryType = this.socket.binaryType || Vp),
      this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (t) =>
        this.onClose({
          description: "websocket connection closed",
          context: t,
        })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError("websocket error", t));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1;
      Ac(r, this.supportsBinary, (o) => {
        const l = {};
        try {
          Su && this.ws.send(o);
        } catch {}
        i &&
          Qc(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), (this.ws = null));
  }
  uri() {
    let t = this.query || {};
    const n = this.opts.secure ? "wss" : "ws";
    let r = "";
    this.opts.port &&
      ((n === "wss" && Number(this.opts.port) !== 443) ||
        (n === "ws" && Number(this.opts.port) !== 80)) &&
      (r = ":" + this.opts.port),
      this.opts.timestampRequests && (t[this.opts.timestampParam] = $c()),
      this.supportsBinary || (t.b64 = 1);
    const i = Vc(t),
      o = this.opts.hostname.indexOf(":") !== -1;
    return (
      n +
      "://" +
      (o ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
      r +
      this.opts.path +
      (i.length ? "?" + i : "")
    );
  }
  check() {
    return !!Lr;
  }
}
const Wp = { websocket: Hp, polling: $p },
  Qp =
    /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  Kp = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function ol(e) {
  const t = e,
    n = e.indexOf("["),
    r = e.indexOf("]");
  n != -1 &&
    r != -1 &&
    (e =
      e.substring(0, n) +
      e.substring(n, r).replace(/:/g, ";") +
      e.substring(r, e.length));
  let i = Qp.exec(e || ""),
    o = {},
    l = 14;
  for (; l--; ) o[Kp[l]] = i[l] || "";
  return (
    n != -1 &&
      r != -1 &&
      ((o.source = t),
      (o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":")),
      (o.authority = o.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (o.ipv6uri = !0)),
    (o.pathNames = Yp(o, o.path)),
    (o.queryKey = Xp(o, o.query)),
    o
  );
}
function Yp(e, t) {
  const n = /\/{2,9}/g,
    r = t.replace(n, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
  );
}
function Xp(e, t) {
  const n = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, i, o) {
      i && (n[i] = o);
    }),
    n
  );
}
let Nt = class extends Y {
  constructor(t, n = {}) {
    super(),
      t && typeof t == "object" && ((n = t), (t = null)),
      t
        ? ((t = ol(t)),
          (n.hostname = t.host),
          (n.secure = t.protocol === "https" || t.protocol === "wss"),
          (n.port = t.port),
          t.query && (n.query = t.query))
        : n.host && (n.hostname = ol(n.host).host),
      Ii(this, n),
      (this.secure =
        n.secure != null
          ? n.secure
          : typeof location < "u" && location.protocol === "https:"),
      n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
      (this.hostname =
        n.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        n.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
          ? "443"
          : "80")),
      (this.transports = n.transports || ["polling", "websocket"]),
      (this.readyState = ""),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !0,
        },
        n
      )),
      (this.opts.path = this.opts.path.replace(/\/$/, "") + "/"),
      typeof this.opts.query == "string" &&
        (this.opts.query = Fp(this.opts.query)),
      (this.id = null),
      (this.upgrades = null),
      (this.pingInterval = null),
      (this.pingTimeout = null),
      (this.pingTimeoutTimer = null),
      typeof addEventListener == "function" &&
        (this.opts.closeOnBeforeunload &&
          ((this.beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener("beforeunload", this.beforeunloadEventListener, !1)),
        this.hostname !== "localhost" &&
          ((this.offlineEventListener = () => {
            this.onClose("transport close", {
              description: "network connection lost",
            });
          }),
          addEventListener("offline", this.offlineEventListener, !1))),
      this.open();
  }
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    (n.EIO = Fc), (n.transport = t), this.id && (n.sid = this.id);
    const r = Object.assign({}, this.opts.transportOptions[t], this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port,
    });
    return new Wp[t](r);
  }
  open() {
    let t;
    if (
      this.opts.rememberUpgrade &&
      Nt.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
    )
      t = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else t = this.transports[0];
    this.readyState = "opening";
    try {
      t = this.createTransport(t);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    t.open(), this.setTransport(t);
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on("drain", this.onDrain.bind(this))
        .on("packet", this.onPacket.bind(this))
        .on("error", this.onError.bind(this))
        .on("close", (n) => this.onClose("transport close", n));
  }
  probe(t) {
    let n = this.createTransport(t),
      r = !1;
    Nt.priorWebsocketSuccess = !1;
    const i = () => {
      r ||
        (n.send([{ type: "ping", data: "probe" }]),
        n.once("packet", (h) => {
          if (!r)
            if (h.type === "pong" && h.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", n), !n)
              )
                return;
              (Nt.priorWebsocketSuccess = n.name === "websocket"),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== "closed" &&
                      (m(),
                      this.setTransport(n),
                      n.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", n),
                      (n = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const p = new Error("probe error");
              (p.transport = n.name), this.emitReserved("upgradeError", p);
            }
        }));
    };
    function o() {
      r || ((r = !0), m(), n.close(), (n = null));
    }
    const l = (h) => {
      const p = new Error("probe error: " + h);
      (p.transport = n.name), o(), this.emitReserved("upgradeError", p);
    };
    function s() {
      l("transport closed");
    }
    function u() {
      l("socket closed");
    }
    function c(h) {
      n && h.name !== n.name && o();
    }
    const m = () => {
      n.removeListener("open", i),
        n.removeListener("error", l),
        n.removeListener("close", s),
        this.off("close", u),
        this.off("upgrading", c);
    };
    n.once("open", i),
      n.once("error", l),
      n.once("close", s),
      this.once("close", u),
      this.once("upgrading", c),
      n.open();
  }
  onOpen() {
    if (
      ((this.readyState = "open"),
      (Nt.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush(),
      this.readyState === "open" && this.opts.upgrade && this.transport.pause)
    ) {
      let t = 0;
      const n = this.upgrades.length;
      for (; t < n; t++) this.probe(this.upgrades[t]);
    }
  }
  onPacket(t) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this.resetPingTimeout(),
            this.sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong");
          break;
        case "error":
          const n = new Error("server error");
          (n.code = t.data), this.onError(n);
          break;
        case "message":
          this.emitReserved("data", t.data),
            this.emitReserved("message", t.data);
          break;
      }
  }
  onHandshake(t) {
    this.emitReserved("handshake", t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this.upgrades = this.filterUpgrades(t.upgrades)),
      (this.pingInterval = t.pingInterval),
      (this.pingTimeout = t.pingTimeout),
      (this.maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer),
      (this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout)),
      this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen),
      (this.prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const t = this.getWritablePackets();
      this.transport.send(t),
        (this.prevBufferLen = t.length),
        this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    if (
      !(
        this.maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const i = this.writeBuffer[r].data;
      if ((i && (n += Ap(i)), r > 0 && n > this.maxPayload))
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  write(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  send(t, n, r) {
    return this.sendPacket("message", t, n, r), this;
  }
  sendPacket(t, n, r, i) {
    if (
      (typeof n == "function" && ((i = n), (n = void 0)),
      typeof r == "function" && ((i = r), (r = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (r = r || {}), (r.compress = r.compress !== !1);
    const o = { type: t, data: n, options: r };
    this.emitReserved("packetCreate", o),
      this.writeBuffer.push(o),
      i && this.once("flush", i),
      this.flush();
  }
  close() {
    const t = () => {
        this.onClose("forced close"), this.transport.close();
      },
      n = () => {
        this.off("upgrade", n), this.off("upgradeError", n), t();
      },
      r = () => {
        this.once("upgrade", n), this.once("upgradeError", n);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? r() : t();
            })
          : this.upgrading
          ? r()
          : t()),
      this
    );
  }
  onError(t) {
    (Nt.priorWebsocketSuccess = !1),
      this.emitReserved("error", t),
      this.onClose("transport error", t);
  }
  onClose(t, n) {
    (this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing") &&
      (this.clearTimeoutFn(this.pingTimeoutTimer),
      this.transport.removeAllListeners("close"),
      this.transport.close(),
      this.transport.removeAllListeners(),
      typeof removeEventListener == "function" &&
        (removeEventListener(
          "beforeunload",
          this.beforeunloadEventListener,
          !1
        ),
        removeEventListener("offline", this.offlineEventListener, !1)),
      (this.readyState = "closed"),
      (this.id = null),
      this.emitReserved("close", t, n),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0));
  }
  filterUpgrades(t) {
    const n = [];
    let r = 0;
    const i = t.length;
    for (; r < i; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
};
Nt.protocol = Fc;
function qp(e, t = "", n) {
  let r = e;
  (n = n || (typeof location < "u" && location)),
    e == null && (e = n.protocol + "//" + n.host),
    typeof e == "string" &&
      (e.charAt(0) === "/" &&
        (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof n < "u" ? (e = n.protocol + "//" + e) : (e = "https://" + e)),
      (r = ol(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = "80")
        : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    (r.path = r.path || "/");
  const o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return (
    (r.id = r.protocol + "://" + o + ":" + r.port + t),
    (r.href =
      r.protocol + "://" + o + (n && n.port === r.port ? "" : ":" + r.port)),
    r
  );
}
const Gp = typeof ArrayBuffer == "function",
  Zp = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  Kc = Object.prototype.toString,
  Jp =
    typeof Blob == "function" ||
    (typeof Blob < "u" && Kc.call(Blob) === "[object BlobConstructor]"),
  bp =
    typeof File == "function" ||
    (typeof File < "u" && Kc.call(File) === "[object FileConstructor]");
function rs(e) {
  return (
    (Gp && (e instanceof ArrayBuffer || Zp(e))) ||
    (Jp && e instanceof Blob) ||
    (bp && e instanceof File)
  );
}
function Wr(e, t) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++) if (Wr(e[n])) return !0;
    return !1;
  }
  if (rs(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Wr(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && Wr(e[n])) return !0;
  return !1;
}
function eh(e) {
  const t = [],
    n = e.data,
    r = e;
  return (
    (r.data = ll(n, t)), (r.attachments = t.length), { packet: r, buffers: t }
  );
}
function ll(e, t) {
  if (!e) return e;
  if (rs(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = ll(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = ll(e[r], t));
    return n;
  }
  return e;
}
function th(e, t) {
  return (e.data = sl(e.data, t)), (e.attachments = void 0), e;
}
function sl(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++) e[n] = sl(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = sl(e[n], t));
  return e;
}
const nh = 5;
var O;
(function (e) {
  (e[(e.CONNECT = 0)] = "CONNECT"),
    (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
    (e[(e.EVENT = 2)] = "EVENT"),
    (e[(e.ACK = 3)] = "ACK"),
    (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(O || (O = {}));
class rh {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === O.EVENT || t.type === O.ACK) && Wr(t)
      ? ((t.type = t.type === O.EVENT ? O.BINARY_EVENT : O.BINARY_ACK),
        this.encodeAsBinary(t))
      : [this.encodeAsString(t)];
  }
  encodeAsString(t) {
    let n = "" + t.type;
    return (
      (t.type === O.BINARY_EVENT || t.type === O.BINARY_ACK) &&
        (n += t.attachments + "-"),
      t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
      t.id != null && (n += t.id),
      t.data != null && (n += JSON.stringify(t.data, this.replacer)),
      n
    );
  }
  encodeAsBinary(t) {
    const n = eh(t),
      r = this.encodeAsString(n.packet),
      i = n.buffers;
    return i.unshift(r), i;
  }
}
class is extends Y {
  constructor(t) {
    super(), (this.reviver = t);
  }
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      (n = this.decodeString(t)),
        n.type === O.BINARY_EVENT || n.type === O.BINARY_ACK
          ? ((this.reconstructor = new ih(n)),
            n.attachments === 0 && super.emitReserved("decoded", n))
          : super.emitReserved("decoded", n);
    } else if (rs(t) || t.base64)
      if (this.reconstructor)
        (n = this.reconstructor.takeBinaryData(t)),
          n && ((this.reconstructor = null), super.emitReserved("decoded", n));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + t);
  }
  decodeString(t) {
    let n = 0;
    const r = { type: Number(t.charAt(0)) };
    if (O[r.type] === void 0) throw new Error("unknown packet type " + r.type);
    if (r.type === O.BINARY_EVENT || r.type === O.BINARY_ACK) {
      const o = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; );
      const l = t.substring(o, n);
      if (l != Number(l) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(l);
    }
    if (t.charAt(n + 1) === "/") {
      const o = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); );
      r.nsp = t.substring(o, n);
    } else r.nsp = "/";
    const i = t.charAt(n + 1);
    if (i !== "" && Number(i) == i) {
      const o = n + 1;
      for (; ++n; ) {
        const l = t.charAt(n);
        if (l == null || Number(l) != l) {
          --n;
          break;
        }
        if (n === t.length) break;
      }
      r.id = Number(t.substring(o, n + 1));
    }
    if (t.charAt(++n)) {
      const o = this.tryParse(t.substr(n));
      if (is.isPayloadValid(r.type, o)) r.data = o;
      else throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case O.CONNECT:
        return typeof n == "object";
      case O.DISCONNECT:
        return n === void 0;
      case O.CONNECT_ERROR:
        return typeof n == "string" || typeof n == "object";
      case O.EVENT:
      case O.BINARY_EVENT:
        return Array.isArray(n) && n.length > 0;
      case O.ACK:
      case O.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  destroy() {
    this.reconstructor && this.reconstructor.finishedReconstruction();
  }
}
class ih {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const n = th(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const oh = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      protocol: nh,
      get PacketType() {
        return O;
      },
      Encoder: rh,
      Decoder: is,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Oe(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n);
    }
  );
}
const lh = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class Yc extends Y {
  constructor(t, n, r) {
    super(),
      (this.connected = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = n),
      r && r.auth && (this.auth = r.auth),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      Oe(t, "open", this.onopen.bind(this)),
      Oe(t, "packet", this.onpacket.bind(this)),
      Oe(t, "error", this.onerror.bind(this)),
      Oe(t, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  emit(t, ...n) {
    if (lh.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    n.unshift(t);
    const r = { type: O.EVENT, data: n };
    if (
      ((r.options = {}),
      (r.options.compress = this.flags.compress !== !1),
      typeof n[n.length - 1] == "function")
    ) {
      const l = this.ids++,
        s = n.pop();
      this._registerAckCallback(l, s), (r.id = l);
    }
    const i =
      this.io.engine &&
      this.io.engine.transport &&
      this.io.engine.transport.writable;
    return (
      (this.flags.volatile && (!i || !this.connected)) ||
        (this.connected
          ? (this.notifyOutgoingListeners(r), this.packet(r))
          : this.sendBuffer.push(r)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, n) {
    const r = this.flags.timeout;
    if (r === void 0) {
      this.acks[t] = n;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let o = 0; o < this.sendBuffer.length; o++)
        this.sendBuffer[o].id === t && this.sendBuffer.splice(o, 1);
      n.call(this, new Error("operation has timed out"));
    }, r);
    this.acks[t] = (...o) => {
      this.io.clearTimeoutFn(i), n.apply(this, [null, ...o]);
    };
  }
  packet(t) {
    (t.nsp = this.nsp), this.io._packet(t);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((t) => {
          this.packet({ type: O.CONNECT, data: t });
        })
      : this.packet({ type: O.CONNECT, data: this.auth });
  }
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  onclose(t, n) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", t, n);
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case O.CONNECT:
          if (t.data && t.data.sid) {
            const i = t.data.sid;
            this.onconnect(i);
          } else
            this.emitReserved(
              "connect_error",
              new Error(
                "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
              )
            );
          break;
        case O.EVENT:
        case O.BINARY_EVENT:
          this.onevent(t);
          break;
        case O.ACK:
        case O.BINARY_ACK:
          this.onack(t);
          break;
        case O.DISCONNECT:
          this.ondisconnect();
          break;
        case O.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          (r.data = t.data.data), this.emitReserved("connect_error", r);
          break;
      }
  }
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)),
      this.connected
        ? this.emitEvent(n)
        : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n) r.apply(this, t);
    }
    super.emit.apply(this, t);
  }
  ack(t) {
    const n = this;
    let r = !1;
    return function (...i) {
      r || ((r = !0), n.packet({ type: O.ACK, id: t, data: i }));
    };
  }
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" && (n.apply(this, t.data), delete this.acks[t.id]);
  }
  onconnect(t) {
    (this.id = t),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect");
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: O.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(t) {
    return (this.flags.compress = t), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(t) {
    return (this.flags.timeout = t), this;
  }
  onAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(t),
      this
    );
  }
  prependAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(t),
      this
    );
  }
  offAny(t) {
    if (!this._anyListeners) return this;
    if (t) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    );
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    );
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n) r.apply(this, t.data);
    }
  }
}
function yn(e) {
  (e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0);
}
yn.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
yn.prototype.reset = function () {
  this.attempts = 0;
};
yn.prototype.setMin = function (e) {
  this.ms = e;
};
yn.prototype.setMax = function (e) {
  this.max = e;
};
yn.prototype.setJitter = function (e) {
  this.jitter = e;
};
class ul extends Y {
  constructor(t, n) {
    var r;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((n = t), (t = void 0)),
      (n = n || {}),
      (n.path = n.path || "/socket.io"),
      (this.opts = n),
      Ii(this, n),
      this.reconnection(n.reconnection !== !1),
      this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(n.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5
      ),
      (this.backoff = new yn({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(n.timeout == null ? 2e4 : n.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    const i = n.parser || oh;
    (this.encoder = new i.Encoder()),
      (this.decoder = new i.Decoder()),
      (this._autoConnect = n.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), this)
      : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (n = this.backoff) === null || n === void 0 || n.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (n = this.backoff) === null || n === void 0 || n.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (n = this.backoff) === null || n === void 0 || n.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new Nt(this.uri, this.opts);
    const n = this.engine,
      r = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const i = Oe(n, "open", function () {
        r.onopen(), t && t();
      }),
      o = Oe(n, "error", (l) => {
        r.cleanup(),
          (r._readyState = "closed"),
          this.emitReserved("error", l),
          t ? t(l) : r.maybeReconnectOnOpen();
      });
    if (this._timeout !== !1) {
      const l = this._timeout;
      l === 0 && i();
      const s = this.setTimeoutFn(() => {
        i(), n.close(), n.emit("error", new Error("timeout"));
      }, l);
      this.opts.autoUnref && s.unref(),
        this.subs.push(function () {
          clearTimeout(s);
        });
    }
    return this.subs.push(i), this.subs.push(o), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      Oe(t, "ping", this.onping.bind(this)),
      Oe(t, "data", this.ondata.bind(this)),
      Oe(t, "error", this.onerror.bind(this)),
      Oe(t, "close", this.onclose.bind(this)),
      Oe(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  ondecoded(t) {
    Qc(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, n) {
    let r = this.nsps[t];
    return r || ((r = new Yc(this, t, n)), (this.nsps[t] = r)), r;
  }
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n) if (this.nsps[r].active) return;
    this._close();
  }
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
  }
  cleanup() {
    this.subs.forEach((t) => t()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close"),
      this.engine && this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(t, n) {
    this.cleanup(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", t, n),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          !t.skipReconnect &&
            t.open((i) => {
              i
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved("reconnect_error", i))
                : t.onreconnect();
            }));
      }, n);
      this.opts.autoUnref && r.unref(),
        this.subs.push(function () {
          clearTimeout(r);
        });
    }
  }
  onreconnect() {
    const t = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", t);
  }
}
const Tn = {};
function Qr(e, t) {
  typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
  const n = qp(e, t.path || "/socket.io"),
    r = n.source,
    i = n.id,
    o = n.path,
    l = Tn[i] && o in Tn[i].nsps,
    s = t.forceNew || t["force new connection"] || t.multiplex === !1 || l;
  let u;
  return (
    s ? (u = new ul(r, t)) : (Tn[i] || (Tn[i] = new ul(r, t)), (u = Tn[i])),
    n.query && !t.query && (t.query = n.queryKey),
    u.socket(n.path, t)
  );
}
Object.assign(Qr, { Manager: ul, Socket: Yc, io: Qr, connect: Qr });
const sh = "http://localhost:80",
  Kr = Qr.connect(sh);
function uh() {
  const [e, t] = Ke.exports.useState([]);
  return (
    Ke.exports.useEffect(() => {
      Kr.on("new_user", (n) => {
        t(n);
      });
    }, []),
    ze("div", {
      id: "contactos",
      children: e.map((n) =>
        Jt(
          "div",
          {
            className: "contactos-person",
            children: [
              ze("img", { className: "contactos-person-avatar", src: "#" }),
              Jt("span", {
                className: "contactos-person-name",
                children: [" ", n.name, " "],
              }),
            ],
          },
          n.id
        )
      ),
    })
  );
}
function ah() {
  const [e, t] = Ke.exports.useState([]),
    n = Ke.exports.createRef();
  Ke.exports.useEffect(() => {
    Kr.on("chat new msg all", (i) => {
      t((o) =>
        o.concat([{ msg: i.msg, name: i.name, id: i.id, msgId: i.msgId }])
      );
    });
  }, []),
    Ke.exports.useEffect(() => {
      var i;
      (i = n.current) == null || i.scrollIntoView();
    }, [e]);
  function r(i) {
    i.preventDefault(), i.stopPropagation();
    const l = new FormData(i.target).get("msg");
    Kr.emit("chat new msg all", l);
  }
  return Jt("div", {
    id: "chat-container",
    children: [
      ze("div", {
        id: "chat-messages",
        className: "scrollbar-transparent",
        children: e.map((i, o) =>
          Jt(
            "div",
            {
              className: `chat-msg-box ${
                i.id === Kr.id ? "chat-msg-box-user" : ""
              }`,
              ref: o === e.length - 1 ? n : null,
              children: [
                ze("span", { className: "chat-msg-user", children: i.name }),
                ze("p", { className: "chat-msg-texto", children: i.msg }),
              ],
            },
            i.msgId
          )
        ),
      }),
      ze("div", {
        id: "chat-form-container",
        children: Jt("form", {
          id: "chat-form",
          onSubmit: (i) => r(i),
          children: [
            ze("input", {
              type: "text",
              name: "msg",
              placeholder: "escriba el mensaje",
            }),
            ze("button", { type: "submit", children: "Enviar" }),
          ],
        }),
      }),
    ],
  });
}
function ch() {
  return Jt(vf, { children: [ze(uh, {}), ze(ah, {})] });
}
const fh = document.querySelector("#root"),
  dh = co.createRoot(fh);
dh.render(ze(ch, {}));
