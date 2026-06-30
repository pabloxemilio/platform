"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[4576],{

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

/***/ 77783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const factorial = (n) => (n ? n * factorial(n - 1) : 1);
function combination(a, b) {
    if (a === b)
        return 1;
    return factorial(a) / (factorial(b) * factorial(a - b));
}
const cache = new Map();
function getCoefficient(mines, hit, tiles, rtp) {
    const key = `${mines}:${hit}:${tiles}:${rtp}`;
    const cached = cache.get(key);
    if (cached) {
        return cached;
    }
    const diamonds = tiles - mines;
    const result = Math.round((combination(tiles, hit) / combination(diamonds, hit)) * rtp) / 100;
    cache.set(key, result);
    return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoefficient);


/***/ }),

/***/ 15900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const _truncate = (number, digits) => {
    const num = parseFloat(String(number));
    if (!isNaN(num)) {
        return parseFloat(num.toFixed(digits));
    }
    else {
        return NaN;
    }
};
const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B', 'N', 'D', 'H', 'O'];
function toShortNumber(number, trunc = 2) {
    number = _truncate(number, trunc);
    const tier = (Math.log10(Math.abs(number)) / 3) | 0;
    if (tier === 0)
        return _truncate(number, trunc);
    return `${Math.trunc((number / Math.pow(10, tier * 3)) * 100) / 100}${SI_SYMBOL[tier]}`;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toShortNumber);


/***/ }),

/***/ 51604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function range(size) {
    return [...Array(size).keys()];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (range);


/***/ }),

/***/ 84576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_MinesCommon)
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
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
// EXTERNAL MODULE: ./src/framework/api/mines/index.ts
var api_mines = __webpack_require__(92879);
// EXTERNAL MODULE: ./src/framework/api/mines/config.ts
var config = __webpack_require__(29533);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/mines/minesGetCoefficient.ts
var minesGetCoefficient = __webpack_require__(77783);
// EXTERNAL MODULE: ./src/framework/helpers/mines/minesToShortNumber.ts
var minesToShortNumber = __webpack_require__(15900);
;// ./src/framework/helpers/mines/minesGetMaxStep.ts

function getMaxStep(deskSize = 25, minesSize = 3, rtp = 95, maxCoef = 805001) {
    function check(openTiles) {
        return maxCoef > (0,minesGetCoefficient/* default */.A)(minesSize, openTiles, deskSize, rtp);
    }
    const maxTiles = deskSize - minesSize;
    for (let i = 1; i <= maxTiles; i++) {
        if (!check(i)) {
            return i - 1;
        }
    }
    return maxTiles;
}
/* harmony default export */ const minesGetMaxStep = (getMaxStep);

// EXTERNAL MODULE: ./src/framework/helpers/range.ts
var range = __webpack_require__(51604);
// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
// EXTERNAL MODULE: ./src/framework/helpers/formatHeaders.ts
var formatHeaders = __webpack_require__(738);
// EXTERNAL MODULE: ./src/framework/helpers/timeout.ts
var timeout = __webpack_require__(9858);
// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
;// ./src/framework/store/MinesCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class MinesCommon {
    constructor(root, gameConfig) {
        this.deskSizeList = [
            {
                name: '5x5',
                size: 25,
                minMine: 3,
                minesList: [3, 5, 7, 10],
            },
        ];
        this.deskSizeListActive = 0;
        this.winLevelList = [0, 5, 7, 10];
        this.placebetProcessing = false;
        this.cashoutProcessing = false;
        this.gameId = null;
        this.roundSeed = '';
        this.clientSeed = (0,index_js_.v4)();
        this.serverSeed = undefined;
        this.turboModeEnabled = false;
        this.turboAlertShow = false;
        this.tiles = (0,range/* default */.A)(this.deskSize).map((v) => null);
        this.autobetTiles = (0,range/* default */.A)(this.deskSize).map((v) => null);
        this.nonce = 1;
        this.amount = `1.00`;
        this.amountInRound = `1.00`;
        this.minesAmount = `3`;
        this.result = 'initial';
        this.gameResult = null;
        this.payout = 0;
        this.coefficient = 0;
        this.minCoefficientToCashout = 0;
        this.hit = 0;
        this.hitList = [];
        this.gameStarted = false;
        this.betPlaced = false;
        this.tapLoading = false;
        this.betLoading = false;
        this.tapLoadingIndex = [];
        this.retrieveGameLoading = false;
        this.opened = [];
        this.tapTurboLoad = () => { };
        this.tapTurboDestroy = () => { };
        this.betIndex = 0;
        this.isOpenedTable = false;
        this.mobileBetslipOpen = false;
        this.defaultTileTimeout = null;
        this.fastPlayEnabled = false;
        this.getWinLevel = (coefficient = this.coefficient) => {
            let level = 0;
            for (let i = 0; i < this.winLevelList.length; i++) {
                if (coefficient >= this.winLevelList[i])
                    level = i;
            }
            return level;
        };
        this.setFastPlayEnabled = (val) => {
            this.fastPlayEnabled = val;
        };
        this.setMobileBetslipOpen = (isOpen) => {
            if (this.mobileBetslipOpen !== isOpen) {
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'element_view',
                    parameters: {
                        object: 'mines_settings',
                        state: isOpen,
                    },
                });
            }
            this.mobileBetslipOpen = isOpen;
        };
        this.setTurboModeEnabled = (enabled) => {
            if (this.gameStarted)
                return;
            this.turboModeEnabled = enabled;
            this.autobetTiles = (0,range/* default */.A)(this.deskSize).map((v) => null);
            if (!enabled) {
                this.setHit(0);
            }
            this.resetGame();
            this.opened = [];
            if (enabled && this.defaultTile.enabled) {
                this.setDefaultTile();
            }
        };
        this.setTurboAlertShow = (show) => {
            this.turboAlertShow = show;
        };
        this.setDeskSizeListActive = (value) => {
            if (this.gameStarted)
                return;
            this.deskSizeListActive = value;
            this.tiles = (0,range/* default */.A)(this.deskSize).map((_) => null);
            this.autobetTiles = (0,range/* default */.A)(this.deskSize).map((_) => null);
            this.minesAmount = String(this.deskSizeList[value].minMine);
            this.opened = [];
            if (this.hit) {
                this.setHit(0);
            }
        };
        this.setDefaultTileTimeout = (value) => {
            if (this.defaultTileTimeout)
                clearTimeout(this.defaultTileTimeout);
            this.defaultTileTimeout = value;
        };
        this.setDefaultTile = () => {
            this.setDefaultTileTimeout(null);
            if (!this.defaultTile.enabled)
                return;
            const timeoutRecursive = () => {
                const maxOpened = Math.min(this.defaultTile.map.length, this.diamondsMax);
                if (this.hit >= maxOpened) {
                    this.opened = this.defaultTile.map.slice(0, maxOpened);
                    this.setHit(maxOpened);
                    this.setDefaultTileTimeout(null);
                    return;
                }
                const nextHit = this.hit + 1 > maxOpened ? maxOpened : this.hit + 1;
                this.setDefaultTileTimeout(window.setTimeout(() => {
                    this.opened = this.defaultTile.map.slice(0, nextHit);
                    this.setHit(nextHit);
                    timeoutRecursive();
                }, this.defaultTile.duration));
            };
            timeoutRecursive();
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
        this.checkPosition = (hit) => {
            if (hit > 3) {
                const item = document.getElementById(`hit-item-${hit + 2}`);
                if (item) {
                    item.scrollIntoView({ block: 'center', behavior: 'smooth' });
                }
            }
            else {
                const item = document.getElementById(`hit-item-1`);
                if (item) {
                    item.scrollIntoView({ block: 'center', behavior: 'smooth' });
                }
            }
        };
        this.cancel = () => {
            const { profile: { id }, } = this.root.profileCommon;
            this.gameId = null;
            this.resetGame();
            this.opened = [];
        };
        this.startGame = async (freebet = false) => {
            if (!this.gameConfig.roundAutoReset && !this.fastPlayEnabled) {
                this.resetGame();
                this.opened = [];
            }
            if (this.resetTimeout && !this.turboModeEnabled) {
                clearTimeout(this.resetTimeout);
                this.resetGame();
                this.opened = [];
                this.setGame();
            }
            if (this.resetTimeout && this.turboModeEnabled) {
                clearTimeout(this.resetTimeout);
                (0,mobx_esm_js_.runInAction)(() => {
                    this.tiles = (0,range/* default */.A)(this.deskSize).map((v) => null);
                    this.setResult(null, 0, 0);
                    this.gameStarted = false;
                    this.isOpenedTable = false;
                });
                this.setGame();
            }
            const { profileCommon: { profile: { balance, id }, }, uiCommon: { setAlertList, showNotEnoughBalanceError }, } = this.root;
            if (!freebet && balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
            }
            else {
                if (this.gameId) {
                    setAlertList({
                        title: 'Game has already started from another tab',
                        type: 'error',
                    });
                    return;
                }
                return await this.createGame();
            }
        };
        this.resetGame = () => {
            (0,mobx_esm_js_.runInAction)(() => {
                this.tiles = (0,range/* default */.A)(this.deskSize).map((v) => null);
                this.setResult(null, 0, 0);
                if (!this.turboModeEnabled) {
                    this.setHit(0);
                }
                this.gameStarted = false;
                this.betPlaced = false;
                this.isOpenedTable = false;
                this.setAmountInRound(Number(this.amount));
            });
        };
        this.resetTiles = () => {
            (0,mobx_esm_js_.runInAction)(() => {
                this.tiles = (0,range/* default */.A)(this.deskSize).map((v) => null);
                this.autobetTiles = (0,range/* default */.A)(this.deskSize).map((v) => null);
                this.setHit(0);
            });
        };
        this.cashout = async () => {
            if (!this.gameId)
                return;
            const { profile: { token, playerId, id }, } = this.root.profileCommon;
            try {
                this.betLoading = true;
                const resp = await (0,api_mines/* cashoutRequest */.dn)({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    gameId: this.gameId,
                });
                const { data: { coefficient, payout, result, mines }, } = resp;
                if (result === 'won') {
                    this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: coefficient });
                }
                if (result) {
                    this.setResult(result, payout, coefficient);
                    this.openTable(mines);
                }
                this.betLoading = false;
                this.root.uiCommon.checkSettleError(resp, this.cancel);
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.betLoading = false;
                this.setGame('');
                this.gameStarted = false;
                this.root.uiCommon.errorCodeResolver(error);
                this.root.uiCommon.checkErrorToResetGame(error, this.cancel);
                return error;
            }
        };
        this.setResult = (result, payout = 0, coefficient = 0) => {
            if (result === 'won') {
                this.root.trackingCommon.addWin();
            }
            (0,mobx_esm_js_.runInAction)(() => {
                if (result) {
                    this.betIndex += 1;
                }
                this.gameResult = result;
                this.payout = payout;
                this.coefficient = coefficient;
            });
        };
        this.createGame = async () => {
            const { clientSeed, serverSeed, nonce, minesAmount, root: { profileCommon: { profile: { token, playerId, id }, }, }, } = this;
            try {
                this.betLoading = true;
                const { data: { gameId }, } = await (0,api_mines/* createGameRequest */.Yv)({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed,
                    nonce,
                    size: Number(minesAmount),
                    deskSize: this.deskSize,
                    serverSeed,
                    theme: this.gameServerTheme,
                });
                this.setGame(gameId);
                this.gameStarted = true;
                this.betLoading = false;
                if (this.root.tournamentsCommon && this.root.tournamentsCommon.addBet) {
                    this.root.tournamentsCommon.addBet({
                        amount: Number(this.amount),
                    });
                }
                return gameId;
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.betLoading = false;
                this.root.uiCommon.errorCodeResolver(error);
                return error;
            }
        };
        this.retrieveGame = async () => {
            const { profileCommon: { profile: { token }, }, uiCommon: { setAlertList }, } = this.root;
            try {
                this.retrieveGameLoading = true;
                const { data: { clientSeed, hash, nonce, opened, minesAmount, amount, deskSize, roundId, freebetsId }, } = await (0,api_mines/* retriveGameRequest */.ZJ)({
                    headers: {
                        authorization: token,
                    },
                    theme: this.gameServerTheme,
                });
                if (!clientSeed || !nonce || !opened || !minesAmount) {
                    throw { clientSeed, hash, nonce, opened, minesAmount };
                }
                (0,mobx_esm_js_.runInAction)(() => {
                    this.gameId = roundId;
                    this.gameStarted = true;
                    this.clientSeed = clientSeed;
                    this.nonce = nonce;
                    this.opened = opened.reverse();
                    if (typeof deskSize === 'number') {
                        this.deskSizeListActive = this.deskSizeList.map((item) => item.size).indexOf(deskSize);
                    }
                    this.setMinesAmount(minesAmount);
                    this.setHit(opened.length);
                    this.tiles = (0,range/* default */.A)(this.deskSize).map((v) => null);
                    this.tiles = this.tiles.map((t, i) => (opened.includes(i) ? 1 : t));
                    if (amount) {
                        this.betPlaced = true;
                        this.setAmount(amount);
                    }
                    this.setAmountInRound(Number(this.amount));
                    this.mockGame();
                    this.retrieveGameLoading = false;
                    setAlertList({
                        title: `${i18next_js_["default"].t('NOTIF.CONTINUE_ROUND')}`,
                        type: 'success',
                    });
                });
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.setGame('');
                this.gameStarted = false;
                this.retrieveGameLoading = false;
                return error;
            }
        };
        this.setGame = (roundId = '') => {
            this.gameId = roundId;
        };
        this.tapAutoBet = (index) => {
            const a = this.autobetIndexes?.length;
            const h = this.coefficientList.length;
            const allowIncrement = a < h;
            const newTiles = this.autobetTiles.map((tile, i) => {
                let newTile = tile;
                if (i === index) {
                    if (tile !== null) {
                        this.decrementHit();
                        newTile = null;
                    }
                    if (tile === null && allowIncrement) {
                        this.incrementHit();
                        newTile = index;
                    }
                }
                return newTile;
            });
            this.autobetTiles = newTiles;
        };
        this.makeAutoBet = async () => {
            const { autobetCommon: { initialAmount, autoBetEnabled, autoBetLimit, autoBetsAmount, onWinIncrease, onWinIncreaseAmount, onLoseIncrease, onLoseIncreaseAmount, setAutoBetsAmount, stopOnAnyWin, setStopOnAnyWin, }, profileCommon: { limit: { maxBet, minBet }, profile: { balance, id, rounding }, }, freebetsCommon: { freebetEnabled, freebetsSuccessIndexList }, } = this.root;
            if (freebetEnabled || freebetsSuccessIndexList.includes(0))
                return;
            if (!autoBetEnabled || (autoBetLimit && autoBetsAmount <= 0)) {
                this.stopAutoBet();
                return;
            }
            if (!this.autobetIndexes.length)
                return;
            try {
                await this.startGame();
                const { mines, result, payout, coefficient } = await this.placeMultiResp(this.autobetIndexes);
                if (autoBetLimit) {
                    setAutoBetsAmount(String(autoBetsAmount - 1));
                }
                this.opened = this.autobetIndexes;
                if (mines) {
                    this.tiles = this.tiles.map((t, i) => (mines.includes(i) ? 0 : 1));
                }
                if (result) {
                    this.setResult(result, payout, coefficient);
                }
                if (autoBetEnabled) {
                    if (result === 'won') {
                        if (stopOnAnyWin) {
                            await (0,timeout/* default */.A)(1);
                            this.stopAutoBet();
                            setStopOnAnyWin(false);
                        }
                        else {
                            if (onWinIncrease && onWinIncreaseAmount > 0) {
                                const a = (Number(this.amount) / 100) * onWinIncreaseAmount;
                                const sum = Number(this.amount) + Number(a);
                                if (sum > maxBet) {
                                    this.setAmount((0,truncateDecimals/* default */.A)(maxBet, rounding === 2 ? 1 : rounding));
                                }
                                else if (sum > balance && balance >= minBet) {
                                    this.setAmount((0,truncateDecimals/* default */.A)(balance, rounding === 2 ? 1 : rounding));
                                }
                                else {
                                    this.setAmount((0,truncateDecimals/* default */.A)(sum, rounding === 2 ? 1 : rounding));
                                }
                            }
                            if (!onWinIncrease) {
                                this.setAmount((0,truncateDecimals/* default */.A)(this.amount, rounding === 2 ? 1 : rounding));
                            }
                        }
                    }
                    if (result === 'lost') {
                        if (onLoseIncrease && onLoseIncreaseAmount > 0) {
                            const a = (Number(this.amount) / 100) * onLoseIncreaseAmount;
                            const sum = Number(this.amount) + Number(a);
                            if (sum > maxBet) {
                                this.setAmount((0,truncateDecimals/* default */.A)(maxBet, rounding === 2 ? 1 : rounding));
                            }
                            else if (sum > balance && balance >= minBet) {
                                this.setAmount((0,truncateDecimals/* default */.A)(balance, rounding === 2 ? 1 : rounding));
                            }
                            else {
                                this.setAmount((0,truncateDecimals/* default */.A)(sum, rounding === 2 ? 1 : rounding));
                            }
                        }
                        if (!onLoseIncrease) {
                            this.setAmount((0,truncateDecimals/* default */.A)(this.amount, rounding === 2 ? 1 : rounding));
                        }
                    }
                }
                await (0,timeout/* default */.A)(2);
                (0,mobx_esm_js_.runInAction)(() => {
                    this.tiles = (0,range/* default */.A)(this.deskSize).map((v) => null);
                    this.setResult(null, 0, 0);
                    this.gameStarted = false;
                    this.opened = [];
                });
                this.setGame();
                this.makeAutoBet();
            }
            catch (error) {
                this.root.uiCommon.errorCodeResolver(error.response);
                this.stopAutoBet();
                this.resetGame();
            }
        };
        this.startAutoBet = async () => {
            const { autobetCommon: { autoBetsAmount, setInitialAmount, setAutoBetEnabled, setAutoBetLimit }, profileCommon: { profile: { balance }, }, uiCommon: { showNotEnoughBalanceError }, freebetsCommon: { freebetEnabled, freebetsSuccessIndexList }, } = this.root;
            if (freebetEnabled || freebetsSuccessIndexList.includes(0))
                return;
            if (balance !== null && balance <= 0) {
                showNotEnoughBalanceError();
            }
            else {
                if (autoBetsAmount > 0) {
                    setAutoBetLimit(true);
                }
                (0,mobx_esm_js_.runInAction)(() => {
                    setInitialAmount(Number(this.amount));
                    setAutoBetEnabled(true);
                });
                try {
                    await this.makeAutoBet();
                }
                catch (error) {
                    console.log({ error });
                    this.stopAutoBet();
                }
            }
        };
        this.stopAutoBet = () => {
            const { setAutoBetEnabled, setAutoBetLimit } = this.root.autobetCommon;
            (0,mobx_esm_js_.runInAction)(() => {
                setAutoBetEnabled(false);
                setAutoBetLimit(false);
                this.autobetTiles = (0,range/* default */.A)(this.deskSize).map((v) => null);
                this.setHit(0);
            });
        };
        this.makeMultiBet = async (freebet = false, minCoefficient = undefined) => {
            if (!this.opened.length)
                return;
            const { autobetCommon: { autoBetEnabled }, profileCommon: { profile: { id }, }, } = this.root;
            try {
                this.tapLoading = true;
                this.tapLoadingIndex = [...this.opened];
                await this.startGame(freebet);
                const { mines, result, payout, coefficient } = await this.placeMultiResp(this.opened, freebet, minCoefficient);
                if (mines) {
                    this.tiles = this.tiles.map((t, i) => (mines.includes(i) ? 0 : 1));
                }
                if (result) {
                    this.setResult(result, payout, coefficient);
                }
                this.tapLoading = false;
                this.tapLoadingIndex = [];
                this.isOpenedTable = true;
                this.root.freebetsCommon.listAdd({
                    index: 0,
                    freebet,
                });
                if (result === 'won') {
                    this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: coefficient });
                }
                this.root.freebetsCommon.listRemoveByIndex(0);
                if (this.gameConfig.roundAutoReset) {
                    const winLevelDuration = this.gameConfig.winLevelDurationList?.[this.winLevel] || this.gameConfig.winDuration || 2000;
                    this.resetTimeout = window.setTimeout(() => {
                        (0,mobx_esm_js_.runInAction)(() => {
                            this.tiles = (0,range/* default */.A)(this.deskSize).map((v) => null);
                            this.setResult(null, 0, 0);
                            this.gameStarted = false;
                            this.isOpenedTable = false;
                        });
                        this.setGame();
                        this.retrieveGame();
                    }, winLevelDuration);
                }
                else {
                    this.gameStarted = false;
                }
            }
            catch (error) {
                this.root.uiCommon.errorCodeResolver(error.response);
                this.resetGame();
                this.tapLoading = false;
                this.tapLoadingIndex = [];
                this.root.freebetsCommon.listRemoveByIndex(0);
            }
        };
        this.placeMultiResp = async (opened, freebet = false, minCoefficient = undefined) => {
            const { root: { profileCommon: { profile: { token, playerId, currency, subPartnerId }, }, uiCommon: { isMobile }, }, gameId, serverSeed, } = this;
            if (!gameId) {
                throw new Error('no gameId');
            }
            try {
                const respond = await (0,api_mines/* placeMultiTapRequest */.zC)({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: false,
                        }),
                    }),
                    opened,
                    roundId: gameId,
                    theme: this.gameServerTheme,
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    amount: Number(this.amount),
                    currency,
                    serverSeed,
                    ...(freebet && this.root.freebetsCommon.freebetId && { freebetsId: this.root.freebetsCommon.freebetId }),
                    ...(freebet && minCoefficient && { minCoefficient }),
                    ...(this.gameConfig?.gameTag && { tag: this.gameConfig.gameTag }),
                });
                this.setAmountInRound(Number(this.amount));
                return respond.data;
            }
            catch (error) {
                this.root.uiCommon.checkErrorToResetGame(error, this.cancel);
                throw error;
            }
        };
        this.setTabTurboLoad = (value) => {
            this.tapTurboLoad = value;
        };
        this.setTabTurboDestroy = (value) => {
            this.tapTurboDestroy = value;
        };
        this.tapTurbo = (value) => {
            if (this.opened.includes(value)) {
                this.opened = [...this.opened.filter((item) => item !== value)];
                this.decrementHit();
                this.tapTurboDestroy();
            }
            else {
                if (this.opened.length >= this.diamondsMax)
                    return;
                this.opened = [...this.opened, value];
                this.incrementHit();
                this.tapTurboLoad();
            }
        };
        this.tap = async (tile, freebet = false, minCoefficient = undefined) => {
            const { autobetCommon: { autoBetEnabled }, uiCommon: { setAlertList }, } = this.root;
            if (autoBetEnabled)
                return;
            if (!this.gameStarted) {
                setAlertList({
                    title: `${i18next_js_["default"].t('MINES.PRESS')} "${i18next_js_["default"].t('COMMON.START_GAME')}"`,
                    type: 'success',
                });
                return;
            }
            try {
                this.tapLoading = true;
                this.tapLoadingIndex = [tile];
                const data = await this.tapRequest(tile, freebet, minCoefficient);
                const { result, payout, coefficient, mines } = data;
                if (!this.hit) {
                    this.root.trackingCommon.startSession(this.gameId);
                    this.root.trackingCommon.addBet({
                        amount: Number(this.amount),
                        id: this.gameId,
                    }, false);
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'bet_placed',
                        sid: this.root.profileCommon.profile.sid,
                        parameters: {
                            value: this.amount,
                            currency: this.root.profileCommon.profile.currency,
                            method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                            multiplier: this.coefficient,
                            object: `bet_1.place`,
                            round_id: this.gameId,
                            id: this.gameId,
                        },
                    });
                    this.betPlaced = true;
                }
                if (result === 'won' && mines) {
                    const newTiles = this.tiles.map((item, i) => {
                        return i === tile ? 1 : item;
                    });
                    this.tiles = newTiles;
                    this.setResult(result, payout, coefficient);
                    this.openTable(mines);
                    this.tapLoading = false;
                    this.tapLoadingIndex = [];
                    return;
                }
                this.openTile(data);
                this.tapLoading = false;
                this.tapLoadingIndex = [];
            }
            catch (error) {
                this.root.uiCommon.errorCodeResolver(error.response);
                this.tapLoading = false;
                this.tapLoadingIndex = [];
                return error;
            }
        };
        this.tapRequest = async (tile, freebet = false, minCoefficient = undefined) => {
            const { root: { profileCommon: { profile: { token, playerId, subPartnerId, currency }, }, uiCommon: { isMobile }, }, serverSeed, gameId, } = this;
            if (!gameId) {
                throw new Error('no gameId');
            }
            const placeBetParams = () => {
                if (this.hit) {
                    return {};
                }
                this.setAmountInRound(Number(this.amount));
                this.root.freebetsCommon.listAdd({
                    index: 0,
                    freebet,
                });
                return {
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    amount: Number(this.amount),
                    currency,
                    ...(freebet && this.root.freebetsCommon.freebetId && { freebetsId: this.root.freebetsCommon.freebetId }),
                    ...(freebet && minCoefficient && { minCoefficient }),
                    ...(this.gameConfig?.gameTag && { tag: this.gameConfig.gameTag }),
                };
            };
            try {
                let headerMxTime;
                const { place, tap, settle } = this.latencyData;
                headerMxTime = [place, tap, settle].map((v) => (v ? v : '')).join(',');
                this.latencyData = {
                    place: null,
                    tap: null,
                    settle: null,
                };
                const startTime = performance.now();
                const placeBetObject = placeBetParams();
                const respond = await (0,api_mines/* placeBetRequest */.CW)({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                        'mx-time': headerMxTime,
                    }),
                    theme: this.gameServerTheme,
                    roundId: gameId,
                    index: tile,
                    serverSeed,
                    ...placeBetObject,
                });
                const endTime = performance.now();
                const latency = Math.round(endTime - startTime);
                if (respond.data) {
                    const actionType = placeBetObject['amount'] ? 'place' : respond.data.status ? 'tap' : 'settle';
                    this.latencyData[actionType] = latency;
                }
                return respond.data;
            }
            catch (error) {
                this.cancel();
                if (!this.hit) {
                    this.root.freebetsCommon.listRemoveByIndex(0);
                }
                throw error;
            }
        };
        this.retrieveAmount = () => {
            const { limit: { minBet, defaultBet }, profile: { currency }, } = this.root.profileCommon;
            let amount = localStorageHelper/* default */.A.get(`saved_amount:${currency}`);
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
        this.setAmountInRound = (amount) => {
            this.amountInRound = String(amount);
        };
        this.setMinesAmount = (amount) => {
            this.minesAmount = `${Math.ceil(amount)}`;
        };
        this.openTable = async (mines) => {
            (0,gtmDataLayerPush/* default */.A)({
                action: 'bet_closed',
                parameters: {
                    id: this.gameId,
                    round_id: this.gameId,
                    method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                    object: this.gameResult === 'won' ? 'cashout' : 'lost',
                    value: this.amount,
                    currency: this.root.profileCommon.profile.currency,
                    wins: this.gameResult === 'won' ? 1 : 0,
                    multiplier: this.coefficient,
                },
            });
            const { profile: { id }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.remove(`${id}:roundId`);
            this.tiles = this.tiles.map((t, i) => (mines.includes(i) ? 0 : 1));
            this.isOpenedTable = true;
            this.setGame();
            this.root.freebetsCommon.listRemoveByIndex(0);
            if (this.gameConfig.roundAutoReset || this.fastPlayEnabled) {
                const winLevelDuration = this.gameConfig.winLevelDurationList?.[this.winLevel] || this.gameConfig.winDuration || 2000;
                this.resetTimeout = window.setTimeout(() => {
                    this.resetGame();
                    this.opened = [];
                }, this.fastPlayEnabled
                    ? this.gameResult === 'won'
                        ? this.gameConfig.fastPlayWinDuration || 2000
                        : this.gameConfig.fastPlayLoseDuration || 2000
                    : winLevelDuration);
            }
            else {
                this.gameStarted = false;
            }
        };
        this.setHit = (hit = 0) => {
            this.hit = hit;
        };
        this.incrementHit = () => {
            this.hit++;
        };
        this.decrementHit = () => {
            this.hit--;
        };
        this.openTile = async ({ index, status, result, mines }) => {
            const newTiles = this.tiles.map((tile, i) => (i === index ? status : tile));
            this.tiles = newTiles;
            this.incrementHit();
            this.opened = [...this.opened, index];
            if (result && mines) {
                this.gameResult = result;
                this.betIndex += 1;
                this.openTable(mines);
            }
        };
        this.updateHitList = (count) => {
            this.hitList = (0,range/* default */.A)(this.diamondsMax).map((v) => {
                const index = v + 1;
                const coeff = (0,minesGetCoefficient/* default */.A)(Number(this.minesAmount), index, this.deskSize, this.root.profileCommon.rtp);
                const size = this.diamondsMax;
                const shadow = () => {
                    if (typeof count !== 'number')
                        return false;
                    if (size <= count)
                        return false;
                    if (this.hit <= count / 2 && index <= count)
                        return false;
                    if (this.hit >= size - count / 2 && index > size - count)
                        return false;
                    const evenNumber = count % 2 === 0;
                    if (this.hit > index) {
                        const i = this.turboModeEnabled ? index : index - 1;
                        const h = this.gameResult === 'lost' ? this.hit - 1 : this.hit;
                        return !(h - i < count / 2);
                    }
                    else {
                        const i = evenNumber
                            ? this.turboModeEnabled
                                ? index - 1
                                : index - 2
                            : this.turboModeEnabled
                                ? index
                                : index - 1;
                        const h = this.gameResult === 'lost' ? this.hit - 1 : this.hit;
                        return !(i - h < count / 2);
                    }
                };
                return {
                    index,
                    value: `x${(0,minesToShortNumber/* default */.A)(coeff)}`,
                    active: this.turboModeEnabled
                        ? index === this.hit
                        : this.gameStarted && this.hit === (this.gameResult === null ? index - 1 : index),
                    payout: String((0,minesToShortNumber/* default */.A)((0,floor/* default */.A)(Math.min(this.root.profileCommon.limit.maxWin + Number(this.amount), coeff * Number(this.amount)), this.root.profileCommon.profile.rounding))),
                    done: this.turboModeEnabled ? index < this.hit : index <= this.hit,
                    shadow: shadow(),
                    left: this.hit > 0 && index < this.hit,
                    right: this.hit > 0 && index > this.hit,
                    coefficient: coeff || 0,
                    level: this.getWinLevel(coeff),
                };
            });
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.centrifuge = new (centrifuge_js_default())((0,config/* config */.$)().centrifuge || '', {});
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.retrieveAmount();
            this.retrieveGame();
        });
        (0,mobx_esm_js_.reaction)(() => this.autoMode, this.resetTiles);
        (0,mobx_esm_js_.reaction)(() => this.minesAmount, () => {
            if (this.gameStarted)
                return;
            if (this.turboModeEnabled && this.defaultTile.enabled) {
                this.setDefaultTile();
                return;
            }
            this.opened = [];
            this.hit = 0;
        });
        this.resetTimeout = null;
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'mines';
        this.gameServerTheme = gameConfig.gameServerTheme || 'default';
        this.deskSizeList = gameConfig.deskSizeList || [
            {
                name: '5x5',
                size: 25,
                minMine: 3,
                minesList: [3, 5, 7, 10],
            },
        ];
        this.deskSizeListActive = gameConfig.deskSizeListActive || 0;
        this.mineName = gameConfig.mineName || 'mines';
        this.winLevelList = gameConfig.winLevelList || [0, 5, 7, 10];
        this.fastPlayEnabled = gameConfig.fastPlayByDefaultEnabled ?? false;
        this.mockGame();
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: this.amount }];
        }, (index, { amount, minCoefficient, min }) => {
            this.setAmount(Number(amount));
            this.minCoefficientToCashout = minCoefficient ?? min;
        });
        this.latencyData = {
            place: null,
            tap: null,
            settle: null,
        };
    }
    get deskSize() {
        return this.deskSizeList[this.deskSizeListActive].size;
    }
    get crystallsAmount() {
        return this.deskSizeList[this.deskSizeListActive].size - Number(this.minesAmount) || 0;
    }
    get minesAmountMin() {
        return 1;
    }
    computedMinesAmountMin() {
        return 1;
    }
    get minesAmountMax() {
        return this.deskSize - 1;
    }
    computedMinesAmountMax(deskSize = this.deskSize) {
        return deskSize - 1;
    }
    get autoMode() {
        const { autoModeEnabled } = this.root.autobetCommon;
        return autoModeEnabled;
    }
    get targetAmountMax() {
        return this.deskSize - this.minesAmountMin;
    }
    get targetAmountMin() {
        return this.deskSize - this.minesAmountMax;
    }
    get lockedUi() {
        const { autoBetEnabled } = this.root.autobetCommon;
        return autoBetEnabled || this.gameStarted;
    }
    get lockedButtons() {
        const { uiCommon: { amountError, isOnline }, profileCommon: { profile: { token }, }, } = this.root;
        if (this.gameStarted)
            return false;
        return !!amountError || !!this.numberOfBetsError || !token || !isOnline || this.retrieveGameLoading;
    }
    get autobetIndexes() {
        return this.autobetTiles.filter((item) => typeof item === 'number');
    }
    get numberOfBetsError() {
        if (!Number(this.minesAmount) ||
            Number(this.minesAmount) < this.minesAmountMin ||
            Number(this.minesAmount) > this.minesAmountMax) {
            return i18next_js_["default"].t('COMMON.MINES.FROM_TO_VALIDATION', {
                from_amount: this.minesAmountMin,
                to_amount: this.minesAmountMax,
            });
        }
        return null;
    }
    get diamondsMax() {
        return minesGetMaxStep(this.deskSize, Number(this.minesAmount), this.root.profileCommon.rtp);
    }
    computedNumberOfBetsError(mineAmount = Number(this.minesAmount), minesAmountMin = this.minesAmountMin, minesAmountMax = this.minesAmountMax) {
        if (!mineAmount || mineAmount < minesAmountMin || mineAmount > minesAmountMax) {
            return i18next_js_["default"].t('COMMON.MINES.FROM_TO_VALIDATION', {
                from_amount: minesAmountMin,
                to_amount: minesAmountMax,
            });
        }
        return null;
    }
    get tableTouched() {
        return this.tiles.some((t) => t != null);
    }
    get coefficientList() {
        return (0,range/* default */.A)(this.diamondsMax).map((_, i) => (0,minesGetCoefficient/* default */.A)(Number(this.minesAmount), i + 1, this.deskSize, this.root.profileCommon.rtp));
    }
    get currentCoefficient() {
        return this.coefficientList[Math.max(0, this.hit - 1)];
    }
    get possibleWin() {
        const { limit: { maxWin }, profile: { rounding }, } = this.root.profileCommon;
        const amount = this.gameStarted ? this.amountInRound : this.amount;
        const win = (0,truncateDecimals/* default */.A)((0,floor/* default */.A)(Number(this.amount) * this.currentCoefficient), rounding);
        return Math.min(maxWin + Number(amount), win);
    }
    get possibleWinNext() {
        const { limit: { maxWin }, profile: { rounding }, } = this.root.profileCommon;
        const coeff = this.coefficientList[this.hit];
        if (!coeff)
            return 0;
        const amount = this.gameStarted ? this.amountInRound : this.amount;
        const win = (0,truncateDecimals/* default */.A)((0,floor/* default */.A)(Number(this.amount) * coeff), rounding);
        return Math.min(maxWin + Number(amount), win);
    }
    get possibleWinNextWithNewAmount() {
        const { limit: { maxWin }, profile: { rounding }, } = this.root.profileCommon;
        const coeff = this.coefficientList[this.hit];
        if (!coeff)
            return 0;
        const win = (0,truncateDecimals/* default */.A)((0,floor/* default */.A)(Number(this.amount) * coeff), rounding);
        return Math.min(maxWin + Number(this.amount), win);
    }
    get winLevel() {
        let level = 0;
        for (let i = 0; i < this.winLevelList.length; i++) {
            if (this.coefficient >= this.winLevelList[i])
                level = i;
        }
        return level;
    }
    get defaultTile() {
        return (this.gameConfig.deskSizeList?.[this.deskSizeListActive]?.defaultTile || {
            enabled: false,
            duration: 0,
            map: [],
        });
    }
}
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "deskSizeList", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "deskSizeListActive", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "winLevelList", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "placebetProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "cashoutProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "gameId", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "serverSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "turboModeEnabled", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "turboAlertShow", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "tiles", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "autobetTiles", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "amountInRound", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "minesAmount", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "result", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "minCoefficientToCashout", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "hit", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "hitList", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "gameStarted", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "betPlaced", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "tapLoading", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "betLoading", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "tapLoadingIndex", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "retrieveGameLoading", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "opened", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "tapTurboLoad", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "tapTurboDestroy", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "betIndex", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "isOpenedTable", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "mobileBetslipOpen", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "defaultTileTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], MinesCommon.prototype, "fastPlayEnabled", void 0);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "deskSize", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "crystallsAmount", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "minesAmountMin", null);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "computedMinesAmountMin", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "minesAmountMax", null);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "computedMinesAmountMax", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "autoMode", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "targetAmountMax", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "targetAmountMin", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "lockedUi", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "lockedButtons", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "autobetIndexes", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "numberOfBetsError", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "diamondsMax", null);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "computedNumberOfBetsError", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "tableTouched", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "coefficientList", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "currentCoefficient", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "possibleWin", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "possibleWinNext", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "possibleWinNextWithNewAmount", null);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "winLevel", null);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "getWinLevel", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "setFastPlayEnabled", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "setMobileBetslipOpen", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "setTurboModeEnabled", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "setTurboAlertShow", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "setDeskSizeListActive", void 0);
__decorate([
    mobx_esm_js_.computed
], MinesCommon.prototype, "defaultTile", null);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "setDefaultTileTimeout", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "setDefaultTile", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "mockGame", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "checkPosition", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "cancel", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "startGame", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "resetGame", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "resetTiles", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "cashout", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "setResult", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "createGame", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "retrieveGame", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "setGame", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "tapAutoBet", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "makeAutoBet", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "startAutoBet", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "stopAutoBet", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "makeMultiBet", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "placeMultiResp", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "setTabTurboLoad", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "setTabTurboDestroy", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "tapTurbo", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "tap", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "tapRequest", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "retrieveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "setAmountInRound", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "setMinesAmount", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "openTable", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "setHit", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "incrementHit", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "decrementHit", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "openTile", void 0);
__decorate([
    mobx_esm_js_.action
], MinesCommon.prototype, "updateHitList", void 0);
/* harmony default export */ const store_MinesCommon = (MinesCommon);


/***/ })

}]);