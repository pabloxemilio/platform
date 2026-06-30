"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[5308],{

/***/ 75308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ObjectPool: () => (/* reexport */ ObjectPool),
  applyLayout: () => (/* reexport */ applyLayout),
  backout: () => (/* reexport */ backout),
  calculateCoverScale: () => (/* reexport */ calculateCoverScale),
  computeAnchorPosition: () => (/* reexport */ computeAnchorPosition),
  computeViewport: () => (/* reexport */ computeViewport),
  coverStrategy: () => (/* reexport */ coverStrategy),
  fitStrategy: () => (/* reexport */ fitStrategy),
  fitTextToWidth: () => (/* reexport */ fitTextToWidth),
  isOrientedDesign: () => (/* reexport */ isOrientedDesign),
  lerp: () => (/* reexport */ lerp),
  linear: () => (/* reexport */ linear),
  mountScene: () => (/* reexport */ mountScene),
  noneStrategy: () => (/* reexport */ noneStrategy)
});

;// ./src/canvas/core/Helpers/Easing.ts
const linear = (t) => t;
const backout = (amount) => (t) => {
    return --t * t * ((amount + 1) * t + amount) + 1;
};
const lerp = (start, end, t) => {
    return start + (end - start) * t;
};

;// ./src/canvas/core/Helpers/Scaling.ts
function fitTextToWidth(text, maxWidth) {
    if (text.width > maxWidth) {
        text.scale.set(maxWidth / text.width);
    }
}
function calculateCoverScale(containerW, containerH, objectW, objectH) {
    return Math.max(containerW / objectW, containerH / objectH);
}

;// ./src/canvas/core/Helpers/ScaleStrategy.ts
const fitStrategy = (viewport, design) => {
    const scale = Math.min(viewport.width / design.width, viewport.height / design.height);
    const offsetX = (viewport.width - design.width * scale) / 2;
    const offsetY = (viewport.height - design.height * scale) / 2;
    return { scale, offsetX, offsetY };
};
const coverStrategy = (viewport, design) => {
    const scale = Math.max(viewport.width / design.width, viewport.height / design.height);
    const offsetX = (viewport.width - design.width * scale) / 2;
    const offsetY = (viewport.height - design.height * scale) / 2;
    return { scale, offsetX, offsetY };
};
const noneStrategy = () => {
    return { scale: 1, offsetX: 0, offsetY: 0 };
};
function isOrientedDesign(d) {
    return 'landscape' in d && 'portrait' in d;
}

// EXTERNAL MODULE: consume shared module (default) pixi8@* (singleton) (fallback: ./node_modules/pixi8/lib/index.mjs)
var index_mjs_ = __webpack_require__(38909);
;// ./src/canvas/core/Helpers/MountScene.ts


function buildZoneMap(zones, isLandscape, designW, designH) {
    if (!zones)
        return {};
    const list = (isLandscape ? zones.landscape : zones.portrait) ?? [];
    const map = {};
    for (const z of list) {
        map[z.label] = { x: z.x * designW, y: z.y * designH, w: z.w * designW, h: z.h * designH };
    }
    return map;
}
function mountScene(runtime, scene, options) {
    const { design, strategy, clock, zones } = options ?? {};
    let scaleRoot = null;
    if (strategy && design) {
        scaleRoot = new index_mjs_.Container();
        runtime.stage.addChild(scaleRoot);
        scaleRoot.addChild(scene);
    }
    else {
        runtime.stage.addChild(scene);
    }
    function handleTick() {
        const dt = clock ? clock.dt : runtime.ticker.deltaMS / 1000;
        scene.update(dt);
    }
    runtime.ticker.add(handleTick);
    function handleResize() {
        const viewport = { width: runtime.screen.width, height: runtime.screen.height };
        const isLandscape = viewport.width >= viewport.height;
        if (strategy && design) {
            const activeDesign = isOrientedDesign(design) ? (isLandscape ? design.landscape : design.portrait) : design;
            const result = strategy(viewport, activeDesign);
            scaleRoot.scale.set(result.scale);
            scaleRoot.position.set(result.offsetX, result.offsetY);
            scene.resize({
                width: activeDesign.width,
                height: activeDesign.height,
                scale: result.scale,
                isLandscape,
                viewportWidth: viewport.width,
                viewportHeight: viewport.height,
                offsetX: result.offsetX,
                offsetY: result.offsetY,
                zones: buildZoneMap(zones, isLandscape, activeDesign.width, activeDesign.height),
            });
        }
        else {
            scene.resize({
                width: viewport.width,
                height: viewport.height,
                scale: 1,
                isLandscape,
                viewportWidth: viewport.width,
                viewportHeight: viewport.height,
                offsetX: 0,
                offsetY: 0,
                zones: buildZoneMap(zones, isLandscape, viewport.width, viewport.height),
            });
        }
    }
    const unsubResize = runtime.onResize(handleResize);
    handleResize();
    return () => {
        runtime.ticker.remove(handleTick);
        unsubResize();
        if (scaleRoot) {
            runtime.stage.removeChild(scaleRoot);
            scaleRoot.removeChild(scene);
            scaleRoot.destroy();
        }
        else {
            runtime.stage.removeChild(scene);
        }
    };
}

;// ./src/canvas/core/Helpers/ObjectPool.ts
class ObjectPool {
    constructor(config) {
        this.pool = [];
        this.active = new Set();
        this.factory = config.factory;
        this.resetFn = config.reset;
        if (config.initialSize) {
            this.prewarm(config.initialSize);
        }
    }
    acquire() {
        const obj = this.pool.pop() ?? this.factory();
        this.active.add(obj);
        return obj;
    }
    release(obj) {
        if (!this.active.delete(obj))
            return;
        this.resetFn(obj);
        this.pool.push(obj);
    }
    prewarm(count) {
        for (let i = 0; i < count; i++) {
            this.pool.push(this.factory());
        }
    }
    clear() {
        this.pool.length = 0;
        this.active.clear();
    }
    get activeCount() {
        return this.active.size;
    }
    get poolSize() {
        return this.pool.length;
    }
}

;// ./src/canvas/core/Helpers/Layout.ts
function computeViewport(bounds) {
    const viewW = bounds.width;
    const viewH = bounds.height;
    const viewX = 0;
    const viewY = 0;
    const centerX = viewW / 2;
    const centerY = viewH / 2;
    const scale = bounds.scale || 1;
    const offsetX = bounds.offsetX ?? 0;
    const offsetY = bounds.offsetY ?? 0;
    const viewportWidth = bounds.viewportWidth ?? viewW;
    const viewportHeight = bounds.viewportHeight ?? viewH;
    const screenX = offsetX === 0 ? 0 : -offsetX / scale;
    const screenY = offsetY === 0 ? 0 : -offsetY / scale;
    const screenW = viewportWidth / scale;
    const screenH = viewportHeight / scale;
    const screenCenterX = screenX + screenW / 2;
    const screenCenterY = screenY + screenH / 2;
    return {
        viewW,
        viewH,
        viewX,
        viewY,
        centerX,
        centerY,
        screenX,
        screenY,
        screenW,
        screenH,
        screenCenterX,
        screenCenterY,
        zoneAreas: bounds.zones ?? {},
    };
}
function computeAnchorPosition(anchor, viewport, offsetX = 0, offsetY = 0) {
    const { viewW, viewH, viewX, viewY, centerX, centerY, screenX, screenY, screenW, screenH, screenCenterX, screenCenterY, } = viewport;
    let x;
    let y;
    switch (anchor) {
        case 'center':
            x = centerX;
            y = centerY;
            break;
        case 'top':
            x = centerX;
            y = viewY;
            break;
        case 'bottom':
            x = centerX;
            y = viewY + viewH;
            break;
        case 'left':
            x = viewX;
            y = centerY;
            break;
        case 'right':
            x = viewX + viewW;
            y = centerY;
            break;
        case 'top-left':
            x = viewX;
            y = viewY;
            break;
        case 'top-right':
            x = viewX + viewW;
            y = viewY;
            break;
        case 'bottom-left':
            x = viewX;
            y = viewY + viewH;
            break;
        case 'bottom-right':
            x = viewX + viewW;
            y = viewY + viewH;
            break;
        case 'screen-center':
            x = screenCenterX;
            y = screenCenterY;
            break;
        case 'screen-top':
            x = screenCenterX;
            y = screenY;
            break;
        case 'screen-bottom':
            x = screenCenterX;
            y = screenY + screenH;
            break;
        case 'screen-left':
            x = screenX;
            y = screenCenterY;
            break;
        case 'screen-right':
            x = screenX + screenW;
            y = screenCenterY;
            break;
        case 'screen-top-left':
            x = screenX;
            y = screenY;
            break;
        case 'screen-top-right':
            x = screenX + screenW;
            y = screenY;
            break;
        case 'screen-bottom-left':
            x = screenX;
            y = screenY + screenH;
            break;
        case 'screen-bottom-right':
            x = screenX + screenW;
            y = screenY + screenH;
            break;
        case 'game-area-center': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x + ga.w / 2 : centerX;
            y = ga ? ga.y + ga.h / 2 : centerY;
            break;
        }
        case 'game-area-top': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x + ga.w / 2 : centerX;
            y = ga ? ga.y : viewY;
            break;
        }
        case 'game-area-bottom': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x + ga.w / 2 : centerX;
            y = ga ? ga.y + ga.h : viewY + viewH;
            break;
        }
        case 'game-area-left': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x : viewX;
            y = ga ? ga.y + ga.h / 2 : centerY;
            break;
        }
        case 'game-area-right': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x + ga.w : viewX + viewW;
            y = ga ? ga.y + ga.h / 2 : centerY;
            break;
        }
        case 'game-area-top-left': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x : viewX;
            y = ga ? ga.y : viewY;
            break;
        }
        case 'game-area-top-right': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x + ga.w : viewX + viewW;
            y = ga ? ga.y : viewY;
            break;
        }
        case 'game-area-bottom-left': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x : viewX;
            y = ga ? ga.y + ga.h : viewY + viewH;
            break;
        }
        case 'game-area-bottom-right': {
            const ga = viewport.zoneAreas['Game Area'];
            x = ga ? ga.x + ga.w : viewX + viewW;
            y = ga ? ga.y + ga.h : viewY + viewH;
            break;
        }
        default:
            x = centerX;
            y = centerY;
    }
    return { x: x + offsetX, y: y + offsetY };
}
function applyLayout(object, bounds, layout) {
    if (layout.layoutAnchor) {
        const viewport = computeViewport(bounds);
        const pos = computeAnchorPosition(layout.layoutAnchor, viewport, layout.offsetX ?? 0, layout.offsetY ?? 0);
        object.position.set(pos.x, pos.y);
    }
    else {
        if (layout.x !== undefined && layout.y !== undefined) {
            object.position.set(layout.x, layout.y);
        }
    }
    if (layout.scale !== undefined)
        object.scale.set(layout.scale);
    if (layout.alpha !== undefined)
        object.alpha = layout.alpha;
    if (layout.tint !== undefined)
        object.tint = layout.tint;
    if (layout.zIndex !== undefined)
        object.zIndex = layout.zIndex;
    if (layout.visible !== undefined)
        object.visible = layout.visible;
    if (layout.rotation !== undefined)
        object.rotation = layout.rotation;
    if (layout.anchor !== undefined && 'anchor' in object) {
        const a = layout.anchor;
        if (typeof a === 'number') {
            object.anchor.set(a);
        }
        else if (a && typeof a === 'object' && 'x' in a) {
            object.anchor.set(a.x, a.y);
        }
    }
    if (layout.pivot !== undefined) {
        object.pivot.set(layout.pivot.x, layout.pivot.y);
    }
    if (layout.skew !== undefined) {
        object.skew.set(layout.skew.x, layout.skew.y);
    }
}

;// ./src/canvas/core/Helpers/index.ts








/***/ })

}]);