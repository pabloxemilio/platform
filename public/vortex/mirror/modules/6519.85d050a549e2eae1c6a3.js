"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[6519,7402,7518],{

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

/***/ 4943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CanvasController)
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
}


/***/ }),

/***/ 93256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CatanzaAutoSpinButton: () => (/* reexport */ CatanzaAutoSpinButton),
  CatanzaButton: () => (/* reexport */ CatanzaButton),
  CatanzaControlAmount: () => (/* reexport */ CatanzaControlAmount),
  CatanzaGame: () => (/* reexport */ CatanzaGame),
  CatanzaPayTable: () => (/* reexport */ CatanzaPayTable),
  CatanzaRender: () => (/* reexport */ CatanzaRender),
  catanzaCanvasController: () => (/* reexport */ catanzaCanvasController)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var es_index_js_ = __webpack_require__(90);
;// ./src/framework/components.catanza/CatanzaRender/CatanzaRender.tsx



function _CatanzaRender({ children, betData, rounding }) {
    if (!betData)
        return null;
    const { t } = (0,index_js_.useTranslation)();
    const uniqueListWinSymbols = Array.isArray(betData?.game.comboSymbols) ? [...betData?.game.comboSymbols] : [];
    betData?.game?.symbols.forEach(symbol => {
        betData?.game?.comboSymbols.forEach(element => {
            if (String(symbol)[1]?.includes(String(element))) {
                if (!uniqueListWinSymbols.includes(symbol)) {
                    uniqueListWinSymbols.push(symbol);
                }
            }
        });
    });
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            coefficient: betData.game.coefficient,
            bonusCoefficient: betData?.game?.bonusCoefficient,
            payout: betData.payout,
            symbols: betData?.game?.symbols || [],
            isWinWithSymbols: !!betData?.game?.coefficient,
            isBonus: !!betData?.game?.bonusCoefficient,
            isWin: !!betData?.game?.totalCoefficient,
            comboType: betData?.game?.comboType,
            uniqueListWinSymbols
        }) }));
}
const CatanzaRender = (0,es_index_js_.observer)(_CatanzaRender);

;// ./src/framework/components.catanza/CatanzaRender/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: ./src/canvas/controller/types/сatanza/Controller.ts
var _atanza_Controller = __webpack_require__(4943);
;// ./src/framework/components.catanza/CatanzaCanvasController/CatanzaCanvasController.ts

class Controller extends _atanza_Controller/* default */.A {
}
const catanzaCanvasController = new Controller();

;// ./src/framework/components.catanza/CatanzaCanvasController/index.ts


;// ./src/framework/components.catanza/CatanzaButtonStart/CatanzaButtonStart.tsx







function _CatanzaButtonStart({ children }) {
    const { disabled } = (0,hooks_module_js_.useContext)(Context);
    const { game: { isTurboBet, amount, gameStatus, isActiveBonusModal, isActiveWonModal, isRoundError, placeBet, setDisabledBetBtn, setGameWonResult, setBetButtonPressed, setActiveWonModal }, audioCommon: { playAudio }, autobetCommon: { autoBetEnabled, setAutoBetEnabled }, profileCommon: { profile: { balance }, }, uiCommon: { showNotEnoughBalanceError }, freebetsCommon: { freebetEnabled, freebetsSuccessIndexList }, } = (0,bootstrap.GET_STORE)();
    if (freebetEnabled && freebetsSuccessIndexList.includes(0))
        return null;
    const touchHandledRef = (0,hooks_module_js_.useRef)(false);
    const timerRef = (0,hooks_module_js_.useRef)(null);
    const [isLongPress, setIsLongPress] = (0,hooks_module_js_.useState)(false);
    const handlePreventDefault = (e) => {
        e.preventDefault();
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };
    const handleBet = (isTurboBet) => {
        if (disabled || !Number(amount))
            return false;
        if (balance !== null && balance <= 0) {
            showNotEnoughBalanceError();
            return;
        }
        playAudio('placebet');
        placeBet(isTurboBet);
        catanzaCanvasController.invoke('spin', { isTurbo: isTurboBet });
        setTimeout(() => {
            setGameWonResult(null);
        }, 500);
    };
    const handleClick = () => {
        if (autoBetEnabled) {
            setAutoBetEnabled(false);
            return;
        }
        if (gameStatus === 'waiting') {
            if (isActiveWonModal) {
                playAudio('closeModal');
                catanzaCanvasController.invoke('hideWin', { isFast: true });
                setActiveWonModal(false);
            }
            handleBet(isTurboBet);
        }
        else {
            catanzaCanvasController.invoke('stopSpin');
            setDisabledBetBtn(true);
        }
    };
    const handleLongPressCancel = () => {
        setIsLongPress(false);
        setBetButtonPressed(false);
    };
    const handleMouseDown = () => {
        setIsLongPress(false);
        setBetButtonPressed(false);
        timerRef.current = setTimeout(() => {
            setIsLongPress(true);
            setBetButtonPressed(true);
        }, 500);
    };
    const handleMouseUp = (e) => {
        handlePreventDefault(e);
        if (timerRef.current)
            clearTimeout(timerRef.current);
        if (isLongPress) {
            handleLongPressCancel();
        }
        else {
            handleClick();
        }
    };
    const handleTouchStart = () => {
        touchHandledRef.current = true;
        handleMouseDown();
    };
    const handleTouchEnd = (e) => {
        handleMouseUp(e);
        setTimeout(() => (touchHandledRef.current = false), 100);
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (isActiveWonModal || isActiveBonusModal)
            return;
        if (isLongPress && gameStatus === 'waiting') {
            handleBet(true);
        }
    }, [isLongPress, gameStatus, isActiveBonusModal, isActiveWonModal]);
    (0,hooks_module_js_.useEffect)(() => {
        if (isRoundError) {
            const data = {
                reels: [
                    [2, 3, 15],
                    [17, 1, 5],
                    [13, 4, 17],
                    [2, 3, 15],
                    [5, 2, 3],
                ],
                result: 'lost',
                listWin: [],
                isBonus: false,
            };
            catanzaCanvasController.invoke('stopSpin');
            catanzaCanvasController.invoke('sendResult', data);
        }
    }, [isRoundError]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onMouseDown: handleMouseDown,
            onMouseUp: handleMouseUp,
            onTouchStart: handleTouchStart,
            onTouchEnd: handleTouchEnd,
            onTouchMove: handlePreventDefault,
            onContextMenu: handlePreventDefault,
            onMouseLeave: (e) => isLongPress && handleMouseUp(e),
            onPointerLeave: (e) => isLongPress && handleMouseUp(e),
            onDblClick: handlePreventDefault,
            onClick: handlePreventDefault,
        })) }));
}
const CatanzaButtonStart = (0,es_index_js_.observer)(_CatanzaButtonStart);

;// ./src/framework/components.catanza/CatanzaButtonStart/index.tsx


;// ./src/framework/components.catanza/CatanzaButtonAutobet/CatanzaButtonAutobet.tsx






function _CatanzaButtonAutobet({ children, handleSpin = () => { }, }) {
    const { game: { gameStatus, isActiveBonusModal, isActiveWonModal, isTurboBet, isGameCreated, placeBet, setGameWonResult }, audioCommon: { playAudio }, autobetCommon: { autoBetEnabled, setAutoBetEnabled }, uiCommon: { amountError, isOnline }, } = (0,bootstrap.GET_STORE)();
    const isTurboBetRef = (0,hooks_module_js_.useRef)(isTurboBet);
    const { disabled, autobetCount, isOpenAutobetList, setIsOpenAutobetList, setAutobetCount } = (0,hooks_module_js_.useContext)(Context);
    const handleUp = (e) => {
        if (disabled || autoBetEnabled)
            return;
        setIsOpenAutobetList(!isOpenAutobetList);
    };
    (0,hooks_module_js_.useEffect)(() => {
        isTurboBetRef.current = isTurboBet;
    }, [isTurboBet]);
    (0,hooks_module_js_.useEffect)(() => {
        if (isActiveWonModal || isActiveBonusModal || !isOnline)
            return;
        if (autoBetEnabled && gameStatus === 'waiting' && autobetCount > 0 && isGameCreated) {
            placeBet(isTurboBetRef.current);
            handleSpin();
            playAudio('placebet');
            setAutobetCount(autobetCount - 1);
            setTimeout(() => {
                setGameWonResult(null);
            }, 500);
        }
        if (autoBetEnabled && autobetCount === 0 && gameStatus === 'waiting') {
            setAutoBetEnabled(false);
        }
    }, [autobetCount, autoBetEnabled, gameStatus, isActiveWonModal, isActiveBonusModal, isGameCreated, isOnline]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleUp,
        })) }));
}
const CatanzaButtonAutobet = (0,es_index_js_.observer)(_CatanzaButtonAutobet);

;// ./src/framework/components.catanza/CatanzaButtonAutobet/index.tsx


;// ./src/framework/components.catanza/CatanzaButtonAutobetListItem/CatanzaButtonAutobetListItem.tsx





function _CatanzaButtonAutobetListItem({ children, onClick = () => { } }) {
    const { game: { gameConfig }, autobetCommon: { autoBetEnabled, setAutoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { isOpenAutobetList, setIsOpenAutobetList, setAutobetCount } = (0,hooks_module_js_.useContext)(Context);
    const [active, setActive] = (0,hooks_module_js_.useState)(-1);
    const handleClick = (e) => {
        e.stopPropagation();
        onClick(e);
        setAutobetCount(Number(e.currentTarget.dataset.value));
        setAutoBetEnabled(true);
        setIsOpenAutobetList(!isOpenAutobetList);
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (!autoBetEnabled)
            setActive(-1);
    }, [autoBetEnabled]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (Array.isArray(gameConfig?.autobet?.list) ? gameConfig?.autobet?.list : []).map((item, index) => (0,preact_module_js_.toChildArray)(children({
            active: active === index,
            value: item,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onclick: handleClick,
            'data-index': index,
            'data-value': item,
            key: index,
        }))) }));
}
const CatanzaButtonAutobetListItem = _CatanzaButtonAutobetListItem;

;// ./src/framework/components.catanza/CatanzaButtonAutobetListItem/index.tsx


;// ./src/framework/components.catanza/CatanzaButtonSpeedUp/CatanzaButtonSpeedUp.tsx




function _CatanzaButtonSpeedUp({ children }) {
    const { game: { isTurboBet, setTurboBet, isDisabledControls }, autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: 'SPEED UP',
            isDisabled: isDisabledControls || autoBetEnabled,
            isActive: isTurboBet,
            onClick: setTurboBet,
        }) }));
}
const CatanzaButtonSpeedUp = (0,es_index_js_.observer)(_CatanzaButtonSpeedUp);

;// ./src/framework/components.catanza/CatanzaButtonSpeedUp/index.tsx


;// ./src/framework/components.catanza/CatanzaButtonStartHoldToSpin/CatanzaButtonStartHoldToSpin.tsx


function _CatanzaButtonStartHoldToSpin({ children }) {
    const { game: { gameStatus, isBetButtonPressed }, autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    if (autoBetEnabled || gameStatus === 'running' && !isBetButtonPressed)
        return null;
    return children;
}
const CatanzaButtonStartHoldToSpin = (0,es_index_js_.observer)(_CatanzaButtonStartHoldToSpin);

;// ./src/framework/components.catanza/CatanzaButtonStartHoldToSpin/index.tsx


;// ./src/framework/components.catanza/CatanzaButtonStartAutoSpin/CatanzaButtonStartAutoSpin.tsx


function _CatanzaButtonStartAutoSpin({ children }) {
    const { autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    if (!autoBetEnabled)
        return null;
    return children;
}
const CatanzaButtonStartAutoSpin = (0,es_index_js_.observer)(_CatanzaButtonStartAutoSpin);

;// ./src/framework/components.catanza/CatanzaButtonStartAutoSpin/index.tsx


;// ./src/framework/components.catanza/CatanzaButtonStartStopSpin/CatanzaButtonStartStopSpin.tsx


function _CatanzaButtonStartStopSpin({ children }) {
    const { game: { gameStatus, isBetButtonPressed }, autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    if (autoBetEnabled || (gameStatus === 'running' && isBetButtonPressed) || gameStatus === 'waiting')
        return null;
    return children;
}
const CatanzaButtonStartStopSpin = (0,es_index_js_.observer)(_CatanzaButtonStartStopSpin);

;// ./src/framework/components.catanza/CatanzaButtonStartStopSpin/index.tsx


;// ./src/framework/components.catanza/CatanzaButtonFreebet/CatanzaButtonFreebet.tsx







function _CatanzaButtonFreebet({ children }) {
    const { game: { isTurboBet, gameStatus, isRoundError, isActiveWonModal, placeBet, setDisabledBetBtn, setGameWonResult, setActiveWonModal, }, audioCommon: { playAudio }, freebetsCommon: { freebetEnabled, freebetsSuccessIndexList, freebets }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,index_js_.useTranslation)();
    if (!freebetEnabled || !freebetsSuccessIndexList.includes(0))
        return null;
    const handleBet = (isTurboBet) => {
        playAudio('placebet');
        placeBet(isTurboBet);
        catanzaCanvasController.invoke('spin', { isTurbo: isTurboBet });
        setTimeout(() => {
            setGameWonResult(null);
        }, 500);
    };
    const handleClick = () => {
        if (gameStatus === 'waiting') {
            if (isActiveWonModal) {
                playAudio('closeModal');
                catanzaCanvasController.invoke('hideWin', { isFast: true });
                setActiveWonModal(false);
            }
            handleBet(isTurboBet);
            setDisabledBetBtn(true);
        }
        else {
            catanzaCanvasController.invoke('stopSpin');
            setDisabledBetBtn(true);
        }
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (isRoundError) {
            const data = {
                reels: [
                    [2, 3, 15],
                    [17, 1, 5],
                    [13, 4, 17],
                    [2, 3, 15],
                    [5, 2, 3],
                ],
                result: 'lost',
                listWin: [],
                isBonus: false,
            };
            catanzaCanvasController.invoke('stopSpin');
            catanzaCanvasController.invoke('sendResult', data);
        }
    }, [isRoundError]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: () => handleClick(),
            onContextMenu: (e) => e.preventDefault(),
            onDblClick: (e) => e.preventDefault(),
        })) }));
}
const CatanzaButtonFreebet = (0,es_index_js_.observer)(_CatanzaButtonFreebet);

;// ./src/framework/components.catanza/CatanzaButtonFreebet/index.tsx


;// ./src/framework/components.catanza/CatanzaButton/CatanzaButton.tsx














const Context = (0,preact_module_js_.createContext)({});
function _CatanzaButton({ children }) {
    const { game: { isTurboBet, amount, isBetButtonPressed, isLoadingPlaceBet, isDisabledBetBtn, isDisabledControls, gameStatus, isActiveBonusModal, }, uiCommon: { amountError, isOnline }, autobetCommon: { autoBetEnabled }, profileCommon: { profile: { balance, currencySign }, }, freebetsCommon: { freebetEnabled, freebetActive, freebetsSuccessIndexList, freebets }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,index_js_.useTranslation)();
    const freebetAmount = freebets[0]?.offer?.configuration[0]?.betAmount || 0;
    const [autobetCount, setAutobetCount] = (0,hooks_module_js_.useState)(-1);
    const [isLoadingSlow, setIsLoadingSlow] = (0,hooks_module_js_.useState)(false);
    const [isOpenAutobetList, setIsOpenAutobetList] = (0,hooks_module_js_.useState)(false);
    const startTimeRef = (0,hooks_module_js_.useRef)(null);
    const loadingTimerRef = (0,hooks_module_js_.useRef)(null);
    const hideLoadingTimerRef = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        if (isLoadingPlaceBet) {
            if (loadingTimerRef.current)
                clearTimeout(loadingTimerRef.current);
            loadingTimerRef.current = setTimeout(() => {
                setIsLoadingSlow(true);
                startTimeRef.current = Date.now();
            }, 1500);
        }
        if (!isLoadingPlaceBet) {
            if (isLoadingSlow) {
                const elapsedTime = Date.now() - (startTimeRef.current || 0);
                if (elapsedTime < 500) {
                    if (hideLoadingTimerRef.current)
                        clearTimeout(hideLoadingTimerRef.current);
                    hideLoadingTimerRef.current = setTimeout(() => {
                        setIsLoadingSlow(false);
                    }, 500 - elapsedTime);
                }
                else {
                    setIsLoadingSlow(false);
                }
            }
        }
        return () => {
            if (loadingTimerRef.current)
                clearTimeout(loadingTimerRef.current);
            if (hideLoadingTimerRef.current)
                clearTimeout(hideLoadingTimerRef.current);
        };
    }, [isLoadingPlaceBet, isLoadingSlow]);
    const props = {
        disabled: !isOnline ||
            isDisabledBetBtn ||
            isDisabledControls ||
            isActiveBonusModal ||
            !Number(amount) ||
            !balance && !freebetEnabled ||
            (freebetEnabled && freebetActive.left - 1 < 0),
        loading: isLoadingSlow,
        isBetButtonPressed,
        isTurboBet,
        isAutoBetEnabled: autoBetEnabled,
        isActiveRound: gameStatus === 'running',
        autobetCount,
        isOpenAutobetList,
        setAutobetCount,
        setIsOpenAutobetList,
        freebetEnabled: freebetsSuccessIndexList.includes(0) && freebetEnabled,
        freebetAmount: `${currencySign}${freebetAmount}`,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const CatanzaButton = Object.assign((0,es_index_js_.observer)(_CatanzaButton), {
    Start: CatanzaButtonStart,
    StartHoldToSpin: CatanzaButtonStartHoldToSpin,
    StartAutoSpin: CatanzaButtonStartAutoSpin,
    StartStopSpin: CatanzaButtonStartStopSpin,
    Autobet: CatanzaButtonAutobet,
    AutobetListItem: CatanzaButtonAutobetListItem,
    SpeedUp: CatanzaButtonSpeedUp,
    Freebet: CatanzaButtonFreebet,
});

;// ./src/framework/components.catanza/CatanzaButton/index.tsx


;// ./src/framework/api/catanza/types.ts
var SymbolsCombination;
(function (SymbolsCombination) {
    SymbolsCombination["Default"] = "$  $";
    SymbolsCombination["Loss"] = ">  <";
    SymbolsCombination["FiveLosses"] = "\uFF0F\u043E\u043E\uFF3C";
    SymbolsCombination["SevenLossesRight"] = "o  O";
    SymbolsCombination["SevenLossesLeft"] = "O  o";
    SymbolsCombination["Bonus"] = "\u2299\u2299";
    SymbolsCombination["EarRight"] = "\u2013  <";
    SymbolsCombination["EarLeft"] = ">  \u2013";
    SymbolsCombination["IdleRight"] = "o O";
    SymbolsCombination["IdleLeft"] = "O o";
})(SymbolsCombination || (SymbolsCombination = {}));
var CoefCombination;
(function (CoefCombination) {
    CoefCombination["ThreeOfKind"] = "3";
    CoefCombination["FourOfKind"] = "4";
    CoefCombination["FiveOfKind"] = "5";
    CoefCombination["ThreeAndPair"] = "3+";
    CoefCombination["TwoPairs"] = "2+";
    CoefCombination["FiveGolden"] = "5g";
    CoefCombination["FourGolden"] = "4g";
    CoefCombination["ThreeAndPairGolden"] = "3+g";
    CoefCombination["ThreeGolden"] = "3g";
    CoefCombination["TwoPairsGolden"] = "2+g";
})(CoefCombination || (CoefCombination = {}));

;// ./src/framework/components.catanza/CatanzaGame/CatanzaGame.tsx






const BeseWinCoefTypes = {
    [CoefCombination.ThreeAndPairGolden]: '10g',
    [CoefCombination.FourOfKind]: '10',
    [CoefCombination.FourGolden]: '25',
    [CoefCombination.FiveOfKind]: '100',
    [CoefCombination.FiveGolden]: '300',
};
const BeseWinModalTypes = {
    [CoefCombination.ThreeAndPairGolden]: 'big',
    [CoefCombination.FourOfKind]: 'big',
    [CoefCombination.FourGolden]: 'big',
    [CoefCombination.FiveOfKind]: 'mega',
    [CoefCombination.FiveGolden]: 'mega',
};
const BonusWinModalTypes = {
    5: 'youwin',
    7: 'youwin',
    10: 'big',
    20: 'mega',
};
const SoundWinTypes = {
    [CoefCombination.TwoPairs]: 'audioWon1',
    [CoefCombination.ThreeOfKind]: 'audioWon2',
    [CoefCombination.ThreeAndPair]: 'audioWon3',
    [CoefCombination.TwoPairsGolden]: 'goldx3Win',
    [CoefCombination.ThreeGolden]: 'goldx4Win',
    [CoefCombination.ThreeAndPairGolden]: 'audioGoldWon3',
    [CoefCombination.FourOfKind]: 'audioWon4',
    [CoefCombination.FourGolden]: 'audioGoldWon4',
    [CoefCombination.FiveOfKind]: 'audioWon5',
    [CoefCombination.FiveGolden]: 'audioGoldWon5',
};
const SoundWinPopupTypes = {
    [CoefCombination.ThreeAndPairGolden]: 'goldPopupx10',
    [CoefCombination.FourOfKind]: 'popupx10',
    [CoefCombination.FourGolden]: 'goldPopupx25',
    [CoefCombination.FiveOfKind]: 'popupx100',
    [CoefCombination.FiveGolden]: 'goldPopupx300',
};
const SymbolsTranslate = {
    3: 'CATANZA.3RD',
    4: 'CATANZA.4TH',
    5: 'CATANZA.5TH',
    6: 'CATANZA.6TH',
    7: 'CATANZA.7TH',
};
function _CatanzaGame({ children }) {
    const { game: { wonRounds, gameStatus, gameResult, lostRounds, isCanvasLoaded, isPreloadedDone, modalWindowQueue, isActiveWonModal, setWonRounds, setLostRounds, setGameStatus, setGameWonResult, setDisabledBetBtn, setDisableControls, setActiveWonModal, setActiveBonusModal, setCanvasLoaded, gtmBetClosed, gtmBonusGame, updateBalance, setModalWindowQueue, removeModalWindowQueue, }, audioCommon: { playAudio }, profileCommon: { profile, splitTest }, uiCommon: { guideShown }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,index_js_.useTranslation)();
    const isFirstDisplayGuideRef = (0,hooks_module_js_.useRef)(false);
    const wonRoundsRef = (0,hooks_module_js_.useRef)(wonRounds);
    const lostRoundsRef = (0,hooks_module_js_.useRef)(lostRounds);
    const gameStatusRef = (0,hooks_module_js_.useRef)(gameStatus);
    const gameResultRef = (0,hooks_module_js_.useRef)(null);
    const profileRef = (0,hooks_module_js_.useRef)(null);
    const modalWindowQueueRef = (0,hooks_module_js_.useRef)(modalWindowQueue);
    const hideWinModalTimerRef = (0,hooks_module_js_.useRef)(null);
    const isCreateCanvasRef = (0,hooks_module_js_.useRef)(false);
    (0,hooks_module_js_.useEffect)(() => {
        if (isCanvasLoaded && !isCreateCanvasRef.current) {
            const isTest = profile?.splitTest?.variantValue === 'catanza_new_wheel' && profile?.splitTest?.variantType === 'test';
            isCreateCanvasRef.current = true;
            catanzaCanvasController.invoke('createCanvas', { isTest });
        }
    }, [profile, isCanvasLoaded]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!isActiveWonModal) {
            clearTimeout(hideWinModalTimerRef.current);
        }
    }, [isActiveWonModal]);
    (0,hooks_module_js_.useEffect)(() => {
        modalWindowQueueRef.current = modalWindowQueue;
    }, [modalWindowQueue]);
    const handleChangeWonSymbols = (payout) => {
        const emojiData = {
            type: 'win',
            title: t('COMMON.WIN'),
            payout: `${profileRef.current?.currencySign || '$'}${Number(payout).toFixed(2)}`
        };
        if (SymbolsTranslate[wonRoundsRef.current]) {
            emojiData.title = t(SymbolsTranslate[wonRoundsRef.current]);
        }
        if (wonRoundsRef.current >= 8) {
            emojiData.title = t('CATANZA.N.TH');
        }
        catanzaCanvasController.invoke('changeSymbols', emojiData);
    };
    const handleChangeLossSymbols = () => {
        if (lostRoundsRef.current === 5) {
            catanzaCanvasController.invoke('changeSymbols', { type: 'default', text: SymbolsCombination.FiveLosses });
            return;
        }
        if (lostRoundsRef.current >= 7) {
            const randomLosseEmoji = lostRoundsRef.current % 2 === 0
                ? SymbolsCombination.SevenLossesRight
                : SymbolsCombination.SevenLossesLeft;
            catanzaCanvasController.invoke('changeSymbols', { type: 'default', text: randomLosseEmoji });
            return;
        }
        catanzaCanvasController.invoke('changeSymbols', { type: 'default', text: SymbolsCombination.Loss });
    };
    const handleDisplayWinModal = ({ dataModal, isPutQueue, srcAudio }) => {
        if (isPutQueue) {
            setModalWindowQueue({ id: dataModal.amount, dataModal, srcAudio });
        }
        else {
            setModalWindowQueue({ id: dataModal.amount, dataModal, srcAudio });
            playAudio(srcAudio);
            catanzaCanvasController.invoke('showWin', dataModal);
            setActiveWonModal(true);
        }
    };
    (0,hooks_module_js_.useEffect)(() => {
        catanzaCanvasController.on('eventPopUpProcessing', ({ isProcessing }) => {
            if (!isProcessing) {
                const { isShowNextModal, nextModal } = removeModalWindowQueue();
                if (isShowNextModal) {
                    handleDisplayWinModal(nextModal);
                }
            }
        });
        catanzaCanvasController.on('eventCanvasIsLoaded', () => {
            setCanvasLoaded(true);
        });
        catanzaCanvasController.on('eventBonusReel', () => {
            setTimeout(() => {
                playAudio('bonusStart');
            }, 500);
            catanzaCanvasController.invoke('changeSymbols', { type: 'default', text: SymbolsCombination.Bonus });
        });
        catanzaCanvasController.on('eventTapOnEar', ({ type }) => {
            const randomEarEmoji = type === 'right' ? SymbolsCombination.EarRight : SymbolsCombination.EarLeft;
            playAudio('tapOnEar');
            catanzaCanvasController.invoke('changeSymbols', { type: 'default', text: randomEarEmoji });
        });
        catanzaCanvasController.on('eventIntroCompleted', () => {
            setDisableControls(false);
        });
        catanzaCanvasController.on('eventPopUpAnimationCompleted', () => {
            updateBalance();
            setDisabledBetBtn(false);
            hideWinModalTimerRef.current = setTimeout(() => {
                playAudio('closeModal');
                catanzaCanvasController.invoke('hideWin', { isFast: false });
                setActiveWonModal(false);
            }, 2000);
        });
        catanzaCanvasController.on('eventSymbolLanded', () => {
            playAudio('dropTick');
        });
        catanzaCanvasController.on('eventBonusCompleted', () => {
            const { comboType, payout, symbolsCoefficient, totalCoefficient, bonusCoefficient } = gameResultRef.current;
            let dataModal = {
                type: 'bonus',
                viewType: BonusWinModalTypes[bonusCoefficient],
                amount: payout,
                bonusCoef: bonusCoefficient,
                currency: profileRef.current?.currencySign,
            };
            if (comboType) {
                dataModal = {
                    ...dataModal,
                    type: 'combo_bonus',
                    coef: totalCoefficient,
                    additionalCoef: symbolsCoefficient,
                    coefCombination: comboType
                };
            }
            setDisabledBetBtn(true);
            handleChangeWonSymbols(payout);
            handleDisplayWinModal({ dataModal, isPutQueue: false, srcAudio: 'bonusShowModalWin' });
            setGameWonResult({
                comboType,
                coef: totalCoefficient,
            });
            setActiveBonusModal(false);
            gtmBetClosed({ isWin: true, isBonus: true });
        });
        catanzaCanvasController.on('eventWinLinesCompleted', () => {
            const { comboType, bonusCoefficient } = gameResultRef.current;
            const isBonusRound = !!bonusCoefficient;
            const isDisplayModal = !!BeseWinCoefTypes[comboType];
            if (isDisplayModal || isBonusRound) {
                setDisabledBetBtn(true);
            }
            else {
                setDisabledBetBtn(false);
            }
            setGameStatus('waiting');
        });
        catanzaCanvasController.on('eventReelProcessing', ({ isProcessing }) => {
            if (!isProcessing && gameResultRef.current) {
                const { result, comboType, payout, totalCoefficient, bonusCoefficient, symbolsCoefficient } = gameResultRef.current;
                if (result === 'won') {
                    const isBonusRound = !!bonusCoefficient;
                    const isDisplayModal = !!BeseWinCoefTypes[comboType];
                    setWonRounds(true);
                    setLostRounds(false);
                    if (isBonusRound) {
                        gtmBonusGame();
                        catanzaCanvasController.invoke('showBonus', { win: String(bonusCoefficient) });
                        setActiveBonusModal(true);
                        setGameStatus('waiting');
                        setTimeout(() => {
                            playAudio('bonusStartWheel');
                        }, 2800);
                    }
                    else if (isDisplayModal) {
                        gtmBetClosed({ isWin: true });
                        const dataModal = {
                            type: 'base',
                            viewType: BeseWinModalTypes[comboType],
                            coef: BeseWinCoefTypes[comboType],
                            amount: payout,
                            coefCombination: comboType,
                            currency: profileRef.current?.currencySign
                        };
                        playAudio(SoundWinTypes[comboType]);
                        setGameWonResult({
                            comboType,
                            coef: totalCoefficient,
                        });
                        handleChangeWonSymbols(payout);
                        setDisabledBetBtn(true);
                        setTimeout(() => {
                            const isPutQueue = !!modalWindowQueueRef.current.length;
                            handleDisplayWinModal({ dataModal, isPutQueue, srcAudio: SoundWinPopupTypes[comboType] });
                        }, 1000);
                    }
                    else if (!isDisplayModal) {
                        gtmBetClosed({ isWin: true });
                        handleChangeWonSymbols(payout);
                        const data = {
                            amount: Math.floor(symbolsCoefficient)
                        };
                        catanzaCanvasController.invoke('raiseCatHands', data);
                        setGameWonResult({
                            comboType,
                            coef: totalCoefficient,
                        });
                        playAudio(SoundWinTypes[comboType]);
                        setTimeout(() => {
                            updateBalance();
                        }, 500);
                    }
                }
                if (result === 'lost') {
                    gtmBetClosed({ isWin: false });
                    setWonRounds(false);
                    setLostRounds(true);
                    handleChangeLossSymbols();
                    setTimeout(() => {
                        setDisabledBetBtn(false);
                        setGameStatus('waiting');
                    }, 200);
                }
            }
        });
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        if (gameResult) {
            gameResultRef.current = gameResult;
            const uniqueListWinSymbols = [...gameResult.comboSymbols];
            gameResult.symbols.forEach(symbol => {
                gameResult.comboSymbols.forEach(element => {
                    if (String(symbol)[1]?.includes(String(element))) {
                        if (!uniqueListWinSymbols.includes(symbol)) {
                            uniqueListWinSymbols.push(symbol);
                        }
                    }
                });
            });
            const data = {
                reels: gameResult.reels,
                result: gameResult.result,
                listWin: uniqueListWinSymbols,
                isBonus: !!gameResult.bonusCoefficient,
            };
            catanzaCanvasController.invoke('sendResult', data);
        }
    }, [gameResult]);
    (0,hooks_module_js_.useEffect)(() => {
        gameStatusRef.current = gameStatus;
        lostRoundsRef.current = lostRounds + 1;
        wonRoundsRef.current = wonRounds + 1;
    }, [gameStatus, lostRounds, wonRounds]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!isFirstDisplayGuideRef.current && guideShown) {
            isFirstDisplayGuideRef.current = true;
            catanzaCanvasController.invoke('runIntro');
        }
    }, [guideShown]);
    (0,hooks_module_js_.useEffect)(() => {
        if (isFirstDisplayGuideRef.current && isCanvasLoaded && isPreloadedDone) {
            catanzaCanvasController.invoke('runIntro');
        }
    }, [isCanvasLoaded, isPreloadedDone]);
    (0,hooks_module_js_.useEffect)(() => {
        profileRef.current = profile;
    }, [profile]);
    return children;
}
const CatanzaGame = (0,es_index_js_.observer)(_CatanzaGame);

;// ./src/framework/components.catanza/CatanzaGame/index.tsx


;// ./src/framework/components.catanza/CatanzaPayTable/CatanzaPayTable.tsx


function _CatanzaPayTable({ children }) {
    const { game: { gameWonResult, isActiveWonModal, isActiveBonusModal, }, } = (0,bootstrap.GET_STORE)();
    return (children({
        isWon: !!gameWonResult,
        comboType: gameWonResult?.comboType || null,
        isHidePayTable: isActiveWonModal || isActiveBonusModal
    }));
}
const CatanzaPayTable = (0,es_index_js_.observer)(_CatanzaPayTable);

;// ./src/framework/components.catanza/CatanzaPayTable/index.tsx


;// ./src/framework/components.catanza/CatanzaControlAmount/CatanzaControlAmount.tsx





function _CatanzaControlAmount({ children }) {
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { gameStatus, amount, gameConfig, isDisabledControls, isActiveBonusModal, setAmount }, uiCommon: { amountError }, freebetsCommon: { freebetsSuccessIndexList, freebetEnabled }, autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,index_js_.useTranslation)();
    const tooltipTimeout = (0,hooks_module_js_.useRef)(null);
    const amountErrorRef = (0,hooks_module_js_.useRef)(false);
    const [isShowTooltip, setisShowTooltip] = (0,hooks_module_js_.useState)(false);
    const [tooltipText, setTooltipText] = (0,hooks_module_js_.useState)(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
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
                setTooltipText(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
            }, gameConfig.amountTooltipTimeout);
        }
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (!amountError && amountErrorRef.current) {
            setisShowTooltip(false);
            setTooltipText(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
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
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            titleError: amountError,
            isShowTooltip,
            titleMaxWin: tooltipText,
            disabled: freebetsSuccessIndexList.includes(0) ||
                isDisabledControls ||
                isActiveBonusModal ||
                autoBetEnabled ||
                gameStatus === 'running',
            defaultValue: Number(amount) || 0,
            min: minBet,
            max: maxBet,
            onChange: setAmount,
            currencySign,
            prefix: '',
            connectBalance: freebetEnabled || freebetsSuccessIndexList.includes(0) ? undefined : balance,
            rounding: rounding > 0 ? rounding - 1 : rounding,
            showNotificationForMiniBet,
            gtmAction: 'input_value_changed',
            pushGtmDataOnValueChange: true,
        }) }));
}
const CatanzaControlAmount = (0,es_index_js_.observer)(_CatanzaControlAmount);

;// ./src/framework/components.catanza/CatanzaControlAmount/index.tsx


;// ./src/framework/components.catanza/CatanzaAutoSpinButton/CatanzaAutoSpinButton.tsx



function _CatanzaAutoSpinButton({ children }) {
    const { game: { isDisabledControls, }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            isDisabled: isDisabledControls
        }) }));
}
const CatanzaAutoSpinButton = (0,es_index_js_.observer)(_CatanzaAutoSpinButton);

;// ./src/framework/components.catanza/CatanzaAutoSpinButton/index.tsx


;// ./src/framework/components.catanza/export.ts









/***/ })

}]);