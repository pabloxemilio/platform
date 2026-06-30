"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[4907,5255,9474],{

/***/ 81890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var pixi8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38909);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4907);
/* harmony import */ var _Sequence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69474);



class Component extends pixi8__WEBPACK_IMPORTED_MODULE_0__.Container {
    constructor() {
        super(...arguments);
        this.configBindings = [];
        this.initialized = false;
        this.activeSequences = new Set();
    }
    add(Ctor, configKey, extraDeps) {
        const child = new Ctor();
        this.addChild(child);
        this.initChild(child, configKey, extraDeps);
        return child;
    }
    initChild(child, configKey, extraDeps) {
        child.game = this.game;
        child.log = (0,_Logger__WEBPACK_IMPORTED_MODULE_1__.createLogger)(child.constructor.name);
        if (configKey && this.config) {
            const configSlice = this.config[configKey];
            child.config = configSlice;
            this.configBindings.push({ key: configKey, child });
        }
        if (extraDeps) {
            Object.assign(child, extraDeps);
        }
        child.initialized = true;
        child.onAdded();
        return child;
    }
    updateConfig({ config }) {
        this.config = config;
        this.onConfigChange();
        for (const binding of this.configBindings) {
            const childConfig = config[binding.key];
            binding.child.updateConfig({ config: childConfig });
        }
    }
    onAdded() { }
    onRemoved() { }
    onUpdate(dt) { }
    onResize(bounds) { }
    onConfigChange() { }
    onDestroy() { }
    update(dt) {
        if (this.destroyed || !this.visible)
            return;
        this.onUpdate(dt);
        const children = this.children;
        for (let i = 0, n = children.length; i < n; i++) {
            const child = children[i];
            if (child instanceof Component) {
                child.update(dt);
            }
        }
    }
    propagateConfigChange() {
        this.onConfigChange();
        for (const child of this.children) {
            if (child instanceof Component) {
                child.propagateConfigChange();
            }
        }
    }
    resize(bounds) {
        this.lastBounds = bounds;
        this.onResize(bounds);
        for (const child of this.children) {
            if (child instanceof Component) {
                child.resize(bounds);
            }
        }
    }
    sequence() {
        const seq = new _Sequence__WEBPACK_IMPORTED_MODULE_2__.Sequence(this.game.clock, this.game.events);
        this.activeSequences.add(seq);
        return seq;
    }
    runSequence(build) {
        const seq = new _Sequence__WEBPACK_IMPORTED_MODULE_2__.Sequence(this.game.clock, this.game.events);
        this.activeSequences.add(seq);
        try {
            build(seq);
        }
        catch (err) {
            this.activeSequences.delete(seq);
            return Promise.reject(err);
        }
        return seq.start().finally(() => this.activeSequences.delete(seq));
    }
    destroy(options) {
        this.onDestroy();
        for (const seq of this.activeSequences) {
            seq.cancel();
        }
        this.activeSequences.clear();
        super.destroy(options);
    }
}


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

/***/ 69474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Sequence: () => (/* reexport */ Sequence),
  SequenceAbortError: () => (/* reexport */ SequenceAbortError),
  SequenceContext: () => (/* reexport */ SequenceContext)
});

// EXTERNAL MODULE: consume shared module (default) gsap@^3.13.0 (strict) (fallback: ./node_modules/gsap/index.js)
var index_js_ = __webpack_require__(6858);
;// ./src/canvas/core/Sequence/SequenceAbortError.ts
class SequenceAbortError extends Error {
    constructor() {
        super('Sequence aborted');
        this.name = 'SequenceAbortError';
    }
}

;// ./src/canvas/core/Sequence/SequenceContext.ts
class SequenceContext {
    constructor(clock, events, signal) {
        this.clock = clock;
        this.events = events;
        this.signal = signal;
        this.startTime = clock.elapsed;
    }
    get elapsed() {
        return this.clock.elapsed - this.startTime;
    }
}

;// ./src/canvas/core/Sequence/Sequence.ts



class Sequence {
    constructor(clock, events) {
        this.steps = [];
        this.controller = new AbortController();
        this.ctx = null;
        this.running = false;
        this.clock = clock;
        this.events = events;
    }
    get aborted() {
        return this.controller.signal.aborted;
    }
    get elapsed() {
        return this.ctx?.elapsed ?? 0;
    }
    wait(seconds) {
        this.steps.push({ run: (ctx) => this.stepWait(ctx, seconds) });
        return this;
    }
    run(fn) {
        this.steps.push({ run: fn });
        return this;
    }
    waitFor(event) {
        this.steps.push({ run: (ctx) => this.stepWaitFor(ctx, event) });
        return this;
    }
    waitForCondition(predicate, pollSec = 0.05) {
        this.steps.push({ run: (ctx) => this.stepPoll(ctx, predicate, pollSec) });
        return this;
    }
    parallel(branches) {
        this.steps.push({ run: () => this.stepParallel(branches) });
        return this;
    }
    race(branches) {
        this.steps.push({ run: () => this.stepRace(branches) });
        return this;
    }
    loop(times, body) {
        this.steps.push({
            run: async (ctx) => {
                for (let i = 0; i < times; i++) {
                    this.throwIfAborted(ctx);
                    const inner = new Sequence(this.clock, this.events);
                    const onAbort = () => inner.cancel();
                    ctx.signal.addEventListener('abort', onAbort, { once: true });
                    body(inner);
                    try {
                        await inner.start();
                    }
                    finally {
                        ctx.signal.removeEventListener('abort', onAbort);
                    }
                    if (this.aborted)
                        throw new SequenceAbortError();
                }
            },
        });
        return this;
    }
    until(predicate, body) {
        this.steps.push({
            run: async (ctx) => {
                while (!predicate()) {
                    this.throwIfAborted(ctx);
                    const inner = new Sequence(this.clock, this.events);
                    const onAbort = () => inner.cancel();
                    ctx.signal.addEventListener('abort', onAbort, { once: true });
                    body(inner);
                    try {
                        await inner.start();
                    }
                    finally {
                        ctx.signal.removeEventListener('abort', onAbort);
                    }
                    if (this.aborted)
                        throw new SequenceAbortError();
                }
            },
        });
        return this;
    }
    tween(target, props) {
        this.steps.push({ run: (ctx) => this.stepTween(ctx, target, props) });
        return this;
    }
    async start() {
        if (this.running)
            throw new Error('Sequence already running');
        this.running = true;
        this.ctx = new SequenceContext(this.clock, this.events, this.controller.signal);
        try {
            for (const step of this.steps) {
                this.throwIfAborted(this.ctx);
                await step.run(this.ctx);
            }
        }
        catch (e) {
            if (!(e instanceof SequenceAbortError))
                throw e;
        }
        finally {
            this.running = false;
        }
    }
    cancel() {
        this.controller.abort();
    }
    throwIfAborted(ctx) {
        if (ctx.signal.aborted)
            throw new SequenceAbortError();
    }
    stepWait(ctx, seconds) {
        return new Promise((resolve, reject) => {
            const cancel = ctx.clock.after(seconds, () => {
                ctx.signal.removeEventListener('abort', onAbort);
                resolve();
            });
            const onAbort = () => {
                cancel();
                reject(new SequenceAbortError());
            };
            ctx.signal.addEventListener('abort', onAbort, { once: true });
        });
    }
    stepWaitFor(ctx, event) {
        return new Promise((resolve, reject) => {
            const handler = (() => {
                ctx.signal.removeEventListener('abort', onAbort);
                ctx.events.off(event, handler);
                resolve();
            });
            const onAbort = () => {
                ctx.events.off(event, handler);
                reject(new SequenceAbortError());
            };
            ctx.events.on(event, handler);
            ctx.signal.addEventListener('abort', onAbort, { once: true });
        });
    }
    stepPoll(ctx, predicate, pollSec) {
        return new Promise((resolve, reject) => {
            let cancelCurrent = () => { };
            const onAbort = () => {
                cancelCurrent();
                reject(new SequenceAbortError());
            };
            const check = () => {
                if (ctx.signal.aborted)
                    return;
                if (predicate()) {
                    ctx.signal.removeEventListener('abort', onAbort);
                    resolve();
                    return;
                }
                cancelCurrent = ctx.clock.after(pollSec, check);
            };
            ctx.signal.addEventListener('abort', onAbort, { once: true });
            cancelCurrent = ctx.clock.after(pollSec, check);
        });
    }
    async stepParallel(branches) {
        const onAbort = () => branches.forEach((b) => b.cancel());
        this.controller.signal.addEventListener('abort', onAbort, { once: true });
        try {
            await Promise.all(branches.map((b) => b.start()));
        }
        catch (e) {
            branches.forEach((b) => b.cancel());
            throw e;
        }
        finally {
            this.controller.signal.removeEventListener('abort', onAbort);
        }
    }
    async stepRace(branches) {
        const onAbort = () => branches.forEach((b) => b.cancel());
        this.controller.signal.addEventListener('abort', onAbort, { once: true });
        try {
            await Promise.race(branches.map((b) => b.start()));
        }
        finally {
            branches.forEach((b) => b.cancel());
            this.controller.signal.removeEventListener('abort', onAbort);
        }
    }
    stepTween(ctx, target, props) {
        return new Promise((resolve, reject) => {
            const onAbort = () => {
                index_js_["default"].killTweensOf(target);
                reject(new SequenceAbortError());
            };
            ctx.signal.addEventListener('abort', onAbort, { once: true });
            if (ctx.signal.aborted)
                return;
            index_js_["default"].to(target, {
                ...props,
                onComplete: () => {
                    ctx.signal.removeEventListener('abort', onAbort);
                    props.onComplete?.call(target);
                    resolve();
                },
            });
        });
    }
}

;// ./src/canvas/core/Sequence/index.ts





/***/ })

}]);