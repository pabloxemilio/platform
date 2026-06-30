"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2302,4295,7402,7518],{

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

/***/ 74840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Dice3Autobet: () => (/* reexport */ Dice3Autobet),
  Dice3Button: () => (/* reexport */ Dice3Button),
  Dice3ControlAmount: () => (/* reexport */ Dice3ControlAmount),
  Dice3ControlRanges: () => (/* reexport */ Dice3ControlRanges),
  Dice3ControlResult: () => (/* reexport */ Dice3ControlResult),
  Dice3CurrentCoefficient: () => (/* reexport */ Dice3CurrentCoefficient),
  Dice3Game: () => (/* reexport */ Dice3Game),
  Dice3Render: () => (/* reexport */ Dice3Render),
  Dice3Win: () => (/* reexport */ Dice3Win)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
;// ./src/framework/components.dice3/Dice3ControlAmount/Dice3ControlAmount.tsx




function _Dice3ControlAmount({ children }) {
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { amount, setAmount, lockedUiWithFreebets, animation }, uiCommon: { amountError }, freebetsCommon: { freebetEnabled, freebetsSuccessIndexList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            titleError: amountError,
            titleMaxWin: `${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`,
            disabled: lockedUiWithFreebets || animation,
            defaultValue: Number(amount),
            min: minBet,
            max: maxBet,
            onChange: setAmount,
            prefix: currencySign,
            connectBalance: freebetEnabled || freebetsSuccessIndexList.includes(0) ? undefined : balance,
            rounding: rounding > 0 ? rounding - 1 : rounding,
            gtmAction: 'input_value_changed',
            pushGtmDataOnValueChange: true,
        }) }));
}
const Dice3ControlAmount = (0,index_js_.observer)(_Dice3ControlAmount);

;// ./src/framework/components.dice3/Dice3ControlAmount/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
;// ./src/framework/components.dice3/Dice3ControlRanges/Dice3ControlRanges.tsx




function _Dice3ControlRanges({ children }) {
    const { game: { gameConfig, setDiceValue, diceValues, lockedUi, results, placeBetStatus, setAnimation, setResultVisible, resultVisible, }, } = (0,bootstrap.GET_STORE)();
    const [activeIndex, setActiveIndex] = (0,hooks_module_js_.useState)(null);
    const timeout = (0,hooks_module_js_.useRef)(null);
    const handleChange = (value, index) => {
        setDiceValue(value, index);
        setActiveIndex(index);
        setAnimation(false);
        setResultVisible(false);
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        timeout.current = setTimeout(() => {
            setActiveIndex(null);
        }, 500);
    };
    const props = {
        betStatus: placeBetStatus,
        resultVisible,
        list: gameConfig.ranges.map(({ min, max, minStatic, maxStatic, step, stepButton, defaultValue }, index) => {
            return {
                min: min,
                max: max,
                minStatic: minStatic,
                maxStatic: maxStatic,
                step: step,
                stepButton: stepButton,
                onChange: (value) => handleChange(value, index),
                defaultValue: diceValues[index],
                disabled: placeBetStatus !== 'initial',
                active: activeIndex === index,
                id: index,
                action: results && diceValues && results[index] >= diceValues[index] ? 'over' : 'under',
            };
        }),
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) });
}
const Dice3ControlRanges = Object.assign((0,index_js_.observer)(_Dice3ControlRanges));

;// ./src/framework/components.dice3/Dice3ControlRanges/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
;// ./src/framework/components.dice3/Dice3ControlResult/Dice3ControlResult.tsx





const _Dice3ControlResult = ({ children }) => {
    const { profileCommon: { profile: { currencySign, rounding }, limit: { maxWin }, }, game: { possibleGame, amount }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            coefficient: (0,shortNumber/* default */.A)(Number(possibleGame.coefficient), 2),
            titleCoefficient: t('COMMON.MULTIPLIER'),
            winChance: (0,shortNumber/* default */.A)(possibleGame.winChance, 2),
            titleWinChance: t('COMMON.WIN_CHANCE'),
            possiblePayout: (0,shortNumber/* default */.A)(Math.min(possibleGame.posiblePayout, maxWin + Number(amount)), rounding),
            titlePossiblePayout: t('COMMON.POSSIBLE.PAYOUT'),
            currencySign: currencySign || '',
        }) }));
};
const Dice3ControlResult = (0,index_js_.observer)(_Dice3ControlResult);

;// ./src/framework/components.dice3/Dice3ControlResult/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
;// ./src/framework/components.dice3/Dice3ButtonPlay/Dice3ButtonPlay.tsx






function _Dice3ButtonPlay({ children, onClick = () => { } }) {
    const { request, disabled, isFreebet, autoBetEnabled } = (0,hooks_module_js_.useContext)(Context);
    const { game: { makeBet }, } = (0,bootstrap.GET_STORE)();
    if (request || isFreebet || autoBetEnabled)
        return null;
    const handleClick = (e) => {
        if (request || disabled || isFreebet)
            return false;
        makeBet(0);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const Dice3ButtonPlay = (0,index_js_.observer)(_Dice3ButtonPlay);

;// ./src/framework/components.dice3/Dice3ButtonPlay/index.tsx


;// ./src/framework/components.dice3/Dice3ButtonPlayEvent/Dice3ButtonPlayEvent.tsx






function _Dice3ButtonPlayEvent({ children, onClick = () => { } }) {
    const { request, disabled, isFreebet } = (0,hooks_module_js_.useContext)(Context);
    const { game: { makeBet }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (request || disabled || isFreebet)
            return false;
        makeBet(0);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const Dice3ButtonPlayEvent = (0,index_js_.observer)(_Dice3ButtonPlayEvent);

;// ./src/framework/components.dice3/Dice3ButtonPlayEvent/index.tsx


;// ./src/framework/components.dice3/Dice3ButtonRequest/Dice3ButtonRequest.tsx




function _Dice3ButtonRequest({ children }) {
    const { request, isFreebet, autoBetEnabled } = (0,hooks_module_js_.useContext)(Context);
    if (!request || isFreebet || autoBetEnabled)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {})) });
}
const Dice3ButtonRequest = _Dice3ButtonRequest;

;// ./src/framework/components.dice3/Dice3ButtonRequest/index.tsx


;// ./src/framework/components.dice3/Dice3ButtonFreebet/Dice3ButtonFreebet.tsx






function _Dice3ButtonFreebet({ children, onClick = () => { } }) {
    const { isFreebet } = (0,hooks_module_js_.useContext)(Context);
    const { game: { makeBet }, freebetsCommon: { freebetActive }, } = (0,bootstrap.GET_STORE)();
    if (!isFreebet)
        return null;
    const handleClick = (e) => {
        if (!isFreebet)
            return false;
        makeBet(0, true);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const Dice3ButtonFreebet = (0,index_js_.observer)(_Dice3ButtonFreebet);

;// ./src/framework/components.dice3/Dice3ButtonFreebet/index.tsx


;// ./src/framework/components.dice3/Dice3ButtonFreebetEvent/Dice3ButtonFreebetEvent.tsx






function _Dice3ButtonFreebetEvent({ children, onClick = () => { } }) {
    const { request, disabled, isFreebet } = (0,hooks_module_js_.useContext)(Context);
    const { game: { makeBet }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (!isFreebet)
            return false;
        makeBet(0, true);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const Dice3ButtonFreebetEvent = (0,index_js_.observer)(_Dice3ButtonFreebetEvent);

;// ./src/framework/components.dice3/Dice3ButtonFreebetEvent/index.tsx


;// ./src/framework/components.dice3/Dice3ButtonStopAutobet/Dice3ButtonStopAutobet.tsx






function _Dice3ButtonStopAutobet({ children, onClick = () => { } }) {
    const { autoBetEnabled } = (0,hooks_module_js_.useContext)(Context);
    const { autobetCommon: { setAutoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    if (!autoBetEnabled)
        return null;
    const hundleClick = (e) => {
        setAutoBetEnabled(false);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const Dice3ButtonStopAutobet = (0,index_js_.observer)(_Dice3ButtonStopAutobet);

;// ./src/framework/components.dice3/Dice3ButtonStopAutobet/index.tsx


;// ./src/framework/components.dice3/Dice3Button/Dice3Button.tsx











const Context = (0,preact_module_js_.createContext)({});
function _Dice3Button({ children }) {
    const { game: { placeBetStatus, lockedUi, currentCoefficient }, profileCommon: { profile: { currencySign }, }, uiCommon: { amountError }, freebetsCommon: { freebetEnabled, freebetActive, listGetByIndex }, autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const minCoefficient = freebetActive?.offer?.configuration[0]?.minCoefficient;
    const props = {
        title: autoBetEnabled ? t('COMMON.STOP_AUTOBET') : t('COMMON.PLACE_BET'),
        request: placeBetStatus === 'loading',
        isFreebet: freebetEnabled,
        valueFreebet: freebetEnabled && String(currencySign + freebetActive?.offer?.configuration[0]?.betAmount),
        disabled: !!amountError || lockedUi || +currentCoefficient < minCoefficient,
        autoBetEnabled,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const Dice3Button = Object.assign((0,index_js_.observer)(_Dice3Button), {
    Play: Object.assign(Dice3ButtonPlay, {
        Event: Dice3ButtonPlayEvent,
    }),
    Freebet: Object.assign(Dice3ButtonFreebet, {
        Event: Dice3ButtonFreebetEvent,
    }),
    Request: Dice3ButtonRequest,
    StopAutobet: Dice3ButtonStopAutobet,
});

;// ./src/framework/components.dice3/Dice3Button/index.tsx


;// ./src/framework/components.dice3/Dice3CurrentCoefficient/Dice3CurrentCoefficient.tsx



function _Dice3CurrentCoefficient({ children, onChange = () => { } }) {
    const { game: { currentCoefficient, currentBet, resultVisible }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            value: currentCoefficient,
            isWin: currentBet && currentBet.result === 'won' && resultVisible,
        }) }));
}
const Dice3CurrentCoefficient = (0,index_js_.observer)(_Dice3CurrentCoefficient);

;// ./src/framework/components.dice3/Dice3CurrentCoefficient/index.tsx


;// ./src/framework/components.dice3/Dice3GameResult/Dice3GameResult.tsx




function _Dice3GameResult({ children, index }) {
    const { results } = (0,hooks_module_js_.useContext)(Dice3Game_Context);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: results && results[index] }) });
}
const Dice3GameResult = (0,index_js_.observer)(_Dice3GameResult);

;// ./src/framework/components.dice3/Dice3GameResult/index.tsx


;// ./src/framework/components.dice3/Dice3Game/Dice3Game.tsx





const Dice3Game_Context = (0,preact_module_js_.createContext)({});
function _Dice3Game({ children }) {
    const { game: { result, results, gameResult, gameConfig, animation }, } = (0,bootstrap.GET_STORE)();
    return (0,jsxRuntime_module/* jsx */.Y)(Dice3Game_Context.Provider, { value: { results }, children: children({ isWin: result === 'won', animation }) });
}
const Dice3Game = Object.assign((0,index_js_.observer)(_Dice3Game), {
    Result: Dice3GameResult,
});

;// ./src/framework/components.dice3/Dice3Game/index.tsx


;// ./src/framework/components.dice3/Dice3WinLevel/Dice3WinLevel.tsx




function _Dice3WinLevel({ children, level = 0, onLoad = () => { } }) {
    const { game: { winLevel }, } = (0,bootstrap.GET_STORE)();
    if (winLevel === level) {
        (0,hooks_module_js_.useEffect)(() => {
            onLoad();
        }, []);
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    }
    return null;
}
const Dice3WinLevel = (0,index_js_.observer)(_Dice3WinLevel);

;// ./src/framework/components.dice3/Dice3WinLevel/index.tsx


;// ./src/framework/components.dice3/Dice3Win/Dice3Win.tsx






function _Dice3Win({ children }) {
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
const Dice3Win = Object.assign((0,index_js_.observer)(_Dice3Win), {
    Level: Dice3WinLevel,
});

;// ./src/framework/components.dice3/Dice3Win/index.tsx


;// ./src/framework/components.dice3/Dice3Render/Dice3Render.tsx


function _Dice3Render({ children, betData }) {
    const { game: { action }, } = betData;
    const results = betData.game.results;
    const values = betData.game.values;
    const resultList = values.map((item, index) => ({
        value: values[index],
        result: Math.floor(results[index]),
        action: results && values && results[index] > values[index] ? 'over' : 'under',
    }));
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            results: resultList,
        }) }));
}
const Dice3Render = (0,index_js_.observer)(_Dice3Render);

;// ./src/framework/components.dice3/Dice3Render/index.tsx


;// ./src/framework/components.dice3/Dice3AutobetButton/Dice3AutobetButton.tsx






function _Dice3AutobetButton({ children, onClick = () => { } }) {
    const { autobetCommon: { autoBetEnabled, setAutoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { openList, setOpenList, count, disabled } = (0,hooks_module_js_.useContext)(Dice3Autobet_Context);
    const handleClick = (e) => {
        if (disabled)
            return;
        if (!autoBetEnabled)
            setOpenList(!openList);
        if (autoBetEnabled)
            setAutoBetEnabled(false);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            count: count,
            active: autoBetEnabled,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const Dice3AutobetButton = (0,index_js_.observer)(_Dice3AutobetButton);

;// ./src/framework/components.dice3/Dice3AutobetButton/index.tsx


;// ./src/framework/components.dice3/Dice3AutobetList/Dice3AutobetList.tsx



function _Dice3AutobetList({ children }) {
    const { openList } = (0,hooks_module_js_.useContext)(Dice3Autobet_Context);
    if (openList)
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const Dice3AutobetList = _Dice3AutobetList;

;// ./src/framework/components.dice3/Dice3AutobetList/index.tsx


;// ./src/framework/components.dice3/Dice3AutobetListItem/Dice3AutobetListItem.tsx





function _Dice3AutobetListItem({ children, onClick = () => { } }) {
    const { game: { gameConfig }, autobetCommon: { autoBetEnabled, setAutoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { setCount, setOpenList } = (0,hooks_module_js_.useContext)(Dice3Autobet_Context);
    const [active, setActive] = (0,hooks_module_js_.useState)(-1);
    const handleClick = (e) => {
        setActive(Number(e.currentTarget.dataset.index));
        setCount(Number(e.currentTarget.dataset.value));
        setOpenList(false);
        setAutoBetEnabled(true);
        onClick(e);
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (!autoBetEnabled)
            setActive(-1);
    }, [autoBetEnabled]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: gameConfig.autoBet.list.map((item, index) => (0,preact_module_js_.toChildArray)(children({
            active: active === index,
            value: item,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onclick: handleClick,
            'data-index': index,
            'data-value': item,
            key: index,
        }))) }));
}
const Dice3AutobetListItem = _Dice3AutobetListItem;

;// ./src/framework/components.dice3/Dice3AutobetListItem/index.tsx


;// ./src/framework/components.dice3/Dice3Autobet/Dice3Autobet.tsx









const Dice3Autobet_Context = (0,preact_module_js_.createContext)({});
function _Dice3Autobet({ children, onPlay = () => { } }) {
    const { game: { result, makeBet, amount, resultAwait, animation }, uiCommon: { amountError }, autobetCommon: { autoBetEnabled, setAutoBetEnabled, setInitialAmount, initialAmount, autoBetLimit, setAutoBetLimit, autoBetsAmount, setAutoBetsAmount, }, profileCommon: { profile: { balance }, }, } = (0,bootstrap.GET_STORE)();
    const [openList, setOpenList] = (0,hooks_module_js_.useState)(false);
    const setCount = (value) => {
        setAutoBetsAmount(String(value));
    };
    const { t } = (0,es_index_js_.useTranslation)();
    const disabled = !!amountError || result !== 'initial';
    (0,hooks_module_js_.useEffect)(() => {
        setInitialAmount(autoBetEnabled ? Number(amount) : 0);
    }, [autoBetEnabled]);
    (0,hooks_module_js_.useEffect)(() => {
        if (animation)
            return;
        if (resultAwait !== 'initial')
            return;
        if (result !== 'initial')
            return;
        if (balance <= 0 || balance < initialAmount) {
            setAutoBetEnabled(false);
            setAutoBetsAmount(String(-1));
            return;
        }
        if (autoBetEnabled && autoBetsAmount > 0) {
            makeBet(0);
            setAutoBetsAmount(String(autoBetsAmount - 1));
            onPlay();
        }
        if (autoBetEnabled && autoBetsAmount === 0) {
            setAutoBetEnabled(false);
            setAutoBetsAmount(String(-1));
        }
    }, [autoBetEnabled, result, resultAwait, animation]);
    return ((0,jsxRuntime_module/* jsx */.Y)(Dice3Autobet_Context.Provider, { value: { openList, setOpenList, count: autoBetsAmount, setCount, disabled }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('COMMON.AUTO'),
                disabled,
                open: openList,
            }) }) }));
}
const Dice3Autobet = Object.assign((0,index_js_.observer)(_Dice3Autobet), {
    Button: Dice3AutobetButton,
    List: Object.assign(Dice3AutobetList, {
        Item: Dice3AutobetListItem,
    }),
});

;// ./src/framework/components.dice3/Dice3Autobet/index.tsx


;// ./src/framework/components.dice3/export.ts











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