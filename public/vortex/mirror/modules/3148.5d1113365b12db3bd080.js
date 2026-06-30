"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[3148,4907],{

/***/ 33148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Camera: () => (/* reexport */ Camera)
});

// EXTERNAL MODULE: ./src/canvas/core/Logger/index.ts + 1 modules
var Logger = __webpack_require__(4907);
;// ./src/canvas/core/Camera/Camera.ts

const log = (0,Logger.createLogger)('Camera');
const DEFAULT_LERP = 0.1;
const DEFAULT_AXIS = 'both';
const DEFAULT_FALLOFF = 'easeOut';
class Camera {
    constructor(options) {
        this.viewportWidth = 0;
        this.viewportHeight = 0;
        this.posX = 0;
        this.posY = 0;
        this.zoomLevel = 1;
        this.rotationRad = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.follow = null;
        this.shakeIntensity = 0;
        this.shakeDuration = 0;
        this.shakeElapsed = 0;
        this.shakeAxis = DEFAULT_AXIS;
        this.shakeFalloff = DEFAULT_FALLOFF;
        this.shakeOffsetX = 0;
        this.shakeOffsetY = 0;
        this.bounds = null;
        this.view = options.view;
        this.worldWidth = options.worldWidth ?? Number.POSITIVE_INFINITY;
        this.worldHeight = options.worldHeight ?? Number.POSITIVE_INFINITY;
        log.debug('initialized', { worldWidth: this.worldWidth, worldHeight: this.worldHeight });
    }
    setViewport(width, height) {
        this.viewportWidth = width;
        this.viewportHeight = height;
    }
    get position() {
        return { x: this.posX, y: this.posY };
    }
    setPosition(x, y, smooth = false) {
        if (smooth) {
            this.targetX = x;
            this.targetY = y;
            return;
        }
        this.posX = x;
        this.posY = y;
        this.targetX = x;
        this.targetY = y;
    }
    get zoom() {
        return this.zoomLevel;
    }
    setZoom(value) {
        this.zoomLevel = value;
    }
    get rotation() {
        return this.rotationRad;
    }
    setRotation(rad) {
        this.rotationRad = rad;
    }
    setBounds(bounds) {
        this.bounds = bounds;
    }
    followTarget(target, opts = {}) {
        this.follow = {
            target,
            opts: {
                lerp: opts.lerp ?? DEFAULT_LERP,
                offsetX: opts.offsetX ?? 0,
                offsetY: opts.offsetY ?? 0,
            },
        };
    }
    unfollow() {
        this.follow = null;
        this.targetX = this.posX;
        this.targetY = this.posY;
    }
    shake(options) {
        this.shakeIntensity = options.intensity;
        this.shakeDuration = options.duration;
        this.shakeElapsed = 0;
        this.shakeAxis = options.axis ?? DEFAULT_AXIS;
        this.shakeFalloff = options.falloff ?? DEFAULT_FALLOFF;
    }
    stopShake() {
        this.shakeIntensity = 0;
        this.shakeDuration = 0;
        this.shakeElapsed = 0;
        this.shakeOffsetX = 0;
        this.shakeOffsetY = 0;
    }
    update(deltaTime) {
        if (this.follow) {
            const { target, opts } = this.follow;
            this.targetX = target.x + opts.offsetX;
            this.targetY = target.y + opts.offsetY;
            this.posX += (this.targetX - this.posX) * opts.lerp;
            this.posY += (this.targetY - this.posY) * opts.lerp;
        }
        else if (this.targetX !== this.posX || this.targetY !== this.posY) {
            this.posX += (this.targetX - this.posX) * DEFAULT_LERP;
            this.posY += (this.targetY - this.posY) * DEFAULT_LERP;
        }
        this.applyBounds();
        this.updateShake(deltaTime);
        this.applyTransform();
    }
    applyBounds() {
        if (!this.bounds)
            return;
        if (this.posX < this.bounds.minX)
            this.posX = this.bounds.minX;
        if (this.posX > this.bounds.maxX)
            this.posX = this.bounds.maxX;
        if (this.posY < this.bounds.minY)
            this.posY = this.bounds.minY;
        if (this.posY > this.bounds.maxY)
            this.posY = this.bounds.maxY;
    }
    updateShake(deltaTime) {
        if (this.shakeDuration <= 0) {
            this.shakeOffsetX = 0;
            this.shakeOffsetY = 0;
            return;
        }
        this.shakeElapsed += deltaTime;
        if (this.shakeElapsed >= this.shakeDuration) {
            this.stopShake();
            return;
        }
        const t = this.shakeElapsed / this.shakeDuration;
        const damp = this.shakeFalloff === 'linear' ? 1 - t : (1 - t) * (1 - t);
        const amp = this.shakeIntensity * damp;
        if (this.shakeAxis !== 'vertical') {
            this.shakeOffsetX = (Math.random() * 2 - 1) * amp;
        }
        if (this.shakeAxis !== 'horizontal') {
            this.shakeOffsetY = (Math.random() * 2 - 1) * amp;
        }
    }
    applyTransform() {
        const cx = this.viewportWidth / 2;
        const cy = this.viewportHeight / 2;
        this.view.position.set(cx - (this.posX + this.shakeOffsetX) * this.zoomLevel, cy - (this.posY + this.shakeOffsetY) * this.zoomLevel);
        this.view.scale.set(this.zoomLevel);
        this.view.rotation = this.rotationRad;
        this.view.pivot.set(0, 0);
    }
    destroy() {
        this.unfollow();
        this.stopShake();
    }
}

;// ./src/canvas/core/Camera/index.ts



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