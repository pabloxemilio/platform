"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[9942],{

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

/***/ 68756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function pad(binary, length) {
    while (binary.length < length)
        binary = "0" + binary;
    return binary;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pad);


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

/***/ 79942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_TowersCommon)
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
// EXTERNAL MODULE: ./src/framework/api/towers/config.ts
var config = __webpack_require__(37429);
// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
;// ./src/framework/api/towers/index.ts


const api = () => {
    const protocol = (0,config/* config */.$)().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${(0,config/* config */.$)().api}/api`,
    });
};
const placeBetRequest = ({ headers, ...params }) => api().post('/bets/place', params, { headers });
const cashoutRequest = ({ headers, ...params }) => api().post('/bets/cashout', params, { headers });
const getGameRequest = ({ headers, ...params }) => api().post(`/games/create`, params, { headers });
const retrieveGameRequest = ({ headers, ...params }) => api().post(`/games/retrieve`, params, { headers });
/* harmony default export */ const towers = ((/* unused pure expression or super */ null && (api)));

// EXTERNAL MODULE: ./src/framework/api/index.ts
var framework_api = __webpack_require__(58608);
// EXTERNAL MODULE: ./src/framework/helpers/range.ts
var range = __webpack_require__(51604);
// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/pad.ts
var pad = __webpack_require__(68756);
;// ./src/framework/helpers/towers/towersToShortNumber.ts
const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
function toShortNumber(number) {
    const tier = (Math.log10(Math.abs(number)) / 3) | 0;
    if (tier === 0)
        return number;
    return (number / Math.pow(10, tier * 3)).toFixed(2) + SI_SYMBOL[tier];
}
/* harmony default export */ const towersToShortNumber = (toShortNumber);

// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
;// ./src/framework/store/TowersCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class TowersCommon {
    constructor(root, gameConfig) {
        this.roundId = null;
        this.roundSeed = '';
        this.clientSeed = (0,index_js_.v4)();
        this.nonce = 1;
        this.amount = '1.00';
        this.level = '';
        this.result = 'initial';
        this.gameResult = null;
        this.payout = 0;
        this.coefficient = 0;
        this.nextCoefficient = 0;
        this.towers = [];
        this.gameStarted = false;
        this.myBetsUpdater = 0;
        this.opened = [];
        this.activeTile = 0;
        this.placebetProcessing = false;
        this.tapLoadingIndex = [];
        this.isOpenedTable = false;
        this.limit = {
            currency: '',
            currencyId: 0,
            maxBet: 0,
            maxWin: 0,
            minBet: 0,
        };
        this.levelsListActive = 0;
        this.hitList = [];
        this.mobileBetslipOpen = false;
        this.winLevelList = [0, 5, 7, 10];
        this.updateHitList = (count) => {
            this.hitList = this.coefficientMap.map((coeff, i) => {
                let index = i + 1;
                const size = this.coefficientMap.length;
                const shadow = () => {
                    if (typeof count !== 'number')
                        return false;
                    if (size <= count)
                        return false;
                    if (this.hit <= count / 2 && index <= count)
                        return false;
                    if (this.hit >= size - count / 2 && index > size - count)
                        return false;
                    if (this.hit > index) {
                        return !(this.hit - index < count / 2);
                    }
                    else {
                        return !(index - this.hit < count / 2);
                    }
                };
                let activeIndex = index;
                if (this.gameResult === null || this.gameResult === 'won')
                    activeIndex = index - 1;
                return {
                    value: `x${towersToShortNumber(coeff)}`,
                    active: this.gameStarted && this.hit === activeIndex,
                    payout: String(towersToShortNumber((0,truncateDecimals/* default */.A)(coeff * Number(this.amount), this.root.profileCommon.profile.rounding))),
                    done: this.gameResult === null || this.gameResult === 'won' ? index <= this.hit : index < this.hit,
                    shadow: shadow(),
                    left: this.hit > 0 && index < this.hit,
                    right: this.hit > 0 && index > this.hit,
                };
            });
        };
        this.setMobileBetslipOpen = (value) => {
            this.mobileBetslipOpen = value;
        };
        this.setLevelsListActive = (value) => {
            this.levelsListActive = value;
        };
        this.setActiveTile = (index) => {
            if (this.gameResult)
                return;
            this.activeTile = index;
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
            const { profile: { id }, } = this.root.profileCommon;
            this.roundId = null;
            this.resetGame();
        };
        this.startGame = () => {
            if (this.roundId)
                return;
            if (this.resetTimeout) {
                clearTimeout(this.resetTimeout);
                this.resetGame();
                this.setGame();
            }
            const { profileCommon: { profile: { balance }, }, uiCommon: { showNotEnoughBalanceError }, } = this.root;
            if (balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
            }
            else {
                this.fetchGame();
            }
        };
        this.resetGame = () => {
            (0,mobx_esm_js_.runInAction)(() => {
                this.setResult(null, 0, 0);
                this.setOpened();
                this.gameStarted = false;
                this.nextCoefficient = 0;
                this.towers = [];
                this.isOpenedTable = false;
            });
        };
        this.cashout = async () => {
            if (!this.roundId)
                return;
            const { profileCommon: { profile: { token, playerId }, }, } = this.root;
            try {
                this.placebetProcessing = true;
                const { data: { coefficient, payout, result }, } = await cashoutRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    roundId: this.roundId,
                });
                if (result) {
                    this.setResult(result, payout, coefficient);
                    this.openTable();
                }
                this.placebetProcessing = false;
            }
            catch (error) {
                this.setGame('');
                this.gameStarted = false;
                this.resetGame();
                this.placebetProcessing = false;
                this.root.uiCommon.errorCodeResolver(error);
                console.log('fetchGame error:', error);
                return error;
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
        this.fetchGame = async () => {
            const { clientSeed, nonce, level } = this;
            const { profileCommon: { profile: { token, playerId }, }, } = this.root;
            try {
                this.placebetProcessing = true;
                const { data: { roundId, coefficient }, } = await getGameRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed,
                    nonce,
                    level: this.levels[this.levelsListActive].level,
                    theme: this.gameServerTheme,
                });
                this.nextCoefficient = coefficient;
                this.setGame(roundId);
                this.gameStarted = true;
                this.placebetProcessing = false;
                return roundId;
            }
            catch (error) {
                this.placebetProcessing = false;
                this.root.uiCommon.errorCodeResolver(error);
                console.log('fetchGame error:', error);
                return error;
            }
        };
        this.retrieveGame = async () => {
            const { profileCommon: { profile: { token, playerId }, }, uiCommon: { setAlertList }, } = this.root;
            this.gameStarted = true;
            try {
                const { data: { clientSeed, hash, nonce, opened, amount, level, coefficient, roundId }, } = await retrieveGameRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    theme: this.gameServerTheme,
                });
                if (!clientSeed || !nonce || !opened || !amount || !level) {
                    throw { clientSeed, hash, nonce, opened, amount, level };
                }
                (0,mobx_esm_js_.runInAction)(() => {
                    this.setAmount(amount);
                    this.roundId = roundId;
                    this.clientSeed = clientSeed;
                    this.nonce = nonce;
                    this.nextCoefficient = coefficient;
                    this.setOpened(opened);
                    this.setLevel(level);
                    this.levelsListActive = this.levelsName.indexOf(level);
                });
                setAlertList({
                    title: `${i18next_js_["default"].t('NOTIF.CONTINUE_ROUND')}`,
                    type: 'success',
                });
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.setGame('');
                this.gameStarted = false;
                return error;
            }
        };
        this.setGame = (roundId = '') => {
            const { profileCommon: { profile: { id }, }, } = this.root;
            this.roundId = roundId;
        };
        this.tap = async (tile) => {
            const { roundId } = this;
            const { profileCommon: { profile: { token, playerId, subPartnerId }, }, uiCommon: { isMobile }, } = this.root;
            if (!roundId) {
                throw new Error('no roundId');
            }
            try {
                this.tapLoadingIndex = [tile];
                const respond = await placeBetRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                    },
                    index: tile,
                    roundId,
                    theme: this.gameServerTheme,
                });
                const { data } = respond;
                this.openTile(data);
            }
            catch (error) {
                this.tapLoadingIndex = [];
                this.root.uiCommon.errorCodeResolver(error.response);
                return error;
            }
        };
        this.place = async (tile) => {
            const { roundId } = this;
            const { profileCommon: { profile: { token, playerId, currency, subPartnerId }, }, uiCommon: { isMobile }, } = this.root;
            if (!roundId) {
                throw new Error('no roundId');
            }
            try {
                this.tapLoadingIndex = [tile];
                const respond = await placeBetRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                    },
                    index: tile,
                    roundId,
                    theme: this.gameServerTheme,
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    amount: Number(this.amount),
                    currency,
                });
                const { data } = respond;
                this.openTile(data);
                if (this.root.tournamentsCommon && this.root.tournamentsCommon.addBet) {
                    this.root.tournamentsCommon.addBet({
                        amount: Number(this.amount),
                    });
                }
            }
            catch (error) {
                this.tapLoadingIndex = [];
                this.root.uiCommon.errorCodeResolver(error.response);
                return error;
            }
        };
        this.setAmount = (amount) => {
            const { profile: { currency }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.set(`saved_amount:${currency}`, amount);
            this.amount = String(amount);
        };
        this.setLevel = (level) => {
            this.level = level;
        };
        this.openTable = async () => {
            const { profile: { id }, } = this.root.profileCommon;
            this.setGame();
            this.isOpenedTable = true;
            this.resetTimeout = window.setTimeout(() => {
                this.resetGame();
                this.isOpenedTable = false;
            }, 3000);
        };
        this.setOpened = (opened = []) => {
            this.opened = opened;
        };
        this.openTile = async ({ opened, result, coefficient, towers, payout, }) => {
            this.tapLoadingIndex = [];
            if (result && towers) {
                this.gameResult = result;
                this.towers = towers;
                if (payout) {
                    this.payout = payout;
                }
                if (coefficient) {
                    this.coefficient = coefficient;
                }
                this.openTable();
                this.setOpened(opened);
            }
            else {
                this.setOpened(opened);
                this.nextCoefficient = coefficient;
            }
        };
        this.fetchLimits = async () => {
            const { profileCommon: { profile: { token, playerId }, setLimit, }, } = this.root;
            try {
                const { data } = await (0,framework_api/* getLimit */.cg)({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    params: {},
                });
                setLimit(data);
            }
            catch (error) {
                console.log('Auth error:', error);
            }
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.resetTimeout = null;
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'towers';
        this.gameServerTheme = gameConfig.gameServerTheme || 'towers';
        this.level = gameConfig.defaultLevel || 'easy';
        this.levels = gameConfig.levels;
        this.levelsName = gameConfig.levels.map(({ level }) => level);
        this.winLevelList = gameConfig.winLevelList || [0, 5, 7, 10];
        this.centrifuge = new (centrifuge_js_default())((0,config/* config */.$)().centrifuge || '', {});
        this.root.profileCommon.auth(this.gameServerId).then(async () => {
            const { profile: { id }, } = this.root.profileCommon;
            this.root.trackingCommon.initGtmDataLayer();
            this.retreiveAmount();
            this.retrieveGame();
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
    get currentCoefficient() {
        return this.levels[this.levelsListActive].coefficients[this.hit];
    }
    get coefficientMap() {
        const { rows } = this.levels[this.levelsListActive];
        const rowsArray = Array.from({ length: rows }, (x, i) => i + 1);
        return rowsArray.map((row, index) => this.levels[this.levelsListActive].coefficients[index + 1]);
    }
    get possibleWinNext() {
        const max = this.root.profileCommon.limit.maxWin;
        const rounding = this.root.profileCommon.profile.rounding;
        const next = (0,truncateDecimals/* default */.A)((0,floor/* default */.A)(this.coefficientMap[this.levelsListActive] * Number(this.amount)), rounding);
        return Math.min(max + Number(this.amount), next);
    }
    get payoutMap() {
        const rounding = this.root.profileCommon.profile.rounding;
        return this.coefficientMap.map((coefficient) => (0,truncateDecimals/* default */.A)((0,floor/* default */.A)(coefficient * Number(this.amount)), rounding));
    }
    get towersMap() {
        if (!this.towers.length) {
            return [];
        }
        const { rows, columns } = this.levels[this.levelsListActive];
        return this.towers.map((tower) => (0,pad/* default */.A)(tower.toString(2), columns).split(''));
    }
    get lockedUi() {
        const { autoBetEnabled } = this.root.autobetCommon;
        return autoBetEnabled || this.gameStarted;
    }
    get levelsList() {
        return this.levels.map(({ level, translateKey }, index) => {
            return {
                title: level,
                description: i18next_js_["default"].t(translateKey),
                descriptionKey: translateKey,
                active: index === this.levelsListActive,
            };
        });
    }
    get hit() {
        return this.opened.length;
    }
    get tiles() {
        const { rows, columns } = this.levels[this.levelsListActive];
        if (!this.hit) {
            return (0,range/* default */.A)(rows).map(() => (0,range/* default */.A)(columns).map(() => null));
        }
        const opened = (0,mobx_esm_js_.toJS)(this.opened);
        if (this.towers.length) {
            return (0,range/* default */.A)(rows)
                .slice()
                .map((rowIndex) => (0,pad/* default */.A)(this.towers[rowIndex].toString(2), columns)
                .split('')
                .map((tile, columnIndex) => tile === '1' ? (rowIndex === this.hit - 1 && columnIndex === opened[opened.length - 1] ? '0' : null) : '1'));
        }
        return (0,range/* default */.A)(rows)
            .slice()
            .map((rowIndex) => (0,range/* default */.A)(columns).map((columnIndex) => (opened[rowIndex] === columnIndex ? '1' : null)));
    }
}
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "roundId", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "level", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "result", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "nextCoefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "towers", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "gameStarted", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "myBetsUpdater", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "opened", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "activeTile", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "placebetProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "tapLoadingIndex", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "isOpenedTable", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "limit", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "levelsListActive", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "hitList", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "mobileBetslipOpen", void 0);
__decorate([
    mobx_esm_js_.observable
], TowersCommon.prototype, "winLevelList", void 0);
__decorate([
    mobx_esm_js_.computed
], TowersCommon.prototype, "winLevel", null);
__decorate([
    mobx_esm_js_.computed
], TowersCommon.prototype, "currentCoefficient", null);
__decorate([
    mobx_esm_js_.computed
], TowersCommon.prototype, "coefficientMap", null);
__decorate([
    mobx_esm_js_.computed
], TowersCommon.prototype, "possibleWinNext", null);
__decorate([
    mobx_esm_js_.computed
], TowersCommon.prototype, "payoutMap", null);
__decorate([
    mobx_esm_js_.computed
], TowersCommon.prototype, "towersMap", null);
__decorate([
    mobx_esm_js_.computed
], TowersCommon.prototype, "lockedUi", null);
__decorate([
    mobx_esm_js_.computed
], TowersCommon.prototype, "levelsList", null);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "updateHitList", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "setMobileBetslipOpen", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "setLevelsListActive", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "setActiveTile", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "retreiveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "cancelGame", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "startGame", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "resetGame", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "cashout", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "setResult", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "fetchGame", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "retrieveGame", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "setGame", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "tap", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "place", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "setLevel", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "openTable", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "setOpened", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "openTile", void 0);
__decorate([
    mobx_esm_js_.action
], TowersCommon.prototype, "fetchLimits", void 0);
__decorate([
    mobx_esm_js_.computed
], TowersCommon.prototype, "hit", null);
__decorate([
    mobx_esm_js_.computed
], TowersCommon.prototype, "tiles", null);
/* harmony default export */ const store_TowersCommon = (TowersCommon);


/***/ })

}]);