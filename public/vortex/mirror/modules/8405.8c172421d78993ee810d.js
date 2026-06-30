"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2302,7402,7518,8405],{

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

/***/ 80038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* binding */ PandaPokerCanvasController)
});

;// ./src/canvas/controller/types/panda/Controller.ts
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

;// ./src/framework/components.pandapoker/PandaPokerCanvasController/PandaPokerCanvasController.ts

class Controller extends CanvasController {
}
const PandaPokerCanvasController = new Controller();


/***/ }),

/***/ 88888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PandaPokerAmountButtonMinus: () => (/* reexport */ PandaPokerAmountButtonMinus),
  PandaPokerAmountButtonPlus: () => (/* reexport */ PandaPokerAmountButtonPlus),
  PandaPokerAutoSpinButton: () => (/* reexport */ PandaPokerAutoSpinButton),
  PandaPokerButton: () => (/* reexport */ PandaPokerButton),
  PandaPokerCanvasController: () => (/* reexport */ PandaPokerCanvasController/* PandaPokerCanvasController */.K),
  PandaPokerControlAmount: () => (/* reexport */ PandaPokerControlAmount),
  PandaPokerGame: () => (/* reexport */ PandaPokerGame),
  PandaPokerRender: () => (/* reexport */ PandaPokerRender)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
;// ./src/framework/components.pandapoker/PandaPokerRenderReload/PandaPokerRenderReload.tsx




function _PandaPokerRenderReload({ children, onClick = () => { } }) {
    const { setReload } = (0,hooks_module_js_.useContext)(Context);
    const handleClick = () => {
        setReload(Date.now());
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const PandaPokerRenderReload = _PandaPokerRenderReload;

;// ./src/framework/components.pandapoker/PandaPokerRenderReload/index.tsx


// EXTERNAL MODULE: consume shared module (default) i18next@^23.2.3 (strict) (fallback: ./node_modules/i18next/dist/esm/i18next.js)
var i18next_js_ = __webpack_require__(49953);
// EXTERNAL MODULE: ./src/framework/helpers/shortNumberFloored.ts
var shortNumberFloored = __webpack_require__(61683);
;// ./src/framework/components.pandapoker/PandaPokerRender/PandaPokerRender.tsx







const Context = (0,preact_module_js_.createContext)({});
function _PandaPokerRender({ children, betData }) {
    const { game: { bonus, bonusCoefficient, bonusbuyRound, state: { symbolsToSubstitute, baseSymbols, rouletteSymbols, baseComboType, comboType, wildSubstitutesSymbol }, }, result, coefficient, amount, currency, } = betData;
    const [reload, setReload] = (0,hooks_module_js_.useState)(0);
    const getSymbolsAfterRoulette = () => {
        const newArr = [];
        baseSymbols.forEach((item) => {
            if (symbolsToSubstitute[0] === item) {
                newArr.push(rouletteSymbols[0] === 10 && wildSubstitutesSymbol ? wildSubstitutesSymbol : rouletteSymbols[0]);
            }
            else if (symbolsToSubstitute[1] === item) {
                newArr.push(rouletteSymbols[1] === 10 && wildSubstitutesSymbol ? wildSubstitutesSymbol : rouletteSymbols[1]);
            }
            else {
                newArr.push(item);
            }
        });
        return newArr;
    };
    const getComboType = (combo) => {
        switch (combo) {
            case '2+':
                return (0,bootstrap.GET_GAME_CONFIG)().comboTypes.twoPairs || [2, 2, 1, 1, 0];
            case '3':
                return (0,bootstrap.GET_GAME_CONFIG)().comboTypes.threeKind || [2, 2, 2, 0, 0];
            case '3+':
                return (0,bootstrap.GET_GAME_CONFIG)().comboTypes.threeKindAndPair || [2, 2, 2, 1, 1];
            case '4':
                return (0,bootstrap.GET_GAME_CONFIG)().comboTypes.fourKind || [2, 2, 2, 2, 0];
            case '5':
                return (0,bootstrap.GET_GAME_CONFIG)().comboTypes.fiveKind || [2, 2, 2, 2, 2];
            default:
                return Array.from({ length: baseSymbols.length }, (_, i) => 0);
        }
    };
    const resultSymbols = symbolsToSubstitute.length === 0 ? baseSymbols : getSymbolsAfterRoulette();
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: { setReload }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                symbols: resultSymbols,
                result: result === 'won' ? (0,i18next_js_.t)('COMMON.WIN') : (0,i18next_js_.t)('COMMON.LOSE'),
                coeff: coefficient,
                comboType: getComboType(comboType ?? baseComboType),
                isBonus: bonus,
                bonusResult: (0,shortNumberFloored/* default */.A)(Number(amount) * (bonusbuyRound ? coefficient : bonusCoefficient)) +
                    ' ' +
                    currency.toUpperCase(),
            }) }) }));
}
const PandaPokerRender = Object.assign(_PandaPokerRender, {
    Reload: PandaPokerRenderReload,
});

;// ./src/framework/components.pandapoker/PandaPokerRender/index.tsx


// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: ./src/framework/components.pandapoker/PandaPokerCanvasController/PandaPokerCanvasController.ts + 1 modules
var PandaPokerCanvasController = __webpack_require__(80038);
;// ./src/framework/components.pandapoker/PandaPokerCanvasController/index.ts


// EXTERNAL MODULE: ./src/framework/helpers/randomIntFromInterval.ts
var randomIntFromInterval = __webpack_require__(12032);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
;// ./src/framework/components.pandapoker/PandaPokerButtonStart/PandaPokerButtonStart.tsx









function _PandaPokerButtonStart({ children, onClick = () => { }, handleSpin = () => { } }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { disabled, buttonType } = (0,hooks_module_js_.useContext)(PandaPokerButton_Context);
    const { game: { placeBet }, quickModeCommon: { enabled }, } = (0,bootstrap.GET_STORE)();
    if (buttonType !== 'place')
        return null;
    const handleClick = (e) => {
        if (disabled)
            return null;
        PandaPokerCanvasController/* PandaPokerCanvasController */.K.invoke('spin', { isTurbo: enabled });
        PandaPokerCanvasController/* PandaPokerCanvasController */.K.invoke('changeNotification', {
            text: t(`PANDA_BAO.STATUSBAR_${(0,randomIntFromInterval/* default */.A)(1, 5)}`),
        });
        placeBet();
        handleSpin();
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const PandaPokerButtonStart = (0,index_js_.observer)(_PandaPokerButtonStart);

;// ./src/framework/components.pandapoker/PandaPokerButtonStart/index.tsx


;// ./src/framework/components.pandapoker/PandaPokerButtonStopAutoSpin/PandaPokerButtonStopAutoSpin.tsx






function _PandaPokerButtonStopAutoSpin({ children, onClick = () => { } }) {
    const { loading, buttonType } = (0,hooks_module_js_.useContext)(PandaPokerButton_Context);
    const { autobetCommon: { setAutoBetsAmount, autoBetsAmount, setAutoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    if (buttonType !== 'stop-auto')
        return null;
    const handleClick = (e) => {
        if (loading || autoBetsAmount === 0)
            return null;
        setAutoBetEnabled(false);
        setAutoBetsAmount(String(0));
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const PandaPokerButtonStopAutoSpin = (0,index_js_.observer)(_PandaPokerButtonStopAutoSpin);

;// ./src/framework/components.pandapoker/PandaPokerButtonStopAutoSpin/index.tsx


;// ./src/framework/components.pandapoker/PandaPokerButtonStopSpin/PandaPokerButtonStopSpin.tsx






function _PandaPokerButtonStopSpin({ children, onClick = () => { } }) {
    const { loading, buttonType } = (0,hooks_module_js_.useContext)(PandaPokerButton_Context);
    const { game: { forceStopAnimations, setForceStopAnimations }, } = (0,bootstrap.GET_STORE)();
    if (buttonType !== 'stop')
        return null;
    const handleClick = (e) => {
        if (loading || forceStopAnimations)
            return null;
        setForceStopAnimations(true);
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const PandaPokerButtonStopSpin = (0,index_js_.observer)(_PandaPokerButtonStopSpin);

;// ./src/framework/components.pandapoker/PandaPokerButtonStopSpin/index.tsx


;// ./src/framework/components.pandapoker/PandaPokerButtonBonus/PandaPokerButtonBonus.tsx






function _PandaPokerButtonBonus({ children }) {
    const { buttonType } = (0,hooks_module_js_.useContext)(PandaPokerButton_Context);
    const { game: { bonusSpinsLeft }, } = (0,bootstrap.GET_STORE)();
    const [bounceAnimation, setBounceAnimation] = (0,hooks_module_js_.useState)(false);
    const currentBonusSpins = (0,hooks_module_js_.useRef)(bonusSpinsLeft);
    (0,hooks_module_js_.useEffect)(() => {
        if (bonusSpinsLeft && currentBonusSpins.current < bonusSpinsLeft) {
            setBounceAnimation(true);
        }
        else {
            setBounceAnimation(false);
        }
        if (!bonusSpinsLeft) {
            setBounceAnimation(false);
        }
        currentBonusSpins.current = bonusSpinsLeft;
    }, [bonusSpinsLeft]);
    if (buttonType !== 'bonus')
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ bonusSpinsLeft, bounceAnimation })).map((child) => (0,preact_module_js_.cloneElement)(child, {})) }));
}
const PandaPokerButtonBonus = (0,index_js_.observer)(_PandaPokerButtonBonus);

;// ./src/framework/components.pandapoker/PandaPokerButtonBonus/index.tsx


;// ./src/framework/components.pandapoker/PandaPokerButton/PandaPokerButton.tsx








const PandaPokerButton_Context = (0,preact_module_js_.createContext)({});
function _PandaPokerButton({ children }) {
    const { game: { canvasSpinProcessing, betLoading, canvasIsReady, gameStarted, forceStopAnimations, roundId, prevRoundId, bonusSpinsLeft, isFreebetEnabled, cashoutProcessing, }, uiCommon: { amountError, isOnline }, autobetCommon: { autoBetEnabled, autoBetsAmount }, profileCommon: { profile: { currencySign, balance }, limit: { minBet }, }, freebetsCommon: { freebetEnabled, freebetActive }, } = (0,bootstrap.GET_STORE)();
    const props = {
        disabled: autoBetEnabled
            ? autoBetsAmount === 0
            : gameStarted
                ? forceStopAnimations
                : !isOnline ||
                    betLoading ||
                    canvasSpinProcessing ||
                    !canvasIsReady ||
                    roundId === prevRoundId ||
                    (!isFreebetEnabled && balance !== null && (balance <= 0 || balance < minBet)) ||
                    !roundId,
        loading: betLoading || cashoutProcessing,
        buttonType: bonusSpinsLeft !== null ? 'bonus' : autoBetEnabled ? 'stop-auto' : gameStarted ? 'stop' : 'place',
        isFreebet: isFreebetEnabled,
        valueFreebet: freebetEnabled && String(currencySign + freebetActive?.offer?.configuration[0]?.betAmount),
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(PandaPokerButton_Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const PandaPokerButton = Object.assign((0,index_js_.observer)(_PandaPokerButton), {
    Start: PandaPokerButtonStart,
    StopAutoSpin: PandaPokerButtonStopAutoSpin,
    StopSpin: PandaPokerButtonStopSpin,
    Bonus: PandaPokerButtonBonus,
});

;// ./src/framework/components.pandapoker/PandaPokerButton/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
;// ./src/framework/components.pandapoker/PandaPokerGame/PandaPokerGame.tsx







function _PandaPokerGame({ canvasController, children, handleAutoSpin = () => { } }) {
    const { game: { gameBaseResult, setCanvasSpinProcessing, setGameBaseResult, setGameRespinResult, placeBet, setCanvasIsLoaded, setCanvasIsReady, canvasIsReady, canvasIsLoaded, gameSettings, gameRespinResult, gameStarted, setBonusSpinsLeft, bonusSpinsLeft, setGameStarted, gameBonusResult, setGameBonusResult, gameResult, forceStopAnimations, setForceStopAnimations, cashout, gameConfig, animationsQueue, setAnimationsQueue, isFreebetEnabled, startBonusBuyGame, setGameResult, gameRetrieveResponse, retrieveGame, amount, lockedUi, cashoutProcessing, betLoading, amountsMap, currentAmountId, startGame, }, autobetCommon: { autoBetEnabled, autoBetsAmount, setAutoBetEnabled }, quickModeCommon: { enabled }, profileCommon: { profile: { currencySign, rounding, balance }, }, freebetsCommon: { freebetActive }, uiCommon: { isOnline }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [bonusIsReady, setBonusIsReady] = (0,hooks_module_js_.useState)(false);
    const [respinInProcess, setRespinInProcess] = (0,hooks_module_js_.useState)(false);
    const [isGameCashable, setIsGameCashable] = (0,hooks_module_js_.useState)(false);
    const [popupShow, setPopupShow] = (0,hooks_module_js_.useState)(false);
    const [showBonusBuyPopup, setShowBonusBuyPopup] = (0,hooks_module_js_.useState)(false);
    const [bonusIteration, setBonusIteration] = (0,hooks_module_js_.useState)(-1);
    const [totalWin, setTotalWin] = (0,hooks_module_js_.useState)(null);
    const [animationIteration, setAnimationIteration] = (0,hooks_module_js_.useState)(-1);
    const [bonusStopped, setBonusStopped] = (0,hooks_module_js_.useState)(false);
    const popupTimerRef = (0,hooks_module_js_.useRef)(null);
    const notifTimerRef = (0,hooks_module_js_.useRef)(null);
    const bonusTimerRef = (0,hooks_module_js_.useRef)(null);
    const btnDisabled = lockedUi || !isOnline || autoBetEnabled || gameSettings?.bonusBuyPrice * Number(amount) > balance;
    const startNewRound = async (isAuto = false) => {
        if (+amount < amountsMap[currentAmountId]) {
            setAutoBetEnabled(false);
            return null;
        }
        canvasController.invoke('spin', { isTurbo: enabled });
        canvasController.invoke('changeNotification', {
            text: t(`PANDA_BAO.STATUSBAR_${(0,randomIntFromInterval/* default */.A)(1, 5)}`),
        });
        placeBet(isAuto);
        handleAutoSpin();
    };
    const runBonus = async () => {
        bonusIteration === -1 &&
            canvasController.invoke('changeNotification', {
                text: t('FREEBETS.TOTAL_GAIN') + ': ' + currencySign + (totalWin ?? 0),
            });
        setBonusSpinsLeft(bonusStopped ? gameBonusResult[bonusIteration]?.bonusSpinsLeft : bonusSpinsLeft);
        clearTimeout(bonusTimerRef.current);
        bonusTimerRef.current = null;
        bonusTimerRef.current = setTimeout(() => {
            canvasController.invoke('runBonusSpin', { ...gameBonusResult[bonusIteration + 1], isTurbo: enabled });
            setBonusSpinsLeft((bonusStopped ? gameBonusResult[bonusIteration]?.bonusSpinsLeft : bonusSpinsLeft) - 1);
            setBonusStopped(false);
        }, bonusIteration === -1 ? 0 : enabled ? gameConfig.bonusGameDelay?.quick : gameConfig.bonusGameDelay?.default);
    };
    const runRespin = (iteration) => {
        canvasController.invoke('runRespin', {
            reelSymbolToChange: gameRespinResult.reelSymbolsToChange[iteration],
            rouletteSymbol: gameRespinResult.rouletteSymbols[iteration],
            wildSymbol: gameRespinResult.rouletteSymbols[iteration] === 10 ? gameRespinResult.wildSymbol : null,
            losingId: gameRespinResult.losingIndices[iteration],
            isTurbo: enabled,
        });
    };
    const resetGame = (withMessage = true) => {
        setGameBaseResult(null);
        setGameRespinResult(null);
        setGameBonusResult(null);
        setGameStarted(false);
        setAnimationIteration(-1);
        setGameResult(null);
        setBonusIteration(-1);
        setBonusSpinsLeft(null);
        setAnimationsQueue([]);
        setBonusIsReady(false);
        setRespinInProcess(false);
        withMessage && canvasController.invoke('changeNotification', { text: t('COMMON.PLACE_YOUR_BETS') });
        setTotalWin(null);
        popupShow && canvasController.invoke('hideWinPopup');
        setPopupShow(false);
    };
    const showPopup = async (type) => {
        let payout = gameResult.payout;
        setCanvasSpinProcessing(true);
        if (isGameCashable || gameResult.isCashable) {
            payout = await cashout(type === 'superbonus');
        }
        type === 'big' &&
            canvasController.invoke('showWinPopup', {
                type: 'base',
                amount: payout,
                currency: currencySign,
            });
        (type === 'bonus' || type === 'superbonus') &&
            canvasController.invoke('showWinPopup', {
                type: 'bonus',
                viewType: type === 'bonus' ? 'big' : gameResult.bonusCoeff > 25 ? 'bonusBuyWon' : 'bonusBuyLost',
                amount: payout ??
                    +(0,floor/* default */.A)(Number(gameBaseResult?.amount ?? amount) * gameResult.bonusCoeff, rounding).toFixed(rounding),
                currency: currencySign,
                totalAmount: type === 'bonus' &&
                    +(0,floor/* default */.A)(Number(gameBaseResult?.amount ?? amount) * gameResult.bonusCoeff, rounding).toFixed(rounding) > payout
                    ? payout
                    : +(0,floor/* default */.A)(Number(gameBaseResult?.amount ?? amount) * gameResult.bonusCoeff, rounding).toFixed(rounding),
                freeSpins: gameBonusResult.length,
            });
        setPopupShow(true);
        setForceStopAnimations(false);
        clearTimeout(popupTimerRef.current);
        popupTimerRef.current = null;
        popupTimerRef.current = setTimeout(() => {
            canvasController.invoke('hideWinPopup');
        }, type === 'superbonus' ? 2000 : 0 + (gameConfig.winTimeout ?? 5000));
    };
    const showNotif = async () => {
        let payout = gameResult?.payout;
        isGameCashable && (payout = await cashout());
        canvasController.invoke('changeNotification', { text: t('CHICKEN_ZAP.YOU_WIN') + ': ' + currencySign + payout });
        clearTimeout(notifTimerRef.current);
        notifTimerRef.current = null;
        notifTimerRef.current = setTimeout(() => {
        }, gameConfig.winTimeout ?? 5000);
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (cashoutProcessing && isOnline) {
            cashout();
            resetGame();
        }
        if (betLoading && isOnline) {
            retrieveGame(true);
            resetGame();
            setCanvasSpinProcessing(false);
            startGame();
        }
        if (autoBetEnabled && isOnline) {
            startNewRound(true);
        }
    }, [isOnline]);
    (0,hooks_module_js_.useEffect)(() => {
        canvasIsReady && canvasController.invoke('bonusBuyDisable', { isDisabled: btnDisabled });
    }, [btnDisabled, canvasIsReady]);
    (0,hooks_module_js_.useEffect)(() => {
        animationsQueue[0] === 'bonusBuyShow' && setAnimationIteration((prev) => prev + 1);
    }, [animationsQueue]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!gameStarted && autoBetEnabled && isOnline) {
            (isFreebetEnabled && freebetActive.left - 1 < 0) || Number(autoBetsAmount) <= 0
                ? setAutoBetEnabled(false)
                : startNewRound(true);
        }
    }, [gameStarted]);
    (0,hooks_module_js_.useEffect)(() => {
        if (gameBaseResult) {
            canvasController.invoke('sendResult', gameBaseResult);
            setIsGameCashable(gameBaseResult.cashable);
            setTotalWin(+(0,floor/* default */.A)(Number(gameBaseResult?.amount ?? amount) * gameBaseResult.symbolsCoefficient, rounding).toFixed(rounding));
        }
    }, [gameBaseResult]);
    (0,hooks_module_js_.useEffect)(() => {
        if (forceStopAnimations) {
            popupShow && canvasController.invoke('hideWinPopup');
            popupTimerRef.current && clearTimeout(popupTimerRef.current);
            if (!bonusIsReady) {
                respinInProcess ? canvasController.invoke('stopRespin') : canvasController.invoke('stopSpin');
            }
        }
    }, [forceStopAnimations]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!respinInProcess && gameStarted && gameRespinResult.respinComboType !== '5') {
            resetGame(false);
        }
    }, [respinInProcess]);
    (0,hooks_module_js_.useEffect)(() => {
        if (bonusIteration >= 0) {
            setTotalWin((prev) => +(prev +
                (0,floor/* default */.A)(Number(gameBaseResult?.amount ?? amount) * gameBonusResult[bonusIteration].realCoefficient, rounding)).toFixed(rounding));
        }
    }, [bonusIteration]);
    (0,hooks_module_js_.useEffect)(() => {
        if (totalWin !== null && bonusIsReady) {
            canvasController.invoke('changeNotification', {
                text: t('FREEBETS.TOTAL_GAIN') + ': ' + currencySign + totalWin,
            });
        }
    }, [totalWin]);
    (0,hooks_module_js_.useEffect)(() => {
        if (showBonusBuyPopup) {
            canvasController.invoke('showBonusBuyPopup', {
                bonusBuyAmount: currencySign + gameSettings?.bonusBuyPrice * Number(amount),
            });
            (0,gtmDataLayerPush/* default */.A)({
                action: 'tracked_element_clicked',
                parameters: {
                    parameters: {
                        object: 'bonus_buy.open',
                    },
                },
            });
        }
    }, [showBonusBuyPopup]);
    (0,hooks_module_js_.useEffect)(() => {
        gameSettings &&
            canvasIsLoaded &&
            gameRetrieveResponse &&
            canvasController.invoke('init', {
                rouletteSymbols: gameSettings.reels?.roulette,
                bonusCoefs: gameSettings.reels?.bonus,
                bonusCoefsId: gameSettings.bonus?.symbols,
                winCoeffs: gameSettings.coefs,
                bonusBuyCoefs: gameSettings.reels?.bonusBuyBonus,
                prevRoundReel: gameRetrieveResponse.length > 0 ? gameRetrieveResponse : [1, 2, 3, 4, 5],
                translations: {
                    bonusBuyText: t('BNS_GM_WTH_BGGR_PRZS'),
                    bonusBuyTitle: t('COMMON.BUY_BONUS_GAME'),
                    bonusBuyButtonCancel: t('COMMON.CANCEL'),
                    bonusBuyButtonBuy: t('COMMON.BONUS_BUY'),
                    combos: t('COMMON.COMBINATIONS'),
                },
            });
    }, [gameSettings, canvasIsLoaded, gameRetrieveResponse]);
    (0,hooks_module_js_.useEffect)(() => {
        switch (animationsQueue[animationIteration]) {
            case 'reset':
                if (gameBaseResult?.baseComboType === '5') {
                    showPopup('big');
                }
                else {
                    gameBaseResult?.baseComboType === '3+' && showNotif();
                    resetGame(false);
                }
                break;
            case 'respinShow':
                canvasController.invoke('showRespin', { losingIndices: gameRespinResult.losingIndices });
                canvasController.invoke('changeNotification', {
                    text: t(`PANDA_BAO.STATUSBAR.RESPIN_${(0,randomIntFromInterval/* default */.A)(1, 5)}`),
                });
                break;
            case 'respinRun0':
                setForceStopAnimations(false);
                runRespin(0);
                break;
            case 'respinRun1':
                setForceStopAnimations(false);
                runRespin(1);
                break;
            case 'respinHide':
                canvasController.invoke('hideRespin', {
                    listWin: gameRespinResult.listRespinWin,
                    isImproved: gameBaseResult?.baseComboType !== gameRespinResult.respinComboType,
                });
                gameRespinResult.respinComboType === '5' ? showPopup('big') : showNotif();
                break;
            case 'bonusShow':
                canvasController.invoke('showBonus');
                setBonusSpinsLeft(gameSettings.bonus?.freespins ?? 3);
                break;
            case 'bonusBuyShow':
                canvasController.invoke('showBonusBuy');
                canvasController.invoke('changeNotification', {
                    text: t(`PANDA_BAO.STATUSBAR_${(0,randomIntFromInterval/* default */.A)(1, 5)}`),
                });
                setBonusSpinsLeft(gameSettings.bonus?.freespins ?? 3);
                break;
            case 'bonusRun':
            case 'bonusBuyRun':
                runBonus();
                break;
            case 'bonusHide':
                canvasController.invoke('hideBonus');
                showPopup('bonus');
                break;
            case 'bonusBuyHide':
                canvasController.invoke('hideBonus');
                showPopup('superbonus');
                break;
            default:
        }
    }, [animationIteration]);
    (0,hooks_module_js_.useEffect)(() => {
        canvasController.on('eventReelProcessing', ({ isProcessing }) => {
            setCanvasSpinProcessing(isProcessing);
            !isProcessing && setAnimationIteration((prev) => prev + 1);
        });
        canvasController.on('eventRespinIsReady', () => {
            setRespinInProcess(true);
            setAnimationIteration((prev) => prev + 1);
        });
        canvasController.on('eventRespinProcessing', ({ isProcessing }) => {
            setCanvasSpinProcessing(isProcessing);
            !isProcessing && setAnimationIteration((prev) => prev + 1);
        });
        canvasController.on('eventRespinIsFinished', () => {
            setRespinInProcess(false);
        });
        canvasController.on('eventBonusIsReady', () => {
            setBonusIsReady(true);
            setAnimationIteration((prev) => prev + 1);
        });
        canvasController.on('eventBonusSpinCompleted', () => {
            setAnimationIteration((prev) => prev + 1);
            setBonusIteration((prev) => prev + 1);
        });
        canvasController.on('eventCanvasIsReady', () => {
            setCanvasIsReady(true);
            canvasController.invoke('changeNotification', { text: t('COMMON.PLACE_YOUR_BETS') });
        });
        canvasController.on('eventAssetsAreLoaded', () => {
            setCanvasIsLoaded(true);
        });
        canvasController.on('eventPopUpAnimationCompleted', () => {
            setCanvasSpinProcessing(false);
            setPopupShow(false);
            resetGame(true);
        });
        canvasController.on('eventBonusFreeSpins', () => {
            setBonusStopped(true);
        });
        canvasController.on('eventBonusBuyAccepted', ({ val }) => {
            val && startBonusBuyGame();
            (0,gtmDataLayerPush/* default */.A)({
                action: 'tracked_element_clicked',
                parameters: {
                    parameters: {
                        object: val ? 'bonus_buy.buy' : 'bonus_buy.cancel',
                    },
                },
            });
        });
        canvasController.on('eventBonusBuyPopupProcessing', ({ isProcessing }) => {
            setShowBonusBuyPopup(isProcessing);
        });
        canvasController.on('eventPaytableProcessing', ({ isProcessing }) => {
            (0,gtmDataLayerPush/* default */.A)({
                action: 'tracked_element_clicked',
                parameters: {
                    parameters: {
                        object: isProcessing ? 'paytable.open' : 'paytable.hide',
                    },
                },
            });
        });
    }, []);
    return children({
        popupShow,
        showBonusBuyPopup,
    });
}
const PandaPokerGame = (0,index_js_.observer)(_PandaPokerGame);

;// ./src/framework/components.pandapoker/PandaPokerGame/index.tsx


;// ./src/framework/components.pandapoker/PandaPokerControlAmountPresetItem/PandaPokerControlAmountPresetItem.tsx




function _PandaPokerControlAmountPresetItem({ children, value, onClick = () => { } }) {
    const { game: { setAmount, amount, setCurrentAmountId, amountsMap }, profileCommon: { profile: { balance }, limit: { maxBet }, }, } = (0,bootstrap.GET_STORE)();
    const handleClick = () => {
        if (value > balance || value > maxBet)
            return null;
        const index = amountsMap.findIndex((item) => item === value);
        setCurrentAmountId(index === -1 ? 0 : index);
        setAmount(value);
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ active: Number(amount) === value })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const PandaPokerControlAmountPresetItem = (0,index_js_.observer)(_PandaPokerControlAmountPresetItem);

;// ./src/framework/components.pandapoker/PandaPokerControlAmountPresetItem/index.tsx


;// ./src/framework/components.pandapoker/PandaPokerControlAmount/PandaPokerControlAmount.tsx







const ContextButtons = (0,preact_module_js_.createContext)({});
function _PandaPokerControlAmount({ children }) {
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { amount, setAmount, lockedUi, setCurrentAmountId, currentAmountId, amountsMap, presetAmountsMap }, uiCommon: { amountError }, freebetsCommon: { freebetsSuccessIndexList }, } = (0,bootstrap.GET_STORE)();
    const [infoMsg, setInfoMsg] = (0,hooks_module_js_.useState)(null);
    const notifTimerRef = (0,hooks_module_js_.useRef)(null);
    const { t } = (0,es_index_js_.useTranslation)();
    (0,hooks_module_js_.useEffect)(() => {
        if (!freebetsSuccessIndexList.includes(0)) {
            amountsMap[currentAmountId] > balance ? setCurrentAmountId(0) : setAmount(amountsMap[currentAmountId]);
        }
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        if (infoMsg) {
            clearTimeout(notifTimerRef.current);
            notifTimerRef.current = null;
            notifTimerRef.current = setTimeout(() => {
                setInfoMsg(null);
            }, 3000);
        }
    }, [infoMsg]);
    const handleLeft = () => {
        if (currentAmountId === 0) {
            setInfoMsg(`${t('COMMON.MIN_BET')} ${currencySign}${minBet}`);
            return null;
        }
        setCurrentAmountId(currentAmountId === 0 ? (isFinite ? 0 : amountsMap.length - 1) : currentAmountId - 1);
    };
    const handleRight = () => {
        if (amountsMap[currentAmountId] > balance) {
            setInfoMsg(t('COMMON.PLACEBET.ERROR.3'));
            return null;
        }
        else if (amountsMap[currentAmountId + 1] === undefined) {
            setInfoMsg(`${t('COMMON.MAX_BET')} ${currencySign}${maxBet}`);
            return null;
        }
        setCurrentAmountId(currentAmountId === amountsMap.length - 1 ? (isFinite ? currentAmountId : 0) : currentAmountId + 1);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,jsxRuntime_module/* jsx */.Y)(ContextButtons.Provider, { value: {
                handleRight,
                handleLeft,
                disabled: lockedUi,
            }, children: children({
                title: t('COMMON.BET_AMOUNT'),
                titleError: amountError || infoMsg,
                titleMaxWin: `${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`,
                disabled: freebetsSuccessIndexList.includes(0) || lockedUi,
                defaultValue: Number(amount) || 0,
                min: minBet,
                max: maxBet,
                onChange: setAmount,
                currencySign,
                prefix: '',
                connectBalance: freebetsSuccessIndexList.includes(0) ? maxBet : balance,
                rounding: rounding > 0 ? rounding - 1 : rounding,
                presetAmountsMap,
            }) }) }));
}
const PandaPokerControlAmount = Object.assign((0,index_js_.observer)(_PandaPokerControlAmount), {
    PresetItem: PandaPokerControlAmountPresetItem,
});

;// ./src/framework/components.pandapoker/PandaPokerControlAmount/index.tsx


;// ./src/framework/components.pandapoker/PandaPokerAutoSpinButtonPresetItem/PandaPokerAutoSpinButtonPresetItem.tsx





function _PandaPokerAutoSpinButtonPresetItem({ children, value, onClick = () => { } }) {
    const { autobetCommon: { autoBetEnabled, setAutoBetsAmount, autoBetsAmount }, game: { placeBet }, quickModeCommon: { enabled }, } = (0,bootstrap.GET_STORE)();
    const handleClick = () => {
        setAutoBetsAmount(String(value));
        placeBet(true);
        PandaPokerCanvasController/* PandaPokerCanvasController */.K.invoke('spin', { isTurbo: enabled });
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ active: Number(autoBetsAmount) === value })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const PandaPokerAutoSpinButtonPresetItem = (0,index_js_.observer)(_PandaPokerAutoSpinButtonPresetItem);

;// ./src/framework/components.pandapoker/PandaPokerAutoSpinButtonPresetItem/index.tsx


;// ./src/framework/components.pandapoker/PandaPokerAutoSpinButton/PandaPokerAutoSpinButton.tsx






function _PandaPokerAutoSpinButton({ children, onClick = () => { } }) {
    const { game: { betLoading, canvasSpinProcessing, lockedUi }, autobetCommon: { autoBetEnabled, autoBetsAmount }, } = (0,bootstrap.GET_STORE)();
    const [showPresets, setShowPresets] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useEffect)(() => {
        setShowPresets(false);
    }, [autoBetEnabled]);
    const handleClick = () => {
        if (betLoading || canvasSpinProcessing)
            return null;
        setShowPresets(true);
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled: autoBetEnabled || lockedUi,
            enabled: autoBetEnabled && autoBetsAmount > 0,
            spinsLeft: autoBetsAmount,
            showPresets,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const PandaPokerAutoSpinButton = Object.assign((0,index_js_.observer)(_PandaPokerAutoSpinButton), {
    PresetItem: PandaPokerAutoSpinButtonPresetItem,
});

;// ./src/framework/components.pandapoker/PandaPokerAutoSpinButton/index.tsx


;// ./src/framework/components.pandapoker/PandaPokerAmountButtonMinus/PandaPokerAmountButtonMinus.tsx




function _PandaPokerAmountButtonMinus({ children, onClick = () => { } }) {
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
const PandaPokerAmountButtonMinus = _PandaPokerAmountButtonMinus;

;// ./src/framework/components.pandapoker/PandaPokerAmountButtonMinus/index.tsx


;// ./src/framework/components.pandapoker/PandaPokerAmountButtonPlus/PandaPokerAmountButtonPlus.tsx




function _PandaPokerAmountButtonPlus({ children, onClick = () => { } }) {
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
const PandaPokerAmountButtonPlus = _PandaPokerAmountButtonPlus;

;// ./src/framework/components.pandapoker/PandaPokerAmountButtonPlus/index.tsx


;// ./src/framework/components.pandapoker/export.ts










/***/ }),

/***/ 12032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   Y: () => (/* binding */ randomIntFromInterval)
/* harmony export */ });
function randomIntFromInterval(min, max, excludedNumber) {
    if (!excludedNumber) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (randomNumber === excludedNumber);
    return randomNumber;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomIntFromInterval);


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


/***/ }),

/***/ 61683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export shortNumberFloored */
/* harmony import */ var src_framework_helpers_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70903);
/* harmony import */ var src_framework_helpers_shortNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82302);


function shortNumberFloored(value, precision = 2) {
    return (0,src_framework_helpers_shortNumber__WEBPACK_IMPORTED_MODULE_1__/* .shortNumber */ .I)((0,src_framework_helpers_floor__WEBPACK_IMPORTED_MODULE_0__/* .floor */ .R)(value, precision), precision);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shortNumberFloored);


/***/ })

}]);