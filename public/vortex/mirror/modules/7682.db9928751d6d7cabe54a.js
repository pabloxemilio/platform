"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[7682],{

/***/ 72615:
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(85759), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.demo--Ig8fs{z-index:1000;position:fixed;transform:rotate(180deg);right:0;top:calc(var(--header-height, 40px) + 3rem);display:flex;align-items:center;gap:0.25rem;padding:0.5rem 0.25rem;border-radius:0 0.25rem 0.25rem 0;background:rgba(34,34,34,.5);color:#e6e6e6;font-family:"Jost",sans-serif;font-size:0.75rem;font-style:normal;font-weight:700;line-height:1.4;text-transform:uppercase;writing-mode:vertical-rl;pointer-events:none;user-select:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;-webkit-touch-callout:none}.demoIcon--ozzEI{width:0.75rem;height:0.75rem;aspect-ratio:1/1;background:url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center/contain}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"demo": `demo--Ig8fs`,
	"demoIcon": `demoIcon--ozzEI`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 89979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* reexport */ PageLabel)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: ./src/framework/constants/index.ts
var constants = __webpack_require__(49865);
;// ./src/framework/components/PageLabelDemo/PageLabelDemo.tsx






function _PageLabelDemo({ children, style }) {
    const { profileCommon: { profile: { apiKey }, }, } = (0,bootstrap.GET_STORE)();
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('no_demo_label'))
        return null;
    const [show, setShow] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useMemo)(() => {
        setShow(apiKey === constants/* demoCID */.Qc);
    }, [apiKey]);
    if (show)
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, { style })) });
    return null;
}
const PageLabelDemo = (0,index_js_.observer)(_PageLabelDemo);

;// ./src/framework/components/PageLabelDemo/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
;// ./src/framework/components/PageLabelOther/PageLabelOther.tsx



function _PageLabelOther({ children, time = 1000, localstorage }) {
    const [show, setShow] = (0,hooks_module_js_.useState)(true);
    (0,hooks_module_js_.useMemo)(() => {
        if (localstorage) {
            const isNull = localStorageHelper/* default */.A.get(localstorage);
            if (isNull !== null)
                return setShow(false);
            localStorageHelper/* default */.A.set(localstorage, 'true');
            setTimeout(() => {
                setShow(false);
            }, time);
            return;
        }
        setTimeout(() => {
            setShow(false);
        }, time);
    }, []);
    if (show)
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const PageLabelOther = _PageLabelOther;

;// ./src/framework/components/PageLabelOther/index.tsx


;// ./src/framework/components/PageLabel/PageLabel.tsx



function _PageLabel({ children }) {
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const PageLabel = Object.assign(_PageLabel, {
    Demo: PageLabelDemo,
    Other: PageLabelOther,
});

;// ./src/framework/components/PageLabel/index.tsx



/***/ }),

/***/ 77682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LabelDemo: () => (/* reexport */ LabelDemo)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/framework/components/PageLabel/index.tsx + 5 modules
var PageLabel = __webpack_require__(89979);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/module/moduleLayout/component/LabelDemo/styles.module.scss
var styles_module = __webpack_require__(72615);
;// ./src/module/moduleLayout/component/LabelDemo/styles.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles_module/* default */.A, options);




       /* harmony default export */ const LabelDemo_styles_module = (styles_module/* default */.A && styles_module/* default */.A.locals ? styles_module/* default */.A.locals : undefined);

;// ./src/module/moduleLayout/component/LabelDemo/LabelDemo.tsx



function _LabelDemo({ customChildren, style, setting }) {
    if (customChildren) {
        return (0,jsxRuntime_module/* jsx */.Y)(PageLabel/* PageLabel */.E.Demo, { style: style, children: customChildren() });
    }
    return ((0,jsxRuntime_module/* jsx */.Y)(PageLabel/* PageLabel */.E.Demo, { style: style, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: LabelDemo_styles_module.demo, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: LabelDemo_styles_module.demoIcon }), (0,jsxRuntime_module/* jsx */.Y)("div", { children: setting?.label ?? 'Demo Mode' })] }) }));
}
const LabelDemo = _LabelDemo;

;// ./src/module/moduleLayout/component/LabelDemo/index.tsx



/***/ }),

/***/ 85759:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88af7432e3ba199e6b04.png";

/***/ })

}]);