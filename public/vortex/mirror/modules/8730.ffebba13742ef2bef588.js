"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[4907,5308,8730,9474],{

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

/***/ 48730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Component: () => (/* reexport */ Component/* Component */.u),
  SceneComponent: () => (/* reexport */ SceneComponent)
});

// EXTERNAL MODULE: ./src/canvas/core/Component/Component.ts
var Component = __webpack_require__(81890);
// EXTERNAL MODULE: ./src/canvas/core/Helpers/index.ts + 6 modules
var Helpers = __webpack_require__(75308);
;// ./src/canvas/core/Component/SceneComponent.ts


class SceneComponent extends Component/* Component */.u {
    constructor() {
        super(...arguments);
        this.sortableChildren = true;
    }
    getLayoutConfig(isLandscape) {
        return {};
    }
    onResize(bounds) {
        const layout = this.getLayoutConfig(bounds.isLandscape);
        (0,Helpers.applyLayout)(this, bounds, layout);
        this.log?.debug('resize', { isLandscape: bounds.isLandscape, x: this.x, y: this.y, layout });
    }
}

;// ./src/canvas/core/Component/index.ts




/***/ }),

/***/ 75308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ObjectPool: () => (/* reexport */ ObjectPool),
  applyLayout: () => (/* reexport */ applyLayout),
  backout: () => (/* reexport */ backout),
  calculateCoverScale: () => (/* reexport */ calculateCoverScale),
  computeAnchorPosition: () => (/* reexport */ computeAnchorPosition),
  computeViewport: () => (/* reexport */ computeViewport),
  coverStrategy: () => (/* reexport */ coverStrategy),
  fitStrategy: () => (/* reexport */ fitStrategy),
  fitTextToWidth: () => (/* reexport */ fitTextToWidth),
  isOrientedDesign: () => (/* reexport */ isOrientedDesign),
  lerp: () => (/* reexport */ lerp),
  linear: () => (/* reexport */ linear),
  mountScene: () => (/* reexport */ mountScene),
  noneStrategy: () => (/* reexport */ noneStrategy)
});

;// ./src/canvas/core/Helpers/Easing.ts
const linear = (t) => t;
const backout = (amount) => (t) => {
    return --t * t * ((amount + 1) * t + amount) + 1;
};
const lerp = (start, end, t) => {
    return start + (end - start) * t;
};

;// ./src/canvas/core/Helpers/Scaling.ts
function fitTextToWidth(text, maxWidth) {
    if (text.width > maxWidth) {
        text.scale.set(maxWidth / text.width);
    }
}
function calculateCoverScale(containerW, containerH, objectW, objectH) {
    return Math.max(containerW / objectW, containerH / objectH);
}

;// ./src/canvas/core/Helpers/ScaleStrategy.ts
const fitStrategy = (viewport, design) => {
    const scale = Math.min(viewport.width / design.width, viewport.height / design.height);
    const offsetX = (viewport.width - design.width * scale) / 2;
    const offsetY = (viewport.height - design.height * scale) / 2;
    return { scale, offsetX, offsetY };
};
const coverStrategy = (viewport, design) => {
    const scale = Math.max(viewport.width / design.width, viewport.height / design.height);
    const offsetX = (viewport.width - design.width * scale) / 2;
    const offsetY = (viewport.height - design.height * scale) / 2;
    return { scale, offsetX, offsetY };
};
const noneStrategy = () => {
    return { scale: 1, offsetX: 0, offsetY: 0 };
};
function isOrientedDesign(d) {
    return 'landscape' in d && 'portrait' in d;
}

// EXTERNAL MODULE: consume shared module (default) pixi8@* (singleton) (fallback: ./node_modules/pixi8/lib/index.mjs)
var index_mjs_ = __webpack_require__(38909);
;// ./src/canvas/core/Helpers/MountScene.ts


function buildZoneMap(zones, isLandscape, designW, designH) {
    if (!zones)
        return {};
    const list = (isLandscape ? zones.landscape : zones.portrait) ?? [];
    const map = {};
    for (const z of list) {
        map[z.label] = { x: z.x * designW, y: z.y * designH, w: z.w * designW, h: z.h * designH };
    }
    return map;
}
function mountScene(runtime, scene, options) {
    const { design, strategy, clock, zones } = options ?? {};
    let scaleRoot = null;
    if (strategy && design) {
        scaleRoot = new index_mjs_.Container();
        runtime.stage.addChild(scaleRoot);
        scaleRoot.addChild(scene);
    }
    else {
        runtime.stage.addChild(scene);
    }
    function handleTick() {
        const dt = clock ? clock.dt : runtime.ticker.deltaMS / 1000;
        scene.update(dt);
    }
    runtime.ticker.add(handleTick);
    function handleResize() {
        const viewport = { width: runtime.screen.width, height: runtime.screen.height };
        const isLandscape = viewport.width >= viewport.height;
        if (strategy && design) {
            const activeDesign = isOrientedDesign(design) ? (isLandscape ? design.landscape : design.portrait) : design;
            const result = strategy(viewport, activeDesign);
            scaleRoot.scale.set(result.scale);
            scaleRoot.position.set(result.offsetX, result.offsetY);
            scene.resize({
                width: activeDesign.width,
                height: activeDesign.height,
                scale: result.scale,
                isLandscape,
                viewportWidth: viewport.width,
                viewportHeight: viewport.height,
                offsetX: result.offsetX,
                offsetY: result.offsetY,
                zones: buildZoneMap(zones, isLandscape, activeDesign.width, activeDesign.height),
            });
        }
        else {
            scene.resize({
                width: viewport.width,
                height: viewport.height,
                scale: 1,
                isLandscape,
                viewportWidth: viewport.width,
                viewportHeight: viewport.height,
                offsetX: 0,
                offsetY: 0,
                zones: buildZoneMap(zones, isLandscape, viewport.width, viewport.height),
            });
        }
    }
    const unsubResize = runtime.onResize(handleResize);
    handleResize();
    return () => {
        runtime.ticker.remove(handleTick);
        unsubResize();
        if (scaleRoot) {
            runtime.stage.removeChild(scaleRoot);
            scaleRoot.removeChild(scene);
            scaleRoot.destroy();
        }
        else {
            runtime.stage.removeChild(scene);
        }
    };
}

;// ./src/canvas/core/Helpers/ObjectPool.ts
class ObjectPool {
    constructor(config) {
        this.pool = [];
        this.active = new Set();
        this.factory = config.factory;
        this.resetFn = config.reset;
        if (config.initialSize) {
            this.prewarm(config.initialSize);
        }
    }
    acquire() {
        const obj = this.pool.pop() ?? this.factory();
        this.active.add(obj);
        return obj;
    }
    release(obj) {
        if (!this.active.delete(obj))
            return;
        this.resetFn(obj);
        this.pool.push(obj);
    }
    prewarm(count) {
        for (let i = 0; i < count; i++) {
            this.pool.push(this.factory());
        }
    }
    clear() {
        this.pool.length = 0;
        this.active.clear();
    }
    get activeCount() {
        return this.active.size;
    }
    get poolSize() {
        return this.pool.length;
    }
}

;// ./src/canvas/core/Helpers/Layout.ts
function computeViewport(bounds) {
    const viewW = bounds.width;
    const viewH = bounds.height;
    const viewX = 0;
    const viewY = 0;
    const centerX = viewW / 2;
    const centerY = viewH / 2;
    const scale = bounds.scale || 1;
    const offsetX = bounds.offsetX ?? 0;
    const offsetY = bounds.offsetY ?? 0;
    const viewportWidth = bounds.viewportWidth ?? viewW;
    const viewportHeight = bounds.viewportHeight ?? viewH;
    const screenX = offsetX === 0 ? 0 : -offsetX / scale;
    const screenY = offsetY === 0 ? 0 : -offsetY / scale;
    const screenW = viewportWidth / scale;
    const screenH = viewportHeight / scale;
    const screenCenterX = screenX + screenW / 2;
    const screenCenterY = screenY + screenH / 2;
    return {
        viewW,
        viewH,
        viewX,
        viewY,
        centerX,
        centerY,
        screenX,
        screenY,
        screenW,
        screenH,
        screenCenterX,
        screenCenterY,
        zoneAreas: bounds.zones ?? {},
    };
}
function computeAnchorPosition(anchor, viewport, offsetX = 0, offsetY = 0) {
    const { viewW, viewH, viewX, viewY, centerX, centerY, screenX, screenY, screenW, screenH, screenCenterX, screenCenterY, } = viewport;
    let x;
    let y;
    switch (anchor) {
        case 'center':
            x = centerX;
            y = centerY;
            break;
        case 'top':
            x = centerX;
            y = viewY;
            break;
        case 'bottom':
            x = centerX;
            y = viewY + viewH;
            break;
        case 'left':
            x = viewX;
            y = centerY;
            break;
        case 'right':
            x = viewX + viewW;
            y = centerY;
            break;
        case 'top-left':
            x = viewX;
            y = viewY;
            break;
        case 'top-right':
            x = viewX + viewW;
            y = viewY;
            break;
        case 'bottom-left':
            x = viewX;
            y = viewY + viewH;
            break;
        case 'bottom-right':
            x = viewX + viewW;
            y = viewY + viewH;
            break;
        case 'screen-center':
            x = screenCenterX;
            y = screenCenterY;
            break;
        case 'screen-top':
            x = screenCenterX;
            y = screenY;
            break;
        case 'screen-bottom':
            x = screenCenterX;
            y = screenY + screenH;
            break;
        case 'screen-left':
            x = screenX;
            y = screenCenterY;
            break;
        case 'screen-right':
            x = screenX + screenW;
            y = screenCenterY;
            break;
        case 'screen-top-left':
            x = screenX;
            y = screenY;
            break;
        case 'screen-top-right':
            x = screenX + screenW;
            y = screenY;
            break;
        case 'screen-bottom-left':
            x = screenX;
            y = screenY + screenH;
            break;
        case 'screen-bottom-right':
            x = screenX + screenW;
            y = screenY + screenH;
            break;
        case 'game-area-center': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x + ga.w / 2 : centerX;
            y = ga ? ga.y + ga.h / 2 : centerY;
            break;
        }
        case 'game-area-top': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x + ga.w / 2 : centerX;
            y = ga ? ga.y : viewY;
            break;
        }
        case 'game-area-bottom': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x + ga.w / 2 : centerX;
            y = ga ? ga.y + ga.h : viewY + viewH;
            break;
        }
        case 'game-area-left': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x : viewX;
            y = ga ? ga.y + ga.h / 2 : centerY;
            break;
        }
        case 'game-area-right': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x + ga.w : viewX + viewW;
            y = ga ? ga.y + ga.h / 2 : centerY;
            break;
        }
        case 'game-area-top-left': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x : viewX;
            y = ga ? ga.y : viewY;
            break;
        }
        case 'game-area-top-right': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x + ga.w : viewX + viewW;
            y = ga ? ga.y : viewY;
            break;
        }
        case 'game-area-bottom-left': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x : viewX;
            y = ga ? ga.y + ga.h : viewY + viewH;
            break;
        }
        case 'game-area-bottom-right': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x + ga.w : viewX + viewW;
            y = ga ? ga.y + ga.h : viewY + viewH;
            break;
        }
        default:
            x = centerX;
            y = centerY;
    }
    return { x: x + offsetX, y: y + offsetY };
}
function applyLayout(object, bounds, layout) {
    if (layout.layoutAnchor) {
        const viewport = computeViewport(bounds);
        const pos = computeAnchorPosition(layout.layoutAnchor, viewport, layout.offsetX ?? 0, layout.offsetY ?? 0);
        object.position.set(pos.x, pos.y);
    }
    else {
        if (layout.x !== undefined && layout.y !== undefined) {
            object.position.set(layout.x, layout.y);
        }
    }
    if (layout.scale !== undefined)
        object.scale.set(layout.scale);
    if (layout.alpha !== undefined)
        object.alpha = layout.alpha;
    if (layout.tint !== undefined)
        object.tint = layout.tint;
    if (layout.zIndex !== undefined)
        object.zIndex = layout.zIndex;
    if (layout.visible !== undefined)
        object.visible = layout.visible;
    if (layout.rotation !== undefined)
        object.rotation = layout.rotation;
    if (layout.anchor !== undefined && 'anchor' in object) {
        const a = layout.anchor;
        if (typeof a === 'number') {
            object.anchor.set(a);
        }
        else if (a && typeof a === 'object' && 'x' in a) {
            object.anchor.set(a.x, a.y);
        }
    }
    if (layout.pivot !== undefined) {
        object.pivot.set(layout.pivot.x, layout.pivot.y);
    }
    if (layout.skew !== undefined) {
        object.skew.set(layout.skew.x, layout.skew.y);
    }
}

;// ./src/canvas/core/Helpers/index.ts








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