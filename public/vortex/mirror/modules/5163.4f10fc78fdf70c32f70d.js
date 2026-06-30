"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[5163],{

/***/ 34294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ config)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58608);

const config = () => {
    return {
        api: (0,_index__WEBPACK_IMPORTED_MODULE_0__/* .url */ .OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,_index__WEBPACK_IMPORTED_MODULE_0__/* .url */ .OZ)().host}/connection/websocket`,
    };
};


/***/ }),

/***/ 25163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_UltimateDiceCommon)
});

// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: consume shared module (default) uuid@^9.0.0 (strict) (fallback: ./node_modules/uuid/dist/esm-browser/index.js)
var index_js_ = __webpack_require__(81682);
// EXTERNAL MODULE: consume shared module (default) centrifuge@^2.7.6 (strict) (fallback: ./node_modules/centrifuge/dist/centrifuge.js)
var centrifuge_js_ = __webpack_require__(68239);
var centrifuge_js_default = /*#__PURE__*/__webpack_require__.n(centrifuge_js_);
// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/ultimatedice/config.ts

const config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

;// ./src/framework/api/ultimatedice/index.ts


const ultimatedice_api = () => {
    const protocol = config().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config().api}/api`,
    });
};
const placeBet = ({ headers, ...params }) => ultimatedice_api().post('/bets/place', params, { headers });
const create = ({ headers, ...params }) => ultimatedice_api().post(`/games/create`, params, { headers });
/* harmony default export */ const ultimatedice = ((/* unused pure expression or super */ null && (ultimatedice_api)));

// EXTERNAL MODULE: ./src/framework/api/dice/config.ts
var dice_config = __webpack_require__(34294);
// EXTERNAL MODULE: ./src/framework/helpers/round.ts
var round = __webpack_require__(77889);
// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
;// ./src/framework/store/UltimateDiceCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class UltimateDiceCommon {
    constructor(root, gameConfig) {
        this.roundSeed = '';
        this.clientSeed = (0,index_js_.v4)();
        this.serverSeed = undefined;
        this.nonce = 1;
        this.amount = '1.00';
        this.values = [0];
        this.action = 'under';
        this.actionList = ['under', 'over', 'inner', 'outer', 'inner2'];
        this.gameRequestStatus = 'initial';
        this.gameCreateResponse = null;
        this.gameResponse = null;
        this.winLevelList = [0, 5, 7, 10];
        this.winScreen = false;
        this.winScreenTimeout = null;
        this.lostScreen = false;
        this.lostScreenTimeout = null;
        this.showHistoryInChart = true;
        this.setAmount = (amount) => {
            this.amount = String(amount);
            localStorageHelper/* default */.A.set(`saved_amount:${this.root.profileCommon.profile.currency}`, amount);
        };
        this.setValues = (value) => {
            this.values = value;
        };
        this.setAction = (value) => {
            this.action = value;
        };
        this.setGameRequestStatus = (value) => {
            this.gameRequestStatus = value;
        };
        this.setGameCreateResponse = (value) => {
            this.gameCreateResponse = value;
        };
        this.setGameResponse = (value) => {
            this.gameResponse = value;
        };
        this.setWinScreen = (value) => {
            this.winScreen = value;
        };
        this.setLostScreen = (value) => {
            this.lostScreen = value;
        };
        this.setShowHistoryInChart = (value) => {
            this.showHistoryInChart = value;
        };
        this.place = async ({ init }) => {
            const { profileCommon: { profile: { playerId, token, currency, subPartnerId, balance }, }, uiCommon: { isMobile, showNotEnoughBalanceError }, } = this.root;
            if (balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
                return;
            }
            try {
                if (this.disabled)
                    return;
                this.setGameRequestStatus('loading');
                const { data: createResponse } = await create({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                    },
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    theme: this.gameServerTheme,
                });
                if (init) {
                    this.setGameCreateResponse(createResponse);
                    this.setGameRequestStatus('initial');
                    return;
                }
                const { data: gameResponse } = await placeBet({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                    },
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    roundId: createResponse.roundId,
                    currency,
                    amount: Number(this.amount),
                    action: this.action,
                    ...(this.action === 'under' && { value1right: this.values[0] }),
                    ...(this.action === 'over' && { value1left: this.values[0] }),
                    ...(this.action === 'inner' && { value1left: this.values[0], value1right: this.values[1] }),
                    ...(this.action === 'outer' && { value1right: this.values[0], value2left: this.values[1] }),
                    ...(this.action === 'inner2' && {
                        value1left: this.values[0],
                        value1right: this.values[1],
                        value2left: this.values[2],
                        value2right: this.values[3],
                    }),
                });
                this.setGameCreateResponse(createResponse);
                this.setGameResponse(gameResponse);
                if (gameResponse.result === 'won') {
                    this.setWinScreen(true);
                    this.winScreenTimeout = window.setTimeout(() => {
                        this.setWinScreen(false);
                    }, this.gameConfig.winLevelListDuration[this.winLevel] || 0);
                }
                if (gameResponse.result === 'lost') {
                    this.setLostScreen(true);
                    this.lostScreenTimeout = window.setTimeout(() => {
                        this.setLostScreen(false);
                    }, this.gameConfig.lostDuration || 0);
                }
                this.setGameRequestStatus('initial');
            }
            catch (error) {
                this.setGameRequestStatus('initial');
                this.root.uiCommon.errorCodeResolver(error.response);
                console.log('place error:', error);
            }
        };
        this.mockGame = () => {
            const { location } = window;
            const { search } = location;
            const queryObj = new URLSearchParams(search);
            if (!queryObj.has('serverSeed'))
                return;
            (0,mobx_esm_js_.runInAction)(() => {
                this.serverSeed = queryObj.get('serverSeed') || undefined;
                this.nonce = Number(queryObj.get('nonce')) || undefined;
                this.clientSeed = queryObj.get('clientSeed') || undefined;
            });
        };
        this.retreiveAmount = () => {
            const { limit: { minBet, defaultBet }, profile: { currency }, } = this.root.profileCommon;
            const amount = localStorageHelper/* default */.A.get(`saved_amount:${currency}`);
            if (amount && !isNaN(Number(amount))) {
                this.amount = amount;
                return;
            }
            if (defaultBet) {
                this.amount = String(defaultBet);
                return;
            }
            this.amount = String(minBet * 10);
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.centrifuge = new (centrifuge_js_default())((0,dice_config/* config */.$)().centrifuge || '', {});
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.retreiveAmount();
            this.place({ init: true });
        });
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId;
        this.gameServerTheme = gameConfig.gameServerTheme;
        this.winLevelList = gameConfig.winLevelList || [0, 5, 7, 10];
        this.setAction(gameConfig.game.action);
        this.setValues(gameConfig.game.actionValues[gameConfig.game.action].map((value) => Math.round(value)));
        this.mockGame();
        (0,mobx_esm_js_.reaction)(() => this.action, () => {
            const actionValues = this.gameConfig.game.actionValues[this.action].map((value) => Math.round(value));
            this.setValues(actionValues);
        }, { fireImmediately: true });
    }
    get winLevel() {
        const coefficient = this.gameResponse?.coefficient;
        if (!coefficient)
            return -1;
        let level = -1;
        for (let i = 0; i < this.winLevelList.length; i++) {
            if (coefficient >= this.winLevelList[i])
                level = i;
        }
        return level;
    }
    get possibleGame() {
        if (!this.gameCreateResponse)
            return {
                coefficient: 1,
                winChange: 0,
                posiblePayout: 0,
            };
        const rtp = this.gameCreateResponse.settings.rtp / 100;
        let S = 0;
        if (this.action === 'under')
            S = this.values[0] + 0.01;
        if (this.action === 'over')
            S = 100 - this.values[0] + 0.01;
        if (this.action === 'inner')
            S = this.values[1] - this.values[0] + 0.01;
        if (this.action === 'outer') {
            S = this.values[0] + (100 - this.values[1]) + 0.02;
        }
        if (this.action === 'inner2') {
            S = this.values[1] - this.values[0] + this.values[3] - this.values[2] + 0.02;
        }
        const chance = S / 100.01;
        const coefficient = (0,round/* default */.A)((1 / chance) * rtp, 2);
        const posiblePayout = (0,truncateDecimals/* default */.A)((0,floor/* default */.A)(coefficient * Number(this.amount), 2), this.root.profileCommon.profile.rounding);
        const winChange = (0,round/* default */.A)(chance * 100, 2);
        return {
            coefficient,
            winChange,
            posiblePayout,
        };
    }
    get disabled() {
        const { autoBetEnabled } = this.root.autobetCommon;
        return this.gameRequestStatus !== 'initial' || autoBetEnabled || this.winScreen || this.lostScreen;
    }
}
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "serverSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "values", void 0);
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "action", void 0);
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "actionList", void 0);
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "gameRequestStatus", void 0);
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "gameCreateResponse", void 0);
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "gameResponse", void 0);
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "winLevelList", void 0);
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "winScreen", void 0);
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "winScreenTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "lostScreen", void 0);
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "lostScreenTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], UltimateDiceCommon.prototype, "showHistoryInChart", void 0);
__decorate([
    mobx_esm_js_.computed
], UltimateDiceCommon.prototype, "winLevel", null);
__decorate([
    mobx_esm_js_.computed
], UltimateDiceCommon.prototype, "possibleGame", null);
__decorate([
    mobx_esm_js_.computed
], UltimateDiceCommon.prototype, "disabled", null);
__decorate([
    mobx_esm_js_.action
], UltimateDiceCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], UltimateDiceCommon.prototype, "setValues", void 0);
__decorate([
    mobx_esm_js_.action
], UltimateDiceCommon.prototype, "setAction", void 0);
__decorate([
    mobx_esm_js_.action
], UltimateDiceCommon.prototype, "setGameRequestStatus", void 0);
__decorate([
    mobx_esm_js_.action
], UltimateDiceCommon.prototype, "setGameCreateResponse", void 0);
__decorate([
    mobx_esm_js_.action
], UltimateDiceCommon.prototype, "setGameResponse", void 0);
__decorate([
    mobx_esm_js_.action
], UltimateDiceCommon.prototype, "setWinScreen", void 0);
__decorate([
    mobx_esm_js_.action
], UltimateDiceCommon.prototype, "setLostScreen", void 0);
__decorate([
    mobx_esm_js_.action
], UltimateDiceCommon.prototype, "setShowHistoryInChart", void 0);
__decorate([
    mobx_esm_js_.action
], UltimateDiceCommon.prototype, "place", void 0);
__decorate([
    mobx_esm_js_.action
], UltimateDiceCommon.prototype, "mockGame", void 0);
__decorate([
    mobx_esm_js_.action
], UltimateDiceCommon.prototype, "retreiveAmount", void 0);
/* harmony default export */ const store_UltimateDiceCommon = (UltimateDiceCommon);


/***/ })

}]);