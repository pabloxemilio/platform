"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[8445],{

/***/ 87227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X: () => (/* reexport */ Animation)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
;// ./src/framework/components/AnimationEvents/AnimationEvents.tsx



function _AnimationEvents({ children, id, duration = 1000, delay = 0, callbackRun = () => { }, callbackEnd = () => { }, }) {
    const { uiCommon: { animationEvents, animationEventsInit }, } = (0,bootstrap.GET_STORE)();
    const animationEvent = animationEventsInit(id, {
        duration,
        delay,
        callbackRun,
        callbackEnd,
    });
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(animationEvent(animationEvents)) });
}
const AnimationEvents = (0,index_js_.observer)(_AnimationEvents);

;// ./src/framework/components/AnimationEvents/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/animate.ts
var animate = __webpack_require__(93974);
;// ./src/framework/components/Animation/Animation.tsx




const timingFunctions = {
    linear: animate/* linear */.sn,
    makeEaseOut: (0,animate/* makeEaseOut */.L4)(animate/* easeOutCubic */.p_),
    easeOutCubic: animate/* easeOutCubic */.p_,
};
function _Animation({ children, duration = 1000, delay = 0, timingFunction = 'linear' }) {
    const [progress, setProgress] = (0,hooks_module_js_.useState)(0);
    (0,hooks_module_js_.useEffect)(() => {
        let a;
        const timeout = setTimeout(() => {
            a = (0,animate/* animate */.i0)({
                duration,
                timing: timingFunctions[timingFunction],
                draw: function (progress) {
                    setProgress(progress);
                },
            });
        }, delay);
        return () => {
            clearTimeout(timeout);
            a?.stop();
        };
    }, []);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ progress }) });
}
const Animation = Object.assign(_Animation, {
    Events: AnimationEvents,
});

;// ./src/framework/components/Animation/index.tsx



/***/ }),

/***/ 71548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* reexport */ Copy)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
;// ./src/framework/helpers/copyToClipboard.ts
function copyToClipboard(text) {
    const { clipboardData } = window;
    if (clipboardData && clipboardData.setData) {
        return clipboardData.setData("Text", text);
    }
    else if (document.queryCommandSupported &&
        document.queryCommandSupported("copy")) {
        const textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}

;// ./src/framework/components/Copy/Copy.tsx



function _Copy({ children, text, onClick = () => { } }) {
    const handleClick = (e) => {
        copyToClipboard(text);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const Copy = _Copy;

;// ./src/framework/components/Copy/index.tsx



/***/ }),

/***/ 89979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* reexport */ PageLabel)
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
// EXTERNAL MODULE: ./src/framework/constants/index.ts
var constants = __webpack_require__(49865);
;// ./src/framework/components/PageLabelDemo/PageLabelDemo.tsx






function _PageLabelDemo({ children, style }) {
    const { profileCommon: { profile: { apiKey }, }, } = (0,bootstrap.GET_STORE)();
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('no_demo_label'))
        return null;
    const [show, setShow] = (0,hooks_module_js_.useState)(false);
    (0,hooks_module_js_.useMemo)(() => {
        setShow(apiKey === constants/* demoCID */.Qc);
    }, [apiKey]);
    if (show)
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, { style })) });
    return null;
}
const PageLabelDemo = (0,index_js_.observer)(_PageLabelDemo);

;// ./src/framework/components/PageLabelDemo/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
;// ./src/framework/components/PageLabelOther/PageLabelOther.tsx



function _PageLabelOther({ children, time = 1000, localstorage }) {
    const [show, setShow] = (0,hooks_module_js_.useState)(true);
    (0,hooks_module_js_.useMemo)(() => {
        if (localstorage) {
            const isNull = localStorageHelper/* default */.A.get(localstorage);
            if (isNull !== null)
                return setShow(false);
            localStorageHelper/* default */.A.set(localstorage, 'true');
            setTimeout(() => {
                setShow(false);
            }, time);
            return;
        }
        setTimeout(() => {
            setShow(false);
        }, time);
    }, []);
    if (show)
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const PageLabelOther = _PageLabelOther;

;// ./src/framework/components/PageLabelOther/index.tsx


;// ./src/framework/components/PageLabel/PageLabel.tsx



function _PageLabel({ children }) {
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const PageLabel = Object.assign(_PageLabel, {
    Demo: PageLabelDemo,
    Other: PageLabelOther,
});

;// ./src/framework/components/PageLabel/index.tsx



/***/ }),

/***/ 98445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Alert: () => (/* reexport */ Alert/* Alert */.F),
  Animation: () => (/* reexport */ Animation/* Animation */.X),
  Balance: () => (/* reexport */ Balance),
  ClientComponentsResolver: () => (/* reexport */ ClientComponentsResolver),
  Copy: () => (/* reexport */ Copy/* Copy */.Q),
  Draggable: () => (/* reexport */ Draggable),
  ExitGame: () => (/* reexport */ ExitGame/* ExitGame */.N),
  Freebets: () => (/* reexport */ Freebets/* Freebets */.h),
  GameDisabled: () => (/* reexport */ GameDisabled/* GameDisabled */.h),
  GrowingNumber: () => (/* reexport */ GrowingNumber),
  GrowingNumberFromValue: () => (/* reexport */ GrowingNumberFromValue),
  Header: () => (/* reexport */ Header/* Header */.Y),
  InputName: () => (/* reexport */ InputName/* InputName */.c),
  InputNumber: () => (/* reexport */ InputNumber),
  InputRange: () => (/* reexport */ InputRange/* InputRange */.Q),
  InputToggle: () => (/* reexport */ InputToggle/* InputToggle */.J),
  IsOnline: () => (/* reexport */ IsOnline),
  KeyboardV2: () => (/* reexport */ KeyboardV2),
  Language: () => (/* reexport */ Language),
  Limit: () => (/* reexport */ Limit/* Limit */.I),
  Loading: () => (/* reexport */ Loading),
  Modal: () => (/* reexport */ Modal/* Modal */.a),
  MyBetInfo: () => (/* reexport */ MyBetInfo/* MyBetInfo */.i),
  MyBets: () => (/* reexport */ MyBets/* MyBets */.B),
  MyBetsInfo: () => (/* reexport */ MyBetsInfo/* MyBetsInfo */.D),
  Odometer: () => (/* reexport */ Odometer),
  PageConnectRatio: () => (/* reexport */ PageConnectRatio),
  PageDisabled: () => (/* reexport */ PageDisabled),
  PageLabel: () => (/* reexport */ PageLabel/* PageLabel */.E),
  PageRatio: () => (/* reexport */ PageRatio),
  QuickMode: () => (/* reexport */ QuickMode),
  RangeSlider: () => (/* reexport */ RangeSlider),
  RatesConverter: () => (/* reexport */ RatesConverter),
  Rules: () => (/* reexport */ Rules/* Rules */.i),
  Select: () => (/* reexport */ Select),
  Setting: () => (/* reexport */ Setting/* Setting */.B),
  Text: () => (/* reexport */ Text/* Text */.E),
  TextSizeV2: () => (/* reexport */ TextSizeV2/* TextSizeV2 */.B),
  Timer: () => (/* reexport */ Timer/* Timer */.M),
  Tournaments: () => (/* reexport */ Tournaments/* Tournaments */.d),
  Transition: () => (/* reexport */ Transition)
});

// EXTERNAL MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var jsxRuntime_module = __webpack_require__(10201);
// EXTERNAL MODULE: ./src/bootstrap/index.ts + 5 modules
var bootstrap = __webpack_require__(22701);
// EXTERNAL MODULE: consume shared module (default) mobx-react-lite@^3.4.3 (singleton) (fallback: ./node_modules/mobx-react-lite/es/index.js)
var index_js_ = __webpack_require__(90);
// EXTERNAL MODULE: ./src/framework/hooks/useRatio.ts
var useRatio = __webpack_require__(57132);
;// ./src/framework/components/PageRatio/PageRatio.tsx




const PageRatio = (0,index_js_.observer)(({ children, config }) => {
    const { uiCommon: { setPageRatio }, } = (0,bootstrap.GET_STORE)();
    const ratio = (0,useRatio/* useRatio */.Z)(config);
    setPageRatio(ratio);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children(ratio) });
});

;// ./src/framework/components/PageRatio/index.tsx


// EXTERNAL MODULE: consume shared module (default) preact@^10.15.1 (singleton) (fallback: ./node_modules/preact/dist/preact.module.js)
var preact_module_js_ = __webpack_require__(31917);
// EXTERNAL MODULE: consume shared module (default) preact/hooks@^10.15.1 (singleton) (fallback: ./node_modules/preact/hooks/dist/hooks.module.js)
var hooks_module_js_ = __webpack_require__(57888);
// EXTERNAL MODULE: consume shared module (default) uuid@^9.0.0 (strict) (fallback: ./node_modules/uuid/dist/esm-browser/index.js)
var esm_browser_index_js_ = __webpack_require__(81682);
// EXTERNAL MODULE: ./src/framework/helpers/gtmDataLayerPush.ts
var gtmDataLayerPush = __webpack_require__(21714);
;// ./src/framework/components/InputNumberInput/InputNumberInput.tsx







function _InputNumberInput({ children, onChange = () => { }, onClick = () => { }, onFocus = () => { }, onBlur = () => { }, onKeyDown = () => { }, }) {
    const { uiCommon: { isMobile }, } = (0,bootstrap.GET_STORE)();
    const { id, prefix, value, setValue, min, mask, readonly, isFocusable, autoWidth, autoFontSize, disabled, onFocus: onFocusContext, gtmAction, pushGtmDataOnValueChange, } = (0,hooks_module_js_.useContext)(Context);
    const [isFocused, setIsFocused] = (0,hooks_module_js_.useState)(false);
    const [onFocusValueValue, setOnFocusValueValue] = (0,hooks_module_js_.useState)(value);
    if (pushGtmDataOnValueChange && gtmAction) {
        (0,hooks_module_js_.useEffect)(() => {
            if (isFocused) {
                setOnFocusValueValue(value);
            }
            if (!isFocused) {
                if (onFocusValueValue !== value) {
                    (0,gtmDataLayerPush/* default */.A)({
                        action: gtmAction,
                        parameters: {
                            value: value,
                        },
                    });
                }
            }
        }, [isFocused]);
    }
    const inputRef = (0,hooks_module_js_.useRef)();
    const handleKeyDown = (e) => {
        if (e.target instanceof HTMLInputElement) {
            const digits = '0123456789';
            const allowKeys = [
                8, 13, 27, 37, 39, 46, 188, 190, 191, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 110,
            ];
            const key = String.fromCharCode(e.keyCode);
            if (!digits.includes(key) && !allowKeys.includes(e.keyCode)) {
                e.preventDefault();
            }
            if (isMobile && e.keyCode === 13) {
                if (!inputRef || !inputRef.current)
                    return;
                inputRef.current.blur();
            }
        }
        onKeyDown(e);
    };
    const handleClick = (e) => {
        onClick(e);
    };
    const handleFocus = (e) => {
        if (!isFocusable) {
            inputRef.current.blur();
            return;
        }
        e.target.setSelectionRange(e.target.value.length, e.target.value.length);
        if (onFocusContext && typeof onFocusContext === 'function') {
            onFocusContext();
        }
        setIsFocused(true);
        onFocus(e);
    };
    const handleBlur = (e) => {
        if (e.target instanceof HTMLInputElement) {
            if (min && Number(mask(e.target.value)) <= min) {
                setValue(String(min), true);
            }
            else {
                setValue(e.target.value, true);
            }
        }
        setIsFocused(false);
        onBlur(e);
    };
    const handleChange = (e) => {
        if (e.target instanceof HTMLInputElement) {
            setValue(e.target.value);
            e.target.value = `${prefix}${mask(e.target.value)}`;
        }
        onChange(e);
    };
    if (autoWidth && inputRef.current) {
        inputRef.current.style.width = `${prefix}${mask(value)}`.length + 1 + 'ch';
    }
    if (typeof autoFontSize === 'number') {
        if (inputRef.current) {
            inputRef.current.style.removeProperty('font-size');
            const fontSize = window.getComputedStyle(inputRef.current).fontSize;
            const textLength = `${prefix}${mask(value)}`.length;
            if (textLength > autoFontSize) {
                const newFontSize = (autoFontSize * parseInt(fontSize)) / textLength;
                inputRef.current.style.fontSize = `${newFontSize}px`;
            }
        }
    }
    (0,hooks_module_js_.useEffect)(() => {
        return () => {
            if (inputRef.current instanceof HTMLInputElement) {
                if (min && Number(mask(inputRef.current.value)) <= min) {
                    setValue(String(min));
                }
            }
        };
    }, []);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
            onFocus: handleFocus,
            onChange: handleChange,
            onBlur: handleBlur,
            onKeyDown: handleKeyDown,
            value: `${prefix}${mask(value)}`,
            id,
            type: 'text',
            inputMode: 'decimal',
            autoComplete: 'off',
            spellcheck: false,
            tabIndex: -1,
            readonly,
            disabled,
            ref: (node) => {
                if (node instanceof HTMLInputElement)
                    inputRef.current = node;
                const { ref } = child;
                if (typeof ref === 'function')
                    ref(node);
                else if (ref)
                    ref.current = node;
            },
        })) }));
}
const InputNumberInput = (0,index_js_.observer)(_InputNumberInput);

;// ./src/framework/components/InputNumberInput/index.tsx


;// ./src/framework/components/InputNumberLabel/InputNumberLabel.tsx




function _InputNumberLabel({ children }) {
    const { id } = (0,hooks_module_js_.useContext)(Context);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            for: id,
        })) }));
}
const InputNumberLabel = _InputNumberLabel;

;// ./src/framework/components/InputNumberLabel/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/truncateDecimals.ts
var truncateDecimals = __webpack_require__(12215);
;// ./src/framework/components/InputNumberButtons/InputNumberButtons.tsx





const ContextButtons = (0,preact_module_js_.createContext)({});
function _InputNumberButtons({ children, step = undefined }) {
    const [buttonsParam, setButtonsParam] = (0,hooks_module_js_.useState)({});
    const { setValue, min, max, value, disabled, toFixed, connectBalance, onError } = buttonsParam;
    const hundleCustom = (value) => {
        if (!isNaN(value)) {
            setValue(String(value));
        }
    };
    const hundleMin = () => {
        setValue(String(connectBalance === 0 ? 0 : min));
    };
    const hundleMax = () => {
        setValue(String(max));
    };
    const hundleMinus = () => {
        const s = getStep(false);
        const v = value - s;
        const d = v <= min ? (connectBalance === 0 ? 0 : min) : v;
        if (v < min) {
            onError('min');
        }
        setValue(String((0,truncateDecimals/* default */.A)(Number(Number(d).toFixed(2)), minLength())));
    };
    const hundlePlus = () => {
        const s = getStep(true);
        const v = value + s;
        const d = v >= max ? max : v;
        if (v > max) {
            onError('max');
        }
        setValue(String((0,truncateDecimals/* default */.A)(Number(d.toFixed(2)), minLength())));
    };
    const hundleX2 = () => {
        if (value * 2 > max) {
            onError('max');
            return;
        }
        setValue(String(value * 2));
    };
    const hundled2 = () => {
        if (value / 2 < min) {
            onError('min');
            return;
        }
        setValue(String(value / 2));
    };
    const getStep = (inc = true) => {
        let s = min;
        if (inc ? value >= 0.01 && value < 0.1 : value > 0.01 && value <= 0.1) {
            s = 0.01;
        }
        else if (inc ? value >= 0.1 && value < 1 : value > 0.1 && value <= 1) {
            s = 0.1;
        }
        else if (inc ? value >= 1 && value < 10 : value > 1 && value <= 10) {
            s = 1;
        }
        else if (inc ? value >= 10 && value < 100 : value > 10 && value <= 100) {
            s = 10;
        }
        else if (inc ? value >= 100 && value < 1000 : value > 100 && value <= 1000) {
            s = 100;
        }
        else if (inc ? value >= 1000 && value < 10000 : value > 1000 && value <= 10000) {
            s = 1000;
        }
        else if (inc ? value >= 10000 && value < 100000 : value > 10000 && value <= 100000) {
            s = 10000;
        }
        else if (value > 1) {
            s = 100000;
        }
        const isRound = s < 1 ? 0 : (value + s) % s;
        if (inc) {
            s = isRound > 0 ? s - isRound : s;
        }
        if (!inc) {
            s = isRound > 0 ? isRound : s;
        }
        if (typeof step === 'function') {
            s = step({ value, min, max, inc });
        }
        return s;
    };
    const minLength = () => {
        if (toFixed)
            return toFixed;
        if (!String(min).includes('.'))
            return 0;
        const m = String(min).split('.');
        return m[m.length - 1].length;
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(ContextButtons.Provider, { value: {
            setButtonsParam,
            hundleCustom,
            hundleMin,
            hundleMax,
            hundleMinus,
            hundlePlus,
            hundleX2,
            hundled2,
            min,
            max,
            value,
            disabled,
        }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children }) }));
}
const InputNumberButtons = (0,index_js_.observer)(_InputNumberButtons);

;// ./src/framework/components/InputNumberButtons/index.tsx


;// ./src/framework/components/InputNumberButtonsMinus/InputNumberButtonsMinus.tsx




function _InputNumberButtonsMinus({ children, onClick = () => { } }) {
    const { hundleMinus, min, value, disabled } = (0,hooks_module_js_.useContext)(ContextButtons);
    const handleClick = (e) => {
        if (disabled)
            return;
        hundleMinus();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled: value <= min,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const InputNumberButtonsMinus = _InputNumberButtonsMinus;

;// ./src/framework/components/InputNumberButtonsMinus/index.tsx


;// ./src/framework/components/InputNumberButtonsPlus/InputNumberButtonsPlus.tsx




function _InputNumberButtonsPlus({ children, onClick = () => { } }) {
    const { hundlePlus, max, value, disabled } = (0,hooks_module_js_.useContext)(ContextButtons);
    const handleClick = (e) => {
        if (disabled)
            return;
        hundlePlus();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled: value >= max,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const InputNumberButtonsPlus = _InputNumberButtonsPlus;

;// ./src/framework/components/InputNumberButtonsPlus/index.tsx


;// ./src/framework/components/InputNumberButtonsMin/InputNumberButtonsMin.tsx




function _InputNumberButtonsMin({ children, onClick = () => { } }) {
    const { hundleMin, min, value, disabled } = (0,hooks_module_js_.useContext)(ContextButtons);
    const handleClick = (e) => {
        if (disabled)
            return;
        hundleMin();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled: value <= min,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const InputNumberButtonsMin = _InputNumberButtonsMin;

;// ./src/framework/components/InputNumberButtonsMin/index.tsx


;// ./src/framework/components/InputNumberButtonsMax/InputNumberButtonsMax.tsx




function _InputNumberButtonsMax({ children, onClick = () => { } }) {
    const { hundleMax, max, value, disabled } = (0,hooks_module_js_.useContext)(ContextButtons);
    const handleClick = (e) => {
        if (disabled)
            return;
        hundleMax();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled: value >= max,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const InputNumberButtonsMax = _InputNumberButtonsMax;

;// ./src/framework/components/InputNumberButtonsMax/index.tsx


;// ./src/framework/components/InputNumberButtonsX2/InputNumberButtonsX2.tsx




function _InputNumberButtonsX2({ children, onClick = () => { } }) {
    const { hundleX2, max, value, disabled } = (0,hooks_module_js_.useContext)(ContextButtons);
    const handleClick = (e) => {
        if (disabled)
            return;
        hundleX2();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled: value * 2 >= max,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const InputNumberButtonsX2 = _InputNumberButtonsX2;

;// ./src/framework/components/InputNumberButtonsX2/index.tsx


;// ./src/framework/components/InputNumberButtonsD2/InputNumberButtonsD2.tsx




function _InputNumberButtonsD2({ children, onClick = () => { } }) {
    const { hundled2, min, value, disabled } = (0,hooks_module_js_.useContext)(ContextButtons);
    const handleClick = (e) => {
        if (disabled)
            return;
        hundled2();
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled: value / 2 < min,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const InputNumberButtonsD2 = _InputNumberButtonsD2;

;// ./src/framework/components/InputNumberButtonsD2/index.tsx


;// ./src/framework/components/InputNumberButtonsCustom/InputNumberButtonsCustom.tsx




function _InputNumberButtonsCustom({ children, onClick = () => { }, targetValue = 0 }) {
    const { hundleCustom, max, value, min, disabled } = (0,hooks_module_js_.useContext)(ContextButtons);
    const handleClick = (e) => {
        if (disabled)
            return;
        hundleCustom(targetValue);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            disabled: value >= max || value <= min,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const InputNumberButtonsCustom = _InputNumberButtonsCustom;

;// ./src/framework/components/InputNumberButtonsCustom/index.tsx


;// ./src/framework/components/InputNumber/InputNumber.tsx














const Context = (0,preact_module_js_.createContext)({});
function _InputNumber({ children, defaultValue = 0, min = 0.01, max = 100, prefix = '', connectBalance, onChange = undefined, onBlur = undefined, onFocus = undefined, onChangeForAudio = undefined, readonly = false, isFocusable = true, autoWidth = false, autoFontSize = 10, toFixed = undefined, disabled = false, rounding = 2, gtmAction = '', pushGtmDataOnValueChange = false, userAuth, onError = () => { }, }) {
    const [id] = (0,hooks_module_js_.useState)((0,esm_browser_index_js_.v4)());
    const { setButtonsParam } = (0,hooks_module_js_.useContext)(ContextButtons);
    const [maxValue, setMaxValue] = (0,hooks_module_js_.useState)(max);
    const value = `${defaultValue}`;
    const setValue = (v, isBlur) => {
        const value = Number(mask(v));
        if (typeof onChange === 'function')
            onChange(value);
        if (typeof onBlur === 'function' && isBlur)
            onBlur(value);
        if (typeof onChangeForAudio === 'function' && value !== defaultValue)
            onChangeForAudio();
    };
    (0,hooks_module_js_.useEffect)(() => {
        setMaxValue(max);
    }, [max]);
    (0,hooks_module_js_.useEffect)(() => {
        if (typeof connectBalance !== 'number') {
            setMaxValue(max);
            return;
        }
        if (connectBalance < max) {
            setMaxValue(connectBalance === 0 ? min : connectBalance);
        }
        if (connectBalance >= max) {
            setMaxValue(max);
        }
    }, [connectBalance, defaultValue]);
    const defaultValueRef = (0,hooks_module_js_.useRef)(defaultValue);
    (0,hooks_module_js_.useEffect)(() => {
        if (userAuth !== undefined && !userAuth)
            return;
        if (connectBalance) {
            if (connectBalance >= min && defaultValueRef.current < min) {
                setValue(String(min));
            }
            else if (defaultValueRef.current >= connectBalance) {
                setValue(String(connectBalance));
            }
        }
    }, [connectBalance, userAuth]);
    (0,hooks_module_js_.useEffect)(() => {
        defaultValueRef.current = defaultValue;
    }, [defaultValue]);
    (0,hooks_module_js_.useEffect)(() => {
        if (typeof setButtonsParam !== 'function')
            return;
        setButtonsParam({
            min,
            max: maxValue,
            value: Number(mask(value)),
            setValue,
            disabled,
            toFixed: rounding,
            connectBalance,
            onError,
        });
    }, [value, maxValue, min, max, disabled]);
    const regexDigitsStr = `^(\\d{0,9})\\d*(\\.\\d{0,${rounding}}|\\d{0,3}).*`;
    const regexDigits = new RegExp(regexDigitsStr, 'g');
    const regexNonDigitsStr = !rounding ? /[^\d-]/g : /[^\d(.|,)-]/g;
    const regexNonDigits = new RegExp(regexNonDigitsStr, 'g');
    const mask = (value) => {
        let m = String(value)
            .replace(/\s/g, '')
            .replace(/^0{2,}/, '0')
            .replace(regexNonDigits, '')
            .replace(/,/g, '.')
            .replace(/^\./, '')
            .replace(/[.|,](?=.*[.|,])/g, '')
            .replace(regexDigits, '$1$2');
        if (maxValue && Number(m) >= Number(maxValue))
            m = String(maxValue);
        if (typeof toFixed === 'number')
            m = Number(m).toFixed(toFixed);
        return m;
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(Context.Provider, { value: {
            id,
            prefix,
            value,
            min,
            max: maxValue,
            setValue,
            mask,
            readonly,
            isFocusable,
            autoWidth,
            autoFontSize,
            disabled,
            onFocus,
            rounding,
            gtmAction,
            pushGtmDataOnValueChange,
        }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children }) }));
}
const InputNumber = Object.assign(_InputNumber, {
    Input: InputNumberInput,
    Label: InputNumberLabel,
    Buttons: Object.assign(InputNumberButtons, {
        Minus: InputNumberButtonsMinus,
        Plus: InputNumberButtonsPlus,
        Min: InputNumberButtonsMin,
        Max: InputNumberButtonsMax,
        X2: InputNumberButtonsX2,
        D2: InputNumberButtonsD2,
        Custom: InputNumberButtonsCustom,
    }),
});

;// ./src/framework/components/InputNumber/index.tsx


// EXTERNAL MODULE: ./src/framework/components/InputRange/index.tsx + 19 modules
var InputRange = __webpack_require__(23660);
// EXTERNAL MODULE: ./src/framework/components/InputToggle/index.tsx + 1 modules
var InputToggle = __webpack_require__(34673);
// EXTERNAL MODULE: ./src/framework/components/InputName/index.tsx + 7 modules
var InputName = __webpack_require__(25258);
;// ./src/framework/components/RangeSlider/RangeSlider.tsx



const RangeSlider_Context = (0,preact_module_js_.createContext)({});
const _RangeSlider = ({ defaultValue, onChange, onBlur, min = 0, max = 100, step = 0.01, minStatic, maxStatic, horizontalMode, verticalMode, valueMassMax, valueMassMaxReverse, children, enableClickOnTrack = false, }) => {
    const childrenRef = (0,hooks_module_js_.useRef)(null);
    const valueBuffer = (0,hooks_module_js_.useRef)(undefined);
    const handlersList = (0,hooks_module_js_.useRef)([]);
    const handleTargetIndex = (0,hooks_module_js_.useRef)(null);
    const [render, setRender] = (0,hooks_module_js_.useState)(0);
    const minRef = (0,hooks_module_js_.useRef)(min);
    const maxRef = (0,hooks_module_js_.useRef)(max);
    minRef.current = min;
    maxRef.current = max;
    const stepRef = (0,hooks_module_js_.useRef)(step);
    stepRef.current = step;
    const minStaticRef = (0,hooks_module_js_.useRef)(minStatic);
    const maxStaticRef = (0,hooks_module_js_.useRef)(maxStatic);
    minStaticRef.current = minStatic;
    maxStaticRef.current = maxStatic;
    const valueMassMaxRef = (0,hooks_module_js_.useRef)(valueMassMax);
    valueMassMaxRef.current = valueMassMax;
    const valueMassMaxReverseRef = (0,hooks_module_js_.useRef)(valueMassMaxReverse);
    valueMassMaxReverseRef.current = valueMassMaxReverse;
    (0,hooks_module_js_.useMemo)(() => {
        valueBuffer.current = defaultValue;
        updateHandlersList();
    }, []);
    (0,hooks_module_js_.useEffect)(() => {
        if (getValueType(defaultValue) === 'number' && getValueType(valueBuffer.current) === 'number') {
            if (defaultValue === valueBuffer.current)
                return;
            updateHandlersList();
            setRender(Date.now());
        }
        if (getValueType(defaultValue) === 'array' && getValueType(valueBuffer.current) === 'array') {
            const arrayComparison = defaultValue.every((item, index) => item === valueBuffer.current[index]);
            if (arrayComparison)
                return;
            updateHandlersList();
            setRender(Date.now());
        }
        if (getValueType(defaultValue) !== getValueType(valueBuffer.current)) {
            valueBuffer.current = defaultValue;
            updateHandlersList();
            setRender(Date.now());
        }
    }, [defaultValue]);
    (0,hooks_module_js_.useEffect)(() => {
        updateHandlersListProps();
    }, [min, max, minStatic, maxStatic, step, valueMassMax]);
    function startMoveHandle(event, isTrackClick = false) {
        event.preventDefault();
        if (event.type === 'mousedown') {
            document.addEventListener(isTrackClick ? 'mousedown' : 'mousemove', moveHandle);
            document.addEventListener('mouseup', stopMoveHandle);
        }
        else if (event.type === 'touchstart') {
            document.addEventListener('touchmove', moveHandle);
            document.addEventListener('touchend', stopMoveHandle);
        }
    }
    function stopMoveHandle(event) {
        handleTargetIndex.current = null;
        handleOnChange();
        handleOnBlur();
        setRender(Date.now());
        if (event.type === 'mouseup') {
            document.removeEventListener('mousemove', moveHandle);
            document.removeEventListener('mousedown', moveHandle);
            document.removeEventListener('mouseup', stopMoveHandle);
        }
        else if (event.type === 'touchend') {
            document.removeEventListener('touchmove', moveHandle);
            document.removeEventListener('touchend', stopMoveHandle);
        }
    }
    function moveHandle(event) {
        event.preventDefault();
        let position = 0;
        const { left, top, width, height } = childrenRef.current?.getBoundingClientRect();
        if (event.type === 'mousemove' || event.type === 'mousedown') {
            if (!horizontalMode && !verticalMode)
                position = event.clientX - left;
            if (horizontalMode === 'left')
                position = event.clientX - left;
            if (horizontalMode === 'right')
                position = width - (event.clientX - left);
            if (verticalMode === 'top')
                position = event.clientY - top;
            if (verticalMode === 'bottom')
                position = height - (event.clientY - top);
        }
        if (event.type === 'touchmove') {
            if (!horizontalMode && !verticalMode)
                position = event.touches[0].clientX - left;
            if (horizontalMode === 'left')
                position = event.touches[0].clientX - left;
            if (horizontalMode === 'right')
                position = width - (event.touches[0].clientX - left);
            if (verticalMode === 'top')
                position = event.touches[0].clientY - top;
            if (verticalMode === 'bottom')
                position = height - (event.touches[0].clientY - top);
        }
        let percent = pxToPercent(position, childrenRef, verticalMode);
        const percentMinStatic = valueToPercent(minStaticRef.current, minRef.current, maxRef.current);
        const percentMaxStatic = valueToPercent(maxStaticRef.current, minRef.current, maxRef.current);
        if (percent <= 0)
            percent = 0;
        if (percent >= 100)
            percent = 100;
        if (minStaticRef.current && percent < percentMinStatic)
            percent = percentMinStatic;
        if (maxStaticRef.current && percent > percentMaxStatic)
            percent = percentMaxStatic;
        handlersList.current[handleTargetIndex.current] = (() => {
            let value = Math.min(roundValue(percentToValue(percent, minRef.current, maxRef.current), stepRef.current), maxRef.current);
            function isCollision(value) {
                return handlersList.current.some((item, i) => item.value === value && i !== handleTargetIndex.current);
            }
            function findValue(value) {
                if (isCollision(value)) {
                    let diapasone = maxRef.current / 2;
                    if (minStaticRef.current)
                        diapasone = maxRef.current - minStaticRef.current / 2;
                    if (maxStaticRef.current)
                        diapasone = maxStaticRef.current / 2;
                    if (minStaticRef.current && maxStaticRef.current)
                        diapasone = (maxStaticRef.current - minStaticRef.current) / 2;
                    return findValue(value > diapasone
                        ? Number((value - stepRef.current).toFixed(2))
                        : Number((value + stepRef.current).toFixed(2)));
                }
                return value;
            }
            if (isCollision(value))
                value = findValue(value);
            if (valueMassMaxRef.current) {
                const values = handlersList.current
                    .map(({ value: _value }, index) => (index === handleTargetIndex.current ? value : _value))
                    .sort((a, b) => a - b);
                const { valueOfIndex } = getMass(values, values.indexOf(value), valueMassMaxRef.current, valueMassMaxReverseRef.current, maxRef.current, minRef.current, maxStaticRef.current, minStaticRef.current);
                if (valueOfIndex > 0) {
                    value = Math.min(roundValue(valueOfIndex, stepRef.current), maxRef.current);
                }
            }
            return {
                value,
                percent: Math.min(valueToPercent(value, minRef.current, maxRef.current), 100) + '%',
                index: handlersList.current.length + 2,
            };
        })();
        handleOnChange();
    }
    function handleOnChange() {
        const valueFromHandle = handlersList.current.map(({ value }) => value).sort((a, b) => a - b);
        if (getValueType(valueBuffer.current) === 'number') {
            if (valueBuffer.current === valueFromHandle[0])
                return;
            valueBuffer.current = valueFromHandle[0];
            onChange(valueFromHandle[0]);
        }
        if (getValueType(valueBuffer.current) === 'array') {
            const arrayComparison = valueFromHandle.every((item, index) => item === valueBuffer.current[index]);
            if (arrayComparison)
                return;
            valueBuffer.current = valueFromHandle;
            onChange(valueFromHandle);
        }
    }
    function handleOnBlur() {
        if (!onBlur)
            return;
        const valueFromHandle = handlersList.current.map(({ value }) => value).sort((a, b) => a - b);
        if (getValueType(valueBuffer.current) === 'number') {
            onBlur(valueFromHandle[0]);
        }
        if (getValueType(valueBuffer.current) === 'array') {
            onBlur(valueFromHandle);
        }
    }
    function updateHandlersList() {
        if (handleTargetIndex.current !== null)
            return;
        handlersList.current = getValue(defaultValue, min, max, minStatic, maxStatic, step).map((value, index) => {
            if (handleTargetIndex.current === index)
                return handlersList.current[index];
            return {
                value,
                percent: valueToPercent(value, min, max) + '%',
                index: 1,
            };
        });
        handleOnChange();
    }
    function updateHandlersListProps() {
        handlersList.current = getValue(defaultValue, min, max, minStatic, maxStatic, step).map((value, index) => {
            if (handleTargetIndex.current === index)
                return handlersList.current[index];
            return {
                value,
                percent: valueToPercent(value, min, max) + '%',
                index: 1,
            };
        });
        if (handleTargetIndex.current !== null)
            return;
        handleOnChange();
    }
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,jsxRuntime_module/* jsx */.Y)(RangeSlider_Context.Provider, { value: { handlersList, handleTargetIndex, startMoveHandle, horizontalMode, verticalMode, min, max }, children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
                ref: (node) => {
                    if (node instanceof HTMLElement)
                        childrenRef.current = node;
                },
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                },
                onmousedown: (e) => {
                    if (!enableClickOnTrack)
                        return null;
                    handleTargetIndex.current = 0;
                    startMoveHandle(e, true);
                },
            })) }) }));
};
const _RangeSliderHandle = ({ children }) => {
    const { handlersList, handleTargetIndex, startMoveHandle, horizontalMode, verticalMode } = (0,hooks_module_js_.useContext)(RangeSlider_Context);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: handlersList.current.map(({ value, percent }, index, arr) => {
            const zIndex = arr
                .map((item) => item.value)
                .sort((a, b) => a - b)
                .indexOf(value) + 1;
            return (0,preact_module_js_.toChildArray)(children({ value: value.toFixed(2), index, isActive: handleTargetIndex.current === index })).map((child) => (0,preact_module_js_.cloneElement)(child, {
                style: {
                    position: 'absolute',
                    zIndex,
                    ...(handleTargetIndex.current === index && { zIndex: handlersList.current.length + 2 }),
                    ...(!horizontalMode && !verticalMode && { transform: `translateX(-50%)`, left: percent }),
                    ...(horizontalMode === 'left' && { transform: `translateX(-50%)`, left: percent }),
                    ...(horizontalMode === 'right' && { transform: `translateX(50%)`, right: percent }),
                    ...(verticalMode === 'top' && { transform: `translateY(-50%)`, top: percent }),
                    ...(verticalMode === 'bottom' && { transform: `translateY(50%)`, bottom: percent }),
                },
                onmousedown: (e) => {
                    handleTargetIndex.current = index;
                    startMoveHandle(e);
                },
                ontouchstart: (e) => {
                    handleTargetIndex.current = index;
                    startMoveHandle(e);
                },
            }));
        }) }));
};
const _RangeSliderTrack = ({ children }) => {
    const { handlersList, horizontalMode, verticalMode, min, max } = (0,hooks_module_js_.useContext)(RangeSlider_Context);
    const arrSorted = [
        ...handlersList.current,
        {
            value: max,
            percent: '100%',
        },
    ].sort((a, b) => a.value - b.value);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: arrSorted.map(({ value, percent }, index, arr) => {
            let start = '0%';
            let end = '0%';
            if (index === 0) {
                end = percent;
            }
            if (index > 0) {
                const _start = valueToPercent(arr[index - 1].value, min, max);
                const _end = valueToPercent(value, min, max);
                start = _start + '%';
                end = _end - _start + '%';
            }
            return (0,preact_module_js_.toChildArray)(children({ index })).map((child) => (0,preact_module_js_.cloneElement)(child, {
                style: {
                    position: 'absolute',
                    ...(!horizontalMode && !verticalMode && { left: start, width: end }),
                    ...(horizontalMode === 'left' && { left: start, width: end }),
                    ...(horizontalMode === 'right' && { right: start, width: end }),
                    ...(verticalMode === 'top' && { top: start, height: end }),
                    ...(verticalMode === 'bottom' && { bottom: start, height: end }),
                },
            }));
        }) }));
};
function getValueType(value) {
    if (typeof value === 'number')
        return 'number';
    if (Array.isArray(value))
        return 'array';
    return undefined;
}
function getValue(value, min, max, minStatic, maxStatic, step) {
    let v = [];
    if (getValueType(value) === 'number')
        v = [value];
    if (getValueType(value) === 'array')
        v = value;
    v = v
        .map((value) => {
        let correct = value;
        if (value < min)
            correct = min;
        if (value > max)
            correct = max;
        if (minStatic && value < minStatic)
            correct = minStatic;
        if (maxStatic && value > maxStatic)
            correct = maxStatic;
        return correct;
    })
        .sort((a, b) => a - b)
        .map((value, index, arr) => {
        if (value !== arr[index - 1])
            return value;
        const findCount = arr.filter((v, i) => v === value && i < index).length;
        let diapasone = max / 2;
        if (minStatic)
            diapasone = max - minStatic / 2;
        if (maxStatic)
            diapasone = maxStatic / 2;
        if (minStatic && maxStatic)
            diapasone = (maxStatic - minStatic) / 2;
        if (value <= diapasone)
            return Number((value + step * findCount).toFixed(2));
        if (value > diapasone)
            return Number((value - step * findCount).toFixed(2));
        return value;
    })
        .sort((a, b) => a - b);
    return v;
}
function pxToPercent(px, childrenRef, verticalMode) {
    const width = childrenRef.current?.offsetWidth || 0;
    const height = childrenRef.current?.offsetHeight || 0;
    const side = verticalMode ? height : width;
    const percent = (px / side) * 100;
    if (percent < 0)
        return 0;
    if (percent > 100)
        return 100;
    return percent;
}
function percentToValue(percent, min, max) {
    return min + (max - min) * (percent / 100);
}
function valueToPercent(value, min, max) {
    return ((value - min) / (max - min)) * 100;
}
function roundValue(value, step) {
    return Number((Math.round(value / step) * step).toFixed(2));
}
function getMass(values, index, valueMassMax, valueMassMaxReverse, max, min, maxStatic, minStatic) {
    let valueOfIndex = 0;
    if (values.length % 2 === 1) {
        const mass = values[values.length - 1];
        let diff = mass - valueMassMax;
        if (valueMassMaxReverse)
            diff = mass - (max - valueMassMax);
        if (!valueMassMaxReverse && diff > 0) {
            valueOfIndex = Math.min(values[index] - diff, max, maxStatic);
        }
        if (valueMassMaxReverse && diff < 0) {
            valueOfIndex = Math.max(values[index] - diff, min, minStatic);
        }
    }
    if (values.length % 2 === 0) {
        let mass = Math.abs(values.reduce((acc, value, index) => {
            if (index % 2 === 0)
                return acc + value;
            if (index % 2 === 1)
                return acc - value;
        }));
        let diff = mass - valueMassMax;
        if (valueMassMaxReverse)
            diff = mass - (max - valueMassMax);
        if (valueMassMaxReverse ? diff < 0 : diff > 0) {
            if (index % 2 === 0)
                valueOfIndex = Math.max(values[index] + diff, min, minStatic);
            if (index % 2 === 1)
                valueOfIndex = Math.min(values[index] - diff, max, maxStatic);
        }
    }
    return { valueOfIndex };
}
const RangeSlider = Object.assign(_RangeSlider, {
    Handle: _RangeSliderHandle,
    Track: _RangeSliderTrack,
});

;// ./src/framework/components/RangeSlider/index.tsx


// EXTERNAL MODULE: ./src/framework/components/Alert/index.tsx + 3 modules
var Alert = __webpack_require__(70757);
;// ./src/framework/components/Balance/Balance.tsx



function _Balance({ children }) {
    const { profileCommon: { profile: { balance, balanceLoad }, }, } = (0,bootstrap.GET_STORE)();
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ balance: Number(balance), balanceLoad }) });
}
const Balance = (0,index_js_.observer)(_Balance);

;// ./src/framework/components/Balance/index.tsx


;// ./src/framework/components/ClientComponentsResolver/ClientComponentsResolver.tsx


function _ClientComponentsResolver({ children, show, filters }) {
    const [showChildren, setShowChildren] = (0,hooks_module_js_.useState)(!show);
    (0,hooks_module_js_.useEffect)(() => {
        const { search } = window.location;
        const searchParams = new URLSearchParams(search);
        const cid = searchParams.get('cid');
        const sub = searchParams.get('sub_partner_id');
        const match = !!filters.find((item) => item.cid === cid && (!item.sub || item.sub === sub));
        setShowChildren(show ? match : !match);
    }, []);
    if (!showChildren)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const ClientComponentsResolver = _ClientComponentsResolver;

;// ./src/framework/components/ClientComponentsResolver/index.tsx


// EXTERNAL MODULE: ./src/framework/components/Copy/index.tsx + 2 modules
var Copy = __webpack_require__(71548);
// EXTERNAL MODULE: ./src/framework/components/ExitGame/index.tsx + 3 modules
var ExitGame = __webpack_require__(76060);
// EXTERNAL MODULE: ./src/framework/components/Header/index.tsx + 26 modules
var Header = __webpack_require__(1204);
// EXTERNAL MODULE: consume shared module (default) react-i18next@^13.0.1 (strict) (fallback: ./node_modules/react-i18next/dist/es/index.js)
var es_index_js_ = __webpack_require__(33204);
// EXTERNAL MODULE: ./src/framework/constants/index.ts
var constants = __webpack_require__(49865);
;// ./src/framework/components/Language/Language.tsx






function _Language({ children }) {
    const { profileCommon: { setLanguage, language, settings }, } = (0,bootstrap.GET_STORE)();
    const { t } = (0,es_index_js_.useTranslation)();
    const handleOnChange = (item) => {
        setLanguage(item.value);
    };
    const clearLocale = (locale) => {
        return locale.slice(0, 2);
    };
    const availableTranslations = (0,hooks_module_js_.useMemo)(() => {
        return settings.availableTranslations.map((item) => clearLocale(item));
    }, []);
    const list = (0,hooks_module_js_.useMemo)(() => {
        if (!availableTranslations.length)
            return constants/* languagesData */.od;
        return constants/* languagesData */.od.filter((item) => availableTranslations.includes(item.key));
    }, []);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            title: t('COMMON.LANGUAGE'),
            list: list,
            listKeyActive: clearLocale(language),
            onChange: handleOnChange,
        }) }));
}
const Language = (0,index_js_.observer)(_Language);

;// ./src/framework/components/Language/index.tsx


// EXTERNAL MODULE: ./src/framework/components/Limit/index.tsx + 1 modules
var Limit = __webpack_require__(47852);
;// ./src/framework/components/LoadingPreloader/LoadingPreloader.tsx




function _LoadingPreloader({ children }) {
    const { loading } = (0,hooks_module_js_.useContext)(Loading_Context);
    if (loading)
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            style: { zIndex: 99999999999 },
        })) }));
}
const LoadingPreloader = _LoadingPreloader;

;// ./src/framework/components/LoadingPreloader/index.tsx


;// ./src/framework/components/LoadingInner/LoadingInner.tsx



function _LoadingInner({ children }) {
    const { render, backgroundRender } = (0,hooks_module_js_.useContext)(Loading_Context);
    if (!render && !backgroundRender)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const LoadingInner = _LoadingInner;

;// ./src/framework/components/LoadingInner/index.tsx


;// ./src/framework/components/Loading/Loading.tsx






const Loading_Context = (0,preact_module_js_.createContext)({});
function _Loading({ children, assets = [], time = 0, backgroundRender, canvasReady }) {
    const [loading, setLoading] = (0,hooks_module_js_.useState)(false);
    const [render, setRender] = (0,hooks_module_js_.useState)(false);
    const [loadingAssets, setLoadingAssets] = (0,hooks_module_js_.useState)(0);
    const [loadingPreloader, setLoadingPreloader] = (0,hooks_module_js_.useState)(false);
    const timeoutRef = (0,hooks_module_js_.useRef)(null);
    const timeoutRenderRef = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        if (loading)
            return;
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);
        if (timeoutRenderRef.current)
            clearTimeout(timeoutRenderRef.current);
        timeoutRef.current = window.setTimeout(() => {
            setLoadingPreloader(true);
        }, time);
        timeoutRenderRef.current = window.setTimeout(() => {
            setRender(true);
        }, time > 0 ? time - time / 10 : time);
        const loader = new URLSearchParams(window.location.search).get('no_loader');
        setLoading(Boolean(loader));
        setRender(Boolean(loader));
    }, [time]);
    (0,hooks_module_js_.useEffect)(() => {
        if (loadingAssets < assets.length) {
            const preloadLink = document.createElement('link');
            preloadLink.href = assets[loadingAssets].url.split('?')[0];
            preloadLink.rel = 'preload';
            preloadLink.as = assets[loadingAssets].type;
            preloadLink.onload = () => {
                setLoadingAssets(loadingAssets + 1);
            };
            document.head.appendChild(preloadLink);
        }
    }, [loadingAssets]);
    (0,hooks_module_js_.useEffect)(() => {
        if (loadingAssets === assets.length && loadingPreloader)
            setLoading(true);
    }, [loadingAssets, loadingPreloader]);
    (0,hooks_module_js_.useEffect)(() => {
        if (canvasReady)
            setLoadingPreloader(true);
    }, [canvasReady]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!render)
            return;
        window.parent.postMessage({ type: 'gameLoaded' }, '*');
        (0,gtmDataLayerPush/* default */.A)({
            action: 'game_loaded',
            parameters: {
                value: +performance.now().toFixed(),
            },
        });
    }, [render]);
    return ((0,jsxRuntime_module/* jsx */.Y)(Loading_Context.Provider, { value: { loading, render, backgroundRender }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children }) }));
}
const Loading = Object.assign(_Loading, {
    Preloader: LoadingPreloader,
    Inner: LoadingInner,
});

;// ./src/framework/components/Loading/index.tsx


// EXTERNAL MODULE: ./src/framework/components/Modal/index.tsx + 11 modules
var Modal = __webpack_require__(55365);
// EXTERNAL MODULE: ./src/framework/components/MyBetInfo/index.tsx + 55 modules
var MyBetInfo = __webpack_require__(66837);
// EXTERNAL MODULE: ./src/framework/components/MyBets/index.tsx + 1 modules
var MyBets = __webpack_require__(57865);
// EXTERNAL MODULE: ./src/framework/components/MyBetsInfo/index.tsx + 1 modules
var MyBetsInfo = __webpack_require__(81272);
;// ./src/framework/components/PageConnectRatio/PageConnectRatio.tsx


function _PageConnectRatio({ children }) {
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            style: {
                position: 'initial',
                inset: 'initial',
                width: 'initial',
                height: 'initial',
                minWidth: 'initial',
                minHeight: 'initial',
                overflow: 'initial',
                margin: 'initial',
                padding: 'initial',
                border: 'initial',
            },
            id: 'connectRatioElement',
        })) }));
}
const PageConnectRatio = _PageConnectRatio;

;// ./src/framework/components/PageConnectRatio/index.tsx


;// ./src/framework/components/PageDisabled/PageDisabled.tsx



function _PageDisabled({ children }) {
    const { uiCommon: { pageDisabled }, } = (0,bootstrap.GET_STORE)();
    if (pageDisabled)
        return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
    return null;
}
const PageDisabled = (0,index_js_.observer)(_PageDisabled);

;// ./src/framework/components/PageDisabled/index.tsx


// EXTERNAL MODULE: ./src/framework/components/PageLabel/index.tsx + 5 modules
var PageLabel = __webpack_require__(89979);
// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
// EXTERNAL MODULE: ./src/framework/helpers/currencyFix.ts
var currencyFix = __webpack_require__(80599);
// EXTERNAL MODULE: ./src/framework/helpers/ratesConverter.ts
var ratesConverter = __webpack_require__(37288);
;// ./src/framework/components/RatesConverter/RatesConverter.tsx






function _RatesConverter({ children, value: payout, currency: betCurrency }) {
    const { profileCommon: { profile: { currency, currencySign, rounding }, rates, }, } = (0,bootstrap.GET_STORE)();
    const valueConverted = (0,ratesConverter/* default */.A)(rates, betCurrency, (0,currencyFix/* default */.A)(currency), payout);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            value: valueConverted,
            valueShort: (0,shortNumber/* default */.A)(valueConverted),
            valueShortRounded: (0,shortNumber/* default */.A)((0,ratesConverter/* default */.A)(rates, betCurrency, (0,currencyFix/* default */.A)(currency), payout), rounding),
            currencySign,
        }) }));
}
const RatesConverter = (0,index_js_.observer)(_RatesConverter);

;// ./src/framework/components/RatesConverter/index.tsx


// EXTERNAL MODULE: ./src/framework/components/Rules/index.tsx + 5 modules
var Rules = __webpack_require__(25723);
;// ./src/framework/components/SelectHead/SelectHead.tsx




function _SelectHead({ children, onClick = () => { } }) {
    const { open, setOpen, active } = (0,hooks_module_js_.useContext)(Select_Context);
    const handleClick = (e) => {
        setOpen(!open);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children({
            ...active,
            open,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onclick: handleClick,
        })) }));
}
const SelectHead = _SelectHead;

;// ./src/framework/components/SelectHead/index.tsx


;// ./src/framework/components/SelectList/SelectList.tsx



function _SelectList({ children }) {
    const { open } = (0,hooks_module_js_.useContext)(Select_Context);
    if (!open)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const SelectList = _SelectList;

;// ./src/framework/components/SelectList/index.tsx


;// ./src/framework/components/SelectOption/SelectOption.tsx




function _SelectOption({ children, onClick = () => { } }) {
    const { setOpen, active, onChange, list } = (0,hooks_module_js_.useContext)(Select_Context);
    const handleClick = (e) => {
        onChange({
            key: e.currentTarget.dataset.key || active.key,
            value: e.currentTarget.dataset.value || active.value,
            title: e.currentTarget.dataset.title || active.title,
        });
        setOpen(false);
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: list.map((item, index) => (0,preact_module_js_.toChildArray)(children({
            ...item,
            active: active.key === item.key,
        })).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onclick: handleClick,
            'data-value': item.value,
            'data-key': item.key,
            'data-title': item.title,
            key: item.key + index,
        }))) }));
}
const SelectOption = _SelectOption;

;// ./src/framework/components/SelectOption/index.tsx


;// ./src/framework/components/Select/Select.tsx






const Select_Context = (0,preact_module_js_.createContext)({});
function _Select({ children, open = false, listKeyActive = '', list = [], onChange = () => { } }) {
    const active = list.find((item) => item.key === listKeyActive) || {
        key: '',
        value: '',
        title: 'Select',
    };
    const [_open, setOpen] = (0,hooks_module_js_.useState)(open);
    (0,hooks_module_js_.useEffect)(() => {
        setOpen(open);
    }, [open]);
    return ((0,jsxRuntime_module/* jsx */.Y)(Select_Context.Provider, { value: { open: _open, active, list, onChange, setOpen }, children: (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children }) }));
}
const Select = Object.assign(_Select, {
    Head: SelectHead,
    List: SelectList,
    Option: SelectOption,
});

;// ./src/framework/components/Select/index.tsx


// EXTERNAL MODULE: ./src/framework/components/Setting/index.tsx + 37 modules
var Setting = __webpack_require__(49472);
// EXTERNAL MODULE: ./src/framework/components/Text/index.tsx + 5 modules
var Text = __webpack_require__(26289);
// EXTERNAL MODULE: ./src/framework/components/TextSizeV2/index.tsx + 1 modules
var TextSizeV2 = __webpack_require__(8904);
// EXTERNAL MODULE: ./src/framework/components/Timer/index.tsx + 3 modules
var Timer = __webpack_require__(60287);
// EXTERNAL MODULE: ./src/framework/components/Tournaments/index.tsx + 23 modules
var Tournaments = __webpack_require__(30312);
;// ./src/framework/components/DraggableDrag/DraggableDrag.tsx


function _DraggableDrag({ children }) {
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            'data-draggable-drag': 'true',
            style: {
                pointerEvents: 'auto',
            },
        })) }));
}
const DraggableDrag = _DraggableDrag;

;// ./src/framework/components/DraggableDrag/index.tsx


;// ./src/framework/components/DraggableClose/DraggableClose.tsx




function _DraggableClose({ children, onClick = () => { } }) {
    const { onClose } = (0,hooks_module_js_.useContext)(Draggable_Context);
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: (e) => {
                onClose(false);
                onClick();
            },
        })) }));
}
const DraggableClose = _DraggableClose;

;// ./src/framework/components/DraggableClose/index.tsx


;// ./src/framework/components/Draggable/Draggable.tsx






const Draggable_Context = (0,preact_module_js_.createContext)({});
function _Draggable({ children, show, onClose, parent, padding = { left: 0, top: 0, right: 0, bottom: 0 } }) {
    const [id] = (0,hooks_module_js_.useState)((0,esm_browser_index_js_.v4)());
    const [element, setElement] = (0,hooks_module_js_.useState)(null);
    const [parentElement, setParentElement] = (0,hooks_module_js_.useState)(null);
    const [dragElement, setDragElement] = (0,hooks_module_js_.useState)(null);
    const [resize, setResize] = (0,hooks_module_js_.useState)(0);
    const isDragging = (0,hooks_module_js_.useRef)(false);
    const elementZone = (0,hooks_module_js_.useRef)({ left: 0, right: 0, top: 0, bottom: 0 });
    const elementTransform = (0,hooks_module_js_.useRef)({ x: 0, y: 0 });
    const mouseCordsDiff = (0,hooks_module_js_.useRef)({ x: 0, y: 0 });
    (0,hooks_module_js_.useEffect)(() => {
        const element = document.getElementById(id) || null;
        const parentElement = parent ? parent : element?.parentElement || null;
        const dragElement = element?.querySelector('[data-draggable-drag]') || null;
        computedRect(element, parentElement);
        setElement(element);
        setParentElement(parentElement);
        setDragElement(dragElement);
    }, [show]);
    (0,hooks_module_js_.useLayoutEffect)(() => {
        window.addEventListener('resize', resizeWindow);
        dragElement?.addEventListener('mousedown', dragStart);
        window.addEventListener('mousemove', drag);
        window.addEventListener('mouseup', dragEnd);
        dragElement?.addEventListener('touchstart', dragStart);
        window.addEventListener('touchmove', drag);
        window.addEventListener('touchend', dragEnd);
        window.addEventListener('touchcancel', dragEnd);
        return () => {
            window.removeEventListener('resize', resizeWindow);
            dragElement?.removeEventListener('mousedown', dragStart);
            window.removeEventListener('mousemove', drag);
            window.removeEventListener('mouseup', dragEnd);
            dragElement?.removeEventListener('touchstart', dragStart);
            window.removeEventListener('touchmove', drag);
            window.removeEventListener('touchend', dragEnd);
            window.removeEventListener('touchcancel', dragEnd);
        };
    }, [element, parentElement, dragElement]);
    (0,hooks_module_js_.useLayoutEffect)(() => {
        if (element && parentElement) {
            computedRect(element, parentElement);
            computedPosition();
        }
    }, [element, parentElement, dragElement, resize]);
    function resizeWindow() {
        setResize(Date.now());
    }
    function dragStart() {
        isDragging.current = true;
    }
    function drag(e) {
        e.preventDefault();
        if (!isDragging.current)
            return;
        let eventX;
        let eventY;
        if (e instanceof MouseEvent) {
            eventX = e.clientX;
            eventY = e.clientY;
        }
        if (e instanceof TouchEvent) {
            eventX = e.touches[0].clientX;
            eventY = e.touches[0].clientY;
        }
        if (!mouseCordsDiff.current.x)
            mouseCordsDiff.current.x = eventX;
        if (!mouseCordsDiff.current.y)
            mouseCordsDiff.current.y = eventY;
        const diffX = eventX - mouseCordsDiff.current.x;
        const diffY = eventY - mouseCordsDiff.current.y;
        elementTransform.current = { x: elementTransform.current.x + diffX, y: elementTransform.current.y + diffY };
        computedPosition();
        mouseCordsDiff.current = { x: eventX, y: eventY };
    }
    function dragEnd() {
        isDragging.current = false;
        mouseCordsDiff.current = { x: undefined, y: undefined };
        element.style.removeProperty('pointer-events');
    }
    function computedRect(element, parentElement) {
        if (!element || !parentElement)
            return;
        const elementRect = element.getBoundingClientRect();
        const parentRect = parentElement.getBoundingClientRect();
        elementZone.current = {
            left: parentRect.left - elementRect.left + padding.left,
            top: parentRect.top - elementRect.top + padding.top,
            right: parentRect.right - elementRect.right - padding.right,
            bottom: parentRect.bottom - elementRect.bottom - padding.bottom,
        };
    }
    function computedPosition() {
        let x = elementTransform.current.x;
        let y = elementTransform.current.y;
        if (elementZone.current.left >= x)
            x = elementZone.current.left;
        if (elementZone.current.top >= y)
            y = elementZone.current.top;
        if (elementZone.current.right <= x)
            x = elementZone.current.right;
        if (elementZone.current.bottom <= y)
            y = elementZone.current.bottom;
        element.style.transform = `translate(${x}px, ${y}px)`;
        element.style.willChange = 'transform';
        element.style.pointerEvents = 'none';
    }
    if (!show)
        return null;
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,jsxRuntime_module/* jsx */.Y)(Draggable_Context.Provider, { value: { onClose }, children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
                id,
            })) }) }));
}
const Draggable = Object.assign(_Draggable, {
    Drag: DraggableDrag,
    Close: DraggableClose,
});

;// ./src/framework/components/Draggable/index.tsx


;// ./src/framework/components/KeyboardButton/KeyboardButton.tsx





function _KeyboardButton({ children, onClick = () => { }, targetValue = '', disabled }) {
    const { setValue } = (0,hooks_module_js_.useContext)(KeyboardV2_Context);
    const handleClick = (e) => {
        if (disabled)
            return;
        if (setValue) {
            setValue(targetValue);
        }
        onClick(e);
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const KeyboardButton = (0,index_js_.observer)(_KeyboardButton);

;// ./src/framework/components/KeyboardButton/index.tsx


;// ./src/framework/components/KeyboardButtonApply/KeyboardButtonApply.tsx




function _KeyboardButtonApply({ children, onClick = () => { }, onClickForAudio = () => { } }) {
    const { defaultValue, value, onChange, onSubmit } = (0,hooks_module_js_.useContext)(KeyboardV2_Context);
    const handleClick = (e) => {
        onSubmit(value);
        onClick(e);
        if (defaultValue.toString() !== value.toString()) {
            onClickForAudio();
        }
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick: handleClick,
        })) }));
}
const KeyboardButtonApply = _KeyboardButtonApply;

;// ./src/framework/components/KeyboardButtonApply/index.tsx


;// ./src/framework/components/KeyboardModal/KeyboardModal.tsx



function _KeyboardModal({ children }) {
    const { uiCommon: { setModal, modal, orientation }, } = (0,bootstrap.GET_STORE)();
    (0,hooks_module_js_.useEffect)(() => {
        return () => {
            for (let key in modal) {
                if (key.startsWith('keyboard')) {
                    setModal({
                        modalName: key,
                        render: false,
                    });
                }
            }
        };
    }, [orientation]);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const KeyboardModal = _KeyboardModal;

;// ./src/framework/components/KeyboardModal/index.tsx


;// ./src/framework/components/KeyboardModalButton/KeyboardModalButton.tsx






function _KeyboardModalButton(prps) {
    const { children, delayOpen, delayClose, prefix, min, max, defaultValue, onChange, disabled, modalName } = prps;
    const keyboardContext = (0,hooks_module_js_.useContext)(KeyboardV2_Context);
    const { setContextProps } = keyboardContext;
    const { uiCommon: { setModal, modal, orientation }, } = (0,bootstrap.GET_STORE)();
    (0,hooks_module_js_.useEffect)(() => {
        for (let key in modal) {
            if (key.startsWith('keyboard')) {
                setModal({
                    modalName: key,
                    render: false,
                });
            }
        }
    }, [orientation]);
    const onClick = () => {
        if (disabled)
            return;
        setContextProps({
            ...keyboardContext,
            ...prps,
        });
        for (let key in modal) {
            if (key.startsWith('keyboard') && key !== modalName) {
                setModal({
                    modalName: key,
                    render: false,
                });
            }
        }
        setModal({
            modalName,
            render: true,
            delayOpen,
            delayClose,
            callbackOnClose: () => {
                setContextProps(null);
            },
        });
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, {
            onClick,
        })) }));
}
const KeyboardModalButton = (0,index_js_.observer)(_KeyboardModalButton);

;// ./src/framework/components/KeyboardModalButton/index.tsx


;// ./src/framework/components/KeyboardV2/KeyboardV2.tsx








const KeyboardV2_Context = (0,preact_module_js_.createContext)({});
function _KeyboardV2({ children, onChangeForAudio = () => { }, toFixed }) {
    const [contextProps, setContextProps] = (0,hooks_module_js_.useState)(null);
    const [value, setValue] = (0,hooks_module_js_.useState)(null);
    const soundTimestamp = (0,hooks_module_js_.useRef)(null);
    const presicion = contextProps?.rounding || 2;
    const regexDigitsStr = `^(\\d{0,9})\\d*(\\.\\d{0,${presicion}}|\\d{0,3}).*`;
    const regexDigits = new RegExp(regexDigitsStr, 'g');
    const regexNonDigitsStr = !presicion ? /[^\d-]/g : /[^\d(.|,)-]/g;
    const regexNonDigits = new RegExp(regexNonDigitsStr, 'g');
    const mask = (value) => String(value)
        .replace(/\s/g, '')
        .replace(/^0{2,}/, '0')
        .replace(regexNonDigits, '')
        .replace(/,/g, '.')
        .replace(/^\./, '')
        .replace(/[.|,](?=.*[.|,])/g, '')
        .replace(regexDigits, '$1$2');
    const updateValue = (v) => {
        const val = Number(v);
        if (contextProps) {
            if (val > contextProps?.max) {
                v = String(contextProps.max);
            }
            if (typeof contextProps?.connectBalance === 'number') {
                if (contextProps.connectBalance < val) {
                    v = String(contextProps.connectBalance);
                }
            }
        }
        if (v !== value && Date.now() - soundTimestamp.current >= 75) {
            soundTimestamp.current = Date.now();
            onChangeForAudio();
        }
        setValue(mask(v));
    };
    const onSubmit = (value) => {
        let val = toFixed ? Number(Number(value).toFixed(toFixed)) : Number(value);
        if (contextProps.min && val < contextProps.min) {
            val = contextProps.min;
        }
        contextProps.onChange(String(val));
    };
    const updateContext = (props) => {
        if (!props) {
            setContextProps(null);
            return;
        }
        const defaultValue = props.defaultValue || 0;
        const p = toFixed ? Number(Number(defaultValue).toFixed(toFixed)) : defaultValue;
        updateValue(String(p));
        setContextProps((prevState) => ({
            ...prevState,
            ...props,
        }));
    };
    return ((0,jsxRuntime_module/* jsx */.Y)(KeyboardV2_Context.Provider, { value: {
            ...contextProps,
            value,
            onSubmit,
            setValue: updateValue,
            setContextProps: updateContext,
        }, children: children({
            ...contextProps,
            ...{ defaultValue: value },
            onChange: updateValue,
            value,
        }) }));
}
const KeyboardV2 = Object.assign((0,index_js_.observer)(_KeyboardV2), {
    Button: KeyboardButton,
    Apply: KeyboardButtonApply,
    Modal: Object.assign(KeyboardModal, {
        Button: KeyboardModalButton,
    }),
});

;// ./src/framework/components/KeyboardV2/index.tsx


// EXTERNAL MODULE: ./src/framework/components/Freebets/index.ts + 14 modules
var Freebets = __webpack_require__(57157);
;// ./src/framework/components/Odometer/Odometer.tsx


function _Odometer({ value = 100, duration = 200, speed = 100 }) {
    const [data, setData] = (0,hooks_module_js_.useState)([...value.toString()]);
    const [active, setActive] = (0,hooks_module_js_.useState)(false);
    const activeTimeout = (0,hooks_module_js_.useRef)(null);
    (0,hooks_module_js_.useEffect)(() => {
        setData([...value.toString()]);
        setActive(true);
        clearTimeout(activeTimeout.current);
        activeTimeout.current = setTimeout(() => {
            setActive(false);
        }, duration);
        return () => {
            clearTimeout(activeTimeout.current);
        };
    }, [value]);
    return ((0,jsxRuntime_module/* jsxs */.FD)("div", { style: { display: 'inline-flex', overflow: 'hidden' }, children: [(0,jsxRuntime_module/* jsx */.Y)("style", { children: `
         @keyframes odometer {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(100%);
          }
        }
        ` }), data.map((item) => ((0,jsxRuntime_module/* jsxs */.FD)("div", { style: {
                    position: 'relative',
                    ...(!Number.isNaN(Number(item)) && active && { animation: `odometer ${speed}ms linear infinite` }),
                }, children: [item, (0,jsxRuntime_module/* jsx */.Y)("span", { style: { position: 'absolute', inset: 0, transform: 'translatey(-100%)' }, children: item })] })))] }));
}
const Odometer = _Odometer;

;// ./src/framework/components/Odometer/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/animate.ts
var animate = __webpack_require__(93974);
;// ./src/framework/components/GrowingNumber/GrowingNumber.tsx



function _GrowingNumber({ children, value = 100, duration = 1000, delay = 0, forceUpdate = false, startFrom = '', }) {
    const [result, setResult] = (0,hooks_module_js_.useState)(startFrom);
    (0,hooks_module_js_.useEffect)(() => {
        let a;
        const arrOfSymbols = String(value).split('');
        let postfix = '';
        arrOfSymbols.forEach((item) => {
            if (item !== '.' && isNaN(+item))
                postfix += item;
        });
        const rounding = (String(value).split('.')[1] || '').length;
        const timeout = setTimeout(() => {
            a = (0,animate/* animate */.i0)({
                duration,
                timing: animate/* linear */.sn,
                draw: function (progress) {
                    const text = value.toString();
                    const numbers = text.match(/[\d.]+/g).join('');
                    const result = Math.max(0, Number(Number(numbers) * progress)).toFixed(rounding);
                    setResult(result + postfix);
                    if (progress === 1) {
                        setResult(Number(numbers).toFixed(rounding) + postfix);
                    }
                },
            });
        }, delay);
        return () => {
            clearTimeout(timeout);
            a?.stop();
        };
    }, [forceUpdate]);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ value: result }) });
}
const GrowingNumber = _GrowingNumber;

;// ./src/framework/components/GrowingNumber/index.tsx


;// ./src/framework/components/GrowingNumberFromValue/GrowingNumberFromValue.tsx



function _GrowingNumberFromValue({ children, value = 100, duration = 1000, delay = 0, forceUpdate = false }) {
    const [result, setResult] = (0,hooks_module_js_.useState)('');
    const previousValueRef = (0,hooks_module_js_.useRef)(0);
    (0,hooks_module_js_.useEffect)(() => {
        let a;
        const rounding = (String(value).split('.')[1] || '').length;
        const currentValue = Number(value);
        const startValue = previousValueRef.current;
        const timeout = setTimeout(() => {
            a = (0,animate/* animate */.i0)({
                duration,
                timing: animate/* linear */.sn,
                draw: (progress) => {
                    const interpolatedValue = startValue + (currentValue - startValue) * progress;
                    const result = interpolatedValue.toFixed(rounding);
                    setResult(result);
                    if (progress === 1) {
                        setResult(currentValue.toFixed(rounding));
                    }
                },
            });
        }, delay);
        previousValueRef.current = currentValue;
        return () => {
            clearTimeout(timeout);
            a?.stop();
        };
    }, [value, duration, delay, forceUpdate]);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ value: result }) });
}
const GrowingNumberFromValue = _GrowingNumberFromValue;

;// ./src/framework/components/GrowingNumberFromValue/index.tsx


// EXTERNAL MODULE: ./src/framework/components/Animation/index.tsx + 3 modules
var Animation = __webpack_require__(87227);
;// ./src/framework/components/TransitionList/TransitionList.tsx



const timingFunctions = {
    linear: animate/* linear */.sn,
    makeEaseOut: (0,animate/* makeEaseOut */.L4)(animate/* easeOutCubic */.p_),
    easeOutCubic: animate/* easeOutCubic */.p_,
};
function _TransitionList({ children, list, listKey = 'id', duration = 500, timingFunction = 'linear' }) {
    const [_list, setList] = (0,hooks_module_js_.useState)(list);
    const [animation, setAnimation] = (0,hooks_module_js_.useState)(false);
    const [positionDiff, setPositionDiff] = (0,hooks_module_js_.useState)([]);
    const [css, setCss] = (0,hooks_module_js_.useState)([]);
    (0,hooks_module_js_.useEffect)(() => {
        if (animation)
            return;
        const listKeys = list.map((item) => item[listKey]);
        const _listKeys = _list.map((item) => item[listKey]);
        const combinedKeys = [...new Set([...listKeys, ..._listKeys])];
        let newList = [];
        let newPositionDiff = [];
        let updateAnimation = false;
        for (let i = 0; i < combinedKeys.length; i++) {
            const newIndex = listKeys.indexOf(combinedKeys[i]);
            const oldIndex = _listKeys.indexOf(combinedKeys[i]);
            if (newIndex !== -1) {
                newList.push(list[newIndex]);
            }
            if (newIndex === -1 && oldIndex !== -1) {
                newList.push(_list[oldIndex]);
            }
            newPositionDiff.push([newIndex, oldIndex]);
            if (!positionDiff[i] || positionDiff[i][0] !== newIndex || positionDiff[i][1] !== oldIndex) {
                updateAnimation = true;
            }
        }
        setList(newList);
        if (updateAnimation) {
            setCss(computedCss(newPositionDiff, 0));
            setPositionDiff(newPositionDiff);
            setAnimation(true);
        }
    }, [list, animation]);
    (0,hooks_module_js_.useEffect)(() => {
        if (!animation)
            return;
        let a = (0,animate/* animate */.i0)({
            duration,
            timing: timingFunctions[timingFunction],
            draw: function (progress) {
                setCss(computedCss(positionDiff, progress));
                if (progress === 1) {
                    setAnimation(false);
                    setList(list);
                }
            },
        });
        return () => {
            a?.stop();
        };
    }, [animation]);
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({ list: _list, css }) });
}
function computedCss(transformDiff, progress) {
    return transformDiff.map(([newIndex, oldIndex]) => {
        const isRemove = newIndex === -1;
        const isAdd = oldIndex === -1;
        let translateY = transformDiff.length * 100;
        if (newIndex === oldIndex) {
            translateY = newIndex * 100;
        }
        if (isRemove && !isAdd) {
            const diff = transformDiff.length - oldIndex;
            translateY = (oldIndex + diff * progress) * 100;
        }
        if (isAdd && !isRemove) {
            const diff = transformDiff.length - newIndex;
            translateY = (newIndex + (diff - diff * progress)) * 100;
        }
        if (!isRemove && !isAdd && newIndex > oldIndex) {
            const diff = newIndex - oldIndex;
            translateY = (oldIndex + diff * progress) * 100;
        }
        if (!isRemove && !isAdd && newIndex < oldIndex) {
            const diff = oldIndex - newIndex;
            translateY = (oldIndex - diff * progress) * 100;
        }
        return {
            transform: `translateY(${translateY}%)`,
            position: 'absolute',
            top: 0,
        };
    });
}
const TransitionList = _TransitionList;

;// ./src/framework/components/TransitionList/index.tsx


;// ./src/framework/components/Transition/Transition.tsx


function _Transition({ children }) {
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const Transition = Object.assign(_Transition, {
    List: TransitionList,
});

;// ./src/framework/components/Transition/index.tsx


// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
;// ./src/framework/components/QuickModeButtonAlert/QuickModeButtonAlert.tsx






function _QuickModeButtonAlert({ children }) {
    const { quickModeCommon: { enabled, setEnabled }, uiCommon: { setAlertList, animationEventsCreate }, } = (0,bootstrap.GET_STORE)();
    const maxCount = (0,bootstrap.GET_GAME_CONFIG)()?.quickMode?.alert?.requiredCountForAlert || 5;
    const duration = (0,bootstrap.GET_GAME_CONFIG)()?.quickMode?.alert?.duration || 5000;
    const disableAutoOn = (0,bootstrap.GET_GAME_CONFIG)()?.quickMode?.disableAutoOn || false;
    const count = (0,hooks_module_js_.useRef)(0);
    const time = (0,hooks_module_js_.useRef)(Date.now());
    const handleClick = () => {
        if (count.current === -1 || disableAutoOn)
            return;
        if (Date.now() - time.current < 200) {
            count.current++;
        }
        else {
            count.current = 0;
        }
        if (count.current >= maxCount) {
            count.current = -1;
            setAlertList({
                text: 'COMMON.QUICK_PLAY.NOTIF',
                type: 'gameQuickMode',
                duration,
                callback: () => {
                    setEnabled(true);
                    animationEventsCreate('QuickModeButtonAlert');
                },
            });
        }
        time.current = Date.now();
    };
    if (enabled || Boolean(localStorageHelper/* default */.A.get('quickMode')) || disableAutoOn)
        return null;
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: (0,preact_module_js_.toChildArray)(children).map((child) => (0,preact_module_js_.cloneElement)(child, { onClick: handleClick })) });
}
const QuickModeButtonAlert = (0,index_js_.observer)(_QuickModeButtonAlert);

;// ./src/framework/components/QuickModeButtonAlert/index.tsx


;// ./src/framework/components/QuickMode/QuickMode.tsx


function _QuickMode({ children }) {
    return (0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children });
}
const QuickMode = Object.assign(_QuickMode, {
    Button: Object.assign({}, {
        Alert: QuickModeButtonAlert,
    }),
});

;// ./src/framework/components/QuickMode/index.tsx


;// ./src/framework/components/IsOnline/IsOnline.tsx



function _IsOnline({ children }) {
    const { uiCommon: { isOnline }, } = (0,bootstrap.GET_STORE)();
    return ((0,jsxRuntime_module/* jsx */.Y)(jsxRuntime_module/* Fragment */.FK, { children: children({
            isOnline,
        }) }));
}
const IsOnline = (0,index_js_.observer)(_IsOnline);

;// ./src/framework/components/IsOnline/index.tsx


// EXTERNAL MODULE: ./src/framework/components/GameDisabled/index.tsx + 1 modules
var GameDisabled = __webpack_require__(27243);
;// ./src/framework/components/export.ts











































/***/ }),

/***/ 93974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L4: () => (/* binding */ makeEaseOut),
/* harmony export */   i0: () => (/* binding */ animate),
/* harmony export */   p_: () => (/* binding */ easeOutCubic),
/* harmony export */   sn: () => (/* binding */ linear)
/* harmony export */ });
function animate({ timing, draw, duration }) {
    let start = performance.now();
    let animationId;
    function animationStep(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1)
            timeFraction = 1;
        let progress = timing(timeFraction);
        draw(progress);
        if (timeFraction < 1) {
            animationId = requestAnimationFrame(animationStep);
        }
    }
    animationStep(start);
    function stop() {
        cancelAnimationFrame(animationId);
    }
    return {
        stop,
    };
}
function makeEaseOut(timing) {
    return function (timeFraction) {
        return 1 - timing(1 - timeFraction);
    };
}
function easeOutCubic(timeFraction) {
    return 1 - Math.pow(1 - timeFraction, 3);
}
function linear(timeFraction) {
    return timeFraction;
}


/***/ }),

/***/ 57132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useRatio)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57888);

function useRatio(config) {
    const defaultObj = {
        window: { width: 0, height: 0 },
        ratio: { width: 0, height: 0 },
        clip: [],
        free: { width: 0, height: 0 },
        type: 'portrait',
    };
    const [state, setState] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultObj);
    const computedRatioRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)(() => { });
    const settleRafRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const settleStartRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const settleStableFramesRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const settlePrevViewportRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const cancelSettledRecompute = () => {
        if (settleRafRef.current !== null) {
            cancelAnimationFrame(settleRafRef.current);
            settleRafRef.current = null;
        }
        settleStableFramesRef.current = 0;
        settlePrevViewportRef.current = null;
    };
    const getViewportSize = () => {
        const vv = window.visualViewport;
        if (vv) {
            return {
                width: Math.round(vv.width),
                height: Math.round(vv.height),
            };
        }
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    };
    const scheduleSettledRecompute = () => {
        cancelSettledRecompute();
        settleStartRef.current = performance.now();
        const tick = () => {
            const now = performance.now();
            const elapsed = now - settleStartRef.current;
            const current = getViewportSize();
            const prev = settlePrevViewportRef.current;
            const viewportSettled = !!prev && Math.abs(prev.width - current.width) <= 1 && Math.abs(prev.height - current.height) <= 1;
            if (viewportSettled) {
                settleStableFramesRef.current += 1;
            }
            else {
                settleStableFramesRef.current = 0;
            }
            settlePrevViewportRef.current = current;
            if (settleStableFramesRef.current >= 3 || elapsed >= 1000) {
                computedRatioRef.current();
                cancelSettledRecompute();
                return;
            }
            settleRafRef.current = requestAnimationFrame(tick);
        };
        settleRafRef.current = requestAnimationFrame(tick);
    };
    function computedRatio() {
        const active = document.querySelector('input:focus');
        const viewport = document.querySelector('meta[name=viewport]');
        if (active) {
            viewport?.setAttribute('content', `width=${state.window.width}, height=${state.window.height}, initial-scale=1.0, maximum-scale=1.0, user-scalable=0`);
            document.documentElement.style.setProperty('min-width', `${state.window.width}px`);
            document.documentElement.style.setProperty('min-height', `${state.window.height}px`);
            return;
        }
        const _config = (function () {
            if (config.breakpoint === undefined)
                return config;
            const _config = { ...config };
            let breakpoint;
            for (let key in config.breakpoint) {
                if (window.innerWidth >= Number(key)) {
                    if (breakpoint === undefined || breakpoint < Number(key)) {
                        breakpoint = Number(key);
                    }
                }
            }
            if (breakpoint !== undefined) {
                _config.landscape = {
                    ..._config.landscape,
                    ...config.breakpoint[breakpoint].landscape,
                };
                _config.portrait = {
                    ..._config.portrait,
                    ...config.breakpoint[breakpoint].portrait,
                };
            }
            return _config;
        })();
        const updateState = { ...state };
        const x = window.innerWidth;
        const y = window.innerHeight;
        updateState.window = {
            width: x,
            height: y,
        };
        const type = x > y ? 'landscape' : 'portrait';
        updateState.type = type;
        if (typeof _config[type].maxWidth === 'number') {
            const maxWidth = _config[type].maxWidth;
            if (x > maxWidth)
                updateState.window.width = maxWidth;
        }
        if (typeof _config[type].maxHeight === 'number') {
            const maxHeight = _config[type].maxHeight;
            if (y > maxHeight)
                updateState.window.height = maxHeight;
        }
        const min = Math.min(Number(updateState.window.width / _config[type].width), Number(updateState.window.height / _config[type].height));
        updateState.ratio = {
            width: Math.floor(min * _config[type].width),
            height: Math.floor(min * _config[type].height),
        };
        if (_config[type].clip && _config[type].clip.length > 0) {
            updateState.clip = [];
            for (let clip of _config[type].clip) {
                const clipPercent = (clip / _config[type].height) * 100;
                const clipHeight = Math.round((updateState.ratio.height / 100) * clipPercent);
                updateState.clip.push({
                    height: clipHeight,
                    width: updateState.ratio.width,
                });
            }
        }
        updateState.free = {
            height: updateState.window.height - updateState.ratio.height,
            width: updateState.ratio.width,
        };
        const fontSize = type === 'landscape'
            ? `${Math.round(updateState.ratio.height / _config[type].delta)}px`
            : `${Math.round(updateState.ratio.width / _config[type].delta)}px`;
        document.documentElement.style.setProperty('font-size', fontSize);
        document.documentElement.style.removeProperty('min-width');
        document.documentElement.style.removeProperty('min-height');
        viewport?.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
        setState(updateState);
    }
    computedRatioRef.current = computedRatio;
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        computedRatio();
    }, []);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const run = () => computedRatioRef.current();
        const runSettled = () => scheduleSettledRecompute();
        const scheduleAfterOrientation = () => {
            const active = document.activeElement;
            const isInputLike = active &&
                (active.tagName === 'INPUT' ||
                    active.tagName === 'TEXTAREA' ||
                    active.getAttribute?.('contenteditable') === 'true');
            if (isInputLike) {
                active.blur();
            }
            runSettled();
        };
        window.addEventListener('resize', runSettled);
        const visualViewport = window.visualViewport;
        if (visualViewport) {
            visualViewport.addEventListener('resize', runSettled);
            visualViewport.addEventListener('scroll', runSettled);
        }
        const screenOrientation = typeof screen !== 'undefined' && 'orientation' in screen ? screen.orientation : null;
        if (screenOrientation) {
            screenOrientation.addEventListener('change', scheduleAfterOrientation);
        }
        else {
            window.addEventListener('orientationchange', scheduleAfterOrientation);
        }
        run();
        return () => {
            window.removeEventListener('resize', runSettled);
            if (visualViewport) {
                visualViewport.removeEventListener('resize', runSettled);
                visualViewport.removeEventListener('scroll', runSettled);
            }
            if (screenOrientation) {
                screenOrientation.removeEventListener('change', scheduleAfterOrientation);
            }
            else {
                window.removeEventListener('orientationchange', scheduleAfterOrientation);
            }
            cancelSettledRecompute();
        };
    }, []);
    return state;
}


/***/ })

}]);