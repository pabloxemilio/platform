"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[7668],{

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

/***/ 77668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_WheelCommon)
});

// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: consume shared module (default) centrifuge@^2.7.6 (strict) (fallback: ./node_modules/centrifuge/dist/centrifuge.js)
var centrifuge_js_ = __webpack_require__(68239);
var centrifuge_js_default = /*#__PURE__*/__webpack_require__.n(centrifuge_js_);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/wheel/config.ts

const config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var index_js_ = __webpack_require__(75364);
;// ./src/framework/api/wheel/index.ts


const wheel_api = () => {
    const protocol = config().api.includes('localhost') ? 'http' : 'https';
    return index_js_["default"].create({
        baseURL: `${protocol}://${config().api}/api`,
    });
};
const placeBetRequest = ({ headers, ...params }) => wheel_api().post('/bets/place', params, { headers });
const cancelBetRequest = ({ headers, ...params }) => wheel_api().post('/bets/cancel', params, { headers });
const getState = ({ headers }) => wheel_api().get(`/bets/state`, { headers });
const getHistory = ({ headers, size }) => wheel_api().get(`/games/history?size=${size}`, { headers });
/* harmony default export */ const wheel = ((/* unused pure expression or super */ null && (wheel_api)));

// EXTERNAL MODULE: ./src/framework/helpers/range.ts
var range = __webpack_require__(51604);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
;// ./src/framework/hooks/useTimeout.ts
function useTimeout({ visible, delay, callback }) {
    let timeout = null;
    if (!visible) {
        callback();
    }
    else {
        timeout = setTimeout(() => {
            callback();
        }, delay);
    }
    return timeout;
}
/* harmony default export */ const hooks_useTimeout = (useTimeout);

;// ./src/framework/helpers/wheel/wheelCoefficientFromResult.ts
function coefficientFromResult(result, map) {
    return map[Math.trunc(result)];
}
/* harmony default export */ const wheelCoefficientFromResult = (coefficientFromResult);

;// ./src/framework/store/WheelCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class WheelCommon {
    constructor(root, gameConfig) {
        this.tiles = (0,mobx_esm_js_.observable)((0,range/* default */.A)(25).map((v) => null));
        this.roundSeed = '';
        this.amount = '1.00';
        this.status = 0;
        this.result = 'initial';
        this.gameResult = 0;
        this.gameResultWithRid = '0';
        this.gameResultAwaitWithRid = '0';
        this.gameId = '';
        this.awaitTime = null;
        this.payout = 0;
        this.history = [];
        this.myBetsUpdater = 0;
        this.gameStarted = false;
        this.bets = [];
        this.currentBets = [];
        this.statistics = {};
        this.placebetProcessing = {};
        this.statisticsFetched = false;
        this.rebetData = {
            roundId: '',
            bets: [],
        };
        this.rebetProcessing = false;
        this.animation = false;
        this.historyListSize = 8;
        this.historyList = [];
        this.winScreen = false;
        this.winScreenTimeout = null;
        this.setHistoryListSize = (value) => {
            this.historyListSize = value;
        };
        this.setHistoryList = (history) => {
            this.historyList = history
                .map(([id, coefficient]) => {
                return {
                    value: `x${coefficient}`,
                    win: false,
                    state: {
                        ...Object.fromEntries(this.gameConfig.buttons.map((item) => [`x${item.coefficient}`, item.coefficient === coefficient])),
                    },
                };
            })
                .reverse();
        };
        this.updateHistoryList = () => {
            const win = this.currentBets.filter((item) => item.coefficient === this.coefficient).length > 0;
            let history = [...this.historyList];
            history = [
                ...history.slice(-(this.historyListSize - 1)),
                {
                    value: `x${this.coefficient}`,
                    win: win,
                    state: {
                        ...Object.fromEntries(this.gameConfig.buttons.map((item) => [`x${item.coefficient}`, item.coefficient === this.coefficient])),
                    },
                },
            ];
            this.historyList = history;
        };
        this.setAnimation = (value) => {
            this.animation = value;
        };
        this.updateStatistics = (coefficient) => {
            this.statistics[coefficient] = this.statistics[coefficient] + 1;
        };
        this.wheelBetsHandler = (data) => {
            const { type, ...rest } = data;
            switch (type) {
                case 'add': {
                    this.bets.push(data);
                    break;
                }
                case 'cancel':
                    this.bets = this.bets.filter(({ id }) => id !== rest.id);
                    break;
                default:
                    console.log('UNknown message', data);
                    break;
            }
        };
        this.wheelGameHandler = (data) => {
            const { status, value } = data;
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
                    break;
                case 2:
                    this.awaitTime = null;
                    if (this.winScreenTimeout)
                        clearTimeout(this.winScreenTimeout);
                    break;
                case 3: {
                    const [result, hash, salt] = value;
                    this.gameResult = result;
                    this.gameResultWithRid = `${result}:${this.gameId}`;
                    this.animation = true;
                    const win = this.currentBets.filter((item) => item.coefficient === this.coefficient).length > 0;
                    this.result = win ? 'win' : 'lose';
                    hooks_useTimeout({
                        visible: this.root.uiCommon.isVisible,
                        delay: this.gameConfig.game.duration,
                        callback: () => {
                            this.gameResultAwaitWithRid = `${result}:${this.gameId}`;
                            this.winScreen = true;
                            this.updateHistoryList();
                            this.updateCurrentBets(this.coefficient);
                            this.winScreenTimeout = window.setTimeout(() => {
                                this.winScreen = false;
                            }, this.gameConfig.winDuration);
                        },
                    });
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
        this.place = async (coefficient, manual) => {
            const { profileCommon: { profile: { playerId, token, currency, subPartnerId, balance }, }, uiCommon: { isMobile, showNotEnoughBalanceError }, } = this.root;
            if (balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
                return;
            }
            (0,mobx_esm_js_.runInAction)(() => {
                this.placebetProcessing[coefficient] = true;
            });
            try {
                const { changedNickname } = this.root.profileCommon;
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
                    coefficient,
                    amount: Number(this.amount),
                    currency,
                    token,
                    l: this.exp,
                    theme: this.gameServerTheme,
                    nickname: changedNickname ? changedNickname : undefined,
                    metadata: JSON.stringify({
                        device: isMobile ? 'mobile' : 'desktop',
                        manual: true,
                        subPartnerId: this.root.profileCommon.profile.subPartnerId,
                    }),
                });
                const { data } = respond;
                if (manual) {
                    this.setRebetData('add', data);
                }
                (0,mobx_esm_js_.runInAction)(() => {
                    this.placebetProcessing[coefficient] = false;
                    this.currentBets.push(data);
                });
                if (this.root.tournamentsCommon && this.root.tournamentsCommon.addBet) {
                    this.root.tournamentsCommon.addBet({
                        amount: Number(this.amount),
                    });
                }
            }
            catch (error) {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.placebetProcessing[coefficient] = false;
                });
                this.root.uiCommon.errorCodeResolver(error.response);
                throw new Error('place bet error');
            }
        };
        this.placeWithAmount = async (coefficient, amount) => {
            const { profileCommon: { profile: { playerId, token, currency, subPartnerId, balance }, }, uiCommon: { isMobile, showNotEnoughBalanceError }, } = this.root;
            if (balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
                return;
            }
            (0,mobx_esm_js_.runInAction)(() => {
                this.placebetProcessing[coefficient] = true;
            });
            try {
                const { changedNickname } = this.root.profileCommon;
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
                    coefficient,
                    amount: amount,
                    currency,
                    token,
                    l: this.exp,
                    theme: this.gameServerTheme,
                    nickname: changedNickname ? changedNickname : undefined,
                    metadata: JSON.stringify({
                        device: isMobile ? 'mobile' : 'desktop',
                        manual: true,
                        subPartnerId: this.root.profileCommon.profile.subPartnerId,
                    }),
                });
                const { data } = respond;
                (0,mobx_esm_js_.runInAction)(() => {
                    this.rebetProcessing = false;
                    this.placebetProcessing[coefficient] = false;
                    this.currentBets.push(data);
                });
                this.setRebetData('add', data);
            }
            catch (error) {
                this.root.uiCommon.errorCodeResolver(error.response);
                (0,mobx_esm_js_.runInAction)(() => {
                    this.placebetProcessing[coefficient] = false;
                });
                throw new Error('place bet error');
            }
        };
        this.cancel = async ({ id, manual, coefficient }) => {
            const { profileCommon: { profile: { playerId, token, subPartnerId }, }, uiCommon: { isMobile }, } = this.root;
            try {
                this.placebetProcessing[coefficient] = true;
                const respond = await cancelBetRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: false,
                        }),
                    },
                    id,
                    token,
                });
                const { data } = respond;
                if (manual) {
                    const bet = this.currentBets.find(({ id }) => id === data.id);
                    if (bet) {
                        this.setRebetData('remove', bet);
                    }
                }
                this.currentBets = this.currentBets.filter(({ id }) => id !== data.id);
                this.placebetProcessing[coefficient] = false;
            }
            catch (error) {
                this.root.uiCommon.errorCodeResolver(error.response);
                this.placebetProcessing[coefficient] = false;
                throw new Error('cancel bet error');
            }
        };
        this.setRebetData = (type, { coefficient, amount }) => {
            const { roundId } = this.rebetData;
            if (roundId !== this.gameId) {
                this.rebetData.roundId = this.gameId;
                this.rebetData.bets = [];
            }
            try {
                const { bets } = this.rebetData;
                const newBets = bets.filter(([c]) => c !== coefficient);
                if (type === 'add') {
                    newBets.push([coefficient, amount]);
                }
                this.rebetData.bets = newBets;
                localStorageHelper/* default */.A.set('rebets', JSON.stringify(this.rebetData));
            }
            catch (error) {
                console.log(error, 'localstorage error');
            }
        };
        this.rebet = () => {
            this.rebetProcessing = true;
            const { bets } = this.rebetData;
            bets.forEach(([coefficient, amount]) => {
                this.placeWithAmount(coefficient, amount);
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
        this.fetchCurrentBets = async () => {
            const { root: { profileCommon: { profile }, }, } = this;
            const { token, playerId } = profile;
            try {
                const { data } = await getState({
                    headers: {
                        authorization: token,
                    },
                });
                if (data.bets && Array.isArray(data.bets) && data.bets.length && this.status < 4) {
                    this.bets = data.bets;
                    this.currentBets = data.bets.filter(({ playerId: pId }) => pId === playerId);
                }
                if (data.gameId) {
                    this.gameId = data.gameId;
                }
            }
            catch (error) {
                console.log('Auth error:', error.response);
            }
        };
        this.fetchHistory = async (size = this.historyListSize) => {
            const { root: { profileCommon: { profile }, }, } = this;
            const { token, playerId } = profile;
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
        this.addHistoryItem = async (historyItem) => {
            this.history = [historyItem, ...this.history];
        };
        this.updateCurrentBets = async (result) => {
            if (this.currentBets.length) {
                this.myBetsUpdater += 1;
            }
        };
        this.root = root;
        (0,mobx_esm_js_.makeObservable)(this);
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'neko';
        this.gameServerTheme = gameConfig.gameServerTheme || 'default';
        this.statistics = Object.fromEntries(gameConfig.buttons.map((item) => [item.coefficient, 0]));
        this.placebetProcessing = Object.fromEntries(gameConfig.buttons.map((item) => [item.coefficient, false]));
        this.centrifuge = new (centrifuge_js_default())(config().centrifuge || '', {});
        this.root.profileCommon.auth(this.gameServerId).then(() => {
            this.root.trackingCommon.initGtmDataLayer();
            this.fetchCurrentBets();
            this.retreiveAmount();
            this.fetchHistory();
            const subscription = this.centrifuge
                .subscribe('wheel_game', ({ data }) => {
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
            const betsubscription = this.centrifuge
                .subscribe('wheel_bets', ({ data }) => {
                if (data instanceof Uint8Array) {
                    data = JSON.parse(data.reduce((s, c) => (s += String.fromCharCode(c)), ''));
                }
                if (!Array.isArray(data)) {
                    this.wheelBetsHandler(data);
                }
            })
                .on('disconnect', function () {
                console.log('centrifuge disconnected');
            })
                .on('error', () => {
                console.log('centrifuge error disconnected');
            });
        });
        (0,mobx_esm_js_.reaction)(() => this.root.uiCommon.isOnline, (isOnline) => {
            if (isOnline)
                this.fetchHistory(this.historyListSize);
        });
    }
    get winLevel() {
        let level = 0;
        for (let i = 0; i < this.gameConfig.winLevelList.length; i++) {
            if (this.coefficient >= this.gameConfig.winLevelList[i])
                level = i;
        }
        return level;
    }
    get exp() {
        return Object.entries(this.statistics).reduce((accumulator, currentValue) => accumulator + currentValue[1] * Number(currentValue[0]), 0);
    }
    get coefficient() {
        return wheelCoefficientFromResult(this.gameResult, this.gameConfig.game.map);
    }
    get betsViews() {
        return this.bets.reduce((acc, bet) => {
            acc[bet.coefficient].push(bet);
            return acc;
        }, Object.fromEntries(this.gameConfig.buttons.map((item) => [item.coefficient, []])));
    }
}
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "status", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "result", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "gameResultWithRid", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "gameResultAwaitWithRid", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "gameId", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "awaitTime", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "history", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "myBetsUpdater", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "gameStarted", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "bets", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "currentBets", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "statistics", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "placebetProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "statisticsFetched", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "rebetData", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "rebetProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "animation", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "historyListSize", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "historyList", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "winScreen", void 0);
__decorate([
    mobx_esm_js_.observable
], WheelCommon.prototype, "winScreenTimeout", void 0);
__decorate([
    mobx_esm_js_.computed
], WheelCommon.prototype, "winLevel", null);
__decorate([
    mobx_esm_js_.computed
], WheelCommon.prototype, "exp", null);
__decorate([
    mobx_esm_js_.computed
], WheelCommon.prototype, "coefficient", null);
__decorate([
    mobx_esm_js_.computed
], WheelCommon.prototype, "betsViews", null);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "setHistoryListSize", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "setHistoryList", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "updateHistoryList", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "setAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "updateStatistics", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "wheelBetsHandler", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "wheelGameHandler", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "place", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "placeWithAmount", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "cancel", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "setRebetData", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "rebet", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "retreiveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "fetchCurrentBets", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "fetchHistory", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "addHistoryItem", void 0);
__decorate([
    mobx_esm_js_.action
], WheelCommon.prototype, "updateCurrentBets", void 0);
/* harmony default export */ const store_WheelCommon = (WheelCommon);


/***/ })

}]);