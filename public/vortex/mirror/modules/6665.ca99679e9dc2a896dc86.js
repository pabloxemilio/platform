"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2302,6665,7402,7518],{

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

/***/ 89820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MultiMinesButton: () => (/* reexport */ MultiMinesButton),
  MultiMinesClearButton: () => (/* reexport */ MultiMinesClearButton),
  MultiMinesControlAmount: () => (/* reexport */ MultiMinesControlAmount),
  MultiMinesControlHeading: () => (/* reexport */ MultiMinesControlHeading),
  MultiMinesGame: () => (/* reexport */ MultiMinesGame),
  MultiMinesGameDirection: () => (/* reexport */ MultiMinesGameDirection),
  MultiMinesNowPlaying: () => (/* reexport */ MultiMinesNowPlaying),
  MultiMinesRender: () => (/* reexport */ MultiMinesRender),
  MultiMinesWin: () => (/* reexport */ MultiMinesWin)
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
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: consume shared module (default) i18next@^23.2.3 (strict) (fallback: ./node_modules/i18next/dist/esm/i18next.js)
var i18next_js_ = __webpack_require__(49953);
;// ./src/framework/components.multimines/MultiMinesButtonPlay/MultiMinesButtonPlay.tsx







function _MultiMinesButtonPlay({ children, onClick = () => { } }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { placeBet, opened, betLoading, roundStatus }, uiCommon: { setAlertList, isOnline }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'play') {
        return null;
    }
    const handleClick = async (e) => {
        if (betLoading || !isOnline || roundStatus !== 'await')
            return false;
        if (!Boolean(opened.length)) {
            setAlertList({
                title: (0,i18next_js_.t)('1TAP.NOTIF'),
                type: 'success',
            });
        }
        else {
            placeBet();
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MultiMinesButtonPlay = (0,index_js_.observer)(_MultiMinesButtonPlay);

;// ./src/framework/components.multimines/MultiMinesButtonPlay/index.tsx


;// ./src/framework/components.multimines/MultiMinesButtonPlayEvent/MultiMinesButtonPlayEvent.tsx




function _MultiMinesButtonPlayEvent({ children, onClick = () => { } }) {
    const { game: { placeBet, opened, betLoading, roundStatus }, uiCommon: { setAlertList, isOnline }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (betLoading || !isOnline || roundStatus !== 'await')
            return false;
        placeBet();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MultiMinesButtonPlayEvent = (0,index_js_.observer)(_MultiMinesButtonPlayEvent);

;// ./src/framework/components.multimines/MultiMinesButtonPlayEvent/index.tsx


;// ./src/framework/components.multimines/MultiMinesButtonCancel/MultiMinesButtonCancel.tsx






function _MultiMinesButtonCancel({ children, onClick = () => { } }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { cancel, betLoading, lockedButtons }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'cancel')
        return null;
    const handleClick = (e) => {
        if (betLoading || lockedButtons)
            return false;
        cancel();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MultiMinesButtonCancel = (0,index_js_.observer)(_MultiMinesButtonCancel);

;// ./src/framework/components.multimines/MultiMinesButtonCancel/index.tsx


;// ./src/framework/components.multimines/MultiMinesButtonCancelEvent/MultiMinesButtonCancelEvent.tsx




function _MultiMinesButtonCancelEvent({ children, onClick = () => { } }) {
    const { game: { cancel, betLoading, lockedButtons }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (betLoading || lockedButtons)
            return false;
        cancel();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MultiMinesButtonCancelEvent = (0,index_js_.observer)(_MultiMinesButtonCancelEvent);

;// ./src/framework/components.multimines/MultiMinesButtonCancelEvent/index.tsx


;// ./src/framework/components.multimines/MultiMinesButtonFreebet/MultiMinesButtonFreebet.tsx







function _MultiMinesButtonFreebet({ children, onClick = () => { } }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { placeBet, opened, betLoading, roundStatus, betPlaced }, uiCommon: { setAlertList, isOnline }, freebetsCommon: { freebetActive }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'freebet')
        return null;
    const handleClick = async (e) => {
        if (betLoading || !isOnline || roundStatus !== 'await')
            return false;
        if (!Boolean(opened.length)) {
            setAlertList({
                title: (0,i18next_js_.t)('1TAP.NOTIF'),
                type: 'success',
            });
        }
        else {
            const minCoefficient = freebetActive?.offer?.configuration[0]?.minCoefficient;
            placeBet(true, minCoefficient);
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MultiMinesButtonFreebet = (0,index_js_.observer)(_MultiMinesButtonFreebet);

;// ./src/framework/components.multimines/MultiMinesButtonFreebet/index.tsx


;// ./src/framework/components.multimines/MultiMinesButtonFreebetEvent/MultiMinesButtonFreebetEvent.tsx




function _MultiMinesButtonFreebetEvent({ children, onClick = () => { } }) {
    const { game: { placeBet, betLoading, roundStatus, betPlaced, cancel }, uiCommon: { isOnline }, freebetsCommon: { freebetActive }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (betLoading || !isOnline || roundStatus !== 'await')
            return false;
        if (betPlaced) {
            cancel();
        }
        else {
            const minCoefficient = freebetActive?.offer?.configuration[0]?.minCoefficient;
            placeBet(true, minCoefficient);
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MultiMinesButtonFreebetEvent = (0,index_js_.observer)(_MultiMinesButtonFreebetEvent);

;// ./src/framework/components.multimines/MultiMinesButtonFreebetEvent/index.tsx


;// ./src/framework/components.multimines/MultiMinesButton/MultiMinesButton.tsx











const Context = (0,preact_module_js_.createContext)({});
function _MultiMinesButton({ children }) {
    const { game: { awaitTime, betLoading, betPlaced, baseCoefficient }, uiCommon: { isOnline }, profileCommon: { profile: { currencySign }, }, freebetsCommon: { freebetsSuccessIndexList, freebetActive, listGetByIndex }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const getButtonType = () => {
        if (freebetsSuccessIndexList.includes(0)) {
            return 'freebet';
        }
        if (betPlaced) {
            return 'cancel';
        }
        else {
            return 'play';
        }
    };
    const getButtonTitle = () => {
        if (awaitTime) {
            if (freebetsSuccessIndexList.includes(0)) {
                return 'FREE BET';
            }
            if (betPlaced) {
                return t('COMMON.CANCEL');
            }
            else {
                return t('COMMON.PLACE_BET');
            }
        }
        else {
            return t('COMMON.ROUND_UNDERWAY');
        }
    };
    const props = {
        title: getButtonTitle(),
        button: getButtonType(),
        disabled: betLoading || !isOnline || !awaitTime || (freebetsSuccessIndexList.includes(0) && betPlaced),
        gameTimer: awaitTime,
        valueFreebet: undefined,
    };
    if (props.button === 'freebet') {
        props.valueFreebet = String(currencySign + freebetActive?.offer?.configuration[0]?.betAmount);
    }
    const minCoefficient = freebetActive?.offer?.configuration[0]?.minCoefficient;
    if (Number(baseCoefficient) < minCoefficient) {
        props.disabled = true;
    }
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const MultiMinesButton = Object.assign((0,index_js_.observer)(_MultiMinesButton), {
    Play: Object.assign(MultiMinesButtonPlay, {
        Event: MultiMinesButtonPlayEvent,
    }),
    Cancel: Object.assign(MultiMinesButtonCancel, {
        Event: MultiMinesButtonCancelEvent,
    }),
    Freebet: Object.assign(MultiMinesButtonFreebet, {
        Event: MultiMinesButtonFreebetEvent,
    }),
});

;// ./src/framework/components.multimines/MultiMinesButton/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/range.ts
var range = __webpack_require__(51604);
;// ./src/framework/components.multimines/MultiMinesRenderReload/MultiMinesRenderReload.tsx




function _MultiMinesRenderReload({ children, onClick = () => { } }) {
    const { setReload } = (0,hooks_module_js_.useContext)(MultiMinesRender_Context);
    const handleClick = () => {
        setReload(Date.now());
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MultiMinesRenderReload = _MultiMinesRenderReload;

;// ./src/framework/components.multimines/MultiMinesRenderReload/index.tsx


;// ./src/framework/components.multimines/MultiMinesRender/MultiMinesRender.tsx






const MultiMinesRender_Context = (0,preact_module_js_.createContext)({});
function _MultiMinesRender({ children, betData }) {
    const { game: { opened = [], mines = [], result, diamondsB, diamondsC }, coefficient, } = betData;
    const [list, setList] = (0,hooks_module_js_.useState)([]);
    const [animationIndex, setAnimationIndex] = (0,hooks_module_js_.useState)(-1);
    const animationTimeout = (0,hooks_module_js_.useRef)(null);
    const [reload, setReload] = (0,hooks_module_js_.useState)(0);
    const animationStep = (0,bootstrap.GET_GAME_CONFIG)().pageRender.animationDuration / opened.length || 500;
    const deskSize = 25;
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
    return ((0,jsxRuntime_module/* jsx */.Y)(MultiMinesRender_Context.Provider, { value: { setReload }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                countLoseTile: mines.length,
                countWinTile: deskSize - mines.length,
                list: list,
                coeff: coefficient ?? 0,
                opened: opened,
            }) }) }));
}
const MultiMinesRender = Object.assign(_MultiMinesRender, {
    Reload: MultiMinesRenderReload,
});

;// ./src/framework/components.multimines/MultiMinesRender/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
;// ./src/framework/components.multimines/MultiMinesGameItem/MultiMinesGameItem.tsx






const ContextItem = (0,preact_module_js_.createContext)({});
function _MultiMinesGameItem({ children, index, onClick = () => { } }) {
    const { game: { tapDefault, betLoading, betPlaced }, } = (0,bootstrap.GET_STORE)();
    const { grid } = (0,hooks_module_js_.useContext)(MultiMinesGame_Context);
    const handleClick = (e) => {
        if (!betPlaced && !betLoading && (grid[index].type === 'default' || grid[index].type === 'active')) {
            tapDefault(index);
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(ContextItem.Provider, { value: { index }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: handleClick,
            })) }) }));
}
const MultiMinesGameItem = (0,index_js_.observer)(_MultiMinesGameItem);

;// ./src/framework/components.multimines/MultiMinesGameItem/index.tsx


;// ./src/framework/components.multimines/MultiMinesGameItemDefault/MultiMinesGameItemDefault.tsx





function _MultiMinesGameItemDefault({ children, onClick = () => { } }) {
    const { grid, currentBets } = (0,hooks_module_js_.useContext)(MultiMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    const [betsInTile, setBetsInTile] = (0,hooks_module_js_.useState)([]);
    (0,hooks_module_js_.useEffect)(() => {
        const arr = [];
        currentBets.forEach((item) => {
            if (item.opened?.includes(index) && item.color) {
                arr.push(item.color);
            }
        });
        setBetsInTile(arr);
        return () => {
            setBetsInTile([]);
        };
    }, [currentBets]);
    if (grid[index].type === 'default')
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ betsInTile })).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: onClick,
            })) }));
    return null;
}
const MultiMinesGameItemDefault = _MultiMinesGameItemDefault;

;// ./src/framework/components.multimines/MultiMinesGameItemDefault/index.tsx


;// ./src/framework/components.multimines/MultiMinesGameItemActive/MultiMinesGameItemActive.tsx






function _MultiMinesGameItemActive({ children, onClick = () => { }, spriteAnimName }) {
    const { grid, currentBets } = (0,hooks_module_js_.useContext)(MultiMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    const [isLoaded, setIsLoaded] = (0,hooks_module_js_.useState)(false);
    const [isAnimEnd, setIsAnimEnd] = (0,hooks_module_js_.useState)(false);
    const [isSpriteAnimEnd, setIsSpriteAnimEnd] = (0,hooks_module_js_.useState)(false);
    const [betsInTile, setBetsInTile] = (0,hooks_module_js_.useState)([]);
    (0,hooks_module_js_.useEffect)(() => {
        const arr = [];
        currentBets.forEach((item) => {
            if (item.opened?.includes(index) && item.color) {
                arr.push(item.color);
            }
        });
        setBetsInTile(arr);
        return () => {
            setBetsInTile([]);
        };
    }, [currentBets]);
    (0,hooks_module_js_.useEffect)(() => {
        if (grid[index].type === 'active') {
            setIsLoaded(true);
        }
        else {
            setIsSpriteAnimEnd(false);
            setIsAnimEnd(false);
            setIsLoaded(false);
        }
    });
    const handleAnimationEnd = (event) => {
        if (event.animationName === spriteAnimName) {
            setIsSpriteAnimEnd(true);
        }
        else {
            setIsAnimEnd(true);
        }
    };
    if (grid[index].type === 'active')
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ noAnimation: isLoaded && isAnimEnd, noAnimationSprite: isLoaded && isSpriteAnimEnd, betsInTile })).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: onClick,
                onAnimationEnd: (event) => handleAnimationEnd(event),
            })) }));
    return null;
}
const MultiMinesGameItemActive = (0,index_js_.observer)(_MultiMinesGameItemActive);

;// ./src/framework/components.multimines/MultiMinesGameItemActive/index.tsx


;// ./src/framework/components.multimines/MultiMinesGameItemEnd/MultiMinesGameItemEnd.tsx




function _MultiMinesGameItemEnd({ children, onLoad = () => { } }) {
    const { grid } = (0,hooks_module_js_.useContext)(MultiMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (grid[index].type === 'end')
            onLoad();
    }, [grid[index].type]);
    if (grid[index].type === 'end')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const MultiMinesGameItemEnd = _MultiMinesGameItemEnd;

;// ./src/framework/components.multimines/MultiMinesGameItemEnd/index.tsx


;// ./src/framework/components.multimines/MultiMinesGameItemLose/MultiMinesGameItemLose.tsx




function _MultiMinesGameItemLose({ children, onLoad = () => { } }) {
    const { grid } = (0,hooks_module_js_.useContext)(MultiMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (grid[index].type === 'lose')
            onLoad();
    }, [grid[index].type]);
    if (grid[index].type === 'lose')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const MultiMinesGameItemLose = _MultiMinesGameItemLose;

;// ./src/framework/components.multimines/MultiMinesGameItemLose/index.tsx


;// ./src/framework/components.multimines/MultiMinesGameItemRequest/MultiMinesGameItemRequest.tsx




function _MultiMinesGameItemRequest({ children }) {
    const { grid } = (0,hooks_module_js_.useContext)(MultiMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    if (grid[index].type === 'request')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const MultiMinesGameItemRequest = _MultiMinesGameItemRequest;

;// ./src/framework/components.multimines/MultiMinesGameItemRequest/index.tsx


;// ./src/framework/components.multimines/MultiMinesGameItemWin/MultiMinesGameItemWin.tsx




function _MultiMinesGameItemWin({ children, onLoad = () => { } }) {
    const { grid } = (0,hooks_module_js_.useContext)(MultiMinesGame_Context);
    const { index } = (0,hooks_module_js_.useContext)(ContextItem);
    (0,hooks_module_js_.useEffect)(() => {
        if (grid[index].type === 'win')
            onLoad();
    }, [grid[index].type]);
    if (grid[index].type === 'win')
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const MultiMinesGameItemWin = _MultiMinesGameItemWin;

;// ./src/framework/components.multimines/MultiMinesGameItemWin/index.tsx


;// ./src/framework/components.multimines/MultiMinesGame/MultiMinesGame.tsx













const MultiMinesGame_Context = (0,preact_module_js_.createContext)({});
function _MultiMinesGame({ children }) {
    const { game: { betLoading, tapLoadingIndex, tiles, opened, showResults, possibleWinNext, getWinLevel, gameResult, deskParams, animationDelayIndex, betPlaced, currentBets, itemAppearanceDelay, }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
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
            if (showResults && props.lose && !!gameResult)
                props.type = 'end';
            if (props.active && props.lose) {
                props.type = 'lose';
                props.animationIndex = animIndex;
                animIndex++;
            }
            return props;
        });
        setGrid(grid);
    }, [opened, tiles, tapLoadingIndex, showResults, gameResult]);
    const props = {
        grid: grid,
        gridName: deskParams.name,
        tapRequest: betLoading,
        betPlaced,
        end: showResults,
        maxCount: opened.length >= 22,
        nextWin: possibleWinNext > 0 ? `${currencySign}${(0,shortNumber/* default */.A)(possibleWinNext, rounding, 6)}` : '',
        gameResult: gameResult,
        animationDelayIndex: animationDelayIndex,
        willBeLost: animationDelayIndex >= 0,
        opened: opened,
        currentBets,
        itemAppearanceDelay,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(MultiMinesGame_Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const MultiMinesGame = Object.assign((0,index_js_.observer)(_MultiMinesGame), {
    Item: Object.assign(MultiMinesGameItem, {
        Default: MultiMinesGameItemDefault,
        Active: MultiMinesGameItemActive,
        Request: MultiMinesGameItemRequest,
        Win: MultiMinesGameItemWin,
        Lose: MultiMinesGameItemLose,
        End: MultiMinesGameItemEnd,
    }),
});

;// ./src/framework/components.multimines/MultiMinesGame/index.tsx


;// ./src/framework/components.multimines/MultiMinesWin/MultiMinesWin.tsx






function _MultiMinesWin({ children, onLoad = () => { } }) {
    const { game: { coefficient, payout, gameResult, diamondsB, diamondsC }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    (0,hooks_module_js_.useEffect)(() => {
        if (gameResult === 'won') {
            onLoad();
        }
    }, [gameResult]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            show: gameResult === 'won',
            title: t('MINES.YOU_WIN'),
            profit: (0,shortNumber/* default */.A)(payout, rounding),
            prefix: currencySign,
            coefficient: coefficient,
            titleCoefficient: t('COMMON.MULTIPLIER'),
            diamondsB: diamondsB.length,
            diamondsC: diamondsC.length,
        }) }));
}
const MultiMinesWin = (0,index_js_.observer)(_MultiMinesWin);

;// ./src/framework/components.multimines/MultiMinesWin/index.tsx


;// ./src/framework/components.multimines/MultiMinesControlAmount/MultiMinesControlAmount.tsx




function _MultiMinesControlAmount({ children }) {
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { amount, setAmount, lockedUi, betPlaced }, uiCommon: { amountError }, freebetsCommon: { freebetEnabled, freebetsSuccessIndexList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
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
            connectBalance: !betPlaced && (freebetEnabled || freebetsSuccessIndexList.includes(0) ? undefined : balance),
            rounding: rounding > 0 ? rounding - 1 : rounding,
        }) }));
}
const MultiMinesControlAmount = (0,index_js_.observer)(_MultiMinesControlAmount);

;// ./src/framework/components.multimines/MultiMinesControlAmount/index.tsx


;// ./src/framework/components.multimines/MultiMinesControlHeading/MultiMinesControlHeading.tsx




function _MultiMinesControlHeading({ children }) {
    const { game: { baseCoefficient, possibleWin, usersTotal }, profileCommon: { profile: { currencySign }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            coeff: baseCoefficient ? `x${baseCoefficient}` : '-',
            coeffTitle: t('COMMON.MULTIPLIER'),
            payout: possibleWin ? `${possibleWin} ${currencySign}` : '-',
            payoutTitle: t('COMMON.POSSIBLE.PAYOUT'),
            usersTotal,
        }) }));
}
const MultiMinesControlHeading = (0,index_js_.observer)(_MultiMinesControlHeading);

;// ./src/framework/components.multimines/MultiMinesControlHeading/index.tsx


;// ./src/framework/components.multimines/MultiMinesGameDirectionEvent/MultiMinesGameDirectionEvent.tsx




function _MultiMinesGameDirectionEvent({ children, onAnimationStart = () => { }, onAnimationEnd = () => { }, className }) {
    const { animationStart, animationEnd } = (0,hooks_module_js_.useContext)(MultiMinesGameDirection_Context);
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
const MultiMinesGameDirectionEvent = _MultiMinesGameDirectionEvent;

;// ./src/framework/components.multimines/MultiMinesGameDirectionEvent/index.tsx


;// ./src/framework/components.multimines/MultiMinesGameDirectionButton/MultiMinesGameDirectionButton.tsx




function _MultiMinesGameDirectionButton({ children, onClick = () => { } }) {
    const { setGameDirectionNormal, disabled } = (0,hooks_module_js_.useContext)(MultiMinesGameDirection_Context);
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
const MultiMinesGameDirectionButton = _MultiMinesGameDirectionButton;

;// ./src/framework/components.multimines/MultiMinesGameDirectionButton/index.tsx


;// ./src/framework/components.multimines/MultiMinesGameDirection/MultiMinesGameDirection.tsx






const MultiMinesGameDirection_Context = (0,preact_module_js_.createContext)({});
function _MultiMinesGameDirection({ children }) {
    const { game: { gameDirectionNormal, gameDirectionTouched, animationProcess, setAnimationProcess, setGameDirectionNormal }, } = (0,bootstrap.GET_STORE)();
    const props = {
        reversed: !gameDirectionNormal,
        backAnimation: gameDirectionNormal && gameDirectionTouched,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,jsxRuntime_module/* jsx */.Y)(MultiMinesGameDirection_Context.Provider, { value: {
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
const MultiMinesGameDirection = (0,index_js_.observer)(Object.assign(_MultiMinesGameDirection, {
    Event: MultiMinesGameDirectionEvent,
    Button: MultiMinesGameDirectionButton,
}));

;// ./src/framework/components.multimines/MultiMinesGameDirection/index.tsx


;// ./src/framework/components.multimines/MultiMinesNowPlaying/MultiMinesNowPlaying.tsx





const userColor = (0,bootstrap.GET_GAME_CONFIG)()?.userColor ?? 'green';
const usersAmountMax = (0,bootstrap.GET_GAME_CONFIG)()?.usersInRoomMax ?? 4;
function _MultiMinesNowPlaying({ children }) {
    const { game: { betPlaced, currentBets, deskParams, gameResult, awaitTime, setOpened, opened }, profileCommon: { profile: { currencySign }, }, } = (0,bootstrap.GET_STORE)();
    const [usersIcons, setUsersIcons] = (0,hooks_module_js_.useState)(Array(usersAmountMax).fill(''));
    const [users, setUsers] = (0,hooks_module_js_.useState)([]);
    const [showCopyWithId, setShowCopyWithId] = (0,hooks_module_js_.useState)(null);
    const timer = (0,hooks_module_js_.useRef)(null);
    const getUserPattern = (opened = []) => {
        return (0,range/* default */.A)(deskParams.size).map((item, index) => (opened.includes(index) ? 1 : 0));
    };
    const onUserClick = (findUserId) => {
        if (!!awaitTime && !betPlaced) {
            const copyFromUser = currentBets.find((item) => item.playerId === findUserId);
            timer.current && clearTimeout(timer.current);
            timer.current = null;
            setShowCopyWithId(findUserId);
            setOpened(copyFromUser.opened.slice());
            timer.current = setTimeout(() => {
                setShowCopyWithId(null);
            }, 740);
        }
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (gameResult) {
            timer.current && clearTimeout(timer.current);
            timer.current = null;
        }
    }, [gameResult]);
    (0,hooks_module_js_.useEffect)(() => {
        let usersNew = currentBets.map((item) => {
            return {
                pattern: getUserPattern(item.opened),
                playerName: item.displayName,
                playerId: item.playerId,
                coeff: (betPlaced ? gameResult : true) && item.payoutCoeff,
                won: item.won,
                amount: (betPlaced ? gameResult : true) && item.won ? item.payoutUsd : item.amountUsd,
                color: item.color,
            };
        });
        if (betPlaced) {
            usersNew = usersNew.reduce((acc, item) => (item.color === userColor ? [item, ...acc] : [...acc, item]), []);
        }
        usersNew.length = betPlaced ? usersAmountMax : usersAmountMax - 1;
        let userIconsNew = usersNew.map((item) => item.color);
        setUsersIcons([...userIconsNew, ...Array(usersAmountMax - userIconsNew.length).fill('')]);
        setUsers(usersNew);
    }, [currentBets, gameResult]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            users,
            usersIcons,
            betPlaced,
            prefix: currencySign,
            onUserClick,
            canCopyPattern: !!awaitTime && !betPlaced,
            showCopyWithId,
            opened,
        }) }));
}
const MultiMinesNowPlaying = (0,index_js_.observer)(_MultiMinesNowPlaying);

;// ./src/framework/components.multimines/MultiMinesNowPlaying/index.tsx


;// ./src/framework/components.multimines/MultiMinesClearButton/MultiMinesClearButton.tsx





function _MultiMinesClearButton({ children, onClick = () => { } }) {
    const { game: { betPlaced, setOpened }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = (e) => {
        if (betPlaced)
            return null;
        setOpened([]);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ disabled: betPlaced, text: t('COMMON.CLEAR_FIELD') })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const MultiMinesClearButton = (0,index_js_.observer)(_MultiMinesClearButton);

;// ./src/framework/components.multimines/MultiMinesClearButton/index.tsx


;// ./src/framework/components.multimines/export.ts











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