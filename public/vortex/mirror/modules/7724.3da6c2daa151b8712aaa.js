"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2302,7402,7518,7724],{

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

/***/ 71381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  UltimateDiceControlAmount: () => (/* reexport */ UltimateDiceControlAmount),
  UltimateDiceControlButton: () => (/* reexport */ UltimateDiceControlButton),
  UltimateDiceControlHistoryInChart: () => (/* reexport */ UltimateDiceControlHistoryInChart),
  UltimateDiceControlModal: () => (/* reexport */ UltimateDiceControlModal),
  UltimateDiceControlMode: () => (/* reexport */ UltimateDiceControlMode),
  UltimateDiceControlResult: () => (/* reexport */ UltimateDiceControlResult),
  UltimateDiceControlValue: () => (/* reexport */ UltimateDiceControlValue),
  UltimateDiceGame: () => (/* reexport */ UltimateDiceGame),
  UltimateDiceLost: () => (/* reexport */ UltimateDiceLost),
  UltimateDiceRender: () => (/* reexport */ UltimateDiceRender),
  UltimateDiceWon: () => (/* reexport */ UltimateDiceWon)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
;// ./src/framework/components.ultimatedice/UltimateDiceGameRange/UltimateDiceGameRange.tsx




function _UltimateDiceGameRange({ children, verticalMode, horizontalMode }) {
    const { game: { action, values, setValues, disabled, gameCreateResponse }, } = (0,bootstrap.GET_STORE)();
    const validation = (0,hooks_module_js_.useMemo)(() => {
        let valueMassMax = undefined;
        let valueMassMaxReverse = undefined;
        let minStatic = 0.1;
        let maxStatic = 100;
        if (!gameCreateResponse)
            return {
                valueMassMax,
                minStatic,
                maxStatic,
            };
        const { T1MaxSubset, T2MaxSubset } = gameCreateResponse?.settings;
        if (action === 'under') {
            return {
                valueMassMax: T1MaxSubset,
                minStatic: 0.1,
                maxStatic: 99.9,
            };
        }
        if (action === 'over') {
            return {
                valueMassMax: T1MaxSubset,
                valueMassMaxReverse: true,
                minStatic: 0,
                maxStatic: 99.9,
            };
        }
        if (action === 'inner') {
            return {
                valueMassMax: T1MaxSubset,
                minStatic: 0.1,
                maxStatic: 100,
            };
        }
        if (action === 'outer') {
            return {
                valueMassMax: T2MaxSubset,
                valueMassMaxReverse: true,
                minStatic: 0.1,
                maxStatic: 99.9,
            };
        }
        if (action === 'inner2') {
            return {
                valueMassMax: T2MaxSubset,
                minStatic: 0.1,
                maxStatic: 100,
            };
        }
        return {
            valueMassMax,
            valueMassMaxReverse,
            minStatic,
            maxStatic,
        };
    }, [action, gameCreateResponse?.settings]);
    const props = {
        mode: action,
        min: 0,
        max: 100,
        step: 0.1,
        disabled,
        minStatic: validation.minStatic,
        maxStatic: validation.maxStatic,
        valueMassMax: validation.valueMassMax,
        valueMassMaxReverse: validation.valueMassMaxReverse,
        defaultValue: values,
        onChange: setValues,
        ...(horizontalMode && !verticalMode && { horizontalMode }),
        ...(!horizontalMode && verticalMode && { verticalMode }),
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) });
}
const UltimateDiceGameRange = (0,index_js_.observer)(_UltimateDiceGameRange);

;// ./src/framework/components.ultimatedice/UltimateDiceGameRange/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
;// ./src/framework/components.ultimatedice/UltimateDiceGameChart/UltimateDiceGameChart.tsx





function _UltimateDiceGameChart({ children, Chart }) {
    const { profileCommon: { profile: { token }, }, game: { gameResponse, showHistoryInChart }, } = (0,bootstrap.GET_STORE)();
    const childrenRef = (0,hooks_module_js_.useRef)(null);
    const instanceChart = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        const el = childrenRef.current;
        if (!el)
            return;
        instanceChart.current = new Chart(el);
        return () => {
            instanceChart.current?.destroy();
        };
    }, [token]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!gameResponse)
            return;
        if (!instanceChart.current)
            return;
        Chart.data.chart.push({
            value: gameResponse.gameResult,
            isWon: gameResponse.result === 'won',
        });
    }, [gameResponse]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!instanceChart.current)
            return;
        Chart.data.showHistoryInChart = showHistoryInChart;
    }, [showHistoryInChart]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            ref: (node) => {
                if (node instanceof HTMLElement)
                    childrenRef.current = node;
            },
        })) }));
}
const UltimateDiceGameChart = (0,index_js_.observer)(_UltimateDiceGameChart);

;// ./src/framework/components.ultimatedice/UltimateDiceGameChart/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceGame/UltimateDiceGame.tsx




function _UltimateDiceGame({ children }) {
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const UltimateDiceGame = Object.assign((0,index_js_.observer)(_UltimateDiceGame), {
    Chart: UltimateDiceGameChart,
    Range: UltimateDiceGameRange,
});

;// ./src/framework/components.ultimatedice/UltimateDiceGame/index.tsx


// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
;// ./src/framework/components.ultimatedice/UltimateDiceControlModeNext/UltimateDiceControlModeNext.tsx




function _UltimateDiceControlModeNext({ children, onClick = () => { } }) {
    const { game: { action, actionList, setAction, disabled }, } = (0,bootstrap.GET_STORE)();
    const handleClick = () => {
        if (disabled)
            return;
        const index = actionList.indexOf(action);
        const active = actionList[index + 1] || actionList[0];
        setAction(active);
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const UltimateDiceControlModeNext = (0,index_js_.observer)(_UltimateDiceControlModeNext);

;// ./src/framework/components.ultimatedice/UltimateDiceControlModeNext/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceControlModePrev/UltimateDiceControlModePrev.tsx




function _UltimateDiceControlModePrev({ children, onClick = () => { } }) {
    const { game: { action, actionList, setAction, disabled }, } = (0,bootstrap.GET_STORE)();
    const handleClick = () => {
        if (disabled)
            return;
        const index = actionList.indexOf(action);
        const active = actionList[index - 1] || actionList[actionList.length - 1];
        setAction(active);
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const UltimateDiceControlModePrev = (0,index_js_.observer)(_UltimateDiceControlModePrev);

;// ./src/framework/components.ultimatedice/UltimateDiceControlModePrev/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceControlModeListButton/UltimateDiceControlModeListButton.tsx






function _UltimateDiceControlModeListButton({ children, index, onClick = () => { } }) {
    const { game: { setAction, disabled }, } = (0,bootstrap.GET_STORE)();
    const { list } = (0,hooks_module_js_.useContext)(Context);
    const handleClick = (e) => {
        if (disabled)
            return;
        setAction(list[index].key);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const UltimateDiceControlModeListButton = (0,index_js_.observer)(_UltimateDiceControlModeListButton);

;// ./src/framework/components.ultimatedice/UltimateDiceControlModeListButton/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceControlModeList/UltimateDiceControlModeList.tsx







const Context = (0,preact_module_js_.createContext)({});
function _UltimateDiceControlModeList({ children }) {
    const { game: { action, disabled, actionList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [listItems, setListItems] = (0,hooks_module_js_.useState)([]);
    const names = {
        under: t('COMMON.BEARISH'),
        over: t('COMMON.BULLISH'),
        inner: t('COMMON.STOP_HUNTER'),
        outer: t('COMMON.POSITION'),
        inner2: t('COMMON.SCALPING'),
    };
    (0,hooks_module_js_.useEffect)(() => {
        setListItems(actionList.map((item) => ({ name: names[item], key: item, active: item === action })));
    }, [action]);
    const props = {
        list: listItems,
        disabled,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: props, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) }) }));
}
const UltimateDiceControlModeList = Object.assign((0,index_js_.observer)(_UltimateDiceControlModeList), {
    Button: UltimateDiceControlModeListButton,
});

;// ./src/framework/components.ultimatedice/UltimateDiceControlModeList/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceControlMode/UltimateDiceControlMode.tsx








function _UltimateDiceControlMode({ children }) {
    const { game: { action, disabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const names = {
        under: t('COMMON.BEARISH'),
        over: t('COMMON.BULLISH'),
        inner: t('COMMON.STOP_HUNTER'),
        outer: t('COMMON.POSITION'),
        inner2: t('COMMON.SCALPING'),
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ value: action, name: names[action] || '', disabled }) });
}
const UltimateDiceControlMode = Object.assign((0,index_js_.observer)(_UltimateDiceControlMode), {
    Next: UltimateDiceControlModeNext,
    Prev: UltimateDiceControlModePrev,
    List: Object.assign(UltimateDiceControlModeList, {
        Button: UltimateDiceControlModeListButton,
    }),
});

;// ./src/framework/components.ultimatedice/UltimateDiceControlMode/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceControlValueInput/UltimateDiceControlValueInput.tsx



function _UltimateDiceControlValueInput({ children }) {
    const { game: { values, setValues, disabled, action, gameCreateResponse }, } = (0,bootstrap.GET_STORE)();
    function validationValue(values, value, index, action, gameCreateResponse) {
        if (!gameCreateResponse?.settings) {
            return Number(value.toFixed(1));
        }
        const { T1MaxSubset, T2MaxSubset } = gameCreateResponse.settings;
        if (action === 'under') {
            if (value > T1MaxSubset)
                return Number(T1MaxSubset.toFixed(1));
        }
        if (action === 'over') {
            if (value < 100 - T1MaxSubset)
                return Number((100 - T1MaxSubset).toFixed(1));
        }
        if (['inner', 'outer', 'inner2'].includes(action)) {
            const mass = getMass(values, action, value, index);
            const diff = getDiff(action, mass, T1MaxSubset, T2MaxSubset);
            if (diff > 0 && (index === 1 || index === 3)) {
                return Number((value - diff).toFixed(1));
            }
            if (diff > 0 && (index === 0 || index === 2)) {
                return Number((value + diff).toFixed(1));
            }
        }
        return Number(value.toFixed(1));
    }
    function getMass(values, action, value, index) {
        const newValues = [...values];
        newValues[index] = value;
        if (action === 'under') {
            return newValues[0];
        }
        if (action === 'over') {
            return 100 - newValues[0];
        }
        if (action === 'inner') {
            return newValues[1] - newValues[0];
        }
        if (action === 'outer') {
            return newValues[0] + 100 - newValues[1];
        }
        if (action === 'inner2') {
            return newValues[1] - newValues[0] + newValues[3] - newValues[2];
        }
        return 0;
    }
    function getDiff(action, mass, T1MaxSubset, T2MaxSubset) {
        if (['under', 'over', 'inner'].includes(action)) {
            return Math.max(mass - T1MaxSubset, 0);
        }
        if (['outer', 'inner2'].includes(action)) {
            return Math.max(mass - T2MaxSubset, 0);
        }
    }
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: values.map((value, index) => {
            const props = {
                index,
                disabled,
                defaultValue: value,
                min: 0.1,
                max: 100,
                onBlur: (value) => {
                    const newValues = [...values];
                    newValues[index] = validationValue(newValues, value, index, action, gameCreateResponse);
                    setValues(newValues);
                },
            };
            return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) });
        }) }));
}
const UltimateDiceControlValueInput = (0,index_js_.observer)(_UltimateDiceControlValueInput);

;// ./src/framework/components.ultimatedice/UltimateDiceControlValueInput/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceControlValue/UltimateDiceControlValue.tsx





function _UltimateDiceControlValue({ children }) {
    const { game: { action }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const titles = {
        under: t('FASTEXDICE.ROLL_UNDER'),
        over: t('FASTEXDICE.ROLL_OVER'),
        inner: t('COMMON.BET_RANGE'),
        outer: t('FASTEXDICE.ROLL_OUTSIDE'),
        inner2: t('COMMON.BET_RANGE'),
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: titles[action] }) });
}
const UltimateDiceControlValue = Object.assign((0,index_js_.observer)(_UltimateDiceControlValue), {
    Input: UltimateDiceControlValueInput,
});

;// ./src/framework/components.ultimatedice/UltimateDiceControlValue/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceControlAmount/UltimateDiceControlAmount.tsx




const _UltimateDiceControlAmount = ({ children }) => {
    const { profileCommon: { profile: { balance, currencySign, rounding }, limit: { minBet, maxBet, maxWin }, }, game: { amount, setAmount, disabled }, uiCommon: { amountError }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            titleError: amountError,
            titleMaxWin: `${t('COMMON.MAX_PROFIT')} ${currencySign}${maxWin}`,
            disabled: disabled,
            defaultValue: Number(amount),
            min: minBet,
            max: maxBet,
            onChange: setAmount,
            prefix: currencySign,
            connectBalance: balance,
            rounding: rounding > 0 ? rounding - 1 : rounding,
        }) }));
};
const UltimateDiceControlAmount = (0,index_js_.observer)(_UltimateDiceControlAmount);

;// ./src/framework/components.ultimatedice/UltimateDiceControlAmount/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceControlButton/UltimateDiceControlButton.tsx





const _UltimateDiceControlButton = ({ children, onClick = () => { } }) => {
    const { game: { gameRequestStatus, disabled, place }, uiCommon: { amountError }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const props = {
        title: t('COMMON.PLACE_BET'),
        disabled: disabled || !!amountError,
        type: gameRequestStatus,
    };
    const handleClick = () => {
        if (props.disabled || props.type === 'loading')
            return;
        place({});
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
};
const UltimateDiceControlButton = (0,index_js_.observer)(_UltimateDiceControlButton);

;// ./src/framework/components.ultimatedice/UltimateDiceControlButton/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
;// ./src/framework/components.ultimatedice/UltimateDiceControlResult/UltimateDiceControlResult.tsx





const _UltimateDiceControlResult = ({ children }) => {
    const { profileCommon: { profile: { currencySign, rounding }, }, game: { possibleGame }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            coefficient: (0,shortNumber/* default */.A)(possibleGame.coefficient, 2),
            titleCoefficient: t('COMMON.MULTIPLIER'),
            winChance: (0,shortNumber/* default */.A)(possibleGame.winChange, 2),
            titleWinChance: t('COMMON.WIN_CHANCE'),
            possiblePayout: (0,shortNumber/* default */.A)(possibleGame.posiblePayout, rounding),
            titlePossiblePayout: t('COMMON.POSSIBLE.PAYOUT'),
            currencySign: currencySign || '',
        }) }));
};
const UltimateDiceControlResult = (0,index_js_.observer)(_UltimateDiceControlResult);

;// ./src/framework/components.ultimatedice/UltimateDiceControlResult/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceControlHistoryInChart/UltimateDiceControlHistoryInChart.tsx




const _UltimateDiceControlHistoryInChart = ({ children, onClick = () => { } }) => {
    const { game: { disabled, showHistoryInChart, setShowHistoryInChart, gameResponse }, } = (0,bootstrap.GET_STORE)();
    const handleClick = () => {
        if (disabled)
            return;
        setShowHistoryInChart(!showHistoryInChart);
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ disabled: disabled || !gameResponse, active: showHistoryInChart })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
};
const UltimateDiceControlHistoryInChart = (0,index_js_.observer)(_UltimateDiceControlHistoryInChart);

;// ./src/framework/components.ultimatedice/UltimateDiceControlHistoryInChart/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceControlModalButton/UltimateDiceControlModalButton.tsx





function _UltimateDiceControlModalButton({ children, onClick = () => { }, delayOpen, delayClose }) {
    const { uiCommon: { setModal }, game: { disabled }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = () => {
        setModal({
            modalName: 'ultimateDiceControlModal',
            render: true,
            delayOpen,
            delayClose,
        });
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ disabled })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) }));
}
const UltimateDiceControlModalButton = (0,index_js_.observer)(_UltimateDiceControlModalButton);

;// ./src/framework/components.ultimatedice/UltimateDiceControlModalButton/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceControlModal/UltimateDiceControlModal.tsx




function _UltimateDiceControlModal({ children }) {
    const { uiCommon: { modal, setModal }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            show: modal['ultimateDiceControlModal']?.render,
            open: modal['ultimateDiceControlModal']?.open,
            close: modal['ultimateDiceControlModal']?.close,
            onClose: (value) => {
                setModal({
                    modalName: 'ultimateDiceControlModal',
                    render: value,
                });
            },
        }) }));
}
const UltimateDiceControlModal = Object.assign((0,index_js_.observer)(_UltimateDiceControlModal), {
    Button: UltimateDiceControlModalButton,
});

;// ./src/framework/components.ultimatedice/UltimateDiceControlModal/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceWon/UltimateDiceWon.tsx







function _UltimateDiceWon({ children, level = 0, autoHide = true, onLoad = () => { }, onClick = () => { } }) {
    const { game: { winLevel, gameResponse, winScreen, setWinScreen, winScreenTimeout }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    (0,hooks_module_js_.useEffect)(() => {
        if (winScreen && winLevel === level)
            onLoad();
    }, [winScreen, winLevel]);
    const handleClick = () => {
        if (!autoHide && winScreen && winLevel === level) {
            clearTimeout(winScreenTimeout);
            setWinScreen(false);
        }
        onClick();
    };
    const props = {
        show: winScreen && winLevel === level,
        title: t('MINES.YOU_WIN'),
        prefix: currencySign || '',
        profit: (0,shortNumber/* default */.A)(gameResponse?.payout || 0, rounding),
        coefficient: (0,shortNumber/* default */.A)(gameResponse?.coefficient || 0, 2),
        titleCoefficient: t('COMMON.MULTIPLIER'),
        level: winLevel,
        gameResult: gameResponse?.gameResult || 0,
        result: gameResponse?.result,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const UltimateDiceWon = (0,index_js_.observer)(_UltimateDiceWon);

;// ./src/framework/components.ultimatedice/UltimateDiceWon/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceLost/UltimateDiceLost.tsx





function _UltimateDiceLost({ children, autoHide = true, onLoad = () => { }, onClick = () => { } }) {
    const { game: { gameResponse, lostScreen, setLostScreen, lostScreenTimeout }, } = (0,bootstrap.GET_STORE)();
    (0,hooks_module_js_.useEffect)(() => {
        if (lostScreen)
            onLoad();
    }, [lostScreen]);
    const handleClick = () => {
        if (!autoHide && lostScreen) {
            clearTimeout(lostScreenTimeout);
            setLostScreen(false);
        }
        onClick();
    };
    const props = {
        show: lostScreen,
        gameResult: gameResponse?.gameResult || 0,
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children(props)).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const UltimateDiceLost = (0,index_js_.observer)(_UltimateDiceLost);

;// ./src/framework/components.ultimatedice/UltimateDiceLost/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceRenderRange/UltimateDiceRenderRange.tsx



function _UltimateDiceRenderRange({ children, verticalMode, horizontalMode }) {
    const { action, value1left, value1right, value2left, value2right } = (0,hooks_module_js_.useContext)(UltimateDiceRender_Context);
    const values = (0,hooks_module_js_.useMemo)(() => {
        if (action === 'under') {
            return [value1right];
        }
        if (action === 'over') {
            return [value1left];
        }
        if (action === 'inner') {
            return [value1left, value1right];
        }
        if (action === 'outer') {
            return [value1right, value2left];
        }
        if (action === 'inner2') {
            return [value1left, value1right, value2left, value2right];
        }
        return [0];
    }, []);
    const props = {
        mode: action,
        min: 0,
        max: 100,
        step: 0.1,
        disabled: true,
        defaultValue: values,
        onChange: () => { },
        ...(horizontalMode && !verticalMode && { horizontalMode }),
        ...(!horizontalMode && verticalMode && { verticalMode }),
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(props) });
}
const UltimateDiceRenderRange = _UltimateDiceRenderRange;

;// ./src/framework/components.ultimatedice/UltimateDiceRenderRange/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceRenderReload/UltimateDiceRenderReload.tsx




function _UltimateDiceRenderReload({ children, onClick = () => { } }) {
    const { setReload } = (0,hooks_module_js_.useContext)(UltimateDiceRender_Context);
    const handleClick = () => {
        setReload(Date.now());
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const UltimateDiceRenderReload = _UltimateDiceRenderReload;

;// ./src/framework/components.ultimatedice/UltimateDiceRenderReload/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceRenderResult/UltimateDiceRenderResult.tsx




function _UltimateDiceRenderResult({ children }) {
    const { result, gameResult, currency, amount, payout, reload } = (0,hooks_module_js_.useContext)(UltimateDiceRender_Context);
    const [show, setShow] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useEffect)(() => {
        window.setTimeout(() => {
            setShow(true);
        }, (0,bootstrap.GET_GAME_CONFIG)().pageRender.animationDelay || 0);
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        if (!show)
            return;
        setShow(false);
        window.setTimeout(() => {
            setShow(true);
        }, (0,bootstrap.GET_GAME_CONFIG)().pageRender.animationDelay || 0);
    }, [reload]);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ show, result, gameResult, currency, amount, payout }) });
}
const UltimateDiceRenderResult = _UltimateDiceRenderResult;

;// ./src/framework/components.ultimatedice/UltimateDiceRenderResult/index.tsx


;// ./src/framework/components.ultimatedice/UltimateDiceRender/UltimateDiceRender.tsx






const UltimateDiceRender_Context = (0,preact_module_js_.createContext)({});
function _UltimateDiceRender({ children, betData }) {
    if (!betData)
        return null;
    const [reload, setReload] = (0,hooks_module_js_.useState)(0);
    return ((0,jsxRuntime_module/* jsx */.Y)(UltimateDiceRender_Context.Provider, { value: {
            action: betData.game.action,
            value1left: betData.game.value1left,
            value1right: betData.game.value1right,
            value2left: betData.game.value2left,
            value2right: betData.game.value2right,
            result: betData.result,
            gameResult: betData.game.result,
            currency: betData.currency,
            payout: betData.payout,
            amount: betData.amount,
            reload,
            setReload,
        }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children }) }));
}
const UltimateDiceRender = Object.assign(_UltimateDiceRender, {
    Result: UltimateDiceRenderResult,
    Range: UltimateDiceRenderRange,
    Reload: UltimateDiceRenderReload,
});

;// ./src/framework/components.ultimatedice/UltimateDiceRender/index.tsx


;// ./src/framework/components.ultimatedice/export.ts













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