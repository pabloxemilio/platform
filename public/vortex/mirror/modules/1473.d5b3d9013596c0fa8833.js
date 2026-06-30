"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[1473,4907],{

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

/***/ 31473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  applyTo: () => (/* reexport */ applyTo),
  circleMask: () => (/* reexport */ circleMask),
  polygonMask: () => (/* reexport */ polygonMask),
  rectMask: () => (/* reexport */ rectMask),
  reelMask: () => (/* reexport */ reelMask)
});

// EXTERNAL MODULE: consume shared module (default) pixi8@* (singleton) (fallback: ./node_modules/pixi8/lib/index.mjs)
var index_mjs_ = __webpack_require__(38909);
// EXTERNAL MODULE: ./src/canvas/core/Logger/index.ts + 1 modules
var Logger = __webpack_require__(4907);
;// ./src/canvas/core/Masks/Masks.ts


const log = (0,Logger.createLogger)('Masks');
function rectMask(target, bounds) {
    const draw = (g) => g.rect(bounds.x, bounds.y, bounds.width, bounds.height).fill(0xffffff);
    const g = draw(new index_mjs_.Graphics());
    target.addChild(g);
    target.mask = g;
    return {
        graphics: g,
        update: () => {
            g.clear();
            draw(g);
        },
        destroy: () => {
            target.mask = null;
            target.removeChild(g);
            g.destroy();
        },
    };
}
function circleMask(target, x, y, radius) {
    const draw = (g) => g.circle(x, y, radius).fill(0xffffff);
    const g = draw(new index_mjs_.Graphics());
    target.addChild(g);
    target.mask = g;
    return {
        graphics: g,
        update: () => {
            g.clear();
            draw(g);
        },
        destroy: () => {
            target.mask = null;
            target.removeChild(g);
            g.destroy();
        },
    };
}
function polygonMask(target, points) {
    const draw = (g) => g.poly(points).fill(0xffffff);
    const g = draw(new index_mjs_.Graphics());
    target.addChild(g);
    target.mask = g;
    return {
        graphics: g,
        update: () => {
            g.clear();
            draw(g);
        },
        destroy: () => {
            target.mask = null;
            target.removeChild(g);
            g.destroy();
        },
    };
}
function applyTo(target, mask) {
    if (mask instanceof index_mjs_.Sprite) {
        log.warn('Sprite mask detected — converting to Graphics rect for perf');
        const b = mask.getBounds();
        return rectMask(target, { x: b.x, y: b.y, width: b.width, height: b.height });
    }
    target.mask = mask;
    return {
        graphics: mask,
        update: () => { },
        destroy: () => {
            target.mask = null;
        },
    };
}
function reelMask(reelContainer, width, height) {
    return rectMask(reelContainer, { x: 0, y: 0, width, height });
}

;// ./src/canvas/core/Masks/index.ts



/***/ })

}]);