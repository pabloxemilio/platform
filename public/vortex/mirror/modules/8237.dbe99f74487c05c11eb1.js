"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2302,4852,7402,7518,8237],{

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

/***/ 57855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* reexport */ Vortex2CanvasController)
});

// EXTERNAL MODULE: ./src/canvas/controller/Controller.ts
var controller_Controller = __webpack_require__(74852);
;// ./src/framework/components.vortex2/Vortex2CanvasController/Vortex2CanvasController.ts

class Controller extends controller_Controller["default"] {
}
const Vortex2CanvasController = new Controller();

;// ./src/framework/components.vortex2/Vortex2CanvasController/index.ts



/***/ }),

/***/ 26014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Vortex2AnimCashout: () => (/* reexport */ Vortex2AnimCashout),
  Vortex2CanvasController: () => (/* reexport */ Vortex2CanvasController/* Vortex2CanvasController */.B),
  Vortex2ControlAmount: () => (/* reexport */ Vortex2ControlAmount),
  Vortex2ControlButton: () => (/* reexport */ Vortex2ControlButton),
  Vortex2ControlPayout: () => (/* reexport */ Vortex2ControlPayout),
  Vortex2Notif: () => (/* reexport */ Vortex2Notif),
  Vortex2Render: () => (/* reexport */ Vortex2Render),
  Vortex2ThemeSwitcher: () => (/* reexport */ Vortex2ThemeSwitcher),
  Vortex2Win: () => (/* reexport */ Vortex2Win)
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
;// ./src/framework/components.vortex2/Vortex2ControlButtonCashout/Vortex2ControlButtonCashout.tsx





function _Vortex2ControlButtonCashout({ children, onClick = () => { }, isPartial }) {
    const { game: { amount, lockedButtons, cashout, cashoutProcessing, gameState, lockedUi, spinInProcess, currentWheelState, lockedCashout, placeBetIsHeld, setNotifMessage, }, autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const disabled = lockedButtons ||
        !gameState.cashable ||
        lockedUi ||
        (isPartial && !gameState.collection.find((item) => item > 1)) ||
        autoBetEnabled ||
        (currentWheelState !== 'stopProgressBar' && spinInProcess) ||
        lockedCashout ||
        placeBetIsHeld;
    const props = {
        title: t('COMMON.CASHOUT'),
        request: cashoutProcessing,
        disabled,
    };
    const handleClick = (e) => {
        if (!gameState.cashable || (isPartial && !gameState.collection.find((item) => item > 1))) {
            setNotifMessage(isPartial ? t('VORTEX.NOTIF4') : t('VORTEX.NOTIF2'));
        }
        if (disabled)
            return null;
        cashout(isPartial);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const Vortex2ControlButtonCashout = (0,index_js_.observer)(_Vortex2ControlButtonCashout);

;// ./src/framework/components.vortex2/Vortex2ControlButtonCashout/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/components.vortex2/Vortex2CanvasController/index.ts + 1 modules
var Vortex2CanvasController = __webpack_require__(57855);
;// ./src/framework/components.vortex2/Vortex2ControlButtonPlay/Vortex2ControlButtonPlay.tsx








const awaiterTime = 10000;
function _Vortex2ControlButtonPlay({ children, onClick = () => { }, forceSymbol = null }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const timerRef = (0,hooks_module_js_.useRef)(null);
    const longPressTimerRef = (0,hooks_module_js_.useRef)(null);
    const { game: { roundId, placebetProcessing, cashoutProcessing, placeBet, setPlaceBetIsHeld, placeBetIsHeld, isFreebetEnabled, gameConfig, lockedButtons, lockedUi, spinInProcess, gameState, bonusStatus, setForceSymbol, showPopup, amount, setSpinBonusInProgress, spinBonusInProgress, showHTSNotif, eventsAreReady, isSceneReady, }, uiCommon: { amountError, animationEventsCreate, guideShown }, quickModeCommon: { setEnabled, enabled }, freebetsCommon: { freebetEnabled, freebetActive }, autobetCommon: { autoBetEnabled, setAutoBetEnabled }, profileCommon: { limit: { minBet }, }, } = (0,bootstrap.GET_STORE)();
    const awaitTimer = (0,hooks_module_js_.useRef)(null);
    const [btnIsLoaded, setBtnIsLoaded] = (0,hooks_module_js_.useState)(false);
    const [showAwaiter, setShowAwaiter] = (0,hooks_module_js_.useState)(false);
    const [showSpin, setShowSpin] = (0,hooks_module_js_.useState)(false);
    const disabled = (freebetEnabled && freebetActive.left - 1 < 0) ||
        lockedUi ||
        (bonusStatus.started && !bonusStatus.ended && bonusStatus.type === 'mines') ||
        Number(amount) < minBet ||
        !eventsAreReady ||
        (!bonusStatus.started && gameState?.bonusState?.bonus === 'Symbol2');
    const request = placebetProcessing || cashoutProcessing || spinInProcess;
    const props = {
        request,
        disabled,
        placeBetIsHeld,
        autoBetEnabled,
        isFreebet: isFreebetEnabled,
        isH2S: placeBetIsHeld,
        showAwaiter,
        showSpin,
        btnIsLoaded,
        setBtnIsLoaded,
        setShowSpin,
        setShowAwaiter,
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (!placeBetIsHeld) {
            enabled ? localStorageHelper/* default */.A.set('alwaysQuickMode', true) : localStorageHelper/* default */.A.remove('alwaysQuickMode');
        }
    }, [enabled]);
    const handleMouseDown = (e) => {
        if (bonusStatus.type === 'slot') {
            if (spinBonusInProgress || !isSceneReady)
                return null;
            Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('startBonusSpin', gameState.bonusState?.data?.randomSymbols, gameState.bonusState?.data?.combo, gameState.bonusState?.multiplier);
            setSpinBonusInProgress(true);
            return null;
        }
        if (autoBetEnabled && !lockedUi) {
            e.preventDefault();
            setAutoBetEnabled(!autoBetEnabled);
            onClick(true);
            return null;
        }
        if (placeBetIsHeld || disabled || request || showPopup.winPopup)
            return false;
        e.preventDefault();
        const isSpace = e.key == ' ' && e.code == 'Space' && e.keyCode == 32;
        !isSpace && forceSymbol && setForceSymbol(forceSymbol);
        !isSpace && setShowSpin(true);
        placeBet(forceSymbol);
        onClick(false);
        if (isFreebetEnabled) {
            setPlaceBetIsHeld(false);
            return null;
        }
        longPressTimerRef.current && clearTimeout(longPressTimerRef.current);
        longPressTimerRef.current = setTimeout(() => {
            setEnabled(true);
            animationEventsCreate('QuickModeButtonAlert');
            setPlaceBetIsHeld(true);
            window.placeBetIsHeld = true;
        }, 300);
    };
    const press = (e) => {
        if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
            handleMouseDown(e);
        }
    };
    const release = (e) => {
        if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
            handleMouseUp();
        }
    };
    const handleMouseUp = () => {
        window.placeBetIsHeld = false;
        !localStorageHelper/* default */.A.get('alwaysQuickMode') && setEnabled(false);
        setPlaceBetIsHeld(false);
        setForceSymbol(null);
        longPressTimerRef.current && clearTimeout(longPressTimerRef.current);
    };
    const handlePreventDefault = (e) => {
        e.preventDefault();
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
    };
    (0,hooks_module_js_.useEffect)(() => {
        clearTimeout(awaitTimer.current);
        awaitTimer.current = null;
        if (!placebetProcessing) {
            awaitTimer.current = setTimeout(() => {
                setShowAwaiter(true);
            }, awaiterTime);
        }
    }, [placebetProcessing]);
    (0,hooks_module_js_.useEffect)(() => {
        showHTSNotif && setShowAwaiter(true);
    }, [showHTSNotif]);
    (0,hooks_module_js_.useEffect)(() => {
        document.addEventListener('keydown', press);
        document.addEventListener('keyup', release);
        return () => {
            document.removeEventListener('keydown', press);
            document.removeEventListener('keyup', release);
        };
    }, []);
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
const Vortex2ControlButtonPlay = (0,index_js_.observer)(_Vortex2ControlButtonPlay);

;// ./src/framework/components.vortex2/Vortex2ControlButtonPlay/index.tsx


;// ./src/framework/components.vortex2/Vortex2ControlButtonAutoplay/Vortex2ControlButtonAutoplay.tsx






function _Vortex2ControlButtonAutoplay({ children, onClick = () => { } }) {
    const { game: { lockedUi, currentWheelState, placeBet, bonusStatus, showPopup, isFreebetEnabled }, autobetCommon: { autoBetEnabled, setAutoBetEnabled }, uiCommon: { amountError }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const timer = (0,hooks_module_js_.useRef)(null);
    const [lockedOnTimeout, setLockedOnTimeout] = (0,hooks_module_js_.useState)(false);
    const disabled = lockedUi ||
        (!autoBetEnabled && bonusStatus.started && !bonusStatus.ended) ||
        bonusStatus.type === 'slot' ||
        !!(!isFreebetEnabled && amountError) ||
        lockedOnTimeout;
    const props = {
        title: autoBetEnabled ? 'stop' : 'auto',
        disabled,
        active: autoBetEnabled,
    };
    const handleClick = (e) => {
        if (disabled || showPopup.winPopup || (!autoBetEnabled && lockedOnTimeout))
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
const Vortex2ControlButtonAutoplay = (0,index_js_.observer)(_Vortex2ControlButtonAutoplay);

;// ./src/framework/components.vortex2/Vortex2ControlButtonAutoplay/index.tsx


;// ./src/framework/components.vortex2/Vortex2ControlButton/Vortex2ControlButton.tsx





function _Vortex2ControlButton({ children }) {
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const Vortex2ControlButton = Object.assign((0,index_js_.observer)(_Vortex2ControlButton), {
    Play: Vortex2ControlButtonPlay,
    Cashout: Vortex2ControlButtonCashout,
    Autoplay: Vortex2ControlButtonAutoplay,
});

;// ./src/framework/components.vortex2/Vortex2ControlButton/index.tsx


;// ./src/framework/components.vortex2/Vortex2ControlAmountTooltip/Vortex2ControlAmountTooltip.tsx





function _Vortex2ControlAmountTooltip({ children }) {
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
        if (!showTooltip) {
            setTooltipText(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
        }
    }, [showTooltip]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            titleMaxWin: tooltipText,
            showTooltip,
        }) }));
}
const Vortex2ControlAmountTooltip = (0,index_js_.observer)(_Vortex2ControlAmountTooltip);

;// ./src/framework/components.vortex2/Vortex2ControlAmountTooltip/index.tsx


;// ./src/framework/components.vortex2/Vortex2ControlAmount/Vortex2ControlAmount.tsx







const ContextButtons = (0,preact_module_js_.createContext)({});
function _Vortex2ControlAmount({ children }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet }, splitTest, }, game: { amount, setAmount, lockedButtons, placebetProcessing, cashoutProcessing, spinInProcess, betPlaced, setNotifMessage, gameState: { initial }, bonusStatus, forceAmountOnRetrieve, showHTSNotif, gameConfig, setShowHTSNotif, }, uiCommon: { amountError, isOnline }, freebetsCommon: { freebetEnabled, freebetsSuccessIndexList, freebetActive }, autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const [defaultValue, setDefaultValue] = (0,hooks_module_js_.useState)(Number(amount));
    const [connectBalance, setConnectBalance] = (0,hooks_module_js_.useState)(balance);
    const [cashoutInProgress, setCashoutInProgress] = (0,hooks_module_js_.useState)(false);
    const timer = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        if (showHTSNotif) {
            clearTimeout(timer.current);
            timer.current = null;
            timer.current = setTimeout(() => {
                setShowHTSNotif(false);
            }, gameConfig.HTSnotifDuration ? gameConfig.HTSnotifDuration + 500 : 3500);
        }
    }, [showHTSNotif]);
    (0,hooks_module_js_.useEffect)(() => {
        if (initial && !placebetProcessing && !cashoutInProgress && !freebetEnabled) {
            setDefaultValue(Number(amount));
            setConnectBalance(balance);
        }
    }, [amount, balance, initial, placebetProcessing, cashoutInProgress, freebetEnabled]);
    (0,hooks_module_js_.useEffect)(() => {
        if (freebetEnabled && initial) {
            setConnectBalance(freebetActive?.offer?.configuration[0]?.betAmount);
            setDefaultValue(freebetActive?.offer?.configuration[0]?.betAmount);
            setAmount(freebetActive?.offer?.configuration[0]?.betAmount);
        }
    }, [freebetEnabled, initial, freebetActive]);
    const handleAmountChange = (val) => {
        if (freebetEnabled && val !== freebetActive?.offer?.configuration[0]?.betAmount)
            return null;
        setAmount(val);
    };
    const handleBtnClick = () => {
        if (lockedButtons || freebetEnabled || betPlaced || spinInProcess) {
            setNotifMessage(freebetEnabled ? t('VORTEX.NOTIF5') : t('VORTEX.NOTIF1'));
        }
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (forceAmountOnRetrieve) {
            setDefaultValue(forceAmountOnRetrieve);
            setConnectBalance(forceAmountOnRetrieve);
        }
    }, [forceAmountOnRetrieve]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,jsxRuntime_module/* jsx */.Y)(ContextButtons.Provider, { value: {
                disabled: placebetProcessing,
            }, children: children({
                title: t('COMMON.BET_AMOUNT'),
                titleError: amountError,
                disabled: lockedButtons || freebetEnabled || betPlaced || autoBetEnabled || bonusStatus.type === 'slot' || !isOnline || spinInProcess,
                defaultValue,
                min: minBet,
                max: maxBet,
                onChange: handleAmountChange,
                prefix: currencySign || '',
                connectBalance,
                rounding: rounding > 0 ? rounding - 1 : rounding,
                gtmAction: 'input_value_changed',
                pushGtmDataOnValueChange: true,
                onBtnClick: handleBtnClick,
                showHTSNotif: showHTSNotif,
            }) }) }));
}
const Vortex2ControlAmount = Object.assign((0,index_js_.observer)(_Vortex2ControlAmount), {
    Tooltip: Vortex2ControlAmountTooltip,
});

;// ./src/framework/components.vortex2/Vortex2ControlAmount/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
;// ./src/framework/components.vortex2/Vortex2ControlPayout/Vortex2ControlPayout.tsx






function _Vortex2ControlPayout({ children }) {
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
const Vortex2ControlPayout = (0,index_js_.observer)(_Vortex2ControlPayout);

;// ./src/framework/components.vortex2/Vortex2ControlPayout/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
;// ./src/framework/components.vortex2/Vortex2Win/Vortex2Win.tsx





function _Vortex2Win({ children }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { game: { showPopup, coefficient, payout, superBonusGameState }, profileCommon: { profile: { rounding, currencySign }, }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            show: showPopup.winPopup,
            payout: String((0,truncateDecimals/* default */.A)(payout, rounding)),
            currencySign,
            coefficient,
            isBonus: !!superBonusGameState,
            bonusWin: {
                bonus: coefficient - superBonusGameState?.coefficient,
                regular: superBonusGameState?.coefficient,
            },
        }) }));
}
const Vortex2Win = (0,index_js_.observer)(_Vortex2Win);

;// ./src/framework/components.vortex2/Vortex2Win/index.tsx


;// ./src/framework/components.vortex2/Vortex2Render/Vortex2Render.tsx



function _Vortex2Render({ children, betData }) {
    const settings = (0,bootstrap.GET_GAME_CONFIG)().defaultSettings;
    if (!betData)
        return null;
    const settingsFormatted = [];
    for (let key in settings?.paytable) {
        settingsFormatted.push(settings?.paytable[key]);
    }
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            collection: betData.game.state.collection,
            settings: settingsFormatted,
        }) }));
}
const Vortex2Render = (0,index_js_.observer)(_Vortex2Render);

;// ./src/framework/components.vortex2/Vortex2Render/index.tsx


;// ./src/framework/components.vortex2/Vortex2Notif/Vortex2Notif.tsx





function _Vortex2Notif({ children }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { game: { notifMessage, setNotifMessage, gameConfig }, } = (0,bootstrap.GET_STORE)();
    const timer = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        if (!!notifMessage) {
            clearTimeout(timer.current);
            timer.current = null;
            timer.current = setTimeout(() => {
                setNotifMessage(null);
            }, gameConfig.HTSnotifDuration);
        }
    }, [notifMessage]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            show: !!notifMessage,
            message: notifMessage,
        }) }));
}
const Vortex2Notif = (0,index_js_.observer)(_Vortex2Notif);

;// ./src/framework/components.vortex2/Vortex2Notif/index.tsx


;// ./src/framework/components.vortex2/Vortex2AnimCashout/Vortex2AnimCashout.tsx





function _Vortex2AnimCashout({ children }) {
    const { game: { showPopup, coefficient, setCashoutAnimStatus }, uiCommon: { screenWidth, screenHeight }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const coefficientContainer = (0,hooks_module_js_.useRef)(null);
    const startAnimationTimer = (0,hooks_module_js_.useRef)(null);
    const endAnimationTimer = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        if (!coefficientContainer.current || !showPopup.animCashout)
            return;
        clearTimeout(startAnimationTimer.current);
        startAnimationTimer.current = null;
        clearTimeout(endAnimationTimer.current);
        endAnimationTimer.current = null;
        const centerX = screenWidth / 2;
        const centerY = screenHeight / 2;
        const elementWidth = coefficientContainer.current.clientWidth;
        const elementHeight = coefficientContainer.current.clientHeight;
        const left = centerX - elementWidth / 2 + 100;
        const top = centerY - elementHeight / 2 + 100;
        coefficientContainer.current.style.transition = 'none';
        coefficientContainer.current.style.transform = 'translate(-50%, -50%)';
        coefficientContainer.current.style.opacity = '1';
        coefficientContainer.current.style.zIndex = '2';
        startAnimationTimer.current = setTimeout(() => {
            if (!coefficientContainer.current)
                return;
            coefficientContainer.current.style.transition = 'all 1.5s ease-in-out';
            coefficientContainer.current.style.transform = `translate(-${left}px, -${top}px) scale(0.1)`;
            coefficientContainer.current.style.opacity = '0';
            coefficientContainer.current.style.zIndex = '-1';
        }, 40);
        endAnimationTimer.current = setTimeout(() => {
            if (!coefficientContainer.current)
                return;
            setCashoutAnimStatus('ended');
        }, 1200);
    }, [screenWidth, screenHeight, showPopup]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            elementRef: coefficientContainer,
            coefficient,
        }) }));
}
const Vortex2AnimCashout = (0,index_js_.observer)(_Vortex2AnimCashout);

;// ./src/framework/components.vortex2/Vortex2AnimCashout/index.tsx


;// ./src/framework/components.vortex2/Vortex2ThemeSwitcher/Vortex2ThemeSwitcher.tsx





function _Vortex2ThemeSwitcher({ children }) {
    const { game: { assetsLoaded, spinBonusInProgress, placebetProcessing, spinInProcess, isBonusSceneActive }, uiCommon: { toggleColorTheme, colorTheme }, autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const [assetsLoadedLocal, setAssetsLoadedLocal] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useEffect)(() => {
        if (assetsLoaded) {
            setAssetsLoadedLocal(true);
        }
    }, [assetsLoaded]);
    const disabled = !assetsLoadedLocal || spinBonusInProgress || autoBetEnabled;
    const handleClick = () => {
        if (disabled || placebetProcessing || spinInProcess)
            return;
        toggleColorTheme();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled,
            disabledHidden: placebetProcessing || spinInProcess,
            toggleColorTheme,
            colorTheme,
            title: 'Theme',
            isBonusSceneActive,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const Vortex2ThemeSwitcher = (0,index_js_.observer)(_Vortex2ThemeSwitcher);

;// ./src/framework/components.vortex2/Vortex2ThemeSwitcher/index.tsx


;// ./src/framework/components.vortex2/export.ts











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