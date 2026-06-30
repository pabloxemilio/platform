"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[728,4852],{

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


/***/ }),

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

/***/ 97521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CW: () => (/* binding */ placeBetRequest),
/* harmony export */   Yv: () => (/* binding */ createGameRequest),
/* harmony export */   cJ: () => (/* binding */ retrieveGameRequest),
/* harmony export */   dn: () => (/* binding */ cashoutRequest),
/* harmony export */   p_: () => (/* binding */ getGameSettingsRequest),
/* harmony export */   v0: () => (/* binding */ gameInterruptRequest)
/* harmony export */ });
/* unused harmony export api */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75364);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8795);


const api = (version = '') => {
    const protocol = (0,_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .$)().api.includes('localhost') ? 'http' : 'https';
    const prefix = version === 'vortexpowerplay' ? `api/f3` : version ? `${version}/api` : 'api';
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        baseURL: `${protocol}://${(0,_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .$)().api}/${prefix}`,
    });
};
const placeBetRequest = ({ headers, version = '', ...params }) => api(version).post('/bets/place', params, { headers });
const createGameRequest = ({ headers, version = '', ...params }) => api(version).post('/games/create', params, { headers });
const getGameSettingsRequest = ({ version = '', ...params }) => api(version).get('/games/settings', params);
const cashoutRequest = ({ headers, version = '', ...params }) => api(version).post('/bets/cashout', params, { headers });
const retrieveGameRequest = ({ headers, version = '', ...params }) => api(version).post(`/games/retrieve`, params, { headers });
const gameInterruptRequest = ({ headers, version = '', ...params }) => api(version).post('/games/freebets/interrupt', params, { headers });
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (api)));


/***/ }),

/***/ 70770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* reexport */ OlympusCanvasController)
});

// EXTERNAL MODULE: ./src/canvas/controller/Controller.ts
var controller_Controller = __webpack_require__(74852);
;// ./src/framework/components.olympus/OlympusCanvasController/OlympusCanvasController.ts

class Controller extends controller_Controller["default"] {
}
const OlympusCanvasController = new Controller();

;// ./src/framework/components.olympus/OlympusCanvasController/index.ts



/***/ }),

/***/ 50924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* reexport */ VortexCanvasController)
});

// EXTERNAL MODULE: ./src/canvas/controller/Controller.ts
var controller_Controller = __webpack_require__(74852);
;// ./src/framework/components.vortex/VortexCanvasController/VortexCanvasController.ts

class Controller extends controller_Controller["default"] {
}
const VortexCanvasController = new Controller();

;// ./src/framework/components.vortex/VortexCanvasController/index.ts



/***/ }),

/***/ 37004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* reexport */ VortexCricketCanvasController)
});

// EXTERNAL MODULE: ./src/canvas/controller/Controller.ts
var controller_Controller = __webpack_require__(74852);
;// ./src/framework/components.vortexcricket/VortexCricketCanvasController/VortexCricketCanvasController.ts

class Controller extends controller_Controller["default"] {
}
const VortexCricketCanvasController = new Controller();

;// ./src/framework/components.vortexcricket/VortexCricketCanvasController/index.ts



/***/ }),

/***/ 63440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* reexport */ VortexSafariCanvasController)
});

// EXTERNAL MODULE: ./src/canvas/controller/Controller.ts
var controller_Controller = __webpack_require__(74852);
;// ./src/framework/components.vortexsafari/VortexSafariCanvasController/VortexSafariCanvasController.ts

class Controller extends controller_Controller["default"] {
}
const VortexSafariCanvasController = new Controller();

;// ./src/framework/components.vortexsafari/VortexSafariCanvasController/index.ts



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

/***/ 90728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_vortex_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97521);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8570);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81682);
/* harmony import */ var centrifuge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68239);
/* harmony import */ var centrifuge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(centrifuge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49953);
/* harmony import */ var _api_vortex_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8795);
/* harmony import */ var _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74065);
/* harmony import */ var _helpers_floor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70903);
/* harmony import */ var _helpers_formatHeaders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(738);
/* harmony import */ var _helpers_truncateDecimals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12215);
/* harmony import */ var src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21714);
/* harmony import */ var _components_vortex_VortexCanvasController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50924);
/* harmony import */ var _components_olympus_OlympusCanvasController__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70770);
/* harmony import */ var _components_vortexsafari_VortexSafariCanvasController__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(63440);
/* harmony import */ var _components_vortexcricket_VortexCricketCanvasController__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37004);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















(0,mobx__WEBPACK_IMPORTED_MODULE_1__.configure)({
    enforceActions: 'always',
});
class VortexCommon {
    constructor(root, gameConfig) {
        this.version = '';
        this.messagesList = [];
        this.placeBetIsHeld = false;
        this.settings = null;
        this.settingsLoaded = false;
        this.placebetProcessing = false;
        this.placebetClicked = false;
        this.cashoutProcessing = false;
        this.roundId = _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.get('roundId') || '';
        this.prevRoundId = '';
        this.roundSeed = '';
        this.clientSeed = (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)();
        this.serverSeed = undefined;
        this.nonce = 1;
        this.amount = `1.00`;
        this.gameResult = null;
        this.result = 'initial';
        this.payout = 0;
        this.coefficient = 0;
        this.multiplier = 0;
        this.showBonusGame = false;
        this.skipAnimation = false;
        this.isBalanceActual = true;
        this.gameState = {
            multiplier: 0,
            bonusWin: 0,
            superBonus: false,
            collection: [0, 0, 0],
            symbol: 'Symbol3',
            cashable: false,
            initial: true,
        };
        this.olympusBonusResult = null;
        this.vortexSafariBonusResult = null;
        this.cashoutTimeout = null;
        this.autoCashoutTimeout = null;
        this.hold2pinTimeout = null;
        this.showHTSNotif = null;
        this.winScreen = false;
        this.winBonusScreen = false;
        this.winLevelList = [0];
        this.splitTest = {};
        this.superBonusState = null;
        this.gameStarted = false;
        this.betIndex = 0;
        this.currentCoefficient = 0;
        this.currentCoefficientTimeout = null;
        this.partialCoefficient = 0;
        this.partialCoefficientTimeout = null;
        this.currentAmountId = 0;
        this.amountsMap = [1, 2, 3, 5, 10, 20, 50, 100];
        this.eventsAreReady = false;
        this.checkBalanceActual = () => {
            const { profileCommon: { profile: { balance }, }, balanceCommon: { balanceData, balanceTimestamp }, } = this.root;
            const lastBalance = balanceData.at(-1);
            if (!lastBalance) {
                return;
            }
            (0,mobx__WEBPACK_IMPORTED_MODULE_1__.runInAction)(() => {
                this.isBalanceActual =
                    (lastBalance?.decrement?.ticketId === this.prevRoundId || lastBalance?.decrement?.ticketId === this.roundId) &&
                        lastBalance?.decrement?.balance === balance;
            });
        };
        this.setIsBalanceActual = (val) => {
            this.isBalanceActual = val;
        };
        this.setPlacebetProcessing = (val) => {
            this.placebetProcessing = val;
        };
        this.setPlacebetClicked = (val) => {
            this.placebetClicked = val;
        };
        this.setShowHTSNotif = (val) => {
            this.showHTSNotif = val;
        };
        this.setSkipAnimation = (val) => {
            this.skipAnimation = val;
        };
        this.setCurrentAmountId = (val) => {
            this.currentAmountId = val;
        };
        this.setAmountsMap = (minBet, maxBet) => {
            const values = this.gameConfig.amountsMapValues;
            if (!minBet || !values || !maxBet)
                return null;
            const newArr = values.map((item) => (0,_helpers_floor__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(item * minBet));
            newArr.push(maxBet);
            this.amountsMap = newArr;
        };
        this.setMessagesList = (value) => {
            this.messagesList = [...this.messagesList, value];
        };
        this.updateMessagesList = (value) => {
            this.messagesList = value;
        };
        this.setPlaceBetIsHeld = (placeBetIsHeld) => {
            this.placeBetIsHeld = placeBetIsHeld;
        };
        this.setShowBonusGame = (val) => {
            this.showBonusGame = val;
        };
        this.setCurrentCoefficient = (currentCoefficient) => {
            this.currentCoefficient = currentCoefficient;
        };
        this.updateCurrentCoefficient = () => {
            if (!this.settingsLoaded)
                return 0;
            if (this.currentCoefficientTimeout)
                clearTimeout(this.currentCoefficientTimeout);
            this.currentCoefficientTimeout = setTimeout(() => {
                const coefficient = this.gameState.collection.reduce((acc, index, i) => {
                    const key = Object.keys(this.settings)[i];
                    return acc + this.settings[key][index];
                }, 0);
                this.setCurrentCoefficient(coefficient);
            }, this.gameConfig.game.duration * this.durationMultiplier);
        };
        this.setPartialCoefficient = (partialCoefficient) => {
            this.partialCoefficient = partialCoefficient;
        };
        this.updatePartialCoefficient = () => {
            if (!this.settingsLoaded)
                return 0;
            if (this.partialCoefficientTimeout)
                clearTimeout(this.partialCoefficientTimeout);
            this.partialCoefficientTimeout = setTimeout(() => {
                const prevCoefficient = this.gameState.collection.reduce((acc, index, i) => {
                    const key = Object.keys(this.settings)[i];
                    const prevIndex = index ? index - 1 : 0;
                    return acc + this.settings[key][prevIndex];
                }, 0);
                this.setPartialCoefficient(this.currentCoefficient - prevCoefficient);
            }, this.gameConfig.game.duration * this.durationMultiplier);
        };
        this.setWinScreen = (winScreen) => {
            this.winScreen = winScreen;
        };
        this.showWinScreen = (delay = 0) => {
            setTimeout(() => {
                this.setWinScreen(true);
                setTimeout(() => {
                    this.setWinScreen(false);
                }, this.gameConfig.winDuration);
            }, delay);
        };
        this.showBonusWinScreen = (delay = 0) => {
            setTimeout(() => {
                this.setBonusWinScreen(true);
                setTimeout(() => {
                    this.setBonusWinScreen(false);
                }, this.gameConfig.winDuration);
            }, delay);
        };
        this.setBonusWinScreen = (winBonusScreen) => {
            this.winBonusScreen = winBonusScreen;
        };
        this.fetchSettings = async () => {
            const { profile: { token, playerId }, } = this.root.profileCommon;
            try {
                const { data } = await (0,_api_vortex_index__WEBPACK_IMPORTED_MODULE_0__/* .getGameSettingsRequest */ .p_)({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    version: this.version,
                });
                this.settings = data;
                this.settingsLoaded = true;
            }
            catch (error) {
                console.log('fetchSettings error:', error);
                return error;
            }
        };
        this.setRoundId = (roundId) => {
            this.roundId = roundId;
        };
        this.interrupGame = async () => {
            const { profile: { token, apiKey }, } = this.root.profileCommon;
            try {
                const { data } = await (0,_api_vortex_index__WEBPACK_IMPORTED_MODULE_0__/* .gameInterruptRequest */ .v0)({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    roundId: this.roundId,
                    version: this.version,
                });
                (0,mobx__WEBPACK_IMPORTED_MODULE_1__.runInAction)(() => {
                    this.setRoundId(data.roundId);
                    this.gameStarted = true;
                    this.setGameState(data.state);
                    this.mockGame();
                });
            }
            catch (error) {
                console.log('Interrupt error:', error);
                this.setRoundId();
                this.gameStarted = false;
                return error;
            }
        };
        this.createGame = async () => {
            const collectionUrlParam = new URLSearchParams(window.location.search).get('collection');
            const { profile: { token, apiKey }, } = this.root.profileCommon;
            this.nonce = 1;
            try {
                const { data } = await (0,_api_vortex_index__WEBPACK_IMPORTED_MODULE_0__/* .createGameRequest */ .Yv)({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    theme: this.gameServerTheme,
                    nonce: this.nonce,
                    clientSeed: this.clientSeed,
                    serverSeed: this.serverSeed,
                    ...(collectionUrlParam && { collection: collectionUrlParam }),
                    version: this.version,
                });
                (0,mobx__WEBPACK_IMPORTED_MODULE_1__.runInAction)(() => {
                    this.setRoundId(data.roundId);
                    this.gameStarted = true;
                    this.setGameState(data.state);
                    this.mockGame();
                });
            }
            catch (error) {
                console.log('createGame error:', error);
                this.setRoundId();
                this.gameStarted = false;
                return error;
            }
        };
        this.retrieveGame = async () => {
            const { profileCommon: { profile: { token, apiKey }, }, uiCommon: { setAlertList }, freebetsCommon: { setForcedDisabledFreebets, freebetActive }, } = this.root;
            _components_vortex_VortexCanvasController__WEBPACK_IMPORTED_MODULE_11__/* .VortexCanvasController */ .$.on('CenterRouletteReady', () => {
                _components_vortex_VortexCanvasController__WEBPACK_IMPORTED_MODULE_11__/* .VortexCanvasController */ .$.invoke('showIcons');
            });
            try {
                const { data } = await (0,_api_vortex_index__WEBPACK_IMPORTED_MODULE_0__/* .retrieveGameRequest */ .cJ)({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    theme: this.gameServerTheme,
                    version: this.version,
                });
                const { clientSeed, hash, nonce, state, freebetsId } = data;
                if (!clientSeed || !nonce) {
                    throw { clientSeed, hash, nonce };
                }
                else if (freebetsId === freebetActive?.id && freebetActive?.status === 'expired') {
                    throw 1;
                }
                (0,mobx__WEBPACK_IMPORTED_MODULE_1__.runInAction)(() => {
                    this.setRoundId(data.roundId);
                    this.setGameState(data.state);
                    this.gameStarted = true;
                    this.clientSeed = clientSeed;
                    this.nonce = nonce;
                    if (state.collection.find((item) => item > 0) && !freebetsId) {
                        setForcedDisabledFreebets(true);
                    }
                    if (state.amount) {
                        this.setAmount(state.amount);
                    }
                    this.mockGame();
                    setAlertList({
                        title: i18next__WEBPACK_IMPORTED_MODULE_4__["default"].t('NOTIF.CONTINUE_ROUND'),
                        type: 'success',
                    });
                });
                _components_vortexcricket_VortexCricketCanvasController__WEBPACK_IMPORTED_MODULE_14__/* .VortexCricketCanvasController */ .e.on('CanvasLoaded', () => {
                    _components_vortexcricket_VortexCricketCanvasController__WEBPACK_IMPORTED_MODULE_14__/* .VortexCricketCanvasController */ .e.invoke('setStep', data.state.collection);
                });
                _components_olympus_OlympusCanvasController__WEBPACK_IMPORTED_MODULE_12__/* .OlympusCanvasController */ .y.on('CanvasLoaded', () => {
                    _components_olympus_OlympusCanvasController__WEBPACK_IMPORTED_MODULE_12__/* .OlympusCanvasController */ .y.invoke('setStep', data.state.collection);
                });
                _components_vortexsafari_VortexSafariCanvasController__WEBPACK_IMPORTED_MODULE_13__/* .VortexSafariCanvasController */ .P.on('CanvasLoaded', () => {
                    _components_vortexsafari_VortexSafariCanvasController__WEBPACK_IMPORTED_MODULE_13__/* .VortexSafariCanvasController */ .P.invoke('setStep', data.state.collection);
                    _components_vortexsafari_VortexSafariCanvasController__WEBPACK_IMPORTED_MODULE_13__/* .VortexSafariCanvasController */ .P.trigger('RetrieveGame', { symbol: data.state.symbol });
                });
            }
            catch (error) {
                await this.createGame();
            }
        };
        this.mockGame = () => {
            const { location } = window;
            const { search } = location;
            const queryObj = new URLSearchParams(search);
            if (!queryObj.has('serverSeed'))
                return;
            (0,mobx__WEBPACK_IMPORTED_MODULE_1__.runInAction)(() => {
                this.serverSeed = queryObj.get('serverSeed') || undefined;
                this.nonce = Number(queryObj.get('nonce')) || undefined;
                this.clientSeed = queryObj.get('clientSeed') || undefined;
            });
        };
        this.setGameState = (gameState) => {
            this.gameState = { ...this.gameState, ...gameState };
            this.updateCurrentCoefficient();
            this.updatePartialCoefficient();
            if (gameState) {
                this.handleStep(gameState, this.gameServerTheme === 'ringsofolympus'
                    ? _components_olympus_OlympusCanvasController__WEBPACK_IMPORTED_MODULE_12__/* .OlympusCanvasController */ .y
                    : this.gameServerTheme === 'vortexsafari'
                        ? _components_vortexsafari_VortexSafariCanvasController__WEBPACK_IMPORTED_MODULE_13__/* .VortexSafariCanvasController */ .P
                        : _components_vortexcricket_VortexCricketCanvasController__WEBPACK_IMPORTED_MODULE_14__/* .VortexCricketCanvasController */ .e);
            }
        };
        this.setResult = (result) => {
            if (result === 'won') {
                this.root.trackingCommon.addWin();
            }
            this.result = result;
        };
        this.setCoefficent = (coefficient) => {
            this.coefficient = coefficient;
        };
        this.setSuperBonusState = (superBonusState) => {
            this.superBonusState = superBonusState;
        };
        this.setMultiplier = (multiplier) => {
            this.multiplier = multiplier;
        };
        this.setPayout = (payout) => {
            this.payout = payout;
        };
        this.cashout = async (partial = false) => {
            if (!this.roundId)
                return;
            const { profile: { token, playerId }, } = this.root.profileCommon;
            try {
                this.cashoutProcessing = true;
                const { data } = await (0,_api_vortex_index__WEBPACK_IMPORTED_MODULE_0__/* .cashoutRequest */ .dn)({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    partial,
                    roundId: this.roundId,
                    version: this.version,
                });
                this.setGameState(data.state);
                this.setResult(data.result);
                this.setCoefficent(data.coefficient);
                this.setPayout(data.payout);
                this.setRoundId(data.roundId);
                this.cashoutProcessing = false;
                this.showWinScreen();
                data.result === 'won' &&
                    this.isFreebetEnabled &&
                    this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: data.coefficient });
                this.root.freebetsCommon.listRemoveByIndex(0);
                (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)({
                    action: 'bet_closed',
                    parameters: {
                        id: this.roundId,
                        round_id: this.roundId,
                        method: this.placeBetIsHeld ? 'hold' : this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                        object: data.result === 'won' ? 'cashout' : 'lost',
                        value: this.amount,
                        currency: this.root.profileCommon.profile.currency,
                        wins: this.gameResult === 'won' ? 1 : 0,
                        multiplier: this.coefficient,
                    },
                });
            }
            catch (error) {
                console.log('cashout error:', error);
                this.cashoutProcessing = false;
                this.root.uiCommon.errorCodeResolver(error.response);
                return error;
            }
        };
        this.placeBet = async (symbol) => {
            const { profileCommon: { profile: { token, subPartnerId, currency, balance, apiKey }, }, uiCommon: { isMobile, showNotEnoughBalanceError, isOnline }, freebetsCommon: { freebetActive, listRemoveByIndex, freebetId, updateFreebetsPayout }, quickModeCommon: { enabled }, autobetCommon: { autoBetEnabled }, } = this.root;
            if (this.placebetProcessing || !isOnline)
                return;
            if (!this.roundId) {
                throw new Error('no gameId');
            }
            this.olympusBonusResult = null;
            this.vortexSafariBonusResult = null;
            if (!this.isFreebetEnabled && balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
                return;
            }
            try {
                this.setIsBalanceActual(false);
                this.setPlacebetProcessing(true);
                _components_vortex_VortexCanvasController__WEBPACK_IMPORTED_MODULE_11__/* .VortexCanvasController */ .$.invoke('startSpinNew');
                _components_olympus_OlympusCanvasController__WEBPACK_IMPORTED_MODULE_12__/* .OlympusCanvasController */ .y.invoke('startSpinNew');
                _components_vortexsafari_VortexSafariCanvasController__WEBPACK_IMPORTED_MODULE_13__/* .VortexSafariCanvasController */ .P.invoke('startSpinNew');
                _components_vortexcricket_VortexCricketCanvasController__WEBPACK_IMPORTED_MODULE_14__/* .VortexCricketCanvasController */ .e.invoke('startSpinNew');
                this.setPlacebetClicked(true);
                const { data } = await (0,_api_vortex_index__WEBPACK_IMPORTED_MODULE_0__/* .placeBetRequest */ .CW)({
                    headers: (0,_helpers_formatHeaders__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({
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
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    currency,
                    amount: Number(this.amount),
                    ...(symbol && { symbol }),
                    ...(this.isFreebetEnabled && freebetId && { freebetsId: freebetId }),
                    ...(this.isFreebetEnabled && {
                        minCoefficient: this.gameConfig.freebets?.minCoeffToCashout ?? 1.01,
                        freebetsLeft: freebetActive.left - 1,
                    }),
                    version: this.version,
                });
                const { state, result, payout, coefficient, superBonusState, autocashout } = data;
                if (!_helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.get('htsUsed') && !autoBetEnabled) {
                    const endAt = _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.get('timerEnd');
                    const spins = _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.get('spinsAmount') ?? 0;
                    const now = Date.now();
                    if (!endAt || now >= +endAt) {
                        if (+spins >= 9) {
                            _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.set('timerEnd', now + 24 * 60 * 60 * 1000);
                            _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.remove('spinsAmount');
                            this.setShowHTSNotif(true);
                        }
                        else {
                            _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.set('spinsAmount', Number(spins) + 1);
                        }
                    }
                }
                this.nonce = this.nonce + 1;
                _components_vortex_VortexCanvasController__WEBPACK_IMPORTED_MODULE_11__/* .VortexCanvasController */ .$.invoke('stopSpin', state.symbol, state.bonusWin, enabled || this.skipAnimation ? 2 : 3);
                _components_olympus_OlympusCanvasController__WEBPACK_IMPORTED_MODULE_12__/* .OlympusCanvasController */ .y.invoke('stopSpin', state.symbol, state.bonusWin, enabled || this.skipAnimation ? 2 : 3);
                _components_vortexsafari_VortexSafariCanvasController__WEBPACK_IMPORTED_MODULE_13__/* .VortexSafariCanvasController */ .P.invoke('stopSpin', state.symbol, state.bonusWin, enabled || this.skipAnimation ? 2 : 3);
                _components_vortexcricket_VortexCricketCanvasController__WEBPACK_IMPORTED_MODULE_14__/* .VortexCricketCanvasController */ .e.invoke('stopSpin', state.symbol, state.bonusWin, enabled || this.skipAnimation ? 2 : 3);
                this.root.trackingCommon.startSession(this.roundId);
                this.root.trackingCommon.addBet({
                    amount: Number(this.amount),
                    id: this.roundId,
                }, false);
                this.root.freebetsCommon.listAdd({
                    index: 0,
                    freebet: this.isFreebetEnabled,
                });
                freebetActive?.left == 0 &&
                    !autocashout &&
                    setTimeout(() => {
                        listRemoveByIndex(0);
                        this.interrupGame();
                    }, this.gameConfig.game.duration * this.durationMultiplier);
                if (!this.gameHasProgress) {
                    listRemoveByIndex(0);
                }
                (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)({
                    action: 'bet_placed',
                    sid: this.root.profileCommon.profile.sid,
                    parameters: {
                        value: this.amount,
                        currency: this.root.profileCommon.profile.currency,
                        method: this.placeBetIsHeld ? 'hold' : this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                        multiplier: this.coefficient,
                        object: `bet_1.place`,
                        round_id: this.roundId,
                        id: this.roundId,
                    },
                });
                let bonusWinTimeout = null;
                if (payout) {
                    this.setPayout(payout);
                }
                if (coefficient) {
                    this.setCoefficent(coefficient);
                }
                if (result) {
                    this.setResult(result);
                }
                if (autocashout) {
                    if (state.exCollection.find((item) => item > 0)) {
                        setTimeout(() => {
                            this.setGameState({ ...state, exCollection: null });
                        }, this.gameConfig.game.duration * this.durationMultiplier - 1000);
                        setTimeout(() => {
                            updateFreebetsPayout({ index: 0, coefficient: data.coefficient });
                            listRemoveByIndex(0);
                        }, this.gameConfig.game.duration * this.durationMultiplier + 1000);
                    }
                    else {
                        updateFreebetsPayout({ index: 0, coefficient: data.coefficient });
                        listRemoveByIndex(0);
                    }
                }
                if (superBonusState) {
                    setTimeout(() => {
                        this.setSuperBonusState(superBonusState);
                        (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)({
                            action: 'bonus_game',
                            parameters: {
                                id: this.roundId,
                                round_id: this.roundId,
                                state: 'wheel',
                                bonus_multiplier: superBonusState.multiplier,
                                value: superBonusState?.multiplier * Number(this.amount),
                                currency: this.root.profileCommon.profile.currency,
                            },
                        });
                        (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)({
                            action: 'bet_closed',
                            parameters: {
                                id: this.roundId,
                                round_id: this.roundId,
                                method: this.placeBetIsHeld ? 'hold' : this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                                object: 'cashout',
                                value: this.amount,
                                currency: this.root.profileCommon.profile.currency,
                                wins: 1,
                                multiplier: this.coefficient,
                                bonus_multiplier: superBonusState.multiplier,
                                state: 'wheel',
                            },
                        });
                    }, this.gameConfig.game.duration);
                    const collection = [
                        this.gameState.collection[0] + 1,
                        this.gameState.collection[1],
                        this.gameState.collection[2],
                    ];
                    this.setGameState({
                        ...state,
                        collection: this.gameServerId === 'vortex' || this.gameServerId === 'vortexhalloween'
                            ? collection
                            : this.gameState.collection,
                    });
                    bonusWinTimeout = setTimeout(() => {
                        this.setGameState({ ...state, bonusWin: 0 });
                        this.setSuperBonusState(null);
                        bonusWinTimeout = null;
                    }, this.gameConfig.superBonusDuration);
                    setTimeout(() => {
                        this.setPlacebetProcessing(false);
                        if (this.placeBetIsHeld) {
                            this.placeBet();
                        }
                    }, Number(this.gameConfig?.superBonusDuration || +Number(this.gameConfig?.extraDelayAfterBonus || 0)) ?? 0);
                }
                else {
                    this.setGameState(state);
                }
                if (state.bonusWin && !autocashout && !state.superBonus) {
                    setTimeout(() => {
                        this.setGameState({ ...state, bonusWin: 0 });
                    }, this.gameConfig.game.duration * this.durationMultiplier);
                }
                if (data.roundId) {
                    this.prevRoundId = this.roundId;
                    this.setRoundId(data.roundId);
                }
                this.betIndex++;
                if (!bonusWinTimeout) {
                    setTimeout(() => {
                        this.setPlacebetProcessing(false);
                        if (this.placeBetIsHeld) {
                            this.placeBet(symbol);
                        }
                    }, this.gameConfig.game.duration * this.durationMultiplier + 300);
                }
                this.setPlacebetClicked(false);
            }
            catch (error) {
                console.log(error);
                this.setPlacebetProcessing(false);
                this.setPlacebetClicked(false);
                this.root.uiCommon.errorCodeResolver(error.response);
                this.root.freebetsCommon.listRemoveByIndex(0);
                this.retrieveGame();
                _components_vortex_VortexCanvasController__WEBPACK_IMPORTED_MODULE_11__/* .VortexCanvasController */ .$.invoke('stopSpin', 'SymbolNeutral', 0, 3);
                _components_olympus_OlympusCanvasController__WEBPACK_IMPORTED_MODULE_12__/* .OlympusCanvasController */ .y.invoke('stopSpin', 'SymbolNeutral', 0, 3);
                _components_vortexsafari_VortexSafariCanvasController__WEBPACK_IMPORTED_MODULE_13__/* .VortexSafariCanvasController */ .P.invoke('stopSpin', 'SymbolNeutral', 0, 3);
                _components_vortexcricket_VortexCricketCanvasController__WEBPACK_IMPORTED_MODULE_14__/* .VortexCricketCanvasController */ .e.invoke('stopSpin', 'SymbolNeutral', 0, 3);
                return error;
            }
        };
        this.retrieveAmount = () => {
            const { limit: { minBet, defaultBet }, profile: { currency }, } = this.root.profileCommon;
            const amount = _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.get(`saved_amount:${currency}`);
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
            _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.set(`saved_amount:${currency}`, String(amount));
            this.amount = String(amount);
        };
        this.handleStep = (gameState, canvasController) => {
            if (!gameState.superBonus) {
                if (gameState.exCollection) {
                    canvasController.invoke('setStep', gameState.exCollection);
                    this.cashoutTimeout && clearTimeout(this.cashoutTimeout);
                    this.cashoutTimeout = setTimeout(() => {
                        canvasController.invoke('setStep', gameState.collection);
                    }, 600);
                    return null;
                }
                const forcedState = gameState.bonusWin && gameState.symbol
                    ? gameState.collection.map((item, index) => {
                        if ((gameState.symbol === 'Symbol3' && index === 0) ||
                            (gameState.symbol === 'Symbol2' && index === 1) ||
                            (gameState.symbol === 'Symbol1' && index === 2))
                            return item + 1;
                        else {
                            return item;
                        }
                    })
                    : gameState.collection;
                if (this.cashoutProcessing) {
                    this.cashoutTimeout && clearTimeout(this.cashoutTimeout);
                    this.cashoutTimeout = setTimeout(() => {
                        canvasController.invoke('setStep', forcedState);
                    }, 600);
                }
                else {
                    canvasController.invoke('setStep', forcedState);
                }
            }
        };
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.makeObservable)(this);
        this.root = root;
        this.spinVersion = 'v2.0';
        console.log({ spinVersion: this.spinVersion });
        _components_vortexcricket_VortexCricketCanvasController__WEBPACK_IMPORTED_MODULE_14__/* .VortexCricketCanvasController */ .e.on('OnGameReady', () => {
            (0,mobx__WEBPACK_IMPORTED_MODULE_1__.runInAction)(() => {
                this.eventsAreReady = true;
            });
        });
        this.centrifuge = new (centrifuge__WEBPACK_IMPORTED_MODULE_3___default())((0,_api_vortex_config__WEBPACK_IMPORTED_MODULE_5__/* .config */ .$)().centrifuge || '', {});
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            const { profile: { splitTest }, } = this.root.profileCommon;
            if (splitTest?.variantValue === 'vortex_abc_new_math') {
                if (splitTest?.variantType === 'test') {
                    this.version = 'v2';
                }
                if (splitTest?.variantType === 'test2') {
                    this.version = 'v3';
                }
            }
            if (splitTest?.variantValue === 'vortex_alt_rtp') {
                if (splitTest?.variantType === 'test') {
                    this.version = 'f3';
                }
                if (splitTest?.variantType === 'test2') {
                    this.version = 'f4';
                }
            }
            if (gameConfig.gameServerId === 'vortexpowerplay') {
                this.version = 'vortexpowerplay';
            }
            this.retrieveAmount();
            await this.fetchSettings();
            await this.retrieveGame();
            if (this.root.freebetsCommon.freebetEnabled) {
                this.root.freebetsCommon.updateFreebetsData({
                    game: { 0: { amount: this.amount } },
                });
            }
            this.userLoading = true;
        });
        this.symbolAliases = {
            Symbol3: 'red',
            Symbol2: 'green',
            Symbol1: 'blue',
            SymbolNeutral: 'neutral',
            SymbolLoss: 'loss',
        };
        this.timers = [];
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId;
        this.gameServerTheme = gameConfig.gameServerTheme;
        this.userLoading = false;
        this.currentAmountId = gameConfig.defaultAmountId || 0;
        this.mockGame();
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: this.amount }];
        }, (index, { amount }) => {
            this.setAmount(Number(amount));
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => this.currentAmountId, () => {
            this.setAmount(this.amountsMap[this.currentAmountId] > this.root.profileCommon.profile.balance
                ? this.root.profileCommon.profile.balance
                : this.amountsMap[this.currentAmountId]);
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => [this.root.balanceCommon.balanceTimestamp, this.gameState], () => {
            this.autoCashoutTimeout && clearTimeout(this.autoCashoutTimeout);
            if (gameConfig.balance.mode !== 'ticketId')
                return null;
            if (!this.gameState.superBonus) {
                if (this.gameState.bonusWin) {
                    this.autoCashoutTimeout = setTimeout(() => {
                        this.root.balanceCommon.updateBalanceFromTicketId(this.prevRoundId);
                    }, gameConfig.balanceUpdateDefaultDelay ?? 3000);
                }
                else {
                    this.root.balanceCommon.updateBalanceFromTicketId(this.prevRoundId);
                }
            }
            else if (this.gameServerTheme === 'vortexsafari' && this.gameState.superBonus) {
                _components_vortexsafari_VortexSafariCanvasController__WEBPACK_IMPORTED_MODULE_13__/* .VortexSafariCanvasController */ .P.on('BonusRun', () => {
                    this.root.balanceCommon.updateBalanceFromTicketId(this.prevRoundId);
                });
            }
            else {
                if (this.gameServerTheme === 'vortex' ||
                    this.gameServerTheme === 'vortexhalloween' ||
                    this.gameServerTheme === 'vortexpowerplay' ||
                    this.gameServerTheme === 'vortexpowerkick') {
                    this.autoCashoutTimeout = setTimeout(() => {
                        this.root.balanceCommon.updateBalanceFromTicketId(this.prevRoundId);
                    }, gameConfig.balanceUpdateSuperBonusDelay ?? 5000);
                }
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => [this.root.balanceCommon.balanceTimestamp], () => {
            this.checkBalanceActual();
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => this.superBonusState, () => {
            if (this.superBonusState && this.gameServerTheme === 'ringsofolympus') {
                this.olympusBonusResult = {
                    superBonusState: this.superBonusState,
                    gameState: { ...this.gameState, bonusWin: gameConfig.defaultCoeffs?.Symbol3.at(-1) ?? 200 },
                };
            }
            else if (this.superBonusState && this.gameServerTheme === 'vortexsafari') {
                this.vortexSafariBonusResult = {
                    superBonusState: this.superBonusState,
                    gameState: { ...this.gameState, bonusWin: gameConfig.defaultCoeffs?.Symbol3.at(-1) ?? 200 },
                };
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => this.root.quickModeCommon.enabled, () => {
            _components_vortex_VortexCanvasController__WEBPACK_IMPORTED_MODULE_11__/* .VortexCanvasController */ .$.trigger('QuickModeEnabled', {
                quickMode: this.root.quickModeCommon.enabled,
            });
            _components_olympus_OlympusCanvasController__WEBPACK_IMPORTED_MODULE_12__/* .OlympusCanvasController */ .y.trigger('QuickModeEnabled', {
                quickMode: this.root.quickModeCommon.enabled,
            });
            _components_vortexsafari_VortexSafariCanvasController__WEBPACK_IMPORTED_MODULE_13__/* .VortexSafariCanvasController */ .P.trigger('QuickModeEnabled', {
                quickMode: this.root.quickModeCommon.enabled,
            });
            _components_vortexcricket_VortexCricketCanvasController__WEBPACK_IMPORTED_MODULE_14__/* .VortexCricketCanvasController */ .e.trigger('QuickModeEnabled', {
                quickMode: this.root.quickModeCommon.enabled,
            });
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => this.root.profileCommon?.limit?.minBet, () => this.setAmountsMap(this.root.profileCommon?.limit?.minBet, this.root.profileCommon?.limit?.maxBet));
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => [this.gameState.initial], () => {
            if (this.gameState.initial && !this.gameState.collection.find((item) => item > 0)) {
                this.root.freebetsCommon.setForcedDisabledFreebets(null);
            }
            else if (!this.gameState.initial && !this.root.freebetsCommon.freebetEnabled) {
                this.root.freebetsCommon.setForcedDisabledFreebets(true);
            }
            this.root.freebetsCommon.setIsGameInProgress(!this.gameState.initial);
            this.root.freebetsCommon.freebetEnabled &&
                this.root.freebetsCommon.setOnFreebetChange({
                    callback: this.interrupGame,
                    showConfirm: true,
                    additionalText: !this.gameState.initial && (0,i18next__WEBPACK_IMPORTED_MODULE_4__.t)('FREEBETS.LOSE_PROGRESS'),
                });
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => [this.root.freebetsCommon.freebetEnabled], () => {
            if (this.gameHasProgress && !this.root.freebetsCommon.freebetEnabled) {
                this.interrupGame();
                this.root.freebetsCommon.listRemoveByIndex(0);
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => [this.gameState], () => {
            this.updateCurrentCoefficient();
            this.updatePartialCoefficient();
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => [this.settingsLoaded, this.eventsAreReady], () => {
            if (this.eventsAreReady && this.settingsLoaded) {
                _components_vortexcricket_VortexCricketCanvasController__WEBPACK_IMPORTED_MODULE_14__/* .VortexCricketCanvasController */ .e.trigger('SendSettingsToCanvas', {
                    data: this.settings,
                });
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => [
            this.placebetProcessing,
            this.root.autobetCommon.autoBetEnabled,
            this.winBonusScreen,
            this.root.uiCommon.isOnline,
        ], () => {
            !this.placebetProcessing &&
                this.root.uiCommon.isOnline &&
                this.root.autobetCommon.autoBetEnabled &&
                !this.winBonusScreen &&
                this.placeBet();
        });
    }
    get winLevel() {
        if (!this.coefficient)
            return -1;
        let level = -1;
        for (let i = 0; i < this.winLevelList.length; i++) {
            if (this.coefficient >= this.winLevelList[i])
                level = i;
        }
        return level;
    }
    get gameHasProgress() {
        return !!this.gameState.collection.find((item) => item > 0);
    }
    get balanceChecked() {
        const { profileCommon: { profile: { balance }, }, } = this.root;
        return +this.amount * 3 > balance ? this.isBalanceActual : true;
    }
    get currentPayout() {
        return (0,_helpers_truncateDecimals__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)((0,_helpers_floor__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(Number(this.amount) * this.currentCoefficient) > this.root.profileCommon.limit.maxWin
            ? (0,_helpers_floor__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(Number(this.amount) + this.root.profileCommon.limit.maxWin)
            : (0,_helpers_floor__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(Number(this.amount) * this.currentCoefficient), this.root.profileCommon.profile.rounding);
    }
    get partialPayout() {
        return (0,_helpers_truncateDecimals__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)((0,_helpers_floor__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(Number(this.amount) * this.partialCoefficient) > this.root.profileCommon.limit.maxWin
            ? (0,_helpers_floor__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(Number(this.amount) + this.root.profileCommon.limit.maxWin)
            : (0,_helpers_floor__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(Number(this.amount) * this.partialCoefficient), this.root.profileCommon.profile.rounding);
    }
    get resultUpdater() {
        return `${this.gameState.symbol}${this.betIndex}`;
    }
    get lockedUi() {
        return !this.gameState.initial;
    }
    get lockedButtons() {
        const { uiCommon: { isOnline }, profileCommon: { profile: { token }, }, } = this.root;
        return !token || !this.roundId || !isOnline || !this.gameStarted;
    }
    get durationMultiplier() {
        const { fast, normal } = this.gameConfig.animationSpeedMultiplier;
        return this.root.quickModeCommon.enabled || this.skipAnimation ? fast : normal;
    }
    get isFreebetEnabled() {
        const { freebetsCommon: { freebetEnabled, forcedDisabledFreebets }, } = this.root;
        return freebetEnabled && !forcedDisabledFreebets;
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "version", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "messagesList", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "placeBetIsHeld", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "settings", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "settingsLoaded", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "placebetProcessing", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "placebetClicked", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "cashoutProcessing", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "roundId", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "prevRoundId", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "roundSeed", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "serverSeed", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "nonce", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "amount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "gameResult", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "result", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "payout", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "coefficient", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "multiplier", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "showBonusGame", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "skipAnimation", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "isBalanceActual", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "gameState", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "olympusBonusResult", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "vortexSafariBonusResult", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "cashoutTimeout", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "autoCashoutTimeout", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "hold2pinTimeout", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "showHTSNotif", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "winScreen", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "winBonusScreen", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "winLevelList", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "splitTest", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.computed
], VortexCommon.prototype, "winLevel", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "superBonusState", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "gameStarted", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "betIndex", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "currentCoefficient", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "currentCoefficientTimeout", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "partialCoefficient", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "partialCoefficientTimeout", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "currentAmountId", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "amountsMap", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], VortexCommon.prototype, "eventsAreReady", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.computed
], VortexCommon.prototype, "gameHasProgress", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.computed
], VortexCommon.prototype, "balanceChecked", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.computed
], VortexCommon.prototype, "currentPayout", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.computed
], VortexCommon.prototype, "partialPayout", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.computed
], VortexCommon.prototype, "resultUpdater", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.computed
], VortexCommon.prototype, "lockedUi", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.computed
], VortexCommon.prototype, "lockedButtons", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.computed
], VortexCommon.prototype, "durationMultiplier", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.computed
], VortexCommon.prototype, "isFreebetEnabled", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "checkBalanceActual", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setIsBalanceActual", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setPlacebetProcessing", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setPlacebetClicked", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setShowHTSNotif", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setSkipAnimation", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setCurrentAmountId", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setAmountsMap", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setMessagesList", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "updateMessagesList", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setPlaceBetIsHeld", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setShowBonusGame", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setCurrentCoefficient", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "updateCurrentCoefficient", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setPartialCoefficient", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "updatePartialCoefficient", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setWinScreen", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "showWinScreen", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "showBonusWinScreen", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setBonusWinScreen", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "fetchSettings", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setRoundId", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "interrupGame", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "createGame", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "retrieveGame", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "mockGame", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setGameState", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setResult", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setCoefficent", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setSuperBonusState", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setMultiplier", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setPayout", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "cashout", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "placeBet", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "retrieveAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "setAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], VortexCommon.prototype, "handleStep", void 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VortexCommon);


/***/ })

}]);