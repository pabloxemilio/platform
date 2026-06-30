System.register("chunks:///_virtual/abUpDown", ["./game_sevenup_proto.mjs_cjs=&original=.js", "./Player.ts", "./UpDownDesk.ts", "./PlatformGI.ts", "./UDCmd.ts", "./UDConstant.ts", "./UDEvent.ts", "./UDUtils.ts", "./interface12.ts", "./char_en.mjs_cjs=&original=2.js", "./char_in.mjs_cjs=&original=2.js", "./char_zh.mjs_cjs=&original=2.js", "./lyUpDownBetHistory.ts", "./lyUpDownBetHistoryDetail.ts", "./lyUpDownCheckTable.ts", "./lyUpDownHistory.ts", "./lyUpDownLoading.ts", "./lyUpDownMain.ts", "./lyUpDownMenu.ts", "./lyUpDownRule.ts", "./lyUpDownSelectLevel.ts", "./lyUpDownSelectRoom.ts", "./lyUpDownSelectTable.ts", "./lyUpDownSwitchLoading.ts", "./RoundManager.ts", "./UpDownManager.ts", "./nodeBtnItem.ts", "./nodeChipItem.ts", "./nodeCoinFlyItem.ts", "./nodeExtraPayItem.ts", "./nodeFlyChipItem.ts", "./nodeGuestHead.ts", "./nodeSmallChipItem.ts", "./nodeTableRecordOne.ts", "./nodeTableRound.ts", "./nodeWinAnimation.ts", "./pfBaseLayer.ts", "./pfBtnLayer.ts", "./pfChipsLayer.ts", "./pfGuestLayer.ts", "./pfLevelMode.ts", "./pfMySelfLayer.ts", "./pfTipLayer.ts", "./pfUpDownBetOperation.ts", "./pfUpDownChip.ts", "./pfUpDownCountDown.ts", "./pfUpDownDiceCup.ts", "./pfUpDownFlyChips.ts", "./pfUpDownSettle.ts", "./pfUpRoadLayer.ts"], (function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  }
}));

System.register("chunks:///_virtual/char_en.mjs_cjs=&original=2.js", ["./char_en2.js", "./cjs-loader.mjs"], (function (e, r) {
  var t, a;
  return {
    setters: [function (r) {
      t = r.__cjsMetaURL;
      var a = {};
      a.__cjsMetaURL = r.__cjsMetaURL, a.default = r.default, e(a)
    }, function (e) {
      a = e.default
    }],
    execute: function () {
      t || a.throwInvalidWrapper("./char_en.js", r.meta.url), a.require(t)
    }
  }
}));

System.register("chunks:///_virtual/char_en2.js", ["./cjs-loader.mjs"], (function (e, o) {
  var t;
  return {
    setters: [function (e) {
      t = e.default
    }],
    execute: function () {
      function _() {
        return (_ = Object.assign ? Object.assign.bind() : function (e) {
          for (var o = 1; o < arguments.length; o++) {
            var t = arguments[o];
            for (var _ in t) Object.prototype.hasOwnProperty.call(t, _) && (e[_] = t[_])
          }
          return e
        }).apply(this, arguments)
      }
      e("default", void 0);
      var n = e("__cjsMetaURL", o.meta.url);
      t.define(n, (function (o, t, n, a, r) {
        globalThis.char_en = _({}, globalThis.char_en, {
          ud_loading_switch_table: "SWITCH TABLE",
          ud_loading_switch_level: "SWITCH MODEL",
          ud_tips: "Tips",
          ud_btn_sure: "Confirm",
          ud_btn_cancle: "Cancel",
          ud_btn_recharge: "Recharge",
          ud_table_id: "Transaction ID:%s",
          ud_table_top_tip: "<color=#DCCB8D>Statistics last </color><color=#00ff18>%s</color><color=#DCCB8D> rounds</color>",
          ud_menu_exit: "Exit",
          ud_menu_switch: "Switch table",
          ud_menu_freeswitch: "Selecting table",
          ud_menu_history: "Betting history",
          ud_menu_howtoplay: "How to play",
          ud_menu_music: "Music",
          ud_menu_sound: "Sound",
          ud_select_tab_level: "LV%s",
          ud_select_level_level: "Level",
          ud_select_level_min: "Min-MaxBet",
          ud_select_level_max: "MinEntry",
          ud_switch_model_multiple_not_enough: "Multiple mode is not available",
          ud_switch_model_single_not_enough: "Single mode is not available",
          ud_switch_not_have_table: "There is no suitable table availabl!",
          ud_switch_not_have_level: "There is no suitable level available!",
          ud_not_switch_table: "Please wait for the next round to start.",
          ud_history_main_title: "MAIN POINTS WIN STATISTICS",
          ud_history_hands_num: "Hands:%s",
          ud_round3_alert: "You have not placed a bet in %s consecutive rounds. If you don't place in %s consecutive rounds, you will be asked to leave the room.",
          ud_round5_alert: "You have not placed a bet for %s consecutive games and have been asked to leave the room.",
          UPDOWN_LOADING_0: "Don't show next time",
          UPDOWN_LOADING_1: ["Extra Pay rewards up to 1000 times.", "Simple and engaging dice game."],
          UPDOWN_GAME_0: "UP and DOWN,you can only bet on one side.",
          UPDOWN_GAME_1: "You have exceeded the betting limit.",
          UPDOWN_GAME_2: "NOT_IN_ROOM",
          UPDOWN_GAME_3: "Insuffcient Balance",
          UPDOWN_GAME_4: "<color=%s>%s</color><color=#d4b8c0>/%s</color>",
          UPDOWN_GAME_5: "Stage time out",
          UPDOWN_GAME_6: "<outline color=#0a1002 width=4><color=#ffffff>Extra Pay rewards up to </color><color=#f6ff00>1000</color><color=#ffffff> times</color></outline>",
          UPDOWN_GAME_7: "bet error,code = %s",
          UPDOWN_GAME_8: "operate error,code = %s",
          UPDOWN_GAME_9: "Operation failed",
          UPDOWN_GAME_10: "Please bet first!",
          UPDOWN_GAME_11: "You have been kicked out.",
          UPDOWN_GAME_12: "You don't have enough coins to place a bet.",
          UPDOWN_GAME_13: "Your account has insufficient funds and cannot enter this session.",
          UPDOWN_GAME_14: "Due to network reasons, your bet failed for this round, please try again later.",
          UPDOWN_GAME_15: "Your account is logged in elsewhere, please log in again",
          UPDOWN_GAME_16: "Your account is abnormal and you have been kicked out of the room.",
          UPDOWN_GAME_17: "Date",
          UPDOWN_GAME_18: "Profit",
          UPDOWN_GAME_19: "Bet",
          UPDOWN_GAME_20: "Win",
          UPDOWN_GAME_21: "Load more",
          UPDOWN_GAME_22: "Recent %s Days",
          UPDOWN_GAME_23: "%02d/%02d/%04d",
          UPDOWN_GAME_24: "%02d:%02d:%02d",
          UPDOWN_GAME_25: "Round ID: %s",
          UPDOWN_GAME_26: "player ID: %s",
          UPDOWN_GAME_27: "Time: %02d/%02d/%04d  %02d:%02d:%02d",
          UPDOWN_GAME_28: "Profit: %s",
          UPDOWN_GAME_29: "Bet: %s",
          UPDOWN_GAME_30: "Win: %s",
          UPDOWN_GAME_31: "down",
          UPDOWN_GAME_32: "up",
          UPDOWN_GAME_33: "detail data error!!!",
          UPDOWN_GAME_34: "No records",
          UPDOWN_GAME_35: "No more records",
          UPDOWN_GAME_36: "Disconnected from server. Please return to lobby and reconnect.",
          UPDOWN_GAME_37: "Total",
          UPDOWN_GAME_38: "Bet",
          UPDOWN_GAME_39: "Odds",
          UPDOWN_GAME_40: "Extra pay",
          UPDOWN_GAME_41: "Win",
          UPDOWN_GAME_42: "Down",
          UPDOWN_GAME_43: "Up",
          UPDOWN_GAME_44: "7",
          UPDOWN_GAME_45: "<outline color=#0a1002 width=4><color=#ffffff>Extra Pay rewards up to </color><color=#f6ff00>1000</color><color=#ffffff> times</color></outline>",
          UPDOWN_GAME_46: "Min bet: %s",
          UPDOWN_GAME_47: "Room Limit: %s",
          UPDOWN_GAME_48: "Wagering: %ss",
          UPDOWN_GAME_49: "Wait: %ss",
          ud_select_money_not_to_limit: "Your account has insufficient funds and cannot enter this session. Do you want to recharge?",
          ud_select_money_out_to_max: "Sorry, Your assets exceed the maximum limit for this session!",
          ud_bet_money_not_enough: "Your account has insufficient funds. Do you want to recharge?",
          ud_exit_simple_table_sure: "Are you sure you want to exit? \nExit the table will return your bets."
        }), e("default", n.exports)
      }), {})
    }
  }
}));

System.register("chunks:///_virtual/char_in.mjs_cjs=&original=2.js", ["./char_in2.js", "./cjs-loader.mjs"], (function (e, r) {
  var t, a;
  return {
    setters: [function (r) {
      t = r.__cjsMetaURL;
      var a = {};
      a.__cjsMetaURL = r.__cjsMetaURL, a.default = r.default, e(a)
    }, function (e) {
      a = e.default
    }],
    execute: function () {
      t || a.throwInvalidWrapper("./char_in.js", r.meta.url), a.require(t)
    }
  }
}));

System.register("chunks:///_virtual/char_in2.js", ["./cjs-loader.mjs"], (function (t, e) {
  var r;
  return {
    setters: [function (t) {
      r = t.default
    }],
    execute: function () {
      function n() {
        return (n = Object.assign ? Object.assign.bind() : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
          }
          return t
        }).apply(this, arguments)
      }
      t("default", void 0);
      var a = t("__cjsMetaURL", e.meta.url);
      r.define(a, (function (e, r, a, i, s) {
        globalThis.char_hi = n({}, globalThis.char_hi, {}), t("default", a.exports)
      }), {})
    }
  }
}));

System.register("chunks:///_virtual/char_zh.mjs_cjs=&original=2.js", ["./char_zh2.js", "./cjs-loader.mjs"], (function (e, r) {
  var t, a;
  return {
    setters: [function (r) {
      t = r.__cjsMetaURL;
      var a = {};
      a.__cjsMetaURL = r.__cjsMetaURL, a.default = r.default, e(a)
    }, function (e) {
      a = e.default
    }],
    execute: function () {
      t || a.throwInvalidWrapper("./char_zh.js", r.meta.url), a.require(t)
    }
  }
}));

System.register("chunks:///_virtual/char_zh2.js", ["./cjs-loader.mjs"], (function (t, e) {
  var r;
  return {
    setters: [function (t) {
      r = t.default
    }],
    execute: function () {
      function n() {
        return (n = Object.assign ? Object.assign.bind() : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
          }
          return t
        }).apply(this, arguments)
      }
      t("default", void 0);
      var a = t("__cjsMetaURL", e.meta.url);
      r.define(a, (function (e, r, a, s, c) {
        globalThis.char_zh = n({}, globalThis.char_zh, {}), t("default", a.exports)
      }), {})
    }
  }
}));

System.register("chunks:///_virtual/game_sevenup_proto.js", ["./cjs-loader.mjs", "./minimal.js"], (function (e, t) {
  var n, i;
  return {
    setters: [function (e) {
      n = e.default
    }, function (e) {
      i = e.__cjsMetaURL
    }],
    execute: function () {
      e("default", void 0);
      var o = e("__cjsMetaURL", t.meta.url);
      n.define(o, (function (t, n, i, o, r) {
        var s, l, a, u = n("protobufjs/minimal.js"),
          c = u.Reader,
          f = u.Writer,
          p = u.util,
          b = u.roots.default || (u.roots.default = {});
        b.sevenup = ((a = {}).SEVENUP_MSGID = (s = {}, (l = Object.create(s))[s[0] = "SEVENUP_MSGID_NULL"] = 0, l[s[10403] = "SEVENUP_MSGID_GAME_STAGE_INFO_PUSH"] = 10403, l[s[10404] = "SEVENUP_MSGID_USER_BET_REQ"] = 10404, l[s[10405] = "SEVENUP_MSGID_USER_BET_RESP"] = 10405, l[s[10406] = "SEVENUP_MSGID_USER_BET_PUSH"] = 10406, l[s[10407] = "SEVENUP_MSGID_HISTORY_LOTTERY_REQ"] = 10407, l[s[10408] = "SEVENUP_MSGID_HISTORY_LOTTERY_RESP"] = 10408, l[s[10409] = "SEVENUP_MSGID_GET_VIP_BET_REQ"] = 10409, l[s[10410] = "SEVENUP_MSGID_GET_VIP_BET_RESP"] = 10410, l[s[10411] = "SEVENUP_MSGID_VIP_SEAT_INFO_PUSH"] = 10411, l[s[10412] = "SEVENUP_MSGID_GET_TABLE_LIST_REQ"] = 10412, l[s[10413] = "SEVENUP_MSGID_GET_TABLE_LIST_RESP"] = 10413, l[s[10414] = "SEVENUP_MSGID_CHECKOUT_RESP"] = 10414, l[s[10415] = "SEVENUP_MSGID_USER_OPERATE_REQ"] = 10415, l[s[10416] = "SEVENUP_MSGID_USER_OPERATE_RESP"] = 10416, l), a.SevenupGameStage = function () {
          var e = {},
            t = Object.create(e);
          return t[e[0] = "SEVENUP_STAGE_UNKNOWN"] = 0, t[e[1] = "SEVENUP_STAGE_GAMESTART"] = 1, t[e[2] = "SEVENUP_STAGE_BET"] = 2, t[e[3] = "SEVENUP_STAGE_SETTLE"] = 3, t[e[4] = "SEVENUP_STAGE_GAMEOVER"] = 4, t
        }(), a.PerCheckoutInfo = function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.uid = 0, e.prototype.checkoutAmount = p.Long ? p.Long.fromBits(0, 0, !1) : 0, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            return t || (t = f.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), null != e.checkoutAmount && Object.hasOwnProperty.call(e, "checkoutAmount") && t.uint32(16).int64(e.checkoutAmount), t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.PerCheckoutInfo; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.uid = e.uint32();
                  break;
                case 2:
                  i.checkoutAmount = e.int64();
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            return "object" != typeof e || null === e ? "object expected" : null != e.uid && e.hasOwnProperty("uid") && !p.isInteger(e.uid) ? "uid: integer expected" : null != e.checkoutAmount && e.hasOwnProperty("checkoutAmount") && !(p.isInteger(e.checkoutAmount) || e.checkoutAmount && p.isInteger(e.checkoutAmount.low) && p.isInteger(e.checkoutAmount.high)) ? "checkoutAmount: integer|Long expected" : null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.PerCheckoutInfo) return e;
            var t = new b.sevenup.PerCheckoutInfo;
            return null != e.uid && (t.uid = e.uid >>> 0), null != e.checkoutAmount && (p.Long ? (t.checkoutAmount = p.Long.fromValue(e.checkoutAmount)).unsigned = !1 : "string" == typeof e.checkoutAmount ? t.checkoutAmount = parseInt(e.checkoutAmount, 10) : "number" == typeof e.checkoutAmount ? t.checkoutAmount = e.checkoutAmount : "object" == typeof e.checkoutAmount && (t.checkoutAmount = new p.LongBits(e.checkoutAmount.low >>> 0, e.checkoutAmount.high >>> 0).toNumber())), t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if (t.defaults)
              if (n.uid = 0, p.Long) {
                var i = new p.Long(0, 0, !1);
                n.checkoutAmount = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
              } else n.checkoutAmount = t.longs === String ? "0" : 0;
            return null != e.uid && e.hasOwnProperty("uid") && (n.uid = e.uid), null != e.checkoutAmount && e.hasOwnProperty("checkoutAmount") && ("number" == typeof e.checkoutAmount ? n.checkoutAmount = t.longs === String ? String(e.checkoutAmount) : e.checkoutAmount : n.checkoutAmount = t.longs === String ? p.Long.prototype.toString.call(e.checkoutAmount) : t.longs === Number ? new p.LongBits(e.checkoutAmount.low >>> 0, e.checkoutAmount.high >>> 0).toNumber() : e.checkoutAmount), n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.SevenupStageInfo = function () {
          function e(e) {
            if (this.points = [], this.doubles = [], e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.stage = 0, e.prototype.continueTime = 0, e.prototype.round_num = "", e.prototype.points = p.emptyArray, e.prototype.isDouble = !1, e.prototype.doubles = p.emptyArray, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            if (t || (t = f.create()), null != e.stage && Object.hasOwnProperty.call(e, "stage") && t.uint32(8).int32(e.stage), null != e.continueTime && Object.hasOwnProperty.call(e, "continueTime") && t.uint32(16).int32(e.continueTime), null != e.round_num && Object.hasOwnProperty.call(e, "round_num") && t.uint32(26).string(e.round_num), null != e.points && e.points.length) {
              t.uint32(34).fork();
              for (var n = 0; n < e.points.length; ++n) t.int32(e.points[n]);
              t.ldelim()
            }
            if (null != e.isDouble && Object.hasOwnProperty.call(e, "isDouble") && t.uint32(40).bool(e.isDouble), null != e.doubles && e.doubles.length) {
              for (t.uint32(50).fork(), n = 0; n < e.doubles.length; ++n) t.int32(e.doubles[n]);
              t.ldelim()
            }
            return t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupStageInfo; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.stage = e.int32();
                  break;
                case 2:
                  i.continueTime = e.int32();
                  break;
                case 3:
                  i.round_num = e.string();
                  break;
                case 4:
                  if (i.points && i.points.length || (i.points = []), 2 == (7 & o))
                    for (var r = e.uint32() + e.pos; e.pos < r;) i.points.push(e.int32());
                  else i.points.push(e.int32());
                  break;
                case 5:
                  i.isDouble = e.bool();
                  break;
                case 6:
                  if (i.doubles && i.doubles.length || (i.doubles = []), 2 == (7 & o))
                    for (r = e.uint32() + e.pos; e.pos < r;) i.doubles.push(e.int32());
                  else i.doubles.push(e.int32());
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.stage && e.hasOwnProperty("stage") && !p.isInteger(e.stage)) return "stage: integer expected";
            if (null != e.continueTime && e.hasOwnProperty("continueTime") && !p.isInteger(e.continueTime)) return "continueTime: integer expected";
            if (null != e.round_num && e.hasOwnProperty("round_num") && !p.isString(e.round_num)) return "round_num: string expected";
            if (null != e.points && e.hasOwnProperty("points")) {
              if (!Array.isArray(e.points)) return "points: array expected";
              for (var t = 0; t < e.points.length; ++t)
                if (!p.isInteger(e.points[t])) return "points: integer[] expected"
            }
            if (null != e.isDouble && e.hasOwnProperty("isDouble") && "boolean" != typeof e.isDouble) return "isDouble: boolean expected";
            if (null != e.doubles && e.hasOwnProperty("doubles")) {
              if (!Array.isArray(e.doubles)) return "doubles: array expected";
              for (t = 0; t < e.doubles.length; ++t)
                if (!p.isInteger(e.doubles[t])) return "doubles: integer[] expected"
            }
            return null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupStageInfo) return e;
            var t = new b.sevenup.SevenupStageInfo;
            if (null != e.stage && (t.stage = 0 | e.stage), null != e.continueTime && (t.continueTime = 0 | e.continueTime), null != e.round_num && (t.round_num = String(e.round_num)), e.points) {
              if (!Array.isArray(e.points)) throw TypeError(".sevenup.SevenupStageInfo.points: array expected");
              t.points = [];
              for (var n = 0; n < e.points.length; ++n) t.points[n] = 0 | e.points[n]
            }
            if (null != e.isDouble && (t.isDouble = Boolean(e.isDouble)), e.doubles) {
              if (!Array.isArray(e.doubles)) throw TypeError(".sevenup.SevenupStageInfo.doubles: array expected");
              for (t.doubles = [], n = 0; n < e.doubles.length; ++n) t.doubles[n] = 0 | e.doubles[n]
            }
            return t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if ((t.arrays || t.defaults) && (n.points = [], n.doubles = []), t.defaults && (n.stage = 0, n.continueTime = 0, n.round_num = "", n.isDouble = !1), null != e.stage && e.hasOwnProperty("stage") && (n.stage = e.stage), null != e.continueTime && e.hasOwnProperty("continueTime") && (n.continueTime = e.continueTime), null != e.round_num && e.hasOwnProperty("round_num") && (n.round_num = e.round_num), e.points && e.points.length) {
              n.points = [];
              for (var i = 0; i < e.points.length; ++i) n.points[i] = e.points[i]
            }
            if (null != e.isDouble && e.hasOwnProperty("isDouble") && (n.isDouble = e.isDouble), e.doubles && e.doubles.length)
              for (n.doubles = [], i = 0; i < e.doubles.length; ++i) n.doubles[i] = e.doubles[i];
            return n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.VipUserInfo = function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.seatIndex = 0, e.prototype.userinfo = "", e.prototype.balance = p.Long ? p.Long.fromBits(0, 0, !1) : 0, e.prototype.totalWin = p.Long ? p.Long.fromBits(0, 0, !1) : 0, e.prototype.onlist = 0, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            return t || (t = f.create()), null != e.seatIndex && Object.hasOwnProperty.call(e, "seatIndex") && t.uint32(8).uint32(e.seatIndex), null != e.userinfo && Object.hasOwnProperty.call(e, "userinfo") && t.uint32(18).string(e.userinfo), null != e.balance && Object.hasOwnProperty.call(e, "balance") && t.uint32(24).int64(e.balance), null != e.totalWin && Object.hasOwnProperty.call(e, "totalWin") && t.uint32(32).int64(e.totalWin), null != e.onlist && Object.hasOwnProperty.call(e, "onlist") && t.uint32(40).int32(e.onlist), t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.VipUserInfo; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.seatIndex = e.uint32();
                  break;
                case 2:
                  i.userinfo = e.string();
                  break;
                case 3:
                  i.balance = e.int64();
                  break;
                case 4:
                  i.totalWin = e.int64();
                  break;
                case 5:
                  i.onlist = e.int32();
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            return "object" != typeof e || null === e ? "object expected" : null != e.seatIndex && e.hasOwnProperty("seatIndex") && !p.isInteger(e.seatIndex) ? "seatIndex: integer expected" : null != e.userinfo && e.hasOwnProperty("userinfo") && !p.isString(e.userinfo) ? "userinfo: string expected" : null != e.balance && e.hasOwnProperty("balance") && !(p.isInteger(e.balance) || e.balance && p.isInteger(e.balance.low) && p.isInteger(e.balance.high)) ? "balance: integer|Long expected" : null != e.totalWin && e.hasOwnProperty("totalWin") && !(p.isInteger(e.totalWin) || e.totalWin && p.isInteger(e.totalWin.low) && p.isInteger(e.totalWin.high)) ? "totalWin: integer|Long expected" : null != e.onlist && e.hasOwnProperty("onlist") && !p.isInteger(e.onlist) ? "onlist: integer expected" : null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.VipUserInfo) return e;
            var t = new b.sevenup.VipUserInfo;
            return null != e.seatIndex && (t.seatIndex = e.seatIndex >>> 0), null != e.userinfo && (t.userinfo = String(e.userinfo)), null != e.balance && (p.Long ? (t.balance = p.Long.fromValue(e.balance)).unsigned = !1 : "string" == typeof e.balance ? t.balance = parseInt(e.balance, 10) : "number" == typeof e.balance ? t.balance = e.balance : "object" == typeof e.balance && (t.balance = new p.LongBits(e.balance.low >>> 0, e.balance.high >>> 0).toNumber())), null != e.totalWin && (p.Long ? (t.totalWin = p.Long.fromValue(e.totalWin)).unsigned = !1 : "string" == typeof e.totalWin ? t.totalWin = parseInt(e.totalWin, 10) : "number" == typeof e.totalWin ? t.totalWin = e.totalWin : "object" == typeof e.totalWin && (t.totalWin = new p.LongBits(e.totalWin.low >>> 0, e.totalWin.high >>> 0).toNumber())), null != e.onlist && (t.onlist = 0 | e.onlist), t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if (t.defaults) {
              if (n.seatIndex = 0, n.userinfo = "", p.Long) {
                var i = new p.Long(0, 0, !1);
                n.balance = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
              } else n.balance = t.longs === String ? "0" : 0;
              p.Long ? (i = new p.Long(0, 0, !1), n.totalWin = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i) : n.totalWin = t.longs === String ? "0" : 0, n.onlist = 0
            }
            return null != e.seatIndex && e.hasOwnProperty("seatIndex") && (n.seatIndex = e.seatIndex), null != e.userinfo && e.hasOwnProperty("userinfo") && (n.userinfo = e.userinfo), null != e.balance && e.hasOwnProperty("balance") && ("number" == typeof e.balance ? n.balance = t.longs === String ? String(e.balance) : e.balance : n.balance = t.longs === String ? p.Long.prototype.toString.call(e.balance) : t.longs === Number ? new p.LongBits(e.balance.low >>> 0, e.balance.high >>> 0).toNumber() : e.balance), null != e.totalWin && e.hasOwnProperty("totalWin") && ("number" == typeof e.totalWin ? n.totalWin = t.longs === String ? String(e.totalWin) : e.totalWin : n.totalWin = t.longs === String ? p.Long.prototype.toString.call(e.totalWin) : t.longs === Number ? new p.LongBits(e.totalWin.low >>> 0, e.totalWin.high >>> 0).toNumber() : e.totalWin), null != e.onlist && e.hasOwnProperty("onlist") && (n.onlist = e.onlist), n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.RecommendChip = function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.chip = 0, e.prototype.balance_min = p.Long ? p.Long.fromBits(0, 0, !1) : 0, e.prototype.balance_max = p.Long ? p.Long.fromBits(0, 0, !1) : 0, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            return t || (t = f.create()), null != e.chip && Object.hasOwnProperty.call(e, "chip") && t.uint32(8).int32(e.chip), null != e.balance_min && Object.hasOwnProperty.call(e, "balance_min") && t.uint32(16).int64(e.balance_min), null != e.balance_max && Object.hasOwnProperty.call(e, "balance_max") && t.uint32(24).int64(e.balance_max), t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.RecommendChip; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.chip = e.int32();
                  break;
                case 2:
                  i.balance_min = e.int64();
                  break;
                case 3:
                  i.balance_max = e.int64();
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            return "object" != typeof e || null === e ? "object expected" : null != e.chip && e.hasOwnProperty("chip") && !p.isInteger(e.chip) ? "chip: integer expected" : null != e.balance_min && e.hasOwnProperty("balance_min") && !(p.isInteger(e.balance_min) || e.balance_min && p.isInteger(e.balance_min.low) && p.isInteger(e.balance_min.high)) ? "balance_min: integer|Long expected" : null != e.balance_max && e.hasOwnProperty("balance_max") && !(p.isInteger(e.balance_max) || e.balance_max && p.isInteger(e.balance_max.low) && p.isInteger(e.balance_max.high)) ? "balance_max: integer|Long expected" : null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.RecommendChip) return e;
            var t = new b.sevenup.RecommendChip;
            return null != e.chip && (t.chip = 0 | e.chip), null != e.balance_min && (p.Long ? (t.balance_min = p.Long.fromValue(e.balance_min)).unsigned = !1 : "string" == typeof e.balance_min ? t.balance_min = parseInt(e.balance_min, 10) : "number" == typeof e.balance_min ? t.balance_min = e.balance_min : "object" == typeof e.balance_min && (t.balance_min = new p.LongBits(e.balance_min.low >>> 0, e.balance_min.high >>> 0).toNumber())), null != e.balance_max && (p.Long ? (t.balance_max = p.Long.fromValue(e.balance_max)).unsigned = !1 : "string" == typeof e.balance_max ? t.balance_max = parseInt(e.balance_max, 10) : "number" == typeof e.balance_max ? t.balance_max = e.balance_max : "object" == typeof e.balance_max && (t.balance_max = new p.LongBits(e.balance_max.low >>> 0, e.balance_max.high >>> 0).toNumber())), t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if (t.defaults) {
              if (n.chip = 0, p.Long) {
                var i = new p.Long(0, 0, !1);
                n.balance_min = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
              } else n.balance_min = t.longs === String ? "0" : 0;
              p.Long ? (i = new p.Long(0, 0, !1), n.balance_max = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i) : n.balance_max = t.longs === String ? "0" : 0
            }
            return null != e.chip && e.hasOwnProperty("chip") && (n.chip = e.chip), null != e.balance_min && e.hasOwnProperty("balance_min") && ("number" == typeof e.balance_min ? n.balance_min = t.longs === String ? String(e.balance_min) : e.balance_min : n.balance_min = t.longs === String ? p.Long.prototype.toString.call(e.balance_min) : t.longs === Number ? new p.LongBits(e.balance_min.low >>> 0, e.balance_min.high >>> 0).toNumber() : e.balance_min), null != e.balance_max && e.hasOwnProperty("balance_max") && ("number" == typeof e.balance_max ? n.balance_max = t.longs === String ? String(e.balance_max) : e.balance_max : n.balance_max = t.longs === String ? p.Long.prototype.toString.call(e.balance_max) : t.longs === Number ? new p.LongBits(e.balance_max.low >>> 0, e.balance_max.high >>> 0).toNumber() : e.balance_max), n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.SevenupTableInfo = function () {
          function e(e) {
            if (this.vipinfoList = [], this.betInfo = [], this.selfBet = [], this.betLimit = [], this.odds = [], e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.table_id = 0, e.prototype.stage_info = null, e.prototype.user_count = 0, e.prototype.vip_seat_count = 0, e.prototype.vipinfoList = p.emptyArray, e.prototype.betInfo = p.emptyArray, e.prototype.selfBet = p.emptyArray, e.prototype.betLimit = p.emptyArray, e.prototype.odds = p.emptyArray, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            if (t || (t = f.create()), null != e.table_id && Object.hasOwnProperty.call(e, "table_id") && t.uint32(8).int32(e.table_id), null != e.stage_info && Object.hasOwnProperty.call(e, "stage_info") && b.sevenup.SevenupStageInfo.encode(e.stage_info, t.uint32(18).fork()).ldelim(), null != e.user_count && Object.hasOwnProperty.call(e, "user_count") && t.uint32(24).int32(e.user_count), null != e.vip_seat_count && Object.hasOwnProperty.call(e, "vip_seat_count") && t.uint32(32).int32(e.vip_seat_count), null != e.vipinfoList && e.vipinfoList.length)
              for (var n = 0; n < e.vipinfoList.length; ++n) b.sevenup.VipUserInfo.encode(e.vipinfoList[n], t.uint32(42).fork()).ldelim();
            if (null != e.betInfo && e.betInfo.length) {
              for (t.uint32(50).fork(), n = 0; n < e.betInfo.length; ++n) t.int64(e.betInfo[n]);
              t.ldelim()
            }
            if (null != e.selfBet && e.selfBet.length) {
              for (t.uint32(58).fork(), n = 0; n < e.selfBet.length; ++n) t.int64(e.selfBet[n]);
              t.ldelim()
            }
            if (null != e.betLimit && e.betLimit.length) {
              for (t.uint32(66).fork(), n = 0; n < e.betLimit.length; ++n) t.int64(e.betLimit[n]);
              t.ldelim()
            }
            if (null != e.odds && e.odds.length) {
              for (t.uint32(74).fork(), n = 0; n < e.odds.length; ++n) t.int64(e.odds[n]);
              t.ldelim()
            }
            return t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupTableInfo; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.table_id = e.int32();
                  break;
                case 2:
                  i.stage_info = b.sevenup.SevenupStageInfo.decode(e, e.uint32());
                  break;
                case 3:
                  i.user_count = e.int32();
                  break;
                case 4:
                  i.vip_seat_count = e.int32();
                  break;
                case 5:
                  i.vipinfoList && i.vipinfoList.length || (i.vipinfoList = []), i.vipinfoList.push(b.sevenup.VipUserInfo.decode(e, e.uint32()));
                  break;
                case 6:
                  if (i.betInfo && i.betInfo.length || (i.betInfo = []), 2 == (7 & o))
                    for (var r = e.uint32() + e.pos; e.pos < r;) i.betInfo.push(e.int64());
                  else i.betInfo.push(e.int64());
                  break;
                case 7:
                  if (i.selfBet && i.selfBet.length || (i.selfBet = []), 2 == (7 & o))
                    for (r = e.uint32() + e.pos; e.pos < r;) i.selfBet.push(e.int64());
                  else i.selfBet.push(e.int64());
                  break;
                case 8:
                  if (i.betLimit && i.betLimit.length || (i.betLimit = []), 2 == (7 & o))
                    for (r = e.uint32() + e.pos; e.pos < r;) i.betLimit.push(e.int64());
                  else i.betLimit.push(e.int64());
                  break;
                case 9:
                  if (i.odds && i.odds.length || (i.odds = []), 2 == (7 & o))
                    for (r = e.uint32() + e.pos; e.pos < r;) i.odds.push(e.int64());
                  else i.odds.push(e.int64());
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.table_id && e.hasOwnProperty("table_id") && !p.isInteger(e.table_id)) return "table_id: integer expected";
            if (null != e.stage_info && e.hasOwnProperty("stage_info") && (n = b.sevenup.SevenupStageInfo.verify(e.stage_info))) return "stage_info." + n;
            if (null != e.user_count && e.hasOwnProperty("user_count") && !p.isInteger(e.user_count)) return "user_count: integer expected";
            if (null != e.vip_seat_count && e.hasOwnProperty("vip_seat_count") && !p.isInteger(e.vip_seat_count)) return "vip_seat_count: integer expected";
            if (null != e.vipinfoList && e.hasOwnProperty("vipinfoList")) {
              if (!Array.isArray(e.vipinfoList)) return "vipinfoList: array expected";
              for (var t = 0; t < e.vipinfoList.length; ++t) {
                var n;
                if (n = b.sevenup.VipUserInfo.verify(e.vipinfoList[t])) return "vipinfoList." + n
              }
            }
            if (null != e.betInfo && e.hasOwnProperty("betInfo")) {
              if (!Array.isArray(e.betInfo)) return "betInfo: array expected";
              for (t = 0; t < e.betInfo.length; ++t)
                if (!(p.isInteger(e.betInfo[t]) || e.betInfo[t] && p.isInteger(e.betInfo[t].low) && p.isInteger(e.betInfo[t].high))) return "betInfo: integer|Long[] expected"
            }
            if (null != e.selfBet && e.hasOwnProperty("selfBet")) {
              if (!Array.isArray(e.selfBet)) return "selfBet: array expected";
              for (t = 0; t < e.selfBet.length; ++t)
                if (!(p.isInteger(e.selfBet[t]) || e.selfBet[t] && p.isInteger(e.selfBet[t].low) && p.isInteger(e.selfBet[t].high))) return "selfBet: integer|Long[] expected"
            }
            if (null != e.betLimit && e.hasOwnProperty("betLimit")) {
              if (!Array.isArray(e.betLimit)) return "betLimit: array expected";
              for (t = 0; t < e.betLimit.length; ++t)
                if (!(p.isInteger(e.betLimit[t]) || e.betLimit[t] && p.isInteger(e.betLimit[t].low) && p.isInteger(e.betLimit[t].high))) return "betLimit: integer|Long[] expected"
            }
            if (null != e.odds && e.hasOwnProperty("odds")) {
              if (!Array.isArray(e.odds)) return "odds: array expected";
              for (t = 0; t < e.odds.length; ++t)
                if (!(p.isInteger(e.odds[t]) || e.odds[t] && p.isInteger(e.odds[t].low) && p.isInteger(e.odds[t].high))) return "odds: integer|Long[] expected"
            }
            return null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupTableInfo) return e;
            var t = new b.sevenup.SevenupTableInfo;
            if (null != e.table_id && (t.table_id = 0 | e.table_id), null != e.stage_info) {
              if ("object" != typeof e.stage_info) throw TypeError(".sevenup.SevenupTableInfo.stage_info: object expected");
              t.stage_info = b.sevenup.SevenupStageInfo.fromObject(e.stage_info)
            }
            if (null != e.user_count && (t.user_count = 0 | e.user_count), null != e.vip_seat_count && (t.vip_seat_count = 0 | e.vip_seat_count), e.vipinfoList) {
              if (!Array.isArray(e.vipinfoList)) throw TypeError(".sevenup.SevenupTableInfo.vipinfoList: array expected");
              t.vipinfoList = [];
              for (var n = 0; n < e.vipinfoList.length; ++n) {
                if ("object" != typeof e.vipinfoList[n]) throw TypeError(".sevenup.SevenupTableInfo.vipinfoList: object expected");
                t.vipinfoList[n] = b.sevenup.VipUserInfo.fromObject(e.vipinfoList[n])
              }
            }
            if (e.betInfo) {
              if (!Array.isArray(e.betInfo)) throw TypeError(".sevenup.SevenupTableInfo.betInfo: array expected");
              for (t.betInfo = [], n = 0; n < e.betInfo.length; ++n) p.Long ? (t.betInfo[n] = p.Long.fromValue(e.betInfo[n])).unsigned = !1 : "string" == typeof e.betInfo[n] ? t.betInfo[n] = parseInt(e.betInfo[n], 10) : "number" == typeof e.betInfo[n] ? t.betInfo[n] = e.betInfo[n] : "object" == typeof e.betInfo[n] && (t.betInfo[n] = new p.LongBits(e.betInfo[n].low >>> 0, e.betInfo[n].high >>> 0).toNumber())
            }
            if (e.selfBet) {
              if (!Array.isArray(e.selfBet)) throw TypeError(".sevenup.SevenupTableInfo.selfBet: array expected");
              for (t.selfBet = [], n = 0; n < e.selfBet.length; ++n) p.Long ? (t.selfBet[n] = p.Long.fromValue(e.selfBet[n])).unsigned = !1 : "string" == typeof e.selfBet[n] ? t.selfBet[n] = parseInt(e.selfBet[n], 10) : "number" == typeof e.selfBet[n] ? t.selfBet[n] = e.selfBet[n] : "object" == typeof e.selfBet[n] && (t.selfBet[n] = new p.LongBits(e.selfBet[n].low >>> 0, e.selfBet[n].high >>> 0).toNumber())
            }
            if (e.betLimit) {
              if (!Array.isArray(e.betLimit)) throw TypeError(".sevenup.SevenupTableInfo.betLimit: array expected");
              for (t.betLimit = [], n = 0; n < e.betLimit.length; ++n) p.Long ? (t.betLimit[n] = p.Long.fromValue(e.betLimit[n])).unsigned = !1 : "string" == typeof e.betLimit[n] ? t.betLimit[n] = parseInt(e.betLimit[n], 10) : "number" == typeof e.betLimit[n] ? t.betLimit[n] = e.betLimit[n] : "object" == typeof e.betLimit[n] && (t.betLimit[n] = new p.LongBits(e.betLimit[n].low >>> 0, e.betLimit[n].high >>> 0).toNumber())
            }
            if (e.odds) {
              if (!Array.isArray(e.odds)) throw TypeError(".sevenup.SevenupTableInfo.odds: array expected");
              for (t.odds = [], n = 0; n < e.odds.length; ++n) p.Long ? (t.odds[n] = p.Long.fromValue(e.odds[n])).unsigned = !1 : "string" == typeof e.odds[n] ? t.odds[n] = parseInt(e.odds[n], 10) : "number" == typeof e.odds[n] ? t.odds[n] = e.odds[n] : "object" == typeof e.odds[n] && (t.odds[n] = new p.LongBits(e.odds[n].low >>> 0, e.odds[n].high >>> 0).toNumber())
            }
            return t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if ((t.arrays || t.defaults) && (n.vipinfoList = [], n.betInfo = [], n.selfBet = [], n.betLimit = [], n.odds = []), t.defaults && (n.table_id = 0, n.stage_info = null, n.user_count = 0, n.vip_seat_count = 0), null != e.table_id && e.hasOwnProperty("table_id") && (n.table_id = e.table_id), null != e.stage_info && e.hasOwnProperty("stage_info") && (n.stage_info = b.sevenup.SevenupStageInfo.toObject(e.stage_info, t)), null != e.user_count && e.hasOwnProperty("user_count") && (n.user_count = e.user_count), null != e.vip_seat_count && e.hasOwnProperty("vip_seat_count") && (n.vip_seat_count = e.vip_seat_count), e.vipinfoList && e.vipinfoList.length) {
              n.vipinfoList = [];
              for (var i = 0; i < e.vipinfoList.length; ++i) n.vipinfoList[i] = b.sevenup.VipUserInfo.toObject(e.vipinfoList[i], t)
            }
            if (e.betInfo && e.betInfo.length)
              for (n.betInfo = [], i = 0; i < e.betInfo.length; ++i) "number" == typeof e.betInfo[i] ? n.betInfo[i] = t.longs === String ? String(e.betInfo[i]) : e.betInfo[i] : n.betInfo[i] = t.longs === String ? p.Long.prototype.toString.call(e.betInfo[i]) : t.longs === Number ? new p.LongBits(e.betInfo[i].low >>> 0, e.betInfo[i].high >>> 0).toNumber() : e.betInfo[i];
            if (e.selfBet && e.selfBet.length)
              for (n.selfBet = [], i = 0; i < e.selfBet.length; ++i) "number" == typeof e.selfBet[i] ? n.selfBet[i] = t.longs === String ? String(e.selfBet[i]) : e.selfBet[i] : n.selfBet[i] = t.longs === String ? p.Long.prototype.toString.call(e.selfBet[i]) : t.longs === Number ? new p.LongBits(e.selfBet[i].low >>> 0, e.selfBet[i].high >>> 0).toNumber() : e.selfBet[i];
            if (e.betLimit && e.betLimit.length)
              for (n.betLimit = [], i = 0; i < e.betLimit.length; ++i) "number" == typeof e.betLimit[i] ? n.betLimit[i] = t.longs === String ? String(e.betLimit[i]) : e.betLimit[i] : n.betLimit[i] = t.longs === String ? p.Long.prototype.toString.call(e.betLimit[i]) : t.longs === Number ? new p.LongBits(e.betLimit[i].low >>> 0, e.betLimit[i].high >>> 0).toNumber() : e.betLimit[i];
            if (e.odds && e.odds.length)
              for (n.odds = [], i = 0; i < e.odds.length; ++i) "number" == typeof e.odds[i] ? n.odds[i] = t.longs === String ? String(e.odds[i]) : e.odds[i] : n.odds[i] = t.longs === String ? p.Long.prototype.toString.call(e.odds[i]) : t.longs === Number ? new p.LongBits(e.odds[i].low >>> 0, e.odds[i].high >>> 0).toNumber() : e.odds[i];
            return n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.BetItem = function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.zone = 0, e.prototype.amount = p.Long ? p.Long.fromBits(0, 0, !1) : 0, e.prototype.seatIndex = 0, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            return t || (t = f.create()), null != e.zone && Object.hasOwnProperty.call(e, "zone") && t.uint32(8).int32(e.zone), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(16).int64(e.amount), null != e.seatIndex && Object.hasOwnProperty.call(e, "seatIndex") && t.uint32(24).int32(e.seatIndex), t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.BetItem; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.zone = e.int32();
                  break;
                case 2:
                  i.amount = e.int64();
                  break;
                case 3:
                  i.seatIndex = e.int32();
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            return "object" != typeof e || null === e ? "object expected" : null != e.zone && e.hasOwnProperty("zone") && !p.isInteger(e.zone) ? "zone: integer expected" : null != e.amount && e.hasOwnProperty("amount") && !(p.isInteger(e.amount) || e.amount && p.isInteger(e.amount.low) && p.isInteger(e.amount.high)) ? "amount: integer|Long expected" : null != e.seatIndex && e.hasOwnProperty("seatIndex") && !p.isInteger(e.seatIndex) ? "seatIndex: integer expected" : null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.BetItem) return e;
            var t = new b.sevenup.BetItem;
            return null != e.zone && (t.zone = 0 | e.zone), null != e.amount && (p.Long ? (t.amount = p.Long.fromValue(e.amount)).unsigned = !1 : "string" == typeof e.amount ? t.amount = parseInt(e.amount, 10) : "number" == typeof e.amount ? t.amount = e.amount : "object" == typeof e.amount && (t.amount = new p.LongBits(e.amount.low >>> 0, e.amount.high >>> 0).toNumber())), null != e.seatIndex && (t.seatIndex = 0 | e.seatIndex), t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if (t.defaults) {
              if (n.zone = 0, p.Long) {
                var i = new p.Long(0, 0, !1);
                n.amount = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
              } else n.amount = t.longs === String ? "0" : 0;
              n.seatIndex = 0
            }
            return null != e.zone && e.hasOwnProperty("zone") && (n.zone = e.zone), null != e.amount && e.hasOwnProperty("amount") && ("number" == typeof e.amount ? n.amount = t.longs === String ? String(e.amount) : e.amount : n.amount = t.longs === String ? p.Long.prototype.toString.call(e.amount) : t.longs === Number ? new p.LongBits(e.amount.low >>> 0, e.amount.high >>> 0).toNumber() : e.amount), null != e.seatIndex && e.hasOwnProperty("seatIndex") && (n.seatIndex = e.seatIndex), n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.SevenupUserBetReq = function () {
          function e(e) {
            if (this.betList = [], e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.betList = p.emptyArray, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            if (t || (t = f.create()), null != e.betList && e.betList.length)
              for (var n = 0; n < e.betList.length; ++n) b.sevenup.BetItem.encode(e.betList[n], t.uint32(10).fork()).ldelim();
            return t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupUserBetReq; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.betList && i.betList.length || (i.betList = []), i.betList.push(b.sevenup.BetItem.decode(e, e.uint32()));
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.betList && e.hasOwnProperty("betList")) {
              if (!Array.isArray(e.betList)) return "betList: array expected";
              for (var t = 0; t < e.betList.length; ++t) {
                var n = b.sevenup.BetItem.verify(e.betList[t]);
                if (n) return "betList." + n
              }
            }
            return null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupUserBetReq) return e;
            var t = new b.sevenup.SevenupUserBetReq;
            if (e.betList) {
              if (!Array.isArray(e.betList)) throw TypeError(".sevenup.SevenupUserBetReq.betList: array expected");
              t.betList = [];
              for (var n = 0; n < e.betList.length; ++n) {
                if ("object" != typeof e.betList[n]) throw TypeError(".sevenup.SevenupUserBetReq.betList: object expected");
                t.betList[n] = b.sevenup.BetItem.fromObject(e.betList[n])
              }
            }
            return t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if ((t.arrays || t.defaults) && (n.betList = []), e.betList && e.betList.length) {
              n.betList = [];
              for (var i = 0; i < e.betList.length; ++i) n.betList[i] = b.sevenup.BetItem.toObject(e.betList[i], t)
            }
            return n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.SevenupUserBetResp = function () {
          function e(e) {
            if (this.selfBet = [], e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.result = 0, e.prototype.balance = p.Long ? p.Long.fromBits(0, 0, !1) : 0, e.prototype.selfBet = p.emptyArray, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            if (t || (t = f.create()), null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(8).int32(e.result), null != e.balance && Object.hasOwnProperty.call(e, "balance") && t.uint32(16).int64(e.balance), null != e.selfBet && e.selfBet.length) {
              t.uint32(26).fork();
              for (var n = 0; n < e.selfBet.length; ++n) t.int64(e.selfBet[n]);
              t.ldelim()
            }
            return t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupUserBetResp; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.result = e.int32();
                  break;
                case 2:
                  i.balance = e.int64();
                  break;
                case 3:
                  if (i.selfBet && i.selfBet.length || (i.selfBet = []), 2 == (7 & o))
                    for (var r = e.uint32() + e.pos; e.pos < r;) i.selfBet.push(e.int64());
                  else i.selfBet.push(e.int64());
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.result && e.hasOwnProperty("result") && !p.isInteger(e.result)) return "result: integer expected";
            if (null != e.balance && e.hasOwnProperty("balance") && !(p.isInteger(e.balance) || e.balance && p.isInteger(e.balance.low) && p.isInteger(e.balance.high))) return "balance: integer|Long expected";
            if (null != e.selfBet && e.hasOwnProperty("selfBet")) {
              if (!Array.isArray(e.selfBet)) return "selfBet: array expected";
              for (var t = 0; t < e.selfBet.length; ++t)
                if (!(p.isInteger(e.selfBet[t]) || e.selfBet[t] && p.isInteger(e.selfBet[t].low) && p.isInteger(e.selfBet[t].high))) return "selfBet: integer|Long[] expected"
            }
            return null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupUserBetResp) return e;
            var t = new b.sevenup.SevenupUserBetResp;
            if (null != e.result && (t.result = 0 | e.result), null != e.balance && (p.Long ? (t.balance = p.Long.fromValue(e.balance)).unsigned = !1 : "string" == typeof e.balance ? t.balance = parseInt(e.balance, 10) : "number" == typeof e.balance ? t.balance = e.balance : "object" == typeof e.balance && (t.balance = new p.LongBits(e.balance.low >>> 0, e.balance.high >>> 0).toNumber())), e.selfBet) {
              if (!Array.isArray(e.selfBet)) throw TypeError(".sevenup.SevenupUserBetResp.selfBet: array expected");
              t.selfBet = [];
              for (var n = 0; n < e.selfBet.length; ++n) p.Long ? (t.selfBet[n] = p.Long.fromValue(e.selfBet[n])).unsigned = !1 : "string" == typeof e.selfBet[n] ? t.selfBet[n] = parseInt(e.selfBet[n], 10) : "number" == typeof e.selfBet[n] ? t.selfBet[n] = e.selfBet[n] : "object" == typeof e.selfBet[n] && (t.selfBet[n] = new p.LongBits(e.selfBet[n].low >>> 0, e.selfBet[n].high >>> 0).toNumber())
            }
            return t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if ((t.arrays || t.defaults) && (n.selfBet = []), t.defaults)
              if (n.result = 0, p.Long) {
                var i = new p.Long(0, 0, !1);
                n.balance = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
              } else n.balance = t.longs === String ? "0" : 0;
            if (null != e.result && e.hasOwnProperty("result") && (n.result = e.result), null != e.balance && e.hasOwnProperty("balance") && ("number" == typeof e.balance ? n.balance = t.longs === String ? String(e.balance) : e.balance : n.balance = t.longs === String ? p.Long.prototype.toString.call(e.balance) : t.longs === Number ? new p.LongBits(e.balance.low >>> 0, e.balance.high >>> 0).toNumber() : e.balance), e.selfBet && e.selfBet.length) {
              n.selfBet = [];
              for (var o = 0; o < e.selfBet.length; ++o) "number" == typeof e.selfBet[o] ? n.selfBet[o] = t.longs === String ? String(e.selfBet[o]) : e.selfBet[o] : n.selfBet[o] = t.longs === String ? p.Long.prototype.toString.call(e.selfBet[o]) : t.longs === Number ? new p.LongBits(e.selfBet[o].low >>> 0, e.selfBet[o].high >>> 0).toNumber() : e.selfBet[o]
            }
            return n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.SevenupUserBetPush = function () {
          function e(e) {
            if (this.totalBet = [], this.selfBet = [], this.betinfoList = [], e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.totalBet = p.emptyArray, e.prototype.selfBet = p.emptyArray, e.prototype.betinfoList = p.emptyArray, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            if (t || (t = f.create()), null != e.totalBet && e.totalBet.length) {
              t.uint32(10).fork();
              for (var n = 0; n < e.totalBet.length; ++n) t.int64(e.totalBet[n]);
              t.ldelim()
            }
            if (null != e.selfBet && e.selfBet.length) {
              for (t.uint32(18).fork(), n = 0; n < e.selfBet.length; ++n) t.int64(e.selfBet[n]);
              t.ldelim()
            }
            if (null != e.betinfoList && e.betinfoList.length)
              for (n = 0; n < e.betinfoList.length; ++n) b.sevenup.BetItem.encode(e.betinfoList[n], t.uint32(26).fork()).ldelim();
            return t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupUserBetPush; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  if (i.totalBet && i.totalBet.length || (i.totalBet = []), 2 == (7 & o))
                    for (var r = e.uint32() + e.pos; e.pos < r;) i.totalBet.push(e.int64());
                  else i.totalBet.push(e.int64());
                  break;
                case 2:
                  if (i.selfBet && i.selfBet.length || (i.selfBet = []), 2 == (7 & o))
                    for (r = e.uint32() + e.pos; e.pos < r;) i.selfBet.push(e.int64());
                  else i.selfBet.push(e.int64());
                  break;
                case 3:
                  i.betinfoList && i.betinfoList.length || (i.betinfoList = []), i.betinfoList.push(b.sevenup.BetItem.decode(e, e.uint32()));
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.totalBet && e.hasOwnProperty("totalBet")) {
              if (!Array.isArray(e.totalBet)) return "totalBet: array expected";
              for (var t = 0; t < e.totalBet.length; ++t)
                if (!(p.isInteger(e.totalBet[t]) || e.totalBet[t] && p.isInteger(e.totalBet[t].low) && p.isInteger(e.totalBet[t].high))) return "totalBet: integer|Long[] expected"
            }
            if (null != e.selfBet && e.hasOwnProperty("selfBet")) {
              if (!Array.isArray(e.selfBet)) return "selfBet: array expected";
              for (t = 0; t < e.selfBet.length; ++t)
                if (!(p.isInteger(e.selfBet[t]) || e.selfBet[t] && p.isInteger(e.selfBet[t].low) && p.isInteger(e.selfBet[t].high))) return "selfBet: integer|Long[] expected"
            }
            if (null != e.betinfoList && e.hasOwnProperty("betinfoList")) {
              if (!Array.isArray(e.betinfoList)) return "betinfoList: array expected";
              for (t = 0; t < e.betinfoList.length; ++t) {
                var n = b.sevenup.BetItem.verify(e.betinfoList[t]);
                if (n) return "betinfoList." + n
              }
            }
            return null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupUserBetPush) return e;
            var t = new b.sevenup.SevenupUserBetPush;
            if (e.totalBet) {
              if (!Array.isArray(e.totalBet)) throw TypeError(".sevenup.SevenupUserBetPush.totalBet: array expected");
              t.totalBet = [];
              for (var n = 0; n < e.totalBet.length; ++n) p.Long ? (t.totalBet[n] = p.Long.fromValue(e.totalBet[n])).unsigned = !1 : "string" == typeof e.totalBet[n] ? t.totalBet[n] = parseInt(e.totalBet[n], 10) : "number" == typeof e.totalBet[n] ? t.totalBet[n] = e.totalBet[n] : "object" == typeof e.totalBet[n] && (t.totalBet[n] = new p.LongBits(e.totalBet[n].low >>> 0, e.totalBet[n].high >>> 0).toNumber())
            }
            if (e.selfBet) {
              if (!Array.isArray(e.selfBet)) throw TypeError(".sevenup.SevenupUserBetPush.selfBet: array expected");
              for (t.selfBet = [], n = 0; n < e.selfBet.length; ++n) p.Long ? (t.selfBet[n] = p.Long.fromValue(e.selfBet[n])).unsigned = !1 : "string" == typeof e.selfBet[n] ? t.selfBet[n] = parseInt(e.selfBet[n], 10) : "number" == typeof e.selfBet[n] ? t.selfBet[n] = e.selfBet[n] : "object" == typeof e.selfBet[n] && (t.selfBet[n] = new p.LongBits(e.selfBet[n].low >>> 0, e.selfBet[n].high >>> 0).toNumber())
            }
            if (e.betinfoList) {
              if (!Array.isArray(e.betinfoList)) throw TypeError(".sevenup.SevenupUserBetPush.betinfoList: array expected");
              for (t.betinfoList = [], n = 0; n < e.betinfoList.length; ++n) {
                if ("object" != typeof e.betinfoList[n]) throw TypeError(".sevenup.SevenupUserBetPush.betinfoList: object expected");
                t.betinfoList[n] = b.sevenup.BetItem.fromObject(e.betinfoList[n])
              }
            }
            return t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if ((t.arrays || t.defaults) && (n.totalBet = [], n.selfBet = [], n.betinfoList = []), e.totalBet && e.totalBet.length) {
              n.totalBet = [];
              for (var i = 0; i < e.totalBet.length; ++i) "number" == typeof e.totalBet[i] ? n.totalBet[i] = t.longs === String ? String(e.totalBet[i]) : e.totalBet[i] : n.totalBet[i] = t.longs === String ? p.Long.prototype.toString.call(e.totalBet[i]) : t.longs === Number ? new p.LongBits(e.totalBet[i].low >>> 0, e.totalBet[i].high >>> 0).toNumber() : e.totalBet[i]
            }
            if (e.selfBet && e.selfBet.length)
              for (n.selfBet = [], i = 0; i < e.selfBet.length; ++i) "number" == typeof e.selfBet[i] ? n.selfBet[i] = t.longs === String ? String(e.selfBet[i]) : e.selfBet[i] : n.selfBet[i] = t.longs === String ? p.Long.prototype.toString.call(e.selfBet[i]) : t.longs === Number ? new p.LongBits(e.selfBet[i].low >>> 0, e.selfBet[i].high >>> 0).toNumber() : e.selfBet[i];
            if (e.betinfoList && e.betinfoList.length)
              for (n.betinfoList = [], i = 0; i < e.betinfoList.length; ++i) n.betinfoList[i] = b.sevenup.BetItem.toObject(e.betinfoList[i], t);
            return n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.WinInfo = function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.point1 = 0, e.prototype.point2 = 0, e.prototype.isDouble = !1, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            return t || (t = f.create()), null != e.point1 && Object.hasOwnProperty.call(e, "point1") && t.uint32(8).int32(e.point1), null != e.point2 && Object.hasOwnProperty.call(e, "point2") && t.uint32(16).int32(e.point2), null != e.isDouble && Object.hasOwnProperty.call(e, "isDouble") && t.uint32(24).bool(e.isDouble), t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.WinInfo; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.point1 = e.int32();
                  break;
                case 2:
                  i.point2 = e.int32();
                  break;
                case 3:
                  i.isDouble = e.bool();
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            return "object" != typeof e || null === e ? "object expected" : null != e.point1 && e.hasOwnProperty("point1") && !p.isInteger(e.point1) ? "point1: integer expected" : null != e.point2 && e.hasOwnProperty("point2") && !p.isInteger(e.point2) ? "point2: integer expected" : null != e.isDouble && e.hasOwnProperty("isDouble") && "boolean" != typeof e.isDouble ? "isDouble: boolean expected" : null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.WinInfo) return e;
            var t = new b.sevenup.WinInfo;
            return null != e.point1 && (t.point1 = 0 | e.point1), null != e.point2 && (t.point2 = 0 | e.point2), null != e.isDouble && (t.isDouble = Boolean(e.isDouble)), t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            return t.defaults && (n.point1 = 0, n.point2 = 0, n.isDouble = !1), null != e.point1 && e.hasOwnProperty("point1") && (n.point1 = e.point1), null != e.point2 && e.hasOwnProperty("point2") && (n.point2 = e.point2), null != e.isDouble && e.hasOwnProperty("isDouble") && (n.isDouble = e.isDouble), n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.SevenupHistoryLotteryReq = function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.num = 0, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            return t || (t = f.create()), null != e.num && Object.hasOwnProperty.call(e, "num") && t.uint32(8).int32(e.num), t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupHistoryLotteryReq; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.num = e.int32();
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            return "object" != typeof e || null === e ? "object expected" : null != e.num && e.hasOwnProperty("num") && !p.isInteger(e.num) ? "num: integer expected" : null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupHistoryLotteryReq) return e;
            var t = new b.sevenup.SevenupHistoryLotteryReq;
            return null != e.num && (t.num = 0 | e.num), t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            return t.defaults && (n.num = 0), null != e.num && e.hasOwnProperty("num") && (n.num = e.num), n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.SevenupHistoryLotteryResp = function () {
          function e(e) {
            if (this.winInfoList = [], this.winRateList = [], e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.result = 0, e.prototype.handsNum = 0, e.prototype.winInfoList = p.emptyArray, e.prototype.winRateList = p.emptyArray, e.prototype.index = 0, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            if (t || (t = f.create()), null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(8).int32(e.result), null != e.handsNum && Object.hasOwnProperty.call(e, "handsNum") && t.uint32(16).int32(e.handsNum), null != e.winInfoList && e.winInfoList.length)
              for (var n = 0; n < e.winInfoList.length; ++n) b.sevenup.WinInfo.encode(e.winInfoList[n], t.uint32(26).fork()).ldelim();
            if (null != e.winRateList && e.winRateList.length) {
              for (t.uint32(34).fork(), n = 0; n < e.winRateList.length; ++n) t.int32(e.winRateList[n]);
              t.ldelim()
            }
            return null != e.index && Object.hasOwnProperty.call(e, "index") && t.uint32(40).int32(e.index), t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupHistoryLotteryResp; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.result = e.int32();
                  break;
                case 2:
                  i.handsNum = e.int32();
                  break;
                case 3:
                  i.winInfoList && i.winInfoList.length || (i.winInfoList = []), i.winInfoList.push(b.sevenup.WinInfo.decode(e, e.uint32()));
                  break;
                case 4:
                  if (i.winRateList && i.winRateList.length || (i.winRateList = []), 2 == (7 & o))
                    for (var r = e.uint32() + e.pos; e.pos < r;) i.winRateList.push(e.int32());
                  else i.winRateList.push(e.int32());
                  break;
                case 5:
                  i.index = e.int32();
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.result && e.hasOwnProperty("result") && !p.isInteger(e.result)) return "result: integer expected";
            if (null != e.handsNum && e.hasOwnProperty("handsNum") && !p.isInteger(e.handsNum)) return "handsNum: integer expected";
            if (null != e.winInfoList && e.hasOwnProperty("winInfoList")) {
              if (!Array.isArray(e.winInfoList)) return "winInfoList: array expected";
              for (var t = 0; t < e.winInfoList.length; ++t) {
                var n = b.sevenup.WinInfo.verify(e.winInfoList[t]);
                if (n) return "winInfoList." + n
              }
            }
            if (null != e.winRateList && e.hasOwnProperty("winRateList")) {
              if (!Array.isArray(e.winRateList)) return "winRateList: array expected";
              for (t = 0; t < e.winRateList.length; ++t)
                if (!p.isInteger(e.winRateList[t])) return "winRateList: integer[] expected"
            }
            return null != e.index && e.hasOwnProperty("index") && !p.isInteger(e.index) ? "index: integer expected" : null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupHistoryLotteryResp) return e;
            var t = new b.sevenup.SevenupHistoryLotteryResp;
            if (null != e.result && (t.result = 0 | e.result), null != e.handsNum && (t.handsNum = 0 | e.handsNum), e.winInfoList) {
              if (!Array.isArray(e.winInfoList)) throw TypeError(".sevenup.SevenupHistoryLotteryResp.winInfoList: array expected");
              t.winInfoList = [];
              for (var n = 0; n < e.winInfoList.length; ++n) {
                if ("object" != typeof e.winInfoList[n]) throw TypeError(".sevenup.SevenupHistoryLotteryResp.winInfoList: object expected");
                t.winInfoList[n] = b.sevenup.WinInfo.fromObject(e.winInfoList[n])
              }
            }
            if (e.winRateList) {
              if (!Array.isArray(e.winRateList)) throw TypeError(".sevenup.SevenupHistoryLotteryResp.winRateList: array expected");
              for (t.winRateList = [], n = 0; n < e.winRateList.length; ++n) t.winRateList[n] = 0 | e.winRateList[n]
            }
            return null != e.index && (t.index = 0 | e.index), t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if ((t.arrays || t.defaults) && (n.winInfoList = [], n.winRateList = []), t.defaults && (n.result = 0, n.handsNum = 0, n.index = 0), null != e.result && e.hasOwnProperty("result") && (n.result = e.result), null != e.handsNum && e.hasOwnProperty("handsNum") && (n.handsNum = e.handsNum), e.winInfoList && e.winInfoList.length) {
              n.winInfoList = [];
              for (var i = 0; i < e.winInfoList.length; ++i) n.winInfoList[i] = b.sevenup.WinInfo.toObject(e.winInfoList[i], t)
            }
            if (e.winRateList && e.winRateList.length)
              for (n.winRateList = [], i = 0; i < e.winRateList.length; ++i) n.winRateList[i] = e.winRateList[i];
            return null != e.index && e.hasOwnProperty("index") && (n.index = e.index), n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.SevenupHistoryData = function () {
          function e(e) {
            if (this.winInfoList = [], e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.winInfoList = p.emptyArray, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            if (t || (t = f.create()), null != e.winInfoList && e.winInfoList.length)
              for (var n = 0; n < e.winInfoList.length; ++n) b.sevenup.WinInfo.encode(e.winInfoList[n], t.uint32(10).fork()).ldelim();
            return t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupHistoryData; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.winInfoList && i.winInfoList.length || (i.winInfoList = []), i.winInfoList.push(b.sevenup.WinInfo.decode(e, e.uint32()));
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.winInfoList && e.hasOwnProperty("winInfoList")) {
              if (!Array.isArray(e.winInfoList)) return "winInfoList: array expected";
              for (var t = 0; t < e.winInfoList.length; ++t) {
                var n = b.sevenup.WinInfo.verify(e.winInfoList[t]);
                if (n) return "winInfoList." + n
              }
            }
            return null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupHistoryData) return e;
            var t = new b.sevenup.SevenupHistoryData;
            if (e.winInfoList) {
              if (!Array.isArray(e.winInfoList)) throw TypeError(".sevenup.SevenupHistoryData.winInfoList: array expected");
              t.winInfoList = [];
              for (var n = 0; n < e.winInfoList.length; ++n) {
                if ("object" != typeof e.winInfoList[n]) throw TypeError(".sevenup.SevenupHistoryData.winInfoList: object expected");
                t.winInfoList[n] = b.sevenup.WinInfo.fromObject(e.winInfoList[n])
              }
            }
            return t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if ((t.arrays || t.defaults) && (n.winInfoList = []), e.winInfoList && e.winInfoList.length) {
              n.winInfoList = [];
              for (var i = 0; i < e.winInfoList.length; ++i) n.winInfoList[i] = b.sevenup.WinInfo.toObject(e.winInfoList[i], t)
            }
            return n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.SevenupVipSeatInfoPush = function () {
          function e(e) {
            if (this.vipinfoList = [], e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.vipinfoList = p.emptyArray, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            if (t || (t = f.create()), null != e.vipinfoList && e.vipinfoList.length)
              for (var n = 0; n < e.vipinfoList.length; ++n) b.sevenup.VipUserInfo.encode(e.vipinfoList[n], t.uint32(10).fork()).ldelim();
            return t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupVipSeatInfoPush; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.vipinfoList && i.vipinfoList.length || (i.vipinfoList = []), i.vipinfoList.push(b.sevenup.VipUserInfo.decode(e, e.uint32()));
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.vipinfoList && e.hasOwnProperty("vipinfoList")) {
              if (!Array.isArray(e.vipinfoList)) return "vipinfoList: array expected";
              for (var t = 0; t < e.vipinfoList.length; ++t) {
                var n = b.sevenup.VipUserInfo.verify(e.vipinfoList[t]);
                if (n) return "vipinfoList." + n
              }
            }
            return null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupVipSeatInfoPush) return e;
            var t = new b.sevenup.SevenupVipSeatInfoPush;
            if (e.vipinfoList) {
              if (!Array.isArray(e.vipinfoList)) throw TypeError(".sevenup.SevenupVipSeatInfoPush.vipinfoList: array expected");
              t.vipinfoList = [];
              for (var n = 0; n < e.vipinfoList.length; ++n) {
                if ("object" != typeof e.vipinfoList[n]) throw TypeError(".sevenup.SevenupVipSeatInfoPush.vipinfoList: object expected");
                t.vipinfoList[n] = b.sevenup.VipUserInfo.fromObject(e.vipinfoList[n])
              }
            }
            return t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if ((t.arrays || t.defaults) && (n.vipinfoList = []), e.vipinfoList && e.vipinfoList.length) {
              n.vipinfoList = [];
              for (var i = 0; i < e.vipinfoList.length; ++i) n.vipinfoList[i] = b.sevenup.VipUserInfo.toObject(e.vipinfoList[i], t)
            }
            return n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.SevenupGetTableListReq = function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.num = 0, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            return t || (t = f.create()), null != e.num && Object.hasOwnProperty.call(e, "num") && t.uint32(8).int32(e.num), t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupGetTableListReq; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.num = e.int32();
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            return "object" != typeof e || null === e ? "object expected" : null != e.num && e.hasOwnProperty("num") && !p.isInteger(e.num) ? "num: integer expected" : null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupGetTableListReq) return e;
            var t = new b.sevenup.SevenupGetTableListReq;
            return null != e.num && (t.num = 0 | e.num), t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            return t.defaults && (n.num = 0), null != e.num && e.hasOwnProperty("num") && (n.num = e.num), n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.SevenupGetTableListResp = function () {
          function e(e) {
            if (this.tableList = [], e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.tableList = p.emptyArray, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            if (t || (t = f.create()), null != e.tableList && e.tableList.length)
              for (var n = 0; n < e.tableList.length; ++n) b.sevenup.SevenupGetTableListResp.TableInfo.encode(e.tableList[n], t.uint32(10).fork()).ldelim();
            return t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupGetTableListResp; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.tableList && i.tableList.length || (i.tableList = []), i.tableList.push(b.sevenup.SevenupGetTableListResp.TableInfo.decode(e, e.uint32()));
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.tableList && e.hasOwnProperty("tableList")) {
              if (!Array.isArray(e.tableList)) return "tableList: array expected";
              for (var t = 0; t < e.tableList.length; ++t) {
                var n = b.sevenup.SevenupGetTableListResp.TableInfo.verify(e.tableList[t]);
                if (n) return "tableList." + n
              }
            }
            return null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupGetTableListResp) return e;
            var t = new b.sevenup.SevenupGetTableListResp;
            if (e.tableList) {
              if (!Array.isArray(e.tableList)) throw TypeError(".sevenup.SevenupGetTableListResp.tableList: array expected");
              t.tableList = [];
              for (var n = 0; n < e.tableList.length; ++n) {
                if ("object" != typeof e.tableList[n]) throw TypeError(".sevenup.SevenupGetTableListResp.tableList: object expected");
                t.tableList[n] = b.sevenup.SevenupGetTableListResp.TableInfo.fromObject(e.tableList[n])
              }
            }
            return t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if ((t.arrays || t.defaults) && (n.tableList = []), e.tableList && e.tableList.length) {
              n.tableList = [];
              for (var i = 0; i < e.tableList.length; ++i) n.tableList[i] = b.sevenup.SevenupGetTableListResp.TableInfo.toObject(e.tableList[i], t)
            }
            return n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e.TableInfo = function () {
            function e(e) {
              if (this.winInfoList = [], e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.table_id = 0, e.prototype.downWin = 0, e.prototype.upWin = 0, e.prototype.winInfoList = p.emptyArray, e.prototype.index = 0, e.create = function (t) {
              return new e(t)
            }, e.encode = function (e, t) {
              if (t || (t = f.create()), null != e.table_id && Object.hasOwnProperty.call(e, "table_id") && t.uint32(8).int32(e.table_id), null != e.downWin && Object.hasOwnProperty.call(e, "downWin") && t.uint32(16).int32(e.downWin), null != e.upWin && Object.hasOwnProperty.call(e, "upWin") && t.uint32(24).int32(e.upWin), null != e.winInfoList && e.winInfoList.length)
                for (var n = 0; n < e.winInfoList.length; ++n) b.sevenup.WinInfo.encode(e.winInfoList[n], t.uint32(34).fork()).ldelim();
              return null != e.index && Object.hasOwnProperty.call(e, "index") && t.uint32(40).int32(e.index), t
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim()
            }, e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupGetTableListResp.TableInfo; e.pos < n;) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    i.table_id = e.int32();
                    break;
                  case 2:
                    i.downWin = e.int32();
                    break;
                  case 3:
                    i.upWin = e.int32();
                    break;
                  case 4:
                    i.winInfoList && i.winInfoList.length || (i.winInfoList = []), i.winInfoList.push(b.sevenup.WinInfo.decode(e, e.uint32()));
                    break;
                  case 5:
                    i.index = e.int32();
                    break;
                  default:
                    e.skipType(7 & o)
                }
              }
              return i
            }, e.decodeDelimited = function (e) {
              return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
            }, e.verify = function (e) {
              if ("object" != typeof e || null === e) return "object expected";
              if (null != e.table_id && e.hasOwnProperty("table_id") && !p.isInteger(e.table_id)) return "table_id: integer expected";
              if (null != e.downWin && e.hasOwnProperty("downWin") && !p.isInteger(e.downWin)) return "downWin: integer expected";
              if (null != e.upWin && e.hasOwnProperty("upWin") && !p.isInteger(e.upWin)) return "upWin: integer expected";
              if (null != e.winInfoList && e.hasOwnProperty("winInfoList")) {
                if (!Array.isArray(e.winInfoList)) return "winInfoList: array expected";
                for (var t = 0; t < e.winInfoList.length; ++t) {
                  var n = b.sevenup.WinInfo.verify(e.winInfoList[t]);
                  if (n) return "winInfoList." + n
                }
              }
              return null != e.index && e.hasOwnProperty("index") && !p.isInteger(e.index) ? "index: integer expected" : null
            }, e.fromObject = function (e) {
              if (e instanceof b.sevenup.SevenupGetTableListResp.TableInfo) return e;
              var t = new b.sevenup.SevenupGetTableListResp.TableInfo;
              if (null != e.table_id && (t.table_id = 0 | e.table_id), null != e.downWin && (t.downWin = 0 | e.downWin), null != e.upWin && (t.upWin = 0 | e.upWin), e.winInfoList) {
                if (!Array.isArray(e.winInfoList)) throw TypeError(".sevenup.SevenupGetTableListResp.TableInfo.winInfoList: array expected");
                t.winInfoList = [];
                for (var n = 0; n < e.winInfoList.length; ++n) {
                  if ("object" != typeof e.winInfoList[n]) throw TypeError(".sevenup.SevenupGetTableListResp.TableInfo.winInfoList: object expected");
                  t.winInfoList[n] = b.sevenup.WinInfo.fromObject(e.winInfoList[n])
                }
              }
              return null != e.index && (t.index = 0 | e.index), t
            }, e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              if ((t.arrays || t.defaults) && (n.winInfoList = []), t.defaults && (n.table_id = 0, n.downWin = 0, n.upWin = 0, n.index = 0), null != e.table_id && e.hasOwnProperty("table_id") && (n.table_id = e.table_id), null != e.downWin && e.hasOwnProperty("downWin") && (n.downWin = e.downWin), null != e.upWin && e.hasOwnProperty("upWin") && (n.upWin = e.upWin), e.winInfoList && e.winInfoList.length) {
                n.winInfoList = [];
                for (var i = 0; i < e.winInfoList.length; ++i) n.winInfoList[i] = b.sevenup.WinInfo.toObject(e.winInfoList[i], t)
              }
              return null != e.index && e.hasOwnProperty("index") && (n.index = e.index), n
            }, e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e
          }(), e
        }(), a.SevenupCheckoutResp = function () {
          function e(e) {
            if (this.winZone = [], this.checklist = [], e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.downWin = 0, e.prototype.upWin = 0, e.prototype.winZone = p.emptyArray, e.prototype.selfWin = null, e.prototype.checklist = p.emptyArray, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            if (t || (t = f.create()), null != e.downWin && Object.hasOwnProperty.call(e, "downWin") && t.uint32(8).int32(e.downWin), null != e.upWin && Object.hasOwnProperty.call(e, "upWin") && t.uint32(16).int32(e.upWin), null != e.winZone && e.winZone.length) {
              t.uint32(26).fork();
              for (var n = 0; n < e.winZone.length; ++n) t.int32(e.winZone[n]);
              t.ldelim()
            }
            if (null != e.selfWin && Object.hasOwnProperty.call(e, "selfWin") && b.sevenup.CheckoutItem.encode(e.selfWin, t.uint32(34).fork()).ldelim(), null != e.checklist && e.checklist.length)
              for (n = 0; n < e.checklist.length; ++n) b.sevenup.CheckoutItem.encode(e.checklist[n], t.uint32(42).fork()).ldelim();
            return t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupCheckoutResp; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.downWin = e.int32();
                  break;
                case 2:
                  i.upWin = e.int32();
                  break;
                case 3:
                  if (i.winZone && i.winZone.length || (i.winZone = []), 2 == (7 & o))
                    for (var r = e.uint32() + e.pos; e.pos < r;) i.winZone.push(e.int32());
                  else i.winZone.push(e.int32());
                  break;
                case 4:
                  i.selfWin = b.sevenup.CheckoutItem.decode(e, e.uint32());
                  break;
                case 5:
                  i.checklist && i.checklist.length || (i.checklist = []), i.checklist.push(b.sevenup.CheckoutItem.decode(e, e.uint32()));
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.downWin && e.hasOwnProperty("downWin") && !p.isInteger(e.downWin)) return "downWin: integer expected";
            if (null != e.upWin && e.hasOwnProperty("upWin") && !p.isInteger(e.upWin)) return "upWin: integer expected";
            if (null != e.winZone && e.hasOwnProperty("winZone")) {
              if (!Array.isArray(e.winZone)) return "winZone: array expected";
              for (var t = 0; t < e.winZone.length; ++t)
                if (!p.isInteger(e.winZone[t])) return "winZone: integer[] expected"
            }
            if (null != e.selfWin && e.hasOwnProperty("selfWin") && (n = b.sevenup.CheckoutItem.verify(e.selfWin))) return "selfWin." + n;
            if (null != e.checklist && e.hasOwnProperty("checklist")) {
              if (!Array.isArray(e.checklist)) return "checklist: array expected";
              for (t = 0; t < e.checklist.length; ++t) {
                var n;
                if (n = b.sevenup.CheckoutItem.verify(e.checklist[t])) return "checklist." + n
              }
            }
            return null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupCheckoutResp) return e;
            var t = new b.sevenup.SevenupCheckoutResp;
            if (null != e.downWin && (t.downWin = 0 | e.downWin), null != e.upWin && (t.upWin = 0 | e.upWin), e.winZone) {
              if (!Array.isArray(e.winZone)) throw TypeError(".sevenup.SevenupCheckoutResp.winZone: array expected");
              t.winZone = [];
              for (var n = 0; n < e.winZone.length; ++n) t.winZone[n] = 0 | e.winZone[n]
            }
            if (null != e.selfWin) {
              if ("object" != typeof e.selfWin) throw TypeError(".sevenup.SevenupCheckoutResp.selfWin: object expected");
              t.selfWin = b.sevenup.CheckoutItem.fromObject(e.selfWin)
            }
            if (e.checklist) {
              if (!Array.isArray(e.checklist)) throw TypeError(".sevenup.SevenupCheckoutResp.checklist: array expected");
              for (t.checklist = [], n = 0; n < e.checklist.length; ++n) {
                if ("object" != typeof e.checklist[n]) throw TypeError(".sevenup.SevenupCheckoutResp.checklist: object expected");
                t.checklist[n] = b.sevenup.CheckoutItem.fromObject(e.checklist[n])
              }
            }
            return t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if ((t.arrays || t.defaults) && (n.winZone = [], n.checklist = []), t.defaults && (n.downWin = 0, n.upWin = 0, n.selfWin = null), null != e.downWin && e.hasOwnProperty("downWin") && (n.downWin = e.downWin), null != e.upWin && e.hasOwnProperty("upWin") && (n.upWin = e.upWin), e.winZone && e.winZone.length) {
              n.winZone = [];
              for (var i = 0; i < e.winZone.length; ++i) n.winZone[i] = e.winZone[i]
            }
            if (null != e.selfWin && e.hasOwnProperty("selfWin") && (n.selfWin = b.sevenup.CheckoutItem.toObject(e.selfWin, t)), e.checklist && e.checklist.length)
              for (n.checklist = [], i = 0; i < e.checklist.length; ++i) n.checklist[i] = b.sevenup.CheckoutItem.toObject(e.checklist[i], t);
            return n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.CheckoutItem = function () {
          function e(e) {
            if (this.winlist = [], e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.seatIndex = 0, e.prototype.winlist = p.emptyArray, e.prototype.totalWin = p.Long ? p.Long.fromBits(0, 0, !1) : 0, e.prototype.balance = p.Long ? p.Long.fromBits(0, 0, !1) : 0, e.prototype.datatest = "", e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            if (t || (t = f.create()), null != e.seatIndex && Object.hasOwnProperty.call(e, "seatIndex") && t.uint32(8).int32(e.seatIndex), null != e.winlist && e.winlist.length) {
              t.uint32(18).fork();
              for (var n = 0; n < e.winlist.length; ++n) t.int64(e.winlist[n]);
              t.ldelim()
            }
            return null != e.totalWin && Object.hasOwnProperty.call(e, "totalWin") && t.uint32(24).int64(e.totalWin), null != e.balance && Object.hasOwnProperty.call(e, "balance") && t.uint32(32).int64(e.balance), null != e.datatest && Object.hasOwnProperty.call(e, "datatest") && t.uint32(42).string(e.datatest), t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.CheckoutItem; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.seatIndex = e.int32();
                  break;
                case 2:
                  if (i.winlist && i.winlist.length || (i.winlist = []), 2 == (7 & o))
                    for (var r = e.uint32() + e.pos; e.pos < r;) i.winlist.push(e.int64());
                  else i.winlist.push(e.int64());
                  break;
                case 3:
                  i.totalWin = e.int64();
                  break;
                case 4:
                  i.balance = e.int64();
                  break;
                case 5:
                  i.datatest = e.string();
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.seatIndex && e.hasOwnProperty("seatIndex") && !p.isInteger(e.seatIndex)) return "seatIndex: integer expected";
            if (null != e.winlist && e.hasOwnProperty("winlist")) {
              if (!Array.isArray(e.winlist)) return "winlist: array expected";
              for (var t = 0; t < e.winlist.length; ++t)
                if (!(p.isInteger(e.winlist[t]) || e.winlist[t] && p.isInteger(e.winlist[t].low) && p.isInteger(e.winlist[t].high))) return "winlist: integer|Long[] expected"
            }
            return null != e.totalWin && e.hasOwnProperty("totalWin") && !(p.isInteger(e.totalWin) || e.totalWin && p.isInteger(e.totalWin.low) && p.isInteger(e.totalWin.high)) ? "totalWin: integer|Long expected" : null != e.balance && e.hasOwnProperty("balance") && !(p.isInteger(e.balance) || e.balance && p.isInteger(e.balance.low) && p.isInteger(e.balance.high)) ? "balance: integer|Long expected" : null != e.datatest && e.hasOwnProperty("datatest") && !p.isString(e.datatest) ? "datatest: string expected" : null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.CheckoutItem) return e;
            var t = new b.sevenup.CheckoutItem;
            if (null != e.seatIndex && (t.seatIndex = 0 | e.seatIndex), e.winlist) {
              if (!Array.isArray(e.winlist)) throw TypeError(".sevenup.CheckoutItem.winlist: array expected");
              t.winlist = [];
              for (var n = 0; n < e.winlist.length; ++n) p.Long ? (t.winlist[n] = p.Long.fromValue(e.winlist[n])).unsigned = !1 : "string" == typeof e.winlist[n] ? t.winlist[n] = parseInt(e.winlist[n], 10) : "number" == typeof e.winlist[n] ? t.winlist[n] = e.winlist[n] : "object" == typeof e.winlist[n] && (t.winlist[n] = new p.LongBits(e.winlist[n].low >>> 0, e.winlist[n].high >>> 0).toNumber())
            }
            return null != e.totalWin && (p.Long ? (t.totalWin = p.Long.fromValue(e.totalWin)).unsigned = !1 : "string" == typeof e.totalWin ? t.totalWin = parseInt(e.totalWin, 10) : "number" == typeof e.totalWin ? t.totalWin = e.totalWin : "object" == typeof e.totalWin && (t.totalWin = new p.LongBits(e.totalWin.low >>> 0, e.totalWin.high >>> 0).toNumber())), null != e.balance && (p.Long ? (t.balance = p.Long.fromValue(e.balance)).unsigned = !1 : "string" == typeof e.balance ? t.balance = parseInt(e.balance, 10) : "number" == typeof e.balance ? t.balance = e.balance : "object" == typeof e.balance && (t.balance = new p.LongBits(e.balance.low >>> 0, e.balance.high >>> 0).toNumber())), null != e.datatest && (t.datatest = String(e.datatest)), t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if ((t.arrays || t.defaults) && (n.winlist = []), t.defaults) {
              if (n.seatIndex = 0, p.Long) {
                var i = new p.Long(0, 0, !1);
                n.totalWin = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
              } else n.totalWin = t.longs === String ? "0" : 0;
              p.Long ? (i = new p.Long(0, 0, !1), n.balance = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i) : n.balance = t.longs === String ? "0" : 0, n.datatest = ""
            }
            if (null != e.seatIndex && e.hasOwnProperty("seatIndex") && (n.seatIndex = e.seatIndex), e.winlist && e.winlist.length) {
              n.winlist = [];
              for (var o = 0; o < e.winlist.length; ++o) "number" == typeof e.winlist[o] ? n.winlist[o] = t.longs === String ? String(e.winlist[o]) : e.winlist[o] : n.winlist[o] = t.longs === String ? p.Long.prototype.toString.call(e.winlist[o]) : t.longs === Number ? new p.LongBits(e.winlist[o].low >>> 0, e.winlist[o].high >>> 0).toNumber() : e.winlist[o]
            }
            return null != e.totalWin && e.hasOwnProperty("totalWin") && ("number" == typeof e.totalWin ? n.totalWin = t.longs === String ? String(e.totalWin) : e.totalWin : n.totalWin = t.longs === String ? p.Long.prototype.toString.call(e.totalWin) : t.longs === Number ? new p.LongBits(e.totalWin.low >>> 0, e.totalWin.high >>> 0).toNumber() : e.totalWin), null != e.balance && e.hasOwnProperty("balance") && ("number" == typeof e.balance ? n.balance = t.longs === String ? String(e.balance) : e.balance : n.balance = t.longs === String ? p.Long.prototype.toString.call(e.balance) : t.longs === Number ? new p.LongBits(e.balance.low >>> 0, e.balance.high >>> 0).toNumber() : e.balance), null != e.datatest && e.hasOwnProperty("datatest") && (n.datatest = e.datatest), n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.SevenupGetVipBetReq = function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.seatIndex = 0, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            return t || (t = f.create()), null != e.seatIndex && Object.hasOwnProperty.call(e, "seatIndex") && t.uint32(8).int32(e.seatIndex), t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupGetVipBetReq; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.seatIndex = e.int32();
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            return "object" != typeof e || null === e ? "object expected" : null != e.seatIndex && e.hasOwnProperty("seatIndex") && !p.isInteger(e.seatIndex) ? "seatIndex: integer expected" : null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupGetVipBetReq) return e;
            var t = new b.sevenup.SevenupGetVipBetReq;
            return null != e.seatIndex && (t.seatIndex = 0 | e.seatIndex), t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            return t.defaults && (n.seatIndex = 0), null != e.seatIndex && e.hasOwnProperty("seatIndex") && (n.seatIndex = e.seatIndex), n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.SevenupGetVipBetResp = function () {
          function e(e) {
            if (this.betZone = [], e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.seatIndex = 0, e.prototype.betZone = p.emptyArray, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            if (t || (t = f.create()), null != e.seatIndex && Object.hasOwnProperty.call(e, "seatIndex") && t.uint32(8).int32(e.seatIndex), null != e.betZone && e.betZone.length) {
              t.uint32(18).fork();
              for (var n = 0; n < e.betZone.length; ++n) t.int32(e.betZone[n]);
              t.ldelim()
            }
            return t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupGetVipBetResp; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.seatIndex = e.int32();
                  break;
                case 2:
                  if (i.betZone && i.betZone.length || (i.betZone = []), 2 == (7 & o))
                    for (var r = e.uint32() + e.pos; e.pos < r;) i.betZone.push(e.int32());
                  else i.betZone.push(e.int32());
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.seatIndex && e.hasOwnProperty("seatIndex") && !p.isInteger(e.seatIndex)) return "seatIndex: integer expected";
            if (null != e.betZone && e.hasOwnProperty("betZone")) {
              if (!Array.isArray(e.betZone)) return "betZone: array expected";
              for (var t = 0; t < e.betZone.length; ++t)
                if (!p.isInteger(e.betZone[t])) return "betZone: integer[] expected"
            }
            return null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupGetVipBetResp) return e;
            var t = new b.sevenup.SevenupGetVipBetResp;
            if (null != e.seatIndex && (t.seatIndex = 0 | e.seatIndex), e.betZone) {
              if (!Array.isArray(e.betZone)) throw TypeError(".sevenup.SevenupGetVipBetResp.betZone: array expected");
              t.betZone = [];
              for (var n = 0; n < e.betZone.length; ++n) t.betZone[n] = 0 | e.betZone[n]
            }
            return t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if ((t.arrays || t.defaults) && (n.betZone = []), t.defaults && (n.seatIndex = 0), null != e.seatIndex && e.hasOwnProperty("seatIndex") && (n.seatIndex = e.seatIndex), e.betZone && e.betZone.length) {
              n.betZone = [];
              for (var i = 0; i < e.betZone.length; ++i) n.betZone[i] = e.betZone[i]
            }
            return n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.OP_TYPE = function () {
          var e = {},
            t = Object.create(e);
          return t[e[0] = "OP_TYPE_NONE"] = 0, t[e[1] = "OP_TYPE_DOUBLE"] = 1, t[e[2] = "OP_TYPE_CANCEL"] = 2, t[e[3] = "OP_TYPE_CLEAR"] = 3, t[e[4] = "OP_TYPE_SETTLE"] = 4, t
        }(), a.SevenupOperateReq = function () {
          function e(e) {
            if (e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.opType = 0, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            return t || (t = f.create()), null != e.opType && Object.hasOwnProperty.call(e, "opType") && t.uint32(8).int32(e.opType), t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupOperateReq; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.opType = e.int32();
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.opType && e.hasOwnProperty("opType")) switch (e.opType) {
              default:
                return "opType: enum value expected";
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
            }
            return null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupOperateReq) return e;
            var t = new b.sevenup.SevenupOperateReq;
            switch (e.opType) {
              case "OP_TYPE_NONE":
              case 0:
                t.opType = 0;
                break;
              case "OP_TYPE_DOUBLE":
              case 1:
                t.opType = 1;
                break;
              case "OP_TYPE_CANCEL":
              case 2:
                t.opType = 2;
                break;
              case "OP_TYPE_CLEAR":
              case 3:
                t.opType = 3;
                break;
              case "OP_TYPE_SETTLE":
              case 4:
                t.opType = 4
            }
            return t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            return t.defaults && (n.opType = t.enums === String ? "OP_TYPE_NONE" : 0), null != e.opType && e.hasOwnProperty("opType") && (n.opType = t.enums === String ? b.sevenup.OP_TYPE[e.opType] : e.opType), n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.SevenupOperateResp = function () {
          function e(e) {
            if (this.selfBet = [], e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.result = 0, e.prototype.opType = 0, e.prototype.balance = p.Long ? p.Long.fromBits(0, 0, !1) : 0, e.prototype.selfBet = p.emptyArray, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            if (t || (t = f.create()), null != e.result && Object.hasOwnProperty.call(e, "result") && t.uint32(8).int32(e.result), null != e.opType && Object.hasOwnProperty.call(e, "opType") && t.uint32(16).int32(e.opType), null != e.balance && Object.hasOwnProperty.call(e, "balance") && t.uint32(24).int64(e.balance), null != e.selfBet && e.selfBet.length) {
              t.uint32(34).fork();
              for (var n = 0; n < e.selfBet.length; ++n) t.int64(e.selfBet[n]);
              t.ldelim()
            }
            return t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupOperateResp; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.result = e.int32();
                  break;
                case 2:
                  i.opType = e.int32();
                  break;
                case 3:
                  i.balance = e.int64();
                  break;
                case 4:
                  if (i.selfBet && i.selfBet.length || (i.selfBet = []), 2 == (7 & o))
                    for (var r = e.uint32() + e.pos; e.pos < r;) i.selfBet.push(e.int64());
                  else i.selfBet.push(e.int64());
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.result && e.hasOwnProperty("result") && !p.isInteger(e.result)) return "result: integer expected";
            if (null != e.opType && e.hasOwnProperty("opType")) switch (e.opType) {
              default:
                return "opType: enum value expected";
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
            }
            if (null != e.balance && e.hasOwnProperty("balance") && !(p.isInteger(e.balance) || e.balance && p.isInteger(e.balance.low) && p.isInteger(e.balance.high))) return "balance: integer|Long expected";
            if (null != e.selfBet && e.hasOwnProperty("selfBet")) {
              if (!Array.isArray(e.selfBet)) return "selfBet: array expected";
              for (var t = 0; t < e.selfBet.length; ++t)
                if (!(p.isInteger(e.selfBet[t]) || e.selfBet[t] && p.isInteger(e.selfBet[t].low) && p.isInteger(e.selfBet[t].high))) return "selfBet: integer|Long[] expected"
            }
            return null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupOperateResp) return e;
            var t = new b.sevenup.SevenupOperateResp;
            switch (null != e.result && (t.result = 0 | e.result), e.opType) {
              case "OP_TYPE_NONE":
              case 0:
                t.opType = 0;
                break;
              case "OP_TYPE_DOUBLE":
              case 1:
                t.opType = 1;
                break;
              case "OP_TYPE_CANCEL":
              case 2:
                t.opType = 2;
                break;
              case "OP_TYPE_CLEAR":
              case 3:
                t.opType = 3;
                break;
              case "OP_TYPE_SETTLE":
              case 4:
                t.opType = 4
            }
            if (null != e.balance && (p.Long ? (t.balance = p.Long.fromValue(e.balance)).unsigned = !1 : "string" == typeof e.balance ? t.balance = parseInt(e.balance, 10) : "number" == typeof e.balance ? t.balance = e.balance : "object" == typeof e.balance && (t.balance = new p.LongBits(e.balance.low >>> 0, e.balance.high >>> 0).toNumber())), e.selfBet) {
              if (!Array.isArray(e.selfBet)) throw TypeError(".sevenup.SevenupOperateResp.selfBet: array expected");
              t.selfBet = [];
              for (var n = 0; n < e.selfBet.length; ++n) p.Long ? (t.selfBet[n] = p.Long.fromValue(e.selfBet[n])).unsigned = !1 : "string" == typeof e.selfBet[n] ? t.selfBet[n] = parseInt(e.selfBet[n], 10) : "number" == typeof e.selfBet[n] ? t.selfBet[n] = e.selfBet[n] : "object" == typeof e.selfBet[n] && (t.selfBet[n] = new p.LongBits(e.selfBet[n].low >>> 0, e.selfBet[n].high >>> 0).toNumber())
            }
            return t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if ((t.arrays || t.defaults) && (n.selfBet = []), t.defaults)
              if (n.result = 0, n.opType = t.enums === String ? "OP_TYPE_NONE" : 0, p.Long) {
                var i = new p.Long(0, 0, !1);
                n.balance = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
              } else n.balance = t.longs === String ? "0" : 0;
            if (null != e.result && e.hasOwnProperty("result") && (n.result = e.result), null != e.opType && e.hasOwnProperty("opType") && (n.opType = t.enums === String ? b.sevenup.OP_TYPE[e.opType] : e.opType), null != e.balance && e.hasOwnProperty("balance") && ("number" == typeof e.balance ? n.balance = t.longs === String ? String(e.balance) : e.balance : n.balance = t.longs === String ? p.Long.prototype.toString.call(e.balance) : t.longs === Number ? new p.LongBits(e.balance.low >>> 0, e.balance.high >>> 0).toNumber() : e.balance), e.selfBet && e.selfBet.length) {
              n.selfBet = [];
              for (var o = 0; o < e.selfBet.length; ++o) "number" == typeof e.selfBet[o] ? n.selfBet[o] = t.longs === String ? String(e.selfBet[o]) : e.selfBet[o] : n.selfBet[o] = t.longs === String ? p.Long.prototype.toString.call(e.selfBet[o]) : t.longs === Number ? new p.LongBits(e.selfBet[o].low >>> 0, e.selfBet[o].high >>> 0).toNumber() : e.selfBet[o]
            }
            return n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e
        }(), a.SevenupRecordDetail = function () {
          function e(e) {
            if (this.bet_array = [], e)
              for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
          }
          return e.prototype.uid = 0, e.prototype.round_id = 0, e.prototype.time = 0, e.prototype.point1 = 0, e.prototype.point2 = 0, e.prototype.total_bet = p.Long ? p.Long.fromBits(0, 0, !1) : 0, e.prototype.total_win = p.Long ? p.Long.fromBits(0, 0, !1) : 0, e.prototype.bet_array = p.emptyArray, e.create = function (t) {
            return new e(t)
          }, e.encode = function (e, t) {
            if (t || (t = f.create()), null != e.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(8).uint32(e.uid), null != e.round_id && Object.hasOwnProperty.call(e, "round_id") && t.uint32(16).int32(e.round_id), null != e.time && Object.hasOwnProperty.call(e, "time") && t.uint32(24).int32(e.time), null != e.point1 && Object.hasOwnProperty.call(e, "point1") && t.uint32(32).int32(e.point1), null != e.point2 && Object.hasOwnProperty.call(e, "point2") && t.uint32(40).int32(e.point2), null != e.total_bet && Object.hasOwnProperty.call(e, "total_bet") && t.uint32(48).int64(e.total_bet), null != e.total_win && Object.hasOwnProperty.call(e, "total_win") && t.uint32(56).int64(e.total_win), null != e.bet_array && e.bet_array.length)
              for (var n = 0; n < e.bet_array.length; ++n) b.sevenup.SevenupRecordDetail.BetDetail.encode(e.bet_array[n], t.uint32(66).fork()).ldelim();
            return t
          }, e.encodeDelimited = function (e, t) {
            return this.encode(e, t).ldelim()
          }, e.decode = function (e, t) {
            e instanceof c || (e = c.create(e));
            for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupRecordDetail; e.pos < n;) {
              var o = e.uint32();
              switch (o >>> 3) {
                case 1:
                  i.uid = e.uint32();
                  break;
                case 2:
                  i.round_id = e.int32();
                  break;
                case 3:
                  i.time = e.int32();
                  break;
                case 4:
                  i.point1 = e.int32();
                  break;
                case 5:
                  i.point2 = e.int32();
                  break;
                case 6:
                  i.total_bet = e.int64();
                  break;
                case 7:
                  i.total_win = e.int64();
                  break;
                case 8:
                  i.bet_array && i.bet_array.length || (i.bet_array = []), i.bet_array.push(b.sevenup.SevenupRecordDetail.BetDetail.decode(e, e.uint32()));
                  break;
                default:
                  e.skipType(7 & o)
              }
            }
            return i
          }, e.decodeDelimited = function (e) {
            return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
          }, e.verify = function (e) {
            if ("object" != typeof e || null === e) return "object expected";
            if (null != e.uid && e.hasOwnProperty("uid") && !p.isInteger(e.uid)) return "uid: integer expected";
            if (null != e.round_id && e.hasOwnProperty("round_id") && !p.isInteger(e.round_id)) return "round_id: integer expected";
            if (null != e.time && e.hasOwnProperty("time") && !p.isInteger(e.time)) return "time: integer expected";
            if (null != e.point1 && e.hasOwnProperty("point1") && !p.isInteger(e.point1)) return "point1: integer expected";
            if (null != e.point2 && e.hasOwnProperty("point2") && !p.isInteger(e.point2)) return "point2: integer expected";
            if (null != e.total_bet && e.hasOwnProperty("total_bet") && !(p.isInteger(e.total_bet) || e.total_bet && p.isInteger(e.total_bet.low) && p.isInteger(e.total_bet.high))) return "total_bet: integer|Long expected";
            if (null != e.total_win && e.hasOwnProperty("total_win") && !(p.isInteger(e.total_win) || e.total_win && p.isInteger(e.total_win.low) && p.isInteger(e.total_win.high))) return "total_win: integer|Long expected";
            if (null != e.bet_array && e.hasOwnProperty("bet_array")) {
              if (!Array.isArray(e.bet_array)) return "bet_array: array expected";
              for (var t = 0; t < e.bet_array.length; ++t) {
                var n = b.sevenup.SevenupRecordDetail.BetDetail.verify(e.bet_array[t]);
                if (n) return "bet_array." + n
              }
            }
            return null
          }, e.fromObject = function (e) {
            if (e instanceof b.sevenup.SevenupRecordDetail) return e;
            var t = new b.sevenup.SevenupRecordDetail;
            if (null != e.uid && (t.uid = e.uid >>> 0), null != e.round_id && (t.round_id = 0 | e.round_id), null != e.time && (t.time = 0 | e.time), null != e.point1 && (t.point1 = 0 | e.point1), null != e.point2 && (t.point2 = 0 | e.point2), null != e.total_bet && (p.Long ? (t.total_bet = p.Long.fromValue(e.total_bet)).unsigned = !1 : "string" == typeof e.total_bet ? t.total_bet = parseInt(e.total_bet, 10) : "number" == typeof e.total_bet ? t.total_bet = e.total_bet : "object" == typeof e.total_bet && (t.total_bet = new p.LongBits(e.total_bet.low >>> 0, e.total_bet.high >>> 0).toNumber())), null != e.total_win && (p.Long ? (t.total_win = p.Long.fromValue(e.total_win)).unsigned = !1 : "string" == typeof e.total_win ? t.total_win = parseInt(e.total_win, 10) : "number" == typeof e.total_win ? t.total_win = e.total_win : "object" == typeof e.total_win && (t.total_win = new p.LongBits(e.total_win.low >>> 0, e.total_win.high >>> 0).toNumber())), e.bet_array) {
              if (!Array.isArray(e.bet_array)) throw TypeError(".sevenup.SevenupRecordDetail.bet_array: array expected");
              t.bet_array = [];
              for (var n = 0; n < e.bet_array.length; ++n) {
                if ("object" != typeof e.bet_array[n]) throw TypeError(".sevenup.SevenupRecordDetail.bet_array: object expected");
                t.bet_array[n] = b.sevenup.SevenupRecordDetail.BetDetail.fromObject(e.bet_array[n])
              }
            }
            return t
          }, e.toObject = function (e, t) {
            t || (t = {});
            var n = {};
            if ((t.arrays || t.defaults) && (n.bet_array = []), t.defaults) {
              if (n.uid = 0, n.round_id = 0, n.time = 0, n.point1 = 0, n.point2 = 0, p.Long) {
                var i = new p.Long(0, 0, !1);
                n.total_bet = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
              } else n.total_bet = t.longs === String ? "0" : 0;
              p.Long ? (i = new p.Long(0, 0, !1), n.total_win = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i) : n.total_win = t.longs === String ? "0" : 0
            }
            if (null != e.uid && e.hasOwnProperty("uid") && (n.uid = e.uid), null != e.round_id && e.hasOwnProperty("round_id") && (n.round_id = e.round_id), null != e.time && e.hasOwnProperty("time") && (n.time = e.time), null != e.point1 && e.hasOwnProperty("point1") && (n.point1 = e.point1), null != e.point2 && e.hasOwnProperty("point2") && (n.point2 = e.point2), null != e.total_bet && e.hasOwnProperty("total_bet") && ("number" == typeof e.total_bet ? n.total_bet = t.longs === String ? String(e.total_bet) : e.total_bet : n.total_bet = t.longs === String ? p.Long.prototype.toString.call(e.total_bet) : t.longs === Number ? new p.LongBits(e.total_bet.low >>> 0, e.total_bet.high >>> 0).toNumber() : e.total_bet), null != e.total_win && e.hasOwnProperty("total_win") && ("number" == typeof e.total_win ? n.total_win = t.longs === String ? String(e.total_win) : e.total_win : n.total_win = t.longs === String ? p.Long.prototype.toString.call(e.total_win) : t.longs === Number ? new p.LongBits(e.total_win.low >>> 0, e.total_win.high >>> 0).toNumber() : e.total_win), e.bet_array && e.bet_array.length) {
              n.bet_array = [];
              for (var o = 0; o < e.bet_array.length; ++o) n.bet_array[o] = b.sevenup.SevenupRecordDetail.BetDetail.toObject(e.bet_array[o], t)
            }
            return n
          }, e.prototype.toJSON = function () {
            return this.constructor.toObject(this, u.util.toJSONOptions)
          }, e.BetDetail = function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.zone = 0, e.prototype.odds = 0, e.prototype.doubles = 0, e.prototype.bet = p.Long ? p.Long.fromBits(0, 0, !1) : 0, e.prototype.win = p.Long ? p.Long.fromBits(0, 0, !1) : 0, e.create = function (t) {
              return new e(t)
            }, e.encode = function (e, t) {
              return t || (t = f.create()), null != e.zone && Object.hasOwnProperty.call(e, "zone") && t.uint32(8).int32(e.zone), null != e.odds && Object.hasOwnProperty.call(e, "odds") && t.uint32(16).int32(e.odds), null != e.doubles && Object.hasOwnProperty.call(e, "doubles") && t.uint32(24).int32(e.doubles), null != e.bet && Object.hasOwnProperty.call(e, "bet") && t.uint32(32).int64(e.bet), null != e.win && Object.hasOwnProperty.call(e, "win") && t.uint32(40).int64(e.win), t
            }, e.encodeDelimited = function (e, t) {
              return this.encode(e, t).ldelim()
            }, e.decode = function (e, t) {
              e instanceof c || (e = c.create(e));
              for (var n = void 0 === t ? e.len : e.pos + t, i = new b.sevenup.SevenupRecordDetail.BetDetail; e.pos < n;) {
                var o = e.uint32();
                switch (o >>> 3) {
                  case 1:
                    i.zone = e.int32();
                    break;
                  case 2:
                    i.odds = e.int32();
                    break;
                  case 3:
                    i.doubles = e.int32();
                    break;
                  case 4:
                    i.bet = e.int64();
                    break;
                  case 5:
                    i.win = e.int64();
                    break;
                  default:
                    e.skipType(7 & o)
                }
              }
              return i
            }, e.decodeDelimited = function (e) {
              return e instanceof c || (e = new c(e)), this.decode(e, e.uint32())
            }, e.verify = function (e) {
              return "object" != typeof e || null === e ? "object expected" : null != e.zone && e.hasOwnProperty("zone") && !p.isInteger(e.zone) ? "zone: integer expected" : null != e.odds && e.hasOwnProperty("odds") && !p.isInteger(e.odds) ? "odds: integer expected" : null != e.doubles && e.hasOwnProperty("doubles") && !p.isInteger(e.doubles) ? "doubles: integer expected" : null != e.bet && e.hasOwnProperty("bet") && !(p.isInteger(e.bet) || e.bet && p.isInteger(e.bet.low) && p.isInteger(e.bet.high)) ? "bet: integer|Long expected" : null != e.win && e.hasOwnProperty("win") && !(p.isInteger(e.win) || e.win && p.isInteger(e.win.low) && p.isInteger(e.win.high)) ? "win: integer|Long expected" : null
            }, e.fromObject = function (e) {
              if (e instanceof b.sevenup.SevenupRecordDetail.BetDetail) return e;
              var t = new b.sevenup.SevenupRecordDetail.BetDetail;
              return null != e.zone && (t.zone = 0 | e.zone), null != e.odds && (t.odds = 0 | e.odds), null != e.doubles && (t.doubles = 0 | e.doubles), null != e.bet && (p.Long ? (t.bet = p.Long.fromValue(e.bet)).unsigned = !1 : "string" == typeof e.bet ? t.bet = parseInt(e.bet, 10) : "number" == typeof e.bet ? t.bet = e.bet : "object" == typeof e.bet && (t.bet = new p.LongBits(e.bet.low >>> 0, e.bet.high >>> 0).toNumber())), null != e.win && (p.Long ? (t.win = p.Long.fromValue(e.win)).unsigned = !1 : "string" == typeof e.win ? t.win = parseInt(e.win, 10) : "number" == typeof e.win ? t.win = e.win : "object" == typeof e.win && (t.win = new p.LongBits(e.win.low >>> 0, e.win.high >>> 0).toNumber())), t
            }, e.toObject = function (e, t) {
              t || (t = {});
              var n = {};
              if (t.defaults) {
                if (n.zone = 0, n.odds = 0, n.doubles = 0, p.Long) {
                  var i = new p.Long(0, 0, !1);
                  n.bet = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
                } else n.bet = t.longs === String ? "0" : 0;
                p.Long ? (i = new p.Long(0, 0, !1), n.win = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i) : n.win = t.longs === String ? "0" : 0
              }
              return null != e.zone && e.hasOwnProperty("zone") && (n.zone = e.zone), null != e.odds && e.hasOwnProperty("odds") && (n.odds = e.odds), null != e.doubles && e.hasOwnProperty("doubles") && (n.doubles = e.doubles), null != e.bet && e.hasOwnProperty("bet") && ("number" == typeof e.bet ? n.bet = t.longs === String ? String(e.bet) : e.bet : n.bet = t.longs === String ? p.Long.prototype.toString.call(e.bet) : t.longs === Number ? new p.LongBits(e.bet.low >>> 0, e.bet.high >>> 0).toNumber() : e.bet), null != e.win && e.hasOwnProperty("win") && ("number" == typeof e.win ? n.win = t.longs === String ? String(e.win) : e.win : n.win = t.longs === String ? p.Long.prototype.toString.call(e.win) : t.longs === Number ? new p.LongBits(e.win.low >>> 0, e.win.high >>> 0).toNumber() : e.win), n
            }, e.prototype.toJSON = function () {
              return this.constructor.toObject(this, u.util.toJSONOptions)
            }, e
          }(), e
        }(), a), i.exports = b, e("default", i.exports)
      }), (function () {
        return {
          "protobufjs/minimal.js": i
        }
      }))
    }
  }
}));

System.register("chunks:///_virtual/game_sevenup_proto.mjs_cjs=&original=.js", ["./game_sevenup_proto.js", "./cjs-loader.mjs"], (function (e, t) {
  var r, s;
  return {
    setters: [function (t) {
      r = t.__cjsMetaURL;
      var s = {};
      s.__cjsMetaURL = t.__cjsMetaURL, s.default = t.default, e(s)
    }, function (e) {
      s = e.default
    }],
    execute: function () {
      r || s.throwInvalidWrapper("./game_sevenup_proto.js", t.meta.url), s.require(r)
    }
  }
}));

System.register("chunks:///_virtual/interface12.ts", ["cc"], (function (t) {
  var E;
  return {
    setters: [function (t) {
      E = t.cclegacy
    }],
    execute: function () {
      E._RF.push({}, "a9987ksv+5FBKCDYhq/tTZ4", "interface", void 0);
      t("EOperateType", function (t) {
        return t[t.NONE = 0] = "NONE", t[t.DOUBLE = 1] = "DOUBLE", t[t.UNDO = 2] = "UNDO", t[t.CLEAR = 3] = "CLEAR", t[t.SETTLE = 4] = "SETTLE", t[t.AGAIN = 99] = "AGAIN", t[t.CHIPBET = 100] = "CHIPBET", t
      }({})), t("EDispatchFormatDataType", function (t) {
        return t[t.SELF = 1] = "SELF", t[t.GUEST = 2] = "GUEST", t
      }({})), t("EFlyChipPlayerType", function (t) {
        return t[t.SELF = 1] = "SELF", t[t.GUEST = 2] = "GUEST", t
      }({})), t("EOperateBtnType", function (t) {
        return t[t.UNDO = 0] = "UNDO", t[t.DOUBLE = 1] = "DOUBLE", t[t.AGAIN = 2] = "AGAIN", t[t.AUTO = 3] = "AUTO", t[t.STOP = 4] = "STOP", t[t.CLEAR = 5] = "CLEAR", t
      }({}));
      E._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/lyUpDownBetHistory.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UDEvent.ts", "./UDUtils.ts", "./ge.ts", "./GameManager.ts", "./GameRecordManager.ts", "./UDConstant.ts", "./Utils3.ts", "./custom-general.ts", "./general.ts", "./tilelistview.ts", "./listview-base.ts", "./UIBase.ts"], (function (t) {
  var e, i, n, o, s, r, a, l, c, h, u, d, f, g, _, p, m, v, y, D, b, w, R, T;
  return {
    setters: [function (t) {
      e = t.applyDecoratedDescriptor, i = t.inheritsLoose, n = t.initializerDefineProperty, o = t.assertThisInitialized
    }, function (t) {
      s = t.cclegacy, r = t._decorator, a = t.Node, l = t.ScrollView, c = t.Label, h = t.TTFFont, u = t.UITransform, d = t.color
    }, function (t) {
      f = t.UDEvent
    }, function (t) {
      g = t.UDUtils
    }, function (t) {
      _ = t.gui
    }, function (t) {
      p = t.gameMgr
    }, function (t) {
      m = t.gameRecordMgr
    }, function (t) {
      v = t.UDConstant
    }, function (t) {
      y = t.Utils
    }, function (t) {
      D = t.nodelink
    }, function (t) {
      b = t.sprintf_g
    }, function (t) {
      w = t.TileListView
    }, function (t) {
      R = t.ListViewDir
    }, function (t) {
      T = t.UIBase
    }],
    execute: function () {
      var U, M, S, k, H, C, E, z, B, A, L, O, I, F, G, N, P, V, x, q, W, Y;
      s._RF.push({}, "f3af3ZlHFBD2KVPSE+UlCNS", "lyUpDownBetHistory", void 0);
      var j = r.ccclass,
        K = r.menu,
        Z = r.property;
      t("lyUpDownBetHistory", (U = j("lyUpDownBetHistory"), M = K("abUpDown/lyUpDownBetHistory"), S = Z(a), k = Z(l), H = Z(a), C = Z(c), E = Z(a), z = Z(a), B = Z(a), A = Z(a), L = Z([h]), U(O = M((F = e((I = function (t) {
        function e() {
          for (var e, i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
          return e = t.call.apply(t, [this].concat(s)) || this, n(e, "btnClose", F, o(e)), n(e, "sv", G, o(e)), n(e, "item", N, o(e)), n(e, "lbTips", P, o(e)), n(e, "empty", V, o(e)), n(e, "title", x, o(e)), n(e, "noMore", q, o(e)), n(e, "btnTop", W, o(e)), n(e, "fonts", Y, o(e)), e._list = void 0, e.udgmgr = null, e._records = [], e._showRecords = [], e._foldDays = [], e._isEffect = !0, e._isSending = !1, e._scrollToIndex = 0, e._svHeight = 0, e._itemHeight = 0, e
        }
        i(e, t);
        var s = e.prototype;
        return s.onLoad = function () {
          this.on([f.HISTORY_DEAL_DATA]), this.udgmgr = p.get()
        }, s.init = function () {
          this.udgmgr.Desk.EndFlag = 0, this.udgmgr.Desk.HistoryRecordList = [], this.udgmgr.Desk.HistoryRecordDays = [], m.sendGameRecordRequest(this.udgmgr.Desk.GameID, 0, v.RECORDCOUNT), this.noMore.active = !1, this.btnTop.active = !1, this._svHeight = this.sv.node.getComponent(u).height, this._itemHeight = this.item.getComponent(u).height, this._updateTips(), this._addClickEvents(), this._refreshList()
        }, s.on_scrolling = function () {
          this._list.on_scrolling();
          var t = this.sv.content.getComponent(u).height,
            e = this.sv.getScrollOffset().y;
          e <= 0 && console.log("滚动到顶部"), e >= t - this._svHeight + this._itemHeight ? (console.log("滚动到底部"), this._showRecords.length > 10 && (this.noMore.active = !0)) : this.noMore.active = !1
        }, s.on_scrollEnd = function () {
          var t = this.sv.getScrollOffset().y;
          console.log("滚动结束 offsetY = ", t);
          var e = Math.floor(t / this._itemHeight);
          this._updateTopBtn(e)
        }, s.update = function (t) {
          var e = this.sv.content.getComponent(u).height,
            i = this.sv.getScrollOffset().y,
            n = Math.floor(i / this._itemHeight);
          this._updateTopBtn(n), i >= e - this._svHeight + this._itemHeight ? (console.log("滚动到底部"), this._showRecords.length > 10 && (this.noMore.active = !0)) : this.noMore.active = !1
        }, s._updateTopBtn = function (t) {
          var e = this._showRecords[t];
          if (!e || this._showRecords.length <= 10) this.btnTop.active = !1;
          else if (e.daysData) this.btnTop.active = !1;
          else {
            this.btnTop.active = !0;
            for (var i = t - 1; i >= 0; i--) {
              var n = this._showRecords[i];
              if (n && n.daysData) {
                this._scrollToIndex = i;
                break
              }
            }
          }
        }, s._addClickEvents = function () {
          var t = this;
          _.onclick(this.btnClose, (function () {
            _.closeLayer(t)
          }), !0), _.onclick(this.btnTop, (function () {
            t._list.scroll_to(t._scrollToIndex), t.btnTop.active = !1
          }), !0)
        }, s._updateTips = function () {
          this.lbTips.string = b("UPDOWN_GAME_22", 15)
        }, s._refreshList = function (t, e) {
          void 0 === t && (t = !1), void 0 === e && (e = !0), this._list || (this._list = new w({
            scrollview: this.sv,
            content: this.sv.content,
            item_tpl: this.item,
            cb_host: this,
            gap_y: 0,
            item_setter: this.onItemSetter,
            direction: R.Vertical,
            effect: !0
          })), this.empty.active = 0 == this._showRecords.length, this.title.active = this._showRecords.length > 0, this._list.set_data(this._showRecords, t, e)
        }, s._isDayFold = function (t, e) {
          void 0 === e && (e = !1);
          for (var i = this._foldDays.length - 1; i >= 0; i--) {
            var n = this._foldDays[i];
            if (n.year == t.year && n.month == t.month && n.day == t.day) return e && this._foldDays.splice(i, 1), !0
          }
          return !1
        }, s._updateShowRecords = function (t) {
          this._showRecords = [];
          for (var e = 0; e < this._records.length; e++) {
            var i = this._records[e];
            if (!i.daysData && !i.isShowMore) {
              var n = i.detailData,
                o = y.timeToDataArray(n.timestamp, n.timezoneinmin),
                s = {
                  year: o.year,
                  month: o.month,
                  day: o.day,
                  betAmount: n.bet,
                  winAmount: n.win,
                  timezoneinmin: n.timezoneinmin
                };
              if (this._isDayFold(s)) continue
            }
            this._showRecords.push(y.clone(i))
          }
          this._refreshList(!0, t)
        }, s._onClickDate = function (t, e) {
          this._isDayFold(t, !0) ? e.angle = 0 : (this._foldDays.push(t), e.angle = 180), this._updateShowRecords(!1)
        }, s.onItemSetter = function (t, e, i) {
          var n = this,
            o = e.isShowMore,
            s = D("nodeMore", t),
            r = D("nodeInfo", t);
          if (o) {
            s.active = !0, r.active = !1;
            var a = D("btnLoadMore", s);
            _.onclick(a, (function () {
              var t = n._records.length,
                e = n._records[t - 2];
              e && e.detailData && m.sendGameRecordRequest(n.udgmgr.Desk.GameID, e.detailData.pos, v.RECORDCOUNT)
            }), !0)
          } else {
            s.active = !1, r.active = !0;
            var l = e.daysData,
              h = !!l,
              u = e.detailData;
            D("bg2", r).active = h;
            var f = D("date", r, c),
              p = 0,
              w = 0,
              R = !1;
            if (h) f.string = b("UPDOWN_GAME_23", l.day, l.month, l.year), p = l.betAmount, w = l.winAmount, R = this.udgmgr.isDayRecordEnd(l);
            else {
              var T = y.timeToDataArray(u.timestamp, u.timezoneinmin);
              f.string = b("UPDOWN_GAME_24", T.hour, T.minutes, T.seconds), p = u.bet, w = u.win
            }
            var U = w - p,
              M = D("profit", r, c);
            M.string = "" + g.getformatBetMoney(U, !0), M.color = d(U < 0 ? "#DC4865" : "#2EA200");
            var S = D("bet", r, c);
            S.string = "" + g.getformatBetMoney(p, !0);
            var k = D("win", r, c);
            k.string = "" + g.getformatBetMoney(w, !0), f.font = this.fonts[h ? 0 : 1], M.font = this.fonts[h ? 0 : 1], S.font = this.fonts[h ? 0 : 1], k.font = this.fonts[h ? 0 : 1];
            var H = D("btnOpen", r);
            H.active = h && R, h && (H.angle = this._isDayFold(l) ? 180 : 0), _.onclick(H, (function () {
              n._onClickDate(l, H)
            }), !0);
            var C = D("btnDetail", r);
            if (C.active = !h, _.onclick(C, (function () {
                _.openBundleLayer(v.Package, "lyUpDownBetHistoryDetail", {
                  detail: y.clone(u.detail),
                  pos: u.pos,
                  timezone: u.timezoneinmin
                })
              }), !0), _.onclick(r, (function () {
                if (h) {
                  if (!R) return;
                  n._onClickDate(l, H)
                } else _.openBundleLayer(v.Package, "lyUpDownBetHistoryDetail", {
                  detail: y.clone(u.detail),
                  pos: u.pos,
                  timezone: u.timezoneinmin
                })
              })), i == this._showRecords.length - 1 && u) {
              if (this._showRecords.length <= 10) return;
              this.getMoreData(u.pos)
            }
          }
        }, s.getMoreData = function (t) {
          1 != this.udgmgr.Desk.EndFlag && (this._isSending || (this.isSendingTrue(), m.sendGameRecordRequest(this.udgmgr.Desk.GameID, t, v.RECORDCOUNT)))
        }, s.isSendingTrue = function () {
          this._isSending = !0, this.scheduleOnce(this.isSendingFalse, 1)
        }, s.isSendingFalse = function () {
          this.unschedule(this.isSendingFalse), this._isSending = !1
        }, s.onEvents = function (t, e) {
          switch (t) {
            case f.HISTORY_DEAL_DATA:
              this._records = y.clone(this.udgmgr.Desk.HistoryRecordList), this._updateShowRecords(this._isEffect), this._isEffect = !1
          }
        }, e
      }(T)).prototype, "btnClose", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), G = e(I.prototype, "sv", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), N = e(I.prototype, "item", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), P = e(I.prototype, "lbTips", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), V = e(I.prototype, "empty", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), x = e(I.prototype, "title", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), q = e(I.prototype, "noMore", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), W = e(I.prototype, "btnTop", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Y = e(I.prototype, "fonts", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), O = I)) || O) || O));
      s._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/lyUpDownBetHistoryDetail.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UDUtils.ts", "./UDConstant.ts", "./UDCmd.ts", "./ge.ts", "./subGameGlobal.ts", "./GameManager.ts", "./GameRecordManager.ts", "./custom-general.ts", "./Utils3.ts", "./Cache.ts", "./general.ts", "./tilelistview.ts", "./listview-base.ts", "./UIBase.ts"], (function (t) {
  var e, i, n, o, r, l, a, s, u, c, b, p, f, m, h, g, _, y, d, D, w, I, v, U, E, B, z, M, G;
  return {
    setters: [function (t) {
      e = t.applyDecoratedDescriptor, i = t.inheritsLoose, n = t.initializerDefineProperty, o = t.assertThisInitialized
    }, function (t) {
      r = t.cclegacy, l = t._decorator, a = t.Node, s = t.Label, u = t.Sprite, c = t.ScrollView, b = t.SpriteFrame, p = t.color
    }, function (t) {
      f = t.UDUtils
    }, function (t) {
      m = t.UDConstant
    }, function (t) {
      h = t.UDCmd
    }, function (t) {
      g = t.gui, _ = t.gnet
    }, function (t) {
      y = t.gi
    }, function (t) {
      d = t.gameMgr
    }, function (t) {
      D = t.gameRecordMgr
    }, function (t) {
      w = t.copyText, I = t.nodelink
    }, function (t) {
      v = t.Utils
    }, function (t) {
      U = t.Cache
    }, function (t) {
      E = t.gutil_char, B = t.sprintf_g
    }, function (t) {
      z = t.TileListView
    }, function (t) {
      M = t.ListViewDir
    }, function (t) {
      G = t.UIBase
    }],
    execute: function () {
      var A, R, C, N, L, T, P, W, k, O, S, H, F, V, x, j, q, Y, J, K, Q, X, Z, $, tt, et, it, nt, ot, rt, lt, at, st, ut, ct, bt;
      r._RF.push({}, "1668dm7lrxB2oI6+ssAcdVz", "lyUpDownBetHistoryDetail", void 0);
      var pt = l.ccclass,
        ft = l.menu,
        mt = l.property;
      t("lyUpDownBetHistoryDetail", (A = pt("lyUpDownBetHistoryDetail"), R = ft("abUpDown/lyUpDownBetHistoryDetail"), C = mt(a), N = mt(a), L = mt(a), T = mt(s), P = mt(s), W = mt(s), k = mt(s), O = mt(s), S = mt(s), H = mt(u), F = mt(u), V = mt(c), x = mt(a), j = mt(s), q = mt(s), Y = mt([b]), A(J = R((Q = e((K = function (t) {
        function e() {
          for (var e, i = arguments.length, r = new Array(i), l = 0; l < i; l++) r[l] = arguments[l];
          return e = t.call.apply(t, [this].concat(r)) || this, n(e, "btnBack", Q, o(e)), n(e, "btnClose", X, o(e)), n(e, "btnCopy", Z, o(e)), n(e, "lbRoundID", $, o(e)), n(e, "lbPlayerID", tt, o(e)), n(e, "lbTime", et, o(e)), n(e, "lbProfit", it, o(e)), n(e, "lbBet", nt, o(e)), n(e, "lbWin", ot, o(e)), n(e, "resultIcon1", rt, o(e)), n(e, "resultIcon2", lt, o(e)), n(e, "sv", at, o(e)), n(e, "item", st, o(e)), n(e, "lbBetNum", ut, o(e)), n(e, "lbWinNum", ct, o(e)), n(e, "resultSpf", bt, o(e)), e._list = void 0, e._betList = [], e._timezone = 0, e.udgmgr = null, e._pos = 0, e
        }
        i(e, t);
        var r = e.prototype;
        return r.onLoad = function () {
          this.on([y.GameRecordEvent.GAMERECORDDETAIL]), this.udgmgr = d.get()
        }, r.init = function (t) {
          this._timezone = t.timezone || 0, this._pos = t.pos, t.detail ? this._showDetailInfo(t.detail) : (D.sendGameRecordDetailRequest(this.udgmgr.Desk.GameID, t.pos), this.btnCopy.active = !1), this._addClickEvents()
        }, r._showDetailInfo = function (t) {
          this._betList = t.bet_array || [], this._betList.push({
            zone: 100,
            odds: 0,
            doubles: 0,
            bet: t.total_bet,
            win: t.total_win
          }), this._refreshList(), this._showBaseInfo(t), this.btnCopy.active = !0
        }, r._addClickEvents = function () {
          var t = this;
          g.onclick(this.btnClose, (function () {
            g.closeLayer("lyUpDownBetHistory"), g.closeLayer(t)
          }), !0), g.onclick(this.btnBack, (function () {
            g.closeLayer(t)
          }), !0), g.onclick(this.btnCopy, (function () {
            g.showTips(E("LYSETTING_4"));
            var e = t.lbRoundID.string;
            w(e || "")
          }), !0)
        }, r._refreshList = function (t, e) {
          void 0 === t && (t = !1), void 0 === e && (e = !0), this._list || (this._list = new z({
            scrollview: this.sv,
            content: this.sv.content,
            item_tpl: this.item,
            cb_host: this,
            gap_y: 0,
            item_setter: this.onItemSetter,
            direction: M.Vertical,
            effect: !0
          })), this._list.set_data(this._betList, t, e)
        }, r._showBaseInfo = function (t) {
          this.lbRoundID.string = B("UPDOWN_GAME_25", t.round_id), this.lbPlayerID.string = B("UPDOWN_GAME_26", t.uid);
          var e = v.timeToDataArray(1e3 * t.time, this._timezone);
          this.lbTime.string = B("UPDOWN_GAME_27", e.day, e.month, e.year, e.hour, e.minutes, e.seconds);
          var i = t.total_win - t.total_bet;
          this.lbProfit.string = f.getformatBetMoney(i, !0), this.lbProfit.color = p(i < 0 ? "#DC4865" : "#2EA200"), this.lbBet.string = B("UPDOWN_GAME_29", f.getformatBetMoney(t.total_bet, !0)), this.lbWin.string = B("UPDOWN_GAME_30", f.getformatBetMoney(t.total_win, !0)), this.resultIcon1.spriteFrame = this.resultSpf[(t.point1 || 0) - 1], this.resultIcon2.spriteFrame = this.resultSpf[(t.point2 || 0) - 1], this.lbBetNum.string = f.getformatBetMoney(t.total_bet, !0), this.lbWinNum.string = f.getformatBetMoney(t.total_win, !0)
        }, r.onItemSetter = function (t, e, i) {
          var n = e.zone;
          I("line", t).active = 100 == n, I("area", t, s).string = 100 == n ? E("UPDOWN_GAME_37") : 0 == n ? E("UPDOWN_GAME_31") : 1 == n ? E("UPDOWN_GAME_32") : "" + n, I("betNum", t, s).string = f.getformatBetMoney(e.bet, !0);
          var o = I("oddNum", t, s),
            r = e.odds || 0;
          o.string = 0 == r ? "" : "" + Math.floor(r / m.RATEWEIGHT);
          var l = I("extraPayNum", t, s),
            a = e.doubles || 0;
          l.string = a > m.RATEWEIGHT ? "" + Math.floor(a / m.RATEWEIGHT) : "", I("winNum", t, s).string = f.getformatBetMoney(e.win, !0)
        }, r.onEvents = function (t, e) {
          switch (t) {
            case y.GameRecordEvent.GAMERECORDDETAIL:
              if (0 == e.result && e.game == this.udgmgr.Desk.GameID && e.uid == U.User.getUID() && e.id == this._pos) {
                var i = new Uint8Array(e.detail, 0, e.detail.length),
                  n = _._protodecode(h.RECORD_DETAIL, i.buffer);
                this._showDetailInfo(n)
              }
          }
        }, e
      }(G)).prototype, "btnBack", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), X = e(K.prototype, "btnClose", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Z = e(K.prototype, "btnCopy", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), $ = e(K.prototype, "lbRoundID", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), tt = e(K.prototype, "lbPlayerID", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), et = e(K.prototype, "lbTime", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), it = e(K.prototype, "lbProfit", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), nt = e(K.prototype, "lbBet", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ot = e(K.prototype, "lbWin", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), rt = e(K.prototype, "resultIcon1", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), lt = e(K.prototype, "resultIcon2", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), at = e(K.prototype, "sv", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), st = e(K.prototype, "item", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ut = e(K.prototype, "lbBetNum", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ct = e(K.prototype, "lbWinNum", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), bt = e(K.prototype, "resultSpf", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), J = K)) || J) || J));
      r._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/lyUpDownCheckTable.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ge.ts", "./GameManager.ts", "./UDConstant.ts", "./UIBase.ts"], (function (n) {
  var t, e, i, o, a, r, c, s, u, l, p, f;
  return {
    setters: [function (n) {
      t = n.applyDecoratedDescriptor, e = n.inheritsLoose, i = n.initializerDefineProperty, o = n.assertThisInitialized
    }, function (n) {
      a = n.cclegacy, r = n._decorator, c = n.Node
    }, function (n) {
      s = n.gui
    }, function (n) {
      u = n.gameMgr
    }, function (n) {
      l = n.UDConstant
    }, function (n) {
      p = n.UIType, f = n.UIBase
    }],
    execute: function () {
      var h, v, y, C, b;
      a._RF.push({}, "cfa47NsDGpEwLhjvWpwMRM+", "lyUpDownCheckTable", void 0);
      var d = r.ccclass,
        g = r.property;
      n("lyUpDownCheckTable", (h = d("lyUpDownCheckTable"), v = g(c), h((b = t((C = function (n) {
        function t() {
          for (var t, e = arguments.length, a = new Array(e), r = 0; r < e; r++) a[r] = arguments[r];
          return t = n.call.apply(n, [this].concat(a)) || this, i(t, "btnContinue", b, o(t)), t._uiType = p.FULLSCREEN, t
        }
        e(t, n);
        var a = t.prototype;
        return a.onLoad = function () {}, a.init = function (n) {
          var t = (null == n ? void 0 : n.isKick) || !1;
          this.btnContinue.active = !t, this._addClickEvents()
        }, a._addClickEvents = function () {
          var n = this;
          s.onclick(this.btnContinue, (function () {
            var t = u.get();
            t && (t.Desk.IsJoinRoom = !1, t.Desk.gameStatus = l.ServerGameState.UNKNOWN, t.reqCheckAutoMatch(), s.closeLayer(n))
          }), !0)
        }, a.onEvents = function (n, t) {}, t
      }(f)).prototype, "btnContinue", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), y = C)) || y));
      a._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/lyUpDownHistory.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioEngine.ts", "./ge.ts", "./Utils3.ts", "./LocalizedLabelPlus.ts", "./GameManager.ts", "./UDConstant.ts", "./UDEvent.ts", "./nodeTableRecordOne.ts", "./ReportManager.ts", "./interface10.ts", "./PfDaLuScrollView.ts", "./tilenode.ts", "./general.ts", "./UIBase.ts"], (function (e) {
  var t, n, i, o, r, l, s, a, u, d, g, c, p, h, b, f, m, w, L, y, v, P, C, D, S, T, R, I, O, z, U, _, B, M, N, H, A;
  return {
    setters: [function (e) {
      t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, o = e.assertThisInitialized
    }, function (e) {
      r = e.cclegacy, l = e._decorator, s = e.Node, a = e.Widget, u = e.Layout, d = e.Prefab, g = e.Label, c = e.instantiate, p = e.ProgressBar, h = e.NodeEventType, b = e.Tween, f = e.UITransform, m = e.tween, w = e.Vec3, L = e.warn
    }, function (e) {
      y = e.AudioEngine
    }, function (e) {
      v = e.gui
    }, function (e) {
      P = e.Utils
    }, function (e) {
      C = e.LocalizedLabelPlus
    }, function (e) {
      D = e.gameMgr
    }, function (e) {
      S = e.TrackPageViewEvent, T = e.UDConstant, R = e.TrackClickEvent, I = e.TrackClickName
    }, function (e) {
      O = e.UDEvent
    }, function (e) {
      z = e.nodeTableRecordOne
    }, function (e) {
      U = e.reportMgr
    }, function (e) {
      _ = e.NspDaLu
    }, function (e) {
      B = e.PfDaLuScrollView
    }, function (e) {
      M = e.TileNode
    }, function (e) {
      N = e.gutil_char, H = e.sprintf_g
    }, function (e) {
      A = e.UIBase
    }],
    execute: function () {
      var E, W, k, V, x, G, Y, j, Q, F, J, q, K, X, Z, $, ee, te, ne, ie, oe, re, le, se, ae, ue, de, ge, ce, pe, he, be, fe, me, we, Le, ye, ve, Pe, Ce, De, Se, Te, Re, Ie, Oe, ze, Ue, _e, Be, Me, Ne, He, Ae, Ee, We;
      r._RF.push({}, "0d193jTnSJB+I5jrJGj6hmS", "lyUpDownHistory", void 0);
      var ke = l.ccclass,
        Ve = l.property,
        xe = l.menu;
      e("lyUpDownHistory", (E = ke("lyUpDownHistory"), W = xe("abUpDown/lyUpDownHistory"), k = Ve(s), V = Ve(a), x = Ve(u), G = Ve(a), Y = Ve(u), j = Ve(s), Q = Ve(d), F = Ve(s), J = Ve(s), q = Ve(g), K = Ve(g), X = Ve(s), Z = Ve(g), $ = Ve(g), ee = Ve(s), te = Ve(g), ne = Ve(g), ie = Ve(s), oe = Ve(s), re = Ve(s), le = Ve(g), se = Ve(s), ae = Ve(s), ue = Ve(s), de = Ve(s), ge = Ve(s), E(ce = W((he = t((pe = function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
          return t = e.call.apply(e, [this].concat(r)) || this, i(t, "root", he, o(t)), i(t, "rootWidget", be, o(t)), i(t, "rootLayout", fe, o(t)), i(t, "bgWidget", me, o(t)), i(t, "contentLayout", we, o(t)), i(t, "record", Le, o(t)), i(t, "cloneItemRecord", ye, o(t)), i(t, "nodeProgress", ve, o(t)), i(t, "nodeSmallProgress", Pe, o(t)), i(t, "lblSmallProgress", Ce, o(t)), i(t, "lblDown", De, o(t)), i(t, "nodeSevenProgress", Se, o(t)), i(t, "lblSevenProgress", Te, o(t)), i(t, "lbl7", Re, o(t)), i(t, "nodeBigProgress", Ie, o(t)), i(t, "lblBigProgress", Oe, o(t)), i(t, "lblUp", ze, o(t)), i(t, "nodeProgressLabel", Ue, o(t)), i(t, "nodeList", _e, o(t)), i(t, "nodeProgressList", Be, o(t)), i(t, "lblHands", Me, o(t)), i(t, "nodeMore", Ne, o(t)), i(t, "sprToMore", He, o(t)), i(t, "sprToSmall", Ae, o(t)), i(t, "dalu", Ee, o(t)), i(t, "nodeBottom", We, o(t)), t.allRecordList = [], t.allProgressList = {}, t.allProgressLabelList = {}, t.udgmgr = null, t.move = 364, t.moveTime = .2, t.isCanClose = !1, t.servenOdds = 0, t.upOdds = 0, t.downOdds = 0, t
        }
        n(t, e);
        var r = t.prototype;
        return r.onLoad = function () {
          this.udgmgr = D.get(), this.initView(), this.updateOdds(), this.updateProgressList(), this.showUI(), this.on([O.HISTORY_RECORD_UPDATE, O.GAME_WILL_SWITCH]), U.trackView(S.HISTORY)
        }, r.start = function () {
          this.updateRecord()
        }, r.initView = function () {
          this.allRecordList = [];
          for (var e = 0; e < 6; e++)
            for (var t = 0; t < 18; t++) {
              var n = c(this.cloneItemRecord);
              n.active = !0;
              var i = M.creat(n);
              i.parent = this.record, i.setPosition(35 * t - 299.5, 105 - 35 * e), this.allRecordList.push(i.node.getComponent(z)), this.allRecordList[this.allRecordList.length - 1].setNum(null)
            }
          this.allProgressList = {};
          for (var o = 0; o < this.nodeProgressList.children.length; o++) {
            var r = this.nodeProgressList.children[o],
              l = r.getChildByName("ProgressBar");
            l && (this.allProgressList[Number(r.name)] = l.getComponent(p), this.allProgressList[Number(r.name)].progress = 0)
          }
          this.allProgressLabelList = {};
          for (var s = 2; s <= 12; s++) {
            var a = this.nodeList.getChildByName("lblProgressNum_" + s);
            a && (this.allProgressLabelList[s] = a.getComponent(g), this.allProgressLabelList[s].string = "")
          }
          this.isCanClose = !1, this.nodeBottom.active = !0, this.sprToMore.active = !1, this.sprToSmall.active = !0, this.contentLayout.updateLayout(!0), this.rootWidget.updateAlignment(), this.rootLayout.updateLayout(!0), this.bgWidget.updateAlignment(), this.sprToSmall.on(h.TOUCH_END, P.handler(this, this.onClickBtnMore), this, !0)
        }, r.showUI = function () {
          var e = this;
          b.stopAllByTarget(this.root);
          var t = this.root.getComponent(f).height;
          t -= this.nodeBottom.getComponent(f).height, m(this.root).by(this.moveTime, {
            position: new w(0, -t, 0)
          }).call((function () {
            e.isCanClose = !0
          })).start()
        }, r.hideUI = function () {
          var e = this;
          this.isCanClose = !1, b.stopAllByTarget(this.root);
          var t = this.root.getComponent(f).height;
          t -= this.nodeBottom.getComponent(f).height, m(this.root).by(this.moveTime, {
            position: new w(0, t, 0)
          }).call((function () {
            v.closeLayer(e.node)
          })).start()
        }, r.updateRecord = function () {
          var e = this.udgmgr.Desk.HistoryLotteryRecord;
          if (e) {
            var t = P.clone(e.winInfoList),
              n = e.daluIndex - 1;
            this.allRecordList.forEach((function (i, o) {
              var r = t[n - o],
                l = null;
              r && o < e.daluIndex && (l = r.point1 + r.point2), i.setNum(l, !!r && r.isDouble, o == n)
            }));
            for (var i = [], o = 0; o < t.length; o++) {
              var r = t[o].point1 + t[o].point2,
                l = _.DaLuQuanType.LAN_DA;
              7 == r ? l = _.DaLuQuanType.PING_DA : r > 7 && (l = _.DaLuQuanType.HONG_DA), i.push({
                showNum: r,
                quanType: l
              })
            }
            var s = {
                index: e.daluIndex,
                winInfo: i,
                isNewToOld: !0
              },
              a = this.dalu.getComponent(B);
            a && a.setData(s)
          } else
            for (var u = 0; u < this.allRecordList.length; u++) this.allRecordList[u].setNum(null)
        }, r.updateOdds = function () {
          if (this.udgmgr.Desk.HistoryLotteryRecord) {
            this.nodeProgress.active = !0;
            var e = this.udgmgr.Desk.getUpDownSenvenWinRate(),
              t = e.downWin,
              n = e.upWin,
              i = e.sevenWin,
              o = this.nodeProgress.getComponent(f).width,
              r = Math.floor(o * (t / 100)),
              l = Math.floor(o * (n / 100)),
              s = o - r - l;
            this.nodeSmallProgress.getComponent(f).width = r, this.lblSmallProgress.string = 0 == t ? "" : t + "%", this.nodeSmallProgress.position = new w(0 - o / 2, 0, 0), this.lblSmallProgress.node.position = new w(r / 2, 0, 0), this.lblDown.string = 0 == t ? "" : N("UPDOWN_GAME_42"), this.lblDown.node.position = new w(r / 2, 28, 0), this.nodeSevenProgress.getComponent(f).width = s, this.lblSevenProgress.string = 0 == i ? "" : i + "%", this.nodeSevenProgress.position = new w(0 - o / 2 + r, 0, 0), this.lblSevenProgress.node.position = new w(r + s / 2, 0, 0), this.lbl7.string = 0 == i ? "" : N("UPDOWN_GAME_44"), this.lbl7.node.position = new w(r + s / 2, 28, 0), this.servenOdds = i, this.upOdds = n, this.downOdds = t, this.nodeBigProgress.getComponent(f).width = l, this.lblBigProgress.string = 0 == n ? "" : n + "%", this.nodeBigProgress.position = new w(0 - o / 2 + r + s, 0, 0), this.lblBigProgress.node.position = new w(r + s + l / 2, 0, 0), this.lblUp.string = 0 == n ? "" : N("UPDOWN_GAME_43"), this.lblUp.node.position = new w(r + s + l / 2, 28, 0)
          } else this.nodeProgress.active = !1
        }, r.updateProgressList = function () {
          for (var e = this.udgmgr.Desk.HistoryLotteryRecord, t = [], n = {}, i = 0; i < 13; i++) t[i] = 0, n[i] = 0;
          for (var o = P.clone(e.winInfoList), r = 0, l = 0, s = 0; s < e.daluIndex; s++) {
            var u = o[s].point1 + o[s].point2;
            n[u] += 1, u >= 2 && u < 7 ? l = Math.max(l, u) : u > 7 && u <= 12 && (r = Math.max(r, u))
          }
          var d = 0,
            g = 0,
            c = e.daluIndex;
          for (var p in n) {
            var h = Number(p),
              b = n[p];
            if (h >= 2 && h < 7)
              if (h == l) t[p] = 100 * this.downOdds - g;
              else {
                var m = 100 * Math.floor(b / c * 100);
                t[p] = m, g += m
              }
            else if (7 == h);
            else if (h > 7 && h <= 12)
              if (h == r) t[p] = 100 * this.upOdds - d;
              else {
                var L = 100 * Math.floor(b / c * 100);
                t[p] = L, d += L
              }
          }
          for (var y = P.tableVerify(t, !0), v = this.nodeList.getComponent(f), D = 0; D < 13; D++) {
            var S = P.numValueOf(y[D]);
            S = P.numValueOf(S) / 1e4, S = P.numSubString(S, 2), S = new Decimal(S).times(100).toString();
            var T = this.allProgressList[D];
            if (T) {
              7 == D && (S = this.servenOdds), T.progress = new Decimal(S).div(100).toNumber(), T.barSprite.node.getComponent(a).updateAlignment(), this.allProgressLabelList[D].string = S + "%";
              var R = T.node.getComponent(f).width,
                I = Math.floor(R * T.progress) / 2;
              T.progress <= .2 && (7 == D ? T.progress <= .05 && (I = this.allProgressLabelList[D].node.getComponent(f).width / 2) : I = this.allProgressLabelList[D].node.getComponent(f).width / 2);
              var O = T.barSprite.node.getWorldPosition().clone(),
                z = v.convertToNodeSpaceAR(new w(O.x + I, O.y, O.z));
              this.allProgressLabelList[D].node.position = z
            }
          }
          this.lblHands.getComponent(C).string = H(N("ud_history_hands_num"), P.numValueOf(c))
        }, r.onEvents = function (e) {
          var t = arguments.length <= 2 ? void 0 : arguments[2];
          switch (e) {
            case O.HISTORY_RECORD_UPDATE:
              this.updateRecord(), this.updateOdds(), 1 == t && (L("========更新各个赔率点数========"), this.updateProgressList());
              break;
            case O.GAME_WILL_SWITCH:
              v.closeLayer(this.node)
          }
        }, r.onClickBtnMore = function (e) {
          0 != this.isCanClose && (y.instance.effect(0, T.Audio.BtnClick), U.trackClick(S.HISTORY, R.HISTORY + "_" + I.HISTORY_MORE), this.hideUI())
        }, r.onClickSpanceClose = function (e) {
          this.isCanClose && this.hideUI()
        }, t
      }(A)).prototype, "root", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), be = t(pe.prototype, "rootWidget", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), fe = t(pe.prototype, "rootLayout", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), me = t(pe.prototype, "bgWidget", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), we = t(pe.prototype, "contentLayout", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Le = t(pe.prototype, "record", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), ye = t(pe.prototype, "cloneItemRecord", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), ve = t(pe.prototype, "nodeProgress", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Pe = t(pe.prototype, "nodeSmallProgress", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Ce = t(pe.prototype, "lblSmallProgress", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), De = t(pe.prototype, "lblDown", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Se = t(pe.prototype, "nodeSevenProgress", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Te = t(pe.prototype, "lblSevenProgress", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Re = t(pe.prototype, "lbl7", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Ie = t(pe.prototype, "nodeBigProgress", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Oe = t(pe.prototype, "lblBigProgress", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), ze = t(pe.prototype, "lblUp", [ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Ue = t(pe.prototype, "nodeProgressLabel", [ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), _e = t(pe.prototype, "nodeList", [oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Be = t(pe.prototype, "nodeProgressList", [re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Me = t(pe.prototype, "lblHands", [le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Ne = t(pe.prototype, "nodeMore", [se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), He = t(pe.prototype, "sprToMore", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Ae = t(pe.prototype, "sprToSmall", [ue], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Ee = t(pe.prototype, "dalu", [de], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), We = t(pe.prototype, "nodeBottom", [ge], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), ce = pe)) || ce) || ce));
      r._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/lyUpDownLoading.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ge.ts", "./StorageData.ts", "./GameCache.ts", "./GameManager.ts", "./SubGameCache.ts", "./GameDownloadManager.ts", "./UpDownManager.ts", "./interface4.ts", "./UIBase.ts"], (function (e) {
  var n, t, o, r, i, a, s, l, c, u, g, p, d, f, b, h, m, _, y, w;
  return {
    setters: [function (e) {
      n = e.applyDecoratedDescriptor, t = e.inheritsLoose, o = e.initializerDefineProperty, r = e.assertThisInitialized
    }, function (e) {
      i = e.cclegacy, a = e._decorator, s = e.Node, l = e.Toggle, c = e.Label, u = e.ProgressBar
    }, function (e) {
      g = e.gui
    }, function (e) {
      p = e.StorageData
    }, function (e) {
      d = e.GameCache
    }, function (e) {
      f = e.gameMgr
    }, function (e) {
      b = e.SubGameCache
    }, function (e) {
      h = e.gameDownloadMgr
    }, function (e) {
      m = e.UpDownManager
    }, function (e) {
      _ = e.SubGameEventGame
    }, function (e) {
      y = e.UIType, w = e.UIBase
    }],
    execute: function () {
      var D, v, U, L, C, P, G, M, E, I, T;
      i._RF.push({}, "0c9f6w70+ZNhqaaKWjAZPWU", "lyUpDownLoading", void 0);
      var S = a.ccclass,
        x = a.property;
      e("lyUpDownLoading", (D = S("lyUpDownLoading"), v = x(s), U = x(l), L = x(c), C = x(u), D((M = n((G = function (e) {
        function n() {
          for (var n, t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] = arguments[a];
          return n = e.call.apply(e, [this].concat(i)) || this, o(n, "btnContinue", M, r(n)), o(n, "toggle", E, r(n)), o(n, "lbProgress", I, r(n)), o(n, "pb", T, r(n)), n._uiType = y.FULLSCREEN, n._maxProgress = 100, n._maxTipNum = 1, n._curTipIdx = 1, n._storeKey = "abUpDown_enter_room", n
        }
        t(n, e);
        var i = n.prototype;
        return i.onLoad = function () {
          var e = this;
          f.subGamePresenter = new m, this.on([]);
          var n = d.game._get(b.GAME_ID);
          console.log("gameId", n), this.addSchedulerOnce(.1, (function () {
            h.downloadAbs(n, {
              progress: function (n, t, o) {
                e.lbProgress.node.active = !0, e.lbProgress.string = Math.floor(100 * o) + "%", e.pb.progress = o
              },
              target: e,
              complete: function () {
                e.lbProgress.string = "100%", e.pb.progress = 1, e._downloadEnd()
              }
            })
          }))
        }, i.init = function () {
          this._addClickEvents()
        }, i._downloadEnd = function () {
          this._enterRoom(), this.emit(_.start)
        }, i._addClickEvents = function () {}, i._enterRoom = function () {
          var e = this;
          g.openBundleLayer("abUpDown", "lyUpDownMain", {}, {
            onAdded: function () {
              g.closeLayer(e)
            }
          })
        }, i._onArrowBtnClick = function (e) {
          1 == e ? this._curTipIdx-- : this._curTipIdx++
        }, i._switchToggle = function () {
          this.toggle.isChecked ? p.user.set(this._storeKey, !0) : p.user.set(this._storeKey, !1)
        }, i.onEvents = function (e, n) {}, n
      }(w)).prototype, "btnContinue", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), E = n(G.prototype, "toggle", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), I = n(G.prototype, "lbProgress", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), T = n(G.prototype, "pb", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), P = G)) || P));
      i._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/lyUpDownMain.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioEngine.ts", "./ge.ts", "./SubAssetLoader.ts", "./GameCache.ts", "./GameManager.ts", "./SubGameCache.ts", "./PlatformGI.ts", "./UDConstant.ts", "./UDEvent.ts", "./ReportManager.ts", "./UIBase.ts"], (function (t) {
  var e, n, o, s, i, a, u, r, c, l, d, h, A, f, p, L, g;
  return {
    setters: [function (t) {
      e = t.inheritsLoose
    }, function (t) {
      n = t.cclegacy, o = t._decorator, s = t.AudioClip
    }, function (t) {
      i = t.AudioEngine
    }, function (t) {
      a = t.gui
    }, function (t) {
      u = t.SubAssetLoader
    }, function (t) {
      r = t.GameCache
    }, function (t) {
      c = t.gameMgr
    }, function (t) {
      l = t.SubGameCache
    }, function (t) {
      d = t.PlatformGI
    }, function (t) {
      h = t.TrackPageViewEvent, A = t.UDConstant
    }, function (t) {
      f = t.UDEvent
    }, function (t) {
      p = t.reportMgr
    }, function (t) {
      L = t.UIBase, g = t.UIType
    }],
    execute: function () {
      var y;
      n._RF.push({}, "08b0eEz+yZC947vWRGD1pI9", "lyUpDownMain", void 0);
      var m = o.ccclass,
        b = (o.property, o.menu);
      t("lyUpDownMain", m("lyUpDownMain")(y = b("abUpDown/lyUpDownMain")(y = function (t) {
        function n() {
          for (var e, n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
          return (e = t.call.apply(t, [this].concat(o)) || this).subAssetLoader = null, e.loadAudioList = [], e.handlerAudioLoad = null, e._uiType = g.FULLSCREEN, e
        }
        e(n, t);
        var o = n.prototype;
        return o.init = function () {
          this.regist(), this.loadAssest(), p.trackView(h.MAIN)
        }, o.regist = function () {}, o.loadAssest = function () {
          var t = this;
          for (var e in A.Audio)
            if (Object.prototype.hasOwnProperty.call(A.Audio, e)) {
              var n = A.Audio[e];
              this.loadAudioList.push({
                bundle: A.Package,
                url: A.AudioRootPath + n,
                name: n,
                type: s
              })
            } this.subAssetLoader || (this.subAssetLoader = new u), this.subAssetLoader.commitLoader(this.loadAudioList), this.handlerAudioLoad = this.addScheduler(.1, (function () {
            t.subAssetLoader.check(), t.subAssetLoader.finished && (console.log("abUpDown 音乐资源加载完成====>"), t.stopScheduler(t.handlerAudioLoad), t.handlerAudioLoad = null, t.checkCanPlayBgm())
          }))
        }, o.onLoad = function () {
          this.on([])
        }, o.start = function () {
          this.emit(f.VIEW_INIT_UI), c.requestGameConfig(r.game._get(l.GAME_ID))
        }, o.onEvents = function (t, e) {}, o.checkCanPlayBgm = function () {
          d.getMusicConf().musicAllow && i.instance.music(0, A.Audio.Bgm, !0)
        }, o.onDestroy = function () {
          t.prototype.onDestroy.call(this), this.clearView()
        }, o.clearView = function () {
          this.unscheduleAllCallbacks(), a.closeAlert("updown"), c.get().clear(), c.subGamePresenter = null, i.instance.stopEffect(0), i.instance.stopMusic(0), this.handlerAudioLoad && (this.unschedule(this.handlerAudioLoad), this.handlerAudioLoad = null), this.subAssetLoader && (this.subAssetLoader.destroyAssest(this.loadAudioList), this.subAssetLoader = null)
        }, n
      }(L)) || y) || y);
      n._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/lyUpDownMenu.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioEngine.ts", "./ge.ts", "./Utils3.ts", "./GameManager.ts", "./PlatformGI.ts", "./UDConstant.ts", "./UDEvent.ts", "./ReportManager.ts", "./UIBase.ts"], (function (t) {
  var i, e, n, o, s, a, c, l, h, r, u, C, T, _, d, f, g, b, p, w, E, k, y, U, I, m, S;
  return {
    setters: [function (t) {
      i = t.applyDecoratedDescriptor, e = t.inheritsLoose, n = t.initializerDefineProperty, o = t.assertThisInitialized
    }, function (t) {
      s = t.cclegacy, a = t._decorator, c = t.Node, l = t.Toggle, h = t.Widget, r = t.NodeEventType, u = t.Tween, C = t.tween, T = t.Vec3, _ = t.Label, d = t.color
    }, function (t) {
      f = t.AudioEngine
    }, function (t) {
      g = t.gui
    }, function (t) {
      b = t.Utils
    }, function (t) {
      p = t.gameMgr
    }, function (t) {
      w = t.PlatformGI
    }, function (t) {
      E = t.TrackPageViewEvent, k = t.TrackClickEvent, y = t.TrackClickName, U = t.UDConstant
    }, function (t) {
      I = t.UDEvent
    }, function (t) {
      m = t.reportMgr
    }, function (t) {
      S = t.UIBase
    }],
    execute: function () {
      var B, A, N, v, L, D, H, M, O, G, R, P, x, z, W, F, V, j, K, Y;
      s._RF.push({}, "d4182jTUrVF+Y2IFsPsmR4x", "lyUpDownMenu", void 0);
      var X = a.ccclass,
        q = a.property,
        J = a.menu;
      t("lyUpDownMenu", (B = X("lyUpDownMenu"), A = J("abUpDown/lyUpDownMenu"), N = q(c), v = q(c), L = q(c), D = q(c), H = q(c), M = q(c), O = q(l), G = q(l), B(R = A((x = i((P = function (t) {
        function i() {
          for (var i, e = arguments.length, s = new Array(e), a = 0; a < e; a++) s[a] = arguments[a];
          return i = t.call.apply(t, [this].concat(s)) || this, n(i, "root", x, o(i)), n(i, "tab_exit", z, o(i)), n(i, "tab_switch", W, o(i)), n(i, "tab_freeSwitch", F, o(i)), n(i, "tab_history", V, o(i)), n(i, "tab_howtoplay", j, o(i)), n(i, "musicToggle", K, o(i)), n(i, "soundToggle", Y, o(i)), i.move = 364, i.moveTime = .2, i.isCanClose = !1, i.isCanSwitch = !0, i.udgmgr = void 0, i
        }
        e(i, t);
        var s = i.prototype;
        return s.onLoad = function () {
          this.udgmgr = p.get();
          var t = w.getMusicConf();
          this.musicToggle.isChecked = t.musicAllow, this.soundToggle.isChecked = t.effectAllow, this.regClick(), this.node.getComponent(h).updateAlignment(), this.root.active = !0, this.root.getComponent(h).updateAlignment(), this.showUI(), this.on([I.VIEW_INIT_UI, I.GAME_ROUND_INIT, I.BET_COUNT_UPDATE, I.GAME_WILL_SWITCH]), m.trackView(E.SETTING)
        }, s.regClick = function () {
          this.updateEnabledBtn(this.tab_exit, !0), this.updateEnabledBtn(this.tab_howtoplay, !0), this.updateEnabledBtn(this.tab_history, !0), this.tab_exit.on(r.TOUCH_START, b.handler(this, this.onClickBegin), this, !0), this.tab_exit.on(r.TOUCH_END, b.handler(this, this.onClickExit), this, !0), this.tab_exit.on(r.TOUCH_CANCEL, b.handler(this, this.onClickCancle), this, !0), this.tab_howtoplay.on(r.TOUCH_START, b.handler(this, this.onClickBegin), this, !0), this.tab_howtoplay.on(r.TOUCH_END, b.handler(this, this.onClickHowToPlay), this, !0), this.tab_howtoplay.on(r.TOUCH_CANCEL, b.handler(this, this.onClickCancle), this, !0), this.tab_history.on(r.TOUCH_START, b.handler(this, this.onClickBegin), this, !0), this.tab_history.on(r.TOUCH_END, b.handler(this, this.onClickHistory), this, !0), this.tab_history.on(r.TOUCH_CANCEL, b.handler(this, this.onClickCancle), this, !0), this.updateSwitchTableBtn(!0)
        }, s.showUI = function () {
          var t = this;
          u.stopAllByTarget(this.root), C(this.root).by(this.moveTime, {
            position: new T(this.move, 0, 0)
          }).call((function () {
            t.isCanClose = !0
          })).start()
        }, s.hideUI = function () {
          var t = this;
          this.isCanClose = !1, u.stopAllByTarget(this.root), C(this.root).by(this.moveTime, {
            position: new T(-this.move, 0, 0)
          }).call((function () {
            g.closeLayer(t.node)
          })).start()
        }, s.onEvents = function (t, i) {
          switch (t) {
            case I.VIEW_INIT_UI:
            case I.GAME_ROUND_INIT:
            case I.BET_COUNT_UPDATE:
              this.updateSwitchTableBtn();
              break;
            case I.GAME_WILL_SWITCH:
              g.closeLayer(this.node)
          }
        }, s.initView = function () {}, s.updateSwitchTableBtn = function (t) {
          void 0 === t && (t = !1), (t || this.udgmgr.Desk.CanSwitchTable != this.isCanSwitch) && (this.isCanSwitch = this.udgmgr.Desk.CanSwitchTable, 1 == this.isCanSwitch ? (this.updateEnabledBtn(this.tab_switch, !0), this.tab_switch.on(r.TOUCH_START, b.handler(this, this.onClickBegin), this, !0), this.tab_switch.on(r.TOUCH_END, b.handler(this, this.onClickSwitch), this, !0), this.tab_switch.on(r.TOUCH_CANCEL, b.handler(this, this.onClickCancle), this, !0), this.updateEnabledBtn(this.tab_freeSwitch, !0), this.tab_freeSwitch.on(r.TOUCH_START, b.handler(this, this.onClickBegin), this, !0), this.tab_freeSwitch.on(r.TOUCH_END, b.handler(this, this.onClickFreeSwitch), this, !0), this.tab_freeSwitch.on(r.TOUCH_CANCEL, b.handler(this, this.onClickCancle), this, !0)) : (this.updateEnabledBtn(this.tab_switch, !1), this.updateEnabledBtn(this.tab_freeSwitch, !1)))
        }, s.onClickBegin = function (t) {
          t.target._UI_.choose.active = !0
        }, s.onClickCancle = function (t) {
          t.target._UI_.choose.active = !1
        }, s.onClickExit = function (t) {
          if (this.isCanClose) {
            m.trackClick(E.SETTING, k.SETTING + "_" + y.MENU_CLICK.EXIT), f.instance.effect(0, U.Audio.BtnClick), t.target._UI_.choose.active = !1;
            var i = w.getMusicConf();
            i.musicAllow = this.musicToggle.isChecked, i.effectAllow = this.soundToggle.isChecked, w.setMusicConf(i), this.hideUI(), this.udgmgr.sendLeaveRoom()
          }
        }, s.onClickClose = function (t) {
          if (this.isCanClose) {
            var i = w.getMusicConf();
            i.musicAllow = this.musicToggle.isChecked, i.effectAllow = this.soundToggle.isChecked, w.setMusicConf(i), this.hideUI()
          }
        }, s.onClickSwitch = function (t) {
          this.isCanClose && (m.trackClick(E.SETTING, k.SETTING + "_" + y.MENU_CLICK.SWITCH_TABLE), f.instance.effect(0, U.Audio.BtnClick), t.target._UI_.choose.active = !1, g.closeLayer(this.node), this.udgmgr.sendSwitchTable(null, U.SwitchTableType.FreeSwitch))
        }, s.onClickFreeSwitch = function (t) {
          this.isCanClose && (m.trackClick(E.SETTING, k.SETTING + "_" + y.MENU_CLICK.SELECT_TABLE), f.instance.effect(0, U.Audio.BtnClick), t.target._UI_.choose.active = !1, g.closeLayer(this.node), g.openBundleLayer(U.Package, "lyUpDownSelectTable", {
            viewName: E.SELECTING_TABLE,
            clickEvent: k.SELECT_TABLE,
            clickType: y.SELECT_TABLE_MODE
          }))
        }, s.onClickHowToPlay = function (t) {
          this.isCanClose && (m.trackClick(E.SETTING, k.SETTING + "_" + y.MENU_CLICK.HOW_TO_PLAY), f.instance.effect(0, U.Audio.BtnClick), t.target._UI_.choose.active = !1, g.closeLayer(this.node), g.openBundleLayer(U.Package, "lyUpDownRule"))
        }, s.onClickHistory = function (t) {
          this.isCanClose && (m.trackClick(E.SETTING, k.BET_HISTORY + "_" + y.BET_HISTORY), f.instance.effect(0, U.Audio.BtnClick), t.target._UI_.choose.active = !1, g.closeLayer(this.node), g.openBundleLayer(U.Package, "lyUpDownBetHistory"))
        }, s.onCheckedMusic = function (t) {
          f.instance.effect(0, U.Audio.BtnClick), w.setMusicConf({
            musicAllow: t.isChecked
          }), t.isChecked ? f.instance.music(0, U.Audio.Bgm, !0) : f.instance.stopMusic(0)
        }, s.onCheckedSound = function (t) {
          f.instance.effect(0, U.Audio.BtnClick), w.setMusicConf({
            effectAllow: t.isChecked
          })
        }, s.updateEnabledBtn = function (t, i) {
          var e = t._UI_;
          e || ((e = {}).choose = t.getChildByName("choose"), e.icon = t.getChildByName("icon"), e.icon_an = t.getChildByName("icon_an"), e.icon_jiantou = t.getChildByName("icon_jiantou"), e.Label = t.getChildByName("Label")), t._UI_ = e, e.choose.active = !1, e.icon.active = i, e.icon_an.active = !i, e.icon_jiantou.active = i, t.off(r.TOUCH_START), t.off(r.TOUCH_END), t.off(r.TOUCH_CANCEL);
          var n = e.Label.getComponent(_);
          n.color = i ? d(220, 72, 101, 255) : d(145, 140, 141, 255)
        }, s.onDestroy = function () {
          t.prototype.onDestroy.call(this)
        }, i
      }(S)).prototype, "root", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), z = i(P.prototype, "tab_exit", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), W = i(P.prototype, "tab_switch", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), F = i(P.prototype, "tab_freeSwitch", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), V = i(P.prototype, "tab_history", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), j = i(P.prototype, "tab_howtoplay", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), K = i(P.prototype, "musicToggle", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Y = i(P.prototype, "soundToggle", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), R = P)) || R) || R));
      s._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/lyUpDownRule.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioEngine.ts", "./ge.ts", "./UDConstant.ts", "./ReportManager.ts", "./UIBase.ts"], (function (n) {
  var e, t, o, r, i, c, u, a, l, s, p, f, y;
  return {
    setters: [function (n) {
      e = n.applyDecoratedDescriptor, t = n.inheritsLoose, o = n.initializerDefineProperty, r = n.assertThisInitialized
    }, function (n) {
      i = n.cclegacy, c = n._decorator, u = n.Node
    }, function (n) {
      a = n.AudioEngine
    }, function (n) {
      l = n.gui
    }, function (n) {
      s = n.TrackPageViewEvent, p = n.UDConstant
    }, function (n) {
      f = n.reportMgr
    }, function (n) {
      y = n.UIBase
    }],
    execute: function () {
      var d, g, D, w, U, v;
      i._RF.push({}, "51682/vNrVIBJo9m4qobrod", "lyUpDownRule", void 0);
      var h = c.ccclass,
        R = c.property,
        b = c.menu;
      n("lyUpDownRule", (d = h("lyUpDownRule"), g = b("abUpDown/lyUpDownRule"), D = R(u), d(w = g((v = e((U = function (n) {
        function e() {
          for (var e, t = arguments.length, i = new Array(t), c = 0; c < t; c++) i[c] = arguments[c];
          return e = n.call.apply(n, [this].concat(i)) || this, o(e, "root", v, r(e)), e
        }
        t(e, n);
        var i = e.prototype;
        return i.onLoad = function () {
          f.trackView(s.HOW_TO_PLAY)
        }, i.onClickClose = function (n) {
          a.instance.effect(0, p.Audio.BtnClick), l.closeLayer(this.node)
        }, e
      }(y)).prototype, "root", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), w = U)) || w) || w));
      i._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/lyUpDownSelectLevel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioEngine.ts", "./ge.ts", "./Utils3.ts", "./GameManager.ts", "./subGameGlobal.ts", "./UDConstant.ts", "./UDEvent.ts", "./UDUtils.ts", "./ReportManager.ts", "./rslistview-base.ts", "./listview-base.ts", "./general.ts", "./UIBase.ts"], (function (e) {
  var t, i, l, n, o, a, r, s, c, u, m, d, g, h, L, f, b, E, v, p, _, y, C, M, S, D, T, k, V, w;
  return {
    setters: [function (e) {
      t = e.applyDecoratedDescriptor, i = e.inheritsLoose, l = e.initializerDefineProperty, n = e.assertThisInitialized
    }, function (e) {
      o = e.cclegacy, a = e._decorator, r = e.Node, s = e.ScrollView, c = e.Button, u = e.Label, m = e.color, d = e.log
    }, function (e) {
      g = e.AudioEngine
    }, function (e) {
      h = e.gui
    }, function (e) {
      L = e.Utils
    }, function (e) {
      f = e.gameMgr
    }, function (e) {
      b = e.gi
    }, function (e) {
      E = e.UDConstant, v = e.TrackPageViewEvent, p = e.TrackClickEvent, _ = e.TrackClickName
    }, function (e) {
      y = e.UDEvent
    }, function (e) {
      C = e.UDUtils
    }, function (e) {
      M = e.reportMgr
    }, function (e) {
      S = e.IRSListView
    }, function (e) {
      D = e.ListViewDir
    }, function (e) {
      T = e.sprintf_g, k = e.gutil_char, V = e.PRIORITY
    }, function (e) {
      w = e.UIBase
    }],
    execute: function () {
      var I, U, O, B, N, A, P, R, G, x, z, j, H, F, W, q;
      o._RF.push({}, "f60ebj5fZ9PhIcDIo81F1yS", "lyUpDownSelectLevel", void 0);
      var Y = a.ccclass,
        Z = a.property,
        J = a.menu;
      e("lyUpDownSelectLevel", (I = Y("lyUpDownSelectLevel"), U = J("abUpDown/lyUpDownSelectLevel"), O = Z(r), B = Z(r), N = Z(r), A = Z(s), P = Z(r), R = Z(r), I(G = U((z = t((x = function (e) {
        function t() {
          for (var t, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
          return t = e.call.apply(e, [this].concat(o)) || this, l(t, "root", z, n(t)), l(t, "btnModelMultiple", j, n(t)), l(t, "btnModelSingle", H, n(t)), l(t, "scrollView", F, n(t)), l(t, "scrollContent", W, n(t)), l(t, "cloneNode", q, n(t)), t.scrollList = null, t.udgmgr = null, t.dataList = [], t.curMoney = 0, t.curChooseRoomTab = E.Model.Multiple, t
        }
        i(t, e);
        var o = t.prototype;
        return o.onLoad = function () {
          this.udgmgr = f.get(), this.dataList = [], this.cloneNode.active = !1, this.udgmgr.Desk.isMultipleModel() ? this.chooseTabOnly(this.btnModelMultiple) : this.chooseTabOnly(this.btnModelSingle), this.scrollList = new S({
            scrollview: this.scrollView,
            content: this.scrollContent,
            item_tpl: this.cloneNode,
            cb_host: this,
            gap_y: 0,
            direction: D.Vertical,
            effect: !0,
            item_setter: this.updateOneItem
          }), this.on([y.LEVEL_CONFIG_UPDATE, y.GAME_WILL_SWITCH, b.LayerStackEvent.UI_CLOSE, b.AlertStackEvent.ALERT_CLOSE]), f.requestGameConfig(this.udgmgr.Desk.GameID), M.trackView(v.SELECT_LEVEL)
        }, o.start = function () {
          this.emit("force-mask", {
            value: !1,
            tag: "GUI"
          })
        }, o.chooseTabOnly = function (e) {
          var t = this.btnModelMultiple.getChildByName("default"),
            i = this.btnModelMultiple.getChildByName("choose"),
            l = this.btnModelSingle.getChildByName("default"),
            n = this.btnModelSingle.getChildByName("choose");
          e == this.btnModelMultiple ? (this.curChooseRoomTab = E.Model.Multiple, t.active = !1, i.active = !0, this.btnModelMultiple.getComponent(c).interactable = !1, l.active = !0, n.active = !1, this.btnModelSingle.getComponent(c).interactable = !0) : (this.curChooseRoomTab = E.Model.Single, t.active = !0, i.active = !1, this.btnModelMultiple.getComponent(c).interactable = !0, l.active = !1, n.active = !0, this.btnModelSingle.getComponent(c).interactable = !1)
        }, o.onEvents = function (e) {
          switch (e) {
            case y.LEVEL_CONFIG_UPDATE:
              this.respUpdate();
              break;
            case y.GAME_WILL_SWITCH:
              h.closeLayer(this.node);
              break;
            case b.LayerStackEvent.UI_CLOSE:
            case b.AlertStackEvent.ALERT_CLOSE:
              h.isTopLayer("lyUpDownSelectLevel") && this.emit("force-mask", {
                value: !1,
                tag: "GUI"
              })
          }
        }, o.respUpdate = function () {
          this.reloadData(), this.updateView(!0, !0)
        }, o.reloadData = function () {
          for (var e = [], t = this.udgmgr.Desk.LevelConfig, i = 0; i < t.length; i++) t[i].room_tab == this.curChooseRoomTab && e.push(t[i]);
          this.dataList = e, this.dataList = L.tableVerify(this.dataList, !0)
        }, o.updateView = function (e, t) {
          void 0 === e && (e = !1), void 0 === t && (t = !1), this.curMoney = L.numValueOf(this.udgmgr.Desk.MySelf.money), this.scrollList.set_data(this.dataList, e, !t)
        }, o.updateOneItem = function (e, t, i) {
          var l = e._UI_;
          t = L.tableVerify(t), l || ((l = {}).defaultBg = e.getChildByName("defaultBg"), l.imgHot = e.getChildByName("imgHot"), l.imgInPos = e.getChildByName("imgInPos"), l.jiantou = e.getChildByName("jiantou"), l.lblLevel = e.getChildByName("lblLevel"), l.lblBet1 = e.getChildByName("lblBet1"), l.lblEntry1 = e.getChildByName("lblEntry1")), e._UI_ = l, e.LevelID = t.level, e.LevelData = t;
          var n = L.numValueOf(t.bet_min),
            o = L.numValueOf(t.bet_max),
            a = n,
            r = o;
          a = n < 0 ? "-∞" : C.getformatMoney(n), r = o < 0 ? "∞" : C.getformatMoney(o);
          var s = L.numValueOf(t.entry_min),
            c = L.numValueOf(t.entry_max),
            d = s;
          d = s < 0 ? "-∞" : C.getformatMoney(s), c < 0 || C.getformatMoney(c);
          var g = l.lblLevel.getComponent(u),
            h = l.lblBet1.getComponent(u);
          g.string = T("ud_select_tab_level", i + 1), h.string = a + " - " + r;
          var f = l.lblEntry1.getComponent(u);
          f.string = d;
          var b = null;
          t.level == this.udgmgr.Desk.CurLevel.level && t.room_tab == this.udgmgr.Desk.CurLevel.room_tab ? (b = m(92, 211, 171, 255), l.imgInPos.active = !0, l.jiantou.active = !1) : (b = m(205, 193, 195, 255), l.imgInPos.active = !1, l.jiantou.active = !0), g.color = b, h.color = b, f.color = b;
          var E = this.curMoney > t.recommend_min && (this.curMoney <= t.recommend_max || -1 === t.recommend_max);
          l.imgHot.active = E, l.defaultBg.active = i % 2 == 0
        }, o.onClickModelMultiple = function (e) {
          g.instance.effect(0, E.Audio.BtnClick), d("点击了切换多人模式：==>"), M.trackClick(v.SELECT_LEVEL, p.SELECT_LEVEL + "_" + _.SELECT_LEVEL_MODE.MULTIPPLE), this.chooseTabOnly(this.btnModelMultiple), this.reloadData(), this.updateView()
        }, o.onClickModelSingle = function (e) {
          g.instance.effect(0, E.Audio.BtnClick), d("点击了切换单人模式：==>"), M.trackClick(v.SELECT_LEVEL, p.SELECT_LEVEL + "_" + _.SELECT_LEVEL_MODE.SINGLE), this.chooseTabOnly(this.btnModelSingle), this.reloadData(), this.updateView()
        }, o.onClickSelectLevel = function (e) {
          var t = e.target,
            i = t.LevelID,
            l = t.LevelData;
          if (i && (l.level != this.udgmgr.Desk.CurLevel.level || l.room_tab != this.udgmgr.Desk.CurLevel.room_tab)) {
            g.instance.effect(0, E.Audio.BtnClick), d("点击了切换场次：==>", this.curChooseRoomTab, i);
            var n = this.udgmgr.Desk.MySelf.money;
            if (-1 != l.entry_min && L.numValueOf(n) < L.numValueOf(l.entry_min)) h.alert({
              title: k("ud_tips"),
              content: k("UPDOWN_GAME_13"),
              enableClose: !0,
              ok: {
                text: k("ud_btn_sure"),
                cb: function () {
                  h.closeAlert("updown")
                }
              }
            }, V.ALERT, "updown");
            else if (-1 != l.entry_max && L.numValueOf(n) > L.numValueOf(l.entry_max)) h.showTips(k("ud_select_money_out_to_max"));
            else {
              var o = this.curChooseRoomTab == E.Model.Multiple ? _.LEVEL.MULTIPPLE_LEVEL : _.LEVEL.SINGLE_LEVEL;
              M.trackClick(v.SELECT_LEVEL, p.SELECT_LEVEL + "_" + o + i, {
                oldLevel: this.udgmgr.Desk.CurLevel.level
              }), this.udgmgr.sendSwitchLevel(i, this.curChooseRoomTab, null, E.SwitchTableType.SelectTable)
            }
          }
        }, o.onClickClose = function (e) {
          h.closeLayer(this.node)
        }, t
      }(w)).prototype, "root", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), j = t(x.prototype, "btnModelMultiple", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), H = t(x.prototype, "btnModelSingle", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), F = t(x.prototype, "scrollView", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), W = t(x.prototype, "scrollContent", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), q = t(x.prototype, "cloneNode", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), G = x)) || G) || G));
      o._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/lyUpDownSelectRoom.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioEngine.ts", "./ge.ts", "./Utils3.ts", "./GameManager.ts", "./UDConstant.ts", "./UDEvent.ts", "./nodeTableRecordOne.ts", "./ReportManager.ts", "./tilelistview.ts", "./listview-base.ts", "./tilenode.ts", "./UIBase.ts"], (function (e) {
  var t, n, i, o, l, r, a, c, s, u, d, b, f, p, m, g, h, v, w, L, T, _, y, D, C, E, I;
  return {
    setters: [function (e) {
      t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, o = e.assertThisInitialized
    }, function (e) {
      l = e.cclegacy, r = e._decorator, a = e.Node, c = e.ScrollView, s = e.Prefab, u = e.instantiate, d = e.Label, b = e.log
    }, function (e) {
      f = e.AudioEngine
    }, function (e) {
      p = e.gui
    }, function (e) {
      m = e.Utils
    }, function (e) {
      g = e.gameMgr
    }, function (e) {
      h = e.UDConstant, v = e.TrackPageViewEvent, w = e.TrackClickEvent, L = e.TrackClickName
    }, function (e) {
      T = e.UDEvent
    }, function (e) {
      _ = e.nodeTableRecordOne
    }, function (e) {
      y = e.reportMgr
    }, function (e) {
      D = e.TileListView
    }, function (e) {
      C = e.ListViewDir
    }, function (e) {
      E = e.TileNode
    }, function (e) {
      I = e.UIBase
    }],
    execute: function () {
      var S, U, k, R, N, A, V, B, M, z, J, O, P, G, W, H;
      l._RF.push({}, "06bffkXwo9DJbAaS+xkl77s", "lyUpDownSelectRoom", void 0);
      var x = r.ccclass,
        F = r.property,
        j = r.menu;
      e("lyUpDownSelectRoom", (S = x("lyUpDownSelectRoom"), U = j("abUpDown/lyUpDownSelectRoom"), k = F(a), R = F(c), N = F(a), A = F(a), V = F(a), B = F(s), S(M = U((J = t((z = function (e) {
        function t() {
          for (var t, n = arguments.length, l = new Array(n), r = 0; r < n; r++) l[r] = arguments[r];
          return t = e.call.apply(e, [this].concat(l)) || this, i(t, "root", J, o(t)), i(t, "scrollView", O, o(t)), i(t, "scrollContent", P, o(t)), i(t, "bottomBg", G, o(t)), i(t, "cloneNode", W, o(t)), i(t, "cloneItemRecord", H, o(t)), t.scrollList = null, t.udgmgr = null, t.dataList = [], t
        }
        n(t, e);
        var l = t.prototype;
        return l.onLoad = function () {
          this.udgmgr = g.get(), this.dataList = [], this.bottomBg.active = !1, this.cloneNode.active = !1, this.scrollList = new D({
            scrollview: this.scrollView,
            content: this.scrollContent,
            item_tpl: this.cloneNode,
            cb_host: this,
            gap_y: 0,
            direction: C.Vertical,
            effect: !0,
            item_setter: this.updateOneItem
          }), this.on([T.TABLE_LIST_UPDATE, T.GAME_WILL_SWITCH]), this.udgmgr.RoundManager.sendGetTableListRequest(h.ChooseTableRecordNum), y.trackView(v.SELECTING_TABLE)
        }, l.onEvents = function (e) {
          var t = arguments.length <= 1 ? void 0 : arguments[1];
          switch (e) {
            case T.TABLE_LIST_UPDATE:
              this.respUpdate(t);
              break;
            case T.GAME_WILL_SWITCH:
              p.closeLayer(this.node)
          }
        }, l.respUpdate = function (e) {
          this.dataList = null == e ? void 0 : e.tableList, this.dataList = m.tableVerify(this.dataList, !0), this.updateView(!0, !0)
        }, l.updateView = function (e, t) {
          void 0 === e && (e = !1), void 0 === t && (t = !1), this.scrollList.set_data(this.dataList, e, !t)
        }, l.updateOneItem = function (e, t, n) {
          var i = e.node,
            o = i._UI_;
          t = m.tableVerify(t), o || ((o = {}).icon = e.link("icon"), o.lblDown = e.link("lblDown"), o.lblSeven = e.link("lblSeven"), o.lblUp = e.link("lblUp"), o.node = e.link("node"), o.btnJoin = e.link("btnJoin"), o.Sprite = o.btnJoin.getChildByName("Sprite")), i._UI_ = o;
          var l = i._AllRecordList_;
          if (!l) {
            l = [];
            for (var r = 0; r < 6; r++)
              for (var a = 0; a < 7; a++) {
                var c = u(this.cloneItemRecord);
                c.active = !0;
                var s = E.creat(c);
                s.parent = o.node, s.setPosition(37 * a - 99, 92.5 - 37 * r), l.push(s.node.getComponent(_))
              }
          }
          i._AllRecordList_ = l, i.TableID = t.table_id, o.btnJoin.TableID = t.table_id;
          var b = new Decimal(t.downWin).div(100),
            f = new Decimal(t.upWin).div(100),
            p = Math.floor(b.toNumber()),
            g = Math.floor(f.toNumber()),
            h = 100 - Number(p) - Number(g);
          o.lblDown.getComponent(d).string = p + "%", o.lblUp.getComponent(d).string = g + "%", o.lblSeven.getComponent(d).string = h + "%";
          var v = m.tableVerify(m.clone(t.winInfoList), !0);
          v.reverse(), l.forEach((function (e, t) {
            var n = e;
            if (v[t]) {
              var i = m.numValueOf(v[t].point1) + m.numValueOf(v[t].point2);
              n.setNum(i, v[t].isDouble, 0 == t)
            } else n.setNum(null)
          }))
        }, l.onClickJoinRoom = function (e) {
          var t = e.target.TableID;
          t && (f.instance.effect(0, h.Audio.BtnClick), b("点击了加入房间：==>", t), this.udgmgr.sendSwitchTable(t, h.SwitchTableType.SelectTable), y.trackClick(v.SELECTING_TABLE, w.SELECT_TABLE + "_" + L.JOIN))
        }, l.onClickClose = function (e) {
          f.instance.effect(0, h.Audio.BtnClick), p.closeLayer(this.node)
        }, t
      }(I)).prototype, "root", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), O = t(z.prototype, "scrollView", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), P = t(z.prototype, "scrollContent", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), G = t(z.prototype, "bottomBg", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), W = t(z.prototype, "cloneNode", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), H = t(z.prototype, "cloneItemRecord", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), M = z)) || M) || M));
      l._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/lyUpDownSelectTable.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./subGameGlobal.ts", "./ge.ts", "./UDConstant.ts", "./GameManager.ts", "./ReportManager.ts", "./UDEvent.ts", "./AudioEngine.ts", "./Utils3.ts", "./custom-general.ts", "./GameCache.ts", "./SubGameCache.ts", "./UDUtils.ts", "./PfDaLuScrollView.ts", "./interface10.ts", "./tilelistview.ts", "./listview-base.ts", "./general.ts", "./UIBase.ts"], (function (e) {
  var t, i, l, n, o, a, s, c, r, u, _, h, v, b, m, d, L, g, f, p, S, T, w, M, y, D, k, E, C, I, V, N, O, U, G;
  return {
    setters: [function (e) {
      t = e.applyDecoratedDescriptor, i = e.inheritsLoose, l = e.initializerDefineProperty, n = e.assertThisInitialized
    }, function (e) {
      o = e.cclegacy, a = e._decorator, s = e.Node, c = e.ScrollView, r = e.SpriteFrame, u = e.Button, _ = e.Sprite, h = e.Label, v = e.log
    }, function (e) {
      b = e.gi
    }, function (e) {
      m = e.gui
    }, function (e) {
      d = e.UDConstant, L = e.TrackClickName
    }, function (e) {
      g = e.gameMgr
    }, function (e) {
      f = e.reportMgr
    }, function (e) {
      p = e.UDEvent
    }, function (e) {
      S = e.AudioEngine
    }, function (e) {
      T = e.Utils
    }, function (e) {
      w = e.nodelink, M = e.grayNodeState
    }, function (e) {
      y = e.GameCache
    }, function (e) {
      D = e.SubGameCache
    }, function (e) {
      k = e.UDUtils
    }, function (e) {
      E = e.PfDaLuScrollView
    }, function (e) {
      C = e.NspDaLu
    }, function (e) {
      I = e.TileListView
    }, function (e) {
      V = e.ListViewDir
    }, function (e) {
      N = e.sprintf_g, O = e.PRIORITY, U = e.gutil_char
    }, function (e) {
      G = e.UIBase
    }],
    execute: function () {
      var A, P, R, z, B, F, W, x, q, H, J, j, Q, Y, K, X, Z, $, ee, te, ie, le;
      o._RF.push({}, "48179yVSl9EYLBhStb3dukk", "lyUpDownSelectTable", void 0);
      var ne = a.ccclass,
        oe = a.menu,
        ae = a.property;
      e("lyUpDownSelectTable", (A = ne("lyUpDownSelectTable"), P = oe("script/lyUpDownSelectTable"), R = ae(s), z = ae(s), B = ae(s), F = ae(c), W = ae(s), x = ae(c), q = ae(s), H = ae([r]), J = ae([r]), A(j = P((Y = t((Q = function (e) {
        function t() {
          for (var t, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
          return t = e.call.apply(e, [this].concat(o)) || this, l(t, "btnClose", Y, n(t)), l(t, "btnModelMultiple", K, n(t)), l(t, "btnModelSingle", X, n(t)), l(t, "levelScrollView", Z, n(t)), l(t, "levelItem", $, n(t)), l(t, "tableScrollView", ee, n(t)), l(t, "tableItem", te, n(t)), l(t, "normalSpfs", ie, n(t)), l(t, "selectSpfs", le, n(t)), t.udgmgr = null, t._levelList = [], t._curMoney = 0, t._curChooseRoomTab = d.Model.Multiple, t._curSelectLevel = 1, t._levelListView = null, t._tableListView = null, t._lastSelectLevelNode = null, t._isFirst = !0, t._isSending = !1, t._clickSec = 3, t._clickEvent = void 0, t._clickType = void 0, t._viewName = void 0, t._labelList = {}, t._countDownTimer = null, t
        }
        i(t, e);
        var o = t.prototype;
        return o.onLoad = function () {
          var e;
          this.on([p.LEVEL_CONFIG_UPDATE, p.GAME_WILL_SWITCH, p.GAME_OVER, b.LayerStackEvent.UI_CLOSE, b.AlertStackEvent.ALERT_CLOSE, b.GameEvent.LEVEL_TABLE_INFO]), this.udgmgr = g.get(), this._levelList = [], this.levelItem.active = !1, this.tableItem.active = !1, this._curChooseRoomTab = (null == (e = this.udgmgr.Desk.CurLevel) ? void 0 : e.room_tab) || d.Model.Multiple, this._curChooseRoomTab == d.Model.Multiple ? this.chooseTabOnly(this.btnModelMultiple) : this.chooseTabOnly(this.btnModelSingle), this.initListView(), g.requestGameConfig(this.udgmgr.Desk.GameID)
        }, o.init = function (e) {
          this._clickEvent = e.clickEvent, this._clickType = e.clickType, this._viewName = e.viewName, f.trackView(e.viewName)
        }, o.initListView = function () {
          this._levelListView = new I({
            scrollview: this.levelScrollView,
            content: this.levelScrollView.content,
            item_tpl: this.levelItem,
            cb_host: this,
            gap_x: 10,
            direction: V.Horizontal,
            effect: !1,
            item_setter: this.onLevelItemSetter
          }), this._tableListView = new I({
            scrollview: this.tableScrollView,
            content: this.tableScrollView.content,
            item_tpl: this.tableItem,
            cb_host: this,
            gap_y: 10,
            direction: V.Vertical,
            effect: !0,
            item_setter: this.onTableItemSetter
          })
        }, o._stopTimer = function () {
          this._countDownTimer && this.stopScheduler(this._countDownTimer), this._countDownTimer = null
        }, o._startTimer = function () {
          var e = this;
          this._countDownTimer = this.addScheduler(1, (function () {
            for (var t in e._labelList) {
              var i = e._labelList[t],
                l = e._tableListView.listItems[t].data;
              l.change_time -= 1, l.change_time > 0 ? i.string = N(1 == l.status ? "UPDOWN_GAME_49" : "UPDOWN_GAME_48", l.change_time) : e.reqTableInfo()
            }
          }))
        }, o.chooseTabOnly = function (e) {
          var t = this.btnModelMultiple.getChildByName("default"),
            i = this.btnModelMultiple.getChildByName("choose"),
            l = this.btnModelSingle.getChildByName("default"),
            n = this.btnModelSingle.getChildByName("choose");
          e == this.btnModelMultiple ? (this._curChooseRoomTab = d.Model.Multiple, t.active = !1, i.active = !0, this.btnModelMultiple.getComponent(u).interactable = !1, l.active = !0, n.active = !1, this.btnModelSingle.getComponent(u).interactable = !0) : (this._curChooseRoomTab = d.Model.Single, t.active = !0, i.active = !1, this.btnModelMultiple.getComponent(u).interactable = !0, l.active = !1, n.active = !0, this.btnModelSingle.getComponent(u).interactable = !1)
        }, o.reqTableInfo = function (e) {
          var t = this;
          if (void 0 === e && (e = !1), !this._isSending || e) {
            this._isSending = !0, this.scheduleOnce((function () {
              t._isSending = !1
            }), 1);
            var i = this._curSelectLevel == this.udgmgr.Desk.CurLevel.level;
            g.requestLevelTableInfo(y.game._get(D.GAME_ID), this._curSelectLevel, d.ChooseTableRecordNum, i ? this.udgmgr.Desk.TableID : null)
          }
        }, o.onLevelItemSetter = function (e, t, i) {
          var l = this,
            n = this._curSelectLevel == t.level,
            o = w("normal", e);
          o.active = !n, o.getComponent(_).spriteFrame = this.normalSpfs[i];
          var a = w("select", e);
          a.active = n, a.getComponent(_).spriteFrame = this.selectSpfs[i], n && (this._lastSelectLevelNode = e), m.onclick(e, (function () {
            if (l._curSelectLevel != t.level) {
              var n = l._curChooseRoomTab == d.Model.Multiple ? L.LEVEL.MULTIPPLE_LEVEL : L.LEVEL.SINGLE_LEVEL;
              f.trackClick(l._viewName, l._clickEvent + "_" + n + (i + 1), {
                oldLevel: l.udgmgr.Desk.CurLevel.level
              }), l._lastSelectLevelNode && (w("normal", l._lastSelectLevelNode).active = !0, w("select", l._lastSelectLevelNode).active = !1), l._curSelectLevel = t.level, l._lastSelectLevelNode = e, o.active = !1, a.active = !0, m.loading({
                ts: l._clickSec,
                block: !0
              }, O.UI), l.scheduleOnce((function () {
                m.loading(!1)
              }), l._clickSec), l.reqTableInfo(!0)
            }
          }))
        }, o.reloadLevelData = function (e, t) {
          var i;
          void 0 === e && (e = !1), void 0 === t && (t = !1);
          for (var l = [], n = this.udgmgr.Desk.LevelConfig, o = 0; o < n.length; o++) n[o].room_tab == this._curChooseRoomTab && l.push(n[o]);
          this._levelList = l, this._levelList = T.tableVerify(this._levelList, !0), this._curSelectLevel = (null == (i = this._levelList[0]) ? void 0 : i.level) || 1;
          var a = 0;
          if (this._isFirst)
            for (var s = 0; s < this._levelList.length; s++)
              if (this._levelList[s].level == this.udgmgr.Desk.CurLevel.level) {
                this._curSelectLevel = this._levelList[s].level, a = s;
                break
              } m.loading({
            ts: this._clickSec,
            block: !0
          }, O.UI), this.scheduleOnce((function () {
            m.loading(!1)
          }), this._clickSec), this.reqTableInfo(!0), this._isFirst = !1, this._curMoney = T.numValueOf(this.udgmgr.Desk.MySelf.money), this._levelListView.set_data(this._levelList, e, !t), this._levelListView.scroll_to(a)
        }, o._getLevelInfo = function () {
          for (var e = 0; e < this._levelList.length; e++)
            if (this._levelList[e].level == this._curSelectLevel) return this._levelList[e]
        }, o._canJoinSelectLevel = function (e, t) {
          var i = this.udgmgr.Desk.MySelf.money;
          return -1 != e.entry_min && T.numValueOf(i) < T.numValueOf(e.entry_min) ? (t && m.showTips(U("UPDOWN_GAME_13")), !1) : !(-1 != e.entry_max && T.numValueOf(i) > T.numValueOf(e.entry_max)) || (t && m.showTips(U("ud_select_money_out_to_max")), !1)
        }, o._getDaLuData = function (e) {
          for (var t = T.clone(e), i = [], l = 0; l < t.length; l++) {
            var n = t[l].win_result,
              o = C.DaLuQuanType.LAN_DA;
            7 == n ? o = C.DaLuQuanType.PING_DA : n > 7 && (o = C.DaLuQuanType.HONG_DA), i.push({
              showNum: n,
              quanType: o
            })
          }
          return i
        }, o.onTableItemSetter = function (e, t, i) {
          var l = this;
          w("lbRoom", e, h).string = "" + t.table_id, w("lbPeople", e, h).string = "" + t.player_num;
          var n = this._getLevelInfo(),
            o = w("lbMin", e, h),
            a = T.numValueOf(n.bet_min),
            s = a;
          s = a < 0 ? "-∞" : k.getformatMoney(a), o.string = N("UPDOWN_GAME_46", s);
          var c = w("lbLimit", e, h),
            r = T.numValueOf(n.entry_max),
            u = r;
          u = r < 0 ? "∞" : k.getformatMoney(r), c.string = N("UPDOWN_GAME_47", u);
          var v = t.table_id == this.udgmgr.Desk.TableID;
          w("node_cur", e).active = v, w("zhezhao", e).active = v;
          var b = w("node_join", e),
            g = this._canJoinSelectLevel(n, !1);
          b.active = !v;
          var p = w("btnJoin", b);
          M(p, !g, !0, !1), p.getComponent(_).grayscale = !g, w("ludantu_text_join", p, _).grayscale = !g, m.onclick(p, (function () {
            if (l._canJoinSelectLevel(n, !0)) {
              l._curSelectLevel == l.udgmgr.Desk.CurLevel.level ? l.udgmgr.sendSwitchTable(t.table_id, d.SwitchTableType.SelectTable) : l.udgmgr.sendSwitchLevel(l._curSelectLevel, l._curChooseRoomTab, t.table_id, d.SwitchTableType.SelectTable);
              var e = l._curChooseRoomTab == d.Model.Multiple ? l._clickType.MULTIPPLE : l._clickType.SINGLE;
              f.trackClick(l._viewName, l._clickEvent + "_" + e + "_" + L.JOIN)
            }
          }), !0), w("node_addCash", e).active = !1; //!isCur && this._curMoney < entry_max;
          var S = w("pfDaLuScrollView", e),
            y = {
              index: t.index,
              isNewToOld: !0,
              winInfo: this._getDaLuData(t.winInfoList)
            },
            D = S.getComponent(E);
          D && D.setData(y, !1);
          var C = w("time", e, h);
          v || this._curChooseRoomTab == d.Model.Single ? C.string = "" : (this._labelList[i] = C, C.string = N(1 == t.status ? "UPDOWN_GAME_49" : "UPDOWN_GAME_48", t.change_time))
        }, o.reloadTableData = function (e) {
          this._stopTimer(), this._labelList = {}, this._tableListView.set_data(e, !0, !1), this._startTimer()
        }, o.onClickModelMultiple = function (e) {
          S.instance.effect(0, d.Audio.BtnClick), v("点击了切换多人模式：==>"), f.trackClick(this._viewName, this._clickEvent + "_" + this._clickType.MULTIPPLE), this.chooseTabOnly(this.btnModelMultiple), this.reloadLevelData()
        }, o.onClickModelSingle = function (e) {
          S.instance.effect(0, d.Audio.BtnClick), v("点击了切换单人模式：==>"), f.trackClick(this._viewName, this._clickEvent + "_" + this._clickType.SINGLE), this.chooseTabOnly(this.btnModelSingle), this.reloadLevelData()
        }, o.onClickClose = function (e) {
          m.closeLayer(this.node)
        }, o.onEvents = function (e) {
          var t;
          switch (e) {
            case p.LEVEL_CONFIG_UPDATE:
              this.reloadLevelData(!0, !0);
              break;
            case p.GAME_WILL_SWITCH:
              m.closeLayer(this.node);
              break;
            case b.GameEvent.LEVEL_TABLE_INFO:
              m.loading(!1);
              var i = (null == (t = arguments.length <= 1 ? void 0 : arguments[1]) ? void 0 : t.tableList) || [];
              this.reloadTableData(i);
              break;
            case p.GAME_OVER:
              this.reqTableInfo(!0)
          }
        }, o.onDisable = function () {
          this._stopTimer(), this._labelList = {}
        }, t
      }(G)).prototype, "btnClose", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), K = t(Q.prototype, "btnModelMultiple", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), X = t(Q.prototype, "btnModelSingle", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Z = t(Q.prototype, "levelScrollView", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), $ = t(Q.prototype, "levelItem", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ee = t(Q.prototype, "tableScrollView", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), te = t(Q.prototype, "tableItem", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ie = t(Q.prototype, "normalSpfs", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), le = t(Q.prototype, "selectSpfs", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), j = Q)) || j) || j));
      o._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/lyUpDownSwitchLoading.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ge.ts", "./GameManager.ts", "./UDEvent.ts", "./UIBase.ts", "./general.ts"], (function (t) {
  var i, n, e, r, o, l, s, a, c, u, g, p, h;
  return {
    setters: [function (t) {
      i = t.applyDecoratedDescriptor, n = t.inheritsLoose, e = t.initializerDefineProperty, r = t.assertThisInitialized
    }, function (t) {
      o = t.cclegacy, l = t._decorator, s = t.Label
    }, function (t) {
      a = t.gui
    }, function (t) {
      c = t.gameMgr
    }, function (t) {
      u = t.UDEvent
    }, function (t) {
      g = t.UIType, p = t.UIBase
    }, function (t) {
      h = t.gutil_char
    }],
    execute: function () {
      var d, f, y, w, _, b;
      o._RF.push({}, "5976f0VqbpDS7jICfUI83cg", "lyUpDownSwitchLoading", void 0);
      var D = l.ccclass,
        I = l.property,
        L = l.menu;
      t("lyUpDownSwitchLoading", (d = D("lyUpDownSwitchLoading"), f = L("abUpDown/lyUpDownSwitchLoading"), y = I(s), d(w = f((b = i((_ = function (t) {
        function i() {
          for (var i, n = arguments.length, o = new Array(n), l = 0; l < n; l++) o[l] = arguments[l];
          return i = t.call.apply(t, [this].concat(o)) || this, e(i, "lblTip", b, r(i)), i._uiType = g.FULLSCREEN, i.udgmgr = null, i
        }
        n(i, t);
        var o = i.prototype;
        return o.onLoad = function () {
          this.udgmgr = c.get(), this.on([u.GAME_SWITCH_FINISH]), this.udgmgr ? 1 == this.udgmgr.Desk.IsChangeLevel ? this.lblTip.string = h("ud_loading_switch_level") : 1 == this.udgmgr.Desk.IsChangeTable ? this.lblTip.string = h("ud_loading_switch_table") : this.lblTip.string = "" : this.lblTip.string = ""
        }, o.onEvents = function (t) {
          switch (t) {
            case u.GAME_SWITCH_FINISH:
              a.closeLayer(this.node)
          }
        }, i
      }(p)).prototype, "lblTip", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), w = _)) || w) || w));
      o._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/nodeBtnItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ge.ts", "./custom-general.ts", "./interface12.ts", "./UIBase.ts"], (function (e) {
  var t, n, r, i, o, a, s, c, u, l, p, f;
  return {
    setters: [function (e) {
      t = e.applyDecoratedDescriptor, n = e.inheritsLoose, r = e.initializerDefineProperty, i = e.assertThisInitialized
    }, function (e) {
      o = e.cclegacy, a = e._decorator, s = e.Sprite, c = e.SpriteFrame, u = e.Vec3
    }, null, function (e) {
      l = e.grayNodeState
    }, function (e) {
      p = e.EOperateBtnType
    }, function (e) {
      f = e.UIBase
    }],
    execute: function () {
      var g, b, d, h, m, y, B, S, I, v, w, x;
      o._RF.push({}, "663cdZptINKkYoq/Gk7wy4O", "nodeBtnItem", void 0);
      var O = a.ccclass,
        D = a.menu,
        U = a.property;
      e("nodeBtnItem", (g = O("nodeBtnItem"), b = D("node/nodeBtnItem"), d = U(s), h = U(s), m = U([c]), y = U([c]), g(B = b((I = t((S = function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
          return t = e.call.apply(e, [this].concat(o)) || this, r(t, "bg", I, i(t)), r(t, "txt", v, i(t)), r(t, "bgSpfs", w, i(t)), r(t, "txtSpfs", x, i(t)), t
        }
        n(t, e);
        var o = t.prototype;
        return o.onLoad = function () {}, o._getBgSpfsIdx = function (e, t) {
          if (t) return 4;
          var n = 0;
          switch (e) {
            case p.UNDO:
            case p.DOUBLE:
              n = 0;
              break;
            case p.AGAIN:
              n = 1;
              break;
            case p.AUTO:
              n = 2;
              break;
            case p.STOP:
              n = 3
          }
          return n
        }, o.showBtn = function (e, t) {
          var n = this._getBgSpfsIdx(e, t);
          if (this.bg.spriteFrame = this.bgSpfs[n], this.txt.spriteFrame = this.txtSpfs[t ? e + 5 : e], l(this.node, t, !0), e == p.DOUBLE) {
            var r = !t;
            this.bg.node.eulerAngles = new u(0, r ? -180 : 0, 0)
          } else if (e == p.UNDO) {
            var i = !!t;
            this.bg.node.eulerAngles = new u(0, i ? -180 : 0, 0)
          }
        }, t
      }(f)).prototype, "bg", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), v = t(S.prototype, "txt", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), w = t(S.prototype, "bgSpfs", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), x = t(S.prototype, "txtSpfs", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), B = S)) || B) || B));
      o._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/nodeChipItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioEngine.ts", "./ge.ts", "./custom-general.ts", "./UDConstant.ts", "./UDEvent.ts", "./UDUtils.ts", "./UIBase.ts"], (function (e) {
  var i, t, n, o, r, l, s, c, a, u, f, p, h, d, m, b, v, C;
  return {
    setters: [function (e) {
      i = e.applyDecoratedDescriptor, t = e.inheritsLoose, n = e.initializerDefineProperty, o = e.assertThisInitialized
    }, function (e) {
      r = e.cclegacy, l = e._decorator, s = e.Sprite, c = e.Label, a = e.SpriteFrame, u = e.sp, f = e.color
    }, function (e) {
      p = e.AudioEngine
    }, function (e) {
      h = e.gui
    }, function (e) {
      d = e.cbs
    }, function (e) {
      m = e.UDConstant
    }, function (e) {
      b = e.UDEvent
    }, function (e) {
      v = e.UDUtils
    }, function (e) {
      C = e.UIBase
    }],
    execute: function () {
      var S, g, y, _, w, k, N, U, D, I, z, A, E, R, B, F, H, L;
      r._RF.push({}, "8ffc9gd40hIyKxiTm9jwTNH", "nodeChipItem", void 0);
      var x = l.ccclass,
        O = l.property,
        P = l.menu,
        T = ["#00ff00", "#4ef1ff", "#00e0ff", "#ffe000", "#00d6ff", "#ffe297", "#ff900d", "#1fff00", "#ff46ff", "#ff4b68"];
      e("nodeChipItem", (S = x("nodeChipItem"), g = P("abUpDown/nodeChipItem"), y = O(s), _ = O(c), w = O(c), k = O([a]), N = O(u.Skeleton), U = O(u.Skeleton), D = O(u.Skeleton), S(I = g((A = i((z = function (e) {
        function i() {
          for (var i, t = arguments.length, r = new Array(t), l = 0; l < t; l++) r[l] = arguments[l];
          return i = e.call.apply(e, [this].concat(r)) || this, n(i, "icon", A, o(i)), n(i, "lbNum1", E, o(i)), n(i, "lbNum2", R, o(i)), n(i, "spfs", B, o(i)), n(i, "spineRotate", F, o(i)), n(i, "spineSelect", H, o(i)), n(i, "spineClick", L, o(i)), i._order = 0, i
        }
        t(i, e);
        var r = i.prototype;
        return r.init = function (e) {
          this.showChip(e), this._addClickEvents()
        }, r.showChip = function (e) {
          this._order = e.index || 0, this.icon.spriteFrame = this.spfs[this._order], this.lbNum1.node.active = this._order <= 4, this.lbNum2.node.active = this._order > 4;
          var i = v.getformatChipNum(e.num);
          this._order > 4 ? (this.lbNum2.string = "" + i, this.lbNum2.color = f(T[this._order])) : (this.lbNum1.string = "" + i, this.lbNum1.color = f(T[this._order]))
        }, r._addClickEvents = function () {
          var e = this;
          h.onclick(this.node, (function () {
            e.spineSelect.node.active || (e.spineClick.node.active = !0, e.spineClick.setAnimation(0, "dachouma_star", !1), e.spineClick.setCompleteListener(d((function () {
              e.spineClick.node.active = !1
            }), e))), e.spineSelect.node.active = !0, p.instance.effect(0, m.Audio.BtnOptionClick), e.emit(b.CHOOSE_CHIP, e._order)
          }), !1)
        }, r.updteSelectState = function (e, i) {
          void 0 === i && (i = !0);
          var t = e ? .75 : .7;
          this.icon.node.setScale(t, t), this.lbNum1.node.setScale(t, t), this.lbNum2.node.setScale(t, t), i ? this.showSelectAnimation(e) : this.showSelectAnimation(!0)
        }, r.showSelectAnimation = function (e, i) {
          void 0 === i && (i = .75), this.spineSelect.node.active = e, this.spineSelect.node.setScale(i, i)
        }, r.playRoateAnimation = function (e) {}, i
      }(C)).prototype, "icon", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), E = i(z.prototype, "lbNum1", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), R = i(z.prototype, "lbNum2", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), B = i(z.prototype, "spfs", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), F = i(z.prototype, "spineRotate", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), H = i(z.prototype, "spineSelect", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), L = i(z.prototype, "spineClick", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), I = z)) || I) || I));
      r._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/nodeCoinFlyItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ge.ts", "./UIBase.ts"], (function (e) {
  var n, t, i, o, r, a, l, s, c;
  return {
    setters: [function (e) {
      n = e.applyDecoratedDescriptor, t = e.inheritsLoose, i = e.initializerDefineProperty, o = e.assertThisInitialized
    }, function (e) {
      r = e.cclegacy, a = e._decorator, l = e.sp, s = e.math
    }, null, function (e) {
      c = e.UIBase
    }],
    execute: function () {
      var p, u, y, d, f, m;
      r._RF.push({}, "7b02eMzGDNJ0KKxF/t2fITZ", "nodeCoinFlyItem", void 0);
      var h = a.ccclass,
        I = a.property,
        v = a.menu;
      e("nodeCoinFlyItem", (p = h("nodeCoinFlyItem"), u = v("abUpDown/nodeCoinFlyItem"), y = I(l.Skeleton), p(d = u((m = n((f = function (e) {
        function n() {
          for (var n, t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
          return n = e.call.apply(e, [this].concat(r)) || this, i(n, "spine", m, o(n)), n
        }
        t(n, e);
        var r = n.prototype;
        return r.onLoad = function () {}, r.playAnimation = function () {
          this.node.active = !0, this.spine.setAnimation(0, "jb" + s.randomRangeInt(2, 5), !0)
        }, n
      }(c)).prototype, "spine", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), d = f)) || d) || d));
      r._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/nodeExtraPayItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./lodash.mjs_cjs=&original=.js", "./ge.ts", "./custom-general.ts", "./UDEvent.ts", "./lodash.js", "./ETw.ts", "./UIBase.ts"], (function (e) {
  var t, n, i, a, o, s, r, l, u, p, c, d, b, h;
  return {
    setters: [function (e) {
      t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
    }, function (e) {
      o = e.cclegacy, s = e._decorator, r = e.Label, l = e.sp, u = e.Node
    }, null, null, function (e) {
      p = e.cbs
    }, function (e) {
      c = e.UDEvent
    }, function (e) {
      d = e.default
    }, function (e) {
      b = e.ETw
    }, function (e) {
      h = e.UIBase
    }],
    execute: function () {
      var f, m, v, y, g, R, w, S, E, I, z, P, _, x, T, j, A, D;
      o._RF.push({}, "cf215247bpGxo1cS+Svjne8", "nodeExtraPayItem", void 0);
      var L = s.ccclass,
        U = s.property,
        N = s.menu;
      e("nodeExtraPayItem", (f = L("nodeExtraPayItem"), m = N("abUpDown/nodeExtraPayItem"), v = U(r), y = U(l.Skeleton), g = U(l.Skeleton), R = U(r), w = U(u), S = U(u), E = U(u), f(I = m((P = t((z = function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
          return t = e.call.apply(e, [this].concat(o)) || this, i(t, "lbRate", P, a(t)), i(t, "spine", _, a(t)), i(t, "spineRotate", x, a(t)), i(t, "lbRate2", T, a(t)), i(t, "node1", j, a(t)), i(t, "node2", A, a(t)), i(t, "nodeSpine", D, a(t)), t
        }
        n(t, e);
        var o = t.prototype;
        return o.onLoad = function () {}, o.initData = function (e) {
          this.lbRate.string = e, this.lbRate2.string = e, this.spine.node.setPosition(0, 135), this.nodeSpine.active = !1
        }, o.runAnimation = function () {
          var e = this;
          this.spine.setToSetupPose(), this.spine.setAnimation(0, "18X", !1), this.spine.setEventListener((function (t, n) {
            !!t.animation && t.animation.name && ("fumo_shijian" == d.get(n, "data.name") && (e.nodeSpine.active = !0))
          })), this.spineRotate.node.active = !1, this.spine.node.active = !0, this.node.active = !0
        }, o.playRotateAnimation = function (e) {
          var t = this;
          b.fadeTo(this.lbRate2.node, 0, 255), this.node.active = !0, this.spine.node.active = !1, this.spineRotate.node.active = !0, this.spineRotate.setToSetupPose(), this.spineRotate.setAnimation(0, "18X_die", !1), this.spineRotate.setCompleteListener(p((function () {
            e && t.emit(c.SHOW_WIN_ANIMATION)
          }), this)), this.spineRotate.setEventListener((function (e, n) {
            var i;
            !!e.animation && e.animation.name && ("wenzi_xiaoshi" == d.get(n, "data.name") && (null == (i = b.fadeTo(t.lbRate2.node, 7 / 60, 255, 0, {
              easing: "smooth"
            })) || i.start()))
          }))
        }, t
      }(h)).prototype, "lbRate", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), _ = t(z.prototype, "spine", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), x = t(z.prototype, "spineRotate", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), T = t(z.prototype, "lbRate2", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), j = t(z.prototype, "node1", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), A = t(z.prototype, "node2", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), D = t(z.prototype, "nodeSpine", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), I = z)) || I) || I));
      o._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/nodeFlyChipItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ge.ts", "./GameManager.ts", "./UDUtils.ts", "./UIBase.ts"], (function (e) {
  var t, i, n, r, l, o, a, s, f, u, c, p, m, b;
  return {
    setters: [function (e) {
      t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, r = e.assertThisInitialized
    }, function (e) {
      l = e.cclegacy, o = e._decorator, a = e.Sprite, s = e.Label, f = e.SpriteFrame, u = e.color, c = e.v3
    }, null, function (e) {
      p = e.gameMgr
    }, function (e) {
      m = e.UDUtils
    }, function (e) {
      b = e.UIBase
    }],
    execute: function () {
      var h, d, y, g, v, N, F, w, C, D, I, U;
      l._RF.push({}, "dd1f7n7ft9L1YWTd4sDWpwu", "nodeFlyChipItem", void 0);
      var z = o.ccclass,
        L = o.property,
        S = o.menu,
        _ = ["#00ff00", "#4ef1ff", "#00e0ff", "#ffe000", "#00d6ff", "#ffe297", "#ff900d", "#1fff00", "#ff46ff", "#ff4b68"];
      e("nodeFlyChipItem", (h = z("nodeFlyChipItem"), d = S("abUpDown/nodeFlyChipItem"), y = L(a), g = L(s), v = L(s), N = L([f]), h(F = d((C = t((w = function (e) {
        function t() {
          for (var t, i = arguments.length, l = new Array(i), o = 0; o < i; o++) l[o] = arguments[o];
          return t = e.call.apply(e, [this].concat(l)) || this, n(t, "icon", C, r(t)), n(t, "lbNum1", D, r(t)), n(t, "lbNum2", I, r(t)), n(t, "spfs", U, r(t)), t
        }
        return i(t, e), t.prototype.showFlyChip = function (e) {
          var t = p.get().Desk.AllChipList.indexOf(e),
            i = t > -1 ? t : 0;
          this.icon.spriteFrame = this.spfs[i], this.lbNum1.node.active = i <= 4, this.lbNum2.node.active = i > 4;
          var n = m.getformatChipNum(e);
          i > 4 ? (this.lbNum2.string = "" + n, this.lbNum2.color = u(_[i])) : (this.lbNum1.string = "" + n, this.lbNum1.color = u(_[i])), this.node.setScale(c(1, 1, 1)), this.node.active = !0
        }, t
      }(b)).prototype, "icon", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), D = t(w.prototype, "lbNum1", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), I = t(w.prototype, "lbNum2", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), U = t(w.prototype, "spfs", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), F = w)) || F) || F));
      l._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/nodeGuestHead.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ge.ts", "./GPRoundBoxSprite.ts", "./Cache.ts", "./Utils3.ts", "./custom-general.ts", "./UDUtils.ts", "./ETw.ts", "./UIBase.ts"], (function (t) {
  var e, i, n, r, a, o, l, s, u, c, p, h, d, f, b, g, m, y, v, S, w, D, I, k, _, L;
  return {
    setters: [function (t) {
      e = t.applyDecoratedDescriptor, i = t.inheritsLoose, n = t.initializerDefineProperty, r = t.assertThisInitialized, a = t.createClass
    }, function (t) {
      o = t.cclegacy, l = t._decorator, s = t.Label, u = t.Node, c = t.sp, p = t.Sprite, h = t.SpriteFrame, d = t.color, f = t.UITransform, b = t.Tween, g = t.tween, m = t.Vec3
    }, function (t) {
      y = t.gatlas
    }, function (t) {
      v = t.GPRoundBoxSprite
    }, function (t) {
      S = t.Cache
    }, function (t) {
      w = t.Utils
    }, function (t) {
      D = t.formatWithCommas, I = t.cbs
    }, function (t) {
      k = t.UDUtils
    }, function (t) {
      _ = t.ETw
    }, function (t) {
      L = t.UIBase
    }],
    execute: function () {
      var H, z, A, U, R, F, x, M, N, B, C, T, G, P, E, O, V, X, j, q, W, Z, J, K, Q, Y, $, tt, et, it, nt, rt, at, ot;
      o._RF.push({}, "7c20bzHFX5FqZXbu27Xwy6q", "nodeGuestHead", void 0);
      var lt = l.ccclass,
        st = l.property,
        ut = l.menu;
      t("nodeGuestHead", (H = lt("nodeGuestHead"), z = ut("abUpDown/nodeGuestHead"), A = st({
        type: v,
        tooltip: "头像"
      }), U = st({
        type: s,
        tooltip: "昵称"
      }), R = st({
        type: u,
        tooltip: "icon_bet"
      }), F = st({
        type: s,
        tooltip: "money"
      }), x = st({
        type: s,
        tooltip: "currency"
      }), M = st({
        type: u,
        tooltip: "赢钱"
      }), N = st({
        type: u,
        tooltip: "默认info的背景"
      }), B = st({
        type: u,
        tooltip: "我的背景"
      }), C = st({
        type: u,
        tooltip: "选中框"
      }), T = st({
        type: u,
        tooltip: "飘分"
      }), G = st({
        type: c.Skeleton,
        tooltip: "上榜动画"
      }), P = st({
        type: p,
        tooltip: "头像框底图"
      }), E = st([h]), O = st(c.Skeleton), V = st(s), H(X = z((q = e((j = function (t) {
        function e() {
          for (var e, i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
          return e = t.call.apply(t, [this].concat(a)) || this, n(e, "sprHead", q, r(e)), n(e, "lblName", W, r(e)), n(e, "icon_bet", Z, r(e)), n(e, "lblMoney", J, r(e)), n(e, "lblCurrency", K, r(e)), n(e, "nodeMoney", Q, r(e)), n(e, "bg_default", Y, r(e)), n(e, "bg_my", $, r(e)), n(e, "select", tt, r(e)), n(e, "nodeAddAnim", et, r(e)), n(e, "skelRankIn", it, r(e)), n(e, "frame", nt, r(e)), n(e, "frameSpfs", rt, r(e)), n(e, "spineLight", at, r(e)), n(e, "lbSocre", ot, r(e)), e.isOnLoad = !1, e.curData = null, e.uid = null, e.seatIndex = -1, e
        }
        i(e, t);
        var o = e.prototype;
        return o.onLoad = function () {
          this.isOnLoad = !0, this.curData ? (this.initView(!0), this.refreshByData(this.curData)) : this.initView(), this.spineLight.node.active = !1
        }, o.initView = function (t) {
          void 0 === t && (t = !1), 0 == t && (this.curData = null), this.isOnLoad && (this.node.active = !0, this.seatIndex = -1, this.uid = null, this.lblMoney.string = "", this.lblName.string = "", this.icon_bet.active = !1, this.sprHead.node.url = null, this.sprHead.spriteFrame = null, this.select.active = !1, this.bg_my.active = !1, this.bg_default.active = !1, this.skelRankIn.node.active = !1, this.frame.spriteFrame = this.frameSpfs[0])
        }, o.refreshByData = function (t) {
          this.isOnLoad ? (this.curData = t, this.UID = this.curData.uid, this.SeatIndex = this.curData.seatIndex, this.updateMoney(this.curData.totalWin), this.updateNickName(this.curData.nick), this.updateHead(this.curData.avatar)) : this.curData = t
        }, o.getSelectStatus = function () {
          return this.select.active
        }, o.setSelectStatus = function (t) {
          this.select.active = t
        }, o.updateInRank = function (t) {
          this.frame.spriteFrame = this.frameSpfs[1], t ? (this.bg_my.active = !0, this.bg_default.active = !1) : (this.bg_my.active = !1, this.bg_default.active = !!this.UID)
        }, o.updateMoney = function (t) {
          void 0 === t && (t = 0), this.lblMoney.string = "+" + k.getformatBetMoney(t, !0)
        }, o.updateNickName = function (t) {
          void 0 === t && (t = "");
          var e = "",
            i = d("#F2DEDE");
          this.UID === S.User.getUID() ? (e = w.stringSubString(t, 9), i = d("#00FF00")) : e = t.length <= 4 ? t : "*" + t.substring(t.length - 4, t.length), this.lblName.string = e, this.lblName.color = i
        }, o.updateHead = function (t) {
          if (this.sprHead.url != String(t)) {
            if (this.sprHead.node.url = String(t), this.sprHead.spriteFrame = null, this.sprHead.node.url = null, !t || 0 == t.length) return;
            String(t).toLocaleLowerCase().includes("http") ? this.loadRemoteSprite(this.sprHead, t) : this.sprHead.spriteFrame = y.get("userIcon", "touxiang_" + t)
          }
        }, o.getInRanAniNodeActive = function () {
          return this.skelRankIn.node.active
        }, o.updaeInRanAniShow = function (t, e) {
          void 0 === e && (e = 0), this.skelRankIn.node.active = t, 1 == t && (e >= 5 || e >= 3) && this.skelRankIn.setAnimation(0, "touxiang_huo", !0)
        }, o.playPiaoFeng = function (t) {
          this.nodeAddAnim.active = !0, this.lbSocre.string = "+" + D(t, 0), this.lbSocre.updateRenderData(!0);
          var e = this.lbSocre.getComponent(f).width,
            i = Math.max(-60, -e / 2);
          this.lbSocre.node.setPosition(i, -30), _.fadeTo(this.nodeAddAnim, 0, 255), _.fadeTo(this.nodeAddAnim, .5, 255, 0, 2).start(), b.stopAllByTarget(this.lbSocre.node), g(this.lbSocre.node).to(1, {
            position: new m(i, 30, 0)
          }).start()
        }, o.playSpineLight = function () {
          var t = this;
          this.spineLight.node.active = !0, this.spineLight.setToSetupPose(), this.spineLight.setAnimation(0, "jinbi_feidao", !1), this.spineLight.setCompleteListener(I((function () {
            t.spineLight.node.active = !1
          }), this))
        }, a(e, [{
          key: "SeatIndex",
          get: function () {
            return this.seatIndex
          },
          set: function (t) {
            this.seatIndex = t
          }
        }, {
          key: "UID",
          get: function () {
            return this.uid
          },
          set: function (t) {
            this.uid = t
          }
        }]), e
      }(L)).prototype, "sprHead", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), W = e(j.prototype, "lblName", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Z = e(j.prototype, "icon_bet", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), J = e(j.prototype, "lblMoney", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), K = e(j.prototype, "lblCurrency", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Q = e(j.prototype, "nodeMoney", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Y = e(j.prototype, "bg_default", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), $ = e(j.prototype, "bg_my", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), tt = e(j.prototype, "select", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), et = e(j.prototype, "nodeAddAnim", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), it = e(j.prototype, "skelRankIn", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), nt = e(j.prototype, "frame", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), rt = e(j.prototype, "frameSpfs", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), at = e(j.prototype, "spineLight", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), ot = e(j.prototype, "lbSocre", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), X = j)) || X) || X));
      o._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/nodeSmallChipItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ge.ts", "./custom-general.ts", "./GameManager.ts", "./interface12.ts", "./UDUtils.ts", "./UIBase.ts"], (function (e) {
  var t, i, n, r, o, s, a, l, f, c, p, u, h, m, b, d;
  return {
    setters: [function (e) {
      t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, r = e.assertThisInitialized
    }, function (e) {
      o = e.cclegacy, s = e._decorator, a = e.Sprite, l = e.Label, f = e.sp, c = e.SpriteFrame, p = e.color
    }, null, function (e) {
      u = e.cbs
    }, function (e) {
      h = e.gameMgr
    }, function (e) {
      m = e.EFlyChipPlayerType
    }, function (e) {
      b = e.UDUtils
    }, function (e) {
      d = e.UIBase
    }],
    execute: function () {
      var g, v, y, S, I, C, U, _, w, D, L, N;
      o._RF.push({}, "d5820nh0xdHtZhYOngWs3qG", "nodeSmallChipItem", void 0);
      var x = s.ccclass,
        z = s.property,
        F = s.menu,
        T = ["#8bed11", "#7cfff7", "#99d9fe", "#ff9a41", "#3bb8ff", "#fff692", "#ee962e", "#3bec32", "#e594ff", "#ff4f2c", "#ffffff"];
      e("nodeSmallChipItem", (g = x("nodeSmallChipItem"), v = F("abUpDown/nodeSmallChipItem"), y = z(a), S = z(l), I = z(f.Skeleton), C = z([c]), g(U = v((w = t((_ = function (e) {
        function t() {
          for (var t, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
          return t = e.call.apply(e, [this].concat(o)) || this, n(t, "icon", w, r(t)), n(t, "lbNum", D, r(t)), n(t, "spine", L, r(t)), n(t, "spfs", N, r(t)), t
        }
        i(t, e);
        var o = t.prototype;
        return o.onLoad = function () {}, o.showItem = function (e, t, i) {
          void 0 === i && (i = !1);
          var n = t == m.GUEST ? 6 : this._getIdx(e);
          this.icon.spriteFrame = this.spfs[n], this.refreshChipNum(e, t, i), this.node.active = !0
        }, o.refreshChipNum = function (e, t, i) {
          var n = this,
            r = t == m.GUEST ? 10 : this._getIdx(e),
            o = b.getformatChipNum(e, 2);
          this.lbNum.string = "" + o, this.lbNum.color = p(T[r]), t != m.SELF || i ? this.spine.node.active = !1 : (this.spine.node.active = !0, this.spine.setToSetupPose(), this.spine.setAnimation(0, "dachouma_xiaoshi", !1), this.spine.setCompleteListener(u((function () {
            n.spine.node.active = !0
          }), this)))
        }, o._getIdx = function (e) {
          for (var t = 0, i = h.get().Desk.AllChipList, n = i.length - 1; n >= 0; n--)
            if (e >= i[n]) {
              t = n;
              break
            } return t
        }, t
      }(d)).prototype, "icon", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), D = t(_.prototype, "lbNum", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), L = t(_.prototype, "spine", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), N = t(_.prototype, "spfs", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), U = _)) || U) || U));
      o._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/nodeTableRecordOne.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function (e) {
  var t, i, n, r, a, u, l, o, s, c, p;
  return {
    setters: [function (e) {
      t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, r = e.assertThisInitialized
    }, function (e) {
      a = e.cclegacy, u = e._decorator, l = e.Node, o = e.Sprite, s = e.Label, c = e.SpriteFrame, p = e.Component
    }],
    execute: function () {
      var b, d, f, h, g, m, v, y, D, w, R, z, O, L, k, F, N, T, B, _;
      a._RF.push({}, "fc303EZyQRHW6lFsFvbXIXK", "nodeTableRecordOne", void 0);
      var G = u.ccclass,
        S = u.property,
        H = u.menu;
      e("nodeTableRecordOne", (b = G("nodeTableRecordOne"), d = H("abUpDown/nodeTableRecordOne"), f = S(l), h = S(o), g = S(l), m = S(s), v = S(l), y = S(c), D = S(c), w = S(c), b(R = d((O = t((z = function (e) {
        function t() {
          for (var t, i = arguments.length, a = new Array(i), u = 0; u < i; u++) a[u] = arguments[u];
          return t = e.call.apply(e, [this].concat(a)) || this, n(t, "default", O, r(t)), n(t, "bg", L, r(t)), n(t, "star", k, r(t)), n(t, "num", F, r(t)), n(t, "kuang", N, r(t)), n(t, "sprBlue", T, r(t)), n(t, "sprGreen", B, r(t)), n(t, "sprRed", _, r(t)), t.isOnLoad = !1, t.curData = null, t
        }
        i(t, e);
        var a = t.prototype;
        return a.onLoad = function () {
          this.isOnLoad = !0, this.curData && this.setNum(this.curData.num, this.curData.isDouble, this.curData.isNew)
        }, a.setNum = function (e, t, i) {
          if (void 0 === e && (e = null), void 0 === t && (t = !1), void 0 === i && (i = !1), this.curData = {
              num: e,
              isDouble: t,
              isNew: i
            }, this.isOnLoad) {
            if (null == e) return this.default.active = !0, this.bg.node.active = !1, this.star.active = !1, this.num.node.active = !1, this.kuang.active = !1, void(this.curData = null);
            this.default.active = !1, this.bg.node.active = !0, this.num.node.active = !0, this.kuang.active = !0, e = Number(e), this.num.string = "" + e, this.star.active = t, this.kuang.active = i, this.bg.spriteFrame = e < 7 ? this.sprBlue : 7 == e ? this.sprGreen : this.sprRed
          }
        }, t
      }(p)).prototype, "default", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), L = t(z.prototype, "bg", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), k = t(z.prototype, "star", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), F = t(z.prototype, "num", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), N = t(z.prototype, "kuang", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), T = t(z.prototype, "sprBlue", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), B = t(z.prototype, "sprGreen", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), _ = t(z.prototype, "sprRed", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), R = z)) || R) || R));
      a._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/nodeTableRound.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ge.ts", "./Utils3.ts", "./GameManager.ts", "./UDConstant.ts", "./UIBase.ts"], (function (e) {
  var i, t, n, r, a, s, o, l, u, c, p, h, b, f, d;
  return {
    setters: [function (e) {
      i = e.applyDecoratedDescriptor, t = e.inheritsLoose, n = e.initializerDefineProperty, r = e.assertThisInitialized
    }, function (e) {
      a = e.cclegacy, s = e._decorator, o = e.Sprite, l = e.Node, u = e.Label, c = e.SpriteFrame, p = e.sp
    }, null, function (e) {
      h = e.Utils
    }, function (e) {
      b = e.gameMgr
    }, function (e) {
      f = e.UDConstant
    }, function (e) {
      d = e.UIBase
    }],
    execute: function () {
      var v, m, D, g, y, P, w, F, O, z, S, _, L, R, G, U, A, B, T, M, k, N, V, C, E, I, x, j, H, X, Y, Z;
      a._RF.push({}, "001d4GYcXhOmbxrhVEisMiZ", "nodeTableRound", void 0);
      var q = s.ccclass,
        J = s.property,
        K = s.menu;
      e("nodeTableRound", (v = q("nodeTableRound"), m = K("abUpDown/nodeTableRound"), D = J(o), g = J(l), y = J(u), P = J(l), w = J(l), F = J(o), O = J(o), z = J(l), S = J([c]), _ = J(c), L = J(c), R = J(c), G = J(p.Skeleton), U = J(p.Skeleton), v(A = m((T = i((B = function (e) {
        function i() {
          for (var i, t = arguments.length, a = new Array(t), s = 0; s < t; s++) a[s] = arguments[s];
          return i = e.call.apply(e, [this].concat(a)) || this, n(i, "bg", T, r(i)), n(i, "star", M, r(i)), n(i, "lblNum", k, r(i)), n(i, "pointDice1_On", N, r(i)), n(i, "pointDice2_On", V, r(i)), n(i, "sprPointDice1", C, r(i)), n(i, "sprPointDice2", E, r(i)), n(i, "choose", I, r(i)), n(i, "sprPointList", x, r(i)), n(i, "sprBlue", j, r(i)), n(i, "sprGreen", H, r(i)), n(i, "sprRed", X, r(i)), n(i, "spineFrame", Y, r(i)), n(i, "spineStar", Z, r(i)), i.isOnload = !1, i.saveData = null, i.curData = [], i.handlerShowAni = null, i
        }
        t(i, e);
        var a = i.prototype;
        return a.onLoad = function () {
          this.isOnload = !0, null != this.saveData && (this.setPoint(this.saveData[0], this.saveData[1], this.saveData[2], this.saveData[3], this.saveData[4]), this.saveData = null)
        }, a.setPoint = function (e, i, t, n, r) {
          var a = this;
          if (void 0 === e && (e = null), void 0 === i && (i = null), void 0 === t && (t = !1), void 0 === n && (n = !1), void 0 === r && (r = -1), this.isOnload) {
            this.curData = [e, i, t, n, r], null != e && this.sprPointList[e - 1] ? (this.sprPointDice1.spriteFrame = this.sprPointList[e - 1], this.sprPointDice1.node.active = !0) : this.sprPointDice1.node.active = !1, null != i && this.sprPointList[i - 1] ? (this.sprPointDice2.spriteFrame = this.sprPointList[i - 1], this.sprPointDice2.node.active = !0) : this.sprPointDice2.node.active = !1;
            var s = h.numValueOf(e) + h.numValueOf(i);
            if (this.lblNum.string = s, this.bg.spriteFrame = s < 7 ? this.sprBlue : 7 == s ? this.sprGreen : this.sprRed, this.star.active = t, n) {
              if (b.get().Desk.gameStatus == f.ServerGameState.GAMEOVER) {
                if (0 == this.spineFrame.node.active) {
                  this.stopSchedulerOnce(this.handlerShowAni), this.handlerShowAni = null, this.spineFrame.node.active = !0, this.choose.active = !1, this.spineFrame.isPlay = !0;
                  var o = this;
                  this.handlerShowAni = this.addSchedulerOnce(4, (function () {
                    a.choose.active = 1 == o.curData[3] && 1 == a.node.active, a.spineFrame.node.active = !1, a.spineFrame.isPlay = !1
                  }))
                }
              } else this.spineFrame.isPlay ? (this.choose.active = !1, this.spineFrame.node.active = !0) : (this.choose.active = !0, this.spineFrame.node.active = !1);
              this.pointDice1_On.active = !0, this.pointDice2_On.active = !0
            } else this.spineFrame.setCompleteListener(null), this.spineFrame.node.active = !1, this.spineFrame.isPlay = !1, this.choose.active = !1, this.pointDice1_On.active = !1, this.pointDice2_On.active = !1
          } else this.saveData = [e, i, t, n, r]
        }, i
      }(d)).prototype, "bg", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), M = i(B.prototype, "star", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), k = i(B.prototype, "lblNum", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), N = i(B.prototype, "pointDice1_On", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), V = i(B.prototype, "pointDice2_On", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), C = i(B.prototype, "sprPointDice1", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), E = i(B.prototype, "sprPointDice2", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), I = i(B.prototype, "choose", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), x = i(B.prototype, "sprPointList", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), j = i(B.prototype, "sprBlue", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), H = i(B.prototype, "sprGreen", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), X = i(B.prototype, "sprRed", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Y = i(B.prototype, "spineFrame", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Z = i(B.prototype, "spineStar", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), A = B)) || A) || A));
      a._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/nodeWinAnimation.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ge.ts", "./UIBase.ts"], (function (i) {
  var n, e, t, o, s, a, r, l, p;
  return {
    setters: [function (i) {
      n = i.applyDecoratedDescriptor, e = i.inheritsLoose, t = i.initializerDefineProperty, o = i.assertThisInitialized
    }, function (i) {
      s = i.cclegacy, a = i._decorator, r = i.sp, l = i.log
    }, null, function (i) {
      p = i.UIBase
    }],
    execute: function () {
      var u, c, h, m, b, g, f, y, d, A, S, W;
      s._RF.push({}, "73ae4bnnSFLaJejBrWmUMe1", "nodeWinAnimation", void 0);
      var w = a.ccclass,
        T = a.property,
        v = a.menu;
      i("nodeWinAnimation", (u = w("nodeWinAnimation"), c = v("abUpDown/nodeWinAnimation"), h = T(r.Skeleton), m = T(r.Skeleton), b = T(r.Skeleton), g = T(r.Skeleton), u(f = c((d = n((y = function (i) {
        function n() {
          for (var n, e = arguments.length, s = new Array(e), a = 0; a < e; a++) s[a] = arguments[a];
          return n = i.call.apply(i, [this].concat(s)) || this, t(n, "spineWin", d, o(n)), t(n, "spineCoin", A, o(n)), t(n, "spineLight", S, o(n)), t(n, "spineTop", W, o(n)), n
        }
        return e(n, i), n.prototype.playAnimation = function (i, n) {
          var e = "win",
            t = 0 == n || 1 == n ? 1.2 : 1;
          i >= 20 ? (e = "bigwin", t = 0 == n || 1 == n ? 1 : .5) : i >= 10 && (e = "win_little", t = 0 == n || 1 == n ? 1.2 : 1), l("nodeWinAnimation => playAnimation aniName is : ", e), this.spineWin.setToSetupPose(), this.spineWin.setAnimation(0, e, !1), this.spineCoin.setToSetupPose(), this.spineCoin.setAnimation(0, "jinbi", !1), this.spineLight.setToSetupPose(), this.spineLight.setAnimation(0, e, !1), this.spineTop.setToSetupPose(), this.spineTop.setAnimation(0, "baokai", !1), this.node.setScale(t, t), this.node.active = !0
        }, n
      }(p)).prototype, "spineWin", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), A = n(y.prototype, "spineCoin", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), S = n(y.prototype, "spineLight", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), W = n(y.prototype, "spineTop", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), f = y)) || f) || f));
      s._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/pfBaseLayer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ge.ts", "./GameManager.ts", "./UDConstant.ts", "./UDEvent.ts", "./general.ts", "./UIBase.ts"], (function (e) {
  var t, n, i, a, r, u, o, l, s, c, _, p, f;
  return {
    setters: [function (e) {
      t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
    }, function (e) {
      r = e.cclegacy, u = e._decorator, o = e.Node, l = e.Label
    }, null, function (e) {
      s = e.gameMgr
    }, function (e) {
      c = e.UDConstant
    }, function (e) {
      _ = e.UDEvent
    }, function (e) {
      p = e.sprintf_g
    }, function (e) {
      f = e.UIBase
    }],
    execute: function () {
      var b, T, g, D, I, h, E, d, O, A, U, y, C, v;
      r._RF.push({}, "6ab75zqg7JFrYTldcLTfYQt", "pfBaseLayer", void 0);
      var L = u.ccclass,
        N = u.property,
        S = u.menu;
      e("pfBaseLayer", (b = L("pfBaseLayer"), T = S("abUpDown/pfBaseLayer"), g = N(o), D = N(l), I = N(o), h = N(o), E = N(o), b(d = T((A = t((O = function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), u = 0; u < n; u++) r[u] = arguments[u];
          return t = e.call.apply(e, [this].concat(r)) || this, i(t, "table", A, a(t)), i(t, "lblTableID", U, a(t)), i(t, "nodeDice", y, a(t)), i(t, "liuguang", C, a(t)), i(t, "shaoguang", v, a(t)), t
        }
        n(t, e);
        var r = t.prototype;
        return r.onLoad = function () {
          this.table.active = !0, this.initView(), this.on([_.VIEW_INIT_UI, _.GAME_ROUND_INIT, _.VIEW_TABLE_INFO_UPDATE, _.BET_COUNT_DOWN_START, _.GAME_TOAST_CLOCK_UPDATE, _.GAME_TOAST_CLOCK_STOP, _.DICE_CUP_END])
        }, r._updateSpine = function (e) {
          this.liuguang.active = e, this.shaoguang.active = e
        }, r.start = function () {}, r.onEvents = function (e) {
          var t = arguments.length <= 1 ? void 0 : arguments[1];
          switch (e) {
            case _.VIEW_INIT_UI:
              this.initView();
              break;
            case _.GAME_ROUND_INIT:
              this.initOneRound();
              break;
            case _.VIEW_TABLE_INFO_UPDATE:
              this.updateTableInfo();
              break;
            case _.BET_COUNT_DOWN_START:
              this._updateSpine(!1);
              break;
            case _.GAME_TOAST_CLOCK_UPDATE:
              t == c.CountDown.BetStart && this._updateSpine(!1);
              break;
            case _.GAME_TOAST_CLOCK_STOP:
              break;
            case _.DICE_CUP_END:
              this._updateSpine(!0)
          }
        }, r.initView = function () {
          this.lblTableID.string = ""
        }, r.initOneRound = function () {
          this.updateTableInfo()
        }, r.updateTableInfo = function () {
          var e = s.get().Desk.CurRoundNum;
          this.lblTableID.string = p("ud_table_id", e)
        }, r.updateView = function () {}, t
      }(f)).prototype, "table", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), U = t(O.prototype, "lblTableID", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), y = t(O.prototype, "nodeDice", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), C = t(O.prototype, "liuguang", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), v = t(O.prototype, "shaoguang", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), d = O)) || d) || d));
      r._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/pfBtnLayer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioEngine.ts", "./ge.ts", "./UDConstant.ts", "./UDEvent.ts", "./ReportManager.ts", "./UIBase.ts"], (function (n) {
  var t, e, i, o, r, c, a, u, s, l, f, p, y, I, _, b;
  return {
    setters: [function (n) {
      t = n.applyDecoratedDescriptor, e = n.inheritsLoose, i = n.initializerDefineProperty, o = n.assertThisInitialized
    }, function (n) {
      r = n.cclegacy, c = n._decorator, a = n.Node
    }, function (n) {
      u = n.AudioEngine
    }, function (n) {
      s = n.gui
    }, function (n) {
      l = n.UDConstant, f = n.TrackPageViewEvent, p = n.TrackClickEvent, y = n.TrackClickName
    }, function (n) {
      I = n.UDEvent
    }, function (n) {
      _ = n.reportMgr
    }, function (n) {
      b = n.UIBase
    }],
    execute: function () {
      var k, N, d, h, v, M, g, E;
      r._RF.push({}, "36b3aKAF5tLQZL/BtCHMFWt", "pfBtnLayer", void 0);
      var B = c.ccclass,
        T = c.property,
        U = c.menu;
      n("pfBtnLayer", (k = B("pfBtnLayer"), N = U("abUpDown/pfBtnLayer"), d = T(a), h = T(a), k(v = N((g = t((M = function (n) {
        function t() {
          for (var t, e = arguments.length, r = new Array(e), c = 0; c < e; c++) r[c] = arguments[c];
          return t = n.call.apply(n, [this].concat(r)) || this, i(t, "btnMenu", g, o(t)), i(t, "btnHistory", E, o(t)), t
        }
        e(t, n);
        var r = t.prototype;
        return r.onLoad = function () {
          this.node.active = !0, this.initView(), this.on([I.VIEW_INIT_UI, I.GAME_ROUND_INIT])
        }, r.start = function () {}, r.onEvents = function (n) {
          switch (n) {
            case I.VIEW_INIT_UI:
              this.initView();
              break;
            case I.GAME_ROUND_INIT:
              this.initOneRound()
          }
        }, r.initView = function () {
          this.btnMenu.active = !0, this.btnHistory.active = !1
        }, r.initOneRound = function () {
          this.btnHistory.active = !0
        }, r.onClickMenu = function (n) {
          u.instance.effect(0, l.Audio.BtnClick), s.openBundleLayer(l.Package, "lyUpDownMenu"), _.trackClick(f.MAIN, p.MAIN_SETTING + "_" + y.BTN_MENU)
        }, r.onClickHistory = function (n) {
          u.instance.effect(0, l.Audio.BtnClick), s.openBundleLayer(l.Package, "lyUpDownHistory"), _.trackClick(f.MAIN, p.MAIN_HISTORY + "_" + y.HISTORY_ENTRANCE + 1)
        }, t
      }(b)).prototype, "btnMenu", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), E = t(M.prototype, "btnHistory", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), v = M)) || v) || v));
      r._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/pfChipsLayer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioEngine.ts", "./ge.ts", "./custom-general.ts", "./Utils3.ts", "./GameManager.ts", "./interface12.ts", "./UDConstant.ts", "./UDEvent.ts", "./UDUtils.ts", "./nodeSmallChipItem.ts", "./ReportManager.ts", "./tilenode.ts", "./SchedulerManager.ts", "./UIBase.ts"], (function (e) {
  var t, i, n, s, o, a, r, l, h, u, c, _, p, f, d, g, C, m, E, T, v, b, S, B, y, L, I, A, k, D, O, P, Z, w, F, N, R;
  return {
    setters: [function (e) {
      t = e.applyDecoratedDescriptor, i = e.initializerDefineProperty, n = e.inheritsLoose, s = e.assertThisInitialized
    }, function (e) {
      o = e.cclegacy, a = e._decorator, r = e.Prefab, l = e.CCString, h = e.Node, u = e.Label, c = e.sp, _ = e.NodePool, p = e.instantiate, f = e.log, d = e.UITransform, g = e.Vec3
    }, function (e) {
      C = e.AudioEngine
    }, function (e) {
      m = e.gui
    }, function (e) {
      E = e.nodelink
    }, function (e) {
      T = e.Utils
    }, function (e) {
      v = e.gameMgr
    }, function (e) {
      b = e.EFlyChipPlayerType, S = e.EDispatchFormatDataType, B = e.EOperateType
    }, function (e) {
      y = e.TrackPageViewEvent, L = e.TrackClickEvent, I = e.TrackClickName, A = e.UDConstant, k = e.ServerZoneToKey
    }, function (e) {
      D = e.UDEvent
    }, function (e) {
      O = e.UDUtils
    }, function (e) {
      P = e.nodeSmallChipItem
    }, function (e) {
      Z = e.reportMgr
    }, function (e) {
      w = e.TileNode, F = e.NODE_BASE
    }, function (e) {
      N = e.SchedulerManager
    }, function (e) {
      R = e.UIBase
    }],
    execute: function () {
      var U, z, G, M, H, W, Y, x, V, K, j, J, q, X, Q, $, ee, te, ie, ne, se, oe, ae, re, le, he, ue, ce, _e, pe, fe, de, ge, Ce, me, Ee, Te, ve, be;
      o._RF.push({}, "54e61vhdg9B5KfBCpjgGFFZ", "pfChipsLayer", void 0);
      var Se = a.ccclass,
        Be = a.property,
        ye = a.menu,
        Le = (U = Se("BetZoneConfig"), z = Be(r), G = Be(l), U((W = t((H = function () {
          i(this, "node", W, this), i(this, "key", Y, this)
        }).prototype, "node", [z], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: null
        }), Y = t(H.prototype, "key", [G], {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return ""
          }
        }), M = H)) || M);
      e("pfChipsLayer", (x = Se("pfChipsLayer"), V = ye("abUpDown/pfChipsLayer"), K = Be(h), j = Be(h), J = Be(h), q = Be(u), X = Be(u), Q = Be(h), $ = Be([h]), ee = Be(r), te = Be(r), ie = Be(h), ne = Be(h), se = Be(c.Skeleton), oe = Be(h), ae = Be({
        type: Le,
        tooltip: "下注区域配置"
      }), x(re = V((he = t((le = function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
          return t = e.call.apply(e, [this].concat(o)) || this, i(t, "root", he, s(t)), i(t, "rootBet", ue, s(t)), i(t, "nodeBalance", ce, s(t)), i(t, "lblBalanceMoney", _e, s(t)), i(t, "lblCurrency", pe, s(t)), i(t, "rootGuideBet", fe, s(t)), i(t, "betZones", de, s(t)), i(t, "smallChipItem", ge, s(t)), i(t, "bigChipItem", Ce, s(t)), i(t, "chipLayer", me, s(t)), i(t, "blockLayer", Ee, s(t)), i(t, "handSpine", Te, s(t)), i(t, "chipSelectBlock", ve, s(t)), i(t, "betZoneConfig", be, s(t)), t._zoneNameToIndex = {}, t.udgmgr = void 0, t._smallChipItemPool = new _, t._tileBetZones = [], t._smallChipItems = [], t._bSelfSettleData = !1, t._bGuestSettleData = !1, t._settleData = [], t._selfFlyChips = {}, t._guestFlyChips = {}, t._selfTimer = null, t._guestTimer = null, t._chipEffectPipe = 1, t._selfAddChip = [], t._guestAddChip = [], t._betTimes = 0, t
        }
        n(t, e);
        var o = t.prototype;
        return o.onLoad = function () {
          this.udgmgr = v.get(), this.root.active = !0;
          for (var e = 0; e < this.betZones.length; e++) {
            var t = this.betZones[e],
              i = t.name;
            this._zoneNameToIndex[i] = e;
            for (var n = w.tile(t), s = void 0, o = 0; o < this.betZoneConfig.length; o++)
              if (i == this.betZoneConfig[o].key) {
                s = this.betZoneConfig[o].node;
                break
              } if (!s)
              for (var a = 0; a < this.betZoneConfig.length; a++)
                if ("normal" == this.betZoneConfig[a].key) {
                  s = this.betZoneConfig[a].node;
                  break
                } var r = w.tile(p(s));
            n.add(r);
            var l = t.getPosition();
            r.setPosition(l.x, l.y), r.name = i, this._tileBetZones[e] = r
          }
          this.initView(), this.on([D.VIEW_INIT_UI, D.GAME_ROUND_INIT, D.BET_SPANCE_LIGHT, D.BET_SPANCE_UPDATE, D.BET_COUNT_UPDATE, D.BET_SPANCE_VIP_LIGHT, D.FLY_CHIP_TO_BET_ZONE, D.GAME_TOAST_CLOCK_STOP, D.LOTTERY_FIRST_STEP, D.PLAY_SETTLE_ANIMATION, D.GAME_OVER, D.CANCEL_BET_ZONE_LIGHT, D.UNDO_OR_CLEAR_BET, D.GAME_TOAST_CLOCK_UPDATE, D.SHOW_YELLOW_FRAME, D.FLY_CHIPS_END, D.OPERATE_RESP, D.JOIN_ROOM_UPDATE_BET, D.GAME_STATUS_SETTLE, D.REFRESH_CHIP_SELECT_BLOCK, D.CLICK_DOUBLE, D.CLICK_UNDO]), this.chipSelectBlock.active = !1, this._addClickEvents()
        }, o.start = function () {}, o._addClickEvents = function () {
          for (var e = this, t = function () {
              var t = e.betZones[i];
              m.onclick(t, (function () {
                e._onAreaClick(t.name)
              }), !1, "none")
            }, i = 0; i < this.betZones.length; i++) t()
        }, o._onAreaClick = function (e) {
          if (this.udgmgr.Desk.isBetStatge() && !this.udgmgr.Desk.IsBetTimeEnd) {
            var t;
            for (var i in k)
              if (k[i] === e) {
                t = Number(i);
                break
              } if (f("click bet area = ", t), null != t) {
              var n = this.udgmgr.Desk.CurDefaultChip,
                s = [];
              s[0] = {
                zone: t,
                amount: n
              }, this.udgmgr.RoundManager.sendBetRequest(s), this.udgmgr.Desk.isAuto = !1, this._betTimes++, Z.trackClick(y.MAIN, L.BET_AREA + "_" + I.BET + t, {
                tableID: this.udgmgr.Desk.TableID,
                money: n,
                times: this._betTimes
              })
            }
          }
        }, o.initView = function () {
          this.rootBet.active = !0, this._resetLightState(), this.updateCurrowBet(0, !1), this.rootGuideBet.active = !1
        }, o.initOneRound = function (e) {
          this._resetLightState(), this.updateCurrowBet(0, !1), this.rootGuideBet.active = !1, this.blockLayer.active = !1, e && (this.chipSelectBlock.active = !1), this._selfAddChip = [], this._guestAddChip = [], this._betTimes = 0, this._cycleSmallChipItem(), this.updateBetSpance(), this.updateBetSpanceOdds(), this.showBetZoneLight(), this._showWinFrameEffect([]), this.updateCurrowBet(this.udgmgr.Desk.CurRoundTotalBet, !0)
        }, o._resetLightState = function () {
          for (var e = 0; e < this._tileBetZones.length; e++) {
            var t = this._tileBetZones[e],
              i = E("light", t);
            i && (i.active = !1)
          }
        }, o.showBetZoneLight = function (e) {
          e = e || [];
          for (var t = 0; t < this._tileBetZones.length; t++) {
            for (var i = this._tileBetZones[t], n = E("light", i), s = !1, o = 0; o < e.length; o++) {
              if (this._getBetZone(e[o]).name == i.name) {
                s = !0;
                break
              }
            }
            n && (n.active = s)
          }
        }, o.updateBetSpance = function () {
          var e = this;
          this.udgmgr.Desk.CurBetSpanceList.forEach((function (t, i) {
            e._updateOneZoneBetSpance(i, t)
          }))
        }, o.updateBetSpanceOdds = function () {
          var e = this;
          this.udgmgr.Desk.CurBetSpanceList.forEach((function (t, i) {
            e._updateOneZoneBetOdds(i, t.odds)
          }))
        }, o.updateCurrowBet = function (e, t) {
          void 0 === e && (e = 0), void 0 === t && (t = !1), this.nodeBalance.active = t, this.lblBalanceMoney.string = "" + O.getformatBetMoney(e, !0)
        }, o._getBetZone = function (e) {
          var t = "";
          t = "number" == typeof e ? k[e] : String(e);
          var i = this._zoneNameToIndex[t];
          return this._tileBetZones[i]
        }, o._showWinFrameEffect = function (e) {
          e = e || [];
          for (var t = 0; t < this._tileBetZones.length; t++) {
            for (var i = this._tileBetZones[t], n = E("liuguang", i), s = !1, o = 0; o < e.length; o++) {
              if (this._getBetZone(e[o]).name == i.name) {
                s = !0;
                break
              }
            }
            n && (n.active = s)
          }
        }, o._updateSelfZoneBet = function (e, t) {
          var i = this._getBetZone(e);
          if (i) {
            var n = E("chipSelf", i).getChildByName("self_chipNode");
            if (n)
              if (t <= 0) n.parent = null;
              else {
                var s = E(F, n, P);
                s && s.showItem(t, b.SELF, !0)
              }
          }
        }, o._updateGuestZoneBet = function (e, t) {
          var i = this._getBetZone(e);
          if (i) {
            var n = E("chipPlayer", i).getChildByName("player_chipNode");
            if (n) {
              var s = E(F, n, P);
              s && s.showItem(t, b.GUEST, !0)
            }
          }
        }, o._updateOneZoneBetSpance = function (e, t) {
          this._updateSelfZoneBet(e, t.selfBet), this._updateGuestZoneBet(e, t.allBet)
        }, o._updateOneZoneBetOdds = function (e, t) {
          void 0 === t && (t = null);
          var i = this._getBetZone(e);
          if (i) {
            var n = E("lbRate", i, u);
            null != t && (n.string = "1:" + (t / A.RATEWEIGHT).toFixed(0)), n.node.active = null != t
          }
        }, o._cycleSmallChipItem = function (e) {
          void 0 === e && (e = !1);
          for (var t = this._smallChipItems.length - 1; t >= 0; t--) {
            var i = this._smallChipItems[t],
              n = !0;
            e && (n = i.name.includes("self_")), n && (i.name = "", this._smallChipItems.splice(t, 1), this._smallChipItemPool.put(i))
          }!e && (this._smallChipItems = [])
        }, o._dispatchFlyChip = function (e) {
          if (e.chipNum && !(e.chipNum <= 0)) {
            var t = this._getBetZone(e.zone);
            if (t) {
              var i;
              if (e.type == b.SELF) i = E("chipSelf", t).getWorldPosition();
              else i = E("chipPlayer", t).getWorldPosition();
              var n = this.chipLayer.getComponent(d).convertToNodeSpaceAR(i),
                s = T.clone(e);
              s.addPos = n, this.emit(D.SHOW_FLY_CHIPS, s)
            }
          }
        }, o._addSmallChipItemToBetZone = function (e, t) {
          void 0 === t && (t = !0), t && e.type == b.SELF && (C.instance.effect(this._chipEffectPipe++, A.Audio.ChouMaShow), this._chipEffectPipe > 10 && (this._chipEffectPipe = 1));
          var i = this._getBetZone(e.zone);
          if (i) {
            var n, s = "",
              o = 0,
              a = e.chipNum + e.addChip;
            e.type == b.SELF ? (n = E("chipSelf", i), s = "self_", o = this._selfAddChip[e.zone] || 0, this._selfAddChip[e.zone] ? this._selfAddChip[e.zone] += a : this._selfAddChip[e.zone] = a) : (n = E("chipPlayer", i), s = "player_", o = this._guestAddChip[e.zone] || 0, this._guestAddChip[e.zone] ? this._guestAddChip[e.zone] += a : this._guestAddChip[e.zone] = a);
            var r = s + "chipNode",
              l = n.getChildByName(r);
            l || ((l = this._smallChipItemPool.get()) || (l = p(this.smallChipItem)), l.name = r, this._smallChipItems.push(l), l.position = new g(0, 0, 0), l.parent = n);
            var h = E(F, l, P),
              u = o + a;
            return h && h.showItem(u, e.type, !t), l
          }
        }, o._getZoneChipRange = function (e) {
          var t = [];
          switch (e) {
            case 0:
              t = [-90, 75, -30, 75];
              break;
            case 1:
              t = [-75, 90, -30, 75];
              break;
            case 7:
              t = [-60, 60, -20, 50];
              break;
            default:
              t = [-45, 45, -35, 45]
          }
          return t
        }, o._showBlockZone = function (e) {
          this.blockLayer.active = !0;
          for (var t = [], i = 0; i < e.length; i++) t.push(k[e[i]]);
          for (var n = this.blockLayer.children, s = 0; s < n.length; s++) {
            var o = n[s];
            o.active = t.indexOf(o.name) < 0
          }
        }, o._arrangeExtraData = function () {
          for (var e = v.get().Desk.CurDoubleNums, t = [], i = 0; i < e.length; i++)
            if (e[i] > A.RATEWEIGHT) {
              var n = this._getBetZone(i);
              n && t.push({
                pos: n.node.getWorldPosition(),
                rate: e[i],
                zone: i
              })
            } this.emit(D.TO_SETTLE_PLAY_EXTRA_PAY, t)
        }, o._arrangeSettleData = function (e, t, i) {
          t == S.SELF && (this._bSelfSettleData = !0), t == S.GUEST && (this._bGuestSettleData = !0);
          for (var n = 0; n < e.length; n++) {
            var s = e[n].zone,
              o = this._getBetZone(s);
            o && this._settleData.push({
              startPos: o.node.getWorldPosition(),
              endPos: e[n].pos,
              zone: s,
              win: e[n].win,
              seatIndex: e[n].seatIndex
            })
          }
          if (this._bSelfSettleData && this._bGuestSettleData) {
            for (var a = this.udgmgr.Desk.getGameSettingData(), r = ((null == a ? void 0 : a.winZone) || []).slice(), l = 0; l < this._settleData.length; l++) {
              var h = r.indexOf(this._settleData[l].zone);
              h > -1 && r.splice(h, 1)
            }
            for (var u = 0; u < r.length; u++) {
              var c = r[u],
                _ = this._getBetZone(c);
              _ && this._settleData.push({
                startPos: _.node.getWorldPosition(),
                zone: c
              })
            }
            this.emit(D.TO_SETTLE_PLAY_SETTLE_ANIMATION, this._settleData), this._cycleSmallChipItem(), this._bSelfSettleData = !1, this._bGuestSettleData = !1, this._settleData = []
          }
        }, o._showGuideHand = function (e) {
          this.rootGuideBet.active = !0, this.handSpine.setToSetupPose(), this.handSpine.setAnimation(0, e, !0)
        }, o._settleBlockZone = function () {
          for (var e = this.udgmgr.Desk.CurSelfBet, t = [], i = 0; i < e.length; i++) e[i] > 0 && t.push(i);
          this._showBlockZone(t)
        }, o._joinRoomAddChip = function () {
          var e = this,
            t = function (t, i, n) {
              var s = e._getBetZone(i);
              if (s) {
                var o;
                if (n == b.SELF) o = E("chipSelf", s).getWorldPosition();
                else o = E("chipPlayer", s).getWorldPosition();
                e._addSmallChipItemToBetZone({
                  addPos: o,
                  chipNum: t,
                  zone: i,
                  type: n,
                  addChip: 0
                }, !1)
              }
            };
          this.udgmgr.Desk.CurBetSpanceList.forEach((function (e, i) {
            var n = Number(i),
              s = e.selfBet,
              o = e.allBet - s;
            s > 0 && t(s, n, b.SELF), o > 0 && t(o, n, b.GUEST)
          }))
        }, o._handleFlyChips = function (e, t) {
          var i = this;
          if (e = e || [], t == b.SELF) {
            for (var n = 0; n < e.length; n++) {
              var s = e[n].zone;
              this._selfFlyChips[s] = this._selfFlyChips[s] || [], this._selfFlyChips[s].push(e[n])
            }
            this._selfTimer || (this._showOneChipFly(b.SELF), this._selfTimer = N.schedulerInterval((function () {
              i._showOneChipFly(b.SELF)
            }), A.Time.FLY_CHIP_INTERVAL))
          } else {
            for (var o = 0; o < e.length; o++) {
              var a = e[o].zone;
              this._guestFlyChips[a] = this._guestFlyChips[a] || [], this._guestFlyChips[a].push(e[o])
            }
            this._guestTimer || (this._showOneChipFly(b.GUEST), this._guestTimer = N.schedulerInterval((function () {
              i._showOneChipFly(b.GUEST)
            }), A.Time.FLY_CHIP_INTERVAL))
          }
        }, o._showOneChipFly = function (e) {
          var t = e == b.SELF ? this._selfFlyChips : this._guestFlyChips;
          if (0 != Object.keys(t).length)
            for (var i in t) {
              var n = t[i];
              if (0 != n.length) {
                var s = n[0],
                  o = s.zone,
                  a = s.pos,
                  r = s.chipData,
                  l = 0;
                s.isOverLimit && 1 == r.count && (l = s.remainChip);
                var h = {
                  zone: o,
                  startPos: a,
                  type: s.type,
                  chipNum: r.chip,
                  addChip: l
                };
                this._dispatchFlyChip(h), r.count--, 0 == r.count && n.splice(0, 1), 0 == n.length && delete t[i]
              } else delete t[i]
            } else this._destroyTimer(e)
        }, o._destroyTimer = function (e) {
          e == b.SELF ? (this._selfTimer && N.unscheduleInterval(this._selfTimer), this._selfTimer = null) : e == b.GUEST ? (this._guestTimer && N.unscheduleInterval(this._guestTimer), this._guestTimer = null) : (this._selfTimer && N.unscheduleInterval(this._selfTimer), this._selfTimer = null, this._guestTimer && N.unscheduleInterval(this._guestTimer), this._guestTimer = null)
        }, o._clearOrUnDoCycleChips = function (e) {
          for (var t = this.udgmgr.Desk.CurSelfBet, i = !0, n = 0; n < t.length; n++)
            if (t[n] > 0) {
              i = !1;
              break
            } if (i) return this._selfAddChip = [], void this._cycleSmallChipItem(!0);
          for (var s in e) {
            var o = Number(s),
              a = e[o];
            this._selfAddChip[o] -= a, this._guestAddChip[o] -= a, this._updateSelfZoneBet(o, this._selfAddChip[o])
          }
        }, o.onEvents = function (e) {
          var t = arguments.length <= 1 ? void 0 : arguments[1],
            i = arguments.length <= 2 ? void 0 : arguments[2];
          switch (e) {
            case D.VIEW_INIT_UI:
              this.initView(), this.root.active = !0;
              break;
            case D.GAME_ROUND_INIT:
              this.initOneRound(t);
              break;
            case D.BET_SPANCE_LIGHT:
              this.showBetZoneLight(t);
              break;
            case D.BET_SPANCE_VIP_LIGHT:
              this.showBetZoneLight(i);
              break;
            case D.BET_SPANCE_UPDATE:
              break;
            case D.BET_COUNT_UPDATE:
              this.updateCurrowBet(t, i);
              break;
            case D.FLY_CHIP_TO_BET_ZONE:
              this._handleFlyChips(arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]);
              break;
            case D.GAME_TOAST_CLOCK_STOP:
              A.CountDown.BetStart, t == A.CountDown.ExtraPayTip && this._arrangeExtraData(), this.rootGuideBet.active = !1;
              break;
            case D.LOTTERY_FIRST_STEP:
              t == A.CountDown.ExtraPayShow && this._arrangeExtraData();
              break;
            case D.PLAY_SETTLE_ANIMATION:
              this._arrangeSettleData(arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3]);
              break;
            case D.GAME_OVER:
              var n = this.udgmgr.Desk.getGameSettingData(),
                s = (null == n ? void 0 : n.winZone) || [];
              this._showBlockZone(s);
              break;
            case D.CANCEL_BET_ZONE_LIGHT:
              this.showBetZoneLight();
              break;
            case D.UNDO_OR_CLEAR_BET:
              this._clearOrUnDoCycleChips(arguments.length <= 1 ? void 0 : arguments[1]);
              break;
            case D.GAME_TOAST_CLOCK_UPDATE:
              if (t != A.CountDown.BetStart) return;
              if (3 === (arguments.length <= 2 ? void 0 : arguments[2]) && 1 == this.udgmgr.Desk.roundCount) {
                for (var o = this.udgmgr.Desk.CurSelfBet, a = !0, r = 0; r < o.length; r++)
                  if (o[r] > 0) {
                    a = !1;
                    break
                  } a && this._showGuideHand("dian_h")
              }
              break;
            case D.SHOW_YELLOW_FRAME:
              this._showWinFrameEffect(arguments.length <= 1 ? void 0 : arguments[1]);
              break;
            case D.FLY_CHIPS_END:
              this._addSmallChipItemToBetZone(arguments.length <= 1 ? void 0 : arguments[1]);
              break;
            case D.OPERATE_RESP:
              if ((arguments.length <= 1 ? void 0 : arguments[1]) == B.CLEAR)
                for (var l in this._selfFlyChips)
                  for (var h = this._selfFlyChips[l].length - 1; h >= 0; h--) this._selfFlyChips[l][h].type == b.SELF && this._selfFlyChips[l].splice(h, 1);
              else(arguments.length <= 1 ? void 0 : arguments[1]) == B.SETTLE && (this.udgmgr.Desk.isMultipleModel() && (this._destroyTimer(), this._selfFlyChips = []), this._settleBlockZone());
              break;
            case D.JOIN_ROOM_UPDATE_BET:
              this._joinRoomAddChip();
              break;
            case D.GAME_STATUS_SETTLE:
              this.udgmgr.Desk.isMultipleModel() && (this._destroyTimer(), this._selfFlyChips = [], this._guestFlyChips = [], this._settleBlockZone(), this.showBetZoneLight());
              break;
            case D.REFRESH_CHIP_SELECT_BLOCK:
              this.chipSelectBlock.active = t;
              break;
            case D.CLICK_DOUBLE:
            case D.CLICK_UNDO:
              this._betTimes++
          }
        }, o.onDestroy = function () {
          e.prototype.onDestroy.call(this), this._cycleSmallChipItem(), this._smallChipItemPool.clear(), this._destroyTimer()
        }, t
      }(R)).prototype, "root", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), ue = t(le.prototype, "rootBet", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), ce = t(le.prototype, "nodeBalance", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), _e = t(le.prototype, "lblBalanceMoney", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), pe = t(le.prototype, "lblCurrency", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), fe = t(le.prototype, "rootGuideBet", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), de = t(le.prototype, "betZones", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), ge = t(le.prototype, "smallChipItem", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Ce = t(le.prototype, "bigChipItem", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), me = t(le.prototype, "chipLayer", [ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Ee = t(le.prototype, "blockLayer", [ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Te = t(le.prototype, "handSpine", [se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), ve = t(le.prototype, "chipSelectBlock", [oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), be = t(le.prototype, "betZoneConfig", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), re = le)) || re) || re));
      o._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/pfGuestLayer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioEngine.ts", "./ge.ts", "./Cache.ts", "./Utils3.ts", "./GameManager.ts", "./UDConstant.ts", "./UDEvent.ts", "./UDUtils.ts", "./interface12.ts", "./nodeGuestHead.ts", "./ReportManager.ts", "./UIBase.ts", "./tilenode.ts"], (function (e) {
  var t, i, n, a, r, l, s, o, u, h, c, d, f, g, p, y, _, v, I, P, S, L, E, m, N, A, T, k;
  return {
    setters: [function (e) {
      t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, a = e.assertThisInitialized
    }, function (e) {
      r = e.cclegacy, l = e._decorator, s = e.Node, o = e.Label, u = e.Prefab, h = e.sp, c = e.instantiate
    }, function (e) {
      d = e.AudioEngine
    }, function (e) {
      f = e.gui
    }, function (e) {
      g = e.Cache
    }, function (e) {
      p = e.Utils
    }, function (e) {
      y = e.gameMgr
    }, function (e) {
      _ = e.UDConstant, v = e.TrackPageViewEvent, I = e.TrackClickEvent, P = e.TrackClickName
    }, function (e) {
      S = e.UDEvent
    }, function (e) {
      L = e.UDUtils
    }, function (e) {
      E = e.EFlyChipPlayerType, m = e.EDispatchFormatDataType
    }, function (e) {
      N = e.nodeGuestHead
    }, function (e) {
      A = e.reportMgr
    }, function (e) {
      T = e.UIBase
    }, function (e) {
      k = e.TileNode
    }],
    execute: function () {
      var D, U, b, C, R, x, O, w, G, M, B, V, F, W, Y, z, H, Z;
      r._RF.push({}, "74ddawelVhLBLeX0mhrc/Ay", "pfGuestLayer", void 0);
      var K = l.ccclass,
        j = l.property,
        q = l.menu;
      e("pfGuestLayer", (D = K("pfGuestLayer"), U = q("abUpDown/pfGuestLayer"), b = j(s), C = j(o), R = j(s), x = j([s]), O = j(u), w = j(h.Skeleton), G = j(s), D(M = U((V = t((B = function (e) {
        function t() {
          for (var t, i = arguments.length, r = new Array(i), l = 0; l < i; l++) r[l] = arguments[l];
          return t = e.call.apply(e, [this].concat(r)) || this, n(t, "root", V, a(t)), n(t, "lblRenShu", F, a(t)), n(t, "audienceNode", W, a(t)), n(t, "playerNodes", Y, a(t)), n(t, "cloneGuestPlayer", z, a(t)), n(t, "spine", H, a(t)), n(t, "topNode", Z, a(t)), t.allPlayerList = [], t.udgmgr = null, t._isSelfVip = !1, t._lastVipLayers = [], t
        }
        i(t, e);
        var r = t.prototype;
        return r.onLoad = function () {
          var e = this;
          this.udgmgr = y.get();
          for (var t = function (t) {
              var i = k.tile(e.playerNodes[t]),
                n = k.tile(c(e.cloneGuestPlayer));
              i.add(n), e.allPlayerList[t] = n.node.getComponent(N), f.onclick(n, (function () {
                e.onClickOnePlayer(t)
              }), 1, "none")
            }, i = 0; i < this.playerNodes.length; i++) t(i);
          this.initView(), this.on([S.VIEW_INIT_UI, S.GAME_ROUND_INIT, S.VIEW_PLAYER_GUEST_UPDATE, S.VIEW_PLAYER_COUNT_UPDATE, S.BET_SPANCE_VIP_LIGHT, S.SHOW_WIN_ANIMATION, S.PLAY_GUEST_CHIP_FLY, S.GAME_TOAST_CLOCK_STOP, S.FLY_COIN_END, S.FLY_COIN_FIRST_END])
        }, r.start = function () {}, r._getPlayUidBySeatIndex = function (e) {
          for (var t = this.udgmgr.Desk.RankPlayerList, i = 0; i < t.length; i++)
            if (t[i].seatIndex == e) return t[i].uid
        }, r._getPlayerBySeatIndex = function (e) {
          if (!(e < 0))
            for (var t = 0; t < this.allPlayerList.length; t++)
              if (this.allPlayerList[t].SeatIndex == e) return this.allPlayerList[t]
        }, r._playPiaofengAnim = function (e, t, i) {
          var n = this._getPlayerBySeatIndex(e);
          n && n.playPiaoFeng(t)
        }, r._receiveFlyChip = function (e, t) {
          for (var i = {}, n = 0; n < e.length; n++) {
            var a = e[n].seatIndex;
            i[a] = i[a] || [];
            for (var r = !1, l = 0; l < i[a].length; l++)
              if (i[a][l].zone == e[n].zone) {
                i[a][l].amount += e[n].amount, r = !0;
                break
              } r || i[a].push(e[n])
          }
          var s = [];
          if (this.udgmgr.Desk.isMultipleModel()) {
            e = e || [], t = t || {};
            for (var o = 0; o < e.length; o++) {
              var u = e[o].seatIndex;
              if (this._getPlayUidBySeatIndex(u) != g.User.getUID()) {
                var h = e[o].zone,
                  c = e[o].amount || 0,
                  f = this.udgmgr.Desk.splitBetToChips(c);
                if (this._isSelfVip || !(c - t[h] <= 0)) {
                  var p = L.getEachZoneOnceLimitChipCount(h, E.GUEST),
                    y = 0,
                    v = 0;
                  if (f.length > 0)
                    for (var I = 0; I < f.length; I++) {
                      if (this.udgmgr.Desk.AllChipList.indexOf(f[I].chip) > -1) {
                        var P, m = -1 == u ? this.audienceNode.getWorldPosition() : null == (P = this._getPlayerBySeatIndex(u)) ? void 0 : P.node.getWorldPosition(),
                          N = f[I].chip;
                        if (m) {
                          var A = f[I].count,
                            T = 0;
                          y + A > p ? (T = p - y, y = p) : (T = A, y += A);
                          var k = c - (v += T * N),
                            D = y >= p;
                          if (T > 0 && s.push({
                              zone: h,
                              chipData: {
                                chip: N,
                                count: T
                              },
                              pos: m,
                              type: E.GUEST,
                              remainChip: k,
                              isOverLimit: D
                            }), y >= p) break
                        }
                      }
                    }
                }
              }
            }
          }
          s.length > 0 && this.scheduleOnce((function () {
            d.instance.effect(0, _.Audio.ChouMaShow)
          }), .5), s.length > 0 && this.emit(S.FLY_CHIP_TO_BET_ZONE, s, E.GUEST)
        }, r.onEvents = function (e) {
          var t = arguments.length <= 1 ? void 0 : arguments[1],
            i = arguments.length <= 2 ? void 0 : arguments[2];
          switch (e) {
            case S.VIEW_INIT_UI:
              this.root.active = !1, this.initView();
              break;
            case S.GAME_ROUND_INIT:
              this.initOneRound();
              break;
            case S.VIEW_PLAYER_GUEST_UPDATE:
              this.updatePlayerList(), this.showPlayFireAni(i);
              break;
            case S.VIEW_PLAYER_COUNT_UPDATE:
              this.updateNormalPlayerNum();
              break;
            case S.BET_SPANCE_VIP_LIGHT:
              this._showSlect(t);
              break;
            case S.SHOW_WIN_ANIMATION:
              var n = y.get().Desk.getGameSettingData(),
                a = (null == n ? void 0 : n.winZone) || [],
                r = (null == n ? void 0 : n.checklist) || [],
                l = [],
                s = a.slice(),
                o = null == n ? void 0 : n.selfWin,
                u = (null == o ? void 0 : o.totalWin) || 0;
              if (this.udgmgr.Desk.isMultipleModel())
                for (var h = 0; h < a.length; h++)
                  for (var c = a[h], d = 0; d < r.length; d++) {
                    var f, v = r[d].seatIndex;
                    if (this._getPlayUidBySeatIndex(v) != g.User.getUID()) {
                      var I = (r[d].winlist || [])[c] || 0;
                      if (-1 != v || this._isSelfVip || !(I <= u)) {
                        var P = -1 == v ? this.audienceNode.getWorldPosition() : null == (f = this._getPlayerBySeatIndex(v)) ? void 0 : f.node.getWorldPosition();
                        if (I > 0 && P) {
                          l.push({
                            zone: c,
                            win: I,
                            seatIndex: v,
                            pos: P
                          });
                          var L = s.indexOf(c);
                          L > -1 && s.splice(L, 1)
                        }
                      }
                    }
                  }
              this._updatePlayerMoney(r), this.emit(S.PLAY_SETTLE_ANIMATION, l, m.GUEST, s);
              break;
            case S.PLAY_GUEST_CHIP_FLY:
              this._receiveFlyChip(arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]);
              break;
            case S.GAME_TOAST_CLOCK_STOP:
              t == _.CountDown.BetStart && this._showSlect();
              break;
            case S.FLY_COIN_END:
              for (var E = (arguments.length <= 2 ? void 0 : arguments[2]) || [], N = 0; N < E.length; N++) {
                var A = E[N].seatIndex;
                if (this._getPlayUidBySeatIndex(A) != g.User.getUID()) {
                  var T = E[N].totalWin || 0;
                  T > 0 && this._playPiaofengAnim(E[N].seatIndex, p.formatRespMoney(T))
                }
              }
              break;
            case S.FLY_COIN_FIRST_END:
              for (var k = (arguments.length <= 2 ? void 0 : arguments[2]) || [], D = 0; D < k.length; D++) {
                var U = k[D].seatIndex;
                if (this._getPlayUidBySeatIndex(U) != g.User.getUID()) {
                  var b = k[D].totalWin || 0;
                  b > 0 && this._playSpineLight(k[D].seatIndex)
                }
              }
          }
        }, r.initView = function () {
          this.lblRenShu.string = "0", this.allPlayerList.forEach((function (e, t) {
            e.initView()
          }))
        }, r.initOneRound = function () {
          this._updateRootActive(!0), this.updateNormalPlayerNum(), this.updatePlayerList(), this._showSlect()
        }, r._updateRootActive = function (e) {
          this.udgmgr.Desk.isMultipleModel() ? this.root.active = e : this.root.active = !1
        }, r.updateNormalPlayerNum = function () {
          this._updateRootActive(!0), this.lblRenShu.string = this.udgmgr.Desk.getTotalNormalPlayerNum().toString()
        }, r.updatePlayerList = function () {
          this._updateRootActive(!0);
          var e = this.udgmgr.Desk.RankPlayerList;
          if (e.length > this._lastVipLayers.length);
          else
            for (var t = 0; t < e.length; t++) {
              for (var i = !1, n = 0; n < this._lastVipLayers.length; n++)
                if (e[t].uid == this._lastVipLayers[n].uid) {
                  i = !0;
                  break
                } if (!i) break
            }
          this._lastVipLayers = p.clone(e);
          var a = this.udgmgr.Desk.MySelf.checkInRank(),
            r = this.udgmgr.Desk.MySelf.uid;
          this._isSelfVip = !1;
          for (var l = 0; l < this.allPlayerList.length; l++) {
            var s = this.allPlayerList[l],
              o = e[l];
            o ? (o.uid == r && (this._isSelfVip = !0), s.UID = o.uid, s.SeatIndex = o.seatIndex, s.refreshByData(o), s.updateInRank(r == o.uid && a)) : s.initView()
          }
        }, r.showPlayFireAni = function (e) {
          if (!this.udgmgr.Desk.isSingleModel())
            if (e && 0 != e.length) {
              console.log("显示连续上榜玩家动画====>", e);
              for (var t = !1, i = 0; i < this.allPlayerList.length; i++) {
                for (var n = this.allPlayerList[i], a = !1, r = 0, l = 0; l < e.length; l++)
                  if (n.SeatIndex == e[l].seatIndex) {
                    a = !0, r = e[l].totalOnList;
                    break
                  } if (a) 0 == n.getInRanAniNodeActive() && (t = !0, n.updaeInRanAniShow(!0, r));
                else n.updaeInRanAniShow(!1)
              }
              t && d.instance.effect(0, _.Audio.PlayerFire)
            } else
              for (var s = 0; s < this.allPlayerList.length; s++) {
                this.allPlayerList[s].updaeInRanAniShow(!1)
              }
        }, r._showSlect = function (e) {
          for (var t = 0; t < this.allPlayerList.length; t++) this.allPlayerList[t].setSelectStatus(this.allPlayerList[t].SeatIndex == e)
        }, r.onClickOnePlayer = function (e) {
          if (this.udgmgr.Desk.isBetStatge() && !this.udgmgr.Desk.IsBetTimeEnd) {
            var t = this.allPlayerList[e];
            if (t && t.UID) {
              var i = t.SeatIndex;
              if (-1 != i) {
                d.instance.effect(0, _.Audio.BtnClick);
                var n = this._getPlayerBySeatIndex(i);
                if (n && n.getSelectStatus()) return n.setSelectStatus(!1), void this.emit(S.CANCEL_BET_ZONE_LIGHT);
                this.udgmgr.RoundManager.sendGetVipBetRequest(i), A.trackClick(v.MAIN, I.VIP_PLAYER + "_" + P.PLAYER + i)
              }
            }
          }
        }, r._updatePlayerMoney = function (e) {
          e = e || [];
          for (var t = 0; t < e.length; t++) {
            var i = e[t].seatIndex,
              n = this._getPlayerBySeatIndex(i);
            if (n) {
              var a = e[t].totalWin;
              n.updateMoney(a)
            }
          }
        }, r._playSpineLight = function (e) {
          var t = this._getPlayerBySeatIndex(e);
          t && t.playSpineLight()
        }, t
      }(T)).prototype, "root", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), F = t(B.prototype, "lblRenShu", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), W = t(B.prototype, "audienceNode", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Y = t(B.prototype, "playerNodes", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), z = t(B.prototype, "cloneGuestPlayer", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), H = t(B.prototype, "spine", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Z = t(B.prototype, "topNode", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), M = B)) || M) || M));
      r._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/pfLevelMode.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioEngine.ts", "./ge.ts", "./Utils3.ts", "./GameManager.ts", "./UDConstant.ts", "./UDEvent.ts", "./UDUtils.ts", "./general.ts", "./UIBase.ts"], (function (e) {
  var t, i, n, r, l, o, a, u, s, c, p, f, g, b, h, m, E, _, d, M, v, T;
  return {
    setters: [function (e) {
      t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, r = e.assertThisInitialized
    }, function (e) {
      l = e.cclegacy, o = e._decorator, a = e.Node, u = e.Sprite, s = e.Label, c = e.SpriteFrame
    }, function (e) {
      p = e.AudioEngine
    }, function (e) {
      f = e.gui
    }, function (e) {
      g = e.Utils
    }, function (e) {
      b = e.gameMgr
    }, function (e) {
      h = e.UDConstant, m = e.TrackPageViewEvent, E = e.TrackClickEvent, _ = e.TrackClickName
    }, function (e) {
      d = e.UDEvent
    }, function (e) {
      M = e.UDUtils
    }, function (e) {
      v = e.gutil_char
    }, function (e) {
      T = e.UIBase
    }],
    execute: function () {
      var L, I, U, w, y, D, k, V, F, S, N, C, O, A, z, B;
      l._RF.push({}, "4201cXOeNFNV6wermHcTRc6", "pfLevelMode", void 0);
      var R = o.ccclass,
        x = o.property,
        P = o.menu;
      e("pfLevelModel", (L = R("pfLevelModel"), I = P("abUpDown/pfLevelModel"), U = x(a), w = x(u), y = x(s), D = x(s), k = x(c), V = x(c), L(F = I((N = t((S = function (e) {
        function t() {
          for (var t, i = arguments.length, l = new Array(i), o = 0; o < i; o++) l[o] = arguments[o];
          return t = e.call.apply(e, [this].concat(l)) || this, n(t, "root", N, r(t)), n(t, "sprTitle", C, r(t)), n(t, "lblMin", O, r(t)), n(t, "lblMax", A, r(t)), n(t, "sprFrameSingle", z, r(t)), n(t, "sprFrameMultiple", B, r(t)), t.udgmgr = null, t
        }
        i(t, e);
        var l = t.prototype;
        return l.onLoad = function () {
          this.udgmgr = b.get(), this.root.active = !1, this.initView(), this.on([d.VIEW_INIT_UI, d.GAME_ROUND_INIT, d.VIEW_TABLE_INFO_UPDATE])
        }, l.start = function () {}, l.onEvents = function (e) {
          switch (e) {
            case d.VIEW_INIT_UI:
              this.initView();
              break;
            case d.GAME_ROUND_INIT:
              this.initOneRound();
              break;
            case d.VIEW_TABLE_INFO_UPDATE:
              this.updateTableInfo()
          }
        }, l.initView = function () {
          this.root.active = !1, this.lblMin.string = "", this.lblMax.string = "", this.sprTitle.spriteFrame = null
        }, l.initOneRound = function () {
          this.root.active = !0, this.updateTableInfo()
        }, l.updateTableInfo = function () {
          var e = this.udgmgr.Desk.CurLevel;
          this.sprTitle.spriteFrame = e.room_tab == h.Model.Multiple ? this.sprFrameMultiple : this.sprFrameSingle;
          var t = g.numValueOf(e.bet_min),
            i = g.numValueOf(e.bet_max);
          t = t < 0 ? "-∞" : M.getformatLevelModelMoney(t), i = i < 0 ? "∞" : M.getformatLevelModelMoney(i), this.lblMin.string = t, this.lblMax.string = i
        }, l.onClickModelChange = function (e) {
          p.instance.effect(0, h.Audio.BtnSwitchClick), this.udgmgr.Desk.CanSwitchLevel ? f.openBundleLayer(h.Package, "lyUpDownSelectTable", {
            viewName: m.SELECT_LEVEL,
            clickEvent: E.SELECT_LEVEL,
            clickType: _.SELECT_LEVEL_MODE
          }) : this.emit(d.VIEW_TOAST_SHOW, v("ud_not_switch_table"), !0)
        }, t
      }(T)).prototype, "root", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), C = t(S.prototype, "sprTitle", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), O = t(S.prototype, "lblMin", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), A = t(S.prototype, "lblMax", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), z = t(S.prototype, "sprFrameSingle", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), B = t(S.prototype, "sprFrameMultiple", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), F = S)) || F) || F));
      l._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/pfMySelfLayer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioEngine.ts", "./ge.ts", "./GPRoundBoxSprite.ts", "./Utils3.ts", "./custom-general.ts", "./GameManager.ts", "./PlatformGI.ts", "./UDConstant.ts", "./UDEvent.ts", "./UDUtils.ts", "./interface12.ts", "./ETw.ts", "./UIBase.ts"], (function (e) {
  var t, i, n, o, a, r, l, s, u, c, p, d, f, h, y, b, g, m, _, A, I, N, L, M, E, S, v, w;
  return {
    setters: [function (e) {
      t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, o = e.assertThisInitialized
    }, function (e) {
      a = e.cclegacy, r = e._decorator, l = e.Layout, s = e.Label, u = e.Node, c = e.sp, p = e.Vec3, d = e.UITransform, f = e.Tween, h = e.tween
    }, function (e) {
      y = e.AudioEngine
    }, function (e) {
      b = e.gatlas
    }, function (e) {
      g = e.GPRoundBoxSprite
    }, function (e) {
      m = e.Utils
    }, function (e) {
      _ = e.formatWithCommas, A = e.cbs
    }, function (e) {
      I = e.gameMgr
    }, function (e) {
      N = e.PlatformGI
    }, function (e) {
      L = e.UDConstant
    }, function (e) {
      M = e.UDEvent
    }, function (e) {
      E = e.UDUtils
    }, function (e) {
      S = e.EDispatchFormatDataType
    }, function (e) {
      v = e.ETw
    }, function (e) {
      w = e.UIBase
    }],
    execute: function () {
      var D, T, U, C, P, R, F, O, k, z, W, V, H, B, Y, G, x, j, q, J, Z, K, Q, X, $, ee;
      a._RF.push({}, "b7770kRMcdN8JFV6sqWa+cv", "pfMySelfLayer", void 0);
      var te = r.ccclass,
        ie = r.property,
        ne = r.menu;
      e("pfMySelfLayer", (D = te("pfMySelfLayer"), T = ne("abUpDown/pfMySelfLayer"), U = ie({
        type: l,
        tooltip: "nodeCoin"
      }), C = ie({
        type: g,
        tooltip: "头像"
      }), P = ie({
        type: s,
        tooltip: "昵称"
      }), R = ie({
        type: s,
        tooltip: "money"
      }), F = ie({
        type: s,
        tooltip: "currency"
      }), O = ie({
        type: u,
        tooltip: "icon"
      }), k = ie(u), z = ie(u), W = ie(u), V = ie(c.Skeleton), H = ie(s), D(B = T((G = t((Y = function (e) {
        function t() {
          for (var t, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
          return t = e.call.apply(e, [this].concat(a)) || this, n(t, "layoutNodeCoin", G, o(t)), n(t, "sprHead", x, o(t)), n(t, "lblName", j, o(t)), n(t, "lblMoney", q, o(t)), n(t, "lblCurrency", J, o(t)), n(t, "icon", Z, o(t)), n(t, "headNode", K, o(t)), n(t, "nodeAddAnim", Q, o(t)), n(t, "btnAdd", X, o(t)), n(t, "spineLight", $, o(t)), n(t, "lbSocre", ee, o(t)), t.gameMgr = null, t
        }
        i(t, e);
        var a = t.prototype;
        return a.onLoad = function () {
          this.gameMgr = I.get(), this.initView(), this.on([M.VIEW_INIT_UI, M.GAME_ROUND_INIT, M.VIEW_PLAYER_INFO_UPDATE, M.VIEW_PLAYER_BALANCE_UPDATE, M.SHOW_WIN_ANIMATION, M.FLY_COIN_END, M.FLY_COIN_FIRST_END]), this.btnAdd.active = !1, this.spineLight.node.active = !1
        }, a.start = function () {}, a.onEvents = function (e) {
          switch (e) {
            case M.VIEW_INIT_UI:
              this.initView();
              break;
            case M.GAME_ROUND_INIT:
            case M.VIEW_PLAYER_INFO_UPDATE:
              this.initOneRound();
              break;
            case M.VIEW_PLAYER_BALANCE_UPDATE:
              this.updateMoney();
              break;
            case M.SHOW_WIN_ANIMATION:
              for (var t = I.get().Desk.getGameSettingData(), i = (null == t ? void 0 : t.winZone) || [], n = null == t ? void 0 : t.selfWin, o = [], a = this.headNode.getWorldPosition(), r = [], l = 0; l < i.length; l++) {
                var s = i[l],
                  u = (null == n ? void 0 : n.winlist[s]) || 0;
                u > 0 ? o.push({
                  zone: s,
                  win: u,
                  pos: a,
                  seatIndex: 888
                }) : r.push(s)
              }
              this.emit(M.PLAY_SETTLE_ANIMATION, o, S.SELF, r);
              break;
            case M.FLY_COIN_END:
              var c = (arguments.length <= 1 ? void 0 : arguments[1]) || 0;
              c > 0 && this._playPiaofengAnim(m.formatRespMoney(c));
              break;
            case M.FLY_COIN_FIRST_END:
              var p = (arguments.length <= 1 ? void 0 : arguments[1]) || 0;
              p > 0 && this._playSpineLight()
          }
        }, a.initView = function () {
          this.lblName.string = "", this.lblMoney.string = "", this.icon.scale = new p(1, 1, 1), this.sprHead.spriteFrame = null, this.layoutNodeCoin.updateLayout()
        }, a.initOneRound = function () {
          this.lblName.string = this.gameMgr.Desk.MySelf.nick, this.updateMoney(), this.updateHead()
        }, a.updateMoney = function () {
          var e = this.gameMgr.Desk.MySelf.money,
            t = E.getformatBetMoney(e, !0);
          this.lblMoney.string = t, this.lblMoney.node.scale.x < .6 ? this.icon.scale = new p(.6, .6, 1) : this.icon.scale = this.lblMoney.node.scale, this.layoutNodeCoin.updateLayout()
        }, a.updateHead = function () {
          var e = String(this.gameMgr.Desk.MySelf.avatar);
          e && 0 != e.length && (e.toLocaleLowerCase().includes("http") ? this.loadRemoteSprite(this.sprHead, e) : this.sprHead.spriteFrame = b.get("userIcon", "touxiang_" + e))
        }, a._playPiaofengAnim = function (e, t) {
          y.instance.effect(0, L.Audio.selfAddMoney), this.nodeAddAnim.active = !0, this.lbSocre.string = "+" + _(e, 0), this.lbSocre.updateRenderData(!0);
          var i = this.lbSocre.getComponent(d).width,
            n = Math.max(-80, -i / 2);
          this.lbSocre.node.setPosition(n, 0), v.fadeTo(this.nodeAddAnim, 0, 255), v.fadeTo(this.nodeAddAnim, .5, 255, 0, 2).start(), f.stopAllByTarget(this.lbSocre.node), h(this.lbSocre.node).to(1, {
            position: new p(n, 60, 0)
          }).start()
        }, a.onClickMoney = function () {
          N.jumpTo("gt_page=deposit", {})
        }, a._playSpineLight = function () {
          var e = this;
          this.spineLight.node.active = !0, this.spineLight.setToSetupPose(), this.spineLight.setAnimation(0, "jinbi_feidao", !1), this.spineLight.setCompleteListener(A((function () {
            e.spineLight.node.active = !1
          }), this))
        }, t
      }(w)).prototype, "layoutNodeCoin", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), x = t(Y.prototype, "sprHead", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), j = t(Y.prototype, "lblName", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), q = t(Y.prototype, "lblMoney", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), J = t(Y.prototype, "lblCurrency", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Z = t(Y.prototype, "icon", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), K = t(Y.prototype, "headNode", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Q = t(Y.prototype, "nodeAddAnim", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), X = t(Y.prototype, "btnAdd", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), $ = t(Y.prototype, "spineLight", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), ee = t(Y.prototype, "lbSocre", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), B = Y)) || B) || B));
      a._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/pfTipLayer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioEngine.ts", "./ge.ts", "./custom-general.ts", "./GameManager.ts", "./UDConstant.ts", "./UDEvent.ts", "./subGameGlobal.ts", "./general.ts", "./UIBase.ts"], (function (e) {
  var t, i, n, o, a, s, r, l, c, u, p, T, _, S, h, O, E, f, b, y, A;
  return {
    setters: [function (e) {
      t = e.applyDecoratedDescriptor, i = e.inheritsLoose, n = e.initializerDefineProperty, o = e.assertThisInitialized
    }, function (e) {
      a = e.cclegacy, s = e._decorator, r = e.Node, l = e.Label, c = e.sp, u = e.log
    }, function (e) {
      p = e.AudioEngine
    }, function (e) {
      T = e.gui
    }, function (e) {
      _ = e.cbs
    }, function (e) {
      S = e.gameMgr
    }, function (e) {
      h = e.UDConstant
    }, function (e) {
      O = e.UDEvent
    }, function (e) {
      E = e.gi
    }, function (e) {
      f = e.gutil_char, b = e.PRIORITY, y = e.sprintf_g
    }, function (e) {
      A = e.UIBase
    }],
    execute: function () {
      var P, d, L, I, v, w, k, N, m, M, g, C, G, U, B, D, R, W, x, H, V, z, F, K, Y, j;
      a._RF.push({}, "7f513ubnUxARZF+FdpMHD32", "pfTipLayer", void 0);
      var J = s.ccclass,
        Z = s.property,
        q = s.menu;
      e("pfTipLayer", (P = J("pfTipLayer"), d = q("abUpDown/pfTipLayer"), L = Z(r), I = Z(r), v = Z(r), w = Z(r), k = Z(r), N = Z(r), m = Z(r), M = Z(l), g = Z(c.Skeleton), C = Z(c.Skeleton), G = Z(c.Skeleton), P(U = d((D = t((B = function (e) {
        function t() {
          for (var t, i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
          return t = e.call.apply(e, [this].concat(a)) || this, n(t, "root", D, o(t)), n(t, "tipBetLocked", R, o(t)), n(t, "tipBetNow", W, o(t)), n(t, "tipPay", x, o(t)), n(t, "optBetLocked", H, o(t)), n(t, "tipsNormal", V, o(t)), n(t, "tipsNormalClose", z, o(t)), n(t, "lblTipsNormalTxt", F, o(t)), n(t, "extraPaySpine", K, o(t)), n(t, "betNowSpine", Y, o(t)), n(t, "betLockedSpine", j, o(t)), t.onlyOneList = {}, t.handlerTimer = {}, t.autoCloseToast = !0, t
        }
        i(t, e);
        var a = t.prototype;
        return a.onLoad = function () {
          var e;
          this.root.active = !0, this.onlyOneList = ((e = {})[h.GAME_TIPS.BetStart] = this.tipBetNow, e[h.GAME_TIPS.BetStop] = this.tipBetLocked, e[h.GAME_TIPS.ExtraPay] = this.tipPay, e), this.initView(), this.on([O.VIEW_INIT_UI, O.VIEW_STATUS_MSG_SHOW, O.VIEW_STATUS_MSG_HIDE, O.GAME_ROUND_INIT, O.LOTTERY_FIRST_STEP, O.GAME_TOAST_CLOCK_STOP, O.BET_COUNT_DOWN_START, O.USER_BET_RESP_FAIL, O.VIEW_TOAST_SHOW, O.OPERATE_RESP_FAIL, E.LoginEvent.PUSH_KICKPUSH, O.VIEW_TOAST_CLOSE, E.GameEvent.JOIN_ROOM])
        }, a.onEvents = function (e) {
          for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
          var o = i[0],
            a = i[1];
          switch (e) {
            case O.VIEW_INIT_UI:
              this.initView();
              break;
            case O.VIEW_STATUS_MSG_SHOW:
              o && (this.onlyOneList[o] ? this.chooseOnlyOne(o, a) : o == h.GAME_TIPS.BetStopOpt ? this.optBetLocked.active = !0 : this.showToast(a, !0));
              break;
            case O.VIEW_TOAST_SHOW:
              this.showToast(o, a);
              break;
            case O.VIEW_STATUS_MSG_HIDE:
              o && (this.onlyOneList[o] ? this.onlyOneList[o].active = !1 : o == h.GAME_TIPS.BetStopOpt && (this.optBetLocked.active = !1));
              break;
            case O.GAME_ROUND_INIT:
              this.initOneRound();
              break;
            case O.LOTTERY_FIRST_STEP:
              o == h.CountDown.BetLockedTip ? S.get().Desk.isSingleModel() || this.chooseOnlyOne(h.GAME_TIPS.BetStop) : o == h.CountDown.ExtraPayTip && this.chooseOnlyOne(h.GAME_TIPS.ExtraPay);
              break;
            case O.GAME_TOAST_CLOCK_STOP:
              if (o == h.CountDown.BetLockedTip) {
                for (var s = i[2].data, r = 0, l = 0; l < s.length; l++)
                  if (o == s[l].key) {
                    r = l;
                    break
                  } var c = s[r + 1];
                c && c.key == h.CountDown.ExtraPayTip && this.chooseOnlyOne(h.GAME_TIPS.ExtraPay)
              } else o == h.CountDown.ExtraPayTip || h.CountDown.ExtraPayShow;
              break;
            case O.BET_COUNT_DOWN_START:
              S.get().Desk.isSingleModel() || this.chooseOnlyOne(h.GAME_TIPS.BetStart);
              break;
            case O.OPERATE_RESP_FAIL:
            case O.USER_BET_RESP_FAIL:
              if (11 === o) T.alert({
                title: f("ud_tips"),
                content: f("UPDOWN_GAME_12"),
                enableClose: !0,
                ok: {
                  text: f("ud_btn_sure"),
                  cb: function () {
                    T.closeAlert("updown")
                  }
                }
              }, b.ALERT, "updown");
              else if (9 === o) this.showToast(f("UPDOWN_GAME_5"), !0);
              else if (10 === o) this.showToast(f("UPDOWN_GAME_0"), !0), p.instance.effect(0, h.Audio.NotCanBet);
              else if (1 == o) this.showToast(f("UPDOWN_GAME_9"), !0);
              else {
                var u = e === O.USER_BET_RESP_FAIL ? "UPDOWN_GAME_7" : "UPDOWN_GAME_8";
                this.showToast(y(u, o), !0)
              }
              break;
            case E.LoginEvent.PUSH_KICKPUSH:
              var _ = "UPDOWN_GAME_11";
              1 == o ? _ = "UPDOWN_GAME_15" : 3 == o && (_ = "UPDOWN_GAME_16"), T.alert({
                title: f("ud_tips"),
                content: f(_),
                enableClose: !1,
                ok: {
                  text: f("ud_btn_sure"),
                  cb: function () {
                    T.closeAlert("updown"), T.openBundleLayer(h.Package, "lyUpDownCheckTable", {
                      isKick: !0
                    })
                  }
                }
              }, b.ALERT, "updown");
              break;
            case O.VIEW_TOAST_CLOSE:
            case E.GameEvent.JOIN_ROOM:
              this.initView()
          }
        }, a.initView = function () {
          this.chooseOnlyOne(null), this.optBetLocked.active = !1, this.tipsNormal.active = !1, this.lblTipsNormalTxt.node.active = !0
        }, a.initOneRound = function () {
          this.stopAllScheduler(), this.chooseOnlyOne(null), this.optBetLocked.active = !1
        }, a.chooseOnlyOne = function (e, t) {
          var i = this;
          void 0 === e && (e = null);
          var n = this,
            o = function (t) {
              Object.prototype.hasOwnProperty.call(i.onlyOneList, t) && (i.onlyOneList[t].active = t == e, n.stopHandler(t), t == e ? (i.onlyOneList[t].active = !0, t == h.GAME_TIPS.ExtraPay ? (i.extraPaySpine.setToSetupPose(), i.extraPaySpine.setAnimation(0, "tips_extrapay", !1), i.extraPaySpine.setCompleteListener(_((function () {
                n.onlyOneList[t].active = !1
              }), i)), p.instance.effect(0, h.Audio.ExtraPay)) : t == h.GAME_TIPS.BetStart ? (i.betNowSpine.setToSetupPose(), i.betNowSpine.setAnimation(0, "tips_please", !1), i.betNowSpine.setCompleteListener(_((function () {
                n.onlyOneList[t].active = !1
              }), i)), p.instance.effect(0, h.Audio.BetStart)) : t == h.GAME_TIPS.BetStop ? (i.betLockedSpine.setToSetupPose(), i.betLockedSpine.setAnimation(0, "tips_bet locked", !1), i.betLockedSpine.setCompleteListener(_((function () {
                n.onlyOneList[t].active = !1
              }), i)), p.instance.effect(0, h.Audio.BetLocked)) : i.scheduleOnce((function () {
                n.onlyOneList[t].active = !1
              }), h.Time.TIP_AUTO_CLOSE)) : i.onlyOneList[t].active = !1)
            };
          for (var a in this.onlyOneList) o(a)
        }, a.showToast = function (e, t) {
          if (void 0 === t && (t = !0), u("显示土司===>", e), null != e && 0 != e.length) {
            this.autoCloseToast = t;
            var i = h.GAME_TIPS.Tip,
              n = this;
            this.stopHandler(h.GAME_TIPS.Tip), this.tipsNormalClose.active = !this.autoCloseToast, this.tipsNormal.active = !0, this.lblTipsNormalTxt.string = e, this.autoCloseToast && this.scheduleOnce((function () {
              n.stopHandler(i), n.tipsNormal.active = !1
            }), h.Time.TOAST_AUTO_CLOSE)
          }
        }, a.stopHandler = function (e) {
          this.stopSchedulerOnce(this.handlerTimer[e]), this.handlerTimer[e] = null
        }, a.onClickCloseToast = function (e) {
          p.instance.effect(0, h.Audio.BtnClick);
          var t = h.GAME_TIPS.Tip;
          this.stopHandler(t), this.tipsNormal.active = !1
        }, t
      }(A)).prototype, "root", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), R = t(B.prototype, "tipBetLocked", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), W = t(B.prototype, "tipBetNow", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), x = t(B.prototype, "tipPay", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), H = t(B.prototype, "optBetLocked", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), V = t(B.prototype, "tipsNormal", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), z = t(B.prototype, "tipsNormalClose", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), F = t(B.prototype, "lblTipsNormalTxt", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), K = t(B.prototype, "extraPaySpine", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Y = t(B.prototype, "betNowSpine", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), j = t(B.prototype, "betLockedSpine", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), U = B)) || U) || U));
      a._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/pfUpDownBetOperation.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ge.ts", "./custom-general.ts", "./GameManager.ts", "./interface12.ts", "./UDConstant.ts", "./UDEvent.ts", "./ReportManager.ts", "./general.ts", "./ui2d.ts", "./UIBase.ts"], (function (t) {
  var e, n, i, r, a, s, o, u, c, g, l, _, E, d, h, b, p, S, A, T, m, D, k, B;
  return {
    setters: [function (t) {
      e = t.applyDecoratedDescriptor, n = t.inheritsLoose, i = t.initializerDefineProperty, r = t.assertThisInitialized
    }, function (t) {
      a = t.cclegacy, s = t._decorator, o = t.Node, u = t.SpriteFrame, c = t.log, g = t.Sprite
    }, function (t) {
      l = t.gui
    }, function (t) {
      _ = t.grayNodeState
    }, function (t) {
      E = t.gameMgr
    }, function (t) {
      d = t.EOperateBtnType, h = t.EOperateType
    }, function (t) {
      b = t.TrackPageViewEvent, p = t.TrackClickEvent, S = t.TrackClickName, A = t.UDConstant
    }, function (t) {
      T = t.UDEvent
    }, function (t) {
      m = t.reportMgr
    }, function (t) {
      D = t.gutil_char
    }, function (t) {
      k = t.ui2d
    }, function (t) {
      B = t.UIBase
    }],
    execute: function () {
      var f, O, R, U, C, v, N, I, M, P, L, y, G, w, z, F, W, q, H;
      a._RF.push({}, "3e12ckRuOxEPYfYKRGmb5AQ", "pfUpDownBetOperation", void 0);
      var K = s.ccclass,
        x = s.property;
      t("pfUpDownBetOperation", (f = K("pfUpDownBetOperation"), O = x(o), R = x(o), U = x(o), C = x(o), v = x(o), N = x(o), I = x(o), M = x([u]), f((y = e((L = function (t) {
        function e() {
          for (var e, n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
          return e = t.call.apply(t, [this].concat(a)) || this, i(e, "btnDouble", y, r(e)), i(e, "btnUndo", G, r(e)), i(e, "btnAgain", w, r(e)), i(e, "btnAuto", z, r(e)), i(e, "btnStop", F, r(e)), i(e, "btnStart", W, r(e)), i(e, "btnClear", q, r(e)), i(e, "btnSpfs", H, r(e)), e.udgmgr = void 0, e._clickDoubleTimes = 0, e
        }
        n(e, t);
        var a = e.prototype;
        return a.onLoad = function () {
          this.on([T.BET_RECORD_CHANGE, T.BET_COUNT_DOWN_START, T.BET_COUNT_UPDATE, T.GAME_ROUND_INIT, T.AUTO_BET_STATUS_CHANGE, T.SINGLE_MODEL_AUTO_SETTLE, T.BET_COUNT_DOWN_END, T.USER_BET_RESP_FAIL, T.OPERATE_RESP_FAIL, T.OPERATE_RESP]), this.udgmgr = E.get(), this._addClickEvents(), this._refreshBtn(), this._changeBtnState(this.btnAuto, d.AUTO, !1), this._changeBtnState(this.btnStop, d.STOP, !1)
        }, a._addClickEvents = function () {
          var t = this;
          l.onclick(this.btnDouble, (function () {
            c("on double click!!!"), t.udgmgr.Desk.isBetStatge() && !t.udgmgr.Desk.IsBetTimeEnd && (t.udgmgr.RoundManager.sendOperateRequest(h.DOUBLE), t._clickDoubleTimes++, m.trackClick(b.MAIN, p.OPERATE + "_" + S.OPERATE.DOUBLE, {
              times: t._clickDoubleTimes
            }), t.emit(T.CLICK_DOUBLE))
          }), !0, A.Audio.BtnOptionClick), l.onclick(this.btnUndo, (function () {
            // console.error("下辈子",t.udgmgr.Desk.isBetStatge(),t.udgmgr.Desk.IsBetTimeEnd)
            c("on undo click!!!"), t.udgmgr.Desk.isBetStatge() && !t.udgmgr.Desk.IsBetTimeEnd && (t.udgmgr.RoundManager.sendOperateRequest(h.UNDO), m.trackClick(b.MAIN, p.OPERATE + "_" + S.OPERATE.UNDO), t.emit(T.CLICK_UNDO))
          }), !0, A.Audio.BtnOptionClick), l.onclick(this.btnClear, (function () {
            c("on clear click!!!"), t.udgmgr.Desk.isBetStatge() && !t.udgmgr.Desk.IsBetTimeEnd && t.udgmgr.RoundManager.sendOperateRequest(h.CLEAR)
          }), !0, A.Audio.BtnOptionClick), l.onclick(this.btnAgain, (function () {
            c("on again click!!!"), t.udgmgr.Desk.isBetStatge() && !t.udgmgr.Desk.IsBetTimeEnd && t.udgmgr.Desk.hasLatestRecordBet() && t.udgmgr.RoundManager.reqOperateAgainOrAuto(1) && (t.btnAgain.active = !1, t.btnAuto.active = !0)
          }), !0, A.Audio.BtnOptionClick), l.onclick(this.btnAuto, (function () {
            t.udgmgr.Desk.isAuto = !0, t.btnAuto.active = !1, t.btnStop.active = !0, t.udgmgr.Desk.isSingleModel() && t.udgmgr.Desk.gameStatus == A.ServerGameState.STAGE_BET && t._startSingleSettle(), m.trackClick(b.MAIN, p.OPERATE + "_" + S.OPERATE.AUTO)
          }), !0, A.Audio.BtnOptionClick), l.onclick(this.btnStop, (function () {
            t.udgmgr.Desk.isAuto = !1, t.btnAuto.active = !0, t.btnStop.active = !1, t.udgmgr.Desk.gameStatus == A.ServerGameState.GAMESTART && t._refreshStartBtn(!1)
          }), !0, A.Audio.BtnOptionClick), l.onclick(this.btnStart, (function () {
            0 != t.udgmgr.Desk.CurRoundTotalBet ? t._startSingleSettle() : t.emit(T.VIEW_STATUS_MSG_SHOW, A.GAME_TIPS.Tip, D("UPDOWN_GAME_10"))
          }), !0, A.Audio.BtnOptionClick)
        }, a._startSingleSettle = function () {
          this.udgmgr.RoundManager.sendOperateRequest(h.SETTLE), this._refreshStartBtn(!0)
        }, a._refreshStartBtn = function (t) {
          this.btnStart.getComponent(g).grayscale = t, _(this.btnStart, t, !0)
        }, a._changeBtnAgain = function (t) {
          k.pos(this.btnAgain, {
            y: t ? -25.372 : -300
          })
        }, a._changeBtnAuto = function (t) {
          k.pos(this.btnAuto, {
            y: t ? -25.372 : -300
          })
        }, a._changeBtnStop = function (t) {
          k.pos(this.btnStop, {
            y: t ? -25.372 : -300
          })
        }, a._updateStartBtn = function () {
          this.btnStart.active = this.udgmgr.Desk.isSingleModel()
        }, a._refreshBtn = function () {
          var t = this.udgmgr.Desk.isAuto,
            e = this.udgmgr.Desk.CurRoundTotalBet > 0;
          this.btnAgain.active = !e && !t, this.btnAuto.active = e && !t, this.btnStop.active = t;
          var n = !this.udgmgr.Desk.hasLatestRecordBet() || this.udgmgr.Desk.IsBetTimeEnd;
          this._changeBtnState(this.btnAgain, d.AGAIN, n);
          var i = !e || this.udgmgr.Desk.IsBetTimeEnd;
          this.udgmgr.Desk.isSingleModel() && this.udgmgr.Desk.isAuto && (i = !0), this._changeBtnState(this.btnDouble, d.DOUBLE, i), this._changeBtnState(this.btnUndo, d.UNDO, i), _(this.btnAgain, n, !0), _(this.btnDouble, i, !0), _(this.btnUndo, i, !0)
        }, a._changeBtnState = function (t, e, n) {
          var i = n ? e + 5 : e;
          t.getComponent(g).spriteFrame = this.btnSpfs[i]
        }, a.onEvents = function (t) {
          switch (t) {
            case T.BET_RECORD_CHANGE:
            case T.BET_COUNT_UPDATE:
            case T.AUTO_BET_STATUS_CHANGE:
              this._refreshBtn();
              break;
            case T.BET_COUNT_DOWN_START:
              this._refreshBtn(), this.udgmgr.Desk.isAuto && this.udgmgr.RoundManager.reqOperateAgainOrAuto(2);
              break;
            case T.GAME_ROUND_INIT:
              this._clickDoubleTimes = 0, this._refreshBtn(), this._updateStartBtn();
              var e = !1;
              this.udgmgr.Desk.isSingleModel() && this.udgmgr.Desk.isAuto && (e = !0), this._refreshStartBtn(e);
              break;
            case T.SINGLE_MODEL_AUTO_SETTLE:
              this._startSingleSettle();
              break;
            case T.BET_COUNT_DOWN_END:
            case T.USER_BET_RESP_FAIL:
            case T.OPERATE_RESP_FAIL:
              this._refreshBtn();
              break;
            case T.OPERATE_RESP:
              (arguments.length <= 1 ? void 0 : arguments[1]) == h.SETTLE && this._refreshBtn()
          }
        }, e
      }(B)).prototype, "btnDouble", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), G = e(L.prototype, "btnUndo", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), w = e(L.prototype, "btnAgain", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), z = e(L.prototype, "btnAuto", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), F = e(L.prototype, "btnStop", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), W = e(L.prototype, "btnStart", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), q = e(L.prototype, "btnClear", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), H = e(L.prototype, "btnSpfs", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), P = L)) || P));
      a._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/pfUpDownChip.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ge.ts", "./custom-general.ts", "./Utils3.ts", "./GameManager.ts", "./interface12.ts", "./UDConstant.ts", "./UDEvent.ts", "./UDUtils.ts", "./nodeChipItem.ts", "./ReportManager.ts", "./tilenode.ts", "./UIBase.ts"], (function (i) {
  var t, e, s, n, o, h, c, p, a, l, r, _, u, f, d, C, m, v, g, y, S, b, N, k, w, A, E, L, P, B;
  return {
    setters: [function (i) {
      t = i.applyDecoratedDescriptor, e = i.inheritsLoose, s = i.initializerDefineProperty, n = i.assertThisInitialized
    }, function (i) {
      o = i.cclegacy, h = i._decorator, c = i.Node, p = i.sp, a = i.SpriteFrame, l = i.Vec3, r = i.Tween, _ = i.tween, u = i.instantiate, f = i.Sprite
    }, function (i) {
      d = i.gui
    }, function (i) {
      C = i.cbs, m = i.RandomNum
    }, function (i) {
      v = i.Utils
    }, function (i) {
      g = i.gameMgr
    }, function (i) {
      y = i.EFlyChipPlayerType
    }, function (i) {
      S = i.UDConstant, b = i.TrackPageViewEvent, N = i.TrackClickEvent, k = i.TrackClickName
    }, function (i) {
      w = i.UDEvent
    }, function (i) {
      A = i.UDUtils
    }, function (i) {
      E = i.nodeChipItem
    }, function (i) {
      L = i.reportMgr
    }, function (i) {
      P = i.TileNode
    }, function (i) {
      B = i.UIBase
    }],
    execute: function () {
      var I, D, O, T, U, F, x, R, J, z, H, M, Y, G, Z, V, W, j, K, q, Q, X, $, ii;
      o._RF.push({}, "5969bh/6CNB9ZOWBvT2/9v0", "pfUpDownChip", void 0);
      var ti = h.ccclass,
        ei = h.property,
        si = h.menu;
      i("pfUpDownChip", (I = ti("pfUpDownChip"), D = si("abUpDown/pfUpDownChip"), O = ei(c), T = ei([c]), U = ei(c), F = ei(c), x = ei(c), R = ei(p.Skeleton), J = ei(c), z = ei(c), H = ei(c), M = ei([a]), I(Y = D((Z = t((G = function (i) {
        function t() {
          for (var t, e = arguments.length, o = new Array(e), h = 0; h < e; h++) o[h] = arguments[h];
          return t = i.call.apply(i, [this].concat(o)) || this, s(t, "chipsItem", Z, n(t)), s(t, "chipsNodes", V, n(t)), s(t, "chipNode", W, n(t)), s(t, "panelChips", j, n(t)), s(t, "panelBlock", K, n(t)), s(t, "spine", q, n(t)), s(t, "skelChixu", Q, n(t)), s(t, "blockBg", X, n(t)), s(t, "emptyChip", $, n(t)), s(t, "spfs", ii, n(t)), t._chipList = [], t._selectIndex = 0, t._chipJSList = [], t._curChipNode = null, t.udDesk = null, t._tileNodes = [], t._isPlayAnimation = !1, t._chipJs = null, t._isFirst = !0, t._chipsOriginPos = [], t._openStep = 0, t._closeStep = 0, t._originPosY = 0, t
        }
        e(t, i);
        var o = t.prototype;
        return o.onLoad = function () {
          var i = this;
          this.on([w.CHOOSE_CHIP, w.UPDATE_CHIP_DATA, w.PLAY_SELF_CHIP_FLY, w.GAME_ROUND_INIT, w.USER_BET_RESP_SUCCESS]), this.udDesk = g.get().Desk;
          for (var t = this, e = function (e) {
              i.chipsNodes[e].children.forEach((function (i, s) {
                t._chipsOriginPos[e] = t._chipsOriginPos[e] || [], t._chipsOriginPos[e][s] = v.clone(i.position), t._tileNodes[e] = t._tileNodes[e] || [], t._tileNodes[e][s] = P.tile(i)
              }))
            }, s = 0; s < this.chipsNodes.length; s++) e(s);
          this.emptyChip.active = !1, this.chipNode.active = !1, this._originPosY = this.chipNode.position.y, this._chipJs = this.chipNode.getComponent(E), this._initChipNode(!1), this._addClickEvents()
        }, o.initChip = function () {
          for (var i, t = this._chipList.length, e = 0; e < this.chipsNodes.length; e++) this.chipsNodes[e].active = t == e + 1, e + 1 == t && (i = this.chipsNodes[e]);
          if (i) {
            this._curChipNode = i, this._chipJSList = [];
            for (var s = 0; s < t; s++) {
              var n = this._chipList[s];
              this._addOneChip(this._tileNodes[t - 1][s], n, s, this._chipsOriginPos[t - 1][s])
            }
          }
        }, o._initChipNode = function (i) {
          this.panelBlock.active = !1, this.panelChips.active = !1, this.skelChixu.active = !1, i && (this.emptyChip.active = !0, this.chipNode.setPosition(0, this._originPosY), this.chipNode.scale = new l(1, 1, 1), this._chipJs && this._chipJs.showSelectAnimation(!0, 1), this._refreshEmptyChip()), this.chipNode.scale = new l(1, 1, 1)
        }, o._addClickEvents = function () {
          var i = this;
          d.onclick(this.chipNode, (function () {
            i._refreshLayer()
          }), !1, S.Audio.BtnOptionClick), d.onclick(this.panelBlock, (function () {
            i._refreshLayer()
          }), !1)
        }, o._refreshLayer = function () {
          this._isPlayAnimation || (this._isPlayAnimation = !0, this._showRotate(!1), this._chipJs && this._chipJs.showSelectAnimation(!1), this.panelBlock.active ? this._playCloseAnimation() : this._playOpenAnimation(), this.panelBlock.active = !this.panelBlock.active, this.emit(w.REFRESH_CHIP_SELECT_BLOCK, this.panelBlock.active))
        }, o._playOpenAnimation = function () {
          var i = this;
          this._openStep = 0;
          for (var t = this._chipList.length, e = t - 1, s = e / 2, n = this.chipNode.position, o = 0; o < t; o++) {
            this._tileNodes[e][o].setPosition(n.x - 20 * (s - o), n.y + 50 - 10 * Math.abs(s - o))
          }
          this._showSelect(!1), this.emptyChip.active = !1, r.stopAllByTarget(this.chipNode), this.chipNode.scale = new l(1, 1, 1), _(this.chipNode).to(.1, {
            scale: new l(1.2, 1.2, 1),
            position: new l(0, this._originPosY + 17, 1)
          }).call((function () {
            i.spine.node.active = !0, i.spine.setToSetupPose(), i.spine.setAnimation(0, "chouma_zhankai", !1), i.spine.setCompleteListener(C((function () {
              i.skelChixu.active = !0, i._openAnimationFinished()
            }), !0)), i.panelChips.active = !0, r.stopAllByTarget(i.blockBg), i.blockBg.scale = new l(0, 0, 1), _(i.blockBg).to(.2, {
              scale: new l(1, 1, 1)
            }).call((function () {
              i._openAnimationFinished()
            })).start();
            for (var s = function (t) {
                var s = i._tileNodes[e][t];
                r.stopAllByTarget(s), _(s).to(.2, {
                  position: i._chipsOriginPos[e][t]
                }).call((function () {
                  t == e && (i._showSelect(), i._openAnimationFinished())
                })).start()
              }, n = 0; n < t; n++) s(n)
          })).start()
        }, o._openAnimationFinished = function () {
          this._openStep++, this._openStep < 3 || (this._openStep = 0, this._isPlayAnimation = !1)
        }, o._closeAnimationFinished = function () {
          this._closeStep++, this._closeStep < 2 || (this._closeStep = 0, this._isPlayAnimation = !1)
        }, o._playCloseAnimation = function () {
          var i = this;
          this._closeStep = 0, this.skelChixu.active = !1, r.stopAllByTarget(this.blockBg), _(this.blockBg).to(.1, {
            scale: new l(0, 0, 1)
          }).call((function () {
            r.stopAllByTarget(i.chipNode), _(i.chipNode).to(.1, {
              scale: new l(1, 1, 1),
              position: new l(0, i._originPosY, 1)
            }).call((function () {
              i.panelChips.active = !1, i.emptyChip.active = !0, i._chipJs && i._chipJs.showSelectAnimation(!0, 1), i._closeAnimationFinished()
            })).start()
          })).start();
          for (var t = this._chipList.length, e = t - 1, s = e / 2, n = this.chipNode.position, o = function (o) {
              var h = i._tileNodes[e][o];
              r.stopAllByTarget(h), _(h).to(.2, {
                position: new l(n.x - 20 * (s - o), n.y + 50 - 10 * Math.abs(s - o), 1)
              }).call((function () {
                o == t - 1 && (i._showSelect(), i._closeAnimationFinished())
              })).start()
            }, h = 0; h < t; h++) o(h)
        }, o._addOneChip = function (i, t, e, s) {
          var n = i.find("chipItem");
          n || (n = P.tile(u(this.chipsItem)), i.add(n), n.active = !0, n.name = "chipItem", n.setPosition(s.x, s.y));
          var o = n.node.getComponent(E);
          o && (o.init({
            num: t,
            index: e
          }), o.updteSelectState(e == this._selectIndex), this._chipJSList[e] = o)
        }, o._refreshChip = function (i, t) {
          void 0 === t && (t = !1), this.chipNode.active = !0, t = t || this._isFirst, this._isFirst && (this.emptyChip.active = !0), this._chipJs && (this._chipJs.showChip({
            num: i,
            index: this._selectIndex
          }), this._isFirst && this._chipJs.showSelectAnimation(!0, 1), this._isFirst = !1), t && this._refreshEmptyChip()
        }, o._refreshEmptyChip = function () {
          for (var i = [], t = 0; t < this._chipList.length; t++) i[t] = t;
          var e = i.indexOf(this._selectIndex);
          i.splice(e, 1);
          var s = [],
            n = i.length;
          if (0 == n) s[0] = 1, s[1] = 2;
          else if (1 == n) s[0] = i[0], s[1] = 2;
          else if (2 == n) s[0] = i[0], s[1] = i[1];
          else
            for (var o = n - 1; o >= 0; o--) {
              var h = m(0, i.length - 1);
              if (s.push(i[h]), i.splice(h, 1), s.length >= 2) break
            }
          for (var c = 0; c < this.emptyChip.children.length; c++) this.emptyChip.children[c].getComponent(f).spriteFrame = this.spfs[s[c] || 0]
        }, o._showRotate = function (i) {
          this._chipJs && this._chipJs.playRoateAnimation(i)
        }, o._showSelect = function (i) {
          void 0 === i && (i = !0);
          for (var t = 0; t < this._chipJSList.length; t++) this._chipJSList[t].updteSelectState(this._selectIndex == t, i)
        }, o.onEvents = function (i, t) {
          switch (i) {
            case w.CHOOSE_CHIP:
              if (this._refreshLayer(), this._selectIndex == t) return;
              L.trackClick(b.MAIN, N.OPERATE + "_" + k.OPERATE.CHIP, {
                curChip: this._chipList[t],
                oldChip: this._chipList[this._selectIndex]
              }), this._selectIndex = t, this._refreshChip(this._chipList[t], !0), this.udDesk.CurDefaultChip = this._chipList[t], this._showSelect();
              break;
            case w.UPDATE_CHIP_DATA:
              this._chipList = this.udDesk.AllChipList;
              var e = this.udDesk.CurDefaultChip,
                s = this._chipList.indexOf(e);
              this._selectIndex = s > -1 ? s : 0, this._refreshChip(e), this.initChip();
              break;
            case w.PLAY_SELF_CHIP_FLY:
              var n = [],
                o = {};
              for (var h in t) {
                var c = Number(h),
                  p = t[h],
                  a = A.getEachZoneOnceLimitChipCount(c, y.SELF),
                  l = 0,
                  r = 0;
                if (p > 0) {
                  var _ = this.udDesk.splitBetToChips(p);
                  if (_.length > 0)
                    for (var u = 0; u < _.length; u++) {
                      if (this._chipList.indexOf(_[u].chip) > -1) {
                        var f = this.chipNode.getWorldPosition(),
                          d = _[u].count,
                          C = 0;
                        l + d > a ? (C = a - l, l = a) : (C = d, l += d);
                        var m = _[u].chip,
                          v = p - (r += C * m),
                          g = l >= a;
                        if (C > 0 && n.push({
                            zone: c,
                            chipData: {
                              chip: m,
                              count: C
                            },
                            pos: f,
                            type: y.SELF,
                            remainChip: v,
                            isOverLimit: g
                          }), l >= a) break
                      }
                    }
                } else p < 0 && (o[c] = Math.abs(p))
              }
              n.length > 0 && this.emit(w.FLY_CHIP_TO_BET_ZONE, n, y.SELF), this.emit(w.UNDO_OR_CLEAR_BET, o);
              break;
            case w.GAME_ROUND_INIT:
              !0 === t && this._initChipNode(!0);
              break;
            case w.USER_BET_RESP_SUCCESS:
              this._showRotate(!0)
          }
        }, t
      }(B)).prototype, "chipsItem", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), V = t(G.prototype, "chipsNodes", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), W = t(G.prototype, "chipNode", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), j = t(G.prototype, "panelChips", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), K = t(G.prototype, "panelBlock", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), q = t(G.prototype, "spine", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Q = t(G.prototype, "skelChixu", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), X = t(G.prototype, "blockBg", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), $ = t(G.prototype, "emptyChip", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ii = t(G.prototype, "spfs", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return []
        }
      }), Y = G)) || Y) || Y));
      o._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/pfUpDownCountDown.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioEngine.ts", "./ge.ts", "./UDConstant.ts", "./UDEvent.ts", "./ui2d.ts", "./UIBase.ts"], (function (n) {
  var t, e, i, o, s, a, c, u, r, h, _, l, p, d, D;
  return {
    setters: [function (n) {
      t = n.applyDecoratedDescriptor, e = n.inheritsLoose, i = n.initializerDefineProperty, o = n.assertThisInitialized
    }, function (n) {
      s = n.cclegacy, a = n._decorator, c = n.Label, u = n.sp, r = n.log, h = n.macro
    }, function (n) {
      _ = n.AudioEngine
    }, null, function (n) {
      l = n.UDConstant
    }, function (n) {
      p = n.UDEvent
    }, function (n) {
      d = n.ui2d
    }, function (n) {
      D = n.UIBase
    }],
    execute: function () {
      var T, m, f, C, w, A, v;
      s._RF.push({}, "bbcbarULmVInbe7H2bW1lcu", "pfUpDownCountDown", void 0);
      var S = a.ccclass,
        b = a.property;
      n("pfUpDownCountDown", (T = S("pfUpDownCountDown"), m = b(c), f = b(u.Skeleton), T((A = t((w = function (n) {
        function t() {
          for (var t, e = arguments.length, s = new Array(e), a = 0; a < e; a++) s[a] = arguments[a];
          return t = n.call.apply(n, [this].concat(s)) || this, i(t, "lbTime", A, o(t)), i(t, "spine", v, o(t)), t._remainSec = 0, t._eventName = "", t
        }
        e(t, n);
        var s = t.prototype;
        return s.onLoad = function () {
          this.on([p.BET_COUNT_DOWN_START, p.GAME_TOAST_CLOCK_STOP, p.GAME_TOAST_CLOCK_UPDATE, p.GAME_ROUND_INIT]), this.node.active = !1, r("pfUpDownCountDown onLoad!!!")
        }, s._initOneRound = function () {
          this.node.active = !1
        }, s.startCountDown = function (n, t) {
          !n || n < 0 || (this.unschedule(this._countDown), this._remainSec = n, this._eventName = t, this._updateTime(), this.schedule(this._countDown, 1, h.REPEAT_FOREVER))
        }, s._countDown = function (n) {
          this._remainSec--, this._remainSec <= 0 ? (this.unschedule(this._countDown), this.emit(this._eventName)) : this._updateTime()
        }, s._updateTime = function () {
          this.lbTime.string = this._remainSec <= 3 ? "" : "" + this._remainSec, this._remainSec >= 1 && this._remainSec <= 3 ? this.spine.setAnimation(0, "end_" + this._remainSec, !1) : this.spine.setAnimation(0, "stand", !0)
        }, s._refreshTime = function (n) {
          this.node.active = !0, this.lbTime.string = n <= 3 ? "" : "" + n, n >= 1 && n <= 3 ? this.spine.setAnimation(0, "end_" + n, !1) : this.spine.setAnimation(0, "stand", !0)
        }, s.onEvents = function (n) {
          switch (n) {
            case p.BET_COUNT_DOWN_START:
              break;
            case p.GAME_TOAST_CLOCK_UPDATE:
              this.onUpdateCountDownClock(arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]);
              break;
            case p.GAME_TOAST_CLOCK_STOP:
              this.onStopCountDownClock(arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]);
              break;
            case p.GAME_ROUND_INIT:
              this._initOneRound()
          }
        }, s.onUpdateCountDownClock = function (n, t, e) {
          if (n == l.CountDown.BetStart) {
            this.node.active = !0, 3 == t && _.instance.effect(0, l.Audio.CountDownThree);
            var i = t >= 10 && t <= 19 ? -5 : 0;
            d.pos(this.lbTime.node, {
              x: i
            }), this.lbTime.string = t <= 3 ? "" : "" + t, t >= 1 && t <= 3 ? this.spine.setAnimation(0, "end_" + t, !1) : this.spine.setAnimation(0, "stand", !0)
          }
        }, s.onStopCountDownClock = function (n, t, e) {
          n == l.CountDown.BetStart && (this.node.active = !1)
        }, t
      }(D)).prototype, "lbTime", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), v = t(w.prototype, "spine", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), C = w)) || C));
      s._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/pfUpDownDiceCup.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./lodash.mjs_cjs=&original=.js", "./AudioEngine.ts", "./ge.ts", "./custom-general.ts", "./GameManager.ts", "./UDConstant.ts", "./UDEvent.ts", "./ETw.ts", "./lodash.js", "./UIBase.ts"], (function (i) {
  var e, n, t, s, a, o, p, r, _, c, d, l, h, u, g, f;
  return {
    setters: [function (i) {
      e = i.applyDecoratedDescriptor, n = i.inheritsLoose, t = i.initializerDefineProperty, s = i.assertThisInitialized
    }, function (i) {
      a = i.cclegacy, o = i._decorator, p = i.sp, r = i.warn
    }, null, function (i) {
      _ = i.AudioEngine
    }, null, function (i) {
      c = i.cbs
    }, function (i) {
      d = i.gameMgr
    }, function (i) {
      l = i.UDConstant
    }, function (i) {
      h = i.UDEvent
    }, function (i) {
      u = i.ETw
    }, function (i) {
      g = i.default
    }, function (i) {
      f = i.UIBase
    }],
    execute: function () {
      var y, m, D, A, T, E, v, S, k, C, b, w, R;
      a._RF.push({}, "b2f0fELn9RDaZum8yCnrP4L", "pfUpDownDiceCup", void 0);
      var O = o.ccclass,
        x = o.property;
      i("pfUpDownDiceCup", (y = O("pfUpDownDiceCup"), m = x(p.Skeleton), D = x(p.Skeleton), A = x(p.Skeleton), T = x(p.Skeleton), E = x(p.Skeleton), y((k = e((S = function (i) {
        function e() {
          for (var e, n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
          return e = i.call.apply(i, [this].concat(a)) || this, t(e, "spine_dixiayidong", k, s(e)), t(e, "spine_light", C, s(e)), t(e, "spine_dice1", b, s(e)), t(e, "spine_dice2", w, s(e)), t(e, "spine_gai", R, s(e)), e._isDice1End = !1, e._isDice2End = !1, e._isFirst = !0, e
        }
        n(e, i);
        var a = e.prototype;
        return a.onLoad = function () {
          this.on([h.LOTTERY_FIRST_STEP, h.GAME_TOAST_CLOCK_STOP, h.GAME_ROUND_INIT, h.HISTORY_RECORD_UPDATE]), this._initOneRound(!0)
        }, a.resetDiceToFirstFrame = function (i, e) {
          void 0 === i && (i = 0), void 0 === e && (e = 0), i = i || 0, e = e || 0, this.spine_dixiayidong.setToSetupPose(), this.spine_dixiayidong.setAnimation(0, "yao_dixiadong2", !1), this.spine_gai.setAnimation(0, "gai_dj", !0);
          var n = i >= 1 && i <= 6;
          n && (this.spine_dice1.setAnimation(0, "yao_sz" + i, !1), this.spine_dice1.onRestore(), this.spine_dice1.paused = !0), this.spine_dice1.node.active = n;
          var t = e >= 1 && e <= 6;
          t && (this.spine_dice2.setAnimation(0, "yao_ysz" + e, !1), this.spine_dice2.onRestore(), this.spine_dice2.paused = !0), this.spine_dice2.node.active = t
        }, a._initOneRound = function (i) {
          var e = this;
          void 0 === i && (i = !1), i ? (this._isFirst = !0, this.resetDiceToFirstFrame()) : (this.spine_gai.setAnimation(0, "gai_gais", !1), this.spine_gai.setCompleteListener(c((function (i) {
            "gai_gais" == (!!i.animation && i.animation.name) && e.spine_gai.setAnimation(0, "gai_dj", !0)
          }), this))), u.fadeTo(this.spine_light, 0, 0)
        }, a._playStartAnimation = function (i, e) {
          this._isDice1End = this._isDice2End = !1, this.spine_dixiayidong.setToSetupPose(), this.spine_dixiayidong.setAnimation(0, "yao_dixiadong", !0), this.spine_dice1.node.active = !0, this.spine_dice2.node.active = !0, this._playDiceAnimation(i, e)
        }, a._playDiceAnimation = function (i, e) {
          var n = this;
          this.spine_dice1.paused = !1, this.spine_dice1.setAnimation(0, "yao_sz" + i, !1), this.spine_dice1.setCompleteListener(c((function () {
            n._isDice1End = !0, n._playOpenAnimation()
          }), this)), this.spine_dice2.paused = !1, this.spine_dice2.setAnimation(0, "yao_ysz" + e, !1), this.spine_dice2.setCompleteListener(c((function () {
            n._isDice2End = !0, n._playOpenAnimation()
          }), this))
        }, a._playOpenAnimation = function () {
          var i = this;
          this._isDice1End && this._isDice2End && (this.emit(h.DICE_CUP_END), this.spine_dixiayidong.setToSetupPose(), this.spine_dixiayidong.setAnimation(0, "yao_dixiadong2", !1), this.spine_gai.setAnimation(0, "gai_dk", !1), this.spine_gai.setEventListener((function (e, n) {
            !!e.animation && e.animation.name && ("sj" == g.get(n, "data.name") && (u.fadeTo(i.spine_light, 0, 255), i.spine_light.setAnimation(0, "dakaig_dk", !1), i.spine_light.addAnimation(0, "dakaig_daiji", !0)))
          })))
        }, a._playShakeAnimation = function () {
          _.instance.effect(0, l.Audio.StartDice);
          var i = d.get().Desk.CurPoints;
          r("dice points = ", i), this._playStartAnimation(i[0], i[1])
        }, a.onEvents = function (i) {
          for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), t = 1; t < e; t++) n[t - 1] = arguments[t];
          var s = n[0];
          n[1];
          switch (i) {
            case h.LOTTERY_FIRST_STEP:
              s == l.CountDown.ShakeDice && this._playShakeAnimation();
              break;
            case h.GAME_TOAST_CLOCK_STOP:
              if (s == l.CountDown.ExtraPayShow) this._playShakeAnimation();
              else if (s == l.CountDown.BetLockedTip) {
                for (var a = n[2].data, o = 0, p = 0; p < a.length; p++)
                  if (s == a[p].key) {
                    o = p;
                    break
                  } var r = a[o + 1];
                r && r.key == l.CountDown.ShakeDice && this._playShakeAnimation()
              }
              break;
            case h.GAME_ROUND_INIT:
              this._initOneRound(s);
              break;
            case h.HISTORY_RECORD_UPDATE:
              if (this._isFirst) {
                this._isFirst = !1, this.spine_dixiayidong.setToSetupPose(), this.spine_dixiayidong.setAnimation(0, "yao_dixiadong2", !1);
                var _ = d.get().Desk.HistoryLotteryRecord,
                  c = (null == _ ? void 0 : _.winInfoList) || [],
                  u = 1,
                  g = 1;
                c.length > 0 && (u = c[c.length - 1].point1, g = c[c.length - 1].point2), this.resetDiceToFirstFrame(u, g)
              }
          }
        }, e
      }(f)).prototype, "spine_dixiayidong", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), C = e(S.prototype, "spine_light", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), b = e(S.prototype, "spine_dice1", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), w = e(S.prototype, "spine_dice2", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), R = e(S.prototype, "spine_gai", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), v = S)) || v));
      a._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/pfUpDownFlyChips.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ge.ts", "./GameManager.ts", "./interface12.ts", "./UDConstant.ts", "./UDEvent.ts", "./nodeFlyChipItem.ts", "./nodeSmallChipItem.ts", "./UIBase.ts"], (function (t) {
  var e, i, n, s, o, a, l, h, p, r, _, C, m, c, u, I, g, y, f, b, d, v;
  return {
    setters: [function (t) {
      e = t.applyDecoratedDescriptor, i = t.inheritsLoose, n = t.initializerDefineProperty, s = t.assertThisInitialized
    }, function (t) {
      o = t.cclegacy, a = t._decorator, l = t.Prefab, h = t.NodePool, p = t.instantiate, r = t.UITransform, _ = t.randomRange, C = t.v3, m = t.Tween, c = t.tween
    }, null, function (t) {
      u = t.gameMgr
    }, function (t) {
      I = t.EFlyChipPlayerType, g = t.EOperateType
    }, function (t) {
      y = t.UDConstant
    }, function (t) {
      f = t.UDEvent
    }, function (t) {
      b = t.nodeFlyChipItem
    }, function (t) {
      d = t.nodeSmallChipItem
    }, function (t) {
      v = t.UIBase
    }],
    execute: function () {
      var E, S, P, F, T, x, D;
      o._RF.push({}, "75ace0lpxdFtJ8z5eM1NpDX", "pfUpDownFlyChips", void 0);
      var L = a.ccclass,
        R = a.property;
      t("pfUpDownFlyChips", (E = L("pfUpDownFlyChips"), S = R(l), P = R(l), E((x = e((T = function (t) {
        function e() {
          for (var e, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
          return e = t.call.apply(t, [this].concat(o)) || this, n(e, "bigChipItem", x, s(e)), n(e, "smallChipItem", D, s(e)), e._bigChipItemPool = void 0, e._bigChipItems = [], e._bigChipIndex = 0, e._smallChipItemPool = void 0, e._smallChipItems = [], e._smallChipIndex = 0, e._isClear = !1, e
        }
        i(e, t);
        var o = e.prototype;
        return o.onLoad = function () {
          this.on([f.SHOW_FLY_CHIPS, f.GAME_ROUND_INIT, f.GAME_TOAST_CLOCK_STOP, f.OPERATE_RESP, f.USER_BET_RESP_SUCCESS]), this._bigChipItemPool = new h, this._smallChipItemPool = new h
        }, o._playChipFlyToBetZoneAnimation = function (t) {
          var e = this;
          if (!this._isClear) {
            var i, n = t.type,
              s = t.addPos,
              o = t.chipNum;
            if (n == I.SELF ? (i = this._bigChipItemPool.get()) || (i = p(this.bigChipItem)) : (i = this._smallChipItemPool.get()) || (i = p(this.smallChipItem)), i.name = n == I.SELF ? "" + this._bigChipIndex : "" + this._smallChipIndex, n == I.SELF) {
              this._bigChipIndex++, this._bigChipItems.push(i);
              var a = i.getComponent(b);
              a && a.showFlyChip(o)
            } else {
              this._smallChipIndex++, this._smallChipItems.push(i);
              var l = i.getComponent(d);
              l && l.showItem(o, n)
            }
            var h = this.node.getComponent(r).convertToNodeSpaceAR(t.startPos);
            i.setPosition(h), this.node.addChild(i);
            var _ = n == I.SELF ? .42 : 1,
              C = s.x - h.x,
              m = s.y - h.y,
              c = Math.sqrt(C * C + m * m),
              u = (I.SELF, 1500);
            this._bezierMove(i, c / u, h, s, _, (function () {
              for (var s = n == I.SELF ? e._bigChipItems : e._smallChipItems, o = 0; o < s.length; o++)
                if (i.name == s[o].name) {
                  s.splice(o, 1);
                  break
                } n == I.SELF ? e._bigChipItemPool.put(i) : e._smallChipItemPool.put(i), e._isClear && n == I.SELF || e.emit(f.FLY_CHIPS_END, t)
            }), n)
          }
        }, o._bezierMove = function (t, e, i, n, s, o, a) {
          var l = Math.abs(n.x - i.x),
            h = 0;
          h = l > 250 ? _(230, l - 10) : l > 200 ? _(180, l - 10) : l > 120 ? _(100, l - 10) : l > 90 ? _(l - 10, l) : _(l + 30, l + 60), n.x - i.x < 0 && (h = 0 - h);
          var p = Math.abs(n.y - i.y),
            r = Math.min(80, p);
          p > 500 ? r = 200 : p > 400 && (r = 120), n.y - i.y < 0 && (r = 0 - r);
          var u = C(i.x + h, i.y + r, 0),
            I = C();
          m.stopAllByTarget(t), c(t).to(e, {
            position: n,
            scale: C(s, s, 1)
          }, {
            onUpdate: function (e, s) {
              var o, a, l, h, p;
              o = s, a = i, l = u, h = n, (p = I).x = (1 - o) * (1 - o) * a.x + 2 * o * (1 - o) * l.x + o * o * h.x, p.y = (1 - o) * (1 - o) * a.y + 2 * o * (1 - o) * l.y + o * o * h.y, p.z = (1 - o) * (1 - o) * a.z + 2 * o * (1 - o) * l.z + o * o * h.z, t.setPosition(I)
            }
          }).call((function () {
            o && o()
          })).start()
        }, o._getZoneChipRange = function (t) {
          var e = [];
          switch (t) {
            case 0:
              e = [-90, 75, -30, 75];
              break;
            case 1:
              e = [-75, 90, -30, 75];
              break;
            case 7:
              e = [-60, 60, -20, 50];
              break;
            default:
              e = [-45, 45, -35, 45]
          }
          return e
        }, o._stopFly = function () {
          this._bigChipIndex = 0, this._smallChipIndex = 0;
          for (var t = 0; t < this._bigChipItems.length; t++) {
            var e = this._bigChipItems[t];
            e.name = "", m.stopAllByTarget(e), this._bigChipItemPool.put(e)
          }
          for (var i = 0; i < this._smallChipItems.length; i++) {
            var n = this._smallChipItems[i];
            n.name = "", m.stopAllByTarget(n), this._smallChipItemPool.put(n)
          }
          this._bigChipItems = [], this._smallChipItems = []
        }, o._initOneRound = function () {
          this._isClear = !1, this._stopFly()
        }, o.onEvents = function (t) {
          var e = this;
          switch (t) {
            case f.SHOW_FLY_CHIPS:
              this._playChipFlyToBetZoneAnimation(arguments.length <= 1 ? void 0 : arguments[1]);
              break;
            case f.GAME_ROUND_INIT:
              this._initOneRound();
              break;
            case f.GAME_TOAST_CLOCK_STOP:
              y.CountDown.BetStart;
              break;
            case f.OPERATE_RESP:
              this._isClear = (arguments.length <= 1 ? void 0 : arguments[1]) == g.CLEAR, (arguments.length <= 1 ? void 0 : arguments[1]) == g.SETTLE && (u.get().Desk.isAuto ? this.scheduleOnce((function () {
                e._stopFly()
              }), 2) : this._stopFly());
              break;
            case f.USER_BET_RESP_SUCCESS:
              this._isClear = !1
          }
        }, o.onDestroy = function () {
          t.prototype.onDestroy.call(this), this._bigChipItemPool.clear()
        }, e
      }(v)).prototype, "bigChipItem", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), D = e(T.prototype, "smallChipItem", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), F = T)) || F));
      o._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/pfUpDownSettle.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioEngine.ts", "./ge.ts", "./custom-general.ts", "./GameManager.ts", "./UDConstant.ts", "./UDEvent.ts", "./nodeCoinFlyItem.ts", "./nodeExtraPayItem.ts", "./nodeWinAnimation.ts", "./UIBase.ts", "./tilenode.ts"], (function (t) {
  var e, n, i, o, a, r, l, s, c, m, _, h, u, f, y, p, I, d, A, P, v, g, w, E, C, T, x;
  return {
    setters: [function (t) {
      e = t.applyDecoratedDescriptor, n = t.inheritsLoose, i = t.initializerDefineProperty, o = t.assertThisInitialized
    }, function (t) {
      a = t.cclegacy, r = t._decorator, l = t.Node, s = t.Prefab, c = t.NodePool, m = t.Tween, _ = t.instantiate, h = t.UITransform, u = t.log, f = t.math, y = t.Vec3, p = t.tween
    }, function (t) {
      I = t.AudioEngine
    }, null, function (t) {
      d = t.nodelink
    }, function (t) {
      A = t.gameMgr
    }, function (t) {
      P = t.UDConstant
    }, function (t) {
      v = t.UDEvent
    }, function (t) {
      g = t.nodeCoinFlyItem
    }, function (t) {
      w = t.nodeExtraPayItem
    }, function (t) {
      E = t.nodeWinAnimation
    }, function (t) {
      C = t.UIBase
    }, function (t) {
      T = t.TileNode, x = t.NODE_BASE
    }],
    execute: function () {
      var L, S, b, D, N, R, W, O, k, M, U, z, G, F;
      a._RF.push({}, "eb7bdAvKdNC+ZseMbFPUHYj", "pfUpDownSettle", void 0);
      var Y = r.ccclass,
        H = r.property,
        B = r.menu;
      t("pfUpDownSettle", (L = Y("pfUpDownSettle"), S = B("abUpDown/pfUpDownSettle"), b = H(l), D = H(l), N = H(s), R = H(s), W = H(s), L(O = S((M = e((k = function (t) {
        function e() {
          for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
          return e = t.call.apply(t, [this].concat(a)) || this, i(e, "extraPayLayer", M, o(e)), i(e, "winLayer", U, o(e)), i(e, "winAniItem", z, o(e)), i(e, "flyCoinItem", G, o(e)), i(e, "extraPayItem", F, o(e)), e._extraPayItemPool = void 0, e._winAniItemPool = void 0, e._flyCoinItemPool = void 0, e._extraPayItems = [], e._winAniItems = [], e._flyCoinEnd = !1, e._totalWin = 0, e._checkList = [], e._flyCoinItems = [], e._coinCount = 0, e
        }
        n(e, t);
        var a = e.prototype;
        return a.onLoad = function () {
          this.on([v.GAME_ROUND_INIT, v.TO_SETTLE_PLAY_EXTRA_PAY, v.TO_SETTLE_PLAY_SETTLE_ANIMATION, v.GAME_OVER]), this._extraPayItemPool = new c, this._winAniItemPool = new c, this._flyCoinItemPool = []
        }, a.initOneRound = function () {
          this._coinCount = 0, this._cycleExtraPayItem(), this._cycleWinItem(), this._cycleFlyCoinItem()
        }, a._cycleExtraPayItem = function (t) {
          t = t || [];
          for (var e = this._extraPayItems.length - 1; e >= 0; e--) {
            for (var n = !0, i = this._extraPayItems[e], o = 0; o < t.length; o++) i.name === "zone_extrapay_" + t[o] && (n = !1);
            n && (i.name = "", this._extraPayItemPool.put(i), this._extraPayItems.splice(e, 1))
          }
        }, a._cycleWinItem = function () {
          for (var t = this._winAniItems.length - 1; t >= 0; t--) {
            var e = this._winAniItems[t];
            e.name = "", this._winAniItemPool.put(e), this._winAniItems.splice(t, 1)
          }
          this._winAniItems = []
        }, a._cycleFlyCoinItem = function () {
          for (var t = this._flyCoinItems.length - 1; t >= 0; t--) {
            var e = this._flyCoinItems[t];
            e.name = "", e.parent = null, m.stopAllByTarget(e), this._flyCoinItemPool.push(e), this._flyCoinItems.splice(t, 1)
          }
          this._flyCoinItems = []
        }, a._showWinAnimationOnlySelfWin = function (t) {
          var e, n, i = this;
          this._flyCoinEnd = !1;
          var o = A.get().Desk.getGameSettingData();
          this._totalWin = (null == o || null == (e = o.selfWin) ? void 0 : e.totalWin) || 0, this._checkList = (null == o ? void 0 : o.checklist) || [];
          for (var a = (null == o ? void 0 : o.winZone) || [], r = (null == o || null == (n = o.selfWin) ? void 0 : n.winlist) || [], l = [], s = 0; s < r.length; s++) r[s] > 0 && l.push(s);
          var c = function () {
            for (var e = !1, n = 0; n < t.length; n++) {
              var o = t[n];
              if (o.endPos) {
                e = !0;
                var a = i.winLayer.getComponent(h).convertToNodeSpaceAR(o.startPos);
                i._playCoinAnim(a, i.winLayer.getComponent(h).convertToNodeSpaceAR(o.endPos))
              }
            }
            e && I.instance.effect(0, P.Audio.ChouMaFly)
          };
          if (l.length > 0) {
            for (var m = 0; m < l.length; m++)
              for (var _ = 0; _ < t.length; _++) {
                var u = l[m];
                if (a.indexOf(u) > -1 && u == t[_].zone) {
                  this._playSettleAnimationNew(u, t[_].startPos);
                  break
                }
              }
            I.instance.effect(0, P.Audio.WinCoin), this.scheduleOnce((function () {
              c()
            }), 1.5)
          } else c();
          this.emit(v.SHOW_YELLOW_FRAME, a)
        }, a._playSettleAnimationNew = function (t, e) {
          var n = this,
            i = this._winAniItemPool.get();
          i || (i = _(this.winAniItem)), i.name = "zone_winani_" + t, this._winAniItems.push(i);
          var o = this.winLayer.getComponent(h).convertToNodeSpaceAR(e);
          i.setPosition(o), this.winLayer.addChild(i);
          var a = A.get().Desk,
            r = Math.floor((a.CurTableOdds[t] || 0) / P.RATEWEIGHT),
            l = Math.floor((a.CurDoubleNums[t] || 0) / P.RATEWEIGHT);
          u("_playSettleAnimation odd rate = ", r), u("_playSettleAnimation double rate = ", l);
          var s = r;
          l > 1 && (s *= l);
          var c = i.getComponent(E);
          c && c.playAnimation(s, t), this.scheduleOnce((function () {
            n._winAniItemPool.put(i);
            for (var t = n._winAniItems.length - 1; t >= 0; t--)
              if (n._winAniItems[t].name == i.name) {
                n._winAniItems.splice(t, 1);
                break
              }
          }), 1.5)
        }, a._showWinAnimaiton = function (t) {
          var e = this;
          this._flyCoinEnd = !1;
          for (var n = A.get().Desk.getGameSettingData(), i = (null == n ? void 0 : n.winZone) || [], o = 0; o < i.length; o++)
            for (var a = 0; a < t.length; a++)
              if (i[o] == t[a].zone) {
                this._playSettleAnimationNew(i[o], t[a].startPos);
                break
              } this.scheduleOnce((function () {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              if (i.endPos) {
                var o = e.winLayer.getComponent(h).convertToNodeSpaceAR(i.startPos);
                e._playCoinAnim(o, e.winLayer.getComponent(h).convertToNodeSpaceAR(i.endPos))
              }
            }
          }), 1.5)
        }, a._playSettleAnimation = function (t) {
          var e = this,
            n = this._winAniItemPool.get();
          n || (n = _(this.winAniItem));
          var i = this.winLayer.getComponent(h).convertToNodeSpaceAR(t.startPos);
          n.setPosition(i), this.winLayer.addChild(n);
          var o = A.get().Desk,
            a = t.zone,
            r = Math.floor((o.CurTableOdds[a] || 0) / P.RATEWEIGHT),
            l = Math.floor((o.CurDoubleNums[a] || 0) / P.RATEWEIGHT);
          u("_playSettleAnimation odd rate = ", r), u("_playSettleAnimation double rate = ", l);
          var s = r;
          l > 1 && (s *= l);
          var c = n.getComponent(E);
          c && c.playAnimation(s, a), this.scheduleOnce((function () {
            e._winAniItemPool.put(n), t.endPos && e._playCoinAnim(i, e.winLayer.getComponent(h).convertToNodeSpaceAR(t.endPos))
          }), 1.5)
        }, a._playCoinAnim = function (t, e) {
          for (var n = this, i = 0, o = function () {
              var o = n._flyCoinItemPool.shift();
              if (!o) {
                var r = _(n.flyCoinItem);
                o = T.creat(r)
              }
              n._coinCount++, o.name = "coin_" + n._coinCount, o.position = t, o.parent = n.winLayer, o.scale = new y(1, 1, 1), n._flyCoinItems.push(o), m.stopAllByTarget(o), p(o).call((function () {
                d(x, o, g).playAnimation()
              })).to(.3, {
                position: new y(t.x + n._randomPos(), t.y + n._randomPos(), 0)
              }).delay(.03 * a).to(.6, {
                position: new y(e.x, e.y, 0),
                scale: new y(.5, .5, 1)
              }).call((function () {
                for (var t = n._flyCoinItems.length - 1; t >= 0; t--)
                  if (n._flyCoinItems[t].name == o.name) {
                    n._flyCoinItems.splice(t, 1);
                    break
                  } i++, o.parent = null, n._flyCoinItemPool.push(o), 1 === i ? n.emit(v.FLY_COIN_FIRST_END, n._totalWin, n._checkList) : i >= 18 && (n._flyCoinEnd || (n._flyCoinEnd = !0, n.emit(v.VIEW_PLAYER_BALANCE_UPDATE), n.emit(v.FLY_COIN_END, n._totalWin, n._checkList)))
              })).start()
            }, a = 0; a < 18; a++) o()
        }, a._randomPos = function () {
          return f.randomRangeInt(0, 201) - 100
        }, a._showExtraPay = function (t) {
          for (var e = 0; e < t.length; e++) this._addExtraPayItem(t[e]);
          I.instance.effect(0, P.Audio.SpecialBet)
        }, a._addExtraPayItem = function (t) {
          var e = this._extraPayItemPool.get();
          e || (e = _(this.extraPayItem)), e.name = "zone_extrapay_" + t.zone;
          var n = this.extraPayLayer.getComponent(h).convertToNodeSpaceAR(t.pos);
          e.setPosition(n), this.extraPayLayer.addChild(e);
          var i = e.getComponent(w);
          i && (i.initData(t.rate / P.RATEWEIGHT + "x"), i.runAnimation()), this._extraPayItems.push(e)
        }, a._showExtraPayRotate = function () {
          for (var t = A.get().Desk.CurDoubleNums, e = A.get().Desk.getGameSettingData(), n = (null == e ? void 0 : e.winZone) || [], i = (null == e || e.selfWin, []), o = 0; o < n.length; o++) {
            var a = n[o];
            if (t[a] > P.RATEWEIGHT)
              for (var r = 0; r < this._extraPayItems.length; r++) {
                var l = this._extraPayItems[r];
                if (l.name === "zone_extrapay_" + a) {
                  i.push(a);
                  var s = l.getComponent(w);
                  s && s.playRotateAnimation(1 == i.length)
                }
              }
          }
          i.length > 0 ? (I.instance.effect(0, P.Audio.WinDouble), this._cycleExtraPayItem(i)) : this.emit(v.SHOW_WIN_ANIMATION)
        }, a.onEvents = function (t) {
          switch (t) {
            case v.GAME_ROUND_INIT:
              this.initOneRound();
              break;
            case v.TO_SETTLE_PLAY_EXTRA_PAY:
              this._showExtraPay(arguments.length <= 1 ? void 0 : arguments[1]);
              break;
            case v.TO_SETTLE_PLAY_SETTLE_ANIMATION:
              this._showWinAnimationOnlySelfWin(arguments.length <= 1 ? void 0 : arguments[1]), this._cycleExtraPayItem(arguments.length <= 1 ? void 0 : arguments[1]);
              break;
            case v.GAME_OVER:
              this._showExtraPayRotate()
          }
        }, a.onDestroy = function () {
          t.prototype.onDestroy.call(this), this._extraPayItemPool.clear(), this._winAniItemPool.clear(), this._flyCoinItemPool.forEach((function (t) {
            t.isValid && t.destroy()
          })), this._flyCoinItemPool = []
        }, e
      }(C)).prototype, "extraPayLayer", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), U = e(k.prototype, "winLayer", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), z = e(k.prototype, "winAniItem", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), G = e(k.prototype, "flyCoinItem", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), F = e(k.prototype, "extraPayItem", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), O = k)) || O) || O));
      a._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/pfUpRoadLayer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioEngine.ts", "./ge.ts", "./Utils3.ts", "./GameManager.ts", "./UDConstant.ts", "./UDEvent.ts", "./nodeTableRound.ts", "./tilelistview.ts", "./listview-base.ts", "./general.ts", "./UIBase.ts"], (function (t) {
  var e, i, n, o, l, a, r, s, c, u, d, h, f, p, g, v, b, S, w, R, L, D, m;
  return {
    setters: [function (t) {
      e = t.applyDecoratedDescriptor, i = t.inheritsLoose, n = t.initializerDefineProperty, o = t.assertThisInitialized
    }, function (t) {
      l = t.cclegacy, a = t._decorator, r = t.Node, s = t.Label, c = t.RichText, u = t.ScrollView, d = t.warn
    }, function (t) {
      h = t.AudioEngine
    }, function (t) {
      f = t.gui
    }, function (t) {
      p = t.Utils
    }, function (t) {
      g = t.gameMgr
    }, function (t) {
      v = t.UDConstant
    }, function (t) {
      b = t.UDEvent
    }, function (t) {
      S = t.nodeTableRound
    }, function (t) {
      w = t.TileListView
    }, function (t) {
      R = t.ListViewDir
    }, function (t) {
      L = t.sprintf_g, D = t.gutil_char
    }, function (t) {
      m = t.UIBase
    }],
    execute: function () {
      var _, y, I, B, x, C, E, T, U, k, V, O, N, z, P, A, H, W, M, G, Y, F, j, Z;
      l._RF.push({}, "9affc6S9V5EILW3rLYatZCp", "pfUpRoadLayer", void 0);
      var q = a.ccclass,
        J = a.property,
        K = a.menu;
      t("pfUpRoadLayer", (_ = q("pfUpRoadLayer"), y = K("abUpDown/pfUpRoadLayer"), I = J(r), B = J(s), x = J(s), C = J(s), E = J(c), T = J(u), U = J(r), k = J(r), V = J(r), O = J(r), _(N = y((P = e((z = function (t) {
        function e() {
          for (var e, i = arguments.length, l = new Array(i), a = 0; a < i; a++) l[a] = arguments[a];
          return e = t.call.apply(t, [this].concat(l)) || this, n(e, "root", P, o(e)), n(e, "lblSmall", A, o(e)), n(e, "lblBig", H, o(e)), n(e, "lblSeven", W, o(e)), n(e, "tabTip", M, o(e)), n(e, "scrollView", G, o(e)), n(e, "nodeScrollowContent", Y, o(e)), n(e, "cloneNode", F, o(e)), n(e, "nodeBtnLeft", j, o(e)), n(e, "nodeBtnRight", Z, o(e)), e.roladScrollList = null, e.udgmgr = null, e.maxData = 0, e.isScroll = !1, e.isStartCheck = !1, e
        }
        i(e, t);
        var l = e.prototype;
        return l.onLoad = function () {
          this.udgmgr = g.get(), this.root.active = !1, this.initView(), this.on([b.VIEW_INIT_UI, b.GAME_ROUND_INIT, b.HISTORY_RECORD_UPDATE])
        }, l.start = function () {}, l.onEvents = function (t) {
          switch (t) {
            case b.VIEW_INIT_UI:
              this.initView(), this.root.active = !0;
              break;
            case b.GAME_ROUND_INIT:
            case b.HISTORY_RECORD_UPDATE:
              this.initOneRound()
          }
        }, l.initView = function () {
          this.tabTip.string = "", this.updateOddsString(), this.nodeBtnLeft.active = !1, this.nodeBtnRight.active = !1, this.cloneNode.active = !1, this.roladScrollList = new w({
            scrollview: this.scrollView,
            content: this.nodeScrollowContent,
            item_tpl: this.cloneNode,
            cb_host: this,
            gap_y: 4,
            direction: R.Horizontal,
            effect: !1,
            item_setter: this.updateOneItem
          }), this.nodeScrollowContent.removeAllChildren(), this.scrollView.node.on(u.EventType.SCROLLING, p.handler(this, this.onSrolling)), this.scrollView.node.on(u.EventType.SCROLL_ENDED, p.handler(this, this.onSrollEnd))
        }, l.updateOddsString = function (t, e, i) {
          void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), this.lblSmall.string = t + "%", this.lblBig.string = e + "%", this.lblSeven.string = i + "%"
        }, l.initOneRound = function () {
          this.updateRoadView()
        }, l.updateRoadView = function () {
          var t = this.udgmgr.Desk.HistoryLotteryRecord;
          if (!t) return this.updateOddsString(), this.nodeBtnLeft.active = !1, this.nodeBtnRight.active = !1, void(this.scrollView.node.active = !1);
          this.tabTip.string = L(D("ud_table_top_tip"), p.numValueOf(t.handsNum));
          var e = this.udgmgr.Desk.getUpDownSenvenWinRate();
          this.updateOddsString(e.downWin, e.upWin, e.sevenWin), this.scrollView.node.active = !0;
          var i = p.clone(t.winInfoList).slice(0, t.daluIndex),
            n = p.clone(i).reverse();
          this.updateScrollList(n, !1, !0)
        }, l.updateScrollList = function (t, e, i) {
          var n = this;
          void 0 === e && (e = !1), void 0 === i && (i = !1), (t = p.tableVerify(p.clone(t), !0)).forEach((function (e, i) {
            t[i].index = i
          })), this.maxData = t.length - 1, this.maxData < 0 && (this.maxData = 0), this.roladScrollList.set_data(t, e, !i), this.roladScrollList.scroll_to_end(0), this.addSchedulerOnce(.5, (function () {
            n.checkScrollPos()
          }))
        }, l.updateOneItem = function (t, e, i) {
          e = p.tableVerify(e);
          var n = t._nodeTableRound_;
          n || (n = t.node.getComponent(S), t._nodeTableRound_ = n);
          var o = e.index;
          t.DataIndex = o, t.list.forEach((function (t, i) {
            t.node.DataIndex = e.index
          })), n.setPoint(e.point1, e.point2, e.isDouble, e.index == this.maxData, e.index)
        }, l.onSrolling = function () {
          this.isStartCheck = !0
        }, l.onSrollEnd = function () {
          this.isStartCheck = !1, d("滚动停止===>>"), this.checkScrollPos()
        }, l.update = function (t) {
          this.isStartCheck && this.checkScrollPos()
        }, l.getRealSortNodeList = function () {
          var t = this.roladScrollList.listItems,
            e = [];
          return t.forEach((function (t, i) {
            t.node && 1 == t.node.active && e.push(t.node.node)
          })), e.sort((function (t, e) {
            return t.position.x - e.position.x
          })), e
        }, l.checkScrollPos = function () {
          var t = this.getRealSortNodeList(),
            e = t.length;
          if (0 == e) return this.nodeBtnLeft.active = !1, void(this.nodeBtnRight.active = !1);
          var i = t[1],
            n = t[e - 1];
          i ? null != i.DataIndex && (i.DataIndex <= 1 ? this.nodeBtnLeft.active = !1 : i.DataIndex > 14 || this.maxData - 14 > 0 ? this.nodeBtnLeft.active = !0 : this.nodeBtnLeft.active = !1) : this.nodeBtnLeft.active = !1, n ? null != n.DataIndex && (n.DataIndex <= 14 ? this.maxData > 14 ? this.nodeBtnRight.active = !0 : this.nodeBtnRight.active = !1 : n.DataIndex > this.maxData - 14 ? this.maxData - n.DataIndex >= 1 ? this.nodeBtnRight.active = !0 : this.nodeBtnRight.active = !1 : this.nodeBtnRight.active = !0) : this.nodeBtnRight.active = !1
        }, l.onClickScrollowToLeft = function (t) {
          var e = this;
          h.instance.effect(0, v.Audio.BtnClick), this.roladScrollList.scroll_to_start(1), this.addSchedulerOnce(1.01, (function () {
            e.checkScrollPos()
          }))
        }, l.onClickScrollowToRight = function (t) {
          var e = this;
          h.instance.effect(0, v.Audio.BtnClick), this.roladScrollList.scroll_to_end(1), this.addSchedulerOnce(1.01, (function () {
            e.checkScrollPos()
          }))
        }, l.onClickShowHistory = function (t) {
          h.instance.effect(0, v.Audio.BtnClick), f.openBundleLayer(v.Package, "lyUpDownHistory")
        }, e
      }(m)).prototype, "root", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), A = e(z.prototype, "lblSmall", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), H = e(z.prototype, "lblBig", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), W = e(z.prototype, "lblSeven", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), M = e(z.prototype, "tabTip", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), G = e(z.prototype, "scrollView", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Y = e(z.prototype, "nodeScrollowContent", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), F = e(z.prototype, "cloneNode", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), j = e(z.prototype, "nodeBtnLeft", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), Z = e(z.prototype, "nodeBtnRight", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function () {
          return null
        }
      }), N = z)) || N) || N));
      l._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/PlatformGI.ts", ["cc"], (function (e) {
  var t;
  return {
    setters: [function (e) {
      t = e.cclegacy
    }],
    execute: function () {
      t._RF.push({}, "e5f59BW8J5OVYEzLSFNyGqn", "PlatformGI", void 0);
      e("GiGameEvent", function (e) {
        return e.NET_RECONNECT_ROOM = "gievent-net-reconnect-room", e.NET_CLOSE = "gievent-net-close", e.NET_MESSAGE_RECEIVE = "gievent-net-receive", e.NET_MESSAGE_SEND = "gievent-net-send", e.GAME_PUSH_GETMONEY = "gievent-platform-getMoney", e
      }({})), e("PlatformGI", globalThis.gi);
      t._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/Player.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CacheBase.ts", "./Utils3.ts"], (function (t) {
  var i, n, e, s;
  return {
    setters: [function (t) {
      i = t.inheritsLoose
    }, function (t) {
      n = t.cclegacy
    }, function (t) {
      e = t.CacheBase
    }, function (t) {
      s = t.Utils
    }],
    execute: function () {
      n._RF.push({}, "f09d0N6m7RHRbWqz0Ipe4DS", "Player", void 0);
      t("Player", function (t) {
        function n(i) {
          var n;
          return (n = t.call(this, "Player") || this).seatIndex = void 0, n.uid = void 0, n.nick = void 0, n.avatar = void 0, n.sex = void 0, n.money = void 0, n.vipLevel = void 0, n.channel = void 0, n.inviteCode = void 0, n.totalWin = void 0, n.totalOnList = void 0, n.initData(), n
        }
        i(n, t);
        var e = n.prototype;
        return e.initData = function () {
          this.seatIndex = -1, this.uid = null, this.nick = "", this.avatar = "", this.sex = 0, this.money = 0, this.vipLevel = 0, this.channel = "", this.inviteCode = "", this.totalWin = 0, this.totalOnList = 0
        }, e.initByJoinRoom = function (t) {
          this.seatIndex = -1, this.uid = t.uid, this.nick = t.nick, this.avatar = s.nullToDefault(t.avatar, ""), this.sex = t.sex, this.money = t.money, this.vipLevel = t.vipLevel, this.channel = t.channel, this.inviteCode = t.inviteCode, this.totalWin = 0, this.totalOnList = 0
        }, e.updateByRank = function (t, i, n, e, a) {
          this.initByJoinRoom(t), this.money = s.numValueOf(n, 0), this.seatIndex = s.numValueOf(i, -1), this.totalWin = s.numValueOf(e, 0), this.totalOnList = s.numValueOf(a, 0)
        }, e.checkInRank = function () {
          return -1 != this.seatIndex
        }, n
      }(e));
      n._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/RoundManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ge.ts", "./Utils3.ts", "./IManager.ts", "./GameCache.ts", "./GameManager.ts", "./SubGameCache.ts", "./gmgr.ts", "./game_sevenup_proto.mjs_cjs=&original=.js", "./UDCmd.ts", "./UDConstant.ts", "./UDEvent.ts", "./interface12.ts", "./game_sevenup_proto.js", "./general.ts"], (function (e) {
  var t, s, n, i, a, E, o, r, _, u, S, T, h, R, D, c, f, m, l, g, d, P, p;
  return {
    setters: [function (e) {
      t = e.inheritsLoose, s = e.createClass
    }, function (e) {
      n = e.cclegacy, i = e._decorator, a = e.warn, E = e.log, o = e.error
    }, function (e) {
      r = e.gui, _ = e.client_proto, u = e.gnet
    }, function (e) {
      S = e.Utils
    }, function (e) {
      T = e.IManager
    }, function (e) {
      h = e.GameCache
    }, function (e) {
      R = e.gameMgr
    }, function (e) {
      D = e.SubGameCache
    }, function (e) {
      c = e.gmgr
    }, null, function (e) {
      f = e.UDCmd
    }, function (e) {
      m = e.UDConstant
    }, function (e) {
      l = e.UDEvent
    }, function (e) {
      g = e.EOperateType
    }, function (e) {
      d = e.default
    }, function (e) {
      P = e.gutil_char, p = e.PRIORITY
    }],
    execute: function () {
      var O;
      n._RF.push({}, "c30465ixltNkr4hW7VVb3Ac", "RoundManager", void 0);
      var A = i.ccclass;
      e("RoundManager", A("RoundManager")(O = function (e) {
        function n() {
          var t;
          return c.clear("RoundManager"), (t = e.call(this, "RoundManager") || this).curSettingAnimEnd = !0, t.onproto(f), t.on([l.GAME_TOAST_CLOCK_STOP]), t
        }
        t(n, e);
        var i = n.prototype;
        return i.onRecv = function (e, t) {
          var s = t.data;
          switch (e) {
            case f.GAME_STAGE_INFO_PUSH:
              this.notifyGameStatusInfo(s);
              break;
            case f.USER_BET:
              0 === s.result ? (this.emit(l.USER_BET_RESP_SUCCESS, s), this.selfBetChange(s.selfBet), this.Desk.updateMySelfMoney(s.balance)) : (11 == s.result && (this.Desk.isAuto = !1), this.emit(l.USER_BET_RESP_FAIL, s.result));
              break;
            case f.USER_BET_PUSH:
              this.notifyUserBet(s);
              break;
            case f.HISTORY_LOTTERY:
              this.respGetHistoryLottery(s);
              break;
            case f.GET_VIP_BET:
              this.respGetVipBet(s);
              break;
            case f.VIP_SEAT_INFO_PUSH:
              this.notifyVipSeatChange(s);
              break;
            case f.GET_TABLE_LIST:
              this.emit(l.TABLE_LIST_UPDATE, s);
              break;
            case f.CHECKOUT:
              this.Desk.saveGameSettingData(s);
              break;
            case f.USER_OPERATE:
              if (0 == s.result) {
                var n = g.NONE;
                s.opType == d.sevenup.OP_TYPE.OP_TYPE_DOUBLE ? n = g.DOUBLE : s.opType == d.sevenup.OP_TYPE.OP_TYPE_CANCEL ? n = g.UNDO : s.opType == d.sevenup.OP_TYPE.OP_TYPE_CLEAR ? (n = g.CLEAR, this.Desk.gameStatus != m.ServerGameState.STAGE_BET && (this.Desk.isAuto = !1, r.alert({
                  title: P("ud_tips"),
                  content: P("UPDOWN_GAME_14"),
                  enableClose: !1,
                  ok: {
                    text: P("ud_btn_sure"),
                    cb: function () {
                      r.closeAlert("updown")
                    }
                  }
                }, p.ALERT, "updown"))) : s.opType == d.sevenup.OP_TYPE.OP_TYPE_SETTLE && (n = g.SETTLE, this.Desk.IsBetTimeEnd = !0), this.selfBetChange(s.selfBet), this.emit(l.OPERATE_RESP, n), this.Desk.updateMySelfMoney(s.balance)
              } else 11 == s.result && (this.Desk.isAuto = !1), this.emit(l.OPERATE_RESP_FAIL, s.result)
          }
        }, i.onEvents = function (e) {
          var t = arguments.length <= 1 ? void 0 : arguments[1];
          switch (e) {
            case l.GAME_TOAST_CLOCK_STOP:
              t == m.CountDown.BetStart ? (this.Desk.IsBetTimeEnd = !0, this.emit(l.BET_COUNT_DOWN_END)) : t == m.CountDown.UpdateRoundRecord && (a("[aby]开骰子结束了=>是否立马更新本局记录", this.Desk.gameStatus == m.ServerGameState.GAMEOVER), this.curSettingAnimEnd = !0, this.Desk.gameStatus == m.ServerGameState.GAMEOVER && this.emit(l.HISTORY_RECORD_UPDATE))
          }
        }, i.notifyGameStatusInfo = function (e, t) {
          if (void 0 === t && (t = !1), e) {
            var s = e.stage;
            if (s == m.ServerGameState.GAMESTART) {
              if (t) return;
              this.initOneRound(e)
            } else this.Desk.updateGameStatusInfo(e), s == m.ServerGameState.STAGE_BET ? (this.Desk.IsBetTimeEnd = !1, this.Desk.isSingleModel() || this.UpDownManager.StartCountTime(m.CountDown.BetStart, e.continueTime), this.emit(l.BET_COUNT_DOWN_START, m.CountDown.BetStart, e.continueTime)) : s == m.ServerGameState.SETTLE ? this.gameSetting(e) : s == m.ServerGameState.GAMEOVER && this.gameOver(e)
          }
        }, i.initOneRound = function (e) {
          E("===========一局初始化==============="), this.UpDownManager.StopCountTime(null), this.curSettingAnimEnd = !0, this.Desk.initByOneRound(e), this.Desk.updateGameStatusInfo(e), this.emit(l.GAME_ROUND_INIT), this.emit(l.VIEW_TABLE_INFO_UPDATE), this.emit(l.VIEW_PLAYER_INFO_UPDATE, this.Desk.MySelf), this.emit(l.UPDATE_CHIP_DATA)
        }, i.reqOperateAgainOrAuto = function (e) {
          if (1 == e ? a("点击again按钮,是否有上传记录:===>", this.Desk.hasLatestRecordBet()) : 2 == e ? a("自动下注,是否有上传记录:===>", this.Desk.hasLatestRecordBet()) : a("未知操作 ", e, " :===>", this.Desk.hasLatestRecordBet()), !this.Desk.hasLatestRecordBet()) return !1;
          for (var t = [], s = 0; s < this.Desk.RecordLastSelfBet.length; s++) {
            var n = this.Desk.RecordLastSelfBet[s];
            n && t.push({
              zone: s,
              amount: n
            })
          }
          var i = this.sendBetRequest(t);
          return 2 == e && (i ? this.Desk.isSingleModel() && this.emit(l.SINGLE_MODEL_AUTO_SETTLE) : this.Desk.isAuto = !1), i
        }, i.handleLotteryProcess = function () {
          var e = this,
            t = this.Desk.CurStatusContinueTime,
            s = [{
              key: m.CountDown.BetLockedTip,
              time: m.Time.TIP_AUTO_CLOSE
            }, {
              key: m.CountDown.ShakeDice,
              time: m.Time.SHAKE_DICE
            }];
          this.Desk.CurIsDouble && (s = [{
            key: m.CountDown.BetLockedTip,
            time: m.Time.TIP_AUTO_CLOSE
          }, {
            key: m.CountDown.ExtraPayTip,
            time: m.Time.TIP_AUTO_CLOSE
          }, {
            key: m.CountDown.ExtraPayShow,
            time: m.Time.BET_ZONE_EXTRA_PAY
          }, {
            key: m.CountDown.ShakeDice,
            time: m.Time.SHAKE_DICE
          }]);
          var n = 0;
          s.forEach((function (e, t) {
            n += e.time
          })), n > t && a("警告：Serven配置时间:" + t + "小于本地动画播放总时间:" + n);
          for (var i = 0, E = [], o = s.length - 1; o >= 0 && !((i += s[o].time) > t); o--) E.push(s[o]);
          var r = E.reverse(),
            _ = 0;
          r.forEach((function (t, s) {
            _ += t.time, e.UpDownManager.StartCountTime(t.key, _, r)
          }));
          var u = 0;
          r.length > 0 ? (u = _ + m.Time.SHAKE_DICE, this.UpDownManager.StartCountTime(m.CountDown.UpdateRoundRecord, u), this.emit(l.LOTTERY_FIRST_STEP, r[0].key)) : this.UpDownManager.StartCountTime(m.CountDown.UpdateRoundRecord, u)
        }, i.notifyVipSeatChange = function (e) {
          e && e.vipinfoList && this.Desk.updateVipPlayerList(e.vipinfoList)
        }, i.notifyUserBet = function (e) {
          this.selfBetChange(e.selfBet), this.Desk.CurTableBet = e.totalBet, this.Desk.CurSelfBet = e.selfBet, this.Desk.updateBetSpanceInfo();
          var t = this.Desk.LastSelfBetPush.slice();
          this.Desk.LastSelfBetPush = e.selfBet;
          for (var s = {}, n = e.selfBet || [], i = 0; i < n.length; i++) {
            var a = t[i] || 0,
              o = n[i] || 0;
            o > a && (s[i] = o - a)
          }
          E("user bet push self bet change list = ", s), this.emit(l.PLAY_GUEST_CHIP_FLY, e.betinfoList, s)
        }, i.respGetVipBet = function (e) {
          this.emit(l.BET_SPANCE_VIP_LIGHT, e.seatIndex, e.betZone)
        }, i.respGetHistoryLottery = function (e) {
          e && 0 == e.result && this.Desk.updateHistoryLottery(e)
        }, i.sendBetRequest = function (e) {
          if (!e || 0 == e.length) return !1;
          if (this.Desk.getBetToMaxNum(e) == e.length) return a("所有下注达到下注区最大上限", e), this.emit(l.VIEW_TOAST_SHOW, P("UPDOWN_GAME_1"), !0), !1;
          for (var t = 0; t < e.length; t++);
          var s = _.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ROOMSERVER,
            n = d.sevenup.SEVENUP_MSGID.SEVENUP_MSGID_USER_BET_REQ;
          return u.send(f.USER_BET, s, n, {
            betList: e,
            dstid: h.game._get(D.GAME_DEST)
          }), !0
        }, i.sendHistoryLotteryRequest = function (e) {
          var t = _.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ROOMSERVER,
            s = d.sevenup.SEVENUP_MSGID.SEVENUP_MSGID_HISTORY_LOTTERY_REQ;
          u.send(f.HISTORY_LOTTERY, t, s, {
            num: e,
            dstid: h.game._get(D.GAME_DEST)
          })
        }, i.sendGetTableListRequest = function (e) {
          var t = _.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ROOMSERVER,
            s = d.sevenup.SEVENUP_MSGID.SEVENUP_MSGID_GET_TABLE_LIST_REQ;
          u.send(f.GET_TABLE_LIST, t, s, {
            num: e,
            dstid: h.game._get(D.GAME_DEST)
          })
        }, i.sendGetVipBetRequest = function (e) {
          var t = _.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ROOMSERVER,
            s = d.sevenup.SEVENUP_MSGID.SEVENUP_MSGID_GET_VIP_BET_REQ;
          u.send(f.GET_VIP_BET, t, s, {
            seatIndex: e,
            dstid: h.game._get(D.GAME_DEST)
          })
        }, i.sendOperateRequest = function (e) {
          e == g.SETTLE || (this.Desk.isAuto = !1);
          var t = _.SERVER_INNER_MSG_TYPE.SERVER_TYPE_ROOMSERVER,
            s = d.sevenup.SEVENUP_MSGID.SEVENUP_MSGID_USER_OPERATE_REQ;
          u.send(f.USER_OPERATE, t, s, {
            opType: e,
            dstid: h.game._get(D.GAME_DEST)
          })
        }, i.selfBetChange = function (e) {
          var t = this.Desk.CurSelfBet.slice();
          this.Desk.CurSelfBet = e;
          for (var s = {}, n = e || [], i = !1, a = 0; a < n.length; a++) {
            var E = t[a] || 0,
              o = n[a] || 0;
            o != E && (s[a] = o - E, i = !0)
          }
          i && this.emit(l.PLAY_SELF_CHIP_FLY, s)
        }, i.gameSetting = function (e) {
          this.curSettingAnimEnd = !1, this.handleLotteryProcess(), this.emit(l.GAME_STATUS_SETTLE)
        }, i.gameOver = function (e) {
          this.Desk.updateGameSetting();
          for (var t = 0, s = 0; s < this.Desk.CurSelfBet.length; s++) t += this.Desk.CurSelfBet[s];
          t > 0 && (this.Desk.RecordLastSelfBet = S.clone(this.Desk.CurSelfBet));
          var n = {
            point1: this.Desk.CurPoints[0],
            point2: this.Desk.CurPoints[1],
            isDouble: this.Desk.CurIsDouble
          };
          a("=================一局结束==============", (new Date).toString(), Date.now());
          var i = this.Desk.getGameSettingData();
          i ? (this.Desk.addOneWinInfo(n, i.downWin, i.upWin, this.curSettingAnimEnd), this.sendHistoryLotteryRequest()) : o("没有结算数据"), this.emit(l.GAME_OVER)
        }, s(n, [{
          key: "UpDownManager",
          get: function () {
            return R.get()
          }
        }, {
          key: "Desk",
          get: function () {
            return this.UpDownManager.Desk
          }
        }]), n
      }(T)) || O);
      n._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/UDCmd.ts", ["cc", "./ge.ts", "./game_sevenup_proto.mjs_cjs=&original=.js", "./INet.ts", "./game_sevenup_proto.js"], (function (e) {
  var E, _, S;
  return {
    setters: [function (e) {
      E = e.cclegacy
    }, null, null, function (e) {
      _ = e.CmdToPbName
    }, function (e) {
      S = e.default
    }],
    execute: function () {
      E._RF.push({}, "b84b0g1JPlOLIhed2IgRcSB", "UDCmd", void 0);
      var n = e("UDCmd", {
        GAME_STAGE_INFO_PUSH: "sevenup.SevenupStageInfo",
        USER_BET: "sevenup.SevenupUserBet",
        USER_BET_PUSH: "sevenup.SevenupUserBetPush",
        HISTORY_LOTTERY: "sevenup.SevenupHistoryLottery",
        GET_VIP_BET: "sevenup.SevenupGetVipBet",
        VIP_SEAT_INFO_PUSH: "sevenup.SevenupVipSeatInfoPush",
        GET_TABLE_LIST: "sevenup.SevenupGetTableList",
        CHECKOUT: "sevenup.SevenupCheckoutResp",
        USER_OPERATE: "sevenup.SevenupOperate",
        RECORD_DETAIL: "sevenup.SevenupRecordDetail"
      });
      _[S.sevenup.SEVENUP_MSGID.SEVENUP_MSGID_GAME_STAGE_INFO_PUSH] = n.GAME_STAGE_INFO_PUSH, _[S.sevenup.SEVENUP_MSGID.SEVENUP_MSGID_USER_BET_RESP] = n.USER_BET, _[S.sevenup.SEVENUP_MSGID.SEVENUP_MSGID_USER_BET_PUSH] = n.USER_BET_PUSH, _[S.sevenup.SEVENUP_MSGID.SEVENUP_MSGID_HISTORY_LOTTERY_RESP] = n.HISTORY_LOTTERY, _[S.sevenup.SEVENUP_MSGID.SEVENUP_MSGID_GET_VIP_BET_RESP] = n.GET_VIP_BET, _[S.sevenup.SEVENUP_MSGID.SEVENUP_MSGID_VIP_SEAT_INFO_PUSH] = n.VIP_SEAT_INFO_PUSH, _[S.sevenup.SEVENUP_MSGID.SEVENUP_MSGID_GET_TABLE_LIST_RESP] = n.GET_TABLE_LIST, _[S.sevenup.SEVENUP_MSGID.SEVENUP_MSGID_CHECKOUT_RESP] = n.CHECKOUT, _[S.sevenup.SEVENUP_MSGID.SEVENUP_MSGID_USER_OPERATE_RESP] = n.USER_OPERATE, E._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/UDConstant.ts", ["cc"], (function (e) {
  var t;
  return {
    setters: [function (e) {
      t = e.cclegacy
    }],
    execute: function () {
      t._RF.push({}, "ee3c5yYtuNB0p1w3XrjTdRe", "UDConstant", void 0);
      var E = e("UDConstant", {
          Package: "abUpDown",
          AudioRootPath: "audio/",
          Model: {
            Multiple: 0,
            Single: 1
          },
          ChooseTableRecordNum: 100,
          HistoryTableRecordNum: 105,
          ShowDaluRow: 14,
          Audio: {
            Bgm: "1_bgm",
            CountDownThree: "2_countDownThree",
            BetStart: "3_betStart",
            BetLocked: "4_betLocked",
            ExtraPay: "5_expay",
            SpecialBet: "6_specialBet",
            NotCanBet: "7_showNotCanBet",
            ChouMaShow: "8_choumaShow",
            StartDice: "9_10_startDice",
            WinDouble: "11_winDouble",
            ChouMaFly: "12_choumaFly",
            selfAddMoney: "13_addMoney",
            BtnOptionClick: "14_optClick",
            BtnClick: "15_btnClick",
            BtnSwitchClick: "16_switchLevel",
            PlayerFire: "17_playerFire",
            WinCoin: "18_winCoin"
          },
          ServerGameState: {
            UNKNOWN: 0,
            GAMESTART: 1,
            STAGE_BET: 2,
            SETTLE: 3,
            GAMEOVER: 4
          },
          BetSpance: {
            Small: "small",
            Big: "big",
            Two: "2",
            Three: "3",
            Four: "4",
            Five: "5",
            Six: "6",
            Seven: "7",
            Eight: "8",
            Nine: "9",
            Ten: "10",
            Eleven: "11",
            Twelve: "12"
          },
          Time: {
            TIP_AUTO_CLOSE: 2,
            TOAST_AUTO_CLOSE: 2,
            BET_SPANCE_LIGHT_COUNT: 1,
            BET_SPANCE_LIGHT_ONCE: .1,
            BET_ZONE_EXTRA_PAY: 2,
            SHAKE_DICE: 2,
            UPDATE_ROUND_RECORD: 0,
            FLY_CHIP_INTERVAL: .1
          },
          GAME_TIPS: {
            BetStart: "开始下注",
            BetStop: "停止下注",
            ExtraPay: "额外翻倍",
            BetStopOpt: "停止下注的操作",
            Tip: "游戏提示"
          },
          CountDown: {
            BetStart: "开始下注",
            LotteryAnimation: "开奖动画",
            BetLockedTip: "下注锁定提示",
            ExtraPayTip: "翻倍提示提示",
            ExtraPayShow: "翻倍展示",
            ShakeDice: "摇色子出结果",
            UpdateRoundRecord: "更新局记录"
          },
          LotteryStep: {
            BetLockedTip: "下注锁定提示",
            ExtraPayTip: "翻倍提示提示",
            ExtraPayShow: "翻倍展示",
            ShakeDice: "摇色子出结果",
            UpdateRoundRecord: "更新局记录"
          },
          RATEWEIGHT: 1e4,
          RECORDCOUNT: 30,
          SwitchTableType: {
            Normal: 0,
            FreeSwitch: 1,
            SelectTable: 2
          }
        }),
        T = (e("TrackPageViewEvent", {
          MAIN: "main",
          HISTORY: "pageView_history",
          SELECTING_TABLE: "pageView_slecting a table",
          HOW_TO_PLAY: "how_to_play",
          SETTING: "setting",
          SELECT_LEVEL: "select_level",
          BET_HISTORY: "bet_history"
        }), e("TrackClickEvent", {
          BET_AREA: "bet_area",
          OPERATE: "opertae",
          MAIN_HISTORY: "main_history",
          VIP_PLAYER: "vip_player",
          SELECT_TABLE: "select_table",
          MAIN_SETTING: "main_setting",
          SETTING: "setting",
          HISTORY: "history",
          SELECT_LEVEL: "select_level",
          BET_HISTORY: "bet_history"
        }), e("TrackClickName", {
          BET: "bet",
          OPERATE: {
            CHIP: "chip",
            UNDO: "undo",
            DOUBLE: "double",
            AUTO: "auto"
          },
          SELECT_TABLE_MODE: {
            SINGLE: "single",
            MULTIPPLE: "multipple"
          },
          LEVEL: {
            SINGLE_LEVEL: "single_level",
            MULTIPPLE_LEVEL: "multipple_level"
          },
          JOIN: "join",
          BTN_MENU: "btn_menu",
          HISTORY_MORE: "more",
          HISTORY_ENTRANCE: "entrance",
          MENU_CLICK: {
            EXIT: "exit",
            SWITCH_TABLE: "switch_table",
            SELECT_TABLE: "select_table",
            HOW_TO_PLAY: "how_to_play"
          },
          SELECT_LEVEL_MODE: {
            SINGLE: "single",
            MULTIPPLE: "multipple"
          },
          PLAYER: "player",
          BET_HISTORY: "bet_history"
        }), e("ServerZoneToKey", {}));
      T[0] = E.BetSpance.Small, T[1] = E.BetSpance.Big, T[2] = E.BetSpance.Two, T[3] = E.BetSpance.Three, T[4] = E.BetSpance.Four, T[5] = E.BetSpance.Five, T[6] = E.BetSpance.Six, T[7] = E.BetSpance.Seven, T[8] = E.BetSpance.Eight, T[9] = E.BetSpance.Nine, T[10] = E.BetSpance.Ten, T[11] = E.BetSpance.Eleven, T[12] = E.BetSpance.Twelve;
      var a = e("LotteryStepToTime", {});
      a[E.LotteryStep.BetLockedTip] = E.Time.TIP_AUTO_CLOSE, a[E.LotteryStep.ExtraPayTip] = E.Time.TIP_AUTO_CLOSE, a[E.LotteryStep.ExtraPayShow] = E.Time.BET_ZONE_EXTRA_PAY, a[E.LotteryStep.ShakeDice] = E.Time.SHAKE_DICE, t._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/UDEvent.ts", ["cc"], (function (_) {
  var E;
  return {
    setters: [function (_) {
      E = _.cclegacy
    }],
    execute: function () {
      E._RF.push({}, "da2374wyUFJC5ZK9aC4ptqt", "UDEvent", void 0);
      var T = 0,
        e = function () {
          return "updown_" + (T += 1).toString()
        };
      _("UDEvent", {
        VIEW_INIT_UI: e(),
        VIEW_TABLE_INFO_UPDATE: e(),
        VIEW_PLAYER_INFO_UPDATE: e(),
        VIEW_PLAYER_BALANCE_UPDATE: e(),
        VIEW_PLAYER_GUEST_UPDATE: e(),
        VIEW_PLAYER_COUNT_UPDATE: e(),
        BET_SPANCE_LIGHT: e(),
        BET_SPANCE_VIP_LIGHT: e(),
        BET_SPANCE_UPDATE: e(),
        BET_COUNT_UPDATE: e(),
        VIEW_STATUS_MSG_SHOW: e(),
        VIEW_STATUS_MSG_HIDE: e(),
        VIEW_TOAST_SHOW: e(),
        GAME_STATUS_CHANGE: e(),
        GAME_ROUND_INIT: e(),
        GAME_SETTING: e(),
        GAME_OVER: e(),
        GAME_WILL_SWITCH: e(),
        GAME_SWITCH_FINISH: e(),
        GAME_TOAST_CLOCK_UPDATE: e(),
        GAME_TOAST_CLOCK_STOP: e(),
        LEVEL_CONFIG_UPDATE: e(),
        TABLE_LIST_UPDATE: e(),
        HISTORY_RECORD_UPDATE: e(),
        VIEW_TOAST_CLOSE: e(),
        CHOOSE_CHIP: "choose_chip",
        BET_COUNT_DOWN_START: "bet_count_down_start",
        BET_COUNT_DOWN_END: "bet_count_down_end",
        UPDATE_BET_COUNT_DOWN_TIME: "update_bet_count_down_time",
        BET_CHIP: "bet_chip",
        BET_RECORD_CHANGE: "bet_record_change",
        UPDATE_CHIP_DATA: "update_chip_data",
        HANDLE_LOTTERY_PROCESS: "handle_lottery_process",
        PLAY_SELF_CHIP_FLY: "play_self_chip_fly",
        PLAY_GUEST_CHIP_FLY: "play_guest_chip_fly",
        FLY_CHIP_TO_BET_ZONE: "fly_chip_to_bet_zone",
        LOTTERY_FIRST_STEP: "lottery_first_step",
        PLAY_SETTLE_ANIMATION: "play_settle_animation",
        TO_SETTLE_PLAY_EXTRA_PAY: "to_settle_play_extra_pay",
        TO_SETTLE_PLAY_SETTLE_ANIMATION: "to_settle_play_settle_animation",
        FLY_COIN_END: "fly_coin_end",
        FLY_COIN_FIRST_END: "fly_coin_first_end",
        CANCEL_BET_ZONE_LIGHT: "cancel_bet_zone_light",
        UNDO_OR_CLEAR_BET: "undo_or_clear_bet",
        SHOW_YELLOW_FRAME: "show_yellow_frame",
        AUTO_BET_STATUS_CHANGE: "auto_bet_status_change",
        SHOW_FLY_CHIPS: "show_fly_chips",
        FLY_CHIPS_END: "fly_chips_end",
        SHOW_WIN_ANIMATION: "show_win_animation",
        SINGLE_MODEL_AUTO_SETTLE: "single_model_auto_settle",
        JOIN_ROOM_UPDATE_BET: "join_room_update_bet",
        GAME_STATUS_SETTLE: "game_status_settle",
        REFRESH_CHIP_SELECT_BLOCK: "refresh_chip_select_block",
        DICE_CUP_END: "dice_cup_end",
        USER_BET_RESP_SUCCESS: "user_bet_resp_success",
        USER_BET_RESP_FAIL: "user_bet_resp_fail",
        CHECKOUT_RESP: "checkout_resp",
        OPERATE_RESP: "operate_resp",
        OPERATE_RESP_FAIL: "operate_resp_fail",
        HISTORY_DEAL_DATA: "history_deal_data",
        CLICK_DOUBLE: "click_double",
        CLICK_UNDO: "click_undo"
      });
      E._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/UDUtils.ts", ["cc", "./Cache.ts", "./Utils3.ts", "./custom-general.ts", "./interface12.ts"], (function (e) {
  var t, n, r, o, i;
  return {
    setters: [function (e) {
      t = e.cclegacy
    }, function (e) {
      n = e.Cache
    }, function (e) {
      r = e.Utils
    }, function (e) {
      o = e.formatWithCommas
    }, function (e) {
      i = e.EFlyChipPlayerType
    }],
    execute: function () {
      var a, u;
      e("UDUtils", void 0), t._RF.push({}, "1e0aft+luJB1J062tQ/B2bm", "UDUtils", void 0), (u = a || (a = e("UDUtils", {}))).getZoneChipRange = function (e) {
        var t = [];
        switch (e) {
          case 0:
            t = [-90, 75, -30, 75];
            break;
          case 1:
            t = [-75, 90, -30, 75];
            break;
          case 7:
            t = [-60, 60, -20, 50];
            break;
          default:
            t = [-45, 45, -35, 45]
        }
        return t
      }, u.getEachZoneOnceLimitChipCount = function (e, t) {
        return t == i.GUEST ? 1 : 0 == e || 1 == e ? 10 : 5
      }, u.getformatBetMoney = function (e, t) {
        void 0 === t && (t = !1);
        var i = String(r.formatRespMoney(e)),
          a = "";
        return a = 0 == isNaN(Number(i)) && Number(i) > 1e5 ? r.formatMoneyUnion(i, 2, !1, ",", !0) : o(i, 0), t && (a = n.User.getCurrency().sign + a), a
      }, u.getformatMoney = function (e) {
        var t = String(r.formatRespMoney(e));
        return 0 == isNaN(Number(t)) && Number(t) > 1e5 ? r.formatMoneyUnion(t, 2, !1, ",", !0) : r.numSubString(t, 2, !0)
      }, u.getformatLevelModelMoney = function (e) {
        var t = String(r.formatRespMoney(e));
        return 0 == isNaN(Number(t)) && Number(t) > 1e5 ? r.formatMoneyUnion(t, 2, !1, ",", !0) : r.numSubString(t, 2)
      }, u.getformatChipNum = function (e, t) {
        void 0 === t && (t = 0);
        var n = String(r.formatRespMoney(e));
        return 0 == isNaN(Number(n)) && Number(n) >= 1e4 ? r.formatMoneyUnion(n, t, !1) : n
      }, t._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/UpDownDesk.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CacheBase.ts", "./Utils3.ts", "./UDConstant.ts", "./UDEvent.ts", "./Player.ts", "./Cache.ts"], (function (t) {
  var e, i, n, s, a, u, r, l, o, h, f;
  return {
    setters: [function (t) {
      e = t.inheritsLoose, i = t.createClass
    }, function (t) {
      n = t.cclegacy, s = t.warn, a = t.error
    }, function (t) {
      u = t.CacheBase
    }, function (t) {
      r = t.Utils
    }, function (t) {
      l = t.UDConstant
    }, function (t) {
      o = t.UDEvent
    }, function (t) {
      h = t.Player
    }, function (t) {
      f = t.Cache
    }],
    execute: function () {
      n._RF.push({}, "fc013PBFdFFopaK4U4IrKdH", "UpDownDesk", void 0);
      t("UpDownDesk", function (t) {
        function n(e) {
          var i;
          return (i = t.call(this, "UpDownDesk") || this).LevelConfig = [], i.GameID = null, i.TableID = null, i.TableInfo = {}, i.MySelf = null, i.RankPlayerNum = 3, i.RankPlayerList = [], i.HistoryLotteryRecord = null, i.AllChipList = [], i.CurLevel = null, i.CurAllPlayerNum = 0, i.CurStatusContinueTime = 0, i.CurRoundNum = "", i.CurPoints = [0, 0], i.CurIsDouble = !1, i.CurDoubleNums = [], i.CurDefaultChip = 0, i.IsLeaveing = !1, i._gameStatus = l.ServerGameState.UNKNOWN, i._curRoundTotalBet = 0, i._curRoundSettingData = null, i.IsJoinRoom = !1, i.IsChangeTable = !1, i.IsChangeLevel = !1, i.PointChooseID = null, i.SwitchLevelTableID = null, i.SwitchTableReason = 0, i.CurBetSpanceList = [], i.CurSelfBet = [], i.CurSelfBetLimit = [], i.CurTableBet = [], i.CurTableOdds = [], i.CurWinInfo = null, i.RecordLastSelfBet = [], i.LastSelfBetPush = [], i._isAuto = !1, i._roundCount = 0, i.IsBetTimeEnd = !0, i.HistoryRecordList = [], i.HistoryRecordDays = [], i.EndFlag = 0, i.initData(), i
        }
        e(n, t);
        var u = n.prototype;
        return u.initProperty = function () {
          t.prototype.initProperty.call(this)
        }, u.initData = function () {
          this._gameStatus = l.ServerGameState.UNKNOWN, this.AllChipList = [], this.CurAllPlayerNum = 0, this.CurLevel = null, this.TableID = null, this.PointChooseID = null, this.SwitchLevelTableID = null, this.SwitchTableReason = 0, this.TableInfo = {}, this.RankPlayerNum = 3, this.MySelf = new h, this.RankPlayerList = [], this.IsLeaveing = !1, this.IsJoinRoom = !1, this.IsChangeTable = !1, this.IsChangeLevel = !1, this.CurSelfBet = [], this.CurSelfBetLimit = [], this.CurTableBet = [], this.CurTableOdds = [], this.CurBetSpanceList = [], this.CurWinInfo = null, this._curRoundSettingData = null, this.RecordLastSelfBet = [], this._curRoundTotalBet = 0, this._roundCount = 0, this.LastSelfBetPush = [], this.IsBetTimeEnd = !0, this._isAuto = !1, this.HistoryRecordList = [], this.HistoryRecordDays = [], this.EndFlag = 0
        }, u.initByJoinRoom = function (t, e) {
          var i;
          this.IsLeaveing = !1, this.IsJoinRoom = !0, this._roundCount = 0;
          for (var n = t.room_level, a = 0; a < this.LevelConfig.length; a++) {
            var u = this.LevelConfig[a];
            if (u.level == n) {
              this.CurLevel = r.clone(u);
              break
            }
          }
          if (this.AllChipList = this.CurLevel.quick_ante, e || 0 == this.CurDefaultChip) {
            var f = this.AllChipList.slice();
            if (f.length >= 2) {
              f.sort((function (t, e) {
                return t - e
              }));
              var c = f[0],
                d = f[1],
                S = t.balance || 0;
              this.CurDefaultChip = S > 30 * d ? f[Math.min(2, f.length - 1)] : S > 10 * c ? f[1] : f[0]
            } else this.CurDefaultChip = f[0]
          }
          this.HistoryLotteryRecord = null;
          var m = r.JsonDecode(t.userinfo),
            g = r.tableVerify(m);
          this.MySelf = new h, this.MySelf.initByJoinRoom(g), this.MySelf.money = t.balance;
          var C = t.tableinfo;
          this.TableInfo = r.tableVerify(C), s("========玩家加入房间：tableInfo=======", this.TableInfo), this.TableID = this.TableInfo.table_id, this.CurAllPlayerNum = r.numValueOf(this.TableInfo.user_count), this.RankPlayerNum = r.numValueOf(this.TableInfo.vip_seat_count, 3), this.updateVipPlayerList(this.TableInfo.vipinfoList);
          var R = !1;
          (null == (i = this.TableInfo) || null == (i = i.stage_info) ? void 0 : i.stage) != l.ServerGameState.UNKNOWN && (s("===初始化:进来时桌子已经开始==="), R = !0, this.initByOneRound()), this.updateGameStatusInfo(this.TableInfo.stage_info, !0), this.PointChooseID = null, this.SwitchLevelTableID = null, this.SwitchTableReason = 0, this.CurSelfBet = this.TableInfo.selfBet, this.CurSelfBetLimit = this.TableInfo.betLimit, this.CurTableBet = this.TableInfo.betInfo, this.CurTableOdds = this.TableInfo.odds;
          var _ = this.updateBetSpanceInfo();
          this.emit(o.VIEW_TABLE_INFO_UPDATE), this.emit(o.VIEW_PLAYER_INFO_UPDATE, this.MySelf), this.emit(o.UPDATE_CHIP_DATA), this.emit(o.GAME_STATUS_CHANGE, this.gameStatus), R && this.emit(o.GAME_ROUND_INIT, !0), this.emit(o.GAME_SWITCH_FINISH, !0), _ && this.emit(o.JOIN_ROOM_UPDATE_BET)
        }, u.initByOneRound = function (t) {
          this.CurStatusContinueTime = 0, this.CurPoints = [0, 0], this.CurIsDouble = !1, this.CurDoubleNums = [], this.IsLeaveing ? s("[初始化一局]:正在请求退出中，本次不初始化") : (
            /*! 正在离开房间 不重置房间切换状态 */
            this.IsChangeTable = !1, this.IsChangeLevel = !1), this.CurSelfBet = [], this.CurTableBet = [], this.CurBetSpanceList = [], this.CurWinInfo = null, this._curRoundSettingData = null, this._curRoundTotalBet = 0, t && t.stage == l.ServerGameState.GAMESTART && this._roundCount++, this.LastSelfBetPush = [], this.IsBetTimeEnd = !0, this.updateBetSpanceInfo()
        }, u.updateGameStatusInfo = function (t, e) {
          void 0 === e && (e = !1), t && (this.CurRoundNum = t.round_num, this.CurStatusContinueTime = t.continueTime, this.CurPoints = t.points, this.CurIsDouble = t.isDouble, this.CurDoubleNums = t.doubles, e ? this._gameStatus = t.stage : this.gameStatus = t.stage)
        }, u.updateVipPlayerList = function (t) {
          void 0 === t && (t = null);
          var e = [];
          if (t && t.length > 0) {
            var i = this.RankPlayerList.length;
            t.length > i && (i = t.length);
            for (var n = i - 1; n >= 0; n--)
              if (t[n]) {
                var a = r.JsonDecode(t[n].userinfo),
                  u = this.RankPlayerList[n];
                u && a && Number(u.uid) != Number(a.uid) && (u = null), u || (u = new h, this.RankPlayerList[n] = u);
                var l = u.totalOnList;
                u.updateByRank(r.tableVerify(a), t[n].seatIndex, t[n].balance, t[n].totalWin, t[n].onlist);
                var f = u.totalOnList;
                l < f && f >= 3 && e.push(u)
              } else this.RankPlayerList[n] && this.RankPlayerList.splice(n, 1)
          } else this.RankPlayerList = [];
          for (var c = !1, d = 0; d < this.RankPlayerList.length; d++)
            if (this.RankPlayerList[d].uid == this.MySelf.uid) {
              this.MySelf.seatIndex = this.RankPlayerList[d].seatIndex, c = !0;
              break
            } c || (this.MySelf.seatIndex = -1), e.length > 0 && s("[检测到有玩家连续上榜超过3次了]====>", e), this.emit(o.VIEW_PLAYER_GUEST_UPDATE, this.RankPlayerList, e), this.emit(o.VIEW_PLAYER_COUNT_UPDATE)
        }, u.updateBetSpanceInfo = function () {
          this.CurSelfBet=this.CurSelfBet||[];this.CurSelfBetLimit=this.CurSelfBetLimit||[];this.CurTableBet=this.CurTableBet||[];this.CurTableOdds=this.CurTableOdds||[];this.CurBetSpanceList=this.CurBetSpanceList||[];
          var t = this.CurSelfBet.length;
          this.CurSelfBetLimit.length > t && (t = this.CurSelfBetLimit.length), this.CurTableBet.length > t && (t = this.CurTableBet.length), this.CurTableOdds.length > t && (t = this.CurTableOdds.length), this.CurBetSpanceList.length > t && (t = this.CurBetSpanceList.length);
          for (var e = !1, i = 0; i < t; i++) {
            var n = this.CurBetSpanceList[i],
              s = r.numValueOf(this.CurSelfBet[i], 0),
              a = r.numValueOf(this.CurSelfBetLimit[i], 0),
              u = r.numValueOf(this.CurTableBet[i], 0),
              l = r.numValueOf(this.CurTableOdds[i], 0);
            n ? (n.selfBet == s && n.selfBetLimit == a && n.allBet == u && n.odds == l || (e = !0), n.selfBetChange = s - n.selfBet, n.selfBetChange < 0 && (n.selfBetChange = 0), n.selfBet = s, n.selfBetLimit = a, n.allBet = u, n.odds = l) : (n = {
              selfBetChange: s,
              selfBet: s,
              selfBetLimit: a,
              allBet: u,
              odds: l
            }, e = !0), this.CurBetSpanceList[i] = n
          }
          for (var h = 0, f = 0; f < this.CurSelfBet.length; f++) h += r.numValueOf(this.CurSelfBet[f], 0);
          return e && this.emit(o.BET_SPANCE_UPDATE, this.CurBetSpanceList), this.CurRoundTotalBet = h, e
        }, u.updateHistoryLottery = function (t) {
          if (t && 0 == t.result) {
            var e = t.winRateList,
              i = new Decimal(e[0] || 0).div(100),
              n = new Decimal(e[1] || 0).div(100),
              s = Math.floor(i.toNumber()),
              a = Math.floor(n.toNumber()),
              u = 100 - Number(s) - Number(a),
              r = {
                handsNum: t.handsNum,
                downWin: Number(s),
                upWin: Number(a),
                sevenWin: Number(u),
                winInfoList: t.winInfoList,
                winRateList: e,
                daluIndex: t.index
              };
            this.HistoryLotteryRecord = r, this.emit(o.HISTORY_RECORD_UPDATE, this.HistoryLotteryRecord, !0)
          }
        }, u.addOneWinInfo = function (t, e, i, n) {
          if (void 0 === n && (n = !0), this.HistoryLotteryRecord)
            if (t && null != e && null != i) {
              var u = new Decimal(e).div(100),
                r = new Decimal(i).div(100),
                l = Math.floor(u.toNumber()),
                h = Math.floor(r.toNumber()),
                f = 100 - Number(l) - Number(h);
              this.HistoryLotteryRecord.downWin = l, this.HistoryLotteryRecord.upWin = h, this.HistoryLotteryRecord.sevenWin = f, this.HistoryLotteryRecord.winRateList[0] = e, this.HistoryLotteryRecord.winRateList[1] = i;
              for (var c = this.HistoryLotteryRecord.winInfoList.length - 100, d = 0; d < c; d++) this.HistoryLotteryRecord.winInfoList.shift();
              this.HistoryLotteryRecord.winInfoList.push(t), 1 == n && (s("[aby]:更新本局历史记录==========>"), this.emit(o.HISTORY_RECORD_UPDATE, this.HistoryLotteryRecord))
            } else a("添加一局输赢记录：暂无输赢记录");
          else a("添加一局输赢记录：暂无开奖记录")
        }, u.saveGameSettingData = function (t) {
          if (t) {
            this._curRoundSettingData = {}, this._curRoundSettingData.countWin = t.selfWin.totalWin, this._curRoundSettingData.totalBalance = t.selfWin.balance, this._curRoundSettingData.downWin = r.numValueOf(t.downWin), this._curRoundSettingData.upWin = r.numValueOf(t.upWin), this._curRoundSettingData.servenWin = 1e4 - this._curRoundSettingData.downWin - this._curRoundSettingData.upWin, this.updateMySelfMoney(t.selfWin.balance, !0), this._curRoundSettingData.checklist = r.tableVerify(t.checklist, !0), this._curRoundSettingData.selfWin = r.tableVerify(t.selfWin), this._curRoundSettingData.winZone = r.tableVerify(t.winZone, !0);
            var e = [];
            if (this._curRoundSettingData.selfWin) {
              var i = this._curRoundSettingData.selfWin;
              if (-1 == i.seatIndex)
                for (var n = 0; n < this._curRoundSettingData.checklist.length; n++) {
                  var u = this._curRoundSettingData.checklist[n],
                    l = r.clone(u);
                  if (u.seatIndex == i.seatIndex) {
                    for (var o = 0; o < u.winlist.length; o++) {
                      var h = u.winlist[o];
                      null != i.winlist[o] && i.winlist[o] > 0 && (l.winlist[o] = h - i.winlist[o], l.winlist[o] < 0 && (l.winlist[o] = 0))
                    }
                    l.totalWin = l.totalWin - i.totalWin, l.totalWin < 0 && (l.totalWin = 0)
                  }
                  e.push(l)
                } else
                  for (var f = 0; f < this._curRoundSettingData.checklist.length; f++) {
                    var c = this._curRoundSettingData.checklist[f],
                      d = r.clone(c);
                    c.seatIndex != i.seatIndex && e.push(d)
                  }
              this._curRoundSettingData.otherWin = e
            } else this._curRoundSettingData.otherWin = this._curRoundSettingData.checklist;
            s("saveGameSettingData：保存结算数据", this._curRoundSettingData)
          } else a("saveGameSettingData:暂无结算数据")
        }, u.updateGameSetting = function () {
          if (this._gameStatus == l.ServerGameState.GAMEOVER) {
            if (!this._curRoundSettingData) return a("updateGameSetting:结算数据为空"), null;
            this._curRoundSettingData.isDouble = this.CurIsDouble, s("updateGameSetting:结算数据有更新===>", this._curRoundSettingData)
          } else a("updateGameSetting:暂无结算数据")
        }, u.getGameSettingData = function () {
          return this._gameStatus < l.ServerGameState.SETTLE ? (a("getGameSettingData:当前游戏阶段不可获取", this._gameStatus), null) : this._curRoundSettingData ? this._curRoundSettingData : (a("getGameSettingData:结算数据为空"), null)
        }, u.getTotalNormalPlayerNum = function () {
          var t = this.CurAllPlayerNum - this.RankPlayerList.length;
          return t < 0 ? 0 : t
        }, u.splitBetToChips = function (t) {
          var e = [],
            i = this.AllChipList.slice();
          i.sort((function (t, e) {
            return t - e
          }));
          for (var n = i.length - 1; n >= 0; n--) {
            var s = i[n],
              a = Math.floor(t / s);
            a > 0 && (e.push({
              chip: s,
              count: a
            }), t %= s)
          }
          return e
        }, u.hasLatestRecordBet = function () {
          for (var t = 0, e = 0; e < this.RecordLastSelfBet.length; e++) t += this.RecordLastSelfBet[e];
          return t > 0
        }, u.updateMySelfMoney = function (t, e) {
          void 0 === e && (e = !1), f.User.setBalance(t), this.MySelf && (this.MySelf.money = t, e || this.emit(o.VIEW_PLAYER_BALANCE_UPDATE))
        }, u.isSingleModel = function () {
          var t;
          return (null == (t = this.CurLevel) ? void 0 : t.room_tab) === l.Model.Single
        }, u.isMultipleModel = function () {
          var t;
          return (null == (t = this.CurLevel) ? void 0 : t.room_tab) === l.Model.Multiple
        }, u.isBetStatge = function () {
          return this.gameStatus == l.ServerGameState.STAGE_BET
        }, u.getBetToMaxNum = function (t) {
          if (!t || 0 == t.length) return 0;
          for (var e = 0, i = 0; i < t.length; i++) {
            var n = this.CurBetSpanceList[t[i].zone];
            n && n.selfBetLimit > 0 && n.selfBet >= n.selfBetLimit && e++
          }
          return e
        }, u.getUpDownSenvenWinRate = function () {
          var t = {
            downWin: 0,
            upWin: 0,
            sevenWin: 0
          };
          if (this.HistoryLotteryRecord) {
            for (var e = r.clone(this.HistoryLotteryRecord.winInfoList), i = 0, n = 0, s = this.HistoryLotteryRecord.daluIndex, a = 0; a < s; a++) {
              var u = e[a].point1 + e[a].point2;
              7 == u ? n++ : u > 7 || i++
            }
            t.downWin = Math.floor(i / s * 100), t.sevenWin = Math.floor(n / s * 100), t.upWin = 100 - t.downWin - t.sevenWin
          }
          return t
        }, i(n, [{
          key: "CanSwitchTable",
          get: function () {
            return this._gameStatus != l.ServerGameState.UNKNOWN && (this.isSingleModel() ? this._gameStatus <= l.ServerGameState.STAGE_BET : this._curRoundTotalBet <= 0)
          }
        }, {
          key: "CanSwitchLevel",
          get: function () {
            return this._gameStatus != l.ServerGameState.UNKNOWN && (this.isSingleModel() ? this._gameStatus <= l.ServerGameState.STAGE_BET : this._curRoundTotalBet <= 0)
          }
        }, {
          key: "gameStatus",
          get: function () {
            return this._gameStatus
          },
          set: function (t) {
            var e = this._gameStatus;
            this._gameStatus = t, e != t && (s("====游戏状态变更==>上一个:" + e + " 当前:" + t + "==="), this.emit(o.GAME_STATUS_CHANGE, t))
          }
        }, {
          key: "CurRoundTotalBet",
          get: function () {
            return this._curRoundTotalBet
          },
          set: function (t) {
            var e = this._curRoundTotalBet;
            this._curRoundTotalBet = t, e != t && this.emit(o.BET_COUNT_UPDATE, this._curRoundTotalBet, this.gameStatus >= l.ServerGameState.GAMESTART)
          }
        }, {
          key: "isAuto",
          get: function () {
            return this._isAuto
          },
          set: function (t) {
            this._isAuto = t, this.emit(o.AUTO_BET_STATUS_CHANGE)
          }
        }, {
          key: "roundCount",
          get: function () {
            return this._roundCount
          },
          set: function (t) {
            this._roundCount = t
          }
        }]), n
      }(u));
      n._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/UpDownManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ge.ts", "./CountTime.ts", "./Cache.ts", "./Utils3.ts", "./IManager.ts", "./GameCache.ts", "./GameManager.ts", "./gmgr.ts", "./subGameGlobal.ts", "./UpDownDesk.ts", "./PlatformGI.ts", "./UDConstant.ts", "./UDEvent.ts", "./RoundManager.ts", "./UDCmd.ts", "./general.ts"], (function (e) {
  var t, n, a, s, i, o, l, r, u, h, d, c, m, D, _, v, k, f, T, R, g, E, C, S;
  return {
    setters: [function (e) {
      t = e.inheritsLoose
    }, function (e) {
      n = e.cclegacy, a = e._decorator, s = e.warn, i = e.isValid
    }, function (e) {
      o = e.gui, l = e.gnet
    }, function (e) {
      r = e.CountTime
    }, function (e) {
      u = e.Cache
    }, function (e) {
      h = e.Utils
    }, function (e) {
      d = e.IManager
    }, function (e) {
      c = e.GameCache
    }, function (e) {
      m = e.gameMgr
    }, function (e) {
      D = e.gmgr
    }, function (e) {
      _ = e.gi
    }, function (e) {
      v = e.UpDownDesk
    }, function (e) {
      k = e.PlatformGI
    }, function (e) {
      f = e.UDConstant
    }, function (e) {
      T = e.UDEvent
    }, function (e) {
      R = e.RoundManager
    }, function (e) {
      g = e.UDCmd
    }, function (e) {
      E = e.sprintf_g, C = e.gutil_char, S = e.PRIORITY
    }],
    execute: function () {
      var I;
      n._RF.push({}, "f3c4afOJepEqYpV1i9KQMBo", "UpDownManager", void 0);
      var p = a.ccclass;
      e("UpDownManager", p("UpDownManager")(I = function (e) {
        function n() {
          var t;
          return D.clear("UpDownManager"), (t = e.call(this, "UpDownManager") || this).Desk = null, t.RoundManager = null, t._handlerCountTimeMap = new Map, t.Desk = new v, c.SubGame.Updown = t.Desk, t.RoundManager = new R, t.on([_.GameEvent.GAME_CONFIG, _.GameEvent.REQUEST_ROOM, _.GameEvent.REQUEST_ROOM_TIMEOUT, _.GameEvent.REQUEST_EXIT_ROOM_TIMEOUT, _.GameEvent.JOIN_ROOM, _.GameEvent.LEAVE_ROOM, _.GameEvent.SIT_DOWN_BROADCAST, _.GameEvent.STAND_UP_BROADCAST, _.GameEvent.GAMENOTIFICATION_PUSH, _.GameEvent.GAME_PUSH_GETMONEY, _.GameRecordEvent.GAMERECORD, _.GameRecordEvent.GAMERECORDDETAIL, _.GameEvent.JOIN_ROOM_ERROR]), t
        }
        t(n, e);
        var a = n.prototype;
        return a.clear = function () {
          this.RoundManager && this.RoundManager.clear(), e.prototype.clear.call(this)
        }, a.onEvents = function (e) {
          var t, n = this,
            a = arguments.length <= 1 ? void 0 : arguments[1];
          switch (e) {
            case _.GameEvent.GAME_CONFIG:
              this.Desk.GameID = a.game_id, this.Desk.LevelConfig = a.level_config, this.emit(T.LEVEL_CONFIG_UPDATE, this.Desk.LevelConfig), this.reqCheckAutoMatch(null == (t = this.Desk.CurLevel) ? void 0 : t.room_tab);
              break;
            case _.GameEvent.REQUEST_ROOM:
              var s = a;
              if (0 != s.result) {
                this.Desk.IsChangeLevel = !1, this.Desk.IsChangeTable = !1, this.Desk.PointChooseID = null;
                var i = "GAME_ERROR_" + s.result,
                  l = C(i);
                l && l != i || (l = C("GAME_ERROR_1")), o.alert({
                  content: l,
                  enableClose: !1,
                  ok: {
                    text: C("OK"),
                    cb: function () {
                      o.closeAlert("updown"), m.get() && m.get().respLeaveRoom()
                    }
                  }
                }, S.ALERT, "updown"), o.loading(!1, S.UI)
              }
              break;
            case _.GameEvent.REQUEST_ROOM_TIMEOUT:
              1 != this.Desk.IsChangeLevel && 1 != this.Desk.IsChangeTable || this.emit(T.GAME_SWITCH_FINISH, !1), this.sendLeaveRoom();
              break;
            case _.GameEvent.REQUEST_EXIT_ROOM_TIMEOUT:
              this.respLeaveRoom({
                result: 1
              });
              break;
            case _.GameEvent.JOIN_ROOM:
              o.closeAlert("updown"), o.closeLayer("all", ["lyUpDownMain"]), this.respJoinRoomSuccess(a);
              break;
            case _.GameEvent.SIT_DOWN_BROADCAST:
              this.notifyUserSitDown(a);
              break;
            case _.GameEvent.STAND_UP_BROADCAST:
              this.notifyUserStandUp(a);
              break;
            case _.GameEvent.LEAVE_ROOM:
              this.respLeaveRoom(a);
              break;
            case _.GameEvent.GAMENOTIFICATION_PUSH:
              if (0 == a.action) {
                var r = E(C("ud_round3_alert"), a.param, a.param2);
                this.emit(T.VIEW_TOAST_SHOW, r, !1)
              } else this.Desk.IsJoinRoom = !1, 1 == a.action && o.alert({
                title: C("ud_tips"),
                content: E(C("ud_round5_alert"), a.param),
                enableClose: !1,
                ok: {
                  text: C("ud_btn_sure"),
                  cb: function () {
                    o.closeAlert("updown"), o.closeLayer("lyUpDownSelectTable"), n.emit(T.VIEW_TOAST_CLOSE), o.openBundleLayer(f.Package, "lyUpDownCheckTable")
                  }
                }
              }, S.ALERT, "updown");
              break;
            case _.GameEvent.GAME_PUSH_GETMONEY:
              var d = this.Desk.MySelf.money,
                c = h.numValueOf(a);
              this.Desk.updateMySelfMoney(d + c);
              break;
            case _.LoginEvent.LOGIN_SUCCESS:
              this.Desk.gameStatus = f.ServerGameState.UNKNOWN, this.Desk.IsJoinRoom = !1;
              break;
            case _.GameRecordEvent.GAMERECORD:
              0 == a.result && a.game == this.Desk.GameID && this.dealRecordData(a);
              break;
            case _.GameRecordEvent.GAMERECORDDETAIL:
              0 == a.result && a.game == this.Desk.GameID && a.uid == u.User.getUID() && this.updateRecordDetail(a.id, a.detail);
              break;
            case _.GameEvent.JOIN_ROOM_ERROR:
              this.Desk.isAuto = !1, this.Desk.RecordLastSelfBet = [], this.Desk.IsJoinRoom = !1, this.Desk.gameStatus = f.ServerGameState.UNKNOWN, o.closeLayer("lyUpDownSelectTable")
          }
        }, a.updateRecordDetail = function (e, t) {
          for (var n = 0; n < this.Desk.HistoryRecordList.length; n++) {
            var a = this.Desk.HistoryRecordList[n];
            if (a.detailData && a.detailData.pos == e) {
              var s = new Uint8Array(t, 0, t.length);
              a.detailData.detail = l._protodecode(g.RECORD_DETAIL, s.buffer);
              break
            }
          }
        }, a.addDayToDays = function (e) {
          for (var t = 0; t < this.Desk.HistoryRecordDays.length; t++) {
            var n = this.Desk.HistoryRecordDays[t];
            if (n.year == e.year && n.month == e.month && n.day == e.day) return !1
          }
          return this.Desk.HistoryRecordDays.push(e), console.log("add one day ========="), !0
        }, a.updateDayEndFlag = function (e, t) {
          for (var n = 0; n < this.Desk.HistoryRecordDays.length; n++) {
            var a = this.Desk.HistoryRecordDays[n];
            if (a.year == e.year && a.month == e.month && a.day == e.day) {
              a.isAll = t;
              break
            }
          }
        }, a.isDayRecordEnd = function (e) {
          for (var t = 0; t < this.Desk.HistoryRecordDays.length; t++) {
            var n = this.Desk.HistoryRecordDays[t];
            if (n.year == e.year && n.month == e.month && n.day == e.day) return n.isAll || !1
          }
          return !1
        }, a.addOneRecord = function (e, t, n) {
          void 0 === n && (n = 0);
          var a = {};
          if (t) a.daysData = {
            year: e.year,
            month: e.month,
            day: e.day,
            betAmount: e.betamount,
            winAmount: e.winamount,
            timezoneinmin: n
          };
          else {
            var s = null;
            if (e.detail.length > 0) {
              var i = new Uint8Array(e.detail, 0, e.detail.length);
              s = l._protodecode(g.RECORD_DETAIL, i.buffer)
            }
            a.detailData = {
              timestamp: 1e3 * e.timestamp,
              bet: e.bet,
              win: e.win,
              firstFlag: e.firstofdayflag,
              detail: s,
              timezoneinmin: n,
              pos: e.id
            }
          }
          this.Desk.HistoryRecordList.push(a), console.log("add one record =========")
        }, a.dealRecordData = function (e) {
          this.Desk.EndFlag = e.endflag;
          var t = (null == e ? void 0 : e.list) || [],
            n = (null == e ? void 0 : e.daylist) || [],
            a = (null == e ? void 0 : e.timezoneinmin) || 0;
          if (n.length > 0)
            for (var s = 0; s < t.length; s++) {
              for (var i = 1e3 * t[s].timestamp, o = h.timeToDataArray(i, a), l = o.year, r = o.month, u = o.day, d = 0; d < n.length; d++)
                if (l == n[d].year && r == n[d].month && u == n[d].day) {
                  this.addDayToDays(n[d]) && (console.log(E("show date %04d-%02d-%02d", l, r, u)), console.log(E("add date %04d-%02d-%02d", n[d].year, n[d].month, n[d].day)), this.addOneRecord(n[d], !0, a));
                  break
                } if (1 === t[s].firstofdayflag) {
                var c = {
                  year: l,
                  month: r,
                  day: u,
                  betAmount: t[s].bet,
                  winAmount: t[s].win,
                  timezoneinmin: a
                };
                this.updateDayEndFlag(c, !0)
              }
              this.addOneRecord(t[s], !1, a)
            } else
              for (var m = 0; m < t.length; m++) this.addDayToDays(t[m]) && this.addOneRecord(t[m], !0, a);
          this.emit(T.HISTORY_DEAL_DATA)
        }, a.reqCheckAutoMatch = function (e) {
          if (void 0 === e && (e = 0), c.game.getReconnData()) s("[检查重连]>>>检测到需要重连");
          else if (this.Desk.gameStatus == f.ServerGameState.UNKNOWN)
            if (this.Desk.IsJoinRoom) s("当前已经加入房间了 非自动匹配", this.Desk.CurLevel);
            else {
              var t = this.getOneLevelData(e);
              if (!t) return s("自动配桌失败 没有合适的桌子===>", t), o.showTips(C("ud_switch_not_have_table")), void this.emit(_.SubGameEventGame.close);
              s("自动配桌===>", t), this.reqMatchTable(t.level)
            }
          else s("当前非初始状态，不可自动入桌子", this.Desk.gameStatus)
        }, a.getOneLevelData = function (e, t) {
          void 0 === e && (e = null), void 0 === t && (t = null);
          var n = u.User.getBalance(),
            a = this.Desk.LevelConfig;
          if (!a) return null;
          this.Desk.IsJoinRoom && (n = this.Desk.MySelf.money);
          for (var s = [], i = 0; i < a.length; i++) {
            var o = a[i];
            n >= o.entry_min && (n <= o.entry_max || -1 === o.entry_max) && n >= o.recommend_min && (n <= o.recommend_max || -1 === o.recommend_max) && (null != e ? o.room_tab == e && o.level != t && s.push(o) : o.level != t && s.push(o))
          }
          for (var l = 0; l < s.length; l++) {
            var r = s[l];
            if (n > r.recommend_min && (n <= r.recommend_max || -1 === r.recommend_max)) return r
          }
          return s[0]
        }, a.sendLeaveRoom = function () {
          if (this.Desk.IsJoinRoom) {
            var e = this,
              t = function () {
                0 != i(e) && null != e.Desk && (e.Desk.IsChangeLevel = !1, e.Desk.IsChangeTable = !1, e.Desk.IsLeaveing = !0, o.loading({
                  ts: 10,
                  block: !0
                }, S.UI), m.requestLeaveRoom())
              };
            this.Desk.isSingleModel() && this.Desk.CurRoundTotalBet > 0 ? o.alert({
              title: C("ud_tips"),
              content: C("ud_exit_simple_table_sure"),
              enableClose: !1,
              cancel: {
                text: C("ud_btn_cancle"),
                cb: function () {
                  o.closeAlert("updown")
                }
              },
              ok: {
                text: C("ud_btn_sure"),
                cb: function () {
                  o.closeAlert("updown"), t()
                }
              }
            }, S.ALERT, "updown") : t()
          } else k.closeGame()
        }, a.sendSwitchTable = function (e, t) {
          void 0 === e && (e = null), void 0 === t && (t = 0), this.Desk.CanSwitchTable && (this.Desk.IsJoinRoom || 0 == h.numValueOf(e)) ? (this.Desk.IsLeaveing = !0, this.Desk.IsChangeLevel = !1, this.Desk.IsChangeTable = !0, this.Desk.PointChooseID = e, this.Desk.SwitchTableReason = t, o.loading({
            ts: 15,
            block: !0
          }, S.UI), this.Desk.IsJoinRoom ? m.requestLeaveRoom() : this.respLeaveRoom(null)) : this.emit(T.VIEW_TOAST_SHOW, C("ud_not_switch_table"), !0)
        }, a.sendSwitchLevel = function (e, t, n, a) {
          if (void 0 === e && (e = null), void 0 === t && (t = null), void 0 === n && (n = null), void 0 === a && (a = 0), this.Desk.CanSwitchTable) {
            if (null == e) {
              if (null == t) return o.showTips(C("ud_switch_not_have_level")), void this.emit(_.SubGameEventGame.close);
              var s = this.getOneLevelData(t);
              if (!s) {
                var i = t == f.Model.Multiple ? "ud_switch_model_multiple_not_enough" : "ud_switch_model_single_not_enough";
                return void o.showTips(C(i))
              }
              e = s.level
            }
            this.Desk.IsLeaveing = !0, this.Desk.IsChangeLevel = !0, this.Desk.IsChangeTable = !1, this.Desk.PointChooseID = e, this.Desk.SwitchLevelTableID = n, this.Desk.SwitchTableReason = a, o.loading({
              ts: 15,
              block: !0
            }, S.UI), this.Desk.IsJoinRoom ? m.requestLeaveRoom() : this.respLeaveRoom(null)
          } else this.emit(T.VIEW_TOAST_SHOW, C("ud_not_switch_table"), !0)
        }, a.reqMatchTable = function (e, t, n, a) {
          void 0 === t && (t = null), void 0 === n && (n = null), void 0 === a && (a = 0), null != e && (o.loading({
            ts: 15,
            block: !0
          }, S.UI), m.requestEnterRoom({
            game_id: this.Desk.GameID,
            alloc_param: e,
            userinfo: "",
            except_tid: t,
            target_tid: n,
            reason: a
          }))
        }, a.respJoinRoomSuccess = function (e) {
          var t;
          s("处理加入房间成功===>", e), o.loading(!1), this.StopCountTime(null);
          var n = !1;
          (this.Desk.IsChangeLevel || this.Desk.IsChangeTable) && (s("检测到是切换桌子或场次进入的房间，初始化房间所有数据==>", this.Desk.IsChangeLevel, this.Desk.IsChangeTable), o.closeAlert("updown"), n = !0, this.Desk.initData()), this.Desk.initByJoinRoom(e, n), this.RoundManager.notifyGameStatusInfo(null == e || null == (t = e.tableinfo) ? void 0 : t.stage_info, !0), this.RoundManager.sendHistoryLotteryRequest()
        }, a.notifyUserSitDown = function (e) {
          this.Desk.CurAllPlayerNum = h.numValueOf(e.userCount), this.emit(T.VIEW_PLAYER_COUNT_UPDATE)
        }, a.notifyUserStandUp = function (e) {
          this.Desk.CurAllPlayerNum = h.numValueOf(e.userCount), this.emit(T.VIEW_PLAYER_COUNT_UPDATE)
        }, a.respLeaveRoom = function (e) {
          if (void 0 === e && (e = null), o.closeAlert("updown"), this.Desk.IsLeaveing = !1, e && 0 != e.result) {
            o.loading(!1), 1 != this.Desk.IsChangeLevel && 1 != this.Desk.IsChangeTable || this.emit(T.GAME_SWITCH_FINISH, !1), s("============离开房间失败 code:" + e.result + "============");
            var t = "GAME_ERROR_" + e.result,
              n = C(t);
            return n && n != t || (n = C("GAME_ERROR_1")), void o.showTips(n)
          }
          return this.Desk.IsJoinRoom = !1, this.Desk.gameStatus = f.ServerGameState.UNKNOWN, this.Desk.roundCount = 0, s("离开房间成功===>", e), u.User.setBalance(e.balance), this.StopCountTime(null), this.Desk.IsChangeLevel ? (s("【选场】即将进入Level,levelID = ", this.Desk.PointChooseID), o.openBundleLayer(f.Package, "lyUpDownSwitchLoading"), this.emit(T.GAME_WILL_SWITCH), void this.reqMatchTable(this.Desk.PointChooseID, null, this.Desk.SwitchLevelTableID, this.Desk.SwitchTableReason)) : this.Desk.IsChangeTable ? (s("【换桌】即将进入Table,tableID = ", this.Desk.PointChooseID), o.openBundleLayer(f.Package, "lyUpDownSwitchLoading"), this.emit(T.GAME_WILL_SWITCH), void this.reqMatchTable(this.Desk.CurLevel.level, this.Desk.TableID, this.Desk.PointChooseID, this.Desk.SwitchTableReason)) : (o.loading(!1), void k.closeGame())
        }, a.StartCountTime = function (e, t, n) {
          var a = this;
          void 0 === t && (t = null), void 0 === n && (n = null);
          t = Number(t), isNaN(t) ? console.error("倒计时数子转Number失败" + e) : this.__StartCountTime(e, t - 1, (function (t, n, s) {
            a.emit(T.GAME_TOAST_CLOCK_UPDATE, e, t, n, s)
          }), (function (t, n, s) {
            a.emit(T.GAME_TOAST_CLOCK_STOP, e, t, n, s)
          }), !1, n)
        }, a.StopCountTime = function (e, t) {
          void 0 === e && (e = null), void 0 === t && (t = null);
          var n = null;
          e && (n = {
            key: e
          }, t && (n.data = t)), e ? 1 == this.__CheckCountTimeState(e) && (this.__StopCountTime(e), this.emit(T.GAME_TOAST_CLOCK_STOP, 0, n, !1)) : (this.__StopCountTime(e), this.emit(T.GAME_TOAST_CLOCK_STOP, 0, n, !1))
        }, a.__StartCountTime = function (e, t, n, a, s, i) {
          if (void 0 === s && (s = !1), void 0 === i && (i = null), e) {
            s && this.StopCountTime();
            var o = this._handlerCountTimeMap.get(e);
            o ? (o.StopCallback = null, o.Stop()) : o = new r, o.EndTime = 0, o.StartTime = t, o.UpdateCallback = n, o.StopCallback = a, o.CallbackParam = {
              key: e,
              data: i
            }, this._handlerCountTimeMap.set(e, o), o.Start()
          }
        }, a.__StopCountTime = function (e) {
          if (void 0 === e && (e = null), null != e) {
            var t = this._handlerCountTimeMap.get(e);
            t && t.Stop()
          } else this._handlerCountTimeMap.forEach((function (e) {
            e.Stop()
          }))
        }, a.__CheckCountTimeState = function (e) {
          if (!e) return !1;
          var t = this._handlerCountTimeMap.get(e);
          return !!t && t.isStart()
        }, n
      }(d)) || I);
      n._RF.pop()
    }
  }
}));

(function (r) {
  r('virtual:///prerequisite-imports/abUpDown', 'chunks:///_virtual/abUpDown');
})(function (mid, cid) {
  System.register(mid, [cid], function (_export, _context) {
    return {
      setters: [function (_m) {
        var _exportObj = {};

        for (var _key in _m) {
          if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
        }

        _export(_exportObj);
      }],
      execute: function () {}
    };
  });
});