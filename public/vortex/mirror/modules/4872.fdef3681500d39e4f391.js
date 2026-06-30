"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[4872],{

/***/ 74872:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/pixi8/lib/extensions/Extensions.mjs
var Extensions = __webpack_require__(2204);
// EXTERNAL MODULE: ./node_modules/pixi8/lib/scene/container/Container.mjs
var Container = __webpack_require__(78903);
// EXTERNAL MODULE: ./node_modules/pixi8/lib/accessibility/AccessibilitySystem.mjs
var AccessibilitySystem = __webpack_require__(49589);
// EXTERNAL MODULE: ./node_modules/pixi8/lib/accessibility/accessibilityTarget.mjs
var accessibilityTarget = __webpack_require__(76509);
;// ./node_modules/pixi8/lib/accessibility/init.mjs





"use strict";
Extensions/* extensions */.XO.add(AccessibilitySystem/* AccessibilitySystem */.a);
Extensions/* extensions */.XO.mixin(Container/* Container */.mc, accessibilityTarget/* accessibilityTarget */.K);
//# sourceMappingURL=init.mjs.map

// EXTERNAL MODULE: ./node_modules/pixi8/lib/dom/DOMPipe.mjs
var DOMPipe = __webpack_require__(68234);
;// ./node_modules/pixi8/lib/dom/init.mjs






"use strict";
Extensions/* extensions */.XO.add(DOMPipe/* DOMPipe */.j);


//# sourceMappingURL=init.mjs.map

// EXTERNAL MODULE: ./node_modules/pixi8/lib/events/EventSystem.mjs
var EventSystem = __webpack_require__(76352);
// EXTERNAL MODULE: ./node_modules/pixi8/lib/events/FederatedEventTarget.mjs
var FederatedEventTarget = __webpack_require__(9262);
;// ./node_modules/pixi8/lib/events/init.mjs





"use strict";
Extensions/* extensions */.XO.add(EventSystem/* EventSystem */.C);
Extensions/* extensions */.XO.mixin(Container/* Container */.mc, FederatedEventTarget/* FederatedContainer */.e);
//# sourceMappingURL=init.mjs.map

// EXTERNAL MODULE: ./node_modules/pixi8/lib/spritesheet/init.mjs
var init = __webpack_require__(88656);
// EXTERNAL MODULE: ./node_modules/pixi8/lib/rendering/init.mjs
var rendering_init = __webpack_require__(67436);
// EXTERNAL MODULE: ./node_modules/pixi8/lib/filters/init.mjs
var filters_init = __webpack_require__(55459);
;// ./node_modules/pixi8/lib/environment-browser/browserAll.mjs







"use strict";
//# sourceMappingURL=browserAll.mjs.map


/***/ }),

/***/ 55459:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _extensions_Extensions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2204);
/* harmony import */ var _FilterPipe_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46691);
/* harmony import */ var _FilterSystem_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(576);




"use strict";
_extensions_Extensions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .extensions */ .XO.add(_FilterSystem_mjs__WEBPACK_IMPORTED_MODULE_2__/* .FilterSystem */ .u);
_extensions_Extensions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .extensions */ .XO.add(_FilterPipe_mjs__WEBPACK_IMPORTED_MODULE_1__/* .FilterPipe */ .L);
//# sourceMappingURL=init.mjs.map


/***/ })

}]);