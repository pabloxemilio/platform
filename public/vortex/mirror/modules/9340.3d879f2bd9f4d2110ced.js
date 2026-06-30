"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[9340],{

/***/ 77088:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* eslint-disable @typescript-eslint/no-explicit-any */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const GLHook_1 = __importDefault(__webpack_require__(57083));
const TextureHook_1 = __importDefault(__webpack_require__(67515));
class BaseHooks {
    constructor() {
        this._drawCalls = -1;
        this._maxDeltaDrawCalls = -1;
    }
    attach(gl) {
        this.glhook = new GLHook_1.default(gl);
        this.texturehook = new TextureHook_1.default(gl);
    }
    get drawCalls() {
        if (this.glhook && this.glhook.isInit) {
            return this.glhook.drawPasses;
        }
        return -1;
    }
    get maxDeltaDrawCalls() {
        return this._maxDeltaDrawCalls;
    }
    get deltaDrawCalls() {
        if (this._drawCalls == -1) {
            this._drawCalls = this.drawCalls;
            return 0;
        }
        const dc = this.drawCalls;
        const delta = dc - this._drawCalls;
        this._drawCalls = dc;
        this._maxDeltaDrawCalls = Math.max(this._maxDeltaDrawCalls, delta);
        return delta;
    }
    get maxTextureCount() {
        if (this.texturehook && this.texturehook.isInit)
            return this.texturehook.maxTexturesCount;
        return 0;
    }
    get texturesCount() {
        if (this.texturehook && this.texturehook.isInit)
            return this.texturehook.currentTextureCount;
        return 0;
    }
    reset() {
        this._maxDeltaDrawCalls = -1;
        this._drawCalls = -1;
        if (this.glhook)
            this.glhook.reset();
        if (this.texturehook)
            this.texturehook.reset();
    }
    release() {
        if (this.glhook)
            this.glhook.release();
        if (this.texturehook)
            this.texturehook.release();
    }
}
exports["default"] = BaseHooks;
//# sourceMappingURL=BaseHooks.js.map

/***/ }),

/***/ 57083:
/***/ ((__unused_webpack_module, exports) => {


/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
class GLHook {
    constructor(_gl) {
        this.drawPasses = 0;
        this.isInit = false;
        this.realGLDrawElements = function () { };
        if (!_gl) {
            console.warn("[GLHook] GL can't be NULL");
        }
        else if (_gl.__proto__.drawElements) {
            this.gl = _gl;
            this.realGLDrawElements = this.gl.__proto__.drawElements;
            // replace with new function
            this.gl.__proto__.drawElements = this.fakeGLdrawElements.bind(this);
            this.isInit = true;
            console.info('[GLHook] GL was Hooked!');
        }
    }
    fakeGLdrawElements(mode, count, type, offset) {
        this.drawPasses++;
        this.realGLDrawElements.call(this.gl, mode, count, type, offset);
    }
    reset() {
        this.drawPasses = 0;
    }
    release() {
        if (this.isInit) {
            this.gl.__proto__.drawElements = this.realGLDrawElements;
            console.info('[GLHook] Hook was removed!');
        }
        this.isInit = false;
    }
}
exports["default"] = GLHook;
//# sourceMappingURL=GLHook.js.map

/***/ }),

/***/ 67515:
/***/ ((__unused_webpack_module, exports) => {


/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
class TextureHook {
    constructor(_gl) {
        this.createdTextures = new Array();
        this.maxTexturesCount = 0;
        this.isInit = false;
        this.realGLCreateTexture = function () { };
        this.realGLDeleteTexture = function () { };
        if (!_gl) {
            console.warn("[TextureHook] GL can't be NULL");
        }
        else if (_gl.__proto__.createTexture) {
            this.gl = _gl;
            this.realGLCreateTexture = this.gl.__proto__.createTexture;
            this.realGLDeleteTexture = this.gl.__proto__.deleteTexture;
            // replace with new function
            this.gl.__proto__.createTexture = this.fakeGLCreateTexture.bind(this);
            this.gl.__proto__.deleteTexture = this.fakeGLDeleteTexture.bind(this);
            this.isInit = true;
            console.info('[TextureHook] GL was Hooked!');
        }
    }
    get currentTextureCount() {
        return this.createdTextures.length;
    }
    registerTexture(texture) {
        this.createdTextures.push(texture); // ++;
        this.maxTexturesCount = Math.max(this.createdTextures.length, this.maxTexturesCount);
    }
    fakeGLCreateTexture() {
        const texture = this.realGLCreateTexture.call(this.gl);
        this.registerTexture(texture);
        return texture;
    }
    fakeGLDeleteTexture(texture) {
        const index = this.createdTextures.indexOf(texture);
        if (index > -1) {
            this.createdTextures.splice(index, 1);
        }
        this.realGLDeleteTexture.call(this.gl, texture);
    }
    reset() {
        this.createdTextures = new Array();
        this.maxTexturesCount = 0;
    }
    release() {
        if (this.isInit) {
            this.gl.__proto__.createTexture = this.realGLCreateTexture;
            this.gl.__proto__.deleteTexture = this.realGLDeleteTexture;
            console.info('[TextureHook] Hook was removed!');
        }
        this.isInit = false;
    }
}
exports["default"] = TextureHook;
//# sourceMappingURL=TextureHook.js.map

/***/ }),

/***/ 59340:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(99231), exports);
__exportStar(__webpack_require__(37660), exports);
__exportStar(__webpack_require__(93689), exports);
__exportStar(__webpack_require__(87484), exports);
__exportStar(__webpack_require__(18495), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 91695:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PIXIHooks = void 0;
const BaseHooks_1 = __importDefault(__webpack_require__(77088));
class PIXIHooks extends BaseHooks_1.default {
    get hooked() {
        return !!this.glhook;
    }
    constructor(renderer) {
        super();
        if (!renderer) {
            console.warn('[PIXI Hooks] renderer in constructor undefined');
            return;
        }
        if (!renderer.gl) {
            console.warn('[PIXI Hooks] gl in renderer not found');
            return;
        }
        this.attach(renderer.gl);
        if (!this.texturehook) {
            console.warn('[PIXI Hooks] attach hook to gl in renderer failed');
            return;
        }
        const texture = renderer.texture;
        // pixi v6 compatibility
        const glTextures = texture._glTextures || texture.managedTextures;
        // pixi v6 compatibility
        const glTexturesArray = Array.isArray(glTextures)
            ? glTextures
            : Object.values(glTextures);
        if (!glTexturesArray) {
            console.warn('[PIXI Hooks] no gl textures found');
            return;
        }
        console.info('[PIXI Hooks] Collect used textures:', glTexturesArray.length);
        glTexturesArray.forEach((glTexture) => {
            if (glTexture.gl === renderer.gl && glTexture.texture) {
                this.texturehook.registerTexture(glTexture.texture);
            }
        });
    }
}
exports.PIXIHooks = PIXIHooks;
//# sourceMappingURL=pixi-hooks.js.map

/***/ }),

/***/ 87484:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatStorage = void 0;
class StatStorage {
    constructor() {
        this.values = [];
        this.snapshotSize = 30; // min~max of X frames total
        this.updateCallbacksSet = new Set();
    }
    get min() {
        return this.values
            .reduce((min, value) => Math.min(min, value), Infinity)
            .toFixed();
    }
    get max() {
        return this.values
            .reduce((max, value) => Math.max(max, value), 0)
            .toFixed();
    }
    get averageValue() {
        return (this.values.reduce((sum, value) => sum + value, 0) /
            this.values.length).toFixed(1);
    }
    pushValue(value) {
        this.values.push(value);
        if (this.values.length > this.snapshotSize) {
            this.values = this.values.slice(-this.snapshotSize);
        }
    }
    update(value, maxValue) {
        this.pushValue(value);
        if (this.updateCallbacksSet.size) {
            this.updateCallbacksSet.forEach((cb) => cb(value, maxValue));
        }
    }
    addCallback(cb) {
        if (typeof cb === 'function') {
            this.updateCallbacksSet.add(cb);
        }
    }
    removeCallback(cb) {
        this.updateCallbacksSet.delete(cb);
    }
    clearCallbacks() {
        this.updateCallbacksSet.clear();
    }
}
exports.StatStorage = StatStorage;
//# sourceMappingURL=stat-storage.js.map

/***/ }),

/***/ 93689:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatsJSAdapter = void 0;
class StatsJSAdapter {
    constructor(hook, stats) {
        this.hook = hook;
        this.stats = stats;
        if (this.hook.hooked) {
            this.dcStat = this.stats.createStat('DC', '#f60', '#300');
            this.tcStat = this.stats.createStat('TC', '#0c6', '#033');
        }
    }
    update() {
        var _a, _b;
        if (!this.stats) {
            return;
        }
        if (this.hook) {
            (_a = this.dcStat) === null || _a === void 0 ? void 0 : _a.update(this.hook.deltaDrawCalls, Math.max(50, this.hook.maxDeltaDrawCalls));
            (_b = this.tcStat) === null || _b === void 0 ? void 0 : _b.update(this.hook.texturesCount, Math.max(20, this.hook.maxTextureCount));
        }
        this.stats.update();
    }
    reset() {
        if (this.hook) {
            this.hook.reset();
        }
    }
}
exports.StatsJSAdapter = StatsJSAdapter;
//# sourceMappingURL=stats-adapter.js.map

/***/ }),

/***/ 99231:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DOM_ELEMENT_ID = exports.GRAPH_HEIGHT = exports.GRAPH_WIDTH = exports.GRAPH_Y = exports.FONT_SIZE = exports.GRAPH_X = exports.TEXT_Y = exports.TEXT_X = exports.HEIGHT = exports.WIDTH = exports.PR = void 0;
exports.PR = 4;
exports.WIDTH = 50 * exports.PR;
exports.HEIGHT = 30 * exports.PR;
exports.TEXT_X = 7;
exports.TEXT_Y = 7;
exports.GRAPH_X = exports.TEXT_X;
exports.FONT_SIZE = 20; // tested @ 120.0 FPS (120~120)
exports.GRAPH_Y = exports.FONT_SIZE + exports.TEXT_Y;
exports.GRAPH_WIDTH = exports.WIDTH - exports.GRAPH_X * 2;
exports.GRAPH_HEIGHT = exports.HEIGHT - exports.GRAPH_X - exports.GRAPH_Y;
exports.DOM_ELEMENT_ID = 'stats';
//# sourceMappingURL=stats-constants.js.map

/***/ }),

/***/ 37660:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderPanel = void 0;
const stats_constants_1 = __webpack_require__(99231);
class RenderPanel {
    constructor(name, fg, bg, statStorage) {
        this.fg = fg;
        this.bg = bg;
        this.name = name;
        this.statStorage = statStorage;
        this.statStorage.addCallback(this.update.bind(this));
        const canvas = document.createElement('canvas');
        canvas.width = stats_constants_1.WIDTH;
        canvas.height = stats_constants_1.HEIGHT;
        const context = canvas.getContext('2d');
        if (!context) {
            throw new Error('Cant get context on canvas');
        }
        context.font = `bold ${stats_constants_1.FONT_SIZE}px ${getComputedStyle(document.body).fontFamily}`;
        context.textBaseline = 'top';
        context.fillStyle = this.bg;
        context.fillRect(0, 0, stats_constants_1.WIDTH, stats_constants_1.HEIGHT);
        context.fillStyle = this.fg;
        context.fillText(this.name, stats_constants_1.TEXT_X, stats_constants_1.TEXT_Y);
        context.fillRect(stats_constants_1.GRAPH_X, stats_constants_1.GRAPH_Y, stats_constants_1.GRAPH_WIDTH, stats_constants_1.GRAPH_HEIGHT);
        context.fillStyle = this.bg;
        context.globalAlpha = 0.8;
        context.fillRect(stats_constants_1.GRAPH_X, stats_constants_1.GRAPH_Y, stats_constants_1.GRAPH_WIDTH, stats_constants_1.GRAPH_HEIGHT);
        this.dom = canvas;
        this.context = context;
    }
    update(value, maxValue) {
        if (!this.context || !this.statStorage || !this.dom) {
            return;
        }
        const context = this.context;
        context.fillStyle = this.bg;
        context.globalAlpha = 1;
        context.fillRect(0, 0, stats_constants_1.WIDTH, stats_constants_1.GRAPH_Y);
        context.fillStyle = this.fg;
        context.font = `bold ${stats_constants_1.FONT_SIZE}px ${getComputedStyle(document.body).fontFamily}`;
        context.fillText(`${this.statStorage.averageValue} ${this.name} (${this.statStorage.min}-${this.statStorage.max})`, stats_constants_1.TEXT_X, stats_constants_1.TEXT_Y);
        context.drawImage(this.dom, stats_constants_1.GRAPH_X + stats_constants_1.PR, stats_constants_1.GRAPH_Y, stats_constants_1.GRAPH_WIDTH - stats_constants_1.PR, stats_constants_1.GRAPH_HEIGHT, stats_constants_1.GRAPH_X, stats_constants_1.GRAPH_Y, stats_constants_1.GRAPH_WIDTH - stats_constants_1.PR, stats_constants_1.GRAPH_HEIGHT);
        context.fillRect(stats_constants_1.GRAPH_X + stats_constants_1.GRAPH_WIDTH - stats_constants_1.PR, stats_constants_1.GRAPH_Y, stats_constants_1.PR, stats_constants_1.GRAPH_HEIGHT);
        const graphValue = value
            ? Math.round((1 - value / maxValue) * stats_constants_1.GRAPH_HEIGHT)
            : parseFloat(this.statStorage.averageValue);
        context.fillStyle = this.bg;
        context.globalAlpha = 0.8;
        context.fillRect(stats_constants_1.GRAPH_X + stats_constants_1.GRAPH_WIDTH - stats_constants_1.PR, stats_constants_1.GRAPH_Y, 2 * stats_constants_1.PR, graphValue);
    }
    destroy() {
        if (!this.statStorage) {
            return;
        }
        this.statStorage.removeCallback(this.update.bind(this));
        this.statStorage = null;
        this.context = null;
        if (this.dom) {
            this.dom.remove();
            this.dom = null;
        }
    }
}
exports.RenderPanel = RenderPanel;
//# sourceMappingURL=stats-panel.js.map

/***/ }),

/***/ 18495:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Stats = void 0;
const pixi_hooks_1 = __webpack_require__(91695);
const stats_panel_1 = __webpack_require__(37660);
const stat_storage_1 = __webpack_require__(87484);
const stats_adapter_1 = __webpack_require__(93689);
const stats_constants_1 = __webpack_require__(99231);
class Stats {
    /**
     * in document/html/dom context returns document's body
     */
    static getContainerElement() {
        if (typeof document === 'undefined') {
            return undefined;
        }
        return document === null || document === void 0 ? void 0 : document.body;
    }
    constructor(renderer, ticker, containerElement = Stats.getContainerElement(), autoStart = true) {
        this.mode = -1;
        this.frames = 0;
        this.panels = [];
        this.domElement = null;
        this.containerElement = null;
        this.renderPanel = null;
        this.handleClickPanel = (event) => {
            event.preventDefault();
            this.showPanel(++this.mode % this.panels.length);
        };
        this.beginTime = (performance || Date).now();
        this.prevTime = this.beginTime;
        this.fpsStat = this.createStat('FPS', '#3ff', '#002');
        this.msStat = this.createStat('MS', '#0f0', '#020');
        if ('memory' in performance) {
            this.memStat = this.createStat('MB', '#f08', '#200');
        }
        this.pixiHooks = new pixi_hooks_1.PIXIHooks(renderer);
        this.adapter = new stats_adapter_1.StatsJSAdapter(this.pixiHooks, this);
        if (typeof (renderer === null || renderer === void 0 ? void 0 : renderer.animations) !== 'undefined') {
            renderer.animations.push(() => {
                this.adapter.update();
            });
        }
        else if (typeof ticker !== 'undefined') {
            ticker.add(() => {
                this.adapter.update();
            });
        }
        else if (typeof requestAnimationFrame !== 'undefined') {
            const frame = () => {
                this.adapter.update();
                requestAnimationFrame(frame);
            };
            frame();
        }
        if (containerElement) {
            this.containerElement = containerElement;
        }
        if (this.containerElement && autoStart) {
            this.showPanel();
        }
    }
    initDomElement() {
        if (this.containerElement && !this.domElement) {
            this.domElement = document.createElement('div');
            this.domElement.id = stats_constants_1.DOM_ELEMENT_ID;
            this.domElement.addEventListener('click', this.handleClickPanel, false);
            this.containerElement.appendChild(this.domElement);
        }
    }
    createStat(name, fg, bg) {
        const statStorage = new stat_storage_1.StatStorage();
        this.panels.push({ name, fg, bg, statStorage });
        return statStorage;
    }
    showPanel(id = 0) {
        const panel = this.panels[id];
        if (panel) {
            this.initDomElement();
            this.removeDomRenderPanel();
            this.createRenderPanel(panel);
            this.mode = id;
        }
        else {
            this.hidePanel();
        }
    }
    hidePanel() {
        this.removeDomRenderPanel();
        this.removeDomElement();
        this.mode = -1;
    }
    createRenderPanel({ name, fg, bg, statStorage }) {
        if (!this.domElement) {
            return;
        }
        this.renderPanel = new stats_panel_1.RenderPanel(name, fg, bg, statStorage);
        if (this.renderPanel.dom) {
            this.domElement.appendChild(this.renderPanel.dom);
        }
    }
    removeDomRenderPanel() {
        var _a;
        if (!this.domElement) {
            return;
        }
        if ((_a = this.renderPanel) === null || _a === void 0 ? void 0 : _a.dom) {
            this.domElement.removeChild(this.renderPanel.dom);
            this.renderPanel.destroy();
            this.renderPanel = null;
        }
    }
    removeDomElement() {
        if (!this.domElement || !this.containerElement) {
            return;
        }
        this.containerElement.removeChild(this.domElement);
        this.domElement.removeEventListener('click', this.handleClickPanel, false);
        this.domElement = null;
    }
    begin() {
        this.beginTime = (performance || Date).now();
    }
    end() {
        const time = (performance || Date).now();
        this.frames++;
        this.msStat.update(time - this.beginTime, 200);
        if (time > this.prevTime + 1000) {
            this.fpsStat.update((this.frames * 1000) / (time - this.prevTime), 100);
            this.prevTime = time;
            this.frames = 0;
            if ('memory' in performance && this.memStat) {
                const memory = performance.memory;
                this.memStat.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
            }
        }
        return time;
    }
    update() {
        this.beginTime = this.end();
    }
}
exports.Stats = Stats;
//# sourceMappingURL=stats.js.map

/***/ })

}]);