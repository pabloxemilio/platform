"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[861],{

/***/ 738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function formatHeaders(headers) {
    return JSON.parse(JSON.stringify(headers));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatHeaders);


/***/ }),

/***/ 20861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_PlinkoCommon)
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
;// ./src/framework/api/plinko/config.ts

const config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
;// ./src/framework/api/plinko/index.ts


const plinko_api = () => {
    const protocol = config().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config().api}/api`,
    });
};
const betRequest = ({ headers, ...params }) => plinko_api().post('/bets/place', params, { headers });
const createGame = ({ headers, ...params }) => plinko_api().post('/games/create', params, { headers });
/* harmony default export */ const plinko = ((/* unused pure expression or super */ null && (plinko_api)));

// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/formatHeaders.ts
var formatHeaders = __webpack_require__(738);
// EXTERNAL MODULE: ./src/framework/helpers/timeout.ts
var timeout = __webpack_require__(9858);
;// ./src/framework/store/PlinkoCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class PlinkoCommon {
    constructor(root, gameConfig) {
        this.gameId = localStorageHelper/* default */.A.get('gameId');
        this.roundId = '';
        this.roundSeed = '';
        this.clientSeed = (0,index_js_.v4)();
        this.nonce = 1;
        this.amount = `1.00`;
        this.gameResult = null;
        this.payout = 0;
        this.coefficient = 0;
        this.gameResultResults = [];
        this.gameUi = false;
        this.gameRequest = false;
        this.myBetsUpdater = 0;
        this.rows = '8';
        this.level = 'high';
        this.particle = 1;
        this.win = {
            index: 0,
            time: Date.now(),
        };
        this.mobileBetslipOpen = false;
        this.historyListSize = 8;
        this.historyList = [];
        this.winScreen = false;
        this.winScreenTimeout = null;
        this.winScreenCoefficient = 0;
        this.gamePaused = false;
        this.setGamePaused = (value) => {
            this.gamePaused = value;
        };
        this.multipliers = {
            roundId: '',
        };
        this.setGameRequest = (value) => {
            this.gameRequest = value;
        };
        this.setWinScreen = (value) => {
            const { freebetsCommon: { freebetActive }, } = this.root;
            const min = Math.min(...this.gameConfig.winLevelList);
            const max = Math.max(...this.gameConfig.winLevelList);
            if (min > value)
                return;
            (0,mobx_esm_js_.runInAction)(() => {
                this.winScreen = true;
                if (this.winScreenTimeout && this.winScreenCoefficient < max) {
                    clearTimeout(this.winScreenTimeout);
                }
                this.winScreenCoefficient = value;
                if (freebetActive?.id && !this.freebetsInProgress.length) {
                    this.root.freebetsCommon.listRemoveByIndex(0);
                }
            });
            this.winScreenTimeout = window.setTimeout(() => {
                this.winScreen = false;
                this.winScreenCoefficient = 0;
            }, this.gameConfig.winDuration);
        };
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
                    color: 0,
                });
            }
            if (value) {
                const index = history.findIndex((item) => item.value === '');
                if (index === -1) {
                    history = [
                        ...history.slice(-(this.historyListSize - 1)),
                        {
                            value: `x${value.coefficient}`,
                            color: value.color,
                            isLucky: value.isLucky,
                        },
                    ];
                }
                else {
                    history[index] = {
                        value: `x${value.coefficient}`,
                        color: value.color,
                        isLucky: value.isLucky,
                    };
                }
            }
            this.removeFreebetInProgress(value?.coefficient);
            this.historyList = history;
        };
        this.setMobileBetslipOpen = (value) => {
            this.mobileBetslipOpen = value;
        };
        this.setWin = (value) => {
            this.win = value;
        };
        this.setGameUi = (value) => {
            this.gameUi = value;
        };
        this.setRows = (row) => {
            this.rows = String(row);
        };
        this.setLevel = (level) => {
            this.level = level;
        };
        this.setParticle = (value) => {
            this.particle = value;
        };
        this.setMyBetsUpdater = () => {
            this.myBetsUpdater = this.myBetsUpdater + 1;
        };
        this.createRound = async () => {
            const { clientSeed, nonce, root: { profileCommon: { profile: { token, playerId, subPartnerId }, }, uiCommon: { isMobile }, freebetsCommon: { freebetEnabled }, }, } = this;
            try {
                const { data } = await createGame({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: false,
                        }),
                    }),
                    clientSeed,
                    nonce,
                    theme: this.gameServerTheme,
                });
                this.setGame(data.roundId);
                this.setGameRequest(false);
            }
            catch (error) {
                this.root.uiCommon.errorCodeResolver(error.response);
                this.root.freebetsCommon.listRemoveByIndex(0);
                this.setGameRequest(false);
                console.log('createRound error:', error);
                return error;
            }
        };
        this.startGame = async (multiplace = 1, freebet = false) => {
            if (this.gameRequest)
                return;
            const { profileCommon: { profile: { balance }, }, uiCommon: { showNotEnoughBalanceError }, } = this.root;
            if (!freebet && balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
            }
            else {
                return await this.createGame(multiplace, freebet);
            }
        };
        this.freebetsInProgress = [];
        this.addFreebetInProgress = (coefficient) => {
            this.freebetsInProgress = [...this.freebetsInProgress, coefficient];
        };
        this.removeFreebetInProgress = (coefficient) => {
            const index = this.freebetsInProgress.findIndex((item) => item === coefficient);
            if (index !== -1) {
                this.freebetsInProgress = [
                    ...this.freebetsInProgress.slice(0, index),
                    ...this.freebetsInProgress.slice(index + 1),
                ];
            }
        };
        this.createGame = async (multiple = 1, freebet = false) => {
            const { clientSeed, nonce, level, rows, root: { profileCommon: { profile: { token, playerId, currency, subPartnerId }, }, uiCommon: { isMobile }, freebetsCommon: { freebetEnabled }, }, } = this;
            try {
                const minCoefficient = this.root.freebetsCommon.freebetActive?.offer?.configuration[0]?.minCoefficient;
                this.setGameUi(true);
                this.setGameRequest(true);
                const { data: game } = await betRequest({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: false,
                        }),
                    }),
                    clientSeed,
                    nonce,
                    level,
                    rows,
                    amount: Number(this.amount),
                    currency,
                    multiple,
                    theme: this.gameServerTheme,
                    roundId: this.roundId,
                    ...(freebet && this.root.freebetsCommon.freebetId && { freebetsId: this.root.freebetsCommon.freebetId }),
                    ...(freebet && minCoefficient && { minCoefficient }),
                });
                if (game.multipliers && Object.keys(game.multipliers).length) {
                    this.setMultipliers(game.multipliers, game.roundId);
                }
                if (freebet) {
                    this.addFreebetInProgress(game.coefficient);
                    this.root.freebetsCommon.listAdd({
                        index: 0,
                        freebet: Boolean(this.root.freebetsCommon.freebetId),
                    });
                }
                await this.setGameResultResults(game);
                this.setMyBetsUpdater();
                if (this.root.tournamentsCommon && this.root.tournamentsCommon.addBet) {
                    this.root.tournamentsCommon.addBet({
                        amount: Number(this.amount),
                    });
                }
                if (freebet) {
                    this.root.freebetsCommon.updateFreebetsPayout({
                        index: 0,
                        coefficient: game.coefficient * game.results.length,
                    });
                }
                await this.createRound();
                return game.roundId;
            }
            catch (error) {
                this.setGameUi(false);
                this.setGameRequest(false);
                this.root.uiCommon.errorCodeResolver(error.response);
                this.root.freebetsCommon.listRemoveByIndex(0);
                console.log('fetchGame error:', error);
                this.createRound();
                return error;
            }
        };
        this.setMultipliers = (multipliers, roundId) => {
            this.multipliers = {
                roundId,
                ...multipliers,
            };
        };
        this.setGameResultResults = (game) => {
            const { results } = game;
            this.gameResultResults = results;
        };
        this.setGame = (gameId = '') => {
            this.gameId = gameId;
            this.roundId = gameId;
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
            const { profile: { currency }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.set(`saved_amount:${currency}`, amount);
            this.amount = String(amount);
        };
        this.placeAuto = async (multiple = 1) => {
            const { autoBetEnabled, autoBetLimit, autoBetsAmount, setAutoBetsAmount } = this.root.autobetCommon;
            if (!autoBetEnabled || autoBetsAmount <= 0) {
                this.stopAutoBet();
                return;
            }
            const now = Date.now();
            try {
                await this.startGame();
                const delta = (now - Date.now()) / 1000;
                if (delta <= this.gameConfig.autobetInterval) {
                    await (0,timeout/* default */.A)(this.gameConfig.autobetInterval - delta);
                }
                if (autoBetLimit) {
                    setAutoBetsAmount(String(autoBetsAmount - 1));
                }
                this.placeAuto();
            }
            catch (error) {
                this.root.uiCommon.errorCodeResolver(error.response);
                this.stopAutoBet();
                return error;
            }
        };
        this.startAutoBet = async (amount) => {
            const { autobetCommon: { setAutoBetLimit, setAutoBetEnabled, setAutoBetsAmount }, } = this.root;
            setAutoBetsAmount(String(amount));
            setAutoBetLimit(true);
            setAutoBetEnabled(true);
            try {
                await this.placeAuto();
            }
            catch (error) {
                console.log({ error });
                this.stopAutoBet();
            }
        };
        this.stopAutoBet = () => {
            const { autobetCommon: { setAutoBetLimit, setAutoBetEnabled }, } = this.root;
            (0,mobx_esm_js_.runInAction)(() => {
                setAutoBetEnabled(false);
                setAutoBetLimit(false);
            });
        };
        this.root = root;
        (0,mobx_esm_js_.makeObservable)(this);
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.retreiveAmount();
            await this.createRound();
        });
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'plinko';
        this.gameServerTheme = gameConfig.gameServerTheme || 'default';
        this.rows = gameConfig.rowDefault.toString() || '8';
        this.level = gameConfig.levelDefault || 'high';
        this.particle = gameConfig.particle.default || 1;
        this.centrifuge = new (centrifuge_js_default())(config().centrifuge || '', {});
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: this.amount }];
        }, (index, { amount }) => {
            console.log('freebet amount:', amount);
            this.setAmount(Number(amount));
        });
    }
    get lockedUi() {
        const { autoBetEnabled } = this.root.autobetCommon;
        return autoBetEnabled || this.gameUi;
    }
    get levelList() {
        const list = Object.keys(this.gameConfig.levels);
        return list.map((item) => {
            return {
                name: i18next_js_["default"].t(this.gameConfig.levelTranslate[item]),
                key: item,
                active: item === this.level,
            };
        });
    }
    get winLevel() {
        let level = 0;
        for (let i = 0; i < this.gameConfig.winLevelList.length; i++) {
            if (this.winScreenCoefficient >= this.gameConfig.winLevelList[i])
                level = i;
        }
        return level;
    }
}
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "gameId", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "roundId", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "gameResultResults", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "gameUi", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "gameRequest", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "myBetsUpdater", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "rows", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "level", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "particle", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "win", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "mobileBetslipOpen", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "historyListSize", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "historyList", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "winScreen", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "winScreenTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "winScreenCoefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "gamePaused", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "setGamePaused", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "multipliers", void 0);
__decorate([
    mobx_esm_js_.computed
], PlinkoCommon.prototype, "lockedUi", null);
__decorate([
    mobx_esm_js_.computed
], PlinkoCommon.prototype, "levelList", null);
__decorate([
    mobx_esm_js_.computed
], PlinkoCommon.prototype, "winLevel", null);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "setGameRequest", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "setWinScreen", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "setHistoryListSize", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "updateHistoryList", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "setMobileBetslipOpen", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "setWin", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "setGameUi", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "setRows", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "setLevel", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "setParticle", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "setMyBetsUpdater", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "createRound", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "startGame", void 0);
__decorate([
    mobx_esm_js_.observable
], PlinkoCommon.prototype, "freebetsInProgress", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "addFreebetInProgress", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "removeFreebetInProgress", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "createGame", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "setMultipliers", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "setGameResultResults", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "setGame", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "retreiveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "placeAuto", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "startAutoBet", void 0);
__decorate([
    mobx_esm_js_.action
], PlinkoCommon.prototype, "stopAutoBet", void 0);
/* harmony default export */ const store_PlinkoCommon = (PlinkoCommon);


/***/ })

}]);