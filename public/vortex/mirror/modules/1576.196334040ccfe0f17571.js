"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[1576],{

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

/***/ 12032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   Y: () => (/* binding */ randomIntFromInterval)
/* harmony export */ });
function randomIntFromInterval(min, max, excludedNumber) {
    if (!excludedNumber) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (randomNumber === excludedNumber);
    return randomNumber;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomIntFromInterval);


/***/ }),

/***/ 61576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_JewelclickerCommon)
});

// EXTERNAL MODULE: consume shared module (default) uuid@^9.0.0 (strict) (fallback: ./node_modules/uuid/dist/esm-browser/index.js)
var index_js_ = __webpack_require__(81682);
// EXTERNAL MODULE: consume shared module (default) i18next@^23.2.3 (strict) (fallback: ./node_modules/i18next/dist/esm/i18next.js)
var i18next_js_ = __webpack_require__(49953);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) centrifuge@^2.7.6 (strict) (fallback: ./node_modules/centrifuge/dist/centrifuge.js)
var centrifuge_js_ = __webpack_require__(68239);
var centrifuge_js_default = /*#__PURE__*/__webpack_require__.n(centrifuge_js_);
// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: ./src/framework/api/mines/config.ts
var config = __webpack_require__(29533);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/jewelclicker/config.ts

const config_config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

;// ./src/framework/api/jewelclicker/index.ts


const jewelclicker_api = () => {
    const protocol = config_config().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config_config().api}/api`,
    });
};
const placeBetRequest = ({ headers, ...params }) => jewelclicker_api().post('/bets/place', params, { headers });
const createBetRequest = ({ headers, ...params }) => jewelclicker_api().post('/games/create', params, { headers });
const retrieveGameRequest = ({ headers, ...params }) => jewelclicker_api().post(`/games/retrieve`, params, { headers });
/* harmony default export */ const jewelclicker = ((/* unused pure expression or super */ null && (jewelclicker_api)));

// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
// EXTERNAL MODULE: ./src/framework/helpers/randomIntFromInterval.ts
var randomIntFromInterval = __webpack_require__(12032);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
;// ./src/framework/store/JewelclickerCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
var WSEventType;
(function (WSEventType) {
    WSEventType["Countdown"] = "cd";
    WSEventType["RoundEvents"] = "g";
    WSEventType["GameResult"] = "result";
    WSEventType["UsersCountOnline"] = "uc";
})(WSEventType || (WSEventType = {}));
class JewelclickerCommon {
    constructor(root, gameConfig) {
        this.step = 0;
        this.nonce = 1;
        this.amount = '1.00';
        this.currentBetAmount = 0;
        this.gameId = null;
        this.clientSeed = (0,index_js_.v4)();
        this.isGameCreated = false;
        this.isSocketDisabled = false;
        this.isSocketReconected = true;
        this.isCanvasLoaded = false;
        this.usersCountOnline = 0;
        this.countdownSeconds = 0;
        this.gameResult = null;
        this.gameStatus = 'waiting';
        this.isBetPlaced = false;
        this.isAutoStart = false;
        this.howToPlay = {
            btn: false,
            stone: false,
        };
        this.coefficient = 0;
        this.coefficientsHistory = [];
        this.roundPayout = 0;
        this.showResults = false;
        this.gameSettings = {};
        this.winLevelList = [0, 5, 7, 10];
        this.setHowToPlay = (howToPlay = {}) => {
            this.howToPlay = { ...this.howToPlay, ...howToPlay };
        };
        this.retrieveCoefficientHistory = () => {
            this.coefficientsHistory = JSON.parse(localStorageHelper/* default */.A.get(`coefficientsHistory:${this.root.profileCommon.profile.id}`) ?? '[]');
        };
        this.setIsSocketDisabled = (isDisabled) => {
            this.isSocketDisabled = isDisabled;
        };
        this.retrieveIsAutoStart = () => {
            this.isAutoStart = !!JSON.parse(localStorageHelper/* default */.A.get('isAutoStart'));
        };
        this.setAutoStart = (value) => {
            localStorageHelper/* default */.A.set('isAutoStart', value);
            this.isAutoStart = value;
        };
        this.setAmount = (amount) => {
            const { profile: { currency }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.set(`saved_amount:${currency}`, String(amount));
            this.amount = String(amount);
        };
        this.retrieveAmount = () => {
            const { limit: { minBet, defaultBet }, profile: { currency, balance }, } = this.root.profileCommon;
            const amount = localStorageHelper/* default */.A.get(`saved_amount:${currency}`);
            if (amount && !isNaN(Number(amount))) {
                this.amount = amount;
            }
            else if (defaultBet) {
                this.amount = String(Math.min(balance, defaultBet));
            }
            else {
                this.amount = String(minBet * 10);
            }
        };
        this.setCanvasLoaded = (val) => {
            this.isCanvasLoaded = val;
        };
        this.setUsersCountOnline = (users) => {
            this.usersCountOnline = users;
        };
        this.setCountdownSeconds = (seconds) => {
            this.countdownSeconds = seconds;
        };
        this.setGameResult = (result) => {
            this.gameResult = result;
        };
        this.setCoefficientsHistory = (coefficient) => {
            this.coefficientsHistory = [coefficient, ...this.coefficientsHistory];
            localStorageHelper/* default */.A.set(`coefficientsHistory:${this.root.profileCommon.profile.id}`, JSON.stringify(this.coefficientsHistory));
        };
        this.socketConnect = async () => {
            this.ws?.close();
            const { profileCommon: { profile: { token }, }, } = this.root;
            if (this.ws && this.ws.readyState === 1) {
                return;
            }
            const protocol = (0,config/* config */.$)().api.includes('localhost') ? 'ws' : 'wss';
            let host = `${protocol}://${(0,config/* config */.$)().api}/ws/game/`;
            if (token) {
                host = `${host}?token=${token}`;
            }
            const ws = new WebSocket(host);
            this.ws = ws;
            ws.onopen = () => {
                this.socketPingInterval = window.setInterval(() => {
                    this.send(1);
                }, 15000);
                ws.onmessage = () => {
                    ws.onmessage = (m) => this.wsHandler(m);
                    this.setIsSocketDisabled(false);
                    clearInterval(this.socketAwaiterInterval);
                };
            };
            ws.onerror = (err) => {
                console.log('socketError', err);
                clearInterval(this.socketPingInterval);
                this.setSocketAwaiter();
            };
        };
        this.wsHandler = ({ data }) => {
            const parsedData = JSON.parse(data);
            switch (parsedData.t) {
                case WSEventType.Countdown:
                    this.setCountdownSeconds(parsedData.d);
                    break;
                case WSEventType.UsersCountOnline:
                    this.setUsersCountOnline(parsedData.d);
                    break;
                case WSEventType.GameResult:
                    const data = parsedData.d;
                    const isRoundWon = !data.gameResult.fail;
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'bet_closed',
                        parameters: {
                            id: this.gameId,
                            round_id: this.gameId,
                            method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                            object: isRoundWon ? 'cashout' : 'lost',
                            value: this.amount,
                            currency: this.root.profileCommon.profile.currency,
                            wins: isRoundWon ? 1 : 0,
                            multiplier: isRoundWon ? this.coefficient : undefined,
                        },
                    });
                    if (isRoundWon) {
                        this.setCoefficientsHistory(data.gameResult.coefficient);
                    }
                    data.gameResult.coefficient = this.coefficient;
                    this.coefficient = data.bet.payoutCoefficient;
                    this.nonce = this.nonce + 1;
                    this.resetGame();
                    this.setGameResult(data);
                    setTimeout(() => {
                        this.setGameResult(null);
                        if (this.isAutoStart) {
                            this.startGame();
                        }
                    }, 1000);
                    break;
                case WSEventType.RoundEvents:
                    const [status, coef] = parsedData.d;
                    this.gameStatus = 'running';
                    if (status === 1) {
                        localStorageHelper/* default */.A.set('coefficient', String(coef));
                        this.coefficient = coef;
                    }
                    break;
                default:
                    break;
            }
            if (parsedData?.message) {
                this.socketCodeResolver(parsedData.code || parsedData.errorCode, parsedData.data);
            }
        };
        this.setSocketAwaiter = () => {
            if (!this.ws)
                return;
            this.ws.close();
            if (this.root.uiCommon.pageDisabled)
                return;
            if (this.isSocketReconected)
                return;
            const { readyState } = this.ws;
            if (readyState !== 1) {
                this.setIsSocketDisabled(true);
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
        this.createGame = (gameId) => {
            localStorageHelper/* default */.A.set('gameId', String(gameId));
            (0,mobx_esm_js_.runInAction)(() => {
                this.gameStatus = 'running';
                this.gameId = gameId;
                this.isGameCreated = true;
                this.coefficient = 1;
            });
        };
        this.startGame = async () => {
            const { profileCommon: { profile: { token, playerId }, }, } = this.root;
            const url = window.location.href;
            try {
                this.gameStatus = 'loading';
                const { data: { roundId }, } = await createBetRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    theme: this.gameServerTheme,
                    ...((url.includes('dev') || url.includes('stage') || url.includes('localhost')) && {
                        mock: Number(this.mock),
                    }),
                });
                this.createGame(roundId);
                return roundId;
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.gameStatus = 'waiting';
                this.root.uiCommon.errorCodeResolver(error);
                this.isGameCreated = false;
                return error;
            }
        };
        this.retrieveGame = async () => {
            const { clientSeed, nonce, root: { profileCommon: { profile: { token, playerId }, }, uiCommon: { setAlertList }, }, } = this;
            try {
                const { data } = await retrieveGameRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed,
                    nonce,
                    theme: this.gameServerTheme,
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    this.gameStatus = 'running';
                    this.gameId = data.roundId;
                    this.isGameCreated = true;
                    this.isBetPlaced = true;
                    this.step = data.state.step;
                    this.nonce = data.nonce;
                    this.amount = String(data.amount);
                    this.currentBetAmount = data.amount;
                    this.coefficient = data.state.coefficient;
                });
                setAlertList({
                    title: i18next_js_["default"].t('NOTIF.CONTINUE_ROUND'),
                    type: 'success',
                });
            }
            catch (error) {
                return error;
            }
        };
        this.resetGame = () => {
            localStorageHelper/* default */.A.set('gameId', null);
            localStorageHelper/* default */.A.set('coefficient', null);
            (0,mobx_esm_js_.runInAction)(() => {
                this.gameStatus = 'waiting';
                this.gameId = null;
                this.coefficient = 0;
                this.isBetPlaced = false;
                this.isBetPlaced = false;
                this.isGameCreated = false;
                this.currentBetAmount = Number(this.amount);
            });
        };
        this.placeBet = () => {
            const { profileCommon: { profile: { balance }, settings: { options }, }, uiCommon: { setAlertList }, } = this.root;
            if (!Number(this.amount))
                return;
            if (balance !== null && balance <= 0) {
                options?.hideBalanceNotif
                    ? this.root.uiCommon.postMessageToParent('not_enough_balance')
                    : setAlertList({
                        title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.3'),
                        type: 'error',
                    });
                return;
            }
            const { profileCommon: { profile }, } = this.root;
            const { currency } = profile;
            const sendData = {
                type: 'place',
                amount: Number(this.amount),
                currency,
                roundId: this.gameId,
                theme: this.gameServerTheme,
                metadata: {
                    subPartnerId: this.root.profileCommon.profile.subPartnerId,
                },
            };
            this.currentBetAmount = Number(this.amount);
            this.isBetPlaced = true;
            this.send(sendData);
        };
        this.placeStep = () => {
            this.send({
                type: 'step',
                roundId: this.gameId,
            });
        };
        this.placeTap = () => {
            if (this.isSocketDisabled)
                return;
            if (!this.root.profileCommon.userAuthenticated)
                return;
            if (this.gameStatus == 'running') {
                if (this.isBetPlaced) {
                    this.placeStep();
                }
                else {
                    this.placeBet();
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
                }
                this.root.audioCommon.playAudio(`tap${(0,randomIntFromInterval/* default */.A)(1, 5)}`);
            }
        };
        this.cashout = () => {
            this.send({
                type: 'cashout',
                roundId: this.gameId,
            });
        };
        this.mock = '';
        this.setMock = (mock) => {
            this.mock = mock;
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.centrifuge = new (centrifuge_js_default())((0,config/* config */.$)().centrifuge || '', {
            debug: (0,bootstrap.GET_ENV)().NODE_ENV === 'development',
        });
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.retrieveAmount();
            this.retrieveGame();
            this.retrieveIsAutoStart();
            this.retrieveCoefficientHistory();
            setTimeout(() => {
                this.socketConnect();
            }, 100);
        });
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'holdcrash';
        this.winLevelList = gameConfig.winLevelList || [0, 2, 10, 50];
        this.gameServerTheme = gameConfig.gameServerTheme || 'default';
        this.coefficientsHistory = [];
        this.ws = null;
        this.centrifugeHeathCheckTimeout;
        this.socketAwaiterInterval;
        this.socketPingInterval;
        (0,mobx_esm_js_.reaction)(() => this.isAutoStart, (isAutoStart) => {
            if (isAutoStart && this.gameStatus === 'waiting') {
                this.startGame();
            }
        });
        (0,mobx_esm_js_.reaction)(() => this.root.uiCommon?.postMessage, () => {
            if (this.root.uiCommon?.postMessage?.data?.type === 'stopAutoplay') {
                this.setAutoStart(false);
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
    get win() {
        const { limit: { maxWin }, } = this.root.profileCommon;
        const win = (0,truncateDecimals/* default */.A)(this.coefficient * Number(this.currentBetAmount), this.root.profileCommon.profile.rounding);
        return Number(Math.min(maxWin + Number(this.amount), win)).toFixed(2);
    }
    socketCodeResolver(code, data) {
        const { uiCommon: { setAlertList }, } = this.root;
        this.gameStatus = 'waiting';
        this.isBetPlaced = false;
        switch (code) {
            case 400:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('COMMON.ERROR.NO_ACTION'),
                    type: 'error',
                });
                break;
            case 401:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('NOTIF.9'),
                    type: 'error',
                });
                break;
            case 402:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('NOTIF.4'),
                    type: 'error',
                });
                break;
            case 405:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('COMMON.ERROR.NO_ROUND'),
                    type: 'error',
                });
                break;
            case 601:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('NOTIF.5'),
                    type: 'error',
                });
                break;
            case 603:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('NOTIF.6'),
                    type: 'error',
                });
                break;
            case 604:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('NOTIF.7'),
                    type: 'error',
                });
                break;
            case 606:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: data && data.error && typeof data.error === 'string' ? `Error: ${data.error}` : i18next_js_["default"].t('COMMON.ERROR.PLACEBET'),
                    type: 'error',
                });
                break;
            case 607:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('NOTIF.8'),
                    type: 'error',
                });
                break;
            case 609:
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                    text: i18next_js_["default"].t('NOTIF.10'),
                    type: 'error',
                });
                break;
            case 618:
                this.setIsSocketDisabled(true);
                this.isSocketReconected = true;
                setAlertList({
                    title: i18next_js_["default"].t('COMMON.INACTIVE_SOCKET_CONNECT'),
                    type: 'error',
                    sticky: true,
                });
                break;
            default:
                if (code === 9) {
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
}
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "step", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "currentBetAmount", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "gameId", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "isGameCreated", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "isSocketDisabled", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "isSocketReconected", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "isCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "usersCountOnline", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "countdownSeconds", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "gameStatus", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "isBetPlaced", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "isAutoStart", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "howToPlay", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "coefficientsHistory", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "roundPayout", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "showResults", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "gameSettings", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "winLevelList", void 0);
__decorate([
    mobx_esm_js_.computed
], JewelclickerCommon.prototype, "winLevel", null);
__decorate([
    mobx_esm_js_.computed
], JewelclickerCommon.prototype, "win", null);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "setHowToPlay", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "retrieveCoefficientHistory", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "setIsSocketDisabled", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "retrieveIsAutoStart", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "setAutoStart", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "retrieveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "setCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "setUsersCountOnline", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "setCountdownSeconds", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "setGameResult", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "setCoefficientsHistory", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "socketConnect", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "wsHandler", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "setSocketAwaiter", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "startGame", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "retrieveGame", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "resetGame", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "placeBet", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "placeStep", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "placeTap", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "cashout", void 0);
__decorate([
    mobx_esm_js_.observable
], JewelclickerCommon.prototype, "mock", void 0);
__decorate([
    mobx_esm_js_.action
], JewelclickerCommon.prototype, "setMock", void 0);
/* harmony default export */ const store_JewelclickerCommon = (JewelclickerCommon);


/***/ })

}]);