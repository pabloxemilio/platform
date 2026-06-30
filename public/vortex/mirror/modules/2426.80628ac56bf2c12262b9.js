"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2426],{

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

/***/ 32426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_CatanzaCommon)
});

// EXTERNAL MODULE: consume shared module (default) uuid@^9.0.0 (strict) (fallback: ./node_modules/uuid/dist/esm-browser/index.js)
var index_js_ = __webpack_require__(81682);
// EXTERNAL MODULE: consume shared module (default) centrifuge@^2.7.6 (strict) (fallback: ./node_modules/centrifuge/dist/centrifuge.js)
var centrifuge_js_ = __webpack_require__(68239);
var centrifuge_js_default = /*#__PURE__*/__webpack_require__.n(centrifuge_js_);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: ./src/framework/api/mines/config.ts
var config = __webpack_require__(29533);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/formatHeaders.ts
var formatHeaders = __webpack_require__(738);
// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/catanza/config.ts

const config_config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

;// ./src/framework/api/catanza/index.ts


const catanza_api = () => {
    const protocol = config_config().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config_config().api}/api`,
    });
};
const getGameSettingsRequest = (params) => catanza_api().get('/games/settings', params);
const createBetRequest = ({ headers, ...params }) => catanza_api().post('/games/create', params, { headers });
const placeBetRequest = ({ headers, ...params }) => catanza_api().post('/bets/place', params, { headers });
const retrieveGameRequest = ({ headers, ...params }) => catanza_api().post(`/games/retrieve`, params, { headers });
/* harmony default export */ const catanza = ((/* unused pure expression or super */ null && (catanza_api)));

// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
// EXTERNAL MODULE: consume shared module (default) i18next@^23.2.3 (strict) (fallback: ./node_modules/i18next/dist/esm/i18next.js)
var i18next_js_ = __webpack_require__(49953);
;// ./src/framework/store/CatanzaCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










console.logJSON = (data, title) => {
    const dataSTR = JSON.stringify(data, null, 2);
    console.log(JSON.parse(dataSTR), title);
};
(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class CatanzaCommon {
    constructor(root, gameConfig) {
        this.nonce = 1;
        this.amount = '1.00';
        this.clientSeed = (0,index_js_.v4)();
        this.roundId = null;
        this.lostRounds = 0;
        this.wonRounds = 0;
        this.ticketId = '';
        this.isCanvasLoaded = false;
        this.isPreloadedDone = false;
        this.isAutoStart = false;
        this.isGameCreated = false;
        this.isDisabledBetBtn = false;
        this.isDisabledControls = false;
        this.isActiveWonModal = false;
        this.isActiveBonusModal = false;
        this.isLoadingPlaceBet = false;
        this.isTurboBet = false;
        this.isBetButtonPressed = false;
        this.isRoundError = false;
        this.gameResult = null;
        this.gameWonResult = null;
        this.gameSettings = {};
        this.gameStatus = 'waiting';
        this.modalWindowQueue = [];
        this.step = 0;
        this.setModalWindowQueue = (data) => {
            this.modalWindowQueue = [...this.modalWindowQueue, data];
        };
        this.removeModalWindowQueue = () => {
            this.modalWindowQueue.shift();
            this.modalWindowQueue = [...this.modalWindowQueue];
            const nextModal = this.modalWindowQueue[0];
            return { isShowNextModal: !!nextModal, nextModal };
        };
        this.retrieveIsAutoStart = () => {
            this.isAutoStart = !!JSON.parse(localStorageHelper/* default */.A.get('isAutoStart'));
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
        this.setTicketId = (ticketId) => {
            this.ticketId = ticketId;
        };
        this.setAutoStart = () => {
            localStorageHelper/* default */.A.set('isAutoStart', !this.isAutoStart);
            this.isAutoStart = !this.isAutoStart;
        };
        this.setLostRounds = (isLost) => {
            if (isLost) {
                this.lostRounds = this.lostRounds + 1;
            }
            else {
                this.lostRounds = 0;
            }
        };
        this.setWonRounds = (isWon) => {
            if (isWon) {
                this.wonRounds = this.wonRounds + 1;
            }
            else {
                this.wonRounds = 0;
            }
        };
        this.setAmount = (amount) => {
            const { profile: { currency }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.set(`saved_amount:${currency}`, String(amount));
            this.amount = String(amount);
        };
        this.setDisabledBetBtn = (isDisabled) => {
            this.isDisabledBetBtn = isDisabled;
        };
        this.setCanvasLoaded = (isLoaded) => {
            this.isCanvasLoaded = isLoaded;
        };
        this.setPreloadedDone = (isLoaded) => {
            this.isPreloadedDone = isLoaded;
        };
        this.setDisableControls = (isDisabled) => {
            this.isDisabledControls = isDisabled;
        };
        this.setActiveWonModal = (isActive) => {
            this.isActiveWonModal = isActive;
        };
        this.setActiveBonusModal = (isActive) => {
            this.isActiveBonusModal = isActive;
        };
        this.setGameResult = (result) => {
            this.gameResult = result;
        };
        this.setGameWonResult = (wonResult) => {
            this.gameWonResult = wonResult;
        };
        this.setGameStatus = (gameStatus) => {
            this.gameStatus = gameStatus;
        };
        this.setLoadingPlaceBet = (isLoading) => {
            this.isLoadingPlaceBet = isLoading;
        };
        this.setTurboBet = () => {
            this.isTurboBet = !this.isTurboBet;
        };
        this.setBetButtonPressed = (isPressed) => {
            this.isBetButtonPressed = isPressed;
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
                    this.roundId = data.roundId;
                    this.isGameCreated = true;
                    this.step = data.state.step;
                    this.nonce = data.nonce;
                    this.amount = String(data.amount);
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
            }
            catch (error) {
                throw error;
            }
        };
        this.startGame = async () => {
            const { profileCommon: { profile: { token, playerId }, }, } = this.root;
            const url = window.location.href;
            try {
                const { search } = document.location;
                const urlParams = new URLSearchParams(search);
                const mock = urlParams.get('mock')?.split(',')?.map(Number);
                if (mock && mock.length !== 5) {
                    if (mock.length > 5) {
                        mock.splice(5);
                    }
                    else {
                        mock.splice(mock.length, 0, ...Array(5 - mock.length).fill(1));
                    }
                }
                const { data: { roundId }, } = await createBetRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    theme: this.gameServerTheme,
                    mock,
                });
                this.roundId = roundId;
                this.isGameCreated = true;
                localStorageHelper/* default */.A.set('roundId', String(this.roundId));
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.root.uiCommon.errorCodeResolver(error);
                this.isGameCreated = false;
                return error;
            }
        };
        this.placeBet = async (isTurboBet) => {
            const { profileCommon: { profile: { token, subPartnerId, currency, apiKey }, }, uiCommon: { isMobile }, freebetsCommon: { freebetsSuccessIndexList, listRemoveByIndex, freebetId, updateFreebetsPayout, listAdd }, } = this.root;
            if (!freebetsSuccessIndexList.includes(0) && !Number(this.amount || !this.isGameCreated))
                return;
            try {
                this.setGameStatus('running');
                this.setLoadingPlaceBet(true);
                if (this.isRoundError) {
                    this.isRoundError = false;
                }
                const { data } = await placeBetRequest({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: apiKey,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                    }),
                    roundId: this.roundId,
                    amount: Number(this.amount),
                    ...(freebetsSuccessIndexList.includes(0) && freebetId && { freebetsId: freebetId }),
                    currency,
                });
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_placed',
                    sid: this.root.profileCommon.profile.sid,
                    parameters: {
                        variant: isTurboBet ? 'fast' : 'normal',
                        value: Number(this.amount),
                        currency: this.root.profileCommon.profile.currency,
                        method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                        multiplier: data.totalCoefficient,
                        object: `bet_1.place`,
                        round_id: this.roundId,
                        id: this.roundId,
                    },
                });
                if (freebetsSuccessIndexList.includes(0)) {
                    listAdd({
                        index: 0,
                        freebet: true,
                    });
                    if (data.result === 'won') {
                        updateFreebetsPayout({ index: 0, coefficient: data?.payoutCoefficient });
                    }
                    listRemoveByIndex(0);
                }
                this.isGameCreated = false;
                this.startGame();
                this.setGameResult(data);
                this.setTicketId(data.id);
                this.setLoadingPlaceBet(false);
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.setGameStatus('waiting');
                this.setGameResult(null);
                this.setLoadingPlaceBet(false);
                this.isRoundError = true;
                this.root.uiCommon.errorCodeResolver(error.response);
            }
        };
        this.gtmBetClosed = async ({ isWin, isBonus = false }) => {
            (0,gtmDataLayerPush/* default */.A)({
                action: 'bet_closed',
                parameters: {
                    id: this.roundId,
                    round_id: this.roundId,
                    method: this.root.autobetCommon.autoBetEnabled ? 'auto' : 'manual',
                    object: isWin ? 'cashout' : 'lost',
                    value: Number(this.amount),
                    currency: this.root.profileCommon.profile.currency,
                    wins: isWin ? 1 : 0,
                    multiplier: isWin ? this.gameResult?.payoutCoefficient : undefined,
                    bonus_multiplier: isBonus ? this.gameResult.bonusCoefficient : undefined,
                    state: isBonus ? 'wheel' : undefined,
                },
            });
        };
        this.gtmBonusGame = async () => {
            (0,gtmDataLayerPush/* default */.A)({
                action: 'bonus_game',
                parameters: {
                    id: this.roundId,
                    round_id: this.roundId,
                    state: 'wheel',
                    bonus_multiplier: this.gameResult.bonusCoefficient,
                    value: Number(this.amount),
                    currency: this.root.profileCommon.profile.currency,
                },
            });
        };
        this.updateBalance = () => {
            this.root.balanceCommon.updateBalanceFromTicketId(this.ticketId);
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        console.log('CATANZA COMMOT RUNIING');
        this.centrifuge = new (centrifuge_js_default())((0,config/* config */.$)().centrifuge || '', {
            debug: (0,bootstrap.GET_ENV)().NODE_ENV === 'development',
        });
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.getGameSettings();
            this.startGame();
            this.setDisableControls(true);
            this.retrieveAmount();
            this.retrieveIsAutoStart();
        });
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'holdcrash';
        this.gameServerTheme = gameConfig.gameServerTheme || 'default';
        (0,mobx_esm_js_.reaction)(() => this.isAutoStart, (isAutoStart) => {
            if (isAutoStart && this.gameStatus === 'waiting') {
                this.startGame();
            }
        });
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: this.amount }];
        }, (index, { amount }) => {
            this.setAmount(Number(amount));
        });
    }
}
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "roundId", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "lostRounds", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "wonRounds", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "ticketId", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "isCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "isPreloadedDone", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "isAutoStart", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "isGameCreated", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "isDisabledBetBtn", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "isDisabledControls", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "isActiveWonModal", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "isActiveBonusModal", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "isLoadingPlaceBet", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "isTurboBet", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "isBetButtonPressed", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "isRoundError", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "gameWonResult", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "gameSettings", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "gameStatus", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "modalWindowQueue", void 0);
__decorate([
    mobx_esm_js_.observable
], CatanzaCommon.prototype, "step", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setModalWindowQueue", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "removeModalWindowQueue", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "retrieveIsAutoStart", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "retrieveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setTicketId", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setAutoStart", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setLostRounds", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setWonRounds", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setDisabledBetBtn", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setPreloadedDone", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setDisableControls", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setActiveWonModal", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setActiveBonusModal", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setGameResult", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setGameWonResult", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setGameStatus", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setLoadingPlaceBet", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setTurboBet", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "setBetButtonPressed", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "retrieveGame", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "getGameSettings", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "startGame", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "placeBet", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "gtmBetClosed", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "gtmBonusGame", void 0);
__decorate([
    mobx_esm_js_.action
], CatanzaCommon.prototype, "updateBalance", void 0);
/* harmony default export */ const store_CatanzaCommon = (CatanzaCommon);


/***/ })

}]);