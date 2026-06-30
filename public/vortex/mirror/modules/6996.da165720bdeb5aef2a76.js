"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[4907,6996],{

/***/ 96996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Clock: () => (/* reexport */ Clock),
  Scheduler: () => (/* reexport */ Scheduler)
});

// EXTERNAL MODULE: consume shared module (default) pixi8@* (singleton) (fallback: ./node_modules/pixi8/lib/index.mjs)
var index_mjs_ = __webpack_require__(38909);
// EXTERNAL MODULE: consume shared module (default) gsap@^3.13.0 (strict) (fallback: ./node_modules/gsap/index.js)
var index_js_ = __webpack_require__(6858);
// EXTERNAL MODULE: ./src/canvas/core/Logger/index.ts + 1 modules
var Logger = __webpack_require__(4907);
;// ./src/canvas/core/Clock/Scheduler.ts
class Scheduler {
    constructor(maxCatchupPerTick = Scheduler.DEFAULT_MAX_CATCHUP_PER_TICK) {
        this.timers = [];
        this.maxCatchupPerTick = maxCatchupPerTick;
    }
    after(seconds, callback) {
        const timer = { remaining: seconds, interval: null, callback };
        this.timers.push(timer);
        return () => this.cancel(timer);
    }
    every(seconds, callback) {
        const timer = { remaining: seconds, interval: seconds, callback };
        this.timers.push(timer);
        return () => this.cancel(timer);
    }
    tick(dt) {
        const toRemove = [];
        for (let i = 0; i < this.timers.length; i++) {
            const timer = this.timers[i];
            timer.remaining -= dt;
            if (timer.remaining <= 0) {
                timer.callback();
                if (timer.interval !== null) {
                    let catchUp = 0;
                    while (timer.remaining <= 0 && catchUp < this.maxCatchupPerTick) {
                        timer.remaining += timer.interval;
                        if (timer.remaining <= 0) {
                            timer.callback();
                            catchUp++;
                        }
                    }
                    if (timer.remaining <= 0) {
                        timer.remaining = timer.interval;
                    }
                }
                else {
                    toRemove.push(i);
                }
            }
        }
        for (let i = toRemove.length - 1; i >= 0; i--) {
            this.timers.splice(toRemove[i], 1);
        }
    }
    clear() {
        this.timers.length = 0;
    }
    get size() {
        return this.timers.length;
    }
    cancel(timer) {
        const idx = this.timers.indexOf(timer);
        if (idx !== -1)
            this.timers.splice(idx, 1);
    }
}
Scheduler.DEFAULT_MAX_CATCHUP_PER_TICK = 10;

;// ./src/canvas/core/Clock/Clock.ts




const log = (0,Logger.createLogger)('Clock');
class Clock {
    constructor({ ticker, syncGsap = false, maxDt = Clock.DEFAULT_MAX_DT, onResume }) {
        this.currentTimeScale = 1;
        this.currentDt = 0;
        this.totalElapsed = 0;
        this.serverTimestamp = 0;
        this.listeners = new Set();
        this.stateSnapshot = { paused: false, timeScale: 1, elapsed: 0, alpha: 0 };
        this.smoothedDt = 1 / Clock.DEFAULT_MAX_FPS;
        this.accumulator = 0;
        this.currentAlpha = 0;
        this.ticker = ticker;
        this.ticker.maxFPS = Clock.DEFAULT_MAX_FPS;
        this.syncGsapEnabled = syncGsap;
        this.maxDt = maxDt;
        this.onResumeCallback = onResume ?? null;
        this.scheduler = new Scheduler();
        this.tickerCallback = () => this.tick();
        this.ticker.add(this.tickerCallback, undefined, index_mjs_.UPDATE_PRIORITY.HIGH);
        if (this.syncGsapEnabled) {
            index_js_["default"].ticker.remove(index_js_["default"].updateRoot);
        }
        this.visibilityHandler = () => {
            if (document.visibilityState !== 'visible') {
                this.pause();
            }
            else {
                this.resume();
            }
        };
        document.addEventListener('visibilitychange', this.visibilityHandler);
        log.debug('initialized', { syncGsap, maxDt: this.maxDt, fixedStep: Clock.FIXED_STEP });
    }
    get dt() {
        return this.currentDt;
    }
    get elapsed() {
        return this.totalElapsed;
    }
    get alpha() {
        return this.currentAlpha;
    }
    get serverTime() {
        return this.serverTimestamp;
    }
    get paused() {
        return !this.ticker.started;
    }
    get timeScale() {
        return this.currentTimeScale;
    }
    set timeScale(value) {
        this.currentTimeScale = value;
    }
    pause() {
        if (!this.ticker.started)
            return;
        this.currentDt = 0;
        this.ticker.stop();
        this.notifyListeners(true);
        log.debug('paused');
    }
    resume() {
        if (this.ticker.started)
            return;
        this.resetDtSmoothing();
        this.ticker.lastTime = performance.now();
        this.ticker.start();
        this.onResumeCallback?.();
        this.notifyListeners(false);
        log.debug('resumed');
    }
    syncWithServer(serverTimestamp) {
        this.serverTimestamp = serverTimestamp;
    }
    after(seconds, callback) {
        return this.scheduler.after(seconds, callback);
    }
    every(seconds, callback) {
        return this.scheduler.every(seconds, callback);
    }
    onChange(cb) {
        this.listeners.add(cb);
        return () => this.listeners.delete(cb);
    }
    destroy() {
        this.ticker.remove(this.tickerCallback);
        document.removeEventListener('visibilitychange', this.visibilityHandler);
        this.scheduler.clear();
        this.listeners.clear();
        if (this.syncGsapEnabled) {
            index_js_["default"].ticker.add(index_js_["default"].updateRoot);
        }
    }
    resetDtSmoothing() {
        this.smoothedDt = 1 / Clock.DEFAULT_MAX_FPS;
        this.accumulator = 0;
        this.currentAlpha = 0;
    }
    updateSmoothedDt(rawDt) {
        const clamped = Math.min(rawDt, this.smoothedDt * Clock.DT_SPIKE_MULTIPLIER);
        this.smoothedDt = Clock.DT_SMOOTHING_ALPHA * clamped + (1 - Clock.DT_SMOOTHING_ALPHA) * this.smoothedDt;
    }
    tick() {
        const rawDt = Math.min(this.ticker.deltaMS / 1000, this.maxDt);
        this.updateSmoothedDt(rawDt);
        const scaledRaw = rawDt * this.currentTimeScale;
        this.totalElapsed += scaledRaw;
        this.scheduler.tick(scaledRaw);
        this.accumulator += rawDt;
        while (this.accumulator >= Clock.FIXED_STEP) {
            this.accumulator -= Clock.FIXED_STEP;
        }
        this.currentAlpha = this.accumulator / Clock.FIXED_STEP;
        this.currentDt = this.smoothedDt * this.currentTimeScale;
        if (this.syncGsapEnabled) {
            index_js_["default"].updateRoot(this.totalElapsed + this.accumulator * this.currentTimeScale);
        }
        this.notifyListeners(false);
    }
    notifyListeners(paused) {
        if (this.listeners.size === 0)
            return;
        this.stateSnapshot.paused = paused;
        this.stateSnapshot.timeScale = this.currentTimeScale;
        this.stateSnapshot.elapsed = this.totalElapsed;
        this.stateSnapshot.alpha = this.currentAlpha;
        for (const cb of this.listeners) {
            cb(this.stateSnapshot);
        }
    }
}
Clock.DEFAULT_MAX_FPS = 60;
Clock.DEFAULT_MAX_DT = 1 / 10;
Clock.FIXED_STEP = 1 / 60;
Clock.DT_SMOOTHING_ALPHA = 0.02;
Clock.DT_SPIKE_MULTIPLIER = 1.2;
Clock.MAX_CATCHUP_PER_TICK = Scheduler.DEFAULT_MAX_CATCHUP_PER_TICK;

;// ./src/canvas/core/Clock/index.ts




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



/***/ })

}]);