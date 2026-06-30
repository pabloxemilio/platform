var fm;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 64550:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var moduleMap = {
	"./bootstrap": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(7518)]).then(() => (() => ((__webpack_require__(22701)))));
	},
	"./assets/scss/globals": () => {
		return __webpack_require__.e(26).then(() => (() => ((__webpack_require__(10026)))));
	},
	"./assets/font/gilroy": () => {
		return __webpack_require__.e(9987).then(() => (() => ((__webpack_require__(99987)))));
	},
	"./assets/font/icons": () => {
		return __webpack_require__.e(2107).then(() => (() => ((__webpack_require__(92107)))));
	},
	"./helpers": () => {
		return __webpack_require__.e(725).then(() => (() => ((__webpack_require__(60725)))));
	},
	"./ui": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(1682), __webpack_require__.e(3136), __webpack_require__.e(1204), __webpack_require__.e(1708), __webpack_require__.e(2373), __webpack_require__.e(2349), __webpack_require__.e(9434), __webpack_require__.e(7865), __webpack_require__.e(8445)]).then(() => (() => ((__webpack_require__(98445)))));
	},
	"./bubbles": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(2162)]).then(() => (() => ((__webpack_require__(92585)))));
	},
	"./dice": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(9336)]).then(() => (() => ((__webpack_require__(21889)))));
	},
	"./mines": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(2933)]).then(() => (() => ((__webpack_require__(88802)))));
	},
	"./onetapmines": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(3348)]).then(() => (() => ((__webpack_require__(75519)))));
	},
	"./multimines": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(6665)]).then(() => (() => ((__webpack_require__(89820)))));
	},
	"./bonustowers": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(6542)]).then(() => (() => ((__webpack_require__(28049)))));
	},
	"./double": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(5532)]).then(() => (() => ((__webpack_require__(39737)))));
	},
	"./plinko": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(8210)]).then(() => (() => ((__webpack_require__(98491)))));
	},
	"./crash": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(5184)]).then(() => (() => ((__webpack_require__(55251)))));
	},
	"./vortex": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(6861)]).then(() => (() => ((__webpack_require__(96861)))));
	},
	"./olympus": () => {
		return __webpack_require__.e(6947).then(() => (() => ((__webpack_require__(66947)))));
	},
	"./ultimatedice": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(7724)]).then(() => (() => ((__webpack_require__(71381)))));
	},
	"./towers": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(1474)]).then(() => (() => ((__webpack_require__(42527)))));
	},
	"./limbo": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(953)]).then(() => (() => ((__webpack_require__(99694)))));
	},
	"./wheel": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(500)]).then(() => (() => ((__webpack_require__(56927)))));
	},
	"./crystalpoker": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(1747)]).then(() => (() => ((__webpack_require__(31747)))));
	},
	"./holdcrash": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(3655)]).then(() => (() => ((__webpack_require__(44040)))));
	},
	"./dice3": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(4295)]).then(() => (() => ((__webpack_require__(74840)))));
	},
	"./jewelclicker": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(1177)]).then(() => (() => ((__webpack_require__(41512)))));
	},
	"./pandapoker": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(8405)]).then(() => (() => ((__webpack_require__(88888)))));
	},
	"./catanza": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(6519)]).then(() => (() => ((__webpack_require__(93256)))));
	},
	"./chickenzap": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(2402)]).then(() => (() => ((__webpack_require__(60607)))));
	},
	"./clicker": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(1682), __webpack_require__.e(8239), __webpack_require__.e(9735), __webpack_require__.e(9034)]).then(() => (() => ((__webpack_require__(23681)))));
	},
	"./mysteco": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(6185)]).then(() => (() => ((__webpack_require__(94826)))));
	},
	"./vortex2": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(8237)]).then(() => (() => ((__webpack_require__(26014)))));
	},
	"./vortexsafari": () => {
		return __webpack_require__.e(9006).then(() => (() => ((__webpack_require__(99006)))));
	},
	"./vortexcricket": () => {
		return __webpack_require__.e(1915).then(() => (() => ((__webpack_require__(81915)))));
	},
	"./vortexaero": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(4450)]).then(() => (() => ((__webpack_require__(38483)))));
	},
	"./chickenboat": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(8875)]).then(() => (() => ((__webpack_require__(8528)))));
	},
	"./module/ModuleGroupPreloader": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(1760)]).then(() => (() => ((__webpack_require__(11760)))));
	},
	"./module/ModuleGroupPageRender": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(3136), __webpack_require__.e(1708), __webpack_require__.e(7638)]).then(() => (() => ((__webpack_require__(47833)))));
	},
	"./module/ModuleGroupPageBet": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(3136), __webpack_require__.e(1708), __webpack_require__.e(2373), __webpack_require__.e(7333)]).then(() => (() => ((__webpack_require__(90012)))));
	},
	"./module/ModuleGroupPageBetIframe": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(3136), __webpack_require__.e(1708), __webpack_require__.e(2373), __webpack_require__.e(9785)]).then(() => (() => ((__webpack_require__(75672)))));
	},
	"./module/ModuleGroupPageBetShare": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(3136), __webpack_require__.e(1708), __webpack_require__.e(2373), __webpack_require__.e(7333), __webpack_require__.e(8353)]).then(() => (() => ((__webpack_require__(28353)))));
	},
	"./module/ModuleLayout": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(511)]).then(() => (() => ((__webpack_require__(49086)))));
	},
	"./module/ModuleSetting": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(1682), __webpack_require__.e(3136), __webpack_require__.e(1708), __webpack_require__.e(2373), __webpack_require__.e(2349), __webpack_require__.e(9434), __webpack_require__.e(7865), __webpack_require__.e(6095)]).then(() => (() => ((__webpack_require__(31334)))));
	},
	"./module/ModuleTurboUniverse": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(3136), __webpack_require__.e(1708), __webpack_require__.e(2349), __webpack_require__.e(2302)]).then(() => (() => ((__webpack_require__(52349)))));
	},
	"./module/ModulePaytable": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(3136), __webpack_require__.e(5491)]).then(() => (() => ((__webpack_require__(65491)))));
	},
	"./module/ModuleTooltipMinFreebets": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(1607)]).then(() => (() => ((__webpack_require__(21002)))));
	},
	"./canvas/CanvasController": () => {
		return __webpack_require__.e(4852).then(() => (() => ((__webpack_require__(74852)))));
	},
	"./module/ModuleDevtools": () => {
		return Promise.all([__webpack_require__.e(7059), __webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(8909), __webpack_require__.e(2843), __webpack_require__.e(4866)]).then(() => (() => ((__webpack_require__(34866)))));
	},
	"./cascade": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(3858)]).then(() => (() => ((__webpack_require__(16937)))));
	},
	"./slot_tech/layouts/v1": () => {
		return Promise.all([__webpack_require__.e(1351), __webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(3136), __webpack_require__.e(1204), __webpack_require__.e(5443)]).then(() => (() => ((__webpack_require__(85443)))));
	},
	"./module/ModuleSettingSlots": () => {
		return Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(2701), __webpack_require__.e(90), __webpack_require__.e(1682), __webpack_require__.e(3136), __webpack_require__.e(1708), __webpack_require__.e(2373), __webpack_require__.e(2349), __webpack_require__.e(9434), __webpack_require__.e(7865), __webpack_require__.e(5429)]).then(() => (() => ((__webpack_require__(58164)))));
	},
	"./canvas/CanvasGame": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(6858), __webpack_require__.e(3978), __webpack_require__.e(7833), __webpack_require__.e(3488)]).then(() => (() => ((__webpack_require__(33488)))));
	},
	"./canvas/Component": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(6858), __webpack_require__.e(8730)]).then(() => (() => ((__webpack_require__(48730)))));
	},
	"./canvas/Scene": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(6858), __webpack_require__.e(3978)]).then(() => (() => ((__webpack_require__(13978)))));
	},
	"./canvas/Runtime": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(7833), __webpack_require__.e(9144)]).then(() => (() => ((__webpack_require__(79144)))));
	},
	"./canvas/Clock": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(6858), __webpack_require__.e(6996)]).then(() => (() => ((__webpack_require__(96996)))));
	},
	"./canvas/EventBus": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(6465)]).then(() => (() => ((__webpack_require__(66465)))));
	},
	"./canvas/StateMachine": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(6540)]).then(() => (() => ((__webpack_require__(26540)))));
	},
	"./canvas/StateMachine/StateMachine": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(3196)]).then(() => (() => ((__webpack_require__(23196)))));
	},
	"./canvas/Logger": () => {
		return __webpack_require__.e(4907).then(() => (() => ((__webpack_require__(4907)))));
	},
	"./canvas/Assets": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(3664)]).then(() => (() => ((__webpack_require__(83664)))));
	},
	"./canvas/Helpers": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(5308)]).then(() => (() => ((__webpack_require__(75308)))));
	},
	"./canvas/Layer": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(6858), __webpack_require__.e(5255)]).then(() => (() => ((__webpack_require__(55255)))));
	},
	"./canvas/Tween": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(6858), __webpack_require__.e(3533)]).then(() => (() => ((__webpack_require__(93533)))));
	},
	"./canvas/Sequence": () => {
		return Promise.all([__webpack_require__.e(6858), __webpack_require__.e(9474)]).then(() => (() => ((__webpack_require__(69474)))));
	},
	"./canvas/Quality": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(8838)]).then(() => (() => ((__webpack_require__(28838)))));
	},
	"./canvas/Masks": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(1473)]).then(() => (() => ((__webpack_require__(31473)))));
	},
	"./canvas/Camera": () => {
		return __webpack_require__.e(3148).then(() => (() => ((__webpack_require__(33148)))));
	},
	"./canvas/Components/SpineComponent": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(6858), __webpack_require__.e(8730), __webpack_require__.e(1419), __webpack_require__.e(5851)]).then(() => (() => ((__webpack_require__(5851)))));
	},
	"./canvas/Components/Overlay": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(6858), __webpack_require__.e(7862)]).then(() => (() => ((__webpack_require__(7862)))));
	},
	"./canvas/ui": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(6858), __webpack_require__.e(8730), __webpack_require__.e(1419), __webpack_require__.e(2024)]).then(() => (() => ((__webpack_require__(72024)))));
	},
	"./canvas/slot": () => {
		return Promise.all([__webpack_require__.e(8909), __webpack_require__.e(6858), __webpack_require__.e(8730), __webpack_require__.e(1419), __webpack_require__.e(7127)]).then(() => (() => ((__webpack_require__(67127)))));
	},
	"./canvas/CascadeController": () => {
		return __webpack_require__.e(8547).then(() => (() => ((__webpack_require__(68547)))));
	}
};
var get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = (shareScope, initScope) => {
	if (!__webpack_require__.S) return;
	var name = "default"
	var oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init)
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"26":"19463fa86235154d7d47","43":"37b904a90798971295d4","75":"055c83e18ab870d4baa2","172":"5c8f732dc0234b76bb4f","351":"88ba265604bf54fac813","423":"b2e4b7c1ffb18744b5bf","500":"e67621ba70eb025a5c05","511":"4cbf096d0112d6718b86","513":"7283d55fe5e7c087446f","587":"2368a630ff321dbf3491","725":"49b105aa0e649d80130b","728":"982d11c50d975414e7bc","856":"38c3820e672484e8ddfc","861":"c0e58c2d461914db7e7a","925":"8acec03449eec5104a04","953":"d27466448addc36219bc","978":"0fc55f692062db993c2a","1084":"d5c80f564ffe59dcbed0","1165":"eaf73553091fef7cd98d","1177":"6da9791e893bab852db1","1179":"02a7a65e1978dba078df","1204":"aa34835c7527d68fc1f6","1351":"3e34818f063ce42fa4ea","1473":"d5b3d9013596c0fa8833","1474":"476b6ec4aa63facbcaa0","1490":"69dd6e4db1a892d569d4","1521":"db6d8e2153b3cb17d5ee","1569":"5027930eb2fdf1849145","1576":"196334040ccfe0f17571","1607":"25f5aff4e3070c489dc1","1708":"c04636ad207de3647047","1747":"6f56cda1f172d734d436","1760":"0061105c763181da790d","1915":"ab16b80317c66c0ef3e1","1954":"406c0add4e8a0d8fae0a","2024":"56cd1b36a679a7e05d11","2031":"11bb92ebb7a09741dfd4","2107":"66ae4fabd7710f16682e","2162":"93f2cdb2715202d033cf","2246":"c1bb43963e4c74b6c4c1","2302":"c7ba762d5ff1c632de3d","2349":"3b9dba9d6cd84818bd80","2373":"3b40e4b292acc99052aa","2389":"67fc072a30270df4844c","2402":"356abe0691a30c06d74a","2426":"80628ac56bf2c12262b9","2485":"b7fc340060d5ef3bc8ea","2531":"a0a42dfb4f5c11921823","2635":"68eebb710aadb1dfdb0d","2701":"70668e442c83bcc5fcb3","2732":"88ba265604bf54fac813","2835":"dc7810a511f726ec655b","2858":"517ab4040249f574d38c","2868":"2beb765ac3b10f88a4ec","2925":"738c5e996a1a12d1392d","2933":"38456d10b4c2d459ecbe","3148":"5d1113365b12db3bd080","3196":"2372a1d49c50b3698b65","3348":"c4938f4aab98f9f6c6f0","3443":"ea346afd8f2ad095475a","3488":"10bc96867559f33292c3","3533":"2448d6da206b504108d3","3613":"17f8eea40c28434532f2","3655":"579eadedcc2d78dc9e78","3664":"69e45ee9da94fa586dff","3858":"673f404cccbb60ffa74a","3902":"02ad42fc06bb8fff40d1","3915":"c197aefdd70b9139a8c5","3978":"3c0e5d83f42758797883","3994":"ce45d16460dc399a2233","4164":"355361ac72dc5efae5d3","4196":"aa0057b5002a1dda447c","4295":"8663af4e722c3ec8df54","4377":"6e07284e5c09a97fc4cb","4447":"be4a1365fa6012cdee36","4450":"a1174048930a26465030","4576":"0516b8ad8c9ec92c91cc","4635":"92c6174892f6848c0899","4673":"2c633684a704ca6ccdfb","4770":"72cf1f2296d9a84a11e7","4852":"14aeac54d9ee7c306a63","4866":"25dd82b86dcce45dcef8","4872":"fdef3681500d39e4f391","4907":"759b4d4fdba1380be682","4962":"e643cb3b7836629c68ab","5034":"b3512475d7088c9d7b51","5042":"2bc71096f079876777ee","5163":"4f10fc78fdf70c32f70d","5184":"e0b71233e84c2357da86","5255":"68b47ae96efc83fb83d4","5308":"f6cc6b0420f16b234771","5429":"ac9b09d0c4d6ae23b59d","5443":"263d386330ee467404c3","5491":"2f0018b723a0d770db61","5532":"8bb19f165e716524307e","5824":"50b429b5b791b660f856","5851":"de7a39333caa21da7624","5880":"faa7b083bd4a296682cc","5984":"6f1c279c68d631887ec1","5994":"17f8eea40c28434532f2","6014":"cbad8bdc9611bd8eaf8a","6022":"c2ead7505e6c8c58ec7b","6095":"19d66a4e7626493af8fa","6185":"a65fa7cfb2ef661d5663","6465":"a2b79eac1e65c1c9d48f","6519":"85d050a549e2eae1c6a3","6540":"af18a6e1eec5dd5233f6","6542":"1d789fe95c291b3d655c","6665":"ca99679e9dc2a896dc86","6841":"120c478572a4cb776cda","6861":"cdd21662f163e8468b1f","6947":"79514fee035f5a3b0efa","6996":"da165720bdeb5aef2a76","7054":"9b644552e7a65b9610dd","7059":"1829b8dc9966f462959d","7127":"882d97af7fc117806dc9","7333":"b962eb9f128d98b58598","7402":"ab2c40d4b31ed7ebc804","7518":"7e12e2be56dab334f65e","7638":"51bb1b7791d2d4147270","7668":"015f4ce64a3eaea47f13","7682":"db9928751d6d7cabe54a","7724":"3da6c2daa151b8712aaa","7813":"3ecc86977b8ee92a1fda","7862":"bef4d339c5f860c70e8b","7865":"c2bb0d02f6a13cdb900d","7954":"b2c184a7f7da9c73d178","8075":"fba40ba0170f553ceadb","8210":"c0127f20accb49b5d9b8","8218":"f56ce9ae1f69168939db","8237":"dbe99f74487c05c11eb1","8264":"3b33fc61e273f0cda725","8353":"3767d4f5b0993d8c197e","8405":"8c172421d78993ee810d","8445":"897a32981d46c9064f82","8547":"49d38cc6ac9bdaa8aed1","8554":"61b799ea1f999faa398d","8573":"d198de96f1c24496e049","8578":"7c98027f176eb99f02fb","8605":"5a977938992c9b5e8528","8674":"5a93a891a4fd7b2477e2","8730":"ffebba13742ef2bef588","8748":"425386dcb64ceec0d63e","8838":"08c0c0bc450ae49b1e29","8875":"50a57bdd48df3479306b","9006":"e5d4a1fa1104ecaae24d","9034":"502809e4eeed15a91b0e","9083":"f8dd73081146b2611efc","9144":"7d727c71f4b823967638","9148":"c4787402a2feff0697a5","9222":"55233fb40fe1de18d4bb","9308":"d5e04f65698e27b6747d","9336":"a8c1992700acdc68a47a","9340":"3d879f2bd9f4d2110ced","9364":"67c604614d36a8b4a7e5","9434":"c434bbf33a5c50eda921","9455":"f1206899db187b67e940","9474":"5b194e81d424b494e162","9571":"2907cfa25c6e39285c1c","9735":"a301bff9d287e2e85dd9","9785":"b386819f2187e37837f8","9861":"d926f3bdcf177e5b12c7","9878":"a8b85feebe03cebf7df6","9889":"8226011ea6f4a87f4a95","9942":"464c088dd6e71531ab64","9987":"308e5b4dd1081647a838"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "federation-modules:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = "federation-modules";
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("@esotericsoftware/spine-pixi-v8", "4.2.109", () => (Promise.all([__webpack_require__.e(8605), __webpack_require__.e(587)]).then(() => (() => (__webpack_require__(10587))))));
/******/ 					register("@fingerprintjs/fingerprintjs", "4.5.1", () => (__webpack_require__.e(8075).then(() => (() => (__webpack_require__(78075))))));
/******/ 					register("@ncdai/react-wheel-picker", "1.0.19", () => (Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(4673)]).then(() => (() => (__webpack_require__(57054))))));
/******/ 					register("@sentry/browser", "9.5.0", () => (Promise.all([__webpack_require__.e(9083), __webpack_require__.e(1165)]).then(() => (() => (__webpack_require__(91165))))));
/******/ 					register("@sentry/react", "9.5.0", () => (Promise.all([__webpack_require__.e(9083), __webpack_require__.e(2868), __webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(9678), __webpack_require__.e(7402)]).then(() => (() => (__webpack_require__(82868))))));
/******/ 					register("axios", "1.15.0", () => (__webpack_require__.e(4447).then(() => (() => (__webpack_require__(84447))))));
/******/ 					register("base-x", "5.0.1", () => (__webpack_require__.e(2925).then(() => (() => (__webpack_require__(62925))))));
/******/ 					register("centrifuge", "2.8.5", () => (__webpack_require__.e(9148).then(() => (() => (__webpack_require__(39148))))));
/******/ 					register("class-variance-authority", "0.7.1", () => (Promise.all([__webpack_require__.e(2843), __webpack_require__.e(351)]).then(() => (() => (__webpack_require__(22732))))));
/******/ 					register("classnames", "2.3.2", () => (__webpack_require__.e(2485).then(() => (() => (__webpack_require__(32485))))));
/******/ 					register("clsx", "2.1.1", () => (__webpack_require__.e(4164).then(() => (() => (__webpack_require__(34164))))));
/******/ 					register("fflate", "0.8.2", () => (__webpack_require__.e(9861).then(() => (() => (__webpack_require__(69861))))));
/******/ 					register("gsap", "3.14.2", () => (__webpack_require__.e(5880).then(() => (() => (__webpack_require__(85880))))));
/******/ 					register("howler", "2.2.3", () => (__webpack_require__.e(4196).then(() => (() => (__webpack_require__(94196))))));
/******/ 					register("i18next", "23.2.8", () => (__webpack_require__.e(2635).then(() => (() => (__webpack_require__(72635))))));
/******/ 					register("jwt-js-decode", "1.8.2", () => (Promise.all([__webpack_require__.e(6022), __webpack_require__.e(1490)]).then(() => (() => (__webpack_require__(76022))))));
/******/ 					register("markdown-to-jsx", "7.3.2", () => (Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(9222)]).then(() => (() => (__webpack_require__(36841))))));
/******/ 					register("mobx-react-lite", "3.4.3", () => (Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(8570), __webpack_require__.e(5824)]).then(() => (() => (__webpack_require__(93443))))));
/******/ 					register("mobx", "6.9.0", () => (__webpack_require__.e(7813).then(() => (() => (__webpack_require__(27813))))));
/******/ 					register("pixi-stats", "5.1.7", () => (__webpack_require__.e(9340).then(() => (() => (__webpack_require__(59340))))));
/******/ 					register("pixi8", "8.17.1", () => (__webpack_require__.e(8605).then(() => (() => (__webpack_require__(48605))))));
/******/ 					register("preact/hooks", "10.15.1", () => (Promise.all([__webpack_require__.e(1917), __webpack_require__.e(5994)]).then(() => (() => (__webpack_require__(45994))))));
/******/ 					register("preact", "10.15.1", () => (__webpack_require__.e(172).then(() => (() => (__webpack_require__(50172))))));
/******/ 					register("react-fast-marquee", "1.6.5", () => (Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(3902)]).then(() => (() => (__webpack_require__(51521))))));
/******/ 					register("react-i18next", "13.0.1", () => (Promise.all([__webpack_require__.e(1917), __webpack_require__.e(7888), __webpack_require__.e(4770)]).then(() => (() => (__webpack_require__(32389))))));
/******/ 					register("recursive-diff", "1.0.9", () => (__webpack_require__.e(4962).then(() => (() => (__webpack_require__(4962))))));
/******/ 					register("tailwind-merge", "3.5.0", () => (__webpack_require__.e(856).then(() => (() => (__webpack_require__(50856))))));
/******/ 					register("uuid", "9.0.0", () => (__webpack_require__.e(9308).then(() => (() => (__webpack_require__(79308))))));
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/consumes */
/******/ 	(() => {
/******/ 		var parseVersion = (str) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var p=p=>{return p.split(".").map(p=>{return+p==p?+p:p})},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 		}
/******/ 		var versionLt = (a, b) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 		}
/******/ 		var rangeToString = (range) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 		}
/******/ 		var satisfy = (range, version) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 		}
/******/ 		var exists = (scope, key) => {
/******/ 			return scope && __webpack_require__.o(scope, key);
/******/ 		}
/******/ 		var get = (entry) => {
/******/ 			entry.loaded = 1;
/******/ 			return entry.get()
/******/ 		};
/******/ 		var eagerOnly = (versions) => {
/******/ 			return Object.keys(versions).reduce((filtered, version) => {
/******/ 					if (versions[version].eager) {
/******/ 						filtered[version] = versions[version];
/******/ 					}
/******/ 					return filtered;
/******/ 			}, {});
/******/ 		};
/******/ 		var findLatestVersion = (scope, key, eager) => {
/******/ 			var versions = eager ? eagerOnly(scope[key]) : scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key];
/******/ 		};
/******/ 		var findSatisfyingVersion = (scope, key, requiredVersion, eager) => {
/******/ 			var versions = eager ? eagerOnly(scope[key]) : scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				if (!satisfy(requiredVersion, b)) return a;
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var findSingletonVersionKey = (scope, key, eager) => {
/******/ 			var versions = eager ? eagerOnly(scope[key]) : scope[key];
/******/ 			return Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 			}, 0);
/******/ 		};
/******/ 		var getInvalidSingletonVersionMessage = (scope, key, version, requiredVersion) => {
/******/ 			return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 		};
/******/ 		var getInvalidVersionMessage = (scope, scopeName, key, requiredVersion, eager) => {
/******/ 			var versions = scope[key];
/******/ 			return "No satisfying version (" + rangeToString(requiredVersion) + ")" + (eager ? " for eager consumption" : "") + " of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 				"Available versions: " + Object.keys(versions).map((key) => {
/******/ 				return key + " from " + versions[key].from;
/******/ 			}).join(", ");
/******/ 		};
/******/ 		var fail = (msg) => {
/******/ 			throw new Error(msg);
/******/ 		}
/******/ 		var failAsNotExist = (scopeName, key) => {
/******/ 			return fail("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 		}
/******/ 		var warn = /*#__PURE__*/ (msg) => {
/******/ 			if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 		};
/******/ 		var init = (fn) => (function(scopeName, key, eager, c, d) {
/******/ 			var promise = __webpack_require__.I(scopeName);
/******/ 			if (promise && promise.then && !eager) {
/******/ 				return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], key, false, c, d));
/******/ 			}
/******/ 			return fn(scopeName, __webpack_require__.S[scopeName], key, eager, c, d);
/******/ 		});
/******/ 		
/******/ 		var useFallback = (scopeName, key, fallback) => {
/******/ 			return fallback ? fallback() : failAsNotExist(scopeName, key);
/******/ 		}
/******/ 		var load = /*#__PURE__*/ init((scopeName, scope, key, eager, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			return get(findLatestVersion(scope, key, eager));
/******/ 		});
/******/ 		var loadVersion = /*#__PURE__*/ init((scopeName, scope, key, eager, requiredVersion, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var satisfyingVersion = findSatisfyingVersion(scope, key, requiredVersion, eager);
/******/ 			if (satisfyingVersion) return get(satisfyingVersion);
/******/ 			warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion, eager))
/******/ 			return get(findLatestVersion(scope, key, eager));
/******/ 		});
/******/ 		var loadStrictVersion = /*#__PURE__*/ init((scopeName, scope, key, eager, requiredVersion, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var satisfyingVersion = findSatisfyingVersion(scope, key, requiredVersion, eager);
/******/ 			if (satisfyingVersion) return get(satisfyingVersion);
/******/ 			if (fallback) return fallback();
/******/ 			fail(getInvalidVersionMessage(scope, scopeName, key, requiredVersion, eager));
/******/ 		});
/******/ 		var loadSingleton = /*#__PURE__*/ init((scopeName, scope, key, eager, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var version = findSingletonVersionKey(scope, key, eager);
/******/ 			return get(scope[key][version]);
/******/ 		});
/******/ 		var loadSingletonVersion = /*#__PURE__*/ init((scopeName, scope, key, eager, requiredVersion, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var version = findSingletonVersionKey(scope, key, eager);
/******/ 			if (!satisfy(requiredVersion, version)) {
/******/ 				warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			}
/******/ 			return get(scope[key][version]);
/******/ 		});
/******/ 		var loadStrictSingletonVersion = /*#__PURE__*/ init((scopeName, scope, key, eager, requiredVersion, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var version = findSingletonVersionKey(scope, key, eager);
/******/ 			if (!satisfy(requiredVersion, version)) {
/******/ 				fail(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			}
/******/ 			return get(scope[key][version]);
/******/ 		});
/******/ 		var installedModules = {};
/******/ 		var moduleToHandlerMapping = {
/******/ 			31917: () => (loadSingletonVersion("default", "preact", false, [1,10,15,1], () => (__webpack_require__.e(172).then(() => (() => (__webpack_require__(50172))))))),
/******/ 			57888: () => (loadSingletonVersion("default", "preact/hooks", false, [1,10,15,1], () => (__webpack_require__.e(3613).then(() => (() => (__webpack_require__(45994))))))),
/******/ 			99678: () => (loadStrictVersion("default", "@sentry/browser", false, [1,9,5,0], () => (__webpack_require__.e(1165).then(() => (() => (__webpack_require__(91165))))))),
/******/ 			12843: () => (loadStrictVersion("default", "clsx", false, [1,2,1,1], () => (__webpack_require__.e(4164).then(() => (() => (__webpack_require__(34164))))))),
/******/ 			8570: () => (loadSingletonVersion("default", "mobx", false, [1,6,9,0], () => (__webpack_require__.e(7813).then(() => (() => (__webpack_require__(27813))))))),
/******/ 			22208: () => (loadStrictVersion("default", "@fingerprintjs/fingerprintjs", false, [1,4,5,0], () => (__webpack_require__.e(8075).then(() => (() => (__webpack_require__(78075))))))),
/******/ 			29180: () => (loadStrictVersion("default", "howler", false, [1,2,2,3], () => (__webpack_require__.e(4196).then(() => (() => (__webpack_require__(94196))))))),
/******/ 			33204: () => (loadStrictVersion("default", "react-i18next", false, [1,13,0,1], () => (__webpack_require__.e(2389).then(() => (() => (__webpack_require__(32389))))))),
/******/ 			49953: () => (loadStrictVersion("default", "i18next", false, [1,23,2,3], () => (__webpack_require__.e(2635).then(() => (() => (__webpack_require__(72635))))))),
/******/ 			51849: () => (loadStrictVersion("default", "jwt-js-decode", false, [1,1,8,2], () => (Promise.all([__webpack_require__.e(6022), __webpack_require__.e(1490)]).then(() => (() => (__webpack_require__(76022))))))),
/******/ 			53998: () => (loadStrictVersion("default", "@sentry/react", false, [1,9,5,0], () => (Promise.all([__webpack_require__.e(9083), __webpack_require__.e(2868), __webpack_require__.e(9678)]).then(() => (() => (__webpack_require__(82868))))))),
/******/ 			75364: () => (loadStrictVersion("default", "axios", false, [1,1,4,0], () => (__webpack_require__.e(4447).then(() => (() => (__webpack_require__(84447))))))),
/******/ 			90: () => (loadSingletonVersion("default", "mobx-react-lite", false, [1,3,4,3], () => (__webpack_require__.e(3443).then(() => (() => (__webpack_require__(93443))))))),
/******/ 			81682: () => (loadStrictVersion("default", "uuid", false, [1,9,0,0], () => (__webpack_require__.e(9308).then(() => (() => (__webpack_require__(79308))))))),
/******/ 			83136: () => (loadStrictVersion("default", "classnames", false, [1,2,3,2], () => (__webpack_require__.e(2485).then(() => (() => (__webpack_require__(32485))))))),
/******/ 			89598: () => (loadStrictVersion("default", "base-x", false, [1,5,0,1], () => (__webpack_require__.e(2925).then(() => (() => (__webpack_require__(62925))))))),
/******/ 			81574: () => (loadStrictVersion("default", "react-fast-marquee", false, [1,1,6,5], () => (__webpack_require__.e(1521).then(() => (() => (__webpack_require__(51521))))))),
/******/ 			32811: () => (loadStrictVersion("default", "markdown-to-jsx", false, [1,7,3,2], () => (__webpack_require__.e(6841).then(() => (() => (__webpack_require__(36841))))))),
/******/ 			68239: () => (loadStrictVersion("default", "centrifuge", false, [1,2,7,6], () => (__webpack_require__.e(9148).then(() => (() => (__webpack_require__(39148))))))),
/******/ 			38909: () => (loadSingleton("default", "pixi8", false, () => (__webpack_require__.e(8605).then(() => (() => (__webpack_require__(48605))))))),
/******/ 			2612: () => (loadStrictVersion("default", "tailwind-merge", false, [1,3,5,0], () => (__webpack_require__.e(856).then(() => (() => (__webpack_require__(50856))))))),
/******/ 			32261: () => (loadStrictVersion("default", "class-variance-authority", false, [2,0,7,1], () => (__webpack_require__.e(2732).then(() => (() => (__webpack_require__(22732))))))),
/******/ 			77234: () => (loadStrictVersion("default", "@ncdai/react-wheel-picker", false, [1,1,0,19], () => (__webpack_require__.e(7054).then(() => (() => (__webpack_require__(57054))))))),
/******/ 			6858: () => (loadStrictVersion("default", "gsap", false, [1,3,13,0], () => (__webpack_require__.e(5880).then(() => (() => (__webpack_require__(85880))))))),
/******/ 			87833: () => (loadStrictVersion("default", "pixi-stats", false, [1,5,1,7], () => (__webpack_require__.e(9340).then(() => (() => (__webpack_require__(59340))))))),
/******/ 			31419: () => (loadSingletonVersion("default", "@esotericsoftware/spine-pixi-v8", false, [1,4,2,102], () => (Promise.all([__webpack_require__.e(8605), __webpack_require__.e(587)]).then(() => (() => (__webpack_require__(10587))))))),
/******/ 			62652: () => (loadStrictVersion("default", "recursive-diff", false, [1,1,0,9], () => (__webpack_require__.e(4962).then(() => (() => (__webpack_require__(4962))))))),
/******/ 			34253: () => (loadStrictVersion("default", "fflate", false, [2,0,8,2], () => (__webpack_require__.e(9861).then(() => (() => (__webpack_require__(69861)))))))
/******/ 		};
/******/ 		// no consumes in initial chunks
/******/ 		var chunkMapping = {
/******/ 			"90": [
/******/ 				90
/******/ 			],
/******/ 			"1419": [
/******/ 				31419
/******/ 			],
/******/ 			"1682": [
/******/ 				81682
/******/ 			],
/******/ 			"1708": [
/******/ 				89598
/******/ 			],
/******/ 			"1917": [
/******/ 				31917
/******/ 			],
/******/ 			"2031": [
/******/ 				34253
/******/ 			],
/******/ 			"2349": [
/******/ 				81574
/******/ 			],
/******/ 			"2652": [
/******/ 				62652
/******/ 			],
/******/ 			"2701": [
/******/ 				22208,
/******/ 				29180,
/******/ 				33204,
/******/ 				49953,
/******/ 				51849,
/******/ 				53998,
/******/ 				75364
/******/ 			],
/******/ 			"2843": [
/******/ 				12843
/******/ 			],
/******/ 			"3136": [
/******/ 				83136
/******/ 			],
/******/ 			"4866": [
/******/ 				2612,
/******/ 				32261
/******/ 			],
/******/ 			"5443": [
/******/ 				77234
/******/ 			],
/******/ 			"6858": [
/******/ 				6858
/******/ 			],
/******/ 			"7833": [
/******/ 				87833
/******/ 			],
/******/ 			"7888": [
/******/ 				57888
/******/ 			],
/******/ 			"8239": [
/******/ 				68239
/******/ 			],
/******/ 			"8570": [
/******/ 				8570
/******/ 			],
/******/ 			"8909": [
/******/ 				38909
/******/ 			],
/******/ 			"9434": [
/******/ 				32811
/******/ 			],
/******/ 			"9678": [
/******/ 				99678
/******/ 			]
/******/ 		};
/******/ 		var startedInstallModules = {};
/******/ 		__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 					if(!startedInstallModules[id]) {
/******/ 					var onFactory = (factory) => {
/******/ 						installedModules[id] = 0;
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							delete __webpack_require__.c[id];
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					startedInstallModules[id] = true;
/******/ 					var onError = (error) => {
/******/ 						delete installedModules[id];
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							delete __webpack_require__.c[id];
/******/ 							throw error;
/******/ 						}
/******/ 					};
/******/ 					try {
/******/ 						var promise = moduleToHandlerMapping[id]();
/******/ 						if(promise.then) {
/******/ 							promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));
/******/ 						} else onFactory(promise);
/******/ 					} catch(e) { onError(e); }
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			2244: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(!/^(1(419|682|917)|78(33|88)|8(239|570|909)|2652|2843|3136|6858|90|9678)$/.test(chunkId)) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(64550);
/******/ 	fm = __webpack_exports__;
/******/ 	
/******/ })()
;