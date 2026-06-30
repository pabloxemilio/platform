"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2302,7402,7518,8210],{

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

/***/ 98491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PlinkoButton: () => (/* reexport */ PlinkoButton),
  PlinkoControlAmount: () => (/* reexport */ PlinkoControlAmount),
  PlinkoControlGroup: () => (/* reexport */ PlinkoControlGroup),
  PlinkoControlLevel: () => (/* reexport */ PlinkoControlLevel),
  PlinkoControlModal: () => (/* reexport */ PlinkoControlModal),
  PlinkoControlParticle: () => (/* reexport */ PlinkoControlParticle),
  PlinkoControlRows: () => (/* reexport */ PlinkoControlRows),
  PlinkoGame: () => (/* reexport */ PlinkoGame),
  PlinkoHistory: () => (/* reexport */ PlinkoHistory),
  PlinkoRender: () => (/* reexport */ PlinkoRender),
  PlinkoRenderV2: () => (/* reexport */ PlinkoRenderV2),
  PlinkoWin: () => (/* reexport */ PlinkoWin)
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
;// ./src/framework/components.plinko/PlinkoHistory/PlinkoHistory.tsx





function _PlinkoHistory({ children, count }) {
    const { game: { setHistoryListSize, updateHistoryList, historyList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    (0,hooks_module_js_.useEffect)(() => {
        setHistoryListSize(count);
        updateHistoryList();
    }, [count]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.MULTIPLIER'),
            list: historyList || [],
        }) }));
}
const PlinkoHistory = (0,index_js_.observer)(_PlinkoHistory);

;// ./src/framework/components.plinko/PlinkoHistory/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
;// ./src/framework/components.plinko/PlinkoWinLevel/PlinkoWinLevel.tsx




function _PlinkoWinLevel({ children, level = 0, onLoad = () => { } }) {
    const { game: { winLevel }, } = (0,bootstrap.GET_STORE)();
    if (winLevel === level) {
        (0,hooks_module_js_.useEffect)(() => {
            onLoad();
        }, []);
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    }
    return null;
}
const PlinkoWinLevel = (0,index_js_.observer)(_PlinkoWinLevel);

;// ./src/framework/components.plinko/PlinkoWinLevel/index.tsx


;// ./src/framework/components.plinko/PlinkoWin/PlinkoWin.tsx







function _PlinkoWin({ children, onUpdate = () => { } }) {
    const { game: { winScreenCoefficient, amount, winLevel, winScreen, historyList }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    (0,hooks_module_js_.useEffect)(() => {
        onUpdate();
    }, [JSON.stringify(historyList)]);
    const { t } = (0,es_index_js_.useTranslation)();
    if (winScreen) {
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('MINES.YOU_WIN'),
                profit: (0,shortNumber/* default */.A)(Number(Number(amount) * winScreenCoefficient), rounding),
                prefix: currencySign,
                coefficient: winScreenCoefficient,
                titleCoefficient: t('COMMON.MULTIPLIER'),
                level: winLevel,
            }) }));
    }
    return null;
}
const PlinkoWin = Object.assign((0,index_js_.observer)(_PlinkoWin), {
    Level: PlinkoWinLevel,
});

;// ./src/framework/components.plinko/PlinkoWin/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
;// ./src/framework/components.plinko/PlinkoButtonPlay/PlinkoButtonPlay.tsx






function _PlinkoButtonPlay({ children, onClick = () => { } }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { startGame, gameRequest, particle }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'play')
        return null;
    const handleClick = (e) => {
        if (gameRequest)
            return false;
        startGame(particle);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const PlinkoButtonPlay = (0,index_js_.observer)(_PlinkoButtonPlay);

;// ./src/framework/components.plinko/PlinkoButtonPlay/index.tsx


;// ./src/framework/components.plinko/PlinkoButtonPlayEvent/PlinkoButtonPlayEvent.tsx




function _PlinkoButtonPlayEvent({ children, onClick = () => { } }) {
    const { game: { startGame, gameRequest, particle }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (gameRequest)
            return false;
        startGame(particle);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const PlinkoButtonPlayEvent = (0,index_js_.observer)(_PlinkoButtonPlayEvent);

;// ./src/framework/components.plinko/PlinkoButtonPlayEvent/index.tsx


;// ./src/framework/components.plinko/PlinkoButtonFreebet/PlinkoButtonFreebet.tsx






function _PlinkoButtonFreebet({ children, onClick = () => { } }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { startGame }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'freebet')
        return null;
    const handleClick = (e) => {
        if (button !== 'freebet')
            return false;
        startGame(1, true);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const PlinkoButtonFreebet = (0,index_js_.observer)(_PlinkoButtonFreebet);

;// ./src/framework/components.plinko/PlinkoButtonFreebet/index.tsx


;// ./src/framework/components.plinko/PlinkoButtonRequest/PlinkoButtonRequest.tsx



function _PlinkoButtonRequest({ children }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    if (button !== 'request')
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const PlinkoButtonRequest = _PlinkoButtonRequest;

;// ./src/framework/components.plinko/PlinkoButtonRequest/index.tsx


;// ./src/framework/components.plinko/PlinkoButtonStopAutobet/PlinkoButtonStopAutobet.tsx






function _PlinkoButtonStopAutobet({ children, onClick = () => { } }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { stopAutoBet }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'stop_autobet')
        return null;
    const handleClick = (e) => {
        stopAutoBet();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const PlinkoButtonStopAutobet = (0,index_js_.observer)(_PlinkoButtonStopAutobet);

;// ./src/framework/components.plinko/PlinkoButtonStopAutobet/index.tsx


;// ./src/framework/components.plinko/PlinkoButton/PlinkoButton.tsx











const Context = (0,preact_module_js_.createContext)({});
function _PlinkoButton({ children }) {
    const { game: { amount, gameConfig, gameRequest, particle, lockedUi, historyList, freebetsInProgress }, uiCommon: { amountError }, profileCommon: { profile: { balance, currencySign }, }, autobetCommon: { autoBetEnabled }, freebetsCommon: { freebetEnabled, freebetActive }, } = (0,bootstrap.GET_STORE)();
    const [particlesOnScreen, setParticlesOnScreen] = (0,hooks_module_js_.useState)(0);
    const maxParticles = 40 - particle;
    const disabledByParticles = particlesOnScreen > maxParticles;
    (0,hooks_module_js_.useEffect)(() => {
        if (!historyList.length)
            return;
        if (!lockedUi) {
            setParticlesOnScreen(0);
            return;
        }
        setParticlesOnScreen((prevCount) => Math.max(0, prevCount - 1));
    }, [historyList, lockedUi]);
    (0,hooks_module_js_.useEffect)(() => {
        if (gameRequest) {
            setParticlesOnScreen((prevCount) => prevCount + particle);
        }
    }, [gameRequest]);
    const { t } = (0,es_index_js_.useTranslation)();
    const modeDisabled = () => {
        if (gameConfig.particle.mode === 'default')
            return false;
        if (gameConfig.particle.mode === 'multiple')
            return Number(amount) * particle > balance;
        return false;
    };
    const modeTitle = () => {
        if (autoBetEnabled)
            return t('COMMON.STOP_AUTOBET');
        if (gameConfig.particle.mode === 'default')
            return t('COMMON.START_GAME');
        if (gameConfig.particle.mode === 'multiple')
            return t('PLINKO.DROP_N_DISKS', { amount: particle });
        return t('COMMON.START_GAME');
    };
    const modeTitleWithEnding = () => {
        if (particle === 1)
            return t('WHALE.PLINKO.DROP1', { amount: particle });
        if (particle >= 2 && particle <= 4)
            return t('WHALE.PLINKO.DROP234', { amount: particle });
        if (particle >= 5)
            return t('WHALE.PLINKO.DROP5678910', { amount: particle });
    };
    const props = {
        title: modeTitle(),
        titleWithEnding: modeTitleWithEnding(),
        text: `${t('COMMON.BET_AMOUNT')} ${currencySign}${(Number(amount) * particle).toFixed(2)}`,
        textCoinValue: `${t('COMMON.COIN_VALUE')} ${currencySign}${(Number(amount) * particle).toFixed(2)}`,
        request: gameRequest,
        valueFreebet: freebetEnabled && String(currencySign + freebetActive?.offer?.configuration[0]?.betAmount),
        button: freebetEnabled ? 'freebet' : autoBetEnabled ? 'stop_autobet' : gameRequest ? 'request' : 'play',
        disabled: freebetEnabled
            ? !!freebetActive && !freebetActive?.left && lockedUi && !!freebetsInProgress.length
            : !!amountError || Number(amount) === 0 || modeDisabled(),
        mode: gameConfig.particle.mode,
        disabledByParticles,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const PlinkoButton = Object.assign((0,index_js_.observer)(_PlinkoButton), {
    Play: Object.assign(PlinkoButtonPlay, {
        Event: PlinkoButtonPlayEvent,
    }),
    Freebet: PlinkoButtonFreebet,
    Request: PlinkoButtonRequest,
    StopAutobet: PlinkoButtonStopAutobet,
});

;// ./src/framework/components.plinko/PlinkoButton/index.tsx


;// ./src/framework/components.plinko/PlinkoControlLevelEvent/PlinkoControlLevelEvent.tsx




function _PlinkoControlLevelEvent({ children, index = 0, onClick = () => { } }) {
    const { game: { setLevel, levelList }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        setLevel(levelList[index].key);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const PlinkoControlLevelEvent = (0,index_js_.observer)(_PlinkoControlLevelEvent);

;// ./src/framework/components.plinko/PlinkoControlLevelEvent/index.tsx


;// ./src/framework/components.plinko/PlinkoControlLevelRange/PlinkoControlLevelRange.tsx




function _PlinkoControlLevelRange({ children }) {
    const { game: { levelList, lockedUi, gameUi, gameRequest, setLevel }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.RISK'),
            list: levelList,
            disabled: lockedUi || gameUi || gameRequest,
            defaultValue: levelList.findIndex((item) => item.active),
            min: 0,
            max: levelList.length - 1,
            onChange: (value) => setLevel(levelList[value].key),
            step: 1,
            stepButton: 1,
        }) }));
}
const PlinkoControlLevelRange = (0,index_js_.observer)(_PlinkoControlLevelRange);

;// ./src/framework/components.plinko/PlinkoControlLevelRange/index.tsx


;// ./src/framework/components.plinko/PlinkoControlLevel/PlinkoControlLevel.tsx






function _PlinkoControlLevel({ children }) {
    const { game: { level, lockedUi, gameUi, gameRequest, gameConfig }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const levelList = (() => {
        const list = Object.keys(gameConfig.levels);
        return list.map((item) => {
            return {
                name: t(gameConfig.levelTranslate[item]),
                key: item,
                active: item === level,
            };
        });
    })();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            list: levelList,
            title: t('COMMON.RISK'),
            disabled: lockedUi || gameUi || gameRequest,
        }) }));
}
const PlinkoControlLevel = Object.assign((0,index_js_.observer)(_PlinkoControlLevel), {
    Event: PlinkoControlLevelEvent,
    Range: PlinkoControlLevelRange,
});

;// ./src/framework/components.plinko/PlinkoControlLevel/index.tsx


;// ./src/framework/components.plinko/PlinkoControlAmount/PlinkoControlAmount.tsx





function _PlinkoControlAmount({ children }) {
    const [showTooltip, setShowTooltip] = (0,hooks_module_js_.useState)(false);
    const tooltipTimeout = (0,hooks_module_js_.useRef)(null);
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { amount, setAmount, lockedUi, gameUi, gameRequest, gameConfig, particle }, uiCommon: { amountError }, freebetsCommon: { freebetEnabled, freebetsSuccessIndexList }, } = (0,bootstrap.GET_STORE)();
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
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            titleError: amountError,
            titleMaxWin: `${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`,
            textCoinValue: t('COMMON.COIN_VALUE'),
            disabled: freebetEnabled || lockedUi || gameUi || gameRequest,
            defaultValue: Number(amount),
            min: minBet,
            max: maxBet / gameConfig.particle.max,
            onChange: setAmount,
            prefix: currencySign || '',
            ...(!(freebetEnabled || freebetsSuccessIndexList.includes(0)) && { connectBalance: balance }),
            showTooltip,
            rounding: rounding > 0 ? rounding - 1 : rounding,
        }) }));
}
const PlinkoControlAmount = (0,index_js_.observer)(_PlinkoControlAmount);

;// ./src/framework/components.plinko/PlinkoControlAmount/index.tsx


;// ./src/framework/components.plinko/PlinkoControlParticleRange/PlinkoControlParticleRange.tsx




function _PlinkoControlParticleRange({ children }) {
    const { game: { particle, setParticle, lockedUi, gameUi, gameConfig, gameRequest }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: '',
            disabled: lockedUi || gameUi || gameRequest,
            defaultValue: Number(particle),
            min: gameConfig.particle.min,
            max: gameConfig.particle.max,
            onChange: setParticle,
            step: 1,
            stepButton: 1,
        }) }));
}
const PlinkoControlParticleRange = (0,index_js_.observer)(_PlinkoControlParticleRange);

;// ./src/framework/components.plinko/PlinkoControlParticleRange/index.tsx


;// ./src/framework/components.plinko/PlinkoControlParticleButtonPlus/PlinkoControlParticleButtonPlus.tsx





function _PlinkoControlParticleButtonPlus({ children, onClick = () => { } }) {
    const { game: { particle, setParticle, lockedUi, gameUi, gameConfig, gameRequest }, } = (0,bootstrap.GET_STORE)();
    const { min, max, step } = gameConfig.particle;
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = () => {
        if (lockedUi || gameUi || gameRequest)
            return;
        setParticle(Math.min(particle + step, max));
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const PlinkoControlParticleButtonPlus = (0,index_js_.observer)(_PlinkoControlParticleButtonPlus);

;// ./src/framework/components.plinko/PlinkoControlParticleButtonPlus/index.tsx


;// ./src/framework/components.plinko/PlinkoControlParticleButtonMinus/PlinkoControlParticleButtonMinus.tsx





function _PlinkoControlParticleButtonMinus({ children, onClick = () => { } }) {
    const { game: { particle, setParticle, lockedUi, gameUi, gameConfig, gameRequest }, } = (0,bootstrap.GET_STORE)();
    const { min, max, step } = gameConfig.particle;
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = () => {
        if (lockedUi || gameUi || gameRequest)
            return;
        setParticle(Math.max(particle - step, min));
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const PlinkoControlParticleButtonMinus = (0,index_js_.observer)(_PlinkoControlParticleButtonMinus);

;// ./src/framework/components.plinko/PlinkoControlParticleButtonMinus/index.tsx


;// ./src/framework/components.plinko/PlinkoControlParticle/PlinkoControlParticle.tsx







function _PlinkoControlParticle({ children }) {
    const { game: { particle, setParticle, lockedUi, gameUi, gameConfig, gameRequest }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('PLINKO.DROP_N_DISKS', {
                amount: particle,
            }),
            disabled: lockedUi || gameUi || gameRequest,
            step: () => {
                return gameConfig.particle.step;
            },
            defaultValue: Number(particle),
            min: gameConfig.particle.min,
            max: gameConfig.particle.max,
            onChange: setParticle,
        }) }));
}
const PlinkoControlParticle = Object.assign((0,index_js_.observer)(_PlinkoControlParticle), {
    Range: PlinkoControlParticleRange,
    Button: {
        Plus: PlinkoControlParticleButtonPlus,
        Minus: PlinkoControlParticleButtonMinus,
    },
});

;// ./src/framework/components.plinko/PlinkoControlParticle/index.tsx


;// ./src/framework/components.plinko/PlinkoControlRowsRange/PlinkoControlRowsRange.tsx




function _PlinkoControlRowsRange({ children }) {
    const { game: { rows, setRows, lockedUi, gameUi, level, gameConfig, gameRequest }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const levelsKey = Object.keys(gameConfig.levels[level]).map((item) => Number(item));
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('PLINKO.ROWS'),
            disabled: lockedUi || gameUi || gameRequest,
            defaultValue: Number(rows),
            min: Math.min(...levelsKey),
            max: Math.max(...levelsKey),
            onChange: setRows,
            step: 1,
            stepButton: 1,
        }) }));
}
const PlinkoControlRowsRange = (0,index_js_.observer)(_PlinkoControlRowsRange);

;// ./src/framework/components.plinko/PlinkoControlRowsRange/index.tsx


;// ./src/framework/components.plinko/PlinkoControlRows/PlinkoControlRows.tsx





function _PlinkoControlRows({ children }) {
    const { game: { rows, setRows, lockedUi, gameUi, level, gameConfig, gameRequest }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const levelsKey = Object.keys(gameConfig.levels[level]).map((item) => Number(item));
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('PLINKO.ROWS'),
            disabled: lockedUi || gameUi || gameRequest,
            step: () => {
                return gameConfig.particle.step;
            },
            defaultValue: Number(rows),
            min: Math.min(...levelsKey),
            max: Math.max(...levelsKey),
            onChange: setRows,
        }) }));
}
const PlinkoControlRows = Object.assign((0,index_js_.observer)(_PlinkoControlRows), {
    Range: PlinkoControlRowsRange,
});

;// ./src/framework/components.plinko/PlinkoControlRows/index.tsx


;// ./src/framework/components.plinko/PlinkoControlModalButton/PlinkoControlModalButton.tsx




function _PlinkoControlModalButton({ children, onClick = () => { } }) {
    const { game: { gameUi, mobileBetslipOpen, setMobileBetslipOpen }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (!gameUi)
            setMobileBetslipOpen(!mobileBetslipOpen);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ disabled: gameUi })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const PlinkoControlModalButton = (0,index_js_.observer)(_PlinkoControlModalButton);

;// ./src/framework/components.plinko/PlinkoControlModalButton/index.tsx


;// ./src/framework/components.plinko/PlinkoControlModal/PlinkoControlModal.tsx




function _PlinkoControlModal({ children }) {
    const { game: { mobileBetslipOpen, setMobileBetslipOpen }, } = (0,bootstrap.GET_STORE)();
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ show: mobileBetslipOpen, onClose: setMobileBetslipOpen }) });
}
const PlinkoControlModal = Object.assign((0,index_js_.observer)(_PlinkoControlModal), {
    Button: PlinkoControlModalButton,
});

;// ./src/framework/components.plinko/PlinkoControlModal/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/plinko/plinkoResultToPath.ts
var plinkoResultToPath = __webpack_require__(8309);
// EXTERNAL MODULE: ./src/framework/helpers/plinko/plinkoPathToIndex.ts
var plinkoPathToIndex = __webpack_require__(29510);
// EXTERNAL MODULE: ./src/framework/helpers/getMonitorRefreshRate.ts
var getMonitorRefreshRate = __webpack_require__(554);
;// ./src/framework/components.plinko/PlinkoGame/PlinkoGame.tsx








function _PlinkoGame({ children, Plinko, callback }) {
    const { game: { level, rows, gameResultResults, setGameUi, gameConfig, multipliers, roundId, gamePaused }, uiCommon: { screenWidth, screenHeight, isScreenMobile }, audioCommon: { playAudio }, balanceCommon: { updateBalanceFromTicketId }, } = (0,bootstrap.GET_STORE)();
    const ticketsRef = (0,hooks_module_js_.useRef)({});
    const game = (0,hooks_module_js_.useRef)();
    const [monitorHz, setMonitorHz] = (0,hooks_module_js_.useState)(0);
    const coefficients = gameConfig.levels[level][rows];
    (0,hooks_module_js_.useEffect)(() => {
        (0,getMonitorRefreshRate/* default */.A)((rate) => {
            setMonitorHz(rate);
        });
    }, []);
    const handleCallback = (props) => {
        setGameUi(props.status);
        if (props.particle.ticketId && ticketsRef.current[props.particle.ticketId]) {
            if (ticketsRef.current[props.particle.ticketId] === 1) {
                updateBalanceFromTicketId(props.particle.ticketId);
                const newTickets = { ...ticketsRef.current };
                delete newTickets[props.particle.ticketId];
                ticketsRef.current = newTickets;
            }
            else {
                ticketsRef.current[props.particle.ticketId] = ticketsRef.current[props.particle.ticketId] - 1;
            }
        }
        callback(props);
    };
    if (monitorHz > 0) {
        (0,hooks_module_js_.useEffect)(() => {
            const loading = async () => {
                const el = document.querySelector('#plinko');
                if (el) {
                    game.current = await Plinko(el, monitorHz);
                    game.current.setPlayAudio(playAudio);
                    game.current.map(coefficients, level, rows);
                    game.current.setCallback(handleCallback);
                }
            };
            loading();
            return () => {
                const el = document.querySelector('#plinko');
                if (el)
                    el.innerHTML = '';
                game.current?.clear();
                game.current?.destroy();
                setGameUi(false);
            };
        }, [screenWidth, screenHeight, isScreenMobile, monitorHz]);
        (0,hooks_module_js_.useEffect)(() => {
            if (game.current) {
                let i = 0;
                for (let result of gameResultResults) {
                    const path = (0,plinkoResultToPath/* default */.A)(result);
                    const index = (0,plinkoPathToIndex/* default */.A)(path);
                    if (multipliers.roundId === roundId && multipliers[i]) {
                        game.current.add(index, result, gameConfig.levels[level][rows][index], multipliers[i], roundId);
                    }
                    else {
                        game.current.add(index, result, gameConfig.levels[level][rows][index], undefined, roundId);
                    }
                    ticketsRef.current[roundId] = (ticketsRef.current[roundId] || 0) + 1;
                    i++;
                }
            }
        }, [gameResultResults]);
        (0,hooks_module_js_.useEffect)(() => {
            if (game.current) {
                game.current.clear();
                game.current.map(coefficients, level, rows);
            }
        }, [level, rows]);
        (0,hooks_module_js_.useEffect)(() => {
            if (game.current) {
                if (gamePaused && game.current.pauseGame) {
                    game.current.pauseGame();
                }
                if (!gamePaused && game.current.playGame) {
                    game.current.playGame();
                }
            }
        }, [gamePaused]);
    }
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            id: 'plinko',
        })) }));
}
const PlinkoGame = (0,index_js_.observer)(_PlinkoGame);

;// ./src/framework/components.plinko/PlinkoGame/index.tsx


;// ./src/framework/components.plinko/PlinkoRender/PlinkoRender.tsx





function _PlinkoRender({ children, betData }) {
    const { game: { level, rows, results, multipliers }, } = betData;
    const resultsArr = results?.map((item) => {
        const path = (0,plinkoResultToPath/* default */.A)(item.result);
        const index = (0,plinkoPathToIndex/* default */.A)(path);
        return { ...item, index };
    });
    const computedCount = (index) => {
        let count = 0;
        if (resultsArr) {
            for (let result of resultsArr) {
                if (Number(result.index) === Number(index)) {
                    count += 1;
                }
            }
        }
        return count;
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            multipliers,
            level: level,
            rows: rows,
            list: (0,bootstrap.GET_GAME_CONFIG)().levels[level][rows].map((item, index) => {
                const count = computedCount(index);
                return {
                    win: count > 0,
                    coefficient: item,
                    count: count,
                };
            }),
        }) }));
}
const PlinkoRender = (0,index_js_.observer)(_PlinkoRender);

;// ./src/framework/components.plinko/PlinkoRender/index.tsx


;// ./src/framework/components.plinko/PlinkoRenderV2Canvas/PlinkoRenderV2Canvas.tsx


function _PlinkoRenderV2Canvas({ children }) {
    return ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [(0,jsxRuntime_module/* jsx */.Y)("style", { children: `
        #plinko > canvas {
          position: absolute;
        }` }), (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
                id: 'plinko',
                style: {
                    width: '100%',
                    paddingBottom: '82%',
                },
            }))] }));
}
const PlinkoRenderV2Canvas = _PlinkoRenderV2Canvas;

;// ./src/framework/components.plinko/PlinkoRenderV2Canvas/index.tsx


;// ./src/framework/components.plinko/PlinkoRenderV2Reload/PlinkoRenderV2Reload.tsx




function _PlinkoRenderV2Reload({ children, onCLick = () => { } }) {
    const { setReload } = (0,hooks_module_js_.useContext)(PlinkoRenderV2_Context);
    const handleClick = () => {
        setReload(Date.now());
        onCLick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onCLick: handleClick,
        })) }));
}
const PlinkoRenderV2Reload = _PlinkoRenderV2Reload;

;// ./src/framework/components.plinko/PlinkoRenderV2Reload/index.tsx


;// ./src/framework/components.plinko/PlinkoRenderV2/PlinkoRenderV2.tsx







const PlinkoRenderV2_Context = (0,preact_module_js_.createContext)({});
function _PlinkoRenderV2({ children, betData, Plinko }) {
    const { game: { level, rows, results, multipliers }, } = betData;
    const game = (0,hooks_module_js_.useRef)();
    const [monitorHz, setMonitorHz] = (0,hooks_module_js_.useState)(0);
    const coefficients = (0,bootstrap.GET_GAME_CONFIG)().levels[level][rows];
    const [reload, setReload] = (0,hooks_module_js_.useState)(0);
    const [isRun, setIsRun] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useEffect)(() => {
        (0,getMonitorRefreshRate/* default */.A)((rate) => {
            setMonitorHz(rate);
        });
    }, []);
    if (monitorHz > 0) {
        (0,hooks_module_js_.useEffect)(() => {
            const loading = async () => {
                const el = document.querySelector('#plinko');
                if (el) {
                    game.current = await Plinko(el, monitorHz);
                    game.current.setPlayAudio(() => { });
                    game.current.map(coefficients, level, rows);
                    game.current.setCallback(() => { });
                }
            };
            loading();
            if (!isRun) {
                setTimeout(() => {
                    setIsRun(true);
                    run();
                }, (0,bootstrap.GET_GAME_CONFIG)().pageRender.animationDelay || 0);
            }
            return () => {
                const el = document.querySelector('#plinko');
                if (el)
                    el.innerHTML = '';
                game.current?.clear();
                game.current?.destroy();
            };
        }, [window.innerWidth, window.innerHeight]);
    }
    (0,hooks_module_js_.useEffect)(() => {
        if (!isRun)
            return;
        game.current?.clearParticle();
        run();
    }, [reload]);
    const run = () => {
        for (let i = 0; i < results.length; i++) {
            const result = results[i];
            if (multipliers && multipliers[i] && game.current) {
                game.current?.add(result.index, result, result.coefficient, multipliers[i]);
                continue;
            }
            game.current && game.current?.add(result.index, result, result.coefficient);
        }
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(PlinkoRenderV2_Context.Provider, { value: { setReload }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                multipliers,
                level: level,
                rows: rows,
            }) }) }));
}
const PlinkoRenderV2 = Object.assign(_PlinkoRenderV2, {
    Canvas: PlinkoRenderV2Canvas,
    Reload: PlinkoRenderV2Reload,
});

;// ./src/framework/components.plinko/PlinkoRenderV2/index.tsx


;// ./src/framework/components.plinko/PlinkoControlGroupButton/PlinkoControlGroupButton.tsx







function _PlinkoControlGroupButton({ children, onClick = () => { } }) {
    const { game: { setRows, setParticle, setLevel, setMobileBetslipOpen, levelList }, uiCommon: { setAlertList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const { localRows, localParticle, localLevelIndex } = (0,hooks_module_js_.useContext)(PlinkoControlGroup_Context);
    const handleClick = (e) => {
        setRows(localRows);
        setParticle(localParticle);
        setLevel(levelList[localLevelIndex].key);
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
const PlinkoControlGroupButton = (0,index_js_.observer)(_PlinkoControlGroupButton);

;// ./src/framework/components.plinko/PlinkoControlGroupButton/index.tsx


;// ./src/framework/components.plinko/PlinkoControlGroup/PlinkoControlGroup.tsx







const PlinkoControlGroup_Context = (0,preact_module_js_.createContext)({});
function _PlinkoControlGroup({ children }) {
    const { game: { rows, particle, lockedUi, gameUi, level, gameConfig, gameRequest, levelList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [localRows, setLocalRows] = (0,hooks_module_js_.useState)(Number(rows));
    const [localParticle, setLocalParticle] = (0,hooks_module_js_.useState)(particle);
    const [localLevelIndex, setLocalLevelIndex] = (0,hooks_module_js_.useState)(levelList.findIndex((item) => item.active));
    const [localLevelList, setLocalLevelList] = (0,hooks_module_js_.useState)((() => {
        const list = Object.keys(gameConfig.levels);
        return list.map((item) => {
            return {
                name: t(gameConfig.levelTranslate[item]),
                key: item,
                active: item === level,
            };
        });
    })());
    (0,hooks_module_js_.useEffect)(() => {
        setLocalLevelList(localLevelList.map((item, index) => ({ ...item, active: index === localLevelIndex })));
    }, [localLevelIndex]);
    const levelsKey = (0,hooks_module_js_.useMemo)(() => {
        return Object.keys(gameConfig.levels[level]).map((item) => Number(item));
    }, [level]);
    return ((0,jsxRuntime_module/* jsx */.Y)(PlinkoControlGroup_Context.Provider, { value: { localRows, localParticle, localLevelIndex, setLocalLevelIndex }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('COMMON.OTHER_SETTINGS'),
                titleOk: t('COMMON.OK'),
                titleCancel: t('COMMON.CANCEL'),
                rows: {
                    title: t('PLINKO.ROWS'),
                    disabled: lockedUi || gameUi || gameRequest,
                    step: () => {
                        return gameConfig.particle.step;
                    },
                    defaultValue: Number(localRows),
                    min: Math.min(...levelsKey),
                    max: Math.max(...levelsKey),
                    onChange: setLocalRows,
                },
                rowsRange: {
                    title: t('PLINKO.ROWS'),
                    list: levelsKey,
                    disabled: lockedUi || gameUi || gameRequest,
                    defaultValue: levelsKey.indexOf(localRows),
                    min: 0,
                    max: levelsKey.length - 1,
                    onChange: (value) => {
                        setLocalRows(levelsKey[value]);
                    },
                    step: 1,
                    stepButton: 1,
                },
                particle: {
                    title: '',
                    disabled: lockedUi || gameUi || gameRequest,
                    step: () => {
                        return gameConfig.particle.step;
                    },
                    defaultValue: Number(localParticle),
                    min: gameConfig.particle.min,
                    max: gameConfig.particle.max,
                    onChange: setLocalParticle,
                },
                particleRange: {
                    title: '',
                    disabled: lockedUi || gameUi || gameRequest,
                    defaultValue: Number(localParticle),
                    min: gameConfig.particle.min,
                    max: gameConfig.particle.max,
                    onChange: setLocalParticle,
                    step: 1,
                    stepButton: 1,
                },
                level: {
                    list: localLevelList,
                    title: t('COMMON.RISK'),
                    disabled: lockedUi || gameUi || gameRequest,
                },
                levelRange: {
                    title: t('COMMON.RISK'),
                    list: localLevelList,
                    disabled: lockedUi || gameUi || gameRequest,
                    defaultValue: localLevelIndex,
                    min: 0,
                    max: localLevelList.length - 1,
                    onChange: setLocalLevelIndex,
                    step: 1,
                    stepButton: 1,
                },
            }) }) }));
}
const PlinkoControlGroup = Object.assign((0,index_js_.observer)(_PlinkoControlGroup), {
    Button: PlinkoControlGroupButton,
    Level: {
        Event: PlinkoControlGroupButton,
    },
});

;// ./src/framework/components.plinko/PlinkoControlGroup/index.tsx


;// ./src/framework/components.plinko/export.ts














/***/ }),

/***/ 554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getMonitorRefreshRate)
/* harmony export */ });
function getMonitorRefreshRate(callback) {
    const monitorTimeMs = 1000;
    const monitorTimeMsParticle = monitorTimeMs / 60;
    const frameCountArray = [];
    let frameCount = 0;
    let lastTime = 0;
    function calculateRate() {
        const currentTime = performance.now();
        const timeDiff = currentTime - lastTime;
        if (timeDiff >= monitorTimeMsParticle) {
            const rate = frameCount / (timeDiff / monitorTimeMsParticle);
            frameCount = 0;
            lastTime = currentTime;
            frameCountArray.push(Math.round(rate));
            if (frameCountArray.length > 60) {
                const rateSum = frameCountArray.reduce((a, b) => a + b, 0);
                callback(rateSum);
                return;
            }
        }
        frameCount++;
        requestAnimationFrame(calculateRate);
    }
    calculateRate();
}


/***/ }),

/***/ 29510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ pathToIndex)
/* harmony export */ });
function pathToIndex(path) {
    const index = Math.floor((path.reduce((acc, v) => acc + (v ? 1 : -1), 0) + path.length) / 2);
    return index;
}


/***/ }),

/***/ 8309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ resultToPath)
/* harmony export */ });
function resultToPath(result) {
    const path = (result >>> 0)
        .toString(2)
        .split('')
        .map((s) => Number(s));
    return path;
}


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