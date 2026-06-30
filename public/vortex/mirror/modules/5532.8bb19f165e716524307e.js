"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2302,5532,7402,7518],{

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

/***/ 39737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DoubleBets: () => (/* reexport */ DoubleBets),
  DoubleControlAmount: () => (/* reexport */ DoubleControlAmount),
  DoubleControlButton: () => (/* reexport */ DoubleControlButton),
  DoubleControlButtons: () => (/* reexport */ DoubleControlButtons),
  DoubleControlButtonsV2: () => (/* reexport */ DoubleControlButtonsV2),
  DoubleGameCircle: () => (/* reexport */ DoubleGameCircle),
  DoubleGameLine: () => (/* reexport */ DoubleGameLine),
  DoubleHistory: () => (/* reexport */ DoubleHistory),
  DoubleRenderCircle: () => (/* reexport */ DoubleRenderCircle),
  DoubleRenderLine: () => (/* reexport */ DoubleRenderLine),
  DoubleTimer: () => (/* reexport */ DoubleTimer),
  DoubleWin: () => (/* reexport */ DoubleWin)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
;// ./src/framework/components.double/DoubleHistory/DoubleHistory.tsx





function _DoubleHistory({ children, count }) {
    const { game: { setHistoryListSize, historyList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    (0,hooks_module_js_.useEffect)(() => {
        setHistoryListSize(count);
    }, [count]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.MULTIPLIER'),
            list: historyList,
        }) }));
}
const DoubleHistory = (0,index_js_.observer)(_DoubleHistory);

;// ./src/framework/components.double/DoubleHistory/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: ./src/framework/helpers/animate.ts
var animate = __webpack_require__(93974);
// EXTERNAL MODULE: ./src/framework/helpers/double/doubleCoefficientFromColor.ts
var doubleCoefficientFromColor = __webpack_require__(10162);
;// ./src/framework/components.double/DoubleRenderCircleReload/DoubleRenderCircleReload.tsx




function _DoubleRenderCircleReload({ children, onClick = () => { } }) {
    const { setReload } = (0,hooks_module_js_.useContext)(Context);
    const handleClick = () => {
        setReload(Date.now());
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DoubleRenderCircleReload = _DoubleRenderCircleReload;

;// ./src/framework/components.double/DoubleRenderCircleReload/index.tsx


;// ./src/framework/components.double/DoubleRenderCircle/DoubleRenderCircle.tsx








const timingFunction = {
    linear: animate/* linear */.sn,
    makeEaseOut: (0,animate/* makeEaseOut */.L4)(animate/* easeOutCubic */.p_),
    easeOutCubic: animate/* easeOutCubic */.p_,
};
const Context = (0,preact_module_js_.createContext)({});
function _DoubleRenderCircle({ children, betData }) {
    const { game: { color, result, bets, coefficient }, id, } = betData;
    const { t } = (0,es_index_js_.useTranslation)();
    const [isRun, setIsRun] = (0,hooks_module_js_.useState)(false);
    const [reload, setReload] = (0,hooks_module_js_.useState)(0);
    const [rotate, setRotate] = (0,hooks_module_js_.useState)(0);
    (0,hooks_module_js_.useEffect)(() => {
        setTimeout(() => {
            setIsRun(true);
        }, (0,bootstrap.GET_GAME_CONFIG)().pageRender.animationDelay || 0);
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        if (!isRun)
            return;
        const index = (0,bootstrap.GET_GAME_CONFIG)().game.map.findIndex(([color, coefficient, number]) => {
            return color === color && number === result;
        });
        const p = (360 / (0,bootstrap.GET_GAME_CONFIG)().game.map.length) * (index + 0.5);
        const pBuffCount = 360 * (0,bootstrap.GET_GAME_CONFIG)().game.modeCircle.rotateCount;
        const animation = (0,animate/* animate */.i0)({
            duration: (0,bootstrap.GET_GAME_CONFIG)().pageRender.animationDuration,
            timing: timingFunction[(0,bootstrap.GET_GAME_CONFIG)().game.timingFunction],
            draw: function (progress) {
                const rotate = (p + pBuffCount) * progress;
                setRotate(rotate);
            },
        });
        return () => {
            animation.stop();
        };
    }, [reload, isRun]);
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: { setReload }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                rotate: rotate,
                style: { transform: `rotate(-${rotate}deg)` },
                targetColor: bets[id],
                targetCoefficient: (0,doubleCoefficientFromColor/* default */.A)(bets[id]),
                targetTitle: t('DICE.TARGET_RANGE'),
                resultColor: color,
                resultCoefficient: coefficient,
                resultTitle: t('DICE.RESULT'),
                resultNumber: result,
            }) }) }));
}
const DoubleRenderCircle = Object.assign(_DoubleRenderCircle, {
    Reload: DoubleRenderCircleReload,
});

;// ./src/framework/components.double/DoubleRenderCircle/index.tsx


;// ./src/framework/components.double/DoubleRenderLine/DoubleRenderLine.tsx






function _DoubleRenderLine({ children, betData }) {
    const { game: { color, result, bets, coefficient }, id, } = betData;
    const { t } = (0,es_index_js_.useTranslation)();
    const winIndexObj = (0,hooks_module_js_.useMemo)(() => {
        const index = (0,bootstrap.GET_GAME_CONFIG)().game.map.findIndex(([color, coefficient, number]) => {
            if (typeof color === 'undefined') {
                color === 'white' && number === 0;
            }
            return color === color && number === result;
        });
        if (index === -1)
            return {
                first: 0,
                last: 0,
            };
        return {
            first: index + (0,bootstrap.GET_GAME_CONFIG)().game.map.length * 2,
            last: index +
                (0,bootstrap.GET_GAME_CONFIG)().game.modeLine.mapLength *
                    (0,bootstrap.GET_GAME_CONFIG)().game.map.length,
        };
    }, [betData]);
    const map = (0,hooks_module_js_.useMemo)(() => {
        let map = [
            ...(0,bootstrap.GET_GAME_CONFIG)().game.map,
            ...(0,bootstrap.GET_GAME_CONFIG)().game.map,
        ];
        let count = 0;
        while (count < (0,bootstrap.GET_GAME_CONFIG)().game.modeLine.mapLength) {
            map = [...map, ...(0,bootstrap.GET_GAME_CONFIG)().game.map];
            count++;
        }
        map = [
            ...map,
            ...(0,bootstrap.GET_GAME_CONFIG)().game.map,
            ...(0,bootstrap.GET_GAME_CONFIG)().game.map,
        ];
        return map.map((item, index) => {
            return {
                color: item[0],
                coefficient: item[1],
                number: item[2],
                win: index === winIndexObj.first,
            };
        });
    }, [betData]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            map: map,
            winIndex: winIndexObj.first,
            style: { transform: `translateX(-${winIndexObj.first * 100}%)` },
            targetColor: bets[id],
            targetCoefficient: (0,doubleCoefficientFromColor/* default */.A)(bets[id]),
            targetTitle: t('DICE.TARGET_RANGE'),
            resultColor: color,
            resultCoefficient: coefficient,
            resultTitle: t('DICE.RESULT'),
            resultNumber: result,
        }) }));
}
const DoubleRenderLine = (0,index_js_.observer)(_DoubleRenderLine);

;// ./src/framework/components.double/DoubleRenderLine/index.tsx


;// ./src/framework/components.double/DoubleControlAmount/DoubleControlAmount.tsx




function _DoubleControlAmount({ children }) {
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { amount, setAmount, roundStart }, uiCommon: { amountError }, freebetsCommon: { freebetEnabled, freebetsSuccessIndexList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            titleError: amountError,
            titleMaxWin: `${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`,
            disabled: roundStart || freebetEnabled,
            defaultValue: Number(amount),
            min: minBet,
            max: maxBet,
            onChange: setAmount,
            prefix: currencySign || '',
            connectBalance: !roundStart && (freebetEnabled || freebetsSuccessIndexList.includes(0) ? undefined : balance),
            rounding: rounding > 0 ? rounding - 1 : rounding,
        }) }));
}
const DoubleControlAmount = (0,index_js_.observer)(_DoubleControlAmount);

;// ./src/framework/components.double/DoubleControlAmount/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
;// ./src/framework/components.double/DoubleControlButtonsActive/DoubleControlButtonsActive.tsx






function _DoubleControlButtonsActive({ children, index, onClick = () => { } }) {
    const { game: { awaitTime, setControlButtonActive }, } = (0,bootstrap.GET_STORE)();
    const { list } = (0,hooks_module_js_.useContext)(DoubleControlButtons_Context);
    if (list[index].type !== 'active')
        return null;
    const handleClick = (e) => {
        if (!awaitTime)
            return false;
        setControlButtonActive('');
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DoubleControlButtonsActive = (0,index_js_.observer)(_DoubleControlButtonsActive);

;// ./src/framework/components.double/DoubleControlButtonsActive/index.tsx


;// ./src/framework/components.double/DoubleControlButtonsActiveEvent/DoubleControlButtonsActiveEvent.tsx




function _DoubleControlButtonsActiveEvent({ children, onClick = () => { } }) {
    const { game: { awaitTime, setControlButtonActive }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (!awaitTime)
            return false;
        setControlButtonActive('');
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DoubleControlButtonsActiveEvent = (0,index_js_.observer)(_DoubleControlButtonsActiveEvent);

;// ./src/framework/components.double/DoubleControlButtonsActiveEvent/index.tsx


;// ./src/framework/components.double/DoubleControlButtonsDefault/DoubleControlButtonsDefault.tsx






function _DoubleControlButtonsDefault({ children, index, onClick = () => { } }) {
    const { game: { awaitTime, setControlButtonActive }, } = (0,bootstrap.GET_STORE)();
    const { list } = (0,hooks_module_js_.useContext)(DoubleControlButtons_Context);
    if (list[index].type !== 'default')
        return null;
    const handleClick = (e) => {
        if (!awaitTime)
            return false;
        setControlButtonActive(list[index].color);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DoubleControlButtonsDefault = (0,index_js_.observer)(_DoubleControlButtonsDefault);

;// ./src/framework/components.double/DoubleControlButtonsDefault/index.tsx


;// ./src/framework/components.double/DoubleControlButtonsDefaultEvent/DoubleControlButtonsDefaultEvent.tsx






function _DoubleControlButtonsDefaultEvent({ children, index, onClick = () => { } }) {
    const { game: { awaitTime, setControlButtonActive }, } = (0,bootstrap.GET_STORE)();
    const { list } = (0,hooks_module_js_.useContext)(DoubleControlButtons_Context);
    const handleClick = (e) => {
        if (!awaitTime)
            return false;
        setControlButtonActive(list[index].color);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DoubleControlButtonsDefaultEvent = (0,index_js_.observer)(_DoubleControlButtonsDefaultEvent);

;// ./src/framework/components.double/DoubleControlButtonsDefaultEvent/index.tsx


;// ./src/framework/components.double/DoubleControlButtonsCancel/DoubleControlButtonsCancel.tsx






function _DoubleControlButtonsCancel({ children, index, onClick = () => { } }) {
    const { game: { awaitTime, currentBets, cancel }, } = (0,bootstrap.GET_STORE)();
    const { list } = (0,hooks_module_js_.useContext)(DoubleControlButtons_Context);
    if (list[index].type !== 'cancel')
        return null;
    const handleClick = (e) => {
        if (!awaitTime)
            return false;
        for (let bet of currentBets) {
            if (bet.color === list[index].color) {
                cancel(bet.id);
                break;
            }
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DoubleControlButtonsCancel = (0,index_js_.observer)(_DoubleControlButtonsCancel);

;// ./src/framework/components.double/DoubleControlButtonsCancel/index.tsx


;// ./src/framework/components.double/DoubleControlButtonsCancelEvent/DoubleControlButtonsCancelEvent.tsx






function _DoubleControlButtonsCancelEvent({ children, index, onClick = () => { } }) {
    const { game: { awaitTime, currentBets, cancel }, } = (0,bootstrap.GET_STORE)();
    const { list } = (0,hooks_module_js_.useContext)(DoubleControlButtons_Context);
    const handleClick = (e) => {
        if (!awaitTime)
            return false;
        for (let bet of currentBets) {
            if (bet.color === list[index].color) {
                cancel(bet.id);
                break;
            }
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DoubleControlButtonsCancelEvent = (0,index_js_.observer)(_DoubleControlButtonsCancelEvent);

;// ./src/framework/components.double/DoubleControlButtonsCancelEvent/index.tsx


;// ./src/framework/components.double/DoubleControlButtons/DoubleControlButtons.tsx













const DoubleControlButtons_Context = (0,preact_module_js_.createContext)({});
function _DoubleControlButtons({ children }) {
    const { game: { gameConfig, currentBets, awaitTime, status, controlButtonActive, setControlButtonActive, startTimestampStatus, }, profileCommon: { profile: { currencySign, rounding }, }, freebetsCommon: { listGetByIndex }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const isCurrentBet = (color) => {
        for (let bet of currentBets) {
            if (bet.color === color)
                return true;
        }
        return false;
    };
    const isCurrentBetAmount = (color) => {
        for (let bet of currentBets) {
            if (bet.color === color)
                return (0,shortNumber/* default */.A)(bet.amount, rounding);
        }
        return '0';
    };
    const buttonDisabled = (color) => {
        const freebetList = listGetByIndex(0);
        if (freebetList?.freebet)
            return true;
        return !awaitTime || startTimestampStatus;
    };
    const props = {
        list: gameConfig.buttons.map(({ title, titleCancel, coefficient, color }) => {
            return {
                title: isCurrentBet(color) && awaitTime !== null ? t(titleCancel) : t(title),
                type: isCurrentBet(color) ? 'cancel' : controlButtonActive === color ? 'active' : 'default',
                disabled: buttonDisabled(color),
                coefficient: coefficient,
                color: color,
                amount: isCurrentBetAmount(color),
                prefix: currencySign || '',
            };
        }),
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (status === 0 || !awaitTime)
            setControlButtonActive('');
    }, [status, awaitTime]);
    return ((0,jsxRuntime_module/* jsx */.Y)(DoubleControlButtons_Context.Provider, { value: { ...props }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const DoubleControlButtons = Object.assign((0,index_js_.observer)(_DoubleControlButtons), {
    Default: Object.assign(DoubleControlButtonsDefault, {
        Event: DoubleControlButtonsDefaultEvent,
    }),
    Active: Object.assign(DoubleControlButtonsActive, {
        Event: DoubleControlButtonsActiveEvent,
    }),
    Cancel: Object.assign(DoubleControlButtonsCancel, {
        Event: DoubleControlButtonsCancelEvent,
    }),
});

;// ./src/framework/components.double/DoubleControlButtons/index.tsx


;// ./src/framework/components.double/DoubleControlButtonsV2Loading/DoubleControlButtonsV2Loading.tsx



function _DoubleControlButtonsV2Loading({ children, index }) {
    const { list } = (0,hooks_module_js_.useContext)(DoubleControlButtonsV2_Context);
    if (list[index].type !== 'loading')
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const DoubleControlButtonsV2Loading = _DoubleControlButtonsV2Loading;

;// ./src/framework/components.double/DoubleControlButtonsV2Loading/index.tsx


;// ./src/framework/components.double/DoubleControlButtonsV2Default/DoubleControlButtonsV2Default.tsx






function _DoubleControlButtonsV2Default({ children, index, onClick = () => { } }) {
    const { game: { awaitTime, placebetProcessingList, place }, uiCommon: { amountError }, } = (0,bootstrap.GET_STORE)();
    const { list } = (0,hooks_module_js_.useContext)(DoubleControlButtonsV2_Context);
    if (list[index].type !== 'default')
        return null;
    const handleClick = (e) => {
        if (!awaitTime || list[index].color === '' || placebetProcessingList[list[index].color] || Boolean(amountError))
            return false;
        place(list[index].color);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DoubleControlButtonsV2Default = (0,index_js_.observer)(_DoubleControlButtonsV2Default);

;// ./src/framework/components.double/DoubleControlButtonsV2Default/index.tsx


;// ./src/framework/components.double/DoubleControlButtonsV2DefaultEvent/DoubleControlButtonsV2DefaultEvent.tsx






function _DoubleControlButtonsV2DefaultEvent({ children, index, onClick = () => { } }) {
    const { game: { awaitTime, setControlButtonActive, placebetProcessingList, place }, uiCommon: { amountError }, } = (0,bootstrap.GET_STORE)();
    const { list } = (0,hooks_module_js_.useContext)(DoubleControlButtonsV2_Context);
    const handleClick = (e) => {
        if (!awaitTime || list[index].color === '' || placebetProcessingList[list[index].color] || Boolean(amountError))
            return false;
        place(list[index].color);
        setControlButtonActive(list[index].color);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DoubleControlButtonsV2DefaultEvent = (0,index_js_.observer)(_DoubleControlButtonsV2DefaultEvent);

;// ./src/framework/components.double/DoubleControlButtonsV2DefaultEvent/index.tsx


;// ./src/framework/components.double/DoubleControlButtonsV2Cancel/DoubleControlButtonsV2Cancel.tsx






function _DoubleControlButtonsV2Cancel({ children, index, onClick = () => { } }) {
    const { game: { awaitTime, currentBets, cancel, placebetProcessingList }, } = (0,bootstrap.GET_STORE)();
    const { list } = (0,hooks_module_js_.useContext)(DoubleControlButtonsV2_Context);
    if (list[index].type !== 'cancel')
        return null;
    const handleClick = (e) => {
        if (!awaitTime)
            return false;
        if (placebetProcessingList[list[index].color])
            return false;
        for (let bet of currentBets) {
            if (bet.color === list[index].color) {
                cancel(bet.id, bet.color);
                break;
            }
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DoubleControlButtonsV2Cancel = (0,index_js_.observer)(_DoubleControlButtonsV2Cancel);

;// ./src/framework/components.double/DoubleControlButtonsV2Cancel/index.tsx


;// ./src/framework/components.double/DoubleControlButtonsV2CancelEvent/DoubleControlButtonsV2CancelEvent.tsx






function _DoubleControlButtonsV2CancelEvent({ children, index, onClick = () => { } }) {
    const { game: { awaitTime, currentBets, cancel, placebetProcessingList }, } = (0,bootstrap.GET_STORE)();
    const { list } = (0,hooks_module_js_.useContext)(DoubleControlButtonsV2_Context);
    const handleClick = (e) => {
        if (!awaitTime)
            return false;
        if (placebetProcessingList[list[index].color])
            return false;
        for (let bet of currentBets) {
            if (bet.color === list[index].color) {
                cancel(bet.id, bet.color);
                break;
            }
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DoubleControlButtonsV2CancelEvent = (0,index_js_.observer)(_DoubleControlButtonsV2CancelEvent);

;// ./src/framework/components.double/DoubleControlButtonsV2CancelEvent/index.tsx


;// ./src/framework/components.double/DoubleControlButtonsV2/DoubleControlButtonsV2.tsx











const DoubleControlButtonsV2_Context = (0,preact_module_js_.createContext)({});
function _DoubleControlButtonsV2({ children }) {
    const { game: { gameConfig, currentBets, awaitTime, placebetProcessing, placebetProcessingList }, profileCommon: { profile: { currencySign, rounding }, }, uiCommon: { amountError }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const isCurrentBet = (color) => {
        for (let bet of currentBets) {
            if (bet.color === color)
                return true;
        }
        return false;
    };
    const isCurrentBetAmount = (color) => {
        for (let bet of currentBets) {
            if (bet.color === color)
                return (0,shortNumber/* default */.A)(bet.amount, rounding);
        }
        return '0';
    };
    const isCurrentFreebet = (color) => {
        const bet = currentBets.find((bet) => bet.color === color);
        if (!bet)
            return false;
        return !!bet.isFreebet;
    };
    const props = {
        list: gameConfig.buttons.map(({ title, titleCancel, coefficient, color }) => {
            return {
                title: isCurrentBet(color) && awaitTime !== null ? t(titleCancel) : t(title),
                type: isCurrentBet(color) ? 'cancel' : placebetProcessingList[color] ? 'loading' : 'default',
                disabled: isCurrentFreebet(color) || !awaitTime || (!isCurrentBet(color) && Boolean(amountError)),
                coefficient: coefficient,
                color: color,
                amount: isCurrentBetAmount(color),
                prefix: currencySign || '',
            };
        }),
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(DoubleControlButtonsV2_Context.Provider, { value: { ...props }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const DoubleControlButtonsV2 = Object.assign((0,index_js_.observer)(_DoubleControlButtonsV2), {
    Default: Object.assign(DoubleControlButtonsV2Default, {
        Event: DoubleControlButtonsV2DefaultEvent,
    }),
    Loading: DoubleControlButtonsV2Loading,
    Cancel: Object.assign(DoubleControlButtonsV2Cancel, {
        Event: DoubleControlButtonsV2CancelEvent,
    }),
});

;// ./src/framework/components.double/DoubleControlButtonsV2/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/currencyFix.ts
var currencyFix = __webpack_require__(80599);
// EXTERNAL MODULE: ./src/framework/helpers/ratesConverter.ts
var ratesConverter = __webpack_require__(37288);
;// ./src/framework/components.double/DoubleBetsList/DoubleBetsList.tsx






function _DoubleBetsList({ children }) {
    const { uiCommon: { screenWidth, screenHeight }, } = (0,bootstrap.GET_STORE)();
    const { setListChildrenHeight } = (0,hooks_module_js_.useContext)(DoubleBets_Context);
    const childrenRef = (0,hooks_module_js_.useRef)();
    (0,hooks_module_js_.useEffect)(() => {
        setListChildrenHeight(childrenRef.current?.clientHeight || 0);
    }, [screenWidth, screenHeight]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            ref: (node) => {
                if (node instanceof HTMLElement)
                    childrenRef.current = node;
            },
        })) }));
}
const DoubleBetsList = (0,index_js_.observer)(_DoubleBetsList);

;// ./src/framework/components.double/DoubleBetsList/index.tsx


;// ./src/framework/components.double/DoubleBetsListItem/DoubleBetsListItem.tsx






function _DoubleBetsListItem({ children }) {
    const { uiCommon: { screenWidth, screenHeight }, } = (0,bootstrap.GET_STORE)();
    const { setItemChildrenHeight } = (0,hooks_module_js_.useContext)(DoubleBets_Context);
    const childrenRef = (0,hooks_module_js_.useRef)();
    (0,hooks_module_js_.useEffect)(() => {
        setItemChildrenHeight(childrenRef.current?.offsetHeight || 10);
    }, [screenWidth, screenHeight]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            ref: (node) => {
                if (node instanceof HTMLElement)
                    childrenRef.current = node;
            },
        })) }));
}
const DoubleBetsListItem = (0,index_js_.observer)(_DoubleBetsListItem);

;// ./src/framework/components.double/DoubleBetsListItem/index.tsx


;// ./src/framework/components.double/DoubleBets/DoubleBets.tsx











const DoubleBets_Context = (0,preact_module_js_.createContext)({});
function _DoubleBets({ children, count, nullBets = true }) {
    const { profileCommon: { profile: { playerId, currencySign, currency, rounding }, rates, }, game: { betsViews, resultColorIsDelay, gameConfig, status, playersList, currentBetsIds, playersListColor }, } = (0,bootstrap.GET_STORE)();
    const [betsData, setBetsData] = (0,hooks_module_js_.useState)([]);
    const [stat, setStat] = (0,hooks_module_js_.useState)([]);
    const [winIndex, setWinIndex] = (0,hooks_module_js_.useState)(-1);
    const [listChildrenHeight, setListChildrenHeight] = (0,hooks_module_js_.useState)(10);
    const [itemChildrenHeight, setItemChildrenHeight] = (0,hooks_module_js_.useState)(10);
    const [init, setInit] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useEffect)(() => {
        if (status === 0)
            setInit(true);
    }, [status]);
    (0,hooks_module_js_.useEffect)(() => {
        const computedCount = typeof count === 'number' ? count : Math.floor(listChildrenHeight / itemChildrenHeight);
        const colorList = Object.keys(betsViews);
        const betsData = {};
        for (let i = 0; i < colorList.length; i++) {
            betsData[colorList[i]] = [];
            const betsViewsConvertAmount = betsViews[colorList[i]].map((item) => {
                return {
                    ...item,
                    amount: (0,ratesConverter/* default */.A)(rates, item.currency, (0,currencyFix/* default */.A)(currency), item.amount),
                };
            });
            const sorted = betsViewsConvertAmount.slice().sort((a, b) => Number(b.amount) - Number(a.amount));
            for (let j = 0; j < sorted.length; j++) {
                if (computedCount > j) {
                    betsData[colorList[i]].push(computedBet(sorted[j]));
                }
                else if (currentBetsIds.includes(sorted[j].id)) {
                    betsData[colorList[i]].splice(betsData[colorList[i]].length - 1, 1, computedBet(sorted[j]));
                }
            }
            if (nullBets) {
                while (betsData[colorList[i]].length < computedCount) {
                    betsData[colorList[i]].push(null);
                }
            }
        }
        setStat(gameConfig.buttons.map((button) => {
            const sum = (0,shortNumber/* default */.A)(Number((0,ratesConverter/* default */.A)(rates, 'usd', (0,currencyFix/* default */.A)(currency), playersList[playersListColor.indexOf(button.color)]?.sum || 0).toFixed(2)), rounding);
            return {
                count: playersList[playersListColor.indexOf(button.color)]?.count || 0,
                sum: sum,
                sumValue: `${currencySign}${sum}`,
                prefix: currencySign || '',
            };
        }));
        setBetsData(gameConfig.buttons.map((button) => betsData[button.color]));
    }, [betsViews, currencySign, itemChildrenHeight, listChildrenHeight]);
    const computedBet = (item) => {
        return {
            amount: (0,shortNumber/* default */.A)(Number(item.amount.toFixed(2)), rounding),
            amountProfit: (0,shortNumber/* default */.A)(Number((item.amount * (0,doubleCoefficientFromColor/* default */.A)(item.color)).toFixed(2)), rounding),
            active: currentBetsIds.includes(item.id) || false,
            name: item.playerName,
            coefficient: (0,doubleCoefficientFromColor/* default */.A)(item.color),
            prefix: currencySign || '',
            amountValue: `${currencySign}${(0,shortNumber/* default */.A)(Number(item.amount.toFixed(2)), rounding)}`,
            amountProfitValue: `+${currencySign}${(0,shortNumber/* default */.A)(Number((item.amount * (0,doubleCoefficientFromColor/* default */.A)(item.color)).toFixed(2)), rounding)}`,
        };
    };
    (0,hooks_module_js_.useEffect)(() => {
        const colorList = gameConfig.buttons.map((item) => item.color);
        if (init)
            setWinIndex(colorList.indexOf(resultColorIsDelay || ''));
        setTimeout(() => {
            setWinIndex(-1);
        }, gameConfig.winDuration);
    }, [resultColorIsDelay]);
    const props = {
        stat: stat,
        bets: betsData,
        winIndex: winIndex,
        colors: gameConfig.buttons.map((item) => item.color),
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(DoubleBets_Context.Provider, { value: { setItemChildrenHeight, setListChildrenHeight }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const DoubleBets = Object.assign((0,index_js_.observer)(_DoubleBets), {
    List: Object.assign(DoubleBetsList, {
        Item: DoubleBetsListItem,
    }),
});

;// ./src/framework/components.double/DoubleBets/index.tsx


;// ./src/framework/components.double/DoubleTimer/DoubleTimer.tsx





function _DoubleTimer({ children }) {
    const { game: { awaitTime }, } = (0,bootstrap.GET_STORE)();
    const timeRef = (0,hooks_module_js_.useRef)(0);
    const [percent, setPercent] = (0,hooks_module_js_.useState)('0');
    const [percentReverse, setPercentReverse] = (0,hooks_module_js_.useState)('100');
    const [time, setTime] = (0,hooks_module_js_.useState)('00:00');
    const [timeReverse, setTimeReverse] = (0,hooks_module_js_.useState)('00:00');
    (0,hooks_module_js_.useEffect)(() => {
        if (awaitTime === null)
            return;
        if (awaitTime <= timeRef.current)
            return;
        timeRef.current = awaitTime;
        (0,animate/* animate */.i0)({
            duration: timeRef.current * 1000,
            timing: animate/* linear */.sn,
            draw: function (progress) {
                setPercent(`${100 * progress}`);
                setPercentReverse(`${100 - 100 * progress}`);
                setTime(msTosec(timeRef.current * 60 * progress));
                setTimeReverse(msTosec(timeRef.current * 60 - timeRef.current * 60 * progress));
                if (progress === 1) {
                    timeRef.current = 0;
                }
            },
        });
    }, [awaitTime]);
    function msTosec(value) {
        return (String(Math.floor(value / 60)).padStart(2, '0') +
            ':' +
            (value % 60 ? String(Math.floor(value % 60)).padStart(2, '0') : '00'));
    }
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ percent, percentReverse, time, timeReverse }) });
}
const DoubleTimer = (0,index_js_.observer)(_DoubleTimer);

;// ./src/framework/components.double/DoubleTimer/index.tsx


;// ./src/framework/components.double/DoubleControlButton/DoubleControlButton.tsx





function _DoubleControlButton({ children, onClick = () => { } }) {
    const { game: { gameConfig, placebetProcessing, awaitTime, place, controlButtonActive, getIndexFromColor }, freebetsCommon: { freebetsSuccessIndexList, freebetActive }, uiCommon: { amountError }, profileCommon: { profile: { currencySign }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = (e) => {
        if (!awaitTime || controlButtonActive === '' || placebetProcessing || Boolean(amountError))
            return false;
        if (freebetsSuccessIndexList.includes(0)) {
            place(controlButtonActive, true);
        }
        else {
            place(controlButtonActive);
        }
        onClick(e);
    };
    const buttonTitle = () => {
        if (controlButtonActive !== '' && freebetsSuccessIndexList.includes(0)) {
            return 'FREE BETS';
        }
        if (controlButtonActive !== '') {
            return t(gameConfig.button.title);
        }
        return t(gameConfig.button.titleChoose);
    };
    const buttonType = () => {
        if (controlButtonActive !== '' && freebetsSuccessIndexList.includes(0)) {
            return 'freebet';
        }
        if (awaitTime === null)
            return 'await';
        if (placebetProcessing)
            return 'loading';
        if (controlButtonActive !== '')
            return controlButtonActive;
        return 'default';
    };
    const props = {
        title: buttonTitle(),
        request: placebetProcessing,
        type: buttonType(),
        disabled: !awaitTime || controlButtonActive === '' || Boolean(amountError),
        color: controlButtonActive,
        valueFreebet: undefined,
        currency: currencySign,
    };
    if (freebetsSuccessIndexList.includes(0)) {
        props.valueFreebet = String(freebetActive?.offer?.configuration[0]?.betAmount);
    }
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const DoubleControlButton = (0,index_js_.observer)(_DoubleControlButton);

;// ./src/framework/components.double/DoubleControlButton/index.tsx


;// ./src/framework/components.double/DoubleGameCircle/DoubleGameCircle.tsx






const DoubleGameCircle_timingFunction = {
    linear: animate/* linear */.sn,
    makeEaseOut: (0,animate/* makeEaseOut */.L4)(animate/* easeOutCubic */.p_),
    easeOutCubic: animate/* easeOutCubic */.p_,
};
function _DoubleGameCircle({ children, onItem = () => { }, onFinish = () => { } }) {
    const { game: { gameResult, resultColor, gameConfig, animation, setAnimation }, uiCommon: { isVisible, noAnimation }, } = (0,bootstrap.GET_STORE)();
    const childrenRef = (0,hooks_module_js_.useRef)();
    const pEnd = (0,hooks_module_js_.useRef)(0);
    (0,hooks_module_js_.useEffect)(() => {
        if (animation) {
            const index = gameConfig.game.map.findIndex(([color, coefficient, number]) => {
                return color === resultColor && number === gameResult;
            });
            const p = (360 / gameConfig.game.map.length) * (index + 0.5);
            const pBuff = 360 - pEnd.current + p;
            const pBuffCount = 360 * gameConfig.game.modeCircle.rotateCount;
            let itemIndex = 0;
            (0,animate/* animate */.i0)({
                duration: noAnimation ? 1 : gameConfig.game.duration,
                timing: DoubleGameCircle_timingFunction[gameConfig.game.timingFunction],
                draw: function (progress) {
                    const rotate = pEnd.current + (pBuff + pBuffCount) * progress;
                    childrenRef.current.style.transform = `rotate(-${rotate}deg)`;
                    const computedItemCount = Math.floor((rotate % 360) / (360 / gameConfig.game.map.length));
                    if (!noAnimation && computedItemCount !== -1 && computedItemCount !== itemIndex) {
                        const item = {
                            color: gameConfig.game.map[computedItemCount][0],
                            coefficient: gameConfig.game.map[computedItemCount][1],
                            number: gameConfig.game.map[computedItemCount][2],
                        };
                        if (isVisible)
                            onItem(item);
                        itemIndex = computedItemCount === gameConfig.game.map.length ? 0 : computedItemCount;
                    }
                    if (progress === 1) {
                        const item = {
                            color: gameConfig.game.map[index][0],
                            coefficient: gameConfig.game.map[index][1],
                            number: gameConfig.game.map[index][2],
                        };
                        if (isVisible)
                            onFinish(item);
                        pEnd.current = p;
                        setAnimation(false);
                    }
                },
            });
        }
    }, [animation]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            ref: (node) => {
                if (node instanceof HTMLElement)
                    childrenRef.current = node;
            },
        })) }));
}
const DoubleGameCircle = (0,index_js_.observer)(_DoubleGameCircle);

;// ./src/framework/components.double/DoubleGameCircle/index.tsx


;// ./src/framework/components.double/DoubleGameLine/DoubleGameLine.tsx






const DoubleGameLine_timingFunction = {
    linear: animate/* linear */.sn,
    makeEaseOut: (0,animate/* makeEaseOut */.L4)(animate/* easeOutCubic */.p_),
    easeOutCubic: animate/* easeOutCubic */.p_,
};
function _DoubleGameLine({ children, onItem = () => { }, onFinish = () => { } }) {
    const { game: { gameResult, resultColor, gameResultWithRid, gameId, status, gameConfig, animation }, uiCommon: { isVisible, screenWidth, screenHeight, noAnimation }, } = (0,bootstrap.GET_STORE)();
    const childrenRef = (0,hooks_module_js_.useRef)();
    const [winIndex, setWinIndex] = (0,hooks_module_js_.useState)(-1);
    const [map, setMap] = (0,hooks_module_js_.useState)([]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!childrenRef.current)
            return;
        const winIndexObj = winItemIndex();
        const brumWidth = parseFloat(getComputedStyle(childrenRef.current).width);
        const itemXFirst = brumWidth * winIndexObj.first;
        childrenRef.current.style.transform = `translateX(-${itemXFirst}px)`;
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        let map = [...gameConfig.game.map, ...gameConfig.game.map];
        let count = 0;
        while (count < gameConfig.game.modeLine.mapLength) {
            map = [...map, ...gameConfig.game.map];
            count++;
        }
        map = [...map, ...gameConfig.game.map, ...gameConfig.game.map];
        setMap(map.map((item, index) => {
            return {
                color: item[0],
                coefficient: item[1],
                number: item[2],
                win: index === winIndex,
            };
        }));
    }, [winIndex]);
    (0,hooks_module_js_.useEffect)(() => {
        if (gameId === '')
            return;
        if (!childrenRef.current)
            return;
        const winIndexObj = winItemIndex();
        let itemCount = 0;
        (0,animate/* animate */.i0)({
            duration: noAnimation ? 1 : gameConfig.game.duration,
            timing: DoubleGameLine_timingFunction[gameConfig.game.timingFunction],
            draw: function (progress) {
                if (!childrenRef.current)
                    return;
                const brumWidth = parseFloat(getComputedStyle(childrenRef.current).width);
                const itemXFirst = brumWidth * winIndexObj.first;
                const itemXLast = brumWidth * winIndexObj.last;
                const x = itemXFirst + (itemXLast - itemXFirst) * progress;
                childrenRef.current.style.transform = `translateX(-${x}px)`;
                const computedItemCount = Math.round((itemXFirst + (itemXLast - itemXFirst) * progress) / brumWidth);
                if (computedItemCount > itemCount) {
                    const item = {
                        ...map[computedItemCount],
                        last: computedItemCount === winIndexObj.last,
                    };
                    delete item.win;
                    if (isVisible)
                        onItem(item);
                    itemCount = computedItemCount;
                }
                if (progress === 1) {
                    childrenRef.current.style.transform = `translateX(-${itemXFirst}px)`;
                    const item = {
                        ...map[computedItemCount],
                    };
                    delete item.win;
                    if (isVisible)
                        onFinish(item);
                    setWinIndex(winIndexObj.first);
                    setTimeout(() => {
                        setWinIndex(-1);
                    }, gameConfig.winDuration);
                }
            },
        });
        return () => { };
    }, [gameResultWithRid]);
    (0,hooks_module_js_.useEffect)(() => {
        if (gameId === '')
            return;
        if (!childrenRef.current)
            return;
        if (status < 3 || status > 4) {
            const winIndexObj = winItemIndex();
            const brumWidth = parseFloat(getComputedStyle(childrenRef.current).width);
            const itemXFirst = brumWidth * winIndexObj.first;
            childrenRef.current.style.transform = `translateX(-${itemXFirst}px)`;
        }
    }, [screenWidth, screenHeight]);
    const winItemIndex = () => {
        const index = gameConfig.game.map.findIndex(([color, coefficient, number]) => {
            if (typeof resultColor === 'undefined') {
                color === 'white' && number === 0;
            }
            return color === resultColor && number === gameResult;
        });
        if (index === -1)
            return {
                first: 0,
                last: 0,
            };
        return {
            first: index + gameConfig.game.map.length * 2,
            last: index + gameConfig.game.modeLine.mapLength * gameConfig.game.map.length,
        };
    };
    const props = {
        animation: animation,
        map: map,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            ref: (node) => {
                if (node instanceof HTMLElement)
                    childrenRef.current = node;
            },
        })) }));
}
const DoubleGameLine = (0,index_js_.observer)(_DoubleGameLine);

;// ./src/framework/components.double/DoubleGameLine/index.tsx


;// ./src/framework/components.double/DoubleWin/DoubleWin.tsx







function _DoubleWin({ children, onLoad = () => { }, onWin = () => { }, onLose = () => { } }) {
    const { game: { amount, resultColorIsDelay, winScreen, result }, profileCommon: { profile: { currencySign, rounding }, }, uiCommon: { isVisible }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    (0,hooks_module_js_.useEffect)(() => {
        if (winScreen && resultColorIsDelay) {
            if (isVisible)
                onLoad();
            if (isVisible && result === 'win')
                onWin({
                    coefficient: (0,doubleCoefficientFromColor/* default */.A)(resultColorIsDelay),
                    color: resultColorIsDelay,
                });
            if (isVisible && result === 'lose')
                onLose({
                    coefficient: (0,doubleCoefficientFromColor/* default */.A)(resultColorIsDelay),
                    color: resultColorIsDelay,
                });
        }
    }, [winScreen]);
    if (winScreen && resultColorIsDelay) {
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('MINES.YOU_WIN'),
                profit: (0,shortNumber/* default */.A)(Number(Number(amount) * (0,doubleCoefficientFromColor/* default */.A)(resultColorIsDelay)), rounding),
                prefix: currencySign || '',
                coefficient: (0,doubleCoefficientFromColor/* default */.A)(resultColorIsDelay),
                titleCoefficient: t('COMMON.MULTIPLIER'),
                color: resultColorIsDelay,
                win: result === 'win',
            }) }));
    }
    return null;
}
const DoubleWin = (0,index_js_.observer)(_DoubleWin);

;// ./src/framework/components.double/DoubleWin/index.tsx


;// ./src/framework/components.double/export.ts














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

/***/ 80599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ currencyFix)
/* harmony export */ });
function currencyFix(currency) {
    if (currency === "arsb") {
        return "ars";
    }
    return currency;
}


/***/ }),

/***/ 10162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function coefficientFromColor(color) {
    return color === 'white' ? 14 : 2;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coefficientFromColor);


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