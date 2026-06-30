"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[9364],{

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

/***/ 99364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_MultiMinesCommon)
});

// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: consume shared module (default) uuid@^9.0.0 (strict) (fallback: ./node_modules/uuid/dist/esm-browser/index.js)
var index_js_ = __webpack_require__(81682);
// EXTERNAL MODULE: consume shared module (default) centrifuge@^2.7.6 (strict) (fallback: ./node_modules/centrifuge/dist/centrifuge.js)
var centrifuge_js_ = __webpack_require__(68239);
var centrifuge_js_default = /*#__PURE__*/__webpack_require__.n(centrifuge_js_);
// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
;// ./src/framework/api/multimines/config.ts

const config = () => {
    return {
        development: {
            api: (0,bootstrap.GET_ENV)().CLIENT_API_HOST || 'localhost:5000',
            core: `https://core.dev.betsy.systems/public/api`,
            centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,bootstrap.GET_ENV)().CENTRIFUGE || (0,bootstrap.GET_ENV)().CLIENT_API_HOST}/connection/websocket`,
        },
        production: {
            api: `${document.location.host}`,
            core: `${document.location.origin}/public/api`,
            centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${document.location.host}/connection/websocket`,
        },
    }[(0,bootstrap.GET_ENV)().NODE_ENV || 'development'];
};

;// ./src/framework/api/multimines/index.ts


const api = () => {
    const protocol = config().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config().api}/api`,
    });
};
const placeBetRequest = ({ headers, ...params }) => api().post('/bets/place', params, { headers });
const cancelBetRequest = ({ headers, ...params }) => api().post('/bets/cancel', params, { headers });
const getStateRequest = ({ headers }) => api().post('/bets/state', '', { headers });
const retriveGameRequest = ({ headers, ...params }) => api().post('/games/retrive', params, { headers });
const getGameSettingsRequest = (params) => api().get('/games/settings', params);
const getBet = ({ headers, betId }) => api().get(`/bets/${betId}`, { headers });
/* harmony default export */ const multimines = ((/* unused pure expression or super */ null && (api)));

// EXTERNAL MODULE: ./src/framework/api/mines/config.ts
var mines_config = __webpack_require__(29533);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/range.ts
var range = __webpack_require__(51604);
// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
// EXTERNAL MODULE: ./src/framework/helpers/formatHeaders.ts
var formatHeaders = __webpack_require__(738);
// EXTERNAL MODULE: consume shared module (default) recursive-diff@^1.0.9 (strict) (fallback: ./node_modules/recursive-diff/dist/recursive-diff.min.js)
var recursive_diff_min_js_ = __webpack_require__(62652);
var recursive_diff_min_js_default = /*#__PURE__*/__webpack_require__.n(recursive_diff_min_js_);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
;// ./src/framework/store/MultiMinesCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class MultiMinesCommon {
    constructor(root, gameConfig) {
        this.deskParams = {
            name: '5x5',
            size: 25,
            minMine: 3,
        };
        this.gameId = null;
        this.roundSeed = '';
        this.clientSeed = (0,index_js_.v4)();
        this.serverSeed = undefined;
        this.nonce = 1;
        this.amount = '1.00';
        this.amountInRound = `1.00`;
        this.minesAmount = 3;
        this.result = 'initial';
        this.gameResult = null;
        this.isTopBet = false;
        this.payout = 0;
        this.coefficient = 0;
        this.hit = 0;
        this.betIndex = 0;
        this.itemAppearanceDelay = 0;
        this.animationDelayIndex = -1;
        this.betLoading = false;
        this.showResults = false;
        this.gameDirectionNormal = true;
        this.gameDirectionTouched = false;
        this.animationProcess = false;
        this.animationTimeTotal = 0;
        this.tapLoadingIndex = [];
        this.opened = this.LSopened;
        this.tiles = (0,range/* default */.A)(this.deskParams.size).map(() => null);
        this.diamondsB = [];
        this.diamondsC = [];
        this.soundTimeouts = [];
        this.winSounds = [''];
        this.bombSound = '';
        this.roundStatus = null;
        this.socketDisabled = false;
        this.centrifugeDisabled = false;
        this.myBet = null;
        this.currentBets = [];
        this.currentBetsServer = { bets: [] };
        this.awaitTime = null;
        this.usersTotal = 0;
        this.betPlaced = false;
        this.gameSettings = {};
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
        this.setGameDirectionNormal = (val) => {
            this.gameDirectionNormal = val;
            this.gameDirectionTouched = true;
        };
        this.setAnimationProcess = (val) => {
            this.animationProcess = val;
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
        this.resetGame = () => {
            (0,mobx_esm_js_.runInAction)(() => {
                this.animationDelayIndex = -1;
                this.tiles = (0,range/* default */.A)(this.deskParams.size).map(() => null);
                this.setResult(null, 0, 0);
                this.betPlaced = false;
                this.showResults = false;
                this.diamondsB = [];
                this.diamondsC = [];
                this.soundTimeouts.forEach((timeout) => {
                    clearTimeout(timeout);
                    timeout = null;
                });
                this.soundTimeouts = [];
                this.setHit(0);
                this.isTopBet = false;
                this.amountInRound = this.amount;
            });
        };
        this.setResult = (result, payout = 0, coefficient = 0) => {
            const { root: { profileCommon: { profile: { playerId }, }, }, } = this;
            if (result === 'won') {
                this.root.trackingCommon.addWin();
            }
            let maxVal = 0;
            let itemIndex = -1;
            for (let i = 0; i < this.currentBets.length; i++) {
                if (this.currentBets[i]?.payoutUsd > maxVal && this.currentBets[i].won) {
                    maxVal = this.currentBets[i]?.payoutUsd;
                    itemIndex = i;
                }
            }
            if (this.currentBets[itemIndex]?.playerId === playerId) {
                this.isTopBet = true;
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
        this.setDiamondsB = (val) => {
            this.diamondsB = [...val];
        };
        this.setDiamondsC = (val) => {
            this.diamondsC = [...val];
        };
        this.tapDefault = (value) => {
            if (this.opened.includes(value)) {
                this.opened = [...this.opened.filter((item) => item !== value)];
                this.decrementHit();
            }
            else {
                if (this.opened.length >= Number(this.deskParams.size - Number(this.minesAmount)))
                    return;
                this.opened = [...this.opened, value];
                this.incrementHit();
            }
            localStorageHelper/* default */.A.set('opened', String(this.opened));
        };
        this.setOpened = (val) => {
            this.opened = [...val];
            localStorageHelper/* default */.A.set('opened', String(this.opened));
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
        this.setHit = (hit = 0) => {
            this.hit = hit;
        };
        this.incrementHit = () => {
            this.hit++;
        };
        this.decrementHit = () => {
            this.hit--;
        };
        this.getGameSettings = async () => {
            const { root: { profileCommon: { profile: { token, playerId, subPartnerId }, }, uiCommon: { isMobile }, }, } = this;
            try {
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
                });
                this.gameSettings = respond.data;
                return respond.data;
            }
            catch (error) {
                throw error;
            }
        };
        this.fetchCurrentBets = async () => {
            const { root: { profileCommon: { profile: { token, playerId }, }, }, } = this;
            try {
                const { data } = await getStateRequest({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                    }),
                });
                this.currentBetsServer = data;
                if (Array.isArray(this.currentBetsServer.bets)) {
                    const newCurrentBets = [];
                    this.currentBetsServer.bets.forEach((item) => {
                        newCurrentBets.push({
                            betId: item[0],
                            playerId: item[1],
                            displayName: item[2],
                            amountUsd: item[3],
                            currency: item[4],
                            opened: item[5],
                        });
                    });
                    newCurrentBets.forEach((item) => {
                        item.color =
                            item.playerId === playerId ? this.gameConfig.userColor ?? 'green' : this.getUserColor(newCurrentBets);
                        if (item.playerId === playerId) {
                            this.betPlaced = true;
                            this.opened = [...item.opened];
                        }
                    });
                    this.currentBets = [...newCurrentBets];
                }
                if (data.roundId) {
                    this.gameId = data.roundId;
                }
            }
            catch (error) {
                console.log('Auth error:', error.response);
            }
        };
        this.placeBet = async (freebet = false, minCoefficient = undefined) => {
            const { root: { profileCommon: { profile: { token, playerId, currency, subPartnerId }, }, uiCommon: { isMobile }, }, gameId, serverSeed, } = this;
            if (!gameId) {
                throw new Error('no gameId');
            }
            if (this.betPlaced || Number(this.baseCoefficient) < minCoefficient)
                return null;
            this.betLoading = true;
            this.tapLoadingIndex = [...this.opened];
            this.amountInRound = this.amount;
            try {
                const respond = await placeBetRequest({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: false,
                        }),
                    }),
                    open: this.opened,
                    theme: this.gameServerId,
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    amount: Number(this.amount),
                    currency,
                    serverSeed,
                    ...(freebet && this.root.freebetsCommon.freebetId && { freebetsId: this.root.freebetsCommon.freebetId }),
                    ...(freebet && minCoefficient && { minCoefficient }),
                });
                this.myBet = {
                    betId: respond.data[0],
                    playerId: respond.data[1],
                    displayName: respond.data[2],
                    amountUsd: respond.data[3],
                    currency: respond.data[4],
                    opened: respond.data[5],
                    color: this.gameConfig.userColor ?? 'green',
                };
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
                        multiplier: this.baseCoefficient,
                        object: `bet_1.place`,
                        round_id: this.gameId,
                        id: this.gameId,
                    },
                });
                this.betPlaced = true;
                this.root.freebetsCommon.listAdd({
                    index: 0,
                    freebet,
                });
                if (this.root.tournamentsCommon && this.root.tournamentsCommon.addBet) {
                    this.root.tournamentsCommon.addBet({
                        amount: Number(this.amount),
                    });
                }
                return respond.data;
            }
            catch (error) {
                this.root.freebetsCommon.listRemoveByIndex(0);
                this.root.uiCommon.errorCodeResolver(error.response);
                return error;
            }
            finally {
                this.betLoading = false;
                this.tapLoadingIndex = [];
            }
        };
        this.cancel = async () => {
            const { profileCommon: { profile: { playerId, token, subPartnerId }, }, uiCommon: { isMobile }, } = this.root;
            this.betLoading = true;
            try {
                await cancelBetRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: false,
                        }),
                    },
                    token,
                    player_id: playerId,
                });
                this.root.freebetsCommon.listRemoveByIndex(0);
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_closed',
                    parameters: {
                        id: this.gameId,
                        round_id: this.gameId,
                        method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                        object: 'cancelled',
                        value: this.amount,
                        currency: this.root.profileCommon.profile.currency,
                    },
                });
                this.betPlaced = false;
                this.currentBets = this.currentBets.filter((item) => item.playerId !== playerId);
                this.myBet = null;
                this.amountInRound = this.amount;
            }
            catch (error) {
                this.root.uiCommon.errorCodeResolver(error.response);
                throw new Error('cancel bet error');
            }
            finally {
                this.betLoading = false;
            }
        };
        this.resolveBetResult = async (data) => {
            const { profileCommon: { profile: { playerId }, }, audioCommon: { playAudio }, quickModeCommon: { quickDuration }, } = this.root;
            const { bet: { opened }, gameResult, } = data;
            this.betIndex += 1;
            let diamondsBLocal = [];
            let diamondsCLocal = [];
            if (Array.isArray(opened)) {
                opened.forEach((item) => {
                    if (gameResult.diamondsB?.includes(item)) {
                        diamondsBLocal.push(item);
                    }
                    if (gameResult.diamondsC?.includes(item)) {
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
            if (gameResult.mines) {
                this.tiles = this.tiles.map((t, i) => (gameResult.mines?.includes(i) ? 0 : 1));
                if (gameResult.fail) {
                    const minesFiltered = gameResult.mines
                        .map((item) => opened.includes(item) && item)
                        .filter((item) => typeof item === 'number')
                        .sort((a, b) => a - b);
                    this.animationDelayIndex = opened.sort((a, b) => a - b).findIndex((item) => item === minesFiltered[0]);
                }
            }
            else {
                this.tiles = this.tiles.map(() => 1);
            }
            if (this.animationDelayIndex === -1 &&
                this.gameConfig.itemAppearanceDelay * opened.length > this.animationTimeTotal) {
                this.itemAppearanceDelay = this.animationTimeTotal / opened.length;
            }
            else if (this.animationDelayIndex !== -1 &&
                this.gameConfig.itemAppearanceDelay * this.animationDelayIndex > this.animationTimeTotal) {
                this.itemAppearanceDelay = this.animationTimeTotal / this.animationDelayIndex;
            }
            else {
                this.itemAppearanceDelay = this.gameConfig.itemAppearanceDelay;
            }
            for (let i = 0; i < opened.length; i++) {
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
                    const sound = this.winSounds[this.getWinLevel(opened.sort((a, b) => a - b)[i]) || 0];
                    playAudio(sound);
                }, quickDuration(i * this.itemAppearanceDelay));
                this.soundTimeouts.push(t);
            }
            const awaitFunction = async () => {
                let timer = null;
                const promise = await new Promise((resolve) => {
                    timer = setTimeout(() => {
                        this.currentBets.forEach((item) => {
                            if (item.playerId === playerId) {
                                item.won = !gameResult.fail;
                                item.payoutCoeff = gameResult.coefficient;
                                item.payoutUsd = gameResult.payout;
                            }
                        });
                        this.currentBets = [...this.currentBets];
                        this.showResults = true;
                        this.setResult(gameResult.fail ? 'lost' : 'won', gameResult.payout, gameResult.coefficient);
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
                                multiplier: this.gameResult === 'won' ? this.coefficient : undefined,
                            },
                        });
                        if (!gameResult.fail) {
                            this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: gameResult.coefficient });
                        }
                        this.root.freebetsCommon.listRemoveByIndex(0);
                        resolve({});
                    }, quickDuration(gameResult.fail ? this.animationDelayIndex * this.itemAppearanceDelay : opened.length * this.itemAppearanceDelay + 200));
                });
                return { timer, promise };
            };
            if (gameResult) {
                const { timer } = await awaitFunction();
                this.winDelayTimeout = timer;
            }
        };
        this.getUserColor = (checkArray = null) => {
            const colors = this.gameConfig.colors ?? ['yellow', 'blue', 'red'];
            const arr = checkArray ?? this.currentBets;
            for (let i = 0; i < colors.length; i++) {
                if (arr.findIndex((item) => item.color === colors[i]) === -1) {
                    return colors[i];
                }
            }
            return '';
        };
        this.betHandler = (diff) => {
            const { profileCommon: { profile: { playerId }, }, } = this.root;
            if (diff.length > 0) {
                try {
                    this.currentBetsServer = recursive_diff_min_js_default().applyDiff(this.currentBetsServer, diff);
                    if (Array.isArray(this.currentBetsServer.bets)) {
                        const newCurrentBets = [];
                        this.currentBetsServer.bets.forEach((item) => {
                            newCurrentBets.push({
                                betId: item[0],
                                playerId: item[1],
                                displayName: item[2],
                                amountUsd: item[3],
                                currency: item[4],
                                opened: item[5],
                            });
                        });
                        const userBetServer = this.currentBetsServer.bets.find((item) => item[1] === playerId);
                        if (!userBetServer && this.betPlaced) {
                            this.myBet && newCurrentBets.push(this.myBet);
                        }
                        newCurrentBets.forEach((item) => {
                            item.color =
                                item.playerId === playerId ? this.gameConfig.userColor ?? 'green' : this.getUserColor(newCurrentBets);
                        });
                        this.currentBets = [...newCurrentBets];
                    }
                }
                catch (error) {
                    console.log('betHandler rdiff error', error, diff);
                }
            }
        };
        this.wsHandler = ({ data }) => {
            const parsedData = JSON.parse(data);
            if (parsedData.t === 'g') {
                const [status, counter, roundID, hash] = parsedData.d;
                switch (status) {
                    case 0: {
                        this.gameId = roundID;
                        this.result = 'initial';
                        this.currentBets = [];
                        this.myBet = null;
                        this.currentBetsServer = { bets: [] };
                        this.resetGame();
                        break;
                    }
                    case 1:
                        this.roundStatus = 'await';
                        this.awaitTime = counter;
                        if (this.gameResult) {
                            this.setResult(null, 0, 0);
                        }
                        break;
                    case 2:
                        this.awaitTime = null;
                        this.roundStatus = 'started';
                        break;
                    case 9:
                        console.log('Centrifuge Error!!', data);
                        break;
                    default:
                        break;
                }
            }
            else if (parsedData.t === 'd') {
                this.betHandler(parsedData.d);
            }
            else if (parsedData.t === 'top') {
                this.roundStatus = 'resulted';
                const roundTopResults = parsedData.d;
                !this.betPlaced ? (this.showResults = true) : '';
                const bets = [...this.currentBets];
                roundTopResults.forEach((item) => {
                    const index = bets.findIndex((innerItem) => item[0] === innerItem.betId);
                    if (index !== -1) {
                        bets[index].won = item[1];
                        bets[index].payoutCoeff = item[2];
                        bets[index].payoutUsd = item[3];
                    }
                });
                this.currentBets = [...bets];
            }
            else if (parsedData.t === 'result') {
                this.resolveBetResult(parsedData.d);
            }
            else if (parsedData.t === 'uc') {
                this.usersTotal = parsedData.d;
            }
        };
        this.setSocketDisabled = (isDisabled) => {
            this.socketDisabled = isDisabled;
        };
        this.socketConnect = async () => {
            this.ws?.close();
            const { profileCommon: { profile: { apiKey, playerId, token, subPartnerId }, }, } = this.root;
            console.log('socketConnect!');
            if (this.ws && this.ws.readyState === 1) {
                return;
            }
            const protocol = (0,mines_config/* config */.$)().api.includes('localhost') ? 'ws' : 'wss';
            let host = `${protocol}://${(0,mines_config/* config */.$)().api}/ws/game/`;
            if (playerId && token) {
                host = `${host}?playerId=${apiKey}:${playerId}&token=${token}`;
                if (subPartnerId) {
                    host = `${host}&subPartnerId=${subPartnerId}`;
                }
            }
            const ws = new WebSocket(host);
            this.ws = ws;
            ws.onopen = () => {
                ws.onmessage = () => {
                    ws.onmessage = (m) => this.wsHandler(m);
                    this.setSocketDisabled(false);
                    console.log('socket connected');
                    clearInterval(this.socketAwaiterInterval);
                };
            };
            ws.onerror = (err) => {
                console.log('socketError', err);
                this.setSocketAwaiter();
            };
        };
        this.setSocketAwaiter = () => {
            if (!this.ws)
                return;
            this.ws.close();
            if (this.root.uiCommon.pageDisabled)
                return;
            const { readyState } = this.ws;
            if (readyState !== 1) {
                this.setSocketDisabled(true);
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
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.centrifuge = new (centrifuge_js_default())((0,mines_config/* config */.$)().centrifuge || '', {
            debug: (0,bootstrap.GET_ENV)().NODE_ENV === 'development',
        });
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.retrieveAmount();
            this.fetchCurrentBets();
            this.getGameSettings();
            setTimeout(() => {
                this.socketConnect();
            }, 100);
        });
        (0,mobx_esm_js_.reaction)(() => this.minesAmount, () => {
            if (this.betPlaced)
                return;
            this.opened = [];
            this.hit = 0;
        });
        this.resetTimeout = null;
        this.winDelayTimeout = null;
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'mines';
        this.deskParams = gameConfig.deskParams || {
            name: '5x5',
            size: 25,
            minMine: 3,
        };
        this.mineName = gameConfig.mineName || 'mines';
        this.minesAmount = gameConfig.minesAmount || 3;
        this.itemAppearanceDelay = gameConfig.itemAppearanceDelay ?? 0;
        this.winSounds = gameConfig.winSounds;
        this.bombSound = gameConfig.bombSound;
        this.animationTimeTotal = gameConfig.defaultAnimationTime ?? 3000;
        this.wsServer = null;
        this.ws = null;
        this.centrifugeHeathCheckTimeout = undefined;
        this.socketAwaiterInterval = undefined;
        this.mockGame();
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: this.amount }];
        }, (index, { amount }) => {
            this.setAmount(Number(amount));
        });
    }
    get LSopened() {
        const arr = localStorageHelper/* default */.A.get('opened');
        if (arr) {
            return arr.split(',').map((item) => +item);
        }
        return [];
    }
    get lockedUi() {
        return this.betPlaced;
    }
    get lockedButtons() {
        const { uiCommon: { amountError }, profileCommon: { profile: { token }, }, } = this.root;
        if (this.betPlaced)
            return false;
        return !!amountError || !token;
    }
    get baseCoefficient() {
        return (0,floor/* default */.A)(this.gameSettings[this.opened.length], 2);
    }
    get coefficientNext() {
        return (0,floor/* default */.A)(this.gameSettings[this.opened.length + 1], 2);
    }
    get possibleWin() {
        const { limit: { maxWin }, profile: { rounding }, } = this.root.profileCommon;
        const amount = this.betPlaced ? this.amountInRound : this.amount;
        const win = (0,floor/* default */.A)(Number(this.amount) * this.baseCoefficient, rounding);
        return Math.min(maxWin + Number(amount), win);
    }
    get possibleWinNext() {
        const { limit: { maxWin }, profile: { rounding }, } = this.root.profileCommon;
        const coeff = this.coefficientNext;
        if (!coeff)
            return 0;
        const amount = this.betPlaced ? this.amountInRound : this.amount;
        const win = (0,floor/* default */.A)(Number(this.amount) * coeff, rounding);
        return Math.min(maxWin + Number(amount), win);
    }
}
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "deskParams", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "gameId", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "serverSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "amountInRound", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "minesAmount", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "result", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "isTopBet", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "hit", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "betIndex", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "itemAppearanceDelay", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "animationDelayIndex", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "betLoading", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "showResults", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "gameDirectionNormal", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "gameDirectionTouched", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "animationProcess", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "animationTimeTotal", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "tapLoadingIndex", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "opened", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "tiles", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "diamondsB", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "diamondsC", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "soundTimeouts", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "winSounds", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "bombSound", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "roundStatus", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "socketDisabled", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "centrifugeDisabled", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "myBet", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "currentBets", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "currentBetsServer", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "awaitTime", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "usersTotal", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "betPlaced", void 0);
__decorate([
    mobx_esm_js_.observable
], MultiMinesCommon.prototype, "gameSettings", void 0);
__decorate([
    mobx_esm_js_.computed
], MultiMinesCommon.prototype, "LSopened", null);
__decorate([
    mobx_esm_js_.computed
], MultiMinesCommon.prototype, "lockedUi", null);
__decorate([
    mobx_esm_js_.computed
], MultiMinesCommon.prototype, "lockedButtons", null);
__decorate([
    mobx_esm_js_.computed
], MultiMinesCommon.prototype, "baseCoefficient", null);
__decorate([
    mobx_esm_js_.computed
], MultiMinesCommon.prototype, "coefficientNext", null);
__decorate([
    mobx_esm_js_.computed
], MultiMinesCommon.prototype, "possibleWin", null);
__decorate([
    mobx_esm_js_.computed
], MultiMinesCommon.prototype, "possibleWinNext", null);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "getWinLevel", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "setGameDirectionNormal", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "setAnimationProcess", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "mockGame", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "resetGame", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "setResult", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "setDiamondsB", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "setDiamondsC", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "tapDefault", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "setOpened", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "retrieveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "setHit", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "incrementHit", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "decrementHit", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "getGameSettings", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "fetchCurrentBets", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "placeBet", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "cancel", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "resolveBetResult", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "getUserColor", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "betHandler", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "wsHandler", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "setSocketDisabled", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "socketConnect", void 0);
__decorate([
    mobx_esm_js_.action
], MultiMinesCommon.prototype, "setSocketAwaiter", void 0);
/* harmony default export */ const store_MultiMinesCommon = (MultiMinesCommon);


/***/ })

}]);