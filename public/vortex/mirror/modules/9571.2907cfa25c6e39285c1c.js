"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[4852,9571],{

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

/***/ 57855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* reexport */ Vortex2CanvasController)
});

// EXTERNAL MODULE: ./src/canvas/controller/Controller.ts
var controller_Controller = __webpack_require__(74852);
;// ./src/framework/components.vortex2/Vortex2CanvasController/Vortex2CanvasController.ts

class Controller extends controller_Controller["default"] {
}
const Vortex2CanvasController = new Controller();

;// ./src/framework/components.vortex2/Vortex2CanvasController/index.ts



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

/***/ 39571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_Vortex2Common)
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
;// ./src/framework/api/vortex2/config.ts

const config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
;// ./src/framework/api/vortex2/index.ts


const vortex2_api = (version = '') => {
    const protocol = config().api.includes('localhost') ? 'http' : 'https';
    const prefix = version ? `api/${version}` : 'api';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config().api}/${prefix}`,
    });
};
const getGameSettingsRequest = ({ version = '', ...params }) => vortex2_api(version).get('/games/settings', params);
const createGameRequest = ({ headers, version = '', ...params }) => vortex2_api(version).post('/games/create', params, { headers });
const retrieveGameRequest = ({ headers, version = '', ...params }) => vortex2_api(version).post(`/games/retrieve`, params, { headers });
const placeBetRequest = ({ headers, version = '', ...params }) => vortex2_api(version).post('/bets/place', params, { headers });
const stepRequest = ({ headers, version = '', ...params }) => vortex2_api(version).post('/bets/step', params, { headers });
const cashoutRequest = ({ headers, version = '', ...params }) => vortex2_api(version).post('/bets/cashout', params, { headers });
const gameInterruptRequest = ({ headers, version = '', ...params }) => vortex2_api(version).post('/games/freebets/interrupt', params, { headers });
const bonusCashoutRequest = ({ headers, version = '', ...params }) => vortex2_api(version).post('/bets/bonuscashout', params, { headers });
/* harmony default export */ const vortex2 = ((/* unused pure expression or super */ null && (vortex2_api)));

// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
// EXTERNAL MODULE: ./src/framework/helpers/formatHeaders.ts
var formatHeaders = __webpack_require__(738);
// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
// EXTERNAL MODULE: ./src/framework/components.vortex2/Vortex2CanvasController/index.ts + 1 modules
var Vortex2CanvasController = __webpack_require__(57855);
;// ./src/framework/store/Vortex2Common.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
const symbols = ['Symbol3', 'Symbol2', 'Symbol1'];
class Vortex2Common {
    constructor(root, gameConfig) {
        this.apiVersion = '';
        this.initialScene = null;
        this.isBonusSceneActive = false;
        this.canvasLoaded = false;
        this.assetsLoaded = false;
        this.bonusAssetsLoaded = false;
        this.spinBonusInProgress = false;
        this.settings = null;
        this.settingsState = null;
        this.placebetProcessing = false;
        this.cashoutProcessing = false;
        this.placeBetIsHeld = false;
        this.spinInProcess = false;
        this.roundId = localStorageHelper/* default */.A.get('roundId') || '';
        this.prevRoundIds = [];
        this.roundSeed = '';
        this.clientSeed = (0,index_js_.v4)();
        this.serverSeed = undefined;
        this.nonce = 1;
        this.amount = `1.00`;
        this.payout = 0;
        this.coefficient = 0;
        this.gameCreated = false;
        this.betPlaced = false;
        this.eventsAreReady = false;
        this.gameRetrieved = false;
        this.bonusStatus = { started: false, ended: false, type: null };
        this.preBonusAnimation = [];
        this.lockedCashout = false;
        this.showPopup = { animCashout: false, winPopup: false };
        this.notifMessage = null;
        this.cashoutAnimStatus = null;
        this.showHTSNotif = null;
        this.currentWheelState = null;
        this.forceSymbol = null;
        this.forceAmountOnRetrieve = null;
        this.gtmQueue = [];
        this.gameState = {
            multiplier: 0,
            bonusWin: 0,
            superBonusRoundId: null,
            collection: [0, 0, 0],
            symbol: 'Symbol3',
            cashable: false,
            initial: true,
        };
        this.superBonusGameState = null;
        this.superBonusRoundId = null;
        this.slotBonusRoundId = null;
        this.betIndex = 0;
        this.currentCoefficient = 0;
        this.partialCoefficient = 0;
        this.onGameReady = () => {
            (0,mobx_esm_js_.runInAction)(() => {
                this.eventsAreReady = true;
            });
            this.setCurrentWheelState('gameReady');
            Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('startSpin', false);
            Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('stopSpin', this.gameState.symbol, false, this.root.quickModeCommon.enabled ? 3 : 4, false);
        };
        this.onBonusSpinEnd = () => {
            Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('setBonusActiveCombination', {
                combo: this.gameState.bonusState?.data?.combo?.type,
                type: this.gameState.bonusState?.data?.combo?.symbol,
            });
        };
        this.onStopWheel = () => {
            this.setCurrentWheelState('wheelStopped');
            window.dataLayer.push(...(0,mobx_esm_js_.toJS)(this.gtmQueue));
            this.updateGtmQueue('rm');
            (0,mobx_esm_js_.runInAction)(() => {
                this.spinInProcess = false;
            });
            if (!this.bonusStatus.started && !this.bonusStatus.ended) {
                if (this.gameState.bonusState) {
                    switch (this.gameState.bonusState?.bonus) {
                        case 'Symbol1':
                            Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('switchToBonusGameOne', this.gameState.bonusState?.multiplier);
                            this.setSpinBonusInProgress(true);
                            this.setCashoutAnimStatus('startedBonus');
                            this.setBonusStatus({ started: true, ended: false, type: 'spin' });
                            break;
                        case 'Symbol2':
                            Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('switchScene', 'slotBonus');
                            this.setIsBonusSceneActive(true);
                            this.setBonusStatus({ started: true, ended: false, type: 'slot' });
                            break;
                    }
                }
                if (this.superBonusRoundId) {
                    Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('switchScene', 'clickBonus');
                    this.setIsBonusSceneActive(true);
                    this.setBonusStatus({ started: true, ended: false, type: 'mines' });
                }
            }
            (this.placeBetIsHeld || this.root.autobetCommon.autoBetEnabled) && !this.gameState.bonusState && this.placeBet();
        };
        this.onStopProgressBar = () => {
            this.setCurrentWheelState('stopProgressBar');
            this.updateCurrentCoefficient();
            this.updatePartialCoefficient();
            if (this.eventsAreReady) {
                this.gameState.collection.forEach((item, index) => {
                    if (item === this.settings.paytable[symbols[index]].length - 2) {
                        if (this.preBonusAnimation.includes(symbols[index]) && !this.bonusStatus.ended)
                            return null;
                        Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('startBonusIconAnimation', symbols[index]);
                        (0,mobx_esm_js_.runInAction)(() => {
                            this.preBonusAnimation = [...this.preBonusAnimation, symbols[index]];
                        });
                    }
                    else if (this.preBonusAnimation.length && this.preBonusAnimation.includes(symbols[index])) {
                        if (!this.preBonusAnimation.includes(symbols[index]))
                            return null;
                        Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('stopBonusIconAnimation', symbols[index]);
                        (0,mobx_esm_js_.runInAction)(() => {
                            this.preBonusAnimation = [...this.preBonusAnimation.filter((item) => item !== symbols[index])];
                        });
                    }
                });
            }
            if (this.bonusStatus.ended) {
                switch (this.bonusStatus.type) {
                    case 'slot':
                        if (!this.gameState.bonusState) {
                            this.setBonusStatus({ started: false, ended: false, type: null });
                            break;
                        }
                        const newState = { ...this.gameState };
                        newState.bonusState = null;
                        this.setGameState(newState);
                        break;
                    case 'spin':
                        (this.placeBetIsHeld || this.root.autobetCommon.autoBetEnabled) && this.placeBet();
                        break;
                    default:
                }
            }
        };
        this.changeCollection = (newState, delay, decrease) => {
            if (this.superBonusRoundId) {
                newState.collection = [
                    this.settings.paytable.Symbol3.length - 1,
                    this.gameState.collection[1],
                    this.gameState.collection[2],
                ];
            }
            else {
                let findIndex = null;
                if (newState.bonusState?.bonus === 'Symbol2')
                    findIndex = 1;
                if (newState.bonusState?.bonus === 'Symbol1')
                    findIndex = 2;
                newState.collection = newState.collection.map((item, index) => index === findIndex ? item + (decrease ? -1 : 1) : item);
            }
            this.eventsAreReady && Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('setStep', newState.collection, delay ?? null);
            return newState;
        };
        this.onBonusMinesReady = () => {
            if (this.superBonusGameState?.openedItems?.length) {
                this.superBonusGameState.openedItems.forEach((item, i) => {
                    const index = this.superBonusGameState.opened[i] || 0;
                    Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('setBonusMinesItem', index, item);
                });
            }
        };
        this.setGameState = (gameState, changeForcedCollection, customDelay = null) => {
            this.gameState = { ...this.gameState, ...gameState };
            if (changeForcedCollection) {
                this.changeCollection({ ...gameState }, customDelay ?? null);
            }
            else {
                this.eventsAreReady && Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('setStep', gameState.collection, customDelay ?? null);
            }
        };
        this.updateGtmQueue = (val) => {
            this.gtmQueue = val === 'rm' ? [] : [...this.gtmQueue, { event: 'ga4_interaction', ...val }];
        };
        this.setForceSymbol = (symbol) => {
            this.forceSymbol = symbol;
        };
        this.setShowHTSNotif = (val) => {
            this.showHTSNotif = val;
        };
        this.setSuperBonusRoundId = (superBonusRoundId) => {
            this.superBonusRoundId = superBonusRoundId;
        };
        this.setCashoutAnimStatus = (val) => {
            this.cashoutAnimStatus = val;
        };
        this.setShowPopup = (val) => {
            this.showPopup = { ...this.showPopup, ...val };
        };
        this.setBonusStatus = (status) => {
            this.bonusStatus = status;
        };
        this.setPlaceBetIsHeld = (placeBetIsHeld) => {
            this.placeBetIsHeld = placeBetIsHeld;
        };
        this.setCurrentWheelState = (val) => {
            this.currentWheelState = val;
        };
        this.setCurrentCoefficient = (currentCoefficient) => {
            this.currentCoefficient = currentCoefficient;
        };
        this.setNotifMessage = (message) => {
            this.notifMessage = message;
        };
        this.updateCurrentCoefficient = () => {
            if (!this.settings)
                return 0;
            const coefficient = this.gameState.collection.reduce((acc, index, i) => {
                const key = Object.keys(this.settings.paytable)[i];
                return acc + this.settings.paytable[key][index];
            }, 0);
            this.setCurrentCoefficient(coefficient);
        };
        this.setPartialCoefficient = (partialCoefficient) => {
            this.partialCoefficient = partialCoefficient;
        };
        this.updatePartialCoefficient = () => {
            if (!this.settings)
                return 0;
            const prevCoefficient = this.gameState.collection.reduce((acc, index, i) => {
                const key = Object.keys(this.settings.paytable)[i];
                const prevIndex = index ? index - 1 : 0;
                return acc + this.settings.paytable[key][prevIndex];
            }, 0);
            this.setPartialCoefficient(this.currentCoefficient - prevCoefficient);
        };
        this.fetchSettings = async () => {
            const { profile: { token, playerId }, } = this.root.profileCommon;
            try {
                const { data } = await getGameSettingsRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    version: this.apiVersion,
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    this.settings = data;
                    this.settingsState = 'loaded';
                });
            }
            catch (error) {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.settings = this.gameConfig.defaultSettings;
                    this.settingsState = 'error';
                });
                console.log('fetchSettings error:', error);
                return error;
            }
        };
        this.createGame = async () => {
            const { profile: { token, apiKey }, } = this.root.profileCommon;
            const collectionUrlParam = new URLSearchParams(window.location.search).get('collection');
            try {
                const { data } = await createGameRequest({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    version: this.apiVersion,
                    theme: this.gameServerTheme,
                    nonce: this.nonce,
                    clientSeed: this.clientSeed,
                    serverSeed: this.serverSeed,
                    ...(collectionUrlParam && { collection: collectionUrlParam }),
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    this.roundId = data.roundId;
                    this.gameCreated = true;
                    this.setGameState(data.state);
                    this.mockGame();
                });
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.roundId = null;
                this.gameCreated = false;
                return error;
            }
        };
        this.retrieveGame = async () => {
            const { profileCommon: { profile: { token, apiKey }, }, uiCommon: { setAlertList }, freebetsCommon: { freebetActive, setForcedDisabledFreebets }, } = this.root;
            try {
                const { data } = await retrieveGameRequest({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    theme: this.gameServerTheme,
                    version: this.apiVersion,
                });
                const { clientSeed, hash, nonce, state, freebetsId, superBonusGame, superBonusRoundId, bonusRoundId } = data;
                if (!clientSeed || !nonce) {
                    throw { clientSeed, hash, nonce };
                }
                else if (freebetsId === freebetActive?.id && freebetActive?.status === 'expired') {
                    throw 1;
                }
                this.setGameState({
                    ...data.state,
                    ...(data.bonusState && {
                        bonusState: { ...data.bonusState },
                    }),
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    this.roundId = data.roundId;
                    this.superBonusRoundId = superBonusRoundId;
                    this.superBonusGameState = superBonusGame;
                    this.gameCreated = true;
                    this.betPlaced = true;
                    this.clientSeed = clientSeed;
                    this.nonce = nonce;
                    this.gameRetrieved = true;
                    this.slotBonusRoundId = bonusRoundId;
                    this.forceAmountOnRetrieve = data.state?.amount;
                    this.setInitialScene(bonusRoundId || superBonusRoundId ? 'bonus' : 'field');
                    if (state.collection.find((item) => item > 0) && !freebetsId) {
                        setForcedDisabledFreebets(true);
                    }
                    if (state.amount) {
                        this.setAmount(state.amount);
                    }
                    this.mockGame();
                    setAlertList({
                        title: i18next_js_["default"].t('NOTIF.CONTINUE_ROUND'),
                        type: 'success',
                    });
                });
            }
            catch (error) {
                await this.createGame();
                this.setInitialScene('field');
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
        this.cashout = async (partial = false) => {
            const { profile: { token, playerId }, limit: { minBet }, } = this.root.profileCommon;
            if (!this.roundId)
                return;
            try {
                this.cashoutProcessing = true;
                const { data } = await cashoutRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    partial,
                    roundId: this.roundId,
                    minBetAmount: minBet,
                    version: this.apiVersion,
                });
                this.setGameState(data.state);
                (0,mobx_esm_js_.runInAction)(() => {
                    this.coefficient = data.coefficient;
                    this.payout = data.payout;
                    this.cashoutProcessing = false;
                    this.forceAmountOnRetrieve = null;
                    if (this.gameState.initial) {
                        this.betPlaced = false;
                    }
                    if (data.roundId) {
                        this.prevRoundIds = [...this.prevRoundIds, this.roundId];
                        this.roundId = data.roundId;
                    }
                });
                this.setShowPopup({ animCashout: false, winPopup: true });
                data.result === 'won' &&
                    this.isFreebetEnabled &&
                    this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: data.coefficient });
                this.isFreebetEnabled && this.root.freebetsCommon.listRemoveByIndex(0);
                this.updateGtmQueue({
                    action: 'bet_closed',
                    parameters: {
                        id: this.prevRoundIds.at(-1),
                        round_id: this.prevRoundIds.at(-1),
                        method: this.placeBetIsHeld ? 'hold' : this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                        object: 'cashout',
                        value: +this.amount,
                        currency: this.root.profileCommon.profile.currency,
                        wins: 1,
                        multiplier: data.coefficient,
                        state: '',
                    },
                });
                window.dataLayer.push(...(0,mobx_esm_js_.toJS)(this.gtmQueue));
                this.updateGtmQueue('rm');
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.cashoutProcessing = false;
                this.root.uiCommon.errorCodeResolver(error.response);
                return error;
            }
        };
        this.resetGame = () => {
            (0,mobx_esm_js_.runInAction)(() => {
                this.betPlaced = false;
                this.payout = null;
                this.coefficient = null;
            });
        };
        this.placeBet = async (symbol) => {
            const { profileCommon: { profile: { token, subPartnerId, currency, balance, apiKey }, }, uiCommon: { isMobile, showNotEnoughBalanceError, amountError, isOnline }, freebetsCommon: { freebetActive, freebetId, listRemoveByIndex }, quickModeCommon: { enabled }, autobetCommon: { autoBetEnabled, setAutoBetEnabled }, } = this.root;
            if (autoBetEnabled && (amountError || (freebetActive?.left - 1 === 0 && this.isFreebetEnabled))) {
                setAutoBetEnabled(false);
            }
            if (!this.roundId && isOnline) {
                this.retrieveGame();
                return null;
            }
            if (this.lockedButtons || this.lockedUi || !this.eventsAreReady)
                return null;
            !this.bonusStatus.started &&
                this.bonusStatus.ended &&
                this.setBonusStatus({ started: false, ended: false, type: null });
            if (!this.isFreebetEnabled &&
                balance !== null &&
                (balance <= 0 || balance < Number(this.amount) || balance < this.forceAmountOnRetrieve)) {
                showNotEnoughBalanceError();
                return null;
            }
            try {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.placebetProcessing = true;
                    this.spinInProcess = true;
                    this.lockedCashout = true;
                });
                Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('startSpin');
                this.setCurrentWheelState('spin');
                if (this.gameState.collection.find((item) => item > 0)) {
                    this.updateGtmQueue({
                        action: 'bet_closed',
                        parameters: {
                            id: this.prevRoundIds.at(-1) ?? this.roundId,
                            round_id: this.prevRoundIds.at(-1) ?? this.roundId,
                            method: this.placeBetIsHeld ? 'hold' : this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                            object: 'lost',
                            value: +this.amount,
                            currency: this.root.profileCommon.profile.currency,
                            multiplier: this.coefficient ?? this.gameState.multiplier,
                        },
                    });
                }
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
                    version: this.apiVersion,
                    roundId: this.roundId,
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    currency,
                    amount: Number(this.amount),
                    ...((symbol || this.forceSymbol) && { symbol: symbol ?? this.forceSymbol }),
                    ...(this.isFreebetEnabled && freebetId && { freebetsId: freebetId }),
                    ...(this.isFreebetEnabled && {
                        minCoefficient: this.gameConfig.freebets?.minCoeffToCashout ?? 1.01,
                        freebetsLeft: freebetActive.left - 1,
                    }),
                });
                const { state, result, payout, coefficient, bonusState, superBonusRoundId, superBonusGame, bonusRoundId } = data;
                if (!localStorageHelper/* default */.A.get('htsUsed') && !autoBetEnabled) {
                    const endAt = localStorageHelper/* default */.A.get('timerEnd');
                    const spins = localStorageHelper/* default */.A.get('spinsAmount') ?? 0;
                    const now = Date.now();
                    if (!endAt || now >= +endAt) {
                        if (+spins >= 9) {
                            localStorageHelper/* default */.A.set('timerEnd', now + 24 * 60 * 60 * 1000);
                            localStorageHelper/* default */.A.remove('spinsAmount');
                            this.setShowHTSNotif(true);
                        }
                        else {
                            localStorageHelper/* default */.A.set('spinsAmount', Number(spins) + 1);
                        }
                    }
                }
                this.isFreebetEnabled &&
                    this.root.freebetsCommon.listAdd({
                        index: 0,
                        freebet: this.isFreebetEnabled,
                    });
                freebetActive?.left == 0 && listRemoveByIndex(0);
                (0,mobx_esm_js_.runInAction)(() => {
                    payout && (this.payout = payout);
                    coefficient && (this.coefficient = coefficient);
                    this.betIndex++;
                    this.nonce++;
                    this.placebetProcessing = false;
                    this.betPlaced = true;
                    if (data.roundId) {
                        this.prevRoundIds = [...this.prevRoundIds, this.roundId];
                        this.roundId = data.roundId;
                    }
                    if (superBonusGame) {
                        this.superBonusGameState = superBonusGame;
                    }
                    if (bonusRoundId) {
                        this.slotBonusRoundId = bonusRoundId;
                    }
                    if (superBonusRoundId) {
                        this.superBonusRoundId = superBonusRoundId;
                    }
                    if (!bonusState && !superBonusRoundId) {
                        this.lockedCashout = false;
                    }
                });
                this.updateGtmQueue({
                    action: 'bet_placed',
                    sid: this.root.profileCommon.profile.sid,
                    parameters: {
                        value: Number(this.amount),
                        currency: this.root.profileCommon.profile.currency,
                        method: this.placeBetIsHeld ? 'hold' : this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                        object: `bet_1.place`,
                        round_id: this.prevRoundIds.at(-1) ?? this.roundId,
                        id: this.prevRoundIds.at(-1) ?? this.roundId,
                    },
                });
                if (bonusState?.bonus === 'Symbol1') {
                    this.updateGtmQueue({
                        action: 'bonus_game',
                        parameters: {
                            id: this.prevRoundIds.at(-1) ?? this.roundId,
                            round_id: this.prevRoundIds.at(-1) ?? this.roundId,
                            state: 'blue',
                            bonus_multiplier: coefficient,
                            value: payout,
                            currency: this.root.profileCommon.profile.currency,
                        },
                    });
                }
                if (state.symbol === 'SymbolLoss') {
                    this.updateGtmQueue({
                        action: 'bet_closed',
                        parameters: {
                            id: this.prevRoundIds.at(-1) ?? this.roundId,
                            round_id: this.prevRoundIds.at(-1) ?? this.roundId,
                            method: this.placeBetIsHeld ? 'hold' : this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                            object: 'lost',
                            value: +this.amount,
                            currency: this.root.profileCommon.profile.currency,
                            multiplier: coefficient ?? state.multiplier,
                        },
                    });
                }
                this.setGameState({ ...state, bonusState: bonusState }, !!(superBonusRoundId || bonusState));
                Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('stopSpin', state.symbol, !!bonusState, enabled ? 3 : 4);
                state.initial && this.resetGame();
            }
            catch (error) {
                console.log(error);
                this.placebetProcessing = false;
                this.root.uiCommon.errorCodeResolver(error.response);
                this.root.freebetsCommon.listRemoveByIndex(0);
                this.retrieveGame();
                Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('stopSpin', 'SymbolNeutral', false, 4);
                return error;
            }
        };
        this.onBonusMinesItemClick = async (index) => {
            const { profileCommon: { profile: { token, subPartnerId, apiKey }, }, uiCommon: { isMobile }, } = this.root;
            if (this.bonusStatus.ended ||
                this.superBonusGameState?.opened?.includes(index) ||
                this.placebetProcessing ||
                this.superBonusGameState?.finished)
                return null;
            if (!this.superBonusRoundId) {
                throw new Error('no gameId');
            }
            try {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.placebetProcessing = true;
                });
                const { data } = await stepRequest({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: apiKey,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                    }),
                    roundId: this.superBonusRoundId,
                    position: index,
                    version: this.apiVersion,
                });
                const { state, superBonusGame, payout, coefficient } = data;
                const newBonusGame = superBonusGame ? superBonusGame : state.bonusGame;
                function findDiff(prev, next) {
                    let res = 0;
                    for (const n of prev)
                        res ^= n;
                    for (const n of next)
                        res ^= n;
                    return res;
                }
                const prevOpenedItems = this.superBonusGameState?.openedItems || [];
                const diff = findDiff(prevOpenedItems, newBonusGame.openedItems);
                Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('setBonusMinesItem', index, diff, superBonusGame?.finished);
                (0,mobx_esm_js_.runInAction)(() => {
                    this.betIndex++;
                    this.superBonusGameState = newBonusGame;
                    this.placebetProcessing = false;
                    payout && (this.payout = payout);
                    coefficient && (this.coefficient = coefficient);
                });
                if (payout) {
                    this.updateGtmQueue({
                        action: 'bet_placed',
                        sid: this.root.profileCommon.profile.sid,
                        parameters: {
                            value: Number(this.amount),
                            currency: this.root.profileCommon.profile.currency,
                            method: this.placeBetIsHeld ? 'hold' : this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                            object: `bet_1.place`,
                            round_id: this.roundId,
                            id: this.roundId,
                        },
                    });
                    this.updateGtmQueue({
                        action: 'bonus_game',
                        parameters: {
                            id: this.roundId,
                            round_id: this.roundId,
                            state: 'red',
                            bonus_multiplier: coefficient,
                            value: payout,
                            currency: this.root.profileCommon.profile.currency,
                        },
                    });
                    this.updateGtmQueue({
                        action: 'bet_closed',
                        parameters: {
                            id: this.roundId,
                            round_id: this.roundId,
                            method: this.placeBetIsHeld ? 'hold' : this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                            object: 'cashout',
                            value: +this.amount,
                            currency: this.root.profileCommon.profile.currency,
                            wins: 1,
                            multiplier: coefficient,
                            state: 'red',
                        },
                    });
                }
            }
            catch (error) {
                console.log(error);
                this.placebetProcessing = false;
                this.root.uiCommon.errorCodeResolver(error.response);
                this.retrieveGame();
                Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('forceResetItem', index);
                return error;
            }
        };
        this.onBonusSlotEnd = async () => {
            const { profileCommon: { profile: { token, subPartnerId, apiKey }, }, uiCommon: { isMobile }, } = this.root;
            if (!this.slotBonusRoundId) {
                throw new Error('no bonusGameId');
            }
            try {
                const { data } = await bonusCashoutRequest({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: apiKey,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                    }),
                    roundId: this.slotBonusRoundId,
                    version: this.apiVersion,
                });
                const { state, roundId, payout, coefficient } = data;
                (0,mobx_esm_js_.runInAction)(() => {
                    payout && (this.payout = payout);
                    coefficient && (this.coefficient = coefficient);
                    if (roundId) {
                        this.prevRoundIds = [...this.prevRoundIds, this.roundId];
                        this.roundId = data.roundId;
                    }
                });
                this.setSpinBonusInProgress(false);
                this.setBonusStatus({ started: false, ended: true, type: 'slot' });
                this.updateGtmQueue({
                    action: 'bet_placed',
                    sid: this.root.profileCommon.profile.sid,
                    parameters: {
                        value: Number(this.amount),
                        currency: this.root.profileCommon.profile.currency,
                        method: this.placeBetIsHeld ? 'hold' : this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                        object: `bet_1.place`,
                        round_id: this.roundId,
                        id: this.roundId,
                    },
                });
                this.updateGtmQueue({
                    action: 'bonus_game',
                    parameters: {
                        id: this.roundId,
                        round_id: this.roundId,
                        state: 'green',
                        bonus_multiplier: coefficient,
                        value: payout,
                        currency: this.root.profileCommon.profile.currency,
                    },
                });
                this.updateGtmQueue({
                    action: 'bet_closed',
                    parameters: {
                        id: this.roundId,
                        round_id: this.roundId,
                        method: this.placeBetIsHeld ? 'hold' : this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                        object: 'cashout',
                        value: +this.amount,
                        currency: this.root.profileCommon.profile.currency,
                        wins: 1,
                        multiplier: this.coefficient,
                        state: 'green',
                    },
                });
            }
            catch (error) {
                console.log(error);
                this.setSpinBonusInProgress(false);
                this.retrieveGame();
                return error;
            }
        };
        this.getAmount = () => {
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
            localStorageHelper/* default */.A.set(`saved_amount:${currency}`, String(amount));
            this.amount = String(amount);
        };
        this.interrupGame = async () => {
            const { profile: { token, apiKey }, } = this.root.profileCommon;
            try {
                const { data } = await gameInterruptRequest({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    roundId: this.roundId,
                    version: this.apiVersion,
                });
                this.mockGame();
                this.setGameState(data.state);
                (0,mobx_esm_js_.runInAction)(() => {
                    this.roundId = data.roundId;
                });
            }
            catch (error) {
                console.log('fetchGame error:', error);
                return error;
            }
        };
        this.setCanvasLoaded = (value) => {
            this.canvasLoaded = value;
        };
        this.setAssetsLoaded = (value) => {
            this.assetsLoaded = value;
        };
        this.setBonusAssetsLoaded = (value) => {
            this.bonusAssetsLoaded = value;
        };
        this.setSpinBonusInProgress = (value) => {
            this.spinBonusInProgress = value;
        };
        this.setInitialScene = (scene) => {
            this.initialScene = scene;
        };
        this.setIsBonusSceneActive = (isBonusSceneActive) => {
            this.isBonusSceneActive = isBonusSceneActive;
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        canvasEvents.call(this);
        this.centrifuge = new (centrifuge_js_default())(config().centrifuge || '', {});
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            const { profile: { splitTest }, } = this.root.profileCommon;
            if (splitTest?.variantValue === 'vortex2_release' && splitTest?.variantType === 'test2') {
                this.apiVersion = 'f2';
            }
            this.root.trackingCommon.initGtmDataLayer();
            this.getAmount();
            await this.fetchSettings();
            await this.retrieveGame();
        });
        this.symbolAliases = {
            Symbol3: 'red',
            Symbol2: 'green',
            Symbol1: 'blue',
            SymbolNeutral: 'neutral',
            SymbolLoss: 'loss',
        };
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId;
        this.gameServerTheme = gameConfig.gameServerTheme;
        this.winTimeout = null;
        this.mockGame();
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: this.amount }];
        }, (index, { amount }) => {
            if (this.gameState.initial) {
                this.setAmount(Number(amount));
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({ colorTheme: this.root.uiCommon.colorTheme }), ({ colorTheme }) => {
            Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('setColorTheme', colorTheme);
        });
        (0,mobx_esm_js_.reaction)(() => [this.root.balanceCommon.balanceTimestamp, this.gameState, this.cashoutAnimStatus], () => {
            if (gameConfig.balance.mode !== 'ticketId' ||
                this.cashoutAnimStatus === 'startedBonus' ||
                (this.gameState.bonusState && this.gameState.bonusState.bonus === 'Symbol1'))
                return null;
            if (this.bonusStatus.ended && this.bonusStatus.type === 'slot') {
                this.root.balanceCommon.updateBalanceFromTicketId(this.roundId);
            }
            if (!this.superBonusRoundId) {
                const isUpdated = this.root.balanceCommon.updateBalanceFromTicketId(this.prevRoundIds.at(-1) ?? this.roundId);
                isUpdated
                    ? (this.prevRoundIds = this.prevRoundIds.slice(-1))
                    : this.root.balanceCommon.updateBalanceFromTicketId(this.prevRoundIds.at(-2) ?? this.roundId);
                this.setCashoutAnimStatus(null);
            }
        });
        (0,mobx_esm_js_.reaction)(() => this.root.quickModeCommon.enabled, () => {
            Vortex2CanvasController/* Vortex2CanvasController */.B.trigger('QuickModeEnabled', {
                quickMode: this.root.quickModeCommon.enabled,
            });
        });
        (0,mobx_esm_js_.reaction)(() => [this.settingsState, this.eventsAreReady], () => {
            if (this.eventsAreReady && this.settingsState) {
                Vortex2CanvasController/* Vortex2CanvasController */.B.trigger('SendSettingsToCanvas', {
                    data: this.settings,
                });
            }
        });
        (0,mobx_esm_js_.reaction)(() => this.root.autobetCommon.autoBetEnabled, () => {
            this.root.autobetCommon.autoBetEnabled && !this.spinInProcess && !this.lockedCashout && this.placeBet();
        });
        (0,mobx_esm_js_.reaction)(() => this.bonusStatus, () => {
            if (this.bonusStatus.started) {
                this.bonusStatus.type !== 'spin' && this.root.autobetCommon.setAutoBetEnabled(false);
            }
            if (this.bonusStatus.ended) {
                if (this.superBonusRoundId) {
                    Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('switchScene', 'field');
                    this.setIsBonusSceneActive(false);
                    this.setShowPopup({ animCashout: false, winPopup: true });
                    Vortex2CanvasController/* Vortex2CanvasController */.B.trigger('SendSettingsToCanvas', {
                        data: this.settings,
                    });
                    Vortex2CanvasController/* Vortex2CanvasController */.B.trigger('QuickModeEnabled', {
                        quickMode: this.root.quickModeCommon.enabled,
                    });
                    this.setGameState({ ...this.gameState }, true, 0);
                    this.setSuperBonusRoundId(null);
                    (0,mobx_esm_js_.runInAction)(() => {
                        this.spinInProcess = false;
                    });
                }
                else if (this.slotBonusRoundId) {
                    this.setShowPopup({ animCashout: false, winPopup: true });
                }
                else {
                    const newState = { ...this.gameState };
                    newState.bonusState = null;
                    this.setGameState(newState, false, 0);
                    this.setShowPopup({ animCashout: true, winPopup: false });
                    (0,mobx_esm_js_.runInAction)(() => {
                        this.lockedCashout = false;
                    });
                }
            }
        });
        (0,mobx_esm_js_.reaction)(() => this.showPopup, () => {
            if (this.showPopup.winPopup || this.showPopup.animCashout) {
                clearTimeout(this.winTimeout);
                this.winTimeout = null;
                this.winTimeout = setTimeout(() => {
                    this.setShowPopup({ animCashout: false, winPopup: false });
                    if (this.slotBonusRoundId) {
                        Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('switchScene', 'field');
                        this.setIsBonusSceneActive(false);
                        Vortex2CanvasController/* Vortex2CanvasController */.B.trigger('SendSettingsToCanvas', {
                            data: this.settings,
                        });
                        Vortex2CanvasController/* Vortex2CanvasController */.B.trigger('QuickModeEnabled', {
                            quickMode: this.root.quickModeCommon.enabled,
                        });
                        this.setGameState({ ...this.gameState, cashable: true }, true);
                        (0,mobx_esm_js_.runInAction)(() => {
                            this.slotBonusRoundId = null;
                            this.spinInProcess = false;
                        });
                    }
                    if (this.superBonusGameState?.finished) {
                        this.setGameState({
                            ...this.gameState,
                            cashable: this.gameState.collection.find((item) => item > 0) ? true : this.gameState.cashable,
                            superBonus: null,
                        }, false);
                        this.setBonusStatus({ started: false, ended: false, type: null });
                        (0,mobx_esm_js_.runInAction)(() => {
                            this.superBonusGameState = null;
                        });
                    }
                    (0,mobx_esm_js_.runInAction)(() => {
                        this.lockedCashout = false;
                    });
                }, this.showPopup.animCashout
                    ? 0
                    : this.superBonusGameState
                        ? gameConfig.bigWinDuration
                        : gameConfig.winDuration);
            }
        });
        (0,mobx_esm_js_.reaction)(() => [this.gameState.initial], () => {
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
                    additionalText: !this.gameState.initial && (0,i18next_js_.t)('FREEBETS.LOSE_PROGRESS'),
                });
        });
        (0,mobx_esm_js_.reaction)(() => [this.root.freebetsCommon.freebetEnabled], () => {
            !this.root.freebetsCommon.freebetEnabled &&
                this.gameState.collection.find((item) => item > 0) &&
                this.interrupGame();
        });
        (0,mobx_esm_js_.reaction)(() => [this.gameRetrieved, this.eventsAreReady], () => {
            if (this.eventsAreReady && this.gameRetrieved) {
                Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('startSpin', false);
                Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('stopSpin', this.gameState.symbol, false, this.root.quickModeCommon.enabled ? 3 : 4, false);
                if (this.superBonusRoundId && this.superBonusGameState) {
                    Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('setStep', [
                        this.settings.paytable.Symbol3.length - 1,
                        this.gameState.collection[1],
                        this.gameState.collection[2],
                    ]);
                }
                else if (this.slotBonusRoundId) {
                    Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('setStep', [
                        this.gameState.collection[0],
                        this.settings.paytable.Symbol2.length - 1,
                        this.gameState.collection[2],
                    ]);
                }
                else {
                    Vortex2CanvasController/* Vortex2CanvasController */.B.invoke('setStep', this.gameState.collection);
                }
                (0,mobx_esm_js_.runInAction)(() => {
                    this.gameRetrieved = false;
                });
            }
        });
        (0,mobx_esm_js_.reaction)(() => [this.root.uiCommon.isOnline], () => {
            if (this.root.uiCommon.isOnline &&
                this.root.autobetCommon.autoBetEnabled &&
                (this.currentWheelState === 'wheelStopped' ||
                    this.currentWheelState === 'gameReady' ||
                    this.currentWheelState === 'stopProgressBar')) {
                this.placeBet();
            }
        });
        (0,mobx_esm_js_.reaction)(() => [this.placeBetIsHeld], () => {
            if (this.placeBetIsHeld) {
                localStorageHelper/* default */.A.set('htsUsed', true);
                localStorageHelper/* default */.A.remove('spinsAmount');
            }
        });
    }
    get currentPayout() {
        return (0,truncateDecimals/* default */.A)((0,floor/* default */.A)(Number(this.amount) * this.currentCoefficient) > this.root.profileCommon.limit.maxWin
            ? (0,floor/* default */.A)(Number(this.amount) + this.root.profileCommon.limit.maxWin)
            : (0,floor/* default */.A)(Number(this.amount) * this.currentCoefficient), this.root.profileCommon.profile.rounding);
    }
    get partialPayout() {
        return (0,truncateDecimals/* default */.A)((0,floor/* default */.A)(Number(this.amount) * this.partialCoefficient) > this.root.profileCommon.limit.maxWin
            ? (0,floor/* default */.A)(Number(this.amount) + this.root.profileCommon.limit.maxWin)
            : (0,floor/* default */.A)(Number(this.amount) * this.partialCoefficient), this.root.profileCommon.profile.rounding);
    }
    get lockedUi() {
        const { uiCommon: { isOnline }, profileCommon: { profile: { token }, }, } = this.root;
        return !token || !this.roundId || !isOnline;
    }
    get lockedButtons() {
        return (this.placebetProcessing ||
            this.cashoutProcessing ||
            this.showPopup.winPopup ||
            (this.bonusStatus.started && !this.bonusStatus.ended) ||
            !this.eventsAreReady);
    }
    get isFreebetEnabled() {
        const { freebetsCommon: { freebetEnabled, forcedDisabledFreebets }, } = this.root;
        return freebetEnabled && !forcedDisabledFreebets;
    }
    get isSceneReady() {
        return ((this.initialScene === 'bonus' && this.bonusAssetsLoaded) ||
            (this.initialScene === 'field' && this.eventsAreReady));
    }
}
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "apiVersion", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "initialScene", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "isBonusSceneActive", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "canvasLoaded", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "assetsLoaded", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "bonusAssetsLoaded", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "spinBonusInProgress", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "settings", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "settingsState", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "placebetProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "cashoutProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "placeBetIsHeld", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "spinInProcess", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "roundId", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "prevRoundIds", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "serverSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "gameCreated", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "betPlaced", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "eventsAreReady", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "gameRetrieved", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "bonusStatus", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "preBonusAnimation", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "lockedCashout", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "showPopup", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "notifMessage", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "cashoutAnimStatus", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "showHTSNotif", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "currentWheelState", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "forceSymbol", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "forceAmountOnRetrieve", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "gtmQueue", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "gameState", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "superBonusGameState", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "superBonusRoundId", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "slotBonusRoundId", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "betIndex", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "currentCoefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], Vortex2Common.prototype, "partialCoefficient", void 0);
__decorate([
    mobx_esm_js_.computed
], Vortex2Common.prototype, "currentPayout", null);
__decorate([
    mobx_esm_js_.computed
], Vortex2Common.prototype, "partialPayout", null);
__decorate([
    mobx_esm_js_.computed
], Vortex2Common.prototype, "lockedUi", null);
__decorate([
    mobx_esm_js_.computed
], Vortex2Common.prototype, "lockedButtons", null);
__decorate([
    mobx_esm_js_.computed
], Vortex2Common.prototype, "isFreebetEnabled", null);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setGameState", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "updateGtmQueue", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setForceSymbol", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setShowHTSNotif", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setSuperBonusRoundId", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setCashoutAnimStatus", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setShowPopup", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setBonusStatus", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setPlaceBetIsHeld", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setCurrentWheelState", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setCurrentCoefficient", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setNotifMessage", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "updateCurrentCoefficient", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setPartialCoefficient", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "updatePartialCoefficient", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "fetchSettings", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "createGame", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "retrieveGame", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "mockGame", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "cashout", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "resetGame", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "placeBet", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "getAmount", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "interrupGame", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setAssetsLoaded", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setBonusAssetsLoaded", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setSpinBonusInProgress", void 0);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setInitialScene", void 0);
__decorate([
    mobx_esm_js_.computed
], Vortex2Common.prototype, "isSceneReady", null);
__decorate([
    mobx_esm_js_.action
], Vortex2Common.prototype, "setIsBonusSceneActive", void 0);
/* harmony default export */ const store_Vortex2Common = (Vortex2Common);
const canvasEvents = function () {
    Vortex2CanvasController/* Vortex2CanvasController */.B.on('eventCanvasLoaded', () => {
        this.setCanvasLoaded(true);
    });
    Vortex2CanvasController/* Vortex2CanvasController */.B.on('OnAssetsFullyLoaded', () => {
        this.setAssetsLoaded(true);
    });
    Vortex2CanvasController/* Vortex2CanvasController */.B.on('OnBonusAssetsLoaded', () => {
        this.setBonusAssetsLoaded(true);
    });
    Vortex2CanvasController/* Vortex2CanvasController */.B.on('OnBonusGameOneEnd', () => {
        this.setBonusStatus({ started: false, ended: true, type: 'spin' });
        this.setSpinBonusInProgress(false);
    });
    Vortex2CanvasController/* Vortex2CanvasController */.B.on('OnBonusSlotEnd', () => {
        this.onBonusSlotEnd();
    });
    Vortex2CanvasController/* Vortex2CanvasController */.B.on('OnBonusMinesEnd', () => {
        this.setBonusStatus({ started: false, ended: true, type: null });
    });
    Vortex2CanvasController/* Vortex2CanvasController */.B.on('OnGameReady', () => {
        this.onGameReady();
    });
    Vortex2CanvasController/* Vortex2CanvasController */.B.on('OnStopSpin', () => {
        this.onStopWheel();
    });
    Vortex2CanvasController/* Vortex2CanvasController */.B.on('OnBonusMinesItemClick', ({ index }) => {
        this.onBonusMinesItemClick(index);
    });
    Vortex2CanvasController/* Vortex2CanvasController */.B.on('OnStopProgressBar', () => {
        this.onStopProgressBar();
    });
    Vortex2CanvasController/* Vortex2CanvasController */.B.on('OnBonusMinesReady', () => {
        this.onBonusMinesReady();
    });
    Vortex2CanvasController/* Vortex2CanvasController */.B.on('OnBonusSlotReady', () => { });
    Vortex2CanvasController/* Vortex2CanvasController */.B.on('OnBonusSlotStopSpin', () => {
        this.onBonusSpinEnd();
    });
    Vortex2CanvasController/* Vortex2CanvasController */.B.on('OnBonusMinesButtonClick', () => {
        this.setNotifMessage((0,i18next_js_.t)('VORTEX2.NOTIF.BONUS'));
    });
};


/***/ })

}]);