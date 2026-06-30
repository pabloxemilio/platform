"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[9083],{

/***/ 92328:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ getAsyncContextStrategy)
});

// UNUSED EXPORTS: setAsyncContextStrategy

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/carrier.js
var esm_carrier = __webpack_require__(95200);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/scope.js
var esm_scope = __webpack_require__(94988);
;// ./node_modules/@sentry/core/build/esm/defaultScopes.js



/** Get the default current scope. */
function getDefaultCurrentScope() {
  return (0,esm_carrier/* getGlobalSingleton */.BY)('defaultCurrentScope', () => new esm_scope/* Scope */.H());
}

/** Get the default isolation scope. */
function getDefaultIsolationScope() {
  return (0,esm_carrier/* getGlobalSingleton */.BY)('defaultIsolationScope', () => new esm_scope/* Scope */.H());
}


//# sourceMappingURL=defaultScopes.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/is.js
var is = __webpack_require__(30690);
;// ./node_modules/@sentry/core/build/esm/asyncContext/stackStrategy.js





/**
 * This is an object that holds a stack of scopes.
 */
class AsyncContextStack {

   constructor(scope, isolationScope) {
    let assignedScope;
    if (!scope) {
      assignedScope = new esm_scope/* Scope */.H();
    } else {
      assignedScope = scope;
    }

    let assignedIsolationScope;
    if (!isolationScope) {
      assignedIsolationScope = new esm_scope/* Scope */.H();
    } else {
      assignedIsolationScope = isolationScope;
    }

    // scope stack for domains or the process
    this._stack = [{ scope: assignedScope }];
    this._isolationScope = assignedIsolationScope;
  }

  /**
   * Fork a scope for the stack.
   */
   withScope(callback) {
    const scope = this._pushScope();

    let maybePromiseResult;
    try {
      maybePromiseResult = callback(scope);
    } catch (e) {
      this._popScope();
      throw e;
    }

    if ((0,is/* isThenable */.Qg)(maybePromiseResult)) {
      // @ts-expect-error - isThenable returns the wrong type
      return maybePromiseResult.then(
        res => {
          this._popScope();
          return res;
        },
        e => {
          this._popScope();
          throw e;
        },
      );
    }

    this._popScope();
    return maybePromiseResult;
  }

  /**
   * Get the client of the stack.
   */
   getClient() {
    return this.getStackTop().client ;
  }

  /**
   * Returns the scope of the top stack.
   */
   getScope() {
    return this.getStackTop().scope;
  }

  /**
   * Get the isolation scope for the stack.
   */
   getIsolationScope() {
    return this._isolationScope;
  }

  /**
   * Returns the topmost scope layer in the order domain > local > process.
   */
   getStackTop() {
    return this._stack[this._stack.length - 1] ;
  }

  /**
   * Push a scope to the stack.
   */
   _pushScope() {
    // We want to clone the content of prev scope
    const scope = this.getScope().clone();
    this._stack.push({
      client: this.getClient(),
      scope,
    });
    return scope;
  }

  /**
   * Pop a scope from the stack.
   */
   _popScope() {
    if (this._stack.length <= 1) return false;
    return !!this._stack.pop();
  }
}

/**
 * Get the global async context stack.
 * This will be removed during the v8 cycle and is only here to make migration easier.
 */
function getAsyncContextStack() {
  const registry = (0,esm_carrier/* getMainCarrier */.EU)();
  const sentry = (0,esm_carrier/* getSentryCarrier */.Se)(registry);

  return (sentry.stack = sentry.stack || new AsyncContextStack(getDefaultCurrentScope(), getDefaultIsolationScope()));
}

function withScope(callback) {
  return getAsyncContextStack().withScope(callback);
}

function withSetScope(scope, callback) {
  const stack = getAsyncContextStack() ;
  return stack.withScope(() => {
    stack.getStackTop().scope = scope;
    return callback(scope);
  });
}

function withIsolationScope(callback) {
  return getAsyncContextStack().withScope(() => {
    return callback(getAsyncContextStack().getIsolationScope());
  });
}

/**
 * Get the stack-based async context strategy.
 */
function getStackAsyncContextStrategy() {
  return {
    withIsolationScope,
    withScope,
    withSetScope,
    withSetIsolationScope: (_isolationScope, callback) => {
      return withIsolationScope(callback);
    },
    getCurrentScope: () => getAsyncContextStack().getScope(),
    getIsolationScope: () => getAsyncContextStack().getIsolationScope(),
  };
}


//# sourceMappingURL=stackStrategy.js.map

;// ./node_modules/@sentry/core/build/esm/asyncContext/index.js
/* unused harmony import specifier */ var getMainCarrier;
/* unused harmony import specifier */ var getSentryCarrier;



/**
 * @private Private API with no semver guarantees!
 *
 * Sets the global async context strategy
 */
function setAsyncContextStrategy(strategy) {
  // Get main carrier (global for every environment)
  const registry = getMainCarrier();
  const sentry = getSentryCarrier(registry);
  sentry.acs = strategy;
}

/**
 * Get the current async context strategy.
 * If none has been setup, the default will be used.
 */
function getAsyncContextStrategy(carrier) {
  const sentry = (0,esm_carrier/* getSentryCarrier */.Se)(carrier);

  if (sentry.acs) {
    return sentry.acs;
  }

  // Otherwise, use the default one (stack)
  return getStackAsyncContextStrategy();
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6810:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ addBreadcrumb)
/* harmony export */ });
/* harmony import */ var _currentScopes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57968);
/* harmony import */ var _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5602);
/* harmony import */ var _utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90519);




/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */
const DEFAULT_BREADCRUMBS = 100;

/**
 * Records a new breadcrumb which will be attached to future events.
 *
 * Breadcrumbs will be added to subsequent events to provide more context on
 * user's actions prior to an error or crash.
 */
function addBreadcrumb(breadcrumb, hint) {
  const client = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__/* .getClient */ .KU)();
  const isolationScope = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__/* .getIsolationScope */ .rm)();

  if (!client) return;

  const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } = client.getOptions();

  if (maxBreadcrumbs <= 0) return;

  const timestamp = (0,_utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_2__/* .dateTimestampInSeconds */ .lu)();
  const mergedBreadcrumb = { timestamp, ...breadcrumb };
  const finalBreadcrumb = beforeBreadcrumb
    ? ((0,_utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_1__/* .consoleSandbox */ .pq)(() => beforeBreadcrumb(mergedBreadcrumb, hint)) )
    : mergedBreadcrumb;

  if (finalBreadcrumb === null) return;

  if (client.emit) {
    client.emit('beforeAddBreadcrumb', finalBreadcrumb, hint);
  }

  isolationScope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
}


//# sourceMappingURL=breadcrumbs.js.map


/***/ }),

/***/ 95200:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BY: () => (/* binding */ getGlobalSingleton),
/* harmony export */   EU: () => (/* binding */ getMainCarrier),
/* harmony export */   Se: () => (/* binding */ getSentryCarrier)
/* harmony export */ });
/* harmony import */ var _utils_hoist_version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21472);
/* harmony import */ var _utils_hoist_worldwide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92575);



/**
 * An object that contains globally accessible properties and maintains a scope stack.
 * @hidden
 */

/**
 * Returns the global shim registry.
 *
 * FIXME: This function is problematic, because despite always returning a valid Carrier,
 * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
 * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
 **/
function getMainCarrier() {
  // This ensures a Sentry carrier exists
  getSentryCarrier(_utils_hoist_worldwide_js__WEBPACK_IMPORTED_MODULE_1__/* .GLOBAL_OBJ */ .O);
  return _utils_hoist_worldwide_js__WEBPACK_IMPORTED_MODULE_1__/* .GLOBAL_OBJ */ .O;
}

/** Will either get the existing sentry carrier, or create a new one. */
function getSentryCarrier(carrier) {
  const __SENTRY__ = (carrier.__SENTRY__ = carrier.__SENTRY__ || {});

  // For now: First SDK that sets the .version property wins
  __SENTRY__.version = __SENTRY__.version || _utils_hoist_version_js__WEBPACK_IMPORTED_MODULE_0__/* .SDK_VERSION */ .M;

  // Intentionally populating and returning the version of "this" SDK instance
  // rather than what's set in .version so that "this" SDK always gets its carrier
  return (__SENTRY__[_utils_hoist_version_js__WEBPACK_IMPORTED_MODULE_0__/* .SDK_VERSION */ .M] = __SENTRY__[_utils_hoist_version_js__WEBPACK_IMPORTED_MODULE_0__/* .SDK_VERSION */ .M] || {});
}

/**
 * Returns a global singleton contained in the global `__SENTRY__[]` object.
 *
 * If the singleton doesn't already exist in `__SENTRY__`, it will be created using the given factory
 * function and added to the `__SENTRY__` object.
 *
 * @param name name of the global singleton on __SENTRY__
 * @param creator creator Factory function to create the singleton if it doesn't already exist on `__SENTRY__`
 * @param obj (Optional) The global object on which to look for `__SENTRY__`, if not `GLOBAL_OBJ`'s return value
 * @returns the singleton
 */
function getGlobalSingleton(
  name,
  creator,
  obj = _utils_hoist_worldwide_js__WEBPACK_IMPORTED_MODULE_1__/* .GLOBAL_OBJ */ .O,
) {
  const __SENTRY__ = (obj.__SENTRY__ = obj.__SENTRY__ || {});
  const carrier = (__SENTRY__[_utils_hoist_version_js__WEBPACK_IMPORTED_MODULE_0__/* .SDK_VERSION */ .M] = __SENTRY__[_utils_hoist_version_js__WEBPACK_IMPORTED_MODULE_0__/* .SDK_VERSION */ .M] || {});
  // Note: We do not want to set `carrier.version` here, as this may be called before any `init` is called, e.g. for the default scopes
  return carrier[name] || (carrier[name] = creator());
}


//# sourceMappingURL=carrier.js.map


/***/ }),

/***/ 7313:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ DEFAULT_ENVIRONMENT)
/* harmony export */ });
const DEFAULT_ENVIRONMENT = 'production';


//# sourceMappingURL=constants.js.map


/***/ }),

/***/ 57968:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KU: () => (/* binding */ getClient),
/* harmony export */   m6: () => (/* binding */ getGlobalScope),
/* harmony export */   o5: () => (/* binding */ getCurrentScope),
/* harmony export */   rB: () => (/* binding */ withIsolationScope),
/* harmony export */   rm: () => (/* binding */ getIsolationScope),
/* harmony export */   v4: () => (/* binding */ withScope),
/* harmony export */   vn: () => (/* binding */ getTraceContextFromScope)
/* harmony export */ });
/* harmony import */ var _asyncContext_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92328);
/* harmony import */ var _carrier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95200);
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94988);
/* harmony import */ var _utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40873);
/* harmony import */ var _utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30243);










/**
 * Get the currently active scope.
 */
function getCurrentScope() {
  const carrier = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_1__/* .getMainCarrier */ .EU)();
  const acs = (0,_asyncContext_index_js__WEBPACK_IMPORTED_MODULE_0__/* .getAsyncContextStrategy */ .h)(carrier);
  return acs.getCurrentScope();
}

/**
 * Get the currently active isolation scope.
 * The isolation scope is active for the current execution context.
 */
function getIsolationScope() {
  const carrier = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_1__/* .getMainCarrier */ .EU)();
  const acs = (0,_asyncContext_index_js__WEBPACK_IMPORTED_MODULE_0__/* .getAsyncContextStrategy */ .h)(carrier);
  return acs.getIsolationScope();
}

/**
 * Get the global scope.
 * This scope is applied to _all_ events.
 */
function getGlobalScope() {
  return (0,_carrier_js__WEBPACK_IMPORTED_MODULE_1__/* .getGlobalSingleton */ .BY)('globalScope', () => new _scope_js__WEBPACK_IMPORTED_MODULE_2__/* .Scope */ .H());
}

/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 */

/**
 * Either creates a new active scope, or sets the given scope as active scope in the given callback.
 */
function withScope(
  ...rest
) {
  const carrier = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_1__/* .getMainCarrier */ .EU)();
  const acs = (0,_asyncContext_index_js__WEBPACK_IMPORTED_MODULE_0__/* .getAsyncContextStrategy */ .h)(carrier);

  // If a scope is defined, we want to make this the active scope instead of the default one
  if (rest.length === 2) {
    const [scope, callback] = rest;

    if (!scope) {
      return acs.withScope(callback);
    }

    return acs.withSetScope(scope, callback);
  }

  return acs.withScope(rest[0]);
}

/**
 * Attempts to fork the current isolation scope and the current scope based on the current async context strategy. If no
 * async context strategy is set, the isolation scope and the current scope will not be forked (this is currently the
 * case, for example, in the browser).
 *
 * Usage of this function in environments without async context strategy is discouraged and may lead to unexpected behaviour.
 *
 * This function is intended for Sentry SDK and SDK integration development. It is not recommended to be used in "normal"
 * applications directly because it comes with pitfalls. Use at your own risk!
 */

/**
 * Either creates a new active isolation scope, or sets the given isolation scope as active scope in the given callback.
 */
function withIsolationScope(
  ...rest

) {
  const carrier = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_1__/* .getMainCarrier */ .EU)();
  const acs = (0,_asyncContext_index_js__WEBPACK_IMPORTED_MODULE_0__/* .getAsyncContextStrategy */ .h)(carrier);

  // If a scope is defined, we want to make this the active scope instead of the default one
  if (rest.length === 2) {
    const [isolationScope, callback] = rest;

    if (!isolationScope) {
      return acs.withIsolationScope(callback);
    }

    return acs.withSetIsolationScope(isolationScope, callback);
  }

  return acs.withIsolationScope(rest[0]);
}

/**
 * Get the currently active client.
 */
function getClient() {
  return getCurrentScope().getClient();
}

/**
 * Get a trace context for the given scope.
 */
function getTraceContextFromScope(scope) {
  const propagationContext = scope.getPropagationContext();

  const { traceId, parentSpanId, propagationSpanId } = propagationContext;

  const traceContext = (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_3__/* .dropUndefinedKeys */ .Ce)({
    trace_id: traceId,
    span_id: propagationSpanId || (0,_utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_4__/* .generateSpanId */ .Z)(),
    parent_span_id: parentSpanId,
  });

  return traceContext;
}


//# sourceMappingURL=currentScopes.js.map


/***/ }),

/***/ 26674:
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

/***/ 75330:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LE: () => (/* binding */ createSessionEnvelope),
/* harmony export */   V7: () => (/* binding */ createEventEnvelope),
/* harmony export */   lu: () => (/* binding */ createSpanEnvelope)
/* harmony export */ });
/* harmony import */ var _tracing_dynamicSamplingContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31158);
/* harmony import */ var _utils_hoist_dsn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87961);
/* harmony import */ var _utils_hoist_envelope_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87202);
/* harmony import */ var _utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5915);







/**
 * Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
 * Merge with existing data if any.
 **/
function enhanceEventWithSdkInfo(event, sdkInfo) {
  if (!sdkInfo) {
    return event;
  }
  event.sdk = event.sdk || {};
  event.sdk.name = event.sdk.name || sdkInfo.name;
  event.sdk.version = event.sdk.version || sdkInfo.version;
  event.sdk.integrations = [...(event.sdk.integrations || []), ...(sdkInfo.integrations || [])];
  event.sdk.packages = [...(event.sdk.packages || []), ...(sdkInfo.packages || [])];
  return event;
}

/** Creates an envelope from a Session */
function createSessionEnvelope(
  session,
  dsn,
  metadata,
  tunnel,
) {
  const sdkInfo = (0,_utils_hoist_envelope_js__WEBPACK_IMPORTED_MODULE_2__/* .getSdkMetadataForEnvelopeHeader */ .Cj)(metadata);
  const envelopeHeaders = {
    sent_at: new Date().toISOString(),
    ...(sdkInfo && { sdk: sdkInfo }),
    ...(!!tunnel && dsn && { dsn: (0,_utils_hoist_dsn_js__WEBPACK_IMPORTED_MODULE_1__/* .dsnToString */ .SB)(dsn) }),
  };

  const envelopeItem =
    'aggregates' in session ? [{ type: 'sessions' }, session] : [{ type: 'session' }, session.toJSON()];

  return (0,_utils_hoist_envelope_js__WEBPACK_IMPORTED_MODULE_2__/* .createEnvelope */ .h4)(envelopeHeaders, [envelopeItem]);
}

/**
 * Create an Envelope from an event.
 */
function createEventEnvelope(
  event,
  dsn,
  metadata,
  tunnel,
) {
  const sdkInfo = (0,_utils_hoist_envelope_js__WEBPACK_IMPORTED_MODULE_2__/* .getSdkMetadataForEnvelopeHeader */ .Cj)(metadata);

  /*
    Note: Due to TS, event.type may be `replay_event`, theoretically.
    In practice, we never call `createEventEnvelope` with `replay_event` type,
    and we'd have to adjust a looot of types to make this work properly.
    We want to avoid casting this around, as that could lead to bugs (e.g. when we add another type)
    So the safe choice is to really guard against the replay_event type here.
  */
  const eventType = event.type && event.type !== 'replay_event' ? event.type : 'event';

  enhanceEventWithSdkInfo(event, metadata?.sdk);

  const envelopeHeaders = (0,_utils_hoist_envelope_js__WEBPACK_IMPORTED_MODULE_2__/* .createEventEnvelopeHeaders */ .n2)(event, sdkInfo, tunnel, dsn);

  // Prevent this data (which, if it exists, was used in earlier steps in the processing pipeline) from being sent to
  // sentry. (Note: Our use of this property comes and goes with whatever we might be debugging, whatever hacks we may
  // have temporarily added, etc. Even if we don't happen to be using it at some point in the future, let's not get rid
  // of this `delete`, lest we miss putting it back in the next time the property is in use.)
  delete event.sdkProcessingMetadata;

  const eventItem = [{ type: eventType }, event];
  return (0,_utils_hoist_envelope_js__WEBPACK_IMPORTED_MODULE_2__/* .createEnvelope */ .h4)(envelopeHeaders, [eventItem]);
}

/**
 * Create envelope from Span item.
 *
 * Takes an optional client and runs spans through `beforeSendSpan` if available.
 */
function createSpanEnvelope(spans, client) {
  function dscHasRequiredProps(dsc) {
    return !!dsc.trace_id && !!dsc.public_key;
  }

  // For the moment we'll obtain the DSC from the first span in the array
  // This might need to be changed if we permit sending multiple spans from
  // different segments in one envelope
  const dsc = (0,_tracing_dynamicSamplingContext_js__WEBPACK_IMPORTED_MODULE_0__/* .getDynamicSamplingContextFromSpan */ .k1)(spans[0]);

  const dsn = client?.getDsn();
  const tunnel = client?.getOptions().tunnel;

  const headers = {
    sent_at: new Date().toISOString(),
    ...(dscHasRequiredProps(dsc) && { trace: dsc }),
    ...(!!tunnel && dsn && { dsn: (0,_utils_hoist_dsn_js__WEBPACK_IMPORTED_MODULE_1__/* .dsnToString */ .SB)(dsn) }),
  };

  const beforeSendSpan = client?.getOptions().beforeSendSpan;
  const convertToSpanJSON = beforeSendSpan
    ? (span) => {
        const spanJson = (0,_utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .spanToJSON */ .et)(span);
        const processedSpan = beforeSendSpan(spanJson);

        if (!processedSpan) {
          (0,_utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .showSpanDropWarning */ .xl)();
          return spanJson;
        }

        return processedSpan;
      }
    : _utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .spanToJSON */ .et;

  const items = [];
  for (const span of spans) {
    const spanJson = convertToSpanJSON(span);
    if (spanJson) {
      items.push((0,_utils_hoist_envelope_js__WEBPACK_IMPORTED_MODULE_2__/* .createSpanEnvelopeItem */ .y5)(spanJson));
    }
  }

  return (0,_utils_hoist_envelope_js__WEBPACK_IMPORTED_MODULE_2__/* .createEnvelope */ .h4)(headers, items);
}


//# sourceMappingURL=envelope.js.map


/***/ }),

/***/ 94988:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ Scope)
/* harmony export */ });
/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59328);
/* harmony import */ var _utils_hoist_is_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30690);
/* harmony import */ var _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5602);
/* harmony import */ var _utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44910);
/* harmony import */ var _utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30243);
/* harmony import */ var _utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90519);
/* harmony import */ var _utils_merge_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45734);
/* harmony import */ var _utils_spanOnScope_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70333);









/**
 * Default value for maximum number of breadcrumbs added to an event.
 */
const DEFAULT_MAX_BREADCRUMBS = 100;

/**
 * A context to be used for capturing an event.
 * This can either be a Scope, or a partial ScopeContext,
 * or a callback that receives the current scope and returns a new scope to use.
 */

/**
 * Holds additional event information.
 */
class Scope {
  /** Flag if notifying is happening. */

  /** Callback for client to receive scope changes. */

  /** Callback list that will be called during event processing. */

  /** Array of breadcrumbs. */

  /** User */

  /** Tags */

  /** Extra */

  /** Contexts */

  /** Attachments */

  /** Propagation Context for distributed tracing */

  /**
   * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
   * sent to Sentry
   */

  /** Fingerprint */

  /** Severity */

  /**
   * Transaction Name
   *
   * IMPORTANT: The transaction name on the scope has nothing to do with root spans/transaction objects.
   * It's purpose is to assign a transaction to the scope that's added to non-transaction events.
   */

  /** Session */

  /** The client on this scope */

  /** Contains the last event id of a captured event.  */

  // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.

   constructor() {
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
    this._propagationContext = {
      traceId: (0,_utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_4__/* .generateTraceId */ .e)(),
      sampleRand: Math.random(),
    };
  }

  /**
   * Clone all data from this scope into a new scope.
   */
   clone() {
    const newScope = new Scope();
    newScope._breadcrumbs = [...this._breadcrumbs];
    newScope._tags = { ...this._tags };
    newScope._extra = { ...this._extra };
    newScope._contexts = { ...this._contexts };
    if (this._contexts.flags) {
      // We need to copy the `values` array so insertions on a cloned scope
      // won't affect the original array.
      newScope._contexts.flags = {
        values: [...this._contexts.flags.values],
      };
    }

    newScope._user = this._user;
    newScope._level = this._level;
    newScope._session = this._session;
    newScope._transactionName = this._transactionName;
    newScope._fingerprint = this._fingerprint;
    newScope._eventProcessors = [...this._eventProcessors];
    newScope._attachments = [...this._attachments];
    newScope._sdkProcessingMetadata = { ...this._sdkProcessingMetadata };
    newScope._propagationContext = { ...this._propagationContext };
    newScope._client = this._client;
    newScope._lastEventId = this._lastEventId;

    (0,_utils_spanOnScope_js__WEBPACK_IMPORTED_MODULE_7__/* ._setSpanForScope */ .r)(newScope, (0,_utils_spanOnScope_js__WEBPACK_IMPORTED_MODULE_7__/* ._getSpanForScope */ .f)(this));

    return newScope;
  }

  /**
   * Update the client assigned to this scope.
   * Note that not every scope will have a client assigned - isolation scopes & the global scope will generally not have a client,
   * as well as manually created scopes.
   */
   setClient(client) {
    this._client = client;
  }

  /**
   * Set the ID of the last captured error event.
   * This is generally only captured on the isolation scope.
   */
   setLastEventId(lastEventId) {
    this._lastEventId = lastEventId;
  }

  /**
   * Get the client assigned to this scope.
   */
   getClient() {
    return this._client ;
  }

  /**
   * Get the ID of the last captured error event.
   * This is generally only available on the isolation scope.
   */
   lastEventId() {
    return this._lastEventId;
  }

  /**
   * @inheritDoc
   */
   addScopeListener(callback) {
    this._scopeListeners.push(callback);
  }

  /**
   * Add an event processor that will be called before an event is sent.
   */
   addEventProcessor(callback) {
    this._eventProcessors.push(callback);
    return this;
  }

  /**
   * Set the user for this scope.
   * Set to `null` to unset the user.
   */
   setUser(user) {
    // If null is passed we want to unset everything, but still define keys,
    // so that later down in the pipeline any existing values are cleared.
    this._user = user || {
      email: undefined,
      id: undefined,
      ip_address: undefined,
      username: undefined,
    };

    if (this._session) {
      (0,_session_js__WEBPACK_IMPORTED_MODULE_0__/* .updateSession */ .qO)(this._session, { user });
    }

    this._notifyScopeListeners();
    return this;
  }

  /**
   * Get the user from this scope.
   */
   getUser() {
    return this._user;
  }

  /**
   * Set an object that will be merged into existing tags on the scope,
   * and will be sent as tags data with the event.
   */
   setTags(tags) {
    this._tags = {
      ...this._tags,
      ...tags,
    };
    this._notifyScopeListeners();
    return this;
  }

  /**
   * Set a single tag that will be sent as tags data with the event.
   */
   setTag(key, value) {
    this._tags = { ...this._tags, [key]: value };
    this._notifyScopeListeners();
    return this;
  }

  /**
   * Set an object that will be merged into existing extra on the scope,
   * and will be sent as extra data with the event.
   */
   setExtras(extras) {
    this._extra = {
      ...this._extra,
      ...extras,
    };
    this._notifyScopeListeners();
    return this;
  }

  /**
   * Set a single key:value extra entry that will be sent as extra data with the event.
   */
   setExtra(key, extra) {
    this._extra = { ...this._extra, [key]: extra };
    this._notifyScopeListeners();
    return this;
  }

  /**
   * Sets the fingerprint on the scope to send with the events.
   * @param {string[]} fingerprint Fingerprint to group events in Sentry.
   */
   setFingerprint(fingerprint) {
    this._fingerprint = fingerprint;
    this._notifyScopeListeners();
    return this;
  }

  /**
   * Sets the level on the scope for future events.
   */
   setLevel(level) {
    this._level = level;
    this._notifyScopeListeners();
    return this;
  }

  /**
   * Sets the transaction name on the scope so that the name of e.g. taken server route or
   * the page location is attached to future events.
   *
   * IMPORTANT: Calling this function does NOT change the name of the currently active
   * root span. If you want to change the name of the active root span, use
   * `Sentry.updateSpanName(rootSpan, 'new name')` instead.
   *
   * By default, the SDK updates the scope's transaction name automatically on sensible
   * occasions, such as a page navigation or when handling a new request on the server.
   */
   setTransactionName(name) {
    this._transactionName = name;
    this._notifyScopeListeners();
    return this;
  }

  /**
   * Sets context data with the given name.
   * Data passed as context will be normalized. You can also pass `null` to unset the context.
   * Note that context data will not be merged - calling `setContext` will overwrite an existing context with the same key.
   */
   setContext(key, context) {
    if (context === null) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this._contexts[key];
    } else {
      this._contexts[key] = context;
    }

    this._notifyScopeListeners();
    return this;
  }

  /**
   * Set the session for the scope.
   */
   setSession(session) {
    if (!session) {
      delete this._session;
    } else {
      this._session = session;
    }
    this._notifyScopeListeners();
    return this;
  }

  /**
   * Get the session from the scope.
   */
   getSession() {
    return this._session;
  }

  /**
   * Updates the scope with provided data. Can work in three variations:
   * - plain object containing updatable attributes
   * - Scope instance that'll extract the attributes from
   * - callback function that'll receive the current scope as an argument and allow for modifications
   */
   update(captureContext) {
    if (!captureContext) {
      return this;
    }

    const scopeToMerge = typeof captureContext === 'function' ? captureContext(this) : captureContext;

    const scopeInstance =
      scopeToMerge instanceof Scope
        ? scopeToMerge.getScopeData()
        : (0,_utils_hoist_is_js__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Qd)(scopeToMerge)
          ? (captureContext )
          : undefined;

    const { tags, extra, user, contexts, level, fingerprint = [], propagationContext } = scopeInstance || {};

    this._tags = { ...this._tags, ...tags };
    this._extra = { ...this._extra, ...extra };
    this._contexts = { ...this._contexts, ...contexts };

    if (user && Object.keys(user).length) {
      this._user = user;
    }

    if (level) {
      this._level = level;
    }

    if (fingerprint.length) {
      this._fingerprint = fingerprint;
    }

    if (propagationContext) {
      this._propagationContext = propagationContext;
    }

    return this;
  }

  /**
   * Clears the current scope and resets its properties.
   * Note: The client will not be cleared.
   */
   clear() {
    // client is not cleared here on purpose!
    this._breadcrumbs = [];
    this._tags = {};
    this._extra = {};
    this._user = {};
    this._contexts = {};
    this._level = undefined;
    this._transactionName = undefined;
    this._fingerprint = undefined;
    this._session = undefined;
    (0,_utils_spanOnScope_js__WEBPACK_IMPORTED_MODULE_7__/* ._setSpanForScope */ .r)(this, undefined);
    this._attachments = [];
    this.setPropagationContext({ traceId: (0,_utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_4__/* .generateTraceId */ .e)(), sampleRand: Math.random() });

    this._notifyScopeListeners();
    return this;
  }

  /**
   * Adds a breadcrumb to the scope.
   * By default, the last 100 breadcrumbs are kept.
   */
   addBreadcrumb(breadcrumb, maxBreadcrumbs) {
    const maxCrumbs = typeof maxBreadcrumbs === 'number' ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;

    // No data has been changed, so don't notify scope listeners
    if (maxCrumbs <= 0) {
      return this;
    }

    const mergedBreadcrumb = {
      timestamp: (0,_utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_5__/* .dateTimestampInSeconds */ .lu)(),
      ...breadcrumb,
    };

    this._breadcrumbs.push(mergedBreadcrumb);
    if (this._breadcrumbs.length > maxCrumbs) {
      this._breadcrumbs = this._breadcrumbs.slice(-maxCrumbs);
      this._client?.recordDroppedEvent('buffer_overflow', 'log_item');
    }

    this._notifyScopeListeners();

    return this;
  }

  /**
   * Get the last breadcrumb of the scope.
   */
   getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }

  /**
   * Clear all breadcrumbs from the scope.
   */
   clearBreadcrumbs() {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  }

  /**
   * Add an attachment to the scope.
   */
   addAttachment(attachment) {
    this._attachments.push(attachment);
    return this;
  }

  /**
   * Clear all attachments from the scope.
   */
   clearAttachments() {
    this._attachments = [];
    return this;
  }

  /**
   * Get the data of this scope, which should be applied to an event during processing.
   */
   getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: (0,_utils_spanOnScope_js__WEBPACK_IMPORTED_MODULE_7__/* ._getSpanForScope */ .f)(this),
    };
  }

  /**
   * Add data which will be accessible during event processing but won't get sent to Sentry.
   */
   setSDKProcessingMetadata(newData) {
    this._sdkProcessingMetadata = (0,_utils_merge_js__WEBPACK_IMPORTED_MODULE_6__/* .merge */ .h)(this._sdkProcessingMetadata, newData, 2);
    return this;
  }

  /**
   * Add propagation context to the scope, used for distributed tracing
   */
   setPropagationContext(context) {
    this._propagationContext = context;
    return this;
  }

  /**
   * Get propagation context from the scope, used for distributed tracing
   */
   getPropagationContext() {
    return this._propagationContext;
  }

  /**
   * Capture an exception for this scope.
   *
   * @returns {string} The id of the captured Sentry event.
   */
   captureException(exception, hint) {
    const eventId = hint?.event_id || (0,_utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_3__/* .uuid4 */ .eJ)();

    if (!this._client) {
      _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .vF.warn('No client configured on scope - will not capture exception!');
      return eventId;
    }

    const syntheticException = new Error('Sentry syntheticException');

    this._client.captureException(
      exception,
      {
        originalException: exception,
        syntheticException,
        ...hint,
        event_id: eventId,
      },
      this,
    );

    return eventId;
  }

  /**
   * Capture a message for this scope.
   *
   * @returns {string} The id of the captured message.
   */
   captureMessage(message, level, hint) {
    const eventId = hint?.event_id || (0,_utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_3__/* .uuid4 */ .eJ)();

    if (!this._client) {
      _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .vF.warn('No client configured on scope - will not capture message!');
      return eventId;
    }

    const syntheticException = new Error(message);

    this._client.captureMessage(
      message,
      level,
      {
        originalException: message,
        syntheticException,
        ...hint,
        event_id: eventId,
      },
      this,
    );

    return eventId;
  }

  /**
   * Capture a Sentry event for this scope.
   *
   * @returns {string} The id of the captured event.
   */
   captureEvent(event, hint) {
    const eventId = hint?.event_id || (0,_utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_3__/* .uuid4 */ .eJ)();

    if (!this._client) {
      _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .vF.warn('No client configured on scope - will not capture event!');
      return eventId;
    }

    this._client.captureEvent(event, { ...hint, event_id: eventId }, this);

    return eventId;
  }

  /**
   * This will be called on every set call.
   */
   _notifyScopeListeners() {
    // We need this check for this._notifyingListeners to be able to work on scope during updates
    // If this check is not here we'll produce endless recursion when something is done with the scope
    // during the callback.
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      this._scopeListeners.forEach(callback => {
        callback(this);
      });
      this._notifyingListeners = false;
    }
  }
}


//# sourceMappingURL=scope.js.map


/***/ }),

/***/ 74611:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E1: () => (/* binding */ SEMANTIC_ATTRIBUTE_PROFILE_ID),
/* harmony export */   JD: () => (/* binding */ SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN),
/* harmony export */   Le: () => (/* binding */ SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME),
/* harmony export */   Sn: () => (/* binding */ SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT),
/* harmony export */   Ts: () => (/* binding */ SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD),
/* harmony export */   c9: () => (/* binding */ SEMANTIC_ATTRIBUTE_URL_FULL),
/* harmony export */   fs: () => (/* binding */ SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON),
/* harmony export */   i_: () => (/* binding */ SEMANTIC_ATTRIBUTE_SENTRY_SOURCE),
/* harmony export */   jG: () => (/* binding */ SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME),
/* harmony export */   sy: () => (/* binding */ SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE),
/* harmony export */   uT: () => (/* binding */ SEMANTIC_ATTRIBUTE_SENTRY_OP),
/* harmony export */   xc: () => (/* binding */ SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE)
/* harmony export */ });
/* unused harmony exports SEMANTIC_ATTRIBUTE_CACHE_HIT, SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE, SEMANTIC_ATTRIBUTE_CACHE_KEY */
/**
 * Use this attribute to represent the source of a span.
 * Should be one of: custom, url, route, view, component, task, unknown
 *
 */
const SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = 'sentry.source';

/**
 * Attributes that holds the sample rate that was locally applied to a span.
 * If this attribute is not defined, it means that the span inherited a sampling decision.
 *
 * NOTE: Is only defined on root spans.
 */
const SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = 'sentry.sample_rate';

/**
 * Use this attribute to represent the operation of a span.
 */
const SEMANTIC_ATTRIBUTE_SENTRY_OP = 'sentry.op';

/**
 * Use this attribute to represent the origin of a span.
 */
const SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = 'sentry.origin';

/** The reason why an idle span finished. */
const SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON = 'sentry.idle_span_finish_reason';

/** The unit of a measurement, which may be stored as a TimedEvent. */
const SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT = 'sentry.measurement_unit';

/** The value of a measurement, which may be stored as a TimedEvent. */
const SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE = 'sentry.measurement_value';

/**
 * A custom span name set by users guaranteed to be taken over any automatically
 * inferred name. This attribute is removed before the span is sent.
 *
 * @internal only meant for internal SDK usage
 * @hidden
 */
const SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = 'sentry.custom_span_name';

/**
 * The id of the profile that this span occurred in.
 */
const SEMANTIC_ATTRIBUTE_PROFILE_ID = 'sentry.profile_id';

const SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME = 'sentry.exclusive_time';

const SEMANTIC_ATTRIBUTE_CACHE_HIT = 'cache.hit';

const SEMANTIC_ATTRIBUTE_CACHE_KEY = 'cache.key';

const SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE = 'cache.item_size';

/** TODO: Remove these once we update to latest semantic conventions */
const SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD = 'http.request.method';
const SEMANTIC_ATTRIBUTE_URL_FULL = 'url.full';


//# sourceMappingURL=semanticAttributes.js.map


/***/ }),

/***/ 59328:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vu: () => (/* binding */ closeSession),
/* harmony export */   fj: () => (/* binding */ makeSession),
/* harmony export */   qO: () => (/* binding */ updateSession)
/* harmony export */ });
/* harmony import */ var _utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40873);
/* harmony import */ var _utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90519);
/* harmony import */ var _utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44910);







/**
 * Creates a new `Session` object by setting certain default parameters. If optional @param context
 * is passed, the passed properties are applied to the session object.
 *
 * @param context (optional) additional properties to be applied to the returned session object
 *
 * @returns a new `Session` object
 */
function makeSession(context) {
  // Both timestamp and started are in seconds since the UNIX epoch.
  const startingTime = (0,_utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_1__/* .timestampInSeconds */ .zf)();

  const session = {
    sid: (0,_utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_2__/* .uuid4 */ .eJ)(),
    init: true,
    timestamp: startingTime,
    started: startingTime,
    duration: 0,
    status: 'ok',
    errors: 0,
    ignoreDuration: false,
    toJSON: () => sessionToJSON(session),
  };

  if (context) {
    updateSession(session, context);
  }

  return session;
}

/**
 * Updates a session object with the properties passed in the context.
 *
 * Note that this function mutates the passed object and returns void.
 * (Had to do this instead of returning a new and updated session because closing and sending a session
 * makes an update to the session after it was passed to the sending logic.
 * @see Client.captureSession )
 *
 * @param session the `Session` to update
 * @param context the `SessionContext` holding the properties that should be updated in @param session
 */
// eslint-disable-next-line complexity
function updateSession(session, context = {}) {
  if (context.user) {
    if (!session.ipAddress && context.user.ip_address) {
      session.ipAddress = context.user.ip_address;
    }

    if (!session.did && !context.did) {
      session.did = context.user.id || context.user.email || context.user.username;
    }
  }

  session.timestamp = context.timestamp || (0,_utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_1__/* .timestampInSeconds */ .zf)();

  if (context.abnormal_mechanism) {
    session.abnormal_mechanism = context.abnormal_mechanism;
  }

  if (context.ignoreDuration) {
    session.ignoreDuration = context.ignoreDuration;
  }
  if (context.sid) {
    // Good enough uuid validation. — Kamil
    session.sid = context.sid.length === 32 ? context.sid : (0,_utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_2__/* .uuid4 */ .eJ)();
  }
  if (context.init !== undefined) {
    session.init = context.init;
  }
  if (!session.did && context.did) {
    session.did = `${context.did}`;
  }
  if (typeof context.started === 'number') {
    session.started = context.started;
  }
  if (session.ignoreDuration) {
    session.duration = undefined;
  } else if (typeof context.duration === 'number') {
    session.duration = context.duration;
  } else {
    const duration = session.timestamp - session.started;
    session.duration = duration >= 0 ? duration : 0;
  }
  if (context.release) {
    session.release = context.release;
  }
  if (context.environment) {
    session.environment = context.environment;
  }
  if (!session.ipAddress && context.ipAddress) {
    session.ipAddress = context.ipAddress;
  }
  if (!session.userAgent && context.userAgent) {
    session.userAgent = context.userAgent;
  }
  if (typeof context.errors === 'number') {
    session.errors = context.errors;
  }
  if (context.status) {
    session.status = context.status;
  }
}

/**
 * Closes a session by setting its status and updating the session object with it.
 * Internally calls `updateSession` to update the passed session object.
 *
 * Note that this function mutates the passed session (@see updateSession for explanation).
 *
 * @param session the `Session` object to be closed
 * @param status the `SessionStatus` with which the session was closed. If you don't pass a status,
 *               this function will keep the previously set status, unless it was `'ok'` in which case
 *               it is changed to `'exited'`.
 */
function closeSession(session, status) {
  let context = {};
  if (status) {
    context = { status };
  } else if (session.status === 'ok') {
    context = { status: 'exited' };
  }

  updateSession(session, context);
}

/**
 * Serializes a passed session object to a JSON object with a slightly different structure.
 * This is necessary because the Sentry backend requires a slightly different schema of a session
 * than the one the JS SDKs use internally.
 *
 * @param session the session to be converted
 *
 * @returns a JSON object of the passed session
 */
function sessionToJSON(session) {
  return (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__/* .dropUndefinedKeys */ .Ce)({
    sid: `${session.sid}`,
    init: session.init,
    // Make sure that sec is converted to ms for date constructor
    started: new Date(session.started * 1000).toISOString(),
    timestamp: new Date(session.timestamp * 1000).toISOString(),
    status: session.status,
    errors: session.errors,
    did: typeof session.did === 'number' || typeof session.did === 'string' ? `${session.did}` : undefined,
    duration: session.duration,
    abnormal_mechanism: session.abnormal_mechanism,
    attrs: {
      release: session.release,
      environment: session.environment,
      ip_address: session.ipAddress,
      user_agent: session.userAgent,
    },
  });
}


//# sourceMappingURL=session.js.map


/***/ }),

/***/ 31158:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HW: () => (/* binding */ spanToBaggageHeader),
/* harmony export */   LZ: () => (/* binding */ freezeDscOnSpan),
/* harmony export */   ao: () => (/* binding */ getDynamicSamplingContextFromScope),
/* harmony export */   k1: () => (/* binding */ getDynamicSamplingContextFromSpan)
/* harmony export */ });
/* unused harmony export getDynamicSamplingContextFromClient */
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7313);
/* harmony import */ var _currentScopes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57968);
/* harmony import */ var _semanticAttributes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74611);
/* harmony import */ var _utils_hoist_baggage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8922);
/* harmony import */ var _utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40873);
/* harmony import */ var _utils_hasSpansEnabled_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54704);
/* harmony import */ var _utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5915);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88728);









/**
 * If you change this value, also update the terser plugin config to
 * avoid minification of the object property!
 */
const FROZEN_DSC_FIELD = '_frozenDsc';

/**
 * Freeze the given DSC on the given span.
 */
function freezeDscOnSpan(span, dsc) {
  const spanWithMaybeDsc = span ;
  (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_4__/* .addNonEnumerableProperty */ .my)(spanWithMaybeDsc, FROZEN_DSC_FIELD, dsc);
}

/**
 * Creates a dynamic sampling context from a client.
 *
 * Dispatches the `createDsc` lifecycle hook as a side effect.
 */
function getDynamicSamplingContextFromClient(trace_id, client) {
  const options = client.getOptions();

  const { publicKey: public_key } = client.getDsn() || {};

  const dsc = (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_4__/* .dropUndefinedKeys */ .Ce)({
    environment: options.environment || _constants_js__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_ENVIRONMENT */ .U,
    release: options.release,
    public_key,
    trace_id,
  }) ;

  client.emit('createDsc', dsc);

  return dsc;
}

/**
 * Get the dynamic sampling context for the currently active scopes.
 */
function getDynamicSamplingContextFromScope(client, scope) {
  const propagationContext = scope.getPropagationContext();
  return propagationContext.dsc || getDynamicSamplingContextFromClient(propagationContext.traceId, client);
}

/**
 * Creates a dynamic sampling context from a span (and client and scope)
 *
 * @param span the span from which a few values like the root span name and sample rate are extracted.
 *
 * @returns a dynamic sampling context
 */
function getDynamicSamplingContextFromSpan(span) {
  const client = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_1__/* .getClient */ .KU)();
  if (!client) {
    return {};
  }

  const rootSpan = (0,_utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .getRootSpan */ .zU)(span);
  const rootSpanJson = (0,_utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .spanToJSON */ .et)(rootSpan);
  const rootSpanAttributes = rootSpanJson.data;
  const traceState = rootSpan.spanContext().traceState;

  // The span sample rate that was locally applied to the root span should also always be applied to the DSC, even if the DSC is frozen.
  // This is so that the downstream traces/services can use parentSampleRate in their `tracesSampler` to make consistent sampling decisions across the entire trace.
  const rootSpanSampleRate =
    traceState?.get('sentry.sample_rate') ?? rootSpanAttributes[_semanticAttributes_js__WEBPACK_IMPORTED_MODULE_2__/* .SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE */ .sy];
  function applyLocalSampleRateToDsc(dsc) {
    if (typeof rootSpanSampleRate === 'number' || typeof rootSpanSampleRate === 'string') {
      dsc.sample_rate = `${rootSpanSampleRate}`;
    }
    return dsc;
  }

  // For core implementation, we freeze the DSC onto the span as a non-enumerable property
  const frozenDsc = (rootSpan )[FROZEN_DSC_FIELD];
  if (frozenDsc) {
    return applyLocalSampleRateToDsc(frozenDsc);
  }

  // For OpenTelemetry, we freeze the DSC on the trace state
  const traceStateDsc = traceState?.get('sentry.dsc');

  // If the span has a DSC, we want it to take precedence
  const dscOnTraceState = traceStateDsc && (0,_utils_hoist_baggage_js__WEBPACK_IMPORTED_MODULE_3__/* .baggageHeaderToDynamicSamplingContext */ .yD)(traceStateDsc);

  if (dscOnTraceState) {
    return applyLocalSampleRateToDsc(dscOnTraceState);
  }

  // Else, we generate it from the span
  const dsc = getDynamicSamplingContextFromClient(span.spanContext().traceId, client);

  // We don't want to have a transaction name in the DSC if the source is "url" because URLs might contain PII
  const source = rootSpanAttributes[_semanticAttributes_js__WEBPACK_IMPORTED_MODULE_2__/* .SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */ .i_];

  // after JSON conversion, txn.name becomes jsonSpan.description
  const name = rootSpanJson.description;
  if (source !== 'url' && name) {
    dsc.transaction = name;
  }

  // How can we even land here with hasSpansEnabled() returning false?
  // Otel creates a Non-recording span in Tracing Without Performance mode when handling incoming requests
  // So we end up with an active span that is not sampled (neither positively nor negatively)
  if ((0,_utils_hasSpansEnabled_js__WEBPACK_IMPORTED_MODULE_5__/* .hasSpansEnabled */ .f)()) {
    dsc.sampled = String((0,_utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .spanIsSampled */ .pK)(rootSpan));
    dsc.sample_rand =
      // In OTEL we store the sample rand on the trace state because we cannot access scopes for NonRecordingSpans
      // The Sentry OTEL SpanSampler takes care of writing the sample rand on the root span
      traceState?.get('sentry.sample_rand') ??
      // On all other platforms we can actually get the scopes from a root span (we use this as a fallback)
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__/* .getCapturedScopesOnSpan */ .L)(rootSpan).scope?.getPropagationContext().sampleRand.toString();
  }

  applyLocalSampleRateToDsc(dsc);

  client.emit('createDsc', dsc, rootSpan);

  return dsc;
}

/**
 * Convert a Span to a baggage header.
 */
function spanToBaggageHeader(span) {
  const dsc = getDynamicSamplingContextFromSpan(span);
  return (0,_utils_hoist_baggage_js__WEBPACK_IMPORTED_MODULE_3__/* .dynamicSamplingContextToSentryBaggageHeader */ .De)(dsc);
}


//# sourceMappingURL=dynamicSamplingContext.js.map


/***/ }),

/***/ 5109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ timedEventsToMeasurements),
/* harmony export */   X: () => (/* binding */ setMeasurement)
/* harmony export */ });
/* harmony import */ var _debug_build_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26674);
/* harmony import */ var _semanticAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74611);
/* harmony import */ var _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5602);
/* harmony import */ var _utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5915);





/**
 * Adds a measurement to the active transaction on the current global scope. You can optionally pass in a different span
 * as the 4th parameter.
 */
function setMeasurement(name, value, unit, activeSpan = (0,_utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getActiveSpan */ .Bk)()) {
  const rootSpan = activeSpan && (0,_utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getRootSpan */ .zU)(activeSpan);

  if (rootSpan) {
    _debug_build_js__WEBPACK_IMPORTED_MODULE_0__/* .DEBUG_BUILD */ .T && _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .vF.log(`[Measurement] Setting measurement on root span: ${name} = ${value} ${unit}`);
    rootSpan.addEvent(name, {
      [_semanticAttributes_js__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE */ .xc]: value,
      [_semanticAttributes_js__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT */ .Sn]: unit ,
    });
  }
}

/**
 * Convert timed events to measurements.
 */
function timedEventsToMeasurements(events) {
  if (!events || events.length === 0) {
    return undefined;
  }

  const measurements = {};
  events.forEach(event => {
    const attributes = event.attributes || {};
    const unit = attributes[_semanticAttributes_js__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT */ .Sn] ;
    const value = attributes[_semanticAttributes_js__WEBPACK_IMPORTED_MODULE_1__/* .SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE */ .xc] ;

    if (typeof unit === 'string' && typeof value === 'number') {
      measurements[event.name] = { value, unit };
    }
  });

  return measurements;
}


//# sourceMappingURL=measurement.js.map


/***/ }),

/***/ 33868:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ SentryNonRecordingSpan)
/* harmony export */ });
/* harmony import */ var _utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30243);
/* harmony import */ var _utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5915);



/**
 * A Sentry Span that is non-recording, meaning it will not be sent to Sentry.
 */
class SentryNonRecordingSpan  {

   constructor(spanContext = {}) {
    this._traceId = spanContext.traceId || (0,_utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_0__/* .generateTraceId */ .e)();
    this._spanId = spanContext.spanId || (0,_utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_0__/* .generateSpanId */ .Z)();
  }

  /** @inheritdoc */
   spanContext() {
    return {
      spanId: this._spanId,
      traceId: this._traceId,
      traceFlags: _utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .TRACE_FLAG_NONE */ .CC,
    };
  }

  /** @inheritdoc */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
   end(_timestamp) {}

  /** @inheritdoc */
   setAttribute(_key, _value) {
    return this;
  }

  /** @inheritdoc */
   setAttributes(_values) {
    return this;
  }

  /** @inheritdoc */
   setStatus(_status) {
    return this;
  }

  /** @inheritdoc */
   updateName(_name) {
    return this;
  }

  /** @inheritdoc */
   isRecording() {
    return false;
  }

  /** @inheritdoc */
   addEvent(
    _name,
    _attributesOrStartTime,
    _startTime,
  ) {
    return this;
  }

  /** @inheritDoc */
   addLink(_link) {
    return this;
  }

  /** @inheritDoc */
   addLinks(_links) {
    return this;
  }

  /**
   * This should generally not be used,
   * but we need it for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */
   recordException(_exception, _time) {
    // noop
  }
}


//# sourceMappingURL=sentryNonRecordingSpan.js.map


/***/ }),

/***/ 91135:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AJ: () => (/* binding */ getSpanStatusFromHttpCode),
/* harmony export */   F3: () => (/* binding */ SPAN_STATUS_OK),
/* harmony export */   N8: () => (/* binding */ setHttpStatus),
/* harmony export */   TJ: () => (/* binding */ SPAN_STATUS_ERROR),
/* harmony export */   a3: () => (/* binding */ SPAN_STATUS_UNSET)
/* harmony export */ });
const SPAN_STATUS_UNSET = 0;
const SPAN_STATUS_OK = 1;
const SPAN_STATUS_ERROR = 2;

/**
 * Converts a HTTP status code into a sentry status with a message.
 *
 * @param httpStatus The HTTP response status code.
 * @returns The span status or unknown_error.
 */
// https://develop.sentry.dev/sdk/event-payloads/span/
function getSpanStatusFromHttpCode(httpStatus) {
  if (httpStatus < 400 && httpStatus >= 100) {
    return { code: SPAN_STATUS_OK };
  }

  if (httpStatus >= 400 && httpStatus < 500) {
    switch (httpStatus) {
      case 401:
        return { code: SPAN_STATUS_ERROR, message: 'unauthenticated' };
      case 403:
        return { code: SPAN_STATUS_ERROR, message: 'permission_denied' };
      case 404:
        return { code: SPAN_STATUS_ERROR, message: 'not_found' };
      case 409:
        return { code: SPAN_STATUS_ERROR, message: 'already_exists' };
      case 413:
        return { code: SPAN_STATUS_ERROR, message: 'failed_precondition' };
      case 429:
        return { code: SPAN_STATUS_ERROR, message: 'resource_exhausted' };
      case 499:
        return { code: SPAN_STATUS_ERROR, message: 'cancelled' };
      default:
        return { code: SPAN_STATUS_ERROR, message: 'invalid_argument' };
    }
  }

  if (httpStatus >= 500 && httpStatus < 600) {
    switch (httpStatus) {
      case 501:
        return { code: SPAN_STATUS_ERROR, message: 'unimplemented' };
      case 503:
        return { code: SPAN_STATUS_ERROR, message: 'unavailable' };
      case 504:
        return { code: SPAN_STATUS_ERROR, message: 'deadline_exceeded' };
      default:
        return { code: SPAN_STATUS_ERROR, message: 'internal_error' };
    }
  }

  return { code: SPAN_STATUS_ERROR, message: 'unknown_error' };
}

/**
 * Sets the Http status attributes on the current span based on the http code.
 * Additionally, the span's status is updated, depending on the http code.
 */
function setHttpStatus(span, httpStatus) {
  span.setAttribute('http.response.status_code', httpStatus);

  const spanStatus = getSpanStatusFromHttpCode(httpStatus);
  if (spanStatus.message !== 'unknown_error') {
    span.setStatus(spanStatus);
  }
}


//# sourceMappingURL=spanstatus.js.map


/***/ }),

/***/ 90496:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V4: () => (/* binding */ continueTrace),
  Uk: () => (/* binding */ startInactiveSpan),
  Y7: () => (/* binding */ startNewTrace),
  Lk: () => (/* binding */ startSpan),
  nV: () => (/* binding */ startSpanManual),
  M1: () => (/* binding */ suppressTracing),
  hb: () => (/* binding */ withActiveSpan)
});

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/carrier.js
var esm_carrier = __webpack_require__(95200);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/currentScopes.js
var currentScopes = __webpack_require__(57968);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/asyncContext/index.js + 2 modules
var asyncContext = __webpack_require__(92328);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/debug-build.js
var debug_build = __webpack_require__(26674);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/semanticAttributes.js
var semanticAttributes = __webpack_require__(74611);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/logger.js
var logger = __webpack_require__(5602);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js
var propagationContext = __webpack_require__(30243);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/tracing.js
var tracing = __webpack_require__(8190);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/is.js
var is = __webpack_require__(30690);
;// ./node_modules/@sentry/core/build/esm/utils/handleCallbackErrors.js


/**
 * Wrap a callback function with error handling.
 * If an error is thrown, it will be passed to the `onError` callback and re-thrown.
 *
 * If the return value of the function is a promise, it will be handled with `maybeHandlePromiseRejection`.
 *
 * If an `onFinally` callback is provided, this will be called when the callback has finished
 * - so if it returns a promise, once the promise resolved/rejected,
 * else once the callback has finished executing.
 * The `onFinally` callback will _always_ be called, no matter if an error was thrown or not.
 */
function handleCallbackErrors

(
  fn,
  onError,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onFinally = () => {},
) {
  let maybePromiseResult;
  try {
    maybePromiseResult = fn();
  } catch (e) {
    onError(e);
    onFinally();
    throw e;
  }

  return maybeHandlePromiseRejection(maybePromiseResult, onError, onFinally);
}

/**
 * Maybe handle a promise rejection.
 * This expects to be given a value that _may_ be a promise, or any other value.
 * If it is a promise, and it rejects, it will call the `onError` callback.
 * Other than this, it will generally return the given value as-is.
 */
function maybeHandlePromiseRejection(
  value,
  onError,
  onFinally,
) {
  if ((0,is/* isThenable */.Qg)(value)) {
    // @ts-expect-error - the isThenable check returns the "wrong" type here
    return value.then(
      res => {
        onFinally();
        return res;
      },
      e => {
        onError(e);
        onFinally();
        throw e;
      },
    );
  }

  onFinally();
  return value;
}


//# sourceMappingURL=handleCallbackErrors.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js
var hasSpansEnabled = __webpack_require__(54704);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils/parseSampleRate.js
var parseSampleRate = __webpack_require__(91773);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils/spanOnScope.js
var spanOnScope = __webpack_require__(70333);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils/spanUtils.js
var spanUtils = __webpack_require__(5915);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js
var dynamicSamplingContext = __webpack_require__(31158);
;// ./node_modules/@sentry/core/build/esm/tracing/logSpans.js




/**
 * Print a log message for a started span.
 */
function logSpanStart(span) {
  if (!debug_build/* DEBUG_BUILD */.T) return;

  const { description = '< unknown name >', op = '< unknown op >', parent_span_id: parentSpanId } = (0,spanUtils/* spanToJSON */.et)(span);
  const { spanId } = span.spanContext();

  const sampled = (0,spanUtils/* spanIsSampled */.pK)(span);
  const rootSpan = (0,spanUtils/* getRootSpan */.zU)(span);
  const isRootSpan = rootSpan === span;

  const header = `[Tracing] Starting ${sampled ? 'sampled' : 'unsampled'} ${isRootSpan ? 'root ' : ''}span`;

  const infoParts = [`op: ${op}`, `name: ${description}`, `ID: ${spanId}`];

  if (parentSpanId) {
    infoParts.push(`parent ID: ${parentSpanId}`);
  }

  if (!isRootSpan) {
    const { op, description } = (0,spanUtils/* spanToJSON */.et)(rootSpan);
    infoParts.push(`root ID: ${rootSpan.spanContext().spanId}`);
    if (op) {
      infoParts.push(`root op: ${op}`);
    }
    if (description) {
      infoParts.push(`root description: ${description}`);
    }
  }

  logger/* logger */.vF.log(`${header}
  ${infoParts.join('\n  ')}`);
}

/**
 * Print a log message for an ended span.
 */
function logSpanEnd(span) {
  if (!debug_build/* DEBUG_BUILD */.T) return;

  const { description = '< unknown name >', op = '< unknown op >' } = (0,spanUtils/* spanToJSON */.et)(span);
  const { spanId } = span.spanContext();
  const rootSpan = (0,spanUtils/* getRootSpan */.zU)(span);
  const isRootSpan = rootSpan === span;

  const msg = `[Tracing] Finishing "${op}" ${isRootSpan ? 'root ' : ''}span "${description}" with ID ${spanId}`;
  logger/* logger */.vF.log(msg);
}


//# sourceMappingURL=logSpans.js.map

;// ./node_modules/@sentry/core/build/esm/tracing/sampling.js





/**
 * Makes a sampling decision for the given options.
 *
 * Called every time a root span is created. Only root spans which emerge with a `sampled` value of `true` will be
 * sent to Sentry.
 */
function sampleSpan(
  options,
  samplingContext,
  sampleRand,
) {
  // nothing to do if span recording is not enabled
  if (!(0,hasSpansEnabled/* hasSpansEnabled */.f)(options)) {
    return [false];
  }

  let localSampleRateWasApplied = undefined;

  // we would have bailed already if neither `tracesSampler` nor `tracesSampleRate` were defined, so one of these should
  // work; prefer the hook if so
  let sampleRate;
  if (typeof options.tracesSampler === 'function') {
    sampleRate = options.tracesSampler({
      ...samplingContext,
      inheritOrSampleWith: fallbackSampleRate => {
        // If we have an incoming parent sample rate, we'll just use that one.
        // The sampling decision will be inherited because of the sample_rand that was generated when the trace reached the incoming boundaries of the SDK.
        if (typeof samplingContext.parentSampleRate === 'number') {
          return samplingContext.parentSampleRate;
        }

        // Fallback if parent sample rate is not on the incoming trace (e.g. if there is no baggage)
        // This is to provide backwards compatibility if there are incoming traces from older SDKs that don't send a parent sample rate or a sample rand. In these cases we just want to force either a sampling decision on the downstream traces via the sample rate.
        if (typeof samplingContext.parentSampled === 'boolean') {
          return Number(samplingContext.parentSampled);
        }

        return fallbackSampleRate;
      },
    });
    localSampleRateWasApplied = true;
  } else if (samplingContext.parentSampled !== undefined) {
    sampleRate = samplingContext.parentSampled;
  } else if (typeof options.tracesSampleRate !== 'undefined') {
    sampleRate = options.tracesSampleRate;
    localSampleRateWasApplied = true;
  }

  // Since this is coming from the user (or from a function provided by the user), who knows what we might get.
  // (The only valid values are booleans or numbers between 0 and 1.)
  const parsedSampleRate = (0,parseSampleRate/* parseSampleRate */.i)(sampleRate);

  if (parsedSampleRate === undefined) {
    debug_build/* DEBUG_BUILD */.T &&
      logger/* logger */.vF.warn(
        `[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
          sampleRate,
        )} of type ${JSON.stringify(typeof sampleRate)}.`,
      );
    return [false];
  }

  // if the function returned 0 (or false), or if `tracesSampleRate` is 0, it's a sign the transaction should be dropped
  if (!parsedSampleRate) {
    debug_build/* DEBUG_BUILD */.T &&
      logger/* logger */.vF.log(
        `[Tracing] Discarding transaction because ${
          typeof options.tracesSampler === 'function'
            ? 'tracesSampler returned 0 or false'
            : 'a negative sampling decision was inherited or tracesSampleRate is set to 0'
        }`,
      );
    return [false, parsedSampleRate, localSampleRateWasApplied];
  }

  // We always compare the sample rand for the current execution context against the chosen sample rate.
  // Read more: https://develop.sentry.dev/sdk/telemetry/traces/#propagated-random-value
  const shouldSample = sampleRand < parsedSampleRate;

  // if we're not going to keep it, we're done
  if (!shouldSample) {
    debug_build/* DEBUG_BUILD */.T &&
      logger/* logger */.vF.log(
        `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
          sampleRate,
        )})`,
      );
  }

  return [shouldSample, parsedSampleRate, localSampleRateWasApplied];
}


//# sourceMappingURL=sampling.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/tracing/sentryNonRecordingSpan.js
var sentryNonRecordingSpan = __webpack_require__(33868);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/envelope.js
var envelope = __webpack_require__(75330);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/object.js
var object = __webpack_require__(40873);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/time.js
var utils_hoist_time = __webpack_require__(90519);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/tracing/measurement.js
var measurement = __webpack_require__(5109);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/tracing/utils.js
var utils = __webpack_require__(88728);
;// ./node_modules/@sentry/core/build/esm/tracing/sentrySpan.js














const MAX_SPAN_COUNT = 1000;

/**
 * Span contains all data about a span
 */
class SentrySpan  {

  /** Epoch timestamp in seconds when the span started. */

  /** Epoch timestamp in seconds when the span ended. */

  /** Internal keeper of the status */

  /** The timed events added to this span. */

  /** if true, treat span as a standalone span (not part of a transaction) */

  /**
   * You should never call the constructor manually, always use `Sentry.startSpan()`
   * or other span methods.
   * @internal
   * @hideconstructor
   * @hidden
   */
   constructor(spanContext = {}) {
    this._traceId = spanContext.traceId || (0,propagationContext/* generateTraceId */.e)();
    this._spanId = spanContext.spanId || (0,propagationContext/* generateSpanId */.Z)();
    this._startTime = spanContext.startTimestamp || (0,utils_hoist_time/* timestampInSeconds */.zf)();
    this._links = spanContext.links;

    this._attributes = {};
    this.setAttributes({
      [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'manual',
      [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_OP */.uT]: spanContext.op,
      ...spanContext.attributes,
    });

    this._name = spanContext.name;

    if (spanContext.parentSpanId) {
      this._parentSpanId = spanContext.parentSpanId;
    }
    // We want to include booleans as well here
    if ('sampled' in spanContext) {
      this._sampled = spanContext.sampled;
    }
    if (spanContext.endTimestamp) {
      this._endTime = spanContext.endTimestamp;
    }

    this._events = [];

    this._isStandaloneSpan = spanContext.isStandalone;

    // If the span is already ended, ensure we finalize the span immediately
    if (this._endTime) {
      this._onSpanEnded();
    }
  }

  /** @inheritDoc */
   addLink(link) {
    if (this._links) {
      this._links.push(link);
    } else {
      this._links = [link];
    }
    return this;
  }

  /** @inheritDoc */
   addLinks(links) {
    if (this._links) {
      this._links.push(...links);
    } else {
      this._links = links;
    }
    return this;
  }

  /**
   * This should generally not be used,
   * but it is needed for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */
   recordException(_exception, _time) {
    // noop
  }

  /** @inheritdoc */
   spanContext() {
    const { _spanId: spanId, _traceId: traceId, _sampled: sampled } = this;
    return {
      spanId,
      traceId,
      traceFlags: sampled ? spanUtils/* TRACE_FLAG_SAMPLED */.aO : spanUtils/* TRACE_FLAG_NONE */.CC,
    };
  }

  /** @inheritdoc */
   setAttribute(key, value) {
    if (value === undefined) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this._attributes[key];
    } else {
      this._attributes[key] = value;
    }

    return this;
  }

  /** @inheritdoc */
   setAttributes(attributes) {
    Object.keys(attributes).forEach(key => this.setAttribute(key, attributes[key]));
    return this;
  }

  /**
   * This should generally not be used,
   * but we need it for browser tracing where we want to adjust the start time afterwards.
   * USE THIS WITH CAUTION!
   *
   * @hidden
   * @internal
   */
   updateStartTime(timeInput) {
    this._startTime = (0,spanUtils/* spanTimeInputToSeconds */.cI)(timeInput);
  }

  /**
   * @inheritDoc
   */
   setStatus(value) {
    this._status = value;
    return this;
  }

  /**
   * @inheritDoc
   */
   updateName(name) {
    this._name = name;
    this.setAttribute(semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */.i_, 'custom');
    return this;
  }

  /** @inheritdoc */
   end(endTimestamp) {
    // If already ended, skip
    if (this._endTime) {
      return;
    }

    this._endTime = (0,spanUtils/* spanTimeInputToSeconds */.cI)(endTimestamp);
    logSpanEnd(this);

    this._onSpanEnded();
  }

  /**
   * Get JSON representation of this span.
   *
   * @hidden
   * @internal This method is purely for internal purposes and should not be used outside
   * of SDK code. If you need to get a JSON representation of a span,
   * use `spanToJSON(span)` instead.
   */
   getSpanJSON() {
    return (0,object/* dropUndefinedKeys */.Ce)({
      data: this._attributes,
      description: this._name,
      op: this._attributes[semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_OP */.uT],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: (0,spanUtils/* getStatusMessage */.yW)(this._status),
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD] ,
      profile_id: this._attributes[semanticAttributes/* SEMANTIC_ATTRIBUTE_PROFILE_ID */.E1] ,
      exclusive_time: this._attributes[semanticAttributes/* SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME */.jG] ,
      measurements: (0,measurement/* timedEventsToMeasurements */.$)(this._events),
      is_segment: (this._isStandaloneSpan && (0,spanUtils/* getRootSpan */.zU)(this) === this) || undefined,
      segment_id: this._isStandaloneSpan ? (0,spanUtils/* getRootSpan */.zU)(this).spanContext().spanId : undefined,
      links: (0,spanUtils/* convertSpanLinksForEnvelope */.uU)(this._links),
    });
  }

  /** @inheritdoc */
   isRecording() {
    return !this._endTime && !!this._sampled;
  }

  /**
   * @inheritdoc
   */
   addEvent(
    name,
    attributesOrStartTime,
    startTime,
  ) {
    debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.log('[Tracing] Adding an event to span:', name);

    const time = isSpanTimeInput(attributesOrStartTime) ? attributesOrStartTime : startTime || (0,utils_hoist_time/* timestampInSeconds */.zf)();
    const attributes = isSpanTimeInput(attributesOrStartTime) ? {} : attributesOrStartTime || {};

    const event = {
      name,
      time: (0,spanUtils/* spanTimeInputToSeconds */.cI)(time),
      attributes,
    };

    this._events.push(event);

    return this;
  }

  /**
   * This method should generally not be used,
   * but for now we need a way to publicly check if the `_isStandaloneSpan` flag is set.
   * USE THIS WITH CAUTION!
   * @internal
   * @hidden
   * @experimental
   */
   isStandaloneSpan() {
    return !!this._isStandaloneSpan;
  }

  /** Emit `spanEnd` when the span is ended. */
   _onSpanEnded() {
    const client = (0,currentScopes/* getClient */.KU)();
    if (client) {
      client.emit('spanEnd', this);
    }

    // A segment span is basically the root span of a local span tree.
    // So for now, this is either what we previously refer to as the root span,
    // or a standalone span.
    const isSegmentSpan = this._isStandaloneSpan || this === (0,spanUtils/* getRootSpan */.zU)(this);

    if (!isSegmentSpan) {
      return;
    }

    // if this is a standalone span, we send it immediately
    if (this._isStandaloneSpan) {
      if (this._sampled) {
        sendSpanEnvelope((0,envelope/* createSpanEnvelope */.lu)([this], client));
      } else {
        debug_build/* DEBUG_BUILD */.T &&
          logger/* logger */.vF.log('[Tracing] Discarding standalone span because its trace was not chosen to be sampled.');
        if (client) {
          client.recordDroppedEvent('sample_rate', 'span');
        }
      }
      return;
    }

    const transactionEvent = this._convertSpanToTransaction();
    if (transactionEvent) {
      const scope = (0,utils/* getCapturedScopesOnSpan */.L)(this).scope || (0,currentScopes/* getCurrentScope */.o5)();
      scope.captureEvent(transactionEvent);
    }
  }

  /**
   * Finish the transaction & prepare the event to send to Sentry.
   */
   _convertSpanToTransaction() {
    // We can only convert finished spans
    if (!isFullFinishedSpan((0,spanUtils/* spanToJSON */.et)(this))) {
      return undefined;
    }

    if (!this._name) {
      debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.warn('Transaction has no name, falling back to `<unlabeled transaction>`.');
      this._name = '<unlabeled transaction>';
    }

    const { scope: capturedSpanScope, isolationScope: capturedSpanIsolationScope } = (0,utils/* getCapturedScopesOnSpan */.L)(this);

    if (this._sampled !== true) {
      return undefined;
    }

    // The transaction span itself as well as any potential standalone spans should be filtered out
    const finishedSpans = (0,spanUtils/* getSpanDescendants */.xO)(this).filter(span => span !== this && !isStandaloneSpan(span));

    const spans = finishedSpans.map(span => (0,spanUtils/* spanToJSON */.et)(span)).filter(isFullFinishedSpan);

    const source = this._attributes[semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */.i_] ;

    // remove internal root span attributes we don't need to send.
    /* eslint-disable @typescript-eslint/no-dynamic-delete */
    delete this._attributes[semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME */.Le];
    spans.forEach(span => {
      delete span.data[semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME */.Le];
    });
    // eslint-enabled-next-line @typescript-eslint/no-dynamic-delete

    const transaction = {
      contexts: {
        trace: (0,spanUtils/* spanToTransactionTraceContext */.Ck)(this),
      },
      spans:
        // spans.sort() mutates the array, but `spans` is already a copy so we can safely do this here
        // we do not use spans anymore after this point
        spans.length > MAX_SPAN_COUNT
          ? spans.sort((a, b) => a.start_timestamp - b.start_timestamp).slice(0, MAX_SPAN_COUNT)
          : spans,
      start_timestamp: this._startTime,
      timestamp: this._endTime,
      transaction: this._name,
      type: 'transaction',
      sdkProcessingMetadata: {
        capturedSpanScope,
        capturedSpanIsolationScope,
        ...(0,object/* dropUndefinedKeys */.Ce)({
          dynamicSamplingContext: (0,dynamicSamplingContext/* getDynamicSamplingContextFromSpan */.k1)(this),
        }),
      },
      ...(source && {
        transaction_info: {
          source,
        },
      }),
    };

    const measurements = (0,measurement/* timedEventsToMeasurements */.$)(this._events);
    const hasMeasurements = measurements && Object.keys(measurements).length;

    if (hasMeasurements) {
      debug_build/* DEBUG_BUILD */.T &&
        logger/* logger */.vF.log(
          '[Measurements] Adding measurements to transaction event',
          JSON.stringify(measurements, undefined, 2),
        );
      transaction.measurements = measurements;
    }

    return transaction;
  }
}

function isSpanTimeInput(value) {
  return (value && typeof value === 'number') || value instanceof Date || Array.isArray(value);
}

// We want to filter out any incomplete SpanJSON objects
function isFullFinishedSpan(input) {
  return !!input.start_timestamp && !!input.timestamp && !!input.span_id && !!input.trace_id;
}

/** `SentrySpan`s can be sent as a standalone span rather than belonging to a transaction */
function isStandaloneSpan(span) {
  return span instanceof SentrySpan && span.isStandaloneSpan();
}

/**
 * Sends a `SpanEnvelope`.
 *
 * Note: If the envelope's spans are dropped, e.g. via `beforeSendSpan`,
 * the envelope will not be sent either.
 */
function sendSpanEnvelope(envelope) {
  const client = (0,currentScopes/* getClient */.KU)();
  if (!client) {
    return;
  }

  const spanItems = envelope[1];
  if (!spanItems || spanItems.length === 0) {
    client.recordDroppedEvent('before_send', 'span');
    return;
  }

  // sendEnvelope should not throw
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  client.sendEnvelope(envelope);
}


//# sourceMappingURL=sentrySpan.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/tracing/spanstatus.js
var spanstatus = __webpack_require__(91135);
;// ./node_modules/@sentry/core/build/esm/tracing/trace.js





















const SUPPRESS_TRACING_KEY = '__SENTRY_SUPPRESS_TRACING__';

/**
 * Wraps a function with a transaction/span and finishes the span after the function is done.
 * The created span is the active span and will be used as parent by other spans created inside the function
 * and can be accessed via `Sentry.getActiveSpan()`, as long as the function is executed while the scope is active.
 *
 * If you want to create a span that is not set as active, use {@link startInactiveSpan}.
 *
 * You'll always get a span passed to the callback,
 * it may just be a non-recording span if the span is not sampled or if tracing is disabled.
 */
function startSpan(options, callback) {
  const acs = getAcs();
  if (acs.startSpan) {
    return acs.startSpan(options, callback);
  }

  const spanArguments = parseSentrySpanArguments(options);
  const { forceTransaction, parentSpan: customParentSpan, scope: customScope } = options;

  // We still need to fork a potentially passed scope, as we set the active span on it
  // and we need to ensure that it is cleaned up properly once the span ends.
  const customForkedScope = customScope?.clone();

  return (0,currentScopes/* withScope */.v4)(customForkedScope, () => {
    // If `options.parentSpan` is defined, we want to wrap the callback in `withActiveSpan`
    const wrapper = getActiveSpanWrapper(customParentSpan);

    return wrapper(() => {
      const scope = (0,currentScopes/* getCurrentScope */.o5)();
      const parentSpan = getParentSpan(scope);

      const shouldSkipSpan = options.onlyIfParent && !parentSpan;
      const activeSpan = shouldSkipSpan
        ? new sentryNonRecordingSpan/* SentryNonRecordingSpan */.w()
        : createChildOrRootSpan({
            parentSpan,
            spanArguments,
            forceTransaction,
            scope,
          });

      (0,spanOnScope/* _setSpanForScope */.r)(scope, activeSpan);

      return handleCallbackErrors(
        () => callback(activeSpan),
        () => {
          // Only update the span status if it hasn't been changed yet, and the span is not yet finished
          const { status } = (0,spanUtils/* spanToJSON */.et)(activeSpan);
          if (activeSpan.isRecording() && (!status || status === 'ok')) {
            activeSpan.setStatus({ code: spanstatus/* SPAN_STATUS_ERROR */.TJ, message: 'internal_error' });
          }
        },
        () => {
          activeSpan.end();
        },
      );
    });
  });
}

/**
 * Similar to `Sentry.startSpan`. Wraps a function with a transaction/span, but does not finish the span
 * after the function is done automatically. Use `span.end()` to end the span.
 *
 * The created span is the active span and will be used as parent by other spans created inside the function
 * and can be accessed via `Sentry.getActiveSpan()`, as long as the function is executed while the scope is active.
 *
 * You'll always get a span passed to the callback,
 * it may just be a non-recording span if the span is not sampled or if tracing is disabled.
 */
function startSpanManual(options, callback) {
  const acs = getAcs();
  if (acs.startSpanManual) {
    return acs.startSpanManual(options, callback);
  }

  const spanArguments = parseSentrySpanArguments(options);
  const { forceTransaction, parentSpan: customParentSpan, scope: customScope } = options;

  const customForkedScope = customScope?.clone();

  return (0,currentScopes/* withScope */.v4)(customForkedScope, () => {
    // If `options.parentSpan` is defined, we want to wrap the callback in `withActiveSpan`
    const wrapper = getActiveSpanWrapper(customParentSpan);

    return wrapper(() => {
      const scope = (0,currentScopes/* getCurrentScope */.o5)();
      const parentSpan = getParentSpan(scope);

      const shouldSkipSpan = options.onlyIfParent && !parentSpan;
      const activeSpan = shouldSkipSpan
        ? new sentryNonRecordingSpan/* SentryNonRecordingSpan */.w()
        : createChildOrRootSpan({
            parentSpan,
            spanArguments,
            forceTransaction,
            scope,
          });

      (0,spanOnScope/* _setSpanForScope */.r)(scope, activeSpan);

      return handleCallbackErrors(
        // We pass the `finish` function to the callback, so the user can finish the span manually
        // this is mainly here for historic purposes because previously, we instructed users to call
        // `finish` instead of `span.end()` to also clean up the scope. Nowadays, calling `span.end()`
        // or `finish` has the same effect and we simply leave it here to avoid breaking user code.
        () => callback(activeSpan, () => activeSpan.end()),
        () => {
          // Only update the span status if it hasn't been changed yet, and the span is not yet finished
          const { status } = (0,spanUtils/* spanToJSON */.et)(activeSpan);
          if (activeSpan.isRecording() && (!status || status === 'ok')) {
            activeSpan.setStatus({ code: spanstatus/* SPAN_STATUS_ERROR */.TJ, message: 'internal_error' });
          }
        },
      );
    });
  });
}

/**
 * Creates a span. This span is not set as active, so will not get automatic instrumentation spans
 * as children or be able to be accessed via `Sentry.getActiveSpan()`.
 *
 * If you want to create a span that is set as active, use {@link startSpan}.
 *
 * This function will always return a span,
 * it may just be a non-recording span if the span is not sampled or if tracing is disabled.
 */
function startInactiveSpan(options) {
  const acs = getAcs();
  if (acs.startInactiveSpan) {
    return acs.startInactiveSpan(options);
  }

  const spanArguments = parseSentrySpanArguments(options);
  const { forceTransaction, parentSpan: customParentSpan } = options;

  // If `options.scope` is defined, we use this as as a wrapper,
  // If `options.parentSpan` is defined, we want to wrap the callback in `withActiveSpan`
  const wrapper = options.scope
    ? (callback) => (0,currentScopes/* withScope */.v4)(options.scope, callback)
    : customParentSpan !== undefined
      ? (callback) => withActiveSpan(customParentSpan, callback)
      : (callback) => callback();

  return wrapper(() => {
    const scope = (0,currentScopes/* getCurrentScope */.o5)();
    const parentSpan = getParentSpan(scope);

    const shouldSkipSpan = options.onlyIfParent && !parentSpan;

    if (shouldSkipSpan) {
      return new sentryNonRecordingSpan/* SentryNonRecordingSpan */.w();
    }

    return createChildOrRootSpan({
      parentSpan,
      spanArguments,
      forceTransaction,
      scope,
    });
  });
}

/**
 * Continue a trace from `sentry-trace` and `baggage` values.
 * These values can be obtained from incoming request headers, or in the browser from `<meta name="sentry-trace">`
 * and `<meta name="baggage">` HTML tags.
 *
 * Spans started with `startSpan`, `startSpanManual` and `startInactiveSpan`, within the callback will automatically
 * be attached to the incoming trace.
 */
const continueTrace = (
  options

,
  callback,
) => {
  const carrier = (0,esm_carrier/* getMainCarrier */.EU)();
  const acs = (0,asyncContext/* getAsyncContextStrategy */.h)(carrier);
  if (acs.continueTrace) {
    return acs.continueTrace(options, callback);
  }

  const { sentryTrace, baggage } = options;

  return (0,currentScopes/* withScope */.v4)(scope => {
    const propagationContext = (0,tracing/* propagationContextFromHeaders */.kM)(sentryTrace, baggage);
    scope.setPropagationContext(propagationContext);
    return callback();
  });
};

/**
 * Forks the current scope and sets the provided span as active span in the context of the provided callback. Can be
 * passed `null` to start an entirely new span tree.
 *
 * @param span Spans started in the context of the provided callback will be children of this span. If `null` is passed,
 * spans started within the callback will not be attached to a parent span.
 * @param callback Execution context in which the provided span will be active. Is passed the newly forked scope.
 * @returns the value returned from the provided callback function.
 */
function withActiveSpan(span, callback) {
  const acs = getAcs();
  if (acs.withActiveSpan) {
    return acs.withActiveSpan(span, callback);
  }

  return (0,currentScopes/* withScope */.v4)(scope => {
    (0,spanOnScope/* _setSpanForScope */.r)(scope, span || undefined);
    return callback(scope);
  });
}

/** Suppress tracing in the given callback, ensuring no spans are generated inside of it. */
function suppressTracing(callback) {
  const acs = getAcs();

  if (acs.suppressTracing) {
    return acs.suppressTracing(callback);
  }

  return (0,currentScopes/* withScope */.v4)(scope => {
    scope.setSDKProcessingMetadata({ [SUPPRESS_TRACING_KEY]: true });
    return callback();
  });
}

/**
 * Starts a new trace for the duration of the provided callback. Spans started within the
 * callback will be part of the new trace instead of a potentially previously started trace.
 *
 * Important: Only use this function if you want to override the default trace lifetime and
 * propagation mechanism of the SDK for the duration and scope of the provided callback.
 * The newly created trace will also be the root of a new distributed trace, for example if
 * you make http requests within the callback.
 * This function might be useful if the operation you want to instrument should not be part
 * of a potentially ongoing trace.
 *
 * Default behavior:
 * - Server-side: A new trace is started for each incoming request.
 * - Browser: A new trace is started for each page our route. Navigating to a new route
 *            or page will automatically create a new trace.
 */
function startNewTrace(callback) {
  return (0,currentScopes/* withScope */.v4)(scope => {
    scope.setPropagationContext({
      traceId: (0,propagationContext/* generateTraceId */.e)(),
      sampleRand: Math.random(),
    });
    debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.info(`Starting a new trace with id ${scope.getPropagationContext().traceId}`);
    return withActiveSpan(null, callback);
  });
}

function createChildOrRootSpan({
  parentSpan,
  spanArguments,
  forceTransaction,
  scope,
}

) {
  if (!(0,hasSpansEnabled/* hasSpansEnabled */.f)()) {
    const span = new sentryNonRecordingSpan/* SentryNonRecordingSpan */.w();

    // If this is a root span, we ensure to freeze a DSC
    // So we can have at least partial data here
    if (forceTransaction || !parentSpan) {
      const dsc = {
        sampled: 'false',
        sample_rate: '0',
        transaction: spanArguments.name,
        ...(0,dynamicSamplingContext/* getDynamicSamplingContextFromSpan */.k1)(span),
      } ;
      (0,dynamicSamplingContext/* freezeDscOnSpan */.LZ)(span, dsc);
    }

    return span;
  }

  const isolationScope = (0,currentScopes/* getIsolationScope */.rm)();

  let span;
  if (parentSpan && !forceTransaction) {
    span = _startChildSpan(parentSpan, scope, spanArguments);
    (0,spanUtils/* addChildSpanToSpan */.Hu)(parentSpan, span);
  } else if (parentSpan) {
    // If we forced a transaction but have a parent span, make sure to continue from the parent span, not the scope
    const dsc = (0,dynamicSamplingContext/* getDynamicSamplingContextFromSpan */.k1)(parentSpan);
    const { traceId, spanId: parentSpanId } = parentSpan.spanContext();
    const parentSampled = (0,spanUtils/* spanIsSampled */.pK)(parentSpan);

    span = _startRootSpan(
      {
        traceId,
        parentSpanId,
        ...spanArguments,
      },
      scope,
      parentSampled,
    );

    (0,dynamicSamplingContext/* freezeDscOnSpan */.LZ)(span, dsc);
  } else {
    const {
      traceId,
      dsc,
      parentSpanId,
      sampled: parentSampled,
    } = {
      ...isolationScope.getPropagationContext(),
      ...scope.getPropagationContext(),
    };

    span = _startRootSpan(
      {
        traceId,
        parentSpanId,
        ...spanArguments,
      },
      scope,
      parentSampled,
    );

    if (dsc) {
      (0,dynamicSamplingContext/* freezeDscOnSpan */.LZ)(span, dsc);
    }
  }

  logSpanStart(span);

  (0,utils/* setCapturedScopesOnSpan */.d)(span, scope, isolationScope);

  return span;
}

/**
 * This converts StartSpanOptions to SentrySpanArguments.
 * For the most part (for now) we accept the same options,
 * but some of them need to be transformed.
 */
function parseSentrySpanArguments(options) {
  const exp = options.experimental || {};
  const initialCtx = {
    isStandalone: exp.standalone,
    ...options,
  };

  if (options.startTime) {
    const ctx = { ...initialCtx };
    ctx.startTimestamp = (0,spanUtils/* spanTimeInputToSeconds */.cI)(options.startTime);
    delete ctx.startTime;
    return ctx;
  }

  return initialCtx;
}

function getAcs() {
  const carrier = (0,esm_carrier/* getMainCarrier */.EU)();
  return (0,asyncContext/* getAsyncContextStrategy */.h)(carrier);
}

function _startRootSpan(spanArguments, scope, parentSampled) {
  const client = (0,currentScopes/* getClient */.KU)();
  const options = client?.getOptions() || {};

  const { name = '', attributes } = spanArguments;
  const currentPropagationContext = scope.getPropagationContext();
  const [sampled, sampleRate, localSampleRateWasApplied] = scope.getScopeData().sdkProcessingMetadata[
    SUPPRESS_TRACING_KEY
  ]
    ? [false]
    : sampleSpan(
        options,
        {
          name,
          parentSampled,
          attributes,
          parentSampleRate: (0,parseSampleRate/* parseSampleRate */.i)(currentPropagationContext.dsc?.sample_rate),
        },
        currentPropagationContext.sampleRand,
      );

  const rootSpan = new SentrySpan({
    ...spanArguments,
    attributes: {
      [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */.i_]: 'custom',
      [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE */.sy]:
        sampleRate !== undefined && localSampleRateWasApplied ? sampleRate : undefined,
      ...spanArguments.attributes,
    },
    sampled,
  });

  if (!sampled && client) {
    debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.log('[Tracing] Discarding root span because its trace was not chosen to be sampled.');
    client.recordDroppedEvent('sample_rate', 'transaction');
  }

  if (client) {
    client.emit('spanStart', rootSpan);
  }

  return rootSpan;
}

/**
 * Creates a new `Span` while setting the current `Span.id` as `parentSpanId`.
 * This inherits the sampling decision from the parent span.
 */
function _startChildSpan(parentSpan, scope, spanArguments) {
  const { spanId, traceId } = parentSpan.spanContext();
  const sampled = scope.getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY] ? false : (0,spanUtils/* spanIsSampled */.pK)(parentSpan);

  const childSpan = sampled
    ? new SentrySpan({
        ...spanArguments,
        parentSpanId: spanId,
        traceId,
        sampled,
      })
    : new sentryNonRecordingSpan/* SentryNonRecordingSpan */.w({ traceId });

  (0,spanUtils/* addChildSpanToSpan */.Hu)(parentSpan, childSpan);

  const client = (0,currentScopes/* getClient */.KU)();
  if (client) {
    client.emit('spanStart', childSpan);
    // If it has an endTimestamp, it's already ended
    if (spanArguments.endTimestamp) {
      client.emit('spanEnd', childSpan);
    }
  }

  return childSpan;
}

function getParentSpan(scope) {
  const span = (0,spanOnScope/* _getSpanForScope */.f)(scope) ;

  if (!span) {
    return undefined;
  }

  const client = (0,currentScopes/* getClient */.KU)();
  const options = client ? client.getOptions() : {};
  if (options.parentSpanIsAlwaysRootSpan) {
    return (0,spanUtils/* getRootSpan */.zU)(span) ;
  }

  return span;
}

function getActiveSpanWrapper(parentSpan) {
  return parentSpan !== undefined
    ? (callback) => {
        return withActiveSpan(parentSpan, callback);
      }
    : (callback) => callback();
}


//# sourceMappingURL=trace.js.map


/***/ }),

/***/ 88728:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ getCapturedScopesOnSpan),
/* harmony export */   d: () => (/* binding */ setCapturedScopesOnSpan)
/* harmony export */ });
/* harmony import */ var _utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40873);


const SCOPE_ON_START_SPAN_FIELD = '_sentryScope';
const ISOLATION_SCOPE_ON_START_SPAN_FIELD = '_sentryIsolationScope';

/** Store the scope & isolation scope for a span, which can the be used when it is finished. */
function setCapturedScopesOnSpan(span, scope, isolationScope) {
  if (span) {
    (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__/* .addNonEnumerableProperty */ .my)(span, ISOLATION_SCOPE_ON_START_SPAN_FIELD, isolationScope);
    (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__/* .addNonEnumerableProperty */ .my)(span, SCOPE_ON_START_SPAN_FIELD, scope);
  }
}

/**
 * Grabs the scope and isolation scope off a span that were active when the span was started.
 */
function getCapturedScopesOnSpan(span) {
  return {
    scope: (span )[SCOPE_ON_START_SPAN_FIELD],
    isolationScope: (span )[ISOLATION_SCOPE_ON_START_SPAN_FIELD],
  };
}


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ 8922:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   De: () => (/* binding */ dynamicSamplingContextToSentryBaggageHeader),
/* harmony export */   sv: () => (/* binding */ SENTRY_BAGGAGE_KEY_PREFIX),
/* harmony export */   yD: () => (/* binding */ baggageHeaderToDynamicSamplingContext)
/* harmony export */ });
/* unused harmony exports MAX_BAGGAGE_STRING_LENGTH, SENTRY_BAGGAGE_KEY_PREFIX_REGEX, objectToBaggageHeader, parseBaggageHeader */
/* harmony import */ var _debug_build_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41042);
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30690);
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5602);




const SENTRY_BAGGAGE_KEY_PREFIX = 'sentry-';

const SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;

/**
 * Max length of a serialized baggage string
 *
 * https://www.w3.org/TR/baggage/#limits
 */
const MAX_BAGGAGE_STRING_LENGTH = 8192;

/**
 * Takes a baggage header and turns it into Dynamic Sampling Context, by extracting all the "sentry-" prefixed values
 * from it.
 *
 * @param baggageHeader A very bread definition of a baggage header as it might appear in various frameworks.
 * @returns The Dynamic Sampling Context that was found on `baggageHeader`, if there was any, `undefined` otherwise.
 */
function baggageHeaderToDynamicSamplingContext(
  // Very liberal definition of what any incoming header might look like
  baggageHeader,
) {
  const baggageObject = parseBaggageHeader(baggageHeader);

  if (!baggageObject) {
    return undefined;
  }

  // Read all "sentry-" prefixed values out of the baggage object and put it onto a dynamic sampling context object.
  const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
    if (key.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
      const nonPrefixedKey = key.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
      acc[nonPrefixedKey] = value;
    }
    return acc;
  }, {});

  // Only return a dynamic sampling context object if there are keys in it.
  // A keyless object means there were no sentry values on the header, which means that there is no DSC.
  if (Object.keys(dynamicSamplingContext).length > 0) {
    return dynamicSamplingContext ;
  } else {
    return undefined;
  }
}

/**
 * Turns a Dynamic Sampling Object into a baggage header by prefixing all the keys on the object with "sentry-".
 *
 * @param dynamicSamplingContext The Dynamic Sampling Context to turn into a header. For convenience and compatibility
 * with the `getDynamicSamplingContext` method on the Transaction class ,this argument can also be `undefined`. If it is
 * `undefined` the function will return `undefined`.
 * @returns a baggage header, created from `dynamicSamplingContext`, or `undefined` either if `dynamicSamplingContext`
 * was `undefined`, or if `dynamicSamplingContext` didn't contain any values.
 */
function dynamicSamplingContextToSentryBaggageHeader(
  // this also takes undefined for convenience and bundle size in other places
  dynamicSamplingContext,
) {
  if (!dynamicSamplingContext) {
    return undefined;
  }

  // Prefix all DSC keys with "sentry-" and put them into a new object
  const sentryPrefixedDSC = Object.entries(dynamicSamplingContext).reduce(
    (acc, [dscKey, dscValue]) => {
      if (dscValue) {
        acc[`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`] = dscValue;
      }
      return acc;
    },
    {},
  );

  return objectToBaggageHeader(sentryPrefixedDSC);
}

/**
 * Take a baggage header and parse it into an object.
 */
function parseBaggageHeader(
  baggageHeader,
) {
  if (!baggageHeader || (!(0,_is_js__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(baggageHeader) && !Array.isArray(baggageHeader))) {
    return undefined;
  }

  if (Array.isArray(baggageHeader)) {
    // Combine all baggage headers into one object containing the baggage values so we can later read the Sentry-DSC-values from it
    return baggageHeader.reduce((acc, curr) => {
      const currBaggageObject = baggageHeaderToObject(curr);
      Object.entries(currBaggageObject).forEach(([key, value]) => {
        acc[key] = value;
      });
      return acc;
    }, {});
  }

  return baggageHeaderToObject(baggageHeader);
}

/**
 * Will parse a baggage header, which is a simple key-value map, into a flat object.
 *
 * @param baggageHeader The baggage header to parse.
 * @returns a flat object containing all the key-value pairs from `baggageHeader`.
 */
function baggageHeaderToObject(baggageHeader) {
  return baggageHeader
    .split(',')
    .map(baggageEntry => baggageEntry.split('=').map(keyOrValue => decodeURIComponent(keyOrValue.trim())))
    .reduce((acc, [key, value]) => {
      if (key && value) {
        acc[key] = value;
      }
      return acc;
    }, {});
}

/**
 * Turns a flat object (key-value pairs) into a baggage header, which is also just key-value pairs.
 *
 * @param object The object to turn into a baggage header.
 * @returns a baggage header string, or `undefined` if the object didn't have any values, since an empty baggage header
 * is not spec compliant.
 */
function objectToBaggageHeader(object) {
  if (Object.keys(object).length === 0) {
    // An empty baggage header is not spec compliant: We return undefined.
    return undefined;
  }

  return Object.entries(object).reduce((baggageHeader, [objectKey, objectValue], currentIndex) => {
    const baggageEntry = `${encodeURIComponent(objectKey)}=${encodeURIComponent(objectValue)}`;
    const newBaggageHeader = currentIndex === 0 ? baggageEntry : `${baggageHeader},${baggageEntry}`;
    if (newBaggageHeader.length > MAX_BAGGAGE_STRING_LENGTH) {
      _debug_build_js__WEBPACK_IMPORTED_MODULE_0__/* .DEBUG_BUILD */ .T &&
        _logger_js__WEBPACK_IMPORTED_MODULE_2__/* .logger */ .vF.warn(
          `Not adding key: ${objectKey} with val: ${objectValue} to baggage header due to exceeding baggage size limits.`,
        );
      return baggageHeader;
    } else {
      return newBaggageHeader;
    }
  }, '');
}


//# sourceMappingURL=baggage.js.map


/***/ }),

/***/ 87320:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $N: () => (/* binding */ getLocationHref),
/* harmony export */   Hd: () => (/* binding */ htmlTreeAsString),
/* harmony export */   xE: () => (/* binding */ getComponentName)
/* harmony export */ });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30690);
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92575);



const WINDOW = _worldwide_js__WEBPACK_IMPORTED_MODULE_1__/* .GLOBAL_OBJ */ .O ;

const DEFAULT_MAX_STRING_LENGTH = 80;

/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlTreeAsString(
  elem,
  options = {},
) {
  if (!elem) {
    return '<unknown>';
  }

  // try/catch both:
  // - accessing event.target (see getsentry/raven-js#838, #768)
  // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
  // - can throw an exception in some circumstances.
  try {
    let currentElem = elem ;
    const MAX_TRAVERSE_HEIGHT = 5;
    const out = [];
    let height = 0;
    let len = 0;
    const separator = ' > ';
    const sepLength = separator.length;
    let nextStr;
    const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
    const maxStringLength = (!Array.isArray(options) && options.maxStringLength) || DEFAULT_MAX_STRING_LENGTH;

    while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
      nextStr = _htmlElementAsString(currentElem, keyAttrs);
      // bail out if
      // - nextStr is the 'html' element
      // - the length of the string that would be created exceeds maxStringLength
      //   (ignore this limit if we are on the first iteration)
      if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength)) {
        break;
      }

      out.push(nextStr);

      len += nextStr.length;
      currentElem = currentElem.parentNode;
    }

    return out.reverse().join(separator);
  } catch (_oO) {
    return '<unknown>';
  }
}

/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function _htmlElementAsString(el, keyAttrs) {
  const elem = el

;

  const out = [];

  if (!elem?.tagName) {
    return '';
  }

  // @ts-expect-error WINDOW has HTMLElement
  if (WINDOW.HTMLElement) {
    // If using the component name annotation plugin, this value may be available on the DOM node
    if (elem instanceof HTMLElement && elem.dataset) {
      if (elem.dataset['sentryComponent']) {
        return elem.dataset['sentryComponent'];
      }
      if (elem.dataset['sentryElement']) {
        return elem.dataset['sentryElement'];
      }
    }
  }

  out.push(elem.tagName.toLowerCase());

  // Pairs of attribute keys defined in `serializeAttribute` and their values on element.
  const keyAttrPairs = keyAttrs?.length
    ? keyAttrs.filter(keyAttr => elem.getAttribute(keyAttr)).map(keyAttr => [keyAttr, elem.getAttribute(keyAttr)])
    : null;

  if (keyAttrPairs?.length) {
    keyAttrPairs.forEach(keyAttrPair => {
      out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
    });
  } else {
    if (elem.id) {
      out.push(`#${elem.id}`);
    }

    const className = elem.className;
    if (className && (0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(className)) {
      const classes = className.split(/\s+/);
      for (const c of classes) {
        out.push(`.${c}`);
      }
    }
  }
  const allowedAttrs = ['aria-label', 'type', 'name', 'title', 'alt'];
  for (const k of allowedAttrs) {
    const attr = elem.getAttribute(k);
    if (attr) {
      out.push(`[${k}="${attr}"]`);
    }
  }

  return out.join('');
}

/**
 * A safe form of location.href
 */
function getLocationHref() {
  try {
    return WINDOW.document.location.href;
  } catch (oO) {
    return '';
  }
}

/**
 * Given a DOM element, traverses up the tree until it finds the first ancestor node
 * that has the `data-sentry-component` or `data-sentry-element` attribute with `data-sentry-component` taking
 * precedence. This attribute is added at build-time by projects that have the component name annotation plugin installed.
 *
 * @returns a string representation of the component for the provided DOM element, or `null` if not found
 */
function getComponentName(elem) {
  // @ts-expect-error WINDOW has HTMLElement
  if (!WINDOW.HTMLElement) {
    return null;
  }

  let currentElem = elem ;
  const MAX_TRAVERSE_HEIGHT = 5;
  for (let i = 0; i < MAX_TRAVERSE_HEIGHT; i++) {
    if (!currentElem) {
      return null;
    }

    if (currentElem instanceof HTMLElement) {
      if (currentElem.dataset['sentryComponent']) {
        return currentElem.dataset['sentryComponent'];
      }
      if (currentElem.dataset['sentryElement']) {
        return currentElem.dataset['sentryElement'];
      }
    }

    currentElem = currentElem.parentNode;
  }

  return null;
}


//# sourceMappingURL=browser.js.map


/***/ }),

/***/ 41042:
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

/***/ 87961:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AD: () => (/* binding */ makeDsn),
/* harmony export */   SB: () => (/* binding */ dsnToString),
/* harmony export */   hH: () => (/* binding */ dsnFromString)
/* harmony export */ });
/* harmony import */ var _debug_build_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41042);
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5602);



/** Regular expression used to parse a Dsn. */
const DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

function isValidProtocol(protocol) {
  return protocol === 'http' || protocol === 'https';
}

/**
 * Renders the string representation of this Dsn.
 *
 * By default, this will render the public representation without the password
 * component. To get the deprecated private representation, set `withPassword`
 * to true.
 *
 * @param withPassword When set to true, the password will be included.
 */
function dsnToString(dsn, withPassword = false) {
  const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
  return (
    `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ''}` +
    `@${host}${port ? `:${port}` : ''}/${path ? `${path}/` : path}${projectId}`
  );
}

/**
 * Parses a Dsn from a given string.
 *
 * @param str A Dsn as string
 * @returns Dsn as DsnComponents or undefined if @param str is not a valid DSN string
 */
function dsnFromString(str) {
  const match = DSN_REGEX.exec(str);

  if (!match) {
    // This should be logged to the console
    (0,_logger_js__WEBPACK_IMPORTED_MODULE_1__/* .consoleSandbox */ .pq)(() => {
      // eslint-disable-next-line no-console
      console.error(`Invalid Sentry Dsn: ${str}`);
    });
    return undefined;
  }

  const [protocol, publicKey, pass = '', host = '', port = '', lastPath = ''] = match.slice(1);
  let path = '';
  let projectId = lastPath;

  const split = projectId.split('/');
  if (split.length > 1) {
    path = split.slice(0, -1).join('/');
    projectId = split.pop() ;
  }

  if (projectId) {
    const projectMatch = projectId.match(/^\d+/);
    if (projectMatch) {
      projectId = projectMatch[0];
    }
  }

  return dsnFromComponents({ host, pass, path, projectId, port, protocol: protocol , publicKey });
}

function dsnFromComponents(components) {
  return {
    protocol: components.protocol,
    publicKey: components.publicKey || '',
    pass: components.pass || '',
    host: components.host,
    port: components.port || '',
    path: components.path || '',
    projectId: components.projectId,
  };
}

function validateDsn(dsn) {
  if (!_debug_build_js__WEBPACK_IMPORTED_MODULE_0__/* .DEBUG_BUILD */ .T) {
    return true;
  }

  const { port, projectId, protocol } = dsn;

  const requiredComponents = ['protocol', 'publicKey', 'host', 'projectId'];
  const hasMissingRequiredComponent = requiredComponents.find(component => {
    if (!dsn[component]) {
      _logger_js__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.error(`Invalid Sentry Dsn: ${component} missing`);
      return true;
    }
    return false;
  });

  if (hasMissingRequiredComponent) {
    return false;
  }

  if (!projectId.match(/^\d+$/)) {
    _logger_js__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
    return false;
  }

  if (!isValidProtocol(protocol)) {
    _logger_js__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
    return false;
  }

  if (port && isNaN(parseInt(port, 10))) {
    _logger_js__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.error(`Invalid Sentry Dsn: Invalid port ${port}`);
    return false;
  }

  return true;
}

/**
 * Creates a valid Sentry Dsn object, identifying a Sentry instance and project.
 * @returns a valid DsnComponents object or `undefined` if @param from is an invalid DSN source
 */
function makeDsn(from) {
  const components = typeof from === 'string' ? dsnFromString(from) : dsnFromComponents(from);
  if (!components || !validateDsn(components)) {
    return undefined;
  }
  return components;
}


//# sourceMappingURL=dsn.js.map


/***/ }),

/***/ 87202:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cj: () => (/* binding */ getSdkMetadataForEnvelopeHeader),
/* harmony export */   W3: () => (/* binding */ addItemToEnvelope),
/* harmony export */   bN: () => (/* binding */ serializeEnvelope),
/* harmony export */   bm: () => (/* binding */ createAttachmentEnvelopeItem),
/* harmony export */   h4: () => (/* binding */ createEnvelope),
/* harmony export */   hP: () => (/* binding */ envelopeContainsItemType),
/* harmony export */   mE: () => (/* binding */ parseEnvelope),
/* harmony export */   n2: () => (/* binding */ createEventEnvelopeHeaders),
/* harmony export */   y5: () => (/* binding */ createSpanEnvelopeItem),
/* harmony export */   yH: () => (/* binding */ forEachEnvelopeItem),
/* harmony export */   zk: () => (/* binding */ envelopeItemTypeToDataCategory)
/* harmony export */ });
/* harmony import */ var _carrier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95200);
/* harmony import */ var _dsn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87961);
/* harmony import */ var _normalize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51071);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40873);
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92575);






/**
 * Creates an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */
function createEnvelope(headers, items = []) {
  return [headers, items] ;
}

/**
 * Add an item to an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */
function addItemToEnvelope(envelope, newItem) {
  const [headers, items] = envelope;
  return [headers, [...items, newItem]] ;
}

/**
 * Convenience function to loop through the items and item types of an envelope.
 * (This function was mostly created because working with envelope types is painful at the moment)
 *
 * If the callback returns true, the rest of the items will be skipped.
 */
function forEachEnvelopeItem(
  envelope,
  callback,
) {
  const envelopeItems = envelope[1];

  for (const envelopeItem of envelopeItems) {
    const envelopeItemType = envelopeItem[0].type;
    const result = callback(envelopeItem, envelopeItemType);

    if (result) {
      return true;
    }
  }

  return false;
}

/**
 * Returns true if the envelope contains any of the given envelope item types
 */
function envelopeContainsItemType(envelope, types) {
  return forEachEnvelopeItem(envelope, (_, type) => types.includes(type));
}

/**
 * Encode a string to UTF8 array.
 */
function encodeUTF8(input) {
  const carrier = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_0__/* .getSentryCarrier */ .Se)(_worldwide_js__WEBPACK_IMPORTED_MODULE_4__/* .GLOBAL_OBJ */ .O);
  return carrier.encodePolyfill ? carrier.encodePolyfill(input) : new TextEncoder().encode(input);
}

/**
 * Decode a UTF8 array to string.
 */
function decodeUTF8(input) {
  const carrier = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_0__/* .getSentryCarrier */ .Se)(_worldwide_js__WEBPACK_IMPORTED_MODULE_4__/* .GLOBAL_OBJ */ .O);
  return carrier.decodePolyfill ? carrier.decodePolyfill(input) : new TextDecoder().decode(input);
}

/**
 * Serializes an envelope.
 */
function serializeEnvelope(envelope) {
  const [envHeaders, items] = envelope;

  // Initially we construct our envelope as a string and only convert to binary chunks if we encounter binary data
  let parts = JSON.stringify(envHeaders);

  function append(next) {
    if (typeof parts === 'string') {
      parts = typeof next === 'string' ? parts + next : [encodeUTF8(parts), next];
    } else {
      parts.push(typeof next === 'string' ? encodeUTF8(next) : next);
    }
  }

  for (const item of items) {
    const [itemHeaders, payload] = item;

    append(`\n${JSON.stringify(itemHeaders)}\n`);

    if (typeof payload === 'string' || payload instanceof Uint8Array) {
      append(payload);
    } else {
      let stringifiedPayload;
      try {
        stringifiedPayload = JSON.stringify(payload);
      } catch (e) {
        // In case, despite all our efforts to keep `payload` circular-dependency-free, `JSON.stringify()` still
        // fails, we try again after normalizing it again with infinite normalization depth. This of course has a
        // performance impact but in this case a performance hit is better than throwing.
        stringifiedPayload = JSON.stringify((0,_normalize_js__WEBPACK_IMPORTED_MODULE_2__/* .normalize */ .S8)(payload));
      }
      append(stringifiedPayload);
    }
  }

  return typeof parts === 'string' ? parts : concatBuffers(parts);
}

function concatBuffers(buffers) {
  const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);

  const merged = new Uint8Array(totalLength);
  let offset = 0;
  for (const buffer of buffers) {
    merged.set(buffer, offset);
    offset += buffer.length;
  }

  return merged;
}

/**
 * Parses an envelope
 */
function parseEnvelope(env) {
  let buffer = typeof env === 'string' ? encodeUTF8(env) : env;

  function readBinary(length) {
    const bin = buffer.subarray(0, length);
    // Replace the buffer with the remaining data excluding trailing newline
    buffer = buffer.subarray(length + 1);
    return bin;
  }

  function readJson() {
    let i = buffer.indexOf(0xa);
    // If we couldn't find a newline, we must have found the end of the buffer
    if (i < 0) {
      i = buffer.length;
    }

    return JSON.parse(decodeUTF8(readBinary(i))) ;
  }

  const envelopeHeader = readJson();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items = [];

  while (buffer.length) {
    const itemHeader = readJson();
    const binaryLength = typeof itemHeader.length === 'number' ? itemHeader.length : undefined;

    items.push([itemHeader, binaryLength ? readBinary(binaryLength) : readJson()]);
  }

  return [envelopeHeader, items];
}

/**
 * Creates envelope item for a single span
 */
function createSpanEnvelopeItem(spanJson) {
  const spanHeaders = {
    type: 'span',
  };

  return [spanHeaders, spanJson];
}

/**
 * Creates attachment envelope items
 */
function createAttachmentEnvelopeItem(attachment) {
  const buffer = typeof attachment.data === 'string' ? encodeUTF8(attachment.data) : attachment.data;

  return [
    (0,_object_js__WEBPACK_IMPORTED_MODULE_3__/* .dropUndefinedKeys */ .Ce)({
      type: 'attachment',
      length: buffer.length,
      filename: attachment.filename,
      content_type: attachment.contentType,
      attachment_type: attachment.attachmentType,
    }),
    buffer,
  ];
}

const ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
  session: 'session',
  sessions: 'session',
  attachment: 'attachment',
  transaction: 'transaction',
  event: 'error',
  client_report: 'internal',
  user_report: 'default',
  profile: 'profile',
  profile_chunk: 'profile',
  replay_event: 'replay',
  replay_recording: 'replay',
  check_in: 'monitor',
  feedback: 'feedback',
  span: 'span',
  raw_security: 'security',
  otel_log: 'log_item',
};

/**
 * Maps the type of an envelope item to a data category.
 */
function envelopeItemTypeToDataCategory(type) {
  return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
}

/** Extracts the minimal SDK info from the metadata or an events */
function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
  if (!metadataOrEvent?.sdk) {
    return;
  }
  const { name, version } = metadataOrEvent.sdk;
  return { name, version };
}

/**
 * Creates event envelope headers, based on event, sdk info and tunnel
 * Note: This function was extracted from the core package to make it available in Replay
 */
function createEventEnvelopeHeaders(
  event,
  sdkInfo,
  tunnel,
  dsn,
) {
  const dynamicSamplingContext = event.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: event.event_id ,
    sent_at: new Date().toISOString(),
    ...(sdkInfo && { sdk: sdkInfo }),
    ...(!!tunnel && dsn && { dsn: (0,_dsn_js__WEBPACK_IMPORTED_MODULE_1__/* .dsnToString */ .SB)(dsn) }),
    ...(dynamicSamplingContext && {
      trace: (0,_object_js__WEBPACK_IMPORTED_MODULE_3__/* .dropUndefinedKeys */ .Ce)({ ...dynamicSamplingContext }),
    }),
  };
}


//# sourceMappingURL=envelope.js.map


/***/ }),

/***/ 30690:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BD: () => (/* binding */ isDOMError),
/* harmony export */   Kg: () => (/* binding */ isString),
/* harmony export */   L2: () => (/* binding */ isVueViewModel),
/* harmony export */   NF: () => (/* binding */ isParameterizedString),
/* harmony export */   Qd: () => (/* binding */ isPlainObject),
/* harmony export */   Qg: () => (/* binding */ isThenable),
/* harmony export */   T2: () => (/* binding */ isErrorEvent),
/* harmony export */   W6: () => (/* binding */ isDOMException),
/* harmony export */   bJ: () => (/* binding */ isError),
/* harmony export */   gd: () => (/* binding */ isRegExp),
/* harmony export */   mE: () => (/* binding */ isSyntheticEvent),
/* harmony export */   sO: () => (/* binding */ isPrimitive),
/* harmony export */   tH: () => (/* binding */ isInstanceOf),
/* harmony export */   vq: () => (/* binding */ isElement),
/* harmony export */   xH: () => (/* binding */ isEvent)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/unbound-method
const objectToString = Object.prototype.toString;

/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
  switch (objectToString.call(wat)) {
    case '[object Error]':
    case '[object Exception]':
    case '[object DOMException]':
    case '[object WebAssembly.Exception]':
      return true;
    default:
      return isInstanceOf(wat, Error);
  }
}
/**
 * Checks whether given value is an instance of the given built-in class.
 *
 * @param wat The value to be checked
 * @param className
 * @returns A boolean representing the result.
 */
function isBuiltin(wat, className) {
  return objectToString.call(wat) === `[object ${className}]`;
}

/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isErrorEvent(wat) {
  return isBuiltin(wat, 'ErrorEvent');
}

/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMError(wat) {
  return isBuiltin(wat, 'DOMError');
}

/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMException(wat) {
  return isBuiltin(wat, 'DOMException');
}

/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isString(wat) {
  return isBuiltin(wat, 'String');
}

/**
 * Checks whether given string is parameterized
 * {@link isParameterizedString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isParameterizedString(wat) {
  return (
    typeof wat === 'object' &&
    wat !== null &&
    '__sentry_template_string__' in wat &&
    '__sentry_template_values__' in wat
  );
}

/**
 * Checks whether given value is a primitive (undefined, null, number, boolean, string, bigint, symbol)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPrimitive(wat) {
  return wat === null || isParameterizedString(wat) || (typeof wat !== 'object' && typeof wat !== 'function');
}

/**
 * Checks whether given value's type is an object literal, or a class instance.
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
  return isBuiltin(wat, 'Object');
}

/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isEvent(wat) {
  return typeof Event !== 'undefined' && isInstanceOf(wat, Event);
}

/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isElement(wat) {
  return typeof Element !== 'undefined' && isInstanceOf(wat, Element);
}

/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isRegExp(wat) {
  return isBuiltin(wat, 'RegExp');
}

/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
function isThenable(wat) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return Boolean(wat?.then && typeof wat.then === 'function');
}

/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isSyntheticEvent(wat) {
  return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}

/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */
function isInstanceOf(wat, base) {
  try {
    return wat instanceof base;
  } catch (_e) {
    return false;
  }
}

/**
 * Checks whether given value's type is a Vue ViewModel.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isVueViewModel(wat) {
  // Not using Object.prototype.toString because in Vue 3 it would read the instance's Symbol(Symbol.toStringTag) property.
  return !!(typeof wat === 'object' && wat !== null && ((wat ).__isVue || (wat )._isVue));
}


//# sourceMappingURL=is.js.map


/***/ }),

/***/ 5602:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ow: () => (/* binding */ CONSOLE_LEVELS),
/* harmony export */   Z9: () => (/* binding */ originalConsoleMethods),
/* harmony export */   pq: () => (/* binding */ consoleSandbox),
/* harmony export */   vF: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _carrier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95200);
/* harmony import */ var _debug_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41042);
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92575);




/** Prefix for logging strings */
const PREFIX = 'Sentry Logger ';

const CONSOLE_LEVELS = [
  'debug',
  'info',
  'warn',
  'error',
  'log',
  'assert',
  'trace',
] ;

/** This may be mutated by the console instrumentation. */
const originalConsoleMethods

 = {};

/** A Sentry Logger instance. */

/**
 * Temporarily disable sentry console instrumentations.
 *
 * @param callback The function to run against the original `console` messages
 * @returns The results of the callback
 */
function consoleSandbox(callback) {
  if (!("console" in _worldwide_js__WEBPACK_IMPORTED_MODULE_2__/* .GLOBAL_OBJ */ .O)) {
    return callback();
  }

  const console = _worldwide_js__WEBPACK_IMPORTED_MODULE_2__/* .GLOBAL_OBJ */ .O.console ;
  const wrappedFuncs = {};

  const wrappedLevels = Object.keys(originalConsoleMethods) ;

  // Restore all wrapped console methods
  wrappedLevels.forEach(level => {
    const originalConsoleMethod = originalConsoleMethods[level] ;
    wrappedFuncs[level] = console[level] ;
    console[level] = originalConsoleMethod;
  });

  try {
    return callback();
  } finally {
    // Revert restoration to wrapped state
    wrappedLevels.forEach(level => {
      console[level] = wrappedFuncs[level] ;
    });
  }
}

function makeLogger() {
  let enabled = false;
  const logger = {
    enable: () => {
      enabled = true;
    },
    disable: () => {
      enabled = false;
    },
    isEnabled: () => enabled,
  };

  if (_debug_build_js__WEBPACK_IMPORTED_MODULE_1__/* .DEBUG_BUILD */ .T) {
    CONSOLE_LEVELS.forEach(name => {
      logger[name] = (...args) => {
        if (enabled) {
          consoleSandbox(() => {
            _worldwide_js__WEBPACK_IMPORTED_MODULE_2__/* .GLOBAL_OBJ */ .O.console[name](`${PREFIX}[${name}]:`, ...args);
          });
        }
      };
    });
  } else {
    CONSOLE_LEVELS.forEach(name => {
      logger[name] = () => undefined;
    });
  }

  return logger ;
}

/**
 * This is a logger singleton which either logs things or no-ops if logging is not enabled.
 * The logger is a singleton on the carrier, to ensure that a consistent logger is used throughout the SDK.
 */
const logger = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_0__/* .getGlobalSingleton */ .BY)('logger', makeLogger);


//# sourceMappingURL=logger.js.map


/***/ }),

/***/ 44910:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $X: () => (/* binding */ getEventDescription),
/* harmony export */   GR: () => (/* binding */ checkOrSetAlreadyCaught),
/* harmony export */   M6: () => (/* binding */ addExceptionMechanism),
/* harmony export */   db: () => (/* binding */ addContextToFrame),
/* harmony export */   eJ: () => (/* binding */ uuid4),
/* harmony export */   gO: () => (/* binding */ addExceptionTypeValue)
/* harmony export */ });
/* unused harmony export parseSemver */
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40873);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2323);
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92575);




function getCrypto() {
  const gbl = _worldwide_js__WEBPACK_IMPORTED_MODULE_2__/* .GLOBAL_OBJ */ .O ;
  return gbl.crypto || gbl.msCrypto;
}

/**
 * UUID4 generator
 * @param crypto Object that provides the crypto API.
 * @returns string Generated UUID4.
 */
function uuid4(crypto = getCrypto()) {
  let getRandomByte = () => Math.random() * 16;
  try {
    if (crypto?.randomUUID) {
      return crypto.randomUUID().replace(/-/g, '');
    }
    if (crypto?.getRandomValues) {
      getRandomByte = () => {
        // crypto.getRandomValues might return undefined instead of the typed array
        // in old Chromium versions (e.g. 23.0.1235.0 (151422))
        // However, `typedArray` is still filled in-place.
        // @see https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues#typedarray
        const typedArray = new Uint8Array(1);
        crypto.getRandomValues(typedArray);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return typedArray[0];
      };
    }
  } catch (_) {
    // some runtimes can crash invoking crypto
    // https://github.com/getsentry/sentry-javascript/issues/8935
  }

  // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
  // Concatenating the following numbers as strings results in '10000000100040008000100000000000'
  return (([1e7] ) + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, c =>
    // eslint-disable-next-line no-bitwise
    ((c ) ^ ((getRandomByte() & 15) >> ((c ) / 4))).toString(16),
  );
}

function getFirstException(event) {
  return event.exception?.values?.[0];
}

/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
function getEventDescription(event) {
  const { message, event_id: eventId } = event;
  if (message) {
    return message;
  }

  const firstException = getFirstException(event);
  if (firstException) {
    if (firstException.type && firstException.value) {
      return `${firstException.type}: ${firstException.value}`;
    }
    return firstException.type || firstException.value || eventId || '<unknown>';
  }
  return eventId || '<unknown>';
}

/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */
function addExceptionTypeValue(event, value, type) {
  const exception = (event.exception = event.exception || {});
  const values = (exception.values = exception.values || []);
  const firstException = (values[0] = values[0] || {});
  if (!firstException.value) {
    firstException.value = value || '';
  }
  if (!firstException.type) {
    firstException.type = type || 'Error';
  }
}

/**
 * Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
 *
 * @param event The event to modify.
 * @param newMechanism Mechanism data to add to the event.
 * @hidden
 */
function addExceptionMechanism(event, newMechanism) {
  const firstException = getFirstException(event);
  if (!firstException) {
    return;
  }

  const defaultMechanism = { type: 'generic', handled: true };
  const currentMechanism = firstException.mechanism;
  firstException.mechanism = { ...defaultMechanism, ...currentMechanism, ...newMechanism };

  if (newMechanism && 'data' in newMechanism) {
    const mergedData = { ...currentMechanism?.data, ...newMechanism.data };
    firstException.mechanism.data = mergedData;
  }
}

// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
const SEMVER_REGEXP =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

/**
 * Represents Semantic Versioning object
 */

function _parseInt(input) {
  return parseInt(input || '', 10);
}

/**
 * Parses input into a SemVer interface
 * @param input string representation of a semver version
 */
function parseSemver(input) {
  const match = input.match(SEMVER_REGEXP) || [];
  const major = _parseInt(match[1]);
  const minor = _parseInt(match[2]);
  const patch = _parseInt(match[3]);
  return {
    buildmetadata: match[5],
    major: isNaN(major) ? undefined : major,
    minor: isNaN(minor) ? undefined : minor,
    patch: isNaN(patch) ? undefined : patch,
    prerelease: match[4],
  };
}

/**
 * This function adds context (pre/post/line) lines to the provided frame
 *
 * @param lines string[] containing all lines
 * @param frame StackFrame that will be mutated
 * @param linesOfContext number of context lines we want to add pre/post
 */
function addContextToFrame(lines, frame, linesOfContext = 5) {
  // When there is no line number in the frame, attaching context is nonsensical and will even break grouping
  if (frame.lineno === undefined) {
    return;
  }

  const maxLines = lines.length;
  const sourceLine = Math.max(Math.min(maxLines - 1, frame.lineno - 1), 0);

  frame.pre_context = lines
    .slice(Math.max(0, sourceLine - linesOfContext), sourceLine)
    .map((line) => (0,_string_js__WEBPACK_IMPORTED_MODULE_1__/* .snipLine */ .nC)(line, 0));

  // We guard here to ensure this is not larger than the existing number of lines
  const lineIndex = Math.min(maxLines - 1, sourceLine);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  frame.context_line = (0,_string_js__WEBPACK_IMPORTED_MODULE_1__/* .snipLine */ .nC)(lines[lineIndex], frame.colno || 0);

  frame.post_context = lines
    .slice(Math.min(sourceLine + 1, maxLines), sourceLine + 1 + linesOfContext)
    .map((line) => (0,_string_js__WEBPACK_IMPORTED_MODULE_1__/* .snipLine */ .nC)(line, 0));
}

/**
 * Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
 * in question), and marks it captured if not.
 *
 * This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
 * record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
 * that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
 * the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
 * caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
 * function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
 * see it.
 *
 * Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
 * them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
 * object wrapper forms so that this check will always work. However, because we need to flag the exact object which
 * will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
 * must be done before the exception captured.
 *
 * @param A thrown exception to check or flag as having been seen
 * @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
 */
function checkOrSetAlreadyCaught(exception) {
  if (isAlreadyCaptured(exception)) {
    return true;
  }

  try {
    // set it this way rather than by assignment so that it's not ennumerable and therefore isn't recorded by the
    // `ExtraErrorData` integration
    (0,_object_js__WEBPACK_IMPORTED_MODULE_0__/* .addNonEnumerableProperty */ .my)(exception , '__sentry_captured__', true);
  } catch (err) {
    // `exception` is a primitive, so we can't mark it seen
  }

  return false;
}

function isAlreadyCaptured(exception) {
  try {
    return (exception ).__sentry_captured__;
  } catch {} // eslint-disable-line no-empty
}


//# sourceMappingURL=misc.js.map


/***/ }),

/***/ 51071:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S8: () => (/* binding */ normalize),
/* harmony export */   cd: () => (/* binding */ normalizeToSize)
/* harmony export */ });
/* unused harmony export normalizeUrlToBase */
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30690);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40873);
/* harmony import */ var _stacktrace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20527);




/**
 * Recursively normalizes the given object.
 *
 * - Creates a copy to prevent original input mutation
 * - Skips non-enumerable properties
 * - When stringifying, calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializable values (`undefined`/`NaN`/functions) to serializable format
 * - Translates known global objects/classes to a string representations
 * - Takes care of `Error` object serialization
 * - Optionally limits depth of final output
 * - Optionally limits number of properties/elements included in any single object/array
 *
 * @param input The object to be normalized.
 * @param depth The max depth to which to normalize the object. (Anything deeper stringified whole.)
 * @param maxProperties The max number of elements or properties to be included in any single array or
 * object in the normalized output.
 * @returns A normalized version of the object, or `"**non-serializable**"` if any errors are thrown during normalization.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalize(input, depth = 100, maxProperties = +Infinity) {
  try {
    // since we're at the outermost level, we don't provide a key
    return visit('', input, depth, maxProperties);
  } catch (err) {
    return { ERROR: `**non-serializable** (${err})` };
  }
}

/** JSDoc */
function normalizeToSize(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  object,
  // Default Node.js REPL depth
  depth = 3,
  // 100kB, as 200kB is max payload size, so half sounds reasonable
  maxSize = 100 * 1024,
) {
  const normalized = normalize(object, depth);

  if (jsonSize(normalized) > maxSize) {
    return normalizeToSize(object, depth - 1, maxSize);
  }

  return normalized ;
}

/**
 * Visits a node to perform normalization on it
 *
 * @param key The key corresponding to the given node
 * @param value The node to be visited
 * @param depth Optional number indicating the maximum recursion depth
 * @param maxProperties Optional maximum number of properties/elements included in any single object/array
 * @param memo Optional Memo class handling decycling
 */
function visit(
  key,
  value,
  depth = +Infinity,
  maxProperties = +Infinity,
  memo = memoBuilder(),
) {
  const [memoize, unmemoize] = memo;

  // Get the simple cases out of the way first
  if (
    value == null || // this matches null and undefined -> eqeq not eqeqeq
    ['boolean', 'string'].includes(typeof value) ||
    (typeof value === 'number' && Number.isFinite(value))
  ) {
    return value ;
  }

  const stringified = stringifyValue(key, value);

  // Anything we could potentially dig into more (objects or arrays) will have come back as `"[object XXXX]"`.
  // Everything else will have already been serialized, so if we don't see that pattern, we're done.
  if (!stringified.startsWith('[object ')) {
    return stringified;
  }

  // From here on, we can assert that `value` is either an object or an array.

  // Do not normalize objects that we know have already been normalized. As a general rule, the
  // "__sentry_skip_normalization__" property should only be used sparingly and only should only be set on objects that
  // have already been normalized.
  if ((value )['__sentry_skip_normalization__']) {
    return value ;
  }

  // We can set `__sentry_override_normalization_depth__` on an object to ensure that from there
  // We keep a certain amount of depth.
  // This should be used sparingly, e.g. we use it for the redux integration to ensure we get a certain amount of state.
  const remainingDepth =
    typeof (value )['__sentry_override_normalization_depth__'] === 'number'
      ? ((value )['__sentry_override_normalization_depth__'] )
      : depth;

  // We're also done if we've reached the max depth
  if (remainingDepth === 0) {
    // At this point we know `serialized` is a string of the form `"[object XXXX]"`. Clean it up so it's just `"[XXXX]"`.
    return stringified.replace('object ', '');
  }

  // If we've already visited this branch, bail out, as it's circular reference. If not, note that we're seeing it now.
  if (memoize(value)) {
    return '[Circular ~]';
  }

  // If the value has a `toJSON` method, we call it to extract more information
  const valueWithToJSON = value ;
  if (valueWithToJSON && typeof valueWithToJSON.toJSON === 'function') {
    try {
      const jsonValue = valueWithToJSON.toJSON();
      // We need to normalize the return value of `.toJSON()` in case it has circular references
      return visit('', jsonValue, remainingDepth - 1, maxProperties, memo);
    } catch (err) {
      // pass (The built-in `toJSON` failed, but we can still try to do it ourselves)
    }
  }

  // At this point we know we either have an object or an array, we haven't seen it before, and we're going to recurse
  // because we haven't yet reached the max depth. Create an accumulator to hold the results of visiting each
  // property/entry, and keep track of the number of items we add to it.
  const normalized = (Array.isArray(value) ? [] : {}) ;
  let numAdded = 0;

  // Before we begin, convert`Error` and`Event` instances into plain objects, since some of each of their relevant
  // properties are non-enumerable and otherwise would get missed.
  const visitable = (0,_object_js__WEBPACK_IMPORTED_MODULE_1__/* .convertToPlainObject */ .W4)(value );

  for (const visitKey in visitable) {
    // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
    if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
      continue;
    }

    if (numAdded >= maxProperties) {
      normalized[visitKey] = '[MaxProperties ~]';
      break;
    }

    // Recursively visit all the child nodes
    const visitValue = visitable[visitKey];
    normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);

    numAdded++;
  }

  // Once we've visited all the branches, remove the parent from memo storage
  unmemoize(value);

  // Return accumulated values
  return normalized;
}

/* eslint-disable complexity */
/**
 * Stringify the given value. Handles various known special values and types.
 *
 * Not meant to be used on simple primitives which already have a string representation, as it will, for example, turn
 * the number 1231 into "[Object Number]", nor on `null`, as it will throw.
 *
 * @param value The value to stringify
 * @returns A stringified representation of the given value
 */
function stringifyValue(
  key,
  // this type is a tiny bit of a cheat, since this function does handle NaN (which is technically a number), but for
  // our internal use, it'll do
  value,
) {
  try {
    if (key === 'domain' && value && typeof value === 'object' && (value )._events) {
      return '[Domain]';
    }

    if (key === 'domainEmitter') {
      return '[DomainEmitter]';
    }

    // It's safe to use `global`, `window`, and `document` here in this manner, as we are asserting using `typeof` first
    // which won't throw if they are not present.

    if (typeof __webpack_require__.g !== 'undefined' && value === __webpack_require__.g) {
      return '[Global]';
    }

    // eslint-disable-next-line no-restricted-globals
    if (typeof window !== 'undefined' && value === window) {
      return '[Window]';
    }

    // eslint-disable-next-line no-restricted-globals
    if (typeof document !== 'undefined' && value === document) {
      return '[Document]';
    }

    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isVueViewModel */ .L2)(value)) {
      return '[VueViewModel]';
    }

    // React's SyntheticEvent thingy
    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isSyntheticEvent */ .mE)(value)) {
      return '[SyntheticEvent]';
    }

    if (typeof value === 'number' && !Number.isFinite(value)) {
      return `[${value}]`;
    }

    if (typeof value === 'function') {
      return `[Function: ${(0,_stacktrace_js__WEBPACK_IMPORTED_MODULE_2__/* .getFunctionName */ .qQ)(value)}]`;
    }

    if (typeof value === 'symbol') {
      return `[${String(value)}]`;
    }

    // stringified BigInts are indistinguishable from regular numbers, so we need to label them to avoid confusion
    if (typeof value === 'bigint') {
      return `[BigInt: ${String(value)}]`;
    }

    // Now that we've knocked out all the special cases and the primitives, all we have left are objects. Simply casting
    // them to strings means that instances of classes which haven't defined their `toStringTag` will just come out as
    // `"[object Object]"`. If we instead look at the constructor's name (which is the same as the name of the class),
    // we can make sure that only plain objects come out that way.
    const objName = getConstructorName(value);

    // Handle HTML Elements
    if (/^HTML(\w*)Element$/.test(objName)) {
      return `[HTMLElement: ${objName}]`;
    }

    return `[object ${objName}]`;
  } catch (err) {
    return `**non-serializable** (${err})`;
  }
}
/* eslint-enable complexity */

function getConstructorName(value) {
  const prototype = Object.getPrototypeOf(value);

  return prototype?.constructor ? prototype.constructor.name : 'null prototype';
}

/** Calculates bytes size of input string */
function utf8Length(value) {
  // eslint-disable-next-line no-bitwise
  return ~-encodeURI(value).split(/%..|./).length;
}

/** Calculates bytes size of input object */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}

/**
 * Normalizes URLs in exceptions and stacktraces to a base path so Sentry can fingerprint
 * across platforms and working directory.
 *
 * @param url The URL to be normalized.
 * @param basePath The application base path.
 * @returns The normalized URL.
 */
function normalizeUrlToBase(url, basePath) {
  const escapedBase = basePath
    // Backslash to forward
    .replace(/\\/g, '/')
    // Escape RegExp special characters
    .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');

  let newUrl = url;
  try {
    newUrl = decodeURI(url);
  } catch (_Oo) {
    // Sometime this breaks
  }
  return (
    newUrl
      .replace(/\\/g, '/')
      .replace(/webpack:\/?/g, '') // Remove intermediate base path
      // eslint-disable-next-line @sentry-internal/sdk/no-regexp-constructor
      .replace(new RegExp(`(file://)?/*${escapedBase}/*`, 'ig'), 'app:///')
  );
}

/**
 * Helper to decycle json objects
 */
function memoBuilder() {
  const inner = new WeakSet();
  function memoize(obj) {
    if (inner.has(obj)) {
      return true;
    }
    inner.add(obj);
    return false;
  }

  function unmemoize(obj) {
    inner.delete(obj);
  }
  return [memoize, unmemoize];
}


//# sourceMappingURL=normalize.js.map


/***/ }),

/***/ 40873:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ce: () => (/* binding */ dropUndefinedKeys),
/* harmony export */   GS: () => (/* binding */ fill),
/* harmony export */   HF: () => (/* binding */ extractExceptionKeysForMessage),
/* harmony export */   W4: () => (/* binding */ convertToPlainObject),
/* harmony export */   my: () => (/* binding */ addNonEnumerableProperty),
/* harmony export */   pO: () => (/* binding */ markFunctionWrapped),
/* harmony export */   sp: () => (/* binding */ getOriginalFunction)
/* harmony export */ });
/* unused harmony export objectify */
/* unused harmony import specifier */ var isPrimitive;
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87320);
/* harmony import */ var _debug_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41042);
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30690);
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5602);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2323);






/**
 * Replace a method in an object with a wrapped version of itself.
 *
 * @param source An object that contains a method to be wrapped.
 * @param name The name of the method to be wrapped.
 * @param replacementFactory A higher-order function that takes the original version of the given method and returns a
 * wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
 * preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
 * args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
 * @returns void
 */
function fill(source, name, replacementFactory) {
  if (!(name in source)) {
    return;
  }

  const original = source[name] ;
  const wrapped = replacementFactory(original) ;

  // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
  // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
  if (typeof wrapped === 'function') {
    markFunctionWrapped(wrapped, original);
  }

  try {
    source[name] = wrapped;
  } catch {
    _debug_build_js__WEBPACK_IMPORTED_MODULE_1__/* .DEBUG_BUILD */ .T && _logger_js__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .vF.log(`Failed to replace method "${name}" in object`, source);
  }
}

/**
 * Defines a non-enumerable property on the given object.
 *
 * @param obj The object on which to set the property
 * @param name The name of the property to be set
 * @param value The value to which to set the property
 */
function addNonEnumerableProperty(obj, name, value) {
  try {
    Object.defineProperty(obj, name, {
      // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
      value: value,
      writable: true,
      configurable: true,
    });
  } catch (o_O) {
    _debug_build_js__WEBPACK_IMPORTED_MODULE_1__/* .DEBUG_BUILD */ .T && _logger_js__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .vF.log(`Failed to add non-enumerable property "${name}" to object`, obj);
  }
}

/**
 * Remembers the original function on the wrapped function and
 * patches up the prototype.
 *
 * @param wrapped the wrapper function
 * @param original the original function that gets wrapped
 */
function markFunctionWrapped(wrapped, original) {
  try {
    const proto = original.prototype || {};
    wrapped.prototype = original.prototype = proto;
    addNonEnumerableProperty(wrapped, '__sentry_original__', original);
  } catch (o_O) {} // eslint-disable-line no-empty
}

/**
 * This extracts the original function if available.  See
 * `markFunctionWrapped` for more information.
 *
 * @param func the function to unwrap
 * @returns the unwrapped version of the function if available.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function getOriginalFunction(func) {
  return func.__sentry_original__;
}

/**
 * Transforms any `Error` or `Event` into a plain object with all of their enumerable properties, and some of their
 * non-enumerable properties attached.
 *
 * @param value Initial source that we have to transform in order for it to be usable by the serializer
 * @returns An Event or Error turned into an object - or the value argument itself, when value is neither an Event nor
 *  an Error.
 */
function convertToPlainObject(value)

 {
  if ((0,_is_js__WEBPACK_IMPORTED_MODULE_2__/* .isError */ .bJ)(value)) {
    return {
      message: value.message,
      name: value.name,
      stack: value.stack,
      ...getOwnProperties(value),
    };
  } else if ((0,_is_js__WEBPACK_IMPORTED_MODULE_2__/* .isEvent */ .xH)(value)) {
    const newObj

 = {
      type: value.type,
      target: serializeEventTarget(value.target),
      currentTarget: serializeEventTarget(value.currentTarget),
      ...getOwnProperties(value),
    };

    if (typeof CustomEvent !== 'undefined' && (0,_is_js__WEBPACK_IMPORTED_MODULE_2__/* .isInstanceOf */ .tH)(value, CustomEvent)) {
      newObj.detail = value.detail;
    }

    return newObj;
  } else {
    return value;
  }
}

/** Creates a string representation of the target of an `Event` object */
function serializeEventTarget(target) {
  try {
    return (0,_is_js__WEBPACK_IMPORTED_MODULE_2__/* .isElement */ .vq)(target) ? (0,_browser_js__WEBPACK_IMPORTED_MODULE_0__/* .htmlTreeAsString */ .Hd)(target) : Object.prototype.toString.call(target);
  } catch (_oO) {
    return '<unknown>';
  }
}

/** Filters out all but an object's own properties */
function getOwnProperties(obj) {
  if (typeof obj === 'object' && obj !== null) {
    const extractedProps = {};
    for (const property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        extractedProps[property] = (obj )[property];
      }
    }
    return extractedProps;
  } else {
    return {};
  }
}

/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */
function extractExceptionKeysForMessage(exception, maxLength = 40) {
  const keys = Object.keys(convertToPlainObject(exception));
  keys.sort();

  const firstKey = keys[0];

  if (!firstKey) {
    return '[object has no keys]';
  }

  if (firstKey.length >= maxLength) {
    return (0,_string_js__WEBPACK_IMPORTED_MODULE_4__/* .truncate */ .xv)(firstKey, maxLength);
  }

  for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
    const serialized = keys.slice(0, includedKeys).join(', ');
    if (serialized.length > maxLength) {
      continue;
    }
    if (includedKeys === keys.length) {
      return serialized;
    }
    return (0,_string_js__WEBPACK_IMPORTED_MODULE_4__/* .truncate */ .xv)(serialized, maxLength);
  }

  return '';
}

/**
 * Given any object, return a new object having removed all fields whose value was `undefined`.
 * Works recursively on objects and arrays.
 *
 * Attention: This function keeps circular references in the returned object.
 */
function dropUndefinedKeys(inputValue) {
  // This map keeps track of what already visited nodes map to.
  // Our Set - based memoBuilder doesn't work here because we want to the output object to have the same circular
  // references as the input object.
  const memoizationMap = new Map();

  // This function just proxies `_dropUndefinedKeys` to keep the `memoBuilder` out of this function's API
  return _dropUndefinedKeys(inputValue, memoizationMap);
}

function _dropUndefinedKeys(inputValue, memoizationMap) {
  if (isPojo(inputValue)) {
    // If this node has already been visited due to a circular reference, return the object it was mapped to in the new object
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== undefined) {
      return memoVal ;
    }

    const returnValue = {};
    // Store the mapping of this value in case we visit it again, in case of circular data
    memoizationMap.set(inputValue, returnValue);

    for (const key of Object.getOwnPropertyNames(inputValue)) {
      if (typeof inputValue[key] !== 'undefined') {
        returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
      }
    }

    return returnValue ;
  }

  if (Array.isArray(inputValue)) {
    // If this node has already been visited due to a circular reference, return the array it was mapped to in the new object
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== undefined) {
      return memoVal ;
    }

    const returnValue = [];
    // Store the mapping of this value in case we visit it again, in case of circular data
    memoizationMap.set(inputValue, returnValue);

    inputValue.forEach((item) => {
      returnValue.push(_dropUndefinedKeys(item, memoizationMap));
    });

    return returnValue ;
  }

  return inputValue;
}

function isPojo(input) {
  if (!(0,_is_js__WEBPACK_IMPORTED_MODULE_2__/* .isPlainObject */ .Qd)(input)) {
    return false;
  }

  try {
    const name = (Object.getPrototypeOf(input) ).constructor.name;
    return !name || name === 'Object';
  } catch {
    return true;
  }
}

/**
 * Ensure that something is an object.
 *
 * Turns `undefined` and `null` into `String`s and all other primitives into instances of their respective wrapper
 * classes (String, Boolean, Number, etc.). Acts as the identity function on non-primitives.
 *
 * @param wat The subject of the objectification
 * @returns A version of `wat` which can safely be used with `Object` class methods
 */
function objectify(wat) {
  let objectified;
  switch (true) {
    // this will catch both undefined and null
    case wat == undefined:
      objectified = new String(wat);
      break;

    // Though symbols and bigints do have wrapper classes (`Symbol` and `BigInt`, respectively), for whatever reason
    // those classes don't have constructors which can be used with the `new` keyword. We therefore need to cast each as
    // an object in order to wrap it.
    case typeof wat === 'symbol' || typeof wat === 'bigint':
      objectified = Object(wat);
      break;

    // this will catch the remaining primitives: `String`, `Number`, and `Boolean`
    case isPrimitive(wat):
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      objectified = new (wat ).constructor(wat);
      break;

    // by process of elimination, at this point we know that `wat` must already be an object
    default:
      objectified = wat;
      break;
  }
  return objectified;
}


//# sourceMappingURL=object.js.map


/***/ }),

/***/ 30243:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ generateSpanId),
/* harmony export */   e: () => (/* binding */ generateTraceId)
/* harmony export */ });
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44910);


/**
 * Generate a random, valid trace ID.
 */
function generateTraceId() {
  return (0,_misc_js__WEBPACK_IMPORTED_MODULE_0__/* .uuid4 */ .eJ)();
}

/**
 * Generate a random, valid span ID.
 */
function generateSpanId() {
  return (0,_misc_js__WEBPACK_IMPORTED_MODULE_0__/* .uuid4 */ .eJ)().substring(16);
}


//# sourceMappingURL=propagationContext.js.map


/***/ }),

/***/ 20527:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RV: () => (/* binding */ getFramesFromEvent),
/* harmony export */   gd: () => (/* binding */ createStackParser),
/* harmony export */   qQ: () => (/* binding */ getFunctionName),
/* harmony export */   vk: () => (/* binding */ stackParserFromStackParserOptions),
/* harmony export */   yF: () => (/* binding */ UNKNOWN_FUNCTION)
/* harmony export */ });
/* unused harmony export stripSentryFramesAndReverse */
const STACKTRACE_FRAME_LIMIT = 50;
const UNKNOWN_FUNCTION = '?';
// Used to sanitize webpack (error: *) wrapped stack errors
const WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
const STRIP_FRAME_REGEXP = /captureMessage|captureException/;

/**
 * Creates a stack parser with the supplied line parsers
 *
 * StackFrames are returned in the correct order for Sentry Exception
 * frames and with Sentry SDK internal frames removed from the top and bottom
 *
 */
function createStackParser(...parsers) {
  const sortedParsers = parsers.sort((a, b) => a[0] - b[0]).map(p => p[1]);

  return (stack, skipFirstLines = 0, framesToPop = 0) => {
    const frames = [];
    const lines = stack.split('\n');

    for (let i = skipFirstLines; i < lines.length; i++) {
      const line = lines[i] ;
      // Ignore lines over 1kb as they are unlikely to be stack frames.
      // Many of the regular expressions use backtracking which results in run time that increases exponentially with
      // input size. Huge strings can result in hangs/Denial of Service:
      // https://github.com/getsentry/sentry-javascript/issues/2286
      if (line.length > 1024) {
        continue;
      }

      // https://github.com/getsentry/sentry-javascript/issues/5459
      // Remove webpack (error: *) wrappers
      const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, '$1') : line;

      // https://github.com/getsentry/sentry-javascript/issues/7813
      // Skip Error: lines
      if (cleanedLine.match(/\S*Error: /)) {
        continue;
      }

      for (const parser of sortedParsers) {
        const frame = parser(cleanedLine);

        if (frame) {
          frames.push(frame);
          break;
        }
      }

      if (frames.length >= STACKTRACE_FRAME_LIMIT + framesToPop) {
        break;
      }
    }

    return stripSentryFramesAndReverse(frames.slice(framesToPop));
  };
}

/**
 * Gets a stack parser implementation from Options.stackParser
 * @see Options
 *
 * If options contains an array of line parsers, it is converted into a parser
 */
function stackParserFromStackParserOptions(stackParser) {
  if (Array.isArray(stackParser)) {
    return createStackParser(...stackParser);
  }
  return stackParser;
}

/**
 * Removes Sentry frames from the top and bottom of the stack if present and enforces a limit of max number of frames.
 * Assumes stack input is ordered from top to bottom and returns the reverse representation so call site of the
 * function that caused the crash is the last frame in the array.
 * @hidden
 */
function stripSentryFramesAndReverse(stack) {
  if (!stack.length) {
    return [];
  }

  const localStack = Array.from(stack);

  // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
  if (/sentryWrapped/.test(getLastStackFrame(localStack).function || '')) {
    localStack.pop();
  }

  // Reversing in the middle of the procedure allows us to just pop the values off the stack
  localStack.reverse();

  // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
  if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || '')) {
    localStack.pop();

    // When using synthetic events, we will have a 2 levels deep stack, as `new Error('Sentry syntheticException')`
    // is produced within the scope itself, making it:
    //
    //   Sentry.captureException()
    //   scope.captureException()
    //
    // instead of just the top `Sentry` call itself.
    // This forces us to possibly strip an additional frame in the exact same was as above.
    if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || '')) {
      localStack.pop();
    }
  }

  return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map(frame => ({
    ...frame,
    filename: frame.filename || getLastStackFrame(localStack).filename,
    function: frame.function || UNKNOWN_FUNCTION,
  }));
}

function getLastStackFrame(arr) {
  return arr[arr.length - 1] || {};
}

const defaultFunctionName = '<anonymous>';

/**
 * Safely extract function name from itself
 */
function getFunctionName(fn) {
  try {
    if (!fn || typeof fn !== 'function') {
      return defaultFunctionName;
    }
    return fn.name || defaultFunctionName;
  } catch (e) {
    // Just accessing custom props in some Selenium environments
    // can cause a "Permission denied" exception (see raven-js#495).
    return defaultFunctionName;
  }
}

/**
 * Get's stack frames from an event without needing to check for undefined properties.
 */
function getFramesFromEvent(event) {
  const exception = event.exception;

  if (exception) {
    const frames = [];
    try {
      // @ts-expect-error Object could be undefined
      exception.values.forEach(value => {
        // @ts-expect-error Value could be undefined
        if (value.stacktrace.frames) {
          // @ts-expect-error Value could be undefined
          frames.push(...value.stacktrace.frames);
        }
      });
      return frames;
    } catch (_oO) {
      return undefined;
    }
  }
  return undefined;
}


//# sourceMappingURL=stacktrace.js.map


/***/ }),

/***/ 2323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xr: () => (/* binding */ stringMatchesSomePattern),
/* harmony export */   gt: () => (/* binding */ safeJoin),
/* harmony export */   nC: () => (/* binding */ snipLine),
/* harmony export */   xv: () => (/* binding */ truncate)
/* harmony export */ });
/* unused harmony export isMatchingPattern */
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30690);


/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string (0 = unlimited)
 * @returns string Encoded
 */
function truncate(str, max = 0) {
  if (typeof str !== 'string' || max === 0) {
    return str;
  }
  return str.length <= max ? str : `${str.slice(0, max)}...`;
}

/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function snipLine(line, colno) {
  let newLine = line;
  const lineLength = newLine.length;
  if (lineLength <= 150) {
    return newLine;
  }
  if (colno > lineLength) {
    // eslint-disable-next-line no-param-reassign
    colno = lineLength;
  }

  let start = Math.max(colno - 60, 0);
  if (start < 5) {
    start = 0;
  }

  let end = Math.min(start + 140, lineLength);
  if (end > lineLength - 5) {
    end = lineLength;
  }
  if (end === lineLength) {
    start = Math.max(end - 140, 0);
  }

  newLine = newLine.slice(start, end);
  if (start > 0) {
    newLine = `'{snip} ${newLine}`;
  }
  if (end < lineLength) {
    newLine += ' {snip}';
  }

  return newLine;
}

/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
function safeJoin(input, delimiter) {
  if (!Array.isArray(input)) {
    return '';
  }

  const output = [];
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    try {
      // This is a hack to fix a Vue3-specific bug that causes an infinite loop of
      // console warnings. This happens when a Vue template is rendered with
      // an undeclared variable, which we try to stringify, ultimately causing
      // Vue to issue another warning which repeats indefinitely.
      // see: https://github.com/getsentry/sentry-javascript/pull/8981
      if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isVueViewModel */ .L2)(value)) {
        output.push('[VueViewModel]');
      } else {
        output.push(String(value));
      }
    } catch (e) {
      output.push('[value cannot be serialized]');
    }
  }

  return output.join(delimiter);
}

/**
 * Checks if the given value matches a regex or string
 *
 * @param value The string to test
 * @param pattern Either a regex or a string against which `value` will be matched
 * @param requireExactStringMatch If true, `value` must match `pattern` exactly. If false, `value` will match
 * `pattern` if it contains `pattern`. Only applies to string-type patterns.
 */
function isMatchingPattern(
  value,
  pattern,
  requireExactStringMatch = false,
) {
  if (!(0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(value)) {
    return false;
  }

  if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isRegExp */ .gd)(pattern)) {
    return pattern.test(value);
  }
  if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(pattern)) {
    return requireExactStringMatch ? value === pattern : value.includes(pattern);
  }

  return false;
}

/**
 * Test the given string against an array of strings and regexes. By default, string matching is done on a
 * substring-inclusion basis rather than a strict equality basis
 *
 * @param testString The string to test
 * @param patterns The patterns against which to test the string
 * @param requireExactStringMatch If true, `testString` must match one of the given string patterns exactly in order to
 * count. If false, `testString` will match a string pattern if it contains that pattern.
 * @returns
 */
function stringMatchesSomePattern(
  testString,
  patterns = [],
  requireExactStringMatch = false,
) {
  return patterns.some(pattern => isMatchingPattern(testString, pattern, requireExactStringMatch));
}


//# sourceMappingURL=string.js.map


/***/ }),

/***/ 90519:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k3: () => (/* binding */ browserPerformanceTimeOrigin),
/* harmony export */   lu: () => (/* binding */ dateTimestampInSeconds),
/* harmony export */   zf: () => (/* binding */ timestampInSeconds)
/* harmony export */ });
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92575);


const ONE_SECOND_IN_MS = 1000;

/**
 * A partial definition of the [Performance Web API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Performance}
 * for accessing a high-resolution monotonic clock.
 */

/**
 * Returns a timestamp in seconds since the UNIX epoch using the Date API.
 */
function dateTimestampInSeconds() {
  return Date.now() / ONE_SECOND_IN_MS;
}

/**
 * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
 * support the API.
 *
 * Wrapping the native API works around differences in behavior from different browsers.
 */
function createUnixTimestampInSecondsFunc() {
  const { performance } = _worldwide_js__WEBPACK_IMPORTED_MODULE_0__/* .GLOBAL_OBJ */ .O ;
  if (!performance?.now) {
    return dateTimestampInSeconds;
  }

  // Some browser and environments don't have a timeOrigin, so we fallback to
  // using Date.now() to compute the starting time.
  const approxStartingTimeOrigin = Date.now() - performance.now();
  const timeOrigin = performance.timeOrigin == undefined ? approxStartingTimeOrigin : performance.timeOrigin;

  // performance.now() is a monotonic clock, which means it starts at 0 when the process begins. To get the current
  // wall clock time (actual UNIX timestamp), we need to add the starting time origin and the current time elapsed.
  //
  // TODO: This does not account for the case where the monotonic clock that powers performance.now() drifts from the
  // wall clock time, which causes the returned timestamp to be inaccurate. We should investigate how to detect and
  // correct for this.
  // See: https://github.com/getsentry/sentry-javascript/issues/2590
  // See: https://github.com/mdn/content/issues/4713
  // See: https://dev.to/noamr/when-a-millisecond-is-not-a-millisecond-3h6
  return () => {
    return (timeOrigin + performance.now()) / ONE_SECOND_IN_MS;
  };
}

/**
 * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
 * availability of the Performance API.
 *
 * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
 * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
 * skew can grow to arbitrary amounts like days, weeks or months.
 * See https://github.com/getsentry/sentry-javascript/issues/2590.
 */
const timestampInSeconds = createUnixTimestampInSecondsFunc();

/**
 * Cached result of getBrowserTimeOrigin.
 */
let cachedTimeOrigin;

/**
 * Gets the time origin and the mode used to determine it.
 */
function getBrowserTimeOrigin() {
  // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
  // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
  // data as reliable if they are within a reasonable threshold of the current time.

  const { performance } = _worldwide_js__WEBPACK_IMPORTED_MODULE_0__/* .GLOBAL_OBJ */ .O ;
  if (!performance?.now) {
    return [undefined, 'none'];
  }

  const threshold = 3600 * 1000;
  const performanceNow = performance.now();
  const dateNow = Date.now();

  // if timeOrigin isn't available set delta to threshold so it isn't used
  const timeOriginDelta = performance.timeOrigin
    ? Math.abs(performance.timeOrigin + performanceNow - dateNow)
    : threshold;
  const timeOriginIsReliable = timeOriginDelta < threshold;

  // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
  // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
  // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
  // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
  // Date API.
  // eslint-disable-next-line deprecation/deprecation
  const navigationStart = performance.timing?.navigationStart;
  const hasNavigationStart = typeof navigationStart === 'number';
  // if navigationStart isn't available set delta to threshold so it isn't used
  const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
  const navigationStartIsReliable = navigationStartDelta < threshold;

  if (timeOriginIsReliable || navigationStartIsReliable) {
    // Use the more reliable time origin
    if (timeOriginDelta <= navigationStartDelta) {
      return [performance.timeOrigin, 'timeOrigin'];
    } else {
      return [navigationStart, 'navigationStart'];
    }
  }

  // Either both timeOrigin and navigationStart are skewed or neither is available, fallback to Date.
  return [dateNow, 'dateNow'];
}

/**
 * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
 * performance API is available.
 */
function browserPerformanceTimeOrigin() {
  if (!cachedTimeOrigin) {
    cachedTimeOrigin = getBrowserTimeOrigin();
  }

  return cachedTimeOrigin[0];
}


//# sourceMappingURL=time.js.map


/***/ }),

/***/ 8190:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MI: () => (/* binding */ TRACEPARENT_REGEXP),
/* harmony export */   TC: () => (/* binding */ generateSentryTraceHeader),
/* harmony export */   kM: () => (/* binding */ propagationContextFromHeaders)
/* harmony export */ });
/* unused harmony export extractTraceparentData */
/* harmony import */ var _utils_parseSampleRate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91773);
/* harmony import */ var _baggage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8922);
/* harmony import */ var _propagationContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30243);




// eslint-disable-next-line @sentry-internal/sdk/no-regexp-constructor -- RegExp is used for readability here
const TRACEPARENT_REGEXP = new RegExp(
  '^[ \\t]*' + // whitespace
    '([0-9a-f]{32})?' + // trace_id
    '-?([0-9a-f]{16})?' + // span_id
    '-?([01])?' + // sampled
    '[ \\t]*$', // whitespace
);

/**
 * Extract transaction context data from a `sentry-trace` header.
 *
 * @param traceparent Traceparent string
 *
 * @returns Object containing data from the header, or undefined if traceparent string is malformed
 */
function extractTraceparentData(traceparent) {
  if (!traceparent) {
    return undefined;
  }

  const matches = traceparent.match(TRACEPARENT_REGEXP);
  if (!matches) {
    return undefined;
  }

  let parentSampled;
  if (matches[3] === '1') {
    parentSampled = true;
  } else if (matches[3] === '0') {
    parentSampled = false;
  }

  return {
    traceId: matches[1],
    parentSampled,
    parentSpanId: matches[2],
  };
}

/**
 * Create a propagation context from incoming headers or
 * creates a minimal new one if the headers are undefined.
 */
function propagationContextFromHeaders(
  sentryTrace,
  baggage,
) {
  const traceparentData = extractTraceparentData(sentryTrace);
  const dynamicSamplingContext = (0,_baggage_js__WEBPACK_IMPORTED_MODULE_1__/* .baggageHeaderToDynamicSamplingContext */ .yD)(baggage);

  if (!traceparentData?.traceId) {
    return {
      traceId: (0,_propagationContext_js__WEBPACK_IMPORTED_MODULE_2__/* .generateTraceId */ .e)(),
      sampleRand: Math.random(),
    };
  }

  const sampleRand = getSampleRandFromTraceparentAndDsc(traceparentData, dynamicSamplingContext);

  // The sample_rand on the DSC needs to be generated based on traceparent + baggage.
  if (dynamicSamplingContext) {
    dynamicSamplingContext.sample_rand = sampleRand.toString();
  }

  const { traceId, parentSpanId, parentSampled } = traceparentData;

  return {
    traceId,
    parentSpanId,
    sampled: parentSampled,
    dsc: dynamicSamplingContext || {}, // If we have traceparent data but no DSC it means we are not head of trace and we must freeze it
    sampleRand,
  };
}

/**
 * Create sentry-trace header from span context values.
 */
function generateSentryTraceHeader(
  traceId = (0,_propagationContext_js__WEBPACK_IMPORTED_MODULE_2__/* .generateTraceId */ .e)(),
  spanId = (0,_propagationContext_js__WEBPACK_IMPORTED_MODULE_2__/* .generateSpanId */ .Z)(),
  sampled,
) {
  let sampledString = '';
  if (sampled !== undefined) {
    sampledString = sampled ? '-1' : '-0';
  }
  return `${traceId}-${spanId}${sampledString}`;
}

/**
 * Given any combination of an incoming trace, generate a sample rand based on its defined semantics.
 *
 * Read more: https://develop.sentry.dev/sdk/telemetry/traces/#propagated-random-value
 */
function getSampleRandFromTraceparentAndDsc(
  traceparentData,
  dsc,
) {
  // When there is an incoming sample rand use it.
  const parsedSampleRand = (0,_utils_parseSampleRate_js__WEBPACK_IMPORTED_MODULE_0__/* .parseSampleRate */ .i)(dsc?.sample_rand);
  if (parsedSampleRand !== undefined) {
    return parsedSampleRand;
  }

  // Otherwise, if there is an incoming sampling decision + sample rate, generate a sample rand that would lead to the same sampling decision.
  const parsedSampleRate = (0,_utils_parseSampleRate_js__WEBPACK_IMPORTED_MODULE_0__/* .parseSampleRate */ .i)(dsc?.sample_rate);
  if (parsedSampleRate && traceparentData?.parentSampled !== undefined) {
    return traceparentData.parentSampled
      ? // Returns a sample rand with positive sampling decision [0, sampleRate)
        Math.random() * parsedSampleRate
      : // Returns a sample rand with negative sampling decision [sampleRate, 1)
        parsedSampleRate + Math.random() * (1 - parsedSampleRate);
  } else {
    // If nothing applies, return a random sample rand.
    return Math.random();
  }
}


//# sourceMappingURL=tracing.js.map


/***/ }),

/***/ 21472:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ SDK_VERSION)
/* harmony export */ });
// This is a magic string replaced by rollup

const SDK_VERSION = "9.5.0" ;


//# sourceMappingURL=version.js.map


/***/ }),

/***/ 92575:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ GLOBAL_OBJ)
/* harmony export */ });
/** Internal global with common properties and Sentry extensions  */

/** Get's the global object for the current JavaScript runtime */
const GLOBAL_OBJ = globalThis ;


//# sourceMappingURL=worldwide.js.map


/***/ }),

/***/ 54704:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ hasSpansEnabled)
/* harmony export */ });
/* unused harmony export hasTracingEnabled */
/* harmony import */ var _currentScopes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57968);


// Treeshakable guard to remove all code related to tracing

/**
 * Determines if span recording is currently enabled.
 *
 * Spans are recorded when at least one of `tracesSampleRate` and `tracesSampler`
 * is defined in the SDK config. This function does not make any assumption about
 * sampling decisions, it only checks if the SDK is configured to record spans.
 *
 * Important: This function only determines if span recording is enabled. Trace
 * continuation and propagation is separately controlled and not covered by this function.
 * If this function returns `false`, traces can still be propagated (which is what
 * we refer to by "Tracing without Performance")
 * @see https://develop.sentry.dev/sdk/telemetry/traces/tracing-without-performance/
 *
 * @param maybeOptions An SDK options object to be passed to this function.
 * If this option is not provided, the function will use the current client's options.
 */
function hasSpansEnabled(
  maybeOptions,
) {
  if (typeof __SENTRY_TRACING__ === 'boolean' && !__SENTRY_TRACING__) {
    return false;
  }

  const options = maybeOptions || (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__/* .getClient */ .KU)()?.getOptions();
  return (
    !!options &&
    // Note: This check is `!= null`, meaning "nullish". `0` is not "nullish", `undefined` and `null` are. (This comment was brought to you by 15 minutes of questioning life)
    (options.tracesSampleRate != null || !!options.tracesSampler)
  );
}

/**
 * @see JSDoc of `hasSpansEnabled`
 * @deprecated Use `hasSpansEnabled` instead, which is a more accurately named version of this function.
 * This function will be removed in the next major version of the SDK.
 */
// TODO(v10): Remove this export
const hasTracingEnabled = (/* unused pure expression or super */ null && (hasSpansEnabled));


//# sourceMappingURL=hasSpansEnabled.js.map


/***/ }),

/***/ 45734:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ merge)
/* harmony export */ });
/**
 * Shallow merge two objects.
 * Does not mutate the passed in objects.
 * Undefined/empty values in the merge object will overwrite existing values.
 *
 * By default, this merges 2 levels deep.
 */
function merge(initialObj, mergeObj, levels = 2) {
  // If the merge value is not an object, or we have no merge levels left,
  // we just set the value to the merge value
  if (!mergeObj || typeof mergeObj !== 'object' || levels <= 0) {
    return mergeObj;
  }

  // If the merge object is an empty object, and the initial object is not undefined, we return the initial object
  if (initialObj && Object.keys(mergeObj).length === 0) {
    return initialObj;
  }

  // Clone object
  const output = { ...initialObj };

  // Merge values into output, resursively
  for (const key in mergeObj) {
    if (Object.prototype.hasOwnProperty.call(mergeObj, key)) {
      output[key] = merge(output[key], mergeObj[key], levels - 1);
    }
  }

  return output;
}


//# sourceMappingURL=merge.js.map


/***/ }),

/***/ 91773:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ parseSampleRate)
/* harmony export */ });
/**
 * Parse a sample rate from a given value.
 * This will either return a boolean or number sample rate, if the sample rate is valid (between 0 and 1).
 * If a string is passed, we try to convert it to a number.
 *
 * Any invalid sample rate will return `undefined`.
 */
function parseSampleRate(sampleRate) {
  if (typeof sampleRate === 'boolean') {
    return Number(sampleRate);
  }

  const rate = typeof sampleRate === 'string' ? parseFloat(sampleRate) : sampleRate;
  if (typeof rate !== 'number' || isNaN(rate) || rate < 0 || rate > 1) {
    return undefined;
  }

  return rate;
}


//# sourceMappingURL=parseSampleRate.js.map


/***/ }),

/***/ 8251:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ applySdkMetadata)
/* harmony export */ });
/* harmony import */ var _utils_hoist_version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21472);


/**
 * A builder for the SDK metadata in the options for the SDK initialization.
 *
 * Note: This function is identical to `buildMetadata` in Remix and NextJS and SvelteKit.
 * We don't extract it for bundle size reasons.
 * @see https://github.com/getsentry/sentry-javascript/pull/7404
 * @see https://github.com/getsentry/sentry-javascript/pull/4196
 *
 * If you make changes to this function consider updating the others as well.
 *
 * @param options SDK options object that gets mutated
 * @param names list of package names
 */
function applySdkMetadata(options, name, names = [name], source = 'npm') {
  const metadata = options._metadata || {};

  if (!metadata.sdk) {
    metadata.sdk = {
      name: `sentry.javascript.${name}`,
      packages: names.map(name => ({
        name: `${source}:@sentry/${name}`,
        version: _utils_hoist_version_js__WEBPACK_IMPORTED_MODULE_0__/* .SDK_VERSION */ .M,
      })),
      version: _utils_hoist_version_js__WEBPACK_IMPORTED_MODULE_0__/* .SDK_VERSION */ .M,
    };
  }

  options._metadata = metadata;
}


//# sourceMappingURL=sdkMetadata.js.map


/***/ }),

/***/ 70333:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ _getSpanForScope),
/* harmony export */   r: () => (/* binding */ _setSpanForScope)
/* harmony export */ });
/* harmony import */ var _utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40873);


const SCOPE_SPAN_FIELD = '_sentrySpan';

/**
 * Set the active span for a given scope.
 * NOTE: This should NOT be used directly, but is only used internally by the trace methods.
 */
function _setSpanForScope(scope, span) {
  if (span) {
    (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__/* .addNonEnumerableProperty */ .my)(scope , SCOPE_SPAN_FIELD, span);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete (scope )[SCOPE_SPAN_FIELD];
  }
}

/**
 * Get the active span for a given scope.
 * NOTE: This should NOT be used directly, but is only used internally by the trace methods.
 */
function _getSpanForScope(scope) {
  return scope[SCOPE_SPAN_FIELD];
}


//# sourceMappingURL=spanOnScope.js.map


/***/ }),

/***/ 5915:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bk: () => (/* binding */ getActiveSpan),
/* harmony export */   CC: () => (/* binding */ TRACE_FLAG_NONE),
/* harmony export */   Ck: () => (/* binding */ spanToTransactionTraceContext),
/* harmony export */   Hu: () => (/* binding */ addChildSpanToSpan),
/* harmony export */   Qh: () => (/* binding */ spanToTraceHeader),
/* harmony export */   VS: () => (/* binding */ removeChildSpanFromSpan),
/* harmony export */   aO: () => (/* binding */ TRACE_FLAG_SAMPLED),
/* harmony export */   cI: () => (/* binding */ spanTimeInputToSeconds),
/* harmony export */   et: () => (/* binding */ spanToJSON),
/* harmony export */   kX: () => (/* binding */ spanToTraceContext),
/* harmony export */   pK: () => (/* binding */ spanIsSampled),
/* harmony export */   uU: () => (/* binding */ convertSpanLinksForEnvelope),
/* harmony export */   xO: () => (/* binding */ getSpanDescendants),
/* harmony export */   xl: () => (/* binding */ showSpanDropWarning),
/* harmony export */   yW: () => (/* binding */ getStatusMessage),
/* harmony export */   zQ: () => (/* binding */ updateSpanName),
/* harmony export */   zU: () => (/* binding */ getRootSpan)
/* harmony export */ });
/* harmony import */ var _asyncContext_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92328);
/* harmony import */ var _carrier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95200);
/* harmony import */ var _currentScopes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57968);
/* harmony import */ var _semanticAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74611);
/* harmony import */ var _tracing_spanstatus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91135);
/* harmony import */ var _tracing_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88728);
/* harmony import */ var _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5602);
/* harmony import */ var _utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40873);
/* harmony import */ var _utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30243);
/* harmony import */ var _utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90519);
/* harmony import */ var _utils_hoist_tracing_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8190);
/* harmony import */ var _spanOnScope_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70333);













// These are aligned with OpenTelemetry trace flags
const TRACE_FLAG_NONE = 0x0;
const TRACE_FLAG_SAMPLED = 0x1;

let hasShownSpanDropWarning = false;

/**
 * Convert a span to a trace context, which can be sent as the `trace` context in an event.
 * By default, this will only include trace_id, span_id & parent_span_id.
 * If `includeAllData` is true, it will also include data, op, status & origin.
 */
function spanToTransactionTraceContext(span) {
  const { spanId: span_id, traceId: trace_id } = span.spanContext();
  const { data, op, parent_span_id, status, origin, links } = spanToJSON(span);

  return (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_7__/* .dropUndefinedKeys */ .Ce)({
    parent_span_id,
    span_id,
    trace_id,
    data,
    op,
    status,
    origin,
    links,
  });
}

/**
 * Convert a span to a trace context, which can be sent as the `trace` context in a non-transaction event.
 */
function spanToTraceContext(span) {
  const { spanId, traceId: trace_id, isRemote } = span.spanContext();

  // If the span is remote, we use a random/virtual span as span_id to the trace context,
  // and the remote span as parent_span_id
  const parent_span_id = isRemote ? spanId : spanToJSON(span).parent_span_id;
  const scope = (0,_tracing_utils_js__WEBPACK_IMPORTED_MODULE_5__/* .getCapturedScopesOnSpan */ .L)(span).scope;

  const span_id = isRemote ? scope?.getPropagationContext().propagationSpanId || (0,_utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_8__/* .generateSpanId */ .Z)() : spanId;

  return (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_7__/* .dropUndefinedKeys */ .Ce)({
    parent_span_id,
    span_id,
    trace_id,
  });
}

/**
 * Convert a Span to a Sentry trace header.
 */
function spanToTraceHeader(span) {
  const { traceId, spanId } = span.spanContext();
  const sampled = spanIsSampled(span);
  return (0,_utils_hoist_tracing_js__WEBPACK_IMPORTED_MODULE_10__/* .generateSentryTraceHeader */ .TC)(traceId, spanId, sampled);
}

/**
 *  Converts the span links array to a flattened version to be sent within an envelope.
 *
 *  If the links array is empty, it returns `undefined` so the empty value can be dropped before it's sent.
 */
function convertSpanLinksForEnvelope(links) {
  if (links && links.length > 0) {
    return links.map(({ context: { spanId, traceId, traceFlags, ...restContext }, attributes }) => ({
      span_id: spanId,
      trace_id: traceId,
      sampled: traceFlags === TRACE_FLAG_SAMPLED,
      attributes,
      ...restContext,
    }));
  } else {
    return undefined;
  }
}

/**
 * Convert a span time input into a timestamp in seconds.
 */
function spanTimeInputToSeconds(input) {
  if (typeof input === 'number') {
    return ensureTimestampInSeconds(input);
  }

  if (Array.isArray(input)) {
    // See {@link HrTime} for the array-based time format
    return input[0] + input[1] / 1e9;
  }

  if (input instanceof Date) {
    return ensureTimestampInSeconds(input.getTime());
  }

  return (0,_utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_9__/* .timestampInSeconds */ .zf)();
}

/**
 * Converts a timestamp to second, if it was in milliseconds, or keeps it as second.
 */
function ensureTimestampInSeconds(timestamp) {
  const isMs = timestamp > 9999999999;
  return isMs ? timestamp / 1000 : timestamp;
}

/**
 * Convert a span to a JSON representation.
 */
// Note: Because of this, we currently have a circular type dependency (which we opted out of in package.json).
// This is not avoidable as we need `spanToJSON` in `spanUtils.ts`, which in turn is needed by `span.ts` for backwards compatibility.
// And `spanToJSON` needs the Span class from `span.ts` to check here.
function spanToJSON(span) {
  if (spanIsSentrySpan(span)) {
    return span.getSpanJSON();
  }

  const { spanId: span_id, traceId: trace_id } = span.spanContext();

  // Handle a span from @opentelemetry/sdk-base-trace's `Span` class
  if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
    const { attributes, startTime, name, endTime, parentSpanId, status, links } = span;

    return (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_7__/* .dropUndefinedKeys */ .Ce)({
      span_id,
      trace_id,
      data: attributes,
      description: name,
      parent_span_id: parentSpanId,
      start_timestamp: spanTimeInputToSeconds(startTime),
      // This is [0,0] by default in OTEL, in which case we want to interpret this as no end time
      timestamp: spanTimeInputToSeconds(endTime) || undefined,
      status: getStatusMessage(status),
      op: attributes[_semanticAttributes_js__WEBPACK_IMPORTED_MODULE_3__/* .SEMANTIC_ATTRIBUTE_SENTRY_OP */ .uT],
      origin: attributes[_semanticAttributes_js__WEBPACK_IMPORTED_MODULE_3__/* .SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */ .JD] ,
      links: convertSpanLinksForEnvelope(links),
    });
  }

  // Finally, at least we have `spanContext()`....
  // This should not actually happen in reality, but we need to handle it for type safety.
  return {
    span_id,
    trace_id,
    start_timestamp: 0,
    data: {},
  };
}

function spanIsOpenTelemetrySdkTraceBaseSpan(span) {
  const castSpan = span ;
  return !!castSpan.attributes && !!castSpan.startTime && !!castSpan.name && !!castSpan.endTime && !!castSpan.status;
}

/** Exported only for tests. */

/**
 * Sadly, due to circular dependency checks we cannot actually import the Span class here and check for instanceof.
 * :( So instead we approximate this by checking if it has the `getSpanJSON` method.
 */
function spanIsSentrySpan(span) {
  return typeof (span ).getSpanJSON === 'function';
}

/**
 * Returns true if a span is sampled.
 * In most cases, you should just use `span.isRecording()` instead.
 * However, this has a slightly different semantic, as it also returns false if the span is finished.
 * So in the case where this distinction is important, use this method.
 */
function spanIsSampled(span) {
  // We align our trace flags with the ones OpenTelemetry use
  // So we also check for sampled the same way they do.
  const { traceFlags } = span.spanContext();
  return traceFlags === TRACE_FLAG_SAMPLED;
}

/** Get the status message to use for a JSON representation of a span. */
function getStatusMessage(status) {
  if (!status || status.code === _tracing_spanstatus_js__WEBPACK_IMPORTED_MODULE_4__/* .SPAN_STATUS_UNSET */ .a3) {
    return undefined;
  }

  if (status.code === _tracing_spanstatus_js__WEBPACK_IMPORTED_MODULE_4__/* .SPAN_STATUS_OK */ .F3) {
    return 'ok';
  }

  return status.message || 'unknown_error';
}

const CHILD_SPANS_FIELD = '_sentryChildSpans';
const ROOT_SPAN_FIELD = '_sentryRootSpan';

/**
 * Adds an opaque child span reference to a span.
 */
function addChildSpanToSpan(span, childSpan) {
  // We store the root span reference on the child span
  // We need this for `getRootSpan()` to work
  const rootSpan = span[ROOT_SPAN_FIELD] || span;
  (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_7__/* .addNonEnumerableProperty */ .my)(childSpan , ROOT_SPAN_FIELD, rootSpan);

  // We store a list of child spans on the parent span
  // We need this for `getSpanDescendants()` to work
  if (span[CHILD_SPANS_FIELD]) {
    span[CHILD_SPANS_FIELD].add(childSpan);
  } else {
    (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_7__/* .addNonEnumerableProperty */ .my)(span, CHILD_SPANS_FIELD, new Set([childSpan]));
  }
}

/** This is only used internally by Idle Spans. */
function removeChildSpanFromSpan(span, childSpan) {
  if (span[CHILD_SPANS_FIELD]) {
    span[CHILD_SPANS_FIELD].delete(childSpan);
  }
}

/**
 * Returns an array of the given span and all of its descendants.
 */
function getSpanDescendants(span) {
  const resultSet = new Set();

  function addSpanChildren(span) {
    // This exit condition is required to not infinitely loop in case of a circular dependency.
    if (resultSet.has(span)) {
      return;
      // We want to ignore unsampled spans (e.g. non recording spans)
    } else if (spanIsSampled(span)) {
      resultSet.add(span);
      const childSpans = span[CHILD_SPANS_FIELD] ? Array.from(span[CHILD_SPANS_FIELD]) : [];
      for (const childSpan of childSpans) {
        addSpanChildren(childSpan);
      }
    }
  }

  addSpanChildren(span);

  return Array.from(resultSet);
}

/**
 * Returns the root span of a given span.
 */
function getRootSpan(span) {
  return span[ROOT_SPAN_FIELD] || span;
}

/**
 * Returns the currently active span.
 */
function getActiveSpan() {
  const carrier = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_1__/* .getMainCarrier */ .EU)();
  const acs = (0,_asyncContext_index_js__WEBPACK_IMPORTED_MODULE_0__/* .getAsyncContextStrategy */ .h)(carrier);
  if (acs.getActiveSpan) {
    return acs.getActiveSpan();
  }

  return (0,_spanOnScope_js__WEBPACK_IMPORTED_MODULE_11__/* ._getSpanForScope */ .f)((0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_2__/* .getCurrentScope */ .o5)());
}

/**
 * Logs a warning once if `beforeSendSpan` is used to drop spans.
 */
function showSpanDropWarning() {
  if (!hasShownSpanDropWarning) {
    (0,_utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_6__/* .consoleSandbox */ .pq)(() => {
      // eslint-disable-next-line no-console
      console.warn(
        '[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.',
      );
    });
    hasShownSpanDropWarning = true;
  }
}

/**
 * Updates the name of the given span and ensures that the span name is not
 * overwritten by the Sentry SDK.
 *
 * Use this function instead of `span.updateName()` if you want to make sure that
 * your name is kept. For some spans, for example root `http.server` spans the
 * Sentry SDK would otherwise overwrite the span name with a high-quality name
 * it infers when the span ends.
 *
 * Use this function in server code or when your span is started on the server
 * and on the client (browser). If you only update a span name on the client,
 * you can also use `span.updateName()` the SDK does not overwrite the name.
 *
 * @param span - The span to update the name of.
 * @param name - The name to set on the span.
 */
function updateSpanName(span, name) {
  span.updateName(name);
  span.setAttributes({
    [_semanticAttributes_js__WEBPACK_IMPORTED_MODULE_3__/* .SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */ .i_]: 'custom',
    [_semanticAttributes_js__WEBPACK_IMPORTED_MODULE_3__/* .SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME */ .Le]: name,
  });
}


//# sourceMappingURL=spanUtils.js.map


/***/ })

}]);