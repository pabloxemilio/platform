"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2302,7402,7518,9336],{

/***/ 17402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Children: () => (/* binding */ O),
/* harmony export */   Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   PureComponent: () => (/* binding */ w),
/* harmony export */   StrictMode: () => (/* binding */ mn),
/* harmony export */   Suspense: () => (/* binding */ D),
/* harmony export */   SuspenseList: () => (/* binding */ V),
/* harmony export */   __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => (/* binding */ ln),
/* harmony export */   cloneElement: () => (/* binding */ sn),
/* harmony export */   createContext: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createContext),
/* harmony export */   createElement: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createElement),
/* harmony export */   createFactory: () => (/* binding */ fn),
/* harmony export */   createPortal: () => (/* binding */ z),
/* harmony export */   createRef: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createRef),
/* harmony export */   "default": () => (/* binding */ Cn),
/* harmony export */   findDOMNode: () => (/* binding */ vn),
/* harmony export */   flushSync: () => (/* binding */ pn),
/* harmony export */   forwardRef: () => (/* binding */ k),
/* harmony export */   hydrate: () => (/* binding */ J),
/* harmony export */   isValidElement: () => (/* binding */ an),
/* harmony export */   lazy: () => (/* binding */ M),
/* harmony export */   memo: () => (/* binding */ x),
/* harmony export */   render: () => (/* binding */ G),
/* harmony export */   startTransition: () => (/* binding */ yn),
/* harmony export */   unmountComponentAtNode: () => (/* binding */ hn),
/* harmony export */   unstable_batchedUpdates: () => (/* binding */ dn),
/* harmony export */   useDeferredValue: () => (/* binding */ _n),
/* harmony export */   useInsertionEffect: () => (/* binding */ Sn),
/* harmony export */   useSyncExternalStore: () => (/* binding */ gn),
/* harmony export */   useTransition: () => (/* binding */ bn),
/* harmony export */   version: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31917);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57888);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in preact_hooks__WEBPACK_IMPORTED_MODULE_1__) if(["default","Component","Fragment","createContext","createElement","createRef","Children","PureComponent","StrictMode","Suspense","SuspenseList","__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","cloneElement","createFactory","createPortal","findDOMNode","flushSync","forwardRef","hydrate","isValidElement","lazy","memo","render","startTransition","unmountComponentAtNode","unstable_batchedUpdates","useDeferredValue","useInsertionEffect","useSyncExternalStore","useTransition","version"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => preact_hooks__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
function g(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n,t){return n===t&&(0!==n||1/n==1/t)||n!=n&&t!=t}function w(n){this.props=n}function x(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return!r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:C(this.props,n)}function u(e){return this.shouldComponentUpdate=r,(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(n,e)}return u.displayName="Memo("+(n.displayName||n.name)+")",u.prototype.isReactComponent=!0,u.__f=!0,u}(w.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).isPureReactComponent=!0,w.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var R=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n)};var N="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function k(n){function t(t){var e=g({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=N,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var A=function(n,t){return null==n?null:(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).map(t))},O={map:A,forEach:A,count:function(n){return n?(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).length:0},only:function(n){var t=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray},T=preact__WEBPACK_IMPORTED_MODULE_0__.options.__e;preact__WEBPACK_IMPORTED_MODULE_0__.options.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);T(n,t,e,r)};var I=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function L(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return L(n,t,e)})),n}function U(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return U(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function D(){this.__u=0,this.t=null,this.__b=null}function F(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function M(n){var e,r,u;function o(o){if(e||(e=n()).then(function(n){r=n.default||n},function(n){u=n}),u)throw u;if(!r)throw e;return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(r,o)}return o.displayName="Lazy",o.__f=!0,o}function V(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),I&&I(n)},(D.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=F(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=U(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i)},D.prototype.componentWillUnmount=function(){this.t=[]},D.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=L(this.__b,r,o.__O=o.__P)}this.__b=null}var i=e.__a&&(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,n.fallback);return i&&(i.__h=null),[(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,e.__a?null:n.children),i]};var W=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function P(n){return this.getChildContext=function(){return n.context},n.children}function j(n){var e=this,r=n.i;e.componentWillUnmount=function(){(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null,e.l),e.l=null,e.i=null},e.i&&e.i!==r&&e.componentWillUnmount(),n.__v?(e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(P,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount()}function z(n,e){var r=(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(j,{__v:n,i:e});return r.containerInfo=e,r}(V.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).__a=function(n){var t=this,e=F(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),W(t,n,r)):u()};e?e(o):o()}},V.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){W(n,e,t)})};var B="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,H=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Z=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Y=/[A-Z0-9]/g,$="undefined"!=typeof document,q=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};function G(n,t,e){return null==t.__k&&(t.textContent=""),(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function J(n,t,e){return (0,preact__WEBPACK_IMPORTED_MODULE_0__.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n})}})});var K=preact__WEBPACK_IMPORTED_MODULE_0__.options.event;function Q(){}function X(){return this.cancelBubble}function nn(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_0__.options.event=function(n){return K&&(n=K(n)),n.persist=Q,n.isPropagationStopped=X,n.isDefaultPrevented=nn,n.nativeEvent=n};var tn,en={enumerable:!1,configurable:!0,get:function(){return this.class}},rn=preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={};for(var o in t){var i=t[o];if(!("value"===o&&"defaultValue"in t&&null==i||$&&"children"===o&&"noscript"===e||"class"===o||"className"===o)){var l=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":"ondoubleclick"===l?o="ondblclick":"onchange"!==l||"input"!==e&&"textarea"!==e||q(t.type)?"onfocus"===l?o="onfocusin":"onblur"===l?o="onfocusout":Z.test(o)?o=l:-1===e.indexOf("-")&&H.test(o)?o=o.replace(Y,"-$&").toLowerCase():null===i&&(i=void 0):l=o="oninput","oninput"===l&&u[o=l]&&(o="oninputCapture"),u[o]=i}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value)})),"select"==e&&null!=u.defaultValue&&(u.value=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",en)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u}(n),n.$$typeof=B,rn&&rn(n)};var un=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r;preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){un&&un(n),tn=n.__c};var on=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed;preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(n){on&&on(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value),tn=null};var ln={ReactCurrentDispatcher:{current:{readContext:function(n){return tn.__n[n.__c].props.value}}}},cn="17.0.2";function fn(n){return preact__WEBPACK_IMPORTED_MODULE_0__.createElement.bind(null,n)}function an(n){return!!n&&n.$$typeof===B}function sn(n){return an(n)?preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement.apply(null,arguments):n}function hn(n){return!!n.__k&&((0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null,n),!0)}function vn(n){return n&&(n.base||1===n.nodeType&&n)||null}var dn=function(n,t){return n(t)},pn=function(n,t){return n(t)},mn=preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;function yn(n){n()}function _n(n){return n}function bn(){return[!1,yn]}var Sn=preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect;function gn(n,t){var e=t(),r=(0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({h:{__:e,v:t}}),u=r[0].h,o=r[1];return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function(){u.__=e,u.v=t,E(u.__,t())||o({h:u})},[n,e,t]),(0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){return E(u.__,u.v())||o({h:u}),n(function(){E(u.__,u.v())||o({h:u})})},[n]),e}var Cn={useState:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,useId:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,useInsertionEffect:Sn,useTransition:bn,useDeferredValue:_n,useSyncExternalStore:gn,startTransition:yn,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,version:"17.0.2",Children:O,render:G,hydrate:J,unmountComponentAtNode:hn,createPortal:z,createElement:preact__WEBPACK_IMPORTED_MODULE_0__.createElement,createContext:preact__WEBPACK_IMPORTED_MODULE_0__.createContext,createFactory:fn,cloneElement:sn,createRef:preact__WEBPACK_IMPORTED_MODULE_0__.createRef,Fragment:preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,isValidElement:an,findDOMNode:vn,Component:preact__WEBPACK_IMPORTED_MODULE_0__.Component,PureComponent:w,memo:x,forwardRef:k,flushSync:pn,unstable_batchedUpdates:dn,StrictMode:mn,Suspense:D,SuspenseList:V,lazy:M,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ln};
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ 10201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FD: () => (/* binding */ o),
/* harmony export */   FK: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   Y: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export jsxDEV */
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31917);
var _=0;function o(o,e,n,t,f,l){var s,u,a={};for(u in e)"ref"==u?s=e[u]:a[u]=e[u];var i={type:o,props:a,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--_,__source:f,__self:l};if("function"==typeof o&&(s=o.defaultProps))for(u in s)void 0===a[u]&&(a[u]=s[u]);return preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode&&preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode(i),i}
//# sourceMappingURL=jsxRuntime.module.js.map


/***/ }),

/***/ 21889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DiceAutoControlAmount: () => (/* reexport */ DiceAutoControlAmount),
  DiceAutoControlLose: () => (/* reexport */ DiceAutoControlLose),
  DiceAutoControlModal: () => (/* reexport */ DiceAutoControlModal),
  DiceAutoControlResult: () => (/* reexport */ DiceAutoControlResult),
  DiceAutoControlToggle: () => (/* reexport */ DiceAutoControlToggle),
  DiceAutoControlWin: () => (/* reexport */ DiceAutoControlWin),
  DiceButton: () => (/* reexport */ DiceButton),
  DiceControlAmount: () => (/* reexport */ DiceControlAmount),
  DiceControlRange: () => (/* reexport */ DiceControlRange),
  DiceControlResult: () => (/* reexport */ DiceControlResult),
  DiceGame: () => (/* reexport */ DiceGame),
  DiceHistory: () => (/* reexport */ DiceHistory),
  DiceRender: () => (/* reexport */ DiceRender),
  DiceWin: () => (/* reexport */ DiceWin)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
;// ./src/framework/components.dice/DiceControlAmount/DiceControlAmount.tsx




function _DiceControlAmount({ children }) {
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { amount, setAmount, lockedUi, animation, autoBetAmountError }, uiCommon: { amountError, isOnline }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            titleError: amountError || autoBetAmountError,
            titleMaxWin: `${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`,
            disabled: lockedUi || animation || !isOnline || freebetEnabled,
            defaultValue: Number(amount),
            min: minBet,
            max: maxBet,
            onChange: setAmount,
            prefix: currencySign,
            connectBalance: balance,
            rounding: rounding > 0 ? rounding - 1 : rounding,
            gtmAction: 'input_value_changed',
            pushGtmDataOnValueChange: true,
        }) }));
}
const DiceControlAmount = (0,index_js_.observer)(_DiceControlAmount);

;// ./src/framework/components.dice/DiceControlAmount/index.tsx


;// ./src/framework/components.dice/DiceControlRangeResult/DiceControlRangeResult.tsx




function _DiceControlRangeResult({ children }) {
    const { game: { diceValue, lockedUi }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            disabled: lockedUi,
            over: Number(diceValue.toFixed(2)),
            overTitle: t('DICE.OVER'),
            under: Number(diceValue.toFixed(2)),
            underTitle: t('DICE.UNDER'),
        }) }));
}
const DiceControlRangeResult = (0,index_js_.observer)(_DiceControlRangeResult);

;// ./src/framework/components.dice/DiceControlRangeResult/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
;// ./src/framework/components.dice/DiceControlRange/DiceControlRange.tsx





function _DiceControlRange({ children }) {
    const { game: { gameConfig, setDiceValue, diceValue, lockedUi, animation }, uiCommon: { isOnline }, } = (0,bootstrap.GET_STORE)();
    const [active, setActive] = (0,hooks_module_js_.useState)(false);
    const timeout = (0,hooks_module_js_.useRef)(null);
    const handleChange = (value) => {
        setDiceValue(value);
        setActive(true);
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        timeout.current = setTimeout(() => {
            setActive(false);
        }, 500);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            min: gameConfig.range.min,
            max: gameConfig.range.max,
            minStatic: gameConfig.range.minStatic,
            maxStatic: gameConfig.range.maxStatic,
            step: gameConfig.range.step,
            stepButton: gameConfig.range.stepButton,
            onChange: handleChange,
            defaultValue: diceValue,
            disabled: lockedUi || animation || !isOnline,
            active,
        }) }));
}
const DiceControlRange = Object.assign((0,index_js_.observer)(_DiceControlRange), {
    Result: DiceControlRangeResult,
});

;// ./src/framework/components.dice/DiceControlRange/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
;// ./src/framework/components.dice/DiceButtonDefault/DiceButtonDefault.tsx





const Context = (0,preact_module_js_.createContext)({});
function _DiceButtonDefault({ children }) {
    const { game: { placeBetStatus, lockedUi, animation, currentCoefficient }, profileCommon: { profile: { currencySign }, }, uiCommon: { amountError, isOnline }, freebetsCommon: { freebetEnabled, freebetActive, listGetByIndex }, } = (0,bootstrap.GET_STORE)();
    const minCoefficient = freebetActive?.offer?.configuration[0]?.minCoefficient;
    const { t } = (0,es_index_js_.useTranslation)();
    const props = {
        title: t('DICE.ROLL'),
        request: placeBetStatus === 'loading',
        valueFreebet: freebetEnabled && String(currencySign + freebetActive?.offer?.configuration[0]?.betAmount),
        disabled: !!amountError || lockedUi || !isOnline,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const DiceButtonDefault = (0,index_js_.observer)(_DiceButtonDefault);

;// ./src/framework/components.dice/DiceButtonDefault/index.tsx


;// ./src/framework/components.dice/DiceButtonDefaultOverPlay/DiceButtonDefaultOverPlay.tsx






function _DiceButtonDefaultOverPlay({ children, onClick = () => { } }) {
    const { request, disabled } = (0,hooks_module_js_.useContext)(Context);
    const { game: { makeBet }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    if (request || freebetEnabled)
        return null;
    const handleClick = (e) => {
        if (request || disabled)
            return false;
        makeBet(0);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceButtonDefaultOverPlay = (0,index_js_.observer)(_DiceButtonDefaultOverPlay);

;// ./src/framework/components.dice/DiceButtonDefaultOverPlay/index.tsx


;// ./src/framework/components.dice/DiceButtonDefaultOverPlayEvent/DiceButtonDefaultOverPlayEvent.tsx






function _DiceButtonDefaultOverPlayEvent({ children, onClick = () => { } }) {
    const { request, disabled } = (0,hooks_module_js_.useContext)(Context);
    const { game: { makeBet }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (request || disabled)
            return false;
        makeBet(0);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceButtonDefaultOverPlayEvent = (0,index_js_.observer)(_DiceButtonDefaultOverPlayEvent);

;// ./src/framework/components.dice/DiceButtonDefaultOverPlayEvent/index.tsx


;// ./src/framework/components.dice/DiceButtonDefaultOverRequest/DiceButtonDefaultOverRequest.tsx





function _DiceButtonDefaultOverRequest({ children }) {
    const { freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { request } = (0,hooks_module_js_.useContext)(Context);
    if (!request || freebetEnabled)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {})) });
}
const DiceButtonDefaultOverRequest = _DiceButtonDefaultOverRequest;

;// ./src/framework/components.dice/DiceButtonDefaultOverRequest/index.tsx


;// ./src/framework/components.dice/DiceButtonDefaultUnderPlay/DiceButtonDefaultUnderPlay.tsx






function _DiceButtonDefaultUnderPlay({ children, onClick = () => { } }) {
    const { request, disabled } = (0,hooks_module_js_.useContext)(Context);
    const { game: { makeBet }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    if (request || freebetEnabled)
        return null;
    const handleClick = (e) => {
        if (request || disabled)
            return false;
        makeBet(1);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceButtonDefaultUnderPlay = (0,index_js_.observer)(_DiceButtonDefaultUnderPlay);

;// ./src/framework/components.dice/DiceButtonDefaultUnderPlay/index.tsx


;// ./src/framework/components.dice/DiceButtonDefaultUnderPlayEvent/DiceButtonDefaultUnderPlayEvent.tsx






function _DiceButtonDefaultUnderPlayEvent({ children, onClick = () => { } }) {
    const { request, disabled } = (0,hooks_module_js_.useContext)(Context);
    const { game: { makeBet }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (request || disabled)
            return false;
        makeBet(1);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceButtonDefaultUnderPlayEvent = (0,index_js_.observer)(_DiceButtonDefaultUnderPlayEvent);

;// ./src/framework/components.dice/DiceButtonDefaultUnderPlayEvent/index.tsx


;// ./src/framework/components.dice/DiceButtonDefaultUnderRequest/DiceButtonDefaultUnderRequest.tsx





function _DiceButtonDefaultUnderRequest({ children }) {
    const { freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { request } = (0,hooks_module_js_.useContext)(Context);
    if (!request || freebetEnabled)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {})) });
}
const DiceButtonDefaultUnderRequest = _DiceButtonDefaultUnderRequest;

;// ./src/framework/components.dice/DiceButtonDefaultUnderRequest/index.tsx


;// ./src/framework/components.dice/DiceButtonAutoOverPlay/DiceButtonAutoOverPlay.tsx





function _DiceButtonAutoOverPlay({ children, onClick = () => { } }) {
    const { game: { startAutoBet, placeBetStatus, setAutoBetModal }, autobetCommon: { autoBetIndex }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const index = 0;
    const props = {
        title: t('COMMON.START_AUTOBET'),
    };
    const handleClick = (e) => {
        if (placeBetStatus === 'loading')
            return false;
        setAutoBetModal(false);
        startAutoBet(index);
        onClick(e);
    };
    if (typeof autoBetIndex === 'number')
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceButtonAutoOverPlay = (0,index_js_.observer)(_DiceButtonAutoOverPlay);

;// ./src/framework/components.dice/DiceButtonAutoOverPlay/index.tsx


;// ./src/framework/components.dice/DiceButtonAutoOverPlayEvent/DiceButtonAutoOverPlayEvent.tsx





function _DiceButtonAutoOverPlayEvent({ children, onClick = () => { } }) {
    const { game: { startAutoBet, placeBetStatus, setAutoBetModal }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const index = 0;
    const props = {
        title: t('COMMON.START_AUTOBET'),
    };
    const handleClick = (e) => {
        if (placeBetStatus === 'loading')
            return false;
        setAutoBetModal(false);
        startAutoBet(index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceButtonAutoOverPlayEvent = (0,index_js_.observer)(_DiceButtonAutoOverPlayEvent);

;// ./src/framework/components.dice/DiceButtonAutoOverPlayEvent/index.tsx


;// ./src/framework/components.dice/DiceButtonAutoOverCancel/DiceButtonAutoOverCancel.tsx





function _DiceButtonAutoOverCancel({ children, onClick = () => { } }) {
    const { game: { stopAutoBet, setAutoBetModal }, autobetCommon: { autoBetEnabled, autoBetIndex }, } = (0,bootstrap.GET_STORE)();
    const index = 1;
    const { t } = (0,es_index_js_.useTranslation)();
    const props = {
        title: t('COMMON.STOP_AUTOBET'),
    };
    const handleClick = (e) => {
        setAutoBetModal(false);
        stopAutoBet();
        onClick(e);
    };
    if (autoBetEnabled && typeof autoBetIndex === 'number' && autoBetIndex === index)
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: handleClick,
            })) }));
    return null;
}
const DiceButtonAutoOverCancel = (0,index_js_.observer)(_DiceButtonAutoOverCancel);

;// ./src/framework/components.dice/DiceButtonAutoOverCancel/index.tsx


;// ./src/framework/components.dice/DiceButtonAutoOverCancelEvent/DiceButtonAutoOverCancelEvent.tsx





function _DiceButtonAutoOverCancelEvent({ children, onClick = () => { } }) {
    const { game: { stopAutoBet, setAutoBetModal }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const props = {
        title: t('COMMON.STOP_AUTOBET'),
    };
    const handleClick = (e) => {
        setAutoBetModal(false);
        stopAutoBet();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceButtonAutoOverCancelEvent = (0,index_js_.observer)(_DiceButtonAutoOverCancelEvent);

;// ./src/framework/components.dice/DiceButtonAutoOverCancelEvent/index.tsx


;// ./src/framework/components.dice/DiceButtonAutoUnderPlay/DiceButtonAutoUnderPlay.tsx





function _DiceButtonAutoUnderPlay({ children, onClick = () => { } }) {
    const { game: { startAutoBet, placeBetStatus, setAutoBetModal }, autobetCommon: { autoBetIndex }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const index = 1;
    const props = {
        title: t('COMMON.START_AUTOBET'),
    };
    const handleClick = (e) => {
        if (placeBetStatus === 'loading')
            return false;
        setAutoBetModal(false);
        startAutoBet(index);
        onClick(e);
    };
    if (typeof autoBetIndex === 'number')
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceButtonAutoUnderPlay = (0,index_js_.observer)(_DiceButtonAutoUnderPlay);

;// ./src/framework/components.dice/DiceButtonAutoUnderPlay/index.tsx


;// ./src/framework/components.dice/DiceButtonAutoUnderPlayEvent/DiceButtonAutoUnderPlayEvent.tsx





function _DiceButtonAutoUnderPlayEvent({ children, onClick = () => { } }) {
    const { game: { startAutoBet, placeBetStatus, setAutoBetModal }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const index = 1;
    const props = {
        title: t('COMMON.START_AUTOBET'),
    };
    const handleClick = (e) => {
        if (placeBetStatus === 'loading')
            return false;
        setAutoBetModal(false);
        startAutoBet(index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceButtonAutoUnderPlayEvent = (0,index_js_.observer)(_DiceButtonAutoUnderPlayEvent);

;// ./src/framework/components.dice/DiceButtonAutoUnderPlayEvent/index.tsx


;// ./src/framework/components.dice/DiceButtonAutoUnderCancel/DiceButtonAutoUnderCancel.tsx





function _DiceButtonAutoUnderCancel({ children, onClick = () => { } }) {
    const { game: { stopAutoBet, setAutoBetModal }, autobetCommon: { autoBetEnabled, autoBetIndex }, } = (0,bootstrap.GET_STORE)();
    const index = 0;
    const { t } = (0,es_index_js_.useTranslation)();
    const props = {
        title: t('COMMON.STOP_AUTOBET'),
    };
    const handleClick = (e) => {
        setAutoBetModal(false);
        stopAutoBet();
        onClick(e);
    };
    if (autoBetEnabled && typeof autoBetIndex === 'number' && autoBetIndex === index)
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: handleClick,
            })) }));
    return null;
}
const DiceButtonAutoUnderCancel = (0,index_js_.observer)(_DiceButtonAutoUnderCancel);

;// ./src/framework/components.dice/DiceButtonAutoUnderCancel/index.tsx


;// ./src/framework/components.dice/DiceButtonAutoUnderCancelEvent/DiceButtonAutoUnderCancelEvent.tsx





function _DiceButtonAutoUnderCancelEvent({ children, onClick = () => { } }) {
    const { game: { stopAutoBet, setAutoBetModal }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const props = {
        title: t('COMMON.STOP_AUTOBET'),
    };
    const handleClick = (e) => {
        setAutoBetModal(false);
        stopAutoBet();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceButtonAutoUnderCancelEvent = (0,index_js_.observer)(_DiceButtonAutoUnderCancelEvent);

;// ./src/framework/components.dice/DiceButtonAutoUnderCancelEvent/index.tsx


;// ./src/framework/components.dice/DiceButtonDefaultOverFreebet/DiceButtonDefaultOverFreebet.tsx




function _DiceButtonDefaultOverFreebet({ children, onClick = () => { } }) {
    const { game: { makeBet, diceValue, getCoefficient }, freebetsCommon: { freebetEnabled, freebetActive }, } = (0,bootstrap.GET_STORE)();
    if (!freebetEnabled)
        return null;
    const inHouse = 2.5;
    const minCoefficient = freebetActive?.offer?.configuration[0]?.minCoefficient;
    const overCoefficient = getCoefficient(100 - diceValue).toFixed(2);
    const handleClick = (e) => {
        if (!freebetEnabled)
            return false;
        makeBet(0, true);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ blocked: minCoefficient > +overCoefficient })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceButtonDefaultOverFreebet = (0,index_js_.observer)(_DiceButtonDefaultOverFreebet);

;// ./src/framework/components.dice/DiceButtonDefaultOverFreebet/index.tsx


;// ./src/framework/components.dice/DiceButtonDefaultOverFreebetEvent/DiceButtonDefaultOverFreebetEvent.tsx




function _DiceButtonDefaultOverFreebetEvent({ children, onClick = () => { } }) {
    const { game: { makeBet }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    if (!freebetEnabled)
        return null;
    const handleClick = (e) => {
        if (!freebetEnabled)
            return false;
        makeBet(0, true);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceButtonDefaultOverFreebetEvent = (0,index_js_.observer)(_DiceButtonDefaultOverFreebetEvent);

;// ./src/framework/components.dice/DiceButtonDefaultOverFreebetEvent/index.tsx


;// ./src/framework/components.dice/DiceButtonDefaultUnderFreebet/DiceButtonDefaultUnderFreebet.tsx




function _DiceButtonDefaultUnderFreebet({ children, onClick = () => { } }) {
    const { game: { makeBet, diceValue, getCoefficient }, freebetsCommon: { freebetEnabled, freebetActive }, } = (0,bootstrap.GET_STORE)();
    if (!freebetEnabled)
        return null;
    const handleClick = (e) => {
        if (!freebetEnabled)
            return false;
        makeBet(1, true);
        onClick(e);
    };
    const inHouse = 2.5;
    const minCoefficient = freebetActive?.offer?.configuration[0]?.minCoefficient;
    const underCoefficient = getCoefficient(diceValue).toFixed(2);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ blocked: minCoefficient > +underCoefficient })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceButtonDefaultUnderFreebet = (0,index_js_.observer)(_DiceButtonDefaultUnderFreebet);

;// ./src/framework/components.dice/DiceButtonDefaultUnderFreebet/index.tsx


;// ./src/framework/components.dice/DiceButtonDefaultUnderFreebetEvent/DiceButtonDefaultUnderFreebetEvent.tsx




function _DiceButtonDefaultUnderFreebetEvent({ children, onClick = () => { } }) {
    const { game: { makeBet }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    if (!freebetEnabled)
        return null;
    const handleClick = (e) => {
        if (!freebetEnabled)
            return false;
        makeBet(1, true);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceButtonDefaultUnderFreebetEvent = (0,index_js_.observer)(_DiceButtonDefaultUnderFreebetEvent);

;// ./src/framework/components.dice/DiceButtonDefaultUnderFreebetEvent/index.tsx


;// ./src/framework/components.dice/DiceButton/DiceButton.tsx






















function _DiceButton({ children }) {
    const { game: { placeBetStatus, lockedUi, animation, currentCoefficient, diceValue }, profileCommon: { profile: { currencySign }, }, autobetCommon: { autoBetEnabled }, uiCommon: { amountError, isOnline }, freebetsCommon: { freebetEnabled, freebetActive, listGetByIndex }, } = (0,bootstrap.GET_STORE)();
    const minCoefficient = freebetActive?.offer?.configuration[0]?.minCoefficient;
    const props = {
        request: placeBetStatus === 'loading',
        mode: autoBetEnabled ? 'auto' : 'default',
        isFreebet: freebetEnabled,
        valueFreebet: freebetEnabled && String(currencySign + freebetActive?.offer?.configuration[0]?.betAmount),
        disabled: !!amountError || lockedUi || !isOnline,
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) });
}
const DiceButton = Object.assign((0,index_js_.observer)(_DiceButton), {
    Default: Object.assign(DiceButtonDefault, {
        Over: Object.assign({
            Play: Object.assign(DiceButtonDefaultOverPlay, {
                Event: DiceButtonDefaultOverPlayEvent,
            }),
            Request: DiceButtonDefaultOverRequest,
            Freebet: Object.assign(DiceButtonDefaultOverFreebet, {
                Event: DiceButtonDefaultOverFreebetEvent,
            }),
        }),
        Under: Object.assign({
            Play: Object.assign(DiceButtonDefaultUnderPlay, {
                Event: DiceButtonDefaultUnderPlayEvent,
            }),
            Request: DiceButtonDefaultUnderRequest,
            Freebet: Object.assign(DiceButtonDefaultUnderFreebet, {
                Event: DiceButtonDefaultUnderFreebetEvent,
            }),
        }),
    }),
    Auto: Object.assign({
        Over: Object.assign({
            Play: Object.assign(DiceButtonAutoOverPlay, {
                Event: DiceButtonAutoOverPlayEvent,
            }),
            Cancel: Object.assign(DiceButtonAutoOverCancel, {
                Event: DiceButtonAutoOverCancelEvent,
            }),
        }),
        Under: Object.assign({
            Play: Object.assign(DiceButtonAutoUnderPlay, {
                Event: DiceButtonAutoUnderPlayEvent,
            }),
            Cancel: Object.assign(DiceButtonAutoUnderCancel, {
                Event: DiceButtonAutoUnderCancelEvent,
            }),
        }),
    }),
});

;// ./src/framework/components.dice/DiceButton/index.tsx


;// ./src/framework/components.dice/DiceAutoControlAmount/DiceAutoControlAmount.tsx




function _DiceAutoControlAmount({ children }) {
    const { game: { gameConfig }, autobetCommon: { autoBetEnabled, setAutoBetsAmount, autoBetsAmount }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleChange = (value) => {
        setAutoBetsAmount(String(value));
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.NUMBER_OF_BETS'),
            disabled: autoBetEnabled,
            defaultValue: Number(autoBetsAmount),
            min: gameConfig.autoBet.limit ? gameConfig.autoBet.min : 0,
            max: gameConfig.autoBet.max,
            onChange: handleChange,
        }) }));
}
const DiceAutoControlAmount = (0,index_js_.observer)(_DiceAutoControlAmount);

;// ./src/framework/components.dice/DiceAutoControlAmount/index.tsx


;// ./src/framework/components.dice/DiceAutoControlWinButtonReset/DiceAutoControlWinButtonReset.tsx





function _DiceAutoControlWinButtonReset({ children, onClick = () => { } }) {
    const { autobetCommon: { onWinIncrease, setOnWinIncrease }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = (e) => {
        setOnWinIncrease(false);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            title: t('COMMON.RESET'),
            active: !onWinIncrease,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceAutoControlWinButtonReset = (0,index_js_.observer)(_DiceAutoControlWinButtonReset);

;// ./src/framework/components.dice/DiceAutoControlWinButtonReset/index.tsx


;// ./src/framework/components.dice/DiceAutoControlWinButtonIncrease/DiceAutoControlWinButtonIncrease.tsx





function _DiceAutoControlWinButtonIncrease({ children, onClick = () => { } }) {
    const { autobetCommon: { onWinIncrease, setOnWinIncrease }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = (e) => {
        setOnWinIncrease(true);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            title: t('COMMON.INCREASE_BY'),
            active: onWinIncrease,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceAutoControlWinButtonIncrease = (0,index_js_.observer)(_DiceAutoControlWinButtonIncrease);

;// ./src/framework/components.dice/DiceAutoControlWinButtonIncrease/index.tsx


;// ./src/framework/components.dice/DiceAutoControlWinIncrease/DiceAutoControlWinIncrease.tsx




function _DiceAutoControlWinIncrease({ children, onClick = () => { } }) {
    const { game: { gameConfig }, autobetCommon: { onWinIncrease, onWinIncreaseAmount, onWinIncreaseError, setOnWinIncreaseAmount }, } = (0,bootstrap.GET_STORE)();
    const handleChange = (value) => {
        setOnWinIncreaseAmount(value);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            error: onWinIncreaseError,
            active: !onWinIncrease,
            defaultValue: onWinIncreaseAmount,
            min: gameConfig.autoBetWin.increase.min,
            max: gameConfig.autoBetWin.increase.max,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onChange: handleChange,
        })) }));
}
const DiceAutoControlWinIncrease = (0,index_js_.observer)(_DiceAutoControlWinIncrease);

;// ./src/framework/components.dice/DiceAutoControlWinIncrease/index.tsx


;// ./src/framework/components.dice/DiceAutoControlWin/DiceAutoControlWin.tsx







function _DiceAutoControlWin({ children }) {
    const { autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.ON_WIN'),
            disabled: autoBetEnabled,
        }) }));
}
const DiceAutoControlWin = Object.assign((0,index_js_.observer)(_DiceAutoControlWin), {
    Button: Object.assign({
        Reset: DiceAutoControlWinButtonReset,
        Increase: DiceAutoControlWinButtonIncrease,
    }),
    Increase: DiceAutoControlWinIncrease,
});

;// ./src/framework/components.dice/DiceAutoControlWin/index.tsx


;// ./src/framework/components.dice/DiceAutoControlLoseButtonReset/DiceAutoControlLoseButtonReset.tsx





function _DiceAutoControlLoseButtonReset({ children, onClick = () => { } }) {
    const { autobetCommon: { onLoseIncrease, setOnLoseIncrease }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = (e) => {
        setOnLoseIncrease(false);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            title: t('COMMON.RESET'),
            active: !onLoseIncrease,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceAutoControlLoseButtonReset = (0,index_js_.observer)(_DiceAutoControlLoseButtonReset);

;// ./src/framework/components.dice/DiceAutoControlLoseButtonReset/index.tsx


;// ./src/framework/components.dice/DiceAutoControlLoseButtonIncrease/DiceAutoControlLoseButtonIncrease.tsx





function _DiceAutoControlLoseButtonIncrease({ children, onClick = () => { } }) {
    const { autobetCommon: { onLoseIncrease, setOnLoseIncrease }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = (e) => {
        setOnLoseIncrease(true);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            title: t('COMMON.INCREASE_BY'),
            active: onLoseIncrease,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceAutoControlLoseButtonIncrease = (0,index_js_.observer)(_DiceAutoControlLoseButtonIncrease);

;// ./src/framework/components.dice/DiceAutoControlLoseButtonIncrease/index.tsx


;// ./src/framework/components.dice/DiceAutoControlLoseIncrease/DiceAutoControlLoseIncrease.tsx




function _DiceAutoControlLoseIncrease({ children, onClick = () => { } }) {
    const { game: { gameConfig }, autobetCommon: { onLoseIncrease, onLoseIncreaseAmount, onLoseIncreaseError, setOnLoseIncreaseAmount }, } = (0,bootstrap.GET_STORE)();
    const handleChange = (value) => {
        setOnLoseIncreaseAmount(value);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            error: onLoseIncreaseError,
            active: !onLoseIncrease,
            defaultValue: onLoseIncreaseAmount,
            min: gameConfig.autoBetLose.increase.min,
            max: gameConfig.autoBetLose.increase.max,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onChange: handleChange,
        })) }));
}
const DiceAutoControlLoseIncrease = (0,index_js_.observer)(_DiceAutoControlLoseIncrease);

;// ./src/framework/components.dice/DiceAutoControlLoseIncrease/index.tsx


;// ./src/framework/components.dice/DiceAutoControlLose/DiceAutoControlLose.tsx







function _DiceAutoControlLose({ children }) {
    const { autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.ON_LOSS'),
            disabled: autoBetEnabled,
        }) }));
}
const DiceAutoControlLose = Object.assign((0,index_js_.observer)(_DiceAutoControlLose), {
    Button: Object.assign({
        Reset: DiceAutoControlLoseButtonReset,
        Increase: DiceAutoControlLoseButtonIncrease,
    }),
    Increase: DiceAutoControlLoseIncrease,
});

;// ./src/framework/components.dice/DiceAutoControlLose/index.tsx


;// ./src/framework/components.dice/DiceAutoControlToggle/DiceAutoControlToggle.tsx




function _DiceAutoControlToggle({ children }) {
    const { autobetCommon: { autoBetEnabled, stopOnAnyWin, setStopOnAnyWin }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.STOP_ON_WIN'),
            disabled: autoBetEnabled,
            defaultValue: stopOnAnyWin,
            onChange: setStopOnAnyWin,
        }) }));
}
const DiceAutoControlToggle = (0,index_js_.observer)(_DiceAutoControlToggle);

;// ./src/framework/components.dice/DiceAutoControlToggle/index.tsx


;// ./src/framework/components.dice/DiceAutoControlModalButton/DiceAutoControlModalButton.tsx




function _DiceAutoControlModalButton({ children, onClick = () => { } }) {
    const { game: { autoBetModal, setAutoBetModal, setAutoBetModalType }, uiCommon: { isOnline }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (!isOnline)
            return;
        setAutoBetModalType('');
        setAutoBetModal(!autoBetModal);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceAutoControlModalButton = (0,index_js_.observer)(_DiceAutoControlModalButton);

;// ./src/framework/components.dice/DiceAutoControlModalButton/index.tsx


;// ./src/framework/components.dice/DiceAutoControlModalButtonOver/DiceAutoControlModalButtonOver.tsx




function _DiceAutoControlModalButtonOver({ children, onClick = () => { } }) {
    const { game: { autoBetModal, setAutoBetModal, setAutoBetModalType }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        setAutoBetModalType('over');
        setAutoBetModal(!autoBetModal);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceAutoControlModalButtonOver = (0,index_js_.observer)(_DiceAutoControlModalButtonOver);

;// ./src/framework/components.dice/DiceAutoControlModalButtonOver/index.tsx


;// ./src/framework/components.dice/DiceAutoControlModalButtonUnder/DiceAutoControlModalButtonUnder.tsx




function _DiceAutoControlModalButtonUnder({ children, onClick = () => { } }) {
    const { game: { autoBetModal, setAutoBetModal, setAutoBetModalType }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        setAutoBetModalType('under');
        setAutoBetModal(!autoBetModal);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DiceAutoControlModalButtonUnder = (0,index_js_.observer)(_DiceAutoControlModalButtonUnder);

;// ./src/framework/components.dice/DiceAutoControlModalButtonUnder/index.tsx


;// ./src/framework/components.dice/DiceAutoControlModal/DiceAutoControlModal.tsx






function _DiceAutoControlModal({ children }) {
    const { game: { autoBetModalType, autoBetModal, setAutoBetModal }, } = (0,bootstrap.GET_STORE)();
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ type: autoBetModalType, show: autoBetModal, onClose: setAutoBetModal }) });
}
const DiceAutoControlModal = Object.assign((0,index_js_.observer)(_DiceAutoControlModal), {
    Button: Object.assign(DiceAutoControlModalButton, {
        Over: DiceAutoControlModalButtonOver,
        Under: DiceAutoControlModalButtonUnder,
    }),
});

;// ./src/framework/components.dice/DiceAutoControlModal/index.tsx


;// ./src/framework/components.dice/DiceAutoControlResult/DiceAutoControlResult.tsx




function _DiceAutoControlResult({ children }) {
    const { autobetCommon: { autoBetEnabled, autoBetsAmount, stopOnAnyWin, onLoseIncreaseAmount, onWinIncreaseAmount }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.AUTO'),
            enabled: autoBetEnabled,
            amount: autoBetsAmount,
            amountTitle: t('COMMON.NUMBER_OF_BETS'),
            win: onWinIncreaseAmount,
            winTitle: t('COMMON.ON_WIN'),
            lose: onLoseIncreaseAmount,
            loseTitle: t('COMMON.ON_LOSS'),
            winIsStop: stopOnAnyWin,
            winIsStopTitle: t('COMMON.STOP_ON_WIN'),
        }) }));
}
const DiceAutoControlResult = (0,index_js_.observer)(_DiceAutoControlResult);

;// ./src/framework/components.dice/DiceAutoControlResult/index.tsx


;// ./src/framework/components.dice/DiceHistory/DiceHistory.tsx





function _DiceHistory({ children, count }) {
    const { game: { setHistoryListSize, updateHistoryList, historyList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    (0,hooks_module_js_.useEffect)(() => {
        setHistoryListSize(count);
        updateHistoryList();
    }, [count]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.MULTIPLIER'),
            list: historyList,
        }) }));
}
const DiceHistory = (0,index_js_.observer)(_DiceHistory);

;// ./src/framework/components.dice/DiceHistory/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/animate.ts
var animate = __webpack_require__(93974);
;// ./src/framework/components.dice/DiceGameIndicator/DiceGameIndicator.tsx





function _DiceGameIndicator({ children }) {
    const { rotate } = (0,hooks_module_js_.useContext)(DiceGame_Context);
    const style = {
        transform: `rotate(${rotate}deg)`,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            style: style,
        })) }));
}
const DiceGameIndicator = (0,index_js_.observer)(_DiceGameIndicator);

;// ./src/framework/components.dice/DiceGameIndicator/index.tsx


;// ./src/framework/components.dice/DiceGamePercent/DiceGamePercent.tsx




function _DiceGamePercent({ children }) {
    const { game: { gameConfig, diceValue }, } = (0,bootstrap.GET_STORE)();
    const style = {
        '--percent': (diceValue / gameConfig.range.max) * 100,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            style: style,
        })) }));
}
const DiceGamePercent = (0,index_js_.observer)(_DiceGamePercent);

;// ./src/framework/components.dice/DiceGamePercent/index.tsx


;// ./src/framework/components.dice/DiceGameResult/DiceGameResult.tsx




function _DiceGameResult({ children }) {
    const { rotateRange } = (0,hooks_module_js_.useContext)(DiceGame_Context);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: rotateRange }) });
}
const DiceGameResult = (0,index_js_.observer)(_DiceGameResult);

;// ./src/framework/components.dice/DiceGameResult/index.tsx


;// ./src/framework/components.dice/DiceGame/DiceGame.tsx









const DiceGame_Context = (0,preact_module_js_.createContext)({});
const timingFunction = {
    linear: animate/* linear */.sn,
    makeEaseOut: (0,animate/* makeEaseOut */.L4)(animate/* easeOutCubic */.p_),
    easeOutCubic: animate/* easeOutCubic */.p_,
};
function _DiceGame({ children }) {
    const { game: { result, gameResult, gameConfig, animation, setAnimation }, uiCommon: { noAnimation }, } = (0,bootstrap.GET_STORE)();
    const [rotate, setRotate] = (0,hooks_module_js_.useState)(0);
    const [rotateRange, setRotateRange] = (0,hooks_module_js_.useState)('0');
    const pEnd = (0,hooks_module_js_.useRef)(0);
    (0,hooks_module_js_.useEffect)(() => {
        if (animation && typeof gameResult === 'number') {
            const p = (360 / 100) * ((gameConfig.range.max * gameResult) / 100);
            const pBuff = 360 - pEnd.current + p;
            const pBuffCount = 360 * gameConfig.game.rotateCount;
            (0,animate/* animate */.i0)({
                duration: noAnimation ? 1 : gameConfig.game.duration,
                timing: timingFunction[gameConfig.game.timingFunction],
                draw: function (progress) {
                    const rotate = pEnd.current + (pBuff + pBuffCount) * progress;
                    const rotateRange = ((rotate % 360) / 360) * gameConfig.range.max;
                    setRotate(rotate);
                    setRotateRange(rotateRange.toFixed(2));
                    if (progress === 1) {
                        pEnd.current = p;
                        setRotateRange(gameResult.toFixed(2));
                        setAnimation(false);
                    }
                },
            });
        }
    }, [animation]);
    return ((0,jsxRuntime_module/* jsx */.Y)(DiceGame_Context.Provider, { value: { rotate, rotateRange }, children: children({ isWin: result === 'won', animation }) }));
}
const DiceGame = Object.assign((0,index_js_.observer)(_DiceGame), {
    Indicator: DiceGameIndicator,
    Percent: DiceGamePercent,
    Result: DiceGameResult,
});

;// ./src/framework/components.dice/DiceGame/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
;// ./src/framework/components.dice/DiceWinLevel/DiceWinLevel.tsx




function _DiceWinLevel({ children, level = 0, onLoad = () => { } }) {
    const { game: { winLevel }, } = (0,bootstrap.GET_STORE)();
    if (winLevel === level) {
        (0,hooks_module_js_.useEffect)(() => {
            onLoad();
        }, []);
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    }
    return null;
}
const DiceWinLevel = (0,index_js_.observer)(_DiceWinLevel);

;// ./src/framework/components.dice/DiceWinLevel/index.tsx


;// ./src/framework/components.dice/DiceWin/DiceWin.tsx






function _DiceWin({ children }) {
    const { game: { coefficient, payout, winLevel, resultAwait, currentBet }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    if (resultAwait === 'won') {
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('MINES.YOU_WIN'),
                profit: (0,shortNumber/* default */.A)(payout, rounding),
                prefix: currencySign || '',
                coefficient,
                titleCoefficient: t('COMMON.MULTIPLIER'),
                level: winLevel,
                action: currentBet ? (currentBet.index === 1 ? 'under' : 'over') : 'over',
            }) }));
    }
    return null;
}
const DiceWin = Object.assign((0,index_js_.observer)(_DiceWin), {
    Level: DiceWinLevel,
});

;// ./src/framework/components.dice/DiceWin/index.tsx


;// ./src/framework/components.dice/DiceRender/DiceRender.tsx



function _DiceRender({ children, betData }) {
    const { game: { result, value, action }, } = betData;
    const target = () => {
        let t = value;
        if (action === 'over') {
            t = value + ((0,bootstrap.GET_GAME_CONFIG)().range.max - value) / 2;
        }
        else {
            t = value / 2;
        }
        return t;
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            action: action,
            value: value,
            result: result,
            target: target(),
        }) }));
}
const DiceRender = (0,index_js_.observer)(_DiceRender);

;// ./src/framework/components.dice/DiceRender/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
;// ./src/framework/components.dice/DiceControlResult/DiceControlResult.tsx






function _DiceControlResult({ children }) {
    const { game: { diceValue, amount, getCoefficient }, profileCommon: { limit: { maxWin }, profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const underCoefficient = Number(amount) < 1 ? Math.floor(getCoefficient(diceValue) * 10) / 10 : getCoefficient(diceValue).toFixed(2);
    const overCoefficient = Number(amount) < 1
        ? Math.floor(getCoefficient(100 - diceValue) * 10) / 10
        : getCoefficient(100 - diceValue).toFixed(2);
    const underPayout = (0,truncateDecimals/* default */.A)(Math.min(maxWin + Number(amount), (0,floor/* default */.A)(+underCoefficient * Number(amount))), rounding);
    const overPayout = (0,truncateDecimals/* default */.A)(Math.min(maxWin + Number(amount), (0,floor/* default */.A)(+overCoefficient * Number(amount))), rounding);
    const underPayoutFloatIndex = String(underPayout).length >= 9 ? 0 : rounding;
    const overPayoutFloatIndex = String(overPayout).length >= 9 ? 0 : rounding;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('DICE.BET_DETAILS'),
            titleWin: t('COMMON.WIN_CHANCE'),
            titlePayout: t('COMMON.PAYOUT'),
            titleCoefficient: t('COMMON.MULTIPLIER'),
            prefix: currencySign || '',
            under: {
                win: diceValue,
                payout: underPayout.toFixed(underPayoutFloatIndex),
                coefficient: `${underCoefficient}`,
            },
            over: {
                win: Number((100 - diceValue).toFixed(2)),
                payout: overPayout.toFixed(overPayoutFloatIndex),
                coefficient: `${overCoefficient}`,
            },
        }) }));
}
const DiceControlResult = (0,index_js_.observer)(_DiceControlResult);

;// ./src/framework/components.dice/DiceControlResult/index.tsx


;// ./src/framework/components.dice/export.ts
















/***/ }),

/***/ 93974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L4: () => (/* binding */ makeEaseOut),
/* harmony export */   i0: () => (/* binding */ animate),
/* harmony export */   p_: () => (/* binding */ easeOutCubic),
/* harmony export */   sn: () => (/* binding */ linear)
/* harmony export */ });
function animate({ timing, draw, duration }) {
    let start = performance.now();
    let animationId;
    function animationStep(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1)
            timeFraction = 1;
        let progress = timing(timeFraction);
        draw(progress);
        if (timeFraction < 1) {
            animationId = requestAnimationFrame(animationStep);
        }
    }
    animationStep(start);
    function stop() {
        cancelAnimationFrame(animationId);
    }
    return {
        stop,
    };
}
function makeEaseOut(timing) {
    return function (timeFraction) {
        return 1 - timing(1 - timeFraction);
    };
}
function easeOutCubic(timeFraction) {
    return 1 - Math.pow(1 - timeFraction, 3);
}
function linear(timeFraction) {
    return timeFraction;
}


/***/ }),

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


/***/ })

}]);