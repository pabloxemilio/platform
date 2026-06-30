"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[1954],{

/***/ 37429:
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

/***/ 41954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_BonusTowersCommon)
});

// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var index_js_ = __webpack_require__(75364);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/bonustowers/config.ts

const config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

;// ./src/framework/api/bonustowers/index.ts


const bonustowers_api = () => {
    const protocol = config().api.includes('localhost') ? 'http' : 'https';
    return index_js_["default"].create({
        baseURL: `${protocol}://${config().api}/api`,
    });
};
const placeBetRequest = ({ headers, ...params }) => bonustowers_api().post('/bets/place', params, { headers });
const createBetRequest = ({ headers, ...params }) => bonustowers_api().post('/games/create', params, { headers });
const cashoutRequest = ({ headers, ...params }) => bonustowers_api().post('/bets/cashout', params, { headers });
const retrieveGameRequest = ({ headers, ...params }) => bonustowers_api().post(`/games/retrieve`, params, { headers });
const bonusGameRequest = ({ headers, ...params }) => bonustowers_api().post('/games/bonus', params, { headers });
/* harmony default export */ const bonustowers = ((/* unused pure expression or super */ null && (bonustowers_api)));

// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: consume shared module (default) uuid@^9.0.0 (strict) (fallback: ./node_modules/uuid/dist/esm-browser/index.js)
var esm_browser_index_js_ = __webpack_require__(81682);
// EXTERNAL MODULE: consume shared module (default) centrifuge@^2.7.6 (strict) (fallback: ./node_modules/centrifuge/dist/centrifuge.js)
var centrifuge_js_ = __webpack_require__(68239);
var centrifuge_js_default = /*#__PURE__*/__webpack_require__.n(centrifuge_js_);
// EXTERNAL MODULE: ./src/framework/api/towers/config.ts
var towers_config = __webpack_require__(37429);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: consume shared module (default) i18next@^23.2.3 (strict) (fallback: ./node_modules/i18next/dist/esm/i18next.js)
var i18next_js_ = __webpack_require__(49953);
;// ./src/framework/helpers/getCoefficient.ts
function floor(num, precision = 2) {
    const prec = Math.pow(10, precision);
    const m = Number((Math.abs(num) * prec).toPrecision(15));
    return (Math.floor(m) / prec) * Math.sign(num);
}
const maxRoundCoefficient = 5000;
const defaultRTP = 96;
function progression(hit, multiplier, bonuses = {}, value = 1) {
    if (!hit)
        return value;
    const newValue = value * multiplier * (bonuses[hit]?.coefficient ?? 1);
    return progression(hit - 1, multiplier, bonuses, newValue);
}
function getCoefficient(hit, level, bonuses = {}, rtp = defaultRTP) {
    const coeff = floor(progression(hit, 1 / (1 - level / 4), bonuses) * (rtp / 100));
    if (coeff > maxRoundCoefficient) {
        return maxRoundCoefficient;
    }
    else {
        return coeff;
    }
}
function maxHit(level, hit = 0, maxCoefficient = maxRoundCoefficient) {
    const coefficient = getCoefficient(hit, level, {});
    if (coefficient >= maxCoefficient)
        return hit;
    return maxHit(level, hit + 1);
}
/* harmony default export */ const helpers_getCoefficient = (getCoefficient);

// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
;// ./src/framework/store/BonusTowersCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class BonusTowersCommon {
    constructor(root, gameConfig) {
        this.roundId = null;
        this.roundSeed = '';
        this.clientSeed = (0,esm_browser_index_js_.v4)();
        this.nonce = 1;
        this.amount = '1.00';
        this.result = 'initial';
        this.minesAmount = '1';
        this.minesAmountMin = '1';
        this.minesAmountMax = '3';
        this.gameResult = null;
        this.payout = 0;
        this.currentBetAmount = 0;
        this.coefficient = 0;
        this.nextCoefficient = 0;
        this.bonusCoefficient = 0;
        this.gameStarted = false;
        this.myBetsUpdater = 0;
        this.betsHistory = [];
        this.placebetProcessing = false;
        this.isOpenedTable = false;
        this.retrieveGameLoading = false;
        this.isGameRetrieved = false;
        this.roundEnd = false;
        this.bombs = [];
        this.roundBombs = [];
        this.roundLight = null;
        this.lightsCount = 0;
        this.roundResult = null;
        this.showBonusGame = false;
        this.showBonusGameConfirm = false;
        this.showBonusGamePopup = false;
        this.bonusGameActiveButtons = [false, false];
        this.hit = 0;
        this.selectedCell = null;
        this.forcedResetOnError = 0;
        this.winLevelList = [0, 2, 10, 50];
        this.prevGameResult = [0, 0];
        this.showWinPopup = false;
        this.showClickGamePopup = false;
        this.clickGamePopupShown = false;
        this.isCanvasLoaded = false;
        this.roundEndDelay = 1000;
        this.setShowClickGamePopup = (val) => {
            this.showClickGamePopup = val;
            if (!val) {
                this.clickGamePopupShown = true;
            }
        };
        this.setIsCanvasLoaded = (val) => {
            this.isCanvasLoaded = val;
        };
        this.setRoundEndDelay = (val) => {
            this.roundEndDelay = val;
        };
        this.setMinesAmount = (amount) => {
            this.minesAmount = `${Math.ceil(amount)}`;
        };
        this.setNextCoefficient = () => {
            this.nextCoefficient = helpers_getCoefficient(this.hit + 1, Number(this.minesAmount)) * (this.bonusCoefficient || 1);
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
        this.cancelGame = () => {
            this.roundId = null;
            this.resetGame();
        };
        this.setShowBonusGamePopup = (val) => {
            this.showBonusGamePopup = val;
        };
        this.startGame = async (freebet = false) => {
            const { profileCommon: { profile: { balance }, }, uiCommon: { setAlertList, showNotEnoughBalanceError }, freebetsCommon: { freebetEnabled }, } = this.root;
            if (this.resetTimeout) {
                clearTimeout(this.resetTimeout);
                this.resetGame();
                this.roundId = '';
            }
            if (this.roundEndTimeout) {
                clearTimeout(this.roundEndTimeout);
            }
            if (!freebetEnabled &&
                balance !== null &&
                (balance <= 0 || Number(this.amount) <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
            }
            else {
                if (this.roundId) {
                    setAlertList({
                        title: 'Game has already started from another tab',
                        type: 'error',
                    });
                    return;
                }
                return await this.createGame();
            }
        };
        this.createGame = async () => {
            const { clientSeed, nonce, root: { profileCommon: { profile: { token, playerId }, }, }, } = this;
            try {
                this.placebetProcessing = true;
                const { data: { roundId }, } = await createBetRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed,
                    nonce,
                    level: this.minesAmount,
                    theme: this.gameServerTheme,
                });
                this.roundId = roundId;
                this.gameStarted = true;
                this.placebetProcessing = false;
                this.currentBetAmount = Number(this.amount);
                const playedSessions = Number(localStorageHelper/* default */.A.get('playedSessions') ?? 0);
                localStorageHelper/* default */.A.set('playedSessions', playedSessions + 1);
                playedSessions >= 5 && this.setRoundEndDelay(this.gameConfig.roundEndTimeoutFaster);
                return roundId;
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.placebetProcessing = false;
                this.root.uiCommon.errorCodeResolver(error);
                this.resetGame();
                this.roundId = '';
                this.forcedResetOnError += 1;
            }
        };
        this.resetGame = () => {
            (0,mobx_esm_js_.runInAction)(() => {
                this.setResult(null, 0, 0);
                this.gameStarted = false;
                this.isOpenedTable = false;
                this.selectedCell = null;
                this.roundBombs = [];
                this.roundLight = null;
                this.roundResult = null;
                this.bonusCoefficient = 0;
                this.setNextCoefficient();
                this.lightsCount = 0;
                this.hit = 0;
                this.betsHistory = [];
                this.currentBetAmount = Number(this.amount);
            });
        };
        this.cashout = async () => {
            if (!this.roundId)
                return;
            const { profileCommon: { profile: { token, playerId }, }, freebetsCommon: { freebetEnabled }, } = this.root;
            try {
                this.placebetProcessing = true;
                const { data: { coefficient, payout, result }, } = await cashoutRequest({
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
                        method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                        object: 'cashout',
                        value: payout,
                        currency: this.root.profileCommon.profile.currency,
                        wins: 1,
                        multiplier: coefficient,
                        state: this.bonusCoefficient ? 'wheel' : 0,
                        bonus_multiplier: this.bonusCoefficient,
                    },
                });
                if (result) {
                    this.resetPrevRoundTimeout && clearTimeout(this.resetPrevRoundTimeout);
                    this.prevGameResult = [coefficient, payout];
                    this.setShowBonusGame(false);
                    this.showWinPopup = true;
                    this.setResult(result, payout, coefficient);
                    this.roundId = '';
                    this.isOpenedTable = true;
                    if (freebetEnabled) {
                        if (result !== 'lost') {
                            this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: coefficient });
                        }
                    }
                    this.root.freebetsCommon.listRemoveByIndex(0);
                    this.resetTimeout = window.setTimeout(() => {
                        this.resetGame();
                        this.isOpenedTable = false;
                    }, this.winLevel === 3 ? this.gameConfig.bigWinTimeout : this.winLevel * this.gameConfig.levelTimeout);
                    this.resetPrevRoundTimeout = window.setTimeout(() => {
                        this.prevGameResult = [0, 0];
                        this.showWinPopup = false;
                    }, (this.winLevel === 3 ? this.gameConfig.bigWinTimeout : this.winLevel * this.gameConfig.levelTimeout) + this.gameConfig.defaultWinDelay);
                }
                else {
                    this.roundId = '';
                    this.resetGame();
                }
                this.placebetProcessing = false;
            }
            catch (error) {
                this.placebetProcessing = false;
                this.root.uiCommon.errorCodeResolver(error);
                console.log('fetchGame error:', error);
                this.resetGame();
                this.roundId = '';
                this.forcedResetOnError += 1;
            }
        };
        this.setResult = (result, payout = 0, coefficient = 0) => {
            (0,mobx_esm_js_.runInAction)(() => {
                if (result) {
                    this.myBetsUpdater += 1;
                }
                this.gameResult = result;
                this.payout = payout;
                this.coefficient = coefficient;
            });
        };
        this.setAmount = (amount) => {
            const { profile: { currency }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.set(`saved_amount:${currency}`, amount);
            this.amount = String(amount);
        };
        this.setSelectedCell = (val) => {
            this.selectedCell = val;
        };
        this.placeBet = async (freebet = false, minCoefficient = undefined) => {
            const { root: { profileCommon: { profile: { token, playerId, subPartnerId, currency }, }, uiCommon: { isMobile }, audioCommon: { playAudio }, }, roundId, } = this;
            if (!roundId) {
                throw new Error('no roundId');
            }
            if (this.selectedCell === null) {
                return null;
            }
            this.placebetProcessing = true;
            try {
                const { data: { selected, bombs, lights, coefficient, result, lightsCount, payout }, } = await placeBetRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                    },
                    roundId,
                    theme: this.gameServerTheme || 'donnyking',
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    amount: Number(this.amount),
                    currency,
                    value: this.selectedCell,
                    ...(freebet &&
                        this.root.freebetsCommon.freebetId &&
                        this.hit === 0 && { freebetsId: this.root.freebetsCommon.freebetId }),
                    ...(freebet && minCoefficient && { minCoefficient }),
                });
                this.hit === 0 &&
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'bet_placed',
                        sid: this.root.profileCommon.profile.sid,
                        parameters: {
                            value: this.amount,
                            currency: this.root.profileCommon.profile.currency,
                            method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                            multiplier: this.nextCoefficient,
                            object: `bet_1.place`,
                            variant: this.minesAmount,
                            round_id: this.roundId,
                            id: this.roundId,
                        },
                    });
                this.hit = selected.length;
                this.bombs = bombs;
                this.roundBombs = bombs[this.hit - 1];
                this.roundLight = lights[this.hit - 1];
                this.roundResult = result;
                this.roundEnd = true;
                this.betsHistory = [...this.betsHistory, { index: this.selectedCell, active: true }];
                this.placebetProcessing = false;
                if (this.hit === 1) {
                    if (freebet) {
                        this.root.freebetsCommon.listAdd({
                            index: 0,
                            freebet,
                        });
                    }
                    if (this.root.tournamentsCommon && this.root.tournamentsCommon.addBet) {
                        this.root.tournamentsCommon.addBet({
                            amount: Number(this.amount),
                        });
                    }
                }
                if (result) {
                    this.setResult(result, payout, coefficient);
                    if (freebet) {
                        if (result !== 'lost') {
                            this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: coefficient });
                        }
                    }
                    this.root.freebetsCommon.listRemoveByIndex(0);
                    if (result === 'won') {
                        this.showWinPopup = true;
                        playAudio('cashout3');
                        (0,gtmDataLayerPush/* default */.A)({
                            action: 'bet_closed',
                            parameters: {
                                id: this.roundId,
                                round_id: this.roundId,
                                method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                                object: 'cashout',
                                value: payout,
                                currency: this.root.profileCommon.profile.currency,
                                wins: 1,
                                multiplier: coefficient,
                                state: this.bonusCoefficient ? 'wheel' : 0,
                                bonus_multiplier: this.bonusCoefficient,
                            },
                        });
                        this.resetPrevRoundTimeout && clearTimeout(this.resetPrevRoundTimeout);
                        this.prevGameResult = [coefficient, payout];
                        this.resetPrevRoundTimeout = window.setTimeout(() => {
                            this.resetGame();
                            this.roundId = '';
                            this.isOpenedTable = false;
                            this.prevGameResult = [0, 0];
                            this.showWinPopup = false;
                            this.roundEnd = false;
                        }, this.gameConfig.bigWinTimeout);
                        return null;
                    }
                }
                this.roundEndTimeout = window.setTimeout(() => {
                    this.roundEnd = false;
                    if (result) {
                        (0,gtmDataLayerPush/* default */.A)({
                            action: 'bet_closed',
                            parameters: {
                                id: this.roundId,
                                round_id: this.roundId,
                                method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                                object: 'lost',
                                value: 0,
                                currency: this.root.profileCommon.profile.currency,
                                wins: 0,
                                state: this.bonusCoefficient ? 'wheel' : 0,
                                bonus_multiplier: this.bonusCoefficient,
                            },
                        });
                        this.resetGame();
                        this.roundId = '';
                    }
                    else {
                        this.selectedCell = null;
                        this.roundBombs = [];
                        this.roundLight = null;
                        this.roundResult = null;
                        this.lightsCount = lightsCount;
                        this.coefficient = coefficient;
                    }
                }, this.roundEndDelay);
                this.placebetProcessing = false;
                return { selected, bombs, lights, coefficient, result, lightsCount };
            }
            catch (error) {
                console.log('placebet error:', error);
                this.root.freebetsCommon.listRemoveByIndex(0);
                this.root.uiCommon.errorCodeResolver(error.response);
                this.resetGame();
                this.roundId = '';
                this.forcedResetOnError += 1;
                this.placebetProcessing = false;
            }
        };
        this.checkBonusGame = async () => {
            if (this.lightsCount === 3) {
                this.setShowBonusGameConfirm(true);
            }
        };
        this.setShowBonusGame = (show) => {
            this.showBonusGame = show;
        };
        this.setBonusGameActiveButtons = (val) => {
            this.bonusGameActiveButtons = val;
        };
        this.setShowBonusGameConfirm = (show) => {
            this.showBonusGameConfirm = show;
        };
        this.clickBonusBtn = async (action = this.selectedCell) => {
            const { root: { profileCommon: { profile: { token, playerId, subPartnerId }, }, uiCommon: { isMobile }, }, roundId, } = this;
            if (!roundId) {
                throw new Error('no roundId');
            }
            this.placebetProcessing = true;
            try {
                const { data: { result, lightsCount, coefficient, bonusGamesCoefficient }, } = await bonusGameRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                    },
                    roundId,
                    clientSeed: this.clientSeed,
                    action: action,
                });
                this.placebetProcessing = false;
                this.roundResult = result;
                this.bonusCoefficient = bonusGamesCoefficient;
                this.roundEnd = true;
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bonus_game',
                    parameters: {
                        id: this.roundId,
                        round_id: this.roundId,
                        state: 'wheel',
                        bonus_multiplier: bonusGamesCoefficient,
                        value: bonusGamesCoefficient * Number(this.amount),
                        currency: this.root.profileCommon.profile.currency,
                    },
                });
                if (this.roundEndTimeout) {
                    clearTimeout(this.roundEndTimeout);
                }
                if (result) {
                    this.setResult(result);
                }
                this.roundEndTimeout = window.setTimeout(() => {
                    this.roundEnd = false;
                    this.setShowBonusGame(false);
                    if (result) {
                        (0,gtmDataLayerPush/* default */.A)({
                            action: 'bet_closed',
                            parameters: {
                                id: this.roundId,
                                round_id: this.roundId,
                                method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                                object: 'lost',
                                value: 0,
                                currency: this.root.profileCommon.profile.currency,
                                wins: 0,
                                state: this.bonusCoefficient ? 'wheel' : 0,
                                bonus_multiplier: this.bonusCoefficient,
                            },
                        });
                        this.resetGame();
                        this.roundId = '';
                    }
                    else {
                        this.selectedCell = null;
                        this.roundBombs = [];
                        this.roundLight = null;
                        this.roundResult = null;
                        this.coefficient = coefficient;
                        this.lightsCount = 0;
                    }
                }, this.roundEndDelay);
                return { result, lightsCount, coefficient, bonusGamesCoefficient };
            }
            catch (error) {
                console.log('bonusgame error:', error);
                this.root.uiCommon.errorCodeResolver(error.response);
                this.resetGame();
                this.roundId = '';
                this.forcedResetOnError += 1;
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
        this.retrieveGame = async () => {
            const { profileCommon: { profile: { token }, }, uiCommon: { setAlertList }, } = this.root;
            try {
                this.retrieveGameLoading = true;
                const { data: { bombs, clientSeed, coefficient, hash, level, lights, lightsCount, nonce, roundId, selected, amount }, } = await retrieveGameRequest({
                    headers: {
                        authorization: token,
                    },
                    theme: this.gameServerTheme || 'donnyking',
                });
                if (!clientSeed || !nonce || !selected || !lights || !bombs) {
                    throw { clientSeed, hash, nonce, selected, lightsCount, lights, bombs };
                }
                (0,mobx_esm_js_.runInAction)(() => {
                    this.roundId = roundId;
                    this.gameStarted = true;
                    this.clientSeed = clientSeed;
                    this.nonce = nonce;
                    this.minesAmount = level;
                    this.hit = selected.length;
                    this.bombs = bombs;
                    this.roundBombs = bombs[this.hit - 1];
                    this.roundLight = lights[this.hit - 1];
                    this.coefficient = coefficient;
                    this.lightsCount = lightsCount;
                    this.setNextCoefficient();
                    this.currentBetAmount = Number(amount);
                    this.retrieveGameLoading = false;
                    this.isGameRetrieved = true;
                });
                this.betsHistory = selected.map((item) => {
                    return { index: item, active: false };
                });
                if (amount) {
                    this.setAmount(amount);
                }
                this.mockGame();
                setAlertList({
                    title: `${i18next_js_["default"].t('NOTIF.CONTINUE_ROUND')}`,
                    type: 'success',
                });
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.roundId = '';
                this.gameStarted = false;
                this.retrieveGameLoading = false;
                return error;
            }
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.resetTimeout = null;
        this.roundEndTimeout = null;
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'bonustowers';
        this.gameServerTheme = gameConfig.gameServerTheme || 'bonustowers';
        this.winLevelList = gameConfig.winLevelList || [0, 2, 10, 50];
        this.roundEndDelay =
            localStorageHelper/* default */.A.get('playedSessions') >= '5' ? this.gameConfig.roundEndTimeoutFaster : gameConfig.roundEndTimeout;
        this.mockGame();
        this.setNextCoefficient();
        (0,mobx_esm_js_.reaction)(() => this.lightsCount, this.checkBonusGame);
        (0,mobx_esm_js_.reaction)(() => [this.selectedCell, this.minesAmount], this.setNextCoefficient);
        (0,mobx_esm_js_.reaction)(() => this.showBonusGameConfirm, () => (this.lightsCount = 0));
        this.centrifuge = new (centrifuge_js_default())((0,towers_config/* config */.$)().centrifuge || '', {});
        this.root.profileCommon.auth(this.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.retreiveAmount();
            this.retrieveGame();
        });
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: this.amount }];
        }, (index, { amount }) => {
            this.setAmount(Number(amount));
        });
    }
    get winLevel() {
        let level = 0;
        for (let i = 0; i < this.winLevelList.length; i++) {
            if (this.coefficient >= this.winLevelList[i])
                level = i;
        }
        return level;
    }
    get numberOfBetsError() {
        if (!Number(this.minesAmount) ||
            Number(this.minesAmount) < Number(this.minesAmountMin) ||
            Number(this.minesAmount) > Number(this.minesAmountMax)) {
            return i18next_js_["default"].t('COMMON.MINES.FROM_TO_VALIDATION', {
                from_amount: this.minesAmountMin,
                to_amount: this.minesAmountMax,
            });
        }
        return null;
    }
}
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "roundId", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "result", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "minesAmount", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "minesAmountMin", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "minesAmountMax", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "currentBetAmount", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "nextCoefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "bonusCoefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "gameStarted", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "myBetsUpdater", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "betsHistory", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "placebetProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "isOpenedTable", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "retrieveGameLoading", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "isGameRetrieved", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "roundEnd", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "bombs", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "roundBombs", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "roundLight", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "lightsCount", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "roundResult", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "showBonusGame", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "showBonusGameConfirm", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "showBonusGamePopup", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "bonusGameActiveButtons", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "hit", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "selectedCell", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "forcedResetOnError", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "winLevelList", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "prevGameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "showWinPopup", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "showClickGamePopup", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "clickGamePopupShown", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "isCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.observable
], BonusTowersCommon.prototype, "roundEndDelay", void 0);
__decorate([
    mobx_esm_js_.computed
], BonusTowersCommon.prototype, "winLevel", null);
__decorate([
    mobx_esm_js_.computed
], BonusTowersCommon.prototype, "numberOfBetsError", null);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "setShowClickGamePopup", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "setIsCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "setRoundEndDelay", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "setMinesAmount", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "setNextCoefficient", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "retreiveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "cancelGame", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "setShowBonusGamePopup", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "startGame", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "createGame", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "resetGame", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "cashout", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "setResult", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "setSelectedCell", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "placeBet", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "checkBonusGame", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "setShowBonusGame", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "setBonusGameActiveButtons", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "setShowBonusGameConfirm", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "clickBonusBtn", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "mockGame", void 0);
__decorate([
    mobx_esm_js_.action
], BonusTowersCommon.prototype, "retrieveGame", void 0);
/* harmony default export */ const store_BonusTowersCommon = (BonusTowersCommon);


/***/ })

}]);