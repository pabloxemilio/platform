"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2024,3533,3664],{

/***/ 83664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Assets: () => (/* reexport */ Assets)
});

// EXTERNAL MODULE: consume shared module (default) pixi8@* (singleton) (fallback: ./node_modules/pixi8/lib/index.mjs)
var index_mjs_ = __webpack_require__(38909);
;// ./src/canvas/core/Assets/Assets.ts

class Assets {
    static async loadManifest(manifestOrOptions) {
        if ('manifest' in manifestOrOptions) {
            const { manifest, basePath, texturePreference, skipDetections, loadOptions } = manifestOrOptions;
            await index_mjs_.Assets.init({ manifest, basePath, texturePreference, skipDetections, loadOptions });
        }
        else {
            await index_mjs_.Assets.init({ manifest: manifestOrOptions });
        }
    }
    static async loadBundle(bundleName, onProgress) {
        await index_mjs_.Assets.loadBundle(bundleName, onProgress);
    }
    static async loadBundles(bundleNames, onProgress) {
        await index_mjs_.Assets.loadBundle(bundleNames, onProgress);
    }
    static backgroundLoadBundle(bundleNames) {
        index_mjs_.Assets.backgroundLoadBundle(bundleNames);
    }
    static async loadFonts(fonts) {
        const faces = fonts.map((f) => {
            const face = new FontFace(f.name, `url(${f.url})`);
            document.fonts.add(face);
            return face.load();
        });
        await Promise.all(faces);
    }
    static async loadDependentSpines(config) {
        await index_mjs_.Assets.load(config.mainSpineAlias);
        const mainSpine = index_mjs_.Assets.get(config.mainSpineAlias);
        const atlas = mainSpine.spineAtlas;
        for (const alias of config.dependentAliases) {
            index_mjs_.Assets.cache.set(`${alias}-atlas`, atlas);
        }
        await index_mjs_.Assets.load(config.dependentAliases);
    }
    static get(assetName) {
        return index_mjs_.Assets.get(assetName);
    }
    static reset() {
        index_mjs_.Assets.reset();
    }
}

;// ./src/canvas/core/Assets/index.ts



/***/ }),

/***/ 89543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CN: () => (/* binding */ stopSpineAnimation),
/* harmony export */   Qx: () => (/* binding */ playSpineAnimation),
/* harmony export */   hr: () => (/* binding */ resetSpineAnimation),
/* harmony export */   v2: () => (/* binding */ SpineComponent)
/* harmony export */ });
/* harmony import */ var _esotericsoftware_spine_pixi_v8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31419);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48730);
/* harmony import */ var _SpineRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73893);



function playSpineAnimation(spine, name, loop = false, onComplete, track = 0) {
    const entry = spine.state.setAnimation(track, name, loop);
    if (onComplete)
        entry.listener = { complete: () => onComplete() };
    return entry;
}
function stopSpineAnimation(spine, track = 0) {
    spine.state.clearTrack(track);
}
function resetSpineAnimation(spine) {
    spine.skeleton.setToSetupPose();
}
class SpineComponent extends _Component__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(config) {
        super();
        this.unsubClock = null;
        this.unsubQuality = null;
        this.spineConfig = config;
        this.spine = _esotericsoftware_spine_pixi_v8__WEBPACK_IMPORTED_MODULE_0__.Spine.from({
            skeleton: config.skeleton,
            atlas: config.atlas,
            scale: config.scale ?? 1,
            autoUpdate: false,
        });
        if (config.shared) {
            _SpineRegistry__WEBPACK_IMPORTED_MODULE_2__/* .SpineRegistry */ .Z.acquire({ skeleton: config.skeleton, atlas: config.atlas, scale: config.scale });
        }
        if (typeof config.defaultMix === 'number') {
            this.spine.state.data.defaultMix = config.defaultMix;
        }
    }
    onAdded() {
        this.addChild(this.spine);
        if (this.spineConfig.autoPlay !== false && this.spineConfig.defaultAnimation) {
            this.play(this.spineConfig.defaultAnimation, this.spineConfig.loop);
        }
        this.syncClock();
        this.syncQuality();
    }
    syncClock() {
        if (!this.game?.clock)
            return;
        const clock = this.game.clock;
        this.spine.state.timeScale = clock.timeScale;
        this.unsubClock = clock.onChange((state) => {
            this.spine.state.timeScale = state.timeScale;
        });
    }
    syncQuality() {
        if (!this.game?.quality)
            return;
        if (typeof this.spineConfig.defaultMix === 'number')
            return;
        const apply = () => {
            this.spine.state.data.defaultMix = this.game.quality.profile.spineDefaultMix;
        };
        apply();
        const quality = this.game.quality;
        quality.events.on('quality:changed', apply);
        this.unsubQuality = () => quality.events.off('quality:changed', apply);
    }
    play(name, loop = false, track = 0) {
        return playSpineAnimation(this.spine, name, loop, undefined, track);
    }
    playAsync(name, loop = false, track = 0) {
        return new Promise((resolve) => {
            const entry = this.spine.state.setAnimation(track, name, loop);
            if (loop) {
                resolve(entry);
            }
            else {
                entry.listener = { complete: () => resolve(entry) };
            }
        });
    }
    queue(name, loop = false, delay = 0, track = 0) {
        return this.spine.state.addAnimation(track, name, loop, delay);
    }
    stop(track = 0) {
        stopSpineAnimation(this.spine, track);
    }
    reset() {
        resetSpineAnimation(this.spine);
    }
    setSkin(name) {
        this.hardResetSlots();
        this.spine.skeleton.setSkin(null);
        this.spine.skeleton.setSkinByName(name);
        this.spine.skeleton.setSlotsToSetupPose();
        this.invalidatePixiCache();
    }
    mixSkins(names) {
        const combined = new _esotericsoftware_spine_pixi_v8__WEBPACK_IMPORTED_MODULE_0__.Skin('combined');
        for (const name of names) {
            const skin = this.spine.skeleton.data.findSkin(name);
            if (skin)
                combined.addSkin(skin);
        }
        this.hardResetSlots();
        this.spine.skeleton.setSkin(null);
        this.spine.skeleton.setSkin(combined);
        this.spine.skeleton.setSlotsToSetupPose();
        this.invalidatePixiCache();
    }
    hardResetSlots() {
        const slots = this.spine.skeleton.slots;
        for (let i = 0, n = slots.length; i < n; i++) {
            slots[i].setAttachment(null);
        }
    }
    invalidatePixiCache() {
        this.spine.skeleton.updateWorldTransform(0);
        this.spine._stateChanged = true;
        this.spine.onViewUpdate?.();
    }
    setMix(from, to, duration) {
        this.spine.state.data.setMix(from, to, duration);
    }
    addSlotObject(slot, object) {
        this.spine.addSlotObject(slot, object);
    }
    setAttachment(slotName, attachmentName) {
        this.spine.skeleton.setAttachment(slotName, attachmentName);
    }
    hideAttachment(slotName) {
        this.spine.skeleton.setAttachment(slotName, null);
    }
    showAttachment(slotName, attachmentName) {
        this.spine.skeleton.setAttachment(slotName, attachmentName);
    }
    setAdditiveBlend(slotName, additive) {
        const slot = this.spine.skeleton.findSlot(slotName);
        if (slot) {
            slot.data.blendMode = additive ? 1 : 0;
        }
    }
    attachContainer(slotName, container) {
        this.addSlotObject(slotName, container);
        return () => this.detachContainer(slotName);
    }
    detachContainer(slotName) {
        this.spine.removeSlotObject?.(slotName);
    }
    poseAt(animation, time) {
        this.spine.state.setAnimation(0, animation, false);
        this.spine.state.update(time);
        this.spine.state.apply(this.spine.skeleton);
        this.spine.skeleton.updateWorldTransform(0);
        this.spine.state.clearTrack(0);
    }
    findBone(name) {
        return this.spine.skeleton.findBone(name);
    }
    findSlot(name) {
        return this.spine.skeleton.findSlot(name);
    }
    get animationName() {
        const current = this.spine.state.getCurrent(0);
        return current?.animation?.name ?? null;
    }
    get animationNames() {
        return this.spine.skeleton.data.animations.map((a) => a.name);
    }
    get skinNames() {
        return this.spine.skeleton.data.skins.map((s) => s.name);
    }
    get isPlaying() {
        return this.spine.state.getCurrent(0) !== null;
    }
    get timeScale() {
        return this.spine.state.timeScale;
    }
    set timeScale(value) {
        this.spine.state.timeScale = value;
    }
    onComplete(cb) {
        const listener = { complete: (entry) => cb(entry) };
        this.spine.state.addListener(listener);
        return () => this.spine.state.removeListener(listener);
    }
    onEvent(cb) {
        const listener = { event: (entry, event) => cb(entry, event) };
        this.spine.state.addListener(listener);
        return () => this.spine.state.removeListener(listener);
    }
    update(deltaTime) {
        this.spine.update(deltaTime);
    }
    destroy() {
        this.unsubClock?.();
        this.unsubQuality?.();
        this.spine.state.clearListeners();
        this.removeChild(this.spine);
        this.spine.destroy();
        if (this.spineConfig.shared) {
            _SpineRegistry__WEBPACK_IMPORTED_MODULE_2__/* .SpineRegistry */ .Z.release({
                skeleton: this.spineConfig.skeleton,
                atlas: this.spineConfig.atlas,
                scale: this.spineConfig.scale,
            });
        }
        super.destroy();
    }
}


/***/ }),

/***/ 73893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SpineRegistry)
/* harmony export */ });
/* harmony import */ var pixi8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38909);
/* harmony import */ var _esotericsoftware_spine_pixi_v8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31419);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4907);



const log = (0,_Logger__WEBPACK_IMPORTED_MODULE_2__.createLogger)('SpineRegistry');
function makeCacheKey({ skeleton, atlas, scale = 1 }) {
    return `${skeleton}-${atlas}-${scale}`;
}
class SpineRegistry {
    static acquire(key) {
        const cacheKey = makeCacheKey(key);
        const existing = this.entries.get(cacheKey);
        if (existing) {
            existing.refCount++;
            return;
        }
        this.entries.set(cacheKey, { refCount: 1 });
    }
    static release(key) {
        const cacheKey = makeCacheKey(key);
        const entry = this.entries.get(cacheKey);
        if (!entry)
            return;
        entry.refCount--;
        if (entry.refCount <= 0) {
            this.entries.delete(cacheKey);
            pixi8__WEBPACK_IMPORTED_MODULE_0__.Cache.remove(cacheKey);
            log.debug('SkeletonData released', { cacheKey });
        }
    }
    static preload(key) {
        const cacheKey = makeCacheKey(key);
        if (pixi8__WEBPACK_IMPORTED_MODULE_0__.Cache.has(cacheKey))
            return;
        const warm = _esotericsoftware_spine_pixi_v8__WEBPACK_IMPORTED_MODULE_1__.Spine.from({ skeleton: key.skeleton, atlas: key.atlas, scale: key.scale ?? 1 });
        warm.destroy();
        log.debug('SkeletonData preloaded', { cacheKey });
    }
    static refCount(key) {
        return this.entries.get(makeCacheKey(key))?.refCount ?? 0;
    }
    static clear() {
        for (const cacheKey of this.entries.keys()) {
            pixi8__WEBPACK_IMPORTED_MODULE_0__.Cache.remove(cacheKey);
        }
        this.entries.clear();
    }
}
SpineRegistry.entries = new Map();


/***/ }),

/***/ 93533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  circularReveal: () => (/* reexport */ circularReveal),
  fadeIn: () => (/* reexport */ fadeIn),
  fadeOut: () => (/* reexport */ fadeOut),
  irisReveal: () => (/* reexport */ irisReveal),
  shake: () => (/* reexport */ shake),
  slideIn: () => (/* reexport */ slideIn),
  slideOut: () => (/* reexport */ slideOut),
  tween: () => (/* reexport */ tween),
  wipeReveal: () => (/* reexport */ wipeReveal)
});

// EXTERNAL MODULE: consume shared module (default) gsap@^3.13.0 (strict) (fallback: ./node_modules/gsap/index.js)
var index_js_ = __webpack_require__(6858);
;// ./src/canvas/core/Tween/Tween.ts

function tween(target, props) {
    return index_js_["default"].to(target, {
        ...props,
        onComplete: () => {
            props.onComplete?.call(target);
        },
    });
}

;// ./src/canvas/core/Tween/Transitions.ts

const DEFAULTS = { duration: 0.3, ease: 'power2.inOut' };
function fadeOut(target, options) {
    const { duration, ease } = { ...DEFAULTS, ...options };
    return new Promise((resolve) => {
        index_js_["default"].to(target, { alpha: 0, duration, ease, onComplete: resolve });
    });
}
function fadeIn(target, options) {
    const { duration, ease } = { ...DEFAULTS, ...options };
    target.alpha = 0;
    return new Promise((resolve) => {
        index_js_["default"].to(target, { alpha: 1, duration, ease, onComplete: resolve });
    });
}
function slideOut(target, direction, options) {
    const { duration, ease } = { ...DEFAULTS, ...options };
    const props = getSlideOffset(target, direction);
    return new Promise((resolve) => {
        index_js_["default"].to(target, { ...props, duration, ease, onComplete: resolve });
    });
}
function slideIn(target, direction, options) {
    const { duration, ease } = { ...DEFAULTS, ...options };
    const destX = target.x;
    const destY = target.y;
    const offset = getSlideOffset(target, direction);
    target.x = offset.x ?? destX;
    target.y = offset.y ?? destY;
    return new Promise((resolve) => {
        index_js_["default"].to(target, { x: destX, y: destY, duration, ease, onComplete: resolve });
    });
}
function getSlideOffset(target, direction) {
    const w = target.width || 1920;
    const h = target.height || 1080;
    switch (direction) {
        case 'left': return { x: -w };
        case 'right': return { x: w };
        case 'up': return { y: -h };
        case 'down': return { y: h };
        default: return {};
    }
}

;// ./src/canvas/core/Tween/Shake.ts

const SHAKE_DEFAULTS = { intensity: 10, duration: 0.4, frequency: 30, axis: 'both' };
async function shake(target, options) {
    const intensity = options?.intensity ?? SHAKE_DEFAULTS.intensity;
    const duration = options?.duration ?? SHAKE_DEFAULTS.duration;
    const frequency = options?.frequency ?? SHAKE_DEFAULTS.frequency;
    const axis = options?.axis ?? SHAKE_DEFAULTS.axis;
    const origX = target.position.x;
    const origY = target.position.y;
    index_js_["default"].killTweensOf(target.position);
    target.position.set(origX, origY);
    const steps = Math.ceil(frequency * duration);
    const stepDuration = duration / steps;
    const tl = index_js_["default"].timeline();
    for (let i = 0; i < steps; i++) {
        const decay = 1 - i / steps;
        const offsetX = axis !== 'y' ? (Math.random() * 2 - 1) * intensity * decay : 0;
        const offsetY = axis !== 'x' ? (Math.random() * 2 - 1) * intensity * decay : 0;
        tl.to(target.position, {
            x: origX + offsetX,
            y: origY + offsetY,
            duration: stepDuration,
            ease: 'none',
        });
    }
    tl.to(target.position, {
        x: origX,
        y: origY,
        duration: stepDuration,
        ease: 'none',
    });
    return new Promise((resolve) => {
        tl.eventCallback('onComplete', resolve);
    });
}

// EXTERNAL MODULE: consume shared module (default) pixi8@* (singleton) (fallback: ./node_modules/pixi8/lib/index.mjs)
var index_mjs_ = __webpack_require__(38909);
;// ./src/canvas/core/Tween/MaskTransitions.ts


const REVEAL_DEFAULTS = { duration: 0.5, ease: 'power2.out' };
function circularReveal(target, options) {
    const duration = options?.duration ?? REVEAL_DEFAULTS.duration;
    const ease = options?.ease ?? REVEAL_DEFAULTS.ease;
    const bounds = target.getBounds();
    const cx = options?.centerX ?? bounds.width / 2;
    const cy = options?.centerY ?? bounds.height / 2;
    const maxRadius = Math.max(bounds.width, bounds.height);
    const mask = new index_mjs_.Graphics();
    target.addChild(mask);
    target.mask = mask;
    const proxy = { radius: 0 };
    return new Promise((resolve) => {
        index_js_["default"].to(proxy, {
            radius: maxRadius,
            duration,
            ease,
            onUpdate: () => {
                mask.clear();
                mask.circle(cx, cy, proxy.radius).fill(0xffffff);
            },
            onComplete: () => {
                target.mask = null;
                target.removeChild(mask);
                mask.destroy();
                resolve();
            },
        });
    });
}
function wipeReveal(target, options) {
    const duration = options?.duration ?? REVEAL_DEFAULTS.duration;
    const ease = options?.ease ?? REVEAL_DEFAULTS.ease;
    const direction = options?.direction ?? 'left';
    const bounds = target.getBounds();
    const w = bounds.width;
    const h = bounds.height;
    const mask = new index_mjs_.Graphics();
    target.addChild(mask);
    target.mask = mask;
    const proxy = { progress: 0 };
    return new Promise((resolve) => {
        index_js_["default"].to(proxy, {
            progress: 1,
            duration,
            ease,
            onUpdate: () => {
                mask.clear();
                const p = proxy.progress;
                switch (direction) {
                    case 'left':
                        mask.rect(0, 0, w * p, h).fill(0xffffff);
                        break;
                    case 'right':
                        mask.rect(w * (1 - p), 0, w * p, h).fill(0xffffff);
                        break;
                    case 'up':
                        mask.rect(0, 0, w, h * p).fill(0xffffff);
                        break;
                    case 'down':
                        mask.rect(0, h * (1 - p), w, h * p).fill(0xffffff);
                        break;
                }
            },
            onComplete: () => {
                target.mask = null;
                target.removeChild(mask);
                mask.destroy();
                resolve();
            },
        });
    });
}
function irisReveal(target, options) {
    const duration = options?.duration ?? REVEAL_DEFAULTS.duration;
    const ease = options?.ease ?? 'power2.in';
    const bounds = target.getBounds();
    const cx = options?.centerX ?? bounds.width / 2;
    const cy = options?.centerY ?? bounds.height / 2;
    const maxRadius = Math.max(bounds.width, bounds.height);
    const mask = new index_mjs_.Graphics();
    target.addChild(mask);
    target.mask = mask;
    const proxy = { radius: maxRadius };
    return new Promise((resolve) => {
        index_js_["default"].to(proxy, {
            radius: 0,
            duration,
            ease,
            onUpdate: () => {
                mask.clear();
                mask.circle(cx, cy, proxy.radius).fill(0xffffff);
            },
            onComplete: () => {
                target.mask = null;
                target.removeChild(mask);
                mask.destroy();
                resolve();
            },
        });
    });
}

;// ./src/canvas/core/Tween/index.ts






/***/ }),

/***/ 51343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* reexport */ ResponsiveText)
});

// EXTERNAL MODULE: consume shared module (default) pixi8@* (singleton) (fallback: ./node_modules/pixi8/lib/index.mjs)
var index_mjs_ = __webpack_require__(38909);
// EXTERNAL MODULE: ./src/canvas/core/Component/index.ts + 1 modules
var Component = __webpack_require__(48730);
;// ./src/canvas/ui/ResponsiveText/ResponsiveText.ts


class ResponsiveText extends Component.Component {
    constructor(config) {
        super();
        this.debugGraphics = null;
        this.cfg = config;
        this.originalFontSize = config.style.fontSize ?? 16;
        this.text = new index_mjs_.Text({ text: '', style: config.style });
        if (config.anchor) {
            this.text.anchor.set(config.anchor.x, config.anchor.y);
        }
        this.addChild(this.text);
        if (config.debug) {
            this.debugGraphics = new index_mjs_.Graphics();
            this.addChild(this.debugGraphics);
        }
    }
    get value() {
        return this.text.text;
    }
    get fitScale() {
        return this.text.scale.x;
    }
    setValue(text) {
        this.text.text = text;
        this.fit();
    }
    setMaxWidth(width) {
        this.cfg.maxWidth = width;
        this.fit();
    }
    updateFill(fill) {
        this.text.style.fill = fill;
        this.text.text = this.text.text;
        this.fit();
    }
    updateStyle(style) {
        for (const [key, value] of Object.entries(style)) {
            if (value !== null && typeof value === 'object')
                continue;
            try {
                this.text.style[key] = value;
            }
            catch { }
        }
        this.fit();
    }
    setStyle(style) {
        this.cfg.style = style;
        this.text.style = style;
        this.fit();
    }
    onResize(_bounds) {
        this.fit();
    }
    fit() {
        this.text.scale.set(1);
        const bounds = this.text.getLocalBounds();
        const letterSpacing = this.text.style.letterSpacing || 0;
        const measuredWidth = bounds.width + letterSpacing;
        let scale = Math.min((this.cfg.maxWidth || Infinity) / (measuredWidth || 1), (this.cfg.maxHeight != null ? this.cfg.maxHeight : Infinity) / (bounds.height || 1), 1);
        if (this.cfg.minFontSize != null) {
            const minScale = this.cfg.minFontSize / this.originalFontSize;
            scale = Math.max(scale, minScale);
        }
        if (this.cfg.minHeight != null && bounds.height > 0) {
            const minScale = this.cfg.minHeight / bounds.height;
            scale = Math.max(scale, minScale);
        }
        this.text.scale.set(scale);
        this.drawDebug(scale);
    }
    drawDebug(_scale) {
        if (!this.debugGraphics)
            return;
        this.debugGraphics.clear();
        const mw = this.cfg.maxWidth;
        const mh = this.cfg.maxHeight;
        if (!mw && !mh)
            return;
        const ax = this.cfg.anchor?.x ?? 0;
        const ay = this.cfg.anchor?.y ?? 0;
        const w = mw || this.text.width;
        const h = mh || this.text.height;
        const x = -w * ax;
        const y = -h * ay;
        this.debugGraphics.rect(x, y, w, h);
        this.debugGraphics.stroke({ color: 0xff0000, width: 2 });
    }
    destroy() {
        super.destroy();
    }
}

;// ./src/canvas/ui/ResponsiveText/index.ts



/***/ }),

/***/ 72024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AbstractAnimatedValue: () => (/* reexport */ AbstractAnimatedValue),
  AnimatedBitmapValue: () => (/* reexport */ AnimatedBitmapValue),
  AnimatedValue: () => (/* reexport */ AnimatedValue),
  Button: () => (/* reexport */ Button),
  ParticleLayer: () => (/* reexport */ ParticleLayer),
  ResponsiveBitmapText: () => (/* reexport */ ResponsiveBitmapText),
  ResponsiveText: () => (/* reexport */ ResponsiveText/* ResponsiveText */.O)
});

// EXTERNAL MODULE: consume shared module (default) pixi8@* (singleton) (fallback: ./node_modules/pixi8/lib/index.mjs)
var index_mjs_ = __webpack_require__(38909);
// EXTERNAL MODULE: consume shared module (default) gsap@^3.13.0 (strict) (fallback: ./node_modules/gsap/index.js)
var index_js_ = __webpack_require__(6858);
// EXTERNAL MODULE: ./src/canvas/core/Component/index.ts + 1 modules
var Component = __webpack_require__(48730);
// EXTERNAL MODULE: ./src/canvas/core/Tween/index.ts + 4 modules
var Tween = __webpack_require__(93533);
;// ./src/canvas/ui/AnimatedValue/AbstractAnimatedValue.ts




const DEFAULT_FORMATTER = (v) => Math.floor(v).toLocaleString('en-US');
const SPLIT_ANCHORS = {
    charAnchor: { x: 0.5, y: 0.5 },
    wordAnchor: { x: 0.5, y: 0.5 },
    lineAnchor: { x: 0.5, y: 0.5 },
    autoSplit: true,
};
const STAGGER_CAP = {
    countUp: 0,
    cascade: 0.08,
    explode: 0.05,
    flip: 0.1,
    glowPulse: 0.06,
};
const CASCADE_DROP_Y = 90;
const CASCADE_DURATION_RATIO = 0.55;
const EXPLODE_ALPHA_RATIO = 0.45;
const EXPLODE_SCALE_RATIO = 0.55;
const EXPLODE_OVERSHOOT = 2.5;
const FLIP_ALPHA_RATIO = 0.2;
const FLIP_SCALE_RATIO = 0.5;
const FLIP_OVERSHOOT = 1.7;
const GLOW_PEAK_RATIO = 0.25;
const GLOW_SETTLE_RATIO = 0.6;
const GLOW_INITIAL_SCALE = 0.4;
const GLOW_PEAK_SCALE = 1.5;
const COUNT_UP_POP_FROM = 1.4;
const COUNT_UP_POP_FROM_MINOR = 1.25;
const COUNT_UP_POP_DURATION = 0.28;
const COUNT_UP_POP_OVERSHOOT = 2;
const COUNT_UP_POP_INTERVAL = 110;
const COUNT_UP_FINAL_POP_RATIO = 1.25;
class AbstractAnimatedValue extends Component.Component {
    constructor(split, options) {
        super();
        this.debugGraphics = null;
        this.timeline = null;
        this.notifyComplete = () => {
            this.onComplete?.();
        };
        this.split = split;
        this.cfg = options;
        this.targetValue = options.value ?? 0;
        this.currentValue = 0;
        this.duration = options.duration ?? 1.5;
        this.preset = options.preset ?? 'countUp';
        this.formatter = options.formatter ?? DEFAULT_FORMATTER;
        this.onValueUpdate = options.onValueUpdate;
        this.onComplete = options.onComplete;
        this.addChild(this.split);
        if (options.debug) {
            this.debugGraphics = new index_mjs_.Graphics();
            this.addChild(this.debugGraphics);
        }
    }
    setValue(value, instant = false) {
        this.targetValue = value;
        if (instant) {
            this.kill();
            this.currentValue = value;
            this.split.text = this.formatter(value);
            this.fit();
        }
    }
    setMaxWidth(width) {
        this.cfg.maxWidth = width;
        this.fit();
    }
    setMaxHeight(height) {
        this.cfg.maxHeight = height;
        this.fit();
    }
    play(targetValue) {
        this.kill();
        if (targetValue !== undefined)
            this.targetValue = targetValue;
        switch (this.preset) {
            case 'countUp':
                this.timeline = this.buildCountUp();
                break;
            case 'cascade':
                this.timeline = this.buildCascade();
                break;
            case 'explode':
                this.timeline = this.buildExplode();
                break;
            case 'flip':
                this.timeline = this.buildFlip();
                break;
            case 'glowPulse':
                this.timeline = this.buildGlowPulse();
                break;
        }
    }
    kill() {
        this.timeline?.kill();
        this.timeline = null;
    }
    onResize(_bounds) {
        this.fit();
    }
    fit() {
        this.split.scale.set(1);
        const bounds = this.split.getLocalBounds();
        const scale = Math.min((this.cfg.maxWidth || Infinity) / (bounds.width || 1), (this.cfg.maxHeight || Infinity) / (bounds.height || 1), 1);
        this.split.scale.set(scale);
        const ax = this.cfg.anchor?.x ?? 0;
        const ay = this.cfg.anchor?.y ?? 0;
        this.split.x = -bounds.width * scale * ax;
        this.split.y = -bounds.height * scale * ay;
        this.drawDebug();
    }
    drawDebug() {
        if (!this.debugGraphics)
            return;
        this.debugGraphics.clear();
        const mw = this.cfg.maxWidth;
        const mh = this.cfg.maxHeight;
        if (!mw && !mh)
            return;
        const ax = this.cfg.anchor?.x ?? 0;
        const ay = this.cfg.anchor?.y ?? 0;
        const w = mw || this.split.width;
        const h = mh || this.split.height;
        this.debugGraphics.rect(-w * ax, -h * ay, w, h);
        this.debugGraphics.stroke({ color: 0xff0000, width: 2 });
    }
    staggerFor(charCount, preset) {
        return Math.min(STAGGER_CAP[preset], this.duration / Math.max(charCount, 1));
    }
    buildCountUp() {
        const c = this.cfg.countUp;
        const popFrom = c?.popFrom ?? COUNT_UP_POP_FROM;
        const popDuration = c?.popDuration ?? COUNT_UP_POP_DURATION;
        const popOvershoot = c?.popOvershoot ?? COUNT_UP_POP_OVERSHOOT;
        const popInterval = COUNT_UP_POP_INTERVAL;
        const proxy = { value: this.currentValue };
        let lastText = this.formatter(this.currentValue);
        let lastTextLength = lastText.length;
        let lastPopTime = 0;
        const popLastChar = (from, duration, fresh) => {
            const chars = this.split.chars;
            const last = chars[chars.length - 1];
            if (!last)
                return;
            const ease = `back.out(${popOvershoot})`;
            const onComplete = () => { if (!this.destroyed && last?.scale)
                last.scale.set(1, 1); };
            if (fresh) {
                index_js_["default"].fromTo(last.scale, { x: from, y: from }, { x: 1, y: 1, duration, ease, overwrite: true, onComplete });
            }
            else {
                index_js_["default"].to(last.scale, { x: 1, y: 1, duration, ease, overwrite: true, onComplete });
            }
        };
        return (0,Tween.tween)(proxy, {
            value: this.targetValue,
            duration: this.duration,
            ease: 'power3.out',
            onUpdate: () => {
                this.currentValue = proxy.value;
                const next = this.formatter(proxy.value);
                if (next !== lastText) {
                    this.split.text = next;
                    lastText = next;
                    this.fit();
                    const lengthChanged = next.length !== lastTextLength;
                    lastTextLength = next.length;
                    const now = performance.now();
                    if (lengthChanged || now - lastPopTime >= popInterval) {
                        lastPopTime = now;
                        popLastChar(lengthChanged ? popFrom : COUNT_UP_POP_FROM_MINOR, popDuration, lengthChanged);
                    }
                }
                this.onValueUpdate?.(proxy.value);
            },
            onComplete: () => {
                popLastChar(popFrom, popDuration * COUNT_UP_FINAL_POP_RATIO, true);
                this.notifyComplete();
            },
        });
    }
    buildCascade() {
        const c = this.cfg.cascade;
        const dropY = c?.dropY ?? CASCADE_DROP_Y;
        const durationRatio = c?.durationRatio ?? CASCADE_DURATION_RATIO;
        this.applyTargetText();
        const chars = this.split.chars;
        const tl = index_js_["default"].timeline({ onComplete: this.notifyComplete });
        const stagger = this.staggerFor(chars.length, 'cascade');
        chars.forEach((char, i) => {
            const ty = char.y;
            char.alpha = 0;
            char.y = ty - dropY;
            tl.to(char, { alpha: 1, y: ty, duration: this.duration * durationRatio, ease: 'bounce.out' }, i * stagger);
        });
        return tl;
    }
    buildExplode() {
        const c = this.cfg.explode;
        const alphaRatio = c?.alphaRatio ?? EXPLODE_ALPHA_RATIO;
        const scaleRatio = c?.scaleRatio ?? EXPLODE_SCALE_RATIO;
        const overshoot = c?.overshoot ?? EXPLODE_OVERSHOOT;
        this.applyTargetText();
        const chars = this.split.chars;
        const tl = index_js_["default"].timeline({ onComplete: this.notifyComplete });
        const stagger = this.staggerFor(chars.length, 'explode');
        chars.forEach((char, i) => {
            char.alpha = 0;
            char.scale.set(0);
            char.rotation = (Math.random() - 0.5) * Math.PI;
            tl.to(char, { alpha: 1, rotation: 0, duration: this.duration * alphaRatio, ease: 'power3.out' }, i * stagger);
            tl.to(char.scale, { x: 1, y: 1, duration: this.duration * scaleRatio, ease: `back.out(${overshoot})` }, i * stagger);
        });
        return tl;
    }
    buildFlip() {
        const c = this.cfg.flip;
        const alphaRatio = c?.alphaRatio ?? FLIP_ALPHA_RATIO;
        const scaleRatio = c?.scaleRatio ?? FLIP_SCALE_RATIO;
        const overshoot = c?.overshoot ?? FLIP_OVERSHOOT;
        this.applyTargetText();
        const chars = this.split.chars;
        const tl = index_js_["default"].timeline({ onComplete: this.notifyComplete });
        const stagger = this.staggerFor(chars.length, 'flip');
        chars.forEach((char, i) => {
            char.scale.x = 0;
            char.alpha = 0;
            tl.to(char, { alpha: 1, duration: this.duration * alphaRatio }, i * stagger);
            tl.to(char.scale, { x: 1, duration: this.duration * scaleRatio, ease: `back.out(${overshoot})` }, i * stagger);
        });
        return tl;
    }
    buildGlowPulse() {
        const c = this.cfg.glowPulse;
        const peakRatio = c?.peakRatio ?? GLOW_PEAK_RATIO;
        const settleRatio = c?.settleRatio ?? GLOW_SETTLE_RATIO;
        const initialScale = c?.initialScale ?? GLOW_INITIAL_SCALE;
        const peakScale = c?.peakScale ?? GLOW_PEAK_SCALE;
        this.applyTargetText();
        const chars = this.split.chars;
        const tl = index_js_["default"].timeline({ onComplete: this.notifyComplete });
        const stagger = this.staggerFor(chars.length, 'glowPulse');
        const peak = this.duration * peakRatio;
        const settle = this.duration * settleRatio;
        chars.forEach((char, i) => {
            char.alpha = 0;
            char.scale.set(initialScale);
            tl.to(char, { alpha: 1, duration: peak }, i * stagger);
            tl.to(char.scale, { x: peakScale, y: peakScale, duration: peak, ease: 'power2.out' }, i * stagger);
            tl.to(char.scale, { x: 1, y: 1, duration: settle, ease: 'elastic.out(1, 0.4)' }, i * stagger + peak);
        });
        return tl;
    }
    applyTargetText() {
        this.currentValue = this.targetValue;
        this.split.text = this.formatter(this.targetValue);
        this.fit();
    }
    onDestroy() {
        this.kill();
        for (const char of this.split.chars) {
            index_js_["default"].killTweensOf(char);
            index_js_["default"].killTweensOf(char.scale);
        }
        index_js_["default"].killTweensOf(this.split);
    }
}

;// ./src/canvas/ui/AnimatedValue/AnimatedValue.ts


class AnimatedValue extends AbstractAnimatedValue {
    constructor(options) {
        const formatter = options.formatter ?? DEFAULT_FORMATTER;
        super(new index_mjs_.SplitText({ text: formatter(0), style: options.style, ...SPLIT_ANCHORS }), options);
    }
}

;// ./src/canvas/ui/AnimatedValue/AnimatedBitmapValue.ts


class AnimatedBitmapValue extends AbstractAnimatedValue {
    constructor(options) {
        const formatter = options.formatter ?? DEFAULT_FORMATTER;
        super(new index_mjs_.SplitBitmapText({ text: formatter(0), style: options.style, ...SPLIT_ANCHORS }), options);
    }
}

;// ./src/canvas/ui/AnimatedValue/index.ts




// EXTERNAL MODULE: consume shared module (default) @esotericsoftware/spine-pixi-v8@^4.2.102 (singleton) (fallback: ./node_modules/@esotericsoftware/spine-pixi-v8/dist/index.js)
var dist_index_js_ = __webpack_require__(31419);
// EXTERNAL MODULE: ./src/canvas/core/Assets/index.ts + 1 modules
var Assets = __webpack_require__(83664);
// EXTERNAL MODULE: ./src/canvas/core/Components/SpineComponent/SpineComponent.ts
var SpineComponent = __webpack_require__(89543);
// EXTERNAL MODULE: ./src/canvas/core/Helpers/index.ts + 6 modules
var Helpers = __webpack_require__(75308);
;// ./src/canvas/ui/Button/Button.ts







class Button extends Component.Component {
    constructor(config) {
        super();
        this.state = 'normal';
        this.clickListeners = new Set();
        this.spriteView = null;
        this.spineView = null;
        this.graphicsView = null;
        this.labelText = null;
        this.cfg = config;
        this.eventMode = 'static';
        this.cursor = 'pointer';
        if (config.hitArea) {
            this.hitArea = config.hitArea;
        }
        this.initMode(config.mode);
        this.initLabel();
        this.bindPointerEvents();
        if (config.enabled === false) {
            this.enabled = false;
        }
    }
    get enabled() {
        return this.state !== 'disabled';
    }
    set enabled(value) {
        if (value) {
            if (this.state === 'disabled') {
                this.setState('normal');
            }
        }
        else {
            this.setState('disabled');
        }
    }
    onClick(cb) {
        this.clickListeners.add(cb);
        return () => this.clickListeners.delete(cb);
    }
    setLabel(text) {
        if (this.labelText) {
            this.labelText.text = text;
            this.centerLabel();
        }
    }
    onResize(_bounds) {
        this.centerLabel();
    }
    update(deltaTime) {
        if (this.spineView) {
            this.spineView.update(deltaTime);
        }
    }
    destroy() {
        this.clickListeners.clear();
        super.destroy();
    }
    initMode(mode) {
        switch (mode.type) {
            case 'sprite':
                this.initSprite(mode);
                break;
            case 'spine':
                this.initSpine(mode);
                break;
            case 'graphics':
                this.initGraphics(mode);
                break;
        }
    }
    initSprite(mode) {
        const textureName = mode.textures.normal;
        const texture = textureName ? Assets.Assets.get(textureName) : index_mjs_.Texture.EMPTY;
        this.spriteView = new index_mjs_.Sprite(texture);
        this.spriteView.anchor.set(0.5);
        this.addChild(this.spriteView);
    }
    initSpine(mode) {
        this.spineView = dist_index_js_.Spine.from({
            skeleton: mode.skeleton,
            atlas: mode.atlas,
            autoUpdate: false,
        });
        this.addChild(this.spineView);
        const anim = mode.animations.normal;
        if (anim) {
            const loop = mode.loop?.normal ?? true;
            (0,SpineComponent/* playSpineAnimation */.Qx)(this.spineView, anim, loop);
        }
    }
    initGraphics(mode) {
        this.graphicsView = new index_mjs_.Graphics();
        this.addChild(this.graphicsView);
        const drawFn = mode.draw.normal;
        if (drawFn) {
            drawFn(this.graphicsView, mode.width, mode.height);
        }
    }
    initLabel() {
        if (!this.cfg.label)
            return;
        this.labelText = new index_mjs_.Text({
            text: this.cfg.label.text,
            style: this.cfg.label.style,
        });
        this.labelText.anchor.set(0.5);
        this.addChild(this.labelText);
        this.centerLabel();
    }
    centerLabel() {
        if (!this.labelText)
            return;
        const bounds = this.getLocalBounds();
        this.labelText.position.set(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
        const maxW = bounds.width * 0.9;
        this.labelText.scale.set(1);
        (0,Helpers.fitTextToWidth)(this.labelText, maxW);
    }
    bindPointerEvents() {
        this.on('pointerover', () => {
            if (this.state === 'disabled')
                return;
            this.setState('hover');
        });
        this.on('pointerout', () => {
            if (this.state === 'disabled')
                return;
            this.setState('normal');
        });
        this.on('pointerdown', () => {
            if (this.state === 'disabled')
                return;
            this.setState('pressed');
            this.animatePress(true);
        });
        this.on('pointerup', () => {
            if (this.state === 'disabled')
                return;
            this.animatePress(false);
            this.setState('hover');
            for (const cb of this.clickListeners) {
                cb();
            }
        });
        this.on('pointerupoutside', () => {
            if (this.state === 'disabled')
                return;
            this.animatePress(false);
            this.setState('normal');
        });
    }
    setState(newState) {
        if (this.state === newState)
            return;
        this.state = newState;
        this.applyVisualState();
    }
    applyVisualState() {
        const mode = this.cfg.mode;
        switch (mode.type) {
            case 'sprite':
                this.applySpriteState(mode);
                break;
            case 'spine':
                this.applySpineState(mode);
                break;
            case 'graphics':
                this.applyGraphicsState(mode);
                break;
        }
        if (this.spriteView) {
            this.spriteView.alpha = this.state === 'disabled' ? 0.5 : 1;
        }
    }
    applySpriteState(mode) {
        if (!this.spriteView)
            return;
        const alias = mode.textures[this.state]
            ?? mode.textures[this.state === 'pressed' ? 'hover' : 'normal']
            ?? mode.textures.normal;
        if (alias) {
            this.spriteView.texture = Assets.Assets.get(alias);
        }
    }
    applySpineState(mode) {
        if (!this.spineView)
            return;
        const anim = mode.animations[this.state];
        if (anim) {
            const loop = mode.loop?.[this.state] ?? (this.state === 'normal');
            (0,SpineComponent/* playSpineAnimation */.Qx)(this.spineView, anim, loop);
        }
    }
    applyGraphicsState(mode) {
        if (!this.graphicsView)
            return;
        const drawFn = mode.draw[this.state] ?? mode.draw.normal;
        if (drawFn) {
            this.graphicsView.clear();
            drawFn(this.graphicsView, mode.width, mode.height);
        }
    }
    animatePress(pressing) {
        const pressScale = this.cfg.pressScale ?? 0.95;
        const target = pressing ? pressScale : 1;
        index_js_["default"].to(this.scale, {
            x: target,
            y: target,
            duration: pressing ? 0.05 : 0.1,
            overwrite: true,
        });
    }
}

;// ./src/canvas/ui/Button/index.ts


// EXTERNAL MODULE: ./src/canvas/ui/ResponsiveText/index.ts + 1 modules
var ResponsiveText = __webpack_require__(51343);
;// ./src/canvas/ui/ResponsiveBitmapText/ResponsiveBitmapText.ts


class ResponsiveBitmapText extends Component.Component {
    constructor(config) {
        super();
        this.debugGraphics = null;
        this.cfg = config;
        this.text = new index_mjs_.BitmapText({ text: '', style: config.style });
        this.addChild(this.text);
        const ax = this.cfg.anchor?.x ?? 0;
        const ay = this.cfg.anchor?.y ?? 0;
        this.text.anchor.set(ax, ay);
        if (config.debug) {
            this.debugGraphics = new index_mjs_.Graphics();
            this.addChild(this.debugGraphics);
            this.drawDebugBounds();
        }
    }
    get value() {
        return this.text.text;
    }
    setValue(text) {
        this.text.text = text;
        this.text.scale.set(1);
        const bounds = this.text.getLocalBounds();
        const s = Math.min((this.cfg.maxWidth || Infinity) / (bounds.width || 1), (this.cfg.maxHeight || Infinity) / (bounds.height || 1), 1);
        this.text.scale.set(s);
        this.drawDebugBounds();
    }
    updateStyle(style) {
        this.text.style = style;
        this.setValue(this.text.text);
    }
    setMaxWidth(width) {
        this.cfg.maxWidth = width;
    }
    setMaxHeight(height) {
        this.cfg.maxHeight = height;
    }
    drawDebugBounds() {
        if (!this.debugGraphics)
            return;
        this.debugGraphics.clear();
        const mw = this.cfg.maxWidth;
        const mh = this.cfg.maxHeight;
        if (!mw && !mh)
            return;
        const ax = this.cfg.anchor?.x ?? 0;
        const ay = this.cfg.anchor?.y ?? 0;
        const w = mw || this.text.width;
        const h = mh || this.text.height;
        const x = -w * ax;
        const y = -h * ay;
        this.debugGraphics.rect(x, y, w, h);
        this.debugGraphics.stroke({ color: 0xff0000, width: 2 });
    }
    onResize(_bounds) { }
    destroy() {
        this.debugGraphics?.destroy();
        this.text.destroy();
        super.destroy();
    }
}

;// ./src/canvas/ui/ResponsiveBitmapText/index.ts


// EXTERNAL MODULE: ./src/canvas/core/Logger/index.ts + 1 modules
var Logger = __webpack_require__(4907);
;// ./src/canvas/ui/ParticleLayer/ParticleLayer.ts


const log = (0,Logger.createLogger)('ParticleLayer');
class ParticleLayer extends Component.Component {
    constructor(config) {
        super();
        this.pool = [];
        this.active = [];
        this.cfg = config;
        const poolSize = config.poolSize ?? 50;
        for (let i = 0; i < poolSize; i++) {
            const p = config.factory();
            p.visible = false;
            this.addChild(p);
            this.pool.push(p);
        }
    }
    spawn(emitConfig) {
        const spawnRate = this.game?.quality?.profile.particleSpawnRate ?? 1;
        const count = Math.max(1, Math.round(emitConfig.count * spawnRate));
        const lifetime = emitConfig.lifetime ?? 1;
        for (let i = 0; i < count; i++) {
            let particle;
            if (this.pool.length > 0) {
                particle = this.pool.pop();
            }
            else {
                log.warn('pool exhausted, creating new particle');
                particle = this.cfg.factory();
                this.addChild(particle);
            }
            particle.visible = true;
            this.cfg.initializer(particle, emitConfig);
            this.active.push({ particle, age: 0, lifetime });
        }
    }
    clear() {
        for (let i = this.active.length - 1; i >= 0; i--) {
            const entry = this.active[i];
            entry.particle.visible = false;
            this.pool.push(entry.particle);
        }
        this.active.length = 0;
    }
    update(deltaTime) {
        let i = 0;
        while (i < this.active.length) {
            const entry = this.active[i];
            entry.age += deltaTime;
            const alive = this.cfg.updater(entry.particle, entry.age, entry.lifetime, deltaTime);
            if (!alive) {
                entry.particle.visible = false;
                this.pool.push(entry.particle);
                this.active[i] = this.active[this.active.length - 1];
                this.active.pop();
            }
            else {
                i++;
            }
        }
    }
    onResize(_bounds) { }
    destroy() {
        this.clear();
        super.destroy();
    }
}

;// ./src/canvas/ui/ParticleLayer/index.ts


;// ./src/canvas/ui/index.ts







/***/ })

}]);