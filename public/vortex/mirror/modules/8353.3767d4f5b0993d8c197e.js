"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[8353],{

/***/ 84709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(55605), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sharedBet--SRsmA{display:flex;align-items:center;justify-content:center;width:100%;height:100%;position:relative;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_0___});background-size:64px;background-repeat:repeat;background-color:#1a1a1a}.sharedBet--SRsmA::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(129.57deg, rgba(0, 0, 0, 0) 0%, #000000 72.63%)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"sharedBet": `sharedBet--SRsmA`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 57132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useRatio)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57888);

function useRatio(config) {
    const defaultObj = {
        window: { width: 0, height: 0 },
        ratio: { width: 0, height: 0 },
        clip: [],
        free: { width: 0, height: 0 },
        type: 'portrait',
    };
    const [state, setState] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultObj);
    const computedRatioRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)(() => { });
    const settleRafRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const settleStartRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const settleStableFramesRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const settlePrevViewportRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const cancelSettledRecompute = () => {
        if (settleRafRef.current !== null) {
            cancelAnimationFrame(settleRafRef.current);
            settleRafRef.current = null;
        }
        settleStableFramesRef.current = 0;
        settlePrevViewportRef.current = null;
    };
    const getViewportSize = () => {
        const vv = window.visualViewport;
        if (vv) {
            return {
                width: Math.round(vv.width),
                height: Math.round(vv.height),
            };
        }
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    };
    const scheduleSettledRecompute = () => {
        cancelSettledRecompute();
        settleStartRef.current = performance.now();
        const tick = () => {
            const now = performance.now();
            const elapsed = now - settleStartRef.current;
            const current = getViewportSize();
            const prev = settlePrevViewportRef.current;
            const viewportSettled = !!prev && Math.abs(prev.width - current.width) <= 1 && Math.abs(prev.height - current.height) <= 1;
            if (viewportSettled) {
                settleStableFramesRef.current += 1;
            }
            else {
                settleStableFramesRef.current = 0;
            }
            settlePrevViewportRef.current = current;
            if (settleStableFramesRef.current >= 3 || elapsed >= 1000) {
                computedRatioRef.current();
                cancelSettledRecompute();
                return;
            }
            settleRafRef.current = requestAnimationFrame(tick);
        };
        settleRafRef.current = requestAnimationFrame(tick);
    };
    function computedRatio() {
        const active = document.querySelector('input:focus');
        const viewport = document.querySelector('meta[name=viewport]');
        if (active) {
            viewport?.setAttribute('content', `width=${state.window.width}, height=${state.window.height}, initial-scale=1.0, maximum-scale=1.0, user-scalable=0`);
            document.documentElement.style.setProperty('min-width', `${state.window.width}px`);
            document.documentElement.style.setProperty('min-height', `${state.window.height}px`);
            return;
        }
        const _config = (function () {
            if (config.breakpoint === undefined)
                return config;
            const _config = { ...config };
            let breakpoint;
            for (let key in config.breakpoint) {
                if (window.innerWidth >= Number(key)) {
                    if (breakpoint === undefined || breakpoint < Number(key)) {
                        breakpoint = Number(key);
                    }
                }
            }
            if (breakpoint !== undefined) {
                _config.landscape = {
                    ..._config.landscape,
                    ...config.breakpoint[breakpoint].landscape,
                };
                _config.portrait = {
                    ..._config.portrait,
                    ...config.breakpoint[breakpoint].portrait,
                };
            }
            return _config;
        })();
        const updateState = { ...state };
        const x = window.innerWidth;
        const y = window.innerHeight;
        updateState.window = {
            width: x,
            height: y,
        };
        const type = x > y ? 'landscape' : 'portrait';
        updateState.type = type;
        if (typeof _config[type].maxWidth === 'number') {
            const maxWidth = _config[type].maxWidth;
            if (x > maxWidth)
                updateState.window.width = maxWidth;
        }
        if (typeof _config[type].maxHeight === 'number') {
            const maxHeight = _config[type].maxHeight;
            if (y > maxHeight)
                updateState.window.height = maxHeight;
        }
        const min = Math.min(Number(updateState.window.width / _config[type].width), Number(updateState.window.height / _config[type].height));
        updateState.ratio = {
            width: Math.floor(min * _config[type].width),
            height: Math.floor(min * _config[type].height),
        };
        if (_config[type].clip && _config[type].clip.length > 0) {
            updateState.clip = [];
            for (let clip of _config[type].clip) {
                const clipPercent = (clip / _config[type].height) * 100;
                const clipHeight = Math.round((updateState.ratio.height / 100) * clipPercent);
                updateState.clip.push({
                    height: clipHeight,
                    width: updateState.ratio.width,
                });
            }
        }
        updateState.free = {
            height: updateState.window.height - updateState.ratio.height,
            width: updateState.ratio.width,
        };
        const fontSize = type === 'landscape'
            ? `${Math.round(updateState.ratio.height / _config[type].delta)}px`
            : `${Math.round(updateState.ratio.width / _config[type].delta)}px`;
        document.documentElement.style.setProperty('font-size', fontSize);
        document.documentElement.style.removeProperty('min-width');
        document.documentElement.style.removeProperty('min-height');
        viewport?.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
        setState(updateState);
    }
    computedRatioRef.current = computedRatio;
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        computedRatio();
    }, []);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const run = () => computedRatioRef.current();
        const runSettled = () => scheduleSettledRecompute();
        const scheduleAfterOrientation = () => {
            const active = document.activeElement;
            const isInputLike = active &&
                (active.tagName === 'INPUT' ||
                    active.tagName === 'TEXTAREA' ||
                    active.getAttribute?.('contenteditable') === 'true');
            if (isInputLike) {
                active.blur();
            }
            runSettled();
        };
        window.addEventListener('resize', runSettled);
        const visualViewport = window.visualViewport;
        if (visualViewport) {
            visualViewport.addEventListener('resize', runSettled);
            visualViewport.addEventListener('scroll', runSettled);
        }
        const screenOrientation = typeof screen !== 'undefined' && 'orientation' in screen ? screen.orientation : null;
        if (screenOrientation) {
            screenOrientation.addEventListener('change', scheduleAfterOrientation);
        }
        else {
            window.addEventListener('orientationchange', scheduleAfterOrientation);
        }
        run();
        return () => {
            window.removeEventListener('resize', runSettled);
            if (visualViewport) {
                visualViewport.removeEventListener('resize', runSettled);
                visualViewport.removeEventListener('scroll', runSettled);
            }
            if (screenOrientation) {
                screenOrientation.removeEventListener('change', scheduleAfterOrientation);
            }
            else {
                window.removeEventListener('orientationchange', scheduleAfterOrientation);
            }
            cancelSettledRecompute();
        };
    }, []);
    return state;
}


/***/ }),

/***/ 28353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ModuleGroupPageBetShare: () => (/* reexport */ ModuleGroupPageBetShare)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(97825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(77659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(55056);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(10540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(41113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/module/moduleGroup/ModuleGroupPageBetShare/styles.module.scss
var styles_module = __webpack_require__(84709);
;// ./src/module/moduleGroup/ModuleGroupPageBetShare/styles.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles_module/* default */.A, options);




       /* harmony default export */ const ModuleGroupPageBetShare_styles_module = (styles_module/* default */.A && styles_module/* default */.A.locals ? styles_module/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/module/moduleGroup/ModuleGroupPageBet/index.tsx + 5 modules
var ModuleGroupPageBet = __webpack_require__(90012);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: ./src/framework/hooks/useRatio.ts
var useRatio = __webpack_require__(57132);
;// ./src/module/moduleGroup/ModuleGroupPageBetShare/ModuleGroupPageBetShare.tsx





function _ModuleGroupPageBetShare({ useBetsApi = false, logoUrl, bgUrl, betBgUrl, }) {
    (0,hooks_module_js_.useEffect)(() => {
        const app = document.getElementById('app');
        if (app) {
            app.style.height = '100%';
        }
    }, []);
    const ratio = (0,useRatio/* useRatio */.Z)({
        landscape: { width: 960, height: 540, delta: 33.5, clip: [] },
        portrait: {
            width: 360,
            height: 540,
            delta: 22.5,
            clip: [],
        },
    });
    return ((0,jsxRuntime_module/* jsx */.Y)("div", { className: ModuleGroupPageBetShare_styles_module.sharedBet, children: (0,jsxRuntime_module/* jsx */.Y)(ModuleGroupPageBet.ModuleGroupPageBet, { useBetsApi: useBetsApi, logoUrl: logoUrl, bgUrl: bgUrl, betBgUrl: betBgUrl, withShortUrl: true }) }));
}
const ModuleGroupPageBetShare = _ModuleGroupPageBetShare;

;// ./src/module/moduleGroup/ModuleGroupPageBetShare/index.tsx



/***/ }),

/***/ 55605:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6530e6cfe30a7e26be7.webp";

/***/ })

}]);