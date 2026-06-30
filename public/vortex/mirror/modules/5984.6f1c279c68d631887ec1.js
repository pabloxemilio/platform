"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[925,5984],{

/***/ 81784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W4: () => (/* binding */ cashoutBonusBuyRequest),
  dn: () => (/* binding */ cashoutRequest),
  JT: () => (/* binding */ createBonusGameRequest),
  Yv: () => (/* binding */ createGameRequest),
  v0: () => (/* binding */ gameInterruptRequest),
  ZT: () => (/* binding */ getCommonStorage),
  p_: () => (/* binding */ getGameSettingsRequest),
  CW: () => (/* binding */ placeBetRequest),
  OV: () => (/* binding */ placeBonusBuyRequest),
  cJ: () => (/* binding */ retrieveGameRequest),
  Ly: () => (/* binding */ setCommonStorage),
  e9: () => (/* binding */ updateCommonStorage)
});

// UNUSED EXPORTS: api, default

// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var index_js_ = __webpack_require__(75364);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/vortexaero/config.ts

const config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

;// ./src/framework/api/vortexaero/index.ts


const vortexaero_api = (version = '') => {
    const protocol = config().api.includes('localhost') ? 'http' : 'https';
    const prefix = version ? `${version}/api` : 'api';
    return index_js_["default"].create({
        baseURL: `${protocol}://${config().api}/${prefix}`,
    });
};
const getGameSettingsRequest = (params) => vortexaero_api().get(`/games/settings${params.rtp ? `?rtp=${params.rtp}` : ''}`, params);
const retrieveGameRequest = ({ headers, ...params }) => vortexaero_api().post(`/games/retrieve`, params, { headers });
const createGameRequest = ({ headers, version = '', ...params }) => vortexaero_api(version).post('/games/create', params, { headers });
const placeBetRequest = ({ headers, ...params }) => vortexaero_api().post('/bets/place', params, { headers });
const cashoutRequest = ({ headers, ...params }) => vortexaero_api().post('/bets/cashout', params, { headers });
const createBonusGameRequest = ({ headers, ...params }) => vortexaero_api().post('/games/bonusbuy/create', params, { headers });
const placeBonusBuyRequest = ({ headers, ...params }) => vortexaero_api().post('/bets/bonusbuy/place', params, { headers });
const cashoutBonusBuyRequest = ({ headers, ...params }) => vortexaero_api().post('/bets/bonusbuy/cashout', params, { headers });
const getCommonStorage = ({ headers }) => vortexaero_api().get('/common/storage', { headers });
const setCommonStorage = ({ headers, ...params }) => vortexaero_api().post('/common/storage', { ...params, ttl: params.ttl || 259200 }, { headers });
const updateCommonStorage = ({ headers, ...params }) => vortexaero_api().put('/common/storage', { ...params, ttl: params.ttl || 259200 }, { headers });
const gameInterruptRequest = ({ headers, version = '', ...params }) => vortexaero_api(version).post('/games/freebets/interrupt', params, { headers });
/* harmony default export */ const vortexaero = ((/* unused pure expression or super */ null && (vortexaero_api)));


/***/ }),

/***/ 80286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* reexport */ vortexAeroCanvasController)
});

;// ./src/canvas/controller/types/vortexaero/Controller.ts
class CanvasController {
    constructor() {
        this.callbacks = {};
        this.events = {};
    }
    register(id, callback) {
        this.callbacks[id] = callback;
    }
    unregister(id) {
        delete this.callbacks[id];
    }
    invoke(id, ...args) {
        const callback = this.callbacks[id];
        if (callback) {
            callback(...args);
        }
        else {
            console.warn(`Callback with id "${String(id)}" not found.`);
        }
    }
    listCallbacks() {
        return Object.keys(this.callbacks);
    }
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    off(event, callback) {
        if (!this.events[event])
            return;
        this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
    trigger(event, data) {
        this.events[event]?.forEach(callback => callback(data));
    }
    listEvents() {
        return Object.keys(this.events);
    }
}

;// ./src/framework/components.vortexaero/VortexAeroCanvasController/VortexAeroCanvasController.ts

class Controller extends CanvasController {
}
;
const vortexAeroCanvasController = new Controller();

;// ./src/framework/components.vortexaero/VortexAeroCanvasController/index.ts



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

/***/ 25984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BonusGameStore: () => (/* binding */ BonusGameStore)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49953);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8570);
/* harmony import */ var src_framework_helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74065);
/* harmony import */ var _helpers_formatHeaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(738);
/* harmony import */ var src_framework_components_vortexaero_VortexAeroCanvasController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80286);
/* harmony import */ var src_framework_api_vortexaero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81784);
/* harmony import */ var _auction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60925);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const AUCTION_COLORS = {
    10: 'cyan',
    20: 'blue',
    30: 'green',
    50: 'yellow',
    100: 'pink',
    777: 'red',
};
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getRandomFromArray = (items) => {
    return items[Math.floor(Math.random() * items.length)];
};
const BASE_BONUS_BETS = 200;
class BonusGameStore {
    constructor(parent) {
        this.bonusGameRoundId = null;
        this.bonusRetrieveData = null;
        this.isActiveBonusGame = false;
        this.isOpneBonusBuyPopup = false;
        this.bonusGameState = null;
        this.buyBonusGameState = null;
        this.buyBonusGameCashout = null;
        this.auctionTableQueue = null;
        this.activeAuctionTableIndex = null;
        this.isOpneAuctionPopup = false;
        this.isClearBonusGame = false;
        this.setActiveBonusGame = (value) => {
            this.isActiveBonusGame = value;
        };
        this.setBonusGameState = (state) => {
            this.bonusGameState = state;
            src_framework_helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.set('bestPreviousWins', JSON.stringify(this.bonusGameState));
        };
        this.setOpneBonusBuyPopup = (value) => {
            this.isOpneBonusBuyPopup = value;
        };
        this.showBonusBuyPopup = () => {
            const { profileCommon: { profile: { currencySign, balance }, }, audioCommon: { playAudio }, } = this.parent.root;
            playAudio('ui_generic');
            const bonusGameAmount = Number(this.parent.amount) * BASE_BONUS_BETS;
            const isEnabled = !!balance && bonusGameAmount <= balance;
            const data = {
                content: isEnabled ? i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('VORTEX_AERO.BONUS_BUY.INFO.1') : i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('VORTEX_AERO.BONUS_BUY.INFO.2'),
                amount: Number(bonusGameAmount.toFixed(2)),
                currency: currencySign,
                isEnabled,
                betAmount: Number(this.parent.amount),
            };
            this.setOpneBonusBuyPopup(true);
            src_framework_components_vortexaero_VortexAeroCanvasController__WEBPACK_IMPORTED_MODULE_4__/* .vortexAeroCanvasController */ .A.invoke('showBonusBuyPopup', data);
        };
        this.hideBonusBuyPopup = async (isBuy) => {
            const { audioCommon: { playAudio, stopAudio }, } = this.parent.root;
            if (isBuy) {
                const startTime = Date.now();
                playAudio('BBSpinStart');
                src_framework_components_vortexaero_VortexAeroCanvasController__WEBPACK_IMPORTED_MODULE_4__/* .vortexAeroCanvasController */ .A.invoke('startAnimationBonus');
                playAudio('BBSpinLoop', true);
                await this.startBonusBuyGame();
                await this.placeBonusBuy();
                const multiplier = (this.buyBonusGameState && this.buyBonusGameState.multiplier) || 1;
                const resutl = (0,_auction__WEBPACK_IMPORTED_MODULE_6__.auction)(this.bonusGameRoundId, multiplier);
                const elapsed = Date.now() - startTime;
                const remaining = 2000 - elapsed;
                if (remaining > 0) {
                    await wait(remaining);
                }
                stopAudio('BBSpinLoop');
                await wait(100);
                playAudio('BBSpinStop');
                await wait(100);
                src_framework_components_vortexaero_VortexAeroCanvasController__WEBPACK_IMPORTED_MODULE_4__/* .vortexAeroCanvasController */ .A.invoke('stopAnimationBonus', { animation: String(resutl.plane) });
                setTimeout(() => {
                    playAudio('BBSpinSelect');
                }, 2200);
            }
            else {
                playAudio('ui_generic');
                this.setOpneBonusBuyPopup(isBuy);
                this.parent.gtmTrackCanvasAction({ action: 'bonus_buy.cancel' });
            }
        };
        this.startBuyAuction = () => {
            this.setActiveBonusGame(true);
            this.setBonusGameState({
                multiplier: this.buyBonusGameState.multiplier,
                roundId: this.bonusGameRoundId,
                betId: this.bonusGameRoundId,
                baseMultiplier: 0,
                isBuy: true,
            });
            this.parent.gtmTrackCanvasAction({ action: 'bonus_buy.buy' });
        };
        this.runBuyAuction = () => {
            const { audioCommon: { playAudio }, } = this.parent.root;
            playAudio('BBAuctionStart');
            this.setActiveAuctionTableIndex(0);
        };
        this.setBuyBonusGameState = (state) => {
            this.buyBonusGameState = state;
            src_framework_helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.set('bestPreviousWins', JSON.stringify(this.buyBonusGameState));
        };
        this.serBonusRetrieveData = (data) => {
            this.bonusRetrieveData = data;
        };
        this.setBuyBonusGameCashout = (data) => {
            this.buyBonusGameCashout = data;
        };
        this.setOpneAuctionPopup = (value) => {
            this.isOpneAuctionPopup = value;
        };
        this.setAuctionTableQueue = (data) => {
            this.auctionTableQueue = data;
            src_framework_helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.set('auctionTableQueue', JSON.stringify(this.auctionTableQueue));
        };
        this.setActiveAuctionTableIndex = (value) => {
            this.activeAuctionTableIndex = value;
        };
        this.showAuctionPopup = (data, coefficient, totalCoefficient) => {
            this.setOpneAuctionPopup(true);
            this.setOpneBonusBuyPopup(false);
            src_framework_helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.set('activeAuctionPopup', true);
            src_framework_helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.set('prevCoefficientBonusGame', totalCoefficient);
            src_framework_components_vortexaero_VortexAeroCanvasController__WEBPACK_IMPORTED_MODULE_4__/* .vortexAeroCanvasController */ .A.invoke('showAuctionPopup', data);
            src_framework_components_vortexaero_VortexAeroCanvasController__WEBPACK_IMPORTED_MODULE_4__/* .vortexAeroCanvasController */ .A.invoke('updateTotalAuctionCoefficient', { coefficient, bounceType: 'default' });
        };
        this.showAuctionCoefficientTable = async (data) => {
            const { audioCommon: { playAudio }, } = this.parent.root;
            playAudio('BBAuctionOffers');
            src_framework_components_vortexaero_VortexAeroCanvasController__WEBPACK_IMPORTED_MODULE_4__/* .vortexAeroCanvasController */ .A.invoke('showAuctionCoefficientTable', data);
            await wait(1500);
            playAudio('BBAuctionTotalMultiplier');
            src_framework_components_vortexaero_VortexAeroCanvasController__WEBPACK_IMPORTED_MODULE_4__/* .vortexAeroCanvasController */ .A.invoke('updateTotalAuctionCoefficient', {
                coefficient: data.coefficient,
                bounceType: data.isLastShownItem ? 'final' : 'default',
            });
        };
        this.hideAuctionCoefficientTable = () => {
            src_framework_components_vortexaero_VortexAeroCanvasController__WEBPACK_IMPORTED_MODULE_4__/* .vortexAeroCanvasController */ .A.invoke('hideAuctionCoefficientTable');
        };
        this.showAuctionTimer = (time) => {
            src_framework_components_vortexaero_VortexAeroCanvasController__WEBPACK_IMPORTED_MODULE_4__/* .vortexAeroCanvasController */ .A.invoke('showAuctionTimer', { time });
        };
        this.hideAuctionTimer = () => {
            src_framework_components_vortexaero_VortexAeroCanvasController__WEBPACK_IMPORTED_MODULE_4__/* .vortexAeroCanvasController */ .A.invoke('hideAuctionTimer');
        };
        this.startBonusBuyGame = async () => {
            const { profileCommon: { profile: { token, playerId }, }, } = this.parent.root;
            try {
                const { data: { roundId }, } = await (0,src_framework_api_vortexaero__WEBPACK_IMPORTED_MODULE_5__/* .createBonusGameRequest */ .JT)({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed: this.parent.clientSeed,
                    nonce: this.parent.nonce,
                    theme: this.parent.gameServerTheme,
                });
                this.bonusGameRoundId = roundId;
                return roundId;
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.parent.root.uiCommon.errorCodeResolver(error.response);
                return error;
            }
        };
        this.placeBonusBuy = async () => {
            const { profileCommon: { profile: { balance, token, subPartnerId, currency, apiKey }, }, uiCommon: { isMobile, setAlertList }, } = this.parent.root;
            if (balance !== null && balance <= 0) {
                setAlertList({
                    title: i18next__WEBPACK_IMPORTED_MODULE_0__["default"].t('COMMON.PLACEBET.ERROR.3'),
                    type: 'error',
                });
                return null;
            }
            try {
                this.parent.setCashoutAmount(this.parent.amount);
                const { data } = await (0,src_framework_api_vortexaero__WEBPACK_IMPORTED_MODULE_5__/* .placeBonusBuyRequest */ .OV)({
                    headers: (0,_helpers_formatHeaders__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({
                        authorization: token,
                        apikey: apiKey,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                    }),
                    roundId: this.bonusGameRoundId,
                    amount: Number(this.parent.amount),
                    currency,
                    theme: this.parent.gameServerTheme,
                });
                this.buyBonusGameState = data.state;
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.parent.root.uiCommon.errorCodeResolver(error.response);
            }
        };
        this.cashoutBonusBuy = async () => {
            const { profileCommon: { profile: { balance, token, subPartnerId, currency, apiKey }, }, uiCommon: { isMobile, setAlertList }, } = this.parent.root;
            try {
                const { data } = await (0,src_framework_api_vortexaero__WEBPACK_IMPORTED_MODULE_5__/* .cashoutBonusBuyRequest */ .W4)({
                    headers: (0,_helpers_formatHeaders__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({
                        authorization: token,
                        apikey: apiKey,
                        subpartnerid: subPartnerId,
                        metadata: JSON.stringify({
                            device: isMobile ? 'mobile' : 'desktop',
                            manual: true,
                        }),
                    }),
                    roundId: this.bonusGameRoundId,
                });
                this.bonusGameState = {
                    ...this.bonusGameState,
                    betId: data.betId,
                };
                const animationsQueueLocal = [];
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.parent.root.uiCommon.errorCodeResolver(error.response);
            }
        };
        this.runAuctionFlow = async (data) => {
            const { audioCommon: { playAudio, stopAudio }, } = this.parent.root;
            this.showAuctionCoefficientTable(data);
            await wait(2200);
            this.hideAuctionCoefficientTable();
            await wait(1500);
            if (data.activateTimerMs !== undefined) {
                playAudio('BBClockOpenClose');
                await wait(100);
                playAudio('BBClockTik', true);
                this.showAuctionTimer(data.activateTimerMs);
                await wait(data.activateTimerMs * 1000);
                stopAudio('BBClockTik');
                playAudio('BBClockOpenClose');
                this.hideAuctionTimer();
            }
            if (data.isLastShownItem) {
                playAudio('BBClockOpenClose');
                await wait(100);
                playAudio('BBClockTik', true);
                this.showAuctionTimer(3);
                await wait(4000);
                stopAudio('BBClockTik');
                playAudio('BBClockOpenClose');
                this.hideAuctionTimer();
                const totalCoefficient = this.bonusGameState.multiplier + this.bonusGameState.baseMultiplier;
                if (this.bonusGameState.isBuy || this.bonusRetrieveData) {
                    await this.cashoutBonusBuy();
                    this.parent.setRetrieveProgressControl({ isLocked: true });
                    await this.parent.retrieveGame();
                    this.parent.gtmBonusGame({
                        state: 'bonus_buy',
                        multiplier: totalCoefficient,
                        id: this.bonusGameRoundId,
                    });
                }
                else {
                    this.parent.gtmBonusGame({
                        state: 'auction',
                        multiplier: totalCoefficient,
                        id: this.parent.roundId,
                    });
                }
                playAudio('BBAuctionEnd');
                src_framework_helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.set('activeAuctionPopup', null);
                src_framework_helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.set('prevCoefficientBonusGame', null);
                src_framework_components_vortexaero_VortexAeroCanvasController__WEBPACK_IMPORTED_MODULE_4__/* .vortexAeroCanvasController */ .A.invoke('hideAuctionPopup');
                this.parent.showWinPopup({
                    coefficient: totalCoefficient,
                    roundId: this.bonusGameState.betId,
                    isBonusSound: true,
                });
                this.setOpneBonusBuyPopup(false);
                this.setOpneAuctionPopup(false);
                this.isClearBonusGame = true;
                return;
            }
            this.setActiveAuctionTableIndex(this.activeAuctionTableIndex + 1);
        };
        this.parent = parent;
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.makeAutoObservable)(this, {}, { autoBind: true });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => ({
            isActiveBonusGame: this.isActiveBonusGame,
            isProgressLinesAnimationCompleted: this.parent.isProgressLinesAnimationCompleted,
        }), ({ isActiveBonusGame, isProgressLinesAnimationCompleted }) => {
            if (isActiveBonusGame && this.bonusGameState) {
                this.setActiveBonusGame(false);
                setTimeout(() => {
                    let labelData;
                    if (this.parent.currentLabelId && this.parent.planeSkinsState.wings > 0) {
                        labelData = {
                            label: this.parent.currentLabelId,
                            wings: this.parent.planeSkinsState.wings,
                        };
                    }
                    const data = (0,_auction__WEBPACK_IMPORTED_MODULE_6__.auction)(this.bonusGameState.roundId, this.bonusGameState.multiplier);
                    const baseCoefficient = this.bonusGameState.baseMultiplier + (data.basePlenePrice ?? 0);
                    let prev = baseCoefficient;
                    const visibleRange = data.boards.map((coefficient, index) => {
                        prev = prev + coefficient;
                        const isMega = coefficient === 777;
                        const isLastShownItem = data.boards.length - 1 === index;
                        const color = AUCTION_COLORS[coefficient];
                        const type = isMega ? 'mega' : 'default';
                        const position = index % 2 ? 'left' : 'right';
                        const activateTimerMs = !isLastShownItem && index >= 2 ? 3 : undefined;
                        return {
                            coefficient: isMega ? coefficient + this.bonusGameState.baseMultiplier : prev,
                            position,
                            color,
                            type,
                            isLastShownItem,
                            activateTimerMs,
                        };
                    });
                    this.setAuctionTableQueue(visibleRange);
                    if (this.bonusGameState.isBuy) {
                        if (this.bonusRetrieveData) {
                            this.showAuctionPopup({ isBuy: this.bonusGameState.isBuy, animation: String(data.plane) }, baseCoefficient, prev);
                        }
                        else {
                            this.showAuctionPopup({ isBuy: this.bonusGameState.isBuy }, baseCoefficient, prev);
                        }
                    }
                    else {
                        this.showAuctionPopup({ isBuy: this.bonusGameState.isBuy, plane: this.parent.planeSkinsState, labels: labelData }, baseCoefficient, prev);
                    }
                    if (!this.bonusGameState.isBuy) {
                        this.setActiveAuctionTableIndex(0);
                    }
                }, this.bonusRetrieveData ? 0 : 1000);
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => ({
            activeAuctionTableIndex: this.activeAuctionTableIndex,
            auctionTableQueue: this.auctionTableQueue,
        }), ({ activeAuctionTableIndex, auctionTableQueue }) => {
            if (activeAuctionTableIndex !== null && auctionTableQueue) {
                const activeTable = auctionTableQueue[activeAuctionTableIndex];
                if (activeAuctionTableIndex === 0) {
                    setTimeout(() => {
                        this.runAuctionFlow(activeTable);
                    }, 1000);
                }
                else {
                    this.runAuctionFlow(activeTable);
                }
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => ({
            isClearBonusGame: this.isClearBonusGame,
            isActiveWinPopup: this.parent.isActiveWinPopup,
        }), ({ isClearBonusGame, isActiveWinPopup }) => {
            if (isClearBonusGame && !isActiveWinPopup) {
                setTimeout(() => {
                    this.isClearBonusGame = false;
                    if (!this.bonusGameState.isBuy && !this.bonusRetrieveData) {
                        this.parent.setProgressState({ firstLine: 0, secondLine: 0, thirdLine: 0 });
                        src_framework_components_vortexaero_VortexAeroCanvasController__WEBPACK_IMPORTED_MODULE_4__/* .vortexAeroCanvasController */ .A.invoke('setProgressLines', this.parent.progressState);
                        this.parent.runPlaneSkinAnimation();
                        const index = this.bonusGameState.indexReel;
                        if (index === 2) {
                            this.parent.setReelQueueState({ [index]: false });
                            this.parent.setDisableControls(false);
                        }
                        else {
                            this.parent.setReelQueueState({ [index]: false, [index + 1]: true });
                        }
                    }
                    (0,mobx__WEBPACK_IMPORTED_MODULE_1__.runInAction)(() => {
                        this.setBonusGameState(null);
                        this.setAuctionTableQueue(null);
                        this.setActiveAuctionTableIndex(null);
                    });
                }, 1000);
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.reaction)(() => ({
            bonusRetrieveData: this.bonusRetrieveData,
        }), async ({ bonusRetrieveData }) => {
            this.buyBonusGameState = bonusRetrieveData.state;
            this.bonusGameRoundId = bonusRetrieveData.roundId;
            const { audioCommon: { playAudio, stopAudio }, } = this.parent.root;
            const activeAuctionPopup = JSON.parse(src_framework_helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.get('activeAuctionPopup'));
            if (!!activeAuctionPopup) {
                this.startBuyAuction();
            }
            else {
                this.showBonusBuyPopup();
                src_framework_components_vortexaero_VortexAeroCanvasController__WEBPACK_IMPORTED_MODULE_4__/* .vortexAeroCanvasController */ .A.invoke('startAnimationBonus');
                const resutl = (0,_auction__WEBPACK_IMPORTED_MODULE_6__.auction)(bonusRetrieveData.roundId, bonusRetrieveData.state.multiplier);
                playAudio('BBSpinLoop', true);
                await wait(2000);
                stopAudio('BBSpinLoop');
                await wait(100);
                playAudio('BBSpinStop');
                await wait(100);
                src_framework_components_vortexaero_VortexAeroCanvasController__WEBPACK_IMPORTED_MODULE_4__/* .vortexAeroCanvasController */ .A.invoke('stopAnimationBonus', { animation: String(resutl.plane) });
                setTimeout(() => {
                    playAudio('BBSpinSelect');
                }, 2200);
            }
        });
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], BonusGameStore.prototype, "bonusGameRoundId", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], BonusGameStore.prototype, "bonusRetrieveData", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], BonusGameStore.prototype, "isActiveBonusGame", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], BonusGameStore.prototype, "isOpneBonusBuyPopup", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], BonusGameStore.prototype, "bonusGameState", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], BonusGameStore.prototype, "buyBonusGameState", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], BonusGameStore.prototype, "buyBonusGameCashout", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], BonusGameStore.prototype, "auctionTableQueue", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], BonusGameStore.prototype, "activeAuctionTableIndex", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], BonusGameStore.prototype, "isOpneAuctionPopup", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.observable
], BonusGameStore.prototype, "isClearBonusGame", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "setActiveBonusGame", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "setBonusGameState", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "setOpneBonusBuyPopup", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "showBonusBuyPopup", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "hideBonusBuyPopup", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "startBuyAuction", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "runBuyAuction", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "setBuyBonusGameState", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "serBonusRetrieveData", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "setBuyBonusGameCashout", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "setOpneAuctionPopup", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "setAuctionTableQueue", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "setActiveAuctionTableIndex", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "showAuctionPopup", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "showAuctionCoefficientTable", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "hideAuctionCoefficientTable", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "showAuctionTimer", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "hideAuctionTimer", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "startBonusBuyGame", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "placeBonusBuy", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "cashoutBonusBuy", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_1__.action
], BonusGameStore.prototype, "runAuctionFlow", void 0);


/***/ }),

/***/ 60925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   auction: () => (/* binding */ auction)
/* harmony export */ });
function mulberry32(a) {
    if (typeof a === 'string') {
        let h = 0;
        for (let i = 0; i < a.length; i++) {
            h = (Math.imul(31, h) + a.charCodeAt(i)) | 0;
        }
        a = h >>> 0;
    }
    return function () {
        var t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
const CONFIG = {
    planeStartPrices: [30, 50, 100, 150, 200],
    maxBoards: 7,
    denoms: [10, 20, 50, 100],
    denomsWeights: [4, 2, 2, 1],
    planeWeightFactor: 5 / 777,
};
function getPlane(mult, rng) {
    const factor = mult / 777;
    const weights = [
        Math.max(0.01, 1 - factor * 0.8),
        Math.max(0.01, 0.5 - factor * 0.2),
        Math.max(0.01, 0.2 + factor * 0.1),
        Math.max(0.01, 0.12 + factor * 0.3),
        Math.max(0.01, 0.01 + factor * 0.4),
    ];
    for (let i = 0; i < weights.length; i++) {
        if (CONFIG.planeStartPrices[i] > mult) {
            weights[i] = 0;
        }
    }
    const totalW = weights.reduce((a, b) => a + b, 0);
    if (totalW === 0)
        return 1;
    let r = rng() * totalW;
    for (let i = 0; i < weights.length; i++) {
        r -= weights[i];
        if (r < 0)
            return i + 1;
    }
    return 1;
}
function weightedPick(values, weights, rng) {
    let r = rng() * weights.reduce((a, b) => a + b, 0);
    for (let i = 0; i < values.length; i++) {
        r -= weights[i];
        if (r < 0)
            return values[i];
    }
}
const ALL_COMBOS = (() => {
    const res = [];
    const D = CONFIG.denoms;
    function dfs(start, len, cur) {
        if (len === 0) {
            res.push(cur.slice());
            return;
        }
        for (let i = start; i < D.length; i++) {
            cur.push(D[i]);
            dfs(i, len - 1, cur);
            cur.pop();
        }
    }
    for (let L = 1; L <= CONFIG.maxBoards; L++)
        dfs(0, L, []);
    return res;
})();
function shuffle(arr, rng) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(rng() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function pickCombo(remaining, rng) {
    if (remaining <= 0 || remaining % 10 !== 0)
        return null;
    const candidates = ALL_COMBOS.filter((ms) => ms.reduce((a, b) => a + b, 0) === remaining);
    if (!candidates.length)
        return null;
    candidates.sort((a, b) => {
        const score = (ms) => ms.filter((v) => v >= 50).length * 3 + ms.reduce((s, v) => s + v, 0) / ms.length + rng() * 2;
        return score(b) - score(a);
    });
    return candidates[Math.floor(rng() * Math.min(8, candidates.length))].slice();
}
function generateFallback(remaining, rng) {
    let boards = [], slots = CONFIG.maxBoards, remain = remaining;
    while (remain > 0 && slots > 1) {
        let avg = remain / slots;
        let pick;
        if (avg >= 70)
            pick = 100;
        else if (avg >= 35)
            pick = rng() < 0.6 ? 50 : 20;
        else
            pick = rng() < 0.7 ? 10 : 20;
        const maxAllowed = remain - 10 * (slots - 1);
        pick =
            CONFIG.denoms
                .slice()
                .reverse()
                .find((d) => d <= maxAllowed) || 10;
        boards.push(pick);
        remain -= pick;
        slots--;
    }
    if (remain > 0) {
        let last = Math.max(10, Math.min(100, Math.round(remain / 10) * 10));
        boards.push(last);
        remain -= last;
    }
    return boards;
}
function auction(seed, mult, price) {
    const rng = mulberry32(seed);
    const plane = getPlane(mult, rng);
    let start = CONFIG.planeStartPrices[plane - 1];
    let current = start;
    if (mult === 777) {
        const remaining = 500 - start;
        let combo = pickCombo(remaining, rng);
        if (!combo)
            combo = generateFallback(remaining, rng);
        shuffle(combo, rng);
        if (combo.length > CONFIG.maxBoards)
            combo = combo.slice(0, CONFIG.maxBoards);
        combo.sort((a, b) => a - b);
        combo[combo.length - 1] = 777;
        console.log('plane: ' + plane + ', combo: [' + combo + '], final price: 777');
        return { plane, boards: combo, finalPrice: 777, basePlenePrice: CONFIG.planeStartPrices[plane - 1] };
    }
    const remaining = mult - start;
    if (remaining === 0) {
        return { plane, boards: [], finalPrice: current };
    }
    let combo = pickCombo(remaining, rng);
    if (!combo)
        combo = generateFallback(remaining, rng);
    shuffle(combo, rng);
    if (combo.length > CONFIG.maxBoards)
        combo = combo.slice(0, CONFIG.maxBoards);
    let sumBoards = combo.reduce((a, b) => a + b, 0);
    if (sumBoards !== remaining) {
        for (let i = combo.length - 1; i >= 0; i--) {
            const needed = remaining - (sumBoards - combo[i]);
            if (needed > 0 && needed % 10 === 0) {
                combo[i] = needed;
                sumBoards = remaining;
                break;
            }
        }
    }
    current += sumBoards;
    combo.sort((a, b) => a - b);
    return { plane, boards: combo, finalPrice: current, basePlenePrice: CONFIG.planeStartPrices[plane - 1] };
}


/***/ })

}]);