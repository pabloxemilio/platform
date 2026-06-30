"use strict";
(self["webpackChunkfederation_modules"] = self["webpackChunkfederation_modules"] || []).push([[2835],{

/***/ 12835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_CascadeSlotStateMachine)
});

// EXTERNAL MODULE: consume shared module (default) mobx@^6.9.0 (singleton) (fallback: ./node_modules/mobx/dist/mobx.esm.js)
var mobx_esm_js_ = __webpack_require__(8570);
;// ./src/framework/api/cascade/types.ts
var SlotState;
(function (SlotState) {
    SlotState["IDLE"] = "IDLE";
    SlotState["SPIN_REQUESTED"] = "SPIN_REQUESTED";
    SlotState["SPIN_START"] = "SPIN_START";
    SlotState["SPINNING"] = "SPINNING";
    SlotState["REELS_STOPPING"] = "REELS_STOPPING";
    SlotState["RESULT_EVAL"] = "RESULT_EVAL";
    SlotState["WIN_HIGHLIGHT"] = "WIN_HIGHLIGHT";
    SlotState["SYMBOL_REMOVAL"] = "SYMBOL_REMOVAL";
    SlotState["CASCADE_DROP"] = "CASCADE_DROP";
    SlotState["CASCADE_CHECK"] = "CASCADE_CHECK";
    SlotState["CASCADE_LOOP"] = "CASCADE_LOOP";
    SlotState["CASCADE_END"] = "CASCADE_END";
    SlotState["PAYOUT"] = "PAYOUT";
    SlotState["FEATURE_TRIGGER"] = "FEATURE_TRIGGER";
    SlotState["BONUS_INTRO"] = "BONUS_INTRO";
    SlotState["BONUS_GAME"] = "BONUS_GAME";
    SlotState["BONUS_OUTRO"] = "BONUS_OUTRO";
    SlotState["ERROR"] = "ERROR";
    SlotState["RESET"] = "RESET";
})(SlotState || (SlotState = {}));

;// ./src/framework/store/CascadeSlotStateMachine.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class CascadeSlotStateMachine {
    get isErrorState() {
        return this.currentSlotState === SlotState.ERROR;
    }
    get isBonusState() {
        return [SlotState.FEATURE_TRIGGER, SlotState.BONUS_INTRO, SlotState.BONUS_GAME, SlotState.BONUS_OUTRO].includes(this.currentSlotState);
    }
    get isCascadeState() {
        return [
            SlotState.SYMBOL_REMOVAL,
            SlotState.CASCADE_DROP,
            SlotState.CASCADE_CHECK,
            SlotState.CASCADE_LOOP,
            SlotState.CASCADE_END,
        ].includes(this.currentSlotState);
    }
    get isSpinningState() {
        return [SlotState.SPIN_REQUESTED, SlotState.SPIN_START, SlotState.SPINNING, SlotState.REELS_STOPPING].includes(this.currentSlotState);
    }
    get canRequestSpin() {
        return (this.currentSlotState === SlotState.IDLE ||
            this.currentSlotState === SlotState.PAYOUT ||
            this.currentSlotState === SlotState.CASCADE_END ||
            this.currentSlotState === SlotState.BONUS_OUTRO);
    }
    constructor() {
        this.currentSlotState = SlotState.IDLE;
        this.previousSlotState = null;
        this.stateHistory = [];
        this.MAX_HISTORY_SIZE = 100;
        this.transitions = new Map();
        this.transitionGuards = new Map();
        this.transitionActions = new Map();
        this.transitionTo = async (targetState, reason) => {
            const fromState = this.currentSlotState;
            if (!this.canTransitionTo(targetState)) {
                const error = new Error(`Invalid state transition: ${fromState} -> ${targetState}`);
                console.error(error.message, {
                    from: fromState,
                    to: targetState,
                    validTargets: Array.from(this.transitions.get(fromState) || []),
                });
                throw error;
            }
            const actionKey = `${fromState}->${targetState}`;
            const transitionAction = this.transitionActions.get(actionKey);
            try {
                if (transitionAction) {
                    await transitionAction(this, fromState, targetState);
                }
                (0,mobx_esm_js_.runInAction)(() => {
                    this.previousSlotState = fromState;
                    this.currentSlotState = targetState;
                    this.stateHistory.push({
                        state: targetState,
                        timestamp: Date.now(),
                        reason,
                    });
                    if (this.stateHistory.length > this.MAX_HISTORY_SIZE) {
                        this.stateHistory.shift();
                    }
                });
            }
            catch (error) {
                console.error(`Error during state transition ${fromState} -> ${targetState}:`, error);
                (0,mobx_esm_js_.runInAction)(() => {
                    this.previousSlotState = fromState;
                    this.currentSlotState = SlotState.ERROR;
                });
                throw error;
            }
        };
        this.requestSpin = async () => {
            if (!this.canRequestSpin) {
                throw new Error(`Cannot request spin from state: ${this.currentSlotState}`);
            }
            await this.transitionTo(SlotState.SPIN_REQUESTED, 'User requested spin');
        };
        this.reset = async () => {
            await this.transitionTo(SlotState.RESET, 'Manual reset');
            await this.transitionTo(SlotState.IDLE, 'Reset complete');
        };
        this.clearHistory = () => {
            this.stateHistory = [];
        };
        (0,mobx_esm_js_.makeObservable)(this);
        this.initializeStateMachine();
    }
    initializeStateMachine() {
        this.addTransition(SlotState.IDLE, SlotState.SPIN_REQUESTED);
        this.addTransition(SlotState.SPIN_REQUESTED, SlotState.SPIN_START);
        this.addTransition(SlotState.SPIN_START, SlotState.SPINNING);
        this.addTransition(SlotState.SPINNING, SlotState.REELS_STOPPING);
        this.addTransition(SlotState.REELS_STOPPING, SlotState.RESULT_EVAL);
        this.addTransition(SlotState.RESULT_EVAL, SlotState.WIN_HIGHLIGHT);
        this.addTransition(SlotState.RESULT_EVAL, SlotState.PAYOUT);
        this.addTransition(SlotState.RESULT_EVAL, SlotState.FEATURE_TRIGGER);
        this.addTransition(SlotState.WIN_HIGHLIGHT, SlotState.SYMBOL_REMOVAL);
        this.addTransition(SlotState.WIN_HIGHLIGHT, SlotState.PAYOUT);
        this.addTransition(SlotState.SYMBOL_REMOVAL, SlotState.CASCADE_DROP);
        this.addTransition(SlotState.CASCADE_DROP, SlotState.CASCADE_CHECK);
        this.addTransition(SlotState.CASCADE_CHECK, SlotState.CASCADE_LOOP);
        this.addTransition(SlotState.CASCADE_CHECK, SlotState.CASCADE_END);
        this.addTransition(SlotState.CASCADE_LOOP, SlotState.WIN_HIGHLIGHT);
        this.addTransition(SlotState.CASCADE_END, SlotState.PAYOUT);
        this.addTransition(SlotState.CASCADE_END, SlotState.IDLE);
        this.addTransition(SlotState.PAYOUT, SlotState.IDLE);
        this.addTransition(SlotState.PAYOUT, SlotState.FEATURE_TRIGGER);
        this.addTransition(SlotState.FEATURE_TRIGGER, SlotState.BONUS_INTRO);
        this.addTransition(SlotState.BONUS_INTRO, SlotState.BONUS_GAME);
        this.addTransition(SlotState.BONUS_GAME, SlotState.BONUS_OUTRO);
        this.addTransition(SlotState.BONUS_OUTRO, SlotState.IDLE);
        this.addTransition(SlotState.BONUS_OUTRO, SlotState.SPIN_REQUESTED);
        Object.values(SlotState).forEach((state) => {
            if (state !== SlotState.ERROR && state !== SlotState.RESET) {
                this.addTransition(state, SlotState.ERROR);
                this.addTransition(state, SlotState.RESET);
            }
        });
        this.addTransition(SlotState.RESET, SlotState.IDLE);
        this.addTransition(SlotState.ERROR, SlotState.RESET);
        this.addTransition(SlotState.ERROR, SlotState.IDLE);
    }
    addTransition(from, to) {
        if (!this.transitions.has(from)) {
            this.transitions.set(from, new Set());
        }
        this.transitions.get(from).add(to);
    }
    registerTransitionGuard(from, to, guard) {
        const key = `${from}->${to}`;
        this.transitionGuards.set(key, guard);
    }
    registerTransitionAction(from, to, action) {
        const key = `${from}->${to}`;
        this.transitionActions.set(key, action);
    }
    canTransitionTo(targetState) {
        const validTargets = this.transitions.get(this.currentSlotState);
        if (!validTargets || !validTargets.has(targetState)) {
            return false;
        }
        const guardKey = `${this.currentSlotState}->${targetState}`;
        const guard = this.transitionGuards.get(guardKey);
        if (guard && !guard(this)) {
            return false;
        }
        return true;
    }
    get recentHistory() {
        return this.stateHistory.slice(-10);
    }
    get validNextStates() {
        const validTargets = this.transitions.get(this.currentSlotState);
        if (!validTargets) {
            return [];
        }
        return Array.from(validTargets).filter((targetState) => {
            const guardKey = `${this.currentSlotState}->${targetState}`;
            const guard = this.transitionGuards.get(guardKey);
            return !guard || guard(this);
        });
    }
}
__decorate([
    mobx_esm_js_.observable
], CascadeSlotStateMachine.prototype, "currentSlotState", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeSlotStateMachine.prototype, "previousSlotState", void 0);
__decorate([
    mobx_esm_js_.observable
], CascadeSlotStateMachine.prototype, "stateHistory", void 0);
__decorate([
    mobx_esm_js_.computed
], CascadeSlotStateMachine.prototype, "isErrorState", null);
__decorate([
    mobx_esm_js_.computed
], CascadeSlotStateMachine.prototype, "isBonusState", null);
__decorate([
    mobx_esm_js_.computed
], CascadeSlotStateMachine.prototype, "isCascadeState", null);
__decorate([
    mobx_esm_js_.computed
], CascadeSlotStateMachine.prototype, "isSpinningState", null);
__decorate([
    mobx_esm_js_.computed
], CascadeSlotStateMachine.prototype, "canRequestSpin", null);
__decorate([
    mobx_esm_js_.action
], CascadeSlotStateMachine.prototype, "registerTransitionGuard", null);
__decorate([
    mobx_esm_js_.action
], CascadeSlotStateMachine.prototype, "registerTransitionAction", null);
__decorate([
    mobx_esm_js_.action
], CascadeSlotStateMachine.prototype, "transitionTo", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeSlotStateMachine.prototype, "requestSpin", void 0);
__decorate([
    mobx_esm_js_.action
], CascadeSlotStateMachine.prototype, "reset", void 0);
__decorate([
    mobx_esm_js_.computed
], CascadeSlotStateMachine.prototype, "recentHistory", null);
__decorate([
    mobx_esm_js_.computed
], CascadeSlotStateMachine.prototype, "validNextStates", null);
__decorate([
    mobx_esm_js_.action
], CascadeSlotStateMachine.prototype, "clearHistory", void 0);
/* harmony default export */ const store_CascadeSlotStateMachine = (CascadeSlotStateMachine);


/***/ })

}]);