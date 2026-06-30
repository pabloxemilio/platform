"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[9434],{

/***/ 60287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* reexport */ Timer)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
;// ./src/framework/components/TimerPercent/TimerPercent.tsx


function _TimerPercent({ children, callback = () => { }, from, to, step = 1000 }) {
    const [percent, setPercent] = (0,hooks_module_js_.useState)(0);
    (0,hooks_module_js_.useEffect)(() => {
        const fromDate = new Date(from).getTime();
        const toDate = new Date(to).getTime();
        const difference = toDate - fromDate;
        const computed = () => {
            const currentDate = Date.now() - fromDate;
            const percent = Math.round((currentDate / difference) * 100);
            if (currentDate <= 0) {
                clearInterval(interval);
                setPercent(100);
                callback();
                return;
            }
            setPercent(percent);
        };
        computed();
        const interval = setInterval(computed, step);
        return () => clearInterval(interval);
    }, []);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ percent }) });
}
const TimerPercent = _TimerPercent;

;// ./src/framework/components/TimerPercent/index.tsx


;// ./src/framework/components/Timer/Timer.tsx




function _Timer({ children, callback = () => { }, countdownDate = undefined, milliseconds = undefined, step = 1000, useInitDate = false, }) {
    const { uiCommon: { initDate }, } = (0,bootstrap.GET_STORE)();
    const [date, setDate] = (0,hooks_module_js_.useState)({
        years: '',
        months: '',
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
        milliseconds: '',
    });
    (0,hooks_module_js_.useEffect)(() => {
        if (milliseconds && !countdownDate) {
            const interval = intervalMilliseconds(milliseconds);
            return () => clearInterval(interval);
        }
        if (countdownDate && !milliseconds) {
            const interval = intervalCountdownDate(countdownDate);
            return () => clearInterval(interval);
        }
        const interval = intervalDefault();
        return () => clearInterval(interval);
    }, []);
    function intervalDefault() {
        const currentDate = useInitDate ? initDate : Date.now();
        const computed = () => {
            const difference = Date.now() - currentDate;
            setDate(convertMilliseconds(difference));
        };
        const interval = setInterval(computed, step);
        computed();
        return interval;
    }
    function intervalMilliseconds(milliseconds = undefined) {
        const currentDate = useInitDate ? initDate : Date.now();
        const computed = () => {
            const difference = Date.now() - currentDate;
            if (milliseconds && difference >= milliseconds) {
                clearInterval(interval);
                setDate(convertMilliseconds(milliseconds));
                callback();
                return;
            }
            setDate(convertMilliseconds(difference));
        };
        const interval = setInterval(computed, step);
        computed();
        return interval;
    }
    function intervalCountdownDate(countdownDate = new Date()) {
        const currentDate = new Date(countdownDate).getTime();
        const computed = () => {
            const difference = currentDate - Date.now();
            if (difference <= 0) {
                clearInterval(interval);
                setDate(convertMilliseconds(0));
                callback();
                return;
            }
            setDate(convertMilliseconds(difference));
        };
        const interval = setInterval(computed, step);
        computed();
        return interval;
    }
    function convertMilliseconds(milliseconds) {
        const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365;
        const millisecondsPerMonth = millisecondsPerYear / 12;
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const millisecondsPerHour = 1000 * 60 * 60;
        const millisecondsPerMinute = 1000 * 60;
        const millisecondsPerSecond = 1000;
        const years = Math.floor(milliseconds / millisecondsPerYear);
        milliseconds %= millisecondsPerYear;
        const months = Math.floor(milliseconds / millisecondsPerMonth);
        milliseconds %= millisecondsPerMonth;
        const days = Math.floor(milliseconds / millisecondsPerDay);
        milliseconds %= millisecondsPerDay;
        const hours = Math.floor(milliseconds / millisecondsPerHour);
        milliseconds %= millisecondsPerHour;
        const minutes = Math.floor(milliseconds / millisecondsPerMinute);
        milliseconds %= millisecondsPerMinute;
        const seconds = Math.floor(milliseconds / millisecondsPerSecond);
        milliseconds %= millisecondsPerSecond;
        return {
            years: years.toString(),
            months: months.toString().padStart(2, '0'),
            days: days.toString().padStart(2, '0'),
            hours: hours.toString().padStart(2, '0'),
            minutes: minutes.toString().padStart(2, '0'),
            seconds: seconds.toString().padStart(2, '0'),
            milliseconds: milliseconds.toString().slice(0, 2).padStart(2, '0'),
        };
    }
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(date) });
}
const Timer = Object.assign(_Timer, {
    Percent: TimerPercent,
});

;// ./src/framework/components/Timer/index.tsx



/***/ }),

/***/ 30312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* reexport */ Tournaments)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
;// ./src/framework/components/TournamentsLabel/TournamentsLabel.tsx







function _TournamentsLabel({ children, onCLick = () => { }, delayOpen, delayClose, style }) {
    const { tournamentsCommon: { labelTournament, setActiveTournamentId }, uiCommon: { setModal }, profileCommon: { profile: { currency, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    if (!labelTournament.tournament)
        return null;
    if (!labelTournament.tournamentStrapi)
        return null;
    if (new Date(labelTournament.tournament.endAt).getTime() <= Date.now())
        return null;
    const prizesTotalSum = (0,hooks_module_js_.useMemo)(() => {
        if (!labelTournament.tournamentStrapi.attributes.prizesTotalSum)
            return null;
        const prizesTotalSum = labelTournament.tournamentStrapi.attributes.prizesTotalSum;
        if (prizesTotalSum[currency]) {
            return prizesTotalSum[currency];
        }
        else if (prizesTotalSum['usd']) {
            return prizesTotalSum['usd'];
        }
        return null;
    }, []);
    const handleOnClick = (e) => {
        setActiveTournamentId(labelTournament.tournament.id);
        setModal({
            modalName: 'tournamentsInfo',
            render: true,
            delayOpen: delayOpen,
            delayClose: delayClose,
        });
        onCLick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            endAt: labelTournament.tournament.endAt,
            description: t('TOURNAMENT.JOIN.NOTIF'),
            currencySign: prizesTotalSum?.currencySign,
            sum: prizesTotalSum?.sum,
            sumShort: prizesTotalSum?.sum ? (0,shortNumber/* default */.A)(Number(prizesTotalSum.sum), rounding) : undefined,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onCLick: handleOnClick,
            style,
        })) }));
}
const TournamentsLabel = (0,index_js_.observer)(_TournamentsLabel);

;// ./src/framework/components/TournamentsLabel/index.tsx


;// ./src/framework/components/TournamentsInfo/TournamentsInfo.tsx




function _TournamentsInfo({ children }) {
    const { tournamentsCommon: { activeTournament, activeTournamentStrapi, loading }, profileCommon: { profile: { currency, rounding }, }, } = (0,bootstrap.GET_STORE)();
    if (!activeTournament)
        return null;
    if (!activeTournamentStrapi)
        return null;
    const [finish, setFinish] = (0,hooks_module_js_.useState)(Date.now() > new Date(activeTournament.endAt).getTime());
    const tournamentTotalSum = (0,hooks_module_js_.useMemo)(() => {
        if (!activeTournamentStrapi)
            return null;
        if (!activeTournamentStrapi.attributes.prizesTotalSum)
            return null;
        const prizesTotalSum = activeTournamentStrapi.attributes.prizesTotalSum;
        if (prizesTotalSum[currency]) {
            return prizesTotalSum[currency];
        }
        else if (prizesTotalSum['usd']) {
            return prizesTotalSum['usd'];
        }
        return null;
    }, [activeTournamentStrapi, currency]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            timer: {
                countdownDate: new Date(activeTournament.endAt).getTime(),
                step: 1000,
                callback: () => setFinish(true),
            },
            startAt: activeTournament.startAt,
            endAt: activeTournament.endAt,
            finish: finish,
            loading,
            image: activeTournamentStrapi.attributes?.image?.data?.attributes?.url,
            imageMob: activeTournamentStrapi.attributes?.imageMob?.data?.attributes?.url,
            image656x192: activeTournamentStrapi.attributes?.image656x192?.data?.attributes?.url,
            image592x540: activeTournamentStrapi.attributes?.image592x540?.data?.attributes?.url,
            image320x200: activeTournamentStrapi.attributes?.image320x200?.data?.attributes?.url,
            name: activeTournamentStrapi.attributes?.description,
            winnerCount: activeTournamentStrapi.attributes?.prizesWinnerCount,
            currency: tournamentTotalSum?.currencySign,
            sum: tournamentTotalSum?.sum,
            sumShort: tournamentTotalSum?.sum ? (0,shortNumber/* default */.A)(Number(tournamentTotalSum.sum), rounding) : undefined,
        }) }));
}
const TournamentsInfo = _TournamentsInfo;

;// ./src/framework/components/TournamentsInfo/index.tsx


// EXTERNAL MODULE: consume shared module (default) markdown-to-jsx@^7.3.2 (strict) (fallback: ./node_modules/markdown-to-jsx/dist/index.modern.js)
var index_modern_js_ = __webpack_require__(32811);
;// ./src/framework/components/TournamentsInfoRule/TournamentsInfoRule.tsx





function _TournamentsInfoRule({ children }) {
    const { tournamentsCommon: { activeTournamentStrapi, loading }, } = (0,bootstrap.GET_STORE)();
    const tournamentRule = (0,hooks_module_js_.useMemo)(() => {
        if (!activeTournamentStrapi)
            return null;
        return activeTournamentStrapi.attributes.rules;
    }, [activeTournamentStrapi]);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ rules: tournamentRule ? (0,index_modern_js_.compiler)(tournamentRule) : null, loading }) });
}
const TournamentsInfoRule = (0,index_js_.observer)(_TournamentsInfoRule);

;// ./src/framework/components/TournamentsInfoRule/index.tsx


;// ./src/framework/components/TournamentsInfoPrize/TournamentsInfoPrize.tsx





function _TournamentsInfoPrize({ children }) {
    const { tournamentsCommon: { activeTournamentStrapi, loading }, profileCommon: { profile: { currency }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const tournamentPrize = (0,hooks_module_js_.useMemo)(() => {
        if (!activeTournamentStrapi)
            return null;
        if (!activeTournamentStrapi.attributes.prizes)
            return null;
        const prizes = activeTournamentStrapi.attributes.prizes;
        const isMulti = typeof Object.values(prizes)[0] !== 'string';
        if (isMulti) {
            if (prizes[currency] && typeof prizes[currency] === 'object') {
                return Object.keys(prizes[currency]).map((key) => ({ key, value: prizes[currency][key] }));
            }
            else if (prizes['usd']) {
                return Object.keys(prizes['usd']).map((key) => ({ key, value: prizes['usd'][key] }));
            }
        }
        return Object.keys(prizes).map((key) => ({ key, value: prizes[key] }));
    }, [activeTournamentStrapi, currency]);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ prize: tournamentPrize, titlePrize: t('TOURNAMENT.PRIZE'), loading }) });
}
const TournamentsInfoPrize = (0,index_js_.observer)(_TournamentsInfoPrize);

;// ./src/framework/components/TournamentsInfoPrize/index.tsx


;// ./src/framework/components/TournamentsInfoLeaderbords/TournamentsInfoLeaderbords.tsx





function _TournamentsInfoLeaderbords({ children }) {
    const { tournamentsCommon: { activeTournamentId, tournamentsLeaderbords, getTournamentLeaderbords, activeTournamentStrapi, loading, }, profileCommon: { profile: { playerId, currency }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [list, setList] = (0,hooks_module_js_.useState)([]);
    const [listSpaceIndex, setListSpaceIndex] = (0,hooks_module_js_.useState)(-1);
    (0,hooks_module_js_.useEffect)(() => {
        if (!activeTournamentId)
            return;
        if (!tournamentsLeaderbords[activeTournamentId])
            return;
        if (!activeTournamentStrapi)
            return;
        if (!activeTournamentStrapi.attributes.prizes)
            return;
        const prizes = activeTournamentStrapi.attributes.prizes;
        const isMulti = typeof Object.values(prizes)[0] !== 'string';
        let prizesList = {};
        if (isMulti) {
            if (prizes[currency] && typeof prizes[currency] === 'object') {
                prizesList = prizes[currency];
            }
            else if (prizes['usd']) {
                prizesList = prizes['usd'];
            }
        }
        else {
            prizesList = prizes;
        }
        const prizesListFull = Object.keys(prizesList).reduce((acc, key) => {
            if (!key.includes('-')) {
                acc[key] = prizesList[key];
            }
            if (key.includes('-')) {
                const [from, to] = key.split('-');
                for (let i = Number(from); i <= Number(to); i++) {
                    acc[i] = prizesList[key];
                }
            }
            return acc;
        }, {});
        const list = tournamentsLeaderbords[activeTournamentId].map((item, index) => {
            item.prize = prizesListFull[item.rank] || '0';
            return item;
        });
        for (let i = 1; i < list.length; i++) {
            if (list[i].rank > list[i - 1].rank + 1) {
                setListSpaceIndex(i);
                break;
            }
        }
        setList(list);
    }, [activeTournamentId, tournamentsLeaderbords, loading]);
    (0,hooks_module_js_.useEffect)(() => {
        const get = async () => {
            getTournamentLeaderbords(activeTournamentId);
        };
        get();
    }, []);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            list: list,
            listSpaceIndex,
            loading,
            activeId: playerId,
            titlePosition: t('TOURNAMENT.POSITION'),
            titleUser: t('TOURNAMENT.USER'),
            titlePoints: t('TOURNAMENT.SCORE'),
            titlePrize: t('TOURNAMENT.PRIZE'),
        }) }));
}
const TournamentsInfoLeaderbords = (0,index_js_.observer)(_TournamentsInfoLeaderbords);

;// ./src/framework/components/TournamentsInfoLeaderbords/index.tsx


;// ./src/framework/components/TournamentsInfoWinners/TournamentsInfoWinners.tsx





function _TournamentsInfoWinners({ children }) {
    const { tournamentsCommon: { activeTournamentId, tournamentsWinners, getTournamentWinners, loading, activeTournamentStrapi, }, profileCommon: { profile: { playerId, currency }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [list, setList] = (0,hooks_module_js_.useState)([]);
    const [listSpaceIndex, setListSpaceIndex] = (0,hooks_module_js_.useState)(-1);
    const [prizesWinnerCount, setPrizesWinnerCount] = (0,hooks_module_js_.useState)(0);
    (0,hooks_module_js_.useEffect)(() => {
        if (!activeTournamentId)
            return;
        if (!tournamentsWinners[activeTournamentId])
            return;
        const list = tournamentsWinners[activeTournamentId];
        try {
            const { prizes, prizesWinnerCount } = activeTournamentStrapi.attributes;
            setPrizesWinnerCount(prizesWinnerCount);
            const isMulti = typeof Object.values(prizes)[0] !== 'string';
            const prizesCurrency = isMulti
                ? prizes[currency] && typeof prizes[currency] === 'object'
                    ? prizes[currency]
                    : prizes['usd']
                        ? prizes['usd']
                        : {}
                : prizes;
            const prizesSpread = Object.keys(prizesCurrency).reduce((acc, key) => {
                if (key.includes('-')) {
                    const [start, end] = key.split('-').map(Number);
                    for (let i = start; i <= end; i++) {
                        acc[i] = prizesCurrency[key];
                    }
                }
                else {
                    acc[key] = prizesCurrency[key];
                }
                return acc;
            }, {});
            list.forEach((item) => {
                item.prize = String(prizesSpread[item.rank]);
            });
        }
        catch (error) {
            console.log(error, 'error assigning prizes');
        }
        setList(list);
        for (let i = 1; i < list.length; i++) {
            if (list[i].rank > list[i - 1].rank + 1) {
                setListSpaceIndex(i);
                break;
            }
        }
    }, [activeTournamentId, tournamentsWinners, loading]);
    (0,hooks_module_js_.useEffect)(() => {
        const get = async () => {
            getTournamentWinners(activeTournamentId);
        };
        get();
    }, []);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            list: list.slice(0, prizesWinnerCount),
            listSpaceIndex,
            loading,
            activeId: playerId,
            titlePosition: t('TOURNAMENT.POSITION'),
            titleUser: t('TOURNAMENT.USER'),
            titlePoints: t('TOURNAMENT.SCORE'),
            titlePrize: t('TOURNAMENT.PRIZE'),
        }) }));
}
const TournamentsInfoWinners = (0,index_js_.observer)(_TournamentsInfoWinners);

;// ./src/framework/components/TournamentsInfoWinners/index.tsx


;// ./src/framework/components/TournamentsInfoTab/TournamentsInfoTab.tsx




const Context = (0,preact_module_js_.createContext)({});
function _TournamentsInfoTab({ children, list = ['leaderbords', 'prizes', 'rules', 'winners'] }) {
    const { t } = (0,es_index_js_.useTranslation)();
    const [active, setActive] = (0,hooks_module_js_.useState)(0);
    const translates = {
        leaderbords: t('TOURNAMENT.LEADERBOARD'),
        prizes: t('TOURNAMENT.PRIZES'),
        rules: t('COMMON.RULES'),
        winners: t('TOURNAMENT.WINNERS'),
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: { setActive }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                list: list.map((item) => translates[item]),
                active,
            }) }) }));
}
const TournamentsInfoTab = _TournamentsInfoTab;

;// ./src/framework/components/TournamentsInfoTab/index.tsx


;// ./src/framework/components/TournamentsInfoTabItem/TournamentsInfoTabItem.tsx




function _TournamentsInfoTabItem({ children, index, onClick = () => { } }) {
    const { setActive } = (0,hooks_module_js_.useContext)(Context);
    const handleClick = () => {
        setActive(index);
        onClick();
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) });
}
const TournamentsInfoTabItem = _TournamentsInfoTabItem;

;// ./src/framework/components/TournamentsInfoTabItem/index.tsx


;// ./src/framework/components/TournamentsList/TournamentsList.tsx






function _TournamentsList({ children }) {
    const { tournamentsCommon: { tournaments, tournamentsStrapi, loading }, profileCommon: { profile: { currency, rounding }, language, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [list, setList] = (0,hooks_module_js_.useState)([]);
    const [listActive, setListActive] = (0,hooks_module_js_.useState)([]);
    const [listFinished, setListFinished] = (0,hooks_module_js_.useState)([]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!tournaments)
            return;
        if (!tournamentsStrapi)
            return;
        const list = [];
        const listActive = [];
        const listFinished = [];
        for (let i = 0; i < tournaments.length; i++) {
            const strapi = tournamentsStrapi[`${tournaments[i].id}${language}`] || tournamentsStrapi[`${tournaments[i].id}en`];
            if (!strapi)
                continue;
            const totalSum = (() => {
                if (!strapi)
                    return null;
                if (!strapi.attributes.prizesTotalSum)
                    return null;
                const prizesTotalSum = strapi.attributes.prizesTotalSum;
                if (prizesTotalSum[currency]) {
                    return prizesTotalSum[currency];
                }
                else if (prizesTotalSum['usd']) {
                    return prizesTotalSum['usd'];
                }
                return null;
            })();
            const item = {
                tournamentId: tournaments[i].id,
                timer: {
                    countdownDate: new Date(tournaments[i].endAt).getTime(),
                    step: 1000,
                    callback: () => { },
                },
                startAt: tournaments[i].startAt,
                endAt: tournaments[i].endAt,
                finish: Date.now() > new Date(tournaments[i].endAt).getTime(),
                image: strapi.attributes?.image.data.attributes.url,
                imageMob: strapi.attributes?.imageMob?.data?.attributes?.url,
                image656x192: strapi.attributes?.image656x192?.data?.attributes?.url,
                image592x540: strapi.attributes?.image592x540?.data?.attributes?.url,
                image320x200: strapi.attributes?.image320x200?.data?.attributes?.url,
                name: strapi.attributes?.description,
                winnerCount: strapi.attributes?.prizesWinnerCount,
                currency: totalSum?.currencySign,
                sum: totalSum?.sum,
                sumShort: totalSum?.sum ? (0,shortNumber/* default */.A)(Number(totalSum.sum), rounding) : undefined,
            };
            list.push(item);
            if (!item.finish)
                listActive.push(item);
            if (item.finish)
                listFinished.push(item);
        }
        setList(list);
        setListActive(listActive);
        setListFinished(listFinished);
    }, [tournaments, tournamentsStrapi]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.TOURNAMENTS'),
            loading,
            list,
            listActive,
            listFinished,
        }) }));
}
const TournamentsList = (0,index_js_.observer)(_TournamentsList);

;// ./src/framework/components/TournamentsList/index.tsx


;// ./src/framework/components/TournamentsListButton/TournamentsListButton.tsx




function _TournamentsListButton({ children, onClick = () => { }, delayOpen, delayClose, tournamentId }) {
    const { tournamentsCommon: { setActiveTournamentId }, uiCommon: { setModal }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = () => {
        setActiveTournamentId(tournamentId);
        setModal({
            modalName: 'tournamentsInfo',
            render: true,
            delayOpen: delayOpen,
            delayClose: delayClose,
        });
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ title: t('COMMON.DETAILS') })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) }));
}
const TournamentsListButton = _TournamentsListButton;

;// ./src/framework/components/TournamentsListButton/index.tsx


;// ./src/framework/components/TournamentsStatus/TournamentsStatus.tsx



function _TournamentsStatus({ children }) {
    const { tournamentsCommon: { tournaments, labelTournament }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            isActive: tournaments.length > 0,
            hasActiveTournament: (() => {
                if (!labelTournament.tournament)
                    return false;
                if (new Date(labelTournament.tournament.endAt).getTime() <= Date.now())
                    return false;
                return true;
            })(),
        }) }));
}
const TournamentsStatus = (0,index_js_.observer)(_TournamentsStatus);

;// ./src/framework/components/TournamentsStatus/index.tsx


;// ./src/framework/components/Tournaments/Tournaments.tsx












function _Tournaments({ children }) {
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const Tournaments = Object.assign(_Tournaments, {
    Status: TournamentsStatus,
    Label: TournamentsLabel,
    Info: Object.assign(TournamentsInfo, {
        Rule: TournamentsInfoRule,
        Prize: TournamentsInfoPrize,
        Leaderbords: TournamentsInfoLeaderbords,
        Winners: TournamentsInfoWinners,
        Tab: Object.assign(TournamentsInfoTab, {
            Item: TournamentsInfoTabItem,
        }),
    }),
    List: Object.assign(TournamentsList, {
        Button: TournamentsListButton,
    }),
});

;// ./src/framework/components/Tournaments/index.tsx



/***/ })

}]);