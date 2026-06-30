"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[1708,7402,7518],{

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

/***/ 66837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* reexport */ MyBetInfo_Context),
  i: () => (/* reexport */ MyBetInfo)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
// EXTERNAL MODULE: ./src/framework/hooks/useShortUrl.ts
var useShortUrl = __webpack_require__(92784);
;// ./src/tracking/loadGTM.ts
function loadGTM({ gameId }) {
}

// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: ./src/framework/constants/index.ts
var constants = __webpack_require__(49865);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/postMessageListener.ts + 1 modules
var postMessageListener = __webpack_require__(25490);
;// ./src/framework/components/MyBetInfoIframe/MyBetInfoIframe.tsx








function _MyBetInfoIframe({ children, customUrl = null, customPath = null, withClientPublicUrl = true, resultIndex, }) {
    let { uiCommon: { betInfoGameId, betInfoId, isMobile, orientation }, profileCommon: { rates, language, rtp, profile: { rounding, id: playerId, currency, currencySign }, settings: { options }, }, } = (0,bootstrap.GET_STORE)();
    const iframeRef = (0,hooks_module_js_.useRef)(null);
    const urlParams = new URLSearchParams(window.location.search);
    const cid = urlParams.get('cid');
    const sub = urlParams.get('sub_partner_id');
    const showRoundId = urlParams.get('showRoundId');
    const showPlayerId = urlParams.get('showPlayerId');
    const [iframeHeight, setIframeHeight] = (0,hooks_module_js_.useState)(0);
    (0,hooks_module_js_.useEffect)(() => {
        const unsubscribe = (0,postMessageListener/* postMessageListener */.K)({
            iframeHeight: (data) => {
                setIframeHeight(data);
            },
            getPlayerId: () => {
                iframeRef.current.contentWindow.postMessage({ type: 'playerId', data: playerId }, '*');
            },
            getIsDemo: () => {
                const urlParams = new URLSearchParams(document.location.search);
                const paramCid = urlParams.get('cid');
                const paramExternalToken = urlParams.get('token');
                const paramDemo = urlParams.get('demo');
                const isDemo = !Boolean(paramCid) || !Boolean(paramExternalToken) || (paramCid === constants/* demoCID */.Qc && paramDemo !== 'false');
                iframeRef.current.contentWindow.postMessage({ type: 'isDemo', data: isDemo }, '*');
            },
            getLocalStorageBetData: () => {
                const playersLikes = localStorageHelper/* default */.A.get('players_likes');
                const playersLikesArr = JSON.parse(playersLikes) || [];
                iframeRef.current.contentWindow.postMessage({
                    type: 'localStorageBetData',
                    data: playersLikesArr,
                }, '*');
            },
            getCurrencyRates: () => {
                try {
                    const serializableRates = rates ? JSON.parse(JSON.stringify(rates)) : null;
                    iframeRef.current.contentWindow.postMessage({ type: 'currencyRates', data: serializableRates }, '*');
                }
                catch (error) {
                    console.error('Error serializing or posting currency rates:', error);
                }
            },
            getUserCurrency: () => {
                iframeRef.current.contentWindow.postMessage({ type: 'userCurrency', data: currency }, '*');
            },
            getUserCurrencySign: () => {
                iframeRef.current.contentWindow.postMessage({ type: 'userCurrencySign', data: currencySign }, '*');
            },
        });
        return () => unsubscribe();
    }, []);
    if (!betInfoGameId || !betInfoId)
        return null;
    const searchParams = new URLSearchParams(window.location.search);
    const host = searchParams.get('host');
    const gameClientPublicUrl = withClientPublicUrl ? (0,bootstrap.GET_GAME_CONFIG)().gameClientPublicUrl || '' : '';
    const url = `${customUrl || window.location.origin}${gameClientPublicUrl}/${customPath || 'render'}`;
    const src = new URL(url);
    src.searchParams.append('betId', betInfoId);
    src.searchParams.append('cid', cid);
    if (sub)
        src.searchParams.append('sub', sub);
    src.searchParams.append('mobile', `${isMobile}`);
    src.searchParams.append('orientation', `${orientation}`);
    src.searchParams.append('locale', language);
    src.searchParams.append('rounding', String(rounding));
    src.searchParams.append('fontSize', document.documentElement.style.fontSize);
    src.searchParams.append('gameClientPublicUrl', gameClientPublicUrl);
    src.searchParams.append('bgTransparent', 'true');
    src.searchParams.append('rtp', `${rtp}`);
    if (showRoundId)
        src.searchParams.append('showRoundId', `${showRoundId}`);
    if (showPlayerId)
        src.searchParams.append('showPlayerId', `${showPlayerId}`);
    if (options?.customBr)
        src.searchParams.append('customBrFields', `${options?.customBr}`);
    if (options?.customMt)
        src.searchParams.append('customMtFields', `${options?.customMt}`);
    if (host)
        src.searchParams.append('host', host);
    if (resultIndex)
        src.searchParams.append('ri', resultIndex);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            ref: iframeRef,
            src: `${src.toString()}`,
            frameBorder: 0,
            style: { minHeight: iframeHeight },
        })) }));
}
const MyBetInfoIframe = (0,index_js_.observer)(_MyBetInfoIframe);

;// ./src/framework/components/MyBetInfoIframe/index.tsx


;// ./src/framework/components/MyBetInfoIframeLoading/MyBetInfoIframeLoading.tsx



function _MyBetInfoIframeLoading({ children }) {
    const [loading, setLoading] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useEffect)(() => {
        const unsubscribe = (0,postMessageListener/* postMessageListener */.K)({
            iframeHeight: (data) => {
                if (Number(data) > 0)
                    setLoading(true);
            },
        });
        return () => unsubscribe();
    }, []);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ loading }) });
}
const MyBetInfoIframeLoading = _MyBetInfoIframeLoading;

;// ./src/framework/components/MyBetInfoIframeLoading/index.tsx


;// ./src/framework/components/MyBetInfoInner/MyBetInfoInner.tsx





const Context = (0,preact_module_js_.createContext)({});
function _MyBetInfoInner({ children, useFullHeight = false }) {
    const [betData, setBetData] = (0,hooks_module_js_.useState)(undefined);
    const searchParams = new URLSearchParams(window.location.search);
    const fontSize = searchParams.get('fontSize');
    const rounding = searchParams.get('rounding') || '2';
    const bgTransparent = searchParams.get('bgTransparent');
    const orientation = searchParams.get('orientation');
    if (fontSize) {
        document.documentElement.style.setProperty('font-size', fontSize);
    }
    (0,hooks_module_js_.useEffect)(() => {
        const app = document.getElementById('app');
        if (app) {
            app.style.position = 'relative';
            if (useFullHeight) {
                app.style.height = '100%';
            }
            const resizeOb = new ResizeObserver(function (entries) {
                window.parent.postMessage({ type: 'iframeHeight', data: Math.ceil(entries[0].target.clientHeight) }, '*');
                window.parent.postMessage({ type: 'iframeReady' }, '*');
            });
            resizeOb.observe(app);
            return () => {
                resizeOb.unobserve(app);
                app.style.position = '';
            };
        }
    }, [betData]);
    (0,hooks_module_js_.useEffect)(() => {
        const unsubscribe = (0,postMessageListener/* postMessageListener */.K)({
            betData: (data) => {
                setBetData(data);
            },
        });
        return () => unsubscribe();
    }, []);
    if (!betData)
        return null;
    return ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [bgTransparent && ((0,jsxRuntime_module/* jsx */.Y)("style", { children: `
        html, body {
          background-color: transparent !important;
        }
      ` })), (0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: { betData, rounding: Number(rounding), orientation }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ betData, rounding: Number(rounding), orientation }) }) })] }));
}
const MyBetInfoInner = (0,index_js_.observer)(_MyBetInfoInner);

;// ./src/framework/components/MyBetInfoInner/index.tsx


;// ./src/framework/helpers/trim.ts
const trim = (name = '', length = 17) => {
    if (name && name.length > length) {
        const head = name.slice(0, length);
        return `${head}...`;
    }
    return name;
};
/* harmony default export */ const helpers_trim = (trim);

;// ./src/framework/components/MyBetInfoId/MyBetInfoId.tsx





function _MyBetInfoId({ children }) {
    const { betData: { id }, showRoundId, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    if (showRoundId && showRoundId === 'false')
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ text: helpers_trim(id), title: id }) });
}
const MyBetInfoId = (0,index_js_.observer)(_MyBetInfoId);

;// ./src/framework/components/MyBetInfoId/index.tsx


// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
// EXTERNAL MODULE: ./src/framework/helpers/ratesConverter.ts
var ratesConverter = __webpack_require__(37288);
;// ./src/framework/components/MyBetInfoAmount/MyBetInfoAmount.tsx







function _MyBetInfoAmount({ children, convertToUserCurrency = false }) {
    const { betData: { amount, currency, currencySign }, rounding, rates, userCurrency, userCurrencySign, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    const { t } = (0,es_index_js_.useTranslation)();
    const amountConverted = convertToUserCurrency && rates && userCurrency ? (0,ratesConverter/* default */.A)(rates, currency, userCurrency, amount) : amount;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            text: `${userCurrencySign || currencySign} ${(0,shortNumber/* default */.A)(amountConverted, rounding)}`,
        }) }));
}
const MyBetInfoAmount = (0,index_js_.observer)(_MyBetInfoAmount);

;// ./src/framework/components/MyBetInfoAmount/index.tsx


;// ./src/framework/components/MyBetInfoClientSeed/MyBetInfoClientSeed.tsx




function _MyBetInfoClientSeed({ children }) {
    const { betData: { game: { clientSeed, fair, }, }, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    if (!clientSeed && !fair?.clientSeed)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: 'Client Seed', text: `${clientSeed ?? fair?.clientSeed}` }) });
}
const MyBetInfoClientSeed = (0,index_js_.observer)(_MyBetInfoClientSeed);

;// ./src/framework/components/MyBetInfoClientSeed/index.tsx


;// ./src/framework/components/MyBetInfoCoefficient/MyBetInfoCoefficient.tsx





function _MyBetInfoCoefficient({ children }) {
    const { betData: { coefficient, payoutCoefficient }, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    const { t } = (0,es_index_js_.useTranslation)();
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: t('COMMON.MULTIPLIER'), text: payoutCoefficient ? `${payoutCoefficient}` : null }) });
}
const MyBetInfoCoefficient = (0,index_js_.observer)(_MyBetInfoCoefficient);

;// ./src/framework/components/MyBetInfoCoefficient/index.tsx


;// ./src/framework/components/MyBetInfoDate/MyBetInfoDate.tsx





function _MyBetInfoDate({ children }) {
    const { betData: { updatedAt }, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    const { t } = (0,es_index_js_.useTranslation)();
    const searchParams = new URLSearchParams(window.location.search);
    const locale = searchParams.get('locale');
    const newDate = new Date(updatedAt);
    const formatted = new Intl.DateTimeFormat(locale ? locale.slice(0, 2) : 'en', {
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
    }).format(newDate);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: t('COMMON.DATE'), text: formatted }) });
}
const MyBetInfoDate = (0,index_js_.observer)(_MyBetInfoDate);

;// ./src/framework/components/MyBetInfoDate/index.tsx


;// ./src/framework/components/MyBetInfoDateStart/MyBetInfoDateStart.tsx





function _MyBetInfoDateStart({ children }) {
    const { betData: { game: { createdAt }, }, betData, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    const { t } = (0,es_index_js_.useTranslation)();
    const searchParams = new URLSearchParams(window.location.search);
    const locale = searchParams.get('locale');
    const newDate = new Date(createdAt);
    const formatted = new Intl.DateTimeFormat(locale ? locale.slice(0, 2) : 'en', {
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    }).format(newDate);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: t('CRASH.START'), text: formatted }) });
}
const MyBetInfoDateStart = (0,index_js_.observer)(_MyBetInfoDateStart);

;// ./src/framework/components/MyBetInfoDateStart/index.tsx


;// ./src/framework/components/MyBetInfoDateFinish/MyBetInfoDateFinish.tsx





function _MyBetInfoDateFinish({ children }) {
    const { betData: { updatedAt, result }, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    const { t } = (0,es_index_js_.useTranslation)();
    const searchParams = new URLSearchParams(window.location.search);
    const locale = searchParams.get('locale');
    const newDate = new Date(updatedAt);
    const formatted = new Intl.DateTimeFormat(locale ? locale.slice(0, 2) : 'en', {
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    }).format(newDate);
    const hasResult = (result && result === 'won') || result === 'lost';
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: hasResult ? t('COMMON.FINISHED') : '―', text: formatted }) });
}
const MyBetInfoDateFinish = (0,index_js_.observer)(_MyBetInfoDateFinish);

;// ./src/framework/components/MyBetInfoDateFinish/index.tsx


;// ./src/framework/components/MyBetInfoHash/MyBetInfoHash.tsx





function _MyBetInfoHash({ children }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { betData: { game: { hash }, }, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    if (!hash)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: t('COMMON.HASH'), text: `${hash}` }) });
}
const MyBetInfoHash = (0,index_js_.observer)(_MyBetInfoHash);

;// ./src/framework/components/MyBetInfoHash/index.tsx


;// ./src/framework/components/MyBetInfoEncryptedHash/MyBetInfoEncryptedHash.tsx





function _MyBetInfoEncryptedHash({ children }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { betData: { game: { encryptedHash }, }, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    if (!encryptedHash)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: t('COMMON.ENCRYPTEDHASH'), text: `${encryptedHash}` }) });
}
const MyBetInfoEncryptedHash = (0,index_js_.observer)(_MyBetInfoEncryptedHash);

;// ./src/framework/components/MyBetInfoEncryptedHash/index.tsx


;// ./src/framework/components/MyBetInfoSalt/MyBetInfoSalt.tsx





function _MyBetInfoSalt({ children }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { betData: { game: { salt }, }, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    if (!salt)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: t('COMMON.SALT'), text: `${salt}` }) });
}
const MyBetInfoSalt = (0,index_js_.observer)(_MyBetInfoSalt);

;// ./src/framework/components/MyBetInfoSalt/index.tsx


;// ./src/framework/components/MyBetInfoNonce/MyBetInfoNonce.tsx





function _MyBetInfoNonce({ children }) {
    const { betData: { game: { nonce, fair }, }, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    const { t } = (0,es_index_js_.useTranslation)();
    if (!nonce && !fair?.nonce)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: t('COMMON.NONCE'), text: `${nonce ?? fair?.nonce}` }) });
}
const MyBetInfoNonce = (0,index_js_.observer)(_MyBetInfoNonce);

;// ./src/framework/components/MyBetInfoNonce/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
;// ./src/framework/components/MyBetInfoPayout/MyBetInfoPayout.tsx









function _MyBetInfoPayout({ children, convertToUserCurrency = false }) {
    const { betData: { payout, currency, currencySign }, rounding, rates, userCurrency, userCurrencySign, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    const { t } = (0,es_index_js_.useTranslation)();
    const config = (0,bootstrap.GET_GAME_CONFIG)();
    const isTruncate = config?.module?.moduleSetting?.truncateDecimalsMybetsPayout;
    const payoutConverted = convertToUserCurrency && rates && userCurrency ? (0,ratesConverter/* default */.A)(rates, currency, userCurrency, payout) : payout;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.PAYOUT'),
            text: `${userCurrencySign || currencySign} ${isTruncate ? (0,truncateDecimals/* default */.A)(payoutConverted, rounding) : (0,shortNumber/* default */.A)(payoutConverted, rounding)}`,
        }) }));
}
const MyBetInfoPayout = (0,index_js_.observer)(_MyBetInfoPayout);

;// ./src/framework/components/MyBetInfoPayout/index.tsx


;// ./src/framework/components/MyBetInfoPlayerId/MyBetInfoPlayerId.tsx





function _MyBetInfoPlayerId({ children }) {
    const { betData: { player: { id }, }, cid, showPlayerId, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    const { t } = (0,es_index_js_.useTranslation)();
    if ((cid && cid === 'habanero-z') || (showPlayerId && showPlayerId === 'false'))
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: t('COMMON.PLAYER_ID'), text: id }) });
}
const MyBetInfoPlayerId = (0,index_js_.observer)(_MyBetInfoPlayerId);

;// ./src/framework/components/MyBetInfoPlayerId/index.tsx


;// ./src/framework/components/MyBetInfoPlayerName/MyBetInfoPlayerName.tsx





function _MyBetInfoPlayerName({ children }) {
    const { betData: { player: { nickname }, }, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    const { t } = (0,es_index_js_.useTranslation)();
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: t('COMMON.NICKNAME'), text: nickname }) });
}
const MyBetInfoPlayerName = (0,index_js_.observer)(_MyBetInfoPlayerName);

;// ./src/framework/components/MyBetInfoPlayerName/index.tsx


;// ./src/framework/components/MyBetInfoServerSeed/MyBetInfoServerSeed.tsx





function _MyBetInfoServerSeed({ children }) {
    const { betData: { game: { serverSeed, fair }, }, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    const { t } = (0,es_index_js_.useTranslation)();
    if (!serverSeed && !fair?.serverSeed)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: t('COMMON.SERVER_SEED'), text: `${serverSeed ?? fair?.serverSeed}` }) });
}
const MyBetInfoServerSeed = (0,index_js_.observer)(_MyBetInfoServerSeed);

;// ./src/framework/components/MyBetInfoServerSeed/index.tsx


;// ./src/framework/components/MyBetInfoExState/MyBetInfoExState.tsx




function _MyBetInfoExState({ children }) {
    const { betData: { game: { exState: { mask } }, }, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    if (!mask)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: 'exState', text: `${mask}` }) });
}
const MyBetInfoExState = (0,index_js_.observer)(_MyBetInfoExState);

;// ./src/framework/components/MyBetInfoExState/index.tsx


;// ./src/framework/components/MyBetInfoEncryptedHashes/MyBetInfoEncryptedHashes.tsx





function _MyBetInfoEncryptedHashes({ children }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const { betData: { game: { encryptedHashes }, }, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    if (!encryptedHashes)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: t('COMMON.ENCRYPTEDHASHES'), text: '', values: encryptedHashes }) });
}
const MyBetInfoEncryptedHashes = (0,index_js_.observer)(_MyBetInfoEncryptedHashes);

;// ./src/framework/components/MyBetInfoEncryptedHashes/index.tsx


;// ./src/framework/components/MyBetInfoBalanceBefore/MyBetInfoBalanceBefore.tsx





function _MyBetInfoBalanceBefore({ children }) {
    const { betData: { balance, currency }, rounding, userCurrencySign, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BALANCE_BEFORE'),
            text: `${userCurrencySign} ${balance}`,
        }) }));
}
const MyBetInfoBalanceBefore = (0,index_js_.observer)(_MyBetInfoBalanceBefore);

;// ./src/framework/components/MyBetInfoBalanceBefore/index.tsx


;// ./src/framework/components/MyBetInfoBalanceAfter/MyBetInfoBalanceAfter.tsx





function _MyBetInfoBalanceAfter({ children }) {
    const { betData: { finalBalance, currency }, rounding, userCurrencySign, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BALANCE_AFTER'),
            text: `${userCurrencySign} ${finalBalance}`,
        }) }));
}
const MyBetInfoBalanceAfter = (0,index_js_.observer)(_MyBetInfoBalanceAfter);

;// ./src/framework/components/MyBetInfoBalanceAfter/index.tsx


;// ./src/framework/components/MyBetInfoIframeInner/MyBetInfoIframeInner.tsx





function _MyBetInfoIframeInner({ children, customUrl = null, customPath = null, isMobile, orientation, language, rtp, rounding, gameClientPublicUrl, cid, sub, betData, }) {
    const [iframeHeight, setIframeHeight] = (0,hooks_module_js_.useState)(0);
    const [iframeReady, setIframeReady] = (0,hooks_module_js_.useState)(false);
    const iframeRef = (0,hooks_module_js_.useRef)(null);
    if (!betData)
        return null;
    const searchParams = new URLSearchParams(window.location.search);
    const host = searchParams.get('host');
    const url = `${customUrl || window.location.origin}${gameClientPublicUrl || ''}/${customPath || 'render'}`;
    const src = new URL(url);
    src.searchParams.append('betId', betData.id);
    src.searchParams.append('cid', cid);
    src.searchParams.append('sub', sub);
    src.searchParams.append('mobile', `${isMobile}`);
    src.searchParams.append('orientation', `${orientation}`);
    src.searchParams.append('locale', language);
    src.searchParams.append('rounding', String(rounding));
    src.searchParams.append('fontSize', document.documentElement.style.fontSize);
    src.searchParams.append('bgTransparent', 'true');
    src.searchParams.append('rtp', `${rtp}`);
    if (host)
        src.searchParams.append('host', host);
    (0,hooks_module_js_.useEffect)(() => {
        if (iframeRef.current?.contentWindow && iframeReady) {
            iframeRef.current.contentWindow.postMessage({ type: 'betData', data: betData }, '*');
        }
    }, [betData, iframeRef.current?.contentWindow, iframeReady]);
    (0,hooks_module_js_.useEffect)(() => {
        const unsubscribe = (0,postMessageListener/* postMessageListener */.K)({
            iframeHeight: (data) => {
                setIframeHeight(data);
            },
            iframeReady: () => {
                setIframeReady(true);
            },
        });
        return () => unsubscribe();
    }, []);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            ref: iframeRef,
            src: `${src.toString()}`,
            frameBorder: 0,
            style: { minHeight: iframeHeight },
        })) }));
}
const MyBetInfoIframeInner = (0,index_js_.observer)(_MyBetInfoIframeInner);

;// ./src/framework/components/MyBetInfoIframeInner/index.tsx


;// ./src/framework/components/MyBetInfoTechData/MyBetInfoTechData.tsx





function _MyBetInfoTechData({ children, convertToUserCurrency = false }) {
    const { betData: { id, encryptedHashes, updatedAt, player: { id: playerId, nickname }, }, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    const { t } = (0,es_index_js_.useTranslation)();
    const searchParams = new URLSearchParams(window.location.search);
    const locale = searchParams.get('locale');
    const showRoundId = searchParams.get('showRoundId');
    const showPlayerId = searchParams.get('showPlayerId');
    if (showRoundId === 'false' && showPlayerId === 'false')
        return null;
    const newDate = new Date(updatedAt);
    const formatted = new Intl.DateTimeFormat(locale ? locale.slice(0, 2) : 'en', {
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
    }).format(newDate);
    let encryptedHashesString = '';
    try {
        encryptedHashesString = JSON.stringify(encryptedHashes);
    }
    catch (error) {
        console.error(error);
    }
    const values = [
        ...(showRoundId !== 'false'
            ? [
                {
                    title: t('COMMON.BET_ID'),
                    value: id,
                },
            ]
            : []),
        ...(showPlayerId !== 'false'
            ? [
                {
                    title: t('COMMON.PLAYER_ID'),
                    value: playerId,
                },
            ]
            : []),
    ];
    let valuesString = '';
    try {
        valuesString = JSON.stringify(values);
    }
    catch (error) {
        console.error(error);
    }
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.BET_AMOUNT'),
            values,
            valuesString,
        }) }));
}
const MyBetInfoTechData = (0,index_js_.observer)(_MyBetInfoTechData);

;// ./src/framework/components/MyBetInfoTechData/index.tsx


;// ./src/framework/components/MyBetInfoHasFairParams/MyBetInfoHasFairParams.tsx





function _MyBetInfoHasFairParams({ children }) {
    const config = (0,bootstrap.GET_GAME_CONFIG)().module?.modulePageRender;
    const { betData: { game, fair }, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    const hasFairParams = config
        ? Object.entries(config).some(([key, value]) => {
            if (value && (game[key] || (fair && fair[key]))) {
                return true;
            }
            return false;
        })
        : false;
    return hasFairParams ? (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children }) : null;
}
const MyBetInfoHasFairParams = (0,index_js_.observer)(_MyBetInfoHasFairParams);

;// ./src/framework/components/MyBetInfoHasFairParams/index.tsx


;// ./src/framework/components/MyBetInfoIndicatorCompleted/MyBetInfoIndicatorCompleted.tsx





function _MyBetInfoIndicatorCompleted({ children }) {
    const { betData: { result }, } = (0,hooks_module_js_.useContext)(MyBetInfo_Context);
    const { t } = (0,es_index_js_.useTranslation)();
    const isFinished = (result && result === 'won') || result === 'lost';
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ isFinished, title: isFinished ? t('HAMSTA.COMPLETED') : '―', text: '' }) });
}
const MyBetInfoIndicatorCompleted = (0,index_js_.observer)(_MyBetInfoIndicatorCompleted);

;// ./src/framework/components/MyBetInfoIndicatorCompleted/index.tsx


;// ./src/framework/components/MyBetInfo/MyBetInfo.tsx

































const MyBetInfo_Context = (0,preact_module_js_.createContext)({});
function _MyBetInfo({ children, useBetsApi = false, customBetId = null, withShortUrl = false, updateShortUrl = () => { }, rates = null, userCurrency = null, userCurrencySign = null, }) {
    let searchParams = new URLSearchParams(window.location.search);
    if (withShortUrl) {
        if (searchParams.get('code')) {
            searchParams = (0,useShortUrl/* useShortUrl */.F)().decode(window.location.href);
        }
        else {
            try {
                searchParams = (0,useShortUrl/* useShortUrl */.F)().decodePath(window.location.href);
            }
            catch (error) {
                console.log(error, 'error');
            }
        }
    }
    const [betData, setBetData] = (0,hooks_module_js_.useState)(undefined);
    const betId = customBetId || searchParams.get('betId');
    const resultIndex = searchParams.get('ri');
    const fontSize = searchParams.get('fontSize');
    const rounding = searchParams.get('rounding') || '2';
    const bgTransparent = searchParams.get('bgTransparent');
    const customBrFields = searchParams.get('customBrFields') === 'true';
    const customMtFields = searchParams.get('customMtFields') === 'true';
    (0,hooks_module_js_.useEffect)(() => {
        if (betData &&
            !withShortUrl &&
            !window.location.href.includes('share') &&
            window.location.href.includes('render')) {
            const url = new URL(window.location.href);
            url.searchParams.set('multiplier', betData.coefficient.toString());
            url.searchParams.set('title', document.title);
            window.history.replaceState(null, '', url.toString());
            updateShortUrl();
        }
    }, [betData]);
    if (!betId)
        return null;
    (0,hooks_module_js_.useEffect)(() => {
        const get = async () => {
            try {
                const data = await (0,api/* getBetInfo */.su)({
                    headers: {},
                    betId,
                    useBetsApi,
                });
                let parsedBetData = data.data;
                if (resultIndex) {
                    try {
                        const { payout, payoutCoefficient } = data.data.game?.results?.[resultIndex];
                        parsedBetData = {
                            ...parsedBetData,
                            payout,
                            payoutCoefficient,
                            resultIndex,
                        };
                    }
                    catch (error) {
                        console.log('Error processing bets data');
                    }
                }
                setBetData(parsedBetData);
                if (withShortUrl && window.location.href.includes('share')) {
                    loadGTM({ gameId: data.data.gameId });
                }
            }
            catch (error) {
                console.log('getMyBetsError', error);
            }
        };
        get();
    }, []);
    if (!betData)
        return null;
    if (fontSize) {
        document.documentElement.style.setProperty('font-size', fontSize);
    }
    (0,hooks_module_js_.useEffect)(() => {
        const app = document.getElementById('app');
        if (app) {
            app.style.position = 'relative';
            const resizeOb = new ResizeObserver(function (entries) {
                window.parent.postMessage({
                    type: 'iframeHeight',
                    data: Math.ceil(entries[0].target.clientHeight),
                }, '*');
                window.parent.postMessage(JSON.stringify({ type: 'iframeHeight', height: Math.ceil(entries[0].target.clientHeight) }), '*');
            });
            window.parent.postMessage({
                type: 'iframeReady',
            }, '*');
            resizeOb.observe(app);
            return () => {
                resizeOb.unobserve(app);
                app.style.position = '';
            };
        }
    }, [betData]);
    const cid = searchParams.get('cid');
    const showRoundId = searchParams.get('showRoundId');
    const showPlayerId = searchParams.get('showPlayerId');
    return ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [bgTransparent && ((0,jsxRuntime_module/* jsx */.Y)("style", { children: `
        html, body {
          background-color: transparent !important;
        }
      ` })), (0,jsxRuntime_module/* jsx */.Y)(MyBetInfo_Context.Provider, { value: {
                    betData,
                    rounding: Number(rounding),
                    rates,
                    userCurrency,
                    userCurrencySign,
                    cid,
                    showRoundId,
                    showPlayerId,
                }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ betData, rounding: Number(rounding), customBrFields, customMtFields }) }) })] }));
}
const MyBetInfo = Object.assign((0,index_js_.observer)(_MyBetInfo), {
    Inner: MyBetInfoInner,
    Iframe: Object.assign(MyBetInfoIframe, {
        Loading: MyBetInfoIframeLoading,
        Inner: MyBetInfoIframeInner,
    }),
    Id: MyBetInfoId,
    Amount: MyBetInfoAmount,
    ClientSeed: MyBetInfoClientSeed,
    Coefficient: MyBetInfoCoefficient,
    Date: MyBetInfoDate,
    DateStart: MyBetInfoDateStart,
    DateFinish: MyBetInfoDateFinish,
    Hash: MyBetInfoHash,
    EncryptedHash: MyBetInfoEncryptedHash,
    EncryptedHashes: MyBetInfoEncryptedHashes,
    Salt: MyBetInfoSalt,
    Nonce: MyBetInfoNonce,
    Payout: MyBetInfoPayout,
    PlayerId: MyBetInfoPlayerId,
    PlayerName: MyBetInfoPlayerName,
    ServerSeed: MyBetInfoServerSeed,
    ExState: MyBetInfoExState,
    BalanceBefore: MyBetInfoBalanceBefore,
    BalanceAfter: MyBetInfoBalanceAfter,
    TechData: MyBetInfoTechData,
    HasFairParams: MyBetInfoHasFairParams,
    IndicatorCompleted: MyBetInfoIndicatorCompleted,
});

;// ./src/framework/components/MyBetInfo/index.tsx



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

/***/ 92784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useShortUrl)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57888);
/* harmony import */ var base_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89598);


const BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const base62 = (0,base_x__WEBPACK_IMPORTED_MODULE_1__["default"])(BASE62);
const uuidToBytes = (uuid) => uuid
    .replace(/-/g, '')
    .match(/.{1,2}/g)
    .map((b) => parseInt(b, 16));
const bytesToUuid = (bytes) => {
    const hex = bytes.map((b) => b.toString(16).padStart(2, '0')).join('');
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
};
const compressUuid = (uuid) => {
    const bytes = uuidToBytes(uuid);
    return base62.encode(Uint8Array.from(bytes));
};
const decompressUuid = (compressed) => {
    const bytes = base62.decode(compressed);
    return bytesToUuid(Array.from(bytes));
};
const encodeParams = ({ orientation = 'landscape', locale = 'en', rounding = 2, rtp = 95, multiplier = '0', gameName = '', }) => {
    const o = orientation === 'portrait' ? 'p' : 'l';
    const l = locale.slice(0, 2);
    const r = rounding.toString();
    const w = rtp.toString();
    const m = multiplier;
    const g = gameName.toString();
    return `${o}${l}${r.padStart(1, '0')}${w.padStart(2, '0')}m${m}g${g}`;
};
const decodeParams = (str) => {
    const orientation = str[0] === 'p' ? 'portrait' : 'landscape';
    const locale = str.slice(1, 3);
    const rounding = parseInt(str[3]);
    const rtp = parseInt(str.slice(4));
    const multiplierStartIndex = str.indexOf('m') + 1;
    const multiplierEndIndex = str.indexOf('g');
    const multiplier = str.slice(multiplierStartIndex, multiplierEndIndex).replace(/-/g, '.');
    const gameNameIndex = str.indexOf('g');
    const gameName = gameNameIndex !== -1 ? str.slice(gameNameIndex + 1).replace(/-/g, ' ') : '';
    return { orientation, locale, rounding, rtp, multiplier, gameName };
};
const useShortUrl = () => {
    const generate = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback)((fullLink) => {
        const url = new URL(fullLink);
        const betId = url.searchParams.get('betId');
        const orientation = url.searchParams.get('orientation') || 'landscape';
        const locale = url.searchParams.get('locale') || 'en';
        const rounding = parseInt(url.searchParams.get('rounding') || '2');
        const rtp = parseInt(url.searchParams.get('rtp') || '95');
        const clientPublicUrl = url.searchParams.get('gameClientPublicUrl') || '';
        let multiplier = parseFloat(url.searchParams.get('multiplier') || '0');
        multiplier = multiplier.toString().replace(/\./g, '-');
        let gameName = url.searchParams.get('title') || '';
        gameName = gameName.replace(/ /g, '-');
        const compressedBetId = compressUuid(betId);
        const compressedParams = encodeParams({ orientation, locale, rounding, rtp, multiplier, gameName });
        return `${url.origin}${clientPublicUrl}/share/${compressedBetId}_${compressedParams}`;
    }, []);
    const decode = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback)((fullShortLink) => {
        const url = new URL(fullShortLink);
        const code = url.searchParams.get('code');
        if (!code) {
            throw new Error('Invalid short link: no code found');
        }
        const [compressedBetId, compressedParams] = code.split('_');
        const betId = decompressUuid(compressedBetId);
        const params = decodeParams(compressedParams);
        const searchParams = new URLSearchParams({
            betId,
            orientation: params.orientation,
            locale: params.locale,
            rounding: params.rounding.toString(),
            rtp: params.rtp.toString(),
            multiplier: params.multiplier,
            gameName: params.gameName,
        });
        return searchParams;
    }, []);
    const decodePath = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback)((fullShortLink) => {
        const url = new URL(fullShortLink);
        const pathSegments = url.pathname.split('/');
        const segment = pathSegments[pathSegments.length - 1];
        if (!segment) {
            throw new Error('Invalid short link: no segment found');
        }
        const [compressedBetId, compressedParams] = segment.split('_');
        const betId = decompressUuid(compressedBetId);
        const params = decodeParams(compressedParams);
        const searchParams = new URLSearchParams({
            betId,
            orientation: params.orientation,
            locale: params.locale,
            rounding: params.rounding.toString(),
            rtp: params.rtp.toString(),
            multiplier: params.multiplier,
            gameName: params.gameName,
        });
        return searchParams;
    }, []);
    return { generate, decode, decodePath };
};


/***/ })

}]);