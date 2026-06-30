"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2302,9785],{

/***/ 82302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   I: () => (/* binding */ shortNumber)
/* harmony export */ });
const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B', 'N', 'D', 'H', 'O'];
const smartRound = (num, digits) => {
    const factor = Math.pow(10, digits);
    return Math.round(num * factor) / factor;
};
const trimTrailingZeros = (str) => {
    return str
        .replace(/(\.\d*?[1-9])0+$/, '$1')
        .replace(/\.0+$/, '')
        .replace(/\.?$/, '');
};
function shortNumber(number = 0, trunc = 2, roundFromLength = 8) {
    const fullStr = number.toFixed(trunc);
    if (fullStr.length <= roundFromLength) {
        return fullStr;
    }
    const absNumber = Math.abs(number);
    let tier = Math.floor(Math.log10(absNumber) / 3);
    tier = Math.min(tier, SI_SYMBOL.length - 1);
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;
    const rounded = smartRound(scaled, trunc);
    let roundedStr = rounded.toFixed(trunc);
    roundedStr = trimTrailingZeros(roundedStr);
    return `${roundedStr}${SI_SYMBOL[tier]}`;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shortNumber);


/***/ }),

/***/ 75672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ModuleGroupPageBetIframe: () => (/* reexport */ ModuleGroupPageBetIframe)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) classnames@^2.3.2 (strict) (fallback: ./node_modules/classnames/index.js)
var index_js_ = __webpack_require__(83136);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/module/moduleSetting/assets/style.module.scss
var style_module = __webpack_require__(52373);
// EXTERNAL MODULE: ./src/framework/components/MyBetInfo/index.tsx + 55 modules
var MyBetInfo = __webpack_require__(66837);
// EXTERNAL MODULE: ./src/framework/hooks/useShortUrl.ts
var useShortUrl = __webpack_require__(92784);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
;// ./src/module/moduleGroup/ModuleGroupPageBetIframe/ModuleGroupPageBetIframe.tsx






function _ModuleGroupPageBetIframe({ betData, open, withShortUrl = false, }) {
    let searchParams = new URLSearchParams(window.location.search);
    if (withShortUrl) {
        if (searchParams.get('code')) {
            searchParams = (0,useShortUrl/* useShortUrl */.F)().decode(window.location.href);
        }
        else {
            try {
                searchParams = (0,useShortUrl/* useShortUrl */.F)().decodePath(window.location.href);
            }
            catch (error) {
                console.log(error, 'error');
            }
        }
    }
    const params = {
        cid: searchParams.get('cid'),
        sub: searchParams.get('sub'),
        isMobile: searchParams.get('mobile') === 'true',
        orientation: searchParams.get('orientation') || 'landscape',
        language: searchParams.get('locale'),
        rtp: Number(searchParams.get('rtp')),
        rounding: Number(searchParams.get('rounding')),
        gameClientPublicUrl: searchParams.get('gameClientPublicUrl'),
    };
    const iframeRef = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        if (open && iframeRef.current) {
            iframeRef.current.scrollIntoView({ behavior: 'smooth' });
            iframeRef.current.contentWindow.postMessage({
                type: 'reload',
            }, '*');
        }
    }, [open]);
    return ((0,jsxRuntime_module/* jsx */.Y)(MyBetInfo/* MyBetInfo */.i.Iframe.Loading, { children: ({ loading }) => ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.mybetsinfo, {
                        [style_module/* default */.A.mybetsinfoLoading]: loading,
                    }), children: (0,jsxRuntime_module/* jsx */.Y)(MyBetInfo/* MyBetInfo */.i.Iframe.Inner, { betData: betData, customPath: "result", ...params, children: (0,jsxRuntime_module/* jsx */.Y)("iframe", { ref: iframeRef, className: index_js_default()(style_module/* default */.A.mybetsinfoIframe, {
                                [style_module/* default */.A.mybetsinfoIframeClosed]: !open,
                                [style_module/* default */.A.mybetsinfoIframeOpen]: open,
                            }), scrolling: "no" }) }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.preloader, style_module/* default */.A.preloaderBlack, style_module/* default */.A.preloaderBr24, {
                        [style_module/* default */.A.preloaderActive]: !loading,
                    }) })] })) }));
}
const ModuleGroupPageBetIframe = _ModuleGroupPageBetIframe;

;// ./src/module/moduleGroup/ModuleGroupPageBetIframe/index.tsx



/***/ })

}]);