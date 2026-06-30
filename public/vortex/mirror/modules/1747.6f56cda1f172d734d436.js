"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[1747,2302,7402,7518],{

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

/***/ 31747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CrystalpokerAutobet: () => (/* reexport */ CrystalpokerAutobet),
  CrystalpokerBonus: () => (/* reexport */ CrystalpokerBonus),
  CrystalpokerButton: () => (/* reexport */ CrystalpokerButton),
  CrystalpokerCombinations: () => (/* reexport */ CrystalpokerCombinations),
  CrystalpokerControlAmount: () => (/* reexport */ CrystalpokerControlAmount),
  CrystalpokerGame: () => (/* reexport */ CrystalpokerGame),
  CrystalpokerInfo: () => (/* reexport */ CrystalpokerInfo),
  CrystalpokerMock: () => (/* reexport */ CrystalpokerMock),
  CrystalpokerRender: () => (/* reexport */ CrystalpokerRender),
  CrystalpokerStyle: () => (/* reexport */ CrystalpokerStyle),
  CrystalpokerWin: () => (/* reexport */ CrystalpokerWin)
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
// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js
var compat_module = __webpack_require__(17402);
;// ./src/framework/components.crystalpoker/CrystalpokerBonusGames/CrystalpokerBonusGames.tsx




function _CrystalpokerBonusGames({ children }) {
    const { bonusGameActive, bonusGamesMap } = (0,compat_module.useContext)(Context);
    const bonusGamesList = Object.keys(bonusGamesMap);
    const props = {
        bonusGameActive: bonusGamesList[bonusGameActive],
        bonusGamesList: bonusGamesList.map((game) => ({
            name: bonusGamesMap[game].name,
            active: bonusGamesList[bonusGameActive] === game,
        })),
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) });
}
const CrystalpokerBonusGames = (0,index_js_.observer)(_CrystalpokerBonusGames);

;// ./src/framework/components.crystalpoker/CrystalpokerBonusGames/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/animate.ts
var animate = __webpack_require__(93974);
;// ./src/framework/components.crystalpoker/CrystalpokerBonusItems/CrystalpokerBonusItems.tsx







const timingFunction = {
    linear: animate/* linear */.sn,
    makeEaseOut: (0,animate/* makeEaseOut */.L4)(animate/* easeOutCubic */.p_),
    easeOutCubic: animate/* easeOutCubic */.p_,
};
const bonusItemsSliderLength = 3;
function _CrystalpokerBonusItems({ children, onItem = () => { }, onFinish = () => { }, onStart = () => { } }) {
    const { game: { roundId, bonusGameId, bonusRoll, crystalsAnimationFinished, gameConfig }, uiCommon: { isVisible, screenWidth, screenHeight, noAnimation }, } = (0,bootstrap.GET_STORE)();
    const animationStarted = crystalsAnimationFinished.some((item) => !item);
    const { bonusItemActive, bonusItemsMap } = (0,compat_module.useContext)(Context);
    const childrenRef = (0,compat_module.useRef)();
    const [animation, setAnimation] = (0,compat_module.useState)(false);
    const [winIndex, setWinIndex] = (0,compat_module.useState)(-1);
    const [map, setMap] = (0,compat_module.useState)([]);
    const resetTimeout = (0,compat_module.useRef)();
    const bonusKeys = Object.keys(bonusItemsMap).map(Number);
    const bonusItemsList = Object.values(bonusItemsMap);
    (0,compat_module.useEffect)(() => {
        if (!childrenRef.current)
            return;
        if (!childrenRef.current.children.length)
            return;
        const winIndexObj = winItemIndex();
        const itemHeight = parseFloat(getComputedStyle(childrenRef.current.children[0]).height);
        const itemYFirst = itemHeight * winIndexObj.first;
        childrenRef.current.style.transform = `translateY(${itemYFirst}px)`;
    }, []);
    (0,compat_module.useEffect)(() => {
        if (animationStarted)
            setWinIndex(-1);
    }, [animationStarted]);
    (0,compat_module.useEffect)(() => {
        let map = [...bonusKeys];
        let count = 0;
        while (count < bonusItemsSliderLength) {
            map = [...map, ...bonusKeys];
            count++;
        }
        map = [...map, ...bonusKeys];
        setMap(map.map((item, index) => ({
            item: item,
            name: bonusItemsList[item],
            win: index === winIndex,
        })));
    }, [winIndex]);
    (0,compat_module.useEffect)(() => {
        if (!bonusRoll)
            return;
        if (roundId === '')
            return;
        if (bonusGameId === null)
            return;
        if (!childrenRef.current)
            return;
        if (!childrenRef.current.children.length)
            return;
        setWinIndex(-1);
        const winIndexObj = winItemIndex();
        let itemCount = 0;
        setAnimation(true);
        onStart();
        (0,animate/* animate */.i0)({
            duration: gameConfig.bonusRollDuration,
            timing: animate/* easeOutCubic */.p_,
            draw: function (progress) {
                if (!childrenRef.current)
                    return;
                if (resetTimeout.current) {
                    clearTimeout(resetTimeout.current);
                }
                const itemHeight = parseFloat(getComputedStyle(childrenRef.current.children[0]).height);
                const itemYFirst = itemHeight * winIndexObj.first - itemHeight;
                const itemYLast = itemHeight * winIndexObj.last - itemHeight;
                const y = itemYFirst + (itemYLast - itemYFirst) * progress;
                childrenRef.current.style.transform = `translateY(${y}px)`;
                const computedItemCount = Math.round((itemYFirst + (itemYFirst - itemYLast) * progress) / itemHeight);
                if (computedItemCount > itemCount) {
                    const item = {
                        ...map[computedItemCount],
                        last: computedItemCount === winIndexObj.last,
                        item: bonusItemActive,
                    };
                    delete item.win;
                    if (isVisible)
                        onItem(item);
                    itemCount = computedItemCount;
                }
                if (progress === 1) {
                    childrenRef.current.style.transform = `translateY(${itemYFirst}px)`;
                    const item = {
                        ...map[computedItemCount],
                    };
                    delete item.win;
                    if (isVisible)
                        onFinish(item);
                    setWinIndex(winIndexObj.first);
                    setAnimation(false);
                }
            },
        });
    }, [bonusRoll]);
    (0,compat_module.useEffect)(() => {
        if (roundId === '')
            return;
        if (!childrenRef.current)
            return;
        if (!childrenRef.current.children.length)
            return;
        const winIndexObj = winItemIndex();
        const itemHeight = parseFloat(getComputedStyle(childrenRef.current.children[0]).height);
        const itemYFirst = itemHeight * winIndexObj.first;
        childrenRef.current.style.transform = `translateY(${itemYFirst}px)`;
    }, [screenWidth, screenHeight]);
    const winItemIndex = () => {
        const index = bonusKeys.findIndex((key) => key === bonusItemActive);
        if (index === -1)
            return {
                first: bonusKeys.length,
                last: bonusKeys.length,
            };
        return {
            first: index + bonusKeys.length * 2,
            last: index + bonusItemsSliderLength * bonusKeys.length,
        };
    };
    const props = {
        bonusItemActive: bonusItemsList[bonusItemActive],
        map,
        bonusItemsList: map,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            ref: (node) => {
                if (node instanceof HTMLElement)
                    childrenRef.current = node;
            },
        })) }));
}
const CrystalpokerBonusItems = (0,index_js_.observer)(_CrystalpokerBonusItems);

;// ./src/framework/components.crystalpoker/CrystalpokerBonusItems/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
;// ./src/framework/components.crystalpoker/CrystalpokerBonusAlert/CrystalpokerBonusAlert.tsx





function _CrystalpokerBonusAlert({ children, onLoad }) {
    const { game: { bonusAlert }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    if (bonusAlert) {
        (0,hooks_module_js_.useEffect)(() => {
            onLoad();
        }, []);
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('COMMON.BONUS_GAME'),
            }) }));
    }
    return null;
}
const CrystalpokerBonusAlert = (0,index_js_.observer)(_CrystalpokerBonusAlert);

;// ./src/framework/components.crystalpoker/CrystalpokerBonusAlert/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerBonus/CrystalpokerBonus.tsx








const Context = (0,preact_module_js_.createContext)({});
function _CrystalpokerBonus({ children }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { game: { initialValue, bonusGameId, gameConfig, gameStarted, crystalsAnimationFinished, bonusGame, activeValuesColors, }, } = (0,bootstrap.GET_STORE)();
    const { bonusGames, gameDuration } = gameConfig;
    const props = {
        title: t('COMMON.BONUS_GAME'),
        bonusItemActive: initialValue,
        bonusItemsMap: gameConfig.gameColorsMap,
        bonusGameActive: bonusGameId,
        bonusGamesMap: bonusGames,
        animationFinished: crystalsAnimationFinished.every((item) => item === true),
        animationStarted: crystalsAnimationFinished.some((item) => !item),
        hasBonusGame: !!bonusGame,
        hasBonusGameId: bonusGameId !== null,
        activeValuesColors,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const CrystalpokerBonus = Object.assign((0,index_js_.observer)(_CrystalpokerBonus), {
    Games: CrystalpokerBonusGames,
    Items: CrystalpokerBonusItems,
    Alert: CrystalpokerBonusAlert,
});

;// ./src/framework/components.crystalpoker/CrystalpokerBonus/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerGameCanvas/CrystalpokerGameCanvas.tsx






function _CrystalpokerGameCanvas({ children, Canvas }) {
    const { game: { setCrystalsAnimationFinished, activeGame }, profileCommon: {}, audioCommon: { playAudio }, } = (0,bootstrap.GET_STORE)();
    const { setInstanceChart } = (0,hooks_module_js_.useContext)(CrystalpokerGame_Context);
    const childrenRef = (0,hooks_module_js_.useRef)(null);
    const instanceChart = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        const el = childrenRef.current;
        if (!el)
            return;
        instanceChart.current = new Canvas(el, setCrystalsAnimationFinished);
        instanceChart.current.setPlayAudio(playAudio);
        setInstanceChart(instanceChart.current);
        return () => {
            instanceChart.current?.destroy();
        };
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        instanceChart.current?.setActiveModule(activeGame);
    }, [activeGame]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            ref: (node) => {
                if (node instanceof HTMLElement)
                    childrenRef.current = node;
            },
        })) }));
}
const CrystalpokerGameCanvas = (0,index_js_.observer)(_CrystalpokerGameCanvas);

;// ./src/framework/components.crystalpoker/CrystalpokerGameCanvas/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerGameCrystals/CrystalpokerGameCrystals.tsx






const gameName = 'crystals';
function _CrystalpokerGameCrystals({ children, onSpin }) {
    const { game: { activeGame, initialValue, values, gameConfig, spinId, activeColor, activeValuesColors, activeCombination, crystalsAnimationFinished, }, } = (0,bootstrap.GET_STORE)();
    const { Canvas } = (0,hooks_module_js_.useContext)(CrystalpokerGame_Context);
    if (!Canvas)
        return null;
    if (activeGame !== gameName)
        return null;
    const props = {
        activeColor,
        activeCombination,
        values,
        valuesColor: values.map((value) => gameConfig.gameColorsMap[value] || value),
        initialValue,
        initialValueColor: gameConfig.gameColorsMap[initialValue] || initialValue,
        activeValuesColors,
        crystalsAnimationFinished,
    };
    (0,hooks_module_js_.useEffect)(() => {
        Canvas.setData({ ...props, spinId, activeValuesColors, animated: !!spinId });
        if (crystalsAnimationFinished.filter((item) => !item).length === 1 && spinId) {
        }
    }, [spinId, values]);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child)) });
}
const CrystalpokerGameCrystals = (0,index_js_.observer)(_CrystalpokerGameCrystals);

;// ./src/framework/components.crystalpoker/CrystalpokerGameCrystals/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/getMonitorRefreshRate.ts
var getMonitorRefreshRate = __webpack_require__(554);
// EXTERNAL MODULE: ./src/framework/helpers/plinko/plinkoResultToPath.ts
var plinkoResultToPath = __webpack_require__(8309);
// EXTERNAL MODULE: ./src/framework/helpers/plinko/plinkoPathToIndex.ts
var plinkoPathToIndex = __webpack_require__(29510);
;// ./src/framework/components.crystalpoker/CrystalpokerGamePlinko/CrystalpokerGamePlinko.tsx









const CrystalpokerGamePlinko_gameName = 'plinko';
function _CrystalpokerGamePlinko({ children }) {
    const { game: { bonusGameId, gameConfig, bonusSpinId, bonusGame, placeBonus, activeGame }, } = (0,bootstrap.GET_STORE)();
    const [monitorHz, setMonitorHz] = (0,hooks_module_js_.useState)(60);
    const { Canvas } = (0,hooks_module_js_.useContext)(CrystalpokerGame_Context);
    if (!Canvas)
        return;
    if (activeGame !== CrystalpokerGamePlinko_gameName)
        return null;
    const bonusGameConfig = gameConfig.bonusGames[CrystalpokerGamePlinko_gameName];
    const bonusResult = bonusGame.results[0];
    if (typeof bonusResult === 'object')
        return null;
    const bonusItem = bonusGame.coefficient.items[0];
    const props = {};
    (0,hooks_module_js_.useEffect)(() => {
        if (!bonusSpinId)
            return;
        if (!monitorHz)
            return;
        Canvas.setData({
            spinId: bonusSpinId,
            monitorHz,
            coefficients: bonusGameConfig.coefficients,
            results: [bonusResult],
            bets: [bonusResult].map((result, i) => {
                const path = (0,plinkoResultToPath/* default */.A)(result);
                const index = (0,plinkoPathToIndex/* default */.A)(path);
                return {
                    index,
                    result,
                    coefficient: bonusItem,
                    roundId: bonusSpinId,
                };
            }),
            callback: () => {
                placeBonus();
            },
        });
    }, [monitorHz, bonusSpinId]);
    (0,hooks_module_js_.useEffect)(() => {
        (0,getMonitorRefreshRate/* default */.A)((rate) => {
        });
    }, []);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child)) });
}
const CrystalpokerGamePlinko = (0,index_js_.observer)(_CrystalpokerGamePlinko);

;// ./src/framework/components.crystalpoker/CrystalpokerGamePlinko/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerGameWheel/CrystalpokerGameWheel.tsx







const CrystalpokerGameWheel_timingFunction = {
    linear: animate/* linear */.sn,
    makeEaseOut: (0,animate/* makeEaseOut */.L4)(animate/* easeOutCubic */.p_),
    easeOutCubic: animate/* easeOutCubic */.p_,
};
const CrystalpokerGameWheel_gameName = 'wheel';
function _CrystalpokerGameWheel({ children, onItem = () => { }, onStart = () => { } }) {
    const { game: { bonusSpinId, gameConfig, bonusGame, activeColor, placeBonus, activeGame }, uiCommon: { isVisible }, } = (0,bootstrap.GET_STORE)();
    const [style, setStyle] = (0,hooks_module_js_.useState)({});
    const [animating, setAnimating] = (0,hooks_module_js_.useState)(true);
    const pEnd = (0,hooks_module_js_.useRef)(0);
    const { Canvas } = (0,hooks_module_js_.useContext)(CrystalpokerGame_Context);
    if (!Canvas)
        return null;
    if (activeGame !== CrystalpokerGameWheel_gameName)
        return null;
    const bonusGameConfig = gameConfig.bonusGames[CrystalpokerGameWheel_gameName];
    const bonusResult = bonusGame?.results[0];
    const bonusCoefficient = bonusGame?.coefficient.items[0];
    (0,hooks_module_js_.useEffect)(() => {
        if (!bonusSpinId)
            return;
        const p = (360 / bonusGameConfig.coefficients.length) * Math.trunc(Number(-bonusResult));
        const pBuff = 360 - pEnd.current + p;
        const pBuffCount = 360 * bonusGameConfig.rotateCount;
        let itemIndex = 0;
        onStart();
        (0,animate/* animate */.i0)({
            duration: bonusGameConfig.duration,
            timing: CrystalpokerGameWheel_timingFunction[bonusGameConfig.timingFunction],
            draw: function (progress) {
                const rotate = pEnd.current + (pBuff + pBuffCount) * progress;
                setStyle({ transform: `rotate(${rotate}deg)` });
                const computedItemCount = Math.floor((rotate % 360) / (360 / bonusGameConfig.coefficients.length));
                if (computedItemCount !== -1 && computedItemCount !== itemIndex) {
                    const item = {
                        coefficient: bonusGameConfig.coefficients[computedItemCount],
                    };
                    if (isVisible) {
                        onItem(item);
                    }
                    itemIndex = computedItemCount === bonusGameConfig.coefficients.length ? 0 : computedItemCount;
                }
                if (progress === 1) {
                    pEnd.current = p;
                    placeBonus();
                    setAnimating(false);
                    setTimeout(() => {
                        setAnimating(true);
                    }, 3000);
                }
            },
        });
    }, [bonusSpinId]);
    let level = 0;
    if (bonusCoefficient >= 0.5 && bonusCoefficient < 2) {
        level = 1;
    }
    if (bonusCoefficient >= 2 && bonusCoefficient < 50) {
        level = 2;
    }
    if (bonusCoefficient >= 50) {
        level = 3;
    }
    const props = {
        activeColor,
        bonusResult,
        bonusCoefficient,
        coefficients: bonusGameConfig.coefficients,
        style,
        animating,
        level,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            activeColor,
            bonusResult,
            bonusCoefficient,
            coefficients: bonusGameConfig.coefficients,
            style,
            animating,
            level,
        })).map((child) => (0,preact_module_js_.cloneElement)(child)) }));
}
const CrystalpokerGameWheel = (0,index_js_.observer)(_CrystalpokerGameWheel);

;// ./src/framework/components.crystalpoker/CrystalpokerGameWheel/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerGame/CrystalpokerGame.tsx









const CrystalpokerGame_Context = (0,preact_module_js_.createContext)({});
function _CrystalpokerGame({ children }) {
    const { game: { skipBonus, bonusGame }, uiCommon: { isVisible }, } = (0,bootstrap.GET_STORE)();
    const [instanceChart, setInstanceChart] = (0,hooks_module_js_.useState)(null);
    (0,hooks_module_js_.useEffect)(() => {
        if (!isVisible && bonusGame) {
            skipBonus();
        }
    }, [isVisible, bonusGame]);
    return ((0,jsxRuntime_module/* jsx */.Y)(CrystalpokerGame_Context.Provider, { value: {
            Canvas: instanceChart,
            setInstanceChart,
        }, children: children }));
}
const CrystalpokerGame = Object.assign((0,index_js_.observer)(_CrystalpokerGame), {
    Canvas: CrystalpokerGameCanvas,
    Crystals: CrystalpokerGameCrystals,
    Plinko: CrystalpokerGamePlinko,
    Wheel: CrystalpokerGameWheel,
});

;// ./src/framework/components.crystalpoker/CrystalpokerGame/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerButtonPlay/CrystalpokerButtonPlay.tsx






function _CrystalpokerButtonPlay({ children, onClick = () => { } }) {
    const { type, disabled } = (0,hooks_module_js_.useContext)(CrystalpokerButton_Context);
    const { game: { place }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        if (disabled)
            return false;
        place();
        onClick(e);
    };
    if (type !== 'play')
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrystalpokerButtonPlay = (0,index_js_.observer)(_CrystalpokerButtonPlay);

;// ./src/framework/components.crystalpoker/CrystalpokerButtonPlay/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerButtonPlayEvent/CrystalpokerButtonPlayEvent.tsx




function _CrystalpokerButtonPlayEvent({ children, onClick = () => { } }) {
    const { game: { place }, } = (0,bootstrap.GET_STORE)();
    const hundleClick = (e) => {
        place();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const CrystalpokerButtonPlayEvent = (0,index_js_.observer)(_CrystalpokerButtonPlayEvent);

;// ./src/framework/components.crystalpoker/CrystalpokerButtonPlayEvent/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerButtonRequest/CrystalpokerButtonRequest.tsx




function _CrystalpokerButtonRequest({ children }) {
    const { type } = (0,hooks_module_js_.useContext)(CrystalpokerButton_Context);
    if (type !== 'request')
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const CrystalpokerButtonRequest = (0,index_js_.observer)(_CrystalpokerButtonRequest);

;// ./src/framework/components.crystalpoker/CrystalpokerButtonRequest/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerButtonSkip/CrystalpokerButtonSkip.tsx






function _CrystalpokerButtonSkip({ children, onClick = () => { } }) {
    const { type, disabled } = (0,hooks_module_js_.useContext)(CrystalpokerButton_Context);
    const { game: { place, placeBonus, skipBonus, placebetProcessing }, } = (0,bootstrap.GET_STORE)();
    if (type !== 'skip')
        return null;
    const hundleClick = (e) => {
        if (disabled)
            return;
        skipBonus();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const CrystalpokerButtonSkip = (0,index_js_.observer)(_CrystalpokerButtonSkip);

;// ./src/framework/components.crystalpoker/CrystalpokerButtonSkip/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerButtonStopAutobet/CrystalpokerButtonStopAutobet.tsx






function _CrystalpokerButtonStopAutobet({ children, onClick = () => { } }) {
    const { type } = (0,hooks_module_js_.useContext)(CrystalpokerButton_Context);
    const { autobetCommon: { setAutoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    if (type !== 'stop_autobet')
        return null;
    const hundleClick = (e) => {
        setAutoBetEnabled(false);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const CrystalpokerButtonStopAutobet = (0,index_js_.observer)(_CrystalpokerButtonStopAutobet);

;// ./src/framework/components.crystalpoker/CrystalpokerButtonStopAutobet/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
;// ./src/framework/components.crystalpoker/CrystalpokerButton/CrystalpokerButton.tsx












const CrystalpokerButton_Context = (0,preact_module_js_.createContext)({});
function _CrystalpokerButton({ children }) {
    const { game: { amount, placebetProcessing, bonusGame, payout, bonusProfit, coefficient, gameConfig: { bonusStartDelay, bonusRollDelay, skipAppearanceDelay, bonusRollDuration }, activeGame, }, uiCommon: { amountError }, autobetCommon: { autoBetEnabled }, profileCommon: { profile: { currencySign }, }, freebetsCommon: { freebetsSuccessIndexList }, } = (0,bootstrap.GET_STORE)();
    const autobetEnabledLocal = (0,hooks_module_js_.useRef)(false);
    const loadingTimeout = (0,hooks_module_js_.useRef)(null);
    const [isLoading, setIsLoading] = (0,hooks_module_js_.useState)(false);
    const rounding = 2;
    const { t } = (0,es_index_js_.useTranslation)();
    const [type, setType] = (0,hooks_module_js_.useState)('play');
    const [skipDisabled, setSkipDisabled] = (0,hooks_module_js_.useState)(false);
    const skipDisabledTimeout = (0,hooks_module_js_.useRef)(null);
    const skipTimeout = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        switch (true) {
            case autoBetEnabled: {
                if (type === 'stop_autobet')
                    break;
                autobetEnabledLocal.current = true;
                clear();
                setType('stop_autobet');
                break;
            }
            case bonusGame !== null: {
                if (type === 'skip') {
                    if (skipTimeout.current)
                        clearTimeout(skipTimeout.current);
                    break;
                }
                setSkipDisabled(true);
                skipTimeout.current = window.setTimeout(() => {
                    setType('skip');
                    autobetEnabledLocal.current = false;
                }, autobetEnabledLocal.current ? 0 : bonusStartDelay + bonusRollDelay + bonusRollDuration);
                break;
            }
            case placebetProcessing: {
                if (type === 'request')
                    break;
                clear();
                setType('request');
                break;
            }
            default: {
                autobetEnabledLocal.current = false;
                setType('play');
                break;
            }
        }
    }, [autoBetEnabled, bonusGame, placebetProcessing]);
    (0,hooks_module_js_.useEffect)(() => {
        if (skipDisabledTimeout.current)
            clearTimeout(skipDisabledTimeout.current);
        if (type === 'skip') {
            skipDisabledTimeout.current = setTimeout(() => {
                setSkipDisabled(false);
            }, skipAppearanceDelay);
        }
    }, [type]);
    const clear = () => {
        if (skipTimeout.current)
            clearTimeout(skipTimeout.current);
        if (skipDisabledTimeout.current)
            clearTimeout(skipDisabledTimeout.current);
    };
    const computedTitle = () => {
        if (autoBetEnabled) {
            return t('COMMON.STOP_AUTOBET');
        }
        if (type === 'skip') {
            return t('FREEBETS.TOTAL_GAIN');
        }
        if (freebetsSuccessIndexList.includes(0)) {
            return 'FREE BETS';
        }
        return t('COMMON.PLACE_BET');
    };
    const props = {
        title: computedTitle(),
        request: placebetProcessing,
        type,
        value: type === 'skip'
            ? `${currencySign}${payout ? (0,shortNumber/* default */.A)(Number(coefficient) * Number(amount) + bonusProfit, rounding) : ''}`
            : null,
        disabled: !!amountError ||
            Number(amount) === 0 ||
            (type !== 'skip' && placebetProcessing) ||
            (type === 'skip' && skipDisabled),
        isLoading,
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (type === 'request') {
            loadingTimeout.current = window.setTimeout(() => {
                setIsLoading(true);
            }, 250);
        }
        else {
            if (loadingTimeout.current)
                clearTimeout(loadingTimeout.current);
            setIsLoading(false);
        }
    }, [type]);
    return ((0,jsxRuntime_module/* jsx */.Y)(CrystalpokerButton_Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const CrystalpokerButton = Object.assign((0,index_js_.observer)(_CrystalpokerButton), {
    Play: Object.assign(CrystalpokerButtonPlay, {
        Event: CrystalpokerButtonPlayEvent,
    }),
    Skip: CrystalpokerButtonSkip,
    Request: CrystalpokerButtonRequest,
    StopAutobet: CrystalpokerButtonStopAutobet,
});

;// ./src/framework/components.crystalpoker/CrystalpokerButton/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerControlAmount/CrystalpokerControlAmount.tsx





function _CrystalpokerControlAmount({ children }) {
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { amount, setAmount, lockedUi, placebetProcessing }, uiCommon: { amountError }, } = (0,bootstrap.GET_STORE)();
    const [showTooltip, setShowTooltip] = (0,hooks_module_js_.useState)(false);
    const tooltipTimeout = (0,hooks_module_js_.useRef)(null);
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
            disabled: lockedUi || placebetProcessing,
            defaultValue: Number(amount),
            min: minBet,
            max: maxBet,
            onChange: setAmount,
            prefix: currencySign,
            connectBalance: balance,
            showTooltip,
            rounding: rounding > 0 ? rounding - 1 : rounding,
            gtmAction: 'input_value_changed',
            pushGtmDataOnValueChange: true,
        }) }));
}
const CrystalpokerControlAmount = (0,index_js_.observer)(_CrystalpokerControlAmount);

;// ./src/framework/components.crystalpoker/CrystalpokerControlAmount/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerStyle/CrystalpokerStyle.tsx




function _CrystalpokerStyle({ children }) {
    const { game: { activeCombination, activeColor, gameConfig, crystalsAnimationFinished, crystalsAnimationFinishedAll }, } = (0,bootstrap.GET_STORE)();
    const { gameDuration } = gameConfig;
    const timeout = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        if (!crystalsAnimationFinishedAll)
            return;
        if (activeCombination === null)
            return;
        if (timeout.current)
            clearTimeout(timeout.current);
        const root = document.documentElement;
        const style = getComputedStyle(root);
        const color = style.getPropertyValue(`--color-primary-${activeColor}`);
        const colorRgb = style.getPropertyValue(`--color-primary-${activeColor}-rgb`);
        const gradient = style.getPropertyValue(`--gradient-primary-${activeColor}`);
        root.style.setProperty('--color-primary', color);
        root.style.setProperty('--color-primary-rgb', colorRgb);
        root.style.setProperty('--gradient-primary', gradient);
    }, [activeColor, activeCombination, crystalsAnimationFinished]);
    return null;
    // removed by dead control flow

}
const CrystalpokerStyle = (0,index_js_.observer)(_CrystalpokerStyle);

;// ./src/framework/components.crystalpoker/CrystalpokerStyle/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerMock/CrystalpokerMock.tsx





const CrystalpokerMock_Context = (0,preact_module_js_.createContext)({});
function _CrystalpokerMock({ children }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { game: { mock, setMock, resetMock }, } = (0,bootstrap.GET_STORE)();
    const onChange = (e) => {
        setMock(e.target.value);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: "mock-input", children: (0,jsxRuntime_module/* jsx */.Y)("input", { type: "number", onChange: onChange, placeholder: "Mock", value: mock }) }) }));
}
const CrystalpokerMock = (0,index_js_.observer)(_CrystalpokerMock);

;// ./src/framework/components.crystalpoker/CrystalpokerMock/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerCombinations/CrystalpokerCombinations.tsx





function _CrystalpokerCombinations({ children, onCombination = () => { } }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { game: { gameConfig, activeCombination, coefficient, crystalsAnimationFinishedAll }, profileCommon: { splitTest }, } = (0,bootstrap.GET_STORE)();
    const [activeCurrent, setActiveCurrent] = (0,hooks_module_js_.useState)(activeCombination);
    const [combinations, setCombinations] = (0,hooks_module_js_.useState)(gameConfig.combinationsConfig);
    const variantValue = splitTest?.variantValue;
    const variantType = splitTest?.variantType;
    const isTest = variantValue === 'crystalpoker_lower_volatility' && variantType === 'test';
    (0,hooks_module_js_.useEffect)(() => {
        if (isTest) {
            setCombinations(gameConfig.combinationsConfigTest);
        }
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        if (!crystalsAnimationFinishedAll)
            return;
        setActiveCurrent(activeCombination);
        onCombination(activeCombination);
    }, [crystalsAnimationFinishedAll, activeCombination]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.WINNING_COMBINATIONS'),
            list: combinations.map(({ coefficient, items, hasBonus, probability }, index) => ({
                coefficient,
                items,
                active: activeCurrent === index,
                hasBonus,
            })),
        }) }));
}
const CrystalpokerCombinations = (0,index_js_.observer)(_CrystalpokerCombinations);

;// ./src/framework/components.crystalpoker/CrystalpokerCombinations/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerInfo/CrystalpokerInfo.tsx





function _CrystalpokerInfo({ children }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { game: { bonusGame, bonusGameId, bonusProfit, payout, activeCombination, gameConfig: { combinationsConfig, combinationsConfigTest, bonusStartDelay, bonusRollDelay, bonusRollDuration }, bonusGameLength, placebetProcessing, crystalsAnimationFinished, }, profileCommon: { profile: { currencySign }, splitTest, }, } = (0,bootstrap.GET_STORE)();
    const rounding = 2;
    const [hasBonus, setHasBonus] = (0,hooks_module_js_.useState)(false);
    const hasBonusTimeout = (0,hooks_module_js_.useRef)(null);
    const [combinations, setCombinations] = (0,hooks_module_js_.useState)(combinationsConfig);
    const variantValue = splitTest?.variantValue;
    const variantType = splitTest?.variantType;
    const isTest = variantValue === 'crystalpoker_lower_volatility' && variantType === 'test';
    (0,hooks_module_js_.useEffect)(() => {
        if (isTest) {
            setCombinations(combinationsConfigTest);
        }
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        if (!bonusGame && hasBonusTimeout.current) {
            clearTimeout(hasBonusTimeout.current);
            setHasBonus(false);
            return;
        }
        if (!!bonusGame) {
            hasBonusTimeout.current = window.setTimeout(() => {
                setHasBonus(true);
            }, bonusStartDelay + bonusRollDelay + bonusRollDuration);
        }
    }, [!!bonusGame]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            profitTitle: t('COMMON.PROFIT'),
            bonusTitle: t('COMMON.BONUS'),
            bonusGameTitle: t(`${['COMMON.FREE_SPINS', 'CRSTLPKR.BALLS', 'CRSTLPKR.BALLS', 'CRSTLPKR.BALLS'][bonusGameId] || ''}`, {
                amount1: bonusGameLength - bonusGame?.results?.length + 1,
                amount2: bonusGameLength,
            }),
            profitAmount: payout ? payout.toFixed(rounding) : '0.00',
            currencySign,
            bonusGamesPlayed: Math.min(bonusGameLength - bonusGame?.results?.length + 1, bonusGameLength),
            bonusGamesTotal: bonusGameLength,
            bonusProfit,
            chanceTitle: t('COMMON.WIN_CHANCE'),
            chanceAmount: combinations[activeCombination || 0].probability,
            hasBonus,
            bonusGameId: bonusGameId,
            crystalsAnimationFinished,
        }) }));
}
const CrystalpokerInfo = (0,index_js_.observer)(_CrystalpokerInfo);

;// ./src/framework/components.crystalpoker/CrystalpokerInfo/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerAutobetButton/CrystalpokerAutobetButton.tsx






function _CrystalpokerAutobetButton({ children, onClick = () => { } }) {
    const { autobetCommon: { autoBetEnabled, setAutoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { openList, setOpenList, count, disabled } = (0,hooks_module_js_.useContext)(CrystalpokerAutobet_Context);
    const handleClick = (e) => {
        if (disabled)
            return;
        if (!autoBetEnabled)
            setOpenList(!openList);
        if (autoBetEnabled)
            setAutoBetEnabled(false);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            count: count,
            active: autoBetEnabled,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const CrystalpokerAutobetButton = (0,index_js_.observer)(_CrystalpokerAutobetButton);

;// ./src/framework/components.crystalpoker/CrystalpokerAutobetButton/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerAutobetList/CrystalpokerAutobetList.tsx



function _CrystalpokerAutobetList({ children }) {
    const { openList } = (0,hooks_module_js_.useContext)(CrystalpokerAutobet_Context);
    if (openList)
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const CrystalpokerAutobetList = _CrystalpokerAutobetList;

;// ./src/framework/components.crystalpoker/CrystalpokerAutobetList/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerAutobetListItem/CrystalpokerAutobetListItem.tsx





function _CrystalpokerAutobetListItem({ children, onClick = () => { } }) {
    const { game: { gameConfig }, autobetCommon: { autoBetEnabled, setAutoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    const { setCount, setOpenList } = (0,hooks_module_js_.useContext)(CrystalpokerAutobet_Context);
    const [active, setActive] = (0,hooks_module_js_.useState)(-1);
    const handleClick = (e) => {
        setActive(Number(e.currentTarget.dataset.index));
        setCount(Number(e.currentTarget.dataset.value));
        setOpenList(false);
        setAutoBetEnabled(true);
        onClick(e);
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (!autoBetEnabled)
            setActive(-1);
    }, [autoBetEnabled]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: gameConfig.autobet.list.map((item, index) => (0,preact_module_js_.toChildArray)(children({
            active: active === index,
            value: item,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onclick: handleClick,
            'data-index': index,
            'data-value': item,
            key: index,
        }))) }));
}
const CrystalpokerAutobetListItem = _CrystalpokerAutobetListItem;

;// ./src/framework/components.crystalpoker/CrystalpokerAutobetListItem/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerAutobet/CrystalpokerAutobet.tsx









const CrystalpokerAutobet_Context = (0,preact_module_js_.createContext)({});
function _CrystalpokerAutobet({ children, onPlay = () => { } }) {
    const { game: { roundId, placebetProcessing, place, amount, gameStarted }, uiCommon: { amountError }, autobetCommon: { autoBetEnabled, setAutoBetEnabled, setInitialAmount, initialAmount }, profileCommon: { profile: { balance }, }, } = (0,bootstrap.GET_STORE)();
    const [openList, setOpenList] = (0,hooks_module_js_.useState)(false);
    const [count, setCount] = (0,hooks_module_js_.useState)(-1);
    const { t } = (0,es_index_js_.useTranslation)();
    const disabled = !!amountError || placebetProcessing;
    (0,hooks_module_js_.useEffect)(() => {
        setInitialAmount(autoBetEnabled ? Number(amount) : 0);
    }, [autoBetEnabled]);
    (0,hooks_module_js_.useEffect)(() => {
        if (gameStarted)
            return;
        if (balance <= 0 || balance < initialAmount) {
            setAutoBetEnabled(false);
            setCount(-1);
            return;
        }
        if (autoBetEnabled && count > 0) {
            place();
            setCount(count - 1);
            onPlay();
        }
        if (autoBetEnabled && count === 0) {
            setAutoBetEnabled(false);
            setCount(-1);
        }
    }, [autoBetEnabled, gameStarted]);
    return ((0,jsxRuntime_module/* jsx */.Y)(CrystalpokerAutobet_Context.Provider, { value: { openList, setOpenList, count, setCount, disabled }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('COMMON.AUTO'),
                disabled: !!amountError || placebetProcessing,
                open: openList,
            }) }) }));
}
const CrystalpokerAutobet = Object.assign((0,index_js_.observer)(_CrystalpokerAutobet), {
    Button: CrystalpokerAutobetButton,
    List: Object.assign(CrystalpokerAutobetList, {
        Item: CrystalpokerAutobetListItem,
    }),
});

;// ./src/framework/components.crystalpoker/CrystalpokerAutobet/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerWinLevel/CrystalpokerWinLevel.tsx




function _CrystalpokerWinLevel({ children, level = 0, onLoad = () => { } }) {
    const { game: { winLevel }, } = (0,bootstrap.GET_STORE)();
    if (winLevel === level) {
        (0,hooks_module_js_.useEffect)(() => {
            onLoad();
        }, []);
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    }
    return null;
}
const CrystalpokerWinLevel = (0,index_js_.observer)(_CrystalpokerWinLevel);

;// ./src/framework/components.crystalpoker/CrystalpokerWinLevel/index.tsx


;// ./src/framework/components.crystalpoker/CrystalpokerWin/CrystalpokerWin.tsx







function _CrystalpokerWin({ children }) {
    const { game: { coefficient, payout, bonusPayout, winLevel, winScreen, bonusGameId, gameConfig, bonusGame, amount, placebetProcessing, gameStarted, }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [hasBonus, setHasBonus] = (0,hooks_module_js_.useState)(!!bonusGame);
    const [bonusGameName, setBonusGameName] = (0,hooks_module_js_.useState)('');
    (0,hooks_module_js_.useEffect)(() => {
        if (!bonusGame)
            return;
        setHasBonus(!!bonusGame);
    }, [bonusGame]);
    (0,hooks_module_js_.useEffect)(() => {
        if (bonusGameId === null)
            return;
        const game = gameConfig.bonusGamesList[bonusGameId] || null;
        const gameName = game ? gameConfig.bonusGames[game].name : '';
        setBonusGameName(gameName);
    }, [bonusGameId]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!gameStarted)
            return;
        setBonusGameName('');
        setHasBonus(false);
    }, [gameStarted]);
    if (winScreen) {
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('MINES.YOU_WIN'),
                payout: (0,shortNumber/* default */.A)(payout, rounding),
                prefix: currencySign || '',
                coefficient: Number(coefficient).toFixed(2),
                titleCoefficient: t('COMMON.MULTIPLIER'),
                level: winLevel,
                hasBonus,
                bonusGameName: t(bonusGameName),
                bonusPayout: (0,shortNumber/* default */.A)(bonusPayout, rounding),
            }) }));
    }
    return null;
}
const CrystalpokerWin = Object.assign((0,index_js_.observer)(_CrystalpokerWin), {
    Level: CrystalpokerWinLevel,
});

;// ./src/framework/components.crystalpoker/CrystalpokerWin/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/crystalpoker/getCombination.ts
var getCombination = __webpack_require__(75202);
;// ./src/framework/components.crystalpoker/CrystalpokerRender/CrystalpokerRender.tsx






function _CrystalpokerRender({ children, betData, rounding }) {
    if (!betData)
        return null;
    const config = (0,bootstrap.GET_GAME_CONFIG)() || {
        combinationsConfig: [],
        combinationsConfigTest: [],
        gameColorsMap: [],
        gameDefaultColor: '',
        bonusGamesList: [],
        bonusGames: {},
    };
    const { combinationsConfig = [], combinationsConfigTest = [], gameColorsMap = [], gameDefaultColor, bonusGamesList, bonusGames, } = config;
    const combos = betData.result === 'won' && betData.coefficient === 0.1 ? combinationsConfigTest : combinationsConfig;
    const combination = combos.find((item) => betData.game.coefficient === Number(item.coefficient));
    const colors = betData.game.values.map((value) => gameColorsMap[value] || value);
    const activeCombination = (0,getCombination/* default */.A)({
        values: betData.game.values,
        defaultColor: gameDefaultColor,
        initialColor: betData.game.initialValue,
        isTest: betData.result === 'won' && betData.coefficient === 0.1,
    });
    const bonusGameId = bonusGamesList[betData.game.bonusGameId];
    const bonusGameName = bonusGames[bonusGameId]?.name;
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            combination,
            colors,
            activeCombinationIndex: activeCombination.item,
            activeCmbinationColors: activeCombination.values.map((value) => gameColorsMap[value] || value),
            hasBonusGame: !!betData.game.bonusGame,
            hasBonusRoll: !betData.game.bonusGame && betData.game.bonusGameId !== null,
            bonusGameName: t(bonusGameName),
            payout: betData.payout,
            bonusGameColor: gameColorsMap[betData.game.initialValue],
            bonusPayout: betData.game.bonusGame
                ? (0,shortNumber/* default */.A)(betData.game.bonusGame.coefficient.result * betData.amount, rounding)
                : '',
        }) }));
}
const CrystalpokerRender = (0,index_js_.observer)(_CrystalpokerRender);

;// ./src/framework/components.crystalpoker/CrystalpokerRender/index.tsx


;// ./src/framework/components.crystalpoker/export.ts













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

/***/ 75202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getCombination)
/* harmony export */ });
function getCombination({ values: items = [null, null, null, null, null], defaultColor, initialColor, isTest, }) {
    const comboLength = isTest ? 6 : 5;
    const values = [...items].sort();
    if (values.some((item) => item === null)) {
        return { item: null, value: defaultColor, values: [] };
    }
    if (new Set(values).size === 1) {
        return {
            item: comboLength - 1,
            value: values[0],
            values: [values[0]],
            name: '5',
        };
    }
    if (values[0] === values[1] && values[1] === values[2] && values[2] === values[3]) {
        return {
            item: comboLength - 2,
            value: values[0],
            values: [values[0]],
            name: '4',
        };
    }
    if (values[1] === values[2] && values[2] === values[3] && values[3] === values[4]) {
        return {
            item: comboLength - 2,
            value: values[1],
            values: [values[1]],
            name: '4',
        };
    }
    if (values[0] === values[1] && values[1] === values[2] && values[3] === values[4]) {
        return {
            item: comboLength - 3,
            value: values[0],
            values: [values[0], values[4]],
            name: '3+',
        };
    }
    if (values[0] === values[1] && values[2] === values[3] && values[3] === values[4]) {
        return {
            item: comboLength - 3,
            value: values[2],
            values: [values[0], values[4]],
            name: '3+',
        };
    }
    if (values[0] === values[1] && values[1] === values[2]) {
        return {
            item: comboLength - 4,
            value: values[0],
            values: [values[0]],
            name: '3',
        };
    }
    if (values[1] === values[2] && values[2] === values[3]) {
        return {
            item: comboLength - 4,
            value: values[1],
            values: [values[1]],
            name: '3',
        };
    }
    if (values[2] === values[3] && values[3] === values[4]) {
        return {
            item: comboLength - 4,
            value: values[2],
            values: [values[2]],
            name: '3',
        };
    }
    if (values[0] === values[1] && values[2] === values[3]) {
        return {
            item: comboLength - 5,
            value: initialColor === values[2] ? values[2] : values[2],
            values: [values[0], values[2]],
            name: '2+2',
        };
    }
    if (values[0] === values[1] && values[3] === values[4]) {
        return {
            item: comboLength - 5,
            value: initialColor === values[3] ? values[3] : values[0],
            values: [values[0], values[3]],
            name: '2+2',
        };
    }
    if (values[1] === values[2] && values[3] === values[4]) {
        return {
            item: comboLength - 5,
            value: initialColor === values[4] ? values[4] : values[1],
            values: [values[1], values[4]],
            name: '2+2',
        };
    }
    if (comboLength === 6) {
        if (values[0] === values[1]) {
            return {
                item: comboLength - 6,
                value: values[0],
                values: [values[0]],
                name: '2',
            };
        }
        if (values[1] === values[2]) {
            return {
                item: comboLength - 6,
                value: values[1],
                values: [values[1]],
                name: '2',
            };
        }
        if (values[2] === values[3]) {
            return {
                item: comboLength - 6,
                value: values[2],
                values: [values[2]],
                name: '2',
            };
        }
        if (values[3] === values[4]) {
            return {
                item: comboLength - 6,
                value: values[3],
                values: [values[3]],
                name: '2',
            };
        }
    }
    return { item: null, value: defaultColor, values: [] };
}


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