"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[1607,2302,7402,7518],{

/***/ 36304:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(21210), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.freebetTooltip--NTJA3{position:relative;display:flex;align-items:center;gap:0.25rem;padding:0.625rem 0.5rem;color:#000;background-color:#fff;border:0.0625rem solid #ff003a;border-radius:0.25rem;font-size:0.75rem;font-weight:400;filter:drop-shadow(0.1875rem 0.1875rem 0 #ff003a)}.freebetTooltip--NTJA3::before{content:"";position:absolute;bottom:0;left:50%;transform:translate(-50%, calc(100% + -0.0625rem));border-style:solid;border-width:0.3125rem 0.3125rem 0 0.3125rem;border-color:#fff rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.freebetTooltipIcon--IuEYg{width:1rem;height:1rem;background:url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center/contain}.freebetTooltipItem--EHfhq{display:flex;align-items:center;gap:.2em}.freebetTooltipStrong--SRhrt,.freebetTooltipStrongUpper--zU1e9{font-style:italic;font-weight:800}.freebetTooltipStrongUpper--zU1e9{white-space:nowrap;text-transform:uppercase}.upper{text-transform:uppercase}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"freebetTooltip": `freebetTooltip--NTJA3`,
	"freebetTooltipIcon": `freebetTooltipIcon--IuEYg`,
	"freebetTooltipItem": `freebetTooltipItem--EHfhq`,
	"freebetTooltipStrong": `freebetTooltipStrong--SRhrt`,
	"freebetTooltipStrongUpper": `freebetTooltipStrongUpper--zU1e9`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 76314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 4417:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 31601:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

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

/***/ 85072:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 77659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 10540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 55056:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 97825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 41113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 57157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* reexport */ Freebets)
});

// UNUSED EXPORTS: Context

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
;// ./src/framework/components/FreebetsItem/FreebetsItem.tsx




function _FreebetsItem({ children, index, onClick = () => { } }) {
    const { uiCommon: { setModal }, freebetsCommon: { updateFreebetsData, freebetsActive, forcedDisabledFreebets, onFreebetChange }, } = (0,bootstrap.GET_STORE)();
    const handleOnClick = () => {
        const id = freebetsActive[index]?.id;
        if (!id)
            return;
        if (onFreebetChange?.showConfirm) {
            setModal({
                modalName: 'freebetsChangeConfirm',
                render: true,
                delayOpen: 0,
                delayClose: 200,
                data: onFreebetChange.additionalText,
                callbackOnSubmit: () => {
                    onFreebetChange.callback();
                    updateFreebetsData({
                        enabled: true,
                        id,
                        time: undefined,
                    });
                },
            });
        }
        else {
            updateFreebetsData({
                enabled: true,
                id,
                time: undefined,
            });
        }
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ disabled: forcedDisabledFreebets })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleOnClick,
        })) }));
}
const FreebetsItem = (0,index_js_.observer)(_FreebetsItem);

;// ./src/framework/components/FreebetsItem/index.ts


;// ./src/framework/components/FreebetsLabel/FreebetsLabel.tsx





function _FreebetsLabel({ children, onClick = () => { }, delayOpen, delayClose, style }) {
    const { freebetsCommon: { freebetActive }, uiCommon: { setModal }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    if (!freebetActive)
        return null;
    const handleOnClick = () => {
        setModal({
            modalName: 'freebets',
            render: true,
            delayOpen,
            delayClose,
        });
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            title: 'FREE BETS',
            left: freebetActive?.left,
            description: t('FREEBETS.NOTIF')
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleOnClick,
            style,
        })) }));
}
const FreebetsLabel = (0,index_js_.observer)(_FreebetsLabel);

;// ./src/framework/components/FreebetsLabel/index.ts


;// ./src/framework/components/FreebetsEnabled/FreebetsEnabled.tsx





function _FreebetsEnabled({ children, confirmation = true, delayOpen, delayClose }) {
    const { uiCommon: { setModal }, freebetsCommon: { freebetsData, updateFreebetsData, freebetsActive, forcedDisabledFreebets, isGameInProgress }, } = (0,bootstrap.GET_STORE)();
    const [showTooltip, setShowTooltip] = (0,hooks_module_js_.useState)(false);
    const { t } = (0,es_index_js_.useTranslation)();
    const handleOnChange = (value) => {
        if (forcedDisabledFreebets)
            return null;
        if (confirmation && !value) {
            setModal({
                modalName: 'freebetsConfirmation',
                render: true,
                delayOpen,
                delayClose,
                callbackOnSubmit: () => {
                    updateFreebetsData({
                        enabled: false,
                        id: undefined,
                        time: Date.now() + 1000 * 60 * 60 * 24,
                    });
                },
            });
            return;
        }
        if (!confirmation && !value) {
            updateFreebetsData({
                enabled: false,
                id: undefined,
                time: Date.now() + 1000 * 60 * 60 * 24,
            });
            return;
        }
        updateFreebetsData({
            enabled: true,
            id: freebetsActive[0]?.id,
            time: undefined,
        });
    };
    if (!freebetsActive.length)
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('FREEBETS.REAL_MONEY'),
            tooltipText: t('FREEBETS.FINISH_ROUND'),
            titleConfirmation: t('FREEBETS.CANCEL'),
            titleLoseProgress: isGameInProgress ? t('FREEBETS.LOSE_PROGRESS') : null,
            titleConfirmationYes: t('COMMON.YES'),
            titleConfirmationNo: t('COMMON.NO'),
            defaultValue: forcedDisabledFreebets ? false : freebetsData.enabled,
            onChange: handleOnChange,
            onMouseEnter: () => forcedDisabledFreebets && setShowTooltip(true),
            onMouseLeave: () => setShowTooltip(false),
            disabled: forcedDisabledFreebets,
            showTooltip,
        }) }));
}
const FreebetsEnabled = (0,index_js_.observer)(_FreebetsEnabled);

;// ./src/framework/components/FreebetsEnabled/index.ts


// EXTERNAL MODULE: ./src/framework/helpers/shortNumberFloored.ts
var shortNumberFloored = __webpack_require__(61683);
;// ./src/framework/components/FreebetsCompleted/FreebetsCompleted.tsx





function _FreebetsCompleted({ children }) {
    const { freebetsCommon: { freebetCompleted }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    if (!freebetCompleted)
        return null;
    if (!freebetCompleted?.payout[0]?.payout)
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            titleCongratulations: t('COMMON.CONGRATULATIONS'),
            titlePayout: t('FREEBETS.TOTAL_GAIN'),
            titleTotal: t('FREEBETS.PLAYED'),
            total: freebetCompleted?.total - freebetCompleted?.left || 0,
            currency: currencySign,
            payout: (0,shortNumberFloored/* default */.A)(freebetCompleted?.payout[0]?.payout || 0, rounding),
        }) }));
}
const FreebetsCompleted = (0,index_js_.observer)(_FreebetsCompleted);

;// ./src/framework/components/FreebetsCompleted/index.ts


;// ./src/framework/components/FreebetsStatus/FreebetsStatus.tsx



function _FreebetsStatus({ children }) {
    const { profileCommon: { profile: { freebetsVerified }, }, freebetsCommon: { freebetActive }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            isActive: freebetsVerified,
            hasActiveFreebets: Boolean(freebetActive),
        }) }));
}
const FreebetsStatus = (0,index_js_.observer)(_FreebetsStatus);

;// ./src/framework/components/FreebetsStatus/index.ts


;// ./src/framework/components/FreebetsTooltipMinCoefficient/FreebetsTooltipMinCoefficient.tsx





function _FreebetsTooltipMinCoefficient({ children, style }) {
    const { freebetsCommon: { freebetActive, freebetsSuccessIndexList, listGetByIndex }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const freebet = listGetByIndex(0);
    if (!freebetActive && !freebet?.freebetActive)
        return null;
    const coefficient = freebetActive?.offer?.configuration[0]?.minCoefficient ||
        freebet?.freebetActive?.offer?.configuration[0]?.minCoefficient;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            coefficient,
            title: t('CHICKENROUTE.FREE_BET.TOOLTIP', {
                amount: `x${coefficient}`,
            }),
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            style,
        })) }));
}
const FreebetsTooltipMinCoefficient = (0,index_js_.observer)(_FreebetsTooltipMinCoefficient);

;// ./src/framework/components/FreebetsTooltipMinCoefficient/index.ts


// EXTERNAL MODULE: ./src/framework/helpers/ratesConverter.ts
var ratesConverter = __webpack_require__(37288);
;// ./src/framework/helpers/calculateFreebetsPayout.ts

function calculateFreebetsPayout(payout, currency, rates) {
    return payout.reduce((acc, item) => {
        if (item.currency === currency) {
            acc += item.payout;
        }
        else {
            acc += (0,ratesConverter/* default */.A)(rates, item.currency, currency, item.payout);
        }
        return acc;
    }, 0);
}

// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
;// ./src/framework/components/Freebets/Freebets.tsx














const Context = (0,preact_module_js_.createContext)({});
function _Freebets({ children }) {
    const { profileCommon: { rates, profile: { currencySign, currency, rounding }, }, freebetsCommon: { loading, freebets, freebetsData, freebetsActive, freebetsArchived, updateFreebetsArchiveEndTime }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [listActive, setListActive] = (0,hooks_module_js_.useState)([]);
    const [listArchived, setListArchived] = (0,hooks_module_js_.useState)([]);
    (0,hooks_module_js_.useEffect)(() => {
        const computed = (item) => ({
            title: t('COMMON.FREEBETS'),
            titleAmount: t('COMMON.BET_AMOUNT'),
            titlePayout: t('FREEBETS.TOTAL_GAIN'),
            titleArchived: t('COMMON.ARCHIVE'),
            titleExpires: t('COMMON.EXPIRES_IN'),
            isActive: item.id === (freebetsData.id || 0),
            isFinished: item.archived,
            currency: currencySign,
            amount: (0,shortNumber/* default */.A)(item.offer.configuration[0].betAmount, rounding),
            payout: (0,shortNumber/* default */.A)(calculateFreebetsPayout(item.payout, currency, rates), rounding),
            timer: {
                countdownDate: item.offer.endAt,
                step: 1000,
                callback: () => {
                    updateFreebetsArchiveEndTime(item.id);
                },
            },
            total: item.total,
            left: item.left,
            leftAndTotal: (() => {
                let result = `${item.left}/${item.total}`;
                if (item.archived && item.left === 0)
                    result = `${item.total}`;
                if (item.archived && item.left === item.total)
                    result = `${item.total}`;
                return result;
            })(),
        });
        const listActive = freebetsActive.map(computed);
        const listArchived = freebetsArchived.map(computed);
        setListActive(listActive);
        setListArchived(listArchived);
    }, [freebets, freebetsData]);
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: { listActive, listArchived }, children: children({
            title: t('COMMON.FREEBETS'),
            titleNotFound: t('COMMON.NOTHING'),
            titleFreebetsFinished: t('COMMON.ARCHIVE'),
            notFound: freebets.length === 0,
            loading,
            listActive,
            listArchived,
            activeTotal: listActive.length > 0 ? listActive.length : null,
        }) }));
}
const Freebets = Object.assign((0,index_js_.observer)(_Freebets), {
    Status: FreebetsStatus,
    Label: FreebetsLabel,
    Enabled: FreebetsEnabled,
    Item: FreebetsItem,
    Completed: FreebetsCompleted,
    TooltipMinCoefficient: FreebetsTooltipMinCoefficient,
});

;// ./src/framework/components/Freebets/index.ts



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


/***/ }),

/***/ 21002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ModuleTooltipMinFreebets: () => (/* reexport */ ModuleTooltipMinFreebets)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: ./src/framework/components/Freebets/index.ts + 14 modules
var Freebets = __webpack_require__(57157);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(97825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(77659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(55056);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(10540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(41113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/module/moduleGroup/ModuleTooltipMinFreebets/styles.module.scss
var styles_module = __webpack_require__(36304);
;// ./src/module/moduleGroup/ModuleTooltipMinFreebets/styles.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles_module/* default */.A, options);




       /* harmony default export */ const ModuleTooltipMinFreebets_styles_module = (styles_module/* default */.A && styles_module/* default */.A.locals ? styles_module/* default */.A.locals : undefined);

;// ./src/module/moduleGroup/ModuleTooltipMinFreebets/ModuleTooltipMinFreebets.tsx




function _ModuleTooltipMinFreebets({ customChildren, style }) {
    const { t } = (0,index_js_.useTranslation)();
    if (customChildren) {
        return (0,jsxRuntime_module/* jsx */.Y)(Freebets/* Freebets */.h.TooltipMinCoefficient, { style: style, children: customChildren });
    }
    return ((0,jsxRuntime_module/* jsx */.Y)(Freebets/* Freebets */.h.TooltipMinCoefficient, { style: style, children: ({ title, coefficient }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: ModuleTooltipMinFreebets_styles_module.freebetTooltip, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: ModuleTooltipMinFreebets_styles_module.freebetTooltipIcon }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: ModuleTooltipMinFreebets_styles_module.freebetTooltipItem, children: (0,jsxRuntime_module/* jsx */.Y)("div", { dangerouslySetInnerHTML: { __html: title } }) })] })) }));
}
const ModuleTooltipMinFreebets = _ModuleTooltipMinFreebets;

;// ./src/module/moduleGroup/ModuleTooltipMinFreebets/index.tsx



/***/ }),

/***/ 21210:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b07907d179cf27c67da6.svg";

/***/ })

}]);