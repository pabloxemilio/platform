"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[925,4450,7402,7518],{

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

/***/ 80286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* reexport */ vortexAeroCanvasController)
});

;// ./src/canvas/controller/types/vortexaero/Controller.ts
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
        this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
    trigger(event, data) {
        this.events[event]?.forEach(callback => callback(data));
    }
    listEvents() {
        return Object.keys(this.events);
    }
}

;// ./src/framework/components.vortexaero/VortexAeroCanvasController/VortexAeroCanvasController.ts

class Controller extends CanvasController {
}
;
const vortexAeroCanvasController = new Controller();

;// ./src/framework/components.vortexaero/VortexAeroCanvasController/index.ts



/***/ }),

/***/ 38483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  VortexAeroButton: () => (/* reexport */ VortexAeroButton),
  VortexAeroControlAmount: () => (/* reexport */ VortexAeroControlAmount),
  VortexAeroControlPayout: () => (/* reexport */ VortexAeroControlPayout),
  VortexAeroRender: () => (/* reexport */ VortexAeroRender),
  vortexAeroCanvasController: () => (/* reexport */ VortexAeroCanvasController/* vortexAeroCanvasController */.A)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
;// ./src/framework/components.vortexaero/VortexAeroButtonPlay/VortexAeroButtonPlay.tsx





const TIME_AUTO_BET_MS = 250;
function _VortexAeroButtonPlay({ stopAutoSpin, children, onClick }) {
    const { game: { isDisabledControls, placeBet, setTurboMode }, quickModeCommon: { setEnabled }, } = (0,bootstrap.GET_STORE)();
    const touchHandledRef = (0,hooks_module_js_.useRef)(false);
    const timerRef = (0,hooks_module_js_.useRef)(null);
    const longPressIntervalRef = (0,hooks_module_js_.useRef)(null);
    const isLongPressRef = (0,hooks_module_js_.useRef)(false);
    const isDisabledControlsRef = (0,hooks_module_js_.useRef)(isDisabledControls);
    (0,hooks_module_js_.useEffect)(() => {
        isDisabledControlsRef.current = isDisabledControls;
    }, [isDisabledControls]);
    (0,hooks_module_js_.useEffect)(() => {
        return () => {
            clearInterval(longPressIntervalRef.current);
            clearTimeout(timerRef.current);
            window.removeEventListener('mouseup', handleGlobalMouseUp);
        };
    }, []);
    const handleActiveHoldToSpen = (value) => {
        setTurboMode(value);
        setEnabled(value);
    };
    const startLongPressLoop = () => {
        handleActiveHoldToSpen(true);
        clearInterval(longPressIntervalRef.current);
        longPressIntervalRef.current = setInterval(() => {
            if (!isDisabledControlsRef.current) {
                placeBet({ isHold: true });
            }
        }, TIME_AUTO_BET_MS);
    };
    const stopLongPressLoop = () => {
        handleActiveHoldToSpen(false);
        clearInterval(longPressIntervalRef.current);
        longPressIntervalRef.current = null;
    };
    const handleGlobalMouseUp = () => {
        if (isLongPressRef.current) {
            isLongPressRef.current = false;
            stopLongPressLoop();
        }
    };
    const handlePreventDefault = (e) => {
        e.preventDefault();
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };
    const startPress = () => {
        isLongPressRef.current = false;
        timerRef.current = setTimeout(() => {
            isLongPressRef.current = true;
            startLongPressLoop();
            window.addEventListener('mouseup', handleGlobalMouseUp, { once: true });
        }, 500);
    };
    const endPress = (e) => {
        handlePreventDefault(e);
        clearTimeout(timerRef.current);
        if (isLongPressRef.current) {
            isLongPressRef.current = false;
            stopLongPressLoop();
        }
        else {
            placeBet({ isHold: false });
        }
    };
    const handleMouseDown = () => {
        if (touchHandledRef.current)
            return;
        startPress();
    };
    const handleMouseUp = (e) => {
        if (touchHandledRef.current)
            return;
        endPress(e);
    };
    const handleMouseLeave = () => {
        if (!isLongPressRef.current) {
            clearTimeout(timerRef.current);
        }
    };
    const handleTouchStart = () => {
        touchHandledRef.current = true;
        startPress();
    };
    const handleTouchEnd = (e) => {
        endPress(e);
        setTimeout(() => (touchHandledRef.current = false), 100);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onMouseDown: handleMouseDown,
            onMouseUp: handleMouseUp,
            onTouchStart: handleTouchStart,
            onTouchEnd: handleTouchEnd,
            onTouchMove: handlePreventDefault,
            onContextMenu: handlePreventDefault,
            onMouseLeave: handleMouseLeave,
            onDblClick: handlePreventDefault,
            onClick: handlePreventDefault,
        })) }));
}
const VortexAeroButtonPlay = (0,index_js_.observer)(_VortexAeroButtonPlay);

;// ./src/framework/components.vortexaero/VortexAeroButtonPlay/index.tsx


;// ./src/framework/components.vortexaero/VortexAeroButtonCashout/VortexAeroButtonCashout.tsx







function _VortexAeroButtonCashout({ children, onClick = () => { }, isPartial }) {
    const { game: { splitTestVariants, addNotification, cashout }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const timer = (0,hooks_module_js_.useRef)(null);
    const { disabledAllCashout, disabledPartCashout } = (0,hooks_module_js_.useContext)(Context);
    const disabled = disabledAllCashout || disabledPartCashout;
    const props = {
        title: t('COMMON.CASHOUT1'),
        request: false,
        disabled,
    };
    const handleClick = () => {
        if (!isPartial && disabledAllCashout) {
            const text = splitTestVariants.isAlternativeUITestB ? 'VORTEX_AERO.NOTIF2' : 'VORTEX.NOTIF2';
            addNotification({ type: 'notif', text: t(text) });
            return;
        }
        if (isPartial && disabledPartCashout) {
            const text = splitTestVariants.isAlternativeUITestB ? 'VORTEX_AERO.NOTIF4' : 'VORTEX.NOTIF4';
            addNotification({ type: 'notif', text: t(text) });
            return;
        }
        cashout(isPartial);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const VortexAeroButtonCashout = (0,index_js_.observer)(_VortexAeroButtonCashout);

;// ./src/framework/components.vortexaero/VortexAeroButtonCashout/index.tsx


;// ./src/framework/components.vortexaero/VortexAeroBonusBuyButton/VortexAeroBonusBuyButton.tsx




function _VortexAeroBonusBuyButton({ children, onClick = () => { } }) {
    const { game: { bonusGameStore }, } = (0,bootstrap.GET_STORE)();
    const handleClick = () => {
        bonusGameStore.showBonusBuyPopup();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const VortexAeroBonusBuyButton = (0,index_js_.observer)(_VortexAeroBonusBuyButton);

;// ./src/framework/components.vortexaero/VortexAeroBonusBuyButton/index.tsx


;// ./src/framework/components.vortexaero/VortexAeroButton/VortexAeroButton.tsx









var ButtonType;
(function (ButtonType) {
    ButtonType["regular"] = "regular";
    ButtonType["freebet"] = "freebet";
})(ButtonType || (ButtonType = {}));
const Context = (0,preact_module_js_.createContext)({});
function _VortexAeroButton({ children }) {
    const { game: { amount, notificationList, totalPayout, partPayout, totalBetAmount, isRoundStarted, isDisabledControls, isActiveCashout, isFreebetEnabled, }, uiCommon: { amountError, isOnline }, autobetCommon: { autoBetEnabled }, profileCommon: { profile: { balance, currencySign }, limit: { minBet }, }, freebetsCommon: { freebetsSuccessIndexList, listGetByIndex, freebetActive, freebetEnabled, forcedDisabledFreebets }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [freebetTooltipShow, setFreebetTooltipShow] = (0,hooks_module_js_.useState)(false);
    const [autobetCount, setAutobetCount] = (0,hooks_module_js_.useState)(-1);
    const [isLoadingSlow, setIsLoadingSlow] = (0,hooks_module_js_.useState)(false);
    const [isOpenAutobetList, setIsOpenAutobetList] = (0,hooks_module_js_.useState)(false);
    const freebet = listGetByIndex(0);
    const freebetAmount = freebetActive?.offer?.configuration[0]?.betAmount ||
        freebet?.freebetActive?.offer?.configuration[0]?.betAmount ||
        0;
    const buttonType = isFreebetEnabled ? ButtonType.freebet : ButtonType.regular;
    const isActiveUnlockBetWarning = notificationList.some((data) => data.type === 'unlockBetWarning');
    const disabled = isDisabledControls ||
        (Number(totalBetAmount) > balance && !isFreebetEnabled) ||
        isActiveUnlockBetWarning ||
        !isOnline ||
        (balance < minBet && !isFreebetEnabled) ||
        (balance < Number(amount) && !isFreebetEnabled) ||
        (Number(amount) <= 0 && !isFreebetEnabled) ||
        (!balance && !isFreebetEnabled);
    const disabledBonusBuy = isDisabledControls || isActiveUnlockBetWarning || isFreebetEnabled;
    const disabledAllCashout = isDisabledControls || (!isDisabledControls && !isActiveCashout) || isActiveUnlockBetWarning;
    const disabledPartCashout = isDisabledControls || (!isDisabledControls && !isActiveCashout) || partPayout === 0 || isActiveUnlockBetWarning;
    const props = {
        isRoundStarted,
        buttonType,
        disabled,
        disabledBonusBuy,
        disabledAllCashout,
        disabledPartCashout,
        cashOutTitle: t('COMMON.CASHOUT'),
        loading: isLoadingSlow,
        isAutoBetEnabled: autoBetEnabled,
        autobetCount,
        isOpenAutobetList,
        setAutobetCount,
        setIsOpenAutobetList,
        freebetEnabled: isFreebetEnabled,
        freebetAmount: `${currencySign}${freebetAmount}`,
        freebetTooltipShow,
        currencySign,
        totalPayout,
        partPayout,
        setFreebetTooltipShow,
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (!disabled && !disabledAllCashout) {
            setFreebetTooltipShow(false);
        }
    }, [disabled, disabledAllCashout]);
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const VortexAeroButton = Object.assign((0,index_js_.observer)(_VortexAeroButton), {
    Play: VortexAeroButtonPlay,
    Cashout: VortexAeroButtonCashout,
    BonusBuy: VortexAeroBonusBuyButton,
});

;// ./src/framework/components.vortexaero/VortexAeroButton/index.tsx


;// ./src/framework/components.vortexaero/VortexAeroControlAmount/VortexAeroControlAmount.tsx





function _VortexAeroControlAmount({ children }) {
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxWin }, }, game: { maxBet, isRoundStarted, isActiveWrench, amount, gameConfig, isDisabledControls, skipWrenchRoundState, isActiveRound, totalBetAmount, isActiveBonusModal, setAmount, openValidationActiveWrenchNotif, gameState: { initial }, }, uiCommon: { amountError }, freebetsCommon: { freebetsSuccessIndexList, freebetEnabled, freebetActive, freebets }, autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const tooltipTimeout = (0,hooks_module_js_.useRef)(null);
    const amountErrorRef = (0,hooks_module_js_.useRef)(false);
    const [isShowTooltip, setisShowTooltip] = (0,hooks_module_js_.useState)(false);
    const [tooltipText, setTooltipText] = (0,hooks_module_js_.useState)(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
    const isFreebetEnabled = freebetsSuccessIndexList.includes(0) && freebetEnabled;
    const maxActual = Math.min(balance, maxBet);
    const showNotificationForMiniBet = () => {
        if (Number(amount) === minBet && !isShowTooltip) {
            setisShowTooltip(true);
            setTooltipText(`${t('COMMON.MIN_BET')} ${currencySign}${minBet}`);
            if (tooltipTimeout.current) {
                clearTimeout(tooltipTimeout.current);
            }
            tooltipTimeout.current = window.setTimeout(() => {
                setisShowTooltip(false);
            }, gameConfig.amountTooltipTimeout);
            tooltipTimeout.current = window.setTimeout(() => {
                setTooltipText(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
            }, gameConfig.amountTooltipTimeout + 200);
        }
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (!amountError && amountErrorRef.current) {
            setisShowTooltip(false);
            tooltipTimeout.current = window.setTimeout(() => {
                setTooltipText(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
            }, 200);
        }
        if (amountError) {
            amountErrorRef.current = true;
            setisShowTooltip(true);
            setTooltipText(amountError);
        }
        else if (Number(amount) === maxActual) {
            setisShowTooltip(true);
            setTooltipText(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
            if (tooltipTimeout.current) {
                clearTimeout(tooltipTimeout.current);
            }
            tooltipTimeout.current = window.setTimeout(() => {
                setisShowTooltip(false);
            }, gameConfig.amountTooltipTimeout);
        }
    }, [maxActual, amount, maxWin]);
    const disabled = (isActiveWrench && !skipWrenchRoundState) ||
        isRoundStarted ||
        isDisabledControls ||
        isActiveRound ||
        !balance ||
        freebetsSuccessIndexList.includes(0) ||
        (!isRoundStarted && balance < minBet && !isFreebetEnabled);
    const validationActiveWrench = () => {
        openValidationActiveWrenchNotif(disabled);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            titleError: amountError,
            isShowTooltip,
            titleMaxWin: tooltipText,
            disabled,
            defaultValue: Number(amount),
            min: minBet,
            max: maxBet,
            onChange: setAmount,
            prefix: currencySign,
            connectBalance: undefined,
            rounding: rounding > 0 ? rounding - 1 : rounding,
            gtmAction: 'input_value_changed',
            pushGtmDataOnValueChange: true,
            totalBetAmount: `${t('COMMON.TOTAL_BET')} ${currencySign}${totalBetAmount}`,
            showNotificationForMiniBet,
            validationActiveWrench,
        }) }));
}
const VortexAeroControlAmount = (0,index_js_.observer)(_VortexAeroControlAmount);

;// ./src/framework/components.vortexaero/VortexAeroControlAmount/index.tsx


// EXTERNAL MODULE: ./src/framework/components.vortexaero/VortexAeroCanvasController/index.ts + 2 modules
var VortexAeroCanvasController = __webpack_require__(80286);
;// ./src/framework/components.vortexaero/VortexAeroControlPayout/VortexAeroControlPayout.tsx



function _VortexAeroControlPayout({ children }) {
    const { profileCommon: { profile: { currencySign }, }, game: { totalPayout, partPayout }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            totalPayout: `${currencySign} ${totalPayout}`,
            partPayout: `${currencySign} ${partPayout}`,
        }) }));
}
const VortexAeroControlPayout = (0,index_js_.observer)(_VortexAeroControlPayout);

;// ./src/framework/components.vortexaero/VortexAeroControlPayout/index.tsx


// EXTERNAL MODULE: ./src/framework/store/VortexAeroCommonStores/auction.ts
var auction = __webpack_require__(60925);
;// ./src/framework/components.vortexaero/VortexAeroRender/VortexAeroRender.tsx





const baseMultipliers = {
    firstLine: [0, 4, 12, 25, 50, 100, 133, 200],
    secondLine: [0, 2.5, 8, 16, 30, 45],
    thirdLine: [0, 1.5, 5, 10],
};
function _VortexAeroRender({ children, betData }) {
    const progressState = (0,hooks_module_js_.useMemo)(() => {
        const results = betData?.game?.state?.results;
        if (Array.isArray(results)) {
            const collection = results[2]?.collection;
            const firstLineId = collection[0] ?? 0;
            const secondLineId = collection[1] ?? 0;
            const thirdLineId = collection[2] ?? 0;
            return {
                firstLine: baseMultipliers.firstLine[firstLineId],
                secondLine: baseMultipliers.secondLine[secondLineId],
                thirdLine: baseMultipliers.thirdLine[thirdLineId],
            };
        }
        return {
            firstLine: 0,
            secondLine: 0,
            thirdLine: 0,
        };
    }, [betData]);
    const { t } = (0,es_index_js_.useTranslation)();
    const bonus = betData?.game?.bonusbuy;
    const bonusAuctionPlane = bonus ? (0,auction.auction)(betData?.game?.id, betData?.game?.state?.multiplier).plane : null;
    const multiplier = betData?.game?.state?.multiplier;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            progressState,
            bonus,
            bonusAuctionPlane,
            multiplier,
            multiplierTitle: t('COMMON.TOTAL_MULTIPLIER'),
        }) }));
}
const VortexAeroRender = (0,index_js_.observer)(_VortexAeroRender);

;// ./src/framework/components.vortexaero/VortexAeroRender/index.tsx


;// ./src/framework/components.vortexaero/export.ts







/***/ }),

/***/ 60925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   auction: () => (/* binding */ auction)
/* harmony export */ });
function mulberry32(a) {
    if (typeof a === 'string') {
        let h = 0;
        for (let i = 0; i < a.length; i++) {
            h = (Math.imul(31, h) + a.charCodeAt(i)) | 0;
        }
        a = h >>> 0;
    }
    return function () {
        var t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
const CONFIG = {
    planeStartPrices: [30, 50, 100, 150, 200],
    maxBoards: 7,
    denoms: [10, 20, 50, 100],
    denomsWeights: [4, 2, 2, 1],
    planeWeightFactor: 5 / 777,
};
function getPlane(mult, rng) {
    const factor = mult / 777;
    const weights = [
        Math.max(0.01, 1 - factor * 0.8),
        Math.max(0.01, 0.5 - factor * 0.2),
        Math.max(0.01, 0.2 + factor * 0.1),
        Math.max(0.01, 0.12 + factor * 0.3),
        Math.max(0.01, 0.01 + factor * 0.4),
    ];
    for (let i = 0; i < weights.length; i++) {
        if (CONFIG.planeStartPrices[i] > mult) {
            weights[i] = 0;
        }
    }
    const totalW = weights.reduce((a, b) => a + b, 0);
    if (totalW === 0)
        return 1;
    let r = rng() * totalW;
    for (let i = 0; i < weights.length; i++) {
        r -= weights[i];
        if (r < 0)
            return i + 1;
    }
    return 1;
}
function weightedPick(values, weights, rng) {
    let r = rng() * weights.reduce((a, b) => a + b, 0);
    for (let i = 0; i < values.length; i++) {
        r -= weights[i];
        if (r < 0)
            return values[i];
    }
}
const ALL_COMBOS = (() => {
    const res = [];
    const D = CONFIG.denoms;
    function dfs(start, len, cur) {
        if (len === 0) {
            res.push(cur.slice());
            return;
        }
        for (let i = start; i < D.length; i++) {
            cur.push(D[i]);
            dfs(i, len - 1, cur);
            cur.pop();
        }
    }
    for (let L = 1; L <= CONFIG.maxBoards; L++)
        dfs(0, L, []);
    return res;
})();
function shuffle(arr, rng) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(rng() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function pickCombo(remaining, rng) {
    if (remaining <= 0 || remaining % 10 !== 0)
        return null;
    const candidates = ALL_COMBOS.filter((ms) => ms.reduce((a, b) => a + b, 0) === remaining);
    if (!candidates.length)
        return null;
    candidates.sort((a, b) => {
        const score = (ms) => ms.filter((v) => v >= 50).length * 3 + ms.reduce((s, v) => s + v, 0) / ms.length + rng() * 2;
        return score(b) - score(a);
    });
    return candidates[Math.floor(rng() * Math.min(8, candidates.length))].slice();
}
function generateFallback(remaining, rng) {
    let boards = [], slots = CONFIG.maxBoards, remain = remaining;
    while (remain > 0 && slots > 1) {
        let avg = remain / slots;
        let pick;
        if (avg >= 70)
            pick = 100;
        else if (avg >= 35)
            pick = rng() < 0.6 ? 50 : 20;
        else
            pick = rng() < 0.7 ? 10 : 20;
        const maxAllowed = remain - 10 * (slots - 1);
        pick =
            CONFIG.denoms
                .slice()
                .reverse()
                .find((d) => d <= maxAllowed) || 10;
        boards.push(pick);
        remain -= pick;
        slots--;
    }
    if (remain > 0) {
        let last = Math.max(10, Math.min(100, Math.round(remain / 10) * 10));
        boards.push(last);
        remain -= last;
    }
    return boards;
}
function auction(seed, mult, price) {
    const rng = mulberry32(seed);
    const plane = getPlane(mult, rng);
    let start = CONFIG.planeStartPrices[plane - 1];
    let current = start;
    if (mult === 777) {
        const remaining = 500 - start;
        let combo = pickCombo(remaining, rng);
        if (!combo)
            combo = generateFallback(remaining, rng);
        shuffle(combo, rng);
        if (combo.length > CONFIG.maxBoards)
            combo = combo.slice(0, CONFIG.maxBoards);
        combo.sort((a, b) => a - b);
        combo[combo.length - 1] = 777;
        console.log('plane: ' + plane + ', combo: [' + combo + '], final price: 777');
        return { plane, boards: combo, finalPrice: 777, basePlenePrice: CONFIG.planeStartPrices[plane - 1] };
    }
    const remaining = mult - start;
    if (remaining === 0) {
        return { plane, boards: [], finalPrice: current };
    }
    let combo = pickCombo(remaining, rng);
    if (!combo)
        combo = generateFallback(remaining, rng);
    shuffle(combo, rng);
    if (combo.length > CONFIG.maxBoards)
        combo = combo.slice(0, CONFIG.maxBoards);
    let sumBoards = combo.reduce((a, b) => a + b, 0);
    if (sumBoards !== remaining) {
        for (let i = combo.length - 1; i >= 0; i--) {
            const needed = remaining - (sumBoards - combo[i]);
            if (needed > 0 && needed % 10 === 0) {
                combo[i] = needed;
                sumBoards = remaining;
                break;
            }
        }
    }
    current += sumBoards;
    combo.sort((a, b) => a - b);
    return { plane, boards: combo, finalPrice: current, basePlenePrice: CONFIG.planeStartPrices[plane - 1] };
}


/***/ })

}]);