"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[5042],{

/***/ 95042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_LimboCommon)
});

// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: consume shared module (default) uuid@^9.0.0 (strict) (fallback: ./node_modules/uuid/dist/esm-browser/index.js)
var index_js_ = __webpack_require__(81682);
// EXTERNAL MODULE: consume shared module (default) centrifuge@^2.7.6 (strict) (fallback: ./node_modules/centrifuge/dist/centrifuge.js)
var centrifuge_js_ = __webpack_require__(68239);
var centrifuge_js_default = /*#__PURE__*/__webpack_require__.n(centrifuge_js_);
// EXTERNAL MODULE: consume shared module (default) i18next@^23.2.3 (strict) (fallback: ./node_modules/i18next/dist/esm/i18next.js)
var i18next_js_ = __webpack_require__(49953);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/limbo/config.ts

const config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
;// ./src/framework/api/limbo/index.ts


const limbo_api = () => {
    const protocol = config().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config().api}/api`,
    });
};
const placeBetRequest = ({ headers, ...params }) => limbo_api().post('/bets/place', params, { headers });
const getGameRequest = ({ headers, ...params }) => limbo_api().post(`/games/create`, params, { headers });
const retriveGameRequest = ({ headers, ...params }) => limbo_api().post(`/games/retrive`, params, { headers });
/* harmony default export */ const limbo = ((/* unused pure expression or super */ null && (limbo_api)));

// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
;// ./src/framework/store/LimboCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class LimboCommon {
    constructor(root, gameConfig) {
        this.roundId = localStorageHelper/* default */.A.get('roundId');
        this.roundSeed = '';
        this.clientSeed = (0,index_js_.v4)();
        this.nonce = 1;
        this.amount = '1.00';
        this.result = 'initial';
        this.gameResult = null;
        this.payout = 0;
        this.coefficient = '1.00';
        this.coefficientWithRid = '1.00:';
        this.targetCoeffient = '2';
        this.gameStarted = false;
        this.limbo = [];
        this.placebetProcessing = false;
        this.myBetsUpdater = 0;
        this.limit = {
            currency: '',
            currencyId: 0,
            maxBet: 0,
            maxWin: 0,
            minBet: 0,
        };
        this.history = [];
        this.showResult = true;
        this.animation = false;
        this.historyListSize = 8;
        this.historyList = [];
        this.winScreen = false;
        this.winScreenTimeout = null;
        this.setHistoryListSize = (value) => {
            this.historyListSize = value;
        };
        this.updateHistoryList = (value) => {
            let history = [...this.historyList];
            if (!value) {
                history = [];
            }
            while (history.length !== this.historyListSize) {
                history.push({
                    value: '',
                    win: false,
                    lose: false,
                });
            }
            if (value) {
                const index = history.findIndex((item) => item.value === '');
                if (index === -1) {
                    history = [
                        ...history.slice(-(this.historyListSize - 1)),
                        {
                            value: `x${value.coefficient}`,
                            win: value.result === 'won',
                            lose: value.result === 'lost',
                        },
                    ];
                }
                else {
                    history[index] = {
                        value: `x${value.coefficient}`,
                        win: value.result === 'won',
                        lose: value.result === 'lost',
                    };
                }
            }
            this.historyList = history;
        };
        this.setAnimation = (value) => {
            this.animation = value;
        };
        this.retreiveAmount = () => {
            const { limit: { minBet, defaultBet }, profile: { currency }, } = this.root.profileCommon;
            const amount = localStorageHelper/* default */.A.get(`saved_amount:${currency}`);
            if (amount && !isNaN(Number(amount))) {
                this.amount = amount;
            }
            else if (defaultBet) {
                this.amount = String(defaultBet);
            }
            else {
                this.amount = String(minBet * 10);
            }
        };
        this.startGame = () => {
            if (this.roundId)
                return;
            const { profileCommon: { profile: { balance }, }, uiCommon: { showNotEnoughBalanceError }, } = this.root;
            if (balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
            }
            else {
                this.fetchGame();
            }
        };
        this.setResult = (result, payout = 0, gameCoefficient = 0) => {
            (0,mobx_esm_js_.runInAction)(() => {
                if (result) {
                    this.myBetsUpdater += 1;
                }
                this.gameResult = result;
                this.payout = payout;
                this.coefficient = String(gameCoefficient);
                this.coefficientWithRid = `${String(gameCoefficient)}:${this.roundId}`;
            });
            window.setTimeout(() => {
                this.updateHistoryList({ coefficient: gameCoefficient, result: result });
            }, this.gameConfig.game.duration);
        };
        this.fetchGame = async () => {
            const { clientSeed, nonce } = this;
            const { profileCommon: { profile: { token, playerId }, }, } = this.root;
            try {
                const { data: { roundId }, } = await getGameRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed,
                    nonce,
                    theme: this.gameServerTheme,
                });
                this.setGame(roundId);
                this.gameStarted = true;
                return roundId;
            }
            catch (error) {
                console.log('fetchGame error:', error);
                return error;
            }
        };
        this.retriveGame = async (roundId) => {
            const { profileCommon: { profile: { token, playerId }, }, uiCommon: { setAlertList }, } = this.root;
            this.gameStarted = true;
            try {
                const { data: { clientSeed, hash, nonce }, } = await retriveGameRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    roundId,
                });
                if (!clientSeed || !nonce) {
                    throw { clientSeed, hash, nonce };
                }
                (0,mobx_esm_js_.runInAction)(() => {
                    this.clientSeed = clientSeed;
                    this.nonce = nonce;
                });
                setAlertList({
                    title: i18next_js_["default"].t('NOTIF.CONTINUE_ROUND'),
                    type: 'success',
                });
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.fetchGame();
                return error;
            }
        };
        this.setGame = (roundId = '') => {
            this.roundId = roundId;
            localStorageHelper/* default */.A.set('roundId', roundId);
        };
        this.place = async () => {
            const { profileCommon: { profile: { token, playerId, currency, subPartnerId, balance }, }, uiCommon: { showNotEnoughBalanceError, isMobile }, } = this.root;
            const { roundId } = this;
            if (balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
                return;
            }
            if (!roundId) {
                throw new Error('no roundId');
            }
            try {
                if (this.winScreenTimeout)
                    clearTimeout(this.winScreenTimeout);
                this.winScreen = false;
                this.placebetProcessing = true;
                const respond = await placeBetRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                    },
                    coefficient: Number(this.targetCoeffient),
                    roundId: roundId,
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    amount: Number(this.amount),
                    currency,
                    theme: this.gameServerTheme,
                });
                const { data: { result, payout, gameCoefficient }, } = respond;
                if (result) {
                    this.setResult(result, payout, gameCoefficient);
                }
                await this.fetchGame();
                this.placebetProcessing = false;
                this.animation = true;
                window.setTimeout(() => {
                    this.animation = false;
                    this.winScreen = true;
                }, this.gameConfig.game.duration);
                this.winScreenTimeout = window.setTimeout(() => {
                    this.winScreen = false;
                }, this.gameConfig.game.duration + this.gameConfig.winDuration);
                if (this.root.tournamentsCommon && this.root.tournamentsCommon.addBet) {
                    this.root.tournamentsCommon.addBet({
                        amount: Number(this.amount),
                    });
                }
            }
            catch (error) {
                this.placebetProcessing = false;
                this.animation = false;
                console.log('tap tile error:', error);
                this.fetchGame();
                this.root.uiCommon.errorCodeResolver(error.response, () => {
                    this.setShowResult(true);
                });
                return error;
            }
        };
        this.setAmount = (amount) => {
            const { profile: { currency }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.set(`saved_amount:${currency}`, amount);
            this.amount = String(amount);
        };
        this.setTargetCoeffient = (coefficient) => {
            this.targetCoeffient = String(coefficient);
        };
        this.setShowResult = (showResult) => {
            this.showResult = showResult;
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'limbo';
        this.gameServerTheme = gameConfig.gameServerTheme || 'limbo';
        this.targetCoeffient = gameConfig.multiplier.default.toString();
        this.centrifuge = new (centrifuge_js_default())(config().centrifuge || '', {});
        this.root.profileCommon.auth(this.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.retreiveAmount();
            if (this.roundId) {
                await this.retriveGame(this.roundId);
            }
            else {
                this.startGame();
            }
        });
    }
    get winLevel() {
        let level = 0;
        for (let i = 0; i < this.gameConfig.winLevelList.length; i++) {
            if (Number(this.targetCoeffient) >= this.gameConfig.winLevelList[i])
                level = i;
        }
        return level;
    }
    get lockedUi() {
        const { autoBetEnabled } = this.root.autobetCommon;
        return autoBetEnabled;
    }
    get multiplierError() {
        if (Number(this.targetCoeffient) < 1.01) {
            return i18next_js_["default"].t('LIMBO.CASHOUT_VALIDATION');
        }
        if (!this.targetCoeffient) {
            return i18next_js_["default"].t('LIMBO.CASHOUT_VALIDATION');
        }
        return null;
    }
    get lockedButtons() {
        const { uiCommon: { amountError }, } = this.root;
        return !!amountError || !!this.multiplierError || this.placebetProcessing || !this.showResult;
    }
}
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "roundId", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "result", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "coefficientWithRid", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "targetCoeffient", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "gameStarted", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "limbo", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "placebetProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "myBetsUpdater", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "limit", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "history", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "showResult", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "animation", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "historyListSize", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "historyList", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "winScreen", void 0);
__decorate([
    mobx_esm_js_.observable
], LimboCommon.prototype, "winScreenTimeout", void 0);
__decorate([
    mobx_esm_js_.computed
], LimboCommon.prototype, "winLevel", null);
__decorate([
    mobx_esm_js_.computed
], LimboCommon.prototype, "lockedUi", null);
__decorate([
    mobx_esm_js_.computed
], LimboCommon.prototype, "multiplierError", null);
__decorate([
    mobx_esm_js_.computed
], LimboCommon.prototype, "lockedButtons", null);
__decorate([
    mobx_esm_js_.action
], LimboCommon.prototype, "setHistoryListSize", void 0);
__decorate([
    mobx_esm_js_.action
], LimboCommon.prototype, "updateHistoryList", void 0);
__decorate([
    mobx_esm_js_.action
], LimboCommon.prototype, "setAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], LimboCommon.prototype, "retreiveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], LimboCommon.prototype, "startGame", void 0);
__decorate([
    mobx_esm_js_.action
], LimboCommon.prototype, "setResult", void 0);
__decorate([
    mobx_esm_js_.action
], LimboCommon.prototype, "fetchGame", void 0);
__decorate([
    mobx_esm_js_.action
], LimboCommon.prototype, "retriveGame", void 0);
__decorate([
    mobx_esm_js_.action
], LimboCommon.prototype, "setGame", void 0);
__decorate([
    mobx_esm_js_.action
], LimboCommon.prototype, "place", void 0);
__decorate([
    mobx_esm_js_.action
], LimboCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], LimboCommon.prototype, "setTargetCoeffient", void 0);
__decorate([
    mobx_esm_js_.action
], LimboCommon.prototype, "setShowResult", void 0);
/* harmony default export */ const store_LimboCommon = (LimboCommon);


/***/ })

}]);