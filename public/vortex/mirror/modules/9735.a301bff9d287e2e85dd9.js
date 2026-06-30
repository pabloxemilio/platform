(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[9735],{

/***/ 29533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 96899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* reexport */ clickerCanvasController)
});

;// ./src/canvas/controller/types/clicker/Controller.ts
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

;// ./src/framework/components.clicker/ClickerCanvasController/ClickerCanvasController.ts

class Controller extends CanvasController {
}
const clickerCanvasController = new Controller();

;// ./src/framework/components.clicker/ClickerCanvasController/index.ts



/***/ }),

/***/ 738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function formatHeaders(headers) {
    return JSON.parse(JSON.stringify(headers));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatHeaders);


/***/ }),

/***/ 50647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MAX_PROGRESS_BAR_LEVEL: () => (/* binding */ MAX_PROGRESS_BAR_LEVEL),
  ONE_SECOND: () => (/* binding */ ONE_SECOND),
  TIME_AUTO_BET_MS: () => (/* binding */ TIME_AUTO_BET_MS),
  USER_INACTIVITY_FC_ROUND_COUNT: () => (/* binding */ USER_INACTIVITY_FC_ROUND_COUNT),
  USER_INACTIVITY_TIMEOUT_MS: () => (/* binding */ USER_INACTIVITY_TIMEOUT_MS),
  createThrottled: () => (/* binding */ createThrottled),
  "default": () => (/* binding */ store_ClickerCommon)
});

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
// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/clicker/config.ts

const config_config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

;// ./src/framework/api/clicker/index.ts


const clicker_api = (version = '') => {
    const protocol = config_config().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config_config().api}/${version ? `${version}/api` : 'api'}`,
    });
};
const getGameSettingsRequest = ({ version, customRtp, ...params }) => clicker_api(version).get(`/games/settings${customRtp ? `?rtp=${customRtp}` : ''}`, params);
const retrieveGameRequest = ({ headers, ...params }) => clicker_api().post(`/games/retrieve`, params, { headers });
/* harmony default export */ const clicker = ((/* unused pure expression or super */ null && (clicker_api)));

// EXTERNAL MODULE: ./src/framework/components.clicker/ClickerCanvasController/index.ts + 2 modules
var ClickerCanvasController = __webpack_require__(96899);
// EXTERNAL MODULE: ./src/framework/store/ClickerCommonStores/FreeSpinStore.ts
var FreeSpinStore = __webpack_require__(64425);
;// ./src/framework/helpers/uuid.ts
function uuid() {
    try {
        if (typeof process !== 'undefined' && process.versions?.node) {
            const { randomUUID } = __webpack_require__(86523);
            if (typeof randomUUID === 'function')
                return randomUUID();
        }
    }
    catch { }
    try {
        if (typeof globalThis.crypto?.randomUUID === 'function') {
            return globalThis.crypto.randomUUID();
        }
    }
    catch { }
    try {
        if (typeof globalThis.crypto?.getRandomValues === 'function') {
            const buf = new Uint8Array(16);
            globalThis.crypto.getRandomValues(buf);
            buf[6] = (buf[6] & 0x0f) | 0x40;
            buf[8] = (buf[8] & 0x3f) | 0x80;
            const hex = [...buf].map(b => b.toString(16).padStart(2, '0'));
            return `${hex.slice(0, 4).join('')}-${hex.slice(4, 6).join('')}-${hex.slice(6, 8).join('')}-${hex.slice(8, 10).join('')}-${hex.slice(10).join('')}`;
        }
    }
    catch { }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/formatHeaders.ts
var formatHeaders = __webpack_require__(738);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
;// ./src/framework/store/ClickerCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function createThrottled(fn, ms = 300) {
    let last = 0;
    return (...args) => {
        const now = performance.now();
        if (now - last < ms)
            return;
        last = now;
        return fn(...args);
    };
}
(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
var WSEventType;
(function (WSEventType) {
    WSEventType["GameResult"] = "result";
})(WSEventType || (WSEventType = {}));
const initialGridState = {
    0: {
        zoneNumber: 0,
        destroyLevel: 9,
    },
    1: {
        zoneNumber: 1,
        destroyLevel: 9,
    },
    2: {
        zoneNumber: 2,
        destroyLevel: 9,
    },
    3: {
        zoneNumber: 3,
        destroyLevel: 9,
    },
    4: {
        zoneNumber: 4,
        destroyLevel: 9,
    },
    5: {
        zoneNumber: 5,
        destroyLevel: 9,
    },
    6: {
        zoneNumber: 6,
        destroyLevel: 9,
    },
    7: {
        zoneNumber: 7,
        destroyLevel: 9,
    },
    8: {
        zoneNumber: 8,
        destroyLevel: 9,
    },
};
const MAX_PROGRESS_BAR_LEVEL = 45;
const USER_INACTIVITY_TIMEOUT_MS = 800;
const USER_INACTIVITY_FC_ROUND_COUNT = 8;
const ONE_SECOND = 1000;
const TIME_AUTO_BET_MS = 250;
const random = (maxNumber) => Math.floor(Math.random() * maxNumber) + 1;
const randomFS = () => {
    const values = [5, 10, 15, 20, 25, 30];
    return values[Math.floor(Math.random() * values?.length)];
};
const mockListData = {
    0: {
        type: 'no-prize',
    },
    1: {
        type: 'prize',
        coefficient: random(10),
    },
    2: {
        type: 'bonus',
    },
    3: {
        type: 'bonus',
        bonusGame: {
            grandPrize: 'minor',
            multiplier: 777,
        },
    },
    4: {
        type: 'fs',
        freespinsGame: {
            winStatus: true,
            freespinsAdd: 5,
            multiplier: 7,
        },
    },
};
const randomIds = (/* unused pure expression or super */ null && ([
    '533c8194-9522-4e6b-aef2-706b7b9ba372',
    'f66fe0a4-18ff-4ac5-8312-cf4225ae4a62',
    '4f82405d-d861-446b-87cf-512fde1cdfe7',
    '450936f8-f382-42dc-8210-6947ae813c9e',
    'de89364d-252a-4c93-b36f-99684dfcd3f9',
    'b7ad7e74-c097-4356-ba53-bdab68f35ffa',
    '30f467ba-16dc-48fc-ae82-5cc841410072',
    'c71af555-c042-4b10-b0b0-117675d4a2bd',
    '2e2baa4b-e267-48db-9d45-d423ef592540',
    '37fb5f6f-c325-48f0-9a36-2b341eba526a',
    'dcdb76e3-a22b-4a29-ab1e-204b0c2af1c3',
    '109b78b7-7880-4ae0-b841-a3c882183c22',
    'b57ed717-21cc-4669-9c5e-1611e4945c68',
    'f36476f1-080e-4106-b535-7b576ab5b56a',
    '38c5bda8-1116-478c-998b-2efe32a4764b',
]));
const randomMinMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomNumber = (max) => +(Math.random() * max).toFixed(1);
class ClickerCommon {
    constructor(root, gameConfig) {
        this.customRtp = '';
        this.setCustomRtp = (customRtp) => {
            this.customRtp = customRtp;
        };
        this.version = '';
        this.setVersion = (version) => {
            this.version = version;
        };
        this.nonce = 1;
        this.amount = '2.00';
        this.clientSeed = (0,index_js_.v4)();
        this.roundId = null;
        this.lostRounds = 0;
        this.wonRounds = 0;
        this.theme = 'default';
        this.isAutoStart = false;
        this.isDisabledBetBtn = false;
        this.isActiveWonModal = false;
        this.isActiveBonusModal = false;
        this.isLoadingPlaceBet = false;
        this.isTurboBet = false;
        this.isBetButtonPressed = false;
        this.isRoundError = false;
        this.gameSettings = {};
        this.isGameCreated = false;
        this.isRoundStarted = false;
        this.isStepProcessing = false;
        this.isStepnimationProcessing = false;
        this.isCanvasLoaded = false;
        this.isDisabledControls = false;
        this.isDisablePlace = false;
        this.sessionLevel = 0;
        this.sessionLevelData = null;
        this.isWheelAnimating = false;
        this.isBonusAminating = false;
        this.isBonusMajorDamageAminating = false;
        this.setIsWheelAnimating = (isAnimating) => {
            this.isWheelAnimating = isAnimating;
        };
        this.setIsBonusAminating = (isAminating) => {
            this.isBonusAminating = isAminating;
        };
        this.setIsBonusMajorDamageAminating = (isAminating) => {
            this.isBonusMajorDamageAminating = isAminating;
        };
        this.setSessionLevel = (level) => {
            this.sessionLevel = level;
            localStorageHelper/* default */.A.set('sessionLevel', level);
        };
        this.setCanvasLoaded = (isLoaded) => {
            this.isCanvasLoaded = isLoaded;
        };
        this.setDisableControls = (isDisabled) => {
            this.isDisabledControls = isDisabled;
        };
        this.setDisablePlace = (isDisabled) => {
            this.isDisablePlace = isDisabled;
        };
        this.setStepnimationProcessing = (isProcessing) => {
            this.isStepnimationProcessing = isProcessing;
        };
        this.retrieveIsAutoStart = () => {
            this.isAutoStart = !!JSON.parse(localStorageHelper/* default */.A.get('isAutoStart'));
        };
        this.retrieveAmount = () => {
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
        this.setWonRounds = (isWon) => {
            if (isWon) {
                this.wonRounds = this.wonRounds + 1;
            }
            else {
                this.wonRounds = 0;
            }
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
        this.setLoadingPlaceBet = (isLoading) => {
            this.isLoadingPlaceBet = isLoading;
        };
        this.setTurboBet = () => {
            this.isTurboBet = !this.isTurboBet;
        };
        this.setBetButtonPressed = (isPressed) => {
            this.isBetButtonPressed = isPressed;
        };
        this.getGameSettings = async () => {
            const { root: { profileCommon: { profile: { token, playerId }, }, uiCommon: { isMobile }, }, } = this;
            try {
                const respond = await getGameSettingsRequest({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: this.subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: false,
                        }),
                    }),
                    theme: this.gameServerId,
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    version: this.version,
                    customRtp: this.customRtp,
                });
                this.gameSettings = respond.data;
            }
            catch (error) {
                throw error;
            }
        };
        this.mockList = [];
        this.frozenAutoSpinCount = 0;
        this.gameId = null;
        this.gridState = initialGridState;
        this.activeGridState = mobx_esm_js_.observable.set();
        this.gridHistory = [];
        this.listOfWins = [];
        this.listOfWinsIds = new Map();
        this.activeWinId = null;
        this.gameSessionType = 'regular';
        this.isSessionActive = false;
        this.majorDamageLevel = 7;
        this.archDamageLevel = 7;
        this.isBonusGameQueued = false;
        this.listOfBonusWins = [];
        this.activeBonusWin = null;
        this.isMakeBonusCashout = false;
        this.isRunBonusCashoutAnimation = false;
        this.bonusCashoutResultData = [];
        this.isBuyBonus = false;
        this.freebetBetProcessing = false;
        this.modalCongig = {
            timeToLife: 2000,
            type: 'youwin',
            audio: 'win',
            payout: 0,
            payoutCoefficient: 0,
            title: '',
        };
        this.sessionTimer = null;
        this.sessionTimeout = null;
        this.sessionInterval = null;
        this.longPressTriggeredInterval = null;
        this.betCountBuffer = 0;
        this.betSumCountBuffer = 0;
        this.betDebounceTimer = null;
        this.coefficient = 0;
        this.currency = null;
        this.currencySign = '';
        this.balance = 0;
        this.balanceTotalWin = 0;
        this.progressBarLevel = 0;
        this.energy = 0;
        this.bonusCoin = 0;
        this.isWaitingForFirstTap = false;
        this.isTooltipActivate = false;
        this.isLongPressTriggered = false;
        this.controlAmountLockState = {
            isLocked: false,
            isManuallyUnlocked: false,
            amountAtLock: this.amount,
        };
        this.retrieveGameData = null;
        this.isRetrieveFinished = false;
        this.userIcondData = [];
        this.userIconsMapData = new Map();
        this.timeoutintarvalUserIcon = null;
        this.timeoutintarvalUserIconEmpty = null;
        this.timeoutintarvalTestUserIcon = null;
        this.isSocketReconected = true;
        this.isSocketDisabled = false;
        this.isBetPlaced = false;
        this.isTournamentStarted = false;
        this.tournamentScore = 0;
        this.isTournamentActive = false;
        this.setWinToList = (win) => {
            this.listOfWins = [...this.listOfWins, win];
        };
        this.setBonusWinToList = (win) => {
            this.listOfBonusWins = [...this.listOfBonusWins, win];
        };
        this.setIsSocketDisabled = (isDisabled) => {
            this.isSocketDisabled = isDisabled;
        };
        this.setTournamentScore = (val) => {
            localStorageHelper/* default */.A.set('sbc2025:userScore', (0,floor/* floor */.R)(val));
            this.tournamentScore = (0,floor/* floor */.R)(val);
        };
        this.setIsTournamentActive = (val) => {
            this.isTournamentActive = val;
        };
        this.setIsTournamentStarted = (val) => {
            this.isTournamentStarted = val;
        };
        this.socketConnect = async () => {
            this.ws?.close();
            const { profileCommon: { profile: { token }, }, } = this.root;
            if (this.ws && this.ws.readyState === 1) {
                return;
            }
            const protocol = (0,config/* config */.$)().api.includes('localhost') ? 'ws' : 'wss';
            let host = `${protocol}://${(0,config/* config */.$)().api}${this.version ? `/${this.version}` : ''}/ws/game/`;
            if (token) {
                host = `${host}?token=${token}${this.customRtp ? `&rtp=${this.customRtp}` : ''}`;
            }
            const ws = new WebSocket(host);
            this.ws = ws;
            ws.onopen = () => {
                this.socketPingInterval = window.setInterval(() => {
                    this.send(1);
                }, 15000);
                ws.onmessage = () => {
                    ws.onmessage = (m) => this.wsHandler(m);
                    this.setIsSocketDisabled(false);
                    this.isSocketReconected = false;
                    clearInterval(this.socketAwaiterInterval);
                };
            };
            ws.onerror = (err) => {
                console.log('socketError', err);
                clearInterval(this.socketPingInterval);
                this.setSocketAwaiter();
            };
        };
        this.wsHandler = ({ data }) => {
            const { freebetsCommon: { listRemoveByIndex, updateFreebetsPayout, freebetActive }, audioCommon: { playAudio }, } = this.root;
            const parsedData = JSON.parse(data);
            switch (parsedData?.type) {
                case WSEventType.GameResult:
                    const betId = parsedData.betId;
                    const results = parsedData.results;
                    let totalWin = 0;
                    let coefficient = 0;
                    this.gtmBetPlacedPush({ betId, rounds: results.length });
                    results.forEach((result) => {
                        const hasMockParam = new URLSearchParams(window.location.search).get('mock');
                        if (hasMockParam === '5') {
                            result = {
                                game: {
                                    type: 'fs',
                                    isFreespins: false,
                                    coefficient: 0,
                                    freespinsAdd: 0,
                                    freespinsGame: {
                                        winStatus: false,
                                        freespinsAdd: 15,
                                        multiplier: 5,
                                    },
                                },
                                state: {
                                    bonusCollection: 9,
                                },
                                result: 'lost',
                                payout: 0,
                                payoutCoefficient: 0,
                            };
                        }
                        if (this.isFreebetEnabled && result.game.type !== 'fs') {
                            if (this.freebetBetProcessing) {
                                this.setFreebetBetProcessing(false);
                            }
                            if (result.payout && !result.game.isFreespins) {
                                updateFreebetsPayout({ index: 0, payout: result.payout });
                            }
                        }
                        if (this.isFreebetEnabled && ['fs-cashout', 'bonus-cashout'].includes(result.game.type)) {
                            setTimeout(() => {
                                listRemoveByIndex(0);
                            }, !freebetActive?.left ? 1200 : 0);
                        }
                        if (this.gameSessionType === 'freespin' && result.game?.isFreespins && result.state?.freespins?.left === 0) {
                            this.freeSpinStore.isFreeSpinsCompleted = true;
                        }
                        if (result.game.type === 'prize') {
                            const winData = { ...result, id: uuid() };
                            totalWin = totalWin + Number(result?.payout || 0);
                            coefficient = Math.max(coefficient, result?.payoutCoefficient);
                            if (!this.activeWinId) {
                                this.activeWinId = winData.id;
                            }
                            this.setWinToList(winData);
                            const validationIfActieFS = result.state?.freespins?.left;
                            if (validationIfActieFS &&
                                this.gameSessionType === 'regular' &&
                                !this.isBonusGameQueued &&
                                !this.freeSpinStore.isFreeSpinsGameQueued) {
                                const coefficient = result.state?.freespins?.multiplier || 0;
                                const rounds = result.state?.freespins?.left || 0;
                                const totalRounds = result.state?.freespins?.total || 0;
                                const freeSpinsRoundData = {
                                    isWin: true,
                                    coefficient,
                                    rounds,
                                };
                                (0,mobx_esm_js_.runInAction)(() => {
                                    this.freeSpinStore.isFreeSpinsGameQueued = true;
                                    this.freeSpinStore.setFreeSpinData(freeSpinsRoundData);
                                    this.freeSpinStore.freeSpinsTotalRounds = totalRounds;
                                });
                            }
                        }
                        if (result.game.type === 'bonus') {
                            const bonusCollection = result?.state?.bonusCollection || 0;
                            if (result.game.bonusUp &&
                                (bonusCollection === 10 || (bonusCollection % 20 === 0 && bonusCollection > 0 && bonusCollection < 120))) {
                                (0,mobx_esm_js_.runInAction)(() => {
                                    this.setBonusWinToList(result);
                                    this.gtmBonusGame({ betId, rounds: results.length, state: 'bat' });
                                    if (this.freeSpinStore.isFreeSpinsGameQueued || this.gameSessionType == 'freespin') {
                                        this.setBonusCoin();
                                    }
                                    else {
                                    }
                                    if (!this.isBonusGameQueued &&
                                        !this.freeSpinStore.isFreeSpinsGameQueued &&
                                        this.gameSessionType == 'regular') {
                                        this.isBonusGameQueued = true;
                                    }
                                    else {
                                    }
                                });
                            }
                            if (result.game.bonusGame) {
                                (0,mobx_esm_js_.runInAction)(() => {
                                    this.isMakeBonusCashout = true;
                                    this.setBonusWinToList(result);
                                });
                            }
                        }
                        if (result.game.type === 'bonus-cashout') {
                            totalWin = totalWin + Number(result?.payout || 0);
                            coefficient = Math.max(coefficient, result?.payoutCoefficient);
                            (0,mobx_esm_js_.runInAction)(() => {
                                this.isBonusGameQueued = true;
                                this.isRunBonusCashoutAnimation = true;
                                this.bonusCashoutResultData = [...this.bonusCashoutResultData, result];
                                if (this.freeSpinStore.isFreeSpinsGameQueued || this.gameSessionType == 'freespin') {
                                    this.setBonusCoin();
                                    this.isBonusGameQueued = false;
                                }
                            });
                            this.gtmBonusGame({ betId, rounds: results.length, state: 'wheel' });
                        }
                        if (result.game.type === 'fs') {
                            if (!this.freeSpinStore.isFreeSpinsGameQueued && !this.freeSpinStore.freeSpinsRoundData) {
                                const isWin = result?.game?.freespinsGame?.winStatus;
                                const coefficient = result?.game?.freespinsGame?.multiplier || 0;
                                const rounds = result?.game?.freespinsGame?.freespinsAdd || 0;
                                const totalRounds = result?.state?.freespins?.total || 0;
                                const freeSpinsRoundData = {
                                    isWin,
                                    coefficient,
                                    rounds,
                                };
                                (0,mobx_esm_js_.runInAction)(() => {
                                    this.freeSpinStore.setFreeSpinData(freeSpinsRoundData);
                                    this.freeSpinStore.freeSpinsTotalRounds = totalRounds;
                                    if (!this.isBonusGameQueued && this.gameSessionType !== 'bonus') {
                                        this.freeSpinStore.isFreeSpinsGameQueued = true;
                                    }
                                });
                            }
                            else if (this.gameSessionType === 'freespin' && result.game?.isFreespins) {
                                const freespinsAdd = result?.game?.freespinsAdd || 0;
                                const totalRounds = result?.state.freespins.total || 0;
                                const rounds = freespinsAdd + (this.freeSpinStore.freeSpinsRoundData?.rounds || 0);
                                const freeSpinsRoundData = {
                                    ...this.freeSpinStore.freeSpinsRoundData,
                                    rounds,
                                };
                                this.freeSpinStore.setFreeSpinData(freeSpinsRoundData);
                                this.freeSpinStore.freeSpinsTotalRounds = totalRounds;
                                playAudio('plus_fs_round');
                                ClickerCanvasController/* clickerCanvasController */.S.invoke('startAnimationExtraFreeSpin', { amount: 5, id: uuid() });
                            }
                        }
                        if (result.game.type === 'fs-cashout') {
                            totalWin = totalWin + Number(result?.payout || 0);
                            coefficient = Math.max(coefficient, result?.payoutCoefficient);
                            this.freeSpinStore.freeSpinsCashoutData = result;
                            this.gtmBonusGame({
                                betId,
                                rounds: results.length,
                                state: 'freespins',
                                method: this.freeSpinStore.isWasAutoPlay ? 'auto' : 'manual',
                                count: this.freeSpinStore.freeSpinsTotalRounds,
                            });
                            this.gtmBonusGame({
                                betId,
                                rounds: results.length,
                                state: 'freespins',
                                method: this.freeSpinStore.isWasAutoPlay ? 'auto' : 'manual',
                                count: this.freeSpinStore.freeSpinsTotalRounds,
                            });
                        }
                        if (!['fs-cashout', 'bonus-cashout', 'fs', 'bonus'].includes(result.game.type) &&
                            this.gameSessionType !== 'freespin') {
                            setTimeout(() => {
                                listRemoveByIndex(0);
                            }, !freebetActive?.left ? 1200 : 0);
                        }
                    });
                    if (!!totalWin) {
                        coefficient = Number((totalWin / results.length).toFixed(2));
                    }
                    this.gtmBetClosedPush({ isWin: !!totalWin, betId, coefficient, rounds: results.length });
                    break;
                default:
                    break;
            }
            if (parsedData?.message) {
                this.socketCodeResolver(parsedData.code || parsedData.errorCode, parsedData.data);
            }
        };
        this.setSocketAwaiter = () => {
            if (!this.ws)
                return;
            this.ws.close();
            if (this.root.uiCommon.pageDisabled)
                return;
            if (this.isSocketReconected)
                return;
            const { readyState } = this.ws;
            if (readyState !== 1) {
                this.setIsSocketDisabled(true);
            }
            if (this.ws.readyState > 1) {
                if (this.socketAwaiterInterval) {
                    clearInterval(this.socketAwaiterInterval);
                }
                this.socketAwaiterInterval = window.setInterval(() => {
                    if (readyState === 1) {
                        clearInterval(this.socketAwaiterInterval);
                    }
                    this.socketConnect();
                }, 5000);
            }
        };
        this.send = (message) => {
            const ws = this.ws;
            if (ws && ws.readyState === 1) {
                ws.send(JSON.stringify(message));
            }
            else {
                console.log('connection lost', ws);
                this.isSocketReconected = false;
                this.setSocketAwaiter();
            }
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
                (0,mobx_esm_js_.runInAction)(() => {
                    this.isRetrieveFinished = true;
                    this.retrieveGameData = data;
                });
                setAlertList({
                    title: i18next_js_["default"].t('NOTIF.CONTINUE_ROUND'),
                    type: 'success',
                });
            }
            catch (error) {
                this.isRetrieveFinished = true;
                return error;
            }
        };
        this.updateScaleEnergy = () => {
            if (this.sessionTimer)
                clearTimeout(this.sessionTimer);
            if (this.sessionInterval)
                clearTimeout(this.sessionInterval);
            if (this.sessionTimeout)
                clearTimeout(this.sessionTimeout);
            this.isSessionActive = true;
            if (this.progressBarLevel < MAX_PROGRESS_BAR_LEVEL) {
                const level = this.progressBarLevel + 1;
                this.updateProgressBarLevel(level);
            }
            this.sessionTimer = setTimeout(() => {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.isSessionActive = false;
                    this.sessionTimer = null;
                });
            }, USER_INACTIVITY_TIMEOUT_MS);
        };
        this.updateProgressBarLevel = (level) => {
            this.progressBarLevel = level;
            localStorageHelper/* default */.A.set('progressBarLevel', level);
            ClickerCanvasController/* clickerCanvasController */.S.invoke('updateScaleEnergy', level);
        };
        this.placeRandomTap = () => {
            const size = this.activeGridState.size;
            if (size === 0) {
                const fallbackCells = [0, 1, 3, 4, 5, 6, 7, 8];
                const randomFallbackIndex = Math.floor(Math.random() * fallbackCells.length);
                const cellId = fallbackCells[randomFallbackIndex];
                this.placeTap({ cellId, isDestroy: false });
                return;
            }
            const activeCellIds = Array.from(this.activeGridState);
            const randomIndex = Math.floor(Math.random() * size);
            const cellId = activeCellIds[randomIndex];
            if (cellId !== undefined) {
                this.placeTap({ cellId, isDestroy: true });
            }
        };
        this.placeTap = (data) => {
            const { profileCommon: { limit: { maxBet }, }, uiCommon: { isOnline, isVisible }, freebetsCommon: { freebetsSuccessIndexList, listAdd, freebetEnabled, freebetActive }, } = this.root;
            const isFreespinGame = this.gameSessionType === 'freespin';
            const isFreeSpinWaitung = !!(this.freeSpinStore.freeSpinsRoundData && this.freeSpinStore.freeSpinsRoundData?.rounds === 0);
            if ((this.balance <= 0 || (this.gameSessionType !== 'freespin' && this.balance < Number(this.amount))) &&
                !this.isFreebetEnabled) {
                this.activateTooltipAfterTap(true);
                return;
            }
            if (this.isFreebetEnabled && !freebetActive?.left && this.gameSessionType !== 'freespin')
                return;
            if (!isOnline || !isVisible || this.isDisabledControls || this.isDisablePlace || isFreeSpinWaitung)
                return;
            if (isFreespinGame) {
                const freeSpinsRoundData = {
                    ...this.freeSpinStore.freeSpinsRoundData,
                    rounds: this.freeSpinStore.freeSpinsRoundData?.rounds - 1,
                };
                this.freeSpinStore.freeSpinsRounds = this.freeSpinStore.freeSpinsRounds + 1;
                const isIncrimentCountBuffer = this.freeSpinStore.freeSpinsRounds <= this.freeSpinStore.freeSpinsTotalRounds;
                if (freeSpinsRoundData?.rounds >= 0 && isIncrimentCountBuffer) {
                    this.betCountBuffer = this.betCountBuffer + 1;
                }
                this.freeSpinStore.setFreeSpinData(freeSpinsRoundData);
                this.freeSpinStore.updateFreeSpinCount();
            }
            else {
                this.betCountBuffer = this.betCountBuffer + 1;
                this.betSumCountBuffer = this.betSumCountBuffer + Number(this.amount);
            }
            this.resetDamageAfterLocked();
            ClickerCanvasController/* clickerCanvasController */.S.invoke('tap', data.cellId);
            this.isWaitingForFirstTap = false;
            this.updateScaleEnergy();
            this.destroyGridState({ cellId: data.cellId, isUpdateHostory: true });
            if (!isFreespinGame && !this.isFreebetEnabled) {
                this.handleUpdateBalance({ amount: Number(this.amount), increase: false });
            }
            if (this.isFreebetEnabled && this.gameSessionType !== 'freespin') {
                listAdd({
                    index: 0,
                    freebet: true,
                });
                if (this.betDebounceTimer) {
                    clearTimeout(this.betDebounceTimer);
                    this.betDebounceTimer = null;
                }
                this.placeBet({ count: this.betCountBuffer, gameSessionType: this.gameSessionType });
                this.betCountBuffer = 0;
                this.betSumCountBuffer = 0;
                return;
            }
            if (this.betCountBuffer === 5 || this.betSumCountBuffer + Number(this.amount) > maxBet) {
                if (this.betDebounceTimer) {
                    clearTimeout(this.betDebounceTimer);
                    this.betDebounceTimer = null;
                }
                this.placeBet({ count: this.betCountBuffer, gameSessionType: this.gameSessionType });
                this.betCountBuffer = 0;
                this.betSumCountBuffer = 0;
                return;
            }
            if (this.betDebounceTimer)
                clearTimeout(this.betDebounceTimer);
            this.betDebounceTimer = setTimeout(() => {
                this.placeBet({ count: this.betCountBuffer, gameSessionType: this.gameSessionType });
                this.betCountBuffer = 0;
                this.betSumCountBuffer = 0;
                this.betDebounceTimer = null;
            }, 300);
        };
        this.placeBet = ({ count, gameSessionType }) => {
            const { root: { profileCommon: { profile: { balance }, }, autobetCommon: { autoBetEnabled }, uiCommon: { showNotEnoughBalanceError, isOnline }, freebetsCommon: { freebetId, freebetActive }, }, } = this;
            if (this.freebetBetProcessing)
                return;
            if (!this.isFreebetEnabled &&
                balance !== null &&
                this.gameSessionType !== 'freespin' &&
                (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
                return;
            }
            const mock = this.mockList.splice(0, Math.min(count, this.mockList.length));
            const isFreespinGame = gameSessionType === 'freespin';
            const isDisplayMock = mock.length && (0,bootstrap.GET_ENV)()?.APP_ENV !== 'production';
            const freebetAmount = freebetActive?.offer?.configuration[0]?.betAmount || 0;
            const amount = this.isFreebetEnabled ? freebetAmount : Number(this.amount);
            const data = {
                type: isFreespinGame ? 'freespin' : 'place',
                count: count,
                energy: this.energy,
                freespin: isFreespinGame,
                metadata: {
                    subPartnerId: this.subPartnerId,
                },
                ...(isDisplayMock && { mock: mock }),
                ...(!isFreespinGame && { amount }),
                ...(!isFreespinGame &&
                    this.isFreebetEnabled &&
                    freebetId && { freebetsId: freebetId, freebetsLeft: freebetActive.left }),
            };
            if (this.isFreebetEnabled && this.gameSessionType !== 'freespin') {
                this.setFreebetBetProcessing(true);
            }
            this.send(data);
            if (this.isTournamentActive) {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.isTournamentStarted = true;
                });
            }
        };
        this.cashout = (gameSessionType) => {
            const { freebetsCommon: { freebetsSuccessIndexList, freebetEnabled, freebetActive }, profileCommon: { limit: { minBet }, }, } = this.root;
            const isActivatedFreebet = freebetsSuccessIndexList.includes(0) && freebetEnabled;
            const isFreespinGame = gameSessionType === 'freespin';
            const cashOut = {
                type: 'cashout',
                minBetAmount: minBet,
                bonusCashout: !isFreespinGame,
                fsCashout: isFreespinGame,
                metadata: {
                    subPartnerId: this.subPartnerId,
                },
                ...(isActivatedFreebet && { freebetsId: freebetActive.id }),
            };
            this.send(cashOut);
        };
        this.bonusbuy = () => {
            const data = {
                type: 'bonusbuy',
                amount: Number(this.amount),
                metadata: {
                    subPartnerId: this.subPartnerId,
                },
            };
            this.setDisabledBuyBtn(true);
            this.isBuyBonus = true;
            this.send(data);
            const bonusBuyPrice = this.gameSettings.bonusBuyPrice || 0;
            const amount = bonusBuyPrice * Number(this.amount);
            this.handleUpdateBalance({ amount, increase: false });
        };
        this.updateGridHistory = ({ cellId, destroyLevel }) => {
            this.gridHistory = [[cellId, destroyLevel], ...this.gridHistory];
            localStorageHelper/* default */.A.set('gridHistory', JSON.stringify(this.gridHistory));
        };
        this.destroyGridState = ({ cellId, isUpdateHostory }) => {
            let destroyLevel = 0;
            const cell = this.gridState[cellId];
            destroyLevel = cell.destroyLevel - 1;
            if (destroyLevel < 0)
                return;
            if (isUpdateHostory) {
                this.updateGridHistory({ cellId, destroyLevel });
            }
            cell.destroyLevel = destroyLevel;
            if (destroyLevel === 0) {
                this.activeGridState.delete(cellId);
            }
            this.gridState = { ...this.gridState, [cellId]: cell };
            localStorageHelper/* default */.A.set('gridState', JSON.stringify(this.gridState));
            ClickerCanvasController/* clickerCanvasController */.S.invoke('makeMinorDamage', cell);
        };
        this.restoreGridState = () => {
            if (!this.gridHistory.length)
                return;
            const [cellHistory, ...lastGridHistory] = this.gridHistory;
            this.gridHistory = lastGridHistory;
            localStorageHelper/* default */.A.set('gridHistory', JSON.stringify(this.gridHistory));
            const cell = {
                zoneNumber: cellHistory[0],
                destroyLevel: cellHistory[1],
            };
            cell.destroyLevel++;
            this.activeGridState.add(cell.zoneNumber);
            this.gridState = { ...this.gridState, [cell.zoneNumber]: cell };
            localStorageHelper/* default */.A.set('gridState', JSON.stringify(this.gridState));
            ClickerCanvasController/* clickerCanvasController */.S.invoke('makeMinorDamage', cell);
        };
        this.updateEnergy = ({ progressBarLevel, isInnit }) => {
            const prevEnergy = this.energy;
            if (progressBarLevel <= 15) {
                this.energy = 0;
            }
            else if (progressBarLevel <= 30) {
                this.energy = 1;
            }
            else if (progressBarLevel > 30) {
                this.energy = 2;
            }
            if (isInnit) {
                ClickerCanvasController/* clickerCanvasController */.S.invoke('updateGameEnergy', this.energy);
                return;
            }
            if (prevEnergy !== this.energy) {
                ClickerCanvasController/* clickerCanvasController */.S.invoke('updateGameEnergy', this.energy);
            }
        };
        this.handleStartWinAnimation = (activeWinId) => {
            const winData = {
                id: this.listOfWins[0]?.id,
                amount: this.listOfWins[0]?.payout,
                payoutCoefficient: this.listOfWins[0]?.payoutCoefficient || 0,
                currency: this.currencySign,
            };
            if (this.gameSessionType == 'freespin') {
                this.balanceTotalWin = this.balanceTotalWin + winData.amount;
            }
            this.listOfWinsIds.set(activeWinId, winData);
            ClickerCanvasController/* clickerCanvasController */.S.invoke('startAnimationWin', winData);
            let animationDisplayTime = 300;
            const queueLength = this.listOfWins.length;
            if (queueLength >= 20) {
                animationDisplayTime = 10;
            }
            if (queueLength >= 10) {
                animationDisplayTime = 100;
            }
            if (queueLength >= 5) {
                animationDisplayTime = 200;
            }
            if (this.isBonusGameQueued) {
                animationDisplayTime = 50;
            }
            setTimeout(() => {
                const newListOfWins = this.listOfWins.slice(1);
                this.listOfWins = newListOfWins;
                if (this.listOfWins[0]?.id) {
                    this.activeWinId = this.listOfWins[0]?.id;
                }
                else {
                    this.activeWinId = null;
                }
            }, animationDisplayTime);
        };
        this.handleEndWinAnimation = (activeWinId) => {
            const winData = this.listOfWinsIds.get(activeWinId);
            if (winData) {
                if (this.gameSessionType === 'freespin') {
                    this.handleUpdateTotalWinBalance({ amount: this.balanceTotalWin });
                }
                else {
                    this.handleUpdateBalance({ amount: winData.amount, increase: true });
                    this.handleUpdateLastWin(Number(winData.amount));
                }
                this.listOfWinsIds.delete(activeWinId);
            }
        };
        this.handleUpdateBalance = ({ amount, increase }) => {
            console.log('@@@ handleUpdateBalance', amount, increase);
            const updatedBalance = increase ? this.balance + amount : this.balance - amount;
            this.balance = updatedBalance;
            increase && this.isTournamentStarted && this.setTournamentScore(this.tournamentScore + Number(amount));
            console.log('@@@ handleUpdateBalance 2', updatedBalance);
            const payload = {
                amount: Number(updatedBalance.toFixed(2)),
                currency: this.currencySign,
            };
            ClickerCanvasController/* clickerCanvasController */.S.invoke('updateBalance', payload);
        };
        this.handleUpdateLastWin = (value) => {
            const payload = {
                amount: Number(value.toFixed(2)),
                currency: this.currencySign,
            };
            localStorageHelper/* default */.A.set('updateLastWin', payload.amount);
            ClickerCanvasController/* clickerCanvasController */.S.invoke('updateLastWin', payload);
        };
        this.handleUpdateTotalWinBalance = ({ amount }) => {
            const payload = {
                amount: Number(amount.toFixed(2)),
                currency: this.currencySign,
            };
            ClickerCanvasController/* clickerCanvasController */.S.invoke('updateTotalWin', payload);
        };
        this.handleRestartMajorDamage = () => {
            this.majorDamageLevel = 7;
            this.archDamageLevel = 7;
            ClickerCanvasController/* clickerCanvasController */.S.invoke('makeMajorDamage', { destroyLevel: this.majorDamageLevel });
            ClickerCanvasController/* clickerCanvasController */.S.invoke('makeArchDamage', {
                currentDestroyLevel: this.archDamageLevel,
                previousDestroyLevel: 0,
            });
        };
        this.handleRestartMinorDamage = () => {
            this.gridState = initialGridState;
            this.gridHistory = [];
            Object.values(this.gridState).forEach((cell) => {
                ClickerCanvasController/* clickerCanvasController */.S.invoke('makeMinorDamage', cell);
            });
            localStorageHelper/* default */.A.set('gridState', JSON.stringify(this.gridState));
            localStorageHelper/* default */.A.set('gridHistory', JSON.stringify(this.gridHistory));
        };
        this.startBonusGameAnimation = () => {
            ClickerCanvasController/* clickerCanvasController */.S.invoke('disabledTap', true);
            (0,mobx_esm_js_.runInAction)(() => {
                this.gameSessionType = 'bonus';
                this.isBonusGameQueued = false;
                this.isWaitingForFirstTap = true;
                this.setDisableControls(true);
                if (!this.controlAmountLockState.isLocked) {
                    this.setControlAmountLocked({ isLocked: true, amountAtLock: this.amount });
                }
            });
            setTimeout(() => {
                ClickerCanvasController/* clickerCanvasController */.S.invoke('startAnimationBonus');
                this.setIsBonusAminating(true);
            }, 500);
        };
        this.completeBonusGameAnimation = () => {
            const { limit: { minBet }, } = this.root.profileCommon;
            const previousDestroyLevel = this.archDamageLevel;
            this.setIsBonusAminating(false);
            this.isTournamentStarted && this.setTournamentScore(this.tournamentScore + minBet);
            if (this.activeBonusWin?.game?.bonusUp) {
                const archDamageLevel = this.majorDamageLevel - 1;
                const majorDamageLevel = this.majorDamageLevel - 1;
                if (archDamageLevel >= 1)
                    this.archDamageLevel = archDamageLevel;
                if (majorDamageLevel >= 1)
                    this.majorDamageLevel = majorDamageLevel;
            }
            if (this.activeBonusWin?.game?.bonusGame) {
                this.majorDamageLevel = 0;
                this.archDamageLevel = 0;
            }
            this.setIsBonusMajorDamageAminating(true);
            ClickerCanvasController/* clickerCanvasController */.S.invoke('makeMajorDamage', { destroyLevel: this.majorDamageLevel });
            ClickerCanvasController/* clickerCanvasController */.S.invoke('makeArchDamage', {
                currentDestroyLevel: this.archDamageLevel,
                previousDestroyLevel,
            });
        };
        this.startBonusWheelAnimation = () => {
            const [bonusWins, ...listOfBonusWins] = this.listOfBonusWins;
            this.listOfBonusWins = listOfBonusWins;
            if (this.activeBonusWin?.game?.bonusUp && this.listOfBonusWins?.length) {
                this.activeBonusWin = null;
                this.isBonusGameQueued = true;
            }
            else if (this.activeBonusWin?.game?.bonusGame) {
                const coef = this.activeBonusWin.state.bonus.multiplier;
                const values = this.activeBonusWin?.state.bonus?.grandPrize;
                const grandLevelValues = {
                    minor_500: 0,
                    minor_777: 1,
                    minor_1000: 2,
                    major_1000: 0,
                    major_2000: 1,
                    major_3000: 2,
                    grand_3000: 0,
                    grand_5000: 1,
                    grand_7777: 2,
                };
                if (values) {
                    const key = `${values}_${coef}`;
                    const level = grandLevelValues[key];
                    if (this.energy !== level) {
                        this.energy = level;
                        ClickerCanvasController/* clickerCanvasController */.S.invoke('updateGameEnergy', this.energy);
                    }
                }
                ClickerCanvasController/* clickerCanvasController */.S.invoke('startAnimationWheel', { coef, values });
                this.setIsWheelAnimating(true);
            }
            else {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.activeBonusWin = null;
                    this.isBonusGameQueued = false;
                    this.gameSessionType = 'regular';
                    this.setDisableControls(false);
                    ClickerCanvasController/* clickerCanvasController */.S.invoke('disabledTap', false);
                    if (this.freeSpinStore.freeSpinsRoundData) {
                        this.freeSpinStore.isFreeSpinsGameQueued = true;
                    }
                });
            }
        };
        this.completeBonusWheelAnimation = () => {
            this.setIsWheelAnimating(false);
            const [data] = this.bonusCashoutResultData;
            switch (true) {
                case data.payoutCoefficient >= 100 && data.payoutCoefficient <= 250:
                    this.modalCongig = {
                        type: 'bigwin',
                        timeToLife: 4000,
                        audio: 'win',
                        title: i18next_js_["default"].t('CHICKEN_ZAP.YOU_WIN'),
                        payout: data.payout,
                        payoutCoefficient: data.payoutCoefficient,
                    };
                    break;
                case data.payoutCoefficient > 250:
                    this.modalCongig = {
                        type: 'megawin',
                        timeToLife: 5000,
                        audio: 'youWinPopup',
                        title: i18next_js_["default"].t('CHICKEN_ZAP.YOU_WIN'),
                        payout: data.payout,
                        payoutCoefficient: data.payoutCoefficient,
                    };
                    break;
                case data.payoutCoefficient < 100:
                default:
                    this.modalCongig = {
                        type: 'youwin',
                        timeToLife: 3000,
                        audio: 'win',
                        title: i18next_js_["default"].t('CHICKEN_ZAP.YOU_WIN'),
                        payout: data.payout,
                        payoutCoefficient: data.payoutCoefficient,
                    };
            }
            this.showWinPopup();
        };
        this.showWinPopup = () => {
            const { profileCommon: { profile: { currencySign }, }, audioCommon: { playAudio, stopMusicPlaylist, playMusicPlaylistItem }, freebetsCommon: { listRemoveByIndex, freebetActive }, } = this.root;
            const { type, payout, payoutCoefficient, title, timeToLife } = this.modalCongig;
            const data = {
                type,
                title,
                amount: payout,
                currency: currencySign,
                coefficient: payoutCoefficient,
            };
            stopMusicPlaylist();
            playAudio(data.type);
            ClickerCanvasController/* clickerCanvasController */.S.invoke('showWinPopup', data);
            setTimeout(() => {
                this.handleRestartMajorDamage();
                this.handleRestartMinorDamage();
            }, 1000);
            setTimeout(() => {
                playMusicPlaylistItem('fill2');
                ClickerCanvasController/* clickerCanvasController */.S.invoke('hideWinPopup');
                (0,mobx_esm_js_.runInAction)(() => {
                    const [data, ...bonusCashoutResultData] = this.bonusCashoutResultData;
                    this.bonusCashoutResultData = bonusCashoutResultData;
                    this.gameSessionType = 'regular';
                    if (this.isFreebetEnabled && freebetActive.left === 0) {
                        listRemoveByIndex(0);
                    }
                    this.handleUpdateBalance({ amount: Number(payout), increase: true });
                    this.handleUpdateLastWin(Number(payout));
                    if (!this.listOfBonusWins?.length) {
                        this.setControlAmountLocked({ isLocked: false });
                    }
                    if (this.listOfBonusWins?.length) {
                        this.isBonusGameQueued = true;
                        const bonusGame = this.listOfBonusWins[0]?.game?.bonusGame;
                        if (bonusGame) {
                            this.isRunBonusCashoutAnimation = true;
                        }
                    }
                    else if (this.freeSpinStore.freeSpinsRoundData) {
                        this.freeSpinStore.isFreeSpinsGameQueued = true;
                    }
                });
            }, timeToLife);
        };
        this.setUserIcondData = (data) => {
            this.userIcondData = [...this.userIcondData, ...data];
        };
        this.setAutoSpinFreexCount = (count) => {
            this.frozenAutoSpinCount = count;
        };
        this.handleInnitGame = () => {
            const payload = {
                amount: Number(this.balance.toFixed(2)),
                currency: this.currencySign,
            };
            const updateLastWin = JSON.parse(localStorageHelper/* default */.A.get('updateLastWin'));
            const progressBarLevel = JSON.parse(localStorageHelper/* default */.A.get('progressBarLevel'));
            const gridHistory = JSON.parse(localStorageHelper/* default */.A.get('gridHistory'));
            const gridState = JSON.parse(localStorageHelper/* default */.A.get('gridState'));
            ClickerCanvasController/* clickerCanvasController */.S.invoke('updateBalance', payload);
            this.gridHistory = gridHistory || [];
            this.gridState = gridState || initialGridState;
            Object.values(this.gridState).forEach((cell) => {
                ClickerCanvasController/* clickerCanvasController */.S.invoke('makeMinorDamage', cell);
            });
            this.handleUpdateLastWin(updateLastWin || 0);
            this.updateProgressBarLevel(progressBarLevel || 0);
            this.updateEnergy({ progressBarLevel, isInnit: true });
        };
        this.handleInnitGameAfterRetrieve = () => {
            if (this.retrieveGameData) {
                const bonusCollection = this.retrieveGameData?.state?.bonusCollection || 0;
                const firstDamageLevel = bonusCollection >= 10 ? 1 : 0;
                const damageLevel = firstDamageLevel + Math.floor(bonusCollection / 20);
                if (damageLevel) {
                    const controlAmountLockState = JSON.parse(localStorageHelper/* default */.A.get('controlAmountLockState'));
                    if (controlAmountLockState) {
                        this.setControlAmountLocked({ ...controlAmountLockState, isLocked: true });
                    }
                }
                this.majorDamageLevel = this.majorDamageLevel - damageLevel;
                this.archDamageLevel = this.archDamageLevel - damageLevel;
                ClickerCanvasController/* clickerCanvasController */.S.invoke('makeMajorDamage', { destroyLevel: this.majorDamageLevel });
                ClickerCanvasController/* clickerCanvasController */.S.invoke('makeArchDamage', {
                    currentDestroyLevel: this.archDamageLevel,
                    previousDestroyLevel: 7,
                });
                if (this.retrieveGameData?.state.freespins) {
                    const bonusCoin = JSON.parse(localStorageHelper/* default */.A.get('bonusCoin'));
                    if (bonusCoin) {
                        this.bonusCoin = Number(bonusCoin);
                        ClickerCanvasController/* clickerCanvasController */.S.invoke('refreshBonusCoin', this.bonusCoin);
                    }
                    const freespinsPayout = this.retrieveGameData?.state?.freespinsPayout || 0;
                    const coefficient = this.retrieveGameData?.state?.freespins?.multiplier || 0;
                    const rounds = this.retrieveGameData?.state?.freespins?.left || 0;
                    const totalRounds = this.retrieveGameData?.state?.freespins?.total || 0;
                    if (rounds !== 0 && coefficient !== 0) {
                        const freeSpinsRoundData = {
                            isWin: true,
                            coefficient: coefficient,
                            rounds,
                        };
                        setTimeout(() => {
                            this.balanceTotalWin = freespinsPayout;
                            this.gameSessionType = 'freespin';
                            const payload = {
                                amount: this.balanceTotalWin,
                                currency: this.currencySign,
                            };
                            this.freeSpinStore.freeSpinsTotalRounds = totalRounds;
                            this.freeSpinStore.setFreeSpinData(freeSpinsRoundData);
                            ClickerCanvasController/* clickerCanvasController */.S.invoke('setTypeOfRound', { type: 'freespin' });
                            this.handleUpdateTotalWinBalance({ amount: this.balanceTotalWin });
                            ClickerCanvasController/* clickerCanvasController */.S.invoke('setFreeSpinCount', { rounds, coefficient });
                            ClickerCanvasController/* clickerCanvasController */.S.invoke('showTotalWin', payload);
                        }, 1000);
                    }
                }
            }
        };
        this.setBuyBonus = (value) => {
            this.isBuyBonus = value;
        };
        this.setGameSessionType = (value) => {
            this.gameSessionType = value;
        };
        this.setBonusCoin = () => {
            this.bonusCoin = this.bonusCoin + 1;
            ClickerCanvasController/* clickerCanvasController */.S.invoke('addBonusCoin');
            localStorageHelper/* default */.A.set('bonusCoin', this.bonusCoin);
        };
        this.useBonusCoin = () => {
            this.bonusCoin = this.bonusCoin - 1;
            ClickerCanvasController/* clickerCanvasController */.S.invoke('useBonusCoin');
            localStorageHelper/* default */.A.set('bonusCoin', this.bonusCoin);
        };
        this.setControlAmountLocked = (value) => {
            this.controlAmountLockState = { ...this.controlAmountLockState, ...value };
            localStorageHelper/* default */.A.set('controlAmountLockState', JSON.stringify(this.controlAmountLockState));
        };
        this.resetDamageAfterLocked = () => {
            const { freebetsCommon: { freebetEnabled, freebetActive }, } = this.root;
            const isManuallyUnlocked = this.controlAmountLockState.isManuallyUnlocked;
            if (!isManuallyUnlocked)
                return;
            const amountAtLock = this.controlAmountLockState.amountAtLock;
            const freebetAmount = freebetActive?.offer?.configuration[0]?.betAmount || 0;
            if (freebetEnabled && isManuallyUnlocked && Number(amountAtLock) !== Number(freebetAmount)) {
                this.handleRestartMajorDamage();
                this.setControlAmountLocked({ isManuallyUnlocked: false });
                return;
            }
            if (isManuallyUnlocked && Number(amountAtLock) !== Number(this.amount)) {
                this.handleRestartMajorDamage();
                this.setControlAmountLocked({ isManuallyUnlocked: false });
            }
            else if (isManuallyUnlocked && Number(amountAtLock) === Number(this.amount)) {
                this.setControlAmountLocked({ isLocked: true, isManuallyUnlocked: false });
            }
        };
        this.activateTooltipAfterTap = (value) => {
            this.isTooltipActivate = value;
        };
        this.setLongPressTriggered = (value) => {
            this.isLongPressTriggered = value;
        };
        this.gtmBetPlacedPush = ({ betId, rounds }) => {
            (0,gtmDataLayerPush/* default */.A)({ parameters: null });
            (0,gtmDataLayerPush/* default */.A)({
                action: 'bet_placed',
                sid: this.root.profileCommon.profile.sid,
                parameters: {
                    value: Number(this.amount) * Number(rounds),
                    currency: this.currency,
                    object: `bet_1.place`,
                    round_id: betId,
                    id: betId,
                },
            });
        };
        this.gtmCanvasBetPlacedPush = () => {
            (0,gtmDataLayerPush/* default */.A)({ parameters: null });
            (0,gtmDataLayerPush/* default */.A)({
                action: 'tracked_element_clicked',
                parameters: {
                    object: 'bet_2.place',
                },
            });
        };
        this.gtmBuyBonus = ({ object }) => {
            (0,gtmDataLayerPush/* default */.A)({ parameters: null });
            (0,gtmDataLayerPush/* default */.A)({
                action: 'tracked_element_clicked',
                parameters: {
                    object,
                },
            });
        };
        this.gtmBonusGame = ({ betId, rounds, count, state, method = 'manual', }) => {
            (0,gtmDataLayerPush/* default */.A)({ parameters: null });
            (0,gtmDataLayerPush/* default */.A)({
                action: 'bonus_game',
                parameters: {
                    id: betId,
                    round_id: betId,
                    state,
                    method,
                    count,
                    value: Number(this.amount) * Number(rounds),
                    currency: this.currency,
                },
            });
        };
        this.gtmBetClosedPush = ({ isWin, betId, coefficient, rounds, }) => {
            (0,gtmDataLayerPush/* default */.A)({ parameters: null });
            (0,gtmDataLayerPush/* default */.A)({
                action: 'bet_closed',
                parameters: {
                    id: betId,
                    round_id: betId,
                    object: isWin ? 'cashout' : 'lost',
                    value: Number(this.amount) * Number(rounds),
                    currency: this.currency,
                    wins: isWin ? 1 : 0,
                    multiplier: isWin ? coefficient : undefined,
                },
            });
        };
        this.setDisabledBuyBtn = (value) => {
            ClickerCanvasController/* clickerCanvasController */.S.invoke('disabledBuyBtn', value);
        };
        this.renderTestUserIconData = () => {
            return;
            // removed by dead control flow

            // removed by dead control flow

        };
        this.setFreebetBetProcessing = (value) => {
            this.freebetBetProcessing = value;
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.freeSpinStore = new FreeSpinStore.FreeSpinStore(this);
        this.root = root;
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'holdcrash';
        this.gameServerTheme = gameConfig.gameServerTheme || 'default';
        if (this.gameServerId === 'tapinata-tournament')
            return null;
        this.centrifuge = new (centrifuge_js_default())((0,config/* config */.$)().centrifuge || '', {
            debug: (0,bootstrap.GET_ENV)().NODE_ENV === 'development',
        });
        this.centrifuge.connect();
        this.centrifuge.subscribe('tapinata', {
            publish: (ctx) => {
                const data = ctx.data;
                const newData = data?.wins?.map((win) => ({ ...data, p: data.p + 1, win }));
                if (Array.isArray(newData) && newData) {
                    this.setUserIcondData(newData);
                }
            },
            subscribe: (ctx) => { },
            error: (ctx) => {
                console.error('@@@! Помилка підписки на tapinata', ctx);
            },
        });
        const { search } = document.location;
        const urlParams = new URLSearchParams(search);
        this.subPartnerId = urlParams.get('sub_partner_id') || '';
        const isTournament = urlParams.get('is_tournament');
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            const { splitTest } = this.root.profileCommon.profile;
            if (splitTest?.variantValue === 'tapinata_alt_rtp') {
                if (splitTest?.variantType === 'test2') {
                    this.setVersion('f2');
                }
                if (splitTest?.variantType === 'test') {
                    this.setCustomRtp('99');
                }
            }
            !isTournament && this.retrieveGame();
            this.getGameSettings();
            this.retrieveAmount();
            setTimeout(() => {
                this.socketConnect();
            }, 100);
            this.currency = this.root.profileCommon.profile.currency;
            this.currencySign = this.root.profileCommon.profile.currencySign;
            this.balance = this.root.profileCommon.profile.balance;
            const { search } = document.location;
            const urlParams = new URLSearchParams(search);
            const mock = urlParams.get('mock')?.split('')?.map(Number);
            if (mock?.length) {
                const multiplierBonusData = {
                    5: {
                        5: 500,
                        6: 777,
                        7: 1000,
                    },
                    6: {
                        5: 1000,
                        6: 2000,
                        7: 3000,
                    },
                    7: {
                        5: 3000,
                        6: 5000,
                        7: 7777,
                    },
                };
                const grandPrizeBonusData = {
                    5: 'minor',
                    6: 'major',
                    7: 'grand',
                };
                this.mockList = mock
                    .map((mockId, index) => {
                    if (mockId === 3) {
                        const grandPrizeId = mock[index + 1];
                        const multiplierId = mock[index + 2];
                        const grandPrizeData = grandPrizeBonusData[grandPrizeId];
                        const multiplierData = multiplierBonusData[grandPrizeId] && multiplierBonusData[grandPrizeId][multiplierId];
                        const bonusData = {
                            type: 'bonus',
                            bonusGame: {
                                ...(grandPrizeData ? { grandPrize: grandPrizeData } : { grandPrize: 'minor' }),
                                ...(multiplierData ? { multiplier: multiplierData } : { multiplier: 777 }),
                            },
                        };
                        return bonusData;
                    }
                    return mockListData[mockId];
                })
                    .filter((data) => data != null);
            }
            for (let i = 0; i <= 8; i++) {
                this.activeGridState.add(i);
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isCanvasLoaded: this.isCanvasLoaded,
            isOnline: this.root?.uiCommon?.isOnline,
            isVisible: this.root?.uiCommon?.isVisible,
            isFreebetEnabled: this.isFreebetEnabled,
            freebetEnabled: this.root?.freebetsCommon.freebetEnabled,
            isWaitingStartRound: this.freeSpinStore.isWaitingStartRound,
        }), ({ isCanvasLoaded, isOnline, isVisible, isFreebetEnabled, isWaitingStartRound }) => {
            if (isCanvasLoaded) {
                if (!isOnline || !isVisible || isFreebetEnabled) {
                    this.setDisabledBuyBtn(true);
                    ClickerCanvasController/* clickerCanvasController */.S.invoke('disabledBuyBtnInModal', true);
                }
                else {
                    this.setDisabledBuyBtn(false);
                    ClickerCanvasController/* clickerCanvasController */.S.invoke('disabledBuyBtnInModal', false);
                }
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isLongPressTriggered: this.isLongPressTriggered,
            isOnline: this.root?.uiCommon?.isOnline,
            isVisible: this.root?.uiCommon?.isVisible,
        }), ({ isLongPressTriggered, isOnline, isVisible }) => {
            if (!isLongPressTriggered || !isOnline || !isVisible) {
                clearInterval(this.longPressTriggeredInterval);
                this.longPressTriggeredInterval = null;
                return;
            }
            if (isLongPressTriggered) {
                this.longPressTriggeredInterval = setInterval(() => {
                    if (this.freeSpinStore.freeSpinsRoundData && this.freeSpinStore.freeSpinsRoundData.rounds === 0) {
                        clearInterval(this.longPressTriggeredInterval);
                        this.longPressTriggeredInterval = null;
                    }
                    this.placeRandomTap();
                    this.root.audioCommon.playAudio('bat_hit_spin');
                }, TIME_AUTO_BET_MS);
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isCanvasLoaded: this.isCanvasLoaded,
            isRetrieveFinished: this.isRetrieveFinished,
            retrieveGameData: this.retrieveGameData,
        }), ({ isCanvasLoaded, isRetrieveFinished, retrieveGameData }) => {
            if (isCanvasLoaded && isRetrieveFinished) {
                this.handleInnitGame();
                if (retrieveGameData) {
                    this.handleInnitGameAfterRetrieve();
                }
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isSocketDisabled: this.isSocketDisabled,
            userAuthenticated: this.root.profileCommon.userAuthenticated,
            isBonusGameQueued: this.isBonusGameQueued,
            gameSessionType: this.gameSessionType,
            isFreeSpinsCompleted: this.freeSpinStore.isFreeSpinsCompleted,
            freeSpinsRoundData: this.freeSpinStore.freeSpinsRoundData,
            balance: this.balance,
            amount: this.amount,
            isFreebetEnabled: this.isFreebetEnabled,
        }), ({ isSocketDisabled, userAuthenticated, isBonusGameQueued, gameSessionType, isFreeSpinsCompleted, freeSpinsRoundData, balance, amount, isFreebetEnabled, }) => {
            const { limit: { minBet }, } = this.root.profileCommon;
            if (isSocketDisabled ||
                !userAuthenticated ||
                (isBonusGameQueued && gameSessionType !== 'freespin') ||
                gameSessionType === 'bonus' ||
                isFreeSpinsCompleted ||
                (gameSessionType === 'freespin' && freeSpinsRoundData?.rounds === 0) ||
                (gameSessionType !== 'freespin' && balance <= 0 && !isFreebetEnabled) ||
                (gameSessionType !== 'freespin' && balance < minBet && !isFreebetEnabled)) {
                if (this.isDisabledControls)
                    return;
                this.setDisableControls(true);
                ClickerCanvasController/* clickerCanvasController */.S.invoke('disabledTap', true);
            }
            else {
                if (!this.isDisabledControls)
                    return;
                this.setDisableControls(false);
                ClickerCanvasController/* clickerCanvasController */.S.invoke('disabledTap', false);
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isCanvasLoaded: this.isCanvasLoaded,
            isDisabledControls: this.isDisabledControls,
        }), ({ isCanvasLoaded, isDisabledControls }) => {
            if (isCanvasLoaded && isDisabledControls) {
                ClickerCanvasController/* clickerCanvasController */.S.invoke('disabledTap', true);
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            gameSessionType: this.gameSessionType,
            isBonusGameQueued: this.isBonusGameQueued,
            isFreeSpinsGameQueued: this.freeSpinStore.isFreeSpinsGameQueued,
            isFreebetEnabled: this.isFreebetEnabled,
            isWaitingStartRound: this.freeSpinStore.isWaitingStartRound,
        }), ({ isBonusGameQueued, isFreeSpinsGameQueued, gameSessionType, isFreebetEnabled }) => {
            if (isBonusGameQueued ||
                isFreeSpinsGameQueued ||
                gameSessionType === 'bonus' ||
                gameSessionType === 'freespin' ||
                isFreebetEnabled) {
                this.setDisabledBuyBtn(true);
            }
            else {
                this.setDisabledBuyBtn(false);
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            userIcondData: this.userIcondData,
            isCanvasLoaded: this.isCanvasLoaded,
            isOnline: this.root?.uiCommon?.isOnline,
            isVisible: this.root?.uiCommon?.isVisible,
        }), ({ userIcondData, isCanvasLoaded, isOnline, isVisible }) => {
            let hasWordInUrl = location.href.toLowerCase().includes('sweepstake');
            this.renderTestUserIconData();
            if (!isOnline || !isVisible) {
                clearInterval(this.timeoutintarvalUserIconEmpty);
                clearInterval(this.timeoutintarvalUserIcon);
                this.timeoutintarvalUserIcon = null;
                this.timeoutintarvalUserIconEmpty = null;
                ClickerCanvasController/* clickerCanvasController */.S.invoke('updateAvatars', []);
                return;
            }
            if (!userIcondData.length && !this.timeoutintarvalUserIconEmpty) {
                clearInterval(this.timeoutintarvalUserIcon);
                this.timeoutintarvalUserIcon = null;
                this.timeoutintarvalUserIconEmpty = setTimeout(() => {
                    this.timeoutintarvalUserIconEmpty = null;
                    ClickerCanvasController/* clickerCanvasController */.S.invoke('updateAvatars', []);
                }, 6000);
                return;
            }
            if (isCanvasLoaded && userIcondData.length && !this.timeoutintarvalUserIcon) {
                clearInterval(this.timeoutintarvalUserIconEmpty);
                this.timeoutintarvalUserIconEmpty = null;
                this.timeoutintarvalUserIcon = setInterval(() => {
                    (0,mobx_esm_js_.runInAction)(() => {
                        const [firstObj, ...newWserIcondData] = this.userIcondData;
                        this.userIcondData = newWserIcondData;
                        if (firstObj) {
                            this.userIconsMapData.set(firstObj.p, {
                                ...firstObj,
                                liveTimeAnimation: firstObj.liveTimeAnimation ? firstObj.liveTimeAnimation : Date.now(),
                            });
                        }
                        const now = Date.now();
                        this.userIconsMapData.forEach((obj, key) => {
                            if (now - obj.liveTimeAnimation > 5000) {
                                if (obj.liveTimeWinIsLos) {
                                    this.userIconsMapData.set(key, {
                                        ...obj,
                                        win: null,
                                    });
                                }
                                else {
                                    this.userIconsMapData.set(key, {
                                        ...obj,
                                        win: null,
                                        liveTimeWinIsLos: now,
                                    });
                                }
                            }
                            if (obj.win === null && obj.liveTimeWinIsLos && now - obj.liveTimeWinIsLos > 10000) {
                                this.userIconsMapData.delete(key);
                            }
                        });
                        const textData = [];
                        this.userIconsMapData.forEach((data) => {
                            let currency = data.c;
                            if (hasWordInUrl) {
                                currency = '';
                            }
                            textData.push({
                                id: data.p,
                                amount: data.win ? `${currency} ${data.win}` : null,
                            });
                            return {
                                id: data.p,
                                amount: data.win ? `${currency} ${data.win}` : null,
                            };
                        });
                        ClickerCanvasController/* clickerCanvasController */.S.invoke('updateAvatars', textData);
                        this.timeoutintarvalUserIcon = null;
                    });
                }, 500);
            }
        });
        (0,mobx_esm_js_.reaction)(() => this.activeWinId, (activeWinId) => {
            if (activeWinId) {
                this.handleStartWinAnimation(activeWinId);
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isSessionActive: this.isSessionActive,
            isBonusGameQueued: this.isBonusGameQueued,
            gameSessionType: this.gameSessionType,
            isFreeSpinsGameQueued: this.freeSpinStore.isFreeSpinsGameQueued,
            isFreeSpinsCompleted: this.freeSpinStore.isFreeSpinsCompleted,
            isWaitingForFirstTap: this.isWaitingForFirstTap,
        }), ({ isSessionActive, isBonusGameQueued, gameSessionType, isFreeSpinsGameQueued, isFreeSpinsCompleted, isWaitingForFirstTap, }) => {
            if (this.sessionInterval)
                clearTimeout(this.sessionInterval);
            if (this.sessionTimeout)
                clearTimeout(this.sessionTimeout);
            if ((isBonusGameQueued && gameSessionType !== 'freespin') ||
                gameSessionType === 'bonus' ||
                isFreeSpinsGameQueued ||
                isFreeSpinsCompleted ||
                isWaitingForFirstTap) {
                return;
            }
            if (!isSessionActive && this.progressBarLevel >= 1) {
                this.sessionTimeout = setTimeout(() => {
                    this.sessionInterval = setInterval(() => {
                        if (this.progressBarLevel === 0 && !this.gridHistory.length) {
                            clearTimeout(this.sessionInterval);
                            clearTimeout(this.sessionTimeout);
                            return;
                        }
                        this.restoreGridState();
                        if (this.progressBarLevel !== 0) {
                            const level = this.progressBarLevel - 1;
                            this.updateProgressBarLevel(level);
                        }
                    }, 130);
                }, 3000);
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            progressBarLevel: this.progressBarLevel,
            gameSessionType: this.gameSessionType,
        }), ({ progressBarLevel, gameSessionType }) => {
            if (gameSessionType === 'freespin')
                return;
            this.updateEnergy({ progressBarLevel, isInnit: false });
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isMakeBonusCashout: this.isMakeBonusCashout,
        }), ({ isMakeBonusCashout }) => {
            if (isMakeBonusCashout) {
                this.isMakeBonusCashout = false;
                this.cashout('regular');
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            activeWinId: this.activeWinId,
            isBonusGameQueued: this.isBonusGameQueued,
            listOfBonusWins: this.listOfBonusWins,
            gameSessionType: this.gameSessionType,
            isFreeSpinsGameQueued: this.freeSpinStore.isFreeSpinsGameQueued,
        }), ({ activeWinId, isBonusGameQueued, listOfBonusWins, gameSessionType, isFreeSpinsGameQueued }) => {
            if (gameSessionType === 'freespin' || isFreeSpinsGameQueued)
                return;
            if (isBonusGameQueued && !activeWinId && listOfBonusWins?.length) {
                const [bonusWins] = listOfBonusWins;
                if (bonusWins?.game?.bonusUp) {
                    if (this.bonusCoin) {
                        this.useBonusCoin();
                    }
                    this.activeBonusWin = bonusWins;
                    this.startBonusGameAnimation();
                }
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            activeWinId: this.activeWinId,
            bonusCashoutResultData: this.bonusCashoutResultData,
            isBonusGameQueued: this.isBonusGameQueued,
            listOfBonusWins: this.listOfBonusWins,
            gameSessionType: this.gameSessionType,
            isRunBonusCashoutAnimation: this.isRunBonusCashoutAnimation,
            isFreeSpinsGameQueued: this.freeSpinStore.isFreeSpinsGameQueued,
        }), ({ activeWinId, listOfBonusWins, bonusCashoutResultData, gameSessionType, isRunBonusCashoutAnimation, isBonusGameQueued, isFreeSpinsGameQueued, }) => {
            if (gameSessionType === 'freespin' || isFreeSpinsGameQueued)
                return;
            if (listOfBonusWins?.length && !activeWinId && bonusCashoutResultData.length && isBonusGameQueued) {
                const [bonusWins] = listOfBonusWins;
                if (bonusWins.game.bonusGame && isRunBonusCashoutAnimation) {
                    this.isRunBonusCashoutAnimation = false;
                    if (this.bonusCoin) {
                        this.useBonusCoin();
                    }
                    this.activeBonusWin = bonusWins;
                    this.startBonusGameAnimation();
                }
            }
        });
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: this.amount }];
        }, (index, { amount }) => {
        });
    }
    get isFreebetEnabled() {
        const { freebetsSuccessIndexList, freebetEnabled } = this.root.freebetsCommon;
        return freebetsSuccessIndexList.includes(0) && freebetEnabled;
    }
    socketCodeResolver(code, data) {
        const { uiCommon: { setAlertList }, } = this.root;
        switch (code) {
            case 400:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('COMMON.ERROR.NO_ACTION'),
                    type: 'error',
                });
                break;
            case 401:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('NOTIF.9'),
                    type: 'error',
                });
                break;
            case 402:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('NOTIF.4'),
                    type: 'error',
                });
                break;
            case 405:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('COMMON.ERROR.NO_ROUND'),
                    type: 'error',
                });
                break;
            case 601:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('NOTIF.5'),
                    type: 'error',
                });
                break;
            case 603:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('NOTIF.6'),
                    type: 'error',
                });
                break;
            case 604:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('NOTIF.7'),
                    type: 'error',
                });
                break;
            case 606:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: data && data.error && typeof data.error === 'string'
                        ? `Error: ${data.error}`
                        : i18next_js_["default"].t('COMMON.ERROR.PLACEBET'),
                    type: 'error',
                });
                break;
            case 607:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('NOTIF.8'),
                    type: 'error',
                });
                break;
            case 609:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('NOTIF.10'),
                    type: 'error',
                });
                break;
            case 618:
                this.setIsSocketDisabled(true);
                this.isSocketReconected = true;
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.INACTIVE_SOCKET_CONNECT'),
                    type: 'error',
                    sticky: true,
                });
                break;
            default:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t(`COMMON.PLACEBET.ERROR.${code}`),
                    type: 'error',
                });
        }
    }
}
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "customRtp", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setCustomRtp", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "version", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setVersion", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "roundId", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "lostRounds", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "wonRounds", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "theme", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isAutoStart", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isDisabledBetBtn", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isActiveWonModal", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isActiveBonusModal", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isLoadingPlaceBet", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isTurboBet", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isBetButtonPressed", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isRoundError", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "gameSettings", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isGameCreated", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isRoundStarted", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isStepProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isStepnimationProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isDisabledControls", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isDisablePlace", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "sessionLevel", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "sessionLevelData", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isWheelAnimating", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isBonusAminating", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isBonusMajorDamageAminating", void 0);
__decorate([
    mobx_esm_js_.computed
], ClickerCommon.prototype, "isFreebetEnabled", null);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setIsWheelAnimating", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setIsBonusAminating", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setIsBonusMajorDamageAminating", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setSessionLevel", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setDisableControls", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setDisablePlace", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setStepnimationProcessing", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "retrieveIsAutoStart", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "retrieveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setAutoStart", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setLostRounds", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setWonRounds", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setDisabledBetBtn", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setActiveWonModal", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setActiveBonusModal", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setLoadingPlaceBet", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setTurboBet", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setBetButtonPressed", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "getGameSettings", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "mockList", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "frozenAutoSpinCount", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "gameId", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "gridState", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "activeGridState", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "gridHistory", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "listOfWins", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "listOfWinsIds", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "activeWinId", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "gameSessionType", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isSessionActive", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "majorDamageLevel", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "archDamageLevel", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isBonusGameQueued", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "listOfBonusWins", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "activeBonusWin", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isMakeBonusCashout", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isRunBonusCashoutAnimation", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "bonusCashoutResultData", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isBuyBonus", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "freebetBetProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "modalCongig", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "currency", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "currencySign", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "balance", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "balanceTotalWin", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "progressBarLevel", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "energy", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "bonusCoin", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isWaitingForFirstTap", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isTooltipActivate", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isLongPressTriggered", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "controlAmountLockState", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "retrieveGameData", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isRetrieveFinished", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "userIcondData", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "userIconsMapData", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isSocketReconected", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isSocketDisabled", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isBetPlaced", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isTournamentStarted", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "tournamentScore", void 0);
__decorate([
    mobx_esm_js_.observable
], ClickerCommon.prototype, "isTournamentActive", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setWinToList", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setBonusWinToList", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setIsSocketDisabled", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setTournamentScore", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setIsTournamentActive", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setIsTournamentStarted", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "socketConnect", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "wsHandler", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setSocketAwaiter", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "retrieveGame", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "updateScaleEnergy", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "updateProgressBarLevel", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "placeRandomTap", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "placeTap", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "placeBet", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "cashout", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "bonusbuy", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "updateGridHistory", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "destroyGridState", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "restoreGridState", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "updateEnergy", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "handleStartWinAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "handleEndWinAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "handleUpdateBalance", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "handleUpdateLastWin", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "handleUpdateTotalWinBalance", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "handleRestartMajorDamage", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "handleRestartMinorDamage", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "startBonusGameAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "completeBonusGameAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "startBonusWheelAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "completeBonusWheelAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "showWinPopup", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setUserIcondData", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setAutoSpinFreexCount", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "handleInnitGame", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "handleInnitGameAfterRetrieve", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setBuyBonus", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setGameSessionType", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setBonusCoin", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "useBonusCoin", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setControlAmountLocked", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "resetDamageAfterLocked", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "activateTooltipAfterTap", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setLongPressTriggered", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "gtmBetPlacedPush", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "gtmCanvasBetPlacedPush", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "gtmBuyBonus", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "gtmBonusGame", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "gtmBetClosedPush", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setDisabledBuyBtn", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "renderTestUserIconData", void 0);
__decorate([
    mobx_esm_js_.action
], ClickerCommon.prototype, "setFreebetBetProcessing", void 0);
/* harmony default export */ const store_ClickerCommon = (ClickerCommon);


/***/ }),

/***/ 64425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FreeSpinStore: () => (/* binding */ FreeSpinStore)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49953);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8570);
/* harmony import */ var _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96899);
/* harmony import */ var _store_ClickerCommon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50647);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




class FreeSpinStore {
    constructor(parent) {
        this.isFreeSpinsCashout = false;
        this.isFreeSpinsCompleted = false;
        this.isFreeSpinsGameQueued = false;
        this.isWaitingStartRound = false;
        this.isFreeSpinsSessionInActive = false;
        this.isOpendBuyFSModal = false;
        this.isStarFreeSpinGameAnimation = false;
        this.freeSpinsTotalRounds = 0;
        this.freeSpinsRounds = 0;
        this.freeSpinsCashoutData = null;
        this.freeSpinsRoundData = null;
        this.startFreeSpinsRoundData = null;
        this.freeSpinsSessionInActiveCount = _store_ClickerCommon__WEBPACK_IMPORTED_MODULE_3__.USER_INACTIVITY_FC_ROUND_COUNT;
        this.isWasAutoPlay = false;
        this.freeSpinInProcess = false;
        this.freeSpinsSessionTimer = null;
        this.freeSpinsSessionInterval = null;
        this.freeSpinsSessionCountInterval = null;
        this.starFreeSpinGameAnimationTimer = null;
        this.starFreeSpinGameAnimation = () => {
            _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('startAnimationFreeSpin', {
                ...this.freeSpinsRoundData,
                isBuy: this.parent.isBuyBonus,
            });
            setTimeout(() => {
                this.parent.setBuyBonus(false);
            }, 1000);
            return;
        };
        this.completeFreeSpinGameAnimation = ({ isWin }) => {
            const { root: { freebetsCommon: { freebetActive, listRemoveByIndex }, }, isFreebetEnabled, } = this.parent;
            this.startFreeSpinsRoundData = { isWin };
            this.parent.setDisablePlace(true);
            this.parent.isWaitingForFirstTap = true;
            this.isWaitingStartRound = true;
            if (isFreebetEnabled && freebetActive.left === 0 && !isWin) {
                listRemoveByIndex(0);
            }
        };
        this.startFreeSpinRound = ({ isWin }) => {
            if (this.parent.isFreebetEnabled) {
                this.parent.setFreebetBetProcessing(false);
            }
            this.isWasAutoPlay = false;
            if (isWin) {
                const payload = {
                    amount: 0,
                    currency: this.parent.currencySign,
                };
                _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('setTypeOfRound', { type: 'freespin' });
                _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('setFreeSpinCount', this.freeSpinsRoundData);
                _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('showTotalWin', payload);
                this.parent.handleUpdateTotalWinBalance({ amount: this.parent.balanceTotalWin });
                this.setFreeSpinsSessionInActive(false);
                setTimeout(() => {
                    (0,mobx__WEBPACK_IMPORTED_MODULE_1__.runInAction)(() => {
                        this.isWaitingStartRound = false;
                        this.isFreeSpinsGameQueued = false;
                        this.isStarFreeSpinGameAnimation = false;
                        this.parent.isWaitingForFirstTap = false;
                        this.parent.setDisablePlace(false);
                        this.parent.setGameSessionType('freespin');
                    });
                }, 500);
            }
            else {
                (0,mobx__WEBPACK_IMPORTED_MODULE_1__.runInAction)(() => {
                    this.setFreeSpinData(null);
                    this.parent.setDisablePlace(false);
                    this.isFreeSpinsGameQueued = false;
                    this.isWaitingStartRound = false;
                    this.isStarFreeSpinGameAnimation = false;
                    this.parent.isWaitingForFirstTap = false;
                    if (this.parent.listOfBonusWins.length) {
                        this.parent.isBonusGameQueued = true;
                        const bonusGame = this.parent.listOfBonusWins[0]?.game?.bonusGame;
                        if (bonusGame) {
                            this.parent.isRunBonusCashoutAnimation = true;
                        }
                    }
                });
            }
        };
        this.setFreeSpinData = (data) => {
            this.freeSpinsRoundData = data;
        };
        this.updateFreeSpinCount = () => {
            _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('updateFreeSpinCount', this.freeSpinsRoundData);
        };
        this.setFreeSpinsSessionInActive = (isActive) => {
            this.isFreeSpinsSessionInActive = isActive;
        };
        this.openBuyFreeSpinModal = () => {
            const { limit: { minBet }, } = this.parent.root.profileCommon;
            const bonusBuyPrice = this.parent.gameSettings.bonusBuyPrice || 0;
            const amount = bonusBuyPrice * Number(this.parent.amount);
            if (this.parent.isDisablePlace)
                return null;
            this.isOpendBuyFSModal = true;
            _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('showBuyFreeSpinPopup');
            _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('updateBuyFreeSpinAmount', {
                amount: amount || 0,
                currency: this.parent.currencySign,
            });
            if (this.parent.balance < minBet + amount) {
                _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('disabledBuyBtnInModal', true);
            }
            else {
                _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('disabledBuyBtnInModal', false);
            }
            this.parent.gtmBuyBonus({ object: 'bonus_buy.open' });
        };
        this.hideBuyFreeSpinModal = ({ isBuy }) => {
            this.isOpendBuyFSModal = false;
            console.log('@ isBuy');
            if (isBuy) {
                this.parent.bonusbuy();
                this.parent.gtmBuyBonus({ object: 'bonus_buy.buy' });
                (0,mobx__WEBPACK_IMPORTED_MODULE_1__.runInAction)(() => {
                    this.freeSpinInProcess = true;
                });
            }
            else {
                this.parent.gtmBuyBonus({ object: 'bonus_buy.cancel' });
            }
        };
        this.winFreeSpinAnimationCompleted = () => {
            this.parent.handleUpdateBalance({ amount: this.parent.balanceTotalWin, increase: true });
            this.parent.handleUpdateLastWin(this.parent.balanceTotalWin);
            this.parent.isWaitingForFirstTap = false;
            _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('hideTotalWin');
            setTimeout(() => {
                (0,mobx__WEBPACK_IMPORTED_MODULE_1__.runInAction)(() => {
                    this.parent.setGameSessionType('regular');
                    this.parent.balanceTotalWin = 0;
                    this.freeSpinsRounds = 0;
                    this.freeSpinsTotalRounds = 0;
                    this.freeSpinsCashoutData = null;
                    this.isFreeSpinsCashout = false;
                    this.isFreeSpinsGameQueued = false;
                    this.freeSpinInProcess = false;
                    this.setFreeSpinData(null);
                    this.handleClearFreeSpinsInActive(true);
                    if (this.parent.listOfBonusWins.length) {
                        this.parent.isBonusGameQueued = true;
                    }
                });
                if (this.parent.isFreebetEnabled) {
                    this.parent.root.freebetsCommon.listRemoveByIndex(0);
                }
                _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('setTypeOfRound', { type: 'regular' });
            }, 500);
        };
        this.handleClearFreeSpinsInActive = (inActive = false) => {
            clearInterval(this.freeSpinsSessionCountInterval);
            clearInterval(this.freeSpinsSessionInterval);
            (0,mobx__WEBPACK_IMPORTED_MODULE_1__.runInAction)(() => {
                this.freeSpinsSessionInterval = null;
                this.freeSpinsSessionCountInterval = null;
                this.isFreeSpinsSessionInActive = inActive;
                this.freeSpinsSessionInActiveCount = _store_ClickerCommon__WEBPACK_IMPORTED_MODULE_3__.USER_INACTIVITY_FC_ROUND_COUNT;
            });
            _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('hideAutoSpin');
        };
        this.parent = parent;
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.makeAutoObservable)(this, {}, { autoBind: true });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => ({
            freeSpinsRoundData: this.freeSpinsRoundData,
            gameSessionType: this.parent.gameSessionType,
            isBonusGameQueued: this.parent.isBonusGameQueued,
            isFreeSpinsGameQueued: this.isFreeSpinsGameQueued,
            isStarFreeSpinGameAnimation: this.isStarFreeSpinGameAnimation,
        }), ({ isBonusGameQueued, gameSessionType, isFreeSpinsGameQueued, freeSpinsRoundData, isStarFreeSpinGameAnimation, }) => {
            const isActive = !isBonusGameQueued &&
                !!freeSpinsRoundData &&
                isFreeSpinsGameQueued &&
                gameSessionType !== 'bonus' &&
                gameSessionType !== 'freespin' &&
                !isStarFreeSpinGameAnimation;
            if (isActive) {
                this.isStarFreeSpinGameAnimation = true;
                this.starFreeSpinGameAnimation();
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => ({
            activeWinId: this.parent.activeWinId,
            isBonusGameQueued: this.parent.isBonusGameQueued,
            gameSessionType: this.parent.gameSessionType,
            isFreeSpinsGameQueued: this.isFreeSpinsGameQueued,
            startFreeSpinsRoundData: this.startFreeSpinsRoundData,
            isWaitingStartRound: this.isWaitingStartRound,
        }), ({ activeWinId, isBonusGameQueued, gameSessionType, startFreeSpinsRoundData, isFreeSpinsGameQueued, isWaitingStartRound, }) => {
            const isActiveFreeSpinsRound = !isBonusGameQueued &&
                gameSessionType !== 'bonus' &&
                gameSessionType !== 'freespin' &&
                isFreeSpinsGameQueued &&
                !!startFreeSpinsRoundData &&
                !activeWinId &&
                isWaitingStartRound;
            if (isActiveFreeSpinsRound) {
                this.startFreeSpinRound(startFreeSpinsRoundData);
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => ({
            gameSessionType: this.parent.gameSessionType,
            inactive: this.isFreeSpinsSessionInActive,
            isOnline: this.parent.root?.uiCommon?.isOnline,
            isVisible: this.parent.root?.uiCommon?.isVisible,
        }), ({ gameSessionType, inactive, isOnline, isVisible }) => {
            if (gameSessionType !== 'freespin') {
                this.handleClearFreeSpinsInActive(false);
                return;
            }
            if (gameSessionType === 'freespin' && !inactive) {
                this.freeSpinsSessionCountInterval = setInterval(() => {
                    this.isFreeSpinsSessionInActive = true;
                    if (!!this.parent.frozenAutoSpinCount && !this.parent.isWaitingForFirstTap) {
                        this.parent.isWaitingForFirstTap = true;
                    }
                    if (this.freeSpinsSessionInActiveCount <= 0) {
                        clearInterval(this.freeSpinsSessionCountInterval);
                        this.freeSpinsSessionCountInterval = null;
                        return;
                    }
                    if (this.freeSpinsSessionInActiveCount <= 4) {
                        _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('setAutoSpin', {
                            title: i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('COMMON.AUTOSPIN_IN_TIME', {
                                time: '',
                            }),
                            counter: this.freeSpinsSessionInActiveCount - 1,
                            isActiveCounter: true,
                        });
                    }
                    this.freeSpinsSessionInActiveCount -= 1;
                }, 1000);
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => ({
            type: this.parent.gameSessionType,
            inactive: this.isFreeSpinsSessionInActive,
            count: this.freeSpinsSessionInActiveCount,
            isOnline: this.parent.root?.uiCommon?.isOnline,
            isVisible: this.parent.root?.uiCommon?.isVisible,
        }), ({ type, inactive, count, isOnline, isVisible }) => {
            const shouldRun = type === 'freespin' && inactive === true && count === 0;
            if (!isOnline || !isVisible) {
                clearInterval(this.freeSpinsSessionInterval);
                this.freeSpinsSessionInterval = null;
                return;
            }
            if (shouldRun) {
                let isFirstRenderTitle = true;
                this.freeSpinsSessionInterval = setInterval(() => {
                    if (!this.freeSpinsRoundData.rounds) {
                        clearInterval(this.freeSpinsSessionInterval);
                        this.freeSpinsSessionInterval = null;
                    }
                    if (isFirstRenderTitle) {
                        _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('setAutoSpin', {
                            title: i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('AUTOSPIN_ENABLED'),
                            counter: this.freeSpinsSessionInActiveCount,
                            isActiveCounter: false,
                        });
                        isFirstRenderTitle = false;
                    }
                    this.parent.placeRandomTap();
                    this.isWasAutoPlay = true;
                    this.parent.root.audioCommon.playAudio('bat_hit_spin');
                }, _store_ClickerCommon__WEBPACK_IMPORTED_MODULE_3__.TIME_AUTO_BET_MS);
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => ({
            isFreeSpinsCompleted: this.isFreeSpinsCompleted,
        }), ({ isFreeSpinsCompleted }) => {
            if (isFreeSpinsCompleted) {
                this.isFreeSpinsCompleted = false;
                this.parent.cashout('freespin');
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => ({
            freeSpinsCashoutData: this.freeSpinsCashoutData,
            activeWinId: this.parent.activeWinId,
        }), ({ freeSpinsCashoutData, activeWinId }) => {
            if (freeSpinsCashoutData && !activeWinId) {
                this.handleClearFreeSpinsInActive(true);
                setTimeout(() => {
                    _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('moveTotalWinToBalance');
                }, 1200);
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => ({
            isOpendBuyFSModal: this.isOpendBuyFSModal,
            parentAmount: this.parent.amount,
        }), ({ isOpendBuyFSModal, parentAmount }) => {
            if (isOpendBuyFSModal && parentAmount) {
                const { limit: { minBet }, } = this.parent.root.profileCommon;
                const bonusBuyPrice = this.parent.gameSettings.bonusBuyPrice || 0;
                const amount = (bonusBuyPrice * Number(this.parent.amount)).toFixed(2);
                _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('updateBuyFreeSpinAmount', {
                    amount: Number(amount) || 0,
                    currency: this.parent.currencySign,
                });
                if (this.parent.balance < minBet + Number(amount)) {
                    _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('disabledBuyBtnInModal', true);
                }
                else {
                    _components_clicker_ClickerCanvasController__WEBPACK_IMPORTED_MODULE_2__/* .clickerCanvasController */ .S.invoke('disabledBuyBtnInModal', false);
                }
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => this.parent.gameSessionType, () => {
            if (this.parent.gameSessionType === 'freespin') {
                const { limit: { minBet }, } = this.parent.root.profileCommon;
                this.parent.setTournamentScore(this.parent.tournamentScore + minBet);
            }
        });
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], FreeSpinStore.prototype, "isFreeSpinsCashout", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], FreeSpinStore.prototype, "isFreeSpinsCompleted", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], FreeSpinStore.prototype, "isFreeSpinsGameQueued", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], FreeSpinStore.prototype, "isWaitingStartRound", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], FreeSpinStore.prototype, "isFreeSpinsSessionInActive", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], FreeSpinStore.prototype, "isOpendBuyFSModal", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], FreeSpinStore.prototype, "isStarFreeSpinGameAnimation", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], FreeSpinStore.prototype, "freeSpinsTotalRounds", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], FreeSpinStore.prototype, "freeSpinsRounds", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], FreeSpinStore.prototype, "freeSpinsCashoutData", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], FreeSpinStore.prototype, "freeSpinsRoundData", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], FreeSpinStore.prototype, "startFreeSpinsRoundData", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], FreeSpinStore.prototype, "freeSpinsSessionInActiveCount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], FreeSpinStore.prototype, "isWasAutoPlay", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], FreeSpinStore.prototype, "freeSpinInProcess", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], FreeSpinStore.prototype, "starFreeSpinGameAnimation", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], FreeSpinStore.prototype, "completeFreeSpinGameAnimation", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], FreeSpinStore.prototype, "startFreeSpinRound", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], FreeSpinStore.prototype, "setFreeSpinData", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], FreeSpinStore.prototype, "updateFreeSpinCount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], FreeSpinStore.prototype, "setFreeSpinsSessionInActive", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], FreeSpinStore.prototype, "openBuyFreeSpinModal", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], FreeSpinStore.prototype, "hideBuyFreeSpinModal", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], FreeSpinStore.prototype, "winFreeSpinAnimationCompleted", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], FreeSpinStore.prototype, "handleClearFreeSpinsInActive", void 0);


/***/ }),

/***/ 86523:
/***/ (() => {

/* (ignored) */

/***/ })

}]);