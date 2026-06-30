"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[3488,6465,9144],{

/***/ 33488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CanvasGame: () => (/* reexport */ CanvasGame)
});

// EXTERNAL MODULE: ./src/canvas/core/Logger/index.ts + 1 modules
var Logger = __webpack_require__(4907);
// EXTERNAL MODULE: ./src/canvas/core/Runtime/index.ts + 1 modules
var Runtime = __webpack_require__(79144);
// EXTERNAL MODULE: ./src/canvas/core/Clock/index.ts + 2 modules
var Clock = __webpack_require__(96996);
// EXTERNAL MODULE: ./src/canvas/core/EventBus/index.ts + 1 modules
var EventBus = __webpack_require__(66465);
// EXTERNAL MODULE: ./src/canvas/core/Scene/index.ts + 2 modules
var Scene = __webpack_require__(13978);
// EXTERNAL MODULE: ./src/canvas/core/Layer/index.ts + 3 modules
var Layer = __webpack_require__(55255);
// EXTERNAL MODULE: ./src/canvas/core/Helpers/index.ts + 6 modules
var Helpers = __webpack_require__(75308);
// EXTERNAL MODULE: ./src/canvas/core/Quality/index.ts + 3 modules
var Quality = __webpack_require__(28838);
;// ./src/canvas/core/CanvasGame/CanvasGame.ts








const log = (0,Logger.createLogger)('CanvasGame');
class CanvasGame {
    constructor() {
        this.destroyed = false;
        this.qualityUnsub = null;
    }
    async start({ container, fsm, factories }) {
        try {
            log.info(`v${CanvasGame.VERSION} initializing...`);
            const runtime = factories?.runtime?.() ?? new Runtime.Runtime();
            const runtimeCfg = this.config.runtime ?? {};
            await runtime.init({
                parent: container,
                backgroundAlpha: runtimeCfg.backgroundAlpha ?? 0,
                resolution: runtimeCfg.resolution ?? Math.min(window.devicePixelRatio, 2),
                antialias: runtimeCfg.antialias ?? true,
                autoDensity: runtimeCfg.autoDensity ?? true,
                stats: runtimeCfg.stats,
            });
            if (this.destroyed)
                return;
            const events = factories?.events?.() ?? new EventBus.EventBus();
            const clock = factories?.clock?.(runtime.ticker) ??
                new Clock.Clock({
                    ticker: runtime.ticker,
                    syncGsap: true,
                    onResume: () => runtime.resetStats(),
                });
            const sceneOptions = {
                design: this.config.design,
                strategy: this.config.scaleStrategy ?? Helpers.fitStrategy,
                clock,
                zones: this.config.zones,
            };
            const scenes = factories?.scenes?.(runtime, sceneOptions) ?? new Scene.SceneManager(runtime, sceneOptions);
            const sharedLayerNames = (this.config.sharedLayers ?? Layer.SHARED_LAYERS);
            const layers = factories?.layers?.(runtime.stage, sharedLayerNames) ??
                new Layer.LayerManager(runtime.stage, sharedLayerNames);
            const quality = factories?.quality?.(runtime) ??
                new Quality.AdaptiveQuality({ ticker: runtime.ticker });
            runtime.applyQuality(quality.profile);
            const onQualityChange = (_tier, profile) => {
                runtime.applyQuality(profile);
            };
            quality.events.on('quality:changed', onQualityChange);
            this.qualityUnsub = () => quality.events.off('quality:changed', onQualityChange);
            this.game = { runtime, clock, scenes, events, layers, fsm, quality };
            scenes.setGameContext(this.game);
            await this.onReady({ game: this.game });
        }
        catch (error) {
            log.error('failed to start', error);
            throw error;
        }
    }
    destroy() {
        this.destroyed = true;
        this.qualityUnsub?.();
        this.qualityUnsub = null;
        if (this.game) {
            this.game.scenes.destroyAll();
            this.game.layers.destroy();
            this.game.quality.destroy();
            this.game.clock.destroy();
            this.game.events.destroy();
            this.game.runtime.destroy();
        }
        log.info('destroyed');
    }
}
CanvasGame.VERSION = '1.1.3';

;// ./src/canvas/core/CanvasGame/index.ts



/***/ }),

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

/***/ 55255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Layer: () => (/* reexport */ Layer),
  LayerManager: () => (/* reexport */ LayerManager),
  SCENE_LAYERS: () => (/* reexport */ SCENE_LAYERS),
  SHARED_LAYERS: () => (/* reexport */ SHARED_LAYERS),
  defineLayers: () => (/* reexport */ defineLayers)
});

// EXTERNAL MODULE: ./src/canvas/core/Component/Component.ts
var Component = __webpack_require__(81890);
;// ./src/canvas/core/Layer/Layer.ts

class Layer extends Component/* Component */.u {
    constructor(name, zIndex, opts = {}) {
        super();
        this.label = `layer_${name}`;
        this.zIndex = zIndex;
        this.sortableChildren = opts.sortable ?? true;
        if (opts.renderGroup ?? true) {
            this.enableRenderGroup();
        }
        if (opts.cullable) {
            this.cullable = true;
        }
        if (opts.cullableChildren === false) {
            this.cullableChildren = false;
        }
    }
}

;// ./src/canvas/core/Layer/types.ts
const SCENE_LAYERS = [
    'background',
    'characters',
    'main',
    'ui',
    'effects',
    'bonus',
    'popups',
];
const SHARED_LAYERS = [
    'overlay',
    'modals',
];
function defineLayers(...names) {
    return names;
}

;// ./src/canvas/core/Layer/LayerManager.ts


class LayerManager {
    constructor(parent, layerNames, registry, layerOpts) {
        this.layers = new Map();
        this.parent = parent;
        this.registry = registry ?? null;
        const names = (layerNames ?? SCENE_LAYERS);
        names.forEach((name, index) => {
            const layer = new Layer(name, index, layerOpts?.[name] ?? {});
            this.layers.set(name, layer);
            this.parent.addChild(layer);
        });
    }
    get(name) {
        const layer = this.layers.get(name);
        if (!layer)
            throw new Error(`[LayerManager] Layer "${name}" not found`);
        return layer;
    }
    add(name, component) {
        this.get(name).addChild(component);
        this.registry?.register(component);
        return component;
    }
    has(name) {
        return this.layers.has(name);
    }
    show(name) {
        this.get(name).visible = true;
    }
    hide(name) {
        this.get(name).visible = false;
    }
    clear(name) {
        this.get(name).removeChildren();
    }
    get all() {
        return this.layers.values();
    }
    get names() {
        return this.layers.keys();
    }
    destroy() {
        for (const layer of this.layers.values()) {
            layer.destroy({ children: true });
        }
        this.layers.clear();
    }
}

;// ./src/canvas/core/Layer/index.ts





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





/***/ }),

/***/ 79144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Runtime: () => (/* reexport */ Runtime)
});

// EXTERNAL MODULE: consume shared module (default) pixi8@* (singleton) (fallback: ./node_modules/pixi8/lib/index.mjs)
var index_mjs_ = __webpack_require__(38909);
// EXTERNAL MODULE: consume shared module (default) pixi-stats@^5.1.7 (strict) (fallback: ./node_modules/pixi-stats/dist/index.js)
var index_js_ = __webpack_require__(87833);
;// ./src/canvas/core/Runtime/Runtime.ts


let extensionsRegistered = false;
function ensurePixiExtensions() {
    if (extensionsRegistered)
        return;
    index_mjs_.extensions.add(index_mjs_.CullerPlugin);
    index_mjs_.extensions.add(index_mjs_.PrepareSystem);
    extensionsRegistered = true;
}
class Runtime {
    async init(config) {
        ensurePixiExtensions();
        this.app = new index_mjs_.Application();
        await this.app.init({
            resizeTo: config.parent,
            backgroundAlpha: config.backgroundAlpha ?? 0,
            resolution: config.resolution ?? 2,
            antialias: config.antialias ?? true,
            autoDensity: config.autoDensity ?? true,
            sharedTicker: true,
        });
        config.parent.appendChild(this.app.canvas);
        globalThis.__PIXI_APP__ = this.app;
        if (config.stats) {
            this.stats = new index_js_.Stats(this.app.renderer, this.app.ticker);
            this.stats.domElement?.parentElement?.removeChild(this.stats.domElement);
        }
    }
    get canvas() {
        return this.app.canvas;
    }
    get stage() {
        return this.app.stage;
    }
    get ticker() {
        return this.app.ticker;
    }
    get screen() {
        return this.app.screen;
    }
    get statsElement() {
        return this.stats?.domElement ?? null;
    }
    onResize(callback) {
        this.app.renderer.on('resize', callback);
        return () => this.app.renderer.off('resize', callback);
    }
    resize() {
        this.app.resize();
    }
    render() {
        this.app.renderer.render({ container: this.app.stage });
    }
    applyQuality(profile) {
        if (!this.app?.renderer)
            return;
        if (this.app.renderer.resolution !== profile.resolution) {
            this.app.renderer.resolution = profile.resolution;
            this.app.resize();
        }
    }
    async prepare(target) {
        if (!this.app?.renderer)
            return;
        const prepareSystem = this.app.renderer.prepare;
        if (!prepareSystem)
            return;
        await prepareSystem.upload(target);
    }
    resetStats() {
        if (!this.stats)
            return;
        const stats = this.stats;
        const now = performance.now();
        stats.frames = 0;
        stats.prevTime = now;
        stats.beginTime = now;
    }
    destroy() {
        this.stats?.removeDomElement();
        this.app.canvas.parentElement?.removeChild(this.app.canvas);
        this.app.destroy({ removeView: true, releaseGlobalResources: true }, {
            children: true,
            texture: false,
            textureSource: false,
        });
    }
}

;// ./src/canvas/core/Runtime/index.ts



/***/ })

}]);