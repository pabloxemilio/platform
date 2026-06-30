"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[6465],{

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



/***/ })

}]);