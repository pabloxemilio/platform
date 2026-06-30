"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2162,2302,7402,7518],{

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

/***/ 92585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BubblesAutobet: () => (/* reexport */ BubblesAutobet),
  BubblesControlAmount: () => (/* reexport */ BubblesControlAmount),
  BubblesControlButton: () => (/* reexport */ BubblesControlButton),
  BubblesControlClear: () => (/* reexport */ BubblesControlClear),
  BubblesControlColumnsRange: () => (/* reexport */ BubblesControlColumnsRange),
  BubblesControlKeep: () => (/* reexport */ BubblesControlKeep),
  BubblesControlPayout: () => (/* reexport */ BubblesControlPayout),
  BubblesControlPreview: () => (/* reexport */ BubblesControlPreview),
  BubblesControlRandom: () => (/* reexport */ BubblesControlRandom),
  BubblesControlRowsRange: () => (/* reexport */ BubblesControlRowsRange),
  BubblesGame: () => (/* reexport */ BubblesGame),
  BubblesRender: () => (/* reexport */ BubblesRender),
  BubblesWin: () => (/* reexport */ BubblesWin)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
;// ./src/framework/components.bubbles/BubblesControlAmount/BubblesControlAmount.tsx




const _BubblesControlAmount = ({ children }) => {
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { amount, setAmount, lockedUi, gameStarted }, uiCommon: { amountError }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            titleError: amountError,
            titleMaxWin: `${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`,
            disabled: lockedUi,
            defaultValue: Number(amount),
            min: minBet,
            max: maxBet,
            onChange: setAmount,
            prefix: currencySign,
            connectBalance: !gameStarted && balance,
            rounding: rounding > 0 ? rounding - 1 : rounding,
        }) }));
};
const BubblesControlAmount = (0,index_js_.observer)(_BubblesControlAmount);

;// ./src/framework/components.bubbles/BubblesControlAmount/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
;// ./src/framework/components.bubbles/BubblesControlButton/BubblesControlButton.tsx





function _BubblesControlButton({ children, onClick = () => { } }) {
    const { game: { betLoading, lockedUi, opened, startGame }, autobetCommon: { autoBetEnabled, setAutoBetEnabled }, uiCommon: { amountError }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const props = {
        title: autoBetEnabled
            ? t('COMMON.STOP_AUTOBET')
            : opened.length === 0
                ? t('BUBBLES.CHOOSE_BUBBLES')
                : t('COMMON.PLACE_BET'),
        type: autoBetEnabled ? 'default' : betLoading ? 'loading' : 'default',
        mode: autoBetEnabled ? 'auto' : 'default',
        disabled: autoBetEnabled ? false : !!amountError || lockedUi || opened.length === 0,
    };
    const handleClick = (e) => {
        if (!props.disabled && props.mode === 'default' && props.type === 'default') {
            startGame();
            onClick(e);
        }
        if (props.mode === 'auto') {
            setAutoBetEnabled(false);
            onClick(e);
        }
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const BubblesControlButton = (0,index_js_.observer)(_BubblesControlButton);

;// ./src/framework/components.bubbles/BubblesControlButton/index.tsx


;// ./src/framework/components.bubbles/BubblesControlClear/BubblesControlClear.tsx





function _BubblesControlClear({ children, onClick = () => { } }) {
    const { game: { betLoading, lockedUi, opened, clearGame }, autobetCommon: { autoBetEnabled }, uiCommon: { amountError }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const props = {
        title: t('COMMON.CLEAR'),
        disabled: !!amountError || lockedUi || opened.length === 0 || betLoading,
    };
    const handleClick = (e) => {
        if (!props.disabled) {
            clearGame();
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const BubblesControlClear = (0,index_js_.observer)(_BubblesControlClear);

;// ./src/framework/components.bubbles/BubblesControlClear/index.tsx


;// ./src/framework/components.bubbles/BubblesControlColumnsRange/BubblesControlColumnsRange.tsx




function _BubblesControlColumnsRange({ children }) {
    const { game: { betLoading, lockedUi, gameConfig, columns, setColumns }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const props = {
        title: t('BUBBLES.COLUMNS'),
        disabled: lockedUi || betLoading,
        defaultValue: columns,
        min: gameConfig.game.minColumns,
        max: gameConfig.game.maxColumns,
        onChange: setColumns,
        step: 1,
        stepButton: 1,
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) });
}
const BubblesControlColumnsRange = (0,index_js_.observer)(_BubblesControlColumnsRange);

;// ./src/framework/components.bubbles/BubblesControlColumnsRange/index.tsx


;// ./src/framework/components.bubbles/BubblesControlRowsRange/BubblesControlRowsRange.tsx




function _BubblesControlRowsRange({ children }) {
    const { game: { betLoading, lockedUi, gameConfig, rows, setRows }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const props = {
        title: t('BUBBLES.ROWS'),
        disabled: lockedUi || betLoading,
        defaultValue: rows,
        min: gameConfig.game.minRows,
        max: gameConfig.game.maxRows,
        onChange: setRows,
        step: 1,
        stepButton: 1,
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) });
}
const BubblesControlRowsRange = (0,index_js_.observer)(_BubblesControlRowsRange);

;// ./src/framework/components.bubbles/BubblesControlRowsRange/index.tsx


;// ./src/framework/components.bubbles/BubblesControlKeep/BubblesControlKeep.tsx




function _BubblesControlKeep({ children }) {
    const { game: { opened, keepOpened, setKeepOpened }, autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const props = {
        title: t('BUBBLES.KEEP_SQUARES'),
        disabled: opened.length === 0 || autoBetEnabled,
        defaultValue: keepOpened,
        onChange: setKeepOpened,
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) });
}
const BubblesControlKeep = (0,index_js_.observer)(_BubblesControlKeep);

;// ./src/framework/components.bubbles/BubblesControlKeep/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
;// ./src/framework/components.bubbles/BubblesControlRandomHeader/BubblesControlRandomHeader.tsx




function _BubblesControlRandomHeader({ children, onClick = () => { } }) {
    const { openContent, setOpenContent } = (0,hooks_module_js_.useContext)(Context);
    const handleClick = (e) => {
        setOpenContent(!openContent);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            active: openContent,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const BubblesControlRandomHeader = _BubblesControlRandomHeader;

;// ./src/framework/components.bubbles/BubblesControlRandomHeader/index.tsx


;// ./src/framework/components.bubbles/BubblesControlRandomContent/BubblesControlRandomContent.tsx



function _BubblesControlRandomContent({ children }) {
    const { openContent } = (0,hooks_module_js_.useContext)(Context);
    if (openContent)
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const BubblesControlRandomContent = _BubblesControlRandomContent;

;// ./src/framework/components.bubbles/BubblesControlRandomContent/index.tsx


;// ./src/framework/components.bubbles/BubblesControlRandomRange/BubblesControlRandomRange.tsx






function _BubblesControlRandomRange({ children }) {
    const { game: { betLoading, lockedUi, gameConfig, squares }, } = (0,bootstrap.GET_STORE)();
    const { range, setRange, setInit } = (0,hooks_module_js_.useContext)(Context);
    const { t } = (0,es_index_js_.useTranslation)();
    const props = {
        title: t('BUBBLES.PICK_RANDOM'),
        disabled: lockedUi || betLoading,
        renderMin: gameConfig.game.nullSquares,
        renderMax: squares - gameConfig.game.nullSquares,
        renderValue: range,
        defaultValue: range,
        min: gameConfig.game.nullSquares,
        max: squares - gameConfig.game.nullSquares,
        onChange: (value) => {
            setInit(true);
            setRange(value);
        },
        step: 1,
        stepButton: 1,
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) });
}
const BubblesControlRandomRange = (0,index_js_.observer)(_BubblesControlRandomRange);

;// ./src/framework/components.bubbles/BubblesControlRandomRange/index.tsx


;// ./src/framework/components.bubbles/BubblesControlRandomButton/BubblesControlRandomButton.tsx





function _BubblesControlRandomButton({ children, onClick = () => { } }) {
    const { random, range } = (0,hooks_module_js_.useContext)(Context);
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = (e) => {
        random();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            title: t('BUBBLES.RANDOM'),
            value: range,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const BubblesControlRandomButton = _BubblesControlRandomButton;

;// ./src/framework/components.bubbles/BubblesControlRandomButton/index.tsx


;// ./src/framework/components.bubbles/BubblesControlRandom/BubblesControlRandom.tsx










const Context = (0,preact_module_js_.createContext)({});
function _BubblesControlRandom({ children }) {
    const { game: { lockedUi, betLoading, gameConfig, clearGame, setOpened, squares }, uiCommon: { amountError }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [init, setInit] = (0,hooks_module_js_.useState)(false);
    const [openContent, setOpenContent] = (0,hooks_module_js_.useState)(false);
    const [range, setRange] = (0,hooks_module_js_.useState)(gameConfig.random.defaultValue);
    const random = () => {
        const opened = generateRandomArray(Math.min(range, squares - 1), 0, squares - 1);
        setTimeout(() => {
            setOpened(opened);
        }, 0);
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (init)
            random();
    }, [range]);
    function generateRandomArray(length, min_value, max_value) {
        if (max_value - min_value + 1 < length) {
            throw new Error('Неможливо згенерувати масив без повторень з даного діапазону та довжини.');
        }
        var array = [];
        for (var i = min_value; i <= max_value; i++) {
            array.push(i);
        }
        var result = [];
        for (var j = 0; j < length; j++) {
            var randomIndex = Math.floor(Math.random() * array.length);
            var randomNumber = array[randomIndex];
            array.splice(randomIndex, 1);
            result.push(randomNumber);
        }
        return result;
    }
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: { init, setInit, openContent, setOpenContent, random, range, setRange }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('BUBBLES.PICK_RANDOM'),
                disabled: lockedUi || !!amountError || betLoading,
            }) }) }));
}
const BubblesControlRandom = Object.assign((0,index_js_.observer)(_BubblesControlRandom), {
    Header: BubblesControlRandomHeader,
    Content: BubblesControlRandomContent,
    Range: BubblesControlRandomRange,
    Button: BubblesControlRandomButton,
});

;// ./src/framework/components.bubbles/BubblesControlRandom/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
;// ./src/framework/components.bubbles/BubblesControlPayout/BubblesControlPayout.tsx






function _BubblesControlPayout({ children }) {
    const { profileCommon: { profile: { currencySign, rounding }, }, game: { amount, squaresCoefficient, opened }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const props = {
        title: t('COMMON.PAYOUT'),
        description: t('BUBBLES.FIND_THE_WINNING'),
        coefficient: squaresCoefficient,
        amount: (0,shortNumber/* default */.A)(Number(amount), rounding),
        payout: (0,shortNumber/* default */.A)((0,floor/* default */.A)(Number(amount) * squaresCoefficient), rounding),
        prefix: currencySign || '',
        show: opened.length > 0,
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) });
}
const BubblesControlPayout = (0,index_js_.observer)(_BubblesControlPayout);

;// ./src/framework/components.bubbles/BubblesControlPayout/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
;// ./src/framework/components.bubbles/BubblesControlPreview/BubblesControlPreview.tsx





function _BubblesControlPreview({ children }) {
    const { game: { opened }, } = (0,bootstrap.GET_STORE)();
    const [show, setShow] = (0,hooks_module_js_.useState)(localStorageHelper/* default */.A.get('bubblesControlPreview'));
    (0,hooks_module_js_.useEffect)(() => {
        if (opened.length > 0) {
            localStorageHelper/* default */.A.set('bubblesControlPreview', 'true');
            setShow('true');
        }
    }, [opened]);
    if (!show)
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const BubblesControlPreview = (0,index_js_.observer)(_BubblesControlPreview);

;// ./src/framework/components.bubbles/BubblesControlPreview/index.tsx


;// ./src/framework/components.bubbles/BubblesAutobetButton/BubblesAutobetButton.tsx






function _BubblesAutobetButton({ children, onClick = () => { } }) {
    const { autobetCommon: { autoBetEnabled, setAutoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { openList, setOpenList, count } = (0,hooks_module_js_.useContext)(BubblesAutobet_Context);
    const handleClick = (e) => {
        if (!autoBetEnabled)
            setOpenList(!openList);
        if (autoBetEnabled)
            setAutoBetEnabled(false);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            count: count,
            active: autoBetEnabled,
            open: openList,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const BubblesAutobetButton = (0,index_js_.observer)(_BubblesAutobetButton);

;// ./src/framework/components.bubbles/BubblesAutobetButton/index.tsx


;// ./src/framework/components.bubbles/BubblesAutobetList/BubblesAutobetList.tsx



function _BubblesAutobetList({ children }) {
    const { openList } = (0,hooks_module_js_.useContext)(BubblesAutobet_Context);
    if (openList)
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const BubblesAutobetList = _BubblesAutobetList;

;// ./src/framework/components.bubbles/BubblesAutobetList/index.tsx


;// ./src/framework/components.bubbles/BubblesAutobetListItem/BubblesAutobetListItem.tsx





function _BubblesAutobetListItem({ children, onClick = () => { } }) {
    const { game: { gameConfig, setKeepOpened }, autobetCommon: { autoBetEnabled, setAutoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { setCount, setOpenList } = (0,hooks_module_js_.useContext)(BubblesAutobet_Context);
    const [active, setActive] = (0,hooks_module_js_.useState)(-1);
    const handleClick = (e) => {
        setKeepOpened(true);
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
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: gameConfig.autobet.list.map((item, index) => (0,preact_module_js_.toChildArray)(children({
            active: active === index,
            value: item,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onclick: handleClick,
            'data-index': index,
            'data-value': item,
            key: index,
        }))) }));
}
const BubblesAutobetListItem = _BubblesAutobetListItem;

;// ./src/framework/components.bubbles/BubblesAutobetListItem/index.tsx


;// ./src/framework/components.bubbles/BubblesAutobet/BubblesAutobet.tsx









const BubblesAutobet_Context = (0,preact_module_js_.createContext)({});
function _BubblesAutobet({ children, onPlay = () => { } }) {
    const { game: { opened, roundId, startGame, amount }, uiCommon: { amountError }, autobetCommon: { autoBetEnabled, setAutoBetEnabled, setInitialAmount, initialAmount }, profileCommon: { profile: { balance }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [openList, setOpenList] = (0,hooks_module_js_.useState)(false);
    const [count, setCount] = (0,hooks_module_js_.useState)(-1);
    (0,hooks_module_js_.useEffect)(() => {
        if (autoBetEnabled) {
            setInitialAmount(Number(amount));
        }
        if (!autoBetEnabled) {
            setInitialAmount(0);
        }
    }, [autoBetEnabled]);
    (0,hooks_module_js_.useEffect)(() => {
        if (balance <= 0 || balance < initialAmount) {
            setAutoBetEnabled(false);
            setCount(-1);
            return;
        }
        if (autoBetEnabled && roundId === '' && count > 0) {
            startGame();
            setCount(count - 1);
            onPlay();
        }
        if (autoBetEnabled && roundId === '' && count === 0) {
            setAutoBetEnabled(false);
            setCount(-1);
        }
    }, [autoBetEnabled, roundId]);
    return ((0,jsxRuntime_module/* jsx */.Y)(BubblesAutobet_Context.Provider, { value: { openList, setOpenList, count, setCount }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('COMMON.AUTO'),
                disabled: !!amountError || opened.length === 0,
            }) }) }));
}
const BubblesAutobet = Object.assign((0,index_js_.observer)(_BubblesAutobet), {
    Button: BubblesAutobetButton,
    List: Object.assign(BubblesAutobetList, {
        Item: BubblesAutobetListItem,
    }),
});

;// ./src/framework/components.bubbles/BubblesAutobet/index.tsx


;// ./src/framework/components.bubbles/BubblesWinLevel/BubblesWinLevel.tsx




function _BubblesWinLevel({ children, level = 0, onLoad = () => { } }) {
    const { game: { winLevel }, } = (0,bootstrap.GET_STORE)();
    if (winLevel === level) {
        (0,hooks_module_js_.useEffect)(() => {
            onLoad();
        }, []);
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    }
    return null;
}
const BubblesWinLevel = (0,index_js_.observer)(_BubblesWinLevel);

;// ./src/framework/components.bubbles/BubblesWinLevel/index.tsx


;// ./src/framework/components.bubbles/BubblesWin/BubblesWin.tsx






function _BubblesWin({ children }) {
    const { game: { coefficient, payout, winLevel, winScreen, winning }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    if (winScreen) {
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('MINES.YOU_WIN'),
                profit: (0,shortNumber/* default */.A)(payout, rounding),
                prefix: currencySign || '',
                coefficient,
                titleCoefficient: t('COMMON.MULTIPLIER'),
                level: winLevel,
                winning: winning,
            }) }));
    }
    return null;
}
const BubblesWin = Object.assign((0,index_js_.observer)(_BubblesWin), {
    Level: BubblesWinLevel,
});

;// ./src/framework/components.bubbles/BubblesWin/index.tsx


;// ./src/framework/components.bubbles/BubblesGameItem/BubblesGameItem.tsx






const ContextItem = (0,preact_module_js_.createContext)({});
function _BubblesGameItem({ children, onClick = () => { }, onMouseOver = () => { }, onTouchMove = () => { }, onMouseDown = () => { }, onActiveLoad = () => { }, onActiveDestroy = () => { }, index, }) {
    const { game: { toggleBox, openBox, setTouchCallback, result }, } = (0,bootstrap.GET_STORE)();
    const { list } = (0,hooks_module_js_.useContext)(BubblesGame_Context);
    const handleClick = (e) => {
        if (result || list[index].open || list[index].win || list[index].lose)
            return;
        onClick(e);
    };
    const handleOnMouseOver = (e) => {
        if (result || list[index].open || list[index].win || list[index].lose)
            return;
        openBox(index, () => {
            onActiveLoad(e);
            onMouseOver(e);
        });
    };
    const handleOnMouseDown = (e) => {
        if (result || list[index].open || list[index].win || list[index].lose)
            return;
        toggleBox(index, (type) => {
            if (type === 'add')
                onActiveLoad(e);
            if (type === 'remove')
                onActiveDestroy(e);
        });
        onMouseDown(e);
    };
    setTouchCallback(() => {
        onActiveLoad({});
        onTouchMove({});
    });
    return ((0,jsxRuntime_module/* jsx */.Y)(ContextItem.Provider, { value: { index }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: handleClick,
                onMouseOver: handleOnMouseOver,
                onMouseDown: handleOnMouseDown,
                'data-bubbles-game-index': index,
            })) }) }));
}
const BubblesGameItem = (0,index_js_.observer)(_BubblesGameItem);

;// ./src/framework/components.bubbles/BubblesGameItem/index.tsx


;// ./src/framework/components.bubbles/BubblesGameItemDefault/BubblesGameItemDefault.tsx




function _BubblesGameItemDefault({ children }) {
    const { list } = (0,hooks_module_js_.useContext)(BubblesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    if (!list[index].active && !list[index].open && !list[index].win && !list[index].lose)
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const BubblesGameItemDefault = _BubblesGameItemDefault;

;// ./src/framework/components.bubbles/BubblesGameItemDefault/index.tsx


;// ./src/framework/components.bubbles/BubblesGameItemActive/BubblesGameItemActive.tsx




function _BubblesGameItemActive({ children }) {
    const { list } = (0,hooks_module_js_.useContext)(BubblesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    if (list[index].active && !list[index].open && !list[index].win && !list[index].lose)
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const BubblesGameItemActive = _BubblesGameItemActive;

;// ./src/framework/components.bubbles/BubblesGameItemActive/index.tsx


;// ./src/framework/components.bubbles/BubblesGameItemOpen/BubblesGameItemOpen.tsx




function _BubblesGameItemOpen({ children, ...props }) {
    const { list } = (0,hooks_module_js_.useContext)(BubblesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    if (!list[index].active && list[index].open && !list[index].win && !list[index].lose)
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const BubblesGameItemOpen = _BubblesGameItemOpen;

;// ./src/framework/components.bubbles/BubblesGameItemOpen/index.tsx


;// ./src/framework/components.bubbles/BubblesGameItemWin/BubblesGameItemWin.tsx




function _BubblesGameItemWin({ children }) {
    const { list } = (0,hooks_module_js_.useContext)(BubblesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    if (!list[index].active && !list[index].open && list[index].win && !list[index].lose)
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const BubblesGameItemWin = _BubblesGameItemWin;

;// ./src/framework/components.bubbles/BubblesGameItemWin/index.tsx


;// ./src/framework/components.bubbles/BubblesGameItemLose/BubblesGameItemLose.tsx




function _BubblesGameItemLose({ children, ...props }) {
    const { list } = (0,hooks_module_js_.useContext)(BubblesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    if (!list[index].active && !list[index].open && !list[index].win && list[index].lose)
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const BubblesGameItemLose = _BubblesGameItemLose;

;// ./src/framework/components.bubbles/BubblesGameItemLose/index.tsx


;// ./src/framework/components.bubbles/BubblesGame/BubblesGame.tsx











const BubblesGame_Context = (0,preact_module_js_.createContext)({});
function _BubblesGame({ children }) {
    const { game: { columns, rows, opened, winning, result }, uiCommon: { screenWidth, screenHeight, isScreenMobile }, } = (0,bootstrap.GET_STORE)();
    const childrenRef = (0,hooks_module_js_.useRef)(null);
    const [itemSize, setItemSize] = (0,hooks_module_js_.useState)(0);
    const [list, setList] = (0,hooks_module_js_.useState)([]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!childrenRef.current)
            return;
        const w = childrenRef.current.offsetWidth;
        const h = childrenRef.current.offsetHeight;
        const side = Math.min(w, h);
        const itemSize = Math.min(side / columns, side / rows);
        setItemSize(itemSize);
        childrenRef.current.style.setProperty('--item-size', `${itemSize}px`);
        childrenRef.current.style.setProperty('--columns', columns);
        childrenRef.current.style.setProperty('--rows', rows);
    }, [screenWidth, screenHeight, childrenRef.current, columns, rows, isScreenMobile]);
    (0,hooks_module_js_.useEffect)(() => {
        const list = [];
        for (let i = 0; i < columns * rows; i++) {
            list.push({
                active: !result && opened.includes(i),
                win: result === 'won' && i === winning,
                lose: result === 'lost' && i === winning,
                open: result !== undefined && i !== winning && opened.includes(i),
            });
        }
        setList(list);
    }, [columns, rows, opened, opened, winning, result]);
    return ((0,jsxRuntime_module/* jsx */.Y)(BubblesGame_Context.Provider, { value: { list }, children: (0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [(0,jsxRuntime_module/* jsx */.Y)("style", { children: `[data-bubbles-game-index] > * {
             pointer-events: none;
          }` }), (0,preact_module_js_.toChildArray)(children({
                    columns,
                    rows,
                    itemSize,
                    list,
                })).map((child) => (0,preact_module_js_.cloneElement)(child, {
                    ref: (node) => {
                        if (node instanceof HTMLElement)
                            childrenRef.current = node;
                    },
                }))] }) }));
}
const BubblesGame = Object.assign((0,index_js_.observer)(_BubblesGame), {
    Item: Object.assign(BubblesGameItem, {
        Default: BubblesGameItemDefault,
        Active: BubblesGameItemActive,
        Open: BubblesGameItemOpen,
        Win: BubblesGameItemWin,
        Lose: BubblesGameItemLose,
    }),
});

;// ./src/framework/components.bubbles/BubblesGame/index.tsx


;// ./src/framework/components.bubbles/BubblesRenderGrid/BubblesRenderGrid.tsx





function _BubblesRenderGrid({ children }) {
    const { columns, rows, opened, result, winning, animationStep, reload, setReload } = (0,hooks_module_js_.useContext)(BubblesRender_Context);
    const childrenRef = (0,hooks_module_js_.useRef)(null);
    const [itemSize, setItemSize] = (0,hooks_module_js_.useState)(0);
    const [list, setList] = (0,hooks_module_js_.useState)([]);
    const [animationIndex, setAnimationIndex] = (0,hooks_module_js_.useState)(-1);
    const animationTimeout = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        setTimeout(() => {
            clearTimeout(animationTimeout.current);
            setAnimationIndex(0);
        }, (0,bootstrap.GET_GAME_CONFIG)().pageRender.animationDelay || 0);
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        if (animationIndex <= 0)
            return;
        clearTimeout(animationTimeout.current);
        setAnimationIndex(0);
    }, [reload]);
    (0,hooks_module_js_.useEffect)(() => {
        if (childrenRef === null)
            return;
        const w = childrenRef.current.offsetWidth;
        const h = childrenRef.current.offsetHeight;
        const side = Math.min(w, h);
        const itemSize = Math.min(side / columns, side / rows);
        setItemSize(itemSize);
        childrenRef.current.style.setProperty('--item-size', `${itemSize}px`);
        childrenRef.current.style.setProperty('--columns', columns);
        childrenRef.current.style.setProperty('--rows', rows);
    }, [childrenRef.current, columns, rows]);
    (0,hooks_module_js_.useEffect)(() => {
        if (animationIndex > opened.length + 1) {
            return;
        }
        const isRun = animationIndex >= 0;
        const end = animationIndex >= opened.length;
        const list = [];
        for (let i = 0; i < columns * rows; i++) {
            const sliceOpened = opened.slice(0, animationIndex);
            const isActive = sliceOpened.includes(i) && !end;
            const isOpen = sliceOpened.includes(i) && end;
            list.push({
                active: isRun && isActive,
                win: isRun && end && result === 'won' && i === winning,
                lose: isRun && end && result === 'lost' && i === winning,
                open: isRun && isOpen && i !== winning,
            });
        }
        setList(list);
        if (isRun)
            animationTimeout.current = window.setTimeout(() => {
                setAnimationIndex(animationIndex + 1);
            }, animationStep);
    }, [itemSize, animationIndex]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            columns,
            rows,
            itemSize,
            list,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            ref: (node) => {
                if (node instanceof HTMLElement)
                    childrenRef.current = node;
            },
        })) }));
}
const BubblesRenderGrid = _BubblesRenderGrid;

;// ./src/framework/components.bubbles/BubblesRenderGrid/index.tsx


;// ./src/framework/components.bubbles/BubblesRenderReload/BubblesRenderReload.tsx




function _BubblesRenderReload({ children, onClick = () => { } }) {
    const { setReload } = (0,hooks_module_js_.useContext)(BubblesRender_Context);
    const handleClick = () => {
        setReload(Date.now());
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const BubblesRenderReload = _BubblesRenderReload;

;// ./src/framework/components.bubbles/BubblesRenderReload/index.tsx


;// ./src/framework/components.bubbles/BubblesRender/BubblesRender.tsx






const BubblesRender_Context = (0,preact_module_js_.createContext)({});
function _BubblesRender({ children, betData }) {
    if (!betData)
        return null;
    const columns = betData.game.width;
    const rows = betData.game.height;
    const opened = betData.game.opened;
    const winning = betData.game.winning;
    const result = betData.result;
    const animationStep = (0,bootstrap.GET_GAME_CONFIG)().pageRender.animationDuration / opened.length || 500;
    const [reload, setReload] = (0,hooks_module_js_.useState)(0);
    return ((0,jsxRuntime_module/* jsx */.Y)(BubblesRender_Context.Provider, { value: { columns, rows, opened, winning, result, animationStep, reload, setReload }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children }) }));
}
const BubblesRender = Object.assign(_BubblesRender, {
    Grid: BubblesRenderGrid,
    Reload: BubblesRenderReload,
});

;// ./src/framework/components.bubbles/BubblesRender/index.tsx


;// ./src/framework/components.bubbles/export.ts















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