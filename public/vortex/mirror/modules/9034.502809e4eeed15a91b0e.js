"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[7402,7518,9034],{

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

/***/ 23681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ClickerButton: () => (/* reexport */ ClickerButton),
  ClickerControlAmount: () => (/* reexport */ ClickerControlAmount),
  ClickerGame: () => (/* reexport */ ClickerGame),
  ClickerRender: () => (/* reexport */ ClickerRender),
  clickerCanvasController: () => (/* reexport */ ClickerCanvasController/* clickerCanvasController */.S)
});

// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: ./src/framework/components.clicker/ClickerCanvasController/index.ts + 2 modules
var ClickerCanvasController = __webpack_require__(96899);
;// ./src/framework/components.clicker/ClickerGame/ClickerGame.tsx





function _ClickerGame({ children }) {
    const { game: { isCanvasLoaded, controlAmountLockState, placeTap, setCanvasLoaded, handleEndWinAnimation, completeBonusGameAnimation, startBonusWheelAnimation, completeBonusWheelAnimation, setLongPressTriggered, placeRandomTap, gtmCanvasBetPlacedPush, freeSpinStore: { completeFreeSpinGameAnimation, openBuyFreeSpinModal, hideBuyFreeSpinModal, winFreeSpinAnimationCompleted, handleClearFreeSpinsInActive, updateFreeSpinCount, }, }, freebetsCommon: { freebetsSuccessIndexList, freebetEnabled, freebetActive }, uiCommon: { setModal, modal }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const timerRef = (0,hooks_module_js_.useRef)(null);
    const pressedRef = (0,hooks_module_js_.useRef)(false);
    const longPressRef = (0,hooks_module_js_.useRef)(false);
    const freebetEnabledRef = (0,hooks_module_js_.useRef)(false);
    const [isCloseSettingModal, setIsCloseSettingModal] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useEffect)(() => {
        if (modal?.setting && modal?.setting.open === false) {
            setIsCloseSettingModal(true);
        }
    });
    (0,hooks_module_js_.useEffect)(() => {
        const freebetAmount = freebetActive?.offer?.configuration[0]?.betAmount || 0;
        const isFreebetEnabled = freebetsSuccessIndexList.includes(0) && freebetEnabled;
        if (freebetsSuccessIndexList.includes(0) && !freebetEnabled && !freebetEnabledRef.current) {
            freebetEnabledRef.current = true;
        }
        const isOpneModal = isFreebetEnabled &&
            controlAmountLockState.isLocked &&
            Number(controlAmountLockState.amountAtLock) !== Number(freebetAmount);
        freebetEnabledRef.current && isCloseSettingModal;
        if (isOpneModal) {
            freebetEnabledRef.current = false;
            setTimeout(() => {
                setModal({
                    modalName: 'controlsUnlockConfirm',
                    render: true,
                });
                setIsCloseSettingModal(false);
            }, 1000);
        }
    }, [controlAmountLockState.isLocked, freebetsSuccessIndexList, freebetEnabled, isCloseSettingModal, freebetActive]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!isCanvasLoaded)
            return;
        const isSpace = (e) => e.code === 'Space' || e.key === ' ';
        const isTypingTarget = (t) => {
            const el = t;
            return !!el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
        };
        const onKeyDown = (e) => {
            if (!isSpace(e) || isTypingTarget(e.target) || e.repeat || pressedRef.current)
                return;
            e.preventDefault();
            pressedRef.current = true;
            longPressRef.current = false;
            timerRef.current = window.setTimeout(() => {
                longPressRef.current = true;
                setLongPressTriggered(true);
            }, 500);
        };
        const onKeyUp = (e) => {
            if (!isSpace(e) || !pressedRef.current)
                return;
            e.preventDefault();
            if (timerRef.current)
                clearTimeout(timerRef.current);
            timerRef.current = null;
            if (longPressRef.current) {
                setLongPressTriggered(false);
            }
            else {
                handleClearFreeSpinsInActive();
                placeRandomTap();
            }
            pressedRef.current = false;
            longPressRef.current = false;
        };
        const onBlur = () => {
            if (timerRef.current)
                clearTimeout(timerRef.current);
            timerRef.current = null;
            if (longPressRef.current)
                setLongPressTriggered(false);
            pressedRef.current = false;
            longPressRef.current = false;
        };
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
        window.addEventListener('blur', onBlur);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
            window.removeEventListener('blur', onBlur);
            if (timerRef.current)
                clearTimeout(timerRef.current);
        };
    }, [isCanvasLoaded]);
    (0,hooks_module_js_.useEffect)(() => {
        ClickerCanvasController/* clickerCanvasController */.S.on('eventCanvasIsLoaded', () => {
            setCanvasLoaded(true);
            ClickerCanvasController/* clickerCanvasController */.S.invoke('setupLocalizations', {
                freeSpin: t('COMMON.FREE_SPINS'),
                buyButton: t('COMMON.BUY').toUpperCase(),
                balance: t('COMMON.BALANCE'),
                lastWin: t('COMMON.LAST_WIN'),
                freeSpinPopUp: t('COMMON.FREE_SPINS').toUpperCase(),
                buyPopUp: t('COMMON.BUY').toUpperCase(),
                buyPopUpButton: t('COMMON.BUY').toUpperCase(),
                totalWin: t('FREEBETS.TOTAL_GAIN'),
                buyPopUpWarning: t('TAPINATA.BET_LIMIT.NOTIF'),
                fs: t('COMMON.FS'),
            });
        });
        ClickerCanvasController/* clickerCanvasController */.S.on('eventTapZone', ({ zoneNumber, isPressed }) => {
            if (!isPressed) {
                placeTap({ cellId: zoneNumber, isDestroy: true });
                setLongPressTriggered(false);
            }
            else {
                setLongPressTriggered(true);
            }
            handleClearFreeSpinsInActive();
            gtmCanvasBetPlacedPush();
        });
        ClickerCanvasController/* clickerCanvasController */.S.on('eventFreeSpinAnimationCompleted', (data) => {
            completeFreeSpinGameAnimation({ isWin: data?.isWin });
        });
        ClickerCanvasController/* clickerCanvasController */.S.on('eventWinAnimationCompleted', ({ id }) => {
            handleEndWinAnimation(id);
        });
        ClickerCanvasController/* clickerCanvasController */.S.on('eventBonusAnimationCompleted', ({ isCompleted }) => {
            completeBonusGameAnimation();
        });
        ClickerCanvasController/* clickerCanvasController */.S.on('eventBonusCashoutAnimationCompleted', ({ isCompleted }) => {
            startBonusWheelAnimation();
        });
        ClickerCanvasController/* clickerCanvasController */.S.on('eventWheelAnimationCompleted', ({ isCompleted }) => {
            completeBonusWheelAnimation();
        });
        ClickerCanvasController/* clickerCanvasController */.S.on('eventTapBuyFreeSpin', ({ isOpenModal }) => {
            openBuyFreeSpinModal();
        });
        ClickerCanvasController/* clickerCanvasController */.S.on('eventHideBuyFreeSpinPopup', ({ isBuy }) => {
            hideBuyFreeSpinModal({ isBuy });
        });
        ClickerCanvasController/* clickerCanvasController */.S.on('eventMoveTotalWinAnimationCompleted', () => {
            winFreeSpinAnimationCompleted();
        });
        ClickerCanvasController/* clickerCanvasController */.S.on('eventBonusCoinAnimationCompleted', () => { });
        ClickerCanvasController/* clickerCanvasController */.S.on('eventExtraFreeSpinAnimationCompleted', () => {
            updateFreeSpinCount();
        });
    }, []);
    return children;
}
const ClickerGame = (0,index_js_.observer)(_ClickerGame);

;// ./src/framework/components.clicker/ClickerGame/index.tsx


// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
;// ./src/framework/components.clicker/ClickerControlAmount/ClickerControlAmount.tsx





function _ClickerControlAmount({ children }) {
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { isRoundStarted, amount, gameConfig, isDisabledControls, controlAmountLockState, isTooltipActivate, freeSpinStore: { isFreeSpinsGameQueued }, isBonusGameQueued, gameSessionType, setAmount, activateTooltipAfterTap, isTournamentActive, }, uiCommon: { amountError, isOnline, isVisible }, freebetsCommon: { freebetsSuccessIndexList, freebetEnabled, freebetActive }, autobetCommon: { autoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const tooltipTimeout = (0,hooks_module_js_.useRef)(null);
    const tooltipTimeoutRef = (0,hooks_module_js_.useRef)(null);
    const amountErrorRef = (0,hooks_module_js_.useRef)(false);
    const [showTooltip, setShowTooltip] = (0,hooks_module_js_.useState)(false);
    const [tooltipText, setTooltipText] = (0,hooks_module_js_.useState)(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
    const showNotificationForMinBet = () => {
        if (Number(amount) === minBet && !showTooltip) {
            setShowTooltip(true);
            setTooltipText(`${t('COMMON.MIN_BET')} ${currencySign}${minBet}`);
            if (tooltipTimeout.current) {
                clearTimeout(tooltipTimeout.current);
            }
            tooltipTimeout.current = window.setTimeout(() => {
                setShowTooltip(false);
            }, gameConfig.amountTooltipTimeout);
            tooltipTimeout.current = window.setTimeout(() => {
                setTooltipText(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
            }, gameConfig.amountTooltipTimeout + 200);
        }
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (isTooltipActivate) {
            setShowTooltip(true);
            setTooltipText(t('COMMON.PLACEBET.ERROR.3'));
            tooltipTimeoutRef.current = window.setTimeout(() => {
                setShowTooltip(false);
                activateTooltipAfterTap(false);
            }, 5000);
        }
        return () => {
            clearTimeout(tooltipTimeoutRef.current);
        };
    }, [isTooltipActivate]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!freebetEnabled &&
            balance !== null &&
            gameSessionType !== 'freespin' &&
            (balance <= 0 || balance < Number(amount))) {
            setShowTooltip(true);
            setTooltipText(t('COMMON.PLACEBET.ERROR.3'));
            tooltipTimeout.current = window.setTimeout(() => {
                setShowTooltip(false);
            }, 5000);
        }
        if (!amountError && amountErrorRef.current) {
            setShowTooltip(false);
            tooltipTimeout.current = window.setTimeout(() => {
                setTooltipText(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
            }, 200);
        }
        if (amountError) {
            amountErrorRef.current = true;
            setShowTooltip(true);
            setTooltipText(amountError);
        }
        else if (Number(amount) === maxBet) {
            setShowTooltip(true);
            setTooltipText(`${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`);
            if (tooltipTimeout.current) {
                clearTimeout(tooltipTimeout.current);
            }
            tooltipTimeout.current = window.setTimeout(() => {
                setShowTooltip(false);
            }, gameConfig.amountTooltipTimeout);
        }
    }, [amount, maxWin]);
    const freebetAmount = freebetActive?.offer?.configuration[0]?.betAmount || 0;
    const isFreebetEnabled = freebetsSuccessIndexList.includes(0) && freebetEnabled;
    (0,hooks_module_js_.useEffect)(() => {
        if (isFreebetEnabled && freebetAmount) {
            setAmount(freebetAmount);
        }
    }, [freebetAmount, isFreebetEnabled]);
    const disabled = isRoundStarted ||
        !isOnline ||
        !isVisible ||
        isDisabledControls ||
        isFreeSpinsGameQueued ||
        isBonusGameQueued ||
        gameSessionType === 'freespin' ||
        gameSessionType === 'bonus' ||
        !balance ||
        isFreebetEnabled ||
        (!isRoundStarted && balance < minBet && !isFreebetEnabled) ||
        isTournamentActive;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            titleError: amountError,
            showTooltip,
            titleMaxWin: tooltipText,
            disabled,
            defaultValue: !!freebetActive ? freebetAmount : Number(amount),
            min: minBet,
            max: maxBet,
            onChange: setAmount,
            currencySign,
            prefix: `${currencySign} `,
            connectBalance: null,
            rounding: rounding > 0 ? rounding - 1 : rounding,
            showNotificationForMinBet,
            gtmAction: 'input_value_changed',
            pushGtmDataOnValueChange: true,
            locked: controlAmountLockState.isLocked,
        }) }));
}
const ClickerControlAmount = (0,index_js_.observer)(_ClickerControlAmount);

;// ./src/framework/components.clicker/ClickerControlAmount/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
;// ./src/framework/components.clicker/ClickerButtonTap/ClickerButtonTap.tsx






function _ClickerButtonTap({ stopAutoSpin, children, onClick }) {
    const { selected } = (0,hooks_module_js_.useContext)(Context);
    const { game: { placeRandomTap, setLongPressTriggered, freeSpinStore: { handleClearFreeSpinsInActive }, gameSessionType, isFreebetEnabled, }, } = (0,bootstrap.GET_STORE)();
    const touchHandledRef = (0,hooks_module_js_.useRef)(false);
    const timerRef = (0,hooks_module_js_.useRef)(null);
    const [isLongPress, setIsLongPress] = (0,hooks_module_js_.useState)(false);
    if (isFreebetEnabled && gameSessionType !== 'freespin')
        return null;
    const handleClick = () => {
        if (selected) {
            stopAutoSpin();
        }
        else {
            handleClearFreeSpinsInActive();
            placeRandomTap();
            setLongPressTriggered(false);
        }
        onClick();
    };
    const handlePreventDefault = (e) => {
        e.preventDefault();
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };
    const handleMouseDown = () => {
        setIsLongPress(false);
        timerRef.current = setTimeout(() => {
            setIsLongPress(true);
            setLongPressTriggered(true);
        }, 500);
    };
    const handleMouseUp = (e) => {
        handlePreventDefault(e);
        if (timerRef.current)
            clearTimeout(timerRef.current);
        if (isLongPress) {
            setLongPressTriggered(false);
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
const ClickerButtonTap = (0,index_js_.observer)(_ClickerButtonTap);

;// ./src/framework/components.clicker/ClickerButtonTap/index.tsx


// EXTERNAL MODULE: ./src/framework/store/ClickerCommon.ts + 3 modules
var ClickerCommon = __webpack_require__(50647);
;// ./src/framework/components.clicker/ClickerButtonAutobet/ClickerButtonAutobet.tsx







function _ClickerButtonAutobet({ children }) {
    const { game: { placeRandomTap, setAutoSpinFreexCount, balance, frozenAutoSpinCount, isSocketDisabled, isBonusGameQueued, gameSessionType, amount, freeSpinStore: { isOpendBuyFSModal, isFreeSpinsGameQueued, isFreeSpinsCompleted, freeSpinsRoundData }, }, audioCommon: { playAudio }, autobetCommon: { autoBetEnabled, setAutoBetEnabled }, uiCommon: { amountError, isOnline, isVisible }, profileCommon: { userAuthenticated }, freebetsCommon: { freebetsSuccessIndexList, freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const autoSpinText = t('CATANZA.AUTOSPIN');
    const { disabled, autospinOpen, autobetCount, selected, isOpenAutobetList, setIsOpenAutobetList, setAutobetCount, setSelected, setAutospinOpen, } = (0,hooks_module_js_.useContext)(Context);
    const loadingTimerRef = (0,hooks_module_js_.useRef)(null);
    const selectedRef = (0,hooks_module_js_.useRef)(selected);
    const frozenAutoSpinCountRef = (0,hooks_module_js_.useRef)(frozenAutoSpinCount);
    const balanceRef = (0,hooks_module_js_.useRef)(balance);
    const isNotActiveRoundRef = (0,hooks_module_js_.useRef)(false);
    const [autoSpinCountFreez, setAutoSpinCountFreez] = (0,hooks_module_js_.useState)(0);
    (0,hooks_module_js_.useEffect)(() => {
        selectedRef.current = selected;
        frozenAutoSpinCountRef.current = frozenAutoSpinCount;
        balanceRef.current = balance;
    }, [selected, frozenAutoSpinCount, balance]);
    (0,hooks_module_js_.useEffect)(() => {
        isNotActiveRoundRef.current =
            isSocketDisabled ||
                !userAuthenticated ||
                (isBonusGameQueued && gameSessionType !== 'freespin') ||
                gameSessionType === 'bonus' ||
                isFreeSpinsGameQueued ||
                isFreeSpinsCompleted ||
                (gameSessionType === 'freespin' && freeSpinsRoundData?.rounds === 0) ||
                balance <= 0 ||
                balance < Number(amount);
        if (balance <= 0 || balance < Number(amount)) {
            setSelected(0);
        }
    }, [
        balance,
        userAuthenticated,
        isSocketDisabled,
        isBonusGameQueued,
        gameSessionType,
        isFreeSpinsCompleted,
        isFreeSpinsGameQueued,
        freeSpinsRoundData,
        amount,
    ]);
    (0,hooks_module_js_.useEffect)(() => {
        if ((isFreeSpinsGameQueued || gameSessionType === 'freespin') && !frozenAutoSpinCountRef.current) {
            setAutoSpinFreexCount(selectedRef.current);
            setSelected(0);
        }
        else if (gameSessionType === 'regular' && !!frozenAutoSpinCountRef.current) {
            setAutoSpinFreexCount(0);
            setSelected(frozenAutoSpinCount);
        }
    }, [isFreeSpinsGameQueued, gameSessionType, isOnline]);
    (0,hooks_module_js_.useEffect)(() => {
        if (isNotActiveRoundRef.current || ((!selected || selected === 0) && loadingTimerRef.current)) {
            clearTimeout(loadingTimerRef.current);
            loadingTimerRef.current = null;
        }
        if (selected && !loadingTimerRef.current && !isNotActiveRoundRef.current) {
            loadingTimerRef.current = setInterval(() => {
                placeRandomTap();
                playAudio('bat_hit_spin');
                const newSelected = selectedRef.current - 1;
                setSelected(newSelected);
            }, ClickerCommon.TIME_AUTO_BET_MS);
        }
    }, [selected, gameSessionType]);
    (0,hooks_module_js_.useEffect)(() => {
        if ((!isOnline || !isVisible) && selected && !autoSpinCountFreez) {
            setSelected(0);
            setAutoSpinCountFreez(selected);
        }
        if (isOnline && isVisible && autoSpinCountFreez) {
            setSelected(autoSpinCountFreez);
            setAutoSpinCountFreez(0);
        }
    }, [
        isOnline,
        isVisible,
        selected,
        gameSessionType,
        isBonusGameQueued,
        gameSessionType,
        isFreeSpinsCompleted,
        isFreeSpinsGameQueued,
        autoSpinCountFreez,
    ]);
    const isActivatedFreebet = freebetsSuccessIndexList.includes(0) && freebetEnabled;
    const isDisabled = !isOnline ||
        !isVisible ||
        balance <= 0 ||
        isOpendBuyFSModal ||
        isBonusGameQueued ||
        isFreeSpinsGameQueued ||
        gameSessionType === 'freespin' ||
        gameSessionType === 'bonus' ||
        isActivatedFreebet;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: autoSpinText,
            isDisabled,
            autospinOpen,
            setAutospinOpen,
            setSelected,
        }) }));
}
const ClickerButtonAutobet = (0,index_js_.observer)(_ClickerButtonAutobet);

;// ./src/framework/components.clicker/ClickerButtonAutobet/index.tsx


;// ./src/framework/components.clicker/ClickerButtonFreebet/ClickerButtonFreebet.tsx






function _ClickerButtonFreebet({ stopAutoSpin, children, onClick }) {
    const { selected } = (0,hooks_module_js_.useContext)(Context);
    const { game: { placeRandomTap, setLongPressTriggered, freeSpinStore: { handleClearFreeSpinsInActive }, gameSessionType, isFreebetEnabled, }, freebetsCommon: { freebetEnabled, freebetsSuccessIndexList }, } = (0,bootstrap.GET_STORE)();
    const touchHandledRef = (0,hooks_module_js_.useRef)(false);
    const timerRef = (0,hooks_module_js_.useRef)(null);
    const [isLongPress, setIsLongPress] = (0,hooks_module_js_.useState)(false);
    if (!isFreebetEnabled || gameSessionType === 'freespin')
        return null;
    const handleClick = () => {
        if (selected) {
            stopAutoSpin();
        }
        else {
            handleClearFreeSpinsInActive();
            placeRandomTap();
            setLongPressTriggered(false);
        }
        onClick();
    };
    const handlePreventDefault = (e) => {
        e.preventDefault();
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };
    const handleMouseDown = () => {
        setIsLongPress(false);
        timerRef.current = setTimeout(() => {
            setIsLongPress(true);
            setLongPressTriggered(true);
        }, 500);
    };
    const handleMouseUp = (e) => {
        handlePreventDefault(e);
        if (timerRef.current)
            clearTimeout(timerRef.current);
        if (isLongPress) {
            setLongPressTriggered(false);
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
const ClickerButtonFreebet = (0,index_js_.observer)(_ClickerButtonFreebet);

;// ./src/framework/components.clicker/ClickerButtonFreebet/index.tsx


;// ./src/framework/components.clicker/ClickerButton/ClickerButton.tsx









const Context = (0,preact_module_js_.createContext)({});
function _ClickerButton({ children }) {
    const { game: { isTurboBet, amount, isBetButtonPressed, isLoadingPlaceBet, isBonusGameQueued, freeSpinStore: { isOpendBuyFSModal, isFreeSpinsGameQueued }, gameSessionType, isDisabledControls, freebetBetProcessing, }, uiCommon: { amountError, isOnline, isVisible }, autobetCommon: { autoBetEnabled }, profileCommon: { profile: { balance, currencySign }, limit: { minBet }, }, freebetsCommon: { freebetEnabled, freebetActive, freebetsSuccessIndexList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const autoSpinItems = [5000, 1000, 500, 200, 100, 50, 25];
    const freebetAmount = freebetActive?.offer?.configuration[0]?.betAmount || 0;
    const [autospinOpen, setAutospinOpen] = (0,hooks_module_js_.useState)(false);
    const [selected, setSelected] = (0,hooks_module_js_.useState)(null);
    const [autobetCount, setAutobetCount] = (0,hooks_module_js_.useState)(-1);
    const [isLoadingSlow, setIsLoadingSlow] = (0,hooks_module_js_.useState)(false);
    const [isOpenAutobetList, setIsOpenAutobetList] = (0,hooks_module_js_.useState)(false);
    const startTimeRef = (0,hooks_module_js_.useRef)(null);
    const loadingTimerRef = (0,hooks_module_js_.useRef)(null);
    const hideLoadingTimerRef = (0,hooks_module_js_.useRef)(null);
    const stopAutoSpin = () => {
        setAutospinOpen(false);
        setSelected(null);
    };
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
    const isFreebetEnabled = freebetsSuccessIndexList.includes(0) && freebetEnabled;
    const props = {
        disabled: !isOnline ||
            !isVisible ||
            isOpendBuyFSModal ||
            isBonusGameQueued ||
            isDisabledControls ||
            gameSessionType === 'bonus' ||
            (balance <= 0 && !isFreebetEnabled) ||
            (!Number(amount) && !isFreebetEnabled) ||
            (!balance && !isFreebetEnabled) ||
            (balance < minBet && !isFreebetEnabled) ||
            (freebetEnabled && freebetActive.left - 1 < 0 && gameSessionType !== 'freespin') ||
            freebetBetProcessing,
        loading: isLoadingSlow,
        isBetButtonPressed,
        isTurboBet,
        isAutoBetEnabled: autoBetEnabled,
        isActiveRound: true,
        autobetCount,
        isOpenAutobetList,
        setAutobetCount,
        setIsOpenAutobetList,
        freebetEnabled: isFreebetEnabled,
        freebetAmount: `${currencySign}${freebetAmount}`,
        selected,
        autoSpinItems,
        autospinOpen,
        setAutospinOpen: () => setAutospinOpen((prev) => !prev),
        stopAutoSpin,
        setSelected: (item) => setSelected(item),
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const ClickerButton = Object.assign((0,index_js_.observer)(_ClickerButton), {
    Tap: ClickerButtonTap,
    Autobet: ClickerButtonAutobet,
    Freebet: ClickerButtonFreebet,
});

;// ./src/framework/components.clicker/ClickerButton/index.tsx


;// ./src/framework/components.clicker/ClickerRender/ClickerRender.tsx



function _ClickerRender({ children, betData, rounding }) {
    if (!betData)
        return null;
    const { t } = (0,es_index_js_.useTranslation)();
    let bonusLevel = 0;
    let isBonus = false;
    const result = betData?.game?.results?.[betData.resultIndex];
    if (result) {
        isBonus = ['bonus-cashout'].includes(result?.game?.type);
        const multiplier = result.game?.coefficient;
        if (multiplier > 77 && multiplier <= 250) {
            bonusLevel = 1;
        }
        if (multiplier > 250) {
            bonusLevel = 2;
        }
    }
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            isBonus,
            coefficient: betData.payoutCoefficient,
            isWin: betData.result === 'won',
            payout: betData.payout,
            bonusLevel,
            currencySign: betData.currencySign,
        }) }));
}
const ClickerRender = (0,index_js_.observer)(_ClickerRender);

;// ./src/framework/components.clicker/ClickerRender/index.tsx


;// ./src/framework/components.clicker/export.ts







/***/ })

}]);