"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[9474],{

/***/ 69474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Sequence: () => (/* reexport */ Sequence),
  SequenceAbortError: () => (/* reexport */ SequenceAbortError),
  SequenceContext: () => (/* reexport */ SequenceContext)
});

// EXTERNAL MODULE: consume shared module (default) gsap@^3.13.0 (strict) (fallback: ./node_modules/gsap/index.js)
var index_js_ = __webpack_require__(6858);
;// ./src/canvas/core/Sequence/SequenceAbortError.ts
class SequenceAbortError extends Error {
    constructor() {
        super('Sequence aborted');
        this.name = 'SequenceAbortError';
    }
}

;// ./src/canvas/core/Sequence/SequenceContext.ts
class SequenceContext {
    constructor(clock, events, signal) {
        this.clock = clock;
        this.events = events;
        this.signal = signal;
        this.startTime = clock.elapsed;
    }
    get elapsed() {
        return this.clock.elapsed - this.startTime;
    }
}

;// ./src/canvas/core/Sequence/Sequence.ts



class Sequence {
    constructor(clock, events) {
        this.steps = [];
        this.controller = new AbortController();
        this.ctx = null;
        this.running = false;
        this.clock = clock;
        this.events = events;
    }
    get aborted() {
        return this.controller.signal.aborted;
    }
    get elapsed() {
        return this.ctx?.elapsed ?? 0;
    }
    wait(seconds) {
        this.steps.push({ run: (ctx) => this.stepWait(ctx, seconds) });
        return this;
    }
    run(fn) {
        this.steps.push({ run: fn });
        return this;
    }
    waitFor(event) {
        this.steps.push({ run: (ctx) => this.stepWaitFor(ctx, event) });
        return this;
    }
    waitForCondition(predicate, pollSec = 0.05) {
        this.steps.push({ run: (ctx) => this.stepPoll(ctx, predicate, pollSec) });
        return this;
    }
    parallel(branches) {
        this.steps.push({ run: () => this.stepParallel(branches) });
        return this;
    }
    race(branches) {
        this.steps.push({ run: () => this.stepRace(branches) });
        return this;
    }
    loop(times, body) {
        this.steps.push({
            run: async (ctx) => {
                for (let i = 0; i < times; i++) {
                    this.throwIfAborted(ctx);
                    const inner = new Sequence(this.clock, this.events);
                    const onAbort = () => inner.cancel();
                    ctx.signal.addEventListener('abort', onAbort, { once: true });
                    body(inner);
                    try {
                        await inner.start();
                    }
                    finally {
                        ctx.signal.removeEventListener('abort', onAbort);
                    }
                    if (this.aborted)
                        throw new SequenceAbortError();
                }
            },
        });
        return this;
    }
    until(predicate, body) {
        this.steps.push({
            run: async (ctx) => {
                while (!predicate()) {
                    this.throwIfAborted(ctx);
                    const inner = new Sequence(this.clock, this.events);
                    const onAbort = () => inner.cancel();
                    ctx.signal.addEventListener('abort', onAbort, { once: true });
                    body(inner);
                    try {
                        await inner.start();
                    }
                    finally {
                        ctx.signal.removeEventListener('abort', onAbort);
                    }
                    if (this.aborted)
                        throw new SequenceAbortError();
                }
            },
        });
        return this;
    }
    tween(target, props) {
        this.steps.push({ run: (ctx) => this.stepTween(ctx, target, props) });
        return this;
    }
    async start() {
        if (this.running)
            throw new Error('Sequence already running');
        this.running = true;
        this.ctx = new SequenceContext(this.clock, this.events, this.controller.signal);
        try {
            for (const step of this.steps) {
                this.throwIfAborted(this.ctx);
                await step.run(this.ctx);
            }
        }
        catch (e) {
            if (!(e instanceof SequenceAbortError))
                throw e;
        }
        finally {
            this.running = false;
        }
    }
    cancel() {
        this.controller.abort();
    }
    throwIfAborted(ctx) {
        if (ctx.signal.aborted)
            throw new SequenceAbortError();
    }
    stepWait(ctx, seconds) {
        return new Promise((resolve, reject) => {
            const cancel = ctx.clock.after(seconds, () => {
                ctx.signal.removeEventListener('abort', onAbort);
                resolve();
            });
            const onAbort = () => {
                cancel();
                reject(new SequenceAbortError());
            };
            ctx.signal.addEventListener('abort', onAbort, { once: true });
        });
    }
    stepWaitFor(ctx, event) {
        return new Promise((resolve, reject) => {
            const handler = (() => {
                ctx.signal.removeEventListener('abort', onAbort);
                ctx.events.off(event, handler);
                resolve();
            });
            const onAbort = () => {
                ctx.events.off(event, handler);
                reject(new SequenceAbortError());
            };
            ctx.events.on(event, handler);
            ctx.signal.addEventListener('abort', onAbort, { once: true });
        });
    }
    stepPoll(ctx, predicate, pollSec) {
        return new Promise((resolve, reject) => {
            let cancelCurrent = () => { };
            const onAbort = () => {
                cancelCurrent();
                reject(new SequenceAbortError());
            };
            const check = () => {
                if (ctx.signal.aborted)
                    return;
                if (predicate()) {
                    ctx.signal.removeEventListener('abort', onAbort);
                    resolve();
                    return;
                }
                cancelCurrent = ctx.clock.after(pollSec, check);
            };
            ctx.signal.addEventListener('abort', onAbort, { once: true });
            cancelCurrent = ctx.clock.after(pollSec, check);
        });
    }
    async stepParallel(branches) {
        const onAbort = () => branches.forEach((b) => b.cancel());
        this.controller.signal.addEventListener('abort', onAbort, { once: true });
        try {
            await Promise.all(branches.map((b) => b.start()));
        }
        catch (e) {
            branches.forEach((b) => b.cancel());
            throw e;
        }
        finally {
            this.controller.signal.removeEventListener('abort', onAbort);
        }
    }
    async stepRace(branches) {
        const onAbort = () => branches.forEach((b) => b.cancel());
        this.controller.signal.addEventListener('abort', onAbort, { once: true });
        try {
            await Promise.race(branches.map((b) => b.start()));
        }
        finally {
            branches.forEach((b) => b.cancel());
            this.controller.signal.removeEventListener('abort', onAbort);
        }
    }
    stepTween(ctx, target, props) {
        return new Promise((resolve, reject) => {
            const onAbort = () => {
                index_js_["default"].killTweensOf(target);
                reject(new SequenceAbortError());
            };
            ctx.signal.addEventListener('abort', onAbort, { once: true });
            if (ctx.signal.aborted)
                return;
            index_js_["default"].to(target, {
                ...props,
                onComplete: () => {
                    ctx.signal.removeEventListener('abort', onAbort);
                    props.onComplete?.call(target);
                    resolve();
                },
            });
        });
    }
}

;// ./src/canvas/core/Sequence/index.ts





/***/ })

}]);