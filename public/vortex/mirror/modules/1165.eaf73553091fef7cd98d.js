"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[1165],{

/***/ 91165:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BrowserClient: () => (/* reexport */ BrowserClient),
  OpenFeatureIntegrationHook: () => (/* reexport */ OpenFeatureIntegrationHook),
  SDK_VERSION: () => (/* reexport */ version/* SDK_VERSION */.M),
  SEMANTIC_ATTRIBUTE_SENTRY_OP: () => (/* reexport */ semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_OP */.uT),
  SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: () => (/* reexport */ semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD),
  SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: () => (/* reexport */ semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE */.sy),
  SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: () => (/* reexport */ semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */.i_),
  Scope: () => (/* reexport */ esm_scope/* Scope */.H),
  WINDOW: () => (/* reexport */ WINDOW),
  addBreadcrumb: () => (/* reexport */ breadcrumbs/* addBreadcrumb */.Z),
  addEventProcessor: () => (/* reexport */ addEventProcessor),
  addIntegration: () => (/* reexport */ addIntegration),
  breadcrumbsIntegration: () => (/* reexport */ breadcrumbsIntegration),
  browserApiErrorsIntegration: () => (/* reexport */ browserApiErrorsIntegration),
  browserProfilingIntegration: () => (/* reexport */ browserProfilingIntegration),
  browserSessionIntegration: () => (/* reexport */ browserSessionIntegration),
  browserTracingIntegration: () => (/* reexport */ browserTracingIntegration),
  buildLaunchDarklyFlagUsedHandler: () => (/* reexport */ buildLaunchDarklyFlagUsedHandler),
  captureConsoleIntegration: () => (/* reexport */ captureConsoleIntegration),
  captureEvent: () => (/* reexport */ captureEvent),
  captureException: () => (/* reexport */ captureException),
  captureFeedback: () => (/* reexport */ captureFeedback),
  captureMessage: () => (/* reexport */ captureMessage),
  captureSession: () => (/* reexport */ captureSession),
  chromeStackLineParser: () => (/* reexport */ chromeStackLineParser),
  close: () => (/* reexport */ exports_close),
  contextLinesIntegration: () => (/* reexport */ contextLinesIntegration),
  continueTrace: () => (/* reexport */ trace/* continueTrace */.V4),
  createTransport: () => (/* reexport */ createTransport),
  createUserFeedbackEnvelope: () => (/* reexport */ createUserFeedbackEnvelope),
  dedupeIntegration: () => (/* reexport */ dedupeIntegration),
  defaultRequestInstrumentationOptions: () => (/* reexport */ defaultRequestInstrumentationOptions),
  defaultStackLineParsers: () => (/* reexport */ defaultStackLineParsers),
  defaultStackParser: () => (/* reexport */ defaultStackParser),
  endSession: () => (/* reexport */ endSession),
  eventFiltersIntegration: () => (/* reexport */ eventFiltersIntegration),
  eventFromException: () => (/* reexport */ eventFromException),
  eventFromMessage: () => (/* reexport */ eventFromMessage),
  exceptionFromError: () => (/* reexport */ exceptionFromError),
  extraErrorDataIntegration: () => (/* reexport */ extraErrorDataIntegration),
  featureFlagsIntegration: () => (/* reexport */ featureFlagsIntegration),
  feedbackAsyncIntegration: () => (/* reexport */ feedbackAsyncIntegration),
  feedbackIntegration: () => (/* reexport */ feedbackSyncIntegration),
  feedbackSyncIntegration: () => (/* reexport */ feedbackSyncIntegration),
  flush: () => (/* reexport */ flush),
  forceLoad: () => (/* reexport */ forceLoad),
  functionToStringIntegration: () => (/* reexport */ functionToStringIntegration),
  geckoStackLineParser: () => (/* reexport */ geckoStackLineParser),
  getActiveSpan: () => (/* reexport */ spanUtils/* getActiveSpan */.Bk),
  getClient: () => (/* reexport */ currentScopes/* getClient */.KU),
  getCurrentScope: () => (/* reexport */ currentScopes/* getCurrentScope */.o5),
  getDefaultIntegrations: () => (/* reexport */ getDefaultIntegrations),
  getFeedback: () => (/* reexport */ getFeedback),
  getGlobalScope: () => (/* reexport */ currentScopes/* getGlobalScope */.m6),
  getIsolationScope: () => (/* reexport */ currentScopes/* getIsolationScope */.rm),
  getReplay: () => (/* reexport */ getReplay),
  getRootSpan: () => (/* reexport */ spanUtils/* getRootSpan */.zU),
  getSpanDescendants: () => (/* reexport */ spanUtils/* getSpanDescendants */.xO),
  getSpanStatusFromHttpCode: () => (/* reexport */ spanstatus/* getSpanStatusFromHttpCode */.AJ),
  globalHandlersIntegration: () => (/* reexport */ globalHandlersIntegration),
  graphqlClientIntegration: () => (/* reexport */ graphqlClientIntegration),
  httpClientIntegration: () => (/* reexport */ httpClientIntegration),
  httpContextIntegration: () => (/* reexport */ httpContextIntegration),
  inboundFiltersIntegration: () => (/* reexport */ inboundFiltersIntegration),
  init: () => (/* reexport */ init),
  instrumentOutgoingRequests: () => (/* reexport */ instrumentOutgoingRequests),
  isInitialized: () => (/* reexport */ isInitialized),
  lastEventId: () => (/* reexport */ lastEventId),
  launchDarklyIntegration: () => (/* reexport */ launchDarklyIntegration),
  lazyLoadIntegration: () => (/* reexport */ lazyLoadIntegration),
  linkedErrorsIntegration: () => (/* reexport */ linkedErrorsIntegration),
  makeBrowserOfflineTransport: () => (/* reexport */ makeBrowserOfflineTransport),
  makeFetchTransport: () => (/* reexport */ makeFetchTransport),
  makeMultiplexedTransport: () => (/* reexport */ makeMultiplexedTransport),
  moduleMetadataIntegration: () => (/* reexport */ moduleMetadataIntegration),
  onLoad: () => (/* reexport */ onLoad),
  openFeatureIntegration: () => (/* reexport */ openFeatureIntegration),
  opera10StackLineParser: () => (/* reexport */ opera10StackLineParser),
  opera11StackLineParser: () => (/* reexport */ opera11StackLineParser),
  parameterize: () => (/* reexport */ parameterize),
  registerSpanErrorInstrumentation: () => (/* reexport */ registerSpanErrorInstrumentation),
  replayCanvasIntegration: () => (/* reexport */ replayCanvasIntegration),
  replayIntegration: () => (/* reexport */ replayIntegration),
  reportingObserverIntegration: () => (/* reexport */ reportingObserverIntegration),
  rewriteFramesIntegration: () => (/* reexport */ rewriteFramesIntegration),
  sendFeedback: () => (/* reexport */ sendFeedback),
  setContext: () => (/* reexport */ setContext),
  setCurrentClient: () => (/* reexport */ setCurrentClient),
  setExtra: () => (/* reexport */ setExtra),
  setExtras: () => (/* reexport */ setExtras),
  setHttpStatus: () => (/* reexport */ spanstatus/* setHttpStatus */.N8),
  setMeasurement: () => (/* reexport */ tracing_measurement/* setMeasurement */.X),
  setTag: () => (/* reexport */ setTag),
  setTags: () => (/* reexport */ setTags),
  setUser: () => (/* reexport */ setUser),
  showReportDialog: () => (/* reexport */ showReportDialog),
  spanToBaggageHeader: () => (/* reexport */ tracing_dynamicSamplingContext/* spanToBaggageHeader */.HW),
  spanToJSON: () => (/* reexport */ spanUtils/* spanToJSON */.et),
  spanToTraceHeader: () => (/* reexport */ spanUtils/* spanToTraceHeader */.Qh),
  spotlightBrowserIntegration: () => (/* reexport */ spotlightBrowserIntegration),
  startBrowserTracingNavigationSpan: () => (/* reexport */ startBrowserTracingNavigationSpan),
  startBrowserTracingPageLoadSpan: () => (/* reexport */ startBrowserTracingPageLoadSpan),
  startInactiveSpan: () => (/* reexport */ trace/* startInactiveSpan */.Uk),
  startNewTrace: () => (/* reexport */ trace/* startNewTrace */.Y7),
  startSession: () => (/* reexport */ startSession),
  startSpan: () => (/* reexport */ trace/* startSpan */.Lk),
  startSpanManual: () => (/* reexport */ trace/* startSpanManual */.nV),
  statsigIntegration: () => (/* reexport */ statsigIntegration),
  suppressTracing: () => (/* reexport */ trace/* suppressTracing */.M1),
  thirdPartyErrorFilterIntegration: () => (/* reexport */ thirdPartyErrorFilterIntegration),
  unleashIntegration: () => (/* reexport */ unleashIntegration),
  updateSpanName: () => (/* reexport */ spanUtils/* updateSpanName */.zQ),
  winjsStackLineParser: () => (/* reexport */ winjsStackLineParser),
  withActiveSpan: () => (/* reexport */ trace/* withActiveSpan */.hb),
  withIsolationScope: () => (/* reexport */ currentScopes/* withIsolationScope */.rB),
  withScope: () => (/* reexport */ currentScopes/* withScope */.v4),
  zodErrorsIntegration: () => (/* reexport */ zodErrorsIntegration)
});

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/currentScopes.js
var currentScopes = __webpack_require__(57968);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/debug-build.js
var debug_build = __webpack_require__(26674);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/session.js
var esm_session = __webpack_require__(59328);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/logger.js
var logger = __webpack_require__(5602);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js
var worldwide = __webpack_require__(92575);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/constants.js
var constants = __webpack_require__(7313);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/is.js
var is = __webpack_require__(30690);
;// ./node_modules/@sentry/core/build/esm/utils-hoist/syncpromise.js


/* eslint-disable @typescript-eslint/no-explicit-any */

/** SyncPromise internal states */
var States; (function (States) {
  /** Pending */
  const PENDING = 0; States[States["PENDING"] = PENDING] = "PENDING";
  /** Resolved / OK */
  const RESOLVED = 1; States[States["RESOLVED"] = RESOLVED] = "RESOLVED";
  /** Rejected / Error */
  const REJECTED = 2; States[States["REJECTED"] = REJECTED] = "REJECTED";
})(States || (States = {}));

// Overloads so we can call resolvedSyncPromise without arguments and generic argument

/**
 * Creates a resolved sync promise.
 *
 * @param value the value to resolve the promise with
 * @returns the resolved sync promise
 */
function resolvedSyncPromise(value) {
  return new SyncPromise(resolve => {
    resolve(value);
  });
}

/**
 * Creates a rejected sync promise.
 *
 * @param value the value to reject the promise with
 * @returns the rejected sync promise
 */
function rejectedSyncPromise(reason) {
  return new SyncPromise((_, reject) => {
    reject(reason);
  });
}

/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */
class SyncPromise {

   constructor(executor) {
    this._state = States.PENDING;
    this._handlers = [];

    this._runExecutor(executor);
  }

  /** @inheritdoc */
   then(
    onfulfilled,
    onrejected,
  ) {
    return new SyncPromise((resolve, reject) => {
      this._handlers.push([
        false,
        result => {
          if (!onfulfilled) {
            // TODO: ¯\_(ツ)_/¯
            // TODO: FIXME
            resolve(result );
          } else {
            try {
              resolve(onfulfilled(result));
            } catch (e) {
              reject(e);
            }
          }
        },
        reason => {
          if (!onrejected) {
            reject(reason);
          } else {
            try {
              resolve(onrejected(reason));
            } catch (e) {
              reject(e);
            }
          }
        },
      ]);
      this._executeHandlers();
    });
  }

  /** @inheritdoc */
   catch(
    onrejected,
  ) {
    return this.then(val => val, onrejected);
  }

  /** @inheritdoc */
   finally(onfinally) {
    return new SyncPromise((resolve, reject) => {
      let val;
      let isRejected;

      return this.then(
        value => {
          isRejected = false;
          val = value;
          if (onfinally) {
            onfinally();
          }
        },
        reason => {
          isRejected = true;
          val = reason;
          if (onfinally) {
            onfinally();
          }
        },
      ).then(() => {
        if (isRejected) {
          reject(val);
          return;
        }

        resolve(val );
      });
    });
  }

  /** Excute the resolve/reject handlers. */
   _executeHandlers() {
    if (this._state === States.PENDING) {
      return;
    }

    const cachedHandlers = this._handlers.slice();
    this._handlers = [];

    cachedHandlers.forEach(handler => {
      if (handler[0]) {
        return;
      }

      if (this._state === States.RESOLVED) {
        handler[1](this._value );
      }

      if (this._state === States.REJECTED) {
        handler[2](this._value);
      }

      handler[0] = true;
    });
  }

  /** Run the executor for the SyncPromise. */
   _runExecutor(executor) {
    const setResult = (state, value) => {
      if (this._state !== States.PENDING) {
        return;
      }

      if ((0,is/* isThenable */.Qg)(value)) {
        void (value ).then(resolve, reject);
        return;
      }

      this._state = state;
      this._value = value;

      this._executeHandlers();
    };

    const resolve = (value) => {
      setResult(States.RESOLVED, value);
    };

    const reject = (reason) => {
      setResult(States.REJECTED, reason);
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
}


//# sourceMappingURL=syncpromise.js.map

;// ./node_modules/@sentry/core/build/esm/eventProcessors.js





/**
 * Process an array of event processors, returning the processed event (or `null` if the event was dropped).
 */
function notifyEventProcessors(
  processors,
  event,
  hint,
  index = 0,
) {
  return new SyncPromise((resolve, reject) => {
    const processor = processors[index];
    if (event === null || typeof processor !== 'function') {
      resolve(event);
    } else {
      const result = processor({ ...event }, hint) ;

      debug_build/* DEBUG_BUILD */.T && processor.id && result === null && logger/* logger */.vF.log(`Event processor "${processor.id}" dropped event`);

      if ((0,is/* isThenable */.Qg)(result)) {
        void result
          .then(final => notifyEventProcessors(processors, final, hint, index + 1).then(resolve))
          .then(null, reject);
      } else {
        void notifyEventProcessors(processors, result, hint, index + 1)
          .then(resolve)
          .then(null, reject);
      }
    }
  });
}


//# sourceMappingURL=eventProcessors.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/scope.js
var esm_scope = __webpack_require__(94988);
;// ./node_modules/@sentry/core/build/esm/utils-hoist/debug-ids.js


let parsedStackResults;
let lastKeysCount;
let cachedFilenameDebugIds;

/**
 * Returns a map of filenames to debug identifiers.
 */
function getFilenameToDebugIdMap(stackParser) {
  const debugIdMap = worldwide/* GLOBAL_OBJ */.O._sentryDebugIds;
  if (!debugIdMap) {
    return {};
  }

  const debugIdKeys = Object.keys(debugIdMap);

  // If the count of registered globals hasn't changed since the last call, we
  // can just return the cached result.
  if (cachedFilenameDebugIds && debugIdKeys.length === lastKeysCount) {
    return cachedFilenameDebugIds;
  }

  lastKeysCount = debugIdKeys.length;

  // Build a map of filename -> debug_id.
  cachedFilenameDebugIds = debugIdKeys.reduce((acc, stackKey) => {
    if (!parsedStackResults) {
      parsedStackResults = {};
    }

    const result = parsedStackResults[stackKey];

    if (result) {
      acc[result[0]] = result[1];
    } else {
      const parsedStack = stackParser(stackKey);

      for (let i = parsedStack.length - 1; i >= 0; i--) {
        const stackFrame = parsedStack[i];
        const filename = stackFrame?.filename;
        const debugId = debugIdMap[stackKey];

        if (filename && debugId) {
          acc[filename] = debugId;
          parsedStackResults[stackKey] = [filename, debugId];
          break;
        }
      }
    }

    return acc;
  }, {});

  return cachedFilenameDebugIds;
}

/**
 * Returns a list of debug images for the given resources.
 */
function getDebugImagesForResources(
  stackParser,
  resource_paths,
) {
  const filenameDebugIdMap = getFilenameToDebugIdMap(stackParser);

  if (!filenameDebugIdMap) {
    return [];
  }

  const images = [];
  for (const path of resource_paths) {
    if (path && filenameDebugIdMap[path]) {
      images.push({
        type: 'sourcemap',
        code_file: path,
        debug_id: filenameDebugIdMap[path] ,
      });
    }
  }

  return images;
}


//# sourceMappingURL=debug-ids.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/misc.js
var misc = __webpack_require__(44910);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/normalize.js
var normalize = __webpack_require__(51071);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/string.js
var string = __webpack_require__(2323);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/time.js
var utils_hoist_time = __webpack_require__(90519);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js
var tracing_dynamicSamplingContext = __webpack_require__(31158);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/object.js
var object = __webpack_require__(40873);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils/merge.js
var merge = __webpack_require__(45734);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils/spanUtils.js
var spanUtils = __webpack_require__(5915);
;// ./node_modules/@sentry/core/build/esm/utils/applyScopeDataToEvent.js





/**
 * Applies data from the scope to the event and runs all event processors on it.
 */
function applyScopeDataToEvent(event, data) {
  const { fingerprint, span, breadcrumbs, sdkProcessingMetadata } = data;

  // Apply general data
  applyDataToEvent(event, data);

  // We want to set the trace context for normal events only if there isn't already
  // a trace context on the event. There is a product feature in place where we link
  // errors with transaction and it relies on that.
  if (span) {
    applySpanToEvent(event, span);
  }

  applyFingerprintToEvent(event, fingerprint);
  applyBreadcrumbsToEvent(event, breadcrumbs);
  applySdkMetadataToEvent(event, sdkProcessingMetadata);
}

/** Merge data of two scopes together. */
function mergeScopeData(data, mergeData) {
  const {
    extra,
    tags,
    user,
    contexts,
    level,
    sdkProcessingMetadata,
    breadcrumbs,
    fingerprint,
    eventProcessors,
    attachments,
    propagationContext,
    transactionName,
    span,
  } = mergeData;

  mergeAndOverwriteScopeData(data, 'extra', extra);
  mergeAndOverwriteScopeData(data, 'tags', tags);
  mergeAndOverwriteScopeData(data, 'user', user);
  mergeAndOverwriteScopeData(data, 'contexts', contexts);

  data.sdkProcessingMetadata = (0,merge/* merge */.h)(data.sdkProcessingMetadata, sdkProcessingMetadata, 2);

  if (level) {
    data.level = level;
  }

  if (transactionName) {
    data.transactionName = transactionName;
  }

  if (span) {
    data.span = span;
  }

  if (breadcrumbs.length) {
    data.breadcrumbs = [...data.breadcrumbs, ...breadcrumbs];
  }

  if (fingerprint.length) {
    data.fingerprint = [...data.fingerprint, ...fingerprint];
  }

  if (eventProcessors.length) {
    data.eventProcessors = [...data.eventProcessors, ...eventProcessors];
  }

  if (attachments.length) {
    data.attachments = [...data.attachments, ...attachments];
  }

  data.propagationContext = { ...data.propagationContext, ...propagationContext };
}

/**
 * Merges certain scope data. Undefined values will overwrite any existing values.
 * Exported only for tests.
 */
function mergeAndOverwriteScopeData

(data, prop, mergeVal) {
  data[prop] = (0,merge/* merge */.h)(data[prop], mergeVal, 1);
}

function applyDataToEvent(event, data) {
  const { extra, tags, user, contexts, level, transactionName } = data;

  const cleanedExtra = (0,object/* dropUndefinedKeys */.Ce)(extra);
  if (Object.keys(cleanedExtra).length) {
    event.extra = { ...cleanedExtra, ...event.extra };
  }

  const cleanedTags = (0,object/* dropUndefinedKeys */.Ce)(tags);
  if (Object.keys(cleanedTags).length) {
    event.tags = { ...cleanedTags, ...event.tags };
  }

  const cleanedUser = (0,object/* dropUndefinedKeys */.Ce)(user);
  if (Object.keys(cleanedUser).length) {
    event.user = { ...cleanedUser, ...event.user };
  }

  const cleanedContexts = (0,object/* dropUndefinedKeys */.Ce)(contexts);
  if (Object.keys(cleanedContexts).length) {
    event.contexts = { ...cleanedContexts, ...event.contexts };
  }

  if (level) {
    event.level = level;
  }

  // transaction events get their `transaction` from the root span name
  if (transactionName && event.type !== 'transaction') {
    event.transaction = transactionName;
  }
}

function applyBreadcrumbsToEvent(event, breadcrumbs) {
  const mergedBreadcrumbs = [...(event.breadcrumbs || []), ...breadcrumbs];
  event.breadcrumbs = mergedBreadcrumbs.length ? mergedBreadcrumbs : undefined;
}

function applySdkMetadataToEvent(event, sdkProcessingMetadata) {
  event.sdkProcessingMetadata = {
    ...event.sdkProcessingMetadata,
    ...sdkProcessingMetadata,
  };
}

function applySpanToEvent(event, span) {
  event.contexts = {
    trace: (0,spanUtils/* spanToTraceContext */.kX)(span),
    ...event.contexts,
  };

  event.sdkProcessingMetadata = {
    dynamicSamplingContext: (0,tracing_dynamicSamplingContext/* getDynamicSamplingContextFromSpan */.k1)(span),
    ...event.sdkProcessingMetadata,
  };

  const rootSpan = (0,spanUtils/* getRootSpan */.zU)(span);
  const transactionName = (0,spanUtils/* spanToJSON */.et)(rootSpan).description;
  if (transactionName && !event.transaction && event.type === 'transaction') {
    event.transaction = transactionName;
  }
}

/**
 * Applies fingerprint from the scope to the event if there's one,
 * uses message if there's one instead or get rid of empty fingerprint
 */
function applyFingerprintToEvent(event, fingerprint) {
  // Make sure it's an array first and we actually have something in place
  event.fingerprint = event.fingerprint
    ? Array.isArray(event.fingerprint)
      ? event.fingerprint
      : [event.fingerprint]
    : [];

  // If we have something on the scope, then merge it with event
  if (fingerprint) {
    event.fingerprint = event.fingerprint.concat(fingerprint);
  }

  // If we have no data at all, remove empty array default
  if (!event.fingerprint.length) {
    delete event.fingerprint;
  }
}


//# sourceMappingURL=applyScopeDataToEvent.js.map

;// ./node_modules/@sentry/core/build/esm/utils/prepareEvent.js











/**
 * This type makes sure that we get either a CaptureContext, OR an EventHint.
 * It does not allow mixing them, which could lead to unexpected outcomes, e.g. this is disallowed:
 * { user: { id: '123' }, mechanism: { handled: false } }
 */

/**
 * Adds common information to events.
 *
 * The information includes release and environment from `options`,
 * breadcrumbs and context (extra, tags and user) from the scope.
 *
 * Information that is already present in the event is never overwritten. For
 * nested objects, such as the context, keys are merged.
 *
 * @param event The original event.
 * @param hint May contain additional information about the original exception.
 * @param scope A scope containing event metadata.
 * @returns A new event with more information.
 * @hidden
 */
function prepareEvent(
  options,
  event,
  hint,
  scope,
  client,
  isolationScope,
) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1000 } = options;
  const prepared = {
    ...event,
    event_id: event.event_id || hint.event_id || (0,misc/* uuid4 */.eJ)(),
    timestamp: event.timestamp || (0,utils_hoist_time/* dateTimestampInSeconds */.lu)(),
  };
  const integrations = hint.integrations || options.integrations.map(i => i.name);

  applyClientOptions(prepared, options);
  applyIntegrationsMetadata(prepared, integrations);

  if (client) {
    client.emit('applyFrameMetadata', event);
  }

  // Only put debug IDs onto frames for error events.
  if (event.type === undefined) {
    applyDebugIds(prepared, options.stackParser);
  }

  // If we have scope given to us, use it as the base for further modifications.
  // This allows us to prevent unnecessary copying of data if `captureContext` is not provided.
  const finalScope = getFinalScope(scope, hint.captureContext);

  if (hint.mechanism) {
    (0,misc/* addExceptionMechanism */.M6)(prepared, hint.mechanism);
  }

  const clientEventProcessors = client ? client.getEventProcessors() : [];

  // This should be the last thing called, since we want that
  // {@link Scope.addEventProcessor} gets the finished prepared event.
  // Merge scope data together
  const data = (0,currentScopes/* getGlobalScope */.m6)().getScopeData();

  if (isolationScope) {
    const isolationData = isolationScope.getScopeData();
    mergeScopeData(data, isolationData);
  }

  if (finalScope) {
    const finalScopeData = finalScope.getScopeData();
    mergeScopeData(data, finalScopeData);
  }

  const attachments = [...(hint.attachments || []), ...data.attachments];
  if (attachments.length) {
    hint.attachments = attachments;
  }

  applyScopeDataToEvent(prepared, data);

  const eventProcessors = [
    ...clientEventProcessors,
    // Run scope event processors _after_ all other processors
    ...data.eventProcessors,
  ];

  const result = notifyEventProcessors(eventProcessors, prepared, hint);

  return result.then(evt => {
    if (evt) {
      // We apply the debug_meta field only after all event processors have ran, so that if any event processors modified
      // file names (e.g.the RewriteFrames integration) the filename -> debug ID relationship isn't destroyed.
      // This should not cause any PII issues, since we're only moving data that is already on the event and not adding
      // any new data
      applyDebugMeta(evt);
    }

    if (typeof normalizeDepth === 'number' && normalizeDepth > 0) {
      return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
    }
    return evt;
  });
}

/**
 * Enhances event using the client configuration.
 * It takes care of all "static" values like environment, release and `dist`,
 * as well as truncating overly long values.
 *
 * Only exported for tests.
 *
 * @param event event instance to be enhanced
 */
function applyClientOptions(event, options) {
  const { environment, release, dist, maxValueLength = 250 } = options;

  // empty strings do not make sense for environment, release, and dist
  // so we handle them the same as if they were not provided
  event.environment = event.environment || environment || constants/* DEFAULT_ENVIRONMENT */.U;

  if (!event.release && release) {
    event.release = release;
  }

  if (!event.dist && dist) {
    event.dist = dist;
  }

  if (event.message) {
    event.message = (0,string/* truncate */.xv)(event.message, maxValueLength);
  }

  const exception = event.exception?.values?.[0];
  if (exception?.value) {
    exception.value = (0,string/* truncate */.xv)(exception.value, maxValueLength);
  }

  const request = event.request;
  if (request?.url) {
    request.url = (0,string/* truncate */.xv)(request.url, maxValueLength);
  }
}

/**
 * Puts debug IDs into the stack frames of an error event.
 */
function applyDebugIds(event, stackParser) {
  // Build a map of filename -> debug_id
  const filenameDebugIdMap = getFilenameToDebugIdMap(stackParser);

  event.exception?.values?.forEach(exception => {
    exception.stacktrace?.frames?.forEach(frame => {
      if (frame.filename) {
        frame.debug_id = filenameDebugIdMap[frame.filename];
      }
    });
  });
}

/**
 * Moves debug IDs from the stack frames of an error event into the debug_meta field.
 */
function applyDebugMeta(event) {
  // Extract debug IDs and filenames from the stack frames on the event.
  const filenameDebugIdMap = {};
  event.exception?.values?.forEach(exception => {
    exception.stacktrace?.frames?.forEach(frame => {
      if (frame.debug_id) {
        if (frame.abs_path) {
          filenameDebugIdMap[frame.abs_path] = frame.debug_id;
        } else if (frame.filename) {
          filenameDebugIdMap[frame.filename] = frame.debug_id;
        }
        delete frame.debug_id;
      }
    });
  });

  if (Object.keys(filenameDebugIdMap).length === 0) {
    return;
  }

  // Fill debug_meta information
  event.debug_meta = event.debug_meta || {};
  event.debug_meta.images = event.debug_meta.images || [];
  const images = event.debug_meta.images;
  Object.entries(filenameDebugIdMap).forEach(([filename, debug_id]) => {
    images.push({
      type: 'sourcemap',
      code_file: filename,
      debug_id,
    });
  });
}

/**
 * This function adds all used integrations to the SDK info in the event.
 * @param event The event that will be filled with all integrations.
 */
function applyIntegrationsMetadata(event, integrationNames) {
  if (integrationNames.length > 0) {
    event.sdk = event.sdk || {};
    event.sdk.integrations = [...(event.sdk.integrations || []), ...integrationNames];
  }
}

/**
 * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
 * Normalized keys:
 * - `breadcrumbs.data`
 * - `user`
 * - `contexts`
 * - `extra`
 * @param event Event
 * @returns Normalized event
 */
function normalizeEvent(event, depth, maxBreadth) {
  if (!event) {
    return null;
  }

  const normalized = {
    ...event,
    ...(event.breadcrumbs && {
      breadcrumbs: event.breadcrumbs.map(b => ({
        ...b,
        ...(b.data && {
          data: (0,normalize/* normalize */.S8)(b.data, depth, maxBreadth),
        }),
      })),
    }),
    ...(event.user && {
      user: (0,normalize/* normalize */.S8)(event.user, depth, maxBreadth),
    }),
    ...(event.contexts && {
      contexts: (0,normalize/* normalize */.S8)(event.contexts, depth, maxBreadth),
    }),
    ...(event.extra && {
      extra: (0,normalize/* normalize */.S8)(event.extra, depth, maxBreadth),
    }),
  };

  // event.contexts.trace stores information about a Transaction. Similarly,
  // event.spans[] stores information about child Spans. Given that a
  // Transaction is conceptually a Span, normalization should apply to both
  // Transactions and Spans consistently.
  // For now the decision is to skip normalization of Transactions and Spans,
  // so this block overwrites the normalized event to add back the original
  // Transaction information prior to normalization.
  if (event.contexts?.trace && normalized.contexts) {
    normalized.contexts.trace = event.contexts.trace;

    // event.contexts.trace.data may contain circular/dangerous data so we need to normalize it
    if (event.contexts.trace.data) {
      normalized.contexts.trace.data = (0,normalize/* normalize */.S8)(event.contexts.trace.data, depth, maxBreadth);
    }
  }

  // event.spans[].data may contain circular/dangerous data so we need to normalize it
  if (event.spans) {
    normalized.spans = event.spans.map(span => {
      return {
        ...span,
        ...(span.data && {
          data: (0,normalize/* normalize */.S8)(span.data, depth, maxBreadth),
        }),
      };
    });
  }

  // event.contexts.flags (FeatureFlagContext) stores context for our feature
  // flag integrations. It has a greater nesting depth than our other typed
  // Contexts, so we re-normalize with a fixed depth of 3 here. We do not want
  // to skip this in case of conflicting, user-provided context.
  if (event.contexts?.flags && normalized.contexts) {
    normalized.contexts.flags = (0,normalize/* normalize */.S8)(event.contexts.flags, 3, maxBreadth);
  }

  return normalized;
}

function getFinalScope(scope, captureContext) {
  if (!captureContext) {
    return scope;
  }

  const finalScope = scope ? scope.clone() : new esm_scope/* Scope */.H();
  finalScope.update(captureContext);
  return finalScope;
}

/**
 * Parse either an `EventHint` directly, or convert a `CaptureContext` to an `EventHint`.
 * This is used to allow to update method signatures that used to accept a `CaptureContext` but should now accept an `EventHint`.
 */
function parseEventHintOrCaptureContext(
  hint,
) {
  if (!hint) {
    return undefined;
  }

  // If you pass a Scope or `() => Scope` as CaptureContext, we just return this as captureContext
  if (hintIsScopeOrFunction(hint)) {
    return { captureContext: hint };
  }

  if (hintIsScopeContext(hint)) {
    return {
      captureContext: hint,
    };
  }

  return hint;
}

function hintIsScopeOrFunction(hint) {
  return hint instanceof esm_scope/* Scope */.H || typeof hint === 'function';
}

const captureContextKeys = [
  'user',
  'level',
  'extra',
  'contexts',
  'tags',
  'fingerprint',
  'propagationContext',
] ;

function hintIsScopeContext(hint) {
  return Object.keys(hint).some(key => captureContextKeys.includes(key ));
}


//# sourceMappingURL=prepareEvent.js.map

;// ./node_modules/@sentry/core/build/esm/exports.js
/* unused harmony import specifier */ var getCurrentScope;
/* unused harmony import specifier */ var getClient;
/* unused harmony import specifier */ var withIsolationScope;
/* unused harmony import specifier */ var DEBUG_BUILD;
/* unused harmony import specifier */ var isThenable;
/* unused harmony import specifier */ var exports_logger;
/* unused harmony import specifier */ var uuid4;
/* unused harmony import specifier */ var timestampInSeconds;










/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception The exception to capture.
 * @param hint Optional additional data to attach to the Sentry event.
 * @returns the id of the captured Sentry event.
 */
function captureException(exception, hint) {
  return (0,currentScopes/* getCurrentScope */.o5)().captureException(exception, parseEventHintOrCaptureContext(hint));
}

/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param captureContext Define the level of the message or pass in additional data to attach to the message.
 * @returns the id of the captured message.
 */
function captureMessage(message, captureContext) {
  // This is necessary to provide explicit scopes upgrade, without changing the original
  // arity of the `captureMessage(message, level)` method.
  const level = typeof captureContext === 'string' ? captureContext : undefined;
  const context = typeof captureContext !== 'string' ? { captureContext } : undefined;
  return (0,currentScopes/* getCurrentScope */.o5)().captureMessage(message, level, context);
}

/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @param hint Optional additional data to attach to the Sentry event.
 * @returns the id of the captured event.
 */
function captureEvent(event, hint) {
  return (0,currentScopes/* getCurrentScope */.o5)().captureEvent(event, hint);
}

/**
 * Sets context data with the given name.
 * @param name of the context
 * @param context Any kind of data. This data will be normalized.
 */
function setContext(name, context) {
  (0,currentScopes/* getIsolationScope */.rm)().setContext(name, context);
}

/**
 * Set an object that will be merged sent as extra data with the event.
 * @param extras Extras object to merge into current context.
 */
function setExtras(extras) {
  (0,currentScopes/* getIsolationScope */.rm)().setExtras(extras);
}

/**
 * Set key:value that will be sent as extra data with the event.
 * @param key String of extra
 * @param extra Any kind of data. This data will be normalized.
 */
function setExtra(key, extra) {
  (0,currentScopes/* getIsolationScope */.rm)().setExtra(key, extra);
}

/**
 * Set an object that will be merged sent as tags data with the event.
 * @param tags Tags context object to merge into current context.
 */
function setTags(tags) {
  (0,currentScopes/* getIsolationScope */.rm)().setTags(tags);
}

/**
 * Set key:value that will be sent as tags data with the event.
 *
 * Can also be used to unset a tag, by passing `undefined`.
 *
 * @param key String key of tag
 * @param value Value of tag
 */
function setTag(key, value) {
  (0,currentScopes/* getIsolationScope */.rm)().setTag(key, value);
}

/**
 * Updates user context information for future events.
 *
 * @param user User context object to be set in the current context. Pass `null` to unset the user.
 */
function setUser(user) {
  (0,currentScopes/* getIsolationScope */.rm)().setUser(user);
}

/**
 * The last error event id of the isolation scope.
 *
 * Warning: This function really returns the last recorded error event id on the current
 * isolation scope. If you call this function after handling a certain error and another error
 * is captured in between, the last one is returned instead of the one you might expect.
 * Also, ids of events that were never sent to Sentry (for example because
 * they were dropped in `beforeSend`) could be returned.
 *
 * @returns The last event id of the isolation scope.
 */
function lastEventId() {
  return (0,currentScopes/* getIsolationScope */.rm)().lastEventId();
}

/**
 * Create a cron monitor check in and send it to Sentry.
 *
 * @param checkIn An object that describes a check in.
 * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
 * to create a monitor automatically when sending a check in.
 */
function captureCheckIn(checkIn, upsertMonitorConfig) {
  const scope = getCurrentScope();
  const client = getClient();
  if (!client) {
    DEBUG_BUILD && exports_logger.warn('Cannot capture check-in. No client defined.');
  } else if (!client.captureCheckIn) {
    DEBUG_BUILD && exports_logger.warn('Cannot capture check-in. Client does not support sending check-ins.');
  } else {
    return client.captureCheckIn(checkIn, upsertMonitorConfig, scope);
  }

  return uuid4();
}

/**
 * Wraps a callback with a cron monitor check in. The check in will be sent to Sentry when the callback finishes.
 *
 * @param monitorSlug The distinct slug of the monitor.
 * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
 * to create a monitor automatically when sending a check in.
 */
function withMonitor(
  monitorSlug,
  callback,
  upsertMonitorConfig,
) {
  const checkInId = captureCheckIn({ monitorSlug, status: 'in_progress' }, upsertMonitorConfig);
  const now = timestampInSeconds();

  function finishCheckIn(status) {
    captureCheckIn({ monitorSlug, status, checkInId, duration: timestampInSeconds() - now });
  }

  return withIsolationScope(() => {
    let maybePromiseResult;
    try {
      maybePromiseResult = callback();
    } catch (e) {
      finishCheckIn('error');
      throw e;
    }

    if (isThenable(maybePromiseResult)) {
      Promise.resolve(maybePromiseResult).then(
        () => {
          finishCheckIn('ok');
        },
        e => {
          finishCheckIn('error');
          throw e;
        },
      );
    } else {
      finishCheckIn('ok');
    }

    return maybePromiseResult;
  });
}

/**
 * Call `flush()` on the current client, if there is one. See {@link Client.flush}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue. Omitting this parameter will cause
 * the client to wait until all events are sent before resolving the promise.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */
async function flush(timeout) {
  const client = (0,currentScopes/* getClient */.KU)();
  if (client) {
    return client.flush(timeout);
  }
  debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.warn('Cannot flush events. No client defined.');
  return Promise.resolve(false);
}

/**
 * Call `close()` on the current client, if there is one. See {@link Client.close}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue before shutting down. Omitting this
 * parameter will cause the client to wait until all events are sent before disabling itself.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */
async function exports_close(timeout) {
  const client = (0,currentScopes/* getClient */.KU)();
  if (client) {
    return client.close(timeout);
  }
  debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.warn('Cannot flush events and disable SDK. No client defined.');
  return Promise.resolve(false);
}

/**
 * Returns true if Sentry has been properly initialized.
 */
function isInitialized() {
  return !!(0,currentScopes/* getClient */.KU)();
}

/** If the SDK is initialized & enabled. */
function isEnabled() {
  const client = (0,currentScopes/* getClient */.KU)();
  return client?.getOptions().enabled !== false && !!client?.getTransport();
}

/**
 * Add an event processor.
 * This will be added to the current isolation scope, ensuring any event that is processed in the current execution
 * context will have the processor applied.
 */
function addEventProcessor(callback) {
  (0,currentScopes/* getIsolationScope */.rm)().addEventProcessor(callback);
}

/**
 * Start a session on the current isolation scope.
 *
 * @param context (optional) additional properties to be applied to the returned session object
 *
 * @returns the new active session
 */
function startSession(context) {
  const isolationScope = (0,currentScopes/* getIsolationScope */.rm)();
  const currentScope = (0,currentScopes/* getCurrentScope */.o5)();

  // Will fetch userAgent if called from browser sdk
  const { userAgent } = worldwide/* GLOBAL_OBJ */.O.navigator || {};

  const session = (0,esm_session/* makeSession */.fj)({
    user: currentScope.getUser() || isolationScope.getUser(),
    ...(userAgent && { userAgent }),
    ...context,
  });

  // End existing session if there's one
  const currentSession = isolationScope.getSession();
  if (currentSession?.status === 'ok') {
    (0,esm_session/* updateSession */.qO)(currentSession, { status: 'exited' });
  }

  endSession();

  // Afterwards we set the new session on the scope
  isolationScope.setSession(session);

  return session;
}

/**
 * End the session on the current isolation scope.
 */
function endSession() {
  const isolationScope = (0,currentScopes/* getIsolationScope */.rm)();
  const currentScope = (0,currentScopes/* getCurrentScope */.o5)();

  const session = currentScope.getSession() || isolationScope.getSession();
  if (session) {
    (0,esm_session/* closeSession */.Vu)(session);
  }
  _sendSessionUpdate();

  // the session is over; take it off of the scope
  isolationScope.setSession();
}

/**
 * Sends the current Session on the scope
 */
function _sendSessionUpdate() {
  const isolationScope = (0,currentScopes/* getIsolationScope */.rm)();
  const client = (0,currentScopes/* getClient */.KU)();
  const session = isolationScope.getSession();
  if (session && client) {
    client.captureSession(session);
  }
}

/**
 * Sends the current session on the scope to Sentry
 *
 * @param end If set the session will be marked as exited and removed from the scope.
 *            Defaults to `false`.
 */
function captureSession(end = false) {
  // both send the update and pull the session from the scope
  if (end) {
    endSession();
    return;
  }

  // only send the update
  _sendSessionUpdate();
}


//# sourceMappingURL=exports.js.map

;// ./node_modules/@sentry/core/build/esm/integration.js




const installedIntegrations = [];

/** Map of integrations assigned to a client */

/**
 * Remove duplicates from the given array, preferring the last instance of any duplicate. Not guaranteed to
 * preserve the order of integrations in the array.
 *
 * @private
 */
function filterDuplicates(integrations) {
  const integrationsByName = {};

  integrations.forEach((currentInstance) => {
    const { name } = currentInstance;

    const existingInstance = integrationsByName[name];

    // We want integrations later in the array to overwrite earlier ones of the same type, except that we never want a
    // default instance to overwrite an existing user instance
    if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
      return;
    }

    integrationsByName[name] = currentInstance;
  });

  return Object.values(integrationsByName);
}

/** Gets integrations to install */
function getIntegrationsToSetup(options) {
  const defaultIntegrations = options.defaultIntegrations || [];
  const userIntegrations = options.integrations;

  // We flag default instances, so that later we can tell them apart from any user-created instances of the same class
  defaultIntegrations.forEach((integration) => {
    integration.isDefaultInstance = true;
  });

  let integrations;

  if (Array.isArray(userIntegrations)) {
    integrations = [...defaultIntegrations, ...userIntegrations];
  } else if (typeof userIntegrations === 'function') {
    const resolvedUserIntegrations = userIntegrations(defaultIntegrations);
    integrations = Array.isArray(resolvedUserIntegrations) ? resolvedUserIntegrations : [resolvedUserIntegrations];
  } else {
    integrations = defaultIntegrations;
  }

  return filterDuplicates(integrations);
}

/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */
function setupIntegrations(client, integrations) {
  const integrationIndex = {};

  integrations.forEach((integration) => {
    // guard against empty provided integrations
    if (integration) {
      setupIntegration(client, integration, integrationIndex);
    }
  });

  return integrationIndex;
}

/**
 * Execute the `afterAllSetup` hooks of the given integrations.
 */
function afterSetupIntegrations(client, integrations) {
  for (const integration of integrations) {
    // guard against empty provided integrations
    if (integration?.afterAllSetup) {
      integration.afterAllSetup(client);
    }
  }
}

/** Setup a single integration.  */
function setupIntegration(client, integration, integrationIndex) {
  if (integrationIndex[integration.name]) {
    debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.log(`Integration skipped because it was already installed: ${integration.name}`);
    return;
  }
  integrationIndex[integration.name] = integration;

  // `setupOnce` is only called the first time
  if (installedIntegrations.indexOf(integration.name) === -1 && typeof integration.setupOnce === 'function') {
    integration.setupOnce();
    installedIntegrations.push(integration.name);
  }

  // `setup` is run for each client
  if (integration.setup && typeof integration.setup === 'function') {
    integration.setup(client);
  }

  if (typeof integration.preprocessEvent === 'function') {
    const callback = integration.preprocessEvent.bind(integration) ;
    client.on('preprocessEvent', (event, hint) => callback(event, hint, client));
  }

  if (typeof integration.processEvent === 'function') {
    const callback = integration.processEvent.bind(integration) ;

    const processor = Object.assign((event, hint) => callback(event, hint, client), {
      id: integration.name,
    });

    client.addEventProcessor(processor);
  }

  debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.log(`Integration installed: ${integration.name}`);
}

/** Add an integration to the current scope's client. */
function addIntegration(integration) {
  const client = (0,currentScopes/* getClient */.KU)();

  if (!client) {
    debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.warn(`Cannot add integration "${integration.name}" because no SDK Client is available.`);
    return;
  }

  client.addIntegration(integration);
}

/**
 * Define an integration function that can be used to create an integration instance.
 * Note that this by design hides the implementation details of the integration, as they are considered internal.
 */
function defineIntegration(fn) {
  return fn;
}


//# sourceMappingURL=integration.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/debug-build.js
var utils_hoist_debug_build = __webpack_require__(41042);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js
var stacktrace = __webpack_require__(20527);
;// ./node_modules/@sentry/core/build/esm/utils-hoist/instrument/handlers.js




// We keep the handlers globally
const handlers = {};
const instrumented = {};

/** Add a handler function. */
function addHandler(type, handler) {
  handlers[type] = handlers[type] || [];
  (handlers[type] ).push(handler);
}

/**
 * Reset all instrumentation handlers.
 * This can be used by tests to ensure we have a clean slate of instrumentation handlers.
 */
function resetInstrumentationHandlers() {
  Object.keys(handlers).forEach(key => {
    handlers[key ] = undefined;
  });
}

/** Maybe run an instrumentation function, unless it was already called. */
function maybeInstrument(type, instrumentFn) {
  if (!instrumented[type]) {
    instrumented[type] = true;
    try {
      instrumentFn();
    } catch (e) {
      utils_hoist_debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.error(`Error while instrumenting ${type}`, e);
    }
  }
}

/** Trigger handlers for a given instrumentation type. */
function triggerHandlers(type, data) {
  const typeHandlers = type && handlers[type];
  if (!typeHandlers) {
    return;
  }

  for (const handler of typeHandlers) {
    try {
      handler(data);
    } catch (e) {
      utils_hoist_debug_build/* DEBUG_BUILD */.T &&
        logger/* logger */.vF.error(
          `Error while triggering instrumentation handler.\nType: ${type}\nName: ${(0,stacktrace/* getFunctionName */.qQ)(handler)}\nError:`,
          e,
        );
    }
  }
}


//# sourceMappingURL=handlers.js.map

;// ./node_modules/@sentry/core/build/esm/utils-hoist/instrument/console.js





/**
 * Add an instrumentation handler for when a console.xxx method is called.
 *
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addConsoleInstrumentationHandler(handler) {
  const type = 'console';
  addHandler(type, handler);
  maybeInstrument(type, instrumentConsole);
}

function instrumentConsole() {
  if (!("console" in worldwide/* GLOBAL_OBJ */.O)) {
    return;
  }

  logger/* CONSOLE_LEVELS */.Ow.forEach(function (level) {
    if (!(level in worldwide/* GLOBAL_OBJ */.O.console)) {
      return;
    }

    (0,object/* fill */.GS)(worldwide/* GLOBAL_OBJ */.O.console, level, function (originalConsoleMethod) {
      logger/* originalConsoleMethods */.Z9[level] = originalConsoleMethod;

      return function (...args) {
        const handlerData = { args, level };
        triggerHandlers('console', handlerData);

        const log = logger/* originalConsoleMethods */.Z9[level];
        log?.apply(worldwide/* GLOBAL_OBJ */.O.console, args);
      };
    });
  });
}


//# sourceMappingURL=console.js.map

;// ./node_modules/@sentry/core/build/esm/utils-hoist/severity.js
/**
 * Converts a string-based level into a `SeverityLevel`, normalizing it along the way.
 *
 * @param level String representation of desired `SeverityLevel`.
 * @returns The `SeverityLevel` corresponding to the given string, or 'log' if the string isn't a valid level.
 */
function severityLevelFromString(level) {
  return (
    level === 'warn' ? 'warning' : ['fatal', 'error', 'warning', 'log', 'info', 'debug'].includes(level) ? level : 'log'
  ) ;
}


//# sourceMappingURL=severity.js.map

;// ./node_modules/@sentry/core/build/esm/integrations/captureconsole.js










const INTEGRATION_NAME = 'CaptureConsole';

const _captureConsoleIntegration = ((options = {}) => {
  const levels = options.levels || logger/* CONSOLE_LEVELS */.Ow;
  const handled = options.handled ?? true;

  return {
    name: INTEGRATION_NAME,
    setup(client) {
      if (!("console" in worldwide/* GLOBAL_OBJ */.O)) {
        return;
      }

      addConsoleInstrumentationHandler(({ args, level }) => {
        if ((0,currentScopes/* getClient */.KU)() !== client || !levels.includes(level)) {
          return;
        }

        consoleHandler(args, level, handled);
      });
    },
  };
}) ;

/**
 * Send Console API calls as Sentry Events.
 */
const captureConsoleIntegration = defineIntegration(_captureConsoleIntegration);

function consoleHandler(args, level, handled) {
  const captureContext = {
    level: severityLevelFromString(level),
    extra: {
      arguments: args,
    },
  };

  (0,currentScopes/* withScope */.v4)(scope => {
    scope.addEventProcessor(event => {
      event.logger = 'console';

      (0,misc/* addExceptionMechanism */.M6)(event, {
        handled,
        type: 'console',
      });

      return event;
    });

    if (level === 'assert') {
      if (!args[0]) {
        const message = `Assertion failed: ${(0,string/* safeJoin */.gt)(args.slice(1), ' ') || 'console.assert'}`;
        scope.setExtra('arguments', args.slice(1));
        captureMessage(message, captureContext);
      }
      return;
    }

    const error = args.find(arg => arg instanceof Error);
    if (error) {
      captureException(error, captureContext);
      return;
    }

    const message = (0,string/* safeJoin */.gt)(args, ' ');
    captureMessage(message, captureContext);
  });
}


//# sourceMappingURL=captureconsole.js.map

;// ./node_modules/@sentry/core/build/esm/feedback.js



/**
 * Send user feedback to Sentry.
 */
function captureFeedback(
  params,
  hint = {},
  scope = (0,currentScopes/* getCurrentScope */.o5)(),
) {
  const { message, name, email, url, source, associatedEventId, tags } = params;

  const feedbackEvent = {
    contexts: {
      feedback: (0,object/* dropUndefinedKeys */.Ce)({
        contact_email: email,
        name,
        message,
        url,
        source,
        associated_event_id: associatedEventId,
      }),
    },
    type: 'feedback',
    level: 'info',
    tags,
  };

  const client = scope?.getClient() || (0,currentScopes/* getClient */.KU)();

  if (client) {
    client.emit('beforeSendFeedback', feedbackEvent, hint);
  }

  const eventId = scope.captureEvent(feedbackEvent, hint);

  return eventId;
}


//# sourceMappingURL=feedback.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/envelope.js
var utils_hoist_envelope = __webpack_require__(87202);
;// ./node_modules/@sentry/core/build/esm/utils-hoist/error.js
/** An error emitted by Sentry SDKs and related utilities. */
class SentryError extends Error {

   constructor(
     message,
    logLevel = 'warn',
  ) {
    super(message);this.message = message;
    this.logLevel = logLevel;
  }
}


//# sourceMappingURL=error.js.map

;// ./node_modules/@sentry/core/build/esm/utils-hoist/promisebuffer.js



/**
 * Creates an new PromiseBuffer object with the specified limit
 * @param limit max number of promises that can be stored in the buffer
 */
function makePromiseBuffer(limit) {
  const buffer = [];

  function isReady() {
    return limit === undefined || buffer.length < limit;
  }

  /**
   * Remove a promise from the queue.
   *
   * @param task Can be any PromiseLike<T>
   * @returns Removed promise.
   */
  function remove(task) {
    return buffer.splice(buffer.indexOf(task), 1)[0] || Promise.resolve(undefined);
  }

  /**
   * Add a promise (representing an in-flight action) to the queue, and set it to remove itself on fulfillment.
   *
   * @param taskProducer A function producing any PromiseLike<T>; In previous versions this used to be `task:
   *        PromiseLike<T>`, but under that model, Promises were instantly created on the call-site and their executor
   *        functions therefore ran immediately. Thus, even if the buffer was full, the action still happened. By
   *        requiring the promise to be wrapped in a function, we can defer promise creation until after the buffer
   *        limit check.
   * @returns The original promise.
   */
  function add(taskProducer) {
    if (!isReady()) {
      return rejectedSyncPromise(new SentryError('Not adding Promise because buffer limit was reached.'));
    }

    // start the task and add its promise to the queue
    const task = taskProducer();
    if (buffer.indexOf(task) === -1) {
      buffer.push(task);
    }
    void task
      .then(() => remove(task))
      // Use `then(null, rejectionHandler)` rather than `catch(rejectionHandler)` so that we can use `PromiseLike`
      // rather than `Promise`. `PromiseLike` doesn't have a `.catch` method, making its polyfill smaller. (ES5 didn't
      // have promises, so TS has to polyfill when down-compiling.)
      .then(null, () =>
        remove(task).then(null, () => {
          // We have to add another catch here because `remove()` starts a new promise chain.
        }),
      );
    return task;
  }

  /**
   * Wait for all promises in the queue to resolve or for timeout to expire, whichever comes first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the queue is still non-empty. Passing `0` (or
   * not passing anything) will make the promise wait as long as it takes for the queue to drain before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if the queue is already empty or drains before the timeout, and
   * `false` otherwise
   */
  function drain(timeout) {
    return new SyncPromise((resolve, reject) => {
      let counter = buffer.length;

      if (!counter) {
        return resolve(true);
      }

      // wait for `timeout` ms and then resolve to `false` (if not cancelled first)
      const capturedSetTimeout = setTimeout(() => {
        if (timeout && timeout > 0) {
          resolve(false);
        }
      }, timeout);

      // if all promises resolve in time, cancel the timer and resolve to `true`
      buffer.forEach(item => {
        void resolvedSyncPromise(item).then(() => {
          if (!--counter) {
            clearTimeout(capturedSetTimeout);
            resolve(true);
          }
        }, reject);
      });
    });
  }

  return {
    $: buffer,
    add,
    drain,
  };
}


//# sourceMappingURL=promisebuffer.js.map

;// ./node_modules/@sentry/core/build/esm/utils-hoist/ratelimit.js
// Intentionally keeping the key broad, as we don't know for sure what rate limit headers get returned from backend

const DEFAULT_RETRY_AFTER = 60 * 1000; // 60 seconds

/**
 * Extracts Retry-After value from the request header or returns default value
 * @param header string representation of 'Retry-After' header
 * @param now current unix timestamp
 *
 */
function parseRetryAfterHeader(header, now = Date.now()) {
  const headerDelay = parseInt(`${header}`, 10);
  if (!isNaN(headerDelay)) {
    return headerDelay * 1000;
  }

  const headerDate = Date.parse(`${header}`);
  if (!isNaN(headerDate)) {
    return headerDate - now;
  }

  return DEFAULT_RETRY_AFTER;
}

/**
 * Gets the time that the given category is disabled until for rate limiting.
 * In case no category-specific limit is set but a general rate limit across all categories is active,
 * that time is returned.
 *
 * @return the time in ms that the category is disabled until or 0 if there's no active rate limit.
 */
function disabledUntil(limits, dataCategory) {
  return limits[dataCategory] || limits.all || 0;
}

/**
 * Checks if a category is rate limited
 */
function isRateLimited(limits, dataCategory, now = Date.now()) {
  return disabledUntil(limits, dataCategory) > now;
}

/**
 * Update ratelimits from incoming headers.
 *
 * @return the updated RateLimits object.
 */
function updateRateLimits(
  limits,
  { statusCode, headers },
  now = Date.now(),
) {
  const updatedRateLimits = {
    ...limits,
  };

  // "The name is case-insensitive."
  // https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
  const rateLimitHeader = headers?.['x-sentry-rate-limits'];
  const retryAfterHeader = headers?.['retry-after'];

  if (rateLimitHeader) {
    /**
     * rate limit headers are of the form
     *     <header>,<header>,..
     * where each <header> is of the form
     *     <retry_after>: <categories>: <scope>: <reason_code>: <namespaces>
     * where
     *     <retry_after> is a delay in seconds
     *     <categories> is the event type(s) (error, transaction, etc) being rate limited and is of the form
     *         <category>;<category>;...
     *     <scope> is what's being limited (org, project, or key) - ignored by SDK
     *     <reason_code> is an arbitrary string like "org_quota" - ignored by SDK
     *     <namespaces> Semicolon-separated list of metric namespace identifiers. Defines which namespace(s) will be affected.
     *         Only present if rate limit applies to the metric_bucket data category.
     */
    for (const limit of rateLimitHeader.trim().split(',')) {
      const [retryAfter, categories, , , namespaces] = limit.split(':', 5) ;
      const headerDelay = parseInt(retryAfter, 10);
      const delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1000; // 60sec default
      if (!categories) {
        updatedRateLimits.all = now + delay;
      } else {
        for (const category of categories.split(';')) {
          if (category === 'metric_bucket') {
            // namespaces will be present when category === 'metric_bucket'
            if (!namespaces || namespaces.split(';').includes('custom')) {
              updatedRateLimits[category] = now + delay;
            }
          } else {
            updatedRateLimits[category] = now + delay;
          }
        }
      }
    }
  } else if (retryAfterHeader) {
    updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
  } else if (statusCode === 429) {
    updatedRateLimits.all = now + 60 * 1000;
  }

  return updatedRateLimits;
}


//# sourceMappingURL=ratelimit.js.map

;// ./node_modules/@sentry/core/build/esm/transports/base.js








const DEFAULT_TRANSPORT_BUFFER_SIZE = 64;

/**
 * Creates an instance of a Sentry `Transport`
 *
 * @param options
 * @param makeRequest
 */
function createTransport(
  options,
  makeRequest,
  buffer = makePromiseBuffer(
    options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE,
  ),
) {
  let rateLimits = {};
  const flush = (timeout) => buffer.drain(timeout);

  function send(envelope) {
    const filteredEnvelopeItems = [];

    // Drop rate limited items from envelope
    (0,utils_hoist_envelope/* forEachEnvelopeItem */.yH)(envelope, (item, type) => {
      const dataCategory = (0,utils_hoist_envelope/* envelopeItemTypeToDataCategory */.zk)(type);
      if (isRateLimited(rateLimits, dataCategory)) {
        options.recordDroppedEvent('ratelimit_backoff', dataCategory);
      } else {
        filteredEnvelopeItems.push(item);
      }
    });

    // Skip sending if envelope is empty after filtering out rate limited events
    if (filteredEnvelopeItems.length === 0) {
      return resolvedSyncPromise({});
    }

    const filteredEnvelope = (0,utils_hoist_envelope/* createEnvelope */.h4)(envelope[0], filteredEnvelopeItems );

    // Creates client report for each item in an envelope
    const recordEnvelopeLoss = (reason) => {
      (0,utils_hoist_envelope/* forEachEnvelopeItem */.yH)(filteredEnvelope, (item, type) => {
        options.recordDroppedEvent(reason, (0,utils_hoist_envelope/* envelopeItemTypeToDataCategory */.zk)(type));
      });
    };

    const requestTask = () =>
      makeRequest({ body: (0,utils_hoist_envelope/* serializeEnvelope */.bN)(filteredEnvelope) }).then(
        response => {
          // We don't want to throw on NOK responses, but we want to at least log them
          if (response.statusCode !== undefined && (response.statusCode < 200 || response.statusCode >= 300)) {
            debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
          }

          rateLimits = updateRateLimits(rateLimits, response);
          return response;
        },
        error => {
          recordEnvelopeLoss('network_error');
          throw error;
        },
      );

    return buffer.add(requestTask).then(
      result => result,
      error => {
        if (error instanceof SentryError) {
          debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.error('Skipped sending event because buffer is full.');
          recordEnvelopeLoss('queue_overflow');
          return resolvedSyncPromise({});
        } else {
          throw error;
        }
      },
    );
  }

  return {
    send,
    flush,
  };
}


//# sourceMappingURL=base.js.map

;// ./node_modules/@sentry/core/build/esm/integrations/dedupe.js





const dedupe_INTEGRATION_NAME = 'Dedupe';

const _dedupeIntegration = (() => {
  let previousEvent;

  return {
    name: dedupe_INTEGRATION_NAME,
    processEvent(currentEvent) {
      // We want to ignore any non-error type events, e.g. transactions or replays
      // These should never be deduped, and also not be compared against as _previousEvent.
      if (currentEvent.type) {
        return currentEvent;
      }

      // Juuust in case something goes wrong
      try {
        if (_shouldDropEvent(currentEvent, previousEvent)) {
          debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.warn('Event dropped due to being a duplicate of previously captured event.');
          return null;
        }
      } catch (_oO) {} // eslint-disable-line no-empty

      return (previousEvent = currentEvent);
    },
  };
}) ;

/**
 * Deduplication filter.
 */
const dedupeIntegration = defineIntegration(_dedupeIntegration);

/** only exported for tests. */
function _shouldDropEvent(currentEvent, previousEvent) {
  if (!previousEvent) {
    return false;
  }

  if (_isSameMessageEvent(currentEvent, previousEvent)) {
    return true;
  }

  if (_isSameExceptionEvent(currentEvent, previousEvent)) {
    return true;
  }

  return false;
}

function _isSameMessageEvent(currentEvent, previousEvent) {
  const currentMessage = currentEvent.message;
  const previousMessage = previousEvent.message;

  // If neither event has a message property, they were both exceptions, so bail out
  if (!currentMessage && !previousMessage) {
    return false;
  }

  // If only one event has a stacktrace, but not the other one, they are not the same
  if ((currentMessage && !previousMessage) || (!currentMessage && previousMessage)) {
    return false;
  }

  if (currentMessage !== previousMessage) {
    return false;
  }

  if (!_isSameFingerprint(currentEvent, previousEvent)) {
    return false;
  }

  if (!_isSameStacktrace(currentEvent, previousEvent)) {
    return false;
  }

  return true;
}

function _isSameExceptionEvent(currentEvent, previousEvent) {
  const previousException = _getExceptionFromEvent(previousEvent);
  const currentException = _getExceptionFromEvent(currentEvent);

  if (!previousException || !currentException) {
    return false;
  }

  if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
    return false;
  }

  if (!_isSameFingerprint(currentEvent, previousEvent)) {
    return false;
  }

  if (!_isSameStacktrace(currentEvent, previousEvent)) {
    return false;
  }

  return true;
}

function _isSameStacktrace(currentEvent, previousEvent) {
  let currentFrames = (0,stacktrace/* getFramesFromEvent */.RV)(currentEvent);
  let previousFrames = (0,stacktrace/* getFramesFromEvent */.RV)(previousEvent);

  // If neither event has a stacktrace, they are assumed to be the same
  if (!currentFrames && !previousFrames) {
    return true;
  }

  // If only one event has a stacktrace, but not the other one, they are not the same
  if ((currentFrames && !previousFrames) || (!currentFrames && previousFrames)) {
    return false;
  }

  currentFrames = currentFrames ;
  previousFrames = previousFrames ;

  // If number of frames differ, they are not the same
  if (previousFrames.length !== currentFrames.length) {
    return false;
  }

  // Otherwise, compare the two
  for (let i = 0; i < previousFrames.length; i++) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const frameA = previousFrames[i];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const frameB = currentFrames[i];

    if (
      frameA.filename !== frameB.filename ||
      frameA.lineno !== frameB.lineno ||
      frameA.colno !== frameB.colno ||
      frameA.function !== frameB.function
    ) {
      return false;
    }
  }

  return true;
}

function _isSameFingerprint(currentEvent, previousEvent) {
  let currentFingerprint = currentEvent.fingerprint;
  let previousFingerprint = previousEvent.fingerprint;

  // If neither event has a fingerprint, they are assumed to be the same
  if (!currentFingerprint && !previousFingerprint) {
    return true;
  }

  // If only one event has a fingerprint, but not the other one, they are not the same
  if ((currentFingerprint && !previousFingerprint) || (!currentFingerprint && previousFingerprint)) {
    return false;
  }

  currentFingerprint = currentFingerprint ;
  previousFingerprint = previousFingerprint ;

  // Otherwise, compare the two
  try {
    return !!(currentFingerprint.join('') === previousFingerprint.join(''));
  } catch (_oO) {
    return false;
  }
}

function _getExceptionFromEvent(event) {
  return event.exception?.values && event.exception.values[0];
}


//# sourceMappingURL=dedupe.js.map

;// ./node_modules/@sentry/core/build/esm/utils/eventUtils.js
/**
 * Get a list of possible event messages from a Sentry event.
 */
function getPossibleEventMessages(event) {
  const possibleMessages = [];

  if (event.message) {
    possibleMessages.push(event.message);
  }

  try {
    // @ts-expect-error Try catching to save bundle size
    const lastException = event.exception.values[event.exception.values.length - 1];
    if (lastException?.value) {
      possibleMessages.push(lastException.value);
      if (lastException.type) {
        possibleMessages.push(`${lastException.type}: ${lastException.value}`);
      }
    }
  } catch (e) {
    // ignore errors here
  }

  return possibleMessages;
}


//# sourceMappingURL=eventUtils.js.map

;// ./node_modules/@sentry/core/build/esm/integrations/eventFilters.js







// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
const DEFAULT_IGNORE_ERRORS = [
  /^Script error\.?$/,
  /^Javascript error: Script error\.? on line 0$/,
  /^ResizeObserver loop completed with undelivered notifications.$/, // The browser logs this when a ResizeObserver handler takes a bit longer. Usually this is not an actual issue though. It indicates slowness.
  /^Cannot redefine property: googletag$/, // This is thrown when google tag manager is used in combination with an ad blocker
  /^Can't find variable: gmo$/, // Error from Google Search App https://issuetracker.google.com/issues/396043331
  /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, // Random error that happens but not actionable or noticeable to end-users.
  'can\'t redefine non-configurable property "solana"', // Probably a browser extension or custom browser (Brave) throwing this error
  "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", // Error thrown by GTM, seemingly not affecting end-users
  "Can't find variable: _AutofillCallbackHandler", // Unactionable error in instagram webview https://developers.facebook.com/community/threads/320013549791141/
  /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, // unactionable error from CEFSharp, a .NET library that embeds chromium in .NET apps
  /^Java exception was raised during method invocation$/, // error from Facebook Mobile browser (https://github.com/getsentry/sentry-javascript/issues/15065)
];

/** Options for the EventFilters integration */

const eventFilters_INTEGRATION_NAME = 'EventFilters';

const _eventFiltersIntegration = ((options = {}) => {
  return {
    name: eventFilters_INTEGRATION_NAME,
    processEvent(event, _hint, client) {
      const clientOptions = client.getOptions();
      const mergedOptions = _mergeOptions(options, clientOptions);
      return eventFilters_shouldDropEvent(event, mergedOptions) ? null : event;
    },
  };
}) ;

/**
 * An integration that filters out events (errors and transactions) based on:
 *
 * - (Errors) A curated list of known low-value or irrelevant errors (see {@link DEFAULT_IGNORE_ERRORS})
 * - (Errors) A list of error messages or urls/filenames passed in via
 *   - Top level Sentry.init options (`ignoreErrors`, `denyUrls`, `allowUrls`)
 *   - The same options passed to the integration directly via @param options
 * - (Transactions/Spans) A list of root span (transaction) names passed in via
 *   - Top level Sentry.init option (`ignoreTransactions`)
 *   - The same option passed to the integration directly via @param options
 *
 * Events filtered by this integration will not be sent to Sentry.
 */
const eventFiltersIntegration = defineIntegration(_eventFiltersIntegration);

/**
 * An integration that filters out events (errors and transactions) based on:
 *
 * - (Errors) A curated list of known low-value or irrelevant errors (see {@link DEFAULT_IGNORE_ERRORS})
 * - (Errors) A list of error messages or urls/filenames passed in via
 *   - Top level Sentry.init options (`ignoreErrors`, `denyUrls`, `allowUrls`)
 *   - The same options passed to the integration directly via @param options
 * - (Transactions/Spans) A list of root span (transaction) names passed in via
 *   - Top level Sentry.init option (`ignoreTransactions`)
 *   - The same option passed to the integration directly via @param options
 *
 * Events filtered by this integration will not be sent to Sentry.
 *
 * @deprecated this integration was renamed and will be removed in a future major version.
 * Use `eventFiltersIntegration` instead.
 */
const inboundFiltersIntegration = defineIntegration(((options = {}) => {
  return {
    ...eventFiltersIntegration(options),
    name: 'InboundFilters',
  };
}) );

function _mergeOptions(
  internalOptions = {},
  clientOptions = {},
) {
  return {
    allowUrls: [...(internalOptions.allowUrls || []), ...(clientOptions.allowUrls || [])],
    denyUrls: [...(internalOptions.denyUrls || []), ...(clientOptions.denyUrls || [])],
    ignoreErrors: [
      ...(internalOptions.ignoreErrors || []),
      ...(clientOptions.ignoreErrors || []),
      ...(internalOptions.disableErrorDefaults ? [] : DEFAULT_IGNORE_ERRORS),
    ],
    ignoreTransactions: [...(internalOptions.ignoreTransactions || []), ...(clientOptions.ignoreTransactions || [])],
    ignoreInternal: internalOptions.ignoreInternal !== undefined ? internalOptions.ignoreInternal : true,
  };
}

function eventFilters_shouldDropEvent(event, options) {
  if (options.ignoreInternal && _isSentryError(event)) {
    debug_build/* DEBUG_BUILD */.T &&
      logger/* logger */.vF.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${(0,misc/* getEventDescription */.$X)(event)}`);
    return true;
  }
  if (_isIgnoredError(event, options.ignoreErrors)) {
    debug_build/* DEBUG_BUILD */.T &&
      logger/* logger */.vF.warn(
        `Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0,misc/* getEventDescription */.$X)(event)}`,
      );
    return true;
  }
  if (_isUselessError(event)) {
    debug_build/* DEBUG_BUILD */.T &&
      logger/* logger */.vF.warn(
        `Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${(0,misc/* getEventDescription */.$X)(
          event,
        )}`,
      );
    return true;
  }
  if (_isIgnoredTransaction(event, options.ignoreTransactions)) {
    debug_build/* DEBUG_BUILD */.T &&
      logger/* logger */.vF.warn(
        `Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${(0,misc/* getEventDescription */.$X)(event)}`,
      );
    return true;
  }
  if (_isDeniedUrl(event, options.denyUrls)) {
    debug_build/* DEBUG_BUILD */.T &&
      logger/* logger */.vF.warn(
        `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0,misc/* getEventDescription */.$X)(
          event,
        )}.\nUrl: ${_getEventFilterUrl(event)}`,
      );
    return true;
  }
  if (!_isAllowedUrl(event, options.allowUrls)) {
    debug_build/* DEBUG_BUILD */.T &&
      logger/* logger */.vF.warn(
        `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0,misc/* getEventDescription */.$X)(
          event,
        )}.\nUrl: ${_getEventFilterUrl(event)}`,
      );
    return true;
  }
  return false;
}

function _isIgnoredError(event, ignoreErrors) {
  // If event.type, this is not an error
  if (event.type || !ignoreErrors || !ignoreErrors.length) {
    return false;
  }

  return getPossibleEventMessages(event).some(message => (0,string/* stringMatchesSomePattern */.Xr)(message, ignoreErrors));
}

function _isIgnoredTransaction(event, ignoreTransactions) {
  if (event.type !== 'transaction' || !ignoreTransactions || !ignoreTransactions.length) {
    return false;
  }

  const name = event.transaction;
  return name ? (0,string/* stringMatchesSomePattern */.Xr)(name, ignoreTransactions) : false;
}

function _isDeniedUrl(event, denyUrls) {
  if (!denyUrls?.length) {
    return false;
  }
  const url = _getEventFilterUrl(event);
  return !url ? false : (0,string/* stringMatchesSomePattern */.Xr)(url, denyUrls);
}

function _isAllowedUrl(event, allowUrls) {
  if (!allowUrls?.length) {
    return true;
  }
  const url = _getEventFilterUrl(event);
  return !url ? true : (0,string/* stringMatchesSomePattern */.Xr)(url, allowUrls);
}

function _isSentryError(event) {
  try {
    // @ts-expect-error can't be a sentry error if undefined
    return event.exception.values[0].type === 'SentryError';
  } catch (e) {
    // ignore
  }
  return false;
}

function _getLastValidUrl(frames = []) {
  for (let i = frames.length - 1; i >= 0; i--) {
    const frame = frames[i];

    if (frame && frame.filename !== '<anonymous>' && frame.filename !== '[native code]') {
      return frame.filename || null;
    }
  }

  return null;
}

function _getEventFilterUrl(event) {
  try {
    // If there are linked exceptions or exception aggregates we only want to match against the top frame of the "root" (the main exception)
    // The root always comes last in linked exceptions
    const rootException = [...(event.exception?.values ?? [])]
      .reverse()
      .find(value => value.mechanism?.parent_id === undefined && value.stacktrace?.frames?.length);
    const frames = rootException?.stacktrace?.frames;
    return frames ? _getLastValidUrl(frames) : null;
  } catch (oO) {
    debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.error(`Cannot extract url for event ${(0,misc/* getEventDescription */.$X)(event)}`);
    return null;
  }
}

function _isUselessError(event) {
  if (event.type) {
    // event is not an error
    return false;
  }

  // We only want to consider events for dropping that actually have recorded exception values.
  if (!event.exception?.values?.length) {
    return false;
  }

  return (
    // No top-level message
    !event.message &&
    // There are no exception values that have a stacktrace, a non-generic-Error type or value
    !event.exception.values.some(value => value.stacktrace || (value.type && value.type !== 'Error') || value.value)
  );
}


//# sourceMappingURL=eventFilters.js.map

;// ./node_modules/@sentry/core/build/esm/integrations/extraerrordata.js








const extraerrordata_INTEGRATION_NAME = 'ExtraErrorData';

/**
 * Extract additional data for from original exceptions.
 */
const _extraErrorDataIntegration = ((options = {}) => {
  const { depth = 3, captureErrorCause = true } = options;
  return {
    name: extraerrordata_INTEGRATION_NAME,
    processEvent(event, hint, client) {
      const { maxValueLength = 250 } = client.getOptions();
      return _enhanceEventWithErrorData(event, hint, depth, captureErrorCause, maxValueLength);
    },
  };
}) ;

const extraErrorDataIntegration = defineIntegration(_extraErrorDataIntegration);

function _enhanceEventWithErrorData(
  event,
  hint = {},
  depth,
  captureErrorCause,
  maxValueLength,
) {
  if (!hint.originalException || !(0,is/* isError */.bJ)(hint.originalException)) {
    return event;
  }
  const exceptionName = (hint.originalException ).name || hint.originalException.constructor.name;

  const errorData = _extractErrorData(hint.originalException , captureErrorCause, maxValueLength);

  if (errorData) {
    const contexts = {
      ...event.contexts,
    };

    const normalizedErrorData = (0,normalize/* normalize */.S8)(errorData, depth);

    if ((0,is/* isPlainObject */.Qd)(normalizedErrorData)) {
      // We mark the error data as "already normalized" here, because we don't want other normalization procedures to
      // potentially truncate the data we just already normalized, with a certain depth setting.
      (0,object/* addNonEnumerableProperty */.my)(normalizedErrorData, '__sentry_skip_normalization__', true);
      contexts[exceptionName] = normalizedErrorData;
    }

    return {
      ...event,
      contexts,
    };
  }

  return event;
}

/**
 * Extract extra information from the Error object
 */
function _extractErrorData(
  error,
  captureErrorCause,
  maxValueLength,
) {
  // We are trying to enhance already existing event, so no harm done if it won't succeed
  try {
    const nativeKeys = [
      'name',
      'message',
      'stack',
      'line',
      'column',
      'fileName',
      'lineNumber',
      'columnNumber',
      'toJSON',
    ];

    const extraErrorInfo = {};

    // We want only enumerable properties, thus `getOwnPropertyNames` is redundant here, as we filter keys anyway.
    for (const key of Object.keys(error)) {
      if (nativeKeys.indexOf(key) !== -1) {
        continue;
      }
      const value = error[key];
      extraErrorInfo[key] = (0,is/* isError */.bJ)(value) || typeof value === 'string' ? (0,string/* truncate */.xv)(`${value}`, maxValueLength) : value;
    }

    // Error.cause is a standard property that is non enumerable, we therefore need to access it separately.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause
    if (captureErrorCause && error.cause !== undefined) {
      extraErrorInfo.cause = (0,is/* isError */.bJ)(error.cause) ? error.cause.toString() : error.cause;
    }

    // Check if someone attached `toJSON` method to grab even more properties (eg. axios is doing that)
    if (typeof error.toJSON === 'function') {
      const serializedError = error.toJSON() ;

      for (const key of Object.keys(serializedError)) {
        const value = serializedError[key];
        extraErrorInfo[key] = (0,is/* isError */.bJ)(value) ? value.toString() : value;
      }
    }

    return extraErrorInfo;
  } catch (oO) {
    debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.error('Unable to extract extra data from the Error object:', oO);
  }

  return null;
}


//# sourceMappingURL=extraerrordata.js.map

;// ./node_modules/@sentry/core/build/esm/integrations/functiontostring.js




let originalFunctionToString;

const functiontostring_INTEGRATION_NAME = 'FunctionToString';

const SETUP_CLIENTS = new WeakMap();

const _functionToStringIntegration = (() => {
  return {
    name: functiontostring_INTEGRATION_NAME,
    setupOnce() {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      originalFunctionToString = Function.prototype.toString;

      // intrinsics (like Function.prototype) might be immutable in some environments
      // e.g. Node with --frozen-intrinsics, XS (an embedded JavaScript engine) or SES (a JavaScript proposal)
      try {
        Function.prototype.toString = function ( ...args) {
          const originalFunction = (0,object/* getOriginalFunction */.sp)(this);
          const context =
            SETUP_CLIENTS.has((0,currentScopes/* getClient */.KU)() ) && originalFunction !== undefined ? originalFunction : this;
          return originalFunctionToString.apply(context, args);
        };
      } catch {
        // ignore errors here, just don't patch this
      }
    },
    setup(client) {
      SETUP_CLIENTS.set(client, true);
    },
  };
}) ;

/**
 * Patch toString calls to return proper name for wrapped functions.
 *
 * ```js
 * Sentry.init({
 *   integrations: [
 *     functionToStringIntegration(),
 *   ],
 * });
 * ```
 */
const functionToStringIntegration = defineIntegration(_functionToStringIntegration);


//# sourceMappingURL=functiontostring.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/dsn.js
var utils_hoist_dsn = __webpack_require__(87961);
;// ./node_modules/@sentry/core/build/esm/api.js


const SENTRY_API_VERSION = '7';

/** Returns the prefix to construct Sentry ingestion API endpoints. */
function getBaseApiEndpoint(dsn) {
  const protocol = dsn.protocol ? `${dsn.protocol}:` : '';
  const port = dsn.port ? `:${dsn.port}` : '';
  return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ''}/api/`;
}

/** Returns the ingest API endpoint for target. */
function _getIngestEndpoint(dsn) {
  return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
}

/** Returns a URL-encoded string with auth config suitable for a query string. */
function _encodedAuth(dsn, sdkInfo) {
  const params = {
    sentry_version: SENTRY_API_VERSION,
  };

  if (dsn.publicKey) {
    // We send only the minimum set of required information. See
    // https://github.com/getsentry/sentry-javascript/issues/2572.
    params.sentry_key = dsn.publicKey;
  }

  if (sdkInfo) {
    params.sentry_client = `${sdkInfo.name}/${sdkInfo.version}`;
  }

  return new URLSearchParams(params).toString();
}

/**
 * Returns the envelope endpoint URL with auth in the query string.
 *
 * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
 */
function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnel, sdkInfo) {
  return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
}

/** Returns the url to the report dialog endpoint. */
function getReportDialogEndpoint(dsnLike, dialogOptions) {
  const dsn = (0,utils_hoist_dsn/* makeDsn */.AD)(dsnLike);
  if (!dsn) {
    return '';
  }

  const endpoint = `${getBaseApiEndpoint(dsn)}embed/error-page/`;

  let encodedOptions = `dsn=${(0,utils_hoist_dsn/* dsnToString */.SB)(dsn)}`;
  for (const key in dialogOptions) {
    if (key === 'dsn') {
      continue;
    }

    if (key === 'onClose') {
      continue;
    }

    if (key === 'user') {
      const user = dialogOptions.user;
      if (!user) {
        continue;
      }
      if (user.name) {
        encodedOptions += `&name=${encodeURIComponent(user.name)}`;
      }
      if (user.email) {
        encodedOptions += `&email=${encodeURIComponent(user.email)}`;
      }
    } else {
      encodedOptions += `&${encodeURIComponent(key)}=${encodeURIComponent(dialogOptions[key] )}`;
    }
  }

  return `${endpoint}?${encodedOptions}`;
}


//# sourceMappingURL=api.js.map

;// ./node_modules/@sentry/core/build/esm/transports/multiplexed.js




/**
 * Gets an event from an envelope.
 *
 * This is only exported for use in the tests
 */
function eventFromEnvelope(env, types) {
  let event;

  (0,utils_hoist_envelope/* forEachEnvelopeItem */.yH)(env, (item, type) => {
    if (types.includes(type)) {
      event = Array.isArray(item) ? (item )[1] : undefined;
    }
    // bail out if we found an event
    return !!event;
  });

  return event;
}

/**
 * Creates a transport that overrides the release on all events.
 */
function makeOverrideReleaseTransport(
  createTransport,
  release,
) {
  return options => {
    const transport = createTransport(options);

    return {
      ...transport,
      send: async (envelope) => {
        const event = eventFromEnvelope(envelope, ['event', 'transaction', 'profile', 'replay_event']);

        if (event) {
          event.release = release;
        }
        return transport.send(envelope);
      },
    };
  };
}

/** Overrides the DSN in the envelope header  */
function overrideDsn(envelope, dsn) {
  return (0,utils_hoist_envelope/* createEnvelope */.h4)(
    dsn
      ? {
          ...envelope[0],
          dsn,
        }
      : envelope[0],
    envelope[1],
  );
}

/**
 * Creates a transport that can send events to different DSNs depending on the envelope contents.
 */
function makeMultiplexedTransport(
  createTransport,
  matcher,
) {
  return options => {
    const fallbackTransport = createTransport(options);
    const otherTransports = new Map();

    function getTransport(dsn, release) {
      // We create a transport for every unique dsn/release combination as there may be code from multiple releases in
      // use at the same time
      const key = release ? `${dsn}:${release}` : dsn;

      let transport = otherTransports.get(key);

      if (!transport) {
        const validatedDsn = (0,utils_hoist_dsn/* dsnFromString */.hH)(dsn);
        if (!validatedDsn) {
          return undefined;
        }
        const url = getEnvelopeEndpointWithUrlEncodedAuth(validatedDsn, options.tunnel);

        transport = release
          ? makeOverrideReleaseTransport(createTransport, release)({ ...options, url })
          : createTransport({ ...options, url });

        otherTransports.set(key, transport);
      }

      return [dsn, transport];
    }

    async function send(envelope) {
      function getEvent(types) {
        const eventTypes = types?.length ? types : ['event'];
        return eventFromEnvelope(envelope, eventTypes);
      }

      const transports = matcher({ envelope, getEvent })
        .map(result => {
          if (typeof result === 'string') {
            return getTransport(result, undefined);
          } else {
            return getTransport(result.dsn, result.release);
          }
        })
        .filter((t) => !!t);

      // If we have no transports to send to, use the fallback transport
      // Don't override the DSN in the header for the fallback transport. '' is falsy
      const transportsWithFallback = transports.length ? transports : [['', fallbackTransport]];

      const results = (await Promise.all(
        transportsWithFallback.map(([dsn, transport]) => transport.send(overrideDsn(envelope, dsn))),
      )) ;

      return results[0];
    }

    async function flush(timeout) {
      const allTransports = [...otherTransports.values(), fallbackTransport];
      const results = await Promise.all(allTransports.map(transport => transport.flush(timeout)));
      return results.every(r => r);
    }

    return {
      send,
      flush,
    };
  };
}


//# sourceMappingURL=multiplexed.js.map

;// ./node_modules/@sentry/core/build/esm/metadata.js


/** Keys are source filename/url, values are metadata objects. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const filenameMetadataMap = new Map();
/** Set of stack strings that have already been parsed. */
const parsedStacks = new Set();

function ensureMetadataStacksAreParsed(parser) {
  if (!worldwide/* GLOBAL_OBJ */.O._sentryModuleMetadata) {
    return;
  }

  for (const stack of Object.keys(worldwide/* GLOBAL_OBJ */.O._sentryModuleMetadata)) {
    const metadata = worldwide/* GLOBAL_OBJ */.O._sentryModuleMetadata[stack];

    if (parsedStacks.has(stack)) {
      continue;
    }

    // Ensure this stack doesn't get parsed again
    parsedStacks.add(stack);

    const frames = parser(stack);

    // Go through the frames starting from the top of the stack and find the first one with a filename
    for (const frame of frames.reverse()) {
      if (frame.filename) {
        // Save the metadata for this filename
        filenameMetadataMap.set(frame.filename, metadata);
        break;
      }
    }
  }
}

/**
 * Retrieve metadata for a specific JavaScript file URL.
 *
 * Metadata is injected by the Sentry bundler plugins using the `_experiments.moduleMetadata` config option.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getMetadataForUrl(parser, filename) {
  ensureMetadataStacksAreParsed(parser);
  return filenameMetadataMap.get(filename);
}

/**
 * Adds metadata to stack frames.
 *
 * Metadata is injected by the Sentry bundler plugins using the `_experiments.moduleMetadata` config option.
 */
function addMetadataToStackFrames(parser, event) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    event.exception.values.forEach(exception => {
      if (!exception.stacktrace) {
        return;
      }

      for (const frame of exception.stacktrace.frames || []) {
        if (!frame.filename || frame.module_metadata) {
          continue;
        }

        const metadata = getMetadataForUrl(parser, frame.filename);

        if (metadata) {
          frame.module_metadata = metadata;
        }
      }
    });
  } catch (_) {
    // To save bundle size we're just try catching here instead of checking for the existence of all the different objects.
  }
}

/**
 * Strips metadata from stack frames.
 */
function stripMetadataFromStackFrames(event) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    event.exception.values.forEach(exception => {
      if (!exception.stacktrace) {
        return;
      }

      for (const frame of exception.stacktrace.frames || []) {
        delete frame.module_metadata;
      }
    });
  } catch (_) {
    // To save bundle size we're just try catching here instead of checking for the existence of all the different objects.
  }
}


//# sourceMappingURL=metadata.js.map

;// ./node_modules/@sentry/core/build/esm/integrations/metadata.js




/**
 * Adds module metadata to stack frames.
 *
 * Metadata can be injected by the Sentry bundler plugins using the `moduleMetadata` config option.
 *
 * When this integration is added, the metadata passed to the bundler plugin is added to the stack frames of all events
 * under the `module_metadata` property. This can be used to help in tagging or routing of events from different teams
 * our sources
 */
const moduleMetadataIntegration = defineIntegration(() => {
  return {
    name: 'ModuleMetadata',
    setup(client) {
      // We need to strip metadata from stack frames before sending them to Sentry since these are client side only.
      client.on('beforeEnvelope', envelope => {
        (0,utils_hoist_envelope/* forEachEnvelopeItem */.yH)(envelope, (item, type) => {
          if (type === 'event') {
            const event = Array.isArray(item) ? (item )[1] : undefined;

            if (event) {
              stripMetadataFromStackFrames(event);
              item[1] = event;
            }
          }
        });
      });

      client.on('applyFrameMetadata', event => {
        // Only apply stack frame metadata to error events
        if (event.type) {
          return;
        }

        const stackParser = client.getOptions().stackParser;
        addMetadataToStackFrames(stackParser, event);
      });
    },
  };
});


//# sourceMappingURL=metadata.js.map

;// ./node_modules/@sentry/core/build/esm/utils/parameterize.js
/**
 * Tagged template function which returns parameterized representation of the message
 * For example: parameterize`This is a log statement with ${x} and ${y} params`, would return:
 * "__sentry_template_string__": 'This is a log statement with %s and %s params',
 * "__sentry_template_values__": ['first', 'second']
 * @param strings An array of string values splitted between expressions
 * @param values Expressions extracted from template string
 * @returns String with template information in __sentry_template_string__ and __sentry_template_values__ properties
 */
function parameterize(strings, ...values) {
  const formatted = new String(String.raw(strings, ...values)) ;
  formatted.__sentry_template_string__ = strings.join('\x00').replace(/%/g, '%%').replace(/\0/g, '%s');
  formatted.__sentry_template_values__ = values;
  return formatted;
}


//# sourceMappingURL=parameterize.js.map

;// ./node_modules/@sentry/core/build/esm/utils-hoist/instrument/globalError.js



let _oldOnErrorHandler = null;

/**
 * Add an instrumentation handler for when an error is captured by the global error handler.
 *
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addGlobalErrorInstrumentationHandler(handler) {
  const type = 'error';
  addHandler(type, handler);
  maybeInstrument(type, instrumentError);
}

function instrumentError() {
  _oldOnErrorHandler = worldwide/* GLOBAL_OBJ */.O.onerror;

  // Note: The reason we are doing window.onerror instead of window.addEventListener('error')
  // is that we are using this handler in the Loader Script, to handle buffered errors consistently
  worldwide/* GLOBAL_OBJ */.O.onerror = function (
    msg,
    url,
    line,
    column,
    error,
  ) {
    const handlerData = {
      column,
      error,
      line,
      msg,
      url,
    };
    triggerHandlers('error', handlerData);

    if (_oldOnErrorHandler) {
      // eslint-disable-next-line prefer-rest-params
      return _oldOnErrorHandler.apply(this, arguments);
    }

    return false;
  };

  worldwide/* GLOBAL_OBJ */.O.onerror.__SENTRY_INSTRUMENTED__ = true;
}


//# sourceMappingURL=globalError.js.map

;// ./node_modules/@sentry/core/build/esm/utils-hoist/instrument/globalUnhandledRejection.js



let _oldOnUnhandledRejectionHandler = null;

/**
 * Add an instrumentation handler for when an unhandled promise rejection is captured.
 *
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addGlobalUnhandledRejectionInstrumentationHandler(
  handler,
) {
  const type = 'unhandledrejection';
  addHandler(type, handler);
  maybeInstrument(type, instrumentUnhandledRejection);
}

function instrumentUnhandledRejection() {
  _oldOnUnhandledRejectionHandler = worldwide/* GLOBAL_OBJ */.O.onunhandledrejection;

  // Note: The reason we are doing window.onunhandledrejection instead of window.addEventListener('unhandledrejection')
  // is that we are using this handler in the Loader Script, to handle buffered rejections consistently
  worldwide/* GLOBAL_OBJ */.O.onunhandledrejection = function (e) {
    const handlerData = e;
    triggerHandlers('unhandledrejection', handlerData);

    if (_oldOnUnhandledRejectionHandler) {
      // eslint-disable-next-line prefer-rest-params
      return _oldOnUnhandledRejectionHandler.apply(this, arguments);
    }

    return true;
  };

  worldwide/* GLOBAL_OBJ */.O.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}


//# sourceMappingURL=globalUnhandledRejection.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/tracing/spanstatus.js
var spanstatus = __webpack_require__(91135);
;// ./node_modules/@sentry/core/build/esm/tracing/errors.js







let errorsInstrumented = false;

/**
 * Ensure that global errors automatically set the active span status.
 */
function registerSpanErrorInstrumentation() {
  if (errorsInstrumented) {
    return;
  }

  errorsInstrumented = true;
  addGlobalErrorInstrumentationHandler(errorCallback);
  addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
}

/**
 * If an error or unhandled promise occurs, we mark the active root span as failed
 */
function errorCallback() {
  const activeSpan = (0,spanUtils/* getActiveSpan */.Bk)();
  const rootSpan = activeSpan && (0,spanUtils/* getRootSpan */.zU)(activeSpan);
  if (rootSpan) {
    const message = 'internal_error';
    debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.log(`[Tracing] Root span: ${message} -> Global error occurred`);
    rootSpan.setStatus({ code: spanstatus/* SPAN_STATUS_ERROR */.TJ, message });
  }
}

// The function name will be lost when bundling but we need to be able to identify this listener later to maintain the
// node.js default exit behaviour
errorCallback.tag = 'sentry_tracingErrorCallback';


//# sourceMappingURL=errors.js.map

;// ./node_modules/@sentry/core/build/esm/utils-hoist/path.js
// Slightly modified (no IE8 support, ES6) and transcribed to TypeScript
// https://github.com/calvinmetcalf/rollup-plugin-node-builtins/blob/63ab8aacd013767445ca299e468d9a60a95328d7/src/es6/path.js
//
// Copyright Joyent, Inc.and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

/** JSDoc */
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  let up = 0;
  for (let i = parts.length - 1; i >= 0; i--) {
    const last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
const splitPathRe = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
/** JSDoc */
function splitPath(filename) {
  // Truncate files names greater than 1024 characters to avoid regex dos
  // https://github.com/getsentry/sentry-javascript/pull/8737#discussion_r1285719172
  const truncated = filename.length > 1024 ? `<truncated>${filename.slice(-1024)}` : filename;
  const parts = splitPathRe.exec(truncated);
  return parts ? parts.slice(1) : [];
}

// path.resolve([from ...], to)
// posix version
/** JSDoc */
function resolve(...args) {
  let resolvedPath = '';
  let resolvedAbsolute = false;

  for (let i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    const path = i >= 0 ? args[i] : '/';

    // Skip empty entries
    if (!path) {
      continue;
    }

    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(
    resolvedPath.split('/').filter(p => !!p),
    !resolvedAbsolute,
  ).join('/');

  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}

/** JSDoc */
function trim(arr) {
  let start = 0;
  for (; start < arr.length; start++) {
    if (arr[start] !== '') {
      break;
    }
  }

  let end = arr.length - 1;
  for (; end >= 0; end--) {
    if (arr[end] !== '') {
      break;
    }
  }

  if (start > end) {
    return [];
  }
  return arr.slice(start, end - start + 1);
}

// path.relative(from, to)
// posix version
/** JSDoc */
function relative(from, to) {
  /* eslint-disable no-param-reassign */
  from = resolve(from).slice(1);
  to = resolve(to).slice(1);
  /* eslint-enable no-param-reassign */

  const fromParts = trim(from.split('/'));
  const toParts = trim(to.split('/'));

  const length = Math.min(fromParts.length, toParts.length);
  let samePartsLength = length;
  for (let i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  let outputParts = [];
  for (let i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
}

// path.normalize(path)
// posix version
/** JSDoc */
function normalizePath(path) {
  const isPathAbsolute = isAbsolute(path);
  const trailingSlash = path.slice(-1) === '/';

  // Normalize the path
  let normalizedPath = normalizeArray(
    path.split('/').filter(p => !!p),
    !isPathAbsolute,
  ).join('/');

  if (!normalizedPath && !isPathAbsolute) {
    normalizedPath = '.';
  }
  if (normalizedPath && trailingSlash) {
    normalizedPath += '/';
  }

  return (isPathAbsolute ? '/' : '') + normalizedPath;
}

// posix version
/** JSDoc */
function isAbsolute(path) {
  return path.charAt(0) === '/';
}

// posix version
/** JSDoc */
function join(...args) {
  return normalizePath(args.join('/'));
}

/** JSDoc */
function dirname(path) {
  const result = splitPath(path);
  const root = result[0] || '';
  let dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.slice(0, dir.length - 1);
  }

  return root + dir;
}

/** JSDoc */
function basename(path, ext) {
  let f = splitPath(path)[2] || '';
  if (ext && f.slice(ext.length * -1) === ext) {
    f = f.slice(0, f.length - ext.length);
  }
  return f;
}


//# sourceMappingURL=path.js.map

;// ./node_modules/@sentry/core/build/esm/integrations/rewriteframes.js




const rewriteframes_INTEGRATION_NAME = 'RewriteFrames';

/**
 * Rewrite event frames paths.
 */
const rewriteFramesIntegration = defineIntegration((options = {}) => {
  const root = options.root;
  const prefix = options.prefix || 'app:///';

  const isBrowser = "window" in worldwide/* GLOBAL_OBJ */.O && !!worldwide/* GLOBAL_OBJ */.O.window;

  const iteratee = options.iteratee || generateIteratee({ isBrowser, root, prefix });

  /** Process an exception event. */
  function _processExceptionsEvent(event) {
    try {
      return {
        ...event,
        exception: {
          ...event.exception,
          // The check for this is performed inside `process` call itself, safe to skip here
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          values: event.exception.values.map(value => ({
            ...value,
            ...(value.stacktrace && { stacktrace: _processStacktrace(value.stacktrace) }),
          })),
        },
      };
    } catch (_oO) {
      return event;
    }
  }

  /** Process a stack trace. */
  function _processStacktrace(stacktrace) {
    return {
      ...stacktrace,
      frames: stacktrace?.frames && stacktrace.frames.map(f => iteratee(f)),
    };
  }

  return {
    name: rewriteframes_INTEGRATION_NAME,
    processEvent(originalEvent) {
      let processedEvent = originalEvent;

      if (originalEvent.exception && Array.isArray(originalEvent.exception.values)) {
        processedEvent = _processExceptionsEvent(processedEvent);
      }

      return processedEvent;
    },
  };
});

/**
 * Exported only for tests.
 */
function generateIteratee({
  isBrowser,
  root,
  prefix,
}

) {
  return (frame) => {
    if (!frame.filename) {
      return frame;
    }

    // Determine if this is a Windows frame by checking for a Windows-style prefix such as `C:\`
    const isWindowsFrame =
      /^[a-zA-Z]:\\/.test(frame.filename) ||
      // or the presence of a backslash without a forward slash (which are not allowed on Windows)
      (frame.filename.includes('\\') && !frame.filename.includes('/'));

    // Check if the frame filename begins with `/`
    const startsWithSlash = /^\//.test(frame.filename);

    if (isBrowser) {
      if (root) {
        const oldFilename = frame.filename;
        if (oldFilename.indexOf(root) === 0) {
          frame.filename = oldFilename.replace(root, prefix);
        }
      }
    } else {
      if (isWindowsFrame || startsWithSlash) {
        const filename = isWindowsFrame
          ? frame.filename
              .replace(/^[a-zA-Z]:/, '') // remove Windows-style prefix
              .replace(/\\/g, '/') // replace all `\\` instances with `/`
          : frame.filename;
        const base = root ? relative(root, filename) : basename(filename);
        frame.filename = `${prefix}${base}`;
      }
    }

    return frame;
  };
}


//# sourceMappingURL=rewriteframes.js.map

;// ./node_modules/@sentry/core/build/esm/sdk.js




/** A class object that can instantiate Client objects. */

/**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instantiate.
 * @param options Options to pass to the client.
 */
function initAndBind(
  clientClass,
  options,
) {
  if (options.debug === true) {
    if (debug_build/* DEBUG_BUILD */.T) {
      logger/* logger */.vF.enable();
    } else {
      // use `console.warn` rather than `logger.warn` since by non-debug bundles have all `logger.x` statements stripped
      (0,logger/* consoleSandbox */.pq)(() => {
        // eslint-disable-next-line no-console
        console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.');
      });
    }
  }
  const scope = (0,currentScopes/* getCurrentScope */.o5)();
  scope.update(options.initialScope);

  const client = new clientClass(options);
  setCurrentClient(client);
  client.init();
  return client;
}

/**
 * Make the given client the current client.
 */
function setCurrentClient(client) {
  (0,currentScopes/* getCurrentScope */.o5)().setClient(client);
}


//# sourceMappingURL=sdk.js.map

;// ./node_modules/@sentry/core/build/esm/integrations/third-party-errors-filter.js





/**
 * This integration allows you to filter out, or tag error events that do not come from user code marked with a bundle key via the Sentry bundler plugins.
 */
const thirdPartyErrorFilterIntegration = defineIntegration((options) => {
  return {
    name: 'ThirdPartyErrorsFilter',
    setup(client) {
      // We need to strip metadata from stack frames before sending them to Sentry since these are client side only.
      // TODO(lforst): Move this cleanup logic into a more central place in the SDK.
      client.on('beforeEnvelope', envelope => {
        (0,utils_hoist_envelope/* forEachEnvelopeItem */.yH)(envelope, (item, type) => {
          if (type === 'event') {
            const event = Array.isArray(item) ? (item )[1] : undefined;

            if (event) {
              stripMetadataFromStackFrames(event);
              item[1] = event;
            }
          }
        });
      });

      client.on('applyFrameMetadata', event => {
        // Only apply stack frame metadata to error events
        if (event.type) {
          return;
        }

        const stackParser = client.getOptions().stackParser;
        addMetadataToStackFrames(stackParser, event);
      });
    },

    processEvent(event) {
      const frameKeys = getBundleKeysForAllFramesWithFilenames(event);

      if (frameKeys) {
        const arrayMethod =
          options.behaviour === 'drop-error-if-contains-third-party-frames' ||
          options.behaviour === 'apply-tag-if-contains-third-party-frames'
            ? 'some'
            : 'every';

        const behaviourApplies = frameKeys[arrayMethod](keys => !keys.some(key => options.filterKeys.includes(key)));

        if (behaviourApplies) {
          const shouldDrop =
            options.behaviour === 'drop-error-if-contains-third-party-frames' ||
            options.behaviour === 'drop-error-if-exclusively-contains-third-party-frames';
          if (shouldDrop) {
            return null;
          } else {
            event.tags = {
              ...event.tags,
              third_party_code: true,
            };
          }
        }
      }

      return event;
    },
  };
});

function getBundleKeysForAllFramesWithFilenames(event) {
  const frames = (0,stacktrace/* getFramesFromEvent */.RV)(event);

  if (!frames) {
    return undefined;
  }

  return (
    frames
      // Exclude frames without a filename since these are likely native code or built-ins
      .filter(frame => !!frame.filename)
      .map(frame => {
        if (frame.module_metadata) {
          return Object.keys(frame.module_metadata)
            .filter(key => key.startsWith(BUNDLER_PLUGIN_APP_KEY_PREFIX))
            .map(key => key.slice(BUNDLER_PLUGIN_APP_KEY_PREFIX.length));
        }
        return [];
      })
  );
}

const BUNDLER_PLUGIN_APP_KEY_PREFIX = '_sentryBundlerPluginAppKey:';


//# sourceMappingURL=third-party-errors-filter.js.map

;// ./node_modules/@sentry/core/build/esm/integrations/zoderrors.js




const DEFAULT_LIMIT = 10;
const zoderrors_INTEGRATION_NAME = 'ZodErrors';

/**
 * Simplified ZodIssue type definition
 */

function originalExceptionIsZodError(originalException) {
  return (
    (0,is/* isError */.bJ)(originalException) &&
    originalException.name === 'ZodError' &&
    Array.isArray((originalException ).issues)
  );
}

/**
 * Formats child objects or arrays to a string
 * that is preserved when sent to Sentry.
 *
 * Without this, we end up with something like this in Sentry:
 *
 * [
 *  [Object],
 *  [Object],
 *  [Object],
 *  [Object]
 * ]
 */
function flattenIssue(issue) {
  return {
    ...issue,
    path: 'path' in issue && Array.isArray(issue.path) ? issue.path.join('.') : undefined,
    keys: 'keys' in issue ? JSON.stringify(issue.keys) : undefined,
    unionErrors: 'unionErrors' in issue ? JSON.stringify(issue.unionErrors) : undefined,
  };
}

/**
 * Takes ZodError issue path array and returns a flattened version as a string.
 * This makes it easier to display paths within a Sentry error message.
 *
 * Array indexes are normalized to reduce duplicate entries
 *
 * @param path ZodError issue path
 * @returns flattened path
 *
 * @example
 * flattenIssuePath([0, 'foo', 1, 'bar']) // -> '<array>.foo.<array>.bar'
 */
function flattenIssuePath(path) {
  return path
    .map(p => {
      if (typeof p === 'number') {
        return '<array>';
      } else {
        return p;
      }
    })
    .join('.');
}

/**
 * Zod error message is a stringified version of ZodError.issues
 * This doesn't display well in the Sentry UI. Replace it with something shorter.
 */
function formatIssueMessage(zodError) {
  const errorKeyMap = new Set();
  for (const iss of zodError.issues) {
    const issuePath = flattenIssuePath(iss.path);
    if (issuePath.length > 0) {
      errorKeyMap.add(issuePath);
    }
  }

  const errorKeys = Array.from(errorKeyMap);
  if (errorKeys.length === 0) {
    // If there are no keys, then we're likely validating the root
    // variable rather than a key within an object. This attempts
    // to extract what type it was that failed to validate.
    // For example, z.string().parse(123) would return "string" here.
    let rootExpectedType = 'variable';
    if (zodError.issues.length > 0) {
      const iss = zodError.issues[0];
      if (iss !== undefined && 'expected' in iss && typeof iss.expected === 'string') {
        rootExpectedType = iss.expected;
      }
    }
    return `Failed to validate ${rootExpectedType}`;
  }
  return `Failed to validate keys: ${(0,string/* truncate */.xv)(errorKeys.join(', '), 100)}`;
}

/**
 * Applies ZodError issues to an event extra and replaces the error message
 */
function applyZodErrorsToEvent(
  limit,
  saveZodIssuesAsAttachment = false,
  event,
  hint,
) {
  if (
    !event.exception?.values ||
    !hint.originalException ||
    !originalExceptionIsZodError(hint.originalException) ||
    hint.originalException.issues.length === 0
  ) {
    return event;
  }

  try {
    const issuesToFlatten = saveZodIssuesAsAttachment
      ? hint.originalException.issues
      : hint.originalException.issues.slice(0, limit);
    const flattenedIssues = issuesToFlatten.map(flattenIssue);

    if (saveZodIssuesAsAttachment) {
      // Sometimes having the full error details can be helpful.
      // Attachments have much higher limits, so we can include the full list of issues.
      if (!Array.isArray(hint.attachments)) {
        hint.attachments = [];
      }
      hint.attachments.push({
        filename: 'zod_issues.json',
        data: JSON.stringify({
          issues: flattenedIssues,
        }),
      });
    }

    return {
      ...event,
      exception: {
        ...event.exception,
        values: [
          {
            ...event.exception.values[0],
            value: formatIssueMessage(hint.originalException),
          },
          ...event.exception.values.slice(1),
        ],
      },
      extra: {
        ...event.extra,
        'zoderror.issues': flattenedIssues.slice(0, limit),
      },
    };
  } catch (e) {
    // Hopefully we never throw errors here, but record it
    // with the event just in case.
    return {
      ...event,
      extra: {
        ...event.extra,
        'zoderrors sentry integration parse error': {
          message: 'an exception was thrown while processing ZodError within applyZodErrorsToEvent()',
          error: e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : 'unknown',
        },
      },
    };
  }
}

const _zodErrorsIntegration = ((options = {}) => {
  const limit = options.limit ?? DEFAULT_LIMIT;

  return {
    name: zoderrors_INTEGRATION_NAME,
    processEvent(originalEvent, hint) {
      const processedEvent = applyZodErrorsToEvent(limit, options.saveZodIssuesAsAttachment, originalEvent, hint);
      return processedEvent;
    },
  };
}) ;

/**
 * Sentry integration to process Zod errors, making them easier to work with in Sentry.
 */
const zodErrorsIntegration = defineIntegration(_zodErrorsIntegration);


//# sourceMappingURL=zoderrors.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/version.js
var version = __webpack_require__(21472);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/semanticAttributes.js
var semanticAttributes = __webpack_require__(74611);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/breadcrumbs.js
var breadcrumbs = __webpack_require__(6810);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/tracing/trace.js + 4 modules
var trace = __webpack_require__(90496);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/tracing/measurement.js
var tracing_measurement = __webpack_require__(5109);
;// ./node_modules/@sentry/browser/build/npm/esm/helpers.js


const WINDOW = worldwide/* GLOBAL_OBJ */.O ;

let ignoreOnError = 0;

/**
 * @hidden
 */
function shouldIgnoreOnError() {
  return ignoreOnError > 0;
}

/**
 * @hidden
 */
function ignoreNextOnError() {
  // onerror should trigger before setTimeout
  ignoreOnError++;
  setTimeout(() => {
    ignoreOnError--;
  });
}

// eslint-disable-next-line @typescript-eslint/ban-types

/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap. It is generally safe to pass an unbound function, because the returned wrapper always
 * has a correct `this` context.
 * @returns The wrapped function.
 * @hidden
 */
function wrap(
  fn,
  options

 = {},
) {
  // for future readers what this does is wrap a function and then create
  // a bi-directional wrapping between them.
  //
  // example: wrapped = wrap(original);
  //  original.__sentry_wrapped__ -> wrapped
  //  wrapped.__sentry_original__ -> original

  function isFunction(fn) {
    return typeof fn === 'function';
  }

  if (!isFunction(fn)) {
    return fn;
  }

  try {
    // if we're dealing with a function that was previously wrapped, return
    // the original wrapper.
    const wrapper = (fn ).__sentry_wrapped__;
    if (wrapper) {
      if (typeof wrapper === 'function') {
        return wrapper;
      } else {
        // If we find that the `__sentry_wrapped__` function is not a function at the time of accessing it, it means
        // that something messed with it. In that case we want to return the originally passed function.
        return fn;
      }
    }

    // We don't wanna wrap it twice
    if ((0,object/* getOriginalFunction */.sp)(fn)) {
      return fn;
    }
  } catch (e) {
    // Just accessing custom props in some Selenium environments
    // can cause a "Permission denied" exception (see raven-js#495).
    // Bail on wrapping and return the function as-is (defers to window.onerror).
    return fn;
  }

  // Wrap the function itself
  // It is important that `sentryWrapped` is not an arrow function to preserve the context of `this`
  const sentryWrapped = function ( ...args) {
    try {
      // Also wrap arguments that are themselves functions
      const wrappedArguments = args.map(arg => wrap(arg, options));

      // Attempt to invoke user-land function
      // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
      //       means the sentry.javascript SDK caught an error invoking your application code. This
      //       is expected behavior and NOT indicative of a bug with sentry.javascript.
      return fn.apply(this, wrappedArguments);
    } catch (ex) {
      ignoreNextOnError();

      (0,currentScopes/* withScope */.v4)(scope => {
        scope.addEventProcessor(event => {
          if (options.mechanism) {
            (0,misc/* addExceptionTypeValue */.gO)(event, undefined, undefined);
            (0,misc/* addExceptionMechanism */.M6)(event, options.mechanism);
          }

          event.extra = {
            ...event.extra,
            arguments: args,
          };

          return event;
        });

        captureException(ex);
      });

      throw ex;
    }
  } ;

  // Wrap the wrapped function in a proxy, to ensure any other properties of the original function remain available
  try {
    for (const property in fn) {
      if (Object.prototype.hasOwnProperty.call(fn, property)) {
        sentryWrapped[property ] = fn[property ];
      }
    }
  } catch {
    // Accessing some objects may throw
    // ref: https://github.com/getsentry/sentry-javascript/issues/1168
  }

  // Signal that this function has been wrapped/filled already
  // for both debugging and to prevent it to being wrapped/filled twice
  (0,object/* markFunctionWrapped */.pO)(sentryWrapped, fn);

  (0,object/* addNonEnumerableProperty */.my)(fn, '__sentry_wrapped__', sentryWrapped);

  // Restore original function name (not all browsers allow that)
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, 'name');
    if (descriptor.configurable) {
      Object.defineProperty(sentryWrapped, 'name', {
        get() {
          return fn.name;
        },
      });
    }
  } catch {
    // This may throw if e.g. the descriptor does not exist, or a browser does not allow redefining `name`.
    // to save some bytes we simply try-catch this
  }

  return sentryWrapped;
}


//# sourceMappingURL=helpers.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/envelope.js
var envelope = __webpack_require__(75330);
;// ./node_modules/@sentry/core/build/esm/utils-hoist/clientreport.js



/**
 * Creates client report envelope
 * @param discarded_events An array of discard events
 * @param dsn A DSN that can be set on the header. Optional.
 */
function createClientReportEnvelope(
  discarded_events,
  dsn,
  timestamp,
) {
  const clientReportItem = [
    { type: 'client_report' },
    {
      timestamp: timestamp || (0,utils_hoist_time/* dateTimestampInSeconds */.lu)(),
      discarded_events,
    },
  ];
  return (0,utils_hoist_envelope/* createEnvelope */.h4)(dsn ? { dsn } : {}, [clientReportItem]);
}


//# sourceMappingURL=clientreport.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils/parseSampleRate.js
var parseSampleRate = __webpack_require__(91773);
;// ./node_modules/@sentry/core/build/esm/utils/transactionEvent.js







/**
 * Converts a transaction event to a span JSON object.
 */
function convertTransactionEventToSpanJson(event) {
  const { trace_id, parent_span_id, span_id, status, origin, data, op } = event.contexts?.trace ?? {};

  return (0,object/* dropUndefinedKeys */.Ce)({
    data: data ?? {},
    description: event.transaction,
    op,
    parent_span_id,
    span_id: span_id ?? '',
    start_timestamp: event.start_timestamp ?? 0,
    status,
    timestamp: event.timestamp,
    trace_id: trace_id ?? '',
    origin,
    profile_id: data?.[semanticAttributes/* SEMANTIC_ATTRIBUTE_PROFILE_ID */.E1] ,
    exclusive_time: data?.[semanticAttributes/* SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME */.jG] ,
    measurements: event.measurements,
    is_segment: true,
  });
}

/**
 * Converts a span JSON object to a transaction event.
 */
function convertSpanJsonToTransactionEvent(span) {
  const event = {
    type: 'transaction',
    timestamp: span.timestamp,
    start_timestamp: span.start_timestamp,
    transaction: span.description,
    contexts: {
      trace: {
        trace_id: span.trace_id,
        span_id: span.span_id,
        parent_span_id: span.parent_span_id,
        op: span.op,
        status: span.status,
        origin: span.origin,
        data: {
          ...span.data,
          ...(span.profile_id && { [semanticAttributes/* SEMANTIC_ATTRIBUTE_PROFILE_ID */.E1]: span.profile_id }),
          ...(span.exclusive_time && { [semanticAttributes/* SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME */.jG]: span.exclusive_time }),
        },
      },
    },
    measurements: span.measurements,
  };

  return (0,object/* dropUndefinedKeys */.Ce)(event);
}


//# sourceMappingURL=transactionEvent.js.map

;// ./node_modules/@sentry/core/build/esm/client.js























const ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
const MISSING_RELEASE_FOR_SESSION_ERROR = 'Discarded session because of missing or non-string release';

/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event, it is passed through
 * {@link Client._prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends Client<NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(options);
 *   }
 *
 *   // ...
 * }
 */
class Client {
  /** Options passed to the SDK. */

  /** The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled. */

  /** Array of set up integrations. */

  /** Number of calls being processed */

  /** Holds flushable  */

  // eslint-disable-next-line @typescript-eslint/ban-types

  /**
   * Initializes this client instance.
   *
   * @param options Options for the client.
   */
   constructor(options) {
    this._options = options;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];

    if (options.dsn) {
      this._dsn = (0,utils_hoist_dsn/* makeDsn */.AD)(options.dsn);
    } else {
      debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.warn('No DSN provided, client will not send events.');
    }

    if (this._dsn) {
      const url = getEnvelopeEndpointWithUrlEncodedAuth(
        this._dsn,
        options.tunnel,
        options._metadata ? options._metadata.sdk : undefined,
      );
      this._transport = options.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...options.transportOptions,
        url,
      });
    }
  }

  /**
   * Captures an exception event and sends it to Sentry.
   *
   * Unlike `captureException` exported from every SDK, this method requires that you pass it the current scope.
   */
   captureException(exception, hint, scope) {
    const eventId = (0,misc/* uuid4 */.eJ)();

    // ensure we haven't captured this very object before
    if ((0,misc/* checkOrSetAlreadyCaught */.GR)(exception)) {
      debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.log(ALREADY_SEEN_ERROR);
      return eventId;
    }

    const hintWithEventId = {
      event_id: eventId,
      ...hint,
    };

    this._process(
      this.eventFromException(exception, hintWithEventId).then(event =>
        this._captureEvent(event, hintWithEventId, scope),
      ),
    );

    return hintWithEventId.event_id;
  }

  /**
   * Captures a message event and sends it to Sentry.
   *
   * Unlike `captureMessage` exported from every SDK, this method requires that you pass it the current scope.
   */
   captureMessage(
    message,
    level,
    hint,
    currentScope,
  ) {
    const hintWithEventId = {
      event_id: (0,misc/* uuid4 */.eJ)(),
      ...hint,
    };

    const eventMessage = (0,is/* isParameterizedString */.NF)(message) ? message : String(message);

    const promisedEvent = (0,is/* isPrimitive */.sO)(message)
      ? this.eventFromMessage(eventMessage, level, hintWithEventId)
      : this.eventFromException(message, hintWithEventId);

    this._process(promisedEvent.then(event => this._captureEvent(event, hintWithEventId, currentScope)));

    return hintWithEventId.event_id;
  }

  /**
   * Captures a manually created event and sends it to Sentry.
   *
   * Unlike `captureEvent` exported from every SDK, this method requires that you pass it the current scope.
   */
   captureEvent(event, hint, currentScope) {
    const eventId = (0,misc/* uuid4 */.eJ)();

    // ensure we haven't captured this very object before
    if (hint?.originalException && (0,misc/* checkOrSetAlreadyCaught */.GR)(hint.originalException)) {
      debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.log(ALREADY_SEEN_ERROR);
      return eventId;
    }

    const hintWithEventId = {
      event_id: eventId,
      ...hint,
    };

    const sdkProcessingMetadata = event.sdkProcessingMetadata || {};
    const capturedSpanScope = sdkProcessingMetadata.capturedSpanScope;
    const capturedSpanIsolationScope = sdkProcessingMetadata.capturedSpanIsolationScope;

    this._process(
      this._captureEvent(event, hintWithEventId, capturedSpanScope || currentScope, capturedSpanIsolationScope),
    );

    return hintWithEventId.event_id;
  }

  /**
   * Captures a session.
   */
   captureSession(session) {
    this.sendSession(session);
    // After sending, we set init false to indicate it's not the first occurrence
    (0,esm_session/* updateSession */.qO)(session, { init: false });
  }

  /**
   * Create a cron monitor check in and send it to Sentry. This method is not available on all clients.
   *
   * @param checkIn An object that describes a check in.
   * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
   * to create a monitor automatically when sending a check in.
   * @param scope An optional scope containing event metadata.
   * @returns A string representing the id of the check in.
   */

  /**
   * Get the current Dsn.
   */
   getDsn() {
    return this._dsn;
  }

  /**
   * Get the current options.
   */
   getOptions() {
    return this._options;
  }

  /**
   * Get the SDK metadata.
   * @see SdkMetadata
   */
   getSdkMetadata() {
    return this._options._metadata;
  }

  /**
   * Returns the transport that is used by the client.
   * Please note that the transport gets lazy initialized so it will only be there once the first event has been sent.
   */
   getTransport() {
    return this._transport;
  }

  /**
   * Wait for all events to be sent or the timeout to expire, whichever comes first.
   *
   * @param timeout Maximum time in ms the client should wait for events to be flushed. Omitting this parameter will
   *   cause the client to wait until all events are sent before resolving the promise.
   * @returns A promise that will resolve with `true` if all events are sent before the timeout, or `false` if there are
   * still events in the queue when the timeout is reached.
   */
   flush(timeout) {
    const transport = this._transport;
    if (transport) {
      this.emit('flush');
      return this._isClientDoneProcessing(timeout).then(clientFinished => {
        return transport.flush(timeout).then(transportFlushed => clientFinished && transportFlushed);
      });
    } else {
      return resolvedSyncPromise(true);
    }
  }

  /**
   * Flush the event queue and set the client to `enabled = false`. See {@link Client.flush}.
   *
   * @param {number} timeout Maximum time in ms the client should wait before shutting down. Omitting this parameter will cause
   *   the client to wait until all events are sent before disabling itself.
   * @returns {Promise<boolean>} A promise which resolves to `true` if the flush completes successfully before the timeout, or `false` if
   * it doesn't.
   */
   close(timeout) {
    return this.flush(timeout).then(result => {
      this.getOptions().enabled = false;
      this.emit('close');
      return result;
    });
  }

  /**
   * Get all installed event processors.
   */
   getEventProcessors() {
    return this._eventProcessors;
  }

  /**
   * Adds an event processor that applies to any event processed by this client.
   */
   addEventProcessor(eventProcessor) {
    this._eventProcessors.push(eventProcessor);
  }

  /**
   * Initialize this client.
   * Call this after the client was set on a scope.
   */
   init() {
    if (
      this._isEnabled() ||
      // Force integrations to be setup even if no DSN was set when we have
      // Spotlight enabled. This is particularly important for browser as we
      // don't support the `spotlight` option there and rely on the users
      // adding the `spotlightBrowserIntegration()` to their integrations which
      // wouldn't get initialized with the check below when there's no DSN set.
      this._options.integrations.some(({ name }) => name.startsWith('Spotlight'))
    ) {
      this._setupIntegrations();
    }
  }

  /**
   * Gets an installed integration by its name.
   *
   * @returns {Integration|undefined} The installed integration or `undefined` if no integration with that `name` was installed.
   */
   getIntegrationByName(integrationName) {
    return this._integrations[integrationName] ;
  }

  /**
   * Add an integration to the client.
   * This can be used to e.g. lazy load integrations.
   * In most cases, this should not be necessary,
   * and you're better off just passing the integrations via `integrations: []` at initialization time.
   * However, if you find the need to conditionally load & add an integration, you can use `addIntegration` to do so.
   */
   addIntegration(integration) {
    const isAlreadyInstalled = this._integrations[integration.name];

    // This hook takes care of only installing if not already installed
    setupIntegration(this, integration, this._integrations);
    // Here we need to check manually to make sure to not run this multiple times
    if (!isAlreadyInstalled) {
      afterSetupIntegrations(this, [integration]);
    }
  }

  /**
   * Send a fully prepared event to Sentry.
   */
   sendEvent(event, hint = {}) {
    this.emit('beforeSendEvent', event, hint);

    let env = (0,envelope/* createEventEnvelope */.V7)(event, this._dsn, this._options._metadata, this._options.tunnel);

    for (const attachment of hint.attachments || []) {
      env = (0,utils_hoist_envelope/* addItemToEnvelope */.W3)(env, (0,utils_hoist_envelope/* createAttachmentEnvelopeItem */.bm)(attachment));
    }

    const promise = this.sendEnvelope(env);
    if (promise) {
      promise.then(sendResponse => this.emit('afterSendEvent', event, sendResponse), null);
    }
  }

  /**
   * Send a session or session aggregrates to Sentry.
   */
   sendSession(session) {
    // Backfill release and environment on session
    const { release: clientReleaseOption, environment: clientEnvironmentOption = constants/* DEFAULT_ENVIRONMENT */.U } = this._options;
    if ('aggregates' in session) {
      const sessionAttrs = session.attrs || {};
      if (!sessionAttrs.release && !clientReleaseOption) {
        debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.warn(MISSING_RELEASE_FOR_SESSION_ERROR);
        return;
      }
      sessionAttrs.release = sessionAttrs.release || clientReleaseOption;
      sessionAttrs.environment = sessionAttrs.environment || clientEnvironmentOption;
      session.attrs = sessionAttrs;
    } else {
      if (!session.release && !clientReleaseOption) {
        debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.warn(MISSING_RELEASE_FOR_SESSION_ERROR);
        return;
      }
      session.release = session.release || clientReleaseOption;
      session.environment = session.environment || clientEnvironmentOption;
    }

    this.emit('beforeSendSession', session);

    const env = (0,envelope/* createSessionEnvelope */.LE)(session, this._dsn, this._options._metadata, this._options.tunnel);

    // sendEnvelope should not throw
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.sendEnvelope(env);
  }

  /**
   * Record on the client that an event got dropped (ie, an event that will not be sent to Sentry).
   */
   recordDroppedEvent(reason, category, count = 1) {
    if (this._options.sendClientReports) {
      // We want to track each category (error, transaction, session, replay_event) separately
      // but still keep the distinction between different type of outcomes.
      // We could use nested maps, but it's much easier to read and type this way.
      // A correct type for map-based implementation if we want to go that route
      // would be `Partial<Record<SentryRequestType, Partial<Record<Outcome, number>>>>`
      // With typescript 4.1 we could even use template literal types
      const key = `${reason}:${category}`;
      debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.log(`Recording outcome: "${key}"${count > 1 ? ` (${count} times)` : ''}`);
      this._outcomes[key] = (this._outcomes[key] || 0) + count;
    }
  }

  /* eslint-disable @typescript-eslint/unified-signatures */
  /**
   * Register a callback for whenever a span is started.
   * Receives the span as argument.
   * @returns {() => void} A function that, when executed, removes the registered callback.
   */

  /**
   * Register a hook oin this client.
   */
   on(hook, callback) {
    const hooks = (this._hooks[hook] = this._hooks[hook] || []);

    // @ts-expect-error We assume the types are correct
    hooks.push(callback);

    // This function returns a callback execution handler that, when invoked,
    // deregisters a callback. This is crucial for managing instances where callbacks
    // need to be unregistered to prevent self-referencing in callback closures,
    // ensuring proper garbage collection.
    return () => {
      // @ts-expect-error We assume the types are correct
      const cbIndex = hooks.indexOf(callback);
      if (cbIndex > -1) {
        hooks.splice(cbIndex, 1);
      }
    };
  }

  /** Fire a hook whenever a span starts. */

  /**
   * Emit a hook that was previously registered via `on()`.
   */
   emit(hook, ...rest) {
    const callbacks = this._hooks[hook];
    if (callbacks) {
      callbacks.forEach(callback => callback(...rest));
    }
  }

  /**
   * Send an envelope to Sentry.
   */
   sendEnvelope(envelope) {
    this.emit('beforeEnvelope', envelope);

    if (this._isEnabled() && this._transport) {
      return this._transport.send(envelope).then(null, reason => {
        debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.error('Error while sending envelope:', reason);
        return reason;
      });
    }

    debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.error('Transport disabled');

    return resolvedSyncPromise({});
  }

  /* eslint-enable @typescript-eslint/unified-signatures */

  /** Setup integrations for this client. */
   _setupIntegrations() {
    const { integrations } = this._options;
    this._integrations = setupIntegrations(this, integrations);
    afterSetupIntegrations(this, integrations);
  }

  /** Updates existing session based on the provided event */
   _updateSessionFromEvent(session, event) {
    let crashed = event.level === 'fatal';
    let errored = false;
    const exceptions = event.exception?.values;

    if (exceptions) {
      errored = true;

      for (const ex of exceptions) {
        const mechanism = ex.mechanism;
        if (mechanism?.handled === false) {
          crashed = true;
          break;
        }
      }
    }

    // A session is updated and that session update is sent in only one of the two following scenarios:
    // 1. Session with non terminal status and 0 errors + an error occurred -> Will set error count to 1 and send update
    // 2. Session with non terminal status and 1 error + a crash occurred -> Will set status crashed and send update
    const sessionNonTerminal = session.status === 'ok';
    const shouldUpdateAndSend = (sessionNonTerminal && session.errors === 0) || (sessionNonTerminal && crashed);

    if (shouldUpdateAndSend) {
      (0,esm_session/* updateSession */.qO)(session, {
        ...(crashed && { status: 'crashed' }),
        errors: session.errors || Number(errored || crashed),
      });
      this.captureSession(session);
    }
  }

  /**
   * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
   * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
   * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
   * `false` otherwise
   */
   _isClientDoneProcessing(timeout) {
    return new SyncPromise(resolve => {
      let ticked = 0;
      const tick = 1;

      const interval = setInterval(() => {
        if (this._numProcessing == 0) {
          clearInterval(interval);
          resolve(true);
        } else {
          ticked += tick;
          if (timeout && ticked >= timeout) {
            clearInterval(interval);
            resolve(false);
          }
        }
      }, tick);
    });
  }

  /** Determines whether this SDK is enabled and a transport is present. */
   _isEnabled() {
    return this.getOptions().enabled !== false && this._transport !== undefined;
  }

  /**
   * Adds common information to events.
   *
   * The information includes release and environment from `options`,
   * breadcrumbs and context (extra, tags and user) from the scope.
   *
   * Information that is already present in the event is never overwritten. For
   * nested objects, such as the context, keys are merged.
   *
   * @param event The original event.
   * @param hint May contain additional information about the original exception.
   * @param currentScope A scope containing event metadata.
   * @returns A new event with more information.
   */
   _prepareEvent(
    event,
    hint,
    currentScope,
    isolationScope,
  ) {
    const options = this.getOptions();
    const integrations = Object.keys(this._integrations);
    if (!hint.integrations && integrations?.length) {
      hint.integrations = integrations;
    }

    this.emit('preprocessEvent', event, hint);

    if (!event.type) {
      isolationScope.setLastEventId(event.event_id || hint.event_id);
    }

    return prepareEvent(options, event, hint, currentScope, this, isolationScope).then(evt => {
      if (evt === null) {
        return evt;
      }

      this.emit('postprocessEvent', evt, hint);

      evt.contexts = {
        trace: (0,currentScopes/* getTraceContextFromScope */.vn)(currentScope),
        ...evt.contexts,
      };

      const dynamicSamplingContext = (0,tracing_dynamicSamplingContext/* getDynamicSamplingContextFromScope */.ao)(this, currentScope);

      evt.sdkProcessingMetadata = {
        dynamicSamplingContext,
        ...evt.sdkProcessingMetadata,
      };

      return evt;
    });
  }

  /**
   * Processes the event and logs an error in case of rejection
   * @param event
   * @param hint
   * @param scope
   */
   _captureEvent(
    event,
    hint = {},
    currentScope = (0,currentScopes/* getCurrentScope */.o5)(),
    isolationScope = (0,currentScopes/* getIsolationScope */.rm)(),
  ) {
    if (debug_build/* DEBUG_BUILD */.T && isErrorEvent(event)) {
      logger/* logger */.vF.log(`Captured error event \`${getPossibleEventMessages(event)[0] || '<unknown>'}\``);
    }

    return this._processEvent(event, hint, currentScope, isolationScope).then(
      finalEvent => {
        return finalEvent.event_id;
      },
      reason => {
        if (debug_build/* DEBUG_BUILD */.T) {
          // If something's gone wrong, log the error as a warning. If it's just us having used a `SentryError` for
          // control flow, log just the message (no stack) as a log-level log.
          if (reason instanceof SentryError && reason.logLevel === 'log') {
            logger/* logger */.vF.log(reason.message);
          } else {
            logger/* logger */.vF.warn(reason);
          }
        }
        return undefined;
      },
    );
  }

  /**
   * Processes an event (either error or message) and sends it to Sentry.
   *
   * This also adds breadcrumbs and context information to the event. However,
   * platform specific meta data (such as the User's IP address) must be added
   * by the SDK implementor.
   *
   *
   * @param event The event to send to Sentry.
   * @param hint May contain additional information about the original exception.
   * @param currentScope A scope containing event metadata.
   * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
   */
   _processEvent(
    event,
    hint,
    currentScope,
    isolationScope,
  ) {
    const options = this.getOptions();
    const { sampleRate } = options;

    const isTransaction = isTransactionEvent(event);
    const isError = isErrorEvent(event);
    const eventType = event.type || 'error';
    const beforeSendLabel = `before send for type \`${eventType}\``;

    // 1.0 === 100% events are sent
    // 0.0 === 0% events are sent
    // Sampling for transaction happens somewhere else
    const parsedSampleRate = typeof sampleRate === 'undefined' ? undefined : (0,parseSampleRate/* parseSampleRate */.i)(sampleRate);
    if (isError && typeof parsedSampleRate === 'number' && Math.random() > parsedSampleRate) {
      this.recordDroppedEvent('sample_rate', 'error');
      return rejectedSyncPromise(
        new SentryError(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`,
          'log',
        ),
      );
    }

    const dataCategory = (eventType === 'replay_event' ? 'replay' : eventType) ;

    return this._prepareEvent(event, hint, currentScope, isolationScope)
      .then(prepared => {
        if (prepared === null) {
          this.recordDroppedEvent('event_processor', dataCategory);
          throw new SentryError('An event processor returned `null`, will not send event.', 'log');
        }

        const isInternalException = hint.data && (hint.data ).__sentry__ === true;
        if (isInternalException) {
          return prepared;
        }

        const result = processBeforeSend(this, options, prepared, hint);
        return _validateBeforeSendResult(result, beforeSendLabel);
      })
      .then(processedEvent => {
        if (processedEvent === null) {
          this.recordDroppedEvent('before_send', dataCategory);
          if (isTransaction) {
            const spans = event.spans || [];
            // the transaction itself counts as one span, plus all the child spans that are added
            const spanCount = 1 + spans.length;
            this.recordDroppedEvent('before_send', 'span', spanCount);
          }
          throw new SentryError(`${beforeSendLabel} returned \`null\`, will not send event.`, 'log');
        }

        const session = currentScope.getSession() || isolationScope.getSession();
        if (isError && session) {
          this._updateSessionFromEvent(session, processedEvent);
        }

        if (isTransaction) {
          const spanCountBefore = processedEvent.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
          const spanCountAfter = processedEvent.spans ? processedEvent.spans.length : 0;

          const droppedSpanCount = spanCountBefore - spanCountAfter;
          if (droppedSpanCount > 0) {
            this.recordDroppedEvent('before_send', 'span', droppedSpanCount);
          }
        }

        // None of the Sentry built event processor will update transaction name,
        // so if the transaction name has been changed by an event processor, we know
        // it has to come from custom event processor added by a user
        const transactionInfo = processedEvent.transaction_info;
        if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
          const source = 'custom';
          processedEvent.transaction_info = {
            ...transactionInfo,
            source,
          };
        }

        this.sendEvent(processedEvent, hint);
        return processedEvent;
      })
      .then(null, reason => {
        if (reason instanceof SentryError) {
          throw reason;
        }

        this.captureException(reason, {
          data: {
            __sentry__: true,
          },
          originalException: reason,
        });
        throw new SentryError(
          `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${reason}`,
        );
      });
  }

  /**
   * Occupies the client with processing and event
   */
   _process(promise) {
    this._numProcessing++;
    void promise.then(
      value => {
        this._numProcessing--;
        return value;
      },
      reason => {
        this._numProcessing--;
        return reason;
      },
    );
  }

  /**
   * Clears outcomes on this client and returns them.
   */
   _clearOutcomes() {
    const outcomes = this._outcomes;
    this._outcomes = {};
    return Object.entries(outcomes).map(([key, quantity]) => {
      const [reason, category] = key.split(':') ;
      return {
        reason,
        category,
        quantity,
      };
    });
  }

  /**
   * Sends client reports as an envelope.
   */
   _flushOutcomes() {
    debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.log('Flushing outcomes...');

    const outcomes = this._clearOutcomes();

    if (outcomes.length === 0) {
      debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.log('No outcomes to send');
      return;
    }

    // This is really the only place where we want to check for a DSN and only send outcomes then
    if (!this._dsn) {
      debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.log('No dsn provided, will not send outcomes');
      return;
    }

    debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.log('Sending outcomes:', outcomes);

    const envelope = createClientReportEnvelope(outcomes, this._options.tunnel && (0,utils_hoist_dsn/* dsnToString */.SB)(this._dsn));

    // sendEnvelope should not throw
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.sendEnvelope(envelope);
  }

  /**
   * Creates an {@link Event} from all inputs to `captureException` and non-primitive inputs to `captureMessage`.
   */

}

/**
 * @deprecated Use `Client` instead. This alias may be removed in a future major version.
 */
// TODO(v10): Remove

/**
 * @deprecated Use `Client` instead. This alias may be removed in a future major version.
 */
// TODO(v10): Remove
const BaseClient = (/* unused pure expression or super */ null && (Client));

/**
 * Verifies that return value of configured `beforeSend` or `beforeSendTransaction` is of expected type, and returns the value if so.
 */
function _validateBeforeSendResult(
  beforeSendResult,
  beforeSendLabel,
) {
  const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
  if ((0,is/* isThenable */.Qg)(beforeSendResult)) {
    return beforeSendResult.then(
      event => {
        if (!(0,is/* isPlainObject */.Qd)(event) && event !== null) {
          throw new SentryError(invalidValueError);
        }
        return event;
      },
      e => {
        throw new SentryError(`${beforeSendLabel} rejected with ${e}`);
      },
    );
  } else if (!(0,is/* isPlainObject */.Qd)(beforeSendResult) && beforeSendResult !== null) {
    throw new SentryError(invalidValueError);
  }
  return beforeSendResult;
}

/**
 * Process the matching `beforeSendXXX` callback.
 */
function processBeforeSend(
  client,
  options,
  event,
  hint,
) {
  const { beforeSend, beforeSendTransaction, beforeSendSpan } = options;
  let processedEvent = event;

  if (isErrorEvent(processedEvent) && beforeSend) {
    return beforeSend(processedEvent, hint);
  }

  if (isTransactionEvent(processedEvent)) {
    if (beforeSendSpan) {
      // process root span
      const processedRootSpanJson = beforeSendSpan(convertTransactionEventToSpanJson(processedEvent));
      if (!processedRootSpanJson) {
        (0,spanUtils/* showSpanDropWarning */.xl)();
      } else {
        // update event with processed root span values
        processedEvent = (0,merge/* merge */.h)(event, convertSpanJsonToTransactionEvent(processedRootSpanJson));
      }

      // process child spans
      if (processedEvent.spans) {
        const processedSpans = [];
        for (const span of processedEvent.spans) {
          const processedSpan = beforeSendSpan(span);
          if (!processedSpan) {
            (0,spanUtils/* showSpanDropWarning */.xl)();
            processedSpans.push(span);
          } else {
            processedSpans.push(processedSpan);
          }
        }
        processedEvent.spans = processedSpans;
      }
    }

    if (beforeSendTransaction) {
      if (processedEvent.spans) {
        // We store the # of spans before processing in SDK metadata,
        // so we can compare it afterwards to determine how many spans were dropped
        const spanCountBefore = processedEvent.spans.length;
        processedEvent.sdkProcessingMetadata = {
          ...event.sdkProcessingMetadata,
          spanCountBeforeProcessing: spanCountBefore,
        };
      }
      return beforeSendTransaction(processedEvent , hint);
    }
  }

  return processedEvent;
}

function isErrorEvent(event) {
  return event.type === undefined;
}

function isTransactionEvent(event) {
  return event.type === 'transaction';
}


//# sourceMappingURL=client.js.map

;// ./node_modules/@sentry/core/build/esm/utils-hoist/env.js
/*
 * This module exists for optimizations in the build process through rollup and terser.  We define some global
 * constants, which can be overridden during build. By guarding certain pieces of code with functions that return these
 * constants, we can control whether or not they appear in the final bundle. (Any code guarded by a false condition will
 * never run, and will hence be dropped during treeshaking.) The two primary uses for this are stripping out calls to
 * `logger` and preventing node-related code from appearing in browser bundles.
 *
 * Attention:
 * This file should not be used to define constants/flags that are intended to be used for tree-shaking conducted by
 * users. These flags should live in their respective packages, as we identified user tooling (specifically webpack)
 * having issues tree-shaking these constants across package boundaries.
 * An example for this is the __SENTRY_DEBUG__ constant. It is declared in each package individually because we want
 * users to be able to shake away expressions that it guards.
 */

/**
 * Figures out if we're building a browser bundle.
 *
 * @returns true if this is a browser bundle build.
 */
function isBrowserBundle() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== 'undefined' && !!__SENTRY_BROWSER_BUNDLE__;
}

/**
 * Get source of SDK.
 */
function getSDKSource() {
  // This comment is used to identify this line in the CDN bundle build step and replace this with "return 'cdn';"
  /* __SENTRY_SDK_SOURCE__ */ return 'npm';
}


//# sourceMappingURL=env.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils/sdkMetadata.js
var sdkMetadata = __webpack_require__(8251);
;// ./node_modules/@sentry/core/build/esm/utils/ipAddress.js
// By default, we want to infer the IP address, unless this is explicitly set to `null`
// We do this after all other processing is done
// If `ip_address` is explicitly set to `null` or a value, we leave it as is

/**
 * @internal
 */
function addAutoIpAddressToUser(objWithMaybeUser) {
  if (objWithMaybeUser.user?.ip_address === undefined) {
    objWithMaybeUser.user = {
      ...objWithMaybeUser.user,
      ip_address: '{{auto}}',
    };
  }
}

/**
 * @internal
 */
function addAutoIpAddressToSession(session) {
  if ('aggregates' in session) {
    if (session.attrs?.['ip_address'] === undefined) {
      session.attrs = {
        ...session.attrs,
        ip_address: '{{auto}}',
      };
    }
  } else {
    if (session.ipAddress === undefined) {
      session.ipAddress = '{{auto}}';
    }
  }
}


//# sourceMappingURL=ipAddress.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/eventbuilder.js


/**
 * This function creates an exception from a JavaScript Error
 */
function exceptionFromError(stackParser, ex) {
  // Get the frames first since Opera can lose the stack if we touch anything else first
  const frames = parseStackFrames(stackParser, ex);

  const exception = {
    type: extractType(ex),
    value: extractMessage(ex),
  };

  if (frames.length) {
    exception.stacktrace = { frames };
  }

  if (exception.type === undefined && exception.value === '') {
    exception.value = 'Unrecoverable error caught';
  }

  return exception;
}

function eventFromPlainObject(
  stackParser,
  exception,
  syntheticException,
  isUnhandledRejection,
) {
  const client = (0,currentScopes/* getClient */.KU)();
  const normalizeDepth = client?.getOptions().normalizeDepth;

  // If we can, we extract an exception from the object properties
  const errorFromProp = getErrorPropertyFromObject(exception);

  const extra = {
    __serialized__: (0,normalize/* normalizeToSize */.cd)(exception, normalizeDepth),
  };

  if (errorFromProp) {
    return {
      exception: {
        values: [exceptionFromError(stackParser, errorFromProp)],
      },
      extra,
    };
  }

  const event = {
    exception: {
      values: [
        {
          type: (0,is/* isEvent */.xH)(exception) ? exception.constructor.name : isUnhandledRejection ? 'UnhandledRejection' : 'Error',
          value: getNonErrorObjectExceptionValue(exception, { isUnhandledRejection }),
        } ,
      ],
    },
    extra,
  } ;

  if (syntheticException) {
    const frames = parseStackFrames(stackParser, syntheticException);
    if (frames.length) {
      // event.exception.values[0] has been set above
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      event.exception.values[0].stacktrace = { frames };
    }
  }

  return event;
}

function eventFromError(stackParser, ex) {
  return {
    exception: {
      values: [exceptionFromError(stackParser, ex)],
    },
  };
}

/** Parses stack frames from an error */
function parseStackFrames(
  stackParser,
  ex,
) {
  // Access and store the stacktrace property before doing ANYTHING
  // else to it because Opera is not very good at providing it
  // reliably in other circumstances.
  const stacktrace = ex.stacktrace || ex.stack || '';

  const skipLines = getSkipFirstStackStringLines(ex);
  const framesToPop = getPopFirstTopFrames(ex);

  try {
    return stackParser(stacktrace, skipLines, framesToPop);
  } catch (e) {
    // no-empty
  }

  return [];
}

// Based on our own mapping pattern - https://github.com/getsentry/sentry/blob/9f08305e09866c8bd6d0c24f5b0aabdd7dd6c59c/src/sentry/lang/javascript/errormapping.py#L83-L108
const reactMinifiedRegexp = /Minified React error #\d+;/i;

/**
 * Certain known React errors contain links that would be falsely
 * parsed as frames. This function check for these errors and
 * returns number of the stack string lines to skip.
 */
function getSkipFirstStackStringLines(ex) {
  if (ex && reactMinifiedRegexp.test(ex.message)) {
    return 1;
  }

  return 0;
}

/**
 * If error has `framesToPop` property, it means that the
 * creator tells us the first x frames will be useless
 * and should be discarded. Typically error from wrapper function
 * which don't point to the actual location in the developer's code.
 *
 * Example: https://github.com/zertosh/invariant/blob/master/invariant.js#L46
 */
function getPopFirstTopFrames(ex) {
  if (typeof ex.framesToPop === 'number') {
    return ex.framesToPop;
  }

  return 0;
}

// https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface/Exception
// @ts-expect-error - WebAssembly.Exception is a valid class
function isWebAssemblyException(exception) {
  // Check for support
  // @ts-expect-error - WebAssembly.Exception is a valid class
  if (typeof WebAssembly !== 'undefined' && typeof WebAssembly.Exception !== 'undefined') {
    // @ts-expect-error - WebAssembly.Exception is a valid class
    return exception instanceof WebAssembly.Exception;
  } else {
    return false;
  }
}

/**
 * Extracts from errors what we use as the exception `type` in error events.
 *
 * Usually, this is the `name` property on Error objects but WASM errors need to be treated differently.
 */
function extractType(ex) {
  const name = ex?.name;

  // The name for WebAssembly.Exception Errors needs to be extracted differently.
  // Context: https://github.com/getsentry/sentry-javascript/issues/13787
  if (!name && isWebAssemblyException(ex)) {
    // Emscripten sets array[type, message] to the "message" property on the WebAssembly.Exception object
    const hasTypeInMessage = ex.message && Array.isArray(ex.message) && ex.message.length == 2;
    return hasTypeInMessage ? ex.message[0] : 'WebAssembly.Exception';
  }

  return name;
}

/**
 * There are cases where stacktrace.message is an Event object
 * https://github.com/getsentry/sentry-javascript/issues/1949
 * In this specific case we try to extract stacktrace.message.error.message
 */
function extractMessage(ex) {
  const message = ex?.message;

  if (isWebAssemblyException(ex)) {
    // For Node 18, Emscripten sets array[type, message] to the "message" property on the WebAssembly.Exception object
    if (Array.isArray(ex.message) && ex.message.length == 2) {
      return ex.message[1];
    }
    return 'wasm exception';
  }

  if (!message) {
    return 'No error message';
  }

  if (message.error && typeof message.error.message === 'string') {
    return message.error.message;
  }

  return message;
}

/**
 * Creates an {@link Event} from all inputs to `captureException` and non-primitive inputs to `captureMessage`.
 * @hidden
 */
function eventFromException(
  stackParser,
  exception,
  hint,
  attachStacktrace,
) {
  const syntheticException = hint?.syntheticException || undefined;
  const event = eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace);
  (0,misc/* addExceptionMechanism */.M6)(event); // defaults to { type: 'generic', handled: true }
  event.level = 'error';
  if (hint?.event_id) {
    event.event_id = hint.event_id;
  }
  return resolvedSyncPromise(event);
}

/**
 * Builds and Event from a Message
 * @hidden
 */
function eventFromMessage(
  stackParser,
  message,
  level = 'info',
  hint,
  attachStacktrace,
) {
  const syntheticException = hint?.syntheticException || undefined;
  const event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
  event.level = level;
  if (hint?.event_id) {
    event.event_id = hint.event_id;
  }
  return resolvedSyncPromise(event);
}

/**
 * @hidden
 */
function eventFromUnknownInput(
  stackParser,
  exception,
  syntheticException,
  attachStacktrace,
  isUnhandledRejection,
) {
  let event;

  if ((0,is/* isErrorEvent */.T2)(exception ) && (exception ).error) {
    // If it is an ErrorEvent with `error` property, extract it to get actual Error
    const errorEvent = exception ;
    return eventFromError(stackParser, errorEvent.error );
  }

  // If it is a `DOMError` (which is a legacy API, but still supported in some browsers) then we just extract the name
  // and message, as it doesn't provide anything else. According to the spec, all `DOMExceptions` should also be
  // `Error`s, but that's not the case in IE11, so in that case we treat it the same as we do a `DOMError`.
  //
  // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
  // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
  // https://webidl.spec.whatwg.org/#es-DOMException-specialness
  if ((0,is/* isDOMError */.BD)(exception) || (0,is/* isDOMException */.W6)(exception )) {
    const domException = exception ;

    if ('stack' in (exception )) {
      event = eventFromError(stackParser, exception );
    } else {
      const name = domException.name || ((0,is/* isDOMError */.BD)(domException) ? 'DOMError' : 'DOMException');
      const message = domException.message ? `${name}: ${domException.message}` : name;
      event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
      (0,misc/* addExceptionTypeValue */.gO)(event, message);
    }
    if ('code' in domException) {
      // eslint-disable-next-line deprecation/deprecation
      event.tags = { ...event.tags, 'DOMException.code': `${domException.code}` };
    }

    return event;
  }
  if ((0,is/* isError */.bJ)(exception)) {
    // we have a real Error object, do nothing
    return eventFromError(stackParser, exception);
  }
  if ((0,is/* isPlainObject */.Qd)(exception) || (0,is/* isEvent */.xH)(exception)) {
    // If it's a plain object or an instance of `Event` (the built-in JS kind, not this SDK's `Event` type), serialize
    // it manually. This will allow us to group events based on top-level keys which is much better than creating a new
    // group on any key/value change.
    const objectException = exception ;
    event = eventFromPlainObject(stackParser, objectException, syntheticException, isUnhandledRejection);
    (0,misc/* addExceptionMechanism */.M6)(event, {
      synthetic: true,
    });
    return event;
  }

  // If none of previous checks were valid, then it means that it's not:
  // - an instance of DOMError
  // - an instance of DOMException
  // - an instance of Event
  // - an instance of Error
  // - a valid ErrorEvent (one with an error property)
  // - a plain Object
  //
  // So bail out and capture it as a simple message:
  event = eventFromString(stackParser, exception , syntheticException, attachStacktrace);
  (0,misc/* addExceptionTypeValue */.gO)(event, `${exception}`, undefined);
  (0,misc/* addExceptionMechanism */.M6)(event, {
    synthetic: true,
  });

  return event;
}

function eventFromString(
  stackParser,
  message,
  syntheticException,
  attachStacktrace,
) {
  const event = {};

  if (attachStacktrace && syntheticException) {
    const frames = parseStackFrames(stackParser, syntheticException);
    if (frames.length) {
      event.exception = {
        values: [{ value: message, stacktrace: { frames } }],
      };
    }
    (0,misc/* addExceptionMechanism */.M6)(event, { synthetic: true });
  }

  if ((0,is/* isParameterizedString */.NF)(message)) {
    const { __sentry_template_string__, __sentry_template_values__ } = message;

    event.logentry = {
      message: __sentry_template_string__,
      params: __sentry_template_values__,
    };
    return event;
  }

  event.message = message;
  return event;
}

function getNonErrorObjectExceptionValue(
  exception,
  { isUnhandledRejection },
) {
  const keys = (0,object/* extractExceptionKeysForMessage */.HF)(exception);
  const captureType = isUnhandledRejection ? 'promise rejection' : 'exception';

  // Some ErrorEvent instances do not have an `error` property, which is why they are not handled before
  // We still want to try to get a decent message for these cases
  if ((0,is/* isErrorEvent */.T2)(exception)) {
    return `Event \`ErrorEvent\` captured as ${captureType} with message \`${exception.message}\``;
  }

  if ((0,is/* isEvent */.xH)(exception)) {
    const className = getObjectClassName(exception);
    return `Event \`${className}\` (type=${exception.type}) captured as ${captureType}`;
  }

  return `Object captured as ${captureType} with keys: ${keys}`;
}

function getObjectClassName(obj) {
  try {
    const prototype = Object.getPrototypeOf(obj);
    return prototype ? prototype.constructor.name : undefined;
  } catch (e) {
    // ignore errors here
  }
}

/** If a plain object has a property that is an `Error`, return this error. */
function getErrorPropertyFromObject(obj) {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      const value = obj[prop];
      if (value instanceof Error) {
        return value;
      }
    }
  }

  return undefined;
}


//# sourceMappingURL=eventbuilder.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/client.js




/**
 * Configuration options for the Sentry Browser SDK.
 * @see @sentry/core Options for more information.
 */

/**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
class BrowserClient extends Client {
  /**
   * Creates a new Browser SDK instance.
   *
   * @param options Configuration options for this SDK.
   */
   constructor(options) {
    const opts = {
      // We default this to true, as it is the safer scenario
      parentSpanIsAlwaysRootSpan: true,
      ...options,
    };
    const sdkSource = WINDOW.SENTRY_SDK_SOURCE || getSDKSource();
    (0,sdkMetadata/* applySdkMetadata */.K)(opts, 'browser', ['browser'], sdkSource);

    super(opts);

    if (opts.sendClientReports && WINDOW.document) {
      WINDOW.document.addEventListener('visibilitychange', () => {
        if (WINDOW.document.visibilityState === 'hidden') {
          this._flushOutcomes();
        }
      });
    }

    if (this._options.sendDefaultPii) {
      this.on('postprocessEvent', addAutoIpAddressToUser);
      this.on('beforeSendSession', addAutoIpAddressToSession);
    }
  }

  /**
   * @inheritDoc
   */
   eventFromException(exception, hint) {
    return eventFromException(this._options.stackParser, exception, hint, this._options.attachStacktrace);
  }

  /**
   * @inheritDoc
   */
   eventFromMessage(
    message,
    level = 'info',
    hint,
  ) {
    return eventFromMessage(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
  }

  /**
   * @inheritDoc
   */
   _prepareEvent(
    event,
    hint,
    currentScope,
    isolationScope,
  ) {
    event.platform = event.platform || 'javascript';

    return super._prepareEvent(event, hint, currentScope, isolationScope);
  }
}


//# sourceMappingURL=client.js.map

;// ./node_modules/@sentry/core/build/esm/utils-hoist/supports.js




const supports_WINDOW = worldwide/* GLOBAL_OBJ */.O ;

/**
 * Tells whether current environment supports ErrorEvent objects
 * {@link supportsErrorEvent}.
 *
 * @returns Answer to the given question.
 */
function supportsErrorEvent() {
  try {
    new ErrorEvent('');
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Tells whether current environment supports DOMError objects
 * {@link supportsDOMError}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMError() {
  try {
    // Chrome: VM89:1 Uncaught TypeError: Failed to construct 'DOMError':
    // 1 argument required, but only 0 present.
    // @ts-expect-error It really needs 1 argument, not 0.
    new DOMError('');
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Tells whether current environment supports DOMException objects
 * {@link supportsDOMException}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMException() {
  try {
    new DOMException('');
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */
function supportsHistory() {
  return 'history' in supports_WINDOW;
}

/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 */
function supportsFetch() {
  if (!('fetch' in supports_WINDOW)) {
    return false;
  }

  try {
    new Headers();
    new Request('http://www.example.com');
    new Response();
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * isNative checks if the given function is a native implementation
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isNativeFunction(func) {
  return func && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}

/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns true if `window.fetch` is natively implemented, false otherwise
 */
function supportsNativeFetch() {
  if (typeof EdgeRuntime === 'string') {
    return true;
  }

  if (!supportsFetch()) {
    return false;
  }

  // Fast path to avoid DOM I/O
  // eslint-disable-next-line @typescript-eslint/unbound-method
  if (isNativeFunction(supports_WINDOW.fetch)) {
    return true;
  }

  // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
  // so create a "pure" iframe to see if that has native fetch
  let result = false;
  const doc = supports_WINDOW.document;
  // eslint-disable-next-line deprecation/deprecation
  if (doc && typeof (doc.createElement ) === 'function') {
    try {
      const sandbox = doc.createElement('iframe');
      sandbox.hidden = true;
      doc.head.appendChild(sandbox);
      if (sandbox.contentWindow?.fetch) {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        result = isNativeFunction(sandbox.contentWindow.fetch);
      }
      doc.head.removeChild(sandbox);
    } catch (err) {
      utils_hoist_debug_build/* DEBUG_BUILD */.T &&
        logger/* logger */.vF.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', err);
    }
  }

  return result;
}

/**
 * Tells whether current environment supports ReportingObserver API
 * {@link supportsReportingObserver}.
 *
 * @returns Answer to the given question.
 */
function supportsReportingObserver() {
  return 'ReportingObserver' in supports_WINDOW;
}

/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 */
function supportsReferrerPolicy() {
  // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default'
  // (see https://caniuse.com/#feat=referrer-policy),
  // it doesn't. And it throws an exception instead of ignoring this parameter...
  // REF: https://github.com/getsentry/raven-js/issues/1233

  if (!supportsFetch()) {
    return false;
  }

  try {
    new Request('_', {
      referrerPolicy: 'origin' ,
    });
    return true;
  } catch (e) {
    return false;
  }
}


//# sourceMappingURL=supports.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/debug-build.js
/**
 * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
 *
 * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
 */
const debug_build_DEBUG_BUILD = (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__);


//# sourceMappingURL=debug-build.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/types.js


const types_WINDOW = worldwide/* GLOBAL_OBJ */.O

;


//# sourceMappingURL=types.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/getNativeImplementation.js




/**
 * We generally want to use window.fetch / window.setTimeout.
 * However, in some cases this may be wrapped (e.g. by Zone.js for Angular),
 * so we try to get an unpatched version of this from a sandboxed iframe.
 */

const cachedImplementations = {};

/**
 * Get the native implementation of a browser function.
 *
 * This can be used to ensure we get an unwrapped version of a function, in cases where a wrapped function can lead to problems.
 *
 * The following methods can be retrieved:
 * - `setTimeout`: This can be wrapped by e.g. Angular, causing change detection to be triggered.
 * - `fetch`: This can be wrapped by e.g. ad-blockers, causing an infinite loop when a request is blocked.
 */
function getNativeImplementation(
  name,
) {
  const cached = cachedImplementations[name];
  if (cached) {
    return cached;
  }

  let impl = types_WINDOW[name] ;

  // Fast path to avoid DOM I/O
  if (isNativeFunction(impl)) {
    return (cachedImplementations[name] = impl.bind(types_WINDOW) );
  }

  const document = types_WINDOW.document;
  // eslint-disable-next-line deprecation/deprecation
  if (document && typeof document.createElement === 'function') {
    try {
      const sandbox = document.createElement('iframe');
      sandbox.hidden = true;
      document.head.appendChild(sandbox);
      const contentWindow = sandbox.contentWindow;
      if (contentWindow?.[name]) {
        impl = contentWindow[name] ;
      }
      document.head.removeChild(sandbox);
    } catch (e) {
      // Could not create sandbox iframe, just use window.xxx
      debug_build_DEBUG_BUILD && logger/* logger */.vF.warn(`Could not create sandbox iframe for ${name} check, bailing to window.${name}: `, e);
    }
  }

  // Sanity check: This _should_ not happen, but if it does, we just skip caching...
  // This can happen e.g. in tests where fetch may not be available in the env, or similar.
  if (!impl) {
    return impl;
  }

  return (cachedImplementations[name] = impl.bind(types_WINDOW) );
}

/** Clear a cached implementation. */
function clearCachedImplementation(name) {
  cachedImplementations[name] = undefined;
}

/**
 * A special usecase for incorrectly wrapped Fetch APIs in conjunction with ad-blockers.
 * Whenever someone wraps the Fetch API and returns the wrong promise chain,
 * this chain becomes orphaned and there is no possible way to capture it's rejections
 * other than allowing it bubble up to this very handler. eg.
 *
 * const f = window.fetch;
 * window.fetch = function () {
 *   const p = f.apply(this, arguments);
 *
 *   p.then(function() {
 *     console.log('hi.');
 *   });
 *
 *   return p;
 * }
 *
 * `p.then(function () { ... })` is producing a completely separate promise chain,
 * however, what's returned is `p` - the result of original `fetch` call.
 *
 * This mean, that whenever we use the Fetch API to send our own requests, _and_
 * some ad-blocker blocks it, this orphaned chain will _always_ reject,
 * effectively causing another event to be captured.
 * This makes a whole process become an infinite loop, which we need to somehow
 * deal with, and break it in one way or another.
 *
 * To deal with this issue, we are making sure that we _always_ use the real
 * browser Fetch API, instead of relying on what `window.fetch` exposes.
 * The only downside to this would be missing our own requests as breadcrumbs,
 * but because we are already not doing this, it should be just fine.
 *
 * Possible failed fetch error messages per-browser:
 *
 * Chrome:  Failed to fetch
 * Edge:    Failed to Fetch
 * Firefox: NetworkError when attempting to fetch resource
 * Safari:  resource blocked by content blocker
 */
function fetch(...rest) {
  return getNativeImplementation('fetch')(...rest);
}

/**
 * Get an unwrapped `setTimeout` method.
 * This ensures that even if e.g. Angular wraps `setTimeout`, we get the native implementation,
 * avoiding triggering change detection.
 */
function getNativeImplementation_setTimeout(...rest) {
  return getNativeImplementation('setTimeout')(...rest);
}


//# sourceMappingURL=getNativeImplementation.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/transports/fetch.js



/**
 * Creates a Transport that uses the Fetch API to send events to Sentry.
 */
function makeFetchTransport(
  options,
  nativeFetch = getNativeImplementation('fetch'),
) {
  let pendingBodySize = 0;
  let pendingCount = 0;

  function makeRequest(request) {
    const requestSize = request.body.length;
    pendingBodySize += requestSize;
    pendingCount++;

    const requestOptions = {
      body: request.body,
      method: 'POST',
      referrerPolicy: 'strict-origin',
      headers: options.headers,
      // Outgoing requests are usually cancelled when navigating to a different page, causing a "TypeError: Failed to
      // fetch" error and sending a "network_error" client-outcome - in Chrome, the request status shows "(cancelled)".
      // The `keepalive` flag keeps outgoing requests alive, even when switching pages. We want this since we're
      // frequently sending events right before the user is switching pages (eg. when finishing navigation transactions).
      // Gotchas:
      // - `keepalive` isn't supported by Firefox
      // - As per spec (https://fetch.spec.whatwg.org/#http-network-or-cache-fetch):
      //   If the sum of contentLength and inflightKeepaliveBytes is greater than 64 kibibytes, then return a network error.
      //   We will therefore only activate the flag when we're below that limit.
      // There is also a limit of requests that can be open at the same time, so we also limit this to 15
      // See https://github.com/getsentry/sentry-javascript/pull/7553 for details
      keepalive: pendingBodySize <= 60000 && pendingCount < 15,
      ...options.fetchOptions,
    };

    if (!nativeFetch) {
      clearCachedImplementation('fetch');
      return rejectedSyncPromise('No fetch implementation available');
    }

    try {
      // TODO: This may need a `suppressTracing` call in the future when we switch the browser SDK to OTEL
      return nativeFetch(options.url, requestOptions).then(response => {
        pendingBodySize -= requestSize;
        pendingCount--;
        return {
          statusCode: response.status,
          headers: {
            'x-sentry-rate-limits': response.headers.get('X-Sentry-Rate-Limits'),
            'retry-after': response.headers.get('Retry-After'),
          },
        };
      });
    } catch (e) {
      clearCachedImplementation('fetch');
      pendingBodySize -= requestSize;
      pendingCount--;
      return rejectedSyncPromise(e);
    }
  }

  return createTransport(options, makeRequest);
}


//# sourceMappingURL=fetch.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/stack-parsers.js


// This was originally forked from https://github.com/csnover/TraceKit, and was largely
// re - written as part of raven - js.
//
// This code was later copied to the JavaScript mono - repo and further modified and
// refactored over the years.


const OPERA10_PRIORITY = 10;
const OPERA11_PRIORITY = 20;
const CHROME_PRIORITY = 30;
const WINJS_PRIORITY = 40;
const GECKO_PRIORITY = 50;

function createFrame(filename, func, lineno, colno) {
  const frame = {
    filename,
    function: func === '<anonymous>' ? stacktrace/* UNKNOWN_FUNCTION */.yF : func,
    in_app: true, // All browser frames are considered in_app
  };

  if (lineno !== undefined) {
    frame.lineno = lineno;
  }

  if (colno !== undefined) {
    frame.colno = colno;
  }

  return frame;
}

// This regex matches frames that have no function name (ie. are at the top level of a module).
// For example "at http://localhost:5000//script.js:1:126"
// Frames _with_ function names usually look as follows: "at commitLayoutEffects (react-dom.development.js:23426:1)"
const chromeRegexNoFnName = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;

// This regex matches all the frames that have a function name.
const chromeRegex =
  /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;

const chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;

// Chromium based browsers: Chrome, Brave, new Opera, new Edge
// We cannot call this variable `chrome` because it can conflict with global `chrome` variable in certain environments
// See: https://github.com/getsentry/sentry-javascript/issues/6880
const chromeStackParserFn = line => {
  // If the stack line has no function name, we need to parse it differently
  const noFnParts = chromeRegexNoFnName.exec(line) ;

  if (noFnParts) {
    const [, filename, line, col] = noFnParts;
    return createFrame(filename, stacktrace/* UNKNOWN_FUNCTION */.yF, +line, +col);
  }

  const parts = chromeRegex.exec(line) ;

  if (parts) {
    const isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line

    if (isEval) {
      const subMatch = chromeEvalRegex.exec(parts[2]) ;

      if (subMatch) {
        // throw out eval line/column and use top-most line/column number
        parts[2] = subMatch[1]; // url
        parts[3] = subMatch[2]; // line
        parts[4] = subMatch[3]; // column
      }
    }

    // Kamil: One more hack won't hurt us right? Understanding and adding more rules on top of these regexps right now
    // would be way too time consuming. (TODO: Rewrite whole RegExp to be more readable)
    const [func, filename] = extractSafariExtensionDetails(parts[1] || stacktrace/* UNKNOWN_FUNCTION */.yF, parts[2]);

    return createFrame(filename, func, parts[3] ? +parts[3] : undefined, parts[4] ? +parts[4] : undefined);
  }

  return;
};

const chromeStackLineParser = [CHROME_PRIORITY, chromeStackParserFn];

// gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
// generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
// We need this specific case for now because we want no other regex to match.
const geckoREgex =
  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

const gecko = line => {
  const parts = geckoREgex.exec(line) ;

  if (parts) {
    const isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
    if (isEval) {
      const subMatch = geckoEvalRegex.exec(parts[3]) ;

      if (subMatch) {
        // throw out eval line/column and use top-most line number
        parts[1] = parts[1] || 'eval';
        parts[3] = subMatch[1];
        parts[4] = subMatch[2];
        parts[5] = ''; // no column when eval
      }
    }

    let filename = parts[3];
    let func = parts[1] || stacktrace/* UNKNOWN_FUNCTION */.yF;
    [func, filename] = extractSafariExtensionDetails(func, filename);

    return createFrame(filename, func, parts[4] ? +parts[4] : undefined, parts[5] ? +parts[5] : undefined);
  }

  return;
};

const geckoStackLineParser = [GECKO_PRIORITY, gecko];

const winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i;

const winjs = line => {
  const parts = winjsRegex.exec(line) ;

  return parts
    ? createFrame(parts[2], parts[1] || stacktrace/* UNKNOWN_FUNCTION */.yF, +parts[3], parts[4] ? +parts[4] : undefined)
    : undefined;
};

const winjsStackLineParser = [WINJS_PRIORITY, winjs];

const opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;

const opera10 = line => {
  const parts = opera10Regex.exec(line) ;
  return parts ? createFrame(parts[2], parts[3] || stacktrace/* UNKNOWN_FUNCTION */.yF, +parts[1]) : undefined;
};

const opera10StackLineParser = [OPERA10_PRIORITY, opera10];

const opera11Regex =
  / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i;

const opera11 = line => {
  const parts = opera11Regex.exec(line) ;
  return parts ? createFrame(parts[5], parts[3] || parts[4] || stacktrace/* UNKNOWN_FUNCTION */.yF, +parts[1], +parts[2]) : undefined;
};

const opera11StackLineParser = [OPERA11_PRIORITY, opera11];

const defaultStackLineParsers = [chromeStackLineParser, geckoStackLineParser];

const defaultStackParser = (0,stacktrace/* createStackParser */.gd)(...defaultStackLineParsers);

/**
 * Safari web extensions, starting version unknown, can produce "frames-only" stacktraces.
 * What it means, is that instead of format like:
 *
 * Error: wat
 *   at function@url:row:col
 *   at function@url:row:col
 *   at function@url:row:col
 *
 * it produces something like:
 *
 *   function@url:row:col
 *   function@url:row:col
 *   function@url:row:col
 *
 * Because of that, it won't be captured by `chrome` RegExp and will fall into `Gecko` branch.
 * This function is extracted so that we can use it in both places without duplicating the logic.
 * Unfortunately "just" changing RegExp is too complicated now and making it pass all tests
 * and fix this case seems like an impossible, or at least way too time-consuming task.
 */
const extractSafariExtensionDetails = (func, filename) => {
  const isSafariExtension = func.indexOf('safari-extension') !== -1;
  const isSafariWebExtension = func.indexOf('safari-web-extension') !== -1;

  return isSafariExtension || isSafariWebExtension
    ? [
        func.indexOf('@') !== -1 ? (func.split('@')[0] ) : stacktrace/* UNKNOWN_FUNCTION */.yF,
        isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`,
      ]
    : [func, filename];
};


//# sourceMappingURL=stack-parsers.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/userfeedback.js


/**
 * Creates an envelope from a user feedback.
 */
function createUserFeedbackEnvelope(
  feedback,
  {
    metadata,
    tunnel,
    dsn,
  }

,
) {
  const headers = {
    event_id: feedback.event_id,
    sent_at: new Date().toISOString(),
    ...(metadata?.sdk && {
      sdk: {
        name: metadata.sdk.name,
        version: metadata.sdk.version,
      },
    }),
    ...(!!tunnel && !!dsn && { dsn: (0,utils_hoist_dsn/* dsnToString */.SB)(dsn) }),
  };
  const item = createUserFeedbackEnvelopeItem(feedback);

  return (0,utils_hoist_envelope/* createEnvelope */.h4)(headers, [item]);
}

function createUserFeedbackEnvelopeItem(feedback) {
  const feedbackHeaders = {
    type: 'user_report',
  };
  return [feedbackHeaders, feedback];
}


//# sourceMappingURL=userfeedback.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/browser.js
var browser = __webpack_require__(87320);
;// ./node_modules/@sentry/browser/build/npm/esm/debug-build.js
/**
 * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
 *
 * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
 */
const esm_debug_build_DEBUG_BUILD = (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__);


//# sourceMappingURL=debug-build.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/instrument/dom.js



const DEBOUNCE_DURATION = 1000;

let debounceTimerID;
let lastCapturedEventType;
let lastCapturedEventTargetId;

/**
 * Add an instrumentation handler for when a click or a keypress happens.
 *
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addClickKeypressInstrumentationHandler(handler) {
  const type = 'dom';
  addHandler(type, handler);
  maybeInstrument(type, instrumentDOM);
}

/** Exported for tests only. */
function instrumentDOM() {
  if (!types_WINDOW.document) {
    return;
  }

  // Make it so that any click or keypress that is unhandled / bubbled up all the way to the document triggers our dom
  // handlers. (Normally we have only one, which captures a breadcrumb for each click or keypress.) Do this before
  // we instrument `addEventListener` so that we don't end up attaching this handler twice.
  const triggerDOMHandler = triggerHandlers.bind(null, 'dom');
  const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
  types_WINDOW.document.addEventListener('click', globalDOMEventHandler, false);
  types_WINDOW.document.addEventListener('keypress', globalDOMEventHandler, false);

  // After hooking into click and keypress events bubbled up to `document`, we also hook into user-handled
  // clicks & keypresses, by adding an event listener of our own to any element to which they add a listener. That
  // way, whenever one of their handlers is triggered, ours will be, too. (This is needed because their handler
  // could potentially prevent the event from bubbling up to our global listeners. This way, our handler are still
  // guaranteed to fire at least once.)
  ['EventTarget', 'Node'].forEach((target) => {
    const globalObject = types_WINDOW ;
    const proto = globalObject[target]?.prototype;

    // eslint-disable-next-line no-prototype-builtins
    if (!proto?.hasOwnProperty?.('addEventListener')) {
      return;
    }

    (0,object/* fill */.GS)(proto, 'addEventListener', function (originalAddEventListener) {
      return function ( type, listener, options) {
        if (type === 'click' || type == 'keypress') {
          try {
            const handlers = (this.__sentry_instrumentation_handlers__ =
              this.__sentry_instrumentation_handlers__ || {});
            const handlerForType = (handlers[type] = handlers[type] || { refCount: 0 });

            if (!handlerForType.handler) {
              const handler = makeDOMEventHandler(triggerDOMHandler);
              handlerForType.handler = handler;
              originalAddEventListener.call(this, type, handler, options);
            }

            handlerForType.refCount++;
          } catch (e) {
            // Accessing dom properties is always fragile.
            // Also allows us to skip `addEventListeners` calls with no proper `this` context.
          }
        }

        return originalAddEventListener.call(this, type, listener, options);
      };
    });

    (0,object/* fill */.GS)(
      proto,
      'removeEventListener',
      function (originalRemoveEventListener) {
        return function ( type, listener, options) {
          if (type === 'click' || type == 'keypress') {
            try {
              const handlers = this.__sentry_instrumentation_handlers__ || {};
              const handlerForType = handlers[type];

              if (handlerForType) {
                handlerForType.refCount--;
                // If there are no longer any custom handlers of the current type on this element, we can remove ours, too.
                if (handlerForType.refCount <= 0) {
                  originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                  handlerForType.handler = undefined;
                  delete handlers[type]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
                }

                // If there are no longer any custom handlers of any type on this element, cleanup everything.
                if (Object.keys(handlers).length === 0) {
                  delete this.__sentry_instrumentation_handlers__;
                }
              }
            } catch (e) {
              // Accessing dom properties is always fragile.
              // Also allows us to skip `addEventListeners` calls with no proper `this` context.
            }
          }

          return originalRemoveEventListener.call(this, type, listener, options);
        };
      },
    );
  });
}

/**
 * Check whether the event is similar to the last captured one. For example, two click events on the same button.
 */
function isSimilarToLastCapturedEvent(event) {
  // If both events have different type, then user definitely performed two separate actions. e.g. click + keypress.
  if (event.type !== lastCapturedEventType) {
    return false;
  }

  try {
    // If both events have the same type, it's still possible that actions were performed on different targets.
    // e.g. 2 clicks on different buttons.
    if (!event.target || (event.target )._sentryId !== lastCapturedEventTargetId) {
      return false;
    }
  } catch (e) {
    // just accessing `target` property can throw an exception in some rare circumstances
    // see: https://github.com/getsentry/sentry-javascript/issues/838
  }

  // If both events have the same type _and_ same `target` (an element which triggered an event, _not necessarily_
  // to which an event listener was attached), we treat them as the same action, as we want to capture
  // only one breadcrumb. e.g. multiple clicks on the same button, or typing inside a user input box.
  return true;
}

/**
 * Decide whether an event should be captured.
 * @param event event to be captured
 */
function shouldSkipDOMEvent(eventType, target) {
  // We are only interested in filtering `keypress` events for now.
  if (eventType !== 'keypress') {
    return false;
  }

  if (!target?.tagName) {
    return true;
  }

  // Only consider keypress events on actual input elements. This will disregard keypresses targeting body
  // e.g.tabbing through elements, hotkeys, etc.
  if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
    return false;
  }

  return true;
}

/**
 * Wraps addEventListener to capture UI breadcrumbs
 */
function makeDOMEventHandler(
  handler,
  globalListener = false,
) {
  return (event) => {
    // It's possible this handler might trigger multiple times for the same
    // event (e.g. event propagation through node ancestors).
    // Ignore if we've already captured that event.
    if (!event || event['_sentryCaptured']) {
      return;
    }

    const target = getEventTarget(event);

    // We always want to skip _some_ events.
    if (shouldSkipDOMEvent(event.type, target)) {
      return;
    }

    // Mark event as "seen"
    (0,object/* addNonEnumerableProperty */.my)(event, '_sentryCaptured', true);

    if (target && !target._sentryId) {
      // Add UUID to event target so we can identify if
      (0,object/* addNonEnumerableProperty */.my)(target, '_sentryId', (0,misc/* uuid4 */.eJ)());
    }

    const name = event.type === 'keypress' ? 'input' : event.type;

    // If there is no last captured event, it means that we can safely capture the new event and store it for future comparisons.
    // If there is a last captured event, see if the new event is different enough to treat it as a unique one.
    // If that's the case, emit the previous event and store locally the newly-captured DOM event.
    if (!isSimilarToLastCapturedEvent(event)) {
      const handlerData = { event, name, global: globalListener };
      handler(handlerData);
      lastCapturedEventType = event.type;
      lastCapturedEventTargetId = target ? target._sentryId : undefined;
    }

    // Start a new debounce timer that will prevent us from capturing multiple events that should be grouped together.
    clearTimeout(debounceTimerID);
    debounceTimerID = types_WINDOW.setTimeout(() => {
      lastCapturedEventTargetId = undefined;
      lastCapturedEventType = undefined;
    }, DEBOUNCE_DURATION);
  };
}

function getEventTarget(event) {
  try {
    return event.target ;
  } catch (e) {
    // just accessing `target` property can throw an exception in some rare circumstances
    // see: https://github.com/getsentry/sentry-javascript/issues/838
    return null;
  }
}


//# sourceMappingURL=dom.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/instrument/xhr.js



const SENTRY_XHR_DATA_KEY = '__sentry_xhr_v3__';

/**
 * Add an instrumentation handler for when an XHR request happens.
 * The handler function is called once when the request starts and once when it ends,
 * which can be identified by checking if it has an `endTimestamp`.
 *
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addXhrInstrumentationHandler(handler) {
  const type = 'xhr';
  addHandler(type, handler);
  maybeInstrument(type, instrumentXHR);
}

/** Exported only for tests. */
function instrumentXHR() {
  if (!(types_WINDOW ).XMLHttpRequest) {
    return;
  }

  const xhrproto = XMLHttpRequest.prototype;

  // eslint-disable-next-line @typescript-eslint/unbound-method
  xhrproto.open = new Proxy(xhrproto.open, {
    apply(originalOpen, xhrOpenThisArg, xhrOpenArgArray) {
      // NOTE: If you are a Sentry user, and you are seeing this stack frame,
      //       it means the error, that was caused by your XHR call did not
      //       have a stack trace. If you are using HttpClient integration,
      //       this is the expected behavior, as we are using this virtual error to capture
      //       the location of your XHR call, and group your HttpClient events accordingly.
      const virtualError = new Error();

      const startTimestamp = (0,utils_hoist_time/* timestampInSeconds */.zf)() * 1000;

      // open() should always be called with two or more arguments
      // But to be on the safe side, we actually validate this and bail out if we don't have a method & url
      const method = (0,is/* isString */.Kg)(xhrOpenArgArray[0]) ? xhrOpenArgArray[0].toUpperCase() : undefined;
      const url = parseUrl(xhrOpenArgArray[1]);

      if (!method || !url) {
        return originalOpen.apply(xhrOpenThisArg, xhrOpenArgArray);
      }

      xhrOpenThisArg[SENTRY_XHR_DATA_KEY] = {
        method,
        url,
        request_headers: {},
      };

      // if Sentry key appears in URL, don't capture it as a request
      if (method === 'POST' && url.match(/sentry_key/)) {
        xhrOpenThisArg.__sentry_own_request__ = true;
      }

      const onreadystatechangeHandler = () => {
        // For whatever reason, this is not the same instance here as from the outer method
        const xhrInfo = xhrOpenThisArg[SENTRY_XHR_DATA_KEY];

        if (!xhrInfo) {
          return;
        }

        if (xhrOpenThisArg.readyState === 4) {
          try {
            // touching statusCode in some platforms throws
            // an exception
            xhrInfo.status_code = xhrOpenThisArg.status;
          } catch (e) {
            /* do nothing */
          }

          const handlerData = {
            endTimestamp: (0,utils_hoist_time/* timestampInSeconds */.zf)() * 1000,
            startTimestamp,
            xhr: xhrOpenThisArg,
            virtualError,
          };
          triggerHandlers('xhr', handlerData);
        }
      };

      if ('onreadystatechange' in xhrOpenThisArg && typeof xhrOpenThisArg.onreadystatechange === 'function') {
        xhrOpenThisArg.onreadystatechange = new Proxy(xhrOpenThisArg.onreadystatechange, {
          apply(originalOnreadystatechange, onreadystatechangeThisArg, onreadystatechangeArgArray) {
            onreadystatechangeHandler();
            return originalOnreadystatechange.apply(onreadystatechangeThisArg, onreadystatechangeArgArray);
          },
        });
      } else {
        xhrOpenThisArg.addEventListener('readystatechange', onreadystatechangeHandler);
      }

      // Intercepting `setRequestHeader` to access the request headers of XHR instance.
      // This will only work for user/library defined headers, not for the default/browser-assigned headers.
      // Request cookies are also unavailable for XHR, as `Cookie` header can't be defined by `setRequestHeader`.
      xhrOpenThisArg.setRequestHeader = new Proxy(xhrOpenThisArg.setRequestHeader, {
        apply(
          originalSetRequestHeader,
          setRequestHeaderThisArg,
          setRequestHeaderArgArray,
        ) {
          const [header, value] = setRequestHeaderArgArray;

          const xhrInfo = setRequestHeaderThisArg[SENTRY_XHR_DATA_KEY];

          if (xhrInfo && (0,is/* isString */.Kg)(header) && (0,is/* isString */.Kg)(value)) {
            xhrInfo.request_headers[header.toLowerCase()] = value;
          }

          return originalSetRequestHeader.apply(setRequestHeaderThisArg, setRequestHeaderArgArray);
        },
      });

      return originalOpen.apply(xhrOpenThisArg, xhrOpenArgArray);
    },
  });

  // eslint-disable-next-line @typescript-eslint/unbound-method
  xhrproto.send = new Proxy(xhrproto.send, {
    apply(originalSend, sendThisArg, sendArgArray) {
      const sentryXhrData = sendThisArg[SENTRY_XHR_DATA_KEY];

      if (!sentryXhrData) {
        return originalSend.apply(sendThisArg, sendArgArray);
      }

      if (sendArgArray[0] !== undefined) {
        sentryXhrData.body = sendArgArray[0];
      }

      const handlerData = {
        startTimestamp: (0,utils_hoist_time/* timestampInSeconds */.zf)() * 1000,
        xhr: sendThisArg,
      };
      triggerHandlers('xhr', handlerData);

      return originalSend.apply(sendThisArg, sendArgArray);
    },
  });
}

function parseUrl(url) {
  if ((0,is/* isString */.Kg)(url)) {
    return url;
  }

  try {
    // url can be a string or URL
    // but since URL is not available in IE11, we do not check for it,
    // but simply assume it is an URL and return `toString()` from it (which returns the full URL)
    // If that fails, we just return undefined
    return (url ).toString();
  } catch {} // eslint-disable-line no-empty

  return undefined;
}


//# sourceMappingURL=xhr.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/instrument/history.js



let lastHref;

/**
 * Add an instrumentation handler for when a fetch request happens.
 * The handler function is called once when the request starts and once when it ends,
 * which can be identified by checking if it has an `endTimestamp`.
 *
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addHistoryInstrumentationHandler(handler) {
  const type = 'history';
  addHandler(type, handler);
  maybeInstrument(type, instrumentHistory);
}

function instrumentHistory() {
  // The `popstate` event may also be triggered on `pushState`, but it may not always reliably be emitted by the browser
  // Which is why we also monkey-patch methods below, in addition to this
  types_WINDOW.addEventListener('popstate', () => {
    const to = types_WINDOW.location.href;
    // keep track of the current URL state, as we always receive only the updated state
    const from = lastHref;
    lastHref = to;

    if (from === to) {
      return;
    }

    const handlerData = { from, to } ;
    triggerHandlers('history', handlerData);
  });

  // Just guard against this not being available, in weird environments
  if (!supportsHistory()) {
    return;
  }

  function historyReplacementFunction(originalHistoryFunction) {
    return function ( ...args) {
      const url = args.length > 2 ? args[2] : undefined;
      if (url) {
        // coerce to string (this is what pushState does)
        const from = lastHref;
        const to = String(url);
        // keep track of the current URL state, as we always receive only the updated state
        lastHref = to;

        if (from === to) {
          return originalHistoryFunction.apply(this, args);
        }

        const handlerData = { from, to } ;
        triggerHandlers('history', handlerData);
      }
      return originalHistoryFunction.apply(this, args);
    };
  }

  (0,object/* fill */.GS)(types_WINDOW.history, 'pushState', historyReplacementFunction);
  (0,object/* fill */.GS)(types_WINDOW.history, 'replaceState', historyReplacementFunction);
}


//# sourceMappingURL=history.js.map

;// ./node_modules/@sentry/core/build/esm/utils-hoist/instrument/fetch.js







/**
 * Add an instrumentation handler for when a fetch request happens.
 * The handler function is called once when the request starts and once when it ends,
 * which can be identified by checking if it has an `endTimestamp`.
 *
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addFetchInstrumentationHandler(
  handler,
  skipNativeFetchCheck,
) {
  const type = 'fetch';
  addHandler(type, handler);
  maybeInstrument(type, () => instrumentFetch(undefined, skipNativeFetchCheck));
}

/**
 * Add an instrumentation handler for long-lived fetch requests, like consuming server-sent events (SSE) via fetch.
 * The handler will resolve the request body and emit the actual `endTimestamp`, so that the
 * span can be updated accordingly.
 *
 * Only used internally
 * @hidden
 */
function addFetchEndInstrumentationHandler(handler) {
  const type = 'fetch-body-resolved';
  addHandler(type, handler);
  maybeInstrument(type, () => instrumentFetch(streamHandler));
}

function instrumentFetch(onFetchResolved, skipNativeFetchCheck = false) {
  if (skipNativeFetchCheck && !supportsNativeFetch()) {
    return;
  }

  (0,object/* fill */.GS)(worldwide/* GLOBAL_OBJ */.O, 'fetch', function (originalFetch) {
    return function (...args) {
      // We capture the error right here and not in the Promise error callback because Safari (and probably other
      // browsers too) will wipe the stack trace up to this point, only leaving us with this file which is useless.

      // NOTE: If you are a Sentry user, and you are seeing this stack frame,
      //       it means the error, that was caused by your fetch call did not
      //       have a stack trace, so the SDK backfilled the stack trace so
      //       you can see which fetch call failed.
      const virtualError = new Error();

      const { method, url } = parseFetchArgs(args);
      const handlerData = {
        args,
        fetchData: {
          method,
          url,
        },
        startTimestamp: (0,utils_hoist_time/* timestampInSeconds */.zf)() * 1000,
        // // Adding the error to be able to fingerprint the failed fetch event in HttpClient instrumentation
        virtualError,
      };

      // if there is no callback, fetch is instrumented directly
      if (!onFetchResolved) {
        triggerHandlers('fetch', {
          ...handlerData,
        });
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return originalFetch.apply(worldwide/* GLOBAL_OBJ */.O, args).then(
        async (response) => {
          if (onFetchResolved) {
            onFetchResolved(response);
          } else {
            triggerHandlers('fetch', {
              ...handlerData,
              endTimestamp: (0,utils_hoist_time/* timestampInSeconds */.zf)() * 1000,
              response,
            });
          }

          return response;
        },
        (error) => {
          triggerHandlers('fetch', {
            ...handlerData,
            endTimestamp: (0,utils_hoist_time/* timestampInSeconds */.zf)() * 1000,
            error,
          });

          if ((0,is/* isError */.bJ)(error) && error.stack === undefined) {
            // NOTE: If you are a Sentry user, and you are seeing this stack frame,
            //       it means the error, that was caused by your fetch call did not
            //       have a stack trace, so the SDK backfilled the stack trace so
            //       you can see which fetch call failed.
            error.stack = virtualError.stack;
            (0,object/* addNonEnumerableProperty */.my)(error, 'framesToPop', 1);
          }

          // NOTE: If you are a Sentry user, and you are seeing this stack frame,
          //       it means the sentry.javascript SDK caught an error invoking your application code.
          //       This is expected behavior and NOT indicative of a bug with sentry.javascript.
          throw error;
        },
      );
    };
  });
}

async function resolveResponse(res, onFinishedResolving) {
  if (res?.body) {
    const body = res.body;
    const responseReader = body.getReader();

    // Define a maximum duration after which we just cancel
    const maxFetchDurationTimeout = setTimeout(
      () => {
        body.cancel().then(null, () => {
          // noop
        });
      },
      90 * 1000, // 90s
    );

    let readingActive = true;
    while (readingActive) {
      let chunkTimeout;
      try {
        // abort reading if read op takes more than 5s
        chunkTimeout = setTimeout(() => {
          body.cancel().then(null, () => {
            // noop on error
          });
        }, 5000);

        // This .read() call will reject/throw when we abort due to timeouts through `body.cancel()`
        const { done } = await responseReader.read();

        clearTimeout(chunkTimeout);

        if (done) {
          onFinishedResolving();
          readingActive = false;
        }
      } catch (error) {
        readingActive = false;
      } finally {
        clearTimeout(chunkTimeout);
      }
    }

    clearTimeout(maxFetchDurationTimeout);

    responseReader.releaseLock();
    body.cancel().then(null, () => {
      // noop on error
    });
  }
}

function streamHandler(response) {
  // clone response for awaiting stream
  let clonedResponseForResolving;
  try {
    clonedResponseForResolving = response.clone();
  } catch {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  resolveResponse(clonedResponseForResolving, () => {
    triggerHandlers('fetch-body-resolved', {
      endTimestamp: (0,utils_hoist_time/* timestampInSeconds */.zf)() * 1000,
      response,
    });
  });
}

function hasProp(obj, prop) {
  return !!obj && typeof obj === 'object' && !!(obj )[prop];
}

function getUrlFromResource(resource) {
  if (typeof resource === 'string') {
    return resource;
  }

  if (!resource) {
    return '';
  }

  if (hasProp(resource, 'url')) {
    return resource.url;
  }

  if (resource.toString) {
    return resource.toString();
  }

  return '';
}

/**
 * Parses the fetch arguments to find the used Http method and the url of the request.
 * Exported for tests only.
 */
function parseFetchArgs(fetchArgs) {
  if (fetchArgs.length === 0) {
    return { method: 'GET', url: '' };
  }

  if (fetchArgs.length === 2) {
    const [url, options] = fetchArgs ;

    return {
      url: getUrlFromResource(url),
      method: hasProp(options, 'method') ? String(options.method).toUpperCase() : 'GET',
    };
  }

  const arg = fetchArgs[0];
  return {
    url: getUrlFromResource(arg ),
    method: hasProp(arg, 'method') ? String(arg.method).toUpperCase() : 'GET',
  };
}


//# sourceMappingURL=fetch.js.map

;// ./node_modules/@sentry/core/build/esm/utils-hoist/breadcrumb-log-level.js
/**
 * Determine a breadcrumb's log level (only `warning` or `error`) based on an HTTP status code.
 */
function getBreadcrumbLogLevelFromHttpStatusCode(statusCode) {
  // NOTE: undefined defaults to 'info' in Sentry
  if (statusCode === undefined) {
    return undefined;
  } else if (statusCode >= 400 && statusCode < 500) {
    return 'warning';
  } else if (statusCode >= 500) {
    return 'error';
  } else {
    return undefined;
  }
}


//# sourceMappingURL=breadcrumb-log-level.js.map

;// ./node_modules/@sentry/core/build/esm/utils-hoist/url.js
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */
function url_parseUrl(url) {
  if (!url) {
    return {};
  }

  const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);

  if (!match) {
    return {};
  }

  // coerce to undefined values to empty string so we don't get 'undefined'
  const query = match[6] || '';
  const fragment = match[8] || '';
  return {
    host: match[4],
    path: match[5],
    protocol: match[2],
    search: query,
    hash: fragment,
    relative: match[5] + query + fragment, // everything minus origin
  };
}

/**
 * Strip the query string and fragment off of a given URL or path (if present)
 *
 * @param urlPath Full URL or path, including possible query string and/or fragment
 * @returns URL or path without query string or fragment
 */
function stripUrlQueryAndFragment(urlPath) {
  return (urlPath.split(/[?#]/, 1) )[0];
}

/**
 * Takes a URL object and returns a sanitized string which is safe to use as span name
 * see: https://develop.sentry.dev/sdk/data-handling/#structuring-data
 */
function getSanitizedUrlString(url) {
  const { protocol, host, path } = url;

  const filteredHost =
    host
      // Always filter out authority
      ?.replace(/^.*@/, '[filtered]:[filtered]@')
      // Don't show standard :80 (http) and :443 (https) ports to reduce the noise
      // TODO: Use new URL global if it exists
      .replace(/(:80)$/, '')
      .replace(/(:443)$/, '') || '';

  return `${protocol ? `${protocol}://` : ''}${filteredHost}${path}`;
}


//# sourceMappingURL=url.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/integrations/breadcrumbs.js





/* eslint-disable max-lines */


/** maxStringLength gets capped to prevent 100 breadcrumbs exceeding 1MB event payload size */
const MAX_ALLOWED_STRING_LENGTH = 1024;

const breadcrumbs_INTEGRATION_NAME = 'Breadcrumbs';

const _breadcrumbsIntegration = ((options = {}) => {
  const _options = {
    console: true,
    dom: true,
    fetch: true,
    history: true,
    sentry: true,
    xhr: true,
    ...options,
  };

  return {
    name: breadcrumbs_INTEGRATION_NAME,
    setup(client) {
      if (_options.console) {
        addConsoleInstrumentationHandler(_getConsoleBreadcrumbHandler(client));
      }
      if (_options.dom) {
        addClickKeypressInstrumentationHandler(_getDomBreadcrumbHandler(client, _options.dom));
      }
      if (_options.xhr) {
        addXhrInstrumentationHandler(_getXhrBreadcrumbHandler(client));
      }
      if (_options.fetch) {
        addFetchInstrumentationHandler(_getFetchBreadcrumbHandler(client));
      }
      if (_options.history) {
        addHistoryInstrumentationHandler(_getHistoryBreadcrumbHandler(client));
      }
      if (_options.sentry) {
        client.on('beforeSendEvent', _getSentryBreadcrumbHandler(client));
      }
    },
  };
}) ;

const breadcrumbsIntegration = defineIntegration(_breadcrumbsIntegration);

/**
 * Adds a breadcrumb for Sentry events or transactions if this option is enabled.
 */
function _getSentryBreadcrumbHandler(client) {
  return function addSentryBreadcrumb(event) {
    if ((0,currentScopes/* getClient */.KU)() !== client) {
      return;
    }

    (0,breadcrumbs/* addBreadcrumb */.Z)(
      {
        category: `sentry.${event.type === 'transaction' ? 'transaction' : 'event'}`,
        event_id: event.event_id,
        level: event.level,
        message: (0,misc/* getEventDescription */.$X)(event),
      },
      {
        event,
      },
    );
  };
}

/**
 * A HOC that creates a function that creates breadcrumbs from DOM API calls.
 * This is a HOC so that we get access to dom options in the closure.
 */
function _getDomBreadcrumbHandler(
  client,
  dom,
) {
  return function _innerDomBreadcrumb(handlerData) {
    if ((0,currentScopes/* getClient */.KU)() !== client) {
      return;
    }

    let target;
    let componentName;
    let keyAttrs = typeof dom === 'object' ? dom.serializeAttribute : undefined;

    let maxStringLength =
      typeof dom === 'object' && typeof dom.maxStringLength === 'number' ? dom.maxStringLength : undefined;
    if (maxStringLength && maxStringLength > MAX_ALLOWED_STRING_LENGTH) {
      esm_debug_build_DEBUG_BUILD &&
        logger/* logger */.vF.warn(
          `\`dom.maxStringLength\` cannot exceed ${MAX_ALLOWED_STRING_LENGTH}, but a value of ${maxStringLength} was configured. Sentry will use ${MAX_ALLOWED_STRING_LENGTH} instead.`,
        );
      maxStringLength = MAX_ALLOWED_STRING_LENGTH;
    }

    if (typeof keyAttrs === 'string') {
      keyAttrs = [keyAttrs];
    }

    // Accessing event.target can throw (see getsentry/raven-js#838, #768)
    try {
      const event = handlerData.event ;
      const element = _isEvent(event) ? event.target : event;

      target = (0,browser/* htmlTreeAsString */.Hd)(element, { keyAttrs, maxStringLength });
      componentName = (0,browser/* getComponentName */.xE)(element);
    } catch (e) {
      target = '<unknown>';
    }

    if (target.length === 0) {
      return;
    }

    const breadcrumb = {
      category: `ui.${handlerData.name}`,
      message: target,
    };

    if (componentName) {
      breadcrumb.data = { 'ui.component_name': componentName };
    }

    (0,breadcrumbs/* addBreadcrumb */.Z)(breadcrumb, {
      event: handlerData.event,
      name: handlerData.name,
      global: handlerData.global,
    });
  };
}

/**
 * Creates breadcrumbs from console API calls
 */
function _getConsoleBreadcrumbHandler(client) {
  return function _consoleBreadcrumb(handlerData) {
    if ((0,currentScopes/* getClient */.KU)() !== client) {
      return;
    }

    const breadcrumb = {
      category: 'console',
      data: {
        arguments: handlerData.args,
        logger: 'console',
      },
      level: severityLevelFromString(handlerData.level),
      message: (0,string/* safeJoin */.gt)(handlerData.args, ' '),
    };

    if (handlerData.level === 'assert') {
      if (handlerData.args[0] === false) {
        breadcrumb.message = `Assertion failed: ${(0,string/* safeJoin */.gt)(handlerData.args.slice(1), ' ') || 'console.assert'}`;
        breadcrumb.data.arguments = handlerData.args.slice(1);
      } else {
        // Don't capture a breadcrumb for passed assertions
        return;
      }
    }

    (0,breadcrumbs/* addBreadcrumb */.Z)(breadcrumb, {
      input: handlerData.args,
      level: handlerData.level,
    });
  };
}

/**
 * Creates breadcrumbs from XHR API calls
 */
function _getXhrBreadcrumbHandler(client) {
  return function _xhrBreadcrumb(handlerData) {
    if ((0,currentScopes/* getClient */.KU)() !== client) {
      return;
    }

    const { startTimestamp, endTimestamp } = handlerData;

    const sentryXhrData = handlerData.xhr[SENTRY_XHR_DATA_KEY];

    // We only capture complete, non-sentry requests
    if (!startTimestamp || !endTimestamp || !sentryXhrData) {
      return;
    }

    const { method, url, status_code, body } = sentryXhrData;

    const data = {
      method,
      url,
      status_code,
    };

    const hint = {
      xhr: handlerData.xhr,
      input: body,
      startTimestamp,
      endTimestamp,
    };

    const breadcrumb = {
      category: 'xhr',
      data,
      type: 'http',
      level: getBreadcrumbLogLevelFromHttpStatusCode(status_code),
    };

    client.emit('beforeOutgoingRequestBreadcrumb', breadcrumb, hint );

    (0,breadcrumbs/* addBreadcrumb */.Z)(breadcrumb, hint);
  };
}

/**
 * Creates breadcrumbs from fetch API calls
 */
function _getFetchBreadcrumbHandler(client) {
  return function _fetchBreadcrumb(handlerData) {
    if ((0,currentScopes/* getClient */.KU)() !== client) {
      return;
    }

    const { startTimestamp, endTimestamp } = handlerData;

    // We only capture complete fetch requests
    if (!endTimestamp) {
      return;
    }

    if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === 'POST') {
      // We will not create breadcrumbs for fetch requests that contain `sentry_key` (internal sentry requests)
      return;
    }

    ({
      method: handlerData.fetchData.method,
      url: handlerData.fetchData.url,
    });

    if (handlerData.error) {
      const data = handlerData.fetchData;
      const hint = {
        data: handlerData.error,
        input: handlerData.args,
        startTimestamp,
        endTimestamp,
      };

      const breadcrumb = {
        category: 'fetch',
        data,
        level: 'error',
        type: 'http',
      } ;

      client.emit('beforeOutgoingRequestBreadcrumb', breadcrumb, hint );

      (0,breadcrumbs/* addBreadcrumb */.Z)(breadcrumb, hint);
    } else {
      const response = handlerData.response ;
      const data = {
        ...handlerData.fetchData,
        status_code: response?.status,
      };

      handlerData.fetchData.request_body_size;
      handlerData.fetchData.response_body_size;
      response?.status;

      const hint = {
        input: handlerData.args,
        response,
        startTimestamp,
        endTimestamp,
      };

      const breadcrumb = {
        category: 'fetch',
        data,
        type: 'http',
        level: getBreadcrumbLogLevelFromHttpStatusCode(data.status_code),
      };

      client.emit('beforeOutgoingRequestBreadcrumb', breadcrumb, hint );

      (0,breadcrumbs/* addBreadcrumb */.Z)(breadcrumb, hint);
    }
  };
}

/**
 * Creates breadcrumbs from history API calls
 */
function _getHistoryBreadcrumbHandler(client) {
  return function _historyBreadcrumb(handlerData) {
    if ((0,currentScopes/* getClient */.KU)() !== client) {
      return;
    }

    let from = handlerData.from;
    let to = handlerData.to;
    const parsedLoc = url_parseUrl(WINDOW.location.href);
    let parsedFrom = from ? url_parseUrl(from) : undefined;
    const parsedTo = url_parseUrl(to);

    // Initial pushState doesn't provide `from` information
    if (!parsedFrom?.path) {
      parsedFrom = parsedLoc;
    }

    // Use only the path component of the URL if the URL matches the current
    // document (almost all the time when using pushState)
    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
      to = parsedTo.relative;
    }
    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
      from = parsedFrom.relative;
    }

    (0,breadcrumbs/* addBreadcrumb */.Z)({
      category: 'navigation',
      data: {
        from,
        to,
      },
    });
  };
}

function _isEvent(event) {
  return !!event && !!(event ).target;
}


//# sourceMappingURL=breadcrumbs.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/integrations/browserapierrors.js



const DEFAULT_EVENT_TARGET = [
  'EventTarget',
  'Window',
  'Node',
  'ApplicationCache',
  'AudioTrackList',
  'BroadcastChannel',
  'ChannelMergerNode',
  'CryptoOperation',
  'EventSource',
  'FileReader',
  'HTMLUnknownElement',
  'IDBDatabase',
  'IDBRequest',
  'IDBTransaction',
  'KeyOperation',
  'MediaController',
  'MessagePort',
  'ModalWindow',
  'Notification',
  'SVGElementInstance',
  'Screen',
  'SharedWorker',
  'TextTrack',
  'TextTrackCue',
  'TextTrackList',
  'WebSocket',
  'WebSocketWorker',
  'Worker',
  'XMLHttpRequest',
  'XMLHttpRequestEventTarget',
  'XMLHttpRequestUpload',
];

const browserapierrors_INTEGRATION_NAME = 'BrowserApiErrors';

const _browserApiErrorsIntegration = ((options = {}) => {
  const _options = {
    XMLHttpRequest: true,
    eventTarget: true,
    requestAnimationFrame: true,
    setInterval: true,
    setTimeout: true,
    ...options,
  };

  return {
    name: browserapierrors_INTEGRATION_NAME,
    // TODO: This currently only works for the first client this is setup
    // We may want to adjust this to check for client etc.
    setupOnce() {
      if (_options.setTimeout) {
        (0,object/* fill */.GS)(WINDOW, 'setTimeout', _wrapTimeFunction);
      }

      if (_options.setInterval) {
        (0,object/* fill */.GS)(WINDOW, 'setInterval', _wrapTimeFunction);
      }

      if (_options.requestAnimationFrame) {
        (0,object/* fill */.GS)(WINDOW, 'requestAnimationFrame', _wrapRAF);
      }

      if (_options.XMLHttpRequest && "XMLHttpRequest" in WINDOW) {
        (0,object/* fill */.GS)(XMLHttpRequest.prototype, 'send', _wrapXHR);
      }

      const eventTargetOption = _options.eventTarget;
      if (eventTargetOption) {
        const eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
        eventTarget.forEach(_wrapEventTarget);
      }
    },
  };
}) ;

/**
 * Wrap timer functions and event targets to catch errors and provide better meta data.
 */
const browserApiErrorsIntegration = defineIntegration(_browserApiErrorsIntegration);

function _wrapTimeFunction(original) {
  return function ( ...args) {
    const originalCallback = args[0];
    args[0] = wrap(originalCallback, {
      mechanism: {
        data: { function: (0,stacktrace/* getFunctionName */.qQ)(original) },
        handled: false,
        type: 'instrument',
      },
    });
    return original.apply(this, args);
  };
}

function _wrapRAF(original) {
  return function ( callback) {
    return original.apply(this, [
      wrap(callback, {
        mechanism: {
          data: {
            function: 'requestAnimationFrame',
            handler: (0,stacktrace/* getFunctionName */.qQ)(original),
          },
          handled: false,
          type: 'instrument',
        },
      }),
    ]);
  };
}

function _wrapXHR(originalSend) {
  return function ( ...args) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const xhr = this;
    const xmlHttpRequestProps = ['onload', 'onerror', 'onprogress', 'onreadystatechange'];

    xmlHttpRequestProps.forEach(prop => {
      if (prop in xhr && typeof xhr[prop] === 'function') {
        (0,object/* fill */.GS)(xhr, prop, function (original) {
          const wrapOptions = {
            mechanism: {
              data: {
                function: prop,
                handler: (0,stacktrace/* getFunctionName */.qQ)(original),
              },
              handled: false,
              type: 'instrument',
            },
          };

          // If Instrument integration has been called before BrowserApiErrors, get the name of original function
          const originalFunction = (0,object/* getOriginalFunction */.sp)(original);
          if (originalFunction) {
            wrapOptions.mechanism.data.handler = (0,stacktrace/* getFunctionName */.qQ)(originalFunction);
          }

          // Otherwise wrap directly
          return wrap(original, wrapOptions);
        });
      }
    });

    return originalSend.apply(this, args);
  };
}

function _wrapEventTarget(target) {
  const globalObject = WINDOW ;
  const proto = globalObject[target]?.prototype;

  // eslint-disable-next-line no-prototype-builtins
  if (!proto?.hasOwnProperty?.('addEventListener')) {
    return;
  }

  (0,object/* fill */.GS)(proto, 'addEventListener', function (original)

 {
    return function ( eventName, fn, options) {
      try {
        if (isEventListenerObject(fn)) {
          // ESlint disable explanation:
          //  First, it is generally safe to call `wrap` with an unbound function. Furthermore, using `.bind()` would
          //  introduce a bug here, because bind returns a new function that doesn't have our
          //  flags(like __sentry_original__) attached. `wrap` checks for those flags to avoid unnecessary wrapping.
          //  Without those flags, every call to addEventListener wraps the function again, causing a memory leak.
          // eslint-disable-next-line @typescript-eslint/unbound-method
          fn.handleEvent = wrap(fn.handleEvent, {
            mechanism: {
              data: {
                function: 'handleEvent',
                handler: (0,stacktrace/* getFunctionName */.qQ)(fn),
                target,
              },
              handled: false,
              type: 'instrument',
            },
          });
        }
      } catch {
        // can sometimes get 'Permission denied to access property "handle Event'
      }

      return original.apply(this, [
        eventName,
        wrap(fn, {
          mechanism: {
            data: {
              function: 'addEventListener',
              handler: (0,stacktrace/* getFunctionName */.qQ)(fn),
              target,
            },
            handled: false,
            type: 'instrument',
          },
        }),
        options,
      ]);
    };
  });

  (0,object/* fill */.GS)(proto, 'removeEventListener', function (originalRemoveEventListener)

 {
    return function ( eventName, fn, options) {
      /**
       * There are 2 possible scenarios here:
       *
       * 1. Someone passes a callback, which was attached prior to Sentry initialization, or by using unmodified
       * method, eg. `document.addEventListener.call(el, name, handler). In this case, we treat this function
       * as a pass-through, and call original `removeEventListener` with it.
       *
       * 2. Someone passes a callback, which was attached after Sentry was initialized, which means that it was using
       * our wrapped version of `addEventListener`, which internally calls `wrap` helper.
       * This helper "wraps" whole callback inside a try/catch statement, and attached appropriate metadata to it,
       * in order for us to make a distinction between wrapped/non-wrapped functions possible.
       * If a function was wrapped, it has additional property of `__sentry_wrapped__`, holding the handler.
       *
       * When someone adds a handler prior to initialization, and then do it again, but after,
       * then we have to detach both of them. Otherwise, if we'd detach only wrapped one, it'd be impossible
       * to get rid of the initial handler and it'd stick there forever.
       */
      try {
        const originalEventHandler = (fn ).__sentry_wrapped__;
        if (originalEventHandler) {
          originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
        }
      } catch (e) {
        // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
      }
      return originalRemoveEventListener.call(this, eventName, fn, options);
    };
  });
}

function isEventListenerObject(obj) {
  return typeof (obj ).handleEvent === 'function';
}


//# sourceMappingURL=browserapierrors.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/integrations/browsersession.js





/**
 * When added, automatically creates sessions which allow you to track adoption and crashes (crash free rate) in your Releases in Sentry.
 * More information: https://docs.sentry.io/product/releases/health/
 *
 * Note: In order for session tracking to work, you need to set up Releases: https://docs.sentry.io/product/releases/
 */
const browserSessionIntegration = defineIntegration(() => {
  return {
    name: 'BrowserSession',
    setupOnce() {
      if (typeof WINDOW.document === 'undefined') {
        esm_debug_build_DEBUG_BUILD &&
          logger/* logger */.vF.warn('Using the `browserSessionIntegration` in non-browser environments is not supported.');
        return;
      }

      // The session duration for browser sessions does not track a meaningful
      // concept that can be used as a metric.
      // Automatically captured sessions are akin to page views, and thus we
      // discard their duration.
      startSession({ ignoreDuration: true });
      captureSession();

      // We want to create a session for every navigation as well
      addHistoryInstrumentationHandler(({ from, to }) => {
        // Don't create an additional session for the initial route or if the location did not change
        if (from !== undefined && from !== to) {
          startSession({ ignoreDuration: true });
          captureSession();
        }
      });
    },
  };
});


//# sourceMappingURL=browsersession.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/integrations/globalhandlers.js





const globalhandlers_INTEGRATION_NAME = 'GlobalHandlers';

const _globalHandlersIntegration = ((options = {}) => {
  const _options = {
    onerror: true,
    onunhandledrejection: true,
    ...options,
  };

  return {
    name: globalhandlers_INTEGRATION_NAME,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(client) {
      if (_options.onerror) {
        _installGlobalOnErrorHandler(client);
        globalHandlerLog('onerror');
      }
      if (_options.onunhandledrejection) {
        _installGlobalOnUnhandledRejectionHandler(client);
        globalHandlerLog('onunhandledrejection');
      }
    },
  };
}) ;

const globalHandlersIntegration = defineIntegration(_globalHandlersIntegration);

function _installGlobalOnErrorHandler(client) {
  addGlobalErrorInstrumentationHandler(data => {
    const { stackParser, attachStacktrace } = getOptions();

    if ((0,currentScopes/* getClient */.KU)() !== client || shouldIgnoreOnError()) {
      return;
    }

    const { msg, url, line, column, error } = data;

    const event = _enhanceEventWithInitialFrame(
      eventFromUnknownInput(stackParser, error || msg, undefined, attachStacktrace, false),
      url,
      line,
      column,
    );

    event.level = 'error';

    captureEvent(event, {
      originalException: error,
      mechanism: {
        handled: false,
        type: 'onerror',
      },
    });
  });
}

function _installGlobalOnUnhandledRejectionHandler(client) {
  addGlobalUnhandledRejectionInstrumentationHandler(e => {
    const { stackParser, attachStacktrace } = getOptions();

    if ((0,currentScopes/* getClient */.KU)() !== client || shouldIgnoreOnError()) {
      return;
    }

    const error = _getUnhandledRejectionError(e );

    const event = (0,is/* isPrimitive */.sO)(error)
      ? _eventFromRejectionWithPrimitive(error)
      : eventFromUnknownInput(stackParser, error, undefined, attachStacktrace, true);

    event.level = 'error';

    captureEvent(event, {
      originalException: error,
      mechanism: {
        handled: false,
        type: 'onunhandledrejection',
      },
    });
  });
}

function _getUnhandledRejectionError(error) {
  if ((0,is/* isPrimitive */.sO)(error)) {
    return error;
  }

  // dig the object of the rejection out of known event types
  try {

    // PromiseRejectionEvents store the object of the rejection under 'reason'
    // see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
    if ('reason' in (error )) {
      return (error ).reason;
    }

    // something, somewhere, (likely a browser extension) effectively casts PromiseRejectionEvents
    // to CustomEvents, moving the `promise` and `reason` attributes of the PRE into
    // the CustomEvent's `detail` attribute, since they're not part of CustomEvent's spec
    // see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent and
    // https://github.com/getsentry/sentry-javascript/issues/2380
    if ('detail' in (error ) && 'reason' in (error ).detail) {
      return (error ).detail.reason;
    }
  } catch {} // eslint-disable-line no-empty

  return error;
}

/**
 * Create an event from a promise rejection where the `reason` is a primitive.
 *
 * @param reason: The `reason` property of the promise rejection
 * @returns An Event object with an appropriate `exception` value
 */
function _eventFromRejectionWithPrimitive(reason) {
  return {
    exception: {
      values: [
        {
          type: 'UnhandledRejection',
          // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
          value: `Non-Error promise rejection captured with value: ${String(reason)}`,
        },
      ],
    },
  };
}

function _enhanceEventWithInitialFrame(
  event,
  url,
  line,
  column,
) {
  // event.exception
  const e = (event.exception = event.exception || {});
  // event.exception.values
  const ev = (e.values = e.values || []);
  // event.exception.values[0]
  const ev0 = (ev[0] = ev[0] || {});
  // event.exception.values[0].stacktrace
  const ev0s = (ev0.stacktrace = ev0.stacktrace || {});
  // event.exception.values[0].stacktrace.frames
  const ev0sf = (ev0s.frames = ev0s.frames || []);

  const colno = column;
  const lineno = line;
  const filename = (0,is/* isString */.Kg)(url) && url.length > 0 ? url : (0,browser/* getLocationHref */.$N)();

  // event.exception.values[0].stacktrace.frames
  if (ev0sf.length === 0) {
    ev0sf.push({
      colno,
      filename,
      function: stacktrace/* UNKNOWN_FUNCTION */.yF,
      in_app: true,
      lineno,
    });
  }

  return event;
}

function globalHandlerLog(type) {
  esm_debug_build_DEBUG_BUILD && logger/* logger */.vF.log(`Global Handler attached: ${type}`);
}

function getOptions() {
  const client = (0,currentScopes/* getClient */.KU)();
  const options = client?.getOptions() || {
    stackParser: () => [],
    attachStacktrace: false,
  };
  return options;
}


//# sourceMappingURL=globalhandlers.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/integrations/httpcontext.js



/**
 * Collects information about HTTP request headers and
 * attaches them to the event.
 */
const httpContextIntegration = defineIntegration(() => {
  return {
    name: 'HttpContext',
    preprocessEvent(event) {
      // if none of the information we want exists, don't bother
      if (!WINDOW.navigator && !WINDOW.location && !WINDOW.document) {
        return;
      }

      // grab as much info as exists and add it to the event
      const url = event.request?.url || (0,browser/* getLocationHref */.$N)();
      const { referrer } = WINDOW.document || {};
      const { userAgent } = WINDOW.navigator || {};

      const headers = {
        ...event.request?.headers,
        ...(referrer && { Referer: referrer }),
        ...(userAgent && { 'User-Agent': userAgent }),
      };
      const request = {
        ...event.request,
        ...(url && { url }),
        headers,
      };

      event.request = request;
    },
  };
});


//# sourceMappingURL=httpcontext.js.map

;// ./node_modules/@sentry/core/build/esm/utils-hoist/aggregate-errors.js



/**
 * Creates exceptions inside `event.exception.values` for errors that are nested on properties based on the `key` parameter.
 */
function applyAggregateErrorsToEvent(
  exceptionFromErrorImplementation,
  parser,
  maxValueLimit = 250,
  key,
  limit,
  event,
  hint,
) {
  if (!event.exception?.values || !hint || !(0,is/* isInstanceOf */.tH)(hint.originalException, Error)) {
    return;
  }

  // Generally speaking the last item in `event.exception.values` is the exception originating from the original Error
  const originalException =
    event.exception.values.length > 0 ? event.exception.values[event.exception.values.length - 1] : undefined;

  // We only create exception grouping if there is an exception in the event.
  if (originalException) {
    event.exception.values = truncateAggregateExceptions(
      aggregateExceptionsFromError(
        exceptionFromErrorImplementation,
        parser,
        limit,
        hint.originalException ,
        key,
        event.exception.values,
        originalException,
        0,
      ),
      maxValueLimit,
    );
  }
}

function aggregateExceptionsFromError(
  exceptionFromErrorImplementation,
  parser,
  limit,
  error,
  key,
  prevExceptions,
  exception,
  exceptionId,
) {
  if (prevExceptions.length >= limit + 1) {
    return prevExceptions;
  }

  let newExceptions = [...prevExceptions];

  // Recursively call this function in order to walk down a chain of errors
  if ((0,is/* isInstanceOf */.tH)(error[key], Error)) {
    applyExceptionGroupFieldsForParentException(exception, exceptionId);
    const newException = exceptionFromErrorImplementation(parser, error[key]);
    const newExceptionId = newExceptions.length;
    applyExceptionGroupFieldsForChildException(newException, key, newExceptionId, exceptionId);
    newExceptions = aggregateExceptionsFromError(
      exceptionFromErrorImplementation,
      parser,
      limit,
      error[key],
      key,
      [newException, ...newExceptions],
      newException,
      newExceptionId,
    );
  }

  // This will create exception grouping for AggregateErrors
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError
  if (Array.isArray(error.errors)) {
    error.errors.forEach((childError, i) => {
      if ((0,is/* isInstanceOf */.tH)(childError, Error)) {
        applyExceptionGroupFieldsForParentException(exception, exceptionId);
        const newException = exceptionFromErrorImplementation(parser, childError);
        const newExceptionId = newExceptions.length;
        applyExceptionGroupFieldsForChildException(newException, `errors[${i}]`, newExceptionId, exceptionId);
        newExceptions = aggregateExceptionsFromError(
          exceptionFromErrorImplementation,
          parser,
          limit,
          childError,
          key,
          [newException, ...newExceptions],
          newException,
          newExceptionId,
        );
      }
    });
  }

  return newExceptions;
}

function applyExceptionGroupFieldsForParentException(exception, exceptionId) {
  // Don't know if this default makes sense. The protocol requires us to set these values so we pick *some* default.
  exception.mechanism = exception.mechanism || { type: 'generic', handled: true };

  exception.mechanism = {
    ...exception.mechanism,
    ...(exception.type === 'AggregateError' && { is_exception_group: true }),
    exception_id: exceptionId,
  };
}

function applyExceptionGroupFieldsForChildException(
  exception,
  source,
  exceptionId,
  parentId,
) {
  // Don't know if this default makes sense. The protocol requires us to set these values so we pick *some* default.
  exception.mechanism = exception.mechanism || { type: 'generic', handled: true };

  exception.mechanism = {
    ...exception.mechanism,
    type: 'chained',
    source,
    exception_id: exceptionId,
    parent_id: parentId,
  };
}

/**
 * Truncate the message (exception.value) of all exceptions in the event.
 * Because this event processor is ran after `applyClientOptions`,
 * we need to truncate the message of the added exceptions here.
 */
function truncateAggregateExceptions(exceptions, maxValueLength) {
  return exceptions.map(exception => {
    if (exception.value) {
      exception.value = (0,string/* truncate */.xv)(exception.value, maxValueLength);
    }
    return exception;
  });
}


//# sourceMappingURL=aggregate-errors.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/integrations/linkederrors.js



const DEFAULT_KEY = 'cause';
const linkederrors_DEFAULT_LIMIT = 5;

const linkederrors_INTEGRATION_NAME = 'LinkedErrors';

const _linkedErrorsIntegration = ((options = {}) => {
  const limit = options.limit || linkederrors_DEFAULT_LIMIT;
  const key = options.key || DEFAULT_KEY;

  return {
    name: linkederrors_INTEGRATION_NAME,
    preprocessEvent(event, hint, client) {
      const options = client.getOptions();

      applyAggregateErrorsToEvent(
        // This differs from the LinkedErrors integration in core by using a different exceptionFromError function
        exceptionFromError,
        options.stackParser,
        options.maxValueLength,
        key,
        limit,
        event,
        hint,
      );
    },
  };
}) ;

/**
 * Aggregrate linked errors in an event.
 */
const linkedErrorsIntegration = defineIntegration(_linkedErrorsIntegration);


//# sourceMappingURL=linkederrors.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/sdk.js













/** Get the default integrations for the browser SDK. */
function getDefaultIntegrations(_options) {
  /**
   * Note: Please make sure this stays in sync with Angular SDK, which re-exports
   * `getDefaultIntegrations` but with an adjusted set of integrations.
   */
  return [
    // TODO(v10): Replace with `eventFiltersIntegration` once we remove the deprecated `inboundFiltersIntegration`
    // eslint-disable-next-line deprecation/deprecation
    inboundFiltersIntegration(),
    functionToStringIntegration(),
    browserApiErrorsIntegration(),
    breadcrumbsIntegration(),
    globalHandlersIntegration(),
    linkedErrorsIntegration(),
    dedupeIntegration(),
    httpContextIntegration(),
    browserSessionIntegration(),
  ];
}

/** Exported only for tests. */
function applyDefaultOptions(optionsArg = {}) {
  const defaultOptions = {
    defaultIntegrations: getDefaultIntegrations(),
    release:
      typeof __SENTRY_RELEASE__ === 'string' // This allows build tooling to find-and-replace __SENTRY_RELEASE__ to inject a release value
        ? __SENTRY_RELEASE__
        : WINDOW.SENTRY_RELEASE?.id, // This supports the variable that sentry-webpack-plugin injects
    sendClientReports: true,
  };

  return {
    ...defaultOptions,
    ...dropTopLevelUndefinedKeys(optionsArg),
  };
}

/**
 * In contrast to the regular `dropUndefinedKeys` method,
 * this one does not deep-drop keys, but only on the top level.
 */
function dropTopLevelUndefinedKeys(obj) {
  const mutatetedObj = {};

  for (const k of Object.getOwnPropertyNames(obj)) {
    const key = k ;
    if (obj[key] !== undefined) {
      mutatetedObj[key] = obj[key];
    }
  }

  return mutatetedObj;
}

function shouldShowBrowserExtensionError() {
  const windowWithMaybeExtension =
    typeof WINDOW.window !== 'undefined' && (WINDOW );
  if (!windowWithMaybeExtension) {
    // No need to show the error if we're not in a browser window environment (e.g. service workers)
    return false;
  }

  const extensionKey = windowWithMaybeExtension.chrome ? 'chrome' : 'browser';
  const extensionObject = windowWithMaybeExtension[extensionKey];

  const runtimeId = extensionObject?.runtime?.id;
  const href = (0,browser/* getLocationHref */.$N)() || '';

  const extensionProtocols = ['chrome-extension:', 'moz-extension:', 'ms-browser-extension:', 'safari-web-extension:'];

  // Running the SDK in a dedicated extension page and calling Sentry.init is fine; no risk of data leakage
  const isDedicatedExtensionPage =
    !!runtimeId && WINDOW === WINDOW.top && extensionProtocols.some(protocol => href.startsWith(`${protocol}//`));

  // Running the SDK in NW.js, which appears like a browser extension but isn't, is also fine
  // see: https://github.com/getsentry/sentry-javascript/issues/12668
  const isNWjs = typeof windowWithMaybeExtension.nw !== 'undefined';

  return !!runtimeId && !isDedicatedExtensionPage && !isNWjs;
}

/**
 * A magic string that build tooling can leverage in order to inject a release value into the SDK.
 */

/**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 *
 * ```
 *
 * import { init } from '@sentry/browser';
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 * ```
 *
 * @example
 *
 * ```
 *
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 * ```
 *
 * @see {@link BrowserOptions} for documentation on configuration options.
 */
function init(browserOptions = {}) {
  const options = applyDefaultOptions(browserOptions);

  if (!options.skipBrowserExtensionCheck && shouldShowBrowserExtensionError()) {
    if (esm_debug_build_DEBUG_BUILD) {
      (0,logger/* consoleSandbox */.pq)(() => {
        // eslint-disable-next-line no-console
        console.error(
          '[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/',
        );
      });
    }
    return;
  }

  if (esm_debug_build_DEBUG_BUILD && !supportsFetch()) {
    logger/* logger */.vF.warn(
      'No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.',
    );
  }
  const clientOptions = {
    ...options,
    stackParser: (0,stacktrace/* stackParserFromStackParserOptions */.vk)(options.stackParser || defaultStackParser),
    integrations: getIntegrationsToSetup(options),
    transport: options.transport || makeFetchTransport,
  };

  return initAndBind(BrowserClient, clientOptions);
}

/**
 * Present the user with a report dialog.
 *
 * @param options Everything is optional, we try to fetch all info need from the global scope.
 */
function showReportDialog(options = {}) {
  // doesn't work without a document (React Native)
  if (!WINDOW.document) {
    esm_debug_build_DEBUG_BUILD && logger/* logger */.vF.error('Global document not defined in showReportDialog call');
    return;
  }

  const scope = (0,currentScopes/* getCurrentScope */.o5)();
  const client = scope.getClient();
  const dsn = client?.getDsn();

  if (!dsn) {
    esm_debug_build_DEBUG_BUILD && logger/* logger */.vF.error('DSN not configured for showReportDialog call');
    return;
  }

  if (scope) {
    options.user = {
      ...scope.getUser(),
      ...options.user,
    };
  }

  if (!options.eventId) {
    const eventId = lastEventId();
    if (eventId) {
      options.eventId = eventId;
    }
  }

  const script = WINDOW.document.createElement('script');
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.src = getReportDialogEndpoint(dsn, options);

  if (options.onLoad) {
    script.onload = options.onLoad;
  }

  const { onClose } = options;
  if (onClose) {
    const reportDialogClosedMessageHandler = (event) => {
      if (event.data === '__sentry_reportdialog_closed__') {
        try {
          onClose();
        } finally {
          WINDOW.removeEventListener('message', reportDialogClosedMessageHandler);
        }
      }
    };
    WINDOW.addEventListener('message', reportDialogClosedMessageHandler);
  }

  const injectionPoint = WINDOW.document.head || WINDOW.document.body;
  if (injectionPoint) {
    injectionPoint.appendChild(script);
  } else {
    esm_debug_build_DEBUG_BUILD && logger/* logger */.vF.error('Not injecting report dialog. No injection point found in HTML');
  }
}

/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */
function forceLoad() {
  // Noop
}

/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */
function onLoad(callback) {
  callback();
}


//# sourceMappingURL=sdk.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/utils/lazyLoadIntegration.js



// This is a map of integration function method to bundle file name.
const LazyLoadableIntegrations = {
  replayIntegration: 'replay',
  replayCanvasIntegration: 'replay-canvas',
  feedbackIntegration: 'feedback',
  feedbackModalIntegration: 'feedback-modal',
  feedbackScreenshotIntegration: 'feedback-screenshot',
  captureConsoleIntegration: 'captureconsole',
  contextLinesIntegration: 'contextlines',
  linkedErrorsIntegration: 'linkederrors',
  dedupeIntegration: 'dedupe',
  extraErrorDataIntegration: 'extraerrordata',
  graphqlClientIntegration: 'graphqlclient',
  httpClientIntegration: 'httpclient',
  reportingObserverIntegration: 'reportingobserver',
  rewriteFramesIntegration: 'rewriteframes',
  browserProfilingIntegration: 'browserprofiling',
  moduleMetadataIntegration: 'modulemetadata',
} ;

const WindowWithMaybeIntegration = WINDOW

;

/**
 * Lazy load an integration from the CDN.
 * Rejects if the integration cannot be loaded.
 */
async function lazyLoadIntegration(
  name,
  scriptNonce,
) {
  const bundle = LazyLoadableIntegrations[name];

  // `window.Sentry` is only set when using a CDN bundle, but this method can also be used via the NPM package
  const sentryOnWindow = (WindowWithMaybeIntegration.Sentry = WindowWithMaybeIntegration.Sentry || {});

  if (!bundle) {
    throw new Error(`Cannot lazy load integration: ${name}`);
  }

  // Bail if the integration already exists
  const existing = sentryOnWindow[name];
  // The `feedbackIntegration` is loaded by default in the CDN bundles,
  // so we need to differentiate between the real integration and the shim.
  // if only the shim exists, we still want to lazy load the real integration.
  if (typeof existing === 'function' && !('_isShim' in existing)) {
    return existing;
  }

  const url = getScriptURL(bundle);
  const script = WINDOW.document.createElement('script');
  script.src = url;
  script.crossOrigin = 'anonymous';
  script.referrerPolicy = 'strict-origin';

  if (scriptNonce) {
    script.setAttribute('nonce', scriptNonce);
  }

  const waitForLoad = new Promise((resolve, reject) => {
    script.addEventListener('load', () => resolve());
    script.addEventListener('error', reject);
  });

  const currentScript = WINDOW.document.currentScript;
  const parent = WINDOW.document.body || WINDOW.document.head || currentScript?.parentElement;

  if (parent) {
    parent.appendChild(script);
  } else {
    throw new Error(`Could not find parent element to insert lazy-loaded ${name} script`);
  }

  try {
    await waitForLoad;
  } catch {
    throw new Error(`Error when loading integration: ${name}`);
  }

  const integrationFn = sentryOnWindow[name];

  if (typeof integrationFn !== 'function') {
    throw new Error(`Could not load integration: ${name}`);
  }

  return integrationFn;
}

function getScriptURL(bundle) {
  const client = (0,currentScopes/* getClient */.KU)();
  const baseURL = client?.getOptions()?.cdnBaseUrl || 'https://browser.sentry-cdn.com';

  return new URL(`/${version/* SDK_VERSION */.M}/${bundle}.min.js`, baseURL).toString();
}


//# sourceMappingURL=lazyLoadIntegration.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/integrations/reportingobserver.js


const reportingobserver_WINDOW = worldwide/* GLOBAL_OBJ */.O ;

const reportingobserver_INTEGRATION_NAME = 'ReportingObserver';

const reportingobserver_SETUP_CLIENTS = new WeakMap();

const _reportingObserverIntegration = ((options = {}) => {
  const types = options.types || ['crash', 'deprecation', 'intervention'];

  /** Handler for the reporting observer. */
  function handler(reports) {
    if (!reportingobserver_SETUP_CLIENTS.has((0,currentScopes/* getClient */.KU)() )) {
      return;
    }

    for (const report of reports) {
      (0,currentScopes/* withScope */.v4)(scope => {
        scope.setExtra('url', report.url);

        const label = `ReportingObserver [${report.type}]`;
        let details = 'No details available';

        if (report.body) {
          // Object.keys doesn't work on ReportBody, as all properties are inherited
          const plainBody

 = {};

          // eslint-disable-next-line guard-for-in
          for (const prop in report.body) {
            plainBody[prop] = report.body[prop];
          }

          scope.setExtra('body', plainBody);

          if (report.type === 'crash') {
            const body = report.body ;
            // A fancy way to create a message out of crashId OR reason OR both OR fallback
            details = [body.crashId || '', body.reason || ''].join(' ').trim() || details;
          } else {
            const body = report.body ;
            details = body.message || details;
          }
        }

        captureMessage(`${label}: ${details}`);
      });
    }
  }

  return {
    name: reportingobserver_INTEGRATION_NAME,
    setupOnce() {
      if (!supportsReportingObserver()) {
        return;
      }

      const observer = new (reportingobserver_WINDOW ).ReportingObserver(
        handler,
        {
          buffered: true,
          types,
        },
      );

      observer.observe();
    },

    setup(client) {
      reportingobserver_SETUP_CLIENTS.set(client, true);
    },
  };
}) ;

/**
 * Reporting API integration - https://w3c.github.io/reporting/
 */
const reportingObserverIntegration = defineIntegration(_reportingObserverIntegration);


//# sourceMappingURL=reportingobserver.js.map

;// ./node_modules/@sentry/core/build/esm/utils/isSentryRequestUrl.js
/**
 * Checks whether given url points to Sentry server
 *
 * @param url url to verify
 */
function isSentryRequestUrl(url, client) {
  const dsn = client?.getDsn();
  const tunnel = client?.getOptions().tunnel;
  return checkDsn(url, dsn) || checkTunnel(url, tunnel);
}

function checkTunnel(url, tunnel) {
  if (!tunnel) {
    return false;
  }

  return removeTrailingSlash(url) === removeTrailingSlash(tunnel);
}

function checkDsn(url, dsn) {
  return dsn ? url.includes(dsn.host) : false;
}

function removeTrailingSlash(str) {
  return str[str.length - 1] === '/' ? str.slice(0, -1) : str;
}


//# sourceMappingURL=isSentryRequestUrl.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/integrations/httpclient.js




const httpclient_INTEGRATION_NAME = 'HttpClient';

const _httpClientIntegration = ((options = {}) => {
  const _options = {
    failedRequestStatusCodes: [[500, 599]],
    failedRequestTargets: [/.*/],
    ...options,
  };

  return {
    name: httpclient_INTEGRATION_NAME,
    setup(client) {
      _wrapFetch(client, _options);
      httpclient_wrapXHR(client, _options);
    },
  };
}) ;

/**
 * Create events for failed client side HTTP requests.
 */
const httpClientIntegration = defineIntegration(_httpClientIntegration);

/**
 * Interceptor function for fetch requests
 *
 * @param requestInfo The Fetch API request info
 * @param response The Fetch API response
 * @param requestInit The request init object
 */
function _fetchResponseHandler(
  options,
  requestInfo,
  response,
  requestInit,
  error,
) {
  if (_shouldCaptureResponse(options, response.status, response.url)) {
    const request = _getRequest(requestInfo, requestInit);

    let requestHeaders, responseHeaders, requestCookies, responseCookies;

    if (_shouldSendDefaultPii()) {
      [requestHeaders, requestCookies] = _parseCookieHeaders('Cookie', request);
      [responseHeaders, responseCookies] = _parseCookieHeaders('Set-Cookie', response);
    }

    const event = _createEvent({
      url: request.url,
      method: request.method,
      status: response.status,
      requestHeaders,
      responseHeaders,
      requestCookies,
      responseCookies,
      error,
    });

    captureEvent(event);
  }
}

function _parseCookieHeaders(
  cookieHeader,
  obj,
) {
  const headers = _extractFetchHeaders(obj.headers);
  let cookies;

  try {
    const cookieString = headers[cookieHeader] || headers[cookieHeader.toLowerCase()] || undefined;

    if (cookieString) {
      cookies = _parseCookieString(cookieString);
    }
  } catch {
    // ignore it if parsing fails
  }

  return [headers, cookies];
}

/**
 * Interceptor function for XHR requests
 *
 * @param xhr The XHR request
 * @param method The HTTP method
 * @param headers The HTTP headers
 */
function _xhrResponseHandler(
  options,
  xhr,
  method,
  headers,
  error,
) {
  if (_shouldCaptureResponse(options, xhr.status, xhr.responseURL)) {
    let requestHeaders, responseCookies, responseHeaders;

    if (_shouldSendDefaultPii()) {
      try {
        const cookieString = xhr.getResponseHeader('Set-Cookie') || xhr.getResponseHeader('set-cookie') || undefined;

        if (cookieString) {
          responseCookies = _parseCookieString(cookieString);
        }
      } catch {
        // ignore it if parsing fails
      }

      try {
        responseHeaders = _getXHRResponseHeaders(xhr);
      } catch {
        // ignore it if parsing fails
      }

      requestHeaders = headers;
    }

    const event = _createEvent({
      url: xhr.responseURL,
      method,
      status: xhr.status,
      requestHeaders,
      // Can't access request cookies from XHR
      responseHeaders,
      responseCookies,
      error,
    });

    captureEvent(event);
  }
}

/**
 * Extracts response size from `Content-Length` header when possible
 *
 * @param headers
 * @returns The response size in bytes or undefined
 */
function _getResponseSizeFromHeaders(headers) {
  if (headers) {
    const contentLength = headers['Content-Length'] || headers['content-length'];

    if (contentLength) {
      return parseInt(contentLength, 10);
    }
  }

  return undefined;
}

/**
 * Creates an object containing cookies from the given cookie string
 *
 * @param cookieString The cookie string to parse
 * @returns The parsed cookies
 */
function _parseCookieString(cookieString) {
  return cookieString.split('; ').reduce((acc, cookie) => {
    const [key, value] = cookie.split('=');
    if (key && value) {
      acc[key] = value;
    }
    return acc;
  }, {});
}

/**
 * Extracts the headers as an object from the given Fetch API request or response object
 *
 * @param headers The headers to extract
 * @returns The extracted headers as an object
 */
function _extractFetchHeaders(headers) {
  const result = {};

  headers.forEach((value, key) => {
    result[key] = value;
  });

  return result;
}

/**
 * Extracts the response headers as an object from the given XHR object
 *
 * @param xhr The XHR object to extract the response headers from
 * @returns The response headers as an object
 */
function _getXHRResponseHeaders(xhr) {
  const headers = xhr.getAllResponseHeaders();

  if (!headers) {
    return {};
  }

  return headers.split('\r\n').reduce((acc, line) => {
    const [key, value] = line.split(': ');
    if (key && value) {
      acc[key] = value;
    }
    return acc;
  }, {});
}

/**
 * Checks if the given target url is in the given list of targets
 *
 * @param target The target url to check
 * @returns true if the target url is in the given list of targets, false otherwise
 */
function _isInGivenRequestTargets(
  failedRequestTargets,
  target,
) {
  return failedRequestTargets.some((givenRequestTarget) => {
    if (typeof givenRequestTarget === 'string') {
      return target.includes(givenRequestTarget);
    }

    return givenRequestTarget.test(target);
  });
}

/**
 * Checks if the given status code is in the given range
 *
 * @param status The status code to check
 * @returns true if the status code is in the given range, false otherwise
 */
function _isInGivenStatusRanges(
  failedRequestStatusCodes,
  status,
) {
  return failedRequestStatusCodes.some((range) => {
    if (typeof range === 'number') {
      return range === status;
    }

    return status >= range[0] && status <= range[1];
  });
}

/**
 * Wraps `fetch` function to capture request and response data
 */
function _wrapFetch(client, options) {
  if (!supportsNativeFetch()) {
    return;
  }

  addFetchInstrumentationHandler(handlerData => {
    if ((0,currentScopes/* getClient */.KU)() !== client) {
      return;
    }

    const { response, args, error, virtualError } = handlerData;
    const [requestInfo, requestInit] = args ;

    if (!response) {
      return;
    }

    _fetchResponseHandler(options, requestInfo, response , requestInit, error || virtualError);
  }, false);
}

/**
 * Wraps XMLHttpRequest to capture request and response data
 */
function httpclient_wrapXHR(client, options) {
  if (!("XMLHttpRequest" in worldwide/* GLOBAL_OBJ */.O)) {
    return;
  }

  addXhrInstrumentationHandler(handlerData => {
    if ((0,currentScopes/* getClient */.KU)() !== client) {
      return;
    }

    const { error, virtualError } = handlerData;

    const xhr = handlerData.xhr ;

    const sentryXhrData = xhr[SENTRY_XHR_DATA_KEY];

    if (!sentryXhrData) {
      return;
    }

    const { method, request_headers: headers } = sentryXhrData;

    try {
      _xhrResponseHandler(options, xhr, method, headers, error || virtualError);
    } catch (e) {
      esm_debug_build_DEBUG_BUILD && logger/* logger */.vF.warn('Error while extracting response event form XHR response', e);
    }
  });
}

/**
 * Checks whether to capture given response as an event
 *
 * @param status response status code
 * @param url response url
 */
function _shouldCaptureResponse(options, status, url) {
  return (
    _isInGivenStatusRanges(options.failedRequestStatusCodes, status) &&
    _isInGivenRequestTargets(options.failedRequestTargets, url) &&
    !isSentryRequestUrl(url, (0,currentScopes/* getClient */.KU)())
  );
}

/**
 * Creates a synthetic Sentry event from given response data
 *
 * @param data response data
 * @returns event
 */
function _createEvent(data

) {
  const client = (0,currentScopes/* getClient */.KU)();
  const virtualStackTrace = client && data.error && data.error instanceof Error ? data.error.stack : undefined;
  // Remove the first frame from the stack as it's the HttpClient call
  const stack = virtualStackTrace && client ? client.getOptions().stackParser(virtualStackTrace, 0, 1) : undefined;
  const message = `HTTP Client Error with status code: ${data.status}`;

  const event = {
    message,
    exception: {
      values: [
        {
          type: 'Error',
          value: message,
          stacktrace: stack ? { frames: stack } : undefined,
        },
      ],
    },
    request: {
      url: data.url,
      method: data.method,
      headers: data.requestHeaders,
      cookies: data.requestCookies,
    },
    contexts: {
      response: {
        status_code: data.status,
        headers: data.responseHeaders,
        cookies: data.responseCookies,
        body_size: _getResponseSizeFromHeaders(data.responseHeaders),
      },
    },
  };

  (0,misc/* addExceptionMechanism */.M6)(event, {
    type: 'http.client',
    handled: false,
  });

  return event;
}

function _getRequest(requestInfo, requestInit) {
  if (!requestInit && requestInfo instanceof Request) {
    return requestInfo;
  }

  // If both are set, we try to construct a new Request with the given arguments
  // However, if e.g. the original request has a `body`, this will throw an error because it was already accessed
  // In this case, as a fallback, we just use the original request - using both is rather an edge case
  if (requestInfo instanceof Request && requestInfo.bodyUsed) {
    return requestInfo;
  }

  return new Request(requestInfo, requestInit);
}

function _shouldSendDefaultPii() {
  const client = (0,currentScopes/* getClient */.KU)();
  return client ? Boolean(client.getOptions().sendDefaultPii) : false;
}


//# sourceMappingURL=httpclient.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/integrations/contextlines.js


const contextlines_WINDOW = worldwide/* GLOBAL_OBJ */.O ;

const DEFAULT_LINES_OF_CONTEXT = 7;

const contextlines_INTEGRATION_NAME = 'ContextLines';

const _contextLinesIntegration = ((options = {}) => {
  const contextLines = options.frameContextLines != null ? options.frameContextLines : DEFAULT_LINES_OF_CONTEXT;

  return {
    name: contextlines_INTEGRATION_NAME,
    processEvent(event) {
      return addSourceContext(event, contextLines);
    },
  };
}) ;

/**
 * Collects source context lines around the lines of stackframes pointing to JS embedded in
 * the current page's HTML.
 *
 * This integration DOES NOT work for stack frames pointing to JS files that are loaded by the browser.
 * For frames pointing to files, context lines are added during ingestion and symbolication
 * by attempting to download the JS files to the Sentry backend.
 *
 * Use this integration if you have inline JS code in HTML pages that can't be accessed
 * by our backend (e.g. due to a login-protected page).
 */
const contextLinesIntegration = defineIntegration(_contextLinesIntegration);

/**
 * Processes an event and adds context lines.
 */
function addSourceContext(event, contextLines) {
  const doc = contextlines_WINDOW.document;
  const htmlFilename = contextlines_WINDOW.location && stripUrlQueryAndFragment(contextlines_WINDOW.location.href);
  if (!doc || !htmlFilename) {
    return event;
  }

  const exceptions = event.exception?.values;
  if (!exceptions?.length) {
    return event;
  }

  const html = doc.documentElement.innerHTML;
  if (!html) {
    return event;
  }

  const htmlLines = ['<!DOCTYPE html>', '<html>', ...html.split('\n'), '</html>'];

  exceptions.forEach(exception => {
    const stacktrace = exception.stacktrace;
    if (stacktrace?.frames) {
      stacktrace.frames = stacktrace.frames.map(frame =>
        applySourceContextToFrame(frame, htmlLines, htmlFilename, contextLines),
      );
    }
  });

  return event;
}

/**
 * Only exported for testing
 */
function applySourceContextToFrame(
  frame,
  htmlLines,
  htmlFilename,
  linesOfContext,
) {
  if (frame.filename !== htmlFilename || !frame.lineno || !htmlLines.length) {
    return frame;
  }

  (0,misc/* addContextToFrame */.db)(htmlLines, frame, linesOfContext);

  return frame;
}


//# sourceMappingURL=contextlines.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/networkUtils.js



/**
 * Serializes FormData.
 *
 * This is a bit simplified, but gives us a decent estimate.
 * This converts e.g. { name: 'Anne Smith', age: 13 } to 'name=Anne+Smith&age=13'.
 *
 */
function serializeFormData(formData) {
  // @ts-expect-error passing FormData to URLSearchParams actually works
  return new URLSearchParams(formData).toString();
}

/** Get the string representation of a body. */
function getBodyString(body, _logger = logger/* logger */.vF) {
  try {
    if (typeof body === 'string') {
      return [body];
    }

    if (body instanceof URLSearchParams) {
      return [body.toString()];
    }

    if (body instanceof FormData) {
      return [serializeFormData(body)];
    }

    if (!body) {
      return [undefined];
    }
  } catch (error) {
    debug_build_DEBUG_BUILD && _logger.error(error, 'Failed to serialize body', body);
    return [undefined, 'BODY_PARSE_ERROR'];
  }

  debug_build_DEBUG_BUILD && _logger.info('Skipping network body because of body type', body);

  return [undefined, 'UNPARSEABLE_BODY_TYPE'];
}

/**
 * Parses the fetch arguments to extract the request payload.
 *
 * We only support getting the body from the fetch options.
 */
function getFetchRequestArgBody(fetchArgs = []) {
  if (fetchArgs.length !== 2 || typeof fetchArgs[1] !== 'object') {
    return undefined;
  }

  return (fetchArgs[1] ).body;
}


//# sourceMappingURL=networkUtils.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/integrations/graphqlClient.js



const graphqlClient_INTEGRATION_NAME = 'GraphQLClient';

const _graphqlClientIntegration = ((options) => {
  return {
    name: graphqlClient_INTEGRATION_NAME,
    setup(client) {
      _updateSpanWithGraphQLData(client, options);
      _updateBreadcrumbWithGraphQLData(client, options);
    },
  };
}) ;

function _updateSpanWithGraphQLData(client, options) {
  client.on('beforeOutgoingRequestSpan', (span, hint) => {
    const spanJSON = (0,spanUtils/* spanToJSON */.et)(span);

    const spanAttributes = spanJSON.data || {};
    const spanOp = spanAttributes[semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_OP */.uT];

    const isHttpClientSpan = spanOp === 'http.client';

    if (!isHttpClientSpan) {
      return;
    }

    const httpUrl = spanAttributes[semanticAttributes/* SEMANTIC_ATTRIBUTE_URL_FULL */.c9] || spanAttributes['http.url'];
    const httpMethod = spanAttributes[semanticAttributes/* SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD */.Ts] || spanAttributes['http.method'];

    if (!(0,is/* isString */.Kg)(httpUrl) || !(0,is/* isString */.Kg)(httpMethod)) {
      return;
    }

    const { endpoints } = options;
    const isTracedGraphqlEndpoint = (0,string/* stringMatchesSomePattern */.Xr)(httpUrl, endpoints);
    const payload = getRequestPayloadXhrOrFetch(hint );

    if (isTracedGraphqlEndpoint && payload) {
      const graphqlBody = getGraphQLRequestPayload(payload);

      if (graphqlBody) {
        const operationInfo = _getGraphQLOperation(graphqlBody);
        span.updateName(`${httpMethod} ${httpUrl} (${operationInfo})`);
        span.setAttribute('graphql.document', payload);
      }
    }
  });
}

function _updateBreadcrumbWithGraphQLData(client, options) {
  client.on('beforeOutgoingRequestBreadcrumb', (breadcrumb, handlerData) => {
    const { category, type, data } = breadcrumb;

    const isFetch = category === 'fetch';
    const isXhr = category === 'xhr';
    const isHttpBreadcrumb = type === 'http';

    if (isHttpBreadcrumb && (isFetch || isXhr)) {
      const httpUrl = data?.url;
      const { endpoints } = options;

      const isTracedGraphqlEndpoint = (0,string/* stringMatchesSomePattern */.Xr)(httpUrl, endpoints);
      const payload = getRequestPayloadXhrOrFetch(handlerData );

      if (isTracedGraphqlEndpoint && data && payload) {
        const graphqlBody = getGraphQLRequestPayload(payload);

        if (!data.graphql && graphqlBody) {
          const operationInfo = _getGraphQLOperation(graphqlBody);
          data['graphql.document'] = graphqlBody.query;
          data['graphql.operation'] = operationInfo;
        }
      }
    }
  });
}

/**
 * @param requestBody - GraphQL request
 * @returns A formatted version of the request: 'TYPE NAME' or 'TYPE'
 */
function _getGraphQLOperation(requestBody) {
  const { query: graphqlQuery, operationName: graphqlOperationName } = requestBody;

  const { operationName = graphqlOperationName, operationType } = parseGraphQLQuery(graphqlQuery);
  const operationInfo = operationName ? `${operationType} ${operationName}` : `${operationType}`;

  return operationInfo;
}

/**
 * Get the request body/payload based on the shape of the hint.
 *
 * Exported for tests only.
 */
function getRequestPayloadXhrOrFetch(hint) {
  const isXhr = 'xhr' in hint;

  let body;

  if (isXhr) {
    const sentryXhrData = hint.xhr[SENTRY_XHR_DATA_KEY];
    body = sentryXhrData && getBodyString(sentryXhrData.body)[0];
  } else {
    const sentryFetchData = getFetchRequestArgBody(hint.input);
    body = getBodyString(sentryFetchData)[0];
  }

  return body;
}

/**
 * Extract the name and type of the operation from the GraphQL query.
 *
 * Exported for tests only.
 */
function parseGraphQLQuery(query) {
  const namedQueryRe = /^(?:\s*)(query|mutation|subscription)(?:\s*)(\w+)(?:\s*)[{(]/;
  const unnamedQueryRe = /^(?:\s*)(query|mutation|subscription)(?:\s*)[{(]/;

  const namedMatch = query.match(namedQueryRe);
  if (namedMatch) {
    return {
      operationType: namedMatch[1],
      operationName: namedMatch[2],
    };
  }

  const unnamedMatch = query.match(unnamedQueryRe);
  if (unnamedMatch) {
    return {
      operationType: unnamedMatch[1],
      operationName: undefined,
    };
  }
  return {
    operationType: undefined,
    operationName: undefined,
  };
}

/**
 * Extract the payload of a request if it's GraphQL.
 * Exported for tests only.
 * @param payload - A valid JSON string
 * @returns A POJO or undefined
 */
function getGraphQLRequestPayload(payload) {
  let graphqlBody = undefined;
  try {
    const requestBody = JSON.parse(payload) ;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const isGraphQLRequest = !!requestBody['query'];
    if (isGraphQLRequest) {
      graphqlBody = requestBody;
    }
  } finally {
    // Fallback to undefined if payload is an invalid JSON (SyntaxError)

    /* eslint-disable no-unsafe-finally */
    return graphqlBody;
  }
}

/**
 * This integration ensures that GraphQL requests made in the browser
 * have their GraphQL-specific data captured and attached to spans and breadcrumbs.
 */
const graphqlClientIntegration = defineIntegration(_graphqlClientIntegration);


//# sourceMappingURL=graphqlClient.js.map

;// ./node_modules/@sentry/core/build/esm/utils-hoist/node.js


/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */


/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
function isNodeEnv() {
  // explicitly check for browser bundles as those can be optimized statically
  // by terser/rollup.
  return (
    !isBrowserBundle() &&
    Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]'
  );
}

/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function dynamicRequire(mod, request) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return mod.require(request);
}

/**
 * Helper for dynamically loading module that should work with linked dependencies.
 * The problem is that we _should_ be using `require(require.resolve(moduleName, { paths: [cwd()] }))`
 * However it's _not possible_ to do that with Webpack, as it has to know all the dependencies during
 * build time. `require.resolve` is also not available in any other way, so we cannot create,
 * a fake helper like we do with `dynamicRequire`.
 *
 * We always prefer to use local package, thus the value is not returned early from each `try/catch` block.
 * That is to mimic the behavior of `require.resolve` exactly.
 *
 * @param moduleName module name to require
 * @param existingModule module to use for requiring
 * @returns possibly required module
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function loadModule(moduleName, existingModule = module) {
  let mod;

  try {
    mod = dynamicRequire(existingModule, moduleName);
  } catch (e) {
    // no-empty
  }

  if (!mod) {
    try {
      const { cwd } = dynamicRequire(existingModule, 'process');
      mod = dynamicRequire(existingModule, `${cwd()}/node_modules/${moduleName}`) ;
    } catch (e) {
      // no-empty
    }
  }

  return mod;
}


//# sourceMappingURL=node.js.map

;// ./node_modules/@sentry/core/build/esm/utils-hoist/isBrowser.js



/**
 * Returns true if we are in the browser.
 */
function isBrowser() {
  // eslint-disable-next-line no-restricted-globals
  return typeof window !== 'undefined' && (!isNodeEnv() || isElectronNodeRenderer());
}

// Electron renderers with nodeIntegration enabled are detected as Node.js so we specifically test for them
function isElectronNodeRenderer() {
  const process = (worldwide/* GLOBAL_OBJ */.O ).process;
  return process?.type === 'renderer';
}


//# sourceMappingURL=isBrowser.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/bindReporter.js
const getRating = (value, thresholds) => {
  if (value > thresholds[1]) {
    return 'poor';
  }
  if (value > thresholds[0]) {
    return 'needs-improvement';
  }
  return 'good';
};

const bindReporter = (
  callback,
  metric,
  thresholds,
  reportAllChanges,
) => {
  let prevValue;
  let delta;
  return (forceReport) => {
    if (metric.value >= 0) {
      if (forceReport || reportAllChanges) {
        delta = metric.value - (prevValue || 0);

        // Report the metric if there's a non-zero delta or if no previous
        // value exists (which can happen in the case of the document becoming
        // hidden when the metric value is 0).
        // See: https://github.com/GoogleChrome/web-vitals/issues/14
        if (delta || prevValue === undefined) {
          prevValue = metric.value;
          metric.delta = delta;
          metric.rating = getRating(metric.value, thresholds);
          callback(metric);
        }
      }
    }
  };
};


//# sourceMappingURL=bindReporter.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/generateUniqueID.js
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Performantly generate a unique, 30-char string by combining a version
 * number, the current timestamp with a 13-digit number integer.
 * @return {string}
 */
const generateUniqueID = () => {
  return `v4-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
};


//# sourceMappingURL=generateUniqueID.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getNavigationEntry.js


/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// sentry-specific change:
// add optional param to not check for responseStart (see comment below)
const getNavigationEntry = (checkResponseStart = true) => {
  const navigationEntry = types_WINDOW.performance?.getEntriesByType?.('navigation')[0];
  // Check to ensure the `responseStart` property is present and valid.
  // In some cases no value is reported by the browser (for
  // privacy/security reasons), and in other cases (bugs) the value is
  // negative or is larger than the current page time. Ignore these cases:
  // https://github.com/GoogleChrome/web-vitals/issues/137
  // https://github.com/GoogleChrome/web-vitals/issues/162
  // https://github.com/GoogleChrome/web-vitals/issues/275
  if (
    // sentry-specific change:
    // We don't want to check for responseStart for our own use of `getNavigationEntry`
    !checkResponseStart ||
    (navigationEntry && navigationEntry.responseStart > 0 && navigationEntry.responseStart < performance.now())
  ) {
    return navigationEntry;
  }
};


//# sourceMappingURL=getNavigationEntry.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getActivationStart.js


/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const getActivationStart = () => {
  const navEntry = getNavigationEntry();
  return navEntry?.activationStart || 0;
};


//# sourceMappingURL=getActivationStart.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/initMetric.js





/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const initMetric = (name, value) => {
  const navEntry = getNavigationEntry();
  let navigationType = 'navigate';

  if (navEntry) {
    if (types_WINDOW.document?.prerendering || getActivationStart() > 0) {
      navigationType = 'prerender';
    } else if (types_WINDOW.document?.wasDiscarded) {
      navigationType = 'restore';
    } else if (navEntry.type) {
      navigationType = navEntry.type.replace(/_/g, '-') ;
    }
  }

  // Use `entries` type specific for the metric.
  const entries = [];

  return {
    name,
    value: typeof value === 'undefined' ? -1 : value,
    rating: 'good' , // If needed, will be updated when reported. `const` to keep the type from widening to `string`.
    delta: 0,
    entries,
    id: generateUniqueID(),
    navigationType,
  };
};


//# sourceMappingURL=initMetric.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/observe.js
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Takes a performance entry type and a callback function, and creates a
 * `PerformanceObserver` instance that will observe the specified entry type
 * with buffering enabled and call the callback _for each entry_.
 *
 * This function also feature-detects entry support and wraps the logic in a
 * try/catch to avoid errors in unsupporting browsers.
 */
const observe = (
  type,
  callback,
  opts,
) => {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(type)) {
      const po = new PerformanceObserver(list => {
        // Delay by a microtask to workaround a bug in Safari where the
        // callback is invoked immediately, rather than in a separate task.
        // See: https://github.com/GoogleChrome/web-vitals/issues/277
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(() => {
          callback(list.getEntries() );
        });
      });
      po.observe(
        Object.assign(
          {
            type,
            buffered: true,
          },
          opts || {},
        ) ,
      );
      return po;
    }
  } catch (e) {
    // Do nothing.
  }
  return;
};


//# sourceMappingURL=observe.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/onHidden.js


/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// Sentry-specific change:
// This function's logic was NOT updated to web-vitals 4.2.4 but we continue
// to use the web-vitals 3.5.2 due to us having stricter browser support.
// PR with context that made the changes: https://github.com/GoogleChrome/web-vitals/pull/442/files#r1530492402
// The PR removed listening to the `pagehide` event, in favour of only listening to `visibilitychange` event.
// This is "more correct" but some browsers we still support (Safari 12.1-14.0) don't fully support `visibilitychange`
// or have known bugs w.r.t the `visibilitychange` event.
// TODO (v9): If we decide to drop support for Safari 12.1-14.0, we can use the logic from web-vitals 4.2.4
// In this case, we also need to update the integration tests that currently trigger the `pagehide` event to
// simulate the page being hidden.
const onHidden = (cb) => {
  const onHiddenOrPageHide = (event) => {
    if (event.type === 'pagehide' || types_WINDOW.document?.visibilityState === 'hidden') {
      cb(event);
    }
  };

  if (types_WINDOW.document) {
    addEventListener('visibilitychange', onHiddenOrPageHide, true);
    // Some browsers have buggy implementations of visibilitychange,
    // so we use pagehide in addition, just to be safe.
    addEventListener('pagehide', onHiddenOrPageHide, true);
  }
};


//# sourceMappingURL=onHidden.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/runOnce.js
/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const runOnce = (cb) => {
  let called = false;
  return () => {
    if (!called) {
      cb();
      called = true;
    }
  };
};


//# sourceMappingURL=runOnce.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/getVisibilityWatcher.js


/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


let firstHiddenTime = -1;

const initHiddenTime = () => {
  // If the document is hidden when this code runs, assume it was always
  // hidden and the page was loaded in the background, with the one exception
  // that visibility state is always 'hidden' during prerendering, so we have
  // to ignore that case until prerendering finishes (see: `prerenderingchange`
  // event logic below).
  return types_WINDOW.document.visibilityState === 'hidden' && !types_WINDOW.document.prerendering ? 0 : Infinity;
};

const onVisibilityUpdate = (event) => {
  // If the document is 'hidden' and no previous hidden timestamp has been
  // set, update it based on the current event data.
  if (types_WINDOW.document.visibilityState === 'hidden' && firstHiddenTime > -1) {
    // If the event is a 'visibilitychange' event, it means the page was
    // visible prior to this change, so the event timestamp is the first
    // hidden time.
    // However, if the event is not a 'visibilitychange' event, then it must
    // be a 'prerenderingchange' event, and the fact that the document is
    // still 'hidden' from the above check means the tab was activated
    // in a background state and so has always been hidden.
    firstHiddenTime = event.type === 'visibilitychange' ? event.timeStamp : 0;

    // Remove all listeners now that a `firstHiddenTime` value has been set.
    removeChangeListeners();
  }
};

const addChangeListeners = () => {
  addEventListener('visibilitychange', onVisibilityUpdate, true);
  // IMPORTANT: when a page is prerendering, its `visibilityState` is
  // 'hidden', so in order to account for cases where this module checks for
  // visibility during prerendering, an additional check after prerendering
  // completes is also required.
  addEventListener('prerenderingchange', onVisibilityUpdate, true);
};

const removeChangeListeners = () => {
  removeEventListener('visibilitychange', onVisibilityUpdate, true);
  removeEventListener('prerenderingchange', onVisibilityUpdate, true);
};

const getVisibilityWatcher = () => {
  if (types_WINDOW.document && firstHiddenTime < 0) {
    // If the document is hidden when this code runs, assume it was hidden
    // since navigation start. This isn't a perfect heuristic, but it's the
    // best we can do until an API is available to support querying past
    // visibilityState.
    firstHiddenTime = initHiddenTime();
    addChangeListeners();
  }
  return {
    get firstHiddenTime() {
      return firstHiddenTime;
    },
  };
};


//# sourceMappingURL=getVisibilityWatcher.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/whenActivated.js


/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const whenActivated = (callback) => {
  if (types_WINDOW.document?.prerendering) {
    addEventListener('prerenderingchange', () => callback(), true);
  } else {
    callback();
  }
};


//# sourceMappingURL=whenActivated.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/onFCP.js







/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/** Thresholds for FCP. See https://web.dev/articles/fcp#what_is_a_good_fcp_score */
const FCPThresholds = [1800, 3000];

/**
 * Calculates the [FCP](https://web.dev/articles/fcp) value for the current page and
 * calls the `callback` function once the value is ready, along with the
 * relevant `paint` performance entry used to determine the value. The reported
 * value is a `DOMHighResTimeStamp`.
 */
const onFCP = (onReport, opts = {}) => {
  whenActivated(() => {
    const visibilityWatcher = getVisibilityWatcher();
    const metric = initMetric('FCP');
    let report;

    const handleEntries = (entries) => {
      entries.forEach(entry => {
        if (entry.name === 'first-contentful-paint') {
          po.disconnect();

          // Only report if the page wasn't hidden prior to the first paint.
          if (entry.startTime < visibilityWatcher.firstHiddenTime) {
            // The activationStart reference is used because FCP should be
            // relative to page activation rather than navigation start if the
            // page was prerendered. But in cases where `activationStart` occurs
            // after the FCP, this time should be clamped at 0.
            metric.value = Math.max(entry.startTime - getActivationStart(), 0);
            metric.entries.push(entry);
            report(true);
          }
        }
      });
    };

    const po = observe('paint', handleEntries);

    if (po) {
      report = bindReporter(onReport, metric, FCPThresholds, opts.reportAllChanges);
    }
  });
};


//# sourceMappingURL=onFCP.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/getCLS.js







/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/** Thresholds for CLS. See https://web.dev/articles/cls#what_is_a_good_cls_score */
const CLSThresholds = [0.1, 0.25];

/**
 * Calculates the [CLS](https://web.dev/articles/cls) value for the current page and
 * calls the `callback` function once the value is ready to be reported, along
 * with all `layout-shift` performance entries that were used in the metric
 * value calculation. The reported value is a `double` (corresponding to a
 * [layout shift score](https://web.dev/articles/cls#layout_shift_score)).
 *
 * If the `reportAllChanges` configuration option is set to `true`, the
 * `callback` function will be called as soon as the value is initially
 * determined as well as any time the value changes throughout the page
 * lifespan.
 *
 * _**Important:** CLS should be continually monitored for changes throughout
 * the entire lifespan of a page—including if the user returns to the page after
 * it's been hidden/backgrounded. However, since browsers often [will not fire
 * additional callbacks once the user has backgrounded a
 * page](https://developer.chrome.com/blog/page-lifecycle-api/#advice-hidden),
 * `callback` is always called when the page's visibility state changes to
 * hidden. As a result, the `callback` function might be called multiple times
 * during the same page load._
 */
const onCLS = (onReport, opts = {}) => {
  // Start monitoring FCP so we can only report CLS if FCP is also reported.
  // Note: this is done to match the current behavior of CrUX.
  onFCP(
    runOnce(() => {
      const metric = initMetric('CLS', 0);
      let report;

      let sessionValue = 0;
      let sessionEntries = [];

      const handleEntries = (entries) => {
        entries.forEach(entry => {
          // Only count layout shifts without recent user input.
          if (!entry.hadRecentInput) {
            const firstSessionEntry = sessionEntries[0];
            const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

            // If the entry occurred less than 1 second after the previous entry
            // and less than 5 seconds after the first entry in the session,
            // include the entry in the current session. Otherwise, start a new
            // session.
            if (
              sessionValue &&
              firstSessionEntry &&
              lastSessionEntry &&
              entry.startTime - lastSessionEntry.startTime < 1000 &&
              entry.startTime - firstSessionEntry.startTime < 5000
            ) {
              sessionValue += entry.value;
              sessionEntries.push(entry);
            } else {
              sessionValue = entry.value;
              sessionEntries = [entry];
            }
          }
        });

        // If the current session value is larger than the current CLS value,
        // update CLS and the entries contributing to it.
        if (sessionValue > metric.value) {
          metric.value = sessionValue;
          metric.entries = sessionEntries;
          report();
        }
      };

      const po = observe('layout-shift', handleEntries);
      if (po) {
        report = bindReporter(onReport, metric, CLSThresholds, opts.reportAllChanges);

        onHidden(() => {
          handleEntries(po.takeRecords() );
          report(true);
        });

        // Queue a task to report (if nothing else triggers a report first).
        // This allows CLS to be reported as soon as FCP fires when
        // `reportAllChanges` is true.
        setTimeout(report, 0);
      }
    }),
  );
};


//# sourceMappingURL=getCLS.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/getFID.js








/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/** Thresholds for FID. See https://web.dev/articles/fid#what_is_a_good_fid_score */
const FIDThresholds = [100, 300];

/**
 * Calculates the [FID](https://web.dev/articles/fid) value for the current page and
 * calls the `callback` function once the value is ready, along with the
 * relevant `first-input` performance entry used to determine the value. The
 * reported value is a `DOMHighResTimeStamp`.
 *
 * _**Important:** since FID is only reported after the user interacts with the
 * page, it's possible that it will not be reported for some page loads._
 */
const onFID = (onReport, opts = {}) => {
  whenActivated(() => {
    const visibilityWatcher = getVisibilityWatcher();
    const metric = initMetric('FID');
    // eslint-disable-next-line prefer-const
    let report;

    const handleEntry = (entry) => {
      // Only report if the page wasn't hidden prior to the first input.
      if (entry.startTime < visibilityWatcher.firstHiddenTime) {
        metric.value = entry.processingStart - entry.startTime;
        metric.entries.push(entry);
        report(true);
      }
    };

    const handleEntries = (entries) => {
      (entries ).forEach(handleEntry);
    };

    const po = observe('first-input', handleEntries);

    report = bindReporter(onReport, metric, FIDThresholds, opts.reportAllChanges);

    if (po) {
      onHidden(
        runOnce(() => {
          handleEntries(po.takeRecords() );
          po.disconnect();
        }),
      );
    }
  });
};


//# sourceMappingURL=getFID.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/polyfills/interactionCountPolyfill.js


/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


let interactionCountEstimate = 0;
let minKnownInteractionId = Infinity;
let maxKnownInteractionId = 0;

const updateEstimate = (entries) => {
  entries.forEach(e => {
    if (e.interactionId) {
      minKnownInteractionId = Math.min(minKnownInteractionId, e.interactionId);
      maxKnownInteractionId = Math.max(maxKnownInteractionId, e.interactionId);

      interactionCountEstimate = maxKnownInteractionId ? (maxKnownInteractionId - minKnownInteractionId) / 7 + 1 : 0;
    }
  });
};

let po;

/**
 * Returns the `interactionCount` value using the native API (if available)
 * or the polyfill estimate in this module.
 */
const getInteractionCount = () => {
  return po ? interactionCountEstimate : performance.interactionCount || 0;
};

/**
 * Feature detects native support or initializes the polyfill if needed.
 */
const initInteractionCountPolyfill = () => {
  if ('interactionCount' in performance || po) return;

  po = observe('event', updateEstimate, {
    type: 'event',
    buffered: true,
    durationThreshold: 0,
  } );
};


//# sourceMappingURL=interactionCountPolyfill.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/interactions.js


/*
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// A list of longest interactions on the page (by latency) sorted so the
// longest one is first. The list is at most MAX_INTERACTIONS_TO_CONSIDER long.
const longestInteractionList = [];

// A mapping of longest interactions by their interaction ID.
// This is used for faster lookup.
const longestInteractionMap = new Map();

// The default `durationThreshold` used across this library for observing
// `event` entries via PerformanceObserver.
const DEFAULT_DURATION_THRESHOLD = 40;

// Used to store the interaction count after a bfcache restore, since p98
// interaction latencies should only consider the current navigation.
let prevInteractionCount = 0;

/**
 * Returns the interaction count since the last bfcache restore (or for the
 * full page lifecycle if there were no bfcache restores).
 */
const getInteractionCountForNavigation = () => {
  return getInteractionCount() - prevInteractionCount;
};

/**
 * Returns the estimated p98 longest interaction based on the stored
 * interaction candidates and the interaction count for the current page.
 */
const estimateP98LongestInteraction = () => {
  const candidateInteractionIndex = Math.min(
    longestInteractionList.length - 1,
    Math.floor(getInteractionCountForNavigation() / 50),
  );

  return longestInteractionList[candidateInteractionIndex];
};

// To prevent unnecessary memory usage on pages with lots of interactions,
// store at most 10 of the longest interactions to consider as INP candidates.
const MAX_INTERACTIONS_TO_CONSIDER = 10;

/**
 * A list of callback functions to run before each entry is processed.
 * Exposing this list allows the attribution build to hook into the
 * entry processing pipeline.
 */
const entryPreProcessingCallbacks = [];

/**
 * Takes a performance entry and adds it to the list of worst interactions
 * if its duration is long enough to make it among the worst. If the
 * entry is part of an existing interaction, it is merged and the latency
 * and entries list is updated as needed.
 */
const processInteractionEntry = (entry) => {
  entryPreProcessingCallbacks.forEach(cb => cb(entry));

  // Skip further processing for entries that cannot be INP candidates.
  if (!(entry.interactionId || entry.entryType === 'first-input')) return;

  // The least-long of the 10 longest interactions.
  const minLongestInteraction = longestInteractionList[longestInteractionList.length - 1];

  const existingInteraction = longestInteractionMap.get(entry.interactionId);

  // Only process the entry if it's possibly one of the ten longest,
  // or if it's part of an existing interaction.
  if (
    existingInteraction ||
    longestInteractionList.length < MAX_INTERACTIONS_TO_CONSIDER ||
    (minLongestInteraction && entry.duration > minLongestInteraction.latency)
  ) {
    // If the interaction already exists, update it. Otherwise create one.
    if (existingInteraction) {
      // If the new entry has a longer duration, replace the old entries,
      // otherwise add to the array.
      if (entry.duration > existingInteraction.latency) {
        existingInteraction.entries = [entry];
        existingInteraction.latency = entry.duration;
      } else if (
        entry.duration === existingInteraction.latency &&
        entry.startTime === existingInteraction.entries[0]?.startTime
      ) {
        existingInteraction.entries.push(entry);
      }
    } else {
      const interaction = {
        id: entry.interactionId,
        latency: entry.duration,
        entries: [entry],
      };
      longestInteractionMap.set(interaction.id, interaction);
      longestInteractionList.push(interaction);
    }

    // Sort the entries by latency (descending) and keep only the top ten.
    longestInteractionList.sort((a, b) => b.latency - a.latency);
    if (longestInteractionList.length > MAX_INTERACTIONS_TO_CONSIDER) {
      longestInteractionList.splice(MAX_INTERACTIONS_TO_CONSIDER).forEach(i => longestInteractionMap.delete(i.id));
    }
  }
};


//# sourceMappingURL=interactions.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/lib/whenIdle.js




/*
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Runs the passed callback during the next idle period, or immediately
 * if the browser's visibility state is (or becomes) hidden.
 */
const whenIdle = (cb) => {
  const rIC = types_WINDOW.requestIdleCallback || types_WINDOW.setTimeout;

  let handle = -1;
  // eslint-disable-next-line no-param-reassign
  cb = runOnce(cb) ;
  // If the document is hidden, run the callback immediately, otherwise
  // race an idle callback with the next `visibilitychange` event.
  if (types_WINDOW.document?.visibilityState === 'hidden') {
    cb();
  } else {
    handle = rIC(cb);
    onHidden(cb);
  }
  return handle;
};


//# sourceMappingURL=whenIdle.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/getINP.js










/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/** Thresholds for INP. See https://web.dev/articles/inp#what_is_a_good_inp_score */
const INPThresholds = [200, 500];

/**
 * Calculates the [INP](https://web.dev/articles/inp) value for the current
 * page and calls the `callback` function once the value is ready, along with
 * the `event` performance entries reported for that interaction. The reported
 * value is a `DOMHighResTimeStamp`.
 *
 * A custom `durationThreshold` configuration option can optionally be passed to
 * control what `event-timing` entries are considered for INP reporting. The
 * default threshold is `40`, which means INP scores of less than 40 are
 * reported as 0. Note that this will not affect your 75th percentile INP value
 * unless that value is also less than 40 (well below the recommended
 * [good](https://web.dev/articles/inp#what_is_a_good_inp_score) threshold).
 *
 * If the `reportAllChanges` configuration option is set to `true`, the
 * `callback` function will be called as soon as the value is initially
 * determined as well as any time the value changes throughout the page
 * lifespan.
 *
 * _**Important:** INP should be continually monitored for changes throughout
 * the entire lifespan of a page—including if the user returns to the page after
 * it's been hidden/backgrounded. However, since browsers often [will not fire
 * additional callbacks once the user has backgrounded a
 * page](https://developer.chrome.com/blog/page-lifecycle-api/#advice-hidden),
 * `callback` is always called when the page's visibility state changes to
 * hidden. As a result, the `callback` function might be called multiple times
 * during the same page load._
 */
const onINP = (onReport, opts = {}) => {
  // Return if the browser doesn't support all APIs needed to measure INP.
  if (!("PerformanceEventTiming" in types_WINDOW && 'interactionId' in PerformanceEventTiming.prototype)) {
    return;
  }

  whenActivated(() => {
    // TODO(philipwalton): remove once the polyfill is no longer needed.
    initInteractionCountPolyfill();

    const metric = initMetric('INP');
    // eslint-disable-next-line prefer-const
    let report;

    const handleEntries = (entries) => {
      // Queue the `handleEntries()` callback in the next idle task.
      // This is needed to increase the chances that all event entries that
      // occurred between the user interaction and the next paint
      // have been dispatched. Note: there is currently an experiment
      // running in Chrome (EventTimingKeypressAndCompositionInteractionId)
      // 123+ that if rolled out fully may make this no longer necessary.
      whenIdle(() => {
        entries.forEach(processInteractionEntry);

        const inp = estimateP98LongestInteraction();

        if (inp && inp.latency !== metric.value) {
          metric.value = inp.latency;
          metric.entries = inp.entries;
          report();
        }
      });
    };

    const po = observe('event', handleEntries, {
      // Event Timing entries have their durations rounded to the nearest 8ms,
      // so a duration of 40ms would be any event that spans 2.5 or more frames
      // at 60Hz. This threshold is chosen to strike a balance between usefulness
      // and performance. Running this callback for any interaction that spans
      // just one or two frames is likely not worth the insight that could be
      // gained.
      durationThreshold: opts.durationThreshold != null ? opts.durationThreshold : DEFAULT_DURATION_THRESHOLD,
    });

    report = bindReporter(onReport, metric, INPThresholds, opts.reportAllChanges);

    if (po) {
      // Also observe entries of type `first-input`. This is useful in cases
      // where the first interaction is less than the `durationThreshold`.
      po.observe({ type: 'first-input', buffered: true });

      onHidden(() => {
        handleEntries(po.takeRecords() );
        report(true);
      });
    }
  });
};


//# sourceMappingURL=getINP.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/getLCP.js











/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/** Thresholds for LCP. See https://web.dev/articles/lcp#what_is_a_good_lcp_score */
const LCPThresholds = [2500, 4000];

const reportedMetricIDs = {};

/**
 * Calculates the [LCP](https://web.dev/articles/lcp) value for the current page and
 * calls the `callback` function once the value is ready (along with the
 * relevant `largest-contentful-paint` performance entry used to determine the
 * value). The reported value is a `DOMHighResTimeStamp`.
 *
 * If the `reportAllChanges` configuration option is set to `true`, the
 * `callback` function will be called any time a new `largest-contentful-paint`
 * performance entry is dispatched, or once the final value of the metric has
 * been determined.
 */
const onLCP = (onReport, opts = {}) => {
  whenActivated(() => {
    const visibilityWatcher = getVisibilityWatcher();
    const metric = initMetric('LCP');
    let report;

    const handleEntries = (entries) => {
      // If reportAllChanges is set then call this function for each entry,
      // otherwise only consider the last one.
      if (!opts.reportAllChanges) {
        // eslint-disable-next-line no-param-reassign
        entries = entries.slice(-1);
      }

      entries.forEach(entry => {
        // Only report if the page wasn't hidden prior to LCP.
        if (entry.startTime < visibilityWatcher.firstHiddenTime) {
          // The startTime attribute returns the value of the renderTime if it is
          // not 0, and the value of the loadTime otherwise. The activationStart
          // reference is used because LCP should be relative to page activation
          // rather than navigation start if the page was pre-rendered. But in cases
          // where `activationStart` occurs after the LCP, this time should be
          // clamped at 0.
          metric.value = Math.max(entry.startTime - getActivationStart(), 0);
          metric.entries = [entry];
          report();
        }
      });
    };

    const po = observe('largest-contentful-paint', handleEntries);

    if (po) {
      report = bindReporter(onReport, metric, LCPThresholds, opts.reportAllChanges);

      const stopListening = runOnce(() => {
        if (!reportedMetricIDs[metric.id]) {
          handleEntries(po.takeRecords() );
          po.disconnect();
          reportedMetricIDs[metric.id] = true;
          report(true);
        }
      });

      // Stop listening after input. Note: while scrolling is an input that
      // stops LCP observation, it's unreliable since it can be programmatically
      // generated. See: https://github.com/GoogleChrome/web-vitals/issues/75
      ['keydown', 'click'].forEach(type => {
        // Wrap in a setTimeout so the callback is run in a separate task
        // to avoid extending the keyboard/click handler to reduce INP impact
        // https://github.com/GoogleChrome/web-vitals/issues/383
        if (types_WINDOW.document) {
          addEventListener(type, () => whenIdle(stopListening ), {
            once: true,
            capture: true,
          });
        }
      });

      onHidden(stopListening);
    }
  });
};


//# sourceMappingURL=getLCP.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/web-vitals/onTTFB.js







/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/** Thresholds for TTFB. See https://web.dev/articles/ttfb#what_is_a_good_ttfb_score */
const TTFBThresholds = [800, 1800];

/**
 * Runs in the next task after the page is done loading and/or prerendering.
 * @param callback
 */
const whenReady = (callback) => {
  if (types_WINDOW.document?.prerendering) {
    whenActivated(() => whenReady(callback));
  } else if (types_WINDOW.document?.readyState !== 'complete') {
    addEventListener('load', () => whenReady(callback), true);
  } else {
    // Queue a task so the callback runs after `loadEventEnd`.
    setTimeout(callback, 0);
  }
};

/**
 * Calculates the [TTFB](https://web.dev/articles/ttfb) value for the
 * current page and calls the `callback` function once the page has loaded,
 * along with the relevant `navigation` performance entry used to determine the
 * value. The reported value is a `DOMHighResTimeStamp`.
 *
 * Note, this function waits until after the page is loaded to call `callback`
 * in order to ensure all properties of the `navigation` entry are populated.
 * This is useful if you want to report on other metrics exposed by the
 * [Navigation Timing API](https://w3c.github.io/navigation-timing/). For
 * example, the TTFB metric starts from the page's [time
 * origin](https://www.w3.org/TR/hr-time-2/#sec-time-origin), which means it
 * includes time spent on DNS lookup, connection negotiation, network latency,
 * and server processing time.
 */
const onTTFB = (onReport, opts = {}) => {
  const metric = initMetric('TTFB');
  const report = bindReporter(onReport, metric, TTFBThresholds, opts.reportAllChanges);

  whenReady(() => {
    const navigationEntry = getNavigationEntry();

    if (navigationEntry) {
      // The activationStart reference is used because TTFB should be
      // relative to page activation rather than navigation start if the
      // page was prerendered. But in cases where `activationStart` occurs
      // after the first byte is received, this time should be clamped at 0.
      metric.value = Math.max(navigationEntry.responseStart - getActivationStart(), 0);

      metric.entries = [navigationEntry];
      report(true);
    }
  });
};


//# sourceMappingURL=onTTFB.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/instrument.js









const instrument_handlers = {};
const instrument_instrumented = {};

let _previousCls;
let _previousFid;
let _previousLcp;
let _previousTtfb;
let _previousInp;

/**
 * Add a callback that will be triggered when a CLS metric is available.
 * Returns a cleanup callback which can be called to remove the instrumentation handler.
 *
 * Pass `stopOnCallback = true` to stop listening for CLS when the cleanup callback is called.
 * This will lead to the CLS being finalized and frozen.
 */
function addClsInstrumentationHandler(
  callback,
  stopOnCallback = false,
) {
  return addMetricObserver('cls', callback, instrumentCls, _previousCls, stopOnCallback);
}

/**
 * Add a callback that will be triggered when a LCP metric is available.
 * Returns a cleanup callback which can be called to remove the instrumentation handler.
 *
 * Pass `stopOnCallback = true` to stop listening for LCP when the cleanup callback is called.
 * This will lead to the LCP being finalized and frozen.
 */
function addLcpInstrumentationHandler(
  callback,
  stopOnCallback = false,
) {
  return addMetricObserver('lcp', callback, instrumentLcp, _previousLcp, stopOnCallback);
}

/**
 * Add a callback that will be triggered when a FID metric is available.
 * Returns a cleanup callback which can be called to remove the instrumentation handler.
 */
function addFidInstrumentationHandler(callback) {
  return addMetricObserver('fid', callback, instrumentFid, _previousFid);
}

/**
 * Add a callback that will be triggered when a FID metric is available.
 */
function addTtfbInstrumentationHandler(callback) {
  return addMetricObserver('ttfb', callback, instrumentTtfb, _previousTtfb);
}

/**
 * Add a callback that will be triggered when a INP metric is available.
 * Returns a cleanup callback which can be called to remove the instrumentation handler.
 */
function addInpInstrumentationHandler(
  callback,
) {
  return addMetricObserver('inp', callback, instrumentInp, _previousInp);
}

/**
 * Add a callback that will be triggered when a performance observer is triggered,
 * and receives the entries of the observer.
 * Returns a cleanup callback which can be called to remove the instrumentation handler.
 */
function addPerformanceInstrumentationHandler(
  type,
  callback,
) {
  instrument_addHandler(type, callback);

  if (!instrument_instrumented[type]) {
    instrumentPerformanceObserver(type);
    instrument_instrumented[type] = true;
  }

  return getCleanupCallback(type, callback);
}

/** Trigger all handlers of a given type. */
function instrument_triggerHandlers(type, data) {
  const typeHandlers = instrument_handlers[type];

  if (!typeHandlers?.length) {
    return;
  }

  for (const handler of typeHandlers) {
    try {
      handler(data);
    } catch (e) {
      debug_build_DEBUG_BUILD &&
        logger/* logger */.vF.error(
          `Error while triggering instrumentation handler.\nType: ${type}\nName: ${(0,stacktrace/* getFunctionName */.qQ)(handler)}\nError:`,
          e,
        );
    }
  }
}

function instrumentCls() {
  return onCLS(
    metric => {
      instrument_triggerHandlers('cls', {
        metric,
      });
      _previousCls = metric;
    },
    // We want the callback to be called whenever the CLS value updates.
    // By default, the callback is only called when the tab goes to the background.
    { reportAllChanges: true },
  );
}

function instrumentFid() {
  return onFID(metric => {
    instrument_triggerHandlers('fid', {
      metric,
    });
    _previousFid = metric;
  });
}

function instrumentLcp() {
  return onLCP(
    metric => {
      instrument_triggerHandlers('lcp', {
        metric,
      });
      _previousLcp = metric;
    },
    // We want the callback to be called whenever the LCP value updates.
    // By default, the callback is only called when the tab goes to the background.
    { reportAllChanges: true },
  );
}

function instrumentTtfb() {
  return onTTFB(metric => {
    instrument_triggerHandlers('ttfb', {
      metric,
    });
    _previousTtfb = metric;
  });
}

function instrumentInp() {
  return onINP(metric => {
    instrument_triggerHandlers('inp', {
      metric,
    });
    _previousInp = metric;
  });
}

function addMetricObserver(
  type,
  callback,
  instrumentFn,
  previousValue,
  stopOnCallback = false,
) {
  instrument_addHandler(type, callback);

  let stopListening;

  if (!instrument_instrumented[type]) {
    stopListening = instrumentFn();
    instrument_instrumented[type] = true;
  }

  if (previousValue) {
    callback({ metric: previousValue });
  }

  return getCleanupCallback(type, callback, stopOnCallback ? stopListening : undefined);
}

function instrumentPerformanceObserver(type) {
  const options = {};

  // Special per-type options we want to use
  if (type === 'event') {
    options.durationThreshold = 0;
  }

  observe(
    type,
    entries => {
      instrument_triggerHandlers(type, { entries });
    },
    options,
  );
}

function instrument_addHandler(type, handler) {
  instrument_handlers[type] = instrument_handlers[type] || [];
  (instrument_handlers[type] ).push(handler);
}

// Get a callback which can be called to remove the instrumentation handler
function getCleanupCallback(
  type,
  callback,
  stopListening,
) {
  return () => {
    if (stopListening) {
      stopListening();
    }

    const typeHandlers = instrument_handlers[type];

    if (!typeHandlers) {
      return;
    }

    const index = typeHandlers.indexOf(callback);
    if (index !== -1) {
      typeHandlers.splice(index, 1);
    }
  };
}

/**
 * Check if a PerformanceEntry is a PerformanceEventTiming by checking for the `duration` property.
 */
function isPerformanceEventTiming(entry) {
  return 'duration' in entry;
}


//# sourceMappingURL=instrument.js.map

;// ./node_modules/@sentry-internal/replay/build/npm/esm/index.js



// exporting a separate copy of `WINDOW` rather than exporting the one from `@sentry/browser`
// prevents the browser package from being bundled in the CDN bundle, and avoids a
// circular dependency between the browser and replay packages should `@sentry/browser` import
// from `@sentry/replay` in the future
const esm_WINDOW = worldwide/* GLOBAL_OBJ */.O ;

const REPLAY_SESSION_KEY = 'sentryReplaySession';
const REPLAY_EVENT_NAME = 'replay_event';
const UNABLE_TO_SEND_REPLAY = 'Unable to send Replay';

// The idle limit for a session after which recording is paused.
const SESSION_IDLE_PAUSE_DURATION = 300000; // 5 minutes in ms

// The idle limit for a session after which the session expires.
const SESSION_IDLE_EXPIRE_DURATION = 900000; // 15 minutes in ms

/** Default flush delays */
const DEFAULT_FLUSH_MIN_DELAY = 5000;
// XXX: Temp fix for our debounce logic where `maxWait` would never occur if it
// was the same as `wait`
const DEFAULT_FLUSH_MAX_DELAY = 5500;

/* How long to wait for error checkouts */
const BUFFER_CHECKOUT_TIME = 60000;

const RETRY_BASE_INTERVAL = 5000;
const RETRY_MAX_COUNT = 3;

/* The max (uncompressed) size in bytes of a network body. Any body larger than this will be truncated. */
const NETWORK_BODY_MAX_SIZE = 150000;

/* The max size of a single console arg that is captured. Any arg larger than this will be truncated. */
const CONSOLE_ARG_MAX_SIZE = 5000;

/* Min. time to wait before we consider something a slow click. */
const SLOW_CLICK_THRESHOLD = 3000;
/* For scroll actions after a click, we only look for a very short time period to detect programmatic scrolling. */
const SLOW_CLICK_SCROLL_TIMEOUT = 300;

/** When encountering a total segment size exceeding this size, stop the replay (as we cannot properly ingest it). */
const REPLAY_MAX_EVENT_BUFFER_SIZE = 20000000; // ~20MB

/** Replays must be min. 5s long before we send them. */
const MIN_REPLAY_DURATION = 4999;
/* The max. allowed value that the minReplayDuration can be set to. */
const MIN_REPLAY_DURATION_LIMIT = 15000;

/** The max. length of a replay. */
const MAX_REPLAY_DURATION = 3600000; // 60 minutes in ms;

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
var NodeType$2 = /* @__PURE__ */ ((NodeType2) => {
  NodeType2[NodeType2["Document"] = 0] = "Document";
  NodeType2[NodeType2["DocumentType"] = 1] = "DocumentType";
  NodeType2[NodeType2["Element"] = 2] = "Element";
  NodeType2[NodeType2["Text"] = 3] = "Text";
  NodeType2[NodeType2["CDATA"] = 4] = "CDATA";
  NodeType2[NodeType2["Comment"] = 5] = "Comment";
  return NodeType2;
})(NodeType$2 || {});
function isElement$1(n2) {
  return n2.nodeType === n2.ELEMENT_NODE;
}
function isShadowRoot(n2) {
  const host = n2?.host;
  return Boolean(host?.shadowRoot === n2);
}
function isNativeShadowDom(shadowRoot) {
  return Object.prototype.toString.call(shadowRoot) === "[object ShadowRoot]";
}
function fixBrowserCompatibilityIssuesInCSS(cssText) {
  if (cssText.includes(" background-clip: text;") && !cssText.includes(" -webkit-background-clip: text;")) {
    cssText = cssText.replace(
      /\sbackground-clip:\s*text;/g,
      " -webkit-background-clip: text; background-clip: text;"
    );
  }
  return cssText;
}
function escapeImportStatement(rule) {
  const { cssText } = rule;
  if (cssText.split('"').length < 3) return cssText;
  const statement = ["@import", `url(${JSON.stringify(rule.href)})`];
  if (rule.layerName === "") {
    statement.push(`layer`);
  } else if (rule.layerName) {
    statement.push(`layer(${rule.layerName})`);
  }
  if (rule.supportsText) {
    statement.push(`supports(${rule.supportsText})`);
  }
  if (rule.media.length) {
    statement.push(rule.media.mediaText);
  }
  return statement.join(" ") + ";";
}
function stringifyStylesheet(s2) {
  try {
    const rules2 = s2.rules || s2.cssRules;
    return rules2 ? fixBrowserCompatibilityIssuesInCSS(
      Array.from(rules2, stringifyRule).join("")
    ) : null;
  } catch (error) {
    return null;
  }
}
function fixAllCssProperty(rule) {
  let styles = "";
  for (let i2 = 0; i2 < rule.style.length; i2++) {
    const styleDeclaration = rule.style;
    const attribute = styleDeclaration[i2];
    const isImportant = styleDeclaration.getPropertyPriority(attribute);
    styles += `${attribute}:${styleDeclaration.getPropertyValue(attribute)}${isImportant ? ` !important` : ""};`;
  }
  return `${rule.selectorText} { ${styles} }`;
}
function stringifyRule(rule) {
  let importStringified;
  if (isCSSImportRule(rule)) {
    try {
      importStringified = // for same-origin stylesheets,
      // we can access the imported stylesheet rules directly
      stringifyStylesheet(rule.styleSheet) || // work around browser issues with the raw string `@import url(...)` statement
      escapeImportStatement(rule);
    } catch (error) {
    }
  } else if (isCSSStyleRule(rule)) {
    let cssText = rule.cssText;
    const needsSafariColonFix = rule.selectorText.includes(":");
    const needsAllFix = typeof rule.style["all"] === "string" && rule.style["all"];
    if (needsAllFix) {
      cssText = fixAllCssProperty(rule);
    }
    if (needsSafariColonFix) {
      cssText = fixSafariColons(cssText);
    }
    if (needsSafariColonFix || needsAllFix) {
      return cssText;
    }
  }
  return importStringified || rule.cssText;
}
function fixSafariColons(cssStringified) {
  const regex = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return cssStringified.replace(regex, "$1\\$2");
}
function isCSSImportRule(rule) {
  return "styleSheet" in rule;
}
function isCSSStyleRule(rule) {
  return "selectorText" in rule;
}
class Mirror {
  constructor() {
    __publicField$1(this, "idNodeMap", /* @__PURE__ */ new Map());
    __publicField$1(this, "nodeMetaMap", /* @__PURE__ */ new WeakMap());
  }
  getId(n2) {
    if (!n2) return -1;
    const id = this.getMeta(n2)?.id;
    return id ?? -1;
  }
  getNode(id) {
    return this.idNodeMap.get(id) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(n2) {
    return this.nodeMetaMap.get(n2) || null;
  }
  // removes the node from idNodeMap
  // doesn't remove the node from nodeMetaMap
  removeNodeFromMap(n2) {
    const id = this.getId(n2);
    this.idNodeMap.delete(id);
    if (n2.childNodes) {
      n2.childNodes.forEach(
        (childNode) => this.removeNodeFromMap(childNode)
      );
    }
  }
  has(id) {
    return this.idNodeMap.has(id);
  }
  hasNode(node) {
    return this.nodeMetaMap.has(node);
  }
  add(n2, meta) {
    const id = meta.id;
    this.idNodeMap.set(id, n2);
    this.nodeMetaMap.set(n2, meta);
  }
  replace(id, n2) {
    const oldNode = this.getNode(id);
    if (oldNode) {
      const meta = this.nodeMetaMap.get(oldNode);
      if (meta) this.nodeMetaMap.set(n2, meta);
    }
    this.idNodeMap.set(id, n2);
  }
  reset() {
    this.idNodeMap = /* @__PURE__ */ new Map();
    this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
  }
}
function createMirror$2() {
  return new Mirror();
}
function shouldMaskInput({
  maskInputOptions,
  tagName,
  type
}) {
  if (tagName === "OPTION") {
    tagName = "SELECT";
  }
  return Boolean(
    maskInputOptions[tagName.toLowerCase()] || type && maskInputOptions[type] || type === "password" || // Default to "text" option for inputs without a "type" attribute defined
    tagName === "INPUT" && !type && maskInputOptions["text"]
  );
}
function maskInputValue({
  isMasked,
  element,
  value,
  maskInputFn
}) {
  let text = value || "";
  if (!isMasked) {
    return text;
  }
  if (maskInputFn) {
    text = maskInputFn(text, element);
  }
  return "*".repeat(text.length);
}
function toLowerCase(str) {
  return str.toLowerCase();
}
function toUpperCase(str) {
  return str.toUpperCase();
}
const ORIGINAL_ATTRIBUTE_NAME = "__rrweb_original__";
function is2DCanvasBlank(canvas) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return true;
  const chunkSize = 50;
  for (let x = 0; x < canvas.width; x += chunkSize) {
    for (let y = 0; y < canvas.height; y += chunkSize) {
      const getImageData = ctx.getImageData;
      const originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData ? getImageData[ORIGINAL_ATTRIBUTE_NAME] : getImageData;
      const pixelBuffer = new Uint32Array(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        originalGetImageData.call(
          ctx,
          x,
          y,
          Math.min(chunkSize, canvas.width - x),
          Math.min(chunkSize, canvas.height - y)
        ).data.buffer
      );
      if (pixelBuffer.some((pixel) => pixel !== 0)) return false;
    }
  }
  return true;
}
function getInputType(element) {
  const type = element.type;
  return element.hasAttribute("data-rr-is-password") ? "password" : type ? (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    toLowerCase(type)
  ) : null;
}
function getInputValue(el, tagName, type) {
  if (tagName === "INPUT" && (type === "radio" || type === "checkbox")) {
    return el.getAttribute("value") || "";
  }
  return el.value;
}
function extractFileExtension(path, baseURL) {
  let url;
  try {
    url = new URL(path, baseURL ?? window.location.href);
  } catch (err) {
    return null;
  }
  const regex = /\.([0-9a-z]+)(?:$)/i;
  const match = url.pathname.match(regex);
  return match?.[1] ?? null;
}
const cachedImplementations$1 = {};
function getImplementation$1(name) {
  const cached = cachedImplementations$1[name];
  if (cached) {
    return cached;
  }
  const document2 = window.document;
  let impl = window[name];
  if (document2 && typeof document2.createElement === "function") {
    try {
      const sandbox = document2.createElement("iframe");
      sandbox.hidden = true;
      document2.head.appendChild(sandbox);
      const contentWindow = sandbox.contentWindow;
      if (contentWindow && contentWindow[name]) {
        impl = // eslint-disable-next-line @typescript-eslint/unbound-method
        contentWindow[name];
      }
      document2.head.removeChild(sandbox);
    } catch (e2) {
    }
  }
  return cachedImplementations$1[name] = impl.bind(
    window
  );
}
function setTimeout$2(...rest) {
  return getImplementation$1("setTimeout")(...rest);
}
function clearTimeout$1(...rest) {
  return getImplementation$1("clearTimeout")(...rest);
}
function getIframeContentDocument(iframe) {
  try {
    return iframe.contentDocument;
  } catch (e2) {
  }
}
let _id = 1;
const tagNameRegex = new RegExp("[^a-z0-9-_:]");
const IGNORED_NODE = -2;
function genId() {
  return _id++;
}
function getValidTagName$1(element) {
  if (element instanceof HTMLFormElement) {
    return "form";
  }
  const processedTagName = toLowerCase(element.tagName);
  if (tagNameRegex.test(processedTagName)) {
    return "div";
  }
  return processedTagName;
}
function extractOrigin(url) {
  let origin = "";
  if (url.indexOf("//") > -1) {
    origin = url.split("/").slice(0, 3).join("/");
  } else {
    origin = url.split("/")[0];
  }
  origin = origin.split("?")[0];
  return origin;
}
let canvasService;
let canvasCtx;
const URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
const URL_PROTOCOL_MATCH = /^(?:[a-z+]+:)?\/\//i;
const URL_WWW_MATCH = /^www\..*/i;
const DATA_URI = /^(data:)([^,]*),(.*)/i;
function absoluteToStylesheet(cssText, href) {
  return (cssText || "").replace(
    URL_IN_CSS_REF,
    (origin, quote1, path1, quote2, path2, path3) => {
      const filePath = path1 || path2 || path3;
      const maybeQuote = quote1 || quote2 || "";
      if (!filePath) {
        return origin;
      }
      if (URL_PROTOCOL_MATCH.test(filePath) || URL_WWW_MATCH.test(filePath)) {
        return `url(${maybeQuote}${filePath}${maybeQuote})`;
      }
      if (DATA_URI.test(filePath)) {
        return `url(${maybeQuote}${filePath}${maybeQuote})`;
      }
      if (filePath[0] === "/") {
        return `url(${maybeQuote}${extractOrigin(href) + filePath}${maybeQuote})`;
      }
      const stack = href.split("/");
      const parts = filePath.split("/");
      stack.pop();
      for (const part of parts) {
        if (part === ".") {
          continue;
        } else if (part === "..") {
          stack.pop();
        } else {
          stack.push(part);
        }
      }
      return `url(${maybeQuote}${stack.join("/")}${maybeQuote})`;
    }
  );
}
const SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
const SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
  if (attributeValue.trim() === "") {
    return attributeValue;
  }
  let pos = 0;
  function collectCharacters(regEx) {
    let chars2;
    const match = regEx.exec(attributeValue.substring(pos));
    if (match) {
      chars2 = match[0];
      pos += chars2.length;
      return chars2;
    }
    return "";
  }
  const output = [];
  while (true) {
    collectCharacters(SRCSET_COMMAS_OR_SPACES);
    if (pos >= attributeValue.length) {
      break;
    }
    let url = collectCharacters(SRCSET_NOT_SPACES);
    if (url.slice(-1) === ",") {
      url = absoluteToDoc(doc, url.substring(0, url.length - 1));
      output.push(url);
    } else {
      let descriptorsStr = "";
      url = absoluteToDoc(doc, url);
      let inParens = false;
      while (true) {
        const c2 = attributeValue.charAt(pos);
        if (c2 === "") {
          output.push((url + descriptorsStr).trim());
          break;
        } else if (!inParens) {
          if (c2 === ",") {
            pos += 1;
            output.push((url + descriptorsStr).trim());
            break;
          } else if (c2 === "(") {
            inParens = true;
          }
        } else {
          if (c2 === ")") {
            inParens = false;
          }
        }
        descriptorsStr += c2;
        pos += 1;
      }
    }
  }
  return output.join(", ");
}
const cachedDocument = /* @__PURE__ */ new WeakMap();
function absoluteToDoc(doc, attributeValue) {
  if (!attributeValue || attributeValue.trim() === "") {
    return attributeValue;
  }
  return getHref(doc, attributeValue);
}
function isSVGElement(el) {
  return Boolean(el.tagName === "svg" || el.ownerSVGElement);
}
function getHref(doc, customHref) {
  let a2 = cachedDocument.get(doc);
  if (!a2) {
    a2 = doc.createElement("a");
    cachedDocument.set(doc, a2);
  }
  if (!customHref) {
    customHref = "";
  } else if (customHref.startsWith("blob:") || customHref.startsWith("data:")) {
    return customHref;
  }
  a2.setAttribute("href", customHref);
  return a2.href;
}
function transformAttribute(doc, tagName, name, value, element, maskAttributeFn) {
  if (!value) {
    return value;
  }
  if (name === "src" || name === "href" && !(tagName === "use" && value[0] === "#")) {
    return absoluteToDoc(doc, value);
  } else if (name === "xlink:href" && value[0] !== "#") {
    return absoluteToDoc(doc, value);
  } else if (name === "background" && (tagName === "table" || tagName === "td" || tagName === "th")) {
    return absoluteToDoc(doc, value);
  } else if (name === "srcset") {
    return getAbsoluteSrcsetString(doc, value);
  } else if (name === "style") {
    return absoluteToStylesheet(value, getHref(doc));
  } else if (tagName === "object" && name === "data") {
    return absoluteToDoc(doc, value);
  }
  if (typeof maskAttributeFn === "function") {
    return maskAttributeFn(name, value, element);
  }
  return value;
}
function ignoreAttribute(tagName, name, _value) {
  return (tagName === "video" || tagName === "audio") && name === "autoplay";
}
function _isBlockedElement(element, blockClass, blockSelector, unblockSelector) {
  try {
    if (unblockSelector && element.matches(unblockSelector)) {
      return false;
    }
    if (typeof blockClass === "string") {
      if (element.classList.contains(blockClass)) {
        return true;
      }
    } else {
      for (let eIndex = element.classList.length; eIndex--; ) {
        const className = element.classList[eIndex];
        if (blockClass.test(className)) {
          return true;
        }
      }
    }
    if (blockSelector) {
      return element.matches(blockSelector);
    }
  } catch (e2) {
  }
  return false;
}
function elementClassMatchesRegex(el, regex) {
  for (let eIndex = el.classList.length; eIndex--; ) {
    const className = el.classList[eIndex];
    if (regex.test(className)) {
      return true;
    }
  }
  return false;
}
function distanceToMatch(node, matchPredicate, limit = Infinity, distance = 0) {
  if (!node) return -1;
  if (node.nodeType !== node.ELEMENT_NODE) return -1;
  if (distance > limit) return -1;
  if (matchPredicate(node)) return distance;
  return distanceToMatch(node.parentNode, matchPredicate, limit, distance + 1);
}
function createMatchPredicate(className, selector) {
  return (node) => {
    const el = node;
    if (el === null) return false;
    try {
      if (className) {
        if (typeof className === "string") {
          if (el.matches(`.${className}`)) return true;
        } else if (elementClassMatchesRegex(el, className)) {
          return true;
        }
      }
      if (selector && el.matches(selector)) return true;
      return false;
    } catch {
      return false;
    }
  };
}
function needMaskingText(node, maskTextClass, maskTextSelector, unmaskTextClass, unmaskTextSelector, maskAllText) {
  try {
    const el = node.nodeType === node.ELEMENT_NODE ? node : node.parentElement;
    if (el === null) return false;
    if (el.tagName === "INPUT") {
      const autocomplete = el.getAttribute("autocomplete");
      const disallowedAutocompleteValues = [
        "current-password",
        "new-password",
        "cc-number",
        "cc-exp",
        "cc-exp-month",
        "cc-exp-year",
        "cc-csc"
      ];
      if (disallowedAutocompleteValues.includes(autocomplete)) {
        return true;
      }
    }
    let maskDistance = -1;
    let unmaskDistance = -1;
    if (maskAllText) {
      unmaskDistance = distanceToMatch(
        el,
        createMatchPredicate(unmaskTextClass, unmaskTextSelector)
      );
      if (unmaskDistance < 0) {
        return true;
      }
      maskDistance = distanceToMatch(
        el,
        createMatchPredicate(maskTextClass, maskTextSelector),
        unmaskDistance >= 0 ? unmaskDistance : Infinity
      );
    } else {
      maskDistance = distanceToMatch(
        el,
        createMatchPredicate(maskTextClass, maskTextSelector)
      );
      if (maskDistance < 0) {
        return false;
      }
      unmaskDistance = distanceToMatch(
        el,
        createMatchPredicate(unmaskTextClass, unmaskTextSelector),
        maskDistance >= 0 ? maskDistance : Infinity
      );
    }
    return maskDistance >= 0 ? unmaskDistance >= 0 ? maskDistance <= unmaskDistance : true : unmaskDistance >= 0 ? false : !!maskAllText;
  } catch (e2) {
  }
  return !!maskAllText;
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
  const win = iframeEl.contentWindow;
  if (!win) {
    return;
  }
  let fired = false;
  let readyState;
  try {
    readyState = win.document.readyState;
  } catch (error) {
    return;
  }
  if (readyState !== "complete") {
    const timer = setTimeout$2(() => {
      if (!fired) {
        listener();
        fired = true;
      }
    }, iframeLoadTimeout);
    iframeEl.addEventListener("load", () => {
      clearTimeout$1(timer);
      fired = true;
      listener();
    });
    return;
  }
  const blankUrl = "about:blank";
  if (win.location.href !== blankUrl || iframeEl.src === blankUrl || iframeEl.src === "") {
    setTimeout$2(listener, 0);
    return iframeEl.addEventListener("load", listener);
  }
  iframeEl.addEventListener("load", listener);
}
function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
  let fired = false;
  let styleSheetLoaded;
  try {
    styleSheetLoaded = link.sheet;
  } catch (error) {
    return;
  }
  if (styleSheetLoaded) return;
  const timer = setTimeout$2(() => {
    if (!fired) {
      listener();
      fired = true;
    }
  }, styleSheetLoadTimeout);
  link.addEventListener("load", () => {
    clearTimeout$1(timer);
    fired = true;
    listener();
  });
}
function serializeNode(n2, options) {
  const {
    doc,
    mirror: mirror2,
    blockClass,
    blockSelector,
    unblockSelector,
    maskAllText,
    maskAttributeFn,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector,
    inlineStylesheet,
    maskInputOptions = {},
    maskTextFn,
    maskInputFn,
    dataURLOptions = {},
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement = false
  } = options;
  const rootId = getRootId(doc, mirror2);
  switch (n2.nodeType) {
    case n2.DOCUMENT_NODE:
      if (n2.compatMode !== "CSS1Compat") {
        return {
          type: NodeType$2.Document,
          childNodes: [],
          compatMode: n2.compatMode
          // probably "BackCompat"
        };
      } else {
        return {
          type: NodeType$2.Document,
          childNodes: []
        };
      }
    case n2.DOCUMENT_TYPE_NODE:
      return {
        type: NodeType$2.DocumentType,
        name: n2.name,
        publicId: n2.publicId,
        systemId: n2.systemId,
        rootId
      };
    case n2.ELEMENT_NODE:
      return serializeElementNode(n2, {
        doc,
        blockClass,
        blockSelector,
        unblockSelector,
        inlineStylesheet,
        maskAttributeFn,
        maskInputOptions,
        maskInputFn,
        dataURLOptions,
        inlineImages,
        recordCanvas,
        keepIframeSrcFn,
        newlyAddedElement,
        rootId,
        maskAllText,
        maskTextClass,
        unmaskTextClass,
        maskTextSelector,
        unmaskTextSelector
      });
    case n2.TEXT_NODE:
      return serializeTextNode(n2, {
        doc,
        maskAllText,
        maskTextClass,
        unmaskTextClass,
        maskTextSelector,
        unmaskTextSelector,
        maskTextFn,
        maskInputOptions,
        maskInputFn,
        rootId
      });
    case n2.CDATA_SECTION_NODE:
      return {
        type: NodeType$2.CDATA,
        textContent: "",
        rootId
      };
    case n2.COMMENT_NODE:
      return {
        type: NodeType$2.Comment,
        textContent: n2.textContent || "",
        rootId
      };
    default:
      return false;
  }
}
function getRootId(doc, mirror2) {
  if (!mirror2.hasNode(doc)) return undefined;
  const docId = mirror2.getId(doc);
  return docId === 1 ? undefined : docId;
}
function serializeTextNode(n2, options) {
  const {
    maskAllText,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector,
    maskTextFn,
    maskInputOptions,
    maskInputFn,
    rootId
  } = options;
  const parentTagName = n2.parentNode && n2.parentNode.tagName;
  let textContent = n2.textContent;
  const isStyle = parentTagName === "STYLE" ? true : undefined;
  const isScript = parentTagName === "SCRIPT" ? true : undefined;
  const isTextarea = parentTagName === "TEXTAREA" ? true : undefined;
  if (isStyle && textContent) {
    try {
      if (n2.nextSibling || n2.previousSibling) {
      } else if (n2.parentNode.sheet?.cssRules) {
        textContent = stringifyStylesheet(
          n2.parentNode.sheet
        );
      }
    } catch (err) {
      console.warn(
        `Cannot get CSS styles from text's parentNode. Error: ${err}`,
        n2
      );
    }
    textContent = absoluteToStylesheet(textContent, getHref(options.doc));
  }
  if (isScript) {
    textContent = "SCRIPT_PLACEHOLDER";
  }
  const forceMask = needMaskingText(
    n2,
    maskTextClass,
    maskTextSelector,
    unmaskTextClass,
    unmaskTextSelector,
    maskAllText
  );
  if (!isStyle && !isScript && !isTextarea && textContent && forceMask) {
    textContent = maskTextFn ? maskTextFn(textContent, n2.parentElement) : textContent.replace(/[\S]/g, "*");
  }
  if (isTextarea && textContent && (maskInputOptions.textarea || forceMask)) {
    textContent = maskInputFn ? maskInputFn(textContent, n2.parentNode) : textContent.replace(/[\S]/g, "*");
  }
  if (parentTagName === "OPTION" && textContent) {
    const isInputMasked = shouldMaskInput({
      type: null,
      tagName: parentTagName,
      maskInputOptions
    });
    textContent = maskInputValue({
      isMasked: needMaskingText(
        n2,
        maskTextClass,
        maskTextSelector,
        unmaskTextClass,
        unmaskTextSelector,
        isInputMasked
      ),
      element: n2,
      value: textContent,
      maskInputFn
    });
  }
  return {
    type: NodeType$2.Text,
    textContent: textContent || "",
    isStyle,
    rootId
  };
}
function serializeElementNode(n2, options) {
  const {
    doc,
    blockClass,
    blockSelector,
    unblockSelector,
    inlineStylesheet,
    maskInputOptions = {},
    maskAttributeFn,
    maskInputFn,
    dataURLOptions = {},
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement = false,
    rootId,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector
  } = options;
  const needBlock = _isBlockedElement(
    n2,
    blockClass,
    blockSelector,
    unblockSelector
  );
  const tagName = getValidTagName$1(n2);
  let attributes2 = {};
  const len = n2.attributes.length;
  for (let i2 = 0; i2 < len; i2++) {
    const attr = n2.attributes[i2];
    if (attr.name && !ignoreAttribute(tagName, attr.name, attr.value)) {
      attributes2[attr.name] = transformAttribute(
        doc,
        tagName,
        toLowerCase(attr.name),
        attr.value,
        n2,
        maskAttributeFn
      );
    }
  }
  if (tagName === "link" && inlineStylesheet) {
    const stylesheet = Array.from(doc.styleSheets).find((s2) => {
      return s2.href === n2.href;
    });
    let cssText = null;
    if (stylesheet) {
      cssText = stringifyStylesheet(stylesheet);
    }
    if (cssText) {
      attributes2.rel = null;
      attributes2.href = null;
      attributes2.crossorigin = null;
      attributes2._cssText = absoluteToStylesheet(cssText, stylesheet.href);
    }
  }
  if (tagName === "style" && n2.sheet && // TODO: Currently we only try to get dynamic stylesheet when it is an empty style element
  !(n2.innerText || n2.textContent || "").trim().length) {
    const cssText = stringifyStylesheet(
      n2.sheet
    );
    if (cssText) {
      attributes2._cssText = absoluteToStylesheet(cssText, getHref(doc));
    }
  }
  if (tagName === "input" || tagName === "textarea" || tagName === "select" || tagName === "option") {
    const el = n2;
    const type = getInputType(el);
    const value = getInputValue(el, toUpperCase(tagName), type);
    const checked = el.checked;
    if (type !== "submit" && type !== "button" && value) {
      const forceMask = needMaskingText(
        el,
        maskTextClass,
        maskTextSelector,
        unmaskTextClass,
        unmaskTextSelector,
        shouldMaskInput({
          type,
          tagName: toUpperCase(tagName),
          maskInputOptions
        })
      );
      attributes2.value = maskInputValue({
        isMasked: forceMask,
        element: el,
        value,
        maskInputFn
      });
    }
    if (checked) {
      attributes2.checked = checked;
    }
  }
  if (tagName === "option") {
    if (n2.selected && !maskInputOptions["select"]) {
      attributes2.selected = true;
    } else {
      delete attributes2.selected;
    }
  }
  if (tagName === "canvas" && recordCanvas) {
    if (n2.__context === "2d") {
      if (!is2DCanvasBlank(n2)) {
        attributes2.rr_dataURL = n2.toDataURL(
          dataURLOptions.type,
          dataURLOptions.quality
        );
      }
    } else if (!("__context" in n2)) {
      const canvasDataURL = n2.toDataURL(
        dataURLOptions.type,
        dataURLOptions.quality
      );
      const blankCanvas = doc.createElement("canvas");
      blankCanvas.width = n2.width;
      blankCanvas.height = n2.height;
      const blankCanvasDataURL = blankCanvas.toDataURL(
        dataURLOptions.type,
        dataURLOptions.quality
      );
      if (canvasDataURL !== blankCanvasDataURL) {
        attributes2.rr_dataURL = canvasDataURL;
      }
    }
  }
  if (tagName === "img" && inlineImages) {
    if (!canvasService) {
      canvasService = doc.createElement("canvas");
      canvasCtx = canvasService.getContext("2d");
    }
    const image = n2;
    const imageSrc = image.currentSrc || image.getAttribute("src") || "<unknown-src>";
    const priorCrossOrigin = image.crossOrigin;
    const recordInlineImage = () => {
      image.removeEventListener("load", recordInlineImage);
      try {
        canvasService.width = image.naturalWidth;
        canvasService.height = image.naturalHeight;
        canvasCtx.drawImage(image, 0, 0);
        attributes2.rr_dataURL = canvasService.toDataURL(
          dataURLOptions.type,
          dataURLOptions.quality
        );
      } catch (err) {
        if (image.crossOrigin !== "anonymous") {
          image.crossOrigin = "anonymous";
          if (image.complete && image.naturalWidth !== 0)
            recordInlineImage();
          else image.addEventListener("load", recordInlineImage);
          return;
        } else {
          console.warn(
            `Cannot inline img src=${imageSrc}! Error: ${err}`
          );
        }
      }
      if (image.crossOrigin === "anonymous") {
        priorCrossOrigin ? attributes2.crossOrigin = priorCrossOrigin : image.removeAttribute("crossorigin");
      }
    };
    if (image.complete && image.naturalWidth !== 0) recordInlineImage();
    else image.addEventListener("load", recordInlineImage);
  }
  if (tagName === "audio" || tagName === "video") {
    attributes2.rr_mediaState = n2.paused ? "paused" : "played";
    attributes2.rr_mediaCurrentTime = n2.currentTime;
  }
  if (!newlyAddedElement) {
    if (n2.scrollLeft) {
      attributes2.rr_scrollLeft = n2.scrollLeft;
    }
    if (n2.scrollTop) {
      attributes2.rr_scrollTop = n2.scrollTop;
    }
  }
  if (needBlock) {
    const { width, height } = n2.getBoundingClientRect();
    attributes2 = {
      class: attributes2.class,
      rr_width: `${width}px`,
      rr_height: `${height}px`
    };
  }
  if (tagName === "iframe" && !keepIframeSrcFn(attributes2.src)) {
    if (!needBlock && !getIframeContentDocument(n2)) {
      attributes2.rr_src = attributes2.src;
    }
    delete attributes2.src;
  }
  let isCustomElement;
  try {
    if (customElements.get(tagName)) isCustomElement = true;
  } catch (e2) {
  }
  return {
    type: NodeType$2.Element,
    tagName,
    attributes: attributes2,
    childNodes: [],
    isSVG: isSVGElement(n2) || undefined,
    needBlock,
    rootId,
    isCustom: isCustomElement
  };
}
function lowerIfExists(maybeAttr) {
  if (maybeAttr === undefined || maybeAttr === null) {
    return "";
  } else {
    return maybeAttr.toLowerCase();
  }
}
function slimDOMExcluded(sn, slimDOMOptions) {
  if (slimDOMOptions.comment && sn.type === NodeType$2.Comment) {
    return true;
  } else if (sn.type === NodeType$2.Element) {
    if (slimDOMOptions.script && // script tag
    (sn.tagName === "script" || // (module)preload link
    sn.tagName === "link" && (sn.attributes.rel === "preload" || sn.attributes.rel === "modulepreload") || // prefetch link
    sn.tagName === "link" && sn.attributes.rel === "prefetch" && typeof sn.attributes.href === "string" && extractFileExtension(sn.attributes.href) === "js")) {
      return true;
    } else if (slimDOMOptions.headFavicon && (sn.tagName === "link" && sn.attributes.rel === "shortcut icon" || sn.tagName === "meta" && (lowerIfExists(sn.attributes.name).match(
      /^msapplication-tile(image|color)$/
    ) || lowerIfExists(sn.attributes.name) === "application-name" || lowerIfExists(sn.attributes.rel) === "icon" || lowerIfExists(sn.attributes.rel) === "apple-touch-icon" || lowerIfExists(sn.attributes.rel) === "shortcut icon"))) {
      return true;
    } else if (sn.tagName === "meta") {
      if (slimDOMOptions.headMetaDescKeywords && lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
        return true;
      } else if (slimDOMOptions.headMetaSocial && (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) || // og = opengraph (facebook)
      lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) || lowerIfExists(sn.attributes.name) === "pinterest")) {
        return true;
      } else if (slimDOMOptions.headMetaRobots && (lowerIfExists(sn.attributes.name) === "robots" || lowerIfExists(sn.attributes.name) === "googlebot" || lowerIfExists(sn.attributes.name) === "bingbot")) {
        return true;
      } else if (slimDOMOptions.headMetaHttpEquiv && sn.attributes["http-equiv"] !== undefined) {
        return true;
      } else if (slimDOMOptions.headMetaAuthorship && (lowerIfExists(sn.attributes.name) === "author" || lowerIfExists(sn.attributes.name) === "generator" || lowerIfExists(sn.attributes.name) === "framework" || lowerIfExists(sn.attributes.name) === "publisher" || lowerIfExists(sn.attributes.name) === "progid" || lowerIfExists(sn.attributes.property).match(/^article:/) || lowerIfExists(sn.attributes.property).match(/^product:/))) {
        return true;
      } else if (slimDOMOptions.headMetaVerification && (lowerIfExists(sn.attributes.name) === "google-site-verification" || lowerIfExists(sn.attributes.name) === "yandex-verification" || lowerIfExists(sn.attributes.name) === "csrf-token" || lowerIfExists(sn.attributes.name) === "p:domain_verify" || lowerIfExists(sn.attributes.name) === "verify-v1" || lowerIfExists(sn.attributes.name) === "verification" || lowerIfExists(sn.attributes.name) === "shopify-checkout-api-token")) {
        return true;
      }
    }
  }
  return false;
}
function serializeNodeWithId(n2, options) {
  const {
    doc,
    mirror: mirror2,
    blockClass,
    blockSelector,
    unblockSelector,
    maskAllText,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector,
    skipChild = false,
    inlineStylesheet = true,
    maskInputOptions = {},
    maskAttributeFn,
    maskTextFn,
    maskInputFn,
    slimDOMOptions,
    dataURLOptions = {},
    inlineImages = false,
    recordCanvas = false,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout = 5e3,
    onStylesheetLoad,
    stylesheetLoadTimeout = 5e3,
    keepIframeSrcFn = () => false,
    newlyAddedElement = false
  } = options;
  let { preserveWhiteSpace = true } = options;
  const _serializedNode = serializeNode(n2, {
    doc,
    mirror: mirror2,
    blockClass,
    blockSelector,
    maskAllText,
    unblockSelector,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector,
    inlineStylesheet,
    maskInputOptions,
    maskAttributeFn,
    maskTextFn,
    maskInputFn,
    dataURLOptions,
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement
  });
  if (!_serializedNode) {
    console.warn(n2, "not serialized");
    return null;
  }
  let id;
  if (mirror2.hasNode(n2)) {
    id = mirror2.getId(n2);
  } else if (slimDOMExcluded(_serializedNode, slimDOMOptions) || !preserveWhiteSpace && _serializedNode.type === NodeType$2.Text && !_serializedNode.isStyle && !_serializedNode.textContent.replace(/^\s+|\s+$/gm, "").length) {
    id = IGNORED_NODE;
  } else {
    id = genId();
  }
  const serializedNode2 = Object.assign(_serializedNode, { id });
  mirror2.add(n2, serializedNode2);
  if (id === IGNORED_NODE) {
    return null;
  }
  if (onSerialize) {
    onSerialize(n2);
  }
  let recordChild = !skipChild;
  if (serializedNode2.type === NodeType$2.Element) {
    recordChild = recordChild && !serializedNode2.needBlock;
    delete serializedNode2.needBlock;
    const shadowRoot = n2.shadowRoot;
    if (shadowRoot && isNativeShadowDom(shadowRoot))
      serializedNode2.isShadowHost = true;
  }
  if ((serializedNode2.type === NodeType$2.Document || serializedNode2.type === NodeType$2.Element) && recordChild) {
    if (slimDOMOptions.headWhitespace && serializedNode2.type === NodeType$2.Element && serializedNode2.tagName === "head") {
      preserveWhiteSpace = false;
    }
    const bypassOptions = {
      doc,
      mirror: mirror2,
      blockClass,
      blockSelector,
      maskAllText,
      unblockSelector,
      maskTextClass,
      unmaskTextClass,
      maskTextSelector,
      unmaskTextSelector,
      skipChild,
      inlineStylesheet,
      maskInputOptions,
      maskAttributeFn,
      maskTextFn,
      maskInputFn,
      slimDOMOptions,
      dataURLOptions,
      inlineImages,
      recordCanvas,
      preserveWhiteSpace,
      onSerialize,
      onIframeLoad,
      iframeLoadTimeout,
      onStylesheetLoad,
      stylesheetLoadTimeout,
      keepIframeSrcFn
    };
    for (const childN of Array.from(n2.childNodes)) {
      const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
      if (serializedChildNode) {
        serializedNode2.childNodes.push(serializedChildNode);
      }
    }
    if (isElement$1(n2) && n2.shadowRoot) {
      for (const childN of Array.from(n2.shadowRoot.childNodes)) {
        const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
        if (serializedChildNode) {
          isNativeShadowDom(n2.shadowRoot) && (serializedChildNode.isShadow = true);
          serializedNode2.childNodes.push(serializedChildNode);
        }
      }
    }
  }
  if (n2.parentNode && isShadowRoot(n2.parentNode) && isNativeShadowDom(n2.parentNode)) {
    serializedNode2.isShadow = true;
  }
  if (serializedNode2.type === NodeType$2.Element && serializedNode2.tagName === "iframe" && !_isBlockedElement(
    n2,
    blockClass,
    blockSelector,
    unblockSelector
  )) {
    onceIframeLoaded(
      n2,
      () => {
        const iframeDoc = getIframeContentDocument(n2);
        if (iframeDoc && onIframeLoad) {
          const serializedIframeNode = serializeNodeWithId(iframeDoc, {
            doc: iframeDoc,
            mirror: mirror2,
            blockClass,
            blockSelector,
            unblockSelector,
            maskAllText,
            maskTextClass,
            unmaskTextClass,
            maskTextSelector,
            unmaskTextSelector,
            skipChild: false,
            inlineStylesheet,
            maskInputOptions,
            maskAttributeFn,
            maskTextFn,
            maskInputFn,
            slimDOMOptions,
            dataURLOptions,
            inlineImages,
            recordCanvas,
            preserveWhiteSpace,
            onSerialize,
            onIframeLoad,
            iframeLoadTimeout,
            onStylesheetLoad,
            stylesheetLoadTimeout,
            keepIframeSrcFn
          });
          if (serializedIframeNode) {
            onIframeLoad(
              n2,
              serializedIframeNode
            );
          }
        }
      },
      iframeLoadTimeout
    );
  }
  if (serializedNode2.type === NodeType$2.Element && serializedNode2.tagName === "link" && typeof serializedNode2.attributes.rel === "string" && (serializedNode2.attributes.rel === "stylesheet" || serializedNode2.attributes.rel === "preload" && typeof serializedNode2.attributes.href === "string" && extractFileExtension(serializedNode2.attributes.href) === "css")) {
    onceStylesheetLoaded(
      n2,
      () => {
        if (onStylesheetLoad) {
          const serializedLinkNode = serializeNodeWithId(n2, {
            doc,
            mirror: mirror2,
            blockClass,
            blockSelector,
            unblockSelector,
            maskAllText,
            maskTextClass,
            unmaskTextClass,
            maskTextSelector,
            unmaskTextSelector,
            skipChild: false,
            inlineStylesheet,
            maskInputOptions,
            maskAttributeFn,
            maskTextFn,
            maskInputFn,
            slimDOMOptions,
            dataURLOptions,
            inlineImages,
            recordCanvas,
            preserveWhiteSpace,
            onSerialize,
            onIframeLoad,
            iframeLoadTimeout,
            onStylesheetLoad,
            stylesheetLoadTimeout,
            keepIframeSrcFn
          });
          if (serializedLinkNode) {
            onStylesheetLoad(
              n2,
              serializedLinkNode
            );
          }
        }
      },
      stylesheetLoadTimeout
    );
  }
  return serializedNode2;
}
function snapshot(n2, options) {
  const {
    mirror: mirror2 = new Mirror(),
    blockClass = "rr-block",
    blockSelector = null,
    unblockSelector = null,
    maskAllText = false,
    maskTextClass = "rr-mask",
    unmaskTextClass = null,
    maskTextSelector = null,
    unmaskTextSelector = null,
    inlineStylesheet = true,
    inlineImages = false,
    recordCanvas = false,
    maskAllInputs = false,
    maskAttributeFn,
    maskTextFn,
    maskInputFn,
    slimDOM = false,
    dataURLOptions,
    preserveWhiteSpace,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout,
    onStylesheetLoad,
    stylesheetLoadTimeout,
    keepIframeSrcFn = () => false
  } = options;
  const maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true
  } : maskAllInputs === false ? {} : maskAllInputs;
  const slimDOMOptions = slimDOM === true || slimDOM === "all" ? (
    // if true: set of sensible options that should not throw away any information
    {
      script: true,
      comment: true,
      headFavicon: true,
      headWhitespace: true,
      headMetaDescKeywords: slimDOM === "all",
      // destructive
      headMetaSocial: true,
      headMetaRobots: true,
      headMetaHttpEquiv: true,
      headMetaAuthorship: true,
      headMetaVerification: true
    }
  ) : slimDOM === false ? {} : slimDOM;
  return serializeNodeWithId(n2, {
    doc: n2,
    mirror: mirror2,
    blockClass,
    blockSelector,
    unblockSelector,
    maskAllText,
    maskTextClass,
    unmaskTextClass,
    maskTextSelector,
    unmaskTextSelector,
    skipChild: false,
    inlineStylesheet,
    maskInputOptions,
    maskAttributeFn,
    maskTextFn,
    maskInputFn,
    slimDOMOptions,
    dataURLOptions,
    inlineImages,
    recordCanvas,
    preserveWhiteSpace,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout,
    onStylesheetLoad,
    stylesheetLoadTimeout,
    keepIframeSrcFn,
    newlyAddedElement: false
  });
}
function on(type, fn, target = document) {
  const options = { capture: true, passive: true };
  target.addEventListener(type, fn, options);
  return () => target.removeEventListener(type, fn, options);
}
const DEPARTED_MIRROR_ACCESS_WARNING = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
let _mirror = {
  map: {},
  getId() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return -1;
  },
  getNode() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return null;
  },
  removeNodeFromMap() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
  },
  has() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return false;
  },
  reset() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
  }
};
if (typeof window !== "undefined" && window.Proxy && window.Reflect) {
  _mirror = new Proxy(_mirror, {
    get(target, prop, receiver) {
      if (prop === "map") {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}
function throttle$1(func, wait, options = {}) {
  let timeout = null;
  let previous = 0;
  return function(...args) {
    const now = Date.now();
    if (!previous && options.leading === false) {
      previous = now;
    }
    const remaining = wait - (now - previous);
    const context = this;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout$2(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout$1(() => {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        func.apply(context, args);
      }, remaining);
    }
  };
}
function hookSetter(target, key, d, isRevoked, win = window) {
  const original = win.Object.getOwnPropertyDescriptor(target, key);
  win.Object.defineProperty(
    target,
    key,
    isRevoked ? d : {
      set(value) {
        setTimeout$1(() => {
          d.set.call(this, value);
        }, 0);
        if (original && original.set) {
          original.set.call(this, value);
        }
      }
    }
  );
  return () => hookSetter(target, key, original || {}, true);
}
function patch(source, name, replacement) {
  try {
    if (!(name in source)) {
      return () => {
      };
    }
    const original = source[name];
    const wrapped = replacement(original);
    if (typeof wrapped === "function") {
      wrapped.prototype = wrapped.prototype || {};
      Object.defineProperties(wrapped, {
        __rrweb_original__: {
          enumerable: false,
          value: original
        }
      });
    }
    source[name] = wrapped;
    return () => {
      source[name] = original;
    };
  } catch {
    return () => {
    };
  }
}
let nowTimestamp = Date.now;
if (!/* @__PURE__ */ /[1-9][0-9]{12}/.test(Date.now().toString())) {
  nowTimestamp = () => (/* @__PURE__ */ new Date()).getTime();
}
function getWindowScroll(win) {
  const doc = win.document;
  return {
    left: doc.scrollingElement ? doc.scrollingElement.scrollLeft : win.pageXOffset !== undefined ? win.pageXOffset : doc?.documentElement.scrollLeft || doc?.body?.parentElement?.scrollLeft || doc?.body?.scrollLeft || 0,
    top: doc.scrollingElement ? doc.scrollingElement.scrollTop : win.pageYOffset !== undefined ? win.pageYOffset : doc?.documentElement.scrollTop || doc?.body?.parentElement?.scrollTop || doc?.body?.scrollTop || 0
  };
}
function getWindowHeight() {
  return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
}
function getWindowWidth() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
}
function closestElementOfNode(node) {
  if (!node) {
    return null;
  }
  const el = node.nodeType === node.ELEMENT_NODE ? node : node.parentElement;
  return el;
}
function isBlocked(node, blockClass, blockSelector, unblockSelector, checkAncestors) {
  if (!node) {
    return false;
  }
  const el = closestElementOfNode(node);
  if (!el) {
    return false;
  }
  const blockedPredicate = createMatchPredicate(blockClass, blockSelector);
  if (!checkAncestors) {
    const isUnblocked = unblockSelector && el.matches(unblockSelector);
    return blockedPredicate(el) && !isUnblocked;
  }
  const blockDistance = distanceToMatch(el, blockedPredicate);
  let unblockDistance = -1;
  if (blockDistance < 0) {
    return false;
  }
  if (unblockSelector) {
    unblockDistance = distanceToMatch(
      el,
      createMatchPredicate(null, unblockSelector)
    );
  }
  if (blockDistance > -1 && unblockDistance < 0) {
    return true;
  }
  return blockDistance < unblockDistance;
}
function isSerialized(n2, mirror2) {
  return mirror2.getId(n2) !== -1;
}
function isIgnored(n2, mirror2) {
  return mirror2.getId(n2) === IGNORED_NODE;
}
function isAncestorRemoved(target, mirror2) {
  if (isShadowRoot(target)) {
    return false;
  }
  const id = mirror2.getId(target);
  if (!mirror2.has(id)) {
    return true;
  }
  if (target.parentNode && target.parentNode.nodeType === target.DOCUMENT_NODE) {
    return false;
  }
  if (!target.parentNode) {
    return true;
  }
  return isAncestorRemoved(target.parentNode, mirror2);
}
function legacy_isTouchEvent(event) {
  return Boolean(event.changedTouches);
}
function polyfill$1(win = window) {
  if ("NodeList" in win && !win.NodeList.prototype.forEach) {
    win.NodeList.prototype.forEach = Array.prototype.forEach;
  }
  if ("DOMTokenList" in win && !win.DOMTokenList.prototype.forEach) {
    win.DOMTokenList.prototype.forEach = Array.prototype.forEach;
  }
  if (!Node.prototype.contains) {
    Node.prototype.contains = (...args) => {
      let node = args[0];
      if (!(0 in args)) {
        throw new TypeError("1 argument is required");
      }
      do {
        if (this === node) {
          return true;
        }
      } while (node = node && node.parentNode);
      return false;
    };
  }
}
function isSerializedIframe(n2, mirror2) {
  return Boolean(n2.nodeName === "IFRAME" && mirror2.getMeta(n2));
}
function isSerializedStylesheet(n2, mirror2) {
  return Boolean(
    n2.nodeName === "LINK" && n2.nodeType === n2.ELEMENT_NODE && n2.getAttribute && n2.getAttribute("rel") === "stylesheet" && mirror2.getMeta(n2)
  );
}
function hasShadowRoot(n2) {
  return Boolean(n2?.shadowRoot);
}
class StyleSheetMirror {
  constructor() {
    this.id = 1;
    this.styleIDMap = /* @__PURE__ */ new WeakMap();
    this.idStyleMap = /* @__PURE__ */ new Map();
  }
  getId(stylesheet) {
    return this.styleIDMap.get(stylesheet) ?? -1;
  }
  has(stylesheet) {
    return this.styleIDMap.has(stylesheet);
  }
  /**
   * @returns If the stylesheet is in the mirror, returns the id of the stylesheet. If not, return the new assigned id.
   */
  add(stylesheet, id) {
    if (this.has(stylesheet)) return this.getId(stylesheet);
    let newId;
    if (id === undefined) {
      newId = this.id++;
    } else newId = id;
    this.styleIDMap.set(stylesheet, newId);
    this.idStyleMap.set(newId, stylesheet);
    return newId;
  }
  getStyle(id) {
    return this.idStyleMap.get(id) || null;
  }
  reset() {
    this.styleIDMap = /* @__PURE__ */ new WeakMap();
    this.idStyleMap = /* @__PURE__ */ new Map();
    this.id = 1;
  }
  generateId() {
    return this.id++;
  }
}
function getShadowHost(n2) {
  let shadowHost = null;
  if (n2.getRootNode?.()?.nodeType === Node.DOCUMENT_FRAGMENT_NODE && n2.getRootNode().host)
    shadowHost = n2.getRootNode().host;
  return shadowHost;
}
function getRootShadowHost(n2) {
  let rootShadowHost = n2;
  let shadowHost;
  while (shadowHost = getShadowHost(rootShadowHost))
    rootShadowHost = shadowHost;
  return rootShadowHost;
}
function shadowHostInDom(n2) {
  const doc = n2.ownerDocument;
  if (!doc) return false;
  const shadowHost = getRootShadowHost(n2);
  return doc.contains(shadowHost);
}
function inDom(n2) {
  const doc = n2.ownerDocument;
  if (!doc) return false;
  return doc.contains(n2) || shadowHostInDom(n2);
}
const esm_cachedImplementations = {};
function getImplementation(name) {
  const cached = esm_cachedImplementations[name];
  if (cached) {
    return cached;
  }
  const document2 = window.document;
  let impl = window[name];
  if (document2 && typeof document2.createElement === "function") {
    try {
      const sandbox = document2.createElement("iframe");
      sandbox.hidden = true;
      document2.head.appendChild(sandbox);
      const contentWindow = sandbox.contentWindow;
      if (contentWindow && contentWindow[name]) {
        impl = // eslint-disable-next-line @typescript-eslint/unbound-method
        contentWindow[name];
      }
      document2.head.removeChild(sandbox);
    } catch (e2) {
    }
  }
  return esm_cachedImplementations[name] = impl.bind(
    window
  );
}
function onRequestAnimationFrame(...rest) {
  return getImplementation("requestAnimationFrame")(...rest);
}
function setTimeout$1(...rest) {
  return getImplementation("setTimeout")(...rest);
}
function clearTimeout$2(...rest) {
  return getImplementation("clearTimeout")(...rest);
}
var EventType = /* @__PURE__ */ ((EventType2) => {
  EventType2[EventType2["DomContentLoaded"] = 0] = "DomContentLoaded";
  EventType2[EventType2["Load"] = 1] = "Load";
  EventType2[EventType2["FullSnapshot"] = 2] = "FullSnapshot";
  EventType2[EventType2["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
  EventType2[EventType2["Meta"] = 4] = "Meta";
  EventType2[EventType2["Custom"] = 5] = "Custom";
  EventType2[EventType2["Plugin"] = 6] = "Plugin";
  return EventType2;
})(EventType || {});
var IncrementalSource = /* @__PURE__ */ ((IncrementalSource2) => {
  IncrementalSource2[IncrementalSource2["Mutation"] = 0] = "Mutation";
  IncrementalSource2[IncrementalSource2["MouseMove"] = 1] = "MouseMove";
  IncrementalSource2[IncrementalSource2["MouseInteraction"] = 2] = "MouseInteraction";
  IncrementalSource2[IncrementalSource2["Scroll"] = 3] = "Scroll";
  IncrementalSource2[IncrementalSource2["ViewportResize"] = 4] = "ViewportResize";
  IncrementalSource2[IncrementalSource2["Input"] = 5] = "Input";
  IncrementalSource2[IncrementalSource2["TouchMove"] = 6] = "TouchMove";
  IncrementalSource2[IncrementalSource2["MediaInteraction"] = 7] = "MediaInteraction";
  IncrementalSource2[IncrementalSource2["StyleSheetRule"] = 8] = "StyleSheetRule";
  IncrementalSource2[IncrementalSource2["CanvasMutation"] = 9] = "CanvasMutation";
  IncrementalSource2[IncrementalSource2["Font"] = 10] = "Font";
  IncrementalSource2[IncrementalSource2["Log"] = 11] = "Log";
  IncrementalSource2[IncrementalSource2["Drag"] = 12] = "Drag";
  IncrementalSource2[IncrementalSource2["StyleDeclaration"] = 13] = "StyleDeclaration";
  IncrementalSource2[IncrementalSource2["Selection"] = 14] = "Selection";
  IncrementalSource2[IncrementalSource2["AdoptedStyleSheet"] = 15] = "AdoptedStyleSheet";
  IncrementalSource2[IncrementalSource2["CustomElement"] = 16] = "CustomElement";
  return IncrementalSource2;
})(IncrementalSource || {});
var MouseInteractions = /* @__PURE__ */ ((MouseInteractions2) => {
  MouseInteractions2[MouseInteractions2["MouseUp"] = 0] = "MouseUp";
  MouseInteractions2[MouseInteractions2["MouseDown"] = 1] = "MouseDown";
  MouseInteractions2[MouseInteractions2["Click"] = 2] = "Click";
  MouseInteractions2[MouseInteractions2["ContextMenu"] = 3] = "ContextMenu";
  MouseInteractions2[MouseInteractions2["DblClick"] = 4] = "DblClick";
  MouseInteractions2[MouseInteractions2["Focus"] = 5] = "Focus";
  MouseInteractions2[MouseInteractions2["Blur"] = 6] = "Blur";
  MouseInteractions2[MouseInteractions2["TouchStart"] = 7] = "TouchStart";
  MouseInteractions2[MouseInteractions2["TouchMove_Departed"] = 8] = "TouchMove_Departed";
  MouseInteractions2[MouseInteractions2["TouchEnd"] = 9] = "TouchEnd";
  MouseInteractions2[MouseInteractions2["TouchCancel"] = 10] = "TouchCancel";
  return MouseInteractions2;
})(MouseInteractions || {});
var PointerTypes = /* @__PURE__ */ ((PointerTypes2) => {
  PointerTypes2[PointerTypes2["Mouse"] = 0] = "Mouse";
  PointerTypes2[PointerTypes2["Pen"] = 1] = "Pen";
  PointerTypes2[PointerTypes2["Touch"] = 2] = "Touch";
  return PointerTypes2;
})(PointerTypes || {});
var MediaInteractions = /* @__PURE__ */ ((MediaInteractions2) => {
  MediaInteractions2[MediaInteractions2["Play"] = 0] = "Play";
  MediaInteractions2[MediaInteractions2["Pause"] = 1] = "Pause";
  MediaInteractions2[MediaInteractions2["Seeked"] = 2] = "Seeked";
  MediaInteractions2[MediaInteractions2["VolumeChange"] = 3] = "VolumeChange";
  MediaInteractions2[MediaInteractions2["RateChange"] = 4] = "RateChange";
  return MediaInteractions2;
})(MediaInteractions || {});
function getIFrameContentDocument(iframe) {
  try {
    return iframe.contentDocument;
  } catch (e2) {
  }
}
function getIFrameContentWindow(iframe) {
  try {
    return iframe.contentWindow;
  } catch (e2) {
  }
}
function isNodeInLinkedList(n2) {
  return "__ln" in n2;
}
class DoubleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  get(position) {
    if (position >= this.length) {
      throw new Error("Position outside of list range");
    }
    let current = this.head;
    for (let index = 0; index < position; index++) {
      current = current?.next || null;
    }
    return current;
  }
  addNode(n2) {
    const node = {
      value: n2,
      previous: null,
      next: null
    };
    n2.__ln = node;
    if (n2.previousSibling && isNodeInLinkedList(n2.previousSibling)) {
      const current = n2.previousSibling.__ln.next;
      node.next = current;
      node.previous = n2.previousSibling.__ln;
      n2.previousSibling.__ln.next = node;
      if (current) {
        current.previous = node;
      }
    } else if (n2.nextSibling && isNodeInLinkedList(n2.nextSibling) && n2.nextSibling.__ln.previous) {
      const current = n2.nextSibling.__ln.previous;
      node.previous = current;
      node.next = n2.nextSibling.__ln;
      n2.nextSibling.__ln.previous = node;
      if (current) {
        current.next = node;
      }
    } else {
      if (this.head) {
        this.head.previous = node;
      }
      node.next = this.head;
      this.head = node;
    }
    if (node.next === null) {
      this.tail = node;
    }
    this.length++;
  }
  removeNode(n2) {
    const current = n2.__ln;
    if (!this.head) {
      return;
    }
    if (!current.previous) {
      this.head = current.next;
      if (this.head) {
        this.head.previous = null;
      } else {
        this.tail = null;
      }
    } else {
      current.previous.next = current.next;
      if (current.next) {
        current.next.previous = current.previous;
      } else {
        this.tail = current.previous;
      }
    }
    if (n2.__ln) {
      delete n2.__ln;
    }
    this.length--;
  }
}
const moveKey = (id, parentId) => `${id}@${parentId}`;
class MutationBuffer {
  constructor() {
    this.frozen = false;
    this.locked = false;
    this.texts = [];
    this.attributes = [];
    this.attributeMap = /* @__PURE__ */ new WeakMap();
    this.removes = [];
    this.mapRemoves = [];
    this.movedMap = {};
    this.addedSet = /* @__PURE__ */ new Set();
    this.movedSet = /* @__PURE__ */ new Set();
    this.droppedSet = /* @__PURE__ */ new Set();
    this.processMutations = (mutations) => {
      mutations.forEach(this.processMutation);
      this.emit();
    };
    this.emit = () => {
      if (this.frozen || this.locked) {
        return;
      }
      const adds = [];
      const addedIds = /* @__PURE__ */ new Set();
      const addList = new DoubleLinkedList();
      const getNextId = (n2) => {
        let ns = n2;
        let nextId = IGNORED_NODE;
        while (nextId === IGNORED_NODE) {
          ns = ns && ns.nextSibling;
          nextId = ns && this.mirror.getId(ns);
        }
        return nextId;
      };
      const pushAdd = (n2) => {
        if (!n2.parentNode || !inDom(n2)) {
          return;
        }
        const parentId = isShadowRoot(n2.parentNode) ? this.mirror.getId(getShadowHost(n2)) : this.mirror.getId(n2.parentNode);
        const nextId = getNextId(n2);
        if (parentId === -1 || nextId === -1) {
          return addList.addNode(n2);
        }
        const sn = serializeNodeWithId(n2, {
          doc: this.doc,
          mirror: this.mirror,
          blockClass: this.blockClass,
          blockSelector: this.blockSelector,
          maskAllText: this.maskAllText,
          unblockSelector: this.unblockSelector,
          maskTextClass: this.maskTextClass,
          unmaskTextClass: this.unmaskTextClass,
          maskTextSelector: this.maskTextSelector,
          unmaskTextSelector: this.unmaskTextSelector,
          skipChild: true,
          newlyAddedElement: true,
          inlineStylesheet: this.inlineStylesheet,
          maskInputOptions: this.maskInputOptions,
          maskAttributeFn: this.maskAttributeFn,
          maskTextFn: this.maskTextFn,
          maskInputFn: this.maskInputFn,
          slimDOMOptions: this.slimDOMOptions,
          dataURLOptions: this.dataURLOptions,
          recordCanvas: this.recordCanvas,
          inlineImages: this.inlineImages,
          onSerialize: (currentN) => {
            if (isSerializedIframe(currentN, this.mirror) && !isBlocked(
              currentN,
              this.blockClass,
              this.blockSelector,
              this.unblockSelector,
              false
            )) {
              this.iframeManager.addIframe(currentN);
            }
            if (isSerializedStylesheet(currentN, this.mirror)) {
              this.stylesheetManager.trackLinkElement(
                currentN
              );
            }
            if (hasShadowRoot(n2)) {
              this.shadowDomManager.addShadowRoot(n2.shadowRoot, this.doc);
            }
          },
          onIframeLoad: (iframe, childSn) => {
            if (isBlocked(
              iframe,
              this.blockClass,
              this.blockSelector,
              this.unblockSelector,
              false
            )) {
              return;
            }
            this.iframeManager.attachIframe(iframe, childSn);
            if (iframe.contentWindow) {
              this.canvasManager.addWindow(iframe.contentWindow);
            }
            this.shadowDomManager.observeAttachShadow(iframe);
          },
          onStylesheetLoad: (link, childSn) => {
            this.stylesheetManager.attachLinkElement(link, childSn);
          }
        });
        if (sn) {
          adds.push({
            parentId,
            nextId,
            node: sn
          });
          addedIds.add(sn.id);
        }
      };
      while (this.mapRemoves.length) {
        this.mirror.removeNodeFromMap(this.mapRemoves.shift());
      }
      for (const n2 of this.movedSet) {
        if (isParentRemoved(this.removes, n2, this.mirror) && !this.movedSet.has(n2.parentNode)) {
          continue;
        }
        pushAdd(n2);
      }
      for (const n2 of this.addedSet) {
        if (!isAncestorInSet(this.droppedSet, n2) && !isParentRemoved(this.removes, n2, this.mirror)) {
          pushAdd(n2);
        } else if (isAncestorInSet(this.movedSet, n2)) {
          pushAdd(n2);
        } else {
          this.droppedSet.add(n2);
        }
      }
      let candidate = null;
      while (addList.length) {
        let node = null;
        if (candidate) {
          const parentId = this.mirror.getId(candidate.value.parentNode);
          const nextId = getNextId(candidate.value);
          if (parentId !== -1 && nextId !== -1) {
            node = candidate;
          }
        }
        if (!node) {
          let tailNode = addList.tail;
          while (tailNode) {
            const _node = tailNode;
            tailNode = tailNode.previous;
            if (_node) {
              const parentId = this.mirror.getId(_node.value.parentNode);
              const nextId = getNextId(_node.value);
              if (nextId === -1) continue;
              else if (parentId !== -1) {
                node = _node;
                break;
              } else {
                const unhandledNode = _node.value;
                if (unhandledNode.parentNode && unhandledNode.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const shadowHost = unhandledNode.parentNode.host;
                  const parentId2 = this.mirror.getId(shadowHost);
                  if (parentId2 !== -1) {
                    node = _node;
                    break;
                  }
                }
              }
            }
          }
        }
        if (!node) {
          while (addList.head) {
            addList.removeNode(addList.head.value);
          }
          break;
        }
        candidate = node.previous;
        addList.removeNode(node.value);
        pushAdd(node.value);
      }
      const payload = {
        texts: this.texts.map((text) => ({
          id: this.mirror.getId(text.node),
          value: text.value
        })).filter((text) => !addedIds.has(text.id)).filter((text) => this.mirror.has(text.id)),
        attributes: this.attributes.map((attribute) => {
          const { attributes } = attribute;
          if (typeof attributes.style === "string") {
            const diffAsStr = JSON.stringify(attribute.styleDiff);
            const unchangedAsStr = JSON.stringify(attribute._unchangedStyles);
            if (diffAsStr.length < attributes.style.length) {
              if ((diffAsStr + unchangedAsStr).split("var(").length === attributes.style.split("var(").length) {
                attributes.style = attribute.styleDiff;
              }
            }
          }
          return {
            id: this.mirror.getId(attribute.node),
            attributes
          };
        }).filter((attribute) => !addedIds.has(attribute.id)).filter((attribute) => this.mirror.has(attribute.id)),
        removes: this.removes,
        adds
      };
      if (!payload.texts.length && !payload.attributes.length && !payload.removes.length && !payload.adds.length) {
        return;
      }
      this.texts = [];
      this.attributes = [];
      this.attributeMap = /* @__PURE__ */ new WeakMap();
      this.removes = [];
      this.addedSet = /* @__PURE__ */ new Set();
      this.movedSet = /* @__PURE__ */ new Set();
      this.droppedSet = /* @__PURE__ */ new Set();
      this.movedMap = {};
      this.mutationCb(payload);
    };
    this.processMutation = (m) => {
      if (isIgnored(m.target, this.mirror)) {
        return;
      }
      switch (m.type) {
        case "characterData": {
          const value = m.target.textContent;
          if (!isBlocked(
            m.target,
            this.blockClass,
            this.blockSelector,
            this.unblockSelector,
            false
          ) && value !== m.oldValue) {
            this.texts.push({
              value: needMaskingText(
                m.target,
                this.maskTextClass,
                this.maskTextSelector,
                this.unmaskTextClass,
                this.unmaskTextSelector,
                this.maskAllText
              ) && value ? this.maskTextFn ? this.maskTextFn(value, closestElementOfNode(m.target)) : value.replace(/[\S]/g, "*") : value,
              node: m.target
            });
          }
          break;
        }
        case "attributes": {
          const target = m.target;
          let attributeName = m.attributeName;
          let value = m.target.getAttribute(attributeName);
          if (attributeName === "value") {
            const type = getInputType(target);
            const tagName = target.tagName;
            value = getInputValue(target, tagName, type);
            const isInputMasked = shouldMaskInput({
              maskInputOptions: this.maskInputOptions,
              tagName,
              type
            });
            const forceMask = needMaskingText(
              m.target,
              this.maskTextClass,
              this.maskTextSelector,
              this.unmaskTextClass,
              this.unmaskTextSelector,
              isInputMasked
            );
            value = maskInputValue({
              isMasked: forceMask,
              element: target,
              value,
              maskInputFn: this.maskInputFn
            });
          }
          if (isBlocked(
            m.target,
            this.blockClass,
            this.blockSelector,
            this.unblockSelector,
            false
          ) || value === m.oldValue) {
            return;
          }
          let item = this.attributeMap.get(m.target);
          if (target.tagName === "IFRAME" && attributeName === "src" && !this.keepIframeSrcFn(value)) {
            const iframeDoc = getIFrameContentDocument(
              target
            );
            if (!iframeDoc) {
              attributeName = "rr_src";
            } else {
              return;
            }
          }
          if (!item) {
            item = {
              node: m.target,
              attributes: {},
              styleDiff: {},
              _unchangedStyles: {}
            };
            this.attributes.push(item);
            this.attributeMap.set(m.target, item);
          }
          if (attributeName === "type" && target.tagName === "INPUT" && (m.oldValue || "").toLowerCase() === "password") {
            target.setAttribute("data-rr-is-password", "true");
          }
          if (!ignoreAttribute(target.tagName, attributeName)) {
            item.attributes[attributeName] = transformAttribute(
              this.doc,
              toLowerCase(target.tagName),
              toLowerCase(attributeName),
              value,
              target,
              this.maskAttributeFn
            );
            if (attributeName === "style") {
              if (!this.unattachedDoc) {
                try {
                  this.unattachedDoc = document.implementation.createHTMLDocument();
                } catch (e2) {
                  this.unattachedDoc = this.doc;
                }
              }
              const old = this.unattachedDoc.createElement("span");
              if (m.oldValue) {
                old.setAttribute("style", m.oldValue);
              }
              for (const pname of Array.from(target.style)) {
                const newValue = target.style.getPropertyValue(pname);
                const newPriority = target.style.getPropertyPriority(pname);
                if (newValue !== old.style.getPropertyValue(pname) || newPriority !== old.style.getPropertyPriority(pname)) {
                  if (newPriority === "") {
                    item.styleDiff[pname] = newValue;
                  } else {
                    item.styleDiff[pname] = [newValue, newPriority];
                  }
                } else {
                  item._unchangedStyles[pname] = [newValue, newPriority];
                }
              }
              for (const pname of Array.from(old.style)) {
                if (target.style.getPropertyValue(pname) === "") {
                  item.styleDiff[pname] = false;
                }
              }
            }
          }
          break;
        }
        case "childList": {
          if (isBlocked(
            m.target,
            this.blockClass,
            this.blockSelector,
            this.unblockSelector,
            true
          )) {
            return;
          }
          m.addedNodes.forEach((n2) => this.genAdds(n2, m.target));
          m.removedNodes.forEach((n2) => {
            const nodeId = this.mirror.getId(n2);
            const parentId = isShadowRoot(m.target) ? this.mirror.getId(m.target.host) : this.mirror.getId(m.target);
            if (isBlocked(
              m.target,
              this.blockClass,
              this.blockSelector,
              this.unblockSelector,
              false
            ) || isIgnored(n2, this.mirror) || !isSerialized(n2, this.mirror)) {
              return;
            }
            if (this.addedSet.has(n2)) {
              deepDelete(this.addedSet, n2);
              this.droppedSet.add(n2);
            } else if (this.addedSet.has(m.target) && nodeId === -1) ;
            else if (isAncestorRemoved(m.target, this.mirror)) ;
            else if (this.movedSet.has(n2) && this.movedMap[moveKey(nodeId, parentId)]) {
              deepDelete(this.movedSet, n2);
            } else {
              this.removes.push({
                parentId,
                id: nodeId,
                isShadow: isShadowRoot(m.target) && isNativeShadowDom(m.target) ? true : undefined
              });
            }
            this.mapRemoves.push(n2);
          });
          break;
        }
      }
    };
    this.genAdds = (n2, target) => {
      if (this.processedNodeManager.inOtherBuffer(n2, this)) return;
      if (this.addedSet.has(n2) || this.movedSet.has(n2)) return;
      if (this.mirror.hasNode(n2)) {
        if (isIgnored(n2, this.mirror)) {
          return;
        }
        this.movedSet.add(n2);
        let targetId = null;
        if (target && this.mirror.hasNode(target)) {
          targetId = this.mirror.getId(target);
        }
        if (targetId && targetId !== -1) {
          this.movedMap[moveKey(this.mirror.getId(n2), targetId)] = true;
        }
      } else {
        this.addedSet.add(n2);
        this.droppedSet.delete(n2);
      }
      if (!isBlocked(
        n2,
        this.blockClass,
        this.blockSelector,
        this.unblockSelector,
        false
      )) {
        n2.childNodes.forEach((childN) => this.genAdds(childN));
        if (hasShadowRoot(n2)) {
          n2.shadowRoot.childNodes.forEach((childN) => {
            this.processedNodeManager.add(childN, this);
            this.genAdds(childN, n2);
          });
        }
      }
    };
  }
  init(options) {
    [
      "mutationCb",
      "blockClass",
      "blockSelector",
      "unblockSelector",
      "maskAllText",
      "maskTextClass",
      "unmaskTextClass",
      "maskTextSelector",
      "unmaskTextSelector",
      "inlineStylesheet",
      "maskInputOptions",
      "maskAttributeFn",
      "maskTextFn",
      "maskInputFn",
      "keepIframeSrcFn",
      "recordCanvas",
      "inlineImages",
      "slimDOMOptions",
      "dataURLOptions",
      "doc",
      "mirror",
      "iframeManager",
      "stylesheetManager",
      "shadowDomManager",
      "canvasManager",
      "processedNodeManager"
    ].forEach((key) => {
      this[key] = options[key];
    });
  }
  freeze() {
    this.frozen = true;
    this.canvasManager.freeze();
  }
  unfreeze() {
    this.frozen = false;
    this.canvasManager.unfreeze();
    this.emit();
  }
  isFrozen() {
    return this.frozen;
  }
  lock() {
    this.locked = true;
    this.canvasManager.lock();
  }
  unlock() {
    this.locked = false;
    this.canvasManager.unlock();
    this.emit();
  }
  reset() {
    this.shadowDomManager.reset();
    this.canvasManager.reset();
  }
}
function deepDelete(addsSet, n2) {
  addsSet.delete(n2);
  n2.childNodes.forEach((childN) => deepDelete(addsSet, childN));
}
function isParentRemoved(removes, n2, mirror2) {
  if (removes.length === 0) return false;
  return _isParentRemoved(removes, n2, mirror2);
}
function _isParentRemoved(removes, n2, mirror2) {
  let node = n2.parentNode;
  while (node) {
    const parentId = mirror2.getId(node);
    if (removes.some((r2) => r2.id === parentId)) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
function isAncestorInSet(set, n2) {
  if (set.size === 0) return false;
  return _isAncestorInSet(set, n2);
}
function _isAncestorInSet(set, n2) {
  const { parentNode } = n2;
  if (!parentNode) {
    return false;
  }
  if (set.has(parentNode)) {
    return true;
  }
  return _isAncestorInSet(set, parentNode);
}
let errorHandler;
function registerErrorHandler(handler) {
  errorHandler = handler;
}
function unregisterErrorHandler() {
  errorHandler = undefined;
}
const callbackWrapper = (cb) => {
  if (!errorHandler) {
    return cb;
  }
  const rrwebWrapped = (...rest) => {
    try {
      return cb(...rest);
    } catch (error) {
      if (errorHandler && errorHandler(error) === true) {
        return () => {
        };
      }
      throw error;
    }
  };
  return rrwebWrapped;
};
const mutationBuffers = [];
function esm_getEventTarget(event) {
  try {
    if ("composedPath" in event) {
      const path = event.composedPath();
      if (path.length) {
        return path[0];
      }
    } else if ("path" in event && event.path.length) {
      return event.path[0];
    }
  } catch {
  }
  return event && event.target;
}
function initMutationObserver(options, rootEl) {
  const mutationBuffer = new MutationBuffer();
  mutationBuffers.push(mutationBuffer);
  mutationBuffer.init(options);
  let mutationObserverCtor = window.MutationObserver || /**
  * Some websites may disable MutationObserver by removing it from the window object.
  * If someone is using rrweb to build a browser extention or things like it, they
  * could not change the website's code but can have an opportunity to inject some
  * code before the website executing its JS logic.
  * Then they can do this to store the native MutationObserver:
  * window.__rrMutationObserver = MutationObserver
  */
  window.__rrMutationObserver;
  const angularZoneSymbol = window?.Zone?.__symbol__?.("MutationObserver");
  if (angularZoneSymbol && window[angularZoneSymbol]) {
    mutationObserverCtor = window[angularZoneSymbol];
  }
  const observer = new mutationObserverCtor(
    callbackWrapper((mutations) => {
      if (options.onMutation && options.onMutation(mutations) === false) {
        return;
      }
      mutationBuffer.processMutations.bind(mutationBuffer)(mutations);
    })
  );
  observer.observe(rootEl, {
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true
  });
  return observer;
}
function initMoveObserver({
  mousemoveCb,
  sampling,
  doc,
  mirror: mirror2
}) {
  if (sampling.mousemove === false) {
    return () => {
    };
  }
  const threshold = typeof sampling.mousemove === "number" ? sampling.mousemove : 50;
  const callbackThreshold = typeof sampling.mousemoveCallback === "number" ? sampling.mousemoveCallback : 500;
  let positions = [];
  let timeBaseline;
  const wrappedCb = throttle$1(
    callbackWrapper(
      (source) => {
        const totalOffset = Date.now() - timeBaseline;
        mousemoveCb(
          positions.map((p) => {
            p.timeOffset -= totalOffset;
            return p;
          }),
          source
        );
        positions = [];
        timeBaseline = null;
      }
    ),
    callbackThreshold
  );
  const updatePosition = callbackWrapper(
    throttle$1(
      callbackWrapper((evt) => {
        const target = esm_getEventTarget(evt);
        const { clientX, clientY } = legacy_isTouchEvent(evt) ? evt.changedTouches[0] : evt;
        if (!timeBaseline) {
          timeBaseline = nowTimestamp();
        }
        positions.push({
          x: clientX,
          y: clientY,
          id: mirror2.getId(target),
          timeOffset: nowTimestamp() - timeBaseline
        });
        wrappedCb(
          typeof DragEvent !== "undefined" && evt instanceof DragEvent ? IncrementalSource.Drag : evt instanceof MouseEvent ? IncrementalSource.MouseMove : IncrementalSource.TouchMove
        );
      }),
      threshold,
      {
        trailing: false
      }
    )
  );
  const handlers = [
    on("mousemove", updatePosition, doc),
    on("touchmove", updatePosition, doc),
    on("drag", updatePosition, doc)
  ];
  return callbackWrapper(() => {
    handlers.forEach((h) => h());
  });
}
function initMouseInteractionObserver({
  mouseInteractionCb,
  doc,
  mirror: mirror2,
  blockClass,
  blockSelector,
  unblockSelector,
  sampling
}) {
  if (sampling.mouseInteraction === false) {
    return () => {
    };
  }
  const disableMap = sampling.mouseInteraction === true || sampling.mouseInteraction === undefined ? {} : sampling.mouseInteraction;
  const handlers = [];
  let currentPointerType = null;
  const getHandler = (eventKey) => {
    return (event) => {
      const target = esm_getEventTarget(event);
      if (isBlocked(target, blockClass, blockSelector, unblockSelector, true)) {
        return;
      }
      let pointerType = null;
      let thisEventKey = eventKey;
      if ("pointerType" in event) {
        switch (event.pointerType) {
          case "mouse":
            pointerType = PointerTypes.Mouse;
            break;
          case "touch":
            pointerType = PointerTypes.Touch;
            break;
          case "pen":
            pointerType = PointerTypes.Pen;
            break;
        }
        if (pointerType === PointerTypes.Touch) {
          if (MouseInteractions[eventKey] === MouseInteractions.MouseDown) {
            thisEventKey = "TouchStart";
          } else if (MouseInteractions[eventKey] === MouseInteractions.MouseUp) {
            thisEventKey = "TouchEnd";
          }
        } else if (pointerType === PointerTypes.Pen) ;
      } else if (legacy_isTouchEvent(event)) {
        pointerType = PointerTypes.Touch;
      }
      if (pointerType !== null) {
        currentPointerType = pointerType;
        if (thisEventKey.startsWith("Touch") && pointerType === PointerTypes.Touch || thisEventKey.startsWith("Mouse") && pointerType === PointerTypes.Mouse) {
          pointerType = null;
        }
      } else if (MouseInteractions[eventKey] === MouseInteractions.Click) {
        pointerType = currentPointerType;
        currentPointerType = null;
      }
      const e2 = legacy_isTouchEvent(event) ? event.changedTouches[0] : event;
      if (!e2) {
        return;
      }
      const id = mirror2.getId(target);
      const { clientX, clientY } = e2;
      callbackWrapper(mouseInteractionCb)({
        type: MouseInteractions[thisEventKey],
        id,
        x: clientX,
        y: clientY,
        ...pointerType !== null && { pointerType }
      });
    };
  };
  Object.keys(MouseInteractions).filter(
    (key) => Number.isNaN(Number(key)) && !key.endsWith("_Departed") && disableMap[key] !== false
  ).forEach((eventKey) => {
    let eventName = toLowerCase(eventKey);
    const handler = getHandler(eventKey);
    if (window.PointerEvent) {
      switch (MouseInteractions[eventKey]) {
        case MouseInteractions.MouseDown:
        case MouseInteractions.MouseUp:
          eventName = eventName.replace(
            "mouse",
            "pointer"
          );
          break;
        case MouseInteractions.TouchStart:
        case MouseInteractions.TouchEnd:
          return;
      }
    }
    handlers.push(on(eventName, handler, doc));
  });
  return callbackWrapper(() => {
    handlers.forEach((h) => h());
  });
}
function initScrollObserver({
  scrollCb,
  doc,
  mirror: mirror2,
  blockClass,
  blockSelector,
  unblockSelector,
  sampling
}) {
  const updatePosition = callbackWrapper(
    throttle$1(
      callbackWrapper((evt) => {
        const target = esm_getEventTarget(evt);
        if (!target || isBlocked(
          target,
          blockClass,
          blockSelector,
          unblockSelector,
          true
        )) {
          return;
        }
        const id = mirror2.getId(target);
        if (target === doc && doc.defaultView) {
          const scrollLeftTop = getWindowScroll(doc.defaultView);
          scrollCb({
            id,
            x: scrollLeftTop.left,
            y: scrollLeftTop.top
          });
        } else {
          scrollCb({
            id,
            x: target.scrollLeft,
            y: target.scrollTop
          });
        }
      }),
      sampling.scroll || 100
    )
  );
  return on("scroll", updatePosition, doc);
}
function initViewportResizeObserver({ viewportResizeCb }, { win }) {
  let lastH = -1;
  let lastW = -1;
  const updateDimension = callbackWrapper(
    throttle$1(
      callbackWrapper(() => {
        const height = getWindowHeight();
        const width = getWindowWidth();
        if (lastH !== height || lastW !== width) {
          viewportResizeCb({
            width: Number(width),
            height: Number(height)
          });
          lastH = height;
          lastW = width;
        }
      }),
      200
    )
  );
  return on("resize", updateDimension, win);
}
const INPUT_TAGS = ["INPUT", "TEXTAREA", "SELECT"];
const lastInputValueMap = /* @__PURE__ */ new WeakMap();
function initInputObserver({
  inputCb,
  doc,
  mirror: mirror2,
  blockClass,
  blockSelector,
  unblockSelector,
  ignoreClass,
  ignoreSelector,
  maskInputOptions,
  maskInputFn,
  sampling,
  userTriggeredOnInput,
  maskTextClass,
  unmaskTextClass,
  maskTextSelector,
  unmaskTextSelector
}) {
  function eventHandler(event) {
    let target = esm_getEventTarget(event);
    const userTriggered = event.isTrusted;
    const tagName = target && toUpperCase(target.tagName);
    if (tagName === "OPTION") target = target.parentElement;
    if (!target || !tagName || INPUT_TAGS.indexOf(tagName) < 0 || isBlocked(
      target,
      blockClass,
      blockSelector,
      unblockSelector,
      true
    )) {
      return;
    }
    const el = target;
    if (el.classList.contains(ignoreClass) || ignoreSelector && el.matches(ignoreSelector)) {
      return;
    }
    const type = getInputType(target);
    let text = getInputValue(el, tagName, type);
    let isChecked = false;
    const isInputMasked = shouldMaskInput({
      maskInputOptions,
      tagName,
      type
    });
    const forceMask = needMaskingText(
      target,
      maskTextClass,
      maskTextSelector,
      unmaskTextClass,
      unmaskTextSelector,
      isInputMasked
    );
    if (type === "radio" || type === "checkbox") {
      isChecked = target.checked;
    }
    text = maskInputValue({
      isMasked: forceMask,
      element: target,
      value: text,
      maskInputFn
    });
    cbWithDedup(
      target,
      userTriggeredOnInput ? { text, isChecked, userTriggered } : { text, isChecked }
    );
    const name = target.name;
    if (type === "radio" && name && isChecked) {
      doc.querySelectorAll(`input[type="radio"][name="${name}"]`).forEach((el2) => {
        if (el2 !== target) {
          const text2 = maskInputValue({
            // share mask behavior of `target`
            isMasked: forceMask,
            element: el2,
            value: getInputValue(el2, tagName, type),
            maskInputFn
          });
          cbWithDedup(
            el2,
            userTriggeredOnInput ? { text: text2, isChecked: !isChecked, userTriggered: false } : { text: text2, isChecked: !isChecked }
          );
        }
      });
    }
  }
  function cbWithDedup(target, v2) {
    const lastInputValue = lastInputValueMap.get(target);
    if (!lastInputValue || lastInputValue.text !== v2.text || lastInputValue.isChecked !== v2.isChecked) {
      lastInputValueMap.set(target, v2);
      const id = mirror2.getId(target);
      callbackWrapper(inputCb)({
        ...v2,
        id
      });
    }
  }
  const events = sampling.input === "last" ? ["change"] : ["input", "change"];
  const handlers = events.map(
    (eventName) => on(eventName, callbackWrapper(eventHandler), doc)
  );
  const currentWindow = doc.defaultView;
  if (!currentWindow) {
    return () => {
      handlers.forEach((h) => h());
    };
  }
  const propertyDescriptor = currentWindow.Object.getOwnPropertyDescriptor(
    currentWindow.HTMLInputElement.prototype,
    "value"
  );
  const hookProperties = [
    [currentWindow.HTMLInputElement.prototype, "value"],
    [currentWindow.HTMLInputElement.prototype, "checked"],
    [currentWindow.HTMLSelectElement.prototype, "value"],
    [currentWindow.HTMLTextAreaElement.prototype, "value"],
    // Some UI library use selectedIndex to set select value
    [currentWindow.HTMLSelectElement.prototype, "selectedIndex"],
    [currentWindow.HTMLOptionElement.prototype, "selected"]
  ];
  if (propertyDescriptor && propertyDescriptor.set) {
    handlers.push(
      ...hookProperties.map(
        (p) => hookSetter(
          p[0],
          p[1],
          {
            set() {
              callbackWrapper(eventHandler)({
                target: this,
                isTrusted: false
                // userTriggered to false as this could well be programmatic
              });
            }
          },
          false,
          currentWindow
        )
      )
    );
  }
  return callbackWrapper(() => {
    handlers.forEach((h) => h());
  });
}
function getNestedCSSRulePositions(rule) {
  const positions = [];
  function recurse(childRule, pos) {
    if (hasNestedCSSRule("CSSGroupingRule") && childRule.parentRule instanceof CSSGroupingRule || hasNestedCSSRule("CSSMediaRule") && childRule.parentRule instanceof CSSMediaRule || hasNestedCSSRule("CSSSupportsRule") && childRule.parentRule instanceof CSSSupportsRule || hasNestedCSSRule("CSSConditionRule") && childRule.parentRule instanceof CSSConditionRule) {
      const rules2 = Array.from(
        childRule.parentRule.cssRules
      );
      const index = rules2.indexOf(childRule);
      pos.unshift(index);
    } else if (childRule.parentStyleSheet) {
      const rules2 = Array.from(childRule.parentStyleSheet.cssRules);
      const index = rules2.indexOf(childRule);
      pos.unshift(index);
    }
    return pos;
  }
  return recurse(rule, positions);
}
function getIdAndStyleId(sheet, mirror2, styleMirror) {
  let id, styleId;
  if (!sheet) return {};
  if (sheet.ownerNode) id = mirror2.getId(sheet.ownerNode);
  else styleId = styleMirror.getId(sheet);
  return {
    styleId,
    id
  };
}
function initStyleSheetObserver({ styleSheetRuleCb, mirror: mirror2, stylesheetManager }, { win }) {
  if (!win.CSSStyleSheet || !win.CSSStyleSheet.prototype) {
    return () => {
    };
  }
  const insertRule = win.CSSStyleSheet.prototype.insertRule;
  win.CSSStyleSheet.prototype.insertRule = new Proxy(insertRule, {
    apply: callbackWrapper(
      (target, thisArg, argumentsList) => {
        const [rule, index] = argumentsList;
        const { id, styleId } = getIdAndStyleId(
          thisArg,
          mirror2,
          stylesheetManager.styleMirror
        );
        if (id && id !== -1 || styleId && styleId !== -1) {
          styleSheetRuleCb({
            id,
            styleId,
            adds: [{ rule, index }]
          });
        }
        return target.apply(thisArg, argumentsList);
      }
    )
  });
  const deleteRule = win.CSSStyleSheet.prototype.deleteRule;
  win.CSSStyleSheet.prototype.deleteRule = new Proxy(deleteRule, {
    apply: callbackWrapper(
      (target, thisArg, argumentsList) => {
        const [index] = argumentsList;
        const { id, styleId } = getIdAndStyleId(
          thisArg,
          mirror2,
          stylesheetManager.styleMirror
        );
        if (id && id !== -1 || styleId && styleId !== -1) {
          styleSheetRuleCb({
            id,
            styleId,
            removes: [{ index }]
          });
        }
        return target.apply(thisArg, argumentsList);
      }
    )
  });
  let replace;
  if (win.CSSStyleSheet.prototype.replace) {
    replace = win.CSSStyleSheet.prototype.replace;
    win.CSSStyleSheet.prototype.replace = new Proxy(replace, {
      apply: callbackWrapper(
        (target, thisArg, argumentsList) => {
          const [text] = argumentsList;
          const { id, styleId } = getIdAndStyleId(
            thisArg,
            mirror2,
            stylesheetManager.styleMirror
          );
          if (id && id !== -1 || styleId && styleId !== -1) {
            styleSheetRuleCb({
              id,
              styleId,
              replace: text
            });
          }
          return target.apply(thisArg, argumentsList);
        }
      )
    });
  }
  let replaceSync;
  if (win.CSSStyleSheet.prototype.replaceSync) {
    replaceSync = win.CSSStyleSheet.prototype.replaceSync;
    win.CSSStyleSheet.prototype.replaceSync = new Proxy(replaceSync, {
      apply: callbackWrapper(
        (target, thisArg, argumentsList) => {
          const [text] = argumentsList;
          const { id, styleId } = getIdAndStyleId(
            thisArg,
            mirror2,
            stylesheetManager.styleMirror
          );
          if (id && id !== -1 || styleId && styleId !== -1) {
            styleSheetRuleCb({
              id,
              styleId,
              replaceSync: text
            });
          }
          return target.apply(thisArg, argumentsList);
        }
      )
    });
  }
  const supportedNestedCSSRuleTypes = {};
  if (canMonkeyPatchNestedCSSRule("CSSGroupingRule")) {
    supportedNestedCSSRuleTypes.CSSGroupingRule = win.CSSGroupingRule;
  } else {
    if (canMonkeyPatchNestedCSSRule("CSSMediaRule")) {
      supportedNestedCSSRuleTypes.CSSMediaRule = win.CSSMediaRule;
    }
    if (canMonkeyPatchNestedCSSRule("CSSConditionRule")) {
      supportedNestedCSSRuleTypes.CSSConditionRule = win.CSSConditionRule;
    }
    if (canMonkeyPatchNestedCSSRule("CSSSupportsRule")) {
      supportedNestedCSSRuleTypes.CSSSupportsRule = win.CSSSupportsRule;
    }
  }
  const unmodifiedFunctions = {};
  Object.entries(supportedNestedCSSRuleTypes).forEach(([typeKey, type]) => {
    unmodifiedFunctions[typeKey] = {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      insertRule: type.prototype.insertRule,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      deleteRule: type.prototype.deleteRule
    };
    type.prototype.insertRule = new Proxy(
      unmodifiedFunctions[typeKey].insertRule,
      {
        apply: callbackWrapper(
          (target, thisArg, argumentsList) => {
            const [rule, index] = argumentsList;
            const { id, styleId } = getIdAndStyleId(
              thisArg.parentStyleSheet,
              mirror2,
              stylesheetManager.styleMirror
            );
            if (id && id !== -1 || styleId && styleId !== -1) {
              styleSheetRuleCb({
                id,
                styleId,
                adds: [
                  {
                    rule,
                    index: [
                      ...getNestedCSSRulePositions(thisArg),
                      index || 0
                      // defaults to 0
                    ]
                  }
                ]
              });
            }
            return target.apply(thisArg, argumentsList);
          }
        )
      }
    );
    type.prototype.deleteRule = new Proxy(
      unmodifiedFunctions[typeKey].deleteRule,
      {
        apply: callbackWrapper(
          (target, thisArg, argumentsList) => {
            const [index] = argumentsList;
            const { id, styleId } = getIdAndStyleId(
              thisArg.parentStyleSheet,
              mirror2,
              stylesheetManager.styleMirror
            );
            if (id && id !== -1 || styleId && styleId !== -1) {
              styleSheetRuleCb({
                id,
                styleId,
                removes: [
                  { index: [...getNestedCSSRulePositions(thisArg), index] }
                ]
              });
            }
            return target.apply(thisArg, argumentsList);
          }
        )
      }
    );
  });
  return callbackWrapper(() => {
    win.CSSStyleSheet.prototype.insertRule = insertRule;
    win.CSSStyleSheet.prototype.deleteRule = deleteRule;
    replace && (win.CSSStyleSheet.prototype.replace = replace);
    replaceSync && (win.CSSStyleSheet.prototype.replaceSync = replaceSync);
    Object.entries(supportedNestedCSSRuleTypes).forEach(([typeKey, type]) => {
      type.prototype.insertRule = unmodifiedFunctions[typeKey].insertRule;
      type.prototype.deleteRule = unmodifiedFunctions[typeKey].deleteRule;
    });
  });
}
function initAdoptedStyleSheetObserver({
  mirror: mirror2,
  stylesheetManager
}, host) {
  let hostId = null;
  if (host.nodeName === "#document") hostId = mirror2.getId(host);
  else hostId = mirror2.getId(host.host);
  const patchTarget = host.nodeName === "#document" ? host.defaultView?.Document : host.ownerDocument?.defaultView?.ShadowRoot;
  const originalPropertyDescriptor = patchTarget?.prototype ? Object.getOwnPropertyDescriptor(
    patchTarget?.prototype,
    "adoptedStyleSheets"
  ) : undefined;
  if (hostId === null || hostId === -1 || !patchTarget || !originalPropertyDescriptor)
    return () => {
    };
  Object.defineProperty(host, "adoptedStyleSheets", {
    configurable: originalPropertyDescriptor.configurable,
    enumerable: originalPropertyDescriptor.enumerable,
    get() {
      return originalPropertyDescriptor.get?.call(this);
    },
    set(sheets) {
      const result = originalPropertyDescriptor.set?.call(this, sheets);
      if (hostId !== null && hostId !== -1) {
        try {
          stylesheetManager.adoptStyleSheets(sheets, hostId);
        } catch (e2) {
        }
      }
      return result;
    }
  });
  return callbackWrapper(() => {
    Object.defineProperty(host, "adoptedStyleSheets", {
      configurable: originalPropertyDescriptor.configurable,
      enumerable: originalPropertyDescriptor.enumerable,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      get: originalPropertyDescriptor.get,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      set: originalPropertyDescriptor.set
    });
  });
}
function initStyleDeclarationObserver({
  styleDeclarationCb,
  mirror: mirror2,
  ignoreCSSAttributes,
  stylesheetManager
}, { win }) {
  const setProperty = win.CSSStyleDeclaration.prototype.setProperty;
  win.CSSStyleDeclaration.prototype.setProperty = new Proxy(setProperty, {
    apply: callbackWrapper(
      (target, thisArg, argumentsList) => {
        const [property, value, priority] = argumentsList;
        if (ignoreCSSAttributes.has(property)) {
          return setProperty.apply(thisArg, [property, value, priority]);
        }
        const { id, styleId } = getIdAndStyleId(
          thisArg.parentRule?.parentStyleSheet,
          mirror2,
          stylesheetManager.styleMirror
        );
        if (id && id !== -1 || styleId && styleId !== -1) {
          styleDeclarationCb({
            id,
            styleId,
            set: {
              property,
              value,
              priority
            },
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            index: getNestedCSSRulePositions(thisArg.parentRule)
          });
        }
        return target.apply(thisArg, argumentsList);
      }
    )
  });
  const removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
  win.CSSStyleDeclaration.prototype.removeProperty = new Proxy(removeProperty, {
    apply: callbackWrapper(
      (target, thisArg, argumentsList) => {
        const [property] = argumentsList;
        if (ignoreCSSAttributes.has(property)) {
          return removeProperty.apply(thisArg, [property]);
        }
        const { id, styleId } = getIdAndStyleId(
          thisArg.parentRule?.parentStyleSheet,
          mirror2,
          stylesheetManager.styleMirror
        );
        if (id && id !== -1 || styleId && styleId !== -1) {
          styleDeclarationCb({
            id,
            styleId,
            remove: {
              property
            },
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            index: getNestedCSSRulePositions(thisArg.parentRule)
          });
        }
        return target.apply(thisArg, argumentsList);
      }
    )
  });
  return callbackWrapper(() => {
    win.CSSStyleDeclaration.prototype.setProperty = setProperty;
    win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
  });
}
function initMediaInteractionObserver({
  mediaInteractionCb,
  blockClass,
  blockSelector,
  unblockSelector,
  mirror: mirror2,
  sampling,
  doc
}) {
  const handler = callbackWrapper(
    (type) => throttle$1(
      callbackWrapper((event) => {
        const target = esm_getEventTarget(event);
        if (!target || isBlocked(
          target,
          blockClass,
          blockSelector,
          unblockSelector,
          true
        )) {
          return;
        }
        const { currentTime, volume, muted, playbackRate } = target;
        mediaInteractionCb({
          type,
          id: mirror2.getId(target),
          currentTime,
          volume,
          muted,
          playbackRate
        });
      }),
      sampling.media || 500
    )
  );
  const handlers = [
    on("play", handler(MediaInteractions.Play), doc),
    on("pause", handler(MediaInteractions.Pause), doc),
    on("seeked", handler(MediaInteractions.Seeked), doc),
    on("volumechange", handler(MediaInteractions.VolumeChange), doc),
    on("ratechange", handler(MediaInteractions.RateChange), doc)
  ];
  return callbackWrapper(() => {
    handlers.forEach((h) => h());
  });
}
function initFontObserver({ fontCb, doc }) {
  const win = doc.defaultView;
  if (!win) {
    return () => {
    };
  }
  const handlers = [];
  const fontMap = /* @__PURE__ */ new WeakMap();
  const originalFontFace = win.FontFace;
  win.FontFace = function FontFace2(family, source, descriptors) {
    const fontFace = new originalFontFace(family, source, descriptors);
    fontMap.set(fontFace, {
      family,
      buffer: typeof source !== "string",
      descriptors,
      fontSource: typeof source === "string" ? source : JSON.stringify(Array.from(new Uint8Array(source)))
    });
    return fontFace;
  };
  const restoreHandler = patch(
    doc.fonts,
    "add",
    function(original) {
      return function(fontFace) {
        setTimeout$1(
          callbackWrapper(() => {
            const p = fontMap.get(fontFace);
            if (p) {
              fontCb(p);
              fontMap.delete(fontFace);
            }
          }),
          0
        );
        return original.apply(this, [fontFace]);
      };
    }
  );
  handlers.push(() => {
    win.FontFace = originalFontFace;
  });
  handlers.push(restoreHandler);
  return callbackWrapper(() => {
    handlers.forEach((h) => h());
  });
}
function initSelectionObserver(param) {
  const {
    doc,
    mirror: mirror2,
    blockClass,
    blockSelector,
    unblockSelector,
    selectionCb
  } = param;
  let collapsed = true;
  const updateSelection = callbackWrapper(() => {
    const selection = doc.getSelection();
    if (!selection || collapsed && selection?.isCollapsed) return;
    collapsed = selection.isCollapsed || false;
    const ranges = [];
    const count = selection.rangeCount || 0;
    for (let i2 = 0; i2 < count; i2++) {
      const range = selection.getRangeAt(i2);
      const { startContainer, startOffset, endContainer, endOffset } = range;
      const blocked = isBlocked(
        startContainer,
        blockClass,
        blockSelector,
        unblockSelector,
        true
      ) || isBlocked(
        endContainer,
        blockClass,
        blockSelector,
        unblockSelector,
        true
      );
      if (blocked) continue;
      ranges.push({
        start: mirror2.getId(startContainer),
        startOffset,
        end: mirror2.getId(endContainer),
        endOffset
      });
    }
    selectionCb({ ranges });
  });
  updateSelection();
  return on("selectionchange", updateSelection);
}
function initCustomElementObserver({
  doc,
  customElementCb
}) {
  const win = doc.defaultView;
  if (!win || !win.customElements) return () => {
  };
  const restoreHandler = patch(
    win.customElements,
    "define",
    function(original) {
      return function(name, constructor, options) {
        try {
          customElementCb({
            define: {
              name
            }
          });
        } catch (e2) {
        }
        return original.apply(this, [name, constructor, options]);
      };
    }
  );
  return restoreHandler;
}
function initObservers(o2, _hooks = {}) {
  const currentWindow = o2.doc.defaultView;
  if (!currentWindow) {
    return () => {
    };
  }
  let mutationObserver;
  if (o2.recordDOM) {
    mutationObserver = initMutationObserver(o2, o2.doc);
  }
  const mousemoveHandler = initMoveObserver(o2);
  const mouseInteractionHandler = initMouseInteractionObserver(o2);
  const scrollHandler = initScrollObserver(o2);
  const viewportResizeHandler = initViewportResizeObserver(o2, {
    win: currentWindow
  });
  const inputHandler = initInputObserver(o2);
  const mediaInteractionHandler = initMediaInteractionObserver(o2);
  let styleSheetObserver = () => {
  };
  let adoptedStyleSheetObserver = () => {
  };
  let styleDeclarationObserver = () => {
  };
  let fontObserver = () => {
  };
  if (o2.recordDOM) {
    styleSheetObserver = initStyleSheetObserver(o2, { win: currentWindow });
    adoptedStyleSheetObserver = initAdoptedStyleSheetObserver(o2, o2.doc);
    styleDeclarationObserver = initStyleDeclarationObserver(o2, {
      win: currentWindow
    });
    if (o2.collectFonts) {
      fontObserver = initFontObserver(o2);
    }
  }
  const selectionObserver = initSelectionObserver(o2);
  const customElementObserver = initCustomElementObserver(o2);
  const pluginHandlers = [];
  for (const plugin of o2.plugins) {
    pluginHandlers.push(
      plugin.observer(plugin.callback, currentWindow, plugin.options)
    );
  }
  return callbackWrapper(() => {
    mutationBuffers.forEach((b) => b.reset());
    mutationObserver?.disconnect();
    mousemoveHandler();
    mouseInteractionHandler();
    scrollHandler();
    viewportResizeHandler();
    inputHandler();
    mediaInteractionHandler();
    styleSheetObserver();
    adoptedStyleSheetObserver();
    styleDeclarationObserver();
    fontObserver();
    selectionObserver();
    customElementObserver();
    pluginHandlers.forEach((h) => h());
  });
}
function hasNestedCSSRule(prop) {
  return typeof window[prop] !== "undefined";
}
function canMonkeyPatchNestedCSSRule(prop) {
  return Boolean(
    typeof window[prop] !== "undefined" && // Note: Generally, this check _shouldn't_ be necessary
    // However, in some scenarios (e.g. jsdom) this can sometimes fail, so we check for it here
    window[prop].prototype && "insertRule" in window[prop].prototype && "deleteRule" in window[prop].prototype
  );
}
class CrossOriginIframeMirror {
  constructor(generateIdFn) {
    this.generateIdFn = generateIdFn;
    this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap();
    this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
  }
  getId(iframe, remoteId, idToRemoteMap, remoteToIdMap) {
    const idToRemoteIdMap = idToRemoteMap || this.getIdToRemoteIdMap(iframe);
    const remoteIdToIdMap = remoteToIdMap || this.getRemoteIdToIdMap(iframe);
    let id = idToRemoteIdMap.get(remoteId);
    if (!id) {
      id = this.generateIdFn();
      idToRemoteIdMap.set(remoteId, id);
      remoteIdToIdMap.set(id, remoteId);
    }
    return id;
  }
  getIds(iframe, remoteId) {
    const idToRemoteIdMap = this.getIdToRemoteIdMap(iframe);
    const remoteIdToIdMap = this.getRemoteIdToIdMap(iframe);
    return remoteId.map(
      (id) => this.getId(iframe, id, idToRemoteIdMap, remoteIdToIdMap)
    );
  }
  getRemoteId(iframe, id, map) {
    const remoteIdToIdMap = map || this.getRemoteIdToIdMap(iframe);
    if (typeof id !== "number") return id;
    const remoteId = remoteIdToIdMap.get(id);
    if (!remoteId) return -1;
    return remoteId;
  }
  getRemoteIds(iframe, ids) {
    const remoteIdToIdMap = this.getRemoteIdToIdMap(iframe);
    return ids.map((id) => this.getRemoteId(iframe, id, remoteIdToIdMap));
  }
  reset(iframe) {
    if (!iframe) {
      this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap();
      this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
      return;
    }
    this.iframeIdToRemoteIdMap.delete(iframe);
    this.iframeRemoteIdToIdMap.delete(iframe);
  }
  getIdToRemoteIdMap(iframe) {
    let idToRemoteIdMap = this.iframeIdToRemoteIdMap.get(iframe);
    if (!idToRemoteIdMap) {
      idToRemoteIdMap = /* @__PURE__ */ new Map();
      this.iframeIdToRemoteIdMap.set(iframe, idToRemoteIdMap);
    }
    return idToRemoteIdMap;
  }
  getRemoteIdToIdMap(iframe) {
    let remoteIdToIdMap = this.iframeRemoteIdToIdMap.get(iframe);
    if (!remoteIdToIdMap) {
      remoteIdToIdMap = /* @__PURE__ */ new Map();
      this.iframeRemoteIdToIdMap.set(iframe, remoteIdToIdMap);
    }
    return remoteIdToIdMap;
  }
}
class IframeManagerNoop {
  constructor() {
    this.crossOriginIframeMirror = new CrossOriginIframeMirror(genId);
    this.crossOriginIframeRootIdMap = /* @__PURE__ */ new WeakMap();
  }
  addIframe() {
  }
  addLoadListener() {
  }
  attachIframe() {
  }
}
class IframeManager {
  constructor(options) {
    this.iframes = /* @__PURE__ */ new WeakMap();
    this.crossOriginIframeMap = /* @__PURE__ */ new WeakMap();
    this.crossOriginIframeMirror = new CrossOriginIframeMirror(genId);
    this.crossOriginIframeRootIdMap = /* @__PURE__ */ new WeakMap();
    this.mutationCb = options.mutationCb;
    this.wrappedEmit = options.wrappedEmit;
    this.stylesheetManager = options.stylesheetManager;
    this.recordCrossOriginIframes = options.recordCrossOriginIframes;
    this.crossOriginIframeStyleMirror = new CrossOriginIframeMirror(
      this.stylesheetManager.styleMirror.generateId.bind(
        this.stylesheetManager.styleMirror
      )
    );
    this.mirror = options.mirror;
    if (this.recordCrossOriginIframes) {
      window.addEventListener("message", this.handleMessage.bind(this));
    }
  }
  addIframe(iframeEl) {
    this.iframes.set(iframeEl, true);
    if (iframeEl.contentWindow)
      this.crossOriginIframeMap.set(iframeEl.contentWindow, iframeEl);
  }
  addLoadListener(cb) {
    this.loadListener = cb;
  }
  attachIframe(iframeEl, childSn) {
    this.mutationCb({
      adds: [
        {
          parentId: this.mirror.getId(iframeEl),
          nextId: null,
          node: childSn
        }
      ],
      removes: [],
      texts: [],
      attributes: [],
      isAttachIframe: true
    });
    if (this.recordCrossOriginIframes)
      iframeEl.contentWindow?.addEventListener(
        "message",
        this.handleMessage.bind(this)
      );
    this.loadListener?.(iframeEl);
    const iframeDoc = getIFrameContentDocument(iframeEl);
    if (iframeDoc && iframeDoc.adoptedStyleSheets && iframeDoc.adoptedStyleSheets.length > 0)
      this.stylesheetManager.adoptStyleSheets(
        iframeDoc.adoptedStyleSheets,
        this.mirror.getId(iframeDoc)
      );
  }
  handleMessage(message) {
    const crossOriginMessageEvent = message;
    if (crossOriginMessageEvent.data.type !== "rrweb" || // To filter out the rrweb messages which are forwarded by some sites.
    crossOriginMessageEvent.origin !== crossOriginMessageEvent.data.origin)
      return;
    const iframeSourceWindow = message.source;
    if (!iframeSourceWindow) return;
    const iframeEl = this.crossOriginIframeMap.get(message.source);
    if (!iframeEl) return;
    const transformedEvent = this.transformCrossOriginEvent(
      iframeEl,
      crossOriginMessageEvent.data.event
    );
    if (transformedEvent)
      this.wrappedEmit(
        transformedEvent,
        crossOriginMessageEvent.data.isCheckout
      );
  }
  transformCrossOriginEvent(iframeEl, e2) {
    switch (e2.type) {
      case EventType.FullSnapshot: {
        this.crossOriginIframeMirror.reset(iframeEl);
        this.crossOriginIframeStyleMirror.reset(iframeEl);
        this.replaceIdOnNode(e2.data.node, iframeEl);
        const rootId = e2.data.node.id;
        this.crossOriginIframeRootIdMap.set(iframeEl, rootId);
        this.patchRootIdOnNode(e2.data.node, rootId);
        return {
          timestamp: e2.timestamp,
          type: EventType.IncrementalSnapshot,
          data: {
            source: IncrementalSource.Mutation,
            adds: [
              {
                parentId: this.mirror.getId(iframeEl),
                nextId: null,
                node: e2.data.node
              }
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: true
          }
        };
      }
      case EventType.Meta:
      case EventType.Load:
      case EventType.DomContentLoaded: {
        return false;
      }
      case EventType.Plugin: {
        return e2;
      }
      case EventType.Custom: {
        this.replaceIds(
          e2.data.payload,
          iframeEl,
          ["id", "parentId", "previousId", "nextId"]
        );
        return e2;
      }
      case EventType.IncrementalSnapshot: {
        switch (e2.data.source) {
          case IncrementalSource.Mutation: {
            e2.data.adds.forEach((n2) => {
              this.replaceIds(n2, iframeEl, [
                "parentId",
                "nextId",
                "previousId"
              ]);
              this.replaceIdOnNode(n2.node, iframeEl);
              const rootId = this.crossOriginIframeRootIdMap.get(iframeEl);
              rootId && this.patchRootIdOnNode(n2.node, rootId);
            });
            e2.data.removes.forEach((n2) => {
              this.replaceIds(n2, iframeEl, ["parentId", "id"]);
            });
            e2.data.attributes.forEach((n2) => {
              this.replaceIds(n2, iframeEl, ["id"]);
            });
            e2.data.texts.forEach((n2) => {
              this.replaceIds(n2, iframeEl, ["id"]);
            });
            return e2;
          }
          case IncrementalSource.Drag:
          case IncrementalSource.TouchMove:
          case IncrementalSource.MouseMove: {
            e2.data.positions.forEach((p) => {
              this.replaceIds(p, iframeEl, ["id"]);
            });
            return e2;
          }
          case IncrementalSource.ViewportResize: {
            return false;
          }
          case IncrementalSource.MediaInteraction:
          case IncrementalSource.MouseInteraction:
          case IncrementalSource.Scroll:
          case IncrementalSource.CanvasMutation:
          case IncrementalSource.Input: {
            this.replaceIds(e2.data, iframeEl, ["id"]);
            return e2;
          }
          case IncrementalSource.StyleSheetRule:
          case IncrementalSource.StyleDeclaration: {
            this.replaceIds(e2.data, iframeEl, ["id"]);
            this.replaceStyleIds(e2.data, iframeEl, ["styleId"]);
            return e2;
          }
          case IncrementalSource.Font: {
            return e2;
          }
          case IncrementalSource.Selection: {
            e2.data.ranges.forEach((range) => {
              this.replaceIds(range, iframeEl, ["start", "end"]);
            });
            return e2;
          }
          case IncrementalSource.AdoptedStyleSheet: {
            this.replaceIds(e2.data, iframeEl, ["id"]);
            this.replaceStyleIds(e2.data, iframeEl, ["styleIds"]);
            e2.data.styles?.forEach((style) => {
              this.replaceStyleIds(style, iframeEl, ["styleId"]);
            });
            return e2;
          }
        }
      }
    }
    return false;
  }
  replace(iframeMirror, obj, iframeEl, keys) {
    for (const key of keys) {
      if (!Array.isArray(obj[key]) && typeof obj[key] !== "number") continue;
      if (Array.isArray(obj[key])) {
        obj[key] = iframeMirror.getIds(
          iframeEl,
          obj[key]
        );
      } else {
        obj[key] = iframeMirror.getId(iframeEl, obj[key]);
      }
    }
    return obj;
  }
  replaceIds(obj, iframeEl, keys) {
    return this.replace(this.crossOriginIframeMirror, obj, iframeEl, keys);
  }
  replaceStyleIds(obj, iframeEl, keys) {
    return this.replace(this.crossOriginIframeStyleMirror, obj, iframeEl, keys);
  }
  replaceIdOnNode(node, iframeEl) {
    this.replaceIds(node, iframeEl, ["id", "rootId"]);
    if ("childNodes" in node) {
      node.childNodes.forEach((child) => {
        this.replaceIdOnNode(child, iframeEl);
      });
    }
  }
  patchRootIdOnNode(node, rootId) {
    if (node.type !== NodeType$2.Document && !node.rootId) node.rootId = rootId;
    if ("childNodes" in node) {
      node.childNodes.forEach((child) => {
        this.patchRootIdOnNode(child, rootId);
      });
    }
  }
}
class ShadowDomManagerNoop {
  init() {
  }
  addShadowRoot() {
  }
  observeAttachShadow() {
  }
  reset() {
  }
}
class ShadowDomManager {
  constructor(options) {
    this.shadowDoms = /* @__PURE__ */ new WeakSet();
    this.restoreHandlers = [];
    this.mutationCb = options.mutationCb;
    this.scrollCb = options.scrollCb;
    this.bypassOptions = options.bypassOptions;
    this.mirror = options.mirror;
    this.init();
  }
  init() {
    this.reset();
    this.patchAttachShadow(Element, document);
  }
  addShadowRoot(shadowRoot, doc) {
    if (!isNativeShadowDom(shadowRoot)) return;
    if (this.shadowDoms.has(shadowRoot)) return;
    this.shadowDoms.add(shadowRoot);
    this.bypassOptions.canvasManager.addShadowRoot(shadowRoot);
    const observer = initMutationObserver(
      {
        ...this.bypassOptions,
        doc,
        mutationCb: this.mutationCb,
        mirror: this.mirror,
        shadowDomManager: this
      },
      shadowRoot
    );
    this.restoreHandlers.push(() => observer.disconnect());
    this.restoreHandlers.push(
      initScrollObserver({
        ...this.bypassOptions,
        scrollCb: this.scrollCb,
        // https://gist.github.com/praveenpuglia/0832da687ed5a5d7a0907046c9ef1813
        // scroll is not allowed to pass the boundary, so we need to listen the shadow document
        doc: shadowRoot,
        mirror: this.mirror
      })
    );
    setTimeout$1(() => {
      if (shadowRoot.adoptedStyleSheets && shadowRoot.adoptedStyleSheets.length > 0)
        this.bypassOptions.stylesheetManager.adoptStyleSheets(
          shadowRoot.adoptedStyleSheets,
          this.mirror.getId(shadowRoot.host)
        );
      this.restoreHandlers.push(
        initAdoptedStyleSheetObserver(
          {
            mirror: this.mirror,
            stylesheetManager: this.bypassOptions.stylesheetManager
          },
          shadowRoot
        )
      );
    }, 0);
  }
  /**
   * Monkey patch 'attachShadow' of an IFrameElement to observe newly added shadow doms.
   */
  observeAttachShadow(iframeElement) {
    const iframeDoc = getIFrameContentDocument(iframeElement);
    const iframeWindow = getIFrameContentWindow(iframeElement);
    if (!iframeDoc || !iframeWindow) return;
    this.patchAttachShadow(
      iframeWindow.Element,
      iframeDoc
    );
  }
  /**
   * Patch 'attachShadow' to observe newly added shadow doms.
   */
  patchAttachShadow(element, doc) {
    const manager = this;
    this.restoreHandlers.push(
      patch(
        element.prototype,
        "attachShadow",
        function(original) {
          return function(option) {
            const shadowRoot = original.call(this, option);
            if (this.shadowRoot && inDom(this))
              manager.addShadowRoot(this.shadowRoot, doc);
            return shadowRoot;
          };
        }
      )
    );
  }
  reset() {
    this.restoreHandlers.forEach((handler) => {
      try {
        handler();
      } catch (e2) {
      }
    });
    this.restoreHandlers = [];
    this.shadowDoms = /* @__PURE__ */ new WeakSet();
    this.bypassOptions.canvasManager.resetShadowRoots();
  }
}
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var i$1 = 0; i$1 < chars.length; i$1++) {
  lookup[chars.charCodeAt(i$1)] = i$1;
}
class CanvasManagerNoop {
  reset() {
  }
  freeze() {
  }
  unfreeze() {
  }
  lock() {
  }
  unlock() {
  }
  snapshot() {
  }
  addWindow() {
  }
  addShadowRoot() {
  }
  resetShadowRoots() {
  }
}
class StylesheetManager {
  constructor(options) {
    this.trackedLinkElements = /* @__PURE__ */ new WeakSet();
    this.styleMirror = new StyleSheetMirror();
    this.mutationCb = options.mutationCb;
    this.adoptedStyleSheetCb = options.adoptedStyleSheetCb;
  }
  attachLinkElement(linkEl, childSn) {
    if ("_cssText" in childSn.attributes)
      this.mutationCb({
        adds: [],
        removes: [],
        texts: [],
        attributes: [
          {
            id: childSn.id,
            attributes: childSn.attributes
          }
        ]
      });
    this.trackLinkElement(linkEl);
  }
  trackLinkElement(linkEl) {
    if (this.trackedLinkElements.has(linkEl)) return;
    this.trackedLinkElements.add(linkEl);
    this.trackStylesheetInLinkElement(linkEl);
  }
  adoptStyleSheets(sheets, hostId) {
    if (sheets.length === 0) return;
    const adoptedStyleSheetData = {
      id: hostId,
      styleIds: []
    };
    const styles = [];
    for (const sheet of sheets) {
      let styleId;
      if (!this.styleMirror.has(sheet)) {
        styleId = this.styleMirror.add(sheet);
        styles.push({
          styleId,
          rules: Array.from(sheet.rules || CSSRule, (r2, index) => ({
            rule: stringifyRule(r2),
            index
          }))
        });
      } else styleId = this.styleMirror.getId(sheet);
      adoptedStyleSheetData.styleIds.push(styleId);
    }
    if (styles.length > 0) adoptedStyleSheetData.styles = styles;
    this.adoptedStyleSheetCb(adoptedStyleSheetData);
  }
  reset() {
    this.styleMirror.reset();
    this.trackedLinkElements = /* @__PURE__ */ new WeakSet();
  }
  // TODO: take snapshot on stylesheet reload by applying event listener
  trackStylesheetInLinkElement(_linkEl) {
  }
}
class ProcessedNodeManager {
  constructor() {
    this.nodeMap = /* @__PURE__ */ new WeakMap();
    this.active = false;
  }
  inOtherBuffer(node, thisBuffer) {
    const buffers = this.nodeMap.get(node);
    return buffers && Array.from(buffers).some((buffer) => buffer !== thisBuffer);
  }
  add(node, buffer) {
    if (!this.active) {
      this.active = true;
      onRequestAnimationFrame(() => {
        this.nodeMap = /* @__PURE__ */ new WeakMap();
        this.active = false;
      });
    }
    this.nodeMap.set(node, (this.nodeMap.get(node) || /* @__PURE__ */ new Set()).add(buffer));
  }
  destroy() {
  }
}
let wrappedEmit;
let _takeFullSnapshot;
try {
  if (Array.from([1], (x) => x * 2)[0] !== 2) {
    const cleanFrame = document.createElement("iframe");
    document.body.appendChild(cleanFrame);
    Array.from = cleanFrame.contentWindow?.Array.from || Array.from;
    document.body.removeChild(cleanFrame);
  }
} catch (err) {
  console.debug("Unable to override Array.from", err);
}
const mirror = createMirror$2();
function record(options = {}) {
  const {
    emit,
    checkoutEveryNms,
    checkoutEveryNth,
    blockClass = "rr-block",
    blockSelector = null,
    unblockSelector = null,
    ignoreClass = "rr-ignore",
    ignoreSelector = null,
    maskAllText = false,
    maskTextClass = "rr-mask",
    unmaskTextClass = null,
    maskTextSelector = null,
    unmaskTextSelector = null,
    inlineStylesheet = true,
    maskAllInputs,
    maskInputOptions: _maskInputOptions,
    slimDOMOptions: _slimDOMOptions,
    maskAttributeFn,
    maskInputFn,
    maskTextFn,
    maxCanvasSize = null,
    packFn,
    sampling = {},
    dataURLOptions = {},
    mousemoveWait,
    recordDOM = true,
    recordCanvas = false,
    recordCrossOriginIframes = false,
    recordAfter = options.recordAfter === "DOMContentLoaded" ? options.recordAfter : "load",
    userTriggeredOnInput = false,
    collectFonts = false,
    inlineImages = false,
    plugins,
    keepIframeSrcFn = () => false,
    ignoreCSSAttributes = /* @__PURE__ */ new Set([]),
    errorHandler: errorHandler2,
    onMutation,
    getCanvasManager
  } = options;
  registerErrorHandler(errorHandler2);
  const inEmittingFrame = recordCrossOriginIframes ? window.parent === window : true;
  let passEmitsToParent = false;
  if (!inEmittingFrame) {
    try {
      if (window.parent.document) {
        passEmitsToParent = false;
      }
    } catch (e2) {
      passEmitsToParent = true;
    }
  }
  if (inEmittingFrame && !emit) {
    throw new Error("emit function is required");
  }
  if (!inEmittingFrame && !passEmitsToParent) {
    return () => {
    };
  }
  if (mousemoveWait !== undefined && sampling.mousemove === undefined) {
    sampling.mousemove = mousemoveWait;
  }
  mirror.reset();
  const maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true,
    radio: true,
    checkbox: true
  } : _maskInputOptions !== undefined ? _maskInputOptions : {};
  const slimDOMOptions = _slimDOMOptions === true || _slimDOMOptions === "all" ? {
    script: true,
    comment: true,
    headFavicon: true,
    headWhitespace: true,
    headMetaSocial: true,
    headMetaRobots: true,
    headMetaHttpEquiv: true,
    headMetaVerification: true,
    // the following are off for slimDOMOptions === true,
    // as they destroy some (hidden) info:
    headMetaAuthorship: _slimDOMOptions === "all",
    headMetaDescKeywords: _slimDOMOptions === "all"
  } : _slimDOMOptions ? _slimDOMOptions : {};
  polyfill$1();
  let lastFullSnapshotEvent;
  let incrementalSnapshotCount = 0;
  const eventProcessor = (e2) => {
    for (const plugin of plugins || []) {
      if (plugin.eventProcessor) {
        e2 = plugin.eventProcessor(e2);
      }
    }
    if (packFn && // Disable packing events which will be emitted to parent frames.
    !passEmitsToParent) {
      e2 = packFn(e2);
    }
    return e2;
  };
  wrappedEmit = (r2, isCheckout) => {
    const e2 = r2;
    e2.timestamp = nowTimestamp();
    if (mutationBuffers[0]?.isFrozen() && e2.type !== EventType.FullSnapshot && !(e2.type === EventType.IncrementalSnapshot && e2.data.source === IncrementalSource.Mutation)) {
      mutationBuffers.forEach((buf) => buf.unfreeze());
    }
    if (inEmittingFrame) {
      emit?.(eventProcessor(e2), isCheckout);
    } else if (passEmitsToParent) {
      const message = {
        type: "rrweb",
        event: eventProcessor(e2),
        origin: window.location.origin,
        isCheckout
      };
      window.parent.postMessage(message, "*");
    }
    if (e2.type === EventType.FullSnapshot) {
      lastFullSnapshotEvent = e2;
      incrementalSnapshotCount = 0;
    } else if (e2.type === EventType.IncrementalSnapshot) {
      if (e2.data.source === IncrementalSource.Mutation && e2.data.isAttachIframe) {
        return;
      }
      incrementalSnapshotCount++;
      const exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
      const exceedTime = checkoutEveryNms && lastFullSnapshotEvent && e2.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;
      if (exceedCount || exceedTime) {
        takeFullSnapshot2(true);
      }
    }
  };
  const wrappedMutationEmit = (m) => {
    wrappedEmit({
      type: EventType.IncrementalSnapshot,
      data: {
        source: IncrementalSource.Mutation,
        ...m
      }
    });
  };
  const wrappedScrollEmit = (p) => wrappedEmit({
    type: EventType.IncrementalSnapshot,
    data: {
      source: IncrementalSource.Scroll,
      ...p
    }
  });
  const wrappedCanvasMutationEmit = (p) => wrappedEmit({
    type: EventType.IncrementalSnapshot,
    data: {
      source: IncrementalSource.CanvasMutation,
      ...p
    }
  });
  const wrappedAdoptedStyleSheetEmit = (a2) => wrappedEmit({
    type: EventType.IncrementalSnapshot,
    data: {
      source: IncrementalSource.AdoptedStyleSheet,
      ...a2
    }
  });
  const stylesheetManager = new StylesheetManager({
    mutationCb: wrappedMutationEmit,
    adoptedStyleSheetCb: wrappedAdoptedStyleSheetEmit
  });
  const iframeManager = typeof __RRWEB_EXCLUDE_IFRAME__ === "boolean" && __RRWEB_EXCLUDE_IFRAME__ ? new IframeManagerNoop() : new IframeManager({
    mirror,
    mutationCb: wrappedMutationEmit,
    stylesheetManager,
    recordCrossOriginIframes,
    wrappedEmit
  });
  for (const plugin of plugins || []) {
    if (plugin.getMirror)
      plugin.getMirror({
        nodeMirror: mirror,
        crossOriginIframeMirror: iframeManager.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: iframeManager.crossOriginIframeStyleMirror
      });
  }
  const processedNodeManager = new ProcessedNodeManager();
  const canvasManager = _getCanvasManager(
    getCanvasManager,
    {
      mirror,
      win: window,
      mutationCb: (p) => wrappedEmit({
        type: EventType.IncrementalSnapshot,
        data: {
          source: IncrementalSource.CanvasMutation,
          ...p
        }
      }),
      recordCanvas,
      blockClass,
      blockSelector,
      unblockSelector,
      maxCanvasSize,
      sampling: sampling["canvas"],
      dataURLOptions,
      errorHandler: errorHandler2
    }
  );
  const shadowDomManager = typeof __RRWEB_EXCLUDE_SHADOW_DOM__ === "boolean" && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new ShadowDomManagerNoop() : new ShadowDomManager({
    mutationCb: wrappedMutationEmit,
    scrollCb: wrappedScrollEmit,
    bypassOptions: {
      onMutation,
      blockClass,
      blockSelector,
      unblockSelector,
      maskAllText,
      maskTextClass,
      unmaskTextClass,
      maskTextSelector,
      unmaskTextSelector,
      inlineStylesheet,
      maskInputOptions,
      dataURLOptions,
      maskAttributeFn,
      maskTextFn,
      maskInputFn,
      recordCanvas,
      inlineImages,
      sampling,
      slimDOMOptions,
      iframeManager,
      stylesheetManager,
      canvasManager,
      keepIframeSrcFn,
      processedNodeManager
    },
    mirror
  });
  const takeFullSnapshot2 = (isCheckout = false) => {
    if (!recordDOM) {
      return;
    }
    wrappedEmit(
      {
        type: EventType.Meta,
        data: {
          href: window.location.href,
          width: getWindowWidth(),
          height: getWindowHeight()
        }
      },
      isCheckout
    );
    stylesheetManager.reset();
    shadowDomManager.init();
    mutationBuffers.forEach((buf) => buf.lock());
    const node = snapshot(document, {
      mirror,
      blockClass,
      blockSelector,
      unblockSelector,
      maskAllText,
      maskTextClass,
      unmaskTextClass,
      maskTextSelector,
      unmaskTextSelector,
      inlineStylesheet,
      maskAllInputs: maskInputOptions,
      maskAttributeFn,
      maskInputFn,
      maskTextFn,
      slimDOM: slimDOMOptions,
      dataURLOptions,
      recordCanvas,
      inlineImages,
      onSerialize: (n2) => {
        if (isSerializedIframe(n2, mirror)) {
          iframeManager.addIframe(n2);
        }
        if (isSerializedStylesheet(n2, mirror)) {
          stylesheetManager.trackLinkElement(n2);
        }
        if (hasShadowRoot(n2)) {
          shadowDomManager.addShadowRoot(n2.shadowRoot, document);
        }
      },
      onIframeLoad: (iframe, childSn) => {
        iframeManager.attachIframe(iframe, childSn);
        if (iframe.contentWindow) {
          canvasManager.addWindow(iframe.contentWindow);
        }
        shadowDomManager.observeAttachShadow(iframe);
      },
      onStylesheetLoad: (linkEl, childSn) => {
        stylesheetManager.attachLinkElement(linkEl, childSn);
      },
      keepIframeSrcFn
    });
    if (!node) {
      return console.warn("Failed to snapshot the document");
    }
    wrappedEmit({
      type: EventType.FullSnapshot,
      data: {
        node,
        initialOffset: getWindowScroll(window)
      }
    });
    mutationBuffers.forEach((buf) => buf.unlock());
    if (document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0)
      stylesheetManager.adoptStyleSheets(
        document.adoptedStyleSheets,
        mirror.getId(document)
      );
  };
  _takeFullSnapshot = takeFullSnapshot2;
  try {
    const handlers = [];
    const observe = (doc) => {
      return callbackWrapper(initObservers)(
        {
          onMutation,
          mutationCb: wrappedMutationEmit,
          mousemoveCb: (positions, source) => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: {
              source,
              positions
            }
          }),
          mouseInteractionCb: (d) => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: {
              source: IncrementalSource.MouseInteraction,
              ...d
            }
          }),
          scrollCb: wrappedScrollEmit,
          viewportResizeCb: (d) => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: {
              source: IncrementalSource.ViewportResize,
              ...d
            }
          }),
          inputCb: (v2) => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: {
              source: IncrementalSource.Input,
              ...v2
            }
          }),
          mediaInteractionCb: (p) => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: {
              source: IncrementalSource.MediaInteraction,
              ...p
            }
          }),
          styleSheetRuleCb: (r2) => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: {
              source: IncrementalSource.StyleSheetRule,
              ...r2
            }
          }),
          styleDeclarationCb: (r2) => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: {
              source: IncrementalSource.StyleDeclaration,
              ...r2
            }
          }),
          canvasMutationCb: wrappedCanvasMutationEmit,
          fontCb: (p) => wrappedEmit({
            type: EventType.IncrementalSnapshot,
            data: {
              source: IncrementalSource.Font,
              ...p
            }
          }),
          selectionCb: (p) => {
            wrappedEmit({
              type: EventType.IncrementalSnapshot,
              data: {
                source: IncrementalSource.Selection,
                ...p
              }
            });
          },
          customElementCb: (c2) => {
            wrappedEmit({
              type: EventType.IncrementalSnapshot,
              data: {
                source: IncrementalSource.CustomElement,
                ...c2
              }
            });
          },
          blockClass,
          ignoreClass,
          ignoreSelector,
          maskAllText,
          maskTextClass,
          unmaskTextClass,
          maskTextSelector,
          unmaskTextSelector,
          maskInputOptions,
          inlineStylesheet,
          sampling,
          recordDOM,
          recordCanvas,
          inlineImages,
          userTriggeredOnInput,
          collectFonts,
          doc,
          maskAttributeFn,
          maskInputFn,
          maskTextFn,
          keepIframeSrcFn,
          blockSelector,
          unblockSelector,
          slimDOMOptions,
          dataURLOptions,
          mirror,
          iframeManager,
          stylesheetManager,
          shadowDomManager,
          processedNodeManager,
          canvasManager,
          ignoreCSSAttributes,
          plugins: plugins?.filter((p) => p.observer)?.map((p) => ({
            observer: p.observer,
            options: p.options,
            callback: (payload) => wrappedEmit({
              type: EventType.Plugin,
              data: {
                plugin: p.name,
                payload
              }
            })
          })) || []
        },
        {}
      );
    };
    iframeManager.addLoadListener((iframeEl) => {
      try {
        handlers.push(observe(iframeEl.contentDocument));
      } catch (error) {
        console.warn(error);
      }
    });
    const init = () => {
      takeFullSnapshot2();
      handlers.push(observe(document));
    };
    if (document.readyState === "interactive" || document.readyState === "complete") {
      init();
    } else {
      handlers.push(
        on("DOMContentLoaded", () => {
          wrappedEmit({
            type: EventType.DomContentLoaded,
            data: {}
          });
          if (recordAfter === "DOMContentLoaded") init();
        })
      );
      handlers.push(
        on(
          "load",
          () => {
            wrappedEmit({
              type: EventType.Load,
              data: {}
            });
            if (recordAfter === "load") init();
          },
          window
        )
      );
    }
    return () => {
      handlers.forEach((h) => h());
      processedNodeManager.destroy();
      _takeFullSnapshot = void 0;
      unregisterErrorHandler();
    };
  } catch (error) {
    console.warn(error);
  }
}
function takeFullSnapshot(isCheckout) {
  if (!_takeFullSnapshot) {
    throw new Error("please take full snapshot after start recording");
  }
  _takeFullSnapshot(isCheckout);
}
record.mirror = mirror;
record.takeFullSnapshot = takeFullSnapshot;
function _getCanvasManager(getCanvasManagerFn, options) {
  try {
    return getCanvasManagerFn ? getCanvasManagerFn(options) : new CanvasManagerNoop();
  } catch {
    console.warn("Unable to initialize CanvasManager");
    return new CanvasManagerNoop();
  }
}
var n;
!function(t2) {
  t2[t2.NotStarted = 0] = "NotStarted", t2[t2.Running = 1] = "Running", t2[t2.Stopped = 2] = "Stopped";
}(n || (n = {}));

const ReplayEventTypeIncrementalSnapshot = 3;
const ReplayEventTypeCustom = 5;

/**
 * Converts a timestamp to ms, if it was in s, or keeps it as ms.
 */
function timestampToMs(timestamp) {
  const isMs = timestamp > 9999999999;
  return isMs ? timestamp : timestamp * 1000;
}

/**
 * Converts a timestamp to s, if it was in ms, or keeps it as s.
 */
function timestampToS(timestamp) {
  const isMs = timestamp > 9999999999;
  return isMs ? timestamp / 1000 : timestamp;
}

/**
 * Add a breadcrumb event to replay.
 */
function addBreadcrumbEvent(replay, breadcrumb) {
  if (breadcrumb.category === 'sentry.transaction') {
    return;
  }

  if (['ui.click', 'ui.input'].includes(breadcrumb.category )) {
    replay.triggerUserActivity();
  } else {
    replay.checkAndHandleExpiredSession();
  }

  replay.addUpdate(() => {
    // This should never reject
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    replay.throttledAddEvent({
      type: EventType.Custom,
      // TODO: We were converting from ms to seconds for breadcrumbs, spans,
      // but maybe we should just keep them as milliseconds
      timestamp: (breadcrumb.timestamp || 0) * 1000,
      data: {
        tag: 'breadcrumb',
        // normalize to max. 10 depth and 1_000 properties per object
        payload: (0,normalize/* normalize */.S8)(breadcrumb, 10, 1000),
      },
    });

    // Do not flush after console log messages
    return breadcrumb.category === 'console';
  });
}

const INTERACTIVE_SELECTOR = 'button,a';

/** Get the closest interactive parent element, or else return the given element. */
function getClosestInteractive(element) {
  const closestInteractive = element.closest(INTERACTIVE_SELECTOR);
  return closestInteractive || element;
}

/**
 * For clicks, we check if the target is inside of a button or link
 * If so, we use this as the target instead
 * This is useful because if you click on the image in <button><img></button>,
 * The target will be the image, not the button, which we don't want here
 */
function getClickTargetNode(event) {
  const target = getTargetNode(event);

  if (!target || !(target instanceof Element)) {
    return target;
  }

  return getClosestInteractive(target);
}

/** Get the event target node. */
function getTargetNode(event) {
  if (isEventWithTarget(event)) {
    return event.target ;
  }

  return event;
}

function isEventWithTarget(event) {
  return typeof event === 'object' && !!event && 'target' in event;
}

let esm_handlers;

/**
 * Register a handler to be called when `window.open()` is called.
 * Returns a cleanup function.
 */
function onWindowOpen(cb) {
  // Ensure to only register this once
  if (!esm_handlers) {
    esm_handlers = [];
    monkeyPatchWindowOpen();
  }

  esm_handlers.push(cb);

  return () => {
    const pos = esm_handlers ? esm_handlers.indexOf(cb) : -1;
    if (pos > -1) {
      (esm_handlers ).splice(pos, 1);
    }
  };
}

function monkeyPatchWindowOpen() {
  (0,object/* fill */.GS)(esm_WINDOW, 'open', function (originalWindowOpen) {
    return function (...args) {
      if (esm_handlers) {
        try {
          esm_handlers.forEach(handler => handler());
        } catch (e) {
          // ignore errors in here
        }
      }

      return originalWindowOpen.apply(esm_WINDOW, args);
    };
  });
}

/** Any IncrementalSource for rrweb that we interpret as a kind of mutation. */
const IncrementalMutationSources = new Set([
  IncrementalSource.Mutation,
  IncrementalSource.StyleSheetRule,
  IncrementalSource.StyleDeclaration,
  IncrementalSource.AdoptedStyleSheet,
  IncrementalSource.CanvasMutation,
  IncrementalSource.Selection,
  IncrementalSource.MediaInteraction,
]);

/** Handle a click. */
function handleClick(clickDetector, clickBreadcrumb, node) {
  clickDetector.handleClick(clickBreadcrumb, node);
}

/** A click detector class that can be used to detect slow or rage clicks on elements. */
class ClickDetector  {
  // protected for testing

   constructor(
    replay,
    slowClickConfig,
    // Just for easier testing
    _addBreadcrumbEvent = addBreadcrumbEvent,
  ) {
    this._lastMutation = 0;
    this._lastScroll = 0;
    this._clicks = [];

    // We want everything in s, but options are in ms
    this._timeout = slowClickConfig.timeout / 1000;
    this._threshold = slowClickConfig.threshold / 1000;
    this._scrollTimeout = slowClickConfig.scrollTimeout / 1000;
    this._replay = replay;
    this._ignoreSelector = slowClickConfig.ignoreSelector;
    this._addBreadcrumbEvent = _addBreadcrumbEvent;
  }

  /** Register click detection handlers on mutation or scroll. */
   addListeners() {
    const cleanupWindowOpen = onWindowOpen(() => {
      // Treat window.open as mutation
      this._lastMutation = nowInSeconds();
    });

    this._teardown = () => {
      cleanupWindowOpen();

      this._clicks = [];
      this._lastMutation = 0;
      this._lastScroll = 0;
    };
  }

  /** Clean up listeners. */
   removeListeners() {
    if (this._teardown) {
      this._teardown();
    }

    if (this._checkClickTimeout) {
      clearTimeout(this._checkClickTimeout);
    }
  }

  /** @inheritDoc */
   handleClick(breadcrumb, node) {
    if (ignoreElement(node, this._ignoreSelector) || !isClickBreadcrumb(breadcrumb)) {
      return;
    }

    const newClick = {
      timestamp: timestampToS(breadcrumb.timestamp),
      clickBreadcrumb: breadcrumb,
      // Set this to 0 so we know it originates from the click breadcrumb
      clickCount: 0,
      node,
    };

    // If there was a click in the last 1s on the same element, ignore it - only keep a single reference per second
    if (
      this._clicks.some(click => click.node === newClick.node && Math.abs(click.timestamp - newClick.timestamp) < 1)
    ) {
      return;
    }

    this._clicks.push(newClick);

    // If this is the first new click, set a timeout to check for multi clicks
    if (this._clicks.length === 1) {
      this._scheduleCheckClicks();
    }
  }

  /** @inheritDoc */
   registerMutation(timestamp = Date.now()) {
    this._lastMutation = timestampToS(timestamp);
  }

  /** @inheritDoc */
   registerScroll(timestamp = Date.now()) {
    this._lastScroll = timestampToS(timestamp);
  }

  /** @inheritDoc */
   registerClick(element) {
    const node = getClosestInteractive(element);
    this._handleMultiClick(node );
  }

  /** Count multiple clicks on elements. */
   _handleMultiClick(node) {
    this._getClicks(node).forEach(click => {
      click.clickCount++;
    });
  }

  /** Get all pending clicks for a given node. */
   _getClicks(node) {
    return this._clicks.filter(click => click.node === node);
  }

  /** Check the clicks that happened. */
   _checkClicks() {
    const timedOutClicks = [];

    const now = nowInSeconds();

    this._clicks.forEach(click => {
      if (!click.mutationAfter && this._lastMutation) {
        click.mutationAfter = click.timestamp <= this._lastMutation ? this._lastMutation - click.timestamp : undefined;
      }
      if (!click.scrollAfter && this._lastScroll) {
        click.scrollAfter = click.timestamp <= this._lastScroll ? this._lastScroll - click.timestamp : undefined;
      }

      // All of these are in seconds!
      if (click.timestamp + this._timeout <= now) {
        timedOutClicks.push(click);
      }
    });

    // Remove "old" clicks
    for (const click of timedOutClicks) {
      const pos = this._clicks.indexOf(click);

      if (pos > -1) {
        this._generateBreadcrumbs(click);
        this._clicks.splice(pos, 1);
      }
    }

    // Trigger new check, unless no clicks left
    if (this._clicks.length) {
      this._scheduleCheckClicks();
    }
  }

  /** Generate matching breadcrumb(s) for the click. */
   _generateBreadcrumbs(click) {
    const replay = this._replay;
    const hadScroll = click.scrollAfter && click.scrollAfter <= this._scrollTimeout;
    const hadMutation = click.mutationAfter && click.mutationAfter <= this._threshold;

    const isSlowClick = !hadScroll && !hadMutation;
    const { clickCount, clickBreadcrumb } = click;

    // Slow click
    if (isSlowClick) {
      // If `mutationAfter` is set, it means a mutation happened after the threshold, but before the timeout
      // If not, it means we just timed out without scroll & mutation
      const timeAfterClickMs = Math.min(click.mutationAfter || this._timeout, this._timeout) * 1000;
      const endReason = timeAfterClickMs < this._timeout * 1000 ? 'mutation' : 'timeout';

      const breadcrumb = {
        type: 'default',
        message: clickBreadcrumb.message,
        timestamp: clickBreadcrumb.timestamp,
        category: 'ui.slowClickDetected',
        data: {
          ...clickBreadcrumb.data,
          url: esm_WINDOW.location.href,
          route: replay.getCurrentRoute(),
          timeAfterClickMs,
          endReason,
          // If clickCount === 0, it means multiClick was not correctly captured here
          // - we still want to send 1 in this case
          clickCount: clickCount || 1,
        },
      };

      this._addBreadcrumbEvent(replay, breadcrumb);
      return;
    }

    // Multi click
    if (clickCount > 1) {
      const breadcrumb = {
        type: 'default',
        message: clickBreadcrumb.message,
        timestamp: clickBreadcrumb.timestamp,
        category: 'ui.multiClick',
        data: {
          ...clickBreadcrumb.data,
          url: esm_WINDOW.location.href,
          route: replay.getCurrentRoute(),
          clickCount,
          metric: true,
        },
      };

      this._addBreadcrumbEvent(replay, breadcrumb);
    }
  }

  /** Schedule to check current clicks. */
   _scheduleCheckClicks() {
    if (this._checkClickTimeout) {
      clearTimeout(this._checkClickTimeout);
    }

    this._checkClickTimeout = getNativeImplementation_setTimeout(() => this._checkClicks(), 1000);
  }
}

const SLOW_CLICK_TAGS = ['A', 'BUTTON', 'INPUT'];

/** exported for tests only */
function ignoreElement(node, ignoreSelector) {
  if (!SLOW_CLICK_TAGS.includes(node.tagName)) {
    return true;
  }

  // If <input> tag, we only want to consider input[type='submit'] & input[type='button']
  if (node.tagName === 'INPUT' && !['submit', 'button'].includes(node.getAttribute('type') || '')) {
    return true;
  }

  // If <a> tag, detect special variants that may not lead to an action
  // If target !== _self, we may open the link somewhere else, which would lead to no action
  // Also, when downloading a file, we may not leave the page, but still not trigger an action
  if (
    node.tagName === 'A' &&
    (node.hasAttribute('download') || (node.hasAttribute('target') && node.getAttribute('target') !== '_self'))
  ) {
    return true;
  }

  if (ignoreSelector && node.matches(ignoreSelector)) {
    return true;
  }

  return false;
}

function isClickBreadcrumb(breadcrumb) {
  return !!(breadcrumb.data && typeof breadcrumb.data.nodeId === 'number' && breadcrumb.timestamp);
}

// This is good enough for us, and is easier to test/mock than `timestampInSeconds`
function nowInSeconds() {
  return Date.now() / 1000;
}

/** Update the click detector based on a recording event of rrweb. */
function updateClickDetectorForRecordingEvent(clickDetector, event) {
  try {
    // note: We only consider incremental snapshots here
    // This means that any full snapshot is ignored for mutation detection - the reason is that we simply cannot know if a mutation happened here.
    // E.g. think that we are buffering, an error happens and we take a full snapshot because we switched to session mode -
    // in this scenario, we would not know if a dead click happened because of the error, which is a key dead click scenario.
    // Instead, by ignoring full snapshots, we have the risk that we generate a false positive
    // (if a mutation _did_ happen but was "swallowed" by the full snapshot)
    // But this should be more unlikely as we'd generally capture the incremental snapshot right away

    if (!isIncrementalEvent(event)) {
      return;
    }

    const { source } = event.data;
    if (IncrementalMutationSources.has(source)) {
      clickDetector.registerMutation(event.timestamp);
    }

    if (source === IncrementalSource.Scroll) {
      clickDetector.registerScroll(event.timestamp);
    }

    if (isIncrementalMouseInteraction(event)) {
      const { type, id } = event.data;
      const node = record.mirror.getNode(id);

      if (node instanceof HTMLElement && type === MouseInteractions.Click) {
        clickDetector.registerClick(node);
      }
    }
  } catch {
    // ignore errors here, e.g. if accessing something that does not exist
  }
}

function isIncrementalEvent(event) {
  return event.type === ReplayEventTypeIncrementalSnapshot;
}

function isIncrementalMouseInteraction(
  event,
) {
  return event.data.source === IncrementalSource.MouseInteraction;
}

/**
 * Create a breadcrumb for a replay.
 */
function createBreadcrumb(
  breadcrumb,
) {
  return {
    timestamp: Date.now() / 1000,
    type: 'default',
    ...breadcrumb,
  };
}

var NodeType = /* @__PURE__ */ ((NodeType2) => {
  NodeType2[NodeType2["Document"] = 0] = "Document";
  NodeType2[NodeType2["DocumentType"] = 1] = "DocumentType";
  NodeType2[NodeType2["Element"] = 2] = "Element";
  NodeType2[NodeType2["Text"] = 3] = "Text";
  NodeType2[NodeType2["CDATA"] = 4] = "CDATA";
  NodeType2[NodeType2["Comment"] = 5] = "Comment";
  return NodeType2;
})(NodeType || {});

// Note that these are the serialized attributes and not attributes directly on
// the DOM Node. Attributes we are interested in:
const ATTRIBUTES_TO_RECORD = new Set([
  'id',
  'class',
  'aria-label',
  'role',
  'name',
  'alt',
  'title',
  'data-test-id',
  'data-testid',
  'disabled',
  'aria-disabled',
  'data-sentry-component',
]);

/**
 * Inclusion list of attributes that we want to record from the DOM element
 */
function getAttributesToRecord(attributes) {
  const obj = {};
  if (!attributes['data-sentry-component'] && attributes['data-sentry-element']) {
    attributes['data-sentry-component'] = attributes['data-sentry-element'];
  }
  for (const key in attributes) {
    if (ATTRIBUTES_TO_RECORD.has(key)) {
      let normalizedKey = key;

      if (key === 'data-testid' || key === 'data-test-id') {
        normalizedKey = 'testId';
      }

      obj[normalizedKey] = attributes[key];
    }
  }

  return obj;
}

const handleDomListener = (
  replay,
) => {
  return (handlerData) => {
    if (!replay.isEnabled()) {
      return;
    }

    const result = handleDom(handlerData);

    if (!result) {
      return;
    }

    const isClick = handlerData.name === 'click';
    const event = isClick ? (handlerData.event ) : undefined;
    // Ignore clicks if ctrl/alt/meta/shift keys are held down as they alter behavior of clicks (e.g. open in new tab)
    if (
      isClick &&
      replay.clickDetector &&
      event &&
      event.target &&
      !event.altKey &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey
    ) {
      handleClick(
        replay.clickDetector,
        result ,
        getClickTargetNode(handlerData.event ) ,
      );
    }

    addBreadcrumbEvent(replay, result);
  };
};

/** Get the base DOM breadcrumb. */
function getBaseDomBreadcrumb(target, message) {
  const nodeId = record.mirror.getId(target);
  const node = nodeId && record.mirror.getNode(nodeId);
  const meta = node && record.mirror.getMeta(node);
  const element = meta && isElement(meta) ? meta : null;

  return {
    message,
    data: element
      ? {
          nodeId,
          node: {
            id: nodeId,
            tagName: element.tagName,
            textContent: Array.from(element.childNodes)
              .map((node) => node.type === NodeType.Text && node.textContent)
              .filter(Boolean) // filter out empty values
              .map(text => (text ).trim())
              .join(''),
            attributes: getAttributesToRecord(element.attributes),
          },
        }
      : {},
  };
}

/**
 * An event handler to react to DOM events.
 * Exported for tests.
 */
function handleDom(handlerData) {
  const { target, message } = getDomTarget(handlerData);

  return createBreadcrumb({
    category: `ui.${handlerData.name}`,
    ...getBaseDomBreadcrumb(target, message),
  });
}

function getDomTarget(handlerData) {
  const isClick = handlerData.name === 'click';

  let message;
  let target = null;

  // Accessing event.target can throw (see getsentry/raven-js#838, #768)
  try {
    target = isClick ? getClickTargetNode(handlerData.event ) : getTargetNode(handlerData.event );
    message = (0,browser/* htmlTreeAsString */.Hd)(target, { maxStringLength: 200 }) || '<unknown>';
  } catch (e) {
    message = '<unknown>';
  }

  return { target, message };
}

function isElement(node) {
  return node.type === NodeType.Element;
}

/** Handle keyboard events & create breadcrumbs. */
function handleKeyboardEvent(replay, event) {
  if (!replay.isEnabled()) {
    return;
  }

  // Update user activity, but do not restart recording as it can create
  // noisy/low-value replays (e.g. user comes back from idle, hits alt-tab, new
  // session with a single "keydown" breadcrumb is created)
  replay.updateUserActivity();

  const breadcrumb = getKeyboardBreadcrumb(event);

  if (!breadcrumb) {
    return;
  }

  addBreadcrumbEvent(replay, breadcrumb);
}

/** exported only for tests */
function getKeyboardBreadcrumb(event) {
  const { metaKey, shiftKey, ctrlKey, altKey, key, target } = event;

  // never capture for input fields
  if (!target || isInputElement(target ) || !key) {
    return null;
  }

  // Note: We do not consider shift here, as that means "uppercase"
  const hasModifierKey = metaKey || ctrlKey || altKey;
  const isCharacterKey = key.length === 1; // other keys like Escape, Tab, etc have a longer length

  // Do not capture breadcrumb if only a word key is pressed
  // This could leak e.g. user input
  if (!hasModifierKey && isCharacterKey) {
    return null;
  }

  const message = (0,browser/* htmlTreeAsString */.Hd)(target, { maxStringLength: 200 }) || '<unknown>';
  const baseBreadcrumb = getBaseDomBreadcrumb(target , message);

  return createBreadcrumb({
    category: 'ui.keyDown',
    message,
    data: {
      ...baseBreadcrumb.data,
      metaKey,
      shiftKey,
      ctrlKey,
      altKey,
      key,
    },
  });
}

function isInputElement(target) {
  return target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
}

// Map entryType -> function to normalize data for event
const ENTRY_TYPES

 = {
  // @ts-expect-error TODO: entry type does not fit the create* functions entry type
  resource: createResourceEntry,
  paint: createPaintEntry,
  // @ts-expect-error TODO: entry type does not fit the create* functions entry type
  navigation: createNavigationEntry,
};

/**
 * Handler creater for web vitals
 */
function webVitalHandler(
  getter,
  replay,
) {
  return ({ metric }) => void replay.replayPerformanceEntries.push(getter(metric));
}

/**
 * Create replay performance entries from the browser performance entries.
 */
function createPerformanceEntries(
  entries,
) {
  return entries.map(createPerformanceEntry).filter(Boolean) ;
}

function createPerformanceEntry(entry) {
  const entryType = ENTRY_TYPES[entry.entryType];
  if (!entryType) {
    return null;
  }

  return entryType(entry);
}

function getAbsoluteTime(time) {
  // browserPerformanceTimeOrigin can be undefined if `performance` or
  // `performance.now` doesn't exist, but this is already checked by this integration
  return (((0,utils_hoist_time/* browserPerformanceTimeOrigin */.k3)() || esm_WINDOW.performance.timeOrigin) + time) / 1000;
}

function createPaintEntry(entry) {
  const { duration, entryType, name, startTime } = entry;

  const start = getAbsoluteTime(startTime);
  return {
    type: entryType,
    name,
    start,
    end: start + duration,
    data: undefined,
  };
}

function createNavigationEntry(entry) {
  const {
    entryType,
    name,
    decodedBodySize,
    duration,
    domComplete,
    encodedBodySize,
    domContentLoadedEventStart,
    domContentLoadedEventEnd,
    domInteractive,
    loadEventStart,
    loadEventEnd,
    redirectCount,
    startTime,
    transferSize,
    type,
  } = entry;

  // Ignore entries with no duration, they do not seem to be useful and cause dupes
  if (duration === 0) {
    return null;
  }

  return {
    type: `${entryType}.${type}`,
    start: getAbsoluteTime(startTime),
    end: getAbsoluteTime(domComplete),
    name,
    data: {
      size: transferSize,
      decodedBodySize,
      encodedBodySize,
      duration,
      domInteractive,
      domContentLoadedEventStart,
      domContentLoadedEventEnd,
      loadEventStart,
      loadEventEnd,
      domComplete,
      redirectCount,
    },
  };
}

function createResourceEntry(
  entry,
) {
  const {
    entryType,
    initiatorType,
    name,
    responseEnd,
    startTime,
    decodedBodySize,
    encodedBodySize,
    responseStatus,
    transferSize,
  } = entry;

  // Core SDK handles these
  if (['fetch', 'xmlhttprequest'].includes(initiatorType)) {
    return null;
  }

  return {
    type: `${entryType}.${initiatorType}`,
    start: getAbsoluteTime(startTime),
    end: getAbsoluteTime(responseEnd),
    name,
    data: {
      size: transferSize,
      statusCode: responseStatus,
      decodedBodySize,
      encodedBodySize,
    },
  };
}

/**
 * Add a LCP event to the replay based on a LCP metric.
 */
function getLargestContentfulPaint(metric) {
  const lastEntry = metric.entries[metric.entries.length - 1] ;
  const node = lastEntry?.element ? [lastEntry.element] : undefined;
  return getWebVital(metric, 'largest-contentful-paint', node);
}

function isLayoutShift(entry) {
  return (entry ).sources !== undefined;
}

/**
 * Add a CLS event to the replay based on a CLS metric.
 */
function getCumulativeLayoutShift(metric) {
  const layoutShifts = [];
  const nodes = [];
  for (const entry of metric.entries) {
    if (isLayoutShift(entry)) {
      const nodeIds = [];
      for (const source of entry.sources) {
        if (source.node) {
          nodes.push(source.node);
          const nodeId = record.mirror.getId(source.node);
          if (nodeId) {
            nodeIds.push(nodeId);
          }
        }
      }
      layoutShifts.push({ value: entry.value, nodeIds: nodeIds.length ? nodeIds : undefined });
    }
  }

  return getWebVital(metric, 'cumulative-layout-shift', nodes, layoutShifts);
}

/**
 * Add a FID event to the replay based on a FID metric.
 */
function getFirstInputDelay(metric) {
  const lastEntry = metric.entries[metric.entries.length - 1] ;
  const node = lastEntry?.target ? [lastEntry.target] : undefined;
  return getWebVital(metric, 'first-input-delay', node);
}

/**
 * Add an INP event to the replay based on an INP metric.
 */
function getInteractionToNextPaint(metric) {
  const lastEntry = metric.entries[metric.entries.length - 1] ;
  const node = lastEntry?.target ? [lastEntry.target] : undefined;
  return getWebVital(metric, 'interaction-to-next-paint', node);
}

/**
 * Add an web vital event to the replay based on the web vital metric.
 */
function getWebVital(
  metric,
  name,
  nodes,
  attributions,
) {
  const value = metric.value;
  const rating = metric.rating;

  const end = getAbsoluteTime(value);

  return {
    type: 'web-vital',
    name,
    start: end,
    end,
    data: {
      value,
      size: value,
      rating,
      nodeIds: nodes ? nodes.map(node => record.mirror.getId(node)) : undefined,
      attributions,
    },
  };
}

/**
 * Sets up a PerformanceObserver to listen to all performance entry types.
 * Returns a callback to stop observing.
 */
function setupPerformanceObserver(replay) {
  function addPerformanceEntry(entry) {
    // It is possible for entries to come up multiple times
    if (!replay.performanceEntries.includes(entry)) {
      replay.performanceEntries.push(entry);
    }
  }

  function onEntries({ entries }) {
    entries.forEach(addPerformanceEntry);
  }

  const clearCallbacks = [];

  (['navigation', 'paint', 'resource'] ).forEach(type => {
    clearCallbacks.push(addPerformanceInstrumentationHandler(type, onEntries));
  });

  clearCallbacks.push(
    addLcpInstrumentationHandler(webVitalHandler(getLargestContentfulPaint, replay)),
    addClsInstrumentationHandler(webVitalHandler(getCumulativeLayoutShift, replay)),
    addFidInstrumentationHandler(webVitalHandler(getFirstInputDelay, replay)),
    addInpInstrumentationHandler(webVitalHandler(getInteractionToNextPaint, replay)),
  );

  // A callback to cleanup all handlers
  return () => {
    clearCallbacks.forEach(clearCallback => clearCallback());
  };
}

/**
 * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
 *
 * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
 */
const esm_DEBUG_BUILD = (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__);

const r = `var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new n(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new r(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,s=0,a=new n(r);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new n(r);for(s=1;s<r;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new n(1<<r);var f=15-r;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=r-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new n(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],s=0;s<r.length;++s)r[s]&&i.push({s:s,f:r[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new n(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort((function(t,n){return p[n.s]-p[t.s]||t.f-n.f}));s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=r;++h)if(t[h]==s&&h!=r)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=r[s];return 8*(i+4+e)},U=function(t,r,a,o,h,f,l,u,c,v,m){z(r,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,s=0|r.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=r[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(n.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(s),32768),this.s.z=n.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n.prototype.flush=function(){this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t.prototype.flush=function(){G.prototype.flush.call(this)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(J)return J.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=n.charCodeAt(o);f<128||r?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&n.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),s=i.length;return q(i,n),j(i,s-8,r.d()),j(i,s-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});`;

function e(){const e=new Blob([r]);return URL.createObjectURL(e)}

const CONSOLE_LEVELS = ['info', 'warn', 'error', 'log'] ;
const PREFIX = '[Replay] ';

function _addBreadcrumb(message, level = 'info') {
  (0,breadcrumbs/* addBreadcrumb */.Z)(
    {
      category: 'console',
      data: {
        logger: 'replay',
      },
      level,
      message: `${PREFIX}${message}`,
    },
    { level },
  );
}

function makeReplayLogger() {
  let _capture = false;
  let _trace = false;

  const _logger = {
    exception: () => undefined,
    infoTick: () => undefined,
    setConfig: (opts) => {
      _capture = !!opts.captureExceptions;
      _trace = !!opts.traceInternals;
    },
  };

  if (esm_DEBUG_BUILD) {
    CONSOLE_LEVELS.forEach(name => {
      _logger[name] = (...args) => {
        logger/* logger */.vF[name](PREFIX, ...args);
        if (_trace) {
          _addBreadcrumb(args.join(''), severityLevelFromString(name));
        }
      };
    });

    _logger.exception = (error, ...message) => {
      if (message.length && _logger.error) {
        _logger.error(...message);
      }

      logger/* logger */.vF.error(PREFIX, error);

      if (_capture) {
        captureException(error);
      } else if (_trace) {
        // No need for a breadcrumb if `_capture` is enabled since it should be
        // captured as an exception
        _addBreadcrumb(error, 'error');
      }
    };

    _logger.infoTick = (...args) => {
      logger/* logger */.vF.info(PREFIX, ...args);
      if (_trace) {
        // Wait a tick here to avoid race conditions for some initial logs
        // which may be added before replay is initialized
        setTimeout(() => _addBreadcrumb(args[0]), 0);
      }
    };
  } else {
    CONSOLE_LEVELS.forEach(name => {
      _logger[name] = () => undefined;
    });
  }

  return _logger ;
}

const esm_logger = makeReplayLogger();

/** This error indicates that the event buffer size exceeded the limit.. */
class EventBufferSizeExceededError extends Error {
   constructor() {
    super(`Event buffer exceeded maximum size of ${REPLAY_MAX_EVENT_BUFFER_SIZE}.`);
  }
}

/**
 * A basic event buffer that does not do any compression.
 * Used as fallback if the compression worker cannot be loaded or is disabled.
 */
class EventBufferArray  {
  /** All the events that are buffered to be sent. */

  /** @inheritdoc */

  /** @inheritdoc */

   constructor() {
    this.events = [];
    this._totalSize = 0;
    this.hasCheckout = false;
    this.waitForCheckout = false;
  }

  /** @inheritdoc */
   get hasEvents() {
    return this.events.length > 0;
  }

  /** @inheritdoc */
   get type() {
    return 'sync';
  }

  /** @inheritdoc */
   destroy() {
    this.events = [];
  }

  /** @inheritdoc */
   async addEvent(event) {
    const eventSize = JSON.stringify(event).length;
    this._totalSize += eventSize;
    if (this._totalSize > REPLAY_MAX_EVENT_BUFFER_SIZE) {
      throw new EventBufferSizeExceededError();
    }

    this.events.push(event);
  }

  /** @inheritdoc */
   finish() {
    return new Promise(resolve => {
      // Make a copy of the events array reference and immediately clear the
      // events member so that we do not lose new events while uploading
      // attachment.
      const eventsRet = this.events;
      this.clear();
      resolve(JSON.stringify(eventsRet));
    });
  }

  /** @inheritdoc */
   clear() {
    this.events = [];
    this._totalSize = 0;
    this.hasCheckout = false;
  }

  /** @inheritdoc */
   getEarliestTimestamp() {
    const timestamp = this.events.map(event => event.timestamp).sort()[0];

    if (!timestamp) {
      return null;
    }

    return timestampToMs(timestamp);
  }
}

/**
 * Event buffer that uses a web worker to compress events.
 * Exported only for testing.
 */
class WorkerHandler {

   constructor(worker) {
    this._worker = worker;
    this._id = 0;
  }

  /**
   * Ensure the worker is ready (or not).
   * This will either resolve when the worker is ready, or reject if an error occurred.
   */
   ensureReady() {
    // Ensure we only check once
    if (this._ensureReadyPromise) {
      return this._ensureReadyPromise;
    }

    this._ensureReadyPromise = new Promise((resolve, reject) => {
      this._worker.addEventListener(
        'message',
        ({ data }) => {
          if ((data ).success) {
            resolve();
          } else {
            reject();
          }
        },
        { once: true },
      );

      this._worker.addEventListener(
        'error',
        error => {
          reject(error);
        },
        { once: true },
      );
    });

    return this._ensureReadyPromise;
  }

  /**
   * Destroy the worker.
   */
   destroy() {
    esm_DEBUG_BUILD && esm_logger.info('Destroying compression worker');
    this._worker.terminate();
  }

  /**
   * Post message to worker and wait for response before resolving promise.
   */
   postMessage(method, arg) {
    const id = this._getAndIncrementId();

    return new Promise((resolve, reject) => {
      const listener = ({ data }) => {
        const response = data ;
        if (response.method !== method) {
          return;
        }

        // There can be multiple listeners for a single method, the id ensures
        // that the response matches the caller.
        if (response.id !== id) {
          return;
        }

        // At this point, we'll always want to remove listener regardless of result status
        this._worker.removeEventListener('message', listener);

        if (!response.success) {
          // TODO: Do some error handling, not sure what
          esm_DEBUG_BUILD && esm_logger.error('Error in compression worker: ', response.response);

          reject(new Error('Error in compression worker'));
          return;
        }

        resolve(response.response );
      };

      // Note: we can't use `once` option because it's possible it needs to
      // listen to multiple messages
      this._worker.addEventListener('message', listener);
      this._worker.postMessage({ id, method, arg });
    });
  }

  /** Get the current ID and increment it for the next call. */
   _getAndIncrementId() {
    return this._id++;
  }
}

/**
 * Event buffer that uses a web worker to compress events.
 * Exported only for testing.
 */
class EventBufferCompressionWorker  {
  /** @inheritdoc */

  /** @inheritdoc */

   constructor(worker) {
    this._worker = new WorkerHandler(worker);
    this._earliestTimestamp = null;
    this._totalSize = 0;
    this.hasCheckout = false;
    this.waitForCheckout = false;
  }

  /** @inheritdoc */
   get hasEvents() {
    return !!this._earliestTimestamp;
  }

  /** @inheritdoc */
   get type() {
    return 'worker';
  }

  /**
   * Ensure the worker is ready (or not).
   * This will either resolve when the worker is ready, or reject if an error occurred.
   */
   ensureReady() {
    return this._worker.ensureReady();
  }

  /**
   * Destroy the event buffer.
   */
   destroy() {
    this._worker.destroy();
  }

  /**
   * Add an event to the event buffer.
   *
   * Returns true if event was successfully received and processed by worker.
   */
   addEvent(event) {
    const timestamp = timestampToMs(event.timestamp);
    if (!this._earliestTimestamp || timestamp < this._earliestTimestamp) {
      this._earliestTimestamp = timestamp;
    }

    const data = JSON.stringify(event);
    this._totalSize += data.length;

    if (this._totalSize > REPLAY_MAX_EVENT_BUFFER_SIZE) {
      return Promise.reject(new EventBufferSizeExceededError());
    }

    return this._sendEventToWorker(data);
  }

  /**
   * Finish the event buffer and return the compressed data.
   */
   finish() {
    return this._finishRequest();
  }

  /** @inheritdoc */
   clear() {
    this._earliestTimestamp = null;
    this._totalSize = 0;
    this.hasCheckout = false;

    // We do not wait on this, as we assume the order of messages is consistent for the worker
    this._worker.postMessage('clear').then(null, e => {
      esm_DEBUG_BUILD && esm_logger.exception(e, 'Sending "clear" message to worker failed', e);
    });
  }

  /** @inheritdoc */
   getEarliestTimestamp() {
    return this._earliestTimestamp;
  }

  /**
   * Send the event to the worker.
   */
   _sendEventToWorker(data) {
    return this._worker.postMessage('addEvent', data);
  }

  /**
   * Finish the request and return the compressed data from the worker.
   */
   async _finishRequest() {
    const response = await this._worker.postMessage('finish');

    this._earliestTimestamp = null;
    this._totalSize = 0;

    return response;
  }
}

/**
 * This proxy will try to use the compression worker, and fall back to use the simple buffer if an error occurs there.
 * This can happen e.g. if the worker cannot be loaded.
 * Exported only for testing.
 */
class EventBufferProxy  {

   constructor(worker) {
    this._fallback = new EventBufferArray();
    this._compression = new EventBufferCompressionWorker(worker);
    this._used = this._fallback;

    this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded();
  }

  /** @inheritdoc */
   get waitForCheckout() {
    return this._used.waitForCheckout;
  }

  /** @inheritdoc */
   get type() {
    return this._used.type;
  }

  /** @inheritDoc */
   get hasEvents() {
    return this._used.hasEvents;
  }

  /** @inheritdoc */
   get hasCheckout() {
    return this._used.hasCheckout;
  }
  /** @inheritdoc */
   set hasCheckout(value) {
    this._used.hasCheckout = value;
  }

  /** @inheritdoc */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
   set waitForCheckout(value) {
    this._used.waitForCheckout = value;
  }

  /** @inheritDoc */
   destroy() {
    this._fallback.destroy();
    this._compression.destroy();
  }

  /** @inheritdoc */
   clear() {
    return this._used.clear();
  }

  /** @inheritdoc */
   getEarliestTimestamp() {
    return this._used.getEarliestTimestamp();
  }

  /**
   * Add an event to the event buffer.
   *
   * Returns true if event was successfully added.
   */
   addEvent(event) {
    return this._used.addEvent(event);
  }

  /** @inheritDoc */
   async finish() {
    // Ensure the worker is loaded, so the sent event is compressed
    await this.ensureWorkerIsLoaded();

    return this._used.finish();
  }

  /** Ensure the worker has loaded. */
   ensureWorkerIsLoaded() {
    return this._ensureWorkerIsLoadedPromise;
  }

  /** Actually check if the worker has been loaded. */
   async _ensureWorkerIsLoaded() {
    try {
      await this._compression.ensureReady();
    } catch (error) {
      // If the worker fails to load, we fall back to the simple buffer.
      // Nothing more to do from our side here
      esm_DEBUG_BUILD && esm_logger.exception(error, 'Failed to load the compression worker, falling back to simple buffer');
      return;
    }

    // Now we need to switch over the array buffer to the compression worker
    await this._switchToCompressionWorker();
  }

  /** Switch the used buffer to the compression worker. */
   async _switchToCompressionWorker() {
    const { events, hasCheckout, waitForCheckout } = this._fallback;

    const addEventPromises = [];
    for (const event of events) {
      addEventPromises.push(this._compression.addEvent(event));
    }

    this._compression.hasCheckout = hasCheckout;
    this._compression.waitForCheckout = waitForCheckout;

    // We switch over to the new buffer immediately - any further events will be added
    // after the previously buffered ones
    this._used = this._compression;

    // Wait for original events to be re-added before resolving
    try {
      await Promise.all(addEventPromises);

      // Can now clear fallback buffer as it's no longer necessary
      this._fallback.clear();
    } catch (error) {
      esm_DEBUG_BUILD && esm_logger.exception(error, 'Failed to add events when switching buffers.');
    }
  }
}

/**
 * Create an event buffer for replays.
 */
function createEventBuffer({
  useCompression,
  workerUrl: customWorkerUrl,
}) {
  if (
    useCompression &&
    // eslint-disable-next-line no-restricted-globals
    window.Worker
  ) {
    const worker = _loadWorker(customWorkerUrl);

    if (worker) {
      return worker;
    }
  }

  esm_DEBUG_BUILD && esm_logger.info('Using simple buffer');
  return new EventBufferArray();
}

function _loadWorker(customWorkerUrl) {
  try {
    const workerUrl = customWorkerUrl || _getWorkerUrl();

    if (!workerUrl) {
      return;
    }

    esm_DEBUG_BUILD && esm_logger.info(`Using compression worker${customWorkerUrl ? ` from ${customWorkerUrl}` : ''}`);
    const worker = new Worker(workerUrl);
    return new EventBufferProxy(worker);
  } catch (error) {
    esm_DEBUG_BUILD && esm_logger.exception(error, 'Failed to create compression worker');
    // Fall back to use simple event buffer array
  }
}

function _getWorkerUrl() {
  if (typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ === 'undefined' || !__SENTRY_EXCLUDE_REPLAY_WORKER__) {
    return e();
  }

  return '';
}

/** If sessionStorage is available. */
function hasSessionStorage() {
  try {
    // This can throw, e.g. when being accessed in a sandboxed iframe
    return 'sessionStorage' in esm_WINDOW && !!esm_WINDOW.sessionStorage;
  } catch {
    return false;
  }
}

/**
 * Removes the session from Session Storage and unsets session in replay instance
 */
function clearSession(replay) {
  deleteSession();
  replay.session = undefined;
}

/**
 * Deletes a session from storage
 */
function deleteSession() {
  if (!hasSessionStorage()) {
    return;
  }

  try {
    esm_WINDOW.sessionStorage.removeItem(REPLAY_SESSION_KEY);
  } catch {
    // Ignore potential SecurityError exceptions
  }
}

/**
 * Given a sample rate, returns true if replay should be sampled.
 *
 * 1.0 = 100% sampling
 * 0.0 = 0% sampling
 */
function isSampled(sampleRate) {
  if (sampleRate === undefined) {
    return false;
  }

  // Math.random() returns a number in range of 0 to 1 (inclusive of 0, but not 1)
  return Math.random() < sampleRate;
}

/**
 * Get a session with defaults & applied sampling.
 */
function makeSession(session) {
  const now = Date.now();
  const id = session.id || (0,misc/* uuid4 */.eJ)();
  // Note that this means we cannot set a started/lastActivity of `0`, but this should not be relevant outside of tests.
  const started = session.started || now;
  const lastActivity = session.lastActivity || now;
  const segmentId = session.segmentId || 0;
  const sampled = session.sampled;
  const previousSessionId = session.previousSessionId;

  return {
    id,
    started,
    lastActivity,
    segmentId,
    sampled,
    previousSessionId,
  };
}

/**
 * Save a session to session storage.
 */
function saveSession(session) {
  if (!hasSessionStorage()) {
    return;
  }

  try {
    esm_WINDOW.sessionStorage.setItem(REPLAY_SESSION_KEY, JSON.stringify(session));
  } catch {
    // Ignore potential SecurityError exceptions
  }
}

/**
 * Get the sampled status for a session based on sample rates & current sampled status.
 */
function getSessionSampleType(sessionSampleRate, allowBuffering) {
  return isSampled(sessionSampleRate) ? 'session' : allowBuffering ? 'buffer' : false;
}

/**
 * Create a new session, which in its current implementation is a Sentry event
 * that all replays will be saved to as attachments. Currently, we only expect
 * one of these Sentry events per "replay session".
 */
function createSession(
  { sessionSampleRate, allowBuffering, stickySession = false },
  { previousSessionId } = {},
) {
  const sampled = getSessionSampleType(sessionSampleRate, allowBuffering);
  const session = makeSession({
    sampled,
    previousSessionId,
  });

  if (stickySession) {
    saveSession(session);
  }

  return session;
}

/**
 * Fetches a session from storage
 */
function fetchSession() {
  if (!hasSessionStorage()) {
    return null;
  }

  try {
    // This can throw if cookies are disabled
    const sessionStringFromStorage = esm_WINDOW.sessionStorage.getItem(REPLAY_SESSION_KEY);

    if (!sessionStringFromStorage) {
      return null;
    }

    const sessionObj = JSON.parse(sessionStringFromStorage) ;

    esm_DEBUG_BUILD && esm_logger.infoTick('Loading existing session');

    return makeSession(sessionObj);
  } catch {
    return null;
  }
}

/**
 * Given an initial timestamp and an expiry duration, checks to see if current
 * time should be considered as expired.
 */
function isExpired(
  initialTime,
  expiry,
  targetTime = +new Date(),
) {
  // Always expired if < 0
  if (initialTime === null || expiry === undefined || expiry < 0) {
    return true;
  }

  // Never expires if == 0
  if (expiry === 0) {
    return false;
  }

  return initialTime + expiry <= targetTime;
}

/**
 * Checks to see if session is expired
 */
function isSessionExpired(
  session,
  {
    maxReplayDuration,
    sessionIdleExpire,
    targetTime = Date.now(),
  },
) {
  return (
    // First, check that maximum session length has not been exceeded
    isExpired(session.started, maxReplayDuration, targetTime) ||
    // check that the idle timeout has not been exceeded (i.e. user has
    // performed an action within the last `sessionIdleExpire` ms)
    isExpired(session.lastActivity, sessionIdleExpire, targetTime)
  );
}

/** If the session should be refreshed or not. */
function shouldRefreshSession(
  session,
  { sessionIdleExpire, maxReplayDuration },
) {
  // If not expired, all good, just keep the session
  if (!isSessionExpired(session, { sessionIdleExpire, maxReplayDuration })) {
    return false;
  }

  // If we are buffering & haven't ever flushed yet, always continue
  if (session.sampled === 'buffer' && session.segmentId === 0) {
    return false;
  }

  return true;
}

/**
 * Get or create a session, when initializing the replay.
 * Returns a session that may be unsampled.
 */
function loadOrCreateSession(
  {
    sessionIdleExpire,
    maxReplayDuration,
    previousSessionId,
  }

,
  sessionOptions,
) {
  const existingSession = sessionOptions.stickySession && fetchSession();

  // No session exists yet, just create a new one
  if (!existingSession) {
    esm_DEBUG_BUILD && esm_logger.infoTick('Creating new session');
    return createSession(sessionOptions, { previousSessionId });
  }

  if (!shouldRefreshSession(existingSession, { sessionIdleExpire, maxReplayDuration })) {
    return existingSession;
  }

  esm_DEBUG_BUILD && esm_logger.infoTick('Session in sessionStorage is expired, creating new one...');
  return createSession(sessionOptions, { previousSessionId: existingSession.id });
}

function isCustomEvent(event) {
  return event.type === EventType.Custom;
}

/**
 * Add an event to the event buffer.
 * In contrast to `addEvent`, this does not return a promise & does not wait for the adding of the event to succeed/fail.
 * Instead this returns `true` if we tried to add the event, else false.
 * It returns `false` e.g. if we are paused, disabled, or out of the max replay duration.
 *
 * `isCheckout` is true if this is either the very first event, or an event triggered by `checkoutEveryNms`.
 */
function addEventSync(replay, event, isCheckout) {
  if (!shouldAddEvent(replay, event)) {
    return false;
  }

  // This should never reject
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  _addEvent(replay, event, isCheckout);

  return true;
}

/**
 * Add an event to the event buffer.
 * Resolves to `null` if no event was added, else to `void`.
 *
 * `isCheckout` is true if this is either the very first event, or an event triggered by `checkoutEveryNms`.
 */
function addEvent(
  replay,
  event,
  isCheckout,
) {
  if (!shouldAddEvent(replay, event)) {
    return Promise.resolve(null);
  }

  return _addEvent(replay, event, isCheckout);
}

async function _addEvent(
  replay,
  event,
  isCheckout,
) {
  const { eventBuffer } = replay;

  if (!eventBuffer || (eventBuffer.waitForCheckout && !isCheckout)) {
    return null;
  }

  const isBufferMode = replay.recordingMode === 'buffer';

  try {
    if (isCheckout && isBufferMode) {
      eventBuffer.clear();
    }

    if (isCheckout) {
      eventBuffer.hasCheckout = true;
      eventBuffer.waitForCheckout = false;
    }

    const replayOptions = replay.getOptions();

    const eventAfterPossibleCallback = maybeApplyCallback(event, replayOptions.beforeAddRecordingEvent);

    if (!eventAfterPossibleCallback) {
      return;
    }

    return await eventBuffer.addEvent(eventAfterPossibleCallback);
  } catch (error) {
    const isExceeded = error && error instanceof EventBufferSizeExceededError;
    const reason = isExceeded ? 'addEventSizeExceeded' : 'addEvent';

    if (isExceeded && isBufferMode) {
      // Clear buffer and wait for next checkout
      eventBuffer.clear();
      eventBuffer.waitForCheckout = true;

      return null;
    }

    replay.handleException(error);

    await replay.stop({ reason });

    const client = (0,currentScopes/* getClient */.KU)();

    if (client) {
      client.recordDroppedEvent('internal_sdk_error', 'replay');
    }
  }
}

/** Exported only for tests. */
function shouldAddEvent(replay, event) {
  if (!replay.eventBuffer || replay.isPaused() || !replay.isEnabled()) {
    return false;
  }

  const timestampInMs = timestampToMs(event.timestamp);

  // Throw out events that happen more than 5 minutes ago. This can happen if
  // page has been left open and idle for a long period of time and user
  // comes back to trigger a new session. The performance entries rely on
  // `performance.timeOrigin`, which is when the page first opened.
  if (timestampInMs + replay.timeouts.sessionIdlePause < Date.now()) {
    return false;
  }

  // Throw out events that are +60min from the initial timestamp
  if (timestampInMs > replay.getContext().initialTimestamp + replay.getOptions().maxReplayDuration) {
    esm_DEBUG_BUILD &&
      esm_logger.infoTick(`Skipping event with timestamp ${timestampInMs} because it is after maxReplayDuration`);
    return false;
  }

  return true;
}

function maybeApplyCallback(
  event,
  callback,
) {
  try {
    if (typeof callback === 'function' && isCustomEvent(event)) {
      return callback(event);
    }
  } catch (error) {
    esm_DEBUG_BUILD &&
      esm_logger.exception(error, 'An error occurred in the `beforeAddRecordingEvent` callback, skipping the event...');
    return null;
  }

  return event;
}

/** If the event is an error event */
function esm_isErrorEvent(event) {
  return !event.type;
}

/** If the event is a transaction event */
function esm_isTransactionEvent(event) {
  return event.type === 'transaction';
}

/** If the event is an replay event */
function isReplayEvent(event) {
  return event.type === 'replay_event';
}

/** If the event is a feedback event */
function isFeedbackEvent(event) {
  return event.type === 'feedback';
}

/**
 * Returns a listener to be added to `client.on('afterSendErrorEvent, listener)`.
 */
function handleAfterSendEvent(replay) {
  return (event, sendResponse) => {
    if (!replay.isEnabled() || (!esm_isErrorEvent(event) && !esm_isTransactionEvent(event))) {
      return;
    }

    const statusCode = sendResponse?.statusCode;

    // We only want to do stuff on successful error sending, otherwise you get error replays without errors attached
    // If not using the base transport, we allow `undefined` response (as a custom transport may not implement this correctly yet)
    // If we do use the base transport, we skip if we encountered an non-OK status code
    if (!statusCode || statusCode < 200 || statusCode >= 300) {
      return;
    }

    if (esm_isTransactionEvent(event)) {
      handleTransactionEvent(replay, event);
      return;
    }

    handleErrorEvent(replay, event);
  };
}

function handleTransactionEvent(replay, event) {
  const replayContext = replay.getContext();

  // Collect traceIds in _context regardless of `recordingMode`
  // In error mode, _context gets cleared on every checkout
  // We limit to max. 100 transactions linked
  if (event.contexts?.trace?.trace_id && replayContext.traceIds.size < 100) {
    replayContext.traceIds.add(event.contexts.trace.trace_id);
  }
}

function handleErrorEvent(replay, event) {
  const replayContext = replay.getContext();

  // Add error to list of errorIds of replay. This is ok to do even if not
  // sampled because context will get reset at next checkout.
  // XXX: There is also a race condition where it's possible to capture an
  // error to Sentry before Replay SDK has loaded, but response returns after
  // it was loaded, and this gets called.
  // We limit to max. 100 errors linked
  if (event.event_id && replayContext.errorIds.size < 100) {
    replayContext.errorIds.add(event.event_id);
  }

  // If error event is tagged with replay id it means it was sampled (when in buffer mode)
  // Need to be very careful that this does not cause an infinite loop
  if (replay.recordingMode !== 'buffer' || !event.tags || !event.tags.replayId) {
    return;
  }

  const { beforeErrorSampling } = replay.getOptions();
  if (typeof beforeErrorSampling === 'function' && !beforeErrorSampling(event)) {
    return;
  }

  getNativeImplementation_setTimeout(async () => {
    try {
      // Capture current event buffer as new replay
      await replay.sendBufferedReplayOrFlush();
    } catch (err) {
      replay.handleException(err);
    }
  });
}

/**
 * Returns a listener to be added to `client.on('afterSendErrorEvent, listener)`.
 */
function handleBeforeSendEvent(replay) {
  return (event) => {
    if (!replay.isEnabled() || !esm_isErrorEvent(event)) {
      return;
    }

    handleHydrationError(replay, event);
  };
}

function handleHydrationError(replay, event) {
  const exceptionValue = event.exception?.values?.[0]?.value;
  if (typeof exceptionValue !== 'string') {
    return;
  }

  if (
    // Only matches errors in production builds of react-dom
    // Example https://reactjs.org/docs/error-decoder.html?invariant=423
    // With newer React versions, the messages changed to a different website https://react.dev/errors/418
    exceptionValue.match(
      /(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/,
    ) ||
    // Development builds of react-dom
    // Error 1: Hydration failed because the initial UI does not match what was rendered on the server.
    // Error 2: Text content does not match server-rendered HTML. Warning: Text content did not match.
    exceptionValue.match(/(does not match server-rendered HTML|Hydration failed because)/i)
  ) {
    const breadcrumb = createBreadcrumb({
      category: 'replay.hydrate-error',
      data: {
        url: (0,browser/* getLocationHref */.$N)(),
      },
    });
    addBreadcrumbEvent(replay, breadcrumb);
  }
}

/**
 * Handle breadcrumbs that Sentry captures, and make sure to capture relevant breadcrumbs to Replay as well.
 */
function handleBreadcrumbs(replay) {
  const client = (0,currentScopes/* getClient */.KU)();

  if (!client) {
    return;
  }

  client.on('beforeAddBreadcrumb', breadcrumb => beforeAddBreadcrumb(replay, breadcrumb));
}

function beforeAddBreadcrumb(replay, breadcrumb) {
  if (!replay.isEnabled() || !isBreadcrumbWithCategory(breadcrumb)) {
    return;
  }

  const result = normalizeBreadcrumb(breadcrumb);
  if (result) {
    addBreadcrumbEvent(replay, result);
  }
}

/** Exported only for tests. */
function normalizeBreadcrumb(breadcrumb) {
  if (
    !isBreadcrumbWithCategory(breadcrumb) ||
    [
      // fetch & xhr are handled separately,in handleNetworkBreadcrumbs
      'fetch',
      'xhr',
      // These two are breadcrumbs for emitted sentry events, we don't care about them
      'sentry.event',
      'sentry.transaction',
    ].includes(breadcrumb.category) ||
    // We capture UI breadcrumbs separately
    breadcrumb.category.startsWith('ui.')
  ) {
    return null;
  }

  if (breadcrumb.category === 'console') {
    return normalizeConsoleBreadcrumb(breadcrumb);
  }

  return createBreadcrumb(breadcrumb);
}

/** exported for tests only */
function normalizeConsoleBreadcrumb(
  breadcrumb,
) {
  const args = breadcrumb.data?.arguments;

  if (!Array.isArray(args) || args.length === 0) {
    return createBreadcrumb(breadcrumb);
  }

  let isTruncated = false;

  // Avoid giant args captures
  const normalizedArgs = args.map(arg => {
    if (!arg) {
      return arg;
    }
    if (typeof arg === 'string') {
      if (arg.length > CONSOLE_ARG_MAX_SIZE) {
        isTruncated = true;
        return `${arg.slice(0, CONSOLE_ARG_MAX_SIZE)}…`;
      }

      return arg;
    }
    if (typeof arg === 'object') {
      try {
        const normalizedArg = (0,normalize/* normalize */.S8)(arg, 7);
        const stringified = JSON.stringify(normalizedArg);
        if (stringified.length > CONSOLE_ARG_MAX_SIZE) {
          isTruncated = true;
          // We use the pretty printed JSON string here as a base
          return `${JSON.stringify(normalizedArg, null, 2).slice(0, CONSOLE_ARG_MAX_SIZE)}…`;
        }
        return normalizedArg;
      } catch {
        // fall back to default
      }
    }

    return arg;
  });

  return createBreadcrumb({
    ...breadcrumb,
    data: {
      ...breadcrumb.data,
      arguments: normalizedArgs,
      ...(isTruncated ? { _meta: { warnings: ['CONSOLE_ARG_TRUNCATED'] } } : {}),
    },
  });
}

function isBreadcrumbWithCategory(breadcrumb) {
  return !!breadcrumb.category;
}

/**
 * Returns true if we think the given event is an error originating inside of rrweb.
 */
function isRrwebError(event, hint) {
  if (event.type || !event.exception || !event.exception.values || !event.exception.values.length) {
    return false;
  }

  // @ts-expect-error this may be set by rrweb when it finds errors
  if (hint.originalException?.__rrweb__) {
    return true;
  }

  return false;
}

/**
 * Reset the `replay_id` field on the DSC.
 */
function resetReplayIdOnDynamicSamplingContext() {
  // Reset DSC on the current scope, if there is one
  const dsc = (0,currentScopes/* getCurrentScope */.o5)().getPropagationContext().dsc;
  if (dsc) {
    delete dsc.replay_id;
  }

  // Clear it from frozen DSC on the active span
  const activeSpan = (0,spanUtils/* getActiveSpan */.Bk)();
  if (activeSpan) {
    const dsc = (0,tracing_dynamicSamplingContext/* getDynamicSamplingContextFromSpan */.k1)(activeSpan);
    delete (dsc ).replay_id;
  }
}

/**
 * Add a feedback breadcrumb event to replay.
 */
function addFeedbackBreadcrumb(replay, event) {
  replay.triggerUserActivity();
  replay.addUpdate(() => {
    if (!event.timestamp) {
      // Ignore events that don't have timestamps (this shouldn't happen, more of a typing issue)
      // Return true here so that we don't flush
      return true;
    }

    // This should never reject
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    replay.throttledAddEvent({
      type: EventType.Custom,
      timestamp: event.timestamp * 1000,
      data: {
        tag: 'breadcrumb',
        payload: {
          timestamp: event.timestamp,
          type: 'default',
          category: 'sentry.feedback',
          data: {
            feedbackId: event.event_id,
          },
        },
      },
    } );

    return false;
  });
}

/**
 * Determine if event should be sampled (only applies in buffer mode).
 * When an event is captured by `handleGlobalEvent`, when in buffer mode
 * we determine if we want to sample the error or not.
 */
function shouldSampleForBufferEvent(replay, event) {
  if (replay.recordingMode !== 'buffer') {
    return false;
  }

  // ignore this error because otherwise we could loop indefinitely with
  // trying to capture replay and failing
  if (event.message === UNABLE_TO_SEND_REPLAY) {
    return false;
  }

  // Require the event to be an error event & to have an exception
  if (!event.exception || event.type) {
    return false;
  }

  return isSampled(replay.getOptions().errorSampleRate);
}

/**
 * Returns a listener to be added to `addEventProcessor(listener)`.
 */
function handleGlobalEventListener(replay) {
  return Object.assign(
    (event, hint) => {
      // Do nothing if replay has been disabled or paused
      if (!replay.isEnabled() || replay.isPaused()) {
        return event;
      }

      if (isReplayEvent(event)) {
        // Replays have separate set of breadcrumbs, do not include breadcrumbs
        // from core SDK
        delete event.breadcrumbs;
        return event;
      }

      // We only want to handle errors, transactions, and feedbacks, nothing else
      if (!esm_isErrorEvent(event) && !esm_isTransactionEvent(event) && !isFeedbackEvent(event)) {
        return event;
      }

      // Ensure we do not add replay_id if the session is expired
      const isSessionActive = replay.checkAndHandleExpiredSession();
      if (!isSessionActive) {
        // prevent exceeding replay durations by removing the expired replayId from the DSC
        resetReplayIdOnDynamicSamplingContext();
        return event;
      }

      if (isFeedbackEvent(event)) {
        // This should never reject
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        replay.flush();
        event.contexts.feedback.replay_id = replay.getSessionId();
        // Add a replay breadcrumb for this piece of feedback
        addFeedbackBreadcrumb(replay, event);
        return event;
      }

      // Unless `captureExceptions` is enabled, we want to ignore errors coming from rrweb
      // As there can be a bunch of stuff going wrong in internals there, that we don't want to bubble up to users
      if (isRrwebError(event, hint) && !replay.getOptions()._experiments.captureExceptions) {
        esm_DEBUG_BUILD && esm_logger.log('Ignoring error from rrweb internals', event);
        return null;
      }

      // When in buffer mode, we decide to sample here.
      // Later, in `handleAfterSendEvent`, if the replayId is set, we know that we sampled
      // And convert the buffer session to a full session
      const isErrorEventSampled = shouldSampleForBufferEvent(replay, event);

      // Tag errors if it has been sampled in buffer mode, or if it is session mode
      // Only tag transactions if in session mode
      const shouldTagReplayId = isErrorEventSampled || replay.recordingMode === 'session';

      if (shouldTagReplayId) {
        event.tags = { ...event.tags, replayId: replay.getSessionId() };
      }

      return event;
    },
    { id: 'Replay' },
  );
}

/**
 * Create a "span" for each performance entry.
 */
function createPerformanceSpans(
  replay,
  entries,
) {
  return entries.map(({ type, start, end, name, data }) => {
    const response = replay.throttledAddEvent({
      type: EventType.Custom,
      timestamp: start,
      data: {
        tag: 'performanceSpan',
        payload: {
          op: type,
          description: name,
          startTimestamp: start,
          endTimestamp: end,
          data,
        },
      },
    });

    // If response is a string, it means its either THROTTLED or SKIPPED
    return typeof response === 'string' ? Promise.resolve(null) : response;
  });
}

function handleHistory(handlerData) {
  const { from, to } = handlerData;

  const now = Date.now() / 1000;

  return {
    type: 'navigation.push',
    start: now,
    end: now,
    name: to,
    data: {
      previous: from,
    },
  };
}

/**
 * Returns a listener to be added to `addHistoryInstrumentationHandler(listener)`.
 */
function handleHistorySpanListener(replay) {
  return (handlerData) => {
    if (!replay.isEnabled()) {
      return;
    }

    const result = handleHistory(handlerData);

    if (result === null) {
      return;
    }

    // Need to collect visited URLs
    replay.getContext().urls.push(result.name);
    replay.triggerUserActivity();

    replay.addUpdate(() => {
      createPerformanceSpans(replay, [result]);
      // Returning false to flush
      return false;
    });
  };
}

/**
 * Check whether a given request URL should be filtered out. This is so we
 * don't log Sentry ingest requests.
 */
function shouldFilterRequest(replay, url) {
  // If we enabled the `traceInternals` experiment, we want to trace everything
  if (esm_DEBUG_BUILD && replay.getOptions()._experiments.traceInternals) {
    return false;
  }

  return isSentryRequestUrl(url, (0,currentScopes/* getClient */.KU)());
}

/** Add a performance entry breadcrumb */
function addNetworkBreadcrumb(
  replay,
  result,
) {
  if (!replay.isEnabled()) {
    return;
  }

  if (result === null) {
    return;
  }

  if (shouldFilterRequest(replay, result.name)) {
    return;
  }

  replay.addUpdate(() => {
    createPerformanceSpans(replay, [result]);
    // Returning true will cause `addUpdate` to not flush
    // We do not want network requests to cause a flush. This will prevent
    // recurring/polling requests from keeping the replay session alive.
    return true;
  });
}

/** Get the size of a body. */
function getBodySize(body) {
  if (!body) {
    return undefined;
  }

  const textEncoder = new TextEncoder();

  try {
    if (typeof body === 'string') {
      return textEncoder.encode(body).length;
    }

    if (body instanceof URLSearchParams) {
      return textEncoder.encode(body.toString()).length;
    }

    if (body instanceof FormData) {
      const formDataStr = serializeFormData(body);
      return textEncoder.encode(formDataStr).length;
    }

    if (body instanceof Blob) {
      return body.size;
    }

    if (body instanceof ArrayBuffer) {
      return body.byteLength;
    }

    // Currently unhandled types: ArrayBufferView, ReadableStream
  } catch {
    // just return undefined
  }

  return undefined;
}

/** Convert a Content-Length header to number/undefined.  */
function parseContentLengthHeader(header) {
  if (!header) {
    return undefined;
  }

  const size = parseInt(header, 10);
  return isNaN(size) ? undefined : size;
}

/** Merge a warning into an existing network request/response. */
function mergeWarning(
  info,
  warning,
) {
  if (!info) {
    return {
      headers: {},
      size: undefined,
      _meta: {
        warnings: [warning],
      },
    };
  }

  const newMeta = { ...info._meta };
  const existingWarnings = newMeta.warnings || [];
  newMeta.warnings = [...existingWarnings, warning];

  info._meta = newMeta;
  return info;
}

/** Convert ReplayNetworkRequestData to a PerformanceEntry. */
function makeNetworkReplayBreadcrumb(
  type,
  data,
) {
  if (!data) {
    return null;
  }

  const { startTimestamp, endTimestamp, url, method, statusCode, request, response } = data;

  const result = {
    type,
    start: startTimestamp / 1000,
    end: endTimestamp / 1000,
    name: url,
    data: (0,object/* dropUndefinedKeys */.Ce)({
      method,
      statusCode,
      request,
      response,
    }),
  };

  return result;
}

/** Build the request or response part of a replay network breadcrumb that was skipped. */
function buildSkippedNetworkRequestOrResponse(bodySize) {
  return {
    headers: {},
    size: bodySize,
    _meta: {
      warnings: ['URL_SKIPPED'],
    },
  };
}

/** Build the request or response part of a replay network breadcrumb. */
function buildNetworkRequestOrResponse(
  headers,
  bodySize,
  body,
) {
  if (!bodySize && Object.keys(headers).length === 0) {
    return undefined;
  }

  if (!bodySize) {
    return {
      headers,
    };
  }

  if (!body) {
    return {
      headers,
      size: bodySize,
    };
  }

  const info = {
    headers,
    size: bodySize,
  };

  const { body: normalizedBody, warnings } = normalizeNetworkBody(body);
  info.body = normalizedBody;
  if (warnings?.length) {
    info._meta = {
      warnings,
    };
  }

  return info;
}

/** Filter a set of headers */
function getAllowedHeaders(headers, allowedHeaders) {
  return Object.entries(headers).reduce((filteredHeaders, [key, value]) => {
    const normalizedKey = key.toLowerCase();
    // Avoid putting empty strings into the headers
    if (allowedHeaders.includes(normalizedKey) && headers[key]) {
      filteredHeaders[normalizedKey] = value;
    }
    return filteredHeaders;
  }, {});
}

function normalizeNetworkBody(body)

 {
  if (!body || typeof body !== 'string') {
    return {
      body,
    };
  }

  const exceedsSizeLimit = body.length > NETWORK_BODY_MAX_SIZE;
  const isProbablyJson = _strIsProbablyJson(body);

  if (exceedsSizeLimit) {
    const truncatedBody = body.slice(0, NETWORK_BODY_MAX_SIZE);

    if (isProbablyJson) {
      return {
        body: truncatedBody,
        warnings: ['MAYBE_JSON_TRUNCATED'],
      };
    }

    return {
      body: `${truncatedBody}…`,
      warnings: ['TEXT_TRUNCATED'],
    };
  }

  if (isProbablyJson) {
    try {
      const jsonBody = JSON.parse(body);
      return {
        body: jsonBody,
      };
    } catch {
      // fall back to just send the body as string
    }
  }

  return {
    body,
  };
}

function _strIsProbablyJson(str) {
  const first = str[0];
  const last = str[str.length - 1];

  // Simple check: If this does not start & end with {} or [], it's not JSON
  return (first === '[' && last === ']') || (first === '{' && last === '}');
}

/** Match an URL against a list of strings/Regex. */
function urlMatches(url, urls) {
  const fullUrl = getFullUrl(url);

  return (0,string/* stringMatchesSomePattern */.Xr)(fullUrl, urls);
}

/** exported for tests */
function getFullUrl(url, baseURI = esm_WINDOW.document.baseURI) {
  // Short circuit for common cases:
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith(esm_WINDOW.location.origin)) {
    return url;
  }
  const fixedUrl = new URL(url, baseURI);

  // If these do not match, we are not dealing with a relative URL, so just return it
  if (fixedUrl.origin !== new URL(baseURI).origin) {
    return url;
  }

  const fullUrl = fixedUrl.href;

  // Remove trailing slashes, if they don't match the original URL
  if (!url.endsWith('/') && fullUrl.endsWith('/')) {
    return fullUrl.slice(0, -1);
  }

  return fullUrl;
}

/**
 * Capture a fetch breadcrumb to a replay.
 * This adds additional data (where appropriate).
 */
async function captureFetchBreadcrumbToReplay(
  breadcrumb,
  hint,
  options

,
) {
  try {
    const data = await _prepareFetchData(breadcrumb, hint, options);

    // Create a replay performance entry from this breadcrumb
    const result = makeNetworkReplayBreadcrumb('resource.fetch', data);
    addNetworkBreadcrumb(options.replay, result);
  } catch (error) {
    esm_DEBUG_BUILD && esm_logger.exception(error, 'Failed to capture fetch breadcrumb');
  }
}

/**
 * Enrich a breadcrumb with additional data.
 * This has to be sync & mutate the given breadcrumb,
 * as the breadcrumb is afterwards consumed by other handlers.
 */
function enrichFetchBreadcrumb(
  breadcrumb,
  hint,
) {
  const { input, response } = hint;

  const body = input ? getFetchRequestArgBody(input) : undefined;
  const reqSize = getBodySize(body);

  const resSize = response ? parseContentLengthHeader(response.headers.get('content-length')) : undefined;

  if (reqSize !== undefined) {
    breadcrumb.data.request_body_size = reqSize;
  }
  if (resSize !== undefined) {
    breadcrumb.data.response_body_size = resSize;
  }
}

async function _prepareFetchData(
  breadcrumb,
  hint,
  options,
) {
  const now = Date.now();
  const { startTimestamp = now, endTimestamp = now } = hint;

  const {
    url,
    method,
    status_code: statusCode = 0,
    request_body_size: requestBodySize,
    response_body_size: responseBodySize,
  } = breadcrumb.data;

  const captureDetails =
    urlMatches(url, options.networkDetailAllowUrls) && !urlMatches(url, options.networkDetailDenyUrls);

  const request = captureDetails
    ? _getRequestInfo(options, hint.input, requestBodySize)
    : buildSkippedNetworkRequestOrResponse(requestBodySize);
  const response = await _getResponseInfo(captureDetails, options, hint.response, responseBodySize);

  return {
    startTimestamp,
    endTimestamp,
    url,
    method,
    statusCode,
    request,
    response,
  };
}

function _getRequestInfo(
  { networkCaptureBodies, networkRequestHeaders },
  input,
  requestBodySize,
) {
  const headers = input ? getRequestHeaders(input, networkRequestHeaders) : {};

  if (!networkCaptureBodies) {
    return buildNetworkRequestOrResponse(headers, requestBodySize, undefined);
  }

  // We only want to transmit string or string-like bodies
  const requestBody = getFetchRequestArgBody(input);
  const [bodyStr, warning] = getBodyString(requestBody, esm_logger);
  const data = buildNetworkRequestOrResponse(headers, requestBodySize, bodyStr);

  if (warning) {
    return mergeWarning(data, warning);
  }

  return data;
}

/** Exported only for tests. */
async function _getResponseInfo(
  captureDetails,
  {
    networkCaptureBodies,
    networkResponseHeaders,
  },
  response,
  responseBodySize,
) {
  if (!captureDetails && responseBodySize !== undefined) {
    return buildSkippedNetworkRequestOrResponse(responseBodySize);
  }

  const headers = response ? getAllHeaders(response.headers, networkResponseHeaders) : {};

  if (!response || (!networkCaptureBodies && responseBodySize !== undefined)) {
    return buildNetworkRequestOrResponse(headers, responseBodySize, undefined);
  }

  const [bodyText, warning] = await _parseFetchResponseBody(response);
  const result = getResponseData(bodyText, {
    networkCaptureBodies,

    responseBodySize,
    captureDetails,
    headers,
  });

  if (warning) {
    return mergeWarning(result, warning);
  }

  return result;
}

function getResponseData(
  bodyText,
  {
    networkCaptureBodies,
    responseBodySize,
    captureDetails,
    headers,
  }

,
) {
  try {
    const size = bodyText?.length && responseBodySize === undefined ? getBodySize(bodyText) : responseBodySize;

    if (!captureDetails) {
      return buildSkippedNetworkRequestOrResponse(size);
    }

    if (networkCaptureBodies) {
      return buildNetworkRequestOrResponse(headers, size, bodyText);
    }

    return buildNetworkRequestOrResponse(headers, size, undefined);
  } catch (error) {
    esm_DEBUG_BUILD && esm_logger.exception(error, 'Failed to serialize response body');
    // fallback
    return buildNetworkRequestOrResponse(headers, responseBodySize, undefined);
  }
}

async function _parseFetchResponseBody(response) {
  const res = _tryCloneResponse(response);

  if (!res) {
    return [undefined, 'BODY_PARSE_ERROR'];
  }

  try {
    const text = await _tryGetResponseText(res);
    return [text];
  } catch (error) {
    if (error instanceof Error && error.message.indexOf('Timeout') > -1) {
      esm_DEBUG_BUILD && esm_logger.warn('Parsing text body from response timed out');
      return [undefined, 'BODY_PARSE_TIMEOUT'];
    }

    esm_DEBUG_BUILD && esm_logger.exception(error, 'Failed to get text body from response');
    return [undefined, 'BODY_PARSE_ERROR'];
  }
}

function getAllHeaders(headers, allowedHeaders) {
  const allHeaders = {};

  allowedHeaders.forEach(header => {
    if (headers.get(header)) {
      allHeaders[header] = headers.get(header) ;
    }
  });

  return allHeaders;
}

function getRequestHeaders(fetchArgs, allowedHeaders) {
  if (fetchArgs.length === 1 && typeof fetchArgs[0] !== 'string') {
    return getHeadersFromOptions(fetchArgs[0] , allowedHeaders);
  }

  if (fetchArgs.length === 2) {
    return getHeadersFromOptions(fetchArgs[1] , allowedHeaders);
  }

  return {};
}

function getHeadersFromOptions(
  input,
  allowedHeaders,
) {
  if (!input) {
    return {};
  }

  const headers = input.headers;

  if (!headers) {
    return {};
  }

  if (headers instanceof Headers) {
    return getAllHeaders(headers, allowedHeaders);
  }

  // We do not support this, as it is not really documented (anymore?)
  if (Array.isArray(headers)) {
    return {};
  }

  return getAllowedHeaders(headers, allowedHeaders);
}

function _tryCloneResponse(response) {
  try {
    // We have to clone this, as the body can only be read once
    return response.clone();
  } catch (error) {
    // this can throw if the response was already consumed before
    esm_DEBUG_BUILD && esm_logger.exception(error, 'Failed to clone response body');
  }
}

/**
 * Get the response body of a fetch request, or timeout after 500ms.
 * Fetch can return a streaming body, that may not resolve (or not for a long time).
 * If that happens, we rather abort after a short time than keep waiting for this.
 */
function _tryGetResponseText(response) {
  return new Promise((resolve, reject) => {
    const timeout = getNativeImplementation_setTimeout(() => reject(new Error('Timeout while trying to read response body')), 500);

    _getResponseText(response)
      .then(
        txt => resolve(txt),
        reason => reject(reason),
      )
      .finally(() => clearTimeout(timeout));
  });
}

async function _getResponseText(response) {
  // Force this to be a promise, just to be safe
  // eslint-disable-next-line no-return-await
  return await response.text();
}

/**
 * Capture an XHR breadcrumb to a replay.
 * This adds additional data (where appropriate).
 */
async function captureXhrBreadcrumbToReplay(
  breadcrumb,
  hint,
  options,
) {
  try {
    const data = _prepareXhrData(breadcrumb, hint, options);

    // Create a replay performance entry from this breadcrumb
    const result = makeNetworkReplayBreadcrumb('resource.xhr', data);
    addNetworkBreadcrumb(options.replay, result);
  } catch (error) {
    esm_DEBUG_BUILD && esm_logger.exception(error, 'Failed to capture xhr breadcrumb');
  }
}

/**
 * Enrich a breadcrumb with additional data.
 * This has to be sync & mutate the given breadcrumb,
 * as the breadcrumb is afterwards consumed by other handlers.
 */
function enrichXhrBreadcrumb(
  breadcrumb,
  hint,
) {
  const { xhr, input } = hint;

  if (!xhr) {
    return;
  }

  const reqSize = getBodySize(input);
  const resSize = xhr.getResponseHeader('content-length')
    ? parseContentLengthHeader(xhr.getResponseHeader('content-length'))
    : _getBodySize(xhr.response, xhr.responseType);

  if (reqSize !== undefined) {
    breadcrumb.data.request_body_size = reqSize;
  }
  if (resSize !== undefined) {
    breadcrumb.data.response_body_size = resSize;
  }
}

function _prepareXhrData(
  breadcrumb,
  hint,
  options,
) {
  const now = Date.now();
  const { startTimestamp = now, endTimestamp = now, input, xhr } = hint;

  const {
    url,
    method,
    status_code: statusCode = 0,
    request_body_size: requestBodySize,
    response_body_size: responseBodySize,
  } = breadcrumb.data;

  if (!url) {
    return null;
  }

  if (!xhr || !urlMatches(url, options.networkDetailAllowUrls) || urlMatches(url, options.networkDetailDenyUrls)) {
    const request = buildSkippedNetworkRequestOrResponse(requestBodySize);
    const response = buildSkippedNetworkRequestOrResponse(responseBodySize);
    return {
      startTimestamp,
      endTimestamp,
      url,
      method,
      statusCode,
      request,
      response,
    };
  }

  const xhrInfo = xhr[SENTRY_XHR_DATA_KEY];
  const networkRequestHeaders = xhrInfo
    ? getAllowedHeaders(xhrInfo.request_headers, options.networkRequestHeaders)
    : {};
  const networkResponseHeaders = getAllowedHeaders(getResponseHeaders(xhr), options.networkResponseHeaders);

  const [requestBody, requestWarning] = options.networkCaptureBodies ? getBodyString(input, esm_logger) : [undefined];
  const [responseBody, responseWarning] = options.networkCaptureBodies ? _getXhrResponseBody(xhr) : [undefined];

  const request = buildNetworkRequestOrResponse(networkRequestHeaders, requestBodySize, requestBody);
  const response = buildNetworkRequestOrResponse(networkResponseHeaders, responseBodySize, responseBody);

  return {
    startTimestamp,
    endTimestamp,
    url,
    method,
    statusCode,
    request: requestWarning ? mergeWarning(request, requestWarning) : request,
    response: responseWarning ? mergeWarning(response, responseWarning) : response,
  };
}

function getResponseHeaders(xhr) {
  const headers = xhr.getAllResponseHeaders();

  if (!headers) {
    return {};
  }

  return headers.split('\r\n').reduce((acc, line) => {
    const [key, value] = line.split(': ') ;
    if (value) {
      acc[key.toLowerCase()] = value;
    }
    return acc;
  }, {});
}

function _getXhrResponseBody(xhr) {
  // We collect errors that happen, but only log them if we can't get any response body
  const errors = [];

  try {
    return [xhr.responseText];
  } catch (e) {
    errors.push(e);
  }

  // Try to manually parse the response body, if responseText fails
  try {
    return _parseXhrResponse(xhr.response, xhr.responseType);
  } catch (e) {
    errors.push(e);
  }

  esm_DEBUG_BUILD && esm_logger.warn('Failed to get xhr response body', ...errors);

  return [undefined];
}

/**
 * Get the string representation of the XHR response.
 * Based on MDN, these are the possible types of the response:
 * string
 * ArrayBuffer
 * Blob
 * Document
 * POJO
 *
 * Exported only for tests.
 */
function _parseXhrResponse(
  body,
  responseType,
) {
  try {
    if (typeof body === 'string') {
      return [body];
    }

    if (body instanceof Document) {
      return [body.body.outerHTML];
    }

    if (responseType === 'json' && body && typeof body === 'object') {
      return [JSON.stringify(body)];
    }

    if (!body) {
      return [undefined];
    }
  } catch (error) {
    esm_DEBUG_BUILD && esm_logger.exception(error, 'Failed to serialize body', body);
    return [undefined, 'BODY_PARSE_ERROR'];
  }

  esm_DEBUG_BUILD && esm_logger.info('Skipping network body because of body type', body);

  return [undefined, 'UNPARSEABLE_BODY_TYPE'];
}

function _getBodySize(
  body,
  responseType,
) {
  try {
    const bodyStr = responseType === 'json' && body && typeof body === 'object' ? JSON.stringify(body) : body;
    return getBodySize(bodyStr);
  } catch {
    return undefined;
  }
}

/**
 * This method does two things:
 * - It enriches the regular XHR/fetch breadcrumbs with request/response size data
 * - It captures the XHR/fetch breadcrumbs to the replay
 *   (enriching it with further data that is _not_ added to the regular breadcrumbs)
 */
function handleNetworkBreadcrumbs(replay) {
  const client = (0,currentScopes/* getClient */.KU)();

  try {
    const {
      networkDetailAllowUrls,
      networkDetailDenyUrls,
      networkCaptureBodies,
      networkRequestHeaders,
      networkResponseHeaders,
    } = replay.getOptions();

    const options = {
      replay,
      networkDetailAllowUrls,
      networkDetailDenyUrls,
      networkCaptureBodies,
      networkRequestHeaders,
      networkResponseHeaders,
    };

    if (client) {
      client.on('beforeAddBreadcrumb', (breadcrumb, hint) => beforeAddNetworkBreadcrumb(options, breadcrumb, hint));
    }
  } catch {
    // Do nothing
  }
}

/** just exported for tests */
function beforeAddNetworkBreadcrumb(
  options,
  breadcrumb,
  hint,
) {
  if (!breadcrumb.data) {
    return;
  }

  try {
    if (_isXhrBreadcrumb(breadcrumb) && _isXhrHint(hint)) {
      // This has to be sync, as we need to ensure the breadcrumb is enriched in the same tick
      // Because the hook runs synchronously, and the breadcrumb is afterwards passed on
      // So any async mutations to it will not be reflected in the final breadcrumb
      enrichXhrBreadcrumb(breadcrumb, hint);

      // This call should not reject
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      captureXhrBreadcrumbToReplay(breadcrumb, hint, options);
    }

    if (_isFetchBreadcrumb(breadcrumb) && _isFetchHint(hint)) {
      // This has to be sync, as we need to ensure the breadcrumb is enriched in the same tick
      // Because the hook runs synchronously, and the breadcrumb is afterwards passed on
      // So any async mutations to it will not be reflected in the final breadcrumb
      enrichFetchBreadcrumb(breadcrumb, hint);

      // This call should not reject
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      captureFetchBreadcrumbToReplay(breadcrumb, hint, options);
    }
  } catch (e) {
    esm_DEBUG_BUILD && esm_logger.exception(e, 'Error when enriching network breadcrumb');
  }
}

function _isXhrBreadcrumb(breadcrumb) {
  return breadcrumb.category === 'xhr';
}

function _isFetchBreadcrumb(breadcrumb) {
  return breadcrumb.category === 'fetch';
}

function _isXhrHint(hint) {
  return hint?.xhr;
}

function _isFetchHint(hint) {
  return hint?.response;
}

/**
 * Add global listeners that cannot be removed.
 */
function addGlobalListeners(
  replay,
  { autoFlushOnFeedback },
) {
  // Listeners from core SDK //
  const client = (0,currentScopes/* getClient */.KU)();

  addClickKeypressInstrumentationHandler(handleDomListener(replay));
  addHistoryInstrumentationHandler(handleHistorySpanListener(replay));
  handleBreadcrumbs(replay);
  handleNetworkBreadcrumbs(replay);

  // Tag all (non replay) events that get sent to Sentry with the current
  // replay ID so that we can reference them later in the UI
  const eventProcessor = handleGlobalEventListener(replay);
  addEventProcessor(eventProcessor);

  // If a custom client has no hooks yet, we continue to use the "old" implementation
  if (client) {
    client.on('beforeSendEvent', handleBeforeSendEvent(replay));
    client.on('afterSendEvent', handleAfterSendEvent(replay));
    client.on('createDsc', (dsc) => {
      const replayId = replay.getSessionId();
      // We do not want to set the DSC when in buffer mode, as that means the replay has not been sent (yet)
      if (replayId && replay.isEnabled() && replay.recordingMode === 'session') {
        // Ensure to check that the session is still active - it could have expired in the meanwhile
        const isSessionActive = replay.checkAndHandleExpiredSession();
        if (isSessionActive) {
          dsc.replay_id = replayId;
        }
      }
    });

    client.on('spanStart', span => {
      replay.lastActiveSpan = span;
    });

    // We may be missing the initial spanStart due to timing issues,
    // so we capture it on finish again.
    client.on('spanEnd', span => {
      replay.lastActiveSpan = span;
    });

    // We want to attach the replay id to the feedback event
    client.on('beforeSendFeedback', async (feedbackEvent, options) => {
      const replayId = replay.getSessionId();
      if (options?.includeReplay && replay.isEnabled() && replayId && feedbackEvent.contexts?.feedback) {
        // In case the feedback is sent via API and not through our widget, we want to flush replay
        if (feedbackEvent.contexts.feedback.source === 'api' && autoFlushOnFeedback) {
          await replay.flush();
        }
        feedbackEvent.contexts.feedback.replay_id = replayId;
      }
    });

    if (autoFlushOnFeedback) {
      client.on('openFeedbackWidget', async () => {
        await replay.flush();
      });
    }
  }
}

/**
 * Create a "span" for the total amount of memory being used by JS objects
 * (including v8 internal objects).
 */
async function addMemoryEntry(replay) {
  // window.performance.memory is a non-standard API and doesn't work on all browsers, so we try-catch this
  try {
    return Promise.all(
      createPerformanceSpans(replay, [
        // @ts-expect-error memory doesn't exist on type Performance as the API is non-standard (we check that it exists above)
        createMemoryEntry(esm_WINDOW.performance.memory),
      ]),
    );
  } catch (error) {
    // Do nothing
    return [];
  }
}

function createMemoryEntry(memoryEntry) {
  const { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = memoryEntry;
  // we don't want to use `getAbsoluteTime` because it adds the event time to the
  // time origin, so we get the current timestamp instead
  const time = Date.now() / 1000;
  return {
    type: 'memory',
    name: 'memory',
    start: time,
    end: time,
    data: {
      memory: {
        jsHeapSizeLimit,
        totalJSHeapSize,
        usedJSHeapSize,
      },
    },
  };
}

/**
 * Heavily simplified debounce function based on lodash.debounce.
 *
 * This function takes a callback function (@param fun) and delays its invocation
 * by @param wait milliseconds. Optionally, a maxWait can be specified in @param options,
 * which ensures that the callback is invoked at least once after the specified max. wait time.
 *
 * @param func the function whose invocation is to be debounced
 * @param wait the minimum time until the function is invoked after it was called once
 * @param options the options object, which can contain the `maxWait` property
 *
 * @returns the debounced version of the function, which needs to be called at least once to start the
 *          debouncing process. Subsequent calls will reset the debouncing timer and, in case @paramfunc
 *          was already invoked in the meantime, return @param func's return value.
 *          The debounced function has two additional properties:
 *          - `flush`: Invokes the debounced function immediately and returns its return value
 *          - `cancel`: Cancels the debouncing process and resets the debouncing timer
 */
function debounce(func, wait, options) {
  let callbackReturnValue;

  let timerId;
  let maxTimerId;

  const maxWait = options?.maxWait ? Math.max(options.maxWait, wait) : 0;

  function invokeFunc() {
    cancelTimers();
    callbackReturnValue = func();
    return callbackReturnValue;
  }

  function cancelTimers() {
    timerId !== undefined && clearTimeout(timerId);
    maxTimerId !== undefined && clearTimeout(maxTimerId);
    timerId = maxTimerId = undefined;
  }

  function flush() {
    if (timerId !== undefined || maxTimerId !== undefined) {
      return invokeFunc();
    }
    return callbackReturnValue;
  }

  function debounced() {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = getNativeImplementation_setTimeout(invokeFunc, wait);

    if (maxWait && maxTimerId === undefined) {
      maxTimerId = getNativeImplementation_setTimeout(invokeFunc, maxWait);
    }

    return callbackReturnValue;
  }

  debounced.cancel = cancelTimers;
  debounced.flush = flush;
  return debounced;
}

const NAVIGATOR = worldwide/* GLOBAL_OBJ */.O.navigator;

/**
 *  Disable sampling mousemove events on iOS browsers as this can cause blocking the main thread
 *  https://github.com/getsentry/sentry-javascript/issues/14534
 */
function getRecordingSamplingOptions() {
  if (
    /iPhone|iPad|iPod/i.test(NAVIGATOR?.userAgent ?? '') ||
    (/Macintosh/i.test(NAVIGATOR?.userAgent ?? '') && NAVIGATOR?.maxTouchPoints && NAVIGATOR?.maxTouchPoints > 1)
  ) {
    return {
      sampling: {
        mousemove: false,
      },
    };
  }

  return {};
}

/**
 * Handler for recording events.
 *
 * Adds to event buffer, and has varying flushing behaviors if the event was a checkout.
 */
function getHandleRecordingEmit(replay) {
  let hadFirstEvent = false;

  return (event, _isCheckout) => {
    // If this is false, it means session is expired, create and a new session and wait for checkout
    if (!replay.checkAndHandleExpiredSession()) {
      esm_DEBUG_BUILD && esm_logger.warn('Received replay event after session expired.');

      return;
    }

    // `_isCheckout` is only set when the checkout is due to `checkoutEveryNms`
    // We also want to treat the first event as a checkout, so we handle this specifically here
    const isCheckout = _isCheckout || !hadFirstEvent;
    hadFirstEvent = true;

    if (replay.clickDetector) {
      updateClickDetectorForRecordingEvent(replay.clickDetector, event);
    }

    // The handler returns `true` if we do not want to trigger debounced flush, `false` if we want to debounce flush.
    replay.addUpdate(() => {
      // The session is always started immediately on pageload/init, but for
      // error-only replays, it should reflect the most recent checkout
      // when an error occurs. Clear any state that happens before this current
      // checkout. This needs to happen before `addEvent()` which updates state
      // dependent on this reset.
      if (replay.recordingMode === 'buffer' && isCheckout) {
        replay.setInitialState();
      }

      // If the event is not added (e.g. due to being paused, disabled, or out of the max replay duration),
      // Skip all further steps
      if (!addEventSync(replay, event, isCheckout)) {
        // Return true to skip scheduling a debounced flush
        return true;
      }

      // Different behavior for full snapshots (type=2), ignore other event types
      // See https://github.com/rrweb-io/rrweb/blob/d8f9290ca496712aa1e7d472549480c4e7876594/packages/rrweb/src/types.ts#L16
      if (!isCheckout) {
        return false;
      }

      const session = replay.session;

      // Additionally, create a meta event that will capture certain SDK settings.
      // In order to handle buffer mode, this needs to either be done when we
      // receive checkout events or at flush time. We have an experimental mode
      // to perform multiple checkouts a session (the idea is to improve
      // seeking during playback), so also only include if segmentId is 0
      // (handled in `addSettingsEvent`).
      //
      // `isCheckout` is always true, but want to be explicit that it should
      // only be added for checkouts
      addSettingsEvent(replay, isCheckout);

      // When in buffer mode, make sure we adjust the session started date to the current earliest event of the buffer
      // this should usually be the timestamp of the checkout event, but to be safe...
      if (replay.recordingMode === 'buffer' && session && replay.eventBuffer) {
        const earliestEvent = replay.eventBuffer.getEarliestTimestamp();
        if (earliestEvent) {
          esm_DEBUG_BUILD &&
            esm_logger.info(`Updating session start time to earliest event in buffer to ${new Date(earliestEvent)}`);

          session.started = earliestEvent;

          if (replay.getOptions().stickySession) {
            saveSession(session);
          }
        }
      }

      // If there is a previousSessionId after a full snapshot occurs, then
      // the replay session was started due to session expiration. The new session
      // is started before triggering a new checkout and contains the id
      // of the previous session. Do not immediately flush in this case
      // to avoid capturing only the checkout and instead the replay will
      // be captured if they perform any follow-up actions.
      if (session?.previousSessionId) {
        return true;
      }

      if (replay.recordingMode === 'session') {
        // If the full snapshot is due to an initial load, we will not have
        // a previous session ID. In this case, we want to buffer events
        // for a set amount of time before flushing. This can help avoid
        // capturing replays of users that immediately close the window.

        // This should never reject
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        void replay.flush();
      }

      return true;
    });
  };
}

/**
 * Exported for tests
 */
function createOptionsEvent(replay) {
  const options = replay.getOptions();
  return {
    type: EventType.Custom,
    timestamp: Date.now(),
    data: {
      tag: 'options',
      payload: {
        shouldRecordCanvas: replay.isRecordingCanvas(),
        sessionSampleRate: options.sessionSampleRate,
        errorSampleRate: options.errorSampleRate,
        useCompressionOption: options.useCompression,
        blockAllMedia: options.blockAllMedia,
        maskAllText: options.maskAllText,
        maskAllInputs: options.maskAllInputs,
        useCompression: replay.eventBuffer ? replay.eventBuffer.type === 'worker' : false,
        networkDetailHasUrls: options.networkDetailAllowUrls.length > 0,
        networkCaptureBodies: options.networkCaptureBodies,
        networkRequestHasHeaders: options.networkRequestHeaders.length > 0,
        networkResponseHasHeaders: options.networkResponseHeaders.length > 0,
      },
    },
  };
}

/**
 * Add a "meta" event that contains a simplified view on current configuration
 * options. This should only be included on the first segment of a recording.
 */
function addSettingsEvent(replay, isCheckout) {
  // Only need to add this event when sending the first segment
  if (!isCheckout || !replay.session || replay.session.segmentId !== 0) {
    return;
  }

  addEventSync(replay, createOptionsEvent(replay), false);
}

/**
 * Create a replay envelope ready to be sent.
 * This includes both the replay event, as well as the recording data.
 */
function createReplayEnvelope(
  replayEvent,
  recordingData,
  dsn,
  tunnel,
) {
  return (0,utils_hoist_envelope/* createEnvelope */.h4)(
    (0,utils_hoist_envelope/* createEventEnvelopeHeaders */.n2)(replayEvent, (0,utils_hoist_envelope/* getSdkMetadataForEnvelopeHeader */.Cj)(replayEvent), tunnel, dsn),
    [
      [{ type: 'replay_event' }, replayEvent],
      [
        {
          type: 'replay_recording',
          // If string then we need to encode to UTF8, otherwise will have
          // wrong size. TextEncoder has similar browser support to
          // MutationObserver, although it does not accept IE11.
          length:
            typeof recordingData === 'string' ? new TextEncoder().encode(recordingData).length : recordingData.length,
        },
        recordingData,
      ],
    ],
  );
}

/**
 * Prepare the recording data ready to be sent.
 */
function prepareRecordingData({
  recordingData,
  headers,
}

) {
  let payloadWithSequence;

  // XXX: newline is needed to separate sequence id from events
  const replayHeaders = `${JSON.stringify(headers)}
`;

  if (typeof recordingData === 'string') {
    payloadWithSequence = `${replayHeaders}${recordingData}`;
  } else {
    const enc = new TextEncoder();
    // XXX: newline is needed to separate sequence id from events
    const sequence = enc.encode(replayHeaders);
    // Merge the two Uint8Arrays
    payloadWithSequence = new Uint8Array(sequence.length + recordingData.length);
    payloadWithSequence.set(sequence);
    payloadWithSequence.set(recordingData, sequence.length);
  }

  return payloadWithSequence;
}

/**
 * Prepare a replay event & enrich it with the SDK metadata.
 */
async function prepareReplayEvent({
  client,
  scope,
  replayId: event_id,
  event,
}

) {
  const integrations =
    typeof client['_integrations'] === 'object' &&
    client['_integrations'] !== null &&
    !Array.isArray(client['_integrations'])
      ? Object.keys(client['_integrations'])
      : undefined;

  const eventHint = { event_id, integrations };

  client.emit('preprocessEvent', event, eventHint);

  const preparedEvent = (await prepareEvent(
    client.getOptions(),
    event,
    eventHint,
    scope,
    client,
    (0,currentScopes/* getIsolationScope */.rm)(),
  )) ;

  // If e.g. a global event processor returned null
  if (!preparedEvent) {
    return null;
  }

  client.emit('postprocessEvent', preparedEvent, eventHint);

  // This normally happens in browser client "_prepareEvent"
  // but since we do not use this private method from the client, but rather the plain import
  // we need to do this manually.
  preparedEvent.platform = preparedEvent.platform || 'javascript';

  // extract the SDK name because `client._prepareEvent` doesn't add it to the event
  const metadata = client.getSdkMetadata();
  const { name, version } = metadata?.sdk || {};

  preparedEvent.sdk = {
    ...preparedEvent.sdk,
    name: name || 'sentry.javascript.unknown',
    version: version || '0.0.0',
  };

  return preparedEvent;
}

/**
 * Send replay attachment using `fetch()`
 */
async function sendReplayRequest({
  recordingData,
  replayId,
  segmentId: segment_id,
  eventContext,
  timestamp,
  session,
}) {
  const preparedRecordingData = prepareRecordingData({
    recordingData,
    headers: {
      segment_id,
    },
  });

  const { urls, errorIds, traceIds, initialTimestamp } = eventContext;

  const client = (0,currentScopes/* getClient */.KU)();
  const scope = (0,currentScopes/* getCurrentScope */.o5)();
  const transport = client?.getTransport();
  const dsn = client?.getDsn();

  if (!client || !transport || !dsn || !session.sampled) {
    return resolvedSyncPromise({});
  }

  const baseEvent = {
    type: REPLAY_EVENT_NAME,
    replay_start_timestamp: initialTimestamp / 1000,
    timestamp: timestamp / 1000,
    error_ids: errorIds,
    trace_ids: traceIds,
    urls,
    replay_id: replayId,
    segment_id,
    replay_type: session.sampled,
  };

  const replayEvent = await prepareReplayEvent({ scope, client, replayId, event: baseEvent });

  if (!replayEvent) {
    // Taken from baseclient's `_processEvent` method, where this is handled for errors/transactions
    client.recordDroppedEvent('event_processor', 'replay');
    esm_DEBUG_BUILD && esm_logger.info('An event processor returned `null`, will not send event.');
    return resolvedSyncPromise({});
  }

  /*
  For reference, the fully built event looks something like this:
  {
      "type": "replay_event",
      "timestamp": 1670837008.634,
      "error_ids": [
          "errorId"
      ],
      "trace_ids": [
          "traceId"
      ],
      "urls": [
          "https://example.com"
      ],
      "replay_id": "eventId",
      "segment_id": 3,
      "replay_type": "error",
      "platform": "javascript",
      "event_id": "eventId",
      "environment": "production",
      "sdk": {
          "integrations": [
              "BrowserTracing",
              "Replay"
          ],
          "name": "sentry.javascript.browser",
          "version": "7.25.0"
      },
      "sdkProcessingMetadata": {},
      "contexts": {
      },
  }
  */

  // Prevent this data (which, if it exists, was used in earlier steps in the processing pipeline) from being sent to
  // sentry. (Note: Our use of this property comes and goes with whatever we might be debugging, whatever hacks we may
  // have temporarily added, etc. Even if we don't happen to be using it at some point in the future, let's not get rid
  // of this `delete`, lest we miss putting it back in the next time the property is in use.)
  delete replayEvent.sdkProcessingMetadata;

  const envelope = createReplayEnvelope(replayEvent, preparedRecordingData, dsn, client.getOptions().tunnel);

  let response;

  try {
    response = await transport.send(envelope);
  } catch (err) {
    const error = new Error(UNABLE_TO_SEND_REPLAY);

    try {
      // In case browsers don't allow this property to be writable
      // @ts-expect-error This needs lib es2022 and newer
      error.cause = err;
    } catch {
      // nothing to do
    }
    throw error;
  }

  // If the status code is invalid, we want to immediately stop & not retry
  if (typeof response.statusCode === 'number' && (response.statusCode < 200 || response.statusCode >= 300)) {
    throw new TransportStatusCodeError(response.statusCode);
  }

  const rateLimits = updateRateLimits({}, response);
  if (isRateLimited(rateLimits, 'replay')) {
    throw new RateLimitError(rateLimits);
  }

  return response;
}

/**
 * This error indicates that the transport returned an invalid status code.
 */
class TransportStatusCodeError extends Error {
   constructor(statusCode) {
    super(`Transport returned status code ${statusCode}`);
  }
}

/**
 * This error indicates that we hit a rate limit API error.
 */
class RateLimitError extends Error {

   constructor(rateLimits) {
    super('Rate limit hit');
    this.rateLimits = rateLimits;
  }
}

/**
 * Finalize and send the current replay event to Sentry
 */
async function sendReplay(
  replayData,
  retryConfig = {
    count: 0,
    interval: RETRY_BASE_INTERVAL,
  },
) {
  const { recordingData, onError } = replayData;

  // short circuit if there's no events to upload (this shouldn't happen as _runFlush makes this check)
  if (!recordingData.length) {
    return;
  }

  try {
    await sendReplayRequest(replayData);
    return true;
  } catch (err) {
    if (err instanceof TransportStatusCodeError || err instanceof RateLimitError) {
      throw err;
    }

    // Capture error for every failed replay
    setContext('Replays', {
      _retryCount: retryConfig.count,
    });

    if (onError) {
      onError(err);
    }

    // If an error happened here, it's likely that uploading the attachment
    // failed, we'll can retry with the same events payload
    if (retryConfig.count >= RETRY_MAX_COUNT) {
      const error = new Error(`${UNABLE_TO_SEND_REPLAY} - max retries exceeded`);

      try {
        // In case browsers don't allow this property to be writable
        // @ts-expect-error This needs lib es2022 and newer
        error.cause = err;
      } catch {
        // nothing to do
      }

      throw error;
    }

    // will retry in intervals of 5, 10, 30
    retryConfig.interval *= ++retryConfig.count;

    return new Promise((resolve, reject) => {
      getNativeImplementation_setTimeout(async () => {
        try {
          await sendReplay(replayData, retryConfig);
          resolve(true);
        } catch (err) {
          reject(err);
        }
      }, retryConfig.interval);
    });
  }
}

const THROTTLED = '__THROTTLED';
const SKIPPED = '__SKIPPED';

/**
 * Create a throttled function off a given function.
 * When calling the throttled function, it will call the original function only
 * if it hasn't been called more than `maxCount` times in the last `durationSeconds`.
 *
 * Returns `THROTTLED` if throttled for the first time, after that `SKIPPED`,
 * or else the return value of the original function.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function throttle(
  fn,
  maxCount,
  durationSeconds,
) {
  const counter = new Map();

  const _cleanup = (now) => {
    const threshold = now - durationSeconds;
    counter.forEach((_value, key) => {
      if (key < threshold) {
        counter.delete(key);
      }
    });
  };

  const _getTotalCount = () => {
    return [...counter.values()].reduce((a, b) => a + b, 0);
  };

  let isThrottled = false;

  return (...rest) => {
    // Date in second-precision, which we use as basis for the throttling
    const now = Math.floor(Date.now() / 1000);

    // First, make sure to delete any old entries
    _cleanup(now);

    // If already over limit, do nothing
    if (_getTotalCount() >= maxCount) {
      const wasThrottled = isThrottled;
      isThrottled = true;
      return wasThrottled ? SKIPPED : THROTTLED;
    }

    isThrottled = false;
    const count = counter.get(now) || 0;
    counter.set(now, count + 1);

    return fn(...rest);
  };
}

/* eslint-disable max-lines */ // TODO: We might want to split this file up

/**
 * The main replay container class, which holds all the state and methods for recording and sending replays.
 */
class ReplayContainer  {

  /**
   * Recording can happen in one of two modes:
   *   - session: Record the whole session, sending it continuously
   *   - buffer: Always keep the last 60s of recording, requires:
   *     - having replaysOnErrorSampleRate > 0 to capture replay when an error occurs
   *     - or calling `flush()` to send the replay
   */

  /**
   * The current or last active span.
   * This is only available when performance is enabled.
   */

  /**
   * These are here so we can overwrite them in tests etc.
   * @hidden
   */

  /** The replay has to be manually started, because no sample rate (neither session or error) was provided. */

  /**
   * Options to pass to `rrweb.record()`
   */

  /**
   * Timestamp of the last user activity. This lives across sessions.
   */

  /**
   * Is the integration currently active?
   */

  /**
   * Paused is a state where:
   * - DOM Recording is not listening at all
   * - Nothing will be added to event buffer (e.g. core SDK events)
   */

  /**
   * Have we attached listeners to the core SDK?
   * Note we have to track this as there is no way to remove instrumentation handlers.
   */

  /**
   * Function to stop recording
   */

  /**
   * Internal use for canvas recording options
   */

  /**
   * Handle when visibility of the page content changes. Opening a new tab will
   * cause the state to change to hidden because of content of current page will
   * be hidden. Likewise, moving a different window to cover the contents of the
   * page will also trigger a change to a hidden state.
   */

  /**
   * Handle when page is blurred
   */

  /**
   * Handle when page is focused
   */

  /** Ensure page remains active when a key is pressed. */

   constructor({
    options,
    recordingOptions,
  }

) {
    this.eventBuffer = null;
    this.performanceEntries = [];
    this.replayPerformanceEntries = [];
    this.recordingMode = 'session';
    this.timeouts = {
      sessionIdlePause: SESSION_IDLE_PAUSE_DURATION,
      sessionIdleExpire: SESSION_IDLE_EXPIRE_DURATION,
    } ;
    this._lastActivity = Date.now();
    this._isEnabled = false;
    this._isPaused = false;
    this._requiresManualStart = false;
    this._hasInitializedCoreListeners = false;
    this._context = {
      errorIds: new Set(),
      traceIds: new Set(),
      urls: [],
      initialTimestamp: Date.now(),
      initialUrl: '',
    };

    this._recordingOptions = recordingOptions;
    this._options = options;

    this._debouncedFlush = debounce(() => this._flush(), this._options.flushMinDelay, {
      maxWait: this._options.flushMaxDelay,
    });

    this._throttledAddEvent = throttle(
      (event, isCheckout) => addEvent(this, event, isCheckout),
      // Max 300 events...
      300,
      // ... per 5s
      5,
    );

    const { slowClickTimeout, slowClickIgnoreSelectors } = this.getOptions();

    const slowClickConfig = slowClickTimeout
      ? {
          threshold: Math.min(SLOW_CLICK_THRESHOLD, slowClickTimeout),
          timeout: slowClickTimeout,
          scrollTimeout: SLOW_CLICK_SCROLL_TIMEOUT,
          ignoreSelector: slowClickIgnoreSelectors ? slowClickIgnoreSelectors.join(',') : '',
        }
      : undefined;

    if (slowClickConfig) {
      this.clickDetector = new ClickDetector(this, slowClickConfig);
    }

    // Configure replay logger w/ experimental options
    if (esm_DEBUG_BUILD) {
      const experiments = options._experiments;
      esm_logger.setConfig({
        captureExceptions: !!experiments.captureExceptions,
        traceInternals: !!experiments.traceInternals,
      });
    }

    // We set these handler properties as class properties, to make binding/unbinding them easier
    this._handleVisibilityChange = () => {
      if (esm_WINDOW.document.visibilityState === 'visible') {
        this._doChangeToForegroundTasks();
      } else {
        this._doChangeToBackgroundTasks();
      }
    };

    /**
     * Handle when page is blurred
     */
    this._handleWindowBlur = () => {
      const breadcrumb = createBreadcrumb({
        category: 'ui.blur',
      });

      // Do not count blur as a user action -- it's part of the process of them
      // leaving the page
      this._doChangeToBackgroundTasks(breadcrumb);
    };

    this._handleWindowFocus = () => {
      const breadcrumb = createBreadcrumb({
        category: 'ui.focus',
      });

      // Do not count focus as a user action -- instead wait until they focus and
      // interactive with page
      this._doChangeToForegroundTasks(breadcrumb);
    };

    /** Ensure page remains active when a key is pressed. */
    this._handleKeyboardEvent = (event) => {
      handleKeyboardEvent(this, event);
    };
  }

  /** Get the event context. */
   getContext() {
    return this._context;
  }

  /** If recording is currently enabled. */
   isEnabled() {
    return this._isEnabled;
  }

  /** If recording is currently paused. */
   isPaused() {
    return this._isPaused;
  }

  /**
   * Determine if canvas recording is enabled
   */
   isRecordingCanvas() {
    return Boolean(this._canvas);
  }

  /** Get the replay integration options. */
   getOptions() {
    return this._options;
  }

  /** A wrapper to conditionally capture exceptions. */
   handleException(error) {
    esm_DEBUG_BUILD && esm_logger.exception(error);
    if (this._options.onError) {
      this._options.onError(error);
    }
  }

  /**
   * Initializes the plugin based on sampling configuration. Should not be
   * called outside of constructor.
   */
   initializeSampling(previousSessionId) {
    const { errorSampleRate, sessionSampleRate } = this._options;

    // If neither sample rate is > 0, then do nothing - user will need to call one of
    // `start()` or `startBuffering` themselves.
    const requiresManualStart = errorSampleRate <= 0 && sessionSampleRate <= 0;

    this._requiresManualStart = requiresManualStart;

    if (requiresManualStart) {
      return;
    }

    // Otherwise if there is _any_ sample rate set, try to load an existing
    // session, or create a new one.
    this._initializeSessionForSampling(previousSessionId);

    if (!this.session) {
      // This should not happen, something wrong has occurred
      esm_DEBUG_BUILD && esm_logger.exception(new Error('Unable to initialize and create session'));
      return;
    }

    if (this.session.sampled === false) {
      // This should only occur if `errorSampleRate` is 0 and was unsampled for
      // session-based replay. In this case there is nothing to do.
      return;
    }

    // If segmentId > 0, it means we've previously already captured this session
    // In this case, we still want to continue in `session` recording mode
    this.recordingMode = this.session.sampled === 'buffer' && this.session.segmentId === 0 ? 'buffer' : 'session';

    esm_DEBUG_BUILD && esm_logger.infoTick(`Starting replay in ${this.recordingMode} mode`);

    this._initializeRecording();
  }

  /**
   * Start a replay regardless of sampling rate. Calling this will always
   * create a new session. Will log a message if replay is already in progress.
   *
   * Creates or loads a session, attaches listeners to varying events (DOM,
   * _performanceObserver, Recording, Sentry SDK, etc)
   */
   start() {
    if (this._isEnabled && this.recordingMode === 'session') {
      esm_DEBUG_BUILD && esm_logger.info('Recording is already in progress');
      return;
    }

    if (this._isEnabled && this.recordingMode === 'buffer') {
      esm_DEBUG_BUILD && esm_logger.info('Buffering is in progress, call `flush()` to save the replay');
      return;
    }

    esm_DEBUG_BUILD && esm_logger.infoTick('Starting replay in session mode');

    // Required as user activity is initially set in
    // constructor, so if `start()` is called after
    // session idle expiration, a replay will not be
    // created due to an idle timeout.
    this._updateUserActivity();

    const session = loadOrCreateSession(
      {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
      },
      {
        stickySession: this._options.stickySession,
        // This is intentional: create a new session-based replay when calling `start()`
        sessionSampleRate: 1,
        allowBuffering: false,
      },
    );

    this.session = session;

    this._initializeRecording();
  }

  /**
   * Start replay buffering. Buffers until `flush()` is called or, if
   * `replaysOnErrorSampleRate` > 0, an error occurs.
   */
   startBuffering() {
    if (this._isEnabled) {
      esm_DEBUG_BUILD && esm_logger.info('Buffering is in progress, call `flush()` to save the replay');
      return;
    }

    esm_DEBUG_BUILD && esm_logger.infoTick('Starting replay in buffer mode');

    const session = loadOrCreateSession(
      {
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        maxReplayDuration: this._options.maxReplayDuration,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 0,
        allowBuffering: true,
      },
    );

    this.session = session;

    this.recordingMode = 'buffer';
    this._initializeRecording();
  }

  /**
   * Start recording.
   *
   * Note that this will cause a new DOM checkout
   */
   startRecording() {
    try {
      const canvasOptions = this._canvas;

      this._stopRecording = record({
        ...this._recordingOptions,
        // When running in error sampling mode, we need to overwrite `checkoutEveryNms`
        // Without this, it would record forever, until an error happens, which we don't want
        // instead, we'll always keep the last 60 seconds of replay before an error happened
        ...(this.recordingMode === 'buffer'
          ? { checkoutEveryNms: BUFFER_CHECKOUT_TIME }
          : // Otherwise, use experimental option w/ min checkout time of 6 minutes
            // This is to improve playback seeking as there could potentially be
            // less mutations to process in the worse cases.
            //
            // checkout by "N" events is probably ideal, but means we have less
            // control about the number of checkouts we make (which generally
            // increases replay size)
            this._options._experiments.continuousCheckout && {
              // Minimum checkout time is 6 minutes
              checkoutEveryNms: Math.max(360000, this._options._experiments.continuousCheckout),
            }),
        emit: getHandleRecordingEmit(this),
        ...getRecordingSamplingOptions(),
        onMutation: this._onMutationHandler.bind(this),
        ...(canvasOptions
          ? {
              recordCanvas: canvasOptions.recordCanvas,
              getCanvasManager: canvasOptions.getCanvasManager,
              sampling: canvasOptions.sampling,
              dataURLOptions: canvasOptions.dataURLOptions,
            }
          : {}),
      });
    } catch (err) {
      this.handleException(err);
    }
  }

  /**
   * Stops the recording, if it was running.
   *
   * Returns true if it was previously stopped, or is now stopped,
   * otherwise false.
   */
   stopRecording() {
    try {
      if (this._stopRecording) {
        this._stopRecording();
        this._stopRecording = undefined;
      }

      return true;
    } catch (err) {
      this.handleException(err);
      return false;
    }
  }

  /**
   * Currently, this needs to be manually called (e.g. for tests). Sentry SDK
   * does not support a teardown
   */
   async stop({ forceFlush = false, reason } = {}) {
    if (!this._isEnabled) {
      return;
    }

    // We can't move `_isEnabled` after awaiting a flush, otherwise we can
    // enter into an infinite loop when `stop()` is called while flushing.
    this._isEnabled = false;

    try {
      esm_DEBUG_BUILD && esm_logger.info(`Stopping Replay${reason ? ` triggered by ${reason}` : ''}`);

      resetReplayIdOnDynamicSamplingContext();

      this._removeListeners();
      this.stopRecording();

      this._debouncedFlush.cancel();
      // See comment above re: `_isEnabled`, we "force" a flush, ignoring the
      // `_isEnabled` state of the plugin since it was disabled above.
      if (forceFlush) {
        await this._flush({ force: true });
      }

      // After flush, destroy event buffer
      this.eventBuffer?.destroy();
      this.eventBuffer = null;

      // Clear session from session storage, note this means if a new session
      // is started after, it will not have `previousSessionId`
      clearSession(this);
    } catch (err) {
      this.handleException(err);
    }
  }

  /**
   * Pause some replay functionality. See comments for `_isPaused`.
   * This differs from stop as this only stops DOM recording, it is
   * not as thorough of a shutdown as `stop()`.
   */
   pause() {
    if (this._isPaused) {
      return;
    }

    this._isPaused = true;
    this.stopRecording();

    esm_DEBUG_BUILD && esm_logger.info('Pausing replay');
  }

  /**
   * Resumes recording, see notes for `pause().
   *
   * Note that calling `startRecording()` here will cause a
   * new DOM checkout.`
   */
   resume() {
    if (!this._isPaused || !this._checkSession()) {
      return;
    }

    this._isPaused = false;
    this.startRecording();

    esm_DEBUG_BUILD && esm_logger.info('Resuming replay');
  }

  /**
   * If not in "session" recording mode, flush event buffer which will create a new replay.
   * Unless `continueRecording` is false, the replay will continue to record and
   * behave as a "session"-based replay.
   *
   * Otherwise, queue up a flush.
   */
   async sendBufferedReplayOrFlush({ continueRecording = true } = {}) {
    if (this.recordingMode === 'session') {
      return this.flushImmediate();
    }

    const activityTime = Date.now();

    esm_DEBUG_BUILD && esm_logger.info('Converting buffer to session');

    // Allow flush to complete before resuming as a session recording, otherwise
    // the checkout from `startRecording` may be included in the payload.
    // Prefer to keep the error replay as a separate (and smaller) segment
    // than the session replay.
    await this.flushImmediate();

    const hasStoppedRecording = this.stopRecording();

    if (!continueRecording || !hasStoppedRecording) {
      return;
    }

    // To avoid race conditions where this is called multiple times, we check here again that we are still buffering
    if ((this.recordingMode ) === 'session') {
      return;
    }

    // Re-start recording in session-mode
    this.recordingMode = 'session';

    // Once this session ends, we do not want to refresh it
    if (this.session) {
      this._updateUserActivity(activityTime);
      this._updateSessionActivity(activityTime);
      this._maybeSaveSession();
    }

    this.startRecording();
  }

  /**
   * We want to batch uploads of replay events. Save events only if
   * `<flushMinDelay>` milliseconds have elapsed since the last event
   * *OR* if `<flushMaxDelay>` milliseconds have elapsed.
   *
   * Accepts a callback to perform side-effects and returns true to stop batch
   * processing and hand back control to caller.
   */
   addUpdate(cb) {
    // We need to always run `cb` (e.g. in the case of `this.recordingMode == 'buffer'`)
    const cbResult = cb();

    // If this option is turned on then we will only want to call `flush`
    // explicitly
    if (this.recordingMode === 'buffer') {
      return;
    }

    // If callback is true, we do not want to continue with flushing -- the
    // caller will need to handle it.
    if (cbResult === true) {
      return;
    }

    // addUpdate is called quite frequently - use _debouncedFlush so that it
    // respects the flush delays and does not flush immediately
    this._debouncedFlush();
  }

  /**
   * Updates the user activity timestamp and resumes recording. This should be
   * called in an event handler for a user action that we consider as the user
   * being "active" (e.g. a mouse click).
   */
   triggerUserActivity() {
    this._updateUserActivity();

    // This case means that recording was once stopped due to inactivity.
    // Ensure that recording is resumed.
    if (!this._stopRecording) {
      // Create a new session, otherwise when the user action is flushed, it
      // will get rejected due to an expired session.
      if (!this._checkSession()) {
        return;
      }

      // Note: This will cause a new DOM checkout
      this.resume();
      return;
    }

    // Otherwise... recording was never suspended, continue as normalish
    this.checkAndHandleExpiredSession();

    this._updateSessionActivity();
  }

  /**
   * Updates the user activity timestamp *without* resuming
   * recording. Some user events (e.g. keydown) can be create
   * low-value replays that only contain the keypress as a
   * breadcrumb. Instead this would require other events to
   * create a new replay after a session has expired.
   */
   updateUserActivity() {
    this._updateUserActivity();
    this._updateSessionActivity();
  }

  /**
   * Only flush if `this.recordingMode === 'session'`
   */
   conditionalFlush() {
    if (this.recordingMode === 'buffer') {
      return Promise.resolve();
    }

    return this.flushImmediate();
  }

  /**
   * Flush using debounce flush
   */
   flush() {
    return this._debouncedFlush() ;
  }

  /**
   * Always flush via `_debouncedFlush` so that we do not have flushes triggered
   * from calling both `flush` and `_debouncedFlush`. Otherwise, there could be
   * cases of multiple flushes happening closely together.
   */
   flushImmediate() {
    this._debouncedFlush();
    // `.flush` is provided by the debounced function, analogously to lodash.debounce
    return this._debouncedFlush.flush() ;
  }

  /**
   * Cancels queued up flushes.
   */
   cancelFlush() {
    this._debouncedFlush.cancel();
  }

  /** Get the current session (=replay) ID */
   getSessionId() {
    return this.session?.id;
  }

  /**
   * Checks if recording should be stopped due to user inactivity. Otherwise
   * check if session is expired and create a new session if so. Triggers a new
   * full snapshot on new session.
   *
   * Returns true if session is not expired, false otherwise.
   * @hidden
   */
   checkAndHandleExpiredSession() {
    // Prevent starting a new session if the last user activity is older than
    // SESSION_IDLE_PAUSE_DURATION. Otherwise non-user activity can trigger a new
    // session+recording. This creates noisy replays that do not have much
    // content in them.
    if (
      this._lastActivity &&
      isExpired(this._lastActivity, this.timeouts.sessionIdlePause) &&
      this.session &&
      this.session.sampled === 'session'
    ) {
      // Pause recording only for session-based replays. Otherwise, resuming
      // will create a new replay and will conflict with users who only choose
      // to record error-based replays only. (e.g. the resumed replay will not
      // contain a reference to an error)
      this.pause();
      return;
    }

    // --- There is recent user activity --- //
    // This will create a new session if expired, based on expiry length
    if (!this._checkSession()) {
      // Check session handles the refreshing itself
      return false;
    }

    return true;
  }

  /**
   * Capture some initial state that can change throughout the lifespan of the
   * replay. This is required because otherwise they would be captured at the
   * first flush.
   */
   setInitialState() {
    const urlPath = `${esm_WINDOW.location.pathname}${esm_WINDOW.location.hash}${esm_WINDOW.location.search}`;
    const url = `${esm_WINDOW.location.origin}${urlPath}`;

    this.performanceEntries = [];
    this.replayPerformanceEntries = [];

    // Reset _context as well
    this._clearContext();

    this._context.initialUrl = url;
    this._context.initialTimestamp = Date.now();
    this._context.urls.push(url);
  }

  /**
   * Add a breadcrumb event, that may be throttled.
   * If it was throttled, we add a custom breadcrumb to indicate that.
   */
   throttledAddEvent(
    event,
    isCheckout,
  ) {
    const res = this._throttledAddEvent(event, isCheckout);

    // If this is THROTTLED, it means we have throttled the event for the first time
    // In this case, we want to add a breadcrumb indicating that something was skipped
    if (res === THROTTLED) {
      const breadcrumb = createBreadcrumb({
        category: 'replay.throttled',
      });

      this.addUpdate(() => {
        // Return `false` if the event _was_ added, as that means we schedule a flush
        return !addEventSync(this, {
          type: ReplayEventTypeCustom,
          timestamp: breadcrumb.timestamp || 0,
          data: {
            tag: 'breadcrumb',
            payload: breadcrumb,
            metric: true,
          },
        });
      });
    }

    return res;
  }

  /**
   * This will get the parametrized route name of the current page.
   * This is only available if performance is enabled, and if an instrumented router is used.
   */
   getCurrentRoute() {
    const lastActiveSpan = this.lastActiveSpan || (0,spanUtils/* getActiveSpan */.Bk)();
    const lastRootSpan = lastActiveSpan && (0,spanUtils/* getRootSpan */.zU)(lastActiveSpan);

    const attributes = (lastRootSpan && (0,spanUtils/* spanToJSON */.et)(lastRootSpan).data) || {};
    const source = attributes[semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */.i_];
    if (!lastRootSpan || !source || !['route', 'custom'].includes(source)) {
      return undefined;
    }

    return (0,spanUtils/* spanToJSON */.et)(lastRootSpan).description;
  }

  /**
   * Initialize and start all listeners to varying events (DOM,
   * Performance Observer, Recording, Sentry SDK, etc)
   */
   _initializeRecording() {
    this.setInitialState();

    // this method is generally called on page load or manually - in both cases
    // we should treat it as an activity
    this._updateSessionActivity();

    this.eventBuffer = createEventBuffer({
      useCompression: this._options.useCompression,
      workerUrl: this._options.workerUrl,
    });

    this._removeListeners();
    this._addListeners();

    // Need to set as enabled before we start recording, as `record()` can trigger a flush with a new checkout
    this._isEnabled = true;
    this._isPaused = false;

    this.startRecording();
  }

  /**
   * Loads (or refreshes) the current session.
   */
   _initializeSessionForSampling(previousSessionId) {
    // Whenever there is _any_ error sample rate, we always allow buffering
    // Because we decide on sampling when an error occurs, we need to buffer at all times if sampling for errors
    const allowBuffering = this._options.errorSampleRate > 0;

    const session = loadOrCreateSession(
      {
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        maxReplayDuration: this._options.maxReplayDuration,
        previousSessionId,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: this._options.sessionSampleRate,
        allowBuffering,
      },
    );

    this.session = session;
  }

  /**
   * Checks and potentially refreshes the current session.
   * Returns false if session is not recorded.
   */
   _checkSession() {
    // If there is no session yet, we do not want to refresh anything
    // This should generally not happen, but to be safe....
    if (!this.session) {
      return false;
    }

    const currentSession = this.session;

    if (
      shouldRefreshSession(currentSession, {
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        maxReplayDuration: this._options.maxReplayDuration,
      })
    ) {
      // This should never reject
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this._refreshSession(currentSession);
      return false;
    }

    return true;
  }

  /**
   * Refresh a session with a new one.
   * This stops the current session (without forcing a flush, as that would never work since we are expired),
   * and then does a new sampling based on the refreshed session.
   */
   async _refreshSession(session) {
    if (!this._isEnabled) {
      return;
    }
    await this.stop({ reason: 'refresh session' });
    this.initializeSampling(session.id);
  }

  /**
   * Adds listeners to record events for the replay
   */
   _addListeners() {
    try {
      esm_WINDOW.document.addEventListener('visibilitychange', this._handleVisibilityChange);
      esm_WINDOW.addEventListener('blur', this._handleWindowBlur);
      esm_WINDOW.addEventListener('focus', this._handleWindowFocus);
      esm_WINDOW.addEventListener('keydown', this._handleKeyboardEvent);

      if (this.clickDetector) {
        this.clickDetector.addListeners();
      }

      // There is no way to remove these listeners, so ensure they are only added once
      if (!this._hasInitializedCoreListeners) {
        addGlobalListeners(this, { autoFlushOnFeedback: this._options._experiments.autoFlushOnFeedback });

        this._hasInitializedCoreListeners = true;
      }
    } catch (err) {
      this.handleException(err);
    }

    this._performanceCleanupCallback = setupPerformanceObserver(this);
  }

  /**
   * Cleans up listeners that were created in `_addListeners`
   */
   _removeListeners() {
    try {
      esm_WINDOW.document.removeEventListener('visibilitychange', this._handleVisibilityChange);

      esm_WINDOW.removeEventListener('blur', this._handleWindowBlur);
      esm_WINDOW.removeEventListener('focus', this._handleWindowFocus);
      esm_WINDOW.removeEventListener('keydown', this._handleKeyboardEvent);

      if (this.clickDetector) {
        this.clickDetector.removeListeners();
      }

      if (this._performanceCleanupCallback) {
        this._performanceCleanupCallback();
      }
    } catch (err) {
      this.handleException(err);
    }
  }

  /**
   * Tasks to run when we consider a page to be hidden (via blurring and/or visibility)
   */
   _doChangeToBackgroundTasks(breadcrumb) {
    if (!this.session) {
      return;
    }

    const expired = isSessionExpired(this.session, {
      maxReplayDuration: this._options.maxReplayDuration,
      sessionIdleExpire: this.timeouts.sessionIdleExpire,
    });

    if (expired) {
      return;
    }

    if (breadcrumb) {
      this._createCustomBreadcrumb(breadcrumb);
    }

    // Send replay when the page/tab becomes hidden. There is no reason to send
    // replay if it becomes visible, since no actions we care about were done
    // while it was hidden
    // This should never reject
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    void this.conditionalFlush();
  }

  /**
   * Tasks to run when we consider a page to be visible (via focus and/or visibility)
   */
   _doChangeToForegroundTasks(breadcrumb) {
    if (!this.session) {
      return;
    }

    const isSessionActive = this.checkAndHandleExpiredSession();

    if (!isSessionActive) {
      // If the user has come back to the page within SESSION_IDLE_PAUSE_DURATION
      // ms, we will re-use the existing session, otherwise create a new
      // session
      esm_DEBUG_BUILD && esm_logger.info('Document has become active, but session has expired');
      return;
    }

    if (breadcrumb) {
      this._createCustomBreadcrumb(breadcrumb);
    }
  }

  /**
   * Update user activity (across session lifespans)
   */
   _updateUserActivity(_lastActivity = Date.now()) {
    this._lastActivity = _lastActivity;
  }

  /**
   * Updates the session's last activity timestamp
   */
   _updateSessionActivity(_lastActivity = Date.now()) {
    if (this.session) {
      this.session.lastActivity = _lastActivity;
      this._maybeSaveSession();
    }
  }

  /**
   * Helper to create (and buffer) a replay breadcrumb from a core SDK breadcrumb
   */
   _createCustomBreadcrumb(breadcrumb) {
    this.addUpdate(() => {
      // This should never reject
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.throttledAddEvent({
        type: EventType.Custom,
        timestamp: breadcrumb.timestamp || 0,
        data: {
          tag: 'breadcrumb',
          payload: breadcrumb,
        },
      });
    });
  }

  /**
   * Observed performance events are added to `this.performanceEntries`. These
   * are included in the replay event before it is finished and sent to Sentry.
   */
   _addPerformanceEntries() {
    let performanceEntries = createPerformanceEntries(this.performanceEntries).concat(this.replayPerformanceEntries);

    this.performanceEntries = [];
    this.replayPerformanceEntries = [];

    // If we are manually starting, we want to ensure we only include performance entries
    // that are after the initial timestamp
    // The reason for this is that we may have performance entries from the page load, but may decide to start
    // the replay later on, in which case we do not want to include these entries.
    // without this, manually started replays can have events long before the actual replay recording starts,
    // which messes with the timeline etc.
    if (this._requiresManualStart) {
      const initialTimestampInSeconds = this._context.initialTimestamp / 1000;
      performanceEntries = performanceEntries.filter(entry => entry.start >= initialTimestampInSeconds);
    }

    return Promise.all(createPerformanceSpans(this, performanceEntries));
  }

  /**
   * Clear _context
   */
   _clearContext() {
    // XXX: `initialTimestamp` and `initialUrl` do not get cleared
    this._context.errorIds.clear();
    this._context.traceIds.clear();
    this._context.urls = [];
  }

  /** Update the initial timestamp based on the buffer content. */
   _updateInitialTimestampFromEventBuffer() {
    const { session, eventBuffer } = this;
    // If replay was started manually (=no sample rate was given),
    // We do not want to back-port the initial timestamp
    if (!session || !eventBuffer || this._requiresManualStart) {
      return;
    }

    // we only ever update this on the initial segment
    if (session.segmentId) {
      return;
    }

    const earliestEvent = eventBuffer.getEarliestTimestamp();
    if (earliestEvent && earliestEvent < this._context.initialTimestamp) {
      this._context.initialTimestamp = earliestEvent;
    }
  }

  /**
   * Return and clear _context
   */
   _popEventContext() {
    const _context = {
      initialTimestamp: this._context.initialTimestamp,
      initialUrl: this._context.initialUrl,
      errorIds: Array.from(this._context.errorIds),
      traceIds: Array.from(this._context.traceIds),
      urls: this._context.urls,
    };

    this._clearContext();

    return _context;
  }

  /**
   * Flushes replay event buffer to Sentry.
   *
   * Performance events are only added right before flushing - this is
   * due to the buffered performance observer events.
   *
   * Should never be called directly, only by `flush`
   */
   async _runFlush() {
    const replayId = this.getSessionId();

    if (!this.session || !this.eventBuffer || !replayId) {
      esm_DEBUG_BUILD && esm_logger.error('No session or eventBuffer found to flush.');
      return;
    }

    await this._addPerformanceEntries();

    // Check eventBuffer again, as it could have been stopped in the meanwhile
    if (!this.eventBuffer?.hasEvents) {
      return;
    }

    // Only attach memory event if eventBuffer is not empty
    await addMemoryEntry(this);

    // Check eventBuffer again, as it could have been stopped in the meanwhile
    if (!this.eventBuffer) {
      return;
    }

    // if this changed in the meanwhile, e.g. because the session was refreshed or similar, we abort here
    if (replayId !== this.getSessionId()) {
      return;
    }

    try {
      // This uses the data from the eventBuffer, so we need to call this before `finish()
      this._updateInitialTimestampFromEventBuffer();

      const timestamp = Date.now();

      // Check total duration again, to avoid sending outdated stuff
      // We leave 30s wiggle room to accommodate late flushing etc.
      // This _could_ happen when the browser is suspended during flushing, in which case we just want to stop
      if (timestamp - this._context.initialTimestamp > this._options.maxReplayDuration + 30000) {
        throw new Error('Session is too long, not sending replay');
      }

      const eventContext = this._popEventContext();
      // Always increment segmentId regardless of outcome of sending replay
      const segmentId = this.session.segmentId++;
      this._maybeSaveSession();

      // Note this empties the event buffer regardless of outcome of sending replay
      const recordingData = await this.eventBuffer.finish();

      await sendReplay({
        replayId,
        recordingData,
        segmentId,
        eventContext,
        session: this.session,
        timestamp,
        onError: err => this.handleException(err),
      });
    } catch (err) {
      this.handleException(err);

      // This means we retried 3 times and all of them failed,
      // or we ran into a problem we don't want to retry, like rate limiting.
      // In this case, we want to completely stop the replay - otherwise, we may get inconsistent segments
      // This should never reject
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.stop({ reason: 'sendReplay' });

      const client = (0,currentScopes/* getClient */.KU)();

      if (client) {
        const dropReason = err instanceof RateLimitError ? 'ratelimit_backoff' : 'send_error';
        client.recordDroppedEvent(dropReason, 'replay');
      }
    }
  }

  /**
   * Flush recording data to Sentry. Creates a lock so that only a single flush
   * can be active at a time. Do not call this directly.
   */
   async _flush({
    force = false,
  }

 = {}) {
    if (!this._isEnabled && !force) {
      // This can happen if e.g. the replay was stopped because of exceeding the retry limit
      return;
    }

    if (!this.checkAndHandleExpiredSession()) {
      esm_DEBUG_BUILD && esm_logger.error('Attempting to finish replay event after session expired.');
      return;
    }

    if (!this.session) {
      // should never happen, as we would have bailed out before
      return;
    }

    const start = this.session.started;
    const now = Date.now();
    const duration = now - start;

    // A flush is about to happen, cancel any queued flushes
    this._debouncedFlush.cancel();

    // If session is too short, or too long (allow some wiggle room over maxReplayDuration), do not send it
    // This _should_ not happen, but it may happen if flush is triggered due to a page activity change or similar
    const tooShort = duration < this._options.minReplayDuration;
    const tooLong = duration > this._options.maxReplayDuration + 5000;
    if (tooShort || tooLong) {
      esm_DEBUG_BUILD &&
        esm_logger.info(
          `Session duration (${Math.floor(duration / 1000)}s) is too ${
            tooShort ? 'short' : 'long'
          }, not sending replay.`,
        );

      if (tooShort) {
        this._debouncedFlush();
      }
      return;
    }

    const eventBuffer = this.eventBuffer;
    if (eventBuffer && this.session.segmentId === 0 && !eventBuffer.hasCheckout) {
      esm_DEBUG_BUILD && esm_logger.info('Flushing initial segment without checkout.');
      // TODO FN: Evaluate if we want to stop here, or remove this again?
    }

    const _flushInProgress = !!this._flushLock;

    // this._flushLock acts as a lock so that future calls to `_flush()` will
    // be blocked until current flush is finished (i.e. this promise resolves)
    if (!this._flushLock) {
      this._flushLock = this._runFlush();
    }

    try {
      await this._flushLock;
    } catch (err) {
      this.handleException(err);
    } finally {
      this._flushLock = undefined;

      if (_flushInProgress) {
        // Wait for previous flush to finish, then call the debounced
        // `_flush()`. It's possible there are other flush requests queued and
        // waiting for it to resolve. We want to reduce all outstanding
        // requests (as well as any new flush requests that occur within a
        // second of the locked flush completing) into a single flush.
        this._debouncedFlush();
      }
    }
  }

  /** Save the session, if it is sticky */
   _maybeSaveSession() {
    if (this.session && this._options.stickySession) {
      saveSession(this.session);
    }
  }

  /** Handler for rrweb.record.onMutation */
   _onMutationHandler(mutations) {
    const count = mutations.length;

    const mutationLimit = this._options.mutationLimit;
    const mutationBreadcrumbLimit = this._options.mutationBreadcrumbLimit;
    const overMutationLimit = mutationLimit && count > mutationLimit;

    // Create a breadcrumb if a lot of mutations happen at the same time
    // We can show this in the UI as an information with potential performance improvements
    if (count > mutationBreadcrumbLimit || overMutationLimit) {
      const breadcrumb = createBreadcrumb({
        category: 'replay.mutations',
        data: {
          count,
          limit: overMutationLimit,
        },
      });
      this._createCustomBreadcrumb(breadcrumb);
    }

    // Stop replay if over the mutation limit
    if (overMutationLimit) {
      // This should never reject
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.stop({ reason: 'mutationLimit', forceFlush: this.recordingMode === 'session' });
      return false;
    }

    // `true` means we use the regular mutation handling by rrweb
    return true;
  }
}

function getOption(selectors, defaultSelectors) {
  return [
    ...selectors,
    // sentry defaults
    ...defaultSelectors,
  ].join(',');
}

/**
 * Returns privacy related configuration for use in rrweb
 */
function getPrivacyOptions({ mask, unmask, block, unblock, ignore }) {
  const defaultBlockedElements = ['base', 'iframe[srcdoc]:not([src])'];

  const maskSelector = getOption(mask, ['.sentry-mask', '[data-sentry-mask]']);
  const unmaskSelector = getOption(unmask, []);

  const options = {
    // We are making the decision to make text and input selectors the same
    maskTextSelector: maskSelector,
    unmaskTextSelector: unmaskSelector,

    blockSelector: getOption(block, ['.sentry-block', '[data-sentry-block]', ...defaultBlockedElements]),
    unblockSelector: getOption(unblock, []),
    ignoreSelector: getOption(ignore, ['.sentry-ignore', '[data-sentry-ignore]', 'input[type="file"]']),
  };

  return options;
}

/**
 * Masks an attribute if necessary, otherwise return attribute value as-is.
 */
function maskAttribute({
  el,
  key,
  maskAttributes,
  maskAllText,
  privacyOptions,
  value,
}) {
  // We only mask attributes if `maskAllText` is true
  if (!maskAllText) {
    return value;
  }

  // unmaskTextSelector takes precedence
  if (privacyOptions.unmaskTextSelector && el.matches(privacyOptions.unmaskTextSelector)) {
    return value;
  }

  if (
    maskAttributes.includes(key) ||
    // Need to mask `value` attribute for `<input>` if it's a button-like
    // type
    (key === 'value' && el.tagName === 'INPUT' && ['submit', 'button'].includes(el.getAttribute('type') || ''))
  ) {
    return value.replace(/[\S]/g, '*');
  }

  return value;
}

const MEDIA_SELECTORS =
  'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]';

const DEFAULT_NETWORK_HEADERS = ['content-length', 'content-type', 'accept'];

let _initialized = false;

/**
 * Sentry integration for [Session Replay](https://sentry.io/for/session-replay/).
 *
 * See the [Replay documentation](https://docs.sentry.io/platforms/javascript/guides/session-replay/) for more information.
 *
 * @example
 *
 * ```
 * Sentry.init({
 *   dsn: '__DSN__',
 *   integrations: [Sentry.replayIntegration()],
 * });
 * ```
 */
const replayIntegration = ((options) => {
  return new Replay(options);
}) ;

/**
 * Replay integration
 */
class Replay  {
  /**
   * @inheritDoc
   */

  /**
   * Options to pass to `rrweb.record()`
   */

  /**
   * Initial options passed to the replay integration, merged with default values.
   * Note: `sessionSampleRate` and `errorSampleRate` are not required here, as they
   * can only be finally set when setupOnce() is called.
   *
   * @private
   */

   constructor({
    flushMinDelay = DEFAULT_FLUSH_MIN_DELAY,
    flushMaxDelay = DEFAULT_FLUSH_MAX_DELAY,
    minReplayDuration = MIN_REPLAY_DURATION,
    maxReplayDuration = MAX_REPLAY_DURATION,
    stickySession = true,
    useCompression = true,
    workerUrl,
    _experiments = {},
    maskAllText = true,
    maskAllInputs = true,
    blockAllMedia = true,

    mutationBreadcrumbLimit = 750,
    mutationLimit = 10000,

    slowClickTimeout = 7000,
    slowClickIgnoreSelectors = [],

    networkDetailAllowUrls = [],
    networkDetailDenyUrls = [],
    networkCaptureBodies = true,
    networkRequestHeaders = [],
    networkResponseHeaders = [],

    mask = [],
    maskAttributes = ['title', 'placeholder'],
    unmask = [],
    block = [],
    unblock = [],
    ignore = [],
    maskFn,

    beforeAddRecordingEvent,
    beforeErrorSampling,
    onError,
  } = {}) {
    this.name = 'Replay';

    const privacyOptions = getPrivacyOptions({
      mask,
      unmask,
      block,
      unblock,
      ignore,
    });

    this._recordingOptions = {
      maskAllInputs,
      maskAllText,
      maskInputOptions: { password: true },
      maskTextFn: maskFn,
      maskInputFn: maskFn,
      maskAttributeFn: (key, value, el) =>
        maskAttribute({
          maskAttributes,
          maskAllText,
          privacyOptions,
          key,
          value,
          el,
        }),

      ...privacyOptions,

      // Our defaults
      slimDOMOptions: 'all',
      inlineStylesheet: true,
      // Disable inline images as it will increase segment/replay size
      inlineImages: false,
      // collect fonts, but be aware that `sentry.io` needs to be an allowed
      // origin for playback
      collectFonts: true,
      errorHandler: (err) => {
        try {
          err.__rrweb__ = true;
        } catch (error) {
          // ignore errors here
          // this can happen if the error is frozen or does not allow mutation for other reasons
        }
      },
      // experimental support for recording iframes from different origins
      recordCrossOriginIframes: Boolean(_experiments.recordCrossOriginIframes),
    };

    this._initialOptions = {
      flushMinDelay,
      flushMaxDelay,
      minReplayDuration: Math.min(minReplayDuration, MIN_REPLAY_DURATION_LIMIT),
      maxReplayDuration: Math.min(maxReplayDuration, MAX_REPLAY_DURATION),
      stickySession,
      useCompression,
      workerUrl,
      blockAllMedia,
      maskAllInputs,
      maskAllText,
      mutationBreadcrumbLimit,
      mutationLimit,
      slowClickTimeout,
      slowClickIgnoreSelectors,
      networkDetailAllowUrls,
      networkDetailDenyUrls,
      networkCaptureBodies,
      networkRequestHeaders: _getMergedNetworkHeaders(networkRequestHeaders),
      networkResponseHeaders: _getMergedNetworkHeaders(networkResponseHeaders),
      beforeAddRecordingEvent,
      beforeErrorSampling,
      onError,

      _experiments,
    };

    if (this._initialOptions.blockAllMedia) {
      // `blockAllMedia` is a more user friendly option to configure blocking
      // embedded media elements
      this._recordingOptions.blockSelector = !this._recordingOptions.blockSelector
        ? MEDIA_SELECTORS
        : `${this._recordingOptions.blockSelector},${MEDIA_SELECTORS}`;
    }

    if (this._isInitialized && isBrowser()) {
      throw new Error('Multiple Sentry Session Replay instances are not supported');
    }

    this._isInitialized = true;
  }

  /** If replay has already been initialized */
   get _isInitialized() {
    return _initialized;
  }

  /** Update _isInitialized */
   set _isInitialized(value) {
    _initialized = value;
  }

  /**
   * Setup and initialize replay container
   */
   afterAllSetup(client) {
    if (!isBrowser() || this._replay) {
      return;
    }

    this._setup(client);
    this._initialize(client);
  }

  /**
   * Start a replay regardless of sampling rate. Calling this will always
   * create a new session. Will log a message if replay is already in progress.
   *
   * Creates or loads a session, attaches listeners to varying events (DOM,
   * PerformanceObserver, Recording, Sentry SDK, etc)
   */
   start() {
    if (!this._replay) {
      return;
    }
    this._replay.start();
  }

  /**
   * Start replay buffering. Buffers until `flush()` is called or, if
   * `replaysOnErrorSampleRate` > 0, until an error occurs.
   */
   startBuffering() {
    if (!this._replay) {
      return;
    }

    this._replay.startBuffering();
  }

  /**
   * Currently, this needs to be manually called (e.g. for tests). Sentry SDK
   * does not support a teardown
   */
   stop() {
    if (!this._replay) {
      return Promise.resolve();
    }

    return this._replay.stop({ forceFlush: this._replay.recordingMode === 'session' });
  }

  /**
   * If not in "session" recording mode, flush event buffer which will create a new replay.
   * If replay is not enabled, a new session replay is started.
   * Unless `continueRecording` is false, the replay will continue to record and
   * behave as a "session"-based replay.
   *
   * Otherwise, queue up a flush.
   */
   flush(options) {
    if (!this._replay) {
      return Promise.resolve();
    }

    // assuming a session should be recorded in this case
    if (!this._replay.isEnabled()) {
      this._replay.start();
      return Promise.resolve();
    }

    return this._replay.sendBufferedReplayOrFlush(options);
  }

  /**
   * Get the current session ID.
   */
   getReplayId() {
    if (!this._replay?.isEnabled()) {
      return;
    }

    return this._replay.getSessionId();
  }

  /**
   * Get the current recording mode. This can be either `session` or `buffer`.
   *
   * `session`: Recording the whole session, sending it continuously
   * `buffer`: Always keeping the last 60s of recording, requires:
   *   - having replaysOnErrorSampleRate > 0 to capture replay when an error occurs
   *   - or calling `flush()` to send the replay
   */
   getRecordingMode() {
    if (!this._replay?.isEnabled()) {
      return;
    }

    return this._replay.recordingMode;
  }

  /**
   * Initializes replay.
   */
   _initialize(client) {
    if (!this._replay) {
      return;
    }

    this._maybeLoadFromReplayCanvasIntegration(client);
    this._replay.initializeSampling();
  }

  /** Setup the integration. */
   _setup(client) {
    // Client is not available in constructor, so we need to wait until setupOnce
    const finalOptions = loadReplayOptionsFromClient(this._initialOptions, client);

    this._replay = new ReplayContainer({
      options: finalOptions,
      recordingOptions: this._recordingOptions,
    });
  }

  /** Get canvas options from ReplayCanvas integration, if it is also added. */
   _maybeLoadFromReplayCanvasIntegration(client) {
    // To save bundle size, we skip checking for stuff here
    // and instead just try-catch everything - as generally this should all be defined
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    try {
      const canvasIntegration = client.getIntegrationByName('ReplayCanvas')

;
      if (!canvasIntegration) {
        return;
      }

      this._replay['_canvas'] = canvasIntegration.getOptions();
    } catch {
      // ignore errors here
    }
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
  }
}

/** Parse Replay-related options from SDK options */
function loadReplayOptionsFromClient(initialOptions, client) {
  const opt = client.getOptions() ;

  const finalOptions = {
    sessionSampleRate: 0,
    errorSampleRate: 0,
    ...(0,object/* dropUndefinedKeys */.Ce)(initialOptions),
  };

  const replaysSessionSampleRate = (0,parseSampleRate/* parseSampleRate */.i)(opt.replaysSessionSampleRate);
  const replaysOnErrorSampleRate = (0,parseSampleRate/* parseSampleRate */.i)(opt.replaysOnErrorSampleRate);

  if (replaysSessionSampleRate == null && replaysOnErrorSampleRate == null) {
    (0,logger/* consoleSandbox */.pq)(() => {
      // eslint-disable-next-line no-console
      console.warn(
        'Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.',
      );
    });
  }

  if (replaysSessionSampleRate != null) {
    finalOptions.sessionSampleRate = replaysSessionSampleRate;
  }

  if (replaysOnErrorSampleRate != null) {
    finalOptions.errorSampleRate = replaysOnErrorSampleRate;
  }

  return finalOptions;
}

function _getMergedNetworkHeaders(headers) {
  return [...DEFAULT_NETWORK_HEADERS, ...headers.map(header => header.toLowerCase())];
}

/**
 * This is a small utility to get a type-safe instance of the Replay integration.
 */
function getReplay() {
  const client = (0,currentScopes/* getClient */.KU)();
  return client?.getIntegrationByName('Replay');
}


//# sourceMappingURL=index.js.map

;// ./node_modules/@sentry-internal/replay-canvas/build/npm/esm/index.js


var esm_defProp$1 = Object.defineProperty;
var esm_defNormalProp$1 = (obj, key, value) => key in obj ? esm_defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var esm_publicField$1 = (obj, key, value) => esm_defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
class esm_Mirror {
  constructor() {
    esm_publicField$1(this, "idNodeMap", /* @__PURE__ */ new Map());
    esm_publicField$1(this, "nodeMetaMap", /* @__PURE__ */ new WeakMap());
  }
  getId(n2) {
    if (!n2) return -1;
    const id = this.getMeta(n2)?.id;
    return id ?? -1;
  }
  getNode(id) {
    return this.idNodeMap.get(id) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(n2) {
    return this.nodeMetaMap.get(n2) || null;
  }
  // removes the node from idNodeMap
  // doesn't remove the node from nodeMetaMap
  removeNodeFromMap(n2) {
    const id = this.getId(n2);
    this.idNodeMap.delete(id);
    if (n2.childNodes) {
      n2.childNodes.forEach(
        (childNode) => this.removeNodeFromMap(childNode)
      );
    }
  }
  has(id) {
    return this.idNodeMap.has(id);
  }
  hasNode(node) {
    return this.nodeMetaMap.has(node);
  }
  add(n2, meta) {
    const id = meta.id;
    this.idNodeMap.set(id, n2);
    this.nodeMetaMap.set(n2, meta);
  }
  replace(id, n2) {
    const oldNode = this.getNode(id);
    if (oldNode) {
      const meta = this.nodeMetaMap.get(oldNode);
      if (meta) this.nodeMetaMap.set(n2, meta);
    }
    this.idNodeMap.set(id, n2);
  }
  reset() {
    this.idNodeMap = /* @__PURE__ */ new Map();
    this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
  }
}
function esm_createMirror$2() {
  return new esm_Mirror();
}
function esm_elementClassMatchesRegex(el, regex) {
  for (let eIndex = el.classList.length; eIndex--; ) {
    const className = el.classList[eIndex];
    if (regex.test(className)) {
      return true;
    }
  }
  return false;
}
function esm_distanceToMatch(node, matchPredicate, limit = Infinity, distance = 0) {
  if (!node) return -1;
  if (node.nodeType !== node.ELEMENT_NODE) return -1;
  if (distance > limit) return -1;
  if (matchPredicate(node)) return distance;
  return esm_distanceToMatch(node.parentNode, matchPredicate, limit, distance + 1);
}
function esm_createMatchPredicate(className, selector) {
  return (node) => {
    const el = node;
    if (el === null) return false;
    try {
      if (className) {
        if (typeof className === "string") {
          if (el.matches(`.${className}`)) return true;
        } else if (esm_elementClassMatchesRegex(el, className)) {
          return true;
        }
      }
      if (selector && el.matches(selector)) return true;
      return false;
    } catch {
      return false;
    }
  };
}
const esm_DEPARTED_MIRROR_ACCESS_WARNING = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
let esm_mirror = {
  map: {},
  getId() {
    console.error(esm_DEPARTED_MIRROR_ACCESS_WARNING);
    return -1;
  },
  getNode() {
    console.error(esm_DEPARTED_MIRROR_ACCESS_WARNING);
    return null;
  },
  removeNodeFromMap() {
    console.error(esm_DEPARTED_MIRROR_ACCESS_WARNING);
  },
  has() {
    console.error(esm_DEPARTED_MIRROR_ACCESS_WARNING);
    return false;
  },
  reset() {
    console.error(esm_DEPARTED_MIRROR_ACCESS_WARNING);
  }
};
if (typeof window !== "undefined" && window.Proxy && window.Reflect) {
  esm_mirror = new Proxy(esm_mirror, {
    get(target, prop, receiver) {
      if (prop === "map") {
        console.error(esm_DEPARTED_MIRROR_ACCESS_WARNING);
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}
function esm_hookSetter(target, key, d, isRevoked, win = window) {
  const original = win.Object.getOwnPropertyDescriptor(target, key);
  win.Object.defineProperty(
    target,
    key,
    isRevoked ? d : {
      set(value) {
        esm_setTimeout$1(() => {
          d.set.call(this, value);
        }, 0);
        if (original && original.set) {
          original.set.call(this, value);
        }
      }
    }
  );
  return () => esm_hookSetter(target, key, original || {}, true);
}
function esm_patch(source, name, replacement) {
  try {
    if (!(name in source)) {
      return () => {
      };
    }
    const original = source[name];
    const wrapped = replacement(original);
    if (typeof wrapped === "function") {
      wrapped.prototype = wrapped.prototype || {};
      Object.defineProperties(wrapped, {
        __rrweb_original__: {
          enumerable: false,
          value: original
        }
      });
    }
    source[name] = wrapped;
    return () => {
      source[name] = original;
    };
  } catch {
    return () => {
    };
  }
}
if (!/* @__PURE__ */ /[1-9][0-9]{12}/.test(Date.now().toString())) ;
function esm_closestElementOfNode(node) {
  if (!node) {
    return null;
  }
  const el = node.nodeType === node.ELEMENT_NODE ? node : node.parentElement;
  return el;
}
function esm_isBlocked(node, blockClass, blockSelector, unblockSelector, checkAncestors) {
  if (!node) {
    return false;
  }
  const el = esm_closestElementOfNode(node);
  if (!el) {
    return false;
  }
  const blockedPredicate = esm_createMatchPredicate(blockClass, blockSelector);
  if (!checkAncestors) {
    const isUnblocked = unblockSelector && el.matches(unblockSelector);
    return blockedPredicate(el) && !isUnblocked;
  }
  const blockDistance = esm_distanceToMatch(el, blockedPredicate);
  let unblockDistance = -1;
  if (blockDistance < 0) {
    return false;
  }
  if (unblockSelector) {
    unblockDistance = esm_distanceToMatch(
      el,
      esm_createMatchPredicate(null, unblockSelector)
    );
  }
  if (blockDistance > -1 && unblockDistance < 0) {
    return true;
  }
  return blockDistance < unblockDistance;
}
const npm_esm_cachedImplementations = {};
function esm_getImplementation(name) {
  const cached = npm_esm_cachedImplementations[name];
  if (cached) {
    return cached;
  }
  const document2 = window.document;
  let impl = window[name];
  if (document2 && typeof document2.createElement === "function") {
    try {
      const sandbox = document2.createElement("iframe");
      sandbox.hidden = true;
      document2.head.appendChild(sandbox);
      const contentWindow = sandbox.contentWindow;
      if (contentWindow && contentWindow[name]) {
        impl = // eslint-disable-next-line @typescript-eslint/unbound-method
        contentWindow[name];
      }
      document2.head.removeChild(sandbox);
    } catch (e2) {
    }
  }
  return npm_esm_cachedImplementations[name] = impl.bind(
    window
  );
}
function esm_onRequestAnimationFrame(...rest) {
  return esm_getImplementation("requestAnimationFrame")(...rest);
}
function esm_setTimeout$1(...rest) {
  return esm_getImplementation("setTimeout")(...rest);
}
var CanvasContext = /* @__PURE__ */ ((CanvasContext2) => {
  CanvasContext2[CanvasContext2["2D"] = 0] = "2D";
  CanvasContext2[CanvasContext2["WebGL"] = 1] = "WebGL";
  CanvasContext2[CanvasContext2["WebGL2"] = 2] = "WebGL2";
  return CanvasContext2;
})(CanvasContext || {});
let esm_errorHandler;
function esm_registerErrorHandler(handler) {
  esm_errorHandler = handler;
}
const esm_callbackWrapper = (cb) => {
  if (!esm_errorHandler) {
    return cb;
  }
  const rrwebWrapped = (...rest) => {
    try {
      return cb(...rest);
    } catch (error) {
      if (esm_errorHandler && esm_errorHandler(error) === true) {
        return () => {
        };
      }
      throw error;
    }
  };
  return rrwebWrapped;
};
var esm_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var esm_lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var esm_i$1 = 0; esm_i$1 < esm_chars.length; esm_i$1++) {
  esm_lookup[esm_chars.charCodeAt(esm_i$1)] = esm_i$1;
}
var encode = function(arraybuffer) {
  var bytes = new Uint8Array(arraybuffer), i2, len = bytes.length, base64 = "";
  for (i2 = 0; i2 < len; i2 += 3) {
    base64 += esm_chars[bytes[i2] >> 2];
    base64 += esm_chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];
    base64 += esm_chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];
    base64 += esm_chars[bytes[i2 + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + "=";
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + "==";
  }
  return base64;
};
const canvasVarMap = /* @__PURE__ */ new Map();
function variableListFor$1(ctx, ctor) {
  let contextMap = canvasVarMap.get(ctx);
  if (!contextMap) {
    contextMap = /* @__PURE__ */ new Map();
    canvasVarMap.set(ctx, contextMap);
  }
  if (!contextMap.has(ctor)) {
    contextMap.set(ctor, []);
  }
  return contextMap.get(ctor);
}
const saveWebGLVar = (value, win, ctx) => {
  if (!value || !(isInstanceOfWebGLObject(value, win) || typeof value === "object"))
    return;
  const name = value.constructor.name;
  const list = variableListFor$1(ctx, name);
  let index = list.indexOf(value);
  if (index === -1) {
    index = list.length;
    list.push(value);
  }
  return index;
};
function serializeArg(value, win, ctx) {
  if (value instanceof Array) {
    return value.map((arg) => serializeArg(arg, win, ctx));
  } else if (value === null) {
    return value;
  } else if (value instanceof Float32Array || value instanceof Float64Array || value instanceof Int32Array || value instanceof Uint32Array || value instanceof Uint8Array || value instanceof Uint16Array || value instanceof Int16Array || value instanceof Int8Array || value instanceof Uint8ClampedArray) {
    const name = value.constructor.name;
    return {
      rr_type: name,
      args: [Object.values(value)]
    };
  } else if (
    // SharedArrayBuffer disabled on most browsers due to spectre.
    // More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
    // value instanceof SharedArrayBuffer ||
    value instanceof ArrayBuffer
  ) {
    const name = value.constructor.name;
    const base64 = encode(value);
    return {
      rr_type: name,
      base64
    };
  } else if (value instanceof DataView) {
    const name = value.constructor.name;
    return {
      rr_type: name,
      args: [
        serializeArg(value.buffer, win, ctx),
        value.byteOffset,
        value.byteLength
      ]
    };
  } else if (value instanceof HTMLImageElement) {
    const name = value.constructor.name;
    const { src } = value;
    return {
      rr_type: name,
      src
    };
  } else if (value instanceof HTMLCanvasElement) {
    const name = "HTMLImageElement";
    const src = value.toDataURL();
    return {
      rr_type: name,
      src
    };
  } else if (value instanceof ImageData) {
    const name = value.constructor.name;
    return {
      rr_type: name,
      args: [serializeArg(value.data, win, ctx), value.width, value.height]
    };
  } else if (isInstanceOfWebGLObject(value, win) || typeof value === "object") {
    const name = value.constructor.name;
    const index = saveWebGLVar(value, win, ctx);
    return {
      rr_type: name,
      index
    };
  }
  return value;
}
const serializeArgs = (args, win, ctx) => {
  return args.map((arg) => serializeArg(arg, win, ctx));
};
const isInstanceOfWebGLObject = (value, win) => {
  const webGLConstructorNames = [
    "WebGLActiveInfo",
    "WebGLBuffer",
    "WebGLFramebuffer",
    "WebGLProgram",
    "WebGLRenderbuffer",
    "WebGLShader",
    "WebGLShaderPrecisionFormat",
    "WebGLTexture",
    "WebGLUniformLocation",
    "WebGLVertexArrayObject",
    // In old Chrome versions, value won't be an instanceof WebGLVertexArrayObject.
    "WebGLVertexArrayObjectOES"
  ];
  const supportedWebGLConstructorNames = webGLConstructorNames.filter(
    (name) => typeof win[name] === "function"
  );
  return Boolean(
    supportedWebGLConstructorNames.find(
      (name) => value instanceof win[name]
    )
  );
};
function initCanvas2DMutationObserver(cb, win, blockClass2, blockSelector, unblockSelector) {
  const handlers = [];
  const props2D = Object.getOwnPropertyNames(
    win.CanvasRenderingContext2D.prototype
  );
  for (const prop of props2D) {
    try {
      if (typeof win.CanvasRenderingContext2D.prototype[prop] !== "function") {
        continue;
      }
      const restoreHandler = esm_patch(
        win.CanvasRenderingContext2D.prototype,
        prop,
        function(original) {
          return function(...args) {
            if (!esm_isBlocked(
              this.canvas,
              blockClass2,
              blockSelector,
              unblockSelector,
              true
            )) {
              esm_setTimeout$1(() => {
                const recordArgs = serializeArgs(args, win, this);
                cb(this.canvas, {
                  type: CanvasContext["2D"],
                  property: prop,
                  args: recordArgs
                });
              }, 0);
            }
            return original.apply(this, args);
          };
        }
      );
      handlers.push(restoreHandler);
    } catch {
      const hookHandler = esm_hookSetter(
        win.CanvasRenderingContext2D.prototype,
        prop,
        {
          set(v2) {
            cb(this.canvas, {
              type: CanvasContext["2D"],
              property: prop,
              args: [v2],
              setter: true
            });
          }
        }
      );
      handlers.push(hookHandler);
    }
  }
  return () => {
    handlers.forEach((h) => h());
  };
}
function getNormalizedContextName(contextType) {
  return contextType === "experimental-webgl" ? "webgl" : contextType;
}
function initCanvasContextObserver(win, blockClass, blockSelector, unblockSelector, setPreserveDrawingBufferToTrue) {
  const handlers = [];
  try {
    const restoreHandler = esm_patch(
      win.HTMLCanvasElement.prototype,
      "getContext",
      function(original) {
        return function(contextType, ...args) {
          if (!esm_isBlocked(this, blockClass, blockSelector, unblockSelector, true)) {
            const ctxName = getNormalizedContextName(contextType);
            if (!("__context" in this)) this.__context = ctxName;
            if (setPreserveDrawingBufferToTrue && ["webgl", "webgl2"].includes(ctxName)) {
              if (args[0] && typeof args[0] === "object") {
                const contextAttributes = args[0];
                if (!contextAttributes.preserveDrawingBuffer) {
                  contextAttributes.preserveDrawingBuffer = true;
                }
              } else {
                args.splice(0, 1, {
                  preserveDrawingBuffer: true
                });
              }
            }
          }
          return original.apply(this, [contextType, ...args]);
        };
      }
    );
    handlers.push(restoreHandler);
  } catch {
    console.error("failed to patch HTMLCanvasElement.prototype.getContext");
  }
  return () => {
    handlers.forEach((h) => h());
  };
}
function patchGLPrototype(prototype, type, cb, blockClass2, blockSelector, unblockSelector, _mirror2, win) {
  const handlers = [];
  const props = Object.getOwnPropertyNames(prototype);
  for (const prop of props) {
    if (
      //prop.startsWith('get') ||  // e.g. getProgramParameter, but too risky
      [
        "isContextLost",
        "canvas",
        "drawingBufferWidth",
        "drawingBufferHeight"
      ].includes(prop)
    ) {
      continue;
    }
    try {
      if (typeof prototype[prop] !== "function") {
        continue;
      }
      const restoreHandler = esm_patch(
        prototype,
        prop,
        function(original) {
          return function(...args) {
            const result = original.apply(this, args);
            saveWebGLVar(result, win, this);
            if ("tagName" in this.canvas && !esm_isBlocked(
              this.canvas,
              blockClass2,
              blockSelector,
              unblockSelector,
              true
            )) {
              const recordArgs = serializeArgs(args, win, this);
              const mutation = {
                type,
                property: prop,
                args: recordArgs
              };
              cb(this.canvas, mutation);
            }
            return result;
          };
        }
      );
      handlers.push(restoreHandler);
    } catch {
      const hookHandler = esm_hookSetter(prototype, prop, {
        set(v2) {
          cb(this.canvas, {
            type,
            property: prop,
            args: [v2],
            setter: true
          });
        }
      });
      handlers.push(hookHandler);
    }
  }
  return handlers;
}
function initCanvasWebGLMutationObserver(cb, win, blockClass2, blockSelector, unblockSelector, mirror2) {
  const handlers = [];
  handlers.push(
    ...patchGLPrototype(
      win.WebGLRenderingContext.prototype,
      CanvasContext.WebGL,
      cb,
      blockClass2,
      blockSelector,
      unblockSelector,
      mirror2,
      win
    )
  );
  if (typeof win.WebGL2RenderingContext !== "undefined") {
    handlers.push(
      ...patchGLPrototype(
        win.WebGL2RenderingContext.prototype,
        CanvasContext.WebGL2,
        cb,
        blockClass2,
        blockSelector,
        unblockSelector,
        mirror2,
        win
      )
    );
  }
  return () => {
    handlers.forEach((h) => h());
  };
}
const r$1 = `for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};`;
function t$1() {
  const t2 = new Blob([r$1]);
  return URL.createObjectURL(t2);
}
class CanvasManager {
  constructor(options) {
    this.pendingCanvasMutations = /* @__PURE__ */ new Map();
    this.rafStamps = { latestId: 0, invokeId: null };
    this.shadowDoms = /* @__PURE__ */ new Set();
    this.windowsSet = /* @__PURE__ */ new WeakSet();
    this.windows = [];
    this.restoreHandlers = [];
    this.frozen = false;
    this.locked = false;
    this.snapshotInProgressMap = /* @__PURE__ */ new Map();
    this.worker = null;
    this.lastSnapshotTime = 0;
    this.processMutation = (target, mutation) => {
      const newFrame = this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId;
      if (newFrame || !this.rafStamps.invokeId)
        this.rafStamps.invokeId = this.rafStamps.latestId;
      if (!this.pendingCanvasMutations.has(target)) {
        this.pendingCanvasMutations.set(target, []);
      }
      this.pendingCanvasMutations.get(target).push(mutation);
    };
    const {
      sampling = "all",
      win,
      blockClass,
      blockSelector,
      unblockSelector,
      maxCanvasSize,
      recordCanvas,
      dataURLOptions,
      errorHandler: errorHandler2
    } = options;
    this.mutationCb = options.mutationCb;
    this.mirror = options.mirror;
    this.options = options;
    if (errorHandler2) {
      esm_registerErrorHandler(errorHandler2);
    }
    if (recordCanvas && typeof sampling === "number" || options.enableManualSnapshot) {
      this.worker = this.initFPSWorker();
    }
    this.addWindow(win);
    if (options.enableManualSnapshot) {
      return;
    }
    esm_callbackWrapper(() => {
      if (recordCanvas && sampling === "all") {
        this.startRAFTimestamping();
        this.startPendingCanvasMutationFlusher();
      }
      if (recordCanvas && typeof sampling === "number") {
        this.initCanvasFPSObserver(
          sampling,
          blockClass,
          blockSelector,
          unblockSelector,
          maxCanvasSize,
          {
            dataURLOptions
          }
        );
      }
    })();
  }
  reset() {
    this.pendingCanvasMutations.clear();
    this.restoreHandlers.forEach((handler) => {
      try {
        handler();
      } catch (e2) {
      }
    });
    this.restoreHandlers = [];
    this.windowsSet = /* @__PURE__ */ new WeakSet();
    this.windows = [];
    this.shadowDoms = /* @__PURE__ */ new Set();
    this.worker?.terminate();
    this.worker = null;
    this.snapshotInProgressMap = /* @__PURE__ */ new Map();
  }
  freeze() {
    this.frozen = true;
  }
  unfreeze() {
    this.frozen = false;
  }
  lock() {
    this.locked = true;
  }
  unlock() {
    this.locked = false;
  }
  addWindow(win) {
    const {
      sampling = "all",
      blockClass,
      blockSelector,
      unblockSelector,
      recordCanvas,
      enableManualSnapshot
    } = this.options;
    if (this.windowsSet.has(win)) return;
    if (enableManualSnapshot) {
      this.windowsSet.add(win);
      this.windows.push(new WeakRef(win));
      return;
    }
    esm_callbackWrapper(() => {
      if (recordCanvas && sampling === "all") {
        this.initCanvasMutationObserver(
          win,
          blockClass,
          blockSelector,
          unblockSelector
        );
      }
      if (recordCanvas && typeof sampling === "number") {
        const canvasContextReset = initCanvasContextObserver(
          win,
          blockClass,
          blockSelector,
          unblockSelector,
          true
        );
        this.restoreHandlers.push(() => {
          canvasContextReset();
        });
      }
    })();
    this.windowsSet.add(win);
    this.windows.push(new WeakRef(win));
  }
  addShadowRoot(shadowRoot) {
    this.shadowDoms.add(new WeakRef(shadowRoot));
  }
  resetShadowRoots() {
    this.shadowDoms = /* @__PURE__ */ new Set();
  }
  initFPSWorker() {
    const worker = new Worker(t$1());
    worker.onmessage = (e2) => {
      const data = e2.data;
      const { id } = data;
      this.snapshotInProgressMap.set(id, false);
      if (!("base64" in data)) return;
      const { base64, type, width, height } = data;
      this.mutationCb({
        id,
        type: CanvasContext["2D"],
        commands: [
          {
            property: "clearRect",
            // wipe canvas
            args: [0, 0, width, height]
          },
          {
            property: "drawImage",
            // draws (semi-transparent) image
            args: [
              {
                rr_type: "ImageBitmap",
                args: [
                  {
                    rr_type: "Blob",
                    data: [{ rr_type: "ArrayBuffer", base64 }],
                    type
                  }
                ]
              },
              0,
              0,
              // The below args are needed if we enforce a max size, we want to
              // retain the original size when drawing the image (which should be smaller)
              width,
              height
            ]
          }
        ]
      });
    };
    return worker;
  }
  initCanvasFPSObserver(fps, blockClass, blockSelector, unblockSelector, maxCanvasSize, options) {
    const rafId = this.takeSnapshot(
      false,
      fps,
      blockClass,
      blockSelector,
      unblockSelector,
      maxCanvasSize,
      options.dataURLOptions
    );
    this.restoreHandlers.push(() => {
      cancelAnimationFrame(rafId);
    });
  }
  initCanvasMutationObserver(win, blockClass, blockSelector, unblockSelector) {
    const canvasContextReset = initCanvasContextObserver(
      win,
      blockClass,
      blockSelector,
      unblockSelector,
      false
    );
    const canvas2DReset = initCanvas2DMutationObserver(
      this.processMutation.bind(this),
      win,
      blockClass,
      blockSelector,
      unblockSelector
    );
    const canvasWebGL1and2Reset = initCanvasWebGLMutationObserver(
      this.processMutation.bind(this),
      win,
      blockClass,
      blockSelector,
      unblockSelector,
      this.mirror
    );
    this.restoreHandlers.push(() => {
      canvasContextReset();
      canvas2DReset();
      canvasWebGL1and2Reset();
    });
  }
  snapshot(canvasElement) {
    const { options } = this;
    const rafId = this.takeSnapshot(
      true,
      options.sampling === "all" ? 2 : options.sampling || 2,
      options.blockClass,
      options.blockSelector,
      options.unblockSelector,
      options.maxCanvasSize,
      options.dataURLOptions,
      canvasElement
    );
    this.restoreHandlers.push(() => {
      cancelAnimationFrame(rafId);
    });
  }
  takeSnapshot(isManualSnapshot, fps, blockClass, blockSelector, unblockSelector, maxCanvasSize, dataURLOptions, canvasElement) {
    const timeBetweenSnapshots = 1e3 / fps;
    let rafId;
    const getCanvas = (canvasElement2) => {
      if (canvasElement2) {
        return [canvasElement2];
      }
      const matchedCanvas = [];
      const searchCanvas = (root) => {
        root.querySelectorAll("canvas").forEach((canvas) => {
          if (!esm_isBlocked(canvas, blockClass, blockSelector, unblockSelector, true)) {
            matchedCanvas.push(canvas);
          }
        });
      };
      for (const item of this.windows) {
        const window2 = item.deref();
        let _document;
        try {
          _document = window2 && window2.document;
        } catch {
        }
        if (_document) {
          searchCanvas(_document);
        }
      }
      for (const item of this.shadowDoms) {
        const shadowRoot = item.deref();
        if (shadowRoot) {
          searchCanvas(shadowRoot);
        }
      }
      return matchedCanvas;
    };
    const takeCanvasSnapshots = (timestamp) => {
      if (!this.windows.length) {
        return;
      }
      if (this.lastSnapshotTime && timestamp - this.lastSnapshotTime < timeBetweenSnapshots) {
        rafId = esm_onRequestAnimationFrame(takeCanvasSnapshots);
        return;
      }
      this.lastSnapshotTime = timestamp;
      getCanvas(canvasElement).forEach((canvas) => {
        if (!this.mirror.hasNode(canvas)) {
          return;
        }
        const id = this.mirror.getId(canvas);
        if (this.snapshotInProgressMap.get(id)) return;
        if (!canvas.width || !canvas.height) return;
        this.snapshotInProgressMap.set(id, true);
        if (!isManualSnapshot && ["webgl", "webgl2"].includes(canvas.__context)) {
          const context = canvas.getContext(canvas.__context);
          if (context?.getContextAttributes()?.preserveDrawingBuffer === false) {
            context.clear(context.COLOR_BUFFER_BIT);
          }
        }
        createImageBitmap(canvas).then((bitmap) => {
          this.worker?.postMessage(
            {
              id,
              bitmap,
              width: canvas.width,
              height: canvas.height,
              dataURLOptions,
              maxCanvasSize
            },
            [bitmap]
          );
        }).catch((error) => {
          esm_callbackWrapper(() => {
            throw error;
          })();
        });
      });
      if (!isManualSnapshot) {
        rafId = esm_onRequestAnimationFrame(takeCanvasSnapshots);
      }
    };
    rafId = esm_onRequestAnimationFrame(takeCanvasSnapshots);
    return rafId;
  }
  startPendingCanvasMutationFlusher() {
    esm_onRequestAnimationFrame(() => this.flushPendingCanvasMutations());
  }
  startRAFTimestamping() {
    const setLatestRAFTimestamp = (timestamp) => {
      this.rafStamps.latestId = timestamp;
      esm_onRequestAnimationFrame(setLatestRAFTimestamp);
    };
    esm_onRequestAnimationFrame(setLatestRAFTimestamp);
  }
  flushPendingCanvasMutations() {
    this.pendingCanvasMutations.forEach(
      (_values, canvas) => {
        const id = this.mirror.getId(canvas);
        this.flushPendingCanvasMutationFor(canvas, id);
      }
    );
    esm_onRequestAnimationFrame(() => this.flushPendingCanvasMutations());
  }
  flushPendingCanvasMutationFor(canvas, id) {
    if (this.frozen || this.locked) {
      return;
    }
    const valuesWithType = this.pendingCanvasMutations.get(canvas);
    if (!valuesWithType || id === -1) return;
    const values = valuesWithType.map((value) => {
      const { type: type2, ...rest } = value;
      return rest;
    });
    const { type } = valuesWithType[0];
    this.mutationCb({ id, type, commands: values });
    this.pendingCanvasMutations.delete(canvas);
  }
}
try {
  if (Array.from([1], (x) => x * 2)[0] !== 2) {
    const cleanFrame = document.createElement("iframe");
    document.body.appendChild(cleanFrame);
    Array.from = cleanFrame.contentWindow?.Array.from || Array.from;
    document.body.removeChild(cleanFrame);
  }
} catch (err) {
  console.debug("Unable to override Array.from", err);
}
esm_createMirror$2();
var esm_n;
!function(t2) {
  t2[t2.NotStarted = 0] = "NotStarted", t2[t2.Running = 1] = "Running", t2[t2.Stopped = 2] = "Stopped";
}(esm_n || (esm_n = {}));

const CANVAS_QUALITY = {
  low: {
    sampling: {
      canvas: 1,
    },
    dataURLOptions: {
      type: 'image/webp',
      quality: 0.25,
    },
  },
  medium: {
    sampling: {
      canvas: 2,
    },
    dataURLOptions: {
      type: 'image/webp',
      quality: 0.4,
    },
  },
  high: {
    sampling: {
      canvas: 4,
    },
    dataURLOptions: {
      type: 'image/webp',
      quality: 0.5,
    },
  },
};

const esm_INTEGRATION_NAME = 'ReplayCanvas';
const DEFAULT_MAX_CANVAS_SIZE = 1280;

/** Exported only for type safe tests. */
const _replayCanvasIntegration = ((options = {}) => {
  const [maxCanvasWidth, maxCanvasHeight] = options.maxCanvasSize || [];
  const _canvasOptions = {
    quality: options.quality || 'medium',
    enableManualSnapshot: options.enableManualSnapshot,
    maxCanvasSize: [
      maxCanvasWidth ? Math.min(maxCanvasWidth, DEFAULT_MAX_CANVAS_SIZE) : DEFAULT_MAX_CANVAS_SIZE,
      maxCanvasHeight ? Math.min(maxCanvasHeight, DEFAULT_MAX_CANVAS_SIZE) : DEFAULT_MAX_CANVAS_SIZE,
    ] ,
  };

  let canvasManagerResolve;
  const _canvasManager = new Promise(resolve => (canvasManagerResolve = resolve));

  return {
    name: esm_INTEGRATION_NAME,
    getOptions() {
      const { quality, enableManualSnapshot, maxCanvasSize } = _canvasOptions;

      return {
        enableManualSnapshot,
        recordCanvas: true,
        getCanvasManager: (getCanvasManagerOptions) => {
          const manager = new CanvasManager({
            ...getCanvasManagerOptions,
            enableManualSnapshot,
            maxCanvasSize,
            errorHandler: (err) => {
              try {
                if (typeof err === 'object') {
                  (err ).__rrweb__ = true;
                }
              } catch (error) {
                // ignore errors here
                // this can happen if the error is frozen or does not allow mutation for other reasons
              }
            },
          });
          canvasManagerResolve(manager);
          return manager;
        },
        ...(CANVAS_QUALITY[quality || 'medium'] || CANVAS_QUALITY.medium),
      };
    },
    async snapshot(canvasElement) {
      const canvasManager = await _canvasManager;
      canvasManager.snapshot(canvasElement);
    },
  };
}) ;

/**
 * Add this in addition to `replayIntegration()` to enable canvas recording.
 */
const replayCanvasIntegration = defineIntegration(
  _replayCanvasIntegration,
) ;


//# sourceMappingURL=index.js.map

;// ./node_modules/@sentry-internal/feedback/build/npm/esm/index.js


// exporting a separate copy of `WINDOW` rather than exporting the one from `@sentry/browser`
// prevents the browser package from being bundled in the CDN bundle, and avoids a
// circular dependency between the browser and feedback packages
const npm_esm_WINDOW = worldwide/* GLOBAL_OBJ */.O ;
const DOCUMENT = npm_esm_WINDOW.document;
const esm_NAVIGATOR = npm_esm_WINDOW.navigator;

const TRIGGER_LABEL = 'Report a Bug';
const CANCEL_BUTTON_LABEL = 'Cancel';
const SUBMIT_BUTTON_LABEL = 'Send Bug Report';
const CONFIRM_BUTTON_LABEL = 'Confirm';
const FORM_TITLE = 'Report a Bug';
const EMAIL_PLACEHOLDER = 'your.email@example.org';
const EMAIL_LABEL = 'Email';
const MESSAGE_PLACEHOLDER = "What's the bug? What did you expect?";
const MESSAGE_LABEL = 'Description';
const NAME_PLACEHOLDER = 'Your Name';
const NAME_LABEL = 'Name';
const SUCCESS_MESSAGE_TEXT = 'Thank you for your report!';
const IS_REQUIRED_LABEL = '(required)';
const ADD_SCREENSHOT_LABEL = 'Add a screenshot';
const REMOVE_SCREENSHOT_LABEL = 'Remove screenshot';

const FEEDBACK_WIDGET_SOURCE = 'widget';
const FEEDBACK_API_SOURCE = 'api';

const SUCCESS_MESSAGE_TIMEOUT = 5000;

/**
 * Public API to send a Feedback item to Sentry
 */
const sendFeedback = (
  params,
  hint = { includeReplay: true },
) => {
  if (!params.message) {
    throw new Error('Unable to submit feedback with empty message');
  }

  // We want to wait for the feedback to be sent (or not)
  const client = (0,currentScopes/* getClient */.KU)();

  if (!client) {
    throw new Error('No client setup, cannot send feedback.');
  }

  if (params.tags && Object.keys(params.tags).length) {
    (0,currentScopes/* getCurrentScope */.o5)().setTags(params.tags);
  }
  const eventId = captureFeedback(
    {
      source: FEEDBACK_API_SOURCE,
      url: (0,browser/* getLocationHref */.$N)(),
      ...params,
    },
    hint,
  );

  // We want to wait for the feedback to be sent (or not)
  return new Promise((resolve, reject) => {
    // After 5s, we want to clear anyhow
    const timeout = setTimeout(() => reject('Unable to determine if Feedback was correctly sent.'), 5000);

    const cleanup = client.on('afterSendEvent', (event, response) => {
      if (event.event_id !== eventId) {
        return;
      }

      clearTimeout(timeout);
      cleanup();

      // Require valid status codes, otherwise can assume feedback was not sent successfully
      if (
        response &&
        typeof response.statusCode === 'number' &&
        response.statusCode >= 200 &&
        response.statusCode < 300
      ) {
        return resolve(eventId);
      }

      if (response && typeof response.statusCode === 'number' && response.statusCode === 0) {
        return reject(
          'Unable to send Feedback. This is because of network issues, or because you are using an ad-blocker.',
        );
      }

      if (response && typeof response.statusCode === 'number' && response.statusCode === 403) {
        return reject(
          'Unable to send Feedback. This could be because this domain is not in your list of allowed domains.',
        );
      }

      return reject(
        'Unable to send Feedback. This could be because of network issues, or because you are using an ad-blocker',
      );
    });
  });
};

/*
 * For reference, the fully built event looks something like this:
 * {
 *     "type": "feedback",
 *     "event_id": "d2132d31b39445f1938d7e21b6bf0ec4",
 *     "timestamp": 1597977777.6189718,
 *     "dist": "1.12",
 *     "platform": "javascript",
 *     "environment": "production",
 *     "release": 42,
 *     "tags": {"transaction": "/organizations/:orgId/performance/:eventSlug/"},
 *     "sdk": {"name": "name", "version": "version"},
 *     "user": {
 *         "id": "123",
 *         "username": "user",
 *         "email": "user@site.com",
 *         "ip_address": "192.168.11.12",
 *     },
 *     "request": {
 *         "url": None,
 *         "headers": {
 *             "user-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Safari/605.1.15"
 *         },
 *     },
 *     "contexts": {
 *         "feedback": {
 *             "message": "test message",
 *             "contact_email": "test@example.com",
 *             "type": "feedback",
 *         },
 *         "trace": {
 *             "trace_id": "4C79F60C11214EB38604F4AE0781BFB2",
 *             "span_id": "FA90FDEAD5F74052",
 *             "type": "trace",
 *         },
 *         "replay": {
 *             "replay_id": "e2d42047b1c5431c8cba85ee2a8ab25d",
 *         },
 *     },
 *   }
 */

/**
 * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
 *
 * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
 */
const npm_esm_DEBUG_BUILD = (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__);

/**
 * Mobile browsers do not support `mediaDevices.getDisplayMedia` even though they have the api implemented
 * Instead they return things like `NotAllowedError` when called.
 *
 * It's simpler for us to browser sniff first, and avoid loading the integration if we can.
 *
 * https://stackoverflow.com/a/58879212
 * https://stackoverflow.com/a/3540295
 *
 * `mediaDevices.getDisplayMedia` is also only supported in secure contexts, and return a `mediaDevices is not supported` error, so we should also avoid loading the integration if we can.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia
 */
function isScreenshotSupported() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(esm_NAVIGATOR.userAgent)) {
    return false;
  }
  /**
   * User agent on iPads show as Macintosh, so we need extra checks
   *
   * https://forums.developer.apple.com/forums/thread/119186
   * https://stackoverflow.com/questions/60482650/how-to-detect-ipad-useragent-on-safari-browser
   */
  if (/Macintosh/i.test(esm_NAVIGATOR.userAgent) && esm_NAVIGATOR.maxTouchPoints && esm_NAVIGATOR.maxTouchPoints > 1) {
    return false;
  }
  if (!isSecureContext) {
    return false;
  }
  return true;
}

/**
 * Quick and dirty deep merge for the Feedback integration options
 */
function mergeOptions(
  defaultOptions,
  optionOverrides,
) {
  return {
    ...defaultOptions,
    ...optionOverrides,
    tags: {
      ...defaultOptions.tags,
      ...optionOverrides.tags,
    },
    onFormOpen: () => {
      optionOverrides.onFormOpen?.();
      defaultOptions.onFormOpen?.();
    },
    onFormClose: () => {
      optionOverrides.onFormClose?.();
      defaultOptions.onFormClose?.();
    },
    onSubmitSuccess: (data) => {
      optionOverrides.onSubmitSuccess?.(data);
      defaultOptions.onSubmitSuccess?.(data);
    },
    onSubmitError: (error) => {
      optionOverrides.onSubmitError?.(error);
      defaultOptions.onSubmitError?.(error);
    },
    onFormSubmitted: () => {
      optionOverrides.onFormSubmitted?.();
      defaultOptions.onFormSubmitted?.();
    },
    themeDark: {
      ...defaultOptions.themeDark,
      ...optionOverrides.themeDark,
    },
    themeLight: {
      ...defaultOptions.themeLight,
      ...optionOverrides.themeLight,
    },
  };
}

/**
 * Creates <style> element for widget actor (button that opens the dialog)
 */
function createActorStyles(styleNonce) {
  const style = DOCUMENT.createElement('style');
  style.textContent = `
.widget__actor {
  position: fixed;
  z-index: var(--z-index);
  margin: var(--page-margin);
  inset: var(--actor-inset);

  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  font-family: inherit;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1.14em;
  text-decoration: none;

  background: var(--actor-background, var(--background));
  border-radius: var(--actor-border-radius, 1.7em/50%);
  border: var(--actor-border, var(--border));
  box-shadow: var(--actor-box-shadow, var(--box-shadow));
  color: var(--actor-color, var(--foreground));
  fill: var(--actor-color, var(--foreground));
  cursor: pointer;
  opacity: 1;
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0) scale(1);
}
.widget__actor[aria-hidden="true"] {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, 16px) scale(0.98);
}

.widget__actor:hover {
  background: var(--actor-hover-background, var(--background));
  filter: var(--interactive-filter);
}

.widget__actor svg {
  width: 1.14em;
  height: 1.14em;
}

@media (max-width: 600px) {
  .widget__actor span {
    display: none;
  }
}
`;

  if (styleNonce) {
    style.setAttribute('nonce', styleNonce);
  }

  return style;
}

/**
 * Helper function to set a dict of attributes on element (w/ specified namespace)
 */
function setAttributesNS(el, attributes) {
  Object.entries(attributes).forEach(([key, val]) => {
    el.setAttributeNS(null, key, val);
  });
  return el;
}

const SIZE = 20;
const XMLNS$2 = 'http://www.w3.org/2000/svg';

/**
 * Feedback Icon
 */
function FeedbackIcon() {
  const createElementNS = (tagName) =>
    npm_esm_WINDOW.document.createElementNS(XMLNS$2, tagName);
  const svg = setAttributesNS(createElementNS('svg'), {
    width: `${SIZE}`,
    height: `${SIZE}`,
    viewBox: `0 0 ${SIZE} ${SIZE}`,
    fill: 'var(--actor-color, var(--foreground))',
  });

  const g = setAttributesNS(createElementNS('g'), {
    clipPath: 'url(#clip0_57_80)',
  });

  const path = setAttributesNS(createElementNS('path'), {
    ['fill-rule']: 'evenodd',
    ['clip-rule']: 'evenodd',
    d: 'M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z',
  });
  svg.appendChild(g).appendChild(path);

  const speakerDefs = createElementNS('defs');
  const speakerClipPathDef = setAttributesNS(createElementNS('clipPath'), {
    id: 'clip0_57_80',
  });

  const speakerRect = setAttributesNS(createElementNS('rect'), {
    width: `${SIZE}`,
    height: `${SIZE}`,
    fill: 'white',
  });

  speakerClipPathDef.appendChild(speakerRect);
  speakerDefs.appendChild(speakerClipPathDef);

  svg.appendChild(speakerDefs).appendChild(speakerClipPathDef).appendChild(speakerRect);

  return svg;
}

/**
 * The sentry-provided button to open the feedback modal
 */
function Actor({ triggerLabel, triggerAriaLabel, shadow, styleNonce }) {
  const el = DOCUMENT.createElement('button');
  el.type = 'button';
  el.className = 'widget__actor';
  el.ariaHidden = 'false';
  el.ariaLabel = triggerAriaLabel || triggerLabel || TRIGGER_LABEL;
  el.appendChild(FeedbackIcon());
  if (triggerLabel) {
    const label = DOCUMENT.createElement('span');
    label.appendChild(DOCUMENT.createTextNode(triggerLabel));
    el.appendChild(label);
  }

  const style = createActorStyles(styleNonce);

  return {
    el,
    appendToDom() {
      shadow.appendChild(style);
      shadow.appendChild(el);
    },
    removeFromDom() {
      shadow.removeChild(el);
      shadow.removeChild(style);
    },
    show() {
      el.ariaHidden = 'false';
    },
    hide() {
      el.ariaHidden = 'true';
    },
  };
}

const PURPLE = 'rgba(88, 74, 192, 1)';

const DEFAULT_LIGHT = {
  foreground: '#2b2233',
  background: '#ffffff',
  accentForeground: 'white',
  accentBackground: PURPLE,
  successColor: '#268d75',
  errorColor: '#df3338',
  border: '1.5px solid rgba(41, 35, 47, 0.13)',
  boxShadow: '0px 4px 24px 0px rgba(43, 34, 51, 0.12)',
  outline: '1px auto var(--accent-background)',
  interactiveFilter: 'brightness(95%)',
};
const DEFAULT_DARK = {
  foreground: '#ebe6ef',
  background: '#29232f',
  accentForeground: 'white',
  accentBackground: PURPLE,
  successColor: '#2da98c',
  errorColor: '#f55459',
  border: '1.5px solid rgba(235, 230, 239, 0.15)',
  boxShadow: '0px 4px 24px 0px rgba(43, 34, 51, 0.12)',
  outline: '1px auto var(--accent-background)',
  interactiveFilter: 'brightness(150%)',
};

function getThemedCssVariables(theme) {
  return `
  --foreground: ${theme.foreground};
  --background: ${theme.background};
  --accent-foreground: ${theme.accentForeground};
  --accent-background: ${theme.accentBackground};
  --success-color: ${theme.successColor};
  --error-color: ${theme.errorColor};
  --border: ${theme.border};
  --box-shadow: ${theme.boxShadow};
  --outline: ${theme.outline};
  --interactive-filter: ${theme.interactiveFilter};
  `;
}

/**
 * Creates <style> element for widget actor (button that opens the dialog)
 */
function createMainStyles({
  colorScheme,
  themeDark,
  themeLight,
  styleNonce,
}) {
  const style = DOCUMENT.createElement('style');
  style.textContent = `
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${colorScheme !== 'system' ? 'color-scheme: only light;' : ''}

  ${getThemedCssVariables(
    colorScheme === 'dark' ? { ...DEFAULT_DARK, ...themeDark } : { ...DEFAULT_LIGHT, ...themeLight },
  )}
}

${
  colorScheme === 'system'
    ? `
@media (prefers-color-scheme: dark) {
  :host {
    ${getThemedCssVariables({ ...DEFAULT_DARK, ...themeDark })}
  }
}`
    : ''
}
}
`;

  if (styleNonce) {
    style.setAttribute('nonce', styleNonce);
  }

  return style;
}

const buildFeedbackIntegration = ({
  lazyLoadIntegration,
  getModalIntegration,
  getScreenshotIntegration,
}

) => {
  const feedbackIntegration = (({
    // FeedbackGeneralConfiguration
    id = 'sentry-feedback',
    autoInject = true,
    showBranding = true,
    isEmailRequired = false,
    isNameRequired = false,
    showEmail = true,
    showName = true,
    enableScreenshot = true,
    useSentryUser = {
      email: 'email',
      name: 'username',
    },
    _experiments = {},
    tags,
    styleNonce,
    scriptNonce,

    // FeedbackThemeConfiguration
    colorScheme = 'system',
    themeLight = {},
    themeDark = {},

    // FeedbackTextConfiguration
    addScreenshotButtonLabel = ADD_SCREENSHOT_LABEL,
    cancelButtonLabel = CANCEL_BUTTON_LABEL,
    confirmButtonLabel = CONFIRM_BUTTON_LABEL,
    emailLabel = EMAIL_LABEL,
    emailPlaceholder = EMAIL_PLACEHOLDER,
    formTitle = FORM_TITLE,
    isRequiredLabel = IS_REQUIRED_LABEL,
    messageLabel = MESSAGE_LABEL,
    messagePlaceholder = MESSAGE_PLACEHOLDER,
    nameLabel = NAME_LABEL,
    namePlaceholder = NAME_PLACEHOLDER,
    removeScreenshotButtonLabel = REMOVE_SCREENSHOT_LABEL,
    submitButtonLabel = SUBMIT_BUTTON_LABEL,
    successMessageText = SUCCESS_MESSAGE_TEXT,
    triggerLabel = TRIGGER_LABEL,
    triggerAriaLabel = '',

    // FeedbackCallbacks
    onFormOpen,
    onFormClose,
    onSubmitSuccess,
    onSubmitError,
    onFormSubmitted,
  } = {}) => {
    const _options = {
      id,
      autoInject,
      showBranding,
      isEmailRequired,
      isNameRequired,
      showEmail,
      showName,
      enableScreenshot,
      useSentryUser,
      tags,
      styleNonce,
      scriptNonce,

      colorScheme,
      themeDark,
      themeLight,

      triggerLabel,
      triggerAriaLabel,
      cancelButtonLabel,
      submitButtonLabel,
      confirmButtonLabel,
      formTitle,
      emailLabel,
      emailPlaceholder,
      messageLabel,
      messagePlaceholder,
      nameLabel,
      namePlaceholder,
      successMessageText,
      isRequiredLabel,
      addScreenshotButtonLabel,
      removeScreenshotButtonLabel,

      onFormClose,
      onFormOpen,
      onSubmitError,
      onSubmitSuccess,
      onFormSubmitted,

      _experiments,
    };

    let _shadow = null;
    let _subscriptions = [];

    /**
     * Get the shadow root where we will append css
     */
    const _createShadow = (options) => {
      if (!_shadow) {
        const host = DOCUMENT.createElement('div');
        host.id = String(options.id);
        DOCUMENT.body.appendChild(host);

        _shadow = host.attachShadow({ mode: 'open' });
        _shadow.appendChild(createMainStyles(options));
      }
      return _shadow ;
    };

    const _loadAndRenderDialog = async (
      options,
    ) => {
      const screenshotRequired = options.enableScreenshot && isScreenshotSupported();

      let modalIntegration;
      let screenshotIntegration;

      try {
        const modalIntegrationFn = getModalIntegration
          ? getModalIntegration()
          : await lazyLoadIntegration('feedbackModalIntegration', scriptNonce);
        modalIntegration = modalIntegrationFn() ;
        addIntegration(modalIntegration);
      } catch {
        npm_esm_DEBUG_BUILD &&
          logger/* logger */.vF.error(
            '[Feedback] Error when trying to load feedback integrations. Try using `feedbackSyncIntegration` in your `Sentry.init`.',
          );
        throw new Error('[Feedback] Missing feedback modal integration!');
      }

      try {
        const screenshotIntegrationFn = screenshotRequired
          ? getScreenshotIntegration
            ? getScreenshotIntegration()
            : await lazyLoadIntegration('feedbackScreenshotIntegration', scriptNonce)
          : undefined;

        if (screenshotIntegrationFn) {
          screenshotIntegration = screenshotIntegrationFn() ;
          addIntegration(screenshotIntegration);
        }
      } catch {
        npm_esm_DEBUG_BUILD &&
          logger/* logger */.vF.error('[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.');
      }

      const dialog = modalIntegration.createDialog({
        options: {
          ...options,
          onFormClose: () => {
            dialog?.close();
            options.onFormClose?.();
          },
          onFormSubmitted: () => {
            dialog?.close();
            options.onFormSubmitted?.();
          },
        },
        screenshotIntegration,
        sendFeedback,
        shadow: _createShadow(options),
      });

      return dialog;
    };

    const _attachTo = (el, optionOverrides = {}) => {
      const mergedOptions = mergeOptions(_options, optionOverrides);

      const targetEl =
        typeof el === 'string' ? DOCUMENT.querySelector(el) : typeof el.addEventListener === 'function' ? el : null;

      if (!targetEl) {
        npm_esm_DEBUG_BUILD && logger/* logger */.vF.error('[Feedback] Unable to attach to target element');
        throw new Error('Unable to attach to target element');
      }

      let dialog = null;
      const handleClick = async () => {
        if (!dialog) {
          dialog = await _loadAndRenderDialog({
            ...mergedOptions,
            onFormSubmitted: () => {
              dialog?.removeFromDom();
              mergedOptions.onFormSubmitted?.();
            },
          });
        }
        dialog.appendToDom();
        dialog.open();
      };
      targetEl.addEventListener('click', handleClick);
      const unsubscribe = () => {
        _subscriptions = _subscriptions.filter(sub => sub !== unsubscribe);
        dialog?.removeFromDom();
        dialog = null;
        targetEl.removeEventListener('click', handleClick);
      };
      _subscriptions.push(unsubscribe);
      return unsubscribe;
    };

    const _createActor = (optionOverrides = {}) => {
      const mergedOptions = mergeOptions(_options, optionOverrides);
      const shadow = _createShadow(mergedOptions);
      const actor = Actor({
        triggerLabel: mergedOptions.triggerLabel,
        triggerAriaLabel: mergedOptions.triggerAriaLabel,
        shadow,
        styleNonce,
      });
      _attachTo(actor.el, {
        ...mergedOptions,
        onFormOpen() {
          actor.hide();
        },
        onFormClose() {
          actor.show();
        },
        onFormSubmitted() {
          actor.show();
        },
      });
      return actor;
    };

    return {
      name: 'Feedback',
      setupOnce() {
        if (!isBrowser() || !_options.autoInject) {
          return;
        }

        if (DOCUMENT.readyState === 'loading') {
          DOCUMENT.addEventListener('DOMContentLoaded', () => _createActor().appendToDom());
        } else {
          _createActor().appendToDom();
        }
      },

      /**
       * Adds click listener to the element to open a feedback dialog
       *
       * The returned function can be used to remove the click listener
       */
      attachTo: _attachTo,

      /**
       * Creates a new widget which is composed of a Button which triggers a Dialog.
       * Accepts partial options to override any options passed to constructor.
       */
      createWidget(optionOverrides = {}) {
        const actor = _createActor(mergeOptions(_options, optionOverrides));
        actor.appendToDom();
        return actor;
      },

      /**
       * Creates a new Form which you can
       * Accepts partial options to override any options passed to constructor.
       */
      async createForm(
        optionOverrides = {},
      ) {
        return _loadAndRenderDialog(mergeOptions(_options, optionOverrides));
      },

      /**
       * Removes the Feedback integration (including host, shadow DOM, and all widgets)
       */
      remove() {
        if (_shadow) {
          _shadow.parentElement?.remove();
          _shadow = null;
        }
        // Remove any lingering subscriptions
        _subscriptions.forEach(sub => sub());
        _subscriptions = [];
      },
    };
  }) ;

  return feedbackIntegration;
};

/**
 * This is a small utility to get a type-safe instance of the Feedback integration.
 */
function getFeedback() {
  const client = (0,currentScopes/* getClient */.KU)();
  return client?.getIntegrationByName('Feedback');
}

var npm_esm_n,l$1,u$1,npm_esm_i$1,o$1,esm_r$1,f$1,c$1={},s$1=[],a$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h$1=Array.isArray;function v$1(n,l){for(var u in l)n[u]=l[u];return n}function p$1(n){var l=n.parentNode;l&&l.removeChild(n);}function y$1(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?npm_esm_n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps) undefined===f[r]&&(f[r]=l.defaultProps[r]);return d$1(l,f,i,o,null)}function d$1(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:undefined,__c:null,constructor:undefined,__v:null==r?++u$1:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function g$1(n){return n.children}function b$1(n,l){this.props=n,this.context=l;}function m$1(n,l){if(null==l)return n.__?m$1(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?m$1(n):null}function w$1(n,u,t){var i,o=n.__v,r=o.__e,f=n.__P;if(f)return (i=v$1({},o)).__v=o.__v+1,l$1.vnode&&l$1.vnode(i),M(f,i,o,n.__n,undefined!==f.ownerSVGElement,32&o.__u?[r]:null,u,null==r?m$1(o):r,!!(32&o.__u),t),i.__.__k[i.__i]=i,i.__d=undefined,i.__e!=r&&k$1(i),i}function k$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k$1(n)}}function x$1(n){(!n.__d&&(n.__d=true)&&npm_esm_i$1.push(n)&&!C$1.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||esm_r$1)(C$1);}function C$1(){var n,u,t,o=[],r=[];for(npm_esm_i$1.sort(f$1);n=npm_esm_i$1.shift();)n.__d&&(t=npm_esm_i$1.length,u=w$1(n,o,r)||u,0===t||npm_esm_i$1.length>t?(j$1(o,u,r),r.length=o.length=0,u=undefined,npm_esm_i$1.sort(f$1)):u&&l$1.__c&&l$1.__c(u,s$1));u&&j$1(o,u,r),C$1.__r=0;}function P$1(n,l,u,t,i,o,r,f,e,a,h){var v,p,y,d,_,g=t&&t.__k||s$1,b=l.length;for(u.__d=e,S(u,l,g),e=u.__d,v=0;v<b;v++)null!=(y=u.__k[v])&&"boolean"!=typeof y&&"function"!=typeof y&&(p=-1===y.__i?c$1:g[y.__i]||c$1,y.__i=v,M(n,y,p,i,o,r,f,e,a,h),d=y.__e,y.ref&&p.ref!=y.ref&&(p.ref&&N(p.ref,null,y),h.push(y.ref,y.__c||d,y)),null==_&&null!=d&&(_=d),65536&y.__u||p.__k===y.__k?e=$(y,e,n):"function"==typeof y.type&&undefined!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=undefined,y.__u&=-196609);u.__d=e,u.__e=_;}function S(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?d$1(null,i,null,null,i):h$1(i)?d$1(g$1,{children:i},null,null,null):undefined===i.constructor&&i.__b>0?d$1(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=I(i,u,r=t+a,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f===r+1?a++:f>r?s>e-r?a+=f-r:a--:a=f<r&&f==r-1?f-r:0,f!==t+a&&(i.__u|=65536))):(o=u[t])&&null==o.key&&o.__e&&(o.__e==n.__d&&(n.__d=m$1(o)),O(o,o,false),u[t]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=m$1(o)),O(o,o));}function $(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=$(t[i],l,u));return l}n.__e!=l&&(u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function I(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type)return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return  -1}function T$1(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a$1.test(l)?u:u+"px";}function A$1(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T$1(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=Date.now(),n.addEventListener(l,o?L:D$1,o)):n.removeEventListener(l,o?L:D$1,o);else {if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&"role"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||false===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function D$1(n){if(this.l){var u=this.l[n.type+false];if(n.t){if(n.t<=u.u)return}else n.t=Date.now();return u(l$1.event?l$1.event(n):n)}}function L(n){if(this.l)return this.l[n.type+true](l$1.event?l$1.event(n):n)}function M(n,u,t,i,o,r,f,e,c,s){var a,p,y,d,_,m,w,k,x,C,S,$,H,I,T,A=u.type;if(undefined!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof A)try{if(k=u.props,x=(a=A.contextType)&&i[a.__c],C=a?x?x.props.value:a.__:i,t.__c?w=(p=u.__c=t.__c).__=p.__E:("prototype"in A&&A.prototype.render?u.__c=p=new A(k,C):(u.__c=p=new b$1(k,C),p.constructor=A,p.render=q$1),x&&x.sub(p),p.props=k,p.state||(p.state={}),p.context=C,p.__n=i,y=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=A.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=v$1({},p.__s)),v$1(p.__s,A.getDerivedStateFromProps(k,p.__s))),d=p.props,_=p.state,p.__v=u,y)null==A.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else {if(null==A.getDerivedStateFromProps&&k!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,C),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,C)||u.__v===t.__v)){for(u.__v!==t.__v&&(p.props=k,p.state=p.__s,p.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),S=0;S<p._sb.length;S++)p.__h.push(p._sb[S]);p._sb=[],p.__h.length&&f.push(p);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,C),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,_,m);});}if(p.context=C,p.props=k,p.__P=n,p.__e=!1,$=l$1.__r,H=0,"prototype"in A&&A.prototype.render){for(p.state=p.__s,p.__d=!1,$&&$(u),a=p.render(p.props,p.state,p.context),I=0;I<p._sb.length;I++)p.__h.push(p._sb[I]);p._sb=[];}else do{p.__d=!1,$&&$(u),a=p.render(p.props,p.state,p.context),p.state=p.__s;}while(p.__d&&++H<25);p.state=p.__s,null!=p.getChildContext&&(i=v$1(v$1({},i),p.getChildContext())),y||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(d,_)),P$1(n,h$1(T=null!=a&&a.type===g$1&&null==a.key?a.props.children:a)?T:[T],u,t,i,o,r,f,e,c,s),p.base=u.__e,u.__u&=-161,p.__h.length&&f.push(p),w&&(p.__E=p.__=null);}catch(n){u.__v=null,c||null!=r?(u.__e=e,u.__u|=c?160:32,r[r.indexOf(e)]=null):(u.__e=t.__e,u.__k=t.__k),l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z$1(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function j$1(n,u,t){for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function z$1(l,u,t,i,o,r,f,e,s){var a,v,y,d,_,g,b,w=t.props,k=u.props,x=u.type;if("svg"===x&&(o=true),null!=r)for(a=0;a<r.length;a++)if((_=r[a])&&"setAttribute"in _==!!x&&(x?_.localName===x:3===_.nodeType)){l=_,r[a]=null;break}if(null==l){if(null===x)return document.createTextNode(k);l=o?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,k.is&&k),r=null,e=false;}if(null===x)w===k||e&&l.data===k||(l.data=k);else {if(r=r&&npm_esm_n.call(l.childNodes),w=t.props||c$1,!e&&null!=r)for(w={},a=0;a<l.attributes.length;a++)w[(_=l.attributes[a]).name]=_.value;for(a in w)_=w[a],"children"==a||("dangerouslySetInnerHTML"==a?y=_:"key"===a||a in k||A$1(l,a,null,_,o));for(a in k)_=k[a],"children"==a?d=_:"dangerouslySetInnerHTML"==a?v=_:"value"==a?g=_:"checked"==a?b=_:"key"===a||e&&"function"!=typeof _||w[a]===_||A$1(l,a,_,w[a],o);if(v)e||y&&(v.__html===y.__html||v.__html===l.innerHTML)||(l.innerHTML=v.__html),u.__k=[];else if(y&&(l.innerHTML=""),P$1(l,h$1(d)?d:[d],u,t,i,o&&"foreignObject"!==x,r,f,r?r[0]:t.__k&&m$1(t,0),e,s),null!=r)for(a=r.length;a--;)null!=r[a]&&p$1(r[a]);e||(a="value",undefined!==g&&(g!==l[a]||"progress"===x&&!g||"option"===x&&g!==w[a])&&A$1(l,a,g,w[a],false),a="checked",undefined!==b&&b!==l[a]&&A$1(l,a,b,w[a],false));}return l}function N(n,u,t){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,t);}}function O(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null,n.__c=undefined;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&O(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||p$1(n.__e),n.__=n.__e=n.__d=undefined;}function q$1(n,l,u){return this.constructor(n,u)}function B$1(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"=="undefined")?null:t.__k,f=[],e=[],M(t,u=(t).__k=y$1(g$1,null,[u]),r||c$1,c$1,undefined!==t.ownerSVGElement,r?null:t.firstChild?npm_esm_n.call(t.childNodes):null,f,r?r.__e:t.firstChild,o,e),u.__d=undefined,j$1(f,u,e);}npm_esm_n=s$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,b$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v$1({},this.state),"function"==typeof n&&(n=n(v$1({},u),this.props)),n&&v$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),x$1(this));},b$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=true,n&&this.__h.push(n),x$1(this));},b$1.prototype.render=g$1,npm_esm_i$1=[],esm_r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},C$1.__r=0;

var t,esm_r,u,i,o=0,f=[],c=[],esm_e=l$1,a=esm_e.__b,v=esm_e.__r,l=esm_e.diffed,m=esm_e.__c,s=esm_e.unmount,d=esm_e.__;function h(n,t){esm_e.__h&&esm_e.__h(esm_r,n,o||t),o=0;var u=esm_r.__H||(esm_r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({__V:c}),u.__[n]}function p(n){return o=1,y(D,n)}function y(n,u,i){var o=h(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D(undefined,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=esm_r,!esm_r.u)){var f=function(n,t,r){if(!o.__c.__H)return  true;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=false;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=undefined,t!==n.__[0]&&(i=true);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};esm_r.u=true;var c=esm_r.shouldComponentUpdate,e=esm_r.componentWillUpdate;esm_r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=undefined,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},esm_r.shouldComponentUpdate=f;}return o.__N||o.__}function _(n,u){var i=h(t++,3);!esm_e.__s&&C(i.__H,u)&&(i.__=n,i.i=u,esm_r.__H.__h.push(i));}function A(n,u){var i=h(t++,4);!esm_e.__s&&C(i.__H,u)&&(i.__=n,i.i=u,esm_r.__h.push(i));}function F(n){return o=5,q(function(){return {current:n}},[])}function T(n,t,r){o=6,A(function(){return "function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):undefined},null==r?r:r.concat(n));}function q(n,r){var u=h(t++,7);return C(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function x(n,t){return o=8,q(function(){return n},t)}function P(n){var u=esm_r.context[n.__c],i=h(t++,9);return i.c=n,u?(null==i.__&&(i.__=true,u.sub(esm_r)),u.props.value):n.__}function V(n,t){esm_e.useDebugValue&&esm_e.useDebugValue(t?t(n):n);}function b(n){var u=h(t++,10),i=p();return u.__=n,esm_r.componentDidCatch||(esm_r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n);}),[i[0],function(){i[1](undefined);}]}function g(){var n=h(t++,11);if(!n.__){for(var u=esm_r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++;}return n.__}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],esm_e.__e(t,n.__v);}}esm_e.__b=function(n){esm_r=null,a&&a(n);},esm_e.__=function(n,t){t.__k&&t.__k.__m&&(n.__m=t.__k.__m),d&&d(n,t);},esm_e.__r=function(n){v&&v(n),t=0;var i=(esm_r=n.__c).__H;i&&(u===esm_r?(i.__h=[],esm_r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=undefined;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=esm_r;},esm_e.diffed=function(n){l&&l(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===esm_e.requestAnimationFrame||((i=esm_e.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=undefined,n.__V=c;})),u=esm_r=null;},esm_e.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],esm_e.__e(r,n.__v);}}),m&&m(n,t);},esm_e.unmount=function(n){s&&s(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=undefined,t&&esm_e.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z(n){var t=esm_r,u=n.__c;"function"==typeof u&&(n.__c=undefined,u()),esm_r=t;}function B(n){var t=esm_r;n.__c=n.__(),esm_r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

const hooks = /*#__PURE__*/Object.defineProperty({
  __proto__: null,
  useCallback: x,
  useContext: P,
  useDebugValue: V,
  useEffect: _,
  useErrorBoundary: b,
  useId: g,
  useImperativeHandle: T,
  useLayoutEffect: A,
  useMemo: q,
  useReducer: y,
  useRef: F,
  useState: p
}, Symbol.toStringTag, { value: 'Module' });

const XMLNS$1 = 'http://www.w3.org/2000/svg';

/**
 * Sentry Logo
 */
function SentryLogo() {
  const createElementNS = (tagName) =>
    DOCUMENT.createElementNS(XMLNS$1, tagName);
  const svg = setAttributesNS(createElementNS('svg'), {
    width: '32',
    height: '30',
    viewBox: '0 0 72 66',
    fill: 'inherit',
  });

  const path = setAttributesNS(createElementNS('path'), {
    transform: 'translate(11, 11)',
    d: 'M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z',
  });
  svg.appendChild(path);

  return svg;
}

function DialogHeader({ options }) {
  const logoHtml = q(() => ({ __html: SentryLogo().outerHTML }), []);

  return (
    y$1('h2', { class: "dialog__header",}
      , y$1('span', { class: "dialog__title",}, options.formTitle)
      , options.showBranding ? (
        y$1('a', {
          class: "brand-link",
          target: "_blank",
          href: "https://sentry.io/welcome/",
          title: "Powered by Sentry"  ,
          rel: "noopener noreferrer" ,
          dangerouslySetInnerHTML: logoHtml,}
        )
      ) : null
    )
  );
}

/**
 * Validate that a given feedback submission has the required fields
 */
function getMissingFields(feedback, props) {
  const emptyFields = [];
  if (props.isNameRequired && !feedback.name) {
    emptyFields.push(props.nameLabel);
  }
  if (props.isEmailRequired && !feedback.email) {
    emptyFields.push(props.emailLabel);
  }
  if (!feedback.message) {
    emptyFields.push(props.messageLabel);
  }

  return emptyFields;
}

function retrieveStringValue(formData, key) {
  const value = formData.get(key);
  if (typeof value === 'string') {
    return value.trim();
  }
  return '';
}

function Form({
  options,
  defaultEmail,
  defaultName,

  onFormClose,
  onSubmit,
  onSubmitSuccess,
  onSubmitError,
  showEmail,
  showName,
  screenshotInput,
}) {
  const {
    tags,
    addScreenshotButtonLabel,
    removeScreenshotButtonLabel,
    cancelButtonLabel,
    emailLabel,
    emailPlaceholder,
    isEmailRequired,
    isNameRequired,
    messageLabel,
    messagePlaceholder,
    nameLabel,
    namePlaceholder,
    submitButtonLabel,
    isRequiredLabel,
  } = options;
  const [isSubmitting, setIsSubmitting] = p(false);
  // TODO: set a ref on the form, and whenever an input changes call processForm() and setError()
  const [error, setError] = p(null);

  const [showScreenshotInput, setShowScreenshotInput] = p(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ScreenshotInputComponent = screenshotInput?.input;

  const [screenshotError, setScreenshotError] = p(null);
  const onScreenshotError = x((error) => {
    setScreenshotError(error);
    setShowScreenshotInput(false);
  }, []);

  const hasAllRequiredFields = x(
    (data) => {
      const missingFields = getMissingFields(data, {
        emailLabel,
        isEmailRequired,
        isNameRequired,
        messageLabel,
        nameLabel,
      });

      if (missingFields.length > 0) {
        setError(`Please enter in the following required fields: ${missingFields.join(', ')}`);
      } else {
        setError(null);
      }

      return missingFields.length === 0;
    },
    [emailLabel, isEmailRequired, isNameRequired, messageLabel, nameLabel],
  );

  const handleSubmit = x(
    async (e) => {
      setIsSubmitting(true);
      try {
        e.preventDefault();
        if (!(e.target instanceof HTMLFormElement)) {
          return;
        }
        const formData = new FormData(e.target);
        const attachment = await (screenshotInput && showScreenshotInput ? screenshotInput.value() : undefined);

        const data = {
          name: retrieveStringValue(formData, 'name'),
          email: retrieveStringValue(formData, 'email'),
          message: retrieveStringValue(formData, 'message'),
          attachments: attachment ? [attachment] : undefined,
        };

        if (!hasAllRequiredFields(data)) {
          return;
        }

        try {
          await onSubmit(
            {
              name: data.name,
              email: data.email,
              message: data.message,
              source: FEEDBACK_WIDGET_SOURCE,
              tags,
            },
            { attachments: data.attachments },
          );
          onSubmitSuccess(data);
        } catch (error) {
          npm_esm_DEBUG_BUILD && logger/* logger */.vF.error(error);
          setError(error );
          onSubmitError(error );
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [screenshotInput && showScreenshotInput, onSubmitSuccess, onSubmitError],
  );

  return (
    y$1('form', { class: "form", onSubmit: handleSubmit,}
      , ScreenshotInputComponent && showScreenshotInput ? (
        y$1(ScreenshotInputComponent, { onError: onScreenshotError,} )
      ) : null

      , y$1('fieldset', { class: "form__right", 'data-sentry-feedback': true, disabled: isSubmitting,}
        , y$1('div', { class: "form__top",}
          , error ? y$1('div', { class: "form__error-container",}, error) : null

          , showName ? (
            y$1('label', { for: "name", class: "form__label",}
              , y$1(LabelText, { label: nameLabel, isRequiredLabel: isRequiredLabel, isRequired: isNameRequired,} )
              , y$1('input', {
                class: "form__input",
                defaultValue: defaultName,
                id: "name",
                name: "name",
                placeholder: namePlaceholder,
                required: isNameRequired,
                type: "text",}
              )
            )
          ) : (
            y$1('input', { 'aria-hidden': true, value: defaultName, name: "name", type: "hidden",} )
          )

          , showEmail ? (
            y$1('label', { for: "email", class: "form__label",}
              , y$1(LabelText, { label: emailLabel, isRequiredLabel: isRequiredLabel, isRequired: isEmailRequired,} )
              , y$1('input', {
                class: "form__input",
                defaultValue: defaultEmail,
                id: "email",
                name: "email",
                placeholder: emailPlaceholder,
                required: isEmailRequired,
                type: "email",}
)
            )
          ) : (
            y$1('input', { 'aria-hidden': true, value: defaultEmail, name: "email", type: "hidden",} )
          )

          , y$1('label', { for: "message", class: "form__label",}
            , y$1(LabelText, { label: messageLabel, isRequiredLabel: isRequiredLabel, isRequired: true,} )
            , y$1('textarea', {
              autoFocus: true,
              class: "form__input form__input--textarea" ,
              id: "message",
              name: "message",
              placeholder: messagePlaceholder,
              required: true,
              rows: 5,}
            )
          )

          , ScreenshotInputComponent ? (
            y$1('label', { for: "screenshot", class: "form__label",}
              , y$1('button', {
                class: "btn btn--default" ,
                disabled: isSubmitting,
                type: "button",
                onClick: () => {
                  setScreenshotError(null);
                  setShowScreenshotInput(prev => !prev);
                },}

                , showScreenshotInput ? removeScreenshotButtonLabel : addScreenshotButtonLabel
              )
              , screenshotError ? y$1('div', { class: "form__error-container",}, screenshotError.message) : null
            )
          ) : null
        )
        , y$1('div', { class: "btn-group",}
          , y$1('button', { class: "btn btn--primary" , disabled: isSubmitting, type: "submit",}
            , submitButtonLabel
          )
          , y$1('button', { class: "btn btn--default" , disabled: isSubmitting, type: "button", onClick: onFormClose,}
            , cancelButtonLabel
          )
        )
      )
    )
  );
}

function LabelText({
  label,
  isRequired,
  isRequiredLabel,
}

) {
  return (
    y$1('span', { class: "form__label__text",}
      , label
      , isRequired && y$1('span', { class: "form__label__text--required",}, isRequiredLabel)
    )
  );
}

const WIDTH = 16;
const HEIGHT = 17;
const XMLNS = 'http://www.w3.org/2000/svg';

/**
 * Success Icon (checkmark)
 */
function SuccessIcon() {
  const createElementNS = (tagName) =>
    npm_esm_WINDOW.document.createElementNS(XMLNS, tagName);
  const svg = setAttributesNS(createElementNS('svg'), {
    width: `${WIDTH}`,
    height: `${HEIGHT}`,
    viewBox: `0 0 ${WIDTH} ${HEIGHT}`,
    fill: 'inherit',
  });

  const g = setAttributesNS(createElementNS('g'), {
    clipPath: 'url(#clip0_57_156)',
  });

  const path2 = setAttributesNS(createElementNS('path'), {
    ['fill-rule']: 'evenodd',
    ['clip-rule']: 'evenodd',
    d: 'M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z',
  });
  const path = setAttributesNS(createElementNS('path'), {
    d: 'M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z',
  });

  svg.appendChild(g).append(path, path2);

  const speakerDefs = createElementNS('defs');
  const speakerClipPathDef = setAttributesNS(createElementNS('clipPath'), {
    id: 'clip0_57_156',
  });

  const speakerRect = setAttributesNS(createElementNS('rect'), {
    width: `${WIDTH}`,
    height: `${WIDTH}`,
    fill: 'white',
    transform: 'translate(0 0.5)',
  });

  speakerClipPathDef.appendChild(speakerRect);
  speakerDefs.appendChild(speakerClipPathDef);

  svg.appendChild(speakerDefs).appendChild(speakerClipPathDef).appendChild(speakerRect);

  return svg;
}

function Dialog({ open, onFormSubmitted, ...props }) {
  const options = props.options;
  const successIconHtml = q(() => ({ __html: SuccessIcon().outerHTML }), []);

  const [timeoutId, setTimeoutId] = p(null);

  const handleOnSuccessClick = x(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    onFormSubmitted();
  }, [timeoutId]);

  const onSubmitSuccess = x(
    (data) => {
      props.onSubmitSuccess(data);
      setTimeoutId(
        setTimeout(() => {
          onFormSubmitted();
          setTimeoutId(null);
        }, SUCCESS_MESSAGE_TIMEOUT),
      );
    },
    [onFormSubmitted],
  );

  return (
    y$1(g$1, null
      , timeoutId ? (
        y$1('div', { class: "success__position", onClick: handleOnSuccessClick,}
          , y$1('div', { class: "success__content",}
            , options.successMessageText
            , y$1('span', { class: "success__icon", dangerouslySetInnerHTML: successIconHtml,} )
          )
        )
      ) : (
        y$1('dialog', { class: "dialog", onClick: options.onFormClose, open: open,}
          , y$1('div', { class: "dialog__position",}
            , y$1('div', {
              class: "dialog__content",
              onClick: e => {
                // Stop event propagation so clicks on content modal do not propagate to dialog (which will close dialog)
                e.stopPropagation();
              },}

              , y$1(DialogHeader, { options: options,} )
              , y$1(Form, { ...props, onSubmitSuccess: onSubmitSuccess,} )
            )
          )
        )
      )
    )
  );
}

const DIALOG = `
.dialog {
  position: fixed;
  z-index: var(--z-index);
  margin: 0;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100vh;
  width: 100vw;

  color: var(--dialog-color, var(--foreground));
  fill: var(--dialog-color, var(--foreground));
  line-height: 1.75em;

  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  inset: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.dialog__position {
  position: fixed;
  z-index: var(--z-index);
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  display: flex;
  max-height: calc(100vh - (2 * var(--page-margin)));
}
@media (max-width: 600px) {
  .dialog__position {
    inset: var(--page-margin);
    padding: 0;
  }
}

.dialog__position:has(.editor) {
  inset: var(--page-margin);
  padding: 0;
}

.dialog:not([open]) {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
.dialog:not([open]) .dialog__content {
  transform: translate(0, -16px) scale(0.98);
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: var(--dialog-padding, 24px);
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  overflow: auto;

  background: var(--dialog-background, var(--background));
  border-radius: var(--dialog-border-radius, 20px);
  border: var(--dialog-border, var(--border));
  box-shadow: var(--dialog-box-shadow, var(--box-shadow));
  transform: translate(0, 0) scale(1);
  transition: transform 0.2s ease-in-out;
}

`;

const DIALOG_HEADER = `
.dialog__header {
  display: flex;
  gap: 4px;
  justify-content: space-between;
  font-weight: var(--dialog-header-weight, 600);
  margin: 0;
}
.dialog__title {
  align-self: center;
  width: var(--form-width, 272px);
}

@media (max-width: 600px) {
  .dialog__title {
    width: auto;
  }
}

.dialog__position:has(.editor) .dialog__title {
  width: auto;
}


.brand-link {
  display: inline-flex;
}
.brand-link:focus-visible {
  outline: var(--outline);
}
`;

const FORM = `
.form {
  display: flex;
  overflow: auto;
  flex-direction: row;
  gap: 16px;
  flex: 1 0;
}

.form fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

.form__right {
  flex: 0 0 auto;
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: var(--form-width, 100%);
}

.dialog__position:has(.editor) .form__right {
  width: var(--form-width, 272px);
}

.form__top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__error-container {
  color: var(--error-color);
  fill: var(--error-color);
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px;
}

.form__label__text {
  display: flex;
  gap: 4px;
  align-items: center;
}

.form__label__text--required {
  font-size: 0.85em;
}

.form__input {
  font-family: inherit;
  line-height: inherit;
  background: transparent;
  box-sizing: border-box;
  border: var(--input-border, var(--border));
  border-radius: var(--input-border-radius, 6px);
  color: var(--input-color, inherit);
  fill: var(--input-color, inherit);
  font-size: var(--input-font-size, inherit);
  font-weight: var(--input-font-weight, 500);
  padding: 6px 12px;
}

.form__input::placeholder {
  opacity: 0.65;
  color: var(--input-placeholder-color, inherit);
  filter: var(--interactive-filter);
}

.form__input:focus-visible {
  outline: var(--input-focus-outline, var(--outline));
}

.form__input--textarea {
  font-family: inherit;
  resize: vertical;
}

.error {
  color: var(--error-color);
  fill: var(--error-color);
}
`;

const BUTTON = `
.btn-group {
  display: grid;
  gap: 8px;
}

.btn {
  line-height: inherit;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--button-font-size, inherit);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 6px 16px);
}
.btn[disabled] {
  opacity: 0.6;
  pointer-events: none;
}

.btn--primary {
  color: var(--button-primary-color, var(--accent-foreground));
  fill: var(--button-primary-color, var(--accent-foreground));
  background: var(--button-primary-background, var(--accent-background));
  border: var(--button-primary-border, var(--border));
  border-radius: var(--button-primary-border-radius, 6px);
  font-weight: var(--button-primary-font-weight, 500);
}
.btn--primary:hover {
  color: var(--button-primary-hover-color, var(--accent-foreground));
  fill: var(--button-primary-hover-color, var(--accent-foreground));
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
}
.btn--primary:focus-visible {
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
  outline: var(--button-primary-focus-outline, var(--outline));
}

.btn--default {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-background, var(--background));
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  font-weight: var(--button-font-weight, 500);
}
.btn--default:hover {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
}
.btn--default:focus-visible {
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
  outline: var(--button-focus-outline, var(--outline));
}
`;

const SUCCESS = `
.success__position {
  position: fixed;
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  z-index: var(--z-index);
}
.success__content {
  background: var(--success-background, var(--background));
  border: var(--success-border, var(--border));
  border-radius: var(--success-border-radius, 1.7em/50%);
  box-shadow: var(--success-box-shadow, var(--box-shadow));
  font-weight: var(--success-font-weight, 600);
  color: var(--success-color);
  fill: var(--success-color);
  padding: 12px 24px;
  line-height: 1.75em;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 6px;
  cursor: default;
}

.success__icon {
  display: flex;
}
`;

/**
 * Creates <style> element for widget dialog
 */
function createDialogStyles(styleNonce) {
  const style = DOCUMENT.createElement('style');

  style.textContent = `
:host {
  --dialog-inset: var(--inset);
}

${DIALOG}
${DIALOG_HEADER}
${FORM}
${BUTTON}
${SUCCESS}
`;

  if (styleNonce) {
    style.setAttribute('nonce', styleNonce);
  }

  return style;
}

function getUser() {
  const currentUser = (0,currentScopes/* getCurrentScope */.o5)().getUser();
  const isolationUser = (0,currentScopes/* getIsolationScope */.rm)().getUser();
  const globalUser = (0,currentScopes/* getGlobalScope */.m6)().getUser();
  if (currentUser && Object.keys(currentUser).length) {
    return currentUser;
  }
  if (isolationUser && Object.keys(isolationUser).length) {
    return isolationUser;
  }
  return globalUser;
}

const feedbackModalIntegration = (() => {
  return {
    name: 'FeedbackModal',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setupOnce() {},
    createDialog: ({ options, screenshotIntegration, sendFeedback, shadow }) => {
      const shadowRoot = shadow ;
      const userKey = options.useSentryUser;
      const user = getUser();

      const el = DOCUMENT.createElement('div');
      const style = createDialogStyles(options.styleNonce);

      let originalOverflow = '';
      const dialog = {
        get el() {
          return el;
        },
        appendToDom() {
          if (!shadowRoot.contains(style) && !shadowRoot.contains(el)) {
            shadowRoot.appendChild(style);
            shadowRoot.appendChild(el);
          }
        },
        removeFromDom() {
          shadowRoot.removeChild(el);
          shadowRoot.removeChild(style);
          DOCUMENT.body.style.overflow = originalOverflow;
        },
        open() {
          renderContent(true);
          options.onFormOpen?.();
          (0,currentScopes/* getClient */.KU)()?.emit('openFeedbackWidget');
          originalOverflow = DOCUMENT.body.style.overflow;
          DOCUMENT.body.style.overflow = 'hidden';
        },
        close() {
          renderContent(false);
          DOCUMENT.body.style.overflow = originalOverflow;
        },
      };

      const screenshotInput = screenshotIntegration?.createInput({ h: y$1, hooks, dialog, options });

      const renderContent = (open) => {
        B$1(
          y$1(Dialog, {
            options: options,
            screenshotInput: screenshotInput,
            showName: options.showName || options.isNameRequired,
            showEmail: options.showEmail || options.isEmailRequired,
            defaultName: (userKey && user && user[userKey.name]) || '',
            defaultEmail: (userKey && user && user[userKey.email]) || '',
            onFormClose: () => {
              renderContent(false);
              options.onFormClose?.();
            },
            onSubmit: sendFeedback,
            onSubmitSuccess: (data) => {
              renderContent(false);
              options.onSubmitSuccess?.(data);
            },
            onSubmitError: (error) => {
              options.onSubmitError?.(error);
            },
            onFormSubmitted: () => {
              options.onFormSubmitted?.();
            },
            open: open,}
          ),
          el,
        );
      };

      return dialog;
    },
  };
}) ;

function AnnotationsFactory({
  h, // eslint-disable-line @typescript-eslint/no-unused-vars
}) {
  return function Annotations({
    action,
    imageBuffer,
    annotatingRef,
  }

) {
    const onAnnotateStart = () => {
      if (action !== 'annotate') {
        return;
      }

      const handleMouseMove = (moveEvent) => {
        const annotateCanvas = annotatingRef.current;
        if (annotateCanvas) {
          const rect = annotateCanvas.getBoundingClientRect();
          const x = moveEvent.clientX - rect.x;
          const y = moveEvent.clientY - rect.y;

          const ctx = annotateCanvas.getContext('2d');
          if (ctx) {
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y);
          }
        }
      };

      const handleMouseUp = () => {
        const ctx = annotatingRef.current?.getContext('2d');
        if (ctx) {
          ctx.beginPath();
        }

        // Add your apply annotation logic here
        applyAnnotation();

        DOCUMENT.removeEventListener('mousemove', handleMouseMove);
        DOCUMENT.removeEventListener('mouseup', handleMouseUp);
      };

      DOCUMENT.addEventListener('mousemove', handleMouseMove);
      DOCUMENT.addEventListener('mouseup', handleMouseUp);
    };

    const applyAnnotation = () => {
      // Logic to apply the annotation
      const imageCtx = imageBuffer.getContext('2d');
      const annotateCanvas = annotatingRef.current;
      if (imageCtx && annotateCanvas) {
        imageCtx.drawImage(
          annotateCanvas,
          0,
          0,
          annotateCanvas.width,
          annotateCanvas.height,
          0,
          0,
          imageBuffer.width,
          imageBuffer.height,
        );

        const annotateCtx = annotateCanvas.getContext('2d');
        if (annotateCtx) {
          annotateCtx.clearRect(0, 0, annotateCanvas.width, annotateCanvas.height);
        }
      }
    };
    return (
      h('canvas', {
        class: `editor__annotation ${action === 'annotate' ? 'editor__annotation--active' : ''}`,
        onMouseDown: onAnnotateStart,
        ref: annotatingRef,}
)
    );
  };
}

function CropCornerFactory({
  h, // eslint-disable-line @typescript-eslint/no-unused-vars
}) {
  return function CropCorner({
    top,
    left,
    corner,
    onGrabButton,
  }

) {
    return (
      h('button', {
        class: `editor__crop-corner editor__crop-corner--${corner} `,
        style: {
          top: top,
          left: left,
        },
        onMouseDown: e => {
          e.preventDefault();
          onGrabButton(e, corner);
        },
        onClick: e => {
          e.preventDefault();
        },}
)
    );
  };
}

const CROP_BUTTON_SIZE = 30;
const CROP_BUTTON_BORDER = 3;
const CROP_BUTTON_OFFSET = CROP_BUTTON_SIZE + CROP_BUTTON_BORDER;
const DPI$1 = npm_esm_WINDOW.devicePixelRatio;

const constructRect = (box) => ({
  x: Math.min(box.startX, box.endX),
  y: Math.min(box.startY, box.endY),
  width: Math.abs(box.startX - box.endX),
  height: Math.abs(box.startY - box.endY),
});

const getContainedSize$1 = (img) => {
  const imgClientHeight = img.clientHeight;
  const imgClientWidth = img.clientWidth;
  const ratio = img.width / img.height;
  let width = imgClientHeight * ratio;
  let height = imgClientHeight;
  if (width > imgClientWidth) {
    width = imgClientWidth;
    height = imgClientWidth / ratio;
  }
  const x = (imgClientWidth - width) / 2;
  const y = (imgClientHeight - height) / 2;
  return { x: x, y: y, width: width, height: height };
};

function CropFactory({
  h,
  hooks,
  options,
})

 {
  const CropCorner = CropCornerFactory({ h });
  return function Crop({
    action,
    imageBuffer,
    croppingRef,
    cropContainerRef,
    croppingRect,
    setCroppingRect,
    resize,
  }

) {
    const initialPositionRef = hooks.useRef({ initialX: 0, initialY: 0 });

    const [isResizing, setIsResizing] = hooks.useState(false);
    const [confirmCrop, setConfirmCrop] = hooks.useState(false);

    hooks.useEffect(() => {
      const cropper = croppingRef.current;
      if (!cropper) {
        return;
      }

      const ctx = cropper.getContext('2d');
      if (!ctx) {
        return;
      }

      const imageDimensions = getContainedSize$1(imageBuffer);
      const croppingBox = constructRect(croppingRect);
      ctx.clearRect(0, 0, imageDimensions.width, imageDimensions.height);

      if (action !== 'crop') {
        return;
      }

      // draw gray overlay around the selection
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(0, 0, imageDimensions.width, imageDimensions.height);
      ctx.clearRect(croppingBox.x, croppingBox.y, croppingBox.width, croppingBox.height);

      // draw selection border
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.strokeRect(croppingBox.x + 1, croppingBox.y + 1, croppingBox.width - 2, croppingBox.height - 2);
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1;
      ctx.strokeRect(croppingBox.x + 3, croppingBox.y + 3, croppingBox.width - 6, croppingBox.height - 6);
    }, [croppingRect, action]);

    // Resizing logic
    const makeHandleMouseMove = hooks.useCallback((corner) => {
      return (e) => {
        if (!croppingRef.current) {
          return;
        }

        const cropCanvas = croppingRef.current;
        const cropBoundingRect = cropCanvas.getBoundingClientRect();
        const mouseX = e.clientX - cropBoundingRect.x;
        const mouseY = e.clientY - cropBoundingRect.y;

        switch (corner) {
          case 'top-left':
            setCroppingRect(prev => ({
              ...prev,
              startX: Math.min(Math.max(0, mouseX), prev.endX - CROP_BUTTON_OFFSET),
              startY: Math.min(Math.max(0, mouseY), prev.endY - CROP_BUTTON_OFFSET),
            }));
            break;
          case 'top-right':
            setCroppingRect(prev => ({
              ...prev,
              endX: Math.max(Math.min(mouseX, cropCanvas.width / DPI$1), prev.startX + CROP_BUTTON_OFFSET),
              startY: Math.min(Math.max(0, mouseY), prev.endY - CROP_BUTTON_OFFSET),
            }));
            break;
          case 'bottom-left':
            setCroppingRect(prev => ({
              ...prev,
              startX: Math.min(Math.max(0, mouseX), prev.endX - CROP_BUTTON_OFFSET),
              endY: Math.max(Math.min(mouseY, cropCanvas.height / DPI$1), prev.startY + CROP_BUTTON_OFFSET),
            }));
            break;
          case 'bottom-right':
            setCroppingRect(prev => ({
              ...prev,
              endX: Math.max(Math.min(mouseX, cropCanvas.width / DPI$1), prev.startX + CROP_BUTTON_OFFSET),
              endY: Math.max(Math.min(mouseY, cropCanvas.height / DPI$1), prev.startY + CROP_BUTTON_OFFSET),
            }));
            break;
        }
      };
    }, []);

    // Dragging logic
    const onDragStart = (e) => {
      if (isResizing) {
        return;
      }

      initialPositionRef.current = { initialX: e.clientX, initialY: e.clientY };

      const handleMouseMove = (moveEvent) => {
        const cropCanvas = croppingRef.current;
        if (!cropCanvas) {
          return;
        }

        const deltaX = moveEvent.clientX - initialPositionRef.current.initialX;
        const deltaY = moveEvent.clientY - initialPositionRef.current.initialY;

        setCroppingRect(prev => {
          const newStartX = Math.max(
            0,
            Math.min(prev.startX + deltaX, cropCanvas.width / DPI$1 - (prev.endX - prev.startX)),
          );
          const newStartY = Math.max(
            0,
            Math.min(prev.startY + deltaY, cropCanvas.height / DPI$1 - (prev.endY - prev.startY)),
          );

          const newEndX = newStartX + (prev.endX - prev.startX);
          const newEndY = newStartY + (prev.endY - prev.startY);

          initialPositionRef.current.initialX = moveEvent.clientX;
          initialPositionRef.current.initialY = moveEvent.clientY;

          return { startX: newStartX, startY: newStartY, endX: newEndX, endY: newEndY };
        });
      };

      const handleMouseUp = () => {
        DOCUMENT.removeEventListener('mousemove', handleMouseMove);
        DOCUMENT.removeEventListener('mouseup', handleMouseUp);
      };

      DOCUMENT.addEventListener('mousemove', handleMouseMove);
      DOCUMENT.addEventListener('mouseup', handleMouseUp);
    };

    const onGrabButton = (e, corner) => {
      setIsResizing(true);
      const handleMouseMove = makeHandleMouseMove(corner);
      const handleMouseUp = () => {
        DOCUMENT.removeEventListener('mousemove', handleMouseMove);
        DOCUMENT.removeEventListener('mouseup', handleMouseUp);
        setConfirmCrop(true);
        setIsResizing(false);
      };

      DOCUMENT.addEventListener('mouseup', handleMouseUp);
      DOCUMENT.addEventListener('mousemove', handleMouseMove);
    };

    function applyCrop() {
      const cutoutCanvas = DOCUMENT.createElement('canvas');
      const imageBox = getContainedSize$1(imageBuffer);
      const croppingBox = constructRect(croppingRect);
      cutoutCanvas.width = croppingBox.width * DPI$1;
      cutoutCanvas.height = croppingBox.height * DPI$1;

      const cutoutCtx = cutoutCanvas.getContext('2d');
      if (cutoutCtx && imageBuffer) {
        cutoutCtx.drawImage(
          imageBuffer,
          (croppingBox.x / imageBox.width) * imageBuffer.width,
          (croppingBox.y / imageBox.height) * imageBuffer.height,
          (croppingBox.width / imageBox.width) * imageBuffer.width,
          (croppingBox.height / imageBox.height) * imageBuffer.height,
          0,
          0,
          cutoutCanvas.width,
          cutoutCanvas.height,
        );
      }

      const ctx = imageBuffer.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, imageBuffer.width, imageBuffer.height);
        imageBuffer.width = cutoutCanvas.width;
        imageBuffer.height = cutoutCanvas.height;
        imageBuffer.style.width = `${croppingBox.width}px`;
        imageBuffer.style.height = `${croppingBox.height}px`;
        ctx.drawImage(cutoutCanvas, 0, 0);

        resize();
      }
    }

    return (
      h('div', {
        class: `editor__crop-container ${action === 'crop' ? '' : 'editor__crop-container--inactive'}
              ${confirmCrop ? 'editor__crop-container--move' : ''}`,
        ref: cropContainerRef,}

        , h('canvas', { onMouseDown: onDragStart, ref: croppingRef,})
        , action === 'crop' && (
          h('div', null
            , h(CropCorner, {
              left: croppingRect.startX - CROP_BUTTON_BORDER,
              top: croppingRect.startY - CROP_BUTTON_BORDER,
              onGrabButton: onGrabButton,
              corner: "top-left",}
            )
            , h(CropCorner, {
              left: croppingRect.endX - CROP_BUTTON_SIZE + CROP_BUTTON_BORDER,
              top: croppingRect.startY - CROP_BUTTON_BORDER,
              onGrabButton: onGrabButton,
              corner: "top-right",}
            )
            , h(CropCorner, {
              left: croppingRect.startX - CROP_BUTTON_BORDER,
              top: croppingRect.endY - CROP_BUTTON_SIZE + CROP_BUTTON_BORDER,
              onGrabButton: onGrabButton,
              corner: "bottom-left",}
            )
            , h(CropCorner, {
              left: croppingRect.endX - CROP_BUTTON_SIZE + CROP_BUTTON_BORDER,
              top: croppingRect.endY - CROP_BUTTON_SIZE + CROP_BUTTON_BORDER,
              onGrabButton: onGrabButton,
              corner: "bottom-right",}
            )
          )
        )
        , action === 'crop' && (
          h('div', {
            style: {
              left: Math.max(0, croppingRect.endX - 191),
              top: Math.max(0, croppingRect.endY + 8),
            },
            class: `editor__crop-btn-group ${confirmCrop ? 'editor__crop-btn-group--active' : ''}`,}

            , h('button', {
              onClick: e => {
                e.preventDefault();
                if (croppingRef.current) {
                  setCroppingRect({
                    startX: 0,
                    startY: 0,
                    endX: croppingRef.current.width / DPI$1,
                    endY: croppingRef.current.height / DPI$1,
                  });
                }
                setConfirmCrop(false);
              },
              class: "btn btn--default" ,}

              , options.cancelButtonLabel
            )
            , h('button', {
              onClick: e => {
                e.preventDefault();
                applyCrop();
                setConfirmCrop(false);
              },
              class: "btn btn--primary" ,}

              , options.confirmButtonLabel
            )
          )
        )
      )
    );
  };
}

/**
 * Creates <style> element for widget dialog
 */
function createScreenshotInputStyles(styleNonce) {
  const style = DOCUMENT.createElement('style');

  const surface200 = '#1A141F';
  const gray100 = '#302735';

  style.textContent = `
.editor {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
.editor__image-container {
  padding: 10px;
  padding-top: 65px;
  padding-bottom: 65px;
  position: relative;
  height: 100%;
  border-radius: var(--menu-border-radius, 6px);

  background-color: ${surface200};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${surface200} 8px,
      ${surface200} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${gray100} 15px,
      ${gray100} 16px
    );
}

.editor__annotation {
  z-index: 1;
}
.editor__annotation--active {
  z-index: 2;
}

.editor__canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor__canvas-container canvas {
  object-fit: contain;
  position: absolute;
}

.editor__crop-container {
  custor: auto;
  position: absolute;
  z-index: 2;
}
.editor__crop-container--inactive {
  z-index: 1;
}
.editor__crop-container--move {
  cursor: move;
}

.editor__crop-btn-group {
  padding: 8px;
  gap: 8px;
  border-radius: var(--menu-border-radius, 6px);
  background: var(--button-background, var(--background));
  width: 175px;
  position: absolute;
  display: none;
}
.editor__crop-btn-group--active {
  display: flex;
}

.editor__crop-corner {
  width: 30px;
  height: 30px;
  position: absolute;
  background: none;
  border: 3px solid #ffffff;
}

.editor__crop-corner--top-left {
  cursor: nwse-resize;
  border-right: none;
  border-bottom: none;
}
.editor__crop-corner--top-right {
  cursor: nesw-resize;
  border-left: none;
  border-bottom: none;
}
.editor__crop-corner--bottom-left {
  cursor: nesw-resize;
  border-right: none;
  border-top: none;
}
.editor__crop-corner--bottom-right {
  cursor: nwse-resize;
  border-left: none;
  border-top: none;
}
.editor__tool-container {
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
}
.editor__tool-bar {
  display: flex;
  gap: 8px;
}
.editor__tool {
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  background: var(--button-background, var(--background));
  color: var(--button-foreground, var(--foreground));
}

.editor__tool--active {
  background: var(--button-primary-background, var(--accent-background));
  color: var(--button-primary-foreground, var(--accent-foreground));
}
`;

  if (styleNonce) {
    style.setAttribute('nonce', styleNonce);
  }

  return style;
}

function CropIconFactory({
  h, // eslint-disable-line @typescript-eslint/no-unused-vars
}) {
  return function CropIcon() {
    return (
      h('svg', { width: "20", height: "20", viewBox: "0 0 16 16"   , fill: "none", xmlns: "http://www.w3.org/2000/svg",}
        , h('path', {
          d: "M15.25 12.5H12.5M12.5 12.5H4.50001C3.94773 12.5 3.50001 12.0523 3.50001 11.5V3.50002M12.5 12.5L12.5 4.50002C12.5 3.94773 12.0523 3.50002 11.5 3.50002H3.50001M12.5 12.5L12.5 15.25M3.50001 3.50002V0.750031M3.50001 3.50002H0.75"                  ,
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",}
        )
      )
    );
  };
}

function PenIconFactory({
  h, // eslint-disable-line @typescript-eslint/no-unused-vars
}) {
  return function PenIcon() {
    return (
      h('svg', { width: "20", height: "20", viewBox: "0 0 16 16"   , fill: "none", xmlns: "http://www.w3.org/2000/svg",}
        , h('path', {
          d: "M8.5 12L12 8.5L14 11L11 14L8.5 12Z"     ,
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",}
        )
        , h('path', {
          d: "M12 8.5L11 3.5L2 2L3.5 11L8.5 12L12 8.5Z"      ,
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",}
        )
        , h('path', { d: "M2 2L7.5 7.5"  , stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round",} )
      )
    );
  };
}

function ToolbarFactory({ h }) {
  return function Toolbar({
    action,
    setAction,
  }

) {
    const PenIcon = PenIconFactory({ h });
    const CropIcon = CropIconFactory({ h });

    return (
      h('div', { class: "editor__tool-container",}
        , h('div', null )
        , h('div', { class: "editor__tool-bar",}
          , h('button', {
            type: "button",
            class: `editor__tool ${action === 'crop' ? 'editor__tool--active' : ''}`,
            onClick: () => {
              if (action === 'crop') {
                setAction('');
              } else {
                setAction('crop');
              }
            },}

            , h(CropIcon, null )
          )
          , h('button', {
            type: "button",
            class: `editor__tool ${action === 'annotate' ? 'editor__tool--active' : ''}`,
            onClick: () => {
              if (action === 'annotate') {
                setAction('');
              } else {
                setAction('annotate');
              }
            },}

            , h(PenIcon, null )
          )
        )
        , h('div', null )
      )
    );
  };
}

function useTakeScreenshotFactory({ hooks }) {
  return function useTakeScreenshot({ onBeforeScreenshot, onScreenshot, onAfterScreenshot, onError }) {
    hooks.useEffect(() => {
      const takeScreenshot = async () => {
        onBeforeScreenshot();
        const stream = await esm_NAVIGATOR.mediaDevices.getDisplayMedia({
          video: {
            width: npm_esm_WINDOW.innerWidth * npm_esm_WINDOW.devicePixelRatio,
            height: npm_esm_WINDOW.innerHeight * npm_esm_WINDOW.devicePixelRatio,
          },
          audio: false,
          // @ts-expect-error experimental flags: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia#prefercurrenttab
          monitorTypeSurfaces: 'exclude',
          preferCurrentTab: true,
          selfBrowserSurface: 'include',
          surfaceSwitching: 'exclude',
        });

        const video = DOCUMENT.createElement('video');
        await new Promise((resolve, reject) => {
          video.srcObject = stream;
          video.onloadedmetadata = () => {
            onScreenshot(video);
            stream.getTracks().forEach(track => track.stop());
            resolve();
          };
          video.play().catch(reject);
        });
        onAfterScreenshot();
      };

      takeScreenshot().catch(onError);
    }, []);
  };
}

const DPI = npm_esm_WINDOW.devicePixelRatio;

const getContainedSize = (img) => {
  const imgClientHeight = img.clientHeight;
  const imgClientWidth = img.clientWidth;
  const ratio = img.width / img.height;
  let width = imgClientHeight * ratio;
  let height = imgClientHeight;
  if (width > imgClientWidth) {
    width = imgClientWidth;
    height = imgClientWidth / ratio;
  }
  const x = (imgClientWidth - width) / 2;
  const y = (imgClientHeight - height) / 2;
  return { x: x, y: y, width: width, height: height };
};

function ScreenshotEditorFactory({
  h,
  hooks,
  imageBuffer,
  dialog,
  options,
}) {
  const useTakeScreenshot = useTakeScreenshotFactory({ hooks });
  const Toolbar = ToolbarFactory({ h });
  const Annotations = AnnotationsFactory({ h });
  const Crop = CropFactory({ h, hooks, options });

  return function ScreenshotEditor({ onError }) {
    const styles = hooks.useMemo(() => ({ __html: createScreenshotInputStyles(options.styleNonce).innerText }), []);

    const canvasContainerRef = hooks.useRef(null);
    const cropContainerRef = hooks.useRef(null);
    const annotatingRef = hooks.useRef(null);
    const croppingRef = hooks.useRef(null);
    const [action, setAction] = hooks.useState('crop');
    const [croppingRect, setCroppingRect] = hooks.useState({
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
    });

    hooks.useEffect(() => {
      npm_esm_WINDOW.addEventListener('resize', resize);

      return () => {
        npm_esm_WINDOW.removeEventListener('resize', resize);
      };
    }, []);

    function resizeCanvas(canvasRef, imageDimensions) {
      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }

      canvas.width = imageDimensions.width * DPI;
      canvas.height = imageDimensions.height * DPI;
      canvas.style.width = `${imageDimensions.width}px`;
      canvas.style.height = `${imageDimensions.height}px`;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(DPI, DPI);
      }
    }

    function resize() {
      const imageDimensions = getContainedSize(imageBuffer);

      resizeCanvas(croppingRef, imageDimensions);
      resizeCanvas(annotatingRef, imageDimensions);

      const cropContainer = cropContainerRef.current;
      if (cropContainer) {
        cropContainer.style.width = `${imageDimensions.width}px`;
        cropContainer.style.height = `${imageDimensions.height}px`;
      }

      setCroppingRect({ startX: 0, startY: 0, endX: imageDimensions.width, endY: imageDimensions.height });
    }

    useTakeScreenshot({
      onBeforeScreenshot: hooks.useCallback(() => {
        (dialog.el ).style.display = 'none';
      }, []),
      onScreenshot: hooks.useCallback(
        (imageSource) => {
          const context = imageBuffer.getContext('2d');
          if (!context) {
            throw new Error('Could not get canvas context');
          }
          imageBuffer.width = imageSource.videoWidth;
          imageBuffer.height = imageSource.videoHeight;
          imageBuffer.style.width = '100%';
          imageBuffer.style.height = '100%';
          context.drawImage(imageSource, 0, 0);
        },
        [imageBuffer],
      ),
      onAfterScreenshot: hooks.useCallback(() => {
        (dialog.el ).style.display = 'block';
        const container = canvasContainerRef.current;
        container?.appendChild(imageBuffer);
        resize();
      }, []),
      onError: hooks.useCallback(error => {
        (dialog.el ).style.display = 'block';
        onError(error);
      }, []),
    });

    return (
      h('div', { class: "editor",}
        , h('style', { nonce: options.styleNonce, dangerouslySetInnerHTML: styles,} )
        , h('div', { class: "editor__image-container",}
          , h('div', { class: "editor__canvas-container", ref: canvasContainerRef,}
            , h(Crop, {
              action: action,
              imageBuffer: imageBuffer,
              croppingRef: croppingRef,
              cropContainerRef: cropContainerRef,
              croppingRect: croppingRect,
              setCroppingRect: setCroppingRect,
              resize: resize,}
            )
            , h(Annotations, { action: action, imageBuffer: imageBuffer, annotatingRef: annotatingRef,} )
          )
        )
        , options._experiments.annotations && h(Toolbar, { action: action, setAction: setAction,} )
      )
    );
  };
}

const feedbackScreenshotIntegration = (() => {
  return {
    name: 'FeedbackScreenshot',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setupOnce() {},
    createInput: ({ h, hooks, dialog, options }) => {
      const imageBuffer = DOCUMENT.createElement('canvas');

      return {
        input: ScreenshotEditorFactory({
          h: h ,
          hooks: hooks ,
          imageBuffer,
          dialog,
          options,
        }) , // eslint-disable-line @typescript-eslint/no-explicit-any

        value: async () => {
          const blob = await new Promise(resolve => {
            imageBuffer.toBlob(resolve, 'image/png');
          });
          if (blob) {
            const data = new Uint8Array(await blob.arrayBuffer());
            const attachment = {
              data,
              filename: 'screenshot.png',
              contentType: 'application/png',
              // attachmentType?: string;
            };
            return attachment;
          }
          return undefined;
        },
      };
    },
  };
}) ;


//# sourceMappingURL=index.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/feedbackAsync.js



/**
 * An integration to add user feedback to your application,
 * while loading most of the code lazily only when it's needed.
 */
const feedbackAsyncIntegration = buildFeedbackIntegration({
  lazyLoadIntegration: lazyLoadIntegration,
});


//# sourceMappingURL=feedbackAsync.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/feedbackSync.js


/** Add a widget to capture user feedback to your application. */
const feedbackSyncIntegration = buildFeedbackIntegration({
  getModalIntegration: () => feedbackModalIntegration,
  getScreenshotIntegration: () => feedbackScreenshotIntegration,
});


//# sourceMappingURL=feedbackSync.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/utils.js



/**
 * Checks if a given value is a valid measurement value.
 */
function isMeasurementValue(value) {
  return typeof value === 'number' && isFinite(value);
}

/**
 * Helper function to start child on transactions. This function will make sure that the transaction will
 * use the start timestamp of the created child span if it is earlier than the transactions actual
 * start timestamp.
 */
function startAndEndSpan(
  parentSpan,
  startTimeInSeconds,
  endTime,
  { ...ctx },
) {
  const parentStartTime = (0,spanUtils/* spanToJSON */.et)(parentSpan).start_timestamp;
  if (parentStartTime && parentStartTime > startTimeInSeconds) {
    // We can only do this for SentrySpans...
    if (typeof (parentSpan ).updateStartTime === 'function') {
      (parentSpan ).updateStartTime(startTimeInSeconds);
    }
  }

  // The return value only exists for tests
  return (0,trace/* withActiveSpan */.hb)(parentSpan, () => {
    const span = (0,trace/* startInactiveSpan */.Uk)({
      startTime: startTimeInSeconds,
      ...ctx,
    });

    if (span) {
      span.end(endTime);
    }

    return span;
  });
}

/**
 * Starts an inactive, standalone span used to send web vital values to Sentry.
 * DO NOT use this for arbitrary spans, as these spans require special handling
 * during ingestion to extract metrics.
 *
 * This function adds a bunch of attributes and data to the span that's shared
 * by all web vital standalone spans. However, you need to take care of adding
 * the actual web vital value as an event to the span. Also, you need to assign
 * a transaction name and some other values that are specific to the web vital.
 *
 * Ultimately, you also need to take care of ending the span to send it off.
 *
 * @param options
 *
 * @returns an inactive, standalone and NOT YET ended span
 */
function startStandaloneWebVitalSpan(options) {
  const client = (0,currentScopes/* getClient */.KU)();
  if (!client) {
    return;
  }

  const { name, transaction, attributes: passedAttributes, startTime } = options;

  const { release, environment, sendDefaultPii } = client.getOptions();
  // We need to get the replay, user, and activeTransaction from the current scope
  // so that we can associate replay id, profile id, and a user display to the span
  const replay = client.getIntegrationByName('Replay');
  const replayId = replay?.getReplayId();

  const scope = (0,currentScopes/* getCurrentScope */.o5)();

  const user = scope.getUser();
  const userDisplay = user !== undefined ? user.email || user.id || user.ip_address : undefined;

  let profileId;
  try {
    // @ts-expect-error skip optional chaining to save bundle size with try catch
    profileId = scope.getScopeData().contexts.profile.profile_id;
  } catch {
    // do nothing
  }

  const attributes = {
    release,
    environment,

    user: userDisplay || undefined,
    profile_id: profileId || undefined,
    replay_id: replayId || undefined,

    transaction,

    // Web vital score calculation relies on the user agent to account for different
    // browsers setting different thresholds for what is considered a good/meh/bad value.
    // For example: Chrome vs. Chrome Mobile
    'user_agent.original': types_WINDOW.navigator?.userAgent,

    // This tells Sentry to infer the IP address from the request
    'client.address': sendDefaultPii ? '{{auto}}' : undefined,

    ...passedAttributes,
  };

  return (0,trace/* startInactiveSpan */.Uk)({
    name,
    attributes,
    startTime,
    experimental: {
      standalone: true,
    },
  });
}

/** Get the browser performance API. */
function getBrowserPerformanceAPI() {
  // @ts-expect-error we want to make sure all of these are available, even if TS is sure they are
  return types_WINDOW.addEventListener && types_WINDOW.performance;
}

/**
 * Converts from milliseconds to seconds
 * @param time time in ms
 */
function msToSec(time) {
  return time / 1000;
}

/**
 * Converts ALPN protocol ids to name and version.
 *
 * (https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
 * @param nextHopProtocol PerformanceResourceTiming.nextHopProtocol
 */
function extractNetworkProtocol(nextHopProtocol) {
  let name = 'unknown';
  let version = 'unknown';
  let _name = '';
  for (const char of nextHopProtocol) {
    // http/1.1 etc.
    if (char === '/') {
      [name, version] = nextHopProtocol.split('/') ;
      break;
    }
    // h2, h3 etc.
    if (!isNaN(Number(char))) {
      name = _name === 'h' ? 'http' : _name;
      version = nextHopProtocol.split(_name)[1] ;
      break;
    }
    _name += char;
  }
  if (_name === nextHopProtocol) {
    // webrtc, ftp, etc.
    name = _name;
  }
  return { name, version };
}


//# sourceMappingURL=utils.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js
var hasSpansEnabled = __webpack_require__(54704);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/baggage.js
var utils_hoist_baggage = __webpack_require__(8922);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/tracing/sentryNonRecordingSpan.js
var sentryNonRecordingSpan = __webpack_require__(33868);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/asyncContext/index.js + 2 modules
var asyncContext = __webpack_require__(92328);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/carrier.js
var esm_carrier = __webpack_require__(95200);
// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/tracing.js
var tracing = __webpack_require__(8190);
;// ./node_modules/@sentry/core/build/esm/utils/traceData.js














/**
 * Extracts trace propagation data from the current span or from the client's scope (via transaction or propagation
 * context) and serializes it to `sentry-trace` and `baggage` values to strings. These values can be used to propagate
 * a trace via our tracing Http headers or Html `<meta>` tags.
 *
 * This function also applies some validation to the generated sentry-trace and baggage values to ensure that
 * only valid strings are returned.
 *
 * @returns an object with the tracing data values. The object keys are the name of the tracing key to be used as header
 * or meta tag name.
 */
function getTraceData(options = {}) {
  const client = (0,currentScopes/* getClient */.KU)();
  if (!isEnabled() || !client) {
    return {};
  }

  const carrier = (0,esm_carrier/* getMainCarrier */.EU)();
  const acs = (0,asyncContext/* getAsyncContextStrategy */.h)(carrier);
  if (acs.getTraceData) {
    return acs.getTraceData(options);
  }

  const scope = (0,currentScopes/* getCurrentScope */.o5)();
  const span = options.span || (0,spanUtils/* getActiveSpan */.Bk)();
  const sentryTrace = span ? (0,spanUtils/* spanToTraceHeader */.Qh)(span) : scopeToTraceHeader(scope);
  const dsc = span ? (0,tracing_dynamicSamplingContext/* getDynamicSamplingContextFromSpan */.k1)(span) : (0,tracing_dynamicSamplingContext/* getDynamicSamplingContextFromScope */.ao)(client, scope);
  const baggage = (0,utils_hoist_baggage/* dynamicSamplingContextToSentryBaggageHeader */.De)(dsc);

  const isValidSentryTraceHeader = tracing/* TRACEPARENT_REGEXP */.MI.test(sentryTrace);
  if (!isValidSentryTraceHeader) {
    logger/* logger */.vF.warn('Invalid sentry-trace data. Cannot generate trace data');
    return {};
  }

  return {
    'sentry-trace': sentryTrace,
    baggage,
  };
}

/**
 * Get a sentry-trace header value for the given scope.
 */
function scopeToTraceHeader(scope) {
  const { traceId, sampled, propagationSpanId } = scope.getPropagationContext();
  return (0,tracing/* generateSentryTraceHeader */.TC)(traceId, propagationSpanId, sampled);
}


//# sourceMappingURL=traceData.js.map

;// ./node_modules/@sentry/core/build/esm/fetch.js

















/**
 * Create and track fetch request spans for usage in combination with `addFetchInstrumentationHandler`.
 *
 * @returns Span if a span was created, otherwise void.
 */
function instrumentFetchRequest(
  handlerData,
  shouldCreateSpan,
  shouldAttachHeaders,
  spans,
  spanOrigin = 'auto.http.browser',
) {
  if (!handlerData.fetchData) {
    return undefined;
  }

  const { method, url } = handlerData.fetchData;

  const shouldCreateSpanResult = (0,hasSpansEnabled/* hasSpansEnabled */.f)() && shouldCreateSpan(url);

  if (handlerData.endTimestamp && shouldCreateSpanResult) {
    const spanId = handlerData.fetchData.__span;
    if (!spanId) return;

    const span = spans[spanId];
    if (span) {
      endSpan(span, handlerData);

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete spans[spanId];
    }
    return undefined;
  }

  const fullUrl = getFullURL(url);
  const parsedUrl = fullUrl ? url_parseUrl(fullUrl) : url_parseUrl(url);

  const hasParent = !!(0,spanUtils/* getActiveSpan */.Bk)();

  const span =
    shouldCreateSpanResult && hasParent
      ? (0,trace/* startInactiveSpan */.Uk)({
          name: `${method} ${stripUrlQueryAndFragment(url)}`,
          attributes: {
            url,
            type: 'fetch',
            'http.method': method,
            'http.url': fullUrl,
            'server.address': parsedUrl?.host,
            [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: spanOrigin,
            [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_OP */.uT]: 'http.client',
            ...(parsedUrl?.search && { 'http.query': parsedUrl?.search }),
            ...(parsedUrl?.hash && { 'http.fragment': parsedUrl?.hash }),
          },
        })
      : new sentryNonRecordingSpan/* SentryNonRecordingSpan */.w();

  handlerData.fetchData.__span = span.spanContext().spanId;
  spans[span.spanContext().spanId] = span;

  if (shouldAttachHeaders(handlerData.fetchData.url)) {
    const request = handlerData.args[0];

    const options = handlerData.args[1] || {};

    const headers = _addTracingHeadersToFetchRequest(
      request,
      options,
      // If performance is disabled (TWP) or there's no active root span (pageload/navigation/interaction),
      // we do not want to use the span as base for the trace headers,
      // which means that the headers will be generated from the scope and the sampling decision is deferred
      (0,hasSpansEnabled/* hasSpansEnabled */.f)() && hasParent ? span : undefined,
    );
    if (headers) {
      // Ensure this is actually set, if no options have been passed previously
      handlerData.args[1] = options;
      options.headers = headers;
    }
  }

  const client = (0,currentScopes/* getClient */.KU)();

  if (client) {
    const fetchHint = {
      input: handlerData.args,
      response: handlerData.response,
      startTimestamp: handlerData.startTimestamp,
      endTimestamp: handlerData.endTimestamp,
    } ;

    client.emit('beforeOutgoingRequestSpan', span, fetchHint);
  }

  return span;
}

/**
 * Adds sentry-trace and baggage headers to the various forms of fetch headers.
 */
function _addTracingHeadersToFetchRequest(
  request,
  fetchOptionsObj

,
  span,
) {
  const traceHeaders = getTraceData({ span });
  const sentryTrace = traceHeaders['sentry-trace'];
  const baggage = traceHeaders.baggage;

  // Nothing to do, when we return undefined here, the original headers will be used
  if (!sentryTrace) {
    return undefined;
  }

  const headers = fetchOptionsObj.headers || (isRequest(request) ? request.headers : undefined);

  if (!headers) {
    return { ...traceHeaders };
  } else if (isHeaders(headers)) {
    const newHeaders = new Headers(headers);
    newHeaders.set('sentry-trace', sentryTrace);

    if (baggage) {
      const prevBaggageHeader = newHeaders.get('baggage');
      if (prevBaggageHeader) {
        const prevHeaderStrippedFromSentryBaggage = stripBaggageHeaderOfSentryBaggageValues(prevBaggageHeader);
        newHeaders.set(
          'baggage',
          // If there are non-sentry entries (i.e. if the stripped string is non-empty/truthy) combine the stripped header and sentry baggage header
          // otherwise just set the sentry baggage header
          prevHeaderStrippedFromSentryBaggage ? `${prevHeaderStrippedFromSentryBaggage},${baggage}` : baggage,
        );
      } else {
        newHeaders.set('baggage', baggage);
      }
    }

    return newHeaders;
  } else if (Array.isArray(headers)) {
    const newHeaders = [
      ...headers
        // Remove any existing sentry-trace headers
        .filter(header => {
          return !(Array.isArray(header) && header[0] === 'sentry-trace');
        })
        // Get rid of previous sentry baggage values in baggage header
        .map(header => {
          if (Array.isArray(header) && header[0] === 'baggage' && typeof header[1] === 'string') {
            const [headerName, headerValue, ...rest] = header;
            return [headerName, stripBaggageHeaderOfSentryBaggageValues(headerValue), ...rest];
          } else {
            return header;
          }
        }),
      // Attach the new sentry-trace header
      ['sentry-trace', sentryTrace],
    ];

    if (baggage) {
      // If there are multiple entries with the same key, the browser will merge the values into a single request header.
      // Its therefore safe to simply push a "baggage" entry, even though there might already be another baggage header.
      newHeaders.push(['baggage', baggage]);
    }

    return newHeaders ;
  } else {
    const existingBaggageHeader = 'baggage' in headers ? headers.baggage : undefined;
    let newBaggageHeaders = [];

    if (Array.isArray(existingBaggageHeader)) {
      newBaggageHeaders = existingBaggageHeader
        .map(headerItem =>
          typeof headerItem === 'string' ? stripBaggageHeaderOfSentryBaggageValues(headerItem) : headerItem,
        )
        .filter(headerItem => headerItem === '');
    } else if (existingBaggageHeader) {
      newBaggageHeaders.push(stripBaggageHeaderOfSentryBaggageValues(existingBaggageHeader));
    }

    if (baggage) {
      newBaggageHeaders.push(baggage);
    }

    return {
      ...(headers ),
      'sentry-trace': sentryTrace,
      baggage: newBaggageHeaders.length > 0 ? newBaggageHeaders.join(',') : undefined,
    };
  }
}

function getFullURL(url) {
  try {
    const parsed = new URL(url);
    return parsed.href;
  } catch {
    return undefined;
  }
}

function endSpan(span, handlerData) {
  if (handlerData.response) {
    (0,spanstatus/* setHttpStatus */.N8)(span, handlerData.response.status);

    const contentLength = handlerData.response?.headers && handlerData.response.headers.get('content-length');

    if (contentLength) {
      const contentLengthNum = parseInt(contentLength);
      if (contentLengthNum > 0) {
        span.setAttribute('http.response_content_length', contentLengthNum);
      }
    }
  } else if (handlerData.error) {
    span.setStatus({ code: spanstatus/* SPAN_STATUS_ERROR */.TJ, message: 'internal_error' });
  }
  span.end();
}

function stripBaggageHeaderOfSentryBaggageValues(baggageHeader) {
  return (
    baggageHeader
      .split(',')
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .filter(baggageEntry => !baggageEntry.split('=')[0].startsWith(utils_hoist_baggage/* SENTRY_BAGGAGE_KEY_PREFIX */.sv))
      .join(',')
  );
}

function isRequest(request) {
  return typeof Request !== 'undefined' && (0,is/* isInstanceOf */.tH)(request, Request);
}

function isHeaders(headers) {
  return typeof Headers !== 'undefined' && (0,is/* isInstanceOf */.tH)(headers, Headers);
}


//# sourceMappingURL=fetch.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/tracing/request.js




/** Options for Request Instrumentation */

const responseToSpanId = new WeakMap();
const spanIdToEndTimestamp = new Map();

const defaultRequestInstrumentationOptions = {
  traceFetch: true,
  traceXHR: true,
  enableHTTPTimings: true,
  trackFetchStreamPerformance: false,
};

/** Registers span creators for xhr and fetch requests  */
function instrumentOutgoingRequests(client, _options) {
  const {
    traceFetch,
    traceXHR,
    trackFetchStreamPerformance,
    shouldCreateSpanForRequest,
    enableHTTPTimings,
    tracePropagationTargets,
  } = {
    traceFetch: defaultRequestInstrumentationOptions.traceFetch,
    traceXHR: defaultRequestInstrumentationOptions.traceXHR,
    trackFetchStreamPerformance: defaultRequestInstrumentationOptions.trackFetchStreamPerformance,
    ..._options,
  };

  const shouldCreateSpan =
    typeof shouldCreateSpanForRequest === 'function' ? shouldCreateSpanForRequest : (_) => true;

  const shouldAttachHeadersWithTargets = (url) => shouldAttachHeaders(url, tracePropagationTargets);

  const spans = {};

  if (traceFetch) {
    // Keeping track of http requests, whose body payloads resolved later than the initial resolved request
    // e.g. streaming using server sent events (SSE)
    client.addEventProcessor(event => {
      if (event.type === 'transaction' && event.spans) {
        event.spans.forEach(span => {
          if (span.op === 'http.client') {
            const updatedTimestamp = spanIdToEndTimestamp.get(span.span_id);
            if (updatedTimestamp) {
              span.timestamp = updatedTimestamp / 1000;
              spanIdToEndTimestamp.delete(span.span_id);
            }
          }
        });
      }
      return event;
    });

    if (trackFetchStreamPerformance) {
      addFetchEndInstrumentationHandler(handlerData => {
        if (handlerData.response) {
          const span = responseToSpanId.get(handlerData.response);
          if (span && handlerData.endTimestamp) {
            spanIdToEndTimestamp.set(span, handlerData.endTimestamp);
          }
        }
      });
    }

    addFetchInstrumentationHandler(handlerData => {
      const createdSpan = instrumentFetchRequest(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);

      if (handlerData.response && handlerData.fetchData.__span) {
        responseToSpanId.set(handlerData.response, handlerData.fetchData.__span);
      }

      // We cannot use `window.location` in the generic fetch instrumentation,
      // but we need it for reliable `server.address` attribute.
      // so we extend this in here
      if (createdSpan) {
        const fullUrl = request_getFullURL(handlerData.fetchData.url);
        const host = fullUrl ? url_parseUrl(fullUrl).host : undefined;
        createdSpan.setAttributes({
          'http.url': fullUrl,
          'server.address': host,
        });
      }

      if (enableHTTPTimings && createdSpan) {
        addHTTPTimings(createdSpan);
      }
    });
  }

  if (traceXHR) {
    addXhrInstrumentationHandler(handlerData => {
      const createdSpan = xhrCallback(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
      if (enableHTTPTimings && createdSpan) {
        addHTTPTimings(createdSpan);
      }
    });
  }
}

function isPerformanceResourceTiming(entry) {
  return (
    entry.entryType === 'resource' &&
    'initiatorType' in entry &&
    typeof (entry ).nextHopProtocol === 'string' &&
    (entry.initiatorType === 'fetch' || entry.initiatorType === 'xmlhttprequest')
  );
}

/**
 * Creates a temporary observer to listen to the next fetch/xhr resourcing timings,
 * so that when timings hit their per-browser limit they don't need to be removed.
 *
 * @param span A span that has yet to be finished, must contain `url` on data.
 */
function addHTTPTimings(span) {
  const { url } = (0,spanUtils/* spanToJSON */.et)(span).data;

  if (!url || typeof url !== 'string') {
    return;
  }

  const cleanup = addPerformanceInstrumentationHandler('resource', ({ entries }) => {
    entries.forEach(entry => {
      if (isPerformanceResourceTiming(entry) && entry.name.endsWith(url)) {
        const spanData = resourceTimingEntryToSpanData(entry);
        spanData.forEach(data => span.setAttribute(...data));
        // In the next tick, clean this handler up
        // We have to wait here because otherwise this cleans itself up before it is fully done
        setTimeout(cleanup);
      }
    });
  });
}

function request_getAbsoluteTime(time = 0) {
  return (((0,utils_hoist_time/* browserPerformanceTimeOrigin */.k3)() || performance.timeOrigin) + time) / 1000;
}

function resourceTimingEntryToSpanData(resourceTiming) {
  const { name, version } = extractNetworkProtocol(resourceTiming.nextHopProtocol);

  const timingSpanData = [];

  timingSpanData.push(['network.protocol.version', version], ['network.protocol.name', name]);

  if (!(0,utils_hoist_time/* browserPerformanceTimeOrigin */.k3)()) {
    return timingSpanData;
  }
  return [
    ...timingSpanData,
    ['http.request.redirect_start', request_getAbsoluteTime(resourceTiming.redirectStart)],
    ['http.request.fetch_start', request_getAbsoluteTime(resourceTiming.fetchStart)],
    ['http.request.domain_lookup_start', request_getAbsoluteTime(resourceTiming.domainLookupStart)],
    ['http.request.domain_lookup_end', request_getAbsoluteTime(resourceTiming.domainLookupEnd)],
    ['http.request.connect_start', request_getAbsoluteTime(resourceTiming.connectStart)],
    ['http.request.secure_connection_start', request_getAbsoluteTime(resourceTiming.secureConnectionStart)],
    ['http.request.connection_end', request_getAbsoluteTime(resourceTiming.connectEnd)],
    ['http.request.request_start', request_getAbsoluteTime(resourceTiming.requestStart)],
    ['http.request.response_start', request_getAbsoluteTime(resourceTiming.responseStart)],
    ['http.request.response_end', request_getAbsoluteTime(resourceTiming.responseEnd)],
  ];
}

/**
 * A function that determines whether to attach tracing headers to a request.
 * We only export this function for testing purposes.
 */
function shouldAttachHeaders(
  targetUrl,
  tracePropagationTargets,
) {
  // window.location.href not being defined is an edge case in the browser but we need to handle it.
  // Potentially dangerous situations where it may not be defined: Browser Extensions, Web Workers, patching of the location obj
  const href = (0,browser/* getLocationHref */.$N)();

  if (!href) {
    // If there is no window.location.origin, we default to only attaching tracing headers to relative requests, i.e. ones that start with `/`
    // BIG DISCLAIMER: Users can call URLs with a double slash (fetch("//example.com/api")), this is a shorthand for "send to the same protocol",
    // so we need a to exclude those requests, because they might be cross origin.
    const isRelativeSameOriginRequest = !!targetUrl.match(/^\/(?!\/)/);
    if (!tracePropagationTargets) {
      return isRelativeSameOriginRequest;
    } else {
      return (0,string/* stringMatchesSomePattern */.Xr)(targetUrl, tracePropagationTargets);
    }
  } else {
    let resolvedUrl;
    let currentOrigin;

    // URL parsing may fail, we default to not attaching trace headers in that case.
    try {
      resolvedUrl = new URL(targetUrl, href);
      currentOrigin = new URL(href).origin;
    } catch (e) {
      return false;
    }

    const isSameOriginRequest = resolvedUrl.origin === currentOrigin;
    if (!tracePropagationTargets) {
      return isSameOriginRequest;
    } else {
      return (
        (0,string/* stringMatchesSomePattern */.Xr)(resolvedUrl.toString(), tracePropagationTargets) ||
        (isSameOriginRequest && (0,string/* stringMatchesSomePattern */.Xr)(resolvedUrl.pathname, tracePropagationTargets))
      );
    }
  }
}

/**
 * Create and track xhr request spans
 *
 * @returns Span if a span was created, otherwise void.
 */
function xhrCallback(
  handlerData,
  shouldCreateSpan,
  shouldAttachHeaders,
  spans,
) {
  const xhr = handlerData.xhr;
  const sentryXhrData = xhr?.[SENTRY_XHR_DATA_KEY];

  if (!xhr || xhr.__sentry_own_request__ || !sentryXhrData) {
    return undefined;
  }

  const { url, method } = sentryXhrData;

  const shouldCreateSpanResult = (0,hasSpansEnabled/* hasSpansEnabled */.f)() && shouldCreateSpan(url);

  // check first if the request has finished and is tracked by an existing span which should now end
  if (handlerData.endTimestamp && shouldCreateSpanResult) {
    const spanId = xhr.__sentry_xhr_span_id__;
    if (!spanId) return;

    const span = spans[spanId];
    if (span && sentryXhrData.status_code !== undefined) {
      (0,spanstatus/* setHttpStatus */.N8)(span, sentryXhrData.status_code);
      span.end();

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete spans[spanId];
    }
    return undefined;
  }

  const fullUrl = request_getFullURL(url);
  const parsedUrl = fullUrl ? url_parseUrl(fullUrl) : url_parseUrl(url);

  const urlForSpanName = stripUrlQueryAndFragment(url);

  const hasParent = !!(0,spanUtils/* getActiveSpan */.Bk)();

  const span =
    shouldCreateSpanResult && hasParent
      ? (0,trace/* startInactiveSpan */.Uk)({
          name: `${method} ${urlForSpanName}`,
          attributes: {
            url,
            type: 'xhr',
            'http.method': method,
            'http.url': fullUrl,
            'server.address': parsedUrl?.host,
            [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.http.browser',
            [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_OP */.uT]: 'http.client',
            ...(parsedUrl?.search && { 'http.query': parsedUrl?.search }),
            ...(parsedUrl?.hash && { 'http.fragment': parsedUrl?.hash }),
          },
        })
      : new sentryNonRecordingSpan/* SentryNonRecordingSpan */.w();

  xhr.__sentry_xhr_span_id__ = span.spanContext().spanId;
  spans[xhr.__sentry_xhr_span_id__] = span;

  if (shouldAttachHeaders(url)) {
    addTracingHeadersToXhrRequest(
      xhr,
      // If performance is disabled (TWP) or there's no active root span (pageload/navigation/interaction),
      // we do not want to use the span as base for the trace headers,
      // which means that the headers will be generated from the scope and the sampling decision is deferred
      (0,hasSpansEnabled/* hasSpansEnabled */.f)() && hasParent ? span : undefined,
    );
  }

  const client = (0,currentScopes/* getClient */.KU)();
  if (client) {
    client.emit('beforeOutgoingRequestSpan', span, handlerData );
  }

  return span;
}

function addTracingHeadersToXhrRequest(xhr, span) {
  const { 'sentry-trace': sentryTrace, baggage } = getTraceData({ span });

  if (sentryTrace) {
    setHeaderOnXhr(xhr, sentryTrace, baggage);
  }
}

function setHeaderOnXhr(
  xhr,
  sentryTraceHeader,
  sentryBaggageHeader,
) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    xhr.setRequestHeader('sentry-trace', sentryTraceHeader);
    if (sentryBaggageHeader) {
      // From MDN: "If this method is called several times with the same header, the values are merged into one single request header."
      // We can therefore simply set a baggage header without checking what was there before
      // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      xhr.setRequestHeader('baggage', sentryBaggageHeader);
    }
  } catch (_) {
    // Error: InvalidStateError: Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED.
  }
}

function request_getFullURL(url) {
  try {
    // By adding a base URL to new URL(), this will also work for relative urls
    // If `url` is a full URL, the base URL is ignored anyhow
    const parsed = new URL(url, WINDOW.location.origin);
    return parsed.href;
  } catch {
    return undefined;
  }
}


//# sourceMappingURL=request.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/cls.js






/**
 * Starts tracking the Cumulative Layout Shift on the current page and collects the value once
 *
 * - the page visibility is hidden
 * - a navigation span is started (to stop CLS measurement for SPA soft navigations)
 *
 * Once either of these events triggers, the CLS value is sent as a standalone span and we stop
 * measuring CLS.
 */
function trackClsAsStandaloneSpan() {
  let standaloneCLsValue = 0;
  let standaloneClsEntry;
  let pageloadSpanId;

  if (!supportsLayoutShift()) {
    return;
  }

  let sentSpan = false;
  function _collectClsOnce() {
    if (sentSpan) {
      return;
    }
    sentSpan = true;
    if (pageloadSpanId) {
      sendStandaloneClsSpan(standaloneCLsValue, standaloneClsEntry, pageloadSpanId);
    }
    cleanupClsHandler();
  }

  const cleanupClsHandler = addClsInstrumentationHandler(({ metric }) => {
    const entry = metric.entries[metric.entries.length - 1] ;
    if (!entry) {
      return;
    }
    standaloneCLsValue = metric.value;
    standaloneClsEntry = entry;
  }, true);

  // use pagehide event from web-vitals
  onHidden(() => {
    _collectClsOnce();
  });

  // Since the call chain of this function is synchronous and evaluates before the SDK client is created,
  // we need to wait with subscribing to a client hook until the client is created. Therefore, we defer
  // to the next tick after the SDK setup.
  setTimeout(() => {
    const client = (0,currentScopes/* getClient */.KU)();

    if (!client) {
      return;
    }

    const unsubscribeStartNavigation = client.on('startNavigationSpan', () => {
      _collectClsOnce();
      unsubscribeStartNavigation?.();
    });

    const activeSpan = (0,spanUtils/* getActiveSpan */.Bk)();
    if (activeSpan) {
      const rootSpan = (0,spanUtils/* getRootSpan */.zU)(activeSpan);
      const spanJSON = (0,spanUtils/* spanToJSON */.et)(rootSpan);
      if (spanJSON.op === 'pageload') {
        pageloadSpanId = rootSpan.spanContext().spanId;
      }
    }
  }, 0);
}

function sendStandaloneClsSpan(clsValue, entry, pageloadSpanId) {
  debug_build_DEBUG_BUILD && logger/* logger */.vF.log(`Sending CLS span (${clsValue})`);

  const startTime = msToSec(((0,utils_hoist_time/* browserPerformanceTimeOrigin */.k3)() || 0) + (entry?.startTime || 0));
  const routeName = (0,currentScopes/* getCurrentScope */.o5)().getScopeData().transactionName;

  const name = entry ? (0,browser/* htmlTreeAsString */.Hd)(entry.sources[0]?.node) : 'Layout shift';

  const attributes = (0,object/* dropUndefinedKeys */.Ce)({
    [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.http.browser.cls',
    [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_OP */.uT]: 'ui.webvital.cls',
    [semanticAttributes/* SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME */.jG]: entry?.duration || 0,
    // attach the pageload span id to the CLS span so that we can link them in the UI
    'sentry.pageload.span_id': pageloadSpanId,
  });

  const span = startStandaloneWebVitalSpan({
    name,
    transaction: routeName,
    attributes,
    startTime,
  });

  if (span) {
    span.addEvent('cls', {
      [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT */.Sn]: '',
      [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE */.xc]: clsValue,
    });

    // LayoutShift performance entries always have a duration of 0, so we don't need to add `entry.duration` here
    // see: https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/duration
    span.end(startTime);
  }
}

function supportsLayoutShift() {
  try {
    return PerformanceObserver.supportedEntryTypes.includes('layout-shift');
  } catch {
    return false;
  }
}


//# sourceMappingURL=cls.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/browserMetrics.js









const MAX_INT_AS_BYTES = 2147483647;

let _performanceCursor = 0;

let _measurements = {};
let _lcpEntry;
let _clsEntry;

/**
 * Start tracking web vitals.
 * The callback returned by this function can be used to stop tracking & ensure all measurements are final & captured.
 *
 * @returns A function that forces web vitals collection
 */
function startTrackingWebVitals({ recordClsStandaloneSpans }) {
  const performance = getBrowserPerformanceAPI();
  if (performance && (0,utils_hoist_time/* browserPerformanceTimeOrigin */.k3)()) {
    // @ts-expect-error we want to make sure all of these are available, even if TS is sure they are
    if (performance.mark) {
      types_WINDOW.performance.mark('sentry-tracing-init');
    }
    const fidCleanupCallback = _trackFID();
    const lcpCleanupCallback = _trackLCP();
    const ttfbCleanupCallback = _trackTtfb();
    const clsCleanupCallback = recordClsStandaloneSpans ? trackClsAsStandaloneSpan() : _trackCLS();

    return () => {
      fidCleanupCallback();
      lcpCleanupCallback();
      ttfbCleanupCallback();
      clsCleanupCallback?.();
    };
  }

  return () => undefined;
}

/**
 * Start tracking long tasks.
 */
function startTrackingLongTasks() {
  addPerformanceInstrumentationHandler('longtask', ({ entries }) => {
    const parent = (0,spanUtils/* getActiveSpan */.Bk)();
    if (!parent) {
      return;
    }

    const { op: parentOp, start_timestamp: parentStartTimestamp } = (0,spanUtils/* spanToJSON */.et)(parent);

    for (const entry of entries) {
      const startTime = msToSec(((0,utils_hoist_time/* browserPerformanceTimeOrigin */.k3)() ) + entry.startTime);
      const duration = msToSec(entry.duration);

      if (parentOp === 'navigation' && parentStartTimestamp && startTime < parentStartTimestamp) {
        // Skip adding a span if the long task started before the navigation started.
        // `startAndEndSpan` will otherwise adjust the parent's start time to the span's start
        // time, potentially skewing the duration of the actual navigation as reported via our
        // routing instrumentations
        continue;
      }

      startAndEndSpan(parent, startTime, startTime + duration, {
        name: 'Main UI thread blocked',
        op: 'ui.long-task',
        attributes: {
          [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.ui.browser.metrics',
        },
      });
    }
  });
}

/**
 * Start tracking long animation frames.
 */
function startTrackingLongAnimationFrames() {
  // NOTE: the current web-vitals version (3.5.2) does not support long-animation-frame, so
  // we directly observe `long-animation-frame` events instead of through the web-vitals
  // `observe` helper function.
  const observer = new PerformanceObserver(list => {
    const parent = (0,spanUtils/* getActiveSpan */.Bk)();
    if (!parent) {
      return;
    }
    for (const entry of list.getEntries() ) {
      if (!entry.scripts[0]) {
        continue;
      }

      const startTime = msToSec(((0,utils_hoist_time/* browserPerformanceTimeOrigin */.k3)() ) + entry.startTime);

      const { start_timestamp: parentStartTimestamp, op: parentOp } = (0,spanUtils/* spanToJSON */.et)(parent);

      if (parentOp === 'navigation' && parentStartTimestamp && startTime < parentStartTimestamp) {
        // Skip adding the span if the long animation frame started before the navigation started.
        // `startAndEndSpan` will otherwise adjust the parent's start time to the span's start
        // time, potentially skewing the duration of the actual navigation as reported via our
        // routing instrumentations
        continue;
      }
      const duration = msToSec(entry.duration);

      const attributes = {
        [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.ui.browser.metrics',
      };

      const initialScript = entry.scripts[0];
      const { invoker, invokerType, sourceURL, sourceFunctionName, sourceCharPosition } = initialScript;
      attributes['browser.script.invoker'] = invoker;
      attributes['browser.script.invoker_type'] = invokerType;
      if (sourceURL) {
        attributes['code.filepath'] = sourceURL;
      }
      if (sourceFunctionName) {
        attributes['code.function'] = sourceFunctionName;
      }
      if (sourceCharPosition !== -1) {
        attributes['browser.script.source_char_position'] = sourceCharPosition;
      }

      startAndEndSpan(parent, startTime, startTime + duration, {
        name: 'Main UI thread blocked',
        op: 'ui.long-animation-frame',
        attributes,
      });
    }
  });

  observer.observe({ type: 'long-animation-frame', buffered: true });
}

/**
 * Start tracking interaction events.
 */
function startTrackingInteractions() {
  addPerformanceInstrumentationHandler('event', ({ entries }) => {
    const parent = (0,spanUtils/* getActiveSpan */.Bk)();
    if (!parent) {
      return;
    }
    for (const entry of entries) {
      if (entry.name === 'click') {
        const startTime = msToSec(((0,utils_hoist_time/* browserPerformanceTimeOrigin */.k3)() ) + entry.startTime);
        const duration = msToSec(entry.duration);

        const spanOptions = {
          name: (0,browser/* htmlTreeAsString */.Hd)(entry.target),
          op: `ui.interaction.${entry.name}`,
          startTime: startTime,
          attributes: {
            [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.ui.browser.metrics',
          },
        };

        const componentName = (0,browser/* getComponentName */.xE)(entry.target);
        if (componentName) {
          spanOptions.attributes['ui.component_name'] = componentName;
        }

        startAndEndSpan(parent, startTime, startTime + duration, spanOptions);
      }
    }
  });
}

/**
 * Starts tracking the Cumulative Layout Shift on the current page and collects the value and last entry
 * to the `_measurements` object which ultimately is applied to the pageload span's measurements.
 */
function _trackCLS() {
  return addClsInstrumentationHandler(({ metric }) => {
    const entry = metric.entries[metric.entries.length - 1] ;
    if (!entry) {
      return;
    }
    _measurements['cls'] = { value: metric.value, unit: '' };
    _clsEntry = entry;
  }, true);
}

/** Starts tracking the Largest Contentful Paint on the current page. */
function _trackLCP() {
  return addLcpInstrumentationHandler(({ metric }) => {
    const entry = metric.entries[metric.entries.length - 1];
    if (!entry) {
      return;
    }

    _measurements['lcp'] = { value: metric.value, unit: 'millisecond' };
    _lcpEntry = entry ;
  }, true);
}

/** Starts tracking the First Input Delay on the current page. */
function _trackFID() {
  return addFidInstrumentationHandler(({ metric }) => {
    const entry = metric.entries[metric.entries.length - 1];
    if (!entry) {
      return;
    }

    const timeOrigin = msToSec((0,utils_hoist_time/* browserPerformanceTimeOrigin */.k3)() );
    const startTime = msToSec(entry.startTime);
    _measurements['fid'] = { value: metric.value, unit: 'millisecond' };
    _measurements['mark.fid'] = { value: timeOrigin + startTime, unit: 'second' };
  });
}

function _trackTtfb() {
  return addTtfbInstrumentationHandler(({ metric }) => {
    const entry = metric.entries[metric.entries.length - 1];
    if (!entry) {
      return;
    }

    _measurements['ttfb'] = { value: metric.value, unit: 'millisecond' };
  });
}

/** Add performance related spans to a transaction */
function addPerformanceEntries(span, options) {
  const performance = getBrowserPerformanceAPI();
  const origin = (0,utils_hoist_time/* browserPerformanceTimeOrigin */.k3)();
  if (!performance?.getEntries || !origin) {
    // Gatekeeper if performance API not available
    return;
  }

  const timeOrigin = msToSec(origin);

  const performanceEntries = performance.getEntries();

  const { op, start_timestamp: transactionStartTime } = (0,spanUtils/* spanToJSON */.et)(span);

  performanceEntries.slice(_performanceCursor).forEach(entry => {
    const startTime = msToSec(entry.startTime);
    const duration = msToSec(
      // Inexplicably, Chrome sometimes emits a negative duration. We need to work around this.
      // There is a SO post attempting to explain this, but it leaves one with open questions: https://stackoverflow.com/questions/23191918/peformance-getentries-and-negative-duration-display
      // The way we clamp the value is probably not accurate, since we have observed this happen for things that may take a while to load, like for example the replay worker.
      // TODO: Investigate why this happens and how to properly mitigate. For now, this is a workaround to prevent transactions being dropped due to negative duration spans.
      Math.max(0, entry.duration),
    );

    if (op === 'navigation' && transactionStartTime && timeOrigin + startTime < transactionStartTime) {
      return;
    }

    switch (entry.entryType) {
      case 'navigation': {
        _addNavigationSpans(span, entry , timeOrigin);
        break;
      }
      case 'mark':
      case 'paint':
      case 'measure': {
        _addMeasureSpans(span, entry, startTime, duration, timeOrigin);

        // capture web vitals
        const firstHidden = getVisibilityWatcher();
        // Only report if the page wasn't hidden prior to the web vital.
        const shouldRecord = entry.startTime < firstHidden.firstHiddenTime;

        if (entry.name === 'first-paint' && shouldRecord) {
          _measurements['fp'] = { value: entry.startTime, unit: 'millisecond' };
        }
        if (entry.name === 'first-contentful-paint' && shouldRecord) {
          _measurements['fcp'] = { value: entry.startTime, unit: 'millisecond' };
        }
        break;
      }
      case 'resource': {
        _addResourceSpans(span, entry , entry.name, startTime, duration, timeOrigin);
        break;
      }
      // Ignore other entry types.
    }
  });

  _performanceCursor = Math.max(performanceEntries.length - 1, 0);

  _trackNavigator(span);

  // Measurements are only available for pageload transactions
  if (op === 'pageload') {
    _addTtfbRequestTimeToMeasurements(_measurements);

    const fidMark = _measurements['mark.fid'];
    if (fidMark && _measurements['fid']) {
      // create span for FID
      startAndEndSpan(span, fidMark.value, fidMark.value + msToSec(_measurements['fid'].value), {
        name: 'first input delay',
        op: 'ui.action',
        attributes: {
          [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.ui.browser.metrics',
        },
      });

      // Delete mark.fid as we don't want it to be part of final payload
      delete _measurements['mark.fid'];
    }

    // If FCP is not recorded we should not record the cls value
    // according to the new definition of CLS.
    // TODO: Check if the first condition is still necessary: `onCLS` already only fires once `onFCP` was called.
    if (!('fcp' in _measurements) || !options.recordClsOnPageloadSpan) {
      delete _measurements.cls;
    }

    Object.entries(_measurements).forEach(([measurementName, measurement]) => {
      (0,tracing_measurement/* setMeasurement */.X)(measurementName, measurement.value, measurement.unit);
    });

    // Set timeOrigin which denotes the timestamp which to base the LCP/FCP/FP/TTFB measurements on
    span.setAttribute('performance.timeOrigin', timeOrigin);

    // In prerendering scenarios, where a page might be prefetched and pre-rendered before the user clicks the link,
    // the navigation starts earlier than when the user clicks it. Web Vitals should always be based on the
    // user-perceived time, so they are not reported from the actual start of the navigation, but rather from the
    // time where the user actively started the navigation, for example by clicking a link.
    // This is user action is called "activation" and the time between navigation and activation is stored in
    // the `activationStart` attribute of the "navigation" PerformanceEntry.
    span.setAttribute('performance.activationStart', getActivationStart());

    _setWebVitalAttributes(span);
  }

  _lcpEntry = undefined;
  _clsEntry = undefined;
  _measurements = {};
}

/**
 * Create measure related spans.
 * Exported only for tests.
 */
function _addMeasureSpans(
  span,
  entry,
  startTime,
  duration,
  timeOrigin,
) {
  const navEntry = getNavigationEntry(false);
  const requestTime = msToSec(navEntry ? navEntry.requestStart : 0);
  // Because performance.measure accepts arbitrary timestamps it can produce
  // spans that happen before the browser even makes a request for the page.
  //
  // An example of this is the automatically generated Next.js-before-hydration
  // spans created by the Next.js framework.
  //
  // To prevent this we will pin the start timestamp to the request start time
  // This does make duration inaccurate, so if this does happen, we will add
  // an attribute to the span
  const measureStartTimestamp = timeOrigin + Math.max(startTime, requestTime);
  const startTimeStamp = timeOrigin + startTime;
  const measureEndTimestamp = startTimeStamp + duration;

  const attributes = {
    [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.resource.browser.metrics',
  };

  if (measureStartTimestamp !== startTimeStamp) {
    attributes['sentry.browser.measure_happened_before_request'] = true;
    attributes['sentry.browser.measure_start_time'] = measureStartTimestamp;
  }

  // Measurements from third parties can be off, which would create invalid spans, dropping transactions in the process.
  if (measureStartTimestamp <= measureEndTimestamp) {
    startAndEndSpan(span, measureStartTimestamp, measureEndTimestamp, {
      name: entry.name ,
      op: entry.entryType ,
      attributes,
    });
  }
}

/** Instrument navigation entries */
function _addNavigationSpans(span, entry, timeOrigin) {
  (['unloadEvent', 'redirect', 'domContentLoadedEvent', 'loadEvent', 'connect'] ).forEach(event => {
    _addPerformanceNavigationTiming(span, entry, event, timeOrigin);
  });
  _addPerformanceNavigationTiming(span, entry, 'secureConnection', timeOrigin, 'TLS/SSL');
  _addPerformanceNavigationTiming(span, entry, 'fetch', timeOrigin, 'cache');
  _addPerformanceNavigationTiming(span, entry, 'domainLookup', timeOrigin, 'DNS');

  _addRequest(span, entry, timeOrigin);
}

/** Create performance navigation related spans */
function _addPerformanceNavigationTiming(
  span,
  entry,
  event,
  timeOrigin,
  name = event,
) {
  const eventEnd = _getEndPropertyNameForNavigationTiming(event) ;
  const end = entry[eventEnd];
  const start = entry[`${event}Start`];
  if (!start || !end) {
    return;
  }
  startAndEndSpan(span, timeOrigin + msToSec(start), timeOrigin + msToSec(end), {
    op: `browser.${name}`,
    name: entry.name,
    attributes: {
      [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.ui.browser.metrics',
    },
  });
}

function _getEndPropertyNameForNavigationTiming(event) {
  if (event === 'secureConnection') {
    return 'connectEnd';
  }
  if (event === 'fetch') {
    return 'domainLookupStart';
  }
  return `${event}End`;
}

/** Create request and response related spans */
function _addRequest(span, entry, timeOrigin) {
  const requestStartTimestamp = timeOrigin + msToSec(entry.requestStart );
  const responseEndTimestamp = timeOrigin + msToSec(entry.responseEnd );
  const responseStartTimestamp = timeOrigin + msToSec(entry.responseStart );
  if (entry.responseEnd) {
    // It is possible that we are collecting these metrics when the page hasn't finished loading yet, for example when the HTML slowly streams in.
    // In this case, ie. when the document request hasn't finished yet, `entry.responseEnd` will be 0.
    // In order not to produce faulty spans, where the end timestamp is before the start timestamp, we will only collect
    // these spans when the responseEnd value is available. The backend (Relay) would drop the entire span if it contained faulty spans.
    startAndEndSpan(span, requestStartTimestamp, responseEndTimestamp, {
      op: 'browser.request',
      name: entry.name,
      attributes: {
        [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.ui.browser.metrics',
      },
    });

    startAndEndSpan(span, responseStartTimestamp, responseEndTimestamp, {
      op: 'browser.response',
      name: entry.name,
      attributes: {
        [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.ui.browser.metrics',
      },
    });
  }
}

/**
 * Create resource-related spans.
 * Exported only for tests.
 */
function _addResourceSpans(
  span,
  entry,
  resourceUrl,
  startTime,
  duration,
  timeOrigin,
) {
  // we already instrument based on fetch and xhr, so we don't need to
  // duplicate spans here.
  if (entry.initiatorType === 'xmlhttprequest' || entry.initiatorType === 'fetch') {
    return;
  }

  const parsedUrl = url_parseUrl(resourceUrl);

  const attributes = {
    [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.resource.browser.metrics',
  };
  setResourceEntrySizeData(attributes, entry, 'transferSize', 'http.response_transfer_size');
  setResourceEntrySizeData(attributes, entry, 'encodedBodySize', 'http.response_content_length');
  setResourceEntrySizeData(attributes, entry, 'decodedBodySize', 'http.decoded_response_content_length');

  // `deliveryType` is experimental and does not exist everywhere
  const deliveryType = (entry ).deliveryType;
  if (deliveryType != null) {
    attributes['http.response_delivery_type'] = deliveryType;
  }

  // Types do not reflect this property yet
  const renderBlockingStatus = (entry )
    .renderBlockingStatus;
  if (renderBlockingStatus) {
    attributes['resource.render_blocking_status'] = renderBlockingStatus;
  }

  if (parsedUrl.protocol) {
    attributes['url.scheme'] = parsedUrl.protocol.split(':').pop(); // the protocol returned by parseUrl includes a :, but OTEL spec does not, so we remove it.
  }

  if (parsedUrl.host) {
    attributes['server.address'] = parsedUrl.host;
  }

  attributes['url.same_origin'] = resourceUrl.includes(types_WINDOW.location.origin);

  const { name, version } = extractNetworkProtocol(entry.nextHopProtocol);
  attributes['network.protocol.name'] = name;
  attributes['network.protocol.version'] = version;

  const startTimestamp = timeOrigin + startTime;
  const endTimestamp = startTimestamp + duration;

  startAndEndSpan(span, startTimestamp, endTimestamp, {
    name: resourceUrl.replace(types_WINDOW.location.origin, ''),
    op: entry.initiatorType ? `resource.${entry.initiatorType}` : 'resource.other',
    attributes,
  });
}

/**
 * Capture the information of the user agent.
 */
function _trackNavigator(span) {
  const navigator = types_WINDOW.navigator ;
  if (!navigator) {
    return;
  }

  // track network connectivity
  const connection = navigator.connection;
  if (connection) {
    if (connection.effectiveType) {
      span.setAttribute('effectiveConnectionType', connection.effectiveType);
    }

    if (connection.type) {
      span.setAttribute('connectionType', connection.type);
    }

    if (isMeasurementValue(connection.rtt)) {
      _measurements['connection.rtt'] = { value: connection.rtt, unit: 'millisecond' };
    }
  }

  if (isMeasurementValue(navigator.deviceMemory)) {
    span.setAttribute('deviceMemory', `${navigator.deviceMemory} GB`);
  }

  if (isMeasurementValue(navigator.hardwareConcurrency)) {
    span.setAttribute('hardwareConcurrency', String(navigator.hardwareConcurrency));
  }
}

/** Add LCP / CLS data to span to allow debugging */
function _setWebVitalAttributes(span) {
  if (_lcpEntry) {
    // Capture Properties of the LCP element that contributes to the LCP.

    if (_lcpEntry.element) {
      span.setAttribute('lcp.element', (0,browser/* htmlTreeAsString */.Hd)(_lcpEntry.element));
    }

    if (_lcpEntry.id) {
      span.setAttribute('lcp.id', _lcpEntry.id);
    }

    if (_lcpEntry.url) {
      // Trim URL to the first 200 characters.
      span.setAttribute('lcp.url', _lcpEntry.url.trim().slice(0, 200));
    }

    if (_lcpEntry.loadTime != null) {
      // loadTime is the time of LCP that's related to receiving the LCP element response..
      span.setAttribute('lcp.loadTime', _lcpEntry.loadTime);
    }

    if (_lcpEntry.renderTime != null) {
      // renderTime is loadTime + rendering time
      // it's 0 if the LCP element is loaded from a 3rd party origin that doesn't send the
      // `Timing-Allow-Origin` header.
      span.setAttribute('lcp.renderTime', _lcpEntry.renderTime);
    }

    span.setAttribute('lcp.size', _lcpEntry.size);
  }

  // See: https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift
  if (_clsEntry?.sources) {
    _clsEntry.sources.forEach((source, index) =>
      span.setAttribute(`cls.source.${index + 1}`, (0,browser/* htmlTreeAsString */.Hd)(source.node)),
    );
  }
}

function setResourceEntrySizeData(
  attributes,
  entry,
  key,
  dataKey,
) {
  const entryVal = entry[key];
  if (entryVal != null && entryVal < MAX_INT_AS_BYTES) {
    attributes[dataKey] = entryVal;
  }
}

/**
 * Add ttfb request time information to measurements.
 *
 * ttfb information is added via vendored web vitals library.
 */
function _addTtfbRequestTimeToMeasurements(_measurements) {
  const navEntry = getNavigationEntry(false);
  if (!navEntry) {
    return;
  }

  const { responseStart, requestStart } = navEntry;

  if (requestStart <= responseStart) {
    _measurements['ttfb.requestTime'] = {
      value: responseStart - requestStart,
      unit: 'millisecond',
    };
  }
}


//# sourceMappingURL=browserMetrics.js.map

;// ./node_modules/@sentry-internal/browser-utils/build/esm/metrics/inp.js




const LAST_INTERACTIONS = [];
const INTERACTIONS_SPAN_MAP = new Map();

/**
 * Start tracking INP webvital events.
 */
function startTrackingINP() {
  const performance = getBrowserPerformanceAPI();
  if (performance && (0,utils_hoist_time/* browserPerformanceTimeOrigin */.k3)()) {
    const inpCallback = _trackINP();

    return () => {
      inpCallback();
    };
  }

  return () => undefined;
}

const INP_ENTRY_MAP = {
  click: 'click',
  pointerdown: 'click',
  pointerup: 'click',
  mousedown: 'click',
  mouseup: 'click',
  touchstart: 'click',
  touchend: 'click',
  mouseover: 'hover',
  mouseout: 'hover',
  mouseenter: 'hover',
  mouseleave: 'hover',
  pointerover: 'hover',
  pointerout: 'hover',
  pointerenter: 'hover',
  pointerleave: 'hover',
  dragstart: 'drag',
  dragend: 'drag',
  drag: 'drag',
  dragenter: 'drag',
  dragleave: 'drag',
  dragover: 'drag',
  drop: 'drag',
  keydown: 'press',
  keyup: 'press',
  keypress: 'press',
  input: 'press',
};

/** Starts tracking the Interaction to Next Paint on the current page. */
function _trackINP() {
  return addInpInstrumentationHandler(({ metric }) => {
    if (metric.value == undefined) {
      return;
    }

    const entry = metric.entries.find(entry => entry.duration === metric.value && INP_ENTRY_MAP[entry.name]);

    if (!entry) {
      return;
    }

    const { interactionId } = entry;
    const interactionType = INP_ENTRY_MAP[entry.name];

    /** Build the INP span, create an envelope from the span, and then send the envelope */
    const startTime = msToSec(((0,utils_hoist_time/* browserPerformanceTimeOrigin */.k3)() ) + entry.startTime);
    const duration = msToSec(metric.value);
    const activeSpan = (0,spanUtils/* getActiveSpan */.Bk)();
    const rootSpan = activeSpan ? (0,spanUtils/* getRootSpan */.zU)(activeSpan) : undefined;

    // We first try to lookup the span from our INTERACTIONS_SPAN_MAP,
    // where we cache the route per interactionId
    const cachedSpan = interactionId != null ? INTERACTIONS_SPAN_MAP.get(interactionId) : undefined;

    const spanToUse = cachedSpan || rootSpan;

    // Else, we try to use the active span.
    // Finally, we fall back to look at the transactionName on the scope
    const routeName = spanToUse ? (0,spanUtils/* spanToJSON */.et)(spanToUse).description : (0,currentScopes/* getCurrentScope */.o5)().getScopeData().transactionName;

    const name = (0,browser/* htmlTreeAsString */.Hd)(entry.target);
    const attributes = (0,object/* dropUndefinedKeys */.Ce)({
      [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.http.browser.inp',
      [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_OP */.uT]: `ui.interaction.${interactionType}`,
      [semanticAttributes/* SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME */.jG]: entry.duration,
    });

    const span = startStandaloneWebVitalSpan({
      name,
      transaction: routeName,
      attributes,
      startTime,
    });

    if (span) {
      span.addEvent('inp', {
        [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT */.Sn]: 'millisecond',
        [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE */.xc]: metric.value,
      });

      span.end(startTime + duration);
    }
  });
}

/**
 * Register a listener to cache route information for INP interactions.
 */
function registerInpInteractionListener() {
  const handleEntries = ({ entries }) => {
    const activeSpan = (0,spanUtils/* getActiveSpan */.Bk)();
    const activeRootSpan = activeSpan && (0,spanUtils/* getRootSpan */.zU)(activeSpan);

    entries.forEach(entry => {
      if (!isPerformanceEventTiming(entry) || !activeRootSpan) {
        return;
      }

      const interactionId = entry.interactionId;
      if (interactionId == null) {
        return;
      }

      // If the interaction was already recorded before, nothing more to do
      if (INTERACTIONS_SPAN_MAP.has(interactionId)) {
        return;
      }

      // We keep max. 10 interactions in the list, then remove the oldest one & clean up
      if (LAST_INTERACTIONS.length > 10) {
        const last = LAST_INTERACTIONS.shift() ;
        INTERACTIONS_SPAN_MAP.delete(last);
      }

      // We add the interaction to the list of recorded interactions
      // and store the span for this interaction
      LAST_INTERACTIONS.push(interactionId);
      INTERACTIONS_SPAN_MAP.set(interactionId, activeRootSpan);
    });
  };

  addPerformanceInstrumentationHandler('event', handleEntries);
  addPerformanceInstrumentationHandler('first-input', handleEntries);
}


//# sourceMappingURL=inp.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils/spanOnScope.js
var spanOnScope = __webpack_require__(70333);
;// ./node_modules/@sentry/core/build/esm/tracing/idleSpan.js













const TRACING_DEFAULTS = {
  idleTimeout: 1000,
  finalTimeout: 30000,
  childSpanTimeout: 15000,
};

const FINISH_REASON_HEARTBEAT_FAILED = 'heartbeatFailed';
const FINISH_REASON_IDLE_TIMEOUT = 'idleTimeout';
const FINISH_REASON_FINAL_TIMEOUT = 'finalTimeout';
const FINISH_REASON_EXTERNAL_FINISH = 'externalFinish';

/**
 * An idle span is a span that automatically finishes. It does this by tracking child spans as activities.
 * An idle span is always the active span.
 */
function startIdleSpan(startSpanOptions, options = {}) {
  // Activities store a list of active spans
  const activities = new Map();

  // We should not use heartbeat if we finished a span
  let _finished = false;

  // Timer that tracks idleTimeout
  let _idleTimeoutID;

  // The reason why the span was finished
  let _finishReason = FINISH_REASON_EXTERNAL_FINISH;

  let _autoFinishAllowed = !options.disableAutoFinish;

  const _cleanupHooks = [];

  const {
    idleTimeout = TRACING_DEFAULTS.idleTimeout,
    finalTimeout = TRACING_DEFAULTS.finalTimeout,
    childSpanTimeout = TRACING_DEFAULTS.childSpanTimeout,
    beforeSpanEnd,
  } = options;

  const client = (0,currentScopes/* getClient */.KU)();

  if (!client || !(0,hasSpansEnabled/* hasSpansEnabled */.f)()) {
    const span = new sentryNonRecordingSpan/* SentryNonRecordingSpan */.w();

    const dsc = {
      sample_rate: '0',
      sampled: 'false',
      ...(0,tracing_dynamicSamplingContext/* getDynamicSamplingContextFromSpan */.k1)(span),
    } ;
    (0,tracing_dynamicSamplingContext/* freezeDscOnSpan */.LZ)(span, dsc);

    return span;
  }

  const scope = (0,currentScopes/* getCurrentScope */.o5)();
  const previousActiveSpan = (0,spanUtils/* getActiveSpan */.Bk)();
  const span = _startIdleSpan(startSpanOptions);

  // We patch span.end to ensure we can run some things before the span is ended
  // eslint-disable-next-line @typescript-eslint/unbound-method
  span.end = new Proxy(span.end, {
    apply(target, thisArg, args) {
      if (beforeSpanEnd) {
        beforeSpanEnd(span);
      }

      // If the span is non-recording, nothing more to do here...
      // This is the case if tracing is enabled but this specific span was not sampled
      if (thisArg instanceof sentryNonRecordingSpan/* SentryNonRecordingSpan */.w) {
        return;
      }

      // Just ensuring that this keeps working, even if we ever have more arguments here
      const [definedEndTimestamp, ...rest] = args;
      const timestamp = definedEndTimestamp || (0,utils_hoist_time/* timestampInSeconds */.zf)();
      const spanEndTimestamp = (0,spanUtils/* spanTimeInputToSeconds */.cI)(timestamp);

      // Ensure we end with the last span timestamp, if possible
      const spans = (0,spanUtils/* getSpanDescendants */.xO)(span).filter(child => child !== span);

      // If we have no spans, we just end, nothing else to do here
      if (!spans.length) {
        onIdleSpanEnded(spanEndTimestamp);
        return Reflect.apply(target, thisArg, [spanEndTimestamp, ...rest]);
      }

      const childEndTimestamps = spans
        .map(span => (0,spanUtils/* spanToJSON */.et)(span).timestamp)
        .filter(timestamp => !!timestamp) ;
      const latestSpanEndTimestamp = childEndTimestamps.length ? Math.max(...childEndTimestamps) : undefined;

      // In reality this should always exist here, but type-wise it may be undefined...
      const spanStartTimestamp = (0,spanUtils/* spanToJSON */.et)(span).start_timestamp;

      // The final endTimestamp should:
      // * Never be before the span start timestamp
      // * Be the latestSpanEndTimestamp, if there is one, and it is smaller than the passed span end timestamp
      // * Otherwise be the passed end timestamp
      // Final timestamp can never be after finalTimeout
      const endTimestamp = Math.min(
        spanStartTimestamp ? spanStartTimestamp + finalTimeout / 1000 : Infinity,
        Math.max(spanStartTimestamp || -Infinity, Math.min(spanEndTimestamp, latestSpanEndTimestamp || Infinity)),
      );

      onIdleSpanEnded(endTimestamp);
      return Reflect.apply(target, thisArg, [endTimestamp, ...rest]);
    },
  });

  /**
   * Cancels the existing idle timeout, if there is one.
   */
  function _cancelIdleTimeout() {
    if (_idleTimeoutID) {
      clearTimeout(_idleTimeoutID);
      _idleTimeoutID = undefined;
    }
  }

  /**
   * Restarts idle timeout, if there is no running idle timeout it will start one.
   */
  function _restartIdleTimeout(endTimestamp) {
    _cancelIdleTimeout();
    _idleTimeoutID = setTimeout(() => {
      if (!_finished && activities.size === 0 && _autoFinishAllowed) {
        _finishReason = FINISH_REASON_IDLE_TIMEOUT;
        span.end(endTimestamp);
      }
    }, idleTimeout);
  }

  /**
   * Restarts child span timeout, if there is none running it will start one.
   */
  function _restartChildSpanTimeout(endTimestamp) {
    _idleTimeoutID = setTimeout(() => {
      if (!_finished && _autoFinishAllowed) {
        _finishReason = FINISH_REASON_HEARTBEAT_FAILED;
        span.end(endTimestamp);
      }
    }, childSpanTimeout);
  }

  /**
   * Start tracking a specific activity.
   * @param spanId The span id that represents the activity
   */
  function _pushActivity(spanId) {
    _cancelIdleTimeout();
    activities.set(spanId, true);

    const endTimestamp = (0,utils_hoist_time/* timestampInSeconds */.zf)();
    // We need to add the timeout here to have the real endtimestamp of the idle span
    // Remember timestampInSeconds is in seconds, timeout is in ms
    _restartChildSpanTimeout(endTimestamp + childSpanTimeout / 1000);
  }

  /**
   * Remove an activity from usage
   * @param spanId The span id that represents the activity
   */
  function _popActivity(spanId) {
    if (activities.has(spanId)) {
      activities.delete(spanId);
    }

    if (activities.size === 0) {
      const endTimestamp = (0,utils_hoist_time/* timestampInSeconds */.zf)();
      // We need to add the timeout here to have the real endtimestamp of the idle span
      // Remember timestampInSeconds is in seconds, timeout is in ms
      _restartIdleTimeout(endTimestamp + idleTimeout / 1000);
    }
  }

  function onIdleSpanEnded(endTimestamp) {
    _finished = true;
    activities.clear();

    _cleanupHooks.forEach(cleanup => cleanup());

    (0,spanOnScope/* _setSpanForScope */.r)(scope, previousActiveSpan);

    const spanJSON = (0,spanUtils/* spanToJSON */.et)(span);

    const { start_timestamp: startTimestamp } = spanJSON;
    // This should never happen, but to make TS happy...
    if (!startTimestamp) {
      return;
    }

    const attributes = spanJSON.data;
    if (!attributes[semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON */.fs]) {
      span.setAttribute(semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON */.fs, _finishReason);
    }

    logger/* logger */.vF.log(`[Tracing] Idle span "${spanJSON.op}" finished`);

    const childSpans = (0,spanUtils/* getSpanDescendants */.xO)(span).filter(child => child !== span);

    let discardedSpans = 0;
    childSpans.forEach(childSpan => {
      // We cancel all pending spans with status "cancelled" to indicate the idle span was finished early
      if (childSpan.isRecording()) {
        childSpan.setStatus({ code: spanstatus/* SPAN_STATUS_ERROR */.TJ, message: 'cancelled' });
        childSpan.end(endTimestamp);
        debug_build/* DEBUG_BUILD */.T &&
          logger/* logger */.vF.log('[Tracing] Cancelling span since span ended early', JSON.stringify(childSpan, undefined, 2));
      }

      const childSpanJSON = (0,spanUtils/* spanToJSON */.et)(childSpan);
      const { timestamp: childEndTimestamp = 0, start_timestamp: childStartTimestamp = 0 } = childSpanJSON;

      const spanStartedBeforeIdleSpanEnd = childStartTimestamp <= endTimestamp;

      // Add a delta with idle timeout so that we prevent false positives
      const timeoutWithMarginOfError = (finalTimeout + idleTimeout) / 1000;
      const spanEndedBeforeFinalTimeout = childEndTimestamp - childStartTimestamp <= timeoutWithMarginOfError;

      if (debug_build/* DEBUG_BUILD */.T) {
        const stringifiedSpan = JSON.stringify(childSpan, undefined, 2);
        if (!spanStartedBeforeIdleSpanEnd) {
          logger/* logger */.vF.log('[Tracing] Discarding span since it happened after idle span was finished', stringifiedSpan);
        } else if (!spanEndedBeforeFinalTimeout) {
          logger/* logger */.vF.log('[Tracing] Discarding span since it finished after idle span final timeout', stringifiedSpan);
        }
      }

      if (!spanEndedBeforeFinalTimeout || !spanStartedBeforeIdleSpanEnd) {
        (0,spanUtils/* removeChildSpanFromSpan */.VS)(span, childSpan);
        discardedSpans++;
      }
    });

    if (discardedSpans > 0) {
      span.setAttribute('sentry.idle_span_discarded_spans', discardedSpans);
    }
  }

  _cleanupHooks.push(
    client.on('spanStart', startedSpan => {
      // If we already finished the idle span,
      // or if this is the idle span itself being started,
      // or if the started span has already been closed,
      // we don't care about it for activity
      if (_finished || startedSpan === span || !!(0,spanUtils/* spanToJSON */.et)(startedSpan).timestamp) {
        return;
      }

      const allSpans = (0,spanUtils/* getSpanDescendants */.xO)(span);

      // If the span that was just started is a child of the idle span, we should track it
      if (allSpans.includes(startedSpan)) {
        _pushActivity(startedSpan.spanContext().spanId);
      }
    }),
  );

  _cleanupHooks.push(
    client.on('spanEnd', endedSpan => {
      if (_finished) {
        return;
      }

      _popActivity(endedSpan.spanContext().spanId);
    }),
  );

  _cleanupHooks.push(
    client.on('idleSpanEnableAutoFinish', spanToAllowAutoFinish => {
      if (spanToAllowAutoFinish === span) {
        _autoFinishAllowed = true;
        _restartIdleTimeout();

        if (activities.size) {
          _restartChildSpanTimeout();
        }
      }
    }),
  );

  // We only start the initial idle timeout if we are not delaying the auto finish
  if (!options.disableAutoFinish) {
    _restartIdleTimeout();
  }

  setTimeout(() => {
    if (!_finished) {
      span.setStatus({ code: spanstatus/* SPAN_STATUS_ERROR */.TJ, message: 'deadline_exceeded' });
      _finishReason = FINISH_REASON_FINAL_TIMEOUT;
      span.end();
    }
  }, finalTimeout);

  return span;
}

function _startIdleSpan(options) {
  const span = (0,trace/* startInactiveSpan */.Uk)(options);

  (0,spanOnScope/* _setSpanForScope */.r)((0,currentScopes/* getCurrentScope */.o5)(), span);

  debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.log('[Tracing] Started span is an idle span');

  return span;
}


//# sourceMappingURL=idleSpan.js.map

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js
var propagationContext = __webpack_require__(30243);
;// ./node_modules/@sentry/browser/build/npm/esm/tracing/backgroundtab.js




/**
 * Add a listener that cancels and finishes a transaction when the global
 * document is hidden.
 */
function registerBackgroundTabDetection() {
  if (WINDOW.document) {
    WINDOW.document.addEventListener('visibilitychange', () => {
      const activeSpan = (0,spanUtils/* getActiveSpan */.Bk)();
      if (!activeSpan) {
        return;
      }

      const rootSpan = (0,spanUtils/* getRootSpan */.zU)(activeSpan);

      if (WINDOW.document.hidden && rootSpan) {
        const cancelledStatus = 'cancelled';

        const { op, status } = (0,spanUtils/* spanToJSON */.et)(rootSpan);

        if (esm_debug_build_DEBUG_BUILD) {
          logger/* logger */.vF.log(`[Tracing] Transaction: ${cancelledStatus} -> since tab moved to the background, op: ${op}`);
        }

        // We should not set status if it is already set, this prevent important statuses like
        // error or data loss from being overwritten on transaction.
        if (!status) {
          rootSpan.setStatus({ code: spanstatus/* SPAN_STATUS_ERROR */.TJ, message: cancelledStatus });
        }

        rootSpan.setAttribute('sentry.cancellation_reason', 'document.hidden');
        rootSpan.end();
      }
    });
  } else {
    esm_debug_build_DEBUG_BUILD && logger/* logger */.vF.warn('[Tracing] Could not set up background tab detection due to lack of global document');
  }
}


//# sourceMappingURL=backgroundtab.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/tracing/browserTracingIntegration.js







/* eslint-disable max-lines */

const BROWSER_TRACING_INTEGRATION_ID = 'BrowserTracing';

const DEFAULT_BROWSER_TRACING_OPTIONS = {
  ...TRACING_DEFAULTS,
  instrumentNavigation: true,
  instrumentPageLoad: true,
  markBackgroundSpan: true,
  enableLongTask: true,
  enableLongAnimationFrame: true,
  enableInp: true,
  _experiments: {},
  ...defaultRequestInstrumentationOptions,
};

/**
 * The Browser Tracing integration automatically instruments browser pageload/navigation
 * actions as transactions, and captures requests, metrics and errors as spans.
 *
 * The integration can be configured with a variety of options, and can be extended to use
 * any routing library.
 *
 * We explicitly export the proper type here, as this has to be extended in some cases.
 */
const browserTracingIntegration = ((_options = {}) => {
  /**
   * This is just a small wrapper that makes `document` optional.
   * We want to be extra-safe and always check that this exists, to ensure weird environments do not blow up.
   */
  const optionalWindowDocument = WINDOW.document ;

  registerSpanErrorInstrumentation();

  const {
    enableInp,
    enableLongTask,
    enableLongAnimationFrame,
    _experiments: { enableInteractions, enableStandaloneClsSpans },
    beforeStartSpan,
    idleTimeout,
    finalTimeout,
    childSpanTimeout,
    markBackgroundSpan,
    traceFetch,
    traceXHR,
    trackFetchStreamPerformance,
    shouldCreateSpanForRequest,
    enableHTTPTimings,
    instrumentPageLoad,
    instrumentNavigation,
  } = {
    ...DEFAULT_BROWSER_TRACING_OPTIONS,
    ..._options,
  };

  const _collectWebVitals = startTrackingWebVitals({ recordClsStandaloneSpans: enableStandaloneClsSpans || false });

  if (enableInp) {
    startTrackingINP();
  }

  if (
    enableLongAnimationFrame &&
    worldwide/* GLOBAL_OBJ */.O.PerformanceObserver &&
    PerformanceObserver.supportedEntryTypes &&
    PerformanceObserver.supportedEntryTypes.includes('long-animation-frame')
  ) {
    startTrackingLongAnimationFrames();
  } else if (enableLongTask) {
    startTrackingLongTasks();
  }

  if (enableInteractions) {
    startTrackingInteractions();
  }

  const latestRoute = {
    name: undefined,
    source: undefined,
  };

  /** Create routing idle transaction. */
  function _createRouteSpan(client, startSpanOptions) {
    const isPageloadTransaction = startSpanOptions.op === 'pageload';

    const finalStartSpanOptions = beforeStartSpan
      ? beforeStartSpan(startSpanOptions)
      : startSpanOptions;

    const attributes = finalStartSpanOptions.attributes || {};

    // If `finalStartSpanOptions.name` is different than `startSpanOptions.name`
    // it is because `beforeStartSpan` set a custom name. Therefore we set the source to 'custom'.
    if (startSpanOptions.name !== finalStartSpanOptions.name) {
      attributes[semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */.i_] = 'custom';
      finalStartSpanOptions.attributes = attributes;
    }

    latestRoute.name = finalStartSpanOptions.name;
    latestRoute.source = attributes[semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */.i_];

    const idleSpan = startIdleSpan(finalStartSpanOptions, {
      idleTimeout,
      finalTimeout,
      childSpanTimeout,
      // should wait for finish signal if it's a pageload transaction
      disableAutoFinish: isPageloadTransaction,
      beforeSpanEnd: span => {
        _collectWebVitals();
        addPerformanceEntries(span, { recordClsOnPageloadSpan: !enableStandaloneClsSpans });
        setActiveIdleSpan(client, undefined);

        // A trace should stay consistent over the entire timespan of one route - even after the pageload/navigation ended.
        // Only when another navigation happens, we want to create a new trace.
        // This way, e.g. errors that occur after the pageload span ended are still associated to the pageload trace.
        const scope = (0,currentScopes/* getCurrentScope */.o5)();
        const oldPropagationContext = scope.getPropagationContext();

        scope.setPropagationContext({
          ...oldPropagationContext,
          traceId: idleSpan.spanContext().traceId,
          sampled: (0,spanUtils/* spanIsSampled */.pK)(idleSpan),
          dsc: (0,tracing_dynamicSamplingContext/* getDynamicSamplingContextFromSpan */.k1)(span),
        });
      },
    });
    setActiveIdleSpan(client, idleSpan);

    function emitFinish() {
      if (optionalWindowDocument && ['interactive', 'complete'].includes(optionalWindowDocument.readyState)) {
        client.emit('idleSpanEnableAutoFinish', idleSpan);
      }
    }

    if (isPageloadTransaction && optionalWindowDocument) {
      optionalWindowDocument.addEventListener('readystatechange', () => {
        emitFinish();
      });

      emitFinish();
    }
  }

  return {
    name: BROWSER_TRACING_INTEGRATION_ID,
    afterAllSetup(client) {
      let startingUrl = (0,browser/* getLocationHref */.$N)();

      function maybeEndActiveSpan() {
        const activeSpan = getActiveIdleSpan(client);

        if (activeSpan && !(0,spanUtils/* spanToJSON */.et)(activeSpan).timestamp) {
          esm_debug_build_DEBUG_BUILD && logger/* logger */.vF.log(`[Tracing] Finishing current active span with op: ${(0,spanUtils/* spanToJSON */.et)(activeSpan).op}`);
          // If there's an open active span, we need to finish it before creating an new one.
          activeSpan.end();
        }
      }

      client.on('startNavigationSpan', startSpanOptions => {
        if ((0,currentScopes/* getClient */.KU)() !== client) {
          return;
        }

        maybeEndActiveSpan();

        (0,currentScopes/* getIsolationScope */.rm)().setPropagationContext({ traceId: (0,propagationContext/* generateTraceId */.e)(), sampleRand: Math.random() });
        (0,currentScopes/* getCurrentScope */.o5)().setPropagationContext({ traceId: (0,propagationContext/* generateTraceId */.e)(), sampleRand: Math.random() });

        _createRouteSpan(client, {
          op: 'navigation',
          ...startSpanOptions,
        });
      });

      client.on('startPageLoadSpan', (startSpanOptions, traceOptions = {}) => {
        if ((0,currentScopes/* getClient */.KU)() !== client) {
          return;
        }
        maybeEndActiveSpan();

        const sentryTrace = traceOptions.sentryTrace || getMetaContent('sentry-trace');
        const baggage = traceOptions.baggage || getMetaContent('baggage');

        const propagationContext = (0,tracing/* propagationContextFromHeaders */.kM)(sentryTrace, baggage);
        (0,currentScopes/* getCurrentScope */.o5)().setPropagationContext(propagationContext);

        _createRouteSpan(client, {
          op: 'pageload',
          ...startSpanOptions,
        });
      });

      if (WINDOW.location) {
        if (instrumentPageLoad) {
          const origin = (0,utils_hoist_time/* browserPerformanceTimeOrigin */.k3)();
          startBrowserTracingPageLoadSpan(client, {
            name: WINDOW.location.pathname,
            // pageload should always start at timeOrigin (and needs to be in s, not ms)
            startTime: origin ? origin / 1000 : undefined,
            attributes: {
              [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */.i_]: 'url',
              [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.pageload.browser',
            },
          });
        }

        if (instrumentNavigation) {
          addHistoryInstrumentationHandler(({ to, from }) => {
            /**
             * This early return is there to account for some cases where a navigation transaction starts right after
             * long-running pageload. We make sure that if `from` is undefined and a valid `startingURL` exists, we don't
             * create an uneccessary navigation transaction.
             *
             * This was hard to duplicate, but this behavior stopped as soon as this fix was applied. This issue might also
             * only be caused in certain development environments where the usage of a hot module reloader is causing
             * errors.
             */
            if (from === undefined && startingUrl?.indexOf(to) !== -1) {
              startingUrl = undefined;
              return;
            }

            if (from !== to) {
              startingUrl = undefined;
              startBrowserTracingNavigationSpan(client, {
                name: WINDOW.location.pathname,
                attributes: {
                  [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */.i_]: 'url',
                  [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN */.JD]: 'auto.navigation.browser',
                },
              });
            }
          });
        }
      }

      if (markBackgroundSpan) {
        registerBackgroundTabDetection();
      }

      if (enableInteractions) {
        registerInteractionListener(client, idleTimeout, finalTimeout, childSpanTimeout, latestRoute);
      }

      if (enableInp) {
        registerInpInteractionListener();
      }

      instrumentOutgoingRequests(client, {
        traceFetch,
        traceXHR,
        trackFetchStreamPerformance,
        tracePropagationTargets: client.getOptions().tracePropagationTargets,
        shouldCreateSpanForRequest,
        enableHTTPTimings,
      });
    },
  };
}) ;

/**
 * Manually start a page load span.
 * This will only do something if a browser tracing integration integration has been setup.
 *
 * If you provide a custom `traceOptions` object, it will be used to continue the trace
 * instead of the default behavior, which is to look it up on the <meta> tags.
 */
function startBrowserTracingPageLoadSpan(
  client,
  spanOptions,
  traceOptions,
) {
  client.emit('startPageLoadSpan', spanOptions, traceOptions);
  (0,currentScopes/* getCurrentScope */.o5)().setTransactionName(spanOptions.name);

  return getActiveIdleSpan(client);
}

/**
 * Manually start a navigation span.
 * This will only do something if a browser tracing integration has been setup.
 */
function startBrowserTracingNavigationSpan(client, spanOptions) {
  client.emit('startNavigationSpan', spanOptions);

  (0,currentScopes/* getCurrentScope */.o5)().setTransactionName(spanOptions.name);

  return getActiveIdleSpan(client);
}

/** Returns the value of a meta tag */
function getMetaContent(metaName) {
  /**
   * This is just a small wrapper that makes `document` optional.
   * We want to be extra-safe and always check that this exists, to ensure weird environments do not blow up.
   */
  const optionalWindowDocument = WINDOW.document ;

  const metaTag = optionalWindowDocument?.querySelector(`meta[name=${metaName}]`);
  return metaTag?.getAttribute('content') || undefined;
}

/** Start listener for interaction transactions */
function registerInteractionListener(
  client,
  idleTimeout,
  finalTimeout,
  childSpanTimeout,
  latestRoute,
) {
  /**
   * This is just a small wrapper that makes `document` optional.
   * We want to be extra-safe and always check that this exists, to ensure weird environments do not blow up.
   */
  const optionalWindowDocument = WINDOW.document ;

  let inflightInteractionSpan;
  const registerInteractionTransaction = () => {
    const op = 'ui.action.click';

    const activeIdleSpan = getActiveIdleSpan(client);
    if (activeIdleSpan) {
      const currentRootSpanOp = (0,spanUtils/* spanToJSON */.et)(activeIdleSpan).op;
      if (['navigation', 'pageload'].includes(currentRootSpanOp )) {
        esm_debug_build_DEBUG_BUILD &&
          logger/* logger */.vF.warn(`[Tracing] Did not create ${op} span because a pageload or navigation span is in progress.`);
        return undefined;
      }
    }

    if (inflightInteractionSpan) {
      inflightInteractionSpan.setAttribute(semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON */.fs, 'interactionInterrupted');
      inflightInteractionSpan.end();
      inflightInteractionSpan = undefined;
    }

    if (!latestRoute.name) {
      esm_debug_build_DEBUG_BUILD && logger/* logger */.vF.warn(`[Tracing] Did not create ${op} transaction because _latestRouteName is missing.`);
      return undefined;
    }

    inflightInteractionSpan = startIdleSpan(
      {
        name: latestRoute.name,
        op,
        attributes: {
          [semanticAttributes/* SEMANTIC_ATTRIBUTE_SENTRY_SOURCE */.i_]: latestRoute.source || 'url',
        },
      },
      {
        idleTimeout,
        finalTimeout,
        childSpanTimeout,
      },
    );
  };

  if (optionalWindowDocument) {
    addEventListener('click', registerInteractionTransaction, { once: false, capture: true });
  }
}

// We store the active idle span on the client object, so we can access it from exported functions
const ACTIVE_IDLE_SPAN_PROPERTY = '_sentry_idleSpan';
function getActiveIdleSpan(client) {
  return (client )[ACTIVE_IDLE_SPAN_PROPERTY];
}

function setActiveIdleSpan(client, span) {
  (0,object/* addNonEnumerableProperty */.my)(client, ACTIVE_IDLE_SPAN_PROPERTY, span);
}


//# sourceMappingURL=browserTracingIntegration.js.map

;// ./node_modules/@sentry/core/build/esm/transports/offline.js





const MIN_DELAY = 100; // 100 ms
const START_DELAY = 5000; // 5 seconds
const MAX_DELAY = 3.6e6; // 1 hour

/**
 * Wraps a transport and stores and retries events when they fail to send.
 *
 * @param createTransport The transport to wrap.
 */
function makeOfflineTransport(
  createTransport,
) {
  function log(...args) {
    debug_build/* DEBUG_BUILD */.T && logger/* logger */.vF.info('[Offline]:', ...args);
  }

  return options => {
    const transport = createTransport(options);

    if (!options.createStore) {
      throw new Error('No `createStore` function was provided');
    }

    const store = options.createStore(options);

    let retryDelay = START_DELAY;
    let flushTimer;

    function shouldQueue(env, error, retryDelay) {
      // We want to drop client reports because they can be generated when we retry sending events while offline.
      if ((0,utils_hoist_envelope/* envelopeContainsItemType */.hP)(env, ['client_report'])) {
        return false;
      }

      if (options.shouldStore) {
        return options.shouldStore(env, error, retryDelay);
      }

      return true;
    }

    function flushIn(delay) {
      if (flushTimer) {
        clearTimeout(flushTimer );
      }

      flushTimer = setTimeout(async () => {
        flushTimer = undefined;

        const found = await store.shift();
        if (found) {
          log('Attempting to send previously queued event');

          // We should to update the sent_at timestamp to the current time.
          found[0].sent_at = new Date().toISOString();

          void send(found, true).catch(e => {
            log('Failed to retry sending', e);
          });
        }
      }, delay) ;

      // We need to unref the timer in node.js, otherwise the node process never exit.
      if (typeof flushTimer !== 'number' && flushTimer.unref) {
        flushTimer.unref();
      }
    }

    function flushWithBackOff() {
      if (flushTimer) {
        return;
      }

      flushIn(retryDelay);

      retryDelay = Math.min(retryDelay * 2, MAX_DELAY);
    }

    async function send(envelope, isRetry = false) {
      // We queue all replay envelopes to avoid multiple replay envelopes being sent at the same time. If one fails, we
      // need to retry them in order.
      if (!isRetry && (0,utils_hoist_envelope/* envelopeContainsItemType */.hP)(envelope, ['replay_event', 'replay_recording'])) {
        await store.push(envelope);
        flushIn(MIN_DELAY);
        return {};
      }

      try {
        const result = await transport.send(envelope);

        let delay = MIN_DELAY;

        if (result) {
          // If there's a retry-after header, use that as the next delay.
          if (result.headers?.['retry-after']) {
            delay = parseRetryAfterHeader(result.headers['retry-after']);
          } else if (result.headers?.['x-sentry-rate-limits']) {
            delay = 60000; // 60 seconds
          } // If we have a server error, return now so we don't flush the queue.
          else if ((result.statusCode || 0) >= 400) {
            return result;
          }
        }

        flushIn(delay);
        retryDelay = START_DELAY;
        return result;
      } catch (e) {
        if (await shouldQueue(envelope, e , retryDelay)) {
          // If this envelope was a retry, we want to add it to the front of the queue so it's retried again first.
          if (isRetry) {
            await store.unshift(envelope);
          } else {
            await store.push(envelope);
          }
          flushWithBackOff();
          log('Error sending. Event queued.', e );
          return {};
        } else {
          throw e;
        }
      }
    }

    if (options.flushAtStartup) {
      flushWithBackOff();
    }

    return {
      send,
      flush: timeout => {
        // If there's no timeout, we should attempt to flush the offline queue.
        if (timeout === undefined) {
          retryDelay = START_DELAY;
          flushIn(MIN_DELAY);
        }

        return transport.flush(timeout);
      },
    };
  };
}


//# sourceMappingURL=offline.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/transports/offline.js




// 'Store', 'promisifyRequest' and 'createStore' were originally copied from the 'idb-keyval' package before being
// modified and simplified: https://github.com/jakearchibald/idb-keyval
//
// At commit: 0420a704fd6cbb4225429c536b1f61112d012fca
// Original license:

// Copyright 2016, Jake Archibald
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    // @ts-expect-error - file size hacks
    request.oncomplete = request.onsuccess = () => resolve(request.result);
    // @ts-expect-error - file size hacks
    request.onabort = request.onerror = () => reject(request.error);
  });
}

/** Create or open an IndexedDb store */
function createStore(dbName, storeName) {
  const request = indexedDB.open(dbName);
  request.onupgradeneeded = () => request.result.createObjectStore(storeName);
  const dbp = promisifyRequest(request);

  return callback => dbp.then(db => callback(db.transaction(storeName, 'readwrite').objectStore(storeName)));
}

function keys(store) {
  return promisifyRequest(store.getAllKeys() );
}

/** Insert into the end of the store */
function push(store, value, maxQueueSize) {
  return store(store => {
    return keys(store).then(keys => {
      if (keys.length >= maxQueueSize) {
        return;
      }

      // We insert with an incremented key so that the entries are popped in order
      store.put(value, Math.max(...keys, 0) + 1);
      return promisifyRequest(store.transaction);
    });
  });
}

/** Insert into the front of the store */
function unshift(store, value, maxQueueSize) {
  return store(store => {
    return keys(store).then(keys => {
      if (keys.length >= maxQueueSize) {
        return;
      }

      // We insert with an decremented key so that the entries are popped in order
      store.put(value, Math.min(...keys, 0) - 1);
      return promisifyRequest(store.transaction);
    });
  });
}

/** Pop the oldest value from the store */
function shift(store) {
  return store(store => {
    return keys(store).then(keys => {
      const firstKey = keys[0];
      if (firstKey == null) {
        return undefined;
      }

      return promisifyRequest(store.get(firstKey)).then(value => {
        store.delete(firstKey);
        return promisifyRequest(store.transaction).then(() => value);
      });
    });
  });
}

function createIndexedDbStore(options) {
  let store;

  // Lazily create the store only when it's needed
  function getStore() {
    if (store == undefined) {
      store = createStore(options.dbName || 'sentry-offline', options.storeName || 'queue');
    }

    return store;
  }

  return {
    push: async (env) => {
      try {
        const serialized = await (0,utils_hoist_envelope/* serializeEnvelope */.bN)(env);
        await push(getStore(), serialized, options.maxQueueSize || 30);
      } catch (_) {
        //
      }
    },
    unshift: async (env) => {
      try {
        const serialized = await (0,utils_hoist_envelope/* serializeEnvelope */.bN)(env);
        await unshift(getStore(), serialized, options.maxQueueSize || 30);
      } catch (_) {
        //
      }
    },
    shift: async () => {
      try {
        const deserialized = await shift(getStore());
        if (deserialized) {
          return (0,utils_hoist_envelope/* parseEnvelope */.mE)(deserialized);
        }
      } catch (_) {
        //
      }

      return undefined;
    },
  };
}

function makeIndexedDbOfflineTransport(
  createTransport,
) {
  return options => {
    const transport = createTransport({ ...options, createStore: createIndexedDbStore });

    WINDOW.addEventListener('online', async _ => {
      await transport.flush();
    });

    return transport;
  };
}

/**
 * Creates a transport that uses IndexedDb to store events when offline.
 */
function makeBrowserOfflineTransport(
  createTransport = makeFetchTransport,
) {
  return makeIndexedDbOfflineTransport(makeOfflineTransport(createTransport));
}


//# sourceMappingURL=offline.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/profiling/utils.js




const MS_TO_NS = 1e6;
// Use 0 as main thread id which is identical to threadId in node:worker_threads
// where main logs 0 and workers seem to log in increments of 1
const THREAD_ID_STRING = String(0);
const THREAD_NAME = 'main';

// We force make this optional to be on the safe side...
const utils_navigator = WINDOW.navigator ;

// Machine properties (eval only once)
let OS_PLATFORM = '';
let OS_PLATFORM_VERSION = '';
let OS_ARCH = '';
let OS_BROWSER = utils_navigator?.userAgent || '';
let OS_MODEL = '';
const OS_LOCALE = utils_navigator?.language || utils_navigator?.languages?.[0] || '';

function isUserAgentData(data) {
  return typeof data === 'object' && data !== null && 'getHighEntropyValues' in data;
}

// @ts-expect-error userAgentData is not part of the navigator interface yet
const userAgentData = utils_navigator?.userAgentData;

if (isUserAgentData(userAgentData)) {
  userAgentData
    .getHighEntropyValues(['architecture', 'model', 'platform', 'platformVersion', 'fullVersionList'])
    .then((ua) => {
      OS_PLATFORM = ua.platform || '';
      OS_ARCH = ua.architecture || '';
      OS_MODEL = ua.model || '';
      OS_PLATFORM_VERSION = ua.platformVersion || '';

      if (ua.fullVersionList?.length) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const firstUa = ua.fullVersionList[ua.fullVersionList.length - 1];
        OS_BROWSER = `${firstUa.brand} ${firstUa.version}`;
      }
    })
    .catch(e => void e);
}

function isProcessedJSSelfProfile(profile) {
  return !('thread_metadata' in profile);
}

// Enriches the profile with threadId of the current thread.
// This is done in node as we seem to not be able to get the info from C native code.
/**
 *
 */
function enrichWithThreadInformation(profile) {
  if (!isProcessedJSSelfProfile(profile)) {
    return profile;
  }

  return convertJSSelfProfileToSampledFormat(profile);
}

// Profile is marked as optional because it is deleted from the metadata
// by the integration before the event is processed by other integrations.

function getTraceId(event) {
  const traceId = event.contexts?.trace?.['trace_id'];
  // Log a warning if the profile has an invalid traceId (should be uuidv4).
  // All profiles and transactions are rejected if this is the case and we want to
  // warn users that this is happening if they enable debug flag
  if (typeof traceId === 'string' && traceId.length !== 32) {
    if (esm_debug_build_DEBUG_BUILD) {
      logger/* logger */.vF.log(`[Profiling] Invalid traceId: ${traceId} on profiled event`);
    }
  }
  if (typeof traceId !== 'string') {
    return '';
  }

  return traceId;
}
/**
 * Creates a profiling event envelope from a Sentry event. If profile does not pass
 * validation, returns null.
 * @param event
 * @param dsn
 * @param metadata
 * @param tunnel
 * @returns {EventEnvelope | null}
 */

/**
 * Creates a profiling event envelope from a Sentry event.
 */
function createProfilePayload(
  profile_id,
  start_timestamp,
  processed_profile,
  event,
) {
  if (event.type !== 'transaction') {
    // createProfilingEventEnvelope should only be called for transactions,
    // we type guard this behavior with isProfiledTransactionEvent.
    throw new TypeError('Profiling events may only be attached to transactions, this should never occur.');
  }

  if (processed_profile === undefined || processed_profile === null) {
    throw new TypeError(
      `Cannot construct profiling event envelope without a valid profile. Got ${processed_profile} instead.`,
    );
  }

  const traceId = getTraceId(event);
  const enrichedThreadProfile = enrichWithThreadInformation(processed_profile);
  const transactionStartMs = start_timestamp
    ? start_timestamp
    : typeof event.start_timestamp === 'number'
      ? event.start_timestamp * 1000
      : (0,utils_hoist_time/* timestampInSeconds */.zf)() * 1000;
  const transactionEndMs = typeof event.timestamp === 'number' ? event.timestamp * 1000 : (0,utils_hoist_time/* timestampInSeconds */.zf)() * 1000;

  const profile = {
    event_id: profile_id,
    timestamp: new Date(transactionStartMs).toISOString(),
    platform: 'javascript',
    version: '1',
    release: event.release || '',
    environment: event.environment || constants/* DEFAULT_ENVIRONMENT */.U,
    runtime: {
      name: 'javascript',
      version: WINDOW.navigator.userAgent,
    },
    os: {
      name: OS_PLATFORM,
      version: OS_PLATFORM_VERSION,
      build_number: OS_BROWSER,
    },
    device: {
      locale: OS_LOCALE,
      model: OS_MODEL,
      manufacturer: OS_BROWSER,
      architecture: OS_ARCH,
      is_emulator: false,
    },
    debug_meta: {
      images: applyDebugMetadata(processed_profile.resources),
    },
    profile: enrichedThreadProfile,
    transactions: [
      {
        name: event.transaction || '',
        id: event.event_id || (0,misc/* uuid4 */.eJ)(),
        trace_id: traceId,
        active_thread_id: THREAD_ID_STRING,
        relative_start_ns: '0',
        relative_end_ns: ((transactionEndMs - transactionStartMs) * 1e6).toFixed(0),
      },
    ],
  };

  return profile;
}

/*
  See packages/browser-utils/src/browser/router.ts
*/
/**
 *
 */
function isAutomatedPageLoadSpan(span) {
  return (0,spanUtils/* spanToJSON */.et)(span).op === 'pageload';
}

/**
 * Converts a JSSelfProfile to a our sampled format.
 * Does not currently perform stack indexing.
 */
function convertJSSelfProfileToSampledFormat(input) {
  let EMPTY_STACK_ID = undefined;
  let STACK_ID = 0;

  // Initialize the profile that we will fill with data
  const profile = {
    samples: [],
    stacks: [],
    frames: [],
    thread_metadata: {
      [THREAD_ID_STRING]: { name: THREAD_NAME },
    },
  };

  const firstSample = input.samples[0];
  if (!firstSample) {
    return profile;
  }

  // We assert samples.length > 0 above and timestamp should always be present
  const start = firstSample.timestamp;
  // The JS SDK might change it's time origin based on some heuristic (see See packages/utils/src/time.ts)
  // when that happens, we need to ensure we are correcting the profile timings so the two timelines stay in sync.
  // Since JS self profiling time origin is always initialized to performance.timeOrigin, we need to adjust for
  // the drift between the SDK selected value and our profile time origin.
  const perfOrigin = (0,utils_hoist_time/* browserPerformanceTimeOrigin */.k3)();
  const origin = typeof performance.timeOrigin === 'number' ? performance.timeOrigin : perfOrigin || 0;
  const adjustForOriginChange = origin - (perfOrigin || origin);

  input.samples.forEach((jsSample, i) => {
    // If sample has no stack, add an empty sample
    if (jsSample.stackId === undefined) {
      if (EMPTY_STACK_ID === undefined) {
        EMPTY_STACK_ID = STACK_ID;
        profile.stacks[EMPTY_STACK_ID] = [];
        STACK_ID++;
      }

      profile['samples'][i] = {
        // convert ms timestamp to ns
        elapsed_since_start_ns: ((jsSample.timestamp + adjustForOriginChange - start) * MS_TO_NS).toFixed(0),
        stack_id: EMPTY_STACK_ID,
        thread_id: THREAD_ID_STRING,
      };
      return;
    }

    let stackTop = input.stacks[jsSample.stackId];

    // Functions in top->down order (root is last)
    // We follow the stackTop.parentId trail and collect each visited frameId
    const stack = [];

    while (stackTop) {
      stack.push(stackTop.frameId);

      const frame = input.frames[stackTop.frameId];

      // If our frame has not been indexed yet, index it
      if (frame && profile.frames[stackTop.frameId] === undefined) {
        profile.frames[stackTop.frameId] = {
          function: frame.name,
          abs_path: typeof frame.resourceId === 'number' ? input.resources[frame.resourceId] : undefined,
          lineno: frame.line,
          colno: frame.column,
        };
      }

      stackTop = stackTop.parentId === undefined ? undefined : input.stacks[stackTop.parentId];
    }

    const sample = {
      // convert ms timestamp to ns
      elapsed_since_start_ns: ((jsSample.timestamp + adjustForOriginChange - start) * MS_TO_NS).toFixed(0),
      stack_id: STACK_ID,
      thread_id: THREAD_ID_STRING,
    };

    profile['stacks'][STACK_ID] = stack;
    profile['samples'][i] = sample;
    STACK_ID++;
  });

  return profile;
}

/**
 * Adds items to envelope if they are not already present - mutates the envelope.
 * @param envelope
 */
function addProfilesToEnvelope(envelope, profiles) {
  if (!profiles.length) {
    return envelope;
  }

  for (const profile of profiles) {
    envelope[1].push([{ type: 'profile' }, profile]);
  }
  return envelope;
}

/**
 * Finds transactions with profile_id context in the envelope
 * @param envelope
 * @returns
 */
function findProfiledTransactionsFromEnvelope(envelope) {
  const events = [];

  (0,utils_hoist_envelope/* forEachEnvelopeItem */.yH)(envelope, (item, type) => {
    if (type !== 'transaction') {
      return;
    }

    for (let j = 1; j < item.length; j++) {
      const event = item[j] ;

      if (event?.contexts && event.contexts['profile'] && event.contexts['profile']['profile_id']) {
        events.push(item[j] );
      }
    }
  });

  return events;
}

/**
 * Applies debug meta data to an event from a list of paths to resources (sourcemaps)
 */
function applyDebugMetadata(resource_paths) {
  const client = (0,currentScopes/* getClient */.KU)();
  const options = client?.getOptions();
  const stackParser = options?.stackParser;

  if (!stackParser) {
    return [];
  }

  return getDebugImagesForResources(stackParser, resource_paths);
}

/**
 * Checks the given sample rate to make sure it is valid type and value (a boolean, or a number between 0 and 1).
 */
function isValidSampleRate(rate) {
  // we need to check NaN explicitly because it's of type 'number' and therefore wouldn't get caught by this typecheck
  if ((typeof rate !== 'number' && typeof rate !== 'boolean') || (typeof rate === 'number' && isNaN(rate))) {
    esm_debug_build_DEBUG_BUILD &&
      logger/* logger */.vF.warn(
        `[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
          rate,
        )} of type ${JSON.stringify(typeof rate)}.`,
      );
    return false;
  }

  // Boolean sample rates are always valid
  if (rate === true || rate === false) {
    return true;
  }

  // in case sampleRate is a boolean, it will get automatically cast to 1 if it's true and 0 if it's false
  if (rate < 0 || rate > 1) {
    esm_debug_build_DEBUG_BUILD && logger/* logger */.vF.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${rate}.`);
    return false;
  }
  return true;
}

function isValidProfile(profile) {
  if (profile.samples.length < 2) {
    if (esm_debug_build_DEBUG_BUILD) {
      // Log a warning if the profile has less than 2 samples so users can know why
      // they are not seeing any profiling data and we cant avoid the back and forth
      // of asking them to provide us with a dump of the profile data.
      logger/* logger */.vF.log('[Profiling] Discarding profile because it contains less than 2 samples');
    }
    return false;
  }

  if (!profile.frames.length) {
    if (esm_debug_build_DEBUG_BUILD) {
      logger/* logger */.vF.log('[Profiling] Discarding profile because it contains no frames');
    }
    return false;
  }

  return true;
}

// Keep a flag value to avoid re-initializing the profiler constructor. If it fails
// once, it will always fail and this allows us to early return.
let PROFILING_CONSTRUCTOR_FAILED = false;
const MAX_PROFILE_DURATION_MS = 30000;

/**
 * Check if profiler constructor is available.
 * @param maybeProfiler
 */
function isJSProfilerSupported(maybeProfiler) {
  return typeof maybeProfiler === 'function';
}

/**
 * Starts the profiler and returns the profiler instance.
 */
function startJSSelfProfile() {
  // Feature support check first
  const JSProfilerConstructor = WINDOW.Profiler;

  if (!isJSProfilerSupported(JSProfilerConstructor)) {
    if (esm_debug_build_DEBUG_BUILD) {
      logger/* logger */.vF.log(
        '[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.',
      );
    }
    return;
  }

  // From initial testing, it seems that the minimum value for sampleInterval is 10ms.
  const samplingIntervalMS = 10;
  // Start the profiler
  const maxSamples = Math.floor(MAX_PROFILE_DURATION_MS / samplingIntervalMS);

  // Attempt to initialize the profiler constructor, if it fails, we disable profiling for the current user session.
  // This is likely due to a missing 'Document-Policy': 'js-profiling' header. We do not want to throw an error if this happens
  // as we risk breaking the user's application, so just disable profiling and log an error.
  try {
    return new JSProfilerConstructor({ sampleInterval: samplingIntervalMS, maxBufferSize: maxSamples });
  } catch (e) {
    if (esm_debug_build_DEBUG_BUILD) {
      logger/* logger */.vF.log(
        "[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header.",
      );
      logger/* logger */.vF.log('[Profiling] Disabling profiling for current user session.');
    }
    PROFILING_CONSTRUCTOR_FAILED = true;
  }

  return;
}

/**
 * Determine if a profile should be profiled.
 */
function shouldProfileSpan(span) {
  // If constructor failed once, it will always fail, so we can early return.
  if (PROFILING_CONSTRUCTOR_FAILED) {
    if (esm_debug_build_DEBUG_BUILD) {
      logger/* logger */.vF.log('[Profiling] Profiling has been disabled for the duration of the current user session.');
    }
    return false;
  }

  if (!span.isRecording()) {
    if (esm_debug_build_DEBUG_BUILD) {
      logger/* logger */.vF.log('[Profiling] Discarding profile because transaction was not sampled.');
    }
    return false;
  }

  const client = (0,currentScopes/* getClient */.KU)();
  const options = client?.getOptions();
  if (!options) {
    esm_debug_build_DEBUG_BUILD && logger/* logger */.vF.log('[Profiling] Profiling disabled, no options found.');
    return false;
  }

  // @ts-expect-error profilesSampleRate is not part of the browser options yet
  const profilesSampleRate = options.profilesSampleRate;

  // Since this is coming from the user (or from a function provided by the user), who knows what we might get. (The
  // only valid values are booleans or numbers between 0 and 1.)
  if (!isValidSampleRate(profilesSampleRate)) {
    esm_debug_build_DEBUG_BUILD && logger/* logger */.vF.warn('[Profiling] Discarding profile because of invalid sample rate.');
    return false;
  }

  // if the function returned 0 (or false), or if `profileSampleRate` is 0, it's a sign the profile should be dropped
  if (!profilesSampleRate) {
    esm_debug_build_DEBUG_BUILD &&
      logger/* logger */.vF.log(
        '[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0',
      );
    return false;
  }

  // Now we roll the dice. Math.random is inclusive of 0, but not of 1, so strict < is safe here. In case sampleRate is
  // a boolean, the < comparison will cause it to be automatically cast to 1 if it's true and 0 if it's false.
  const sampled = profilesSampleRate === true ? true : Math.random() < profilesSampleRate;
  // Check if we should sample this profile
  if (!sampled) {
    esm_debug_build_DEBUG_BUILD &&
      logger/* logger */.vF.log(
        `[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(
          profilesSampleRate,
        )})`,
      );
    return false;
  }

  return true;
}

/**
 * Creates a profiling envelope item, if the profile does not pass validation, returns null.
 * @param event
 * @returns {Profile | null}
 */
function createProfilingEvent(
  profile_id,
  start_timestamp,
  profile,
  event,
) {
  if (!isValidProfile(profile)) {
    return null;
  }

  return createProfilePayload(profile_id, start_timestamp, profile, event);
}

// TODO (v8): We need to obtain profile ids in @sentry-internal/tracing,
// but we don't have access to this map because importing this map would
// cause a circular dependency. We need to resolve this in v8.
const PROFILE_MAP = new Map();
/**
 *
 */
function getActiveProfilesCount() {
  return PROFILE_MAP.size;
}

/**
 * Retrieves profile from global cache and removes it.
 */
function takeProfileFromGlobalCache(profile_id) {
  const profile = PROFILE_MAP.get(profile_id);
  if (profile) {
    PROFILE_MAP.delete(profile_id);
  }
  return profile;
}
/**
 * Adds profile to global cache and evicts the oldest profile if the cache is full.
 */
function addProfileToGlobalCache(profile_id, profile) {
  PROFILE_MAP.set(profile_id, profile);

  if (PROFILE_MAP.size > 30) {
    const last = PROFILE_MAP.keys().next().value;
    PROFILE_MAP.delete(last);
  }
}


//# sourceMappingURL=utils.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/profiling/startProfileForSpan.js





/**
 * Wraps startTransaction and stopTransaction with profiling related logic.
 * startProfileForTransaction is called after the call to startTransaction in order to avoid our own code from
 * being profiled. Because of that same reason, stopProfiling is called before the call to stopTransaction.
 */
function startProfileForSpan(span) {
  // Start the profiler and get the profiler instance.
  let startTimestamp;
  if (isAutomatedPageLoadSpan(span)) {
    startTimestamp = (0,utils_hoist_time/* timestampInSeconds */.zf)() * 1000;
  }

  const profiler = startJSSelfProfile();

  // We failed to construct the profiler, so we skip.
  // No need to log anything as this has already been logged in startProfile.
  if (!profiler) {
    return;
  }

  if (esm_debug_build_DEBUG_BUILD) {
    logger/* logger */.vF.log(`[Profiling] started profiling span: ${(0,spanUtils/* spanToJSON */.et)(span).description}`);
  }

  // We create "unique" span names to avoid concurrent spans with same names
  // from being ignored by the profiler. From here on, only this span name should be used when
  // calling the profiler methods. Note: we log the original name to the user to avoid confusion.
  const profileId = (0,misc/* uuid4 */.eJ)();

  (0,currentScopes/* getCurrentScope */.o5)().setContext('profile', {
    profile_id: profileId,
    start_timestamp: startTimestamp,
  });

  /**
   * Idempotent handler for profile stop
   */
  async function onProfileHandler() {
    // Check if the profile exists and return it the behavior has to be idempotent as users may call span.finish multiple times.
    if (!span) {
      return;
    }
    // Satisfy the type checker, but profiler will always be defined here.
    if (!profiler) {
      return;
    }

    return profiler
      .stop()
      .then((profile) => {
        if (maxDurationTimeoutID) {
          WINDOW.clearTimeout(maxDurationTimeoutID);
          maxDurationTimeoutID = undefined;
        }

        if (esm_debug_build_DEBUG_BUILD) {
          logger/* logger */.vF.log(`[Profiling] stopped profiling of span: ${(0,spanUtils/* spanToJSON */.et)(span).description}`);
        }

        // In case of an overlapping span, stopProfiling may return null and silently ignore the overlapping profile.
        if (!profile) {
          if (esm_debug_build_DEBUG_BUILD) {
            logger/* logger */.vF.log(
              `[Profiling] profiler returned null profile for: ${(0,spanUtils/* spanToJSON */.et)(span).description}`,
              'this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started',
            );
          }
          return;
        }

        addProfileToGlobalCache(profileId, profile);
      })
      .catch(error => {
        if (esm_debug_build_DEBUG_BUILD) {
          logger/* logger */.vF.log('[Profiling] error while stopping profiler:', error);
        }
      });
  }

  // Enqueue a timeout to prevent profiles from running over max duration.
  let maxDurationTimeoutID = WINDOW.setTimeout(() => {
    if (esm_debug_build_DEBUG_BUILD) {
      logger/* logger */.vF.log('[Profiling] max profile duration elapsed, stopping profiling for:', (0,spanUtils/* spanToJSON */.et)(span).description);
    }
    // If the timeout exceeds, we want to stop profiling, but not finish the span
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    onProfileHandler();
  }, MAX_PROFILE_DURATION_MS);

  // We need to reference the original end call to avoid creating an infinite loop
  const originalEnd = span.end.bind(span);

  /**
   * Wraps span `end()` with profiling related logic.
   * startProfiling is called after the call to spanStart in order to avoid our own code from
   * being profiled. Because of that same reason, stopProfiling is called before the call to spanEnd.
   */
  function profilingWrappedSpanEnd() {
    if (!span) {
      return originalEnd();
    }
    // onProfileHandler should always return the same profile even if this is called multiple times.
    // Always call onProfileHandler to ensure stopProfiling is called and the timeout is cleared.
    void onProfileHandler().then(
      () => {
        originalEnd();
      },
      () => {
        // If onProfileHandler fails, we still want to call the original finish method.
        originalEnd();
      },
    );

    return span;
  }

  span.end = profilingWrappedSpanEnd;
}


//# sourceMappingURL=startProfileForSpan.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/profiling/integration.js





const integration_INTEGRATION_NAME = 'BrowserProfiling';

const _browserProfilingIntegration = (() => {
  return {
    name: integration_INTEGRATION_NAME,
    setup(client) {
      const activeSpan = (0,spanUtils/* getActiveSpan */.Bk)();
      const rootSpan = activeSpan && (0,spanUtils/* getRootSpan */.zU)(activeSpan);

      if (rootSpan && isAutomatedPageLoadSpan(rootSpan)) {
        if (shouldProfileSpan(rootSpan)) {
          startProfileForSpan(rootSpan);
        }
      }

      client.on('spanStart', (span) => {
        if (span === (0,spanUtils/* getRootSpan */.zU)(span) && shouldProfileSpan(span)) {
          startProfileForSpan(span);
        }
      });

      client.on('beforeEnvelope', (envelope) => {
        // if not profiles are in queue, there is nothing to add to the envelope.
        if (!getActiveProfilesCount()) {
          return;
        }

        const profiledTransactionEvents = findProfiledTransactionsFromEnvelope(envelope);
        if (!profiledTransactionEvents.length) {
          return;
        }

        const profilesToAddToEnvelope = [];

        for (const profiledTransaction of profiledTransactionEvents) {
          const context = profiledTransaction?.contexts;
          const profile_id = context?.profile?.['profile_id'];
          const start_timestamp = context?.profile?.['start_timestamp'];

          if (typeof profile_id !== 'string') {
            esm_debug_build_DEBUG_BUILD && logger/* logger */.vF.log('[Profiling] cannot find profile for a span without a profile context');
            continue;
          }

          if (!profile_id) {
            esm_debug_build_DEBUG_BUILD && logger/* logger */.vF.log('[Profiling] cannot find profile for a span without a profile context');
            continue;
          }

          // Remove the profile from the span context before sending, relay will take care of the rest.
          if (context?.profile) {
            delete context.profile;
          }

          const profile = takeProfileFromGlobalCache(profile_id);
          if (!profile) {
            esm_debug_build_DEBUG_BUILD && logger/* logger */.vF.log(`[Profiling] Could not retrieve profile for span: ${profile_id}`);
            continue;
          }

          const profileEvent = createProfilingEvent(
            profile_id,
            start_timestamp ,
            profile,
            profiledTransaction ,
          );
          if (profileEvent) {
            profilesToAddToEnvelope.push(profileEvent);
          }
        }

        addProfilesToEnvelope(envelope , profilesToAddToEnvelope);
      });
    },
  };
}) ;

const browserProfilingIntegration = defineIntegration(_browserProfilingIntegration);


//# sourceMappingURL=integration.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/integrations/spotlight.js




const spotlight_INTEGRATION_NAME = 'SpotlightBrowser';

const _spotlightIntegration = ((options = {}) => {
  const sidecarUrl = options.sidecarUrl || 'http://localhost:8969/stream';

  return {
    name: spotlight_INTEGRATION_NAME,
    setup: () => {
      esm_debug_build_DEBUG_BUILD && logger/* logger */.vF.log('Using Sidecar URL', sidecarUrl);
    },
    // We don't want to send interaction transactions/root spans created from
    // clicks within Spotlight to Sentry. Neither do we want them to be sent to
    // spotlight.
    processEvent: event => (isSpotlightInteraction(event) ? null : event),
    afterAllSetup: (client) => {
      setupSidecarForwarding(client, sidecarUrl);
    },
  };
}) ;

function setupSidecarForwarding(client, sidecarUrl) {
  const makeFetch = getNativeImplementation('fetch');
  let failCount = 0;

  client.on('beforeEnvelope', (envelope) => {
    if (failCount > 3) {
      logger/* logger */.vF.warn('[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:', failCount);
      return;
    }

    makeFetch(sidecarUrl, {
      method: 'POST',
      body: (0,utils_hoist_envelope/* serializeEnvelope */.bN)(envelope),
      headers: {
        'Content-Type': 'application/x-sentry-envelope',
      },
      mode: 'cors',
    }).then(
      res => {
        if (res.status >= 200 && res.status < 400) {
          // Reset failed requests counter on success
          failCount = 0;
        }
      },
      err => {
        failCount++;
        logger/* logger */.vF.error(
          "Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/",
          err,
        );
      },
    );
  });
}

/**
 * Use this integration to send errors and transactions to Spotlight.
 *
 * Learn more about spotlight at https://spotlightjs.com
 */
const spotlightBrowserIntegration = defineIntegration(_spotlightIntegration);

/**
 * Flags if the event is a transaction created from an interaction with the spotlight UI.
 */
function isSpotlightInteraction(event) {
  return Boolean(
    event.type === 'transaction' &&
      event.spans &&
      event.contexts &&
      event.contexts.trace &&
      event.contexts.trace.op === 'ui.action.click' &&
      event.spans.some(({ description }) => description?.includes('#sentry-spotlight')),
  );
}


//# sourceMappingURL=spotlight.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/utils/featureFlags.js



/**
 * Ordered LRU cache for storing feature flags in the scope context. The name
 * of each flag in the buffer is unique, and the output of getAll() is ordered
 * from oldest to newest.
 */

/**
 * Max size of the LRU flag buffer stored in Sentry scope and event contexts.
 */
const FLAG_BUFFER_SIZE = 100;

/**
 * Copies feature flags that are in current scope context to the event context
 */
function copyFlagsFromScopeToEvent(event) {
  const scope = (0,currentScopes/* getCurrentScope */.o5)();
  const flagContext = scope.getScopeData().contexts.flags;
  const flagBuffer = flagContext ? flagContext.values : [];

  if (!flagBuffer.length) {
    return event;
  }

  if (event.contexts === undefined) {
    event.contexts = {};
  }
  event.contexts.flags = { values: [...flagBuffer] };
  return event;
}

/**
 * Creates a feature flags values array in current context if it does not exist
 * and inserts the flag into a FeatureFlag array while maintaining ordered LRU
 * properties. Not thread-safe. After inserting:
 * - `flags` is sorted in order of recency, with the newest flag at the end.
 * - No other flags with the same name exist in `flags`.
 * - The length of `flags` does not exceed `maxSize`. The oldest flag is evicted
 *  as needed.
 *
 * @param name     Name of the feature flag to insert.
 * @param value    Value of the feature flag.
 * @param maxSize  Max number of flags the buffer should store. It's recommended
 *   to keep this consistent across insertions. Default is FLAG_BUFFER_SIZE
 */
function insertFlagToScope(name, value, maxSize = FLAG_BUFFER_SIZE) {
  const scopeContexts = (0,currentScopes/* getCurrentScope */.o5)().getScopeData().contexts;
  if (!scopeContexts.flags) {
    scopeContexts.flags = { values: [] };
  }
  const flags = scopeContexts.flags.values ;
  insertToFlagBuffer(flags, name, value, maxSize);
}

/**
 * Exported for tests. Currently only accepts boolean values (otherwise no-op).
 */
function insertToFlagBuffer(flags, name, value, maxSize) {
  if (typeof value !== 'boolean') {
    return;
  }

  if (flags.length > maxSize) {
    esm_debug_build_DEBUG_BUILD && logger/* logger */.vF.error(`[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${maxSize}`);
    return;
  }

  // Check if the flag is already in the buffer - O(n)
  const index = flags.findIndex(f => f.flag === name);

  if (index !== -1) {
    // The flag was found, remove it from its current position - O(n)
    flags.splice(index, 1);
  }

  if (flags.length === maxSize) {
    // If at capacity, pop the earliest flag - O(n)
    flags.shift();
  }

  // Push the flag to the end - O(1)
  flags.push({
    flag: name,
    result: value,
  });
}


//# sourceMappingURL=featureFlags.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/integrations/featureFlags/featureFlagsIntegration.js



/**
 * Sentry integration for buffering feature flags manually with an API, and
 * capturing them on error events. We recommend you do this on each flag
 * evaluation. Flags are buffered per Sentry scope and limited to 100 per event.
 *
 * See the [feature flag documentation](https://develop.sentry.dev/sdk/expected-features/#feature-flags) for more information.
 *
 * @example
 * ```
 * import * as Sentry from '@sentry/browser';
 * import { type FeatureFlagsIntegration } from '@sentry/browser';
 *
 * // Setup
 * Sentry.init(..., integrations: [Sentry.featureFlagsIntegration()])
 *
 * // Verify
 * const flagsIntegration = Sentry.getClient()?.getIntegrationByName<FeatureFlagsIntegration>('FeatureFlags');
 * if (flagsIntegration) {
 *   flagsIntegration.addFeatureFlag('my-flag', true);
 * } else {
 *   // check your setup
 * }
 * Sentry.captureException(Exception('broke')); // 'my-flag' should be captured to this Sentry event.
 * ```
 */
const featureFlagsIntegration = defineIntegration(() => {
  return {
    name: 'FeatureFlags',

    processEvent(event, _hint, _client) {
      return copyFlagsFromScopeToEvent(event);
    },

    addFeatureFlag(name, value) {
      insertFlagToScope(name, value);
    },
  };
}) ;


//# sourceMappingURL=featureFlagsIntegration.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/integrations/featureFlags/launchdarkly/integration.js



/**
 * Sentry integration for capturing feature flags from LaunchDarkly.
 *
 * See the [feature flag documentation](https://develop.sentry.dev/sdk/expected-features/#feature-flags) for more information.
 *
 * @example
 * ```
 * import * as Sentry from '@sentry/browser';
 * import {launchDarklyIntegration, buildLaunchDarklyFlagUsedInspector} from '@sentry/browser';
 * import * as LaunchDarkly from 'launchdarkly-js-client-sdk';
 *
 * Sentry.init(..., integrations: [launchDarklyIntegration()])
 * const ldClient = LaunchDarkly.initialize(..., {inspectors: [buildLaunchDarklyFlagUsedHandler()]});
 * ```
 */
const launchDarklyIntegration = defineIntegration(() => {
  return {
    name: 'LaunchDarkly',

    processEvent(event, _hint, _client) {
      return copyFlagsFromScopeToEvent(event);
    },
  };
}) ;

/**
 * LaunchDarkly hook that listens for flag evaluations and updates the `flags`
 * context in our Sentry scope. This needs to be registered as an
 * 'inspector' in LaunchDarkly initialize() options, separately from
 * `launchDarklyIntegration`. Both are needed to collect feature flags on error.
 */
function buildLaunchDarklyFlagUsedHandler() {
  return {
    name: 'sentry-flag-auditor',
    type: 'flag-used',

    synchronous: true,

    /**
     * Handle a flag evaluation by storing its name and value on the current scope.
     */
    method: (flagKey, flagDetail, _context) => {
      insertFlagToScope(flagKey, flagDetail.value);
    },
  };
}


//# sourceMappingURL=integration.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/integrations/featureFlags/openfeature/integration.js



const openFeatureIntegration = defineIntegration(() => {
  return {
    name: 'OpenFeature',

    processEvent(event, _hint, _client) {
      return copyFlagsFromScopeToEvent(event);
    },
  };
}) ;

/**
 * OpenFeature Hook class implementation.
 */
class OpenFeatureIntegrationHook  {
  /**
   * Successful evaluation result.
   */
   after(_hookContext, evaluationDetails) {
    insertFlagToScope(evaluationDetails.flagKey, evaluationDetails.value);
  }

  /**
   * On error evaluation result.
   */
   error(hookContext, _error, _hookHints) {
    insertFlagToScope(hookContext.flagKey, hookContext.defaultValue);
  }
}


//# sourceMappingURL=integration.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/integrations/featureFlags/unleash/integration.js




/**
 * Sentry integration for capturing feature flag evaluations from the Unleash SDK.
 *
 * See the [feature flag documentation](https://develop.sentry.dev/sdk/expected-features/#feature-flags) for more information.
 *
 * @example
 * ```
 * import { UnleashClient } from 'unleash-proxy-client';
 * import * as Sentry from '@sentry/browser';
 *
 * Sentry.init({
 *   dsn: '___PUBLIC_DSN___',
 *   integrations: [Sentry.unleashIntegration({featureFlagClientClass: UnleashClient})],
 * });
 *
 * const unleash = new UnleashClient(...);
 * unleash.start();
 *
 * unleash.isEnabled('my-feature');
 * Sentry.captureException(new Error('something went wrong'));
 * ```
 */
const unleashIntegration = defineIntegration(
  ({ featureFlagClientClass: unleashClientClass }) => {
    return {
      name: 'Unleash',

      processEvent(event, _hint, _client) {
        return copyFlagsFromScopeToEvent(event);
      },

      setupOnce() {
        const unleashClientPrototype = unleashClientClass.prototype ;
        (0,object/* fill */.GS)(unleashClientPrototype, 'isEnabled', _wrappedIsEnabled);
      },
    };
  },
) ;

/**
 * Wraps the UnleashClient.isEnabled method to capture feature flag evaluations. Its only side effect is writing to Sentry scope.
 *
 * This wrapper is safe for all isEnabled signatures. If the signature does not match (this: UnleashClient, toggleName: string, ...args: unknown[]) => boolean,
 * we log an error and return the original result.
 *
 * @param original - The original method.
 * @returns Wrapped method. Results should match the original.
 */
function _wrappedIsEnabled(
  original,
) {
  return function ( ...args) {
    const toggleName = args[0];
    const result = original.apply(this, args);

    if (typeof toggleName === 'string' && typeof result === 'boolean') {
      insertFlagToScope(toggleName, result);
    } else if (esm_debug_build_DEBUG_BUILD) {
      logger/* logger */.vF.error(
        `[Feature Flags] UnleashClient.isEnabled does not match expected signature. arg0: ${toggleName} (${typeof toggleName}), result: ${result} (${typeof result})`,
      );
    }
    return result;
  };
}


//# sourceMappingURL=integration.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/integrations/featureFlags/statsig/integration.js



/**
 * Sentry integration for capturing feature flag evaluations from the Statsig js-client SDK.
 *
 * See the [feature flag documentation](https://develop.sentry.dev/sdk/expected-features/#feature-flags) for more information.
 *
 * @example
 * ```
 * import { StatsigClient } from '@statsig/js-client';
 * import * as Sentry from '@sentry/browser';
 *
 * const statsigClient = new StatsigClient();
 *
 * Sentry.init({
 *   dsn: '___PUBLIC_DSN___',
 *   integrations: [Sentry.statsigIntegration({featureFlagClient: statsigClient})],
 * });
 *
 * await statsigClient.initializeAsync();  // or statsigClient.initializeSync();
 *
 * const result = statsigClient.checkGate('my-feature-gate');
 * Sentry.captureException(new Error('something went wrong'));
 * ```
 */
const statsigIntegration = defineIntegration(
  ({ featureFlagClient: statsigClient }) => {
    return {
      name: 'Statsig',

      processEvent(event, _hint, _client) {
        return copyFlagsFromScopeToEvent(event);
      },

      setup() {
        statsigClient.on('gate_evaluation', (event) => {
          insertFlagToScope(event.gate.name, event.gate.value);
        });
      },
    };
  },
) ;


//# sourceMappingURL=integration.js.map

;// ./node_modules/@sentry/browser/build/npm/esm/index.js


































//# sourceMappingURL=index.js.map


/***/ })

}]);