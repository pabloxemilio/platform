"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[1179,2302,4852],{

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

/***/ 69604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ WheelState)
/* harmony export */ });
var WheelState;
(function (WheelState) {
    WheelState["Idle"] = "idle";
    WheelState["Spinning"] = "spinning";
    WheelState["Stopping"] = "stopping";
    WheelState["Stopped"] = "stopped";
    WheelState["BonusActive"] = "bonusActive";
    WheelState["OpenBox"] = "openBox";
    WheelState["BonusWheelStop"] = "bonusWheelStop";
    WheelState["BonusClose"] = "bonusClose";
})(WheelState || (WheelState = {}));


/***/ }),

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

/***/ 99850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* reexport */ MystecoCanvasController)
});

// EXTERNAL MODULE: ./src/canvas/controller/Controller.ts
var controller_Controller = __webpack_require__(74852);
;// ./src/framework/components.mysteco/MystecoCanvasController/MystecoCanvasController.ts

class Controller extends controller_Controller["default"] {
}
const MystecoCanvasController = new Controller();

;// ./src/framework/components.mysteco/MystecoCanvasController/index.ts



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

/***/ 82302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   I: () => (/* binding */ shortNumber)
/* harmony export */ });
const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B', 'N', 'D', 'H', 'O'];
const smartRound = (num, digits) => {
    const factor = Math.pow(10, digits);
    return Math.round(num * factor) / factor;
};
const trimTrailingZeros = (str) => {
    return str
        .replace(/(\.\d*?[1-9])0+$/, '$1')
        .replace(/\.0+$/, '')
        .replace(/\.?$/, '');
};
function shortNumber(number = 0, trunc = 2, roundFromLength = 8) {
    const fullStr = number.toFixed(trunc);
    if (fullStr.length <= roundFromLength) {
        return fullStr;
    }
    const absNumber = Math.abs(number);
    let tier = Math.floor(Math.log10(absNumber) / 3);
    tier = Math.min(tier, SI_SYMBOL.length - 1);
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;
    const rounded = smartRound(scaled, trunc);
    let roundedStr = rounded.toFixed(trunc);
    roundedStr = trimTrailingZeros(roundedStr);
    return `${roundedStr}${SI_SYMBOL[tier]}`;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shortNumber);


/***/ }),

/***/ 61179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_MystecoCommon)
});

// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var index_js_ = __webpack_require__(75364);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/mysteco/config.ts

const config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

;// ./src/framework/api/mysteco/index.ts


const mysteco_api = () => {
    const protocol = config().api.includes('localhost') ? 'http' : 'https';
    return index_js_["default"].create({
        baseURL: `${protocol}://${config().api}/api`,
    });
};
const getSettingsRequest = ({ headers }) => mysteco_api().get('/games/settings', { headers });
const createGameRequest = ({ headers, ...params }) => mysteco_api().post('/games/create', params, { headers });
const placeBetRequest = ({ headers, ...params }) => mysteco_api().post('/bets/place', params, { headers });
const stepRequest = ({ headers, ...params }) => mysteco_api().post('/bets/step', params, { headers });
const retrieveGameRequest = ({ headers, ...params }) => mysteco_api().post(`/games/retrieve`, params, { headers });
/* harmony default export */ const mysteco = ((/* unused pure expression or super */ null && (mysteco_api)));

// EXTERNAL MODULE: ./src/canvas/controller/types/mysteco/types.ts
var types = __webpack_require__(69604);
// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
// EXTERNAL MODULE: consume shared module (default) uuid@^9.0.0 (strict) (fallback: ./node_modules/uuid/dist/esm-browser/index.js)
var esm_browser_index_js_ = __webpack_require__(81682);
// EXTERNAL MODULE: consume shared module (default) centrifuge@^2.7.6 (strict) (fallback: ./node_modules/centrifuge/dist/centrifuge.js)
var centrifuge_js_ = __webpack_require__(68239);
var centrifuge_js_default = /*#__PURE__*/__webpack_require__.n(centrifuge_js_);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: ./src/framework/api/mines/config.ts
var mines_config = __webpack_require__(29533);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/formatHeaders.ts
var formatHeaders = __webpack_require__(738);
// EXTERNAL MODULE: ./src/framework/components.mysteco/MystecoCanvasController/index.ts + 1 modules
var MystecoCanvasController = __webpack_require__(99850);
;// ./src/framework/components.mysteco/utils/index.ts
function getWinAudioIndex(coef) {
    switch (true) {
        case coef >= 2.5 && coef <= 12:
            return 0;
        case coef >= 24 && coef <= 48:
            return 1;
        case coef >= 100:
            return 2;
    }
}

// EXTERNAL MODULE: consume shared module (default) i18next@^23.2.3 (strict) (fallback: ./node_modules/i18next/dist/esm/i18next.js)
var i18next_js_ = __webpack_require__(49953);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
;// ./src/framework/store/MystecoCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class MystecoCommon {
    constructor(root, gameConfig) {
        this.nonce = 1;
        this.amount = '1.00';
        this.freebetAmount = null;
        this.clientSeed = (0,esm_browser_index_js_.v4)();
        this.roundId = null;
        this.betIndex = 0;
        this.betLoading = false;
        this.gameCreateLoading = false;
        this.gameCreated = false;
        this.gameStarted = false;
        this.payout = 0;
        this.coefficient = 0;
        this.realCoefficient = 0;
        this.gameSettings = null;
        this.canvasIsReady = false;
        this.settingsAreReady = false;
        this.cardsActive = [];
        this.cardResult = null;
        this.gameResult = null;
        this.currentWheelState = types/* WheelState */.j.Idle;
        this.bonusGameStep = 1;
        this.isBigBonus = false;
        this.smallBonusResult = null;
        this.hideControls = false;
        this.notifText = null;
        this.prevGameState = null;
        this.currentAmountId = null;
        this.defaultAmountId = 0;
        this.amountsMap = [1, 2, 3, 5, 7, 10, 20, 30, 50, 70, 100, 200, 500, 750, 1000, null];
        this.soundTimeouts = [];
        this.winTimeout = null;
        this.showCenterPopup = false;
        this.animateCards = false;
        this.playAudioResult = () => {
            const { playAudio } = this.root.audioCommon;
            if (this.gameResult === 'won') {
                const index = getWinAudioIndex(this.coefficient);
                playAudio(this.gameConfig.sounds.winSounds[index]);
            }
            else {
                playAudio(this.gameConfig.sounds.loseSound);
            }
        };
        this.resetSoundTimeouts = () => {
            this.soundTimeouts.forEach((timeout) => {
                clearTimeout(timeout);
                timeout = null;
            });
            this.soundTimeouts = [];
        };
        this.setHideControls = (val) => {
            this.hideControls = val;
        };
        this.setCurrentAmountId = (val) => {
            this.currentAmountId = val;
        };
        this.setDefaultAmountId = (val) => {
            this.defaultAmountId = val;
        };
        this.setAnimateCards = (val) => {
            this.animateCards = val;
        };
        this.setCurrentWheelState = (val) => {
            this.currentWheelState = val;
        };
        this.setShowCenterPopup = (val) => {
            this.showCenterPopup = val;
        };
        this.setNotifText = (val) => {
            this.notifText = val;
        };
        this.addCardsActive = (addItem) => {
            const newCards = [...this.cardsActive];
            const item = newCards.find((item) => item.item === addItem.item);
            item ? (item.amount = ((0,floor/* floor */.R)(item.amount * 100) + (0,floor/* floor */.R)(addItem.amount * 100)) / 100) : newCards.push(addItem);
            this.cardsActive = [...newCards];
        };
        this.resetCardsActive = () => {
            this.cardsActive = [];
        };
        this.increaseX2CardsActive = () => {
            this.cardsActive = [...this.cardsActive].map((item) => {
                return { amount: (item.amount = (0,floor/* floor */.R)(item.amount * 100 * 2) / 100), item: item.item };
            });
        };
        this.betAllCardsActive = () => {
            const newCards = [...this.cardsActive];
            this.gameConfig.availablePrizes.forEach((item) => {
                const elem = newCards.find((innerItem) => innerItem.item === item);
                elem
                    ? (elem.amount = ((0,floor/* floor */.R)(elem.amount * 100) + (0,floor/* floor */.R)(Number(this.freebetAmount ?? this.amount) * 100)) / 100)
                    : newCards.push({ item: item, amount: Number(this.freebetAmount ?? this.amount) });
            });
            this.cardsActive = [...newCards];
        };
        this.setAmountsMap = (values, minBet, maxBet) => {
            if (!minBet || !values || !maxBet)
                return [];
            const newArr = values.map((item) => (item === null ? maxBet : (0,floor/* floor */.R)(item * minBet)));
            return newArr;
        };
        this.retrieveAmount = () => {
            const { limit: { minBet, defaultBet }, profile: { currency }, } = this.root.profileCommon;
            const amount = localStorageHelper/* default */.A.get(`saved_amount:${currency}`);
            if (amount && !isNaN(Number(amount))) {
                this.setAmount(+amount);
            }
            else if (defaultBet) {
                this.setAmount(defaultBet);
            }
            else {
                this.setAmount(minBet * 10);
            }
            const newIndex = this.amountsMap.findIndex((item) => item === +amount);
            this.setDefaultAmountId(newIndex !== -1 ? newIndex : this.gameConfig.defaultAmountId);
        };
        this.setAmount = (amount) => {
            const { profile: { currency }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.set(`saved_amount:${currency}`, String(amount));
            this.amount = String(amount);
        };
        this.setCanvasIsReady = (val) => {
            this.canvasIsReady = val;
        };
        this.setSettingsAreReady = (val) => {
            this.settingsAreReady = val;
        };
        this.setGameStarted = (val) => {
            this.gameStarted = val;
        };
        this.retrieveGame = async () => {
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
                });
                if (data.state) {
                    (0,mobx_esm_js_.runInAction)(() => {
                        this.roundId = data.roundId;
                        this.gameCreated = true;
                        this.nonce = data.nonce;
                        this.isBigBonus = true;
                        this.bonusGameStep = data.state.bonusGame?.step + 1;
                        this.prevGameState = data.state.bonusGame;
                    });
                }
                setAlertList({
                    title: i18next_js_["default"].t('NOTIF.CONTINUE_ROUND'),
                    type: 'success',
                    duration: 6000
                });
            }
            catch (error) {
                await this.createGame();
                return error;
            }
        };
        this.handleClickOnPopup = async () => {
            const { audioCommon: { playAudio }, autobetCommon: { autoBetEnabled }, uiCommon: { isMobile }, } = this.root;
            this.gameResult = 'won';
            MystecoCanvasController/* MystecoCanvasController */.b.invoke('hidePopup', this.cardResult?.item ? this.cardResult?.item >= 100 : true);
            playAudio(this.gameConfig.sounds.bonusWin2);
            const t = setTimeout(() => {
                this.setHideControls(false);
            }, isMobile ? 500 : 200);
            this.soundTimeouts.push(t);
            if (!this.isBigBonus && !this.smallBonusResult) {
                this.resetGame();
                autoBetEnabled && this.placeBet(true);
            }
            this.isFreebetEnabled &&
                this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: this.realCoefficient });
            this.isFreebetEnabled && this.root.freebetsCommon.listRemoveByIndex(0);
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
                const response = await getSettingsRequest({
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
                this.gameSettings = response.data;
            }
            catch (error) {
                throw error;
            }
        };
        this.resetGame = () => {
            (0,mobx_esm_js_.runInAction)(() => {
                this.cardResult = null;
                this.gameResult = null;
                this.coefficient = null;
                this.payout = null;
                this.gameStarted = false;
                this.bonusGameStep = 1;
                this.isBigBonus = false;
                this.smallBonusResult = null;
            });
        };
        this.createGame = async () => {
            const { profileCommon: { profile: { token, playerId }, }, } = this.root;
            if (this.gameCreateLoading)
                return null;
            try {
                this.gameCreateLoading = true;
                const { data: { roundId }, } = await createGameRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    theme: this.gameServerTheme,
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    this.gameCreateLoading = false;
                    this.roundId = roundId;
                    this.gameCreated = true;
                });
                return roundId;
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.root.uiCommon.errorCodeResolver(error.response);
                (0,mobx_esm_js_.runInAction)(() => {
                    this.gameCreated = false;
                    this.gameCreateLoading = false;
                });
                return error;
            }
        };
        this.placeBet = async (autoBet) => {
            const { profileCommon: { profile: { token, subPartnerId, currency, apiKey, balance }, }, uiCommon: { isMobile, showNotEnoughBalanceError }, autobetCommon: { setAutoBetEnabled, autoBetsAmount, setAutoBetsAmount }, freebetsCommon: { freebetActive, freebetId }, } = this.root;
            if (!Number(this.amount) || this.gameStarted || !this.gameCreated)
                return null;
            if (!this.isFreebetEnabled && balance !== null && balance <= 0) {
                showNotEnoughBalanceError();
                return null;
            }
            if (autoBet) {
                if (autoBetsAmount <= 0) {
                    setAutoBetEnabled(false);
                    return null;
                }
                setAutoBetsAmount(autoBetsAmount - 1 + '');
                setAutoBetEnabled(true);
            }
            const { search } = document.location;
            const urlParams = new URLSearchParams(search);
            const mock = urlParams.get('mock');
            if (this.showCenterPopup) {
                clearTimeout(this.winTimeout);
                this.winTimeout = null;
                MystecoCanvasController/* MystecoCanvasController */.b.invoke('hideWinCenterWheel');
                this.setShowCenterPopup(false);
            }
            MystecoCanvasController/* MystecoCanvasController */.b.invoke('startSpin');
            MystecoCanvasController/* MystecoCanvasController */.b.invoke('showCenterNotifText', i18next_js_["default"].t('PANDA_BAO.STATUSBAR_1'));
            try {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.betLoading = true;
                    this.gameStarted = true;
                });
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
                    currency,
                    selected: this.cardsActive,
                    theme: this.gameServerTheme,
                    ...(mock && { mockedItem: +mock }),
                    ...(this.isFreebetEnabled && freebetId && { freebetsId: freebetId }),
                });
                this.root.tournamentsCommon?.addBet &&
                    this.root.tournamentsCommon.addBet({
                        amount: Number(this.totalAmount),
                    });
                this.isFreebetEnabled &&
                    this.root.freebetsCommon.listAdd({
                        index: 0,
                        freebet: this.isFreebetEnabled,
                    });
                const arr = [];
                const pattern = [2.5, 12, 48, 1000, 4, 4.8, 24, 100];
                pattern.forEach((item) => {
                    const card = this.cardsActive.find((innerItem) => innerItem.item === item);
                    arr.push(card ? card.amount : 0);
                });
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_placed',
                    sid: this.root.profileCommon.profile.sid,
                    parameters: {
                        value: this.totalAmount,
                        currency: this.root.profileCommon.profile.currency,
                        method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                        object: `bet_1.place`,
                        round_id: this.roundId,
                        id: this.roundId,
                        variant: arr,
                        version: arr.filter((item) => item > 0).length,
                    },
                });
                if (!data.state?.bonusGame) {
                    if (data.state?.miniGame) {
                        (0,gtmDataLayerPush/* default */.A)({
                            action: 'bonus_game',
                            parameters: {
                                id: this.roundId,
                                round_id: this.roundId,
                                state: 'wheel',
                                bonus_multiplier: data.state.miniGame.multiplier,
                                value: data.payout,
                                currency: this.root.profileCommon.profile.currency,
                            },
                        });
                    }
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'bet_closed',
                        parameters: {
                            id: this.roundId,
                            round_id: this.roundId,
                            method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                            object: data.result === 'won' ? 'cashout' : 'lost',
                            value: this.totalAmount,
                            currency: this.root.profileCommon.profile.currency,
                            wins: data.result === 'won' ? 1 : 0,
                            multiplier: data.coefficient,
                            ...(data.state?.miniGame && {
                                bonus_multiplier: data.state.miniGame.multiplier,
                            }),
                        },
                    });
                }
                (0,mobx_esm_js_.runInAction)(() => {
                    if (data.state?.bonusGame) {
                        this.cardResult = { item: data.state.item, offset: data.state.offset };
                        this.isBigBonus = true;
                    }
                    else if (data.state?.miniGame) {
                        this.cardResult = { item: data.state.item, offset: data.state.offset };
                        this.smallBonusResult = { item: data.state.miniGame.offset };
                        this.payout = data.payout;
                        this.coefficient = data.state.miniGame.multiplier;
                    }
                    else {
                        this.cardResult = data.state;
                        this.gameResult = data.result;
                        this.coefficient = data.state.item;
                        this.payout = data.payout;
                        this.gameCreated = false;
                        this.gameStarted = false;
                    }
                    this.betLoading = false;
                    this.betIndex += 1;
                    this.realCoefficient = data.coefficient;
                });
                MystecoCanvasController/* MystecoCanvasController */.b.invoke('stopSpin', data.state.offset, data.result === 'won' || !!data.state?.bonusGame);
                if (autoBet && this.isFreebetEnabled && freebetActive.left - 1 < 0) {
                    setAutoBetEnabled(false);
                }
            }
            catch (error) {
                this.setGameStarted(false);
                console.log('game error:', error);
                this.root.freebetsCommon.listRemoveByIndex(0);
                this.root.uiCommon.errorCodeResolver(error.response);
                MystecoCanvasController/* MystecoCanvasController */.b.invoke('stopSpin', this.gameSettings.availablePrizes[1], false);
            }
        };
        this.onBonusItemClick = async (item) => {
            const { profileCommon: { profile: { token, subPartnerId, apiKey, currencySign, rounding }, }, uiCommon: { isMobile, isOnline }, autobetCommon: { autoBetEnabled }, audioCommon: { playAudio }, } = this.root;
            if (this.betLoading || this.gameResult === 'won' || this.prevGameState?.positions?.includes(item) || !isOnline) {
                return null;
            }
            try {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.betLoading = true;
                });
                const { data } = await stepRequest({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: apiKey,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: autoBetEnabled,
                        }),
                    }),
                    roundId: this.roundId,
                    step: this.bonusGameStep,
                    position: item,
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    this.betLoading = false;
                    this.bonusGameStep += 1;
                    playAudio(this.gameConfig.sounds.bigBonusOpen);
                    if (data.state?.bonusGame?.finished) {
                        this.coefficient = data.state.bonusGame.coefficient;
                        this.payout = data.payout;
                        this.gameResult = data.result;
                        MystecoCanvasController/* MystecoCanvasController */.b.invoke('setTextToBox', currencySign + (0,shortNumber/* shortNumber */.I)(data.payout, rounding));
                        playAudio(this.gameConfig.sounds.bigBonusCombo);
                        (0,gtmDataLayerPush/* default */.A)({
                            action: 'bonus_game',
                            parameters: {
                                id: this.roundId,
                                round_id: this.roundId,
                                state: 'mines',
                                bonus_multiplier: data.coefficient,
                                value: data.payout,
                                currency: this.root.profileCommon.profile.currency,
                            },
                        });
                        (0,gtmDataLayerPush/* default */.A)({
                            action: 'bet_closed',
                            parameters: {
                                id: this.roundId,
                                round_id: this.roundId,
                                method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                                object: 'cashout',
                                value: this.totalAmount,
                                currency: this.root.profileCommon.profile.currency,
                                wins: 1,
                                multiplier: data.coefficient,
                                bonus_multiplier: data.state.bonusGame.coefficient,
                            },
                        });
                    }
                });
                MystecoCanvasController/* MystecoCanvasController */.b.invoke('showBonusItemIcon', data.state?.bonusGame?.opened?.at(-1));
            }
            catch (error) {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.betLoading = false;
                });
                console.log('game error:', error);
                this.root.uiCommon.errorCodeResolver(error.response);
            }
        };
        this.updateBalance = () => {
            this.root.balanceCommon.updateBalanceFromTicketId(this.roundId);
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        canvasEvents.call(this);
        this.centrifuge = new (centrifuge_js_default())((0,mines_config/* config */.$)().centrifuge || '', {
            debug: (0,bootstrap.GET_ENV)().NODE_ENV === 'development',
        });
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.getGameSettings();
            this.retrieveAmount();
            await this.retrieveGame();
        });
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'mysteco';
        this.gameServerTheme = gameConfig.gameServerTheme || 'default';
        this.mockGame();
        (0,mobx_esm_js_.reaction)(() => this.currentAmountId, () => {
            this.setAmount(this.amountsMap[this.currentAmountId] > this.root.profileCommon.profile.balance
                ? this.root.profileCommon.profile.balance
                : this.amountsMap[this.currentAmountId]);
        });
        (0,mobx_esm_js_.reaction)(() => this.root.profileCommon?.limit?.minBet, () => {
            this.amountsMap = this.setAmountsMap(this.gameConfig.amountsMapValues, this.root.profileCommon?.limit?.minBet, this.root.profileCommon?.limit?.maxBet);
        });
        (0,mobx_esm_js_.reaction)(() => this.currentWheelState, async () => {
            const { audioCommon: { stopMusicPlaylistItem, playAudio, playMusicPlaylistItem, stopMusicFadePlaylistItem }, autobetCommon: { autoBetEnabled }, profileCommon: { profile: { currencySign, rounding }, }, } = this.root;
            switch (this.currentWheelState) {
                case types/* WheelState */.j.Stopped:
                    this.resetSoundTimeouts();
                    if (this.isBigBonus || this.smallBonusResult) {
                        stopMusicPlaylistItem(this.gameConfig.sounds.mainMusic);
                        playAudio(this.gameConfig.sounds.winSounds.at(-1));
                        const ti = setTimeout(() => {
                            playMusicPlaylistItem(this.gameConfig.sounds.bigBonusMusic);
                        }, 2500);
                        this.soundTimeouts.push(ti);
                    }
                    else {
                        this.playAudioResult();
                        this.updateBalance();
                        this.createGame();
                        if (this.gameResult === 'won') {
                            clearTimeout(this.winTimeout);
                            this.winTimeout = null;
                            if (this.coefficient >= 24) {
                                this.setHideControls(true);
                                MystecoCanvasController/* MystecoCanvasController */.b.invoke('showPopup', 'bigWin', `x${this.coefficient}`, currencySign + (0,shortNumber/* shortNumber */.I)(this.payout, rounding), i18next_js_["default"].t('COMMON.PRESS_ANYWHERE'));
                            }
                            else {
                                MystecoCanvasController/* MystecoCanvasController */.b.invoke('showCenterNotifText', '');
                                MystecoCanvasController/* MystecoCanvasController */.b.invoke('showWinCenterWheel', i18next_js_["default"].t('MINES.YOU_WIN'), `x${this.coefficient}`, currencySign + (0,shortNumber/* shortNumber */.I)(this.payout, rounding));
                                this.setShowCenterPopup(true);
                                this.isFreebetEnabled &&
                                    this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: this.realCoefficient });
                                this.isFreebetEnabled && this.root.freebetsCommon.listRemoveByIndex(0);
                                (0,mobx_esm_js_.runInAction)(() => {
                                    this.winTimeout = setTimeout(() => {
                                        this.setShowCenterPopup(false);
                                        MystecoCanvasController/* MystecoCanvasController */.b.invoke('hideWinCenterWheel');
                                        MystecoCanvasController/* MystecoCanvasController */.b.invoke('showCenterNotifText', i18next_js_["default"].t('COMMON.ACCEPTING_BETS'));
                                    }, gameConfig.winTimeout);
                                });
                            }
                        }
                        else if (!this.smallBonusResult && !this.isBigBonus) {
                            MystecoCanvasController/* MystecoCanvasController */.b.invoke('showCenterNotifText', i18next_js_["default"].t('COMMON.ACCEPTING_BETS'));
                            this.isFreebetEnabled && this.root.freebetsCommon.listRemoveByIndex(0);
                        }
                    }
                    break;
                case types/* WheelState */.j.Idle:
                    if (this.isBigBonus) {
                        if (this.gameResult !== 'won') {
                            MystecoCanvasController/* MystecoCanvasController */.b.invoke('switchToClickBonus');
                            this.setHideControls(true);
                        }
                        return null;
                    }
                    if (this.smallBonusResult) {
                        if (this.gameResult !== 'won') {
                            MystecoCanvasController/* MystecoCanvasController */.b.invoke('switchToBonusWheel', this.smallBonusResult.item, i18next_js_["default"].t('MINES.YOU_WIN'), currencySign + (0,shortNumber/* shortNumber */.I)(this.payout, rounding));
                            this.setHideControls(true);
                        }
                        return null;
                    }
                    if ((this.coefficient < 24 && this.gameResult === 'won') || this.gameResult !== 'won') {
                        this.resetGame();
                        autoBetEnabled && this.placeBet(true);
                    }
                    break;
                case types/* WheelState */.j.OpenBox:
                    playAudio(this.gameConfig.sounds.bonusWin1);
                    stopMusicFadePlaylistItem(this.gameConfig.sounds.bigBonusMusic, 2500);
                    const ti = setTimeout(() => {
                        playMusicPlaylistItem(this.gameConfig.sounds.mainMusic);
                    }, 2500);
                    this.soundTimeouts.push(ti);
                    MystecoCanvasController/* MystecoCanvasController */.b.invoke('showPopup', this.coefficient >= 100 ? 'bigWin' : 'totalWin', this.coefficient >= 100 ? `x${this.coefficient}` : i18next_js_["default"].t('COMMON.BONUS_WIN'), currencySign + (0,shortNumber/* shortNumber */.I)(this.payout, rounding), i18next_js_["default"].t('COMMON.PRESS_ANYWHERE'));
                    break;
                case types/* WheelState */.j.BonusWheelStop:
                    playAudio(this.gameConfig.sounds.bonusWin1);
                    stopMusicFadePlaylistItem(this.gameConfig.sounds.bigBonusMusic, 2500);
                    const t = setTimeout(() => {
                        playMusicPlaylistItem(this.gameConfig.sounds.mainMusic);
                    }, 2500);
                    this.soundTimeouts.push(t);
                    MystecoCanvasController/* MystecoCanvasController */.b.invoke('showPopup', this.coefficient >= 100 ? 'bigWin' : 'totalWin', this.coefficient >= 100 ? `x${this.coefficient}` : i18next_js_["default"].t('COMMON.BONUS_WIN'), currencySign + (0,shortNumber/* shortNumber */.I)(this.payout, rounding), i18next_js_["default"].t('COMMON.PRESS_ANYWHERE'));
                    break;
                case types/* WheelState */.j.BonusClose:
                    this.updateBalance();
                    await this.createGame();
                    clearTimeout(this.winTimeout);
                    this.winTimeout = null;
                    MystecoCanvasController/* MystecoCanvasController */.b.invoke('switchToWheel');
                    MystecoCanvasController/* MystecoCanvasController */.b.invoke('showCenterNotifText', '');
                    MystecoCanvasController/* MystecoCanvasController */.b.invoke('showWinCenterWheel', i18next_js_["default"].t('MINES.YOU_WIN'), `x${this.coefficient}`, currencySign + (0,shortNumber/* shortNumber */.I)(this.payout, rounding));
                    this.setShowCenterPopup(true);
                    this.resetGame();
                    (0,mobx_esm_js_.runInAction)(() => {
                        this.winTimeout = setTimeout(() => {
                            this.setShowCenterPopup(false);
                            MystecoCanvasController/* MystecoCanvasController */.b.invoke('hideWinCenterWheel');
                            MystecoCanvasController/* MystecoCanvasController */.b.invoke('showCenterNotifText', i18next_js_["default"].t('COMMON.ACCEPTING_BETS'));
                            autoBetEnabled && this.placeBet(true);
                        }, this.gameConfig.winTimeout * (autoBetEnabled ? 0.25 : 1));
                    });
                    break;
                default:
            }
        });
        (0,mobx_esm_js_.reaction)(() => this.root.uiCommon.isOnline, () => {
            if (this.root.uiCommon.isOnline && !this.gameCreated) {
                this.createGame();
            }
            if (!this.root.uiCommon.isOnline && this.root.autobetCommon.autoBetEnabled) {
                this.root.autobetCommon.setAutoBetEnabled(false);
            }
        });
        (0,mobx_esm_js_.reaction)(() => this.root.profileCommon.profile.balance, () => {
            if (this.totalAmount > this.root.profileCommon.profile.balance && !this.isFreebetEnabled) {
                this.resetCardsActive();
                this.root.autobetCommon.autoBetEnabled && this.root.autobetCommon.setAutoBetEnabled(false);
            }
        });
        (0,mobx_esm_js_.reaction)(() => this.root.freebetsCommon.freebetsSuccessIndexList.includes(0), () => {
            if (!this.root.freebetsCommon.freebetsSuccessIndexList.includes(0)) {
                (0,mobx_esm_js_.runInAction)(() => (this.freebetAmount = null));
            }
        });
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: null }];
        }, (index, { amount }) => {
            this.freebetAmount = amount;
        });
        (0,mobx_esm_js_.reaction)(() => [this.settingsAreReady, this.gameSettings], () => {
            this.settingsAreReady &&
                this.gameSettings &&
                MystecoCanvasController/* MystecoCanvasController */.b.invoke('setSettings', this.gameSettings);
        });
        (0,mobx_esm_js_.reaction)(() => this.canvasIsReady, () => {
            if (this.isBigBonus) {
                MystecoCanvasController/* MystecoCanvasController */.b.invoke('switchToClickBonus');
                this.setHideControls(true);
                this.prevGameState.positions.length > 0 &&
                    this.prevGameState.positions.forEach((item, index) => {
                        MystecoCanvasController/* MystecoCanvasController */.b.invoke('showBonusItemIcon', this.prevGameState.opened[index], item);
                    });
            }
        });
    }
    get lockedUi() {
        return (this.gameStarted ||
            this.betLoading ||
            !this.canvasIsReady ||
            this.currentWheelState !== types/* WheelState */.j.Idle ||
            !this.gameCreated ||
            !this.root.uiCommon.isOnline ||
            this.hideControls);
    }
    get totalAmount() {
        const amount = (0,floor/* floor */.R)(this.cardsActive.reduce((total, item) => total + item.amount, 0));
        return amount;
    }
    get lockedCards() {
        return ((this.totalAmount + Number(this.amount) > this.root.profileCommon.profile.balance && !this.isFreebetEnabled) ||
            this.totalAmount + Number(this.amount) > this.root.profileCommon?.limit?.maxBet ||
            (this.cardsActive.length >= 1 && this.isFreebetEnabled));
    }
    get outOfBalance() {
        return this.totalAmount + Number(this.amount) > this.root.profileCommon.profile.balance;
    }
    get lockedButtonAll() {
        const nextTotalAmount = (this.gameConfig.availablePrizes.length * (0,floor/* floor */.R)(Number(this.amount) * 100)) / 100 + this.totalAmount;
        return (nextTotalAmount > this.root.profileCommon.profile.balance ||
            nextTotalAmount > this.root.profileCommon?.limit?.maxBet ||
            this.isFreebetEnabled);
    }
    get lockedButtonX2() {
        return ((0,floor/* floor */.R)(this.totalAmount * 100 * 2) / 100 >= this.root.profileCommon.profile.balance ||
            (0,floor/* floor */.R)(this.totalAmount * 100 * 2) / 100 > this.root.profileCommon?.limit?.maxBet ||
            this.isFreebetEnabled);
    }
    get isFreebetEnabled() {
        const { freebetsCommon: { freebetEnabled, forcedDisabledFreebets }, } = this.root;
        return freebetEnabled && !forcedDisabledFreebets;
    }
}
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "freebetAmount", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "roundId", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "betIndex", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "betLoading", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "gameCreateLoading", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "gameCreated", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "gameStarted", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "realCoefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "gameSettings", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "canvasIsReady", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "settingsAreReady", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "cardsActive", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "cardResult", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "currentWheelState", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "bonusGameStep", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "isBigBonus", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "smallBonusResult", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "hideControls", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "notifText", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "prevGameState", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "currentAmountId", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "defaultAmountId", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "amountsMap", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "soundTimeouts", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "winTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "showCenterPopup", void 0);
__decorate([
    mobx_esm_js_.observable
], MystecoCommon.prototype, "animateCards", void 0);
__decorate([
    mobx_esm_js_.computed
], MystecoCommon.prototype, "lockedUi", null);
__decorate([
    mobx_esm_js_.computed
], MystecoCommon.prototype, "totalAmount", null);
__decorate([
    mobx_esm_js_.computed
], MystecoCommon.prototype, "lockedCards", null);
__decorate([
    mobx_esm_js_.computed
], MystecoCommon.prototype, "outOfBalance", null);
__decorate([
    mobx_esm_js_.computed
], MystecoCommon.prototype, "lockedButtonAll", null);
__decorate([
    mobx_esm_js_.computed
], MystecoCommon.prototype, "lockedButtonX2", null);
__decorate([
    mobx_esm_js_.computed
], MystecoCommon.prototype, "isFreebetEnabled", null);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "resetSoundTimeouts", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "setHideControls", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "setCurrentAmountId", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "setDefaultAmountId", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "setAnimateCards", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "setCurrentWheelState", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "setShowCenterPopup", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "setNotifText", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "addCardsActive", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "resetCardsActive", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "increaseX2CardsActive", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "betAllCardsActive", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "setAmountsMap", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "retrieveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "setCanvasIsReady", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "setSettingsAreReady", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "setGameStarted", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "retrieveGame", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "handleClickOnPopup", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "mockGame", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "getGameSettings", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "resetGame", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "createGame", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "placeBet", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "onBonusItemClick", void 0);
__decorate([
    mobx_esm_js_.action
], MystecoCommon.prototype, "updateBalance", void 0);
/* harmony default export */ const store_MystecoCommon = (MystecoCommon);
const canvasEvents = function () {
    MystecoCanvasController/* MystecoCanvasController */.b.on('OnCanvasInit', () => {
        this.setCanvasIsReady(true);
        MystecoCanvasController/* MystecoCanvasController */.b.invoke('showCenterNotifText', i18next_js_["default"].t('COMMON.ACCEPTING_BETS'));
    });
    MystecoCanvasController/* MystecoCanvasController */.b.on('OnSettingsInit', () => {
        this.setSettingsAreReady(true);
    });
    MystecoCanvasController/* MystecoCanvasController */.b.on('OnChangeStateWheel', ({ state }) => {
        this.setCurrentWheelState(state);
    });
    MystecoCanvasController/* MystecoCanvasController */.b.on('OnBonusItemClick', ({ item }) => {
        this.onBonusItemClick(item);
    });
    MystecoCanvasController/* MystecoCanvasController */.b.on('OnPopupClickEvent', () => {
        this.handleClickOnPopup();
    });
};


/***/ })

}]);