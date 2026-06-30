"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[5034],{

/***/ 92064:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.balance--Kjiqa{z-index:1000;position:fixed;top:0.5rem;left:0.5rem;color:var(--color, #fff);font-family:"Jost",sans-serif;font-size:1rem;font-style:normal;font-weight:700;line-height:1.4;display:flex;flex-direction:row;align-items:center;justify-content:center}.balance--Kjiqa>i{margin-right:0.375rem}@media screen and (min-width: 0px)and (orientation: landscape){.balance--Kjiqa>i{display:none}}.balanceTitle--JnSFJ{display:none}@media screen and (min-width: 0px)and (orientation: landscape){.balanceTitle--JnSFJ{display:inline-flex;align-items:center;color:var(--title-color, #e6e6e6);font-family:"Jost",sans-serif;font-size:0.75rem;font-style:normal;font-weight:400;line-height:1.4;margin-right:0.375rem}}.balanceSum--_ab3Z{position:relative;margin:0 0.1875rem}.balanceAnimate--wIMrh{animation-name:pulse-grow--p1xtt;animation-duration:.3s;animation-timing-function:linear;animation-iteration-count:1;animation-direction:alternate}@keyframes pulse-grow--p1xtt{0%{scale:1}50%{scale:1.1}100%{scale:1}}.balanceDifference--an2T4{position:absolute;left:0;font-size:.9em;animation-name:difference_a--e57sB;animation-duration:.6s;animation-timing-function:linear;animation-iteration-count:1;animation-direction:alternate;animation-fill-mode:forwards}@keyframes difference_a--e57sB{0%{opacity:1;transform:translate(0, 0)}100%{opacity:0;transform:translate(0, -1.25rem)}}.balanceDark--UtDXu{color:var(--color, rgb(0, 0, 0))}.balanceDark--UtDXu .balanceTitle--JnSFJ{color:var(--title-color, #262626)}.balanceGrey--heH32{color:var(--color, #51565e)}.balanceGrey--heH32 .balanceTitle--JnSFJ{color:var(--title-color, #51565e)}.balanceWhite--UpJVe{color:var(--color, #fff)}.balanceWhite--UpJVe .balanceTitle--JnSFJ{color:var(--title-color, #fff)}.balanceScalingFont--R9_GM{font-size:0.875rem}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"balance": `balance--Kjiqa`,
	"balanceTitle": `balanceTitle--JnSFJ`,
	"balanceSum": `balanceSum--_ab3Z`,
	"balanceAnimate": `balanceAnimate--wIMrh`,
	"pulse-grow": `pulse-grow--p1xtt`,
	"balanceDifference": `balanceDifference--an2T4`,
	"difference_a": `difference_a--e57sB`,
	"balanceDark": `balanceDark--UtDXu`,
	"balanceGrey": `balanceGrey--heH32`,
	"balanceWhite": `balanceWhite--UpJVe`,
	"balanceScalingFont": `balanceScalingFont--R9_GM`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 35034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GameBalance: () => (/* reexport */ GameBalance)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) classnames@^2.3.2 (strict) (fallback: ./node_modules/classnames/index.js)
var index_js_ = __webpack_require__(83136);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: ./src/framework/components/Header/index.tsx + 26 modules
var Header = __webpack_require__(1204);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/module/moduleLayout/component/GameBalance/styles.module.scss
var styles_module = __webpack_require__(92064);
;// ./src/module/moduleLayout/component/GameBalance/styles.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles_module/* default */.A, options);




       /* harmony default export */ const GameBalance_styles_module = (styles_module/* default */.A && styles_module/* default */.A.locals ? styles_module/* default */.A.locals : undefined);

;// ./src/module/moduleLayout/component/GameBalance/GameBalance.tsx





function _GameBalance({ customChildren, style, mode }) {
    if (customChildren) {
        return (0,jsxRuntime_module/* jsx */.Y)(Header/* Header */.Y.Balance, { style: style, children: customChildren });
    }
    const { profileCommon: { settings: { options }, }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(Header/* Header */.Y.Balance, { style: style, children: ({ title, balance, currencySign, balanceShort, balanceHide, balanceNeedScaling, difference, differenceList, }) => {
            return ((0,jsxRuntime_module/* jsxs */.FD)("div", { "data-track": "balance", className: index_js_default()(GameBalance_styles_module.balance, {
                    [GameBalance_styles_module.balanceDark]: mode === 'dark',
                    [GameBalance_styles_module.balanceGrey]: mode === 'grey',
                    [GameBalance_styles_module.balanceWhite]: mode === 'dark-theme',
                    [GameBalance_styles_module.balanceScalingFont]: balanceNeedScaling,
                }), children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: GameBalance_styles_module.balanceTitle, children: [title, ":"] }), (0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-ios-creditcard" }), currencySign, (0,jsxRuntime_module/* jsxs */.FD)("span", { className: index_js_default()(GameBalance_styles_module.balanceSum, {
                            [GameBalance_styles_module.balanceAnimate]: difference,
                        }), children: [options?.showFullBalance || options?.customBr ? balance : balanceShort, differenceList.map(({ value, key }) => ((0,jsxRuntime_module/* jsx */.Y)("span", { className: GameBalance_styles_module.balanceDifference, children: value }, key)))] })] }));
        } }));
}
const GameBalance = _GameBalance;

;// ./src/module/moduleLayout/component/GameBalance/index.tsx



/***/ })

}]);