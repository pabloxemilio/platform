"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[1204,2302],{

/***/ 1204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* reexport */ Header)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
;// ./src/framework/components/HeaderBack/HeaderBack.tsx


function _HeaderBack({ children, onClick = () => { }, style }) {
    const urlParams = new URLSearchParams(window.location.search);
    const returnUrl = urlParams.get('returnUrl') || urlParams.get('iframeReturnUrl');
    const handleOnClick = () => {
        onClick();
        if (returnUrl && isValidUrl(returnUrl)) {
            window.location.href = returnUrl;
            return;
        }
        window.history.back();
    };
    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        }
        catch (err) {
            return false;
        }
    }
    if (returnUrl && returnUrl === 'hidden')
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleOnClick, style })) });
}
const HeaderBack = _HeaderBack;

;// ./src/framework/components/HeaderBack/index.tsx


;// ./src/framework/components/HeaderLogo/HeaderLogo.tsx

function _HeaderLogo({ children }) {
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const HeaderLogo = _HeaderLogo;

;// ./src/framework/components/HeaderLogo/index.tsx


// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
;// ./src/framework/helpers/getDecimalPlaces.ts
function getDecimalPlaces(num) {
    if (num >= 1)
        return 0;
    const str = num.toString();
    const match = str.match(/\.(\d+)/);
    return match ? match[1].replace(/0+$/, '').length : 0;
}

;// ./src/framework/components/HeaderBalance/HeaderBalance.tsx








function roundToDecimalPlaces(num, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
}
const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];
const SI_VALUES = [1, 1000, 1000000, 1e9, 1e12, 1e15, 1e18];
function formatBalance(balance, minBet) {
    const trimZeros = (str) => {
        return str
            .replace(/(\.\d*?[1-9])0+$/, '$1')
            .replace(/\.0+$/, '');
    };
    let displayValue = trimZeros(balance.toFixed(10));
    if (displayValue.length <= 8) {
        return { displayValue, needScaling: false };
    }
    const minBetDecimals = getDecimalPlaces(minBet);
    let roundedBalance;
    if (minBet >= 1) {
        if (minBet === 1) {
            roundedBalance = Math.round(balance);
        }
        else {
            roundedBalance = Math.floor(balance);
        }
        displayValue = roundedBalance.toString();
    }
    else {
        roundedBalance = Math.round(balance / minBet) * minBet;
        if (roundedBalance > balance && (roundedBalance - balance) >= minBet / 2) {
            roundedBalance = Math.floor(balance / minBet) * minBet;
        }
        displayValue = trimZeros(roundedBalance.toFixed(minBetDecimals));
    }
    if (displayValue.length <= 8) {
        return { displayValue, needScaling: false };
    }
    for (let tier = SI_SYMBOL.length - 1; tier >= 1; tier--) {
        const scaleValue = SI_VALUES[tier];
        if (minBet >= scaleValue) {
            if (Math.abs(roundedBalance) >= scaleValue) {
                const scaled = Math.floor(roundedBalance / scaleValue);
                const shortened = `${scaled}${SI_SYMBOL[tier]}`;
                if (shortened.length <= 8) {
                    return { displayValue: shortened, needScaling: false };
                }
            }
        }
    }
    if (displayValue.length <= 13) {
        return { displayValue, needScaling: true };
    }
    const absNumber = Math.abs(roundedBalance);
    let tier = Math.floor(Math.log10(absNumber) / 3);
    tier = Math.max(1, Math.min(tier, SI_SYMBOL.length - 1));
    const scale = SI_VALUES[tier];
    const scaled = roundedBalance / scale;
    for (let decimals = 2; decimals >= 0; decimals--) {
        const formatted = trimZeros(scaled.toFixed(decimals));
        const result = `${formatted}${SI_SYMBOL[tier]}`;
        if (result.length <= 13) {
            return { displayValue: result, needScaling: true };
        }
    }
    return { displayValue: `${Math.floor(scaled)}${SI_SYMBOL[tier]}`, needScaling: true };
}
function _HeaderBalance({ children, style }) {
    const { profileCommon: { profile: { balanceLoad, balance, currencySign, rounding }, limit: { minBet } }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [hide, setHide] = (0,hooks_module_js_.useState)(false);
    const [difference, setDifference] = (0,hooks_module_js_.useState)(false);
    const [differenceList, setDifferenceList] = (0,hooks_module_js_.useState)([]);
    const balancePrev = (0,hooks_module_js_.useRef)(balance);
    (0,hooks_module_js_.useLayoutEffect)(() => {
        if (!balanceLoad)
            return;
        const diff = roundToDecimalPlaces(balance - balancePrev.current, 2);
        const value = diff > 0 ? `+${(0,shortNumber/* default */.A)(diff, rounding)}` : undefined;
        setDifference(value !== undefined);
        balancePrev.current = balance;
        if (!value)
            return;
        const list = [...differenceList, { value: value, key: Math.random() }].slice(-10);
        setDifferenceList(list);
    }, [balance]);
    const handleClick = (e) => {
        setHide(!hide);
    };
    const balanceFormatted = formatBalance(balance, minBet || 1);
    const balanceShort = () => {
        if (hide) {
            return balanceFormatted.displayValue.replace(/./g, '*');
        }
        return balanceFormatted.displayValue;
    };
    const computedCurrencySign = () => {
        const currency = currencySign || '';
        const space = currencySign.length > 1 ? ' ' : '';
        if (hide) {
            return `${currency.replace(/./g, '*')}${space}`;
        }
        return `${currency}${space}`;
    };
    if (!balanceLoad && !balance && !currencySign?.length)
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            title: t('COMMON.BALANCE'),
            balance: hide ? String(balance).replace(/./g, '*') : String(balance),
            balanceShort: balanceShort(),
            balanceHide: hide,
            balanceNeedScaling: balanceFormatted.needScaling,
            currencySign: computedCurrencySign(),
            difference,
            differenceList,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            style,
        })) }));
}
const HeaderBalance = (0,index_js_.observer)(_HeaderBalance);

;// ./src/framework/components/HeaderBalance/index.tsx


;// ./src/framework/components/HeaderBetAmount/HeaderBetAmount.tsx





function _HeaderBetAmount({ children }) {
    const { game: { amount }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: 'Total Bet',
            currencySign,
            amount,
            amountShort: (0,shortNumber/* default */.A)(Number(amount), rounding),
        }) }));
}
const HeaderBetAmount = (0,index_js_.observer)(_HeaderBetAmount);

;// ./src/framework/components/HeaderBetAmount/index.tsx


;// ./src/framework/components/HeaderNav/HeaderNav.tsx

function _HeaderNav({ children }) {
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const HeaderNav = _HeaderNav;

;// ./src/framework/components/HeaderNav/index.tsx


;// ./src/framework/components/HeaderNavButton/HeaderNavButton.tsx


function _HeaderNavButton({ children, onClick = () => { } }) {
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick })) });
}
const HeaderNavButton = _HeaderNavButton;

;// ./src/framework/components/HeaderNavButton/index.tsx


;// ./src/framework/components/HeaderNavButtonMusic/HeaderNavButtonMusic.tsx




function _HeaderNavButtonMusic({ children, onClick = () => { }, style }) {
    const { audioCommon: { setGlobalMuted, allMuted }, } = (0,bootstrap.GET_STORE)();
    const handleClick = () => {
        setGlobalMuted(!allMuted);
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ active: allMuted })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick, style })) }));
}
const HeaderNavButtonMusic = (0,index_js_.observer)(_HeaderNavButtonMusic);

;// ./src/framework/components/HeaderNavButtonMusic/index.tsx


;// ./src/framework/components/HeaderNavButtonSetting/HeaderNavButtonSetting.tsx




function _HeaderNavButtonSetting({ children, onClick = () => { }, delayOpen, delayClose, style }) {
    const { uiCommon: { setModal, modal }, } = (0,bootstrap.GET_STORE)();
    const handleClick = () => {
        setModal({
            modalName: 'setting',
            render: !modal['setting']?.render,
            delayOpen,
            delayClose,
        });
        onClick();
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick, style })) });
}
const HeaderNavButtonSetting = (0,index_js_.observer)(_HeaderNavButtonSetting);

;// ./src/framework/components/HeaderNavButtonSetting/index.tsx


;// ./src/framework/components/HeaderNavButtonFullScreen/HeaderNavButtonFullScreen.tsx





function _HeaderNavButtonFullScreen({ children, onClick = () => { }, style, forceActive }) {
    return null;
    // removed by dead control flow

    // removed by dead control flow

    function toggleFullScreen(value) {
        var doc = window.document;
        var docEl = doc.documentElement;
        var requestFullScreen = docEl.requestFullscreen ||
            docEl.mozRequestFullScreen ||
            docEl.webkitRequestFullScreen ||
            docEl.msRequestFullscreen;
        var exitFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        if (value) {
            if (requestFullScreen) {
                requestFullScreen.call(docEl);
                setFullScreen(true);
            }
        }
        else {
            if (exitFullScreen) {
                exitFullScreen.call(doc);
                setFullScreen(false);
            }
        }
    }
    // removed by dead control flow

    // removed by dead control flow

    // removed by dead control flow

    // removed by dead control flow

    // removed by dead control flow

    // removed by dead control flow

}
const HeaderNavButtonFullScreen = (0,index_js_.observer)(_HeaderNavButtonFullScreen);

;// ./src/framework/components/HeaderNavButtonFullScreen/index.tsx


;// ./src/framework/components/HeaderNavButtonQuickMode/HeaderNavButtonQuickMode.tsx




function _HeaderNavButtonQuickMode({ children, onClick = () => { }, style }) {
    const { quickModeCommon: { enabled, setEnabled }, } = (0,bootstrap.GET_STORE)();
    const handleClick = () => {
        setEnabled(!enabled);
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ active: enabled })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick, style })) }));
}
const HeaderNavButtonQuickMode = (0,index_js_.observer)(_HeaderNavButtonQuickMode);

;// ./src/framework/components/HeaderNavButtonQuickMode/index.tsx


;// ./src/framework/components/HeaderNavButtonUniverse/HeaderNavButtonUniverse.tsx




function _HeaderNavButtonUniverse({ children, onClick = () => { }, delayOpen, delayClose, style }) {
    const { uiCommon: { setModal, modal }, profileCommon: { profile: { storiesNew }, settings: { options }, }, } = (0,bootstrap.GET_STORE)();
    const handleClick = () => {
        setModal({
            modalName: 'setting',
            render: !modal['setting']?.render,
            delayOpen,
            delayClose,
            data: {
                page: 'turbouniverse',
            },
            noTracking: true,
        });
        onClick();
    };
    if (options?.displayUniverse === false)
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ storiesNew })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick, style })) }));
}
const HeaderNavButtonUniverse = (0,index_js_.observer)(_HeaderNavButtonUniverse);

;// ./src/framework/components/HeaderNavButtonUniverse/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
;// ./src/framework/components/HeaderNavButtonGuide/HeaderNavButtonGuide.tsx








function _HeaderNavButtonGuide({ children, onClick = () => { }, delayOpen, delayClose, style }) {
    const { uiCommon: { setModal, modal, guideShown, setGuideShown }, profileCommon: { settings: { options }, }, } = (0,bootstrap.GET_STORE)();
    const config = (0,bootstrap.GET_GAME_CONFIG)();
    (0,hooks_module_js_.useEffect)(() => {
        if (config.guide?.guideVariant === 'aggressive' && !localStorageHelper/* default */.A.get('guideIsShown')) {
            setModal({
                modalName: 'setting',
                render: !modal['setting']?.render,
                delayOpen,
                delayClose,
                data: {
                    page: 'guide',
                },
                noTracking: true,
            });
            setGuideShown(true);
        }
        else if (config.guide?.guideVariant === 'passive') {
            setGuideShown(true);
        }
    }, []);
    const handleClick = () => {
        if (config.guide?.guideVariant !== 'custom') {
            setModal({
                modalName: 'setting',
                render: !modal['setting']?.render,
                delayOpen,
                delayClose,
                data: {
                    page: options?.showHTPInstant ? 'rules' : 'guide',
                },
                noTracking: true,
                callbackOnClose: () => {
                    (0,gtmDataLayerPush/* default */.A)({
                        action: 'element_view',
                        parameters: {
                            object: 'guide',
                            state: false,
                        },
                    });
                },
            });
            (0,gtmDataLayerPush/* default */.A)({
                action: 'element_view',
                parameters: {
                    object: 'guide',
                    state: true,
                },
            });
        }
        setGuideShown(!guideShown);
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ guideShown })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick, style })) }));
}
const HeaderNavButtonGuide = (0,index_js_.observer)(_HeaderNavButtonGuide);

;// ./src/framework/components/HeaderNavButtonGuide/index.tsx


;// ./src/framework/components/Header/Header.tsx













function _Header({ children }) {
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const Header = Object.assign(_Header, {
    Back: HeaderBack,
    Logo: HeaderLogo,
    Balance: HeaderBalance,
    BetAmount: HeaderBetAmount,
    Nav: Object.assign(HeaderNav, {
        Button: Object.assign(HeaderNavButton, {
            Music: HeaderNavButtonMusic,
            Setting: HeaderNavButtonSetting,
            FullScreen: HeaderNavButtonFullScreen,
            QuickMode: HeaderNavButtonQuickMode,
            Universe: HeaderNavButtonUniverse,
            Guide: HeaderNavButtonGuide,
        }),
    }),
});

;// ./src/framework/components/Header/index.tsx



/***/ }),

/***/ 82302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   I: () => (/* binding */ shortNumber)
/* harmony export */ });
const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B', 'N', 'D', 'H', 'O'];
const smartRound = (num, digits) => {
    const factor = Math.pow(10, digits);
    return Math.round(num * factor) / factor;
};
const trimTrailingZeros = (str) => {
    return str
        .replace(/(\.\d*?[1-9])0+$/, '$1')
        .replace(/\.0+$/, '')
        .replace(/\.?$/, '');
};
function shortNumber(number = 0, trunc = 2, roundFromLength = 8) {
    const fullStr = number.toFixed(trunc);
    if (fullStr.length <= roundFromLength) {
        return fullStr;
    }
    const absNumber = Math.abs(number);
    let tier = Math.floor(Math.log10(absNumber) / 3);
    tier = Math.min(tier, SI_SYMBOL.length - 1);
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;
    const rounded = smartRound(scaled, trunc);
    let roundedStr = rounded.toFixed(trunc);
    roundedStr = trimTrailingZeros(roundedStr);
    return `${roundedStr}${SI_SYMBOL[tier]}`;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shortNumber);


/***/ })

}]);