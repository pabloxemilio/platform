"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[7865],{

/***/ 70757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* reexport */ Alert),
  o: () => (/* reexport */ Context)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js
var compat_module = __webpack_require__(17402);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
;// ./src/framework/components/AlertMessage/AlertMessage.tsx



function _AlertMessage({ children }) {
    const { message } = (0,hooks_module_js_.useContext)(Context);
    if (!message)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(message) });
}
const AlertMessage = _AlertMessage;

;// ./src/framework/components/AlertMessage/index.tsx


;// ./src/framework/components/Alert/Alert.tsx








const Context = (0,preact_module_js_.createContext)({});
function _Alert({ children, time = 3000, delayOpen = 0, delayClose = 0 }) {
    const { uiCommon: { alertList, removeFirstItemAlertList, postMessage, setAlertList }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [message, setMessage] = (0,hooks_module_js_.useState)();
    const container = document.getElementById('modal');
    (0,hooks_module_js_.useEffect)(() => {
        if (postMessage?.data?.type === 'setAlertList') {
            setAlertList(postMessage.data?.data);
        }
    }, [postMessage]);
    (0,hooks_module_js_.useEffect)(() => {
        if (alertList.length === 0 && message?.sticky) {
            setMessage({ ...message, sticky: false, open: false, close: true });
            setTimeout(() => {
                message?.callback && message.callback();
                setMessage(undefined);
                container.classList.remove('layout-alert');
            }, delayClose);
            return;
        }
        if (message)
            return;
        if (alertList.length === 0)
            return;
        const isSticky = alertList.filter((alert) => alert.sticky);
        if (isSticky.length > 0) {
            const createMessage = {
                ...isSticky[0],
                title: t(isSticky[0].title || ''),
                text: t(isSticky[0].text || ''),
                open: false,
                close: false,
            };
            setMessage(createMessage);
            setTimeout(() => {
                setMessage({ ...createMessage, open: true });
                container.classList.add('layout-alert');
            }, delayOpen);
            return;
        }
        const firstMessage = alertList[0];
        const createMessage = {
            ...firstMessage,
            title: t(firstMessage?.title || ''),
            text: t(firstMessage?.text || ''),
            open: false,
            close: false,
        };
        const duration = firstMessage?.duration || time;
        setMessage(createMessage);
        setTimeout(() => {
            setMessage({ ...createMessage, open: true });
            container.classList.add('layout-alert');
        }, delayOpen);
        setTimeout(() => {
            setMessage({ ...createMessage, open: false, close: true });
            container.classList.remove('layout-alert');
        }, duration + delayOpen);
        setTimeout(() => {
            createMessage?.callback && createMessage.callback();
            removeFirstItemAlertList();
            setMessage(undefined);
            container.classList.remove('layout-alert');
        }, duration + delayOpen + delayClose);
    }, [alertList, message]);
    return (0,compat_module.createPortal)((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: { message }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children }) }), container);
}
const Alert = Object.assign((0,index_js_.observer)(_Alert), {
    Message: AlertMessage,
});

;// ./src/framework/components/Alert/index.tsx



/***/ }),

/***/ 76060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* reexport */ ExitGame)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: ./src/bootstrap/STORE.ts
var STORE = __webpack_require__(38716);
;// ./src/framework/components/ExitGameExit/ExitGameExit.tsx




function _ExitGameExit({ children, onClick = () => { } }) {
    const { t } = (0,index_js_.useTranslation)();
    const { uiCommon: { postMessageToParent } } = (0,STORE/* GET_STORE */.D)();
    const urlParams = new URLSearchParams(window.location.search);
    const returnUrl = urlParams.get('returnUrl') || urlParams.get('iframeReturnUrl');
    const handleOnClick = () => {
        postMessageToParent('exit');
        onClick();
        if (returnUrl && isValidUrl(returnUrl)) {
            const link = document.createElement('a');
            link.href = returnUrl;
            if (urlParams.get('returnUrl')) {
                link.target = '_top';
            }
            document.body.appendChild(link);
            link.click();
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
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ title: t('COMMON.EXITGAME_EXIT') })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleOnClick })) }));
}
const ExitGameExit = _ExitGameExit;

;// ./src/framework/components/ExitGameExit/index.tsx


;// ./src/framework/components/ExitGame/ExitGame.tsx



function _ExitGame({ children }) {
    const { t } = (0,index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.EXITGAME'),
            titleYes: t('COMMON.YES'),
            titleNo: t('COMMON.NO'),
            description: t('COMMON.EXITGAME_DESCRIPTION'),
        }) }));
}
const ExitGame = Object.assign(_ExitGame, {
    Exit: ExitGameExit,
});

;// ./src/framework/components/ExitGame/index.tsx



/***/ }),

/***/ 57157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* reexport */ Freebets)
});

// UNUSED EXPORTS: Context

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
;// ./src/framework/components/FreebetsItem/FreebetsItem.tsx




function _FreebetsItem({ children, index, onClick = () => { } }) {
    const { uiCommon: { setModal }, freebetsCommon: { updateFreebetsData, freebetsActive, forcedDisabledFreebets, onFreebetChange }, } = (0,bootstrap.GET_STORE)();
    const handleOnClick = () => {
        const id = freebetsActive[index]?.id;
        if (!id)
            return;
        if (onFreebetChange?.showConfirm) {
            setModal({
                modalName: 'freebetsChangeConfirm',
                render: true,
                delayOpen: 0,
                delayClose: 200,
                data: onFreebetChange.additionalText,
                callbackOnSubmit: () => {
                    onFreebetChange.callback();
                    updateFreebetsData({
                        enabled: true,
                        id,
                        time: undefined,
                    });
                },
            });
        }
        else {
            updateFreebetsData({
                enabled: true,
                id,
                time: undefined,
            });
        }
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ disabled: forcedDisabledFreebets })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleOnClick,
        })) }));
}
const FreebetsItem = (0,index_js_.observer)(_FreebetsItem);

;// ./src/framework/components/FreebetsItem/index.ts


;// ./src/framework/components/FreebetsLabel/FreebetsLabel.tsx





function _FreebetsLabel({ children, onClick = () => { }, delayOpen, delayClose, style }) {
    const { freebetsCommon: { freebetActive }, uiCommon: { setModal }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    if (!freebetActive)
        return null;
    const handleOnClick = () => {
        setModal({
            modalName: 'freebets',
            render: true,
            delayOpen,
            delayClose,
        });
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            title: 'FREE BETS',
            left: freebetActive?.left,
            description: t('FREEBETS.NOTIF')
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleOnClick,
            style,
        })) }));
}
const FreebetsLabel = (0,index_js_.observer)(_FreebetsLabel);

;// ./src/framework/components/FreebetsLabel/index.ts


;// ./src/framework/components/FreebetsEnabled/FreebetsEnabled.tsx





function _FreebetsEnabled({ children, confirmation = true, delayOpen, delayClose }) {
    const { uiCommon: { setModal }, freebetsCommon: { freebetsData, updateFreebetsData, freebetsActive, forcedDisabledFreebets, isGameInProgress }, } = (0,bootstrap.GET_STORE)();
    const [showTooltip, setShowTooltip] = (0,hooks_module_js_.useState)(false);
    const { t } = (0,es_index_js_.useTranslation)();
    const handleOnChange = (value) => {
        if (forcedDisabledFreebets)
            return null;
        if (confirmation && !value) {
            setModal({
                modalName: 'freebetsConfirmation',
                render: true,
                delayOpen,
                delayClose,
                callbackOnSubmit: () => {
                    updateFreebetsData({
                        enabled: false,
                        id: undefined,
                        time: Date.now() + 1000 * 60 * 60 * 24,
                    });
                },
            });
            return;
        }
        if (!confirmation && !value) {
            updateFreebetsData({
                enabled: false,
                id: undefined,
                time: Date.now() + 1000 * 60 * 60 * 24,
            });
            return;
        }
        updateFreebetsData({
            enabled: true,
            id: freebetsActive[0]?.id,
            time: undefined,
        });
    };
    if (!freebetsActive.length)
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('FREEBETS.REAL_MONEY'),
            tooltipText: t('FREEBETS.FINISH_ROUND'),
            titleConfirmation: t('FREEBETS.CANCEL'),
            titleLoseProgress: isGameInProgress ? t('FREEBETS.LOSE_PROGRESS') : null,
            titleConfirmationYes: t('COMMON.YES'),
            titleConfirmationNo: t('COMMON.NO'),
            defaultValue: forcedDisabledFreebets ? false : freebetsData.enabled,
            onChange: handleOnChange,
            onMouseEnter: () => forcedDisabledFreebets && setShowTooltip(true),
            onMouseLeave: () => setShowTooltip(false),
            disabled: forcedDisabledFreebets,
            showTooltip,
        }) }));
}
const FreebetsEnabled = (0,index_js_.observer)(_FreebetsEnabled);

;// ./src/framework/components/FreebetsEnabled/index.ts


// EXTERNAL MODULE: ./src/framework/helpers/shortNumberFloored.ts
var shortNumberFloored = __webpack_require__(61683);
;// ./src/framework/components/FreebetsCompleted/FreebetsCompleted.tsx





function _FreebetsCompleted({ children }) {
    const { freebetsCommon: { freebetCompleted }, profileCommon: { profile: { currencySign, rounding }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    if (!freebetCompleted)
        return null;
    if (!freebetCompleted?.payout[0]?.payout)
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            titleCongratulations: t('COMMON.CONGRATULATIONS'),
            titlePayout: t('FREEBETS.TOTAL_GAIN'),
            titleTotal: t('FREEBETS.PLAYED'),
            total: freebetCompleted?.total - freebetCompleted?.left || 0,
            currency: currencySign,
            payout: (0,shortNumberFloored/* default */.A)(freebetCompleted?.payout[0]?.payout || 0, rounding),
        }) }));
}
const FreebetsCompleted = (0,index_js_.observer)(_FreebetsCompleted);

;// ./src/framework/components/FreebetsCompleted/index.ts


;// ./src/framework/components/FreebetsStatus/FreebetsStatus.tsx



function _FreebetsStatus({ children }) {
    const { profileCommon: { profile: { freebetsVerified }, }, freebetsCommon: { freebetActive }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            isActive: freebetsVerified,
            hasActiveFreebets: Boolean(freebetActive),
        }) }));
}
const FreebetsStatus = (0,index_js_.observer)(_FreebetsStatus);

;// ./src/framework/components/FreebetsStatus/index.ts


;// ./src/framework/components/FreebetsTooltipMinCoefficient/FreebetsTooltipMinCoefficient.tsx





function _FreebetsTooltipMinCoefficient({ children, style }) {
    const { freebetsCommon: { freebetActive, freebetsSuccessIndexList, listGetByIndex }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const freebet = listGetByIndex(0);
    if (!freebetActive && !freebet?.freebetActive)
        return null;
    const coefficient = freebetActive?.offer?.configuration[0]?.minCoefficient ||
        freebet?.freebetActive?.offer?.configuration[0]?.minCoefficient;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            coefficient,
            title: t('CHICKENROUTE.FREE_BET.TOOLTIP', {
                amount: `x${coefficient}`,
            }),
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            style,
        })) }));
}
const FreebetsTooltipMinCoefficient = (0,index_js_.observer)(_FreebetsTooltipMinCoefficient);

;// ./src/framework/components/FreebetsTooltipMinCoefficient/index.ts


// EXTERNAL MODULE: ./src/framework/helpers/ratesConverter.ts
var ratesConverter = __webpack_require__(37288);
;// ./src/framework/helpers/calculateFreebetsPayout.ts

function calculateFreebetsPayout(payout, currency, rates) {
    return payout.reduce((acc, item) => {
        if (item.currency === currency) {
            acc += item.payout;
        }
        else {
            acc += (0,ratesConverter/* default */.A)(rates, item.currency, currency, item.payout);
        }
        return acc;
    }, 0);
}

// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
;// ./src/framework/components/Freebets/Freebets.tsx














const Context = (0,preact_module_js_.createContext)({});
function _Freebets({ children }) {
    const { profileCommon: { rates, profile: { currencySign, currency, rounding }, }, freebetsCommon: { loading, freebets, freebetsData, freebetsActive, freebetsArchived, updateFreebetsArchiveEndTime }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [listActive, setListActive] = (0,hooks_module_js_.useState)([]);
    const [listArchived, setListArchived] = (0,hooks_module_js_.useState)([]);
    (0,hooks_module_js_.useEffect)(() => {
        const computed = (item) => ({
            title: t('COMMON.FREEBETS'),
            titleAmount: t('COMMON.BET_AMOUNT'),
            titlePayout: t('FREEBETS.TOTAL_GAIN'),
            titleArchived: t('COMMON.ARCHIVE'),
            titleExpires: t('COMMON.EXPIRES_IN'),
            isActive: item.id === (freebetsData.id || 0),
            isFinished: item.archived,
            currency: currencySign,
            amount: (0,shortNumber/* default */.A)(item.offer.configuration[0].betAmount, rounding),
            payout: (0,shortNumber/* default */.A)(calculateFreebetsPayout(item.payout, currency, rates), rounding),
            timer: {
                countdownDate: item.offer.endAt,
                step: 1000,
                callback: () => {
                    updateFreebetsArchiveEndTime(item.id);
                },
            },
            total: item.total,
            left: item.left,
            leftAndTotal: (() => {
                let result = `${item.left}/${item.total}`;
                if (item.archived && item.left === 0)
                    result = `${item.total}`;
                if (item.archived && item.left === item.total)
                    result = `${item.total}`;
                return result;
            })(),
        });
        const listActive = freebetsActive.map(computed);
        const listArchived = freebetsArchived.map(computed);
        setListActive(listActive);
        setListArchived(listArchived);
    }, [freebets, freebetsData]);
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: { listActive, listArchived }, children: children({
            title: t('COMMON.FREEBETS'),
            titleNotFound: t('COMMON.NOTHING'),
            titleFreebetsFinished: t('COMMON.ARCHIVE'),
            notFound: freebets.length === 0,
            loading,
            listActive,
            listArchived,
            activeTotal: listActive.length > 0 ? listActive.length : null,
        }) }));
}
const Freebets = Object.assign((0,index_js_.observer)(_Freebets), {
    Status: FreebetsStatus,
    Label: FreebetsLabel,
    Enabled: FreebetsEnabled,
    Item: FreebetsItem,
    Completed: FreebetsCompleted,
    TooltipMinCoefficient: FreebetsTooltipMinCoefficient,
});

;// ./src/framework/components/Freebets/index.ts



/***/ }),

/***/ 27243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* reexport */ GameDisabled)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var index_js_ = __webpack_require__(33204);
;// ./src/framework/components/GameDisabled/GameDisabled.tsx


function _GameDisabled({ children }) {
    const { t } = (0,index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.GAME_DISABLED.TITLE'),
            titleRefresh: t('COMMON.REFRESH'),
            titleBack: t('COMMON.BACK'),
            description: t('COMMON.GAME_DISABLED.TEXT'),
        }) }));
}
const GameDisabled = _GameDisabled;

;// ./src/framework/components/GameDisabled/index.tsx



/***/ }),

/***/ 25258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* reexport */ Context),
  c: () => (/* reexport */ InputName)
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
// EXTERNAL MODULE: consume shared module (default) uuid@^9.0.0 (strict) (fallback: ./node_modules/uuid/dist/esm-browser/index.js)
var esm_browser_index_js_ = __webpack_require__(81682);
;// ./src/framework/components/InputNameInput/InputNameInput.tsx




function _InputNameInput({ children, onChange = () => { }, onClick = () => { }, onFocus = () => { }, onBlur = () => { }, }) {
    const { setValue, setFocus, readonly, getValue, isFocus, id } = (0,hooks_module_js_.useContext)(Context);
    const childrenRef = (0,hooks_module_js_.useRef)();
    const handleFocus = (e) => {
        setFocus(true);
        onFocus();
    };
    const handleBlur = (e) => {
        setFocus(false);
        onBlur();
    };
    const handleChange = (e) => {
        if (e.target instanceof HTMLInputElement)
            setValue(e.target.value);
        onChange();
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (isFocus && childrenRef.current) {
            childrenRef.current.click();
            childrenRef.current.focus();
        }
        if (!isFocus && childrenRef.current)
            childrenRef.current.blur();
    }, [isFocus]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick,
            onFocus: handleFocus,
            onChange: handleChange,
            onBlur: handleBlur,
            readonly,
            value: getValue(),
            id,
            ref: (node) => {
                if (node instanceof HTMLElement)
                    childrenRef.current = node;
            },
        })) }));
}
const InputNameInput = _InputNameInput;

;// ./src/framework/components/InputNameInput/index.tsx


;// ./src/framework/components/InputNameSave/InputNameSave.tsx





function _InputNameSave({ children, onClick = () => { } }) {
    const { profileCommon: { setPlayerName }, } = (0,bootstrap.GET_STORE)();
    const { save, setSave, getValue, readonly } = (0,hooks_module_js_.useContext)(Context);
    const handleClick = async () => {
        if (readonly)
            return;
        try {
            await setPlayerName(getValue());
            setSave(false);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            onClick();
        }
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const InputNameSave = _InputNameSave;

;// ./src/framework/components/InputNameSave/index.tsx


;// ./src/framework/components/InputNameLabel/InputNameLabel.tsx




function _InputNameLabel({ children }) {
    const { id } = (0,hooks_module_js_.useContext)(Context);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            for: id,
        })) }));
}
const InputNameLabel = _InputNameLabel;

;// ./src/framework/components/InputNameLabel/index.tsx


;// ./src/framework/components/InputName/InputName.tsx










const Context = (0,preact_module_js_.createContext)({});
function _InputName({ children, min = 3, max = 32, readonly = false, isFocus = false }) {
    const { profileCommon: { profile: { name }, }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const [id] = (0,hooks_module_js_.useState)((0,esm_browser_index_js_.v4)());
    const [value, setValue] = (0,hooks_module_js_.useState)(name);
    const [error, setError] = (0,hooks_module_js_.useState)('');
    const [focus, setFocus] = (0,hooks_module_js_.useState)(false);
    const [save, setSave] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useEffect)(() => {
        setValue(name);
    }, [name]);
    (0,hooks_module_js_.useEffect)(() => {
        const error = t('COMMON.NICKNAME_VALIDATION');
        if (/[^\u0000-\u007f]№/.test(value) ||
            /[^\w\s!#№;%:?*()-=]/g.test(value) ||
            value.length > max ||
            value.length < min) {
            setError(error);
            setSave(false);
            return;
        }
        if (name !== getValue()) {
            setSave(true);
        }
        else {
            setSave(false);
        }
        setError('');
    }, [value]);
    const getValue = () => {
        return value.slice(0, max);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: { setValue, setFocus, setSave, getValue, save, readonly, isFocus, id }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
                title: t('COMMON.NICKNAME'),
                error,
                focus,
                save,
                value: getValue(),
            }) }) }));
}
const InputName = Object.assign((0,index_js_.observer)(_InputName), {
    Input: InputNameInput,
    Label: InputNameLabel,
    Save: InputNameSave,
});

;// ./src/framework/components/InputName/index.tsx



/***/ }),

/***/ 23660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* reexport */ Context),
  Q: () => (/* reexport */ InputRange)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: consume shared module (default) uuid@^9.0.0 (strict) (fallback: ./node_modules/uuid/dist/esm-browser/index.js)
var index_js_ = __webpack_require__(81682);
;// ./src/framework/components/InputRangeInput/InputRangeInput.tsx





function _InputRangeInput({ children, onChange = () => { }, onClick = () => { }, onFocus = () => { }, onBlur = () => { }, }) {
    const [id] = (0,hooks_module_js_.useState)('a' + (0,index_js_.v4)());
    const { value, onChangeContext, onBlurContext, min, max, step, minStatic, maxStatic, centerSize, vertical, rangeSize, } = (0,hooks_module_js_.useContext)(Context);
    const handleClick = (e) => {
        onClick(e);
    };
    const handleFocus = (e) => {
        onFocus(e);
    };
    const handleBlur = (e) => {
        if (e.target instanceof HTMLInputElement) {
            let value = Number(e.target.value);
            if (typeof minStatic === 'number' && value <= minStatic) {
                value = minStatic;
                e.target.value = String(minStatic);
            }
            if (typeof maxStatic === 'number' && value >= maxStatic) {
                value = maxStatic;
                e.target.value = String(maxStatic);
            }
            onBlurContext(Number(value));
            onBlur(e);
        }
    };
    const handleChange = (e) => {
        if (e.target instanceof HTMLInputElement) {
            let value = Number(e.target.value);
            let isChange = true;
            if (typeof minStatic === 'number' && value <= minStatic) {
                value = minStatic;
                e.target.value = String(minStatic);
                isChange = false;
            }
            if (typeof maxStatic === 'number' && value >= maxStatic) {
                value = maxStatic;
                e.target.value = String(maxStatic);
                isChange = false;
            }
            onChangeContext(Number(value));
            if (isChange)
                onChange(e);
        }
    };
    const style = {
        webkitAppearance: 'none',
        appearance: 'none',
        position: 'absolute',
        width: `${rangeSize.width}px`,
        height: `${rangeSize.height}px`,
        opacity: 0,
        cursor: 'pointer',
        overflow: 'hidden',
        ...(vertical && { transform: 'rotate(-90deg)', width: `${rangeSize.height}px`, height: `${rangeSize.width}px` }),
    };
    return ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [(0,jsxRuntime_module/* jsx */.Y)("style", { children: `#${id}::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    height: 1000px;
                    width: ${vertical ? centerSize.height : centerSize.width}px;
                    background: red;
                }
                #${id}::-moz-range-thumb {
                    height: 1000px;
                    width: ${vertical ? centerSize.height : centerSize.width}px;
                    background: red;
                }
                #${id}::-ms-thumb {
                    height: 1000px;
                    width: ${vertical ? centerSize.height : centerSize.width}px;
                    background: red;
                }
                #${id} {
                    background: yellow;
                }` }), (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
                onClick: handleClick,
                onFocus: handleFocus,
                onChange: handleChange,
                onBlur: handleBlur,
                min,
                max,
                step,
                value,
                style,
                type: 'range',
                id,
            }))] }));
}
const InputRangeInput = _InputRangeInput;

;// ./src/framework/components/InputRangeInput/index.tsx


;// ./src/framework/components/InputRangeLeft/InputRangeLeft.tsx




function _InputRangeLeft({ children }) {
    const { value, max, min, vertical } = (0,hooks_module_js_.useContext)(Context);
    const percent = `${Math.min(100, ((value - min) / (max - min)) * 100)}%`;
    const style = {
        pointerEvents: 'none',
        ...(vertical ? { height: percent } : { width: percent }),
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            style,
        })) }));
}
const InputRangeLeft = _InputRangeLeft;

;// ./src/framework/components/InputRangeLeft/index.tsx


;// ./src/framework/components/InputRangeCenter/InputRangeCenter.tsx




function _InputRangeCenter({ children }) {
    const { setCenterSize } = (0,hooks_module_js_.useContext)(Context);
    const ref = (0,hooks_module_js_.useRef)();
    const style = {
        pointerEvents: 'none',
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (ref.current) {
            const resize = () => {
                if (ref.current)
                    setCenterSize({ width: ref.current.offsetWidth, height: ref.current.offsetHeight });
            };
            resize();
            window.addEventListener('resize', resize);
            return () => {
                window.removeEventListener('resize', resize);
            };
        }
    }, [ref.current]);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            style,
            ref: (node) => {
                if (node instanceof HTMLElement)
                    ref.current = node;
            },
        })) }));
}
const InputRangeCenter = _InputRangeCenter;

;// ./src/framework/components/InputRangeCenter/index.tsx


;// ./src/framework/components/InputRangeRight/InputRangeRight.tsx




function _InputRangeRight({ children }) {
    const { value, max, min, vertical } = (0,hooks_module_js_.useContext)(Context);
    const percent = `${Math.min(100, 100 - ((value - min) / (max - min)) * 100)}%`;
    const style = {
        pointerEvents: 'none',
        ...(vertical ? { height: percent } : { width: percent }),
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            style,
        })) }));
}
const InputRangeRight = _InputRangeRight;

;// ./src/framework/components/InputRangeRight/index.tsx


;// ./src/framework/components/InputRangeButtons/InputRangeButtons.tsx



const ContextButtons = (0,preact_module_js_.createContext)({});
function _InputRangeButtons({ children }) {
    const [buttons, setButtons] = (0,hooks_module_js_.useState)({});
    return ((0,jsxRuntime_module/* jsx */.Y)(ContextButtons.Provider, { value: { buttons, setButtons }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children }) }));
}
const InputRangeButtons = _InputRangeButtons;

;// ./src/framework/components/InputRangeButtons/index.tsx


;// ./src/framework/components/InputRangeButtonsMinus/InputRangeButtonsMinus.tsx




function _InputRangeButtonsMinus({ children, onClick = () => { } }) {
    const { buttons } = (0,hooks_module_js_.useContext)(ContextButtons);
    const { min, minStatic, stepButton, value, onChange } = buttons;
    const handleClick = (e) => {
        let v = value - stepButton;
        if (typeof minStatic === 'number' && v <= minStatic)
            v = minStatic;
        if (v >= min)
            onChange(v);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled: typeof minStatic === 'number' ? value <= minStatic : value <= min,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const InputRangeButtonsMinus = _InputRangeButtonsMinus;

;// ./src/framework/components/InputRangeButtonsMinus/index.tsx


;// ./src/framework/components/InputRangeButtonsPlus/InputRangeButtonsPlus.tsx




function _InputRangeButtonsPlus({ children, onClick = () => { } }) {
    const { buttons } = (0,hooks_module_js_.useContext)(ContextButtons);
    const { max, maxStatic, stepButton, value, onChange } = buttons;
    const handleClick = (e) => {
        let v = value + stepButton;
        if (typeof maxStatic === 'number' && v >= maxStatic)
            v = maxStatic;
        if (v <= max)
            onChange(v);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled: typeof maxStatic === 'number' ? value >= maxStatic : value >= max,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const InputRangeButtonsPlus = _InputRangeButtonsPlus;

;// ./src/framework/components/InputRangeButtonsPlus/index.tsx


// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var es_index_js_ = __webpack_require__(90);
;// ./src/framework/components/InputRangeMusic/InputRangeMusic.tsx



function _InputRangeMusic({ children, min = 0, max = 1, step = 0.1, onChange = () => { } }) {
    const { audioCommon: { allMuted, musicMuted, musicVolume, setMusicVolume, setMusicMuted }, } = (0,bootstrap.GET_STORE)();
    const handleChange = (value) => {
        if (value > 0) {
            setMusicMuted(false);
        }
        setMusicVolume(value);
        onChange(value);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            min,
            max,
            step,
            onChange: handleChange,
            defaultValue: allMuted || musicMuted ? 0 : musicVolume,
            disabled: musicVolume === 0 || musicMuted,
        }) }));
}
const InputRangeMusic = (0,es_index_js_.observer)(_InputRangeMusic);

;// ./src/framework/components/InputRangeMusic/index.tsx


;// ./src/framework/components/InputRangeSound/InputRangeSound.tsx



function _InputRangeSound({ children, min = 0, max = 1, step = 0.1, onChange = () => { } }) {
    const { audioCommon: { allMuted, soundMuted, soundVolume, setSoundVolume, setSoundMuted }, } = (0,bootstrap.GET_STORE)();
    const handleChange = (value) => {
        if (value > 0) {
            setSoundMuted(false);
        }
        setSoundVolume(value);
        onChange(value);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            min,
            max,
            step,
            onChange: handleChange,
            defaultValue: allMuted || soundMuted ? 0 : soundVolume,
            disabled: soundVolume === 0 || soundMuted,
        }) }));
}
const InputRangeSound = (0,es_index_js_.observer)(_InputRangeSound);

;// ./src/framework/components/InputRangeSound/index.tsx


;// ./src/framework/components/InputRange/InputRange.tsx













const Context = (0,preact_module_js_.createContext)({});
function _InputRange({ children, defaultValue = 0, min = 0, max = 100, step = 1, stepButton = 0.1, minStatic, maxStatic, onChange = () => { }, onBlur = () => { }, vertical = false, }) {
    const [id] = (0,hooks_module_js_.useState)((0,index_js_.v4)());
    const { setButtons } = (0,hooks_module_js_.useContext)(ContextButtons);
    const [centerSize, setCenterSize] = (0,hooks_module_js_.useState)({ width: 30, height: 30 });
    const [rangeSize, setRangeSize] = (0,hooks_module_js_.useState)({ width: 0, height: 0 });
    const childrenRef = (0,hooks_module_js_.useRef)(null);
    const style = {
        position: 'relative',
        display: 'flex',
    };
    (0,hooks_module_js_.useEffect)(() => {
        if (typeof setButtons === 'function')
            setButtons({
                min,
                max,
                minStatic,
                maxStatic,
                stepButton,
                value: defaultValue,
                onChange,
            });
    }, [defaultValue, min, max, minStatic, maxStatic, stepButton, onChange]);
    (0,hooks_module_js_.useEffect)(() => {
        updateRangeSize();
        window.addEventListener('resize', updateRangeSize);
        return () => {
            window.removeEventListener('resize', updateRangeSize);
        };
    }, []);
    const updateRangeSize = () => {
        setRangeSize(innerDimensions(document.getElementById(id)));
    };
    const innerDimensions = (node) => {
        var computedStyle = getComputedStyle(node);
        let width = node.clientWidth;
        let height = node.clientHeight;
        height -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
        width -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
        return { height, width };
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: {
            value: defaultValue,
            min,
            max,
            step,
            minStatic,
            maxStatic,
            onChangeContext: onChange,
            onBlurContext: onBlur,
            rangeSize,
            setCenterSize,
            centerSize,
            vertical,
        }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
                id,
                style,
                ref: (node) => {
                    if (node instanceof HTMLElement)
                        childrenRef.current = node;
                },
            })) }) }));
}
const InputRange = Object.assign(_InputRange, {
    Input: InputRangeInput,
    Left: InputRangeLeft,
    Center: InputRangeCenter,
    Right: InputRangeRight,
    Buttons: Object.assign(InputRangeButtons, {
        Minus: InputRangeButtonsMinus,
        Plus: InputRangeButtonsPlus,
    }),
    Music: InputRangeMusic,
    Sound: InputRangeSound,
});

;// ./src/framework/components/InputRange/index.tsx



/***/ }),

/***/ 34673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* reexport */ InputToggle)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
;// ./src/framework/components/InputToggle/InputToggle.tsx


function _InputToggle({ children, defaultValue = false, onChange = () => { }, onClick = () => { }, onMouseEnter = () => { }, onMouseLeave = () => { }, }) {
    const handleClick = () => {
        onChange(!defaultValue);
        onClick(!defaultValue);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ value: defaultValue })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
            onMouseEnter,
            onMouseLeave,
        })) }));
}
const InputToggle = _InputToggle;

;// ./src/framework/components/InputToggle/index.tsx



/***/ }),

/***/ 47852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: () => (/* reexport */ Limit)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
;// ./src/framework/components/Limit/Limit.tsx




function getMinBetValue(minBet, gameServerId) {
    const minBetMultipliers = {
        vortexaero: 3,
    };
    const multiplier = minBetMultipliers[gameServerId] ?? 1;
    return Number((minBet * multiplier).toFixed(2));
}
function _Limit({ children }) {
    const { profileCommon: { limit: { minBet, maxBet, maxWin }, profile: { currencySign }, }, game: { gameServerId, } } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const minBetValue = getMinBetValue(minBet, gameServerId);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.LIMITS'),
            min: {
                name: t('COMMON.MIN_BET'),
                value: currencySign + ' ' + minBetValue,
            },
            max: {
                name: t('COMMON.MAX_BET'),
                value: currencySign + ' ' + maxBet,
            },
            win: {
                name: t('COMMON.MAX_PROFIT'),
                value: currencySign + ' ' + maxWin,
            },
        }) }));
}
const Limit = (0,index_js_.observer)(_Limit);

;// ./src/framework/components/Limit/index.tsx



/***/ }),

/***/ 57865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* reexport */ Context),
  B: () => (/* reexport */ MyBets)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
// EXTERNAL MODULE: ./src/framework/components/MyBetsInfo/index.tsx + 1 modules
var MyBetsInfo = __webpack_require__(81272);
// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
// EXTERNAL MODULE: ./src/module/moduleSetting/ModuleSetting.tsx + 44 modules
var ModuleSetting = __webpack_require__(8610);
;// ./src/framework/components/MyBets/MyBets.tsx











const Context = (0,preact_module_js_.createContext)({});
function _MyBets({ children, columns = ['updatedAt', 'amount', 'coefficient', 'payout'], limit = 10, offset = 0, }) {
    const { profileCommon: { language, profile: { token, apiKey, currencySign, rounding }, }, uiCommon: { errorCodeResolver }, game: { gameServerId, mybets }, } = (0,bootstrap.GET_STORE)();
    if (!token || !apiKey)
        return null;
    const { t } = (0,es_index_js_.useTranslation)();
    const [bets, setBets] = (0,hooks_module_js_.useState)([]);
    const [betsFreebet, setBetsFreebet] = (0,hooks_module_js_.useState)([]);
    const [data, setData] = (0,hooks_module_js_.useState)([]);
    const [mutableData, setMutableData] = (0,hooks_module_js_.useState)([]);
    const [loading, setLoading] = (0,hooks_module_js_.useState)(false);
    const columnsTranslate = {
        updatedAt: t('COMMON.TIME'),
        amount: t('COMMON.BET_AMOUNT'),
        coefficient: t('COMMON.MULTIPLIER'),
        payout: t('COMMON.PAYOUT'),
        prefixAmount: t('COMMON.BET_AMOUNT'),
        prefixCoefficient: t('COMMON.MULTIPLIER'),
        prefixPayout: t('COMMON.PAYOUT'),
        amountSufix: t('COMMON.BET_AMOUNT'),
        coefficientSufix: t('COMMON.MULTIPLIER'),
        payoutSufix: t('COMMON.PAYOUT'),
    };
    const { config } = (0,hooks_module_js_.useContext)(ModuleSetting/* Context */.o);
    (0,hooks_module_js_.useEffect)(() => {
        const get = async () => {
            try {
                const { data } = await (0,api/* getMyBets */.vB)({
                    headers: { authorization: token, apiKey },
                    gameId: gameServerId,
                    limit,
                    offset,
                });
                setData(data);
                setMutableData(data);
                setLoading(true);
            }
            catch (error) {
                console.log('getMyBetsError', error);
                errorCodeResolver(error);
            }
        };
        get();
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        if (!loading && !mybets)
            return;
        const mutableData = [...mybets, ...data].slice(0, limit);
        setMutableData(mutableData);
    }, [mybets, limit]);
    (0,hooks_module_js_.useEffect)(() => {
        let bets = [];
        let betsFreebet = [];
        for (let i = 0; i < mutableData.length; i++) {
            const bet = mutableData[i];
            if (bet.freebets)
                betsFreebet.push(i);
            const row = {};
            const coefficient = bet.payoutCoefficient || bet.payoutCoefficient === 0 ? bet.payoutCoefficient : bet.coefficient;
            for (let list of columns) {
                if (list === 'updatedAt') {
                    row.updatedAt = new Intl.DateTimeFormat(language ? language.slice(0, 2) : 'en', {
                        hour: 'numeric',
                        minute: 'numeric',
                    }).format(new Date(bet['updatedAt']));
                }
                if (list === 'amount') {
                    row.amount = bet['freebets'] ? 'FREE BET' : (0,shortNumber/* default */.A)(bet['amount'], rounding);
                }
                if (list === 'payout') {
                    if (config?.module?.moduleSetting?.truncateDecimalsMybetsPayout) {
                        row.payout = (0,truncateDecimals/* default */.A)(bet.payout, rounding);
                    }
                    else {
                        row.payout = (0,shortNumber/* default */.A)(bet.payout, rounding);
                    }
                }
                if (list === 'coefficient') {
                    row.coefficient = coefficient ? coefficient.toFixed(2) : '-';
                }
                if (list === 'prefixAmount') {
                    row.prefixAmount = bet['freebets']
                        ? 'FREE BET'
                        : `${currencySign}${' '}${(0,shortNumber/* default */.A)(bet['amount'], rounding)}`;
                }
                if (list === 'prefixPayout') {
                    row.prefixPayout = `${currencySign}${' '}${(0,shortNumber/* default */.A)(bet.payout, rounding)}`;
                }
                if (list === 'prefixCoefficient') {
                    row.prefixCoefficient = coefficient ? 'x' + coefficient.toFixed(2) : '-';
                }
                if (list === 'amountSufix') {
                    row.amountSufix = bet['freebets']
                        ? 'FREE BET'
                        : `${(0,shortNumber/* default */.A)(bet['amount'], rounding)}${' '}${currencySign}`;
                }
                if (list === 'payoutSufix') {
                    row.payoutSufix = `${(0,shortNumber/* default */.A)(bet.payout, rounding)}${' '}${currencySign}`;
                }
                if (list === 'coefficientSufix') {
                    row.coefficientSufix = coefficient ? coefficient.toFixed(2) + 'x' : '-';
                }
            }
            bets.push(row);
        }
        setBets(bets.map((bet) => columns.map((item) => bet[item])));
        setBetsFreebet(betsFreebet);
    }, [mutableData]);
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: { data: mutableData }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
                title: t('COMMON.MY_BETS'),
                bets,
                betsFreebet,
                columns: columns.map((item) => columnsTranslate[item]),
                loading,
                data: mutableData,
            })).map((child) => (0,preact_module_js_.cloneElement)(child)) }) }));
}
const MyBets = Object.assign((0,index_js_.observer)(_MyBets), {
    Info: MyBetsInfo/* MyBetsInfo */.D,
});

;// ./src/framework/components/MyBets/index.tsx



/***/ }),

/***/ 81272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* reexport */ MyBetsInfo)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: ./src/framework/components/MyBets/index.tsx + 1 modules
var MyBets = __webpack_require__(57865);
;// ./src/framework/components/MyBetsInfo/MyBetsInfo.tsx






function _MyBetsInfo({ children, index, onClick = () => { }, delayOpen, delayClose }) {
    const { data } = (0,hooks_module_js_.useContext)(MyBets/* Context */.o);
    const { uiCommon: { setBetInfoGameId, setBetInfoId, setModal }, } = (0,bootstrap.GET_STORE)();
    const handleClick = (e) => {
        setBetInfoGameId(data[index].gameId);
        setBetInfoId(data[index].id);
        setModal({
            modalName: 'mybetsInfo',
            render: true,
            delayOpen,
            delayClose,
        });
        onClick(e);
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) });
}
const MyBetsInfo = (0,index_js_.observer)(_MyBetsInfo);

;// ./src/framework/components/MyBetsInfo/index.tsx



/***/ }),

/***/ 25723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* reexport */ Context),
  i: () => (/* reexport */ Rules)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
;// ./src/framework/components/RulesRender/RulesRender.tsx




function _RulesRender({ children }) {
    const { html } = (0,hooks_module_js_.useContext)(Context);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            dangerouslySetInnerHTML: {
                __html: html,
            },
        })) }));
}
const RulesRender = _RulesRender;

;// ./src/framework/components/RulesRender/index.tsx


;// ./src/framework/components/RulesRenderShort/RulesRenderShort.tsx




function _RulesRenderShort({ children }) {
    const { htmlShort } = (0,hooks_module_js_.useContext)(Context);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            dangerouslySetInnerHTML: {
                __html: htmlShort,
            },
        })) }));
}
const RulesRenderShort = _RulesRenderShort;

;// ./src/framework/components/RulesRenderShort/index.tsx


;// ./src/framework/components/Rules/Rules.tsx








const Context = (0,preact_module_js_.createContext)({});
const toggleOpen = (element, height) => {
    const block = element.parentElement?.parentElement;
    const inner = element?.parentElement;
    if (!block || !inner)
        return;
    if (block.classList.contains('_open')) {
        block.classList.remove('_open');
        block.style.maxHeight = `${(height ?? 40) / 16}rem`;
    }
    else {
        const blocks = document.querySelectorAll('[data-rules-item]');
        blocks.forEach((item) => {
            item.classList.remove('_open');
            item.style.maxHeight = `${(height ?? 40) / 16}rem`;
        });
        block.classList.add('_open');
        block.style.maxHeight = `${inner.clientHeight}px`;
    }
};
const hydrateHtml = (height) => {
    const modal = document.getElementById('rules-modal');
    if (!modal)
        return;
    const headers = modal.querySelectorAll('h2');
    headers.forEach((header) => {
        header.addEventListener('click', () => toggleOpen(header, height), false);
        const block = header.parentElement?.parentElement;
        if (block) {
            block.style.maxHeight = `${(height ?? 40) / 16}rem`;
        }
    });
};
function _Rules({ children, defaultHeight }) {
    const { profileCommon: { language, fetchRules }, } = (0,bootstrap.GET_STORE)();
    const [html, setHtml] = (0,hooks_module_js_.useState)('');
    const [htmlShort, setHtmlShort] = (0,hooks_module_js_.useState)('');
    const [list, setList] = (0,hooks_module_js_.useState)([]);
    const [short, setShort] = (0,hooks_module_js_.useState)((0,jsxRuntime_module/* jsx */.Y)("div", {}));
    const [loading, setLoading] = (0,hooks_module_js_.useState)(false);
    const getHtml = async () => {
        const data = await fetchRules();
        try {
            const { rules, rulesShort } = data;
            setHtml(rules
                .replaceAll('<blockquote>', '<div class="block" data-rules-item ><div class="block-inner">')
                .replaceAll('</blockquote>', '</div></div>'));
            setHtmlShort(rulesShort);
        }
        catch (e) {
            console.log('Error convert html or htmlShort');
        }
        try {
            const { rules, rulesShort } = data;
            const list = [];
            const parser = new DOMParser();
            const doc = parser.parseFromString(rules, 'text/html');
            const blockquotes = doc.querySelectorAll('blockquote');
            blockquotes.forEach((blockquote) => {
                const h2Element = blockquote.querySelector('h2');
                list.push({
                    title: h2Element.textContent,
                    content: (0,preact_module_js_.createElement)('div', { dangerouslySetInnerHTML: { __html: blockquote.innerHTML } }),
                });
            });
            setList(list);
            setShort((0,preact_module_js_.createElement)('div', { dangerouslySetInnerHTML: { __html: rulesShort } }));
        }
        catch (e) {
            console.log('Error convert rules to list', e);
        }
        setLoading(true);
    };
    (0,hooks_module_js_.useEffect)(() => {
        getHtml();
    }, [language]);
    const { t } = (0,es_index_js_.useTranslation)();
    (0,hooks_module_js_.useEffect)(() => {
        if (html) {
            setTimeout(() => {
                hydrateHtml(defaultHeight);
            }, 0);
        }
    }, [html]);
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: { html, htmlShort }, children: children({
            title: t('COMMON.RULES'),
            short,
            list,
            loading,
        }) }));
}
const Rules = Object.assign((0,index_js_.observer)(_Rules), {
    RenderShort: RulesRenderShort,
    Render: RulesRender,
});

;// ./src/framework/components/Rules/index.tsx



/***/ }),

/***/ 49472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* reexport */ Setting)
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
;// ./src/framework/components/SettingButton/SettingButton.tsx


function _SettingButton({ children, onClick = () => { } }) {
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick })) });
}
const SettingButton = _SettingButton;

;// ./src/framework/components/SettingButton/index.tsx


;// ./src/framework/components/SettingButtonClose/SettingButtonClose.tsx




function _SettingButtonClose({ children, onClick = () => { } }) {
    const { uiCommon: { setModal }, } = (0,bootstrap.GET_STORE)();
    const handleClick = () => {
        setModal({
            modalName: 'setting',
            render: false,
        });
        onClick();
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) });
}
const SettingButtonClose = (0,index_js_.observer)(_SettingButtonClose);

;// ./src/framework/components/SettingButtonClose/index.tsx


// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
;// ./src/framework/components/SettingButtonLimit/SettingButtonLimit.tsx





function _SettingButtonLimit({ children, onClick = () => { }, delayOpen, delayClose, closeSettings = true }) {
    const { uiCommon: { setModal }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = () => {
        setModal({
            modalName: 'limits',
            render: true,
            delayOpen,
            delayClose,
        });
        if (closeSettings)
            setModal({
                modalName: 'setting',
                render: false,
                delayOpen: 0,
                delayClose: 0,
            });
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ title: t('COMMON.LIMITS') })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) }));
}
const SettingButtonLimit = (0,index_js_.observer)(_SettingButtonLimit);

;// ./src/framework/components/SettingButtonLimit/index.tsx


;// ./src/framework/components/SettingButtonMyBets/SettingButtonMyBets.tsx





function _SettingButtonMyBets({ children, onClick = () => { }, delayOpen, delayClose, closeSettings = true, modalName = 'mybets', }) {
    const { uiCommon: { setModal }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = () => {
        setModal({
            modalName,
            render: true,
            delayOpen,
            delayClose,
        });
        if (closeSettings)
            setModal({
                modalName: 'setting',
                render: false,
                delayOpen: 0,
                delayClose: 0,
            });
        onClick();
    };
    const urlParams = new URLSearchParams(window.location.search);
    const cid = urlParams.get('cid');
    if (cid && cid === 'realamerican')
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ title: t('COMMON.MY_BETS') })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) }));
}
const SettingButtonMyBets = (0,index_js_.observer)(_SettingButtonMyBets);

;// ./src/framework/components/SettingButtonMyBets/index.tsx


;// ./src/framework/components/SettingButtonRule/SettingButtonRule.tsx





function _SettingButtonRule({ children, onClick = () => { }, delayOpen, delayClose, closeSettings = true }) {
    const { uiCommon: { setModal }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = () => {
        setModal({
            modalName: 'rules',
            render: true,
            delayOpen,
            delayClose,
        });
        if (closeSettings)
            setModal({
                modalName: 'setting',
                render: false,
                delayOpen: 0,
                delayClose: 0,
            });
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ title: t('COMMON.RULES') })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) }));
}
const SettingButtonRule = (0,index_js_.observer)(_SettingButtonRule);

;// ./src/framework/components/SettingButtonRule/index.tsx


;// ./src/framework/components/SettingButtonMusic/SettingButtonMusic.tsx





function _SettingButtonMusic({ children, onClick = () => { } }) {
    const { audioCommon: { musicMuted, setMusicMuted }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = () => {
        setMusicMuted(!musicMuted);
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ title: t('COMMON.MUSIC') })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) }));
}
const SettingButtonMusic = (0,index_js_.observer)(_SettingButtonMusic);

;// ./src/framework/components/SettingButtonMusic/index.tsx


;// ./src/framework/components/SettingButtonSound/SettingButtonSound.tsx





function _SettingButtonSound({ children, onClick = () => { } }) {
    const { audioCommon: { soundMuted, setSoundMuted }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = () => {
        setSoundMuted(!soundMuted);
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ title: t('COMMON.SOUND') })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) }));
}
const SettingButtonSound = (0,index_js_.observer)(_SettingButtonSound);

;// ./src/framework/components/SettingButtonSound/index.tsx


;// ./src/framework/components/SettingTitle/SettingTitle.tsx



function _SettingTitle({ children }) {
    const { t } = (0,es_index_js_.useTranslation)();
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ title: t('COMMON.SETTINGS') }) });
}
const SettingTitle = (0,index_js_.observer)(_SettingTitle);

;// ./src/framework/components/SettingTitle/index.tsx


;// ./src/framework/components/SettingModal/SettingModal.tsx



function _SettingModal({ children }) {
    const { uiCommon: { modal, setModal }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            show: modal['setting']?.render,
            onClose: () => {
                setModal({
                    modalName: 'setting',
                    render: false,
                    delayOpen: 0,
                    delayClose: 0,
                });
            },
        }) }));
}
const SettingModal = (0,index_js_.observer)(_SettingModal);

;// ./src/framework/components/SettingModal/index.tsx


;// ./src/framework/components/SettingButtonAnimation/SettingButtonAnimation.tsx





function _SettingButtonAnimation({ children, onClick }) {
    const { uiCommon: { noAnimation, setNoAnimation }, } = (0,bootstrap.GET_STORE)();
    const handleClick = () => {
        setNoAnimation(!noAnimation);
        onClick && onClick();
    };
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ title: t('CRASH.ANIMATION') })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) }));
}
const SettingButtonAnimation = (0,index_js_.observer)(_SettingButtonAnimation);

;// ./src/framework/components/SettingButtonAnimation/index.tsx


;// ./src/framework/components/SettingButtonAnimationToggle/SettingButtonAnimationToggle.tsx



const _SettingButtonAnimationToggle = ({ children }) => {
    const { uiCommon: { noAnimation, setNoAnimation }, } = (0,bootstrap.GET_STORE)();
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ defaultValue: noAnimation, onChange: setNoAnimation }) });
};
const SettingButtonAnimationToggle = (0,index_js_.observer)(_SettingButtonAnimationToggle);

;// ./src/framework/components/SettingButtonAnimationToggle/index.tsx


;// ./src/framework/components/SettingButtonExitGame/SettingButtonExitGame.tsx





function _SettingButtonExitGame({ children, onClick = () => { }, delayOpen, delayClose, closeSettings = true }) {
    const { uiCommon: { setModal }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const urlParams = new URLSearchParams(window.location.search);
    const returnUrl = urlParams.get('returnUrl') || urlParams.get('iframeReturnUrl');
    const handleClick = () => {
        setModal({
            modalName: 'exitGame',
            render: true,
            delayOpen,
            delayClose,
        });
        if (closeSettings)
            setModal({
                modalName: 'setting',
                render: false,
                delayOpen: 0,
                delayClose: 0,
            });
        onClick();
    };
    if (returnUrl && returnUrl === 'hidden')
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ title: t('COMMON.EXITGAME') })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) }));
}
const SettingButtonExitGame = (0,index_js_.observer)(_SettingButtonExitGame);

;// ./src/framework/components/SettingButtonExitGame/index.tsx


;// ./src/framework/components/SettingButtonTournaments/SettingButtonTournaments.tsx





function _SettingButtonTournaments({ children, onClick = () => { }, delayOpen, delayClose, closeSettings = true, }) {
    const { tournamentsCommon: { tournaments, setActiveTournamentId }, uiCommon: { setModal }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = () => {
        if (tournaments.length === 1) {
            setActiveTournamentId(tournaments[0].id);
            setModal({
                modalName: 'tournamentsInfo',
                render: true,
                delayOpen: delayOpen,
                delayClose: delayClose,
            });
        }
        if (tournaments.length > 1) {
            setModal({
                modalName: 'tournamentsList',
                render: true,
                delayOpen,
                delayClose,
            });
        }
        if (closeSettings)
            setModal({
                modalName: 'setting',
                render: false,
                delayOpen: 0,
                delayClose: 0,
            });
        onClick();
    };
    if (!tournaments.length)
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ title: t('COMMON.TOURNAMENTS') })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) }));
}
const SettingButtonTournaments = (0,index_js_.observer)(_SettingButtonTournaments);

;// ./src/framework/components/SettingButtonTournaments/index.tsx


;// ./src/framework/components/SettingButtonFreebets/SettingButtonFreebets.tsx





function _SettingButtonFreebets({ children, onClick = () => { }, delayOpen, delayClose, closeSettings = true }) {
    const { profileCommon: { profile: { freebetsVerified }, }, uiCommon: { setModal }, freebetsCommon: { freebetsActive }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = () => {
        setModal({
            modalName: 'freebets',
            render: true,
            delayOpen,
            delayClose,
        });
        if (closeSettings)
            setModal({
                modalName: 'setting',
                render: false,
                delayOpen: 0,
                delayClose: 0,
            });
        onClick();
    };
    if (!freebetsVerified)
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ title: t('COMMON.FREEBETS'), count: freebetsActive.length })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) }));
}
const SettingButtonFreebets = (0,index_js_.observer)(_SettingButtonFreebets);

;// ./src/framework/components/SettingButtonFreebets/index.tsx


;// ./src/framework/components/SettingButtonQuickMode/SettingButtonQuickMode.tsx





function _SettingButtonQuickMode({ children, onClick = () => { } }) {
    const { quickModeCommon: { enabled, setEnabled }, } = (0,bootstrap.GET_STORE)();
    const handleClick = () => {
        setEnabled(!enabled);
        onClick();
    };
    const { t } = (0,es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            title: t('COMMON.QUICK_PLAY'),
        })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) }));
}
const SettingButtonQuickMode = (0,index_js_.observer)(_SettingButtonQuickMode);

;// ./src/framework/components/SettingButtonQuickMode/index.tsx


;// ./src/framework/components/SettingButtonQuickModeToggle/SettingButtonQuickModeToggle.tsx



function _SettingButtonQuickModeToggle({ children }) {
    const { quickModeCommon: { enabled, setEnabled }, } = (0,bootstrap.GET_STORE)();
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ defaultValue: enabled, onChange: setEnabled }) });
}
const SettingButtonQuickModeToggle = (0,index_js_.observer)(_SettingButtonQuickModeToggle);

;// ./src/framework/components/SettingButtonQuickModeToggle/index.tsx


;// ./src/framework/components/SettingButtonUniverse/SettingButtonUniverse.tsx





function _SettingButtonUniverse({ children, onClick = () => { }, delayOpen, delayClose, closeSettings = true }) {
    const { uiCommon: { setModal }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = () => {
        setModal({
            modalName: 'turbouniverse',
            render: true,
            delayOpen,
            delayClose,
        });
        if (closeSettings)
            setModal({
                modalName: 'turbouniverse',
                render: false,
                delayOpen: 0,
                delayClose: 0,
            });
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ title: t('COMMON.TURBO_UNIVERSE') })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) }));
}
const SettingButtonUniverse = (0,index_js_.observer)(_SettingButtonUniverse);

;// ./src/framework/components/SettingButtonUniverse/index.tsx


;// ./src/framework/components/SettingButtonGuide/SettingButtonGuide.tsx





function _SettingButtonGuide({ children, onClick = () => { }, delayOpen, delayClose, closeSettings = true }) {
    const { uiCommon: { setModal }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleClick = () => {
        setModal({
            modalName: 'guide',
            render: true,
            delayOpen,
            delayClose,
        });
        if (closeSettings)
            setModal({
                modalName: 'setting',
                render: false,
                delayOpen: 0,
                delayClose: 0,
            });
        onClick();
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({ title: t('COMMON.HOW_TO_PLAY') })).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) }));
}
const SettingButtonGuide = (0,index_js_.observer)(_SettingButtonGuide);

;// ./src/framework/components/SettingButtonGuide/index.tsx


;// ./src/framework/components/Setting/Setting.tsx























function _Setting({ children }) {
    const { uiCommon: { modal, setModal }, } = (0,bootstrap.GET_STORE)();
    const childrenRef = (0,hooks_module_js_.useRef)();
    const handleClickOutside = (e) => {
        if (childrenRef.current instanceof HTMLElement &&
            e.target instanceof HTMLElement &&
            !childrenRef.current.contains(e.target)) {
            setModal({
                modalName: 'setting',
                render: false,
            });
        }
    };
    (0,hooks_module_js_.useEffect)(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);
    if (!modal?.setting?.render)
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            ref: (node) => {
                if (node instanceof HTMLElement)
                    childrenRef.current = node;
            },
        })) }));
}
const Setting = Object.assign((0,index_js_.observer)(_Setting), {
    Button: Object.assign(SettingButton, {
        Close: SettingButtonClose,
        Limit: SettingButtonLimit,
        Guide: SettingButtonGuide,
        MyBets: SettingButtonMyBets,
        Rule: SettingButtonRule,
        Sound: SettingButtonSound,
        Music: SettingButtonMusic,
        Animation: Object.assign(SettingButtonAnimation, {
            Toggle: SettingButtonAnimationToggle,
        }),
        ExitGame: SettingButtonExitGame,
        Tournaments: SettingButtonTournaments,
        Freebets: SettingButtonFreebets,
        QuickMode: Object.assign(SettingButtonQuickMode, {
            Toggle: SettingButtonQuickModeToggle,
        }),
        Universe: SettingButtonUniverse,
    }),
    Title: SettingTitle,
    Modal: SettingModal,
});

;// ./src/framework/components/Setting/index.tsx



/***/ }),

/***/ 17491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* reexport */ Time)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
;// ./src/framework/components/Time/Time.tsx


function _Time({ children, step = 1000 }) {
    const [date, setDate] = (0,hooks_module_js_.useState)({
        years: '',
        months: '',
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
    });
    (0,hooks_module_js_.useEffect)(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            const date = {};
            date.days = currentDate.getDate().toString().padStart(2, '0');
            date.years = currentDate.getFullYear().toString();
            const monthIndex = currentDate.getMonth();
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            date.months = months[monthIndex];
            date.hours = currentDate.getHours().toString().padStart(2, '0');
            date.minutes = currentDate.getMinutes().toString().padStart(2, '0');
            date.seconds = currentDate.getSeconds().toString().padStart(2, '0');
            setDate(date);
        }, step);
        return () => clearInterval(interval);
    }, []);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(date) });
}
const Time = _Time;

;// ./src/framework/components/Time/index.tsx



/***/ }),

/***/ 79260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ isFortuneCoin)
/* harmony export */ });
const fortunecoinsCids = [
    'fortunecoins',
    'zulacasino',
    'sportzino',
    'fortunecoins-dev',
    'fortunecoins-qa',
    'fortunecoins-stg',
    'zula-dev',
    'zula-qa',
    'zula-stg',
    'spzino-dev',
    'spzino-qa',
    'spzino-stg',
];
const urlParams = new URLSearchParams(window.location.search);
const cid = urlParams.get('cid');
const isFortuneCoin = cid && fortunecoinsCids.includes(cid);



/***/ }),

/***/ 61683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export shortNumberFloored */
/* harmony import */ var src_framework_helpers_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70903);
/* harmony import */ var src_framework_helpers_shortNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82302);


function shortNumberFloored(value, precision = 2) {
    return (0,src_framework_helpers_shortNumber__WEBPACK_IMPORTED_MODULE_1__/* .shortNumber */ .I)((0,src_framework_helpers_floor__WEBPACK_IMPORTED_MODULE_0__/* .floor */ .R)(value, precision), precision);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shortNumberFloored);


/***/ }),

/***/ 8610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ ModuleSetting_Context),
  L: () => (/* binding */ ModuleSetting)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) classnames@^2.3.2 (strict) (fallback: ./node_modules/classnames/index.js)
var index_js_ = __webpack_require__(83136);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var es_index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: ./src/module/moduleSetting/assets/style.module.scss
var style_module = __webpack_require__(52373);
// EXTERNAL MODULE: ./src/framework/components/Modal/index.tsx + 11 modules
var Modal = __webpack_require__(55365);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var dist_es_index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: ./src/framework/components/Timer/index.tsx + 3 modules
var Timer = __webpack_require__(60287);
// EXTERNAL MODULE: ./src/framework/components/InputName/index.tsx + 7 modules
var InputName = __webpack_require__(25258);
// EXTERNAL MODULE: ./src/framework/components/Setting/index.tsx + 37 modules
var Setting = __webpack_require__(49472);
// EXTERNAL MODULE: ./src/framework/components/InputRange/index.tsx + 19 modules
var InputRange = __webpack_require__(23660);
// EXTERNAL MODULE: ./src/framework/components/InputToggle/index.tsx + 1 modules
var InputToggle = __webpack_require__(34673);
// EXTERNAL MODULE: ./src/framework/components/Time/index.tsx + 1 modules
var Time = __webpack_require__(17491);
;// ./src/module/moduleSetting/component/GroupFooter/GroupFooter.tsx






function _GroupFooter() {
    const { config } = (0,hooks_module_js_.useContext)(ModuleSetting_Context);
    let gameName = '';
    if (config.module && config.module.moduleLayout) {
        gameName = config.module.moduleLayout.find((item) => item.id === 'GameName')?.setting?.text;
    }
    return ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tmpFooter, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { children: ["Turbo Games \u2022 ", gameName] }), (0,jsxRuntime_module/* jsx */.Y)(Time/* Time */.g, { children: ({ years, months, days, hours, minutes, seconds }) => ((0,jsxRuntime_module/* jsx */.Y)("div", { children: `${days} ${months}, ${years} | ${hours}:${minutes}:${seconds}` })) })] }));
}
const GroupFooter = (0,es_index_js_.observer)(_GroupFooter);

;// ./src/module/moduleSetting/component/GroupFooter/index.tsx


;// ./src/module/moduleSetting/component/GroupSetting/GroupSetting.tsx















function _GroupSetting({ page, setPage }) {
    const { t } = (0,dist_es_index_js_.useTranslation)();
    const { settings } = (0,hooks_module_js_.useContext)(ModuleSetting_Context);
    const { tournamentsCommon: { tournaments }, profileCommon: { version, settings: { options }, profile: { availableFreebets }, }, autobetCommon: { setAutoBetEnabled }, } = (0,bootstrap.GET_STORE)();
    (0,hooks_module_js_.useEffect)(() => {
        setAutoBetEnabled(false);
    }, []);
    return ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.tmpInner, style_module/* default */.A.tmpInnerBg), children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tmpHeader, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeader, children: [settings.timer && ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderTimer, children: [(0,jsxRuntime_module/* jsxs */.FD)("span", { className: style_module/* default */.A.settingHeaderTimerTitle, children: [t('COMMON.TIME_IN_GAME'), ":"] }), (0,jsxRuntime_module/* jsx */.Y)(Timer/* Timer */.M, { step: 1000, useInitDate: true, children: ({ hours, minutes, seconds }) => ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [(0,jsxRuntime_module/* jsx */.Y)("span", { children: hours }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: ":" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: minutes }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: ":" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: seconds })] })) })] })), settings.version && ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderVersion, children: [t('COMMON.RNG_VERSION'), ": \u201C", version.rng, "\u201D", (0,jsxRuntime_module/* jsx */.Y)("br", {}), t('COMMON.GAME_VERSION'), ": \u201C", version.game, "\u201D"] })), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Close.All, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderClose, children: (0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-close" }) }) })] }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tmpContent, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingContent, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingContentTop, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.box, children: [settings.username && ((0,jsxRuntime_module/* jsx */.Y)(InputName/* InputName */.c, { min: 3, max: 32, readonly: !!settings.usernameReadonly, isFocus: false, children: ({ title, error, focus, save, value }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.settingName, {
                                                [style_module/* default */.A.settingNameError]: error,
                                            }), children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingNameContent, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingNameHeader, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingNameTitle, children: error ? error : title }), (save || value.length < 3) && ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingNameCount, children: [value.length, "/32"] }))] }), (0,jsxRuntime_module/* jsx */.Y)(InputName/* InputName */.c.Label, { children: (0,jsxRuntime_module/* jsx */.Y)("label", { className: style_module/* default */.A.settingNameLabel }) }), (0,jsxRuntime_module/* jsx */.Y)(InputName/* InputName */.c.Input, { children: (0,jsxRuntime_module/* jsx */.Y)("input", { className: style_module/* default */.A.settingNameInput }) })] }), (0,jsxRuntime_module/* jsx */.Y)(InputName/* InputName */.c.Save, { children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.settingNameButton, {
                                                            [style_module/* default */.A.settingNameButtonActive]: save,
                                                        }), children: [!save && (0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-ios-edit" }), save && (0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-ios-checkmark" })] }) })] })) })), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.boxAudio, children: [settings.sound && ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingAudio, children: [(0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.Sound, { children: ({ title }) => (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingAudioTitle, children: title }) }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingAudioContent, children: [(0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.Sound, { children: () => ((0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingAudioIcon, children: (0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-ios-music-off" }) })) }), (0,jsxRuntime_module/* jsx */.Y)(InputRange/* InputRange */.Q.Sound, { children: ({ disabled, ...props }) => ((0,jsxRuntime_module/* jsx */.Y)(InputRange/* InputRange */.Q, { ...props, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingAudioRange, children: [(0,jsxRuntime_module/* jsx */.Y)(InputRange/* InputRange */.Q.Input, { children: (0,jsxRuntime_module/* jsx */.Y)("input", {}) }), (0,jsxRuntime_module/* jsx */.Y)(InputRange/* InputRange */.Q.Left, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingAudioLeft }) }), (0,jsxRuntime_module/* jsx */.Y)(InputRange/* InputRange */.Q.Center, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingAudioCenter }) }), (0,jsxRuntime_module/* jsx */.Y)(InputRange/* InputRange */.Q.Right, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingAudioRight }) })] }) })) }), (0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.Sound, { children: () => ((0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingAudioIcon, children: (0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-ios-music-on" }) })) })] })] })), settings.music && ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingAudio, children: [(0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.Music, { children: ({ title }) => (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingAudioTitle, children: title }) }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingAudioContent, children: [(0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.Music, { children: () => ((0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingAudioIcon, children: (0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-ios-music-off" }) })) }), (0,jsxRuntime_module/* jsx */.Y)(InputRange/* InputRange */.Q.Music, { children: ({ disabled, ...props }) => ((0,jsxRuntime_module/* jsx */.Y)(InputRange/* InputRange */.Q, { ...props, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingAudioRange, children: [(0,jsxRuntime_module/* jsx */.Y)(InputRange/* InputRange */.Q.Input, { children: (0,jsxRuntime_module/* jsx */.Y)("input", {}) }), (0,jsxRuntime_module/* jsx */.Y)(InputRange/* InputRange */.Q.Left, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingAudioLeft }) }), (0,jsxRuntime_module/* jsx */.Y)(InputRange/* InputRange */.Q.Center, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingAudioCenter }) }), (0,jsxRuntime_module/* jsx */.Y)(InputRange/* InputRange */.Q.Right, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingAudioRight }) })] }) })) }), (0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.Music, { children: () => ((0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingAudioIcon, children: (0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-ios-music-on" }) })) })] })] }))] }), settings.quickMode && ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.toggle, children: [(0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.QuickMode, { children: ({ title }) => (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.toggleTitle, children: title }) }), (0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.QuickMode.Toggle, { children: (props) => ((0,jsxRuntime_module/* jsx */.Y)(InputToggle/* InputToggle */.J, { ...props, children: ({ value }) => ((0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.toggleToggle, {
                                                            [style_module/* default */.A.toggleToggleActive]: value,
                                                        }) })) })) })] })), settings.animation && ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.toggle, children: [(0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.Animation, { children: ({ title }) => (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.toggleTitle, children: title }) }), (0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.Animation.Toggle, { children: (props) => ((0,jsxRuntime_module/* jsx */.Y)(InputToggle/* InputToggle */.J, { ...props, children: ({ value }) => ((0,jsxRuntime_module/* jsx */.Y)("div", { "data-track": "settings.toggle_animation", className: index_js_default()(style_module/* default */.A.toggleToggle, {
                                                            [style_module/* default */.A.toggleToggleActive]: !value,
                                                        }) })) })) })] }))] }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingContentBottom, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingAside, children: [settings.bigTimer && ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingTimer, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingTimerHeader, children: "Time in game:" }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingTimerContent, children: (0,jsxRuntime_module/* jsx */.Y)(Timer/* Timer */.M, { step: 1000, useInitDate: true, children: ({ hours, minutes, seconds }) => ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingTimerItem, children: [(0,jsxRuntime_module/* jsx */.Y)("span", { children: hours }), "h"] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingTimerItem, children: [(0,jsxRuntime_module/* jsx */.Y)("span", { children: minutes }), "m"] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingTimerItem, children: [(0,jsxRuntime_module/* jsx */.Y)("span", { children: seconds }), "s"] })] })) }) })] })), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingList, children: [settings.turbouniverse && options?.displayUniverse !== false && ((0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.Universe, { closeSettings: false, onClick: () => {
                                                    setPage('turbouniverse');
                                                }, children: ({ title }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.settingListItem, style_module/* default */.A.settingListItemUppercase), "data-track": "settings.turbouniverse", children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingListHover }), (0,jsxRuntime_module/* jsx */.Y)("i", { class: style_module/* default */.A.settingListItemUniverseIcon }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: title })] })) })), availableFreebets && settings.freebets && ((0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.Freebets, { closeSettings: false, onClick: () => {
                                                    setPage('freebets');
                                                }, children: ({ title, count }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.settingListItem, style_module/* default */.A.settingListItemUppercase, style_module/* default */.A.settingListItemWobbleBottom), "data-track": "settings.free_bets", children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingListHover }), (0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-ios-box" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: title })] })) })), settings.tournaments && ((0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.Tournaments, { closeSettings: false, onClick: () => {
                                                    if (tournaments.length > 1)
                                                        setPage('tournaments');
                                                }, children: ({ title }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.settingListItem, style_module/* default */.A.settingListItemUppercase), "data-track": "settings.tournaments", children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingListHover }), (0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-ios-cup" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: title })] })) })), settings.guide && ((0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.Guide, { closeSettings: false, onClick: () => {
                                                    setPage(options?.showHTPInstant ? 'rules' : 'guide');
                                                }, children: ({ title }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { "data-track": "settings.guide", className: style_module/* default */.A.settingListItem, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingListHover }), (0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-how-to-play" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: title })] })) })), (settings.mybets || settings.mybetsHistory) && ((0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.MyBets, { modalName: settings.mybetsHistory ? 'mybetsHistory' : 'mybets', closeSettings: false, onClick: () => {
                                                    setPage(settings.mybetsHistory ? 'mybetsHistory' : 'mybets');
                                                }, children: ({ title }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { "data-track": "settings.my_bets", className: style_module/* default */.A.settingListItem, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingListHover }), (0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-ios-list" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: title })] })) })), settings.limit && ((0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.Limit, { closeSettings: false, onClick: () => {
                                                    setPage('limit');
                                                }, children: ({ title }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { "data-track": "settings.limits", className: style_module/* default */.A.settingListItem, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingListHover }), (0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-ios-limit" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: title })] })) })), settings.rules && ((0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.Rule, { closeSettings: false, onClick: () => {
                                                    setPage('rules');
                                                }, children: ({ title }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { "data-track": "settings.rules", className: style_module/* default */.A.settingListItem, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingListHover }), (0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-ios-rules" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: title })] })) })), settings.fair && ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingListItem, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingListHover }), (0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-ios-check" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: "Provably fair" })] })), settings.exit && ((0,jsxRuntime_module/* jsx */.Y)(Setting/* Setting */.B.Button.ExitGame, { closeSettings: false, delayOpen: 0, delayClose: 200, children: ({ title }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { "data-track": "settings.exit", className: index_js_default()(style_module/* default */.A.settingListItem, style_module/* default */.A.settingListItemExit), children: [(0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-ios-home" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: title })] })) }))] })] }) })] }) }), (0,jsxRuntime_module/* jsx */.Y)(GroupFooter, {})] }));
}
const GroupSetting = (0,es_index_js_.observer)(_GroupSetting);

;// ./src/module/moduleSetting/component/GroupSetting/index.tsx


// EXTERNAL MODULE: ./src/framework/components/Limit/index.tsx + 1 modules
var Limit = __webpack_require__(47852);
;// ./src/module/moduleSetting/component/GroupLimit/GroupLimit.tsx







function _GroupLimit({ page, setPage }) {
    const { t } = (0,dist_es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(Limit/* Limit */.I, { children: ({ title, min, max, win }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.tmpInner, style_module/* default */.A.tmpInnerBg1), children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tmpHeader, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModal, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModalBack, onClick: () => {
                                    setPage('');
                                }, children: [(0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-back" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: t('COMMON.BACK') })] }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalTitle, children: title }), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Close.All, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalClose, children: (0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-close" }) }) })] }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tmpContent, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.limit, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.limitList, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.box, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.limitItem, children: [(0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-limit" }), min.name, ": ", (0,jsxRuntime_module/* jsx */.Y)("span", { children: min.value })] }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.box, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.limitItem, children: [(0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-dollar" }), max.name, ": ", (0,jsxRuntime_module/* jsx */.Y)("span", { children: max.value })] }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.box, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.limitItem, children: [(0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-arrow-top" }), win.name, ": ", (0,jsxRuntime_module/* jsx */.Y)("span", { children: win.value })] }) })] }) }) }), (0,jsxRuntime_module/* jsx */.Y)(GroupFooter, {})] })) }));
}
const GroupLimit = _GroupLimit;

;// ./src/module/moduleSetting/component/GroupLimit/index.tsx


// EXTERNAL MODULE: ./src/framework/components/Rules/index.tsx + 5 modules
var Rules = __webpack_require__(25723);
;// ./src/module/moduleSetting/component/GroupRules/GroupRules.tsx








function _GroupRules({ page, setPage, logoImg }) {
    const { t } = (0,dist_es_index_js_.useTranslation)();
    const [isMaskTop, setIsMaskTop] = (0,hooks_module_js_.useState)(false);
    const [isMaskBottom, setIsMaskBottom] = (0,hooks_module_js_.useState)(true);
    const handleScroll = (e) => {
        const topScroll = e.target.scrollTop > 0;
        const bottomScroll = (e.target.scrollHeight - e.target.scrollTop - 2).toFixed(0) > e.target.clientHeight;
        setIsMaskTop(topScroll);
        setIsMaskBottom(bottomScroll);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Rules/* Rules */.i, { children: ({ title, short, list, loading }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.tmpInner, style_module/* default */.A.tmpInnerBg5), children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tmpHeader, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModal, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModalBack, onClick: () => {
                                    setPage('');
                                }, children: [(0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-back" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: t('COMMON.BACK') })] }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalTitle, children: title }), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Close.All, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalClose, children: (0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-close" }) }) })] }) }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tmpContent, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.rules, {
                                [style_module/* default */.A.rulesLoading]: loading,
                            }), children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.rulesList, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.rulesListInner, children: list.map((item, index) => ((0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.rulesItem, onClick: (e) => {
                                                e.stopPropagation();
                                                const targetDiv = document.getElementById(`rule${index}`);
                                                let parent = e.currentTarget.parentElement;
                                                while (parent) {
                                                    const scrollContainer = parent.querySelector(`.${style_module/* default */.A.rulesContent}`);
                                                    if (scrollContainer) {
                                                        if (targetDiv) {
                                                            const containerRect = scrollContainer.getBoundingClientRect();
                                                            const targetRect = targetDiv.getBoundingClientRect();
                                                            const scrollTop = scrollContainer.scrollTop + targetRect.top - containerRect.top - 20;
                                                            scrollContainer.scrollTo({ top: index === 0 ? 0 : scrollTop, behavior: 'smooth' });
                                                        }
                                                        break;
                                                    }
                                                    parent = parent.parentElement;
                                                }
                                            }, children: item.title }))) }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.rulesWrapper, {
                                        [style_module/* default */.A.rulesAddMaskTop]: isMaskTop,
                                        [style_module/* default */.A.rulesAddMaskBottom]: isMaskBottom,
                                    }), children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.rulesContent, onScroll: handleScroll, children: [logoImg && (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.rulesLogo, style: { backgroundImage: `url(${logoImg})` } }), short, list.map((item, index) => ((0,jsxRuntime_module/* jsx */.Y)("div", { id: `rule${index}`, className: style_module/* default */.A.rulesSection, children: item.content })))] }) })] }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.preloader, {
                                [style_module/* default */.A.preloaderActive]: !loading,
                            }) })] }), (0,jsxRuntime_module/* jsx */.Y)(GroupFooter, {})] })) }));
}
const GroupRules = _GroupRules;

;// ./src/module/moduleSetting/component/GroupRules/index.tsx


// EXTERNAL MODULE: ./src/framework/components/MyBets/index.tsx + 1 modules
var MyBets = __webpack_require__(57865);
;// ./src/module/moduleSetting/component/GroupMybets/GroupMybets.tsx









function _GroupMybets({ page, setPage }) {
    const { t } = (0,dist_es_index_js_.useTranslation)();
    const { settings } = (0,hooks_module_js_.useContext)(ModuleSetting_Context);
    return ((0,jsxRuntime_module/* jsx */.Y)(MyBets/* MyBets */.B, { children: ({ title, columns, bets, betsFreebet, loading, data }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.tmpInner, style_module/* default */.A.tmpInnerBg2), children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tmpHeader, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModal, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModalBack, onClick: () => {
                                    setPage('');
                                }, children: [(0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-back" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: t('COMMON.BACK') })] }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalTitle, children: title }), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Close.All, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalClose, children: (0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-close" }) }) })] }) }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tmpContent, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.mybets, {
                                [style_module/* default */.A.mybetsLoading]: loading,
                            }), children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.mybetsHeader, children: [columns.map((column) => ((0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.mybetsCol, children: (0,jsxRuntime_module/* jsx */.Y)("span", { children: column }) }))), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.mybetsInfo })] }), bets.map((bet, index) => ((0,jsxRuntime_module/* jsx */.Y)(MyBets/* MyBets */.B.Info, { index: index, onClick: () => {
                                        if (settings.mybetsinfo) {
                                            setPage('mybetsinfo');
                                        }
                                    }, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.mybetsRow, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.mybetsRowDefault, children: [bet.map((item, i) => ((0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.mybetsCol, {
                                                        [style_module/* default */.A.mybetsColBold]: (betsFreebet.includes(index) && i === 1) || i === 3,
                                                        [style_module/* default */.A.mybetsColItalic]: betsFreebet.includes(index) && i === 1,
                                                    }), children: (0,jsxRuntime_module/* jsx */.Y)("span", { children: item }) }))), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.mybetsInfo, children: (0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-ios-info" }) })] }) }) })))] }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.preloader, {
                                [style_module/* default */.A.preloaderActive]: !loading,
                            }) })] }), (0,jsxRuntime_module/* jsx */.Y)(GroupFooter, {})] })) }));
}
const GroupMybets = _GroupMybets;

;// ./src/module/moduleSetting/component/GroupMybets/index.tsx


// EXTERNAL MODULE: ./src/framework/components/MyBetInfo/index.tsx + 55 modules
var MyBetInfo = __webpack_require__(66837);
;// ./src/module/moduleSetting/component/GroupMyBetInfo/GroupMyBetInfo.tsx







function _GroupMyBetInfo({ page, setPage }) {
    const { t } = (0,dist_es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.tmpInner, style_module/* default */.A.tmpInnerBg3), children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tmpHeader, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModal, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModalBack, onClick: () => {
                                setPage('mybets');
                            }, children: [(0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-back" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: t('COMMON.BACK') })] }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalTitle, children: t('DICE.BET_DETAILS') }), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Close.All, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalClose, children: (0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-close" }) }) })] }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tmpContent, children: (0,jsxRuntime_module/* jsx */.Y)(MyBetInfo/* MyBetInfo */.i.Iframe.Loading, { children: ({ loading }) => ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.mybetsinfo, {
                                    [style_module/* default */.A.mybetsinfoLoading]: loading,
                                }), children: (0,jsxRuntime_module/* jsx */.Y)(MyBetInfo/* MyBetInfo */.i.Iframe, { children: (0,jsxRuntime_module/* jsx */.Y)("iframe", { className: style_module/* default */.A.mybetsinfoIframe, scrolling: "no" }) }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.preloader, { [style_module/* default */.A.preloaderActive]: !loading }) })] })) }) }), (0,jsxRuntime_module/* jsx */.Y)(GroupFooter, {})] }));
}
const GroupMyBetInfo = _GroupMyBetInfo;

;// ./src/module/moduleSetting/component/GroupMyBetInfo/index.tsx


;// ./src/module/moduleSetting/component/GroupMyBetInfoHistory/GroupMyBetInfoHistory.tsx








function _GroupMyBetInfoHistory({ page, setPage }) {
    const { uiCommon: { betHistoryInfoResultIndex }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,dist_es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.tmpInner, style_module/* default */.A.tmpInnerBg3), children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tmpHeader, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModal, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModalBack, onClick: () => {
                                setPage('mybetsHistory');
                            }, children: [(0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-back" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: t('COMMON.BACK') })] }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalTitle, children: t('DICE.BET_DETAILS') }), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Close.All, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalClose, children: (0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-close" }) }) })] }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tmpContent, children: (0,jsxRuntime_module/* jsx */.Y)(MyBetInfo/* MyBetInfo */.i.Iframe.Loading, { children: ({ loading }) => ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.mybetsinfo, {
                                    [style_module/* default */.A.mybetsinfoLoading]: loading,
                                }), children: (0,jsxRuntime_module/* jsx */.Y)(MyBetInfo/* MyBetInfo */.i.Iframe, { resultIndex: String(betHistoryInfoResultIndex), children: (0,jsxRuntime_module/* jsx */.Y)("iframe", { className: style_module/* default */.A.mybetsinfoIframe, scrolling: "no" }) }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.preloader, { [style_module/* default */.A.preloaderActive]: !loading }) })] })) }) }), (0,jsxRuntime_module/* jsx */.Y)(GroupFooter, {})] }));
}
const GroupMyBetInfoHistory = _GroupMyBetInfoHistory;

;// ./src/module/moduleSetting/component/GroupMyBetInfoHistory/index.tsx


// EXTERNAL MODULE: ./src/framework/components/Tournaments/index.tsx + 23 modules
var Tournaments = __webpack_require__(30312);
;// ./src/module/moduleSetting/component/GroupTournaments/GroupTournaments.tsx








function _GroupTournaments({ page, setPage }) {
    const { t } = (0,dist_es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,jsxRuntime_module/* jsx */.Y)(Tournaments/* Tournaments */.d.List, { children: ({ title, loading, list, listActive, listFinished }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.tmpInner, style_module/* default */.A.tmpInnerBg6), children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tmpHeader, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModal, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModalBack, onClick: () => {
                                        setPage('');
                                    }, children: [(0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-back" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: t('COMMON.BACK') })] }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalTitle, children: title }), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Close.All, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalClose, children: (0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-close" }) }) })] }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tmpContent, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingTournament, children: [listActive.map(({ tournamentId, image, imageMob, image656x192, timer, name, sum, currency, finish }, index) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tournament, children: [image656x192 && ((0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tournamentImage, style: { backgroundImage: `url('${image656x192}')` } })), image656x192 && ((0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tournamentImageMod, style: { backgroundImage: `url('${image656x192}')` } })), !finish && ((0,jsxRuntime_module/* jsx */.Y)(Timer/* Timer */.M, { ...timer, children: ({ days, hours, minutes }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tournamentTime, children: [t('COMMON.EXPIRES_IN'), ":", (0,jsxRuntime_module/* jsxs */.FD)("span", { children: [days, t('COMMON.DAYS.SHORT')] }), (0,jsxRuntime_module/* jsxs */.FD)("span", { children: [hours, t('COMMON.HOURS.SHORT')] }), (0,jsxRuntime_module/* jsxs */.FD)("span", { children: [minutes, t('COMMON.MINUTES.SHORT')] })] })) })), name && (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tournamentTitle, children: name }), sum && ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tournamentPrize, children: ["Prize fund:", ' ', (0,jsxRuntime_module/* jsxs */.FD)("span", { children: [sum, " ", currency] })] })), (0,jsxRuntime_module/* jsx */.Y)(Tournaments/* Tournaments */.d.List.Button, { tournamentId: tournamentId, children: ({ title }) => ((0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tournamentDetails, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.secondaryButton, style_module/* default */.A.secondaryButtonFont18, style_module/* default */.A.secondaryButtonH40, style_module/* default */.A.secondaryButtonFontWeight600), children: title }) })) })] }))), listFinished.length > 0 && ((0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingTournamentDescription, children: t('COMMON.ARCHIVE') })), listFinished.map(({ tournamentId, image, imageMob, timer, name, sum, currency, finish }, index) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tournament, children: [image && ((0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentImage, style_module/* default */.A.tournamentImageFinish), style: { backgroundImage: `url('${image}')` } })), imageMob && ((0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentImageMob, style_module/* default */.A.tournamentImageMobFinish), style: { backgroundImage: `url('${imageMob}')` } })), finish && (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tournamentFinished }), name && (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentTitle, style_module/* default */.A.tournamentTitleFinish), children: name }), sum && ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.tournamentPrize), children: ["Prize fund:", ' ', (0,jsxRuntime_module/* jsxs */.FD)("span", { children: [sum, " ", currency] })] })), (0,jsxRuntime_module/* jsx */.Y)(Tournaments/* Tournaments */.d.List.Button, { tournamentId: tournamentId, children: ({ title }) => ((0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentDetails), children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.secondaryButton, style_module/* default */.A.secondaryButtonFont18, style_module/* default */.A.secondaryButtonH40, style_module/* default */.A.secondaryButtonFontWeight600), children: title }) })) })] })))] }) }), (0,jsxRuntime_module/* jsx */.Y)(GroupFooter, {})] })) }) }));
}
const GroupTournaments = _GroupTournaments;

;// ./src/module/moduleSetting/component/GroupTournaments/index.tsx


// EXTERNAL MODULE: ./src/framework/components/Freebets/index.ts + 14 modules
var Freebets = __webpack_require__(57157);
;// ./src/module/moduleSetting/component/GroupFreebets/GroupFreebets.tsx









function _GroupFreebets({ page, setPage }) {
    const { t } = (0,dist_es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [(0,jsxRuntime_module/* jsx */.Y)(Freebets/* Freebets */.h, { children: ({ title, notFound, titleNotFound, titleFreebetsFinished, listActive, listArchived }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.tmpInner, style_module/* default */.A.tmpInnerBg7), children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.tmpHeader, style_module/* default */.A.tmpHeaderG24, {
                                [style_module/* default */.A.tmpHeaderH200]: !notFound,
                            }), children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModal, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModalBack, onClick: () => {
                                                setPage('');
                                            }, children: [(0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-back" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: t('COMMON.BACK') })] }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalTitle, children: title }), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Close.All, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalClose, children: (0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-close" }) }) })] }), !notFound && ((0,jsxRuntime_module/* jsx */.Y)(Freebets/* Freebets */.h.Enabled, { delayOpen: 0, delayClose: 200, children: ({ title, disabled, showTooltip, tooltipText, ...props }) => ((0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.freebets, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.box, style_module/* default */.A.boxP16), children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.toggle, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.toggleTitle, children: title }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.toggleTooltip, {
                                                            [style_module/* default */.A.toggleTooltipActive]: showTooltip,
                                                        }), children: tooltipText }), (0,jsxRuntime_module/* jsx */.Y)(InputToggle/* InputToggle */.J, { ...props, children: ({ value }) => ((0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.toggleToggle, {
                                                                [style_module/* default */.A.toggleToggleActive]: !value,
                                                                [style_module/* default */.A.toggleToggleDisabled]: disabled,
                                                            }) })) })] }) }) })) }))] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tmpContent, children: [notFound && (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.notFound, children: titleNotFound }), !notFound && ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.freebets, children: [listActive.map(({ title, titleAmount, titlePayout, leftAndTotal, amount, payout, currency, titleExpires, isActive, timer, }, index) => ((0,jsxRuntime_module/* jsx */.Y)(Freebets/* Freebets */.h.Item, { index: index, children: ({ disabled }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.freebetsItem, {
                                                    [style_module/* default */.A.freebetsItemActive]: isActive,
                                                    [style_module/* default */.A.freebetsItemDisabled]: disabled,
                                                }), children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.freebetsRow, style_module/* default */.A.freebetsRowMt16), children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.freebetsText, style_module/* default */.A.freebetsTextTitle), children: [(0,jsxRuntime_module/* jsx */.Y)("span", { className: style_module/* default */.A.freebetsPoint }), title] }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.freebetsValue, style_module/* default */.A.freebetsValueCount), children: leftAndTotal })] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.freebetsRow, style_module/* default */.A.freebetsRowMt8), children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.freebetsText, children: [titleAmount, ":"] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.freebetsValue, children: [amount, " ", currency] })] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.freebetsRow, style_module/* default */.A.freebetsRowMt4), children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.freebetsText, style_module/* default */.A.freebetsTextRed), children: [titlePayout, ":"] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.freebetsValue, style_module/* default */.A.freebetsValueRed), children: [payout, " ", currency] })] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.freebetsRow, style_module/* default */.A.freebetsRowBgGrey, style_module/* default */.A.freebetsRowMt8, style_module/* default */.A.freebetsRowPt8, style_module/* default */.A.freebetsRowPb8), children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.freebetsText, children: titleExpires }), (0,jsxRuntime_module/* jsx */.Y)(Timer/* Timer */.M, { ...timer, children: ({ years, days, hours, minutes, seconds, milliseconds }) => ((0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.freebetsValue, children: `${days}${t('COMMON.DAYS.SHORT')} ${hours}${t('COMMON.HOURS.SHORT')} ${minutes}${t('COMMON.MINUTES.SHORT')}` })) })] })] })) }))), !!listArchived.length && (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.freebetsArchivedTitle, children: titleFreebetsFinished }), listArchived.map(({ title, titleAmount, titlePayout, leftAndTotal, amount, payout, currency }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.freebetsItem, style_module/* default */.A.freebetsItemArchived), children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.freebetsRow, style_module/* default */.A.freebetsRowMt16), children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.freebetsText, style_module/* default */.A.freebetsTextTitle), children: [title, ":"] }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.freebetsValue, style_module/* default */.A.freebetsValueCount), children: leftAndTotal })] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.freebetsRow, style_module/* default */.A.freebetsRowMt8), children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.freebetsText, children: [titleAmount, ":"] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.freebetsValue, children: [amount, " ", currency] })] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.freebetsRow, style_module/* default */.A.freebetsRowMt4), children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.freebetsText, style_module/* default */.A.freebetsTextRed), children: [titlePayout, ":"] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.freebetsValue, style_module/* default */.A.freebetsValueRed), children: [payout, " ", currency] })] }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.freebetsFinished })] })))] }))] }), (0,jsxRuntime_module/* jsx */.Y)(GroupFooter, {})] })) }), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Connect, { modalName: "freebetsConfirmation", children: ({ open, close, ...props }) => ((0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a, { ...props, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.exit, {
                            [style_module/* default */.A.exitOpen]: open,
                            [style_module/* default */.A.exitClose]: close,
                        }), children: (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Content, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.exitInner, children: (0,jsxRuntime_module/* jsx */.Y)(Freebets/* Freebets */.h.Enabled, { children: ({ titleConfirmation, titleLoseProgress, titleConfirmationYes, titleConfirmationNo }) => ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.exitDescription, children: titleConfirmation }), ' ', titleLoseProgress && (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.exitDescription, children: titleLoseProgress }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.exitButtons, children: [(0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Close, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.primaryButton, style_module/* default */.A.primaryButtonRed), children: titleConfirmationNo }) }), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Submit, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.secondaryButton, children: titleConfirmationYes }) })] })] })) }) }) }) }) })) }), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Connect, { modalName: "freebetsChangeConfirm", children: ({ open, close, data, ...props }) => ((0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a, { ...props, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.exit, {
                            [style_module/* default */.A.exitOpen]: open,
                            [style_module/* default */.A.exitClose]: close,
                        }), children: (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Content, { children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.exitInner, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.exitDescription, children: t('FREEBETS.CHANGE') }), ' ', data && (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.exitDescription, children: data }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.exitButtons, children: [(0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Close, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.primaryButton, style_module/* default */.A.primaryButtonRed), children: t('COMMON.NO') }) }), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Submit, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.secondaryButton, children: t('COMMON.YES') }) })] })] }) }) }) })) })] }));
}
const GroupFreebets = _GroupFreebets;

;// ./src/module/moduleSetting/component/GroupFreebets/index.tsx


// EXTERNAL MODULE: ./src/module/moduleTurboUniverse/index.ts + 61 modules
var moduleTurboUniverse = __webpack_require__(52349);
;// ./src/module/moduleSetting/component/GroupGuide/GroupGuideVideo/GroupGuideVideo.tsx










var PlayerState;
(function (PlayerState) {
    PlayerState[PlayerState["Unstarted"] = -1] = "Unstarted";
    PlayerState[PlayerState["Ended"] = 0] = "Ended";
    PlayerState[PlayerState["Playing"] = 1] = "Playing";
    PlayerState[PlayerState["Paused"] = 2] = "Paused";
    PlayerState[PlayerState["Buffering"] = 3] = "Buffering";
    PlayerState[PlayerState["VideoCued"] = 5] = "VideoCued";
})(PlayerState || (PlayerState = {}));
const GroupGuideVideo = ({ setPage }) => {
    const { audioCommon: { setGlobalMuted, globalMuted }, } = (0,bootstrap.GET_STORE)();
    const { config } = (0,hooks_module_js_.useContext)(ModuleSetting_Context);
    const videoId = config?.guide?.videoLinkId ?? '';
    const player = (0,hooks_module_js_.useRef)(null);
    const [loaded, setLoaded] = (0,hooks_module_js_.useState)(false);
    const [isPlaying, setIsPlaying] = (0,hooks_module_js_.useState)(false);
    const handlePlayerStateChange = (0,hooks_module_js_.useCallback)((event) => {
        const playerState = event.target.getPlayerState();
        switch (playerState) {
            case PlayerState.Unstarted:
                setIsPlaying(false);
                break;
            case PlayerState.Ended:
                setIsPlaying(false);
                setLoaded(false);
                player.current.destroy();
                setTimeout(() => {
                    setLoaded(true);
                }, 0);
                break;
            case PlayerState.Playing:
                setIsPlaying(true);
                break;
            case PlayerState.Paused:
                setIsPlaying(false);
                break;
            case PlayerState.Buffering:
                break;
            case PlayerState.VideoCued:
                break;
            default:
        }
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        const ytLoaded = document.getElementById('yt-iframe-api');
        if (ytLoaded) {
            setLoaded(true);
            return;
        }
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.id = 'yt-iframe-api-guide';
        document.body.appendChild(tag);
        tag.onload = () => {
            setTimeout(() => {
                setLoaded(true);
            }, 1000);
        };
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        if (!loaded)
            return;
        if (!videoId)
            return;
        let interval;
        player.current = new YT.Player('player', {
            videoId,
            playerVars: { fs: 0, controls: 0, modestbranding: 1, rel: 0, iv_load_policy: 3 },
            events: {
                onPlay: () => {
                    console.log('onPlay');
                },
                onPause: () => {
                    console.log('onPause');
                },
                onReady: (event) => {
                    console.log('onReady');
                },
                onStateChange: handlePlayerStateChange,
            },
        });
        return () => {
            clearInterval(interval);
            player.current.destroy();
        };
    }, [loaded, videoId]);
    (0,hooks_module_js_.useEffect)(() => {
        loaded && setGlobalMuted(isPlaying);
    }, [isPlaying]);
    const close = () => {
        setPage('rules');
    };
    (0,hooks_module_js_.useEffect)(() => {
        window.addEventListener('unload', close);
        return () => {
            window.removeEventListener('unload', close);
        };
    }, []);
    const { t } = (0,dist_es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.tmpInner, style_module/* default */.A.tmpInnerBg5), children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tmpContent, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: `${style_module/* default */.A.guide} ${style_module/* default */.A.settingHeaderModal}`, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.guideHeader, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.guideHeader__title, children: t('COMMON.HOW_TO_PLAY') }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.guideVideo, children: (0,jsxRuntime_module/* jsx */.Y)("div", { id: "player", className: style_module/* default */.A.guideVideo__iframe }) }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: `${style_module/* default */.A.guideBack} ${style_module/* default */.A.settingHeaderModalBack}`, onClick: () => {
                                setPage('');
                            }, children: [(0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-back" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: t('COMMON.BACK') })] }), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Close.All, { onClick: () => setGlobalMuted(false), children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: `${style_module/* default */.A.guideClose} ${style_module/* default */.A.settingHeaderModalClose}`, children: (0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-close" }) }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.guideFooter, children: !isPlaying && ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.guideFooter__rules, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.guideFooter__rulesList, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.guideFooter__rulesListItem, children: [(0,jsxRuntime_module/* jsx */.Y)("span", { children: "01" }), (0,jsxRuntime_module/* jsx */.Y)("p", { children: t(config?.guide?.step1Key ?? '') })] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.guideFooter__rulesListItem, children: [(0,jsxRuntime_module/* jsx */.Y)("span", { children: "02" }), (0,jsxRuntime_module/* jsx */.Y)("p", { children: t(config?.guide?.step2Key ?? '') })] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.guideFooter__rulesListItem, children: [(0,jsxRuntime_module/* jsx */.Y)("span", { children: "03" }), (0,jsxRuntime_module/* jsx */.Y)("p", { children: t(config?.guide?.step3Key ?? '') })] })] }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.guide__link, onClick: close, children: t('COMMON.DETAILED_RULES') })] })) })] }) }), (0,jsxRuntime_module/* jsx */.Y)(GroupFooter, {})] }));
};
/* harmony default export */ const GroupGuideVideo_GroupGuideVideo = ((0,es_index_js_.observer)(GroupGuideVideo));

;// ./src/module/moduleSetting/component/GroupGuide/GroupGuideVideo/index.tsx


;// ./src/module/moduleSetting/component/GroupGuide/GroupGuideImage/GroupGuideImage.tsx









const GroupGuideImage = ({ setPage, guide }) => {
    const { config } = (0,hooks_module_js_.useContext)(ModuleSetting_Context);
    const close = () => {
        setPage('rules');
    };
    (0,hooks_module_js_.useEffect)(() => {
        window.addEventListener('unload', close);
        return () => {
            window.removeEventListener('unload', close);
        };
    }, []);
    const { t } = (0,dist_es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.tmpInner, style_module/* default */.A.tmpInnerBg5), children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tmpHeader, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModal, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModalBack, onClick: () => {
                                setPage('');
                            }, children: [(0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-back" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: t('COMMON.BACK') })] }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalTitle, children: t('COMMON.HOW_TO_PLAY') }), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Close.All, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalClose, children: (0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-close" }) }) })] }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tmpContent, children: guide ?? (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, {}) }), (0,jsxRuntime_module/* jsx */.Y)(GroupFooter, {})] }));
};
/* harmony default export */ const GroupGuideImage_GroupGuideImage = ((0,es_index_js_.observer)(GroupGuideImage));

;// ./src/module/moduleSetting/component/GroupGuide/GroupGuideImage/index.tsx


;// ./src/module/moduleSetting/component/GroupGuide/GroupGuide.tsx






const GroupGuide = ({ setPage, guide }) => {
    const { config } = (0,hooks_module_js_.useContext)(ModuleSetting_Context);
    return ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [config?.guide?.type === 'image' && (0,jsxRuntime_module/* jsx */.Y)(GroupGuideImage_GroupGuideImage, { setPage: setPage, guide: guide }), config?.guide?.type === 'video' && (0,jsxRuntime_module/* jsx */.Y)(GroupGuideVideo_GroupGuideVideo, { setPage: setPage })] }));
};
/* harmony default export */ const GroupGuide_GroupGuide = ((0,es_index_js_.observer)(GroupGuide));

;// ./src/module/moduleSetting/component/GroupGuide/index.tsx


// EXTERNAL MODULE: ./src/framework/api/index.ts
var api = __webpack_require__(58608);
;// ./src/framework/components/MyBetsHistoryInfo/MyBetsHistoryInfo.tsx




function _MyBetsHistoryInfo({ children, bet, onClick = () => { }, delayOpen, delayClose }) {
    console.log({ bet });
    const { game: { gameServerId }, uiCommon: { setBetInfoGameId, setBetInfoId, setModal, setBetHistoryInfoResultIndex }, profileCommon: { language, profile: { token, apiKey, currencySign, rounding, name }, }, } = (0,bootstrap.GET_STORE)();
    console.log({ bet });
    const handleClick = (e) => {
        setBetInfoGameId(gameServerId);
        setBetInfoId(bet.betId);
        setBetHistoryInfoResultIndex(bet.resultIndex);
        setModal({
            modalName: 'mybetsHistoryInfo',
            render: true,
            delayOpen,
            delayClose,
        });
        onClick(e);
    };
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) });
}
const MyBetsHistoryInfo = (0,es_index_js_.observer)(_MyBetsHistoryInfo);

;// ./src/framework/components/MyBetsHistoryInfo/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
;// ./src/framework/components/MyBetsHistory/MyBetsHistory.tsx











const Context = (0,preact_module_js_.createContext)({});
function _MyBetsHistory({ children, columns = ['updatedAt', 'amount', 'coefficient', 'payout'], limit = 10, offset = 0, }) {
    const { profileCommon: { language, profile: { token, apiKey, currencySign, rounding }, }, uiCommon: { errorCodeResolver }, game: { gameServerId, mybets }, } = (0,bootstrap.GET_STORE)();
    if (!token || !apiKey)
        return null;
    const { t } = (0,dist_es_index_js_.useTranslation)();
    const [bets, setBets] = (0,hooks_module_js_.useState)([]);
    const [betsInfo, setBetsInfo] = (0,hooks_module_js_.useState)([]);
    const [betsFreebet, setBetsFreebet] = (0,hooks_module_js_.useState)([]);
    const [data, setData] = (0,hooks_module_js_.useState)([]);
    const [mutableData, setMutableData] = (0,hooks_module_js_.useState)([]);
    const [loading, setLoading] = (0,hooks_module_js_.useState)(false);
    const columnsTranslate = {
        updatedAt: t('COMMON.TIME'),
        amount: t('COMMON.BET_AMOUNT'),
        coefficient: t('COMMON.MULTIPLIER'),
        payout: t('COMMON.PAYOUT'),
        prefixAmount: t('COMMON.BET_AMOUNT'),
        prefixCoefficient: t('COMMON.MULTIPLIER'),
        prefixPayout: t('COMMON.PAYOUT'),
        amountSufix: t('COMMON.BET_AMOUNT'),
        coefficientSufix: t('COMMON.MULTIPLIER'),
        payoutSufix: t('COMMON.PAYOUT'),
    };
    const { config } = (0,hooks_module_js_.useContext)(ModuleSetting_Context);
    (0,hooks_module_js_.useEffect)(() => {
        const get = async () => {
            try {
                const { data } = await (0,api/* getMyBetsHistory */.dd)({
                    headers: { authorization: token, apiKey },
                    gameId: gameServerId,
                    limit,
                    offset,
                });
                setData(data);
                setMutableData(data);
                setLoading(true);
            }
            catch (error) {
                console.log('getMyBetsError', error);
                errorCodeResolver(error);
            }
        };
        get();
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        if (!loading && !mybets)
            return;
        const mutableData = [...mybets, ...data].slice(0, limit);
        setMutableData(mutableData);
    }, [mybets, limit]);
    (0,hooks_module_js_.useEffect)(() => {
        let bets = [];
        let betsInfo = [];
        let betsFreebet = [];
        for (let i = 0; i < mutableData.length; i++) {
            const bet = mutableData[i];
            if (bet.freebetsId)
                betsFreebet.push(i);
            for (let result of bet.results) {
                const row = {};
                const rowInfo = {
                    betId: bet.betId,
                    amount: bet.amount,
                    payout: result.payout,
                    coefficient: result.payoutCoefficient,
                    updatedAt: bet.updatedAt,
                    currency: bet.currency,
                    resultIndex: bet.results.indexOf(result),
                };
                for (let list of columns) {
                    if (list === 'updatedAt') {
                        row.updatedAt = new Intl.DateTimeFormat(language ? language.slice(0, 2) : 'en', {
                            hour: 'numeric',
                            minute: 'numeric',
                        }).format(new Date(bet['updatedAt']));
                    }
                    if (list === 'amount') {
                        row.amount = bet.freebetsId ? 'FREE BET' : (0,shortNumber/* default */.A)(bet.amount, rounding);
                    }
                    if (list === 'payout') {
                        if (config?.module?.moduleSetting?.truncateDecimalsMybetsPayout) {
                            row.payout = (0,truncateDecimals/* default */.A)(result.payout, rounding);
                        }
                        else {
                            row.payout = (0,shortNumber/* default */.A)(result.payout, rounding);
                        }
                    }
                    if (list === 'coefficient') {
                        row.coefficient = result.payoutCoefficient ? result.payoutCoefficient.toFixed(2) : '-';
                    }
                    if (list === 'prefixAmount') {
                        row.prefixAmount = bet.freebetsId
                            ? 'FREE BET'
                            : `${currencySign}${' '}${(0,shortNumber/* default */.A)(bet.amount, rounding)}`;
                    }
                    if (list === 'prefixPayout') {
                        row.prefixPayout = `${currencySign}${' '}${(0,shortNumber/* default */.A)(result.payout, rounding)}`;
                    }
                    if (list === 'prefixCoefficient') {
                        row.prefixCoefficient = result.payoutCoefficient ? 'x' + result.payoutCoefficient.toFixed(2) : '-';
                    }
                    if (list === 'amountSufix') {
                        row.amountSufix = bet.freebetsId ? 'FREE BET' : `${(0,shortNumber/* default */.A)(bet.amount, rounding)}${' '}${currencySign}`;
                    }
                    if (list === 'payoutSufix') {
                        row.payoutSufix = `${(0,shortNumber/* default */.A)(result.payout, rounding)}${' '}${currencySign}`;
                    }
                    if (list === 'coefficientSufix') {
                        row.coefficientSufix = result.payoutCoefficient ? result.payoutCoefficient.toFixed(2) + 'x' : '-';
                    }
                }
                betsInfo.push(rowInfo);
                bets.push(row);
            }
        }
        setBetsInfo(betsInfo);
        setBets(bets.map((bet) => columns.map((item) => bet[item])));
        setBetsFreebet(betsFreebet);
    }, [mutableData]);
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: { data: mutableData }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
                title: t('COMMON.MY_BETS'),
                bets,
                betsInfo,
                betsFreebet,
                columns: columns.map((item) => columnsTranslate[item]),
                loading,
                data: mutableData,
            })).map((child) => (0,preact_module_js_.cloneElement)(child)) }) }));
}
const MyBetsHistory = Object.assign((0,es_index_js_.observer)(_MyBetsHistory), {
    Info: MyBetsHistoryInfo,
});

;// ./src/framework/components/MyBetsHistory/index.tsx


;// ./src/module/moduleSetting/component/GroupMybetsHistory/GroupMybetsHistory.tsx









function _GroupMybetsHistory({ page, setPage }) {
    const { t } = (0,dist_es_index_js_.useTranslation)();
    const { settings } = (0,hooks_module_js_.useContext)(ModuleSetting_Context);
    return ((0,jsxRuntime_module/* jsx */.Y)(MyBetsHistory, { children: ({ title, columns, bets, betsFreebet, loading, betsInfo }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.tmpInner, style_module/* default */.A.tmpInnerBg2), children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tmpHeader, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModal, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.settingHeaderModalBack, onClick: () => {
                                    setPage('');
                                }, children: [(0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-back" }), (0,jsxRuntime_module/* jsx */.Y)("span", { children: t('COMMON.BACK') })] }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalTitle, children: title }), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Close.All, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.settingHeaderModalClose, children: (0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-close" }) }) })] }) }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tmpContent, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.mybets, {
                                [style_module/* default */.A.mybetsLoading]: loading,
                            }), children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.mybetsHeader, children: [columns.map((column) => ((0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.mybetsCol, children: (0,jsxRuntime_module/* jsx */.Y)("span", { children: column }) }))), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.mybetsInfo })] }), bets.map((bet, index) => ((0,jsxRuntime_module/* jsx */.Y)(MyBetsHistory.Info, { bet: betsInfo[index], onClick: () => {
                                        if (settings.mybetsInfoHistory) {
                                            setPage('mybetsInfoHistory');
                                        }
                                    }, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.mybetsRow, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.mybetsRowDefault, children: [bet.map((item, i) => ((0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.mybetsCol, {
                                                        [style_module/* default */.A.mybetsColBold]: (betsFreebet.includes(index) && i === 1) || i === 3,
                                                        [style_module/* default */.A.mybetsColItalic]: betsFreebet.includes(index) && i === 1,
                                                    }), children: (0,jsxRuntime_module/* jsx */.Y)("span", { children: item }) }))), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.mybetsInfo, children: (0,jsxRuntime_module/* jsx */.Y)("i", { class: "fm-iconFont fm-iconFont-ios-warning" }) })] }) }) })))] }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.preloader, {
                                [style_module/* default */.A.preloaderActive]: !loading,
                            }) })] }), (0,jsxRuntime_module/* jsx */.Y)(GroupFooter, {})] })) }));
}
const GroupMybetsHistory = _GroupMybetsHistory;

;// ./src/module/moduleSetting/component/GroupMybetsHistory/index.tsx


;// ./src/module/moduleSetting/component/GroupModal/GroupModal.tsx



















function _GroupModal({ logoImg, guide }) {
    const { uiCommon: { modal }, profileCommon: { settings: { options }, }, audioCommon: { setGlobalMuted, globalMuted, soundMuted, musicMuted }, } = (0,bootstrap.GET_STORE)();
    const { settings } = (0,hooks_module_js_.useContext)(ModuleSetting_Context);
    const [propsShow, setPropsShow] = (0,hooks_module_js_.useState)(false);
    const refPage = (0,hooks_module_js_.useRef)('');
    const [page, setPage] = (0,hooks_module_js_.useState)('');
    (0,hooks_module_js_.useEffect)(() => {
        if (propsShow)
            setPage('');
        if (modal?.setting?.data?.page)
            setPage(modal?.setting?.data?.page);
    }, [propsShow]);
    (0,hooks_module_js_.useEffect)(() => {
        refPage.current = page;
    }, [page]);
    return ((0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Connect, { modalName: "setting", children: ({ show, open, close, onClose, data }) => {
            if (data && data.page && data.page === 'mybetsinfo') {
                setPage('mybetsinfo');
            }
            setPropsShow(show);
            return ((0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a, { show: show, onClose: onClose, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.animation, {
                        [style_module/* default */.A.animationOpen]: open && !close,
                    }), style: { ...(refPage.current !== '' && { '--animation-delay-nav': '0s' }) }, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.animationInner, children: (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Content, { children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tmp, children: [page === '' && (0,jsxRuntime_module/* jsx */.Y)(GroupSetting, { page: page, setPage: setPage }), page === 'turbouniverse' && settings.turbouniverse && options?.displayUniverse !== false && ((0,jsxRuntime_module/* jsx */.Y)(moduleTurboUniverse["default"], { setPage: setPage, setGlobalMuted: globalMuted || (musicMuted && soundMuted) ? undefined : setGlobalMuted })), page === 'guide' && settings.guide && (0,jsxRuntime_module/* jsx */.Y)(GroupGuide_GroupGuide, { setPage: setPage, guide: guide }), page === 'limit' && settings.limit && (0,jsxRuntime_module/* jsx */.Y)(GroupLimit, { page: page, setPage: setPage }), page === 'rules' && settings.rules && ((0,jsxRuntime_module/* jsx */.Y)(GroupRules, { page: page, setPage: setPage, logoImg: logoImg })), page === 'mybets' && settings.mybets && (0,jsxRuntime_module/* jsx */.Y)(GroupMybets, { page: page, setPage: setPage }), page === 'mybetsHistory' && settings.mybetsHistory && ((0,jsxRuntime_module/* jsx */.Y)(GroupMybetsHistory, { page: page, setPage: setPage })), page === 'mybetsinfo' && settings.mybetsinfo && (0,jsxRuntime_module/* jsx */.Y)(GroupMyBetInfo, { page: page, setPage: setPage }), page === 'mybetsInfoHistory' && settings.mybetsInfoHistory && ((0,jsxRuntime_module/* jsx */.Y)(GroupMyBetInfoHistory, { page: page, setPage: setPage })), page === 'tournaments' && settings.tournaments && ((0,jsxRuntime_module/* jsx */.Y)(GroupTournaments, { page: page, setPage: setPage })), page === 'freebets' && settings.freebets && (0,jsxRuntime_module/* jsx */.Y)(GroupFreebets, { page: page, setPage: setPage })] }) }) }) }) }));
        } }));
}
const GroupModal = (0,es_index_js_.observer)(_GroupModal);

;// ./src/module/moduleSetting/component/GroupModal/index.tsx


// EXTERNAL MODULE: ./src/framework/components/Alert/index.tsx + 3 modules
var Alert = __webpack_require__(70757);
;// ./src/module/moduleSetting/component/GroupAlert/GroupAlert.tsx




function _GroupAlert() {
    return ((0,jsxRuntime_module/* jsx */.Y)(Alert/* Alert */.F, { delayOpen: 300, delayClose: 300, children: (0,jsxRuntime_module/* jsx */.Y)(Alert/* Alert */.F.Message, { children: (message) => ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.alert, {
                        [style_module/* default */.A.alertSuccess]: message.type === 'success',
                        [style_module/* default */.A.alertError]: message.type === 'error',
                        [style_module/* default */.A.alertWarning]: message.type === 'warning',
                        [style_module/* default */.A.alertOpen]: message.open,
                        [style_module/* default */.A.alertClose]: message.close,
                        [style_module/* default */.A.alertQuickMode]: message.type === 'gameQuickMode',
                        [style_module/* default */.A.alertGreetings]: message.type === 'greetings',
                    }), children: [message.title && (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.alertTitle, children: message.title }), message.text && (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.alertText, children: message.text })] }) })) }) }));
}
const GroupAlert = _GroupAlert;

;// ./src/module/moduleSetting/component/GroupAlert/index.tsx


// EXTERNAL MODULE: ./src/framework/components/ExitGame/index.tsx + 3 modules
var ExitGame = __webpack_require__(76060);
;// ./src/module/moduleSetting/component/GroupExitGame/GroupExitGame.tsx






function _GroupExitGame() {
    const { t } = (0,dist_es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Connect, { modalName: "exitGame", children: ({ open, close, ...props }) => ((0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a, { ...props, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.exit, {
                    [style_module/* default */.A.exitOpen]: open,
                    [style_module/* default */.A.exitClose]: close,
                }), children: (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Content, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.exitInner, children: (0,jsxRuntime_module/* jsx */.Y)(ExitGame/* ExitGame */.N, { children: ({ title, description }) => ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.exitTitle, children: title }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.exitDescription, children: description }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.exitButtons, children: [(0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Close, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.primaryButton, style_module/* default */.A.primaryButtonRed), children: t('COMMON.CANCEL') }) }), (0,jsxRuntime_module/* jsx */.Y)(ExitGame/* ExitGame */.N.Exit, { children: ({ title }) => (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.secondaryButton, children: title }) })] })] })) }) }) }) }) })) }));
}
const GroupExitGame = _GroupExitGame;

;// ./src/module/moduleSetting/component/GroupExitGame/index.tsx


;// ./src/module/moduleSetting/component/GroupTournament/GroupTournament.tsx








function _GroupTournament() {
    const { t } = (0,dist_es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Connect, { modalName: "tournamentsInfo", children: ({ open, close, ...props }) => ((0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a, { ...props, children: (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tournamentModal, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tournamentModalHeader, children: (0,jsxRuntime_module/* jsxs */.FD)(Modal/* Modal */.a.Close, { children: [(0,jsxRuntime_module/* jsx */.Y)("span", { children: t('COMMON.CLOSE') }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tournamentModalClose, children: (0,jsxRuntime_module/* jsx */.Y)("i", { className: "fm-iconFont fm-iconFont-ios-close" }) })] }) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tournamentModalInner, children: (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Content, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tournamentModalContent, children: (0,jsxRuntime_module/* jsx */.Y)(Tournaments/* Tournaments */.d.Info, { children: ({ timer, startAt, endAt, finish, loading, image, imageMob, image656x192, image592x540, image320x200, name, currency, sum, sumShort, winnerCount, }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tournament, children: [image656x192 && ((0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentImage, {
                                                        [style_module/* default */.A.tournamentImageFinish]: finish,
                                                    }), style: { backgroundImage: `url('${image656x192}')` } })), !finish && ((0,jsxRuntime_module/* jsx */.Y)(Timer/* Timer */.M, { ...timer, children: ({ days, hours, minutes }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tournamentTime, children: [t('COMMON.EXPIRES_IN'), ":", (0,jsxRuntime_module/* jsxs */.FD)("span", { children: [days, t('COMMON.DAYS.SHORT')] }), (0,jsxRuntime_module/* jsxs */.FD)("span", { children: [hours, t('COMMON.HOURS.SHORT')] }), (0,jsxRuntime_module/* jsxs */.FD)("span", { children: [minutes, t('COMMON.MINUTES.SHORT')] })] })) })), finish && (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tournamentFinished }), name && ((0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentTitle, {
                                                        [style_module/* default */.A.tournamentFinish]: finish,
                                                    }), children: name })), sum && ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tournamentPrize, children: ["Prize fund:", ' ', (0,jsxRuntime_module/* jsxs */.FD)("span", { children: [sum, " ", currency] })] })), !finish && ((0,jsxRuntime_module/* jsx */.Y)(Tournaments/* Tournaments */.d.Info.Tab, { list: ['leaderbords', 'prizes'], children: ({ list, active }) => ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tournamentTabs, children: list.map((name, index) => ((0,jsxRuntime_module/* jsx */.Y)(Tournaments/* Tournaments */.d.Info.Tab.Item, { index: index, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tournamentTab, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.settingMenuButton, {
                                                                                [style_module/* default */.A.settingMenuButtonActive]: active === index,
                                                                            }), children: name }) }) }))) }), active === 0 && ((0,jsxRuntime_module/* jsx */.Y)(Tournaments/* Tournaments */.d.Info.Leaderbords, { children: ({ list, listSpaceIndex, loading, activeId, titlePosition, titleUser, titlePrize, titlePoints, }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tournamentTable, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tournamentRow, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColW50), children: "#" }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColLeft, style_module/* default */.A.tournamentColGrow1), children: titleUser }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColRight), children: titlePoints })] }), list.map((item, index) => ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [listSpaceIndex === index && ((0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentTr, style_module/* default */.A.tournamentTrP8) })), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.tournamentRow, {
                                                                                        [style_module/* default */.A.tournamentRowActive]: activeId === item.playerId,
                                                                                        [style_module/* default */.A.tournamentRowOne]: index === 0,
                                                                                        [style_module/* default */.A.tournamentRowTwo]: index === 1,
                                                                                        [style_module/* default */.A.tournamentRowThree]: index === 2,
                                                                                    }), children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColW50), children: item.rank }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColLeft, style_module/* default */.A.tournamentColGrow1), children: item.playerName }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColRight), children: item.value })] })] })))] })) })), active === 1 && ((0,jsxRuntime_module/* jsx */.Y)(Tournaments/* Tournaments */.d.Info.Prize, { children: ({ prize, titlePrize, loading }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tournamentTable, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tournamentRow, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColW50), children: "#" }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColRight), children: titlePrize })] }), prize.map((item, index) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.tournamentRow, {
                                                                                [style_module/* default */.A.tournamentRowOne]: index === 0,
                                                                                [style_module/* default */.A.tournamentRowTwo]: index === 1,
                                                                                [style_module/* default */.A.tournamentRowThree]: index === 2,
                                                                            }), children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColW50), children: item.key }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColRight), children: item.value })] })))] })) }))] })) })), finish && (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tournamentTitle, children: t('TOURNAMENT.WINNERS') }), finish && ((0,jsxRuntime_module/* jsx */.Y)(Tournaments/* Tournaments */.d.Info.Winners, { children: ({ list, listSpaceIndex, loading, activeId, titlePosition, titleUser, titlePrize, titlePoints, }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tournamentTable, children: [(0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.tournamentRow, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColW50), children: "#" }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColLeft, style_module/* default */.A.tournamentColW150), children: titleUser }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColW100), children: titlePoints }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColRight, style_module/* default */.A.tournamentColW50), children: titlePrize })] }), list.map((item, index) => ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [listSpaceIndex === index && ((0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentTr, style_module/* default */.A.tournamentTrP8) })), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: index_js_default()(style_module/* default */.A.tournamentRow, {
                                                                            [style_module/* default */.A.tournamentRowActive]: activeId === item.playerId,
                                                                            [style_module/* default */.A.tournamentRowOne]: index === 0,
                                                                            [style_module/* default */.A.tournamentRowTwo]: index === 1,
                                                                            [style_module/* default */.A.tournamentRowThree]: index === 2,
                                                                        }), children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColW50), children: item.rank }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColLeft, style_module/* default */.A.tournamentColW150), children: item.playerName }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColW100), children: item.value }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.tournamentCol, style_module/* default */.A.tournamentColRight, style_module/* default */.A.tournamentColW50), children: item.prize })] })] })))] })) })), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tournamentTr }), (0,jsxRuntime_module/* jsx */.Y)(Tournaments/* Tournaments */.d.Info.Rule, { children: ({ rules, loading }) => ((0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.tournamentRules, children: rules })) })] })) }) }) }) }), (0,jsxRuntime_module/* jsx */.Y)(GroupFooter, {})] }) })) }) }));
}
const GroupTournament = _GroupTournament;

;// ./src/module/moduleSetting/component/GroupTournament/index.tsx


;// ./src/module/moduleSetting/component/GroupFreebetsCompleted/GroupFreebetsCompleted.tsx






function _GroupFreebetsCompleted() {
    const { t } = (0,dist_es_index_js_.useTranslation)();
    return ((0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Connect, { modalName: "freebetsCompleted", children: ({ open, close, ...props }) => ((0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a, { ...props, preventCloseAll: true, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.freebetsCompleted, {
                    [style_module/* default */.A.freebetsCompletedOpen]: open,
                    [style_module/* default */.A.freebetsCompletedClose]: close,
                }), children: (0,jsxRuntime_module/* jsx */.Y)(Freebets/* Freebets */.h.Completed, { children: ({ titleCongratulations, titlePayout, titleTotal, total, currency, payout }) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.freebetsCompletedInner, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.freebetsCompletedLabel, style_module/* default */.A.freebetsCompletedLabelWin, style_module/* default */.A.freebetsCompletedLabelTop) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.freebetsCompletedLabel, style_module/* default */.A.freebetsCompletedLabelWin, style_module/* default */.A.freebetsCompletedLabelBottom) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.freebetsCompletedLabel, style_module/* default */.A.freebetsCompletedLabelCongrat, style_module/* default */.A.freebetsCompletedLabelLeft) }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.freebetsCompletedLabel, style_module/* default */.A.freebetsCompletedLabelCongrat, style_module/* default */.A.freebetsCompletedLabelRight) }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.freebetsCompletedCongrat, children: [titleCongratulations, (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.freebetsCompletedCongratLayer, children: titleCongratulations })] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.freebetsCompletedTitle, children: [titlePayout, ":"] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.freebetsCompletedValue, children: [payout, " ", currency] }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.freebetsCompletedDescription, children: [total, " ", titleTotal] }), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Close, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.freebetsCompletedButton, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.secondaryButton, children: t('COMMON.OK') }) }) })] })) }) }) })) }));
}
const GroupFreebetsCompleted = _GroupFreebetsCompleted;

;// ./src/module/moduleSetting/component/GroupFreebetsCompleted/index.tsx


// EXTERNAL MODULE: ./src/framework/constants/cidSettings.ts
var cidSettings = __webpack_require__(79260);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
;// ./src/module/moduleSetting/component/GroupBetLikesListener/GroupBetLikesListener.tsx





function _GroupBetLikesListener() {
    const { profileCommon: { profile: { token }, }, uiCommon: { postMessage, errorCodeResolver, addLastBetAction }, } = (0,bootstrap.GET_STORE)();
    (0,hooks_module_js_.useEffect)(() => {
        try {
            if (postMessage?.data?.type === 'betLike') {
                const { betId, customerId, playerId, action } = postMessage.data?.data;
                const playersLikes = localStorageHelper/* default */.A.get('players_likes');
                const playersLikesArr = JSON.parse(playersLikes) || [];
                const newArray = action === 'like' ? [...playersLikesArr, betId] : playersLikesArr.filter((item) => item !== betId);
                localStorageHelper/* default */.A.set('players_likes', JSON.stringify(newArray));
                if (action === 'like') {
                    (0,api/* likeRequest */.Do)({
                        authorization: token,
                    }, {
                        token,
                        ticketId: betId,
                        customerId: Number(customerId),
                        playerId,
                    });
                }
                else {
                    (0,api/* unlikeRequest */.EM)({
                        authorization: token,
                    }, {
                        token,
                        ticketId: betId,
                        customerId,
                        playerId,
                    });
                }
                addLastBetAction({ betId, action });
            }
        }
        catch (error) {
            console.log('RequestError', error);
        }
    }, [postMessage]);
    return null;
}
const GroupBetLikesListener = (0,es_index_js_.observer)(_GroupBetLikesListener);

;// ./src/module/moduleSetting/component/GroupBetLikesListener/index.tsx


// EXTERNAL MODULE: ./src/framework/components/GameDisabled/index.tsx + 1 modules
var GameDisabled = __webpack_require__(27243);
;// ./src/module/moduleSetting/component/GroupGameDisabled/GroupGameDisabled.tsx






function _GroupGameDisabled() {
    return ((0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Connect, { modalName: "gameIsDisabled", children: ({ open, close, ...props }) => ((0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a, { ...props, children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.exit, {
                    [style_module/* default */.A.exitOpen]: open,
                    [style_module/* default */.A.exitClose]: close,
                }), children: (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Content, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.exitInner, children: (0,jsxRuntime_module/* jsx */.Y)(GameDisabled/* GameDisabled */.h, { children: ({ title, description, titleRefresh, titleBack }) => ((0,jsxRuntime_module/* jsxs */.FD)(jsxRuntime_module/* Fragment */.FK, { children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.exitTitle, children: title }), (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.exitDescription, children: description }), (0,jsxRuntime_module/* jsxs */.FD)("div", { className: style_module/* default */.A.exitButtons, children: [(0,jsxRuntime_module/* jsx */.Y)("div", { className: index_js_default()(style_module/* default */.A.primaryButton, style_module/* default */.A.primaryButtonRed), onClick: () => history.back(), children: titleBack }), (0,jsxRuntime_module/* jsx */.Y)(Modal/* Modal */.a.Submit, { children: (0,jsxRuntime_module/* jsx */.Y)("div", { className: style_module/* default */.A.secondaryButton, children: titleRefresh }) })] })] })) }) }) }) }) })) }));
}
const GroupGameDisabled = (0,es_index_js_.observer)(_GroupGameDisabled);

;// ./src/module/moduleSetting/component/GroupGameDisabled/index.tsx


;// ./src/module/moduleSetting/ModuleSetting.tsx











const ModuleSetting_Context = (0,preact_module_js_.createContext)({});
function _ModuleSetting({ logoImg, guide = null }) {
    if (!(0,bootstrap.GET_GAME_CONFIG)().module)
        return null;
    if (!(0,bootstrap.GET_GAME_CONFIG)().module.moduleLayout)
        return null;
    const config = (0,bootstrap.GET_GAME_CONFIG)();
    const settings = config.module.moduleSetting;
    if (cidSettings/* isFortuneCoin */.r) {
        if (settings.mybets) {
            settings.mybets = false;
        }
        if (settings.mybetsinfo) {
            settings.mybetsinfo = false;
        }
    }
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,jsxRuntime_module/* jsxs */.FD)(ModuleSetting_Context.Provider, { value: { config, settings }, children: [(0,jsxRuntime_module/* jsx */.Y)(GroupModal, { logoImg: logoImg, guide: guide }), (0,jsxRuntime_module/* jsx */.Y)(GroupGameDisabled, {}), (0,jsxRuntime_module/* jsx */.Y)(GroupAlert, {}), settings.exit && (0,jsxRuntime_module/* jsx */.Y)(GroupExitGame, {}), settings.tournaments && (0,jsxRuntime_module/* jsx */.Y)(GroupTournament, {}), settings.freebets && (0,jsxRuntime_module/* jsx */.Y)(GroupFreebetsCompleted, {}), (0,jsxRuntime_module/* jsx */.Y)(GroupBetLikesListener, {})] }) }));
}
const ModuleSetting = _ModuleSetting;


/***/ })

}]);