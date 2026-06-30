"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2302,5184,7402,7518],{

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

/***/ 55251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CrashAutoControl: () => (/* reexport */ CrashAutoControl),
  CrashBets: () => (/* reexport */ CrashBets),
  CrashCatchCoefficient: () => (/* reexport */ CrashCatchCoefficient),
  CrashControl: () => (/* reexport */ CrashControl),
  CrashFps: () => (/* reexport */ CrashFps),
  CrashGame: () => (/* reexport */ CrashGame),
  CrashHistory: () => (/* reexport */ CrashHistory),
  CrashLeaderboardPlayer: () => (/* reexport */ CrashLeaderboardPlayer),
  CrashPlayer: () => (/* reexport */ CrashPlayer),
  CrashRender: () => (/* reexport */ CrashRender),
  CrashSlider: () => (/* reexport */ CrashSlider),
  CrashUser: () => (/* reexport */ CrashUser),
  CrashWin: () => (/* reexport */ CrashWin)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
;// ./src/framework/components.crash/CrashUserName/CrashUserName.tsx




function _CrashUserName({ children }) {
    const { profileCommon: { profile: { name }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.NICKNAME'),
            name,
        }) }));
}
const CrashUserName = (0,index_js_.observer)(_CrashUserName);

;// ./src/framework/components.crash/CrashUserName/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
;// ./src/framework/components.crash/CrashUserNameEvent/CrashUserNameEvent.tsx





function _CrashUserNameEvent({ children }) {
    const { game: { setNameInputFocus, nameInputFocus }, uiCommon: { settingsOpen, setSettingsOpen }, } = (0,bootstrap.GET_STORE)();
    const handleClick = () => {
        setSettingsOpen(true);
        setTimeout(() => {
            setNameInputFocus(true);
        }, 0);
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (!settingsOpen)
            setNameInputFocus(false);
    }, [settingsOpen]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrashUserNameEvent = (0,index_js_.observer)(_CrashUserNameEvent);

;// ./src/framework/components.crash/CrashUserNameEvent/index.tsx


;// ./src/framework/components.crash/CrashUserNameFocus/CrashUserNameFocus.tsx



function _CrashUserNameFocus({ children }) {
    const { game: { nameInputFocus }, } = (0,bootstrap.GET_STORE)();
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ isFocus: nameInputFocus }) });
}
const CrashUserNameFocus = (0,index_js_.observer)(_CrashUserNameFocus);

;// ./src/framework/components.crash/CrashUserNameFocus/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/crash/crashCheckRank.ts
var crashCheckRank = __webpack_require__(83226);
;// ./src/framework/components.crash/CrashUserStat/CrashUserStat.tsx





function _CrashUserStat({ children }) {
    const { game: { statistics, gameConfig }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const { avgCoefficient, maxCoefficient, total_count } = statistics;
    const avgCoefficientValue = !avgCoefficient || avgCoefficient === null ? 0 : avgCoefficient;
    const maxCoefficientValue = !maxCoefficient || maxCoefficient === null ? 0 : maxCoefficient;
    const totalCountValue = !total_count || total_count === null ? 0 : total_count;
    function millisecondsToTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const seconds = totalSeconds % 60;
        const totalMinutes = Math.floor(totalSeconds / 60);
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);
        return {
            hours,
            minutes,
            seconds,
        };
    }
    const fligthHours = (() => {
        const estimated_rounds = totalCountValue / 1.5;
        const flight_ms = estimated_rounds * 20 * 1000;
        const { hours, minutes, seconds } = millisecondsToTime(flight_ms);
        return `${hours ? `${hours}h ` : ''}${minutes ? `${minutes}m ` : ''}${seconds ? `${seconds}s` : '0s'}`;
    })();
    const fligthsUntilRank = (() => {
        const { exp, toExp } = (0,crashCheckRank/* default */.A)(totalCountValue, gameConfig.ranks);
        return String(toExp + 1 - exp);
    })();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            fligths: String(totalCountValue),
            fligthsTitle: t('CRASH.COMPLETED_FLIGHTS'),
            fligthHours: fligthHours,
            fligthHoursTitle: t('CRASH.TIME_IN_FLIGHT'),
            maxMultiplier: `x${maxCoefficientValue.toFixed(2)}`,
            maxMultiplierTitle: t('CRASH.MAX_X'),
            averageMultiplier: `x${avgCoefficientValue.toFixed(2)}`,
            averageMultiplierTitle: t('CRASH.AVERAGE_X'),
            fligthsUntilRank: fligthsUntilRank,
            fligthsUntilRankTitle: t('FLIGHTS_UNTIL_RANK'),
        }) }));
}
const CrashUserStat = (0,index_js_.observer)(_CrashUserStat);

;// ./src/framework/components.crash/CrashUserStat/index.tsx


;// ./src/framework/components.crash/CrashUserRank/CrashUserRank.tsx






function _CrashUserRank({ children }) {
    const { game: { statistics, gameConfig }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [list, setList] = (0,hooks_module_js_.useState)([]);
    (0,hooks_module_js_.useEffect)(() => {
        const { exp, toExp, index } = (0,crashCheckRank/* default */.A)(statistics.total_count, gameConfig.ranks);
        setList(gameConfig.ranks.map((item, i) => ({
            ...item,
            active: i + 1 === index,
            activeIndex: index,
            title: t('CRASH.COMPLETED_FLIGHTS'),
            index: i + 1,
            fligthsToRank: toExp + 1 - exp,
        })));
    }, [statistics.total_count]);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ list }) });
}
const CrashUserRank = (0,index_js_.observer)(_CrashUserRank);

;// ./src/framework/components.crash/CrashUserRank/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/animate.ts
var animate = __webpack_require__(93974);
;// ./src/framework/components.crash/CrashUserRankInfo/CrashUserRankInfo.tsx






const timingFunction = {
    linear: animate/* linear */.sn,
    makeEaseOut: (0,animate/* makeEaseOut */.L4)(animate/* easeOutCubic */.p_),
    easeOutCubic: animate/* easeOutCubic */.p_,
};
function _CrashUserRankInfo({ children }) {
    const { game: { statistics, gameConfig }, } = (0,bootstrap.GET_STORE)();
    const rank = (0,hooks_module_js_.useRef)({
        rank: '',
        rankIndex: 1,
        rankNext: '',
        rankIndexNext: 2,
        exp: 0,
        toExp: 0,
        fligthsToRank: 0,
    });
    const [percent, setPercent] = (0,hooks_module_js_.useState)(-1);
    const [rankIndex, setRankIndex] = (0,hooks_module_js_.useState)(1);
    const [up, setUp] = (0,hooks_module_js_.useState)(false);
    const [animationIsRun, setAnimationIsRun] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useEffect)(() => {
        const { index, name, exp, toExp } = (0,crashCheckRank/* default */.A)(statistics.total_count, gameConfig.ranks);
        const rankNext = gameConfig.ranks[index] ? gameConfig.ranks[index].name : '';
        rank.current = {
            rank: name,
            rankIndex: index,
            rankNext,
            rankIndexNext: index + 1,
            exp,
            toExp,
            fligthsToRank: toExp + 1 - exp,
        };
        const to = (exp / toExp) * 100;
        if (!statistics.total_count) {
            setPercent(0);
        }
        const ani = (0,animate/* animate */.i0)({
            duration: gameConfig.rank.duration,
            timing: timingFunction[gameConfig.rank.timingFunction],
            draw: function (progress) {
                const p = percent + (to - percent) * progress;
                setPercent(p);
                setAnimationIsRun(true);
                setUp(index > rankIndex);
                if (progress === 1) {
                    setAnimationIsRun(false);
                    setUp(false);
                    setRankIndex(index);
                }
            },
        });
        return () => {
            ani?.stop();
        };
    }, [statistics.total_count]);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ ...rank.current, percent, up, animationIsRun }) });
}
const CrashUserRankInfo = (0,index_js_.observer)(_CrashUserRankInfo);

;// ./src/framework/components.crash/CrashUserRankInfo/index.tsx


;// ./src/framework/components.crash/CrashUserRankModal/CrashUserRankModal.tsx



function _CrashUserRankModal({ children, onClose = () => { } }) {
    const { uiCommon: { modal, setModal }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            show: modal['crashUserRank']?.render,
            open: modal['crashUserRank']?.open,
            close: modal['crashUserRank']?.close,
            onClose: (value) => {
                onClose();
                setModal({
                    modalName: 'crashUserRank',
                    render: value,
                });
            },
        }) }));
}
const CrashUserRankModal = (0,index_js_.observer)(_CrashUserRankModal);

;// ./src/framework/components.crash/CrashUserRankModal/index.tsx


;// ./src/framework/components.crash/CrashUserRankModalButton/CrashUserRankModalButton.tsx




function _CrashUserRankModalButton({ children, onClick = () => { }, delayOpen, delayClose }) {
    const { uiCommon: { setModal }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        e.preventDefault();
        setModal({
            modalName: 'crashUserRank',
            render: true,
            delayOpen,
            delayClose,
        });
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrashUserRankModalButton = (0,index_js_.observer)(_CrashUserRankModalButton);

;// ./src/framework/components.crash/CrashUserRankModalButton/index.tsx


;// ./src/framework/components.crash/CrashUser/CrashUser.tsx









function _CrashUser({ children }) {
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const CrashUser = Object.assign(_CrashUser, {
    Stat: CrashUserStat,
    Name: Object.assign(CrashUserName, {
        Event: CrashUserNameEvent,
        Focus: CrashUserNameFocus,
    }),
    Rank: Object.assign(CrashUserRank, {
        Info: CrashUserRankInfo,
        Modal: Object.assign(CrashUserRankModal, {
            Button: CrashUserRankModalButton,
        }),
    }),
});

;// ./src/framework/components.crash/CrashUser/index.tsx


;// ./src/framework/components.crash/CrashHistory/CrashHistory.tsx





function _CrashHistory({ children, count, currentRound = false }) {
    const { game: { setHistoryListSize, setHistoryCurrentRound, historyList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    (0,hooks_module_js_.useEffect)(() => {
        setHistoryListSize(count);
        setHistoryCurrentRound(currentRound);
    }, [count, currentRound]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.MULTIPLIER'),
            list: historyList,
        }) }));
}
const CrashHistory = (0,index_js_.observer)(_CrashHistory);

;// ./src/framework/components.crash/CrashHistory/index.tsx


;// ./src/framework/components.crash/CrashControlAmount/CrashControlAmount.tsx





function _CrashControlAmount({ children, index }) {
    const [showTooltip, setShowTooltip] = (0,hooks_module_js_.useState)(false);
    const tooltipTimeout = (0,hooks_module_js_.useRef)(null);
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { bets, setBetslipAmount, uiLockedStatuses, amountErrors, autoBetAmountError, disabledV1 }, freebetsCommon: { freebetEnabled, freebetsSuccessIndexList }, } = (0,bootstrap.GET_STORE)();
    const [isFocus, setIsFocus] = (0,hooks_module_js_.useState)(false);
    const amount = bets[index]?.amount;
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
    const computedTitleError = () => {
        if (amountErrors[index])
            return amountErrors[index];
        if (autoBetAmountError[index])
            return autoBetAmountError[index];
        return null;
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            titleError: computedTitleError(),
            titleMaxWin: `${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`,
            disabled: uiLockedStatuses[index],
            disabledV1: disabledV1[index],
            defaultValue: Number(amount),
            min: minBet,
            max: maxBet,
            onChange: (value) => setBetslipAmount(String(value), index),
            onFocus: () => {
                setIsFocus(true);
            },
            onBlur: () => {
                setIsFocus(false);
            },
            prefix: currencySign,
            connectBalance: freebetEnabled || freebetsSuccessIndexList.includes(index) ? undefined : balance,
            showTooltip,
            rounding: rounding > 0 ? rounding - 1 : rounding,
            gtmAction: 'input_value_changed',
            pushGtmDataOnValueChange: true,
        }) }));
}
const CrashControlAmount = (0,index_js_.observer)(_CrashControlAmount);

;// ./src/framework/components.crash/CrashControlAmount/index.tsx


;// ./src/framework/components.crash/CrashControlCashout/CrashControlCashout.tsx




function _CrashControlCashout({ children, index }) {
    const { game: { setBetslipCoefficient, bets, uiLockedStatuses, cashoutErrors }, autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const step = ({ value, min, max, inc }) => {
        let s = min;
        if (inc ? value >= 0.01 && value < 0.1 : value > 0.01 && value <= 0.1) {
            s = 0.01;
        }
        else if (inc ? value >= 0.1 && value < 2 : value > 0.1 && value <= 2) {
            s = 0.1;
        }
        else if (inc ? value >= 2 && value < 10 : value > 2 && value <= 10) {
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
        return s;
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('CRASH.AUTO_CASHOUT'),
            titleError: t(cashoutErrors[index] || ''),
            disabled: uiLockedStatuses[index],
            defaultValue: autoBetEnabled[index] && !bets[index].cashout.connectToAutobet
                ? Number(bets[index].autobet.cashout.coefficient)
                : Number(bets[index].coefficient),
            min: autoBetEnabled[index] && !bets[index].cashout.connectToAutobet
                ? bets[index].autobet.cashout.min
                : bets[index].cashout.min,
            max: autoBetEnabled[index] && !bets[index].cashout.connectToAutobet
                ? bets[index].autobet.cashout.max
                : bets[index].cashout.max,
            onChange: (value) => {
                if (autoBetEnabled[index])
                    return;
                setBetslipCoefficient(String(value), index);
            },
            prefix: 'x',
            step: step,
        }) }));
}
const CrashControlCashout = (0,index_js_.observer)(_CrashControlCashout);

;// ./src/framework/components.crash/CrashControlCashout/index.tsx


;// ./src/framework/components.crash/CrashControlCashoutRange/CrashControlCashoutRange.tsx





function _CrashControlCashoutRange({ children, index, includeZero = true, onChange = () => { }, onBlur = () => { }, dataArr, enableClickOnTrack = false, connectToMainCashout = false, }) {
    const { game: { setBetslipCoefficient, bets, uiCashoutLockedStatuses, cashoutErrors }, autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleOnChange = (value) => {
        if (autoBetEnabled[index])
            return;
        setRangeValue(value);
        onChange();
    };
    const handleOnBlur = (value) => {
        if (autoBetEnabled[index])
            return;
        setBetslipCoefficient(String(data.map.get(value)), index);
        onBlur();
    };
    const [rangeValue, setRangeValue] = (0,hooks_module_js_.useState)(0);
    const data = (0,hooks_module_js_.useMemo)(() => {
        const min = autoBetEnabled[index] && !bets[index].cashout.connectToAutobet
            ? bets[index].autobet.cashout.min
            : bets[index].cashout.min;
        const max = autoBetEnabled[index] && !bets[index].cashout.connectToAutobet
            ? bets[index].autobet.cashout.max
            : bets[index].cashout.max;
        const map = new Map();
        const mapReverse = new Map();
        if (includeZero) {
            map.set(0, 0);
            mapReverse.set(0, 0);
        }
        if (dataArr && dataArr.length) {
            dataArr.forEach((value) => {
                if (value < min)
                    return;
                map.set(map.size, Number(value.toFixed(2)));
                mapReverse.set(Number(value.toFixed(2)), mapReverse.size);
            });
            return { map, mapReverse };
        }
        function roundValue(value, min) {
            if (value < min)
                return min;
            if (value >= 0.01 && value < 0.1)
                return (value += 0.01);
            if (value >= 0.1 && value < 2)
                return (value += 0.1);
            if (value >= 2 && value < 10)
                return (value += 1);
            if (value >= 10 && value < 100)
                return (value += 10);
            if (value >= 100 && value < 1000)
                return (value += 100);
            if (value >= 1000 && value < 10000)
                return (value += 1000);
            if (value >= 10000 && value < 100000)
                return (value += 10000);
            if (value >= 100000)
                return (value += 100000);
            return 0;
        }
        let value = 0;
        while (value < max && map.size < 1000) {
            value = Math.min(roundValue(value, min), max);
            map.set(map.size, Number(value.toFixed(2)));
            mapReverse.set(Number(value.toFixed(2)), mapReverse.size);
        }
        return { map, mapReverse };
    }, [bets[index].cashout.min]);
    (0,hooks_module_js_.useEffect)(() => {
        const value = autoBetEnabled[index] && !bets[index].cashout.connectToAutobet
            ? Number(bets[index].autobet.cashout.coefficient)
            : Number(bets[index].coefficient);
        if (data.mapReverse.has(value)) {
            setRangeValue(data.mapReverse.get(value));
        }
        else {
            setRangeValue(0);
        }
    }, [autoBetEnabled[index], bets[index].coefficient, bets[index].cashout.min]);
    const props = {
        title: t('CRASH.AUTO_CASHOUT'),
        titleError: includeZero ? '' : t(cashoutErrors[index] || ''),
        titleOff: t('CRASH.OFF'),
        disabled: uiCashoutLockedStatuses[index],
        defaultValue: rangeValue,
        min: 0,
        max: data.map.size - 1,
        step: 1,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        renderValue: data.map.get(rangeValue),
        enableClickOnTrack,
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) });
}
const CrashControlCashoutRange = (0,index_js_.observer)(_CrashControlCashoutRange);

;// ./src/framework/components.crash/CrashControlCashoutRange/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
;// ./src/framework/helpers/addTrailingZeros.ts
const addTrailingZeros = (num, decimals) => {
    if (!decimals)
        return num.toString();
    const str = num.toString();
    const parts = str.split('.');
    if (parts.length === 1) {
        return str + '.' + '0'.repeat(decimals);
    }
    const existingDecimals = parts[1].length;
    if (existingDecimals < decimals) {
        return str + '0'.repeat(decimals - existingDecimals);
    }
    return str;
};
/* harmony default export */ const helpers_addTrailingZeros = (addTrailingZeros);

;// ./src/framework/components.crash/CrashControlButton/CrashControlButton.tsx









const Context = (0,preact_module_js_.createContext)({});
function _CrashControlButton({ children, index }) {
    const { profileCommon: { settings: { options }, profile: { currencySign, freebetsType, rounding }, limit: { maxWin }, }, game: { gameConfig, game: { status, coefficient }, buttonsLockedStatuses, placeBetStatuses, userBets, bets, }, autobetCommon: { autoBetEnabled, autoBetsAmount, autoBetLimit }, freebetsCommon: { freebetActive, listGetByIndex, freebetsSuccessIndexList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [actualBetObject, nextBetObject] = userBets.slice();
    const actualBet = actualBetObject.bets.slice()[index];
    const nextBet = nextBetObject.bets.slice()[index];
    const currentBet = actualBet || nextBet;
    const idle = (0,hooks_module_js_.useRef)(false);
    const computedTitle = () => {
        if (autoBetEnabled[index]) {
            return t(gameConfig.translateKey.button.stop);
        }
        if ((placeBetStatuses[index] === 'initial' || placeBetStatuses[index] === 'loading') &&
            !currentBet &&
            !freebetsSuccessIndexList.includes(index)) {
            return t(gameConfig.translateKey.button.play);
        }
        if ((placeBetStatuses[index] === 'initial' || placeBetStatuses[index] === 'loading') &&
            !currentBet &&
            freebetsSuccessIndexList.includes(index)) {
            return 'FREE BETS';
        }
        return t(gameConfig.translateKey.button.cancel);
    };
    const computedType = () => {
        if (autoBetEnabled[index]) {
            return 'stop';
        }
        if ((placeBetStatuses[index] === 'initial' || placeBetStatuses[index] === 'loading') &&
            !currentBet &&
            !freebetsSuccessIndexList.includes(index)) {
            return 'play';
        }
        if ((placeBetStatuses[index] === 'initial' || placeBetStatuses[index] === 'loading') &&
            !currentBet &&
            freebetsSuccessIndexList.includes(index)) {
            return 'freebet';
        }
        return 'cancel';
    };
    let props = {
        title: computedTitle(),
        titleValue: !currentBet && Number(status) >= 2 ? t(gameConfig.translateKey.button.onNextRound) : '',
        request: placeBetStatuses[index] === 'loading' ||
            placeBetStatuses[index] === 'canceling' ||
            placeBetStatuses[index] === 'cashouting',
        disabled: buttonsLockedStatuses[index],
        type: computedType(),
        value: `${currencySign} ${bets[index]?.amount}`,
        valueFreebet: undefined,
        currency: currencySign,
        autoBetsRemainsTitle: t('COMMON.REMAINS'),
        autoBetsRemains: autoBetLimit[index] ? autoBetsAmount[index] : -1,
        mode: autoBetEnabled[index] ? 'autobet' : 'default',
        rounding,
        disableAutobet: options?.disabledAutoplay,
    };
    switch (status) {
        case 2:
            props = {
                ...props,
                title: t(gameConfig.translateKey.button.starting),
                type: 'starting',
            };
            break;
        case 3:
            props = {
                ...props,
                title: t(gameConfig.translateKey.button.starting),
                type: 'starting',
            };
            break;
        case 4:
            if (actualBet && (Number(coefficient) <= actualBet.coefficient || actualBet.coefficient === 1)) {
                const cashout = Number(coefficient) * actualBet.amount;
                const value = Math.min(maxWin + Number(bets[index]?.amount), (0,floor/* default */.A)(cashout));
                props = {
                    ...props,
                    title: t(gameConfig.translateKey.button.cashout),
                    type: 'cashout',
                    value: `${currencySign} ${helpers_addTrailingZeros((0,truncateDecimals/* default */.A)(value, rounding), rounding)}`,
                };
            }
            break;
        case 5:
        case 6:
            if (placeBetStatuses[index] === 'initial' && currentBet) {
                props = {
                    ...props,
                    title: t(gameConfig.translateKey.button.play),
                    titleValue: t(gameConfig.translateKey.button.onNextRound),
                    type: freebetsSuccessIndexList.includes(index) ? 'freebet' : 'play',
                    disabled: true,
                };
            }
            break;
        default:
    }
    if (freebetsSuccessIndexList.includes(index) && props.type === 'cancel')
        props.disabled = true;
    const freebetList = listGetByIndex(index);
    const minCoefficient = freebetList?.freebetActive?.offer?.configuration[0]?.minCoefficient;
    if (currentBet && freebetList && freebetList.freebet && minCoefficient && minCoefficient > Number(coefficient)) {
        props.disabled = true;
    }
    if (currentBet && freebetList && freebetList.freebet && freebetList.freebetActive && freebetsType === 'greedy') {
        const amount = freebetList.freebetActive?.offer?.configuration[0]?.betAmount;
        const cashout = Number(coefficient) * amount - amount;
        const value = Math.min((0,floor/* default */.A)(maxWin + amount), (0,floor/* default */.A)(cashout));
        props.value = `${currencySign} ${helpers_addTrailingZeros((0,truncateDecimals/* default */.A)(value, rounding), rounding)}`;
    }
    if (props.type === 'freebet') {
        props.valueFreebet = String(freebetActive?.offer?.configuration[0]?.betAmount);
    }
    props.idle = idle.current;
    const idleTimeout = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        if (gameConfig.idleButtonAfter?.[props.type]) {
            idleTimeout.current = setTimeout(() => {
                idle.current = true;
            }, gameConfig.idleButtonAfter[props.type]);
        }
        else {
            clearTimeout(idleTimeout.current);
            idle.current = false;
        }
    }, [props.type]);
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: { ...props, index, currentBet }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const CrashControlButton = (0,index_js_.observer)(_CrashControlButton);

;// ./src/framework/components.crash/CrashControlButton/index.tsx


;// ./src/framework/components.crash/CrashControlButtonPlay/CrashControlButtonPlay.tsx






function _CrashControlButtonPlay({ children, onClick = () => { } }) {
    const { type, index, request, mode } = (0,hooks_module_js_.useContext)(Context);
    const { game: { placeBet }, } = (0,bootstrap.GET_STORE)();
    if (type !== 'play')
        return null;
    const handleClick = (e) => {
        e.preventDefault();
        if (request)
            return false;
        placeBet(index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onMouseDown: handleClick,
            onPointerDown: handleClick,
            onTouchMove: (e) => e.preventDefault(),
            onContextMenu: handleClick,
            onDblClick: (e) => e.preventDefault(),
        })) }));
}
const CrashControlButtonPlay = (0,index_js_.observer)(_CrashControlButtonPlay);

;// ./src/framework/components.crash/CrashControlButtonPlay/index.tsx


;// ./src/framework/components.crash/CrashControlButtonPlayEvent/CrashControlButtonPlayEvent.tsx






function _CrashControlButtonPlayEvent({ children, onClick = () => { } }) {
    const { index } = (0,hooks_module_js_.useContext)(Context);
    const { game: { placeBet }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        e.preventDefault();
        placeBet(index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onMouseDown: handleClick,
            onPointerDown: handleClick,
            onTouchMove: (e) => e.preventDefault(),
            onContextMenu: handleClick,
            onDblClick: (e) => e.preventDefault(),
        })) }));
}
const CrashControlButtonPlayEvent = (0,index_js_.observer)(_CrashControlButtonPlayEvent);

;// ./src/framework/components.crash/CrashControlButtonPlayEvent/index.tsx


;// ./src/framework/components.crash/CrashControlButtonCashout/CrashControlButtonCashout.tsx






function _CrashControlButtonCashout({ children, onClick = () => { } }) {
    const { type, index, request, mode } = (0,hooks_module_js_.useContext)(Context);
    const { game: { cashoutBet }, autobetCommon: { autoBetsCashout, setAutoBetsCashout }, } = (0,bootstrap.GET_STORE)();
    const [click, setClick] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useEffect)(() => {
        if (autoBetsCashout[index] && !click) {
            onClick({});
            setAutoBetsCashout(false, index);
        }
    }, [autoBetsCashout[index]]);
    if (type !== 'cashout')
        return null;
    const handleClick = (e) => {
        e.preventDefault();
        if (request)
            return false;
        cashoutBet(index);
        setClick(true);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onMouseDown: handleClick,
            onPointerDown: handleClick,
            onTouchMove: (e) => e.preventDefault(),
            onContextMenu: handleClick,
            onDblClick: (e) => e.preventDefault(),
        })) }));
}
const CrashControlButtonCashout = (0,index_js_.observer)(_CrashControlButtonCashout);

;// ./src/framework/components.crash/CrashControlButtonCashout/index.tsx


;// ./src/framework/components.crash/CrashControlButtonCashoutEvent/CrashControlButtonCashoutEvent.tsx






function _CrashControlButtonCashoutEvent({ children, onClick = () => { } }) {
    const { index } = (0,hooks_module_js_.useContext)(Context);
    const { game: { cashoutBet }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        e.preventDefault();
        cashoutBet(index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onMouseDown: handleClick,
            onPointerDown: handleClick,
            onTouchMove: (e) => e.preventDefault(),
            onContextMenu: handleClick,
            onDblClick: (e) => e.preventDefault(),
        })) }));
}
const CrashControlButtonCashoutEvent = (0,index_js_.observer)(_CrashControlButtonCashoutEvent);

;// ./src/framework/components.crash/CrashControlButtonCashoutEvent/index.tsx


;// ./src/framework/components.crash/CrashControlButtonCancel/CrashControlButtonCancel.tsx






function _CrashControlButtonCancel({ children, onClick = () => { } }) {
    const { type, index, request, currentBet, mode } = (0,hooks_module_js_.useContext)(Context);
    const { game: { cancelBet }, } = (0,bootstrap.GET_STORE)();
    if (type !== 'cancel')
        return null;
    const handleClick = (e) => {
        e.preventDefault();
        if (request)
            return false;
        if (currentBet)
            cancelBet(index, currentBet.id);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onMouseDown: handleClick,
            onPointerDown: handleClick,
            onTouchMove: (e) => e.preventDefault(),
            onContextMenu: handleClick,
            onDblClick: (e) => e.preventDefault(),
        })) }));
}
const CrashControlButtonCancel = (0,index_js_.observer)(_CrashControlButtonCancel);

;// ./src/framework/components.crash/CrashControlButtonCancel/index.tsx


;// ./src/framework/components.crash/CrashControlButtonCancelEvent/CrashControlButtonCancelEvent.tsx






function _CrashControlButtonCancelEvent({ children, onClick = () => { } }) {
    const { index, currentBet } = (0,hooks_module_js_.useContext)(Context);
    const { game: { cancelBet }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        e.preventDefault();
        if (currentBet)
            cancelBet(index, currentBet.id);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onMouseDown: handleClick,
            onPointerDown: handleClick,
            onTouchMove: (e) => e.preventDefault(),
            onContextMenu: handleClick,
            onDblClick: (e) => e.preventDefault(),
        })) }));
}
const CrashControlButtonCancelEvent = (0,index_js_.observer)(_CrashControlButtonCancelEvent);

;// ./src/framework/components.crash/CrashControlButtonCancelEvent/index.tsx


;// ./src/framework/components.crash/CrashControlButtonStop/CrashControlButtonStop.tsx






function _CrashControlButtonStop({ children, onClick = () => { } }) {
    const { type, index, request, mode } = (0,hooks_module_js_.useContext)(Context);
    const { game: { stopAutoBet }, } = (0,bootstrap.GET_STORE)();
    if (type !== 'stop')
        return null;
    const handleClick = (e) => {
        e.preventDefault();
        if (request)
            return false;
        stopAutoBet(index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrashControlButtonStop = (0,index_js_.observer)(_CrashControlButtonStop);

;// ./src/framework/components.crash/CrashControlButtonStop/index.tsx


;// ./src/framework/components.crash/CrashControlButtonStopEvent/CrashControlButtonStopEvent.tsx






function _CrashControlButtonStopEvent({ children, onClick = () => { } }) {
    const { index } = (0,hooks_module_js_.useContext)(Context);
    const { game: { stopAutoBet }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        e.preventDefault();
        stopAutoBet(index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrashControlButtonStopEvent = (0,index_js_.observer)(_CrashControlButtonStopEvent);

;// ./src/framework/components.crash/CrashControlButtonStopEvent/index.tsx


;// ./src/framework/components.crash/CrashControlButtonFreebet/CrashControlButtonFreebet.tsx






function _CrashControlButtonFreebet({ children, onClick = () => { } }) {
    const { type, index, request, mode } = (0,hooks_module_js_.useContext)(Context);
    const { game: { placeBet }, } = (0,bootstrap.GET_STORE)();
    if (type !== 'freebet')
        return null;
    const handleClick = (e) => {
        e.preventDefault();
        if (request)
            return false;
        placeBet(index, true);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onMouseDown: handleClick,
            onPointerDown: handleClick,
            onTouchMove: (e) => e.preventDefault(),
            onContextMenu: handleClick,
            onDblClick: (e) => e.preventDefault(),
        })) }));
}
const CrashControlButtonFreebet = (0,index_js_.observer)(_CrashControlButtonFreebet);

;// ./src/framework/components.crash/CrashControlButtonFreebet/index.tsx


;// ./src/framework/components.crash/CrashControlButtonFreebetEvent/CrashControlButtonFreebetEvent.tsx






function _CrashControlButtonFreebetEvent({ children, onClick = () => { } }) {
    const { index } = (0,hooks_module_js_.useContext)(Context);
    const { game: { placeBet }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        e.preventDefault();
        placeBet(index, true);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onMouseDown: handleClick,
            onPointerDown: handleClick,
            onTouchMove: (e) => e.preventDefault(),
            onContextMenu: handleClick,
            onDblClick: (e) => e.preventDefault(),
        })) }));
}
const CrashControlButtonFreebetEvent = (0,index_js_.observer)(_CrashControlButtonFreebetEvent);

;// ./src/framework/components.crash/CrashControlButtonFreebetEvent/index.tsx


;// ./src/framework/components.crash/CrashControlButtonStarting/CrashControlButtonStarting.tsx





function _CrashControlButtonStarting({ children, onClick = () => { } }) {
    const { type } = (0,hooks_module_js_.useContext)(Context);
    if (type !== 'starting')
        return null;
    const handleClick = (e) => {
        e.preventDefault();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onMouseDown: handleClick,
            onPointerDown: handleClick,
            onTouchMove: (e) => e.preventDefault(),
            onContextMenu: handleClick,
            onDblClick: (e) => e.preventDefault(),
        })) }));
}
const CrashControlButtonStarting = (0,index_js_.observer)(_CrashControlButtonStarting);

;// ./src/framework/components.crash/CrashControlButtonStarting/index.tsx


;// ./src/framework/components.crash/CrashControlAdd/CrashControlAdd.tsx




function _CrashControlAdd({ children, onClick = () => { } }) {
    const { game: { gameConfig, addBet, bets }, } = (0,bootstrap.GET_STORE)();
    const disabled = bets.length === gameConfig.bets.length;
    const handleClick = (e) => {
        e.preventDefault();
        addBet();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrashControlAdd = (0,index_js_.observer)(_CrashControlAdd);

;// ./src/framework/components.crash/CrashControlAdd/index.tsx


;// ./src/framework/components.crash/CrashControlRemove/CrashControlRemove.tsx




function _CrashControlRemove({ children, onClick = () => { }, index }) {
    const { game: { removeBet, bets, placeBetStatuses }, autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const _index = index || bets.length - 1;
    const disabled = autoBetEnabled[_index] || placeBetStatuses[_index] !== 'initial' || bets.length === 1;
    const handleClick = (e) => {
        e.preventDefault();
        removeBet(_index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrashControlRemove = (0,index_js_.observer)(_CrashControlRemove);

;// ./src/framework/components.crash/CrashControlRemove/index.tsx


;// ./src/framework/components.crash/CrashControl/CrashControl.tsx




















function _CrashControl({ children }) {
    const { game: { bets }, profileCommon: { settings: { options }, }, } = (0,bootstrap.GET_STORE)();
    const keys = Object.keys(bets);
    const count = typeof options?.crashBets === 'number' ? options.crashBets : keys.length;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            list: keys.slice(0, count).map((key) => Number(key)),
        }) }));
}
const CrashControl = Object.assign((0,index_js_.observer)(_CrashControl), {
    Button: Object.assign(CrashControlButton, {
        Play: Object.assign(CrashControlButtonPlay, {
            Event: CrashControlButtonPlayEvent,
        }),
        Cashout: Object.assign(CrashControlButtonCashout, {
            Event: CrashControlButtonCashoutEvent,
        }),
        Cancel: Object.assign(CrashControlButtonCancel, {
            Event: CrashControlButtonCancelEvent,
        }),
        Stop: Object.assign(CrashControlButtonStop, {
            Event: CrashControlButtonStopEvent,
        }),
        Freebet: Object.assign(CrashControlButtonFreebet, {
            Event: CrashControlButtonFreebetEvent,
        }),
        Starting: CrashControlButtonStarting,
    }),
    Amount: CrashControlAmount,
    Cashout: Object.assign(CrashControlCashout, {
        Range: CrashControlCashoutRange,
    }),
    Add: CrashControlAdd,
    Remove: CrashControlRemove,
});

;// ./src/framework/components.crash/CrashControl/index.tsx


;// ./src/framework/components.crash/CrashRenderReload/CrashRenderReload.tsx




function _CrashRenderReload({ children, onClick = () => { } }) {
    const { setReload } = (0,hooks_module_js_.useContext)(CrashRender_Context);
    const handleClick = () => {
        setReload(Date.now());
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrashRenderReload = _CrashRenderReload;

;// ./src/framework/components.crash/CrashRenderReload/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/postMessageListener.ts + 1 modules
var postMessageListener = __webpack_require__(25490);
;// ./src/framework/components.crash/CrashRender/CrashRender.tsx







const CrashRender_Context = (0,preact_module_js_.createContext)({});
function _CrashRender({ children, betData }) {
    const { game, coefficient, payout } = betData;
    const { t } = (0,es_index_js_.useTranslation)();
    const [reload, setReload] = (0,hooks_module_js_.useState)(0);
    const [animation, setAnimation] = (0,hooks_module_js_.useState)(false);
    const animationRef = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        animationRef.current = setTimeout(() => {
            setAnimation(true);
        }, (0,bootstrap.GET_GAME_CONFIG)().pageRender.animationDelay || 0);
        return () => {
            clearTimeout(animationRef.current);
        };
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        const unsubscribe = (0,postMessageListener/* postMessageListener */.K)({
            reload: () => {
                setReload(Date.now());
            },
        });
        return () => {
            unsubscribe();
        };
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        clearTimeout(animationRef.current);
        setAnimation(false);
        animationRef.current = setTimeout(() => {
            setAnimation(true);
        }, (0,bootstrap.GET_GAME_CONFIG)()?.pageRender?.animationDelay || 100);
        return () => {
            clearTimeout(animationRef.current);
        };
    }, [reload]);
    return ((0,jsxRuntime_module/* jsx */.Y)(CrashRender_Context.Provider, { value: { reload, setReload }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                value: coefficient,
                valueTitle: t('CRASH.CASHOUT_AT'),
                isResult: Boolean(Number(game.coefficient)),
                result: Number(game.coefficient) || null,
                retultTitle: Boolean(Number(game.coefficient)) ? t('CRASH.CRASHED_AT') : t('COMMON.GAME_IN_PROGRESS'),
                isWin: Boolean(payout),
                animation,
            }) }) }));
}
const CrashRender = Object.assign(_CrashRender, {
    Reload: CrashRenderReload,
});

;// ./src/framework/components.crash/CrashRender/index.tsx


;// ./src/framework/components.crash/CrashFps/CrashFps.tsx




const statuses = [
    [0, 300, 'All systems nominal'],
    [300, 1500, 'Attention! Turbulence zone'],
    [1500, 0, 'Warning! Slow connection'],
];
const checkPing = (ping) => {
    let n = '';
    let i = 0;
    statuses.forEach(([min, max, name], index) => {
        if (ping >= min && (ping < max || !max)) {
            n = name;
            i = index + 1;
        }
    });
    return { name: n, index: i };
};
function _CrashFps({ children }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { game: { ping, usersCount }, } = (0,bootstrap.GET_STORE)();
    const { name, index } = checkPing(ping);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: t('COMMON.PING'), fps: ping.toFixed(), error: index ? name : null, usersCount }) });
}
const CrashFps = (0,index_js_.observer)(_CrashFps);

;// ./src/framework/components.crash/CrashFps/index.tsx


;// ./src/framework/components.crash/CrashAutoControlModal/CrashAutoControlModal.tsx



function _CrashAutoControlModal({ children, index = 0 }) {
    const { uiCommon: { modal, setModal }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            show: modal[`crashAutoControlModal${index}`]?.render,
            open: modal[`crashAutoControlModal${index}`]?.open,
            close: modal[`crashAutoControlModal${index}`]?.close,
            onClose: (value) => {
                setModal({
                    modalName: `crashAutoControlModal${index}`,
                    render: value,
                });
            },
        }) }));
}
const CrashAutoControlModal = (0,index_js_.observer)(_CrashAutoControlModal);

;// ./src/framework/components.crash/CrashAutoControlModal/index.tsx


;// ./src/framework/components.crash/CrashAutoControlModalButton/CrashAutoControlModalButton.tsx




function _CrashAutoControlModalButton({ children, onClick = () => { }, index = 0, delayOpen, delayClose, ignoreDisabled = false, }) {
    const { autobetCommon: { autoBetEnabled }, game: { placeBetStatuses, userBets, buttonsLockedStatuses }, freebetsCommon: { freebetEnabled }, uiCommon: { setModal }, } = (0,bootstrap.GET_STORE)();
    const [actualBetObject, nextBetObject] = userBets.slice();
    const actualBet = actualBetObject.bets.slice()[index];
    const nextBet = nextBetObject.bets.slice()[index];
    const currentBet = actualBet || nextBet;
    const disabled = (autoBetEnabled[index] ? true : placeBetStatuses[index] === 'initial' && !currentBet ? false : true) ||
        buttonsLockedStatuses[index];
    const handleClick = (e) => {
        e.preventDefault();
        if (!ignoreDisabled && (freebetEnabled || disabled))
            return;
        setModal({
            modalName: `crashAutoControlModal${index}`,
            render: true,
            delayOpen,
            delayClose,
        });
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ disabled: ignoreDisabled ? false : disabled })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrashAutoControlModalButton = (0,index_js_.observer)(_CrashAutoControlModalButton);

;// ./src/framework/components.crash/CrashAutoControlModalButton/index.tsx


;// ./src/framework/components.crash/CrashAutoControlAmount/CrashAutoControlAmount.tsx




function _CrashAutoControlAmount({ children, index }) {
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { bets, setBetslipAmount, uiLockedStatuses, amountErrors }, autobetCommon: { autoBetEnabled }, freebetsCommon: { freebetEnabled, freebetsSuccessIndexList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            titleError: amountErrors[index] || null,
            titleMaxWin: `${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`,
            disabled: uiLockedStatuses[index] || autoBetEnabled[index] || freebetEnabled,
            defaultValue: Number(bets[index].amount),
            min: minBet,
            max: maxBet,
            onChange: (value) => setBetslipAmount(String(value), index),
            prefix: currencySign || '',
            connectBalance: freebetEnabled || freebetsSuccessIndexList.includes(index) ? 0 : balance,
            rounding: rounding > 0 ? rounding - 1 : rounding,
            gtmAction: 'input_value_changed',
            pushGtmDataOnValueChange: true,
        }) }));
}
const CrashAutoControlAmount = (0,index_js_.observer)(_CrashAutoControlAmount);

;// ./src/framework/components.crash/CrashAutoControlAmount/index.tsx


;// ./src/framework/components.crash/CrashAutoControlCashout/CrashAutoControlCashout.tsx






function _CrashAutoControlCashout({ children, index }) {
    const { game: { bets, setAutobetCoefficient, setBetslipCoefficient, gameConfig }, autobetCommon: { autoBetEnabled }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const step = ({ value, min, max, inc }) => {
        let s = min;
        if (inc ? value >= 0.01 && value < 0.1 : value > 0.01 && value <= 0.1) {
            s = 0.01;
        }
        else if (inc ? value >= 0.1 && value < 2 : value > 0.1 && value <= 2) {
            s = 0.1;
        }
        else if (inc ? value >= 2 && value < 10 : value > 2 && value <= 10) {
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
        return s;
    };
    let rounding = 2;
    const splited = gameConfig.bets[0].autobet.cashout.coefficient.split('.');
    if (splited[1]) {
        rounding = splited[1].length;
    }
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('CRASH.AUTO_CASHOUT'),
            titleOff: t('CRASH.OFF'),
            disabled: autoBetEnabled[index] || freebetEnabled,
            defaultValue: bets[index].cashout.connectToAutobet
                ? helpers_addTrailingZeros((0,truncateDecimals/* default */.A)(Number(bets[index].coefficient), 2), 2)
                : helpers_addTrailingZeros((0,truncateDecimals/* default */.A)(Number(bets[index].autobet.cashout.coefficient), 2), 2),
            min: bets[index].cashout.connectToAutobet ? bets[index].cashout.min : bets[index].autobet.cashout.min,
            max: bets[index].cashout.connectToAutobet ? bets[index].cashout.max : bets[index].autobet.cashout.max,
            onChange: (value) => bets[index].cashout.connectToAutobet
                ? setBetslipCoefficient(String(value), index)
                : setAutobetCoefficient(String(value), index),
            prefix: 'x',
            step: step,
            rounding,
        }) }));
}
const CrashAutoControlCashout = (0,index_js_.observer)(_CrashAutoControlCashout);

;// ./src/framework/components.crash/CrashAutoControlCashout/index.tsx


;// ./src/framework/components.crash/CrashAutoControlBets/CrashAutoControlBets.tsx




function _CrashAutoControlBets({ children, index }) {
    const { game: { bets }, autobetCommon: { autoBetEnabled, autoBetsAmount, setAutoBetsAmount }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.NUMBER_OF_BETS'),
            disabled: autoBetEnabled[index] || freebetEnabled,
            defaultValue: Number(autoBetsAmount[index]),
            min: bets[index].autobet.bets.min,
            max: bets[index].autobet.bets.max,
            onChange: (value) => setAutoBetsAmount(String(value), index),
            toFixed: 0,
        }) }));
}
const CrashAutoControlBets = (0,index_js_.observer)(_CrashAutoControlBets);

;// ./src/framework/components.crash/CrashAutoControlBets/index.tsx


;// ./src/framework/components.crash/CrashAutoControlPro/CrashAutoControlPro.tsx




function _CrashAutoControlPro({ children, index }) {
    const { autobetCommon: { autoBetProSetting, autoBetEnabled }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: autoBetProSetting[index] ? t('COMMON.CLOSE_PRO') : t('COMMON.OPEN_PRO'),
            disabled: !autoBetEnabled || freebetEnabled,
            active: autoBetProSetting[index],
        }) }));
}
const CrashAutoControlPro = (0,index_js_.observer)(_CrashAutoControlPro);

;// ./src/framework/components.crash/CrashAutoControlPro/index.tsx


;// ./src/framework/components.crash/CrashAutoControlProButton/CrashAutoControlProButton.tsx




function _CrashAutoControlProButton({ children, onClick = () => { }, index }) {
    const { autobetCommon: { autoBetProSetting, setAutoBetProSetting }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        e.preventDefault();
        if (freebetEnabled)
            return;
        setAutoBetProSetting(!autoBetProSetting[index], index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrashAutoControlProButton = (0,index_js_.observer)(_CrashAutoControlProButton);

;// ./src/framework/components.crash/CrashAutoControlProButton/index.tsx


;// ./src/framework/components.crash/CrashAutoControlLose/CrashAutoControlLose.tsx




function _CrashAutoControlLose({ children, index = 0 }) {
    const { autobetCommon: { autoBetEnabled }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.ON_LOSS'),
            disabled: autoBetEnabled[index] || freebetEnabled,
        }) }));
}
const CrashAutoControlLose = (0,index_js_.observer)(_CrashAutoControlLose);

;// ./src/framework/components.crash/CrashAutoControlLose/index.tsx


;// ./src/framework/components.crash/CrashAutoControlLoseButtonReset/CrashAutoControlLoseButtonReset.tsx





function _CrashAutoControlLoseButtonReset({ children, onClick = () => { }, index }) {
    const { autobetCommon: { onLoseIncrease, setOnLoseIncrease }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = (e) => {
        if (freebetEnabled)
            return;
        setOnLoseIncrease(false, index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            title: t('COMMON.RESET'),
            active: !onLoseIncrease[index],
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrashAutoControlLoseButtonReset = (0,index_js_.observer)(_CrashAutoControlLoseButtonReset);

;// ./src/framework/components.crash/CrashAutoControlLoseButtonReset/index.tsx


;// ./src/framework/components.crash/CrashAutoControlLoseButtonIncrease/CrashAutoControlLoseButtonIncrease.tsx





function _CrashAutoControlLoseButtonIncrease({ children, onClick = () => { }, index }) {
    const { autobetCommon: { onLoseIncrease, setOnLoseIncrease }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = (e) => {
        if (freebetEnabled)
            return;
        setOnLoseIncrease(true, index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            title: t('COMMON.INCREASE_BY'),
            active: onLoseIncrease[index],
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrashAutoControlLoseButtonIncrease = (0,index_js_.observer)(_CrashAutoControlLoseButtonIncrease);

;// ./src/framework/components.crash/CrashAutoControlLoseButtonIncrease/index.tsx


;// ./src/framework/components.crash/CrashAutoControlLoseIncrease/CrashAutoControlLoseIncrease.tsx



function _CrashAutoControlLoseIncrease({ children, index }) {
    const { game: { bets }, autobetCommon: { onLoseIncrease, onLoseIncreaseAmount, onLoseIncreaseError, setOnLoseIncreaseAmount }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const handleChange = (value) => {
        if (freebetEnabled || !onLoseIncrease[index])
            return;
        setOnLoseIncreaseAmount(value, index);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            error: onLoseIncreaseError[index],
            active: !onLoseIncrease[index],
            defaultValue: onLoseIncreaseAmount[index],
            min: bets[index]?.autobet.lose.increase.min,
            max: bets[index]?.autobet.lose.increase.max,
            onChange: handleChange,
        }) }));
}
const CrashAutoControlLoseIncrease = (0,index_js_.observer)(_CrashAutoControlLoseIncrease);

;// ./src/framework/components.crash/CrashAutoControlLoseIncrease/index.tsx


;// ./src/framework/components.crash/CrashAutoControlWin/CrashAutoControlWin.tsx




function _CrashAutoControlWin({ children, index = 0 }) {
    const { autobetCommon: { autoBetEnabled }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.ON_WIN'),
            disabled: autoBetEnabled[index] || freebetEnabled,
        }) }));
}
const CrashAutoControlWin = (0,index_js_.observer)(_CrashAutoControlWin);

;// ./src/framework/components.crash/CrashAutoControlWin/index.tsx


;// ./src/framework/components.crash/CrashAutoControlWinButtonReset/CrashAutoControlWinButtonReset.tsx





function _CrashAutoControlWinButtonReset({ children, onClick = () => { }, index = 0 }) {
    const { autobetCommon: { onWinIncrease, setOnWinIncrease }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = (e) => {
        e.preventDefault();
        if (freebetEnabled)
            return;
        setOnWinIncrease(false, index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            title: t('COMMON.RESET'),
            active: !onWinIncrease[index],
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrashAutoControlWinButtonReset = (0,index_js_.observer)(_CrashAutoControlWinButtonReset);

;// ./src/framework/components.crash/CrashAutoControlWinButtonReset/index.tsx


;// ./src/framework/components.crash/CrashAutoControlWinButtonIncrease/CrashAutoControlWinButtonIncrease.tsx





function _CrashAutoControlWinButtonIncrease({ children, onClick = () => { }, index = 0 }) {
    const { autobetCommon: { onWinIncrease, setOnWinIncrease }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = (e) => {
        e.preventDefault();
        if (freebetEnabled)
            return;
        setOnWinIncrease(true, index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            title: t('COMMON.INCREASE_BY'),
            active: onWinIncrease[index],
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrashAutoControlWinButtonIncrease = (0,index_js_.observer)(_CrashAutoControlWinButtonIncrease);

;// ./src/framework/components.crash/CrashAutoControlWinButtonIncrease/index.tsx


;// ./src/framework/components.crash/CrashAutoControlWinIncrease/CrashAutoControlWinIncrease.tsx



function _CrashAutoControlWinIncrease({ children, index = 0 }) {
    const { game: { bets }, autobetCommon: { onWinIncrease, onWinIncreaseAmount, onWinIncreaseError, setOnWinIncreaseAmount }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const handleChange = (value) => {
        if (freebetEnabled || !onWinIncrease[index])
            return;
        setOnWinIncreaseAmount(value, index);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            error: onWinIncreaseError[index],
            active: !onWinIncrease[index],
            defaultValue: onWinIncreaseAmount[index],
            min: bets[index]?.autobet.win.increase.min,
            max: bets[index]?.autobet.win.increase.max,
            onChange: handleChange,
        }) }));
}
const CrashAutoControlWinIncrease = (0,index_js_.observer)(_CrashAutoControlWinIncrease);

;// ./src/framework/components.crash/CrashAutoControlWinIncrease/index.tsx


;// ./src/framework/components.crash/CrashAutoControlToggleIsWin/CrashAutoControlToggleIsWin.tsx




function _CrashAutoControlToggleIsWin({ children, index }) {
    const { autobetCommon: { autoBetEnabled, stopOnAnyWin, setStopOnAnyWin }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.STOP_ON_WIN'),
            disabled: autoBetEnabled[index] || freebetEnabled,
            defaultValue: stopOnAnyWin[index],
            onChange: (value) => setStopOnAnyWin(value, index),
        }) }));
}
const CrashAutoControlToggleIsWin = (0,index_js_.observer)(_CrashAutoControlToggleIsWin);

;// ./src/framework/components.crash/CrashAutoControlToggleIsWin/index.tsx


;// ./src/framework/components.crash/CrashAutoControlButton/CrashAutoControlButton.tsx





function _CrashAutoControlButton({ children, onClick = () => { }, index = 0 }) {
    const { game: { startAutoBet, gameConfig }, freebetsCommon: { freebetEnabled }, uiCommon: { setModal }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = (e) => {
        e.preventDefault();
        if (freebetEnabled)
            return;
        startAutoBet(index);
        setModal({
            modalName: `crashAutoControlModal${index}`,
            render: false,
        });
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            title: t(gameConfig.translateKey.button.start),
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrashAutoControlButton = (0,index_js_.observer)(_CrashAutoControlButton);

;// ./src/framework/components.crash/CrashAutoControlButton/index.tsx


;// ./src/framework/components.crash/CrashAutoControlBetsRange/CrashAutoControlBetsRange.tsx




function _CrashAutoControlBetsRange({ children, index }) {
    const { game: { bets }, autobetCommon: { autoBetEnabled, autoBetsAmount, setAutoBetsAmount }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.NUMBER_OF_BETS'),
            disabled: autoBetEnabled[index] || freebetEnabled,
            min: bets[index].autobet.bets.min,
            max: bets[index].autobet.bets.max,
            defaultValue: Number(autoBetsAmount[index]),
            step: 1,
            stepButton: 1,
            onChange: (value) => setAutoBetsAmount(String(value), index),
        }) }));
}
const CrashAutoControlBetsRange = (0,index_js_.observer)(_CrashAutoControlBetsRange);

;// ./src/framework/components.crash/CrashAutoControlBetsRange/index.tsx


;// ./src/framework/components.crash/CrashAutoControlCashoutRange/CrashAutoControlCashoutRange.tsx





function _CrashAutoControlCashoutRange({ children, index, includeZero = true, onChange = () => { }, onBlur = () => { }, dataArr, enableClickOnTrack = false, connectToMainCashout = false, }) {
    const { game: { bets, cashoutErrors, setAutobetCoefficient, setBetslipCoefficient }, autobetCommon: { autoBetEnabled }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleOnChange = (value) => {
        if (autoBetEnabled[index] || freebetEnabled)
            return;
        setRangeValue(value);
        onChange();
    };
    const handleOnBlur = (value) => {
        if (autoBetEnabled[index] || freebetEnabled)
            return;
        bets[index].cashout.connectToAutobet
            ? setBetslipCoefficient(String(data.map.get(value)), index)
            : setAutobetCoefficient(String(data.map.get(value)), index);
        onBlur();
    };
    const [rangeValue, setRangeValue] = (0,hooks_module_js_.useState)(0);
    const data = (0,hooks_module_js_.useMemo)(() => {
        const map = new Map();
        const mapReverse = new Map();
        if (includeZero) {
            map.set(0, 0);
            mapReverse.set(0, 0);
        }
        if (dataArr && dataArr.length) {
            dataArr.forEach((value) => {
                map.set(map.size, Number(value.toFixed(2)));
                mapReverse.set(Number(value.toFixed(2)), mapReverse.size);
            });
            return { map, mapReverse };
        }
        const min = bets[index].cashout.connectToAutobet ? bets[index].cashout.min : bets[index].autobet.cashout.min;
        const max = bets[index].cashout.connectToAutobet ? bets[index].cashout.max : bets[index].autobet.cashout.max;
        function roundValue(value, min) {
            if (value < min)
                return min;
            if (value >= 0.01 && value < 0.1)
                return (value += 0.01);
            if (value >= 0.1 && value < 2)
                return (value += 0.1);
            if (value >= 2 && value < 10)
                return (value += 1);
            if (value >= 10 && value < 100)
                return (value += 10);
            if (value >= 100 && value < 1000)
                return (value += 100);
            if (value >= 1000 && value < 10000)
                return (value += 1000);
            if (value >= 10000 && value < 100000)
                return (value += 10000);
            if (value >= 100000)
                return (value += 100000);
            return 0;
        }
        let value = 0;
        while (value < max && map.size < 1000) {
            value = Math.min(roundValue(value, min), max);
            map.set(map.size, Number(value.toFixed(2)));
            mapReverse.set(Number(value.toFixed(2)), mapReverse.size);
        }
        return { map, mapReverse };
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        const value = bets[index].cashout.connectToAutobet
            ? Number(bets[index].coefficient)
            : Number(bets[index].autobet.cashout.coefficient);
        if (data.mapReverse.has(value)) {
            setRangeValue(data.mapReverse.get(value));
        }
    }, [bets[index].autobet.cashout.coefficient, bets[index].coefficient]);
    const props = {
        title: t('CRASH.AUTO_CASHOUT'),
        titleError: includeZero ? '' : t(cashoutErrors[index] || ''),
        titleOff: t('CRASH.OFF'),
        disabled: autoBetEnabled[index] || freebetEnabled,
        defaultValue: rangeValue,
        min: 0,
        max: data.map.size - 1,
        step: 1,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        renderValue: data.map.get(rangeValue),
        enableClickOnTrack,
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) });
}
const CrashAutoControlCashoutRange = (0,index_js_.observer)(_CrashAutoControlCashoutRange);

;// ./src/framework/components.crash/CrashAutoControlCashoutRange/index.tsx


;// ./src/framework/components.crash/CrashAutoControlCashoutRangeSimple/CrashAutoControlCashoutRangeSimple.tsx




function _CrashAutoControlCashoutRangeSimple({ children, index }) {
    const { game: { bets, setBetslipCoefficient, setAutobetCoefficient }, autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('CRASH.AUTO_CASHOUT'),
            titleOff: t('CRASH.OFF'),
            disabled: autoBetEnabled[index],
            min: bets[index].cashout.connectToAutobet ? bets[index].cashout.min : bets[index].autobet.cashout.min,
            max: bets[index].cashout.connectToAutobet ? bets[index].cashout.max : bets[index].autobet.cashout.max,
            defaultValue: bets[index].cashout.connectToAutobet
                ? Number(bets[index].coefficient)
                : Number(bets[index].autobet.cashout.coefficient),
            step: 1,
            stepButton: 1,
            onChange: (value) => bets[index].cashout.connectToAutobet
                ? setBetslipCoefficient(String(value), index)
                : setAutobetCoefficient(String(value), index),
        }) }));
}
const CrashAutoControlCashoutRangeSimple = (0,index_js_.observer)(_CrashAutoControlCashoutRangeSimple);

;// ./src/framework/components.crash/CrashAutoControlCashoutRangeSimple/index.tsx


;// ./src/framework/components.crash/CrashAutoControlBetsList/CrashAutoControlBetsList.tsx






const CrashAutoControlBetsList_Context = (0,preact_module_js_.createContext)({});
function _CrashAutoControlBetsList({ children, index, list = [0], defaultActiveItem = 0 }) {
    const { game: { bets }, autobetCommon: { autoBetEnabled, autoBetLimit, autoBetsInitialAmount, setAutoBetLimit, setAutoBetsAmount }, freebetsCommon: { freebetEnabled }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [activeIndex, setActiveIndex] = (0,hooks_module_js_.useState)(autoBetsInitialAmount[index] ? list.findIndex((value) => value === autoBetsInitialAmount[index]) : 0);
    const mutableList = (0,hooks_module_js_.useMemo)(() => {
        const min = bets[index].autobet.bets.min;
        const max = bets[index].autobet.bets.max;
        const mutableList = list.filter((value) => value >= min && value <= max);
        return mutableList.length ? mutableList : [min];
    }, [list]);
    (0,hooks_module_js_.useEffect)(() => {
        if (autoBetLimit[index])
            return;
        if (defaultActiveItem && mutableList.includes(defaultActiveItem)) {
            setAutoBetsAmount(String(defaultActiveItem), index);
            setActiveIndex(mutableList.findIndex((value) => value === defaultActiveItem));
            setAutoBetLimit(true, index);
        }
        else {
            const firstValue = mutableList[0];
            if (firstValue) {
                setAutoBetLimit(true, index);
                setAutoBetsAmount(String(firstValue), index);
            }
        }
    }, []);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,jsxRuntime_module/* jsx */.Y)(CrashAutoControlBetsList_Context.Provider, { value: {
                list,
                setActiveIndex,
            }, children: children({
                title: t('COMMON.NUMBER_OF_BETS'),
                disabled: autoBetEnabled[index] || freebetEnabled,
                list: mutableList,
                activeIndex,
                totalAmountTitle: t('COMMON.TOTAL_AMOUNT'),
                totalAmount: `${currencySign}${(Number(bets[index].amount) * mutableList[activeIndex]).toFixed(rounding)}`,
            }) }) }));
}
const CrashAutoControlBetsList = (0,index_js_.observer)(_CrashAutoControlBetsList);

;// ./src/framework/components.crash/CrashAutoControlBetsList/index.tsx


;// ./src/framework/components.crash/CrashAutoControlBetsListButton/CrashAutoControlBetsListButton.tsx






function _CrashAutoControlBetsListButton({ children, buttonIndex, index, onClick = () => { } }) {
    const { autobetCommon: { autoBetEnabled, setAutoBetsAmount }, freebetsCommon: { freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { setActiveIndex, list } = (0,hooks_module_js_.useContext)(CrashAutoControlBetsList_Context);
    const handleClick = () => {
        if (freebetEnabled)
            return;
        setAutoBetsAmount(String(list[buttonIndex]), index);
        setActiveIndex(buttonIndex);
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrashAutoControlBetsListButton = (0,index_js_.observer)(_CrashAutoControlBetsListButton);

;// ./src/framework/components.crash/CrashAutoControlBetsListButton/index.tsx


;// ./src/framework/components.crash/CrashAutoControl/CrashAutoControl.tsx


























function _CrashAutoControl({ children }) {
    const { game: { bets }, uiCommon: modal, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            list: Object.keys(bets).map((key) => Boolean(modal[`crashAutoControlModal${key}`]?.render)),
            title: t('COMMON.AUTOBETS'),
        }) }));
}
const CrashAutoControl = Object.assign((0,index_js_.observer)(_CrashAutoControl), {
    Modal: Object.assign(CrashAutoControlModal, {
        Button: CrashAutoControlModalButton,
    }),
    Amount: CrashAutoControlAmount,
    Cashout: Object.assign(CrashAutoControlCashout, {
        Range: Object.assign(CrashAutoControlCashoutRange, {
            Simple: CrashAutoControlCashoutRangeSimple,
        }),
    }),
    Bets: Object.assign(CrashAutoControlBets, {
        Range: CrashAutoControlBetsRange,
        List: Object.assign(CrashAutoControlBetsList, {
            Button: CrashAutoControlBetsListButton,
        }),
    }),
    Pro: Object.assign(CrashAutoControlPro, {
        Button: CrashAutoControlProButton,
    }),
    Lose: Object.assign(CrashAutoControlLose, {
        Button: Object.assign({
            Reset: CrashAutoControlLoseButtonReset,
            Increase: CrashAutoControlLoseButtonIncrease,
        }),
        Increase: CrashAutoControlLoseIncrease,
    }),
    Win: Object.assign(CrashAutoControlWin, {
        Button: Object.assign({
            Reset: CrashAutoControlWinButtonReset,
            Increase: CrashAutoControlWinButtonIncrease,
        }),
        Increase: CrashAutoControlWinIncrease,
    }),
    ToggleIsWin: CrashAutoControlToggleIsWin,
    Button: CrashAutoControlButton,
});

;// ./src/framework/components.crash/CrashAutoControl/index.tsx


;// ./src/framework/components.crash/CrashGameCoefficient/CrashGameCoefficient.tsx





function _CrashGameCoefficient({ children, pulseDuration = 100 }) {
    const { game: { game }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [pulse, setSetPulse] = (0,hooks_module_js_.useState)(false);
    const pulseIndexRef = (0,hooks_module_js_.useRef)(0);
    (0,hooks_module_js_.useEffect)(() => {
        const pulseArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 50, 100, 200, 500, 1000];
        const pulseIndex = pulseArr.findIndex((item) => item >= (game.coefficient || 0));
        if (pulseIndex !== pulseIndexRef.current) {
            pulseIndexRef.current = pulseIndex;
            setSetPulse(true);
            setTimeout(() => {
                setSetPulse(false);
            }, pulseDuration);
        }
    }, [game.coefficient]);
    (0,hooks_module_js_.useEffect)(() => {
        if (game.status === 0) {
            pulseIndexRef.current = 0;
        }
    }, [game.status]);
    if (game.status && game.status >= 4 && game.status <= 6)
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                end: game.status >= 5 && game.status <= 6,
                endText: game.status >= 5 && game.status <= 6 ? t('CRASH.ROUND_OVER') : null,
                pulse,
            }) }));
    return null;
}
const CrashGameCoefficient = (0,index_js_.observer)(_CrashGameCoefficient);

;// ./src/framework/components.crash/CrashGameCoefficient/index.tsx


;// ./src/framework/helpers/crash/crashInterpolation.ts
function crashInterpolation(startValue = 0, fps = 10, differenceDuration = 50, callback = () => { }, callbackEnd = () => { }) {
    const initValue = startValue;
    let currentValue = startValue;
    let endValue = startValue;
    let startTime = null;
    let progress = 0;
    let finish = false;
    let finishValue = startValue;
    let valueTime = Date.now();
    let requestFrame = 0;
    const update = (timestamp) => {
        if (!startTime)
            startTime = timestamp;
        const deltaTime = timestamp - startTime;
        const duration = Date.now() - valueTime + differenceDuration;
        if (deltaTime > duration / fps) {
            const distance = endValue - currentValue;
            progress = Math.min(deltaTime / duration, 1);
            if (finish) {
                const newDistance = endValue - finishValue;
                currentValue = currentValue + newDistance * progress;
            }
            else {
                currentValue = currentValue + distance * progress;
            }
            callback(currentValue > endValue ? endValue : currentValue);
            if (Number(currentValue.toFixed(2)) >= Number(endValue.toFixed(2)))
                callbackEnd();
            startTime = timestamp;
        }
        if (progress < 1) {
            requestFrame = requestAnimationFrame(update);
        }
    };
    const setValue = (value) => {
        startValue = currentValue;
        endValue = value;
        startTime = null;
        progress = 0;
        valueTime = Date.now();
        finish = false;
        finishValue = currentValue;
        cancelAnimationFrame(requestFrame);
        requestFrame = requestAnimationFrame(update);
    };
    const setFinish = () => {
        finish = true;
        finishValue = currentValue;
    };
    const reset = () => {
        currentValue = initValue;
        startValue = initValue;
        endValue = initValue;
        finishValue = initValue;
        startTime = null;
        progress = 1;
        finish = false;
    };
    const destroy = () => {
        cancelAnimationFrame(requestFrame);
        reset();
    };
    return { setValue, reset, setFinish, destroy };
}

;// ./src/framework/components.crash/CrashGameCoefficientRender/CrashGameCoefficientRender.tsx






function _CrashGameCoefficientRender({ children }) {
    const { game: { game }, } = (0,bootstrap.GET_STORE)();
    if (game.status && game.status < 4 && game.status > 6)
        return null;
    const childrenRef = (0,hooks_module_js_.useRef)();
    const interpolation = (0,hooks_module_js_.useRef)();
    (0,hooks_module_js_.useEffect)(() => {
        if (childrenRef.current) {
            interpolation.current = crashInterpolation(1, 10, 50, (value) => {
                if (childrenRef.current)
                    childrenRef.current.innerHTML = value.toFixed(2);
            }, () => { });
            return () => {
                interpolation.current?.destroy();
            };
        }
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        if (typeof game.coefficient === 'number')
            interpolation.current?.setValue(game.coefficient);
    }, [game.coefficient]);
    (0,hooks_module_js_.useEffect)(() => {
        if (game.status === 5) {
            interpolation.current?.setFinish();
        }
    }, [game.status]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            ref: (node) => {
                if (node instanceof HTMLElement)
                    childrenRef.current = node;
            },
        })) }));
}
const CrashGameCoefficientRender = (0,index_js_.observer)(_CrashGameCoefficientRender);

;// ./src/framework/components.crash/CrashGameCoefficientRender/index.tsx


;// ./src/framework/components.crash/CrashGameCoefficientRenderProps/CrashGameCoefficientRenderProps.tsx





function _CrashGameCoefficientRenderProps({ children }) {
    const { game: { game }, } = (0,bootstrap.GET_STORE)();
    const [coefficient, setCoefficient] = (0,hooks_module_js_.useState)(null);
    if (game.status && game.status < 4 && game.status > 6)
        return null;
    const interpolation = (0,hooks_module_js_.useRef)();
    (0,hooks_module_js_.useEffect)(() => {
        interpolation.current = crashInterpolation(1, 10, 50, (value) => {
            setCoefficient(value.toFixed(2));
        }, () => { });
        return () => {
            interpolation.current?.destroy();
        };
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        if (typeof game.coefficient === 'number')
            interpolation.current?.setValue(game.coefficient);
    }, [game.coefficient]);
    (0,hooks_module_js_.useEffect)(() => {
        if (game.status === 5) {
            interpolation.current?.setFinish();
        }
    }, [game.status]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            coefficient,
        }) }));
}
const CrashGameCoefficientRenderProps = (0,index_js_.observer)(_CrashGameCoefficientRenderProps);

;// ./src/framework/components.crash/CrashGameCoefficientRenderProps/index.tsx


;// ./src/framework/components.crash/CrashGameAwait/CrashGameAwait.tsx






function _CrashGameAwait({ children }) {
    const { game: { game: { time: awaitTime, status }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const timeRef = (0,hooks_module_js_.useRef)(0);
    const [percent, setPercent] = (0,hooks_module_js_.useState)(0);
    const [percentReverse, setPercentReverse] = (0,hooks_module_js_.useState)(100);
    const [time, setTime] = (0,hooks_module_js_.useState)('00:00');
    const [timeReverse, setTimeReverse] = (0,hooks_module_js_.useState)('00:00');
    (0,hooks_module_js_.useEffect)(() => {
        if (awaitTime === undefined || awaitTime === 0)
            return;
        if (awaitTime <= timeRef.current)
            return;
        timeRef.current = awaitTime;
        (0,animate/* animate */.i0)({
            duration: timeRef.current * 1000,
            timing: animate/* linear */.sn,
            draw: function (progress) {
                setPercent(100 * progress);
                setPercentReverse(100 - 100 * progress);
                setTime(msTosec(timeRef.current * 60 * progress) + t('COMMON.SECOND_SHORT'));
                setTimeReverse(msTosec(timeRef.current * 60 - timeRef.current * 60 * progress) + t('COMMON.SECOND_SHORT'));
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
    if (status && status >= 0 && status <= 3)
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                percent,
                percentReverse,
                time,
                timeReverse,
                timeTitle: t('CRASH.ROUND_STARTS_IN'),
                title: t('CRASH.PREPARING'),
            }) }));
    return null;
}
const CrashGameAwait = (0,index_js_.observer)(_CrashGameAwait);

;// ./src/framework/components.crash/CrashGameAwait/index.tsx


;// ./src/framework/components.crash/CrashGameCanvas/CrashGameCanvas.tsx





function _CrashGameCanvas({ children, Crash }) {
    const { game: { gameConfig, game: { status, coefficient, time }, winners, }, uiCommon: { noAnimation }, } = (0,bootstrap.GET_STORE)();
    const game = (0,hooks_module_js_.useRef)();
    const gameIsLoading = (0,hooks_module_js_.useRef)(false);
    const gameIsLoaded = (0,hooks_module_js_.useRef)(false);
    const initTimer = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        const el = document.querySelector('#crash');
        if (!el)
            return;
        if (initTimer.current) {
            clearTimeout(initTimer.current);
            initTimer.current = null;
        }
        if (noAnimation) {
            game.current?.destroy();
            game.current = undefined;
            el.innerHTML = '';
            gameIsLoaded.current = false;
            gameIsLoading.current = false;
            return;
        }
        if (game.current || gameIsLoading.current || gameIsLoaded.current)
            return;
        gameIsLoading.current = true;
        initTimer.current = window.setTimeout(() => {
            if (noAnimation) {
                gameIsLoading.current = false;
                return;
            }
            if (!game.current) {
                game.current = new Crash(el);
                gameIsLoaded.current = true;
            }
            gameIsLoading.current = false;
            initTimer.current = null;
        }, 0);
    }, [noAnimation, Crash]);
    (0,hooks_module_js_.useEffect)(() => () => {
        if (initTimer.current) {
            clearTimeout(initTimer.current);
            initTimer.current = null;
        }
        const el = document.querySelector('#crash');
        game.current?.destroy();
        game.current = undefined;
        gameIsLoaded.current = false;
        gameIsLoading.current = false;
        if (el)
            el.innerHTML = '';
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        let s = 'idle';
        if (!!status && status === 4)
            s = 'running';
        if (!!status && status < 4)
            s = 'preparing';
        if (game.current)
            game.current?.setStatus(s);
    }, [status, game.current]);
    (0,hooks_module_js_.useEffect)(() => {
        if (game.current && game.current.setTime)
            game.current?.setTime(time);
    }, [time]);
    (0,hooks_module_js_.useEffect)(() => {
        game.current?.setWinUsers(winners);
    }, [winners, noAnimation]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!game.current || !game.current.setCoefficient)
            return;
        game.current?.setCoefficient(coefficient);
    }, [coefficient]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            id: 'crash',
        })) }));
}
const CrashGameCanvas = (0,index_js_.observer)(_CrashGameCanvas);

;// ./src/framework/components.crash/CrashGameCanvas/index.tsx


;// ./src/framework/components.crash/CrashGame/CrashGame.tsx






function _CrashGame({ children }) {
    return { children };
}
const CrashGame = Object.assign((0,index_js_.observer)(_CrashGame), {
    Coefficient: Object.assign(CrashGameCoefficient, {
        Render: CrashGameCoefficientRender,
        RenderProps: CrashGameCoefficientRenderProps,
    }),
    Await: CrashGameAwait,
    Canvas: CrashGameCanvas,
});

;// ./src/framework/components.crash/CrashGame/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
// EXTERNAL MODULE: ./src/framework/helpers/currencyFix.ts
var currencyFix = __webpack_require__(80599);
// EXTERNAL MODULE: ./src/framework/helpers/ratesConverter.ts
var ratesConverter = __webpack_require__(37288);
;// ./src/framework/components.crash/CrashBetsList/CrashBetsList.tsx









const CrashBetsList_Context = (0,preact_module_js_.createContext)({});
function _CrashBetsList({ children, count }) {
    const { game: { topBets, setTopBets, currentBets, userCurrentBets, statistics, gameConfig, result, payout, payoutCoefficient, game: { status }, subscribeToBetsList, clearBetsList, }, uiCommon: { screenWidth, screenHeight }, profileCommon: { profile: { id, currency, currencySign, name, rounding }, rates, }, } = (0,bootstrap.GET_STORE)();
    const childrenRef = (0,hooks_module_js_.useRef)();
    const [childrenHeight, setChildrenHeight] = (0,hooks_module_js_.useState)(0);
    const [itemChildrenHeight, setItemChildrenHeight] = (0,hooks_module_js_.useState)(10);
    const [list, setList] = (0,hooks_module_js_.useState)([]);
    const c = typeof count === 'number' ? count : Math.floor(childrenHeight / itemChildrenHeight);
    (0,hooks_module_js_.useEffect)(() => {
        subscribeToBetsList(c);
        return () => {
            clearBetsList();
        };
    }, [c]);
    (0,hooks_module_js_.useEffect)(() => {
        return () => {
            subscribeToBetsList(0);
        };
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        setChildrenHeight(childrenRef.current?.clientHeight || 0);
    }, [screenWidth, screenHeight]);
    (0,hooks_module_js_.useEffect)(() => {
        if (status === 1 || status === 4) {
            setTopBets([]);
        }
    }, [status]);
    (0,hooks_module_js_.useEffect)(() => {
        const bets = currentBets.slice(0, c);
        const isRoundFinished = Boolean(status === 5 || status === 6 || status === 0);
        const { index: rankIndex } = (0,crashCheckRank/* default */.A)(statistics.total_count, gameConfig.ranks);
        userCurrentBets[0].bets.forEach((item, index) => {
            if (status === 5 ||
                status === 6 ||
                !item ||
                bets.find((innerItem) => innerItem.id === item.id) ||
                ((status === 0 || status === 1) && result[index] === null))
                return null;
            const newBet = {
                l: rankIndex,
                nickname: name,
                amount: item.amount,
                result: result[index],
                currency,
                isWin: result[index] === 'won',
                coefficient: item.coefficient,
                payout: payout[index],
                payoutCoefficient: payoutCoefficient[index],
                playerId: id,
                id: item.id,
            };
            bets.splice(c - ((userCurrentBets[0].bets[0] === null && index === 1 ? 0 : index) + 1), 1, newBet);
        });
        setList(bets.map((item) => ({
            id: item.id,
            playerId: item.playerId,
            rankIndex: item.l,
            name: item.nickname,
            cef: item.coefficient + 'x',
            amount: (0,shortNumber/* default */.A)((0,ratesConverter/* default */.A)(rates, item.currency, (0,currencyFix/* default */.A)(currency), item.amount), rounding),
            win: item.result === 'won'
                ? `+${(0,shortNumber/* default */.A)((0,ratesConverter/* default */.A)(rates, item.currency, (0,currencyFix/* default */.A)(currency), item.payout), rounding)}`
                : null,
            payout: item.result === 'won'
                ? (0,shortNumber/* default */.A)((0,ratesConverter/* default */.A)(rates, item.currency, (0,currencyFix/* default */.A)(currency), item.payout), rounding)
                : null,
            active: item.playerId === id,
            isWin: item.result === 'won',
            isTopBet: false,
            coefficient: item.coefficient,
            prefix: currencySign || '',
            payoutCoeff: item.payoutCoefficient,
            result: item.result,
            cellCoefficient: (() => {
                if (status <= 4 && (item.result === 'unknown' || item.result === null))
                    return null;
                if (item.result !== 'won' && isRoundFinished)
                    return null;
                if (item.result === 'won')
                    return item.payoutCoefficient + 'x';
                return null;
            })(),
            cellAmount: (() => {
                if (status === 4 && (item.result === 'unknown' || item.result === null))
                    return null;
                if (item.result !== 'won' && isRoundFinished)
                    return null;
                if (item.result === 'won')
                    return `+${currencySign}${(0,shortNumber/* default */.A)((0,ratesConverter/* default */.A)(rates, item.currency, (0,currencyFix/* default */.A)(currency), item.payout), rounding)}`;
                return `${currencySign}${(0,shortNumber/* default */.A)((0,ratesConverter/* default */.A)(rates, item.currency, (0,currencyFix/* default */.A)(currency), item.amount), rounding)}`;
            })(),
        })));
    }, [currentBets, topBets, itemChildrenHeight, childrenHeight, count, status]);
    return ((0,jsxRuntime_module/* jsx */.Y)(CrashBetsList_Context.Provider, { value: { setItemChildrenHeight, list }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ list })).map((child) => (0,preact_module_js_.cloneElement)(child, {
                ref: (node) => {
                    if (node instanceof HTMLElement)
                        childrenRef.current = node;
                },
            })) }) }));
}
const CrashBetsList = (0,index_js_.observer)(_CrashBetsList);

;// ./src/framework/components.crash/CrashBetsList/index.tsx


;// ./src/framework/components.crash/CrashBetsListItem/CrashBetsListItem.tsx






function _CrashBetsListItem({ children }) {
    const { uiCommon: { screenWidth, screenHeight }, } = (0,bootstrap.GET_STORE)();
    const { setItemChildrenHeight } = (0,hooks_module_js_.useContext)(CrashBetsList_Context);
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
const CrashBetsListItem = (0,index_js_.observer)(_CrashBetsListItem);

;// ./src/framework/components.crash/CrashBetsListItem/index.tsx


;// ./src/framework/components.crash/CrashBetsListItemStats/CrashBetsListItemStats.tsx






function _CrashBetsListItemStats({ children, index, delayOpen, delayClose, onClick = () => { } }) {
    const { uiCommon: { screenWidth, screenHeight, setModal, modal }, } = (0,bootstrap.GET_STORE)();
    const { setItemChildrenHeight, list } = (0,hooks_module_js_.useContext)(CrashBetsList_Context);
    const childrenRef = (0,hooks_module_js_.useRef)();
    (0,hooks_module_js_.useEffect)(() => {
        setItemChildrenHeight(childrenRef.current?.offsetHeight || 10);
    }, [screenWidth, screenHeight]);
    const handleClick = () => {
        setModal({
            modalName: 'betsPlayerStatistic',
            render: true,
            delayOpen,
            delayClose,
            data: {
                playerId: list[index].playerId,
                name: list[index].name,
                rankIndex: list[index].rankIndex,
            },
            callbackOnClose: () => { },
        });
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            ref: (node) => {
                if (node instanceof HTMLElement)
                    childrenRef.current = node;
            },
            onClick: handleClick,
        })) }));
}
const CrashBetsListItemStats = (0,index_js_.observer)(_CrashBetsListItemStats);

;// ./src/framework/components.crash/CrashBetsListItemStats/index.tsx


;// ./src/framework/components.crash/CrashBets/CrashBets.tsx







function _CrashBets({ children }) {
    const { game: { betsCount, game: { status }, winUsersCount, betsAmountSum, cashoutTotal, }, profileCommon: { profile: { currencySign }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            count: betsCount,
            countAndResult: `${status === 4 || status === 5 ? `${winUsersCount}/` : ''}${betsCount}`,
            titleCount: t('COMMON.BETS'),
            totalBet: betsAmountSum,
            titleTotalBet: t('COMMON.TOTAL_BET'),
            totalCashout: cashoutTotal,
            titleTotalCashout: t('COMMON.TOTAL_GAINED'),
            currencySign: currencySign,
        }) }));
}
const CrashBets = Object.assign((0,index_js_.observer)(_CrashBets), {
    List: Object.assign(CrashBetsList, {
        Item: Object.assign(CrashBetsListItem, {
            Stats: CrashBetsListItemStats,
        }),
    }),
});

;// ./src/framework/components.crash/CrashBets/index.tsx


;// ./src/framework/components.crash/CrashPlayerModal/CrashPlayerModal.tsx



function _CrashPlayerModal({ children, onClose = () => { } }) {
    const { uiCommon: { modal, setModal }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            show: modal['betsPlayerStatistic']?.render,
            open: modal['betsPlayerStatistic']?.open,
            close: modal['betsPlayerStatistic']?.close,
            onClose: (value) => {
                onClose();
                setModal({
                    modalName: 'betsPlayerStatistic',
                    render: value,
                });
            },
        }) }));
}
const CrashPlayerModal = (0,index_js_.observer)(_CrashPlayerModal);

;// ./src/framework/components.crash/CrashPlayerModal/index.tsx


;// ./src/framework/components.crash/CrashPlayerStatistics/CrashPlayerStatistics.tsx







function _CrashPlayerStatistics({ children }) {
    const { game: { gameConfig }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const { avgCoefficient, maxCoefficient, total_count } = (0,hooks_module_js_.useContext)(CrashPlayer_Context);
    const avgCoefficientValue = !avgCoefficient || avgCoefficient === null ? 0 : avgCoefficient;
    const maxCoefficientValue = !maxCoefficient || maxCoefficient === null ? 0 : maxCoefficient;
    const totalCountValue = !total_count || total_count === null ? 0 : total_count;
    function millisecondsToTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const seconds = totalSeconds % 60;
        const totalMinutes = Math.floor(totalSeconds / 60);
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);
        return {
            hours,
            minutes,
            seconds,
        };
    }
    const fligthHours = (() => {
        const estimated_rounds = totalCountValue / 1.5;
        const flight_ms = estimated_rounds * 20 * 1000;
        const { hours, minutes, seconds } = millisecondsToTime(flight_ms);
        return `${hours ? `${hours}h ` : ''}${minutes ? `${minutes}m ` : ''}${seconds ? `${seconds}s` : '0s'}`;
    })();
    const fligthsUntilRank = (() => {
        const { exp, toExp } = (0,crashCheckRank/* default */.A)(totalCountValue, gameConfig.ranks);
        return String(toExp + 1 - exp);
    })();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            fligths: String(totalCountValue),
            fligthsTitle: t('CRASH.COMPLETED_FLIGHTS'),
            fligthHours: fligthHours,
            fligthHoursTitle: t('CRASH.TIME_IN_FLIGHT'),
            maxMultiplier: `x${maxCoefficientValue.toFixed(2)}`,
            maxMultiplierTitle: t('CRASH.MAX_X'),
            averageMultiplier: `x${avgCoefficientValue.toFixed(2)}`,
            averageMultiplierTitle: t('CRASH.AVERAGE_X'),
            fligthsUntilRank: fligthsUntilRank,
            fligthsUntilRankTitle: t('FLIGHTS_UNTIL_RANK'),
        }) }));
}
const CrashPlayerStatistics = (0,index_js_.observer)(_CrashPlayerStatistics);

;// ./src/framework/components.crash/CrashPlayerStatistics/index.tsx


;// ./src/framework/components.crash/CrashPlayerName/CrashPlayerName.tsx





function _CrashPlayerName({ children }) {
    const { name } = (0,hooks_module_js_.useContext)(CrashPlayer_Context);
    const { t } = (0,es_index_js_.useTranslation)();
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ name, nameTitle: t('COMMON.NICKNAME') }) });
}
const CrashPlayerName = (0,index_js_.observer)(_CrashPlayerName);

;// ./src/framework/components.crash/CrashPlayerName/index.tsx


;// ./src/framework/components.crash/CrashPlayerRank/CrashPlayerRank.tsx








const CrashPlayerRank_timingFunction = {
    linear: animate/* linear */.sn,
    makeEaseOut: (0,animate/* makeEaseOut */.L4)(animate/* easeOutCubic */.p_),
    easeOutCubic: animate/* easeOutCubic */.p_,
};
function _CrashPlayerRank({ children }) {
    const { total_count = 0 } = (0,hooks_module_js_.useContext)(CrashPlayer_Context);
    const { game: { gameConfig }, } = (0,bootstrap.GET_STORE)();
    const rank = (0,hooks_module_js_.useRef)({
        rank: '',
        rankIndex: 1,
        rankNext: '',
        rankIndexNext: 2,
        exp: 0,
        toExp: 0,
        up: false,
        fligthsToRank: 0,
    });
    const [percent, setPercent] = (0,hooks_module_js_.useState)(-1);
    (0,hooks_module_js_.useEffect)(() => {
        const { index, name, exp, toExp } = (0,crashCheckRank/* default */.A)(total_count, gameConfig.ranks);
        const rankNext = gameConfig.ranks[index] ? gameConfig.ranks[index].name : '';
        rank.current = {
            rank: name,
            rankIndex: index,
            rankNext,
            rankIndexNext: index + 1,
            exp,
            toExp,
            up: index > rank.current.rankIndex,
            fligthsToRank: toExp + 1 - exp,
        };
        const to = (exp / toExp) * 100;
        if (!total_count) {
            setPercent(0);
        }
        (0,animate/* animate */.i0)({
            duration: gameConfig.rank.duration,
            timing: CrashPlayerRank_timingFunction[gameConfig.rank.timingFunction],
            draw: function (progress) {
                const p = percent + (to - percent) * progress;
                setPercent(p);
            },
        });
    }, [total_count]);
    const { t } = (0,es_index_js_.useTranslation)();
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ ...rank.current, percent, title: t('CRASH.COMPLETED_FLIGHTS') }) });
}
const CrashPlayerRank = (0,index_js_.observer)(_CrashPlayerRank);

;// ./src/framework/components.crash/CrashPlayerRank/index.tsx


;// ./src/framework/components.crash/CrashPlayer/CrashPlayer.tsx









const CrashPlayer_Context = (0,preact_module_js_.createContext)({});
function _CrashPlayer({ children }) {
    const { game: { fetchPlayerStatistics, statistics }, uiCommon: { modal }, profileCommon: { profile: { playerId: userId }, }, } = (0,bootstrap.GET_STORE)();
    const [player, setPlayer] = (0,hooks_module_js_.useState)(null);
    const [loading, setLoading] = (0,hooks_module_js_.useState)(true);
    const { data } = modal['betsPlayerStatistic'];
    if (!data)
        return null;
    const { playerId, name, rankIndex } = data;
    (0,hooks_module_js_.useEffect)(() => {
        const isUser = playerId === userId;
        if (isUser) {
            setPlayer(statistics);
            setLoading(false);
            return;
        }
        fetchPlayerStatistics(playerId).then((playerStatistics) => {
            setPlayer({
                ...playerStatistics,
            });
            setLoading(false);
        });
    }, []);
    return ((0,jsxRuntime_module/* jsx */.Y)(CrashPlayer_Context.Provider, { value: { ...player, name, rankIndex }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ loading }) }) }));
}
const CrashPlayer = Object.assign((0,index_js_.observer)(_CrashPlayer), {
    Modal: CrashPlayerModal,
    Name: CrashPlayerName,
    Rank: CrashPlayerRank,
    Statistics: CrashPlayerStatistics,
});

;// ./src/framework/components.crash/CrashPlayer/index.tsx


;// ./src/framework/components.crash/CrashLeaderboardPlayerStatistics/CrashLeaderboardPlayerStatistics.tsx







function _CrashLeaderboardPlayerStatistics({ children }) {
    const { game: { gameConfig }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const { avgCoefficient, maxCoefficient, total_count } = (0,hooks_module_js_.useContext)(CrashLeaderboardPlayer_Context);
    const avgCoefficientValue = !avgCoefficient || avgCoefficient === null ? 0 : avgCoefficient;
    const maxCoefficientValue = !maxCoefficient || maxCoefficient === null ? 0 : maxCoefficient;
    const totalCountValue = !total_count || total_count === null ? 0 : total_count;
    function millisecondsToTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const seconds = totalSeconds % 60;
        const totalMinutes = Math.floor(totalSeconds / 60);
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);
        return {
            hours,
            minutes,
            seconds,
        };
    }
    const fligthHours = (() => {
        const estimated_rounds = totalCountValue / 1.5;
        const flight_ms = estimated_rounds * 20 * 1000;
        const { hours, minutes, seconds } = millisecondsToTime(flight_ms);
        return `${hours ? `${hours}h ` : ''}${minutes ? `${minutes}m ` : ''}${seconds ? `${seconds}s` : '0s'}`;
    })();
    const fligthsUntilRank = (() => {
        const { exp, toExp } = (0,crashCheckRank/* default */.A)(totalCountValue, gameConfig.ranks);
        return String(toExp + 1 - exp);
    })();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            fligths: String(totalCountValue),
            fligthsTitle: t('CRASH.COMPLETED_FLIGHTS'),
            fligthHours: fligthHours,
            fligthHoursTitle: t('CRASH.TIME_IN_FLIGHT'),
            maxMultiplier: `x${maxCoefficientValue.toFixed(2)}`,
            maxMultiplierTitle: t('CRASH.MAX_X'),
            averageMultiplier: `x${avgCoefficientValue.toFixed(2)}`,
            averageMultiplierTitle: t('CRASH.AVERAGE_X'),
            fligthsUntilRank: fligthsUntilRank,
            fligthsUntilRankTitle: t('FLIGHTS_UNTIL_RANK'),
        }) }));
}
const CrashLeaderboardPlayerStatistics = (0,index_js_.observer)(_CrashLeaderboardPlayerStatistics);

;// ./src/framework/components.crash/CrashLeaderboardPlayerStatistics/index.tsx


;// ./src/framework/components.crash/CrashLeaderboardPlayerRank/CrashLeaderboardPlayerRank.tsx








const CrashLeaderboardPlayerRank_timingFunction = {
    linear: animate/* linear */.sn,
    makeEaseOut: (0,animate/* makeEaseOut */.L4)(animate/* easeOutCubic */.p_),
    easeOutCubic: animate/* easeOutCubic */.p_,
};
function _CrashLeaderboardPlayerRank({ children }) {
    const { total_count = 0 } = (0,hooks_module_js_.useContext)(CrashLeaderboardPlayer_Context);
    const { game: { gameConfig }, } = (0,bootstrap.GET_STORE)();
    const rank = (0,hooks_module_js_.useRef)({
        rank: '',
        rankIndex: 1,
        rankNext: '',
        rankIndexNext: 2,
        exp: 0,
        toExp: 0,
        up: false,
        fligthsToRank: 0,
    });
    const [percent, setPercent] = (0,hooks_module_js_.useState)(-1);
    (0,hooks_module_js_.useEffect)(() => {
        const { index, name, exp, toExp } = (0,crashCheckRank/* default */.A)(total_count, gameConfig.ranks);
        const rankNext = gameConfig.ranks[index] ? gameConfig.ranks[index].name : '';
        rank.current = {
            rank: name,
            rankIndex: index,
            rankNext,
            rankIndexNext: index + 1,
            exp,
            toExp,
            up: index > rank.current.rankIndex,
            fligthsToRank: toExp + 1 - exp,
        };
        const to = (exp / toExp) * 100;
        if (!total_count) {
            setPercent(0);
        }
        (0,animate/* animate */.i0)({
            duration: gameConfig.rank.duration,
            timing: CrashLeaderboardPlayerRank_timingFunction[gameConfig.rank.timingFunction],
            draw: function (progress) {
                const p = percent + (to - percent) * progress;
                setPercent(p);
            },
        });
    }, [total_count]);
    const { t } = (0,es_index_js_.useTranslation)();
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ ...rank.current, percent, title: t('CRASH.COMPLETED_FLIGHTS') }) });
}
const CrashLeaderboardPlayerRank = (0,index_js_.observer)(_CrashLeaderboardPlayerRank);

;// ./src/framework/components.crash/CrashLeaderboardPlayerRank/index.tsx


;// ./src/framework/components.crash/CrashLeaderboardPlayer/CrashLeaderboardPlayer.tsx







const CrashLeaderboardPlayer_Context = (0,preact_module_js_.createContext)({});
function _CrashLeaderboardPlayer({ children }) {
    const { uiCommon: { modal }, } = (0,bootstrap.GET_STORE)();
    const [loading, setLoading] = (0,hooks_module_js_.useState)(true);
    const [stats, setStats] = (0,hooks_module_js_.useState)(null);
    const { data } = modal['leaderboardPlayerStatistic'];
    if (!data)
        return null;
    const { playerId, name, rankIndex, gameId, customerId, apiInstance } = data;
    const getStats = (params) => apiInstance().get(`/player/short-game-stat`, { params });
    (0,hooks_module_js_.useEffect)(() => {
        const getData = async () => {
            try {
                const { data } = await getStats({
                    customerId,
                    playerId,
                    gameId,
                });
                setStats(data);
                setLoading(false);
            }
            catch (error) {
                setLoading(false);
                console.log('getLeaderboardPlayerStatsError', error);
            }
        };
        getData();
    }, []);
    return ((0,jsxRuntime_module/* jsx */.Y)(CrashLeaderboardPlayer_Context.Provider, { value: {
            ...{
                avgCoefficient: stats?.avgCoefficient,
                maxCoefficient: stats?.maxCoefficient,
                total_count: stats?.betsCount,
                wons_count: stats?.winsCount,
            },
            name,
            rankIndex,
        }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ loading, name }) }) }));
}
const CrashLeaderboardPlayer = Object.assign((0,index_js_.observer)(_CrashLeaderboardPlayer), {
    Rank: CrashLeaderboardPlayerRank,
    Statistics: CrashLeaderboardPlayerStatistics,
});

;// ./src/framework/components.crash/CrashLeaderboardPlayer/index.tsx


;// ./src/framework/components.crash/CrashWin/CrashWin.tsx






function _CrashWin({ children }) {
    const { game: { winScreen, gameConfig }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [list, setList] = (0,hooks_module_js_.useState)([]);
    const destroyTimeout = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        if (winScreen?.result !== 'won')
            return;
        const item = {
            title: t('MINES.YOU_WIN'),
            index: winScreen.index,
            amount: winScreen.amount,
            payout: winScreen.payout,
            titleCoefficient: t('COMMON.MULTIPLIER'),
            coefficient: winScreen.coefficient,
            coefficientX: `${winScreen.coefficient} x`,
            amountShort: (0,shortNumber/* default */.A)(winScreen.amount, rounding),
            payoutShort: (0,shortNumber/* default */.A)(winScreen.payout, rounding),
            currencySign,
            amountShortCurrency: `${currencySign} ${(0,shortNumber/* default */.A)(winScreen.amount, rounding)}`,
            payoutShortCurrency: `${currencySign} ${(0,shortNumber/* default */.A)(winScreen.payout, rounding)}`,
            duration: gameConfig.winDuration,
        };
        setList([...list, item]);
        if (destroyTimeout.current)
            clearTimeout(destroyTimeout.current);
        destroyTimeout.current = setTimeout(() => {
            setList([]);
        }, gameConfig.winDuration);
    }, [winScreen]);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: list.map((item) => children(item)) });
}
const CrashWin = (0,index_js_.observer)(_CrashWin);

;// ./src/framework/components.crash/CrashWin/index.tsx


;// ./src/framework/components.crash/CrashCatchCoefficient/CrashCatchCoefficient.tsx




function _CrashCatchCoefficient({ children, list = [2], duration = [null], onChange = () => { } }) {
    const { game: { game: { coefficient, status }, }, } = (0,bootstrap.GET_STORE)();
    const [index, setIndex] = (0,hooks_module_js_.useState)(-1);
    const indexTimeout = (0,hooks_module_js_.useRef)(null);
    const history = (0,hooks_module_js_.useRef)([]);
    (0,hooks_module_js_.useEffect)(() => {
        if (status === 0) {
            clearTimeout(indexTimeout.current);
            setIndex(-1);
            history.current = [];
        }
    }, [status]);
    (0,hooks_module_js_.useEffect)(() => {
        let current = -1;
        for (let i = 0; i < list.length; i++) {
            if (coefficient >= list[i]) {
                current = i;
            }
        }
        if (history.current.includes(current) || indexTimeout.current) {
            return;
        }
        if (current !== index) {
            setIndex(current);
            history.current.push(current);
            onChange(current);
        }
        if (current !== index && typeof duration[current] === 'number') {
            indexTimeout.current = setTimeout(() => {
                setIndex(-1);
                indexTimeout.current = null;
            }, duration[current]);
        }
    }, [coefficient]);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ index }) });
}
const CrashCatchCoefficient = (0,index_js_.observer)(_CrashCatchCoefficient);

;// ./src/framework/components.crash/CrashCatchCoefficient/index.tsx


;// ./src/framework/components.crash/CrashSliderLeft/CrashSliderLeft.tsx




function _CrashSliderLeft({ children, onClick = () => { } }) {
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
const CrashSliderLeft = _CrashSliderLeft;

;// ./src/framework/components.crash/CrashSliderLeft/index.tsx


;// ./src/framework/components.crash/CrashSliderRight/CrashSliderRight.tsx




function _CrashSliderRight({ children, onClick = () => { } }) {
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
const CrashSliderRight = _CrashSliderRight;

;// ./src/framework/components.crash/CrashSliderRight/index.tsx


;// ./src/framework/components.crash/CrashSlider/CrashSlider.tsx







const ContextButtons = (0,preact_module_js_.createContext)({});
function _CrashSlider({ children, isFinite = false, index }) {
    const { game: { placeBetStatuses, setCurrentAmountId, currentAmountIds, amountsMap, setBetsAmount, uiLockedStatuses }, freebetsCommon: { freebetEnabled }, profileCommon: { profile: { currencySign }, }, } = (0,bootstrap.GET_STORE)();
    (0,hooks_module_js_.useEffect)(() => {
        setBetsAmount(amountsMap[currentAmountIds[index]] + '', index);
    }, []);
    const handleLeft = () => {
        setCurrentAmountId(currentAmountIds[index] === 0 ? (isFinite ? 0 : amountsMap.length - 1) : currentAmountIds[index] - 1, index);
        setBetsAmount(amountsMap[currentAmountIds[index]] + '', index);
    };
    const handleRight = () => {
        setCurrentAmountId(currentAmountIds[index] === amountsMap.length - 1
            ? isFinite
                ? currentAmountIds[index]
                : 0
            : currentAmountIds[index] + 1, index);
        setBetsAmount(amountsMap[currentAmountIds[index]] + '', index);
    };
    const props = {
        position: currentAmountIds[index],
        count: amountsMap.length,
        disabled: uiLockedStatuses[index] ||
            placeBetStatuses[index] === 'loading' ||
            placeBetStatuses[index] === 'placed' ||
            freebetEnabled,
        values: amountsMap,
        currencySign,
        hidden: freebetEnabled,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,jsxRuntime_module/* jsx */.Y)(ContextButtons.Provider, { value: {
                handleRight,
                handleLeft,
                disabled: placeBetStatuses[index] === 'loading' || placeBetStatuses[index] === 'placed',
            }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }) }));
}
const CrashSlider = (0,index_js_.observer)(Object.assign(_CrashSlider, {
    Left: CrashSliderLeft,
    Right: CrashSliderRight,
}));

;// ./src/framework/components.crash/CrashSlider/index.tsx


;// ./src/framework/components.crash/export.ts















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

/***/ 83226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkRank = (rank, ranks) => {
    if (rank === 0)
        return {
            name: ranks[0].name,
            index: 1,
            exp: ranks[0].from,
            toExp: ranks[0].to,
        };
    let n = '';
    let i = 0;
    let exp = 0;
    let toExp = 0;
    ranks.forEach(({ from, to, name }, index) => {
        const nextRank = ranks[index + 1];
        if (nextRank && nextRank.from === to && rank > from && rank <= to) {
            n = name;
            i = index + 1;
            exp = rank - from;
            toExp = to - from;
            return;
        }
        if (rank >= from && rank <= to) {
            n = name;
            i = index + 1;
            exp = rank - from;
            toExp = to - from;
        }
    });
    return { name: n, index: i, exp, toExp };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkRank);


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

/***/ 25490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* binding */ postMessageListener)
});

;// ./src/framework/helpers/isJSON.ts
const isJSON = (str) => {
    try {
        return JSON.parse(str) && !!str;
    }
    catch (e) {
        return false;
    }
};
/* harmony default export */ const helpers_isJSON = (isJSON);

;// ./src/framework/helpers/postMessageListener.ts

function postMessageListener(callbackMap) {
    function handler(event) {
        let { type, data } = event.data || {};
        if (helpers_isJSON(event.data)) {
            const parsedData = JSON.parse(event.data);
            type = parsedData.type;
            data = parsedData.data;
            if (parsedData.height) {
                try {
                    callbackMap[type](parsedData.height);
                }
                catch (error) {
                    console.error(`Error handling message type "${type}":`, error);
                }
            }
            return;
        }
        if (!type || !(type in callbackMap))
            return;
        try {
            callbackMap[type](data);
        }
        catch (err) {
            console.error(`Error handling message type "${type}":`, err);
        }
    }
    window.addEventListener('message', handler);
    return () => {
        window.removeEventListener('message', handler);
    };
}


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