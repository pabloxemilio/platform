"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[725,2302],{

/***/ 60725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LS: () => (/* reexport */ localStorageHelper.LS),
  floor: () => (/* reexport */ floor/* floor */.R),
  formatCurrencyNumber: () => (/* reexport */ formatCurrencyNumber),
  formatNumberWithCommas: () => (/* reexport */ formatNumberWithCommas),
  randomIntFromInterval: () => (/* reexport */ randomIntFromInterval/* randomIntFromInterval */.Y),
  round: () => (/* reexport */ round/* round */.L),
  shortNumber: () => (/* reexport */ shortNumber/* shortNumber */.I),
  timeout: () => (/* reexport */ timeout/* timeout */.w),
  timeoutVisible: () => (/* reexport */ timeoutVisible)
});

// EXTERNAL MODULE: ./src/framework/helpers/floor.ts
var floor = __webpack_require__(70903);
// EXTERNAL MODULE: ./src/framework/helpers/round.ts
var round = __webpack_require__(77889);
// EXTERNAL MODULE: ./src/framework/helpers/localStorageHelper.ts
var localStorageHelper = __webpack_require__(74065);
// EXTERNAL MODULE: ./src/framework/helpers/shortNumber.ts
var shortNumber = __webpack_require__(82302);
// EXTERNAL MODULE: ./src/framework/helpers/randomIntFromInterval.ts
var randomIntFromInterval = __webpack_require__(12032);
// EXTERNAL MODULE: ./src/framework/helpers/timeout.ts
var timeout = __webpack_require__(9858);
;// ./src/framework/helpers/timeoutVisible.ts
function timeoutVisible({ visible, delay, callback }) {
    let timeout = null;
    if (!visible) {
        callback();
    }
    else {
        timeout = setTimeout(() => {
            callback();
        }, delay);
    }
    return timeout;
}
/* harmony default export */ const helpers_timeoutVisible = ((/* unused pure expression or super */ null && (timeoutVisible)));

;// ./src/framework/helpers/formatNumberWithCommas.ts
const formatNumberWithCommas = (value) => {
    if (isNaN(value) || !isFinite(value)) {
        return '0';
    }
    const hasDecimalPart = value % 1 !== 0;
    if (hasDecimalPart) {
        const [integerPart, decimalPart] = value.toString().split('.');
        return `${integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${decimalPart}`;
    }
    else {
        return Math.round(value)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
};

;// ./src/framework/constants/currencyFormatters.ts

const currencyFormatters = [
    {
        cid: ['habanero-test', 'habanero-z'],
        currency: ['zar'],
        formatter: (value) => {
            const withoutCents = Math.trunc(value);
            return formatNumberWithCommas(withoutCents);
        },
    },
];

;// ./src/framework/helpers/formatCurrencyNumber.ts


const getCidFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('cid');
};
const formatCurrencyNumber = (params) => {
    const { value, trunc, currency, roundFromLength } = params;
    const num = typeof value === 'string' ? Number(value) : value;
    if (isNaN(num) || !isFinite(num)) {
        return '0';
    }
    const cid = getCidFromUrl();
    let config = currencyFormatters.find((config) => config.cid?.includes(cid) && config.currency?.includes(currency));
    if (!config) {
        config = currencyFormatters.find((config) => config.cid?.includes(cid) && !config.currency);
    }
    if (!config) {
        config = currencyFormatters.find((config) => !config.cid && config.currency?.includes(currency));
    }
    if (config) {
        return config.formatter(num);
    }
    if (currency && trunc === undefined) {
        return num;
    }
    return trunc !== undefined ? (0,shortNumber/* shortNumber */.I)(num, trunc, roundFromLength) : num;
};

;// ./src/framework/helpers/export.ts











/***/ }),

/***/ 70903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 74065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 12032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   Y: () => (/* binding */ randomIntFromInterval)
/* harmony export */ });
function randomIntFromInterval(min, max, excludedNumber) {
    if (!excludedNumber) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (randomNumber === excludedNumber);
    return randomNumber;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomIntFromInterval);


/***/ }),

/***/ 77889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ 9858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   w: () => (/* binding */ timeout)
/* harmony export */ });
function timeout(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timeout);


/***/ })

}]);