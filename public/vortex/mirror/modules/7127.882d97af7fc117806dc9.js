"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[5851,7127],{

/***/ 7862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Overlay: () => (/* reexport */ Overlay)
});

// EXTERNAL MODULE: consume shared module (default) pixi8@* (singleton) (fallback: ./node_modules/pixi8/lib/index.mjs)
var index_mjs_ = __webpack_require__(38909);
// EXTERNAL MODULE: ./src/canvas/core/Component/Component.ts
var Component = __webpack_require__(81890);
;// ./src/canvas/core/Components/Overlay/Overlay.ts


class Overlay extends Component/* Component */.u {
    constructor(config) {
        super();
        this.bg = new index_mjs_.Sprite(index_mjs_.Texture.WHITE);
        this.bg.tint = config?.color ?? 0x000000;
        this.bg.alpha = config?.alpha ?? 0.7;
        this.addChild(this.bg);
        this.visible = false;
    }
    show() {
        this.visible = true;
    }
    hide() {
        this.visible = false;
    }
    onResize(bounds) {
        this.bg.width = bounds.width;
        this.bg.height = bounds.height;
    }
    destroy() {
        this.bg.destroy();
        super.destroy();
    }
}

;// ./src/canvas/core/Components/Overlay/index.ts



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

/***/ 5851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Skin: () => (/* reexport */ index_js_.Skin),
  Spine: () => (/* reexport */ index_js_.Spine),
  SpineComponent: () => (/* reexport */ SpineComponent/* SpineComponent */.v2),
  SpineRegistry: () => (/* reexport */ SpineRegistry/* SpineRegistry */.Z),
  configureSpineBatching: () => (/* reexport */ configureSpineBatching),
  playSpineAnimation: () => (/* reexport */ SpineComponent/* playSpineAnimation */.Qx),
  resetSpineAnimation: () => (/* reexport */ SpineComponent/* resetSpineAnimation */.hr),
  stopSpineAnimation: () => (/* reexport */ SpineComponent/* stopSpineAnimation */.CN)
});

// EXTERNAL MODULE: consume shared module (default) @esotericsoftware/spine-pixi-v8@^4.2.102 (singleton) (fallback: ./node_modules/@esotericsoftware/spine-pixi-v8/dist/index.js)
var index_js_ = __webpack_require__(31419);
// EXTERNAL MODULE: ./src/canvas/core/Components/SpineComponent/SpineComponent.ts
var SpineComponent = __webpack_require__(89543);
;// ./src/canvas/core/Components/SpineComponent/SpineBatch.ts

const DEFAULT_VERTEX_THRESHOLD = 1000;
function configureSpineBatching(opts = {}) {
    const threshold = opts.vertexThreshold ?? DEFAULT_VERTEX_THRESHOLD;
    index_js_.Spine.BATCHABLE_SIZE = threshold;
}

// EXTERNAL MODULE: ./src/canvas/core/Components/SpineComponent/SpineRegistry.ts
var SpineRegistry = __webpack_require__(73893);
;// ./src/canvas/core/Components/SpineComponent/index.ts






/***/ }),

/***/ 67127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  WinPopUpController: () => (/* reexport */ WinPopUpController),
  WinPopUpView: () => (/* reexport */ WinPopUpView)
});

// EXTERNAL MODULE: consume shared module (default) gsap@^3.13.0 (strict) (fallback: ./node_modules/gsap/index.js)
var index_js_ = __webpack_require__(6858);
// EXTERNAL MODULE: ./src/canvas/core/Component/index.ts + 1 modules
var Component = __webpack_require__(48730);
// EXTERNAL MODULE: ./src/canvas/core/Components/Overlay/index.ts + 1 modules
var Overlay = __webpack_require__(7862);
// EXTERNAL MODULE: ./src/canvas/ui/ResponsiveText/index.ts + 1 modules
var ResponsiveText = __webpack_require__(51343);
// EXTERNAL MODULE: ./src/canvas/core/Components/SpineComponent/index.ts + 1 modules
var SpineComponent = __webpack_require__(5851);
;// ./src/canvas/slot/WinPopUp/WinPopUpView.ts





class WinPopUpView extends Component.Component {
    constructor(config, controller) {
        super();
        this.spineEffect = null;
        this.currentTween = null;
        this.unsubShow = null;
        this.unsubHide = null;
        this.unsubSkip = null;
        this.cfg = config;
        this.controller = controller;
        this.visible = false;
        this.overlay = new Overlay.Overlay({ alpha: 0.6, color: 0x000000 });
        this.addChild(this.overlay);
        this.amountText = new ResponsiveText/* ResponsiveText */.O({
            style: config.tiers.normal.textStyle,
            maxWidth: 800,
            anchor: { x: 0.5, y: 0.5 },
        });
        this.addChild(this.amountText);
        this.unsubShow = controller.onShow((data) => this.show(data));
        this.unsubHide = controller.onHide(() => this.hide());
        this.unsubSkip = controller.onSkip(() => this.skipAnimation());
    }
    onResize(bounds) {
        this.overlay.onResize(bounds);
        this.amountText.position.set(bounds.width / 2, bounds.height / 2);
        this.amountText.setMaxWidth(bounds.width * 0.7);
        if (this.spineEffect) {
            this.spineEffect.position.set(bounds.width / 2, bounds.height / 2);
        }
    }
    update(deltaTime) {
        if (this.spineEffect) {
            this.spineEffect.update(deltaTime);
        }
    }
    show(data) {
        const tier = this.cfg.tiers[data.tier];
        this.visible = true;
        this.overlay.show();
        this.setupSpineEffect(tier);
        const countDuration = this.cfg.countUpDuration ?? 1.5;
        const proxy = { value: 0 };
        this.currentTween = index_js_["default"].to(proxy, {
            value: data.amount,
            duration: countDuration,
            ease: 'power1.out',
            onUpdate: () => {
                const formatted = data.formattedAmount
                    ? this.interpolateAmount(proxy.value, data.amount, data.formattedAmount)
                    : String(Math.round(proxy.value));
                this.amountText.setValue(formatted);
            },
            onComplete: () => {
                if (!this.destroyed)
                    this.amountText.setValue(data.formattedAmount);
                this.currentTween = null;
            },
        });
    }
    hide() {
        this.killTween();
        this.overlay.hide();
        this.visible = false;
        this.removeSpineEffect();
    }
    skipAnimation() {
        if (this.currentTween) {
            this.currentTween.progress(1);
            this.currentTween = null;
        }
    }
    setupSpineEffect(tier) {
        this.removeSpineEffect();
        if (!tier.skeleton || !tier.atlas)
            return;
        this.spineEffect = new SpineComponent.SpineComponent({
            skeleton: tier.skeleton,
            atlas: tier.atlas,
            defaultAnimation: tier.animation ?? 'animation',
            loop: false,
        });
        this.addChild(this.spineEffect);
    }
    removeSpineEffect() {
        if (this.spineEffect) {
            this.removeChild(this.spineEffect);
            this.spineEffect.destroy();
            this.spineEffect = null;
        }
    }
    interpolateAmount(current, total, formatted) {
        const ratio = total > 0 ? current / total : 0;
        const numericMatch = formatted.match(/[\d,.]+/);
        if (!numericMatch)
            return formatted;
        const numStr = numericMatch[0];
        const hasDecimals = numStr.includes('.');
        const targetNum = parseFloat(numStr.replace(/,/g, ''));
        const currentNum = targetNum * ratio;
        const result = hasDecimals ? currentNum.toFixed(2) : String(Math.round(currentNum));
        return formatted.replace(numericMatch[0], result);
    }
    killTween() {
        if (this.currentTween) {
            this.currentTween.kill();
            this.currentTween = null;
        }
    }
    destroy() {
        this.killTween();
        this.unsubShow?.();
        this.unsubHide?.();
        this.unsubSkip?.();
        this.removeSpineEffect();
        super.destroy();
    }
}

;// ./src/canvas/slot/WinPopUp/WinPopUpController.ts
class WinPopUpController {
    constructor() {
        this.showCb = null;
        this.hideCb = null;
        this.skipCb = null;
    }
    onShow(cb) {
        this.showCb = cb;
        return () => { this.showCb = null; };
    }
    onHide(cb) {
        this.hideCb = cb;
        return () => { this.hideCb = null; };
    }
    onSkip(cb) {
        this.skipCb = cb;
        return () => { this.skipCb = null; };
    }
    show(data) {
        this.showCb?.(data);
    }
    hide() {
        this.hideCb?.();
    }
    skip() {
        this.skipCb?.();
    }
    destroy() {
        this.showCb = null;
        this.hideCb = null;
        this.skipCb = null;
    }
}

;// ./src/canvas/slot/WinPopUp/index.ts



;// ./src/canvas/slot/index.ts



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



/***/ })

}]);