"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2031,2302],{

/***/ 83226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkRank = (rank, ranks) => {
    if (rank === 0)
        return {
            name: ranks[0].name,
            index: 1,
            exp: ranks[0].from,
            toExp: ranks[0].to,
        };
    let n = '';
    let i = 0;
    let exp = 0;
    let toExp = 0;
    ranks.forEach(({ from, to, name }, index) => {
        const nextRank = ranks[index + 1];
        if (nextRank && nextRank.from === to && rank > from && rank <= to) {
            n = name;
            i = index + 1;
            exp = rank - from;
            toExp = to - from;
            return;
        }
        if (rank >= from && rank <= to) {
            n = name;
            i = index + 1;
            exp = rank - from;
            toExp = to - from;
        }
    });
    return { name: n, index: i, exp, toExp };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkRank);


/***/ }),

/***/ 80599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ currencyFix)
/* harmony export */ });
function currencyFix(currency) {
    if (currency === "arsb") {
        return "ars";
    }
    return currency;
}


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

/***/ 37288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77889);

const getPrecisionFromFactor = (factor) => {
    return Math.log10(factor);
};
const ratesConverter = (rates, betCurrency, userCurrency, amount, useBetPrecision = false) => {
    if (betCurrency === userCurrency)
        return (0,_helpers_round__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(amount);
    try {
        const [betRate, betPrecisionFactor] = rates[betCurrency?.toLowerCase()];
        const [userRate, userPrecisionFactor] = rates[userCurrency?.toLowerCase()];
        const convertedAmount = (amount / betRate) * userRate;
        const precisionFactor = useBetPrecision ? betPrecisionFactor : userPrecisionFactor;
        const precision = getPrecisionFromFactor(precisionFactor);
        return (0,_helpers_round__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(convertedAmount, precision);
    }
    catch (error) {
        console.log(error);
        return (0,_helpers_round__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(amount);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ratesConverter);


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

/***/ 42031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_CrashCommon)
});

// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: consume shared module (default) i18next@^23.2.3 (strict) (fallback: ./node_modules/i18next/dist/esm/i18next.js)
var i18next_js_ = __webpack_require__(49953);
// EXTERNAL MODULE: consume shared module (default) recursive-diff@^1.0.9 (strict) (fallback: ./node_modules/recursive-diff/dist/recursive-diff.min.js)
var recursive_diff_min_js_ = __webpack_require__(62652);
var recursive_diff_min_js_default = /*#__PURE__*/__webpack_require__.n(recursive_diff_min_js_);
// EXTERNAL MODULE: consume shared module (default) centrifuge@^2.7.6 (strict) (fallback: ./node_modules/centrifuge/dist/centrifuge.js)
var centrifuge_js_ = __webpack_require__(68239);
var centrifuge_js_default = /*#__PURE__*/__webpack_require__.n(centrifuge_js_);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/crash/config.ts

const config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        wsHost: (0,api/* url */.OZ)().host,
    };
};

// EXTERNAL MODULE: ./src/framework/helpers/currencyFix.ts
var currencyFix = __webpack_require__(80599);
// EXTERNAL MODULE: ./src/framework/helpers/ratesConverter.ts
var ratesConverter = __webpack_require__(37288);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/round.ts
var round = __webpack_require__(77889);
// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
// EXTERNAL MODULE: ./src/framework/helpers/crash/crashCheckRank.ts
var crashCheckRank = __webpack_require__(83226);
// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
// EXTERNAL MODULE: ./src/framework/helpers/range.ts
var range = __webpack_require__(51604);
// EXTERNAL MODULE: consume shared module (default) fflate@~0.8.2 (strict) (fallback: ./node_modules/fflate/esm/browser.js)
var browser_js_ = __webpack_require__(34253);
// EXTERNAL MODULE: ./src/framework/helpers/timeout.ts
var timeout = __webpack_require__(9858);
;// ./src/framework/helpers/hex.ts
function stringToHex(num) {
    return String(num)
        .split('')
        .reduce((hex, char) => hex + char.charCodeAt(0).toString(16), '');
}
function hexToString(hex) {
    return parseFloat(Array.from(hex).reduce((str, _, i) => (i % 2 ? str : (str += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16)))), ''));
}

;// ./src/framework/store/CrashCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class CrashCommon {
    constructor(root, gameConfig) {
        this.betPlacedId = 0;
        this.game = {};
        this.topBets = [];
        this.currentBets = [];
        this.userBets = [];
        this.userCurrentBets = [];
        this.userBetsWhenWebsocetLost = [];
        this.mybets = [];
        this.history = [];
        this.historyCustom = [];
        this.isAppUpdating = false;
        this.pingMs = 0;
        this.bets = [];
        this.result = [];
        this.statistics = {
            avgCoefficient: 0,
            maxCoefficient: 0,
            total_count: 0,
            wons_count: 0,
        };
        this.statisticsFetched = false;
        this.placeBetStatuses = [];
        this.nameInputFocus = false;
        this.payout = [null, null];
        this.payoutCoefficient = [null, null];
        this.socketDisabled = false;
        this.centrifugeDisabled = false;
        this.socketState = 'disconnected';
        this.socketServerState = 'disconnected';
        this.socketConnected = false;
        this.socketMessagesQueue = [];
        this.socketSubscriptions = {
            betsList: null,
            history: null,
        };
        this.setSocketState = (state) => {
            this.socketState = state;
        };
        this.setSocketServerState = (state) => {
            this.socketServerState = state;
        };
        this.historyListSize = 8;
        this.historyList = [];
        this.historyCurrentRound = false;
        this.autoBetAmountError = [];
        this.usersCount = 0;
        this.winUsersCount = 0;
        this.betsAmountSum = 0;
        this.betsCount = 0;
        this.cashoutTotal = 0;
        this.winScreen = {};
        this.userCashoutedBets = 0;
        this.amountsMap = [1, 2, 3, 5, 10, 20, 50, 100];
        this.currentAmountIds = [];
        this.checkConnections = (retry = false) => {
            (0,mobx_esm_js_.runInAction)(() => {
                this.userBetsWhenWebsocetLost = [...this.userBets];
                this.setSocketServerAwaiter(retry);
                this.setSocketAwaiter(retry);
            });
        };
        this.setSocketConnected = (value) => {
            this.socketConnected = value;
        };
        this.setBetStatus = (index, status) => {
            this.placeBetStatuses[index] = status;
        };
        this.setWinScreen = (value) => {
            this.winScreen = value;
        };
        this.setMyBets = (value) => {
            this.mybets = value;
        };
        this.setCurrentAmountId = (value, index) => {
            this.currentAmountIds[index] = value;
        };
        this.updateGameConfig = (config) => {
            this.gameConfig = {
                ...this.gameConfig,
                ...config,
            };
        };
        this.addBet = () => {
            const bet = this.gameConfig.bets[0];
            this.bets.push(bet);
            this.placeBetStatuses.push('initial');
        };
        this.removeBet = (index) => {
            if (this.placeBetStatuses[index] !== 'initial')
                return;
            if (this.root.autobetCommon.autoBetEnabled[index])
                return;
            this.bets.splice(index, 1);
            this.placeBetStatuses.splice(index, 1);
        };
        this.setHistoryListSize = (value) => {
            this.historyListSize = value;
        };
        this.setHistoryCurrentRound = (value) => {
            this.historyCurrentRound = value;
        };
        this.setWinUsersCount = (value) => {
            this.winUsersCount = value;
        };
        this.setBetsAmountSum = (value) => {
            const res = (0,ratesConverter/* default */.A)(this.root.profileCommon?.rates, 'usd', (0,currencyFix/* default */.A)(this.root.profileCommon?.profile?.currency), +value?.toFixed(2) || 0);
            this.betsAmountSum = (0,truncateDecimals/* default */.A)(res, this.root.profileCommon?.profile?.rounding);
        };
        this.setBetsCount = (value) => {
            this.betsCount = value;
        };
        this.setBetsAmount = (value, index) => {
            this.bets[index].amount = value;
        };
        this.setAmountsMap = (minBet, maxBet) => {
            const values = this.gameConfig.amountsMapValues;
            if (!minBet || !values || !maxBet)
                return null;
            const newArr = values.map((item) => (0,floor/* default */.A)(item * minBet));
            newArr.push(maxBet);
            this.amountsMap = newArr;
        };
        this.setCashoutTotal = (value) => {
            this.cashoutTotal = value;
            const convertedValueToCurrency = (0,ratesConverter/* default */.A)(this.root.profileCommon?.rates, 'usd', (0,currencyFix/* default */.A)(this.root.profileCommon?.profile?.currency), +value?.toFixed(2) || 0);
            this.cashoutTotal = (0,truncateDecimals/* default */.A)(convertedValueToCurrency, this.root.profileCommon?.profile?.rounding);
        };
        this.updateHistoryList = () => {
            const getLevel = (coefficient) => {
                let level = 0;
                for (let i = 0; i < this.gameConfig.historyLevelList.length; i++) {
                    if (coefficient >= this.gameConfig.historyLevelList[i])
                        level = i;
                }
                return level;
            };
            this.historyList = this.history
                .slice(0, this.historyListSize)
                .map((item) => {
                return {
                    id: item[0],
                    coefficient: item[1],
                    coefficientShort: (0,shortNumber/* default */.A)(item[1], 2),
                    level: getLevel(Number(item[1])),
                    isWin: typeof item[2] === 'undefined' ? null : item[2],
                    isCurrentRound: Boolean(item[3]),
                };
            })
                .reverse();
        };
        this.setSocketDisabled = (isDisabled) => {
            this.socketDisabled = isDisabled;
        };
        this.setCentrifugeDisabled = (isDisabled) => {
            this.centrifugeDisabled = isDisabled;
        };
        this.setNameInputFocus = (value) => {
            this.nameInputFocus = value;
        };
        this.fetchUserStatistics = async () => {
            const { token } = this.root.profileCommon.profile;
            try {
                const { data } = await (0,api/* getPlayerStatistics */.TX)({
                    headers: {
                        authorization: token,
                    },
                    gameId: this.gameServerId,
                });
                this.statistics = data;
                this.statisticsFetched = true;
            }
            catch (error) {
                console.log('Auth error:', error);
            }
        };
        this.fetchPlayerStatistics = async (playerId) => {
            try {
                const { data } = await (0,api/* getPlayerStatistics */.TX)({
                    headers: {},
                    gameId: this.gameServerId,
                    playerId,
                });
                return data;
            }
            catch (error) {
                console.log('Auth error:', error);
            }
        };
        this.startAutoBet = async (index) => {
            const { autoBetsAmount, setInitialAmount, setAutoBetEnabled, setAutoBetLimit, setAutoBetsInitialAmount } = this.root.autobetCommon;
            setAutoBetLimit(autoBetsAmount[index] > 0, index);
            (0,mobx_esm_js_.runInAction)(() => {
                setInitialAmount(Number(this.bets[index].amount), index);
                setAutoBetEnabled(true, index);
                setAutoBetsInitialAmount(autoBetsAmount[index], index);
            });
        };
        this.stopAutoBet = (index) => {
            if (isNaN(Number(index)) || index === undefined) {
                this.bets.forEach((bet, index) => {
                    this.stopAutoBet(index);
                });
                return;
            }
            const { setAutoBetEnabled, setAutoBetLimit, setAutoBetsInitialAmount } = this.root.autobetCommon;
            if (this.placeBetStatuses[index] === 'placed') {
                const [{ bets }] = this.userBets;
                const bet = bets[index];
                if (bet) {
                    this.cancelBet(index, bet.id);
                }
            }
            (0,mobx_esm_js_.runInAction)(() => {
                setAutoBetEnabled(false, index);
                setAutoBetLimit(false, index);
                setAutoBetsInitialAmount(null, index);
            });
        };
        this.centrifugeWatchDog = () => {
            this.watchDogOK = true;
        };
        this.setPing = () => {
            if (this.pingTime) {
                this.pingMs = +new Date() - this.pingTime;
            }
        };
        this.setBetslipAmount = (value, index) => {
            const { profile: { currency }, } = this.root.profileCommon;
            if (!this.bets[index])
                return;
            this.bets[index].amount = value;
            localStorageHelper/* default */.A.set(`saved_amount:${index}:${currency}`, value);
            this.autoBetAmountError[index] = null;
        };
        this.retreiveAmount = () => {
            const { limit: { minBet, defaultBet }, profile: { currency }, } = this.root.profileCommon;
            this.amounts.map((_, index) => {
                const a = localStorageHelper/* default */.A.get(`saved_amount:${index}:${currency}`);
                if (a && !isNaN(Number(a))) {
                    this.bets[index].amount = a;
                }
                else if (defaultBet) {
                    this.bets[index].amount = String(defaultBet);
                }
                else {
                    this.bets[index].amount = String(minBet * 10);
                }
            });
        };
        this.setBetslipCashoutMin = (value, index) => {
            if (!this.bets[index]?.cashout?.min)
                return;
            this.bets[index].cashout.min = value;
        };
        this.setBetslipCoefficient = (value, index) => {
            if (!this.bets[index]?.coefficient)
                return;
            this.bets[index].coefficient = value;
            localStorageHelper/* default */.A.set(`saved_cashout:${index}`, value);
        };
        this.retreiveCashout = () => {
            this.bets.map(({ coefficient }, index) => {
                const a = localStorageHelper/* default */.A.get(`saved_cashout:${index}`);
                this.bets[index].coefficient = a && !isNaN(Number(a)) ? a : coefficient;
            });
        };
        this.setAutobetCoefficient = (value, index) => {
            if (!this.bets[index]?.autobet?.cashout?.coefficient)
                return;
            this.bets[index].autobet.cashout.coefficient = value;
        };
        this.placeBet = (index = 0, freebet = false) => {
            const { profileCommon: { profile: { balance }, }, uiCommon: { showNotEnoughBalanceError }, autobetCommon: { autoBetEnabled }, } = this.root;
            if (!freebet && balance !== null && balance <= 0) {
                showNotEnoughBalanceError();
                if (autoBetEnabled[index]) {
                    this.stopAutoBet(index);
                }
                return;
            }
            const { profileCommon: { profile, changedNickname }, uiCommon: { isMobile }, } = this.root;
            this.setBetStatus(index, 'loading');
            const { amount, coefficient, cashout, autobet } = this.bets[index];
            const { currency } = profile;
            this.send({
                type: 'placebet',
                l: this.rank.index,
                amount: Number(amount),
                coefficient: (() => {
                    const _coefficient = cashout.connectToAutobet
                        ? Number(coefficient)
                        : autoBetEnabled[index]
                            ? Number(autobet.cashout.coefficient)
                            : Number(coefficient);
                    return _coefficient === 0 ? '1000000' : _coefficient;
                })(),
                currency,
                index,
                nickname: changedNickname ? changedNickname : undefined,
                metadata: {
                    subPartnerId: this.subPartnerId,
                    device: isMobile ? 'mobile' : 'desktop',
                    manual: !autoBetEnabled[index],
                },
                theme: this.gameServerTheme,
                ...(this.gameConfig?.gameTag && { tag: this.gameConfig.gameTag }),
                ...(freebet && this.root.freebetsCommon.freebetId && { freebetsId: this.root.freebetsCommon.freebetId }),
            });
            if (this.root.tournamentsCommon && this.root.tournamentsCommon.addBet) {
                this.root.tournamentsCommon.addBet({
                    amount: Number(amount),
                    coefficient: coefficient,
                });
            }
            this.root.uiCommon.setDelayAlert(index, 'placebet');
        };
        this.cashoutBet = (index = 0) => {
            this.setBetStatus(index, 'cashouting');
            const [userBet] = this.userBets;
            if (!userBet.roundId)
                return;
            const currentBet = userBet.bets[index];
            if (!currentBet)
                return;
            const { amount, id } = currentBet;
            const { coefficient } = this.game;
            const cashoutTimestamp = Date.now();
            this.send({
                type: 'cashout',
                id,
                amount,
                coefficient,
                cashoutTimestamp,
            });
            this.root.uiCommon.setDelayAlert(index, 'cashout');
        };
        this.cancelBet = (index = 0, id) => {
            this.setBetStatus(index, 'cancelling');
            this.send({
                type: 'cancel',
                id,
            });
            this.root.uiCommon.setDelayAlert(index, 'cancel');
        };
        this.send = (message) => {
            const ws = this.ws;
            if (ws && ws.readyState === 1) {
                ws.send(JSON.stringify(message));
            }
            else {
                console.log('connection lost', ws);
                this.setSocketAwaiter();
            }
        };
        this.pushSocketMessagesQueue = (message) => {
            this.socketMessagesQueue = [...this.socketMessagesQueue.filter(({ name }) => name !== message.name), message];
        };
        this.clearSocketMessagesQueue = () => {
            this.socketMessagesQueue = [];
        };
        this.sendOnConnect = (message) => {
            if (this.socketState === 'connected') {
                this.send(message);
            }
            else {
                this.pushSocketMessagesQueue(message);
            }
        };
        this.setTopBets = (value) => {
            this.topBets = value;
        };
        this.betTopHandler = (bets) => {
            if (Array.isArray(bets)) {
                this.setTopBets(bets);
            }
        };
        this.betHandler = (bets, diff) => {
            if (Array.isArray(bets)) {
                this.currentBets = bets;
                return;
            }
            if (diff) {
                try {
                    const newArr = recursive_diff_min_js_default().applyDiff(this.currentBets.map((v) => (v ? v : {})), diff);
                    this.currentBets = newArr.filter(Boolean);
                }
                catch (error) {
                    console.log('betHandler rdiff error', error, diff);
                }
                return;
            }
        };
        this.setGame = (data) => {
            (0,mobx_esm_js_.runInAction)(() => {
                const { status, value, ids = [], ids2, time } = data;
                const statuses = [0, 1, 2, 3, 4, 5, 6, 9];
                if (statuses.includes(status)) {
                    this.game.status = status;
                }
                switch (status) {
                    case 0:
                        this.game.ids = ids;
                        break;
                    case 1:
                    case 2:
                        this.game.time = value;
                        this.autoBetResolver();
                        break;
                    case 3:
                        this.autoBetResolver();
                        break;
                    case 4:
                        this.game.coefficient = value;
                        break;
                    case 5:
                        this.game.hash = String(value);
                        break;
                    case 6:
                        this.setBetsCount(0);
                        this.setWinUsersCount(0);
                        this.setBetsAmountSum(0);
                        this.payoutCoefficient = [];
                        break;
                    default:
                        if (Array.isArray(status) && status[0] === 'connected') {
                            const [_, gameStatus, id1, id2] = status;
                            if (statuses.includes(gameStatus)) {
                                this.game.status = status;
                                this.game.ids = [id1, id2].map((id) => String(id));
                            }
                        }
                        break;
                }
            });
        };
        this.autoBetResolver = () => {
            const { autobetCommon: { autoBetEnabled, setAutoBetsAmount, autoBetsAmount, autoBetLimit }, } = this.root;
            if (!autoBetEnabled.includes(true))
                return;
            autoBetEnabled.forEach((enabled, index) => {
                if (!enabled)
                    return;
                if (this.placeBetStatuses[index] !== 'initial')
                    return;
                this.placeBet(index, false);
                if (autoBetLimit[index] && autoBetsAmount[index] > 0) {
                    setAutoBetsAmount(String(autoBetsAmount[index] - 1), index);
                }
            });
        };
        this.getHistoryById = (id) => {
            this.send({
                type: 'getGameInfo',
                id,
            });
        };
        this.gameHandler = async (data) => {
            this.setGame(data);
            const { status } = data;
            if (status === 0) {
                this.setCashoutTotal(0);
                this.setWinScreen({});
                this.result = this.result.map(() => null);
            }
            if (status === 9) {
                console.log('UPDATING....', data);
                await (0,timeout/* default */.A)(0.1);
                this.checkConnections(true);
                return;
            }
            else {
                this.isAppUpdating = false;
            }
            if (status === 5) {
                this.placeBetStatuses = this.placeBetStatuses.map((status) => (status !== 'placed next' ? 'initial' : 'placed'));
            }
            if (status === 6) {
                const { coefficient = 0, ids = ['', ''] } = this.game;
                const id = ids[0];
                if (this.history.length > this.historyListSize) {
                    this.history.pop();
                }
                let isWin = null;
                for (let result of this.result) {
                    if (isWin === 'won')
                        break;
                    if (isWin === 'lost' && result === null)
                        break;
                    isWin = result;
                }
                if (isWin === 'won')
                    isWin = true;
                if (isWin === 'lost')
                    isWin = false;
                if (Number(coefficient)) {
                    if (this.historyCurrentRound) {
                        this.history[0] = [id, coefficient, isWin, false];
                    }
                    else {
                        this.history.unshift([id, coefficient, isWin, false]);
                    }
                }
                this.updateHistoryList();
                this.placeBetStatuses = this.placeBetStatuses.map((status) => (status === 'placed next' ? 'placed' : status));
                this.userCurrentBets = [this.userBets.slice()[1]];
                this.userBets = [this.userBets.slice()[1], { roundId: '', bets: [null, null] }];
            }
            if (status === 4) {
                if (this.historyCurrentRound && this.history[0] && !this.history[0][3]) {
                    this.history.unshift(['', -1, false, this.historyCurrentRound]);
                    this.updateHistoryList();
                }
            }
            if (status === 3) {
                this.historyCustom.unshift(['?', 0]);
            }
            if (status === 4) {
                if (this.historyCustom[0] && this.historyCustom[0][0] !== '?') {
                    this.historyCustom.unshift(['?', 0]);
                }
            }
            if (status === 5) {
                if (this.historyCustom.length > 40) {
                    this.historyCustom.pop();
                }
                const { coefficient = 0 } = this.game;
                if (this.historyCustom[0]) {
                    this.historyCustom[0][1] = coefficient;
                }
            }
        };
        this.wsHandler = ({ data }) => {
            if (data instanceof ArrayBuffer) {
                const decompressed = browser_js_.decompressSync(new Uint8Array(data));
                data = browser_js_.strFromU8(decompressed);
            }
            const parsedData = JSON.parse(data);
            const { autobetCommon: { autoBetEnabled, autoBetLimit, autoBetsAmount, stopOnAnyWin, setStopOnAnyWin, setAutoBetsCashout, onWinIncrease, onWinIncreaseAmount, initialAmount, onLoseIncrease, onLoseIncreaseAmount, }, audioCommon: { playAudio }, profileCommon: { setLimit, profile: { rounding }, }, } = this.root;
            const { id, type, amount, result, payout, updatedAt, list } = parsedData;
            switch (type) {
                case 'game': {
                    const { type, ...game } = parsedData;
                    this.setGame(game);
                    break;
                }
                case 'result': {
                    const { index, freebets = false, payoutCoefficient = payout === 0 ? 0 : payout / amount } = parsedData;
                    this.root.uiCommon.clearDelayAlert(index, 'cashout');
                    const computedPayout = (() => {
                        if (payout > 0 && freebets && this.root.profileCommon.profile.freebetsType === 'greedy') {
                            return (0,truncateDecimals/* default */.A)(payout - amount, rounding);
                        }
                        return (0,truncateDecimals/* default */.A)(payout, rounding);
                    })();
                    if (result === 'won') {
                        this.root.freebetsCommon.updateFreebetsPayout({ index, coefficient: payoutCoefficient });
                    }
                    this.root.freebetsCommon.listRemoveByIndex(index);
                    if (result === 'won') {
                        this.setUserCashoutedBets(this.userCashoutedBets + 1);
                    }
                    this.setWinScreen({ index, result, amount, payout: computedPayout, coefficient: payoutCoefficient });
                    this.statisticsHandler(result, computedPayout, amount);
                    this.setResult(result, index);
                    this.setPayout(computedPayout, index);
                    payoutCoefficient && this.setPayoutCoefficient(payoutCoefficient, index);
                    this.betPlacedId++;
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'bet_closed',
                        parameters: {
                            id: parsedData.id,
                            round_id: parsedData.roundId,
                            method: payoutCoefficient >= this.game.coefficient ? 'auto' : 'manual',
                            object: result === 'won' ? 'cashout' : 'lost',
                            value: parsedData.amount,
                            currency: this.root.profileCommon.profile.currency,
                            wins: result === 'won' ? 1 : 0,
                            multiplier: payoutCoefficient,
                        },
                    });
                    if (autoBetEnabled[index]) {
                        if (result === 'won') {
                            setAutoBetsCashout(true, index);
                            if (stopOnAnyWin[index]) {
                                this.stopAutoBet(index);
                                setStopOnAnyWin(false, index);
                                this.setBetStatus(index, 'initial');
                            }
                            else {
                                if (onWinIncrease[index] && onWinIncreaseAmount[index] > 0) {
                                    const a = (Number(this.bets[index].amount) / 100) * onWinIncreaseAmount[index];
                                    const sum = Number(this.bets[index].amount) + Number(a);
                                    if (sum > this.root.profileCommon.limit.maxBet || sum > this.root.profileCommon.profile.balance) {
                                        this.stopAutoBet(index);
                                        this.autoBetAmountError[index] = this.root.uiCommon.getAmountError(String(sum));
                                    }
                                    else {
                                        this.setBetslipAmount(String((0,truncateDecimals/* default */.A)(sum, rounding === 2 ? 1 : rounding)), index);
                                    }
                                }
                                if (!onWinIncrease[index]) {
                                    this.setBetslipAmount(String(this.bets[index].amount), index);
                                }
                            }
                        }
                        if (result === 'lost') {
                            if (onLoseIncrease[index] && onLoseIncreaseAmount[index] > 0) {
                                const a = (Number(this.bets[index].amount) / 100) * onLoseIncreaseAmount[index];
                                const sum = Number(this.bets[index].amount) + Number(a);
                                if (sum > this.root.profileCommon.limit.maxBet || sum > this.root.profileCommon.profile.balance) {
                                    this.stopAutoBet(index);
                                    this.autoBetAmountError[index] = this.root.uiCommon.getAmountError(String(sum));
                                }
                                else {
                                    this.setBetslipAmount(String((0,truncateDecimals/* default */.A)(sum, rounding === 2 ? 1 : rounding)), index);
                                }
                            }
                            if (!onLoseIncrease[index]) {
                                this.setBetslipAmount(String(this.bets[index].amount), index);
                            }
                        }
                        if (autoBetLimit[index] && autoBetsAmount[index] <= 0) {
                            this.stopAutoBet(index);
                        }
                    }
                    this.mybets = [
                        {
                            amount,
                            coefficient: payoutCoefficient,
                            gameId: this.gameServerId,
                            gameName: '',
                            id,
                            payout: computedPayout,
                            result,
                            playerName: this.root.profileCommon.profile.name,
                            updatedAt,
                            freebets,
                        },
                        ...this.mybets,
                    ];
                    this.userBets = this.userBets.map((userBet) => ({
                        roundId: userBet.roundId,
                        bets: userBet.bets.map((bet) => (bet && bet.id === id ? null : bet)),
                    }));
                    this.setBetStatus(index, (this.placeBetStatuses[index] = this.placeBetStatuses[index] !== 'placed next' ? 'initial' : status));
                    break;
                }
                case 'myBets': {
                    this.mybets = list;
                    break;
                }
                case 'history': {
                    this.history = list;
                    this.updateHistoryList();
                    this.historyCustom = [...list];
                    break;
                }
                case 'currentBets': {
                    this.userBets = list.map(({ roundId, bets }, i) => {
                        const first = bets.find((bet) => bet?.index === 0) || null;
                        const second = bets.find((bet) => bet?.index === 1) || null;
                        if (first) {
                            this.setBetStatus(0, i ? 'placed next' : 'placed');
                        }
                        if (second) {
                            this.setBetStatus(1, i ? 'placed next' : 'placed');
                        }
                        return {
                            roundId,
                            bets: [first, second],
                        };
                    });
                    this.userCurrentBets = [...this.userBets];
                    this.userBetsWhenWebsocetLost.forEach((userBet) => {
                        if (userBet.roundId === this.userBets[0].roundId)
                            return;
                        const indexList = userBet.bets.map((bet) => bet?.index).filter((index) => typeof index === 'number');
                        for (let index of indexList) {
                            this.setBetStatus(index, 'initial');
                            this.root.freebetsCommon.listRemoveByIndex(index);
                        }
                    });
                    this.userBetsWhenWebsocetLost = [];
                    break;
                }
                case 'placed': {
                    this.root.freebetsCommon.listAdd({
                        index: parsedData.data.index,
                        freebet: Boolean(parsedData.data.freebetsId),
                    });
                    const { index } = parsedData.data;
                    const [currentBets, nextBets] = this.userBets.slice();
                    const { ids = [] } = this.game;
                    const [id, nextId] = ids;
                    this.root.uiCommon.clearDelayAlert(index, 'placebet');
                    if (!id || !nextId) {
                        if (this.game.status && this.game.status >= 2) {
                            this.setBetStatus(index, 'placed next');
                            const { bets } = this.userBets[1];
                            bets[index] = parsedData.data;
                            const newNextBet = {
                                roundId: parsedData.data.roundId,
                                bets,
                            };
                            this.userBets = [currentBets, newNextBet];
                        }
                        else {
                            this.setBetStatus(index, 'placed');
                            const { bets } = this.userBets[0];
                            bets[index] = parsedData.data;
                            const newActualBet = {
                                roundId: parsedData.data.roundId,
                                bets,
                            };
                            this.userBets = [newActualBet, nextBets];
                            this.userCurrentBets = [newActualBet];
                        }
                    }
                    else {
                        if (parsedData.data.roundId === id) {
                            this.setBetStatus(index, 'placed');
                            const { bets } = this.userBets[0];
                            bets[index] = parsedData.data;
                            const newActualBet = {
                                roundId: parsedData.data.roundId,
                                bets,
                            };
                            this.userBets = [newActualBet, nextBets];
                            this.userCurrentBets = [newActualBet];
                        }
                        else if (parsedData.data.roundId === nextId) {
                            this.setBetStatus(index, 'placed next');
                            const { bets } = this.userBets[1];
                            bets[index] = parsedData.data;
                            const newNextBet = {
                                roundId: parsedData.data.roundId,
                                bets,
                            };
                            this.userBets = [currentBets, newNextBet];
                        }
                    }
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'bet_placed',
                        sid: this.root.profileCommon.profile.sid,
                        parameters: {
                            value: parsedData.data.amount,
                            currency: this.root.profileCommon.profile.currency,
                            method: !autoBetEnabled[index] ? 'manual' : 'auto',
                            multiplier: parsedData.data.coefficient,
                            object: `bet_${index + 1}.place`,
                            round_id: parsedData.data.roundId,
                            id: parsedData.data.id,
                        },
                    });
                    break;
                }
                case 'canceled': {
                    this.root.freebetsCommon.listRemoveByIndex(parsedData.data.index);
                    this.root.uiCommon.clearDelayAlert(parsedData.data.index, 'cancel');
                    this.userBets = this.userBets.slice().map((userBet) => ({
                        roundId: userBet.roundId,
                        bets: userBet.bets.map((bet) => {
                            if (bet && bet.id === parsedData.data.id) {
                                this.placeBetStatuses[bet.index] = 'initial';
                                return null;
                            }
                            return bet;
                        }),
                    }));
                    this.userCurrentBets = this.userCurrentBets.map((userBet) => ({
                        roundId: userBet.roundId,
                        bets: userBet.bets.map((bet) => {
                            if (bet && bet.id === parsedData.data.id) {
                                return null;
                            }
                            return bet;
                        }),
                    }));
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'bet_closed',
                        parameters: {
                            id: parsedData.id,
                            round_id: parsedData.roundId,
                            method: 'manual',
                            object: 'cancelled',
                            value: parsedData.amount,
                            currency: this.root.profileCommon.profile.currency,
                        },
                    });
                    break;
                }
                case 'limit': {
                    setLimit(parsedData.data);
                    break;
                }
                case 'gameInfo': {
                    console.log('GAMEINFO', parsedData.data);
                    break;
                }
                case 'betsTop': {
                    this.betTopHandler(parsedData.data);
                    break;
                }
                case 'bets':
                case 'betsList': {
                    this.betHandler(parsedData.data, parsedData.diff);
                    break;
                }
                case 'cashoutTotal': {
                    this.setCashoutTotal(parsedData.data);
                    break;
                }
                case 'cashoutCount': {
                    this.setWinUsersCount(parsedData.data);
                    break;
                }
                case 'betsAmountTotal': {
                    this.setBetsAmountSum(parsedData.data);
                    break;
                }
                case 'betsCount': {
                    this.setBetsCount(parsedData.data);
                    break;
                }
                case 'users_count': {
                    this.setUsersCount(parsedData.data);
                    break;
                }
                case 'reconnect': {
                    setTimeout(() => {
                        this.checkConnections(true);
                    }, 100);
                    break;
                }
                default: {
                    if (data === '1') {
                        this.setPing();
                        break;
                    }
                    const msg = JSON.parse(data);
                    if (msg.code === 618 && msg.errorCode === 4) {
                        this.root.uiCommon.setAlertList({
                            title: i18next_js_["default"].t('COMMON.INACTIVE_SOCKET_CONNECT'),
                            type: 'error',
                            sticky: true,
                        });
                        this.root.uiCommon.setPageDisabled(true);
                        break;
                    }
                    if (msg.errorCode) {
                        this.socketCodeResolver(msg.errorCode, msg.data);
                    }
                    else if (msg.code) {
                        this.socketCodeResolver(msg.code, msg.data);
                    }
                    this.placeBetStatuses = this.placeBetStatuses.map(() => 'initial');
                    break;
                }
            }
        };
        this.setSocketAwaiter = (retry = false) => {
            if (!this.ws) {
                console.log('no ws');
                return;
            }
            if (this.root.uiCommon.pageDisabled) {
                console.log('pageDisabled');
                return;
            }
            const { readyState } = this.ws;
            if (readyState === 1 && this.root.uiCommon.isOnline) {
                console.log('readyState === 1 && this.root.uiCommon.isOnline');
                this.setSocketState('connected');
                this.setSocketDisabled(false);
                return;
            }
            console.log('setSocketAwaiter[bet-server]', { readyState });
            this.socketConnect(retry);
        };
        this.setSocketServerAwaiter = (retry = false) => {
            if (!this.wsServer) {
                console.log('no wsServer');
                return;
            }
            const { readyState } = this.wsServer;
            if (readyState === 1 && this.root.uiCommon.isOnline) {
                console.log('readyState === 1 && this.root.uiCommon.isOnline');
                this.setSocketServerState('connected');
                this.setCentrifugeDisabled(false);
                return;
            }
            this.socketServerConnect(retry);
        };
        this.subscribeToBetsList = (count = 0) => {
            if (this.socketSubscriptions.betsList === count)
                return;
            this.socketSubscriptions.betsList = count;
            if (!count) {
                this.clearBetsList();
            }
            this.sendOnConnect({
                type: 'subscribe',
                name: 'betsList',
                value: count,
            });
        };
        this.clearBetsList = () => {
            this.currentBets = [];
        };
        this.socketConnectInterval = undefined;
        this.socketConnectAwaiter = async () => {
            if (this.socketConnectInterval)
                clearInterval(this.socketConnectInterval);
            this.socketConnectInterval = window.setInterval(() => {
                this.socketConnect(true, true);
            }, 5000);
        };
        this.dropSocketConnectAwaiter = () => {
            if (this.socketConnectInterval)
                clearInterval(this.socketConnectInterval);
            this.socketConnectInterval = undefined;
        };
        this.socketConnect = async (retry = false, force = false) => {
            if (this.socketState === 'connecting' && !force)
                return;
            this.setSocketState('connecting');
            this.socketConnectAwaiter();
            this.ws?.close();
            const { profileCommon: { profile: { apiKey, playerId, token, subPartnerId }, splitTest, rtp, customRtp, }, uiCommon: { isMobile }, } = this.root;
            console.log('bet-server connection');
            if (this.ws && this.ws.readyState === 1) {
                this.dropSocketConnectAwaiter();
                return;
            }
            const protocol = config().api.includes('localhost') ? 'ws' : 'wss';
            let host = `${protocol}://${config().api}/ws/v2/game/`;
            if (customRtp) {
                host = `${protocol}://${config().api}/${stringToHex(rtp)}/ws/v2/game/`;
            }
            const variantPaths = {
                aero_new_calc2: '/variant2',
                crash_faster_round: '/speed2',
            };
            if (splitTest?.variantType === 'test' && splitTest?.variantValue in variantPaths) {
                host = `${protocol}://${config().api}${variantPaths[splitTest.variantValue]}/ws/v2/game/`;
            }
            const isGpk = this.partnerId === 'gpk-asia' && this.gameServerId === 'aero';
            const isTest = splitTest?.variantType === 'test' && splitTest?.variantValue === 'aero_faster_rounds';
            if (isTest && isGpk) {
                host = `${protocol}://${config().api}/3934_v2/ws/v2/game/`;
            }
            if (playerId && token) {
                host = `${host}?playerId=${encodeURIComponent(`${apiKey}:${playerId}`)}&token=${token}`;
                if (subPartnerId) {
                    host = `${host}&subPartnerId=${subPartnerId}`;
                }
            }
            const ws = new WebSocket(host);
            this.ws = ws;
            ws.onopen = () => {
                ws.onmessage = () => {
                    ws.onmessage = (m) => this.wsHandler(m);
                    this.dropSocketConnectAwaiter();
                    this.setSocketState('connected');
                    this.setSocketDisabled(false);
                    console.log('bet-server connected');
                    clearInterval(this.pingInterval);
                    setTimeout(() => this.sendPing(), 1000);
                    this.pingInterval = window.setInterval(() => this.sendPing(), 30000);
                    if (this.gameConfig.gameClient === 'tr106' ||
                        this.gameConfig.gameClient === 'mancala' ||
                        this.gameConfig.gameClient === 'mrbet') {
                        this.send({
                            type: 'history',
                            size: isMobile
                                ? this.gameConfig?.historyCount?.portrait || 15
                                : this.gameConfig?.historyCount?.landscape || 35,
                        });
                    }
                    if (this.socketSubscriptions.betsList === null) {
                        this.subscribeToBetsList(0);
                    }
                    if (this.socketMessagesQueue.length) {
                        this.socketMessagesQueue.forEach((message) => {
                            this.send(message);
                        });
                    }
                };
            };
            ws.onerror = (err) => {
                console.log('socketError', err);
                this.setSocketState('disconnected');
                if (retry) {
                    setTimeout(() => {
                        this.socketConnect(retry);
                    }, 1000);
                }
            };
        };
        this.socketServerConnect = async (retry = false) => {
            if (this.socketServerState === 'connecting')
                return;
            this.setSocketServerState('connecting');
            this.wsServer?.close();
            console.log('game-server connection');
            if (this.wsServer && this.wsServer.readyState === 1) {
                return;
            }
            const protocol = config().api.includes('localhost') ? 'ws' : 'wss';
            let host = `${protocol}://${config().api}/ws/gameserver`;
            if (this.root.profileCommon.customRtp) {
                host = `${protocol}://${config().api}/${stringToHex(this.root.profileCommon.rtp)}/ws/gameserver`;
            }
            const { profileCommon: { splitTest }, } = this.root;
            const variantPaths = {
                aero_new_calc2: '/variant2',
                crash_faster_round: '/speed2',
            };
            if (splitTest?.variantType === 'test' && variantPaths[splitTest?.variantValue]) {
                host = `${protocol}://${config().api}${variantPaths[splitTest.variantValue]}/ws/gameserver`;
            }
            const isGpk = this.partnerId === 'gpk-asia' && this.gameServerId === 'aero';
            const isTest = splitTest?.variantType === 'test' && splitTest?.variantValue === 'aero_faster_rounds';
            if (isTest && isGpk) {
                host = `${protocol}://${config().api}/3934_v2/ws/gameserver`;
            }
            const ws = new WebSocket(host);
            this.wsServer = ws;
            ws.onopen = () => {
                this.setCentrifugeDisabled(false);
                this.setSocketServerState('connected');
                console.log('game-server connected');
            };
            ws.onmessage = (m) => {
                this.centrifugeWatchDog();
                let data;
                if (m.data && m.data.startsWith('{')) {
                    data = JSON.parse(m.data).data;
                }
                else {
                    data = JSON.parse('[' + m.data + ']');
                }
                if (!data)
                    return;
                let [status, value, ids, ids2] = data;
                this.gameHandler({
                    status,
                    value,
                    ids,
                    ids2,
                });
            };
            ws.onerror = (err) => {
                console.log('socketError', err);
                this.setSocketServerState('disconnected');
                if (retry) {
                    setTimeout(() => {
                        this.socketServerConnect(retry);
                    }, 1000);
                }
            };
        };
        this.setResult = (result, index) => {
            this.result[index] = result;
            this.result = [...this.result];
        };
        this.setPayout = (payout, index) => {
            this.payout[index] = payout;
        };
        this.setPayoutCoefficient = (payout, index) => {
            this.payoutCoefficient[index] = payout;
        };
        this.statisticsHandler = (result, payout, amount) => {
            const { avgCoefficient, maxCoefficient, total_count, wons_count } = this.statistics;
            this.statistics.total_count = total_count + 1;
            if (result === 'won' && payout && amount) {
                const coefficient = (0,round/* default */.A)(payout / amount);
                const avg = (wons_count * avgCoefficient + coefficient) / (wons_count + 1);
                this.statistics.wons_count += 1;
                this.statistics.avgCoefficient = avg;
                if (coefficient > maxCoefficient) {
                    this.statistics.maxCoefficient = coefficient;
                }
            }
        };
        this.setUsersCount = (count) => {
            this.usersCount = count;
        };
        this.setUserCashoutedBets = (value) => {
            this.userCashoutedBets = value;
        };
        this.subscribeToHistory = (count = 0) => {
            if (this.socketSubscriptions.history === count)
                return;
            this.socketSubscriptions.history = count;
            this.sendOnConnect({
                type: 'history',
                size: count,
            });
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'crash';
        this.gameServerTheme = gameConfig.gameServerTheme || 'default';
        this.userBets = gameConfig.bets.map(() => {
            return { roundId: '', bets: [null, null] };
        });
        this.userCurrentBets = gameConfig.bets.map(() => {
            return { roundId: '', bets: [null, null] };
        });
        this.bets = gameConfig.bets;
        this.result = gameConfig.bets.map(() => null);
        this.placeBetStatuses = gameConfig.bets.map(() => 'initial');
        this.payout = gameConfig.bets.map(() => null);
        this.payoutCoefficient = gameConfig.bets.map(() => null);
        this.autoBetAmountError = gameConfig.bets.map(() => null);
        this.currentAmountIds = gameConfig.defaultAmountIds || [0, 0];
        const protocol = config().api.includes('localhost') ? 'ws' : 'wss';
        const HOST = `${protocol}://${config().wsHost}/connection/websocket`;
        this.centrifuge = new (centrifuge_js_default())(HOST, {});
        const { search } = document.location;
        const urlParams = new URLSearchParams(search);
        this.demoParam = urlParams.get('demo') === 'true';
        this.partnerId = urlParams.get('cid') || '';
        this.subPartnerId = urlParams.get('sub_partner_id') || '';
        this.savedUpdatedAtNew = '';
        this.savedWinUsersCount = 0;
        this.wsServer = null;
        this.ws = null;
        this.watchDogOK = false;
        const isVip = window.location.hostname.includes('aero4rabetvip');
        if (isVip) {
            this.gameServerTheme = 'aero4rabetvip';
            this.gameServerId = 'aero4rabetvip';
        }
        this.root.profileCommon.auth(this.gameServerId).then(() => {
            this.root.trackingCommon.initGtmDataLayer();
            this.retreiveAmount();
            this.retreiveCashout();
            this.socketServerConnect();
            setTimeout(() => {
                this.socketConnect();
            }, 100);
        });
        (0,mobx_esm_js_.reaction)(() => this.currentAmountIds, () => {
            this.bets.map((item, index) => (item.amount = '' + this.amountsMap[this.currentAmountIds[index]]));
        });
        (0,mobx_esm_js_.reaction)(() => this.root.profileCommon?.limit?.minBet, () => this.setAmountsMap(this.root.profileCommon?.limit?.minBet, this.root.profileCommon?.limit?.maxBet));
        this.pingTime = null;
        this.pingInterval = undefined;
        (0,mobx_esm_js_.reaction)(() => this.root.profileCommon.profile.token, (token) => {
            if (token) {
                this.fetchUserStatistics();
            }
        });
        (0,mobx_esm_js_.reaction)(() => this.historyListSize, () => {
            this.updateHistoryList();
        });
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return this.bets.map(({ amount, coefficient, cashout: { min } }) => {
                return { amount, coefficient, min };
            });
        }, (index, { amount, coefficient, minCoefficient, min }) => {
            this.setBetslipAmount(amount, index);
            this.setBetslipCashoutMin(minCoefficient ? minCoefficient : min, index);
            this.setBetslipCoefficient(coefficient, index);
        });
        (0,mobx_esm_js_.reaction)(() => this.bets.length, () => {
            this.root.freebetsCommon.reconnectToFreebetCommon(() => {
                return this.bets.map(({ amount, coefficient, cashout: { min } }) => {
                    return { amount, coefficient, min };
                });
            }, (index, { amount, coefficient, minCoefficient, min }) => {
                this.setBetslipAmount(amount, index);
                this.setBetslipCashoutMin(minCoefficient ? minCoefficient : min, index);
                this.setBetslipCoefficient(coefficient, index);
            });
        });
        (0,mobx_esm_js_.reaction)(() => this.root.uiCommon.postMessage, (e) => {
            const { name, type } = e.data;
            if (name === 'stopAutospins' || type === 'stopAutoplay')
                this.stopAutoBet();
        });
        const watchDogInterval = setInterval(() => {
            if (this.watchDogOK) {
                this.watchDogOK = false;
                return;
            }
            this.isAppUpdating = true;
            console.log('game-server WatchDog ERROR');
            this.setCentrifugeDisabled(true);
            this.setSocketDisabled(true);
            this.setSocketState('disconnected');
            this.setSocketServerState('disconnected');
            this.checkConnections(false);
        }, 5000);
    }
    get disabledV1() {
        const { freebetsCommon: { freebetsSuccessIndexList }, } = this.root;
        return this.bets.map((_, index) => this.centrifugeDisabled || this.socketDisabled || freebetsSuccessIndexList.includes(index));
    }
    get uiLockedStatuses() {
        const { autobetCommon: { autoBetEnabled }, freebetsCommon: { freebetsSuccessIndexList }, } = this.root;
        if (this.centrifugeDisabled || this.socketDisabled) {
            return this.bets.map(() => true);
        }
        return this.bets.map((_, index) => autoBetEnabled[index] || this.placeBetStatuses[index] !== 'initial' || freebetsSuccessIndexList.includes(index));
    }
    get uiCashoutLockedStatuses() {
        const { autobetCommon: { autoBetEnabled }, } = this.root;
        if (this.centrifugeDisabled || this.socketDisabled) {
            return this.bets.map(() => true);
        }
        return this.bets.map((_, index) => autoBetEnabled[index] || this.placeBetStatuses[index] !== 'initial');
    }
    get buttonsLockedStatuses() {
        const { uiCommon: { getAmountError }, } = this.root;
        if (this.centrifugeDisabled || this.socketDisabled) {
            return this.bets.map(() => true);
        }
        const [actualBetObject, nextBetObject] = this.userBets.slice();
        return this.bets.map((bet, index) => {
            const actualBet = actualBetObject.bets.slice()[index];
            const nextBet = nextBetObject.bets.slice()[index];
            const currentBet = actualBet || nextBet;
            if (currentBet)
                return false;
            if (!!getAmountError(bet.amount))
                return true;
            if (this.placeBetStatuses[index] !== 'initial' && !this.placeBetStatuses[index]?.includes('placed'))
                return true;
            return false;
        });
    }
    get amountErrors() {
        const { uiCommon: { getAmountError }, } = this.root;
        return this.bets.map((bet) => getAmountError(bet.amount));
    }
    get amounts() {
        return this.bets.map(({ amount }) => amount);
    }
    get cashoutErrors() {
        return this.bets.map(({ coefficient, cashout }) => {
            if (Number(coefficient) < (cashout.min || 1.2)) {
                return i18next_js_["default"].t('CRASH.CASHOUT_VALIDATION');
            }
            if (!coefficient) {
                return i18next_js_["default"].t('CRASH.CASHOUT_VALIDATION');
            }
            return null;
        });
    }
    get ping() {
        return (0,round/* default */.A)(this.pingMs);
    }
    get winners() {
        const diff = this.winUsersCount ? this.winUsersCount - this.savedWinUsersCount : 0;
        this.savedWinUsersCount = this.winUsersCount;
        return (0,range/* default */.A)(Math.max(0, diff)).map(() => {
            if (this.userCashoutedBets > 0) {
                this.setUserCashoutedBets(this.userCashoutedBets - 1);
                return {
                    isUser: true,
                    player: true,
                };
            }
            return {
                isUser: false,
                player: true,
            };
        });
    }
    get rank() {
        const { total_count } = this.statistics;
        return (0,crashCheckRank/* default */.A)(total_count, this.gameConfig.ranks);
    }
    socketCodeResolver(code, data) {
        const { uiCommon: { setAlertList }, autobetCommon: { autoBetEnabled, setAutoBetEnabled, setAutoBetLimit }, } = this.root;
        autoBetEnabled.forEach((enabled, index) => {
            if (enabled) {
                setAutoBetEnabled(false, index);
                setAutoBetLimit(false, index);
            }
        });
        switch (code) {
            case 600:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: 'Error: invalid params',
                    type: 'error',
                });
                break;
            case 601:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: 'Error: bet already exist',
                    type: 'error',
                });
                break;
            case 603:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: 'Error: amount insufficient',
                    type: 'error',
                });
                break;
            case 604:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: 'Error: amount exceeded',
                    type: 'error',
                });
                break;
            case 606:
                let message = 'Placebet error';
                if (data && data.error && typeof data.error === 'string') {
                    message = data.error;
                }
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: `Error: ${message}`,
                    type: 'error',
                });
                break;
            case 607:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: 'Settle bet error',
                    type: 'error',
                });
                break;
            case 608:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: 'Error: authentication failed',
                    type: 'error',
                });
                break;
            case 609:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: 'Error: user already connected',
                    type: 'error',
                });
                break;
            default:
                if (this.gameConfig.gameClient === 'mancala' && code === 5) {
                    this.root.uiCommon.setModal({
                        modalName: 'mancalaError.5',
                        render: true,
                        delayOpen: 0,
                        delayClose: 0,
                    });
                    return;
                }
                else if (code === 9) {
                    this.root.uiCommon.setModal({
                        modalName: 'gameIsDisabled',
                        render: true,
                        delayOpen: 0,
                        delayClose: 0,
                        callbackOnSubmit: () => {
                            location.reload();
                        },
                    });
                }
                else {
                    setAlertList({
                        title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                        text: i18next_js_["default"].t(`COMMON.PLACEBET.ERROR.${code}`),
                        type: 'error',
                    });
                }
        }
    }
    sendPing() {
        this.pingTime = +new Date();
        this.send(1);
    }
}
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "betPlacedId", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "game", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "topBets", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "currentBets", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "userBets", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "userCurrentBets", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "mybets", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "history", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "historyCustom", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "isAppUpdating", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "pingMs", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "bets", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "result", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "statistics", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "statisticsFetched", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "placeBetStatuses", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "nameInputFocus", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "payoutCoefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "socketDisabled", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "centrifugeDisabled", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "socketState", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "socketServerState", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "socketConnected", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "socketMessagesQueue", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "socketSubscriptions", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setSocketState", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setSocketServerState", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "historyListSize", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "historyList", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "historyCurrentRound", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "autoBetAmountError", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "usersCount", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "winUsersCount", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "betsAmountSum", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "betsCount", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "cashoutTotal", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "winScreen", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "userCashoutedBets", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "amountsMap", void 0);
__decorate([
    mobx_esm_js_.observable
], CrashCommon.prototype, "currentAmountIds", void 0);
__decorate([
    mobx_esm_js_.computed
], CrashCommon.prototype, "disabledV1", null);
__decorate([
    mobx_esm_js_.computed
], CrashCommon.prototype, "uiLockedStatuses", null);
__decorate([
    mobx_esm_js_.computed
], CrashCommon.prototype, "uiCashoutLockedStatuses", null);
__decorate([
    mobx_esm_js_.computed
], CrashCommon.prototype, "buttonsLockedStatuses", null);
__decorate([
    mobx_esm_js_.computed
], CrashCommon.prototype, "amountErrors", null);
__decorate([
    mobx_esm_js_.computed
], CrashCommon.prototype, "amounts", null);
__decorate([
    mobx_esm_js_.computed
], CrashCommon.prototype, "cashoutErrors", null);
__decorate([
    mobx_esm_js_.computed
], CrashCommon.prototype, "ping", null);
__decorate([
    mobx_esm_js_.computed
], CrashCommon.prototype, "winners", null);
__decorate([
    mobx_esm_js_.computed
], CrashCommon.prototype, "rank", null);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "checkConnections", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setSocketConnected", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setBetStatus", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setWinScreen", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setMyBets", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setCurrentAmountId", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "updateGameConfig", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "addBet", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "removeBet", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setHistoryListSize", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setHistoryCurrentRound", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setWinUsersCount", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setBetsAmountSum", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setBetsCount", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setBetsAmount", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setAmountsMap", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setCashoutTotal", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "updateHistoryList", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setSocketDisabled", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setCentrifugeDisabled", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setNameInputFocus", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "fetchUserStatistics", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "fetchPlayerStatistics", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "startAutoBet", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "stopAutoBet", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "centrifugeWatchDog", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setPing", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setBetslipAmount", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "retreiveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setBetslipCashoutMin", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setBetslipCoefficient", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "retreiveCashout", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setAutobetCoefficient", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "placeBet", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "cashoutBet", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "cancelBet", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "pushSocketMessagesQueue", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "clearSocketMessagesQueue", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "sendOnConnect", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setTopBets", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "betTopHandler", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "betHandler", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setGame", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "autoBetResolver", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "getHistoryById", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "gameHandler", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "wsHandler", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "subscribeToBetsList", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "clearBetsList", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "socketConnectAwaiter", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "dropSocketConnectAwaiter", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "socketConnect", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "socketServerConnect", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setResult", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setPayout", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setPayoutCoefficient", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "statisticsHandler", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setUsersCount", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "setUserCashoutedBets", void 0);
__decorate([
    mobx_esm_js_.action
], CrashCommon.prototype, "subscribeToHistory", void 0);
/* harmony default export */ const store_CrashCommon = (CrashCommon);


/***/ })

}]);