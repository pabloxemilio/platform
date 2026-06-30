"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[925],{

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