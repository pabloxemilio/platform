"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[9144],{

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