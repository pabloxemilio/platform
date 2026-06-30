"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[1177,2302,7402,7518],{

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

/***/ 41512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  JewelclickerButton: () => (/* reexport */ JewelclickerButton),
  JewelclickerButtonHowToPlay: () => (/* reexport */ JewelclickerButtonHowToPlay),
  JewelclickerCashOutCountdown: () => (/* reexport */ JewelclickerCashOutCountdown),
  JewelclickerControlAmount: () => (/* reexport */ JewelclickerControlAmount),
  JewelclickerGame: () => (/* reexport */ JewelclickerGame),
  JewelclickerGameHowToPlay: () => (/* reexport */ JewelclickerGameHowToPlay),
  JewelclickerRender: () => (/* reexport */ JewelclickerRender),
  JewelclickerUsersOnline: () => (/* reexport */ JewelclickerUsersOnline),
  JewelclickerWin: () => (/* reexport */ JewelclickerWin),
  JewelclickerWinInfo: () => (/* reexport */ JewelclickerWinInfo),
  WinColorType: () => (/* reexport */ WinColorType),
  getWinType: () => (/* reexport */ getWinType)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
;// ./src/framework/components.jewelclicker/JewelclickerWin/JewelclickerWin.tsx




function _JewelclickerWin({ children, onWin }) {
    const { game: { showResults, gameResult, roundPayout, coefficient, winLevel }, profileCommon: { profile: { currencySign }, }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            profit: (0,shortNumber/* default */.A)(roundPayout, 2),
            prefix: currencySign,
            coefficient: (0,shortNumber/* default */.A)(coefficient, 2),
            show: showResults,
            level: winLevel,
            isLost: false,
        }) }));
}
const JewelclickerWin = (0,index_js_.observer)(_JewelclickerWin);

;// ./src/framework/components.jewelclicker/JewelclickerWin/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
;// ./src/framework/components.jewelclicker/JewelclickerButtonLoading/JewelclickerButtonLoading.tsx




function _JewelclickerButtonLoading({ children }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    if (button !== ButtonType.loading)
        return null;
    return children;
}
const JewelclickerButtonLoading = (0,index_js_.observer)(_JewelclickerButtonLoading);

;// ./src/framework/components.jewelclicker/JewelclickerButtonLoading/index.tsx


;// ./src/framework/components.jewelclicker/JewelclickerButtonCashOut/JewelclickerButtonCashOut.tsx








function _JewelclickerButtonCashOut({ children, onClick = () => { }, loopMusicIds = null, onStart = () => { }, onEnd = () => { }, onLose = () => { }, }) {
    const [cashoutInProgress, setCashoutInProgress] = (0,hooks_module_js_.useState)(false);
    const timeoutRef = (0,hooks_module_js_.useRef)(null);
    const { button, disabled } = (0,hooks_module_js_.useContext)(Context);
    const { game: { cashout, win, gameResult }, profileCommon: { profile: { currencySign }, }, } = (0,bootstrap.GET_STORE)();
    if (button !== ButtonType.cashout)
        return null;
    (0,hooks_module_js_.useEffect)(() => {
        if (gameResult) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            setCashoutInProgress(false);
        }
    }, [gameResult]);
    const handleDown = (e) => {
        e.preventDefault();
        if (cashoutInProgress)
            return false;
        if (disabled)
            return false;
        setCashoutInProgress(true);
        timeoutRef.current = setTimeout(() => {
            setCashoutInProgress(false);
        }, 2000);
        cashout();
        onClick();
    };
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            title: t('COMMON.CASHOUT'),
            text: `${currencySign} ${win}`,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleDown,
        })) }));
}
const JewelclickerButtonCashOut = (0,index_js_.observer)(_JewelclickerButtonCashOut);

;// ./src/framework/components.jewelclicker/JewelclickerButtonCashOut/index.tsx


;// ./src/framework/components.jewelclicker/JewelclickerButtonStart/JewelclickerButtonStart.tsx







function _JewelclickerButtonStart({ children, onClick = () => { } }) {
    const { button, disabled } = (0,hooks_module_js_.useContext)(Context);
    const { game: { startGame }, } = (0,bootstrap.GET_STORE)();
    if (button !== ButtonType.start)
        return null;
    const handleUp = (e) => {
        if (disabled)
            return false;
        startGame();
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleUp,
        })) }));
}
const JewelclickerButtonStart = (0,index_js_.observer)(_JewelclickerButtonStart);

;// ./src/framework/components.jewelclicker/JewelclickerButtonStart/index.tsx


;// ./src/framework/components.jewelclicker/JewelclickerButtonAutoStart/JewelclickerButtonAutoStart.tsx







function _JewelclickerButtonAutoStart({ children, onClick = () => { } }) {
    const { disabled } = (0,hooks_module_js_.useContext)(Context);
    const { game: { setAutoStart, isAutoStart }, } = (0,bootstrap.GET_STORE)();
    const handleDown = (e) => {
        e.preventDefault();
        if (disabled)
            return false;
        setAutoStart(!isAutoStart);
        onClick();
    };
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled,
            isAutoStart,
            title: 'AUTO \n START',
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleDown,
        })) }));
}
const JewelclickerButtonAutoStart = (0,index_js_.observer)(_JewelclickerButtonAutoStart);

;// ./src/framework/components.jewelclicker/JewelclickerButtonAutoStart/index.tsx


;// ./src/framework/components.jewelclicker/JewelclickerButtonPreparation/JewelclickerButtonPreparation.tsx






function _JewelclickerButtonPreparation({ children }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { howToPlay, setHowToPlay, }, } = (0,bootstrap.GET_STORE)();
    if (button !== ButtonType.running)
        return null;
    const handleClick = () => {
        setHowToPlay({ stone: true });
    };
    return ((0,jsxRuntime_module/* jsx */.Y)("div", { onClick: handleClick, children: children }));
}
const JewelclickerButtonPreparation = (0,index_js_.observer)(_JewelclickerButtonPreparation);

;// ./src/framework/components.jewelclicker/JewelclickerButtonPreparation/index.tsx


;// ./src/framework/components.jewelclicker/JewelclickerButton/JewelclickerButton.tsx











var ButtonType;
(function (ButtonType) {
    ButtonType["start"] = "start";
    ButtonType["running"] = "running";
    ButtonType["cashout"] = "cashout";
    ButtonType["loading"] = "loading";
})(ButtonType || (ButtonType = {}));
const Context = (0,preact_module_js_.createContext)({});
function _JewelclickerButton({ children }) {
    const { game: { isCanvasLoaded, gameStatus, coefficient, isAutoStart, isSocketDisabled }, uiCommon: { amountError, isOnline }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const timeoutRef = (0,hooks_module_js_.useRef)(null);
    const [button, setButton] = (0,hooks_module_js_.useState)(ButtonType.start);
    const [btnDisabledOnLose, setBtnDisabledOnLose] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useEffect)(() => {
        switch (true) {
            case gameStatus === 'loading':
                timeoutRef.current = setTimeout(() => {
                    setButton(ButtonType.loading);
                }, 200);
                break;
            case gameStatus === 'running':
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
                if (coefficient > 1) {
                    setButton(ButtonType.cashout);
                }
                else {
                    setButton(ButtonType.running);
                }
                break;
            case gameStatus === 'waiting':
            default:
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
                setButton(ButtonType.start);
        }
    }, [gameStatus, isAutoStart, coefficient]);
    const props = {
        text: button === ButtonType.start ? t('CRASH.START') : t('JEWEL_CLICKER.HIT_STONE'),
        button,
        disabled: (button === ButtonType.start && !!amountError) || !isOnline || !isCanvasLoaded || btnDisabledOnLose || isSocketDisabled,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const JewelclickerButton = Object.assign((0,index_js_.observer)(_JewelclickerButton), {
    Start: JewelclickerButtonStart,
    AutoStart: JewelclickerButtonAutoStart,
    Loading: JewelclickerButtonLoading,
    CashOut: JewelclickerButtonCashOut,
    Preparation: JewelclickerButtonPreparation,
});

;// ./src/framework/components.jewelclicker/JewelclickerButton/index.tsx


;// ./src/framework/components.jewelclicker/JewelclickerCashOutCountdown/JewelclickerCashOutCountdown.tsx





function _JewelclickerCashOutCountdown({ children }) {
    const { game: { countdownSeconds, gameResult, coefficient }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [isShow, setisShow] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useEffect)(() => {
        setisShow(Boolean(countdownSeconds && countdownSeconds <= 4));
    }, [countdownSeconds]);
    (0,hooks_module_js_.useEffect)(() => {
        if (gameResult) {
            setisShow(false);
        }
    }, [gameResult]);
    (0,hooks_module_js_.useEffect)(() => {
        if (coefficient) {
            setisShow(false);
        }
    }, [coefficient]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            text: t('COMMON.CASHOUT_IN'),
            isShow,
            seconds: countdownSeconds - 1 === -1 ? 0 : countdownSeconds - 1,
        }) }));
}
const JewelclickerCashOutCountdown = (0,index_js_.observer)(_JewelclickerCashOutCountdown);

;// ./src/framework/components.jewelclicker/JewelclickerCashOutCountdown/index.ts


;// ./src/framework/components.jewelclicker/JewelclickerControlAmount/JewelclickerControlAmount.tsx




function _JewelclickerControlAmount({ children }) {
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { amount, setAmount }, uiCommon: { amountError }, freebetsCommon: { freebetsSuccessIndexList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            titleError: amountError,
            titleMaxWin: `${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`,
            disabled: freebetsSuccessIndexList.includes(0),
            defaultValue: Number(amount),
            min: minBet,
            max: maxBet,
            onChange: setAmount,
            currencySign,
            prefix: '',
            connectBalance: freebetsSuccessIndexList.includes(0) ? undefined : balance,
            rounding: rounding > 0 ? rounding - 1 : rounding,
        }) }));
}
const JewelclickerControlAmount = (0,index_js_.observer)(_JewelclickerControlAmount);

;// ./src/framework/components.jewelclicker/JewelclickerControlAmount/index.jsx


;// ./src/framework/components.jewelclicker/JewelclickerUsersOnline/JewelclickerUsersOnline.tsx


function _JewelclickerUsersOnline({ children }) {
    const { game: { usersCountOnline }, } = (0,bootstrap.GET_STORE)();
    return !!usersCountOnline ? children({ usersOnline: usersCountOnline }) : null;
}
const JewelclickerUsersOnline = (0,index_js_.observer)(_JewelclickerUsersOnline);

;// ./src/framework/components.jewelclicker/JewelclickerUsersOnline/index.tsx


;// ./src/framework/components.jewelclicker/JewelclickerWinInfo/JewelclickerWinInfo.tsx


function _JewelclickerWinInfo({ children }) {
    const { game: { win, coefficient, coefficientsHistory = [], gameResult, }, profileCommon: { profile: { currencySign }, }, } = (0,bootstrap.GET_STORE)();
    const coefficientLosing = gameResult?.gameResult?.fail && gameResult?.gameResult?.coefficient || 0;
    return children({
        win,
        currencySign,
        coefficient,
        coefficientLosing,
        coefficientsHistory,
    });
}
const JewelclickerWinInfo = (0,index_js_.observer)(_JewelclickerWinInfo);

;// ./src/framework/components.jewelclicker/JewelclickerWinInfo/index.tsx


;// ./src/framework/components.jewelclicker/utils/types.ts
var WinType;
(function (WinType) {
    WinType["common"] = "common";
    WinType["uncommon"] = "uncommon";
    WinType["rare"] = "rare";
    WinType["epic"] = "epic";
})(WinType || (WinType = {}));
var WinColorType;
(function (WinColorType) {
    WinColorType["common"] = "blue";
    WinColorType["uncommon"] = "green";
    WinColorType["rare"] = "yellow";
    WinColorType["epic"] = "purple";
})(WinColorType || (WinColorType = {}));

;// ./src/framework/components.jewelclicker/utils/index.ts

function getWinType(coef) {
    switch (true) {
        case coef >= 2 && coef < 10:
            return WinType.uncommon;
        case coef >= 10 && coef < 50:
            return WinType.rare;
        case coef >= 50:
            return WinType.epic;
        case coef < 2:
        default:
            return WinType.common;
    }
}
function getAxeType(coef) {
    switch (true) {
        case coef >= 1.1 && coef < 10:
            return WinType.uncommon;
        case coef >= 10 && coef < 100:
            return WinType.rare;
        case coef >= 100:
            return WinType.epic;
        case coef < 1.09:
        default:
            return WinType.common;
    }
}

// EXTERNAL MODULE: ./src/framework/helpers/randomIntFromInterval.ts
var randomIntFromInterval = __webpack_require__(12032);
;// ./src/framework/components.jewelclicker/JewelclickerGame/JewelclickerGame.tsx








const USER_ONLINE_ROUNDING_DIVISOR = 10;
const MAXIMUM_NUMBER_OF_ICONS = 9;
const TIMEOUT_HIDE_AXE = 150;
const TIMEOUT_DISABLE_CANVAS = 1000;
function getClockNumbers(count, maxLength) {
    const numbers = Array.from({ length: maxLength }, (_, i) => i + 1);
    const result = [];
    if (count >= maxLength) {
        return numbers.map((num) => ({
            index: num,
            isActive: true,
        }));
    }
    const step = Math.floor(12 / count);
    for (let i = 0; i < count; i++) {
        const index = (i * step) % maxLength;
        const value = numbers[index];
        if (!result.includes(value)) {
            result.push(value);
        }
    }
    const finalResult = numbers.map((num) => ({
        index: num,
        isActive: result.includes(num),
    }));
    return finalResult;
}
function _JewelclickerGame({ handleCanvasEvent, children }) {
    const { game: { placeTap, setHowToPlay, isCanvasLoaded, coefficient, isGameCreated, isBetPlaced, gameResult, usersCountOnline, gameStatus, isAutoStart, }, audioCommon: { playAudio }, profileCommon: { profile: { currencySign }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const currentWinType = (0,hooks_module_js_.useRef)(null);
    const resetAxeRef = (0,hooks_module_js_.useRef)(null);
    const disableCanvasRef = (0,hooks_module_js_.useRef)(null);
    const gameStatusRef = (0,hooks_module_js_.useRef)(null);
    const isdisableAnimationRef = (0,hooks_module_js_.useRef)(false);
    const isAutoStartnRef = (0,hooks_module_js_.useRef)(false);
    (0,hooks_module_js_.useEffect)(() => {
        gameStatusRef.current = gameStatus;
        if (gameStatus === 'running') {
            handleCanvasEvent.callInterface('showAxe', 400);
        }
    }, [gameStatus]);
    (0,hooks_module_js_.useEffect)(() => {
        isAutoStartnRef.current = isAutoStart;
        if (!isAutoStart) {
            if (gameStatus === 'running') {
                handleCanvasEvent.callInterface('hideCenterPopup', null);
            }
        }
        else if (isBetPlaced) {
            handleCanvasEvent.callInterface('hideCenterPopup', null);
        }
    }, [isAutoStart, gameStatus, isBetPlaced]);
    (0,hooks_module_js_.useEffect)(() => {
        if (isCanvasLoaded && isGameCreated) {
            const winType = getAxeType(coefficient);
            if (currentWinType.current !== winType) {
                currentWinType.current = winType;
                playAudio(`upgrade_${winType}`);
                handleCanvasEvent?.callInterface('nextAxeState', null);
            }
        }
    }, [isCanvasLoaded, isGameCreated, coefficient]);
    (0,hooks_module_js_.useEffect)(() => {
        if (isCanvasLoaded && gameResult) {
            currentWinType.current = null;
            if (gameResult.gameResult.fail) {
                playAudio(`lose${(0,randomIntFromInterval/* default */.A)(1, 3)}`);
                handleCanvasEvent.callInterface('disableAnimationOn', null);
                isdisableAnimationRef.current = true;
                resetAxeRef.current = setTimeout(() => {
                    handleCanvasEvent.callInterface('resetAxeState', null);
                }, TIMEOUT_HIDE_AXE);
                disableCanvasRef.current = setTimeout(() => {
                    handleCanvasEvent.callInterface('disableAnimationOff', null);
                    isdisableAnimationRef.current = false;
                }, TIMEOUT_DISABLE_CANVAS);
            }
            else {
                const { payout, payoutCoefficient } = gameResult.bet;
                const winType = getWinType(payoutCoefficient);
                const winColorType = WinColorType[winType];
                handleCanvasEvent.callInterface('showCenterPopup', {
                    type: 'win',
                    color: winColorType,
                    mainText: `${currencySign} ${Number(payout).toFixed(2)}`,
                    oddText: t('COMMON.MULTIPLIER'),
                    coefText: `${Number(payoutCoefficient).toFixed(2)}x`,
                });
                setTimeout(() => {
                    handleCanvasEvent.callInterface('hideCenterPopup', null);
                }, 2000);
                handleCanvasEvent.callInterface('hideAxe', 200);
                handleCanvasEvent.callInterface('resetAxeState', null);
            }
        }
        return () => {
        };
    }, [gameResult, isCanvasLoaded, currencySign]);
    (0,hooks_module_js_.useEffect)(() => {
        if (isCanvasLoaded && !!usersCountOnline) {
            const countIcons = usersCountOnline < USER_ONLINE_ROUNDING_DIVISOR ? 1 : usersCountOnline / USER_ONLINE_ROUNDING_DIVISOR;
            const randomNumbers = getClockNumbers(Math.ceil(countIcons), MAXIMUM_NUMBER_OF_ICONS);
            randomNumbers.map((user) => {
                if (user.isActive) {
                    handleCanvasEvent.callInterface('showPlayer', user.index);
                }
                else {
                    handleCanvasEvent.callInterface('hidePlayer', user.index);
                }
            });
        }
    }, [isCanvasLoaded, usersCountOnline]);
    const handlePlaceTap = () => {
        if (gameStatusRef.current === 'waiting' && !isdisableAnimationRef.current && !isAutoStartnRef.current) {
            setHowToPlay({ btn: true });
        }
        placeTap();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            placeTap: handlePlaceTap,
        }) }));
}
const JewelclickerGame = (0,index_js_.observer)(_JewelclickerGame);

;// ./src/framework/components.jewelclicker/JewelclickerGame/index.tsx


;// ./src/framework/components.jewelclicker/JewelclickerRender/JewelclickerRender.tsx



function _JewelclickerRender({ children, betData }) {
    const { payout, payoutCoefficient, game: { coefficient }, } = betData;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            payout,
            coefficient: payout ? payoutCoefficient : coefficient,
            type: getWinType(coefficient),
        }) }));
}
const JewelclickerRender = (0,index_js_.observer)(_JewelclickerRender);

;// ./src/framework/components.jewelclicker/JewelclickerRender/index.tsx


;// ./src/framework/components.jewelclicker/JewelclickerGameHowToPlay/JewelclickerGameHowToPlay.tsx



function _JewelclickerGameHowToPlay({ children }) {
    const { game: { howToPlay, setHowToPlay, }, } = (0,bootstrap.GET_STORE)();
    if (!howToPlay.stone)
        return null;
    (0,hooks_module_js_.useEffect)(() => {
        const timeout = setTimeout(() => {
            setHowToPlay({ stone: false });
        }, 1000);
        return () => {
            clearTimeout(timeout);
        };
    }, [howToPlay]);
    return children;
}
const JewelclickerGameHowToPlay = (0,index_js_.observer)(_JewelclickerGameHowToPlay);

;// ./src/framework/components.jewelclicker/JewelclickerGameHowToPlay/index.tsx


;// ./src/framework/components.jewelclicker/JewelclickerButtonHowToPlay/JewelclickerButtonHowToPlay.tsx



function _JewelclickerButtonHowToPlay({ children }) {
    const { game: { howToPlay, setHowToPlay, }, } = (0,bootstrap.GET_STORE)();
    if (!howToPlay.btn)
        return null;
    (0,hooks_module_js_.useEffect)(() => {
        const timeout = setTimeout(() => {
            setHowToPlay({ btn: false });
        }, 1000);
        return () => {
            clearTimeout(timeout);
        };
    }, [howToPlay]);
    return children;
}
const JewelclickerButtonHowToPlay = (0,index_js_.observer)(_JewelclickerButtonHowToPlay);

;// ./src/framework/components.jewelclicker/JewelclickerButtonHowToPlay/index.tsx


;// ./src/framework/components.jewelclicker/export.ts














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


/***/ })

}]);