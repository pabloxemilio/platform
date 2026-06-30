"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[4635],{

/***/ 24635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var src_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22701);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8570);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class Autobet {
    constructor(root) {
        this.bets = [];
        this.min = 0.01;
        this.autoBetModalOpen = [];
        this.autoBetEnabled = [];
        this.autoBetsAmount = [];
        this.autoBetsInitialAmount = [];
        this.autoBetLimit = [];
        this.autoBetProSetting = [];
        this.autoBetsCashout = [];
        this.stopOnAnyWin = [];
        this.initialAmount = [];
        this.onWinIncrease = [];
        this.onWinIncreaseAmount = [];
        this.setOnWinIncrease = (increase, index) => {
            if (increase) {
                this.setOnWinIncreaseAmount(100, index);
            }
            else {
                this.setOnWinIncreaseAmount(0, index);
            }
            this.onWinIncrease[index] = increase;
        };
        this.setOnWinIncreaseAmount = (amount, index) => {
            this.onWinIncreaseAmount[index] = amount;
        };
        this.setOnLoseIncrease = (increase, index) => {
            if (increase) {
                this.setOnLoseIncreaseAmount(100, index);
            }
            else {
                this.setOnLoseIncreaseAmount(0, index);
            }
            this.onLoseIncrease[index] = increase;
        };
        this.setOnLoseIncreaseAmount = (amount, index) => {
            this.onLoseIncreaseAmount[index] = amount;
        };
        this.onLoseIncrease = this.bets.map((bet) => bet);
        this.onLoseIncreaseAmount = this.bets.map((_) => 0);
        this.setAutoBetEnabled = (autoBetEnabled, index) => {
            this.autoBetEnabled[index] = autoBetEnabled;
        };
        this.setAutoBetsAmount = (amount, index) => {
            this.autoBetsAmount[index] = Number(amount);
        };
        this.setAutoBetsInitialAmount = (amount, index) => {
            this.autoBetsInitialAmount[index] = amount;
        };
        this.setInitialAmount = (amount, index) => {
            this.initialAmount[index] = amount;
        };
        this.setAutoBetLimit = (autoBetLimit, index) => {
            this.autoBetLimit[index] = autoBetLimit;
        };
        this.setStopOnAnyWin = (stopOnAnyWin, index) => {
            this.stopOnAnyWin[index] = stopOnAnyWin;
        };
        this.setAutoBetProSetting = (value, index) => {
            this.autoBetProSetting[index] = value;
        };
        this.setAutoBetsCashout = (value, index) => {
            this.autoBetsCashout[index] = value;
        };
        this.root = root;
        this.bets = (0,src_bootstrap__WEBPACK_IMPORTED_MODULE_0__.GET_GAME_CONFIG)().bets.map(() => false);
        this.autoBetEnabled = this.bets.map(() => false);
        this.autoBetsAmount = this.bets.map(() => 0);
        this.autoBetsInitialAmount = this.bets.map(() => null);
        this.autoBetLimit = this.bets.map(() => false);
        this.autoBetProSetting = this.bets.map(() => false);
        this.autoBetsCashout = this.bets.map(() => false);
        this.stopOnAnyWin = this.bets.map(() => false);
        this.initialAmount = this.bets.map(() => 0);
        this.onWinIncrease = this.bets.map(() => false);
        this.onWinIncreaseAmount = this.bets.map(() => 0);
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.makeAutoObservable)(this);
    }
    get onWinIncreaseError() {
        return this.onWinIncrease.map((increase, index) => {
            if (increase && this.onWinIncreaseAmount[index] < this.root.game.bets[index].autobet.win.increase.min) {
                return 'COMMON.INCREASE_BY_VALIDATION';
            }
            if (increase && !this.onWinIncreaseAmount[index]) {
                return 'COMMON.INCREASE_BY_VALIDATION';
            }
            return undefined;
        });
    }
    get onLoseIncreaseError() {
        return this.onLoseIncrease.map((increase, index) => {
            if (increase &&
                this.onLoseIncreaseAmount[index] < (0,src_bootstrap__WEBPACK_IMPORTED_MODULE_0__.GET_GAME_CONFIG)().bets[index].autobet.lose.increase.min) {
                return 'COMMON.INCREASE_BY_VALIDATION';
            }
            if (increase && !this.onLoseIncreaseAmount[index]) {
                return 'COMMON.INCREASE_BY_VALIDATION';
            }
            return undefined;
        });
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.computed
], Autobet.prototype, "onWinIncreaseError", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], Autobet.prototype, "setOnWinIncrease", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], Autobet.prototype, "setOnWinIncreaseAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], Autobet.prototype, "setOnLoseIncrease", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], Autobet.prototype, "setOnLoseIncreaseAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], Autobet.prototype, "onLoseIncrease", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], Autobet.prototype, "onLoseIncreaseAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.computed
], Autobet.prototype, "onLoseIncreaseError", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], Autobet.prototype, "setAutoBetEnabled", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], Autobet.prototype, "setAutoBetsAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], Autobet.prototype, "setAutoBetsInitialAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], Autobet.prototype, "setInitialAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], Autobet.prototype, "setAutoBetLimit", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], Autobet.prototype, "setStopOnAnyWin", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], Autobet.prototype, "setAutoBetProSetting", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], Autobet.prototype, "setAutoBetsCashout", void 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Autobet);


/***/ })

}]);