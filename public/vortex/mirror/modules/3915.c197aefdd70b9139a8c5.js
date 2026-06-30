"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[3915],{

/***/ 29533:
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

/***/ 92879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CW: () => (/* binding */ placeBetRequest),
/* harmony export */   Yv: () => (/* binding */ createGameRequest),
/* harmony export */   ZJ: () => (/* binding */ retriveGameRequest),
/* harmony export */   dn: () => (/* binding */ cashoutRequest),
/* harmony export */   zC: () => (/* binding */ placeMultiTapRequest)
/* harmony export */ });
/* unused harmony export api */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75364);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29533);


const api = () => {
    const protocol = (0,_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .$)().api.includes('localhost') ? 'http' : 'https';
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        baseURL: `${protocol}://${(0,_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .$)().api}/api`,
    });
};
const placeBetRequest = ({ headers, ...params }) => api().post('/bets/place', params, { headers });
const createGameRequest = ({ headers, ...params }) => api().post('/games/create', params, { headers });
const placeMultiTapRequest = ({ headers, ...params }) => api().post('/bets/multiplace', params, { headers });
const cashoutRequest = ({ headers, ...params }) => api().post('/bets/cashout', params, { headers });
const retriveGameRequest = ({ headers, ...params }) => api().post(`/games/retrieve`, params, { headers });
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (api)));


/***/ }),

/***/ 23915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_Dice3Common)
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
;// ./src/framework/api/dice3/config.ts

const config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

;// ./src/framework/api/dice3/index.ts


const dice3_api = () => {
    const protocol = config().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config().api}/api`,
    });
};
const placeBetRequest = ({ headers, ...params }) => dice3_api().post('/bets/place', params, { headers });
const getGameRequest = ({ headers, ...params }) => dice3_api().post(`/games/create`, params, { headers });
/* harmony default export */ const dice3 = ((/* unused pure expression or super */ null && (dice3_api)));

// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/round.ts
var round = __webpack_require__(77889);
;// ./src/framework/helpers/dice3/dice3GetCoefficient.ts

function getCoefficient(probabilities, rtp = 97.5) {
    const probability = probabilities.reduce((acc, value) => {
        return acc * value;
    }, 1) / 10000;
    return (0,round/* default */.A)((1 / probability) * rtp, 2);
}
/* harmony default export */ const dice3GetCoefficient = (getCoefficient);

// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
// EXTERNAL MODULE: ./src/framework/api/mines/index.ts
var mines = __webpack_require__(92879);
// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
;// ./src/framework/store/Dice3Common.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class Dice3Common {
    constructor(root, gameConfig) {
        this.showHistory = null;
        this.tab = 0;
        this.currentBet = null;
        this.gameId = '';
        this.diceValue = 50;
        this.action = 'over';
        this.diceValues = [];
        this.roundSeed = '';
        this.roundId = localStorageHelper/* default */.A.get('roundId');
        this.clientSeed = (0,index_js_.v4)();
        this.serverSeed = undefined;
        this.nonce = 1;
        this.amount = '1.00';
        this.result = 'initial';
        this.resultTimeout = null;
        this.gameResult = null;
        this.results = null;
        this.coefficient = 0;
        this.status = null;
        this.payout = 0;
        this.placeBetStatus = 'initial';
        this.myBets = [];
        this.winLevelList = [0, 2, 10];
        this.winShow = false;
        this.minCoefficient = undefined;
        this.freebetId = '';
        this.animation = false;
        this.resultVisible = false;
        this.resultAwait = 'initial';
        this.resultAwaitTimeout = null;
        this.resultAwaitTimeoutClear = null;
        this.setAnimation = (value) => {
            this.animation = value;
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
        this.resetGameResult = () => {
            this.gameResult = null;
            this.results = null;
        };
        this.fetchGame = async () => {
            const { clientSeed, serverSeed, nonce, root: { profileCommon: { profile }, }, } = this;
            const { token, apiKey } = profile;
            try {
                const { data: { gameId, roundId }, } = await (0,mines/* createGameRequest */.Yv)({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    clientSeed,
                    nonce,
                    serverSeed,
                    theme: this.gameServerTheme,
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    this.setRoundId(roundId);
                });
                await this.setGame(gameId);
                return gameId;
            }
            catch (error) {
                console.log('fetchGame error:', error);
                return error;
            }
        };
        this.setRoundId = (roundId) => {
            this.roundId = roundId;
        };
        this.setGame = async (gameId) => {
            return new Promise((resolve, reject) => {
                this.gameId = gameId;
                return resolve('success');
            });
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
        this.setAmount = (amount) => {
            console.log('SetAmount!');
            const { profile: { currency }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.set(`saved_amount:${currency}`, amount);
            this.amount = String(amount);
        };
        this.setDiceValue = (value, index) => {
            this.diceValues[index] = value;
            if (this.diceValueChangeTimeout) {
                clearTimeout(this.diceValueChangeTimeout);
            }
            this.diceValueChangeTimeout = setTimeout(() => {
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'target_multiplier_changed',
                    parameters: {
                        object: index === 0 ? 'swim' : index === 1 ? 'bike' : 'run',
                        value: this.diceValues[index],
                    },
                });
            }, 500);
        };
        this.placeBet = async (bet, freebet = false) => {
            const { result, gameResult, payout, coefficient, results } = bet;
            const { winDuration, bigWinDuration, game, winLevelList } = this.gameConfig;
            const minCoefficient = this.root.freebetsCommon.freebetActive?.offer?.configuration[0]?.minCoefficient;
            (0,mobx_esm_js_.runInAction)(() => {
                this.currentBet = bet;
                this.coefficient = coefficient;
                this.gameResult = gameResult;
                this.results = results.map((result) => Math.floor(result));
                this.result = result;
                this.payout = payout;
                this.clientSeed = (0,index_js_.v4)();
                this.nonce = this.nonce + 1;
                this.roundId;
                if (minCoefficient)
                    this.minCoefficient = minCoefficient;
                if (this.root.freebetsCommon.freebetId)
                    this.freebetId = this.root.freebetsCommon.freebetId;
                this.mockGame();
                this.setAnimation(true);
                if (result === 'won') {
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'bet_closed',
                        parameters: {
                            id: this.roundId,
                            round_id: this.roundId,
                            method: 'manual',
                            object: 'cancelled',
                            value: payout,
                            currency: this.root.profileCommon.profile.currency,
                            wins: 1,
                            multiplier: coefficient,
                        },
                    });
                }
                else {
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'bet_closed',
                        parameters: {
                            id: this.roundId,
                            round_id: this.roundId,
                            method: 'manual',
                            object: 'lost',
                            value: 0,
                            currency: this.root.profileCommon.profile.currency,
                            wins: 0,
                            multiplier: coefficient,
                        },
                    });
                }
                if (this.animation) {
                    this.setResultVisible(true);
                }
            });
            this.resultTimeout = window.setTimeout(() => {
                this.result = 'initial';
            }, this.root.uiCommon.noAnimation ? 0 : game.duration);
            this.resultAwaitTimeout = window.setTimeout(() => {
                this.resultAwait = result;
                this.setAnimation(false);
            }, this.root.uiCommon.noAnimation ? 0 : game.duration);
            const win = this.coefficient >= winLevelList[winLevelList.length - 1] ? bigWinDuration : winDuration;
            this.resultAwaitTimeoutClear = window.setTimeout(() => {
                this.resultAwait = 'initial';
            }, this.root.uiCommon.noAnimation ? win : game.duration + win);
            if (result === 'won') {
                this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: coefficient });
            }
            this.root.freebetsCommon.listRemoveByIndex(0);
        };
        this.placeBetFailed = (error) => {
            console.log('placeBetFailed', error.response.data);
            this.clientSeed = (0,index_js_.v4)();
            this.nonce = this.nonce + 1;
            this.placeBetStatus = 'initial';
        };
        this.setMyBets = (myBets) => {
            this.myBets = myBets;
        };
        this.setPlaceBetStatus = (placeBetStatus) => {
            this.placeBetStatus = placeBetStatus;
        };
        this.updateMyBets = async () => {
            const { profileCommon: { profile: { apiKey, token }, }, } = this.root;
            if (this.tab === 2) {
                try {
                    const { data: myBets } = await (0,api/* getMyBets */.vB)({
                        headers: { authorization: token, cid: apiKey },
                        gameId: this.gameServerId,
                    });
                    this.setMyBets(myBets);
                }
                catch (error) {
                    console.log('getMyBetsError', error);
                }
            }
        };
        this.placeBetManual = async ({ index, freebet }) => {
            const minCoefficient = this.root.freebetsCommon.freebetActive?.offer?.configuration[0]?.minCoefficient;
            this.result = 'initial';
            this.resultAwait = 'initial';
            if (this.resultTimeout) {
                clearTimeout(this.resultTimeout);
            }
            if (this.resultAwaitTimeout) {
                clearTimeout(this.resultAwaitTimeout);
            }
            if (this.resultAwaitTimeoutClear) {
                clearTimeout(this.resultAwaitTimeoutClear);
            }
            try {
                if (!this.gameId || !this.gameId.length) {
                    await this.fetchGame();
                }
                const { profileCommon: { profile: { playerId, token, currency, subPartnerId }, }, uiCommon: { isMobile }, } = this.root;
                const { data } = await placeBetRequest({
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
                    amount: parseFloat(this.amount),
                    values: this.diceValues,
                    action: 'over',
                    currency,
                    roundId: this.roundId,
                    theme: this.gameServerTheme,
                    ...(freebet && this.root.freebetsCommon.freebetId && { freebetsId: this.root.freebetsCommon.freebetId }),
                    ...(freebet && minCoefficient && { minCoefficient }),
                });
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_placed',
                    sid: this.root.profileCommon.profile.sid,
                    parameters: {
                        value: this.amount,
                        currency: this.root.profileCommon.profile.currency,
                        method: 'manual',
                        multiplier: this.currentCoefficient,
                        object: `bet_1.place`,
                        variant: this.diceValues,
                        round_id: this.roundId,
                        id: this.roundId,
                    },
                });
                if (data?.data?.error) {
                    throw 'error';
                }
                this.root.freebetsCommon.listAdd({
                    index: 0,
                    freebet: Boolean(this.root.freebetsCommon.freebetId),
                });
                this.placeBet({
                    ...data,
                    index,
                    roundId: this.roundId,
                    results: data.results.map((result) => Math.floor(result)),
                    ...(this.root.freebetsCommon.freebetId && { freebetsId: this.root.freebetsCommon.freebetId }),
                    ...(minCoefficient && { minCoefficient }),
                });
                await this.updateMyBets();
                await this.fetchGame();
                this.setPlaceBetStatus('initial');
            }
            catch (error) {
                this.setPlaceBetStatus('initial'), this.fetchGame();
                this.root.freebetsCommon.listRemoveByIndex(0);
                this.root.uiCommon.errorCodeResolver(error.response, () => this.setPlaceBetStatus('initial'));
            }
        };
        this.setResultVisible = (value) => {
            this.resultVisible = value;
        };
        this.makeBet = async (index, freebet = false) => {
            const { profileCommon: { profile: { balance }, }, uiCommon: { showNotEnoughBalanceError }, } = this.root;
            if (!freebet && balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
                return;
            }
            if (this.placeBetStatus !== 'initial')
                return;
            this.setPlaceBetStatus('loading');
            await this.placeBetManual({ index, freebet });
        };
        this.resetHistory = () => {
            this.showHistory = null;
        };
        this.setShowHistory = (id) => {
            this.showHistory = id;
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.centrifuge = new (centrifuge_js_default())(config().centrifuge || '', {});
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.fetchGame();
            this.retreiveAmount();
        });
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'dicethrice';
        this.gameServerTheme = gameConfig.gameServerTheme || 'default';
        this.winLevelList = gameConfig.winLevelList || [0, 5, 7, 10];
        this.diceValues = gameConfig.ranges.map((obj) => obj.defaultValue);
        this.mockGame();
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: this.amount }];
        }, (index, { amount }) => {
            this.setAmount(Number(amount));
        });
        (0,mobx_esm_js_.reaction)(() => this.root.uiCommon.isOnline, () => {
            if (!this.root.uiCommon.isOnline) {
                this.setPlaceBetStatus('initial');
            }
        });
    }
    get currentCoefficient() {
        const value = dice3GetCoefficient(this.diceValues.map((value) => 100 - value), this.gameConfig.defaultRtp);
        return value.toFixed(2);
    }
    get possibleGame() {
        const posiblePayout = (0,truncateDecimals/* default */.A)(Number(this.currentCoefficient) * Number(this.amount), this.root.profileCommon.profile.rounding);
        const mapCoefficientToScale = (coefficient) => {
            if (coefficient >= 1.07 && coefficient < 2) {
                return ((coefficient - 1.07) / (2 - 1.07)) * 25;
            }
            else if (coefficient >= 2 && coefficient < 10) {
                return 25 + ((coefficient - 2) / (10 - 2)) * 25;
            }
            else if (coefficient >= 10 && coefficient < 50) {
                return 50 + ((coefficient - 10) / (50 - 10)) * 25;
            }
            else if (coefficient >= 50 && coefficient <= 100) {
                return 75 + ((coefficient - 50) / (100 - 50)) * 25;
            }
            else if (coefficient > 100) {
                return 100;
            }
            else {
                return 0;
            }
        };
        return {
            coefficient: this.currentCoefficient,
            winChance: mapCoefficientToScale(Number(this.currentCoefficient)),
            posiblePayout,
        };
    }
    get winLevel() {
        let level = 0;
        for (let i = 0; i < this.winLevelList.length; i++) {
            if (this.coefficient >= this.winLevelList[i])
                level = i;
        }
        return level;
    }
    get lockedUi() {
        const { autobetCommon: { autoBetEnabled }, } = this.root;
        return autoBetEnabled || this.placeBetStatus !== 'initial';
    }
    get lockedUiWithFreebets() {
        const { autobetCommon: { autoBetEnabled }, freebetsCommon: { freebetsSuccessIndexList }, } = this.root;
        return autoBetEnabled || this.placeBetStatus !== 'initial' || freebetsSuccessIndexList.includes(0);
    }
}
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "showHistory", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "tab", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "currentBet", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "gameId", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "diceValue", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "action", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "diceValues", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "roundId", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "serverSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "result", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "resultTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "results", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "status", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "placeBetStatus", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "myBets", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "winLevelList", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "winShow", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "minCoefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "freebetId", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "animation", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "resultVisible", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "resultAwait", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "resultAwaitTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], Dice3Common.prototype, "resultAwaitTimeoutClear", void 0);
__decorate([
    mobx_esm_js_.computed
], Dice3Common.prototype, "currentCoefficient", null);
__decorate([
    mobx_esm_js_.computed
], Dice3Common.prototype, "possibleGame", null);
__decorate([
    mobx_esm_js_.computed
], Dice3Common.prototype, "winLevel", null);
__decorate([
    mobx_esm_js_.computed
], Dice3Common.prototype, "lockedUi", null);
__decorate([
    mobx_esm_js_.computed
], Dice3Common.prototype, "lockedUiWithFreebets", null);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "setAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "mockGame", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "resetGameResult", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "fetchGame", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "setRoundId", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "setGame", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "retreiveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "setDiceValue", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "placeBet", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "placeBetFailed", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "setMyBets", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "setPlaceBetStatus", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "updateMyBets", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "placeBetManual", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "setResultVisible", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "makeBet", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "resetHistory", void 0);
__decorate([
    mobx_esm_js_.action
], Dice3Common.prototype, "setShowHistory", void 0);
/* harmony default export */ const store_Dice3Common = (Dice3Common);


/***/ })

}]);