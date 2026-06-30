"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[4852],{

/***/ 74852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CanvasController)
/* harmony export */ });
class CanvasController {
    constructor() {
        this.callbacks = {};
        this.events = {};
    }
    register(id, callback) {
        this.callbacks[id] = callback;
    }
    unregister(id) {
        delete this.callbacks[id];
    }
    invoke(id, ...args) {
        const callback = this.callbacks[id];
        if (callback) {
            callback(...args);
        }
        else {
            console.warn(`Callback with id "${String(id)}" not found.`);
        }
    }
    listCallbacks() {
        return Object.keys(this.callbacks);
    }
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    off(event, callback) {
        if (!this.events[event])
            return;
        this.events[event] = this.events[event].filter((cb) => cb !== callback);
    }
    trigger(event, data) {
        this.events[event]?.forEach((callback) => callback(data));
    }
    listEvents() {
        return Object.keys(this.events);
    }
    destroy() {
        this.callbacks = {};
        this.events = {};
    }
}


/***/ })

}]);