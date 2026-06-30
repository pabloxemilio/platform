"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[43],{

/***/ 8795:
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

/***/ 80043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ChickenboatCommon)
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
// EXTERNAL MODULE: ./src/framework/api/vortex/config.ts
var config = __webpack_require__(8795);
// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
// EXTERNAL MODULE: ./src/utils/apiLogger.ts
var apiLogger = __webpack_require__(38654);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/chickenboat/config.ts

const config_config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

;// ./src/framework/api/chickenboat/index.ts



const chickenboat_api = () => {
    const protocol = config_config().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config_config().api}/api`,
    });
};
const getGameSettingsRequest = ({ ...params }) => chickenboat_api()
    .get('/games/settings', params)
    .then((r) => {
    (0,apiLogger/* apiLog */.X)('getGameSettings', params, r.data);
    return r;
});
const createGameRequest = ({ headers, ...params }) => chickenboat_api()
    .post('/games/create', params, { headers })
    .then((r) => {
    (0,apiLogger/* apiLog */.X)('createGame', params, r.data);
    return r;
});
const placeBetRequest = ({ headers, ...params }) => chickenboat_api()
    .post('/bets/place', params, { headers })
    .then((r) => {
    (0,apiLogger/* apiLog */.X)('placeBet', params, r.data);
    return r;
});
const retrieveGameRequest = ({ headers, ...params }) => chickenboat_api().post(`/games/retrieve`, params, { headers });
const cashoutRequest = ({ headers, ...params }) => chickenboat_api()
    .post('/bets/cashout', params, { headers })
    .then((r) => {
    (0,apiLogger/* apiLog */.X)('cashout', params, r.data);
    return r;
});
/* harmony default export */ const chickenboat = ((/* unused pure expression or super */ null && (chickenboat_api)));

// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/formatHeaders.ts
var formatHeaders = __webpack_require__(738);
// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
;// ./src/framework/store/ChickenboatCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class ChickenBoatCommon {
    constructor(root, gameConfig) {
        this.disposers = [];
        this.messagesList = [];
        this.settings = null;
        this.settingsLoaded = false;
        this.createGameProcessing = false;
        this.placebetProcessing = false;
        this.cashoutProcessing = false;
        this.canvasIsReady = false;
        this.animationState = {
            inProcess: false,
            type: null,
        };
        this.onWinDisable = false;
        this.roundId = localStorageHelper/* default */.A.get('roundId') || '';
        this.prevRoundId = '';
        this.roundSeed = '';
        this.clientSeed = (0,index_js_.v4)();
        this.serverSeed = undefined;
        this.nonce = 1;
        this.amount = `1.00`;
        this.gameResult = null;
        this.winPopupState = { show: false, level: 0 };
        this.payout = 0;
        this.coefficient = 0;
        this.gameLevel = Number(localStorageHelper/* default */.A.get('chickenboat_game_level') || 1);
        this.gameStatus = 0;
        this.coeffState = {
            multiplier: 0,
            multiplierIndex: 0,
            availableMultipliers: [],
            withGaleon: false,
        };
        this.mockedMultiplier = null;
        this.betPlaced = false;
        this.gameCreated = false;
        this.gameIsRetrieved = false;
        this.betIndex = 0;
        this.setCheat = (value) => {
            this.mockedMultiplier = value;
        };
        this.setMessagesList = (value) => {
            this.messagesList = [...this.messagesList, value];
        };
        this.updateMessagesList = (value) => {
            this.messagesList = value;
        };
        this.setGameLevel = (val) => {
            localStorageHelper/* default */.A.set('chickenboat_game_level', String(val));
            this.gameLevel = val;
        };
        this.setCanvasIsReady = (val) => {
            this.canvasIsReady = val;
        };
        this.setOnWinDisable = (val) => {
            this.onWinDisable = val;
        };
        this.setAnimationState = (val) => {
            this.animationState = val;
        };
        this.setWinPopupState = (val) => {
            this.winPopupState = val;
        };
        this.resetGame = () => {
            this.coefficient = 0;
            this.payout = 0;
            this.coeffState = {
                ...this.coeffState,
                multiplier: 0,
                multiplierIndex: 0,
                availableMultipliers: [],
                withGaleon: false,
            };
        };
        this.fetchSettings = async () => {
            const { profile: { token, playerId }, } = this.root.profileCommon;
            try {
                const { data } = await getGameSettingsRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    this.settings = data;
                });
            }
            catch (error) {
                console.log('fetchSettings error:', error);
                (0,mobx_esm_js_.runInAction)(() => {
                    this.settingsLoaded = true;
                    this.settings = this.gameConfig.defaultSettings;
                });
                return error;
            }
        };
        this.retrieveGame = async () => {
            const { profileCommon: { profile: { token, apiKey }, }, uiCommon: { setAlertList }, freebetsCommon: { setForcedDisabledFreebets, freebetActive }, } = this.root;
            try {
                const mockUrlParam = new URLSearchParams(window.location.search).get('mock');
                const mockedMultiplier = this.mockedMultiplier ?? (mockUrlParam !== null ? Number(mockUrlParam) : null);
                const { data } = await retrieveGameRequest({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    theme: this.gameServerTheme,
                    ...(mockedMultiplier !== null && { mockedMultiplier }),
                });
                const { clientSeed, nonce, freebetsId } = data;
                if (!clientSeed || !nonce) {
                    throw { clientSeed, nonce };
                }
                else if (freebetsId === freebetActive?.id && freebetActive?.status === 'expired') {
                    throw 1;
                }
                (0,mobx_esm_js_.runInAction)(() => {
                    this.roundId = data.roundId;
                    this.gameCreated = true;
                    this.clientSeed = clientSeed;
                    this.nonce = nonce;
                    this.gameIsRetrieved = true;
                    this.coefficient = data.steps.at(-1)?.multiplier ?? 0;
                    this.betPlaced = true;
                    this.gameLevel = data.difficulty - 1;
                    this.coeffState = {
                        multiplier: data.steps.at(-1)?.multiplier ?? 0,
                        multiplierIndex: data.steps.at(-1)?.multiplierIndex ?? 0,
                        availableMultipliers: data.nextStepMultipliers ?? [],
                        withGaleon: !!data.nextStepGaleon,
                    };
                });
                data.amount && this.setAmount(data.amount);
                this.mockGame();
                setAlertList({
                    title: i18next_js_["default"].t('NOTIF.CONTINUE_ROUND'),
                    type: 'success',
                });
            }
            catch (error) {
                await this.createGame();
            }
        };
        this.retrieveAmount = () => {
            const { limit: { minBet, defaultBet }, profile: { currency, balance, rounding }, } = this.root.profileCommon;
            const amount = localStorageHelper/* default */.A.get(`saved_amount:${currency}`);
            if (amount && !isNaN(Number(amount)) && Number(amount) >= minBet) {
                this.amount = amount;
            }
            else if (defaultBet) {
                this.amount = String((0,floor/* default */.A)(Math.min(balance, defaultBet), rounding - 1));
            }
            else {
                this.amount = String(minBet * 10);
            }
        };
        this.setAmount = (amount) => {
            const { profile: { currency }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.set(`saved_amount:${currency}`, String(amount));
            this.amount = String(amount);
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
        this.createGame = async () => {
            const { profile: { token, apiKey }, } = this.root.profileCommon;
            try {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.createGameProcessing = true;
                });
                const { data } = await createGameRequest({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    theme: this.gameServerTheme,
                    nonce: this.nonce,
                    clientSeed: this.clientSeed,
                    difficulty: this.gameLevel + 1,
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    this.createGameProcessing = false;
                    this.nonce = this.nonce + 1;
                    this.prevRoundId = this.roundId || data.roundId;
                    this.roundId = data.roundId;
                    this.gameCreated = true;
                    this.coeffState = {
                        multiplier: 0,
                        multiplierIndex: 0,
                        availableMultipliers: data.availableMultipliers ?? [],
                        withGaleon: false,
                    };
                    this.mockGame();
                });
            }
            catch (error) {
                console.log('fetchGame error:', error);
                (0,mobx_esm_js_.runInAction)(() => {
                    this.gameCreated = false;
                });
                return error;
            }
        };
        this.placeBet = async () => {
            const { profileCommon: { profile: { token, subPartnerId, currency, balance, apiKey }, limit: { minBet }, }, uiCommon: { isMobile, setAlertList, isOnline }, freebetsCommon: { freebetActive, listRemoveByIndex, freebetId, freebetEnabled, freebetsSuccessIndexList }, quickModeCommon: { enabled }, autobetCommon: { autoBetEnabled }, } = this.root;
            if (this.placebetProcessing || !isOnline)
                return;
            if (!this.roundId) {
                throw new Error('no gameId');
            }
            if (!freebetEnabled &&
                balance !== null &&
                (balance <= 0 || balance < Number(this.amount) || Number(this.amount) < minBet) &&
                !this.betPlaced) {
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.3'),
                    type: 'error',
                });
                return;
            }
            try {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.placebetProcessing = true;
                });
                const mockUrlParam = new URLSearchParams(window.location.search).get('mock');
                const mockedMultiplier = this.mockedMultiplier ?? (mockUrlParam !== null ? Number(mockUrlParam) : null);
                const { data } = await placeBetRequest({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: apiKey,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                    }),
                    theme: this.gameServerTheme,
                    roundId: this.roundId,
                    amount: Number(this.amount),
                    ...(mockedMultiplier !== null && { mockedMultiplier }),
                    ...(freebetEnabled && freebetId && { freebetsId: freebetId }),
                    ...(freebetEnabled && {
                        minCoefficient: freebetActive?.offer?.configuration[0]?.minCoefficient ?? this.gameConfig.freebets?.minCoeffToCashout ?? 2,
                    }),
                });
                const { result, payout, multiplier, multiplierIndex, availableMultipliers, status, withGaleon } = data;
                if (!this.betPlaced) {
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'bet_placed',
                        sid: this.root.profileCommon.profile.sid,
                        parameters: {
                            method: autoBetEnabled ? 'auto' : 'manual',
                            value: Number(this.amount),
                            currency: this.root.profileCommon.profile.currency,
                            multiplier,
                            object: 'bet_1.place',
                            variant: ['easy', 'medium', 'hard'][this.gameLevel] ?? 'unknown',
                            round_id: this.roundId,
                            id: this.roundId,
                        },
                    });
                    this.root.freebetsCommon.listAdd({
                        index: 0,
                        freebet: freebetsSuccessIndexList.includes(0),
                    });
                }
                (0,mobx_esm_js_.runInAction)(() => {
                    this.placebetProcessing = false;
                    this.betPlaced = true;
                    this.gameStatus = status;
                    this.payout = payout;
                    this.coefficient = multiplier;
                    this.coeffState = {
                        multiplier,
                        multiplierIndex,
                        availableMultipliers,
                        withGaleon: !!withGaleon,
                    };
                });
                if (result === 'lost' || result === 'won') {
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'bet_closed',
                        parameters: {
                            id: this.roundId,
                            round_id: this.roundId,
                            object: result === 'won' ? 'cashout' : 'lost',
                            value: Number(this.amount),
                            currency: this.root.profileCommon.profile.currency,
                            wins: result === 'won' ? 1 : 0,
                            multiplier,
                        },
                    });
                    (0,mobx_esm_js_.runInAction)(() => {
                        this.betPlaced = false;
                        this.gameCreated = false;
                    });
                    this.root.freebetsCommon.listRemoveByIndex(0);
                    this.createGame();
                }
                if (this.root.tournamentsCommon && this.root.tournamentsCommon.addBet) {
                    this.root.tournamentsCommon.addBet({
                        amount: Number(this.amount),
                        coefficient: multiplier,
                    });
                }
            }
            catch (error) {
                console.log(error);
                (0,mobx_esm_js_.runInAction)(() => {
                    this.placebetProcessing = false;
                });
                this.root.uiCommon.errorCodeResolver(error.response);
                this.root.freebetsCommon.listRemoveByIndex(0);
                this.retrieveGame();
                return error;
            }
        };
        this.cashout = async () => {
            if (!this.roundId)
                return;
            const { profileCommon: { profile: { token, playerId }, }, freebetsCommon: { freebetEnabled }, } = this.root;
            try {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.cashoutProcessing = true;
                });
                const { data } = await cashoutRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    roundId: this.roundId,
                });
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_closed',
                    parameters: {
                        id: this.roundId,
                        round_id: this.roundId,
                        object: 'cashout',
                        value: Number(this.amount),
                        currency: this.root.profileCommon.profile.currency,
                        wins: 1,
                        multiplier: data.coefficient,
                    },
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    this.cashoutProcessing = false;
                    this.gameStatus = 0;
                    this.betPlaced = false;
                    this.coefficient = data.coefficient;
                    this.payout = data.payout;
                });
                this.setWinPopupState({ show: true, level: this.winLevel });
                await this.createGame();
                freebetEnabled && this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: data.coefficient });
                this.root.freebetsCommon.listRemoveByIndex(0);
            }
            catch (error) {
                console.log('fetchGame error:', error);
                (0,mobx_esm_js_.runInAction)(() => {
                    this.cashoutProcessing = false;
                });
                this.root.uiCommon.errorCodeResolver(error.response);
                return error;
            }
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.centrifuge = new (centrifuge_js_default())((0,config/* config */.$)().centrifuge || '', {});
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            const { profile: { splitTest }, } = this.root.profileCommon;
            this.retrieveAmount();
            await this.fetchSettings();
            await this.retrieveGame();
            (0,mobx_esm_js_.runInAction)(() => {
                this.userLoading = true;
            });
        });
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId;
        this.gameServerTheme = gameConfig.gameServerTheme;
        this.userLoading = false;
        this.winTimeout = null;
        this.winDisableTimeout = null;
        this.mockGame();
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: this.amount }];
        }, (index, { amount }) => {
            this.setAmount(Number(amount));
        });
        this.disposers.push((0,mobx_esm_js_.reaction)(() => this.root.uiCommon.isOnline, (isOnline) => {
            if (isOnline && !this.gameCreated) {
                this.retrieveGame();
            }
        }));
        this.disposers.push((0,mobx_esm_js_.reaction)(() => [this.winPopupState.show], () => {
            if (this.winPopupState.show) {
                if (this.winTimeout) {
                    clearTimeout(this.winTimeout);
                    this.winTimeout = null;
                }
                if (this.winDisableTimeout) {
                    clearTimeout(this.winDisableTimeout);
                    this.winDisableTimeout = null;
                }
                if (this.winPopupState.level > 0) {
                    this.setOnWinDisable(true);
                    this.winDisableTimeout = setTimeout(() => {
                        this.setOnWinDisable(false);
                        this.root.balanceCommon.updateBalanceFromTicketId(this.prevRoundId);
                        this.root.balanceCommon.updateBalanceFromTicketId(this.roundId);
                    }, gameConfig.onWinDisableTime);
                }
                this.winTimeout = setTimeout(() => {
                    this.setWinPopupState({ show: false, level: 0 });
                }, gameConfig.winDurations[this.winPopupState.level]);
            }
            else {
                this.root.balanceCommon.updateBalanceFromTicketId(this.prevRoundId);
                this.root.balanceCommon.updateBalanceFromTicketId(this.roundId);
            }
        }));
    }
    dispose() {
        this.disposers.forEach((d) => d());
        this.disposers = [];
    }
    get progress() {
        if (!this.settings)
            return 0;
        const levelPath = this.settings[this.gameLevel + 1];
        if (!levelPath || levelPath.length === 0)
            return 0;
        const coeffIndex = levelPath.findIndex((item) => item === this.coefficient);
        return (0,floor/* default */.A)(((coeffIndex === -1 ? 0 : coeffIndex) / levelPath.length) * 100);
    }
    get winLevel() {
        if (!this.gameConfig)
            return 0;
        return this.gameConfig.winLevels.findIndex((item) => this.coefficient >= item.min && (item.max === null || this.coefficient <= item.max));
    }
    get lockedButtons() {
        const { uiCommon: { isOnline }, profileCommon: { profile: { token }, }, } = this.root;
        return (!token || !this.roundId || !isOnline || !this.gameCreated || this.animationState.inProcess || !this.canvasIsReady);
    }
}
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "messagesList", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "settings", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "settingsLoaded", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "createGameProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "placebetProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "cashoutProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "canvasIsReady", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "animationState", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "onWinDisable", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "roundId", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "prevRoundId", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "serverSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "winPopupState", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "gameLevel", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "gameStatus", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "coeffState", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "mockedMultiplier", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "betPlaced", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "gameCreated", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "gameIsRetrieved", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenBoatCommon.prototype, "betIndex", void 0);
__decorate([
    mobx_esm_js_.computed
], ChickenBoatCommon.prototype, "progress", null);
__decorate([
    mobx_esm_js_.computed
], ChickenBoatCommon.prototype, "winLevel", null);
__decorate([
    mobx_esm_js_.computed
], ChickenBoatCommon.prototype, "lockedButtons", null);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "setCheat", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "setMessagesList", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "updateMessagesList", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "setGameLevel", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "setCanvasIsReady", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "setOnWinDisable", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "setAnimationState", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "setWinPopupState", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "resetGame", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "fetchSettings", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "retrieveGame", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "retrieveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "mockGame", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "createGame", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "placeBet", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenBoatCommon.prototype, "cashout", void 0);
/* harmony default export */ const ChickenboatCommon = (ChickenBoatCommon);


/***/ }),

/***/ 38654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ apiLog)
/* harmony export */ });
const isDev = "production" === 'development';
const TAG_STYLE = 'color: #0f172a; background: #a78bfa; font-weight: bold; padding: 2px 6px; border-radius: 3px 0 0 3px;';
const NAME_STYLE = 'color: #a78bfa; background: #1a1a2e; font-weight: bold; padding: 2px 8px; border-radius: 0 3px 3px 0;';
const LABEL_STYLE = 'color: #a78bfa; font-weight: bold;';
function apiLog(name, params, data) {
    if (!isDev)
        return;
    console.groupCollapsed(`%cAPI%c${name}`, TAG_STYLE, NAME_STYLE);
    console.log('%cparams', LABEL_STYLE, params);
    console.log('%cresponse', LABEL_STYLE, data);
    console.groupEnd();
}


/***/ })

}]);