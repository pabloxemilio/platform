"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[3533],{

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






/***/ })

}]);