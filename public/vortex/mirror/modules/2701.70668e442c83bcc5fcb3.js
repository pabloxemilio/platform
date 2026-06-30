(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2701],{

/***/ 92184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ INIT_GAME_CONFIG),
/* harmony export */   t: () => (/* binding */ GET_GAME_CONFIG)
/* harmony export */ });
let GAME_CONFIG = null;
const INIT_GAME_CONFIG = async ({ entry }) => {
    try {
        const response = await fetch(`/modules/config/${entry}.json`);
        const config = await response.json();
        GAME_CONFIG = config;
        Object.freeze(GAME_CONFIG);
    }
    catch (err) {
        throw new Error('GET_GAME_CONFIG: config is not defined');
    }
};
const GET_GAME_CONFIG = () => {
    return GAME_CONFIG;
};


/***/ }),

/***/ 38716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ GET_STORE),
/* harmony export */   j: () => (/* binding */ INIT_STORE)
/* harmony export */ });
/* harmony import */ var _GAME_CONFIG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92184);
/* harmony import */ var _framework_store_ProfileCommon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73826);
/* harmony import */ var _framework_store_AutobetCommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33738);
/* harmony import */ var _framework_store_UiCommon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12155);
/* harmony import */ var _framework_store_AudioCommon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6862);
/* harmony import */ var _framework_store_TournamentsCommon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16699);
/* harmony import */ var _framework_store_FreebetsCommon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42718);
/* harmony import */ var _framework_store_BalanceCommon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15248);
/* harmony import */ var _framework_store_QuickModeCommon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9332);
/* harmony import */ var _framework_store_TrackingCommon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46901);










let STORE = null;
const INIT_STORE = async ({ customStore = class {
} }) => {
    const storeList = {
        profileCommon: _framework_store_ProfileCommon__WEBPACK_IMPORTED_MODULE_1__["default"],
        uiCommon: _framework_store_UiCommon__WEBPACK_IMPORTED_MODULE_3__["default"],
        audioCommon: _framework_store_AudioCommon__WEBPACK_IMPORTED_MODULE_4__["default"],
        tournamentsCommon: _framework_store_TournamentsCommon__WEBPACK_IMPORTED_MODULE_5__["default"],
        freebetsCommon: _framework_store_FreebetsCommon__WEBPACK_IMPORTED_MODULE_6__["default"],
        balanceCommon: _framework_store_BalanceCommon__WEBPACK_IMPORTED_MODULE_7__["default"],
        quickModeCommon: _framework_store_QuickModeCommon__WEBPACK_IMPORTED_MODULE_8__["default"],
        trackingCommon: _framework_store_TrackingCommon__WEBPACK_IMPORTED_MODULE_9__["default"],
        autobetCommon: _framework_store_AutobetCommon__WEBPACK_IMPORTED_MODULE_2__["default"],
        game: class {
        },
    };
    const storeListFromConfig = (0,_GAME_CONFIG__WEBPACK_IMPORTED_MODULE_0__/* .GET_GAME_CONFIG */ .t)().storeList || {};
    for (const [key, moduleName] of Object.entries(storeListFromConfig)) {
        if (!storeList[key])
            continue;
        const module = await loadModule(moduleName, key);
        if (module) {
            storeList[key] = module.default;
        }
    }
    const CustomStore = customStore;
    class RootStore {
        constructor() {
            this.profileCommon = new storeList.profileCommon(this);
            this.uiCommon = new storeList.uiCommon(this);
            this.audioCommon = new storeList.audioCommon(this);
            this.tournamentsCommon = new storeList.tournamentsCommon(this);
            this.freebetsCommon = new storeList.freebetsCommon(this);
            this.balanceCommon = new storeList.balanceCommon(this);
            this.quickModeCommon = new storeList.quickModeCommon(this);
            this.trackingCommon = new storeList.trackingCommon(this);
            this.autobetCommon = new storeList.autobetCommon(this);
            this.game = new storeList.game(this, (0,_GAME_CONFIG__WEBPACK_IMPORTED_MODULE_0__/* .GET_GAME_CONFIG */ .t)());
            this.customStore = new CustomStore(this);
        }
    }
    STORE = new RootStore();
    Object.freeze(STORE);
};
const GET_STORE = () => {
    return STORE;
};
const loadModule = async (moduleName, key) => {
    try {
        const module = await __webpack_require__(26906)(`./${moduleName}.ts`);
        return module;
    }
    catch (error) {
        throw new Error(`GET_STORE: ${key} is not defined`);
    }
};


/***/ }),

/***/ 22701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GET_ENV: () => (/* reexport */ GET_ENV),
  GET_GAME_CONFIG: () => (/* reexport */ GAME_CONFIG/* GET_GAME_CONFIG */.t),
  GET_STORE: () => (/* reexport */ STORE/* GET_STORE */.D),
  bootstrap: () => (/* binding */ bootstrap)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js
var compat_module = __webpack_require__(17402);
;// ./src/bootstrap/init.tsx



const init = ({ pages }, page) => {
    const Component = pages[page];
    if (!Component)
        return console.error(`Page ${page} not found`);
    (0,preact_module_js_.render)((0,jsxRuntime_module/* jsx */.Y)(compat_module.Suspense, { fallback: (0,jsxRuntime_module/* jsx */.Y)("div", {}), children: (0,jsxRuntime_module/* jsx */.Y)(Component, {}) }), document.getElementById('app'));
};

// EXTERNAL MODULE: ./src/bootstrap/GAME_CONFIG.ts
var GAME_CONFIG = __webpack_require__(92184);
;// ./src/bootstrap/route.ts

const route = () => {
    const { pathname } = window.location;
    const gameClientPublicUrl = (0,GAME_CONFIG/* GET_GAME_CONFIG */.t)().gameClientPublicUrl;
    const cleanPathname = gameClientPublicUrl ? pathname.replace(gameClientPublicUrl, '') : pathname;
    if (cleanPathname.startsWith('/render')) {
        return 'render';
    }
    if (cleanPathname.startsWith('/result')) {
        return 'result';
    }
    if (cleanPathname.startsWith('/fair')) {
        return 'fair';
    }
    if (cleanPathname.startsWith('/share')) {
        return 'share';
    }
    if (cleanPathname.startsWith('/shrtemplate')) {
        return 'share';
    }
    return 'main';
};

;// ./src/bootstrap/meta.ts

const meta = ({ meta: { title, favicon, canonical } }) => {
    if (title) {
        let titleTag = document.getElementsByTagName('title')[0];
        if (!titleTag) {
            titleTag = document.createElement('title');
            document.getElementsByTagName('head')[0].appendChild(titleTag);
        }
        titleTag.innerText = title;
    }
    if (favicon) {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = `${(0,GAME_CONFIG/* GET_GAME_CONFIG */.t)().gameClientPublicUrl || ''}/static/${favicon}`;
    }
    if (canonical) {
        let canonicalTag = document.querySelector("link[rel~='canonical']");
        const url = window.location.origin.split('.');
        if (!canonicalTag) {
            canonicalTag = document.createElement('link');
            canonicalTag.rel = 'canonical';
            document.getElementsByTagName('head')[0].appendChild(canonicalTag);
        }
        canonicalTag.href = `https://${url[url.length - 2]}.${url[url.length - 1]}/game/${(0,GAME_CONFIG/* GET_GAME_CONFIG */.t)().gameServerTheme}`;
    }
};

// EXTERNAL MODULE: consume shared module (default) @sentry/react@^9.5.0 (strict) (fallback: ./node_modules/@sentry/react/build/esm/index.js)
var index_js_ = __webpack_require__(53998);
;// ./src/bootstrap/sentry.tsx

const sentry = ({ env }) => {
    try {
        const href = window.location.href;
        const shouldInitSentry = href.includes('turbomines') && env.APP_ENV;
        if (shouldInitSentry) {
            console.log('sentry init', env.APP_ENV);
            index_js_.init({
                dsn: 'https://9af67782450043ac98c15ce53ba08150@sentry.turbospace.online/139',
                tracesSampleRate: 1.0,
                tracePropagationTargets: ['localhost'],
                environment: env.APP_ENV,
            });
        }
    }
    catch (error) {
        console.error('sntr error', error);
    }
};

// EXTERNAL MODULE: ./src/bootstrap/STORE.ts
var STORE = __webpack_require__(38716);
;// ./src/bootstrap/ENV.ts
let ENV = null;
const INIT_ENV = ({ env }) => {
    ENV = env;
    Object.freeze(ENV);
};
const GET_ENV = () => {
    return ENV;
};

// EXTERNAL MODULE: ./src/framework/i18n/index.ts
var i18n = __webpack_require__(46476);
;// ./src/bootstrap/index.ts











const bootstrap = async (props) => {
    sentry(props);
    INIT_ENV(props);
    await (0,GAME_CONFIG/* INIT_GAME_CONFIG */.j)(props);
    const page = route();
    if (page === 'main') {
        await (0,STORE/* INIT_STORE */.j)(props);
    }
    meta(props);
    (0,i18n/* i18nInit */.tV)();
    init(props, page);
};


/***/ }),

/***/ 58608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AY: () => (/* binding */ getBetLikes),
/* harmony export */   A_: () => (/* binding */ getRates),
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   Ce: () => (/* binding */ getTranslates),
/* harmony export */   DV: () => (/* binding */ getFreeBets),
/* harmony export */   Do: () => (/* binding */ likeRequest),
/* harmony export */   E$: () => (/* binding */ getProfile),
/* harmony export */   EM: () => (/* binding */ unlikeRequest),
/* harmony export */   HF: () => (/* binding */ getVersion),
/* harmony export */   Ju: () => (/* binding */ getFavouriteGames),
/* harmony export */   Lc: () => (/* binding */ getLeaderbord),
/* harmony export */   NP: () => (/* binding */ getPlayOfTheDay),
/* harmony export */   OZ: () => (/* binding */ url),
/* harmony export */   QO: () => (/* binding */ updateStorageItem),
/* harmony export */   Rj: () => (/* binding */ getLeagueSettings),
/* harmony export */   TX: () => (/* binding */ getPlayerStatistics),
/* harmony export */   VQ: () => (/* binding */ getTournamentLeaderbords),
/* harmony export */   Yy: () => (/* binding */ getPlayerInfo),
/* harmony export */   bN: () => (/* binding */ getLeagueLeaderboard),
/* harmony export */   bT: () => (/* binding */ getStoriesStrapi),
/* harmony export */   cg: () => (/* binding */ getLimit),
/* harmony export */   dd: () => (/* binding */ getMyBetsHistory),
/* harmony export */   eo: () => (/* binding */ getTournamentWinners),
/* harmony export */   gV: () => (/* binding */ getPlayerRecords),
/* harmony export */   lo: () => (/* binding */ getTournaments),
/* harmony export */   mt: () => (/* binding */ getSettings),
/* harmony export */   ni: () => (/* binding */ setStorageItem),
/* harmony export */   qA: () => (/* binding */ putPlayerName),
/* harmony export */   sP: () => (/* binding */ getPlayerShortGameStat),
/* harmony export */   su: () => (/* binding */ getBetInfo),
/* harmony export */   vB: () => (/* binding */ getMyBets),
/* harmony export */   wf: () => (/* binding */ getEdgeStatus),
/* harmony export */   yC: () => (/* binding */ getTournamentsStrapi)
/* harmony export */ });
/* unused harmony exports api, apiGames, apiBets, apiTranslates, getTopBets, getStorage, getStorageItem, getGamesList */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75364);

const url = () => {
    if (window.devProxy) {
        return window.devProxy;
    }
    return {
        protocol: document.location.protocol.replace(':', ''),
        host: document.location.host,
    };
};
const api = () => {
    const u = url();
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        baseURL: 'gameHubHost' in u
            ? `${u.gameHubHost.protocol}://${u.gameHubHost.host}/api/common`
            : `${u.protocol}://${u.host}/api/common`,
    });
};
const apiGames = () => {
    const u = url();
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        baseURL: 'gameHubHost' in u
            ? `${u.gameHubHost.protocol}://${u.gameHubHost.host}/api/games`
            : `${u.protocol}://${u.host}/api/games`,
    });
};
const apiBets = () => {
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        baseURL: `${url().protocol}://${url().host}/api`,
    });
};
const apiTranslates = (tag) => {
    const u = url();
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        baseURL: 'translateHost' in u
            ? `${u.translateHost.protocol}://${u.translateHost.host}/api`
            : `${u.protocol}://${u.host}/api`,
        headers: {
            ...(tag && { 'If-None-Match': `"${tag}"` }),
        },
    });
};
const apiTournaments = () => {
    const u = url();
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        baseURL: `${u.protocol}://${u.host}/cms`,
    });
};
const apiUniverse = () => {
    const u = url();
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        baseURL: `${u.protocol}://${u.host}/universe/api/common`,
    });
};
const getMyBets = ({ headers, gameId, limit = 10, offset = 0, }) => api().get(`/bets/my?gameId=${gameId}&limit=${limit}&offset=${offset}`, { headers });
const getMyBetsHistory = ({ headers, gameId, limit = 10, offset = 0, }) => apiGames().get(`/history?gameId=${gameId}&limit=${limit}&offset=${offset}`, { headers });
const getTopBets = ({ headers }) => api().get(`/bets/top`, { headers });
const getSettings = (params) => api().get(`/settings`, { params });
const getProfile = (params) => api().post(`/profile`, params);
const getPlayerStatistics = ({ headers, ...params }) => api().post('/player/statistics', params, { headers });
const getLimit = ({ headers, params }) => api().get(`/limits${headers.cid ? `?cid=${headers.cid}` : ''}`, { headers, params });
const getRates = ({ headers }) => api().get(`/rates`, { headers });
const putPlayerName = ({ headers, name }) => api().put(`/player`, { nickname: name }, { headers });
const getBetInfo = ({ headers, betId, useBetsApi }) => useBetsApi ? apiBets().get(`/bets/${betId}`, { headers }) : api().get(`/bets/${betId}`, { headers });
const getTranslates = ({ projectId, locale, key, tag, }) => apiTranslates(tag).get(`/translates/${projectId}/latest/${locale}${key ? `/${key}` : ''}`, {
    params: {
        v: tag,
    },
});
const getTournaments = ({ headers, params, }) => api().get(`/tournaments/my?gameId=${params.gameId}${params.sub_partner_id ? `&subPartnerId=${params.sub_partner_id}` : ''}`, { headers });
const getTournamentLeaderbords = ({ headers, tournamentId }) => api().get(`/tournaments/${tournamentId}/my`, { headers });
const getTournamentWinners = ({ headers, tournamentId }) => api().get(`/tournaments/${tournamentId}`, { headers });
const getTournamentsStrapi = ({ tournamentIdList }) => {
    const filters = tournamentIdList.map((tournamentId) => `filters[tournamentId][$eq]=${tournamentId}`).join('&');
    return apiTournaments().get(`/api/tournaments?${filters}&locale=all&populate=*`);
};
const getStoriesStrapi = () => {
    return apiTournaments().get(`/api/stories-list?pagination[pageSize]=10&sort[0]=order:desc&sort[1]=publishedAt:desc&populate=*`);
};
const getStorage = ({ headers }) => {
    return api().get(`/storage`, { headers });
};
const getStorageItem = ({ headers, key }) => {
    return api().get(`/storage/${key}`, { headers });
};
const setStorageItem = ({ headers, key, value, ttl, }) => {
    return api().post(`/storage`, { key, value, ttl: ttl || 259200 }, { headers });
};
const updateStorageItem = ({ headers, key, value, ttl, }) => {
    return api().put(`/storage/${key}`, { value, ttl: ttl || 259200 }, { headers });
};
const getFreeBets = ({ headers, gameId }) => api().get(`/freebets/all?gameId=${gameId}`, { headers });
const getVersion = ({ headers, gameId }) => api().get(`/version/${gameId}`, { headers });
const likeRequest = (headers, params) => api().post(`/like`, params, { headers });
const unlikeRequest = (headers, params) => api().post(`/unlike`, params, { headers });
const getLeaderbord = (params) => apiUniverse().post(`/leaderboard`, params);
const getLeagueLeaderboard = (params) => apiUniverse().post(`/league/leaderboard`, params);
const getLeagueSettings = () => apiUniverse().get(`/league/settings`);
const getGamesList = () => apiUniverse().get(`/game/list`);
const getPlayOfTheDay = () => apiUniverse().post(`/play-of-the-day`);
const getPlayerInfo = (params) => apiUniverse().post(`/player`, params);
const getPlayerRecords = (params) => apiUniverse().post(`/player/records`, params);
const getBetLikes = (params) => apiUniverse().get(`/like/${params.betId}`);
const getFavouriteGames = (params) => apiUniverse().post(`/player/fav-games`, params);
const getPlayerShortGameStat = ({ customerId, playerId, gameId, }) => apiUniverse().get(`/player/short-game-stat?customerId=${customerId}&playerId=${playerId}&gameId=${gameId}`);
const getEdgeStatus = (isDev = false) => {
    const u = url();
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        baseURL: isDev
            ? `https://turbohub.dev.turbogames.work/ping`
            : 'gameHubHost' in u
                ? `${u.gameHubHost.protocol}://${u.gameHubHost.host}/edge-status`
                : `${u.protocol}://${u.host}/edge-status`,
    })
        .get(`?v=${Date.now()}`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ }),

/***/ 49865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Qc: () => (/* binding */ demoCID),
/* harmony export */   eG: () => (/* binding */ defaultLanguage),
/* harmony export */   od: () => (/* binding */ languagesData)
/* harmony export */ });
const languagesData = [
    { key: 'en', value: 'en', title: 'English' },
    { key: 'ru', value: 'ru', title: 'Русский' },
    { key: 'be', value: 'ru', title: 'Беларуская' },
    { key: 'kk', value: 'ru', title: 'Қазақша' },
    { key: 'ja', value: 'ja', title: '日本語' },
    { key: 'tr', value: 'tr', title: 'Türkçe' },
    { key: 'az', value: 'az', title: 'Azərbaycanca' },
    { key: 'uz', value: 'uz', title: 'Oʻzbekcha' },
    { key: 'bn', value: 'bn', title: 'বাংলা' },
    { key: 'uk', value: 'uk', title: 'Українська' },
    { key: 'fr', value: 'fr', title: 'Français' },
    { key: 'pt', value: 'pt', title: 'Português' },
    { key: 'es', value: 'es', title: 'Español' },
    { key: 'zh', value: 'zh', title: '中文' },
    { key: 'th', value: 'th', title: 'ไทย' },
    { key: 'pl', value: 'pl', title: 'Polski' },
    { key: 'ko', value: 'ko', title: '한국어' },
    { key: 'vi', value: 'vi', title: 'Tiếng Việt' },
    { key: 'de', value: 'de', title: 'Deutsch' },
    { key: 'hi', value: 'hi', title: 'हिन्दी; हिंदी' },
];
const defaultLanguage = 'en';
const demoCID = 'democustomer';


/***/ }),

/***/ 70903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   R: () => (/* binding */ floor)
/* harmony export */ });
function floor(num, precision = 2) {
    const prec = Math.pow(10, precision);
    const m = Number((Math.abs(num) * prec).toPrecision(15));
    return (Math.floor(m) / prec) * Math.sign(num);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (floor);


/***/ }),

/***/ 99875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getNestedProp)
/* harmony export */ });
let result = null;
function getNestedProp(prop, obj) {
    if (obj instanceof Object) {
        if (obj[prop]) {
            result = obj[prop];
        }
        else if (obj.data) {
            getNestedProp(prop, obj.data);
        }
        return result;
    }
    else {
        return null;
    }
}


/***/ }),

/***/ 21714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ gtmDataLayerPush)
/* harmony export */ });
function gtmDataLayerPush({ event = 'ga4_interaction', parameters, ...rest }) {
    const isDataLayerInitialized = rest?.action === 'init' ||
        (Array.isArray(window.dataLayer) && window.dataLayer.some((item) => item.action === 'init'));
    const dataLayerPayload = {
        event,
        parameters,
        ...rest,
    };
    window.dataLayer = window.dataLayer || [];
    window.dataLayerQueue = window.dataLayerQueue || [];
    if (isDataLayerInitialized) {
        window.dataLayer.push(dataLayerPayload);
    }
    else {
        window.dataLayerQueue.push(dataLayerPayload);
    }
}


/***/ }),

/***/ 73667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ isMobile)
/* harmony export */ });
function isMobile() {
    const mobileWidth = 819;
    const windowWidth = window.innerWidth;
    const match = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(Android)|(webOS)/i);
    if (windowWidth > mobileWidth && match && match.includes('iPad'))
        return false;
    if (windowWidth <= mobileWidth)
        return true;
    return !!match;
}


/***/ }),

/***/ 74065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   LS: () => (/* binding */ LS)
/* harmony export */ });
class localStorageHelper {
    constructor() {
        this.check = () => {
            try {
                return localStorage && typeof localStorage !== 'undefined';
            }
            catch (error) {
                return false;
            }
        };
        this.set = (key, value) => this.check() && localStorage.setItem(key, value);
        this.get = (key) => this.check() && localStorage.getItem(key);
        this.remove = (key) => this.check() && localStorage.removeItem(key);
        this.key = (index) => this.check() && localStorage.key(index);
        this.length = () => this.check() && localStorage.length;
        this.has = (key) => this.check() && localStorage.getItem(key) !== null;
    }
}
const LS = new localStorageHelper();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LS);


/***/ }),

/***/ 77889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   L: () => (/* binding */ round)
/* harmony export */ });
function round(num, precision = 2) {
    const prec = Math.pow(10, precision);
    return Math.round((num + Number.EPSILON) * prec) / prec;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (round);


/***/ }),

/***/ 9858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   w: () => (/* binding */ timeout)
/* harmony export */ });
function timeout(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timeout);


/***/ }),

/***/ 12215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ truncateDecimals)
/* harmony export */ });
function truncateDecimals(number, digits) {
    let numStr = String(number);
    const dotIndex = numStr.indexOf('.');
    if (dotIndex !== -1) {
        const fractionalPart = numStr.slice(dotIndex + 1);
        const truncatedFractionalPart = fractionalPart.slice(0, digits);
        numStr = numStr.slice(0, dotIndex + 1) + truncatedFractionalPart;
    }
    return Number(numStr);
}


/***/ }),

/***/ 46476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rB: () => (/* binding */ updateResources),
/* harmony export */   tV: () => (/* binding */ i18nInit)
/* harmony export */ });
/* unused harmony exports getLocaleFromUrl, i18nConstant */
/* unused harmony import specifier */ var i18n;
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49953);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33204);
/* harmony import */ var src_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22701);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58608);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49865);
/* harmony import */ var _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74065);






function localeAliasFix(locale) {
    return locale.replace('-', '_');
}
function getLocaleFromUrl() {
    const urlParams = new URLSearchParams(document.location.search);
    const paramLocale = urlParams.get('locale');
    return localeAliasFix(paramLocale || _constants__WEBPACK_IMPORTED_MODULE_4__/* .defaultLanguage */ .eG);
}
function i18nConstant() {
    return {
        ns: 'translation',
        projectId: '5fbba1ce8c2b9e7440670d3d',
        location: (0,src_bootstrap__WEBPACK_IMPORTED_MODULE_2__.GET_GAME_CONFIG)()?.defaultLocale || getLocaleFromUrl(),
        lsPrefixName: (0,src_bootstrap__WEBPACK_IMPORTED_MODULE_2__.GET_GAME_CONFIG)()?.gameClientPublicUrl || 'default',
        lsTagName: 'i18nTag',
        lsResourcesName: 'i18nResources',
        lsDivisionSymbol: '::',
    };
}
function localResources() {
    const { lsPrefixName, lsResourcesName, lsDivisionSymbol, ns } = i18nConstant();
    const resources = {};
    for (let i = 0; i < _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.length(); i++) {
        const key = _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.key(i);
        if (!key.includes(lsPrefixName) || !key.includes(lsResourcesName))
            continue;
        const keySplit = key.split(lsDivisionSymbol);
        const language = keySplit[keySplit.length - 1];
        const value = _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.get(key);
        resources[language] = { [`${ns}`]: JSON.parse(value) || null };
    }
    return resources;
}
async function updateResources(language = i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language) {
    await new Promise((resolve) => setTimeout(resolve, 250));
    const { projectId, lsPrefixName, lsTagName, lsResourcesName, lsDivisionSymbol, ns } = i18nConstant();
    const locale = localeAliasFix(language);
    const tag = i18next__WEBPACK_IMPORTED_MODULE_0__["default"].hasResourceBundle(locale, ns) ? _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.get(lsTagName) : undefined;
    try {
        const response = await (0,_api__WEBPACK_IMPORTED_MODULE_3__/* .getTranslates */ .Ce)({
            projectId,
            locale,
            tag,
        });
        _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.set(lsTagName, response.data.i18nVersion);
        if (Object.keys(response.data).length > 2) {
            _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.set(`${lsPrefixName}${lsDivisionSymbol}${lsResourcesName}${lsDivisionSymbol}${language}`, JSON.stringify(response.data));
            i18next__WEBPACK_IMPORTED_MODULE_0__["default"].addResourceBundle(locale, ns, response.data, true, true);
            i18next__WEBPACK_IMPORTED_MODULE_0__["default"].changeLanguage(locale);
            setTimeout(() => {
                console.log('i18n.language', i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language);
                i18next__WEBPACK_IMPORTED_MODULE_0__["default"].changeLanguage(locale);
            }, 250);
        }
    }
    catch (err) {
        if (err?.response?.status === 304) {
            i18next__WEBPACK_IMPORTED_MODULE_0__["default"].changeLanguage(locale);
            return;
        }
        console.error(err);
    }
}
const i18nInit = () => {
    const { location } = i18nConstant();
    i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({
        lng: location,
        resources: localResources(),
    }, (err, t) => {
        updateResources();
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (i18n)));


/***/ }),

/***/ 6862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8570);
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29180);
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_isMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73667);
/* harmony import */ var _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74065);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const isMobile = (0,_helpers_isMobile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
const checkMusicDefault = () => {
    const saved = _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.get('musicMuted');
    if (isMobile && !saved)
        return true;
    return _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.get('musicMuted') === 'true';
};
const checkMusicVolumeDefault = () => {
    const savedVolume = _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.get('musicVolume');
    return savedVolume ? Number(savedVolume) : isMobile ? 0 : 1;
};
const isMuted = _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.get('allMuted') === 'true';
const fadeDuration = 500;
class AudioCommon {
    constructor(root) {
        this.audioAllowed = false;
        this.setAudioAllowed = (audioAllowed) => {
            this.audioAllowed = audioAllowed;
        };
        this.globalMuted = false;
        this.setGlobalMuted = (muted, msg) => {
            this.globalMuted = muted;
            howler__WEBPACK_IMPORTED_MODULE_1__.Howler.mute(muted);
            _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.set('allMuted', muted);
            if (!muted) {
                if (!this.music && !Object.keys(this.musicPlaylist).length) {
                    if (this.soundMuted) {
                        this.setSoundMuted(false);
                    }
                }
                else {
                    if (this.musicVolume === 0 && this.soundVolume === 0) {
                        this.setSoundMuted(false);
                        this.setMusicMuted(false);
                    }
                    if (this.soundMuted && this.musicMuted) {
                        if (this.soundVolume) {
                            this.setSoundMuted(false);
                        }
                        if (this.musicVolume) {
                            this.setMusicMuted(false);
                        }
                    }
                }
            }
        };
        this.globalUnMute = () => { };
        this.soundMuted = _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.get('soundMuted') === 'true';
        this.setSoundMuted = (muted) => {
            const isMuted = this.globalMuted ? false : muted;
            this.soundMuted = isMuted;
            if (!isMuted) {
                if (this.soundVolume === 0) {
                    this.setSoundVolume(0.5, false);
                }
                this.setGlobalMuted(false);
            }
            else {
                if (this.musicVolume === 0) {
                    this.setGlobalMuted(true);
                }
            }
            Object.values(this.sounds).forEach((sound) => {
                sound.mute(isMuted);
            });
            _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.set('soundMuted', isMuted);
        };
        this.musicMuted = checkMusicDefault();
        this.setMusicMuted = (muted) => {
            const isMuted = this.globalMuted ? false : muted;
            this.musicMuted = isMuted;
            this.music?.mute(isMuted);
            if (!isMuted) {
                if (this.musicVolume === 0) {
                    this.setMusicVolume(0.5, false);
                }
                this.setGlobalMuted(false);
            }
            else {
                if (this.soundVolume === 0) {
                    this.setGlobalMuted(true);
                }
            }
            Object.values(this.musicPlaylist).forEach((music) => {
                music?.mute(isMuted);
            });
            _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.set('musicMuted', isMuted);
        };
        this.musicIsPlaying = false;
        this.playlistIsPlaying = {};
        this.sounds = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observable)({});
        this.music = null;
        this.musicPlaylist = {};
        this.fadeTimeout = null;
        this.fadeTimeouts = {};
        this.soundVolume = _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.get('soundVolume') ? Number(_helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.get('soundVolume')) : 1;
        this.musicVolume = checkMusicVolumeDefault();
        this.registerSounds = (audioArray) => {
            this.sounds = { ...this.sounds, ...audioArray };
            if (this.soundMuted) {
                Object.values(audioArray).forEach((sound) => sound.mute(true));
            }
        };
        this.registerMusic = (music) => {
            this.music = music;
            this.music.once('unlock', () => {
                if (this.musicIsPlaying) {
                    this.setMusicIsPlaying(false);
                    this.playMusic();
                }
                if (Object.keys(this.playlistIsPlaying).length) {
                    this.playlistIsPlaying = {};
                    this.playMusicPlaylist();
                }
            });
        };
        this.registerMusicPlaylist = (playlist) => {
            this.musicPlaylist = { ...this.musicPlaylist, ...playlist };
            if (Object.values(this.musicPlaylist)[0]) {
                Object.values(this.musicPlaylist)[0].on('unlock', () => {
                    this.resumeMusicPlaylist();
                });
            }
            this.playlistIsPlaying = {
                ...this.playlistIsPlaying,
                ...Object.keys(playlist).reduce((acc, key) => {
                    acc[key] = false;
                    return acc;
                }, {}),
            };
        };
        this.playAudio = (id, isLoop) => {
            if (document.hidden || !this.audioAllowed)
                return;
            this.fadeTimeout && clearTimeout(this.fadeTimeout);
            const audio = this.sounds[id];
            if (!audio) {
                console.log(`no such audio ${id}`);
                return;
            }
            audio.stop();
            audio.volume(this.soundVolume);
            audio.play();
            isLoop && audio.loop(true);
        };
        this.playAudioPromise = (id, isLoop) => {
            return new Promise((resolve) => {
                if (document.hidden || !this.audioAllowed) {
                    resolve();
                    return;
                }
                this.fadeTimeout && clearTimeout(this.fadeTimeout);
                const audio = this.sounds[id];
                if (!audio) {
                    console.log(`no such audio ${id}`);
                    resolve();
                    return;
                }
                audio.stop();
                audio.volume(this.soundVolume);
                audio.once('end', () => resolve());
                audio.play();
                isLoop && audio.loop(true);
            });
        };
        this.stopAudioByIdSmooth = (id, customFade = fadeDuration) => {
            const audio = this.sounds[id];
            if (!audio)
                return null;
            audio.fade(this.soundVolume, 0, customFade);
            this.fadeTimeouts[id] && clearTimeout(this.fadeTimeouts[id]);
            this.fadeTimeouts[id] = window.setTimeout(() => {
                audio && audio.stop();
            }, customFade);
        };
        this.stopAudio = (id = null) => {
            if (!!id) {
                const audio = this.sounds[id];
                if (!audio) {
                    console.log(`no such audio ${id}`);
                    return;
                }
                audio.stop();
            }
            else {
                const sounds = Object.values(this.sounds);
                sounds.forEach((sound) => {
                    sound.stop();
                });
            }
        };
        this.setMusicIsPlaying = (isPlaying) => {
            this.musicIsPlaying = isPlaying;
        };
        this.setPlaylistIsPlaying = (key, isPlaying) => {
            this.playlistIsPlaying[key] = isPlaying;
        };
        this.playMusic = () => {
            if (document.hidden)
                return;
            if (!this.music) {
                console.log('No Music :(');
                return;
            }
            if (this.musicIsPlaying)
                return;
            this.setMusicIsPlaying(true);
            if (this.root.uiCommon.isMobile && this.music.state() === 'unloaded' && this.musicVolume === 0) {
                return;
            }
            else {
                if (this.music.state() === 'unloaded') {
                    this.music.load();
                }
            }
            this.music.volume(this.musicVolume);
            this.music.seek(0);
            this.music.play();
        };
        this.playMusicSmooth = () => {
            if (!this.music) {
                console.log('No Music :(');
                return;
            }
            if (this.musicIsPlaying)
                return;
            this.setMusicIsPlaying(true);
            if (this.root.uiCommon.isMobile && this.music.state() === 'unloaded' && this.musicVolume === 0) {
                return;
            }
            else {
                if (this.music.state() === 'unloaded') {
                    this.music.load();
                }
            }
            if (!this.audioAllowed)
                return;
            this.music.seek(0);
            if (this.fadeTimeout) {
                clearTimeout(this.fadeTimeout);
            }
            this.music.fade(0, this.musicVolume, fadeDuration);
            this.music.play();
        };
        this.stopMusic = () => {
            if (!this.music)
                return;
            this.setMusicIsPlaying(false);
            this.music.stop();
        };
        this.stopMusicSmooth = () => {
            if (!this.music)
                return;
            this.setMusicIsPlaying(false);
            this.music.fade(this.musicVolume, 0, fadeDuration);
            this.fadeTimeout = window.setTimeout(() => {
                if (this.music) {
                    this.music.stop();
                }
            }, fadeDuration);
        };
        this.pauseMusic = () => {
            if (!this.music)
                return;
            this.music.fade(this.musicVolume, 0, fadeDuration);
            this.fadeTimeout = window.setTimeout(() => {
                if (this.music) {
                    this.music.pause();
                }
            }, fadeDuration);
        };
        this.resumeMusic = () => {
            if (!this.music)
                return;
            if (this.fadeTimeout) {
                clearTimeout(this.fadeTimeout);
            }
            if (this.music?.state() === 'unloaded') {
                return;
            }
            this.music.fade(0, this.musicVolume, fadeDuration);
            if (!this.music.playing()) {
                this.music.play();
            }
        };
        this.playMusicPlaylist = () => {
            Object.keys(this.playlistIsPlaying).forEach((key) => {
                if (!this.playlistIsPlaying[key])
                    return;
                this.playMusicPlaylistItem(key);
            });
        };
        this.playMusicPlaylistItem = (key) => {
            if (!this.musicPlaylist[key]) {
                console.log('No Music :(');
                return;
            }
            if (this.playlistIsPlaying[key])
                return;
            this.setPlaylistIsPlaying(key, true);
            if (this.root.uiCommon.isMobile && this.musicPlaylist[key].state() === 'unloaded' && this.musicVolume === 0) {
                return;
            }
            if (!this.audioAllowed)
                return;
            this.musicPlaylist[key].volume(this.musicVolume);
            this.musicPlaylist[key].seek(0);
            this.musicPlaylist[key].play();
        };
        this.stopMusicPlaylist = () => {
            Object.keys(this.musicPlaylist).forEach((key) => {
                if (!this.musicPlaylist[key])
                    return;
                this.setPlaylistIsPlaying(key, false);
                this.musicPlaylist[key].stop();
            });
        };
        this.stopMusicPlaylistItem = (key) => {
            if (!this.musicPlaylist[key])
                return;
            this.setPlaylistIsPlaying(key, false);
            this.musicPlaylist[key].stop();
        };
        this.stopMusicFadePlaylistItem = (key, fadeDuration) => {
            if (!this.musicPlaylist[key])
                return;
            this.musicPlaylist[key].fade(this.musicVolume, 0, fadeDuration);
            this.fadeTimeouts[key] = window.setTimeout(() => {
                this.setPlaylistIsPlaying(key, false);
                this.musicPlaylist[key].stop();
            }, fadeDuration);
        };
        this.pauseMusicPlaylist = () => {
            Object.keys(this.musicPlaylist).forEach((key) => {
                this.musicPlaylist[key].fade(this.musicVolume, 0, fadeDuration);
                this.fadeTimeouts[key] = window.setTimeout(() => {
                    this.musicPlaylist[key].pause();
                }, fadeDuration);
            });
        };
        this.resumeMusicPlaylist = () => {
            Object.keys(this.fadeTimeouts).map((key) => {
                if (this.fadeTimeouts[key]) {
                    clearTimeout(this.fadeTimeouts[key]);
                }
            });
            Object.keys(this.musicPlaylist).forEach((key) => {
                if (this.musicPlaylist[key].state() === 'unloaded') {
                    return;
                }
                this.musicPlaylist[key].fade(0, this.musicVolume, fadeDuration);
                if (!this.musicPlaylist[key].playing() && this.playlistIsPlaying[key]) {
                    this.musicPlaylist[key].play();
                }
            });
        };
        this.mutePlaylistItem = (key, isMute) => {
            if (!this.musicPlaylist[key])
                return;
            this.musicPlaylist[key].mute(isMute);
        };
        this.setSoundVolume = (value, manual = true) => {
            _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.set('soundVolume', value);
            if (manual) {
                this.setSoundMuted(!value);
            }
            const sounds = Object.values(this.sounds);
            this.soundVolume = value;
            sounds.forEach((sound) => {
                sound.volume(value);
            });
        };
        this.setMusicVolume = (value, manual = true) => {
            _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.set('musicVolume', value);
            if (manual) {
                this.setMusicMuted(!value);
            }
            this.musicVolume = value;
            this.music?.volume(value);
            Object.values(this.musicPlaylist).forEach((music) => {
                music.volume(value);
            });
        };
        this.root = root;
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeObservable)(this);
        this.setGlobalMuted(isMuted);
        const urlParams = new URLSearchParams(window.location.search);
        const paramGameSoundEnabled = urlParams.get('gameSoundEnabled');
        if (paramGameSoundEnabled && paramGameSoundEnabled === 'false') {
            this.setGlobalMuted(true);
        }
        else if (paramGameSoundEnabled && paramGameSoundEnabled === 'true') {
            this.setGlobalMuted(false);
        }
        document.documentElement.addEventListener('click', () => {
            this.setAudioAllowed(true);
        }, { once: true });
        document.documentElement.addEventListener('keydown', () => {
            this.setAudioAllowed(true);
        }, { once: true });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => this.root.uiCommon.isVisible, (isVisible) => {
            if (this.globalMuted)
                return;
            howler__WEBPACK_IMPORTED_MODULE_1__.Howler.mute(!isVisible);
            howler__WEBPACK_IMPORTED_MODULE_1__.Howler.ctx.resume();
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => [this.globalMuted, this.soundMuted, this.musicMuted], () => {
            if (this.globalMuted || (this.soundMuted && this.musicMuted)) {
                window.parent.postMessage({ type: 'soundMuted', data: true }, '*');
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => [this.globalMuted], () => {
            if (!this.globalMuted) {
                window.parent.postMessage({ type: 'soundMuted', data: false }, '*');
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => this.musicVolume, (musicVolume) => {
            if (!this.root.uiCommon.isMobile)
                return;
            if (!musicVolume)
                return;
            if (this.music?.state() === 'unloaded') {
                this.music?.load();
                this.music.on('load', () => {
                    if (this.musicIsPlaying) {
                        this.stopMusic();
                        setTimeout(() => {
                            this.playMusic();
                        }, 100);
                    }
                });
            }
            if (Object.keys(this.musicPlaylist).length > 0) {
                for (const trackId in this.musicPlaylist) {
                    if (this.musicPlaylist.hasOwnProperty(trackId)) {
                        const track = this.musicPlaylist[trackId];
                        if (track.state() === 'unloaded') {
                            track.load();
                            track.on('load', () => {
                                if (this.playlistIsPlaying[trackId]) {
                                    this.stopMusicPlaylistItem(trackId);
                                    setTimeout(() => {
                                        this.playMusicPlaylistItem(trackId);
                                    }, 100);
                                }
                            });
                        }
                    }
                }
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => this.musicVolume, (musicVolume) => {
            if (!this.root.uiCommon.isMobile)
                return;
            if (this.music?.state() !== 'unloaded')
                return;
            if (!musicVolume)
                return;
            this.music?.load();
            this.music.on('load', () => {
                if (this.musicIsPlaying) {
                    this.stopMusicPlaylist();
                    this.stopMusic();
                    setTimeout(() => {
                        this.playMusic();
                        this.playMusicPlaylist();
                    }, 100);
                }
            });
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => this.root.profileCommon.settings?.options, (0,mobx__WEBPACK_IMPORTED_MODULE_0__.action)((options) => {
            if (options?.defaultSoundOff && isMobile && !_helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.has('soundMuted')) {
                this.soundMuted = true;
                Object.values(this.sounds).forEach((sound) => sound.mute(true));
            }
        }));
    }
    get allMuted() {
        if (!this.music && !Object.keys(this.musicPlaylist).length) {
            return this.globalMuted || this.soundMuted || this.soundVolume === 0;
        }
        return (this.globalMuted || (this.musicMuted && this.soundMuted) || (this.musicVolume === 0 && this.soundVolume === 0));
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AudioCommon.prototype, "audioAllowed", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "setAudioAllowed", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AudioCommon.prototype, "globalMuted", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "setGlobalMuted", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "globalUnMute", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.computed
], AudioCommon.prototype, "allMuted", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AudioCommon.prototype, "soundMuted", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "setSoundMuted", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AudioCommon.prototype, "musicMuted", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "setMusicMuted", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AudioCommon.prototype, "musicIsPlaying", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AudioCommon.prototype, "playlistIsPlaying", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AudioCommon.prototype, "soundVolume", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AudioCommon.prototype, "musicVolume", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "registerSounds", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "registerMusic", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "registerMusicPlaylist", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "playAudio", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "playAudioPromise", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "stopAudioByIdSmooth", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "stopAudio", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "setMusicIsPlaying", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "setPlaylistIsPlaying", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "playMusic", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "playMusicSmooth", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "stopMusic", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "stopMusicSmooth", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "pauseMusic", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "resumeMusic", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "playMusicPlaylist", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "playMusicPlaylistItem", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "stopMusicPlaylist", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "stopMusicPlaylistItem", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "stopMusicFadePlaylistItem", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "pauseMusicPlaylist", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "resumeMusicPlaylist", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "mutePlaylistItem", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "setSoundVolume", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AudioCommon.prototype, "setMusicVolume", void 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AudioCommon);


/***/ }),

/***/ 33738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8570);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

class AutobetCommon {
    constructor(root) {
        this.autoModeEnabled = false;
        this.autoBetEnabled = false;
        this.autoBetsAmount = 0;
        this.autoBetLimit = false;
        this.autoBetIndex = null;
        this.stopOnAnyWin = false;
        this.min = 0.01;
        this.max = 999;
        this.initialAmount = 0;
        this.onWinIncrease = false;
        this.onWinIncreaseAmount = 0;
        this.setOnWinIncrease = (increase) => {
            if (increase) {
                this.setOnWinIncreaseAmount(100);
            }
            else {
                this.setOnWinIncreaseAmount(0);
            }
            this.onWinIncrease = increase;
        };
        this.setOnWinIncreaseAmount = (amount) => {
            this.onWinIncreaseAmount = amount;
        };
        this.setOnLoseIncrease = (increase) => {
            if (increase) {
                this.setOnLoseIncreaseAmount(100);
            }
            else {
                this.setOnLoseIncreaseAmount(0);
            }
            this.onLoseIncrease = increase;
        };
        this.setOnLoseIncreaseAmount = (amount) => {
            this.onLoseIncreaseAmount = amount;
        };
        this.onLoseIncrease = false;
        this.onLoseIncreaseAmount = 0;
        this.setAutoModeEnabled = (autoModeEnabled) => {
            const { clearBackendErrors } = this.root.uiCommon;
            clearBackendErrors();
            this.autoModeEnabled = autoModeEnabled;
        };
        this.setAutoBetEnabled = (autoBetEnabled) => {
            this.autoBetEnabled = autoBetEnabled;
        };
        this.setAutoBetsAmount = (amount) => {
            this.autoBetsAmount = Number(amount);
        };
        this.setInitialAmount = (amount) => {
            this.initialAmount = amount;
        };
        this.setAutoBetLimit = (autoBetLimit) => {
            this.autoBetLimit = autoBetLimit;
        };
        this.setStopOnAnyWin = (stopOnAnyWin) => {
            this.stopOnAnyWin = stopOnAnyWin;
        };
        this.setAutoBetIndex = (autoBetIndex) => {
            this.autoBetIndex = autoBetIndex;
        };
        this.root = root;
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeObservable)(this);
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => this.root.uiCommon?.postMessage, () => {
            if (this.root.uiCommon?.postMessage?.data?.type === 'stopAutoplay') {
                this.setAutoBetEnabled(false);
            }
        });
    }
    get onWinIncreaseError() {
        if (this.onWinIncrease && this.onWinIncreaseAmount < this.min) {
            return 'COMMON.INCREASE_BY_VALIDATION';
        }
        if (this.onWinIncrease && !this.onWinIncreaseAmount) {
            return 'COMMON.INCREASE_BY_VALIDATION';
        }
        return undefined;
    }
    get onLoseIncreaseError() {
        if (this.onLoseIncrease && this.onLoseIncreaseAmount < this.min) {
            return 'COMMON.INCREASE_BY_VALIDATION';
        }
        if (this.onLoseIncrease && !this.onLoseIncreaseAmount) {
            return 'COMMON.INCREASE_BY_VALIDATION';
        }
        return undefined;
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AutobetCommon.prototype, "autoModeEnabled", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AutobetCommon.prototype, "autoBetEnabled", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AutobetCommon.prototype, "autoBetsAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AutobetCommon.prototype, "autoBetLimit", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AutobetCommon.prototype, "autoBetIndex", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AutobetCommon.prototype, "stopOnAnyWin", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AutobetCommon.prototype, "initialAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AutobetCommon.prototype, "onWinIncrease", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AutobetCommon.prototype, "onWinIncreaseAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.computed
], AutobetCommon.prototype, "onWinIncreaseError", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AutobetCommon.prototype, "setOnWinIncrease", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AutobetCommon.prototype, "setOnWinIncreaseAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AutobetCommon.prototype, "setOnLoseIncrease", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AutobetCommon.prototype, "setOnLoseIncreaseAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AutobetCommon.prototype, "onLoseIncrease", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], AutobetCommon.prototype, "onLoseIncreaseAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.computed
], AutobetCommon.prototype, "onLoseIncreaseError", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AutobetCommon.prototype, "setAutoModeEnabled", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AutobetCommon.prototype, "setAutoBetEnabled", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AutobetCommon.prototype, "setAutoBetsAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AutobetCommon.prototype, "setInitialAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AutobetCommon.prototype, "setAutoBetLimit", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AutobetCommon.prototype, "setStopOnAnyWin", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], AutobetCommon.prototype, "setAutoBetIndex", void 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutobetCommon);


/***/ }),

/***/ 15248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8570);
/* harmony import */ var _helpers_truncateDecimals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12215);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class BalanceCommon {
    constructor(root) {
        this.balanceData = [];
        this.setBalanceData = ([balance, ticketId, result]) => {
            if (ticketId === undefined && result === undefined) {
                this.setBalance(balance);
                return;
            }
            const item = { timestamp: Date.now(), ticketId, result, balance };
            const index = this.balanceData.findIndex((item) => item?.decrement?.ticketId === ticketId || item?.increment?.ticketId === ticketId);
            const type = index === -1 ? 'decrement' : 'increment';
            if (type === 'decrement') {
                this.balanceData.push({
                    increment: undefined,
                    decrement: item,
                });
            }
            if (type === 'increment') {
                this.balanceData[index].increment = item;
            }
            this.setBalanceTimestamp(Date.now());
        };
        this.removeBalanceData = (value) => {
            this.balanceData = this.balanceData.filter((_, index) => index > value);
        };
        this.loopTimeout = null;
        this.setBalance = (value) => {
            if (!this.root.profileCommon.profile)
                return;
            this.root.profileCommon.profile = {
                ...this.root.profileCommon.profile,
                balance: (0,_helpers_truncateDecimals__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value, this.root.profileCommon.profile?.rounding),
            };
            window.parent.postMessage(JSON.stringify({
                type: 'balanceUpdate',
                balance: value,
            }), '*');
        };
        this.getBalanceDataLastIndex = () => {
            if (!this.balanceData.length)
                return -1;
            let index = 0;
            let timestamp = 0;
            for (let i = 0; i < this.balanceData.length; i++) {
                if (this.balanceData[i]?.decrement?.timestamp > timestamp) {
                    index = i;
                    timestamp = this.balanceData[i].decrement.timestamp;
                }
                if (this.balanceData[i]?.increment?.timestamp > timestamp) {
                    index = i;
                    timestamp = this.balanceData[i].increment.timestamp;
                }
            }
            return index;
        };
        this.balanceTimestamp = Date.now();
        this.setBalanceTimestamp = (value) => {
            this.balanceTimestamp = value;
        };
        this.loop = () => {
            if (!this.balanceData.length)
                return;
            const index = this.getBalanceDataLastIndex();
            const increment = this.balanceData[index].increment;
            const decrement = this.balanceData[index].decrement;
            if (increment && increment.result === 'canceled') {
                this.setBalance(increment.balance);
                return;
            }
            if (decrement && !increment) {
                this.setBalance(decrement.balance);
                return;
            }
            if (this.config.mode === 'ticketId')
                return;
            if (Date.now() >= increment.timestamp + this.config.delay) {
                this.setBalance(increment.balance);
                this.removeBalanceData(index);
                return;
            }
            clearTimeout(this.loopTimeout);
            this.loopTimeout = setTimeout(() => this.setBalanceTimestamp(Date.now()), this.config.delay);
        };
        this.updateBalanceFromTicketId = (value) => {
            if (this.config.mode !== 'ticketId')
                return;
            const index = this.balanceData.findIndex((item) => item?.increment?.ticketId === value);
            if (index === -1)
                return;
            const increment = this.balanceData[index].increment;
            this.setBalance(increment.balance);
            this.removeBalanceData(index);
            return true;
        };
        this.root = root;
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeObservable)(this);
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => [this.balanceTimestamp], this.loop);
    }
    get config() {
        return {
            delay: 0,
            mode: 'default',
            ...this.root.game?.gameConfig?.balance,
        };
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.computed
], BalanceCommon.prototype, "config", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], BalanceCommon.prototype, "balanceData", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], BalanceCommon.prototype, "setBalanceData", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], BalanceCommon.prototype, "removeBalanceData", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], BalanceCommon.prototype, "loopTimeout", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], BalanceCommon.prototype, "setBalance", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], BalanceCommon.prototype, "getBalanceDataLastIndex", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], BalanceCommon.prototype, "balanceTimestamp", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], BalanceCommon.prototype, "setBalanceTimestamp", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], BalanceCommon.prototype, "loop", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], BalanceCommon.prototype, "updateBalanceFromTicketId", void 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BalanceCommon);


/***/ }),

/***/ 42718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8570);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58608);
/* harmony import */ var _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74065);
/* harmony import */ var _helpers_round__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77889);
/* harmony import */ var _helpers_floor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70903);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class FreebetsCommon {
    constructor(root) {
        this.freebetsData = {
            enabled: false,
            time: undefined,
            id: undefined,
            game: {},
            gameSuccessIndexList: [],
        };
        this.forcedDisabledFreebets = null;
        this.isGameInProgress = false;
        this.onFreebetChange = {
            callback: () => { },
            showConfirm: false,
            additionalText: null,
        };
        this.initFreebetsData = () => {
            const activeFreebet = this.freebets.filter((item) => !item.archived);
            if (!activeFreebet.length)
                return;
            let freebetsData = {
                enabled: true,
                time: undefined,
                id: activeFreebet[0].id,
                game: {},
                gameSuccessIndexList: [],
            };
            const data = JSON.parse(_helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.get('freebetsData'));
            if (data) {
                freebetsData = { ...freebetsData, ...data };
            }
            if (freebetsData.time && Date.now() >= freebetsData.time) {
                freebetsData.enabled = true;
            }
            if (!freebetsData.time) {
                freebetsData.enabled = true;
            }
            if (!freebetsData.enabled) {
                freebetsData.id = undefined;
            }
            if (freebetsData.enabled && !activeFreebet.find((item) => item.id === freebetsData?.id)?.id) {
                freebetsData.id = activeFreebet[0].id;
            }
            this.updateFreebetsData(freebetsData);
        };
        this.updateFreebetsData = (value) => {
            this.freebetsData = { ...this.freebetsData, ...value };
            _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.set('freebetsData', JSON.stringify(this.freebetsData));
        };
        this.setOnFreebetChange = ({ callback = () => { }, showConfirm = false, additionalText = null }) => {
            this.onFreebetChange = { callback, showConfirm, additionalText };
        };
        this.setForcedDisabledFreebets = (val) => {
            this.forcedDisabledFreebets = val;
        };
        this.setIsGameInProgress = (val) => {
            this.isGameInProgress = val;
        };
        this.setFirstFreebet = () => {
            const firstFreebet = this.freebets.find((item) => !item.archived);
            if (!firstFreebet) {
                this.updateFreebetsData({
                    enabled: false,
                    id: undefined,
                });
                return;
            }
            this.updateFreebetsData({
                id: firstFreebet.id,
            });
        };
        this.getFreebetsDataGameByIndex = (index) => {
            return this.freebetsData.game[index];
        };
        this.freebets = [];
        this.loading = false;
        this.setLoading = (value) => {
            this.loading = value;
        };
        this.getFreebets = async () => {
            const { apiKey, token, freebetsVerified } = this.root.profileCommon.profile;
            if (!apiKey || !token || !freebetsVerified)
                return;
            if (!this.root.game?.gameConfig?.freebets?.enabled)
                return;
            try {
                this.setLoading(true);
                const { data } = await (0,_api__WEBPACK_IMPORTED_MODULE_1__/* .getFreeBets */ .DV)({
                    headers: { authorization: token, cid: apiKey },
                    gameId: this.root.game.gameServerId,
                });
                const sorted = [...data].sort((a, b) => a.offer.expire - b.offer.expire ||
                    new Date(a.expiresAt).getDate() - new Date(b.expiresAt).getDate() ||
                    new Date(a.offer.endAt).getDate() - new Date(b.offer.endAt).getDate());
                (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(() => {
                    this.freebets = sorted;
                });
                this.initFreebetsData();
                this.setLoading(false);
            }
            catch (error) {
                this.setLoading(false);
                console.log('Fetch freebets error:', error);
            }
        };
        this.decrementFreebetsLeftById = (id) => {
            this.freebets = this.freebets.map((item) => {
                if (item.id === id && item.left > 0) {
                    item.left -= 1;
                }
                return item;
            });
        };
        this.updateFreebetsPayout = ({ index, coefficient, payout, }) => {
            if (!this.list[index]) {
                console.log('updateFreebetsPayout not index', index);
                return;
            }
            if (!this.list[index].freebet) {
                console.log('updateFreebetsPayout not freebet', index);
                return;
            }
            if (!index && !coefficient && !this.list[index].freebet)
                return;
            const id = this.list[index]?.freebetActive?.id;
            const amount = this.list[index]?.freebetActive?.offer?.configuration[0]?.betAmount;
            if (!id || !amount)
                return;
            let currentPayout = payout || (0,_helpers_floor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(amount * Number(coefficient));
            if (this.root.profileCommon.profile.freebetsType === 'greedy') {
                currentPayout = (0,_helpers_floor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(currentPayout - amount);
            }
            currentPayout = Math.min(currentPayout, (0,_helpers_floor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Number(this.root.profileCommon.limit.maxWin) + Number(amount)));
            this.freebets = this.freebets.map((item) => {
                if (item.id !== id)
                    return item;
                const mutableItem = { ...item };
                const mutablePayout = mutableItem.payout[0] || {
                    currency: this.root.profileCommon.profile.currency,
                    payout: 0,
                    enrollmentId: '',
                    payoutUsd: 0,
                    payoutEur: 0,
                    id: '',
                };
                mutablePayout.payout = (0,_helpers_round__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(mutablePayout.payout + currentPayout);
                mutableItem.payout = [mutablePayout];
                console.log({ mutableItem });
                return mutableItem;
            });
        };
        this.freebetCompletedId = undefined;
        this.setFreebetCompletedId = (id) => {
            this.freebetCompletedId = id;
        };
        this.reactionFreebetCompleted = async () => {
            if (!this.freebetCompletedId)
                return;
            if (!this.freebetCompleted?.payout[0]?.payout)
                return;
            this.root.uiCommon.setModal({
                modalName: 'freebetsCompleted',
                render: true,
                delayOpen: this.root.game?.gameConfig?.freebets?.completed?.delayOpen,
                delayClose: this.root.game?.gameConfig?.freebets?.completed?.delayClose,
                callbackOnClose: () => {
                    this.setFreebetCompletedId();
                },
            });
        };
        this.setFreebetsArchiveById = (id) => {
            this.freebets = this.freebets.map((item) => {
                if (item.id === id) {
                    item.archived = true;
                    this.setFreebetCompletedId(id);
                }
                return item;
            });
        };
        this.updateFreebetsArchive = (id) => {
            const freebet = this.freebets.find((item) => item.id === id);
            const freebetsInList = Object.values(this.list).filter((item) => item.freebet && item.freebetActive?.id === id).length;
            if (!freebet || freebet.left > 0 || freebet.archived || freebetsInList !== 1)
                return;
            setTimeout(() => {
                this.setFreebetsArchiveById(id);
                this.setFirstFreebet();
            }, 0);
        };
        this.updateFreebetsArchiveEndTime = (id) => {
            const freebet = this.freebets.find((item) => item.id === id);
            if (!freebet || freebet.archived)
                return;
            this.setFreebetsArchiveById(id);
            this.setFirstFreebet();
        };
        this.list = {};
        this.initList = () => {
            const list = _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.get('freebetsList');
            if (!list)
                return;
            this.list = JSON.parse(list);
        };
        this.listAdd = (value) => {
            if (value.freebet && this.freebetActive)
                this.decrementFreebetsLeftById(this.freebetActive.id);
            this.list[value.index] = {
                index: 0,
                freebet: false,
                time: Date.now(),
                freebetActive: this.freebetActive,
                game: this.getFreebetsDataGameByIndex(value.index),
                ...value,
            };
            _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.set('freebetsList', JSON.stringify(this.list));
            this.updateFreebetsSuccessIndex();
        };
        this.listRemoveByIndex = (index = 0) => {
            if (!this.list[index])
                return;
            if (!this.freebetsData.enabled && this.list[index].freebet)
                this.connectToFreebetCommonUpdate(index, this.list[index].game);
            if (this.freebetsData.enabled &&
                this.freebetActive &&
                this.list[index].freebet &&
                this.freebetActive.id !== this.list[index].freebetActive.id) {
                this.connectToFreebetCommonHelperUpdate(index, this.list[index].game);
            }
            if (this.freebetsData.enabled && this.freebetActive && !this.list[index].freebet) {
                this.connectToFreebetCommonHelperUpdate(index, this.list[index].game);
            }
            this.freebetsData.game[index] = this.list[index].game;
            if (this.list[index].freebet && this.list[index]?.freebetActive?.id)
                this.updateFreebetsArchive(this.list[index]?.freebetActive?.id);
            delete this.list[index];
            _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.set('freebetsList', JSON.stringify(this.list));
            this.updateFreebetsSuccessIndex();
        };
        this.listGetByIndex = (index = 0) => {
            if (!this.list[index])
                return undefined;
            return this.list[index];
        };
        this.connectToFreebetCommonConnect = undefined;
        this.connectToFreebetCommonUpdate = undefined;
        this.connectToFreebetCommon = (connect, update) => {
            this.connectToFreebetCommonConnect = connect;
            this.connectToFreebetCommonUpdate = update;
        };
        this.reconnectToFreebetCommon = (connect, update) => {
            this.connectToFreebetCommonConnect = connect;
            this.connectToFreebetCommonUpdate = update;
            this.connectToFreebetCommonLoopUpdate();
        };
        this.connectToFreebetCommonLoopConnect = () => {
            if (!this.connectToFreebetCommonConnect || !this.connectToFreebetCommonUpdate)
                return;
            const connectData = this.connectToFreebetCommonConnect();
            const connectDataToObj = connectData.map((item, index) => [index, item]);
            if (Object.keys(this.list).length) {
                for (let key of Object.keys(this.list)) {
                    const listItem = this.list[key];
                    connectDataToObj.map((item, index) => {
                        if (Number(listItem.index) !== index)
                            return item;
                        return [Number(listItem.index), item.game];
                    });
                }
            }
            this.updateFreebetsData({
                game: Object.fromEntries(connectDataToObj),
            });
        };
        this.connectToFreebetCommonLoopUpdate = () => {
            if (!this.connectToFreebetCommonConnect ||
                !this.connectToFreebetCommonUpdate ||
                !Object.keys(this.freebetsData.game).length)
                return;
            for (let key of Object.keys(this.freebetsData.game)) {
                if (this.list[key])
                    continue;
                this.connectToFreebetCommonUpdate(key, this.getFreebetsDataGameByIndex(key));
            }
        };
        this.connectToFreebetCommonLoopId = () => {
            if (!this.connectToFreebetCommonConnect ||
                !this.connectToFreebetCommonUpdate ||
                !Object.keys(this.freebetsData.gameSuccessIndexList).length ||
                !this.freebetActive)
                return;
            for (let key of Object.keys(this.freebetsData.game)) {
                if (this.list[key])
                    continue;
                if (this.freebetsSuccessIndexList.includes(Number(key))) {
                    this.connectToFreebetCommonHelperUpdate(key, this.getFreebetsDataGameByIndex(key));
                }
                else {
                    this.connectToFreebetCommonUpdate(key, this.getFreebetsDataGameByIndex(key));
                }
            }
        };
        this.connectToFreebetCommonHelperUpdate = (index, game) => {
            if (!this.connectToFreebetCommonConnect || !this.connectToFreebetCommonUpdate || !this.freebetActive)
                return;
            const configuration = this.freebetActive?.offer?.configuration[0];
            const minCoefficient = configuration?.minCoefficient;
            this.connectToFreebetCommonUpdate(index, {
                ...game,
                minCoefficient,
                amount: configuration?.betAmount,
                ...(game?.coefficient && {
                    coefficient: Number(game.coefficient) > 0 && Number(game.coefficient) < minCoefficient
                        ? String(minCoefficient)
                        : String(game.coefficient),
                }),
            });
        };
        this.updateFreebetsSuccessIndex = () => {
            if (!this.freebetsData.enabled) {
                const freebetItemIndex = Object.keys(this.list)
                    .filter((key) => this.list[key].freebet)
                    .map((key) => this.list[key].index);
                this.updateFreebetsData({
                    gameSuccessIndexList: freebetItemIndex,
                });
                return;
            }
            let successIndexList = Object.keys(this.freebetsData.game).map((_, index) => index);
            for (let key of Object.keys(this.list)) {
                const listItem = this.list[key];
                if (!listItem.freebet) {
                    successIndexList = successIndexList.filter((index) => index !== listItem.index);
                    continue;
                }
            }
            if (this.freebetActive.left <= 0) {
                const listItemIndex = Object.keys(this.list).filter((key) => this.list[key].freebet);
                successIndexList = successIndexList.filter((index) => listItemIndex.includes(String(index)));
            }
            this.updateFreebetsData({
                gameSuccessIndexList: successIndexList,
            });
        };
        this.disableAutoBet = () => {
            const { autoBetEnabled, setAutoBetEnabled } = this.root.autobetCommon;
            if (typeof autoBetEnabled === 'boolean') {
                setAutoBetEnabled(false);
            }
            if (Array.isArray(autoBetEnabled)) {
                autoBetEnabled.map((_, index) => {
                    setAutoBetEnabled(false, index);
                });
            }
        };
        this.autoDisabledInterval = null;
        this.reactionAutoDisabled = () => {
            if (this.autoDisabledInterval)
                clearInterval(this.autoDisabledInterval);
            if (!this.freebetsActive.length)
                return;
            this.autoDisabledInterval = window.setInterval(() => {
                for (let freebet of this.freebetsActive) {
                    const endTime = Date.now() > new Date(freebet.offer.endAt).getTime();
                    if (endTime)
                        this.updateFreebetsArchiveEndTime(freebet.id);
                }
            }, 1000);
        };
        this.root = root;
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeObservable)(this);
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => this.root.profileCommon.profile.freebetsVerified, (enabled) => {
            if (enabled) {
                this.initList();
                this.getFreebets();
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => [this.freebetEnabled], () => {
            if (this.freebetEnabled) {
                this.connectToFreebetCommonLoopConnect();
                this.connectToFreebetCommonLoopId();
                this.updateFreebetsSuccessIndex();
                this.disableAutoBet();
            }
            if (!this.freebetsData.enabled) {
                this.connectToFreebetCommonLoopUpdate();
                this.updateFreebetsSuccessIndex();
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => [this.freebetId], () => {
            this.updateFreebetsSuccessIndex();
            this.connectToFreebetCommonLoopId();
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => [this.freebetCompletedId], () => {
            this.reactionFreebetCompleted();
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => [this.freebetsActive.length], () => {
            this.reactionAutoDisabled();
        });
    }
    get freebetEnabled() {
        return this.freebetsData.enabled;
    }
    get freebetId() {
        return this.freebetsData.id;
    }
    get freebetsActive() {
        return this.freebets.filter((item) => !item.archived);
    }
    get freebetsArchived() {
        return this.freebets.filter((item) => item.archived);
    }
    get freebetActive() {
        if (!this.freebetsData.enabled)
            return undefined;
        if (!this.freebetsData.id)
            return undefined;
        const active = this.freebets.filter((item) => item.id === this.freebetsData.id)[0];
        if (!active)
            return undefined;
        return active;
    }
    get freebetCompleted() {
        if (!this.freebetCompletedId)
            return undefined;
        return this.freebets.find((item) => item.id === this.freebetCompletedId);
    }
    get freebetsSuccessIndexList() {
        return this.freebetsData.gameSuccessIndexList;
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], FreebetsCommon.prototype, "freebetsData", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], FreebetsCommon.prototype, "forcedDisabledFreebets", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], FreebetsCommon.prototype, "isGameInProgress", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], FreebetsCommon.prototype, "onFreebetChange", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], FreebetsCommon.prototype, "updateFreebetsData", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], FreebetsCommon.prototype, "setOnFreebetChange", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], FreebetsCommon.prototype, "setForcedDisabledFreebets", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], FreebetsCommon.prototype, "setIsGameInProgress", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.computed
], FreebetsCommon.prototype, "freebetEnabled", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.computed
], FreebetsCommon.prototype, "freebetId", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], FreebetsCommon.prototype, "freebets", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.computed
], FreebetsCommon.prototype, "freebetsActive", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.computed
], FreebetsCommon.prototype, "freebetsArchived", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.computed
], FreebetsCommon.prototype, "freebetActive", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], FreebetsCommon.prototype, "loading", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], FreebetsCommon.prototype, "setLoading", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], FreebetsCommon.prototype, "getFreebets", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], FreebetsCommon.prototype, "decrementFreebetsLeftById", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], FreebetsCommon.prototype, "updateFreebetsPayout", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], FreebetsCommon.prototype, "freebetCompletedId", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], FreebetsCommon.prototype, "setFreebetCompletedId", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.computed
], FreebetsCommon.prototype, "freebetCompleted", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], FreebetsCommon.prototype, "reactionFreebetCompleted", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], FreebetsCommon.prototype, "setFreebetsArchiveById", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.computed
], FreebetsCommon.prototype, "freebetsSuccessIndexList", null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FreebetsCommon);


/***/ }),

/***/ 73826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_ProfileCommon)
});

;// ./src/framework/helpers/cookieService.ts
class CookieManager {
    setCookie(name, value, expiresInMilliseconds) {
        const date = new Date();
        date.setTime(date.getTime() + expiresInMilliseconds);
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value};${expires};path=/`;
    }
    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    deleteCookie(name) {
        this.setCookie(name, "", -1);
    }
    setObjectCookie(name, object, time) {
        const value = JSON.stringify(object);
        this.setCookie(name, value, time);
    }
    getObjectCookie(name) {
        const value = this.getCookie(name);
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return null;
        }
    }
}
const cookieManager = new CookieManager();

// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: ./src/framework/i18n/index.ts
var i18n = __webpack_require__(46476);
// EXTERNAL MODULE: consume shared module (default) jwt-js-decode@^1.8.2 (strict) (fallback: ./node_modules/jwt-js-decode/dist/jwt-js-decode.min.js)
var jwt_js_decode_min_js_ = __webpack_require__(51849);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/constants/index.ts
var constants = __webpack_require__(49865);
// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
;// ./src/framework/constants/socialLanguages.ts
const socialLanguages = [
    'en-soc',
    'en_soc',
    'es_soc',
    'es-soc',
    'de_soc',
    'de-soc',
    'fr_soc',
    'fr-soc',
    'it_soc',
    'it-soc',
    'tr_soc',
    'tr-soc',
    'hi-soc',
    'hi_soc',
    'pl_soc',
    'pl-soc',
    'pt_soc',
    'pt-soc',
    'sv_soc',
    'sv-soc',
    'vi_soc',
    'vi-soc',
    'zh_soc',
    'zh-soc',
    'th_soc',
    'th-soc',
    'ja_soc',
    'ja-soc',
    'ko_soc',
    'ko-soc',
    'ru_soc',
    'ru-soc',
    'bn_soc',
    'bn-soc',
    'uz_soc',
    'uz-soc',
    'az_soc',
    'az-soc',
];
const isSocialLanguage = (language) => socialLanguages.includes(language);


// EXTERNAL MODULE: ./src/framework/helpers/timeout.ts
var timeout = __webpack_require__(9858);
// EXTERNAL MODULE: consume shared module (default) @fingerprintjs/fingerprintjs@^4.5.0 (strict) (fallback: ./node_modules/@fingerprintjs/fingerprintjs/dist/fp.esm.js)
var fp_esm_js_ = __webpack_require__(22208);
// EXTERNAL MODULE: ./src/framework/helpers/getNestedProp.ts
var getNestedProp = __webpack_require__(99875);
;// ./src/framework/helpers/dice/redirectHelper.ts
function redirectHelper(gameServerId = '', gameServerTheme = '', splitTest) {
    if (gameServerId === 'dice' && gameServerTheme === 'dice' && splitTest) {
        const { variantValue, variantType } = splitTest;
        const origin = window.location.origin;
        const currentUrl = window.location.href;
        let targetUrl = '';
        if (variantType === 'test' && variantValue === 'dice_remaster') {
            targetUrl = `${origin}/new${window.location.search}`;
        }
        else if (variantValue === 'dice_remaster' ||
            (variantType === 'default' && variantValue === null) ||
            variantType === 'control') {
            targetUrl = currentUrl.replace('/new', '');
        }
        if (targetUrl && currentUrl !== targetUrl) {
            window.location.href = targetUrl;
        }
    }
}
/* harmony default export */ const dice_redirectHelper = (redirectHelper);

;// ./src/framework/helpers/clientCurrencySettingsHelper.ts
const findConfig = (configs, cid, subPartnerId) => {
    let config = configs.find((c) => cid !== null && c.cid.includes(cid) && subPartnerId !== null && c.sub_partner_id?.includes(subPartnerId));
    if (config)
        return config.currency;
    config = configs.find((c) => cid !== null && c.cid.includes(cid) && !c.sub_partner_id);
    if (config)
        return config.currency;
    return false;
};
const clientCurrencySettingsHelper = ({ gameCurrencySettings, demoAvailable, }) => {
    if (!gameCurrencySettings || !gameCurrencySettings.length)
        return false;
    const urlParams = new URLSearchParams(window.location.search);
    const cid = urlParams.get('cid');
    const subPartnerId = urlParams.get('sub_partner_id');
    const configs = gameCurrencySettings.filter((config) => (demoAvailable ? config.forDemo === true : !config.forDemo));
    return findConfig(configs, cid, subPartnerId) || false;
};

;// ./src/framework/store/ProfileCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















const defaultProfile = {
    apiKey: '',
    isDemo: true,
    isTest: true,
    id: '',
    sid: '',
    balance: 0,
    balanceLoad: false,
    token: '',
    externalToken: '',
    playerId: '',
    name: '',
    currency: '',
    currencySign: '',
    subPartnerId: '',
    freebetsVerified: undefined,
    freebetsType: null,
    availableFreebets: null,
    sub: '',
    rounding: 2,
    splitTest: null,
    storiesNew: false,
    storage: {},
};
const defaultLimit = {
    defaultBet: 1,
    currency: '',
    currencyId: 0,
    maxBet: 100,
    maxWin: 0,
    minBet: 0.01,
};
class ProfileCommon {
    constructor(root) {
        this.settings = {};
        this.profile = defaultProfile;
        this.customerId = '';
        this.limit = defaultLimit;
        this.centrifugeAuthenticated = false;
        this.changedNickname = '';
        this.rates = {};
        this.statistics = {};
        this.language = constants/* defaultLanguage */.eG;
        this.userAuthenticated = false;
        this.authInProgress = false;
        this.version = {
            rng: '',
            game: '',
        };
        this.rtp = (0,bootstrap.GET_GAME_CONFIG)().defaultRtp;
        this.customRtp = false;
        this.fork = '';
        this.rules = {};
        this.splitTest = {
            variantType: null,
            variantValue: null,
        };
        this.checkCookies = () => {
            const cookieSplitTest = cookieManager.getObjectCookie('splitTest');
            if (cookieSplitTest) {
                this.setSplitTest(cookieSplitTest);
                cookieSplitTest?.variantValue !== null &&
                    cookieSplitTest?.variantType !== 'default' &&
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'experiment_running',
                        attribute: `${cookieSplitTest?.variantValue}: ${cookieSplitTest?.variantType}`,
                    });
            }
        };
        this.setSplitTest = (val) => {
            this.splitTest = val;
        };
        this.logout = () => {
            console.log('LOGOUT!');
            localStorageHelper/* default */.A.remove('apiKey');
            localStorageHelper/* default */.A.remove('token');
            localStorageHelper/* default */.A.remove('externalToken');
            localStorageHelper/* default */.A.set('isDemo', false);
            this.profile = defaultProfile;
            this.limit = defaultLimit;
            this.userAuthenticated = false;
            this.authInProgress = false;
            this.root.uiCommon.showUnauthorizedAlert();
        };
        this.auth = async (gameId) => {
            this.authInProgress = true;
            this.root.uiCommon.setAlertList({
                type: 'warning',
                title: '',
                text: 'COMMON.LOADING.PLEASE_WAIT',
                sticky: true,
            });
            const urlParams = new URLSearchParams(document.location.search);
            const paramCid = urlParams.get('cid');
            const paramSubPartnerId = urlParams.get('sub_partner_id');
            const paramExternalToken = urlParams.get('token');
            const paramDemo = urlParams.get('demo');
            const paramLocale = urlParams.get('locale');
            const cidForSettings = !Boolean(paramCid) ? constants/* demoCID */.Qc : paramCid;
            const setting = await this.fetchSettings({ cid: cidForSettings, subPartnerId: paramSubPartnerId, gameId });
            if (!setting) {
                this.authInProgress = false;
                this.root.uiCommon.lockedApp(true);
                this.root.uiCommon.updateAlertList([]);
                setTimeout(this.root.uiCommon.showUnauthorizedAlert, 0);
                return;
            }
            const isDemo = paramDemo === 'true' ||
                !Boolean(paramCid) ||
                !Boolean(paramExternalToken) ||
                (paramCid === constants/* demoCID */.Qc && paramDemo !== 'false');
            let demoAvailable = paramDemo ? paramDemo === 'true' : this.settings.forceDemoAvailable && isDemo;
            if (this.settings?.options?.customBr) {
                demoAvailable = false;
            }
            const profile = await this.fetchProfile({
                demoAvailable,
                paramExternalToken,
                paramCid,
                paramSubPartnerId,
                gameId,
                demoCID: constants/* demoCID */.Qc,
            });
            if (!profile) {
                if (!demoAvailable)
                    this.logout();
                (0,mobx_esm_js_.runInAction)(() => {
                    this.authInProgress = false;
                });
                this.root.uiCommon.lockedApp(true);
                this.root.uiCommon.updateAlertList([]);
                setTimeout(this.root.uiCommon.showUnauthorizedAlert, 0);
                return;
            }
            demoAvailable ? localStorageHelper/* default */.A.set('externalToken', this.profile.externalToken) : localStorageHelper/* default */.A.remove('externalToken');
            localStorageHelper/* default */.A.set('isDemo', demoAvailable);
            this.parseTokenData(this.profile.token);
            if (!location.origin.includes('localhost')) {
                await this.root.game.centrifuge.setToken(this.profile.token);
            }
            await this.root.game.centrifuge.connect();
            await this.root.game.centrifuge.subscribe(`balance_ticket#${this.profile.sub}`, ({ data }) => {
                if (data.logout) {
                    this.logout();
                    return;
                }
                this.root.balanceCommon.setBalanceData(data);
            });
            (0,mobx_esm_js_.runInAction)(() => {
                this.language = ((0,bootstrap.GET_GAME_CONFIG)().defaultLocale || paramLocale || constants/* defaultLanguage */.eG).toLowerCase();
                if (this.settings.availableTranslations.length && !this.settings.availableTranslations.includes(this.language)) {
                    this.setLanguage(this.settings.availableTranslations[0]);
                }
                if (this.settings?.options?.customBr &&
                    (this.language === 'en' || this.language === 'pt_br' || this.language === 'pt-br')) {
                    this.language = this.language === 'en' ? 'en_custom' : 'pt_br_custom';
                    this.setLanguage(this.language);
                }
            });
            await this.fetchLimits();
            await this.fetchVersion();
            await this.fetchRates();
            this.settings?.options?.pingConnection && this.connectPingSocket(this.profile.token);
            (0,mobx_esm_js_.runInAction)(() => {
                this.userAuthenticated = true;
                this.centrifugeAuthenticated = true;
                this.authInProgress = false;
            });
            this.root.uiCommon.updateAlertList([]);
            this.root.uiCommon.lockedApp(false);
        };
        this.fetchSettings = async ({ cid, subPartnerId, gameId }) => {
            try {
                const settingsResponse = await (0,api/* getSettings */.mt)({
                    cid: cid,
                    domain: window.location.host,
                    ...(subPartnerId && { subPartnerId }),
                    ...(gameId && { gameId }),
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    this.settings = settingsResponse.data;
                });
                return true;
            }
            catch (error) {
                console.error('getSettings error:', error);
                return false;
            }
        };
        this.fetchProfile = async (params) => {
            const { demoAvailable, paramExternalToken, paramCid, paramSubPartnerId, gameId, demoCID, forceNewDemo = false, } = params;
            const token = demoAvailable
                ? paramExternalToken || localStorageHelper/* default */.A.get('externalToken') || ''
                : paramExternalToken || 'no_token';
            const cid = demoAvailable ? demoCID : paramCid === demoCID ? '' : paramCid;
            const { gameCurrency, gameCurrencySettings } = this.root.game.gameConfig;
            const forceGameCurrency = clientCurrencySettingsHelper({ gameCurrencySettings, demoAvailable }) || gameCurrency;
            try {
                const fp = await fp_esm_js_["default"].load();
                const { visitorId } = await fp.get();
                const { data } = await (0,api/* getProfile */.E$)({
                    token: forceNewDemo ? '' : token,
                    cid,
                    gameId,
                    visitorId,
                    ...(forceGameCurrency && { currency: forceGameCurrency }),
                    ...(paramSubPartnerId && { subPartnerId: paramSubPartnerId }),
                });
                this.setProfile({
                    ...data,
                    ...(paramSubPartnerId && { subPartnerId: paramSubPartnerId }),
                    apiKey: cid,
                    playerId: data.id,
                    name: data.playerName,
                    isDemo: demoAvailable,
                    balanceLoad: true,
                });
                dice_redirectHelper((0,bootstrap.GET_GAME_CONFIG)().gameServerId, (0,bootstrap.GET_GAME_CONFIG)().gameServerTheme, this.profile.splitTest);
                return true;
            }
            catch (error) {
                if (demoAvailable && error.response.status === 401) {
                    localStorageHelper/* default */.A.remove('externalToken');
                    return await this.fetchProfile({
                        ...params,
                        forceNewDemo: true,
                    });
                }
                const errorCode = (0,getNestedProp/* default */.A)('errorCode', error.response);
                errorCode === 9 &&
                    this.root.uiCommon.setModal({
                        modalName: 'gameIsDisabled',
                        render: true,
                        delayOpen: 0,
                        delayClose: 0,
                        callbackOnSubmit: () => {
                            location.reload();
                        },
                    });
                return false;
            }
        };
        this.connectPingSocket = async (token) => {
            let ws;
            let attempts = 0;
            let connected = false;
            const url = `${(location.protocol=="https:"?"wss":"ws")}://${document.location.host}/ping`;
            const connectAttempt = () => {
                ws = new WebSocket(url, token);
                ws.onopen = () => {
                    connected = true;
                    console.log('opened ping connection');
                };
                ws.onmessage = () => { };
                ws.onclose = () => {
                    if (attempts < 3 && !connected) {
                        connectAttempt();
                        (0,timeout/* default */.A)(1);
                        attempts++;
                    }
                };
            };
            connectAttempt();
        };
        this.fetchLimits = async () => {
            const { profile, setLimit } = this;
            const { apiKey, currency } = profile;
            const params = {
                currency: currency,
            };
            if (profile.subPartnerId) {
                params.sub_partner_id = profile.subPartnerId;
            }
            try {
                const { data } = await (0,api/* getLimit */.cg)({
                    headers: { cid: apiKey },
                    params,
                });
                setLimit(data);
            }
            catch (error) {
                console.log('fetchLimits error:', error);
            }
        };
        this.fetchRates = async () => {
            const { apiKey, token } = this.profile;
            try {
                const { data } = await (0,api/* getRates */.A_)({
                    headers: { cid: apiKey, token },
                });
                (0,mobx_esm_js_.runInAction)(() => {
                    this.rates = data;
                });
            }
            catch (error) {
                console.log('Auth error:', error);
            }
        };
        this.setRules = (language, rules) => {
            this.rules[language] = rules;
        };
        this.fetchRules = async () => {
            if (this.rules[this.language]) {
                return this.rules[this.language];
            }
            const projectId = '6270f7428c3cbe68ed98c8a7';
            const key = this.root.game.gameConfig.gameRule;
            const keyShort = `${key}_short`;
            try {
                const [response, responseShort] = await Promise.all([
                    (0,api/* getTranslates */.Ce)({
                        projectId,
                        locale: this.language,
                        key,
                    }),
                    (0,api/* getTranslates */.Ce)({
                        projectId,
                        locale: this.language,
                        key: keyShort,
                    }),
                ]);
                const isDefaultRules = !response.data[key] || !responseShort.data[keyShort];
                let rulesSource = response.data[key];
                let rulesShortSource = responseShort.data[keyShort];
                const fallbackFetches = [];
                if (!rulesSource) {
                    fallbackFetches.push((0,api/* getTranslates */.Ce)({
                        projectId,
                        tag: '',
                        locale: 'en',
                        key,
                    }).then((r) => {
                        rulesSource = r.data[key];
                    }));
                }
                if (!rulesShortSource) {
                    fallbackFetches.push((0,api/* getTranslates */.Ce)({
                        projectId,
                        tag: '',
                        locale: 'en',
                        key: keyShort,
                    }).then((r) => {
                        rulesShortSource = r.data[keyShort];
                    }));
                }
                if (fallbackFetches.length) {
                    await Promise.all(fallbackFetches);
                }
                const rules = rulesSource
                    ?.replace(/\[\[rng\]\]/g, this.version.rng)
                    ?.replace(/\[\[version\]\]/g, this.version.game)
                    ?.replace(/\[\[maxWin\]\]/g, `${this.profile.currencySign}${this.limit.maxWin}`);
                const rulesShort = rulesShortSource;
                const data = {
                    rules,
                    rulesShort,
                };
                this.setRules(isDefaultRules ? 'en' : this.language, data);
                return data;
            }
            catch (error) {
                console.error('Error updateRules:', error);
                return {
                    rules: '',
                    rulesShort: '',
                };
            }
        };
        this.updateBalance = async () => {
            let token = localStorageHelper/* default */.A.get('externalToken');
            let apiKey = localStorageHelper/* default */.A.get('apiKey');
            const respond = await (0,api/* default */.Ay)().post('/profile', {
                cid: apiKey,
                token,
            });
            const { data: { balance }, } = respond;
            this.setBalance(balance);
        };
        this.setProfile = (profile) => {
            const { currencySign } = profile;
            if (currencySign && currencySign.length > 1 && currencySign !== 'mBTC') {
                profile.currencySign = currencySign.toUpperCase();
            }
            if (!currencySign) {
                profile.currencySign = '';
            }
            this.profile = profile;
            if (profile.splitTest && this.splitTest?.variantType === null) {
                const COOKIE_SPLIT_TEST_EXPIRY_MS_30_MINUTES = 1800000;
                const COOKIE_SPLIT_TEST_EXPIRY_MS_3_HOURS = 10800000;
                this.setSplitTest(profile.splitTest);
                dice_redirectHelper((0,bootstrap.GET_GAME_CONFIG)().gameServerId, (0,bootstrap.GET_GAME_CONFIG)().gameServerTheme, profile.splitTest);
                profile.splitTest?.variantValue !== null &&
                    profile.splitTest?.variantType !== 'default' &&
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'experiment_start',
                        attribute: `${profile.splitTest?.variantValue}: ${profile.splitTest?.variantType}`,
                    });
                cookieManager.setObjectCookie('splitTest', profile.splitTest, profile.splitTest?.variantType === 'default'
                    ? COOKIE_SPLIT_TEST_EXPIRY_MS_30_MINUTES
                    : COOKIE_SPLIT_TEST_EXPIRY_MS_3_HOURS);
            }
        };
        this.setBalance = (balance) => {
            this.profile = {
                ...this.profile,
                balance: (0,truncateDecimals/* default */.A)(balance, this.profile.rounding),
            };
        };
        this.setStorage = (key, value) => {
            this.profile = {
                ...this.profile,
                storage: {
                    ...this.profile.storage,
                    [key]: value,
                },
            };
        };
        this.setStoriesNew = (value) => {
            this.profile = {
                ...this.profile,
                storiesNew: value,
            };
        };
        this.setLimit = (limit) => {
            this.limit = limit;
        };
        this.setPlayerName = async (name) => {
            const { token, apiKey } = this.profile;
            try {
                const resp = await (0,api/* putPlayerName */.qA)({
                    headers: { authorization: token, cid: apiKey },
                    name,
                });
                this.profile.name = resp.data.nickname;
                this.changedNickname = resp.data.nickname;
                (0,gtmDataLayerPush/* default */.A)({
                    action: 'name_changed',
                    parameters: {
                        object: resp.data.nickname,
                    },
                });
            }
            catch (error) {
                if (error.response.data.message === 'nickname does not pass') {
                    this.root.uiCommon.setAlertList({
                        type: 'error',
                        text: 'ERROR.PROFANITY_VALIDATION',
                    });
                }
            }
        };
        this.setLanguage = async (value) => {
            let locale = value;
            if (this.settings.availableTranslations.length) {
                const availableTranslations = this.settings.availableTranslations.map((item) => item.slice(0, 2));
                const index = availableTranslations.indexOf(value);
                locale = index === -1 ? this.settings.availableTranslations[0] : this.settings.availableTranslations[index];
            }
            this.language = locale;
            localStorageHelper/* default */.A.set('locale', locale);
            const url = new URL(window.location.href);
            const searchParams = url.searchParams;
            searchParams.set('locale', locale);
            const updatedSearchString = searchParams.toString();
            const newUrl = `${url.pathname}?${updatedSearchString}`;
            if (searchParams.get('cid') !== 'softswiss' || searchParams.get('sub_partner_id') !== 'raceupcasino') {
                history.replaceState(null, '', newUrl);
            }
            await (0,i18n/* updateResources */.rB)(locale);
        };
        this.setVersion = (version) => {
            this.version = version;
            localStorageHelper/* default */.A.set('gameVersionLs', JSON.stringify(version));
            localStorageHelper/* default */.A.set('versionDate', Date.now());
        };
        this.fetchVersion = async () => {
            const versionDate = localStorageHelper/* default */.A.get('versionDate');
            const gameVersionLs = localStorageHelper/* default */.A.get('gameVersionLs');
            try {
                if (versionDate && Date.now() - Number(versionDate) < 1000 * 60 * 60 * 24 && gameVersionLs) {
                    const reset = () => {
                        localStorageHelper/* default */.A.remove('gameVersionLs');
                        localStorageHelper/* default */.A.remove('versionDate');
                    };
                    try {
                        const versionLs = JSON.parse(gameVersionLs);
                        if (versionLs.rng && versionLs.game) {
                            this.setVersion(versionLs);
                        }
                        else {
                            reset();
                        }
                    }
                    catch (error) {
                        reset();
                    }
                    return;
                }
                const { data } = await (0,api/* getVersion */.HF)({
                    gameId: this.root.game.gameConfig.gameServerId,
                    headers: {
                        cid: this.profile.apiKey,
                    },
                });
                if (!data?.server)
                    return;
                const { server } = data;
                if (Array.isArray(server)) {
                    const item = server.find((item) => item.rng && item.version && item.name && item.name === 'game-server');
                    if (item) {
                        this.setVersion({
                            rng: item.rng,
                            game: item.version,
                        });
                    }
                }
                else if (typeof server === 'object' && server !== null) {
                    if (server.rng && server.version) {
                        this.setVersion({
                            rng: server.rng,
                            game: server.version,
                        });
                    }
                }
            }
            catch (error) {
                console.log('Versoin error:', error);
            }
        };
        this.setRtp = (rtp) => {
            this.rtp = rtp;
        };
        this.setCustomerId = (customerId) => {
            this.customerId = customerId;
        };
        this.parseTokenData = (token) => {
            const { payload } = (0,jwt_js_decode_min_js_.decode)(token);
            if (payload && typeof payload === 'object') {
                if (payload.config?.rtp) {
                    this.setRtp(payload.config.rtp);
                    this.setCustomRtp(true);
                }
                if (payload.config?.fork) {
                    this.setFork(payload.config.fork);
                }
                if (payload.customerId) {
                    this.setCustomerId(payload.customerId);
                }
            }
        };
        this.setFork = (fork) => {
            this.fork = fork;
        };
        this.setProfileSid = (sid) => {
            this.profile = { ...this.profile, sid };
        };
        this.setCustomRtp = (value) => {
            this.customRtp = value;
        };
        this.root = root;
        (0,mobx_esm_js_.makeObservable)(this);
        this.checkCookies();
    }
    get isSocialLanguage() {
        return socialLanguages.includes(this.language);
    }
}
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "settings", void 0);
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "profile", void 0);
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "customerId", void 0);
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "limit", void 0);
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "centrifugeAuthenticated", void 0);
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "changedNickname", void 0);
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "rates", void 0);
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "statistics", void 0);
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "language", void 0);
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "userAuthenticated", void 0);
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "authInProgress", void 0);
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "version", void 0);
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "rtp", void 0);
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "customRtp", void 0);
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "fork", void 0);
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "rules", void 0);
__decorate([
    mobx_esm_js_.observable
], ProfileCommon.prototype, "splitTest", void 0);
__decorate([
    mobx_esm_js_.computed
], ProfileCommon.prototype, "isSocialLanguage", null);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "setSplitTest", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "logout", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "auth", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "fetchSettings", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "fetchProfile", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "connectPingSocket", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "fetchLimits", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "fetchRates", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "setRules", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "fetchRules", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "updateBalance", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "setProfile", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "setBalance", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "setStorage", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "setStoriesNew", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "setLimit", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "setPlayerName", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "setLanguage", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "setVersion", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "fetchVersion", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "setRtp", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "setCustomerId", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "parseTokenData", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "setFork", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "setProfileSid", void 0);
__decorate([
    mobx_esm_js_.action
], ProfileCommon.prototype, "setCustomRtp", void 0);
/* harmony default export */ const store_ProfileCommon = (ProfileCommon);


/***/ }),

/***/ 9332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8570);
/* harmony import */ var _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74065);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class QuickModeCommon {
    constructor(root) {
        this.enabled = _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.get('quickMode') === 'true';
        this.setEnabled = (value) => {
            this.enabled = value;
            !this.root.game?.gameConfig?.quickMode?.disableLS && _helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.set('quickMode', value);
        };
        this.quickDuration = (duration) => {
            return this.enabled ? duration * this.accelerationDuration : duration;
        };
        this.root = root;
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeObservable)(this);
    }
    get accelerationDuration() {
        return this.root.game?.gameConfig?.quickMode?.accelerationDuration || 0.5;
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], QuickModeCommon.prototype, "enabled", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], QuickModeCommon.prototype, "setEnabled", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.computed
], QuickModeCommon.prototype, "accelerationDuration", null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickModeCommon);


/***/ }),

/***/ 16699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_TournamentsCommon)
});

// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
;// ./src/framework/helpers/tournaments/tournamentsDefault.ts


function tournamentsDefault() {
    const { tournamentsCommon: { bets }, profileCommon: { limit: { minBet }, }, uiCommon: { setAlertList }, } = (0,bootstrap.GET_STORE)();
    const tournamentMinBet = minBet * 10;
    const isTournamentsDefault5 = localStorageHelper/* default */.A.get('isTournamentsDefault');
    if (isTournamentsDefault5) {
        if (Date.now() < Number(isTournamentsDefault5))
            return false;
    }
    if (bets.length < 5)
        return false;
    const lastBets = bets.slice(-4).filter((bet) => bet.amount < tournamentMinBet);
    if (lastBets.length === 4) {
        setAlertList({
            type: 'success',
            title: 'Attention',
            text: 'TOURNAMENT.NOT_ENOUGH',
        });
        localStorageHelper/* default */.A.set('isTournamentsDefault', Date.now() + 1000 * 60 * 60 * 2);
        return true;
    }
    return false;
}

;// ./src/framework/helpers/tournaments/tournamentsDefault5.ts


function tournamentsDefault5() {
    const { tournamentsCommon: { bets }, profileCommon: { limit: { minBet }, }, uiCommon: { setAlertList }, } = (0,bootstrap.GET_STORE)();
    const tournamentMinBet = minBet * 5;
    const isTournamentsDefault5 = localStorageHelper/* default */.A.get('isTournamentsDefault5');
    if (isTournamentsDefault5) {
        if (Date.now() < Number(isTournamentsDefault5))
            return false;
    }
    if (bets.length < 5)
        return false;
    const lastBets = bets.slice(-4).filter((bet) => bet.amount < tournamentMinBet);
    if (lastBets.length === 4) {
        setAlertList({
            type: 'success',
            title: 'Attention',
            text: 'TOURNAMENT.NOT_ENOUGH',
        });
        localStorageHelper/* default */.A.set('isTournamentsDefault5', Date.now() + 1000 * 60 * 60 * 2);
        return true;
    }
    return false;
}

;// ./src/framework/store/TournamentsCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const scorings = {
    default: tournamentsDefault,
    default5: tournamentsDefault5,
};
class TournamentsCommon {
    constructor(root) {
        this.currentbet = [null, 0];
        this.bets = [];
        this.tournaments = [];
        this.tournamentsStrapi = {};
        this.tournamentsLeaderbords = {};
        this.tournamentsWinners = {};
        this.activeTournamentId = null;
        this.loading = false;
        this.disabledUpdate = {};
        this.addBet = (bet) => {
            if (!bet)
                return;
            if (!bet.amount)
                return;
            this.bets = [...this.bets.slice(-20), bet];
            this.currentbet = [bet, this.currentbet[1] + 1];
            this.tournaments.forEach((tournament) => {
                if (!tournament.scoring)
                    return;
                if (!scorings[tournament.scoring])
                    return;
                scorings[tournament.scoring]();
            });
        };
        this.setDisabledUpdate = (tournamentId) => {
            this.disabledUpdate = { ...this.disabledUpdate, [tournamentId]: true };
        };
        this.clearDisabledUpdate = () => {
            this.disabledUpdate = {};
        };
        this.setActiveTournamentId = async (id = null) => {
            this.activeTournamentId = id;
        };
        this.getTournaments = async () => {
            const { profileCommon: { profile: { token }, }, game: { gameServerId }, } = this.root;
            const { search } = document.location;
            const urlParams = new URLSearchParams(search);
            const subpartnerid = urlParams.get('sub_partner_id') || '';
            const params = {
                gameId: gameServerId,
            };
            if (subpartnerid) {
                params.sub_partner_id = subpartnerid;
            }
            try {
                this.loading = true;
                const { data } = await (0,api/* getTournaments */.lo)({
                    headers: { authorization: token },
                    params,
                });
                if (!data.length)
                    return;
                this.tournaments = data
                    .sort((a, b) => new Date(b.endAt).getTime() - new Date(a.endAt).getTime())
                    .filter((item) => {
                    const now = new Date().getTime();
                    const start = new Date(item.startAt).getTime();
                    return start < now;
                });
                this.loading = false;
            }
            catch (error) {
                this.loading = false;
                console.log(error);
                return false;
            }
            this.getTournamentsStrapi();
        };
        this.getTournamentsStrapi = async () => {
            const tournamentIdList = this.tournaments.map((item) => item.id);
            try {
                this.loading = true;
                const response = await (0,api/* getTournamentsStrapi */.yC)({
                    tournamentIdList,
                });
                if (response.data.data) {
                    response.data.data.forEach((item) => {
                        this.tournamentsStrapi[`${item.attributes.tournamentId}${item.attributes.locale}`] = item;
                    });
                }
                this.loading = false;
            }
            catch (error) {
                this.loading = false;
                console.log(error);
            }
        };
        this.getTournamentLeaderbords = async (tournamentId) => {
            if (!tournamentId)
                return;
            if (this.disabledUpdate[tournamentId])
                return;
            try {
                this.loading = true;
                const { data } = await (0,api/* getTournamentLeaderbords */.VQ)({
                    headers: { authorization: this.root.profileCommon.profile.token },
                    tournamentId,
                });
                this.tournamentsLeaderbords[tournamentId] = data.list;
                this.loading = false;
                this.setDisabledUpdate(tournamentId);
            }
            catch (error) {
                this.loading = false;
                console.log(error);
            }
        };
        this.getTournamentWinners = async (tournamentId) => {
            if (!tournamentId)
                return;
            if (this.disabledUpdate[tournamentId])
                return;
            try {
                this.loading = true;
                const { data } = await (0,api/* getTournamentWinners */.eo)({
                    headers: { authorization: this.root.profileCommon.profile.token },
                    tournamentId,
                });
                this.tournamentsWinners[tournamentId] = data.list;
                this.loading = false;
                this.setDisabledUpdate(tournamentId);
            }
            catch (error) {
                this.loading = false;
                console.log(error);
            }
        };
        this.root = root;
        (0,mobx_esm_js_.makeObservable)(this);
        (0,mobx_esm_js_.reaction)(() => this.root.profileCommon.profile.token, (token) => {
            if (token) {
                this.getTournaments();
            }
        });
        (0,mobx_esm_js_.reaction)(() => [this.bets, this.root.profileCommon.profile.name], () => {
            this.clearDisabledUpdate();
        });
    }
    get labelTournament() {
        const tournament = this.tournaments[0];
        const tournamentId = tournament?.id;
        const tournamentStrapi = this.tournamentsStrapi[`${tournamentId}${this.root.profileCommon.language}`] ||
            this.tournamentsStrapi[`${tournamentId}en`];
        return {
            tournament: tournament,
            tournamentStrapi: tournamentStrapi,
        };
    }
    get activeTournament() {
        if (!this.activeTournamentId)
            return null;
        return this.tournaments.find(({ id }) => this.activeTournamentId === id) || null;
    }
    get activeTournamentStrapi() {
        if (!this.activeTournamentId)
            return null;
        const tournament = this.tournamentsStrapi[`${this.activeTournamentId}${this.root.profileCommon.language}`] ||
            this.tournamentsStrapi[`${this.activeTournamentId}en`];
        return tournament;
    }
}
__decorate([
    mobx_esm_js_.observable
], TournamentsCommon.prototype, "currentbet", void 0);
__decorate([
    mobx_esm_js_.observable
], TournamentsCommon.prototype, "bets", void 0);
__decorate([
    mobx_esm_js_.observable
], TournamentsCommon.prototype, "tournaments", void 0);
__decorate([
    mobx_esm_js_.observable
], TournamentsCommon.prototype, "tournamentsStrapi", void 0);
__decorate([
    mobx_esm_js_.observable
], TournamentsCommon.prototype, "tournamentsLeaderbords", void 0);
__decorate([
    mobx_esm_js_.observable
], TournamentsCommon.prototype, "tournamentsWinners", void 0);
__decorate([
    mobx_esm_js_.observable
], TournamentsCommon.prototype, "activeTournamentId", void 0);
__decorate([
    mobx_esm_js_.observable
], TournamentsCommon.prototype, "loading", void 0);
__decorate([
    mobx_esm_js_.observable
], TournamentsCommon.prototype, "disabledUpdate", void 0);
__decorate([
    mobx_esm_js_.computed
], TournamentsCommon.prototype, "labelTournament", null);
__decorate([
    mobx_esm_js_.computed
], TournamentsCommon.prototype, "activeTournament", null);
__decorate([
    mobx_esm_js_.computed
], TournamentsCommon.prototype, "activeTournamentStrapi", null);
__decorate([
    mobx_esm_js_.action
], TournamentsCommon.prototype, "addBet", void 0);
__decorate([
    mobx_esm_js_.action
], TournamentsCommon.prototype, "setDisabledUpdate", void 0);
__decorate([
    mobx_esm_js_.action
], TournamentsCommon.prototype, "clearDisabledUpdate", void 0);
__decorate([
    mobx_esm_js_.action
], TournamentsCommon.prototype, "setActiveTournamentId", void 0);
__decorate([
    mobx_esm_js_.action
], TournamentsCommon.prototype, "getTournaments", void 0);
__decorate([
    mobx_esm_js_.action
], TournamentsCommon.prototype, "getTournamentsStrapi", void 0);
__decorate([
    mobx_esm_js_.action
], TournamentsCommon.prototype, "getTournamentLeaderbords", void 0);
__decorate([
    mobx_esm_js_.action
], TournamentsCommon.prototype, "getTournamentWinners", void 0);
/* harmony default export */ const store_TournamentsCommon = (TournamentsCommon);


/***/ }),

/***/ 46901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8570);
/* harmony import */ var src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21714);
/* harmony import */ var src_framework_helpers_floor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70903);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58608);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




class TrackingCommon {
    constructor(root) {
        this.sessionStarted = false;
        this.lastActiveTime = Date.now();
        this.inactive = false;
        this.betsSum = 0;
        this.betsCount = 0;
        this.autoBetsCount = 0;
        this.winsCount = 0;
        this.minBetAmount = 0;
        this.maxBetAmount = 0;
        this.lastBetAmount = 0;
        this.lastBetId = null;
        this.universeShortStat = null;
        this.width = {
            current: window.innerWidth,
            next: window.innerWidth,
        };
        this.height = {
            current: window.innerHeight,
            next: window.innerHeight,
        };
        this.resizeOperation = 'init';
        this.setWidth = (width) => {
            this.width = width;
        };
        this.setHeight = (height) => {
            this.height = height;
        };
        this.setResizeOperation = (operation) => {
            this.resizeOperation = operation;
        };
        this.calculateResize = () => {
            if (this.resizeTImeout) {
                clearTimeout(this.resizeTImeout);
            }
            switch (true) {
                case this.width.next === this.width.current && this.height.next !== this.height.current:
                    this.setResizeOperation('verticalShift');
                    this.setHeight({ ...this.height, current: this.height.next });
                    break;
                case this.width.next !== this.width.current && this.height.next === this.height.current:
                    this.setResizeOperation('horizontalShift');
                    this.setWidth({ ...this.width, current: this.width.next });
                    break;
                case this.width.next === this.height.current && this.height.next === this.width.current:
                    this.setResizeOperation('orientation');
                    this.setWidth({ ...this.width, current: this.width.next });
                    this.setHeight({ ...this.height, current: this.height.next });
                    break;
                case this.width.next !== this.width.current && this.height.next !== this.height.current:
                    this.setResizeOperation('resize');
                    this.setWidth({ ...this.width, current: this.width.next });
                    this.setHeight({ ...this.height, current: this.height.next });
                    break;
            }
            (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ parameters: null });
            (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
                action: 'app_resized',
                parameters: {
                    size: `${this.width.next}x${this.height.next}`,
                    method: this.resizeOperation,
                },
            });
        };
        this.handleGetPlayerShortGameStat = async () => {
            const { profileCommon: { profile: { playerId }, customerId, }, game: { gameServerId }, } = this.root;
            try {
                const result = await (0,_api__WEBPACK_IMPORTED_MODULE_3__/* .getPlayerShortGameStat */ .sP)({ customerId, playerId, gameId: gameServerId });
                if (result?.data) {
                    console.log(result?.data, '!result?.data');
                    (0,mobx__WEBPACK_IMPORTED_MODULE_0__.runInAction)(() => {
                        this.universeShortStat = result?.data;
                    });
                    (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ parameters: null });
                    (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
                        action: 'turbo_universe_loaded',
                        parameters: {
                            count: this.universeShortStat.betsCount,
                            rating: this.universeShortStat.rating,
                        },
                    });
                }
            }
            catch (error) {
                console.log('fetchGame error:', error);
            }
        };
        this.setInactive = (inactive) => {
            this.inactive = inactive;
        };
        this.setLastActiveTime = (time) => {
            this.lastActiveTime = time;
        };
        this.addBet = (bet, isAutoBet = false) => {
            if (!bet)
                return;
            const { amount, id } = bet;
            this.setBetsSum(this.betsSum + amount);
            this.setBetsCount(this.betsCount + 1);
            this.setMinBetAmount(!this.minBetAmount ? amount : Math.min(this.minBetAmount, amount));
            this.setMaxBetAmount(Math.max(this.maxBetAmount, amount));
            this.setLastBetAmount(amount);
            this.setLastBetId(id);
            if (isAutoBet) {
                this.setAutoBetsCount(this.autoBetsCount + 1);
            }
        };
        this.resetBets = () => {
            this.setBetsSum(0);
            this.setBetsCount(0);
            this.setAutoBetsCount(0);
            this.setWinsCount(0);
            this.setMinBetAmount(0);
            this.setMaxBetAmount(0);
            this.setLastBetAmount(0);
            this.setLastBetId(null);
        };
        this.addWin = () => {
            this.setWinsCount(this.winsCount + 1);
        };
        this.checkInactivity = () => {
            const now = Date.now();
            const inactiveTime = now - this.lastActiveTime;
            if (inactiveTime > 180 * 1000) {
                this.finishSession();
            }
        };
        this.finishSession = () => {
            if (!this.sessionStarted)
                return;
            this.setSessionStarted(false);
            (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ parameters: null });
            (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
                action: 'game_finished',
                parameters: {
                    value: (0,src_framework_helpers_floor__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this.betsSum),
                    currency: this.root.profileCommon.profile.currency,
                    method: this.autoBetsCount ? 'auto' : 'manual',
                    min_value: this.minBetAmount,
                    max_value: this.maxBetAmount,
                    last_value: this.lastBetAmount,
                    count: this.betsCount,
                    id: this.lastBetId,
                    wins: this.winsCount,
                },
            });
            this.resetBets();
        };
        this.startSession = (id) => {
            if (this.sessionStarted)
                return;
            this.setSessionStarted(true);
            (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ parameters: null });
            (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
                action: 'game_started',
                parameters: {
                    id,
                },
            });
        };
        this.setSessionStarted = (started) => {
            this.sessionStarted = started;
        };
        this.setBetsSum = (sum) => {
            this.betsSum = sum;
        };
        this.setBetsCount = (count) => {
            this.betsCount = count;
        };
        this.setAutoBetsCount = (count) => {
            this.autoBetsCount = count;
        };
        this.setWinsCount = (count) => {
            this.winsCount = count;
        };
        this.setMinBetAmount = (bet) => {
            this.minBetAmount = bet;
        };
        this.setMaxBetAmount = (bet) => {
            this.maxBetAmount = bet;
        };
        this.setLastBetAmount = (bet) => {
            this.lastBetAmount = bet;
        };
        this.setLastBetId = (id) => {
            this.lastBetId = id;
        };
        this.initGtmDataLayer = () => {
            const { game: { gameServerId, gameServerTheme, gameConfig }, uiCommon: { screenWidth, screenHeight }, profileCommon: { profile, version, settings }, } = this.root;
            window.dataLayer = window.dataLayer || [];
            const variantValue = profile?.splitTest?.variantValue || 'default';
            const variantType = profile?.splitTest?.variantType;
            (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
                action: 'init',
                safe_url: document.location.href
                    .replace(/[?&]token=[^&]+/, '')
                    .replace(/[?&]$/, '')
                    .replace(/[?&]$/, '?'),
                object: gameServerId,
                variant: gameServerId === 'dice'
                    ? 'remaster'
                    : variantValue && variantType && gameConfig.gameVersions && gameConfig.gameVersions[variantValue]
                        ? gameConfig.gameVersions[variantValue][variantType] || gameConfig.gameVersions[variantValue]
                        : settings?.options?.theme || gameConfig.gameClient,
                category: gameConfig.gameCategory,
                casino: profile.apiKey,
                state: !profile.isTest,
                version: version.game,
                uid: profile.id,
                sid: profile.sid,
                last_update: new Date().getTime(),
                size: `${screenWidth}x${screenHeight}`,
            });
            let isLite = false;
            !isLite && this.loadGTM();
            isLite && this.loadMicroTracking();
            if (Array.isArray(window.dataLayerQueue) && window.dataLayerQueue.length > 0) {
                window.dataLayer.push(...window.dataLayerQueue);
                window.dataLayerQueue = [];
            }
        };
        this.loadMicroTracking = () => {
        };
        this.loadGTM = () => {
            window.dataLayer.push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js',
            });
            const s = document.getElementsByTagName('script')[0];
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-TX65W37`;
            s.parentNode.insertBefore(script, s);
        };
        this.root = root;
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeObservable)(this);
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => ({
            playerId: this.root.profileCommon.profile.playerId,
            customerId: this.root.profileCommon.customerId,
            gameServerId: this.root.game?.gameServerId,
        }), ({ customerId, playerId, gameServerId }) => {
            if (customerId && playerId && gameServerId && !this.universeShortStat) {
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => this.root.uiCommon.postMessage, (postMessage) => {
            try {
                const { type, data } = postMessage.data;
                if (type === 'gtmPush') {
                    (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ parameters: null });
                    (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
                        action: 'tracked_element_clicked',
                        parameters: {
                            object: data.dataTrack,
                        },
                    });
                }
            }
            catch (error) { }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => this.root.uiCommon.isVisible, (isVisible) => {
            if (!isVisible) {
                this.finishSession();
            }
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => this.root.audioCommon.globalMuted, (globalMuted) => {
            (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ parameters: null });
            (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
                action: 'volume_changed',
                parameters: {
                    object: 'sound',
                    value: globalMuted ? 0 : this.root.audioCommon.soundVolume,
                },
            });
            (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ parameters: null });
            (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
                action: 'volume_changed',
                parameters: {
                    object: 'music',
                    value: globalMuted ? 0 : this.root.audioCommon.musicVolume,
                },
            });
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => this.root.audioCommon.soundVolume, (soundVolume) => {
            if (this.soundVolumeTImeout) {
                clearTimeout(this.soundVolumeTImeout);
            }
            this.soundVolumeTImeout = setTimeout(() => {
                console.log('soundVolume', soundVolume);
                (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ parameters: null });
                (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
                    action: 'volume_changed',
                    parameters: {
                        object: 'sound',
                        value: soundVolume,
                    },
                });
            }, 500);
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => this.root.audioCommon.musicVolume, (musicVolume) => {
            if (this.musicVolumeTImeout) {
                clearTimeout(this.musicVolumeTImeout);
            }
            this.musicVolumeTImeout = setTimeout(() => {
                console.log('musicVolume', musicVolume);
                (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ parameters: null });
                (0,src_framework_helpers_gtmDataLayerPush__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
                    action: 'volume_changed',
                    parameters: {
                        object: 'music',
                        value: musicVolume,
                    },
                });
            }, 500);
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.reaction)(() => [this.root.uiCommon.screenWidth, this.root.uiCommon.screenHeight], ([screenWidth, screenHeight]) => {
            if (this.resizeTImeout) {
                clearTimeout(this.resizeTImeout);
            }
            this.setHeight({ next: screenHeight, current: this.height.current });
            this.setWidth({ next: screenWidth, current: this.width.current });
            this.resizeTImeout = setTimeout(() => {
                this.calculateResize();
            }, 200);
        });
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.autorun)(() => {
            const handleActive = () => {
                this.setLastActiveTime(Date.now());
                this.setInactive(false);
            };
            this.startInactivityCheck();
            document.addEventListener('keydown', handleActive);
            document.addEventListener('mousedown', handleActive);
            document.addEventListener('unload', this.finishSession);
            document.addEventListener('onbeforeunload', this.finishSession);
            return () => {
                this.finishInactivityCheck();
                document.removeEventListener('keydown', handleActive);
                document.removeEventListener('mousedown', handleActive);
            };
        });
    }
    startInactivityCheck() {
        this.inactivityInterval = setInterval(this.checkInactivity, 30 * 1000);
    }
    finishInactivityCheck() {
        if (this.inactivityInterval) {
            clearInterval(this.inactivityInterval);
        }
    }
}
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "sessionStarted", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "lastActiveTime", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "inactive", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "inactivityInterval", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "betsSum", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "betsCount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "autoBetsCount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "winsCount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "minBetAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "maxBetAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "lastBetAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "lastBetId", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "universeShortStat", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "width", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "height", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "resizeOperation", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "resizeTImeout", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "soundVolumeTImeout", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.observable
], TrackingCommon.prototype, "musicVolumeTImeout", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "setWidth", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "setHeight", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "setResizeOperation", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "calculateResize", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "handleGetPlayerShortGameStat", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "setInactive", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "setLastActiveTime", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "addBet", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "resetBets", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "addWin", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "startInactivityCheck", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "finishInactivityCheck", null);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "checkInactivity", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "finishSession", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "startSession", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "setSessionStarted", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "setBetsSum", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "setBetsCount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "setAutoBetsCount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "setWinsCount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "setMinBetAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "setMaxBetAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "setLastBetAmount", void 0);
__decorate([
    mobx__WEBPACK_IMPORTED_MODULE_0__.action
], TrackingCommon.prototype, "setLastBetId", void 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrackingCommon);


/***/ }),

/***/ 12155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_UiCommon)
});

// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
// EXTERNAL MODULE: consume shared module (default) i18next@^23.2.3 (strict) (fallback: ./node_modules/i18next/dist/esm/i18next.js)
var i18next_js_ = __webpack_require__(49953);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/getNestedProp.ts
var getNestedProp = __webpack_require__(99875);
;// ./src/framework/constants/ssValidations.ts
const currencies = ['CLP', 'VND', 'KRW', 'BIF', 'UGX', 'JPY', 'RWF'];
const cids = [
    'softswiss',
    'livespins',
];

;// ./src/framework/helpers/currencyCustomCheck.ts


function currencyCustomCheck(amount, currency) {
    const { search } = window.location;
    const urlParams = new URLSearchParams(search);
    const cid = urlParams.get('cid');
    const response = {
        hasError: false,
    };
    if (currencies.includes(currency.toUpperCase()) &&
        cid &&
        cids.includes(cid)) {
        if (amount % 100) {
            response.hasError = true;
            response.error = i18next_js_["default"].t('ERROR.MULTIPLE_OF');
        }
    }
    return response;
}

;// ./src/framework/helpers/getVisibilityDefs.ts
function getVisibilityDefs() {
    let hidden;
    let visibilityChange;
    if (typeof document.hidden !== 'undefined') {
        hidden = 'hidden';
        visibilityChange = 'visibilitychange';
    }
    else if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden';
        visibilityChange = 'msvisibilitychange';
    }
    else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden';
        visibilityChange = 'webkitvisibilitychange';
    }
    return {
        hidden,
        visibilityChange,
    };
}

// EXTERNAL MODULE: ./src/framework/helpers/isMobile.ts
var isMobile = __webpack_require__(73667);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/store/UiCommon.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










const { hidden: UiCommon_hidden, visibilityChange } = getVisibilityDefs();
class UiCommon {
    constructor(root) {
        this.backendErrors = (0,mobx_esm_js_.observable)([]);
        this.alertList = [];
        this.fullScreen = false;
        this.statsModalOpen = false;
        this.limitsModalOpen = false;
        this.rulesModalOpen = false;
        this.statisticModalOpen = false;
        this.settingsOpen = false;
        this.tournamentsModalOpen = false;
        this.exitGameModalOpen = false;
        this.modal = {};
        this.isMobile = (0,isMobile/* default */.A)();
        this.isOnline = true;
        this.appReady = false;
        this.isOnlineTimeout = null;
        this.isCheckingConnectivity = false;
        this.inactivityMs = ['dev', 'development'].includes((0,bootstrap.GET_ENV)().APP_ENV) ? 3 * 60 * 1000 : 30 * 60 * 1000;
        this.inactivityTimeoutId = null;
        this.isVisible = true;
        this.postMessage = null;
        this.betData = null;
        this.betInfoGameId = null;
        this.betInfoId = null;
        this.betHistoryInfoResultIndex = null;
        this.lastBetAction = [];
        this.guideShown = localStorageHelper/* default */.A.get('guideIsShown') === 'true' || false;
        this.guideStatus = false;
        this.screenWidth = 0;
        this.screenHeight = 0;
        this.pageDisabled = false;
        this.firstClick = false;
        this.initDate = Date.now();
        this.noAnimation = localStorageHelper/* default */.A.get('animationDisabled') === 'true';
        this.resizeObserverElementTree = null;
        this.connectRatio = {
            minWidth: 0,
            minHeight: 0,
        };
        this.connectRatioElement = null;
        this.isScreenMobileTimeout = null;
        this.isScreenMobile = 0;
        this.pageRatio = null;
        this.paytableOpen = false;
        this.setPaytableOpen = (value) => {
            this.paytableOpen = value;
        };
        this.gameSpeed = 0;
        this.setGameSpeed = (value) => {
            this.gameSpeed = value;
        };
        this.betPresetsOpen = false;
        this.setBetPresetsOpen = (value) => {
            this.betPresetsOpen = value;
        };
        this.autoPlayOpen = false;
        this.setAutoPlayOpen = (value) => {
            this.autoPlayOpen = value;
        };
        this.themeManuallySet = false;
        this.colorTheme = 'light';
        this.setIsScreenMobile = (value) => {
            this.isScreenMobile = value;
        };
        this.setPageRatio = (value) => {
            this.pageRatio = value;
        };
        this.setPageDisabled = (value) => {
            this.pageDisabled = value;
        };
        this.setNoAnimation = (value) => {
            localStorageHelper/* default */.A.set('animationDisabled', value);
            this.noAnimation = value;
        };
        this.setGuideShown = (shown) => {
            localStorageHelper/* default */.A.set('guideIsShown', shown);
            this.guideShown = shown;
        };
        this.setGuideStatus = (value) => {
            this.guideStatus = value;
        };
        this.handleVisibilityChange = () => {
            this.isVisible = !document[UiCommon_hidden];
            if (this.root.profileCommon?.settings?.options?.customBr) {
                if (document[UiCommon_hidden]) {
                    this.clearInactivityTimer();
                }
                else {
                    this.scheduleInactivityTimer();
                }
            }
        };
        this.clearInactivityTimer = () => {
            if (this.inactivityTimeoutId !== null) {
                clearTimeout(this.inactivityTimeoutId);
                this.inactivityTimeoutId = null;
            }
        };
        this.scheduleInactivityTimer = () => {
            this.clearInactivityTimer();
            this.inactivityTimeoutId = setTimeout(() => {
                this.inactivityTimeoutId = null;
                this.onInactivityTimeout();
            }, this.inactivityMs);
        };
        this.onInactivityTimeout = () => {
            this.setModal({
                modalName: 'inactive',
                render: true,
                delayOpen: 0,
                delayClose: 0,
            });
        };
        this.setBetInfoGameId = (id) => {
            this.betInfoGameId = id;
        };
        this.setBetInfoId = (id) => {
            this.betInfoId = id;
        };
        this.setBetHistoryInfoResultIndex = (index) => {
            this.betHistoryInfoResultIndex = index;
        };
        this.setFirstClick = (value) => {
            this.firstClick = value;
        };
        this.setPostMessage = (value) => {
            this.postMessage = value;
        };
        this.getAmountError = (amount) => {
            const { profileCommon: { profile: { currencySign, currency, balance }, limit: { minBet, maxBet }, settings: { options }, }, uiCommon: { backendErrors }, freebetsCommon: { freebetEnabled }, } = this.root;
            if (freebetEnabled) {
                return null;
            }
            const { hasError, error } = currencyCustomCheck(Number(amount), currency);
            if (hasError) {
                return error;
            }
            if (backendErrors.length) {
                return 'Backend Error';
            }
            if (maxBet && Number(amount) > maxBet) {
                return i18next_js_["default"].t('COMMON.MAX_AMOUNT_VALIDATION', {
                    amount: `${currencySign}${maxBet}`,
                    interpolation: { escapeValue: false },
                });
            }
            if ((minBet && Number(amount) < minBet) || !amount) {
                return i18next_js_["default"].t('COMMON.MIN_AMOUNT_VALIDATION', {
                    amount: `${currencySign}${minBet}`,
                    interpolation: { escapeValue: false },
                });
            }
            if (Number(amount) > balance) {
                return i18next_js_["default"].t('COMMON.PLACEBET.ERROR.3');
            }
            return null;
        };
        this.setFullScreen = (fullScreen) => {
            this.fullScreen = !!fullScreen;
        };
        this.setAlertList = (value) => {
            this.alertList = [...this.alertList, value];
        };
        this.updateAlertList = (value) => {
            this.alertList = value;
        };
        this.removeFirstItemAlertList = () => {
            this.alertList = this.alertList.slice(1);
        };
        this.setBackendErrors = (error) => {
            this.backendErrors.replace([...this.backendErrors, error]);
        };
        this.clearBackendErrors = () => {
            this.backendErrors.replace([]);
        };
        this.setSettingsOpen = (isOpen) => {
            this.settingsOpen = isOpen;
            this.setModal({
                modalName: 'setting',
                render: isOpen,
                delayOpen: 0,
                delayClose: 0,
            });
        };
        this.setStatsModalOpen = (isOpen) => {
            this.statsModalOpen = isOpen;
            this.setModal({
                modalName: 'mybetsInfo',
                render: isOpen,
                delayOpen: 0,
                delayClose: 0,
            });
        };
        this.setLimitsModalOpen = (isOpen) => {
            this.limitsModalOpen = isOpen;
            this.setModal({
                modalName: 'limits',
                render: isOpen,
                delayOpen: 0,
                delayClose: 0,
            });
        };
        this.setRulesModalOpen = (isOpen) => {
            this.rulesModalOpen = isOpen;
            this.setModal({
                modalName: 'rules',
                render: isOpen,
                delayOpen: 0,
                delayClose: 0,
            });
        };
        this.setStatisticModalOpen = (isOpen) => {
            this.statisticModalOpen = isOpen;
            this.setModal({
                modalName: 'mybets',
                render: isOpen,
                delayOpen: 0,
                delayClose: 0,
            });
        };
        this.setTournamentsModalOpen = (isOpen) => {
            this.tournamentsModalOpen = isOpen;
            this.setModal({
                modalName: 'tournamentsModalOpen',
                render: isOpen,
                delayOpen: 0,
                delayClose: 0,
            });
        };
        this.setExitGameModalOpen = (isOpen) => {
            this.exitGameModalOpen = isOpen;
            this.setModal({
                modalName: 'exitGame',
                render: isOpen,
                delayOpen: 0,
                delayClose: 0,
            });
        };
        this.setModal = ({ modalName, render, delayOpen, delayClose, callbackOnClose, callbackOnSubmit, data, noTracking, }) => {
            if (!this.modal[modalName]) {
                this.modal[modalName] = {
                    timeout: null,
                    render: false,
                    open: false,
                    close: false,
                    delayOpen: 0,
                    delayClose: 0,
                    data: undefined,
                    callbackOnClose: () => { },
                    callbackOnSubmit: () => { },
                };
            }
            if (typeof delayOpen === 'number')
                this.modal[modalName].delayOpen = delayOpen;
            if (typeof delayClose === 'number')
                this.modal[modalName].delayClose = delayClose;
            if (typeof callbackOnClose === 'function')
                this.modal[modalName].callbackOnClose = callbackOnClose;
            if (typeof callbackOnSubmit === 'function')
                this.modal[modalName].callbackOnSubmit = callbackOnSubmit;
            if (data)
                this.modal[modalName].data = data;
            if (this.modal[modalName].timeout)
                return;
            if (render) {
                this.modal[modalName].render = true;
                this.modal[modalName].timeout = window.setTimeout(() => {
                    this.modal[modalName].open = true;
                    this.modal[modalName].timeout = null;
                }, this.modal[modalName].delayOpen);
            }
            if (!render) {
                this.modal[modalName].open = false;
                this.modal[modalName].close = true;
                this.modal[modalName].timeout = window.setTimeout(() => {
                    this.modal[modalName].render = false;
                    this.modal[modalName].open = false;
                    this.modal[modalName].close = false;
                    this.modal[modalName].timeout = null;
                    this.modal[modalName].callbackOnClose();
                    this.modal[modalName].callbackOnClose = () => { };
                    this.modal[modalName].callbackOnSubmit = () => { };
                    delete this.modal[modalName].data;
                }, this.modal[modalName].delayClose);
            }
            if (!render && !this.modal[modalName].render)
                return;
            if (noTracking)
                return;
            (0,gtmDataLayerPush/* default */.A)({ parameters: null });
            (0,gtmDataLayerPush/* default */.A)({
                action: 'element_view',
                parameters: {
                    object: modalName,
                    state: render,
                },
            });
        };
        this.closeModalAll = () => {
            for (let key in this.modal) {
                this.setModal({
                    modalName: key,
                    render: false,
                });
            }
        };
        this.setIsOnline = (isOnline) => {
            this.isOnline = isOnline;
        };
        this.setAppReady = (value) => {
            this.appReady = value;
        };
        this.setScreenSize = ({ width, height }) => {
            this.screenWidth = width;
            this.screenHeight = height;
            this.isMobile = (0,isMobile/* default */.A)();
            if ('orientation' in window) {
                if (this.isScreenMobileTimeout) {
                    clearTimeout(Number(this.isScreenMobileTimeout));
                }
                this.isScreenMobileTimeout = window.setTimeout(() => {
                    this.setIsScreenMobile(performance.now());
                }, 500);
            }
        };
        this.showOnlineAlert = () => {
            this.setAlertList({
                title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                text: i18next_js_["default"].t('NOTIF.1'),
                type: 'success',
                value: 'networkStatus',
            });
        };
        this.showOfflineAlert = () => {
            this.setAlertList({
                title: i18next_js_["default"].t('NOTIF.2'),
                text: i18next_js_["default"].t('NOTIF.3'),
                type: 'warning',
                value: 'networkStatus',
            });
        };
        this.showUnauthorizedAlert = () => {
            this.setAlertList({
                title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                text: i18next_js_["default"].t('COMMON.PLEASE_LOGIN'),
                type: 'error',
                sticky: true,
            });
        };
        this.hideUnauthorizedAlert = () => {
            this.updateAlertList([]);
        };
        this.lockedApp = (value) => {
            const app = document.getElementById('app');
            if (!app)
                return;
            app.classList.toggle('_locked', value);
        };
        this.errorCodeResolver = (data, cb) => {
            if (!this.isOnline) {
                this.setAlertList({
                    title: 'Warning',
                    text: 'You are currently Offline',
                    type: 'warning',
                    value: 'networkStatus',
                });
                return;
            }
            const { profileCommon: { settings: { options }, }, } = this.root;
            let message = '';
            let code = null;
            const errorCode = (0,getNestedProp/* default */.A)('errorCode', data);
            const codesAvailable = [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                21,
                49,
                50,
            ];
            if (errorCode && codesAvailable.includes(errorCode)) {
                if (this.root.game.gameConfig.gameClient === 'mancala' && errorCode === 5) {
                    this.setModal({
                        modalName: 'mancalaError.5',
                        render: true,
                        delayOpen: 0,
                        delayClose: 0,
                    });
                }
                else if (errorCode === 9) {
                    this.setModal({
                        modalName: 'gameIsDisabled',
                        render: true,
                        delayOpen: 0,
                        delayClose: 0,
                        callbackOnSubmit: () => {
                            location.reload();
                        },
                    });
                }
                else if (options?.hideBalanceNotif && errorCode === 3) {
                    this.postMessageToParent('not_enough_balance');
                    return;
                }
                else {
                    this.setAlertList({
                        title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.ATTENTION'),
                        text: i18next_js_["default"].t(`COMMON.PLACEBET.ERROR.${errorCode}`),
                        type: 'error',
                    });
                }
                return;
            }
            if (data && data.data && data.data.data && data.data.data.data && data.data.data.data.code) {
                code = data.data.data.data.code;
            }
            else if (data && data.data && data.data.data && data.data.data.code) {
                code = data.data.data.code;
            }
            else if (data && data.data && data.data.code) {
                code = data.data.code;
            }
            else if (data && data.code) {
                code = data.code;
            }
            if (data &&
                data.data &&
                data.data.data &&
                data.data.data.data &&
                data.data.data.data.error &&
                typeof data.data.data.data.error === 'string') {
                message = data.data.data.data.error;
            }
            else if (data &&
                data.data &&
                data.data.data &&
                data.data.data.error &&
                typeof data.data.data.error === 'string') {
                message = data.data.data.error;
            }
            else if (data && data.data && data.data.error && typeof data.data.error === 'string') {
                message = data.data.error;
            }
            else if (data && data.error && typeof data.error === 'string') {
                message = data.error;
            }
            if (data &&
                data.data &&
                data.data.data &&
                data.data.data.data &&
                data.data.data.data.message &&
                typeof data.data.data.data.message === 'string') {
                message = data.data.data.data.message;
            }
            else if (data &&
                data.data &&
                data.data.data &&
                data.data.data.message &&
                typeof data.data.data.message === 'string') {
                message = data.data.data.message;
            }
            else if (data && data.data && data.data.message && typeof data.data.message === 'string') {
                message = data.data.message;
            }
            else if (data && data.message && typeof data.message === 'string') {
                message = data.message;
            }
            switch (code) {
                case 600:
                    this.setAlertList({
                        title: 'Attention!',
                        text: 'Error: invalid params',
                        type: 'error',
                    });
                    break;
                case 601:
                    this.setAlertList({
                        title: 'Attention!',
                        text: 'Error: bet already exist',
                        type: 'error',
                    });
                    break;
                case 603:
                    break;
                case 604:
                    this.setAlertList({
                        title: 'Attention!',
                        text: 'Error: amount exceeded',
                        type: 'error',
                    });
                    break;
                case 606:
                    if (!message.length) {
                        message = 'Placebet error';
                    }
                    this.setAlertList({
                        title: 'Attention!',
                        text: `Error: ${message}`,
                        type: 'error',
                    });
                    break;
                case 607:
                    this.setAlertList({
                        title: 'Attention!',
                        text: 'Settle bet error',
                        type: 'error',
                    });
                    break;
                case 608:
                    this.setAlertList({
                        title: 'Attention!',
                        text: 'Error: authentication failed',
                        type: 'error',
                    });
                    break;
                case 609:
                    this.setAlertList({
                        title: 'Attention!',
                        text: 'Error: user already connected',
                        type: 'error',
                    });
                    break;
                default:
                    this.setAlertList({
                        title: i18next_js_["default"].t(`COMMON.PLACEBET.ERROR.ATTENTION`),
                        text: i18next_js_["default"].t(`COMMON.UNPROCESSED_CODE`),
                        type: 'error',
                    });
                    console.log('unprocessed code');
            }
        };
        this.connectRatioListener = () => {
            window.addEventListener('message', (e) => {
                if (e.data.type === 'connectRatio') {
                    this.connectRatio = e.data.data;
                    postMessageRatio();
                }
            });
            const observerDomTimeEnd = Date.now() + 10000;
            const observerDom = new MutationObserver((mutationsList, observer) => {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        if (Date.now() > observerDomTimeEnd || this.connectRatioElement) {
                            observer.disconnect();
                            return;
                        }
                        const element1 = document.getElementById('connectRatioElement');
                        const element2 = document.getElementById('observeElementTree');
                        if (element1 || element2) {
                            this.connectRatioElement = element1 || element2;
                            observer.disconnect();
                            connectRatioElementResize();
                            return;
                        }
                    }
                }
            });
            observerDom.observe(document.documentElement, {
                attributes: true,
                childList: true,
                subtree: true,
            });
            const connectRatioElementResize = () => {
                if (!this.connectRatioElement)
                    return;
                const observer = new ResizeObserver(() => {
                    postMessageRatio();
                });
                observer.observe(this.connectRatioElement);
                postMessageRatio();
            };
            const postMessageRatio = () => {
                if (this.connectRatio.minWidth === 0 && this.connectRatio.minHeight === 0)
                    return;
                window.parent.postMessage(JSON.stringify({
                    type: 'connectRatio',
                    data: {
                        width: Math.max(this.connectRatioElement?.offsetWidth || 0, this.connectRatio.minWidth),
                        height: Math.max(this.connectRatioElement?.offsetHeight || 0, this.connectRatio.minHeight),
                    },
                }), '*');
            };
        };
        this.delayAlerts = [];
        this.setDelayAlert = (index, type) => {
            if (!this.isOnline)
                return;
            const timeout = setTimeout(() => {
                this.enableDelayAlert(index, type);
            }, 3000);
            this.delayAlerts.push({ index, timeout, type, enabled: false });
        };
        this.clearDelayAlert = (index, type) => {
            this.delayAlerts.forEach((alert) => {
                clearTimeout(alert.timeout);
            });
            this.delayAlerts = [];
            this.updateAlertList(!!this.alertList.length
                ? this.alertList.filter((alert) => !(alert.sticky === true && alert.type === 'warning'))
                : this.alertList);
        };
        this.clearDelayAlertAll = () => {
            this.delayAlerts.forEach((alert) => {
                clearTimeout(alert.timeout);
            });
            this.delayAlerts = [];
            this.updateAlertList([]);
        };
        this.enableDelayAlert = (index, type) => {
            const delayAlert = this.delayAlerts.find((alert) => alert.index === index && alert.type === type);
            if (!this.isOnline)
                return;
            if (!delayAlert)
                return;
            if (delayAlert.enabled)
                return;
            delayAlert.enabled = true;
            this.setAlertList({
                title: i18next_js_["default"].t('NOTIF.2'),
                text: i18next_js_["default"].t('NOTIF.11'),
                type: 'warning',
                sticky: true,
            });
        };
        this.registerEvents = () => {
            const handleResize = () => {
                this.setScreenSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            const handleOffline = () => {
                console.log('@@@ handleOffline 1');
                if (this.delayAlerts.length) {
                    this.clearDelayAlertAll();
                }
                clearTimeout(this.isOnlineTimeout);
                this.isOnlineTimeout = null;
                this.setIsOnline(false);
                this.showOfflineAlert();
            };
            const handleClick = () => {
                this.setFirstClick(true);
            };
            const handleMessage = (e) => {
                this.setPostMessage(e);
            };
            window.addEventListener('resize', handleResize);
            window.addEventListener('offline', handleOffline);
            document.addEventListener('click', handleClick);
            window.addEventListener('message', handleMessage);
            handleResize();
        };
        this.checkSettleError = (resp, callback) => {
            if (resp.message === 'Settle failed') {
                this.setAlertList({
                    title: '',
                    text: 'COMMON.PLACEBET.ERROR.50',
                    type: 'warning',
                });
                callback();
            }
        };
        this.checkErrorToResetGame = (error, callback) => {
            if (error.response && error.response.status) {
                const status = error.response.status.toString();
                const errorCode = (0,getNestedProp/* default */.A)('errorCode', error.response);
                if (this.root.game.gameConfig.gameClient === 'mancala' && errorCode === 5) {
                    callback();
                    return;
                }
                if (status.startsWith('4') || status.startsWith('5')) {
                    this.setAlertList({
                        title: '',
                        text: 'COMMON.PLACEBET.ERROR.50',
                        type: 'warning',
                    });
                    callback();
                }
            }
        };
        this.animationEvents = {};
        this.animationEvent = {
            init: false,
            running: false,
            duration: 0,
            delay: 0,
            callbackRun: () => { },
            callbackEnd: () => { },
        };
        this.animationEventsCreate = (id) => {
            if (this.animationEvents[id])
                return;
            this.animationEvents = Object.assign(this.animationEvents, {
                [id]: this.animationEvent,
            });
        };
        this.animationEventsInit = (id, config) => {
            const getEvent = (animationEvents) => {
                if (!animationEvents[id])
                    return this.animationEvent;
                return animationEvents[id];
            };
            if (!this.animationEvents[id] || this.animationEvents[id].init)
                return getEvent;
            const event = {
                ...this.animationEvent,
                ...(config.duration && { duration: config.duration }),
                ...(config.delay && { delay: config.delay }),
                ...(config.callbackRun && { callbackRun: config.callbackRun }),
                ...(config.callbackEnd && { callbackEnd: config.callbackEnd }),
                init: true,
            };
            this.animationEvents = Object.assign(this.animationEvents, { [id]: event });
            setTimeout(() => {
                this.animationEvents = Object.assign(this.animationEvents, { [id]: { ...event, running: true } });
                event.callbackRun();
            }, event.delay);
            setTimeout(() => {
                const { [id]: _, ...animationEvents } = this.animationEvents;
                this.animationEvents = animationEvents;
                event.callbackEnd();
            }, event.delay + event.duration);
            return getEvent;
        };
        this.addLastBetAction = ({ betId, action }) => {
            this.lastBetAction.push({ betId, action });
        };
        this.setThemeManuallySet = (themeManuallySet) => {
            this.themeManuallySet = themeManuallySet;
        };
        this.setColorTheme = (colorTheme) => {
            this.colorTheme = colorTheme;
            document.body.classList.toggle('dark-theme', colorTheme === 'dark');
        };
        this.checkColorTheme = () => {
            const lsTheme = localStorageHelper/* default */.A.get('colorTheme');
            if (lsTheme) {
                this.colorTheme = lsTheme === 'dark' ? 'dark' : 'light';
                document.body.classList.toggle('dark-theme', this.colorTheme === 'dark');
                this.themeManuallySet = true;
            }
        };
        this.toggleColorTheme = () => {
            this.setColorTheme(this.colorTheme === 'light' ? 'dark' : 'light');
            localStorageHelper/* default */.A.set('colorTheme', this.colorTheme);
            this.setThemeManuallySet(true);
        };
        this.postMessageToParent = (type) => {
            const urlParams = new URLSearchParams(window.location.search);
            const cid = urlParams.get('cid');
            const sub = urlParams.get('sub_partner_id');
            if ((cid === 'tbucp' || cid === 'democustomer' || sub === 'turbogames') && type) {
                window.parent.postMessage({ type: `egtd-agg.${type}` }, '*');
            }
            if (cid === 'softswiss' && sub === 'betonproject' && type === 'not_enough_balance') {
                window.parent.postMessage(`${type}`, '*');
            }
        };
        this.showNotEnoughBalanceError = () => {
            const { profileCommon: { settings: { options } }, } = this.root;
            switch (true) {
                case Boolean(options?.hideBalanceNotif):
                    this.postMessageToParent('not_enough_balance');
                    break;
                default:
                    this.setAlertList({
                        title: i18next_js_["default"].t('COMMON.PLACEBET.ERROR.3'),
                        type: 'error',
                    });
            }
        };
        this.root = root;
        (0,mobx_esm_js_.makeObservable)(this);
        if (typeof document.addEventListener === 'undefined' || UiCommon_hidden === undefined) {
            console.log('This feature requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.');
        }
        else {
            document.addEventListener(visibilityChange, this.handleVisibilityChange, false);
        }
        this.connectRatioListener();
        this.registerEvents();
        if (this.root.profileCommon?.settings?.options?.customBr) {
            this.registerInactivityTimer();
        }
        this.checkColorTheme();
        const { splitTest } = this.root.profileCommon;
        if (!this.themeManuallySet && splitTest?.variantValue === 'vortex2_release' && splitTest?.variantType === 'test') {
            this.setColorTheme('dark');
        }
        (0,mobx_esm_js_.reaction)(() => ({
            customBr: this.root.profileCommon?.settings?.options?.customBr,
        }), ({ customBr }) => {
            if (customBr) {
                this.registerInactivityTimer();
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            splitTest: this.root.profileCommon.splitTest,
        }), ({ splitTest }) => {
            if (this.themeManuallySet)
                return;
            if (splitTest?.variantValue === 'vortex2_release' && splitTest?.variantType === 'test') {
                this.setColorTheme('dark');
            }
        });
        (0,mobx_esm_js_.reaction)(() => ({
            isOnline: this.isOnline,
        }), ({ isOnline }) => {
            if (!isOnline) {
                this.checkConnectivity();
            }
        });
    }
    get orientation() {
        return this.screenWidth > this.screenHeight ? 'landscape' : 'portrait';
    }
    get amountError() {
        const { game: { amount }, } = this.root;
        return this.getAmountError(amount);
    }
    registerInactivityTimer() {
        const handleActivity = () => {
            this.scheduleInactivityTimer();
        };
        document.addEventListener('mousemove', handleActivity);
        document.addEventListener('keydown', handleActivity);
        document.addEventListener('touchstart', handleActivity);
        document.addEventListener('scroll', handleActivity, true);
        if (!document[UiCommon_hidden]) {
            this.scheduleInactivityTimer();
        }
    }
    async checkConnectivity(delay = 2000) {
        if (this.isCheckingConnectivity)
            return;
        this.isCheckingConnectivity = true;
        while (this.isCheckingConnectivity) {
            try {
                if (this.isOnline) {
                    this.isCheckingConnectivity = false;
                }
                const isDev = ['dev', 'development'].includes((0,bootstrap.GET_ENV)().APP_ENV);
                await (0,api/* getEdgeStatus */.wf)(isDev);
                this.isCheckingConnectivity = false;
                console.log(this.isOnline, '@@@ this.isOnline checkConnectivity');
                if (!this.isOnline) {
                    this.setIsOnline(true);
                    this.showOnlineAlert();
                }
                return;
            }
            catch (err) {
                console.warn(`@@@ connectivity failed`, err);
                await new Promise((res) => setTimeout(res, delay));
            }
        }
    }
}
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "alertList", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "fullScreen", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "statsModalOpen", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "limitsModalOpen", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "rulesModalOpen", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "statisticModalOpen", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "settingsOpen", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "tournamentsModalOpen", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "exitGameModalOpen", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "modal", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "isMobile", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "isOnline", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "appReady", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "isOnlineTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "isCheckingConnectivity", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "isVisible", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "postMessage", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "betData", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "betInfoGameId", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "betInfoId", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "betHistoryInfoResultIndex", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "lastBetAction", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "guideShown", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "guideStatus", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "screenWidth", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "screenHeight", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "pageDisabled", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "firstClick", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "initDate", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "noAnimation", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "resizeObserverElementTree", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "connectRatio", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "connectRatioElement", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "isScreenMobileTimeout", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "isScreenMobile", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "pageRatio", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "paytableOpen", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setPaytableOpen", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "gameSpeed", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setGameSpeed", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "betPresetsOpen", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setBetPresetsOpen", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "autoPlayOpen", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setAutoPlayOpen", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "themeManuallySet", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "colorTheme", void 0);
__decorate([
    mobx_esm_js_.computed
], UiCommon.prototype, "orientation", null);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setIsScreenMobile", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setPageRatio", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setPageDisabled", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setNoAnimation", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setGuideShown", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setGuideStatus", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "handleVisibilityChange", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "clearInactivityTimer", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "scheduleInactivityTimer", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "onInactivityTimeout", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setBetInfoGameId", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setBetInfoId", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setBetHistoryInfoResultIndex", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setFirstClick", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setPostMessage", void 0);
__decorate([
    mobx_esm_js_.computed
], UiCommon.prototype, "amountError", null);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setFullScreen", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setAlertList", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "updateAlertList", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "removeFirstItemAlertList", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setBackendErrors", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "clearBackendErrors", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setSettingsOpen", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setStatsModalOpen", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setLimitsModalOpen", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setRulesModalOpen", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setStatisticModalOpen", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setTournamentsModalOpen", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setExitGameModalOpen", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setModal", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "closeModalAll", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setIsOnline", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setAppReady", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setScreenSize", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "showUnauthorizedAlert", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "hideUnauthorizedAlert", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "lockedApp", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "connectRatioListener", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "delayAlerts", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setDelayAlert", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "clearDelayAlert", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "clearDelayAlertAll", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "enableDelayAlert", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "registerEvents", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "registerInactivityTimer", null);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "checkSettleError", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "checkErrorToResetGame", void 0);
__decorate([
    mobx_esm_js_.observable
], UiCommon.prototype, "animationEvents", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "animationEventsCreate", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "animationEventsInit", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "addLastBetAction", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setThemeManuallySet", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "setColorTheme", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "checkColorTheme", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "toggleColorTheme", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "postMessageToParent", void 0);
__decorate([
    mobx_esm_js_.action
], UiCommon.prototype, "showNotEnoughBalanceError", void 0);
/* harmony default export */ const store_UiCommon = (UiCommon);


/***/ }),

/***/ 26906:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AudioCommon.ts": [
		6862,
		[]
	],
	"./AutobetCommon.ts": [
		33738,
		[]
	],
	"./BalanceCommon.ts": [
		15248,
		[]
	],
	"./BonusTowersCommon.ts": [
		41954,
		[
			1682,
			8239,
			1954
		]
	],
	"./BubblesCommon.ts": [
		58554,
		[
			1682,
			8239,
			8554
		]
	],
	"./CascadeCommon.ts": [
		72531,
		[
			1682,
			8239,
			2531
		]
	],
	"./CascadeSlotStateMachine.ts": [
		12835,
		[
			2835
		]
	],
	"./CatanzaCommon.ts": [
		32426,
		[
			1682,
			8239,
			2426
		]
	],
	"./ChickenboatCommon.ts": [
		80043,
		[
			1682,
			8239,
			43
		]
	],
	"./ChickenzapCommon.ts": [
		76014,
		[
			1682,
			8239,
			6014
		]
	],
	"./ClickerCommon.ts": [
		50647,
		[
			1682,
			8239,
			9735
		]
	],
	"./ClickerCommonStores/FreeSpinStore.ts": [
		64425,
		[
			1682,
			8239,
			9735
		]
	],
	"./CrashAutobetCommon.ts": [
		24635,
		[
			4635
		]
	],
	"./CrashCommon.ts": [
		42031,
		[
			8239,
			2652,
			2031
		]
	],
	"./CrystalpokerCommon.ts": [
		89455,
		[
			1682,
			8239,
			9455
		]
	],
	"./Dice3Common.ts": [
		23915,
		[
			1682,
			8239,
			3915
		]
	],
	"./DiceCommon.ts": [
		41569,
		[
			1682,
			8239,
			1569
		]
	],
	"./DoubleCommon.ts": [
		8264,
		[
			8239,
			2652,
			8264
		]
	],
	"./FreebetsCommon.ts": [
		42718,
		[]
	],
	"./HoldCrashCommon.ts": [
		49878,
		[
			1682,
			8239,
			9878
		]
	],
	"./JewelclickerCommon.ts": [
		61576,
		[
			1682,
			8239,
			1576
		]
	],
	"./LimboCommon.ts": [
		95042,
		[
			1682,
			8239,
			5042
		]
	],
	"./MinesCommon.ts": [
		84576,
		[
			1682,
			8239,
			4576
		]
	],
	"./MultiMinesCommon.ts": [
		99364,
		[
			1682,
			8239,
			2652,
			9364
		]
	],
	"./MystecoCommon.ts": [
		61179,
		[
			1682,
			8239,
			1179
		]
	],
	"./OneTapMinesCommon.ts": [
		42858,
		[
			1682,
			8239,
			2858
		]
	],
	"./PandaPokerCommon.ts": [
		22246,
		[
			1682,
			8239,
			2246
		]
	],
	"./PlinkoCommon.ts": [
		20861,
		[
			1682,
			8239,
			861
		]
	],
	"./ProfileCommon.ts": [
		73826,
		[]
	],
	"./QuickModeCommon.ts": [
		9332,
		[]
	],
	"./TournamentsCommon.ts": [
		16699,
		[]
	],
	"./TowersCommon.ts": [
		79942,
		[
			1682,
			8239,
			9942
		]
	],
	"./TrackingCommon.ts": [
		46901,
		[]
	],
	"./UiCommon.ts": [
		12155,
		[]
	],
	"./UltimateDiceCommon.ts": [
		25163,
		[
			1682,
			8239,
			5163
		]
	],
	"./Vortex2Common.ts": [
		39571,
		[
			1682,
			8239,
			9571
		]
	],
	"./VortexAeroCommon.ts": [
		70423,
		[
			1682,
			8239,
			5984,
			423
		]
	],
	"./VortexAeroCommonStores/BonusGameStore.ts": [
		25984,
		[
			5984
		]
	],
	"./VortexAeroCommonStores/auction.ts": [
		60925,
		[
			925
		]
	],
	"./VortexCommon.ts": [
		90728,
		[
			1682,
			8239,
			728
		]
	],
	"./WheelCommon.ts": [
		77668,
		[
			8239,
			7668
		]
	]
};
function webpackAsyncContext(req) {
	try {
		if(!__webpack_require__.o(map, req)) {
			return Promise.resolve().then(() => {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
});
		}
	} catch(err) {
		return Promise.reject(err);
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids[1].map(__webpack_require__.e)).then(() => (__webpack_require__(id)));
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 26906;
module.exports = webpackAsyncContext;

/***/ })

}]);