"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[423],{

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

/***/ 70423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  TIME_AUTO_BET_MS: () => (/* binding */ TIME_AUTO_BET_MS),
  "default": () => (/* binding */ store_VortexAeroCommon)
});

// EXTERNAL MODULE: consume shared module (default) uuid@^9.0.0 (strict) (fallback: ./node_modules/uuid/dist/esm-browser/index.js)
var index_js_ = __webpack_require__(81682);
// EXTERNAL MODULE: consume shared module (default) i18next@^23.2.3 (strict) (fallback: ./node_modules/i18next/dist/esm/i18next.js)
var i18next_js_ = __webpack_require__(49953);
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
// EXTERNAL MODULE: ./src/framework/api/vortexaero/index.ts + 1 modules
var vortexaero = __webpack_require__(81784);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
// EXTERNAL MODULE: ./src/framework/components.vortexaero/VortexAeroCanvasController/index.ts + 2 modules
var VortexAeroCanvasController = __webpack_require__(80286);
;// ./src/canvas/controller/types/vortexaero/types.ts
var GameLevel;
(function (GameLevel) {
    GameLevel["Easy"] = "easy";
    GameLevel["Medium"] = "medium";
    GameLevel["Hard"] = "hard";
    GameLevel["Extreme"] = "extreme";
})(GameLevel || (GameLevel = {}));
var ChickenAnimSpeed;
(function (ChickenAnimSpeed) {
    ChickenAnimSpeed["Fast"] = "fast";
    ChickenAnimSpeed["Normal"] = "normal";
})(ChickenAnimSpeed || (ChickenAnimSpeed = {}));
var SymbolAnimation;
(function (SymbolAnimation) {
    SymbolAnimation["Landing"] = "landing";
    SymbolAnimation["Moving"] = "moving";
    SymbolAnimation["FlyingToPlane"] = "flyingToPlane";
    SymbolAnimation["FlyingToWrench"] = "flyingToWrench";
    SymbolAnimation["FlyingFromWrench"] = "flyingFromWrench";
    SymbolAnimation["Cashout"] = "cashout";
    SymbolAnimation["Empty"] = "empty";
})(SymbolAnimation || (SymbolAnimation = {}));
var LineIndex;
(function (LineIndex) {
    LineIndex[LineIndex["firstLine"] = 0] = "firstLine";
    LineIndex[LineIndex["secondLine"] = 1] = "secondLine";
    LineIndex[LineIndex["thirdLine"] = 3] = "thirdLine";
})(LineIndex || (LineIndex = {}));
var PopUpType;
(function (PopUpType) {
    PopUpType["silver"] = "silver";
    PopUpType["gold"] = "gold";
    PopUpType["default"] = "default";
})(PopUpType || (PopUpType = {}));

// EXTERNAL MODULE: ./src/framework/store/VortexAeroCommonStores/BonusGameStore.ts
var BonusGameStore = __webpack_require__(25984);
// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
;// ./src/framework/helpers/vortexaero/normalizeAndTruncateAmount.ts

const normalizeFloatingError = (value) => Number(value.toPrecision(15));
const getBetAmountPrecision = (rounding) => Math.max(rounding - 1, 0);
const normalizeAndTruncateAmount = (value, rounding) => (0,truncateDecimals/* default */.A)(normalizeFloatingError(value), getBetAmountPrecision(rounding));

// EXTERNAL MODULE: ./src/framework/helpers/timeout.ts
var timeout = __webpack_require__(9858);
;// ./src/framework/store/VortexAeroCommon.ts
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
const SYMBOL_ID_MAP = {
    SymbolNeutral: 0,
    Symbol1: 1,
    Symbol1h: 2,
    Symbol1d: 4,
    Symbol2: 5,
    Symbol2h: 6,
    Symbol2d: 8,
    Symbol3: 9,
    Symbol3h: 10,
    Symbol3d: 12,
    SymbolWrench: 13,
    SymbolLoss: 14,
    SymbolSkin: 'SKIN_RANGE',
};
const AUDIO_SYMBOL_ID_MAP = {
    SymbolNeutral: {
        soundName: '',
        delayMs: 0,
    },
    Symbol1: {
        soundName: 'blue',
        delayMs: 0,
    },
    Symbol1h: {
        soundName: '',
        delayMs: 0,
    },
    Symbol1d: {
        soundName: 'blue_x2',
        delayMs: 0,
    },
    Symbol2: {
        soundName: 'green',
        delayMs: 0,
    },
    Symbol2h: {
        soundName: '',
        delayMs: 0,
    },
    Symbol2d: {
        soundName: 'green_x2',
        delayMs: 0,
    },
    Symbol3: {
        soundName: 'red',
        delayMs: 0,
    },
    Symbol3h: {
        soundName: '',
        delayMs: 0,
    },
    Symbol3d: {
        soundName: 'red_x2',
        delayMs: 0,
    },
    SymbolWrench: {
        soundName: 'wrench',
        delayMs: 0,
    },
    SymbolLoss: {
        soundName: 'skull',
        delayMs: 0,
    },
    SymbolSkin: {
        soundName: 'symbol_skin',
        delayMs: 0,
    },
    FlyingFromWrench: {
        soundName: 'wrench_save',
        delayMs: 0,
    },
    BonusCashout: {
        soundName: 'cashout_last',
        delayMs: 1000,
    },
    Moving: {
        soundName: 'merge_half',
        delayMs: 0,
    },
};
const SKIN_MIN = 15;
const SKIN_MAX = 26;
const MOVING_SYMBOLS = new Set(['Symbol1h', 'Symbol2h', 'Symbol3h']);
const SYMBOL_ANIMATION_ID_MAP = {
    SymbolNeutral: SymbolAnimation.Empty,
    Symbol1: SymbolAnimation.Landing,
    Symbol1h: SymbolAnimation.Empty,
    Symbol1d: SymbolAnimation.Landing,
    Symbol2: SymbolAnimation.Landing,
    Symbol2h: SymbolAnimation.Empty,
    Symbol2d: SymbolAnimation.Landing,
    Symbol3: SymbolAnimation.Landing,
    Symbol3h: SymbolAnimation.Empty,
    Symbol3d: SymbolAnimation.Landing,
    SymbolWrench: SymbolAnimation.FlyingToWrench,
    SymbolLoss: SymbolAnimation.Empty,
    SymbolSkin: SymbolAnimation.FlyingToPlane,
};
const TIME_AUTO_BET_MS = 250;
class VortexAeroCommon {
    constructor(root, gameConfig) {
        this.baseAvailableLabelIds = [24, 26, 16, 19, 23, 22, 18, 25, 17, 21, 15, 20];
        this.longPressTriggeredInterval = null;
        this.splitTestVariants = {
            isAlternativeUITestA: true,
            isAlternativeUITestB: false,
            isAlternativeUITestC: false,
        };
        this.gameState = {
            cashable: false,
            initial: true,
        };
        this.setGameState = (state) => {
            this.gameState = state;
        };
        this.apiVersion = '';
        this.isActiveBonusModal = false;
        this.isRoundStarted = false;
        this.isWinPopupAnimation = false;
        this.gameSettings = {};
        this.isWinPopupAnimationCompleted = false;
        this.modalConfig = {
            durationLifeModal: 3000,
            durationAvalibleModal: 1000,
            roundId: '',
            coefficient: 0,
            isBonusSound: false,
        };
        this.nonce = 1;
        this.amount = '1.00';
        this.cashoutAmount = '1.00';
        this.clientSeed = (0,index_js_.v4)();
        this.roundId = null;
        this.skipWrenchRoundState = null;
        this.newWrenchRoundId = null;
        this.betId = null;
        this.lostRounds = 0;
        this.rounds = 0;
        this.retrieveGameData = null;
        this.retrieveProgressControl = {
            isLocked: false,
            isReady: false,
        };
        this.baseMultipliers = {
            firstLine: [],
            secondLine: [],
            thirdLine: [],
        };
        this.roundSate = null;
        this.planeSkinsState = {
            body: 0,
            wings: 0,
            engine: 0,
        };
        this.currentLabelId = null;
        this.prevLabelState = null;
        this.listOfPlane = new Set();
        this.isActivePlateAnimation = false;
        this.progressState = {
            prevData: {
                firstLine: 0,
                secondLine: 0,
                thirdLine: 0,
            },
            currentData: {
                firstLine: 0,
                secondLine: 0,
                thirdLine: 0,
            },
        };
        this.reelQueueState = {
            0: false,
            1: false,
            2: false,
        };
        this.symbolSkinState = {};
        this.notificationList = [];
        this.hasActiveWrench = {};
        this.hasMovingSymbol = null;
        this.hasBonusWin = null;
        this.isErrorPlace = false;
        this.isErrorCashout = false;
        this.isErroCreateGame = false;
        this.isInitCompleted = false;
        this.isPlayIntro = false;
        this.isRetrieveFinished = false;
        this.isActiveCashout = false;
        this.isUpdateBalance = false;
        this.isOpneHangar = false;
        this.isActiveWrench = false;
        this.isProfileReady = false;
        this.isCanvasLoaded = false;
        this.isCanvasAppReady = false;
        this.isDisabledControls = true;
        this.isPreloadedDone = false;
        this.isActiveWinPopup = false;
        this.isAnticipation = false;
        this.isProgressLinesAnimationCompleted = true;
        this.isMockedData = false;
        this.isActiveAnticipation = false;
        this.isLongPressTriggered = false;
        this.isTurboMode = false;
        this.availableLabelIds = this.baseAvailableLabelIds;
        this.userLabelIds = [];
        this.rouldUserLabelIds = [];
        this.isAutoCashout = false;
        this.isFreebetsPayoutUpdated = false;
        this.handleInit = () => {
            this.isInitCompleted = true;
            let reels = [[1], [1], [1]];
            if (this.retrieveGameData?.bonusbuy === false && Array.isArray(this.retrieveGameData.state.symbols)) {
                reels = this.getValidReels(this.retrieveGameData.state.symbols);
            }
            VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('init', { reels });
        };
        this.handlePlayIntro = () => {
            VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('setProgressLines', this.progressState);
            if (!this.isPlayIntro) {
                VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('playIntro');
            }
            this.isPlayIntro = true;
        };
        this.handleLocalizations = () => {
            const data = {
                bonusBuy: {
                    title: i18next_js_["default"].t('COMMON.BONUS'),
                    subTitle: i18next_js_["default"].t('COMMON.BUY'),
                    activateButton: i18next_js_["default"].t('VORTEX_AERO.ACTIVATE'),
                    betAmountTitle: i18next_js_["default"].t('COMMON.BET_AMOUNT'),
                },
                auction: {
                    title: i18next_js_["default"].t('VORTEX_AERO.AUCTION'),
                    coefTitle: i18next_js_["default"].t('COMMON.TOTAL_MULTIPLIER'),
                    activateButton: i18next_js_["default"].t('VORTEX_AERO.START_AUCTION'),
                },
                winPopup: {
                    title: i18next_js_["default"].t('VORTEX_AERO.SOLD'),
                },
            };
            VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('setupLocalizations', data);
        };
        this.getGameSettings = async () => {
            const { root: { profileCommon: { profile: { token, playerId, subPartnerId }, splitTest, }, uiCommon: { isMobile }, }, } = this;
            try {
                const respond = await (0,vortexaero/* getGameSettingsRequest */.p_)({
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
        this.retrieveGame = async () => {
            const { clientSeed, nonce, root: { profileCommon: { profile: { token, playerId }, }, freebetsCommon: { setForcedDisabledFreebets }, }, } = this;
            this.isRetrieveFinished = false;
            try {
                const { data } = await (0,vortexaero/* retrieveGameRequest */.cJ)({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed,
                    nonce,
                    theme: this.gameServerTheme,
                });
                this.betId = data.roundId;
                this.roundId = data.roundId;
                this.setRetrieveGameData(data);
                const { state } = data;
                this.setGameState({
                    cashable: 'cashable' in state ? state.cashable : false,
                    initial: 'initial' in state ? Boolean(state.initial) : false,
                });
                if ('collection' in state &&
                    state.collection.find((item) => item > 0) &&
                    'freebetsId' in data &&
                    !data.freebetsId) {
                    setForcedDisabledFreebets(true);
                }
            }
            catch (error) {
                this.createGame();
                return error;
            }
            finally {
                this.isRetrieveFinished = true;
            }
        };
        this.createGame = async () => {
            const { profile: { token, apiKey }, } = this.root.profileCommon;
            this.nonce = 1;
            try {
                const { data } = await (0,vortexaero/* createGameRequest */.Yv)({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    theme: this.gameServerTheme,
                    nonce: this.nonce,
                    clientSeed: this.clientSeed,
                });
                if (this.isErrorPlace || this.isErrorCashout) {
                    this.isErroCreateGame = true;
                }
                this.roundId = data.roundId;
                this.betId = data.roundId;
            }
            catch (error) {
                console.log('fetchGame error:', error);
                return error;
            }
        };
        this.placeBet = async ({ isHold, symbols }) => {
            try {
                const { clientSeed, nonce, root: { profileCommon: { profile: { currency, subPartnerId, apiKey, token, balance }, }, audioCommon: { playAudio }, uiCommon: { setAlertList }, freebetsCommon: { freebetActive, freebetId, updateFreebetsPayout }, }, } = this;
                if (!this.isFreebetEnabled && balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                    setAlertList({
                        title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.3'),
                        type: 'error',
                    });
                    return;
                }
                if (this.notificationList.length) {
                    this.clearAllNotification();
                }
                this.setDisableControls(true);
                VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('spinReels', { isTurbo: this.isTurboMode });
                const reset = !!this.skipWrenchRoundState && this.skipWrenchRoundState.totalBetAmount !== Number(this.totalBetAmount);
                playAudio('placebet');
                this.setCashoutAmount(this.amount);
                const { data } = await (0,vortexaero/* placeBetRequest */.CW)({
                    headers: (0,formatHeaders/* default */.A)({
                        authorization: token,
                        apikey: apiKey,
                        subpartnerid: subPartnerId,
                    }),
                    theme: this.gameServerTheme,
                    roundId: this.roundId,
                    clientSeed: clientSeed,
                    nonce: nonce,
                    currency,
                    amount: Number(this.totalBetAmount),
                    symbols: symbols?.length ? symbols : undefined,
                    reset,
                    ...(this.isFreebetEnabled && freebetId && { freebetsId: freebetId }),
                    ...(this.isFreebetEnabled && {
                        minCoefficient: this.gameConfig.freebets?.minCoeffToCashout ?? 1.01,
                        freebetsLeft: freebetActive.left - 1,
                    }),
                });
                playAudio('spin');
                if (reset) {
                    this.skipWrenchRoundState = null;
                    this.hasActiveWrench = {};
                    this.isActiveWrench = false;
                }
                this.betId = data.betId;
                if (data?.state) {
                    this.isActiveCashout = data?.state.cashable;
                    this.checkMovingSymbol(data.state.results);
                    this.checkBonusWin(data.state.results, isHold);
                    this.checkActiveSymbolSkin(data.state.results);
                    this.roundSate = data.state;
                }
                this.setGameState({
                    cashable: data.state.cashable,
                    initial: data.state.initial,
                });
                if (data?.next?.roundId) {
                    this.roundId = data.next.roundId;
                    localStorageHelper/* default */.A.set('roundId', String(this.roundId));
                }
                else if (data?.roundId) {
                    this.roundId = data.roundId;
                    localStorageHelper/* default */.A.set('roundId', String(this.roundId));
                }
                this.gtmBetPlaced({
                    isHold,
                    multiplier: data?.state?.results[2]?.multiplier ?? 0,
                });
                this.isFreebetEnabled &&
                    this.root.freebetsCommon.listAdd({
                        index: 0,
                        freebet: this.isFreebetEnabled,
                    });
                if (freebetActive?.left == 0) {
                    this.setIsAutoCashout(true);
                }
                this.setIsFreebetsPayoutUpdated(false);
                if ('autocashout' in data && data.autocashout) {
                    updateFreebetsPayout({ index: 0, payout: data.payout });
                    this.setIsFreebetsPayoutUpdated(true);
                }
            }
            catch (error) {
                console.error('ADD ERROR MESSAGE AND STOPE REAL ANIMATION', error, error.response);
                this.isErrorPlace = true;
                console.log('retrieve  placebet error');
                this.retrieveGame();
                this.root.freebetsCommon.listRemoveByIndex(0);
                this.root.uiCommon.errorCodeResolver(error.response);
            }
        };
        this.cashoutFreebets = () => {
            const { freebetsCommon: { freebetActive, listRemoveByIndex }, } = this.root;
            this.setIsAutoCashout(false);
            this.interruptGame();
            this.setProgressState({ firstLine: 0, secondLine: 0, thirdLine: 0 });
            VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('setProgressLines', this.progressState);
            setTimeout(() => {
                listRemoveByIndex(0);
            }, this.gameHasProgress ? 1000 : 0);
        };
        this.cashout = async (partial = false) => {
            try {
                if (!this.roundId)
                    return;
                const { profileCommon: { limit: { minBet }, profile: { token, playerId }, }, audioCommon: { playAudio }, freebetsCommon: { listRemoveByIndex, updateFreebetsPayout }, } = this.root;
                this.setDisableControls(true);
                if (this.notificationList.length) {
                    this.clearAllNotification();
                }
                const { data } = await (0,vortexaero/* cashoutRequest */.dn)({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    partial,
                    roundId: this.roundId,
                    minBetAmount: minBet,
                });
                if (Array.isArray(data.state?.collection)) {
                    const collection = data.state.collection;
                    const firstLine = collection[0];
                    const secondLine = collection[1];
                    const thirdLine = collection[2];
                    this.setProgressState({ firstLine, secondLine, thirdLine });
                    VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('setProgressLines', this.progressState);
                    this.runPlaneSkinAnimation();
                }
                this.isActiveCashout = data?.state.cashable;
                if (data.coefficient >= 10) {
                    this.showWinPopup({ coefficient: data.coefficient, roundId: data.betId, isBonusSound: false });
                }
                else {
                    this.showWinPopup({ coefficient: data.coefficient, roundId: data.betId, isBonusSound: false });
                    if (partial) {
                        playAudio('part_cashout');
                    }
                    else {
                        playAudio('cashout');
                    }
                    this.setDisableControls(false);
                    this.isUpdateBalance = true;
                }
                if (data.betId) {
                    this.betId = data.betId;
                }
                if (data.next?.roundId) {
                    this.roundId = data.next.roundId;
                }
                const { state: { cashable, initial }, } = data;
                this.setGameState({ cashable, initial });
                data.result === 'won' &&
                    this.isFreebetEnabled &&
                    updateFreebetsPayout({ index: 0, coefficient: data.coefficient });
                this.isFreebetEnabled && listRemoveByIndex(0);
                this.gtmBetClosed({ isWin: true, multiplier: data.coefficient, method: 'manual' });
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.isErrorCashout = true;
                console.log('retrieve  cashout error');
                this.retrieveGame();
                this.root.uiCommon.errorCodeResolver(error.response);
                return error;
            }
        };
        this.updateBalance = (value, roundId) => {
            if (value) {
                this.root.balanceCommon.setBalance(value);
            }
            else {
                this.root.balanceCommon.updateBalanceFromTicketId(roundId);
            }
        };
        this.movePlane = (planeId) => {
            VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('movePlane', { animation: planeId });
        };
        this.handleReelsAnimationCompleted = () => {
            if (this.isErrorPlace || this.isErrorCashout) {
                this.isErrorPlace = false;
                this.isErrorCashout = false;
                this.setDisableControls(false);
                return;
            }
            this.setReelQueueState({ 0: true });
        };
        this.setReelQueueState = (value) => {
            this.reelQueueState = {
                ...this.reelQueueState,
                ...value,
            };
        };
        this.runReelAnimation = () => {
            const activeIndex = Number(Object.keys(this.reelQueueState).find((key) => this.reelQueueState[Number(key)]));
            if (Number.isNaN(activeIndex))
                return;
            const reelData = this.roundSate.results[activeIndex];
            const symbol = reelData.symbol;
            if (symbol === 'SymbolSkin' && !!this.symbolSkinState[activeIndex]) {
                const labelId = this.symbolSkinState[activeIndex];
                this.currentLabelId = labelId;
            }
            this.setActiveAnticipation(false);
            this.setReelQueueState({ [activeIndex]: false });
            this.startReelAnimation(activeIndex);
            this.runProgresLineAnimation(activeIndex);
            this.runPlaneSkinAnimation();
        };
        this.comletReelAnimation = (index) => {
            const reelData = this.roundSate.results[index];
            const symbol = reelData.symbol;
            const hasActiveBonusGame = !!this.bonusGameStore.bonusGameState && this.bonusGameStore.bonusGameState.indexReel === index;
            if (hasActiveBonusGame) {
                this.bonusGameStore.setActiveBonusGame(true);
                return;
            }
            if (symbol === 'SymbolLoss' && this.isActiveWrench) {
                this.isActiveWrench = false;
            }
            if (!!this.hasActiveWrench[index] && !this.hasActiveWrench[index]?.isActive) {
                this.isActiveWrench = true;
                delete this.hasActiveWrench[index];
            }
            if (this.hasBonusWin && !!this.hasBonusWin[index]) {
                const bonusWin = this.hasBonusWin[index]?.bonusWin;
                if (bonusWin === 7) {
                    this.setProgressState({
                        thirdLine: this.progressState.currentData.thirdLine - 1,
                    });
                }
                if (bonusWin === 20) {
                    this.setProgressState({
                        secondLine: this.progressState.currentData.secondLine - 1,
                    });
                }
                if (this.isFreebetEnabled) {
                    this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: bonusWin });
                }
                VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('setProgressLines', this.progressState);
                delete this.hasBonusWin[index];
            }
            if (index === 2) {
                this.setReelQueueState({ [index]: false });
                this.setDisableControls(false);
                if (this.isAutoCashout) {
                    this.cashoutFreebets();
                }
                else {
                    if (this.isFreebetEnabled && this.root.freebetsCommon.freebetActive?.left === 0) {
                        this.root.freebetsCommon.listRemoveByIndex(0);
                    }
                }
            }
            else {
                this.setReelQueueState({ [index]: false, [index + 1]: true });
            }
        };
        this.setProgressState = (value) => {
            const progressState = {
                prevData: this.progressState.currentData,
                currentData: {
                    ...this.progressState.currentData,
                    ...value,
                },
            };
            this.progressState = progressState;
        };
        this.setPlaneSkinsState = (value) => {
            this.planeSkinsState = {
                ...this.planeSkinsState,
                ...value,
            };
        };
        this.runDecrisProgresLineAnimation = () => {
            const { currentData } = this.progressState;
            const firstLine = currentData.firstLine - 1;
            const secondLine = currentData.secondLine - 1;
            const thirdLine = currentData.thirdLine - 1;
            this.setProgressState({ firstLine, secondLine, thirdLine });
            VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('setProgressLines', this.progressState);
        };
        this.runReelsAnimationCompletd = () => {
            const { audioCommon: { playAudio }, } = this.root;
            if (Array.isArray(this.roundSate?.results)) {
                const reels = this.roundSate?.results.map((result, index) => [this.getSymbolId(result.symbol, index)]);
                VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('sendReelsResult', { reels, isAnticipation: this.isAnticipation });
            }
        };
        this.startReelAnimation = (index) => {
            const { audioCommon: { playAudio }, } = this.root;
            if (Array.isArray(this.roundSate.results)) {
                const reelData = this.roundSate.results[index];
                const symbol = reelData.symbol;
                const data = {
                    index,
                    typeOfAnimation: SYMBOL_ANIMATION_ID_MAP[symbol] ?? SymbolAnimation.Empty,
                };
                let audio = AUDIO_SYMBOL_ID_MAP[symbol];
                if (symbol === 'SymbolSkin' && !this.symbolSkinState[index]) {
                    data.typeOfAnimation = SymbolAnimation.Empty;
                }
                if (symbol === 'SymbolWrench') {
                    if (this.isActiveWrench) {
                        data.typeOfAnimation = SymbolAnimation.Empty;
                    }
                    else {
                    }
                }
                if (symbol === 'SymbolLoss') {
                    const { firstLine, secondLine, thirdLine } = this.progressState.currentData;
                    if (this.isActiveWrench) {
                        data.typeOfAnimation = SymbolAnimation.FlyingFromWrench;
                        audio = AUDIO_SYMBOL_ID_MAP.FlyingFromWrench;
                    }
                    else if (!!firstLine || !!secondLine || !!thirdLine) {
                        data.typeOfAnimation = SymbolAnimation.Landing;
                    }
                }
                if (this.hasMovingSymbol && this.hasMovingSymbol[index]) {
                    if (this.hasMovingSymbol[index]?.moveTo) {
                        data.typeOfAnimation = SymbolAnimation.Moving;
                        audio = AUDIO_SYMBOL_ID_MAP.Moving;
                        data.moveTo = this.hasMovingSymbol[index].moveTo;
                    }
                    if (this.hasMovingSymbol[index]?.moveIn) {
                        data.typeOfAnimation = SymbolAnimation.Landing;
                    }
                }
                if (this.hasBonusWin && this.hasBonusWin[index]) {
                    const bonusWin = this.hasBonusWin[index].bonusWin;
                    const isHold = this.hasBonusWin[index].isHold;
                    data.typeOfAnimation = SymbolAnimation.Cashout;
                    data.cashout = { title: i18next_js_["default"].t('COMMON.CASHOUT'), amount: bonusWin };
                    const totalBalance = this.root.profileCommon.profile.balance + bonusWin * Number(this.cashoutAmount);
                    playAudio(audio.soundName);
                    setTimeout(() => {
                        this.updateBalance(totalBalance);
                    }, 2000);
                    audio = AUDIO_SYMBOL_ID_MAP.BonusCashout;
                    this.hasBonusWin = {
                        ...this.hasBonusWin,
                        [index]: {
                            ...this.hasBonusWin[index],
                            isActive: false,
                        },
                    };
                    this.gtmBetClosed({ isWin: true, multiplier: bonusWin, method: isHold ? 'hold' : 'manual' });
                }
                if (!!audio.delayMs) {
                    setTimeout(() => {
                        playAudio(audio.soundName);
                    }, audio.delayMs);
                }
                else {
                    playAudio(audio.soundName);
                }
                VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('startReelAnimation', data);
            }
        };
        this.runProgresLineAnimation = (index) => {
            const results = this.roundSate.results;
            if (Array.isArray(results)) {
                const reelData = results[index];
                const collection = reelData?.collection;
                if (reelData.superBonusState) {
                    const firstLine = 8;
                    const secondLine = this.progressState.currentData.secondLine;
                    const thirdLine = this.progressState.currentData.thirdLine;
                    this.setProgressState({ firstLine, secondLine, thirdLine });
                    VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('setProgressLines', this.progressState);
                }
                else {
                    let increesSecondLine = 0;
                    let increesThirdLine = 0;
                    if (reelData.bonusWin === 20) {
                        increesSecondLine = 1;
                    }
                    if (reelData.bonusWin === 7) {
                        increesThirdLine = 1;
                    }
                    const firstLine = collection[0];
                    const secondLine = collection[1] + increesSecondLine;
                    const thirdLine = collection[2] + increesThirdLine;
                    const { currentData } = this.progressState;
                    if (currentData.firstLine != firstLine ||
                        currentData.secondLine != secondLine ||
                        currentData.thirdLine != thirdLine) {
                        this.setProgressState({ firstLine, secondLine, thirdLine });
                        VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('setProgressLines', this.progressState);
                    }
                }
            }
        };
        this.runPlaneSkinAnimation = () => {
            const { firstLine, secondLine, thirdLine } = this.progressState.currentData;
            const data = {
                body: null,
                wings: null,
                engine: null,
            };
            if (this.planeSkinsState.engine !== thirdLine && thirdLine <= 3) {
                data.engine = thirdLine;
                this.setPlaneSkinsState({ engine: data.engine });
            }
            if (this.planeSkinsState.wings !== secondLine && secondLine <= 5) {
                data.wings = secondLine;
                this.setPlaneSkinsState({ wings: data.wings });
            }
            if (this.planeSkinsState.body !== firstLine && firstLine <= 7) {
                data.body = firstLine;
                this.setPlaneSkinsState({ body: data.body });
            }
            this.updatePlaneOnHangar();
            VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('setPlaneSkins', data);
            this.runPlaneLabelAnimation();
        };
        this.runPlaneLabelAnimation = () => {
            if (!this.currentLabelId || !this.planeSkinsState.wings) {
                this.prevLabelState = null;
                this.setPlaneLabels({ label: null, wings: null });
                return;
            }
            const data = {
                label: this.currentLabelId,
                wings: this.planeSkinsState.wings,
            };
            if (this.prevLabelState === null) {
                this.prevLabelState = data;
                this.setPlaneLabels(data);
                return;
            }
            const isLabelChanged = this.currentLabelId !== this.prevLabelState.label;
            const isWingsChanged = this.planeSkinsState.wings !== this.prevLabelState.wings;
            if (!isLabelChanged && !isWingsChanged)
                return;
            this.prevLabelState = data;
            this.setPlaneLabels(data);
        };
        this.setPlaneLabels = (data) => {
            VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('setPlaneLabels', data);
        };
        this.cahngePlaneLabels = (labelId) => {
            if (labelId === this.currentLabelId)
                return;
            this.currentLabelId = labelId;
            this.updateActiveLabel(labelId);
            if (this.planeSkinsState.wings !== 0) {
                const data = {
                    label: this.currentLabelId,
                    wings: this.planeSkinsState.wings,
                };
                this.prevLabelState = data;
                VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('setPlaneLabels', data);
            }
        };
        this.updateUserLabelIds = (userLabelIds) => {
            this.setCommonStorage({
                key: 'userLabelIds',
                value: userLabelIds,
            });
        };
        this.updateActiveLabel = (labelId) => {
            this.setCommonStorage({
                key: 'activeLabel',
                value: labelId,
            });
        };
        this.updatePlaneOnHangar = () => {
            const getPlaneToHangar = this.getPlaneLevel();
            if (getPlaneToHangar && !this.listOfPlane.has(getPlaneToHangar)) {
                this.setActivePlateAnimation(true);
                this.listOfPlane.add(getPlaneToHangar);
                this.movePlane(getPlaneToHangar);
                this.setCommonStorage({
                    key: 'planes',
                    value: this.listOfPlane,
                });
            }
        };
        this.showWinPopup = ({ coefficient, roundId, isBonusSound, payout, }) => {
            const { profileCommon: { profile: { currency, currencySign }, limit: { maxWin }, }, audioCommon: { playAudio }, freebetsCommon: { updateFreebetsPayout }, } = this.root;
            this.setActiveWinPopup(true);
            const currentAmount = coefficient * Number(this.cashoutAmount);
            const finalAmount = Math.min(currentAmount, maxWin + Number(this.cashoutAmount));
            const type = coefficient < 10 ? PopUpType.default : coefficient >= 50 ? PopUpType.gold : PopUpType.silver;
            const data = {
                type,
                coefficient,
                amount: finalAmount,
                currency: currencySign,
                title: i18next_js_["default"].t('VORTEX_AERO.SOLD'),
            };
            const durationLifeModal = coefficient < 50 ? 3000 : 5000;
            const durationAvalibleModal = coefficient < 50 ? 1000 : 2000;
            this.modalConfig = {
                durationLifeModal,
                durationAvalibleModal,
                roundId,
                coefficient,
                isBonusSound,
            };
            if (isBonusSound) {
                playAudio('BBWinPopup');
            }
            else if (coefficient >= 50) {
                playAudio('popup_win_x50');
            }
            else if (coefficient >= 10) {
                playAudio('popup_win_x10');
            }
            if (this.isFreebetEnabled && !this.isFreebetsPayoutUpdated) {
                updateFreebetsPayout({ index: 0, payout: finalAmount });
                this.setIsFreebetsPayoutUpdated(true);
            }
            setTimeout(() => {
                if (isBonusSound) {
                    playAudio('BBCountingStart', true);
                }
                else {
                    playAudio('balance_start', true);
                }
            }, 500);
            VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('showWinPopup', data);
        };
        this.hideWinPopup = () => {
            const { freebetsCommon: { listRemoveByIndex, freebetActive }, } = this.root;
            if (this.retrieveProgressControl.isLocked) {
                this.setRetrieveProgressControl({ isReady: true });
            }
            if (this.isFreebetEnabled && freebetActive?.left === 0) {
                listRemoveByIndex(0);
            }
            this.setActiveWinPopup(false);
            VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('hideWinPopup');
        };
        this.setLongPressTriggered = (value) => {
            this.isLongPressTriggered = value;
        };
        this.setPreloadedDone = (value) => {
            this.isPreloadedDone = value;
        };
        this.openValidationActiveWrenchNotif = (disabled) => {
            if (!this.isActiveWrench || !!this.totalPayout || !disabled)
                return;
            this.removeNotification({ type: 'bonusInfo' });
            this.addNotification({ type: 'unlockBetWarning' });
        };
        this.confirmNewRoundWrench = async () => {
            this.skipWrenchRoundState = {
                totalBetAmount: Number(this.totalBetAmount),
            };
            this.removeNotification({ type: 'unlockBetWarning' });
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
        this.setAmount = (amount) => {
            const { profile: { currency }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.set(`saved_amount:${currency}`, String(amount));
            this.amount = String(amount);
        };
        this.setCashoutAmount = (amount) => {
            const { profile: { currency }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.set(`saved_cashout_amount:${currency}`, amount);
            this.cashoutAmount = amount;
        };
        this.gtmBetPlaced = ({ isHold, multiplier }) => {
            (0,gtmDataLayerPush/* default */.A)({ parameters: null });
            (0,gtmDataLayerPush/* default */.A)({
                action: 'bet_placed',
                sid: this.root.profileCommon.profile.sid,
                parameters: {
                    method: isHold ? 'hold' : 'manual',
                    value: Number((Number(this.cashoutAmount) * this.gameConfig.betAmountMultiplier).toFixed(2)),
                    currency: this.root.profileCommon.profile.currency,
                    multiplier: Number((multiplier / this.gameConfig.betAmountMultiplier).toFixed(2)),
                    object: `bet_1.place`,
                    round_id: this.roundId,
                    id: this.roundId,
                },
            });
        };
        this.gtmBetClosed = ({ isWin, multiplier, method, }) => {
            (0,gtmDataLayerPush/* default */.A)({ parameters: null });
            (0,gtmDataLayerPush/* default */.A)({
                action: 'bet_closed',
                parameters: {
                    id: this.roundId,
                    round_id: this.roundId,
                    method,
                    object: isWin ? 'cashout' : 'lost',
                    value: Number((Number(this.cashoutAmount) * this.gameConfig.betAmountMultiplier).toFixed(2)),
                    currency: this.root.profileCommon.profile.currency,
                    wins: isWin ? 1 : 0,
                    multiplier: Number((multiplier / this.gameConfig.betAmountMultiplier).toFixed(2)),
                },
            });
        };
        this.gtmBonusGame = ({ id, state, multiplier, }) => {
            (0,gtmDataLayerPush/* default */.A)({
                action: 'bonus_game',
                parameters: {
                    id,
                    round_id: id,
                    state,
                    value: Number(this.amount),
                    currency: this.root.profileCommon.profile.currency,
                    wins: 1,
                    bonus_multiplier: multiplier,
                },
            });
        };
        this.gtmTrackCanvasAction = ({ action, }) => {
            (0,gtmDataLayerPush/* default */.A)({ parameters: null });
            (0,gtmDataLayerPush/* default */.A)({
                action: 'tracked_element_clicked',
                event: 'ga4_interaction',
                parameters: {
                    object: action,
                },
            });
        };
        this.getCommonStorage = async () => {
            const { profileCommon: { profile: { token, playerId }, }, } = this.root;
            try {
                const { data } = await (0,vortexaero/* getCommonStorage */.ZT)({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                });
                if (Array.isArray(data.data.userLabelIds)) {
                    this.initLabels(data.data.userLabelIds);
                }
                if (data.data.activeLabel) {
                    this.currentLabelId = data.data.activeLabel;
                }
                if (Array.isArray(data.data.planes)) {
                    this.listOfPlane = new Set(data.data.planes);
                }
                return data;
            }
            catch (error) {
                return error;
            }
        };
        this.setCommonStorage = async ({ key, value }) => {
            const { profileCommon: { profile: { token, playerId }, }, } = this.root;
            try {
                const { data } = await (0,vortexaero/* setCommonStorage */.Ly)({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    key,
                    value,
                });
                return data;
            }
            catch (error) {
                return error;
            }
        };
        this.updateCommonStorage = async ({ key, value }) => {
            const { profileCommon: { profile: { token, playerId }, }, } = this.root;
            try {
                const { data } = await (0,vortexaero/* updateCommonStorage */.e9)({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    key,
                    value,
                });
            }
            catch (error) {
                return error;
            }
        };
        this.setRetrieveGameData = (data) => {
            this.retrieveGameData = data;
        };
        this.setRetrieveProgressControl = (values) => {
            this.retrieveProgressControl = {
                ...this.retrieveProgressControl,
                ...values,
            };
        };
        this.setTurboMode = (value) => {
            this.isTurboMode = value;
        };
        this.setActiveAnticipation = (value) => {
            this.isActiveAnticipation = value;
        };
        this.setWinPopupAnimationCompleted = (value) => {
            this.isWinPopupAnimationCompleted = value;
        };
        this.addNotification = (notif) => {
            const exclusiveTypes = ['bonusInfo', 'unlockBetWarning'];
            if (exclusiveTypes.includes(notif.type)) {
                const hasExclusive = this.notificationList.some((n) => exclusiveTypes.includes(n.type));
                if (hasExclusive)
                    return;
            }
            this.notificationList.push(notif);
        };
        this.clearAllNotification = () => {
            this.notificationList = [];
        };
        this.removeNotification = (notif) => {
            this.notificationList = this.notificationList.filter((n) => n.type !== notif.type);
        };
        this.setActiveWinPopup = (value) => {
            this.isActiveWinPopup = value;
        };
        this.setCanvasAppReady = (value) => {
            this.isCanvasAppReady = value;
        };
        this.setCanvasLoaded = (value) => {
            this.isCanvasLoaded = value;
        };
        this.setDisableControls = (value) => {
            this.isDisabledControls = value;
        };
        this.setProgressLinesAnimationCompleted = (value) => {
            this.isProgressLinesAnimationCompleted = value;
        };
        this.openHangar = () => {
            const { audioCommon: { playAudio }, } = this.root;
            playAudio('ui_generic');
            this.isOpneHangar = true;
            this.gtmTrackCanvasAction({ action: 'hangar.open' });
        };
        this.hideHangar = () => {
            const { audioCommon: { playAudio }, } = this.root;
            playAudio('ui_generic');
            this.isOpneHangar = false;
            this.gtmTrackCanvasAction({ action: 'hangar.close' });
        };
        this.clickToWrenchButton = () => {
            this.addNotification({ type: 'notif', text: i18next_js_["default"].t('VORTEX_AERO.NOTIF.WRENCH') });
            this.gtmTrackCanvasAction({ action: 'wrench.info' });
        };
        this.clickToInfoButton = () => {
            this.addNotification({ type: 'bonusInfo' });
            this.gtmTrackCanvasAction({ action: 'bonus.info' });
        };
        this.setActivePlateAnimation = (value) => {
            this.isActivePlateAnimation = value;
        };
        this.initLabels = (totalLabels) => {
            this.availableLabelIds = this.baseAvailableLabelIds.filter((id) => !totalLabels.includes(id));
            this.userLabelIds = totalLabels;
        };
        this.interruptGame = async () => {
            const { profile: { token, apiKey }, } = this.root.profileCommon;
            try {
                const { data } = await (0,vortexaero/* gameInterruptRequest */.v0)({
                    headers: {
                        authorization: token,
                        apikey: apiKey,
                    },
                    roundId: this.roundId,
                    version: this.apiVersion,
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    this.roundId = data.roundId;
                    this.gameState.cashable = data.state?.cashable;
                    this.gameState.initial = data.state?.initial;
                    this.isActiveCashout = data.state?.cashable;
                });
                setTimeout(() => {
                    this.root.balanceCommon.updateBalanceFromTicketId(this.betId);
                }, 2000);
            }
            catch (error) {
                console.log('fetchGame error:', error);
                return error;
            }
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.bonusGameStore = new BonusGameStore.BonusGameStore(this);
        this.root = root;
        this.centrifuge = new (centrifuge_js_default())((0,config/* config */.$)().centrifuge || '', {
            debug: (0,bootstrap.GET_ENV)().NODE_ENV === 'development',
        });
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.getCommonStorage();
            this.retrieveAmount();
            this.retrieveGame();
            this.getGameSettings();
            const { search } = document.location;
            const urlParams = new URLSearchParams(search);
            const mockedData = urlParams.get('mockedData');
            if (mockedData === 'true') {
                this.isMockedData = true;
            }
            const { profile: { splitTest }, } = this.root.profileCommon;
            if (splitTest?.variantValue === 'vortexaero_ui') {
                if (splitTest?.variantType === 'test') {
                    this.splitTestVariants = {
                        ...this.splitTestVariants,
                        isAlternativeUITestB: true,
                    };
                }
                else if (splitTest?.variantType === 'test2') {
                    this.splitTestVariants = {
                        ...this.splitTestVariants,
                        isAlternativeUITestC: true,
                    };
                }
            }
            this.isProfileReady = true;
        });
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'holdcrash';
        this.gameServerTheme = gameConfig.gameServerTheme || 'default';
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [
                {
                    amount: normalizeAndTruncateAmount(Number(this.amount) * this.gameConfig.betAmountMultiplier, this.root.profileCommon.profile.rounding),
                },
            ];
        }, (index, { amount }) => {
            this.setAmount(normalizeAndTruncateAmount(Number(amount) / this.gameConfig.betAmountMultiplier, this.root.profileCommon.profile.rounding));
        });
        (0,mobx_esm_js_.reaction)(() => ({
            initial: this.gameState.initial,
            gameHasProgress: this.gameHasProgress,
            freebetEnabled: this.root.freebetsCommon.freebetEnabled,
        }), ({ initial, gameHasProgress, freebetEnabled }) => {
            if ((initial && !gameHasProgress) || freebetEnabled) {
                this.root.freebetsCommon.setForcedDisabledFreebets(null);
            }
            else if (!initial && !this.root.freebetsCommon.freebetEnabled) {
                this.root.freebetsCommon.setForcedDisabledFreebets(true);
            }
        });
        (0,mobx_esm_js_.reaction)(() => [this.gameState.initial], () => {
            this.root.freebetsCommon.setIsGameInProgress(!this.gameState.initial);
            if (this.root.freebetsCommon.freebetEnabled) {
                this.root.freebetsCommon.setOnFreebetChange({
                    callback: () => {
                        this.interruptGame();
                        this.root.freebetsCommon.listRemoveByIndex(0);
                    },
                    showConfirm: true,
                    additionalText: !this.gameState.initial && (0,i18next_js_.t)('FREEBETS.LOSE_PROGRESS'),
                });
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isProfileReady: this.isProfileReady,
            isCanvasAppReady: this.isCanvasAppReady,
            isRetrieveFinished: this.isRetrieveFinished,
        }), ({ isProfileReady, isCanvasAppReady, isRetrieveFinished }) => {
            if (isCanvasAppReady && isProfileReady && isRetrieveFinished && !this.isInitCompleted) {
                this.handleInit();
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            retrieveGameData: this.retrieveGameData,
            isHidePreloader: this.root.uiCommon.appReady,
            isRetrieveFinished: this.isRetrieveFinished,
            isLocked: this.retrieveProgressControl.isLocked,
            isReady: this.retrieveProgressControl.isReady,
            isErrorPlace: this.isErrorPlace,
            isInitCompleted: this.isInitCompleted,
        }), ({ retrieveGameData, isHidePreloader, isRetrieveFinished, isLocked, isReady, isErrorPlace, isInitCompleted }) => {
            if (isErrorPlace)
                return;
            if (!isInitCompleted)
                return;
            if (isRetrieveFinished && isHidePreloader) {
                const activeAuctionPopup = JSON.parse(localStorageHelper/* default */.A.get('activeAuctionPopup'));
                const prevCoefficientBonusGame = JSON.parse(localStorageHelper/* default */.A.get('prevCoefficientBonusGame'));
                if (activeAuctionPopup && prevCoefficientBonusGame && this.retrieveGameData?.roundId) {
                    localStorageHelper/* default */.A.set('activeAuctionPopup', null);
                    localStorageHelper/* default */.A.set('prevCoefficientBonusGame', null);
                    this.showWinPopup({
                        coefficient: prevCoefficientBonusGame,
                        roundId: this.retrieveGameData.roundId,
                        isBonusSound: false,
                    });
                }
                if (retrieveGameData) {
                    if (retrieveGameData.bonusbuy === true) {
                        if (retrieveGameData.state.amount) {
                            this.setAmount(Number(retrieveGameData.state.amount));
                        }
                        this.bonusGameStore.serBonusRetrieveData(retrieveGameData);
                        this.setRetrieveGameData(null);
                    }
                    const isRunProgresAfterRetrive = retrieveGameData.bonusbuy === false && (!isLocked || isReady);
                    if (isRunProgresAfterRetrive) {
                        this.nonce = retrieveGameData.nonce;
                        this.roundId = retrieveGameData.roundId;
                        this.isActiveCashout = retrieveGameData.state.cashable;
                        this.isActiveWrench = retrieveGameData.state.wrench;
                        if (this.isActiveWrench) {
                            VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('handleeWrenchBtn', { isActive: true });
                        }
                        if (retrieveGameData.state.amount) {
                            const amount = normalizeAndTruncateAmount(retrieveGameData.state.amount / this.gameConfig.betAmountMultiplier, this.root.profileCommon.profile.rounding);
                            this.setAmount(amount);
                        }
                        const collection = retrieveGameData.state.collection;
                        const firstLine = collection[0];
                        const secondLine = collection[1];
                        const thirdLine = collection[2];
                        (0,mobx_esm_js_.runInAction)(() => {
                            this.setProgressState({ firstLine, secondLine, thirdLine });
                            this.runPlaneSkinAnimation();
                            this.handlePlayIntro();
                        });
                        (0,mobx_esm_js_.runInAction)(() => {
                            this.setRetrieveGameData(null);
                            this.setRetrieveProgressControl({ isReady: false, isLocked: false });
                        });
                    }
                }
                if (!this.isPlayIntro) {
                    this.handlePlayIntro();
                }
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isErrorPlace: this.isErrorPlace,
            isRetrieveFinished: this.isRetrieveFinished,
            retrieveGameData: this.retrieveGameData,
            isErroCreateGame: this.isErroCreateGame,
            isErrorCashout: this.isErrorCashout,
        }), ({ isErrorPlace, isRetrieveFinished, retrieveGameData, isErroCreateGame, isErrorCashout }) => {
            if (isErrorPlace && retrieveGameData?.bonusbuy === false) {
                const collection = retrieveGameData.state.collection;
                const firstLine = collection[0];
                const secondLine = collection[1];
                const thirdLine = collection[2];
                (0,mobx_esm_js_.runInAction)(() => {
                    this.setProgressState({ firstLine, secondLine, thirdLine });
                    this.runPlaneSkinAnimation();
                    this.handlePlayIntro();
                    this.setRetrieveGameData(null);
                    const reels = retrieveGameData.state.symbols.map((symbol, index) => [this.getSymbolId(symbol, index)]);
                    VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('sendReelsResult', { reels, isAnticipation: this.isAnticipation });
                });
            }
            else if (isErrorPlace && isErroCreateGame) {
                const reels = [[1], [1], [1]];
                (0,mobx_esm_js_.runInAction)(() => {
                    this.isErroCreateGame = false;
                    this.setProgressState({ firstLine: 0, secondLine: 0, thirdLine: 0 });
                    this.setPlaneSkinsState({ engine: 0, body: 0, wings: 0 });
                });
                VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('setProgressLines', this.progressState);
                this.runPlaneSkinAnimation();
                VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('sendReelsResult', { reels, isAnticipation: this.isAnticipation });
            }
            else if (isErrorCashout && isErroCreateGame) {
                (0,mobx_esm_js_.runInAction)(() => {
                    this.isErrorPlace = false;
                    this.isErrorCashout = false;
                    this.isActiveCashout = false;
                    this.setProgressState({ firstLine: 0, secondLine: 0, thirdLine: 0 });
                    this.setPlaneSkinsState({ engine: 0, body: 0, wings: 0 });
                });
                VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('setProgressLines', this.progressState);
                this.runPlaneSkinAnimation();
                this.setDisableControls(false);
            }
            else if (isErrorCashout && retrieveGameData?.bonusbuy === false) {
                const collection = retrieveGameData.state.collection;
                const firstLine = collection[0];
                const secondLine = collection[1];
                const thirdLine = collection[2];
                (0,mobx_esm_js_.runInAction)(() => {
                    this.setProgressState({ firstLine, secondLine, thirdLine });
                    this.runPlaneSkinAnimation();
                    this.handlePlayIntro();
                    this.setRetrieveGameData(null);
                    VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('spinReels', { isTurbo: this.isTurboMode });
                });
                const reels = retrieveGameData.state.symbols.map((symbol, index) => [this.getSymbolId(symbol, index)]);
                VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('sendReelsResult', { reels, isAnticipation: this.isAnticipation });
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            totalBetAmount: this.totalBetAmount,
            skipWrenchRoundState: this.skipWrenchRoundState,
        }), ({ totalBetAmount, skipWrenchRoundState }) => {
            if (skipWrenchRoundState) {
                if (skipWrenchRoundState.totalBetAmount !== Number(totalBetAmount)) {
                    VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('handleeWrenchBtn', { isActive: false });
                }
                else {
                    VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('handleeWrenchBtn', { isActive: true });
                }
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isWinPopupAnimationCompleted: this.isWinPopupAnimationCompleted,
        }), async ({ isWinPopupAnimationCompleted }) => {
            if (isWinPopupAnimationCompleted) {
                const { audioCommon: { stopAudio, playAudio }, } = this.root;
                if (this.modalConfig.isBonusSound) {
                    stopAudio('BBCountingStart');
                }
                else {
                    stopAudio('balance_start');
                }
                await (0,timeout/* default */.A)(1 / 10);
                if (this.modalConfig.isBonusSound) {
                    playAudio('BBCountingStop');
                }
                else {
                    playAudio('balance_stop');
                }
                await (0,timeout/* default */.A)(1 / 10);
                this.updateBalance(null, this.modalConfig.roundId);
                this.setWinPopupAnimationCompleted(false);
                setTimeout(() => {
                    this.hideWinPopup();
                    this.setDisableControls(false);
                }, 1000);
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            gameSettings: this.gameSettings,
        }), ({ gameSettings }) => {
            if (gameSettings && gameSettings?.multipliers) {
                this.baseMultipliers = {
                    firstLine: gameSettings.multipliers.Symbol3.slice(0, 8),
                    secondLine: gameSettings.multipliers.Symbol2.slice(0, 6),
                    thirdLine: gameSettings.multipliers.Symbol1.slice(0, 4),
                };
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isEnabled: this.root.quickModeCommon.enabled,
        }), ({ isEnabled }) => {
            this.setTurboMode(isEnabled);
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isActiveAnticipation: this.isActiveAnticipation,
        }), ({ isActiveAnticipation }) => {
            const { audioCommon: { stopAudio, playAudio }, } = this.root;
            if (isActiveAnticipation) {
                playAudio('anticipation');
            }
            else {
                stopAudio('anticipation');
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isCanvasLoaded: this.isCanvasLoaded,
            isRetrieveFinished: this.isRetrieveFinished,
        }), ({ isCanvasLoaded, isRetrieveFinished }) => {
            if (isCanvasLoaded && isRetrieveFinished) {
                this.setPreloadedDone(true);
            }
            this.root.uiCommon.setAppReady(isCanvasLoaded && isRetrieveFinished);
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isUpdateBalance: this.isUpdateBalance,
        }), ({ isUpdateBalance }) => {
            if (isUpdateBalance) {
                this.isUpdateBalance = false;
                setTimeout(() => {
                }, 1000);
            }
        });
        (0,mobx_esm_js_.reaction)(() => [this.root.freebetsCommon.freebetEnabled], () => {
            if (this.gameHasProgress && !this.root.freebetsCommon.freebetEnabled) {
                this.interruptGame();
                this.root.freebetsCommon.listRemoveByIndex(0);
                this.setProgressState({ firstLine: 0, secondLine: 0, thirdLine: 0 });
                VortexAeroCanvasController/* vortexAeroCanvasController */.A.invoke('setProgressLines', this.progressState);
            }
        });
    }
    get gameHasProgress() {
        return (this.progressState.currentData.firstLine > 0 ||
            this.progressState.currentData.secondLine > 0 ||
            this.progressState.currentData.thirdLine > 0);
    }
    setIsAutoCashout(value) {
        this.isAutoCashout = value;
    }
    setIsFreebetsPayoutUpdated(value) {
        this.isFreebetsPayoutUpdated = value;
    }
    get totalBetAmount() {
        return normalizeAndTruncateAmount(Number(this.amount) * this.gameConfig.betAmountMultiplier, this.root.profileCommon.profile.rounding);
    }
    get maxBet() {
        const { profileCommon: { profile: { rounding }, limit: { maxBet }, }, } = this.root;
        return normalizeAndTruncateAmount(maxBet / this.gameConfig.betAmountMultiplier, rounding);
    }
    get isActiveRound() {
        const { firstLine, secondLine, thirdLine } = this.progressState.currentData;
        return !!firstLine || !!secondLine || !!thirdLine;
    }
    get totalPayout() {
        const { firstLine, secondLine, thirdLine } = this.progressState.currentData;
        const amount = Number(this.amount) || 0;
        const getMultiplier = (map, key) => {
            return map[key] ?? map[key - 1] ?? 0;
        };
        const firstLinePayout = getMultiplier(this.baseMultipliers.firstLine, firstLine) * amount;
        const secondLinePayout = getMultiplier(this.baseMultipliers.secondLine, secondLine) * amount;
        const thirdLinePayout = getMultiplier(this.baseMultipliers.thirdLine, thirdLine) * amount;
        const total = firstLinePayout + secondLinePayout + thirdLinePayout;
        return Number((total || 0).toFixed(2));
    }
    get partPayout() {
        const { firstLine, secondLine, thirdLine } = this.progressState.currentData;
        const amount = Number(this.amount) || 0;
        let firstLinePartPayout = 0;
        let secondLinePartPayout = 0;
        let thirdLinePartPayout = 0;
        const getValue = (map, key) => Number(map?.[key] ?? 0);
        if (firstLine >= 2 || secondLine >= 2 || thirdLine >= 2) {
            if (firstLine === 1) {
                firstLinePartPayout = getValue(this.baseMultipliers.firstLine, firstLine);
            }
            else if (firstLine === 8) {
                firstLinePartPayout =
                    getValue(this.baseMultipliers.firstLine, firstLine - 1) -
                        getValue(this.baseMultipliers.firstLine, firstLine - 2);
            }
            else if (firstLine >= 2) {
                firstLinePartPayout =
                    getValue(this.baseMultipliers.firstLine, firstLine) - getValue(this.baseMultipliers.firstLine, firstLine - 1);
            }
            if (secondLine === 1) {
                secondLinePartPayout = getValue(this.baseMultipliers.secondLine, secondLine);
            }
            else if (secondLine === 6) {
                secondLinePartPayout =
                    getValue(this.baseMultipliers.secondLine, secondLine - 1) -
                        getValue(this.baseMultipliers.secondLine, secondLine - 2);
            }
            else if (secondLine >= 2) {
                secondLinePartPayout =
                    getValue(this.baseMultipliers.secondLine, secondLine) -
                        getValue(this.baseMultipliers.secondLine, secondLine - 1);
            }
            if (thirdLine === 1) {
                thirdLinePartPayout = getValue(this.baseMultipliers.thirdLine, thirdLine);
            }
            else if (thirdLine === 4) {
                thirdLinePartPayout =
                    getValue(this.baseMultipliers.thirdLine, thirdLine - 1) -
                        getValue(this.baseMultipliers.thirdLine, thirdLine - 2);
            }
            else if (thirdLine >= 2) {
                thirdLinePartPayout =
                    getValue(this.baseMultipliers.thirdLine, thirdLine) - getValue(this.baseMultipliers.thirdLine, thirdLine - 1);
            }
        }
        return Number(((firstLinePartPayout + secondLinePartPayout + thirdLinePartPayout) * amount).toFixed(2));
    }
    get isFreebetEnabled() {
        const { freebetsCommon: { freebetEnabled, forcedDisabledFreebets }, } = this.root;
        return freebetEnabled && !forcedDisabledFreebets;
    }
    checkActiveSymbolSkin(array) {
        this.symbolSkinState = {};
        this.rouldUserLabelIds = [];
        for (let i = 0; i < array.length; i++) {
            const rell = array[i];
            const symbolSkinID = this.availableLabelIds[0];
            const probability = 1 - this.userLabelIds.length / 12;
            const isChance = Math.random() < probability;
            if (rell?.symbol === 'SymbolSkin' && symbolSkinID && isChance) {
                this.availableLabelIds = this.availableLabelIds.slice(1);
                this.userLabelIds = [...this.userLabelIds, symbolSkinID];
                this.rouldUserLabelIds = [...this.rouldUserLabelIds, symbolSkinID];
                this.symbolSkinState = {
                    ...this.symbolSkinState,
                    [i]: symbolSkinID,
                };
            }
        }
        if (this.rouldUserLabelIds.length) {
            this.updateUserLabelIds(this.userLabelIds);
            this.updateActiveLabel(this.rouldUserLabelIds.at(-1));
        }
    }
    getSymbolId(symbol, index) {
        if (symbol === 'SymbolSkin') {
            if (!this.symbolSkinState[index])
                return 0;
            const symbolSkinID = this.rouldUserLabelIds[0];
            this.rouldUserLabelIds = this.rouldUserLabelIds.slice(1);
            return symbolSkinID;
        }
        return SYMBOL_ID_MAP[symbol] ?? 0;
    }
    getValidReels(symbols) {
        const pairMap = {};
        let firstHIndex = null;
        let firstHBase = null;
        symbols.forEach((symbol, index) => {
            if (symbol.endsWith('h')) {
                const base = symbol.replace(/h$/, '');
                if (firstHIndex === null) {
                    firstHIndex = index;
                    firstHBase = base;
                }
                else if (base === firstHBase) {
                    pairMap[firstHIndex] = null;
                    pairMap[index] = this.getSymbolId(base, index);
                    firstHIndex = null;
                    firstHBase = null;
                }
            }
        });
        const reels = symbols.map((symbol, index) => {
            if (symbol === 'SymbolWrench') {
                return [null];
            }
            if (symbol === 'SymbolSkin') {
                return [0];
            }
            if (symbol !== 'SymbolWrench' && index in pairMap) {
                return [pairMap[index] ?? null];
            }
            return [this.getSymbolId(symbol, index)];
        });
        return reels;
    }
    checkBonusWin(array, isHold) {
        this.hasBonusWin = null;
        for (let i = 0; i < array.length; i++) {
            const bonusWin = array[i]?.bonusWin;
            const superBonusState = array[i]?.superBonusState;
            const isActiveRegularBonus = !!bonusWin && !superBonusState;
            if (isActiveRegularBonus) {
                this.hasBonusWin = {
                    ...this.hasBonusWin,
                    [i]: {
                        bonusWin: bonusWin,
                        isActive: true,
                        isHold,
                    },
                };
            }
            if (superBonusState) {
                this.bonusGameStore.setBonusGameState({
                    multiplier: superBonusState.multiplier,
                    roundId: this.roundId,
                    betId: this.betId,
                    baseMultiplier: bonusWin,
                    indexReel: i,
                    isBuy: false,
                });
            }
        }
    }
    getPlaneLevel() {
        const { engine, wings, body } = this.planeSkinsState;
        if (engine >= 3 && wings >= 5 && body >= 7) {
            return 3;
        }
        if (engine >= 3 && wings >= 4 && body >= 6) {
            return 2;
        }
        if (engine >= 2 && wings >= 2 && body >= 5) {
            return 1;
        }
        return null;
    }
    checkMovingSymbol(array) {
        if (!array && !array.length)
            return;
        const seen = new Map();
        this.hasMovingSymbol = null;
        this.isAnticipation = false;
        for (let i = 0; i < array.length; i++) {
            const symbol = array[i].symbol;
            if (symbol === 'SymbolWrench') {
                this.hasActiveWrench = {
                    ...this.hasActiveWrench,
                    [i]: { isActive: false },
                };
            }
            if (i === 2) {
                if (symbol === 'Symbol1d' || symbol === 'Symbol2d' || symbol === 'Symbol3d') {
                    this.isAnticipation = true;
                }
                if (symbol === 'Symbol1h' || symbol === 'Symbol2h' || symbol === 'Symbol3h') {
                    if (Math.random() < 0.1) {
                        this.isAnticipation = true;
                    }
                }
            }
        }
        for (let i = 0; i < array.length; i++) {
            const symbol = array[i].symbol;
            if (!MOVING_SYMBOLS.has(symbol))
                continue;
            if (seen.has(symbol)) {
                const firstIndex = seen.get(symbol);
                this.hasMovingSymbol = {
                    [firstIndex]: {
                        symbol,
                        moveTo: i,
                    },
                    [i]: {
                        symbol,
                        moveIn: i,
                    },
                };
                return;
            }
            seen.set(symbol, i);
        }
    }
}
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "splitTestVariants", void 0);
__decorate([
    mobx_esm_js_.computed
], VortexAeroCommon.prototype, "gameHasProgress", null);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "gameState", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setGameState", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "apiVersion", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isActiveBonusModal", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isRoundStarted", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isWinPopupAnimation", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "gameSettings", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isWinPopupAnimationCompleted", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "modalConfig", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "cashoutAmount", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "roundId", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "skipWrenchRoundState", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "newWrenchRoundId", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "betId", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "lostRounds", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "rounds", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "retrieveGameData", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "retrieveProgressControl", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "baseMultipliers", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "roundSate", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "planeSkinsState", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "currentLabelId", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "prevLabelState", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "listOfPlane", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isActivePlateAnimation", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "progressState", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "reelQueueState", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "symbolSkinState", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "notificationList", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "hasActiveWrench", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "hasMovingSymbol", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "hasBonusWin", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isErrorPlace", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isErrorCashout", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isErroCreateGame", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isInitCompleted", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isPlayIntro", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isRetrieveFinished", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isActiveCashout", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isUpdateBalance", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isOpneHangar", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isActiveWrench", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isProfileReady", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isCanvasAppReady", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isDisabledControls", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isPreloadedDone", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isActiveWinPopup", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isAnticipation", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isProgressLinesAnimationCompleted", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isMockedData", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isActiveAnticipation", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isLongPressTriggered", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isTurboMode", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "availableLabelIds", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "userLabelIds", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "rouldUserLabelIds", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isAutoCashout", void 0);
__decorate([
    mobx_esm_js_.observable
], VortexAeroCommon.prototype, "isFreebetsPayoutUpdated", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setIsAutoCashout", null);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setIsFreebetsPayoutUpdated", null);
__decorate([
    mobx_esm_js_.computed
], VortexAeroCommon.prototype, "totalBetAmount", null);
__decorate([
    mobx_esm_js_.computed
], VortexAeroCommon.prototype, "maxBet", null);
__decorate([
    mobx_esm_js_.computed
], VortexAeroCommon.prototype, "isActiveRound", null);
__decorate([
    mobx_esm_js_.computed
], VortexAeroCommon.prototype, "totalPayout", null);
__decorate([
    mobx_esm_js_.computed
], VortexAeroCommon.prototype, "partPayout", null);
__decorate([
    mobx_esm_js_.computed
], VortexAeroCommon.prototype, "isFreebetEnabled", null);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "handleInit", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "handlePlayIntro", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "handleLocalizations", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "getGameSettings", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "retrieveGame", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "createGame", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "placeBet", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "cashoutFreebets", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "cashout", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "updateBalance", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "movePlane", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "handleReelsAnimationCompleted", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setReelQueueState", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "runReelAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "comletReelAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setProgressState", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setPlaneSkinsState", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "runDecrisProgresLineAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "runReelsAnimationCompletd", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "startReelAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "runProgresLineAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "runPlaneSkinAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "runPlaneLabelAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setPlaneLabels", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "cahngePlaneLabels", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "updateUserLabelIds", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "updateActiveLabel", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "updatePlaneOnHangar", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "showWinPopup", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "hideWinPopup", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setLongPressTriggered", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setPreloadedDone", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "openValidationActiveWrenchNotif", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "confirmNewRoundWrench", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "retrieveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setCashoutAmount", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "gtmBetPlaced", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "gtmBetClosed", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "gtmBonusGame", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "gtmTrackCanvasAction", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "getCommonStorage", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setCommonStorage", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "updateCommonStorage", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setRetrieveGameData", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setRetrieveProgressControl", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setTurboMode", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setActiveAnticipation", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setWinPopupAnimationCompleted", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "addNotification", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "clearAllNotification", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "removeNotification", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setActiveWinPopup", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setCanvasAppReady", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setDisableControls", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setProgressLinesAnimationCompleted", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "openHangar", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "hideHangar", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "clickToWrenchButton", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "clickToInfoButton", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "setActivePlateAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "initLabels", void 0);
__decorate([
    mobx_esm_js_.action
], VortexAeroCommon.prototype, "interruptGame", void 0);
/* harmony default export */ const store_VortexAeroCommon = (VortexAeroCommon);


/***/ })

}]);