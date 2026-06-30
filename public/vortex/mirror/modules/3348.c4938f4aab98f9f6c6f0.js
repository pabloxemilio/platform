"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2302,3348,7402,7518],{

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

/***/ 75519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  OneTapMinesButton: () => (/* reexport */ OneTapMinesButton),
  OneTapMinesControlAmount: () => (/* reexport */ OneTapMinesControlAmount),
  OneTapMinesControlHeading: () => (/* reexport */ OneTapMinesControlHeading),
  OneTapMinesGame: () => (/* reexport */ OneTapMinesGame),
  OneTapMinesGameDirection: () => (/* reexport */ OneTapMinesGameDirection),
  OneTapMinesMineChance: () => (/* reexport */ OneTapMinesMineChance),
  OneTapMinesModeAlert: () => (/* reexport */ OneTapMinesModeAlert),
  OneTapMinesRender: () => (/* reexport */ OneTapMinesRender),
  OneTapMinesSlider: () => (/* reexport */ OneTapMinesSlider),
  OneTapMinesToggleMode: () => (/* reexport */ OneTapMinesToggleMode),
  OneTapMinesWin: () => (/* reexport */ OneTapMinesWin)
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
// EXTERNAL MODULE: consume shared module (default) i18next@^23.2.3 (strict) (fallback: ./node_modules/i18next/dist/esm/i18next.js)
var i18next_js_ = __webpack_require__(49953);
;// ./src/framework/components.onetapmines/OneTapMinesButtonPlay/OneTapMinesButtonPlay.tsx







function _OneTapMinesButtonPlay({ children, onClick = () => { } }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { startGame, makeMultiBet, riskyModeEnabled, opened, setModeAlertShow, betLoading, tapLoading, startRiskyGame, isOpenedTable, placeBetDelayIntervalStatus, }, uiCommon: { setAlertList, isOnline }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'play') {
        return null;
    }
    const handleClick = async (e) => {
        if (betLoading || tapLoading || !isOnline || placeBetDelayIntervalStatus) {
            return false;
        }
        if (!riskyModeEnabled) {
            if (!Boolean(opened.length)) {
                setModeAlertShow(true);
                setAlertList({
                    title: (0,i18next_js_.t)('1TAP.NOTIF'),
                    type: 'success',
                });
            }
            else {
                makeMultiBet();
            }
        }
        else {
            startRiskyGame(true);
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const OneTapMinesButtonPlay = (0,index_js_.observer)(_OneTapMinesButtonPlay);

;// ./src/framework/components.onetapmines/OneTapMinesButtonPlay/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesButtonCashout/OneTapMinesButtonCashout.tsx






function _OneTapMinesButtonCashout({ children, onClick = () => { } }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { cashout, betLoading, tapLoading }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'cashout')
        return null;
    const handleClick = (e) => {
        if (betLoading || tapLoading)
            return false;
        cashout();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const OneTapMinesButtonCashout = (0,index_js_.observer)(_OneTapMinesButtonCashout);

;// ./src/framework/components.onetapmines/OneTapMinesButtonCashout/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesButtonPlayEvent/OneTapMinesButtonPlayEvent.tsx




function _OneTapMinesButtonPlayEvent({ children, onClick = () => { } }) {
    const { game: { startGame, makeMultiBet, riskyModeEnabled, opened, setModeAlertShow, betLoading, tapLoading, placeBetDelayIntervalStatus, }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (betLoading || tapLoading || placeBetDelayIntervalStatus)
            return false;
        if (!riskyModeEnabled) {
            if (!Boolean(opened.length)) {
                setModeAlertShow(true);
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
const OneTapMinesButtonPlayEvent = (0,index_js_.observer)(_OneTapMinesButtonPlayEvent);

;// ./src/framework/components.onetapmines/OneTapMinesButtonPlayEvent/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesButtonCashoutEvent/OneTapMinesButtonCashoutEvent.tsx




function _OneTapMinesButtonCashoutEvent({ children, onClick = () => { } }) {
    const { game: { cashout, betLoading, tapLoading }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (betLoading || tapLoading)
            return false;
        cashout();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const OneTapMinesButtonCashoutEvent = (0,index_js_.observer)(_OneTapMinesButtonCashoutEvent);

;// ./src/framework/components.onetapmines/OneTapMinesButtonCashoutEvent/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesButton/OneTapMinesButton.tsx










const Context = (0,preact_module_js_.createContext)({});
function _OneTapMinesButton({ children }) {
    const { game: { gameId, riskyModeEnabled, hit, lockedButtons, tapLoading, tableTouched, betLoading, gameResult, possibleWin, possibleWinWithBonuses, isOpenedTable, placeBetDelayIntervalStatus, animationProcess, }, profileCommon: { profile: { currencySign, rounding }, }, uiCommon: { isOnline }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const props = {
        title: gameId && riskyModeEnabled
            ? t('COMMON.CASHOUT')
            : !riskyModeEnabled
                ? t('COMMON.PLACE_BET')
                : t('COMMON.START_GAME'),
        request: betLoading,
        button: gameId && riskyModeEnabled ? 'cashout' : 'play',
        disabled: !isOnline || (gameId && riskyModeEnabled)
            ? !hit
                ? !!lockedButtons || tapLoading || placeBetDelayIntervalStatus || animationProcess
                : !!lockedButtons ||
                    !tableTouched ||
                    !!gameResult ||
                    betLoading ||
                    tapLoading ||
                    placeBetDelayIntervalStatus ||
                    animationProcess
            : lockedButtons || betLoading || tapLoading || placeBetDelayIntervalStatus || animationProcess,
        mode: !riskyModeEnabled ? 'default' : 'risky',
        winAmount: (0,shortNumber/* default */.A)(possibleWin, rounding),
        prefix: currencySign || '',
        cashout: possibleWinWithBonuses,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const OneTapMinesButton = Object.assign((0,index_js_.observer)(_OneTapMinesButton), {
    Play: Object.assign(OneTapMinesButtonPlay, {
        Event: OneTapMinesButtonPlayEvent,
    }),
    Cashout: Object.assign(OneTapMinesButtonCashout, {
        Event: OneTapMinesButtonCashoutEvent,
    }),
});

;// ./src/framework/components.onetapmines/OneTapMinesButton/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesToggleMode/OneTapMinesToggleMode.tsx




function _OneTapMinesToggleMode({ children }) {
    const { game: { riskyModeEnabled, setRiskyModeEnabled, lockedUi, lockedButtons }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            defaultValue: riskyModeEnabled,
            onChange: setRiskyModeEnabled,
            disabled: lockedUi || lockedButtons,
            title: (0,i18next_js_.t)('1TAP.HIGH_RISK_GAME'),
            info: (0,i18next_js_.t)('1TAP.NOTIF.RISK'),
        }) }));
}
const OneTapMinesToggleMode = (0,index_js_.observer)(_OneTapMinesToggleMode);

;// ./src/framework/components.onetapmines/OneTapMinesToggleMode/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesModeAlert/OneTapMinesModeAlert.tsx





function _OneTapMinesModeAlert({ children, time = 5000 }) {
    const { game: { riskyModeEnabled, modeAlertShow, setModeAlertShow }, } = (0,bootstrap.GET_STORE)();
    const timeoutRef = (0,hooks_module_js_.useRef)(null);
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setModeAlertShow(false);
    };
    (0,hooks_module_js_.useEffect)(() => {
        setModeAlertShow(riskyModeEnabled);
    }, [riskyModeEnabled]);
    (0,hooks_module_js_.useEffect)(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (modeAlertShow) {
            timeoutRef.current = window.setTimeout(() => {
                setModeAlertShow(false);
            }, time);
            document.addEventListener('click', handleClick, { once: true });
            return () => document.removeEventListener('click', handleClick);
        }
    }, [modeAlertShow]);
    if (!modeAlertShow)
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('1TAP.INFO2'),
        }) }));
}
const OneTapMinesModeAlert = (0,index_js_.observer)(_OneTapMinesModeAlert);

;// ./src/framework/components.onetapmines/OneTapMinesModeAlert/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/range.ts
var range = __webpack_require__(51604);
;// ./src/framework/components.onetapmines/OneTapMinesRenderReload/OneTapMinesRenderReload.tsx




function _OneTapMinesRenderReload({ children, onClick = () => { } }) {
    const { setReload } = (0,hooks_module_js_.useContext)(OneTapMinesRender_Context);
    const handleClick = () => {
        setReload(Date.now());
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const OneTapMinesRenderReload = _OneTapMinesRenderReload;

;// ./src/framework/components.onetapmines/OneTapMinesRenderReload/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesRender/OneTapMinesRender.tsx






const OneTapMinesRender_Context = (0,preact_module_js_.createContext)({});
function _OneTapMinesRender({ children, betData }) {
    const { game: { opened = [], mines = [], deskSize, result, diamondsB, diamondsC }, } = betData;
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
            let isLevel = 0;
            if (diamondsB.includes(i)) {
                isLevel = 1;
            }
            if (diamondsC.includes(i)) {
                isLevel = 2;
            }
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
    return ((0,jsxRuntime_module/* jsx */.Y)(OneTapMinesRender_Context.Provider, { value: { setReload }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                countLoseTile: mines.length,
                countWinTile: deskSize - mines.length,
                list: list,
                opened: opened,
            }) }) }));
}
const OneTapMinesRender = Object.assign(_OneTapMinesRender, {
    Reload: OneTapMinesRenderReload,
});

;// ./src/framework/components.onetapmines/OneTapMinesRender/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGameItem/OneTapMinesGameItem.tsx






const ContextItem = (0,preact_module_js_.createContext)({});
function _OneTapMinesGameItem({ children, index, onClick = () => { } }) {
    const { game: { tapRisky, tapDefault, tapLoading, gameStarted }, } = (0,bootstrap.GET_STORE)();
    const { grid, mode, end } = (0,hooks_module_js_.useContext)(OneTapMinesGame_Context);
    const handleClick = (e) => {
        if (!end && !tapLoading && mode === 'risky' && (grid[index].type === 'default' || grid[index].type === 'active')) {
            if (gameStarted) {
                tapRisky([index], false);
            }
            else {
                tapDefault(index);
            }
        }
        if (!end && mode === 'default' && (grid[index].type === 'default' || grid[index].type === 'active')) {
            tapDefault(index);
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(ContextItem.Provider, { value: { index }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: handleClick,
            })) }) }));
}
const OneTapMinesGameItem = (0,index_js_.observer)(_OneTapMinesGameItem);

;// ./src/framework/components.onetapmines/OneTapMinesGameItem/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGameItemRiskyDefault/OneTapMinesGameItemRiskyDefault.tsx





function _OneTapMinesGameItemRiskyDefault({ children, onClick = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(OneTapMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    if (mode === 'risky' && grid[index].type === 'default') {
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: onClick,
            })) }));
    }
    return null;
}
const OneTapMinesGameItemRiskyDefault = _OneTapMinesGameItemRiskyDefault;

;// ./src/framework/components.onetapmines/OneTapMinesGameItemRiskyDefault/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGameItemRiskyActive/OneTapMinesGameItemRiskyActive.tsx





function _OneTapMinesGameItemRiskyActive({ children, onClick = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(OneTapMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    const [isLoaded, setIsLoaded] = (0,hooks_module_js_.useState)(false);
    const [isAnimEnd, setIsAnimEnd] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'risky' && grid[index].type === 'active') {
            setIsLoaded(true);
        }
        else {
            setIsAnimEnd(false);
            setIsLoaded(false);
        }
    });
    if (mode === 'risky' && grid[index].type === 'active')
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ noAnimation: isLoaded && isAnimEnd })).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: onClick,
                onAnimationEnd: () => setIsAnimEnd(true),
            })) }));
    return null;
}
const OneTapMinesGameItemRiskyActive = _OneTapMinesGameItemRiskyActive;

;// ./src/framework/components.onetapmines/OneTapMinesGameItemRiskyActive/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGameItemRiskyEnd/OneTapMinesGameItemRiskyEnd.tsx




function _OneTapMinesGameItemRiskyEnd({ children, onLoad = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(OneTapMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'risky' && grid[index].type === 'end')
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'risky' && grid[index].type === 'end')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const OneTapMinesGameItemRiskyEnd = _OneTapMinesGameItemRiskyEnd;

;// ./src/framework/components.onetapmines/OneTapMinesGameItemRiskyEnd/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGameItemRiskyLose/OneTapMinesGameItemRiskyLose.tsx




function _OneTapMinesGameItemRiskyLose({ children, onLoad = () => { } }) {
    const { grid, mode, gameResult } = (0,hooks_module_js_.useContext)(OneTapMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'risky' && grid[index].type === 'lose')
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'risky' && grid[index].type === 'lose')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const OneTapMinesGameItemRiskyLose = _OneTapMinesGameItemRiskyLose;

;// ./src/framework/components.onetapmines/OneTapMinesGameItemRiskyLose/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGameItemRiskyRequest/OneTapMinesGameItemRiskyRequest.tsx




function _OneTapMinesGameItemRiskyRequest({ children }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(OneTapMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    if (mode === 'risky' && grid[index].type === 'request')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const OneTapMinesGameItemRiskyRequest = _OneTapMinesGameItemRiskyRequest;

;// ./src/framework/components.onetapmines/OneTapMinesGameItemRiskyRequest/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGameItemRiskyWin/OneTapMinesGameItemRiskyWin.tsx




function _OneTapMinesGameItemRiskyWin({ children, onLoad = () => { } }) {
    const { grid, mode, isFirstTap } = (0,hooks_module_js_.useContext)(OneTapMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'risky' && grid[index].type === 'win')
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'risky' && grid[index].type === 'win')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const OneTapMinesGameItemRiskyWin = _OneTapMinesGameItemRiskyWin;

;// ./src/framework/components.onetapmines/OneTapMinesGameItemRiskyWin/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGameItemDefaultDefault/OneTapMinesGameItemDefaultDefault.tsx





function _OneTapMinesGameItemDefaultDefault({ children, onClick = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(OneTapMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    if (mode === 'default' && grid[index].type === 'default')
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: onClick,
            })) }));
    return null;
}
const OneTapMinesGameItemDefaultDefault = _OneTapMinesGameItemDefaultDefault;

;// ./src/framework/components.onetapmines/OneTapMinesGameItemDefaultDefault/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGameItemDefaultActive/OneTapMinesGameItemDefaultActive.tsx






function _OneTapMinesGameItemDefaultActive({ children, onClick = () => { }, }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(OneTapMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    const [isLoaded, setIsLoaded] = (0,hooks_module_js_.useState)(false);
    const [isAnimEnd, setIsAnimEnd] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'default' && grid[index].type === 'active') {
            setIsLoaded(true);
        }
        else {
            setIsAnimEnd(false);
            setIsLoaded(false);
        }
    });
    if (mode === 'default' && grid[index].type === 'active')
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ noAnimation: isLoaded && isAnimEnd })).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: onClick,
                onAnimationEnd: () => setIsAnimEnd(true)
            })) }));
    return null;
}
const OneTapMinesGameItemDefaultActive = (0,index_js_.observer)(_OneTapMinesGameItemDefaultActive);

;// ./src/framework/components.onetapmines/OneTapMinesGameItemDefaultActive/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGameItemDefaultEnd/OneTapMinesGameItemDefaultEnd.tsx




function _OneTapMinesGameItemDefaultEnd({ children, onLoad = () => { } }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(OneTapMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'default' && grid[index].type === 'end')
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'default' && grid[index].type === 'end')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const OneTapMinesGameItemDefaultEnd = _OneTapMinesGameItemDefaultEnd;

;// ./src/framework/components.onetapmines/OneTapMinesGameItemDefaultEnd/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGameItemDefaultLose/OneTapMinesGameItemDefaultLose.tsx




function _OneTapMinesGameItemDefaultLose({ children, onLoad = () => { } }) {
    const { grid, mode, gameResult } = (0,hooks_module_js_.useContext)(OneTapMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'default' && grid[index].type === 'lose')
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'default' && grid[index].type === 'lose')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const OneTapMinesGameItemDefaultLose = _OneTapMinesGameItemDefaultLose;

;// ./src/framework/components.onetapmines/OneTapMinesGameItemDefaultLose/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGameItemDefaultRequest/OneTapMinesGameItemDefaultRequest.tsx




function _OneTapMinesGameItemDefaultRequest({ children }) {
    const { grid, mode } = (0,hooks_module_js_.useContext)(OneTapMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    if (mode === 'default' && grid[index].type === 'request')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const OneTapMinesGameItemDefaultRequest = _OneTapMinesGameItemDefaultRequest;

;// ./src/framework/components.onetapmines/OneTapMinesGameItemDefaultRequest/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGameItemDefaultWin/OneTapMinesGameItemDefaultWin.tsx




function _OneTapMinesGameItemDefaultWin({ children, onLoad = () => { } }) {
    const { grid, mode, gameResult } = (0,hooks_module_js_.useContext)(OneTapMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (mode === 'default' && grid[index].type === 'win')
            onLoad();
    }, [mode, grid[index].type]);
    if (mode === 'default' && grid[index].type === 'win')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const OneTapMinesGameItemDefaultWin = _OneTapMinesGameItemDefaultWin;

;// ./src/framework/components.onetapmines/OneTapMinesGameItemDefaultWin/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGame/OneTapMinesGame.tsx



















const OneTapMinesGame_Context = (0,preact_module_js_.createContext)({});
function _OneTapMinesGame({ children }) {
    const { game: { riskyModeEnabled, tapLoading, tapLoadingIndex, tiles, opened, isOpenedTable, possibleWinNext, deskSizeList, deskSizeListActive, getWinLevel, gameResult, isFirstTap, animationDelayIndex, }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const [grid, setGrid] = (0,hooks_module_js_.useState)([
        {
            active: false,
            win: false,
            lose: false,
            request: false,
            type: 'default',
            level: 0,
            animationIndex: 0,
        },
    ]);
    (0,hooks_module_js_.useEffect)(() => {
        let animIndex = 0;
        let grid = tiles.map((item, index) => {
            const props = {
                active: opened.includes(index),
                win: item === 1,
                lose: item === 0,
                request: tapLoadingIndex.includes(index),
                type: 'default',
                level: opened.includes(index) ? getWinLevel(index) : 0,
            };
            if (props.active)
                props.type = 'active';
            if (props.request)
                props.type = 'request';
            if (props.active && props.win) {
                props.type = 'win';
                props.animationIndex = animIndex;
                animIndex++;
            }
            if (isOpenedTable && props.lose)
                props.type = 'end';
            if (props.active && props.lose) {
                props.type = 'lose';
                props.animationIndex = animIndex;
                animIndex++;
            }
            return props;
        });
        setGrid(grid);
    }, [opened, tiles, tapLoadingIndex, isOpenedTable]);
    const props = {
        grid: grid,
        gridName: deskSizeList[deskSizeListActive].name,
        tapRequest: tapLoading,
        end: isOpenedTable,
        maxCount: opened.length >= 22,
        mode: !riskyModeEnabled ? 'default' : 'risky',
        nextWin: possibleWinNext > 0 ? `${currencySign}${(0,shortNumber/* default */.A)(possibleWinNext, rounding)}` : '',
        gameResult: gameResult,
        isFirstTap: isFirstTap,
        animationDelayIndex: animationDelayIndex,
        willBeLost: animationDelayIndex >= 0,
        opened: opened,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(OneTapMinesGame_Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const OneTapMinesGame = Object.assign((0,index_js_.observer)(_OneTapMinesGame), {
    Item: Object.assign(OneTapMinesGameItem, {
        Risky: Object.assign({
            Default: OneTapMinesGameItemRiskyDefault,
            Active: OneTapMinesGameItemRiskyActive,
            Request: OneTapMinesGameItemRiskyRequest,
            Win: OneTapMinesGameItemRiskyWin,
            Lose: OneTapMinesGameItemRiskyLose,
            End: OneTapMinesGameItemRiskyEnd,
        }),
        Default: Object.assign({
            Default: OneTapMinesGameItemDefaultDefault,
            Active: OneTapMinesGameItemDefaultActive,
            Request: OneTapMinesGameItemDefaultRequest,
            Win: OneTapMinesGameItemDefaultWin,
            Lose: OneTapMinesGameItemDefaultLose,
            End: OneTapMinesGameItemDefaultEnd,
        }),
    }),
});

;// ./src/framework/components.onetapmines/OneTapMinesGame/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesWinLevel/OneTapMinesWinLevel.tsx




function _OneTapMinesWinLevel({ children, onLoad = () => { } }) {
    const { game: {}, } = (0,bootstrap.GET_STORE)();
    (0,hooks_module_js_.useEffect)(() => {
        onLoad();
    }, []);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const OneTapMinesWinLevel = (0,index_js_.observer)(_OneTapMinesWinLevel);

;// ./src/framework/components.onetapmines/OneTapMinesWinLevel/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesWin/OneTapMinesWin.tsx






function _OneTapMinesWin({ children }) {
    const { game: { coefficient, payout, gameResult, diamondsB, diamondsC }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    if (gameResult === 'won') {
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('MINES.YOU_WIN'),
                profit: (0,shortNumber/* default */.A)(payout, rounding),
                prefix: currencySign,
                coefficient: coefficient,
                titleCoefficient: t('COMMON.MULTIPLIER'),
                diamondsB: diamondsB.length,
                diamondsC: diamondsC.length,
            }) }));
    }
    return null;
}
const OneTapMinesWin = Object.assign((0,index_js_.observer)(_OneTapMinesWin), {
    Level: OneTapMinesWinLevel,
});

;// ./src/framework/components.onetapmines/OneTapMinesWin/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesControlAmount/OneTapMinesControlAmount.tsx




function _OneTapMinesControlAmount({ children }) {
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
const OneTapMinesControlAmount = (0,index_js_.observer)(_OneTapMinesControlAmount);

;// ./src/framework/components.onetapmines/OneTapMinesControlAmount/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesSliderLeft/OneTapMinesSliderLeft.tsx




function _OneTapMinesSliderLeft({ children, onClick = () => { } }) {
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
const OneTapMinesSliderLeft = _OneTapMinesSliderLeft;

;// ./src/framework/components.onetapmines/OneTapMinesSliderLeft/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesSliderRight/OneTapMinesSliderRight.tsx




function _OneTapMinesSliderRight({ children, onClick = () => { } }) {
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
const OneTapMinesSliderRight = _OneTapMinesSliderRight;

;// ./src/framework/components.onetapmines/OneTapMinesSliderRight/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesSliderClear/OneTapMinesSliderClear.tsx




function _OneTapMinesSliderClear({ children, onClick = () => { } }) {
    const { handleClear, clearVisible, clearBtnDisabled } = (0,hooks_module_js_.useContext)(ContextButtons);
    const handleClick = (e) => {
        if (!clearVisible || clearBtnDisabled)
            return;
        handleClear();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            visible: clearVisible,
            disabled: clearBtnDisabled
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const OneTapMinesSliderClear = _OneTapMinesSliderClear;

;// ./src/framework/components.onetapmines/OneTapMinesSliderClear/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
;// ./src/framework/components.onetapmines/OneTapMinesSlider/OneTapMinesSlider.tsx








const ContextButtons = (0,preact_module_js_.createContext)({});
function _OneTapMinesSlider({ children }) {
    const { game: { betLoading, lockedUi, gameConfig, setCurrentPatternId, currentPatternId, clearPatternAvailable, lockedButtons, }, } = (0,bootstrap.GET_STORE)();
    const handleLeft = () => {
        setCurrentPatternId(currentPatternId === 0 ? gameConfig.patterns.length - 1 : currentPatternId - 1);
    };
    const handleRight = () => {
        setCurrentPatternId(currentPatternId === gameConfig.patterns.length - 1 ? 0 : currentPatternId + 1);
    };
    const handleClear = () => {
        setCurrentPatternId((localStorageHelper/* default */.A.has('patternId')
            ? Number(localStorageHelper/* default */.A.get('patternId'))
            : (0,bootstrap.GET_GAME_CONFIG)().defaultPatternId) || 0);
    };
    const props = {
        position: currentPatternId,
        count: gameConfig.patterns.length,
        disabled: lockedUi || betLoading || lockedButtons || clearPatternAvailable,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,jsxRuntime_module/* jsx */.Y)(ContextButtons.Provider, { value: {
                handleRight,
                handleLeft,
                handleClear,
                disabled: lockedUi || betLoading || lockedButtons || clearPatternAvailable,
                clearBtnDisabled: lockedUi || betLoading || lockedButtons,
                clearVisible: clearPatternAvailable,
            }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }) }));
}
const OneTapMinesSlider = (0,index_js_.observer)(Object.assign(_OneTapMinesSlider, {
    Left: OneTapMinesSliderLeft,
    Right: OneTapMinesSliderRight,
    Clear: OneTapMinesSliderClear,
}));

;// ./src/framework/components.onetapmines/OneTapMinesSlider/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesControlHeading/OneTapMinesControlHeading.tsx






function _OneTapMinesControlHeading({ children }) {
    const { game: { lockedButtons, baseCoefficient, coefficientNextWithBonuses, possibleWin, possibleWinNext, diamondsB, diamondsC, opened, itemAppearanceDelay, gameResult, riskyModeEnabled, isFirstTap, showNextTile, animationDelayIndex, }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const [diamondsBLocal, setDiamondsBLocal] = (0,hooks_module_js_.useState)(0);
    const [diamondsCLocal, setDiamondsCLocal] = (0,hooks_module_js_.useState)(0);
    const { t } = (0,es_index_js_.useTranslation)();
    const timersB = (0,hooks_module_js_.useRef)([]);
    const timerC = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        setDiamondsCLocal(0);
        clearTimeout(timerC && timerC.current);
        timerC.current = null;
        if (!opened.includes(diamondsC[0])) {
            return null;
        }
        if (!isFirstTap && riskyModeEnabled) {
            setDiamondsCLocal(1);
            return null;
        }
        const diamondsCIndex = opened
            .slice()
            .sort((a, b) => a - b)
            .findIndex((item) => item === diamondsC[0]);
        if (animationDelayIndex === -1 || diamondsCIndex < animationDelayIndex) {
            timerC.current = window.setTimeout(() => {
                setDiamondsCLocal((prev) => ++prev);
            }, diamondsCIndex * itemAppearanceDelay);
        }
        return () => {
            clearTimeout(timerC && timerC.current);
            timerC.current = null;
        };
    }, [animationDelayIndex, diamondsC.length]);
    (0,hooks_module_js_.useEffect)(() => {
        const diamondsBIndexes = [];
        setDiamondsBLocal(0);
        timersB.current.forEach((timeout) => {
            clearTimeout(timeout);
            timeout = null;
        });
        timersB.current = [];
        if (!isFirstTap && riskyModeEnabled) {
            setDiamondsBLocal(diamondsB.length);
            return null;
        }
        for (let i = 0; i < diamondsB.length; i++) {
            if (opened.includes(diamondsB[i])) {
                diamondsBIndexes.push(opened
                    .slice()
                    .sort((a, b) => a - b)
                    .findIndex((item) => item === diamondsB[i]));
            }
        }
        if (diamondsBIndexes.length === 0) {
            return null;
        }
        diamondsBIndexes.sort((a, b) => a - b);
        for (let i = 0; i < diamondsBIndexes.length; i++) {
            if (animationDelayIndex === -1 || diamondsBIndexes[i] < animationDelayIndex) {
                const t = window.setTimeout(() => {
                    setDiamondsBLocal((prev) => ++prev);
                }, diamondsBIndexes[i] * itemAppearanceDelay);
                timersB.current.push(t);
            }
            else {
                break;
            }
        }
        return () => {
            timersB.current.forEach((timeout) => {
                clearTimeout(timeout);
                timeout = null;
            });
            timersB.current = [];
        };
    }, [animationDelayIndex, diamondsB.length]);
    (0,hooks_module_js_.useEffect)(() => {
        if (gameResult === 'lost') {
            setDiamondsBLocal(0);
            setDiamondsCLocal(0);
            timersB.current.forEach((timeout) => {
                clearTimeout(timeout);
                timeout = null;
            });
            timersB.current = [];
            clearTimeout(timerC && timerC.current);
            timerC.current = null;
        }
    }, [gameResult]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            disabled: lockedButtons,
            coeff: !showNextTile
                ? baseCoefficient
                    ? `x${baseCoefficient}`
                    : '-'
                : coefficientNextWithBonuses
                    ? `x${coefficientNextWithBonuses}`
                    : '-',
            coeffTitle: t('COMMON.MULTIPLIER'),
            payout: !showNextTile
                ? possibleWin
                    ? `${possibleWin} ${currencySign}`
                    : '-'
                : possibleWinNext
                    ? `${(0,shortNumber/* default */.A)(possibleWinNext, rounding)} ${currencySign}`
                    : '-',
            payoutTitle: t('COMMON.POSSIBLE.PAYOUT'),
            showNextTile: showNextTile,
            nextTileTitle: t('1TAP.NEXT.TILE'),
            diamondsB: diamondsBLocal,
            diamondsC: diamondsCLocal * 25,
            isDiamondBActive: diamondsBLocal > 0,
            isDiamondCActive: diamondsCLocal > 0,
        }) }));
}
const OneTapMinesControlHeading = (0,index_js_.observer)(_OneTapMinesControlHeading);

;// ./src/framework/components.onetapmines/OneTapMinesControlHeading/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGameDirectionEvent/OneTapMinesGameDirectionEvent.tsx




function _OneTapMinesGameDirectionEvent({ children, onAnimationStart = () => { }, onAnimationEnd = () => { }, className, }) {
    const { animationStart, animationEnd } = (0,hooks_module_js_.useContext)(OneTapMinesGameDirection_Context);
    const handleAnimationStart = (e) => {
        animationStart(e.target, className);
        onAnimationStart(e);
    };
    const handleAnimationEnd = (e) => {
        animationEnd(e.target, className);
        onAnimationEnd(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({})).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onAnimationStart: handleAnimationStart,
            onAnimationEnd: handleAnimationEnd,
        })) }));
}
const OneTapMinesGameDirectionEvent = _OneTapMinesGameDirectionEvent;

;// ./src/framework/components.onetapmines/OneTapMinesGameDirectionEvent/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGameDirectionButton/OneTapMinesGameDirectionButton.tsx




function _OneTapMinesGameDirectionButton({ children, onClick = () => { } }) {
    const { setGameDirectionNormal, disabled } = (0,hooks_module_js_.useContext)(OneTapMinesGameDirection_Context);
    const handleClick = (e) => {
        if (disabled)
            return;
        setGameDirectionNormal();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ disabled })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const OneTapMinesGameDirectionButton = _OneTapMinesGameDirectionButton;

;// ./src/framework/components.onetapmines/OneTapMinesGameDirectionButton/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesGameDirection/OneTapMinesGameDirection.tsx






const OneTapMinesGameDirection_Context = (0,preact_module_js_.createContext)({});
function _OneTapMinesGameDirection({ children }) {
    const { game: { gameDirectionNormal, gameDirectionTouched, animationProcess, setAnimationProcess, setGameDirectionNormal }, } = (0,bootstrap.GET_STORE)();
    const props = {
        reversed: !gameDirectionNormal,
        backAnim: gameDirectionNormal && gameDirectionTouched,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,jsxRuntime_module/* jsx */.Y)(OneTapMinesGameDirection_Context.Provider, { value: {
                animationStart: (target, className) => {
                    if (target.className.indexOf(className) !== -1) {
                        setAnimationProcess(true);
                    }
                },
                animationEnd: (target, className) => {
                    if (target.className.indexOf(className) !== -1) {
                        setAnimationProcess(false);
                    }
                },
                setGameDirectionNormal: () => setGameDirectionNormal(!gameDirectionNormal),
                disabled: animationProcess,
            }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }) }));
}
const OneTapMinesGameDirection = (0,index_js_.observer)(Object.assign(_OneTapMinesGameDirection, {
    Event: OneTapMinesGameDirectionEvent,
    Button: OneTapMinesGameDirectionButton,
}));

;// ./src/framework/components.onetapmines/OneTapMinesGameDirection/index.tsx


;// ./src/framework/components.onetapmines/OneTapMinesMineChance/OneTapMinesMineChance.tsx





function _OneTapMinesMineChance({ children }) {
    const { game: { gameResult, opened, minesAmount, riskyModeEnabled, gameStarted, deskSize }, } = (0,bootstrap.GET_STORE)();
    const [boomChance, setBoomChance] = (0,hooks_module_js_.useState)(0);
    const getFactorial = (amount) => {
        const arr = [];
        let grid = deskSize;
        let diamondTiles = deskSize - Number(minesAmount);
        for (let i = 0; i < amount; i++) {
            arr.push(diamondTiles / grid);
            grid--;
            diamondTiles--;
        }
        return arr.reduce((acc, item) => acc * item, 1);
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (!gameResult) {
            let chanceToBlowUp = 0;
            if (!riskyModeEnabled || (riskyModeEnabled && !gameStarted)) {
                chanceToBlowUp = (1 - getFactorial(opened.length)) * 100;
            }
            else {
                chanceToBlowUp = (Number(minesAmount) / (25 - opened.length)) * 100;
            }
            setBoomChance(Number(chanceToBlowUp.toFixed(2)));
        }
    }, [gameResult, opened, riskyModeEnabled, gameStarted]);
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            chance: boomChance,
            chanceFull: `${boomChance}%`,
            title: !riskyModeEnabled || (riskyModeEnabled && !gameStarted)
                ? t('COMMON.RISK')
                : t('1TAP.NEXT.TILE.RISK'),
        }) }));
}
const OneTapMinesMineChance = (0,index_js_.observer)(_OneTapMinesMineChance);

;// ./src/framework/components.onetapmines/OneTapMinesMineChance/index.tsx


;// ./src/framework/components.onetapmines/export.ts













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