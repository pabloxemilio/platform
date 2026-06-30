"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[3664],{

/***/ 83664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Assets: () => (/* reexport */ Assets)
});

// EXTERNAL MODULE: consume shared module (default) pixi8@* (singleton) (fallback: ./node_modules/pixi8/lib/index.mjs)
var index_mjs_ = __webpack_require__(38909);
;// ./src/canvas/core/Assets/Assets.ts

class Assets {
    static async loadManifest(manifestOrOptions) {
        if ('manifest' in manifestOrOptions) {
            const { manifest, basePath, texturePreference, skipDetections, loadOptions } = manifestOrOptions;
            await index_mjs_.Assets.init({ manifest, basePath, texturePreference, skipDetections, loadOptions });
        }
        else {
            await index_mjs_.Assets.init({ manifest: manifestOrOptions });
        }
    }
    static async loadBundle(bundleName, onProgress) {
        await index_mjs_.Assets.loadBundle(bundleName, onProgress);
    }
    static async loadBundles(bundleNames, onProgress) {
        await index_mjs_.Assets.loadBundle(bundleNames, onProgress);
    }
    static backgroundLoadBundle(bundleNames) {
        index_mjs_.Assets.backgroundLoadBundle(bundleNames);
    }
    static async loadFonts(fonts) {
        const faces = fonts.map((f) => {
            const face = new FontFace(f.name, `url(${f.url})`);
            document.fonts.add(face);
            return face.load();
        });
        await Promise.all(faces);
    }
    static async loadDependentSpines(config) {
        await index_mjs_.Assets.load(config.mainSpineAlias);
        const mainSpine = index_mjs_.Assets.get(config.mainSpineAlias);
        const atlas = mainSpine.spineAtlas;
        for (const alias of config.dependentAliases) {
            index_mjs_.Assets.cache.set(`${alias}-atlas`, atlas);
        }
        await index_mjs_.Assets.load(config.dependentAliases);
    }
    static get(assetName) {
        return index_mjs_.Assets.get(assetName);
    }
    static reset() {
        index_mjs_.Assets.reset();
    }
}

;// ./src/canvas/core/Assets/index.ts



/***/ })

}]);