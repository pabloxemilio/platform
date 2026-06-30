"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[3196,4907,6465],{

/***/ 66465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  EventBus: () => (/* reexport */ EventBus)
});

// EXTERNAL MODULE: consume shared module (default) pixi8@* (singleton) (fallback: ./node_modules/pixi8/lib/index.mjs)
var index_mjs_ = __webpack_require__(38909);
;// ./src/canvas/core/EventBus/EventBus.ts

class EventBus {
    constructor(logger) {
        this.emitter = new index_mjs_.EventEmitter();
        this.history = new Map();
        this.enabled = true;
        this.logger = logger ?? null;
    }
    on(event, fn, context) {
        this.emitter.on(event, fn, context);
        return this;
    }
    once(event, fn, context) {
        this.emitter.once(event, fn, context);
        return this;
    }
    off(event, fn, context) {
        this.emitter.off(event, fn, context);
        return this;
    }
    emit(event, ...args) {
        if (!this.enabled)
            return false;
        this.logger?.debug(`emit "${event}"`, ...args);
        this.history.set(event, args);
        return this.emitter.emit(event, ...args);
    }
    emitSticky(event, ...args) {
        if (!this.enabled)
            return false;
        this.logger?.debug(`emitSticky "${event}"`, ...args);
        this.history.set(event, args);
        return this.emitter.emit(event, ...args);
    }
    onSticky(event, fn, context) {
        this.emitter.on(event, fn, context);
        const last = this.history.get(event);
        if (last)
            fn.apply(context, last);
        return this;
    }
    waitFor(event) {
        return new Promise((resolve) => {
            this.emitter.once(event, (...args) => resolve(args));
        });
    }
    waitForWithTimeout(event, ms) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                this.emitter.off(event, handler);
                reject(new Error(`[EventBus] Timeout "${event}" after ${ms}ms`));
            }, ms);
            const handler = (...args) => {
                clearTimeout(timer);
                resolve(args);
            };
            this.emitter.once(event, handler);
        });
    }
    pipe(event, target) {
        const handler = ((...args) => target.emit(event, ...args));
        this.on(event, handler);
        return () => this.off(event, handler);
    }
    listenerCount(event) {
        return this.emitter.listenerCount(event);
    }
    hasListeners(event) {
        return this.emitter.listenerCount(event) > 0;
    }
    eventNames() {
        return this.emitter.eventNames();
    }
    mute() { this.enabled = false; }
    unmute() { this.enabled = true; }
    removeAll(event) {
        event ? this.emitter.removeAllListeners(event) : this.emitter.removeAllListeners();
        return this;
    }
    clearHistory(event) {
        event ? this.history.delete(event) : this.history.clear();
    }
    destroy() {
        this.emitter.removeAllListeners();
        this.history.clear();
        this.enabled = false;
    }
}

;// ./src/canvas/core/EventBus/index.ts



/***/ }),

/***/ 4907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  createLogger: () => (/* reexport */ createLogger)
});

;// ./src/canvas/core/Logger/Logger.ts
const LOG_PRIORITY = {
    debug: 0, info: 1, warn: 2, error: 3, none: 4,
};
const LOG_TAG = {
    debug: 'color: #8b92a0; background: #1a1a2e; font-weight: bold; padding: 2px 6px; border-radius: 3px 0 0 3px;',
    info: 'color: #0f172a; background: #22d3ee; font-weight: bold; padding: 2px 6px; border-radius: 3px 0 0 3px;',
    warn: 'color: #0f172a; background: #f59e0b; font-weight: bold; padding: 2px 6px; border-radius: 3px 0 0 3px;',
    error: 'color: #fff; background: #ef4444; font-weight: bold; padding: 2px 6px; border-radius: 3px 0 0 3px;',
};
const LOG_MSG = {
    debug: 'color: #8b92a0; background: #111118; font-weight: bold; padding: 2px 8px; border-radius: 0 3px 3px 0;',
    info: 'color: #ffffff; background: #111118; font-weight: bold; padding: 2px 8px; border-radius: 0 3px 3px 0;',
    warn: 'color: #fbbf24; background: #111118; font-weight: bold; padding: 2px 8px; border-radius: 0 3px 3px 0;',
    error: 'color: #fca5a5; background: #1a0a0a; font-weight: bold; padding: 2px 8px; border-radius: 0 3px 3px 0;',
};
function createLogger(prefix, level = 'info') {
    let currentLevel = level;
    let enabled = true;
    function print(lvl, args) {
        if (!enabled || LOG_PRIORITY[lvl] < LOG_PRIORITY[currentLevel])
            return;
        const method = lvl === 'debug' ? 'log' : lvl;
        const msg = args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ');
        console[method](`%c${prefix}%c${msg}`, LOG_TAG[lvl], LOG_MSG[lvl]);
    }
    return {
        debug: (...args) => print('debug', args),
        info: (...args) => print('info', args),
        warn: (...args) => print('warn', args),
        error: (...args) => print('error', args),
        setLevel: (l) => { currentLevel = l; },
        setEnabled: (e) => { enabled = e; },
    };
}

;// ./src/canvas/core/Logger/index.ts



/***/ }),

/***/ 23196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateMachine: () => (/* binding */ StateMachine)
/* harmony export */ });
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4907);
/* harmony import */ var _EventBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66465);


class StateMachine {
    constructor(config) {
        this.hooksMap = {};
        this.destroyed = false;
        this.isTransitioning = false;
        this.currentState = config.initial;
        this.transitions = config.transitions;
        this.log = (0,_Logger__WEBPACK_IMPORTED_MODULE_0__.createLogger)('StateMachine');
        this.events = new _EventBus__WEBPACK_IMPORTED_MODULE_1__.EventBus(this.log);
        this.log.info('init →', config.initial);
    }
    get current() {
        return this.currentState;
    }
    get hooks() {
        return this.hooksMap;
    }
    set hooks(h) {
        this.hooksMap = h;
    }
    canTransition(to) {
        return this.transitions[this.currentState]?.includes(to) ?? false;
    }
    get transitioning() {
        return this.isTransitioning;
    }
    async transition(to) {
        if (this.destroyed)
            throw new Error('[StateMachine] destroyed');
        if (this.isTransitioning)
            throw new Error('[StateMachine] transition already in progress');
        if (!this.canTransition(to)) {
            this.log.error(`invalid: ${this.currentState} → ${to}`);
            throw new Error(`[StateMachine] Invalid transition: ${this.currentState} → ${to}`);
        }
        this.isTransitioning = true;
        const from = this.currentState;
        this.log.info(`${from} → ${to}`);
        try {
            await this.hooksMap.onExit?.(from, to);
            this.events.emit('exit', from, to);
            await this.hooksMap.onTransition?.(from, to);
            this.events.emit('transition', from, to);
            this.currentState = to;
            await this.hooksMap.onEnter?.(to, from);
            this.events.emit('enter', to, from);
            this.events.emit('change', to, from);
        }
        catch (e) {
            this.log.error(`failed: ${from} → ${to}`, e);
            throw e;
        }
        finally {
            this.isTransitioning = false;
        }
    }
    onChange(cb) {
        this.events.on('change', cb);
        return () => this.events.off('change', cb);
    }
    destroy() {
        this.destroyed = true;
        this.events.destroy();
        this.hooksMap = {};
        this.log.info('destroyed');
    }
}


/***/ })

}]);