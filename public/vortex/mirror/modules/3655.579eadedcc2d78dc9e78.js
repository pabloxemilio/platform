"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2302,3655,7402,7518],{

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

/***/ 44040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  HoldCrashButton: () => (/* reexport */ HoldCrashButton),
  HoldCrashChooseCharacter: () => (/* reexport */ HoldCrashChooseCharacter),
  HoldCrashChooseCharacterSlider: () => (/* reexport */ HoldCrashChooseCharacterSlider),
  HoldCrashGameStatus: () => (/* reexport */ HoldCrashGameStatus),
  HoldCrashRender: () => (/* reexport */ HoldCrashRender),
  HoldCrashSlider: () => (/* reexport */ HoldCrashSlider),
  HoldCrashWin: () => (/* reexport */ HoldCrashWin)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
;// ./src/framework/components.holdcrash/HoldCrashButtonPlay/HoldCrashButtonPlay.tsx







function _HoldCrashButtonPlay({ children, loopMusicIds = null, onStart = () => { }, onEnd = () => { }, onLose = () => { }, forceStart = false, forceEnd = false, }) {
    const { button, disabled } = (0,hooks_module_js_.useContext)(Context);
    const { game: { placebetProcessing, placeBet, cashout, betPlaced, gameStatus, setMouseUp, winLevel, gameResult, choosedCharacter, preChoosedCharacter, setChoosedCharacter, gameConfig, showResults, showPumpNotif, setShowPumpNotif, coefficient, setNotifLevel, notifLevel, gameStarted, startGame, }, audioCommon: { playAudio, stopAudioByIdSmooth }, } = (0,bootstrap.GET_STORE)();
    const [mouseDown, setMouseDown] = (0,hooks_module_js_.useState)(false);
    const [playedAudio, setPlayedAudio] = (0,hooks_module_js_.useState)(null);
    const soundDelay = (0,hooks_module_js_.useRef)(null);
    if (button !== 'play')
        return null;
    (0,hooks_module_js_.useEffect)(() => {
        forceStart && handleDown();
    }, [forceStart]);
    (0,hooks_module_js_.useEffect)(() => {
        forceEnd && handleUp();
    }, [forceEnd]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!betPlaced || !loopMusicIds)
            return null;
        const level = winLevel === 3 ? 2 : winLevel;
        winLevel > 0 && stopAudioByIdSmooth(loopMusicIds[level - 1]);
        playAudio(loopMusicIds[level], true);
        setPlayedAudio(level);
    }, [winLevel, betPlaced]);
    (0,hooks_module_js_.useEffect)(() => {
        !showResults && notifLevel > 0 && !localStorageHelper/* default */.A.get('isNotifShown') && setShowPumpNotif(true);
    }, [showResults]);
    (0,hooks_module_js_.useEffect)(() => {
        if (gameStatus === 'result') {
            if (gameResult === 'won' && !localStorageHelper/* default */.A.get('isNotifShown')) {
                coefficient <= gameConfig.minCoeffToCashout + 0.04 && setNotifLevel(notifLevel + 1);
            }
            if (coefficient >= 1.2) {
                setNotifLevel(0);
                localStorageHelper/* default */.A.set('isNotifShown', true);
            }
            loopMusicIds && stopAudioByIdSmooth(loopMusicIds[playedAudio], gameConfig.loopAudioSmoothOffTimeout ?? 800);
            if (gameResult === 'lost') {
                soundDelay.current && clearTimeout(soundDelay.current);
                soundDelay.current = setTimeout(() => {
                    onLose(choosedCharacter);
                }, gameConfig.onLoseSoundDelay ?? 100);
            }
            setPlayedAudio(null);
        }
    }, [gameStatus]);
    const handleDown = async (e) => {
        e && e.preventDefault();
        setMouseUp(false);
        setMouseDown(true);
        setShowPumpNotif(false);
        if (disabled || gameStatus === 'crashed' || betPlaced)
            return false;
        choosedCharacter === null && typeof preChoosedCharacter === 'number' && setChoosedCharacter(preChoosedCharacter);
        placeBet();
        onStart(choosedCharacter ?? preChoosedCharacter);
    };
    const handleUp = (e) => {
        setMouseUp(true);
        setMouseDown(false);
        if (placebetProcessing || gameStatus !== 'running' || disabled)
            return false;
        cashout();
        onEnd(choosedCharacter);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ level: winLevel })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onMouseDown: handleDown,
            onMouseUp: handleUp,
            onPointerDown: handleDown,
            onPointerUp: handleUp,
            onTouchMove: (e) => e.preventDefault(),
            onContextMenu: handleDown,
            onMouseLeave: (e) => mouseDown && handleUp(e),
            onPointerLeave: (e) => mouseDown && handleUp(e),
            onDblClick: (e) => e.preventDefault(),
            onClick: (e) => e.preventDefault(),
        })) }));
}
const HoldCrashButtonPlay = (0,index_js_.observer)(_HoldCrashButtonPlay);

;// ./src/framework/components.holdcrash/HoldCrashButtonPlay/index.tsx


;// ./src/framework/components.holdcrash/HoldCrashButtonPlayEvent/HoldCrashButtonPlayEvent.tsx







function _HoldCrashButtonPlayEvent({ children, loopMusicIds = null, onStart = () => { }, onEnd = () => { }, onLose = () => { }, }) {
    const { disabled } = (0,hooks_module_js_.useContext)(Context);
    const { game: { placebetProcessing, placeBet, cashout, betPlaced, gameStatus, setMouseUp, winLevel, gameResult, choosedCharacter, preChoosedCharacter, setChoosedCharacter, gameConfig, showResults, showPumpNotif, setShowPumpNotif, coefficient, setNotifLevel, notifLevel, }, audioCommon: { playAudio, stopAudioByIdSmooth }, } = (0,bootstrap.GET_STORE)();
    const [mouseDown, setMouseDown] = (0,hooks_module_js_.useState)(false);
    const [playedAudio, setPlayedAudio] = (0,hooks_module_js_.useState)(null);
    const soundDelay = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        if (!betPlaced || !loopMusicIds)
            return null;
        const level = winLevel === 3 ? 2 : winLevel;
        winLevel > 0 && stopAudioByIdSmooth(loopMusicIds[level - 1]);
        playAudio(loopMusicIds[level], true);
        setPlayedAudio(level);
    }, [winLevel, betPlaced]);
    (0,hooks_module_js_.useEffect)(() => {
        !showResults && notifLevel > 0 && !localStorageHelper/* default */.A.get('isNotifShown') && setShowPumpNotif(true);
    }, [showResults]);
    (0,hooks_module_js_.useEffect)(() => {
        if (gameStatus === 'result') {
            if (gameResult === 'won' && !localStorageHelper/* default */.A.get('isNotifShown')) {
                coefficient <= gameConfig.minCoeffToCashout + 0.04 && setNotifLevel(notifLevel + 1);
            }
            if (coefficient >= 1.2) {
                setNotifLevel(0);
                localStorageHelper/* default */.A.set('isNotifShown', true);
            }
            loopMusicIds && stopAudioByIdSmooth(loopMusicIds[playedAudio], gameConfig.loopAudioSmoothOffTimeout ?? 800);
            if (gameResult === 'lost') {
                soundDelay.current && clearTimeout(soundDelay.current);
                soundDelay.current = setTimeout(() => {
                    onLose(choosedCharacter);
                }, gameConfig.onLoseSoundDelay ?? 100);
            }
            setPlayedAudio(null);
        }
    }, [gameStatus]);
    const handleDown = (e) => {
        e.preventDefault();
        setMouseUp(false);
        setMouseDown(true);
        setShowPumpNotif(false);
        if (disabled || gameStatus === 'crashed' || betPlaced)
            return false;
        choosedCharacter === null && typeof preChoosedCharacter === 'number' && setChoosedCharacter(preChoosedCharacter);
        placeBet();
        onStart(choosedCharacter ?? preChoosedCharacter);
    };
    const handleUp = (e) => {
        setMouseUp(true);
        setMouseDown(false);
        if (placebetProcessing || gameStatus !== 'running' || disabled)
            return false;
        cashout();
        onEnd(choosedCharacter);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ level: winLevel })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onMouseDown: handleDown,
            onMouseUp: handleUp,
            onPointerDown: handleDown,
            onPointerUp: handleUp,
            onTouchMove: (e) => e.preventDefault(),
            onContextMenu: handleDown,
            onMouseLeave: (e) => mouseDown && handleUp(e),
            onPointerLeave: (e) => mouseDown && handleUp(e),
            onDblClick: (e) => e.preventDefault(),
            onClick: (e) => e.preventDefault(),
        })) }));
}
const HoldCrashButtonPlayEvent = (0,index_js_.observer)(_HoldCrashButtonPlayEvent);

;// ./src/framework/components.holdcrash/HoldCrashButtonPlayEvent/index.tsx


;// ./src/framework/components.holdcrash/HoldCrashButtonFreebet/HoldCrashButtonFreebet.tsx







function _HoldCrashButtonFreebet({ children, loopMusicIds = null, onStart = () => { }, onEnd = () => { }, onLose = () => { }, forceStart = false, forceEnd = false, }) {
    const { button, disabled } = (0,hooks_module_js_.useContext)(Context);
    const { game: { placebetProcessing, placeBet, cashout, betPlaced, gameStatus, setMouseUp, winLevel, gameResult, choosedCharacter, preChoosedCharacter, setChoosedCharacter, gameConfig, showResults, showPumpNotif, setShowPumpNotif, coefficient, setNotifLevel, notifLevel, }, audioCommon: { playAudio, stopAudioByIdSmooth }, } = (0,bootstrap.GET_STORE)();
    const [mouseDown, setMouseDown] = (0,hooks_module_js_.useState)(false);
    const [playedAudio, setPlayedAudio] = (0,hooks_module_js_.useState)(null);
    const soundDelay = (0,hooks_module_js_.useRef)(null);
    if (button !== 'freebet')
        return null;
    (0,hooks_module_js_.useEffect)(() => {
        forceStart && handleDown();
    }, [forceStart]);
    (0,hooks_module_js_.useEffect)(() => {
        forceEnd && handleUp();
    }, [forceEnd]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!betPlaced || !loopMusicIds)
            return null;
        const level = winLevel === 3 ? 2 : winLevel;
        winLevel > 0 && stopAudioByIdSmooth(loopMusicIds[level - 1]);
        playAudio(loopMusicIds[level], true);
        setPlayedAudio(level);
    }, [winLevel, betPlaced]);
    (0,hooks_module_js_.useEffect)(() => {
        !showResults && notifLevel > 0 && !localStorageHelper/* default */.A.get('isNotifShown') && setShowPumpNotif(true);
    }, [showResults]);
    (0,hooks_module_js_.useEffect)(() => {
        if (gameStatus === 'result') {
            if (gameResult === 'won' && !localStorageHelper/* default */.A.get('isNotifShown')) {
                coefficient <= gameConfig.minCoeffToCashout + 0.04 && setNotifLevel(notifLevel + 1);
            }
            if (coefficient >= 1.2) {
                setNotifLevel(0);
                localStorageHelper/* default */.A.set('isNotifShown', true);
            }
            loopMusicIds && stopAudioByIdSmooth(loopMusicIds[playedAudio], gameConfig.loopAudioSmoothOffTimeout ?? 800);
            if (gameResult === 'lost') {
                soundDelay.current && clearTimeout(soundDelay.current);
                soundDelay.current = setTimeout(() => {
                    onLose(choosedCharacter);
                }, gameConfig.onLoseSoundDelay ?? 100);
            }
            setPlayedAudio(null);
        }
    }, [gameStatus]);
    const handleDown = (e) => {
        e?.preventDefault();
        setMouseUp(false);
        setMouseDown(true);
        setShowPumpNotif(false);
        if (disabled || gameStatus === 'crashed' || betPlaced)
            return false;
        choosedCharacter === null && typeof preChoosedCharacter === 'number' && setChoosedCharacter(preChoosedCharacter);
        placeBet(true);
        onStart(choosedCharacter ?? preChoosedCharacter);
    };
    const handleUp = (e) => {
        setMouseUp(true);
        setMouseDown(false);
        if (placebetProcessing || gameStatus !== 'running' || disabled)
            return false;
        cashout(true);
        onEnd(choosedCharacter);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children()).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onMouseDown: handleDown,
            onMouseUp: handleUp,
            onPointerDown: handleDown,
            onPointerUp: handleUp,
            onTouchMove: (e) => e.preventDefault(),
            onContextMenu: handleDown,
            onMouseLeave: (e) => mouseDown && handleUp(e),
            onPointerLeave: (e) => mouseDown && handleUp(e),
            onDblClick: (e) => e.preventDefault(),
            onClick: (e) => e.preventDefault(),
        })) }));
}
const HoldCrashButtonFreebet = (0,index_js_.observer)(_HoldCrashButtonFreebet);

;// ./src/framework/components.holdcrash/HoldCrashButtonFreebet/index.tsx


;// ./src/framework/components.holdcrash/HoldCrashButtonFreebetEvent/HoldCrashButtonFreebetEvent.tsx







function _HoldCrashButtonFreebetEvent({ children, loopMusicIds = null, onStart = () => { }, onEnd = () => { }, onLose = () => { }, }) {
    const { disabled } = (0,hooks_module_js_.useContext)(Context);
    const { game: { placebetProcessing, placeBet, cashout, betPlaced, gameStatus, setMouseUp, winLevel, gameResult, choosedCharacter, preChoosedCharacter, setChoosedCharacter, gameConfig, showResults, showPumpNotif, setShowPumpNotif, coefficient, setNotifLevel, notifLevel, }, audioCommon: { playAudio, stopAudioByIdSmooth }, } = (0,bootstrap.GET_STORE)();
    const [mouseDown, setMouseDown] = (0,hooks_module_js_.useState)(false);
    const [playedAudio, setPlayedAudio] = (0,hooks_module_js_.useState)(null);
    const soundDelay = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        if (!betPlaced || !loopMusicIds)
            return null;
        const level = winLevel === 3 ? 2 : winLevel;
        winLevel > 0 && stopAudioByIdSmooth(loopMusicIds[level - 1]);
        playAudio(loopMusicIds[level], true);
        setPlayedAudio(level);
    }, [winLevel, betPlaced]);
    (0,hooks_module_js_.useEffect)(() => {
        !showResults && notifLevel > 0 && !localStorageHelper/* default */.A.get('isNotifShown') && setShowPumpNotif(true);
    }, [showResults]);
    (0,hooks_module_js_.useEffect)(() => {
        if (gameStatus === 'result') {
            if (gameResult === 'won' && !localStorageHelper/* default */.A.get('isNotifShown')) {
                coefficient <= gameConfig.minCoeffToCashout + 0.04 && setNotifLevel(notifLevel + 1);
            }
            if (coefficient >= 1.2) {
                setNotifLevel(0);
                localStorageHelper/* default */.A.set('isNotifShown', true);
            }
            loopMusicIds && stopAudioByIdSmooth(loopMusicIds[playedAudio], gameConfig.loopAudioSmoothOffTimeout ?? 800);
            if (gameResult === 'lost') {
                soundDelay.current && clearTimeout(soundDelay.current);
                soundDelay.current = setTimeout(() => {
                    onLose(choosedCharacter);
                }, gameConfig.onLoseSoundDelay ?? 100);
            }
            setPlayedAudio(null);
        }
    }, [gameStatus]);
    const handleDown = (e) => {
        e.preventDefault();
        setMouseUp(false);
        setMouseDown(true);
        setShowPumpNotif(false);
        if (disabled || gameStatus === 'crashed' || betPlaced)
            return false;
        choosedCharacter === null && typeof preChoosedCharacter === 'number' && setChoosedCharacter(preChoosedCharacter);
        placeBet(true);
        onStart(choosedCharacter ?? preChoosedCharacter);
    };
    const handleUp = (e) => {
        setMouseUp(true);
        setMouseDown(false);
        if (placebetProcessing || gameStatus !== 'running' || disabled)
            return false;
        cashout(true);
        onEnd(choosedCharacter);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children()).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onMouseDown: handleDown,
            onMouseUp: handleUp,
            onPointerDown: handleDown,
            onPointerUp: handleUp,
            onTouchMove: (e) => e.preventDefault(),
            onContextMenu: handleDown,
            onMouseLeave: (e) => mouseDown && handleUp(e),
            onPointerLeave: (e) => mouseDown && handleUp(e),
            onDblClick: (e) => e.preventDefault(),
            onClick: (e) => e.preventDefault(),
        })) }));
}
const HoldCrashButtonFreebetEvent = (0,index_js_.observer)(_HoldCrashButtonFreebetEvent);

;// ./src/framework/components.holdcrash/HoldCrashButtonFreebetEvent/index.tsx


;// ./src/framework/components.holdcrash/HoldCrashButton/HoldCrashButton.tsx










const Context = (0,preact_module_js_.createContext)({});
function _HoldCrashButton({ children }) {
    const { game: { placebetProcessing, gameStarted, gameStatus, gameResult, isCanvasLoaded, mouseUp, betPlaced, gameConfig, showPumpNotif, isAlternativeFlow, socketDisabled, currentAmountId, }, profileCommon: { profile: { currencySign }, }, freebetsCommon: { freebetEnabled, freebetActive }, uiCommon: { amountError, isOnline, updateAlertList }, } = (0,bootstrap.GET_STORE)();
    const btnDisabledTimeout = (0,hooks_module_js_.useRef)(null);
    const [btnDisabledOnLose, setBtnDisabledOnLose] = (0,hooks_module_js_.useState)(false);
    const { t } = (0,es_index_js_.useTranslation)();
    (0,hooks_module_js_.useEffect)(() => {
        if (gameResult === 'lost') {
            setBtnDisabledOnLose(true);
            btnDisabledTimeout.current && clearTimeout(btnDisabledTimeout.current);
            btnDisabledTimeout.current = setTimeout(() => {
                setBtnDisabledOnLose(false);
            }, gameConfig.btnDisabledOnLose ?? 500);
        }
        else {
            setBtnDisabledOnLose(false);
        }
    }, [gameResult]);
    (0,hooks_module_js_.useEffect)(() => {
        if (gameStatus === 'await' && amountError && !betPlaced) {
            updateAlertList([
                {
                    type: 'success',
                    title: 'Attention',
                    text: amountError,
                },
            ]);
        }
    }, [gameStatus, amountError, currentAmountId, betPlaced]);
    const props = {
        button: freebetEnabled ? 'freebet' : 'play',
        disabled: !gameStarted ||
            (!freebetEnabled && gameStatus !== 'running' && !!amountError) ||
            placebetProcessing ||
            !isCanvasLoaded ||
            !isOnline ||
            btnDisabledOnLose ||
            (freebetEnabled && mouseUp && betPlaced) ||
            (!betPlaced && !mouseUp) ||
            socketDisabled,
        isFreebet: freebetEnabled,
        valueFreebet: freebetEnabled && String(currencySign + freebetActive?.offer?.configuration[0]?.betAmount),
        text: isAlternativeFlow ? t('COMMON.HOLD') : t('PUMPEDX.PUMP'),
        betPlaced,
        showPumpNotif,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const HoldCrashButton = Object.assign((0,index_js_.observer)(_HoldCrashButton), {
    Play: Object.assign(HoldCrashButtonPlay, {
        Event: HoldCrashButtonPlayEvent,
    }),
    Freebet: Object.assign(HoldCrashButtonFreebet, {
        Event: HoldCrashButtonFreebetEvent,
    }),
});

;// ./src/framework/components.holdcrash/HoldCrashButton/index.tsx


;// ./src/framework/components.holdcrash/HoldCrashRenderReload/HoldCrashRenderReload.tsx




function _HoldCrashRenderReload({ children, onClick = () => { } }) {
    const { setReload } = (0,hooks_module_js_.useContext)(HoldCrashRender_Context);
    const handleClick = () => {
        setReload(Date.now());
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const HoldCrashRenderReload = _HoldCrashRenderReload;

;// ./src/framework/components.holdcrash/HoldCrashRenderReload/index.tsx


// EXTERNAL MODULE: consume shared module (default) i18next@^23.2.3 (strict) (fallback: ./node_modules/i18next/dist/esm/i18next.js)
var i18next_js_ = __webpack_require__(49953);
// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
;// ./src/framework/components.holdcrash/HoldCrashRender/HoldCrashRender.tsx







const HoldCrashRender_Context = (0,preact_module_js_.createContext)({});
const winLevelList = (0,bootstrap.GET_GAME_CONFIG)()?.winLevelList || [0, 5, 7, 10];
function _HoldCrashRender({ children, betData }) {
    const { game: { coefficient: onLoseCoefficient }, coefficient, result, currency, amount, } = betData;
    const getWinLevel = (coeff) => {
        let level = 0;
        for (let i = 0; i < winLevelList.length; i++) {
            if (coeff >= winLevelList[i])
                level = i;
        }
        return level;
    };
    const [reload, setReload] = (0,hooks_module_js_.useState)(0);
    return ((0,jsxRuntime_module/* jsx */.Y)(HoldCrashRender_Context.Provider, { value: { setReload }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                isLost: result === 'lost',
                coefficient: result === 'lost' ? onLoseCoefficient : coefficient,
                text: result === 'lost' ? (0,i18next_js_.t)('CRASH.CRASHED_AT') : (0,i18next_js_.t)('CRASH.CASHOUT_AT'),
                level: getWinLevel(result === 'lost' ? onLoseCoefficient : coefficient),
                forceReload: reload,
                currency,
                sum: (0,floor/* default */.A)(amount * (result === 'lost' ? onLoseCoefficient : coefficient)),
            }) }) }));
}
const HoldCrashRender = Object.assign(_HoldCrashRender, {
    Reload: HoldCrashRenderReload,
});

;// ./src/framework/components.holdcrash/HoldCrashRender/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
;// ./src/framework/components.holdcrash/HoldCrashWin/HoldCrashWin.tsx





function _HoldCrashWin({ children, onWin }) {
    const { game: { showResults, gameResult, roundPayout, coefficient, winLevel }, profileCommon: { profile: { currencySign }, }, } = (0,bootstrap.GET_STORE)();
    (0,hooks_module_js_.useEffect)(() => {
        gameResult !== 'lost' && showResults && onWin(winLevel);
    }, [showResults]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            profit: (0,shortNumber/* default */.A)(roundPayout, 2),
            prefix: currencySign,
            coefficient: (0,shortNumber/* default */.A)(coefficient, 2),
            show: showResults,
            level: winLevel,
            isLost: gameResult === 'lost',
        }) }));
}
const HoldCrashWin = (0,index_js_.observer)(_HoldCrashWin);

;// ./src/framework/components.holdcrash/HoldCrashWin/index.tsx


;// ./src/framework/components.holdcrash/HoldCrashChooseCharacter/HoldCrashChooseCharacter.tsx




function _HoldCrashChooseCharacter({ children, index, onClick = () => { } }) {
    const { game: { setChoosedCharacter, startGame, gameStarted, isFirstRound, isCanvasLoaded, placebetProcessing, choosedCharacter, }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        !gameStarted && startGame();
        setChoosedCharacter(index);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled: placebetProcessing || !isCanvasLoaded,
            hidden: !isFirstRound || choosedCharacter !== null,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const HoldCrashChooseCharacter = (0,index_js_.observer)(_HoldCrashChooseCharacter);

;// ./src/framework/components.holdcrash/HoldCrashChooseCharacter/index.tsx


;// ./src/framework/components.holdcrash/HoldCrashChooseCharacterSlider/HoldCrashChooseCharacterSlider.tsx




function _HoldCrashChooseCharacterSlider({ children, onClick = () => { } }) {
    const { game: { setChoosedCharacter, betPlaced, gameStarted, isFirstRound, choosedCharacter }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (!gameStarted || choosedCharacter === null || betPlaced)
            return null;
        setChoosedCharacter(choosedCharacter === 1 ? 0 : 1);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ isActive: choosedCharacter === 0, hidden: choosedCharacter === null || betPlaced })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const HoldCrashChooseCharacterSlider = (0,index_js_.observer)(_HoldCrashChooseCharacterSlider);

;// ./src/framework/components.holdcrash/HoldCrashChooseCharacterSlider/index.tsx


;// ./src/framework/components.holdcrash/HoldCrashGameStatus/HoldCrashGameStatus.tsx





function _HoldCrashGameStatus({ children }) {
    const { game: { betPlaced, roundPayout, coefficient, winLevel, choosedCharacter, gameResult, amount, showPumpNotif, notifLevel, }, profileCommon: { profile: { currencySign }, }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            betPlaced,
            roundPayout: (0,shortNumber/* default */.A)(roundPayout || +amount, 2),
            coefficient: (0,shortNumber/* default */.A)(coefficient || 1, 2),
            prefix: currencySign,
            text: (0,i18next_js_.t)('COMMON.BANK'),
            coeffLevel: winLevel,
            choosedCharacter,
            showFinalCoeff: gameResult === 'lost',
            showPumpNotif,
            notifLevel,
        }) }));
}
const HoldCrashGameStatus = (0,index_js_.observer)(_HoldCrashGameStatus);

;// ./src/framework/components.holdcrash/HoldCrashGameStatus/index.tsx


;// ./src/framework/components.holdcrash/HoldCrashSliderLeft/HoldCrashSliderLeft.tsx




function _HoldCrashSliderLeft({ children, onClick = () => { } }) {
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
const HoldCrashSliderLeft = _HoldCrashSliderLeft;

;// ./src/framework/components.holdcrash/HoldCrashSliderLeft/index.tsx


;// ./src/framework/components.holdcrash/HoldCrashSliderRight/HoldCrashSliderRight.tsx




function _HoldCrashSliderRight({ children, onClick = () => { } }) {
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
const HoldCrashSliderRight = _HoldCrashSliderRight;

;// ./src/framework/components.holdcrash/HoldCrashSliderRight/index.tsx


;// ./src/framework/components.holdcrash/HoldCrashSlider/HoldCrashSlider.tsx






const ContextButtons = (0,preact_module_js_.createContext)({});
function _HoldCrashSlider({ children, isFinite = false }) {
    const { game: { placebetProcessing, betPlaced, setCurrentAmountId, currentAmountId, amountsMap, socketDisabled }, freebetsCommon: { freebetEnabled, freebetActive }, profileCommon: { profile: { currencySign, currency }, }, uiCommon: { amountError, isOnline }, } = (0,bootstrap.GET_STORE)();
    const handleLeft = () => {
        setCurrentAmountId(currentAmountId === 0 ? (isFinite ? 0 : amountsMap.length - 1) : currentAmountId - 1);
    };
    const handleRight = () => {
        setCurrentAmountId(currentAmountId === amountsMap.length - 1 ? (isFinite ? currentAmountId : 0) : currentAmountId + 1);
    };
    const props = {
        position: currentAmountId,
        count: amountsMap.length,
        disabled: placebetProcessing || betPlaced || freebetEnabled || socketDisabled,
        values: amountsMap,
        currencySign,
        hidden: freebetEnabled,
        currency,
        valueFreebet: freebetEnabled && freebetActive?.offer?.configuration[0]?.betAmount,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,jsxRuntime_module/* jsx */.Y)(ContextButtons.Provider, { value: {
                handleRight,
                handleLeft,
                disabled: placebetProcessing || betPlaced || !isOnline,
            }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }) }));
}
const HoldCrashSlider = (0,index_js_.observer)(Object.assign(_HoldCrashSlider, {
    Left: HoldCrashSliderLeft,
    Right: HoldCrashSliderRight,
}));

;// ./src/framework/components.holdcrash/HoldCrashSlider/index.tsx


;// ./src/framework/components.holdcrash/export.ts









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