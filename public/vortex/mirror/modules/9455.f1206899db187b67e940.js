"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[9455],{

/***/ 75202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getCombination)
/* harmony export */ });
function getCombination({ values: items = [null, null, null, null, null], defaultColor, initialColor, isTest, }) {
    const comboLength = isTest ? 6 : 5;
    const values = [...items].sort();
    if (values.some((item) => item === null)) {
        return { item: null, value: defaultColor, values: [] };
    }
    if (new Set(values).size === 1) {
        return {
            item: comboLength - 1,
            value: values[0],
            values: [values[0]],
            name: '5',
        };
    }
    if (values[0] === values[1] && values[1] === values[2] && values[2] === values[3]) {
        return {
            item: comboLength - 2,
            value: values[0],
            values: [values[0]],
            name: '4',
        };
    }
    if (values[1] === values[2] && values[2] === values[3] && values[3] === values[4]) {
        return {
            item: comboLength - 2,
            value: values[1],
            values: [values[1]],
            name: '4',
        };
    }
    if (values[0] === values[1] && values[1] === values[2] && values[3] === values[4]) {
        return {
            item: comboLength - 3,
            value: values[0],
            values: [values[0], values[4]],
            name: '3+',
        };
    }
    if (values[0] === values[1] && values[2] === values[3] && values[3] === values[4]) {
        return {
            item: comboLength - 3,
            value: values[2],
            values: [values[0], values[4]],
            name: '3+',
        };
    }
    if (values[0] === values[1] && values[1] === values[2]) {
        return {
            item: comboLength - 4,
            value: values[0],
            values: [values[0]],
            name: '3',
        };
    }
    if (values[1] === values[2] && values[2] === values[3]) {
        return {
            item: comboLength - 4,
            value: values[1],
            values: [values[1]],
            name: '3',
        };
    }
    if (values[2] === values[3] && values[3] === values[4]) {
        return {
            item: comboLength - 4,
            value: values[2],
            values: [values[2]],
            name: '3',
        };
    }
    if (values[0] === values[1] && values[2] === values[3]) {
        return {
            item: comboLength - 5,
            value: initialColor === values[2] ? values[2] : values[2],
            values: [values[0], values[2]],
            name: '2+2',
        };
    }
    if (values[0] === values[1] && values[3] === values[4]) {
        return {
            item: comboLength - 5,
            value: initialColor === values[3] ? values[3] : values[0],
            values: [values[0], values[3]],
            name: '2+2',
        };
    }
    if (values[1] === values[2] && values[3] === values[4]) {
        return {
            item: comboLength - 5,
            value: initialColor === values[4] ? values[4] : values[1],
            values: [values[1], values[4]],
            name: '2+2',
        };
    }
    if (comboLength === 6) {
        if (values[0] === values[1]) {
            return {
                item: comboLength - 6,
                value: values[0],
                values: [values[0]],
                name: '2',
            };
        }
        if (values[1] === values[2]) {
            return {
                item: comboLength - 6,
                value: values[1],
                values: [values[1]],
                name: '2',
            };
        }
        if (values[2] === values[3]) {
            return {
                item: comboLength - 6,
                value: values[2],
                values: [values[2]],
                name: '2',
            };
        }
        if (values[3] === values[4]) {
            return {
                item: comboLength - 6,
                value: values[3],
                values: [values[3]],
                name: '2',
            };
        }
    }
    return { item: null, value: defaultColor, values: [] };
}


/***/ }),

/***/ 89455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_CrystalpokerCommon)
});

// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: consume shared module (default) uuid@^9.0.0 (strict) (fallback: ./node_modules/uuid/dist/esm-browser/index.js)
var index_js_ = __webpack_require__(81682);
// EXTERNAL MODULE: consume shared module (default) centrifuge@^2.7.6 (strict) (fallback: ./node_modules/centrifuge/dist/centrifuge.js)
var centrifuge_js_ = __webpack_require__(68239);
var centrifuge_js_default = /*#__PURE__*/__webpack_require__.n(centrifuge_js_);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/crystalpoker/config.ts


const config = () => {
    return {
        development: {
            api: (0,api/* url */.OZ)().host,
            core: `http://localhost:3000/api/common`,
            centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
        },
        production: {
            api: (0,api/* url */.OZ)().host,
            core: `${document.location.origin}/public/api`,
            centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
        },
    }[(0,bootstrap.GET_ENV)().NODE_ENV || 'development'];
};

// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
;// ./src/framework/api/crystalpoker/index.ts


const crystalpoker_api = () => {
    const protocol = config().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config().api}/api`,
    });
};
const placeBetRequest = ({ headers, ...params }) => crystalpoker_api().post('/bets/place', params, { headers });
const createGameRequest = ({ headers, ...params }) => crystalpoker_api().post('/games/create', params, { headers });
const retriveGameRequest = ({ headers, ...params }) => crystalpoker_api().post(`/games/retrive`, params, { headers });
/* harmony default export */ const crystalpoker = ((/* unused pure expression or super */ null && (crystalpoker_api)));

// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/timeout.ts
var timeout = __webpack_require__(9858);
// EXTERNAL MODULE: ./src/framework/helpers/crystalpoker/getCombination.ts
var getCombination = __webpack_require__(75202);
// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
;// ./src/framework/store/CrystalpokerCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class CrystalpokerCommon {
    constructor(root, gameConfig) {
        this.roundId = localStorageHelper/* default */.A.get('roundId');
        this.roundSeed = '';
        this.clientSeed = (0,index_js_.v4)();
        this.nonce = 1;
        this.amount = '1.00';
        this.result = 'initial';
        this.ticketId = '';
        this.payout = 0;
        this.bonusPayout = 0;
        this.coefficient = '0.00';
        this.realCoefficient = '0.00';
        this.placebetProcessing = false;
        this.bonusSkipProcessing = false;
        this.myBetsUpdater = 0;
        this.initialValue = null;
        this.initialValueNext = null;
        this.bonusGameId = null;
        this.bonusGame = null;
        this.bonusGameLength = 0;
        this.bonusProfit = 0;
        this.spinId = null;
        this.bonusSpinId = null;
        this.bonusRoll = false;
        this.bonusRoundIndex = 0;
        this.gameStarted = false;
        this.values = [null, null, null, null, null];
        this.winScreen = false;
        this.winScreenTimeout = null;
        this.winScreenDelayTimeout = null;
        this.placeBonusTimeout = null;
        this.bonusAlert = false;
        this.bonusAlertTimeout = null;
        this.crystalsAnimationFinished = [true, true, true, true, true];
        this.mock = null;
        this.activeGame = 'crystals';
        this.setActiveGame = (activeGame) => {
            this.activeGame = activeGame;
        };
        this.setBonusSkipProcessing = (bonusSkipProcessing) => {
            this.bonusSkipProcessing = bonusSkipProcessing;
        };
        this.setBonusRoll = (bonusRoll) => {
            this.bonusRoll = bonusRoll;
        };
        this.setMock = (mock) => {
            this.mock = mock;
        };
        this.resetMock = () => {
            this.mock = null;
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
        this.setTicketId = (ticketId) => {
            this.ticketId = ticketId;
        };
        this.setCoefficient = (coefficient) => {
            this.coefficient = String(coefficient);
        };
        this.setResult = (result) => {
            if (result === 'won') {
                this.root.trackingCommon.addWin();
            }
            this.result = result;
        };
        this.fetchGame = async () => {
            const { clientSeed, nonce } = this;
            const { profileCommon: { profile: { token, playerId }, }, } = this.root;
            try {
                const { data: { roundId, initialValue }, } = await createGameRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed,
                    nonce,
                    theme: this.gameServerTheme,
                });
                this.setGame(roundId);
                return roundId;
            }
            catch (error) {
                console.log('fetchGame error:', error);
                return error;
            }
        };
        this.setGame = (roundId = '') => {
            this.roundId = roundId;
            localStorageHelper/* default */.A.set('roundId', roundId);
        };
        this.placeBonus = async () => {
            const gameName = this.gameConfig.bonusGamesList[this.bonusGameId];
            const bonusGameConfig = this.gameConfig.bonusGames[gameName];
            if (!bonusGameConfig)
                return;
            const { duration } = bonusGameConfig;
            const { results, coefficient } = this.bonusGame;
            const [resultItem, ...restResults] = results;
            const { result, items } = coefficient;
            const [coefficientsItem, ...restCoefficients] = items;
            this.setBonusProfit((0,truncateDecimals/* default */.A)(this.bonusProfit + coefficientsItem * Number(this.amount), this.root.profileCommon.profile.rounding));
            if (this.winScreenTimeout)
                clearTimeout(this.winScreenTimeout);
            if (this.placeBonusTimeout)
                clearTimeout(this.placeBonusTimeout);
            this.setWinScreen(false);
            this.placeBonusTimeout = window.setTimeout(() => {
                this.updateBonusSpinId();
                const newBonusGame = {
                    results: restResults,
                    coefficient: {
                        result,
                        items: restCoefficients,
                    },
                };
                this.setBonusGame(newBonusGame);
            }, duration);
            if (!restResults.length) {
                if (this.placeBonusTimeout)
                    clearTimeout(this.placeBonusTimeout);
                this.showWinScreen(true);
                const { newRoundOnAutobetDelay, newRoundAfterBonusDelay } = this.gameConfig;
                await (0,timeout/* default */.A)((this.root.autobetCommon.autoBetEnabled ? newRoundOnAutobetDelay : newRoundAfterBonusDelay) / 1000);
                this.setInitialValue(this.initialValueNext);
                this.setGameStarted(false);
                this.setPlacebetProcessing(false);
                this.resetBonusGame();
                this.setGameStarted(false);
                this.setActiveGame('crystals');
            }
        };
        this.skipBonus = async () => {
            if (this.bonusSkipProcessing)
                return;
            if (!this.bonusGame)
                return null;
            if (this.bonusGameId === null)
                return null;
            if (this.placeBonusTimeout)
                clearTimeout(this.placeBonusTimeout);
            this.setBonusSkipProcessing(true);
            this.setActiveGame('crystals');
            this.showWinScreen(true);
            const { newRoundOnAutobetDelay, newRoundAfterBonusDelay } = this.gameConfig;
            await (0,timeout/* default */.A)((this.root.autobetCommon.autoBetEnabled ? newRoundOnAutobetDelay : newRoundAfterBonusDelay) / 1000);
            this.setInitialValue(this.initialValueNext);
            this.setGameStarted(false);
            this.setPlacebetProcessing(false);
            this.resetBonusGame();
            this.setGameStarted(false);
        };
        this.place = async () => {
            this.setGameStarted(true);
            this.setPlacebetProcessing(true);
            const { profileCommon: { profile: { token, playerId, currency, subPartnerId, balance }, splitTest, }, uiCommon: { isMobile, showNotEnoughBalanceError }, autobetCommon: { autoBetEnabled }, } = this.root;
            const { roundId } = this;
            if (balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
                return;
            }
            if (!roundId) {
                throw new Error('no roundId');
            }
            try {
                this.cancelShowWinScreen();
                this.resetBonusGame();
                this.setCrystalsAnimationFinished();
                this.setValues();
                const variantValue = splitTest?.variantValue;
                const variantType = splitTest?.variantType;
                const isTest = variantValue === 'crystalpoker_lower_volatility' && variantType === 'test';
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
                    roundId: roundId,
                    amount: Number(this.amount),
                    currency,
                    theme: this.gameServerTheme,
                    mock: this.mock !== null && this.mock !== undefined && this.mock.length ? Number(this.mock) : undefined,
                    ...(isTest && { splitTest: isTest }),
                });
                this.fetchGame();
                const { data: { result, payout, bonusGameId, bonusGame, values, initialValue, realCoefficient, coefficient, id }, } = respond;
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_placed',
                    sid: this.root.profileCommon.profile.sid,
                    parameters: {
                        value: this.amount,
                        currency: this.root.profileCommon.profile.currency,
                        method: !autoBetEnabled ? 'manual' : 'auto',
                        object: `bet_1.place`,
                        round_id: roundId,
                        id: roundId,
                    },
                });
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_closed',
                    parameters: {
                        id: roundId,
                        round_id: roundId,
                        method: !autoBetEnabled ? 'manual' : 'auto',
                        object: result === 'won' ? 'cashout' : 'lost',
                        value: this.amount,
                        currency: this.root.profileCommon.profile.currency,
                        wins: result === 'won' ? 1 : 0,
                        multiplier: coefficient,
                        state: this.gameConfig.bonusGamesList[bonusGameId] || 0,
                        bonus_multiplier: bonusGame ? bonusGame.coefficient.result : 0,
                    },
                });
                this.setTicketId(id);
                this.setCoefficient(coefficient);
                this.updateSpinId();
                this.setValues(values);
                this.setInitialValue(initialValue);
                this.setResult(result);
                this.setPayout(payout);
                await this.waitForAnimationFinish();
                if (bonusGame) {
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'bonus_game',
                        parameters: {
                            id: roundId,
                            round_id: roundId,
                            state: this.gameConfig.bonusGamesList[bonusGameId] || 0,
                            bonus_multiplier: bonusGame.coefficient.result,
                            value: (0,truncateDecimals/* default */.A)(bonusGame.coefficient.result * Number(this.amount), this.root.profileCommon.profile.rounding),
                            currency: this.root.profileCommon.profile.currency,
                        },
                    });
                    this.setBonusPayout((0,truncateDecimals/* default */.A)(bonusGame.coefficient.result * Number(this.amount), this.root.profileCommon.profile.rounding));
                    this.setBonusGameId(bonusGameId);
                    this.setBonusGame(bonusGame);
                    this.setBonusGameLength(bonusGame.results.length);
                    await (0,timeout/* default */.A)(this.gameConfig.bonusRollDelay / 1000);
                    this.setBonusRoll(true);
                    await (0,timeout/* default */.A)(this.gameConfig.bonusRollDuration / 1000);
                    this.showBonusAlert();
                    await (0,timeout/* default */.A)(this.gameConfig.bonusStartDelay / 1000);
                    this.setActiveGame(this.gameConfig.bonusGamesList[bonusGameId]);
                    await (0,timeout/* default */.A)(this.gameConfig.bonusPlayDelay / 1000);
                    this.updateBonusSpinId();
                    this.clearSpinId();
                }
                if (result === 'won' && !bonusGame) {
                    if (bonusGameId !== null) {
                        this.setBonusGameId(bonusGameId);
                        await (0,timeout/* default */.A)(this.gameConfig.bonusRollDelay / 1000);
                        this.setBonusRoll(true);
                        await (0,timeout/* default */.A)(this.gameConfig.bonusRollDuration / 1000);
                        this.showWinScreen();
                        const { newRoundOnAutobetDelay, newRoundDelay } = this.gameConfig;
                        await (0,timeout/* default */.A)((autoBetEnabled ? newRoundOnAutobetDelay : newRoundDelay) / 1000);
                        this.setInitialValue(this.initialValueNext);
                        this.setGameStarted(false);
                        this.setPlacebetProcessing(false);
                    }
                    if (bonusGameId === null) {
                        this.showWinScreen();
                        const { newRoundOnAutobetDelay, newRoundDelay } = this.gameConfig;
                        await (0,timeout/* default */.A)((autoBetEnabled ? newRoundOnAutobetDelay : newRoundDelay) / 1000);
                        this.setInitialValue(this.initialValueNext);
                        this.setGameStarted(false);
                        this.setPlacebetProcessing(false);
                    }
                }
                if (result === 'lost') {
                    await (0,timeout/* default */.A)(this.gameConfig.newRoundDelay / 1000);
                    this.setInitialValue(this.initialValueNext);
                    this.setGameStarted(false);
                    this.setPlacebetProcessing(false);
                }
                if (this.root.tournamentsCommon && this.root.tournamentsCommon.addBet) {
                    this.root.tournamentsCommon.addBet({
                        amount: Number(this.amount),
                    });
                }
                this.root.trackingCommon.startSession(this.roundId);
                this.root.trackingCommon.addBet({
                    amount: Number(this.amount),
                    id: this.roundId,
                }, autoBetEnabled);
            }
            catch (error) {
                this.fetchGame();
                this.setInitialValue(this.initialValueNext);
                this.setGameStarted(false);
                this.setPlacebetProcessing(false);
                this.root.uiCommon.errorCodeResolver(error.response, () => { });
                return error;
            }
        };
        this.setAmount = (amount) => {
            const { profile: { currency }, } = this.root.profileCommon;
            localStorageHelper/* default */.A.set(`saved_amount:${currency}`, amount);
            this.amount = String(amount);
        };
        this.setGameStarted = (gameStarted) => {
            this.gameStarted = gameStarted;
        };
        this.setInitialValue = (initialValue) => {
            this.initialValue = initialValue;
        };
        this.setInitialValueNext = (initialValueNext) => {
            this.initialValueNext = initialValueNext;
        };
        this.setBonusGameId = (bonusGameId) => {
            this.bonusGameId = bonusGameId;
        };
        this.setBonusGame = (bonusGame) => {
            this.bonusGame = bonusGame;
        };
        this.setBonusGameLength = (bonusGameLength) => {
            this.bonusGameLength = bonusGameLength;
        };
        this.setValues = (values = [null, null, null, null, null]) => {
            this.values = values;
        };
        this.setPlacebetProcessing = (processing) => {
            this.placebetProcessing = processing;
        };
        this.updateSpinId = () => {
            this.spinId = (0,index_js_.v4)();
        };
        this.clearSpinId = () => {
            this.spinId = null;
        };
        this.updateBonusSpinId = () => {
            this.bonusSpinId = (0,index_js_.v4)();
        };
        this.clearBonusSpinId = () => {
            this.bonusSpinId = null;
        };
        this.setCrystalsAnimationFinished = (index) => {
            if (index === undefined) {
                this.crystalsAnimationFinished = [false, false, false, false, false];
                return;
            }
            this.crystalsAnimationFinished = this.crystalsAnimationFinished.map((item, i) => (i === index ? true : item));
        };
        this.setPayout = (payout) => {
            this.payout = payout;
        };
        this.setBonusPayout = (bonusPayout) => {
            this.bonusPayout = bonusPayout;
        };
        this.setWinScreen = (winScreen) => {
            this.winScreen = winScreen;
        };
        this.showWinScreen = (isBonus = false) => {
            const { profileCommon: { splitTest }, } = this.root;
            const variantValue = splitTest?.variantValue;
            const variantType = splitTest?.variantType;
            const isTest = variantValue === 'crystalpoker_lower_volatility' && variantType === 'test';
            this.winScreenDelayTimeout = window.setTimeout(() => {
                this.setWinScreen(true);
                this.root.balanceCommon.updateBalanceFromTicketId(this.ticketId);
            }, isTest && (this.combination.name === '2' || this.combination.name === '2+2') ? 0 : this.gameConfig.winDelay);
            this.winScreenTimeout = window.setTimeout(() => {
                this.setWinScreen(false);
            }, isBonus ? this.gameConfig.winBonusDuration : this.gameConfig.winDuration + this.gameConfig.winDelay);
        };
        this.setBonusAlert = (bonusAlert) => {
            this.bonusAlert = bonusAlert;
        };
        this.showBonusAlert = () => {
            this.setBonusAlert(true);
            this.bonusAlertTimeout = window.setTimeout(() => {
                this.setBonusAlert(false);
            }, this.gameConfig.bonusAlertDuration);
        };
        this.cancelShowWinScreen = () => {
            if (this.winScreenDelayTimeout) {
                clearTimeout(this.winScreenDelayTimeout);
                this.winScreenDelayTimeout = null;
            }
            if (this.winScreenTimeout) {
                clearTimeout(this.winScreenTimeout);
                this.winScreenTimeout = null;
            }
            this.setWinScreen(false);
        };
        this.resetBonusGame = () => {
            this.setBonusGame(null);
            this.setBonusGameId(null);
            this.setBonusGameLength(0);
            this.setBonusProfit(0);
            this.setBonusRoll(false);
            this.clearBonusSpinId();
            this.setBonusSkipProcessing(false);
        };
        this.setBonusProfit = (bonusProfit) => {
            this.bonusProfit = bonusProfit;
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'crystalpoker';
        this.gameServerTheme = gameConfig.gameServerTheme || 'crystalpoker';
        this.values = gameConfig.defaultValues;
        this.centrifuge = new (centrifuge_js_default())(config().centrifuge || '', {
            debug: (0,bootstrap.GET_ENV)().NODE_ENV === 'development',
        });
        this.root.profileCommon.auth(this.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.retreiveAmount();
            this.fetchGame();
        });
    }
    get crystalsAnimationFinishedAll() {
        return this.crystalsAnimationFinished.every((item) => item);
    }
    get winLevel() {
        let level = 0;
        for (let i = 0; i < this.gameConfig.winLevelList.length; i++) {
            if (Number(this.coefficient) >= this.gameConfig.winLevelList[i])
                level = i;
        }
        return level;
    }
    get lockedUi() {
        const { autoBetEnabled } = this.root.autobetCommon;
        return autoBetEnabled;
    }
    get lockedButtons() {
        const { uiCommon: { amountError }, } = this.root;
        return !!amountError || this.placebetProcessing;
    }
    get combination() {
        const { profileCommon: { splitTest }, } = this.root;
        const { gameColorsMap } = this.gameConfig;
        const initialColor = gameColorsMap[this.initialValue];
        const values = this.values.map((value) => this.gameConfig.gameColorsMap[value] || value);
        const variantValue = splitTest?.variantValue;
        const variantType = splitTest?.variantType;
        const isTest = variantValue === 'crystalpoker_lower_volatility' && variantType === 'test';
        return (0,getCombination/* default */.A)({ values, defaultColor: this.gameConfig.gameDefaultColor, initialColor, isTest });
    }
    get activeCombination() {
        return this.combination.item;
    }
    get activeValuesColors() {
        return this.combination.values;
    }
    get activeColor() {
        const value = this.combination.value;
        return value;
    }
    waitForAnimationFinish() {
        return new Promise((resolve) => {
            const disposer = (0,mobx_esm_js_.autorun)(() => {
                if (this.crystalsAnimationFinishedAll) {
                    disposer();
                    resolve(true);
                }
            });
        });
    }
}
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "roundId", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "result", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "ticketId", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "payout", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "bonusPayout", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "realCoefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "placebetProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "bonusSkipProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "myBetsUpdater", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "initialValue", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "initialValueNext", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "bonusGameId", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "bonusGame", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "bonusGameLength", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "bonusProfit", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "spinId", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "bonusSpinId", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "bonusRoll", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "bonusRoundIndex", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "gameStarted", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "values", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "winScreen", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "winScreenTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "winScreenDelayTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "placeBonusTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "bonusAlert", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "bonusAlertTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "crystalsAnimationFinished", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "mock", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "activeGame", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "setActiveGame", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setBonusSkipProcessing", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setBonusRoll", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setMock", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "resetMock", void 0);
__decorate([
    mobx_esm_js_.computed
], CrystalpokerCommon.prototype, "crystalsAnimationFinishedAll", null);
__decorate([
    mobx_esm_js_.computed
], CrystalpokerCommon.prototype, "winLevel", null);
__decorate([
    mobx_esm_js_.computed
], CrystalpokerCommon.prototype, "lockedUi", null);
__decorate([
    mobx_esm_js_.computed
], CrystalpokerCommon.prototype, "lockedButtons", null);
__decorate([
    mobx_esm_js_.computed
], CrystalpokerCommon.prototype, "combination", null);
__decorate([
    mobx_esm_js_.computed
], CrystalpokerCommon.prototype, "activeCombination", null);
__decorate([
    mobx_esm_js_.computed
], CrystalpokerCommon.prototype, "activeValuesColors", null);
__decorate([
    mobx_esm_js_.computed
], CrystalpokerCommon.prototype, "activeColor", null);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "retreiveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setTicketId", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setCoefficient", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setResult", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "fetchGame", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setGame", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "placeBonus", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "skipBonus", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "place", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setGameStarted", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setInitialValue", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setInitialValueNext", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setBonusGameId", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setBonusGame", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setBonusGameLength", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setValues", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setPlacebetProcessing", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "updateSpinId", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "clearSpinId", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "updateBonusSpinId", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "clearBonusSpinId", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setCrystalsAnimationFinished", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setPayout", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setBonusPayout", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setWinScreen", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "showWinScreen", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "setBonusAlert", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "showBonusAlert", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "cancelShowWinScreen", void 0);
__decorate([
    mobx_esm_js_.action
], CrystalpokerCommon.prototype, "resetBonusGame", void 0);
__decorate([
    mobx_esm_js_.observable
], CrystalpokerCommon.prototype, "setBonusProfit", void 0);
/* harmony default export */ const store_CrystalpokerCommon = (CrystalpokerCommon);


/***/ })

}]);