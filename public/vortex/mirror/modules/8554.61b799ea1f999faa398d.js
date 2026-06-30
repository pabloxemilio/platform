"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[8554],{

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

/***/ 58554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_BubblesCommon)
});

// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: consume shared module (default) uuid@^9.0.0 (strict) (fallback: ./node_modules/uuid/dist/esm-browser/index.js)
var index_js_ = __webpack_require__(81682);
// EXTERNAL MODULE: consume shared module (default) centrifuge@^2.7.6 (strict) (fallback: ./node_modules/centrifuge/dist/centrifuge.js)
var centrifuge_js_ = __webpack_require__(68239);
var centrifuge_js_default = /*#__PURE__*/__webpack_require__.n(centrifuge_js_);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/bubbles/config.ts

const config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
;// ./src/framework/api/bubbles/index.ts


const bubbles_api = () => {
    const protocol = config().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config().api}/api`,
    });
};
const placeBetRequest = ({ headers, ...params }) => bubbles_api().post('/bets/place', params, { headers });
const getGameRequest = ({ headers, ...params }) => bubbles_api().post(`/games/create`, params, { headers });
/* harmony default export */ const bubbles = ((/* unused pure expression or super */ null && (bubbles_api)));

// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/formatHeaders.ts
var formatHeaders = __webpack_require__(738);
// EXTERNAL MODULE: ./src/framework/helpers/round.ts
var round = __webpack_require__(77889);
;// ./src/framework/store/BubblesCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class BubblesCommon {
    constructor(root, gameConfig) {
        this.gameId = localStorageHelper/* default */.A.get('gameId');
        this.roundId = localStorageHelper/* default */.A.get('roundId');
        this.roundSeed = '';
        this.clientSeed = (0,index_js_.v4)();
        this.nonce = 1;
        this.amount = `1.00`;
        this.payout = 0;
        this.coefficient = 0;
        this.gameUi = false;
        this.gameRequest = false;
        this.mobileBetslipOpen = false;
        this.historyListSize = 8;
        this.historyList = [];
        this.winScreen = false;
        this.winScreenTimeout = null;
        this.columns = 5;
        this.rows = 5;
        this.opened = [];
        this.keepOpened = true;
        this.winning = undefined;
        this.mousedown = false;
        this.result = undefined;
        this.betLoading = false;
        this.gameStarted = false;
        this.gameTimeout = null;
        this.gameDelay = false;
        this.setKeepOpened = (value) => {
            this.keepOpened = value;
        };
        this.setColumns = (value) => {
            this.columns = value;
            this.clearGame();
        };
        this.setRows = (value) => {
            this.rows = value;
            this.clearGame();
        };
        this.setAmount = (value) => {
            this.amount = String(value);
            localStorageHelper/* default */.A.set(`saved_amount:${this.root.profileCommon.profile.currency}`, String(value));
        };
        this.setOpened = (value) => {
            this.opened = value;
        };
        this.setTouchCallback = (callback) => {
            this.touchCallback = callback;
        };
        this.startGame = async () => {
            if (this.keepOpened) {
                this.gameTimeout && clearTimeout(this.gameTimeout);
                this.winScreenTimeout && clearTimeout(this.winScreenTimeout);
                this.clearGame(this.keepOpened);
            }
            const { profileCommon: { profile: { balance }, }, uiCommon: { showNotEnoughBalanceError, setAlertList }, autobetCommon: { setAutoBetEnabled }, } = this.root;
            if (balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
            }
            else {
                const savedRoundId = localStorageHelper/* default */.A.get('roundId');
                if (this.roundId || savedRoundId) {
                    setAlertList({
                        title: 'Game has already started from another tab',
                        type: 'error',
                    });
                    return;
                }
                try {
                    this.betLoading = true;
                    await this.createGame();
                    await this.play();
                    if (this.root.tournamentsCommon && this.root.tournamentsCommon.addBet) {
                        this.root.tournamentsCommon.addBet({
                            amount: Number(this.amount),
                        });
                    }
                    this.betLoading = false;
                }
                catch (error) {
                    console.log('startGame error:', error);
                    this.gameStarted = false;
                    this.roundId = '';
                    this.betLoading = false;
                    setAutoBetEnabled(false);
                }
                return true;
            }
        };
        this.createGame = async () => {
            const { profileCommon: { profile: { token, playerId }, }, } = this.root;
            try {
                const { data: { roundId }, } = await getGameRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed: this.clientSeed,
                    serverSeed: this.gameServerId,
                    nonce: this.nonce,
                    theme: this.gameServerTheme || 'default',
                    width: Number(this.columns),
                    height: Number(this.rows),
                });
                this.setGame(roundId);
                this.gameStarted = true;
                return true;
            }
            catch (error) {
                this.root.uiCommon.setAlertList({
                    title: error.message,
                    type: 'error',
                });
                console.log('fetchGame error:', error);
                return error;
            }
        };
        this.play = async () => {
            const { root: { profileCommon: { profile: { token, playerId, subPartnerId, currency }, }, uiCommon: { isMobile }, }, } = this;
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
                    amount: Number(this.amount),
                    currency,
                    opened: [...this.opened],
                    roundId: this.roundId,
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                });
                const { data: { result, winning, payout, coefficient }, } = respond;
                (0,mobx_esm_js_.runInAction)(() => {
                    this.winning = winning;
                    this.result = result;
                    this.payout = payout;
                    this.coefficient = coefficient;
                    this.betLoading = false;
                    this.gameStarted = false;
                });
                if (this.keepOpened) {
                    this.gameDelay = true;
                    window.setTimeout(() => {
                        this.gameDelay = false;
                    }, this.gameConfig.game.delay);
                }
                if (result === 'lost') {
                    this.gameTimeout = window.setTimeout(() => {
                        this.clearGame(this.keepOpened);
                    }, this.gameConfig.game.duration);
                }
                if (result === 'won') {
                    window.setTimeout(() => {
                        this.winScreen = true;
                    }, this.gameConfig.winDurationDelay);
                    this.winScreenTimeout = window.setTimeout(() => {
                        this.clearGame(this.keepOpened);
                    }, this.gameConfig.game.duration + this.gameConfig.winDuration + this.gameConfig.winDurationDelay);
                }
                return respond.data;
            }
            catch (error) {
                this.root.uiCommon.errorCodeResolver(error.response);
                console.log('play error:', error);
                throw error;
            }
        };
        this.openBox = (value, callback) => {
            if (!this.mousedown || this.opened.includes(value))
                return;
            this.setOpened([...this.opened, value]);
            callback();
        };
        this.openBoxTouch = (value) => {
            if (this.opened.includes(value))
                return;
            this.setOpened([...this.opened, value]);
            this.touchCallback();
        };
        this.toggleBox = (value, callback) => {
            if (this.opened.includes(value)) {
                const index = this.opened.indexOf(value);
                const opened = [...this.opened].filter((_, i) => i !== index);
                this.setOpened(opened);
                callback('remove');
                return;
            }
            this.setOpened([...this.opened, value]);
            callback('add');
        };
        this.clearGame = (keepOpened = false) => {
            (0,mobx_esm_js_.runInAction)(() => {
                this.winning = undefined;
                this.result = undefined;
                this.setGame();
                if (!keepOpened)
                    this.setOpened([]);
                this.winScreen = false;
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
        this.setGame = (roundId = '') => {
            this.roundId = roundId;
            localStorageHelper/* default */.A.set('roundId', roundId);
        };
        this.root = root;
        (0,mobx_esm_js_.makeObservable)(this);
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.retreiveAmount();
        });
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId;
        this.gameServerTheme = gameConfig.gameServerTheme;
        this.columns = gameConfig.game.columns;
        this.rows = gameConfig.game.rows;
        this.centrifuge = new (centrifuge_js_default())(config().centrifuge || '', {});
        document.addEventListener('mousedown', (e) => {
            this.mousedown = true;
        });
        document.addEventListener('mouseup', (e) => {
            this.mousedown = false;
        });
        document.addEventListener('touchmove', (e) => {
            for (let i = 0; i < e.touches.length; i++) {
                const x = e.touches[i].clientX;
                const y = e.touches[i].clientY;
                const elementAtCoordinates = document.elementFromPoint(x, y);
                const index = elementAtCoordinates?.getAttribute('data-bubbles-game-index');
                if (index === undefined || index === null)
                    return;
                this.openBoxTouch(Number(index));
            }
        });
        this.clearGame();
        (0,mobx_esm_js_.reaction)(() => this.opened, () => {
            const dif = this.squares - this.opened.length;
            if (this.gameConfig.game.nullSquares > dif) {
                const opened = [...this.opened.slice(this.gameConfig.game.nullSquares - dif)];
                this.setOpened(opened);
            }
        });
    }
    get squares() {
        return this.columns * this.rows;
    }
    get squaresCoefficient() {
        if (this.opened.length === 0)
            return 0;
        const factorial = (n) => (n ? n * factorial(n - 1) : 1);
        function combination(a, b) {
            if (a === b)
                return 1;
            return factorial(a) / (factorial(b) * factorial(a - b));
        }
        function getCoefficient(opened, tiles, rtp) {
            const hit = tiles - opened;
            const result = (0,round/* default */.A)(((combination(tiles, hit) / combination(tiles - 1, hit)) * rtp) / 100);
            return result;
        }
        return getCoefficient(this.opened.length, this.squares, this.gameConfig.defaultRtp);
    }
    get lockedUi() {
        const { autoBetEnabled } = this.root.autobetCommon;
        return this.gameStarted || autoBetEnabled || this.gameDelay || (!this.keepOpened && this.roundId !== '');
    }
    get winLevel() {
        let level = 0;
        for (let i = 0; i < this.gameConfig.winLevelList.length; i++) {
            if (this.squaresCoefficient >= this.gameConfig.winLevelList[i])
                level = i;
        }
        return level;
    }
}
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "gameId", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "roundId", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "gameUi", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "gameRequest", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "mobileBetslipOpen", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "historyListSize", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "historyList", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "winScreen", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "winScreenTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "columns", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "rows", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "opened", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "keepOpened", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "winning", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "mousedown", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "result", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "betLoading", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "gameStarted", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "gameTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "gameDelay", void 0);
__decorate([
    mobx_esm_js_.observable
], BubblesCommon.prototype, "touchCallback", void 0);
__decorate([
    mobx_esm_js_.computed
], BubblesCommon.prototype, "squares", null);
__decorate([
    mobx_esm_js_.computed
], BubblesCommon.prototype, "squaresCoefficient", null);
__decorate([
    mobx_esm_js_.computed
], BubblesCommon.prototype, "lockedUi", null);
__decorate([
    mobx_esm_js_.computed
], BubblesCommon.prototype, "winLevel", null);
__decorate([
    mobx_esm_js_.action
], BubblesCommon.prototype, "setKeepOpened", void 0);
__decorate([
    mobx_esm_js_.action
], BubblesCommon.prototype, "setColumns", void 0);
__decorate([
    mobx_esm_js_.action
], BubblesCommon.prototype, "setRows", void 0);
__decorate([
    mobx_esm_js_.action
], BubblesCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], BubblesCommon.prototype, "setOpened", void 0);
__decorate([
    mobx_esm_js_.action
], BubblesCommon.prototype, "setTouchCallback", void 0);
__decorate([
    mobx_esm_js_.action
], BubblesCommon.prototype, "startGame", void 0);
__decorate([
    mobx_esm_js_.action
], BubblesCommon.prototype, "createGame", void 0);
__decorate([
    mobx_esm_js_.action
], BubblesCommon.prototype, "play", void 0);
__decorate([
    mobx_esm_js_.action
], BubblesCommon.prototype, "openBox", void 0);
__decorate([
    mobx_esm_js_.action
], BubblesCommon.prototype, "openBoxTouch", void 0);
__decorate([
    mobx_esm_js_.action
], BubblesCommon.prototype, "toggleBox", void 0);
__decorate([
    mobx_esm_js_.action
], BubblesCommon.prototype, "clearGame", void 0);
__decorate([
    mobx_esm_js_.action
], BubblesCommon.prototype, "retreiveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], BubblesCommon.prototype, "setGame", void 0);
/* harmony default export */ const store_BubblesCommon = (BubblesCommon);


/***/ })

}]);