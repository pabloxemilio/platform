"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[9878],{

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

/***/ 49878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_HoldCrashCommon)
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
// EXTERNAL MODULE: ./src/framework/api/mines/config.ts
var config = __webpack_require__(29533);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: consume shared module (default) i18next@^23.2.3 (strict) (fallback: ./node_modules/i18next/dist/esm/i18next.js)
var i18next_js_ = __webpack_require__(49953);
// EXTERNAL MODULE: consume shared module (default) axios@^1.4.0 (strict) (fallback: ./node_modules/axios/index.js)
var axios_index_js_ = __webpack_require__(75364);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/api/holdcrash/config.ts

const config_config = () => {
    return {
        api: (0,api/* url */.OZ)().host,
        core: `${document.location.origin}/public/api`,
        centrifuge: `${(location.protocol=="https:"?"wss":"ws")}://${(0,api/* url */.OZ)().host}/connection/websocket`,
    };
};

;// ./src/framework/api/holdcrash/index.ts


const holdcrash_api = () => {
    const protocol = config_config().api.includes('localhost') ? 'http' : 'https';
    return axios_index_js_["default"].create({
        baseURL: `${protocol}://${config_config().api}/api`,
    });
};
const createBetRequest = ({ headers, ...params }) => holdcrash_api().post('/games/create', params, { headers });
/* harmony default export */ const holdcrash = ((/* unused pure expression or super */ null && (holdcrash_api)));

// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
;// ./src/framework/store/HoldCrashCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










(0,mobx_esm_js_.configure)({
    enforceActions: 'always',
});
class HoldCrashCommon {
    constructor(root, gameConfig) {
        this.resetTimeout = null;
        this.loseTimeout = null;
        this.gameId = null;
        this.roundSeed = '';
        this.clientSeed = (0,index_js_.v4)();
        this.serverSeed = undefined;
        this.nonce = 1;
        this.amount = '1.00';
        this.betIndex = 0;
        this.placebetProcessing = false;
        this.gameStarted = false;
        this.choosedCharacter = null;
        this.preChoosedCharacter = null;
        this.coefficient = 0;
        this.roundPayout = 0;
        this.gameStatus = null;
        this.gameResult = null;
        this.showResults = false;
        this.betPlaced = false;
        this.mouseUp = true;
        this.cashedOut = false;
        this.socketDisabled = false;
        this.isFirstRound = true;
        this.isCanvasLoaded = false;
        this.currentAmountId = 0;
        this.minCoefficientToCashout = 0;
        this.showPumpNotif = false;
        this.notifLevel = 0;
        this.isAlternativeFlow = false;
        this.gameLockedOnError = false;
        this.gameSettings = {};
        this.winLevelList = [0, 5, 7, 10];
        this.amountsMap = [1, 2, 3, 5, 10, 20, 50, 100];
        this.lastMessageTimestamp = Date.now();
        this.handleAlternateFlowChange = (event) => {
            this.setIsAlternativeFlow(event.detail.buttonHold);
        };
        this.setIsAlternativeFlow = (val) => {
            this.isAlternativeFlow = val;
        };
        this.setNotifLevel = (val) => {
            this.notifLevel = val;
        };
        this.setCurrentAmountId = (val) => {
            this.currentAmountId = val;
        };
        this.setShowPumpNotif = (val) => {
            this.showPumpNotif = val;
        };
        this.setAmountsMap = (minBet, maxBet) => {
            const values = this.gameConfig.amountsMapValues;
            if (!minBet || !values || !maxBet)
                return null;
            const newArr = values.map((item) => (0,floor/* default */.A)(item * minBet));
            newArr.push(maxBet);
            this.amountsMap = newArr;
        };
        this.setCanvasLoaded = (val) => {
            this.isCanvasLoaded = val;
        };
        this.setChoosedCharacter = (val) => {
            this.choosedCharacter = val;
        };
        this.setPreChoosedCharacter = (val) => {
            this.preChoosedCharacter = val;
        };
        this.setMouseUp = (val) => {
            this.mouseUp = val;
        };
        this.setResult = (result, payout = 0, coefficient = 0) => {
            const { root: { profileCommon: { profile: { playerId }, }, }, } = this;
            (0,mobx_esm_js_.runInAction)(() => {
                if (result) {
                    this.betIndex += 1;
                }
                this.gameResult = result;
                this.roundPayout = payout;
                this.coefficient = coefficient;
            });
        };
        this.resetGame = () => {
            (0,mobx_esm_js_.runInAction)(() => {
                this.cashedOut = false;
                this.setResult(null, 0, 0);
                this.showResults = false;
            });
        };
        this.startGame = async (freebet = false) => {
            const { profileCommon: { profile: { balance }, }, uiCommon: { setAlertList }, } = this.root;
            if (this.resetTimeout) {
                clearTimeout(this.resetTimeout);
            }
            if (this.loseTimeout) {
                clearTimeout(this.loseTimeout);
            }
            if (this.gameId) {
                setAlertList({
                    title: 'Game has already started from another tab',
                    type: 'error',
                });
                return null;
            }
            return await this.createGame();
        };
        this.createGame = async () => {
            const { clientSeed, nonce, root: { profileCommon: { profile: { token, playerId }, }, }, } = this;
            try {
                this.placebetProcessing = true;
                const { search } = document.location;
                const urlParams = new URLSearchParams(search);
                const mock = urlParams.get('mock');
                const { data: { roundId }, } = await createBetRequest({
                    headers: {
                        authorization: token,
                        apikey: playerId,
                    },
                    clientSeed,
                    nonce,
                    theme: this.gameServerTheme,
                    ...(mock && { mock: +mock }),
                });
                this.gameId = roundId;
                this.gameStarted = true;
                this.placebetProcessing = false;
                return roundId;
            }
            catch (error) {
                console.log('fetchGame error:', error);
                this.root.uiCommon.errorCodeResolver(error);
                this.placebetProcessing = false;
                return error;
            }
        };
        this.placeBet = (freebet = false) => {
            const { profileCommon: { profile: { balance }, }, uiCommon: { showNotEnoughBalanceError }, } = this.root;
            if (!freebet && balance !== null && (balance <= 0 || balance < Number(this.amount))) {
                showNotEnoughBalanceError();
                return null;
            }
            this.showResults && this.resetGame();
            const { profileCommon: { profile }, uiCommon: { isMobile }, } = this.root;
            const { currency, subPartnerId } = profile;
            this.send({
                type: 'place',
                amount: Number(this.amount),
                currency,
                roundId: this.gameId,
                theme: this.gameServerTheme,
                ...(this.gameConfig?.gameTag && { tag: this.gameConfig.gameTag }),
                ...(freebet && this.root.freebetsCommon.freebetId && { freebetsId: this.root.freebetsCommon.freebetId }),
                ...(freebet && { minCoefficient: this.minCoefficientToCashout }),
                metadata: {
                    subPartnerId,
                    device: isMobile ? 'mobile' : 'desktop',
                    manual: true,
                },
            });
            (0,gtmDataLayerPush/* default */.A)({
                action: 'bet_placed',
                sid: this.root.profileCommon.profile.sid,
                parameters: {
                    value: this.amount,
                    currency: this.root.profileCommon.profile.currency,
                    method: 'manual',
                    multiplier: this.coefficient,
                    object: `bet_1.place`,
                    round_id: this.gameId,
                    id: this.gameId,
                },
            });
            this.isFirstRound = false;
            this.betPlaced = true;
            this.nonce += 1;
            this.root.freebetsCommon.listAdd({
                index: 0,
                freebet,
            });
            if (this.root.tournamentsCommon && this.root.tournamentsCommon.addBet) {
                this.root.tournamentsCommon.addBet({
                    amount: Number(this.amount),
                });
            }
        };
        this.cashout = (freebet = false) => {
            if (freebet) {
                if (this.coefficient <= +this.minCoefficientToCashout)
                    return null;
                this.send({
                    type: 'release',
                    roundId: this.gameId,
                });
            }
            this.mouseUp = true;
            this.cashedOut = true;
            !freebet &&
                this.send({
                    type: 'release',
                    roundId: this.gameId,
                });
        };
        this.mockGame = () => {
            const { location } = window;
            const { search } = location;
            const queryObj = new URLSearchParams(search);
            if (!queryObj.has('serverSeed'))
                return;
            (0,mobx_esm_js_.runInAction)(() => {
                this.serverSeed = queryObj.get('serverSeed') || undefined;
                this.nonce = Number(queryObj.get('nonce')) || undefined;
                this.clientSeed = queryObj.get('clientSeed') || undefined;
            });
        };
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
        this.wsHandler = ({ data }) => {
            const { freebetsCommon: { freebetEnabled }, } = this.root;
            const parsedData = JSON.parse(data);
            this.lastMessageTimestamp = Date.now();
            if (parsedData.t === 'g') {
                const [status, coeff] = parsedData.d;
                switch (status) {
                    case 1:
                        this.gameStatus = 'running';
                        this.coefficient = coeff;
                        this.roundPayout = (0,floor/* default */.A)(Number(this.amount) * coeff);
                        if (this.mouseUp && !this.cashedOut) {
                            this.cashout(freebetEnabled);
                        }
                        break;
                    case 2:
                        this.gameStatus = 'crashed';
                        break;
                    default:
                        break;
                }
            }
            else if (parsedData.t === 'result') {
                const { bet, gameResult } = parsedData.d;
                this.gameStatus = 'result';
                this.gameId = null;
                this.gameStarted = false;
                this.betPlaced = false;
                this.setResult(gameResult.fail ? 'lost' : 'won', bet.payout, gameResult.fail ? gameResult.roundCoef : this.coefficient);
                this.startGame();
                if (gameResult.fail) {
                    this.loseTimeout = window.setTimeout(() => {
                        this.showResults = true;
                    }, this.gameConfig.losePopupShowTimeout);
                }
                else {
                    this.showResults = true;
                    this.root.freebetsCommon.updateFreebetsPayout({ index: 0, coefficient: this.coefficient });
                }
                this.root.freebetsCommon.listRemoveByIndex(0);
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'bet_closed',
                    parameters: {
                        id: bet.id,
                        round_id: bet.roundId,
                        method: 'manual',
                        object: gameResult.fail ? 'lost' : 'cashout',
                        value: bet.amount,
                        currency: this.root.profileCommon.profile.currency,
                        wins: gameResult.fail ? 0 : 1,
                        multiplier: gameResult.roundCoef,
                    },
                });
                this.resetTimeout = window.setTimeout(() => {
                    this.resetGame();
                    this.gameStatus = 'await';
                    this.showResults = false;
                }, gameResult.fail ? this.gameConfig.loseTimeout : this.gameConfig.winTimeout);
            }
            else if (parsedData.message) {
                this.socketCodeResolver(parsedData.errorCode || parsedData.code, parsedData.data);
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
        this.setSocketDisabled = (isDisabled) => {
            this.socketDisabled = isDisabled;
        };
        this.socketConnect = async () => {
            const { profileCommon: { profile: { token, subPartnerId }, }, } = this.root;
            if (this.ws) {
                await this.closeSocket(this.ws);
                this.ws = null;
            }
            this.cleanupSocket();
            console.log('socketConnect!');
            if (this.ws && this.ws.readyState === 1) {
                return;
            }
            const protocol = (0,config/* config */.$)().api.includes('localhost') ? 'ws' : 'wss';
            let host = `${protocol}://${(0,config/* config */.$)().api}/ws/game/`;
            if (token) {
                host = `${host}?token=${token}`;
                if (subPartnerId) {
                    host = `${host}&subPartnerId=${subPartnerId}`;
                }
            }
            const ws = new WebSocket(host);
            this.ws = ws;
            ws.onopen = () => {
                if (this.pingInterval) {
                    clearInterval(this.pingInterval);
                }
                this.pingInterval = window.setInterval(() => {
                    this.send(1);
                }, 30000);
                this.heartbeatCheckInterval && clearInterval(this.heartbeatCheckInterval);
                this.heartbeatCheckInterval = window.setInterval(() => {
                    const now = Date.now();
                    const diff = now - this.lastMessageTimestamp;
                    if (diff > 10000) {
                        console.warn('❌ Heartbeat timeout — no messages received.');
                        this.setSocketAwaiter();
                    }
                }, 5000);
                ws.onmessage = () => {
                    ws.onmessage = (m) => this.wsHandler(m);
                    this.setSocketDisabled(false);
                    console.log('socket connected');
                    clearInterval(this.socketAwaiterInterval);
                };
            };
            ws.onerror = (err) => {
                console.log('socketError', err);
                this.setSocketAwaiter();
            };
        };
        this.setSocketAwaiter = () => {
            this.root.uiCommon.setAlertList({
                title: 'Socket connection lost',
                type: 'error',
            });
            if (!this.ws)
                return;
            this.ws.close();
            if (this.root.uiCommon.pageDisabled)
                return;
            if (this.heartbeatCheckInterval) {
                clearInterval(this.heartbeatCheckInterval);
            }
            if (this.pingInterval) {
                clearInterval(this.pingInterval);
            }
            const { readyState } = this.ws;
            if (readyState !== 1) {
                this.setSocketDisabled(true);
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
        this.cleanupSocket = () => {
            if (this.ws) {
                this.ws.onopen = null;
                this.ws.onmessage = null;
                this.ws.onerror = null;
                this.ws.onclose = null;
                try {
                    this.ws.close();
                }
                catch (e) {
                    console.warn('Error closing socket', e);
                }
                this.ws = null;
            }
            if (this.heartbeatCheckInterval) {
                clearInterval(this.heartbeatCheckInterval);
                this.heartbeatCheckInterval = undefined;
            }
            if (this.pingInterval) {
                clearInterval(this.pingInterval);
                this.pingInterval = undefined;
            }
            if (this.socketAwaiterInterval) {
                clearInterval(this.socketAwaiterInterval);
                this.socketAwaiterInterval = undefined;
            }
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.root = root;
        this.centrifuge = new (centrifuge_js_default())((0,config/* config */.$)().centrifuge || '', {
            debug: (0,bootstrap.GET_ENV)().NODE_ENV === 'development',
        });
        this.root.profileCommon.auth(gameConfig.gameServerId).then(async () => {
            this.root.trackingCommon.initGtmDataLayer();
            this.retrieveAmount();
            setTimeout(() => {
                this.socketConnect();
            }, 100);
        });
        (0,mobx_esm_js_.reaction)(() => this.currentAmountId, () => {
            this.setAmount(this.amountsMap[this.currentAmountId]);
        });
        (0,mobx_esm_js_.reaction)(() => this.amount, () => {
            if (+this.amount !== this.amountsMap[this.currentAmountId]) {
                const index = this.amountsMap.findIndex((item) => item === +this.amount);
                this.setCurrentAmountId(index === -1 ? 4 : index);
            }
        });
        (0,mobx_esm_js_.reaction)(() => this.root.profileCommon?.profile?.token, () => !this.gameStarted && this.startGame());
        (0,mobx_esm_js_.reaction)(() => this.root.profileCommon?.limit?.minBet, () => this.setAmountsMap(this.root.profileCommon?.limit?.minBet, this.root.profileCommon?.limit?.maxBet));
        (0,mobx_esm_js_.reaction)(() => this.root.uiCommon.isOnline, () => this.root.uiCommon.isOnline &&
            this.gameStatus === 'running' &&
            this.cashout(this.root.freebetsCommon.freebetEnabled));
        this.gameConfig = gameConfig;
        this.gameServerId = gameConfig.gameServerId || 'holdcrash';
        this.gameServerTheme = gameConfig.gameServerTheme || 'default';
        this.currentAmountId = gameConfig.defaultAmountId || 0;
        this.winLevelList = gameConfig.winLevelList || [0, 2, 10, 50];
        this.ws = null;
        this.centrifugeHeathCheckTimeout = undefined;
        this.socketAwaiterInterval = undefined;
        this.mockGame();
        Object.defineProperty(window, 'buttonHold', {
            get() {
                return this._alternateFlow || false;
            },
            set(value) {
                this._alternateFlow = value;
                const event = new CustomEvent('alternativeFlowChanged', {
                    detail: { buttonHold: value },
                });
                window.dispatchEvent(event);
            },
            configurable: true,
            enumerable: true,
        });
        window.buttonHold = false;
        window.addEventListener('alternativeFlowChanged', this.handleAlternateFlowChange);
        this.root.freebetsCommon.connectToFreebetCommon(() => {
            return [{ amount: this.amount }];
        }, (index, { amount, minCoefficient, min }) => {
            this.setAmount(Number(amount));
            this.minCoefficientToCashout = minCoefficient ?? min;
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
    socketCodeResolver(code, data) {
        const { uiCommon: { setAlertList }, } = this.root;
        (0,mobx_esm_js_.runInAction)(() => {
            this.gameLockedOnError = true;
            this.gameStarted = false;
            this.betPlaced = false;
            this.resetGame();
        });
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
    async closeSocket(ws) {
        return new Promise((resolve) => {
            if (!ws || ws.readyState === WebSocket.CLOSED) {
                resolve();
                return;
            }
            ws.onclose = () => {
                resolve();
            };
            ws.close();
        });
    }
}
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "gameId", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "roundSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "clientSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "serverSeed", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "nonce", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "amount", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "betIndex", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "placebetProcessing", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "gameStarted", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "choosedCharacter", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "preChoosedCharacter", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "coefficient", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "roundPayout", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "gameStatus", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "gameResult", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "showResults", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "betPlaced", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "mouseUp", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "cashedOut", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "socketDisabled", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "isFirstRound", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "isCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "currentAmountId", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "minCoefficientToCashout", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "showPumpNotif", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "notifLevel", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "isAlternativeFlow", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "gameLockedOnError", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "gameSettings", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "winLevelList", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "amountsMap", void 0);
__decorate([
    mobx_esm_js_.observable
], HoldCrashCommon.prototype, "lastMessageTimestamp", void 0);
__decorate([
    mobx_esm_js_.computed
], HoldCrashCommon.prototype, "winLevel", null);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "handleAlternateFlowChange", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "setIsAlternativeFlow", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "setNotifLevel", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "setCurrentAmountId", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "setShowPumpNotif", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "setAmountsMap", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "setCanvasLoaded", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "setChoosedCharacter", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "setPreChoosedCharacter", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "setMouseUp", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "setResult", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "resetGame", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "startGame", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "createGame", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "placeBet", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "cashout", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "mockGame", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "retrieveAmount", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "setAmount", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "wsHandler", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "setSocketDisabled", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "socketConnect", void 0);
__decorate([
    mobx_esm_js_.action
], HoldCrashCommon.prototype, "setSocketAwaiter", void 0);
/* harmony default export */ const store_HoldCrashCommon = (HoldCrashCommon);


/***/ })

}]);