"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2302,4852,6861,7402,7518],{

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

/***/ 74852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CanvasController)
/* harmony export */ });
class CanvasController {
    constructor() {
        this.callbacks = {};
        this.events = {};
    }
    register(id, callback) {
        this.callbacks[id] = callback;
    }
    unregister(id) {
        delete this.callbacks[id];
    }
    invoke(id, ...args) {
        const callback = this.callbacks[id];
        if (callback) {
            callback(...args);
        }
        else {
            console.warn(`Callback with id "${String(id)}" not found.`);
        }
    }
    listCallbacks() {
        return Object.keys(this.callbacks);
    }
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    off(event, callback) {
        if (!this.events[event])
            return;
        this.events[event] = this.events[event].filter((cb) => cb !== callback);
    }
    trigger(event, data) {
        this.events[event]?.forEach((callback) => callback(data));
    }
    listEvents() {
        return Object.keys(this.events);
    }
    destroy() {
        this.callbacks = {};
        this.events = {};
    }
}


/***/ }),

/***/ 50924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* reexport */ VortexCanvasController)
});

// EXTERNAL MODULE: ./src/canvas/controller/Controller.ts
var controller_Controller = __webpack_require__(74852);
;// ./src/framework/components.vortex/VortexCanvasController/VortexCanvasController.ts

class Controller extends controller_Controller["default"] {
}
const VortexCanvasController = new Controller();

;// ./src/framework/components.vortex/VortexCanvasController/index.ts



/***/ }),

/***/ 96861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  VortexAlert: () => (/* reexport */ VortexAlert),
  VortexAmountButtonMinus: () => (/* reexport */ VortexAmountButtonMinus),
  VortexAmountButtonPlus: () => (/* reexport */ VortexAmountButtonPlus),
  VortexCanvasController: () => (/* reexport */ VortexCanvasController/* VortexCanvasController */.$),
  VortexControlAmount: () => (/* reexport */ VortexControlAmount),
  VortexControlButton: () => (/* reexport */ VortexControlButton),
  VortexControlPayout: () => (/* reexport */ VortexControlPayout),
  VortexGame: () => (/* reexport */ VortexGame),
  VortexInfo: () => (/* reexport */ VortexInfo),
  VortexRender: () => (/* reexport */ VortexRender),
  VortexWin: () => (/* reexport */ VortexWin),
  VortexWinBonus: () => (/* reexport */ VortexWinBonus)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
;// ./src/framework/components.vortex/VortexControlButtonCashout/VortexControlButtonCashout.tsx







function _VortexControlButtonCashout({ children, onClick = () => { }, isPartial }) {
    const { game: { amount, lockedButtons, cashout, cashoutProcessing, gameState, placebetProcessing, currentPayout, partialPayout, durationMultiplier, gameConfig: { game }, }, profileCommon: { limit: { maxWin }, }, autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const timer = (0,hooks_module_js_.useRef)(null);
    const disabled = lockedButtons ||
        cashoutProcessing ||
        !gameState.cashable ||
        placebetProcessing ||
        (isPartial && currentPayout === partialPayout && currentPayout !== (0,floor/* default */.A)(Number(amount) + maxWin)) ||
        (isPartial && !gameState.collection.find((item) => item > 1)) ||
        autoBetEnabled;
    const props = {
        title: t('COMMON.CASHOUT'),
        request: cashoutProcessing,
        disabled,
    };
    const handleClick = (e) => {
        if (cashoutProcessing || disabled)
            return false;
        cashout(isPartial);
        onClick(e);
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (gameState.exCollection) {
            timer.current && clearTimeout(timer.current);
            timer.current = null;
            timer.current = setTimeout(() => {
                onClick();
            }, game?.duration * durationMultiplier);
        }
    }, [gameState]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const VortexControlButtonCashout = (0,index_js_.observer)(_VortexControlButtonCashout);

;// ./src/framework/components.vortex/VortexControlButtonCashout/index.tsx


;// ./src/framework/components.vortex/VortexControlButtonCashoutEvent/VortexControlButtonCashoutEvent.tsx





function _VortexControlButtonCashoutEvent({ children, onClick = () => { }, isPartial }) {
    const { game: { lockedButtons, cashout, cashoutProcessing, placebetProcessing, gameState, durationMultiplier, gameConfig: { game }, }, } = (0,bootstrap.GET_STORE)();
    const timer = (0,hooks_module_js_.useRef)(null);
    const handleClick = (e) => {
        if (cashoutProcessing || lockedButtons || placebetProcessing)
            return false;
        cashout(isPartial);
        onClick(e);
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (gameState.exCollection) {
            timer.current && clearTimeout(timer.current);
            timer.current = null;
            timer.current = setTimeout(() => {
                onClick();
            }, game?.duration * durationMultiplier);
        }
    }, [gameState]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const VortexControlButtonCashoutEvent = (0,index_js_.observer)(_VortexControlButtonCashoutEvent);

;// ./src/framework/components.vortex/VortexControlButtonCashoutEvent/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
;// ./src/framework/components.vortex/VortexControlButtonPlay/VortexControlButtonPlay.tsx







function _VortexControlButtonPlay({ children, onClick = () => { }, forcedAction = false, forceSymbol }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const timerRef = (0,hooks_module_js_.useRef)(null);
    const longPressTimerRef = (0,hooks_module_js_.useRef)(null);
    const { game: { roundId, lockedButtons, placebetProcessing, cashoutProcessing, placeBet, setPlaceBetIsHeld, placeBetIsHeld, isFreebetEnabled, gameConfig, isBalanceActual, balanceChecked, amount, }, uiCommon: { amountError, animationEventsCreate, guideShown }, quickModeCommon: { setEnabled, enabled }, freebetsCommon: { freebetEnabled, freebetActive }, balanceCommon: { balanceTimestamp }, profileCommon: { profile: { balance }, }, autobetCommon: { autoBetEnabled, setAutoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const [buttonType, setButtonType] = (0,hooks_module_js_.useState)('hold');
    const [showH2S, setShowH2S] = (0,hooks_module_js_.useState)(false);
    const disabled = !!amountError ||
        !roundId ||
        lockedButtons ||
        placebetProcessing ||
        cashoutProcessing ||
        placeBetIsHeld ||
        (freebetEnabled && freebetActive.left - 1 < 0) ||
        !balanceChecked ||
        (balance <= 0 && !isFreebetEnabled) ||
        autoBetEnabled;
    const props = {
        title: t('COMMON.PLACE_BET'),
        request: placebetProcessing,
        disabled,
        placeBetIsHeld,
        buttonType,
        isFreebet: isFreebetEnabled,
        showH2S,
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (!placeBetIsHeld) {
            enabled ? localStorageHelper/* default */.A.set('alwaysQuickMode', true) : localStorageHelper/* default */.A.remove('alwaysQuickMode');
        }
    }, [enabled]);
    (0,hooks_module_js_.useEffect)(() => {
        if (guideShown) {
            timerRef.current = setTimeout(() => {
                !isFreebetEnabled && setShowH2S(true);
            }, gameConfig.placebetHoldEnableTime);
        }
    }, [guideShown]);
    (0,hooks_module_js_.useEffect)(() => {
        isFreebetEnabled && setShowH2S(false);
    }, [isFreebetEnabled]);
    const handleMouseDown = (e) => {
        if (forcedAction) {
            onClick(e);
            return null;
        }
        if (autoBetEnabled) {
            e.preventDefault();
            setAutoBetEnabled(!autoBetEnabled);
            onClick(e);
            return null;
        }
        if (disabled)
            return false;
        e.preventDefault();
        setPlaceBetIsHeld(true);
        window.placeBetIsHeld = true;
        placeBet(forceSymbol);
        onClick(e);
        if (isFreebetEnabled) {
            setPlaceBetIsHeld(false);
            return null;
        }
        setShowH2S(true);
        longPressTimerRef.current && clearTimeout(longPressTimerRef.current);
        longPressTimerRef.current = setTimeout(() => {
            setEnabled(true);
            animationEventsCreate('QuickModeButtonAlert');
        }, 300);
    };
    const handleMouseUp = () => {
        window.placeBetIsHeld = false;
        !localStorageHelper/* default */.A.get('alwaysQuickMode') && setEnabled(false);
        setPlaceBetIsHeld(false);
        longPressTimerRef.current && clearTimeout(longPressTimerRef.current);
    };
    const handlePreventDefault = (e) => {
        e.preventDefault();
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onMouseDown: handleMouseDown,
            onMouseUp: handleMouseUp,
            onMouseLeave: handleMouseUp,
            onTouchStart: handleMouseDown,
            onTouchEnd: handleMouseUp,
            onTouchMove: handlePreventDefault,
            onContextMenu: handlePreventDefault,
        })) }));
}
const VortexControlButtonPlay = (0,index_js_.observer)(_VortexControlButtonPlay);

;// ./src/framework/components.vortex/VortexControlButtonPlay/index.tsx


;// ./src/framework/components.vortex/VortexControlButtonPlayEvent/VortexControlButtonPlayEvent.tsx




function _VortexControlButtonPlayEvent({ children, onClick = () => { } }) {
    const { game: { lockedButtons, placebetProcessing, placeBet }, uiCommon: { amountError }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (placebetProcessing || lockedButtons || !!amountError)
            return false;
        placeBet();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const VortexControlButtonPlayEvent = (0,index_js_.observer)(_VortexControlButtonPlayEvent);

;// ./src/framework/components.vortex/VortexControlButtonPlayEvent/index.tsx


;// ./src/framework/components.vortex/VortexControlButtonAutoplay/VortexControlButtonAutoplay.tsx






function _VortexControlButtonAutoplay({ children, onClick = () => { } }) {
    const { game: { placeBet, isFreebetEnabled, placebetProcessing, eventsAreReady, superBonusState, winBonusScreen, winScreen, }, autobetCommon: { autoBetEnabled, setAutoBetEnabled }, uiCommon: { amountError }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const timer = (0,hooks_module_js_.useRef)(null);
    const [lockedOnTimeout, setLockedOnTimeout] = (0,hooks_module_js_.useState)(false);
    const disabled = !!(!isFreebetEnabled && amountError) ||
        lockedOnTimeout ||
        !eventsAreReady ||
        !!superBonusState ||
        isFreebetEnabled ||
        winBonusScreen ||
        winScreen ||
        (placebetProcessing && !autoBetEnabled);
    const props = {
        title: autoBetEnabled ? 'stop' : 'auto',
        disabled,
        active: autoBetEnabled,
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (!isFreebetEnabled && amountError) {
            setAutoBetEnabled(false);
        }
    }, [amountError]);
    const handleClick = (e) => {
        if (disabled || (!autoBetEnabled && lockedOnTimeout))
            return false;
        if (autoBetEnabled) {
            clearTimeout(timer.current);
            timer.current = null;
            setLockedOnTimeout(true);
            timer.current = setTimeout(() => {
                setLockedOnTimeout(false);
            }, 500);
        }
        setAutoBetEnabled(!autoBetEnabled);
        onClick(!autoBetEnabled);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const VortexControlButtonAutoplay = (0,index_js_.observer)(_VortexControlButtonAutoplay);

;// ./src/framework/components.vortex/VortexControlButtonAutoplay/index.tsx


;// ./src/framework/components.vortex/VortexControlButton/VortexControlButton.tsx







function _VortexControlButton({ children }) {
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const VortexControlButton = Object.assign((0,index_js_.observer)(_VortexControlButton), {
    Play: Object.assign(VortexControlButtonPlay, {
        Event: VortexControlButtonPlayEvent,
    }),
    Cashout: Object.assign(VortexControlButtonCashout, {
        Event: VortexControlButtonCashoutEvent,
    }),
    Autoplay: VortexControlButtonAutoplay,
});

;// ./src/framework/components.vortex/VortexControlButton/index.tsx


;// ./src/framework/components.vortex/VortexControlAmountTooltip/VortexControlAmountTooltip.tsx





function _VortexControlAmountTooltip({ children }) {
    const { profileCommon: { profile: { balance, currencySign }, limit: { maxBet, maxWin, minBet }, }, uiCommon: { amountError }, game: { amount, gameConfig }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [showTooltip, setShowTooltip] = (0,hooks_module_js_.useState)(false);
    const [tooltipText, setTooltipText] = (0,hooks_module_js_.useState)(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
    const tooltipTimeout = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        if (Number(amount) === maxBet || amountError) {
            setShowTooltip(true);
            setTooltipText(amountError ?? `${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
            if (tooltipTimeout.current) {
                clearTimeout(tooltipTimeout.current);
            }
            tooltipTimeout.current = window.setTimeout(() => {
                setShowTooltip(false);
                setTooltipText(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
            }, gameConfig.amountTooltipTimeout);
        }
    }, [amount]);
    (0,hooks_module_js_.useEffect)(() => {
        setTooltipText(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
    }, [maxWin]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            titleMaxWin: tooltipText,
            showTooltip,
        }) }));
}
const VortexControlAmountTooltip = (0,index_js_.observer)(_VortexControlAmountTooltip);

;// ./src/framework/components.vortex/VortexControlAmountTooltip/index.tsx


;// ./src/framework/components.vortex/VortexControlAmount/VortexControlAmount.tsx







const ContextButtons = (0,preact_module_js_.createContext)({});
function _VortexControlAmount({ children }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet }, splitTest, }, game: { amount, setAmount, lockedUi, placebetProcessing, cashoutProcessing, setCurrentAmountId, currentAmountId, amountsMap, gameState: { initial }, gameConfig: { game: { duration }, HTSnotifDuration, }, showHTSNotif, setShowHTSNotif, isFreebetEnabled, }, uiCommon: { amountError }, freebetsCommon: { freebetEnabled, freebetsSuccessIndexList, freebetActive }, } = (0,bootstrap.GET_STORE)();
    const [cashoutInProgress, setCashoutInProgress] = (0,hooks_module_js_.useState)(false);
    const variantValue = splitTest?.variantValue;
    const variantType = splitTest?.variantType;
    const isTest = variantValue === 'vortex_less_bet_steps' && variantType === 'test';
    const timer = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        if (cashoutProcessing) {
            setCashoutInProgress(true);
        }
        setTimeout(() => {
            setCashoutInProgress(false);
        }, duration);
    }, [cashoutProcessing]);
    (0,hooks_module_js_.useEffect)(() => {
        if (isTest) {
            amountsMap[currentAmountId] > balance ? setCurrentAmountId(0) : setAmount(amountsMap[currentAmountId]);
        }
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        if (showHTSNotif) {
            clearTimeout(timer.current);
            timer.current = null;
            timer.current = setTimeout(() => {
                setShowHTSNotif(false);
            }, HTSnotifDuration ? HTSnotifDuration + 500 : 3500);
        }
    }, [showHTSNotif]);
    const handleLeft = () => {
        setCurrentAmountId(currentAmountId === 0 ? (isFinite ? 0 : amountsMap.length - 1) : currentAmountId - 1);
    };
    const handleRight = () => {
        if (amountsMap[currentAmountId] > balance)
            return null;
        setCurrentAmountId(currentAmountId === amountsMap.length - 1 ? (isFinite ? currentAmountId : 0) : currentAmountId + 1);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,jsxRuntime_module/* jsx */.Y)(ContextButtons.Provider, { value: {
                handleRight,
                handleLeft,
                disabled: lockedUi || placebetProcessing,
            }, children: children({
                title: t('COMMON.BET_AMOUNT'),
                titleError: amountError,
                disabled: lockedUi || placebetProcessing || freebetEnabled,
                defaultValue: Number(amount),
                min: minBet,
                max: maxBet,
                onChange: setAmount,
                prefix: currencySign || '',
                connectBalance: isFreebetEnabled ? undefined : balance,
                rounding: rounding > 0 ? rounding - 1 : rounding,
                gtmAction: 'input_value_changed',
                pushGtmDataOnValueChange: true,
                isTest,
                showHTSNotif: showHTSNotif,
            }) }) }));
}
const VortexControlAmount = Object.assign((0,index_js_.observer)(_VortexControlAmount), {
    Tooltip: VortexControlAmountTooltip,
});

;// ./src/framework/components.vortex/VortexControlAmount/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
;// ./src/framework/components.vortex/VortexControlPayout/VortexControlPayout.tsx






function _VortexControlPayout({ children }) {
    let { profileCommon: { profile: { currencySign, rounding }, limit: { maxWin }, }, game: { currentPayout: payout, partialPayout, amount, gameState }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const partPayout = (partialPayout === payout && payout !== (0,floor/* default */.A)(Number(amount) + maxWin)) ||
        (!gameState.collection?.find((item) => item > 1) && !gameState.initial) ||
        gameState.initial
        ? null
        : partialPayout;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.PAYOUT'),
            titlePartial: t('VORTEX.PART_CASHOUT'),
            payout: payout,
            payoutShort: (0,shortNumber/* default */.A)(payout, rounding),
            payoutWithSign: `${currencySign}${(0,shortNumber/* default */.A)(payout, rounding)}`,
            payoutShortWithSign: `${currencySign}${(0,shortNumber/* default */.A)(payout, rounding)}`,
            partialPayout: partPayout || '-',
            partialPayoutShort: partPayout ? (0,shortNumber/* default */.A)(partialPayout, rounding) : '-',
            partialPayoutWithSign: partPayout ? `${currencySign}${(0,shortNumber/* default */.A)(partialPayout, rounding)}` : '-',
            partialPayoutShortWithSign: partPayout ? `${currencySign}${(0,shortNumber/* default */.A)(partialPayout, rounding)}` : '-',
            sign: currencySign,
        }) }));
}
const VortexControlPayout = (0,index_js_.observer)(_VortexControlPayout);

;// ./src/framework/components.vortex/VortexControlPayout/index.tsx


;// ./src/framework/components.vortex/VortexGameCanvas/VortexGameCanvas.tsx





const defaultCoeffs = (0,bootstrap.GET_GAME_CONFIG)()?.defaultCoeffs || {
    Symbol1: [0, 1.55, 4.85, 10, 7],
    Symbol2: [0, 2.5, 7.7, 16, 27.5, 44, 20.5],
    Symbol3: [0, 3.9, 12.5, 28, 52, 85, 133, 200, 200],
};
function _VortexGameCanvas({ children, Vortex }) {
    const { game: { settings, resultUpdater, gameState: { collection, symbol, bonusWin, superBonus, exCollection }, superBonusState, gameConfig, symbolAliases, durationMultiplier, }, } = (0,bootstrap.GET_STORE)();
    const rails = (0,hooks_module_js_.useRef)([0, 0, 0]);
    const game = (0,hooks_module_js_.useRef)();
    (0,hooks_module_js_.useEffect)(() => {
        const el = document.querySelector('#vortex');
        const loading = async () => {
            if (el) {
                game.current = new Vortex(el);
            }
        };
        loading();
        return () => {
            if (el)
                el.innerHTML = '';
            game.current?.destroy();
        };
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        if (game.current)
            game.current?.setSettings(settings ?? defaultCoeffs);
    }, [settings]);
    function setSteps(color, current, target) {
        const diff = target - current;
        for (let i = 0; i < Math.abs(diff); i++) {
            game.current?.setStep(color, current > target);
        }
    }
    (0,hooks_module_js_.useEffect)(() => {
        const [red, green, blue] = rails.current;
        const [r, g, b] = exCollection ?? collection;
        setTimeout(() => {
            if (r !== red) {
                setSteps('red', r, red);
            }
            if (g !== green) {
                setSteps('green', g, green);
            }
            if (b !== blue) {
                setSteps('blue', b, blue);
            }
        }, gameConfig.game.duration * durationMultiplier);
        rails.current = exCollection ?? collection;
    }, [collection, exCollection]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!bonusWin ||
            ((gameConfig.gameServerId === 'vortex' || gameConfig.gameServerId === 'vortexhalloween') &&
                symbolAliases[symbol] === 'red'))
            return;
        const color = symbolAliases[symbol] || 'red';
        setTimeout(() => {
            game.current?.setStep(color, 'true');
        }, gameConfig.game.duration * durationMultiplier);
    }, [bonusWin]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            id: 'vortex',
        })) }));
}
const VortexGameCanvas = (0,index_js_.observer)(_VortexGameCanvas);

;// ./src/framework/components.vortex/VortexGameCanvas/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/animate.ts
var animate = __webpack_require__(93974);
;// ./src/framework/components.vortex/VortexGameLine/VortexGameLine.tsx






const timingFunction = {
    linear: animate/* linear */.sn,
    makeEaseOut: (0,animate/* makeEaseOut */.L4)(animate/* easeOutCubic */.p_),
    easeOutCubic: animate/* easeOutCubic */.p_,
};
function _VortexGameLine({ children, onItem = () => { }, onFinish = () => { }, onStart = () => { } }) {
    const { game: { gameState, resultUpdater, roundId, gameConfig, superBonusState, durationMultiplier, setShowBonusGame }, uiCommon: { isVisible, screenWidth, screenHeight, noAnimation }, } = (0,bootstrap.GET_STORE)();
    const [blur, setBlur] = (0,hooks_module_js_.useState)(false);
    const [animation, setAnimation] = (0,hooks_module_js_.useState)(false);
    const childrenRef = (0,hooks_module_js_.useRef)();
    const [winIndex, setWinIndex] = (0,hooks_module_js_.useState)(-1);
    const [map, setMap] = (0,hooks_module_js_.useState)([]);
    const resetTimeout = (0,hooks_module_js_.useRef)();
    (0,hooks_module_js_.useEffect)(() => {
        if (!childrenRef.current)
            return;
        const winIndexObj = winItemIndex();
        const itemHeight = parseFloat(getComputedStyle(childrenRef.current).width);
        const itemYFirst = itemHeight * winIndexObj.first;
        childrenRef.current.style.transform = `translateY(${itemYFirst}px)`;
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        let map = [...gameConfig.game.map, ...gameConfig.game.map];
        let count = 0;
        while (count < gameConfig.game.sliderSettings.mapLength) {
            map = [...map, ...gameConfig.game.map];
            count++;
        }
        map = [...map, ...gameConfig.game.map, ...gameConfig.game.map];
        setMap(map.map((item, index) => ({
            symbol: item,
            win: index === winIndex,
        })));
    }, [winIndex, superBonusState]);
    (0,hooks_module_js_.useEffect)(() => {
        setShowBonusGame(map.find((item) => item.win) && !animation && !!superBonusState);
    }, [map, superBonusState, animation]);
    (0,hooks_module_js_.useEffect)(() => {
        if (roundId === '')
            return;
        if (!childrenRef.current)
            return;
        const winIndexObj = winItemIndex();
        let itemCount = 0;
        setBlur(true);
        setAnimation(true);
        onStart();
        (0,animate/* animate */.i0)({
            duration: noAnimation ? 1 : gameConfig.game.duration * durationMultiplier,
            timing: timingFunction[gameConfig.game.timingFunction],
            draw: function (progress) {
                if (!childrenRef.current)
                    return;
                if (resetTimeout.current) {
                    clearTimeout(resetTimeout.current);
                }
                const itemHeight = parseFloat(getComputedStyle(childrenRef.current).width);
                const itemYFirst = itemHeight * winIndexObj.first;
                const itemYLast = itemHeight * winIndexObj.last;
                const y = itemYFirst + (itemYLast - itemYFirst) * progress;
                childrenRef.current.style.transform = `translateY(${y}px)`;
                const computedItemCount = Math.round((itemYFirst + (itemYLast - itemYFirst) * progress) / itemHeight);
                if (computedItemCount > itemCount) {
                    const item = {
                        ...map[computedItemCount],
                        last: computedItemCount === winIndexObj.last,
                        symbol: gameState.symbol,
                    };
                    delete item.win;
                    if (isVisible)
                        onItem(item);
                    itemCount = computedItemCount;
                }
                if (progress >= 0.95) {
                    setBlur(false);
                }
                if (progress === 1) {
                    childrenRef.current.style.transform = `translateY(${itemYFirst}px)`;
                    const item = {
                        ...map[computedItemCount],
                    };
                    delete item.win;
                    if (isVisible)
                        onFinish(item);
                    setWinIndex(winIndexObj.first);
                    setAnimation(false);
                    resetTimeout.current = window.setTimeout(() => {
                        setWinIndex(-1);
                    }, gameConfig.superBonusDuration);
                }
            },
        });
        return () => { };
    }, [resultUpdater]);
    (0,hooks_module_js_.useEffect)(() => {
        if (roundId === '')
            return;
        if (!childrenRef.current)
            return;
        const winIndexObj = winItemIndex();
        const itemHeight = parseFloat(getComputedStyle(childrenRef.current).width);
        const itemYFirst = itemHeight * winIndexObj.first;
        childrenRef.current.style.transform = `translateY(${itemYFirst}px)`;
    }, [screenWidth, screenHeight]);
    const winItemIndex = () => {
        const index = gameConfig.game.map.findIndex((symbol) => symbol === gameState.symbol);
        if (index === -1)
            return {
                first: gameConfig.game.map.length,
                last: gameConfig.game.map.length,
            };
        return {
            first: index + gameConfig.game.map.length * 2,
            last: index + gameConfig.game.sliderSettings.mapLength * gameConfig.game.map.length,
        };
    };
    const props = {
        animation,
        map,
        bonusWin: gameState.bonusWin,
        superBonusState: {
            isActive: !!superBonusState,
            multiplier: superBonusState?.multiplier,
            index: superBonusState?.index,
            range: superBonusState?.range,
        },
        blur,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            ref: (node) => {
                if (node instanceof HTMLElement)
                    childrenRef.current = node;
            },
        })) }));
}
const VortexGameLine = (0,index_js_.observer)(_VortexGameLine);

;// ./src/framework/components.vortex/VortexGameLine/index.tsx


// EXTERNAL MODULE: ./src/framework/components.vortex/VortexCanvasController/index.ts + 1 modules
var VortexCanvasController = __webpack_require__(50924);
;// ./src/framework/components.vortex/VortexGameBonusSlider/VortexGameBonusSlider.tsx







VortexCanvasController/* VortexCanvasController */.$.invoke('hideIcons');
const VortexGameBonusSlider_timingFunction = {
    linear: animate/* linear */.sn,
    makeEaseOut: (0,animate/* makeEaseOut */.L4)(animate/* easeOutCubic */.p_),
    easeOutCubic: animate/* easeOutCubic */.p_,
};
function _VortexGameBonusSlider({ children, onItem = () => { }, onFinish = () => { }, onStart = () => { } }) {
    const { game: { roundId, gameConfig, superBonusState }, uiCommon: { isVisible, noAnimation }, } = (0,bootstrap.GET_STORE)();
    const [animation, setAnimation] = (0,hooks_module_js_.useState)(false);
    const childrenRef = (0,hooks_module_js_.useRef)();
    const [winIndex, setWinIndex] = (0,hooks_module_js_.useState)(-1);
    const [map, setMap] = (0,hooks_module_js_.useState)([]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!childrenRef.current)
            return;
        const winIndexObj = winItemIndex();
        const itemHeight = parseFloat(getComputedStyle(childrenRef.current).width);
        const itemYFirst = itemHeight * winIndexObj.first;
        childrenRef.current.style.transform = `translateY(${itemYFirst}px)`;
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        if (!superBonusState)
            return;
        let map = [...superBonusState.range, ...superBonusState.range];
        let count = 0;
        while (count < gameConfig.game.sliderSettings.mapLength) {
            map = [...map, ...superBonusState.range];
            count++;
        }
        map = [...map, ...superBonusState.range, ...superBonusState.range];
        if (winIndex !== -1) {
            const amountRange = [...superBonusState.range];
            VortexCanvasController/* VortexCanvasController */.$.invoke('showBonusGame', amountRange, map[winIndex]);
        }
        setMap(map.map((item, index) => ({
            amount: item,
            win: index === winIndex,
        })));
    }, [winIndex, superBonusState]);
    (0,hooks_module_js_.useEffect)(() => {
        if (roundId === '')
            return;
        if (!childrenRef.current)
            return;
        const winIndexObj = winItemIndex();
        let itemCount = 0;
        setAnimation(true);
        onStart();
        (0,animate/* animate */.i0)({
            duration: noAnimation ? 1 : gameConfig.game.bonusSpinDuration,
            timing: VortexGameBonusSlider_timingFunction[gameConfig.game.timingFunction],
            draw: function (progress) {
                if (!childrenRef.current)
                    return;
                if (!childrenRef.current.childNodes[0] || !(childrenRef.current.childNodes[0] instanceof Element))
                    return;
                const itemHeight = parseFloat(getComputedStyle(childrenRef.current.childNodes[0]).height);
                const itemYFirst = itemHeight * winIndexObj.first;
                const itemYLast = itemHeight * winIndexObj.last;
                const y = itemYFirst + (itemYLast - itemYFirst) * progress;
                childrenRef.current.style.transform = `translateY(${y}px)`;
                const computedItemCount = Math.round((itemYFirst + (itemYLast - itemYFirst) * progress) / itemHeight);
                if (computedItemCount > itemCount) {
                    const item = {
                        ...map[computedItemCount],
                        last: computedItemCount === winIndexObj.last,
                        amount: superBonusState.multiplier,
                    };
                    delete item.win;
                    if (isVisible)
                        onItem(item);
                    itemCount = computedItemCount;
                }
                if (progress === 1) {
                    childrenRef.current.style.transform = `translateY(${itemYFirst}px)`;
                    const item = {
                        ...map[computedItemCount],
                    };
                    delete item.win;
                    if (isVisible)
                        onFinish(item);
                    setWinIndex(winIndexObj.first);
                    setAnimation(false);
                    setTimeout(() => {
                        setWinIndex(-1);
                    }, gameConfig.superBonusDuration);
                }
            },
        });
    }, []);
    const winItemIndex = () => {
        const index = superBonusState.index;
        if (index === -1)
            return {
                first: 0,
                last: 0,
            };
        const p = {
            first: index + superBonusState.range.length * 2,
            last: index + gameConfig.game.sliderSettings.mapLength * superBonusState.range.length,
        };
        return p;
    };
    const props = {
        animation,
        map,
        superBonusState: {
            isActive: !!superBonusState,
            multiplier: superBonusState?.multiplier,
            index: superBonusState?.index,
            range: superBonusState?.range,
        },
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            ref: (node) => {
                if (node instanceof HTMLElement)
                    childrenRef.current = node;
            },
        })) }));
}
const VortexGameBonusSlider = (0,index_js_.observer)(_VortexGameBonusSlider);

;// ./src/framework/components.vortex/VortexGameBonusSlider/index.tsx


// EXTERNAL MODULE: ./src/framework/components.vortexcricket/VortexCricketCanvasController/index.ts + 1 modules
var VortexCricketCanvasController = __webpack_require__(37004);
;// ./src/framework/components.vortex/VortexGameBonusCanvas/VortexGameBonusCanvas.tsx






function _VortexGameBonusCanvas() {
    const { game: { superBonusState }, } = (0,bootstrap.GET_STORE)();
    (0,hooks_module_js_.useEffect)(() => {
        if (!superBonusState)
            return;
        VortexCanvasController/* VortexCanvasController */.$.invoke('showBonusGame', superBonusState.range, superBonusState.multiplier);
        VortexCricketCanvasController/* VortexCricketCanvasController */.e.invoke('showBonus');
        VortexCricketCanvasController/* VortexCricketCanvasController */.e.invoke('spinBonus', superBonusState.multiplier);
    }, [superBonusState]);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, {});
}
const VortexGameBonusCanvas = (0,index_js_.observer)(_VortexGameBonusCanvas);

;// ./src/framework/components.vortex/VortexGameBonusCanvas/index.tsx


;// ./src/framework/components.vortex/VortexGame/VortexGame.tsx





function _VortexGame({ children }) {
    return { children };
}
const VortexGame = Object.assign((0,index_js_.observer)(_VortexGame), {
    Canvas: VortexGameCanvas,
    Line: VortexGameLine,
    BonusSlider: VortexGameBonusSlider,
    BonusCanvas: VortexGameBonusCanvas
});

;// ./src/framework/components.vortex/VortexGame/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
;// ./src/framework/components.vortex/VortexWin/VortexWin.tsx






function _VortexWin({ children, level = 0, onLoad = () => { } }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { game: { winLevel, winScreen, payout, coefficient, placebetProcessing }, profileCommon: { profile: { currencySign, rounding }, settings: { options }, }, uiCommon: { isVisible }, } = (0,bootstrap.GET_STORE)();
    const [showLocal, setShowLocal] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useEffect)(() => {
        if (winScreen && isVisible) {
            onLoad();
        }
        if (winScreen) {
            setShowLocal(true);
        }
    }, [winScreen]);
    (0,hooks_module_js_.useEffect)(() => {
        if (winScreen && winLevel === level) {
            onLoad();
        }
    }, [winScreen, winLevel]);
    (0,hooks_module_js_.useEffect)(() => {
        if (placebetProcessing) {
            setShowLocal(true);
        }
    }, [placebetProcessing]);
    (0,hooks_module_js_.useEffect)(() => {
        if (placebetProcessing) {
            setShowLocal(false);
        }
    }, [placebetProcessing]);
    const hideByClick = options?.customBr;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            show: (hideByClick ? showLocal : winScreen) && winLevel === level,
            level: winLevel,
            title: t('MINES.YOU_WIN'),
            profit: String((0,truncateDecimals/* default */.A)(payout, rounding)),
            prefix: currencySign || '',
            coefficient: coefficient,
            titleCoefficient: t('COMMON.MULTIPLIER'),
        }) }));
}
const VortexWin = (0,index_js_.observer)(_VortexWin);

;// ./src/framework/components.vortex/VortexWin/index.tsx


;// ./src/framework/components.vortex/VortexWinBonus/VortexWinBonus.tsx







function _VortexWinBonus({ children, onLoad = () => { } }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { game: { payout, coefficient, gameConfig: { superBonusDuration, winDuration }, superBonusState, winBonusScreen, showBonusWinScreen, }, profileCommon: { profile: { currencySign, rounding }, }, uiCommon: { isVisible }, } = (0,bootstrap.GET_STORE)();
    const [localMultiplier, setLocalMultiplier] = (0,hooks_module_js_.useState)(0);
    (0,hooks_module_js_.useEffect)(() => {
        if (!superBonusState)
            return;
        if (superBonusState.multiplier) {
            setLocalMultiplier(superBonusState.multiplier);
        }
        setTimeout(() => {
            setLocalMultiplier(superBonusState.multiplier);
            onLoad();
            showBonusWinScreen();
        }, superBonusDuration * 0.8);
    }, [superBonusState]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            show: winBonusScreen,
            title: t('MINES.YOU_WIN'),
            profit: String((0,truncateDecimals/* default */.A)(payout, rounding)),
            prefix: currencySign || '',
            coefficient: (0,floor/* default */.A)(coefficient - localMultiplier, 2),
            totalCoefficient: coefficient,
            bonusCoefficient: localMultiplier,
            titleCoefficient: t('COMMON.MULTIPLIER'),
            titleBonusCoefficient: t('COMMON.BONUS_GAME'),
        }) }));
}
const VortexWinBonus = (0,index_js_.observer)(_VortexWinBonus);

;// ./src/framework/components.vortex/VortexWinBonus/index.tsx


;// ./src/framework/components.vortex/VortexInfoModal/VortexInfoModal.tsx



function _VortexInfoModal({ children }) {
    const { uiCommon: { modal, setModal }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            show: modal['vortexInfo']?.render,
            open: modal['vortexInfo']?.open,
            close: modal['vortexInfo']?.close,
            onClose: (value) => {
                setModal({
                    modalName: 'vortexInfo',
                    render: value,
                });
            },
        }) }));
}
const VortexInfoModal = (0,index_js_.observer)(_VortexInfoModal);

;// ./src/framework/components.vortex/VortexInfoModal/index.tsx


;// ./src/framework/components.vortex/VortexInfoModalButton/VortexInfoModalButton.tsx




function _VortexInfoModalButton({ children }) {
    const { uiCommon: { setModal }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: () => {
                setModal({
                    modalName: 'vortexInfo',
                    render: true,
                });
            },
        })) }));
}
const VortexInfoModalButton = (0,index_js_.observer)(_VortexInfoModalButton);

;// ./src/framework/components.vortex/VortexInfoModalButton/index.tsx


;// ./src/framework/components.vortex/VortexInfo/VortexInfo.tsx





function _VortexInfo({ children }) {
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            line1: t('VORTEX.BONUS.INFO_1'),
            line2: t('VORTEX.BONUS.INFO_2'),
        }) }));
}
const VortexInfo = Object.assign((0,index_js_.observer)(_VortexInfo), {
    Modal: Object.assign(VortexInfoModal, {
        Button: VortexInfoModalButton,
    }),
});

;// ./src/framework/components.vortex/VortexInfo/index.tsx


;// ./src/framework/components.vortex/VortexRender/VortexRender.tsx


function _VortexRender({ children, betData }) {
    if (!betData)
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            collection: betData.game.state.collection,
        }) }));
}
const VortexRender = (0,index_js_.observer)(_VortexRender);

;// ./src/framework/components.vortex/VortexRender/index.tsx


// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js
var compat_module = __webpack_require__(17402);
;// ./src/framework/components.vortex/VortexAlertMessage/VortexAlertMessage.tsx



function _VortexAlertMessage({ children }) {
    const { message } = (0,hooks_module_js_.useContext)(Context);
    if (!message)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(message) });
}
const VortexAlertMessage = _VortexAlertMessage;

;// ./src/framework/components.vortex/VortexAlertMessage/index.tsx


;// ./src/framework/components.vortex/VortexAlertButtonAmount/VortexAlertButtonAmount.tsx





function _VortexAlertButtonAmount({ children, onClick = () => { } }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { game: { setMessagesList }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        setMessagesList({
            text: freebetEnabled ? 'VORTEX.NOTIF5' : 'VORTEX.NOTIF1',
        });
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const VortexAlertButtonAmount = (0,index_js_.observer)(_VortexAlertButtonAmount);

;// ./src/framework/components.vortex/VortexAlertButtonAmount/index.tsx


;// ./src/framework/components.vortex/VortexAlertButtonCashout/VortexAlertButtonCashout.tsx






function _VortexAlertButtonCashout({ children, isPartial, onClick = () => { } }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { game: { setMessagesList, gameState }, } = (0,bootstrap.GET_STORE)();
    const [hasFilledSectors, setHasFilledSectors] = (0,hooks_module_js_.useState)(null);
    const [sumFilledSectors, setSumFilledSectors] = (0,hooks_module_js_.useState)(null);
    (0,hooks_module_js_.useEffect)(() => {
        setHasFilledSectors(gameState.collection.some((item) => item >= 2));
        setSumFilledSectors(gameState.collection.reduce((acc, curr) => acc + curr));
    }, [gameState.collection]);
    const handleClick = (e) => {
        setMessagesList({
            text: isPartial
                ? sumFilledSectors >= 2 && hasFilledSectors
                    ? t('VORTEX.NOTIF6')
                    : t('VORTEX.NOTIF4')
                : t('VORTEX.NOTIF2'),
        });
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const VortexAlertButtonCashout = (0,index_js_.observer)(_VortexAlertButtonCashout);

;// ./src/framework/components.vortex/VortexAlertButtonCashout/index.tsx


;// ./src/framework/components.vortex/VortexAlertButtonPlay/VortexAlertButtonPlay.tsx






function _VortexAlertButtonPlay({ children, onClick = () => { } }) {
    const [clicks, setClicks] = (0,hooks_module_js_.useState)(0);
    const { t } = (0,es_index_js_.useTranslation)();
    const { game: { setMessagesList }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        setClicks((prev) => prev + 1);
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (clicks === 3) {
            setMessagesList({
                text: t('VORTEX.NOTIF3'),
            });
            setClicks(0);
        }
    }, [clicks]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const VortexAlertButtonPlay = (0,index_js_.observer)(_VortexAlertButtonPlay);

;// ./src/framework/components.vortex/VortexAlertButtonPlay/index.tsx


;// ./src/framework/components.vortex/VortexAlert/VortexAlert.tsx











const Context = (0,preact_module_js_.createContext)({});
function _VortexAlert({ children, time = 3000 }) {
    const { game: { messagesList, updateMessagesList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [message, setMessage] = (0,hooks_module_js_.useState)();
    const container = document.getElementById('modal');
    (0,hooks_module_js_.useEffect)(() => {
        if (messagesList.length === 0)
            return setMessage(undefined);
        if (message != undefined)
            return;
        const firstMessage = messagesList[0];
        setMessage({
            ...firstMessage,
            text: t(firstMessage.text || ''),
        });
        setTimeout(() => {
            updateMessagesList(messagesList.slice(1));
            setMessage(undefined);
        }, time);
    }, [messagesList, message]);
    return (0,compat_module.createPortal)((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: { message }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children }) }), container);
}
const VortexAlert = Object.assign((0,index_js_.observer)(_VortexAlert), {
    Message: VortexAlertMessage,
    ButtonAmount: VortexAlertButtonAmount,
    ButtonCashout: VortexAlertButtonCashout,
    ButtonPlay: VortexAlertButtonPlay,
});

;// ./src/framework/components.vortex/VortexAlert/index.tsx


;// ./src/framework/components.vortex/VortexAmountButtonMinus/VortexAmountButtonMinus.tsx




function _VortexAmountButtonMinus({ children, onClick = () => { } }) {
    const { handleLeft, disabled } = (0,hooks_module_js_.useContext)(ContextButtons);
    const handleClick = (e) => {
        if (disabled)
            return;
        handleLeft();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled: disabled,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const VortexAmountButtonMinus = _VortexAmountButtonMinus;

;// ./src/framework/components.vortex/VortexAmountButtonMinus/index.tsx


;// ./src/framework/components.vortex/VortexAmountButtonPlus/VortexAmountButtonPlus.tsx




function _VortexAmountButtonPlus({ children, onClick = () => { } }) {
    const { handleRight, disabled } = (0,hooks_module_js_.useContext)(ContextButtons);
    const handleClick = (e) => {
        if (disabled)
            return;
        handleRight();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled: disabled,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const VortexAmountButtonPlus = _VortexAmountButtonPlus;

;// ./src/framework/components.vortex/VortexAmountButtonPlus/index.tsx


;// ./src/framework/components.vortex/export.ts














/***/ }),

/***/ 37004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* reexport */ VortexCricketCanvasController)
});

// EXTERNAL MODULE: ./src/canvas/controller/Controller.ts
var controller_Controller = __webpack_require__(74852);
;// ./src/framework/components.vortexcricket/VortexCricketCanvasController/VortexCricketCanvasController.ts

class Controller extends controller_Controller["default"] {
}
const VortexCricketCanvasController = new Controller();

;// ./src/framework/components.vortexcricket/VortexCricketCanvasController/index.ts



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