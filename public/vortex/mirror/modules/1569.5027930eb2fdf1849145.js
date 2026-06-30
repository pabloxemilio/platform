"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[1569],{

/***/ 34294:
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

/***/ 41569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_DiceCommon)
});

// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: consume shared module (default) uuid@^9.0.0 (strict) (fallback: ./node_modules/uuid/dist/esm-browser/index.js)
var index_js_ = __webpack_require__(81682);
// EXTERNAL MODULE: consume shared module (default) centrifuge@^2.7.6 (strict) (fallback: ./node_modules/centrifuge/dist/centrifuge.js)
var centrifuge_js_ = __webpack_require__(68239);
var centrifuge_js_default = /*#__PURE__*/__webpack_require__.n(centrifuge_js_);
// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
// EXTERNAL MODULE: ./src/framework/api/dice/config.ts
var config = __webpack_require__(34294);
;// ./src/framework/api/dice/index.ts


const api = () => {
    const protocol = (0,config/* config */.$)().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${(0,config/* config */.$)().api}/api`,
    });
};
const placeBetRequest = ({ headers, ...params }) => api().post('/bets/place', params, { headers });
const getGameRequest = ({ headers, ...params }) => api().post(`/games/create`, params, { headers });
/* harmony default export */ const dice = ((/* unused pure expression or super */ null && (api)));

// EXTERNAL MODULE: ./src/framework/api/index.ts
var framework_api = __webpack_require__(58608);
// EXTERNAL MODULE: ./src/framework/helpers/round.ts
var round = __webpack_require__(77889);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
;// ./src/framework/store/DiceCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class DiceCommon {
    constructor(root, gameConfig) {
        this.showHistory = null;
        this.tab = 0;
        this.currentBet = null;
        this.gameId = '';
        this.diceValue = 50;
        this.roundSeed = '';
        this.clientSeed = (0,index_js_.v4)();
        this.serverSeed = undefined;
        this.nonce = 1;
        this.amount = '1.00';
        this.result = 'initial';
        this.resultTimeout = null;
        this.gameResult = null;
        this.coefficient = 0;
        this.status = null;
        this.payout = 0;
        this.placeBetStatus = 'initial';
        this.myBets = [];
        this.winLevelList = [0, 5, 7, 10];
        this.winShow = false;
        this.autoBetModal = false;
        this.autoBetModalType = '';
        this.autoBetAmountError = null;
        this.historyListSize = 8;
        this.historyList = [];
        this.animation = false;
        this.resultAwait = 'initial';
        this.resultAwaitTimeout = null;
        this.resultAwaitTimeoutClear = null;
        this.freebetId = '';
        this.minCoefficient = undefined;
        this.setAnimation = (value) => {
            this.animation = value;
        };
        this.setAutoBetModal = (value) => {
            this.autoBetModal = value;
            (0,gtmDataLayerPush/* default */.A)({
                action: 'element_view',
                parameters: {
                    object: 'autobet_modal',
                    state: value,
                },
            });
        };
        this.setAutoBetModalType = (value) => {
            this.autoBetModalType = value;
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
        this.setHistoryListSize = (value) => {
            this.historyListSize = value;
        };
        this.updateHistoryList = () => {
            let history = [...this.historyList];
            while (history.length !== this.historyListSize) {
                history.push({
                    value: '',
                    result: '',
                    win: false,
                    over: false,
                    under: false,
                });
            }
            if (this.currentBet) {
                const index = history.findIndex((item) => item.value === '');
                if (index === -1) {
                    history = [
                        ...history.slice(-(this.historyListSize - 1)),
                        {
                            value: `x${this.currentBet.coefficient}`,
                            win: this.currentBet.result === 'won',
                            over: this.currentBet.index === 0,
                            under: this.currentBet.index === 1,
                            result: String(this.currentBet.gameResult),
                        },
                    ];
                }
                else {
                    history[index] = {
                        value: `x${this.currentBet.coefficient}`,
                        win: this.currentBet.result === 'won',
                        over: this.currentBet.index === 0,
                        under: this.currentBet.index === 1,
                        result: String(this.currentBet.gameResult),
                    };
                }
            }
            this.historyList = history;
        };
        this.resetGameResult = () => {
            this.gameResult = null;
        };
        this.fetchGame = async () => {
            const { clientSeed, serverSeed, nonce, root: { profileCommon: { profile }, }, } = this;
            const { token, apiKey } = profile;
            try {
                const { data: { gameId }, } = await getGameRequest({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    clientSeed,
                    nonce,
                    serverSeed,
                    theme: this.gameServerTheme,
                });
                await this.setGame(gameId);
                return gameId;
            }
            catch (error) {
                console.log('fetchGame error:', error);
                return error;
            }
        };
        this.setGame = async (gameId) => {
            return new Promise((resolve, reject) => {
                this.gameId = gameId;
                return resolve('success');
            });
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
        this.setAmount = (amount) => {
            const { profile: { currency }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.set(`saved_amount:${currency}`, amount);
            this.amount = String(amount);
        };
        this.setDiceValue = (value) => {
            this.diceValue = (0,round/* default */.A)(value);
        };
        this.placeBet = (bet, freebet = false) => {
            const { autobetCommon: { autoBetEnabled, initialAmount, onWinIncrease, onWinIncreaseAmount, onLoseIncrease, onLoseIncreaseAmount, stopOnAnyWin, setStopOnAnyWin, }, profileCommon: { profile: { rounding }, }, } = this.root;
            const { result, gameResult, payout, coefficient } = bet;
            const minCoefficient = this.root.freebetsCommon.freebetActive?.offer?.configuration[0]?.minCoefficient;
            this.root.trackingCommon.addBet({
                amount: Number(this.amount),
                id: this.gameId,
            }, false);
            (0,mobx_esm_js_.runInAction)(() => {
                this.currentBet = bet;
                this.coefficient = coefficient;
                this.gameResult = gameResult;
                this.result = result;
                this.payout = payout;
                this.clientSeed = (0,index_js_.v4)();
                this.nonce = this.nonce + 1;
                if (minCoefficient)
                    this.minCoefficient = minCoefficient;
                if (this.root.freebetsCommon.freebetId)
                    this.freebetId = this.root.freebetsCommon.freebetId;
                this.mockGame();
                this.setAnimation(true);
            });
            this.resultTimeout = window.setTimeout(() => {
                this.result = 'initial';
            }, this.root.uiCommon.noAnimation ? 0 : this.gameConfig.game.duration);
            this.resultAwaitTimeout = window.setTimeout(() => {
                this.resultAwait = result;
                this.updateHistoryList();
            }, this.root.uiCommon.noAnimation ? 0 : this.gameConfig.game.duration);
            this.resultAwaitTimeoutClear = window.setTimeout(() => {
                this.resultAwait = 'initial';
            }, this.root.uiCommon.noAnimation
                ? this.gameConfig.winDuration
                : this.gameConfig.game.duration + this.gameConfig.winDuration);
            (0,gtmDataLayerPush/* default */.A)({
                action: 'bet_closed',
                parameters: {
                    id: this.gameId,
                    round_id: this.gameId,
                    method: autoBetEnabled ? 'auto' : 'manual',
                    object: result === 'won' ? 'won' : 'lost',
                    value: result === 'won' ? +payout : 0,
                    currency: this.root.profileCommon.profile.currency,
                    wins: result === 'won' ? 1 : 0,
                    multiplier: coefficient,
                    count: this.root.trackingCommon.betsCount,
                },
            });
            if (autoBetEnabled) {
                if (result === 'won') {
                    if (stopOnAnyWin) {
                        this.stopAutoBet();
                        setStopOnAnyWin(false);
                    }
                    else {
                        if (onWinIncrease && onWinIncreaseAmount > 0) {
                            const a = (Number(this.amount) / 100) * onWinIncreaseAmount;
                            const sum = Number(this.amount) + Number(a);
                            if (sum > this.root.profileCommon.limit.maxBet || sum > this.root.profileCommon.profile.balance) {
                                this.stopAutoBet();
                                this.autoBetAmountError = this.root.uiCommon.getAmountError(String(sum));
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
                        if (sum > this.root.profileCommon.limit.maxBet || sum > this.root.profileCommon.profile.balance) {
                            this.stopAutoBet();
                            this.autoBetAmountError = this.root.uiCommon.getAmountError(String(sum));
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
            if (this.root.tournamentsCommon && this.root.tournamentsCommon.addBet) {
                this.root.tournamentsCommon.addBet({
                    amount: Number(this.amount),
                });
            }
            if (result === 'won') {
                this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: coefficient });
            }
            this.root.freebetsCommon.listRemoveByIndex(0);
        };
        this.placeBetFailed = (error) => {
            console.log('placeBetFailed', error.response.data);
            this.clientSeed = (0,index_js_.v4)();
            this.nonce = this.nonce + 1;
            this.placeBetStatus = 'initial';
        };
        this.setMyBets = (myBets) => {
            this.myBets = myBets;
        };
        this.setPlaceBetStatus = (placeBetStatus) => {
            this.placeBetStatus = placeBetStatus;
        };
        this.updateMyBets = async () => {
            const { profileCommon: { profile: { apiKey, token }, }, } = this.root;
            if (this.tab === 2) {
                try {
                    const { data: myBets } = await (0,framework_api/* getMyBets */.vB)({
                        headers: { authorization: token, cid: apiKey },
                        gameId: this.gameServerId,
                    });
                    this.setMyBets(myBets);
                }
                catch (error) {
                    console.log('getMyBetsError', error);
                }
            }
        };
        this.placeBetAuto = async ({ index }) => {
            this.result = 'initial';
            this.resultAwait = 'initial';
            if (this.resultTimeout) {
                clearTimeout(this.resultTimeout);
            }
            if (this.resultAwaitTimeout) {
                clearTimeout(this.resultAwaitTimeout);
            }
            if (this.resultAwaitTimeoutClear) {
                clearTimeout(this.resultAwaitTimeoutClear);
            }
            const roundId = await this.fetchGame();
            try {
                const { profileCommon: { profile: { playerId, token, currency, subPartnerId }, }, uiCommon: { isMobile }, } = this.root;
                const { data } = await placeBetRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: false,
                        }),
                    },
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    amount: parseFloat(this.amount),
                    value: this.diceValue,
                    action: index === 1 ? 'under' : 'over',
                    currency,
                    roundId,
                    theme: this.gameServerTheme,
                });
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_placed',
                    sid: this.root.profileCommon.profile.sid,
                    parameters: null,
                });
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_placed',
                    sid: this.root.profileCommon.profile.sid,
                    parameters: {
                        value: +this.amount,
                        currency: this.root.profileCommon.profile.currency,
                        method: 'auto',
                        multiplier: index === 1
                            ? +this.getCoefficient(this.diceValue).toFixed(1)
                            : +this.getCoefficient(100 - this.diceValue).toFixed(1),
                        object: `bet_${index + 1}.place`,
                        variant: this.diceValue,
                        round_id: this.gameId,
                        id: this.gameId,
                        count: this.root.trackingCommon.autoBetsCount,
                    },
                });
                if (data?.data?.error) {
                    throw 'error';
                }
                this.placeBet({
                    ...data,
                    index,
                });
                await this.updateMyBets();
                this.setPlaceBetStatus('initial');
            }
            catch (error) {
                this.setPlaceBetStatus('error');
                this.fetchGame();
                this.root.uiCommon.errorCodeResolver(error.response, () => this.setPlaceBetStatus('initial'));
                this.stopAutoBet();
            }
        };
        this.placeBetManual = async ({ index, freebet }) => {
            const minCoefficient = this.root.freebetsCommon.freebetActive?.offer?.configuration[0]?.minCoefficient;
            this.result = 'initial';
            this.resultAwait = 'initial';
            if (this.resultTimeout) {
                clearTimeout(this.resultTimeout);
            }
            if (this.resultAwaitTimeout) {
                clearTimeout(this.resultAwaitTimeout);
            }
            if (this.resultAwaitTimeoutClear) {
                clearTimeout(this.resultAwaitTimeoutClear);
            }
            try {
                if (!this.gameId || !this.gameId.length) {
                    await this.fetchGame();
                }
                const { profileCommon: { profile: { playerId, token, currency, subPartnerId }, }, uiCommon: { isMobile }, } = this.root;
                const { data } = await placeBetRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                    },
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    amount: parseFloat(this.amount),
                    value: this.diceValue,
                    action: index === 1 ? 'under' : 'over',
                    currency,
                    roundId: this.gameId,
                    theme: this.gameServerTheme,
                    ...(freebet && this.root.freebetsCommon.freebetId && { freebetsId: this.root.freebetsCommon.freebetId }),
                    ...(freebet && minCoefficient && { minCoefficient }),
                });
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_placed',
                    sid: this.root.profileCommon.profile.sid,
                    parameters: null,
                });
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_placed',
                    sid: this.root.profileCommon.profile.sid,
                    parameters: {
                        value: +this.amount,
                        currency: this.root.profileCommon.profile.currency,
                        method: 'manual',
                        multiplier: index === 1
                            ? +this.getCoefficient(this.diceValue).toFixed(1)
                            : +this.getCoefficient(100 - this.diceValue).toFixed(1),
                        object: `bet_${index + 1}.place`,
                        variant: this.diceValue,
                        round_id: this.gameId,
                        id: this.gameId,
                        count: this.root.trackingCommon.betsCount,
                    },
                });
                if (data?.data?.error) {
                    throw 'error';
                }
                this.root.freebetsCommon.listAdd({
                    index: 0,
                    freebet: Boolean(this.root.freebetsCommon.freebetId),
                });
                this.placeBet({
                    ...data,
                    index,
                    ...(this.root.freebetsCommon.freebetId && { freebetsId: this.root.freebetsCommon.freebetId }),
                    ...(minCoefficient && { minCoefficient }),
                });
                await this.updateMyBets();
                await this.fetchGame();
                this.setPlaceBetStatus('initial');
            }
            catch (error) {
                this.setPlaceBetStatus('initial'), this.fetchGame();
                this.root.freebetsCommon.listRemoveByIndex(0);
                this.root.uiCommon.errorCodeResolver(error.response, () => this.setPlaceBetStatus('initial'));
            }
        };
        this.makeBet = async (index, freebet = false) => {
            const { profileCommon: { profile: { balance }, }, uiCommon: { showNotEnoughBalanceError }, } = this.root;
            if (!freebet && balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
                return;
            }
            if (this.placeBetStatus !== 'initial')
                return;
            this.setPlaceBetStatus('loading');
            await this.placeBetManual({ index, freebet });
        };
        this.makeAutoBet = async (index) => {
            const { profileCommon: { profile: { balance }, }, uiCommon: { showNotEnoughBalanceError }, } = this.root;
            if (balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
                return;
            }
            const { autobetCommon: { autoBetEnabled, autoBetLimit, autoBetsAmount, setAutoBetsAmount }, } = this.root;
            if (!autoBetEnabled || (autoBetLimit && autoBetsAmount <= 0)) {
                this.stopAutoBet();
                return;
            }
            this.setPlaceBetStatus('loading');
            await this.placeBetAuto({ index });
            if (autoBetLimit) {
                setAutoBetsAmount(String(autoBetsAmount - 1));
            }
            if (this.animation && this.result === 'won') {
                setTimeout(async () => {
                    await this.makeAutoBet(index);
                }, this.gameConfig.game.duration + this.gameConfig.winDuration);
            }
            else if (this.animation) {
                setTimeout(async () => {
                    await this.makeAutoBet(index);
                }, this.gameConfig.game.duration);
            }
            else {
                await this.makeAutoBet(index);
            }
        };
        this.startAutoBet = async (index) => {
            const { autobetCommon: { autoBetsAmount, setAutoBetLimit, setAutoBetEnabled, setInitialAmount, setAutoBetIndex }, } = this.root;
            if (autoBetsAmount > 0) {
                setAutoBetLimit(true);
            }
            (0,mobx_esm_js_.runInAction)(() => {
                setInitialAmount(Number(this.amount));
                setAutoBetEnabled(true);
                setAutoBetIndex(index);
            });
            try {
                await this.makeAutoBet(index);
            }
            catch (error) {
                console.log({ error });
                this.stopAutoBet();
            }
        };
        this.stopAutoBet = () => {
            const { autobetCommon: { setAutoBetLimit, setAutoBetEnabled, setAutoBetIndex }, } = this.root;
            (0,mobx_esm_js_.runInAction)(() => {
                console.log('stopAutoBet');
                setAutoBetEnabled(false);
                setAutoBetIndex(null);
                setAutoBetLimit(false);
                this.gameId = '';
            });
        };
        this.resetHistory = () => {
            this.showHistory = null;
        };
        this.setShowHistory = (id) => {
            this.showHistory = id;
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.centrifuge = new (centrifuge_js_default())((0,config/* config */.$)().centrifuge || '', {});
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.fetchGame();
            this.retreiveAmount();
        });
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'dice';
        this.gameServerTheme = gameConfig.gameServerTheme || 'default';
        this.winLevelList = gameConfig.winLevelList || [0, 5, 7, 10];
        this.diceValue = gameConfig.range.defaultValue;
        this.mockGame();
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: this.amount }];
        }, (index, { amount }) => {
            this.setAmount(Number(amount));
        });
        (0,mobx_esm_js_.reaction)(() => this.historyListSize, () => {
            this.historyList = [];
        });
        (0,mobx_esm_js_.reaction)(() => this.amount, () => {
            this.autoBetAmountError = null;
        });
        (0,mobx_esm_js_.reaction)(() => this.root.uiCommon.isOnline, () => {
            if (!this.root.uiCommon.isOnline) {
                this.setPlaceBetStatus('initial');
                this.stopAutoBet();
            }
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
    get lockedUi() {
        const { autoBetEnabled } = this.root.autobetCommon;
        return this.placeBetStatus !== 'initial' || autoBetEnabled;
    }
    get lockedUiWithFreebets() {
        const { autobetCommon: { autoBetEnabled }, freebetsCommon: { freebetsSuccessIndexList }, } = this.root;
        return autoBetEnabled || this.placeBetStatus !== 'initial' || freebetsSuccessIndexList.includes(0);
    }
    getCoefficient(probability) {
        const inHouse = 2.5;
        return (0,round/* default */.A)((1 / probability) * (100 - inHouse), 4);
    }
    get currentCoefficient() {
        const fixCoeff = Math.floor(this.getCoefficient(this.diceValue) * 10) / 10;
        const value = Number(this.amount) < 1 ? fixCoeff : this.getCoefficient(this.diceValue).toFixed(2);
        return value;
    }
}
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "showHistory", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "tab", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "currentBet", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "gameId", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "diceValue", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "serverSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "result", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "resultTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "status", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "placeBetStatus", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "myBets", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "winLevelList", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "winShow", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "autoBetModal", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "autoBetModalType", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "autoBetAmountError", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "historyListSize", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "historyList", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "animation", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "resultAwait", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "resultAwaitTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "resultAwaitTimeoutClear", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "freebetId", void 0);
__decorate([
    mobx_esm_js_.observable
], DiceCommon.prototype, "minCoefficient", void 0);
__decorate([
    mobx_esm_js_.computed
], DiceCommon.prototype, "winLevel", null);
__decorate([
    mobx_esm_js_.computed
], DiceCommon.prototype, "lockedUi", null);
__decorate([
    mobx_esm_js_.computed
], DiceCommon.prototype, "lockedUiWithFreebets", null);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "setAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "setAutoBetModal", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "setAutoBetModalType", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "mockGame", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "setHistoryListSize", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "updateHistoryList", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "resetGameResult", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "fetchGame", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "setGame", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "retreiveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "setDiceValue", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "placeBet", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "placeBetFailed", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "setMyBets", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "setPlaceBetStatus", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "updateMyBets", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "placeBetAuto", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "placeBetManual", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "makeBet", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "makeAutoBet", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "startAutoBet", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "stopAutoBet", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "resetHistory", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "setShowHistory", void 0);
__decorate([
    mobx_esm_js_.action
], DiceCommon.prototype, "getCoefficient", null);
__decorate([
    mobx_esm_js_.computed
], DiceCommon.prototype, "currentCoefficient", null);
/* harmony default export */ const store_DiceCommon = (DiceCommon);


/***/ })

}]);