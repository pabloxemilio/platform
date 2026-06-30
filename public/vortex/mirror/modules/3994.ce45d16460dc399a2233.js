"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[3994],{

/***/ 42367:
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
___CSS_LOADER_EXPORT___.push([module.id, `.time--tHxDp{z-index:1000;position:fixed;bottom:0;right:0.5rem;color:var(--color, rgba(255, 255, 255, 0.5));font-family:"Jost",sans-serif;font-size:0.625rem;font-style:normal;font-weight:400;line-height:1.4;font-variant-numeric:tabular-nums;font-feature-settings:"tnum";-webkit-font-feature-settings:"tnum";-moz-font-feature-settings:"tnum";white-space:nowrap}.timeDark--FOtaz{color:var(--color, rgba(0, 0, 0, 0.5))}.timeGrey--mc9SN{color:var(--color, rgba(81, 86, 94, 0.5))}.timeGreyDark--Y5CAL{color:var(--color, #51565e)}.timeWhite--bwR92{color:var(--color, #fff)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"time": `time--tHxDp`,
	"timeDark": `timeDark--FOtaz`,
	"timeGrey": `timeGrey--mc9SN`,
	"timeGreyDark": `timeGreyDark--Y5CAL`,
	"timeWhite": `timeWhite--bwR92`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 17491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* reexport */ Time)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
;// ./src/framework/components/Time/Time.tsx


function _Time({ children, step = 1000 }) {
    const [date, setDate] = (0,hooks_module_js_.useState)({
        years: '',
        months: '',
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
    });
    (0,hooks_module_js_.useEffect)(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            const date = {};
            date.days = currentDate.getDate().toString().padStart(2, '0');
            date.years = currentDate.getFullYear().toString();
            const monthIndex = currentDate.getMonth();
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            date.months = months[monthIndex];
            date.hours = currentDate.getHours().toString().padStart(2, '0');
            date.minutes = currentDate.getMinutes().toString().padStart(2, '0');
            date.seconds = currentDate.getSeconds().toString().padStart(2, '0');
            setDate(date);
        }, step);
        return () => clearInterval(interval);
    }, []);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(date) });
}
const Time = _Time;

;// ./src/framework/components/Time/index.tsx



/***/ }),

/***/ 33994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GameTime: () => (/* reexport */ GameTime)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) classnames@^2.3.2 (strict) (fallback: ./node_modules/classnames/index.js)
var index_js_ = __webpack_require__(83136);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/framework/components/Time/index.tsx + 1 modules
var Time = __webpack_require__(17491);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/module/moduleLayout/component/GameTime/styles.module.scss
var styles_module = __webpack_require__(42367);
;// ./src/module/moduleLayout/component/GameTime/styles.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles_module/* default */.A, options);




       /* harmony default export */ const GameTime_styles_module = (styles_module/* default */.A && styles_module/* default */.A.locals ? styles_module/* default */.A.locals : undefined);

;// ./src/module/moduleLayout/component/GameTime/GameTime.tsx




function _GameTime({ customChildren, style, mode }) {
    if (customChildren) {
        return ((0,jsxRuntime_module/* jsx */.Y)("div", { style: style, children: (0,jsxRuntime_module/* jsx */.Y)(Time/* Time */.g, { children: customChildren }) }));
    }
    return ((0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(GameTime_styles_module.time, {
            [GameTime_styles_module.timeDark]: mode === 'dark',
            [GameTime_styles_module.timeGrey]: mode === 'grey',
            [GameTime_styles_module.timeGreyDark]: mode === 'dark-theme',
        }), style: style, children: (0,jsxRuntime_module/* jsx */.Y)(Time/* Time */.g, { children: ({ years, months, days, hours, minutes, seconds }) => ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: `${days} ${months}, ${years} | ${hours}:${minutes}:${seconds}` })) }) }));
}
const GameTime = _GameTime;

;// ./src/module/moduleLayout/component/GameTime/index.tsx



/***/ })

}]);