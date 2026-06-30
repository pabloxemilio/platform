"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[6014],{

/***/ 40558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ GameLevel),
/* harmony export */   q: () => (/* binding */ ChickenAnimSpeed)
/* harmony export */ });
var GameLevel;
(function (GameLevel) {
    GameLevel["Easy"] = "easy";
    GameLevel["Medium"] = "medium";
    GameLevel["Hard"] = "hard";
    GameLevel["Extreme"] = "extreme";
})(GameLevel || (GameLevel = {}));
var ChickenAnimSpeed;
(function (ChickenAnimSpeed) {
    ChickenAnimSpeed["Fast"] = "fast";
    ChickenAnimSpeed["Normal"] = "normal";
})(ChickenAnimSpeed || (ChickenAnimSpeed = {}));


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

/***/ 13217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: () => (/* reexport */ chickenzapCanvasController)
});

;// ./src/canvas/controller/types/chickenzap/Controller.ts
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

;// ./src/framework/components.chickenzap/ChickenzapCanvasController/ChickenzapCanvasController.ts

class Controller extends CanvasController {
}
const chickenzapCanvasController = new Controller();

;// ./src/framework/components.chickenzap/ChickenzapCanvasController/index.ts



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

/***/ 76014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_ChickenzapCommon)
});

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
;// ./src/framework/api/chicken/config.ts

const config_config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

;// ./src/framework/api/chicken/index.ts


const chicken_api = (version = '') => {
    const protocol = config_config().api.includes('localhost') ? 'http' : 'https';
    const prefix = version ? `api/${version}` : 'api';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config_config().api}/${prefix}`,
    });
};
const getGameSettingsRequest = ({ version = '', ...params }) => chicken_api(version).get(`/games/settings${params.rtp ? `?rtp=${params.rtp}` : ''}`, params);
const createBetRequest = ({ headers, version, ...params }) => chicken_api(version).post('/games/create', params, { headers });
const placeBetRequest = ({ headers, version, ...params }) => chicken_api(version).post('/bets/place', params, { headers });
const retrieveGameRequest = ({ headers, version, ...params }) => chicken_api(version).post(`/games/retrieve`, params, { headers });
const cashoutRequest = ({ headers, version, ...params }) => chicken_api(version).post('/bets/cashout', params, { headers });
const setCommonStorage = ({ headers, version, ...params }) => chicken_api(version).post('/common/storage', { ...params, ttl: params.ttl || 259200 }, { headers });
const updateCommonStorage = ({ headers, version, ...params }) => chicken_api(version).put('/common/storage', { ...params, ttl: params.ttl || 259200 }, { headers });
/* harmony default export */ const chicken = ((/* unused pure expression or super */ null && (chicken_api)));

// EXTERNAL MODULE: ./src/framework/components.chickenzap/ChickenzapCanvasController/index.ts + 2 modules
var ChickenzapCanvasController = __webpack_require__(13217);
// EXTERNAL MODULE: ./src/canvas/controller/types/chickenzap/types.ts
var types = __webpack_require__(40558);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
;// ./src/framework/store/ChickenzapCommon.ts
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
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
(0,mobx_esm_js_.configure)({
    enforceActions: 'never',
});
const GameLevelTypes = {
    0: types/* GameLevel */.J.Easy,
    1: types/* GameLevel */.J.Medium,
    2: types/* GameLevel */.J.Hard,
    3: types/* GameLevel */.J.Extreme,
};
class ChickenzapCommon {
    constructor(root, gameConfig) {
        this.winBalanceTimeoutRef = null;
        this.nonce = 1;
        this.roundNonce = 1;
        this.amount = '1.00';
        this.clientSeed = (0,index_js_.v4)();
        this.roundId = null;
        this.lostRounds = 0;
        this.rounds = 0;
        this.skin = 'default';
        this.isWinBalancePending = false;
        this.preWinBalance = 0;
        this.isOnlinePrev = true;
        this.isAutoStart = false;
        this.isDisabledBetBtn = false;
        this.isActiveWonModal = false;
        this.isActiveBonusModal = false;
        this.isLoadingPlaceBet = false;
        this.isTurboBet = false;
        this.isBetButtonPressed = false;
        this.isRoundError = false;
        this.islostRound = false;
        this.isModalTimeToLifeDone = false;
        this.gameResult = null;
        this.gameWonResult = null;
        this.gameStatus = 'waiting';
        this.defaultBalanceDelay = null;
        this.version = '';
        this.step = 0;
        this.gameLevel = types/* GameLevel */.J.Easy;
        this.gameSettings = {};
        this.retrieveGameData = null;
        this.isRoundProcessing = false;
        this.isGameCreated = false;
        this.isRoundStarted = false;
        this.isStepProcessing = false;
        this.isStepnimationProcessing = false;
        this.isCanvasLoaded = false;
        this.isPreloadedDone = false;
        this.isDisabledControls = false;
        this.isWinAnimationCompleted = false;
        this.isLostSession = false;
        this.isLastStepIsFinished = false;
        this.isWinPopupAnimationCompleted = false;
        this.isActiveWinPopup = false;
        this.isRetrieveRound = false;
        this.levelData = false;
        this.isNewLevelOffer = false;
        this.isCashoutProcessing = false;
        this.isCashoutErorr = false;
        this.isCanvasAppIsReady = false;
        this.isProfileReady = false;
        this.isWinPopupAnimation = false;
        this.sessionLevel = 1;
        this.sessionLevelData = null;
        this.gameWinResult = null;
        this.stepWinResult = null;
        this.modalConfig = {
            duration: 2000,
            type: 'base',
            audio: 'win',
        };
        this.bestPreviousWins = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
        };
        this.isFirstRender = false;
        this.liveCashouts = {
            index: 0,
            payout: 0,
            currency: 'usd',
            name: '',
            bet: 0,
        };
        this.placebetTimestamp = null;
        this.lastRandomsSoundIds = [];
        this.setLiveCashouts = (data) => {
            this.liveCashouts = {
                index: this.liveCashouts.index + 1,
                payout: data.w,
                currency: data.c,
                name: data.p,
                bet: data.b,
            };
        };
        this.setIsFirstRender = (value) => {
            this.isFirstRender = value;
        };
        this.hideWinPopup = () => {
            this.setActiveWinPopup(false);
            setTimeout(() => {
                ChickenzapCanvasController/* chickenzapCanvasController */.x.invoke('hideWinPopup');
            }, 10);
            this.setWinPopupAnimationCompleted(false);
        };
        this.setBestPreviousWins = (step) => {
            if (this.bestPreviousWins[this.sessionLevel] < step) {
                this.bestPreviousWins = {
                    ...this.bestPreviousWins,
                    [this.sessionLevel]: step,
                };
                localStorageHelper/* default */.A.set('bestPreviousWins', JSON.stringify(this.bestPreviousWins));
            }
        };
        this.setRoundProcessing = (value) => {
            this.isRoundProcessing = value;
        };
        this.setWinPopupAnimation = (value) => {
            this.isWinPopupAnimation = value;
        };
        this.clearWinBalanceTimeout = () => {
            if (this.winBalanceTimeoutRef) {
                clearTimeout(this.winBalanceTimeoutRef);
                this.winBalanceTimeoutRef = null;
            }
            this.isWinBalancePending = false;
        };
        this.getCurretSessionLevelData = (level) => {
            if (!this.sessionLevelData)
                return null;
            if (!Array.isArray(this.sessionLevelData[level]))
                return null;
            return {
                difficulty: this.sessionLevelData[level][0],
                listCoefficients: this.sessionLevelData[level][1] || [],
            };
        };
        this.setSessionLevel = (level) => {
            this.sessionLevel = level;
            localStorageHelper/* default */.A.set('sessionLevel', level);
        };
        this.setPreloadedDone = (value) => {
            this.isPreloadedDone = value;
        };
        this.changeSessionLevel = async (level) => {
            this.setDisableControls(true);
            this.setSessionLevel(level);
            const curretSessionLevelData = this.getCurretSessionLevelData(this.sessionLevel);
            if (curretSessionLevelData) {
                await this.startGame(Number(curretSessionLevelData.difficulty));
            }
            await delay(200);
            (0,mobx_esm_js_.runInAction)(() => {
                this.setDisableControls(false);
            });
        };
        this.setCanvasLoaded = (value) => {
            this.isCanvasLoaded = value;
        };
        this.setDisableControls = (value) => {
            this.isDisabledControls = value;
        };
        this.setStepnimationProcessing = (value) => {
            this.isStepnimationProcessing = value;
        };
        this.setWinAnimationCompleted = (value) => {
            this.isWinAnimationCompleted = value;
        };
        this.setLostSession = (value) => {
            this.isLostSession = value;
        };
        this.setLastStepIsFinished = (value) => {
            this.isLastStepIsFinished = value;
        };
        this.setWinPopupAnimationCompleted = (value) => {
            this.isWinPopupAnimationCompleted = value;
        };
        this.setActiveWinPopup = (value) => {
            this.isActiveWinPopup = value;
        };
        this.setLostRound = (value) => {
            this.islostRound = value;
        };
        this.setNewLevelOffer = (value) => {
            if (localStorageHelper/* default */.A.get('isNewLevelOffer') === null || !value) {
                this.isNewLevelOffer = value;
                localStorageHelper/* default */.A.set('isNewLevelOffer', value);
                if (value) {
                    setTimeout(() => {
                        this.setNewLevelOffer(false);
                    }, 5000);
                }
            }
        };
        this.setRetrieveGameData = (data) => {
            this.retrieveGameData = data;
        };
        this.setStep = (data) => {
            this.step = data;
        };
        this.retrieveIsAutoStart = () => {
            this.isAutoStart = !!JSON.parse(localStorageHelper/* default */.A.get('isAutoStart'));
        };
        this.retrieveAmount = () => {
            const { limit: { minBet, defaultBet }, profile: { currency, balance }, } = this.root.profileCommon;
            const amount = localStorageHelper/* default */.A.get(`saved_amount:${currency}`);
            if (amount && !isNaN(Number(amount)) && Number(amount) > 0) {
                this.amount = amount;
            }
            else if (defaultBet) {
                this.amount = String(balance ? Math.min(balance, defaultBet) : defaultBet);
            }
            else if (minBet) {
                this.amount = String(minBet * 10);
            }
        };
        this.setAutoStart = () => {
            localStorageHelper/* default */.A.set('isAutoStart', !this.isAutoStart);
            this.isAutoStart = !this.isAutoStart;
        };
        this.setLostRounds = (isLost) => {
            if (isLost) {
                this.lostRounds = this.lostRounds + 1;
            }
            else {
                this.lostRounds = 0;
            }
        };
        this.setRounds = (rounds) => {
            if (rounds) {
                this.rounds = rounds;
            }
            else {
                this.rounds = this.rounds + 1;
            }
            localStorageHelper/* default */.A.set('rounds', this.rounds);
        };
        this.setAmount = (amount) => {
            const { profile: { currency }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.set(`saved_amount:${currency}`, String(amount));
            this.amount = String(amount);
        };
        this.setDisabledBetBtn = (isDisabled) => {
            this.isDisabledBetBtn = isDisabled;
        };
        this.setActiveWonModal = (isActive) => {
            this.isActiveWonModal = isActive;
        };
        this.setActiveBonusModal = (isActive) => {
            this.isActiveBonusModal = isActive;
        };
        this.setGameResult = (result) => {
            this.gameResult = result;
        };
        this.setGameWonResult = (wonResult) => {
            this.gameWonResult = wonResult;
        };
        this.setGameStatus = (gameStatus) => {
            this.gameStatus = gameStatus;
        };
        this.setLoadingPlaceBet = (isLoading) => {
            this.isLoadingPlaceBet = isLoading;
        };
        this.setTurboBet = () => {
            this.isTurboBet = !this.isTurboBet;
        };
        this.setBetButtonPressed = (isPressed) => {
            this.isBetButtonPressed = isPressed;
        };
        this.startNewRound = () => {
            const { audioCommon: { playAudio }, } = this.root;
            const speed = this.rounds <= 10 ? types/* ChickenAnimSpeed */.q.Normal : types/* ChickenAnimSpeed */.q.Fast;
            playAudio('startNewRound');
            ChickenzapCanvasController/* chickenzapCanvasController */.x.invoke('setNextRound', { speed });
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
                    theme: this.gameServerTheme,
                    version: this.version,
                });
                this.setSessionLevel(Number(data.difficulty) - 1);
                (0,mobx_esm_js_.runInAction)(() => {
                    this.isGameCreated = true;
                    this.isRoundStarted = true;
                    this.setRoundProcessing(true);
                    this.roundId = data.roundId;
                    this.step = data.opened;
                    this.roundNonce = data.nonce;
                    this.nonce = data.nonce + 1;
                    this.amount = String(data.amount);
                    this.isWinAnimationCompleted = true;
                    this.isDisabledControls = false;
                    const multiplier = localStorageHelper/* default */.A.get('multiplier') ? Number(localStorageHelper/* default */.A.get('multiplier')) : 0;
                    const payout = localStorageHelper/* default */.A.get('payout') ? Number(localStorageHelper/* default */.A.get('payout')) : 0;
                    const coefficient = localStorageHelper/* default */.A.get('coefficient') ? Number(localStorageHelper/* default */.A.get('coefficient')) : 0;
                    this.stepWinResult = { multiplier, payout, coefficient };
                });
                this.setRetrieveGameData({ step: data.opened });
                setAlertList({
                    title: i18next_js_["default"].t('NOTIF.CONTINUE_ROUND'),
                    type: 'success',
                });
                return { data };
            }
            catch (error) {
                (0,mobx_esm_js_.runInAction)(() => {
                    if (this.isCashoutErorr) {
                        this.isGameCreated = false;
                        this.stepWinResult = null;
                        this.isRoundStarted = false;
                        this.setLostSession(true);
                        this.setDisableControls(true);
                        localStorageHelper/* default */.A.set('roundId', '');
                        this.isCashoutErorr = false;
                    }
                    this.isRetrieveRound = false;
                });
                return error;
            }
            finally {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.isCashoutProcessing = false;
                });
            }
        };
        this.getGameSettings = async () => {
            const { root: { profileCommon: { profile: { token, playerId, subPartnerId }, splitTest, }, uiCommon: { isMobile }, }, } = this;
            try {
                let testRtp = null;
                if (splitTest?.variantValue === 'chickenroute_alt_rtp' &&
                    (splitTest?.variantType === 'test' || splitTest?.variantType === 'test2')) {
                    testRtp = 99;
                }
                else if (splitTest?.variantValue === 'chickenroute_alt_rtp_2' && splitTest?.variantType === 'test') {
                    testRtp = 97;
                }
                const respond = await getGameSettingsRequest({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: false,
                        }),
                    }),
                    theme: this.gameServerId,
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    ...(testRtp && { rtp: testRtp }),
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    this.gameSettings = respond.data;
                });
            }
            catch (error) {
                throw error;
            }
        };
        this.startGame = async (difficulty) => {
            const { profileCommon: { profile: { token, playerId }, splitTest, }, } = this.root;
            const url = window.location.href;
            try {
                const { search } = document.location;
                const urlParams = new URLSearchParams(search);
                const mockedMineStep = urlParams.get('mockedMineStep');
                let testRtp = null;
                if (splitTest?.variantValue === 'chickenroute_alt_rtp' &&
                    (splitTest?.variantType === 'test' || splitTest?.variantType === 'test2')) {
                    testRtp = 99;
                }
                else if (splitTest?.variantValue === 'chickenroute_alt_rtp_2' && splitTest?.variantType === 'test') {
                    testRtp = 97;
                }
                const { data: { roundId }, } = await createBetRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed: this.clientSeed,
                    difficulty,
                    nonce: this.nonce,
                    theme: this.gameServerTheme,
                    mockedMineStep: Number(mockedMineStep) || undefined,
                    version: this.version,
                    ...(testRtp && { rtp: testRtp }),
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    if (this.isCashoutProcessing) {
                        this.isCashoutProcessing = false;
                    }
                    if (this.isCashoutErorr) {
                        this.isCashoutErorr = false;
                    }
                    this.roundId = roundId;
                    this.roundNonce = this.nonce;
                    this.nonce += 1;
                    this.isGameCreated = true;
                    localStorageHelper/* default */.A.set('roundId', String(this.roundId));
                });
            }
            catch (error) {
                console.warn('fetchGame error:', error);
                this.root.uiCommon.errorCodeResolver(error);
                (0,mobx_esm_js_.runInAction)(() => {
                    this.isGameCreated = false;
                });
                return error;
            }
        };
        this.playAudioRandomStep = () => {
            const { audioCommon: { playAudio }, } = this.root;
            try {
                const max = 3;
                let randomIndex = Math.floor(Math.random() * max) + 1;
                let attempts = 0;
                while (this.lastRandomsSoundIds.length >= 2 &&
                    this.lastRandomsSoundIds.slice(-2).every((i) => i === randomIndex) &&
                    attempts < 5) {
                    randomIndex = Math.floor(Math.random() * max) + 1;
                    attempts++;
                }
                this.lastRandomsSoundIds.push(randomIndex);
                if (this.lastRandomsSoundIds.length > 3)
                    this.lastRandomsSoundIds.shift();
                playAudio(`step${randomIndex}`);
            }
            catch (error) {
                playAudio('step3');
            }
        };
        this.placeBet = async (isPlaceToBtn, isUseFoxyroadSound = false) => {
            const { profileCommon: { profile: { token, subPartnerId, currency, apiKey, balance }, limit: { minBet, maxBet, maxWin }, }, uiCommon: { isMobile }, audioCommon: { playAudio }, freebetsCommon: { freebetsSuccessIndexList, freebets, freebetEnabled, freebetsActive, freebetActive, freebetId, listRemoveByIndex, updateFreebetsPayout, listAdd, }, } = this.root;
            const isFreebetEnabled = freebetsSuccessIndexList.includes(0) || freebetEnabled;
            if ((!Number(this.amount) && !freebetActive) ||
                (!this.isRoundStarted && balance < minBet && !isFreebetEnabled) ||
                this.isCashoutProcessing ||
                !this.isGameCreated ||
                (Number(this.amount) > balance && !freebetActive && !this.step))
                return;
            if (this.isActiveWinPopup) {
                this.hideWinPopup();
            }
            try {
                if (isUseFoxyroadSound) {
                    this.playAudioRandomStep();
                }
                else {
                    playAudio('step');
                }
                this.checkAndUpdateBalanceDelay();
                this.setPlacebetTimestamp(Date.now());
                this.setGameStatus('running');
                this.setLoadingPlaceBet(true);
                this.setStepnimationProcessing(false);
                this.setWinAnimationCompleted(false);
                if (this.isNewLevelOffer) {
                    this.setNewLevelOffer(false);
                }
                if (!this.isRoundProcessing) {
                    this.setRoundProcessing(true);
                }
                if (this.isRoundError) {
                    this.isRoundError = false;
                }
                if (!this.isRoundStarted) {
                    this.setLastStepIsFinished(false);
                    this.setLostRound(false);
                    this.setRounds();
                    this.isRoundStarted = true;
                }
                this.isStepProcessing = true;
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
                    open: this.step + 1,
                    clientSeed: this.clientSeed,
                    nonce: this.roundNonce,
                    amount: Number(this.amount),
                    currency,
                    version: this.version,
                    ...(freebetsSuccessIndexList.includes(0) &&
                        this.step + 1 === 1 &&
                        freebetId && {
                        freebetsId: freebetId,
                        minCoefficient: freebetActive?.offer?.configuration[0]?.minCoefficient || 0,
                    }),
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    this.step = this.step + 1;
                });
                ChickenzapCanvasController/* chickenzapCanvasController */.x.invoke('step');
                if (this.step === 1) {
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'bet_placed',
                        sid: this.root.profileCommon.profile.sid,
                        parameters: {
                            method: 'manual',
                            value: Number(this.amount),
                            variant: GameLevelTypes[this.sessionLevel],
                            currency: this.root.profileCommon.profile.currency,
                            multiplier: data.multiplier,
                            object: isPlaceToBtn ? `bet_1.place` : 'bet_2.place',
                            round_id: this.roundId,
                            id: this.roundId,
                        },
                    });
                    listAdd({
                        index: 0,
                        freebet: freebetsSuccessIndexList.includes(0),
                    });
                }
                (0,mobx_esm_js_.runInAction)(() => {
                    if (data?.result === 'lost') {
                        this.islostRound = true;
                        this.isGameCreated = false;
                        this.stepWinResult = null;
                        this.isRoundStarted = false;
                        this.setLostSession(true);
                        this.setDisableControls(true);
                        localStorageHelper/* default */.A.set('roundId', '');
                        this.gtmBetClosed({ isWin: false, multiplier: data.multiplier });
                        const curretSessionLevelData = this.getCurretSessionLevelData(this.sessionLevel);
                        if (curretSessionLevelData) {
                            this.startGame(Number(curretSessionLevelData.difficulty));
                        }
                        listRemoveByIndex(0);
                    }
                    else {
                        this.stepWinResult = data;
                        localStorageHelper/* default */.A.set('multiplier', data.multiplier);
                        localStorageHelper/* default */.A.set('payout', data.payout);
                        localStorageHelper/* default */.A.set('coefficient', data.coefficient);
                    }
                    this.isStepProcessing = false;
                });
            }
            catch (error) {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.isStepProcessing = false;
                });
                if (error?.code === 'ERR_NETWORK') {
                    console.log(error?.code, '!!! PLACE error?.code');
                    (0,mobx_esm_js_.runInAction)(() => {
                        this.isGameCreated = false;
                    });
                    if (this.root.uiCommon.isOnline) {
                        this.root.uiCommon.setIsOnline(false);
                        this.root.uiCommon.showOfflineAlert();
                    }
                }
                else {
                    setTimeout(() => {
                        console.warn('fetchGame error:', error);
                        (0,mobx_esm_js_.runInAction)(() => {
                            this.isRoundError = true;
                            this.root.uiCommon.errorCodeResolver(error.response);
                            this.islostRound = true;
                            this.isGameCreated = false;
                            if (this.root.uiCommon.isOnline) {
                                this.stepWinResult = null;
                                this.isRoundStarted = false;
                                this.setLostSession(true);
                                this.setDisableControls(true);
                                localStorageHelper/* default */.A.set('roundId', '');
                                const curretSessionLevelData = this.getCurretSessionLevelData(this.sessionLevel);
                                if (curretSessionLevelData) {
                                    this.startGame(Number(curretSessionLevelData.difficulty));
                                }
                            }
                        });
                    }, 200);
                }
            }
        };
        this.baseCashoutData = {
            payout: 0,
            coefficient: 0,
            isAutoCashOut: false,
        };
        this.baseCashout = (data) => {
            const { profileCommon: { profile: { currencySign }, settings: { options }, }, audioCommon: { playAudio }, freebetsCommon: { freebetsSuccessIndexList, listRemoveByIndex, updateFreebetsPayout, listAdd }, } = this.root;
            if (!data.isAutoCashOut && (this.gameLevel === types/* GameLevel */.J.Medium || this.gameLevel === types/* GameLevel */.J.Hard)) {
                this.setBestPreviousWins(this.step);
            }
            const { winLevelsList, winLevels } = this.gameConfig;
            let level = 0;
            for (let i = 0; i < winLevelsList.length; i++) {
                if (data.coefficient >= winLevelsList[i])
                    level = i;
            }
            const { title, ...levelData } = winLevels[level];
            this.modalConfig = {
                ...levelData,
                title: i18next_js_["default"].t(title),
            };
            if (this.gameConfig.balance.mode === 'default' && this.defaultBalanceDelay > 0) {
                this.gameConfig.balance.delay = levelData.duration;
            }
            this.step = 0;
            localStorageHelper/* default */.A.set('roundId', '');
            this.isGameCreated = false;
            this.isRoundStarted = false;
            this.setDisableControls(true);
            this.setLastStepIsFinished(false);
            this.setWinPopupAnimation(true);
            const winPopupData = {
                type: this.modalConfig.type,
                amount: data.payout,
                coeficient: `${data.coefficient}X`,
                currency: currencySign,
                isAutoCashOut: data.isAutoCashOut,
                title: this.modalConfig.title.toUpperCase(),
            };
            playAudio(this.modalConfig.audio);
            updateFreebetsPayout({ index: 0, coefficient: data?.coefficient || 0 });
            listRemoveByIndex(0);
            this.setActiveWinPopup(true);
            ChickenzapCanvasController/* chickenzapCanvasController */.x.invoke('showWinPopup', winPopupData);
            this.startNewRound();
            this.isModalTimeToLifeDone = true;
            if (!options?.customBr) {
                this.timeOutRef = window.setTimeout(() => {
                    this.isModalTimeToLifeDone = false;
                }, this.modalConfig.duration);
            }
            const curretSessionLevelData = this.getCurretSessionLevelData(this.sessionLevel);
            if (curretSessionLevelData) {
                this.startGame(Number(curretSessionLevelData.difficulty));
            }
        };
        this.autoCashout = (data) => {
            this.baseCashout(data);
        };
        this.checkAndUpdateBalanceDelay = () => {
            const { next } = this.coefficients;
            const { winLevelsList, winLevels } = this.gameConfig;
            if (next && this.gameConfig.balance.mode === 'default' && this.defaultBalanceDelay > 0) {
                let level = 0;
                for (let i = 0; i < winLevelsList.length; i++) {
                    if (next >= winLevelsList[i])
                        level = i;
                }
                this.gameConfig.balance.delay = winLevels[level].duration;
            }
        };
        this.cashout = async () => {
            if (!this.roundId)
                return;
            const { profileCommon: { profile: { token, playerId }, }, } = this.root;
            try {
                this.setIsCashoutProcessing(true);
                const { data } = await cashoutRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    roundId: this.roundId,
                    version: this.version,
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    this.gameWinResult = data;
                    this.baseCashout({ payout: data.payout, coefficient: data.coefficient, isAutoCashOut: false });
                    this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: data.coefficient });
                    this.root.freebetsCommon.listRemoveByIndex(0);
                    this.gtmBetClosed({ isWin: true, multiplier: data.coefficient });
                    this.setIsCashoutProcessing(false);
                });
            }
            catch (error) {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.isCashoutProcessing = true;
                    this.isCashoutErorr = true;
                });
                if (error.response.data.errorCode === 616) {
                    (0,mobx_esm_js_.runInAction)(() => {
                        this.isGameCreated = false;
                        this.stepWinResult = null;
                        this.isRoundStarted = false;
                        this.setLostSession(true);
                        this.setDisableControls(true);
                    });
                    const curretSessionLevelData = this.getCurretSessionLevelData(this.sessionLevel);
                    if (curretSessionLevelData) {
                        this.startGame(Number(curretSessionLevelData.difficulty));
                    }
                }
                else {
                    this.retrieveGame();
                    this.setIsCashoutProcessing(false);
                }
                localStorageHelper/* default */.A.set('roundId', '');
                console.warn('fetchGame error:', error);
                this.root.uiCommon.errorCodeResolver(error);
                return error;
            }
        };
        this.gtmBetClosed = ({ isWin, multiplier }) => {
            (0,gtmDataLayerPush/* default */.A)({
                action: 'bet_closed',
                parameters: {
                    id: this.roundId,
                    round_id: this.roundId,
                    object: isWin ? 'cashout' : 'lost',
                    value: Number(this.amount),
                    currency: this.root.profileCommon.profile.currency,
                    wins: isWin ? 1 : 0,
                    multiplier,
                },
            });
        };
        this.gtmTrackedElementClicked = () => {
            (0,gtmDataLayerPush/* default */.A)({
                event: 'ga4_interaction',
                action: 'tracked_element_clicked',
                parameters: {
                    object: !this.isRoundStarted ? 'bet_2.place' : 'bet_2.next_step',
                },
            });
        };
        this.setPlacebetTimestamp = (timestamp) => {
            this.placebetTimestamp = timestamp;
        };
        this.setIsCashoutProcessing = (value) => {
            this.isCashoutProcessing = value;
        };
        this.setIsCanvasAppIsReady = (value) => {
            this.isCanvasAppIsReady = value;
        };
        this.setCommonStorage = async ({ key, value }) => {
            const { profileCommon: { profile: { token, playerId }, }, } = this.root;
            try {
                const { data } = await setCommonStorage({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    key,
                    value,
                    version: this.version,
                });
                return data;
            }
            catch (error) {
                return error;
            }
        };
        this.updateCommonStorage = async ({ key, value }) => {
            const { profileCommon: { profile: { token, playerId }, }, } = this.root;
            try {
                const { data } = await updateCommonStorage({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    key,
                    value,
                    version: this.version,
                });
            }
            catch (error) {
                return error;
            }
        };
        this.handleInit = () => {
            const { profileCommon } = this.root;
            let speedValue = 'default';
            if (profileCommon?.splitTest?.variantValue === 'chickenroute_alt_rtp_2' &&
                profileCommon?.splitTest?.variantType === 'test') {
                speedValue = 'test';
            }
            ChickenzapCanvasController/* chickenzapCanvasController */.x.invoke('init', { skin: this.skin, speedValue });
        };
        this.setSkin = () => {
            const { profileCommon } = this.root;
            const enableCustomSkinSplitTest = profileCommon?.splitTest?.variantType === 'test' &&
                profileCommon?.splitTest?.variantValue === 'chickenroute_NY2025';
            this.skin = 'test';
            if (enableCustomSkinSplitTest) {
                this.skin = 'christmas';
            }
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.centrifuge = new (centrifuge_js_default())((0,config/* config */.$)().centrifuge || '', {
            debug: (0,bootstrap.GET_ENV)().NODE_ENV === 'development',
        });
        this.centrifuge.subscribe('chickenroute', ({ data }) => {
            const { w, c, p, b } = data;
            this.setLiveCashouts({ w, c, p, b });
        });
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.setSkin();
            this.root.trackingCommon.initGtmDataLayer();
            this.retrieveAmount();
            this.getGameSettings();
            this.retrieveIsAutoStart();
            const { profile: { splitTest }, } = this.root.profileCommon;
            if (splitTest?.variantValue === 'chickenroute_math_1') {
                if (splitTest?.variantType === 'test') {
                    this.version = 'f2';
                }
                if (splitTest?.variantType === 'test2') {
                    this.version = 'f3';
                }
            }
            const initialSessionLevel = localStorageHelper/* default */.A.get('sessionLevel') ?? 1;
            this.setSessionLevel(Number(initialSessionLevel));
            const roundId = localStorageHelper/* default */.A.get('roundId');
            if (roundId) {
                this.isRetrieveRound = true;
                this.retrieveGame();
            }
            const rounds = localStorageHelper/* default */.A.get('rounds') ?? 0;
            if (rounds) {
                this.setRounds(Number(rounds));
            }
            const bestPreviousWins = localStorageHelper/* default */.A.get('bestPreviousWins');
            if (bestPreviousWins) {
                this.bestPreviousWins = JSON.parse(bestPreviousWins);
            }
            this.isProfileReady = true;
        });
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'holdcrash';
        this.gameServerTheme = gameConfig.gameServerTheme || 'default';
        this.defaultBalanceDelay = gameConfig.balance.mode === 'default' ? gameConfig.balance.delay : null;
        (0,mobx_esm_js_.reaction)(() => ({
            isProfileReady: this.isProfileReady,
            isCanvasAppIsReady: this.isCanvasAppIsReady,
        }), ({ isProfileReady, isCanvasAppIsReady }) => {
            if (isCanvasAppIsReady && isProfileReady) {
                this.handleInit();
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isRetrieveRound: this.isRetrieveRound,
            gameSettings: this.gameSettings,
        }), ({ isRetrieveRound, gameSettings }) => {
            const data = Object.entries(gameSettings).filter((entry) => Array.isArray(entry[1]));
            this.sessionLevelData = data;
            const curretSessionLevelData = this.getCurretSessionLevelData(this.sessionLevel);
            if (curretSessionLevelData && !isRetrieveRound) {
                this.startGame(Number(curretSessionLevelData.difficulty));
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            sessionLevel: this.sessionLevel,
            step: this.step,
        }), ({ sessionLevel, step }) => {
            let gameLevel = types/* GameLevel */.J.Easy;
            switch (sessionLevel) {
                case 1:
                    if (step >= 15) {
                        gameLevel = types/* GameLevel */.J.Hard;
                        break;
                    }
                    if (step >= 8) {
                        gameLevel = types/* GameLevel */.J.Medium;
                        break;
                    }
                    break;
                case 2:
                    if (step >= 16) {
                        gameLevel = types/* GameLevel */.J.Hard;
                        break;
                    }
                    if (step >= 8) {
                        gameLevel = types/* GameLevel */.J.Medium;
                        break;
                    }
                    break;
                case 0:
                default:
                    if (step >= 14) {
                        gameLevel = types/* GameLevel */.J.Hard;
                        break;
                    }
                    if (step >= 7) {
                        gameLevel = types/* GameLevel */.J.Medium;
                        break;
                    }
            }
            if (this.gameLevel != gameLevel) {
                this.gameLevel = gameLevel;
                ChickenzapCanvasController/* chickenzapCanvasController */.x.invoke('setGameLevel', { type: gameLevel });
            }
        });
        (0,mobx_esm_js_.reaction)(() => this.isActiveWinPopup, (isActiveWinPopup) => {
            if (!isActiveWinPopup) {
                clearTimeout(this.timeOutRef);
                this.isModalTimeToLifeDone = false;
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isWinPopupAnimationCompleted: this.isWinPopupAnimationCompleted,
            isModalTimeToLifeDone: this.isModalTimeToLifeDone,
        }), ({ isWinPopupAnimationCompleted, isModalTimeToLifeDone }) => {
            if (isWinPopupAnimationCompleted) {
                this.setDisableControls(false);
            }
            if (isWinPopupAnimationCompleted && !isModalTimeToLifeDone) {
                this.hideWinPopup();
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isOnline: this.root.uiCommon.isOnline,
        }), ({ isOnline }) => {
            if (!this.isOnlinePrev && isOnline && !this.isGameCreated) {
                this.retrieveGame();
            }
            this.isOnlinePrev = isOnline;
        });
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: this.amount }];
        }, (index, { amount }) => {
            console.log('FB setAmount', amount);
            this.setAmount(Number(amount));
        });
    }
    get isDisableTapOnHaystack() {
        const { profileCommon: { profile: { balance }, limit: { minBet, maxBet, maxWin }, }, freebetsCommon: { freebetsSuccessIndexList, freebetEnabled, listGetByIndex }, } = this.root;
        const freebet = listGetByIndex(0);
        const isFreebetEnabled = freebetsSuccessIndexList.includes(0) || freebetEnabled;
        return (!this.root.uiCommon.isOnline ||
            (this.isRoundStarted && !this.isWinAnimationCompleted) ||
            this.isStepProcessing ||
            this.isStepnimationProcessing ||
            this.isDisabledControls ||
            !this.isGameCreated ||
            !Number(this.amount) ||
            (!this.isRoundStarted && !this.root.profileCommon.profile.balance) ||
            (!this.isRoundStarted && !Number(this.amount) && !isFreebetEnabled && !!freebet?.freebetActive) ||
            (!this.isRoundStarted && !balance && !isFreebetEnabled) ||
            (!this.isRoundStarted && balance < minBet && !isFreebetEnabled) ||
            (!this.isRoundStarted && balance < Number(this.amount) && !isFreebetEnabled));
    }
    get curretSessionLevelData() {
        if (!this.sessionLevelData)
            return null;
        if (!Array.isArray(this.sessionLevelData[this.sessionLevel]))
            return null;
        return {
            difficulty: this.sessionLevelData[this.sessionLevel][0],
            listCoefficients: this.sessionLevelData[this.sessionLevel][1] || [],
        };
    }
    get coefficients() {
        const list = this.curretSessionLevelData?.listCoefficients ?? [];
        return {
            current: this.step > 0 ? (list[this.step - 1] ?? null) : null,
            next: list[this.step] ?? null,
        };
    }
}
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "roundNonce", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "roundId", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "lostRounds", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "rounds", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "skin", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isWinBalancePending", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "preWinBalance", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isOnlinePrev", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isAutoStart", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isDisabledBetBtn", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isActiveWonModal", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isActiveBonusModal", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isLoadingPlaceBet", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isTurboBet", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isBetButtonPressed", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isRoundError", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "islostRound", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isModalTimeToLifeDone", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "gameWonResult", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "gameStatus", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "defaultBalanceDelay", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "version", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "step", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "gameLevel", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "gameSettings", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "retrieveGameData", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isRoundProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isGameCreated", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isRoundStarted", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isStepProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isStepnimationProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isPreloadedDone", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isDisabledControls", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isWinAnimationCompleted", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isLostSession", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isLastStepIsFinished", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isWinPopupAnimationCompleted", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isActiveWinPopup", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isRetrieveRound", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "levelData", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isNewLevelOffer", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isCashoutProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isCashoutErorr", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isCanvasAppIsReady", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isProfileReady", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isWinPopupAnimation", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "sessionLevel", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "sessionLevelData", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "gameWinResult", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "stepWinResult", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "modalConfig", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "bestPreviousWins", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "isFirstRender", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "liveCashouts", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "placebetTimestamp", void 0);
__decorate([
    mobx_esm_js_.computed
], ChickenzapCommon.prototype, "isDisableTapOnHaystack", null);
__decorate([
    mobx_esm_js_.computed
], ChickenzapCommon.prototype, "curretSessionLevelData", null);
__decorate([
    mobx_esm_js_.computed
], ChickenzapCommon.prototype, "coefficients", null);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setLiveCashouts", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setIsFirstRender", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "hideWinPopup", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setBestPreviousWins", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setRoundProcessing", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setWinPopupAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "clearWinBalanceTimeout", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "getCurretSessionLevelData", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setSessionLevel", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setPreloadedDone", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "changeSessionLevel", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setDisableControls", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setStepnimationProcessing", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setWinAnimationCompleted", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setLostSession", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setLastStepIsFinished", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setWinPopupAnimationCompleted", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setActiveWinPopup", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setLostRound", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setNewLevelOffer", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setRetrieveGameData", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setStep", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "retrieveIsAutoStart", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "retrieveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setAutoStart", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setLostRounds", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setRounds", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setDisabledBetBtn", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setActiveWonModal", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setActiveBonusModal", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setGameResult", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setGameWonResult", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setGameStatus", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setLoadingPlaceBet", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setTurboBet", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setBetButtonPressed", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "startNewRound", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "retrieveGame", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "getGameSettings", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "startGame", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "playAudioRandomStep", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "placeBet", void 0);
__decorate([
    mobx_esm_js_.observable
], ChickenzapCommon.prototype, "baseCashoutData", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "baseCashout", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "autoCashout", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "checkAndUpdateBalanceDelay", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "cashout", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "gtmBetClosed", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "gtmTrackedElementClicked", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setPlacebetTimestamp", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setIsCashoutProcessing", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setIsCanvasAppIsReady", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setCommonStorage", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "updateCommonStorage", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "handleInit", void 0);
__decorate([
    mobx_esm_js_.action
], ChickenzapCommon.prototype, "setSkin", void 0);
/* harmony default export */ const store_ChickenzapCommon = (ChickenzapCommon);


/***/ })

}]);