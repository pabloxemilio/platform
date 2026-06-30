"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[1474,2302,7402,7518],{

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

/***/ 42527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  TowersButton: () => (/* reexport */ TowersButton),
  TowersControlAmount: () => (/* reexport */ TowersControlAmount),
  TowersControlModal: () => (/* reexport */ TowersControlModal),
  TowersControlSize: () => (/* reexport */ TowersControlSize),
  TowersGame: () => (/* reexport */ TowersGame),
  TowersHistory: () => (/* reexport */ TowersHistory),
  TowersRender: () => (/* reexport */ TowersRender),
  TowersWin: () => (/* reexport */ TowersWin)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
;// ./src/framework/components.towers/TowersControlAmount/TowersControlAmount.tsx




function _TowersControlAmount({ children }) {
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
}
const TowersControlAmount = (0,index_js_.observer)(_TowersControlAmount);

;// ./src/framework/components.towers/TowersControlAmount/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
;// ./src/framework/components.towers/TowersButtonPlay/TowersButtonPlay.tsx






function _TowersButtonPlay({ children, onClick = () => { } }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { startGame, placebetProcessing }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'play')
        return null;
    const hundleClick = (e) => {
        if (placebetProcessing)
            return false;
        startGame();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const TowersButtonPlay = (0,index_js_.observer)(_TowersButtonPlay);

;// ./src/framework/components.towers/TowersButtonPlay/index.tsx


;// ./src/framework/components.towers/TowersButtonCashout/TowersButtonCashout.tsx






function _TowersButtonCashout({ children, onClick = () => { } }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { cashout, placebetProcessing }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'cashout')
        return null;
    const hundleClick = (e) => {
        if (placebetProcessing)
            return false;
        cashout();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const TowersButtonCashout = (0,index_js_.observer)(_TowersButtonCashout);

;// ./src/framework/components.towers/TowersButtonCashout/index.tsx


;// ./src/framework/components.towers/TowersButtonCancel/TowersButtonCancel.tsx






function _TowersButtonCancel({ children, onClick = () => { } }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { cancelGame, placebetProcessing }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'cancel')
        return null;
    const hundleClick = (e) => {
        if (placebetProcessing)
            return false;
        cancelGame();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const TowersButtonCancel = (0,index_js_.observer)(_TowersButtonCancel);

;// ./src/framework/components.towers/TowersButtonCancel/index.tsx


;// ./src/framework/components.towers/TowersButtonPlayEvent/TowersButtonPlayEvent.tsx




function _TowersButtonPlayEvent({ children, onClick = () => { } }) {
    const { game: { startGame, placebetProcessing }, } = (0,bootstrap.GET_STORE)();
    const hundleClick = (e) => {
        if (placebetProcessing)
            return false;
        startGame();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const TowersButtonPlayEvent = (0,index_js_.observer)(_TowersButtonPlayEvent);

;// ./src/framework/components.towers/TowersButtonPlayEvent/index.tsx


;// ./src/framework/components.towers/TowersButtonCashoutEvent/TowersButtonCashoutEvent.tsx




function _TowersButtonCashoutEvent({ children, onClick = () => { } }) {
    const { game: { cashout, placebetProcessing }, } = (0,bootstrap.GET_STORE)();
    const hundleClick = (e) => {
        if (placebetProcessing)
            return false;
        cashout();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const TowersButtonCashoutEvent = (0,index_js_.observer)(_TowersButtonCashoutEvent);

;// ./src/framework/components.towers/TowersButtonCashoutEvent/index.tsx


;// ./src/framework/components.towers/TowersButtonCancelEvent/TowersButtonCancelEvent.tsx




function _TowersButtonCancelEvent({ children, onClick = () => { } }) {
    const { game: { cancelGame, placebetProcessing }, } = (0,bootstrap.GET_STORE)();
    const hundleClick = (e) => {
        if (placebetProcessing)
            return false;
        cancelGame();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const TowersButtonCancelEvent = (0,index_js_.observer)(_TowersButtonCancelEvent);

;// ./src/framework/components.towers/TowersButtonCancelEvent/index.tsx


;// ./src/framework/components.towers/TowersButton/TowersButton.tsx











const Context = (0,preact_module_js_.createContext)({});
function _TowersButton({ children }) {
    const { game: { roundId, gameStarted, hit, placebetProcessing }, uiCommon: { amountError }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const props = {
        title: roundId && gameStarted ? (!hit ? t('COMMON.CANCEL') : t('COMMON.CASHOUT')) : t('COMMON.START_GAME'),
        request: placebetProcessing,
        button: roundId && gameStarted ? (!hit ? 'cancel' : 'cashout') : 'play',
        disabled: roundId && gameStarted ? (!hit ? false : !hit && !!gameStarted) : !!amountError,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const TowersButton = Object.assign((0,index_js_.observer)(_TowersButton), {
    Play: Object.assign(TowersButtonPlay, {
        Event: TowersButtonPlayEvent,
    }),
    Cashout: Object.assign(TowersButtonCashout, {
        Event: TowersButtonCashoutEvent,
    }),
    Cancel: Object.assign(TowersButtonCancel, {
        Event: TowersButtonCancelEvent,
    }),
});

;// ./src/framework/components.towers/TowersButton/index.tsx


;// ./src/framework/components.towers/TowersControlModalButton/TowersControlModalButton.tsx




function _TowersControlModalButton({ children, onClick = () => { } }) {
    const { game: { gameStarted, mobileBetslipOpen, setMobileBetslipOpen }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (!gameStarted)
            setMobileBetslipOpen(!mobileBetslipOpen);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ disabled: gameStarted })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const TowersControlModalButton = (0,index_js_.observer)(_TowersControlModalButton);

;// ./src/framework/components.towers/TowersControlModalButton/index.tsx


;// ./src/framework/components.towers/TowersControlModal/TowersControlModal.tsx




function _TowersControlModal({ children }) {
    const { game: { mobileBetslipOpen, setMobileBetslipOpen }, } = (0,bootstrap.GET_STORE)();
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ show: mobileBetslipOpen, onClose: setMobileBetslipOpen }) });
}
const TowersControlModal = Object.assign((0,index_js_.observer)(_TowersControlModal), {
    Button: TowersControlModalButton,
});

;// ./src/framework/components.towers/TowersControlModal/index.tsx


;// ./src/framework/components.towers/TowersControlSizeEvent/TowersControlSizeEvent.tsx




function _TowersControlSizeEvent({ children, index = 0, onClick = () => { } }) {
    const { game: { setLevelsListActive }, } = (0,bootstrap.GET_STORE)();
    const hundleClick = (e) => {
        setLevelsListActive(index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const TowersControlSizeEvent = (0,index_js_.observer)(_TowersControlSizeEvent);

;// ./src/framework/components.towers/TowersControlSizeEvent/index.tsx


;// ./src/framework/components.towers/TowersControlSize/TowersControlSize.tsx





function _TowersControlSize({ children }) {
    const { game: { levelsList, lockedUi }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            list: levelsList,
            title: t('HAMSTA.DIFFICULTY'),
            disabled: lockedUi,
        }) }));
}
const TowersControlSize = Object.assign((0,index_js_.observer)(_TowersControlSize), {
    Event: TowersControlSizeEvent,
});

;// ./src/framework/components.towers/TowersControlSize/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
;// ./src/framework/components.towers/TowersGameItem/TowersGameItem.tsx






const ContextItem = (0,preact_module_js_.createContext)({});
function _TowersGameItem({ children, row, col, onClick = () => { } }) {
    const { game: { tap, place, hit, opened, roundId, gameStarted, tapLoadingIndex }, } = (0,bootstrap.GET_STORE)();
    const { grid } = (0,hooks_module_js_.useContext)(TowersGame_Context);
    const hundleClick = (e) => {
        if (tapLoadingIndex.length === 0 &&
            gameStarted &&
            roundId &&
            opened.length === row &&
            grid[row][col].type === 'default') {
            if (hit) {
                tap(col);
            }
            else {
                place(col);
            }
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(ContextItem.Provider, { value: { row, col }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: hundleClick,
            })) }) }));
}
const TowersGameItem = (0,index_js_.observer)(_TowersGameItem);

;// ./src/framework/components.towers/TowersGameItem/index.tsx


;// ./src/framework/components.towers/TowersGameItemDefault/TowersGameItemDefault.tsx





function _TowersGameItemDefault({ children, onClick = () => { } }) {
    const { grid } = (0,hooks_module_js_.useContext)(TowersGame_Context);
    const { row, col } = (0,hooks_module_js_.useContext)(ContextItem);
    if (grid[row][col].type === 'default')
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: onClick,
            })) }));
    return null;
}
const TowersGameItemDefault = _TowersGameItemDefault;

;// ./src/framework/components.towers/TowersGameItemDefault/index.tsx


;// ./src/framework/components.towers/TowersGameItemActive/TowersGameItemActive.tsx




function _TowersGameItemActive({ children }) {
    const { grid } = (0,hooks_module_js_.useContext)(TowersGame_Context);
    const { row, col } = (0,hooks_module_js_.useContext)(ContextItem);
    if (grid[row][col].type === 'active')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const TowersGameItemActive = _TowersGameItemActive;

;// ./src/framework/components.towers/TowersGameItemActive/index.tsx


;// ./src/framework/components.towers/TowersGameItemEnd/TowersGameItemEnd.tsx




function _TowersGameItemEnd({ children }) {
    const { grid } = (0,hooks_module_js_.useContext)(TowersGame_Context);
    const { row, col } = (0,hooks_module_js_.useContext)(ContextItem);
    if (grid[row][col].type === 'end')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const TowersGameItemEnd = _TowersGameItemEnd;

;// ./src/framework/components.towers/TowersGameItemEnd/index.tsx


;// ./src/framework/components.towers/TowersGameItemLose/TowersGameItemLose.tsx




function _TowersGameItemLose({ children, onLoad = () => { } }) {
    const { grid } = (0,hooks_module_js_.useContext)(TowersGame_Context);
    const { row, col } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (grid[row][col].type === 'lose')
            onLoad();
    }, [grid[row][col].type]);
    if (grid[row][col].type === 'lose')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const TowersGameItemLose = _TowersGameItemLose;

;// ./src/framework/components.towers/TowersGameItemLose/index.tsx


;// ./src/framework/components.towers/TowersGameItemRequest/TowersGameItemRequest.tsx




function _TowersGameItemRequest({ children }) {
    const { grid } = (0,hooks_module_js_.useContext)(TowersGame_Context);
    const { row, col } = (0,hooks_module_js_.useContext)(ContextItem);
    if (grid[row][col].type === 'request')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const TowersGameItemRequest = _TowersGameItemRequest;

;// ./src/framework/components.towers/TowersGameItemRequest/index.tsx


;// ./src/framework/components.towers/TowersGameItemWin/TowersGameItemWin.tsx




function _TowersGameItemWin({ children, onLoad = () => { } }) {
    const { grid } = (0,hooks_module_js_.useContext)(TowersGame_Context);
    const { row, col } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (grid[row][col].type === 'win')
            onLoad();
    }, [grid[row][col].type]);
    if (grid[row][col].type === 'win')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const TowersGameItemWin = _TowersGameItemWin;

;// ./src/framework/components.towers/TowersGameItemWin/index.tsx


;// ./src/framework/components.towers/TowersGame/TowersGame.tsx













const TowersGame_Context = (0,preact_module_js_.createContext)({});
function _TowersGame({ children }) {
    const { game: { tiles, opened, tapLoadingIndex, isOpenedTable, levels, levelsListActive, possibleWinNext, gameStarted }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const [disabled, setDisabled] = (0,hooks_module_js_.useState)(true);
    const [grid, setGrid] = (0,hooks_module_js_.useState)([
        [
            {
                active: false,
                win: false,
                lose: false,
                request: false,
                type: 'default',
                gameEnd: false,
            },
        ],
    ]);
    const [activeRow, setActiveRow] = (0,hooks_module_js_.useState)([]);
    (0,hooks_module_js_.useEffect)(() => {
        setActiveRow([opened.length]);
        const grid = tiles.map((item, index) => {
            return item.map((t, i) => {
                const props = {
                    active: opened[index] === i,
                    win: t === '1',
                    lose: t === '0',
                    request: opened.length === index && tapLoadingIndex.includes(i),
                    type: 'default',
                    gameEnd: opened[index] === i ? isOpenedTable && t !== '1' : t === null && isOpenedTable,
                };
                if (props.active)
                    props.type = 'active';
                if (props.request)
                    props.type = 'request';
                if (props.active && props.win)
                    props.type = 'win';
                if (isOpenedTable && props.lose)
                    props.type = 'end';
                if (props.active && props.lose)
                    props.type = 'lose';
                if (props.type === 'lose' || props.type === 'end') {
                    setActiveRow([index]);
                }
                return props;
            });
        });
        setGrid(grid);
    }, [opened, tiles, tapLoadingIndex]);
    const props = {
        grid: grid,
        gridName: levels[levelsListActive].level,
        gridActiveRow: gameStarted ? activeRow : [],
        request: tapLoadingIndex.length > 0,
        disabled: disabled,
        end: isOpenedTable,
        nextWin: `${currencySign}${(0,shortNumber/* default */.A)(possibleWinNext, rounding)}`,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(TowersGame_Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const TowersGame = Object.assign((0,index_js_.observer)(_TowersGame), {
    Item: Object.assign(TowersGameItem, {
        Default: TowersGameItemDefault,
        Active: TowersGameItemActive,
        Request: TowersGameItemRequest,
        Win: TowersGameItemWin,
        Lose: TowersGameItemLose,
        End: TowersGameItemEnd,
    }),
});

;// ./src/framework/components.towers/TowersGame/index.tsx


;// ./src/framework/components.towers/TowersHistory/TowersHistory.tsx





function _TowersHistory({ children, count }) {
    const { game: { hit, hitList, updateHitList, levelsListActive, gameStarted, gameResult }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    let listTransform = `translateX(0%)`;
    if (typeof count === 'number') {
        const part = 100 / count;
        for (let i = 0; i < hitList.length; i++) {
            if (hitList[i].shadow) {
                const index = i + 1;
                listTransform = `translateX(-${part * index}%)`;
            }
            else {
                break;
            }
        }
    }
    (0,hooks_module_js_.useEffect)(() => {
        updateHitList(count);
    }, [hit, levelsListActive, gameStarted, gameResult]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.MULTIPLIER'),
            list: hitList,
            listTransform,
        }) }));
}
const TowersHistory = (0,index_js_.observer)(_TowersHistory);

;// ./src/framework/components.towers/TowersHistory/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/range.ts
var range = __webpack_require__(51604);
// EXTERNAL MODULE: ./src/framework/helpers/pad.ts
var pad = __webpack_require__(68756);
;// ./src/framework/components.towers/TowersRender/TowersRender.tsx






function _TowersRender({ children, betData }) {
    const { result, game: { opened = [], level, towers = [] }, } = betData;
    const { t } = (0,es_index_js_.useTranslation)();
    const { rows, columns } = (0,bootstrap.GET_GAME_CONFIG)().levels.filter((item) => item.level === level)[0];
    const tiles = (0,range/* default */.A)(rows)
        .slice()
        .map((rowIndex) => (0,pad/* default */.A)(towers[rowIndex].toString(2), columns)
        .split('')
        .map((tile, columnIndex) => (tile === '1' ? '0' : '1')));
    const grid = tiles.map((item, index) => {
        return item.map((t, i) => {
            const props = {
                active: opened[index] === i,
                win: t === '1',
                lose: t === '0',
            };
            return props;
        });
    });
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            result: String(result),
            resultTitle: String(result) === 'won'
                ? t((0,bootstrap.GET_GAME_CONFIG)().pageRender.translateWin)
                : t((0,bootstrap.GET_GAME_CONFIG)().pageRender.translateLose),
            level: String(level),
            levelTitle: t((0,bootstrap.GET_GAME_CONFIG)().pageRender.translateDifficulty),
            grid: grid,
            gridActiveRow: [opened.length - 1],
        }) }));
}
const TowersRender = (0,index_js_.observer)(_TowersRender);

;// ./src/framework/components.towers/TowersRender/index.tsx


;// ./src/framework/components.towers/TowersWinLevel/TowersWinLevel.tsx




function _TowersWinLevel({ children, level = 0, onLoad = () => { } }) {
    const { game: { winLevel }, } = (0,bootstrap.GET_STORE)();
    if (winLevel === level) {
        (0,hooks_module_js_.useEffect)(() => {
            onLoad();
        }, []);
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    }
    return null;
}
const TowersWinLevel = (0,index_js_.observer)(_TowersWinLevel);

;// ./src/framework/components.towers/TowersWinLevel/index.tsx


;// ./src/framework/components.towers/TowersWin/TowersWin.tsx






function _TowersWin({ children }) {
    const { game: { coefficient, payout, winLevel, gameResult }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    if (gameResult === 'won') {
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('MINES.YOU_WIN'),
                profit: (0,shortNumber/* default */.A)(payout, rounding),
                prefix: currencySign,
                coefficient,
                titleCoefficient: t('COMMON.MULTIPLIER'),
                level: winLevel,
            }) }));
    }
    return null;
}
const TowersWin = Object.assign((0,index_js_.observer)(_TowersWin), {
    Level: TowersWinLevel,
});

;// ./src/framework/components.towers/TowersWin/index.tsx


;// ./src/framework/components.towers/export.ts










/***/ }),

/***/ 68756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function pad(binary, length) {
    while (binary.length < length)
        binary = "0" + binary;
    return binary;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pad);


/***/ }),

/***/ 51604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function range(size) {
    return [...Array(size).keys()];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (range);


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