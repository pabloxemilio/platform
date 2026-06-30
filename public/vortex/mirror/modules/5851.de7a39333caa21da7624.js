"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[5851],{

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






/***/ })

}]);