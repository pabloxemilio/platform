"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2246],{

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

/***/ 80038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* binding */ PandaPokerCanvasController)
});

;// ./src/canvas/controller/types/panda/Controller.ts
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
        this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
    trigger(event, data) {
        this.events[event]?.forEach(callback => callback(data));
    }
    listEvents() {
        return Object.keys(this.events);
    }
}

;// ./src/framework/components.pandapoker/PandaPokerCanvasController/PandaPokerCanvasController.ts

class Controller extends CanvasController {
}
const PandaPokerCanvasController = new Controller();


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

/***/ 22246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_PandaPokerCommon)
});

// EXTERNAL MODULE: ./src/framework/components.pandapoker/PandaPokerCanvasController/PandaPokerCanvasController.ts + 1 modules
var PandaPokerCanvasController = __webpack_require__(80038);
// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
// EXTERNAL MODULE: consume shared module (default) uuid@^9.0.0 (strict) (fallback: ./node_modules/uuid/dist/esm-browser/index.js)
var index_js_ = __webpack_require__(81682);
// EXTERNAL MODULE: consume shared module (default) i18next@^23.2.3 (strict) (fallback: ./node_modules/i18next/dist/esm/i18next.js)
var i18next_js_ = __webpack_require__(49953);
// EXTERNAL MODULE: consume shared module (default) centrifuge@^2.7.6 (strict) (fallback: ./node_modules/centrifuge/dist/centrifuge.js)
var centrifuge_js_ = __webpack_require__(68239);
var centrifuge_js_default = /*#__PURE__*/__webpack_require__.n(centrifuge_js_);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: ./src/framework/api/mines/config.ts
var config = __webpack_require__(29533);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/formatHeaders.ts
var formatHeaders = __webpack_require__(738);
// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/pandapoker/config.ts

const config_config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

;// ./src/framework/api/pandapoker/index.ts


const pandapoker_api = () => {
    const protocol = config_config().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config_config().api}/api`,
    });
};
const getSettingsRequest = ({ headers }) => pandapoker_api().get('/games/settings', { headers });
const createGameRequest = ({ headers, ...params }) => pandapoker_api().post('/games/create', params, { headers });
const createBonusGameRequest = ({ headers, ...params }) => pandapoker_api().post('/games/bonusbuy/create', params, { headers });
const placeBetRequest = ({ headers, ...params }) => pandapoker_api().post('/bets/place', params, { headers });
const placeBonusBuyRequest = ({ headers, ...params }) => pandapoker_api().post('/bets/bonusbuy/place', params, { headers });
const retrieveGameRequest = ({ headers, ...params }) => pandapoker_api().post(`/games/retrieve`, params, { headers });
const cashoutRequest = ({ headers, ...params }) => pandapoker_api().post('/bets/cashout', params, { headers });
/* harmony default export */ const pandapoker = ((/* unused pure expression or super */ null && (pandapoker_api)));

// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
;// ./src/framework/store/PandaPokerCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












console.logJSON = (data, title) => {
    const dataSTR = JSON.stringify(data, null, 2);
    console.log(JSON.parse(dataSTR), title);
};
(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class PandaPokerCommon {
    constructor(root, gameConfig) {
        this.nonce = 1;
        this.amount = '1.00';
        this.clientSeed = (0,index_js_.v4)();
        this.roundId = null;
        this.prevRoundId = null;
        this.betIndex = 0;
        this.betLoading = false;
        this.gameCreateLoading = false;
        this.gameCreated = false;
        this.gameStarted = false;
        this.cashoutProcessing = false;
        this.bonusBuyProcessing = false;
        this.payout = 0;
        this.coefficient = 0;
        this.gameResult = null;
        this.gameSettings = null;
        this.gameBaseResult = null;
        this.gameRespinResult = null;
        this.gameBonusResult = null;
        this.gameRetrieveResponse = null;
        this.animationsQueue = [];
        this.bonusSpinsLeft = null;
        this.canvasSpinProcessing = false;
        this.canvasIsLoaded = false;
        this.canvasIsReady = false;
        this.forceStopAnimations = false;
        this.placeBetIsHeld = false;
        this.currentAmountId = 0;
        this.amountsMap = [1, 2, 3, 5, 10, 15, 20, 50, 100, 200, 500, null];
        this.presetAmountsMap = [100, null, 30, 50, 10, 20];
        this.createGameInterval = null;
        this.createGameCounter = 0;
        this.setCurrentAmountId = (val) => {
            this.currentAmountId = val;
        };
        this.setAmountsMap = (values, minBet, maxBet) => {
            if (!minBet || !values || !maxBet)
                return [];
            const newArr = values.map((item) => (item === null ? maxBet : (0,floor/* floor */.R)(item * minBet)));
            return newArr;
        };
        this.retrieveAmount = () => {
            const { limit: { minBet, defaultBet }, profile: { currency }, } = this.root.profileCommon;
            let amount = localStorageHelper/* default */.A.get(`saved_amount:${currency}`);
            if (!amount || isNaN(Number(amount))) {
                defaultBet ? (amount = String(defaultBet)) : (amount = String(minBet * 10));
            }
            const newId = this.amountsMap.findIndex((item) => item === Number(amount));
            this.currentAmountId = newId === -1 ? this.gameConfig.defaultAmountId : newId;
        };
        this.setAmount = (amount) => {
            const { profile: { currency }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.set(`saved_amount:${currency}`, String(amount));
            this.amount = String(amount);
        };
        this.setCanvasIsReady = (val) => {
            this.canvasIsReady = val;
        };
        this.setCanvasIsLoaded = (val) => {
            this.canvasIsLoaded = val;
        };
        this.setForceStopAnimations = (val) => {
            this.forceStopAnimations = val;
        };
        this.setGameStarted = (val) => {
            this.gameStarted = val;
        };
        this.setGameResult = (result) => {
            this.gameResult = result;
        };
        this.setGameBaseResult = (baseResult) => {
            this.gameBaseResult = baseResult;
        };
        this.setGameRespinResult = (respinResult) => {
            this.gameRespinResult = respinResult;
        };
        this.setGameBonusResult = (bonusResult) => {
            this.gameBonusResult = bonusResult;
        };
        this.setAnimationsQueue = (val) => {
            this.animationsQueue = val;
        };
        this.setBonusSpinsLeft = (val) => {
            this.bonusSpinsLeft = val;
        };
        this.setCanvasSpinProcessing = (val) => {
            this.canvasSpinProcessing = val;
        };
        this.retrieveGame = async (recovery = false) => {
            const { clientSeed, nonce, root: { profileCommon: { profile: { token, playerId }, }, uiCommon: { setAlertList }, }, } = this;
            try {
                const { data } = await retrieveGameRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed,
                    nonce,
                    theme: this.gameServerTheme,
                    ...(recovery && { recovery }),
                });
                const newArr = [...data.state.baseSymbols];
                data.state.symbolsToSubstitute.forEach((item, index) => {
                    newArr.find((innerItem, innerIndex) => {
                        innerItem === item && newArr.splice(innerIndex, 1, data.state.rouletteSymbols[index]);
                    });
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    !recovery && (this.prevRoundId = data.roundId);
                    this.gameCreated = true;
                    this.gameRetrieveResponse = newArr;
                    this.nonce = data.nonce;
                    recovery && (this.betLoading = false);
                });
                ((!recovery && data.cashable) || (recovery && data.result === 'unknown')) && (await this.cashout(recovery));
                setAlertList({
                    title: i18next_js_["default"].t('NOTIF.CONTINUE_ROUND'),
                    type: 'success',
                });
            }
            catch (error) {
                this.gameRetrieveResponse = [];
                return error;
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
        this.getGameSettings = async () => {
            const { root: { profileCommon: { profile: { token, playerId, subPartnerId }, }, uiCommon: { isMobile }, }, } = this;
            try {
                const respond = await getSettingsRequest({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: false,
                        }),
                    }),
                });
                this.gameSettings = respond.data;
            }
            catch (error) {
                throw error;
            }
        };
        this.startGame = async () => {
            const { profileCommon: { profile: { token, playerId }, }, } = this.root;
            if (this.gameCreateLoading)
                return;
            try {
                const { search } = document.location;
                const urlParams = new URLSearchParams(search);
                const params = ['mock', 'rouletteMock', 'bonusMock', 'bonusMockOffset'];
                const mocks = {};
                params.forEach((item) => {
                    let param = urlParams.get(item);
                    if (param) {
                        param = param.slice(1, -1);
                        mocks[item] = param.split(',').map(Number);
                    }
                });
                this.gameCreateLoading = true;
                this.roundId = null;
                const { data: { roundId }, } = await createGameRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    theme: this.gameServerTheme,
                    ...mocks,
                });
                this.gameCreateLoading = false;
                this.roundId = roundId;
                this.gameCreated = true;
                clearInterval(this.createGameInterval);
                this.createGameInterval = null;
                this.createGameCounter = 0;
                return roundId;
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.root.uiCommon.errorCodeResolver(error.response);
                this.gameCreated = false;
                this.roundId = null;
                this.gameCreateLoading = false;
                if (this.createGameInterval) {
                    clearInterval(this.createGameInterval);
                    this.createGameInterval = null;
                }
                if (this.createGameCounter > 20)
                    return null;
                this.createGameInterval = setInterval(() => {
                    !this.gameCreateLoading && this.startGame();
                    this.createGameCounter++;
                }, 5000);
                return error;
            }
        };
        this.startBonusBuyGame = async () => {
            const { profileCommon: { profile: { token, playerId }, }, } = this.root;
            if (this.gameCreateLoading || this.bonusBuyProcessing)
                return null;
            try {
                const { search } = document.location;
                const urlParams = new URLSearchParams(search);
                const params = ['bonusMock', 'bonusMockOffset'];
                const mocks = {};
                params.forEach((item) => {
                    let param = urlParams.get(item);
                    if (param) {
                        param = param.slice(1, -1);
                        mocks[item] = param.split(',').map(Number);
                    }
                });
                this.bonusBuyProcessing = true;
                this.gameCreateLoading = true;
                const { data: { roundId }, } = await createBonusGameRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    theme: this.gameServerTheme,
                    ...mocks,
                });
                this.gameCreateLoading = false;
                this.roundId = roundId;
                this.placeBonusBuy();
                return roundId;
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.root.uiCommon.errorCodeResolver(error.response);
                return error;
            }
        };
        this.placeBet = async (autoBet) => {
            const { profileCommon: { profile: { balance, token, subPartnerId, currency, apiKey }, }, uiCommon: { isMobile, showNotEnoughBalanceError }, autobetCommon: { autoBetsAmount, setAutoBetEnabled, setInitialAmount, setAutoBetsAmount }, freebetsCommon: { freebetActive, freebetId }, } = this.root;
            if (this.roundId === this.prevRoundId) {
                this.placeBetTimeout = setTimeout(() => {
                    this.placeBet();
                }, 5000);
                return null;
            }
            if (!Number(this.amount) || this.gameStarted)
                return null;
            this.placeBetTimeout && clearTimeout(this.placeBetTimeout);
            this.gameCreated = false;
            this.forceStopAnimations = false;
            this.gameResult = null;
            if (!this.isFreebetEnabled && balance !== null && balance <= 0) {
                showNotEnoughBalanceError();
                return null;
            }
            if (autoBet) {
                if (autoBetsAmount <= 0 || (this.isFreebetEnabled && freebetActive.left - 1 < 0)) {
                    setAutoBetEnabled(false);
                    return null;
                }
                setInitialAmount(Number(this.amount));
                setAutoBetEnabled(true);
                setAutoBetsAmount(String(autoBetsAmount - 1));
            }
            try {
                if (!this.roundId) {
                    await this.startGame();
                }
                this.betLoading = true;
                this.gameStarted = true;
                const { data } = await placeBetRequest({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: apiKey,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: autoBet,
                        }),
                    }),
                    roundId: this.roundId,
                    amount: Number(this.amount),
                    currency,
                    theme: this.gameServerTheme,
                    ...(this.isFreebetEnabled && freebetId && { freebetsId: freebetId }),
                });
                this.betLoading = false;
                this.betIndex += 1;
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_placed',
                    sid: this.root.profileCommon.profile.sid,
                    parameters: {
                        value: this.amount,
                        currency: this.root.profileCommon.profile.currency,
                        method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                        multiplier: this.coefficient,
                        object: `bet_1.place`,
                        round_id: this.roundId,
                        id: this.roundId,
                    },
                });
                if (!data.cashable && this.isFreebetEnabled) {
                    this.placeBetTimeout = setTimeout(() => {
                        this.root.freebetsCommon.listAdd({
                            index: 0,
                            freebet: true,
                        });
                        data.result === 'won' &&
                            this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: data.coefficient });
                        this.root.freebetsCommon.listRemoveByIndex(0);
                    }, 1500);
                }
                const animationsQueueLocal = [];
                this.setGameResult({ payout: data.payout, coeff: data.coefficient, bonusCoeff: data.bonusCoefficient });
                this.setGameBaseResult({
                    amount: data.amount,
                    result: data.result,
                    reels: data.baseSymbols.map((item) => [item]),
                    listWin: data.baseComboSymbols,
                    baseComboType: data.baseComboType,
                    cashable: data.cashable,
                    symbolsCoefficient: data.symbolsCoefficient,
                });
                if (data.rouletteSymbols?.length > 0 && data.symbolsToSubstitute.length === 0) {
                    throw 'invalid data in respin';
                }
                const getLoseIndexes = (reels, symbolsWillChange) => {
                    const loseIndexes = [];
                    reels.forEach((item, index) => {
                        (item === symbolsWillChange[0] || item === symbolsWillChange[1]) && loseIndexes.push(index);
                    });
                    return loseIndexes;
                };
                data.symbolsToSubstitute.length > 0
                    ? animationsQueueLocal.push('respinShow')
                    : animationsQueueLocal.push('reset');
                if (data.symbolsToSubstitute.length > 0) {
                    this.setGameRespinResult({
                        reelSymbolsToChange: data.symbolsToSubstitute,
                        rouletteSymbols: data.rouletteSymbols,
                        wildSymbol: data.wildSubstitutesSymbol === null ? null : Number(data.wildSubstitutesSymbol),
                        losingIndices: getLoseIndexes(data.baseSymbols, data.symbolsToSubstitute),
                        listRespinWin: data.comboSymbols,
                        respinComboType: data.comboType,
                    });
                    animationsQueueLocal.push(...(data.symbolsToSubstitute.length === 2 ? ['respinRun0', 'respinRun1'] : ['respinRun0']));
                }
                data.bonusResults && animationsQueueLocal.push('bonusShow');
                !data.bonusResults && data.symbolsToSubstitute.length > 0 && animationsQueueLocal.push('respinHide');
                if (data.bonusResults) {
                    this.setGameBonusResult(data.bonusResults.map((item, index) => {
                        animationsQueueLocal.push('bonusRun');
                        return {
                            realCoefficient: item.coefficient,
                            coefficient: item.winSymbol,
                            changeItem: item.changeItem,
                            spinIndex: index % 3,
                            bonusSpinsLeft: item.bonusSpinsLeft,
                            symbolOffset: item.offset,
                        };
                    }));
                    animationsQueueLocal.push('bonusHide');
                }
                this.setAnimationsQueue(animationsQueueLocal);
                this.root.tournamentsCommon?.addBet &&
                    this.root.tournamentsCommon.addBet({
                        amount: Number(this.amount),
                    });
                !data.cashable &&
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'bet_closed',
                        parameters: {
                            id: this.roundId,
                            round_id: this.roundId,
                            method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                            object: data.result === 'won' ? 'cashout' : 'lost',
                            value: this.amount,
                            currency: this.root.profileCommon.profile.currency,
                            wins: data.result === 'won' ? 1 : 0,
                            multiplier: data.coefficient,
                        },
                    });
                this.prevRoundId = this.roundId;
                this.startGame();
            }
            catch (error) {
                this.gameStarted = false;
                console.log('fetchGame error:', error);
                this.root.uiCommon.errorCodeResolver(error.response);
                this.root.freebetsCommon.listRemoveByIndex(0);
                PandaPokerCanvasController/* PandaPokerCanvasController */.K.invoke('stopSpin');
            }
        };
        this.placeBonusBuy = async () => {
            const { profileCommon: { profile: { balance, token, subPartnerId, currency, apiKey }, }, uiCommon: { isMobile, showNotEnoughBalanceError }, } = this.root;
            if (!Number(this.amount) || this.gameStarted)
                return null;
            if (balance !== null && balance <= 0) {
                showNotEnoughBalanceError();
                return null;
            }
            try {
                this.betLoading = true;
                this.gameStarted = true;
                const { data } = await placeBonusBuyRequest({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: apiKey,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                    }),
                    roundId: this.roundId,
                    amount: Number(this.amount),
                    currency,
                    theme: this.gameServerTheme,
                });
                this.betLoading = false;
                this.betIndex += 1;
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bonus_game',
                    parameters: {
                        parameters: {
                            id: this.roundId,
                            round_id: this.roundId,
                            method: 'manual',
                            value: this.amount,
                            currency: this.root.profileCommon.profile.currency,
                            wins: 1,
                            bonus_multiplier: data.coefficient,
                            state: 'buy',
                        },
                    },
                });
                const animationsQueueLocal = [];
                this.setGameResult({
                    payout: data.payout,
                    coeff: data.coefficient,
                    bonusCoeff: data.bonusCoefficient,
                    isCashable: data.cashable,
                });
                animationsQueueLocal.push('bonusBuyShow');
                this.setGameBonusResult(data.bonusResults.map((item, index) => {
                    animationsQueueLocal.push('bonusBuyRun');
                    return {
                        realCoefficient: item.coefficient,
                        coefficient: item.winSymbol,
                        changeItem: item.changeItem,
                        spinIndex: index % 3,
                        bonusSpinsLeft: item.bonusSpinsLeft,
                        symbolOffset: item.offset,
                    };
                }));
                animationsQueueLocal.push('bonusBuyHide');
                this.setAnimationsQueue(animationsQueueLocal);
            }
            catch (error) {
                this.betLoading = false;
                this.gameStarted = false;
                console.log('fetchGame error:', error);
                this.root.uiCommon.errorCodeResolver(error.response);
            }
        };
        this.cashout = async (useCurrentRound = false) => {
            if (!this.prevRoundId && !useCurrentRound)
                return null;
            const { profile: { token, playerId }, } = this.root.profileCommon;
            try {
                this.cashoutProcessing = true;
                const { data } = await cashoutRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    roundId: useCurrentRound || this.bonusBuyProcessing ? this.roundId : this.prevRoundId,
                    theme: this.gameServerTheme,
                });
                this.cashoutProcessing = false;
                if (this.isFreebetEnabled) {
                    this.root.freebetsCommon.listAdd({
                        index: 0,
                        freebet: true,
                    });
                    this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: data.payoutCoefficient });
                    this.root.freebetsCommon.listRemoveByIndex(0);
                }
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_closed',
                    parameters: {
                        parameters: {
                            id: useCurrentRound || this.bonusBuyProcessing ? this.roundId : this.prevRoundId,
                            round_id: useCurrentRound || this.bonusBuyProcessing ? this.roundId : this.prevRoundId,
                            method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                            object: 'cashout',
                            value: this.amount,
                            currency: this.root.profileCommon.profile.currency,
                            wins: 1,
                            multiplier: data.payoutCoefficient,
                            state: useCurrentRound || this.bonusBuyProcessing ? 'buy' : 'free',
                        },
                    },
                });
                if (useCurrentRound || this.bonusBuyProcessing) {
                    await this.startGame();
                    this.bonusBuyProcessing = false;
                }
                return data.payout;
            }
            catch (error) {
                this.gameStarted = false;
                this.root.uiCommon.errorCodeResolver(error.response);
                return 0;
            }
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.centrifuge = new (centrifuge_js_default())((0,config/* config */.$)().centrifuge || '', {
            debug: (0,bootstrap.GET_ENV)().NODE_ENV === 'development',
        });
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.getGameSettings();
            this.startGame();
            this.retrieveAmount();
            await this.retrieveGame();
        });
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'pandabao';
        this.gameServerTheme = gameConfig.gameServerTheme || 'default';
        this.currentAmountId = gameConfig.defaultAmountId || 0;
        this.placeBetTimeout = null;
        this.mockGame();
        (0,mobx_esm_js_.reaction)(() => this.currentAmountId, () => {
            if (this.isFreebetEnabled)
                return null;
            this.setAmount(this.amountsMap[this.currentAmountId] > this.root.profileCommon.profile.balance
                ? (0,floor/* floor */.R)(this.root.profileCommon.profile.balance, 1)
                : this.amountsMap[this.currentAmountId]);
        });
        (0,mobx_esm_js_.reaction)(() => this.root.profileCommon?.limit?.minBet, () => {
            this.amountsMap = this.setAmountsMap(this.gameConfig.amountsMapValues, this.root.profileCommon?.limit?.minBet, this.root.profileCommon?.limit?.maxBet);
            this.presetAmountsMap = this.setAmountsMap(this.gameConfig.presetAmountsMap, this.root.profileCommon?.limit?.minBet, this.root.profileCommon?.limit?.maxBet);
        });
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: this.amount }];
        }, (index, { amount }) => {
            this.setAmount(Number(amount));
        });
    }
    get lockedUi() {
        const { profileCommon: { profile: { balance }, limit: { minBet }, }, } = this.root;
        return (this.gameStarted ||
            this.betLoading ||
            this.canvasSpinProcessing ||
            !this.canvasIsReady ||
            this.cashoutProcessing ||
            (balance !== null && (balance <= 0 || balance < minBet)) ||
            this.isFreebetEnabled ||
            !this.roundId);
    }
    get isFreebetEnabled() {
        const { freebetsCommon: { freebetEnabled, forcedDisabledFreebets }, } = this.root;
        return freebetEnabled && !forcedDisabledFreebets;
    }
}
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "roundId", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "prevRoundId", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "betIndex", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "betLoading", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "gameCreateLoading", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "gameCreated", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "gameStarted", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "cashoutProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "bonusBuyProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "gameSettings", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "gameBaseResult", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "gameRespinResult", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "gameBonusResult", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "gameRetrieveResponse", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "animationsQueue", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "bonusSpinsLeft", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "canvasSpinProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "canvasIsLoaded", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "canvasIsReady", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "forceStopAnimations", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "placeBetIsHeld", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "currentAmountId", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "amountsMap", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "presetAmountsMap", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "createGameInterval", void 0);
__decorate([
    mobx_esm_js_.observable
], PandaPokerCommon.prototype, "createGameCounter", void 0);
__decorate([
    mobx_esm_js_.computed
], PandaPokerCommon.prototype, "lockedUi", null);
__decorate([
    mobx_esm_js_.computed
], PandaPokerCommon.prototype, "isFreebetEnabled", null);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "setCurrentAmountId", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "setAmountsMap", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "retrieveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "setCanvasIsReady", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "setCanvasIsLoaded", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "setForceStopAnimations", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "setGameStarted", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "setGameResult", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "setGameBaseResult", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "setGameRespinResult", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "setGameBonusResult", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "setAnimationsQueue", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "setBonusSpinsLeft", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "setCanvasSpinProcessing", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "retrieveGame", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "mockGame", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "getGameSettings", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "startGame", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "startBonusBuyGame", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "placeBet", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "placeBonusBuy", void 0);
__decorate([
    mobx_esm_js_.action
], PandaPokerCommon.prototype, "cashout", void 0);
/* harmony default export */ const store_PandaPokerCommon = (PandaPokerCommon);


/***/ })

}]);