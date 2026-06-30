"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2302,2933,7402,7518],{

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

/***/ 88802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MinesAutoControlAmountOfBets: () => (/* reexport */ MinesAutoControlAmountOfBets),
  MinesAutoControlLose: () => (/* reexport */ MinesAutoControlLose),
  MinesAutoControlToggle: () => (/* reexport */ MinesAutoControlToggle),
  MinesAutoControlWin: () => (/* reexport */ MinesAutoControlWin),
  MinesButton: () => (/* reexport */ MinesButton),
  MinesControlAmount: () => (/* reexport */ MinesControlAmount),
  MinesControlGroup: () => (/* reexport */ MinesControlGroup),
  MinesControlMines: () => (/* reexport */ MinesControlMines),
  MinesControlModal: () => (/* reexport */ MinesControlModal),
  MinesControlSize: () => (/* reexport */ MinesControlSize),
  MinesFastPlayToggle: () => (/* reexport */ MinesFastPlayToggle),
  MinesGame: () => (/* reexport */ MinesGame),
  MinesHistory: () => (/* reexport */ MinesHistory),
  MinesRender: () => (/* reexport */ MinesRender),
  MinesStartGameAlert: () => (/* reexport */ MinesStartGameAlert),
  MinesToggleMode: () => (/* reexport */ MinesToggleMode),
  MinesTurboAlert: () => (/* reexport */ MinesTurboAlert),
  MinesWin: () => (/* reexport */ MinesWin)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
;// ./src/framework/components.mines/MinesButtonPlay/MinesButtonPlay.tsx






function _MinesButtonPlay({ children, onClick = () => { } }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { startGame, makeMultiBet, turboModeEnabled, opened, setTurboAlertShow, betLoading, tapLoading, lockedButtons, }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'play')
        return null;
    const handleClick = (e) => {
        if (betLoading || tapLoading || lockedButtons)
            return false;
        if (turboModeEnabled) {
            if (!Boolean(opened.length)) {
                setTurboAlertShow(true);
            }
            else {
                makeMultiBet();
            }
        }
        else {
            startGame();
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MinesButtonPlay = (0,index_js_.observer)(_MinesButtonPlay);

;// ./src/framework/components.mines/MinesButtonPlay/index.tsx


;// ./src/framework/components.mines/MinesButtonCashout/MinesButtonCashout.tsx






function _MinesButtonCashout({ children, onClick = () => { } }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { cashout, betLoading, tapLoading, lockedButtons }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'cashout')
        return null;
    const handleClick = (e) => {
        if (betLoading || tapLoading || lockedButtons)
            return false;
        cashout();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MinesButtonCashout = (0,index_js_.observer)(_MinesButtonCashout);

;// ./src/framework/components.mines/MinesButtonCashout/index.tsx


;// ./src/framework/components.mines/MinesButtonCancel/MinesButtonCancel.tsx






function _MinesButtonCancel({ children, onClick = () => { } }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { cancel, betLoading, tapLoading, lockedButtons }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'cancel')
        return null;
    const handleClick = (e) => {
        if (betLoading || tapLoading || lockedButtons)
            return false;
        cancel();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MinesButtonCancel = (0,index_js_.observer)(_MinesButtonCancel);

;// ./src/framework/components.mines/MinesButtonCancel/index.tsx


;// ./src/framework/components.mines/MinesButtonPlayEvent/MinesButtonPlayEvent.tsx




function _MinesButtonPlayEvent({ children, onClick = () => { } }) {
    const { game: { startGame, makeMultiBet, turboModeEnabled, opened, setTurboAlertShow, betLoading, tapLoading, lockedButtons, }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (betLoading || tapLoading || lockedButtons)
            return false;
        if (turboModeEnabled) {
            if (!Boolean(opened.length)) {
                setTurboAlertShow(true);
            }
            else {
                makeMultiBet();
            }
        }
        else {
            startGame();
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MinesButtonPlayEvent = (0,index_js_.observer)(_MinesButtonPlayEvent);

;// ./src/framework/components.mines/MinesButtonPlayEvent/index.tsx


;// ./src/framework/components.mines/MinesButtonCashoutEvent/MinesButtonCashoutEvent.tsx




function _MinesButtonCashoutEvent({ children, onClick = () => { } }) {
    const { game: { cashout, betLoading, tapLoading, lockedButtons }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (betLoading || tapLoading || lockedButtons)
            return false;
        cashout();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MinesButtonCashoutEvent = (0,index_js_.observer)(_MinesButtonCashoutEvent);

;// ./src/framework/components.mines/MinesButtonCashoutEvent/index.tsx


;// ./src/framework/components.mines/MinesButtonCancelEvent/MinesButtonCancelEvent.tsx




function _MinesButtonCancelEvent({ children, onClick = () => { } }) {
    const { game: { cancel, betLoading, tapLoading, lockedButtons }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (betLoading || tapLoading || lockedButtons)
            return false;
        cancel();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MinesButtonCancelEvent = (0,index_js_.observer)(_MinesButtonCancelEvent);

;// ./src/framework/components.mines/MinesButtonCancelEvent/index.tsx


;// ./src/framework/components.mines/MinesButtonFreebet/MinesButtonFreebet.tsx






function _MinesButtonFreebet({ children, onClick = () => { } }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { startGame, makeMultiBet, turboModeEnabled, opened, setTurboAlertShow, betLoading, tapLoading, lockedButtons, }, freebetsCommon: { freebetActive }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'freebet')
        return null;
    const handleClick = (e) => {
        if (betLoading || tapLoading || lockedButtons)
            return false;
        if (turboModeEnabled) {
            if (!Boolean(opened.length)) {
                setTurboAlertShow(true);
            }
            else {
                const minCoefficient = freebetActive?.offer?.configuration[0]?.minCoefficient;
                makeMultiBet(true, minCoefficient);
            }
        }
        else {
            startGame(true);
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MinesButtonFreebet = (0,index_js_.observer)(_MinesButtonFreebet);

;// ./src/framework/components.mines/MinesButtonFreebet/index.tsx


;// ./src/framework/components.mines/MinesButtonFreebetEvent/MinesButtonFreebetEvent.tsx




function _MinesButtonFreebetEvent({ children, onClick = () => { } }) {
    const { game: { startGame, makeMultiBet, turboModeEnabled, opened, setTurboAlertShow, betLoading, tapLoading, lockedButtons, }, freebetsCommon: { freebetActive }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (betLoading || tapLoading || lockedButtons)
            return false;
        if (turboModeEnabled) {
            if (!Boolean(opened.length)) {
                setTurboAlertShow(true);
            }
            else {
                const minCoefficient = freebetActive?.offer?.configuration[0]?.minCoefficient;
                makeMultiBet(true, minCoefficient);
            }
        }
        else {
            startGame();
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MinesButtonFreebetEvent = (0,index_js_.observer)(_MinesButtonFreebetEvent);

;// ./src/framework/components.mines/MinesButtonFreebetEvent/index.tsx


;// ./src/framework/components.mines/MinesButton/MinesButton.tsx














const Context = (0,preact_module_js_.createContext)({});
function _MinesButton({ children }) {
    const { game: { gameId, turboModeEnabled, hit, lockedButtons, tapLoading, tableTouched, betLoading, gameResult, possibleWin, winLevel, gameStarted, currentCoefficient, minCoefficientToCashout, }, profileCommon: { profile: { currencySign, rounding }, }, uiCommon: { isOnline }, freebetsCommon: { freebetsSuccessIndexList, freebetActive, listGetByIndex }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const buttonTitle = () => {
        if (gameId && !turboModeEnabled) {
            return !hit ? t('COMMON.CANCEL') : t('COMMON.CASHOUT');
        }
        if (freebetsSuccessIndexList.includes(0)) {
            return 'FREE BETS';
        }
        if (turboModeEnabled) {
            return t('COMMON.PLACE_BET');
        }
        else {
            return t('COMMON.START_GAME');
        }
    };
    const buttonType = () => {
        if (gameId && !turboModeEnabled) {
            return !hit ? 'cancel' : 'cashout';
        }
        if (freebetsSuccessIndexList.includes(0)) {
            return 'freebet';
        }
        return 'play';
    };
    const buttonDisabled = () => {
        if (gameId && !turboModeEnabled) {
            return !hit
                ? !!lockedButtons || tapLoading || !isOnline
                : !!lockedButtons || !tableTouched || !!gameResult || betLoading || !isOnline;
        }
        return lockedButtons || betLoading || !isOnline;
    };
    const props = {
        title: buttonTitle(),
        request: betLoading,
        button: buttonType(),
        disabled: buttonDisabled(),
        mode: turboModeEnabled ? 'turbo' : 'default',
        winAmount: (0,shortNumber/* default */.A)(possibleWin, rounding),
        prefix: currencySign || '',
        winLevel: winLevel,
        gameStarted,
        valueFreebet: undefined,
    };
    if (props.button === 'freebet') {
        props.valueFreebet = String(freebetActive?.offer?.configuration[0]?.betAmount);
    }
    const freebetList = listGetByIndex(0);
    const minCoefficient = freebetList?.freebetActive?.offer?.configuration[0]?.minCoefficient;
    if (freebetList && freebetList.freebet && minCoefficient && minCoefficient > Number(currentCoefficient)) {
        props.disabled = true;
    }
    if (props.button === 'freebet' && turboModeEnabled) {
        const minCoefficient = freebetActive?.offer?.configuration[0]?.minCoefficient;
        if (minCoefficient && minCoefficient > Number(currentCoefficient)) {
            props.disabled = true;
        }
    }
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const MinesButton = Object.assign((0,index_js_.observer)(_MinesButton), {
    Play: Object.assign(MinesButtonPlay, {
        Event: MinesButtonPlayEvent,
    }),
    Cashout: Object.assign(MinesButtonCashout, {
        Event: MinesButtonCashoutEvent,
    }),
    Cancel: Object.assign(MinesButtonCancel, {
        Event: MinesButtonCancelEvent,
    }),
    Freebet: Object.assign(MinesButtonFreebet, {
        Event: MinesButtonFreebetEvent,
    }),
});

;// ./src/framework/components.mines/MinesButton/index.tsx


;// ./src/framework/components.mines/MinesToggleMode/MinesToggleMode.tsx



function _MinesToggleMode({ children }) {
    const { game: { turboModeEnabled, setTurboModeEnabled, lockedUi }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            defaultValue: turboModeEnabled,
            onChange: setTurboModeEnabled,
            disabled: lockedUi,
        }) }));
}
const MinesToggleMode = (0,index_js_.observer)(_MinesToggleMode);

;// ./src/framework/components.mines/MinesToggleMode/index.tsx


;// ./src/framework/components.mines/MinesTurboAlert/MinesTurboAlert.tsx





function _MinesTurboAlert({ children, time = 5000 }) {
    const { game: { turboModeEnabled, mobileBetslipOpen, turboAlertShow, setTurboAlertShow }, } = (0,bootstrap.GET_STORE)();
    const timeoutRef = (0,hooks_module_js_.useRef)(null);
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = () => {
        if (mobileBetslipOpen)
            return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setTurboAlertShow(false);
    };
    (0,hooks_module_js_.useEffect)(() => {
        setTurboAlertShow(turboModeEnabled);
    }, [turboModeEnabled]);
    (0,hooks_module_js_.useEffect)(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (turboAlertShow) {
            timeoutRef.current = window.setTimeout(() => {
                setTurboAlertShow(false);
            }, time);
            document.addEventListener('click', handleClick);
            return () => document.removeEventListener('click', handleClick);
        }
    }, [turboAlertShow]);
    if (!turboAlertShow)
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('MINES.TURBO_INFO'),
        }) }));
}
const MinesTurboAlert = (0,index_js_.observer)(_MinesTurboAlert);

;// ./src/framework/components.mines/MinesTurboAlert/index.tsx


;// ./src/framework/components.mines/MinesControlSizeEvent/MinesControlSizeEvent.tsx




function _MinesControlSizeEvent({ children, index = 0, onClick = () => { } }) {
    const { game: { setDeskSizeListActive }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        setDeskSizeListActive(index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MinesControlSizeEvent = (0,index_js_.observer)(_MinesControlSizeEvent);

;// ./src/framework/components.mines/MinesControlSizeEvent/index.tsx


;// ./src/framework/components.mines/MinesControlSizeRange/MinesControlSizeRange.tsx




function _MinesControlSizeRange({ children }) {
    const { game: { deskSizeList, deskSizeListActive, lockedUi, setDeskSizeListActive }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('TURBOMINES.GRID'),
            disabled: lockedUi,
            list: deskSizeList,
            min: 0,
            max: Object.keys(deskSizeList).length - 1,
            defaultValue: deskSizeListActive,
            step: 1,
            stepButton: 1,
            onChange: setDeskSizeListActive,
        }) }));
}
const MinesControlSizeRange = (0,index_js_.observer)(_MinesControlSizeRange);

;// ./src/framework/components.mines/MinesControlSizeRange/index.tsx


;// ./src/framework/components.mines/MinesControlSizeEventPrev/MinesControlSizeEventPrev.tsx




function _MinesControlSizeEventPrev({ children, onClick = () => { } }) {
    const { game: { deskSizeListActive, setDeskSizeListActive, deskSizeList }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        setDeskSizeListActive(deskSizeListActive === 0 ? deskSizeList.length - 1 : deskSizeListActive - 1);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MinesControlSizeEventPrev = (0,index_js_.observer)(_MinesControlSizeEventPrev);

;// ./src/framework/components.mines/MinesControlSizeEventPrev/index.tsx


;// ./src/framework/components.mines/MinesControlSizeEventNext/MinesControlSizeEventNext.tsx




function _MinesControlSizeEventNext({ children, onClick = () => { } }) {
    const { game: { deskSizeList, deskSizeListActive, setDeskSizeListActive }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        setDeskSizeListActive(deskSizeListActive === deskSizeList.length - 1 ? 0 : deskSizeListActive + 1);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MinesControlSizeEventNext = (0,index_js_.observer)(_MinesControlSizeEventNext);

;// ./src/framework/components.mines/MinesControlSizeEventNext/index.tsx


;// ./src/framework/components.mines/MinesControlSize/MinesControlSize.tsx








function _MinesControlSize({ children }) {
    const { game: { deskSizeList, deskSizeListActive, lockedUi }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            list: Object.values(deskSizeList).map((item, index) => {
                return { ...item, active: index === deskSizeListActive };
            }),
            title: t('TURBOMINES.GRID'),
            disabled: lockedUi,
        }) }));
}
const MinesControlSize = Object.assign((0,index_js_.observer)(_MinesControlSize), {
    Range: MinesControlSizeRange,
    Event: Object.assign(MinesControlSizeEvent, {
        Prev: MinesControlSizeEventPrev,
        Next: MinesControlSizeEventNext,
    }),
});

;// ./src/framework/components.mines/MinesControlSize/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/range.ts
var range = __webpack_require__(51604);
// EXTERNAL MODULE: ./src/framework/helpers/mines/minesGetCoefficient.ts
var minesGetCoefficient = __webpack_require__(77783);
;// ./src/framework/components.mines/MinesRenderReload/MinesRenderReload.tsx




function _MinesRenderReload({ children, onClick = () => { } }) {
    const { setReload } = (0,hooks_module_js_.useContext)(MinesRender_Context);
    const handleClick = () => {
        setReload(Date.now());
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MinesRenderReload = _MinesRenderReload;

;// ./src/framework/components.mines/MinesRenderReload/index.tsx


;// ./src/framework/components.mines/MinesRender/MinesRender.tsx







const MinesRender_Context = (0,preact_module_js_.createContext)({});
function _MinesRender({ children, betData }) {
    const searchParams = new URLSearchParams(window.location.search);
    const rtp = searchParams.get('rtp');
    const { game: { opened = [], mines = [], deskSize, result }, } = betData;
    const [list, setList] = (0,hooks_module_js_.useState)([]);
    const [animationIndex, setAnimationIndex] = (0,hooks_module_js_.useState)(-1);
    const animationTimeout = (0,hooks_module_js_.useRef)(null);
    const [reload, setReload] = (0,hooks_module_js_.useState)(0);
    const animationStep = (0,bootstrap.GET_GAME_CONFIG)().pageRender.animationDuration / opened.length || 500;
    const tiles = (0,range/* default */.A)(deskSize).map((v) => 1);
    if (mines.length) {
        mines.forEach((item) => {
            tiles[item] = 0;
        });
    }
    const name = (0,bootstrap.GET_GAME_CONFIG)().deskSizeList.find((item) => item.size === deskSize)?.name;
    const getWinLevel = (coefficient) => {
        let level = 0;
        for (let i = 0; i < (0,bootstrap.GET_GAME_CONFIG)().winLevelList.length; i++) {
            if (coefficient >= (0,bootstrap.GET_GAME_CONFIG)().winLevelList[i])
                level = i;
        }
        return level;
    };
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
        if (animationIndex > opened.length + 1) {
            return;
        }
        const isRun = animationIndex >= 0;
        const end = animationIndex >= opened.length;
        const list = [];
        for (let i = 0; i < deskSize; i++) {
            const sliceOpened = opened.slice(0, animationIndex);
            const isWin = isRun && sliceOpened.includes(i) && !mines.includes(i);
            const isLose = isRun && mines.includes(i) && end;
            const isLevel = opened.includes(i)
                ? getWinLevel((0,minesGetCoefficient/* default */.A)(mines.length, opened.indexOf(i) + 1, deskSize, Number(rtp || (0,bootstrap.GET_GAME_CONFIG)().defaultRtp)) || 0)
                : 0;
            list.push({
                win: isWin,
                lose: isLose,
                level: isLevel,
            });
        }
        setList(list);
        if (isRun)
            animationTimeout.current = window.setTimeout(() => {
                setAnimationIndex(animationIndex + 1);
            }, animationStep);
    }, [animationIndex]);
    return ((0,jsxRuntime_module/* jsx */.Y)(MinesRender_Context.Provider, { value: { setReload }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                countLoseTile: mines.length,
                countWinTile: deskSize - mines.length,
                deskSize: deskSize,
                name: name,
                list: list,
                opened: opened,
            }) }) }));
}
const MinesRender = Object.assign(_MinesRender, {
    Reload: MinesRenderReload,
});

;// ./src/framework/components.mines/MinesRender/index.tsx


;// ./src/framework/components.mines/MinesControlMinesButtom/MinesControlMinesButtom.tsx




function _MinesControlMinesButton({ children, index, onClick = () => { } }) {
    const { game: { setMinesAmount, deskSizeList, deskSizeListActive }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        setMinesAmount(deskSizeList[deskSizeListActive].minesList[index]);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MinesControlMinesButton = (0,index_js_.observer)(_MinesControlMinesButton);

;// ./src/framework/components.mines/MinesControlMinesButtom/index.tsx


;// ./src/framework/components.mines/MinesControlMinesRange/MinesControlMinesRange.tsx




function _MinesControlMinesRange({ children }) {
    const { game: { minesAmount, setMinesAmount, minesAmountMin, minesAmountMax, lockedUi, numberOfBetsError }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('MINES.MINES'),
            titleError: numberOfBetsError,
            disabled: lockedUi,
            defaultValue: Number(minesAmount),
            min: minesAmountMin,
            max: minesAmountMax,
            onChange: setMinesAmount,
            step: 1,
            stepButton: 1,
        }) }));
}
const MinesControlMinesRange = (0,index_js_.observer)(_MinesControlMinesRange);

;// ./src/framework/components.mines/MinesControlMinesRange/index.tsx


;// ./src/framework/components.mines/MinesControlMines/MinesControlMines.tsx






function _MinesControlMines({ children }) {
    const { game: { minesAmount, setMinesAmount, minesAmountMin, minesAmountMax, deskSizeList, deskSizeListActive, lockedUi, numberOfBetsError, crystallsAmount, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('MINES.MINES'),
            titleError: numberOfBetsError,
            list: deskSizeList[deskSizeListActive].minesList,
            disabled: lockedUi,
            defaultValue: Number(minesAmount),
            min: minesAmountMin,
            max: minesAmountMax,
            onChange: setMinesAmount,
            crystallsAmount: crystallsAmount,
        }) }));
}
const MinesControlMines = Object.assign((0,index_js_.observer)(_MinesControlMines), {
    Button: MinesControlMinesButton,
    Range: MinesControlMinesRange,
});

;// ./src/framework/components.mines/MinesControlMines/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/mines/minesToShortNumber.ts
var minesToShortNumber = __webpack_require__(15900);
;// ./src/framework/components.mines/MinesGameItem/MinesGameItem.tsx






const ContextItem = (0,preact_module_js_.createContext)({});
function _MinesGameItem({ children, index, onClick = () => { } }) {
    const { game: { tap, tapTurbo, tapLoading, lockedButtons }, freebetsCommon: { freebetsSuccessIndexList, freebetActive }, } = (0,bootstrap.GET_STORE)();
    const { grid, mode, end } = (0,hooks_module_js_.useContext)(MinesGame_Context);
    const handleClick = (e) => {
        if (lockedButtons)
            return;
        const minCoefficient = freebetActive?.offer?.configuration[0]?.minCoefficient;
        if (!end && !tapLoading && mode === 'default' && grid[index].type === 'default')
            tap(index, freebetsSuccessIndexList.includes(0), minCoefficient);
        if (!end && mode === 'turbo' && (grid[index].type === 'default' || grid[index].type === 'active'))
            tapTurbo(index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(ContextItem.Provider, { value: { index }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: handleClick,
            })) }) }));
}
const MinesGameItem = (0,index_js_.observer)(_MinesGameItem);

;// ./src/framework/components.mines/MinesGameItem/index.tsx


;// ./src/framework/components.mines/MinesGameItemDefaultDefault/MinesGameItemDefaultDefault.tsx





function _MinesGameItemDefaultDefault({ children, onClick = () => { }, onLoad = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(MinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'default' && grid[index].type === 'default')
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'default' && grid[index].type === 'default') {
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: onClick,
            })) }));
    }
    return null;
}
const MinesGameItemDefaultDefault = _MinesGameItemDefaultDefault;

;// ./src/framework/components.mines/MinesGameItemDefaultDefault/index.tsx


;// ./src/framework/components.mines/MinesGameItemDefaultActive/MinesGameItemDefaultActive.tsx




function _MinesGameItemDefaultActive({ children, onLoad = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(MinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'default' && grid[index].type === 'active')
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'default' && grid[index].type === 'active')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const MinesGameItemDefaultActive = _MinesGameItemDefaultActive;

;// ./src/framework/components.mines/MinesGameItemDefaultActive/index.tsx


;// ./src/framework/components.mines/MinesGameItemDefaultEnd/MinesGameItemDefaultEnd.tsx




function _MinesGameItemDefaultEnd({ children, onLoad = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(MinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'default' && grid[index].type === 'end')
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'default' && grid[index].type === 'end')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const MinesGameItemDefaultEnd = _MinesGameItemDefaultEnd;

;// ./src/framework/components.mines/MinesGameItemDefaultEnd/index.tsx


;// ./src/framework/components.mines/MinesGameItemDefaultLose/MinesGameItemDefaultLose.tsx




function _MinesGameItemDefaultLose({ children, onLoad = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(MinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'default' && grid[index].type === 'lose')
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'default' && grid[index].type === 'lose')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const MinesGameItemDefaultLose = _MinesGameItemDefaultLose;

;// ./src/framework/components.mines/MinesGameItemDefaultLose/index.tsx


;// ./src/framework/components.mines/MinesGameItemDefaultRequest/MinesGameItemDefaultRequest.tsx




function _MinesGameItemDefaultRequest({ children, onLoad = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(MinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'default' && grid[index].type === 'request')
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'default' && grid[index].type === 'request')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const MinesGameItemDefaultRequest = _MinesGameItemDefaultRequest;

;// ./src/framework/components.mines/MinesGameItemDefaultRequest/index.tsx


;// ./src/framework/components.mines/MinesGameItemDefaultWin/MinesGameItemDefaultWin.tsx




function _MinesGameItemDefaultWin({ children, onLoad = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(MinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'default' && grid[index].type === 'win')
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'default' && grid[index].type === 'win')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const MinesGameItemDefaultWin = _MinesGameItemDefaultWin;

;// ./src/framework/components.mines/MinesGameItemDefaultWin/index.tsx


;// ./src/framework/components.mines/MinesGameItemTurboDefault/MinesGameItemTurboDefault.tsx





function _MinesGameItemTurboDefault({ children, onClick = () => { }, onLoad = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(MinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'turbo' && grid[index].type === 'default')
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'turbo' && grid[index].type === 'default')
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: onClick,
            })) }));
    return null;
}
const MinesGameItemTurboDefault = _MinesGameItemTurboDefault;

;// ./src/framework/components.mines/MinesGameItemTurboDefault/index.tsx


;// ./src/framework/components.mines/MinesGameItemTurboActive/MinesGameItemTurboActive.tsx







function _MinesGameItemTurboActive({ children, onClick = () => { }, onLoad = () => { }, onDestroy = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(MinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    const { game: { setTabTurboLoad, setTabTurboDestroy }, } = (0,bootstrap.GET_STORE)();
    (0,hooks_module_js_.useEffect)(() => {
        setTabTurboLoad(onLoad);
        setTabTurboDestroy(onDestroy);
    }, []);
    if (mode === 'turbo' && grid[index].type === 'active')
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: onClick,
            })) }));
    return null;
}
const MinesGameItemTurboActive = (0,index_js_.observer)(_MinesGameItemTurboActive);

;// ./src/framework/components.mines/MinesGameItemTurboActive/index.tsx


;// ./src/framework/components.mines/MinesGameItemTurboEnd/MinesGameItemTurboEnd.tsx




function _MinesGameItemTurboEnd({ children, onLoad = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(MinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'turbo' && grid[index].type === 'end')
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'turbo' && grid[index].type === 'end')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const MinesGameItemTurboEnd = _MinesGameItemTurboEnd;

;// ./src/framework/components.mines/MinesGameItemTurboEnd/index.tsx


;// ./src/framework/components.mines/MinesGameItemTurboLose/MinesGameItemTurboLose.tsx




function _MinesGameItemTurboLose({ children, onLoad = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(MinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        const loseIndex = grid.findIndex((item) => item.type === 'lose');
        if (mode === 'turbo' && grid[index].type === 'lose' && loseIndex !== -1)
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'turbo' && grid[index].type === 'lose')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const MinesGameItemTurboLose = _MinesGameItemTurboLose;

;// ./src/framework/components.mines/MinesGameItemTurboLose/index.tsx


;// ./src/framework/components.mines/MinesGameItemTurboRequest/MinesGameItemTurboRequest.tsx




function _MinesGameItemTurboRequest({ children, onLoad = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(MinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'turbo' && grid[index].type === 'request')
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'turbo' && grid[index].type === 'request')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const MinesGameItemTurboRequest = _MinesGameItemTurboRequest;

;// ./src/framework/components.mines/MinesGameItemTurboRequest/index.tsx


;// ./src/framework/components.mines/MinesGameItemTurboWin/MinesGameItemTurboWin.tsx




function _MinesGameItemTurboWin({ children, onLoad = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(MinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        const winIndex = grid.findIndex((item) => item.type === 'win');
        const loseIndex = grid.findIndex((item) => item.type === 'lose');
        if (mode === 'turbo' && grid[index].type === 'win' && winIndex === index && loseIndex === -1)
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'turbo' && grid[index].type === 'win')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const MinesGameItemTurboWin = _MinesGameItemTurboWin;

;// ./src/framework/components.mines/MinesGameItemTurboWin/index.tsx


;// ./src/framework/components.mines/MinesGame/MinesGame.tsx




















const MinesGame_Context = (0,preact_module_js_.createContext)({});
function _MinesGame({ children }) {
    const { game: { turboModeEnabled, tapLoading, tapLoadingIndex, tiles, opened, isOpenedTable, possibleWinNext, deskSizeList, deskSizeListActive, gameStarted, coefficientList, getWinLevel, gameResult, }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const [grid, setGrid] = (0,hooks_module_js_.useState)([
        {
            active: false,
            win: false,
            lose: false,
            request: false,
            type: 'default',
            level: 0,
        },
    ]);
    const { t } = (0,es_index_js_.useTranslation)();
    (0,hooks_module_js_.useEffect)(() => {
        const grid = tiles.map((item, index) => {
            const props = {
                active: opened.includes(index),
                win: item === 1,
                lose: item === 0,
                request: tapLoadingIndex.includes(index),
                type: 'default',
                level: opened.includes(index) ? getWinLevel(coefficientList[opened.indexOf(index)] || 0) : 0,
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
            return props;
        });
        setGrid(grid);
    }, [opened, tiles, tapLoadingIndex, isOpenedTable]);
    const props = {
        grid: grid,
        gridName: deskSizeList[deskSizeListActive].name,
        request: tapLoading,
        disabled: turboModeEnabled ? false : !gameStarted,
        end: isOpenedTable,
        mode: turboModeEnabled ? 'turbo' : 'default',
        nextWin: possibleWinNext > 0 ? `${currencySign}${(0,minesToShortNumber/* default */.A)(possibleWinNext, rounding)}` : '',
        gameStarted,
        gameResult,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(MinesGame_Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const MinesGame = Object.assign((0,index_js_.observer)(_MinesGame), {
    Item: Object.assign(MinesGameItem, {
        Default: Object.assign({
            Default: MinesGameItemDefaultDefault,
            Active: MinesGameItemDefaultActive,
            Request: MinesGameItemDefaultRequest,
            Win: MinesGameItemDefaultWin,
            Lose: MinesGameItemDefaultLose,
            End: MinesGameItemDefaultEnd,
        }),
        Turbo: Object.assign({
            Default: MinesGameItemTurboDefault,
            Active: MinesGameItemTurboActive,
            Request: MinesGameItemTurboRequest,
            Win: MinesGameItemTurboWin,
            Lose: MinesGameItemTurboLose,
            End: MinesGameItemTurboEnd,
        }),
    }),
});

;// ./src/framework/components.mines/MinesGame/index.tsx


;// ./src/framework/components.mines/MinesWinLevel/MinesWinLevel.tsx




function _MinesWinLevel({ children, level = 0, onLoad = () => { } }) {
    const { game: { winLevel }, } = (0,bootstrap.GET_STORE)();
    if (winLevel === level) {
        (0,hooks_module_js_.useEffect)(() => {
            onLoad();
        }, []);
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    }
    return null;
}
const MinesWinLevel = (0,index_js_.observer)(_MinesWinLevel);

;// ./src/framework/components.mines/MinesWinLevel/index.tsx


;// ./src/framework/components.mines/MinesWin/MinesWin.tsx






function _MinesWin({ children }) {
    const { game: { coefficient, payout, winLevel, gameResult }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    if (gameResult === 'won') {
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('MINES.YOU_WIN'),
                profit: String((0,minesToShortNumber/* default */.A)(payout, rounding)),
                prefix: currencySign,
                coefficient: coefficient,
                coefficientShort: String((0,minesToShortNumber/* default */.A)(coefficient, 2)),
                titleCoefficient: t('COMMON.MULTIPLIER'),
                level: winLevel,
            }) }));
    }
    return null;
}
const MinesWin = Object.assign((0,index_js_.observer)(_MinesWin), {
    Level: MinesWinLevel,
});

;// ./src/framework/components.mines/MinesWin/index.tsx


;// ./src/framework/components.mines/MinesControlModalButton/MinesControlModalButton.tsx




function _MinesControlModalButton({ children, onClick = () => { } }) {
    const { game: { gameStarted, mobileBetslipOpen, deskSizeList, deskSizeListActive, setMobileBetslipOpen, minesAmount, fastPlayEnabled, }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (!gameStarted && !fastPlayEnabled)
            setMobileBetslipOpen(!mobileBetslipOpen);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled: gameStarted || fastPlayEnabled,
            gridSize: deskSizeList[deskSizeListActive].name,
            mines: minesAmount,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MinesControlModalButton = (0,index_js_.observer)(_MinesControlModalButton);

;// ./src/framework/components.mines/MinesControlModalButton/index.tsx


;// ./src/framework/components.mines/MinesControlModal/MinesControlModal.tsx




function _MinesControlModal({ children }) {
    const { game: { mobileBetslipOpen, setMobileBetslipOpen }, } = (0,bootstrap.GET_STORE)();
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ show: mobileBetslipOpen, onClose: setMobileBetslipOpen }) });
}
const MinesControlModal = Object.assign((0,index_js_.observer)(_MinesControlModal), {
    Button: MinesControlModalButton,
});

;// ./src/framework/components.mines/MinesControlModal/index.tsx


;// ./src/framework/components.mines/MinesHistory/MinesHistory.tsx





function _MinesHistory({ children, count }) {
    const { game: { hit, hitList, updateHitList, deskSize, minesAmount, gameStarted, amount, gameResult }, profileCommon: { profile: { currencySign }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    let listTransform = `translateX(0%)`;
    let listTransformValue = 0;
    if (typeof count === 'number') {
        const part = 100 / count;
        for (let i = 0; i < hitList.length; i++) {
            if (hitList[i].shadow) {
                const index = i + 1;
                listTransform = `translateX(-${part * index}%)`;
                listTransformValue = part * index;
            }
            else {
                break;
            }
        }
    }
    (0,hooks_module_js_.useEffect)(() => {
        updateHitList(count);
    }, [hit, deskSize, minesAmount, gameStarted, amount]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.MULTIPLIER'),
            list: hitList,
            listTransform,
            gameStarted,
            gameResult,
            listTransformValue,
            currencySign,
            hit,
        }) }));
}
const MinesHistory = (0,index_js_.observer)(_MinesHistory);

;// ./src/framework/components.mines/MinesHistory/index.tsx


;// ./src/framework/components.mines/MinesControlAmount/MinesControlAmount.tsx





function _MinesControlAmount({ children }) {
    const { profileCommon: { userAuthenticated, profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { amount, setAmount, lockedUi, gameStarted }, uiCommon: { amountError }, freebetsCommon: { freebetEnabled, freebetsSuccessIndexList }, } = (0,bootstrap.GET_STORE)();
    const [showTooltip, setShowTooltip] = (0,hooks_module_js_.useState)(false);
    const tooltipTimeout = (0,hooks_module_js_.useRef)(null);
    const { t } = (0,es_index_js_.useTranslation)();
    (0,hooks_module_js_.useEffect)(() => {
        if (Number(amount) === maxBet) {
            setShowTooltip(true);
            if (tooltipTimeout.current) {
                clearTimeout(tooltipTimeout.current);
            }
            tooltipTimeout.current = setTimeout(() => {
                setShowTooltip(false);
            }, 2000);
        }
    }, [amount]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            titleError: amountError,
            titleMaxWin: `${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`,
            disabled: lockedUi || freebetEnabled || freebetsSuccessIndexList.includes(0),
            defaultValue: Number(amount),
            min: minBet,
            max: maxBet,
            onChange: setAmount,
            prefix: currencySign,
            connectBalance: !gameStarted && (freebetEnabled || freebetsSuccessIndexList.includes(0) ? undefined : balance),
            rounding: rounding > 0 ? rounding - 1 : rounding,
            userAuth: userAuthenticated,
            showTooltip,
        }) }));
}
const MinesControlAmount = (0,index_js_.observer)(_MinesControlAmount);

;// ./src/framework/components.mines/MinesControlAmount/index.tsx


;// ./src/framework/components.mines/MinesAutoControlAmountOfBets/MinesAutoControlAmountOfBets.tsx




function _MinesAutoControlAmountOfBets({ children }) {
    const { game: { gameConfig, lockedUi }, autobetCommon: { autoBetEnabled, setAutoBetsAmount, autoBetsAmount }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleChange = (value) => {
        setAutoBetsAmount(String(Math.ceil(value)));
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.NUMBER_OF_BETS'),
            disabled: autoBetEnabled || lockedUi,
            defaultValue: Number(autoBetsAmount),
            min: gameConfig.autoBet.limit ? gameConfig.autoBet.min : 0,
            max: gameConfig.autoBet.max,
            onChange: handleChange,
        }) }));
}
const MinesAutoControlAmountOfBets = (0,index_js_.observer)(_MinesAutoControlAmountOfBets);

;// ./src/framework/components.mines/MinesAutoControlAmountOfBets/index.tsx


;// ./src/framework/components.mines/MinesAutoControlWinButtonReset/MinesAutoControlWinButtonReset.tsx





function _MinesAutoControlWinButtonReset({ children, onClick = () => { } }) {
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
const MinesAutoControlWinButtonReset = (0,index_js_.observer)(_MinesAutoControlWinButtonReset);

;// ./src/framework/components.mines/MinesAutoControlWinButtonReset/index.tsx


;// ./src/framework/components.mines/MinesAutoControlWinButtonIncrease/MinesAutoControlWinButtonIncrease.tsx





function _MinesAutoControlWinButtonIncrease({ children, onClick = () => { } }) {
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
const MinesAutoControlWinButtonIncrease = (0,index_js_.observer)(_MinesAutoControlWinButtonIncrease);

;// ./src/framework/components.mines/MinesAutoControlWinButtonIncrease/index.tsx


;// ./src/framework/components.mines/MinesAutoControlWinIncrease/MinesAutoControlWinIncrease.tsx




function _MinesAutoControlWinIncrease({ children, onClick = () => { } }) {
    const { game: { gameConfig }, autobetCommon: { onWinIncrease, onWinIncreaseAmount, onWinIncreaseError, setOnWinIncreaseAmount }, } = (0,bootstrap.GET_STORE)();
    const handleChange = (value) => {
        setOnWinIncreaseAmount(value);
        onClick();
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
const MinesAutoControlWinIncrease = (0,index_js_.observer)(_MinesAutoControlWinIncrease);

;// ./src/framework/components.mines/MinesAutoControlWinIncrease/index.tsx


;// ./src/framework/components.mines/MinesAutoControlWin/MinesAutoControlWin.tsx







function _MinesAutoControlWin({ children }) {
    const { autobetCommon: { autoBetEnabled }, game: { lockedUi }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.ON_WIN'),
            disabled: autoBetEnabled || lockedUi,
        }) }));
}
const MinesAutoControlWin = Object.assign((0,index_js_.observer)(_MinesAutoControlWin), {
    Button: Object.assign({
        Reset: MinesAutoControlWinButtonReset,
        Increase: MinesAutoControlWinButtonIncrease,
    }),
    Increase: MinesAutoControlWinIncrease,
});

;// ./src/framework/components.mines/MinesAutoControlWin/index.tsx


;// ./src/framework/components.mines/MinesAutoControlLoseButtonReset/MinesAutoControlLoseButtonReset.tsx





function _MinesAutoControlLoseButtonReset({ children, onClick = () => { } }) {
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
const MinesAutoControlLoseButtonReset = (0,index_js_.observer)(_MinesAutoControlLoseButtonReset);

;// ./src/framework/components.mines/MinesAutoControlLoseButtonReset/index.tsx


;// ./src/framework/components.mines/MinesAutoControlLoseButtonIncrease/MinesAutoControlLoseButtonIncrease.tsx





function _MinesAutoControlLoseButtonIncrease({ children, onClick = () => { } }) {
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
const MinesAutoControlLoseButtonIncrease = (0,index_js_.observer)(_MinesAutoControlLoseButtonIncrease);

;// ./src/framework/components.mines/MinesAutoControlLoseButtonIncrease/index.tsx


;// ./src/framework/components.mines/MinesAutoControlLoseIncrease/MinesAutoControlLoseIncrease.tsx




function _MinesAutoControlLoseIncrease({ children, onClick = () => { } }) {
    const { game: { gameConfig }, autobetCommon: { onLoseIncrease, onLoseIncreaseAmount, onLoseIncreaseError, setOnLoseIncreaseAmount }, } = (0,bootstrap.GET_STORE)();
    const handleChange = (value) => {
        setOnLoseIncreaseAmount(value);
        onClick();
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
const MinesAutoControlLoseIncrease = (0,index_js_.observer)(_MinesAutoControlLoseIncrease);

;// ./src/framework/components.mines/MinesAutoControlLoseIncrease/index.tsx


;// ./src/framework/components.mines/MinesAutoControlLose/MinesAutoControlLose.tsx







function _MinesAutoControlLose({ children }) {
    const { autobetCommon: { autoBetEnabled }, game: { lockedUi }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.ON_LOSS'),
            disabled: autoBetEnabled || lockedUi,
        }) }));
}
const MinesAutoControlLose = Object.assign((0,index_js_.observer)(_MinesAutoControlLose), {
    Button: Object.assign({
        Reset: MinesAutoControlLoseButtonReset,
        Increase: MinesAutoControlLoseButtonIncrease,
    }),
    Increase: MinesAutoControlLoseIncrease,
});

;// ./src/framework/components.mines/MinesAutoControlLose/index.tsx


;// ./src/framework/components.mines/MinesAutoControlToggle/MinesAutoControlToggle.tsx




function _MinesAutoControlToggle({ children }) {
    const { autobetCommon: { autoBetEnabled, stopOnAnyWin, setStopOnAnyWin }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.STOP_ON_WIN'),
            disabled: autoBetEnabled,
            defaultValue: stopOnAnyWin,
            onChange: setStopOnAnyWin,
        }) }));
}
const MinesAutoControlToggle = (0,index_js_.observer)(_MinesAutoControlToggle);

;// ./src/framework/components.mines/MinesAutoControlToggle/index.tsx


;// ./src/framework/components.mines/MinesControlGroupButton/MinesControlGroupButton.tsx







function _MinesControlGroupButton({ children, onClick = () => { } }) {
    const { game: { setMinesAmount, setTurboModeEnabled, setDeskSizeListActive, setMobileBetslipOpen }, uiCommon: { setAlertList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const { toggle, mines, size } = (0,hooks_module_js_.useContext)(MinesControlGroup_Context);
    const handleClick = (e) => {
        setDeskSizeListActive(size);
        setMinesAmount(mines);
        setTurboModeEnabled(toggle);
        setMobileBetslipOpen(false);
        setAlertList({
            title: t('Success!'),
            type: 'success',
        });
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MinesControlGroupButton = (0,index_js_.observer)(_MinesControlGroupButton);

;// ./src/framework/components.mines/MinesControlGroupButton/index.tsx


;// ./src/framework/components.mines/MinesControlGroup/MinesControlGroup.tsx







const MinesControlGroup_Context = (0,preact_module_js_.createContext)({});
function _MinesControlGroup({ children }) {
    const { game: { deskSizeList, deskSizeListActive, turboModeEnabled, lockedUi, minesAmount, computedNumberOfBetsError, computedMinesAmountMin, computedMinesAmountMax, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [toggle, setToggle] = (0,hooks_module_js_.useState)(turboModeEnabled);
    const [mines, setMines] = (0,hooks_module_js_.useState)(Number(minesAmount));
    const [size, setSize] = (0,hooks_module_js_.useState)(deskSizeListActive);
    (0,hooks_module_js_.useEffect)(() => {
        const max = computedMinesAmountMax(deskSizeList[size].size);
        if (mines >= max)
            setMines(max);
    }, [size]);
    return ((0,jsxRuntime_module/* jsx */.Y)(MinesControlGroup_Context.Provider, { value: { toggle, mines, size }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('COMMON.OTHER_SETTINGS'),
                titleOk: t('COMMON.OK'),
                titleCancel: t('COMMON.CANCEL'),
                toggle: { defaultValue: toggle, onChange: setToggle, disabled: lockedUi },
                mines: {
                    title: t('MINES.MINES'),
                    titleError: computedNumberOfBetsError(mines, computedMinesAmountMin(), computedMinesAmountMax(deskSizeList[size].size)),
                    list: deskSizeList[size].minesList,
                    disabled: lockedUi,
                    defaultValue: mines,
                    min: computedMinesAmountMin(),
                    max: computedMinesAmountMax(deskSizeList[size].size),
                    onChange: setMines,
                },
                minesRange: {
                    title: t('MINES.MINES'),
                    titleError: computedNumberOfBetsError(mines, computedMinesAmountMin(), computedMinesAmountMax(deskSizeList[size].size)),
                    disabled: lockedUi,
                    defaultValue: mines,
                    min: computedMinesAmountMin(),
                    max: computedMinesAmountMax(deskSizeList[size].size),
                    onChange: setMines,
                    step: 1,
                    stepButton: 1,
                },
                size: {
                    list: Object.values(deskSizeList).map((item, index) => {
                        return { ...item, active: index === size };
                    }),
                    title: t('TURBOMINES.GRID'),
                    disabled: lockedUi,
                },
                sizeRange: {
                    title: t('TURBOMINES.GRID'),
                    disabled: lockedUi,
                    list: deskSizeList,
                    min: 0,
                    max: Object.keys(deskSizeList).length - 1,
                    defaultValue: size,
                    step: 1,
                    stepButton: 1,
                    onChange: setSize,
                },
            }) }) }));
}
const MinesControlGroup = Object.assign((0,index_js_.observer)(_MinesControlGroup), {
    Button: MinesControlGroupButton,
});

;// ./src/framework/components.mines/MinesControlGroup/index.tsx


;// ./src/framework/components.mines/MinesStartGameAlertEvent/MinesStartGameAlertEvent.tsx




function _MinesStartGameAlertEvent({ children, onClick = () => { } }) {
    const { setShow } = (0,hooks_module_js_.useContext)(MinesStartGameAlert_Context);
    const handleOnClick = () => {
        setShow(true);
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleOnClick,
        })) }));
}
const MinesStartGameAlertEvent = _MinesStartGameAlertEvent;

;// ./src/framework/components.mines/MinesStartGameAlertEvent/index.tsx


;// ./src/framework/components.mines/MinesStartGameAlert/MinesStartGameAlert.tsx







const MinesStartGameAlert_Context = (0,preact_module_js_.createContext)({});
function _MinesStartGameAlert({ children, duration = 2000 }) {
    const { game: { turboModeEnabled, gameStarted }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [show, setShow] = (0,hooks_module_js_.useState)(false);
    const timeout = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        if (!show)
            return;
        if (timeout.current)
            clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            setShow(false);
        }, duration);
    }, [show]);
    return ((0,jsxRuntime_module/* jsx */.Y)(MinesStartGameAlert_Context.Provider, { value: { setShow }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                text: `${t('MINES.PRESS')} ${t('COMMON.START_GAME')}`,
                show,
                disabled: turboModeEnabled || gameStarted,
            }) }) }));
}
const MinesStartGameAlert = Object.assign((0,index_js_.observer)(_MinesStartGameAlert), {
    Event: MinesStartGameAlertEvent,
});

;// ./src/framework/components.mines/MinesStartGameAlert/index.tsx


;// ./src/framework/components.mines/MinesFastPlayToggle/MinesFastPlayToggle.tsx




function _MinesFastPlayToggle({ children }) {
    const { game: { fastPlayEnabled, setFastPlayEnabled, gameStarted, gameId, turboModeEnabled, startGame, cancel, betLoading, hit, tapLoading, lockedButtons, }, uiCommon: { isOnline }, } = (0,bootstrap.GET_STORE)();
    (0,hooks_module_js_.useEffect)(() => {
        if (!isOnline) {
            setFastPlayEnabled(false);
            if (gameId && !turboModeEnabled && !hit) {
                cancel();
            }
        }
    }, [isOnline]);
    const handleFastPlayEnabled = (val) => {
        if (val && !gameStarted && !betLoading && !tapLoading && !lockedButtons) {
            startGame();
        }
        if (!val && gameId && !turboModeEnabled && !hit) {
            cancel();
        }
        setFastPlayEnabled(val);
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ defaultValue: fastPlayEnabled, onChange: handleFastPlayEnabled }) });
}
const MinesFastPlayToggle = (0,index_js_.observer)(_MinesFastPlayToggle);

;// ./src/framework/components.mines/MinesFastPlayToggle/index.tsx


;// ./src/framework/components.mines/export.ts




















/***/ }),

/***/ 77783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const factorial = (n) => (n ? n * factorial(n - 1) : 1);
function combination(a, b) {
    if (a === b)
        return 1;
    return factorial(a) / (factorial(b) * factorial(a - b));
}
const cache = new Map();
function getCoefficient(mines, hit, tiles, rtp) {
    const key = `${mines}:${hit}:${tiles}:${rtp}`;
    const cached = cache.get(key);
    if (cached) {
        return cached;
    }
    const diamonds = tiles - mines;
    const result = Math.round((combination(tiles, hit) / combination(diamonds, hit)) * rtp) / 100;
    cache.set(key, result);
    return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoefficient);


/***/ }),

/***/ 15900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const _truncate = (number, digits) => {
    const num = parseFloat(String(number));
    if (!isNaN(num)) {
        return parseFloat(num.toFixed(digits));
    }
    else {
        return NaN;
    }
};
const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B', 'N', 'D', 'H', 'O'];
function toShortNumber(number, trunc = 2) {
    number = _truncate(number, trunc);
    const tier = (Math.log10(Math.abs(number)) / 3) | 0;
    if (tier === 0)
        return _truncate(number, trunc);
    return `${Math.trunc((number / Math.pow(10, tier * 3)) * 100) / 100}${SI_SYMBOL[tier]}`;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toShortNumber);


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