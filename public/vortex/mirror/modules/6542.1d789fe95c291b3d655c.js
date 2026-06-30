"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2302,6542,7402,7518],{

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

/***/ 28049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BonusTowersBonusGame: () => (/* reexport */ BonusTowersBonusGame),
  BonusTowersButton: () => (/* reexport */ BonusTowersButton),
  BonusTowersChooseCell: () => (/* reexport */ BonusTowersChooseCell),
  BonusTowersControlAmount: () => (/* reexport */ BonusTowersControlAmount),
  BonusTowersControlMines: () => (/* reexport */ BonusTowersControlMines),
  BonusTowersControlModal: () => (/* reexport */ BonusTowersControlModal),
  BonusTowersGame: () => (/* reexport */ BonusTowersGame),
  BonusTowersGameHeader: () => (/* reexport */ BonusTowersGameHeader),
  BonusTowersHistory: () => (/* reexport */ BonusTowersHistory),
  BonusTowersRender: () => (/* reexport */ BonusTowersRender),
  BonusTowersWin: () => (/* reexport */ BonusTowersWin)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
;// ./src/framework/components.bonustowers/BonusTowersChooseCell/BonusTowersChooseCell.tsx





function _BonusTowersChooseCell({ children, onClick = () => { }, index }) {
    const { game: { setSelectedCell, placebetProcessing, showBonusGame, showBonusGameConfirm, setShowBonusGame, setShowBonusGameConfirm, setBonusGameActiveButtons, roundEnd, gameStarted, hit, placeBet, clickBonusBtn, }, freebetsCommon: { freebetActive, freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const timer = (0,hooks_module_js_.useRef)(null);
    const popupTimer = (0,hooks_module_js_.useRef)(null);
    const tapTimer = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        !showBonusGameConfirm && timer.current && clearTimeout(timer.current);
    }, [showBonusGameConfirm]);
    (0,hooks_module_js_.useEffect)(() => {
        (hit > 0 || !gameStarted) && popupTimer.current && clearTimeout(popupTimer.current);
    }, [hit, gameStarted]);
    const handleClick = (e) => {
        if (placebetProcessing || !gameStarted || roundEnd)
            return false;
        if (showBonusGameConfirm) {
            timer.current && clearTimeout(timer.current);
            if (index === 0) {
                setBonusGameActiveButtons([true, false]);
            }
            else if (index === 1) {
                setBonusGameActiveButtons([false, true]);
            }
            else {
                return null;
            }
            onClick(e);
            timer.current = setTimeout(() => {
                setShowBonusGameConfirm(false);
                index === 0 && setShowBonusGame(true);
                setBonusGameActiveButtons([false, false]);
            }, 500);
            return null;
        }
        if (showBonusGame && index > 1) {
            return null;
        }
        setSelectedCell(index);
        const minCoefficient = freebetActive?.offer?.configuration[0]?.minCoefficient;
        if (showBonusGame) {
            tapTimer.current && clearTimeout(tapTimer.current);
            tapTimer.current = setTimeout(() => {
                clickBonusBtn();
            }, 800);
        }
        else {
            freebetEnabled ? placeBet(true, minCoefficient) : placeBet();
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
            onContextMenu: (e) => e.preventDefault(),
        })) }));
}
const BonusTowersChooseCell = (0,index_js_.observer)(_BonusTowersChooseCell);

;// ./src/framework/components.bonustowers/BonusTowersChooseCell/index.tsx


// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
;// ./src/framework/components.bonustowers/BonusTowersControlAmount/BonusTowersControlAmount.tsx




function _BonusTowersControlAmount({ children }) {
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { amount, setAmount, gameStarted }, uiCommon: { amountError }, freebetsCommon: { freebetEnabled, freebetsSuccessIndexList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            titleError: !gameStarted && amountError,
            titleMaxWin: `${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`,
            disabled: gameStarted || freebetEnabled || freebetsSuccessIndexList.includes(0),
            defaultValue: Number(amount),
            currencySign,
            min: minBet,
            max: maxBet,
            onChange: setAmount,
            connectBalance: freebetEnabled || freebetsSuccessIndexList.includes(0) ? undefined : balance,
            rounding: rounding > 0 ? rounding - 1 : rounding,
            gtmAction: 'input_value_changed',
            pushGtmDataOnValueChange: true,
        }) }));
}
const BonusTowersControlAmount = (0,index_js_.observer)(_BonusTowersControlAmount);

;// ./src/framework/components.bonustowers/BonusTowersControlAmount/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersControlMines/BonusTowersControlMines.tsx




function _BonusTowersControlMines({ children }) {
    const { game: { minesAmount, setMinesAmount, minesAmountMin, minesAmountMax, gameStarted, numberOfBetsError }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('MINES.MINES'),
            titleError: numberOfBetsError,
            disabled: gameStarted,
            defaultValue: Number(minesAmount),
            min: Number(minesAmountMin),
            max: Number(minesAmountMax),
            onChange: setMinesAmount,
        }) }));
}
const BonusTowersControlMines = Object.assign((0,index_js_.observer)(_BonusTowersControlMines));

;// ./src/framework/components.bonustowers/BonusTowersControlMines/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersButtonPlay/BonusTowersButtonPlay.tsx






function _BonusTowersButtonPlay({ children, onClick = () => { } }) {
    const { button, gameStarted } = (0,hooks_module_js_.useContext)(Context);
    const { game: { startGame, placebetProcessing, roundEnd, isCanvasLoaded }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'play')
        return null;
    const hundleClick = (e) => {
        if (placebetProcessing || gameStarted || roundEnd || !isCanvasLoaded)
            return false;
        startGame();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const BonusTowersButtonPlay = (0,index_js_.observer)(_BonusTowersButtonPlay);

;// ./src/framework/components.bonustowers/BonusTowersButtonPlay/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersButtonCashout/BonusTowersButtonCashout.tsx






function _BonusTowersButtonCashout({ children, onClick = () => { } }) {
    const { button, gameStarted } = (0,hooks_module_js_.useContext)(Context);
    const { game: { cashout, placebetProcessing, hit, roundEnd, showBonusGame, isCanvasLoaded }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'cashout')
        return null;
    const hundleClick = (e) => {
        if (placebetProcessing || !gameStarted || !hit || roundEnd || showBonusGame || !isCanvasLoaded)
            return false;
        cashout();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const BonusTowersButtonCashout = (0,index_js_.observer)(_BonusTowersButtonCashout);

;// ./src/framework/components.bonustowers/BonusTowersButtonCashout/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersButtonCancel/BonusTowersButtonCancel.tsx






function _BonusTowersButtonCancel({ children, onClick = () => { } }) {
    const { button } = (0,hooks_module_js_.useContext)(Context);
    const { game: { cancelGame, placebetProcessing, isCanvasLoaded }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'cancel')
        return null;
    const hundleClick = (e) => {
        if (placebetProcessing || !isCanvasLoaded)
            return false;
        cancelGame();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const BonusTowersButtonCancel = (0,index_js_.observer)(_BonusTowersButtonCancel);

;// ./src/framework/components.bonustowers/BonusTowersButtonCancel/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersButtonPlayEvent/BonusTowersButtonPlayEvent.tsx




function _BonusTowersButtonPlayEvent({ children, onClick = () => { } }) {
    const { game: { startGame, placebetProcessing, gameStarted, roundId, roundEnd, isCanvasLoaded }, } = (0,bootstrap.GET_STORE)();
    const hundleClick = (e) => {
        if (placebetProcessing || gameStarted || roundEnd || !isCanvasLoaded)
            return false;
        startGame();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const BonusTowersButtonPlayEvent = (0,index_js_.observer)(_BonusTowersButtonPlayEvent);

;// ./src/framework/components.bonustowers/BonusTowersButtonPlayEvent/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersButtonCashoutEvent/BonusTowersButtonCashoutEvent.tsx




function _BonusTowersButtonCashoutEvent({ children, onClick = () => { } }) {
    const { game: { cashout, placebetProcessing, gameStarted, roundId, hit, roundEnd, isCanvasLoaded }, } = (0,bootstrap.GET_STORE)();
    const hundleClick = (e) => {
        if (placebetProcessing || !gameStarted || !roundId || !hit || roundEnd || !isCanvasLoaded)
            return false;
        cashout();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const BonusTowersButtonCashoutEvent = (0,index_js_.observer)(_BonusTowersButtonCashoutEvent);

;// ./src/framework/components.bonustowers/BonusTowersButtonCashoutEvent/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersButtonCancelEvent/BonusTowersButtonCancelEvent.tsx




function _BonusTowersButtonCancelEvent({ children, onClick = () => { } }) {
    const { game: { cancelGame, placebetProcessing, isCanvasLoaded }, } = (0,bootstrap.GET_STORE)();
    const hundleClick = (e) => {
        if (placebetProcessing || !isCanvasLoaded)
            return false;
        cancelGame();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const BonusTowersButtonCancelEvent = (0,index_js_.observer)(_BonusTowersButtonCancelEvent);

;// ./src/framework/components.bonustowers/BonusTowersButtonCancelEvent/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersButtonConfirm/BonusTowersButtonConfirm.tsx






function _BonusTowersButtonConfirm({ children, onClick = () => { } }) {
    const { button, gameStarted } = (0,hooks_module_js_.useContext)(Context);
    const { game: { placeBet, placebetProcessing, roundEnd, showBonusGame, clickBonusBtn, setShowClickGamePopup, showClickGamePopup, isCanvasLoaded, }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'confirm')
        return null;
    const hundleClick = (e) => {
        if (placebetProcessing || !gameStarted || roundEnd || !isCanvasLoaded)
            return false;
        showClickGamePopup && setShowClickGamePopup(false);
        showBonusGame ? clickBonusBtn() : placeBet();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const BonusTowersButtonConfirm = (0,index_js_.observer)(_BonusTowersButtonConfirm);

;// ./src/framework/components.bonustowers/BonusTowersButtonConfirm/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersButtonConfirmEvent/BonusTowersButtonConfirmEvent.tsx




function _BonusTowersButtonConfirmEvent({ children, onClick = () => { } }) {
    const { game: { placeBet, placebetProcessing, gameStarted, roundId, roundEnd, showBonusGame, clickBonusBtn, showClickGamePopup, setShowClickGamePopup, isCanvasLoaded, }, } = (0,bootstrap.GET_STORE)();
    const hundleClick = (e) => {
        if (placebetProcessing || !gameStarted || !roundId || roundEnd || !isCanvasLoaded)
            return false;
        showClickGamePopup && setShowClickGamePopup(false);
        showBonusGame ? clickBonusBtn() : placeBet();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const BonusTowersButtonConfirmEvent = (0,index_js_.observer)(_BonusTowersButtonConfirmEvent);

;// ./src/framework/components.bonustowers/BonusTowersButtonConfirmEvent/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersButtonFreebet/BonusTowersButtonFreebet.tsx






function _BonusTowersButtonFreebet({ children }) {
    const { button, gameStarted } = (0,hooks_module_js_.useContext)(Context);
    const { game: { placebetProcessing, roundEnd, isCanvasLoaded, startGame, cashout, }, } = (0,bootstrap.GET_STORE)();
    if (button !== 'freebet')
        return null;
    const handleClick = () => {
        if (placebetProcessing || roundEnd || !isCanvasLoaded)
            return false;
        if (!gameStarted) {
            startGame();
        }
        else {
            cashout();
        }
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const BonusTowersButtonFreebet = (0,index_js_.observer)(_BonusTowersButtonFreebet);

;// ./src/framework/components.bonustowers/BonusTowersButtonFreebet/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersButtonFreebetEvent/BonusTowersButtonFreebetEvent.tsx




function _BonusTowersButtonFreebetEvent({ children }) {
    const { game: { placebetProcessing, gameStarted, roundEnd, isCanvasLoaded, startGame, cashout, }, } = (0,bootstrap.GET_STORE)();
    const handleClick = () => {
        if (placebetProcessing || roundEnd || !isCanvasLoaded)
            return false;
        if (!gameStarted) {
            startGame();
        }
        else {
            cashout();
        }
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const BonusTowersButtonFreebetEvent = (0,index_js_.observer)(_BonusTowersButtonFreebetEvent);

;// ./src/framework/components.bonustowers/BonusTowersButtonFreebetEvent/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersButton/BonusTowersButton.tsx















const Context = (0,preact_module_js_.createContext)({});
function _BonusTowersButton({ children }) {
    const { game: { roundId, gameStarted, hit, placebetProcessing, roundEnd, selectedCell, showBonusGame, isCanvasLoaded, winLevel, coefficient, }, profileCommon: { profile: { currencySign }, }, freebetsCommon: { freebetEnabled, freebetActive }, uiCommon: { amountError, isOnline }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const getBtnType = () => {
        if (freebetEnabled) {
            return 'freebet';
        }
        if (roundId && gameStarted) {
            return 'cashout';
        }
        else {
            return 'play';
        }
    };
    const props = {
        titles: {
            play: t('COMMON.START_GAME'),
            cashout: t('COMMON.CASHOUT'),
            cancel: t('COMMON.CANCEL'),
            confirm: t('COMMON.OPEN'),
        },
        request: placebetProcessing,
        button: getBtnType(),
        buttonsDisabled: {
            play: placebetProcessing ||
                gameStarted ||
                roundId ||
                roundEnd ||
                !!amountError ||
                hit ||
                !isCanvasLoaded ||
                !isOnline,
            cashout: placebetProcessing ||
                !gameStarted ||
                !roundId ||
                !hit ||
                roundEnd ||
                showBonusGame ||
                !isCanvasLoaded ||
                !isOnline,
            cancel: placebetProcessing || !isCanvasLoaded,
            confirm: placebetProcessing ||
                !gameStarted ||
                !roundId ||
                roundEnd ||
                selectedCell === null ||
                !isCanvasLoaded ||
                !isOnline,
            freebet: placebetProcessing ||
                roundEnd ||
                (gameStarted && !hit) ||
                !isCanvasLoaded ||
                !isOnline ||
                (hit && coefficient < freebetActive?.offer?.configuration[0]?.minCoefficient),
        },
        gameStarted: roundId && gameStarted,
        winLevel: winLevel,
        buttonsAnimate: {
            play: !roundId && !gameStarted,
            cashout: false,
            cancel: false,
            confirm: selectedCell !== null,
        },
        isFreebet: freebetEnabled,
        valueFreebet: freebetEnabled && String(currencySign + freebetActive?.offer?.configuration[0]?.betAmount),
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const BonusTowersButton = Object.assign((0,index_js_.observer)(_BonusTowersButton), {
    Play: Object.assign(BonusTowersButtonPlay, {
        Event: BonusTowersButtonPlayEvent,
    }),
    Confirm: Object.assign(BonusTowersButtonConfirm, {
        Event: BonusTowersButtonConfirmEvent,
    }),
    Freebet: Object.assign(BonusTowersButtonFreebet, {
        Event: BonusTowersButtonFreebetEvent,
    }),
    Cashout: Object.assign(BonusTowersButtonCashout, {
        Event: BonusTowersButtonCashoutEvent,
    }),
    Cancel: Object.assign(BonusTowersButtonCancel, {
        Event: BonusTowersButtonCancelEvent,
    }),
});

;// ./src/framework/components.bonustowers/BonusTowersButton/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
;// ./src/framework/components.bonustowers/BonusTowersGameItem/BonusTowersGameItem.tsx





const variants = (0,bootstrap.GET_GAME_CONFIG)().gameResultNames;
function _BonusTowersGameItem({ children, onClick = () => { }, index }) {
    const { game: { roundEnd, roundBombs, roundLight, selectedCell, placebetProcessing, setSelectedCell, placeBet, isCanvasLoaded, roundId }, audioCommon: { playAudio }, freebetsCommon: { freebetActive, freebetEnabled }, } = (0,bootstrap.GET_STORE)();
    const timer = (0,hooks_module_js_.useRef)(null);
    const handleClick = (e) => {
        if (placebetProcessing || roundEnd || !isCanvasLoaded || !roundId)
            return null;
        const minCoefficient = freebetActive?.offer?.configuration[0]?.minCoefficient;
        setSelectedCell(index);
        freebetEnabled ? placeBet(true, minCoefficient) : placeBet();
        onClick(e);
    };
    const playSounds = () => {
        timer.current && clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            if (roundBombs.includes(selectedCell)) {
                playAudio(variants[1]);
            }
            else if (roundLight === selectedCell) {
                playAudio(variants[2]);
            }
            else {
                playAudio(variants[0]);
            }
        }, 200);
    };
    (0,hooks_module_js_.useEffect)(() => {
        roundEnd && playSounds();
    }, [roundEnd]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const BonusTowersGameItem = (0,index_js_.observer)(_BonusTowersGameItem);

;// ./src/framework/components.bonustowers/BonusTowersGameItem/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersGame/BonusTowersGame.tsx







const BonusTowersGame_Context = (0,preact_module_js_.createContext)({});
const cellsAmount = (0,bootstrap.GET_GAME_CONFIG)().gameCellsAmount ?? 4;
function _BonusTowersGame({ children }) {
    const { game: { roundEnd, roundBombs, roundLight, selectedCell, showBonusGame, nextCoefficient, currentBetAmount, gameStarted, }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const [grid, setGrid] = (0,hooks_module_js_.useState)(Array(cellsAmount).fill({ type: 'default' }));
    (0,hooks_module_js_.useEffect)(() => {
        const newGrid = grid.map((item, index) => {
            const props = {
                type: 'default',
                active: false,
                showAnimation: false,
            };
            if (selectedCell === index)
                props.active = true;
            if (selectedCell === index && !roundEnd)
                props.showAnimation = true;
            if (roundEnd) {
                if (roundBombs.includes(index))
                    props.type = 'lose';
                if (roundLight === index)
                    props.type = 'extra';
                if (props.type === 'default')
                    props.type = 'win';
            }
            return props;
        });
        setGrid(newGrid);
    }, [roundEnd, selectedCell]);
    const props = {
        grid: grid,
        possibleWinNext: currencySign + (0,shortNumber/* default */.A)(nextCoefficient * currentBetAmount, rounding),
        showCells: gameStarted && !roundEnd,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(BonusTowersGame_Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: !showBonusGame && children(props) }) }));
}
const BonusTowersGame = Object.assign((0,index_js_.observer)(_BonusTowersGame), {
    Item: BonusTowersGameItem,
});

;// ./src/framework/components.bonustowers/BonusTowersGame/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersRenderReload/BonusTowersRenderReload.tsx




function _BonusTowersRenderReload({ children, onClick = () => { } }) {
    const { setReload } = (0,hooks_module_js_.useContext)(BonusTowersRender_Context);
    const handleClick = () => {
        setReload(Date.now());
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const BonusTowersRenderReload = _BonusTowersRenderReload;

;// ./src/framework/components.bonustowers/BonusTowersRenderReload/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersRender/BonusTowersRender.tsx





const BonusTowersRender_Context = (0,preact_module_js_.createContext)({});
function _BonusTowersRender({ children, betData }) {
    const { game: { results, level }, result, } = betData;
    const [list, setList] = (0,hooks_module_js_.useState)([]);
    const [animationIndex, setAnimationIndex] = (0,hooks_module_js_.useState)(-1);
    const animationTimeout = (0,hooks_module_js_.useRef)(null);
    const [reload, setReload] = (0,hooks_module_js_.useState)(0);
    const animationStep = (0,bootstrap.GET_GAME_CONFIG)().pageRender.animationDuration || 500;
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
        if (animationIndex > results.length) {
            return;
        }
        const isRun = animationIndex >= 0;
        const list = [];
        for (let i = 0; i < animationIndex; i++) {
            list.unshift({
                result: results[i].result === 'won' ? (results[i].bonus ? 'lightning' : 'banana') : 'lose',
                coeff: results[i].coefficient,
                index: results[i].selected,
            });
        }
        setList(list);
        if (isRun)
            animationTimeout.current = window.setTimeout(() => {
                setAnimationIndex(animationIndex + 1);
            }, animationStep);
    }, [animationIndex]);
    return ((0,jsxRuntime_module/* jsx */.Y)(BonusTowersRender_Context.Provider, { value: { setReload }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                results: list,
                isLost: result === 'lost',
                level,
            }) }) }));
}
const BonusTowersRender = Object.assign(_BonusTowersRender, {
    Reload: BonusTowersRenderReload,
});

;// ./src/framework/components.bonustowers/BonusTowersRender/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersWinLevel/BonusTowersWinLevel.tsx




const bonusGameWinLevel = (0,bootstrap.GET_GAME_CONFIG)().bonusGameWinLevel ?? 100;
function _BonusTowersWinLevel({ children, level = 0, onLoad = () => { } }) {
    const { game: { gameResult, showWinPopup, winLevel, coefficient, showBonusGamePopup, showBonusGame }, } = (0,bootstrap.GET_STORE)();
    const [activeLevel, setActiveLevel] = (0,hooks_module_js_.useState)(null);
    (0,hooks_module_js_.useEffect)(() => {
        showBonusGame && setActiveLevel(bonusGameWinLevel);
        !showWinPopup && !showBonusGamePopup && !showBonusGame && setActiveLevel(winLevel);
    }, [showBonusGame, coefficient, showBonusGamePopup]);
    if (level === activeLevel) {
        (0,hooks_module_js_.useEffect)(() => {
            gameResult === 'won' && onLoad();
        }, [gameResult]);
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    }
    return null;
}
const BonusTowersWinLevel = (0,index_js_.observer)(_BonusTowersWinLevel);

;// ./src/framework/components.bonustowers/BonusTowersWin/BonusTowersWin.tsx





const bonusGameResultDelay = (0,bootstrap.GET_GAME_CONFIG)().bonusGameResultDelay;
function _BonusTowersWin({ children }) {
    const { game: { winLevel, gameResult, prevGameResult, gameStarted, bonusCoefficient, showBonusGamePopup, setShowBonusGamePopup, }, profileCommon: { profile: { currencySign }, }, } = (0,bootstrap.GET_STORE)();
    const [showBig, setShowBig] = (0,hooks_module_js_.useState)(false);
    const disableTimer = (0,hooks_module_js_.useRef)(null);
    const enableTimer = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        setShowBig(winLevel === 3 && gameResult === 'won');
    }, [gameResult]);
    (0,hooks_module_js_.useEffect)(() => {
        if (bonusCoefficient) {
            disableTimer.current && clearTimeout(disableTimer.current);
            enableTimer.current && clearTimeout(enableTimer.current);
            enableTimer.current = setTimeout(() => {
                setShowBonusGamePopup(true);
            }, bonusGameResultDelay);
            disableTimer.current = setTimeout(() => {
                setShowBonusGamePopup(false);
            }, 3000);
        }
    }, [bonusCoefficient]);
    const onClick = () => {
        setShowBonusGamePopup(false);
        disableTimer.current && clearTimeout(disableTimer.current);
        enableTimer.current && clearTimeout(enableTimer.current);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            profit: prevGameResult[1],
            prefix: currencySign,
            coefficient: prevGameResult[0],
            bonusCoefficient,
            show: !!prevGameResult[0],
            showBig,
            showBonus: showBonusGamePopup,
            onClick,
        }) }));
}
const BonusTowersWin = Object.assign((0,index_js_.observer)(_BonusTowersWin), {
    Level: BonusTowersWinLevel,
});

;// ./src/framework/components.bonustowers/BonusTowersWin/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersControlModalButton/BonusTowersControlModalButton.tsx




function _BonusTowersControlModalButton({ children, onClick = () => { }, btnType }) {
    const { game: { setShowBonusGame, setShowBonusGameConfirm }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (btnType === 'yes') {
            setShowBonusGame(true);
        }
        setShowBonusGameConfirm(false);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const BonusTowersControlModalButton = (0,index_js_.observer)(_BonusTowersControlModalButton);

;// ./src/framework/components.bonustowers/BonusTowersControlModalButton/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersControlModal/BonusTowersControlModal.tsx




function _BonusTowersControlModal({ children }) {
    const { game: { showBonusGameConfirm, setShowBonusGameConfirm, bonusGameActiveButtons }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            show: showBonusGameConfirm,
            onClose: () => setShowBonusGameConfirm(false),
            activeButton: bonusGameActiveButtons,
        }) }));
}
const BonusTowersControlModal = Object.assign((0,index_js_.observer)(_BonusTowersControlModal), {
    Button: BonusTowersControlModalButton,
});

;// ./src/framework/components.bonustowers/BonusTowersControlModal/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersBonusGameHeader/BonusTowersBonusGameHeader.tsx




function _BonusTowersBonusGameHeader({ children }) {
    const { game: { showBonusGame, coefficient, bonusCoefficient, roundResult, lightsCount }, } = (0,bootstrap.GET_STORE)();
    const [iconActive, setIconActive] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useEffect)(() => {
        bonusCoefficient && setIconActive(true);
        lightsCount === 0 && setIconActive(false);
    }, [lightsCount, bonusCoefficient]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            show: showBonusGame,
            currentCoefficient: coefficient,
            bonusGameCoefficient: bonusCoefficient,
            result: roundResult,
            highlightIcons: iconActive,
        }) }));
}
const BonusTowersBonusGameHeader = (0,index_js_.observer)(_BonusTowersBonusGameHeader);

;// ./src/framework/components.bonustowers/BonusTowersBonusGameHeader/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/randomIntFromInterval.ts
var randomIntFromInterval = __webpack_require__(12032);
;// ./src/framework/components.bonustowers/BonusTowersBonusGameGame/BonusTowersBonusGameGame.tsx





const valArr = (0,bootstrap.GET_GAME_CONFIG)().bonusGameResultVariants ?? [];
const winResults = (0,bootstrap.GET_GAME_CONFIG)().bonusGameWinResults;
const BonusTowersBonusGameGame_bonusGameResultDelay = (0,bootstrap.GET_GAME_CONFIG)().bonusGameResultDelay;
const cellsInColAmount = 15;
function _BonusTowersBonusGameGame({ children }) {
    const { game: { bonusCoefficient, roundResult, selectedCell, showBonusGame, lightsCount, roundEnd, setSelectedCell, clickBonusBtn, placebetProcessing, }, } = (0,bootstrap.GET_STORE)();
    const timer = (0,hooks_module_js_.useRef)(null);
    const tapTimer = (0,hooks_module_js_.useRef)(null);
    const getRandomArr = (length) => {
        const arr = [];
        for (let i = 0; i < length; i++) {
            if (i < valArr.length) {
                arr.push({ type: valArr[i] });
            }
            else {
                arr.push({ type: valArr[(0,randomIntFromInterval/* default */.A)(0, valArr.length - 1)] });
            }
        }
        return arr;
    };
    const [leftCol, setLeftCol] = (0,hooks_module_js_.useState)(getRandomArr(cellsInColAmount));
    const [rightCol, setRightCol] = (0,hooks_module_js_.useState)(getRandomArr(cellsInColAmount));
    const [leftStop, setLeftStop] = (0,hooks_module_js_.useState)(false);
    const [rightStop, setRightStop] = (0,hooks_module_js_.useState)(false);
    const [playSoundResult, setPlaySoundResult] = (0,hooks_module_js_.useState)('');
    const onColumnTap = (index) => {
        if (placebetProcessing)
            return null;
        setSelectedCell(index);
        tapTimer.current && clearTimeout(tapTimer.current);
        tapTimer.current = setTimeout(() => {
            clickBonusBtn();
        }, 800);
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (selectedCell === 0) {
            setLeftStop(!!bonusCoefficient || !!roundResult);
            const newLeftCol = leftCol.map((item, index) => {
                const props = {
                    type: item.type,
                };
                const searchVal = winResults[`${bonusCoefficient}`] ?? null;
                if (!!searchVal || roundResult) {
                    const innerIndex = leftCol.findIndex((item) => item.type === (searchVal ?? 'lose'));
                    if (innerIndex === index)
                        props.active = true;
                }
                return props;
            });
            timer.current && clearTimeout(timer.current);
            timer.current = setTimeout(() => {
                setLeftCol(newLeftCol);
                setPlaySoundResult(roundResult === 'lost' ? 'lose' : bonusCoefficient.toString());
            }, BonusTowersBonusGameGame_bonusGameResultDelay);
        }
        else if (selectedCell === 1) {
            setRightStop(!!bonusCoefficient || !!roundResult);
            const newRightCol = rightCol.map((item, index) => {
                const props = {
                    type: item.type,
                };
                const searchVal = winResults[`${bonusCoefficient}`] ?? null;
                if (!!searchVal || roundResult) {
                    const innerIndex = leftCol.findIndex((item) => item.type === (searchVal ?? 'lose'));
                    if (innerIndex === index)
                        props.active = true;
                }
                return props;
            });
            timer.current && clearTimeout(timer.current);
            timer.current = setTimeout(() => {
                setRightCol(newRightCol);
                setPlaySoundResult(roundResult === 'lost' ? 'lose' : bonusCoefficient.toString());
            }, BonusTowersBonusGameGame_bonusGameResultDelay);
        }
    }, [bonusCoefficient, roundResult]);
    (0,hooks_module_js_.useEffect)(() => {
        if (lightsCount === 0) {
            setLeftCol(getRandomArr(cellsInColAmount));
            setRightCol(getRandomArr(cellsInColAmount));
            setLeftStop(false);
            setRightStop(false);
            setPlaySoundResult('');
            timer.current && clearTimeout(timer.current);
        }
    }, [lightsCount]);
    const props = {
        leftColumn: leftCol,
        rightColumn: rightCol,
        leftActive: selectedCell === 0 && showBonusGame,
        rightActive: selectedCell === 1 && showBonusGame,
        leftStop,
        rightStop,
        playSoundSpin: showBonusGame && (selectedCell === 0 || selectedCell === 1) && !roundEnd,
        playSoundResult,
        onColumnTap,
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: showBonusGame && children(props) });
}
const BonusTowersBonusGameGame = (0,index_js_.observer)(_BonusTowersBonusGameGame);

;// ./src/framework/components.bonustowers/BonusTowersBonusGameGame/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersBonusGame/BonusTowersBonusGame.tsx





function _BonusTowersBonusGame({ children }) {
    const { game: { showBonusGame, gameStarted }, } = (0,bootstrap.GET_STORE)();
    const props = {
        bonusGameActive: showBonusGame,
        gameStarted
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) });
}
const BonusTowersBonusGame = Object.assign((0,index_js_.observer)(_BonusTowersBonusGame), {
    Header: BonusTowersBonusGameHeader,
    Game: BonusTowersBonusGameGame,
});

;// ./src/framework/components.bonustowers/BonusTowersBonusGame/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/shortNumberFloored.ts
var shortNumberFloored = __webpack_require__(61683);
;// ./src/framework/components.bonustowers/BonusTowersGameHeader/BonusTowersGameHeader.tsx






const lightsCountMax = (0,bootstrap.GET_GAME_CONFIG)().lightsCount ?? 3;
function _BonusTowersGameHeader({ children }) {
    const { game: { coefficient, currentBetAmount, lightsCount, nextCoefficient, gameResult, gameStarted, hit, selectedCell, cashout, minesAmount, setNextCoefficient, }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const [lightsArr, setLightsArr] = (0,hooks_module_js_.useState)(Array(lightsCountMax).fill(0));
    const [animateNextCoeff, setAnimateNextCoeff] = (0,hooks_module_js_.useState)(false);
    const [currentCoeff, setCurrentCoeff] = (0,hooks_module_js_.useState)(coefficient);
    const [nextCoeff, setNextCoeff] = (0,hooks_module_js_.useState)(coefficient);
    const [animatedCoeff, setAnimatedCoeff] = (0,hooks_module_js_.useState)(nextCoefficient);
    const onNextCoeffAnimEnd = () => {
        setAnimateNextCoeff(false);
        setCurrentCoeff(coefficient);
        setNextCoeff(nextCoefficient);
    };
    (0,hooks_module_js_.useEffect)(() => {
        setNextCoefficient();
    }, [minesAmount]);
    (0,hooks_module_js_.useEffect)(() => {
        gameStarted && hit === 0 && setNextCoeff(nextCoefficient);
    }, [gameStarted, selectedCell]);
    (0,hooks_module_js_.useEffect)(() => {
        if (gameResult !== 'lost') {
            if (gameStarted) {
                setAnimateNextCoeff(true);
                setAnimatedCoeff(coefficient);
            }
            else {
                setCurrentCoeff(coefficient);
            }
        }
    }, [coefficient]);
    (0,hooks_module_js_.useEffect)(() => {
        if (gameResult === 'lost') {
            setCurrentCoeff(0);
            setAnimatedCoeff(0);
            setNextCoeff(nextCoefficient);
            setAnimateNextCoeff(false);
        }
    }, [gameResult]);
    (0,hooks_module_js_.useEffect)(() => {
        const arr = lightsArr.map((item, index) => (index < lightsCount ? 1 : 0));
        setLightsArr(arr);
    }, [lightsCount]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            currentCoefficient: (0,shortNumber/* default */.A)(currentCoeff, 2),
            nextCoefficient: (0,shortNumber/* default */.A)(nextCoeff, 2),
            balance: (0,shortNumberFloored/* default */.A)(Number(currentBetAmount) * coefficient, rounding),
            sign: currencySign,
            lightsCount,
            lightsArr,
            onNextCoeffAnimEnd,
            animateNextCoeff,
            animatedCoefficient: (0,shortNumber/* default */.A)(animatedCoeff, 2),
            onAmountClick: cashout,
        }) }));
}
const BonusTowersGameHeader = (0,index_js_.observer)(_BonusTowersGameHeader);

;// ./src/framework/components.bonustowers/BonusTowersGameHeader/index.tsx


;// ./src/framework/components.bonustowers/BonusTowersHistory/BonusTowersHistory.tsx




function _BonusTowersHistory({ children }) {
    const { game: { betsHistory, hit, showBonusGame, showBonusGameConfirm, gameResult }, } = (0,bootstrap.GET_STORE)();
    const [items, setItems] = (0,hooks_module_js_.useState)([]);
    const timer = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        const newItems = betsHistory
            .slice(-8)
            .reverse()
            .map((item, index) => {
            const props = {
                type: 'l-t',
                active: false,
            };
            switch (item.index) {
                case 0:
                    props.type = 'l-t';
                    break;
                case 1:
                    props.type = 'r-t';
                    break;
                case 2:
                    props.type = 'l-b';
                    break;
                case 3:
                    props.type = 'r-b';
                    break;
            }
            if (index === 0 && gameResult === 'lost')
                props.active = true;
            return props;
        });
        timer.current && clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            setItems(newItems);
        }, gameResult === 'lost' ? 300 : 0);
    }, [hit, gameResult]);
    const props = {
        items: items,
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: !showBonusGame && !showBonusGameConfirm && children(props) });
}
const BonusTowersHistory = (0,index_js_.observer)(_BonusTowersHistory);

;// ./src/framework/components.bonustowers/BonusTowersHistory/index.tsx


;// ./src/framework/components.bonustowers/export.ts













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