"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[500,2302,7402,7518],{

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

/***/ 56927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  WheelBets: () => (/* reexport */ WheelBets),
  WheelButton: () => (/* reexport */ WheelButton),
  WheelControlAmount: () => (/* reexport */ WheelControlAmount),
  WheelGame: () => (/* reexport */ WheelGame),
  WheelHistory: () => (/* reexport */ WheelHistory),
  WheelRender: () => (/* reexport */ WheelRender),
  WheelTimer: () => (/* reexport */ WheelTimer),
  WheelWin: () => (/* reexport */ WheelWin)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: ./src/framework/helpers/currencyFix.ts
var currencyFix = __webpack_require__(80599);
// EXTERNAL MODULE: ./src/framework/helpers/ratesConverter.ts
var ratesConverter = __webpack_require__(37288);
// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
;// ./src/framework/components.wheel/WheelBets/WheelBets.tsx








function _WheelBets({ children, count = 8 }) {
    const { game: { betsViews, gameResultAwaitWithRid, coefficient, gameConfig, currentBets, bets }, profileCommon: { profile: { playerId, currencySign, currency, rounding }, rates, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [betsData, setBetsData] = (0,hooks_module_js_.useState)([]);
    const [stat, setStat] = (0,hooks_module_js_.useState)([]);
    const [winIndex, setWinIndex] = (0,hooks_module_js_.useState)(-1);
    (0,hooks_module_js_.useEffect)(() => {
        const coefficientList = Object.keys(betsViews);
        const allCount = {};
        const allSum = {};
        const betsData = {};
        for (let i = 0; i < coefficientList.length; i++) {
            allCount[coefficientList[i]] = betsViews[Number(coefficientList[i])].length;
            allSum[coefficientList[i]] = 0;
            betsData[coefficientList[i]] = [];
            const betsViewsConvertAmount = betsViews[Number(coefficientList[i])].map((item) => {
                return {
                    ...item,
                    amount: (0,ratesConverter/* default */.A)(rates, item.currency, (0,currencyFix/* default */.A)(currency), item.amount),
                };
            });
            const sorted = betsViewsConvertAmount.slice().sort((a, b) => Number(b.amount) - Number(a.amount));
            for (let j = 0; j < sorted.length; j++) {
                allSum[coefficientList[i]] += Number(sorted[j].amount);
                if (count > j) {
                    betsData[coefficientList[i]].push(computedBet(sorted[j]));
                }
                else if (sorted[j].playerId === playerId) {
                    betsData[coefficientList[i]].splice(betsData[coefficientList[i]].length - 1, 1, computedBet(sorted[j]));
                }
            }
            while (betsData[coefficientList[i]].length < count) {
                betsData[coefficientList[i]].push(null);
            }
        }
        const convertAllSum = Object.fromEntries(Object.entries(allSum).map((item) => {
            return [item[0], `${currencySign}${(0,shortNumber/* default */.A)(Number(Number(item[1]).toFixed(2)), rounding)}`];
        }));
        const stat = Object.entries(allCount).map(([key, value]) => {
            return {
                count: Number(value),
                sum: convertAllSum[key],
            };
        });
        setStat(stat);
        setBetsData(Object.values(betsData));
    }, [betsViews, currencySign, currentBets, bets]);
    const computedBet = (item) => {
        return {
            amount: `${currencySign}${(0,shortNumber/* default */.A)(Number(item.amount.toFixed(2)), rounding)}`,
            amountProfit: `+${currencySign}${(0,shortNumber/* default */.A)(Number((item.amount * item.coefficient).toFixed(2)), rounding)}`,
            active: item.playerId === playerId,
            name: item.name,
        };
    };
    (0,hooks_module_js_.useEffect)(() => {
        const coefficientList = gameConfig.buttons.map((item) => item.coefficient);
        setWinIndex(coefficientList.indexOf(coefficient));
        setTimeout(() => {
            setWinIndex(-1);
        }, gameConfig.winDuration);
    }, [gameResultAwaitWithRid]);
    const props = {
        stat: stat,
        bets: betsData,
        winIndex: winIndex,
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) });
}
const WheelBets = (0,index_js_.observer)(_WheelBets);

;// ./src/framework/components.wheel/WheelBets/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
;// ./src/framework/components.wheel/WheelButtonPlay/WheelButtonPlay.tsx






function _WheelButtonPlay({ children, index, onClick = () => { } }) {
    const { list } = (0,hooks_module_js_.useContext)(Context);
    const { game: { awaitTime, place }, } = (0,bootstrap.GET_STORE)();
    if (list[index].button !== 'play')
        return null;
    const hundleClick = (e) => {
        if (list[index].request || !awaitTime)
            return false;
        place(list[index].coefficient);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const WheelButtonPlay = (0,index_js_.observer)(_WheelButtonPlay);

;// ./src/framework/components.wheel/WheelButtonPlay/index.tsx


;// ./src/framework/components.wheel/WheelButtonRequest/WheelButtonRequest.tsx




function _WheelButtonRequest({ children, index, onClick = () => { } }) {
    const { list } = (0,hooks_module_js_.useContext)(Context);
    if (list[index].button !== 'request')
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: onClick,
        })) }));
}
const WheelButtonRequest = _WheelButtonRequest;

;// ./src/framework/components.wheel/WheelButtonRequest/index.tsx


;// ./src/framework/components.wheel/WheelButtonCancel/WheelButtonCancel.tsx






function _WheelButtonCancel({ children, index, onClick = () => { } }) {
    const { list } = (0,hooks_module_js_.useContext)(Context);
    const { game: { awaitTime, cancel }, } = (0,bootstrap.GET_STORE)();
    if (list[index].button !== 'cancel')
        return null;
    const hundleClick = (e) => {
        if (list[index].request || !awaitTime)
            return false;
        cancel({ id: list[index].id, coefficient: list[index].coefficient });
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const WheelButtonCancel = (0,index_js_.observer)(_WheelButtonCancel);

;// ./src/framework/components.wheel/WheelButtonCancel/index.tsx


;// ./src/framework/components.wheel/WheelButtonPlayEvent/WheelButtonPlayEvent.tsx






function _WheelButtonPlayEvent({ children, index, onClick = () => { } }) {
    const { list } = (0,hooks_module_js_.useContext)(Context);
    const { game: { awaitTime, place }, } = (0,bootstrap.GET_STORE)();
    const hundleClick = (e) => {
        if (list[index].request || !awaitTime)
            return false;
        place(list[index].coefficient);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const WheelButtonPlayEvent = (0,index_js_.observer)(_WheelButtonPlayEvent);

;// ./src/framework/components.wheel/WheelButtonPlayEvent/index.tsx


;// ./src/framework/components.wheel/WheelButtonCancelEvent/WheelButtonCancelEvent.tsx






function _WheelButtonCancelEvent({ children, index, onClick = () => { } }) {
    const { list } = (0,hooks_module_js_.useContext)(Context);
    const { game: { awaitTime, cancel }, } = (0,bootstrap.GET_STORE)();
    const hundleClick = (e) => {
        if (list[index].request || !awaitTime)
            return false;
        cancel({ id: list[index].id, coefficient: list[index].coefficient });
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: hundleClick,
        })) }));
}
const WheelButtonCancelEvent = (0,index_js_.observer)(_WheelButtonCancelEvent);

;// ./src/framework/components.wheel/WheelButtonCancelEvent/index.tsx


;// ./src/framework/components.wheel/WheelButton/WheelButton.tsx











const Context = (0,preact_module_js_.createContext)({});
function _WheelButton({ children }) {
    const { game: { gameConfig, placebetProcessing, currentBets, awaitTime }, profileCommon: { profile: { currencySign, rounding }, }, uiCommon: { amountError }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const list = gameConfig.buttons.map(({ title, titleCancel, titleInfo, coefficient }) => {
        const active = currentBets.find((item) => coefficient === item.coefficient);
        return {
            title: active?.coefficient === coefficient ? t(titleCancel) : t(title),
            request: placebetProcessing[coefficient],
            button: placebetProcessing[coefficient] ? 'request' : active?.coefficient === coefficient ? 'cancel' : 'play',
            disabled: !awaitTime || !!amountError,
            amount: active?.amount ? `${currencySign}${(0,shortNumber/* default */.A)(Number(active?.amount), rounding)}` : '',
            amountTitle: t(titleInfo),
            coefficient,
            id: String(active?.id),
        };
    });
    const props = {
        list,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const WheelButton = Object.assign((0,index_js_.observer)(_WheelButton), {
    Play: Object.assign(WheelButtonPlay, {
        Event: WheelButtonPlayEvent,
    }),
    Request: WheelButtonRequest,
    Cancel: Object.assign(WheelButtonCancel, {
        Event: WheelButtonCancelEvent,
    }),
});

;// ./src/framework/components.wheel/WheelButton/index.tsx


;// ./src/framework/components.wheel/WheelControlAmount/WheelControlAmount.tsx




function _WheelControlAmount({ children }) {
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { amount, setAmount, awaitTime, gameStarted }, uiCommon: { amountError }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            titleError: amountError,
            titleMaxWin: `${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`,
            disabled: !awaitTime,
            defaultValue: Number(amount),
            min: minBet,
            max: maxBet,
            onChange: setAmount,
            prefix: currencySign,
            connectBalance: !gameStarted && balance,
            rounding: rounding > 0 ? rounding - 1 : rounding,
        }) }));
}
const WheelControlAmount = (0,index_js_.observer)(_WheelControlAmount);

;// ./src/framework/components.wheel/WheelControlAmount/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/animate.ts
var animate = __webpack_require__(93974);
;// ./src/framework/components.wheel/WheelGame/WheelGame.tsx






const timingFunction = {
    linear: animate/* linear */.sn,
    makeEaseOut: (0,animate/* makeEaseOut */.L4)(animate/* easeOutCubic */.p_),
    easeOutCubic: animate/* easeOutCubic */.p_,
};
function _WheelGame({ children }) {
    const { game: { gameResult, gameConfig, animation, setAnimation }, uiCommon: { noAnimation }, } = (0,bootstrap.GET_STORE)();
    const [rotate, setRotate] = (0,hooks_module_js_.useState)(0);
    const pEnd = (0,hooks_module_js_.useRef)(0);
    (0,hooks_module_js_.useEffect)(() => {
        if (animation) {
            const p = (360 / gameConfig.game.map.length) * (Math.trunc(gameResult) + 1.5);
            const pBuff = 360 - pEnd.current + p;
            const pBuffCount = 360 * gameConfig.game.rotateCount;
            (0,animate/* animate */.i0)({
                duration: noAnimation ? 1 : gameConfig.game.duration,
                timing: timingFunction[gameConfig.game.timingFunction],
                draw: function (progress) {
                    const rotate = pEnd.current + (pBuff + pBuffCount) * progress;
                    setRotate(rotate);
                    if (progress === 1) {
                        pEnd.current = p;
                        setAnimation(false);
                    }
                },
            });
        }
    }, [animation]);
    const style = {
        transform: `rotate(${rotate}deg)`,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            style: style,
        })) }));
}
const WheelGame = (0,index_js_.observer)(_WheelGame);

;// ./src/framework/components.wheel/WheelGame/index.tsx


;// ./src/framework/components.wheel/WheelHistory/WheelHistory.tsx





function _WheelHistory({ children, count }) {
    const { game: { setHistoryListSize, fetchHistory, historyList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    (0,hooks_module_js_.useEffect)(() => {
        setHistoryListSize(count);
        fetchHistory(count);
    }, [count]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.MULTIPLIER'),
            list: historyList,
        }) }));
}
const WheelHistory = (0,index_js_.observer)(_WheelHistory);

;// ./src/framework/components.wheel/WheelHistory/index.tsx


;// ./src/framework/components.wheel/WheelRender/WheelRender.tsx



function _WheelRender({ children, betData }) {
    const { game: { result }, coefficient, } = betData;
    const { t } = (0,es_index_js_.useTranslation)();
    const rotate = (360 / (0,bootstrap.GET_GAME_CONFIG)().game.map.length) * (Math.trunc(result) + 1.5);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            result: (0,bootstrap.GET_GAME_CONFIG)().game.map[Math.trunc(result)],
            resultTitle: t('DICE.RESULT'),
            target: coefficient,
            tragetTitle: t('JAVELINX.YOUR_TARGET'),
            rotate: rotate,
        }) }));
}
const WheelRender = _WheelRender;

;// ./src/framework/components.wheel/WheelRender/index.tsx


;// ./src/framework/components.wheel/WheelTimer/WheelTimer.tsx





function _WheelTimer({ children }) {
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
const WheelTimer = (0,index_js_.observer)(_WheelTimer);

;// ./src/framework/components.wheel/WheelTimer/index.tsx


;// ./src/framework/components.wheel/WheelWinLevel/WheelWinLevel.tsx




function _WheelWinLevel({ children, level = 0, onLoad = () => { } }) {
    const { game: { winLevel }, } = (0,bootstrap.GET_STORE)();
    if (winLevel === level) {
        (0,hooks_module_js_.useEffect)(() => {
            onLoad();
        }, []);
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    }
    return null;
}
const WheelWinLevel = (0,index_js_.observer)(_WheelWinLevel);

;// ./src/framework/components.wheel/WheelWinLevel/index.tsx


;// ./src/framework/components.wheel/WheelWin/WheelWin.tsx






function _WheelWin({ children }) {
    const { game: { result, coefficient, amount, winLevel, winScreen }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    if (winScreen && result === 'win') {
        return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('MINES.YOU_WIN'),
                profit: (0,shortNumber/* default */.A)(Number(Number(amount) * Number(coefficient)), rounding),
                prefix: currencySign,
                coefficient: Number(coefficient),
                titleCoefficient: t('COMMON.MULTIPLIER'),
                level: winLevel,
            }) }));
    }
    return null;
}
const WheelWin = Object.assign((0,index_js_.observer)(_WheelWin), {
    Level: WheelWinLevel,
});

;// ./src/framework/components.wheel/WheelWin/index.tsx


;// ./src/framework/components.wheel/export.ts










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