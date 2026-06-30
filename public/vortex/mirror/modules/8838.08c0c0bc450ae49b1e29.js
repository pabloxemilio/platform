"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[4907,6465,8838],{

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

/***/ 28838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AdaptiveQuality: () => (/* reexport */ AdaptiveQuality),
  QUALITY_PROFILES: () => (/* reexport */ QUALITY_PROFILES),
  detectInitialTier: () => (/* reexport */ detectInitialTier)
});

// EXTERNAL MODULE: consume shared module (default) pixi8@* (singleton) (fallback: ./node_modules/pixi8/lib/index.mjs)
var index_mjs_ = __webpack_require__(38909);
// EXTERNAL MODULE: ./src/canvas/core/Logger/index.ts + 1 modules
var Logger = __webpack_require__(4907);
// EXTERNAL MODULE: ./src/canvas/core/EventBus/index.ts + 1 modules
var EventBus = __webpack_require__(66465);
;// ./src/canvas/core/Quality/profiles.ts
const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
const QUALITY_PROFILES = {
    high: {
        tier: 'high',
        resolution: Math.min(dpr, 2),
        filtersEnabled: true,
        particleMaxSize: 2048,
        particleSpawnRate: 1.0,
        spineDefaultMix: 0.2,
        shadowEnabled: true,
    },
    mid: {
        tier: 'mid',
        resolution: 1,
        filtersEnabled: true,
        particleMaxSize: 512,
        particleSpawnRate: 0.5,
        spineDefaultMix: 0.1,
        shadowEnabled: false,
    },
    low: {
        tier: 'low',
        resolution: 1,
        filtersEnabled: false,
        particleMaxSize: 128,
        particleSpawnRate: 0.2,
        spineDefaultMix: 0.05,
        shadowEnabled: false,
    },
};

;// ./src/canvas/core/Quality/detection.ts
const NO_IOS = 99;
const MEMORY_HIGH_GB = 4;
const MEMORY_MID_GB = 2;
const CORES_HIGH = 6;
const CORES_MID = 4;
const IOS_LEGACY_CUTOFF = 15;
const SCORE_HIGH_TIER = 4;
const SCORE_MID_TIER = 2;
const SCORE_HIGH_BUMP = 2;
const SCORE_MID_BUMP = 1;
const SCORE_LEGACY_PENALTY = 2;
function getIOSVersion() {
    if (typeof navigator === 'undefined')
        return NO_IOS;
    const match = navigator.userAgent.match(/OS (\d+)_/);
    return match ? parseInt(match[1], 10) : NO_IOS;
}
function hasWebGPU() {
    return typeof navigator !== 'undefined' && 'gpu' in navigator;
}
function detectInitialTier() {
    if (typeof navigator === 'undefined')
        return 'high';
    const memory = navigator.deviceMemory;
    const cores = navigator.hardwareConcurrency ?? 2;
    const ios = getIOSVersion();
    const webgpu = hasWebGPU();
    let score = 0;
    if (memory !== undefined) {
        if (memory >= MEMORY_HIGH_GB)
            score += SCORE_HIGH_BUMP;
        else if (memory >= MEMORY_MID_GB)
            score += SCORE_MID_BUMP;
    }
    else {
        score += SCORE_MID_BUMP;
    }
    if (cores >= CORES_HIGH)
        score += SCORE_HIGH_BUMP;
    else if (cores >= CORES_MID)
        score += SCORE_MID_BUMP;
    if (webgpu)
        score += SCORE_MID_BUMP;
    if (ios > 0 && ios < IOS_LEGACY_CUTOFF)
        score -= SCORE_LEGACY_PENALTY;
    if (score >= SCORE_HIGH_TIER)
        return 'high';
    if (score >= SCORE_MID_TIER)
        return 'mid';
    return 'low';
}

;// ./src/canvas/core/Quality/AdaptiveQuality.ts





const log = (0,Logger.createLogger)('AdaptiveQuality');
const SAMPLE_WINDOW_DEFAULT = 3;
const UPGRADE_COOLDOWN_DEFAULT = 15;
const DOWNGRADE_COOLDOWN_DEFAULT = 5;
const FPS_HIGH_THRESHOLD = 20;
const FPS_MID_THRESHOLD = 15;
const FPS_UPGRADE_HYSTERESIS = 30;
const SMOOTHING_ALPHA = 0.05;
class AdaptiveQuality {
    constructor(options) {
        this.events = new EventBus.EventBus();
        this.smoothedFps = 60;
        this.lastTierChange = 0;
        this.elapsed = 0;
        this.ticker = options.ticker;
        this.sampleWindow = options.sampleWindow ?? SAMPLE_WINDOW_DEFAULT;
        this.upgradeCooldown = options.upgradeCooldown ?? UPGRADE_COOLDOWN_DEFAULT;
        this.downgradeCooldown = options.downgradeCooldown ?? DOWNGRADE_COOLDOWN_DEFAULT;
        this.manualOverride = options.overrideTier ?? null;
        this.currentTier = this.manualOverride ?? detectInitialTier();
        this.tickerCallback = () => this.tick();
        this.ticker.add(this.tickerCallback, undefined, index_mjs_.UPDATE_PRIORITY.LOW);
        log.info('initialized', { tier: this.currentTier });
    }
    get tier() {
        return this.currentTier;
    }
    get profile() {
        return QUALITY_PROFILES[this.currentTier];
    }
    override(tier) {
        this.manualOverride = tier;
        if (tier) {
            this.transitionTo(tier);
        }
    }
    destroy() {
        this.ticker.remove(this.tickerCallback);
        this.events.destroy();
    }
    tick() {
        if (this.manualOverride)
            return;
        const rawFps = this.ticker.FPS;
        this.smoothedFps = SMOOTHING_ALPHA * rawFps + (1 - SMOOTHING_ALPHA) * this.smoothedFps;
        this.elapsed += this.ticker.deltaMS / 1000;
        if (this.elapsed - this.lastTierChange < this.sampleWindow)
            return;
        const next = this.computeTier();
        if (next !== this.currentTier) {
            this.transitionTo(next);
        }
    }
    computeTier() {
        const sinceChange = this.elapsed - this.lastTierChange;
        const fps = this.smoothedFps;
        if (fps < FPS_MID_THRESHOLD && this.currentTier !== 'low') {
            if (sinceChange >= this.downgradeCooldown)
                return 'low';
        }
        else if (fps < FPS_HIGH_THRESHOLD && this.currentTier === 'high') {
            if (sinceChange >= this.downgradeCooldown)
                return 'mid';
        }
        else if (fps >= FPS_UPGRADE_HYSTERESIS) {
            if (sinceChange >= this.upgradeCooldown) {
                if (this.currentTier === 'low')
                    return 'mid';
                if (this.currentTier === 'mid')
                    return 'high';
            }
        }
        return this.currentTier;
    }
    transitionTo(tier) {
        this.currentTier = tier;
        this.lastTierChange = this.elapsed;
        log.info('tier changed', { tier, fps: Math.round(this.smoothedFps) });
        this.events.emitSticky('quality:changed', tier, QUALITY_PROFILES[tier]);
    }
}

;// ./src/canvas/core/Quality/index.ts





/***/ })

}]);