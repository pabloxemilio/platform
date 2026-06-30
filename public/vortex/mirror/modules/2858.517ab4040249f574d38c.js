"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2858],{

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

/***/ 42858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_OneTapMinesCommon)
});

// EXTERNAL MODULE: ./src/framework/api/vortex/index.ts
var vortex = __webpack_require__(97521);
// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: consume shared module (default) uuid@^9.0.0 (strict) (fallback: ./node_modules/uuid/dist/esm-browser/index.js)
var index_js_ = __webpack_require__(81682);
// EXTERNAL MODULE: consume shared module (default) centrifuge@^2.7.6 (strict) (fallback: ./node_modules/centrifuge/dist/centrifuge.js)
var centrifuge_js_ = __webpack_require__(68239);
var centrifuge_js_default = /*#__PURE__*/__webpack_require__.n(centrifuge_js_);
// EXTERNAL MODULE: consume shared module (default) i18next@^23.2.3 (strict) (fallback: ./node_modules/i18next/dist/esm/i18next.js)
var i18next_js_ = __webpack_require__(49953);
// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/onetapmines/config.ts

const config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

;// ./src/framework/api/onetapmines/index.ts


const onetapmines_api = () => {
    const protocol = config().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config().api}/api`,
    });
};
const placeBetRequest = ({ headers, ...params }) => onetapmines_api().post('/bets/place', params, { headers });
const createGameRequest = ({ headers, ...params }) => onetapmines_api().post('/games/create', params, { headers });
const placeMultiTapRequest = ({ headers, ...params }) => onetapmines_api().post('/bets/multiplace', params, { headers });
const cashoutRequest = ({ headers, ...params }) => onetapmines_api().post('/bets/cashout', params, { headers });
const retrieveGameRequest = ({ headers, ...params }) => onetapmines_api().post(`/games/retrieve`, params, { headers });
const getGameSettingsRequest = (params) => onetapmines_api().get('/games/settings', params);
/* harmony default export */ const onetapmines = ((/* unused pure expression or super */ null && (onetapmines_api)));

// EXTERNAL MODULE: ./src/framework/api/mines/config.ts
var mines_config = __webpack_require__(29533);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/mines/minesToShortNumber.ts
var minesToShortNumber = __webpack_require__(15900);
// EXTERNAL MODULE: ./src/framework/helpers/range.ts
var range = __webpack_require__(51604);
// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
// EXTERNAL MODULE: ./src/framework/helpers/formatHeaders.ts
var formatHeaders = __webpack_require__(738);
// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
;// ./src/framework/store/OneTapMinesCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class OneTapMinesCommon {
    constructor(root, gameConfig) {
        this.deskSizeList = [
            {
                name: '5x5',
                size: 25,
                minMine: 3,
                minesList: [3, 5, 7, 10],
            },
        ];
        this.hitList = [];
        this.gameSettings = {};
        this.gameId = null;
        this.roundSeed = '';
        this.clientSeed = (0,index_js_.v4)();
        this.serverSeed = undefined;
        this.nonce = 1;
        this.amount = '1.00';
        this.minesAmount = '3';
        this.result = 'initial';
        this.gameResult = null;
        this.payout = 0;
        this.coefficient = 0;
        this.currentPatternId = 0;
        this.hit = 0;
        this.deskSizeListActive = 0;
        this.betIndex = 0;
        this.itemAppearanceDelay = 0;
        this.animationDelayIndex = -1;
        this.clearPatternAvailable = false;
        this.isFirstTap = false;
        this.modeAlertShow = false;
        this.gameStarted = false;
        this.betPlaced = false;
        this.tapLoading = false;
        this.betLoading = false;
        this.isOpenedTable = false;
        this.placebetProcessing = false;
        this.cashoutProcessing = false;
        this.gameDirectionNormal = true;
        this.gameDirectionTouched = false;
        this.animationProcess = false;
        this.showNextTile = false;
        this.riskyModeEnabled = localStorageHelper/* default */.A.get('riskyMode') === 'true';
        this.tapLoadingIndex = [];
        this.opened = [];
        this.tiles = (0,range/* default */.A)(this.deskSize).map(() => null);
        this.diamondsB = [];
        this.diamondsC = [];
        this.soundTimeouts = [];
        this.winSounds = [''];
        this.bombSound = '';
        this.customBetIndexes = [];
        this.placeBetDelayIntervalStatus = false;
        this.retrieveGameLoading = false;
        this.setCurrentPatternId = (val) => {
            this.currentPatternId = val;
            this.clearPatternAvailable = false;
            localStorageHelper/* default */.A.set('patternId', val);
            this.opened = [];
            this.setTilesDefaults();
        };
        this.getWinLevel = (index) => {
            let level = 0;
            if (this.diamondsB.includes(index)) {
                return 1;
            }
            else if (this.diamondsC.includes(index)) {
                return 2;
            }
            return level;
        };
        this.setRiskyModeEnabled = (enabled) => {
            if (this.gameStarted)
                return;
            const { profile, } = this.root.profileCommon;
            this.customBetIndexes = this.opened.slice();
            this.riskyModeEnabled = enabled;
            localStorageHelper/* default */.A.set('riskyMode', enabled);
            if (profile?.splitTest?.variantValue === '1tapmines_continue_on' && !enabled) {
                localStorageHelper/* default */.A.set('riskyModeSplitTest', !enabled);
            }
            this.opened = [];
            this.setTilesDefaults(this.customBetIndexes.length && this.customBetIndexes);
            this.resetGame();
        };
        this.setGameDirectionNormal = (val) => {
            this.gameDirectionNormal = val;
            this.gameDirectionTouched = true;
        };
        this.setAnimationProcess = (val) => {
            this.animationProcess = val;
        };
        this.setModeAlertShow = (show) => {
            this.modeAlertShow = show;
        };
        this.setDeskSizeListActive = (value) => {
            if (this.gameStarted)
                return;
            this.deskSizeListActive = value;
            this.tiles = (0,range/* default */.A)(this.deskSize).map((_) => null);
            this.minesAmount = String(this.deskSizeList[value].minMine);
            this.opened = [];
            if (this.hit) {
                this.setHit(0);
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
        this.cancel = () => {
            const { profile: { id }, } = this.root.profileCommon;
            this.gameId = null;
            this.resetGame();
            this.opened = [];
        };
        this.startGame = async () => {
            if (this.resetTimeout && this.riskyModeEnabled) {
                clearTimeout(this.resetTimeout);
                this.resetGame();
                this.opened = [];
                this.gameId = '';
            }
            if (this.winDelayTimeout) {
                clearTimeout(this.winDelayTimeout);
                this.winDelayTimeout = null;
            }
            if (this.resetTimeout && !this.riskyModeEnabled) {
                clearTimeout(this.resetTimeout);
                (0,mobx_esm_js_.runInAction)(() => {
                    this.tiles = (0,range/* default */.A)(this.deskSize).map(() => null);
                    this.setResult(null, 0, 0);
                    this.gameStarted = false;
                    this.isOpenedTable = false;
                });
                this.gameId = '';
            }
            this.soundTimeouts.forEach((timeout) => {
                clearTimeout(timeout);
                timeout = null;
            });
            this.soundTimeouts = [];
            this.animationDelayIndex = -1;
            const { profileCommon: { profile: { balance, id }, }, uiCommon: { setAlertList, showNotEnoughBalanceError }, } = this.root;
            if (balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
            }
            else {
                const savedRoundId = localStorageHelper/* default */.A.get(`${id}:roundId`);
                if (this.gameId || savedRoundId) {
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
                this.animationDelayIndex = -1;
                this.tiles = (0,range/* default */.A)(this.deskSize).map(() => null);
                this.setResult(null, 0, 0);
                if (this.riskyModeEnabled) {
                    this.setHit(0);
                }
                this.gameStarted = false;
                this.betPlaced = false;
                this.isOpenedTable = false;
                this.diamondsB = [];
                this.diamondsC = [];
                this.soundTimeouts.forEach((timeout) => {
                    clearTimeout(timeout);
                    timeout = null;
                });
                this.soundTimeouts = [];
                this.customBetIndexes = [];
                this.showNextTile = false;
            });
        };
        this.resetTiles = () => {
            (0,mobx_esm_js_.runInAction)(() => {
                this.tiles = (0,range/* default */.A)(this.deskSize).map(() => null);
                this.setHit(0);
            });
        };
        this.cashout = async () => {
            if (!this.gameId)
                return;
            const { profile: { token, playerId }, } = this.root.profileCommon;
            try {
                this.betLoading = true;
                const { data: { coefficient, payout, result, mines }, } = await cashoutRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    gameId: this.gameId,
                });
                if (result) {
                    this.setResult(result, payout, coefficient);
                    this.tiles = this.tiles.map((t, i) => (mines.includes(i) ? 0 : 1));
                    this.openTable(mines, this.customBetIndexes, true, result);
                }
                this.setAnimationProcess(true);
                this.placeBetDelayIntervalStatus = true;
                setTimeout(() => {
                    this.placeBetDelayIntervalStatus = false;
                }, this.gameConfig.placeBetDelayInterval || 0);
                this.betLoading = false;
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.resetGame();
                this.gameId = '';
                this.betLoading = false;
                this.root.uiCommon.errorCodeResolver(error);
                return error;
            }
        };
        this.setResult = (result, payout = 0, coefficient = 0) => {
            (0,mobx_esm_js_.runInAction)(() => {
                if (result) {
                    this.betIndex += 1;
                }
                this.gameResult = result;
                this.payout = payout;
                this.coefficient = coefficient;
            });
            if (result) {
                const { gameId, } = this;
                const isWin = result === 'won';
                (0,gtmDataLayerPush/* default */.A)({ parameters: null });
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_closed',
                    parameters: {
                        id: gameId,
                        round_id: gameId,
                        method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                        object: isWin ? 'cashout' : 'lost',
                        value: Number(payout),
                        currency: this.root.profileCommon.profile.currency,
                        wins: isWin ? 1 : 0,
                        multiplier: isWin ? coefficient : 0,
                    },
                });
            }
        };
        this.createGame = async () => {
            const { clientSeed, serverSeed, nonce, root: { profileCommon: { profile: { token, playerId, id }, }, }, } = this;
            try {
                this.betLoading = true;
                const { data: { gameId }, } = await createGameRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed,
                    nonce,
                    serverSeed,
                    theme: this.gameServerId,
                });
                this.gameId = gameId;
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
        this.setDiamondsB = (val) => {
            this.diamondsB = [...val];
        };
        this.setDiamondsC = (val) => {
            this.diamondsC = [...val];
        };
        this.makeMultiBet = async () => {
            if (!this.opened.length)
                return;
            const { profile: { id }, } = this.root.profileCommon;
            const { playAudio } = this.root.audioCommon;
            const { quickDuration } = this.root.quickModeCommon;
            try {
                this.tapLoading = true;
                this.tapLoadingIndex = [...this.opened];
                await this.startGame();
                const { mines, result, payout, coefficient, state: { diamondsB, diamondsC, opened: openedTiles }, } = await this.placeMultiResp(this.opened);
                let diamondsBLocal = [];
                let diamondsCLocal = [];
                if (Array.isArray(openedTiles)) {
                    openedTiles.forEach((item, index) => {
                        if (diamondsB.includes(item)) {
                            diamondsBLocal.push(item);
                        }
                        if (diamondsC.includes(item)) {
                            diamondsCLocal.push(item);
                        }
                    });
                    this.setDiamondsB(diamondsBLocal);
                    this.setDiamondsC(diamondsCLocal);
                }
                else {
                    this.setDiamondsB([]);
                    this.setDiamondsC([]);
                }
                if (mines) {
                    this.tiles = this.tiles.map((t, i) => (mines.includes(i) ? 0 : 1));
                    if (result === 'lost') {
                        const minesFiltered = mines
                            .map((item) => openedTiles.includes(item) && item)
                            .filter((item) => typeof item === 'number')
                            .sort((a, b) => a - b);
                        this.animationDelayIndex = openedTiles.sort((a, b) => a - b).findIndex((item) => item === minesFiltered[0]);
                    }
                }
                for (let i = 0; i < openedTiles.length; i++) {
                    if (this.animationDelayIndex !== -1 && i >= this.animationDelayIndex) {
                        if (i === this.animationDelayIndex) {
                            const t = window.setTimeout(() => {
                                playAudio(this.bombSound);
                            }, quickDuration(i * this.itemAppearanceDelay));
                            this.soundTimeouts.push(t);
                        }
                        continue;
                    }
                    const t = window.setTimeout(() => {
                        const sound = this.winSounds[this.getWinLevel(openedTiles.sort((a, b) => a - b)[i]) || 0];
                        playAudio(sound);
                    }, quickDuration(i * this.itemAppearanceDelay));
                    this.soundTimeouts.push(t);
                }
                const awaitFunction = async () => {
                    let timer = null;
                    const promise = await new Promise((resolve) => {
                        timer = setTimeout(() => {
                            localStorageHelper/* default */.A.remove(`${id}:roundId`);
                            this.setResult(result, payout, coefficient);
                            resolve({});
                        }, quickDuration(result === 'lost' ? this.animationDelayIndex + 2 : openedTiles.length) * this.itemAppearanceDelay + 200);
                    });
                    return { timer, promise };
                };
                if (result) {
                    const { timer } = await awaitFunction();
                    this.winDelayTimeout = timer;
                }
                this.tapLoading = false;
                this.tapLoadingIndex = [];
                this.isOpenedTable = true;
                this.placeBetDelayIntervalStatus = true;
                setTimeout(() => {
                    this.placeBetDelayIntervalStatus = false;
                }, this.gameConfig.placeBetDelayInterval || 0);
                this.resetTimeout = window.setTimeout(() => {
                    (0,mobx_esm_js_.runInAction)(() => {
                        this.tiles = (0,range/* default */.A)(this.deskSize).map(() => null);
                        this.setResult(null, 0, 0);
                        this.gameStarted = false;
                        this.isOpenedTable = false;
                        this.resetGame();
                        this.setAnimationProcess(false);
                    });
                    this.gameId = '';
                }, (result === 'won' ? this.gameConfig.winDuration : this.gameConfig.lostDuration) || 2000);
            }
            catch (error) {
                this.root.uiCommon.errorCodeResolver(error.response);
                this.resetGame();
                this.gameId = '';
                this.tapLoading = false;
                this.tapLoadingIndex = [];
            }
        };
        this.placeMultiResp = async (opened) => {
            const { root: { profileCommon: { profile: { token, playerId, currency, subPartnerId }, }, uiCommon: { isMobile }, }, gameId, serverSeed, } = this;
            if (!gameId) {
                throw new Error('no gameId');
            }
            try {
                const respond = await placeMultiTapRequest({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: false,
                        }),
                    }),
                    open: opened,
                    roundId: gameId,
                    theme: this.gameServerId,
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    amount: Number(this.amount),
                    currency,
                    serverSeed,
                });
                (0,gtmDataLayerPush/* default */.A)({ parameters: null });
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_placed',
                    sid: this.root.profileCommon.profile.sid,
                    parameters: {
                        variant: this.betIndex,
                        value: Number(this.amount),
                        currency: this.root.profileCommon.profile.currency,
                        method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                        multiplier: respond?.data?.coefficient,
                        object: `bet_1.place`,
                        round_id: gameId,
                        id: gameId,
                    },
                });
                return respond.data;
            }
            catch (error) {
                throw error;
            }
        };
        this.getGameSettings = async () => {
            const { root: { profileCommon: { profile: { token, playerId, subPartnerId }, }, uiCommon: { isMobile }, }, } = this;
            try {
                const respond = await (0,vortex/* getGameSettingsRequest */.p_)({
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
                });
                this.gameSettings = respond.data;
                return respond.data;
            }
            catch (error) {
                throw error;
            }
        };
        this.startRiskyGame = async (firstTap) => {
            if (!this.opened.length)
                return;
            this.customBetIndexes = this.opened.slice();
            const { profile: { id }, } = this.root.profileCommon;
            try {
                this.tapLoading = true;
                this.tapLoadingIndex = [...this.opened];
                await this.startGame();
                await this.tapRisky(this.opened, firstTap);
                this.tapLoading = false;
                this.tapLoadingIndex = [];
            }
            catch (error) {
                console.log(error);
                this.root.uiCommon.errorCodeResolver(error.response);
                this.resetGame();
                this.gameId = '';
                this.tapLoading = false;
                this.tapLoadingIndex = [];
            }
        };
        this.tapDefault = (value, preset) => {
            if (this.opened.includes(value)) {
                this.opened = [...this.opened.filter((item) => item !== value)];
                this.decrementHit();
            }
            else {
                if (this.opened.length >= Number(this.deskSize - Number(this.minesAmount)))
                    return;
                this.opened = [...this.opened, value];
                this.incrementHit();
            }
            if (!preset) {
                const getArraySimilarity = () => {
                    const arr1 = this.opened.slice().sort((a, b) => a - b);
                    const arr2 = this.gameConfig.patterns[this.currentPatternId].indexes
                        .slice()
                        .sort((a, b) => a - b);
                    if (arr1.length !== arr2.length) {
                        return false;
                    }
                    for (let i = 0; i < this.opened.length; i++) {
                        if (arr1[i] !== arr2[i]) {
                            return false;
                        }
                    }
                    return true;
                };
                this.clearPatternAvailable = !getArraySimilarity();
            }
        };
        this.tapRisky = async (openedTiles, firstTap) => {
            const { uiCommon: { setAlertList }, } = this.root;
            const { playAudio } = this.root.audioCommon;
            const { quickDuration } = this.root.quickModeCommon;
            this.isFirstTap = firstTap;
            if (!this.gameStarted) {
                setAlertList({
                    title: `${i18next_js_["default"].t('MINES.PRESS')} "${i18next_js_["default"].t('COMMON.START_GAME')}"`,
                    type: 'success',
                });
                return;
            }
            try {
                this.tapLoading = true;
                this.tapLoadingIndex = [...openedTiles];
                const data = await this.tapRequest(openedTiles, firstTap);
                if (!this.hit) {
                    this.betPlaced = true;
                }
                const { status, tiles, open, mines, result, state } = data;
                let diamondsBLocal = [];
                let diamondsCLocal = [];
                if (result === 'lost') {
                    if (Array.isArray(openedTiles)) {
                        openedTiles.forEach((item, index) => {
                            if (state?.diamondsB.includes(item)) {
                                diamondsBLocal.push(item);
                            }
                            if (state?.diamondsC.includes(item)) {
                                diamondsCLocal.push(item);
                            }
                        });
                    }
                }
                else {
                    if (firstTap) {
                        this.showNextTile = true;
                    }
                    if (Array.isArray(open)) {
                        open.forEach((item, index) => {
                            if (tiles[index] === 'TILE_B') {
                                diamondsBLocal.push(item);
                            }
                            else if (tiles[index] === 'TILE_C') {
                                diamondsCLocal.push(item);
                            }
                        });
                    }
                }
                this.setDiamondsB([...this.diamondsB, ...diamondsBLocal]);
                this.setDiamondsC([...this.diamondsC, ...diamondsCLocal]);
                if (!firstTap) {
                    this.opened = [...this.opened, ...openedTiles];
                }
                if (!open || (status === 0 && mines)) {
                    this.tiles = this.tiles.map((t, i) => (mines.includes(i) ? 0 : 1));
                    const minesFiltered = mines
                        .map((item) => openedTiles.includes(item) && item)
                        .filter((item) => typeof item === 'number')
                        .sort((a, b) => a - b);
                    this.animationDelayIndex = openedTiles.sort((a, b) => a - b).findIndex((item) => item === minesFiltered[0]);
                    for (let i = 0; i < openedTiles.length; i++) {
                        if (this.animationDelayIndex !== -1 && i >= this.animationDelayIndex) {
                            if (i === this.animationDelayIndex) {
                                const t = window.setTimeout(() => {
                                    playAudio(this.bombSound);
                                }, quickDuration(i * this.itemAppearanceDelay));
                                this.soundTimeouts.push(t);
                            }
                            continue;
                        }
                        const t = window.setTimeout(() => {
                            const sound = this.winSounds[this.getWinLevel(openedTiles[i]) || 0];
                            playAudio(sound);
                        }, quickDuration(i * this.itemAppearanceDelay));
                        this.soundTimeouts.push(t);
                    }
                    const awaitFunction = async () => {
                        let timer = null;
                        const promise = await new Promise((resolve) => {
                            timer = setTimeout(() => {
                                this.openTable(mines, this.customBetIndexes, false, result);
                                resolve({});
                            }, quickDuration((this.animationDelayIndex + 2) * this.itemAppearanceDelay + 200));
                        });
                        return { timer, promise };
                    };
                    const { timer } = await awaitFunction();
                    this.winDelayTimeout = timer;
                }
                else {
                    this.setAnimationProcess(true);
                    if (firstTap) {
                        for (let i = 0; i < openedTiles.length; i++) {
                            const t = window.setTimeout(() => {
                                const sound = this.winSounds[this.getWinLevel(openedTiles.sort((a, b) => a - b)[i]) || 0];
                                playAudio(sound);
                            }, quickDuration(i * this.itemAppearanceDelay));
                            this.soundTimeouts.push(t);
                        }
                        setTimeout(() => {
                            this.setAnimationProcess(false);
                        }, quickDuration(openedTiles.length * this.itemAppearanceDelay) || 0);
                    }
                    else {
                        const sound = this.winSounds[this.getWinLevel(openedTiles.at(-1)) || 0];
                        playAudio(sound);
                        setTimeout(() => {
                            this.setAnimationProcess(false);
                        }, quickDuration(this.itemAppearanceDelay) || 0);
                    }
                    this.tiles = this.tiles.map((item, index) => (open.includes(index) ? (item = 1) : item));
                    this.incrementHit();
                }
                this.tapLoading = false;
                this.tapLoadingIndex = [];
            }
            catch (error) {
                this.root.uiCommon.errorCodeResolver(error.response);
                this.tapLoading = false;
                this.tapLoadingIndex = [];
                this.resetGame();
                this.gameId = '';
                return error;
            }
        };
        this.tapRequest = async (tiles, firstTap = false) => {
            const { root: { profileCommon: { profile: { token, playerId, subPartnerId, currency }, }, uiCommon: { isMobile }, }, serverSeed, gameId, } = this;
            if (!gameId) {
                throw new Error('no gameId');
            }
            const placeBetParams = !firstTap
                ? {}
                : {
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    amount: Number(this.amount),
                    currency,
                };
            try {
                const respond = await placeBetRequest({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                    }),
                    theme: this.gameServerId,
                    roundId: gameId,
                    open: tiles,
                    serverSeed,
                    ...placeBetParams,
                });
                (0,gtmDataLayerPush/* default */.A)({ parameters: null });
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_placed',
                    sid: this.root.profileCommon.profile.sid,
                    parameters: {
                        variant: this.betIndex,
                        value: Number(this.amount),
                        currency: this.root.profileCommon.profile.currency,
                        method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                        multiplier: respond?.data?.coefficient,
                        object: `bet_1.place`,
                        round_id: gameId,
                        id: gameId,
                    },
                });
                return respond.data;
            }
            catch (error) {
                this.resetGame();
                this.gameId = '';
                throw error;
            }
        };
        this.retrieveGame = async () => {
            const { profileCommon: { profile: { token }, }, uiCommon: { setAlertList }, } = this.root;
            this.retrieveGameLoading = true;
            try {
                const { data: { clientSeed, hash, nonce, opened, openedTiles, amount, roundId, deskSize }, } = await retrieveGameRequest({
                    headers: {
                        authorization: token,
                    },
                    theme: this.gameServerTheme || '1tapmines',
                });
                if (!clientSeed || !nonce || !opened || !opened.length) {
                    this.setTilesDefaults();
                    throw { clientSeed, hash, nonce, opened };
                }
                let diamondsBLocal = [];
                let diamondsCLocal = [];
                if (Array.isArray(opened)) {
                    opened.forEach((item, index) => {
                        if (openedTiles[index] === 'TILE_B') {
                            diamondsBLocal.push(item);
                        }
                        else if (openedTiles[index] === 'TILE_C') {
                            diamondsCLocal.push(item);
                        }
                    });
                    this.setDiamondsB([...this.diamondsB, ...diamondsBLocal]);
                    this.setDiamondsC([...this.diamondsC, ...diamondsCLocal]);
                }
                (0,mobx_esm_js_.runInAction)(() => {
                    this.gameId = roundId;
                    this.gameStarted = true;
                    this.clientSeed = clientSeed;
                    this.nonce = nonce;
                    this.opened = opened.reverse();
                    if (typeof deskSize === 'number')
                        this.deskSizeListActive = this.deskSizeList.map((item) => item.size).indexOf(deskSize);
                    this.retrieveGameLoading = false;
                    this.setHit(opened.length);
                    this.tiles = (0,range/* default */.A)(this.deskSize).map(() => null);
                    this.tiles = this.tiles.map((t, i) => (opened.includes(i) ? 1 : t));
                    this.customBetIndexes = opened.slice();
                    this.clearPatternAvailable = true;
                    this.showNextTile = true;
                    if (amount) {
                        this.betPlaced = true;
                        this.setAmount(amount);
                    }
                    this.mockGame();
                    setAlertList({
                        title: `${i18next_js_["default"].t('NOTIF.CONTINUE_ROUND')}`,
                        type: 'success',
                    });
                });
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.gameId = '';
                this.retrieveGameLoading = false;
                this.gameStarted = false;
                return error;
            }
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
        this.setAmount = (amount) => {
            const { profile: { currency }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.set(`saved_amount:${currency}`, String(amount));
            this.amount = String(amount);
        };
        this.openTable = async (mines, prevOpened, cashout, result) => {
            const { profile: { id }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.remove(`${id}:roundId`);
            if (!cashout) {
                this.gameResult = 'lost';
                this.betIndex += 1;
            }
            this.isOpenedTable = true;
            this.placeBetDelayIntervalStatus = true;
            this.setAnimationProcess(true);
            setTimeout(() => {
                this.placeBetDelayIntervalStatus = false;
            }, this.gameConfig.placeBetDelayInterval || 0);
            this.gameId = '';
            this.resetTimeout = window.setTimeout(() => {
                this.resetGame();
                this.opened = [];
                this.setTilesDefaults(prevOpened);
                this.setAnimationProcess(false);
            }, result === 'won' ? this.gameConfig.winDuration : this.gameConfig.lostDuration || 2000);
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
        this.setTilesDefaults = (randomPattern) => {
            this.resetTimeout = null;
            this.setHit(0);
            if (randomPattern) {
                randomPattern.forEach((tile) => {
                    this.tapDefault(tile);
                });
                return null;
            }
            const dflt = this.gameConfig.patterns[this.currentPatternId].indexes;
            this.tiles.forEach((tile, index) => {
                if (dflt.includes(index)) {
                    this.tapDefault(index, true);
                }
            });
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.centrifuge = new (centrifuge_js_default())((0,mines_config/* config */.$)().centrifuge || '', {});
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            const { profile, } = this.root.profileCommon;
            if (profile?.splitTest?.variantType === 'test' && profile?.splitTest?.variantValue === '1tapmines_continue_on') {
                const raw = localStorageHelper/* default */.A.get('riskyModeSplitTest');
                const riskyModeSplitTest = raw ? JSON.parse(raw) : null;
                if (!riskyModeSplitTest) {
                    this.setRiskyModeEnabled(true);
                }
            }
            this.root.trackingCommon.initGtmDataLayer();
            this.retrieveAmount();
            this.getGameSettings();
            this.retrieveGame();
            this.setTilesDefaults();
        });
        (0,mobx_esm_js_.reaction)(() => this.minesAmount, () => {
            if (this.gameStarted)
                return;
            this.opened = [];
            this.hit = 0;
        });
        this.resetTimeout = null;
        this.winDelayTimeout = null;
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'mines';
        this.gameServerTheme = gameConfig.gameServerTheme || '1tapmines';
        this.deskSizeList = [
            {
                name: '5x5',
                size: 25,
                minMine: 3,
                minesList: [3, 5, 7, 10],
            },
        ];
        this.deskSizeListActive = gameConfig.deskSizeListActive || 0;
        this.mineName = gameConfig.mineName || 'mines';
        this.minesAmount = gameConfig.minesAmount || '3';
        this.itemAppearanceDelay = gameConfig.itemAppearanceDelay ?? 0;
        this.winSounds = gameConfig.winSounds;
        this.bombSound = gameConfig.bombSound;
        this.currentPatternId = (localStorageHelper/* default */.A.has('patternId') ? Number(localStorageHelper/* default */.A.get('patternId')) : gameConfig.defaultPatternId) || 0;
        this.mockGame();
    }
    get deskSize() {
        return this.deskSizeList[this.deskSizeListActive].size;
    }
    get lockedUi() {
        return this.gameStarted;
    }
    get lockedButtons() {
        const { uiCommon: { amountError }, profileCommon: { profile: { token }, }, } = this.root;
        if (this.gameStarted)
            return false;
        return !!amountError || !token;
    }
    get tableTouched() {
        return this.tiles.some((t) => t != null);
    }
    get baseCoefficient() {
        return (0,floor/* default */.A)(this.gameSettings[this.opened.length], 2);
    }
    get coefficientNextWithBonuses() {
        const b = (0,floor/* default */.A)(this.gameSettings[this.opened.length + 1] * this.diamondsB.length * 0.01);
        const c = (0,floor/* default */.A)(this.gameSettings[this.opened.length + 1] * this.diamondsC.length * 0.25);
        return (0,floor/* default */.A)(this.gameSettings[this.opened.length + 1] + b + c, 2);
    }
    get possibleWin() {
        const { limit: { maxWin }, profile: { rounding }, } = this.root.profileCommon;
        const shortCoeff = (0,minesToShortNumber/* default */.A)(this.baseCoefficient);
        const win = (0,truncateDecimals/* default */.A)((0,floor/* default */.A)(Number(this.amount) * parseFloat(String(shortCoeff))), rounding);
        return Math.min(maxWin + Number(this.amount), win);
    }
    get possibleWinWithBonuses() {
        const { limit: { maxWin }, profile: { rounding }, } = this.root.profileCommon;
        const b = this.gameSettings[this.opened.length] * this.diamondsB.length * 0.01;
        const c = this.gameSettings[this.opened.length] * this.diamondsC.length * 0.25;
        const shortCoeff = (0,minesToShortNumber/* default */.A)((0,floor/* default */.A)(this.gameSettings[this.opened.length] + b + c, 2));
        const win = (0,truncateDecimals/* default */.A)((0,floor/* default */.A)(Number(this.amount) * parseFloat(String(shortCoeff))), rounding);
        return Math.min(maxWin + Number(this.amount), win);
    }
    get possibleWinNext() {
        const { limit: { maxWin }, profile: { rounding }, } = this.root.profileCommon;
        const shortCoeff = (0,minesToShortNumber/* default */.A)(this.coefficientNextWithBonuses);
        const win = (0,truncateDecimals/* default */.A)((0,floor/* default */.A)(Number(this.amount) * parseFloat(String(shortCoeff))), rounding);
        return Math.min(maxWin + Number(this.amount), win);
    }
}
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "deskSizeList", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "hitList", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "gameSettings", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "gameId", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "serverSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "minesAmount", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "result", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "currentPatternId", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "hit", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "deskSizeListActive", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "betIndex", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "itemAppearanceDelay", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "animationDelayIndex", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "clearPatternAvailable", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "isFirstTap", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "modeAlertShow", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "gameStarted", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "betPlaced", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "tapLoading", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "betLoading", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "isOpenedTable", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "placebetProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "cashoutProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "gameDirectionNormal", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "gameDirectionTouched", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "animationProcess", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "showNextTile", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "riskyModeEnabled", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "tapLoadingIndex", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "opened", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "tiles", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "diamondsB", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "diamondsC", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "soundTimeouts", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "winSounds", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "bombSound", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "customBetIndexes", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "placeBetDelayIntervalStatus", void 0);
__decorate([
    mobx_esm_js_.observable
], OneTapMinesCommon.prototype, "retrieveGameLoading", void 0);
__decorate([
    mobx_esm_js_.computed
], OneTapMinesCommon.prototype, "deskSize", null);
__decorate([
    mobx_esm_js_.computed
], OneTapMinesCommon.prototype, "lockedUi", null);
__decorate([
    mobx_esm_js_.computed
], OneTapMinesCommon.prototype, "lockedButtons", null);
__decorate([
    mobx_esm_js_.computed
], OneTapMinesCommon.prototype, "tableTouched", null);
__decorate([
    mobx_esm_js_.computed
], OneTapMinesCommon.prototype, "baseCoefficient", null);
__decorate([
    mobx_esm_js_.computed
], OneTapMinesCommon.prototype, "coefficientNextWithBonuses", null);
__decorate([
    mobx_esm_js_.computed
], OneTapMinesCommon.prototype, "possibleWin", null);
__decorate([
    mobx_esm_js_.computed
], OneTapMinesCommon.prototype, "possibleWinWithBonuses", null);
__decorate([
    mobx_esm_js_.computed
], OneTapMinesCommon.prototype, "possibleWinNext", null);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "setCurrentPatternId", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "getWinLevel", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "setRiskyModeEnabled", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "setGameDirectionNormal", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "setAnimationProcess", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "setModeAlertShow", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "setDeskSizeListActive", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "mockGame", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "cancel", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "startGame", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "resetGame", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "resetTiles", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "cashout", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "setResult", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "createGame", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "setDiamondsB", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "setDiamondsC", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "makeMultiBet", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "placeMultiResp", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "getGameSettings", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "startRiskyGame", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "tapDefault", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "tapRisky", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "tapRequest", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "retrieveGame", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "retrieveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "openTable", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "setHit", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "incrementHit", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "decrementHit", void 0);
__decorate([
    mobx_esm_js_.action
], OneTapMinesCommon.prototype, "setTilesDefaults", void 0);
/* harmony default export */ const store_OneTapMinesCommon = (OneTapMinesCommon);


/***/ })

}]);