"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[8264],{

/***/ 10162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function coefficientFromColor(color) {
    return color === 'white' ? 14 : 2;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coefficientFromColor);


/***/ }),

/***/ 8264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_DoubleCommon)
});

// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: consume shared module (default) centrifuge@^2.7.6 (strict) (fallback: ./node_modules/centrifuge/dist/centrifuge.js)
var centrifuge_js_ = __webpack_require__(68239);
var centrifuge_js_default = /*#__PURE__*/__webpack_require__.n(centrifuge_js_);
// EXTERNAL MODULE: consume shared module (default) recursive-diff@^1.0.9 (strict) (fallback: ./node_modules/recursive-diff/dist/recursive-diff.min.js)
var recursive_diff_min_js_ = __webpack_require__(62652);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/double/config.ts

const config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var index_js_ = __webpack_require__(75364);
;// ./src/framework/api/double/index.ts


const double_api = () => {
    const protocol = config().api.includes('localhost') ? 'http' : 'https';
    return index_js_["default"].create({
        baseURL: `${protocol}://${config().api}/api`,
    });
};
const placeBetRequest = ({ headers, ...params }) => double_api().post('/bets/place', params, { headers });
const cancelBetRequest = ({ headers, ...params }) => double_api().post('/bets/cancel', params, { headers });
const getState = ({ headers }) => double_api().get(`/bets/state`, { headers });
const getHistory = ({ headers, size }) => double_api().get('/games/history', { params: { size }, headers });
/* harmony default export */ const api_double = ((/* unused pure expression or super */ null && (double_api)));

// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
;// ./src/framework/helpers/double/doubleColorFromResult.ts
function colorFromResult(result) {
    if (result === 0) {
        return 'white';
    }
    if (result <= 7) {
        return 'red';
    }
    return 'black';
}
/* harmony default export */ const doubleColorFromResult = (colorFromResult);

// EXTERNAL MODULE: ./src/framework/helpers/double/doubleCoefficientFromColor.ts
var doubleCoefficientFromColor = __webpack_require__(10162);
;// ./src/framework/store/DoubleCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class DoubleCommon {
    constructor(root, gameConfig) {
        this.roundSeed = '';
        this.amount = '1.00';
        this.status = 0;
        this.result = 'initial';
        this.gameResult = 0;
        this.resultColor = 'white';
        this.resultColorIsDelay = 'white';
        this.gameResultWithRid = '0';
        this.gameId = '';
        this.awaitTime = null;
        this.startTimestamp = null;
        this.startTimestampStatus = false;
        this.payout = 0;
        this.myBetsUpdater = 0;
        this.playersList = {};
        this.playersListColor = ['red', 'white', 'black'];
        this.getIndexFromColor = (color) => this.playersListColor.indexOf(color);
        this.bets = [];
        this.currentBets = [];
        this.placebetProcessing = false;
        this.placebetProcessingList = {};
        this.controlButtonActive = '';
        this.historyListSize = 8;
        this.historyList = [];
        this.animation = false;
        this.winScreen = false;
        this.setWinScreen = (value) => {
            this.winScreen = value;
        };
        this.setAnimation = (value) => {
            this.animation = value;
        };
        this.setHistoryListSize = (value) => {
            this.historyListSize = value;
        };
        this.setHistoryList = (history) => {
            this.historyList = history
                .map(([id, color, number]) => {
                return {
                    value: `x${(0,doubleCoefficientFromColor/* default */.A)(color)}`,
                    color: color,
                    number: number,
                    coefficient: (0,doubleCoefficientFromColor/* default */.A)(color),
                };
            })
                .reverse();
        };
        this.updateHistoryList = () => {
            let history = [...this.historyList];
            history = [
                ...history.slice(-(this.historyListSize - 1)),
                {
                    value: `x${this.coefficient}`,
                    color: doubleColorFromResult(this.gameResult),
                    number: this.gameResult,
                    coefficient: this.coefficient,
                },
            ];
            this.historyList = history;
        };
        this.setControlButtonActive = (value) => {
            this.controlButtonActive = value;
        };
        this.setStartTimestampStatus = (value) => {
            this.startTimestampStatus = value;
        };
        this.wheelGameHandler = (data) => {
            const { status, value, t } = data;
            switch (status) {
                case 0: {
                    const [gameId, hash] = value;
                    this.gameId = gameId;
                    this.result = 'initial';
                    this.bets = [];
                    this.currentBets = [];
                    break;
                }
                case 1:
                    this.awaitTime = value;
                    this.startTimestamp = t;
                    break;
                case 2:
                    this.awaitTime = null;
                    break;
                case 3: {
                    const [result, color, gameId, hash, salt] = value;
                    this.gameId = gameId;
                    this.gameResult = result;
                    this.resultColor = color;
                    this.gameResultWithRid = `${result}:${this.gameId}`;
                    this.setAnimation(true);
                    setTimeout(() => {
                        this.result =
                            this.currentBets.length > 0
                                ? this.currentBets.filter((item) => item.color === color).length > 0
                                    ? 'win'
                                    : 'lose'
                                : 'initial';
                        this.resultColorIsDelay = color;
                        this.updateHistoryList();
                        this.setAnimation(false);
                        this.setWinScreen(true);
                        if (this.result === 'win') {
                            this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: (0,doubleCoefficientFromColor/* default */.A)(color) });
                        }
                        this.root.freebetsCommon.listRemoveByIndex(0);
                        setTimeout(() => {
                            this.setWinScreen(false);
                        }, this.gameConfig.winDuration);
                    }, this.root.uiCommon.noAnimation ? 0 : this.gameConfig.game.duration);
                    break;
                }
                case 4:
                    break;
                case 5:
                    break;
                case 9:
                    console.log('Centrifuge Error!!', data);
                    break;
                default:
                    break;
            }
            this.status = status;
        };
        this.place = async (color, freebet) => {
            const { profileCommon: { profile: { playerId, token, currency, subPartnerId, balance }, }, uiCommon: { isMobile, showNotEnoughBalanceError }, } = this.root;
            if (!freebet && balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
                return false;
            }
            try {
                this.placebetProcessing = true;
                this.placebetProcessingList[color] = true;
                const respond = await placeBetRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: false,
                        }),
                    },
                    color: color,
                    amount: Number(this.amount),
                    currency,
                    token,
                    theme: this.gameServerTheme,
                    metadata: JSON.stringify({
                        device: this.root.uiCommon.isMobile ? 'mobile' : 'desktop',
                        manual: true,
                        subPartnerId: this.root.profileCommon.profile.subPartnerId,
                    }),
                    ...(freebet && this.root.freebetsCommon.freebetId && { freebetsId: this.root.freebetsCommon.freebetId }),
                });
                const { data } = respond;
                (0,mobx_esm_js_.runInAction)(() => {
                    this.currentBets.push({ ...data, color, currency });
                    this.placebetProcessing = false;
                    this.placebetProcessingList[color] = false;
                    this.controlButtonActive = '';
                    this.root.freebetsCommon.listAdd({
                        index: 0,
                        freebet,
                    });
                });
                if (this.root.tournamentsCommon && this.root.tournamentsCommon.addBet) {
                    this.root.tournamentsCommon.addBet({
                        amount: Number(this.amount),
                    });
                }
                return true;
            }
            catch (error) {
                this.placebetProcessing = false;
                this.placebetProcessingList[color] = false;
                this.root.uiCommon.errorCodeResolver(error.response);
                return false;
            }
        };
        this.cancel = async (id, color) => {
            const { profileCommon: { profile: { playerId, token, subPartnerId }, }, uiCommon: { isMobile }, } = this.root;
            try {
                this.placebetProcessing = true;
                if (color)
                    this.placebetProcessingList[color] = true;
                const respond = await cancelBetRequest({
                    id,
                    token,
                    headers: {
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: false,
                        }),
                    },
                });
                const { data } = respond;
                this.root.freebetsCommon.listRemoveByIndex(0);
                this.currentBets = this.currentBets.filter(({ id }) => id !== data.id);
                this.placebetProcessing = false;
                if (color)
                    this.placebetProcessingList[color] = false;
                return true;
            }
            catch (error) {
                this.placebetProcessing = false;
                if (color)
                    this.placebetProcessingList[color] = false;
                this.root.uiCommon.errorCodeResolver(error.response);
                return false;
            }
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
        this.fetchCurrentBets = async () => {
            const { root: { profileCommon: { profile }, }, } = this;
            const { token, playerId } = profile;
            try {
                const { data } = await getState({
                    headers: {
                        authorization: token,
                    },
                });
                this.mutableCurrentBet(data.playerBets);
                this.mutableBets(data.bets);
                if (data.roundId) {
                    this.gameId = data.roundId;
                }
            }
            catch (error) {
                console.log('Auth error:', error);
            }
        };
        this.fetchHistory = async (size) => {
            const { root: { profileCommon: { profile }, }, } = this;
            const { token, playerId } = profile;
            if (!token || !playerId)
                return;
            try {
                const { data } = await getHistory({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    size,
                });
                if (Array.isArray(data) && data.length) {
                    this.setHistoryList(data);
                }
            }
            catch (error) {
                console.log('History error:', error);
            }
        };
        this.mutableCurrentBet = (playerBets) => {
            if (!playerBets)
                return;
            this.currentBets = playerBets
                .map((bet, index) => {
                if (!bet)
                    return null;
                return {
                    id: bet[0],
                    name: bet[1],
                    amount: bet[2],
                    color: this.playersListColor[index],
                    coefficient: this.playersListColor[index] === 'white' ? 14 : 2,
                    result: 'unknown',
                    status: 'placed',
                    currency: bet[3],
                    isFreebet: bet[4],
                };
            })
                .filter((bet) => bet !== null);
        };
        this.mutableBets = (bets) => {
            if (!bets.length)
                return;
            this.playersList = bets;
            const playersList = this.playersListColor
                .map((color, index) => {
                return this.playersList[index].bets.map((player) => {
                    return {
                        id: player[0],
                        name: player[1],
                        amount: player[2],
                        color: color,
                        playerId: '',
                        playerName: player[1],
                        currency: player[3],
                    };
                });
            })
                .flat()
                .filter((item) => !this.currentBets.map((bet) => bet.id).includes(item.id));
            const playerBet = this.currentBets.map((bet) => {
                return {
                    id: bet.id,
                    name: bet.name,
                    amount: bet.amount,
                    color: bet.color,
                    playerId: '',
                    playerName: bet.name,
                    currency: bet.currency,
                };
            });
            this.bets = [...playersList, ...playerBet];
        };
        this.computedStartTimestamp = () => {
            const computed = () => {
                if (this.startTimestamp && Date.now() >= this.startTimestamp) {
                    this.setStartTimestampStatus(true);
                }
                else {
                    this.setStartTimestampStatus(false);
                }
                requestAnimationFrame(computed);
            };
            requestAnimationFrame(computed);
        };
        this.root = root;
        (0,mobx_esm_js_.makeObservable)(this);
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'double';
        this.gameServerTheme = gameConfig.gameServerTheme || 'default';
        this.centrifuge = new (centrifuge_js_default())(config().centrifuge || '', {});
        this.root.profileCommon.auth(gameConfig.gameServerId).then(() => {
            this.root.trackingCommon.initGtmDataLayer();
            this.fetchCurrentBets();
            this.fetchHistory(this.historyListSize);
            this.retreiveAmount();
            const subscription = this.centrifuge
                .subscribe('roulette', ({ data }) => {
                if (data instanceof Uint8Array) {
                    data = JSON.parse(data.reduce((s, c) => (s += String.fromCharCode(c)), ''));
                }
                if (!Array.isArray(data)) {
                    this.wheelGameHandler(data);
                }
            })
                .on('disconnect', function () {
                console.log('centrifuge disconnected');
            })
                .on('error', () => {
                console.log('centrifuge error disconnected');
            });
            const size = 20;
            const betsubscription = this.centrifuge
                .subscribe(`roulette_chart_${size}`, ({ data }) => {
                try {
                    this.mutableBets((0,recursive_diff_min_js_.applyDiff)(this.playersList, data));
                }
                catch (error) { }
            })
                .on('disconnect', function () {
                console.log('centrifuge disconnected');
            })
                .on('error', () => {
                console.log('centrifuge error disconnected');
            });
        });
        (0,mobx_esm_js_.reaction)(() => this.root.uiCommon.isOnline, (isOnline) => {
            if (isOnline) {
                this.fetchHistory(this.historyListSize);
                this.fetchCurrentBets();
            }
        });
        (0,mobx_esm_js_.reaction)(() => this.historyListSize, () => {
            this.fetchHistory(this.historyListSize);
        });
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: this.amount }];
        }, (index, { amount }) => {
            this.setAmount(Number(amount));
        });
        this.ws = {};
        this.computedStartTimestamp();
    }
    get roundStart() {
        return this.awaitTime === null;
    }
    get currentBetsIds() {
        return this.currentBets.map((bet) => bet.id);
    }
    get coefficient() {
        return (0,doubleCoefficientFromColor/* default */.A)(doubleColorFromResult(this.gameResult));
    }
    get betsViews() {
        const defaultBets = {
            ['white']: [],
            ['red']: [],
            ['black']: [],
        };
        return this.bets.reduce((acc, bet) => {
            acc[bet.color].push(bet);
            return acc;
        }, defaultBets);
    }
}
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "status", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "result", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "resultColor", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "resultColorIsDelay", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "gameResultWithRid", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "gameId", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "awaitTime", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "startTimestamp", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "startTimestampStatus", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "myBetsUpdater", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "playersList", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "bets", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "currentBets", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "placebetProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "placebetProcessingList", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "controlButtonActive", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "historyListSize", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "historyList", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "animation", void 0);
__decorate([
    mobx_esm_js_.observable
], DoubleCommon.prototype, "winScreen", void 0);
__decorate([
    mobx_esm_js_.computed
], DoubleCommon.prototype, "roundStart", null);
__decorate([
    mobx_esm_js_.computed
], DoubleCommon.prototype, "currentBetsIds", null);
__decorate([
    mobx_esm_js_.computed
], DoubleCommon.prototype, "coefficient", null);
__decorate([
    mobx_esm_js_.computed
], DoubleCommon.prototype, "betsViews", null);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "setWinScreen", void 0);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "setAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "setHistoryListSize", void 0);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "setHistoryList", void 0);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "updateHistoryList", void 0);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "setControlButtonActive", void 0);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "setStartTimestampStatus", void 0);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "wheelGameHandler", void 0);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "place", void 0);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "cancel", void 0);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "retreiveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "fetchCurrentBets", void 0);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "fetchHistory", void 0);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "mutableCurrentBet", void 0);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "mutableBets", void 0);
__decorate([
    mobx_esm_js_.action
], DoubleCommon.prototype, "computedStartTimestamp", void 0);
/* harmony default export */ const store_DoubleCommon = (DoubleCommon);


/***/ })

}]);