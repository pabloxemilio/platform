"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2868],{

/***/ 4146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var reactIs = __webpack_require__(44363);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 22799:
/***/ ((__unused_webpack_module, exports) => {

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 44363:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(22799);
} else // removed by dead control flow
{}


/***/ }),

/***/ 29882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ DEBUG_BUILD)
/* harmony export */ });
/**
 * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
 *
 * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
 */
const DEBUG_BUILD = (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__);


//# sourceMappingURL=debug-build.js.map


/***/ }),

/***/ 84446:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xQ: () => (/* binding */ captureReactException),
/* harmony export */   yL: () => (/* binding */ reactErrorHandler)
/* harmony export */ });
/* unused harmony exports isAtLeastReact17, setCause */
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99678);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30690);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17402);




/**
 * See if React major version is 17+ by parsing version string.
 */
function isAtLeastReact17(reactVersion) {
  const reactMajor = reactVersion.match(/^([^.]+)/);
  return reactMajor !== null && parseInt(reactMajor[0]) >= 17;
}

/**
 * Recurse through `error.cause` chain to set cause on an error.
 */
function setCause(error, cause) {
  const seenErrors = new WeakSet();

  function recurse(error, cause) {
    // If we've already seen the error, there is a recursive loop somewhere in the error's
    // cause chain. Let's just bail out then to prevent a stack overflow.
    if (seenErrors.has(error)) {
      return;
    }
    if (error.cause) {
      seenErrors.add(error);
      return recurse(error.cause, cause);
    }
    error.cause = cause;
  }

  recurse(error, cause);
}

/**
 * Captures an error that was thrown by a React ErrorBoundary or React root.
 *
 * @param error The error to capture.
 * @param errorInfo The errorInfo provided by React.
 * @param hint Optional additional data to attach to the Sentry event.
 * @returns the id of the captured Sentry event.
 */
function captureReactException(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error,
  { componentStack },
  hint,
) {
  // If on React version >= 17, create stack trace from componentStack param and links
  // to to the original error using `error.cause` otherwise relies on error param for stacktrace.
  // Linking errors requires the `LinkedErrors` integration be enabled.
  // See: https://reactjs.org/blog/2020/08/10/react-v17-rc.html#native-component-stacks
  //
  // Although `componentDidCatch` is typed to accept an `Error` object, it can also be invoked
  // with non-error objects. This is why we need to check if the error is an error-like object.
  // See: https://github.com/getsentry/sentry-javascript/issues/6167
  if (isAtLeastReact17(react__WEBPACK_IMPORTED_MODULE_2__.version) && (0,_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .isError */ .bJ)(error) && componentStack) {
    const errorBoundaryError = new Error(error.message);
    errorBoundaryError.name = `React ErrorBoundary ${error.name}`;
    errorBoundaryError.stack = componentStack;

    // Using the `LinkedErrors` integration to link the errors together.
    setCause(error, errorBoundaryError);
  }

  return (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.captureException)(error, {
    ...hint,
    captureContext: {
      contexts: { react: { componentStack } },
    },
  });
}

/**
 * Creates an error handler that can be used with the `onCaughtError`, `onUncaughtError`,
 * and `onRecoverableError` options in `createRoot` and `hydrateRoot` React DOM methods.
 *
 * @param callback An optional callback that will be called after the error is captured.
 * Use this to add custom handling for errors.
 *
 * @example
 *
 * ```JavaScript
 * const root = createRoot(container, {
 *  onCaughtError: Sentry.reactErrorHandler(),
 *  onUncaughtError: Sentry.reactErrorHandler((error, errorInfo) => {
 *    console.warn('Caught error', error, errorInfo.componentStack);
 *  });
 * });
 * ```
 */
function reactErrorHandler(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (error, errorInfo) => {
    const eventId = captureReactException(error, errorInfo);
    if (callback) {
      callback(error, errorInfo, eventId);
    }
  };
}


//# sourceMappingURL=error.js.map


/***/ }),

/***/ 92732:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xc: () => (/* binding */ withErrorBoundary),
/* harmony export */   tH: () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* unused harmony export UNKNOWN_COMPONENT */
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99678);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5602);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17402);
/* harmony import */ var _hoist_non_react_statics_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98421);
/* harmony import */ var _debug_build_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29882);
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84446);







const UNKNOWN_COMPONENT = 'unknown';

const INITIAL_STATE = {
  componentStack: null,
  error: null,
  eventId: null,
};

/**
 * A ErrorBoundary component that logs errors to Sentry.
 * NOTE: If you are a Sentry user, and you are seeing this stack frame, it means the
 * Sentry React SDK ErrorBoundary caught an error invoking your application code. This
 * is expected behavior and NOT indicative of a bug with the Sentry React SDK.
 */
class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_2__.Component {

   constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this._openFallbackReportDialog = true;

    const client = (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.getClient)();
    if (client && props.showDialog) {
      this._openFallbackReportDialog = false;
      this._cleanupHook = client.on('afterSendEvent', event => {
        if (!event.type && this._lastEventId && event.event_id === this._lastEventId) {
          (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.showReportDialog)({ ...props.dialogOptions, eventId: this._lastEventId });
        }
      });
    }
  }

   componentDidCatch(error, errorInfo) {
    const { componentStack } = errorInfo;
    const { beforeCapture, onError, showDialog, dialogOptions } = this.props;
    (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.withScope)(scope => {
      if (beforeCapture) {
        beforeCapture(scope, error, componentStack);
      }

      const handled = this.props.handled != null ? this.props.handled : !!this.props.fallback;
      const eventId = (0,_error_js__WEBPACK_IMPORTED_MODULE_5__/* .captureReactException */ .xQ)(error, errorInfo, { mechanism: { handled } });

      if (onError) {
        onError(error, componentStack, eventId);
      }
      if (showDialog) {
        this._lastEventId = eventId;
        if (this._openFallbackReportDialog) {
          (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.showReportDialog)({ ...dialogOptions, eventId });
        }
      }

      // componentDidCatch is used over getDerivedStateFromError
      // so that componentStack is accessible through state.
      this.setState({ error, componentStack, eventId });
    });
  }

   componentDidMount() {
    const { onMount } = this.props;
    if (onMount) {
      onMount();
    }
  }

   componentWillUnmount() {
    const { error, componentStack, eventId } = this.state;
    const { onUnmount } = this.props;
    if (onUnmount) {
      if (this.state === INITIAL_STATE) {
        // If the error boundary never encountered an error, call onUnmount with null values
        onUnmount(null, null, null);
      } else {
        // `componentStack` and `eventId` are guaranteed to be non-null here because `onUnmount` is only called
        // when the error boundary has already encountered an error.
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        onUnmount(error, componentStack, eventId);
      }
    }

    if (this._cleanupHook) {
      this._cleanupHook();
      this._cleanupHook = undefined;
    }
  }

   resetErrorBoundary() {
    const { onReset } = this.props;
    const { error, componentStack, eventId } = this.state;
    if (onReset) {
      // `componentStack` and `eventId` are guaranteed to be non-null here because `onReset` is only called
      // when the error boundary has already encountered an error.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      onReset(error, componentStack, eventId);
    }
    this.setState(INITIAL_STATE);
  }

   render() {
    const { fallback, children } = this.props;
    const state = this.state;

    // `componentStack` is only null in the initial state, when no error has been captured.
    // If an error has been captured, `componentStack` will be a string.
    // We cannot check `state.error` because null can be thrown as an error.
    if (state.componentStack === null) {
      return typeof children === 'function' ? children() : children;
    }

    const element =
      typeof fallback === 'function'
        ? react__WEBPACK_IMPORTED_MODULE_2__.createElement(fallback, {
            error: state.error,
            componentStack: state.componentStack,
            resetError: () => this.resetErrorBoundary(),
            eventId: state.eventId,
          })
        : fallback;

    if (react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(element)) {
      return element;
    }

    if (fallback) {
      _debug_build_js__WEBPACK_IMPORTED_MODULE_4__/* .DEBUG_BUILD */ .T && _sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.warn('fallback did not produce a valid ReactElement');
    }

    // Fail gracefully if no fallback provided or is not valid
    return null;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withErrorBoundary(
  WrappedComponent,
  errorBoundaryOptions,
) {
  const componentDisplayName = WrappedComponent.displayName || WrappedComponent.name || UNKNOWN_COMPONENT;

  const Wrapped = (props) => (
    react__WEBPACK_IMPORTED_MODULE_2__.createElement(ErrorBoundary, { ...errorBoundaryOptions,}
      , react__WEBPACK_IMPORTED_MODULE_2__.createElement(WrappedComponent, { ...props,} )
    )
  );

  Wrapped.displayName = `errorBoundary(${componentDisplayName})`;

  // Copy over static methods from Wrapped component to Profiler HOC
  // See: https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
  (0,_hoist_non_react_statics_js__WEBPACK_IMPORTED_MODULE_3__/* .hoistNonReactStatics */ .X)(Wrapped, WrappedComponent);
  return Wrapped;
}


//# sourceMappingURL=errorboundary.js.map


/***/ }),

/***/ 98421:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ hoistNonReactStatics)
/* harmony export */ });
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4146);


// Ensure we use the default export from hoist-non-react-statics if available,
// falling back to the module itself. This handles both ESM and CJS usage.
const hoistNonReactStatics = hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ || /*#__PURE__*/ (hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__, 2)));


//# sourceMappingURL=hoist-non-react-statics.js.map


/***/ }),

/***/ 82868:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorBoundary: () => (/* reexport safe */ _errorboundary_js__WEBPACK_IMPORTED_MODULE_4__.tH),
/* harmony export */   Profiler: () => (/* reexport safe */ _profiler_js__WEBPACK_IMPORTED_MODULE_3__.UD),
/* harmony export */   createReduxEnhancer: () => (/* reexport safe */ _redux_js__WEBPACK_IMPORTED_MODULE_5__.t),
/* harmony export */   init: () => (/* reexport safe */ _sdk_js__WEBPACK_IMPORTED_MODULE_1__.T),
/* harmony export */   reactErrorHandler: () => (/* reexport safe */ _error_js__WEBPACK_IMPORTED_MODULE_2__.yL),
/* harmony export */   reactRouterV3BrowserTracingIntegration: () => (/* reexport safe */ _reactrouterv3_js__WEBPACK_IMPORTED_MODULE_6__.u),
/* harmony export */   reactRouterV4BrowserTracingIntegration: () => (/* reexport safe */ _reactrouter_js__WEBPACK_IMPORTED_MODULE_8__["do"]),
/* harmony export */   reactRouterV5BrowserTracingIntegration: () => (/* reexport safe */ _reactrouter_js__WEBPACK_IMPORTED_MODULE_8__.Qh),
/* harmony export */   reactRouterV6BrowserTracingIntegration: () => (/* reexport safe */ _reactrouterv6_js__WEBPACK_IMPORTED_MODULE_9__.jS),
/* harmony export */   reactRouterV7BrowserTracingIntegration: () => (/* reexport safe */ _reactrouterv7_js__WEBPACK_IMPORTED_MODULE_10__.k_),
/* harmony export */   tanstackRouterBrowserTracingIntegration: () => (/* reexport safe */ _tanstackrouter_js__WEBPACK_IMPORTED_MODULE_7__.X),
/* harmony export */   useProfiler: () => (/* reexport safe */ _profiler_js__WEBPACK_IMPORTED_MODULE_3__.LH),
/* harmony export */   withErrorBoundary: () => (/* reexport safe */ _errorboundary_js__WEBPACK_IMPORTED_MODULE_4__.Xc),
/* harmony export */   withProfiler: () => (/* reexport safe */ _profiler_js__WEBPACK_IMPORTED_MODULE_3__.mc),
/* harmony export */   withSentryReactRouterV6Routing: () => (/* reexport safe */ _reactrouterv6_js__WEBPACK_IMPORTED_MODULE_9__.oW),
/* harmony export */   withSentryReactRouterV7Routing: () => (/* reexport safe */ _reactrouterv7_js__WEBPACK_IMPORTED_MODULE_10__.PU),
/* harmony export */   withSentryRouting: () => (/* reexport safe */ _reactrouter_js__WEBPACK_IMPORTED_MODULE_8__.IH),
/* harmony export */   wrapCreateBrowserRouterV6: () => (/* reexport safe */ _reactrouterv6_js__WEBPACK_IMPORTED_MODULE_9__.KL),
/* harmony export */   wrapCreateBrowserRouterV7: () => (/* reexport safe */ _reactrouterv7_js__WEBPACK_IMPORTED_MODULE_10__.R4),
/* harmony export */   wrapCreateMemoryRouterV6: () => (/* reexport safe */ _reactrouterv6_js__WEBPACK_IMPORTED_MODULE_9__.XY),
/* harmony export */   wrapCreateMemoryRouterV7: () => (/* reexport safe */ _reactrouterv7_js__WEBPACK_IMPORTED_MODULE_10__.cB),
/* harmony export */   wrapUseRoutesV6: () => (/* reexport safe */ _reactrouterv6_js__WEBPACK_IMPORTED_MODULE_9__.MC),
/* harmony export */   wrapUseRoutesV7: () => (/* reexport safe */ _reactrouterv7_js__WEBPACK_IMPORTED_MODULE_10__.F0)
/* harmony export */ });
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99678);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _sentry_browser__WEBPACK_IMPORTED_MODULE_0__) if(["default","init","reactErrorHandler","Profiler","useProfiler","withProfiler","ErrorBoundary","withErrorBoundary","createReduxEnhancer","reactRouterV3BrowserTracingIntegration","tanstackRouterBrowserTracingIntegration","reactRouterV4BrowserTracingIntegration","reactRouterV5BrowserTracingIntegration","withSentryRouting","reactRouterV6BrowserTracingIntegration","withSentryReactRouterV6Routing","wrapCreateBrowserRouterV6","wrapCreateMemoryRouterV6","wrapUseRoutesV6","reactRouterV7BrowserTracingIntegration","withSentryReactRouterV7Routing","wrapCreateBrowserRouterV7","wrapCreateMemoryRouterV7","wrapUseRoutesV7"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _sentry_browser__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20900);
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84446);
/* harmony import */ var _profiler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13136);
/* harmony import */ var _errorboundary_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92732);
/* harmony import */ var _redux_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93590);
/* harmony import */ var _reactrouterv3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21521);
/* harmony import */ var _tanstackrouter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85698);
/* harmony import */ var _reactrouter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34134);
/* harmony import */ var _reactrouterv6_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89966);
/* harmony import */ var _reactrouterv7_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39277);











//# sourceMappingURL=index.js.map


/***/ }),

/***/ 13136:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  UD: () => (/* binding */ Profiler),
  LH: () => (/* binding */ useProfiler),
  mc: () => (/* binding */ withProfiler)
});

// UNUSED EXPORTS: UNKNOWN_COMPONENT

// EXTERNAL MODULE: consume shared module (default) @sentry/browser@^9.5.0 (strict) (fallback: ./node_modules/@sentry/browser/build/npm/esm/index.js)
var index_js_ = __webpack_require__(99678);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/semanticAttributes.js
var semanticAttributes = __webpack_require__(74611);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/time.js
var time = __webpack_require__(90519);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/tracing/trace.js + 4 modules
var trace = __webpack_require__(90496);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils/spanUtils.js
var spanUtils = __webpack_require__(5915);
// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js
var compat_module = __webpack_require__(17402);
;// ./node_modules/@sentry/react/build/esm/constants.js
const REACT_RENDER_OP = 'ui.react.render';

const REACT_UPDATE_OP = 'ui.react.update';

const REACT_MOUNT_OP = 'ui.react.mount';


//# sourceMappingURL=constants.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/react/build/esm/hoist-non-react-statics.js
var hoist_non_react_statics = __webpack_require__(98421);
;// ./node_modules/@sentry/react/build/esm/profiler.js






const UNKNOWN_COMPONENT = 'unknown';

/**
 * The Profiler component leverages Sentry's Tracing integration to generate
 * spans based on component lifecycles.
 */
class Profiler extends compat_module.Component {
  /**
   * The span of the mount activity
   * Made protected for the React Native SDK to access
   */

  /**
   * The span that represents the duration of time between shouldComponentUpdate and componentDidUpdate
   */

   constructor(props) {
    super(props);
    const { name, disabled = false } = this.props;

    if (disabled) {
      return;
    }

    this._mountSpan = (0,index_js_.startInactiveSpan)({
      name: `<${name}>`,
      onlyIfParent: true,
      op: REACT_MOUNT_OP,
      attributes: {
        [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.ui.react.profiler',
        'ui.component_name': name,
      },
    });
  }

  // If a component mounted, we can finish the mount activity.
   componentDidMount() {
    if (this._mountSpan) {
      this._mountSpan.end();
    }
  }

   shouldComponentUpdate({ updateProps, includeUpdates = true }) {
    // Only generate an update span if includeUpdates is true, if there is a valid mountSpan,
    // and if the updateProps have changed. It is ok to not do a deep equality check here as it is expensive.
    // We are just trying to give baseline clues for further investigation.
    if (includeUpdates && this._mountSpan && updateProps !== this.props.updateProps) {
      // See what props have changed between the previous props, and the current props. This is
      // set as data on the span. We just store the prop keys as the values could be potentially very large.
      const changedProps = Object.keys(updateProps).filter(k => updateProps[k] !== this.props.updateProps[k]);
      if (changedProps.length > 0) {
        const now = (0,time/* timestampInSeconds */.zf)();
        this._updateSpan = (0,trace/* withActiveSpan */.hb)(this._mountSpan, () => {
          return (0,index_js_.startInactiveSpan)({
            name: `<${this.props.name}>`,
            onlyIfParent: true,
            op: REACT_UPDATE_OP,
            startTime: now,
            attributes: {
              [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.ui.react.profiler',
              'ui.component_name': this.props.name,
              'ui.react.changed_props': changedProps,
            },
          });
        });
      }
    }

    return true;
  }

   componentDidUpdate() {
    if (this._updateSpan) {
      this._updateSpan.end();
      this._updateSpan = undefined;
    }
  }

  // If a component is unmounted, we can say it is no longer on the screen.
  // This means we can finish the span representing the component render.
   componentWillUnmount() {
    const endTimestamp = (0,time/* timestampInSeconds */.zf)();
    const { name, includeRender = true } = this.props;

    if (this._mountSpan && includeRender) {
      const startTime = (0,spanUtils/* spanToJSON */.et)(this._mountSpan).timestamp;
      (0,trace/* withActiveSpan */.hb)(this._mountSpan, () => {
        const renderSpan = (0,index_js_.startInactiveSpan)({
          onlyIfParent: true,
          name: `<${name}>`,
          op: REACT_RENDER_OP,
          startTime,
          attributes: {
            [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.ui.react.profiler',
            'ui.component_name': name,
          },
        });
        if (renderSpan) {
          // Have to cast to Span because the type of _mountSpan is Span | undefined
          // and not getting narrowed properly
          renderSpan.end(endTimestamp);
        }
      });
    }
  }

   render() {
    return this.props.children;
  }
}

// React.Component default props are defined as static property on the class
Object.assign(Profiler, {
  defaultProps: {
    disabled: false,
    includeRender: true,
    includeUpdates: true,
  },
});

/**
 * withProfiler is a higher order component that wraps a
 * component in a {@link Profiler} component. It is recommended that
 * the higher order component be used over the regular {@link Profiler} component.
 *
 * @param WrappedComponent component that is wrapped by Profiler
 * @param options the {@link ProfilerProps} you can pass into the Profiler
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withProfiler(
  WrappedComponent,
  // We do not want to have `updateProps` given in options, it is instead filled through the HOC.
  options,
) {
  const componentDisplayName =
    options?.name || WrappedComponent.displayName || WrappedComponent.name || UNKNOWN_COMPONENT;

  const Wrapped = (props) => (
    compat_module.createElement(Profiler, { ...options, name: componentDisplayName, updateProps: props,}
      , compat_module.createElement(WrappedComponent, { ...props,} )
    )
  );

  Wrapped.displayName = `profiler(${componentDisplayName})`;

  // Copy over static methods from Wrapped component to Profiler HOC
  // See: https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
  (0,hoist_non_react_statics/* hoistNonReactStatics */.X)(Wrapped, WrappedComponent);
  return Wrapped;
}

/**
 *
 * `useProfiler` is a React hook that profiles a React component.
 *
 * Requires React 16.8 or above.
 * @param name displayName of component being profiled
 */
function useProfiler(
  name,
  options = {
    disabled: false,
    hasRenderSpan: true,
  },
) {
  const [mountSpan] = compat_module.useState(() => {
    if (options?.disabled) {
      return undefined;
    }

    return (0,index_js_.startInactiveSpan)({
      name: `<${name}>`,
      onlyIfParent: true,
      op: REACT_MOUNT_OP,
      attributes: {
        [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.ui.react.profiler',
        'ui.component_name': name,
      },
    });
  });

  compat_module.useEffect(() => {
    if (mountSpan) {
      mountSpan.end();
    }

    return () => {
      if (mountSpan && options.hasRenderSpan) {
        const startTime = (0,spanUtils/* spanToJSON */.et)(mountSpan).timestamp;
        const endTimestamp = (0,time/* timestampInSeconds */.zf)();

        const renderSpan = (0,index_js_.startInactiveSpan)({
          name: `<${name}>`,
          onlyIfParent: true,
          op: REACT_RENDER_OP,
          startTime,
          attributes: {
            [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.ui.react.profiler',
            'ui.component_name': name,
          },
        });
        if (renderSpan) {
          // Have to cast to Span because the type of _mountSpan is Span | undefined
          // and not getting narrowed properly
          renderSpan.end(endTimestamp);
        }
      }
    };
    // We only want this to run once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}


//# sourceMappingURL=profiler.js.map


/***/ }),

/***/ 34134:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IH: () => (/* binding */ withSentryRouting),
/* harmony export */   Qh: () => (/* binding */ reactRouterV5BrowserTracingIntegration),
/* harmony export */   "do": () => (/* binding */ reactRouterV4BrowserTracingIntegration)
/* harmony export */ });
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99678);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74611);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57968);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5915);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17402);
/* harmony import */ var _hoist_non_react_statics_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98421);





// We need to disable eslint no-explicit-any because any is required for the
// react-router typings.

/**
 * A browser tracing integration that uses React Router v4 to instrument navigations.
 * Expects `history` (and optionally `routes` and `matchPath`) to be passed as options.
 */
function reactRouterV4BrowserTracingIntegration(
  options,
) {
  const integration = (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.browserTracingIntegration)({
    ...options,
    instrumentPageLoad: false,
    instrumentNavigation: false,
  });

  const { history, routes, matchPath, instrumentPageLoad = true, instrumentNavigation = true } = options;

  return {
    ...integration,
    afterAllSetup(client) {
      integration.afterAllSetup(client);

      instrumentReactRouter(
        client,
        instrumentPageLoad,
        instrumentNavigation,
        history,
        'reactrouter_v4',
        routes,
        matchPath,
      );
    },
  };
}

/**
 * A browser tracing integration that uses React Router v5 to instrument navigations.
 * Expects `history` (and optionally `routes` and `matchPath`) to be passed as options.
 */
function reactRouterV5BrowserTracingIntegration(
  options,
) {
  const integration = (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.browserTracingIntegration)({
    ...options,
    instrumentPageLoad: false,
    instrumentNavigation: false,
  });

  const { history, routes, matchPath, instrumentPageLoad = true, instrumentNavigation = true } = options;

  return {
    ...integration,
    afterAllSetup(client) {
      integration.afterAllSetup(client);

      instrumentReactRouter(
        client,
        instrumentPageLoad,
        instrumentNavigation,
        history,
        'reactrouter_v5',
        routes,
        matchPath,
      );
    },
  };
}

function instrumentReactRouter(
  client,
  instrumentPageLoad,
  instrumentNavigation,
  history,
  instrumentationName,
  allRoutes = [],
  matchPath,
) {
  function getInitPathName() {
    if (history.location) {
      return history.location.pathname;
    }

    if (_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.WINDOW.location) {
      return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__.WINDOW.location.pathname;
    }

    return undefined;
  }

  /**
   * Normalizes a transaction name. Returns the new name as well as the
   * source of the transaction.
   *
   * @param pathname The initial pathname we normalize
   */
  function normalizeTransactionName(pathname) {
    if (allRoutes.length === 0 || !matchPath) {
      return [pathname, 'url'];
    }

    const branches = matchRoutes(allRoutes, pathname, matchPath);
    for (const branch of branches) {
      if (branch.match.isExact) {
        return [branch.match.path, 'route'];
      }
    }

    return [pathname, 'url'];
  }

  if (instrumentPageLoad) {
    const initPathName = getInitPathName();
    if (initPathName) {
      const [name, source] = normalizeTransactionName(initPathName);
      (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.startBrowserTracingPageLoadSpan)(client, {
        name,
        attributes: {
          [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_OP */ .uT]: 'pageload',
          [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */ .JD]: `auto.pageload.react.${instrumentationName}`,
          [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */ .i_]: source,
        },
      });
    }
  }

  if (instrumentNavigation && history.listen) {
    history.listen((location, action) => {
      if (action && (action === 'PUSH' || action === 'POP')) {
        const [name, source] = normalizeTransactionName(location.pathname);
        (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.startBrowserTracingNavigationSpan)(client, {
          name,
          attributes: {
            [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_OP */ .uT]: 'navigation',
            [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */ .JD]: `auto.navigation.react.${instrumentationName}`,
            [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */ .i_]: source,
          },
        });
      }
    });
  }
}

/**
 * Matches a set of routes to a pathname
 * Based on implementation from
 */
function matchRoutes(
  routes,
  pathname,
  matchPath,
  branch = [],
) {
  routes.some(route => {
    const match = route.path
      ? matchPath(pathname, route)
      : branch.length
        ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          branch[branch.length - 1].match // use parent match
        : computeRootMatch(pathname); // use default "root" match

    if (match) {
      branch.push({ route, match });

      if (route.routes) {
        matchRoutes(route.routes, pathname, matchPath, branch);
      }
    }

    return !!match;
  });

  return branch;
}

function computeRootMatch(pathname) {
  return { path: '/', url: '/', params: {}, isExact: pathname === '/' };
}

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */
function withSentryRouting(Route) {
  const componentDisplayName = Route.displayName || Route.name;

  const WrappedRoute = (props) => {
    if (props?.computedMatch?.isExact) {
      const route = props.computedMatch.path;
      const activeRootSpan = getActiveRootSpan();

      (0,_sentry_core__WEBPACK_IMPORTED_MODULE_2__/* .getCurrentScope */ .o5)().setTransactionName(route);

      if (activeRootSpan) {
        activeRootSpan.updateName(route);
        activeRootSpan.setAttribute(_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */ .i_, 'route');
      }
    }

    // @ts-expect-error Setting more specific React Component typing for `R` generic above
    // will break advanced type inference done by react router params:
    // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/13dc4235c069e25fe7ee16e11f529d909f9f3ff8/types/react-router/index.d.ts#L154-L164
    return react__WEBPACK_IMPORTED_MODULE_4__.createElement(Route, { ...props,} );
  };

  WrappedRoute.displayName = `sentryRoute(${componentDisplayName})`;
  (0,_hoist_non_react_statics_js__WEBPACK_IMPORTED_MODULE_5__/* .hoistNonReactStatics */ .X)(WrappedRoute, Route);
  // @ts-expect-error Setting more specific React Component typing for `R` generic above
  // will break advanced type inference done by react router params:
  // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/13dc4235c069e25fe7ee16e11f529d909f9f3ff8/types/react-router/index.d.ts#L154-L164
  return WrappedRoute;
}
/* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */

function getActiveRootSpan() {
  const span = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__/* .getActiveSpan */ .Bk)();
  const rootSpan = span && (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__/* .getRootSpan */ .zU)(span);

  if (!rootSpan) {
    return undefined;
  }

  const op = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__/* .spanToJSON */ .et)(rootSpan).op;

  // Only use this root span if it is a pageload or navigation span
  return op === 'navigation' || op === 'pageload' ? rootSpan : undefined;
}


//# sourceMappingURL=reactrouter.js.map


/***/ }),

/***/ 21521:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ reactRouterV3BrowserTracingIntegration)
/* harmony export */ });
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99678);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74611);



// Many of the types below had to be mocked out to prevent typescript issues
// these types are required for correct functionality.

/**
 * A browser tracing integration that uses React Router v3 to instrument navigations.
 * Expects `history` (and optionally `routes` and `matchPath`) to be passed as options.
 */
function reactRouterV3BrowserTracingIntegration(
  options,
) {
  const integration = (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.browserTracingIntegration)({
    ...options,
    instrumentPageLoad: false,
    instrumentNavigation: false,
  });

  const { history, routes, match, instrumentPageLoad = true, instrumentNavigation = true } = options;

  return {
    ...integration,
    afterAllSetup(client) {
      integration.afterAllSetup(client);

      if (instrumentPageLoad && _sentry_browser__WEBPACK_IMPORTED_MODULE_0__.WINDOW.location) {
        normalizeTransactionName(
          routes,
          _sentry_browser__WEBPACK_IMPORTED_MODULE_0__.WINDOW.location ,
          match,
          (localName, source = 'url') => {
            (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.startBrowserTracingPageLoadSpan)(client, {
              name: localName,
              attributes: {
                [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_OP */ .uT]: 'pageload',
                [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */ .JD]: 'auto.pageload.react.reactrouter_v3',
                [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */ .i_]: source,
              },
            });
          },
        );
      }

      if (instrumentNavigation && history.listen) {
        history.listen(location => {
          if (location.action === 'PUSH' || location.action === 'POP') {
            normalizeTransactionName(
              routes,
              location,
              match,
              (localName, source = 'url') => {
                (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.startBrowserTracingNavigationSpan)(client, {
                  name: localName,
                  attributes: {
                    [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_OP */ .uT]: 'navigation',
                    [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */ .JD]: 'auto.navigation.react.reactrouter_v3',
                    [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */ .i_]: source,
                  },
                });
              },
            );
          }
        });
      }
    },
  };
}

/**
 * Normalize transaction names using `Router.match`
 */
function normalizeTransactionName(
  appRoutes,
  location,
  match,
  callback,
) {
  let name = location.pathname;
  match(
    {
      location,
      routes: appRoutes,
    },
    (error, _redirectLocation, renderProps) => {
      if (error || !renderProps) {
        return callback(name);
      }

      const routePath = getRouteStringFromRoutes(renderProps.routes || []);
      if (routePath.length === 0 || routePath === '/*') {
        return callback(name);
      }

      name = routePath;
      return callback(name, 'route');
    },
  );
}

/**
 * Generate route name from array of routes
 */
function getRouteStringFromRoutes(routes) {
  if (!Array.isArray(routes) || routes.length === 0) {
    return '';
  }

  const routesWithPaths = routes.filter((route) => !!route.path);

  let index = -1;
  for (let x = routesWithPaths.length - 1; x >= 0; x--) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const route = routesWithPaths[x];
    if (route.path?.startsWith('/')) {
      index = x;
      break;
    }
  }

  return routesWithPaths
    .slice(index)
    .filter(({ path }) => !!path)
    .map(({ path }) => path)
    .join('');
}


//# sourceMappingURL=reactrouterv3.js.map


/***/ }),

/***/ 70457:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CE: () => (/* binding */ createV6CompatibleWrapUseRoutes),
/* harmony export */   G0: () => (/* binding */ createV6CompatibleWithSentryReactRouterRouting),
/* harmony export */   IP: () => (/* binding */ createV6CompatibleWrapCreateBrowserRouter),
/* harmony export */   Xh: () => (/* binding */ createV6CompatibleWrapCreateMemoryRouter),
/* harmony export */   dV: () => (/* binding */ createReactRouterV6CompatibleTracingIntegration)
/* harmony export */ });
/* unused harmony exports getNumberOfUrlSegments, handleNavigation */
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99678);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74611);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57968);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5915);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5602);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17402);
/* harmony import */ var _debug_build_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29882);
/* harmony import */ var _hoist_non_react_statics_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98421);






/* eslint-disable max-lines */
// Inspired from Donnie McNeal's solution:
// https://gist.github.com/wontondon/e8c4bdf2888875e4c755712e99279536


let _useEffect;
let _useLocation;
let _useNavigationType;
let _createRoutesFromChildren;
let _matchRoutes;
let _stripBasename = false;

const CLIENTS_WITH_INSTRUMENT_NAVIGATION = new WeakSet();

// Keeping as a global variable for cross-usage in multiple functions
const allRoutes = new Set();

/**
 * Creates a wrapCreateBrowserRouter function that can be used with all React Router v6 compatible versions.
 */
function createV6CompatibleWrapCreateBrowserRouter

(
  createRouterFunction,
  version,
) {
  if (!_useEffect || !_useLocation || !_useNavigationType || !_matchRoutes) {
    _debug_build_js__WEBPACK_IMPORTED_MODULE_6__/* .DEBUG_BUILD */ .T &&
      _sentry_core__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.warn(
        `reactRouterV${version}Instrumentation was unable to wrap the \`createRouter\` function because of one or more missing parameters.`,
      );

    return createRouterFunction;
  }

  return function (routes, opts) {
    addRoutesToAllRoutes(routes);

    const router = createRouterFunction(routes, opts);
    const basename = opts?.basename;

    const activeRootSpan = getActiveRootSpan();

    // The initial load ends when `createBrowserRouter` is called.
    // This is the earliest convenient time to update the transaction name.
    // Callbacks to `router.subscribe` are not called for the initial load.
    if (router.state.historyAction === 'POP' && activeRootSpan) {
      updatePageloadTransaction(
        activeRootSpan,
        router.state.location,
        routes,
        undefined,
        basename,
        Array.from(allRoutes),
      );
    }

    router.subscribe((state) => {
      if (state.historyAction === 'PUSH' || state.historyAction === 'POP') {
        // Wait for the next render if loading an unsettled route
        if (state.navigation.state !== 'idle') {
          requestAnimationFrame(() => {
            handleNavigation({
              location: state.location,
              routes,
              navigationType: state.historyAction,
              version,
              basename,
              allRoutes: Array.from(allRoutes),
            });
          });
        } else {
          handleNavigation({
            location: state.location,
            routes,
            navigationType: state.historyAction,
            version,
            basename,
            allRoutes: Array.from(allRoutes),
          });
        }
      }
    });

    return router;
  };
}

/**
 * Creates a wrapCreateMemoryRouter function that can be used with all React Router v6 compatible versions.
 */
function createV6CompatibleWrapCreateMemoryRouter

(
  createRouterFunction,
  version,
) {
  if (!_useEffect || !_useLocation || !_useNavigationType || !_matchRoutes) {
    _debug_build_js__WEBPACK_IMPORTED_MODULE_6__/* .DEBUG_BUILD */ .T &&
      _sentry_core__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.warn(
        `reactRouterV${version}Instrumentation was unable to wrap the \`createMemoryRouter\` function because of one or more missing parameters.`,
      );

    return createRouterFunction;
  }

  return function (
    routes,
    opts

,
  ) {
    addRoutesToAllRoutes(routes);

    const router = createRouterFunction(routes, opts);
    const basename = opts?.basename;

    const activeRootSpan = getActiveRootSpan();
    let initialEntry = undefined;

    const initialEntries = opts?.initialEntries;
    const initialIndex = opts?.initialIndex;

    const hasOnlyOneInitialEntry = initialEntries && initialEntries.length === 1;
    const hasIndexedEntry = initialIndex !== undefined && initialEntries && initialEntries[initialIndex];

    initialEntry = hasOnlyOneInitialEntry
      ? initialEntries[0]
      : hasIndexedEntry
        ? initialEntries[initialIndex]
        : undefined;

    const location = initialEntry
      ? typeof initialEntry === 'string'
        ? { pathname: initialEntry }
        : initialEntry
      : router.state.location;

    if (router.state.historyAction === 'POP' && activeRootSpan) {
      updatePageloadTransaction(activeRootSpan, location, routes, undefined, basename, Array.from(allRoutes));
    }

    router.subscribe((state) => {
      const location = state.location;
      if (state.historyAction === 'PUSH' || state.historyAction === 'POP') {
        handleNavigation({
          location,
          routes,
          navigationType: state.historyAction,
          version,
          basename,
          allRoutes: Array.from(allRoutes),
        });
      }
    });

    return router;
  };
}

/**
 * Creates a browser tracing integration that can be used with all React Router v6 compatible versions.
 */
function createReactRouterV6CompatibleTracingIntegration(
  options,
  version,
) {
  const integration = (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.browserTracingIntegration)({
    ...options,
    instrumentPageLoad: false,
    instrumentNavigation: false,
  });

  const {
    useEffect,
    useLocation,
    useNavigationType,
    createRoutesFromChildren,
    matchRoutes,
    stripBasename,
    instrumentPageLoad = true,
    instrumentNavigation = true,
  } = options;

  return {
    ...integration,
    setup() {
      _useEffect = useEffect;
      _useLocation = useLocation;
      _useNavigationType = useNavigationType;
      _matchRoutes = matchRoutes;
      _createRoutesFromChildren = createRoutesFromChildren;
      _stripBasename = stripBasename || false;
    },
    afterAllSetup(client) {
      integration.afterAllSetup(client);

      const initPathName = _sentry_browser__WEBPACK_IMPORTED_MODULE_0__.WINDOW.location?.pathname;
      if (instrumentPageLoad && initPathName) {
        (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.startBrowserTracingPageLoadSpan)(client, {
          name: initPathName,
          attributes: {
            [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */ .i_]: 'url',
            [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_OP */ .uT]: 'pageload',
            [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */ .JD]: `auto.pageload.react.reactrouter_v${version}`,
          },
        });
      }

      if (instrumentNavigation) {
        CLIENTS_WITH_INSTRUMENT_NAVIGATION.add(client);
      }
    },
  };
}

function createV6CompatibleWrapUseRoutes(origUseRoutes, version) {
  if (!_useEffect || !_useLocation || !_useNavigationType || !_matchRoutes) {
    _debug_build_js__WEBPACK_IMPORTED_MODULE_6__/* .DEBUG_BUILD */ .T &&
      _sentry_core__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.warn(
        'reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters.',
      );

    return origUseRoutes;
  }

  const SentryRoutes

 = (props) => {
    const isMountRenderPass = react__WEBPACK_IMPORTED_MODULE_5__.useRef(true);
    const { routes, locationArg } = props;

    const Routes = origUseRoutes(routes, locationArg);

    const location = _useLocation();
    const navigationType = _useNavigationType();

    // A value with stable identity to either pick `locationArg` if available or `location` if not
    const stableLocationParam =
      typeof locationArg === 'string' || locationArg?.pathname ? (locationArg ) : location;

    _useEffect(() => {
      const normalizedLocation =
        typeof stableLocationParam === 'string' ? { pathname: stableLocationParam } : stableLocationParam;

      if (isMountRenderPass.current) {
        addRoutesToAllRoutes(routes);

        updatePageloadTransaction(
          getActiveRootSpan(),
          normalizedLocation,
          routes,
          undefined,
          undefined,
          Array.from(allRoutes),
        );
        isMountRenderPass.current = false;
      } else {
        handleNavigation({
          location: normalizedLocation,
          routes,
          navigationType,
          version,
          allRoutes: Array.from(allRoutes),
        });
      }
    }, [navigationType, stableLocationParam]);

    return Routes;
  };

  // eslint-disable-next-line react/display-name
  return (routes, locationArg) => {
    return react__WEBPACK_IMPORTED_MODULE_5__.createElement(SentryRoutes, { routes: routes, locationArg: locationArg,} );
  };
}

function handleNavigation(opts

) {
  const { location, routes, navigationType, version, matches, basename, allRoutes } = opts;
  const branches = Array.isArray(matches) ? matches : _matchRoutes(routes, location, basename);

  const client = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_2__/* .getClient */ .KU)();
  if (!client || !CLIENTS_WITH_INSTRUMENT_NAVIGATION.has(client)) {
    return;
  }

  if ((navigationType === 'PUSH' || navigationType === 'POP') && branches) {
    let name,
      source = 'url';
    const isInDescendantRoute = locationIsInsideDescendantRoute(location, allRoutes || routes);

    if (isInDescendantRoute) {
      name = prefixWithSlash(rebuildRoutePathFromAllRoutes(allRoutes || routes, location));
      source = 'route';
    }

    if (!isInDescendantRoute || !name) {
      [name, source] = getNormalizedName(routes, location, branches, basename);
    }

    const activeSpan = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__/* .getActiveSpan */ .Bk)();
    const isAlreadyInNavigationSpan = activeSpan && (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__/* .spanToJSON */ .et)(activeSpan).op === 'navigation';

    // Cross usage can result in multiple navigation spans being created without this check
    if (isAlreadyInNavigationSpan) {
      activeSpan?.updateName(name);
      activeSpan?.setAttribute(_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */ .i_, source);
    } else {
      (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.startBrowserTracingNavigationSpan)(client, {
        name,
        attributes: {
          [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */ .i_]: source,
          [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_OP */ .uT]: 'navigation',
          [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */ .JD]: `auto.navigation.react.reactrouter_v${version}`,
        },
      });
    }
  }
}

/**
 * Strip the basename from a pathname if exists.
 *
 * Vendored and modified from `react-router`
 * https://github.com/remix-run/react-router/blob/462bb712156a3f739d6139a0f14810b76b002df6/packages/router/utils.ts#L1038
 */
function stripBasenameFromPathname(pathname, basename) {
  if (!basename || basename === '/') {
    return pathname;
  }

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return pathname;
  }

  // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it
  const startIndex = basename.endsWith('/') ? basename.length - 1 : basename.length;
  const nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== '/') {
    // pathname does not start with basename/
    return pathname;
  }

  return pathname.slice(startIndex) || '/';
}

function sendIndexPath(pathBuilder, pathname, basename) {
  const reconstructedPath = pathBuilder || _stripBasename ? stripBasenameFromPathname(pathname, basename) : pathname;

  const formattedPath =
    // If the path ends with a slash, remove it
    reconstructedPath[reconstructedPath.length - 1] === '/'
      ? reconstructedPath.slice(0, -1)
      : // If the path ends with a wildcard, remove it
        reconstructedPath.slice(-2) === '/*'
        ? reconstructedPath.slice(0, -1)
        : reconstructedPath;

  return [formattedPath, 'route'];
}

function pathEndsWithWildcard(path) {
  return path.endsWith('*');
}

function pathIsWildcardAndHasChildren(path, branch) {
  return (pathEndsWithWildcard(path) && !!branch.route.children?.length) || false;
}

function routeIsDescendant(route) {
  return !!(!route.children && route.element && route.path?.endsWith('/*'));
}

function locationIsInsideDescendantRoute(location, routes) {
  const matchedRoutes = _matchRoutes(routes, location) ;

  if (matchedRoutes) {
    for (const match of matchedRoutes) {
      if (routeIsDescendant(match.route) && pickSplat(match)) {
        return true;
      }
    }
  }

  return false;
}

function addRoutesToAllRoutes(routes) {
  routes.forEach(route => {
    const extractedChildRoutes = getChildRoutesRecursively(route);

    extractedChildRoutes.forEach(r => {
      allRoutes.add(r);
    });
  });
}

function getChildRoutesRecursively(route, allRoutes = new Set()) {
  if (!allRoutes.has(route)) {
    allRoutes.add(route);

    if (route.children && !route.index) {
      route.children.forEach(child => {
        const childRoutes = getChildRoutesRecursively(child, allRoutes);

        childRoutes.forEach(r => {
          allRoutes.add(r);
        });
      });
    }
  }

  return allRoutes;
}

function pickPath(match) {
  return trimWildcard(match.route.path || '');
}

function pickSplat(match) {
  return match.params['*'] || '';
}

function trimWildcard(path) {
  return path[path.length - 1] === '*' ? path.slice(0, -1) : path;
}

function trimSlash(path) {
  return path[path.length - 1] === '/' ? path.slice(0, -1) : path;
}

function prefixWithSlash(path) {
  return path[0] === '/' ? path : `/${path}`;
}

function rebuildRoutePathFromAllRoutes(allRoutes, location) {
  const matchedRoutes = _matchRoutes(allRoutes, location) ;

  if (!matchedRoutes || matchedRoutes.length === 0) {
    return '';
  }

  for (const match of matchedRoutes) {
    if (match.route.path && match.route.path !== '*') {
      const path = pickPath(match);
      const strippedPath = stripBasenameFromPathname(location.pathname, prefixWithSlash(match.pathnameBase));

      if (location.pathname === strippedPath) {
        return trimSlash(strippedPath);
      }

      return trimSlash(
        trimSlash(path || '') +
          prefixWithSlash(
            rebuildRoutePathFromAllRoutes(
              allRoutes.filter(route => route !== match.route),
              {
                pathname: strippedPath,
              },
            ),
          ),
      );
    }
  }

  return '';
}

function getNormalizedName(
  routes,
  location,
  branches,
  basename = '',
) {
  if (!routes || routes.length === 0) {
    return [_stripBasename ? stripBasenameFromPathname(location.pathname, basename) : location.pathname, 'url'];
  }

  let pathBuilder = '';
  if (branches) {
    for (const branch of branches) {
      const route = branch.route;
      if (route) {
        // Early return if index route
        if (route.index) {
          return sendIndexPath(pathBuilder, branch.pathname, basename);
        }
        const path = route.path;

        // If path is not a wildcard and has no child routes, append the path
        if (path && !pathIsWildcardAndHasChildren(path, branch)) {
          const newPath = path[0] === '/' || pathBuilder[pathBuilder.length - 1] === '/' ? path : `/${path}`;
          pathBuilder = trimSlash(pathBuilder) + prefixWithSlash(newPath);

          // If the path matches the current location, return the path
          if (trimSlash(location.pathname) === trimSlash(basename + branch.pathname)) {
            if (
              // If the route defined on the element is something like
              // <Route path="/stores/:storeId/products/:productId" element={<div>Product</div>} />
              // We should check against the branch.pathname for the number of / separators
              getNumberOfUrlSegments(pathBuilder) !== getNumberOfUrlSegments(branch.pathname) &&
              // We should not count wildcard operators in the url segments calculation
              !pathEndsWithWildcard(pathBuilder)
            ) {
              return [(_stripBasename ? '' : basename) + newPath, 'route'];
            }

            // if the last character of the pathbuilder is a wildcard and there are children, remove the wildcard
            if (pathIsWildcardAndHasChildren(pathBuilder, branch)) {
              pathBuilder = pathBuilder.slice(0, -1);
            }

            return [(_stripBasename ? '' : basename) + pathBuilder, 'route'];
          }
        }
      }
    }
  }

  const fallbackTransactionName = _stripBasename
    ? stripBasenameFromPathname(location.pathname, basename)
    : location.pathname || '/';

  return [fallbackTransactionName, 'url'];
}

function updatePageloadTransaction(
  activeRootSpan,
  location,
  routes,
  matches,
  basename,
  allRoutes,
) {
  const branches = Array.isArray(matches)
    ? matches
    : (_matchRoutes(allRoutes || routes, location, basename) );

  if (branches) {
    let name,
      source = 'url';

    const isInDescendantRoute = locationIsInsideDescendantRoute(location, allRoutes || routes);

    if (isInDescendantRoute) {
      name = prefixWithSlash(rebuildRoutePathFromAllRoutes(allRoutes || routes, location));
      source = 'route';
    }

    if (!isInDescendantRoute || !name) {
      [name, source] = getNormalizedName(routes, location, branches, basename);
    }

    (0,_sentry_core__WEBPACK_IMPORTED_MODULE_2__/* .getCurrentScope */ .o5)().setTransactionName(name || '/');

    if (activeRootSpan) {
      activeRootSpan.updateName(name);
      activeRootSpan.setAttribute(_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */ .i_, source);
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createV6CompatibleWithSentryReactRouterRouting(
  Routes,
  version,
) {
  if (!_useEffect || !_useLocation || !_useNavigationType || !_createRoutesFromChildren || !_matchRoutes) {
    _debug_build_js__WEBPACK_IMPORTED_MODULE_6__/* .DEBUG_BUILD */ .T &&
      _sentry_core__WEBPACK_IMPORTED_MODULE_4__/* .logger */ .vF.warn(`reactRouterV6Instrumentation was unable to wrap Routes because of one or more missing parameters.
      useEffect: ${_useEffect}. useLocation: ${_useLocation}. useNavigationType: ${_useNavigationType}.
      createRoutesFromChildren: ${_createRoutesFromChildren}. matchRoutes: ${_matchRoutes}.`);

    return Routes;
  }

  const SentryRoutes = (props) => {
    const isMountRenderPass = react__WEBPACK_IMPORTED_MODULE_5__.useRef(true);

    const location = _useLocation();
    const navigationType = _useNavigationType();

    _useEffect(
      () => {
        const routes = _createRoutesFromChildren(props.children) ;

        if (isMountRenderPass.current) {
          addRoutesToAllRoutes(routes);

          updatePageloadTransaction(getActiveRootSpan(), location, routes, undefined, undefined, Array.from(allRoutes));
          isMountRenderPass.current = false;
        } else {
          handleNavigation({
            location,
            routes,
            navigationType,
            version,
            allRoutes: Array.from(allRoutes),
          });
        }
      },
      // `props.children` is purposely not included in the dependency array, because we do not want to re-run this effect
      // when the children change. We only want to start transactions when the location or navigation type change.
      [location, navigationType],
    );

    // @ts-expect-error Setting more specific React Component typing for `R` generic above
    // will break advanced type inference done by react router params
    return react__WEBPACK_IMPORTED_MODULE_5__.createElement(Routes, { ...props,} );
  };

  (0,_hoist_non_react_statics_js__WEBPACK_IMPORTED_MODULE_7__/* .hoistNonReactStatics */ .X)(SentryRoutes, Routes);

  // @ts-expect-error Setting more specific React Component typing for `R` generic above
  // will break advanced type inference done by react router params
  return SentryRoutes;
}

function getActiveRootSpan() {
  const span = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__/* .getActiveSpan */ .Bk)();
  const rootSpan = span ? (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__/* .getRootSpan */ .zU)(span) : undefined;

  if (!rootSpan) {
    return undefined;
  }

  const op = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_3__/* .spanToJSON */ .et)(rootSpan).op;

  // Only use this root span if it is a pageload or navigation span
  return op === 'navigation' || op === 'pageload' ? rootSpan : undefined;
}

/**
 * Returns number of URL segments of a passed string URL.
 */
function getNumberOfUrlSegments(url) {
  // split at '/' or at '\/' to split regex urls correctly
  return url.split(/\\?\//).filter(s => s.length > 0 && s !== ',').length;
}


//# sourceMappingURL=reactrouterv6-compat-utils.js.map


/***/ }),

/***/ 89966:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KL: () => (/* binding */ wrapCreateBrowserRouterV6),
/* harmony export */   MC: () => (/* binding */ wrapUseRoutesV6),
/* harmony export */   XY: () => (/* binding */ wrapCreateMemoryRouterV6),
/* harmony export */   jS: () => (/* binding */ reactRouterV6BrowserTracingIntegration),
/* harmony export */   oW: () => (/* binding */ withSentryReactRouterV6Routing)
/* harmony export */ });
/* harmony import */ var _reactrouterv6_compat_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70457);


/**
 * A browser tracing integration that uses React Router v6 to instrument navigations.
 * Expects `useEffect`, `useLocation`, `useNavigationType`, `createRoutesFromChildren` and `matchRoutes` to be passed as options.
 */
function reactRouterV6BrowserTracingIntegration(
  options,
) {
  return (0,_reactrouterv6_compat_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .createReactRouterV6CompatibleTracingIntegration */ .dV)(options, '6');
}

/**
 * A wrapper function that adds Sentry routing instrumentation to a React Router v6 useRoutes hook.
 * This is used to automatically capture route changes as transactions when using the useRoutes hook.
 */
function wrapUseRoutesV6(origUseRoutes) {
  return (0,_reactrouterv6_compat_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .createV6CompatibleWrapUseRoutes */ .CE)(origUseRoutes, '6');
}

/**
 * A wrapper function that adds Sentry routing instrumentation to a React Router v6 createBrowserRouter function.
 * This is used to automatically capture route changes as transactions when using the createBrowserRouter API.
 */
function wrapCreateBrowserRouterV6

(createRouterFunction) {
  return (0,_reactrouterv6_compat_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .createV6CompatibleWrapCreateBrowserRouter */ .IP)(createRouterFunction, '6');
}

/**
 * A wrapper function that adds Sentry routing instrumentation to a React Router v6 createMemoryRouter function.
 * This is used to automatically capture route changes as transactions when using the createMemoryRouter API.
 * The difference between createBrowserRouter and createMemoryRouter is that with createMemoryRouter,
 * optional `initialEntries` are also taken into account.
 */
function wrapCreateMemoryRouterV6

(createMemoryRouterFunction) {
  return (0,_reactrouterv6_compat_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .createV6CompatibleWrapCreateMemoryRouter */ .Xh)(createMemoryRouterFunction, '6');
}

/**
 * A higher-order component that adds Sentry routing instrumentation to a React Router v6 Route component.
 * This is used to automatically capture route changes as transactions.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withSentryReactRouterV6Routing(routes) {
  return (0,_reactrouterv6_compat_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .createV6CompatibleWithSentryReactRouterRouting */ .G0)(routes, '6');
}


//# sourceMappingURL=reactrouterv6.js.map


/***/ }),

/***/ 39277:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F0: () => (/* binding */ wrapUseRoutesV7),
/* harmony export */   PU: () => (/* binding */ withSentryReactRouterV7Routing),
/* harmony export */   R4: () => (/* binding */ wrapCreateBrowserRouterV7),
/* harmony export */   cB: () => (/* binding */ wrapCreateMemoryRouterV7),
/* harmony export */   k_: () => (/* binding */ reactRouterV7BrowserTracingIntegration)
/* harmony export */ });
/* harmony import */ var _reactrouterv6_compat_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70457);


/**
 * A browser tracing integration that uses React Router v7 to instrument navigations.
 * Expects `useEffect`, `useLocation`, `useNavigationType`, `createRoutesFromChildren` and `matchRoutes` to be passed as options.
 */
function reactRouterV7BrowserTracingIntegration(
  options,
) {
  return (0,_reactrouterv6_compat_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .createReactRouterV6CompatibleTracingIntegration */ .dV)(options, '7');
}

/**
 * A higher-order component that adds Sentry routing instrumentation to a React Router v7 Route component.
 * This is used to automatically capture route changes as transactions.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withSentryReactRouterV7Routing(routes) {
  return (0,_reactrouterv6_compat_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .createV6CompatibleWithSentryReactRouterRouting */ .G0)(routes, '7');
}

/**
 * A wrapper function that adds Sentry routing instrumentation to a React Router v7 createBrowserRouter function.
 * This is used to automatically capture route changes as transactions when using the createBrowserRouter API.
 */
function wrapCreateBrowserRouterV7

(createRouterFunction) {
  return (0,_reactrouterv6_compat_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .createV6CompatibleWrapCreateBrowserRouter */ .IP)(createRouterFunction, '7');
}

/**
 * A wrapper function that adds Sentry routing instrumentation to a React Router v7 createMemoryRouter function.
 * This is used to automatically capture route changes as transactions when using the createMemoryRouter API.
 * The difference between createBrowserRouter and createMemoryRouter is that with createMemoryRouter,
 * optional `initialEntries` are also taken into account.
 */
function wrapCreateMemoryRouterV7

(createMemoryRouterFunction) {
  return (0,_reactrouterv6_compat_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .createV6CompatibleWrapCreateMemoryRouter */ .Xh)(createMemoryRouterFunction, '7');
}

/**
 * A wrapper function that adds Sentry routing instrumentation to a React Router v7 useRoutes hook.
 * This is used to automatically capture route changes as transactions when using the useRoutes hook.
 */
function wrapUseRoutesV7(origUseRoutes) {
  return (0,_reactrouterv6_compat_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .createV6CompatibleWrapUseRoutes */ .CE)(origUseRoutes, '7');
}


//# sourceMappingURL=reactrouterv7.js.map


/***/ }),

/***/ 93590:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ createReduxEnhancer)
/* harmony export */ });
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57968);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6810);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40873);


const ACTION_BREADCRUMB_CATEGORY = 'redux.action';
const ACTION_BREADCRUMB_TYPE = 'info';

const defaultOptions = {
  attachReduxState: true,
  actionTransformer: action => action,
  stateTransformer: state => state || null,
};

/**
 * Creates an enhancer that would be passed to Redux's createStore to log actions and the latest state to Sentry.
 *
 * @param enhancerOptions Options to pass to the enhancer
 */
function createReduxEnhancer(enhancerOptions) {
  // Note: We return an any type as to not have type conflicts.
  const options = {
    ...defaultOptions,
    ...enhancerOptions,
  };

  return (next) =>
    (reducer, initialState) => {
      options.attachReduxState &&
        (0,_sentry_core__WEBPACK_IMPORTED_MODULE_0__/* .getGlobalScope */ .m6)().addEventProcessor((event, hint) => {
          try {
            // @ts-expect-error try catch to reduce bundle size
            if (event.type === undefined && event.contexts.state.state.type === 'redux') {
              hint.attachments = [
                ...(hint.attachments || []),
                // @ts-expect-error try catch to reduce bundle size
                { filename: 'redux_state.json', data: JSON.stringify(event.contexts.state.state.value) },
              ];
            }
          } catch (_) {
            // empty
          }
          return event;
        });

      const sentryReducer = (state, action) => {
        const newState = reducer(state, action);

        const scope = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_0__/* .getCurrentScope */ .o5)();

        /* Action breadcrumbs */
        const transformedAction = options.actionTransformer(action);
        if (typeof transformedAction !== 'undefined' && transformedAction !== null) {
          (0,_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .addBreadcrumb */ .Z)({
            category: ACTION_BREADCRUMB_CATEGORY,
            data: transformedAction,
            type: ACTION_BREADCRUMB_TYPE,
          });
        }

        /* Set latest state to scope */
        const transformedState = options.stateTransformer(newState);
        if (typeof transformedState !== 'undefined' && transformedState !== null) {
          const client = (0,_sentry_core__WEBPACK_IMPORTED_MODULE_0__/* .getClient */ .KU)();
          const options = client?.getOptions();
          const normalizationDepth = options?.normalizeDepth || 3; // default state normalization depth to 3

          // Set the normalization depth of the redux state to the configured `normalizeDepth` option or a sane number as a fallback
          const newStateContext = { state: { type: 'redux', value: transformedState } };
          (0,_sentry_core__WEBPACK_IMPORTED_MODULE_2__/* .addNonEnumerableProperty */ .my)(
            newStateContext,
            '__sentry_override_normalization_depth__',
            3 + // 3 layers for `state.value.transformedState`
              normalizationDepth, // rest for the actual state
          );

          scope.setContext('state', newStateContext);
        } else {
          scope.setContext('state', null);
        }

        /* Allow user to configure scope with latest state */
        const { configureScopeWithState } = options;
        if (typeof configureScopeWithState === 'function') {
          configureScopeWithState(scope, newState);
        }

        return newState;
      };

      return next(sentryReducer, initialState);
    };
}


//# sourceMappingURL=redux.js.map


/***/ }),

/***/ 20900:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99678);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8251);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17402);




/**
 * Inits the React SDK
 */
function init(options) {
  const opts = {
    ...options,
  };

  (0,_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .applySdkMetadata */ .K)(opts, 'react');
  (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.setContext)('react', { version: react__WEBPACK_IMPORTED_MODULE_2__.version });
  return (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.init)(opts);
}


//# sourceMappingURL=sdk.js.map


/***/ }),

/***/ 85698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ tanstackRouterBrowserTracingIntegration)
/* harmony export */ });
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99678);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74611);



/**
 * A custom browser tracing integration for TanStack Router.
 *
 * The minimum compatible version of `@tanstack/react-router` is `1.64.0`.
 *
 * @param router A TanStack Router `Router` instance that should be used for routing instrumentation.
 * @param options Sentry browser tracing configuration.
 */
function tanstackRouterBrowserTracingIntegration(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  router, // This is `any` because we don't want any type mismatches if TanStack Router changes their types
  options = {},
) {
  const castRouterInstance = router;

  const browserTracingIntegrationInstance = (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.browserTracingIntegration)({
    ...options,
    instrumentNavigation: false,
    instrumentPageLoad: false,
  });

  const { instrumentPageLoad = true, instrumentNavigation = true } = options;

  return {
    ...browserTracingIntegrationInstance,
    afterAllSetup(client) {
      browserTracingIntegrationInstance.afterAllSetup(client);

      const initialWindowLocation = _sentry_browser__WEBPACK_IMPORTED_MODULE_0__.WINDOW.location;
      if (instrumentPageLoad && initialWindowLocation) {
        const matchedRoutes = castRouterInstance.matchRoutes(
          initialWindowLocation.pathname,
          castRouterInstance.options.parseSearch(initialWindowLocation.search),
          { preload: false, throwOnError: false },
        );

        const lastMatch = matchedRoutes[matchedRoutes.length - 1];

        (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.startBrowserTracingPageLoadSpan)(client, {
          name: lastMatch ? lastMatch.routeId : initialWindowLocation.pathname,
          attributes: {
            [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_OP */ .uT]: 'pageload',
            [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */ .JD]: 'auto.pageload.react.tanstack_router',
            [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */ .i_]: lastMatch ? 'route' : 'url',
            ...routeMatchToParamSpanAttributes(lastMatch),
          },
        });
      }

      if (instrumentNavigation) {
        // The onBeforeNavigate hook is called at the very beginning of a navigation and is only called once per navigation, even when the user is redirected
        castRouterInstance.subscribe('onBeforeNavigate', onBeforeNavigateArgs => {
          // onBeforeNavigate is called during pageloads. We can avoid creating navigation spans by comparing the states of the to and from arguments.
          if (onBeforeNavigateArgs.toLocation.state === onBeforeNavigateArgs.fromLocation?.state) {
            return;
          }

          const onResolvedMatchedRoutes = castRouterInstance.matchRoutes(
            onBeforeNavigateArgs.toLocation.pathname,
            onBeforeNavigateArgs.toLocation.search,
            { preload: false, throwOnError: false },
          );

          const onBeforeNavigateLastMatch = onResolvedMatchedRoutes[onResolvedMatchedRoutes.length - 1];

          const navigationLocation = _sentry_browser__WEBPACK_IMPORTED_MODULE_0__.WINDOW.location;
          const navigationSpan = (0,_sentry_browser__WEBPACK_IMPORTED_MODULE_0__.startBrowserTracingNavigationSpan)(client, {
            name: onBeforeNavigateLastMatch ? onBeforeNavigateLastMatch.routeId : navigationLocation.pathname,
            attributes: {
              [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_OP */ .uT]: 'navigation',
              [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */ .JD]: 'auto.navigation.react.tanstack_router',
              [_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */ .i_]: onBeforeNavigateLastMatch ? 'route' : 'url',
            },
          });

          // In case the user is redirected during navigation we want to update the span with the right value.
          const unsubscribeOnResolved = castRouterInstance.subscribe('onResolved', onResolvedArgs => {
            unsubscribeOnResolved();
            if (navigationSpan) {
              const onResolvedMatchedRoutes = castRouterInstance.matchRoutes(
                onResolvedArgs.toLocation.pathname,
                onResolvedArgs.toLocation.search,
                { preload: false, throwOnError: false },
              );

              const onResolvedLastMatch = onResolvedMatchedRoutes[onResolvedMatchedRoutes.length - 1];

              if (onResolvedLastMatch) {
                navigationSpan.updateName(onResolvedLastMatch.routeId);
                navigationSpan.setAttribute(_sentry_core__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */ .i_, 'route');
                navigationSpan.setAttributes(routeMatchToParamSpanAttributes(onResolvedLastMatch));
              }
            }
          });
        });
      }
    },
  };
}

function routeMatchToParamSpanAttributes(match) {
  if (!match) {
    return {};
  }

  const paramAttributes = {};
  Object.entries(match.params).forEach(([key, value]) => {
    paramAttributes[`url.path.params.${key}`] = value;
  });

  return paramAttributes;
}


//# sourceMappingURL=tanstackrouter.js.map


/***/ })

}]);