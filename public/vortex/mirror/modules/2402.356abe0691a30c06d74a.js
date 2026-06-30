"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2402,7402,7518],{

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

/***/ 40558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ GameLevel),
/* harmony export */   q: () => (/* binding */ ChickenAnimSpeed)
/* harmony export */ });
var GameLevel;
(function (GameLevel) {
    GameLevel["Easy"] = "easy";
    GameLevel["Medium"] = "medium";
    GameLevel["Hard"] = "hard";
    GameLevel["Extreme"] = "extreme";
})(GameLevel || (GameLevel = {}));
var ChickenAnimSpeed;
(function (ChickenAnimSpeed) {
    ChickenAnimSpeed["Fast"] = "fast";
    ChickenAnimSpeed["Normal"] = "normal";
})(ChickenAnimSpeed || (ChickenAnimSpeed = {}));


/***/ }),

/***/ 13217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: () => (/* reexport */ chickenzapCanvasController)
});

;// ./src/canvas/controller/types/chickenzap/Controller.ts
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

;// ./src/framework/components.chickenzap/ChickenzapCanvasController/ChickenzapCanvasController.ts

class Controller extends CanvasController {
}
const chickenzapCanvasController = new Controller();

;// ./src/framework/components.chickenzap/ChickenzapCanvasController/index.ts



/***/ }),

/***/ 60607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ChickenzapButton: () => (/* reexport */ ChickenzapButton),
  ChickenzapControlAmount: () => (/* reexport */ ChickenzapControlAmount),
  ChickenzapGame: () => (/* reexport */ ChickenzapGame),
  ChickenzapLevelControls: () => (/* reexport */ ChickenzapLevelControls),
  ChickenzapLiveCashouts: () => (/* reexport */ ChickenzapLiveCashouts),
  ChickenzapRender: () => (/* reexport */ ChickenzapRender),
  chickenzapCanvasController: () => (/* reexport */ ChickenzapCanvasController/* chickenzapCanvasController */.x)
});

// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: ./src/framework/components.chickenzap/ChickenzapCanvasController/index.ts + 2 modules
var ChickenzapCanvasController = __webpack_require__(13217);
// EXTERNAL MODULE: ./src/canvas/controller/types/chickenzap/types.ts
var types = __webpack_require__(40558);
;// ./src/framework/components.chickenzap/ChickenzapGame/ChickenzapGame.tsx






const SoundLostTypes = {
    [types/* GameLevel */.J.Easy]: 'lost_level_1',
    [types/* GameLevel */.J.Medium]: 'lost_level_2',
    [types/* GameLevel */.J.Hard]: 'lost_level_3',
};
function _ChickenzapGame({ children }) {
    const { game: { amount, gameLevel, retrieveGameData, isActiveWinPopup, sessionLevel, stepWinResult, isLostSession, isCanvasLoaded, isPreloadedDone, isStepProcessing, isStepnimationProcessing, isRoundStarted, isWinAnimationCompleted, isDisabledControls, isGameCreated, isLastStepIsFinished, isRetrieveRound, islostRound, isRoundProcessing, bestPreviousWins, cashout, setWinPopupAnimation, placeBet, setLostSession, setCanvasLoaded, setDisableControls, setWinAnimationCompleted, setStepnimationProcessing, getCurretSessionLevelData, setLastStepIsFinished, setWinPopupAnimationCompleted, setRetrieveGameData, setStep, setLostRound, setRoundProcessing, autoCashout, startNewRound, gtmTrackedElementClicked, setNewLevelOffer, }, audioCommon: { playAudio }, profileCommon: { profile: { balance, currencySign, splitTest }, }, uiCommon: { amountError, isOnline, guideShown }, freebetsCommon: { freebetEnabled, freebetActive, freebetsSuccessIndexList, freebets }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const isDisableTapOnHaystack = (0,hooks_module_js_.useRef)(false);
    const isActiveWinPopupRef = (0,hooks_module_js_.useRef)(isActiveWinPopup);
    const isFirsRenderRef = (0,hooks_module_js_.useRef)(false);
    const isSetLevelDataRef = (0,hooks_module_js_.useRef)(false);
    const amountRef = (0,hooks_module_js_.useRef)(amount);
    const sessionLevelRef = (0,hooks_module_js_.useRef)(sessionLevel);
    (0,hooks_module_js_.useEffect)(() => {
        isActiveWinPopupRef.current = isActiveWinPopup;
    }, [isActiveWinPopup, gameLevel]);
    (0,hooks_module_js_.useEffect)(() => {
        isDisableTapOnHaystack.current =
            !isOnline ||
                (isRoundStarted && !isWinAnimationCompleted) ||
                isStepProcessing ||
                isStepnimationProcessing ||
                isDisabledControls ||
                !isGameCreated ||
                !Number(amount) ||
                (!isRoundStarted && !balance) ||
                (freebetEnabled && freebetActive.left - 1 < 0);
    }, [
        isOnline,
        isRoundStarted,
        isWinAnimationCompleted,
        isStepProcessing,
        isStepnimationProcessing,
        isDisabledControls,
        isGameCreated,
        amount,
        balance,
        freebetEnabled,
        freebetActive,
    ]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!isRoundStarted && isFirsRenderRef.current) {
            isFirsRenderRef.current = false;
        }
    }, [isRoundStarted]);
    (0,hooks_module_js_.useEffect)(() => {
        const isDisplayLostAnimation = isLostSession && !isStepnimationProcessing;
        if (isDisplayLostAnimation) {
            playAudio(SoundLostTypes[gameLevel]);
            ChickenzapCanvasController/* chickenzapCanvasController */.x.invoke('lostAnimation', { type: gameLevel });
            setLostSession(false);
        }
    }, [isLostSession, isStepnimationProcessing, gameLevel]);
    (0,hooks_module_js_.useEffect)(() => {
        if (isLastStepIsFinished)
            return;
        const isDisplayWinAnimation = !isStepProcessing && stepWinResult && !isStepnimationProcessing && isRoundStarted;
        if (isDisplayWinAnimation) {
            ChickenzapCanvasController/* chickenzapCanvasController */.x.invoke('winAnimation');
        }
    }, [isStepProcessing, stepWinResult, isStepnimationProcessing, isLastStepIsFinished, isRoundStarted, isRoundStarted]);
    (0,hooks_module_js_.useEffect)(() => {
        if (isLastStepIsFinished && !isStepnimationProcessing && !isStepProcessing && stepWinResult && !islostRound) {
            autoCashout({ payout: stepWinResult.payout, coefficient: stepWinResult.coefficient, isAutoCashOut: true });
            if (sessionLevel === 0) {
                setNewLevelOffer(true);
            }
        }
    }, [isLastStepIsFinished, isStepnimationProcessing, stepWinResult, isStepProcessing, sessionLevel, islostRound]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!guideShown)
            return;
        if (isCanvasLoaded && isPreloadedDone && !isFirsRenderRef.current) {
            if (retrieveGameData) {
                isFirsRenderRef.current = true;
                ChickenzapCanvasController/* chickenzapCanvasController */.x.invoke('refreshSession', { step: retrieveGameData.step });
                setRetrieveGameData(null);
            }
            else {
                isFirsRenderRef.current = true;
                setTimeout(() => {
                    ChickenzapCanvasController/* chickenzapCanvasController */.x.invoke('runIntro');
                }, 100);
            }
        }
    }, [isCanvasLoaded, retrieveGameData, guideShown, isPreloadedDone]);
    (0,hooks_module_js_.useEffect)(() => {
        const levelData = getCurretSessionLevelData(sessionLevel);
        const isDisplayOnlyMonay = splitTest?.variantValue === 'chickenzap_money_only' && splitTest?.variantType === 'test';
        if (isRoundProcessing &&
            !isPreloadedDone &&
            (amountRef.current === amount || sessionLevelRef.current === sessionLevel))
            return;
        if (isCanvasLoaded && levelData && !islostRound && (!isRoundStarted || isRetrieveRound)) {
            const setLevelData = levelData?.listCoefficients.map((coef) => {
                return {
                    coeficient: isDisplayOnlyMonay ? '' : 'x' + coef,
                    amount: `${currencySign} ${(Number(coef) * Number(amount)).toFixed(2)}`,
                };
            });
            isSetLevelDataRef.current = true;
            amountRef.current = amount;
            sessionLevelRef.current = sessionLevel;
            ChickenzapCanvasController/* chickenzapCanvasController */.x.invoke('setLevel', setLevelData);
        }
    }, [
        islostRound,
        isRoundProcessing,
        splitTest,
        isPreloadedDone,
        amount,
        sessionLevel,
        isCanvasLoaded,
        isRoundStarted,
        isRetrieveRound,
    ]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!isCanvasLoaded && !isSetLevelDataRef.current)
            return;
        const step = bestPreviousWins[sessionLevel];
        if (step) {
            ChickenzapCanvasController/* chickenzapCanvasController */.x.invoke('setEgg', { step, title: t('CHICKEN_ZAP.TOP_RUN') });
        }
        else {
            ChickenzapCanvasController/* chickenzapCanvasController */.x.invoke('hideEgg');
        }
    }, [bestPreviousWins, sessionLevel, isCanvasLoaded]);
    (0,hooks_module_js_.useEffect)(() => {
        ChickenzapCanvasController/* chickenzapCanvasController */.x.on('eventCanvasIsLoaded', () => {
            setCanvasLoaded(true);
            setDisableControls(true);
        });
        ChickenzapCanvasController/* chickenzapCanvasController */.x.on('eventIntroCompleted', () => {
            setDisableControls(false);
        });
        ChickenzapCanvasController/* chickenzapCanvasController */.x.on('eventStepProcessing', ({ isProcessing }) => {
            setStepnimationProcessing(isProcessing);
        });
        ChickenzapCanvasController/* chickenzapCanvasController */.x.on('eventWinAnimationCompleted', () => {
            setWinAnimationCompleted(true);
        });
        ChickenzapCanvasController/* chickenzapCanvasController */.x.on('eventLostAnimationCompleted', () => {
            setStep(0);
            setStepnimationProcessing(false);
            setLostRound(false);
            startNewRound();
        });
        ChickenzapCanvasController/* chickenzapCanvasController */.x.on('eventNewRoundStarted', () => {
            setRoundProcessing(false);
            if (!isActiveWinPopupRef.current) {
                setDisableControls(false);
            }
        });
        ChickenzapCanvasController/* chickenzapCanvasController */.x.on('eventWinPopupAnimationCompleted', () => {
            setStep(0);
            setWinPopupAnimation(false);
            setWinPopupAnimationCompleted(true);
        });
        ChickenzapCanvasController/* chickenzapCanvasController */.x.on('eventTapOnHaystack', () => {
            if (isDisableTapOnHaystack.current)
                return;
            gtmTrackedElementClicked();
            placeBet(false);
        });
        ChickenzapCanvasController/* chickenzapCanvasController */.x.on('eventLastStepIsFinished', () => {
            setLastStepIsFinished(true);
            setDisableControls(true);
        });
    }, []);
    return children;
}
const ChickenzapGame = (0,index_js_.observer)(_ChickenzapGame);

;// ./src/framework/components.chickenzap/ChickenzapGame/index.tsx


// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
;// ./src/framework/components.chickenzap/ChickenzapRender/ChickenzapRender.tsx



function _ChickenzapRender({ children, betData }) {
    const { t } = (0,es_index_js_.useTranslation)();
    if (!betData)
        return null;
    const gameLevel = betData?.game?.difficulty || 1;
    const listOfTitle = {
        1: t('HAMSTA.EASY'),
        2: t('HAMSTA.MEDIUM'),
        3: t('HAMSTA.HARD'),
        4: t('COMMON.MAD'),
    };
    const opened = betData?.game?.opened || 1;
    let openedLevel = 'easy';
    switch (gameLevel) {
        case 1:
            if (opened >= 15) {
                openedLevel = 'hard';
                break;
            }
            if (opened >= 8) {
                openedLevel = 'medium';
                break;
            }
            break;
        case 2:
            if (opened >= 16) {
                openedLevel = 'hard';
                break;
            }
            if (opened >= 8) {
                openedLevel = 'medium';
                break;
            }
            break;
        case 3:
            if (opened >= 16) {
                openedLevel = 'hard';
                break;
            }
            if (opened >= 8) {
                openedLevel = 'medium';
                break;
            }
            break;
        case 0:
        default:
            if (opened >= 14) {
                openedLevel = 'hard';
                break;
            }
            if (opened >= 7) {
                openedLevel = 'medium';
                break;
            }
    }
    const listOfLostImages = {
        easy: '_x1',
        medium: '_x2',
        hard: '_x3',
    };
    const isWin = betData?.result === 'won';
    const payoutCoefficient = isWin ? betData?.payoutCoefficient || 0 : betData?.game?.result?.multiplier || 0;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            isWin,
            payoutCoefficient,
            payout: `${betData?.currencySign || ''} ${betData?.payout || 0}`,
            lostImageClass: listOfLostImages[gameLevel],
            levelTitle: `${t('COMMON.RISK_LEVEL')}: ${listOfTitle[gameLevel]}`,
            winTitle: 'You WIN!',
            level: listOfTitle[gameLevel],
        }) }));
}
const ChickenzapRender = (0,index_js_.observer)(_ChickenzapRender);

;// ./src/framework/components.chickenzap/ChickenzapRender/index.tsx


;// ./src/framework/components.chickenzap/ChickenzapLevelControls/ChickenzapLevelControls.tsx





function _ChickenzapLevelControls({ children }) {
    const { game: { sessionLevel, isRoundStarted, sessionLevelData, isDisabledControls, isNewLevelOffer, amount, getCurretSessionLevelData, changeSessionLevel, setNewLevelOffer, }, audioCommon: { playAudio }, uiCommon: { isOnline }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const isLoadedData = !!sessionLevelData;
    const listOfTitle = {
        0: t('HAMSTA.EASY'),
        1: t('HAMSTA.MEDIUM'),
        2: t('HAMSTA.HARD'),
        3: t('COMMON.MAD'),
    };
    const handleChooseLevel = (e) => {
        const level = e.currentTarget.dataset.index;
        playAudio('minmax');
        changeSessionLevel(Number(level));
        if (isNewLevelOffer) {
            setNewLevelOffer(false);
        }
    };
    const currentLevelData = (0,hooks_module_js_.useMemo)(() => {
        const levelData = getCurretSessionLevelData(sessionLevel);
        const maxCoefficient = !levelData ? 0 : levelData?.listCoefficients[levelData?.listCoefficients?.length - 1];
        return {
            title: listOfTitle[sessionLevel],
            maxCoefficient,
            avtiveLevel: sessionLevel,
        };
    }, [sessionLevel, sessionLevelData, listOfTitle]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            listOfTitle,
            isLoadedData,
            isNewLevelOffer,
            newLevelOfferTitle: t('COMMON.TRY_THE_NEXT_LEVEL'),
            isDisabled: !isLoadedData || isDisabledControls || isRoundStarted || !amount || !isOnline,
            currentLevelData,
            sessionLevel,
            handleChooseLevel,
        }) }));
}
const ChickenzapLevelControls = (0,index_js_.observer)(_ChickenzapLevelControls);

;// ./src/framework/components.chickenzap/ChickenzapLevelControls/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
;// ./src/framework/components.chickenzap/chickenzapInputNumberStep.ts

const minFractionDigits = (min, toFixed) => {
    if (toFixed)
        return toFixed;
    if (!String(min).includes('.'))
        return 0;
    const parts = String(min).split('.');
    return parts[parts.length - 1].length;
};
const getChickenzapAmountStep = (value, min, inc) => {
    let s = min;
    if (inc ? value >= 0.01 && value < 0.1 : value > 0.01 && value <= 0.1) {
        s = 0.01;
    }
    else if (inc ? value >= 0.1 && value < 1 : value > 0.1 && value <= 1) {
        s = 0.1;
    }
    else if (inc ? value >= 1 && value < 10 : value > 1 && value <= 10) {
        s = 1;
    }
    else if (inc ? value >= 10 && value < 100 : value > 10 && value <= 100) {
        s = 10;
    }
    else if (inc ? value >= 100 && value < 1000 : value > 100 && value <= 1000) {
        s = 100;
    }
    else if (inc ? value >= 1000 && value < 10000 : value > 1000 && value <= 10000) {
        s = 1000;
    }
    else if (inc ? value >= 10000 && value < 100000 : value > 10000 && value <= 100000) {
        s = 10000;
    }
    else if (value > 1) {
        s = 100000;
    }
    const isRound = s < 1 ? 0 : (value + s) % s;
    if (inc) {
        s = isRound > 0 ? s - isRound : s;
    }
    else if (isRound > 0) {
        s = isRound;
    }
    return s;
};
const changeChickenzapAmountByStep = ({ value, min, max, connectBalance, inc, toFixed, }) => {
    const step = getChickenzapAmountStep(value, min, inc);
    const fractionDigits = minFractionDigits(min, toFixed);
    if (inc) {
        const next = value + step;
        const clamped = next >= max ? max : next;
        return (0,truncateDecimals/* default */.A)(Number(clamped.toFixed(2)), fractionDigits);
    }
    const next = value - step;
    const clamped = next <= min ? (connectBalance === 0 ? 0 : min) : next;
    return (0,truncateDecimals/* default */.A)(Number(Number(clamped).toFixed(2)), fractionDigits);
};

;// ./src/framework/components.chickenzap/ChickenzapControlAmountMinus/ChickenzapControlAmountMinus.tsx






function _ChickenzapControlAmountMinus({ children, onClick = () => { } }) {
    const { value, min, max, connectBalance, toFixed, disabled, setAmount } = (0,hooks_module_js_.useContext)(Context);
    const handleClick = (e) => {
        if (disabled)
            return;
        setAmount(changeChickenzapAmountByStep({
            value,
            min,
            max,
            connectBalance,
            inc: false,
            toFixed,
        }));
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled: value <= min,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const ChickenzapControlAmountMinus = (0,index_js_.observer)(_ChickenzapControlAmountMinus);

;// ./src/framework/components.chickenzap/ChickenzapControlAmountMinus/index.tsx


;// ./src/framework/components.chickenzap/ChickenzapControlAmountPlus/ChickenzapControlAmountPlus.tsx






function _ChickenzapControlAmountPlus({ children, onClick = () => { } }) {
    const { value, min, max, connectBalance, toFixed, disabled, setAmount } = (0,hooks_module_js_.useContext)(Context);
    const handleClick = (e) => {
        if (disabled)
            return;
        setAmount(changeChickenzapAmountByStep({
            value,
            min,
            max,
            connectBalance,
            inc: true,
            toFixed,
        }));
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled: value >= max,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const ChickenzapControlAmountPlus = (0,index_js_.observer)(_ChickenzapControlAmountPlus);

;// ./src/framework/components.chickenzap/ChickenzapControlAmountPlus/index.tsx


;// ./src/framework/components.chickenzap/ChickenzapControlAmount/ChickenzapControlAmount.tsx








const Context = (0,preact_module_js_.createContext)({});
function _ChickenzapControlAmount({ children }) {
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { isRoundStarted, amount, gameConfig, isDisabledControls, setAmount, isRoundProcessing }, uiCommon: { amountError }, freebetsCommon: { freebetsSuccessIndexList, freebetEnabled, freebetActive }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const tooltipTimeout = (0,hooks_module_js_.useRef)(null);
    const amountErrorRef = (0,hooks_module_js_.useRef)(false);
    const [connectBalance, setConnectBalance] = (0,hooks_module_js_.useState)(balance);
    const [isShowTooltip, setisShowTooltip] = (0,hooks_module_js_.useState)(false);
    const [tooltipText, setTooltipText] = (0,hooks_module_js_.useState)(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
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
            setTooltipText(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
        }
        if (amountError && !isRoundStarted) {
            amountErrorRef.current = true;
            setisShowTooltip(true);
            setTooltipText(amountError);
        }
        else if (Number(amount) === maxBet && !amountError) {
            setisShowTooltip(true);
            setTooltipText(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
            if (tooltipTimeout.current) {
                clearTimeout(tooltipTimeout.current);
            }
            tooltipTimeout.current = window.setTimeout(() => {
                setisShowTooltip(false);
            }, gameConfig.amountTooltipTimeout);
        }
        else if (amountError && isRoundStarted && balance < Number(amount)) {
            setisShowTooltip(false);
        }
    }, [amount, maxWin, amountError, isRoundStarted]);
    const isFreebetEnabled = freebetsSuccessIndexList.includes(0) && freebetEnabled;
    const disabled = isRoundStarted ||
        isDisabledControls ||
        !balance ||
        freebetsSuccessIndexList.includes(0) ||
        (!isRoundStarted && balance < minBet && !isFreebetEnabled);
    const value = Number(amount);
    const max = balance > 0 ? Math.min(balance, maxBet) : maxBet;
    const toFixed = rounding > 0 ? rounding - 1 : rounding;
    (0,hooks_module_js_.useEffect)(() => {
        if (freebetEnabled) {
            const betAmount = freebetActive?.offer?.configuration[0]?.betAmount;
            setConnectBalance(betAmount);
            setAmount(betAmount);
            return;
        }
        if (!isRoundProcessing) {
            setConnectBalance(balance);
        }
    }, [amount, balance, freebetEnabled, isRoundProcessing, freebetActive]);
    const contextValue = {
        value,
        min: minBet,
        max,
        connectBalance: balance,
        toFixed,
        disabled,
        setAmount,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: contextValue, children: children({
            title: t('COMMON.BET_AMOUNT'),
            titleError: amountError,
            isShowTooltip,
            titleMaxWin: tooltipText,
            disabled,
            defaultValue: value,
            min: minBet,
            max: maxBet,
            onChange: setAmount,
            prefix: currencySign,
            connectBalance,
            rounding: toFixed,
            showNotificationForMiniBet,
            gtmAction: 'input_value_changed',
            pushGtmDataOnValueChange: true,
        }) }));
}
const ChickenzapControlAmount = Object.assign((0,index_js_.observer)(_ChickenzapControlAmount), {
    Minus: ChickenzapControlAmountMinus,
    Plus: ChickenzapControlAmountPlus,
});

;// ./src/framework/components.chickenzap/ChickenzapControlAmount/index.tsx


;// ./src/framework/components.chickenzap/ChickenzapButtonStep/ChickenzapButtonStep.tsx






function _ChickenzapButtonStep({ children, onClick = () => { }, spaceKeyEnabled = false, isUseFoxyroadSound = false, }) {
    const { disabled, setFreebetTooltipShow } = (0,hooks_module_js_.useContext)(ChickenzapButton_Context);
    const { game: { isActiveWinPopup, placeBet, hideWinPopup, gtmTrackedElementClicked }, } = (0,bootstrap.GET_STORE)();
    const pressRef = (0,hooks_module_js_.useRef)();
    const handleClick = () => {
        if (disabled)
            return;
        setFreebetTooltipShow(false);
        gtmTrackedElementClicked();
        placeBet(true, isUseFoxyroadSound);
        onClick();
    };
    (0,hooks_module_js_.useEffect)(() => {
        pressRef.current = (e) => {
            if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
                handleClick();
            }
        };
    }, [
        spaceKeyEnabled,
        disabled,
        setFreebetTooltipShow,
        isActiveWinPopup,
        placeBet,
        hideWinPopup,
        gtmTrackedElementClicked,
        onClick,
    ]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!spaceKeyEnabled)
            return;
        const press = (e) => {
            pressRef.current?.(e);
        };
        document.addEventListener('keydown', press);
        return () => {
            document.removeEventListener('keydown', press);
        };
    }, []);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const ChickenzapButtonStep = (0,index_js_.observer)(_ChickenzapButtonStep);

;// ./src/framework/components.chickenzap/ChickenzapButtonStep/index.tsx


;// ./src/framework/components.chickenzap/ChickenzapButtonCashout/ChickenzapButtonCashout.tsx







function _ChickenzapButtonCashout({ children, onClick = () => { } }) {
    const { disabled, disabledCashout, buttonType, setFreebetTooltipShow } = (0,hooks_module_js_.useContext)(ChickenzapButton_Context);
    const { game: { isRoundStarted, cashout }, } = (0,bootstrap.GET_STORE)();
    const tooltipTimeout = (0,hooks_module_js_.useRef)(null);
    const handleClick = () => {
        if (!isRoundStarted)
            return;
        if (disabled || disabledCashout) {
            if (buttonType === ButtonType.freebet) {
                setFreebetTooltipShow(true);
                if (tooltipTimeout.current) {
                    clearTimeout(tooltipTimeout.current);
                }
                tooltipTimeout.current = setTimeout(() => {
                    setFreebetTooltipShow(false);
                    tooltipTimeout.current = null;
                }, 3000);
            }
            return;
        }
        cashout();
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const ChickenzapButtonCashout = (0,index_js_.observer)(_ChickenzapButtonCashout);

;// ./src/framework/components.chickenzap/ChickenzapButtonCashout/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
;// ./src/framework/components.chickenzap/ChickenzapButton/ChickenzapButton.tsx










var ButtonType;
(function (ButtonType) {
    ButtonType["regular"] = "regular";
    ButtonType["freebet"] = "freebet";
})(ButtonType || (ButtonType = {}));
const ChickenzapButton_Context = (0,preact_module_js_.createContext)({});
function _ChickenzapButton({ children }) {
    const { game: { step, amount, isWinPopupAnimation, sessionLevel, gameStatus, stepWinResult, isTurboBet, isGameCreated, isRoundStarted, isStepProcessing, isDisabledControls, isBetButtonPressed, isStepnimationProcessing, isWinAnimationCompleted, getCurretSessionLevelData, isCashoutProcessing, isCanvasLoaded, retrieveGameData, }, uiCommon: { amountError, isOnline }, autobetCommon: { autoBetEnabled }, profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxWin }, }, freebetsCommon: { freebetsSuccessIndexList, listGetByIndex, freebetActive, freebetEnabled, freebets }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [freebetTooltipShow, setFreebetTooltipShow] = (0,hooks_module_js_.useState)(false);
    const [autobetCount, setAutobetCount] = (0,hooks_module_js_.useState)(-1);
    const [isLoadingSlow, setIsLoadingSlow] = (0,hooks_module_js_.useState)(false);
    const [isOpenAutobetList, setIsOpenAutobetList] = (0,hooks_module_js_.useState)(false);
    const freebet = listGetByIndex(0);
    const isFreebetEnabled = freebetsSuccessIndexList.includes(0);
    const freebetAmount = freebetActive?.offer?.configuration[0]?.betAmount ||
        freebet?.freebetActive?.offer?.configuration[0]?.betAmount ||
        0;
    const minCoefficient = freebetActive?.offer?.configuration[0]?.minCoefficient ||
        freebet?.freebetActive?.offer?.configuration[0]?.minCoefficient;
    const buttonType = isFreebetEnabled || freebet?.freebetActive ? ButtonType.freebet : ButtonType.regular;
    const cashOutPayout = (0,hooks_module_js_.useMemo)(() => {
        const coefId = step === 0 ? 0 : step - 1;
        const levelData = getCurretSessionLevelData(sessionLevel);
        const coefficient = levelData?.listCoefficients[coefId];
        const currentAmount = coefficient * Number(amount) || 0;
        const finalAmount = Math.min(currentAmount, maxWin + Number(amount));
        return `${currencySign} ${(0,truncateDecimals/* default */.A)((0,floor/* default */.A)(finalAmount), rounding)}`;
    }, [step, amount, currencySign, sessionLevel, rounding, maxWin]);
    const disabled = !isOnline ||
        (isRoundStarted && !isWinAnimationCompleted) ||
        isStepProcessing ||
        isStepnimationProcessing ||
        isDisabledControls ||
        !isGameCreated ||
        (!isRoundStarted && !Number(amount) && !isFreebetEnabled && !!freebet?.freebetActive) ||
        (!isRoundStarted && !balance && !isFreebetEnabled) ||
        (!isRoundStarted && balance < minBet && !isFreebetEnabled) ||
        (!isRoundStarted && balance < Number(amount) && !isFreebetEnabled) ||
        isWinPopupAnimation ||
        !isCanvasLoaded ||
        !!retrieveGameData ||
        (!isRoundStarted && Number(amount) < minBet && !isFreebetEnabled);
    const disabledCashout = isCashoutProcessing || (buttonType === ButtonType.freebet && !(stepWinResult?.multiplier >= minCoefficient));
    const props = {
        isRoundStarted,
        isStepnimationProcessing,
        buttonType,
        disabled,
        disabledCashout,
        cashOutTitle: t('COMMON.CASHOUT'),
        cashOutPayout,
        loading: isLoadingSlow,
        isBetButtonPressed,
        isTurboBet,
        isAutoBetEnabled: autoBetEnabled,
        isActiveRound: gameStatus === 'running',
        autobetCount,
        isOpenAutobetList,
        setAutobetCount,
        setIsOpenAutobetList,
        freebetEnabled: isFreebetEnabled,
        freebetAmount: `${currencySign}${freebetAmount}`,
        freebetTooltipShow,
        setFreebetTooltipShow,
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (!disabled && !disabledCashout) {
            setFreebetTooltipShow(false);
        }
    }, [disabled, disabledCashout]);
    return ((0,jsxRuntime_module/* jsx */.Y)(ChickenzapButton_Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const ChickenzapButton = Object.assign((0,index_js_.observer)(_ChickenzapButton), {
    Step: ChickenzapButtonStep,
    Cashout: ChickenzapButtonCashout,
});

;// ./src/framework/components.chickenzap/ChickenzapButton/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/ratesConverter.ts
var ratesConverter = __webpack_require__(37288);
;// ./src/framework/components.chickenzap/ChickenzapLiveCashouts/ChickenzapLiveCashouts.tsx





function _ChickenzapLiveCashouts({ children }) {
    const { game: { isActiveWinPopup, liveCashouts }, profileCommon: { profile: { currencySign, currency }, rates, settings: { options }, }, } = (0,bootstrap.GET_STORE)();
    if (!currency || !liveCashouts.currency || !!options?.hideHighScore)
        return null;
    const [isVisible, setIsVisible] = (0,hooks_module_js_.useState)(false);
    const liveTimeout = (0,hooks_module_js_.useRef)(null);
    const payout = (0,ratesConverter/* default */.A)(rates, liveCashouts.currency, currency, liveCashouts.payout);
    (0,hooks_module_js_.useEffect)(() => {
        if (liveCashouts.index && !liveTimeout.current) {
            setIsVisible(true);
            liveTimeout.current = setTimeout(() => {
                setIsVisible(false);
                liveTimeout.current = null;
            }, 3000);
        }
    }, [liveCashouts.index]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            username: liveCashouts.name,
            currencySign,
            payout,
            isVisible: isVisible && !isActiveWinPopup,
        }) }));
}
const ChickenzapLiveCashouts = (0,index_js_.observer)(_ChickenzapLiveCashouts);

;// ./src/framework/components.chickenzap/ChickenzapLiveCashouts/index.tsx


;// ./src/framework/components.chickenzap/export.ts









/***/ }),

/***/ 37288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77889);

const getPrecisionFromFactor = (factor) => {
    return Math.log10(factor);
};
const ratesConverter = (rates, betCurrency, userCurrency, amount, useBetPrecision = false) => {
    if (betCurrency === userCurrency)
        return (0,_helpers_round__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(amount);
    try {
        const [betRate, betPrecisionFactor] = rates[betCurrency?.toLowerCase()];
        const [userRate, userPrecisionFactor] = rates[userCurrency?.toLowerCase()];
        const convertedAmount = (amount / betRate) * userRate;
        const precisionFactor = useBetPrecision ? betPrecisionFactor : userPrecisionFactor;
        const precision = getPrecisionFromFactor(precisionFactor);
        return (0,_helpers_round__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(convertedAmount, precision);
    }
    catch (error) {
        console.log(error);
        return (0,_helpers_round__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(amount);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ratesConverter);


/***/ })

}]);