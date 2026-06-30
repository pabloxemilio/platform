"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2531,2835],{

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

/***/ 72531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_CascadeCommon)
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
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/cascade/config.ts

const config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/formatHeaders.ts
var formatHeaders = __webpack_require__(738);
// EXTERNAL MODULE: ./src/framework/helpers/timeout.ts
var timeout = __webpack_require__(9858);
// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
// EXTERNAL MODULE: ./src/utils/apiLogger.ts
var apiLogger = __webpack_require__(38654);
;// ./src/framework/api/cascade/index.ts
/* unused harmony import specifier */ var apiLog;



const cascade_api = () => {
    const protocol = config().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config().api}/api`,
    });
};
const getGameSettingsRequest = (params) => cascade_api().get('/games/settings', params).then(r => { apiLog('getGameSettings', params, r.data); return r; });
const createGameRequest = ({ headers, ...params }) => cascade_api().post('/games/create', params, { headers }).then(r => { (0,apiLogger/* apiLog */.X)('createGame', params, r.data); return r; });
const createBonusBuyRequest = ({ headers, ...params }) => cascade_api().post('/games/bonusbuy/create', params, { headers }).then(r => { (0,apiLogger/* apiLog */.X)('createBonusBuy', params, r.data); return r; });
const placeBetRequest = ({ headers, ...params }) => cascade_api().post('/bets/place', params, { headers }).then(r => { (0,apiLogger/* apiLog */.X)('placeBet', params, r.data); return r; });
const placeBonusBuyRequest = ({ headers, ...params }) => cascade_api().post('/bets/bonusbuy/place', params, { headers }).then(r => { (0,apiLogger/* apiLog */.X)('placeBonusBuy', params, r.data); return r; });
const retrieveGameRequest = ({ headers, ...params }) => cascade_api().post(`/games/retrieve`, params, { headers }).then(r => { (0,apiLogger/* apiLog */.X)('retrieveGame', params, r.data); return r; });
const setRestoreStateRequest = ({ headers, ...params }) => cascade_api().post(`/games/setrestorestate`, params, { headers }).then(r => { (0,apiLogger/* apiLog */.X)('setRestoreState', params, r.data); return r; });
const cashoutRequest = ({ headers, ...params }) => cascade_api().post(`/bets/cashout`, params, { headers }).then(r => { (0,apiLogger/* apiLog */.X)('cashout', params, r.data); return r; });
/* harmony default export */ const cascade = ((/* unused pure expression or super */ null && (cascade_api)));

// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
// EXTERNAL MODULE: ./src/framework/store/CascadeSlotStateMachine.ts + 1 modules
var CascadeSlotStateMachine = __webpack_require__(12835);
;// ./src/framework/store/CascadeCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
const defaultSpin = {
    combosCoefficient: null,
    drops: [
        {
            comboWins: [],
            multipliersAdd: [],
            reelsCut: [
                [22, 99, 99, 99, 66],
                [88, 11, 11, 99, 88],
                [11, 11, 11, 66, 77],
                [99, 88, 88, 22, 33],
                [11, 33, 11, 11, 88],
                [77, 33, 22, 11, 81],
            ],
        },
    ],
    freespinsAdd: null,
    multiplier: null,
    scatterCoefficient: null,
    scatterComboWin: null,
    totalWin: null,
};
class CascadeCommon extends CascadeSlotStateMachine["default"] {
    constructor(root, gameConfig) {
        super();
        this.state = 'loading';
        this.setState = (state) => {
            this.state = state;
        };
        this.roundData = {};
        this.gameLoading = false;
        this.betLoading = false;
        this.bonusGameLoading = false;
        this.cashoutLoading = false;
        this.freespins = [];
        this.restoredStateUpdated = false;
        this.restoredState = {};
        this.nonce = 1;
        this.amount = '1.00';
        this.clientSeed = (0,index_js_.v4)();
        this.roundId = null;
        this.cashable = false;
        this.bonusbuy = false;
        this.isCanvasLoaded = false;
        this.isPreloadedDone = false;
        this.mockParams = null;
        this.mockPersistent = false;
        this.setMockParams = (params) => {
            this.mockParams = params;
        };
        this.setMockPersistent = (persistent) => {
            this.mockPersistent = persistent;
        };
        this.clearMockParams = () => {
            this.mockParams = null;
        };
        this.placeBetMode = 'server';
        this.setPlaceBetMode = (mode) => {
            this.placeBetMode = mode;
        };
        this.gameData = null;
        this.gameSettings = {};
        this.nextRoundData = null;
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
        this.completeRound = () => {
            if (this.cashable) {
                this.cashout();
            }
            if (this.nextRoundData) {
                this.applyNextRoundData();
            }
            else {
                this.startGame();
            }
        };
        this.initNextSpin = () => {
            const state = this.gameData?.state;
            if (this.bonusbuy) {
                if (this.isLastFreespinAndLastDrop) {
                    this.setRestoredState({
                        freespin: state?.freespins?.length,
                        ...this.restoredState,
                    });
                }
                else {
                    this.setRestoredState({
                        freespin: Number.isFinite(this.restoredState.freespin) ? this.restoredState.freespin + 1 : 0,
                        drop: 0,
                    });
                }
            }
            this.saveRestordeState('inittNextSpin');
        };
        this.completeSpin = () => {
            if (this.isLastFreespinAndLastDrop || !this.bonusbuy)
                this.completeRound();
        };
        this.completeDrop = () => {
            console.log('completeDrop');
            const { state } = this.gameData;
            const { drops } = this.currentSpin;
            const sliceFrom = drops.length > 1 ? 1 : 0;
            this.setCurrentSpin({
                ...this.currentSpin,
                drops: drops.slice(sliceFrom),
            });
            if (!this.bonusbuy && state?.spin?.drops?.length === 1) {
                this.setRestoredState();
            }
            else {
                this.setRestoredState({
                    ...this.restoredState,
                    drop: Number.isFinite(this.restoredState.drop) ? this.restoredState.drop + 1 : 0,
                });
            }
            this.saveRestordeState('completeDrop');
        };
        this.processGameData = (data) => {
            const { cashable, state } = data;
            this.setRestoredState();
            this.saveRestordeState('processGameData');
            if (cashable)
                this.setCashable(true);
            if (state.spin) {
                console.log('SPIN DROPS', JSON.parse(JSON.stringify(state.spin.drops)));
                this.setCurrentSpin(state.spin);
            }
            this.setState('spinReady');
        };
        this.processBonusGameData = (data) => {
            const { freespin = 0 } = this.restoredState;
            const currentFreespin = data?.state?.freespins[freespin];
            this.setCurrentSpin(currentFreespin);
            this.setState('spinReady');
        };
        this.restoreGame = (data) => {
            const { restoredState, bonusbuy, bonusbuyBetAmount, cashable, state } = data;
            const freespin = restoredState?.freespin;
            const drop = restoredState?.drop;
            if (cashable)
                this.setCashable(true);
            let currentSpin = defaultSpin;
            if (restoredState) {
                this.setRestoredState(restoredState);
            }
            if (!bonusbuy && state?.spin) {
                const sliceFrom = Number.isFinite(drop) ? Math.min(drop + 1, state.spin.drops.length - 1) : 0;
                currentSpin = {
                    ...state.spin,
                    drops: state.spin.drops.slice(sliceFrom),
                };
            }
            if (bonusbuy) {
                this.setBonusBuy(true);
                if (bonusbuyBetAmount)
                    this.setAmount(Number(bonusbuyBetAmount));
                this.setPlaceBetMode('client');
                if (!freespin) {
                    if (state?.spin?.drops.length) {
                        let sliceFrom = 0;
                        if (drop) {
                            const maxDrop = Math.min(drop, state.spin.drops.length);
                            const lastDrop = maxDrop === state.spin.drops.length;
                            sliceFrom = lastDrop ? maxDrop - 1 : maxDrop;
                        }
                        currentSpin = {
                            ...state.spin,
                            drops: state.spin.drops.slice(sliceFrom),
                        };
                    }
                }
                if (!isNaN(freespin)) {
                    const currentFreespin = state.freespins[freespin];
                    if (currentFreespin.drops.length) {
                        let sliceFrom = 0;
                        if (drop) {
                            const maxDrop = Math.min(drop, currentFreespin.drops.length);
                            const lastDrop = maxDrop === currentFreespin.drops.length;
                            sliceFrom = lastDrop ? maxDrop - 1 : maxDrop;
                        }
                        currentSpin = {
                            ...currentFreespin,
                            drops: currentFreespin.drops.slice(sliceFrom),
                        };
                    }
                }
            }
            this.setCurrentSpin(currentSpin);
            this.setState('gameReady');
        };
        this.retrieveGame = async () => {
            const { clientSeed, nonce, root: { profileCommon: { profile: { token, apiKey }, }, }, } = this;
            try {
                this.setGameLoading(true);
                const { data } = await retrieveGameRequest({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    clientSeed,
                    nonce,
                    theme: this.gameServerTheme,
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    const { next, ...rest } = data;
                    if (next)
                        this.setNextRoundData(next);
                    if (data.roundId) {
                        this.setRoundId(data.roundId);
                        this.setGameData(rest);
                    }
                    else {
                        if (!next) {
                            this.startGame();
                        }
                    }
                    this.restoreGame(rest);
                    this.setGameLoading(false);
                });
            }
            catch (error) {
                this.startGame();
                return error;
            }
        };
        this.startGame = async () => {
            const { profileCommon: { profile: { token, apiKey }, }, } = this.root;
            try {
                this.setGameLoading(true);
                const mockExtra = this.mockParams || {};
                const { data: { roundId }, } = await createGameRequest({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    theme: this.gameServerTheme,
                    ...mockExtra,
                });
                if (!this.mockPersistent)
                    this.clearMockParams();
                this.setRoundId(roundId);
                this.setGameLoading(false);
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.root.uiCommon.errorCodeResolver(error);
                this.setGameLoading(false);
                return error;
            }
        };
        this.startBonusBuyGame = async () => {
            const { profileCommon: { profile: { token, apiKey }, }, } = this.root;
            try {
                this.setBonusGameLoading(true);
                const { data: { roundId }, } = await createBonusBuyRequest({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    clientSeed: this.clientSeed,
                    nonce: this.nonce,
                    theme: this.gameServerTheme,
                });
                this.setRoundId(roundId);
                this.setBonusGameLoading(false);
                this.setBonusBuy(true);
            }
            catch (error) {
                console.log('fetchBonusBuy error:', error);
                this.root.uiCommon.errorCodeResolver(error);
                this.setBonusGameLoading(false);
                return error;
            }
        };
        this.placeBet = async () => {
            if (this.betLoading || this.state === 'betPressed')
                return;
            const { profileCommon: { profile: { token, subPartnerId, currency, apiKey }, }, uiCommon: { isMobile }, freebetsCommon: { freebetsSuccessIndexList, listRemoveByIndex, freebetId, updateFreebetsPayout, listAdd }, } = this.root;
            if (!freebetsSuccessIndexList.includes(0) && !Number(this.amount))
                return;
            try {
                this.setState('betPressed');
                this.setBetLoading(true);
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
                    theme: this.gameServerTheme,
                    roundId: this.roundId,
                    amount: Number(this.amount),
                    ...(freebetsSuccessIndexList.includes(0) && freebetId && { freebetsId: freebetId }),
                    currency,
                });
                this.processGameData(data);
                this.setGameData(data);
                this.setBetLoading(false);
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.setBetLoading(false);
                this.root.uiCommon.errorCodeResolver(error.response);
            }
        };
        this.placeBonusBuy = async () => {
            if (this.betLoading || this.state === 'betPressed')
                return;
            const { profileCommon: { profile: { token, subPartnerId, currency, apiKey }, }, uiCommon: { isMobile }, freebetsCommon: { freebetsSuccessIndexList, listRemoveByIndex, freebetId, updateFreebetsPayout, listAdd }, } = this.root;
            if (!freebetsSuccessIndexList.includes(0) && !Number(this.amount))
                return;
            try {
                this.setState('betPressed');
                this.setBetLoading(true);
                if (this.placeBetMode === 'server') {
                    const { data } = await placeBonusBuyRequest({
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
                        currency,
                    });
                    this.processGameData(data);
                    this.setGameData(data);
                    this.setBonusBuy(true);
                    this.setPlaceBetMode('client');
                }
                else {
                    console.log('PLACEBONUSBUY');
                    await (0,timeout/* timeout */.w)(2);
                    this.processBonusGameData(this.gameData);
                }
                this.setBetLoading(false);
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.setBetLoading(false);
                this.root.uiCommon.errorCodeResolver(error.response);
            }
        };
        this.cashout = async () => {
            const { profileCommon: { profile: { token, apiKey }, }, } = this.root;
            try {
                this.setCashoutLoading(true);
                await cashoutRequest({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    roundId: this.roundId,
                });
                this.setCashoutLoading(false);
                this.setCashable(false);
                this.setBonusBuy(false);
            }
            catch (error) {
                console.log('cashout error:', error);
                this.setCashoutLoading(false);
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
                    multiplier: isWin ? this.gameData?.payoutCoefficient : undefined,
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
                    value: Number(this.amount),
                    currency: this.root.profileCommon.profile.currency,
                },
            });
        };
        this.saveRestordeState = async (msg) => {
            const { profileCommon: { profile: { token, apiKey }, }, } = this.root;
            try {
                if (!this.restoredStateUpdated)
                    return;
                await setRestoreStateRequest({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    ...this.restoredState,
                    theme: this.gameServerTheme,
                });
                this.setRestoredStateUpdated(false);
            }
            catch (error) {
                console.log('setRestoreState error:', error);
                this.root.uiCommon.errorCodeResolver(error.response);
            }
        };
        this.setNonce = (nonce) => {
            this.nonce = nonce;
        };
        this.setClientSeed = (clientSeed) => {
            this.clientSeed = clientSeed;
        };
        this.setRoundId = (roundId) => {
            this.roundId = roundId;
        };
        this.setCashoutLoading = (loading) => {
            this.cashoutLoading = loading;
        };
        this.setFreespins = (freespins) => {
            this.freespins = freespins;
        };
        this.setBetLoading = (loading) => {
            this.betLoading = loading;
        };
        this.setGameLoading = (loading) => {
            this.gameLoading = loading;
        };
        this.setBonusGameLoading = (loading) => {
            this.bonusGameLoading = loading;
        };
        this.setCanvasLoaded = (isLoaded) => {
            this.isCanvasLoaded = isLoaded;
        };
        this.setPreloadedDone = (isLoaded) => {
            this.isPreloadedDone = isLoaded;
        };
        this.setCashable = (cashable) => {
            this.cashable = cashable;
        };
        this.setBonusBuy = (bonusbuy) => {
            this.bonusbuy = bonusbuy;
        };
        this.setRestoredState = (restoredState = {}, ignoreUpdate = false, msg) => {
            if (!ignoreUpdate && JSON.stringify(this.restoredState) !== JSON.stringify(restoredState)) {
                this.setRestoredStateUpdated(true);
            }
            this.restoredState = restoredState;
        };
        this.setRestoredStateUpdated = (updated) => {
            this.restoredStateUpdated = updated;
        };
        this.setCurrentSpin = (spin, msg) => {
            this.currentSpin = spin;
        };
        this.setNextRoundData = (nextRoundData) => {
            this.nextRoundData = nextRoundData;
        };
        this.setGameData = (data) => {
            this.gameData = { ...data, spinsCombined: [data.state.spin, ...data.state.freespins] };
        };
        this.applyNextRoundData = () => {
            const { roundId, clientSeed, nonce, encryptedHash, bonusbuy } = this.nextRoundData;
            this.setBonusBuy(bonusbuy);
            this.setRoundId(roundId);
            this.setClientSeed(clientSeed);
            this.setNonce(nonce);
            this.setGameLoading(false);
            this.setNextRoundData(null);
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.centrifuge = new (centrifuge_js_default())(config().centrifuge || '', {
            debug: (0,bootstrap.GET_ENV)().NODE_ENV === 'development',
        });
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.retrieveGame();
            this.retrieveAmount();
        });
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'cascade';
        this.gameServerTheme = gameConfig.gameServerTheme || 'default';
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: this.amount }];
        }, (index, { amount }) => {
            this.setAmount(Number(amount));
        });
    }
    get currentSpinDrops() {
        return this.currentSpin?.drops || [];
    }
    get isLastFreespinAndLastDrop() {
        const state = this.gameData?.state;
        return (this.bonusbuy &&
            state?.freespins?.length - 1 === this.restoredState?.freespin &&
            this.currentSpin?.drops?.length === 1);
    }
}
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "state", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setState", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "roundData", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "gameLoading", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "betLoading", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "bonusGameLoading", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "cashoutLoading", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "freespins", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "restoredStateUpdated", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "restoredState", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "currentSpin", void 0);
__decorate([
    mobx_esm_js_.computed
], CascadeCommon.prototype, "currentSpinDrops", null);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "roundId", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "cashable", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "bonusbuy", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "isCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "isPreloadedDone", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "mockParams", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "mockPersistent", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setMockParams", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setMockPersistent", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "clearMockParams", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "placeBetMode", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setPlaceBetMode", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "gameData", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "gameSettings", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeCommon.prototype, "nextRoundData", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "retrieveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "completeRound", void 0);
__decorate([
    mobx_esm_js_.computed
], CascadeCommon.prototype, "isLastFreespinAndLastDrop", null);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "initNextSpin", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "completeSpin", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "completeDrop", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "processGameData", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "processBonusGameData", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "restoreGame", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "retrieveGame", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "startGame", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "startBonusBuyGame", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "placeBet", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "placeBonusBuy", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "cashout", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "gtmBetClosed", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "gtmBonusGame", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "saveRestordeState", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setNonce", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setClientSeed", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setRoundId", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setCashoutLoading", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setFreespins", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setBetLoading", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setGameLoading", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setBonusGameLoading", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setPreloadedDone", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setCashable", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setBonusBuy", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setRestoredState", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setRestoredStateUpdated", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setCurrentSpin", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setNextRoundData", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "setGameData", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeCommon.prototype, "applyNextRoundData", void 0);
/* harmony default export */ const store_CascadeCommon = (CascadeCommon);


/***/ }),

/***/ 12835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_CascadeSlotStateMachine)
});

// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
;// ./src/framework/api/cascade/types.ts
var SlotState;
(function (SlotState) {
    SlotState["IDLE"] = "IDLE";
    SlotState["SPIN_REQUESTED"] = "SPIN_REQUESTED";
    SlotState["SPIN_START"] = "SPIN_START";
    SlotState["SPINNING"] = "SPINNING";
    SlotState["REELS_STOPPING"] = "REELS_STOPPING";
    SlotState["RESULT_EVAL"] = "RESULT_EVAL";
    SlotState["WIN_HIGHLIGHT"] = "WIN_HIGHLIGHT";
    SlotState["SYMBOL_REMOVAL"] = "SYMBOL_REMOVAL";
    SlotState["CASCADE_DROP"] = "CASCADE_DROP";
    SlotState["CASCADE_CHECK"] = "CASCADE_CHECK";
    SlotState["CASCADE_LOOP"] = "CASCADE_LOOP";
    SlotState["CASCADE_END"] = "CASCADE_END";
    SlotState["PAYOUT"] = "PAYOUT";
    SlotState["FEATURE_TRIGGER"] = "FEATURE_TRIGGER";
    SlotState["BONUS_INTRO"] = "BONUS_INTRO";
    SlotState["BONUS_GAME"] = "BONUS_GAME";
    SlotState["BONUS_OUTRO"] = "BONUS_OUTRO";
    SlotState["ERROR"] = "ERROR";
    SlotState["RESET"] = "RESET";
})(SlotState || (SlotState = {}));

;// ./src/framework/store/CascadeSlotStateMachine.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class CascadeSlotStateMachine {
    get isErrorState() {
        return this.currentSlotState === SlotState.ERROR;
    }
    get isBonusState() {
        return [SlotState.FEATURE_TRIGGER, SlotState.BONUS_INTRO, SlotState.BONUS_GAME, SlotState.BONUS_OUTRO].includes(this.currentSlotState);
    }
    get isCascadeState() {
        return [
            SlotState.SYMBOL_REMOVAL,
            SlotState.CASCADE_DROP,
            SlotState.CASCADE_CHECK,
            SlotState.CASCADE_LOOP,
            SlotState.CASCADE_END,
        ].includes(this.currentSlotState);
    }
    get isSpinningState() {
        return [SlotState.SPIN_REQUESTED, SlotState.SPIN_START, SlotState.SPINNING, SlotState.REELS_STOPPING].includes(this.currentSlotState);
    }
    get canRequestSpin() {
        return (this.currentSlotState === SlotState.IDLE ||
            this.currentSlotState === SlotState.PAYOUT ||
            this.currentSlotState === SlotState.CASCADE_END ||
            this.currentSlotState === SlotState.BONUS_OUTRO);
    }
    constructor() {
        this.currentSlotState = SlotState.IDLE;
        this.previousSlotState = null;
        this.stateHistory = [];
        this.MAX_HISTORY_SIZE = 100;
        this.transitions = new Map();
        this.transitionGuards = new Map();
        this.transitionActions = new Map();
        this.transitionTo = async (targetState, reason) => {
            const fromState = this.currentSlotState;
            if (!this.canTransitionTo(targetState)) {
                const error = new Error(`Invalid state transition: ${fromState} -> ${targetState}`);
                console.error(error.message, {
                    from: fromState,
                    to: targetState,
                    validTargets: Array.from(this.transitions.get(fromState) || []),
                });
                throw error;
            }
            const actionKey = `${fromState}->${targetState}`;
            const transitionAction = this.transitionActions.get(actionKey);
            try {
                if (transitionAction) {
                    await transitionAction(this, fromState, targetState);
                }
                (0,mobx_esm_js_.runInAction)(() => {
                    this.previousSlotState = fromState;
                    this.currentSlotState = targetState;
                    this.stateHistory.push({
                        state: targetState,
                        timestamp: Date.now(),
                        reason,
                    });
                    if (this.stateHistory.length > this.MAX_HISTORY_SIZE) {
                        this.stateHistory.shift();
                    }
                });
            }
            catch (error) {
                console.error(`Error during state transition ${fromState} -> ${targetState}:`, error);
                (0,mobx_esm_js_.runInAction)(() => {
                    this.previousSlotState = fromState;
                    this.currentSlotState = SlotState.ERROR;
                });
                throw error;
            }
        };
        this.requestSpin = async () => {
            if (!this.canRequestSpin) {
                throw new Error(`Cannot request spin from state: ${this.currentSlotState}`);
            }
            await this.transitionTo(SlotState.SPIN_REQUESTED, 'User requested spin');
        };
        this.reset = async () => {
            await this.transitionTo(SlotState.RESET, 'Manual reset');
            await this.transitionTo(SlotState.IDLE, 'Reset complete');
        };
        this.clearHistory = () => {
            this.stateHistory = [];
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.initializeStateMachine();
    }
    initializeStateMachine() {
        this.addTransition(SlotState.IDLE, SlotState.SPIN_REQUESTED);
        this.addTransition(SlotState.SPIN_REQUESTED, SlotState.SPIN_START);
        this.addTransition(SlotState.SPIN_START, SlotState.SPINNING);
        this.addTransition(SlotState.SPINNING, SlotState.REELS_STOPPING);
        this.addTransition(SlotState.REELS_STOPPING, SlotState.RESULT_EVAL);
        this.addTransition(SlotState.RESULT_EVAL, SlotState.WIN_HIGHLIGHT);
        this.addTransition(SlotState.RESULT_EVAL, SlotState.PAYOUT);
        this.addTransition(SlotState.RESULT_EVAL, SlotState.FEATURE_TRIGGER);
        this.addTransition(SlotState.WIN_HIGHLIGHT, SlotState.SYMBOL_REMOVAL);
        this.addTransition(SlotState.WIN_HIGHLIGHT, SlotState.PAYOUT);
        this.addTransition(SlotState.SYMBOL_REMOVAL, SlotState.CASCADE_DROP);
        this.addTransition(SlotState.CASCADE_DROP, SlotState.CASCADE_CHECK);
        this.addTransition(SlotState.CASCADE_CHECK, SlotState.CASCADE_LOOP);
        this.addTransition(SlotState.CASCADE_CHECK, SlotState.CASCADE_END);
        this.addTransition(SlotState.CASCADE_LOOP, SlotState.WIN_HIGHLIGHT);
        this.addTransition(SlotState.CASCADE_END, SlotState.PAYOUT);
        this.addTransition(SlotState.CASCADE_END, SlotState.IDLE);
        this.addTransition(SlotState.PAYOUT, SlotState.IDLE);
        this.addTransition(SlotState.PAYOUT, SlotState.FEATURE_TRIGGER);
        this.addTransition(SlotState.FEATURE_TRIGGER, SlotState.BONUS_INTRO);
        this.addTransition(SlotState.BONUS_INTRO, SlotState.BONUS_GAME);
        this.addTransition(SlotState.BONUS_GAME, SlotState.BONUS_OUTRO);
        this.addTransition(SlotState.BONUS_OUTRO, SlotState.IDLE);
        this.addTransition(SlotState.BONUS_OUTRO, SlotState.SPIN_REQUESTED);
        Object.values(SlotState).forEach((state) => {
            if (state !== SlotState.ERROR && state !== SlotState.RESET) {
                this.addTransition(state, SlotState.ERROR);
                this.addTransition(state, SlotState.RESET);
            }
        });
        this.addTransition(SlotState.RESET, SlotState.IDLE);
        this.addTransition(SlotState.ERROR, SlotState.RESET);
        this.addTransition(SlotState.ERROR, SlotState.IDLE);
    }
    addTransition(from, to) {
        if (!this.transitions.has(from)) {
            this.transitions.set(from, new Set());
        }
        this.transitions.get(from).add(to);
    }
    registerTransitionGuard(from, to, guard) {
        const key = `${from}->${to}`;
        this.transitionGuards.set(key, guard);
    }
    registerTransitionAction(from, to, action) {
        const key = `${from}->${to}`;
        this.transitionActions.set(key, action);
    }
    canTransitionTo(targetState) {
        const validTargets = this.transitions.get(this.currentSlotState);
        if (!validTargets || !validTargets.has(targetState)) {
            return false;
        }
        const guardKey = `${this.currentSlotState}->${targetState}`;
        const guard = this.transitionGuards.get(guardKey);
        if (guard && !guard(this)) {
            return false;
        }
        return true;
    }
    get recentHistory() {
        return this.stateHistory.slice(-10);
    }
    get validNextStates() {
        const validTargets = this.transitions.get(this.currentSlotState);
        if (!validTargets) {
            return [];
        }
        return Array.from(validTargets).filter((targetState) => {
            const guardKey = `${this.currentSlotState}->${targetState}`;
            const guard = this.transitionGuards.get(guardKey);
            return !guard || guard(this);
        });
    }
}
__decorate([
    mobx_esm_js_.observable
], CascadeSlotStateMachine.prototype, "currentSlotState", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeSlotStateMachine.prototype, "previousSlotState", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeSlotStateMachine.prototype, "stateHistory", void 0);
__decorate([
    mobx_esm_js_.computed
], CascadeSlotStateMachine.prototype, "isErrorState", null);
__decorate([
    mobx_esm_js_.computed
], CascadeSlotStateMachine.prototype, "isBonusState", null);
__decorate([
    mobx_esm_js_.computed
], CascadeSlotStateMachine.prototype, "isCascadeState", null);
__decorate([
    mobx_esm_js_.computed
], CascadeSlotStateMachine.prototype, "isSpinningState", null);
__decorate([
    mobx_esm_js_.computed
], CascadeSlotStateMachine.prototype, "canRequestSpin", null);
__decorate([
    mobx_esm_js_.action
], CascadeSlotStateMachine.prototype, "registerTransitionGuard", null);
__decorate([
    mobx_esm_js_.action
], CascadeSlotStateMachine.prototype, "registerTransitionAction", null);
__decorate([
    mobx_esm_js_.action
], CascadeSlotStateMachine.prototype, "transitionTo", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeSlotStateMachine.prototype, "requestSpin", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeSlotStateMachine.prototype, "reset", void 0);
__decorate([
    mobx_esm_js_.computed
], CascadeSlotStateMachine.prototype, "recentHistory", null);
__decorate([
    mobx_esm_js_.computed
], CascadeSlotStateMachine.prototype, "validNextStates", null);
__decorate([
    mobx_esm_js_.action
], CascadeSlotStateMachine.prototype, "clearHistory", void 0);
/* harmony default export */ const store_CascadeSlotStateMachine = (CascadeSlotStateMachine);


/***/ }),

/***/ 38654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ apiLog)
/* harmony export */ });
const isDev = "production" === 'development';
const TAG_STYLE = 'color: #0f172a; background: #a78bfa; font-weight: bold; padding: 2px 6px; border-radius: 3px 0 0 3px;';
const NAME_STYLE = 'color: #a78bfa; background: #1a1a2e; font-weight: bold; padding: 2px 8px; border-radius: 0 3px 3px 0;';
const LABEL_STYLE = 'color: #a78bfa; font-weight: bold;';
function apiLog(name, params, data) {
    if (!isDev)
        return;
    console.groupCollapsed(`%cAPI%c${name}`, TAG_STYLE, NAME_STYLE);
    console.log('%cparams', LABEL_STYLE, params);
    console.log('%cresponse', LABEL_STYLE, data);
    console.groupEnd();
}


/***/ })

}]);