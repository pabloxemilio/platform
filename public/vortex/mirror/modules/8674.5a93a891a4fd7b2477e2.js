"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[8674],{

/***/ 79821:
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
___CSS_LOADER_EXPORT___.push([module.id, `.name--TP6Ls{z-index:1000;position:fixed;bottom:0;left:0.5rem;color:var(--color, rgba(255, 255, 255, 0.5));font-family:"Jost",sans-serif;font-size:0.625rem;font-style:normal;font-weight:400;line-height:1.4}.nameDark--aGFdm{color:var(--color, rgba(0, 0, 0, 0.5))}.nameGrey--KMGP7{color:var(--color, rgba(81, 86, 94, 0.5))}.nameGreyDark--QjAxE{color:var(--color, #51565e)}.nameWhite--TzvKV{color:var(--color, #fff)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"name": `name--TP6Ls`,
	"nameDark": `nameDark--aGFdm`,
	"nameGrey": `nameGrey--KMGP7`,
	"nameGreyDark": `nameGreyDark--QjAxE`,
	"nameWhite": `nameWhite--TzvKV`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 18674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GameName: () => (/* reexport */ GameName)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) classnames@^2.3.2 (strict) (fallback: ./node_modules/classnames/index.js)
var index_js_ = __webpack_require__(83136);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/module/moduleLayout/component/GameName/styles.module.scss
var styles_module = __webpack_require__(79821);
;// ./src/module/moduleLayout/component/GameName/styles.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles_module/* default */.A, options);




       /* harmony default export */ const GameName_styles_module = (styles_module/* default */.A && styles_module/* default */.A.locals ? styles_module/* default */.A.locals : undefined);

;// ./src/module/moduleLayout/component/GameName/GameName.tsx



function _GameName({ customChildren, style, setting, mode }) {
    if (customChildren) {
        return (0,jsxRuntime_module/* jsx */.Y)("div", { style: style, children: customChildren() });
    }
    return ((0,jsxRuntime_module/* jsxs */.FD)("div", { style: style, className: index_js_default()(GameName_styles_module.name, {
            [GameName_styles_module.nameDark]: mode === 'dark',
            [GameName_styles_module.nameGrey]: mode === 'grey',
            [GameName_styles_module.nameGreyDark]: mode === 'dark-theme',
        }), children: ["Turbo Games \u2022 ", setting && setting.text && setting.text] }));
}
const GameName = _GameName;

;// ./src/module/moduleLayout/component/GameName/index.tsx



/***/ })

}]);